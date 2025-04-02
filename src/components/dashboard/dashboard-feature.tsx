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
    "5nvrbidxwbg64s3HHrLmbL73KrJ8NgsM8oWKTc56NQA2yhMugJShDJ24eQmjWck8tQ7yQgLXhRn55CF3MiKaUi2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H96z6zzqVkepRgpjwfWonJx3Dm7xtJEKNJmsGXAdKXQf1Dn5mF8TDuU6rQwhK8Uk3jEneXnAEAsZ9a21tE652yR",
  "key1": "3fbX2xrwNf5JzhHRENChFADZuxme8WeErUy8xv88Ky4HNUEy4KMY1SUshK5HFFksLFvB87KyBMsAqko1MFs5WmLi",
  "key2": "4zaz6PUUYXrPi7k6BJeXsn6EDpsU885vKypJBfMqaoQekE7J42QXQ4wWiYnkZqfCY6WV4QXHzLHAzkZSFR5W2geu",
  "key3": "5FyivnyrSTdM5kZoDoiXQfKVBAoFJGs7oWTV82qhWrj1PioSx2yvNXwJFcHSDDmr4cT35twGtGCgUTS5fVWQYqLT",
  "key4": "WjqPMumy5WcaqwCdXZf7hHg9YPDax4hHFJfLRKpNkkyQyUm6NQF9PzUYFcx7NokDfkPF4q9NLTGqNNE8RkbxHmx",
  "key5": "5h8UeRGj9rmXs9aoh5uKg8PDdUXd5rS2Xzvd6xdHi5BZjPrdHfh3rQf5vdE9DwPrFnYe8wgPTPUmAaMxFWy9vVpd",
  "key6": "5zmprEQgQYg8fNMK9QfAZMWimZ9Rifwp2ACJNcHYUrC2DzbRuRimzLwLkPyo9Y3PHJonPNrNcG1TMN5UpV5EkP6H",
  "key7": "vUHttoPwgMuSd6Zk5Lre9T5iVu79hBhGPCLqqHUE9HTxKL5bGghxp5VDtf7dMtYjptQUNaFvaad7nzD2sTceXGL",
  "key8": "4j4CSxGiW3Ho5ZzZQK87MmqonjGoBk6sG2UHWHDwL4TxtDAHxKUaEeqarRowpNRt9yF1CQn5VUdZh57vKhJEm3EJ",
  "key9": "2LbJi4MF1hWV8ryKQpt41kaCtFvk97QfEDbbzGP4yHPEVBdqEepPZCbfJfFikawM3MNDALntGNmaNMwSYFcy4pRC",
  "key10": "2yZv1CuisxmaZhuddYHz5RmrPYkxmCqpiiY42efQdPAMXoqAW2sgUijSXTzHmZQekWo36SfRLJqUT9ttCxyA2kcS",
  "key11": "4UQxfbBDt3AaJeJ6myP7AEDQnkWdaQWqVorFM3RdgAru9ppUbJoeG4U26g6gwfLc8xypEDgWwZgEhUAGgefbCQSc",
  "key12": "34V1cSpYKwZ9r8uETCUhhKJX1UE6eGa8AdbSZqHKWtKAFcQpdq2uGava2LKZLfrUaN9NEhWmCw2UDK44mJuPog9L",
  "key13": "2LWcdf5jEWFqVbbEX1Y9te8Fv2NA1KKHN3bDvfbgXWNNimqwSFyUrEpMJ1cVDALJe5GySNBJV9feijwF9kt469x6",
  "key14": "3mMQwTpcBdgWxk9YXrNwLvQVeDpvR3ENn1DP9SAQ3Snk7e4Arwf3MFrSta6DfhvSffWhv6yftKrZAtppHGa3W8g1",
  "key15": "4Lk6Qcai9oWJqLbbdkpDCutbXdw1heM9FmK8nRWPQrYiAUhqY974SgsZe6V9B1sAsZzgxi2WwbrB3zyyE7CW5Ghe",
  "key16": "61Za331SsYqFAGe5Mz14Gv29CHzUjq2zLubak1v6YANDGvS912fxh7RYBDXvv4JNuh3No68tC541sPYgtbCk83hj",
  "key17": "3d9CfwLwqF2o2sxUYtjnZJkHmHfTYEyUKYYohwA3vFATzhhhc1ixuyWR5u9c9LEXX3Xyz5H71beCxRzndPiSRqQg",
  "key18": "3Ri4Cp8mKNFAVVAaKUVKs8RTm1ijD3Mw4PsQEdk9S6pnemPQakXGuEZ6kfF7MUqgZiL3k2bZgJ4bGX2xYvswiBJj",
  "key19": "48toMi9uCNhBJhHVdVwbwec97Twv1WXBBx7AgN2f26nxMTS8tBcFcmDmaqBwvq4gyqxDUhWjnEvy4gezhxgCMZHE",
  "key20": "GH7wagjAykLUUGU4AJsoc5BRqzdEGZxBrrHDaQQqpsMWUSEKrMRuAy6j2evv1p7iWQfgFsQz4tUkUPvaMXXsayg",
  "key21": "3WvV3UDjRPZF73c8VvdCjfQrrAdgg7SpkMtH2F2Ptv3ZCp3H7rfeLETHn6i8oNp6wM1BjTwHQE23wtz86MTNPya9",
  "key22": "4XmAVhKEiWL2TpbDvkypFZ9L3tMGrACQ8KqYqyWxN5XVjfj1Hed2rqf4ytYoz8fSpt5yaQiTTbHz5kV7oPig6V2L",
  "key23": "5Grs1BV1TQik3Kx1t1r7c3syBVkHb3YN9UpanvLNPo5EqtDBfHiy4p6aUiJrGdWv7u6pAnSzhWi1qETDNN8ocKSB",
  "key24": "4ftttcC2ucuEtK3BHpg5c6QATAoGziXbeDuivWAHpCz9Kf2r3Lovtfw1TQtfYjy5nXRsAbjXvsUPPbchEMum2Vdy",
  "key25": "pmdQEQUPVVbHJ51AiHpGsKNzqGwe2QCHXkhBPoXkDU3PesRNUzvKdJozuun7hFBwPwiKJs1ghN1QxV8mRR73ymk",
  "key26": "2yqveEDTtZz7Yb3tJJZ4ZohuCaU6Hos86vooQ9WgcYUsLQr1X4c9L2uWXvK1YRG5v8uhbF9nDRQh1MBT1j5Bp9ZN",
  "key27": "4EVpbko2JpjumBKuaiB8osjGP7uQYyUEMV6LxtQHToYcBGGjZH5YH47CFXQSCq7BjQqC8zG9vYfkaqeAtdJ3hrCs"
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
