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
    "3EghghW9LrqFfE1VNi57hYDQAnVewmPETmTSfNY1Steh352xzHZq8uNkbnZnSCZZLeE4v9PJ1j23pKKUuqWon7kH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3fjYtQ7GADfT14LvrtU1oKyaxNMzXsv9qCD1svoERq52phWsnx87Ycg9BawE5po7gVMpGyhco7otVCJUvE4AaT",
  "key1": "4jq8tLwvjs1iNe21cBRae7igcSdsUkrWw7ywKVRnLHqLNETEdSU8DbtnSz23ur33EsTpSeE9b8Nj8jHHAZTi6yeL",
  "key2": "2DuEffLeq1qMHdbtBF2k4r7nNyBERrJQ47AdGon56tp1NgLtDN3ECUi9yxBGDTDqfCYh2Zr1UaPmaVT7ySx5XfZ9",
  "key3": "5yFqaFFC5SvHuVxNahSDbR6ZHcBhKPURbMYqcj94W5XE3Vea676CC1bisf1gXNJbm41LHnSWNF7q31HRXzhZeu7K",
  "key4": "56NLYUqpzeQezaQWXFavvpKdiptvMXJxrwN6WaPskcWTR87GHyZP3n5UUAVxNW95zjiirF8J6TZg12QQX7QJdEWc",
  "key5": "3xgD5zzAwxVBkZjKw7dpkBjPsoLfRNVyRqSn2aAxKDKBKRGfDFWp8QHENzDfe2nUHF2263bjDpcu5Pa1U7uWqa4G",
  "key6": "4hkHoA1aQ9h4EPyPM6NKwHBwU5eHUMHuVtGiVCjwG9VUTAoAvzB7RLxzvB4WixxtvmJwbi6fuXonjxdFcUEiX7Ve",
  "key7": "44oywXpbjsCpV7wWyp8XFDCHKELJTVwuaz3u7H2A3tHa9bYg7wiivR7mHzatzEfyoqQKGsaJgXfqqwMAKVMkuof8",
  "key8": "UcUv2TJXkq4pcWQWvY57t6Cab9g4RcUHKW134z9pkwp2456jyQ1pSUKgekXdWV8wkSm4P7QKUhTTZeQx7Fr965W",
  "key9": "3MHexRDiUiwuHoP3sY3AGNd4b9AGYJjeuSCRJhbC82x2fH2Du4bzGJReJBzFymZjZnDGAXoijdyTSQXhhTtcW68M",
  "key10": "4U7GUdhpkUEEyPq9zRESHnZhJFvKhdoypT3bWq5MeGhmveUaiH4a3YDVG9eH9RRJfhNRqcr6Bs3QwhKckCUyfYGd",
  "key11": "2tj52xDmUjnqshPnHfryCrokK1yHbMFyF51JgR7SJDnDDhnTCE27WWCmj76JePF2xMZMpJHt1mjRmsaAXYyhe3ca",
  "key12": "61iUYk8VrQ7F7Z8nMpQncxwpEK8xFxiif5op3gbjtD43jLzJXzkWHX4RWrnoF6Ysa63Jy8C1RzFZP7CFSVhEjGkn",
  "key13": "4zw4ToED1x8tt753QA5s7rK3kquDLG7NYCdEv1M5jkdxuuY3aSZTL3VACszgV3mKmn83fpPN2S3EHcQt3tcXYZDQ",
  "key14": "eipway7uG2akBFzoRaLJ3aQEJFu8xWvREpcDNyf9YXydZxWgBoGtHdgbDiUxMncRDqHBPPiRb4AopE2HN7F7Qyf",
  "key15": "56FpQCBARcD2csvupD2QbZBdvFdpLCW6hyW8xLdjziRwsdF3gBrxwQn5Kd6iL4T8keJiTZUw1tfdanXeYH8oVEo6",
  "key16": "4FujbnRpACbxMFWnzfmkL9E4SdnqdABYjcGk9Sb59g6TkK9bk1msS5pDPweJqisukcQxduJqFRoiVPov68SeQXkU",
  "key17": "219fa6QV48kxjKXLwwQNf31dEVP5iXBoeQDS23bf2wY2oACpkwos2c67B4Yt3fWw9wfeAXHKm8NivMVeGiUW2oYN",
  "key18": "4a79ZMksQvqnWFdEGMeAs8uzfsgVdYsj3eX9QDbyw7JAKGzboEphupZDnixcC9pib5k7Vo46nRKhGYRrwK58EPhx",
  "key19": "rKymKEuZiuAcmHee8C2meeFrHDuJwLFLMEW1WGC3ispWypvSKzf9AJCERQAoP1yeFHzYAXDgCWWWzQR5jjkewjo",
  "key20": "4hfyBbZFwbm51ianfaxVWFS3cPRRYzSuKgqB53wfghgyYEiB9XcDrZjzw5LaKUo9tQB2GVBbvDdueqLp37xV2FVZ",
  "key21": "3T8tDoKTd4TZP5GSJAop657cjtfbdABkwrXpLRzG6R3aQbDDRfd6fWSjTDUQ8jiNaK3kQUoVztx896ZXU64jYFzh",
  "key22": "3hsb4hRrpKEtBKnrYQnfFJPZL9BGvxZo49DAemiUVru1oqkNvP811VDn3dZVh1nZW9xhN5eGhLy8RAiXxYWT8vF7",
  "key23": "2e1bEX6oDPpxWcuMErCEbbmr8DkFD5NNKTJoHYUHtNMrxpifeZEQTw4STr1K6tjHJSXBniVBw4VNidb4hxKScz2B",
  "key24": "3pvJumD6MpdnQQM7QveoW8dKZXJyFk7T7xmEusUWNeE4Ki6mY5JqVqiKEZk7m2SDQE4FzWntkdQzrZvsYQygYPoo",
  "key25": "57dpi3CSNCt16zr1MGzKnJWTK53mWq87Qw9qjGG4ez5vZVBob14KYEUQepTN73shza1hFUf8TnmoN33JqGwUCKwB",
  "key26": "5UpD4E7kpiP2TojbDLtq5Rbj387eMbK6WkvepFoWZVnCBqZcxUfrCzTJQeBzxdog88PPUtX4pQ2pv8f5WGmmEk9Z",
  "key27": "4kjkVM9DnscCqqAPPurUq8v8NcLKcgUhjT7C8yAStQpee9RAcUDt59gL3vrWUkQw8nFhdkQJV7MPt6XH5KWFuPSy",
  "key28": "4FDWXVEi5GWkqmiKcSWgg5Bi7mAAv5w1gRewW4a51aZjmuP2QuQsKYRvgx8JffAjhGRQetdkjy4kYKi7mHFqJw6E",
  "key29": "3uhGeiGEWaNo9CeGJRxER4R2UrnCLV8KSBUgDUuePrmnPKKM9pZKJa7P49xoCreAGEJnc1kuNwWdiyTjvunudABV",
  "key30": "4uFuF29sEsqN5x1zVo2egteBLBGPu1t6e3e5iDUbQxZZdsTmgBYihXPBsfytFS4Pu4yxX5cXHnHhXv6ugTxKJbjG",
  "key31": "2TRVC5FkvSnqxvMTcAKpqwCvQmryvA8TiYdY438f6pPeCfyCGhyswaTjZ1dNYAdhQrUKTD3Q1acRXw7KNTNgtDEa",
  "key32": "5M7ppuab2oDqZyCBZBhcdKbECmJZPsjyAMoVKF5dhZSS7PnpZWjpHZ6RBMENJapgYehQTQb2KVkRhWmKrfobLRRf",
  "key33": "5meTregZd9VRhyuCfh64zDuscVq44xNv3Li24PfjTgAjb1drgKmV8JprCxonKT1jydVnnb5NZRjZmLStLZS8YMDv",
  "key34": "3H3bcPft1u7B5fGUrawx4QXWZ4fiG19wyYZpSSwmFmvSLJTK3RuVyKeFSZZyggeT9SS4K7wz2mw38642tN8XPijU",
  "key35": "pjoBGmtbY8bauk2Y7xDhmDHTNaZijXRLRcE6aRf4JgtCVqgt6EJQ6htaASFV5MzxeUxngJtz4ebThLdGAUQkRxV",
  "key36": "4LGgKyM8mgq7odqfc7kHs93reeZ459iGUeme5DbfBVdhpsBCauz93JyNyV1FJNWiwYHg9uzwJvW7kzLNLYc4eHio",
  "key37": "37zmz6ERRN5DsekdBfLnzQz2ia1FApb6PkYEHh92D9WXDznDC755XiBpehMMCEvJt68eX2MXzCL6rdpBNYxkwR81",
  "key38": "44hYkXx5oU7LZJEhayFBp83MmmgZEEPnphMRKzFk7KgwppG8DmTxJFcwf1zWwQChHfVRBXB9y2ogRQnvpN3xtp73",
  "key39": "5uuuoCDcU4zfZ2ZLGfG9gUiQqFJkx8d7boEdD1uVH16gSHDV5LFjGiLADxi7Xy3K8634ZxD8yr2bMooJgjXc4wWC",
  "key40": "31Lrypk4j7b1EvfrAkV6rT1fU73SXCZVEjdCwrgNV4pEX2WYQSwKDEcStuYm8J2cSemdDvxVPRXStSuwUE76Tn7A",
  "key41": "2uNy76LtqDdqxisnawyMsFhmPMKqj2k7uoFMY3ikqEQ7mrfN4MwPAkLpz2jW6xoPDzfdotnYgJouvXY2f3nGHvRT",
  "key42": "3tuMYLRQkwLhy55Pq8zpEmFqHmCKK47cdAsbbzgpkRZPKua43xdFPcsjBrdb3GRxB1nut5nMG6iQHfRuthaJDk67"
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
