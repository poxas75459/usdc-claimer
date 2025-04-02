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
    "5xohRxaQvQ3fSU1mn5mPfPMm9rrq7NoQgFxYBm2ZMnSfHxnbp8AbmznpY1zqamDvFkTwigsPfNeZ9L8vGsZjuQyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddLfHdjXzp72yCyRTrapzPXLoqGzPsqJgDoazyJjp8ecsHwgo58zcy9tRxEM1a569MFJaGefyfg6W4p7GuX46dU",
  "key1": "2NDn66sEW6kwnHVHH99XUGGY5KSHZBiW2GD5UrsjSrpBucDZNZHv5wWepeW3nuMfB9HGgxGE64rSRu2Fd1YRpb3M",
  "key2": "5qHMeWUB8uLa5EPVB6HuHJJmgFLvxrLz76dp6izJnmEtPq9J8kA9HXYH6VprV3CDV2tquYiNBzKLdM2nqaf39JYA",
  "key3": "5pvGLLAZfkZJ1h9V9qveYMZn86EsZb4o8bGSNxXUxJqkQwThvzSM1MD6AaFnSPjSQTonGzRxhzgosS4yjF1srQ4u",
  "key4": "4abKkw9U1GV6wJTyVY57Gmh28sCeJBJyf37D3KXZ3kDJVbmhLssT6NeGmVk1Px8mcW3XoSP1qDUkZdJz42ZVaU4u",
  "key5": "3SFZKLvP6Fx8FZKpp134gJe5sdbkDvtmrwXiinQzLQffxFLzhNjpAg2828w1rutJerAwXvEkdz4UH4oFnwoxwDX5",
  "key6": "2iExm1q3GCUbza5uKNVgjjwM9YygaRHtcADyoCvpg1aWrzjrRkzZVQDzNcbRZK6afJjZhoW2EeWXncgJtV56Hzqg",
  "key7": "4ukf4LYjAgYShiAkW4qyrmC3kodHhSQaoh2Yox5xX5CEqpZchFY6HKfJUUGVbCYrY6a6QM915otC4sWsr1jekPd7",
  "key8": "5e3Zai2btgK1zEB99cL5EGdk6rP26JH6D1coBi8fcfpW47kkGE1b2yVmY2phuNqL7QFmkoGek3AoazXiCPHCHRJQ",
  "key9": "2ro5EpbTjdWjTg928WaxDwg3b5YHDAEAYTqb5PKrmjptnnpQatSWDyDgZGqXfcgrp2bvrwmBaGhSvipfBPnVqRSB",
  "key10": "5RNA7wk8GAnkSNdkAAZ3fx33fLMqdFDvSr6kzjgYuB2ui5hytLgSLj2YaqowUxkRwzGp3K2fa5GNAL1GgNvoCb56",
  "key11": "4tRxCtmiSgzfnvWWnXmjRnu4KiRpquCjYj8bW4zPKxZcQFtak1ra1YZukTvoy8XYNpcaXuZhgMWiaEN3SiLLZ3J5",
  "key12": "4SF5nRLr2BeZCX4qT4i8v8jCUTVymWCTjMPKE3w85Nmb3e1DpZoGWpozVQqM1Q1xNxQnYSHATyMexoCuXUWLRu65",
  "key13": "2QcumzvTA5GvrF27Jh8jH4pTgwbLnnE7uMG9Yoj4NbepjP3A4NN8f4ubkDqHZoG1uFwmVDCvKpuXpMXsu68EPXa1",
  "key14": "2k3GNiszi2SBCJWncNWzGfucZvRb9n4vFj4NUC2fLByaxdWkXHHNc9T8DMbf2TT1Y1ytkD9raUvSWKtUpioqyGpq",
  "key15": "2h2pZML96rJLedjfrugpRxTaHRmz7GUvyQgjPPaqDxwyf1r5VunV76vFmYsNBqNBKJUTU2xkNUTaEN6tc4ZzwqnG",
  "key16": "2v3mHGgggNU43qGsekWJfSAQWYj9y1snR1jT48wB8W1jqcMdM2gmjGg7gUvLYJ3sFCMkdqDTh4qvcpNyxVskXVrz",
  "key17": "2UDwc6cLcqDFm6UVcc83WEhydPxC1ivcZ2B7sQoMzASRXJ9aPtXjZbd8BHTjc7AjdUHogYuF2sv7j5UbqJWxKwNA",
  "key18": "xEuYtYpPce6j56EzZvABJL8P2zsaEQ6m3o14vnUZZGnGDZcTTJHK482prjcqHGpF4SPrsvwJjzq2sjx77kPDVRk",
  "key19": "2C5o3FQTMmxdgQuMmzKS47FaGcrqC6xf2Kxef7SvJrmegZAJ6ffzwTbAkMa2ky8d26N3SATTn4ugiDH9gXgVQo45",
  "key20": "5ghXTuA6LeA3YzVb5aU96tn93WkvaWdxYkbxtzfcRsFDtyp2Pem53a4zB3cmSYifcqPiUv4QqB7N9FsRGxGEB8oY",
  "key21": "hUmUBVkvrobW95KocadrHNYt43cJ824KV3RjNjjpG8kyo8oRdCp4EjjskpxrgYadqje3irG6uSzhDJUTCzWVH5a",
  "key22": "5sLBHvd9XuvhFD2juEwS8asUQErewfUMNURbdh85KjJB2e9UbPnPERXbVa4AVUyxAhF2yDZnQpEhXCChYNKDRo6b",
  "key23": "dBT6aFjb2V3NACRrFiLM2ZwcxrZVN1P7jbdwsqEAwb3xT4HwqtTrfRRYCdWHyysmuMTPFvNyKB5XwW4bAWgo4b3",
  "key24": "vimhGD3SPmF8PuZ4uYfrzk7Z3p5JPkxa9oKNGfLv7TSikDz54jt7zNQaUGch13WAseV7VzJNjXHVEfGuU7woB1n",
  "key25": "29jnxiwoF9NFBNLFtPVLsRcdVKksUteBjDMQtMa6Gx6FK2ixnBJ1mAZ2M8JE37RF6mnRWmbU5a7gnv5SXC3vVX3J",
  "key26": "yi98LUbeyTUYZcRgfdubvd2YjpwZ1eZaUvgBc1JZV7PoAKq9At9H8XLXMv9M6jwhXCk5aC7pW8Qfj5V5eiGCJtk",
  "key27": "2TJH9GrPRZo3w1U4YJb58Xeijv1VB6fZnN9fxJL3KJQV4smoYEDEvCQGfhHaWgHiV7duP36GEc3wvjqFwDt4MK5J",
  "key28": "4gB8BZb7v4GAWj1AGZMw3bMw5ZYHfzFaEEd1YoS4H7jcL6c9h8VV1YfPhdbA2bQD4Fu5QJxyaFH5NdrVs2CQarQE",
  "key29": "2JHLaRUGL42psSKxeq5tS36bMe593G4PcRuQ4ZkQUNxV8qmpLxScYeWhMybGCQJY5tHDC4fUtCGii17CHagYfaZV",
  "key30": "2jpnikMNtygYLNVGFPMdTsn7u2RioSJYUGhFv4mjPei6g878RUKLGkpppeeRwFCC5P8J25tmK42M6EBPJf67wmQK",
  "key31": "zXqa8LmAejjCZyQdVeC6qeKoahCMATMCKUY7VxjJ6wgn23hAQgBEFwgeHaampNNaKpBkkJwGrZijrgjGEHeuRSk"
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
