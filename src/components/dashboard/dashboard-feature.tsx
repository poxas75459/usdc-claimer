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
    "iiXxAztq26Js332mcnkBLdpM22qoTAUasD5hWjmYQtZEm6hZw7mwK7Z5nbWP6hrJnGSafxi3xMeftdhA2idUKy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AvGiBQzCDbLSQAUD8kUT4gMi6oriPiDubEYsJkDXdFqCjXiDP2DWkimALLSV2U2ABkmeVof9t5tNh9aF8wrV5KT",
  "key1": "3vvdVb7JHj1iHMf1guXgUow8piQC6xfeX44kAGR56gvEEr7zhuRVeB7svhZLCYfGT2if2wwBnEyb1zFcxgQ4ZVMp",
  "key2": "4f72BXp1DNbKZySWMWFaoGnDM2TduKoXfLaiRx4QmCYcTuU28ioWNJHyXD4Hf4h443wTdqoXmskuCApCsseHHi7p",
  "key3": "2sbzyt5V1kPbRsVdER8S944YwYgE8sWx7qnx7GJqDJJ53zzXeYK8JpXUXxn2DzL6299JUyeMYFtya2Dg6T1FFqiH",
  "key4": "2UMDf4CqaEWTBKV1MQGhrFVfsAMeCGXnjV952s8YKQyB47y93btYTDEyVHNAFNRbyVYyinkd1RjYsnHrexdjXUc8",
  "key5": "62co4sZyfcLa4429npJw66AJLLrp9rtDz7V8JEmF2NkCYP2hpAjSFezkepTijRp3Kh23GSfsjLsqWD8ArGDSUEeM",
  "key6": "57F1XoEqVa6dqznX6VC9eKBcgFqbcyVCkWAcURLKH27YxPWbKFJCYc85P9hNWzEFBL4aDTAkBeAuF9fsS7FBDfXS",
  "key7": "3BXn38hdcosjfFNi7S9HbaikEnJdbeBKHXauUSuzB5b77qyv8W4k63Q4iLSgkbZHNfyC4Z9hW8JzhLfcPowqgzwN",
  "key8": "3quYiZ9u4cyavd79kWM1wEEuX73LmjLts1qfQFijbNmcBwVUrTvzqq7EYmAhrjU1BJcoo3yo5MqDQ5ziKNxxFVXq",
  "key9": "4MqMp7MtYjiC57f6UfjiDFaBbqGUQVVr6B9nRDY8sXYMe3yxHrG4niGXw5Qs2hqAG9dYQDqfhZgMUdsxaV1RcC9s",
  "key10": "4d8xxzR2udLB98zPgXueSLDzjb6fDRbxQBGhw2AmtDUcYVjUwPFW9RTnFbo2eXpEzwTRSdPYwPQueUpMzWTzfH1T",
  "key11": "4RegSXgwxexdMaLgQsf7HZrMDfzHCZQHNdAhC5KupTauSu246i7sZe3ryjWYi1SKTb8J53a9mkh9iKbyJTH4c6uA",
  "key12": "5fx41Ucc7LQDnvEgkQ3PsGEbGMztHyb66gFHRRhfMLxiEMPdrKDC3uacQdmz2qSeM5maDpgqSpRSrfP8gbxHm41B",
  "key13": "662184tfWuwLnnNw5rc2UPxsg1PxSoj6CaCkB5mzVkWx9v7QJTpRJSxRzRfAXtkYeM2EdGtzCowWPkfVJQjsfHyh",
  "key14": "37jE2VVbAzxFieguhURmBx6uv6FMikD4yNHA7okWCD6mxSXz7v2cZoVco3k4KPo2ACTyegqAbZYgV8scS4mbtrB",
  "key15": "4xJKHpX2FUvQd3yBMxMiFtx353X9Gpk2SQroQKcfxm99xrqfzWk1gREcY2Gpu3icL7K3rawhz8XaF2GUXDrdbCV3",
  "key16": "3JVLhgzbCuUW3K7GmdY1uiVHZh38ovAHmhm8NXo4VccHiWFBjcWwZW9cjC2wmRnx3vo1u7y3WFfsf65yGRXfGPKM",
  "key17": "87NBNAwTFUDKrWb3WEmjDBPLA6miFEzjVL5XfXSA6H6U1QE5nvMW8uvcesFRGNoeeiZwVcdTnGooePBhgniiarx",
  "key18": "4E8tNb1DzeRKaWVBfzbfpAbUjFQvFw5eNUrK8W1RtvnNbTDVS8pLZqx9HjPnPk4xJ1KW88HxTXyfLQJwkifSFegX",
  "key19": "3aWQsWG5LSfwrhvBw65KbEGA1R5mGBE3bKzUEPfZL55zFxk2D31K1M9KAy38KjHpB3Qhh5T7FS2W1uSPDzknUE59",
  "key20": "3qdz4LeVkgyXXkJYGZdz78yLPT37m5yQQqHKwS38cQPGqovnosguUf34rJ4Ln4AfcbcqjLhoJ4GfKNriUAEdsmtE",
  "key21": "5R1WkEtLZgbZtbttWiSTxqHWMH5oTAH6QXvQiwxRCN5jdNQ2N97Dnf6nTgxnodHxYtKPNRnX4prjsFne7kCm4KwB",
  "key22": "2T2LFi2dhMnjDNnzwhFbfG1ZuDgi15avbLPNRjbceiPxh5rMLwCNKFEwEo8U8q7nNb9qk7Y3KiR1BM2MG8HGnpqx",
  "key23": "5gMvhWGSBJ7RAvvvYbfztod1sJcZbopGyjhqTWP5m1HEyFkSrZAqbkgdfNf89o4WjhSmx6fDFREBwW17SKmn3MKL",
  "key24": "ckwTatR4noz3dqDq2nqWFhaHgdK5gHZgY5LMpoYs9wA7FgQ6XD9irzh7myuq1LUinQgQnXcLBabu4qPzj1w57qx"
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
