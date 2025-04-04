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
    "4sveHmHcwXFWQWvXzL2fTNYpksgJ9LWz5KE1s579rHwF683cxQPEVV5ZLAtBAZL1WG4sWCDEBxg19KwHtoLSFPyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rj6Y5PJPa26o9SQRSQ4fxNERvwzJsF81Veuyk7MsVqhWi1dzdXB2Y7o4oNob8od61P5Cobsoe8HZNYAG6vCEPpt",
  "key1": "63iJRA2qrBeA7T29kN4FBBP64om3ML7G6zE5Cw58HPainNqYyybGVFaCYSSwnXM4hPVV8JGQxMGPbwB2DRdPeNJr",
  "key2": "pgbYKCuc3sv6toaqFeQguJfUznAqP1Cwm3xyv2889WKARRZdA3oXMEZP4TjWGtvn9doEgw3cHxvfvBeiNZSqYER",
  "key3": "5A8m34x1Nc1T2SJkxwhvEbpkH8Gh4cxTFo7ZSM5uZaVinrThsdMAeb29cPpYiLCHsPv4Sqs6MLMHR3duMcR2NojL",
  "key4": "2qyrExtZ9cYJkfr84cs4RjrZBNA7muEKuTKb435TzqHAqboS3MjTWz3WRd2UfjW673Jw2RwYv9UWvGatWT4Fio6Y",
  "key5": "B15PLjUDtJ2BLN348MwUKtCB3JNPDnCXv3NQBSetD2Rakd7rRN95o1kpUCuigJxN1Ptt4RyTFdNTnvfEp1Vy6hB",
  "key6": "Jfju9efX3bBUy5W16ttoGN6UVQyiQJ9647rGtNom1sR4zfWMK99NefT9wm6zXmkfXhRzz4jvAtRponW6sSouhgw",
  "key7": "5d6ySpCjytf6kPkKF2eYsr8Uk5L5b1rP1QEPZGrAkzVrECRnKt8crr9w2dhRhu2zALHJy3AMvHQu1cnxHJkur6Eb",
  "key8": "4dkywGCFVqLvsMeF9oXcqRuspgYR5X2dKWQdFfJK8NGVD9uWtNP4xHj9dnMeu27g6BRH8eASYuYwuaGLz5YZ65wH",
  "key9": "23w63eTdFNvSRX2K2C5cQ2RLkg4jDshQuwPULhKiBc4nTXYtoMutHJLbkMVBnN7PQyLEeHjeVvobpizTBGNdRfAz",
  "key10": "4zMZsjvbWfViKNY2vCyGQgVojb23pWb22jCH5gGHULhET5U3Hn27G499ZM9ug81NJcFMfZfcZeg7e1hfUW1pu2kz",
  "key11": "2jKp2dv79QD4h2o2aX9SpxaKLWmDd6xh8J1TM9SFbvnEeoeKJAkxG5FkBMUiVF28us9UvYU669oDFtAcJNfEGSN6",
  "key12": "3xALdtQLUjH4nFNtbyHaCQyLWvShhLmBdYRJdrvKfHKQKDZkfih5q3J5nkFAFtueFAnzJzbKkB9CQ25LSfyAxtgn",
  "key13": "5uuHoYpA93d46EUaozC1FhuQSSXUNNjK7sfLYuRfq929p4FfP1QiSEbB6B5G48KeNwV5ZP4MSxDXTJFiUWYZD3Cc",
  "key14": "34brvD2RaAU9gBkW1SSxrpWLoHhrC3eic7J3Q8ocLmKyBCRPsd5KKhcZHtu6Z4xkRmQYk5vzShy6gzXTj2KfBNwj",
  "key15": "43GLa31Xrp512UVQieoB4svciMJF5QtMTHUgC3JHbnvL7xKwCQH1GzgZWmMHi6YKwdrpwP6PcMH47nr8Yotmhwtn",
  "key16": "4XmuwJbybsve2quz6QsY8PJNBfAgmHmUxjVst8Cu73K5ZSStET9X9EqWDZgZkG3pBj1NcEmvoNBXg9eeHRiScAxg",
  "key17": "3GAUnJteozveVras8SPWRgiqS8PGpMmcGhkrd4X6AniJBB6JuCDu4KcJyKXPNrStMWh9N9vqBh3WmQ4e9eB1W7op",
  "key18": "4QGKkQdJUsHzMTfsuBVHzaV5dqz4SLugFJL1GTRcc4HiKqmyKgimR8MkTLryj9MkWzazCpgATETSjEKGHvJD7v1k",
  "key19": "2fVvNZt6gAZ5XMLfYriUugq4YhijGVhWCr5PWxkoH9fhAZJkJDGBsVEsr7WajxFQDzoMUNByhuv17X8fcur3SMEp",
  "key20": "426Gxb6ihVH3ePuyfErF1fAX7FRmeQgJnUKYtafTiPbbHf3wq59hRVvc6rQ6majHgMF8MDKbdS6U2Jed2uQ9HW4t",
  "key21": "2kFSXLsy5o2XUwkZQ1zYb2vQ5m6jXXpNAH3HvhP419wv62gdXiqjesqgtJijpAwDtZjcNTFJ31UodomWBeAhhefk",
  "key22": "5CTqHHPrsUjqfk2EzeJRRtTLnnH9NUx5bRfAPQo6zYRaESMowqpjB8TzfF9DwdxuMXd9zeitXKRwvac57JuDBir6",
  "key23": "hxNyPuj1XmqZGbhg81LkvGKWd3nPT2MFzbpJdSDu3e2UMErmX1MxWVQzxMSbhwwqy9pfBGMUK1DLB4XwfUJzCuv",
  "key24": "3yxFXYmwL7jJxFq1fe8DeHejvtLd8gVWjVg8HyoH4nzsN1AC4A1V2vvNX5dWP5YzQBEAV2yWeyT2CmZJKErDRwNA",
  "key25": "dFqFTq3SEpV439FAVnyrRciUgx1uqJrujHPbBeFNqa2G8zTZNPDrXLbVGfQxFr5MBgkZkW7bkk18uDc9SESPzhh",
  "key26": "4bRsgakgvhbr6qSRwQi1L8mjYCQGjRyicFkMTB16fZGagcSyUmbaWmdK94G5vjr9CXZ14uJeeZwbkyc6LfGQot9Q",
  "key27": "2SHXvzMSHDL8BULMGSVVfet5KcQErh1gWWJwiCR327cqfFxWT9hC2kWKBpUT6LbV29hZpcFgAiHqsDwERSXNYPUu",
  "key28": "51Lh2uYMb5Xjq2o4CgvBTUowAPCfC5W3yCYqJnaKVesEXHuU8Tp633GHGhCARzbo6JqUnkSQsqBUnGHLHeZJXBLP"
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
