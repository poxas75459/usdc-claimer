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
    "2yVZmvo2d79HAsrByAzs85G2iANrobFmRJYsezwyTtCeoEuPaS7FQiWXakPG8X2gPhLwEQoJTh7pjjpGDczj9frw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tf95JkHtbBHCktEWkRANZoXuwXBXU5gZqeyfFQdyBnb7C3jiDPPkAWMUpTcpWLsf2K2ZpFp4XhcVgSV6gBzmdJD",
  "key1": "4sBCgWoy26Q545mZWziRwYH7UAYxBm8ZBu6Vxvbn4UNFNJf6YiqcbBwV9eAcF3cmS6gjjHELFDr3dRtagEVgGiUa",
  "key2": "sQd1ViBoDgUcAptC5qgHeoN8uBFe4GBxhTczKVcQa1XqxpVXe9nh5eGLo8U56VHVfuyU2gumccN358XT1BwgtbW",
  "key3": "3C99z7PadyFu5v4x3taXuWkoXeEmMEoG2sxvE1q98todDzvPAmrH9PLZzjw4ZM1QyKvtqL6k7mpLbLhca5MyCP1z",
  "key4": "2AjUUu8JPKNwPVhY97rRXHm3N9d6mL3LcxrpCt43xFCjEBks8ZRRQdqyfEVbxLbMMb7Qu8RXP4i9HRS9UHcUBK2q",
  "key5": "63epJxwvc4NzJGBgb9aMhJer9tuHqvDRchUQVMhdZsCRN9tbrHQXp4vUcM81CVGkrW9FRgDTkXL9wn3r5F4cox3n",
  "key6": "4i8Kwuc1NERF8YXEQJLfpDGFbFAEJTfqFX57bM5d2Wg37LtbGApvmfLxtQkCiEYUogQcbU8eswuCwkpS1h8gZCuy",
  "key7": "4FtjXWkg58BfdpXA9qdrPGoTJ34ogzfuZv4UCeBADuwVPEWY3CQpnhivuW5UfTxiRcMwZngtx927AFw167jvhZAA",
  "key8": "3NxAxVi7XsjPdTZYyrqNUxKZ2SBZ1Fnu1si2Ahok2A9JmXsFtKkyvmpMam2QfPUM8qtgeGoM4UpxcUmFeHX8QLHy",
  "key9": "2AYFmq4vVsiVeMrLeq2kcXFQgwRpaG8y9VshbYLrCQ5yifhH21v7JsTTsgzSpMdQ8fKhtYF7mTDy3wzupQs8UGqf",
  "key10": "JwbTHQUzDD2Sxjck9pxSszMkftRSCfNvLEzbayTCkdupML6zSHmGqdEkqnU9ypKDWXrn7tj42teVKfRqdTGKyUD",
  "key11": "3A42USEx9nAXpjKRwu1e2wbErUgRQwfEEAhxPeZRTZA9qPvsd5a6pZEYsoHWZKNuVHjB7sGGounbdqWyj9htcvCJ",
  "key12": "NX3SeRR3qbPn3uzE2dugCKA3QVXZ2jS3D5XhXa71zFY23UkfegF5Qwz3LvoQobewUGpME39CPrdkVfTUZQUMqBa",
  "key13": "4d8Jx3HQeX2pNMQnYKxY2CMMFft7H91H16AfuumwAVGai3426ah7t5Qy4S7pVtyXRTkRFaSj2XeTk2CrTdZxF6Ya",
  "key14": "2fA9VzdqAcxUKGs93HG74QpTAVsjzq6rD5meyMn3KcwdkCyT2GJXpVeCvcjv5KsmbjyEMnvrdc1Z2myrHVEghJTT",
  "key15": "4m8p6aAwwmi23uosPa4KE7CF4yffXBCTQjnf7z43yLxojTcKiJv8KREntX5r4tnMHWjfUpSzkkBQWkmXQyrPCbEQ",
  "key16": "5xxDjwtf6xuVYgBuitqgd9MTJFL1E9XU1kitxFLL1W8eZdNxMjarUs4uP9CsXxr3zuiAiGLkjYbVjKCVu6Kw4c9D",
  "key17": "4AHEV8oE8kGWsbafc79nAdJNFyT7P2WbiUZLrexZCcUzK5J94fNSVxNfMEg12kFZHkjWaHuP5S3ingySyXfEnNQF",
  "key18": "5ey3pujsZv1eWcoeirMKT4SroySvHZEodLaf3TkF33WhH9F1tZYciLiyFG9hxuWs7G7RjmzNdJN5Vd6hNan3ru54",
  "key19": "3TXv5LxrCL5KqmNN6Y3btGBiHjwaC7E8jnL4mFTug9iyXocvDDUuzg3UXiDfWzAYSxMkvBqDP8L3ndgez58YFT8q",
  "key20": "2GHqZ3r3yGNgWKS6Tgn6E1KkNJD7C3epto9yBqBQJfPiMtqHvjWXa8z4jag69P3hgSEGeQxJTiBQNd2Z1hxvLzee",
  "key21": "4YEinEmonvN5n5paG35J3MY8PyE7oAbmCtzRHG9sWFTsyQMd59pk2zxyjXf7k5L3g8pqwmyLy4sy5U6LZCAttynV",
  "key22": "uAUHTUviTkyRtmJY26kKzbSLLYjPhuuR1pR7pTtxfmh6gPs6Khe8UuNTGKx4YMHSmmUD9gZBphCMXwi73XNB3Yz",
  "key23": "5BErEn7NiGDdp9baCBSqbUoHiPYGgunmAoESs4nMiPDp8rp2yJck5UemmtAVc6MfZbqjWzqUGb7oUL4TyHyCtB1T",
  "key24": "36GzLAg5YizpEWvigajqR2LifkaudHXySDNGfKooLXyzzpYduGa5nVRV6C1aNsCiyGcbgeDLhRytQDp7rJVs1UA8",
  "key25": "24YhzrWhhsRvLVAVKubYmT7QxjhkxW5JCkcRCZ1kPwLoz6A4nAhGKWaFMBJBLLyuWjuvMiTcnKVfpRMHKSAdPTDC",
  "key26": "1WcmHMExBL9B9f9XifHFTW5tqsUUqRF8epK2STtYhrmqUWhgsaPZRW69Vc1NZBBx7aznNdGqJMRME4L8UaNn6iZ",
  "key27": "46y8fwqJhH2dNp9Y7rrGi76Az3FJb746v8DFzeuA7ezm8P5eRLPmms2MuDjAL9QqYYwoiKYwzDNokchyVm3yx4FA",
  "key28": "2BWkjHSit3juLqJgURqdKJrL4zN6VXReiJBgoGFWFihETSCHJModtK4xLkyQJv6HZi6henLvzvbmZ7mZQNS4ipGP",
  "key29": "2KDG1W751DY2zvP7x9UPRYQzDy1Tkvd55RX3FMNFPBbJTomz9U4QRFMZaqefxfpbBSzENeyAt48ch81vEcDr4rj9",
  "key30": "3cGgxAVw1puDZfy9q3dfoCtxR83Sp2DWuiq11Si8eUBDDswVVQdtfeJV6LN21Kg6GPVQFAFLpydHnXMNahmNhkGZ",
  "key31": "4rr21wnLrMXY7P8Y4QkhWKVHKSkzPTReVwnuecvUXs5QqvjS4RPVBdHvR5ea2UeieAdD5magUL7sTGkRg5oP2jQ7",
  "key32": "Z4eTvGZdM5rFGxZsf2PK3C9uZJtTFtDGvEQmq8hCyA2Yur3KT4MbLUuyrW49MW2PDuHWsZ5SYvKfjF9oBQRUwVS",
  "key33": "32juGuVDyaWQQb3Dt6ZjJG6Rt8mExv4EqVgAKdZdyfRgJ5WQh1NeiAVaT1LbHfpjQnnfzVrUtw28DMDRF4afKQz3",
  "key34": "49PW3B9d1AzdKNT69EUoU8wkH8MkFeFw4MMQbwgM4fwngTgmDGV7ragQAyhYx46HUsUU2kub7cPCvqUWfmJZYyF2",
  "key35": "3BfEALHmHnW1dYv5xq6uwNzDooD1PtP9b4DbdgSVSCE2JBrbYW1QSSmEHD5LPWqdWG5o59NKcQtHhomZ5BXGe74T",
  "key36": "aX6XB6snTBePSXXmfvjDRoZQxKWuqPdrCYxnsSoyH6yR4Z6MRR4GofKP5r84boXtp5exn1G84p1797Z1AU22C2S",
  "key37": "5tYSiC8JLKuqNsuCbYZBcuajW7zWoJpeu4sRqKfZ4YBTfNA9yu2Y9gbhFZgongCQjnxEgmTDpDqTsFmoqa1z2euv"
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
