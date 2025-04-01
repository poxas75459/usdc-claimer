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
    "jU2buXVLdRUsY32pvbeXULfvd3erTZG4t6yYcL83ixRJeUChsBRQeVGFgAiHTbm3dhXbrzt39Jjbmd2cWjwTNbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tj4wpnMYdLkkqDmQi2ef1NHZkibKBgzBfu6dz3SuCvr7tBTDDTqZwt6JrWkGGpRj2QRZDm7PoUQ9FykXbgJxJPt",
  "key1": "4PfFqJnHeQ3ekbNjryLzpt4bWbpbos5tU6Xo1EnvfYkgepX5AxFpWxgMp1GTYACWC7E1sEGFuR4MhWvEQk97wqC5",
  "key2": "4Jtf65jPAymvKQf9XdAy8ozfPrtxn94PWPQDfxq4S8qhesL9F79C3r6ERBqyu98uS5zEthbKcprdhhBh2Hf6oLR4",
  "key3": "5nTxr5xQb6deBAjAu7mPDQb8WZeowGYCQjZ2izrDeQTyWK1c8Kcp7pnp2DvzsP2iC3BK7o8hTDdAQ4U48i6LSnqh",
  "key4": "5GU6SpsqaRxL2bjii2P9hyZTsDPXTPTmLrUxcdY9QaGds4ZB2dkmW4y7gKj1HdMBSBVfaqXVsxuNwqXCWLP6WqwK",
  "key5": "5gUFU6R5WeSPPdJexWimRHEZM14GD7epxkgLV7nrm3zmkpzhkagsZqy3QNe866BG7HYGvNcHMoZz9u1YJFHV6Tn7",
  "key6": "qSvs9DH1y6cNGEuTL3mQBZBVgbXaEFnMrERTrEcj8xTGCgkum9WFFEYbwjpC651wFd5wRNw8cEXZhAQRKYWmRaN",
  "key7": "3W84fW1jZT3QyNkz5u2BsqHqEzZKe53ze7x6UBSFK1axaAvCCvL2go7eGmpsYBarbg6f8HjF3ZL5ReCcKnztGtKB",
  "key8": "zbmmNogUTzUdHPgPDZq8iNZ1vnSYK96euZei6ukZemxB98PvY3NEsdFYjdbrcT9N41NW5d5qLj9Q8AXDX7Ug6CC",
  "key9": "4KK7dYKYomdnqwMX3ReosS7k7XbhLyJYd4SkugnfqwCVfLpzizRcqm51EDay6G2rip5uUH28PRHwpbP7hj9SSEap",
  "key10": "2GNTnEnnVDPcpV3NdsP4CabDAZF766h1HW1Pcx6SuN2RPAyvjcVYLmirn2eigVD3LX3PcYWJvFRW95ByyQ5BMveV",
  "key11": "2phDBi67axzJPpWgGGvy18PcgZtD8QJijJcRjEsHkinc7sUaD3Sr9xYbpxFbTbkYVJpJQrYfiTSjpdo5AWheL6Ar",
  "key12": "4bPZ5AFUA4AynvkpDM9Kr9ejosaLuYftUWLwoLNrjsZ6YyYTTiWHahz4tJSF6jkuZoRQhKyvZUygmhYjkQy5YQWs",
  "key13": "3GJJhbRHZxwmRrmv79kKDa7Kqr12mSv9Aqv3Th5aPJkrbtQtjo1YEC9N5ysAVAGXuvcD4QbJau1N4QThTbXKN2By",
  "key14": "5tyXJCPBSzFnwZi7jPdiDNCMjszsKod8jvhrxBpVbsNRMMEYPdbq8a4TMn9pDp8iEWNLoY46jsjyKZQ2eqLbyJfV",
  "key15": "4mhpmyDptkUApBSBxoqt4ZEE54byYmExmSAfWpWEVVX3Z7LKaCYGwRpMFDsvXYVgHN9Qj9vvmbtghVQTvyDHTu1Y",
  "key16": "4jeqdDU1ChxRHhmwd1RqTVZdZcawhBbC2dUQMGPA9nd7gsc1DU5s1rs1qZErMwvM1BU9khKTXhwLYcxRe8Bv8ZiR",
  "key17": "3JQ7weQoRhQK9cNq83DQ5F2Gjchr8WnU9quC218XQ8ghn5jXyXUPp7DyFGXoQr3gTcLvJbcMWgcxtLWSV8RJopJt",
  "key18": "5kA9XBSQBnkqBiWJHY8qpY55ijUotQcEPoEy5DXZqBJ86pxmwuDXKN1snc6u9wvN7rsWwwN3N44mhF42meqWjf5V",
  "key19": "37C4yuujFUUfBia9KBK5apsAZUbJspQQbLVNrh5XnRX6jdR1cr99Q8aLonsKqshAQAgyrHQ5ESKtZXzbkUHLMwEW",
  "key20": "2aRSEnXFYvHESvCFaWuXD76D1hMsoA8qCc8LNq68UDfbf5dg5RmGCYUhzq9KQZBVht3Zs7BMvXVEpi6MiACiXAhn",
  "key21": "5QLY1WwVYfYLzjBprigFXA3J3kB2P1Jvbrob7AaQcq3mWxTiY8U9QYyHKG3s48gqZhVrySuPLHGpwHWLhaMdupNY",
  "key22": "5nE5jxW5vYLNszbFyFk7UuV89WbFFWWg8ra4dPDmz8oLq8Y9pjauYWzn2aARGMENVmUANnJMSDh4VEBaCpXgHSnv",
  "key23": "46hMAqRwEJ2oNqFeFUXMbKQUGwUCs1DSK1wKWuhjGBeaWK2FqrBkWcHP5HAsw7Q547cyN5g6ukEmvHmJagpCEC3N",
  "key24": "4YxGTcKS4G3fDAJ1tZpZsT1kbHTRAr3c2nwCntzQTePa9pgXHG7fBT1a4MTk7ysfio1hwcQnMuiuHqRg6ASHUes3",
  "key25": "24jHVGYyewaRHp5qsTPpfPiuGSowSjLFP9MfVW2dyhKmWgKk6N3PVoPQh9Rqdu18bW6tD4YnyG3fPK5eKHGnLZi6",
  "key26": "32HmzLXCXQkUYMu1RKeXuMEStnTGZozCbgmdPtk8fby7ugR3csfrPGwZjHiiAva5EwAtCSeT2FQfdoGsrVthnrTc",
  "key27": "yKiYQmKMQmKYVbY1XP7fLwJGoGCxgpGHEVYZk1Noj6ZdjNhcRnMrthsTMRv2sxvb4DTNHG84PMXAQpM9yggFuZC",
  "key28": "urqC1xuDDkw7bzgwzbdUi9mS1VGNnbALgYg9zs8Ad1C6u3k7FXmqMRqybmwEHrWKurfgmauNnovUUk3esMKexmQ",
  "key29": "mU45vWixEdufPNEWQipMnkuwa7k6ZXMGQdmYnUny5Sii9p9fXCcjNqcVEdxAKt1tbAbzr9kmoJ1bqhWd9RyuELC",
  "key30": "3RjewQD2pEQzd2jiy1fBqq4BXYA6ku3rqdZBvfarH4BbyAD5Mx3mdE3oiaQ1zjmtbEkE1JhRdhhL6LcHL9egcHy9",
  "key31": "2zqZFMfhyE7z2iDFKG6iGRmyaLYYkHApLHcauJYZb6SS3wPqskF2uJe8x2sLLxpQGF7nXfAm8VMcuYMt9jTijS6n",
  "key32": "5csZdwsGeMEW5wdcPoLPayEgf8Z86ci19fr5rSdhVnNRG1Vp87kaDDt46ZrwaLtFXQEoaTGaoNHqEhVZQm39fZXv",
  "key33": "CNRboMyS1zAMeazS6exg4qaEoNL6dEyg2TDEBRKvJA3RfbqGqfYNKXK4Avyk7kx7KeD4xF4YGMc73XA9Ra6Pig8",
  "key34": "4eZKFCGKxfDXsUFhJYpzzkJCwva7wzL7qqaLWT6GkTYtX53CpaGMBhF5WGWxmJQLU5XftCSsMSBuAnkKj5KNKcbp",
  "key35": "54QZ6v12QzMoYXFMtTJYYmcDXR8wVdZjJsGA3jPzfgbtuxJyStv4wVHXZhDVbKNwnfk7MEv5sba9HN8DYkekpEPY",
  "key36": "61gVNj9G5EyvdNT4TTtuW2oeiY3Eh1EMcwVyDC9q47ww8srvV7JkgH3RcxKeFw2kSNLr8Q3s8t2N8ZLxrW9HHnpW",
  "key37": "5oRVtEQcwH9LmWpC8YFA7i7zNkAkJc3oQ98XAnvuDVL285Tk3bVmhwc3q1wFjLBCa2FyHwTFTkmt8E9eeSP7HiB8",
  "key38": "2h6py4nJC74idYvitWLyQ47zrnD75Sq1RucVGGWineegBkr2YyPB1nySaptUNyuu8ozcTxb4BiiN3RwBt3cVdLBa",
  "key39": "3bcdyDUXt1Yx6VFhvssCcGga9DYRSH81DkotD18s3NFwmUzCpuyFr7u7XgRtrzViUFx6pbjcFmdh6tgTuhFy7HRc",
  "key40": "5WRGiJJpCb84UmGDXD2WdaBJc5GpocLhBwYtYiL7iBqqqyZ3zFE3EayfNhHLa3dRPcCDUeP3wGR4MEbfMNmTqVUV",
  "key41": "2N6hBEFSex8RYMs8CaYpB8AtwBzZWVivbEYPbMx2WCJbuw5oC8nQVXYowcGb295Uz2w7afcaMLsuxV2Z1P3dwBEJ",
  "key42": "AxA2V4SsddQGkiJ4wNU4hzWRbnfPD1eNLZpYDq5CCMh7kckqYMeJE6FTR9WA8H3N5aZK1TNy26QiPVdGiAVjNdK",
  "key43": "5FcMtaXP7iFhFUp6B6kVH7DNZcGjHVFcNr9L8wQZG43HjrpfHP8uxD7v7biZDN4jiXJsgrNL1GAugM6WAKH8eNtD",
  "key44": "qSRKKXu7jbm1g3LsHmbC1zER1qqS5tNq6YCdgQLk7MZSfKH5Fo8uocj5zkCY3wwLYYxq1JZVTgkKdtziURBiZL5"
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
