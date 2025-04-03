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
    "5RczaY5Sqxu3m9UkQWkemnXumJgKzVGMz6pmkbiqNWPDkqzaqzvdm4rtcYpkj9EPbPtxeQtzhdpq8BNgwp1F37rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hBoFhVor9LcVCB3KCcDUW54rCtn3XA3zuJ5mwj1V7LVMqiTSxV4GJSkD7qtbjUD3ibEcNVMTvKxGDUEi3NhYpYg",
  "key1": "3fcdSReNGEUQWn6VRTsyJV2ja5c38UoGYLG7eS2LPMtqzkHm6xDgrM9w9Ybcs66DZtrjEc7WqGaP7kERekhkut5g",
  "key2": "GJHstGBBNpbUz8zpgZ1597pdbjyF1cH1U8XRomSPHgaA4VXagQR5MbNXdff39Ki1KNLirEp4c6Pq1TGvK8x3Rap",
  "key3": "24qBKu6QNUEzKRRvankBhDistiTnzTam9BRXwJSfURocFSyecvT9hQTzZ6Z18Z9N2tEuC6ecMbGsGKuTExRcXQYp",
  "key4": "KvKny5RoUJHhGrXfoA3Ffo352Q1BherfduU8haXKU7B26Xu3gjMivYFmnWvnV1DwH6Gthdaa9RxJneuM7R1S16P",
  "key5": "5fJ7NhFMCdMZd2yw6LhLuL5jZGEjJ4cNC74ggtS4jdTZFzrYz4vJbfmm3toRbRfC2eDAhfuZSNNprH3ufuCp5gwB",
  "key6": "63yNseMxyfv6Ph8MjapWuNkAgqywU1sHj57gZFi6YYAHQAAZ9U3FGMUSZkWY2ufpgVNkYwSSHHD4U4Qn27o4skkU",
  "key7": "4VZ6isxPyCiCmZVQGZD3fJMfNgAkvVHqib3djXWj41Fd9E6vzevHkGL8VeBAZyT2QTuBfRSgAAV5GtCfLBrJcVhG",
  "key8": "5SQDhZir2gU2oMRkaSxZAG4vvM5swP34Bg8BuhPp66VgjtJ8nUTHh3TPc8p3aVEKLXuX39PNHu2433Fv7xTtoag5",
  "key9": "57L1DszBAcWPMmBeSETdmVVYCiYDZvv1zmmK4a9JgBfoZC6RaAHuThTqcrydHrrjMn58PZtTMc7Bv8Zu29dXgR3j",
  "key10": "4BuYBvLq2jbPcYEztZsMmm1NRG7hRCsrAC8Ve4ha8vGaccjnzCodK1mCjmTcd1Kwq78jUpTTeyFpSzmjZAj3oRPd",
  "key11": "3Yp95VvrYhG5eT2B9oK1dt56tG6XPPm3xYgN1T5wFejP4r8g3U9XyFXKSo9Ap1XxmqSGr3zhLRUSGpNmsG8thA7S",
  "key12": "5UfEZtREurWtC4663MktJP5PY23PyFaekeafEYbaZ7VbQuj4jiKQUYYevKidWCjUK1TwMUjRSBwJsGm8XUokLYEf",
  "key13": "5GbDUQ2PLFnR212FJWeSDz1pYdz6U3VzoivJHa4aM9Bve9HypYHrr3Lvt4PUA4ATW6R3MiUgjjvxAP7U2wuV886a",
  "key14": "5pgjvjkQEspBH6tZawLiDP4pe8fR2NwiV9vbWjFLVt1aFZwv58bqUadYpGR1WqS1JexW3iu2x8tFn5v79vhu7LsG",
  "key15": "ZzLvi9QAdbE3gBVtC9myxD3EokPi1hR7veTVX1d1tpaKh2D5BP1E5x7R3Sr4zJKurvWUsfvFcNJgPLEwdZbtPm5",
  "key16": "2rnaxPJDMtY71R6dtRte7gJRsvHFu1n2GdyZG1D7Ca4z6VEHoQjYaVZ9MzS6QU2k3MNxqhEJJiHYw6dojPTyjL1R",
  "key17": "4HPGdPBi6CPzx48syPxtLcKiHhwCHHPUHfvhseUpaJaN5pbyURMqpFNPbJpTsqnw2oLkXz6R1Mg2DY1hMqLXX2Sz",
  "key18": "4U3yasGRYKLtXXr1ByjBMUw2jMwezD2rCHhJqUtQgUGUZ4WmMPmjQx4J7Cvj67tdJcL8RmNnWueUfxPDCEw7Avim",
  "key19": "5aaRmCwueqEweMXr3SDr822pJV6wT2Y7NXdydUzamWh3VwazJt9MKtxNLHdqtULF1Hoxjw2bFt5zt4kDUMjG6cwK",
  "key20": "4Lm5FbvNLnFp84Vh3gNLxJQXmEDr5ebUDy9V2iFw1vwXrLNu5KsPH2gBkDtYYhuKn1LyDtBkDFKg2QMLWSBM1mXx",
  "key21": "tsyGBwncMHmrFLvnAYwfWDdw7Jd3fp9opmrHCdviBPZt6K6LpfTjyRsPJfpjJLh3HtqH9MTa8e6ayfjBcuBQUDA",
  "key22": "5Fe6vFv5DT4wcyjCKoG9h8gSev2x3X6JQL7RasTJABeHmmGDBkSP61Ek4y5LhudaYYTm8iqKyNRcXB48HJHMcAVm",
  "key23": "4xiAFs7ho5yGZ6D5XZC4z88aigMwMKecKAA1DdQDZpzbncPBgNW6YkXkdvrweTXszCAHEV13d3LWy8bF7z3UoLqu",
  "key24": "Fwfv61rmo1kpgcjTeUHAvddrvxkujwoyhxGC4n9GTVNeqVfZynx54wALzAGTvX2ngm6Gr91rBPbbsxLuZ5r961x",
  "key25": "g5LAs9Zczy3U4g2szvQf428BkepDuAJk9gA8Tn4kXEBGEjjenQ28cdSinVBqBJdmXi3CStNVEhnso2dAM7iaQ87",
  "key26": "46hsG5F2vbVX84H4wrtQ3QpYdNr29swEb9VQsv2HCRpMKWCBNLfTzDNEXscNE7DDtYUDK2HZYqNiHmekDAKruiXS",
  "key27": "5GKWzaX5sSJomaZnxCM3a19BupvvhDCUKCrbLu1TFNvPV25EqyTcGsrEDTTZPhRxWUQ93X8YNPhL642vWKybpjk6",
  "key28": "5UTSDQRbass3qL2D2whna1QfBWdS253nfmmnj53Hi3JPzzamf7VANv851EqqpTZCnm196rLUZs4nBrj7QJ4j5tfz",
  "key29": "4cQgB2p3dFN2WBP9D3Ghup1uPrUFBRZfNWGNrYg7BpmQGXrR3Kt52EWKeAtWvEY2f9faEJMnfgyzdUA1XD6sLMqH",
  "key30": "i1f9vET1vMiNuaDeWXsrDLtcmoZYSmoN1q3BnX4xK8zALikpdKYtfRvUty4dyszdpF3sLugWUSdADwhdR5yGBQh",
  "key31": "53yD6uLWvPvZP1EMaGd6WhJsVwwS3HKhSPZgkEaez23Ns92MEJRpwQwKCikLUcAxAnSeqfbBzokNV8XAkohs6nxH",
  "key32": "4RXm3MFXxABj2f5Sv4qE53XjzRMKYBajdCLXPPzpDi1UbMRGebhHbFxR5G9Hg5Nms7u2MdiE25REfgfNnnmjee33",
  "key33": "pH6Tnii6CPR8kTiDsouR2whVfMZuMVJBE7JohBFT18oqgkxzSrfBJkh872d1ypjNjNaCTz9XTocftzLAoNjR3rr",
  "key34": "21cwcuWza1DqYkjZExz9Bi8n5xV6RL2wyTTT3hiXPqURi1iALmji1mYVMFskkn7VzwZQS7xXCZWtUtTz1zULdwSg",
  "key35": "Z6RsRhL54qcbZioziy1GPuzSCrCJuaRzEak22XsrQJoMhLfuh2hsMjRYM6hLG2XyckMiqFKNR4fQBmNBGm2ryJR"
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
