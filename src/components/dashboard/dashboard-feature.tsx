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
    "3dwV9Vtp84K1PEGcAVb73PxhieqqG935HrpEoZUctZRJt3HZaBE8PVsiWCRA9CcU3hY93Xkx7rcbRohC5hATQaCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxUYk7PzPDPCZmtpJbJ3Z6K5vV4taKbXAjDCg4ouTEMfU8YbKRsvExACZK6VYZuVj8uWbJqNXwgtMD7QxQEqZJS",
  "key1": "4MQyaFK6c3L1zpWVxMrBpFoecXtiDC8Sz6tL5zfMKP4Rt9ser3j47wV24pPvZGeyGhMwBbuqLarQ1rVwyEbtq8Vn",
  "key2": "WAvC9Mi3cHdJCkRkZN75sADDAjzFNs1Q6nQ32eo6nW7aQXnedrMdPsjX1KtUXVevif2awXxiKgoY9oMuftdYcTD",
  "key3": "5Z2hzoTfKxjTyVfWuoco3yQs8ExkkN24mRGnwktu3oZoswpWSymGbwUywDANQBCL34TWZwPoKLUuWmVvtgZfjqFo",
  "key4": "3o42ReRMyvUcu6sEALXCnJbAKCyX5Af9pU5c9StN5EB859oU7Z3dAxkHJjwHxAxqrSZRJ29U565dRWUKJUWnTkcB",
  "key5": "3hs6wdMXcCZjRYfaEf8Uf7PBnbSKStGkivHjE31rjzxn5oBnPzn5txPoFejzpc1kXYSPRzuRE8e7mebvmVZjXfhz",
  "key6": "4bLnzCCtKC7ZHufC4Zgdwwag29HnqNXCND2sFgwyMAQBvnT9SLkJiGbbgLVt3eitRXj1cXW7Ab5hkxJB6JBx1qWh",
  "key7": "5MPh9HDnnGi89huLVZPAsskVbW8kR1NDrSKVUeMoGnvaH6pPEuQPPxKDjv74QA4CBCsCepwNF2TKvzWktctQ4jpU",
  "key8": "4UoFk5V4EgT3m5Ux8QHU2ZZE3vpZ6KFPhGtEfAAzCvGdxPqfcd21camNSzw3jXmc26pPTQAKnfwPXhAaSL7XLf8q",
  "key9": "5ppfqcLAyY7vBrdwi5wSWMCWrHP4hhARgJgQu8NNgT9j9ogVU7dsWB2i4T7Gk5Rm39jRLVtJwW2iNfsKnqVNBZVJ",
  "key10": "23cLRG8GCmh6dThVMMKwLqvLcYjqs8JZBWgAqWEoQmRxAys1quTkuZ4Yh91GrCmW5gJyePiAp4D8vmAA7645cyWP",
  "key11": "56RLpH484TqphEr2W548DurB2ipadswWmrBXiUcbWSHcUYp7aLhczEz9EtttCyGYy2jYa1L7ZV2apwpZXWjhyLtv",
  "key12": "4TndMfG5TVGDHDtPfdboAZuB6Ma54Mbae9zx91RpaKcJQFvxraLf8Vfeo8cfDtrUrVdmui6fcspV6uKQFvrpVLny",
  "key13": "V4rvZHYMXWfQ76ofgLprfXmCfEQD2eUD2agTJNuk7v4FBmxPhwpKHJYRby3B7ymaxxGeW1NbrfUShqFmpeWJdx4",
  "key14": "3Yf2TXhPvqfYkGf7fnWtGRU8daUa9yiApBPmYQWCcBNzgrfcn43d4qDArkvYN74o8Kooq52PtpTzRBCEbC8Xb2Fy",
  "key15": "5hnQpJ6BAZBGeKXKPasCnqQU1fxvbbo9Dxeh9DrxtNWvHvpdK9SNQmsUHCr73ZKUrSB4uQjZAAcqyB2PvDtbRgJ7",
  "key16": "4BJBTmKFrisFMAXnK9rTYyiDFU1nrkvELjiYrJAez8uPudxpan8MkkKZv6k99zggBdDwXC3rGLdBU2TtFAQ3Ezwd",
  "key17": "4SvXZD6P245Cc3xB3Tbdn4CiZAjrz5KNct9rbwcat63ZuhWSGkv7rowd6m7BYQDVMa5k6kL4Au42RTp9jMvuPMQE",
  "key18": "3BjLZVUrfQ7Y4hQDmhKmg7FZoT96tTBkD6bt3sotmQc3G78U1yGNEZayg1X3KGVZ1ZM33oSFqfJmej5kAH8LyhYt",
  "key19": "3VLKrabToH3gasqsJS58ibogBqLojjHJUxh9AYWtYpvw8ADxK1qPmiHNNvJirNjgkiMoMbJDqP6rHjK5NDZ4BgPL",
  "key20": "2FvCkRCpwD1xEJFaA5ZcnbVjy23krktxQwxQdpguNx1CajwCnwfCrMuaY9zvSaST4w6SNT3uSocmteTayHNuKwdF",
  "key21": "4rU35EY62ayuUwqbkwhA4KMhVcbyZmXdPiHJcWjMqumL3u2XScrLD7Ry2uCrK6rKQGGBL3qYKJNnoRYxhCjoWK42",
  "key22": "2vEyofhxJqCkTRin6NnTFXF3N4rVK8hW76GSfuedecKLZH9udXzfAeTg2ELzmVLJrgGfCemztR4epFhbZD7ahGuV",
  "key23": "3dUAvEbrgMAr5k81UtXPfAb6xySw4ApAHubbXBmAQPfGZsFDhgBh2Nc9hcQdAQaPJuZ7UaE5jnVrUjgdYaeL86SN",
  "key24": "9MWpZmGoxDGNezEbyUb4a4ssfhcKnsonL8zBBmxdea5oCV4ja52RABqQjpy1YAaikMgs9DEXDXzc1X6hog5xguB",
  "key25": "2mqrb3tNdXUqCSCux2U64vMdus4bqyokmLuKvsc2CwHEh14C2z9px1SDsc3fy2dg54TwGzvfBJXYwvKGNvaVoPDg",
  "key26": "4CBicV5KcL7wdQiGDDw1VQDrWznrd8dwSbztmxjH67zadM7tszeXdYkowdBt9aN773TZ81SuQdfnAVA9LiRZPwR7",
  "key27": "41UQWe29CuLAfBoHbLGMxpDPbNo4czsxwhFit1Ym4Us5NCfu3KEveFuFqezq7QdYh4gt2Zx3fAJNMnZxCcFXBJoD",
  "key28": "8jmKs2TAWP4oFGdbsoG3PX34zVLiZL2WBYrH71tW6ETsnPupDtVreVbehi4UaCm3ymYwmq3oLxzxUmEQnG3hxRr",
  "key29": "61459xTauRDsJ85TwE9ZKeQZJtPxZTt4Y4V7ooqhrZrSSLNbobKVyDf73Es9yn3Fo1pXFnwPEMhzbdL7fRdiM847",
  "key30": "2VhRoJHLLwupsxxEV3aB9YsX6GnphShPfvbEpqevW4J9TPEPb8UtxQrrXBYYZcghkegdZCuGR1ex5PCUtpW2ZJ9u",
  "key31": "Hg4MerrrqiKMdZ75UNafHHD1spXDQjtQCGcL8h8afHYKZ7ZHuRsoZB1JEsJJ8SGF2V5Yf6yVCVYyiAdySVstSVB",
  "key32": "UjtjWT7LXSgPGXc8j3kKNRaDgNbp5XEV8LJGDyN8petuiUFs58mrWhnYeNJ4HhVwBpvgHbZg2rhgDBkZYzJMuZo",
  "key33": "2WjykGVUriWYBKLCyyuTDj3sDSQMQgceULUc6iPXjeSQWpJuRGgAh4YRFAThGvAnS5piVhkFrBCLvnoiJnvhctmQ",
  "key34": "5R4myS4gpuNEgZkoYUbca6fTP73fSzFKn1DAjMCbQzKZMVptyrk5SC7gtjqzwWeUSHo6FCZaEZ98yB9hgqcYwjvF",
  "key35": "3UVGGYTwhkd9cqQxPTGkAYLTN5FBoZXDCV46oEkDZWkczVNAkQjUsN9sUj29qK94uUvhMPigy5DhEz3qa4EwuPD6",
  "key36": "4gyQQ6sjcfAFtEFMpeCyHtyffmFmNh6M3wcHY8s4xgiTHuu8yVvSGXdfrYfWBYnUDpiM5BWN1kYoLeeAnv6kNA24",
  "key37": "1KWSi1F7tJrX7axn4mnYe19FfkvrtGUCmijdyP8WUwTHfkUFV7MJbm8oLm1ixaZDgUPj1wPg1WCe3P3YrGczBrt"
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
