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
    "3atQtcsVGgSRyyCJdWwozgmDmu8LHjMjGpx4wY5bnAoUQ984AQeYQdTj26UPT6arZJyzuFVrzUKb2o4iQbHvegBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gs7KoGpNB9mUdTkrUeK6SpQeGnRq9HGhpnnDrDbmwbusXTR1Tv2SFZRAgHRHZzLtb99LYn97dfCtUfCz3oazmNt",
  "key1": "3Vi68DsZJRPSXha3czPRfQWJQe5AFbgowsEGsa84yF2furzF8Hgvo1jrU9QoiPd7DYTdMksZyxicTMoij7omifMs",
  "key2": "426hHDX1zCBfAmuR4fgDEfF9RaiVBf2cJe9URsk8g2mhcotLFgvwHUzi78KzMmxmiTATCMRzTwVpbfV4fSW6nh9u",
  "key3": "51kjEhvyJGAASiyh8JrBxAgocR6n495CQB91VjmQ2RouzG1khhNE8kH1veab3x5Lwn4YRWL2JMrRPVUoWCbYRrVo",
  "key4": "2naqWHAffDQo5XG72zVmgwghYYwyTNhU4CaMg5iy1oCnyEbNjuhuWxkTYqXUB6Y4B7uWWckror6QgfW1mYq58e5v",
  "key5": "5m8cnqNsRn8J26D92Xj1dLkeZUKGfTfa4S8dQtZCZvypzKeEj54tstHNhQFBHTXUr4ChP9sdikb1QeXGipi1TDWb",
  "key6": "htGkCkUC9NKvLqojRr2ciWXJtErcB6JV1uoWhvCSDmtTSDgPGeFANnqv1dz17RiQ82AqS76LSe64btcAJ9JKUpk",
  "key7": "5z6DWyVR1q2aiSVvVwXJuYDYNePguDFV5qVcESYTxCQ5Wnv4pUuay52PM4rzeT6RNqUXJNa7c3XwwJmj7mFuvoVi",
  "key8": "AFP9iMug2Sh1DJxkehxGkPfN85hJ45SxJM6NxsDyJaMd3YHXsakjdj3fefZcTgesvrCma5btTTZc6ySahwygA9Z",
  "key9": "PLvWp1ExFwcSmiZVDdeKSWxKbsSPBefjVhH2FLmcKHAHsPJKv2KVNNqfn2zG3zhWG4D1xhmWW8s2ViZ9V5Fdf7u",
  "key10": "5xYacEChY6aEbZdm9PDEE2pSgWNGizVF4uKnpMsPV1pdwoBF23F852r6z29VmA4rRzvKiJRa32q9amzftaqSkNxi",
  "key11": "4oBpV79TsqfJuxFipE7VMfx8sZrRSiBRZd2vt4xHg3s6QbLSdd73fC4pFrPMwLFYH9RFQeeugCYP6ANsHTF3wgrp",
  "key12": "2FTq4hmXmCqPF3d6YRRijESt77RbRK7jh1hQ5YC2HoGXiHSJAPYuFw2kBTXifvVt8HT1CVMmDv4RYxsXCiXeDyTG",
  "key13": "2dvr8Knij5Z4rfQnHteL4kXPLRVudhot4STkFsq55sXyL9S3wDCwV3QfTsRoEN44XGkz1YannUmGjw6BteGnBRCX",
  "key14": "3HQxLQUY13bcKR6eT4Z2jqTNHHq9wUfYwdpJTyzsZtFAekPg38ZPjoPBPjDUdrs36c5QL1njgRWbCh64VGnebz7w",
  "key15": "45BjRxegXNkppb3khnuYzL2o17G7iiR7e7sk2yzPRMrFcC1yia3FnT8NCt5nqArrwccKFytM1doCbj6YFLxbFyBX",
  "key16": "oBMCjFKjiz7qzTssBjStWEMzHfrSd7kEcXXbwQ9EWfxgVbRRPLcVqTurBDvqwQQQtjLKLdDuRtwRsn8uHjerSqb",
  "key17": "4SnFzy6LyRpXyEYNRX4s2zBgdkCbGW4gE62zkzk94JJEhMVNPFF9UW66dUTcLPDLwZSNgE6b8XoNBvrWNx7mzBp8",
  "key18": "3HYh8Qtf1GzmP33UcymrMCW12q9yyrdyRfpWv5mrvfpC2Fzazn2pGwyTr6HwSSj7hzNKgrBo3u7Epk1EvDs8okrh",
  "key19": "623RM831hehT55naCMHMqALQWppn9gsTiAxm42kPYPGkyHqq7eR8vxghaLxNHrBWzNMiK6Nwu18UwF2cMtxSjBVL",
  "key20": "5wbZPAia7JXswypGWQgKF9ph2mZYWKDZmj8skFiUELS6Vioo93NBNTddao6zg6iEys7ftqLwGKFki3eCLZrDneEK",
  "key21": "2e7Hhdb1Bxk7x3jfDRDQS8izcGKQe1a1Uu6CfbG2SyWpNjTrxYGrMH4yYaHUCxvJ8xcyZ7Z6nMjxAVZ6jW1noAWJ",
  "key22": "2cc6b2CGK53ifTCjatsbD5pys6JNAEWgftq87Pxfr63E9wdEVbQEtCqnwxpz3bnbbTaBgWWijiiPccRGDZ7tfyAb",
  "key23": "4o7KAJ3fZrXzUG2Za8gkxbgc1SfvFFehfGr4ityU2Dr4iKkgYgrwk5dspSRrMPn9pWUuYtTf3k8jKwVeDqiLHwuQ",
  "key24": "2EtAusMRxaydn9tC1j81iZujLrDkjjB8g6nPwL1VU9zQ7K8omc5t3WVBEWSbATitkQA89mzkYHJVD3AnwHk7abux",
  "key25": "5eTFdrUJndXWEcZSiWy5EwLUN8XBHgcKY4mQk2nC56or9vG8c9rX63p1DxWygiYN2NH597ugBpAyfBgtNgSw7UaK",
  "key26": "75CWQahfz7M6qB8oT7yukCdNE6EDhvxqBB16UGqoBSJeUcLajVCGto8NJZbea4VToE7EoT8cWnkEAQZBiuETbxx",
  "key27": "26TapDp2149vmSQW3TjX31RUT1AKJS26dEukMqGMzKxagHSb6ormknVLAHv8CQk9Jfjsn8oPiwYbEgEc3SYt79w6",
  "key28": "2imxp9bhf5pMmUm5z1xSRzNwbWqcCyBRGuG87SgFZLc3WjkTyJN3DSksQjzLyyA9LNZD7Kia9TkDp1MsonVpdetH",
  "key29": "334E6QcihZvnAu7kRVVSka2CuerHktTh5jsJEea1D37cCnxQqb87ZMGmA6jrZqooNugeZuqVtqPdAX236ZmYm2aK",
  "key30": "5dCeq3YVsuiugCmGWvzbFLjdZnZRSLvtcZTf4s46tQ6RcRaKiux8u3HeM3et3Lvaw79XKEyH52QYXhCy4VzQLrZ4",
  "key31": "5jWrhnwvqhsfuxnnj1LSHxAK2t8EbdJ8HoN92ftf9igEReMfNEB2zYPuBHMGRAW1txYtgu9hKrX5skUU161noG22",
  "key32": "5YTJxTsRWsZNynvQD3fsxBp2jgX4vA6aSvDskEYhZoH2yTg6KCu4SriPHPmbbUBf9FhVYR6y3fnKnnrYqBr2sSNB"
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
