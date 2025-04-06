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
    "ruNGjEBPnBbFg967VHvBQDUzpfW9epY8o25EsHas9RqYbptepe6axtL72Hid9DeUJfw2toZBBbb92qGwwNbJDMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DiQAaKkusH4iKHLQC7XcScc942fF9QoLaVvvab4hCsGGzEcmAf7BhMydvEDU4T5Hd3PijJt5ofutnATSqonqFF",
  "key1": "5SqednghL6P6RuxDbmaxr35TKx6KoEAKwmS6Q8ECmXy4WEkrQFmTRgQBXfLrXD2JFqBEko42ui3pXuEpwjUHUp8N",
  "key2": "4ZTyo1W3h1jTniynR6Ba76T97RQArAjAHmGsyCDQmw1qTj28vEn8SdtHRdPmwhBo4FnRM2syffex7YkiztNSkhBC",
  "key3": "4cir5xqcCYD7mwscbz1xL42tZseGNPm2ZTzQi5GF4z7Hczd5SY88guUJkSd5d5aGT5KKsTdH79h8vaf64mh6SqXn",
  "key4": "4yhBAtnSbYyF9CUJdWwa76Pxdfm9dFF62NN297jh4nmGPoRaj2eYCukRnftZ6WyBMqzawQB5zLyp5sXgk4ndZK91",
  "key5": "3PH8ke19KhDtNF1Vuy1tR8pAXhFSy55CaH13KmJfHCEr1mQySLc7FSfTbSE8bohbChx9voznq7HnT2duYFpdCTtt",
  "key6": "YLC4Ps3fFo3gJSDuHZtcTc5yt4UUJABqZw6Rmkc7CbkJW8iRnbfRz3GkVkQ85HY9ZvQX3quK6PXgRpqUeU9Yx6k",
  "key7": "5FCon9DQbPUZ5bDxcPTymR9CBGRJoYzZrQ19xva5AMeEW84Qn4e4ZYaEk2Bt3eDkQJ9WMjsj8cDBoTALtt6fbQh6",
  "key8": "5vGS1u8dPPn7wK8oMJztRD5iTwCcNZoSu3d7TzGg756SMaGUkKuT3onjP3W639qtqnyYA4zW8cwew2MPfDALfiwV",
  "key9": "285QsUyUj6a3abHwm34XQfryeY6uRYSebXXkarQr3u8nHvJ4YzBoJChgFSRRvtB1EPAEUQ1LBXhH8MzTMPtw1Zni",
  "key10": "43nZDVEg4VRkqTkSnHZdnEb57WUchVCeDVkypr8jNwmYrYrA8YjGjnJnXFVXpXcaWWu4qBR9txzuyQnY4UyxMJaZ",
  "key11": "4Xx8DYqkoSzaiEdX2F9rBnfutkQX6CicHyVgQA7EdGwrrqocWMCgdVfSjqD63RnNtNbwvaDQdqj3sEtXzdj1XjBs",
  "key12": "5CvnbL8YGXkMiDbeY3fFwQv5oWJs9XVYBhfckzohYpSvf4sSncZxTbvJ39MycbioF4GJczq4PBnAxLthZWC64E4a",
  "key13": "2ME6Cs1GrXdZzUYLxpg8Cvm1EVJ4QpDoyXyaKHNLG1ru32Z17eq3wqZ5NgcCMtw3eXBgWYeHUwRZGg1R72PiuyZQ",
  "key14": "5jP8LiXVSBDc9Mnk4RxG89b9YQepdQ5eCMYRHpTvYnhdeEDgagA4jqruHrAAiNiLcFSUWxQR5bh2ei5v3dCgjxuX",
  "key15": "5cqTq39ZcMPUC9oFL2dSG1cswSZybtRaRuJzqQEAXnQxwkSgKkcDytp5EAP9KxZ6bdszRDTbh2RsfcTqmcGTr7oY",
  "key16": "2FEHgHhCwTCqJ1aVtRFe8NeuHq24qD6pSTpEAT37XhEjaNpK9gM4nPz2aNJqPsYcv4Js5BmVb5JtxGjXsDETbBbU",
  "key17": "67YRzvex9W9Tf5LQe3ZqDVLzxidA9C5ZpgbC2Xqd2tRT5fx4ntBECWU49pswXRwNMf7ufzGT3YMmCWw7jiZ1trXu",
  "key18": "3htqK51QYoQPWDAFPvXFSdQnLZjaLcYP4sF3umYXU6JVszAxPBxzD4And2gvjqS9QJwwfzJYENjkVk7KWuJ3i6KT",
  "key19": "cTyaNxrW7cKfG6dJMr4jwn36wt5cV6wgsugxMLXCSA983ZUtksiNteyFDMpFR1PgPRJDvt2We6EVXg2ngvs2xfB",
  "key20": "5EHuHFErouAyGJQUyWLvekeRErRXvQoCxvYNfZzT7eExrRsvURffsoaMExG1RmESiDgJTsqoMWWV1ooFeRCFvCzs",
  "key21": "2q89iVejiTJBAgf6r113HZB3X4xWqu4DSVBnvHG8tr5a9TnHBUyxU7iTRgvvc8GGkKUThR6YUdjiPXQb99mWvGtE",
  "key22": "2xbHd7oRoDTtvKj7LvvJycq2JjhVzAwhbWkLiQjXRv8ysPxN4zMHvEz6W4wnyir51MnrSCcw8sWaPGmZt6wVhNew",
  "key23": "37LaRb5p1THr5kFgdYyCrYXbsBtT23dMXdnnCmo6S3wX1oNgjMgGLLic3y2Yg8XmboXiuUiVWxuvjk4QcymHapwj",
  "key24": "46dXm8drnHZmuUp1T95f3ABPRSo1nJUvMivzw1SsSPmdq8BQ7HqDTXntj2eFAM5rvBPwsGrGAciSyr2xAWXRCp2H",
  "key25": "36P2hi2SaW8PPzof6Za3xTNfcULxztpXJkBuYcxo4Ed5ves9hMbPrfEewqh9vsah9VeQtGh7WHKKMRHWBFGKMgiF",
  "key26": "2eEkFPgHfso14VcR76r2kPdTRNJoWidHTsowTqrq4sKrgRLEFk9saewxYtvq3MbTaueeWrGKdKHS6MnZbnXfHoLT",
  "key27": "5iLbcsaKsLj4YPmEofMbFAmpemjuCFiN9RC8ri4p1RCjE9LszYMgLxgcHqse2XQnBsAwh7vmZrFfVwAmmwfx791z",
  "key28": "57TL6BgpSD5i5V4wzePoySUEZoGJpXgr2MCD7mh622LEgUHXFSztGPimY8xWB5K1VhT4bcVmQPu3Vk4ivuQTHHNP",
  "key29": "2bgpx3qidyKpPfztU9BKFhNkyvBorqK9vmdtWJpXBN2wK3otKyoJLQi6KapbAFD6aPqp4z7JLJTy8V29KG9FZX5j",
  "key30": "auMmTGzsUddXgX3dodBpz65NGCaDYWzFzSKwMeiqTKcs9NRZ1yDoixqUzJtLXqHaAvg3mfQTwi4BBdmfTDtCz4b",
  "key31": "5YGK1NE9z5abg1EYfZ8F22srv7EN2ft9RsTpL6dHrfTGcsF7kYw6QgAD64Qe4EFZBJPHZRxU1GXPPy4zPcBnCa6f",
  "key32": "pxH9Df1o3vPpdu2iAeAWHtpKyxxXWQt9okmUoLJ2SUXx3XTac1eGaeUDwAJjxjztqApxdgZw77c9nMrYP1GBjjT",
  "key33": "gjhoBch7SvdwHcF98YEMTUZJ5NR5pXcZVgbzTZvqSDcEVo2snzMsG5tcKawRnofT5Pt9sq9u84SvZV4md2icrNn",
  "key34": "4dHpFpKX3MtafS12r1ZGFxpRCaN5eLniovjgkTxBbMyAnfG3qzFSnWt5A7Zey7qiNx9VXxcrQRSSZGHvYgycBCqR",
  "key35": "2kkvuwXW61kqJSMvFgCN87rpRDFYPkvbC7p99MAuG97CAi2ACbkBxm4JZtDA3CDKatuUD12sk7HJUD4fYnzhti7v",
  "key36": "2gXzZYdmRwxKX9iBeUMZYY7ZPtcazggEJF2A9KW4SjuVCemZREg1zA5A7MBaChN64dX1bCnu1eBoXczH6ao3exSL",
  "key37": "35baYyuY1sDQ3fwDUxbaSqNSjjXmRddbeyChUnYFdCpC3R4LhyWDHusV3r1v589PS2APoeavcG53gXLsF358Lq7K",
  "key38": "A3vnkLhQfTY1Bkn7c2vB9HmZRezq5iZftcRmdgs3Vnbq2b2Ccmumr9VqwRHv7febAaYvYCbABgcSPNikSK8KQ8U",
  "key39": "4Ef2Wn5KKhGPqBDDvbCUyDGWazdLjKL8soqF9VYMHghxpuc8A2o3epNXZMTMS35gXSUoqpSugVPL8NUiwGUdfgXH"
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
