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
    "o5GLMnFNMP5ySw78ehjfNdVq1WFyPnvGVgqgjj2vx9WznpMKaAkh7xgXZy5pCt5Xjoe2mi44ZMVuieqUVguyabn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBTcXA4RBa9bQ1sEvuvtE8edWVtmMZrtCDujLgdVrCt3tXZt6t5ZTShtRzRcEvoNAqTCTU7HWxrwPB4JnEMSYfr",
  "key1": "3mLnWHXaCcSuCvyeAqYorZEN8aw4qDv6scBbbmMU5uYw2DcxCwe8SvaYqSwetgwsZqGGNUcQ4WHqDj5RV7q2sbwL",
  "key2": "5L5PPb2MpkXkfjD7DY2FPhp8t3FE4gAbVw88cqenjmcLZMPFfxY4VzxDyZZcp3Lrw7ow1XTVt6TkHQueeuHJv4W8",
  "key3": "voWjDQkkme1b2aZLPuwWNKmLFaJnH5mJpBXV2ip9hQoqi1JjXKpSsS8cVRPtVq24xpWoeNpGuFHdpxzjHNVkMFj",
  "key4": "4e9PyVguZ22sQFVQxt4NRLZVFquaPWwMa326QAuA2g7Axzr7GykXaF14MJwNbrQKiyjEn3mrzomxXP6S6cqM31WG",
  "key5": "LEeDbi2WsgqLjRzg3dp8o921rjsfnYivZa8GYXqNd3cVmxkLQUDeWYbvyXiTjXmYzMYWCJRg38CzHauSLyP2vC9",
  "key6": "5UuqLvCtU3bG6DV3eHa7NyZgFWzEBwutiJtreosn1X5oaGriD2SZrJCcgXn3L9NA4oUJbpVJEujr9UGvQ9TZHTUn",
  "key7": "4i64Ab2whaaGLazUZTPXejAsZdiPwzY6vWHqFoeLFprf3bpfuY6cakxhpuaBEgK1YiokRJqDbffKt3pwoZiyVh29",
  "key8": "5ZKqG5UthDfxQRhYAAbLYriUn1nBxXrjP26cLYJc526C3YKQ6oSPZrRoduzMM8gzC33Rr6SCQQeuCsFfPWQi4Kzg",
  "key9": "3SxE6NH13knsZEfpaMXtW1cUzLKHH4FsyEqRhWAu7Q5CqNwsAiaTsniimfSNjeBURiwLsBVHhafLYfXSwqSvmEsx",
  "key10": "iwuM9t9gae5tfV2jtt4cDnr1oJJs6wXQMWHvusbVEGUrXZNpgSmwtjCS83pjVsuSYRRcj85aNkSy6HKWTjTR1KX",
  "key11": "4a2rmpt9fcoeHAiyzivdc1bAkdqUQnszxy8hwpswXTtdQXkze6YeULQyDLiyVNJH38J59B6SFCWCF7ywe2g3KqEy",
  "key12": "2cRPGSwTnp523vaFuQ1KpJcFGVTnCEQzx8xJjNKFjWoCM1dmoH97cmtx4taXtxSrBa2FZh1KSyTkDYXAszZehnmK",
  "key13": "4HdX9qrtYcRsdnQXVEZQYFujJjwbfuZjsXpGBtnhdXuoPpjCcbe5hMcbs9eJNuK3q7aZoc6EPA19P9R82UudGzjG",
  "key14": "2oVsLzoYhQ391GmkF8kvDBX1QqzgfarxLkGVAuVtQ2mMsBmwQr5Yqj1muwmknnW6kvYjuMcuwXp97E19RTwVJvDW",
  "key15": "4THiBKBQ4perFj7q8d9HRD5qdPAynJtFcPxF2Rp52zeCiePLGqkC34EZmd8a4DivZh2dJnrgcq1rS1cwhHdVZdtk",
  "key16": "5euyrGpGTz23CPKjXSd9cC5EwN13PJtgrKu3EV6PXxCLZS5EfScusicUURTwXLPuRj8SmAsMNgSiPuDwkoZWEL8H",
  "key17": "4ahFXYBedD9BNN6q4CDj9hjbvVGYRoBLH9zEPgpAcAqu8Fu1nzAMB9PrHPut1x4cc3ySv1wRuNUqsBhMTv7ZiSTB",
  "key18": "31vvmTHCvgzPRs7LMw9Mt5YSyF2MG3AKBRzveip81nTf6ng3zx1PmADbjQDCUp7i1pr5y6Rjd5LUX8PZS6TrG7A3",
  "key19": "595RBMAGyV7trBmKPZCd7udyKNKw4mg8T62Se8ANB2xUApBzVdkUTFPcrsQ5zM8zaEBgTGoWkBow9jeASagkUz1z",
  "key20": "2E76MjjKKVGEd2TLJvfwD4wkinZcTL7BziNsWA3m87Bi9Sg9QJQShK7uWAh3FqVnAGrKZEfe4LbibCA5XJHZWQKe",
  "key21": "2x93N39JXKsaFde9RXEui8qRxb75RpZxz4J8GNZQf8LcaQetqe2sBZK3YKKvBn9KZ64KdWdF5yRRshBs46vwhGSB",
  "key22": "E5SDAf7sSUDiWqGbmxVyNRHcx6J5dth3iyzTQWdB7kMUTWN7kitJtZKDdAycYQhxZNFL5P5aTLLrB5yzc3PTarg",
  "key23": "5VugiLTYURYSCrE4bvBedWoEWPUbe8THSySsuiXUt592nJEB2p2FMzA3XmjF7tSUyxfFA9qByntVQvPSw45HPTWz",
  "key24": "YB1LhksUGizXDLavLc6jaRncjiLJqJWnrb23oHcsytCFfBQDgjkdZ5B9PScguzAmcibns7V4KLj7egFb7n7Dgqt",
  "key25": "2fjuTCouVD566PLsacPSGoQbiWpQnBeAnwSDJPsNvoys46U4KpBiS2mTDrHDNR5oNg5sC8WapJRdWf4ZMxpK8C4Y",
  "key26": "2pfzZtiWUjg7tmVJcLvbC3NMrmU7eGNnu1dVYwHw9C8hFN5j1oHYzFB9zwJTyKsFVz5jacev88EzKPgGVNGRJjPu",
  "key27": "ZVdfaMZu2J83AnJWLcayQc8F82wpcW8vbYjcfxM5cBzhhehJSSeKMNH4ZMKMoJwyQn924FSTecNNv7YJXBgcG5F",
  "key28": "3vun34MZYMYUvBQjFxn4tvS6iPqBgftLSVwYVCtH7BxB2sZDBcVXHANbrAGdwNtZEBuVm7Sew4NBgqjiUK2veti1"
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
