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
    "5vjJMFJ36Rj3yqfZgKkiBqqr1idRoHNCq6mxSZttrhtyBm4nmusYGsn8UaAYW26C2NLuJFBqth72J7jgc9hQvxoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qgsafAXKTqAV5cChBSYT523p6Kip3sNbAVGNWrzahxoUXNsxDXdG5Cr5QSCLg2wdSzgVjcxdKREJfszxCFBwNBS",
  "key1": "4roaF5buU1YQzet4MzUbZMeUmFvnP5JQ9ToyKSFJrKY1V3dSrkHu7sydyEEAUUfRcGs1k8GXNgTQZ14QDn7voWsR",
  "key2": "5yBdRfYo5dAixLmRTqGhJWLGda1SkFatn33XR5LFR1STmroarFL6V2mb1bNDNAtfyeqsxwnDa9Gm411yDSHjBVNF",
  "key3": "2bUeghezrhy1RRaAoYcr8bf7eJef9vqrk1bQBjrirTgTnGYB8zwSaJWzEechVmVfHb2uDAjSgn3nLuJvnUzrrjva",
  "key4": "37u1wiitkVjU6jNiyBUJR6pLdqUsH1u67KJhoVrEK5xkaxp5kwCctB7FRTbRxutEhwN1CA8NLYM6nfue11rCK2or",
  "key5": "RCKi33jh7tEHkdrP9dAhQ8bsfJEcnsUXQEFqpmBVZHkgiXZ843262Uhdr51sA8pckvfBEXc1vedosEapCjcjhed",
  "key6": "4Q7ZGU5qS9GFo2gjqwAKDxGEeToyCBEXocAweE2DA1YQDijjayGEA2MzxZks1Hvim1QDhtmtxGLeMLJkmqmCxdrf",
  "key7": "57mUE6ftG9NDjo67zTgkQGGinumNpZoHSbHcPtY48pnoCAaPahUyAQ2AyosU4A5eKGbgYnXWSqLV13kLpUqa5nMD",
  "key8": "4Wvofd27qaSYHYqrUHuQLU8L7jZXtimxLMhaQmvZThYGUqM9TVkc9zYvshpQPKQ6DbYqVT2BBHUpXHBuSvUWjyD9",
  "key9": "3wTJiVXtf7DwyN7vAopcsJTFMSmiH5Yo7yVa3deAaWfi44RZ4cQdRJiayn4LtvVLJSzRjwonYmrCMWHmko7Qp2nP",
  "key10": "5ZkKLVRTZ9QxZTLE8g7YooJdr4SjquxPMz9Hc8CmFaWvxBF6SFUyo1DKiuSfnymBjxxwWsQxcEK4zAdXTMMY41XK",
  "key11": "ZVpY4UFP86csN8QwNH479FoDhXFWFAppRzEFLk22DXa8JFhnhQa2qGerRaGZShXhQyWyJRVyzPN2amU5px3Q1X6",
  "key12": "5HK8nfwAnR9GuZ9SkgBDyx5B7LYLDds8gQmz2FPrAmxagBrxoJJbrxNA8Zwa5cNL6tysCbgKQRKHrQpKCuHjRky6",
  "key13": "4Tvj5B4F3Ug2DG2xFJtJBTAGmN8KoP3xGm79TMYBgPNAM1esybWHEV1rhtTJ3K3KvUrvEwrhZvmRDrouDnX4pkTu",
  "key14": "8YqPFfQSmUdPmTGoxtHGGiwUtryQP6xKHwuX9tJqBdQmWcrqdMZefEqmFiJZF9jZ69UyLVFuy2LSnVFwPeFcem6",
  "key15": "hwTgBpVsQ2eU27TBiotSMesNRBczgwkaT1Sit7dhnNHMnH5hVpjpNTNSMtk8qd3kjqMv2tV3M9svxTG5RoEnrcd",
  "key16": "WBKGmhiL66Fnh4BYoL9LhxpJ45aZY8Nvcb9a6NHa5E89tKqFHMGkcNfNeByEFK4iYApnz29JZXgY6bfv5ivSfor",
  "key17": "3RcaKnavw279ssgEtayJd6hSEamcyMmMqjrHA6twp4mAVEMaQFxidGCmgvsHk2yrSwwPcrCMYaFqeNmLex9LYCk8",
  "key18": "5rCBpeLEvSiWNse8wgmg7KKWuUcaAy78RoH6PgPg2gy4gz4tcAptgKiFxN6d6MfKZ8Gm1xMxLBvjj47KVjoU7S8b",
  "key19": "4y4PG2u5zWUR8XxstsAJUB3zydP2LyZPHEw7U4mtA6g6dfKq2QVyFu7gLgCgpbXrkDFyh4mwu7AM4YGBkfC3E6W9",
  "key20": "4ZXhs9uBvpahUEBoorR8eX6bwzxwEVwbncoeN4WcJ1vMJm4YvT12pLXWFZUC8rTnEjVLRjGRo5DBN52cVMH7a3xK",
  "key21": "2DDGWEQW7jkjE9WA8GXuG1BPQGzHit1VWxcMszsYuDkPGWgCNK2ZytMCpymsvDNTjZBNffKkUPRthtC6ecYLqKYP",
  "key22": "64N8NyfR5AxnnRyeerULPtZY9Zpwr3YU1in8fhf6ND6dK9yT6UxjX98ho5stG55MtdA2GVx3MmE6gJmjPC8UQk9U",
  "key23": "5XpdLamDTdhtZ66KUWiuyS19pSP9mqyCTm2rgMHRXe98hNyEQH1jdkZnbbSG41KxafwLmtZBCtoNh41XZ84GaWWU",
  "key24": "35N8jc8yx4XsBx2zmP1Zm85MgWDsS5KohBAFN7TsENf5sWeApMqkJUsvLRSFeZbdRwDnRDQjLKNbmnp3QkiLuUaG",
  "key25": "3uDwY3MnQLHVDjqxCtW2ajrLydDF6pR5fuHxfv9M4orwY9bMP2MW49AZ5SJMKABXZKsgapARVFyhZWrjdWeZVTFr",
  "key26": "39LMaUkEmePEPf8pXDQqSXmWp6NL4ydRtL7my16gxvapgAsVi7Gt4FexQZzbdj85zZWht9edQgw1L8FxYWsUCGoV",
  "key27": "ZV3DAHA1Rvemw6j4r2aDe4FidRWZWscoRu3aMSLDUyBKREAktoLRbuULHRr3p6J6EpN2CkdSACqfVbycrhAvbGj",
  "key28": "2L7DAEZLBaQ3UJZx4JBmtcXqYsGfJJKkPNSdCGF7sDSP21Kkj2ScoiZDpiK4w15eG5V6yBGBhuy8HAh4pRXRzH5X",
  "key29": "3sGvKrDTiRgjV3kBERmAcfVJGvSB3wVPMSyudSDWJf7yWjWt4YnRDagpkAzjQcYsaRLkE3eAh2HdppzKcmqUNdys",
  "key30": "5KJG5zuvH7CVYesgXBcVfrYpfcc9wYH4yPv9nF6fL3ohnYD9wgJHCvFss8yu8CebH8nzbZ614XoxGL3nqmKMoUHb",
  "key31": "4rAV55QLBpKVoz4ymGD6J3JW8By2QoBUwr5gUjdzHv5kFR75qemzXdcHKhYD2jwAYP9E1uVaAF4Lvcm3pZFgkUQq",
  "key32": "2N9s3WJUeJJtv1Bpw2uUgQtTLwhHNeiemMAySQRzTDA7RQLZ86SvCA3KuSw9uSkPm8Yi5bsYMcFmQUGwTjP8LLtM",
  "key33": "RdhBaUoUVoXdP5SKS7GhgpmQ5Dnfkuz99GoFuz9W5ByW1Q5L9eNjSYL3ecZM8EEp87CPWpLLLgF5AAnzdhwbd8j",
  "key34": "4JdbkeepwkkYWvyGL2frAhuMY1r9nwx7mduGw9gYgjbAVr3sDsXbuF6Nqwvq1MEK1rjEQe7oPx1zUCZCA1X4513J",
  "key35": "4Jj4PHSFH4Lq7B9WKztDdyywam97x9bYATDzJ4ZDTzdgJ9m7XhLXzh3EWHdxMRSEdpzZYr21x66x4aPtJXDmn8yB",
  "key36": "4QXHotarq7ew1jSSCmRBVtD1MFGVanFix6f1GX7uS4y1HdMsATDJ47NdPX14bUoa6AryTZkjZS1bdsUU4rYZjc6R",
  "key37": "3fz4eEB754jccviR5MrgKXMedwHYLxdqDRYDy9mp5pgrLHw9upi4rWzXsrPL6rDd8Xfum5XEfnUPjyM7yyrgqu23",
  "key38": "4S8f5Hn5w6DysEdJ5vR4XNuwYjNJvFmKboXrU3BuiRvnHDNuuGyFfRhW26aAEUmXQ6BnVHiLcrs5nLuKnZPEhr5s",
  "key39": "4djaoeiVQ6YhgvTyWXvYD4vprJWEd8CQqUUooC5HKMuCifEDXN8DGDBcue8wW2BtsuzUh3FHfQjNY7GUZSPQj5h"
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
