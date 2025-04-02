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
    "4caJsSK3cnCPZtZSRbFUoRq1Rs5rkwD6Q53KuNe1x5zku49emzSc9Md3Zw59oypUYXigdj1q7Dc1ukmxadTgZtk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5apHcvEAibmLD5C7EBfqo9vZzm3js1rCPLTNyEhf4byTdrtJx2RFEKGDjeJfa1gvdL8y23QBRZUxNga3gv2QeyJp",
  "key1": "2SMxn2fE6mirrEvEZaVrZRqd94TszVCGouMrGM98naLZMPUdfWRGwaWVPRGT94mKQjRyjSCHWn6m4Vx77PC4d7LL",
  "key2": "3iPpq5X5hYak2ifjE3HoXtkrVj8j1m29EUnMiDuRS4btnSCjMfo1Th46GQPeTzWPnYjAHh3CpyWvjTgcQrf9qZ4m",
  "key3": "3LkprC8ZL9X9ZSWscsZ5CY96Dxi7d8kwErQbtoLzwGEFTuHxjb6EZ82JHwJ75e5iuUc4ro13MtJW3FURT2F8edYR",
  "key4": "2v9UPhikyG7reHbbFabP7etzD5xkUR7ERMMdb6Ym2a1AaAVnf8KJnyQ827jL4nxRKAnLT3WgXV3i7xkmycpX6BoM",
  "key5": "26Ba31W5ZMNubMsVt6zP3oBg6JUgMHXDGEtLSvjbwrTN8goTJmwQHaRKkhLnpYKd5t5xAQRsvhqcZiq8SNvyZL1p",
  "key6": "3FkFp4Z9jYF4DQmfwN7xPUsSJV7UYhso1R3YPEwM9bhX1hjCH6KQK9NJiQdLPauvNNWfTsHSYftevtGj1XNtBRvp",
  "key7": "udkv52xeAG1Cy6mQhmiEGhSpDFfPYTUF91mQREeEbzCsVNZGdZ4PSyAQn2Xs2PXWoiWxHKVsEmYPeQTXKGej6fW",
  "key8": "2R8s7WAo51DGcF48cq6pg4mbWchhRMGqygH6J6Nvj99mYAX8VF8baoGyEhpKhBUVtUgZemJJSNu9sj5u5Uae3ZAw",
  "key9": "2FZiWuFYdzEbeqHecXgEckFjNe287BMniujAojmeWjEEyzSfkmfCa8PDo9E13Wyafmp2eQQvh2tAYYKLKi8rmTfS",
  "key10": "4gibbKvnyLS3yWoYCh2Q5xo8XWqEmiTVBPADB7UfBd85eotaFSGGSd9FYC3v4XoVLTUamLt68faH8t8qjCazYg92",
  "key11": "5uMUkAErsyfD6jpTQJMZyV5SsyDtwkuo7vgfazuK5ioNTyh4FDct4bQiNoWiboFT5wNbQoizGSfWn9CJoy6EyQwx",
  "key12": "3HdpYSDHaQjGn2RLjnweaZSXwpcs9YTzptTuWtHnCUQKEXNP2V2KecL9e47iNCNHnWwdr1XedRdhDan8s8Cm6W6Z",
  "key13": "4hh99ddnu2i3uu15xSBDsPFNFQPppUnKDh3rsanruMuWar8YgYd2jp6MUfaEzdgxhk2Vodchyb84zTrQ5wgCx5m7",
  "key14": "5YcT5tdB2msiiHSHbZDAwQVJ1Bo1dJq8iyQWNXX9r6jUvAWhc628ViHW9mCtzNsX247L68gYGZ7G47Mq8Zuprrmp",
  "key15": "3zZu1gDNHrzNuKM9dT9Zf5LKDErvdWdK8gRRzsdBFbmpeVCxrRkWM3bQKpZc18uetZvuvEPptd6iMR3KqAQEto6y",
  "key16": "2AwLJmroKwFCr1dmXNK9bEWqSTBR9ibGiBiaz1cBKSZ7iB6cFKbU86LQkb3kS4E9voGZDKybcidoNAcSdnZUYeYJ",
  "key17": "4UTtJsWiq2tZtuUHKEdAbsi2U3GKpHiRfmzQQ4ebRQLe2GsKJLwJaK8HYbYRipdU6TJmFzXoTsondtY57SfgVkSU",
  "key18": "4nFCGLNx9GPzjpYRxLzM4zqUdxPsFtgEjjE1XjHySfqdhoDH4vko9TYpynymvAxTVVidoDmbEenKnu8kqjsVwwDF",
  "key19": "4kDMqFMAk4TAjAh81JecrPieJFjQBhp15npga2ZvDrJmsVMACXvDKJkRfiwciJ3oFgSJPt5zLjmbqpYNWrn52d2D",
  "key20": "37hH29YZ45pDCsjLysTNrXZjYtbYsiyKqMz89aNmseGpGiHpjCRvhDcPqXn7HwG644tmzYRDGpGCSsW4ULqKeAfE",
  "key21": "3rehmwMnEhWoVAQkrKKicsXApGUgUgPoWi7D6ZGqPfGNoTBizwYJ4oCmZHN6U1iThWFg4sA1un3iQeGB6Md19vta",
  "key22": "BttrMXuudSB38cXYq5ddpyMA9657JpJ53Mn5jop2ykxsyn2382BWdfSKKPbHU29tbTyuQSVVYPP6yzs7V2Wumth",
  "key23": "2sB7JJhe9uHCgoicsCMuZaUzv5gLkXCpR5Mkz73FoHCcKg8b9ABKZnfccx3nz4DcyVDc5dvz2NQjcrv8WosVeLum",
  "key24": "2mXih2YnDQJwKt256HNjGsns7KbVJWUGmxAGohvqkLdsNeSmYnLR8N7BfVSPmHmKk6oruFecUoiJW8pcM7xKSdfV",
  "key25": "3ccSBbLed5LwaUYkSycr4ppX7BaZ9vyXLvN1VohQp9wzGEyfWZLJAskiC3YcYLFxCePDFk5mFoYc8rRWYf7YGDZP",
  "key26": "KAVkaY4eVUHpSMhJMfri7m7ys8tc2S7P1BkJ29affvvuETWjAYvRwux1gXFw23KaQaDnSP9PC2AoTBHKXJZWnnu",
  "key27": "4jvDFg5G3Bb9HpunNvVfVWjneYGTrn8ydk1FsAmb5jG8NFdcM5NXmSCVm8DzxvLZp7US4YJtNHPnrXq9fUUVLor1",
  "key28": "wNWt3LaQTfppwz7iYoRbvFHPyQaVMAVDv3rfdGnWkASMvjQH44msat4Pc1kAYrHjNBFdkaTzAg9sX6ihXkhHa6Y",
  "key29": "2d53Z2EsaT5Dn1ViPUAZ4c1WHtBX7b6nr7m8NvRyZ9QL5VPnzJSw3vR2Zd7DzjrKboeH8e8UQnBXZYH2RW82iwot",
  "key30": "65YH6ubxW3zBp3ZiTfPX7mmjShzznyrohz5aDMh6NThbP3eCdN9dCHAhDWJ6KwwPbtwubL31yjH7YeAZu92zEFpp",
  "key31": "4Y2mETzQLdpGaenPZn63Tqiscai2rUJRH3f6xur5EtzY2ffXoMGvfqgUfBJh3JNQV4BwPbVXMY9ridL5NFGSTN6p",
  "key32": "4ynpMdmDz1kprUQVhbmdqrRpCWNBRSsZigcGPwxSvorY3WGdBE7cjq5uY4rFk8PHX5D7qgAKiEKpykZX3DUi1W6y",
  "key33": "3jvvbngZdsmvJ2EkXtB2zTy7SrnAURz46Lanfh5RGPoBBJKpk7wk9fmce59xZhiRYFfbhs27kKfvWQwTDLKnBTWH",
  "key34": "2jpoTiVxehwbmH1BYNahqbDJqWTdXjo4vJYhjknDQZgEiFS5KMw56SqjAxC8CxJMSKg4AbFARVDDQ5YxJsDpJtqo"
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
