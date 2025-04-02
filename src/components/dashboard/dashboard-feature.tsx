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
    "34EAixWUbkv9jspUpYiH3oiuhFPAdB9dPLpN1Z5pC7MpbT1WxD65YLyXAnfEhki7ELk1cRSZ5cusL9jaVND8HnpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FzMPre9YE51TTb2SetERYVvpjQGgmdLyetfAur2FfMjuuJNqi5dxwKKusPiM6cAFrFk3anS6prNCWvxaBcwFqnT",
  "key1": "4h7hz6zpYffatwwti7BCX7APUVC5CKu18i8YXepeCTdacFRNwmmXR4yF6pr1CiAHr9tGT5xhZi9fUfWjjGd4CG2V",
  "key2": "66Frry214qVK9USe9zddzptCRgRh8ssCVA8Tbvu9cxqQg2XBQXZLbqQFnrKxSzjLW21nd5Tuz4HuNfn4Q7iB6tfz",
  "key3": "84g9h2Mbj77cj7e5bUpNra6pawS1xg59xA66kCVVgETuB5WX5Ur3LySatFinfHeZNiVbpvdf42ekBwaeFwhWKTJ",
  "key4": "4MJGH7DLMKtZ84T4ThnF7MeGehmqr8W7hHtNBs8mmZxpDQSwXxwQ3QdeJFciAWYkviZDK8YnwrKizkjyysiXDhoE",
  "key5": "3W3mhFt4Le9RGDV3bekXZ1ZjpDNXC4DT6rFBEVaNogA3qSYWm25XKQvUMPDS6gS25Cakme26WZ3UbR26Y1ojkdY3",
  "key6": "saQdmJEtoV8bpQZrGFrsd8p4RVeZg7Jyw76AfgPygXDpnmegCYxb1NRE4gsA5jg5RXUKvJkVhwWbSemepxtSoUi",
  "key7": "4W3eUxHjL1ZioZ4XHpupq2w8qp1KTuBoNET5HNdNiDTa1LNx3fFeY8LK8JXgPLaeMorgAtwaTUzmnTvxUvtqeAGK",
  "key8": "3W6KP6FrwM4T6tUSPh6ES4LB6uvogCsGNwbjFitUWDT3jLfELzrP1SHTvD3J1cVzMRz8ccFNgphRWFLPHe3nc8i8",
  "key9": "66Q6w8VbgTk8jMbYhmfr8y1WvKWhuYKzw2vz7EkaoSs17hP5CrqTUnT7attZySpL1e9QDzwuW8mVUFHdh9mn78qY",
  "key10": "Mj6wcBg2sFazRgZEvKztsyAKiqCt6SBDM9mNX8L2rbcpFf5rR5YXmVoBwWhtqNePCNyxKrYshrmw7M2GpGkVVsn",
  "key11": "PahgYwJWotrzpYkuaSeXCGmRmFBdqSFifdXw3mPhv9AQshctc7tVbn5jgHtVf9pHDVNMGHtg663AsDisCYH7F4H",
  "key12": "64vWLgCgQJ7z8fLUnBuKj96Sqr7vAmMfYxRDDKwqAoYQG6PaMPa9rGVjWj5hg9P9jWYr5CXKZ6v2V2NesMzsksgh",
  "key13": "5ro4gn7jM9ptkDhU1WrwfaMAEHz9PDswDX7EEKPmSCVt3coeXDTKoAoj7jRPMfwJGQ2huPQoiXxd29UELPLEPxcm",
  "key14": "2vVJARY2six5GcFniHZdF9jVhayVTWBWoVExVvAFdB1coaiAWqR5EEPKGwawq2EpVnuBzTcK9NVW6ycKTgVL51iP",
  "key15": "4u2AdaFwFSn5oHULS5ocJgdjaQ9ZT9Mj32k3ySnZzRJ5tey3XpRMZeN5oFNupaD33N5L7GXKP3rJua5hiqdea2tn",
  "key16": "2wCaiGjKuj8ArFz7FAhGif44VQuZZpXHz8sWwExMViXmGYk1Bcf1Rq2DGiTX2DZ6CXrKD5DyngyHNibZ9AoL4nFG",
  "key17": "5vTDZi9mxpReCgBoHdkgbJFZaDwCS76yVdUneP36a9GoZCZHDe4LaWw48gQ4zs2kpgUHatHJAgVZGXbNEvjQ8Mjf",
  "key18": "5ryoLM669kC7MYvv4tmLBrFzonSyGfapj7AXgGYVgVtYRjpNP6jfVzRxCW4N81kXD5L74ihRp6KjvyadP3nbtDPy",
  "key19": "4VuyQDoVySsHwD8V6J9WBT9L7FdHHRJ1gSfCA1a1AMNJzPkDkKAS9U13iksSVHUfwEaEsMFdLCkr8pzhmdosY5df",
  "key20": "3ziSJkaRheyXUZ3yfJmYiuY9tviF3Fx2nKs6We43PQEeV7jktdtd5qZ6ooYFTNEnmSVrMdFGqVNrBeuz75GM8rKo",
  "key21": "5cntjFgVjnirxbGatpLRYuZV57oJVFGD31cMLyhNRgZQbgteXRY4Wp39VNbGfiJ3f7qxfda1VRWGamjUWxoRzmHT",
  "key22": "4mmfZJyhprC8odNR7NBYEszsc7nPeTj4htvNgHbqp7Y3onqwxTc51GhuRF3fLfqE5QB6GAen8t6Rbdj1pio4eYbR",
  "key23": "3jaRh9do2HbowEY7QH3TFYtvdFKqG3rj5dDQYAFDrzkb6HuUDaqjCzRNSajPrxVJsSWJ2CVjzk3BoDiMhfEvNbng",
  "key24": "58Jrervzm8q7jtUTsq46K45r2M4wpycV9KwSptBLwBEp7fN5bmewWCvmNskHAachz7WtMYzNkFSS1S9Se1jspzMZ",
  "key25": "3FqbdjjzStGBxg7GmeGaWQw9vre7uqNqeXAVRAyuKYBh3t3c7mbtS9WRnxgAiwcJdKoDd3QwkHsQrT4SWq1pdw8i",
  "key26": "2fG4MQj433g4V5vFPoGwyqcp8fFHKWvUGEvtJCM3oDCxKsqpquhYoqvMnMdsX1xXsWvgYTabKMvwtPLdDx1hFU5S",
  "key27": "21XxvJABbMroM1TudLfqyUa5eQcJa6HESfUhFfHcmAAZ9hxbqJ2sS8t7pbdtm8AJ9q4nmzk78whhnn2aiKyU7cHR",
  "key28": "4pnnMFaKNxXpZ8HzGAVVr6hKdWwEwZriJMRn5QMK9comq4Tq4sdpaRCBuUbUXRarUjBLZJSuFmUKnRS7xTERpV64",
  "key29": "3fhRsbjukEtPH7HyEeuvEWBq5i822ayxzoX3hVfxLonhow1Mt5Sd1bQ56gRceMke7YqxUbZy2WKikaCSfhcJiH2f",
  "key30": "2dEVu4UBDgYXA9i1Q1jnPtYagRnLkzM7Rf9cst4nPP39tCfSjEeZf5oBpCKhDjcRcKYydBSKFEJY2muqcfKVqVPS",
  "key31": "ugzzdjqQLzSNbmc1rWZ9JC7iggGmurrxA32pxXbHBX4c21qmzaE5vY1UpJMhrvNewd1cpAbWYYJRfj8TCgf9YKy",
  "key32": "3LQFaPKWm9TLpHSibyunq4uq63KF953gqMHYZyvLrb7f6tADnAvLQKyhZTHVrHuGQkG3FU47oa48XdWdWEoZKkE",
  "key33": "5W9QRCoKCMyRt4Ji92afBU3MXEX3hT2KrRQtHW5RqBRkCKzP1qL3bHm8mcshxKH2uEHEYdVWU9LneT9yf6CZbw9U",
  "key34": "RyYpJxxiSQUtQm1C9o2WeY5uoBPzMGuCKiykcCBFaCHEKnWC3zMfVxa14S6dg35fX7YMvGEYwJFWongjwsZMbP1",
  "key35": "3a3Wwd8TbQFNj88cJTN9SnjrZpWARvCQRJQnfsVfvVYrZPF1bGSdQwk9acW5onm4kAxgJ578kqpPLrQHqQCzZX6F",
  "key36": "2tSTaAqrsprb3T2JrQRUrPzNxgweGL8oHsY1TZsoGcZLCKxG1BKQXELnjj6ECsrJpz9Q9xfvXWozoDYCq1REp7pN",
  "key37": "2EjEVWhgM68gG17W8v1v5Pu7PDF5PTEyyEiehY6z9vuoozeMse8WQQNcVcBMiH249z7nCxQz6tDn3SHamd9KhV2j",
  "key38": "2vwzXSNUfzCojmuWMHu3oCubv32bp2kbgzKwRv3EtRjoQNbvmkcnfNtHLGnih531EGRYjhykTp3CoVqJCV8KZ2sn",
  "key39": "2aekCdyJ3GxPZM6xhbzGrj8QiDPjct7A2stgwGV3LxXwsMMigBfQ2rxEbBn9N4yyi2ZtEKt7RtAmva3Y3gM4zQPr",
  "key40": "3QnM3vKBU4jdLKYK8Yv3FFKfVEGg4qaTCjh5mMDhTFqqNwZQ5guHkttgWF2r4c4T15RdFMaG5ofK7KLXawi6bsPX",
  "key41": "jPU53cbEpSeBc9Ljjr1p5nTrH2rV6q74PojBzuqUiiNH1cg6C1wEPz4iHu4B8Y9vo8YEFcMm6B14RhMaDASJLhj",
  "key42": "65myX9xLXYLhncSfkM48GkrMdVUFVdUQ2oMdhHS64UQtwuAJzZDpEUaUYzwKrxdEb1XUU2TBmqDtCttECu5v2gjW",
  "key43": "2aepHJpB8tmNLMnG7tYcaZ2mYUAzDNKLzSnajCpHTDxtfAXb4C54bA8tAydvomiTNgxRF5JxCA47HV6goW7yzDT7",
  "key44": "3NLmMscLcCsJG5PZV8fKBovha6g1h9TxMXRVidLFn13KEuEic1tTWputCAjoosSEd6AshJTCsjrcTUTEqPjjTXE",
  "key45": "DvA4BDJcYHBNKBtPCzhUvKVK3sUSVCHkw4BfeqMUy4qgYTiK61LY54kGFEvXtK7E9KnEAyEtzaHhyhyihLGw9j4",
  "key46": "ZvtGJ59Mn7ECwwGGnjUNogFSRu7fJ2H2tjJtFeJqpHjr9sNjG9xg3WiqSDbW9s7UDNEkWmHzgkjxxUGyK6kakki",
  "key47": "5Ct5EAsJXqEW6DGxFBF7xqQxZeQaS9Gr3kGTBy9jTm6xmNvrzrCXiaHdFv7MdnBc8aFxsKoTxNNQgafwKKYqrpyw"
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
