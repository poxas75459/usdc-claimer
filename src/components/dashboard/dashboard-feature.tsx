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
    "2M5LX1cTHAbxYyS98MidzycquJfbsF5VSm6V9sCLQZPB3hSczWYgMULU5qWEnntPf38MrxSsraVjgVcRCatMvqrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pySv4cLbueEfArC346DsoUChAxXc8ZeK4qJPb1UnLjxKU2Fw2dUMbC9fL4kPjMbsXywwJfJuBhbTDeb6r5gxsTe",
  "key1": "tGfeRCK6cEFGizMtZVdQuHHUxSjAdyjVZC1qb9iuDmQCpe2ugwQnbMypcJS1DrFcHmSLtg4AmEfFRnAFmQV5vRP",
  "key2": "2qWs6dHQHTu7nboDAzLBped8hD7reRSH4b4Qhq641DnWBeuyKTDiYgR2RDkUSo37s8By7Gx1mb4wjyMWfRgMQzUX",
  "key3": "3CJsGSb43NhvaFDxQHi1uwYiW2sDL6o3WXM7NzPFHarmLuAjD7JNYthys4NUjoPiY7ouj98U51cnt11rt4EwyVhn",
  "key4": "5zd6YP9VhuMWxdGwWmV7nTBZNYa9JkBMAdWnAUM2YUyiM693MYBnUDHM38h5KFd8nM4BFKgE3kBDpgMiH9nvPqaP",
  "key5": "5FFJNEb6sNs4fVfTqyApG7yWtuZ6wUeMMCaefhEqtdg23WGFy82dwSCgNAK4Y8BKTUa5PNGA8x5tdy1E1uPz5Nt4",
  "key6": "5XfZXnuqU3teqtVow5z8TYF6kM1SiwFZ2cNJ9J5U3bXfhmQBdyyfibVGc2E2nLtQBmyYtA6sy3sVsBPyLdBQ4bgk",
  "key7": "5gLqxB97bRbqn9EKxrf9tjxgbgk5gBFWmfM42cHZku8w3G6ndF5zycmQenvtgeBRcg6nPyNmykZWvezBmECPQduz",
  "key8": "2xVaD2KfryfHUBbvftGYZ9CY9QaJjcsgqkxTiSzmnKJMzmbDRQGVEsZfhhQx7BM4FuzgvkSGmrdE4h54Lzw7MZzR",
  "key9": "2oTavoWNc82PJEUXxx5R3GZ8xJmYBs9enSQQ4BdNZVXrSAsnXujTZh7QEes4Kne9PH29tHXnFdp5KVCfQaxTRhC2",
  "key10": "4DLDt6DaqJDgbEsMM8AvkpzqACkLqCo84nfegGmHn8epe9p5iFs5UM17CpfCu3Q7XCCfFd2PmCNcNgLmS5vBKyBf",
  "key11": "5gzLYKncJNsaui2JzFxBaRiruxjPK31Me22etXdrpKd1ZbE8jSQpMS5JamEyxhrx6cENPpZEeZeEXNQytFxZ1V4R",
  "key12": "DXzeZfg1QJbejWLEcFPqioER6j8LDvYJGxqT5m6SoHrKCX3tXDMAe5mwVDbmmqxkGhf5jNF4nHLEgqXg2sTMwtN",
  "key13": "2TCLfqLLpxnXSQgGctkKZToxGgRYc9RmQobhczSJUqn5kY2sjzys3PrmDyGzQGN6FBVELLZMK3T4kkHU2duFv4Nc",
  "key14": "55Gj94xaS9AS7SMiaD9EpfHL2UvUh1R7wfwsW297C1dJp7KiGM5bu94Y6kjWhjrKdviAdh7mzCBsDXeHCpBD2M9U",
  "key15": "4aGYPhGNRBkinT3Cj8RWtYtcXKkPhVyrBL8t7nsmVAw2wjpegJWg1KRyR99jeybt1uLfTfpW2DLgiNU1sJtt9may",
  "key16": "4u92uECuSXN1X6GcrEhjxuwUYYu5nV23ffZXzTwGDCnExZoMP1dM1wVeN9WaP9EUmbzTv2vkLBoj9aL2qhqqxagE",
  "key17": "3Qy3QLNKQTVHEtKiaeTNBKRZryepYjEzComCE9cyBDaYYpPPcbpPzM7XsaRvXQnVKyL6c5G2kTdaQb7zh3PFBY6m",
  "key18": "2NMjoonABiTgzASCFqVtPmGRCUugqwgeKhzsVLuM7pLTxMtpH5rkPhfhjKzSyYAHo6ZMGsn8KSd6YBNFfNXoPUQQ",
  "key19": "5pNwr3GoUcVqmrfq5cwpqe7VsvCrTdJtzbyBRJxFXgKp9pfJLzSm6pqShVbkdyussnt5Pj727k2J3h8jt8VFTTSt",
  "key20": "BC3nzQYAwuugRb8yp9vepK3gZ8wLhdAkfyyUWHZcSwXHcDf77wvYNvRu8qmLTsCQ4GjpZx2bhHwC5wVeFj57AgU",
  "key21": "33gdN569JCZ3viZcSSGYUvQ6nJiRawuoN5qKRrSuB7Dj4nwyxrdU7AR9cQXhZ19YeQ4C2g3xNGq4qNKzH29z9U3X",
  "key22": "3mMHFBgsjA6k3dPDo21MiLwVwCUTKr9StGzcjYD1Ug9fDA8jRzAuDt6FwiaNCaqhkwkLzNSqS6e8szUYDCrCc6rb",
  "key23": "2XgMq3Qa4YhrjyeDs3N23MWr5k8wbHhqkkf4DZrPNCzPPdSp7P6XZ3Jsh6hangiLtmMqng6iQ3A4DBkXPtUMqHYs",
  "key24": "4dg5zfz91icjoVs6Ufj2YKsKZZQhgJq1nPqFGqYrBBoNr9ocfe7sLqz4VFhgV3USTohXpdV9R1zKVoBaqRESMVfD",
  "key25": "HmqtdGcZgeMidmc25kfhzhgaeEnhNbaoPoePTyPDwfF6SqCTVQnktv3j5i5NqFuhi43tXbPzSQbqQoR4KFphSEq",
  "key26": "4pmW73aTFydXnDWeictVvyNQqtwCBQKPhRVsuci78retmR3u2zsrNurQcS7SkeegyVHyQmaUbNC4ZWpyxkpVXqY3",
  "key27": "5M125sUgVtRGRkFa1teCCAnVtURCKcnEq4Dwaymr2V2CJLuWUtuTXm8Lek2smWAMb6JPZPeiktZgpL5ufNBNTzVb",
  "key28": "5HVSMsZo3dAfGQPG8CuFSb6Z9NBLXyqjpYK8Pj8LbLQtVNNb7BYo1qGCoDPUqs8N5pUpq9K2VrrBUwQuiyYVDCZ8",
  "key29": "7XkyJxsfPhyucQHgFdeGW87r6pMefcsdXLEtwZvqYumguUPShX1fviJ1NWR3M1bek4eHkhPwtq3DZJRXoVdcjMf",
  "key30": "5W1dTe2WShwn9Rt6cHka8Max352jbu9rj8Ht2gbpbp9kVAL1ohhmnzF6LrVscnRNMEJo8P84rhArbr9nYx5xGfsF",
  "key31": "2xn2FF1LZfvfvjxYPaxvK5tesymcMwmVWRY4xJrgWSN9YEYsE2eNLsqGynZFeGhXNM4jocEVssqxZQFy9whiUdvh",
  "key32": "4QeX1g6pCytw9P2WHEeUXJSMryxmQwfNBbXUNa5KnpH5fo1gk2bwVyETWdzScziZF3VNfCMdd6EtdJXR8UVuEicj",
  "key33": "4RW8RsiV4cqPTWJzv1XLKrLJ1eo11apVVk2sJmQ4NTrzuEg2UcctasWEpUSkBozqw1wpFfK8iisVCVk1uMGvNw4J"
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
