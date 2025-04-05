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
    "2NoKLfTJ7h5DYQGjCToTk4pFAzQgNpkaHuxwFp2re8fz4CLcuqr93LExSFP9c69caq2z4t7fgsjancsyvPxnUFna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fUcjz5edXaCf8GD8USoaDzhXqroRydMqmxNgWcuvZB5KGRRPJLr96XYAQsdUpGg8qH1bqX8WzjjjJVSs7vh59sA",
  "key1": "PUUKadMXQJe7vhrNxiwfboCzzLroQHQKSrmKJStnGVY8nd1xDF85GtfSRjVHj589fNhQpqZ9KN7K3XJ8a4mHjX9",
  "key2": "Ww4hk9vFgyULumYw4dpNdk87AETziweGkEu1YbPEaFaZKDxrGYmxkSiCxywJC3pEiiBHVLafJWMUz38WZQvpmvv",
  "key3": "4VDRfUfdHSpVqRivgvL989YuJnvvEUUZJjtYFX3qibAVfrndrXfAGyy3DUSicVSrWzrb3YZAGePo5H9mfXshvahg",
  "key4": "3UvsaWaJZrKg3uUq9BWnjc8HnTi3GXnwaLNEmmx8p9SbmW6tW1ocrtZUVGyP9ukitv44dBHmyTDu7n4sxEaLmSDn",
  "key5": "4jRvQ4aE6WAW7Gx2zfB4LMxQmqK3ht6P76vaPYuG4CYxDWg8sjhYGHQn8jdbpCzT7KiUUKbYFtNK7LjYcZEewVhp",
  "key6": "3X9fFeP9RsfJZV5wWMXUASBAb8HwV7PJbKpPZ3TnAfZ9bamJXgv8x4ePdWEMRjfPc8spTkoCZu4ad9p5C1CzsCLd",
  "key7": "33Zf4vDcUfcvdpeZTaw9anPW2wF5reKmXzE7QvKrhRJ8ieC5qRUXg2mamAgzp8MhqFBUuDe1U7ySZ3LPfjCaX4fc",
  "key8": "2m3f1LoNVXnc2bnS9qn26gD6P9Ft5skiWWjgboZ3ngvV2pp9jfAindryyXPtEwmD6p1a73RhDWnACCp3QLG6ySkz",
  "key9": "3Z7t6GSuPNrP7ZtARzHEKuwbrLgtssdtcWp2tCjGrTHYX4G7cqBLHdRVTWmpqpKed8m5XCTA3ss2rk58c4A7tGfD",
  "key10": "5MSXbw6G2jmuUBGQEnhnt9zfdAkrxHeYwQmV5mkNNJ7HZLEW6V2uRxnmniejTEjVyvmuRUYD5MRAjBk5nTcCEeYY",
  "key11": "5cbAP9U7cFhPg2z1RS9SefnTwqtzRTo5g4ztuKEMJ6YBDra9kH2VLwX8qShCFFggPC95GLBzexcvvUFie9au1yp",
  "key12": "8MvaUk4XTxRHeza9YK1mwct7h67AfJCbKnHE7FFnQRx1XpRbmU6UaVnGZ2atRHqNJZT6Gfy74Q8YTNjaAuZ8MgR",
  "key13": "4sMUWXowki1Uh4G4LhFs9jfayVwV4MkGZgKKKcJTnmKG8dm3ur7jVEDBSG4NDMim4wvARrHpFopXzFcS22p5GqW8",
  "key14": "2UqpUydsB8wJRQGo1JguhZnfpvLWKoG8sstATzHRFjzYG35XYHVnC2Rsu2byrKSt1zTnVm5N4uNMDyj3pZBi1w4X",
  "key15": "3VtxJufCawfumeaS4KdDxdoKTArpUQ7tKcMmxdzFK5txnDdRmm3LKeGqK5cxCgNYhR8wTj1A1BMbgfBQtBFcuGrC",
  "key16": "4YqnXKhSSh3xD69bF3NMKAnj3TANoZx8ZLfytg3zYVk1Vucde9qHxiijdXh3pJWrNdS5hP7nryBNsAsWCXMsETFa",
  "key17": "3FXpszeCAaWnqrnSp7v8jsv2qCjpC7Aa367DNiK2a4jAhqjP8Qf6GwKzbJoq49P2p7QTyXNVKkZnH5CYYqaeRhxd",
  "key18": "kkz63bKwwxUPByWrmZe4ui8RFdBqsDiXamKDwLzsGKN67Dcpvuyu6S3KXG5hWXxvuBBAAYyyf8EjYui61iJUjNV",
  "key19": "5vy5QeNp2JFGD48NWg2PGtvX5DT9MCnF5S92SbNRK67s6QtVk9TouMiaUmv9tn3uQmxdr6w6MXcAYk7U7w4jvBu6",
  "key20": "3q2kPj3A1rMd6rte5TMhLtseDU8EttxjTSrbHJcHh87Fwj7QjyTo4ywcQSJt77p6wY77Ku6p6cjNyzaVP67guPqs",
  "key21": "5G5V6LtGQaqzD6MAx2WTuW8FcXE2Fy1tds9FoDZUqyELbJZZCqVR6jGXyq1wW878UTigTcTCZ2YR7WgHoGn3punr",
  "key22": "2aSiXNWGYxcYyPR8FLVTwS1DdYPMMqUvugh7j57XqFiQSK3bWuoRR4cPrQYcuZpu2CF2bHmjZ8A6xQMPDfsVxKHh",
  "key23": "3dr386zZWwpNnLibNy72pWUXYnnHY9daa1yezSs3LAcxHx4GDZYP2V4ic7aFutc66G2DvFyxsQFuB8XjXTdFvawK",
  "key24": "4FnGiGvCPE5kPXkxuHqDGHtCrxDfK8MZeaDpZRLV1Tx4fkj7x5uVx96NqEmFPZJ8ejYAauaQor6YMhJJq3LNptm3",
  "key25": "49Ut8kAhotYWLcyisicZWQ9gbuJktHddHiXrEf5JDKBKUBYFHbTAkdV1cNj7wn9RoFnev4XQSzjwxURmrnxQeXSB",
  "key26": "CzzWo1wqNMjX8STVjFkmG6C9kHNEFs9C5n1m75YN3MRdUq2bfK8rZfA3WPrMAWjkV9HYEJ9cbPXPoYmNNeX7hcJ",
  "key27": "5A9Vk9VNQqZsrtHuFZVtueDC98tciYPTkzp9TvU7x4iobKDEUiazg1BeepnjxDaA1QY8pyC83e38uCmTYRMkkkfU",
  "key28": "2mzCXyKM4DJt6SgeDySiG79p2JppqCo1fNjoEauqq7uxCtvz3ttgabtvmfCUTBXMXXsLm6nfrdQzZ7YxQGfXnHiM",
  "key29": "5GYjR38qeE6XD2DVW868M4KxjJpjmS3tWpMBmTU6TApVtMX8itoYJ8TagiX3onWu6nFzGFyjKQBPh6u4ZdKbTvof",
  "key30": "5wo6HwFUNYsqDEqwssamii8uNjxyRx241j9qJTLZGEP8GEHhFWKQcFUFzmLsujYX5hcn9ZR1Fn6aYxmw66TkSad7",
  "key31": "2XQUA6ZkxLu4QcTVJJGeqUjZThGQY11BX6CU4Ru6H5JcPZk3S1r3QjUwCp6nToTn4QZP5NzeRc9w1VBgoidksCxH",
  "key32": "4soUPNEijUR6p8eejSRyvDZ6UdAGkJnP9AM6McBjJLr75szZgU3iHLkPkp6vJLx8Tc2ZHhdoTAWBmqdKs6TS87T7",
  "key33": "2o6sdNM6gG62pskYQUvS4vRZNCsnfhzaKmfTWYori6hNtqRmFqqC4QTGFrQD4KVSGvTeZ5AM2TXuKiSRidwaFDxb",
  "key34": "2fyTCTwxcc396ELKZoiCJHfgezPeM1hGq8SaqZNvBQMDhzExTpv9CYVcCEX2MwdJYo79fGNw5w3kZ9mLUp5G7RTa",
  "key35": "3mbTtPKQ5ge7YhBVum2ivqcZa6UgaLQrtcPV5GEXDQ4XpthyM22A9CWP87yDPxEPc9tSUydTWb2YBxQUoqTt4nFA",
  "key36": "Pv7SXbt5XjW73aZcA2JkL87C7wN87yNyfjw6FepgF1WkTC2Jp6jvZjicPwa5EnZmZQP8fTLAbkUSxH7xW8WJWoP",
  "key37": "5w1pn7kkF9Fg8e1giHdUmqbyUGXuS1SiUUctRaowRuYHhzKTouC9BvKWZfMhGD1tFZF2zcmw5u87DEkYRoTKcMjd"
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
