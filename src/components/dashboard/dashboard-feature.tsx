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
    "4KwgimTJfD2CSKcYBH8HpcAwC3nqQpSbH3FXnWfsjXiHmKZeMUPv57VPms1Co4Zahux2zXHogRtHE9A5cvqwh8Ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GhL5UtcyMaBAnVsm4vgjqzDotTg9tZWXWPov1FSYpJnjqEWhFxjrwyqSYzhH8FpwDqzurSeoRsveLCbTXhMrjCR",
  "key1": "5E6AZNvssmr6wof3ph8jCvVny9RtFxhvXAA1v9tdfkRrVRugunxZ1PJq9v2PzdB8BJstToDtwHKGVA1P6bK6bSb2",
  "key2": "5vKR8kK9Mkew4JK2jhSKuVKWrof59h4br43cD2nsGR8vXeo6b2o7tLWX2FwbMb2CAtHFNeNQNH9MrsyzEnY4R3id",
  "key3": "5MTem9aPEs78UzqV42ZVDATwAvYjj922XtCn9aWCM8CbLqXuSNQQ5Gt3HwiPcj1bLt7NNSaRRBY8n68SPSJ3uZ5w",
  "key4": "54v6qHFjjQGVb3CGAMHLiYD1pAK5AdzKoPoogLR3eBCPY7y13q8UdYFRFKgjs5rybUQjEQbjudmcSxmqqyaCA9zr",
  "key5": "3YFENNPRkhZWM4nBmkeB6BaoPe7H82EbUUY8U1dfg1vMju8CZMqcS8hbyb1Qz4HTcwkoWo7Zii8tu1t5eaMYJJzM",
  "key6": "i7EFTorGiad1hyny8yS2EjjfSAnDm9a65oqMSenbMt1aLAUXz4t4NS1YWgPyKbRcmExTc4afcF5aXsFYxsTaxz5",
  "key7": "5qvMde1PwYPcF3ty6sz3ydYY8wnmq496Vx9eypWB9M6tKSeys5GZ1Eb9EzvVmnc6Nq699AfPi9KVkgzF3gzh7q7J",
  "key8": "zczoaoDiX6m39QbZrRDCjx66qJMxTLCnatTUKrkH3cYY3VRFrPfpgLcigp8Es2xGALmoPKYdEyTNPbuCgTTiXX9",
  "key9": "PCxZ9iHbwyfecUvwCstcG9HqngydPgxLJAHp9zmZAqdKfiCQ39GDJ72uoe4tuqHk1Jg49a26ZTE5aCoQsV3mapG",
  "key10": "TG6qyhuQkceUeCBoEd5iJ5XDxrSG1b7n3MfUD4TWHRSx4yDHgxAhTyQ14tsJKuCVbveBFXXKJUyBNnk3b52ZEQt",
  "key11": "4VsayrEMWSxK9bXQJjTjMbU6RRpaCuEsKm2TuY5YUWq8KeZctU3AFHpVGaoWiYpaTm5aNdzhNYDNePMdGY5SspkD",
  "key12": "64pEjDsvRWDupq3Ai1ZW2Agi36eJzL6ada7JLSGpuj9rkkcPSzExKSNZEQtbs3symv5pyhKYAd82kAA9Qa1vAjhk",
  "key13": "5ZC85JYk1wWigos9nhvQ59gf2YnPXHr8tZsXfx54eGDyuTzwzCJFwNZNtDfAER6sy6UsugUqhyTQfzacKhZS6PLM",
  "key14": "2hpwkzGCCRAdMBhMYaX7oiFJ56Y8xZcLhdBR6ffM16L2GKsUc39qtins928W7N2EwvnXnBQC4YtMai1TtCmvduk4",
  "key15": "5V1fh7VanY674maYaTiAbHt2eXnM5AwPyXvvdoufZbusuRVr2ijZWAFNAXT2RVvANsSDwhEg8fgHuLLvwUWttAAL",
  "key16": "V946GhjBYxjWdXqe9LgTKTm8j6qE2821R2XSBWaHP3pTCnTxHvens1xdWdWncDE8tUKR4dxDbdjDuarHSX9gK3C",
  "key17": "3afEh2FrWU9dWwtXw4Sq57nkTgaTSnnBJJd1Dv91Z9xB5WesWpUMH7T6vE7S3Xh6LV21pa5Kt8WkHUeoXZYGhUMJ",
  "key18": "44cZ1hVb2wBtSpvQvLQv3xUHAcZds8yKUyd8LUtHvCV68jWxWWRqcFkLPtR5kq384jCLR1jcCDkDT6nrbijLQ6R1",
  "key19": "3CvN7eHT73zcfhLKGiWdG6ugbhrkVhGTrHpbiZeQcnMQmMYSvv8wHhHE47sNbfX6guYzX3aMZtrRiCT97EZVVZgq",
  "key20": "5farhApod1s63FWqkpL4cLUSwzDVABqqdfYmanb4Wzvxf6QyLurfUs2wSi4rPGFvvLYWTspfHuKbkREee9zsphXi",
  "key21": "5Gfv7gWpu7Uq2SWfH6dzhT1yebpghxPuz2Y6Lwcqb9Yt1vMbhe6U4JRn7V9tZMCyAvKGfWjYkdkLse6Q6t1WEtX2",
  "key22": "2ARTAk1aTsfJzpZdLZdjGWh7VSQJzg3oiaZjkz3JNWxNmVRi6c3AW5pCXhhsy2SQwc6S1wihAHWdEQnyftoyvNoS",
  "key23": "61vRdQQkHwVX83od6nCdU9GfaiwyDQpN1zwiUMdJHXDzyNcdawnLQXjMXVSMMRDLh6w2kJZvEYEAqCoscoZveenN",
  "key24": "61bqPc2JePtozi2VKVHHcn3JF74zBDCUmwp245FrHXkG2cX9yXWCUNd8zWQgUSssQ1iuM9TmFVGhMbRLveLisZak",
  "key25": "wfgG1wqrAsNPkezJdxxQTKMvDc8UJ6pN4Tde8zdpnKo1k9LzyGk8HCB3XyPDBMDgvZRNrZgsiCv2ZwthiWner88",
  "key26": "8Ju87M2wjmczynkqxTWkNcXrtfHcSvnary4Po7xeiRKbuPTmP4dXNHQDbMthsmAJEpQP81QBpir9EFeQcg683ee",
  "key27": "4NNhfEGN2AMdLE4JYQfeiTUuDy9jHHu5799MdwuaJVzU1tUXbyG3ymsaGXFjv12kTybLWaLoUxChTbjs3XroEpBQ",
  "key28": "2gSAPrFomxeq8X6GfQF16xfYRXPA8XEvXBEMdaSE8TBiv4UpqzNYmvH2owApiPWGwox7VpsqoUM6qkosRVNRdtej",
  "key29": "23Jy5e5uqrP3Qb3CeA2SQyj9yRURpJv3LbzZF5mdtcMcSUa6CzTpYYUyMbeARgVwXM1AEo55rEbGULjBEv5JjHws",
  "key30": "4CtJto7PLeCp8S2FsoMcwKdq4ybD5D6AmyvVM4RxyU21TmtgcUxvLjckxJzxNdPUd65KrfHsA8pu4NSsZGpeMKRA",
  "key31": "twN6XPmtBL4drLiSjCsKcXdVUGQ68ZYU6xgHWaj63ef7B8MKDLkZxys7ULX1Q1oncLoBMQoYNKG4rGGW3Bp2A4G",
  "key32": "3rKLiGbkhME2oZi8pK7DsWCimRJQ5pkQSWR9pB3W9i3gZ6QJBZ21inwe2582fBKJWpz2mR5fiwDxAtPuYezm1SeS",
  "key33": "63nCdUAU5phckxB6NV4Nh9zcWRPPXpgM5YfDvmiDxfNMcLyHb9kvShCtwWhQMAvjmoqzrttw3kowHperFAxoaQxj",
  "key34": "4iJetMLqsm6CKoSej8A8Uv49VS5woY3FvF3aKM9ddwsw2Hs9dqFbgpiTF7kXynzqq3uULm5xNJFumK1rMAr5kaf6",
  "key35": "4nwVsyzim5oydBYybhzFamyQD12aJNz46d4YHZjNdruhYUNAVLQYZDMxAxSQbUBxG3TfM4dghsFX2cGwVBRbwHUV",
  "key36": "4U7tYqesmjP8XeF8F2Ca8MCByLaS7dhetHHG1PKbcULYg2dpz977SK8fj5MN28K8Bu8EKyE55Sj8yD7UuPnjgUgq",
  "key37": "4tGwVyy2Qz13Fz5NpEm9rCxRtHs7FT4tf9YrN8qks3f5nSgyewZbxwbJY8zHR1DFXETTfrVQQgotrPyBxUvhzM6D",
  "key38": "399Z7sBP712LvhXau1ZuPWhwww18kSDXAxW6mrj526j49PgzYZpToZYaUXd2PPVP2QJAQFaZs2dgA2skduPR5X2V",
  "key39": "3g9EmKQH3WD1XL8d2SbvrqoimcppPFjnYWfDMD3mLpkXHGFR8doKbGyWht9uKJ3SHVpEF1C3y2C2PpUqyD7UxtMj",
  "key40": "5s2iqZD4MwFWuCjjatTA78gYaSZ9KwyRU2KeifnaNbH9CsgCGkLuPeKut8yYRdFBBiVm29wBKECKamgQ4cziTiaA",
  "key41": "2upLGa3o7bxnQnNuy4hSTh7uGwZFBSZWctV3LzraMiGMTphWzgophepuibT78ox5dUWHMDojgubi9VcneNXuU1og",
  "key42": "52sz3Tu7AYEt8MmZoWEwtH2s5X28zQQoN9vTqghojwBanbCpnR9p2mZC5mJ1ENYkEc3HmWmSPHYRu7cAsTH7My3z",
  "key43": "35WKUdSpAYQUxhZqarzMpqYgjYgfFtk6zzEB4Mnu6VkeTyHyyEQuXYPTPFuTkwVMcAGSTf6wn82QtqHy2LcYFwZL",
  "key44": "CmMKH5AKwoGh5eLgwiSXyH52RuqhiM2NkYseKjFNJ7TNz2twoBW7WCHCGHiNJhYRQLCZgSXhDUwHyYLQ5LPgVdF",
  "key45": "2qcZhroPGjmKxGd9dxHjg8H55L33tsUeeCRowD6eSD6GaxhBZwnnxaiWhhCKhysAUkHcyFTp76LwCqQJirMkVwFK",
  "key46": "5mTGs1JcSAdTWNJEhx74F9PELYYuSVrSXkbZGFc1xDcv3WyPxS7tD1RM6iMu7YspqN9MpC3patXeTQfYjEkbC7A7",
  "key47": "3BinfdcP77SbGNpb5dp7SmvMqxLUcvctZhxTUYUimwFF4CXVEm48Wzj6KtDF8nkNrqjcxsMD6NzBHW7tFrf7TTS",
  "key48": "9bXq1mJY3oHk9CZ1aXy7qtW6Lm5jqTkDHwiS5DHPH2LontQk9qw42u99uVvG6y6gqFUdBUePFxDG5ktSCV1PFvM",
  "key49": "25Y82UP6ZGsdKcwUv2LoD4MUN4vqBdZz3B4iA1FWhHP7BCwEjTnT9GLyDdTe668DuuX5QzXFZN8Wjug4ejLr3VKa"
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
