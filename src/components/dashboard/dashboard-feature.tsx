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
    "4xgpUnKHYYruRHzHm9RfWfSZsYhxfKztNNt7hMTWbGYQmqbiWWLNnoSuBPopsHSRW4xGmrV9gMSr89VoMZRYP1Ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3K26N7sNw1pkxr3S7o6jmykV3MvV49nK6GZmXNXuDa27Pjwc67rmc1MKLththUCPhjMaokTjVrmSNoHXHg6WDR",
  "key1": "4ZJ7PLfW5DjCKHqcNAsREyv1JpDxqAxCuEmT84Pk8tRoCJBkuosNKHepNucGgXqh3XJBZ4UyB7XnwzHbMSwkfJRr",
  "key2": "PLkma7hx89mvSj2Puj4L86JY64guhd3gVKPKZ5McNn7Fzi9LkhaFLN9vp99uJZFK2Z8RZ6LktFDAB5L4yiT1bWV",
  "key3": "3oAqU4r7GxYtBF9YNTELf6n18w5PsB35NaKCPXeCWzfXJpW3aAN88ULrG2ZwvuywWmDwDg69GyAL1vFgKqnXx1mG",
  "key4": "25zD8hPKNdM7Go2DpzHcTGZcfLffuxZRV937k2souCbxjPg98P3RuQ8SeckNhtjAAt8w7QmAC98vbv3fXhDgdSK1",
  "key5": "5em4QwWsDNftQjjvDFPCGShQXyFfMoGJDZBX1YpZ4o1WtNjWQ1G2n8CV9MT9mk6U3RwtpfR2kfvpxz1TmJc5VyH3",
  "key6": "QQruTxY3xEJoPQKKbDqdCjgpTD2LDrTaiNJTLuGJfgYxYibBvzMoVRPKAbptxmRrd4UmwaKZF7Yge4iEGzQ1Kp6",
  "key7": "4CFocoAPFncRh86cwqMJ2LJK4RrZVH87YKEpwuhzWfWDRB2ZjN1v5kh33QBqVDG6FSa2Zz1MuvGT4YPgoXAfFPDo",
  "key8": "3w4fBC6HiqWcCEQG3mC1YhuhQAccHPiqzWPtkvnZhnDxt8gE2gJuxUMEHjrosMGJcEn3fBYTKyFVsWkcnrWLm8bJ",
  "key9": "23saCZmqYErL5aCa9T2nk3ardfG8BHydtg5JcBEfF45Bxrs2eUUhbJKEeWDF2xsPgjM8Tt5hsWvhAFaw48ZxhZPB",
  "key10": "2C1myzZS5zrbczTir3sbKNnFaZWwoEFMPf8xgUJGYqqdEspSrp8ew4CQLNZdzdFCsgiKfZxXYJjzrLjK5x3DGip4",
  "key11": "3NCbPqc4mpkXye7ZNs8HCoakuXdujXPYpYbsPktZeDzMAzRqJ42GProUsPfn7fMZKtN5BhxA2EbcHcNkhvoRJQgi",
  "key12": "549wcAcYY6m2JX9gdsNAmwg3H8syeCb5EK7CvzQ1HYi5SLdukjEPBJo2JgzTuPpDFxAVLRGHzHMjL8XyDAP4KjWk",
  "key13": "zT7CHuhLykUG4ALJWn1RqC52wxLKPb5Uz9zexgzYFcWZSg9DrCNsWtmCYWd7fDB2tA6LkL1Ap6a5dXZBrCrUSQD",
  "key14": "4zSxfc3Buhf6MJgzs4DaTRYn3WgSYLCjRaejhnLu5DpN3iPmFch1KUi3vCeHf9kbF1jD4iBmuapek1fdRgzP5jkD",
  "key15": "5JGJRMaczymfTmQqHy41svY3GmirwJoaaqK5KmC8wYMxW3xqV35kWmZvxecxM6QodzTiPCbXVd89pAvFXUGFvziU",
  "key16": "5qumsHA9GFpmmx6BgSLj2YfWn6DmfWw4knedtguZciKHDLvze9yHWE4C94XKisB6Rs5Xy3xV1T5uhZyVRGaFz7P7",
  "key17": "4TfuS3XKcTJ1N5kqGndjSR8LpcdAh7n6sFP1NHRkkKhi83XKKCVs2cBuNEBfcKZR7XA51qAQ9iTZ5umwuqbAWexe",
  "key18": "5zsaMuSTRq12N1kEyXtjJju6uH49cYTKYXffRa9fY6DvtsDkysHYo8BJcY9oLAMjQ2ScgdQSqTLkH7qShg1QKBYK",
  "key19": "5aYkGBqjbF5k7yy7Lf7bmXy6oYZZprioTTX1P7Mecx8oa2Sph7d5NTzJSGvxA3UWFCovhtzUdpphnp67rpjydBtV",
  "key20": "5xZeds67KpbCiLdXUUnVpVMFMbqaYydQ7Emup2kmHDWPGcEiKdUkGQ5YqKqwKwVm83N8D4xYRvqhyXtqhN2z7cap",
  "key21": "3Aerw2vP9mLS3aFt5CtGMnuvRRMpwatraDjJRVt6M8ci4ysjU6iSvQZxnUNsGe5a5d3jV7m9jiCH4xfwPSQ49VZR",
  "key22": "4JegComFLbXHGQqE6vYnPuUupQHgLyAiVzzv2yftzoiki9m8rh6Tr8U37Ynrd6oKqk9QPXBWmpxkkt1xqAeYG6ux",
  "key23": "61RGMa35kUPdL31tzuTzW8YKPU969MHAemsJ1NabJYrh6VxwswjHXzJxKgTg1Jzy8WazWeLLn8FiZtkrH4ZVZX7G",
  "key24": "5s8mdATZ1bKe3gSPMF7xrFctj4wUM5njzZ5Cj1rTCd7P9c9zs28Sppazt6D7N674a9Grf21XKawtwHwvjuwk45nU",
  "key25": "3qBUwTewqc9V73v1cq6WhG4H64SS9hmLB2658hdMgJcrdsAQQvDMLuQ3W2hdtaXwDULTXZjsa4gpRwAhkwnw2s1S",
  "key26": "4MqfDKdxNCSivtBBrqyJf8G6pTNsgsrMpjD1kwNv5MZgRriiCTT23QGtWw3kZg3Bn3f9H7yXvVuEZaZn4vFJ1vXm",
  "key27": "3iB5E6GM3HnF6h9m6P8GL2DM8ruaPkGKxeXppEoy4PDr11PSSLmJqGh86xLr9XnZ4HoVfSzENMFcwvR5uB2R4Lnf",
  "key28": "pKbpGPsJCZhWZsmaK2LR5qxPvn64uxuQb1pAsjXwygWTDcuUHyY1L4sCZxxh68Mi4D6aDJXkqr8t8fNwwWZSqUp",
  "key29": "3hhAimSBfu4Mj7xXZZAaun8pVztaeThdJWcQEQyzxz5NtMVLzFa7WKkPsz5gzMLztsmrC6DCUskDDAbw3L2QJf4z",
  "key30": "4MjnZcUqWWDUarWLsKbaB5VXxnUBFDoDmtk3b3z661k36tQRcxx9t3RocQMaPZBAQ3fxT6HLDhgqnJfufh6EmynS",
  "key31": "AW3TcVYgwEuwhvkeakNZnJmhENX9y5jJNDAivnCg3V7rqMcVuZRViCi1LXPsRcfRXSfTupvBnd2HzwUm8gUuenT",
  "key32": "5K6318a4pBftJ3NtTcjjjCW32ePoPkBLqntiGYPqku62o3587636M43uRgaaz9geG8hxjPWExjk16qqTr3tEY2kj",
  "key33": "cf7QZFCL5BYL5eioCkZEG9ku73EpJhuywVixunVbFLgKbNGiz5vnGypGeyffm6EQD7GgaY6gTff8GrfzKa4WPEJ"
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
