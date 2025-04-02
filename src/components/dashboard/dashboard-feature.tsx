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
    "2AVm33srgkYjkBuHbnd22PUgEP8CNX5DiEjicvXi7pfbjhBT9WnPjDi1NNeBWUa2JVPjnhLKpygLxZbcPgps8y97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGJVy2DKjPEF3TcvGH7hEXQ8Y8a4B6H3mNx3UGgQkmBrX2EhjNwBDJLi9k9fiYNVFpSGwmbQMmW7P3u5TFjb8Qu",
  "key1": "5PBZtPVM1qTVzfXmTpzNiywCukkiJts7kVBq8y2LqfNkVekCfjnJ2tqFSZdE5iHHhPDqXLaH6Zgv8MbN66e9gQM8",
  "key2": "2x3bkBApp6f657sw59rPJ5QTWm8TwvWrxcmHa1DzaPxAG1HfMaq2YFEEVzR1PjdAswraELRwyrFcq7ZVv6Z22tCb",
  "key3": "5sJ7emX8fee9iaaUGGuFLfLmrrPGu56KkZCcnRxHwNAYvQxHmQAWSwha2iszs9dvrDbQMtXC3fzjA8oj8dtZfoid",
  "key4": "3srEdcq44CKSPRfwwSkRHzSHAf1PCHXM9AJNQwhXcVCaUFXVwSx2HQBKRwrJmG4o8bKqRwG68YT9cnJ7iXtPPi9G",
  "key5": "vHp8iSFKJmNWsk7Z8CjL79RGX6CmWtf7YRRRpruwWk1m4SEVKeiWtjwdUUFDkYKe7KeDsthdobJKGgJPHkA5MA2",
  "key6": "31uZwwWbVVHWNW5FxMMuyjjt1gSMW9LXCT4U5bAFjQ652dikeVHSPH6chGtQUNRK3AveW8nSdg9XDvB1ppwb8y6G",
  "key7": "3u9jcgybFppQ1Z12cKxLrZPxNnYJ5xkWSStePNdHfvXWM62HjxbQuMhkwXhUbZNjVBi4qgpH9zs5xjqGr6ApwTy6",
  "key8": "5JSscuZeQR6Jy5uVwD2i4ydQqMc2c5Uo8knSwtAZWRiapzY5nE3nrPXb5BXx9HkHumqLwwGWAY1Uq5LYWWv3jnho",
  "key9": "4Bg57RtmNTptXJr848FLbpFkjC9Pp4hm73TGLhJHAWRnK68UyY5ZL9Hj3mdzxVQGPjntB3by86EPbsVVV1eLWuHQ",
  "key10": "25uY3ZnXgiv53SYnfNcCJKs9RZjj29L1PgyyuEBZSujv5DcuscAEKuHubaEggoEGaD1GEsnwysB7JZV7s34mYktU",
  "key11": "5UCg6kMvUeqiHPK7xjhYNpsEzLoMjoA56godkkZ9NxZmdJ2NQYLqAiBA7op7kPnmPUye9BQ32J15EpkKRceE7JNE",
  "key12": "qmypmetprMceYGnApEPM1nj5XnQHcudTmmqgsPfDgB66kxPt3utmyjPjfBD71H17Wp2qfAF3zsLqUgviekqeeuU",
  "key13": "25HezQ3C7u8oYwkdxrhcRp4e3z9oL8eRX2rsfzacige4A5itm86PizJ8D6QtHt89P445cf2cyfs1ezGTguqRvdaV",
  "key14": "VU7XfRVNEZb7WQzvNvyeCUFYXAhibzKmb31TXuKB8jRncbqbf9eXZKhXLpQBRuwgZYpR7M7qsvr7KgsVR6KhKEJ",
  "key15": "4eR1KcHAqE9Jq5e5VH4GptE1soTSAxEoAgK3havKRGdLe2bdZPnMKKDeQ6BRuSBPx2SrC1tKSjrecEkdZR8ADTTB",
  "key16": "3FjqbKLHvAYLiVHaYiJKGRnDtmRR4EfhMPcD1iZApxwRUFoqbZ97xNwWvnobziWpp6bAJqGAw3KKdtjwQRj2vitn",
  "key17": "4zx3oCEA5wWvnv5bzB14jjqi6QT83mPDygvhi7xr8xyHXWpbQXTzwc6ppwDx72bZRnomSCAxzAoHSkuEbJuvWmBx",
  "key18": "2PXsJAEuC9HzdYEKcFKW9PyRLfYYAiDWfEefYZQspUtrCsLPqtSzWiLhcDhuPqPe2AMrBKQ3uLDA8DnQ3ZvVYhYu",
  "key19": "2tQgYArPw3ujxfFHHFmy1gzN4Fr4nbb43fWZHXLdMJJj6u9Ed48H6SxTD1xdPgmgUMiwngJg23SPkzKXU7d5JrvC",
  "key20": "eY2yKBbcemYB68hbwXE34MzC1oG9CwobLP52TThEDseVRsP5LEvid6e28XETDK1SfkdjTjsnk2roZoHRrz9K12u",
  "key21": "5eRzoeU7xAJNqKsAjqTy2bocXjSxq7jvGM3j32znNGstPqfuB23Rhsi8KGUpv5FFqSnH9vBSmg7bDm2Y93rUYtmL",
  "key22": "VVicXTGGqZ6Vhc8MXTQUL4zmz3oFxBcrKuLt4oaXPEem4epq4d5FyHFDxFUB6xKLWfRAyghg5BbeQWZ6ojgFFJD",
  "key23": "5Fn8Urg4ez5SUFiAY84jHPLUDiPk6ZAiKHtzbudZeNVSf9EVF2ARLcwoP4aqTvjF8xAcxE45Pcb7FkpH2SMfLXP8",
  "key24": "3wAcuP5KyGZYitEL12msP67MDVWbaJrWibX3QXR1oVVZHwxHULBKizK5KJLmpdZyFnPYZY3qjhwt2q6wFwdyRAeK",
  "key25": "3Y3QoAnsJF6PQcFxYFstm18sKsSsKGyTLKsFZvEaD5i2xAegCHkZjmmfyxczzD8FpNqQ9c72MXeVbhBAzAgW2p4u",
  "key26": "2akVitpqdBk8zWz9TqafBwrvXUZ1m3cRmNdScia9jhQK3DZmVmxV4FYTg274fmgjSGjCLbf831DwWf1FXv14HSNY",
  "key27": "3g7tVPsFJa6dRMehGLGxNvJ3AanjSkuPb1MDsF9hNA9EQTfR2WY97HEELvM6cxbEPB9b3qRSn753f8qY5m9Hz5N3",
  "key28": "5fHuT4Yq8PuomVgTjMxAm8RXRtkc5kh4a6GCC5VkAswDr9GqYwh6eHos8KSX7MiehRmQdX8hecXnYEessRyYppx3",
  "key29": "2WPu2opiVhjGkuDyWYqR2Gy2MErNxAafFpcdh3LGQXcSuKvhfgydUp3NwgaN7E98QgbCcDN8mt3hKLs9C6FU6jgR",
  "key30": "ZjbRQVe9Q6uRNNrn4w7ZYMiN4qZzY3HCuNXTWifnD413X3cq3ccfeqrj4ugGFNUu3V8rgEFfEnhpLpJiSVpNzP9",
  "key31": "2U23nusUSWXg9trea3Zm31pxjbkwfuXjUcNN4afHv2KxFjJrjqQ4X71WYkGNojy3Wsf5SrMpMACDessPA8TwSTN8",
  "key32": "5hZRxToNFqJPsRg4FraZEvFhiJLJbzwNWnGrfYc8hy7jxBwhD9FoDQKNsvciC3TwXfYnuaMs4RvprfFkPqyHSKch",
  "key33": "4vanHET5A1SuaSAffWSnG2z79c3ukEKGYPQ7x8EoFq2yS6pGP5bkbawv8JER5Cg6oAMpzhF9qYhXcUYJLwY6fPdg",
  "key34": "5qsjUSzH3UhdTS3ka8zvbB2iW5AawcPMupeqWz9BjuGiZG9isNYQKNkRDKUvZPQjBhpw1QfMxEa75h3MiF6iB5wS",
  "key35": "5BChKzwbvrJ1joSW5zTMQ8NFsdXgrgUxDRjhzAoTGiTzAs1rgVL6pPjPXpVKx5BGF8bm6qa7NvQo5xZJfB6ebBhH",
  "key36": "Nu5Vs2YN7Db8icQitLFxsXqUafsuUBsLxSTR2Ea7sbvxjUvWQ9NzW6yxXbaydcMevJzHojRJoTaNwT4F6PNNATp",
  "key37": "5Hzj8QCA1vy7udEGJFxKRVbdictjqRs9QqSGR1A25MkS2MfgsGaSa2TVqP44yHGJ2qwJg6htm2qLG4eLLmNkLair",
  "key38": "3avLy8wjqQMuTqevPd6zvySVhV6Xaxgq1BqV6ApqWPH9tT9iYQN4FnFzo67xavy2mzRQsc1zruyygAdTDzwnvHpq",
  "key39": "4NwQoJq2CiFu1RYPvxB55VUqH1d4Xpg26tEw63ZUk58qS9qQ6soWb37qgfckNGHAVQ7McMrSTs1GDstKZVPZE1b2",
  "key40": "3aPQnsAvtgcGWv6hUc1PT4mfLop7JZ7JemQtEFwFMoFRG4v87orUpSnzH1HUHBu6W7X3r1qrqtbUrboy7WNQPnju",
  "key41": "5burn6t6kkHrzhYms6a7636vqYgSjqNpzQUbWyKD47U2xSkFLw3ztaDQCRGcRbpVxFEjDwLTv6YmZGv9enVZN4aB",
  "key42": "5J5YynDhJ1yhir5tU9UKjyMAYox414qWA7yDRP2G6uKG2pcnx9vscYGvrENWTFMKVfM8LhFVC4fwMcQLjETg4tAu",
  "key43": "59GQkCHHDxVdt6GMm7e1NipUdpx3eUk7ZT2pEEkoyJSepJMPF8WKLoX4e7VRjJERxn2WndKaGpuQpgGbRCrGgXxB",
  "key44": "3nZW2S5ML6PdxTWkSHxp6K3GpGDMA14zXUe5reoQ1NX7hqNfEYfKT9QQCJUqyGXTtuRhTgGrs2vZ4pCPnmYYCGw8",
  "key45": "4i2ZrYhiiSjxCp9ehun7AYGuWGeyvF4NRUdEvgXLvsZvPtjMiZ4yjKuQzjx24bQS5dxkH4Ng2rUmicDg1JqCWMwT",
  "key46": "5k9ubkkU7xqwg3TSYRZJEsR5QEp1Jggpaz3571KRUA4W5mkcjB38sBd4auVXdDeRYnmPaFiXxk8sF81MQRd2CdA2"
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
