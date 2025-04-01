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
    "3pfVb5jpoyypNHJzrrArE24QujUzg8CyeUA821WkXrRTd3JpZhiJwT29PeV53H4N83UUwUkmNMTdh97ps8RqiB2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TuwH96PfRVXvhmxdH94jAL1YTYebFXqjnWocB5wEjSnWtwRpLjTg3muVsX2x7VqGQou74FB1pYhkikrF4VM3rWh",
  "key1": "4yoCFmQbtonBfExVhV2PaczPHmC9GKhjhpYNmPmArHvhjhtXja6rrc2fEKnMDATWeYjdJzDxuhLmAEPNZevdLvtc",
  "key2": "5fCynaiVDBkSDzTcBPqZSJyeRntPfKauBGcTKGJmyGqHMn5e7YLZ2s8RSuAjo5BgcuXXgYAzQtGcVCYu5rhRoNdr",
  "key3": "qhXhkdMPHQvSPQhfzwpt4xWCWXM3LTDFZ97o7ieTazBJnuuFFRamo6vTRF5h3vXnDzsPqdcgQjoTFdiNUC4AABp",
  "key4": "5mjNcCs2WtwufpTpLV8eu8RmHYuFbvtri2peYGKFBjYbVSyQH3BEsZscufE5akxPcP2mPakWrFXeFx2L6V6SoRGz",
  "key5": "3FVABXyajQbQoyG1z2tSo2NncuPL6VcWUdSCw4jCdKZj9zFfbCqAaAV2W85SdXqvUTnGVkqA3bWEjJGTYFoiLvVy",
  "key6": "5YsmMUK5EgFe6sDfEK8QFoZHMEU6N8pirLNxkibmyfDAgH5Tt6hk8k6q4rzHEenXEreda6Z8zDjzUX61gEHvoX7e",
  "key7": "3GdUH7hpavGZ3hcmwc4uDhf9wPaM98dVmad1FfAkFQmzq5nSDSMzT7d4KNmm52ZoAMadtxDRGMynSUAznBbmxzzg",
  "key8": "5aJiZRvKhnPcBNdHLxcJCSFLawdQvcNAZfaAKyLczAQLtJr4biPobqZjp9HNHffTgwygW24Yy1egpRDFm67scmBo",
  "key9": "5KVCiRDz3WqrQR9A3cYXSpNkiFBJLb2ZPLQqAWipk37i3RToFdakhk7sMXcj5ww2Ko3KR3WVjms6xhAAhT5DKCHD",
  "key10": "v5MzAWSH21W4a9mduMR4iZApUE1BjxUnJ7YQS9a3rXnPvjA3ZKYy2Sy9MJ4DjUnA5QbG8e5gUu5BxNhip4GKJZA",
  "key11": "44kLeWEqfGNGLXNqra5qNkFPzPAR2zEmsKmK2r8smEt3TcZPJt6K531HNxxed82mw2evMyoG6wB9L4dGMpCfy2Ti",
  "key12": "LKpfDEFo1xLRTngyKdQaNoNYr4P8c1wqBx7wm2yS8xf4xkhRnCJfcYfBV8rGgfeaQzhTEzAJ1cJkuNLodpc44hf",
  "key13": "3raNYsjk24Du1uMj7LT3Xeak4rERxyvAWsQ8ktTn3G2A6mryvignwbJs4JtaUPSQhgceVQY9bBUhFxo5w88SZNHF",
  "key14": "2Chn5oeMB4LwgRP2dYAyGybMqr1DUYnTmMyhExSLqBCLx6GS4YXR9S5MC6ZTC33jSHySb9tanwsFEAdNMNLfjqXS",
  "key15": "2hoVn29NHb97i7HYKpamRxNVyD9wKgZcbntCKrjMMhPeMyyZj1tyumk3yX4ZctcB1QXJSfYsKNCNRNsRGkL3eht4",
  "key16": "3SQU8ZqfxiumVEPBbBPf25vqUWZQqYLgvUiRmqBV5332Fz7qiZhLdwhb95LMmbQJMiAg6EBvibtHF2hF6Wxn7eJt",
  "key17": "3T1KMevjcVvK9kRDPfZjwsAuynXZsZgitGbBc2me4bFgHFMkewYWdkrtK7RB6Cvz7WSJdHWGwEvZXJsswveyjZqR",
  "key18": "59uuWA5MDv89Y7zFBH3rdaA1g2KFtYF6Qu4hKm43VoWMRqzPT3VMc422Y4ZaEL3mLKBNhztuZGbF5xaibJ6fEPap",
  "key19": "2spJm7pT4C4z8hHpQw5mSCPrMH4ouEWeioVrqHUxeE9ckSUFQjwi3cy1kyjmQS5ydD71oCnWvjpSgRM6EdnSbcAC",
  "key20": "4bz1YfTvF4HqAQKr8AkizsU1gu1e9P7tUHsrC5vqnErHiiTJ8gQCnPJsA5caETv3EN7XKZCmzzfoWeeBUubf6cJK",
  "key21": "2fs3eHPFTim4M7Ufd2nB4b9PJ6FhnSxf5cdzFsi8chzykkcZPdbAgvTxeSD9hDebauNnVsXnHaFdevpQ8mSwpsxj",
  "key22": "j2a8fTCKV8aJbYRwiLC8DDTyQd8FbrikQU63jwyXs2tTtXL2RSEo3nD87bbhAurXUo3Jio1t4ZXBE2GMEDsxrM3",
  "key23": "4iRUS4PXmLGvHqKWCDrNfpFmLPf9L5oteFsKm9L3ZUWzDoX31fx4zwMTRKppAbp7xyFgcxVegrpq4uzqE4SLGktx",
  "key24": "55sYx6Uus4SYhn7XbVZKmDxUHGEZfSyaCcWaDMrCuTqZadnqNKRU9gMrS4V6AmCLYg8LET16tdcMsKSo2DZue6M",
  "key25": "QsTvMEvMJKbksJJtQURh3kDrcP98qoCFRSdSDwfi6ncL5BR3cmmXsGzpDnd15AVeMBoEYMiaU49QWDTVQtqnYdc",
  "key26": "4wsmVd9nBR1KTniLKYYDeqPHwEubuVybN3QhehWUTxVxFdm33rjFwDj1aVgeyfFgt8pky6tjN94LXUGuHoJNEzPn",
  "key27": "51kXbW26DVP9AU3ZQ5r5yCyghM2qdwxojbuDmrJeqTa9YDjMzRSC7xf1SzAXcX7Rr5meTKPu4T3cF4vCSGVxrm1m",
  "key28": "3jH8ZTSrFEokRqRDfJ41ogN8hRrmRuyFSr56XYr2RAayUTqAcbe3ZFHrL3J3gibkoHb7csg2yKdU9PrMZkWBBei9",
  "key29": "3xCJzU957JXsF61iHSg7uaWrYt172RGydv7wAeB2qHvnG8a6GPHqhaCbFRYicPaHb44927vq22FF1tPY2zyWMLod",
  "key30": "2GYiKqadUaJCnR9Axcgwx4Me6ZsjD2VyzqZo61vN7xP88f9SkdJTR7jLpYcuT3UNrBQCjUxsap7PJajKYrgadUEA",
  "key31": "2NWT5HLC9wcMpwuPZzQChFEgCuYYE7kS6DtBLspvBCCjK5uyo1DbxBbpiLLLQXkasnBaxGEx4WxoNL867hmVEobM",
  "key32": "wfAC8jxE1Ne2raX6AsVy5Hy266RvYER9DWewVetseufPvpn5tjdDFc5JGSUocrzmgjsr6QQK3F9r8HJ69w9ux1x",
  "key33": "2yXVMCFvrsT6acnL1XVeWzcmoY8upVGK7iFeiW2REf8eHXUTCydSjRGwzDhFhVzvZEdMr67dMEbHnwqMkbWY5Yvv",
  "key34": "4h8GdAdhsyi7E9dt4oe8nWvmWdWTCYKqhp7DrGm9eigudXWTzbukPpMxPz1izR9CmymQXa49Yf57yp4rf6MrKs47",
  "key35": "3NnDsWZC8ygCB4TX8qJ7hXF7NRfxoM6ZqVwVfNmFZYz9JALU8En3F1PNkHtRKGtZZEeXiqQswQ2xi2Gpk5gg95N7",
  "key36": "KMC9L2LRk8NxmVeJyNzGbnMHnbubaCamFYfWtW6pYPQKwSYyk63wQWV6EjZu2qsLA544rVe9vZoJvhCzUg6UDhY",
  "key37": "4TmAGc5QbgC3BeUZY63Nv8Bn1cAHmygu19rz7Zz3qsZ8H6FaHmJ5zeMbxrt76eYKyQz1eCCXEfta8Tvee6uAyicZ",
  "key38": "4RkmSiBisZmHjUe2B3yCKDoxPX6v45j1MwCj2MHMbBtsQ1Dig1uwda3sWCwHkw8YUsbb7SiC9iVGw1FBUXvyYL3T",
  "key39": "52H2qqV5QZgaHg6xoUhK5fStEBVZecSqjUiqGdTMg5ez5zQFHamTKF8Gw9EUBqcmiKr3fvUtXkVQsEuzZ7MSgd3m"
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
