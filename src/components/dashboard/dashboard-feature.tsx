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
    "5iV5ttwoF7jfyuycarxB8r9vaH7uiJfCkvddHcANJQ6aC5hGmgiMpf3MB9ht3QQyp2pS4p62KqZQqf5zSrowmmX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeFXtENDsyZSj8QvCWuvo5qH3wzLNrp13CaZLoByRz9cPoTu3qEyJBVVbjcR2yqintux9SGy2msDBjZxzg3CBVp",
  "key1": "2kHiYawymNrLxHbpyebcth62r8nZxDwPwVgozYGpcovH4v5WuxUqNvNVZKbZaGgRxrazUvWe9wqqtZqcgcPvLxaq",
  "key2": "AwZWSJWVBigEBekSPcCpxZhyesekf3EdSw752bAu3Htm3KSbk4bmJWuZAzwcbZVwWVh1naWDvf2runYCN181x96",
  "key3": "4D86KQ9YaCE4Yj1PkVaae1wx8JEnU1Gakk9eysZXzSCUFiS4ZDBzbAypWnBF3oE4eGn5pEyAZmwFPFR16Kz98Q6v",
  "key4": "2D7wKRGcTHMo8M83jZu2mJyUQbcmo2uxEarr6YaHYqavJxNsSnFaaLreua5aENiaCrYUB5MXQ74e9xageM5fwHFX",
  "key5": "4xUn27MvCEodaARfvXNfDZr8FR6uTUjs9LSRZRHoW1iwwvPEHkaHVVGDPgYNRFZpUzrLLcTm3hWFKKroZnkcC9kE",
  "key6": "uYB5PPuiogUXkpVAnDo8fW6vuRYGYeCy5KSF6MtmZUjcBTotCj8ZDQMZThTwGcMvo9FP3hvo58V98XRzGk9e8Dt",
  "key7": "siQvfgLGvEDkh2AdHwGEW5hbamjtTy2eD9n2FXGytKt8jqAJr3ASmsERRYxMF9gZdAvUrqYG19VYtkT6vFRLAz2",
  "key8": "5qkM2J1YLXAmvKmYViSYUQZntvNVMyLJnwTztpwRzEKQiNowVnhbBb5t4xMNDXWhv9Kc6WqstucTRP8Fge3nzUhB",
  "key9": "5sumbHGDicHEW4sBZUnPtkCv3HUBLpufUoukrqbidR6ghzygVhiS5vKP4Lz9KzbYPjKvrxq67jTGDRQpQHD9wusv",
  "key10": "4raux9e7FBHSjAy9suMiJgFt6wMfgczj3Fb4raCnD9x3qsi41HFmccPhsn5avdJNr1niYwPcSJtjGhxDnd3ioKDo",
  "key11": "2oqkbgyem2cs5A5HosuzipKRmeqkVCJ9tud8rupgVUL6bmr2hBKCYcpByppvxKY8UjXyRFJ2KWXz8HTBesZYRuZh",
  "key12": "2V23uFxDsbRVP3tNHtZz4oCFhpsckPrJdJdkksBbw7typKfwu9RVEGsByuqDhvugadPRREkjUo2yNifjXjA5HhfN",
  "key13": "4gMuPMpmeW9QvzgV6qRWJdTWmtY2esq3yeRiU1Af3nR3Ef73gTYQvX9WRsjNgZEE9aGrVZm2GPQfZdDZZdR3bpQ3",
  "key14": "57jWqGrrcFYXxhToXqaerP1b4TYZ8D2bKRxiXYNFeUd6NGgbyYjLFoPUcraoc3HARaWYjjWG6bgZoUWVVhokmw36",
  "key15": "Jf4XhtKrqaApbwe7QbBPe3KSNUKgHCE6N1MJhat1kocyoHDB2GxMAPfbY8YTrRiKVCCpKfVWutouWcYNmXEigLC",
  "key16": "4Nq9njvL59F9PQVeyiB548vHwLUPCEvuzCvM2uUo1tM9EBGyKJWfi2U1RPnT7zCAG6dp3vhQkJaLKM7GirmXRGnD",
  "key17": "3ujgC912uGxR1ZssJFDW456Whs9ZKU9oXGVHpMZGoaWgAfKCUXD19AXiCqjh4B814Sc11zmQmGykbWDvhU1P5q6G",
  "key18": "3qgUpHVLHd94KMBKNozwc4giuutoUJ36sKu7hf3TtZCpjzBsVZZALVSzR9rKwdBoMvBV4SsLokXMGCCJCPkBjTNa",
  "key19": "dVvk2q6tPyQ1KkC7gKqkhc27VooBBFX9X8hK1KhpzyjgGMs2ac74BK4AEpxYBDGGZtUpkoEtmEvkz9gobiuWxwZ",
  "key20": "3NqL85g3BhwhBT7DskcJup4ZezQ6cuTwBftU44fNwYnvFpXHCVQHyxTYSJr6jPTkTrF54qFj2qfQAiiFVxSZ9RA9",
  "key21": "4DofXfWqRCZMPFqjMURpVrcQzvMkpd3YSp5h8E8jNLi4WQxZFQdvWsVSWRshWXPhcrqUrLrg2eEuXf9BiurrTuL6",
  "key22": "5HSEaE8wTKtcg8eJVAxED6Py995H2Ha9tN45PLkBqUZfEsvQAu2gB6JtvD4XeQubdBSTZYjiSjo5XUrdnUkz41L2",
  "key23": "126PH3xZBN7FQrVAZ4q2mST7tDAJ2N3pPVJWxN14eR3DjxKCyHvVurZo7WaQTauLSFXdFeiRfCXdk7h8LTU3K28o",
  "key24": "4CWsHxjx5y6C5bx4jH1My5vDebzEnR9UsSCrSVERQ5cM8AZRy9XS6DS21KWSDPmWQtRxXMEFK6N2UAzTF6ecF8kc",
  "key25": "2jvEHZyMJyksqQ5ovQxVmGS3mrayp15NhHw7uUvNoY8tgHVMzG83TDb4RdeaZf5stinepeX5p6Nj3YyfKL6TVcQW",
  "key26": "4SyFRxsQA2hkuXNhxtHteQSWrEDFZBuSx1oAzKf58hX4j2dWsBNXy5ELNsSkkVTbFvt8WrKtNJyr5szynTFPG7zK",
  "key27": "4xzEi5f9ecpSLHyymannhrJRSXceN7EV1Rv625aY1DHmz75L6y6u4BJyVjgY6mmfwg5y5zfb3oozYoPXo2XSSLuQ",
  "key28": "3xNVmZHst2i4TquzZyc1dVrJHcuJ1ZreSn33H5TmfijDwsecaFfos8c3GB7PwEe7Ep3iXeYKZUq5faEupzRWECng",
  "key29": "4WDAV5bSAZkYqA6EMAjbWwWbNe9DCC7gfgzfXLL5gW3s4B2QcVVoV6eZVdLs7E6zhGN2DbNwBb9NSCaCsFwvnR8e",
  "key30": "5YjZEEFTHdALWuVTsDsuxfBCAGfHUmgjWMgdi9Zaz8fLFZY3vpDesy35JtEXeTH2wSwt3tont7m3tSXq7himeJph"
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
