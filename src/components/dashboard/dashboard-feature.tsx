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
    "5KCwcN3AyPhhCi2c56xeXm7Z8wzSBBubnzcLiudkwu66WVuhPQe7YGusbNJ75XkdbHhpLXiaFTsTwCm1ZN79UQk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWJvsrtoxnRhYb9fA5Lnun11WhSdfBHoyzQ3tvCFAXzn9f9N9FiVyaEpD2Hc31pPSFggBj14KnJaYHPqHSRKsUD",
  "key1": "55iDYanMCLfUynPdCVHo3UGAHm2b9n5fQHGDwZ498Lwp2hM6iMe3LA8Qx4QCzGbA1B9qyxVi9sLyqa3RVAU8EmqX",
  "key2": "5t6vFLzS5R42Kne8ahNJammRUupGDtyHnFhQ1FmX9VQwTMoDEoHnP2YbvZfD1L5PPQAx9kqSL3GxihWkv7n9reJa",
  "key3": "CdkCm3mZytxYJK4SBXfd6bqpajSbBkGRfdSfn3g5QiQTmX4U3PxqAyd9FrFGj4uqhoHs3L1Nxiwy4TKuVgWwwEF",
  "key4": "HxoRzitnuGQvXM88zHCgkGyT2xhMCKcXWro8zRNHDQXE29vHzFb4XzvH5MjDETUQnaT8BALquwwMaUtYPk83waB",
  "key5": "397ZBQQzxzxTgeKs21bpz4fmawJVbLjw5rof97RWBY5yQGLNBn6bTgQ5haVBfwsbVCPXDofDpx5bk4Xbo6vjHvj2",
  "key6": "5qWFmF7YWvX66VXUaJ8zfVJubvfR1E1aMiFnuZK4BtRPfo8ArHewkk7fWL1Wa8mQZbvCsxAoNCuxN6169NCDjdV6",
  "key7": "3X497iuGBY4agAQt5vXkSjiETdGWpMUwZUQ649igcaxcSvp1it3fwW7qfTEXpCCnarCKLZdbfwqD8RMDgd9BVi9s",
  "key8": "28qTHh4uPU91CWn9sGRWJyWwSZ25VCcEU24G1NRkmzZHnxtgzV4vG26NhcrXZgThkqAjMvGCCj7SFCEsaSJAf9Z2",
  "key9": "WDaSqdzaHdhEUWKUbB9Ttt7RJfnJm2TaXf4JYDvUNxWS8aMWQ4ucw6bLkP993ExVCTnNPJQWMpD6br6P24pv72w",
  "key10": "3SpWuDJDT45RHwLFShvrLhfYsuXAPMTvAH3CSP1zibsD2DenTV4phLDoQAT7X8uQL6sr9VQsxt7ocvkQ16eDYrpv",
  "key11": "mF2ya1jC8AqFiRBM4tkNPhioyk33WDQ1m36QRjfKgwkN2NqBHfPdyEY7PGNiG49HwruC63uwvxC5jUsnMW5ycZS",
  "key12": "tTKSra3X2K4cPqLV6gMwUtdM9s2QSNy6A2SJcNW25cM4SAqWqDteKKtEHTmeQrTPi2NxhHEReJpATmdKeVaPPoQ",
  "key13": "3eeTcP4uTTCVZgMfJaDHM1jGgqYJpRSpXr2KjH6Ug4wFhMGaCnxVremiGcj6ixY9HyY2onjJfss5Ay4mhprSRc5Q",
  "key14": "4ChW8YbuzNL9hK647CiHyDazYXXDi9wSRkpvToatwAQQA7UnB1L5AVr6qvmKzMdNWta9Ppnhn6BcS3oZrAnhqfZK",
  "key15": "RSVC5eY9VYMsNiL3nWLX75z6bwMVUsFLXzuXXS5fKp4aPWf2e8xQsdXaCxEwLhQ2uz1CrwATj1HVhHNhRrKnA8K",
  "key16": "5dt94TSAkFZgbSoW3wPozGjS6FTMfN5iaze7i3bGZ6nzqMJu31jBDJbA88AL32UCaHu9WxTpb7pp1UJdSVjqHxyu",
  "key17": "3xEwKNarnj9uUBxUgWEfnjYxmVAMTrvPhF1VoVXGqh359MysUyMzmbwsXPgLshoAtARm8eVzoq2BsWDhNipqPaHV",
  "key18": "HKYw2JNARR3mxHPQzKdKzUtxV3mSqXfyB6uqxVRCUEux1hfd8xygedkZUwub1QJVyNzmJkuRE9a7Qajrd15Xcc6",
  "key19": "2pwWxobM1Z8KrkH2dSqr5ooTZGV1qVYCbZFEh8DckcaBQq21ZwksJ64LEQ8xQ28xCpniCSn6xbd6fiscGtrBeosA",
  "key20": "PDTiskZPrXZguBgxzdfpS3sBzndZtTPs2Aqnop6q54cY89Tv4C2dfg5y6DQ4ZKKPSpn3FrBWZMme6vgstzDFVKW",
  "key21": "2ivA7FmnT9CTJQ9Hr24ZwHV6QTgdCCKLNcWznLbuTiv21YQnF9uzSZdGzbfU82LNcS2ZQDWLCJ9CxwDcATAuKzPK",
  "key22": "2Meve7PJp2WhWJfmdKjncMxAKciJJAJ8cAPowrpvwDJUnsvvrDr422k3qbPWndQXGKQgiSRj9dCzkAxQ7XbURv8E",
  "key23": "4HEkFdzu1RkCKWmWGQ6cRxdJJN37CX2huqtLfV1kafHhENHSoTFNKZSnRqteiV7zUwxCW1X7EZ8DKuVycQQ4ekD4",
  "key24": "K9WKxSkRtdQRFnUPBGe8Kp8DZfpTD5oy46UxD9NSVaGb1z4Tvzy3bwqypNSwXooCFZoXmSBeneEy3siRUfXHypH",
  "key25": "3Q8Sk1FUdAGXrRotmJJVih1YNTY267Mbc6usC1PLTCgMYBPjS6hhSJiWkCVcuXNCJvnkEXmjjEDusDE4jBiGrgLs",
  "key26": "4DzNonBpw1BydaGHhhxFFruuh5sxdNdFaU4XWvE6XttdqdMwknJzJJxMTyVhjngkWa3h5B48M3hyXcs6Bb8hKUTh",
  "key27": "QcRndz2KwTiQ14dxxPCoNg8WSqfAi2wYfAnd83QiDfmmV8aaaZiWcQwqjctW3kPY3zVfyV52doosydQByg4xbVR",
  "key28": "4dVYrYYizuMJJMwCcf28sXQDocG1Sq76B2BnkG2mVCZpGN8uciwoRGBV5Wfa1tUaW45PmygnWoxEACJ6Ve85MYdJ",
  "key29": "2hk8CcWfufs2cJ55JL2nUVdgKt2DPpLTm4VibjP9WbZTLAo4Dyu6jAg8XKPYR5q3UMdpdUcXd4g4sYMPosFd6qf4",
  "key30": "2FbxupZUR7Aj1yAVhBrUy8vQWUYyKRABzyd8EB8PQGbnAZS2S1UpNrmwLrM8BJ8j6i6Ki7oew9kFCb4pDgzwbfdL",
  "key31": "3dMrMUtCYHUTdj9P3sPjouXhZrdpQ12xQ4Vx2QtP6zR9NuFVtRvx1fBDs5GdSK4HfCCTipqBDZ3Jg6HNHn6UQNEc",
  "key32": "5tA9WjeHNLWByq83A8vWKrboP4ASx65rohaREdfbEKxFi9QFG8GskSLqrdYDYxQ5LyMmgWiHBcvQoaYgKmCC1Y5y",
  "key33": "2t2xAKBzycD1Tos2jvXWZ5J1ieFjQRNhAxvKaDzSmTDEzkEu4TA4XnKBZYcCmgQm3b4iuumJVxJs2X31kctb6WL4",
  "key34": "2hDDp82VdSxFNu5C6KtJUQnU99XwARmfNrW5wnk7JRXk9MDMeQX7UTnbruj7rVmqLhbarkYQF3jZyu3fURJ99XN6",
  "key35": "2bqsuinWrdvT8ZoTAhyZAjTZE62C3cUhRgKgGtv8SFR3vwhpdkPrCEkg7ynuxN58L9R3DXK6s6wEof4HGRCXeZnX",
  "key36": "5FGxBHUjHqETMfdDsAhYJ1FqRph1P52AopuxcfGifguG7NQynYNezZLHNKvrTSfRVNEXeiuyBf9VEV5QPUT9rRZC",
  "key37": "3MEcF1eyvfMMfghFweEZQJUDP2KdDykwWPHWgQ3tErg3LkB3ZvNMB7H8yesCiL9sR8xagiCSV25cFXjgi8ps5zpC",
  "key38": "pXA1WgSPTc62dTQ5HYsPDueXEuHurGNheLKEPu9iogamzRbzjiAanUgXfusV26T6VUE3fFA4eqjREtu2u59i5x6",
  "key39": "2WpeVaJ9Ztj4myCD39AjMdSZPQj9hn2hdKBHG5K84nPgPJJo26jAPuRmsCbCs6TbC4Ly9ApjtJhXTA6CN7MZKjfU"
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
