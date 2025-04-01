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
    "scaygmzEeVdBTVqqfZeRRdWsA5cPRJdii1iMeKQZV7LUZDLgD12Rq1W2T3t3XvYypwYAyhYd6cNEk3Citc73gqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Em1JkkBR7aaYVCjZiTt3dYmbvfEeLyQhy2C1LXzTYX1BQ4Xf9t43ks16zftyq8rhEENagp9FyYhtSBrjh6QQhq5",
  "key1": "4VXge9Yp8qTPhSBYGgj7E3pY5TgRZQ8Sn54fREcqZZKzy1apmYG1oFcmKC6d3BetdkXwHnd4wgamqn8EwAFTGxh2",
  "key2": "4qacSNMQ5DSmUAxu1ySbjrHjxRRGeWPTQS8v5wmEFj5N39t1AhHXYUde6jJjQSjH6ojwX4DGrTs9VHSJfCSnvCWk",
  "key3": "xXT4rQhZ1dn5G8V61F1nUfDWoef8W1VfgxPiVYCU22EVnvJYu1NM87mAfSarjU4TVzdv4Vvs2XZTGwi3SucJT2f",
  "key4": "562SiuudULJwCehUVMLgc5coXjzFWgebc9QEh3pGmNs4LmTr4L9YAhhYgNXncfe8ERPL1KJPZRRe86GvXfFTPFje",
  "key5": "2ZqX6bq7rW9zi99JxKJUw6xckmf2dpPMA7nVQm6rUPfW1zAzo3KhsHt2Ym7VmmVfvUXXcsh66xLfaQ5ZDxK6eiXj",
  "key6": "4EHcHqdB9uTaB1y8kczn84f6bwZzyt3HZJPjFPE2M9wPJPA8paNv5o21rXbXTsq9s19mKmRuErYorcGLWMYMQRDG",
  "key7": "36qrWYW5YBnCttu51L8v69tshcYeEKZYo3iQ6n9LxhAZ5f48JJmnT57poWDryhqntHtsmaYqAnj5wQNgXMfjcNw2",
  "key8": "2KkqNtdEcpyN5Fu5GUpWeUyWjzR71TMbai7jmLV3SmffEpTmiNXiXLFfaBmMncVXFhnmmRaJgGpmiesD4eT7Jk4k",
  "key9": "3cktbZyXpwWxk4uLo5r3AA4PncsirgQsmxL7TVefD8rp5KTMcNZUmCokebxZDQK9y5d7foVdeUUJc9riogjFGQHw",
  "key10": "43PsSr1dfZFag9WNG5hxHYP4a5xptV8eajkss5iSLZeBp5tKHFKbUXZBzAf6CL6x4kAyQ45HfR2GvVJeE1AruxWj",
  "key11": "4ixMz1VGojdtUY587gH3N2Z7pFmByyv8n3RfxvNgbMrtJGcNjuDWnXH45wywyZMdaJRb1pL74nnxapp8qQzpf77o",
  "key12": "34gLNRnCFdrkAgZscEvKwvRHqDdYGjNPLn6vHXLMjc9NniAYwiibbUAdFvbg6fkSJKqDiuACfkqoGkR1Un2xz1Bh",
  "key13": "2TYdegi388e1rUT7jATkeFzDmMV7ebVjAKz3XR2fKTWmLW26Hz47f3LTqCiBHcgVN4PfuamW5bNQfUBaNt6y64UW",
  "key14": "5ZV7fCG7PmYHEeerrvcQPxskChDjamcgM2gcFgPoMVRxtX5qy2ieNTUGXYxJ6N7KYeimqB3hqLQKppEQKYmBYqfa",
  "key15": "5K3MdbqhGdnijbtubDF3KKR4dqD3tGRZqcTP1S94VcLqhT4kmjUAnnK21secJNETSr6K81L4gDCEZNKRidzNwzMj",
  "key16": "4sthwDAT7grgScwy2kAaGgZJfNZQ7kcbzmu7XqQZt1PMfSfAfFwrMKdcTfbQisYYntKUQxyMMb5prxheE7oWCfnj",
  "key17": "E8iCcyHzbxYAVYBomyhiVGU9cqGJMJ847RTGvES5HHucxwFyjkwGq4G7CqchkSvzDAZ8n3HkF7975KdBq9oj2hS",
  "key18": "29QoJs6nyJQeBQgVJZkfqhVngo8gmMRJKeH8xwRykkCf6ULDQuuJK89siEQjBUGue8CpYXghhJownx6KAJCzM51S",
  "key19": "2F3SQ92fYo8UZWMy6Z2snJJUeDzVQ711Ev4Cfxfhg1uR8JzivQUfz2CJMVGWR51Ji2awb7TVCa1uXrwSmREjBDR5",
  "key20": "2BvgFkgSoRJBBRwWL68ohf2h12V7FKg7tfvNQeG6UFh71Avxt9e9TA991YtwXFUfB1q1uHf3egYUQAVFZ6HNwayK",
  "key21": "2yH1XdTqB4xEX9yX9WLCeyUdohUozxMShDnpMDGU1fyQFEyd1dU9tCGd4n21rDiE1YkNACcx9uux5XxhNEcXwafB",
  "key22": "dEX2M1k5B6EvjSZrckmzKTrgTBTaPMcM9eWcTiiRGnjNV4dDetCAEs4ecZkZ7SK947PXUfJZGBwAbKMneSkVMiv",
  "key23": "sLcPa5KQ1njUm6USjzTsUPSdF8aBvcEQYTbasTsw1WroMtnaUMfdwuGBWBoCPKSuDaJ28RxWiGC2SGVuJ2kN1Hd",
  "key24": "4VWC5HZZJyVfPjs3YCGshS4MacHgbzJSSLZSXciZ56tY89x7Hi6dyD1aBtxbEkLyP912NYHdUDp7rLjy8yGhpQ83"
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
