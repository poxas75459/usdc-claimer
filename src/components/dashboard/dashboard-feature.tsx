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
    "3aujRJdfz6wbvweSTCx6mxA2L7de5Gmzzftu8DNa2WhdvvDxBR5Kwnj1XZepjxUcJtPiPCrdJmPyK5ZARuybm9AN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jxZBFPi8hh69md7CxV1BQJySo3CysL7jwPQgLtr3WnHXPaRoAoWZUnLu5MSxwa1AXW42kvpCYG3qs1SLCZamtjL",
  "key1": "2qwoYZXbho82732hoLSp1PdiW4q1NUqBGdeETFhLBuCxg1jXqGz459RxEFoRjzuBcXHhDunzwKsMrWRtkT2Cihjh",
  "key2": "5wsyDLzw5r9842H3VXfhGGnfXzFtyiWZ1p1UrDtctE7Hb5Epuzu7egPzbbGWwSavRLNvXaM9bTGJ17Ftcvj98vL",
  "key3": "3WTzK4d3HVwz3k9ofY6EvJgipkPXcQzD2ucdGedRvJiehQg196NzWhFezS7BxRxcZSmkBpvpiWeR99KaxGzK8Jhx",
  "key4": "3QQ2eGdne5ehLXa9ZmNZ91vALF7XUaUb6dzGuCy5yzXQ99M6EKL3awQm6Z8nsKyvE4c222phWGZhKrygeymodUSe",
  "key5": "3LnVnZp8UyDFXF9ycFrajoPYYmrX1NdnXVndxHoKDo1SjgZUZVSyKEts9G2vL95D4NN3RhJVZS66uof5S98R1aoF",
  "key6": "4yyeu4oD7xHTraWra7U7c6XGHabMyAkhVMuXCEGEEofZg97dFv6VRn28QF4otgbQFHzsApczQLc6LcXaBdrFBDd1",
  "key7": "2NuqbA2pbEUZtPwFhRB2XSTbUUSSrvoCyyphnCKEtNqrAo8ZDYXHjgaDDumfERYXW3Xx1Pc7fVgvZgi5ojAppzvH",
  "key8": "veLoo7jw4A88y3YugrLNjDHBAbAXoYqLaoxrY6WQD5xNbEupfb7qAq2X8t7X8aSJTu49WeQQdWjMgoHsLSxrgMp",
  "key9": "5BXg7Dbjb2pPMB34Xg2vKLBnGQqXqBsDG9kGuRywDfzBYWkTh2auTxT5rsGngrc9UQJWtCHNnavNF5wrExN2UjMh",
  "key10": "5FMAgJVWYuQgAYoNaRrWYp1XFwNstmQwS8CbK4qM1cbaH78bowyU2mCATpqgPgAcUFYqckDy5Gb9Gnpo3BNHUJHu",
  "key11": "3RjfdvNsTqTHUNNjjMPYdYC6mTSs2ThJkVdKF3Vr9b71j8sibwgM3K9XKZR35SwwcDtp1N9gayWRmf8zV71ph6Tu",
  "key12": "42s6DUPPz335PWTkaDNiYBxYr3TzeWCeQNKMBtGU318tNux5UEhavtdvxZQGwvWkLvDNEVWvh8jp4dnHnamr4CQr",
  "key13": "3rhQA4EprkKr9vKTxYo8eESVXCQbyerDERrkoQtN352f5D5kyuxG5VPDiZdXFg2YULrWGqkV5E5z3pE2twDHzhL3",
  "key14": "3u9WY3WUeFV3aQwWjkdUhU5JMFvrbH6oQFQji1QT1tzRBj8E2Px6oLH19zwYFM7sYnr98rPUSmF6KJXP4g9nJNVk",
  "key15": "a6x4rdbSfiTKJQBdgQWH6pfpYaw1v35CAFA3yUuuUa1x2G636eppJ7nSZJxyoEjiZiChUMnUJ15RFYbBS7AqdFq",
  "key16": "5vMeuJTDhkjTuXu5m2dH1bpDnrbKGzttW9wB4WuVikGH6hkXh38tXBtzKDbZeLEXtHZ8ut4uyKUDmgJE627UBCkp",
  "key17": "NMMQ37nSCGQmS1wS7p9NnmjV4tYVgnftkuXinQuTw3exwG3h8WnwpbS2PMdf9gAcn7EKxqLhX9LnxcjgnENjVXs",
  "key18": "CngpsiVom9qsuCEAUYtj5mjNKmx34YVe2C2mLu8Q3UDpWkJi8Qn4r3FvQArjzEJKEzWKMeEKpeQuHA7sE4Mt5q6",
  "key19": "5KT49aB8gGB22Bf31kS4NLY95aRAHm7rRLVdDZ6AR6pnxTUeGaUeabr5513QTbfq9qW1eR4aLeDvAikLSdQv1Y2a",
  "key20": "29cV9ZUTKcnRDiCRauD2BBeioRFfGbe9rFYUVraKcRjn824N5aYpFGKcke6YagcyNfgdR4PXsGyC8eL6bDS31mUQ",
  "key21": "45NSmGTkPtkgGFGwUYmQJBXzmgZXtMYChH3MSqX8FfaYZnyeKBNu2KLv1hWw3wFiyfbJH9jXtTSoHZzSWMGQu5nr",
  "key22": "5HfucwkEVv8345DM3P85etNy7yfdGUoNeUvg6QZBMNCBbaJXk8G5tzrZB6awGGP8YxSfQ69BJH7669SXefH6XTUH",
  "key23": "oSQYQo4cDycSbQiviWyV7hcZX1s1BVRLMJiUCrpnbGpQCV8b3GboGqVQFejhWirdRRbqgQ2swzfyHsDdPEdtWn7",
  "key24": "2b5rKmhd2ETh38cqCe9r6bY47XN9ce1bxuV7NgM4rE2AAFQ4qhMbcEiKdyE1YpULjtaEduhp1o7A8Qmks2a5hp2t",
  "key25": "4FFp2VAHXX9moauebSLYCZ79rLEsMrt8cxJ1hhSbK3dZbqxsJyRs5SJdNe3gos95GBrnvJeDgKFEfjPztSifhYzh",
  "key26": "2qU1bsfaq5x7fhKyM3q2tsxDHEBgLE36FCp8Zd217C4J85dWW2Ge5XK8wG1dUhbzit9ETURbpXH5WAn9Q9x3W7e6",
  "key27": "4aaLAR8gQpBH9uuNTaegRu7yKXhYjt4gW6diX6jjfYsnH4t5NFECucs1iyvcwiv5ExT4EcB1j4vpqFMT4w9YeR12",
  "key28": "67cftvhqnC2atbrCQ1q44PUqHkLDxs4xcbiFhX7xjQzk65TTxmEUUvtk8LUAXrxgByoMJPNLi4gRkk2zXXt9BRaE",
  "key29": "4tzH5mtwctFK6GwFxr7ax17pEdUfe9LHroGpmksZXjGHxqfJvsysq4HWwd54bGAHD8fR4N9zioFGQBDYLnkssumY",
  "key30": "Q17KqYuEP9y2jUrvzkeZiuPmYRsc8oiXFZ4MtB2at2zBjU2482CtzFAAR5BiuSggACeQj2bDXhfggLmdBMZ72kk",
  "key31": "5nGXkzfnrKC99DxJvh1sCCrLsjxoHQMGntpZXJjMoFcaWNZ5fJSZTKYXo7cCq9tE2B6qwzBSXGcU73uuFrbEC5cK",
  "key32": "2pSxnPiCjtH7U95ddHaSL8YJqA4nh2e56MQpv494UKa8Kbsv9mS6VefgytwY4iFabfhHihufZPKDnpzwF2nzgLP7",
  "key33": "3KUPJeqyaQGNaDpvrWH7JpV6uGDaUbi78wvsAtCfnKgWN4GjMPXpQorZfGTrMivwrUKD2J1nhqhDnJJTFcpiRDfj",
  "key34": "3JTvWJ5J17TCSxHNTrEPLEccp9vikXt1nZFmkcdCNSRpqrrivNxz7B5Fs1Ku2MLifvX8KkepVnsCXEnrbGrXvfwT",
  "key35": "UNaqbGbmF7WUHAyVx4bVKsrSQxoz3N2ZcdSeBifg2TZ6ur7n5F7x8b2YEb93TJzpLMrbbagbHC6G8NsC6bqXEeH",
  "key36": "3SgfHHHqrZveJCkYzsJJNpp7U3jbnQk8quSB4ArYmdhgZjVwkEsr6b9JiAhFV6memSVEg67knu2botXxPzzRdXeU",
  "key37": "49QYKc7N8Gdsn3hhi3qZ1HHzizyXf9YG8Ujr3368CkERBNaTj6p41A9ywDybv8PpagWhKvbNqiJvgMuD9ztzZXJv",
  "key38": "NQqAGRsEVCt8ZveiXP4Mgh2GBLEyF1GNjSnkPzW5qm6VEBST2SA3e7S4xgXtjRK5MC93kNiQYE96aQvWSQG7nHx",
  "key39": "58ecwHSgxmw5RTRdDR4cqbRrUAFuFHtp7ejm6DNTsLVz4ADwebV9JpvAeUKJzGzFyrmTQ238ms3kFYTPRNRuhHd1",
  "key40": "63mXxmxgHt9BFwXR2vhD4YxcbQxooQMhuxAm2eF6RJeaDi1srEcrw55vUnWLPWvMdCcSbcSjofQPfVCbeP23fEcn",
  "key41": "2Xd736NaUxCcjj9TDsPsvuwyuj1hQhd1S5skUg7C7bVVjNujh3JYnWugMRhgro9258eByr835rdsMueEGjSzWiLx",
  "key42": "3N6MDci5MxFyAZCDHcCw8pRKaifaYAquDMvEqfsRcuirMXob1HJ7WsrmsfX7bhSYvtpn6sQHp33CThb4dbvvYyXr",
  "key43": "2vJKZ82u8GTz6cZjLGnoFbuXg9PyecRTzse7RbHmfwkAqXSkYhqS5WhroRLvDoGnba1TRaaGHyssCdbcuyzxn1nL",
  "key44": "2ZiguK4iJqjyGfqRrgYAbABnMDeg5z1ueU51sLBEGS633rhXx1DDhUfXJKiDTjM6i3L9dZ7C4jHfHQKHG3w7SEBZ",
  "key45": "5CfJy9xdWFEMmQdwiCcpPwhtPXEkdyJ1saFFjhWyewApTu2EzP7juRUxyfPbQkg8hQhsv3aEm6PrVEbfH5u3jLWH",
  "key46": "43eEWRw12GxRRMqQXEn37HVe3faPAXicoqpiDTKVPTAMn6Pyn9FDbGXyuouNFvETyhzqW6DMHdV8STed3sfWEMUX",
  "key47": "3xRG9SUKA2zJ6TP6V4YriE5jo45Hxj7Cbs4AHdXxGKs7h3LN9FEecPDq5as35WaAsDQPss5RdthLRphy2KWoAvjc",
  "key48": "4Zsrf9rpby6tZuMDdLprjoerDj6T3gVhNvpSAga4WtLLRnP8ijAqiyKB6itPqW3fN7FPuK1G8Z7VvkqmFb8d85it",
  "key49": "763HU1MQ3zNtpnq3pTvTJfhntvgcvU2DwY1bWMchjKSwjhaG9umofaAKhKyLUqq6kpbRLTbr6ENscbfT9dETmKB"
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
