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
    "3SWGnpsc5xeAXh84yDrpyffv2MgqDP5mr5BcWfmzTodgGRjYUFyRQskxKiGbHaTfBkbWvhdaqoH4Ti8jc3J6X9Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XCq9Yo8Q4wm3nSziD4vmHkvNwdYqhMd7FqX2buNXP9BfEzArbo1XUzYGWsENZvvDNLE4j6fS58RQiiKgsHdh5fx",
  "key1": "ECdNurifRu51GmjZsx9VeENmksuuuziubnhEGStw9N8QwLmxNMq1s8mxncyuVCuDN5h2g4rLuEVM8g2Ymqu8nTZ",
  "key2": "59ZHELRcPbstmePEryfE2PEstX3uA9r9ThQakZeeRtMapEmB1duqewZvWdzsx9zjYZewtfpTDxZmnG6EA4WsPqNQ",
  "key3": "5iLeym7217sGh3JU69PWX6ybTS7nJTb6Ya5TsTD9GxWt6nPt6Z11jdGuUyAv6mQpWTTsbhLpmXxewPWxny7QEpMK",
  "key4": "3va8rip4PC99ogWVcPMu5PkwQfYK5qr7C5Ar6BwjAGcD2JANgb8Y55Kxp125P8s45uYjXZzRnzkvSqbwpw3NXFsK",
  "key5": "62N69WkoWuVcGqS93n5NUzhg4kd7JtwGcMM37STh4yvAjgLdSAdM2PehRhZrKWjAS5RYr5WnwhUwupmauxKhnTcB",
  "key6": "5F8vGxZGrjNASh6kwvGN51A4jUWrqPYemvn8heeeDrPg1cfVA7agthPgmaVFnvedDYnkttuuM6BCf2CVyWpB4qPn",
  "key7": "3K6wr1cG5c3VsE5JTS7NZGAXaL6brXs1DMgyUjieVknAkb36SUdZcuy715MDAb2QxruKdgaYFgqSgcwpN6MECuvd",
  "key8": "5jYAQ69wFsWJXQnUh7mjMbe6q9fry1YdHDU3btfdupQeED4gT6TXJhgQrwwBtLURCXeziXnRywka4iYHN6pr9A9x",
  "key9": "42WYZdQCfWEVKVsKnexFfvWczU1ssrAjegbKtUS5DQruxZAtNdycwRnVuciAUHoSSbFnPbr8o9KsBrgpAjQxx4Dv",
  "key10": "4iEgCR7Hdv8z9Z1hw55BvTpdsT594hmN4tFXWC3BDno2Pzy6ADroccdASdTPaBQ3HCvMuj9RxQtwR8KWgvK24xr6",
  "key11": "2pBodMwtk8641TGCRecYDkRGGezkyrJv1yP3Q38onC3SS9vXUfpzRZxFSe5eajNcm29AcRL4q6cGti42TcqC3ci2",
  "key12": "QnHQzgHgqs9AtCVKi4eJcXb65oP5wb8WYb7kLAUSDD3X5jTdpuxgMFggqN8Av9AUPA8Jot4TJRkbEfjNwSS84hW",
  "key13": "3vbNNZrQ8ZpJqMc8qYK5iREvkYZ5yGB1C7dZWCvMn6kCDvqhmoAypCedBThm2jRx87DCiXZBhaUqvBeotQMGMCuo",
  "key14": "cNk99pPuUQBHz8FZYzGNy9TPGjRcp9rxydhg21yYZew52ccv3xPp2kpDwpjMXbTE6KgH2Sn5MtkKcCasCCgQ9ww",
  "key15": "322PxW8hpKXMoRvYWFySFJ1fw2UAGVWdDsuKy64SU9bwPMxRJthxKwBVR3wdALvok3C6vp7wf6nsZMX9LUwksB9T",
  "key16": "5DkVp5ez7ZbBE5bh4BUEruzaEpfsvMvfZkWjpiaRQg818ggiyYAYHAFiiGPt4kEarcxE88bJcEdMdDqDAHeSBhGr",
  "key17": "eCsy3DyWL2n7iTC7Kz97jdxy4wfmruzU5hDsKqrep4NF6KrMrcSfmhP8dLr5F2FnTbQkSdZKJKUb6dYwsGt7t2n",
  "key18": "38uCiJ9QQyGkkDy1D1TM5DFpwgVQmqkGGGkdMBdsbKWVEwsKeg3SzbPPWJAFETAxbVd1JrU7EEThUY3FWxcpvx1t",
  "key19": "58XZATjfnFBhCAkBH5YMT3riihgeZFSd8qLHCYNGKAcSBqJefCMTohtPjTaVDvAhHeLeyRoCJmPbjzbqgpNZDUBX",
  "key20": "4FX9STafUbEXhZT9fZ47KycUPVRybBRmge5wgctbxag5t5xxNYeKRq7qE97hnSV3SH6uBSoE6nPYXGNV5UpDgYpq",
  "key21": "t5y1Pcd6TYX5N2ZrP3sZstNDfhzGWA3BJJVeRG8CPUeJ1PVwWKPAaJ8J3R7hZ8yqvPLdGX5pwhgWFovx1D3VfoF",
  "key22": "2M7HSaR8DMWt9d2riVrDF1tfyacd6SXxNqcdLdyMMfDLw43VJ5UrhJGVSfuHzTRkWThyk8n2FEUR2MW32VJmMsKc",
  "key23": "2LRtdvxdtyGam6UZs4w6AVs12kPQGERT6cr85hWTiJSfErs8om5b6kKj9moePNEcmrAkkNDi6p7wKywM8hS6wmdw",
  "key24": "2GiojNrHnTijS6YKjHv8vrneWi9ohxVKuL7h337RaRKPcRDD8iBHC1SLAHV5c1YCSyyouaErUKE9ULmLm6em8upd",
  "key25": "5gQr4nvxsEWnN2SmrJdzB4LZKP7qvL4n1s1QjjTStcf1kCS8RQJa1araAj1Djs4VdTwFmUk4bDZMhxnXssxQuQnB",
  "key26": "62dJ3PKpvGygpn1fdboCfxJbivMSyQ7dtKBHT5HL47Pv4ZgFtrrPso3TfeDktWsQB1z6ULELBQVPhEQpQuJsaq4g",
  "key27": "4F3nZzPhHLYHMdZcmGLtKZxjqRMtxy5KmJApv3uXao1eVfRjtcpxTuFe9zbMDaX1oBkfrdepb9sXfSeqhwUCYvWa",
  "key28": "3nKz8QFhS3BrdbCQThmeqBznCsG4zn5DDHFjD3mHrRJGEdJEk8LbCEAm8geEreoqFJJ8NPBrqEEbDxNW6AeoWAKa",
  "key29": "ChFwvLUj1sWM2S1ANvCV4wKQHVruUGmE3fCwRkpm1fAbhWkKVptFm1EARH23Y63R5vCmcXTxCtYz6p7TKi9d5SE",
  "key30": "4bm7RtPv68ekSDAd6T2EDC17kuvZiAz9vdrnPpNqbo6A7rJuz8trSLLn2EDygR2SvD9cy8kCsJubo5h9uzA7UTYE",
  "key31": "r7U6RzhG5SjvUmBFCXwypjn6631RVxv2YgNu6CZxmJSPvb7QjtK4TcRUShHQMHuCrXwLAuhEFgF8GCC5XtEo4Z6",
  "key32": "5BwqcuCh8Q67WS8wifjQ3yujQ6V3qTRLG9VaMJU99ocEdBZKaHFhfkERWfW3spo6KPZBsdnLK6q9aNBeqTgxYFsZ",
  "key33": "bYDH3R4j7fMwmA1JfTHfBJdoqa9KxWt62HXkM9WfnKXsoPmx1poAvPYXGZkh3Hjtq2pBgWYejrR3Ub55fiHe1Bd",
  "key34": "5dqmRimkysQ2pi5QXR7QiaahporE9bma1qW16vtucqgAMbKPS5Uto2YfRr7aszVqKLMJRdPsgwqNjvFJk4EJhbYm",
  "key35": "5K8WshrokTCcREsCjAVf6srigjhL4xg9QToZDFV4xboCPeC3JQFBuTpbeS74dp5HkoZnLZ4UQdbTXpGK5uopumJz",
  "key36": "NnRCuJ4U5ppgPhaKzjRm7E5a4EqYuNrVarPCcWV2JzExra4uUa3nFrW44aUVqn1LXHtMNVQVB465TAq1784pURK",
  "key37": "4X91oYxQ5jb4ZsuwA9LjrcRw4YtcypV45dUP6VxXuQoWCU8DQJfN2qGnzp8TbPxBQSzLA3cgScxHdr92thpC2hbG",
  "key38": "3faTVjGtnFsqB2M3RgzGd4SDrqHz1ZW8koa8FRCXUtYVe9X4YfYSCxKb16PhbRh84wqSuMSwgwx1PQitWcx9W7pu",
  "key39": "4wXVudip7EQiZtZx5XJ9LTTd2G7qn1kH44pWjTQUFtKZWpf8j4UVRZAGrtcFpCzQgnGTnrjS84xVAnFxE9FR1Vto"
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
