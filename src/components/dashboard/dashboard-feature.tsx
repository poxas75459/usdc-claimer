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
    "bP3QGxQBxU5VZE5cJqsZyUZM6GPYAM8Tw2G49fDPBiPgAxCrzdDX9WGqFbFKsAwJq4T4YHipGf98NEYdhK4JpjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pMX5oujresmXgDLsPp41LB7JBLghE4Bc3aK34k52TDhcWQUGX2MBfhR68DtY8ofpNprkx6qcUQTbpxEPKZREUd",
  "key1": "5jDJsgjjxVYDd9uLZD6A6QF3WAQ8hwiwxYXcZz78Q9GZ9k6YCyQyJ3YyPt2kqHdD8PPVZwydeJXXHu6t1U46RNQq",
  "key2": "5iwQLnMEfnQRcf4dHGyL4CbMvvmSV2GuuNf2NaRzQjs4KMZyve6K4nLj53s2ERAGYtgN2TkpYh5C26UCBzFAJmkP",
  "key3": "xKjeNqpqq36bpVUgPWb3eunFN4Gh5BarKE25KnRVe59oMV8thamRiyd5CcW8r7SLTLcnGAShQqmiQPuK8QVtXsB",
  "key4": "xvxQCCGznjVeDweKR3Ba9QG4AAUyQJCRCMTEcn6URMHHFa2MRMQBDD2eXjfMFmY3WLacaYmyLU317Tz1E69EUYx",
  "key5": "44YKwdf5AdJbt9aQvHLAGhu1aPMgz4L9JkUCfvqsqAfSjQvx4K6dRVzDpmBksePeFpHjPLbDoo9qS27JWDEyFdGn",
  "key6": "2oapyZcaGKYPXjajsQ68FS81XABbg1AUu7EdeoVVPC8eqYyLphx6UkHvrWfqwhh9XbDb7xbNB4NBf8t1ghq54LAC",
  "key7": "3qSkUvLUrWVzAXbQu7WAjyp9TSu327fP7UbjAh5uEvz8W4633N9k1xXYmoGcR1UQYAZL3f7C5gvfGywTcCVpboBy",
  "key8": "2h2vZSpuFuH496zeNTTbyGUQiVuR99XAhmWiaRWHcwiQimw2KEs7RCK5MqrdwUy1WWcoEDTc8gYLiaEh1rbgGj9K",
  "key9": "47rRt5BYb1XJ8seULWZFGzRScRzpPncF429LJwcdjQnRmmpiu4iDEtH5y6h1EMZdsAMQYXAVSW8NgajtmWPr164W",
  "key10": "5ASVcektoqLcCdi9DHu5E8Yq44XFLX46BukuyzDft5ape7p2dY3uedpX4CLRsTeJHLskC9mByJuAzBCWaQ97RrkL",
  "key11": "4Db9uuomsUfwnXTEt6DTJdF8HG4cAXTYiFeexWGseSMbJ5v5gMSXzV9LatySNyji3VUo6LmCm2jsCeRw6uyKsADa",
  "key12": "wuLbQCZuuZwiSfWP1UedCZi3iMaHLRsdWm7AZzWPaun5ohcHu1Kh63CuGXwpYTNt7j4ZEWvYzj8oyqgJDhjnJaz",
  "key13": "3p1kFQ8oAV6u1amW8N6HRhTay95P1o6Mio4o5dersbw239FV7eFVTg9ZDijdemeQEpzoqKQbuMXASU4S8Lw3HruG",
  "key14": "84KGexEo7c2VYrirMpdkwZeUeonkjRF9Ps8xJ1GAjgtPR628mkAXXYdDjB9HTNxV6yZGS9P7hfRoGFYp7qxuXux",
  "key15": "5cXbquEPfzcQeWSDKpNo9zueMT7YAej2vZa5xUZeSq7Hdzu2q1VFMmWMXEMhW8juohZdiWwkAT3NSQeTqHrLrtsv",
  "key16": "2umNLHFerBhBRMZAjqx7SHhNbupp5VF9uviKiB1817EgpvRkpc4tQbxU57Smn7QsYMyqSL7BYDG8W9umUNbRY4S3",
  "key17": "48dfr2GCaCYXp6NSr8UfzRXqccwH6jozn41Zn1bbJrz2W9cMzQPQpG36Uv1cgZy277UFjPLrZbVDwACPgSeJgDy8",
  "key18": "5kKe8X2s2o839LkUY83NDbKKUMbQ4pjGKvU48pJsSaveypKv5SscmojB4CmsM3ShXkT7b22MQZTUiP2AFDQd5GWu",
  "key19": "52VJJPKyDcZ3Lj5Pkbv6PDSrHVoNLiZgpizeuYsfUGzTXY4MyZGLZprDa2fA6NX9rCq6iHjk6Jp2FqDuxeX514eY",
  "key20": "4nQgeGAQ2dus2CFuL7wfq3vT1siGrDEeCLbjYPmSmkhEypNX4S7p7fdpLJ7h8afcFNpr1bSjJJLCcj98HUN8jeJy",
  "key21": "4eEkFk754Wrpa86Lp9rDZFivpVnLTEpveX8BQcBWbfcy9G4K1bAiNrQHHuC7p5EtRx1J5ikktzNkTUrXF7Ldek6i",
  "key22": "5kqSsF7aGpqkxGwVEMoaPzhDtrv9mvWTxrRKqx3V2errCuugRikutyQgUFFkeW5YXzCVPrZPricTHvFoLTf7u99X",
  "key23": "qdwimYv9sLRwLD4qWAPgUoGRcjweHmY4gYxBypByTHDow9pDtzwKNs1qkyFxcowHkakyMHcRw8Phu9g11XXaeTY",
  "key24": "4HuRUE1zkGKkSHaW1bCZrH9VS6K36hgvKJ5wnGLN5nDjdg2Gmn5AuGYpuCAw5tQhM6Pt5TTt2q5VqX8QFxr5J4wA",
  "key25": "2xXh79vsveU7AJyPsqCBDrJdCuBiLN9wPZv3Lbc1dFBuoD5XDgZuY6XENAPP6yR7NTJBvVapD4zWp9SG85qYkprS",
  "key26": "4dRb1CWTi9Cf3Mqd485xTQ6Aw6idYe2joTLWtq2XZfC5yd6eBsS4cBZsgSUCAPVXAQtfwhzMpDrDLvf4nQUEfk4Q",
  "key27": "2FKLNAVYKLn9coHBt7ew8muBjDXPXWqz9apRbdSAMfbt5gobHAoosbYJiijEiZ2Pcy1YX286noX7JLYHLPfk8r92",
  "key28": "2KYd1zEzxnFcvhM3v6oYsF25iWCZLsAqfYSWDL3M1gGZomZQfZSK62SfLv3jzMsTyGCCFTSLRuZGrLkthFEZDCXQ",
  "key29": "4BPeCAfhbDDiuy978FSCQP8U5EWoLC5aiU3UJeJgLc6KREZ1tRtUBv1X4Ax36LPCam7wbLjB7C7NMhRSCjFomKMe",
  "key30": "67JShw3vW1Be7DeLMj9rpH7ti15hxjPyDo3KDQBfngTBGWUGsGcXKCJL5jVT2xCUaJ4zZTQSdBv3H2XB5JEPiT28",
  "key31": "5hqeeSqg1G6qeG9izVj7Y7thoNhgiZJ5A82DsX2yiNxazoivRZ8QkMQ2XZ9zGuUDjJq4zMH8MdYMPyByj8ciQQid",
  "key32": "2siyAJdS46GR1jASi9pJj87ETaiT8CsFDomYTs3bW42XEzzU84Avp1QmXgQbzKrhPM7dQ3G7Rp7EKYT9Dd475wbe",
  "key33": "7et7VENU4u2LaepJKHmHkwa6nRQ22p595AW7u1UZerKHie5feFcrzpe7EYMXVXqGors9J6KBiSxxGN6FmXe1tqA",
  "key34": "34cqeaKHmR3zFbxv3KWadsVsaQUdC9E5wpSNQ7A85ZVk3NhhH9XSeNH6BfWxjq368PLerumP6YLBZ5o1V1hUynbN",
  "key35": "52MNraFgi1grZwHbCCX9PX9YPvmt3tJhNNaYV9VpM5cPvVEyMdsXdf43RapFjKxW2TnAMfbnNXAaoPRiFEfrtXei",
  "key36": "jJyYwqHnTrZeantCxs3Xpe85yYqaKAnUc9D47LbTHvfuRaLeu29qMaDxxh5Up9zUcUzbJVRq9DE9zBD5GT63o3k",
  "key37": "22kguPL7C6JPU4TVbgSE1Ar6t8oHxENkxyVq91jGdDcbwERY9MxJXPSJVEzX5m81BkRfRXZquJ9cdvqkp5v9nQen",
  "key38": "3UQMUer4vWY2kDbkb9incFSSSvSMDH7aM9J9FeSBfa6RHRMp74NkbSPJz5jKzLnggcWS91gxNRf8m6YLHYbkncw4",
  "key39": "auR2DrguzNPwR29JQANWoA8YKx8zpxWYucRqHsACGhhdpMnJppWCziMe9Jjom3uQWtpbFHX6GxicZpP5RARkKAG",
  "key40": "Zu2UzBbhYo8BBRTtufaSVecoHWUemVb495wEBsrAtt3MPucX7Q39XXtZQr3m6TbsGXhzTsvjN72pXUKZQdCzzJi",
  "key41": "4JZmTKzRLPRuKvFB9GvMKRjS9QbzhfpGRkNaDzbmM1R4zTx9eZWGxbjEHVytREgBvyrTnpdvZ5SjMuF1tgHs6ZwB",
  "key42": "4wkMdPe46bz89LpMK4VVzFQYroTcikQbgoqnn73TR3NJNTmKe7MfmQJri3nrjcsSytPZu2XDV9MJuyUc6h7xdBef",
  "key43": "5vxQDijbuRUEi5w9h4Fzq8FmpJeZtR8wRVLbHnVioy1JCJ9eXJbpLBcEcmWB5Fu9FPv7Pay9MW92ZdhrKyzyYL8Y"
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
