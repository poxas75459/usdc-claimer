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
    "DSBFJMfXWdBnxtr9p1v7ob2CZTEtaQzkJWdM63zZZNQRcmC5DirW6PGEVYJwBQc3ZmvctgGPfDUZeQQm5hqSoET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "229JUPQrC3HvioPPniZJhQJdCwg9VpTiCWPgdUkSEhxCqhDJGoUyTRg998HL3uQKJ2JN1p9sZEPuwJAjQ4hTRGtf",
  "key1": "58PsejHfJjcp2d4wrzrAwAVQsyxRtAqoncEmBWVNSXrVvTbJiCrjmvNS7PHx3f4nFsBnocYQHeXyg79ajpJkLUFn",
  "key2": "65EQ39f6h6JogqbChuWz4PE8Avu8wjm4q9atogYbffw73MtUf7YYD6Z3RQ1ZS2NXHEB3iAAPE7SvC1aZxhCXLG5P",
  "key3": "31U4DsveXMmmceYQKU1qzPef1H9MGALakdj3zm6cEq72v3gNJMwt8buMgxM9XM7JNpAgtVqFH1FBj5faB4Ys6cNH",
  "key4": "538jY3DfgCyHjsCQhGMsczCA4JCbPLmwCCT8u6v8F882oH8x3nAG7kywiphdcZjapoxrurYGLntBfFQkwGSyc7TH",
  "key5": "31VrXugNmB56os99xdwsMjiy1GV48vCXmc9B27FDgbnvXWa243CaDMcbgobtasydViUzHR3485RbwB9yDuCN1qQv",
  "key6": "2xFaiT7EwCmp7rAmDsamZaAqPpa6pW3hBMGjLBjdsELoHkBJJMB7JKwJfvQj3ZfGDpv8Ycno22vCc3T8esAB5KiE",
  "key7": "2yt6bLE489rw3pvBa6UGPsXZ2UCipNNrS1R11WA99Dm8pBtATixLQd3eJ87We7g7UmnXskkwqfmeuzFLovx4ZCev",
  "key8": "3rhnv56ajvt5J1wtA6KmEBKcEPoZADRTLWwydE81AwrUN5xfSRorGbdEUS4b6dyotU3WrCsg4KWcbhgs1PSDPHsf",
  "key9": "5bRBg2Eb6HbhJbCABbuiqq7nkTN8s2rcsqwtHXwbDM33G6ba25J2uFLyC4a4yKyD614n3p6G2SgbUp1HWqmqQm1w",
  "key10": "3wQKD91cnrpEbs6xx7Yb9VZRsEXZzzQTQG4N2VuFQUCUxisBn8B3nAazCafrwD9URhK7K9YeDsLXNrWbg7weoFYX",
  "key11": "4JS34Ty65KujWBqhtHeZrktVpiW3Mn36wG1DUEfyuaUNESCu28CRqrXDytCayW99uxzHLUwGvcesqeMv8ipKVFJQ",
  "key12": "4uNyRoNS19jXtsJdwYEAisVXhbQruoUEAY9NB5pkaKMYcRe3sjo6LZPN7QRecrXem9Uxjkk7F4smZVvhs6Ygsn4Y",
  "key13": "4y4PHFjccrjZrm3SJSCcr5JZNabwT88kMx8PYnP8R4bnzJyPt4RKxndssBPQehPUHoeW6pLyDzvAJvVhw3BpDHyF",
  "key14": "2ubxyF4hqzBxrC4mH9dM2BSVsctB5e5dQGsvTgg2uFgbPYzp1fmv8SYZuhyWXWUa3W7uq4XMZhZNNNeht64eYLLQ",
  "key15": "4TDxuKYfM3bNTLmxh6GuEfx3QuTC9wqWt1PxEzxEq2H4GunJWnCRxM9B5UaKCgoPLZHtGwhGjF9aTVMjdvVfYoMt",
  "key16": "5Pfst7pjwmeNbz4ABHm3LVjEMWiE16b86EVi8QfzXEsJyvp7rf6dCmcEEePGkL2wRgaFcC7U3dqAWfS1k1XFEuA3",
  "key17": "4GU6roLEpf3phHcuyKMeavqyypVZkGcEHLUtVa5rpHN1ACkoxo6MagV6V4CZHbibSUQChSUyohxpfGG2nyvfLL4n",
  "key18": "TwYHiqNGoVJhh2qDsi9dpUVz8pHiCotZFeKVLgcPmB2SsVeKmjPnfDaS48iqqmigwnct3QWWLipi72aSEMws4Uf",
  "key19": "MgcSGDAdG4wzpSmGRVgqYZfsrbJUoQdBs3HvWAicMjuiz2QFRWmgos4SYNK8MDNZi35V6xSZYmEMKVhLSHEyobh",
  "key20": "4EJxDPP2HxSoVZD1s4pKNsxDUZ1KsKoZBB2hNnZckbkRTXnCsGZixjnrW7ZwiMZcH3fyiV4agYwkheXjygS1PRQq",
  "key21": "34CfBwf2GMkrjoWdaizmXjuAG5MuKW91kYnhR8ip7ukNArS3MfokqSqWkhntmAGyakALFTiTSy5taY4C185sCqaq",
  "key22": "4DFKetsHgvvWZRTDYonLKUSiSw5S225zW7pYoMjokFs6e92uWyk7XMcaZCwXVQpwJTRoQTjPirTHKKZbM516w91R",
  "key23": "23ZKFjZTFfrZeHQdCzwzD7WGLpg4BsGeYFkRBbYLkRLrDbypCoWJvqZN47iKFS3shs8U3qvGjcLDbd1xEA7TVYL4",
  "key24": "67EaLREio1sr4tCDc2kiXC5kcRhC35MbZ2T64sn2dTP7iMZgFoZymw33J34ZdEzXehW5uYYt5tNzj2bieoXu9aBW",
  "key25": "26TRTCZVFpFvN256XAMB5e2uG7ufY2fZUtMf9kngrp4k6azfB6ygVzsXi9cGEhGKT1KVJXNxHNdw6oTqcuaRMcbF",
  "key26": "2B8kw3M5Wn9QVEKcvoHfB7ZjGLuns2Xf6QMAa2tqTu7tQrNtf2oeX9AhMgWWyEsXiGNXb8kXkpDQixkT3SBCDGU1",
  "key27": "556Y567sNEXh2z7qR6oUhV41A3h4w5aLDVFGqpWafW7YHNvFuknchbJDnLS5geJYkXMCVwFgh5tj63THJpmS6j2B"
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
