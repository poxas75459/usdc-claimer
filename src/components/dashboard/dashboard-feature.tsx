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
    "HFQCUKbmdqtpQK6QRKFsFD1txBaoaLWWXk4FFRjn7XiBa8wi9qe528iXoanjFq4r46kwXLfcU8rE5GvADsWeHpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pj2f1f7QH2Rf5Ueh65Ls7LSBtxhvbwz71EojiVdH5JkncqDpzhVoVpkUCUpsqhuBpjBpUGMxxUHeHbKUGEMpJLy",
  "key1": "4E9BM43m2FDSKRpABBC4zGPbTDT2AgKDi71SZXHBNekpaLPGzwzq1MUsHRMTWMFiU39rV4rqMaa81JhyXAF1BpqF",
  "key2": "3VWJkxqXfTYG9btg4vaNB36bgujLc4wPNDiziZ2ZVh2puZ9KvmRmWP6YQdvuq3QazEvCJRWeGEd9Wpw1QthUDk7B",
  "key3": "3f7mnSPCgfymgzGNiNsmbGR522acQEiP8xTazmkczmu9nT2CZXbtCPi9Q4ViuedQo8Bipksr18oqc8NrhKgkJuZb",
  "key4": "54XXkCGMsAzz1WQJY43DtSHNd9zU9owCwLNC31PMbQ7u9vpSqF4dvhJiVSnrjG7GHW9tCgC8iZEnr9kjXDw7dJx4",
  "key5": "3arYHVLX6u4zhTrXTypyHzFrUp52nLfLUKZj7aJ2p5NK7KgrJoCW5BFRnbQLFYytELtVWWX3Njm3UhMiJhk2fneQ",
  "key6": "2dPJywYhPvJj1hqjTZ7VievKiYZ4aHeiivZB2PwkMraZBSHLhxu9zt1B5j6zgzTFwW7UbSrCy5BmiAJYEu57paQz",
  "key7": "2hDsLLBsJWvBbpxFkQdjx3ehipZrqETTz4Ax243gdHsDe5XvUhJxMbAnELLHABC2DxCrb3hB8zcK4LzbYvjXNTFy",
  "key8": "2C9zsHQj42a1ywNNiHk4LRmmZsVmxBEnvvJN1GSPJHkn3CvQtq1D8gWPg978QqhWFdDtry8FXiXHzvt86QNKHcK4",
  "key9": "3j9Z4qRDHuAkmCCSSHqcSTTAAy2KN5gMjWTJEjnmdeLPxmULTYQBhEMtm9nyAgUoLavK2NZzf8ehk8WUD7eAv8hr",
  "key10": "4J5TuWPoDNKiEUBje4SG49saa6KLLPtEwK2umhdKEeiUSSfVtddcPfckvr71hcqBJgQZcNKQYFHcFcVwiWPoYSmi",
  "key11": "4u7yoJokoneSD52wQnLrsYfH9Bh6dL8zzognR1uv7strXU3iJotBoBfLKqeQE7mjSbV38r3ywtWvt1i4ZyQSk9oL",
  "key12": "3WLxX2zv1jAqvtopxs3FkJYdfxGLht9fxTkmzqfUACaqHouS87Rpv9krTaXSSmfowSCRBgY2NxpdZq1pyXhxbWpc",
  "key13": "4kCa8xdBNLmw6nPySjtSCM6ztsRh6dv2LHtYqznAVQnSr8wqiYdjgUZz6MEkHpM587mQwAs4KKk2KAYq9DzBQmQf",
  "key14": "2g9pyV9gBciNVF5xPcBpko1RMpPgMJZbccqgJ5jFteare21w4HLen2pNGY3LYU2ZUMzjd4WPNBxVHnGCw97Zm5WX",
  "key15": "5e4CJS9NpXw859FS71DrxFY1FGH2rKXs4ybrM69nDDFMD5w9dnVdtmYRoba35buEc8aqHvSYLucCQdJtJ1r1uV17",
  "key16": "3w8Piwg9p7zvzy3JVDyjAATWi8sTyhv8ahastgJbSqyHg1dV4pxNYQ3WyfSs7mmk2aAoVNBaoJGBHUJq9QT7qXiW",
  "key17": "4hioMWne4mr2JEJRDEcHXeo9rNa9Ei5cx5BQfvgioTCfX94NhYzwscCZ9v3ocR2qaijowkEXboQsNYkYR6CiYinX",
  "key18": "2wyLhPKi85WT8QLHAsaFxC8WaD4kAhnMBJEiFWRDph1BfnbKeQyjSWy6GHc71jY7EKagg9se9HQsj6uaDUY7prgM",
  "key19": "okQSUtaNnCV6bdduiKuRn7MY1zHXBnqSG8TTjpQDNjzpZ5YaPiKPJ4TDpaQ7wKYhXyqqN3gaCKmwqn1RSNXjWjE",
  "key20": "4pkALaauda4Rp47gmZqYnan3vV4byrB349t1gRTNe9seeJSXeD1Tvo9VrKtehPHCVARNZqrvRtT7a3E4En9FYsWm",
  "key21": "2xf5WnrRwytZnRdratjhzEnTAorgyGnNVw9w2mpuuXXHUNoVhtgN838qpY5D5S3MytZzgjp3SSJQ17KMKTDMRhYm",
  "key22": "4qvuwM94xjBGcTfNdoGymwytC4GnfWDz2A8KJcfwnvzzciTZfu6rDV3vwpvcsdUwgT3s3LeJuiyPQz88mYbKqGUa",
  "key23": "2HFuXAqnsiJR21K2UK1uJ9A5hVqpJTZ81EUfvdGSwNmeznZgsv7488qhdYduP7PZrzvF9A4tHdCUtdX6RqXk5cuU",
  "key24": "3UNdJxS6kFijr1m1fQvhmroKK2Rpmkwmr2wE7J6d1CWa5fAkoXjNFUXdGpukWhaPckXw27r4EKtTHizanAxSkV8C",
  "key25": "eiHjPDuX7dz8GFendVPcKPj4D5TECLKjyFEnQtPeSoAG2u79LTZJMRxYFWzh28ytGZR3BUW841bUAygzGfGGH8S"
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
