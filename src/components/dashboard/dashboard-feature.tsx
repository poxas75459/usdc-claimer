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
    "WG7jZFt5Haz274EeKya4JmA44WaSdsFoCKsRyRFUNuvymAL6sxsdLu6zhhRGc5AHR6Jp1rHSp6DuUheBAZ1pZ4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fCZphzQg2H3WnrciUUcyhDEQBS25SFN6wPvJJhbxuhpWVYSZ7VjUyzEFwVsNTVcg4Pi3jpWotQjL53dTrSfREU",
  "key1": "5znrrcMGWb6CYWGKyEaTv5iCFAKs4ZyqZ8cWcVkLCqFUg8u6iZJ1NKMNLqPjv6uBspVT3hmTMm5LABspzL3HLmx6",
  "key2": "5CCwH5NmhhkU4fxpL784pc2Ns9CsqANaA1PwdRBfm5UsiY3dakqFG3y9DSV9frQRBScPULM8FycuiXwddGms1YDu",
  "key3": "2UTUfdVWpLYpNuYPms71rcgCTKUP5bKAFbxJCuQL2PDDHqWcgtwLCLs7RjP39YU56JkXcoUnNctpDKmJuKFZ8sfX",
  "key4": "4BZLM85Tys2cVC2RomcsEdZzp9ni262jzgneMDLyReeQN35vGpZ3ibRpa2pkky6Vu2b1M48ogk7e8WdjVUamtVTS",
  "key5": "3divvFScAy6MXZ9pC3UBktYQrwjVwceJyYdwBcyZ8nDAXzDoED9XFAxYNwR3n5zsFzimBn9pp3Csy8dTAgm4xfXr",
  "key6": "2p6HkVDptafRjcdQrZ5qEfSrHJFbqge29dHnxfNVjDjppGM3YL8eJV5qEiZWYCN29NdwrWbk43mm63NBxRkvs51A",
  "key7": "RV3ajSq92XDTVRcbXNBkhni9SSxz46gAzBbJQeuWQSjmgueGgnLz4cZawMYAnkQC9kcEHEqcSMeuq7UknKvVQG8",
  "key8": "nxvGNeaiRKEHU2xFGwdAmkorMmfSrEdVfTPfm5NBmDyRUqkrS3LEYFEEG8eRMMbYsJwccj1YxCnVRycCgxAsWzb",
  "key9": "573T2j3QJbLk6C8KqFp66bTZC2aWdWuxyGPKw2CCMgF8cSo6MssyQCXdQTQ5jPrwNKdbD1wN2mDYXm3a54XyBWag",
  "key10": "4EJLAsuPgWUfUvULrqy1KYtSYq69tdqosBBYShrZiYRbXPB31AiXvavyiZU7s1x9wG75K1cLVsftakMdg7T71FmP",
  "key11": "2utZA4mgMivUdBpK3nicDhPUubiQbsXFft688U7fhwcf8g3fK75bUrUdinbZDD3iwAC6XYeufRipk3CtJwn1A1Lo",
  "key12": "3hNd2c6MQKKqt469iBUHtmWCqxJtAYqWhdqaryPuRng7P18TgWz6x3hB7TtasohH7z5Z3mxJkwQHCGr429mMvqF4",
  "key13": "2jaFwZU2EeVDB7TbLuKtPSgB39ECDTxjNjbcsWKAg9pPeo9hnwX3iDzp4ThyxxhvA59HnkSCR4YoMBm7bxHfYy63",
  "key14": "42bz6F9KFxQqRwHvpHtLXxuLWrLxNQfyWdXJWfaHWJJk3iFZqgZaBxZWjLqSDNRAAM7H4V7kUHTq5uP9WiEdV9yr",
  "key15": "47xV77rdD1YVRyNhk5ewTdoCBMby2JPu4vJnAu3JnppES1muHBu1hoYiWYSaJdg4MXmZ6SrYL9gkAM8NCMMZp5Wt",
  "key16": "23djqt9HqauazgCmF34kJWYV3v3ByWz88oFysaqfwMWrErFcB54iUuB2NneRbzKqnHVskuFV6XjeyDMSZ9p2u7pm",
  "key17": "5D1tzSzTwiR5cx4qW9s5JjLCTH7CtFGxp1jJ3oRJWwLgv4f7xFj7Nbfpmv3ZdZcU9kxAN9Nc3JYg6UfFAE99LhXS",
  "key18": "57xKz94XMcWmVCtMreQ5nqgFmU64R8qCmNpBbt8aPZsUfSrp8qFyfxoCMYw1P3nZXPywksCvDn7ckKSC2Q5T1AiH",
  "key19": "2DKabZriD9gEGjEbsqTZbJbLnaGKee6LHSAfQPPQZnHnUHzeRqVhLjXEd8JDpCtqrMkpqG2yavApCHGyDgNLFfjZ",
  "key20": "5xa1qnWUKX7ctmECHZCb2C2KfmkmKq9RZE2UcAhHg8BhCZKgAvBT1AJhKzKF5GqUgmcMu9o82fFSVWBoDMhaNKFS",
  "key21": "44qpyu6XGpFYLseRCTLYiYGJ1VKoKmF7BVbDur78kP6NNogXydNngTEPqsHUgSL2i28kaxLJHQUBKGcEoWGP5tXt",
  "key22": "2NNcdwHxQRkgHUXiXvf9C1wroHHrMtpaGBu9baazoME717e1ixkKTQL6pTPSCucHTxnmWEJSwwYihYNwda1PFsqH",
  "key23": "2WgvWBCPJurfMRTWDJGsW8fEQM1juXBPUfuYQNsAYtXVH5eP97wqrdD4kr13Qz1ShpvFn3dgP7y82CDz6J9sG9F3",
  "key24": "4oYr2TA8Q6Mx1hY224PQpKsxAKRXw2qNJkbBYcyXr7RsmTdtNMgarrw2FanwKxFNCNY7MQtJhqVqzKbcPhvmWXLK",
  "key25": "43GBRagiEE1RTyeLQCwK9cYbVsYvvScsAmKtdGbrTVZ1q1xFcBKHzWVa3oFVZsGYZpkaJqBmzZjnpYmmCCh84GEQ",
  "key26": "3sGapuLjdBx7DFALkykUTz5fwG4Dn7d6uBYQV3iaqcn8tCqhZofcHVNeUwRZge1zXW1AC76h7d3nMpbpLQYfNxAW",
  "key27": "5TvQfXgzzB7SP7FGX4bJfMWfBkwXeo8kTBK7AkSHFW624cB9QtX5bT7zvauy5STzS9FwMjv2Dvkt5xEtnes3DvdJ",
  "key28": "v7pWRQ3H63Bh4377yF1dcBj9FwZhmFLP7247gsTAjvwnCfqttfLV5X4HGTJCGPJkwQ9ubbNLUW6RkKRe6Zs889Y",
  "key29": "3GZnmiudL5SoJ98m22drNMGhoc7EHLQw1siMAc6MBSaWNiYePPD7EWoDityqHbz9XUB1T3HSonN1kRwhQUHRAgco",
  "key30": "59MTyqNk3AG6ndWpS3utTTyvMzimrW4SC8eecVzpFpKgBwK9ftCebg8rDtV5kHPGFNWL3qjrGdP2RJnBzjkP28L2",
  "key31": "2TFDckSBMCXvHfTayhs6tSXqSovs6Ezm33ot4YZoJGsNSH4amvmsFrko6W2Xx5ozoV1aSUTtt2jP4mU9SBLJzYuJ",
  "key32": "2AMHD4KcpZdR2CPPhSjVnRPLXSCGedgfnaeMsN3F5xe3vuZdUjWWEU12TZExLhD8d4ALYegyGZ7uCcDiobaNmP4K",
  "key33": "3KWRGkgCSnSJ873nknKbg2vFVm4ghHXyFgRPUAPCVqFGdM2mmvuoss8PXMoivwB6RtK6LVQP2WwAH4FW4mo8m2fP",
  "key34": "2WQ2j7Q2hXaMmY2T2Ra7Bm5P6DrhipAQSFzeZbG5GMVj9rxBZCNJyeKD38JFdnsSzX7L3qr4ZFBfzsYToWrm89cS",
  "key35": "84muJK2bWSgK3FFHTqcP8aX47ZmibGBAWeXf1nPUiEPwZUmJDd6N2sFteg1sjc1LLxtUJEbHmX3b9LrgsSEcL3V",
  "key36": "kLxjw6YuAjUTxWMguKbaTJuEZoFYsbzAiuojc3SSQFFFZHErs9GXsaqTytJ7xAcXYftUS6wPprPZAP1B29KZ2EA",
  "key37": "3tQSNnmijQVLRmjTjPh2pzxJYT7qZBbof2nAoWVLtuipyKCX43yCst5cWeY9WovC5mY3rfNSrzaa4qidMcJ6FTWn",
  "key38": "3LgYrHMUCJQvmTW3B7MyabCrXgepVPY1uG3qWVV7HLUgYxnAQEUH2xEqZgAFjuPiTfKYPk88W6Qw6UTyqfyMFZCn",
  "key39": "2wvkQzEVUBBtUu5ffVF1GJasGKWW9fTmgdQK6RyNJ6RE37g2MQG6fXqdG9Zk2nSpz6RaaW3svGmQwUwUPC43JRiD",
  "key40": "5to1P3834gBrGTg6vJKyvWUvhAqVa1X1pKHEGufHdqWbRyz2A45wqLwjYTJ8BZXBDJyWnG1GR8BkRKm3vAj7ynj4",
  "key41": "xdSaWcV4ZtEhPDydXmyAG9GNj4nTgxWbYD2sQP93gBTCDbPTZZsGgV85LCq1rLKgghE3Fut3R4Y7nfrjGTEj4R4",
  "key42": "5b7mYF9YQLhjnAJoMNHt7LEFLQyg4i9Vssf9ahwz98wEizs2zBmMXThBJhAZYmvK5odvDiBH22vdGXychjbz9pds"
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
