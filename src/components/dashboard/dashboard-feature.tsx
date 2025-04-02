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
    "2zj8WCwdEM4Y49vEyuqkTAKxNT5pwqASng5RCHzdTWr6hkd8FvcvK4V47hGxSmgbkso9BVBsC6Nn7TvjeTShcPLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9AGwDNx51qPqzozrtkBjCcqBmvsPz42cCJsdqYoAzBbSmmPnEh49b164eKUpn239SAgc99P39fEwme7XKw7BLVd",
  "key1": "3Jvcs85Qrx3Sa5runengn7gKVXMfY7e13qQz24Xy4KUT7mSTbrmjQ3MdTXLztM9zJu3eUaDHD4FcMDx6qAEPRYEN",
  "key2": "ma6LCohCUH6ggoUpb7RRnndFCuZE48NMQVvqQnHdky4wiqaxYGVK239dqNS7N9u3H8S2rWvUPU4Gm1BmQVa7Tbg",
  "key3": "22yycAxoE18eNXKWmLn1LF1A8xvTDAiQB71Pceaox3Nzi2TRA4r9QgxS5rFPMBFBTkDMJP58jGvre6J1MwJ6bmAp",
  "key4": "wHJtRZJHFhZsoDtoZwrDViysGA3pvsdsyGjZHYhXUTtdpgqejdKtwZuVgnzvPWXhHpfPdWxVuqX3bRRhRGaNAg8",
  "key5": "4mrm6BPvMxtj24vuJo1K2wi8aPBU3RR1qNCpp9NkZ6nvevhtxTZhBCRQgVqBtc6TjDssNqkcdR4oBx29YXixkyNc",
  "key6": "365Bb7JzXhGfV3Z3g8RdmAdXVJv7cmonAPCBh2kovx9JHtst2gGMbrH8xw4avtkyWhjyyzc7Hqh8VpqUxisJ3SyU",
  "key7": "2HDFSW9JXFp7kgpZdNedU7DwriG7oR1Wbbi99LCUpb3y3ngF9SUUYLwhdVHVXgNnRVoPQpVx967gMPwH9JcdGCMV",
  "key8": "5J3S7GNirm9P6rj2Hu6W8Bpv4fTzuudScz9NAALHqvxw6LTt9QLS9VoD2WHH28fsNGQnV3c761HLjvmtwrzVrTUp",
  "key9": "23QxuxE4WiXbDkXbUvUNd4hFYouebVyUuAcNLHiRojU6jJ1qBqCbCk9Arisx32wUzmCrPu2MgLq4WjqkeNGgpBmP",
  "key10": "4p5VrjrhQknHDqN4BFnG1t7JjM918UbVYPHAw3dmCzT3wEvdPSBBN4P1cKMqNhZQ9mVU4NsY9p3HRVqh4SJPoBQL",
  "key11": "3w16cckRnVf4CYnPh9UsW9sBUPvJ66AUU6Xpm8cgErSScMt3wT4XP2nrchePR6a4sxwUesyrttSg8yJcTkrY3Fd1",
  "key12": "oQQan2TEmN1Mq8RFGkBmHwXiuyBEpKWhXPJmuSNZJQNDxEqpLPuhRGvER6PukMXF36ULUArcEAeeK9prNrYQXxy",
  "key13": "5iJSU1QeBXRjfmFbXArdoeJhEv6hsq1EpXxDM6YH8edN9qvLsMmvskp2rfX2sJS1ZqWhGqTy8khNXyp4hbTbxFQP",
  "key14": "2udysoZehY9e521ERcyUMGj5FregRnejbRFABX5t1kyFmHNxyKYQPtRqM2GbzTumuQTpKLsy2HxXpeDhPzv8tKfA",
  "key15": "5aP8nsSD1rhe6U4Ms4uoPvV9xsxitn6Y56zApEDVV29n9mA3xY3TBvimJiAyxZVcE3M5VCTRHghAH3hSRGiC7yVy",
  "key16": "KpW7KgqnPdq6NWWeQppuKaa3bPymCzBUJ6bJVVP1a9jjFPvjDygpqTz7hkmGr1V23Hzyuw9qMrXtSC7n35r9HBo",
  "key17": "5BTaKou6QJfDWF6zEgyABr7iEyWWkTCRhjo752q4tituG2xHnUhVRGqtzHotAKgs12NX9jmFH2QJo9uRwMjR7Ney",
  "key18": "3f7fC1orMUUkJ5YwoH1VhSccSvM6f6DZ2zDiCc7rE3kMdjULqMQZhBeHKCKgiWNFfbVHZAPkqsPoTvGyzStvma8",
  "key19": "xUqYWFPSRQ7rPGg5Du589uvRJ3LMmrqXv1Xx8YeHikGZxDXR1xDuBykDB4UzgoLWGMLsMNZotuCwPLJ9dWnWQb1",
  "key20": "5qU93GRuLELfpmQvXvavJTFFqkVMV7GRMnZHG9J2TBriFkGPjV2MFqBmkQyyKEjHUd9gPrqB72fxZwoPuy4Q6NRf",
  "key21": "5K3uoTafBdjDpPeJNGQ1gD4HcU2sQBBJzGHUi1Hq9y8jUwW2Zf8uVsRua25tRZa51dfZVHSKkhK4KuCDLcJvyd2i",
  "key22": "4F5tyq2rs4np1MBfBEvy7aQBToitbE3X3Md42eCF1Wkg3yLwpznb62idWYLBcPsuagy4asqGgBhMGajPcMbeZKTi",
  "key23": "592Uyo5hG7LhNLrPs5WrQwGmotRyPYuiVDet5toPyzDBVHG3BjRLT3vrefoRbpaNf1VtRe4tcrWmvUQqvT62ZR6s",
  "key24": "39wbu9UB9TMbkLgR3hJQmp9nXwnDgvGaM7PFp5KNH8RuPB5SheVNuBduForgBv5yf968hnjQ3TvaAxgaBRKMqH6Z",
  "key25": "4HbtR4riV3VLn6LjQvnM9skhxWsPQ4faHPQhXMKeozuiu8SrsghZ4a7xgChWSdjX9eWx1CWNqJWc5GnMe36iGK7G",
  "key26": "3pc7qRyghaNmB7vvHoyZUdAYXg5V3fbZpcunzCGvjE6fm1QYpzdDLrDQeYfafesxyExAKA3Uwqh7XWbXoUPnpqZe",
  "key27": "4DENytSCBTCk2vbJFV59HfKCvvG7SPVTrLKcUVm3xmH3EG1BNvEbbS4csYDKu8Uq39mircdhRhkgrNb6utQEvd7T",
  "key28": "5zAzKhdsMUonJRFwPyururoKH51nF8u2LLqQZSYgBxbgu7sSvV5ZN1FG4VKdMMvP22jZncRuUZ7eyrmcaCYcfwo",
  "key29": "kXd2enBfnRWXZ5PJ5yePf2ZyDaBHQ44fPYVK5z1VZjSdF99bqFkosSpqQNKrw2z1ZFzNYexWzNFgTJgRABUWH4n",
  "key30": "4J1T7vg5A2pux1yfpVUHrMcGig3YKJ93gdREJbRZMq5keubbFwaH56btf1RSKYY9c2SWpL77ATGauWhNgywHczfZ",
  "key31": "2SG1LZyreTRC5V2V5PPTzzCjc2AmefMKLUW7EqywhC6fgCsiot3hqWCAstimcG7y7HyqvP1qCbvvVGMXMNRybPqc",
  "key32": "3TZB8JXKbhToZAmE6h6G1j3HaprCLXRVh5Hp5B1rvikkU2yYhJSwCTf3nkY7GcE7h3Mq3SuGk4ZxR7EJ4wtNqz7w",
  "key33": "5gkQRcHGzar6J7pibZXsW6rnQh8Gkbfh4EQQc5hzDwjQoiiTdw1mb38DCrTwL86RRun8LJSwMbeDTnGbxPkJbWuG",
  "key34": "5j9qx7KajwPhj7PNy9yUFansykUVxkDPbcVnNoKByWqCthBaPxyYrXTHyE3zfaPVdwH3NVnVPRsjchowH54VBh5W",
  "key35": "3BXait9VKgvftHiLwdR6pcd9RkxfCBk8yr4jzRCqtQpTSwgFLhL3ipLjKKfigBxjDFHvemNUac6osUNpm1Vp1ZUP",
  "key36": "22dFaX8kYXHh1RPDsNQ4D1ie3vrMAYq3AgSgqmKzQLisftUmSPVAr8QyMjQuptx28E6tuUY2ZWSiVkNHPmUGeZXj",
  "key37": "4zqEAkRHti5GGy5VPeWMawAkttApmed3j6NoKKmXWzGjYqqTVWkU4BuSRS1dBmGfTb4vpxoymJpGVCayoTsQK7zu",
  "key38": "3hTmWnrSEctFzjnd27sbLG9ySdmy8RbrzZUrevUboM7SVk7EFuaGcmzDZjEwzJBNANf66BTQvXQrmBAsNWpyUF1h"
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
