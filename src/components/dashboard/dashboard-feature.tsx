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
    "42sUe3VRukMfEraTivvAC3SZeFGUwMjmM2D7ZBGpVUHvprzoCnCpoQZ47thf1S6XuXELfC1V6iYBknpYTXZYTeCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VykKHfEr9m3nQFL3hsC2JxqkiPps4bWcvrx4d1FDQGrwosUAscefAEDjgvHwRw8bMvLryfHw4zEkW1rM1B7S4ny",
  "key1": "3SawPrBRKaT4SUdKRDo5cR6MCXgRwQAN5bqrEBcjtpQZPfYzQ1KWriU799hr9GVmXU8AUj8DV47cnphQPK9y18zk",
  "key2": "3mYdSmec2JkYEZCzWF76aD6Kmq9MpepPWANPe36r7naEftXWus4vK4by5eGLa5Yrq3NHMjsB1HdHmhQhdyana4LX",
  "key3": "4e86wnaNt63ABMEgT9MHcuoecq6XQSsqeR1satgdVvjtkm32WBYnJ3NJ7nmZq3V3bqY5dVdXe5TfQjfT8C2yxBW9",
  "key4": "5j6eHNDQ2pHguoj46xoZd1HEja6KMD5gNeQyTqef7wUpSTx8FQnyXTpwt1PcaRwyTDsjk9W3SgNKzH5XXwCVZryF",
  "key5": "2VBeHuaDwq9FVt46hkLuyXRt29kS2rDF6pbYupnCMB3LxfJyQLoous7mQQepyPxPP7bc7kfxiytWzFPiXbZVu1LD",
  "key6": "5Yd3Kyjr1yRbvXcEcN1BDWmmZtTyWbChnP2ET1qGb2wqNScqRpjoUAEv68zKq5Uw3PpJdq2QCbN3FGjPi2vs5Naw",
  "key7": "5wUs188ct1S9ahvaf4Xomp1cifC5UyJuUgM3SRByFhEaFsz8VsXqQCp3VDq9MsVfQw7rFhd56TjdpkMWm1sXokes",
  "key8": "2aarQkWBdFoPri1wVpDy9B9RchCxMYpW2EC5UwQ1YJfFDNqkcLQxDVQQJGajnhif2XrVgPmiNHSFV86D8fM4X3MU",
  "key9": "5ftcioLT1f97DpFEzRh8YVZmKb4KgyBa1TKrPuopoHgfcc1CjPn2SEFQqyKz52x6fZu1VfuSLawJYSAhxVntdqUa",
  "key10": "4saiadroiNCs23vG4ExhyBWxCN2bRFrGP2YyXRG8CJkMW5fnVNVCPVuyKG73ornThzgPAEvkW1D893uRnKYwWZGN",
  "key11": "ke5T5Ab443fZFcd1FJPNrjmNCxx6inmfgAbMj5pWi9X3AzG7BnrcDWpUNCg3ThcuBhGNBbJjP5dcAccmuy7RP98",
  "key12": "7tQTWasyNFmdrGTszjjde5eCwB3ck9LuZLZhGYyiWNxqzhf8MEAKxkwU8MMXZukcmZ87LHDYpiLPJiLm2ThgxM2",
  "key13": "5MJaxLr2cvCoUGaCSDRV4uYA1tDTGiLyoRKLdV3VfvowNAxqEhGmbxtNwvwVQVQswSntC3QBkgyjW97mKAB6yaLr",
  "key14": "4zTQGYVEcMkrVNLZyLY5vxkyZvCaCLmPcdHCZbfTREwQHJ5h8zD4V3jdk14tSkvWiPagYxkcsVaio5zLjDheAnrX",
  "key15": "2UdSAnnkgwU3wjQUwEakbDt7edLfc1Axu4uw6GKYyEehYcyzUUotRLeqTsBNySEMsqBv4Pza9YXLV4FpkxXruuKo",
  "key16": "3NfWx6NZc6x5xtBnedC8GeCkMjxEioL7MVJn6po6HsSqmTtPGAF8pigfR8kphdshWQdALF2JgHuHC2g7Pu2pTUtP",
  "key17": "5mRzZR49v86iVYFzvY82W2GXyPM1fSUtmGG5m6DHb7LVp7Sywam1THFCjduAyZQz2dVbs5LBcG1K6rsyc4musXJL",
  "key18": "2TrUkr2romzmGJLj4wRFbCyrZreut3CACjU2dAbJvbJiEsgsL9KSSkgu7D5P1Y7SyUp2kt9udAUCNd3yxNrzoeS9",
  "key19": "5mpNVgS9W9kwaYQxgVsPSwxffBkoGBM7DCwUDWo72VgbjHTrLnUrhHGcD8QPCHLY4TuUzTBKReizkB5k2FnhMZ4b",
  "key20": "475t3ywZiqnPwPWjYVRUHBWJuqH1hodxNKWDMtUUVaq8MQa8cej96srQtqzqSMCUgNBgRe5dEBmMXjsiEwb2ZFFH",
  "key21": "3B7yq7Ba5xQ8dfvzgw7VdxQaUhLhidvQkBeqnPwynRfRypDhkUDxFMx5pYSezJ8qsJ1GKA8mRWdykKTyqnc9GvdM",
  "key22": "3dA5t35Nky9tvNvSj5ZGqZm86atQZEdWxagr4CXcd1JYM4tmtJtS4AZdAGCinnVBxo7AwrUaRQEz6hv4wK1JqWJx",
  "key23": "43v7haBNXb3uR9k8uekBASy74zkwCFS2Y6WZ7aB9fJx84xUfU1zhgczcCrFaszfzjDfJjBDH9h9BKixqHYT7cNUu",
  "key24": "2HRBkdPMgJ262nXUdK1D4JBnJ5qfNeDrfzAdbhHqSM2TktitwpGSn1saX3wLpJtmUHt5PYMkL55jk1sAXw6A7ndt",
  "key25": "4y1zi7nsPgzQoJQ1igLZZXdCkZWvfx3eaTK6TMEQcesD9xXJ2z2xjf9BybH6ymdjyHZH1UiMqmGPJ7Ln9g5Y2Y9B"
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
