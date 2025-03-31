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
    "3HpwDEJ4gzgzto3GjKh34ohrGQ5qt7ULNXGeedLrYonknBnCXMbJDjjDn2RkYPfQVE8S725fRVqnv8iPt3kkJ3HS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xcFATnubgmJdFooTaCpBMjQYbKfF9LP579tFELoVx2vXm2N23gWxrzzS6abZTXpKfGGvs4hK9DMkHdCCojiFpcR",
  "key1": "2u3up1JU7DE5opyuPMgeHeysH9EsYgJWSV1ESf65g49pffCd3ayb3M3LemcKBjzVbGKbi4oN1ULZ97BsNZJqUCE9",
  "key2": "3qjMBQkqgJDbyKC2MLCboBAABfUdn2a1s2Ge5Ydsacd5tPG7sfdnn9jfmQcL3eAoKBsQDMkKgN4yuuuUb4sa72r2",
  "key3": "G8rGKS23rgBPjr8apZAW5tFMHnugGHmJ4UTUw6nvTa4VbUURoSN2S6Xq7Tmp7NHt9MAzmkKccniTyHqedTnrDbz",
  "key4": "552MDocoG2aA1aRMhmrHBAxKRvXyDkeqWokdHckwRBkBKc9k7usmCVyidDbhMQ8Xum5As5MgPjb1cqhdyHYvkLNf",
  "key5": "3oFuB51L3WCEtzo5rBiwsE4cDsorNT7SLmVTNGfBditJGKJptTq2YGiM7UQVJWNGKQj7yUCCJXuHP8U5bFEQRM2w",
  "key6": "3nR9i4cKwD8S4f3LXfVhHLCTuYpQ3XPGakjVALCK3uuwfAXncAHsSbDycoCLTFjShYa5e23dVttzgFPZjGoQZ2TD",
  "key7": "2dcrDa1wjR1HDArqUefefcpfWzB1iQWxdQqq29oFMLu9trfoG9KnZQNyQYWLmWBcu4uK5zxokhKg7nxEP19xhTKJ",
  "key8": "4qNGetBZXE172LjkQ8NxzuTBx7Y6XqnY7oNQGcDqwg9oVSekoNaDgNKB9bSmFq13XwoZdw8sjZMbc1nuvExVjnZ7",
  "key9": "3gomH4NrWoL7vnKHGmhXfeiFvrtPoqZPinLfZVSRGAq8UWNrBk51VR8YhBQx9sRTo9raeZ3oKGzsATRLyVhb15fn",
  "key10": "2PraAkw8fB8EpmW6veCogva6RiEcEP5dCoDffQu176MHaDySCT4YSGG4CmbQ8PFNeFgp7X6riHo82dmdK3REd2w2",
  "key11": "4tUFWfCNB6iQmXfpH42E9Di1RSfS9uDtEcUfQJk1B2dojWxt6UVV5YNttRsRaD1jdJdRRf6KkwxskvW6ue1maH2L",
  "key12": "64m8XJyMefRw5Lj1mEU3apEaFUe4EEqkyqXhesZ5wumHDJniAGhHDxNSTX1nxhftp9WaZmrgvCjz21V23qLcjPhM",
  "key13": "2i5Z8cuNis57NvuTCDBqtzW3E3aY1tcBXtYco6nxDM9eVBY36Uu28R5bsVaTK3K88Bj12iDnywYbYqZ7fDvkt97i",
  "key14": "5wiJ929TSJX7CKEkCMkrJ7PY2LfGW5exSgNDyJ9kFPhcHB5TjAbzQeVwEjvMJVL4b2SJLKTaGdJ3DB9Z3x4LQSYq",
  "key15": "2LX4HMRFCRJep7ozvs1ALpQxqhtAFcWTUNT5FPNNQYQBajtZRE1JzzrZeBkTxNtrgSGBCD7PH3oXpnn8uq5kABQu",
  "key16": "64uArHFQWPpu2HiemwhG9j1bmPzp55kpi5QWCCj9L827ECvH2C1nSk1T6F59WWBUX51rGKjiMiVYWpgdCDxSKPqW",
  "key17": "APC2JoJTgVRUaaQjp97yweio9uYvY7MMHcs1DydrPWtdKPWfUVAjCXA7ubPp6UZH2x7FowajjpnRZMS1zp1Myud",
  "key18": "2x6RU4BriPr81AdGUZAwgLqXam6nhbcQ2KGcVDZheR1t5c5tQtJZLcP3PoNaapYGgrTWWPLmNJDJmrJawnjzhg3a",
  "key19": "4oHSiCgtte728k92pDTPgM32MnWQxFLDQxFCXYFGwVJzTF7yZT8YTcULtwS7WAfBRLv6py7LkQD7ujUizPiGcSTV",
  "key20": "2ezbYPQAKwVugChXziBXsp95coJr9z1J1sPB3XppPUzrwcsdgCJDvqK6inSfnLYpEx5WUddb5RFN29rNHNiQrqhJ",
  "key21": "24wAkcyqvg1yQv2ZrqzNzzWnwnc2uzn3uQ6Agxw1EmwCgzi8KDW3mNFCwt9pdHHaF61hFJn3yyrjSmd2aXv8hx4s",
  "key22": "5fb2Cj9eTk22wkmYP8VqqSgjgoFEUVn4PWWVqYLAQHLxqbCFtk9sLQaQCThjFAowNH8o1nSrNnJmGAEu3N24Wmzy",
  "key23": "wdJnEv2hh6sCtMje86BSBzztjaMguyauZciMkKjBkg1NAKGEWrUccvBx9DPNGB2AtQqzW33CW6ZEwi2bkvKuNdd",
  "key24": "TbTwShb6YgaAVMxvTis3XcAQ3z1fUrZmJiaEvVTX3cFQTSagkQyeqNRsuhoQkBXArjYYSeVC7Wvvs8XB4JmaaXv"
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
