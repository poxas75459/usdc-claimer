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
    "4SGf8uNs3uBpiAsCutnKQ6MTBBNvV1UMef3pVMjv3EhNYiswz9q4R78ktxEqoDTmsRP2LStcdE8AhsLNoCzQVDvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itNKwRXJnaPbTofimQf6WbFX6DHSdpGLixWebKwaQyWth4XaCbSgNAsdXvQJbU3CJzppQDYXZUvzCdq9NnGpA6e",
  "key1": "34YhKBXGR3Dy7nt57wMX9tGyLXjpvYPBJiURGhsbnQ3McbqSANoUEjNRTXeAEv6CuPqS7WnxN4njmfthvwEmC5xm",
  "key2": "2QDtFpFX2JzH2i3vLycyu92E6uV4wuYFP2xnkS1XPmJFCKenfNW2R9t6twiobk7xVi3QW3pX4cXzhkofDD9phHak",
  "key3": "2yDWLgTXebTrs2Jxzec9rvKGd4W1Z8Y4dEa6XwZ6nwyJSAEVEJcL2XQ7WxvRjjvJZ4d4pBvM6y85SkDzPYd3c2LR",
  "key4": "WsDfmhKMAArEC9M1y1mSpge63Yew8o6fwidQg1NqoSiCENUYDrKCXjqTTGVUEzT5XuAdZtsibTxznuirceDpSUf",
  "key5": "4GU4eYcpcWGte5w1oSdJL3Ev7dko845Fh61DidyJjdBknRBfbn8i2vunysFspfXmy2rJxpkYZRjUGH2ngs6S4hxx",
  "key6": "66W93v1bU9CyawhbGZWHFxEhHgfYDrXxKTjgMwqemLuinowRKWPSNTmp4R3ZVJrRtTXkRbuYwkbr6ya14XPnZxyp",
  "key7": "2DsQHCuV3eBDavCyZqfhxBXKGSJWwLpcr5iCX6uiEB5gUX3pDPN7wAMSVQKzTbLhD1oTfuxhbVs1nRtHn1hLZvkJ",
  "key8": "3j9MgRCgjvreLYtMfLwy4ZJzYSyasgpS1DppPWiuQkyJP4KqdixnkPTrFrXkTTpMc1GdJSy4cKkAyTbN7WP4Wp2B",
  "key9": "4fi6XwMuBn7hJMxGixR6M6cYr1M8pTV7EkX5RNErduNUV2HjsY8LR1Fj5FhDY8d8typxpjsjnEATgtc9B5RALn1r",
  "key10": "2fxQGNtge4ghbJrdAPvqBB2UoGexU6aKNnkepBQBXhZSBw9SG2G64LjxdGrwQSZqxyR8VLaXDXtP5T7MddJe5d8t",
  "key11": "4fpRdsP9Wf2pejMNoP2QjDnqd6hdbZ4D2cwo1apFxbKMCcCRExrmEuxsG6be2Cne7yFwdhABLDperfdM7N5K6Tt8",
  "key12": "3XX9DezzYYtqHpPVro1zeLJh5DZvdh3sUAmDr9hicmGp1HXtA4iukt2pRYaf1q7BwnViwimRkkdjn2fzKdrroQ6c",
  "key13": "5i1NK59UCaZD9eoZgN6orZo7mL2ahHXCLrJ2W3kLWPbG4FrCXGnkXp9X51GTWf18eyMCuw8QNgjMCFZwaKkcu5Q2",
  "key14": "2GgQ6x3NnDY27c44Ur7u7xBue1XZAdfKU1sHVsSbUNm1mssjFM5NL72BJU8G8peQJj5PTN6MeauW2VLw6vGo7zhm",
  "key15": "3JQy8yi8jgtaWzzYN2YgNUxoxqkfdafXXZbEMhbtaBdRT6qoDWK3kXdbGCdQjazBXkkB6ahZtPtjWC61fq6kX8ax",
  "key16": "4HFMua19sYxfyRyVSwokHdsspQgnC8kEDvP2QiTzQ9jD8GUEvpPq6eVZS3LotgZPk47u3F5PmJR4DZ1cn4DyGubt",
  "key17": "2XHeKYJKSe1CPvmdg7wxFkNYbDahax8vWfv4uiBjhGUDgBpdXrWSpK8h1W7izsQtXAAQ8vnZtkScA1AeFuAQiFku",
  "key18": "4QLn5yd8Bkoko54ZhoiQB7x91AZRWtMetZ8mBgSWmUu5XQBGh7b3cwjJDuksyBYnSeF9vTwvXWbyGLY9UZjSJTgi",
  "key19": "51HwbYnQFgQ4v9rdzu6kSEYj1jc6RkrL8vtYs1XJUKTNGsbMxbnVhvvpPeLv6XgW4c5RoQjfVFUT8HcqGbew7j1E",
  "key20": "2LAqYB961B4YZrSgUqhvxmeZTawdCvx2eqWzJMvNjKKsyQV9ucPoiBwX3x9YXSDsCq2xKPJhaRn6Hfog9Brj5YpW",
  "key21": "2pUCnvjftTdLRgr6dDmWFmKe2gD9ptV5cakPxMdezv4ch2f2rZawqzViJVwhrVS3bNaS2AP2smjgLHVdoW2DbqQb",
  "key22": "5RRQDe4cPyWjGDDm3FVyq87yar5F8NC9DvU2ywWNV8pHKipfCVCjmabRaDHwjp4SVWe2kFeqtWkAS44Pjcydarzw",
  "key23": "4SHy9SavERr2GB8R58G7zkj8vKyD1N24spEYgtT5kYzcCWkXh9TC1yRdjvZD35QJRVH1qXYGGsGrX2ZWnLnVnaVR",
  "key24": "4GtQfyaVc7FWvK1mByaeC5rRKi48NHTc6MDmAYPLGqZUqTynHHePfjhVDqXrJPossKXjFGtFaZGNbkC8ePwqbSJU",
  "key25": "4ALc7iQnQbXAY5UhWqNge78U9AgFKyXLk81xG2qjcuDf3qsYEbKebVCWt6QQnN38RRKGqB6ZhKzKfjgXaqq8UBfH",
  "key26": "21brcn6k2RZEoXpSoBLoPNCtNLWmVtTpR5qKqqAoQRUyRqH4eJQigFn9uUtDE76u5nTyEy3nZDNuF1gVapWfoFgy",
  "key27": "5TArP6X2YabKqNwFGtovvRWDuSguVzdV4jUgt6orcZNhJdJtPyV3iCdJjoZCi9izJfqkJC6kYWVgMsVZS7Cs69B7",
  "key28": "511NPti8fEsUoSyKFi82vzgMKZ4uS1Aes8pcHyJjWkHvSjwPphPqjUQN4p1UkRkHtTDfRQkPciaJeke8YaGMfQme",
  "key29": "H23UjwrQE8XU8LqpW6wqDh7eKm3wMHENnFThyZATxZQSC66RxDdLiKAcm3a66ZZ3owA1ZH33HTG7cpEdMusK6ga",
  "key30": "4qVxvwqmPgGh4HQTgMPnsaxzvEizKMSMe7x8JQNZvtZFdH2M5Nj8mWtyJy3mp5HXry6KKvpWnf4BLzTzKh66VTZY",
  "key31": "2WMoyndKapUSUj54qu6b7FRD3yDrTXscihq522ZdNFRDCVnMnmXtn6YhBsnANXcb3ZGmJoo4vGXM94i5jr3yw9V8",
  "key32": "2CW5UaqaA9HSzTU7wBtM3iJzNhm7D83VkG6ve1fv1hyFKS7VsMEBuugg5XJcFK1yfDKxLjKVUCPryHAJRyhqWGdK",
  "key33": "4rZNsywdhwbGXJkq93rsQvMSfL4ut9d4TPgnFJM7Ad11EM9eTieiyniNYTxLvWVan9UBhjYcLpxSFXNF5Ju2JKzj",
  "key34": "3rfmVe2cceU9mn9MtvDudZUvScxeR48F5rg3z5Etmodp6wbtvydPrjwxjRMbV4vTMUmwiJVoH8UGF8DncFDawv4G",
  "key35": "4BAsigYbCDAyMFsHnDq6wj38iEzq9oQQm7fHb9YGxaJ4kxTzrvdNiEWJCsd5EE6EdkGzyqZD3Sxqjxmq2JBRAENj",
  "key36": "6679wogaJUatneJrvZ6r1GstTexKvQyV2EWtmYZVhVDFYE4mymEG5jrLSs1sp2LRoXLkx2d2fmFaW9BGcr1gSKjT",
  "key37": "2CbYvtaJhFFwPBDCdQhgm4b34JNRYUWkdspFrykXpWzXrFTPizRT4J4iDB3pGFW7eYC3eVRZwULRjzDkVhHpmVT",
  "key38": "4hPvzkZMvMEWWD47qF6Jvw6J59773wunBxZCWkM1KozZLwhFcjDcFTyX85UYQ7yMtKp1qQkoxZxyMptF6BnZP3Y2",
  "key39": "37LJrHPk2pUsTVDw45XfQiGdCY9YZo1kppv5GFSFrrzhvos75GJ4J3uePytB1ZHr1vDitg5yvhNSeGMob9MHFqNw"
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
