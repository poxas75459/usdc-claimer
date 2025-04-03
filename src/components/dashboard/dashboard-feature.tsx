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
    "5AXwBym5pzmJAdqZWJBLU6W8KMHNoKkaPAbbnG99yUhCzxaMTtbR3scck3KFywwsMbp6RooSB9nMsoHeVKUXR3vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XKkBqCWG9dpLCm7K3RN5zRctKfi8W7teD2joEYc32ttTiGm6cbunDmG3ttdwJBAt5QtugZ7AQUeU4H36oWUYuEM",
  "key1": "3WXgYho4JhP7MSbRZyeochAvQBc4ebJbtCjYPA1fDZ2MJSjKnJYYgRuvorej4MXiDRzdhn9rfcZ4qHqWZoaDQi85",
  "key2": "5ZKQAt4scxdP7Xq2x6SGayKzRStWoAXMe5JdHeUKCdkkTuWtgBGFd3f6xstbUPb2MA6jTq5xqqcFoAZtQX3H4BRk",
  "key3": "49bZqqgx2VRdqMyivRcfrGDtYsAgubs2PEQH75WmJ9fxcgQNMeqAEXVZVNf63aLXj2GEpnxy1HRk1UkWDHdMe8HP",
  "key4": "3KgQ5RtCiegS4du7nn5XwPTMEvNngSuzmcD6AbGAxeYDqFB6JDGdSdsu49X8YE8Ax7G1AoRdqZv43C96LKFGd2k4",
  "key5": "5nDUetjSLFKwjpwgWETsWp8GzpW4MjmgTZpiNVTbuz4KCvfnPXv9MxB5giPHWUrg7txLjZpQiKGb4qcq1CF9qFAd",
  "key6": "4s7attwgoGF3LqqjxohCmLgs35NFZNvibwQTQNYVFtCXTqKS3Vm6e3Gd1inokf7pyFFmeZyEb4wGMjESAw3qLiK6",
  "key7": "2uHRBSvLC7ZzL51G6MKgpeMfNTuAM22RYdM1vPqKujp4phSYNTjPxHwV3uncynh4HUisvY2KSxLqejzAH2Yoot6Q",
  "key8": "3okrhCwGr6WQNqYPQfZKvqTCV9sWcRjhQ8hBU5ogy3vVF9pQTDbHTM9ZQqgaxDPoDMMpV55SfkDoXTQfjn97mk4o",
  "key9": "66LDh6LQGDSp5hFp4GC7aNYJw8kP4uFM8yPVSCAbaUEZ19SCj4J1AiscdmPJLqjUbSjyd1QXocM2wNNaoSdnkdaq",
  "key10": "35M9uvX9pGLcV8ipHf7sRSNabxBirskDbRf4aQX3PbnsSV8GZEJGc8AVaJMZY4gvT5PuJqrPGXAAAik7o17BBKro",
  "key11": "5H85y5oh465hK3cmo7forfGzz9CbeXMGkwgWcA9NCSE4ZHDz2pBBVj8iwhwzdS6wfATUQZxrnKVbubQhS7DQxjkc",
  "key12": "e3BUggZomX5rD85odfN3jhEfaadPCbzs4uirC4T6zR7jgg43q4Wm8XM7MEbTnfZwshokC9m3QXUNpARqtAJeGJw",
  "key13": "3XZHzv5p2EAUKCFEKg2gvHcoFGqHUPaD7BxC8xyMXNq9S2AiSMKk1GvrZoDroeN95YJvzQYpMx7U1kDMo6RtaZN3",
  "key14": "2JMkWouaVWQzMLamUwPszvzuqQS1ZMRUZrmVDRrDc5juhEmR17evoV6hmtVZm3G58PnnZ5UGhm74aPAXKqKq94Fh",
  "key15": "5axdhEXoW9LZ26HKwtJu6yZAnJTG24Z6LzQmEcvPCNUrm4Q9j2vRP1kuqNZxqkKu568roYv6iJ3eEbFV8E3o8vw3",
  "key16": "513hvpzcyfJfoHdx8ruJgszPvNrDwTJAg4NQ9aAY3HNm3GarY1EoG5qb5jhu8MvG3z7B8qRyw6vtaA5P4MYagDFs",
  "key17": "3np3dVBW22P1HUCQYAFoX893ook9Awt3TiLy6BTYFazPEiWR6VhevicTkwL2mkXEqX9Zh9uqkTroqg1homfh5bPD",
  "key18": "3znNtqA7bFinQbBECp4JZhpeTahgachPkYtVz8NW7zVDrXxsqEKTmE7V2jw94AoAsV1HKPBjhBXtnm3jqEQjx9Bo",
  "key19": "5G8FsNUaVCrJyQTsLaebViEufWBx7K776s2ozK2NCP2pTvjP6F5xaJJbPiJxACTifgTyqESnW55hKVAq4V2xJ29K",
  "key20": "3EXEowcQi3hVUPi9TAYdoMNq4gAD2ES3cNtYayyK8yfctoyn5NtVSCeHWy9Jg164os6jwDKZ1w4yTWGkUoPmuVyU",
  "key21": "4RKyCyySmPB7UxJTsN74xHW4Agmj2ScN9qzzSrzpkVQyn7B9ruFW153zshJveLBbMmsRX8C1XSF3shxZcA5ULnfy",
  "key22": "4zxmXirg5nYWCvP426YqAMqJfvhnpT2ggmNHcAfkBFza3BMpy5oN92nRHS3s5J4UruWD1jrYe3hghuMdf6m4ArV8",
  "key23": "hHuBR1kqkBvUeULq8R78rU7dyQjS6zZXKt4Zyq6Jso39LCNYxNXByJNbCmYDPnVm91qzYaam4t8wfu3WvSKrnen",
  "key24": "5mq74C8bVE4Ccgsf62qzURFDtpzer9FWAHjaXECKTveazUiT8EMAfNXNATkKEWHG5or8Kgd5ji2nBKpE4uJ4kgRz",
  "key25": "286WudMV8UKHZS5s4dbHTYoM8n5BsfkmCQfhsjdSzdBgBUwfpdGf4MEBFnZrbVWCWJU9tZpNprK1HNndeXGLuW9K"
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
