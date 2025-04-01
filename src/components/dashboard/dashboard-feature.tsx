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
    "35pYTwPKaqzq8MZXsLfW6o4tUeYG6vfwSWegeS5f25FoVhQq8e4ktzRXP19ExdTZXThGZnthGt1Se5DjNpp6hhT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQMV2cHMoACKMVTynRb3AFmFKiN7P1JMkERcdDvJHM43V8TVsbv7bvK6CWjf1Qh8Y5hpbCGJUJNSj6ZuE6h8iKU",
  "key1": "4zDooWBkhoVozHzRQoAuo9V4SbSrfmMqpzWUTdErYT5bvb6qcLCBPScZY8pfDr1PbQZPFfrdjtGQdXoeNgJVaB6r",
  "key2": "5t7RANsSnZyqRqXP2gu7nSoU5ckCFGax27H6d2D6TKaxcJntGMj26u9qy2tba8gJN3G7yQKbCjb4QxozT6JTeGCd",
  "key3": "3GNWefAibqEEbSu3XddGMaP2TeXc5UdqTeGym73hCG8pnqQRSgmNRhdAVvifUc5szF9B8HYrDaWp1Vp2wkZwyXQW",
  "key4": "QGjM9ad6CuQwciH9u5R8KYXGbihWWSdW5XzWQMpWCUbCXKCEaqis7USBovAEMyVZQBew7vwuBMNq4X3NhA85Ncw",
  "key5": "HPAkpR67WanuqKTMpbuSPpegW5QkS9iio6D8h5sesACQqfL4hcPY8Kp8D8aMdEJba6z7V6fa9WmX3M252uj51RV",
  "key6": "5zAvEEFvrXZZCYEiGdZq1vMA7ct3e7xXGRnDmTyassDGH6RK41aim7VRcfmc5MLRPXmkBFrR7mtP6NgXSTN222Df",
  "key7": "4J31YSVuLrmhHWSUVEPz6aPNZhbhrPm9guxNi2oUHbsdSoazSd2pHJj1TyJsTdcqHkwZDzS3XtfhWBeevFK6Df3n",
  "key8": "2pCNgaYsPeoxjAb3QeCshpLL1xAiN9gpwrRTNbLa4DqvJ6sZGfu76xHN5yfUSJSAHE12xjrTJCZC575FHjr7Jn86",
  "key9": "3TJ6ANvyenJrFmLukUUe8VJAZtna8uZ4W7oZ4mmAbvRULHPvhpD8ZZfcyQp6NFjaUyqX48u98iAW6Zju4r58n85A",
  "key10": "SBrz2zsukw8nyyGmAKewwRuk9L5wmTc5NpyjvYeMmRaygWWK52ihJCWyTb61C8YVi4FcBmHsaeGNDjV9Qx7He8u",
  "key11": "vbpCDEu1nmRgrrebVfkmKxuZLswKAJgDCGdS7PRGrmPaUbSN5Y1ZYU6xyuZrVXvS6JFv1dqs9zQQG8CKNdWXS5o",
  "key12": "4gU4b7sb7WCYeiiUExLSPyD2MyyTFUb4CCMdMHGgrzaaBHwbtTvDjHgBgMHZeH6Se8LaoCp1KvaLPTx8SsbLFkgm",
  "key13": "3cKQnVYZMaXVYW58qFJXPQiCCorenLWMXiy2eg8dSXfNwQTVvUQhNcRQWFAaQHwTqqHZAZ3tMozPM2vukzHEVHU8",
  "key14": "39fA8ZNBmJHBT7jmydirktWrmjdzwnuRQM6PK2xSGL5shN1vvneuprYBVHv3Qj3V6ndRqPaaZpVyhtcJr2HK3n1X",
  "key15": "3TdqvQ8RVMUoyhBVFktLf2WW8V7p58owm8RtQbX5fwV7exuhj3wA5bNH8uhimxwykoXstTQUdSrFAqkrZchv1QGd",
  "key16": "4so6i2LH582P9uesUshQZFjWtejYv4X4cPG4TDQqpxHCT5ibWopthz41ARgnf8ezPAH3WomhaD6vpaUeM7AF1qza",
  "key17": "2UibBU88bAUb18kruGmjJWFz6M7YTmRgRQop1sUewcdKMC6YEGywUxqEfdt8EbbQqK9WuUJtKQvZw15AVZbKRYeV",
  "key18": "2csFVbEwHJcafgFGKgruBQUeVKLN1EDzPxRzWPEtABkGZSFWcj6DsyPahq2dAdzJQPsRseTSnPVbWJ3DfhKBKcX5",
  "key19": "Rotp81ye2cDuKXKmLdjuzRDcmWWeNc3MqBDUfz4WS6kej8azMoKxfYRpLRs6vtWAVDK55zE4KJFBM8kA4UF2HQi",
  "key20": "3ZBDPUiJi7Ucn9b66HZjAYcaY8enXe3TUv6MUjJMTUUo6e7aiCxPqQ2TWxpqD3C4UDTwRN8VM24DaPWVQGbhTy55",
  "key21": "2XpZgbXzMxCbhSKqwCUoi8zRwZAtHSQmE6aYTWWD6rA2wGbsrZGUnMFfYxqkcSFBBUXQpTb5fc3SsQW6Xkr2GyQ3",
  "key22": "2TqeJ7uSL84mrsqUTSrbJnSDC2SCG5GsKjZ3MoCersqTzo3UvZyPciECQBZb6sj4tnNDPdyRYCPkhJFZuZNq7o9i",
  "key23": "3VZXQQJ3Dp3AHEvgVWKMYe3SwsnXjD8YzK1TvRfFNasTbX5W2XxbdanqheWkAk1imipQKykMPnfN5fnZd8yNnvx7",
  "key24": "5Rf1G1UqdfV11ehbW7XvnZyo4pXYBhEE23EuGLXgVXfSwmJNVAtEmUd9NQkXUYV23UvxEo3uzAEmqAvN83vTK8yY",
  "key25": "5x6Ek4nbiR1LFVUHkp14RfNvWGU7umL4ZR3CfsKfDN6JaeAM8pNHuwn6eLX4CSWSzLqHwKrEyudUg2Ss1mgQAzrL",
  "key26": "2rBh6ZvtkS2nRHwQocopvWqMMzBFwm48BqxyaYJEuC1mozziC1hiLJbhrT3zurvG3x8kNm5KHeHc66tvPKFXX9Vf",
  "key27": "5Tbqb5xe3NXpwMGXpNQa3dzJqPcqB3ake32xFiynjouWVGE4QpT8gD7s2kS2ZR5opB2bzMr2xqfKWK4gjADHE5f2",
  "key28": "2s7iWxR1ddSHKWqtXA7VezDf1JqBZS4YtUhYZU5gwqT2kafN9NDiJR2jZL8xcqatBGtYb66twFu5LYmcVp6TZxEw",
  "key29": "5B4BtD8RvK91PGt3mA3rnNWDKaZvEAGqJy4TcgJRrw2tEebrfo47JuzhhwFu9vjp3XxrUGP2yMgNf6maXwqaZA54",
  "key30": "3qBuKtp6SUnJMag5hwfZWVwARFVcwDQqFb697fsVyP8L2AMzTibtGERXjdhqmyh4XXJ11hUee5VzmgKKXFLr4aP1",
  "key31": "2y4f2Nt4pvbcn3khee8keCDbSPPi6WZ1FMWZ8Us4tVGz4Jtqisohb3L4ffAssUxCfUC4Urr33WYjwRebcfHskau9",
  "key32": "2NkugzwWnXX4uaLBVopJpRQpMtifmCgqZhmDYaqBzihamg1eEPLXB7e5SXEntd4eaDqjDNNd4y526gXNus48UEb5",
  "key33": "4YvLzmn2vGnLA2sE2qjWZCnLvM6BFjrehTU5iMjNy2MCDfstoaHyJEecL818yELF4iTtjBZUMW8ixxe5QAF1ZvEv",
  "key34": "5regC6TNoMNjYxwwJFFEZeS66XmdyVu9RftvywF8Hu1V85iFg4xx7Qm9JBShfWN2BVGNvUWcfywYTrZgsNAuqaBZ",
  "key35": "bu2veLPH2qLwLfxo3DQGrM6434sHEeNPdrNUjEfUxSJCbtoyo6ed5MtPr222wDVShW3fve8pr6H4eLfHSp6jftW",
  "key36": "NF8YhCKSLiUUvaHitwd7jeSqXcCWu9Z667cC1PEyskU9Kg5WmzxrB7ocNgVGUeLmWfjCyAUEBg56PoPfvkGCLoN",
  "key37": "ehPrnTUEs9pZ5LN5QdBHmpMaNzefUqJfa49hViZGQZJFGURf4CtGnGhWUiWh18FkSFbXT7BiF4zmcMpdAG4RQdq",
  "key38": "3oiDx6br4KG957rPZoZWSVJmGg8um8soDUL5PDCVcrkxmkWZLsCHmwNS7dywipLyMY1zYqWzL6jiyaMRHpstD1s6",
  "key39": "2YtRgucBfwnFP5ywgpfQ8VMuGptsoC3H2vBxQ2j3ELPPL7ttVwweDGNwyJDqXERjVTQQd8RtvrMq8zxE1qKshZu1"
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
