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
    "mT55o3S8J6Rxwnmg95Pr5HKGFnZH4hyMKnP2weiAUAVRtbZgxaPnBdrZSVhvespKS7WdyCBpKoaFeessiUw2uYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44r3CciMAGDU7Q4fSmA92KWj5TKRZVuP83yhaUQa6QtoQWz6A6zGMyxYj8S1Zawj7DbYds6k5Hn4Hv6X5FTeYZNF",
  "key1": "5uxVLwb9kS2ZdU7V5kzxPr65ed9qrKNzoGM41SrmTQCeovKCDa8sVZFEQtxK9UHSWNqZREg8Wi66h8ci2mY9JSdK",
  "key2": "3PV5pZ8ASRGkCHM2KQ3uJ7heCQFFoRshLMWN4zXrHJfExwb5URwtBiksu4MwgNJL7q8EHKSktPTgCHo2xfpWAwpG",
  "key3": "5urJbdV2M3jjupoYmCT49WDjqkipSW9gjv9knHXta8mQiiwCoFyCU78oZDgW1Wcvwc8Du8jBqzTWd3B4YrgV2eYw",
  "key4": "2CNai5JAUyAJ7cqU7emDy5wAyCCFt7QuHXroQ1PxKfQRrcdq8ZoPUdmCeFPBL3QEsiCruKxv49ryVcZiDJTf7DKS",
  "key5": "FqQbLkAqNNb3CjoYHjLB35bLF4DpMzEKfRJ5c6jF96m9ioPWKAM1LwvWTtsraeviTu4WmVdkvrwq1sScQrStZa2",
  "key6": "5Sjq5Pf6kpKk3SRWNyTYCGye6vXVENqLTGPg2B2XFJuGorVjAFohMAXp7sjyFU5yPuNdDc56JVkEAyj7RnfeECxd",
  "key7": "3Jd7frGBok7HS9H1YSx98R1p34vjUrS8hQjfdgAWdyQ6dSu39CPVA68J3Ff4acnKt8VZuBuSi1XJkyhxNXj4VHwv",
  "key8": "2ssKwN4uoW6DuoR1uDMRwHCu9qyYQSooWSagaf4rCDs98vq2QJsMPyUMxv4fp4JndxkQqVcqGrEeevsZBTKs2wNo",
  "key9": "3rxaG8qm9JXr65iZTzixpt9oSx4jGmJHFmtCTwrRuwrFzcshobxFwtVKiKii2Zys6b5KjoonrLXF9TNL84c8TaVT",
  "key10": "4rBkr8gV8cc8gj9mpBU2ZbQsTKcznV69ZyZDjBeV4TAzUMxEF8f8jsQ9sGVBbKP7r4U4L6XxLzNcUoGQuDePaQ8f",
  "key11": "2xQPXzTRjLYrFdcUmHgz6Pjk94zvnaouExMMZ8JRXpcQ1jBadVb4Pm1Lc4FJ9W4QFmR17LLHgqPQtr2M2FUsz8tc",
  "key12": "BU3nYpXPQsa39UPLbhSEogYDKbkRpQD1WaPKsSJRrviuyHeomaWUpeT6YXKQQW4ZA372SWjWSuDt22X8c5ivnbZ",
  "key13": "37MzCvUreZ15cv4h9TFXJL7FWDnbWxjR9AZ3tyviQKoYDgjQd9uWhGRVa5sjoe9K7P263XZys1xgRkGtQtSBRjiP",
  "key14": "5Uhxiz2Gcx6dxx7NSfW5tVk5ENJTKt4mWxXiwVAFPo5X3YTXkcriDQ3HwDYKifP6cYZ5f11ucjpZwk3pG98WYRhG",
  "key15": "3duVkLeXJaz4Rdqm3YneVuEgzkvGEuaUPBMmAWyGDzsNr1mv5JNbqxVTd8dCUu2tMnSwVRekbjf5dzqc1kizRPTo",
  "key16": "3nVH6Cu1uGbwBiH6crDXKZSnSjD5xeiR7GQ3tQA44mwJwQKX5DEdE1nuvpGYbZSZNQBzby2K6ucpymcpz2RVkp4k",
  "key17": "3umui4Q2XzWAca6ecQAWzKhksF5q6FmpqBCnG4CC9yWvezRzPa74ytFNL8T7dcuw99mjyyHa2e8ZXA8oCCbVtRtd",
  "key18": "5T31VX4cJAxvP5UjhBrp1F9VFyhbTRGMUhNiyfhzbc96CnG3YLUuJJwW6KqLymaxfoPF4LNsP5t67XsbZKZnMxEi",
  "key19": "5K9SwboxYZf3T3NoAcJn62AJS9iqRqRTj8oVEhGdnVtjDULcbTX6mefKQinLjqEnV23nVvzwGPMcU2rddPwvrkzG",
  "key20": "67fB6JCxc8NFSdyjD7paAnGxYdrwLxUALDyoVWYMXrmnoPiuyYhok1dVNb7okc7QXFnHHQ1uxUcsPZL8XaqnHSrT",
  "key21": "iiDRFMx5cvgnRp5QA7qyyZYFbPrrnSkYozuGPC6sJMp2N1dGQ9mey8W86q5kNqyPebBiPt89eVR7FSzTzrUiCbN",
  "key22": "4HCMfnq7sUSiHJbfXdecoYHbG8Mfd4hfi826XK8vCsejGJJUoLJuXq4RLXsBoM6bijiA2VBmJxfD51z7araX8Lca",
  "key23": "4EgBUPwkQLtmBnyMJaRo4M3GzEB8h7W8ocCoLoRkHwD2Xtas9WvMkFbcBGAhtprQd9PTac5y8xyisRKmNAp4oY4N",
  "key24": "5NwHLYQKtvQxGGM3yV1bFkHvsSVvnLE2a3JVt4eU9TXUjPpvFjLC6xUuDP4oWfLQ24zw8GuefFdLbQq9rSwjc7X5",
  "key25": "41zxbjQUN13fXALcZYFo4LtHrR2gPnbWb6PkpFyuD3NXRUEfrRTXPxt7Hu25o5xYQo1dTy7DuXZnbVwpuuTV3MYU",
  "key26": "2KR3Mt1fxTdZktJdT5Jn2XHpaW7RmwGnZD7GT67kUvHzkDv1dwNF5Bpxa3GpALKoJbC4R4eAnKQcpyREckK6DYbo",
  "key27": "5auoa7zWrVQF5AFkjvthCyWCQU9rsWY3tP4wHJVrsktmkBQr2Dz23qWxEmMGw2n7s4D5NsJA1ehBj86fDw8U9zdj",
  "key28": "21cERfoVMQw9kcVRGgTd4e1SHnL6wx6zqXv8Ee5NNMGzs3yE7tqC2ZJ1XE1rSRkrPAh9rhbDg1mR4QeoV7fT3T7K",
  "key29": "42pRQS113h9hKbNs3dvnPz7xtT5aRPwEHj95gCgez8cw7UJuocy97CR3aGovqiZNgELSGwPiZaBJnfmgF8UtDXTq",
  "key30": "36JBCP9Mh1rRTWs3kVyRaDfyFXnsLst4273Uoe1z2riwsMpfLMBxztK5W12e92QfHz9DhjqmawfdKZmuiDt6hme8",
  "key31": "4vWpdWzpxQ7QWBrdFcphKJun55ZNBBKrVP6sD91f7Ez8UkajPNcyxvWEWdxrAHYD2kgRbLeevXqfodsMMiV22hwq",
  "key32": "4kWhryL2LmQuHuUkSZ4577VWxH1UVp1rHuHEUwwcFKht7cteVCD61jy7rwqp8cJbtBPUYh7boD1RjR8TnPyMkE3y",
  "key33": "21KySrSfEN1hbXSBUAFs1P5Ydpp9nLCGnY68ywsJ2eSaeG8vuJanPorQk4QwmSQWXhwyYkK64abkeefBAkWLFMiv",
  "key34": "34GEBDYokSkQXdmvuPkCxb22CqsbxK6mBntwZ6TY2xtZadW71NiS3UPyngR1JP6TvJxdqTayJVBjcTMv7vXiufLm",
  "key35": "2ifVgyqU9pgkmYY2hGYqNdeJtxWQdC6Q4ZKDUFWBjRhQVAdJWbNYeCjyV69E4Q1WBk5VvEcuhNh5GxSeog5ZALC2",
  "key36": "G5hs3dbrB2QZxeyg6CSPtuXEgugbCw5kwCA2ngd8Cgs9BHXw27isuYyZWth51xsK2nffLFvcBA9A4C3Hmj2vvEr",
  "key37": "vofHpfZkoUK72goibDkbZEKDH6tQX3J9ckhKKRqdhCrSph89QTcyPKQQUmx4bWibkBBTZGUxPc2hwY4QQfcjLfD",
  "key38": "4T3dhfcNZS4oTHKkcTVQDCdWswtvDbV1eULBCdd15bCfbB88DAXWjVW3UZj2njubRHKugS6VSDcDd7qtkaWfrp91",
  "key39": "3wzVVCbXZ9kRztbvir5V8FrfU7Gd1yVS6Z248WXJz8ax9DTzzkfhkjgtRjd61f19V63atDpeFYBoii8af8zocHit"
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
