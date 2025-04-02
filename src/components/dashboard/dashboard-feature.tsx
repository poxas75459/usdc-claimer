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
    "5CPtG9U2GQscBAusabRtp3PFAF7iyoJYgyPLen9SYs9qUpvJUd4y1k9gaxQ4cTCNASKWefJtf54pToCmtzj5SAvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HrhKVQ6XUtpoWQX6RSwNWanMndPE3FWaruM8fRWXrdapxT2yZaXQkAg38Z3PXdThB87eGcgqv2ozcCEXY2oXXdX",
  "key1": "44Sth15RM2NZTPqnM6hjZGCeFo8HcZL51fxwzcwat9ECTGinTRX1YhkjaYYVqWrEUMdfVssZoQeMEwE7eMxB1rQv",
  "key2": "4dEpfW9yLzZNx7Y7T4fETozRAQ4xtj9tGgGwN7oMQSVSnnYyjtwZct6vXUnvd2Wa8XNhDoGR5uN4fcHBYai3XaZX",
  "key3": "4vp66pQrXdNCCZTcVGx7ior5771gpFtLmNodQN8mZN7QGNMe5czCaAqXzZmAc6y9mKSKnccqtkGzoAUwJ9edGFei",
  "key4": "5SC8a5AKgWsazDJLiYZKJMLUjMuosnZMw1h2HA5Na4jr1eHR4paK7CirroeBToTDGYX4t7syrhAATEFupWd4N8Fh",
  "key5": "5vetapWMnJehFMiRN41DNzzVTZ4cyPBVnpRipkMv2FGaWoV2LcYeNuvsUYdrPCfdvEM2MEEpWa8zBGsvjWchpBnx",
  "key6": "2aNYsnyJ3gWDefUdeva1aBy1TyTSpq1E9RihmNDfTanbY8ny7AUVtR1epdrx4DZP9fHE7dAtP5QXTqD32Swy6ry7",
  "key7": "2ARc7zmgp9yGaKftgXtCQbzG9Z7rBjX2D5xQVgH7Bdzm77p5iASJurbAf6Aiqx8J4Dz1QMgSuFYh7akEynb9kCHZ",
  "key8": "5wjVvzC6WoWrtpT1vToH24T9U2dpCj2cwiufiv4eY5AudyFNsjktSDR1c3oBiDb5U3Y5g4ZgmeezmG5VcoJrnbnu",
  "key9": "8cSXLTB9zcgFoj8grKUykS7LtWwv9WNffoG6JNqPRe6h3HFnzGqihf9XarMDzriqsJm8tCXfWRUyuMUVex9qR5D",
  "key10": "M4ouRjpFua8N1R1sazHjPQg2TCiUEE9S4RW96qbg5VrbuA5ftQyTSVapdzjsvpu5vbjdBi6nNp1ZXPCv39514Em",
  "key11": "3Mhzc668o4q3dLdeishyf49RuJTcv2JTL3ZcdthGeNvcatCMnyFNDk9Bue5NzDC3A9HNmttanQmjVQbN1zkgzY6k",
  "key12": "cMVr3wQD6AagUymcw1CbUJZgRMkAQoAEccdwibdjJQKD14v5TXrvTNfyw6qtzWwZWFPeXRjP8tWx8T1JWggyDa1",
  "key13": "5xFLjboFf8SqxsKPuWrXkVZXBVAoocboH2mwbmEn55c7joTAKQVsYhmcKcJStY7ar1TiW4F9UjY3vw2sEV63f3cb",
  "key14": "5tfMVYdiWWMiZ1iGinoMWoufScPmFpQVRaXtbMuuyBWmG7UHiUK8gxeywPnXynNBj8QyizxqFNC4prVUSB6u5Dz3",
  "key15": "4iyJ2vJKfGVxHux7nucLbkyWcG3XaVkPz975yXVotfPVdoBd4qxeasXjkFZGvZDGnbz4oSzxXJ4P6eQEFSu32V98",
  "key16": "2jcUU4NVJQ9QSMDJUSvAz6e7QJBYdWBJUfex8pgg2oJpR5z6DYpCLRSQ9dnkNkFPpJd1vNDpZDKZDE2VXiYk2Rg5",
  "key17": "39tHuaf7kgH4hTCezWh3DQh8SrMXXpNfybKsgN4ZuyXQci4VJS7fRDV9Ns28k2dqajZoikDg19HUWqqUK2SJ3PhD",
  "key18": "5Gp47LWPk4zQCRwkye3TcnnPFKLW1Vdz9Bs49oBfHJcFDrDNXHt4haKd4ARtQ33vSxC7b8uuQMr1mLpgZuDojjcF",
  "key19": "4e4hhChcqt3v9cEfNhwutKGy5UecXaFohegH95qQgcmPDsBgia4TeqMyQFpyeeLXpdoJu1mZVkTmh7YWLPHKeX3W",
  "key20": "61EVkCkFsepDnLZLr97tJVfwENKDqaEjWzPJWAoVJm25Tt2879gVtXfEghoB1Nmu8jCWp3HvDkTJNNw2rJKuKHFG",
  "key21": "4Wy9oM9jv5JLQ7o5jtMthpY7douH5e4RMTXXZDPGzSM2Fc7cLVFfHTeBiHVWRKjAVizvTejLUMbFhC3t7egG92cD",
  "key22": "4zdUsVJQkvXGFSTNSPV4HVVeQ2T7WQp5gzFgZAPB9rqUWWoB5tFjq8mPrLoBEYMaXB18KtBNpFmNvEgS1iuTVaQE",
  "key23": "49fLvZtSe126FZBapQSji32v4s396foWypUw5qEXWKfm6hfHqeC8nUkYpuMdF87Qt8TG7QJuaMTUp1ASZTtMM69n",
  "key24": "cqDndpqpXr2xahWFHyGA82knxiM6aK7ZGEXZUYiBqXmkwWXkeqi322TRKeSeE9jceAMWPoJ2EhWujkEdFEgHG75",
  "key25": "537yBeF2Y3FjCVPFC6wSFFWtLWs7E56gcwZdqZTwG52mEKVf66baJEvDWgXF86HY4mzhgNeh8fdXxLQCQ2NEwJjy",
  "key26": "123CW1LD9We26C4eeuK7NzdTYbqRoFzjvst3rdP3YoLMW9zimE6aqrRLUgEJrSgFegY43qCb66pRmTeFTMuE9q2D",
  "key27": "4MrsA7SHseFUyiHfqNFGNRDFp2xfvHvryDTJSL14ErVG9uPgJyA1y3HjCSUj8d8MVJvAnkTzbmYPvw3SSChSW85n",
  "key28": "2Av8sAE2aFt1KyDnPxbuHDHPeuBukdTzoz1bYhaYCrw9BQZzGg7timFkhYC2BUKzD9abCDuFzKr8EHhzPRR7wW2j",
  "key29": "2DWZvBvJxXX7tKti6JZDv8cjnZNvEVzF4UGKLt5ehonBkreNWzyoVRJsfiXSwNUtXtFLZSt5vhipiQsVhUZZUsH5",
  "key30": "61QxVWUQvWhcXQDngP7USmRAJMLK658ZLXhGN18Zc3q9EEz6968gUSQodumEvFhmYPnacotBHuFcKF3kmfJMNecM",
  "key31": "5oBaEPebRDbGK9WdTd9mGKs4LRhwz7o8dvMGNTgWBazegHqqc763jyR3RTm2SSRoUF11yrK72Fvh8gWJXvQLhaUJ",
  "key32": "3fDoWq2imVJMX7LcE3mp7P7Bx988TqRVM8sFci7dTtAwxiUYaGWdCVj7M3ceFf6bK8mvGpt8xidcfPuuoHPUcg3g",
  "key33": "2o7F14TQLe2Qhs43biSNjjbachWpDShoNBz6YHANNZFoqJsPQWZfW7KKfaywwPNbstrHByirwGQHyUzbJXQar5ED",
  "key34": "5XcZHNuGH9gnxm9vZ4o2rYFDqHeqjDxoXXi4WxNjx92pwkWMPNcvPqF6iLDEUvbbmKVBm6ACKdz5gKNT9bjEGu1Z",
  "key35": "21SVdtGC8jNirxFn7hsT153LtfwgGHmRZQNrNEXYZZcKXbZhfAsZ8wFaTbBDjp1qw1XwcmWxhXXJSShF3miV46PL",
  "key36": "nLhkD4Z8FvEFDodfGSb2mZj22Pq3MZM7DBNb8Cwyt9HEbU9JfpPjZYLS2hW5PpNne7DErBMdJqGkRjthpAQeiAZ",
  "key37": "4kYaSxGYkpP5v3sqzxS2vYh73BonTMsvowt1HHXjvMJLs7bWgbPEjQXVGYscTs4P5R6vaAm1PN8EKib5eCmfuBqT",
  "key38": "42a9fZQKR3gRayNGhurtJS673gUcKbq3JuzcTvypxp8NgKkLpt5SRfcuWsnCBoqqewj5qf1kGYuADaFHcH7Et1DQ",
  "key39": "63XrEWoeF9Tk27RzV2WiqXUXHsMSbM9HCUM3FjcRuF4H3oAhv8LN1vPYqNTGjgpycqpL1C1sD4oMJ1i34e7dio3F",
  "key40": "51yyLCHa88pp62wzQkJ2CSbfmAkzNxSvGW5u1TRLjrGGaazdQbN8JVqGAkAqYSwGqdSqpMBDqCwzB4Hph6umjvmw",
  "key41": "665q8eNNq58J6x1cN2jFXC1jSteRfGnTxR8n1MsQg1veZmNv8FPtTwTzBNYvUhcqCQAxY4tMhwinbxoLHN86tz2R",
  "key42": "2CXtYAxJx9qg2bgQcfCM6bJ8te2Q1iTtqqfZ3s4cWVbc6jvZrnWqN5HaWGYSsGzm5i5BW1LEsEG937KykwQwPegf",
  "key43": "5DJdq66M7H3tKuSqzhAqp5UgjTjk8QPgZkFkBwSa48oKfUZ5PhTmf74XDSSJRzTBVRfmudaMbSiVzNkZiGB1Yav2",
  "key44": "66NNNUAbmrLZ2KBFtia7rsAQN4UcAmH69N5pP2Pf8RvQynTEKYSexDnUvbcirqzn7NZoHSpmSUqHrrZ6PaSx9d6",
  "key45": "3vUNiCPa1vvHiUZANRXZ47gyQxkJrjSvYxu5bL647oSJJpKqQXuwxdoHjL1EfMyBRmKUPSGHifDCiySgEfdEbCBM"
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
