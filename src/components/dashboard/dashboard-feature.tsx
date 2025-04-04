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
    "3a1B36GWyXiBvNaLaGDvzEktWygZivMMvM9HFJYUwWmv9kNbDmhDhAcAScifZHcBUQWTs1cJtX5rASCFZyVF4tfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XT6cyoXb87VvW2KQ4av9qednVirsv5SjYSDvdRyGMBEoquQvr4VKH1gNrnbgC4t6T8Yxx9zFNNLNj6d6Wy1ibZU",
  "key1": "icydxbDpWksN6npJGQeyGK9vfz8fUPu6QaWWV6phbFHYTvkRqDp5s45YXJFAqMn2gHLA99aUZ2TV8wtbDysSdTK",
  "key2": "52qwsCGu5urBznvRZY4fazXnRorcN77yHoBC6iGdVZqfWfKzkxQhzWmJAAuKeSJ7Q8iBxoR3PjSTu2ASxsiftWTn",
  "key3": "3UxGJFVww4krXt2FGzjGLmcirRLvBmdHMGFCjNrg5gxnFjZyuPnD8DZX7Vb7ZwoxXvR6EUDXibsCoaPeojLBP73e",
  "key4": "5qBh4z8ir2HEkMcMnxFuk8B2QKMMZyZ6A8HSqdZGZdnkCbtxNfuqfeZ2wL47j83tKpyQJQdbxwJbY6tDGijoBuQW",
  "key5": "2wbGQGaifoT7SwHeGa4wLhKYEMQ8mBGaTkA4mPCHQFA4mFsYhZ7wTuu8mDtXQjHBixhFcG6dhLJNdftBeTdU1t9U",
  "key6": "4xjz2KmrMnaCQ6rWeFPduroBCgCznBzotgziGaftNPBGvC9akAPibBRXUDpUHuLGpAqXj1GoopHpr1kzvStUPkKj",
  "key7": "53EGGZBXAY4ZHVfhQ4P3es4KGHgfQNuJUBhYeNEuU8jSy8okFJaEB7fv6wryaxR6Taj3D24tLKswLdQ6Y71HKAsX",
  "key8": "zGjFytSvWn7TK99LVRoe4y9KNHExyGxGDjCjHkQbfXVTyhbMdn5cFTUd62cBGWcsqQJSEXWZANxPhvhD4DDjB4T",
  "key9": "31JSzDM8RGFYTgD785EAKhJMqk2zfpr8wqzBjq2SBVuCGiRYV1Q9SNRPEzgzC5G6aU7YX4GBaHenoYcELNokkoqr",
  "key10": "SYeAupN7QJn15fEmgSoD4cGJ6CwpB3MGuySbnP1CHKvCakBzHb15AcoJG5AQRh4eB5WVaCggAirnQrNBd9oMe6Y",
  "key11": "5LCqNGT93N6xUGcWrE8ULPvBczZswFroqFVTpArszfANUp35Rf3GW7sfxz5H5e5ykSUMXAbEp4kWaZrh4ryiz24x",
  "key12": "4DF5roJViD8oTTV4hqxUDvBfPDVdWNRHgJLEut7Zo4gHnq9G6gprXaSsekZipP2NPtxsrTNbZErv22kArNg43ZLA",
  "key13": "5yySFBBCQ5Akn5MeYa4LZf77Xfac5HGqo4eLwR7XnJ8f7abdKZQLJXhNm9EhYM2g5J8aT7uakP5vcyvoDVZgDXQ1",
  "key14": "4Wb1kbjrAJ9QtSB95RL4B5QLYbgBN8P6abdmaW7vyDLuuA8yt6tV8SQ9b7vAkJRAmHjrERufWc3BnUKp2Y3mHGtR",
  "key15": "5DuHzF8Q1KiP48qh8gR8L3f9AymXPx5jAtSdhpbYxri3ZyKX69BtGjM8wbAuGx5rZ21xK7JPYsziG5uxMBtrF3fP",
  "key16": "42DVTGBWJUszRpojhqZJTu9vUPkK19vpXeHp9esQak44QB2nLhcYJF7x1XmT2Ebo3WrGvTcYZxsmmLDcodTm6fMq",
  "key17": "4XmjNe2T9zQLqE21RtwDNCs2pMLMXA3a14towTcqsjmeD8rCbNE2vazx2t1Hmug98h35g76akwhKxL4pvTHTyV5Y",
  "key18": "2LtTQyG2Um3jV6Xafwt3sgkkoGfVzfcp7tD9hJq4zQ2kkke4Q1JYrfKuuMfyCj3bWknbFrh4S6Ng4Jype8yToQBM",
  "key19": "4e1zVaEnGUT9Fyq6xL16MBp4cBSNLjXAgSsH4cT7NTRbj9sAx7LLKEJb6zzrerWcP5xADWgLVs7uk68GJzwxEeSD",
  "key20": "4tE3vbzZRpXBSFzPSfLeGhV7DXkv943c7cZux9SfYpQC7qyNEt13tsXyZ5Nn1UoASM1eneb2XxYh5g3QRmMxbk7o",
  "key21": "2qDKpcKv46XwevNNnaj5yrErgosMRh9tSJ1iVCunMqRbpJaYfhsZa77q9piN7fEwtVmxH8a6syivuxUDRhtY2jq1",
  "key22": "4LHuDZEW642ruB7Xrdopy9w1ratD2JtFLgAXV7mopJRpkrTSkJgfCTcaF364SWZQxpmsaj4bjWKFfN632MzeyLDw",
  "key23": "27HXY5yARCepiUCTxAme1iDcPdLo41D1uDrpoF78nHxYVgPopNqCESQ4QgjGa5odzyy9PXVqdCuiJBbGdXzVMmRL",
  "key24": "5UVdTKV39kPt3JXb4AQXotcKGVJyXvV7W2Thkhv48RcmqPqyRjsu4qLhEJ7U4mxqmHf7dsrxmmTmT184WXQPq6Tt"
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
