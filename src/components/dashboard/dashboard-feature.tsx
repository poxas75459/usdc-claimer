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
    "32u6vWrk7jyvuTbgg62GNVX9DkKWtA1gXWYu8yfVTbQtKhE5TWUmCwaevPTMc47LhG3rc6v4DmjNDEySrm7mVc32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AttkZPu8GS2H4gk5Ue4tSh6Esy7HRcftZPL1NNjvFCF86qDrYMkApjjap5RdfxUpK6TGpG7BKfAeYwuoAjB5niD",
  "key1": "4RvMnvxeBTr3WEFFw1ryV9AQJkdUHWrkhZbxZ7t7eDUPgKjPb3bpEiwsZa6om6RKvYiBawdWeuRf6xnq3qMpP4SM",
  "key2": "4iiGpWtFi1eM2zqX3j2E5oGkRkP1sixgsSngMEvCygugmmtxHjoz8cdZnCMmMK7FS2KZWy8TkBsZje8JDbL2sYmB",
  "key3": "248oXzgPDD8ZLTsCfcsoWcZunaUb2ViKCAsTNUZqRG9Sju97QwhhUWd6nQS8WiMdtMxKcrPbF8SNtLzJovvQnky2",
  "key4": "3qMh8AAhNebLwurPrbedSuxdW71Y6Tmhj7KAayFfndV5HvbhtiKNDxEXXcZLa1bUtpcNgqjiBmAYv6Xi8huK1yDj",
  "key5": "5FV7fYLrCmwxMah7FfL4EPFnYHqmYMDtXiZEQFBZ6H9zW4ynzbrLykLhgpo5twmfmEm23tS7azb3EMvZngit6SUK",
  "key6": "2A4Arj36Pn1waKN44cN1dvbDeGnTqfK2kYBDCE8g6wRfHumCtEsVJbsk8UtS8kVxTF8jw3JReWu7GdfHtusx2Eho",
  "key7": "5oKV68FdqoLr7Pw1wCF5F6b1jUGDjTKx8txfyDNgoCFs14bXZpTMoizhprSR7L5EVvT9zHMEwFhHDqazd2T3GDeZ",
  "key8": "N7zfcNLyYGf88MyaLzB1f6LwGyZqGTjdKq9WHetwkmfcAE6rjeEjj4FwQtJKTLshGy9A76b63W7s36JBxbghLZS",
  "key9": "29WhC5MGGufG89zEZyUMJstZPjCoZ69oUMXBdqT5DVboijBZnuXKG2ZHL4CEyo6Ccbm71irgZ13TW5wZiyfii4pu",
  "key10": "5CWjFsRRi6cisHfijRQWhq1VuQ4Br9RkScSVGe6g69zuTT1WEeh5WELvaok7waDN9H4W2wZgSLDRcCKibcXxGGLC",
  "key11": "63PxhGwKw8FZ8vcYkEiWiRi9sjDr5gCMx3DsJHpefjjPVx15JNbC5xB4pCnEGb5DUwEP5EMPWX1snHKLxBm4e278",
  "key12": "UPgNnJPW3KAaBPPKKcG4ahPV1XwqHdhUzkRGGqs3XuhzxAsnWBUE9hyoqXnFs56agPCMbnDCycVkVDa7xp9yhhM",
  "key13": "efG11db4gWHMXo7fq2xRMVcds3EjqiuiZnZuoKXED79NTzGLZAGyUnxjdStygpySmVbzTVw6hZ2tBa81rD29tJc",
  "key14": "r7BdpxsK3KK8L7KoQZsejKR3UpHSJbGzZghH6rLzGANQnZUviPSNa3SiwRD4kMDaH6LupgBVAxzsbdPiMEKH2Li",
  "key15": "Q5WLprWuZ52TNFxp9wiT37SBgFZdcyNsAekH8Q9FFjoLfybks2zuio7eJtNtFpyUXnq7PpvajcGmEwwuk8mTmSL",
  "key16": "4HQhfd1sVZNPzmPZwZtz2T2s7jNVLuVuJfGpiiUvssAjSJNAWwJwNTyymYEad6cnFLoN3uhKpJCdKVLK7aLR3Eoh",
  "key17": "F5H3bnz2SGDaohFHfLTuYLd9W3YYMJDkmXq4BsD45LMvmA2H3c4WNc3dnHENTY2hc1xQ3vnhuNUbumf3iXxFyhv",
  "key18": "4x7XrifGpeh8L8a2FAVRztPwbkHjhAwononvBjcktzL77VaxCCN8t7WCjsyNRYDWwSJTM7xGnzB2M3U3FUcPhKT5",
  "key19": "2otH2TtyMQc3uAQuHUzcsbLyUEDJT8kLiJ5jZBLokeXHgKFNyJqWjEtkVza1qmF87HARJ7Snw9doi1EkeVAHbkbh",
  "key20": "5kco6iVZjUJJ8iMji8mkPsC8rbeJERe9Ut7ne751q4UZtVzEf6SRo4Bp3QpvnG4fDxBiFvzhr1WAVYinVpRiinpp",
  "key21": "3rPYheu4znsGfFvcjnTfL8QyFvjp3cD7ot3u4vb4cRpd8MCA9Le5EqHR8PVsBZTwZQzwFWE8aqGmwpPcq1oQ4MCx",
  "key22": "66R8Po9AeEcxZStQDdMH7Yk4BMyYa1vMDKHKyTybTsXH2PwEwher6yPT6qcTapUGbWFLmLUTBk1JAdTG21wYvNHq",
  "key23": "3ZNFazwWyp9pHgQjdyZrxBoPMQm64g2o8NDXyzBWjqnv8SLvEwqkYhr9uB6Ys2ZMXjVqGYopqyZNnFZQ6yk5YyxQ",
  "key24": "dtGctcytKQ1tR8wkW2UYVcrqFwyo2Bq4tYPks1P7LFR9DeUGi7YxEExwfuXAhBxoqKqLwdAzCcSMZPpqfN93q9s",
  "key25": "55f1FJk4heEbJ9RK8ymaZrKw8rMxQ17xh3EkQ7g3VQUdXb5zzBMvrPnTe3i7Wb5DtmpWEEueHFC74Z5aiAPxGhhg",
  "key26": "5nzinpk6hjMrHKUsfipPPBjCZZnpz5mChbWx97DrZJ3GbWrLbMfXx7qaCst9BZDwawiJYF2Ujn73sQNTCjX8TNes",
  "key27": "iLeuSUhc3zehFT7TRZqgTwuGqzgqhH9NUZs5PAVwmCTMyTkwQdsf9TtKusMMv5f25ypXRGUVjynzAmrT3EYFJTq",
  "key28": "5QiXN5M2kxzMkizhtgfWtsMffTdtTBFjdxFTaX1tvQMjwTQT8JdZK7gBew6nKwmbsWomvwSh8fqs9jrD4jFFHRxo",
  "key29": "3RqZaxUJA5VCKVcxN7Xf1J4p32UbrfmJpyrzyTGX6bYTmemyWzYpSKxdQ7ZabKPw1YdKsWweQhiBYcEA7mkiuY9i",
  "key30": "61TPX2kfVx1fjPwknhWcks8ssPygwnVUXzN1iBmwt7jMu1Yif3PM6YszdpR1aJz4ontz99dqFFJ9mt7Ncs6rGwCU",
  "key31": "3YMDTTLJm9gyTUajYYZy3nxMvExPXcJHPz1JADytiBx4torCQHLDv6MxEy29K8FsbCpJcBbHUFMeyiPj6MpL2jb1",
  "key32": "63XUG2kpv69emvLHzZ17JJxu19sj2fpi7dQp6qjgcaoDZ2Yie2hntRVvCffMEzMWRUzcfLXYth9RUsTWe65F6Hxc",
  "key33": "4AEcceBvChE9sxXY4CKbmGbUEZZjbdfU8PbACq4L3acaAXmzpWPmP8KvjDLCXpniN8CKJ6SFbx99uPWoPiAuwC1T",
  "key34": "5CThkqNRzdoAX5SBYXrtz5YDq3gmZrEPE9umRtwAeBM9M2pfTxKXxxWFEFa7ftKWFTPYjACxcrSSgZLD4x22gMnp",
  "key35": "4wPUcyYh49vNtyfMAXpBWcpDZoXGvdc9Roe6f132mJ6qwBt2S1nwd75kcsZkF5VLEUsMNpLzmmaayYMvYULekpNc",
  "key36": "ur92cyzed6e5KvxhJWxdCQeQRCHdRZBRcYRhHetVdctKKrKUpbDdVV1c32KDknMf9Y49n22Zqc7czoTfD5X3W5H",
  "key37": "3ZZEvWEhyjPZyv75NUotCRuD71N1rxTXAeFXLMiqFgKg8fhmNoKuFnneMaznXtR2xDTfZVDNyaD7swg6KWZY4M5c",
  "key38": "2FPV7eMXvG1w7Ez8z1ApAaMJoYE26ngZ5eeDQnbwnMBREPZod6GRb5sgPecp2RQTZxcfAuea87FKn9N4VZFTmdPE",
  "key39": "33BjjRhhSEkqHXk6JAnBkUs4jNkm4LQP24toZw8f1GDxDGJh4G5m9wLSiJEWQj7PTyDxKqePC3ntSj876hrckodW",
  "key40": "2VVEw11q4k1pSeE1X3Ar9e2ErUTxf9bJ8m5dLCXRm4v9kBy6LjZNmiRY9qvBK7eAT4zxCpBtWNt6UQwSXNBV7cAz",
  "key41": "549nK8MYUATdbeTDSdqp8Y6u7Nj32dbdggGLuMSf2W9SmorVcthPKKXbnGnAkPvUrMKNkjk3R3YuYjyvXVWvmC8N",
  "key42": "bQGBzsu1vHCpmfBL4mSHz7TVypXGmyH54dG3qjY2UhuTk7JTWv95jhLY3woHNhzKiSTbYAC2CM14VihcJQLX3Ms",
  "key43": "5vrEbk5PyTXH5ZFVCXxWWM1tGLNQQ7EWgQ4RhxyDYsPezBvDDnnnwKCAF6Hu97K1LTjJQhM5HkoStvJxfTJs92Af",
  "key44": "4coYmgZEAHCtSSTDg1VXsEoYeA2Ns3i8mps49sfVgMBcBhj2zWDJCKr1gSQQ7UmdJBhPqRuaqcjkLNVUs2vMmbgf",
  "key45": "4ziLHXG1yxhRX2d8GY5x3Q1anx9Vy6NuddY3XBMdAvj1LY2tKnA56UqHYLUNxMnrNU2CkUvYqJFmqzZ5gywaG4fi",
  "key46": "57CiX6FEdLQCKhbcKjc6WEDWiK2kqMHDv6yLKqUEyQJa5kkTorSKwpPC2GtZuV8C1sjjbbo5dLAVCCTjPDFYzF1A",
  "key47": "2B89L5XrYyZyVCUQENavvies156U2GEgo52GKZAxGFL44LY1Uf9nCdhGTpAoqUjtozYvH7zj5bA4EDaQJsow7NGi",
  "key48": "C8rjUPHjPXnyQjUG41KfByrzA4LExGGtGoDWd943diVtECXZsVsXbsFw2NPYd6LKaJfdJteK55panPSh3QjG4TJ",
  "key49": "4Edc5xGYLP89rTHyCdqo6mbmGb2Lur1XW7EYChGsvteLS9yqU986PgMB9uyr7hDwmgvLHASg6EajLBK64cRnLZ8k"
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
