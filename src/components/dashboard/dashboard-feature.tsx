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
    "52tSBervgsZUxsibKSYx1vvzKZ8hqwQwEmDyyEC1sUrtCttjydCdPBx9h8wYZFqS4EgHCT5aS4jyPX2zq8USCmfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UWkk3W3drnLNEgSpBA2uWjRfqwVnPLxRNfiSpb5AKNVQ2oLEa38c2oRbhGFXiYecrFcPX7ALi2qeFHbEtFiHcH2",
  "key1": "D1kDjhdSvk8hdJvKV7NdcwPcfDScTX7FGBpVwAGBLJvW9LooHV2frG2vUE5da8C2JfJaUPANZWUBYgshE4C3nWU",
  "key2": "2CtLuS4UBkDqPRyVTsGaAXCDbb1wwckYd8HbhuPLUTuihjX8M3EPcWhDXEDRdxDZkpYK7dmnRBEefn7J4V4yfFht",
  "key3": "4F2HXXSFFsezWJ3msAvTuHNNjWTuozRTE2KjzXZrb22aazkbwEdTzpPZMxM2i6XHfWcvA8597x7u4BWqd9qiuGo7",
  "key4": "jZrHVwFoo1stUBS5YFAYhdXRwHcLbjcJS66W9jhCTb6BDsXfdmtFdJanPZSJNfcgtNG8d4ua5r76xBrqP5Wo4QH",
  "key5": "63xmqDpGtMTXtqcy5pcjnm6bWSZsosyxzLeeu8Ss1mv5zB7djy7cpds5tRoGZSjxnV1oRyH1yCJSXA3NzFkeb8Uc",
  "key6": "4vCyegMKY1v1ZGcBhFWsGqoyag8tm6jD6KzRqK6KEsiBJXdzXJMHUKeuBxaRqP6kGMPE5EUhf5C21Cgw6dCYzmZk",
  "key7": "dAy1S7frfYXfJYL6QnayddhKgqo6D6x4CiHhjgBDGg2FQjNVg19qFErKquiNw32cDmDPdV8ZfBcrhHKrA8cuUWr",
  "key8": "5D7KBUCv8hx8x1uUghukGubSVVRDSqcCGuHX4P9e8zLu7YEnrVaPGwhPEdWAwc6Bc9DWK8D2Dj7xxj5hpNYJRj4m",
  "key9": "457B4EuZTtxMLm4fbrCSzK4nZDV4G3jBt1iR3DaeCjSpJ6L6tnoCmcU4VmUXp3S7GgAuwBnjqsFQgbnNR5B7bfZK",
  "key10": "3aYbQtVu8fRZWUJ3Ti6Sgq5wjvNz83JYmR3c72sc7nN9RTqGoUHeVCdnwS8DXHa4jR8W1MKKqEPyrk1a3Fo5wtvJ",
  "key11": "5mspBFThFbbmixXWWWxN2po9562fiX92g4Tmg1Hu6cHsT2vu8DdS8P8uCNDq2aAxzkKKqdESW22DzmB6N9syGfmv",
  "key12": "66XKiLP359WYDRLy6E9f56t4RMZTdH9yDFdNrGmtXhcipgASP54mNZgEEsKBs39abkTk9EkXtZvoGToaaHPw8QD5",
  "key13": "4axpgTqvPMYPXNGeGWT6CCLko8fMnc9btpWbH8RrNieSmJ9vVpmYmdDP4VF6LvqoVYtWJefsbcND2CSsHnFv7JfE",
  "key14": "chaXftqMMbVTqHmZv34Xo38cJGvpJNkuY3YusXvLVESmnu9hsAxycUytwDfjKtRLYJMEAJoae4Bd1oKeTnGLPvN",
  "key15": "25zJb5e9SNqTK6Sn8zJFjSWmCsesf94sBGVQ9sF2cUaDZ5ScZ2WEJxJZ4VDEEnCcciJdCvWi453UAjwttyH2r67E",
  "key16": "58NfcVdg9EKMtdDVtqn5fcAaaG45XyKYQ4PtMGRWYuizqiN2YGr1DiUKCqLwfHQjNDq5Kpqc35FeueoEZWqAw4mi",
  "key17": "5Xe715t1w6ZfoGiWgNguGvz1U7YngSKhUKRrGwwL43omAooH2UswiuH5vUhcKrKrNtfDahHPnh13mZioPxdMFh8e",
  "key18": "XsxYsxUbPhxVMJA7v8s2PUoRXF6mvSfxPNULBE74NRtELkm3R9HroY4NXr953rU41HUZViz1XQsg66Yw7y6JuHS",
  "key19": "caJ8acnjCuB7ph1qQSfp3Uqa1HPVke4AAo5oUKK52JmUhZrRK6ZndtAYx7EpKvnCVHdsrbGMKaNicpa7ckei1Fz",
  "key20": "645XJAq8JFDnBpeBqNETH1pL9wtXrRGVUNUSfbv4etGj4f9szJh1wmd6bQEfBRX44XTEXazq64e8ScQoU2aNZj76",
  "key21": "24HJtNiAeCp9rsG8L1oAsHrQcQhdSMgejR1MwHi9aW19boW7f2rNMHSgEq4S6NRcRk9k2zZDoWQAeGaDmv5VGbYG",
  "key22": "5JfK61cCAwnkuDMRwRGQpqSh5RJAWBbM8W1ypuSaAh2VkDdTsNH4z3ppicNvLaXbAoYqy7VxF2jjfAMzC3QKsFR6",
  "key23": "3stkrfN5nZJpa4c4ufh8J2g9Gq4jQjESf7B48fRsQHDf5rVWPnqSU1tTRp6VEogRkmY5nnSKBgVzDnt8vko2Zk1d",
  "key24": "CXQVKYzvkqHAveXaZN9zrz7LTMYpbR8SUwEauiTETsmTDE8ZRSwXCgcvUwQa16GXW52aVswUYwLhjTpyohHWJre",
  "key25": "5VHE7zf1BUJDGXEvKFJS4SFsG5EfS6mcQ4pBF3rDDzDZkxVfdV3oBgq7zviSbUCcN8cb5YyDqKwRNJuGPpkDoUDx",
  "key26": "29YtK9sQZGSHz5yzsa4bGJ6DHnJ8b99buFUSGpSRVg3Tdmiq6tXKkNuFnVbDcRKjj5c8m3m31ERK7tL1jq3XxzqH",
  "key27": "5JkiD9MPUHNuzpPiERPEDCkKGhg5o9dLBSvRqKcCTRv6Y7eHmFKn7gbHDhBqtwYjM1DrZPRF3eSRGgHNaJoC98P2",
  "key28": "PsaSfyS3DjQaW6Up89MhdV1abW7TW7NTUP5bmCMWb2Ldjr3zVEKnCjzcLp3urG9i5KxYgP6yYG47B4EFpL1uv5C",
  "key29": "3Wk1eHBRL4zw5PCbb7XJ1MdnLbLbxQ133gw2tdLhL7HxuZ3BzbXyBHxEGmtLX8dZARgVrPXgPZSdqrURwijmqWzd"
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
