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
    "5o8dHP7pd232Ucz45AyB4Zaz4ouVvvbn6e8MYuZnXzXdX7mGwXM8eezQ89Z6pxJs7D8gUNzqR5MzjWCPSiVU3sCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37FgaZe794TVYL8xUhXt3nS4jBhkQUnTN5KtLxds9TSRn12t5M96B1YjvPB8vPdScGDWykVmBujirkw99VgGMGZr",
  "key1": "VDhZY5xbYprEZ7HLiGxEeDAUyqfFeg2sypU9JJrUuwjLWqGPu7w9RqQBnRK4mVtR2M5jkFmcAnyDfrZCr5eFJ1n",
  "key2": "3KfufLYdHh7VcotspcNvLq5TqCtA9umDHkef4GAvcfTMcbHAyirZ458xmkYdYyy95cLAvtm1bjkejjZ1Za2azzaM",
  "key3": "3h6ApvoNqtZyqMJM25rjH59arUhU6tRKevMzkcSge661PVJcfFtBgcuz4kTn4u9tKL34syrC64rb2ebCZmtQtZrU",
  "key4": "2yGtAX6NdU5wPPhqcV3raj77tx58JrTNFrAygJMxnyHKHvrCCnFpFAU3q1QyYEsFoScgBWbY4GLM3DK6yc4XVG6U",
  "key5": "4Ba3PqmYmbncR4Lg7nf5NiTkamB7onLWUuEJgwn2eBAdMYbyaYXM9onM9v5VngTxBAUhLmKUGLLTyzSBhPtaDQWc",
  "key6": "5HehJYzpPqPMzB93KRp5QRne6mkoHejaFPiV2txRNZBL7dsGXvWpaceJwqVAj2zpBqesTR33VeVmkxGyDQoG6SfP",
  "key7": "619vFLXAAd4yNuE5GKE9hHL4A3uYrnD9n9QLbuMdJzC7orPfD9sAHcv9twCqoFuXcfxwek1A5me8HSqCw5BxAWTw",
  "key8": "5wRJr8AtgYfyE66igF9Zwi46WsvSuu4KtNXdNRiXobaX7L8bBDkhNFt1j1KTKV5tmyZAWCBZKgRaAuPH3QjRLZMv",
  "key9": "ZATzkVDrTk8ZuCDZx95PQpd4rrpP3RHhLkFgVkzkSaB1wUWkHre1GnDUZao8bGzGUrZVjsmvuA8L3NqL4kXVKEw",
  "key10": "67CH768GVz29HPEh2j9uYEMbCAZSBQZ1ZZJWQQZQ9F8qm4jaAhU5DwQPTtM8PNHjZ54yE5A4qehqE1QG24geZuEY",
  "key11": "3XY1BS5Ys9FbBfUmFgNfHq25wFMbc8rT9EynTtLCraKVTSMo54V8NZ7LkPGLsXXe9ntc7bwrwUotM8bMYkkRTn2Q",
  "key12": "ZndCwe6Me8CvtBfKeqHYwzHKrYhXQmomMacnwkJ4RT6ezxfZ8J8R6vZepP3NcELzCnJU8P3u3xJpyG67PZAHBTF",
  "key13": "3PmYEf8Lmy3S7RV5RFq8pFRoiHynLhy3jMtTAHxd961DbuobLbm87QFEsBe2GT1NQPfyY19L16FT8k6jXmkMe1q3",
  "key14": "DXbDu1DZJkAVvgfFCJtDV8NQjp6w4CKvfBGMfs1coJCoGeCCePXTJ6Zhp1Art38rscmnHNXYJ453tkYPTzBdkWr",
  "key15": "CR64TrXyy5g5wrwcvm7Ya2SLV2dSs9RJQjdLQuiKfUxgvomWDwm6EvnduMBqLNsRxCYipSNa51SA8Fi8JUBoMk6",
  "key16": "4i2HmBJHEnzB5DjV4F4pzaXKou31HzWRuhiGK6H78y9zvgAMhzybmxeWAqPmaALtcCDkyYYZRksR21cCpNm6TLX8",
  "key17": "4sFhpvmF11YV5QaPgVsiGRD1sLCcf3Dc6CAqbehXjbQaf6Nq36U8wQXiCSTeJvfLLaTCsWAV2gfbYbW1SJnGAMfQ",
  "key18": "o3t35qUFZiBfdDwocmB1RPp5KxZaQiH4M6LuNazKwAtqetPja7SdGm1MsgWnvN9zY3akyDnyy28zDjQxDxymeZy",
  "key19": "3XXJ6fxWV3VoMNxpAqJzpvubDfNFN85mRnvLr7GNup9WdUjQBEn6LcQZVx6PMW7nFLoDn1pjvtLJgVW6M6sXzM9A",
  "key20": "2awekA4icxz9frF44eNHqZinPLAmyy1R3aUevSgsNiTyKuw4oPTkT8e8AM8we5HNwPd8KG6fvhS5DNozjpxgJyiY",
  "key21": "2SKeV2APVAeAMYi8PxkUoi7KTCbn6BL2RGCM1q7mbwsGMHTQiSbaL7zJHeX5aeQzgkPzKzi7uhS8QVN6A1AJCvw5",
  "key22": "4MHVf6d7sZcFC5DTqq2SbTbFwEncauv7JCs5cxf1KpdTpXXhD3GENo6fnPBG29TuwQhRmCREKL8mm5r8hA6DFRzr",
  "key23": "2apYG1D2HeY4Y8qYC1j7puDbkpPyyxJke1xYcvQZ6yXGa6H4eAZfC2k4y6SMaDWXyie884Zp1QRW29DHFHsDqeVk",
  "key24": "4z5QB11vMC9xh3iXLv2pBV8DsHAapHXZ7KVeK7uGPmRnBzTzsuGwKyWS8MJkrv8kovFpcpK1FMmJRNDXQyD3LY8m",
  "key25": "vQhyYm9tLGxcN6vjcMSym4LhbxhH5n4o11ESvN6MBnp4huJJMsRhWbTgvxFgtfxa7a17muURwCiAD4pcU12Jpdx",
  "key26": "hc68oAuM17nELfWq3o4hPzA6Ga2PdYrhmuX7MidYyPusHMdfWwS3eVSUphRcgXCw9fhuyuJyxZArwXMwSWWYwMu",
  "key27": "5SmdzxgZStvcmSEhCYv7CeCwjzs2Pm4zzVS7hBu6iWU12WSyqruAmg58xVzAafcTZxG1nW1bZodLmCqxCQLa5j39",
  "key28": "5s6EoJDf4ZYuohgoxp818QuMXcDyML3YMrXEkR8m6yTUbAbnWsK7J8jrxqyFymsgCRL4Hk8drFDhkhVHLtZKHWiH",
  "key29": "26X292i69TzQrhL7i4g78wUGF6qNQzaqKZETGr1y9i6ehiicKDZwTqPdpHmX3bgoZe2Qbp8RvQaZNAkbXrDUiXLy",
  "key30": "tUdeYNCWydULJUW2EJ46LaJoPWWabqRagvkppLis7B3QDXTU6WnUpuHVQtdTvLTfLXemcZsanML3f5MaEybhXcp",
  "key31": "3Gxq31ZMThDwv7DeEyJGmcmVx6KFN6EQUh9Y3q6ZoytYwnXKWCYP3fSwynNcoREiPZMvHbnDhrzBSLKv4Tme9kP7",
  "key32": "35MGmQqQHxRmdqgPMhyS8SdKUqKZYHFaLwJoRABd79WHREsfvmGLRZoecNKNCU8fsfuaUZQUKhfBkMtYUoo18sf7",
  "key33": "4fMBHua5hfPTLALrMKoqaDxctEFN4SkRdARH9Hb13SHZaNSfBvUPrsRtsGcuWTxM5JQ4ThSJYysj4A8PeeWTVfkq",
  "key34": "3uctG1AXtdm3QUYz38sRrKhkEcRo9hSz9BgfUajUcgqVme4yu3ERtqtneZB2AhYwTgwRdC8AXNpqj7AjjU8mheos",
  "key35": "2je1r3hiMwaGT8njPY4ryM2rAyoY2X4QNWjCaefSYESxB5fZik7dNpV8m5UtUN1of5FrNR98DisZRVA138xw9oWu"
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
