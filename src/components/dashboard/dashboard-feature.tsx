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
    "5Xq7W9dwQpUwPdwuAxLsKsgwXuuVQankFcsCU63y5vXtGMHAtJcVHsCa7vvKLECyrdSzmkW6PVJs2TpQovtQzgd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRcoie9AudE83w9VDXWuzCqET2REHJALLLQGhbDhnDCwnNnz2zGM2soV6tujEYQc4tk5oVCs9Bb7enAsgohRJGL",
  "key1": "35d2HRqZa6HmmQJG6D66UqjasVjZoezLbDDtAgo8e6pvEVUj2MqdgEjg86fbnCBwo5tSiJzPAxekVEcBaAn1isBY",
  "key2": "3vzMkBnJHzcn41x8uYZCJnCi2EKDaqksmPBktbtk522u4TEqMHj6u3VM1juDWkGiAjqr5YHiEF5BzaHYfPZ1qVCT",
  "key3": "2twVK4fe5eNzh9RpaWdfXUFJ8QREmioP177sHXLFptfYp99YPSF1f9nqjMZwJHUfLFnQ51Ar9GuC4NSxHeVL6JP8",
  "key4": "AQVvYezDyZUCESDgrXRJkiYZ5VRuWb63bcdvDVRQVSJN1bVjFVyYeo69KJ38VvduBgoZigoG9Ug4xxas9mf3MjA",
  "key5": "2goLKAJjD1wHsNSUv6FXYzNV7pfA7kBAwBrsY7X84EJAP4gNNRtxhnrDHqewcYcx9CMvFDnqjjZz8ZcfpRed12X1",
  "key6": "5DBUqZeP9wdhzch2GVedD73bpGe4BkTXPYK6nNeWZ8Y4UsN1PuUmuJN3bs8gps1k4rp6BMBX2o78CXt7DAX32Lbu",
  "key7": "2SEiyQYxo3EhR7oGiRjKXgW6jNRK2VSQsGYV2yeAiKF1WYuDGndUhYDuj2L7eBDVHs1HKh5PhVqN5s9TCPwMm4Xb",
  "key8": "5bRCr3dQEuDQ3yjQLj8GtYANYC1ymCAKmjJbbA4Xae2c64EoCpYSPFqfGDAnA1c5VCSoDjMXWaoDk91ePWdXgUrD",
  "key9": "4miyB92EMS8veet3TcNJydjE2WVLVwFHn1RC8G1CirzmNS1HmciBvZt4VnC1u5qGNBpc5vuGypNAu54tbK4KP1NP",
  "key10": "4QSF7Az6jQ6KNmtvj5dhjht5JFnXnxrZaS44Dh7hLX7WabQR8DZmW6xinjrgWd5pQncrL6etRPdTsDCeieeJcSkS",
  "key11": "jc4JDQdkFeaLxMtPV61Qn7DCLsUCn9DskaGot1c3EduenEtQ5KHoPUTp2m2wbWXmC3Jw9TkYQ92eWyKAa3GC51K",
  "key12": "MxjPZbg6XMie3kgYCggeT52L6Wyq5RZ6fpGiQLpNiEy13X1KercY7S8mUUFKg73TJ6DMfm746MKFhyYeT7smsdb",
  "key13": "2hMMH4Ac5MdPauFYxyRrF1MEapwJrrqCBSp86ArbQA3Y3ZqGFMFhFvBLWjoQ6DSKqq7NS3TmvZgE9ZDKKYNL4MgV",
  "key14": "xKnPNBJrCrsDUxGxksA78kL87iTBroiA4ZmfwpmL4UpBBy8ZBdbEeSJa6ysZraZETUaidEXJBeG2skVe7an8Yb1",
  "key15": "5DwacBD5XKSCY9awJNZX5dtYw191V5jo5nWkChUzuEYxwGUy3RFnMkYQHRCK8iw2uZViUoJ9rPzZYVrnfZ8CVZo9",
  "key16": "4Xt5uz9hAUmDySEsjdVeniaAQHL1qH5zxDSA3qVFna7osLrjwpCY94BhcKro5CAptbVE13Jz7K9HvbbrF8i3p7Bs",
  "key17": "4egkjzkELj6Vo5QN1p3Dwouw1hHQxEUhB2HkziCqkEDjo8wbLGoJcoajHmSaJ7J7PTqkc51UNCByeU5arEHLgzS2",
  "key18": "cNno96GSi3gc2EveY4dRjaQVqyhbDR2taL6y71yMTVjYSLWPR4PApzCqbquZ6ZqL1Knavgc1CDQRXjzrrsz8kPa",
  "key19": "3CPcd51m4258kwEH3dV6Fc6C8J6fCbffb41NAUvB6TriP2dCaxhi4YMypNNSWtgJvYmDiNS1p6PYhGrToisjhWW8",
  "key20": "4Xvf7feWmHeNtSdiQUwDNwGubQ13FTs7x2Ywbk34inhjfMhpgCcUdUDNjXqvHSrAUBoELEzAw6rKH1sHBCyhx8gR",
  "key21": "4E9nFcDGqRvhc7VZcMRzTFZKVe1FPGG9bmYXh24o4J1428waNuQAY4joxWnchjMAj8ixEzhXHAEwtF5vkx62Wm4h",
  "key22": "dY61bGKvyRuRqUJVjjQYRR8s5Tx7D5Siqst5n7XYGTvhj4eHZQongEBAbb2aGuuH13XahoiLoMtEA3RRZV6oWJT",
  "key23": "d8LmwG28K4uUmdnuQfQGmQsHAYeLPBLkpwtTFnbdiRqtxevjKtdgmAKW59nbeVqh8FRc5pLHeyUeovkVTFjCYz2",
  "key24": "2jpptyBcVC9LCD2cHZ4YhMGP5MmrcSNajR6roLfrmouXAvoJwdvMXmPn9n2cGmGfoovo6s6sHRDatzppQJNqxc4z",
  "key25": "31vj1bCExGEGZ982YvmLaXUSUZcEoJDzWModkSYGD7C1CHCY8LrUQthy7xDzsZtJCVYaFQWxk1YywYxyaE5bJNAJ",
  "key26": "cLRCiqraZeBdMc3JDG1b9WcTuybUJXDFGp1NdNNg2QA1yTYyvgiqB2eJrYpcKAK7tjJtGTFWQL7fqPxzrsDhWez",
  "key27": "Ti7ikWT8eC2mpWVsprCBFAQrDJg8kXaJXT3uEjSHKN55Q1eV3DCLhqfddiGoC53DbgyRa8j1Jh3w3QJCgWYaL5X",
  "key28": "4LaN2ocXNQaaNFcAEr4nh71DuWxBLhbQuLkSVFVsccSLHVDxoQ6uqJgVZt4cUugrWeYjESXDrok6uJXQBJcfPSfy",
  "key29": "6jvqCVr5YRvHCLzDaPyWHJzSqmZ36Q12XYH3ok2BuWYvMpmVrvQkstjpwfWkTNERKrox3NcBfaFVwekj4Do1XEA",
  "key30": "5pnXJgonEJgtUrFw5yFsNG3BDowvtZVV1x2bHu3vfz54Z9Z6J1FzdrLXTCoFF4uCfDpT6BVxRntY7kshTdon5y1Z",
  "key31": "GpudSvCGqApmhD5mPbhRcnTRVkHTYLXhkC98k81EvwUGRoYY4ecTR28T2rDeiUkCpM6EovRGVqW4zjgsKSNdT61",
  "key32": "3BPEWYXwmA6jUAEFunhKLKcG3KDiQp1ocnoVsc9KVpq4oHe5S9jpWM4Fk9fwJWqpnTdk4zhdUioRMTsWkn2SWTbt",
  "key33": "3Z9Yyomq83zNGFRzrTe4fnmLdx4Q89mnHHv1UKtmTrMEN3eZQSF2zXkMNDzNwRCJWccF3kvcXrgNPtjSGBd2f5ha",
  "key34": "3wHFnm7127Yu9TwoFzPFdugEQsGMXtVsTNQZX2LgibRwgiHmr5ajqhSArtRRvP82Sf6Z2MeShwV7v45rpSmCzwbo",
  "key35": "3su4wiiLnEUJTTEwcuQG28e55rQgDvdhTmADizFNb9CuxPYsqbbvaCHxT53kL5LZXQ8VMcKzgHM6CxZBAkS3yrqs",
  "key36": "CSnuGPWaZDAUZdrMP3bSArkjotB17k7ZfPzehMj4tG8en7yzk4UjGj5scW56numZdvf85CDncjwSrcLPGS1U3sa",
  "key37": "4Joq5KPrwbr9bi3bWD4TDHV5RXcrpdX6RK3ivQzSY58VsRzoa15vLZL2BqF4hjHkonxnHhv7LdZifteGJ1ArN1DZ",
  "key38": "2Rz6wor8GxvkbZqaPwej7ctKnS6Gn7GuWDnJ2k6YufQ8n1g3efcs7HmnfveEDvWjd5ifnWTz82LGGW5scwUFqK2V",
  "key39": "4x72HtFb1z8tKDXNPETCwPWDewngfUbm1EqoDm3FtmitZnqViG7Pq9iyboQR7n7GhQhYyPzPZgESpqKo6dNy1zAe",
  "key40": "27pPPds49FHKDRDPCgBPRa9QhYXmhqgAYi37bZsyZqJd2KJv4CHNsw52cH4mVvbNUnjnZ3TqTSWmbnVgeukCSEeo",
  "key41": "EuDeeu9TTYzSqHRy6o8LoA9ZR725foBfLdjWGmJ7TGodNuYe3eWXqmgAbuijQFN3uzYPrVUsJvgzh2uDVoyjojs",
  "key42": "CuBQKFZ6wujtaiyGRYHFaSRQ6TH2TazmmwwnEgo6uiSWE7dkdoJLzadggDWtmp1PPj7dhoznzHWts71hSJBsJ5C",
  "key43": "9upQE6MiDnwiKfAdAHYRjczG7fFq8BkjzEMwQkQkydzDbFu1DH6vEddXxYy1N1YMCRw3q79u3Bbuqzqz3FXyEYy",
  "key44": "3UDduisvpBc1eNLcpkBdriZfqQQT6eBQc68w53bZQThV1cpQAnfQAeS86RLFTE8RRuDUgbzDpPDEWQXcQfs2vDVd",
  "key45": "5knhA61tKafLhCGG3ZDfUtssPDHTpFu74jfpcwzqLGPrELhAtNSisJEtVp9jUc8M8uX4ciwjnGBthQhQQ2wRbfsu",
  "key46": "ZutFvfkDtK3QBGZjDNyXCRwPvzkuycj74dqDJZiq5e2MXdiPYyrJXRcAWLaCEqTMAqK6RwHnKGisgWKK9oUdn7n"
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
