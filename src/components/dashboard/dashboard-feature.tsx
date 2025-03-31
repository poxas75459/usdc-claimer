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
    "4hwQvQg26NcRZXE7FG5G2oaiLBZ27k8PBv9hnV7c3P9yM7PL7zpZUh5QLZd1iqYSZPep1xkB8gyUQyaWcSJvB97k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XjXCfXij2PEycCgwHPoGnUcTbCTMEueJVwvtG7eyPy6a9BNTPPBV58Jz5M2chuJAspzaWL9xzv53qLJLhyP73BR",
  "key1": "5ELvzg5WSvQYDZbjw3viCaJ6AgGK4U2i9CfYYuwBQuC9jGxyRe6mGh21593rTjF86vBvUvb2xwmphWTQfwJo6S5m",
  "key2": "N31bVvtPKY4xTkfTa1XJiXuChJ32H45QJsfwkbfkeV9m9m39Yrw6G7a29Nm8X3fjHCjePpmSz2JLUsuGZuSvRJS",
  "key3": "3SnfHpKpQALjd8b2aZJM5WrRExPAvpz5Y66MPqk1us3ggCxKsWfjSVjT4XUtCT78Y3dd3zxybjiay4bLEHZMtTcf",
  "key4": "3vjiMQUbvmGZfjXpJN6eKRWaSiTs11YbuBwWbZYZPr6UiTZLkMuatFDRweNCQuE6FVLFCd573PpMwQ22GNakKEo9",
  "key5": "4GVZcJ4YWsiX99zrBuRHCpe21jQGvghxmbf2xnCfijyMgkZjh9BH9tyg5q9bcsC54T7e4zXf5g3bEeKFB4Zc1wvo",
  "key6": "4ShMfKDPngLoMxb2c6awKGGw7M3yVBHA3XwEP82MRG1ttH6w5jfhXo3jX3tSZvunYLoQsUGAPmui8cgoFXjBjyFP",
  "key7": "2dQeLErNyMUk8MAiJv87zEToj9x4sc2G8huMLS2CKVQ17M6Tpjd6zCGK5Er2qauGizvfNHJMdSowHPswsk6FKxFW",
  "key8": "3i1EsWEgSdGMsvoFE6PhyacXaAw6DFMrBS933WDpWx3ChtEJQv3iEHE4VbkLCskJWgaWhLDh4cMbEX45cYyG7Hik",
  "key9": "scbQD6jMuGg5sdGQwBQ5NMwifw7sHw5YjWpjpUbxH4xh9Ukrbotd1xqhs89DnkedKTpLuduTRzDfFY1fLYxr6nL",
  "key10": "5NFTvqmXNUPXc18RbKjtm8kqr2DkS9jVn9TS8Fb2ASffoFVEe9vnU5XTauz69VFNm2dcf6F72273ZKEkc7wnNsTa",
  "key11": "4AXu8fvprq9k7GfwXKYVt3nZZkRXsXwaVVmx1f5rkHRFHcLBSDY8h4ynFS9ezWFU5TwRr9k6Yx8CKohvXC4qoQ7a",
  "key12": "pEPcCMw1tLTrJN8Ajk54GoLPT4h33FqC9z8xVNZaeYDZVra6e8rqFgyHinKPjt3C1u4sXCjZb8xkFXQaW5N1A3v",
  "key13": "4tTbbKbYBsUzwRLUtTGXzpEW6H5VMBWgGyq2f7Y7wSh5yeQWQ88Do43tYsfD4WfJg7c9W9TRRGCqfwWjhusepeMP",
  "key14": "3WiifS7R5WfpsiBypyJZpvX8rkHVRC2wrLskUxxdaqSpWQn5Uu7swWcTQwookbeyQZ3Cq21dkAvgJhD2KecJ3FBo",
  "key15": "2XmenTXhB1wYmdw488XHfqrogA4KBMvWrPhYhZe3DnKVnUYWHvh6HM4hyGpHng7jKAwafHuP2Jg7sejNrJGbJexm",
  "key16": "4LK5E2YSs2EvoSXCjQ3zBn8kdDPrAMaMZphVxMGs1KhRSsj6okGbdqNQQV5UDiMTTmyRj4aLesPfFxbJCiYGTjJC",
  "key17": "pcLwAdYueyRGcXhVAR8AWUrr4NRvsNA6TJaBwokW9qYeCbRc9tmBXeSRnb38rqicKCMvRZmHGEJimvbTx9AFcwB",
  "key18": "NHELPeWATApJWLRmSHASr4PJuJPkVFrJ6ZiWfy4p7AvDv2wSJa3yoHkfxVG9M5aqyKBypkv838cwaPACpc3sE9C",
  "key19": "5EsYxreX3GAVMSdRLigWTNnYsU2uxjkmAmse9Qrnsr43tiT5apgEw8d89FNyDA73QDBmH2MF7yj1Xvz4XSaVHyV2",
  "key20": "5MpaMvpbiyo7LLpVoMQqADnBw4t3pNuKfb8Wv262xVmsssWBfFxD1KzUw5ZUVw6spDYV2ZwkoqcHju7sCCpQ7kKX",
  "key21": "CtaYmSbLrFhm1WPJ2vFreDDXjEBjt9WbWFCz3eSQnm5KPUcy5G6yW42zh4qQ5uQT5T7R5zTQmPLE3iHJzf6C32n",
  "key22": "2Wyb2MVN4gguJiJXbANnZ9QSQSnP8qkZeKfZbN1zStGiTv7C5FTuWBmM2F8U7tXFQhJWu7vrNgQjro1ZhKpUuSj6",
  "key23": "4sSLeDPG9MNYj7Hth9VjAkxY15UfdQ56CZULNX2bpK9m94zMvdX2T6eUTG6QnsQabvMqMHuVKZh7aPsMo6Fkij8B",
  "key24": "2jwXqxJxgMB1jn6HuzCZkZZbQWKhfcniAHd5jG6UVZDKnCD6iE6VQxfMCGsNJmzp45hpoE7MUCA7Ss9oeTPrpfB8",
  "key25": "4kqqh8PE9hqtFUNkSZBK9Fub7XhzFSWnyqyfv4WiNZuar4eFVpSvDTnZEYXsrZk4HqmZZsZSdw1GAS7o6VVTGSxa",
  "key26": "5ppLHpJa8EZrLuwx27m2yveoEXcNQZbG1t7iGkzRoymmF9MUEzxAwURpU6Q5wBvJREEvch6F6R6JDmWEfBQzH96p",
  "key27": "eiJFmax9oSFrPAJKLW9K77EY4AJgkXPzJ618Etaxn8XZgq9VQh6AvwucotCgTkizVAMEnW5ymYNKYmRPnarRG1w",
  "key28": "2fYwapmDPbbuxXscnkPwUwss92LpMgH6NAfKspmeKdp9Fh8kJr3a2RcGYbKcP6nDuYisvh2M5KP79reesgh5ihZ6",
  "key29": "3aujSAKqLiGkaKpvhuB62N919Z5Vyjjtd8GWtphPV8sSwqd6XmK7CZowMrwW8bKeoZ9NnwVE8USSqvFKLrV2kvsy",
  "key30": "4vAx86JKqo86XSc91vcR3SAKPLZDFb6u9hUgKDX1SDGeXZhQufqExvHAZxLVjxN1vVyQMbz73FrduHxpmcHuxjFi",
  "key31": "5xpqj2hf9EYPMbjNmLXx7ctvp1SmVyvZfe1mAgc7YtHNdJuooUJo5M7c1KLWYc2F9eBy66PJDfcSP1r8yttXWs9N",
  "key32": "3MCTjSEekaqscU1p6HYTXdu6UqtVqvJVdCVoZpUTt9RZ4fyGeueiV12i7duzHbMT5bvADwedYCcVWxFmDbTDLbAy",
  "key33": "mPDSyjaMyPretYAA3nRzxsDFPU1aRuspmUzCTAWsZbiAWc717gPX46Q6NuV5FKDKqJz3NFAFB2cKhKhwwNWRz8E",
  "key34": "5XBFMPYY91hjrEP9c8hX6upfuLhkhJsHLYnBExRy8AZrcZKUpbi8K5WH8fNCtSPsUJD17hw9ASSNEgqNPDGyVFqj",
  "key35": "28MyiEeq63oH8Fx5V8zXu6ds9nqCW7FgbWFXUhUPSyKG1xg2rYzTwrFtkd76fkwfBn3gUzpyGgG8wdax5Fpzm5uf",
  "key36": "63jiMN9dQj8QsEXqNcM1CkuvDt1vpyhY9oZXuzWC2jQTpeRLFVPKX34vpxRqQr7SMgF3UTbok9tgywefWBdXk2So",
  "key37": "jcdbnhGAnKLudoa2h4MsAq2AMBt6KS4xB8GcErDrxusooxLxjW76KLQa86MACGvdfsE9ZRv2tm7rWKkioBjX6gG",
  "key38": "49qUGP3d2QJWAeq3nVXsnpfuW9MftmvwPrY1zY4uMvEk7CezWW3jZXgoEDXa6gDTfoX4in7ZohxKZfhMrYU2jC6U",
  "key39": "47FC5jkrT9wycGvMdXRJaVduEP6t5mRQRQoa4LtHWpxukt1uQ56fyaxTRf6GEW16gUXippSEubjL4KdivEKei4QM",
  "key40": "3PggKcmLvYG9aJG1FRuyZEkXGLjPeed95XfM1P6sWf1SqF1SmkwEppvv2jvAvZR1hhyj5HdfGGh6ndfHmHUYYZVH",
  "key41": "UTfwfeXjC5YnzwEU8196cGRYi3VALmHB1TxAMgJ8UfPLeq6eGuxe8VEdUdtmT39ewmGrZE4ahowQHGyNjFPf3Mb",
  "key42": "zKnWv5SNEwvtUjQCbLajQCA94n2PoSNci8umFziXbYHBc4tv6X7fKeSQRBspTrk9b6Q5zRpPE4sC2ej1Z5uoER4",
  "key43": "4Y3YS9yGdEsNYqWGKXxRwpUjQ9AJzD641sptvfxe2T44gyNctcRK8vALCQDNAvvBNFtTte8UE1qfwGX4NzUhjKdV",
  "key44": "4HQz9tAFPT1g5LtAJwBdk7mvTjXQU2X8M2LxfrHaXHDbcDug4JLx7QnBTMcE23E4Lo1SrELtBtasiHPVrSANQHs4",
  "key45": "4uqStJSJyXFLxL8pSZ5tjtNrb2pPHG5X6U4S4zWFBuXPUoAvoMtGUiJ4xcGhWT5KGzJ52sysnYtgMqJaKvAHxPhz",
  "key46": "eod5MamWvrTMmFBi9uR4vdCpfMegk8FVfwyQEeXYuXVs16fTVo85sUmuDip92NZVKt3VkQEL2be2e617igwc6Ud",
  "key47": "2GF6NV6nxj7z5n1uuXsXG8hMKKyk61YZXj3jE9YVvyaGVgCCrxFvHvX6tnsPSPgAmWA5z8MpfutKx4Ks5hJTjTfh",
  "key48": "3pn91f5VuRhwgGox832TnQF2A4atF8zLnFegF9jEPi6uDRorNXuwJwKEWKrfsonxQCVFU4BmXoQVAeuBbmH3x6jW",
  "key49": "3wYmZtJEZYEW3QuBZ2hp5TkwQsrPB8BMYvhEdkbc6NFWNNdoZrHPihkydteqKNgjbDWziMCsjka3xArqgevd8id5"
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
