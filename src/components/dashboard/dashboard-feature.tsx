/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2xoNpeBsuEd7tN1Cen7vKnua2ixa5W4vx2mZYiWS4UDY1HdbdTqxu2mhS3cXU5MoS5m8MqSW2DvtBA81f9b7CnBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CmcfN4aVv1VMJuVxLVdKhLyqtnTYgmePD5YLVjFPz3UkUWfDJpZsjhjr6cqKyYBXQuBrWcu9okGUsHmJj6D1pSR",
  "key1": "2wxoGj96iggN4M6LFbtFqnFFQX8eyzGYo7N3SQ5zyrvXeEjdkK1vo6etWwzjEoWxSuqcBhcnkCpRVc4r8ANgWpFY",
  "key2": "B7CSaowYihyyNKDWGn18FkmgN9wHfrsXvtaeXxi57Qbwf76YAZuGdqwHy2ccWLm96PR1eJFVim8RTFtXDSk8vqS",
  "key3": "66nwDSZ63Zin6ucVKZVvky8ZeUvEqFianUGcfiEfcpVF6FMPqZvGdj1gCQF8rePwrmDrqBGPAbRtZ44FMqN8smVq",
  "key4": "oLY4k8gweq9hAcyU1evyXy9T6PEhJey9qTgxVmGZwvysEFHMpBEvsjRycPf4KyWnZcfWkXt9gKaDjysdbgqzime",
  "key5": "4jUBvpToL7wqE4k3Z9rTeb6X55rjqaE2uVe45LuUYpXeb1nVHQpivm8RsFqwNmFZMAMNrNZ8LYU1qtJ4nA4KeGR9",
  "key6": "N32JrWXGWRNysSfWfkYBWLkdkNyxzxo8x7VscZ8VCjHZBiqyshffni1Xj7G596tyUmTNaFmKM7Gt6QRLXAfkRBN",
  "key7": "3eBWdQZ4duqHWFziAgYPBKpo4iVLrnokk62XRpVTTeMczLEYCZAnQ6VGoDqbSHktPbtKiywwi2MBeD2Ejy5fsYHv",
  "key8": "AxxkHbpkGRZeaHgJRgwN1ekceyPP56UHnz1yXqbGPn8K5yDdqz8jxoNBnoSNsEWUiX8bWoNYCxbYByqYBNCEfoe",
  "key9": "5N5qiK3qvtPGeSF6Mhg6RYRwuWSUcTNKYswGrc6gdwHkLyBJDJVvZpwpHK5HjSng2AyRhceafjJWANFuELXC7ZML",
  "key10": "3fVrySyBYVZor3Y3tD8wF4tDrvFjfXf7jQh3uNytNm1rERbQpoqgrV6CWcstS8wE4feU2nGTV2xGwYWqd2472t5m",
  "key11": "2zPNF5FBr7YorKmpi7zi7eZe8pr3nJYsZu4rghPpYYhwSXEq5qvP9nQeVCVCkj8YBgLnfSTpicpqL9wpzgBMoxPg",
  "key12": "2ZA5De91H2WKyQCXVySpFQLxPc9CRSqoeyG2DZvYwEJEEf324XrDg3VoawSxB28uNrzDitcqhgGpwSQvJNTz6maV",
  "key13": "34jgtvacShW4mPZjbJunM6w2cAwQbBD2u8V3zfr1yYCnduYeJ2w7TPD7bWH36b9RCHk9Bzgra9e1EZkUeGfbRYhG",
  "key14": "2m5QDEJAnnvZAS5sUgncJfMjKhH1bmcjSUPPKJBZ3ADtZkcf7saJAF6gT23cTpWk8xMirUhKHdoRp8z3zLLnqiCc",
  "key15": "3BQN1KcovCeRCZWcVYMGsBBB78DRh6gZ55uMCRMBsVbxbu83uHqb6VvCoi9Jym36EhVmfiUDFUS3WnPoV82yRK12",
  "key16": "2fsALbnGRAxHeoX59nTdBSFrNe4gdSAVo1TBHpQNtVEwLERvB5sM1pxkx8PixxhegaXimPai3Zv3qGFMnsmdkqym",
  "key17": "Yi72rEEMBnqgm6xMbnXei8amSL8BGhm6yJ4LkiM8aP5q9dXQiQ5DkwARRXKticS22DNVmDfx8H34mVB9HKmq8L4",
  "key18": "42o5RgWPBSmVS1oUEx1PzAwzXQLCCyBD8G1PHrssAyrZr7mzCLWXMp7PetWZmE4PzGbBQigfMLUBnXkrTMjjJKTX",
  "key19": "3RDjXCMUTRtf6gcxE4iZXQaKiAL3CVBP6YUiEnccvhU4jGrQsbmXQqXdeBPy4RtdofzKR4MLft7minVSTvVBjdGG",
  "key20": "24bCBvmTb1g498PqqVnHmxRXK42UG3tsgqPixoUEtrG1w9HcKspQfyufeUJxMALFTZgxezpp4J868UWs1XFR7wNq",
  "key21": "JVpqTJD5F2htyoiJih1pWND7v42mYxDMnQv9t13X4iFHsDes3oe7ZiX5ntMN2iLMd73fZ8NxtZ6cLdoRzQNFfaL",
  "key22": "ceyFGnzC94T8XtKe163a4B1vNDRyhpezytVFoTWsLtfM9MbHYekUZmqf7YjFbADR5V43bMSKdjL77szVVENKL3o",
  "key23": "5EQFwNBocaQfVbyyHxH6QWWpfEFZYy4Wd5ABT27rYoCDctXgCBnvhu8nfwo6JgStoh4b7fNV4XSACh4of9AtcSLs",
  "key24": "4k6aehjtxUqZ1Vj47Vw3wqhwMCPw1PCUC12XXd3QK3A3w3BVyBjU1Ro5R1fodoPhrjKvPNPn7BCDdFuVRX2kdSjJ",
  "key25": "37Zy6Ttt4M1kR1s7KU2dwujn9S1Qyp6stYrj58SxiZaYCV3fZogC6nRgtxteHxVVURVdwtaE1gSawN3SXukJCBmN"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
