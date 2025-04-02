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
    "yQQtT2EvjKKZBcBktYnF9GDbDgZdqah2BUaG5watyVNW3DxsKBox5cs9YNAN62bbqzSuFiNdH8W8PacKAZz9KnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pcWHR446Bk1ZrHD9iEoTrudbYZvvBD2becdDaNNCMLxP7FE6KVCX8eBf22LTXZf1TnhWqjZ747y89SGfkjmMdvU",
  "key1": "kq7MQLK3q45kzVB5xtmGpXHihgM7oYiezwKGQZTLejsrsxahNV1eZi8ybF8vJwWrUcHkqCQYwDJ881LVeEMmg7r",
  "key2": "52e2FkKgd6RNWYeo8xsopL5WpckNgpW42JKY33XWqgoHyVgtSdwVf1sTz6aVP2QwQ7AvbwaiL6H6JyFuXMP53UH",
  "key3": "447Gkbca1P7yf7eF7Zhy4axjjsBpW6GS49ZW73q2KgvD7deXKpsdvK9ncjjcggjRrwQWHNK5F7TiP7UH5ZJhJiBk",
  "key4": "4xty8hLoDdSrqmfPwu1rANkHDtGvVeo5cAuQUfFHozG2cwzdWKvJ6WHoir6Q8veYmaufh1YREV8Ctz8ZuBYv3uvn",
  "key5": "N3GSNfsnakv237832kgKN7YaDhtDP8eowRxxomcGG4L3VPiueZHTGhyLZYoQonM7b4sRuSDTFsMbCK8XY9MuTs9",
  "key6": "3dXXWhN4bfX75WqBNWthwU17hJbNVZeDkyKApPr23aXG3NTGV77G6JvpHSxM8Je1R5EHXqXWVEKUTVKzbKpwWddW",
  "key7": "278uyroWshsqexdMn7LQJPKp6AEVWtup8othpZJo9rWnT4LiYfYfpY8kZw8wqaND9rNMC3MAgHHJNeovxmPukFac",
  "key8": "32ctKyR2R1AEKyHDtB2nLVqBp7nStVdsYEnaDPGA2NSyDt4mgcka9SAG4dHsUZH7XEXFTvBpoPHNu3jqFXRkTKfq",
  "key9": "2mBSo7Ese6nVVgUNDiutDB1pSnsQn4FuDZzquHLqVVbLBexWVRT6W5AGBqeaAjki9jndEk3sU71Vp6DGnzUn8BR6",
  "key10": "4ftHoopgUL2T441rqnovkRbqWX5B7yEDdQZo5AYWwHnN4qy8AbQxHv8iFaZ3umJo3oLHYXAx2nFefdKatFnFuykG",
  "key11": "4tzNEzhs8tZizW9sbouwUjBkoq8KMw8Jnjcy27aGGDvpoiMzRH9FmGsH15nLbaU11kNRDZYkTzmibUFTTBkKd4sb",
  "key12": "5aN8UKnYMPgenguFkJfP5rxhhNAZ5tiUxWWFXNKcoeQmo566CHZ66RhdUwkvRLjyB31vT2UmmLuJSuAuCVsS6Nio",
  "key13": "5sm6Ev48M26vcuRMLmDYUHxzjfA6iASM1TTr4BNJs8e5MsJMy53HqA9rMrzsMrEnqmNn8XHMsoWGnBFn4vDjAF6m",
  "key14": "5rJmCuuySxZWJ49SMjURF24c6H5J7BzFWi1dCRbidHdhV415fPgb2hhfXLFs6wunu8b2f4TP6NUgo6ZGU1jd3Nux",
  "key15": "5WHi7RJopRss8Xn58gUgBUVwse7RgFaw1d3i6561RLkVss3LGcDiUKsErgFw5Aq8m3LtjvahHDSX475n4PPQF48U",
  "key16": "2dd9kCgsE7YBzc9SbgEQMWcA3XTcKkb6vC3CGAUBacMEsCPmh3UB2nDV5PeFofgTgf8pJT6bnxNEdSoWi3WW23pC",
  "key17": "T6SFfpk7rnSSmRSgwjHsSBMP454txdWT5YM2aBUWaYuJjTS1izqxKT8eeRAphtTWA1JAFVa8fL3pPtdXvRy2XZ2",
  "key18": "4AdrEuAv1KFayMFhCKXDT2hTLMNh3G1FMqZj5LPydqgTLvRr9bKm2WLg8TNvTVLfamKW3wVRpAy5MAUbnFbqybxz",
  "key19": "XBU5ZRwVAerXYRL2CeD3skTnhX9g1YoAWVhvDjhU9isBm4ZQG6PRDgGe2kuB7taMra71cpzD2JKSkYkKi1Q8xsD",
  "key20": "2yR9JNPHXRnjhvT3Q1X2dEuTXSnfqM69vbq8BaSLXBzZpBbFSRo9iSR6xsCJHsQPGHcVysrL58gd4tNEY23mm3KA",
  "key21": "37C1PFdTgho2M7pZ2Q4mzL5s2XhnrF7AA3HnaGGgoP5cVo9ucnuLcyoGZVHWhU3d158MYZb2sqRD2gp8Xi5wcg52",
  "key22": "5mYESeBfdyc1oKyszjxbs3m9egiT3QYKhYHsCpwScD5qL6k2kGhEyz77Rkk5FcCUfr4RFz24Dfqpbwv1Jiz9Nnk5",
  "key23": "2RM5ZBpMPjgyyoF8yf6GKxwfXXEL5FhFLhayPnQJEaPBV6ncPQcBPLNNHekfrtgMLYdmhJ6btZP4Y8B1z5cqFBwd",
  "key24": "5tnT8Qa62MghLGMsYr4J9rQ5dpHd7KvBwGKyEXPsaVBPfss7b5VJTPekF8E71GKYh1JnpGxqggicg8Lt1euZApN",
  "key25": "4uBwTUxCNjP8qo8KibLErtrHtMArpPRM3Y6UgQWRKy2r3uWEVaGxqzmpHzkw4qrwqbyhta1KzzPq1jFMae4eoxkr",
  "key26": "1UvkHiAphnPJUtpJRysEzaUXCALAZXdwstu8X6xzBPWF2GLmW11SHdbCy4GrrvvX7imeqMc9QGrbhfYJNazE5hy",
  "key27": "5CCAEcxGgovYKdJ4Ph6VtuFMi7RVhhw8HfatjV1v9eVg24qTA6nepLoteG7Nu54c7Lup3tMLiQQym3YTkY4NjqHx"
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
