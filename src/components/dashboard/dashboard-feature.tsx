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
    "65ujpot9DRHgrceNiDeDzDGCt9knrj84V9wUDdz5isoAAJ3pHabte88PGU116XzcwCikqNH6SaUnLU9DoJo4cdY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21zLsKwoW5EUzwEVHgge7B1w6ktTuhLVdGEazXuqzYSuWFwiPrH7demTuVyR7efPQVf2qucV747LnSG9iDuYqAx1",
  "key1": "5rcKG6pW9D158XFkAcsjnPnDmMaxBfB2e1Xmxzdt6FSveKpdWhDYPNkVzaASMFckAeSnr4Lt5kx3sfWwNKd2fyFK",
  "key2": "34kCuimbDQeJBFYg5fu71atXgRWsXiYtMb8R9yHVAoCby5sz5GAX5UNhptWSgU9HvKvqegUn35qrBJXo3yaQTzeR",
  "key3": "2Jd6vYDfNZhyoT7s9nWULNjsN9F37uuEzCDpAUvkQexsEunNsvBfN7ZWWKBNK247TZMGhzTjMjhQyuUGTxhs6UFq",
  "key4": "2YE8aqKFBs9dTt4PAcNnHnDbKa3DJWLhhyFLZiRLSE1ECTsF1h7mw2YoY5bnGcF55XRaDBVrM4ty81SjLtyuhmaG",
  "key5": "3rVxWCZycXWyE8TJQAgTwQsAXkZk7xmJPLapwt5CZke93NrCAHcUvt7vFVDiMG6MikmmUFh45dEFtswR1oXug4RN",
  "key6": "38DUa2D3NH8VgdbjLgaYjHqsYoooffsJNzPKHUjHA8b29qy6P5EFBNJ9w3GPcVySa33Y5mYBbUXdc4NjsHbV3hnF",
  "key7": "33uZ4U4A56ZUPCu8Dko8N3aBsrgGM2NaM3zKF1mqwkMTXFZzKMhY6uKFKDCqF7nTPZEfiaQR5t5f3PFBi5C2buwc",
  "key8": "5BJQLXD1JeMCEE22Dmp59NggzGfo5YYJAV5zDbvSg4P6fFivheQjP6GEdZneYg8EF1bfzCRrRK5XyszzVxDeM6nt",
  "key9": "5HFYbsmsSHzpbdrt5BsuXjkEsWb6cgmWR8ucAUMftQDTvV8ANX7bSLvKwfCU2hj9CQHxbQzFYf7v4MWJGh643brq",
  "key10": "5iLC544DVbj5gtvKkfBr1Y6U6Q5M49f5xgaqRkbqoikzfUnuFi3hs5KLBLStEkk2KW5u6uBrs6jCWLxQqGR1ATT7",
  "key11": "3P12bT5TGaG9kywXhvQgWtNGKkGVFQHDDaxr5rHFW1oX1Ta8MgHAo3mQfPBsRCCGiBtchqLbKTXr9BuYxfmzNWXU",
  "key12": "46JSHwXr6dbQdG5uXUGHyzsPN6PFmLRiYmBNroyK7XdhuBrKLbtQCGSZXTbpuqaL5ZrXRJjrxeRWJUXxtdZaTZQX",
  "key13": "GkEmtr1RY1BoCQYkwvgQp1RAsxxz7vLUqHBgxtrPPuhCKjFxyHnBBhwDkHJYA9ZFutFbL1Hgawy5ZpGzJiiAw1T",
  "key14": "3v54ZqHA1dVAcScx3mD681NyAzXS2KjoGridXGgoM44ySvgcMUy7Caf6U6ssELztnQzkQJDx2rQdanpwhuPqY2Mf",
  "key15": "buAV4D4dqmvmQrxxnU8YeWoPa6UXAMiLouxjEXRKcJDMwcPDKDWEUtPoRYveCQcv3DsxyJgPpbX7jnnWdayAsqV",
  "key16": "5Dj4JSqDPfBUk9EK8vF98uaZbX8aEvgmtRiEN4dpmRAAwimBKdhHyMveueCv8MdbsVcxrrNzAutCswYa1hoiCTMT",
  "key17": "4wqvwrAbnzm2SfapkBzuebaEcgcBBTgh94aeLcFdD1ceZTa3XW724j4WJyGqjPBQ8achzS2a9CRYtwVwSDuX8ocD",
  "key18": "5RyNJxYDKtfNM9kx5nYeTdKLpKedjgn1kuW664Sa3Mf7tUU6PJPxXg3pY8GANE5i3fUqFbd3wkDPhkDLf74RFKjV",
  "key19": "3es81x1p4ManGP91cE8AAuQMfQz6kGX2aQApkge48e44R7hU2vZDVYtd4MkZLQQagEs2aF94iJtTNbSdx7naGp9g",
  "key20": "2QrcZyJFPNeEdRDrW8PRb1idC1XxYRtNczFMzAuziTeygjmTFZwQEkCs6YRhXk4hBsRmsqvSnvUGGEfo8s8KCsZD",
  "key21": "gdGvHM9nbepu2fehotGt6WuaD2ShzdhnqSQxDjHmBxAtA7A531GVKatEb2VxLvkf5YQzBnFRZjPimc9JRFTotUJ",
  "key22": "3RdPejnxteTya1z2icGWA3mzjFHhvwUpuboo7BujKyUr28Mv3LTTzuQ5tnuH5yBXMPuJNvN4YAJheNzv5h8C2roq",
  "key23": "5RVzo5D8ABPCupnjR1rm4bwuCHgquRUSNxWrRxZtGPRPx4sLFtjuJ3jUPD4Efz8Er1D5A2KhdZ9emiAyhFxFfLgR",
  "key24": "2Fy2LGJkRiJzQoRWQwZ1wMqr5FvFgxv89FpppupPy6UesnJSvLK76Nrfcf7cEmKp14jLG4o9MnXZjk8gaP2ZhtGV",
  "key25": "xnrXqY6sa8Uqwcq6ucU9acuHnd3zQwzw9ieSVv6GabjTGg4D1JcqfavnTCSH4AZWjqcDEChD1T3517MMhph67Be",
  "key26": "4U6p9Dv34kE2aJVV3jgxL6iJKJPFQ4wfps4ogVZgF2up9fkJWMCuYf153HV9t62Tz2wEtJE1NofqAh6wAVcVsX5D",
  "key27": "gMgUgCYV2dEJBTVhe9RPGXfbpE8NCxFzV4bJGnz2wA7HjkvjHdUW7Q7eN88E1Dn9t78EVkTGrpJPvF48PHLHJPH",
  "key28": "VFcR3imG3SJDFkhKVVgp89RjShLngtbi1QSoAefiaGhySiNFucXwnvgo8tNWSxcodpTh1uWiaKo88xCeWSH3S59",
  "key29": "3PbbXrhLUcsnZagSMm1b1KogbGLNRxu2REejTLjfPYfBcvMFVw3xwtqhHZgvgjRwJvTYmLxPhLTvoShe6oGEzj6P",
  "key30": "3eyNv6Shg5pXNApAwhZfEykL4an81DJDWMQYsHvUrdaqrXi5V6nYYmfyDGWee6CNteC4u4qyftzrL9ehgUVHiiEE",
  "key31": "4KobgUehAnY6nQokLfLngFH77c8HZcRrq2bZmjQgCGcxU7AvAR19Uhx64uJPn8kCTHbfhMgHDQn2aWEja7QGj27R",
  "key32": "4pbyexSUomYJFZSpG2KRfMF7GhgE3JEoysXWJ9nMcj1Lb9xej2Uc7cTqJVprM3dwB5xNUkSKQNvkav7aHUA98har",
  "key33": "3GqeDYaMTYGmRByCSBSqMECgsWF3A8zhRAxZMviRZoRSsa6LK4cEVo1YCqKwqPtjbCqph6B2SkzD5pNSJPdVNuBL",
  "key34": "BCNyQH2qtRBUVCgcKAUUNCj8dX6RDsMrTbViLG8zUPeq5g8LPWJkfZFbr1uRQ4R9PZq67D6GHRYheDTvAzZRyJW",
  "key35": "2MMTipd2Dwehgdjt8mNt9XhpqGYMhFpRT8MGUcSKnbXZMCP8duEkZdnh3y8cQH6KUNRY1RqC7uGuPgyqiaJvXT5T",
  "key36": "4zP3Qvdya9WPArRtRddk3GjJW5NGdX9DEf5RN1cFVmLHp8b2g9Z4R5GDxjAT9KNSLBLymc1CwYfiaJUyi8WkZhUk",
  "key37": "UcWYChmSs1gn8Yn5Qe4N7VSc5syjsA6kpTuueU6prX1x3FPDsKjhNnE26ZvKujiKYoYRYoYSMUggXYBJq3onJUR",
  "key38": "qBDGPnHcVurLPesKKCggiZrUf59XuRUUJAhStUMSSjspV1RmQvwWiymXeSyqwxd294hEtv5A4BWkGm93THX5ts5",
  "key39": "JJmxztHSZxmKaNtL1vzUcvLfNXSC8DdaRU2b53aUtNW74LmsZ8SreNFZF1PAqDqArrgTBKyT8o4x7sps4bd4BBw",
  "key40": "5aontiMEspHuJSZZCrMhGeqX5ChQv62gHB65LzcUMepgntSPFCzEd9JF4F7WaKC5baCyUd3GapVQe8HdeLodmdKz",
  "key41": "4KNq5hH1dksQi3fMUKtutV8FoFQWsrQwxN9m86rckf5xyPGJ6u8q24CVhRaciPJfjx3mqVEJFoCG3u7aFrA3M7Vx",
  "key42": "emHWUUGkvBqF5FRwxKsDToDesEfKKepwUHoTQ8Uoaf49NzsDSA8VWiuBq1P2bnCAeAmnCN8yJNYHXnTsK8XmU6f",
  "key43": "5Yzpsgfsk3G9G6kJW29xh1zZgBE4mxX3nmrMxkHtNThRHNptb7f6Gv4VHwkAHM2SK7PBG4aDsfBBsCJz6bZUtD4K",
  "key44": "4aCE8F5WMr92PPRgV5iL6Bm4Uj43gcfQ8uW5nm6yDKPjT2hSjj88U5EqWwQLZ9JQM2mG1n7kn28Mvk8vEfSogmqW",
  "key45": "4HFnoFjX2kMcToAtRz4aSqFZFb5RCBZ5vC3c792RAGE47byHsVSgKC17xsY3rRLFm36JNUX5jFx5a31m4n21LnWK",
  "key46": "59udVK6UNQiJnYGZPoANUeyxLeL71D5QWUnpPj1PXF67jbntFt5Zp5BbEsrYvqTwrcbciVScoZkF1HVyedsyBXsF",
  "key47": "5DjxKVmkHSvpez2Nx9dypDFHoe1F7KK6jNUBpFemAicCuorjZ4cJmJ89ojQBBu5guhwAyV5A6kY2nEbWgBnN4sss",
  "key48": "2T5cdqT6kYK6AWCQZegzChcAPgJfKTxf2pMEAokG1oTBPBqqfKp3A2jTqEYZQ3skhE5sjBndmUqmFFM25BHpHJyS",
  "key49": "2nbBB7Pnbu8UsqYvPm229L6TbY2bHZqvf5y9LKJgrsaVA4DxWandUNs8nmNtCZjTnicDzMMsaYyn13c2PecJtqfd"
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
