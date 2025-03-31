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
    "4N5nVnbnf1gqnYosYV6zmKv18ojsLbuWMAGinXX6UsUsTHSKZfG7Jcq4cUQ9EwCw2tFwdVPFtkbUAtNuKk34DqHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4PSErpGcXB26ymQZ9gGmMAwBeK2HxBaKja4mEadA7QKZL6xakjYeqBHvriNf33QLJCh6z31TkCoXFGHyVGkigk",
  "key1": "4A7n3YgFMPVZnvEoshmu97pzs5B4KwXR9rg1eYj7d3D6TsgSgNViNN6zXkupqc2iqVoQt3vDU7YZhiNoexnHYkQ",
  "key2": "35R36u9ardEWjE6wYXF9gDjLRYJwn8fwmk7Pq2aEjjEeLgpaZ1shncy4GEKTiAxP5MwKQ4jZdrj5YhyNLidiNJec",
  "key3": "5UgcCyL9CBQ1Qan8pRxAihXK8BHMfxLRtjKansu1L61xFYQ4YgvR2QVcQTox1JASynVSuiJRUhmAbET8LsiyZnJa",
  "key4": "2VoL36TbC4x2xPvVjPB417B3nJYnG65ysFYttpxARupAWf1nQmB2wLUd6foBNsuNEMjUnaZitDEWXbpKcP662wGb",
  "key5": "2v2SKM8a9UQWbSvGXcpXTuFadEZxXkhup1hESqBD5cHToBjyueTTeRDhAJ1fZ4rjpnyFxgA8YVEmfNmtutbit9Gs",
  "key6": "3sxCVnHb9yAKGtfDHsruTjTy8He5mYMKqoHQ7vn6uCvBgj5gFFDvC5snoRjFRyd3idxFJb3Xt5BGKmHChEqZ4hGo",
  "key7": "4A7AtyquJjm19PsCZbEhTezvSYQKj5kGeqyt9FBkGxrSyeBwXAKcdqNRZ4Sgn6cuPpjiAeJjrsSLRZg8eatpDHFg",
  "key8": "56qSyzmSuC9s7uVNAm3f2MqGKVD33PKB2DixQDoNApbVgEzEKGropuZM52tbdUvpMQdVWPbtNnGyqfQPtLqTu6dZ",
  "key9": "4HfN9kJ6cUAtRghx59wR7q46chZ7PTF8H55GYH3sV9r9fYEKh6PKnFND84TJzuUBsRfWPvnGiXBsjTXufHxnwFHY",
  "key10": "35QwmEaC2cUycWRd6ENk3YSZXCVgFseVvR3EjvW3SdrGK18FmwtM2xvwioEXVJE3k4Qp2NVaRBbGDWfNYwCRmUJv",
  "key11": "4SUCskWtRZAMgsdTKqQHaqx7DypvwPYvzzdoo8xr7wyTksuA2R7UHBJbU8ZXqahSCMDfLejMHVjCNFPVQR2NpkGm",
  "key12": "YHbpEaRWModQc7Zj494mpV1SsNRy8wzqN6ihZzDJNC9S2e3rgGbhJkptQjMAgtdfL9PyEf51uvZGiuUXm2URo5K",
  "key13": "3VpqPQxSp9xr1bu2KFwdgmyMBYuhpZpWmoe4TkSSfZHLZEQfvPX9n8XLWGd2k8pktNjG36Bv64ZQwSSXwdbvREEj",
  "key14": "2N7vYQv6ASKXzR5zWCQ8GnZT3PAt41JtAFGevh3Hzf9GYLkAucHiaX4qBDuxZ9SGMU12eyhAd5aeytspt5rPqgLy",
  "key15": "3yrfYUCmc4YiA3kPVWkjKGF1ffvCLQxA1oyU7y8JcgJxNPywmp2sU25ReuSz81MpWoizn2T87Arko7hWGnHFowT7",
  "key16": "2vGMbzshM8FRd9RZjbSEr7nukoVHnk5m3axB7XjXHPnXJLxA4B4toJYfpH9XxtTQFayXmZRzaZ9AN4DzyUjQ4RyK",
  "key17": "3Aijr9jL6PDxZvezPKaj7L8zYYS82MQXNkKKizcyVcTwAVXEiLquTCe3woUMhawDZENvbyKimiWVTr8hMyh1LR3Z",
  "key18": "2KDMYv61fVMXiFWrLrZxMUMKAgyaD6TeSsPPf2Ke5iUPDYxXWZec3hEQbQTrTP9bAhbFT4NB2JvztgoMq3VPf5Xh",
  "key19": "5qTsjsWMhmsDuaDTSnH1Srdw7vGFfPt7erNfo84gxFtZ7qWiA5tjWu3jDprXSk7ZsSnr9gesx9UYiCUW8DwuXTzW",
  "key20": "MJrxgPScy2QJkG3hxpWx1riB34it6B41fUsFd4BpFjYwMU9Jy1JRydGSFzHkyaXSrXKK1rDouV9FdhegDhnuCTJ",
  "key21": "5vgLK3uDTjjjovcVvQLx2W99YYnGFnQCxH3NpifMvByrHmGsMazuNp9xu4AxDZxRJ7Ydemxz5o2v6h3nUrn23yaX",
  "key22": "2MCY2kurhfUJfHqGPQnynGnaPCNLoyXoyryzoADYfmQx3uHdfvwngJFSG4oeqYj2q3L1MT6ob9vhEc9SZNP7Ht6D",
  "key23": "2tBZKH2JXcC77V8oT6MnUCBPmWKtZs8CT47ZeiDw65bsf1yVRjitoEYKLoEjsbCkBc44okdEGfTWLkmDYyX6EB3a",
  "key24": "9fwsr5TAxMA9zTSBVVqyC8PtfvCQXuBnf4BGAYqvdX562LPYZ7EZ3bmLjnVBuAbqeHbKjvzdrnt8pAczHFVrZB7",
  "key25": "3ZXvaBVTPg33kRrrvVih7ji7zyMxXmYRt2qTbj3TeF5faBnKdNuRV74RfoUYZtZse1MWWodYiVNAeKyBigGdmPZ2",
  "key26": "jgX9nGDkYx9qVTYtqZzoJyJzp5o77DdqgUPAqCmMwf6Wi3vTaQhhcCa5WtWYg2oEpFjxygM5jRu7wtGydidDiSX",
  "key27": "3m4L3ZLQjGYEbj9YKucZTHtMPPHNjufyfCjrw3TEMpW86ycbwjtMhAbPUrXVtgYjEtZ8pX6BxqB5eNAFN9NKfjwg",
  "key28": "61tjFBobWziTHPCosHmC9o34KGwutsCi6cPJkWCJUVSpUkL2KXd337RQiz4N6vWYEH1tMSywseArfXX49C6KXMsS",
  "key29": "5jwivaQkyUMrgSZFgLH7sozPyDxn1BAM3PUGBJHH2VSi4NxC1LZchBtDmqeD5nacxP8nBxfwXPhcugoTfZNkiioG",
  "key30": "3isvW1RYq9cuhovU8syKHxZqvJy25x5ZuQMSou641ctmw2MBPA2iBhUFQi3EbX3MvEEH99TtCWUGqNQk1pwPKcoZ",
  "key31": "3qEFwQmmf15R4LWGXgVDUYLQKjiVzJMHf7LnQnaHo4i7e8QxbY62GE2ixrteRWYUBdwBYr9ATbsiij1JTpTwSgUv",
  "key32": "4xD21DwQgUfo3WSDJCqUjwDBTNm4dh15pJJsxNLFMLypFSQ9SCj73KrgLbQRiM6hPNZYYGMMAX4tRjq6MT8fhzet",
  "key33": "3iiyXAxGnCeSupH4R3fqXJzLHPjrCCrKFDSe4Avmr3otEXdoW4rfSszkTtKKXCKmpWneeUkmZ6k3ZCKjtEqQGQhz",
  "key34": "5KH68HWyJeUs4GgUUYmcwPVv5p8eEZdQwLTQ3Giiu9s6s4zq3ftLYAFeStu8M55ztetceZApYqfqYaVTTQ4VMkAG"
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
