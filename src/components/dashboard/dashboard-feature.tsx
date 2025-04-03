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
    "yWS3UtqR1spfMLrpRkrjoMPbbQoMiew3cfk6cKKzoYFh5pjuZXZkt1AFM21b9iQ8X7sMj8MR5fhW3fEdCqU9fq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ex3cBZ2j3eKUm7dgo5LLzMDYTNEEWf3Bd53kims6NDh3MgLAWDcZ99iif13dKNSzVnfU4HmDnRsSXNrXB8aNbDc",
  "key1": "5bPYf2KZqwo86kn4xvk6uk5w47WT46shUxfHjx1Yn9wd5GLTS3FpwPL8d1UbVkeoXX4H3ZAPnqFybxaeSMfPywtP",
  "key2": "56oPqhBp2cqMt1q4CvF4dLCM56LRb967rK54kpZ7ZUM9cYhfzwzavqBAMe9YgAm3cYaMdaEU35zb8HEGRhByyL31",
  "key3": "2Jwwwi6xGBUrSQrp7PTF7sixgiTMpQaN2g1HvutZsd7kskFC9sFSkKamCBEAYCZUgCMQnHBPae2XzeYFJjNrh1e6",
  "key4": "4Usdu8NYCGDaSXs7TkcDDrsfTqwFts3gFEtPayGZxmvpJf4e7XwJW3RWsbcVskak4Q6dYY9WuCHFXeCx4ciXqHkF",
  "key5": "44mVGJqYDVdrNi1Yz26R2uHXZCNNXvDAZtVFQftEuTwrJcibkxwnqTw3vZGpkmHPi8i8TiXKSqPh6SNEgLLn8Z9s",
  "key6": "3hY7xpmJyezzzwVYmqnisT9WAkc5MNMfNfNuKjt9sriYwqLe6AxdoyQDnKgRkSorzDxgJkxa8JJ3mFh5yF2aYZiK",
  "key7": "43pYsmNrwqM5juJBbK11Sm3YLewMpuRDscva2QpKwktQzBTr93HvL22GBrP8UcZxoyGRmKY2GNWWDGFs5uksbW1H",
  "key8": "5d9Q49171oUzTWXqLpFdtt17SY9uYRTGDLkpzDDeyJvtqeXeXyJEV1MVfkyehNN7oC4iPfaduTccqCs8hhsAcLjD",
  "key9": "5rLbHFJVfwuqFD7UepovaB9J289tmt71Ud21kNayPY9J7RB8piZnxCDBgQ6biHUdCrCYJ8AMJusPfQsstS6gpvso",
  "key10": "vyb383XTj3mBceP3kjKeETHsizbu6A7wN3BHrxLCtKXbWt4Hb8v9Wj8aqJGKKAUHZHHhHU518MeyWE6C5vTcxXv",
  "key11": "27DV9Ut1KZczk7P2PigvJB2WQcN8RRa1nBmdoHgnaEva8ZoXtzWrEA47Fwjpg8B22dKUPR3y3zGEyAfvkDrvPqGh",
  "key12": "2UhUh8vbnj4eBEuLDoDUoKLuVXi9waCgb9oK739ceakjmwc2EQYua9cLMJhVk5mDN8mVQSKbCkzbFmsizwt3q1PV",
  "key13": "4T1teb28sutpaD2crFH8Yjq9BLDTxEGryLDCVjpjv6e7mG1wPL9mUukKna1UTvHb6tgfGfLNhLP4Kc2mPRwFE89b",
  "key14": "senUQDt338JNHPoLH8b3EpiRqhupztzcNUq8qVjGqSmChbnRy9G5mAJ4CZn726ZYEA79ZUFwTaRk2QgdpaSMout",
  "key15": "XyMNGjyT86DNokcrm61rcjyQNtpVWt31dspoaDPc1QzkWXipE12w3xNxWvGh1DrnyN4RMDGM6oDojdkfpM49cNq",
  "key16": "5JwgKVaDuzzwfAuYxCfsudYpXFPAJtaRT48AQArAXFivgtQ577tyc1CBoci1VreKqackitNBxdKtZANfvENfo1sD",
  "key17": "7JtXGKx4KXoetTSv1waZ2ienC1pULqCzJuC36ddcLXmqBC7v1UjN11m9uxSrVWq7vqsBqsGByMCouyX7QG4spsk",
  "key18": "2gh3DMD5THPXTJ1peqyBP1ECk8PYGM5KqZuP5ebiHxZaYyiCrLGoHvDzThgXrWLZV8o4RVjQMw6u46zQyXEBmbKn",
  "key19": "4PxsoCKHdzNs19n2ugZhGjR6BNxNjxxGxQcPpjaTS2gimTgmDwEFbYPbVdH86C7tpUE65ukUR9njexxFbYK5x9Ny",
  "key20": "TVxZA91imuPCtJguVagMrTQS8sNc1i1TX8PvFTRu2tkgXPkDbUagjeSmgffay4kzrhdJyT25ymU9GVNYj9hx1p5",
  "key21": "5pmkMDFhgDpS1guwcSSMhPCnSfA2Ueg6evMceHVUJfo17odNRAD4aoexNyr8WuY2WfD6YED35Fhpp77Tvz9RbpXN",
  "key22": "4nnKPyYcZWfNeU5UAURmRWw4dF8oDXqGKximCyy4WRoTJ4s85nYbkHm4YzKpVU1wFRthY2qLJvpwVFem4W9UYr1V",
  "key23": "569MqLfVpiKmVGPNLFGLVFomB3nhQUHeFzLCcHRB7ywmy8VFsoNvYEUpdfNPZqgoh2PMZfU3uwBvFWbV9bb3ZxD7",
  "key24": "5eiBDkj7K8zjjzoq5cF5XTivtVnPqJa8mpd8ppTAojoCLdS98s7ensU9N1zzya3ewYdUw99EQ5UbzmmxMprJmyu5",
  "key25": "4zSRjGSHGSKAuUpDSpG5WpNhj3nBzLfyPnLTJcisVCPKwqubumWkXFZmmp97Df6G4CYafyLi79NfYtFSUCgCNp3d",
  "key26": "2bKZK4GFp1MrSEsRvBQcjN3ebQmcExDvW53MjXfbHWWcV8HN2aDBFmnFjwDsRbhrVUucDBNBGofi2G8mQvuTA1B",
  "key27": "3USaXLC7Lf23oWq4gksNeEegAZxDz51DNVYTJx8q1odaJsW4dwsgchRr8YJX2J4WSDNkgh2QZLH8BzpgvpJaBAfy",
  "key28": "7t56szsQwmPHyrN57PyPycF9RWRXY3v659N8MauRcW1fXujzsNuYF77mH2pMpFFwJWeuuZ1uXJZPvvSmhYs6q5d",
  "key29": "45pSCR9SV4N9sHkEN4SC1XH2LcBoRFhK2DWbzyyLStFAqmPgxwX4tPYQpxHgK4QLFqPB8TFiCDQKtMPN3fZiScAp",
  "key30": "32uijyQgF7QJhGhW17PPZ3aTMGUn2h9DnyCcz5dyCvELAF6i6gJuX2dvwvG4j2tVxYJZ6XLCn3GnhUJ1eW6XqnHA",
  "key31": "2NfaUY6CmZAbyJAZt1ChAiGN3teLxPMnyivaYp1bWdFj6dXQfWcqxcwe8AD9XPf5gQb6UEJUJfJ99zKUBoYzMNY4",
  "key32": "3CafBJ2K3GqoH8rc8fNzKGsHKQM1fguCBohDh7c5pAooetoXWx4jzB4JRiLEjiXT1UKvxLDVeyVFxSuWq8iWYX93",
  "key33": "5QbTqnx6SnUTJXmVCxLBETLD783ruHX5c6xpxyVdXV1A3uxmgkLmRwdF8YkcJD1mgpdzpGaFp7qaovo3BQ7tngkQ",
  "key34": "3qcso2wKxfry8T8ccsFSWGAF6hAocJTbatntHtpHtg1p4zKAWfCwQNe6FhdjmChZrJxFaf2quseVsQh3hCiPudW4",
  "key35": "635rke5mdHpQwdMjqgh3mZJPkszNSpEdu8rgeiWGwuVS6eEMZArMcNV68y2VQEq95nDAAz7xWUbfrinzXqtFRBfk",
  "key36": "39ptc15TytD387o5VeXh1dMiwHJ3rxb468JB1pfoCDxwZCZ4nvHZGnDDqqRq87eX9GJzFkUY4Tn2VJp4iRFThYg1",
  "key37": "5nSu1gjn3pKWbSqNgHvtq3quFGCmG7PP8nyVHDgY3hvPZJYRoo17Yru2qDJxBv9b7MaxfVZvGGC1JdMiTo2LhX42"
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
