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
    "3KgxseVUTZ31Wq1DE4x9ytFNFBw43FNm5ZECfE8o3uKWUrNY5oPZfDXFWYHSxp8A3LPu5U6wvZLN1GrE6wkVfsCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66w2fWErUBpLbnQmUHZ8SLRada7KS3MnaBjifHCVpwy9grKgx4fMx458CsLyvZHA5d81UXQDdPuwRRv5gsJiLHVn",
  "key1": "39Yn16zuJ9EKDj47CPTLsC9BpV6YL2us2nsae4PM9WMkGFPxUHPeigSy2cqu3r9m9Vowy7ZjGs4WDuhYxkCRNRtE",
  "key2": "4sxiFFgkvzN6Gh5fPjE8AL4wb1pFqvzhsoWpXhtT7JLdPkeU9ZtEWsSHaDrgZWzuPHkVHVsVmfHbbgohCEohgTri",
  "key3": "qYLeH9JuytqiBYDBfreRqexj1UGNXjy8EQF7HX4UN1zQnjJu7mtDYkg9q8DUxsBTFYVMm8jZKRLdBn6gdoYdriC",
  "key4": "5Kscbk39pv9AoLP179ECbCckn69Ru6Q44GpqKwX5KKEZw8ToksfH7F9mxZ3zLviJxhAQTc11zpxUZVtuG1665Ri2",
  "key5": "3zUY9LwLmaiTePVj2aW4Vp3FputJ56hFtECm8tXhWhDDrtbuZDyBD5QXmoXY2nSeU1i7ATa8Adpz6GwvEiKxaFGU",
  "key6": "2jwN5YwLGQXydv596DwBq2cpBgNrfX22XJ9iPJeRHbzJMzzzSumBZf2g43d7xStqcn1Sh7qtAvtQUYtWS22CvZwH",
  "key7": "YPnLXKTCujjwVG6zaLE2kqUY6czyspXSKNNH85sdgtXHkBwsS8iPKJBE1oS4gH2aHKHiM7Z5DY2uxw2q2CARgm2",
  "key8": "5LqZj1g5Aw3QVCueUp1LuTR5n1h2mRZdYUs4HMC7ZZ5nBfe4Ek9Wut4rZfTw1fPhHkZKu8AfpRiTvDf2V7MyZGMG",
  "key9": "4tNVePLabGSbTcQk9srYLyDB8onyereAvX2z6eJR5ULE9xLc8i4B2KtvMVzXyDSDG85iKcr4ruD6EKA6eutqehYP",
  "key10": "5TuvBfVdScvgcWkqi4sjziEKDcvHPZAfDn8Lai27x3Xchf1M5CX1Fnwpw1q1fhLrKVmY6TAxpC5YPafLY5JEtJVy",
  "key11": "pqw68oimZAa2G4PNRepTriKWiVKsDjjuC9adM3Avazv3fCqfK9dn5LLfRqMdrxbw5Q3U4PRAsN4e4CDjDgVBpoc",
  "key12": "XmG5fCWAoxFVLqmP7RCUdayu55QSjv7HPQrfYDhjp49EUtQNsPLiXmahyAFrvyDjvZrJLCMVGz32SrrVHc3oJJb",
  "key13": "278nbQsySnTjFS8uiF3SrfLf5Ufnzxg8fEsKCJGGSrkgasb7PsmBnWn6f9bMDTmYu7QbVGU3xuZB7kBz2DzmCqHr",
  "key14": "3pHReSRAtFdCqDHCHEXJmPogbyHD9TgaaiLoEoAqNxcYGX3Cpjw3gX58xNwPEEq3cde5vwk7M9zy959PBf25BLm2",
  "key15": "3NFCT7sAJKTxxbeQEYDU9ybqwCVW5821SfrCpkeLxY3ihfWrHQ164ayaDD4GzT2TgU9FFmWgbdmAsTVQxPyxHy4p",
  "key16": "4mbRS2ZeGX9y9GKbHHc4yZvTsMrjQbKvJ9kBcDTqypP5J4yJCeiWnsjNs2Y6kFE4MhTYj9G1FZrFcSMEoEtZQ1AK",
  "key17": "51JDGyM3h2pzFAT6qGPm3NXCVcSkYwuFkyP4zQUM45AQqtZVJnV11tVuufQ3mQsHMew7sqawH3XrvP2T5ofvB5yr",
  "key18": "2JSdTDEsvtU7HJTBMyJVNWXWubsUga9evriip8XV1zsEGXpxcULHVj6eJvnZo9pvHZaXahczrqSfxwwrNuSCibLC",
  "key19": "2GDwkLW8QkJTCpwJFJkP8VznXVTeauQBVdaU2gebCf28xh8So7SrTRnZbo6zqzVZFU1NsyL8qTt2avpfvMWxFpj9",
  "key20": "2aGYrJEt6DyUU2i75xmAa2Hxr3r9A8Kqrh2z9PG9oRZWd2QfPz8NriJ9fGmVCsGZip8qL9owLdq1fv7pzaUJF4Yq",
  "key21": "2gZtoWBq9asonkW5soSFNL67LgMXHYzQFuoYtSVQC5HoVTp5z3neyQ4YZrob84eKpUsVfyikPBvNBHTXYD6WS3UL",
  "key22": "4hyFwo3fWVe8exBAivmANYatjF7De78vDgTDb8RrVKHqGMJ6f5yqxJuLX4CwCyu98w9KZLmh9UvwiGAwG3Td7PfV",
  "key23": "BJDWGsZ1K3BsnmtSn81Ypd3ZzXhjrnuQKHyMyoabYqQSrkS1ha46duKDE1uHe8LQ45AV4RBrGfaUeAYUfG46hj3",
  "key24": "4FnrZJ6nWwDwKExvCKU9CST9mmyzFaT5buTHTwLSSJJpm5gwD5m2UbHb7bcLiQ7BYk55N5ugDeC4Ufcde76u6a6J",
  "key25": "4h7iYw4ZwaiVNAZbLXNABaJVNqszN1t71PHUzuxQntdqwaLG88nqMDRqfMc8jFi5VbqR81GBxirVnGt5QmEpzm44",
  "key26": "5UDUkTkwySHWm9YfAddzbB9yoYbGvNntSEjtcK9tmiyssXEs1spcxnUFbh9JzYZpnbGKLeyAA2UyMYrBDozjNw4M",
  "key27": "3TD2tKFBojPzQpg8yTQfeCUtP6sWP2vdfmJkZK28f3xmxSdRaj4SxtBCYJftT4Xyb6dYu698uHNycJPo4vimH3ug",
  "key28": "67V4GG9eiEpkExfA9ZjAHnAeNGQ6B6nktpEPianEdUF1qjKLpkJkJGM7iigfdkeqQmF4b9qYVzQr6YvC8RejYvaQ",
  "key29": "45DRY13ffr45zPPR9erk6qZTPrcpvGugaGvwEcJJDroRrQuquoRfnjW9jkUnxs39eAJQyCbJiY3d2fP8nXRczjCW",
  "key30": "2cm4MWXtEJ9W2WwoSA9wrkxxSFehNrr5Y7PU2LYphMLZSiY42SSVjt79VxYEFxDjX7JEkqWSjL5kCobZvZGRb2Cm",
  "key31": "2eXgL9thKJwqDVzU4dnMrFgfCz9xFFsk2L2YAxRWvsW5Gc1idG1dxQS1GXkMftg2pRakJmHsJWfZHEkRtCzDuZNz",
  "key32": "5UA8CQ37GGoUy1i35kPr2uaWB7YoTjyvNjv76kWa8j1oNihHN45BDYtxGJwe7tH7Yni8Fb8YRDF2H5MzYDKFiTZm",
  "key33": "2hzH4w1xTMcuqLum5tPZaPteqreUJnGcGH5BAX9noEGphEi26fsLYtfeCa9TGEfap27Y7aTBeAeNzjJ3yJ3ECRnz",
  "key34": "32GCpTzpzXkoij93QJvFRqx98ZpRjqCP5zsUL65v39praesah37Rj18Gmt6g741WEBD9zvjtnNFaSk28iS4ewsHx",
  "key35": "62XF76EPFdmreooJjuiGECAXAnhArviTJd5oMZnmWA22cYHHgGVw19gDh8FPYFjgsPB3CNGXJtDFM6gM1XJYA9Nt",
  "key36": "2Tn6QJLnrTXjGuZP39cTb9x4SKUTKkgzBaFM8vhgpHsmHKGgQ6RBWhtNYUwmiwHCsgQ7C9T7BmaMyBKJKJeREqWt",
  "key37": "5FPmtLs6WvEodQ6U5LVBdjsxoFDdCtcE9GkgH3p6gCXrdCUmq7wQ5yCTpAaPGUt67XBeVhgR43voqnN297DKXCgh",
  "key38": "3JW7DuaPNCcYgQaMQTYoixNkdS9Z6yEPLqBWeVG5vEsFNpigpga4bF3GRDxFZksZ6de2UEgNnQaQSsf9Jx6MNvy9"
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
