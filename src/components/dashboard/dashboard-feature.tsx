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
    "8JBEQakxBEGnK9sdDnfGnbboSAPKAXLu1U71h9XFEKqbdgssanbAz3z6MsPi9aDAJTpTF7NcoXq5YvwVDJZ993M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eBpXoAiS59LKW21ByGdqgCPszmiwSdKnn2Qtc4BXUigxSUR3yQGBXZse7VPe9Yt4qXSx1PLhywPNPdiF4wCJpn",
  "key1": "5NagNu6TBLZf975BYeq3Jz4ra9eLTMz93DJXK9jqbXaeAzXrWGvF3HimxZVqSDdFxZQugagZFH3FDwqmGs9WpcZM",
  "key2": "RwmhfW1RCbEkn91hVrpm3bNrz8KvAFgYUL4Qai1QYf9mvXN98xxFDTUu6JHQQ6Mi8AXktxrBxEo6UKAJeFnDCEK",
  "key3": "4eKrwghCrPojiEJJPrEztFxgkPzR84ykzyRBNL1yhibrTutbZ82oiwwQ3Hr13oXhbQc3uo8NcTdYFFzGkYEDzTuq",
  "key4": "65rUS694bL574kGiP7rjweHMvPBWPh5hQFCE6Hgmo4PfVsbuAujVRG4UdktX7LpQEbDzKc6w4QBmNavuaCiSLmTy",
  "key5": "2t5Z2X5YGDQduqUd5cTEaoY1bPpm8vb1F2n2LroKXug7XShUNHU3ifX3RBS8FJndBSLbovsXBw1aUF6tYQoYDfCF",
  "key6": "62bJcmuEzcYkqzu9JpRFnoRtQcocsLn2P1ZGrDGb9k3vryRBWFjGWWPqRXFNq7L9Eg6H2CAypKv3AoB5U68xbUK6",
  "key7": "2MoAkAHc2Uf8Zfp6RHa19qKPSnvZkfnCfvct1y3MhBzT53emQRzbbnJpsTo7NNmNrSEF7Dy6BDsG453YWrcpeZRs",
  "key8": "eZYhNSbDcmZ5hDqFhPXjp1peUK1fDug7zRfvCf1uTtj3oCPw3hxZiHqvkPKjb75LDJagfnjPGisRPNuRW1Fs2N1",
  "key9": "5PdN9go4dJYdjJd2A2c24gWRJZyzxfWiM1yTVm8xtEiE273BhJTBwdB2zPQni5ZyVzhUBNS8HP96cxsBh4GYfaZV",
  "key10": "3SevFEWmTr6DxAwFtVQYM7TfMpxxqi5KaHNcyhfjs1NCfkoHR2hMCF2EVMPbhF9d4H2wsjZAz5wqkY5Rsyg3wQYC",
  "key11": "2YSPR66vfL43pmAbxCaymRhzDqS25vyStmPJputntGHasMxzU1kXwXqaYNTLMSinjU8jrTQoRsgnZoAMUnb9U2Dm",
  "key12": "5WAikei9hX1NYExWALfkgGhd7XwrbVvAYFq6Ty9yTLB7fSPFqF768ow4fdtLsc9JrLhtj5TkzH82CEZoy7SAU6uX",
  "key13": "3NmvD55qSnmmQbmddXXeped4unXBU3WhTmDELCQTCmDEdo9tbnWKDJAE5P2JdEpYvF5GoJ5nwTHjhKjHVcd4pbJm",
  "key14": "yBaRRM5pHBpADZT4jYZJdgKSj6EXsebJmnCz75gKRFHGXDXXgzEupHRizn54BcwM6queF6MooondyWpHNzFPT4r",
  "key15": "2y79MuJCciiu8LC5GKfaw2Sv37YDGEbdVq5QQjBnZXwf1gnWJtHvKQrvnpGHfxDkH6gBkUpzFDfdar2t7mkqhR69",
  "key16": "4P3amuA1TYFHBXjVqT9Bp9XZefdq29Y11nEC96gvtUPy2MVo6kguB7J5ddc6dvLJXPXZvSmcr9nmQCKbgSBKEm4r",
  "key17": "sJaX7QkYgt3bUhQihb42jbmezJbkjy3zmrofzVpUCSNzYkjXULyoAJrt7XZv5AV6AbTHYkAaEwL13bj2zQmmEnF",
  "key18": "12A1SW99pnRgQH95zVXMnK3CoaLcHYemoZkrdDWzvz8czNThsrGuz6b5pYohQGfMawx6Re9FpMKtA1pGdghuf3Gg",
  "key19": "2Cudhg5WbbxQm9iohmnry9h6MeBiRLYYupaRBrDWao1Tu8f73j6T5ki9wKoVWfxukWcUoM3BphkVc7QQDnBroYYb",
  "key20": "3EdLmqUgDfW83LSQJEkAZdkVmN8S7bSWQNBgK2WpCik6utKSKJmkcWpLuevQqtrBDXNs2zn4XLYYpP7RswUJyKhM",
  "key21": "3WddJsSXgqNcEyMVQgvzMRnkQpGJbRWHacby87qzDdEMpV1anFnFaFBGuyyviVRowPtGbKtQCotnf6SAgLjhocAH",
  "key22": "5Sh9rCSGRiSHLPyqXheJEuKbKP9Bthc6Jv3c4aaSwizEatfaj9N53ssQmD3CX1YDjcnV8svfZ3ZbL7NrXvTDjSgE",
  "key23": "4QeWtAfQ7CriJpQKSZpLdRbxBoe7e69et6Fg7Y8X5HAZdRdpnehoxohbQRU2CD73dnbBFcR3r7D8q7KtkGFmP2xf",
  "key24": "Vqg1waXrMdhoppcmwLg9rsjMoyTmj1uhgiaq18p2RgauTk5JCouwZM6pfonMSrj2jkTYnsT4Rjo6qyjkQfphFUm"
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
