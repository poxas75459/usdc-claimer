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
    "uD1HQgce3GBPKNkMiLneUamJHU6ELPuBwkAibWY4S6eBM4ULbV8hhhg9C4B9LFbsbQHnp9LDYdsQaopARkGJ6c6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMErXAk3QtHzAkiJdgue8vjNzQ9REP8Ms4WVyZ6V88PVoRD5UqLiWFrw64CQmXwkppbGPcbesueitZa1ax2BfzT",
  "key1": "3tUVU5XNA9mxVEX1LS4b2qMVDPVnYPBeR1XrDMQgACCpi12mU2j8dYPdmQQy6wvxXarXWf7ZiAkAPq66gYq9v3Q6",
  "key2": "od7Y9KAkoYyE9HxzM6nCxH4SxGPDdxonKJWVASYKHzHDhdx15z6ZZ2FzZ4u7huzTkE4cAipzneGQj1RHbRT3Y31",
  "key3": "xqFtaK284c6vjRVNxFRiQ2C7rdRHfGTLscmDryhwvynWJn6M7goaSk8qo53V3DtxjYqFFkeYV8WxNnUmombQxTo",
  "key4": "2wicDsx1ryt2P61s4oBwFUdSwpjiFcPgKpbrvRwFjDLzoaH7FVeAoUgUegu3UkGCKX4gbnzmEJGeYQcjDsCCYqvs",
  "key5": "55kuqr5s4TTgzbVtmgP6BF33cEBynipGvToQuNY4UpkzdqbcWfzKDpAoQXNWSGrdYoX8cqvubcakmc3svY2vzKnL",
  "key6": "3U19fmYEGParpmLeiJkQoq89sZHJt8n5XEYsXETYxje5RC6gND8mt5kEio98EWH15nHzVPMzjzJU3QkSWxPzsVSb",
  "key7": "466i4kf79ZEqQgRa5zADaKw87ZQ3Rh2U6fWJqa6DRKyvxNC6gCJSVoen1ypiY8UcBGAAKZCVj6yGApsY9YjbHRuV",
  "key8": "56MkXdHyVDUMdy1YzScmLAWEVxUwh7Lo8H7LB7RuvvRmPoT1Kp6mk9vPW13nNbuQCXvarKstr2o8cyQyUuzR1dtM",
  "key9": "tt1V8VRW153aTros9krPbPvVXiJ538k2LAChYFbABqQ8T2sMrYrntL8xbArLVQMcs4yojwtiKi39TPFEBQvE84B",
  "key10": "2jvBC1jXPCvM6zGarsZDdqmtcJL6bc8deJLTMYxkMra6WDFrfp1zjZAwQxH4Q57ViqjdKxp7zT12RFWobWcmCtQH",
  "key11": "5wkfoxfE33tMAbC2Epa55Aqqptrmkb9bCV5MgFwsjvUMeEgyYvUYfRZLf6pNb63z4a25X7AvMLMiFFpSYmBuBGF",
  "key12": "4SzzDfyJ3x4jVz7NE1r696taeKiB4PfmucfEufwrGTw9DcVSQ1Wcfk17KijuEhRaDUts8jTrd1ZJYHjgEokcRcm2",
  "key13": "sxeg9LfdBXHgMmHZmbT2JenmKLCEpFZ85tw9MxN4qXfniQU7Sfwx74avxcnXVUB8gCo8wNB6wCZfqzY4723jMJA",
  "key14": "2hwjVRxSaSLN71j627sDmyGFsfKpnYRho97qAjbPsH1LWWnBCthp7oQ4ADLMkaprYFUitnGKLvh76w3tytDdkRsz",
  "key15": "49WfzNRqReKUGBEaQ8CvpYGnKnZarAnZ2fFFNvxF2mdHzUCRQNqx7BY8YXVzrNR9eomJBSMoMCdMENbECiT77oxX",
  "key16": "5MeGbwdbo8DyzPz6eL945jZUuM2taebxh6hxpWuXmNFiBb1eEUJYzAqjEpa7JRewozit54JwfQG3Gd22w9NtUPZi",
  "key17": "4GB99hTCDRubqLMn2pHjbEA725tyqQUBJtjXacgwkh8rvzBdYd4XMMfb7diFsHTAATYNkJ2129efowx5cs8kKS6f",
  "key18": "32eZLf9ephYWDuBTdAE4gajRUVxr85b8WJ527jjwvHh6GFkFkU7TLP3tRrd3DJuyMwJSdxrTm6mChnMjKThxgEqN",
  "key19": "34SozgpgeFbkW6jFx5nzJ52ABTNmfTB2JRGF4J5GEv7XV7mn39rFQH4KFr6L1kfKNRRZtzSxaq64b1vDjvh9pppk",
  "key20": "4aqRviWqiKxrJpw7FkHNiAxnUNmcfkY8shaDYsWkFnxnLjqbc9idy9K2vKEoL4D7TfL14R67B2fiyR67UX7iKVb4",
  "key21": "2VJxmH7qmAmpFs6US9ojfaDig7CTcFftvgCid12nuFu6sPqQM4htK1RavJRzdG3PrzAD8cE8tiPWVTZMSBsDjsKy",
  "key22": "2hbD5SZngvT6wp9iJSnSXMbi8j8tpCGvtCJFiBcotdMgyC7quSvxHMXMF7j2749VgYWPNgq4zYDPPU3ziLXFPtnC",
  "key23": "56xxkwTd5E1g1eGbw8EAPvfpYcagaTcdjwnVsjA3JoGLsexAFRTuTtx76X83a8M99ayLFerk53V2CSvUJPuHoXPd",
  "key24": "2zeqvyKTSAuH5ZZLYchRq51SBaAc8JL2NFyQEB5Q8rE2rqfPMRadgDqwtL2mL9i7wRVarHXCJFcFzKn2x4ZjbdWZ",
  "key25": "4ur3GneYo3FoXnTmF1JLo1aahFsx1RW8AZW8QxAHu7FmHMEAJsr2UYHm7pKqPaHxirJ5HSkxwLu6NwCaDDAcvRwq",
  "key26": "5sGKeeEukZUGjDW5Dny9DdRq7ZcNxtWq1Q2zsJNWm3m6EYfjrHfaonbwdAnR9fmvRfceVvkWdnnEFnReZqS8WW8Q",
  "key27": "5nMY8XJjhxyqtPRVN5LbZHZajvCJJic3YY56F9rH5jEu1BMs9A31RbNL7mJwCMm96h5kxhb7qmxtG1kLq1Sk8hRE",
  "key28": "3KzdLUdUFkyZ4g4y4YShaTK8LPmTHmvcuQ7HAv4stGiBE3gVsAh8z93vLZB319SCMszwCc8a6p7BFXJbGSTKFSRo",
  "key29": "21ZEyXWwJZPFBPKejLDrMJcpxH8MjVHB3mBziwHR39mW5wMYGByRHfu4r9qUr3mWCPQEfyaechnmJMLGS5nSM5a4",
  "key30": "3zvQv6cuQS6XE2Boww5etsZU9An3P8iPx6ghfdPEZhFc93rzDBh8smZy3qYcBMRF8JsyZhi3qKsNGkm32ShixxuN",
  "key31": "pN7eSP9Gpnq8QGfrLBAnQafB2TYn137fSaDE74ckDaRwpDPHqpbpWCKUUr6WDK4WAY3gwSqdKyJUSsD6hKfetnD",
  "key32": "2V3s42PjBTRSBe8JDW1h8rWhNMt6Un3ZyqevmJTAgeW1rt93fjUNSeaJqtnxRm56QjGvJdrnjRvTiVP2DJtxVnbt",
  "key33": "CkfsPyhXQxcp7GrHhaFQ7miFaP4cdpofFo8Ukc573sYiPioZ9qEsPkAY1mwEdtg8wAVLnFzrWq4xGpL96uvSU3g",
  "key34": "32a5WXoWZAY6aG2ns56qncAyeiZGWZcrGN9PuVW42SfXdjzukSdGwiXgLgYox1iFn1ewncUrvUVhrfpJ2b9aCVp9",
  "key35": "Uwq941TnuNM8T2KnZvjSd3dLjexBupoewAdsEMZXMY7KgADikyBwfYzC3dceddqSWQbsDUfZXpjPLvmqcXK69Lh",
  "key36": "5dSs3nBua1dBmLVdBYTEkX2VcrwDBK8YP4d75p7vaMpBEWVVevQQyTt977A8hnK5ZM5mrwnENrkhBjtSw8a2hwYw",
  "key37": "54bkkszFc6n5KLU6fpCkdABMzGhKefaCxEAH9VXLEpbGgKT68zp83DfffdPkPy7MwFMf2DCxYzbCzYcup6Pax2dS",
  "key38": "Q5EeV5wz6PNiVNkugdhtMFQCpaRvT5GoWc4jBur1rFZ5qeGjmuMdsFv1NJrmNeeQUUemqN3ZKmmjV2kMHMmRZWB",
  "key39": "2gm76kXTFsRUF62VKUDbf9kQUSxkYA3AJ8NPrVwXw4xpowpb7JeV55MnMk2cDHwkaG1Njh9ivRyDLAHtpj66XFPc",
  "key40": "3r1aSmrUB9quRBBSG7J3QYAeeEUXcVphvkzSYJwgfKGe4nn2o6XDURqyRDHjZoL6Z8xjQwESYjqefiTpd2kVd4ux",
  "key41": "2ucEEMYyQYLzu6Qp1MtDhNZm4i64BbseL6k3VdoK9CSpkcgqwTvt1RtW6HoGp2KiZmGdJBAFaoEbyX9FfKkvnHX9",
  "key42": "FcwUDfQ1T1WCPQvpFHB8BrRzDhZzMgnYzGCVDMq67Vfdwd76CdxbyDXzBsx5N2pyyjzCPDsCgSQ5pzY3muqj4Mg",
  "key43": "5i4LFd4XjKGjVwS7kVvefaNBbMTSjAc5izgW4zZ4xMKBYTYWdBrPocf1kgaZsc3XokNhEU7HXyXb62yd1YyxMdD8",
  "key44": "2NNoTKj3NQWXjrjVyvtSZdxxVh93cuwrQAEi6McGnxngLKzT29JeASL5QQ7WLwq1mBukTFV4noePFhhabGUJwWFn",
  "key45": "33rhSoqk5Rb9ewcN6rTiLTAVbc9Ghmxk7xYedojUQzYETxRDFzomicS8G3NYjPVNPvqe7we2kSoC6HZKowehSzqL",
  "key46": "36Z9PPM9YsSyzc1f3QoUKHEjhALxCDgr5L2r59R375xS9h4wL5wCeqCXDxsP6VxWkLQHEhjHeusZBVJzTUwMkpbg",
  "key47": "3GkPtMdYBcWnSgxGJjiSZmyMxyWsDQaF9NyN6vqLNA5U7Nb53Z75gpSRsRyFq1939CDviLHHoRpLnTtxqiNgdSKZ"
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
