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
    "3jSo9MJKZVsR9Z51Vv5WRCH4ymPB8XqpoinsYSMXs1Ja5XyWzAEXmQy4dtXpVGv5Bz6TLAeSKQMUA4F3zjjB3adg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7Pw7bDfQbiJSfnwW3HYvSr1dkub2W2SZZQRo9c64DCgRhDRDLHEMQH5LdBRT82uMPSWm7aWerGu8NocgVBrDDH",
  "key1": "5CR1b56J1hj8THW2f5RiUVcWTecfEQARfAf9vu3sYZ3QxXJNCVv33f8Etis9WHw1m2ZQ5AYkXq3QcmJivBYLgqF",
  "key2": "iCVoJrzfoLg58vD3MNi9CD75NVwMVRXYukZn8W5PCAU2rkmkrY6JraFJj27saXkxGBmYyWJMEapHFm4zysGbP69",
  "key3": "3z1hsrbSAZmomzfPftWGuFn1kENjoTu8Sj6KbgHcsCNQKqPY1mhCLrTd9FoYTX3pu22LJXurMwDXs3n4hNDsYSUU",
  "key4": "5vgS8uT6Tt58ox4Q8hAc9sAynYWjZrufaQZtbePCi9bx5NDGpeFD3NLW5hUxcBtx54Byc1wZbHZWDRqFeu9EPL75",
  "key5": "2teSBrD9DbR3ZSi6UmN1WRJ6Sk2sAFWd3jpbC22hEEJpGu8U8QwFCn8pcQ821ocss52z2Wr2o6BqqkhSAy1MsiZ6",
  "key6": "zJoBSXSXuxy4TxkqXa8m1xYyqe8tnekSyQRNRZKxdxe9B6EJvWcWTvKFPyCth3mzNwGq43ZNQnBBkCmxV6fxXCz",
  "key7": "3Nw9KdEok9LEBWYtB6wi8W1iHCujkCCqHexxM8fHg5unNkwFmHNbqckoUvXVTNP2TZsWrnw4unYtExndGGx9aGbw",
  "key8": "2uzMXGBV7c5JbiFAtiRi5ZmeoeUyGet1p5gzEx8TGw9s2qu4jqtpWJe4EWCTmnr6aPoFWxJmo61z8VqDQoVktumb",
  "key9": "5Z4yAPhSEBt97qCQuv7P2eDrpMptRBznSzkZpPbHQd8AUHj8yi1Sq4BWhfvbFo2rRjwmBPhjPqRHaSFcQKj4LGcn",
  "key10": "2iTRgUjWmoMw6WWhkhcLs4WNMEKBcw8dL799oTk1QSnaM6uCndCF3gj3rsuZeceYwLVY8hZJb4oAGrY2FaKE1AqE",
  "key11": "3womBYnwu2qZWAs2G5HJaN91yCgiCCiz5bJCXCBJB5TUfnU3m5V1abMkAhxQPT6mYLYSzyhinmyx2ezuX4G4ZD8g",
  "key12": "4YRd7kUzWzZBdYdjPR86ki46SkiQ9yeW4cGZWt4267GRPoMi8SkA8kwUgQZdhEqXgRNRGg2HmASxYy5S6Y9bCdc9",
  "key13": "hWQt7bob53mctPDeYwGhav5MXogrqssEJCYEQjTjHfy6TNkqjMwHvQ9Whm87DEF4PpRcAXxRkVSdWhQZ1p2ks5e",
  "key14": "4wVbrcrJFXhERuzqnt94us4kwQwXCEfDMg7zVTdgtM9QPNsn29fjzwN33biG9bikSQSYGUtHqb2x4BwyQkaGc8RL",
  "key15": "4mAkJjZsUQZDsqKMgtbEbLeuu5q6yQJi5W74frJB9q89JDsxmqJx5KycFTnZZLNmY5SNGEPxxrAJ74xnPKW7xTgz",
  "key16": "5KeqqW9vH1Qbh1vNWeLfcMVi7hqMqjwr6bkKV7Y5WEcjdYXNudz44fGEYFthYULJVXRhd3As7V3B9pz7JNjJXKm9",
  "key17": "6QYPi1yi4TKQUxyfduxvzegXALvam2KEUtdEsDYYWPeSk5pXFUqfRZkLeuDCn71rJETXGQdmEhyPr1hpVuvsbh9",
  "key18": "2gGZ4RZzRprRFyWwS8Kmx1gJu8ZTTpHEj1H8xY2hftyfZk9jzoqmrRaP3UKTmX2c2igSSHySybwLbKB8TvBrowXT",
  "key19": "2fY6LWePtTpox9YpZyGTMd6iJ3BuWjhNSoDEDk87umxMDwDac4zLMyZf6eymHEjSer2xh6TaEdXdm95up7gbdHoj",
  "key20": "3MrRk7YSQrR97acHxPHAxfRh85h3HToMLqQwipSufn3eWZTFsyt7a76fZLpB7qv526NwXh1Y8pxDNFrNdEH3FnXA",
  "key21": "2osy2iugdzbwyMnWk7fV8v7xeeEMkHzkvA1VfNQ6mQKYi3dzL9BT3V2s6TWuWDHLR4QfdC6DkEGgTzAEXqgQWPJE",
  "key22": "ppXvgu4vDwbBc9VV7qvjft3hnVYY5idjm5KZtFyUkwxiJaHoF75xv61UTmy4QLZBD7druJ9riQ34z6ptMEHyBd5",
  "key23": "5EDkeTWXp93MqdXnkB19gfwT9ZvpSfBqbxZJ4PKM9Gzq6A27xizcZgCuqyu6qdPzCToomxqPU9KjkorpbWFGk1pg",
  "key24": "3nJGG7drDgYf6WzKmhYihFt83XUx1CbYC3xcp75LaAfoeKG1nuor45Y49efTLjL6hQHH4fpUTipNGUqht9b2yBWV",
  "key25": "3RFRC1MxTGHAeg3PpxTqr4AAH9PMhu5GKUAN8NPkupHLNtGvHUW8KY7UbdqYP61yKXcmXt1tzTfZgMFJKGHXE6Z6",
  "key26": "2RKGmnLvzcUTQkDHQrKXNBkvNrnD1z4sL1WFSMCH7qJWnrUhuuMGNaox7bKGyixY5txX1xqxhZ3TLdoWs56FPQCy",
  "key27": "426oht5ro3zpCaeSNEBiuZUitnnAxU91Lme8ASePrB4cGRZGjwNV4jnLJJQQwEpFmM1xD5mAfHytbCjM1QawxTPQ",
  "key28": "396JQRiFN39zSDqpgHvbaqBGExf4zgkpBHpuYcJmd6bXqWf9xxkNtLYvoxmL6zzTgJwVXFZXHSa2gwzufA1QtjLF",
  "key29": "4woYTySWsvYNvgcaAi8oNFivASHaYsNwxzwSNiRVjRA4DsZ7CkjLXRGusp1PJjStBcCtLSyjREdsGRsKpfEMGVXM",
  "key30": "5tPgkHjWeKVSSJAsnm457a7KvaYpwynaxb8QpuVB5Dpwm2ESL7jJkSZ4bGT9z6FSyMPyp1hJiGSK6jzdwbGonY6E",
  "key31": "3WqBYb7CTbWn8wGyXuketS14PVR1iyazMPsyxPAjxsA7cYf4EWFULpeEdfeV89mVwkRYvCryeFv4TBcMksscYoyg",
  "key32": "4QFrLdJYddphmiYF1Vy8nzBRjGqEurwBSncDRBUBZ65YQkdy3CCaPndqmtNbAwtzKx9EKYQB1KZpfEoX5rAg6peG",
  "key33": "JnyAzFfKWFfc18eeSCqAopjMHumm1Nf9jTsnVsWdmiauZ5Xie9jqCw7PTtYB4qpvHZkpGk7op7DrdXbyrUo7rNi",
  "key34": "2qSWbohN8mLk8APEpHnXgmndBicRGTMpW3LCTTKBsHtuFZBp9VuDRXt7fd5J5RXkUG5kJc3jhKmM7o923njRHkg3",
  "key35": "44Pph6AXXnP2dxUC3f6bW4RS5ywZ54eX63NG6HUwD8WoKE1wzWviH4daK7yAJ8jnEyZrqeFN4VPzdK14uVadgMkV",
  "key36": "5ikeaLZPnzx9igAvaU8s7oSUs4QkPNJ6EEEySSyvJ83vmi3gawyNxTwd4y26DTvFGLAimBRbPpfFP3Ge6RcPVenZ",
  "key37": "2rbvxMcQkaWZ5qi9rE8NuhwRirSF5v8i2yV7kF8PCKfi1cRU84c9nG5EzAjYgC72a6e4CvBSo6sYSLkeJpuhB79k",
  "key38": "2bdJLXGjMLYsXCvjVtExRouVevveGgZjshQ9zANqgp9ecYKuyT7azUbW6hWz8wwnRMQxGdAujgsUsC1jdYGkqcQ3",
  "key39": "2w9UeShQFyYNmgqyiiy1szzRCVh3CbPTHxnAvjGZzdwUk2q78wWEB4hfTKdu24MseKmtuYvJVwMioDe6z91PSyB6",
  "key40": "5oKwNN4d1Q8KdEb33xWuVWPf7Sv6nH6PdLpCXzS1PKtpvPsh2nsm9nkzRs2bJFRi6b4brS3QSbtoJj8jgQnWdaxX"
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
