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
    "4xXeC3T71JXDt6fr84usMzSjxSMFCyg6r7ufi9n7Ugs5FPC7Tkwr8VuX8MEAyTfvwCGxSD2CRzehiik8u1P3b4DA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1yBV3QwFMNv1EKLxLZX3e7KCv1H5iu3k2wv8aMZ7XJcfYdPJz4JBmEPBrX7bTiaAhdJhWuv5y7P9kwmurHFx9W",
  "key1": "2JoHJWGget4jn6yGLUsnWBfhNNaoGg8o4XC9EkjrcD2KF9ckoMwQLeeFCaEDcpswmfCSRsAYZtyZg6FJtfkSmUkC",
  "key2": "zAA9BktZfpsUCRCHkjuWZcTD4zkZG59yXp1GUASDnQg5ptQF65SMcwBwSXCL8LEdvVWW7ha3NVABHXrCZT8fdmR",
  "key3": "5D9ZAGivhNFZy6hqrP5ATCfhXGJ6ktxpbJsYxSfaEKXXyFVw5W5KJo3NeyYr2YVMysEXgv2QS8fvf15PqLuFbFU5",
  "key4": "4heLN6WrwwCkcnShXjfHUVFTjgPHWkezqxQU9wYp1pwSvG2yD27K6tG82s5u5MYEj6yecmZbvtFKBUbKEtuq2FSG",
  "key5": "3NAQPmTyTKFgVAR8or3EYar5tGBNZLAj3qaayzzBFQ8mkZuqNdGfbkKswEQAebUVCMRf3tFvWNu4fMdDP21furdK",
  "key6": "ss2i5eGPX92wRRFLdvXoifnivwqJwwPebriwRe52JZD9t9rpyUKzyYjWWfRLn8sMPmV7TTZNPBBSbhwQZNG7pnZ",
  "key7": "5J5ZHBuyhogvqC1ry5BQGi2UruEaGHxFA6DDZweZU5GN3quqwwszqmwXGMjVpi1czR7RHhLkDoSnZwae1t52qbJJ",
  "key8": "5UvBBDti8PcxntTRxCDjKWig7FfdJtbD7YH675TjoH5eozHFugxTergUVwgbm6MXFY13TqNyBBuWznT1qwPY9v8d",
  "key9": "2Qdjs5Prb8fLfyy1mpsiKECrVUZVGqKgg48zoKbq1UdS7PLcDLv1cCEMf4rtJ7C4yfgBc3nz3jkTdtkXQX66KC6g",
  "key10": "WjxWpT9SD47nZw7z6QNxvi5hhHzwMMuqwiV1Fa4nwuxrqd2gdseepfNYExVbqjhm3QbXDg96X4G2r5JEGZzTX7k",
  "key11": "5E2K3QVbvcW9P2LigUQYCko6ovWq67VJwQqwdQZh93AoNJauphTD5mvx2AgRd5ET7Sm9qPcEVMjDk3HQSyECg3cG",
  "key12": "5WQAm687Vs4s9wunTsGzrEvx9seGwsPUei5x1wxRYxWDXnJW7gnuJUJHboZzoGtQmbpkCKALYUqRCojhKJ3vG1j7",
  "key13": "5guFwFA3tfruB7632TC1H6RZMzjeWVm6NHHnPc3cspkjHcG7eY7R4SXaoJwfnaNTA1z75TgNQ9iWHySYxVSxKC42",
  "key14": "QEE9e1jbbrK5L5b2D1qFgjoRBbbnjXLcsFow5YBXDsW9w79WB6TwvAqC1oywZvTmE3HtrxJE9Vx5zN1UGjS4tck",
  "key15": "w9FWTmD11uemEbAXFVHpqDPcYq64Yr2JSRrYHJ3oWE91T4JW4XyH5KDqLjvYG4i8WJzpMuk6WFnVdqjM2MgYc4U",
  "key16": "4Cs13mtmnxhoT4qVfEAzSzmLwAPn9U3zyaNoUQa9bqkkK4ep9sk7MQq81fdoThF4TmYpvhVCKtn3R5xpS9BY9LgK",
  "key17": "57i8ktYkKUa7mvjX3VJRaY3o7rgmEsqpxYqZnqCUawXZruCPFWn3vzT8cQgWJr4rDpwzscShX4fjDTPagVBdqrsq",
  "key18": "5yZXtoMfeGANZNfmpVsxMA4bnRzgRiG9gNs8t2bz7tx2qKatS8aN3LTUQE3Djh2Jnn93b1HvF6pJnnLorA8JRJLB",
  "key19": "3ctnqj6qkQWgYvRnK8QHUPKsjNinr29yk7msT3Ke9vGy6uSZjp5HStxNzWXTentGp4HBEgfUd3FDHHsRUBRCJf4n",
  "key20": "5LJsx4tbmGw6awkThmacpy2WauifinRVrvqLL2smJc9T4zdZ1XbtBe9VA1km1psWNFPnLkjP462EfGvueabFDKMP",
  "key21": "4bpryzyMspTEty9rtQe3QMtq2BaQk6yMkNTqqRYqzWEVp571pWG3gooifTwGubdiPaB4ybGWXsi3WxcaQUEKdMpr",
  "key22": "4jDVeJqGyHPYoBqbPDzT8JHRjoDa4dVMNY9wf3nxoxfDGLk9YA7Zh8xZP82YZW575vMpXs3mk8KT73xLXnjxnNw5",
  "key23": "y5e6DEwLaK6oxZHrqkY5YUbvyhNoxHhu2M4oqX4MowN93BpLKMJti5NaBMfp3BHg5rBA7sKuF9Thp3MpJhEokhw",
  "key24": "4Ck4TeHCQ51JGwfxhxDULhTzg5TSRWfkcU99CGZ38cpaAxAiaaWSpC1hgFnCs18bvfwriCtR4jqxhC1rPueqWLFu",
  "key25": "2ogmSVBpCAWWx647WE3Fd5kPrYL3JQ4uJaZLkU9XjUM2G6rPRXC4jrakig1tQvmSLsKxKQKkyL1DXPRv1Wpjv86F",
  "key26": "5j4YxsdeKSif57FTyZcXhaZYvTXHPfTbJgHGUhTwVBVe9nWVXNkD7JEtsv5ndardok2qmdnCSLEvvzEPNKNhmTio",
  "key27": "3K8FXu7zwXTaoyB3MLmgbNcJqkavpW3dvE94pqWdQ7yrdss7EtdaeeQwQUsRNqPZehEMCxxnKZX7ZXbLBNa6eKqj",
  "key28": "3MGCdpAmSBTSiQ3P5m68LLN6qZbY9NzuK7347ca34nXdxtUy4mwHqgriy1LozNo2JRMRLtm2h6UrASXZRMssP118",
  "key29": "2zJ5hz36Zn8gUz8ZF7rHhPV8PCgQY8wZw93ijpvbbKWpWcRyKJfkPkDdiwB4JxiaBPisNw2E936qKC9YPBrByRBi"
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
