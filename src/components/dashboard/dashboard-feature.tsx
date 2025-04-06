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
    "5JFfyHhERVu2AnbE1PSUZcyPaXvE3npUdA9funwegG5wFydHxvQici7cbhPoKpVpE12RW1xJbe1zfmaVerdHt5SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2izqNKRu47dVAP5GSYZfzr2Lq1Kfj8V1URST43ebSjMH1pvQrNxsDFae8Zv2EYt4aRUqKVEa7JaenvsfYy5ch2DS",
  "key1": "PdXthcnA4amf9asswkWiryqpFTcdpCrwhHaUKzpqMdPHaPMbzfhSKa9ncga3RSM4QYhg6Ez566WJ2njhBdGEv9x",
  "key2": "3E3RfyyqCwqyYk6MLFLjSuMLhS63C3qypj9fbxPNkMDJJxWS8cJEsiLQPToJW5GrzzbLVCuWyNnCeudxcBfxWyuS",
  "key3": "4TDwpEL9Zo6h75HoYM3EfnvbZfsa8draTCNASYAifk96aGrKpmNzuDfAqh7UfrGSKF9wUEcMDcXHoNrg6QnkQGNu",
  "key4": "3p1ZqHBToYrnNA3Bfcysd5TDJPACrspHbSFZZMJnoRme9H4pyNSLVNQveRHRKuMpqCGrvpXSNibRGCfPo8hCJHwk",
  "key5": "3ByWvthCGaKWFL5TfECa3CjgSySng5mMF98SwJ7mYCTnPU5pWkxQiyrbnZHKCDnfy3JRpu2G39a26oJKWwShFWrQ",
  "key6": "2FcvLkAYFjfzEjH8JctDKqqciURGvA8ppQnECMYs7FFVJeyztCXhz4i6B12fe8vynJUxUV7wcFP4r7wq5vwsUKGB",
  "key7": "33p2v1vwBSnU1XNHG2KaniEkAwpfEG3vMMQkC7cgy1mDXQSE92TnjrSxePaUJpr9wGeCEJHV4b16XXAYw4FTgbQa",
  "key8": "3ZkP6fjUStY7QwdSSyYmx2Az14zsHJYUjv1NFYVdj7P5M9vp3jSTMBCzC9bLoHrHT7nb9HnRFWEgpJYN656B6jdr",
  "key9": "2htffcDNsDyyQEPgGbjnyjgQfpSh9naPKLt2cXpcuGJRLoUyZnAaULUTCiPH8gcsEz4hvSfJ88mM7dttWVJf2CVP",
  "key10": "JM5rV4b92cXux7vLazQBT9k6hzKdUA6ErTNVmDqtDqYUJgR49N7j2hv7LZFpMWasndsh38m2nC3Ey5X3KrT8sih",
  "key11": "2ivUzLXpGbMrGhWm51dqJXEUndLSmuLES6ejoFYR1xmbr5pQUvMkYAHnTTqYZHqFvTPeZ3DDii5yb3DgA1tW2src",
  "key12": "5QXWZwMdjg5rcPrJ5h2mYc9XdoVJvSmWaTPascb96MFjX3HDHyq8JCZJSeTZ3LPFcTARuizMSzDPaYgwGx8FoYwE",
  "key13": "Moi2LG8Zy1s4PYhcBRGuM6FxZ9yvhD9KwVboAVZ5q3BBNgiKB6gUXnZxRHc6epPfbpNJces76M2hJQ7SHeQD923",
  "key14": "3ia1VLyysorjMLzZmZSKTgpweNwYVpYr7euAeDQmFCMMrxHsxNTDEVHF4ixsSVYrtyYVAvpTGeZAN8mLSF3y4BTB",
  "key15": "25TcPUNKTcTRbnCumj6mKvp3QZkaDbC9bhV7j5bfmvKeRJu7VCtr9UGbYh2nCackKSeSQd1oYcKDmHbWtiGxJMqN",
  "key16": "XFVUZNXR8rHmmpuzdo6rhYLXANwtLTG1WwtnEj9sMSXo5SSEPiLZzspk1MgTF5iaeJQtiAgT4yMSXyKCikSH4Y2",
  "key17": "5B7S9afytYKQ6X1GcLPneQtPzbbRRUFbGfNAto6z4m18qVTEebBWY5gcC2RCZxg32M9sZSWHyCSgoyYS6J5RAf7G",
  "key18": "4dRu3ohkNYRn7XXp6wEcJnJxfDFmFF5nUjnwmXcAHE9SXVwoVBBT4QckLhKyp42dMv9Kt8Hex6dzJGi9Q2FjEG9d",
  "key19": "5VZ1w9qDg1n9t8yvSoqEwyFnEUZPELkAQD7Eqkz3RFmos5DXwRamJ5wBykZrm27M1oXSw5HfDyc9is9be7kdhJR6",
  "key20": "5kMMZbPFUKLxQ23SRBCSk3D9YJP3TqhhPknst6ghrw2TNKdDpmw626SFbCH29aSrR6geC6LU1Hz3Z82YidojP4VW",
  "key21": "3YnNpyQ4A5DWVLKDzxkYwqgWJjHTaxoeNXxHZGbYq2NAZRCmp1tw7KU522RhjyrDprh1bm2FwVwWxdLJ4qf1A5qT",
  "key22": "54PBsD7tVkxw9czjJA2Fg9eyRoSAKPnXA6KMPpGDHfQyn8NZTcaQrcJeFZXqLq6H6JuxPuHGiuYsgH9mLSMSdnH2",
  "key23": "4i33qcSrg1UKSasXenFQ59CaM8owsSwL2Sqme4Td48ks4P1pYW4KzKfrD7fUjCtxr6orMSxCM4fFkZXPrHT4TdCd",
  "key24": "2njLixVbwTwWgReHrk3sdTK4AT38Ynw5WQ7T2F6dfM7WXdHN21cYFkJ1Sf5g3B57nAyS8m6bvgkwetRAPPiGZSmt",
  "key25": "2bKiStpQdPpaSRC2w4aXwedmzoJcw7jRydTvrFTbXf9HULCNR13EKKWd1b7nwGC9g8QoaoewHeDwip3yuGc54QuV",
  "key26": "TBa8Sc2bAWYphmyZwxVNiesB6eJeMfwrstMH27sLBnN7QbTmLVZYbogt5oZV46ha6hZe7ZxacvKGYQHXywacjrX",
  "key27": "2PxEAqi9mUb98Gjpy5eGd4mM2eiPXzpMciyhVm5G8zf7VdWJdamTw7cxy9CxUfRjXXSyQz1dnvfxJnV5Rg47Lcq2",
  "key28": "2QUbSTqhDMVpia9bFQWjgX16wQTuo8F8WWXf8ykk5uaQkTe43eGjpxudwJrg8BVBzFmeqQoMzHjnsfUzhKrpCTPL",
  "key29": "5uGUmTZ7AFCPcueg3SrVa7jogv57TxQL2QdgBR5qp5RUTdHgvQbQwrH9FbfJGaYF2GaP14JqZT5aUK6muqXCy8gg",
  "key30": "3H8u8BkAsP8vU2aWTcbBMRfsdoSYJJvZjFaEpERF8LgaRTwMcmRkpmThpZJPzauuwcBb5j4rrtWrM9WHEBC1wpWN",
  "key31": "3yF4YNkkHR14AQ7mUSssTPkEKL18iV4Gk3bL2de6yuQ5c7gMvoSd46SfbtEmQ6QQPiXyQEU7c4oaevT8kHJwFZrY",
  "key32": "5YyPeGBRZwaMhrC8Tya8YDpvQknYwiaibj1UZ2t4aQ3c67RiD6Sk5sbLZpPuvQAHQajSvGyKYvVsNoBHx1h8jsTD",
  "key33": "5STAHDP3bs92Y8Jc5BBLHDaXrAWPQ8uqVRqSsZ4uMAZuCTDSiwBDMLCdfvSWeVJfXwWVqVbRPSiYhrNkNy8XtvhH",
  "key34": "SvQ8B5wCw2mQjKUkwgHXyDN3rfyFcMr3FVtNLXyL8xY5tkqMEy5kNfNXiDjPwqCppEdUEys2f8TY8fYEy6rWWnm",
  "key35": "4kYE3XiS54pdY36gK6QNuEATxYGPD2B2P56rhRXmNmHipvq6612KMKjwbCcAVF8EaG4MTHLTXydYBXnY3wDkL1Eu",
  "key36": "5mbxERR7ftvrmQy7T7iLX4EQ7uxFu23pFjvdBWNCy96YGfHqohf3GNhq2vW2WtzjqGycvK5zPk6GeuQ1wnZtdsA",
  "key37": "2S6dHBcZpb7Wqr6xZxFGbCqznqYg84K3Xx1oV9DNMDhAv1rQN4dRrs45i16X8btWbyzAZVMLtMGjCe5KJHhKTDsA",
  "key38": "5noVbfaozYkjHa2fd6pXkSAgDV49B2VmsT8nbqZ34H8LKFeFy9ae7DX8FmM4ecmoeCX6PjbPcCTutnYGNjta9FV6",
  "key39": "3Rb2H39UmJzzJndrR7jVX5gvLBUnuiR3NU52kSWTM2FcfEeLzfevrnkqVm22fTwBpdf3eFAtSRneUcUSVNM3vuYN"
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
