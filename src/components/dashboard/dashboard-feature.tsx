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
    "1erBitsWNWTSKmGVKfXt8xrb9N6yh2CWCoZFCpWsxAysX9oGN3mazp7VnfkopB3m5g7wPTmxvuSW3bYD9HndGW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3351pXLs81DrKT362TjaoHTVQYnVNaoY3k9euVHH8ugUhHrEXajcxh8GTT28usMSWRBwASz4CQp4zDXKxWn2g5CU",
  "key1": "3gybJbBHBZ1LKtnLRjSnUvpesVheCbzbR9FByspgDEvNF9PDXb4T92FHL9QtUpKFvAXxY4MQoHLZTvfUg6SCLBJ1",
  "key2": "jeDjPYqmeUeByPxVKd9anKqEZd3Qfm7cTiQM5AFVviiQipxw8BstQBSCNRS8JNempRgEwE7q4j4hkteUcwNSQz7",
  "key3": "53oworgadSa88uNh7CLWirQ1k2m7bfyXFnVmAm9ZiiZzKWLo7wZ39MZua8kW9tdsP736vzrJdmctLYxGfX16UMn5",
  "key4": "3w2n98xxhi6gxtm63TK6EpJfaKPnUTiZkF1yf1Q3BFpAzwkUupB2LCBv65R8vYxG6neL82qp6bxWnGL63TwyUrfL",
  "key5": "ekCjPN6NYGRr9ZMQTxs7XmtSy4ffiFgVrWPaUeLZvog2mNBfP5GNVK5y8NzX1UTzZ5TnGeJJAcAcRxr648cv1De",
  "key6": "rKudPkqyUabKrd4rYsePq6Y6cAzfiBedimAKBc7ee8k5UsfUmb2LmKVU3ZnK82td6vRTzkCAMsU1w9hEgKNWiqb",
  "key7": "hFCJJtN5Gz1cCKt6QJdeph73bFXmQsyhEqGjXGkHvrd6LD4tgaCCvu7kKwxwwhTtZgvREefopAn9cvDjcNhHkv6",
  "key8": "4ZxrDBoV8XQUqgZKoBFtm5fBWuQCf8RVmqAn2KpZiBpPdjbRK5S1BTtMqa2P3zGVxNCDg2bteHKE9PXcngS7rajL",
  "key9": "4mg3uCkmkVCu78xAt4iALyPwuRWnPRaBU1VoxGzYLxwK7bhFGRwPzEUwcnJAQa6Cpb15YXfi9R24dNMsQQpmUJ5K",
  "key10": "5am1f7iGijwAw9R9ueJR2HY75mfyqRohyM8A4HwWvbSaPhgyvRYoFaMFHMz2jjZ1yjJpbReHaRYLnW3M75EKjF8r",
  "key11": "32KdCPBDNdBrKFFWma7cqvzCZxmwFWuXmpPkH2KYB3XE6SmxxYacXqdRMVRr4by5unBGj9UMHjvjTmM7as7TATSY",
  "key12": "4vUSUsTtqriKtFdSH3qnbXKmWXVjqT5zvgj1agJfhiWQqRsyNU5rMUL5TyBWgiDbKTtv2GzV8Tns18RvGga4jQPB",
  "key13": "61vB8MFYwy5DkKr2kiACavHSRrkRpRWqh6A8Vy5eRyZ4HKmJAHaLWNiDAaXdJyhjs8Nt894F3EZsBu1BqWvBrSpZ",
  "key14": "5vxEFG6jyYK4dqizFSeHnoA92vsRKmjcgZzU8GkoaAc4ueMSCUPV42FoP5nNRJdfZuJbGSHB27LSJPDBQPNMMhpB",
  "key15": "2ymXkbrbcxV44p2Xuqq2qCaVAnQAr8tgGvd4mV1BfjtpC7fPRHBcDX33mMDk2umL22sRxjP3GWCYwAuVyUgVhMNV",
  "key16": "2ctYVi3UDdFVJRa7rhiNgiohX9Rpbzks4WtmqH1RtbxHSRHhkzqPCVCtg65b9bmRXDTHqbSwx1PDV34VMieqp87x",
  "key17": "4dyEyex68Ktc2WvJudbk8cw37XJQciJhUquCohob186mHNz1ATuzBxDmgrXT4doM5XpKsWiJXkr71axFgTaEabSL",
  "key18": "wH1Jx8fQmqx837xDG6pwH9CDG1DAUSYGGQgG3TN5XEC2WcBGm1sSGsZhi15diudWt1JinSGcqwRb7VNN4j55AQG",
  "key19": "3w8XacvLuUbFbHg1wZBBct7SoLtWCnNJYgCnDAmCEV5ZyzKSWLsbceBDMqsiTp8DXXMdqb4GfLowwZEzq5ejav5d",
  "key20": "4ZaXmDZhJwmCEGyfqXhZioqopK1QP4NDNYTPxnz7mLJqEDCGQPN9rkm65752QqixZQzBDBhEyXcPHenoQFw17K16",
  "key21": "4PM1jZJMLkqZjVMchrqYT8ouU1C1uzoru5PmbkECnZBNkku9kjnfjVeNFy8oYgCBRdqHKwaCADxKKvQgvUVk5kcj",
  "key22": "5yNjLU4hg4kTZvyvr5CWuvYZJBRoQE9ZjDWKjKVBbKCwaoxqhDSSTLTkfBL9wHuq9eKVdJz94YEVot2D9TYaXUhd",
  "key23": "41GXY3t9jc11ZiXmuobTNmjKkSgfW2sXtpb1p99zdvVB7KB81AyGxHRmDH6Gx35ozpdGVSt1WTHJNcQagmUBA5an",
  "key24": "33TUv2saLUeTMwcLqX4QF2Gd4HNGPcNy4GB7dGmLdGgAqzLHV1hr1YEYQgRmniS3aZswNx9oiLiErL7Dw7utLFR6",
  "key25": "3trUqhM2avPo5qi8JnYsviMAaspJdHsRPAgbtdQufgjutMLsBvqcqHttiUp8tAfbAC5K9G1MZLFhXNB8uFG35U26"
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
