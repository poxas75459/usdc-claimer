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
    "PENhdxQKrsEkdCAFNa6cgJYxC6bCx1xQeyi5ier7GFAjFdWw1b65hjPKegBqs9GFq8oaZeYSTaTsXWAtxFfawLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKz8BZmJVPV9AUdx5xcKto4hNXPr5wCBRFGtFvrQLiBNi1Dt6iUaKZKi8yJwJWBAp6y4EaRHGSE59hnP2GHXKVW",
  "key1": "4fg8RL9Raq8fqS4zQNaBLjptVmu36foQPJYgCY3CHLRgxHNUVvnxsxErd4TUNFwfNQPcqt7qDgSvcqERjJnWjdQd",
  "key2": "TWsnGSgfXnmPdZqZFcDz43iJ5zGcUCFshsbXiR6f821DNvrqXcf3hPu8PesvrbugE2yhLBB1R8sSg6oCRtmUt5R",
  "key3": "4ajW5kdtvorBam64Q22FteH4wrWT1NsTvHntaoymSb2UsX5KGf62EoEQqiW7667P3uCWUJzXDz1oMDEU7hWzzg3R",
  "key4": "5pm1aJWosXfifcma1xrgNsfu8JKbrvFvzfHtSbRjxWmd34TtbjXXVXWPog4e3NiM7VhM5YTYenamCjUELh7SRkrb",
  "key5": "5dBZZYA43yc7VksZdW1YuC434bmdm2oVnNu5Jy62wYVgwM2qW1ywfJ1rF6upQWaswXgpQzynnMvmbzoFiymfKGbL",
  "key6": "2173RKQWVNi6zqKKdczKb6mN3kHckvXG7X6T7RgFLcPRizYuXmY8c9GfCaKHzLYUzgGDxduR2WMuALE1HyCQHiHi",
  "key7": "3ouZFhjdNeyZh4oBqBdaP9mHH7q1LqWP8Vp3zvfuqBbFFtSYTS5HBfVqja5pJTNeYQn86ignhwavSawuZRsyXMAH",
  "key8": "Cwi4zChofRX4B1aw1u5pRQZHosd7uhaQtnmw2QH4amzU5daWaxsEZhFmfKpg8W5FcMN3kK1N1QgUBQAXcbvXuhm",
  "key9": "pYPa6a8RL5CVFqjqtcuyqxEWbTDnpSb9kbhLDcN5VzShen58sQ1N3hoS47i4Uj2hVFF2neht7SJZ2yZLfcqUDJZ",
  "key10": "37gRb4FTzFXEqvFXuULQkcetjtoi2jpgW1asuY4H484YaNapUsnRiyuJcm9tdmaWW2BSCL9vC4A2Mfo6MR4fPEJQ",
  "key11": "667CWZvPawXNCXHgbS6CWHFwEkfU8BNSc24tr4qV3M2J3aXfTpvVCXnbt5FkytXeSaAuGgR7Ydre1qTzEjeaTeMd",
  "key12": "236ps51n5uWHk6MrYoUHsqUqRQvgJzgVobyv8yN2un4YeZsJBHTXuHi9Vg6h3GLnZYEJ2HvR33HfJ5JpQVzbcuHg",
  "key13": "5SL6bevMEaxfgCXMo7iizuiDmW5pvuoXtLyRW7nrshba4jgoJxkRLhHBmWXvgwaMc762KXSkNWpuASm7cpptSR5f",
  "key14": "3LuFEWHoEFxJtYxzbrWNFbmypiGoSYTuJQwffPMxQLTLdCexnDHE1xZrYbLHn6QbwGhUgpzqcTL24H3oKV3rPcdR",
  "key15": "5xxZaNJdXLrGeQZUaHr5oCr3YsYSN2azXtwwLRC4SkGWH8GLnQviTMHc8NPEGuVpqC14zy8gcDEsUENiCXp4WyEx",
  "key16": "5mESrGHZ9sJLp1YNjkyoefDiEXWu3eQix55jVWXNrFsk6QiwSJEzXY1yi1z3QFiKWgh1fJNBvzmPzsbyFjqugmuh",
  "key17": "gdQUf9hdBWJqdQis7C3RqKiujACfmmBZXkRXiEnfMDvh4r8o4yDupqmFxJK2WUeVYmUEcyFnDuSfZ9au4HkfNPc",
  "key18": "J5Cnsio2N4DYuGMT27tmJab83HbFNGEDXn5goqYpBmWCWdBHFRQLg4fiorFuqCZyXkSWA8fLkeLxPFcTduhzpAd",
  "key19": "5GzvaTW7TFcPpt8o8a1cqusSJ16hN72EbLdZZQPtWERW9UuamiFmKntDbA8btp6CiTQhP3MesGnsWruXSBu8FYim",
  "key20": "48ZhLmNThazgLaRupw1dhEvDzYEjTgaTUf83A9T9bBTu8aSaQyk81LLBCTXcxNQY5YodvX7mTJPT2FQfdEoAwYA9",
  "key21": "4i7FqKVcuyQ3iC9hsPaFULrp8m86FNZVBC9MdS5MkyBHDaKrRPid4FCoXpA5rp5sHmdgjP9yabWAQKh4tQpnmKbf",
  "key22": "5ip9c3ccGS6tzK6Z7KR4VbXXoCxRQbX67Ju5XeG63uZWurnfczAnbgsXGjaxpRfwPkq6AzSVgrhBFttmhY2PySD3",
  "key23": "66HH4x6jm46n9xfD89QxWB2SoUKcMb9VsLcaz9Cwsz54qPmuhNERiX3wJouy6thUVibyGnAJAkEcL22DcbpE7svi",
  "key24": "4feWMH1som2g8Bvj7e54xoA2b5QC3rfr9tN4hhtTSQvoczbk5K5LSLyTouCbTkQQ5DCfyuHAdfDTVPLMXiqGY68w",
  "key25": "32HyPad9eY4z3Y87MhuQAMA3y3rwdFnaqpiV8MqoXNMCPccURqAsma1iimLuRSpcqD9pB9gnAvg5JSrhYoeL2wEc",
  "key26": "2v7TiQ6u3wo6M56Pdmq1MVB1n6wCYQq6KBHMk1bwncqh4G2LTbdhTY4LW5md9em6Q7GSHbuzmV9vb2XGFjWwTbgm",
  "key27": "32uYoVvSq5smaZJ5rzuwVkyHg2SjAQiWG7urGUVLtVqyxKh5Qnc2E2bJrgBjapzGXEfoJCweniArPEpYwrXvemjq",
  "key28": "3XKJVw5bZvUrbZqaEua84jeFKgWWgsZcbVxGZtPmzQiFhGYZPs7cj1Rk5S11zoiZraYF4v3npFCCHN3Goe5fffbq",
  "key29": "44PbHhNYnQLx1HuxrfVSWqdHCzPAp5SLX4K5fhPY24Ys8j6zEFUJridKSTkhrvWXxZZszKAx4Y2XTM77KDY2pS7q",
  "key30": "4YNsPCypiwVu5kVPjEzVhw3MWEBGtA5AgLncsFRLy9z12Bq4Cat8qx6zw2oajSS8sxChdUMg29jivdUocsB7kZSN",
  "key31": "49gUtLkoEZzejVCvjiaEa1gTHnPQhDovEd5zPrsA7XSgHjsydDthLrjAYbAWGjuc774dcTjbvs1UrHr7gYWMSwuV",
  "key32": "5ci7S7j9icKw3A6vFtykCn5zbgtKXo5FAwx9MomXDcUYYWukV3Q91c3HfHPFDcWmYVS5ksQxw33MvYESx9dBDuBA",
  "key33": "gAREQQDQ8uqJ134axnnVn8w78STgteXXdbFFXPXeUb2nAbddm33BdRJ2fwzsLvBv4RWxw3wryDngKWyXibxe2ex",
  "key34": "vX1JTXBfhMQqFvbjfYjZbeg2E2nmn7SqPLos6Vw8kWptYsd29EVSXF6MdLqabvFhWB2FywxAPn9KMAPpTMFEuzo",
  "key35": "67FeYLgMmBBJMUDsXfS6P44p5wpoK19xRLXtYZmh1DFJbNuLkB6Z7uMZRfXHQBcsimyEnusEBBt5JYHfdZYiutRm",
  "key36": "4wkNc7tsmG2MtLAqmJbfGW2aNUR627vt4KpSJGNicoFs2c4BZiFK3qVq6ezXm8DDxcC7nkuABzcWnWwvjUdmMN5r",
  "key37": "4r5q2Vushsbs8p8RntWheCK4tVjuttSZ8GA8KEAoveZcD7dzLSriwMWFhw3qbt9AhJYV8uoNvN5STN2mFjMkpLRS"
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
