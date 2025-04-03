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
    "4VQ3WFBH2wMBVKjFoRewFWb6qmEhiYV9ykSPiJKEp7ERPVpwoQsLfW3Soj7P9FZhke2V2nt2yt7mGX5Wj4463eGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMcdfyiyek7oTEKWTWuqmzSgecqq5CBGzPyHpqBbuPSprYUhzdqf4NaH69di2ZS5qJckC2QPpPCR7BVyaPRLyF7",
  "key1": "366DM9jfBpRk5m3PfiNu1LPQw8UZAHHALWrj5HsGug4bxAmJ9ujpi8zMRxVWXkGjJdixDqa27FhQGUVBUx37eCL9",
  "key2": "3geC34dYKcP31oiA4NMNRzuDCW6HRZmrSB9XkzdUpXECU9pcqZ1KbpdLbGgnwS41nMtQrtAbwzAp2S2bHx43x48D",
  "key3": "4PjhDutzcw7iV6FATexzMSUcdZxRdSGrx8Mhvtg4cTmt5yM21qPQnm4DxC2QSjRdW2iA8MPECKwXEJrs8WCkpj9S",
  "key4": "4WRNmRZwvpr1HuVH6d9zKXY8CqaMNb12Hoj56T6CKmRZxVLEVb5oErWLxwhck8HmWaC5njERoTyU22pu17A51nec",
  "key5": "3gRckpvMhnGD1dVvLAQpZ1YZWXe3CWq3BY4rxmENHTVHvKQGaFYuaYXYwvYMU6cQkYDZm6ubcK3rhgiz5ZJkABEd",
  "key6": "2AWX8X3FaYNg5Ln2NZHcjh3dyLoN8nAjW81kotUsfgbgeBBM7sszzq2AakPa78Rucio1Ze3xmQxHmdKAZo2N2BVF",
  "key7": "4wFhjvGCkgCu8pVoq2Ns4yYqqbX3Dv55G4ViozahCkYD7Mhx5FAYCc3TbVGmfapNWyGJTDbrSBA5qMKKkGir33zw",
  "key8": "29dsiqEmfMDo7R7uv9kx6j52fV5jxCLpfR8UWdKzywmVR9nDLHuYxvxCCkuaqrQWazqgZm2tkrtpirrCeL833heV",
  "key9": "27K45f4iwubm2i3zMzuQoiW5Xf8V5gt7mhZYATfk7gyCLrbB7S3jejTt1HzoSDfxAswfTYt2tWPFuGCrq1a2BA7P",
  "key10": "4aiyudtvuXfw37bT8QXjxH9p6opBL4fs38F2DyoFU6kw8jxvc9o5XRNJAr3zcBJrcptoRxRkgaUJmBpcZpSXrSaG",
  "key11": "4nEBWEKw5pFZvN3C6oJFVgAM65xdFNBbzhKjsi1Z77G7vDmvtHewUhCf4vzHnrbkhqgfrvM4BVHjhuABSUHRDqpP",
  "key12": "48hURTrR7TST8jgHeb4NX4PDcZ1dxkAnvht8gZC5CqLoCAC9VpsWJJx5vukiUwCFKJgW8uZbrGxRZkx64YLBVbuc",
  "key13": "3jsT58rFCLqobCbSWe8AWYLeLM86m75Lkh2YV751N6dSZrKsXuhtbEDnLv3Cn3NCWsvGcG9wK4SHd38AyvHT6K8W",
  "key14": "5mC6qQav7gD1CYuYguRAoKeJbrW1xR1ZVnYbL89at8qXJYMggNZWe2JJydeA8hwRyia5aodR9jKBDFViwNU754vL",
  "key15": "2LfAKYf2HYriqXndccjdAYuLuiyP7j7HUJsTkaRfGzaUjTa2BmJedS3xUfHy4CoSQMhwkh5BFSMXp4g3LjnzkVbb",
  "key16": "3sVnt9CtvKvfbnPCgmvdExybXGBk5vYmZ3pU5H1sRp55GAzJsko68b2SKyYuPRgdHjp6eHWUfGQkkTgpUBT343EG",
  "key17": "uJvzKNMVftm2DSEzF7TsbpY2zMEz6Qd3zMFt6aqhbZi4y8nqDo1JNJi46TUZ9x9JhkwMz2fwKSidfVxfA8ShBTC",
  "key18": "4635czhqt8Rj92878Ywn86ho3DDF3ozSHfckoUcjQi7ozduTogxrK9BjyK5Nby7LczFNBZei8Auu8w1XZCP166db",
  "key19": "316Z1fm4YaPoUe6BEd6E3qW8CRr42UUYtiPTR1aRZaejYwEjWyVi4LeDkVYAwq2iY2JVcRMXi6tUHL5kz3dBhgHA",
  "key20": "2DyExs2HfTaGZmYGFh5XzaVGREghhmKdHkP358X4RgkYRfJqmkaR2aS2uSKtSt4UTVcbBwtYVdvvzuSJLTPCPfDB",
  "key21": "4CAi1xaEzUwkD7hrhjBHdocKtAreEqQa57RKBjnh9ZFaB5BiTuxzjTAeKwp6cD6UjHotAUza2X9R6eqovGDkUxY7",
  "key22": "2j4PhRLhUzjZVypXGpwDTeafgqCGaRnYuBxubMQMZctmrRzPWvNztnitiqjEp7Dq4FxAKSAJXukPHDosda4A76Hs",
  "key23": "3QovQ6var5RTy9yZDh16UyyUW1S2sT4KF7ZesdR5bVcDw5nur42pT9fNZYTgrfyn7KvUVtxsESvzGuRAwjTkZvbk",
  "key24": "4syveqBmE4DN27ZpCfXETgc65MFXdT9dc96tKa7C6Ek3w9cfaARLWTVyw37AzDrH8bZvmyExgd5kLnt3u61UzVbW",
  "key25": "5wUqJJBhWUb76KQshEJhcHQhDUxK49W5NZreoTHdgitHAsiQh6SufLg9TPycxur3mnAHo9Q73dk51cjAhks7bW9q",
  "key26": "3qDfubnvdEEEwu8x851B8XkcjX3vedmaZ4nTgY4VS6QiUvykQ4LFSBYNKDaHQPJViP4H6VVpg7CEhJ2sby8CoGrX",
  "key27": "4L45SoxWywEFwygGYKDjkdJRmZmCp1jbnGA7T4QBUA93qFYwjXxZiWdMQZtERVem2ZmXxUDUNVsmRsU8TRypMS9g",
  "key28": "Yg7K81Z3RRsXa1wQBkuUS2fhc6MZhguS9ZZH9wvmuBsgjRDkBjhnLKn1XmAUZhnUzrfn8ErY1FPQ8sr5peAv7Zn"
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
