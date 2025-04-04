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
    "28vd2kZS9nB8Zu211C4mjsgiTnAV3zjcq5X96D8uVBYF9evGZvcydacYuamevDNE2hA42uZ2Kx3gCB5H64tZV3gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JsLzV8X4w1temh8LdMxpLXhJWoydKqUdzNuTZHEGkW26Eccds7NSvdFmae321FbLe32DjYUMsDpsta74TdamtFb",
  "key1": "3CLSWQ4D5HvRAA5D7zdGdiG4G36NmbJKyiBiTvAUC1BBcaJfviBXusYtSWeDgjnuzjfxUeqPtnaFmD4MLzBYPKuC",
  "key2": "4sGM5RaQHTHAFeh95261CnsMkqwonbFvM35fw1LXGtVc1w7BqRb6AWyEdqhxQAJ2tW8vkzsuxNkzEmmQQmPgxEZ7",
  "key3": "5xrxHd2thTisibE7U3usLdggw8LMuJefkyzZ6hSivht4NdkgpyXsW6btS8vVJq1afk8cW1j79hvyTCHbDmKTPKvA",
  "key4": "sqm62c6hbWsjr48M9qFdEU4PVmNG1q4AXG8kNRRQ3ZCxC3v7QkfAKpfTCwVyAvB6MTwiRDbgCWd5jxZMcAg6YMT",
  "key5": "3r4RPxPDcUid66gf2ovnuzMrg6x72z1v7iuA4LnHoL3CvWvVSGwqN6LMmRY9UpDBs4tnjX2sK38ZNTT3SxRqrh89",
  "key6": "2PpVAedteSLkGZZz8U2BQeobcypoKBtzvoqUKpcEgVKSexCH38aY8JdrrZVAMYG4uqnLcExa5v1ErkuXgSjGZXTC",
  "key7": "4apUbZARx9RPJEhA9q5APvHCZxPu4cD6aA4F87xwGmFSxrfZxojLNz1vpfKyN7EmXMvgw7o8LZR1rbbsyPtEKo4b",
  "key8": "2poiQhtcmp1Pf2WXutbV6DsWxAGmQJtYeXpZtRGLUGWCBxr1Ym76bq37321JiChWixk2yHGsmjZmx6qF4B5L1ctr",
  "key9": "3Bvw4hTownD9NSahBuMpfu9aiwWwTjAazMU9ceDTHQe86qXg9tK53wgEQkj7cEamoLkMRXmG4eKh4nmWWF1qCUaX",
  "key10": "2kLFLcvEwbyC9sFpze2a6JxfGbEmeP1Zt9eyvvUSuXbadFRgMgiw8jfyMFJSuELbdkZmbhHC3cXc1PLSUpXQeNQG",
  "key11": "2Q27AphepJyRXwwsyTAbx6NSzCbnjwjHmJNvN2kB7WTFxHCCrbYfxjPVHrM861TfLudv7f1Psucrtf96tA5iBEKv",
  "key12": "2AQqKn1CTnzVpTZGeDzhxXUg6BRg1qHKAkt8TAsXETqwmwEWS5spREn8u5ycLUda52MhqGHxxnysC9ABftyLQkch",
  "key13": "5r6mgyAc8KDh6LfrH3CeWgNpJGfgspUD7UeFPUeJtSEBspvkkw5ELPc1s9E8cPhGTq9JksaQSE2mFrtLCF3nbYQV",
  "key14": "3hmMHkXeD1kWniN9hySuLRUHQ58JTBJLEqihA8Nr5UxwSzstev8Tm1zkdcqYjQtbj2EkFX63Mqz4vxkmq2jZmwDy",
  "key15": "3oRjc3yCJm4w5MpxZV2bUQ2Bn46LaiYk4EtbRKo7eyhGBVPHti1LRBAhs7nNtwz6LzgjTWwzRiuzSetNLT7Yx3J2",
  "key16": "33pqfQCHDcqek2iq6QKNfJZ1KCy2nJ6r6por842k3TE2FPRsUNB6M3VsaiZRytU7mP6YWVA1JjYYTD4YTemWj11B",
  "key17": "Dte5xmrEABEo57fKTcRM5mbgjDJLCi8aC5PcDbQxUbPx8VhHvgjUhdM7dTXGKMgZYsgyfUZcuXFw7btf5px5SBF",
  "key18": "4DvTEXgpz1wic41us4uPTCWYKgb4XgUnvTtN3prRYARPjZqWDfQiMjm9xLjcA6FjwPshiGun4E6i7khCqn3CEJdC",
  "key19": "3JRCR79FaPA7bABWRYeBaZ5MjtUaSZwx1sy1W5aapgKKkCSHRXWm7LAHcdWT8dHjkVyuBPbxpgtpmPHKoNWt8xRY",
  "key20": "2NmDYoUVC6tgiEmkvLKwo8UNQg7qDQ94WvXx4GvzYqXiWheU4pzotVPdTq6zZBXU4a5yjhzVrERH56QkBouQBEjL",
  "key21": "2TJ428J2CJpT5AddaxtgF7jdZTC6gy1dHXWxFkZxyVc2uG6teAehjhuQzFCDM1pEq5hE1NWutPy8qx7Xqj1SVTv",
  "key22": "2atvsynagDJv5auGvzDTQJufHo8phiMJhesoW2bYiCMNZVZsP2fK1anontWzQjnKsMCL5FEN9Nd5HTHKN4EqHdTq",
  "key23": "46mxQetk3D1PH6eDhpJN3LJJNyWppY13W4XXd3frQGhqvMhFsGRnYgAp5tVT6bjmRWMXZC8TVQxYe6mCbEUmV7KP",
  "key24": "4n5i7ZRoopxFEUv6NXtRz3uusQ57QsaBWdpDcBNpLJjU81bH9cS2TGzvV93pFW2ALFKEMVxkyjqWgEVVmRXGsrEu",
  "key25": "5GpRcSxDnAjLRT9FFDwt9dYL3zxQXbZNu8MQCaWrM9LjyFbdrtVZpKKShDCnvz7RsED8pQPP3JyekT2EoE1yjhtt",
  "key26": "dc5Eq4qp3fda3t3mXP1CeoYz6SRKwJDKgQT1Myd8gfH1pP29wMhYNirhB3tbSff3Gw9whcYHzF5ZofR7oh3MUZj"
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
