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
    "5hyAB9jD3Zxvvat42KzMrCGN8yWrqXZc914jsURRqKjNF4PfoHaYs3L8G8xfzu9mUg58cfr5zrkWZrfRVvnaME5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VUUpvvXjvZtFpQrXtCe4tBWiXvp7mfwKdoGXt8FtJYnFhq9JWPyTtKPoYbnYDEoMcBhbKtUCUQPBf4wsZzgM3DB",
  "key1": "54Y7H1tXHWV3DueaxmzawGx3jo7EQ2zfKFmamZmsMphCwN3Qg7o8NSxBxiuYvrXoLEBhr2ThSZPFzTYRW1FjumGK",
  "key2": "4biEhkf1pfExDrVGMZztC5sQtUffhrA77fwmLnYwL7oNDjdMwJhTL94kVbkW8E6uzQZeYcVMKvEebemTaA8BxYnM",
  "key3": "4mYQDjWCoZweRMh3cE2Yr8XKLgsKNtX5qqjV1t9DJL3Zgm4Zx7AAUxKzBg3oEKpAJwKGs6TdpMR53SMZtdsaukHu",
  "key4": "3iZF5CoXTWUEEHEqe3iDtQxxJbUsmjfDYJAQSCnhKZKbmuayE7PSyiUBgZFNWgSPiKwHzeWvBJfd6FegVJCqJ3H8",
  "key5": "3GSAV9CJwyKJnGVqYVZNpWQiyiyc4o98YqFGEt7wYNDzjZYGo6ki68BP2CLpfbE3wTRWUC24wQFLwnkMQZp35YUH",
  "key6": "qr4FwtLPezPVy5tBhjXhkpvc9H4B3N2pZ9EShbFV12J4uv3wFqBtE9Db9ZtFwE23GyAa1yPBfMxn2jRL7QFVa3g",
  "key7": "47BvgK5fW1Na5jPYZ7Je2Z5dfUUkFXwNvqdbCJDasP899dLCJ22ZqyLKEGXSQRcchZvoh6ZvDhZsVX5JLqPat6Mt",
  "key8": "4bQFqqNrV7u8LuQWnpVEbr71LodiA6SsFNe66LmKttdr7fVWGNFcxvb5BoHaZEjGStvysayLgZfWBHYH7xJXQa3a",
  "key9": "2L8Tn7BuiyXN9BkwCdngNBSAZy5PDts2gdbnTRpEhFANGTi8p75t47upQUGNTnYayRr33qyauJNuD5kSeYig6q1t",
  "key10": "2Q2yCPvDFPXhcoJkhUKhALsxknxgeto9rUDk2ogs6B5FeJr2p4H7qUfjPtm6tCFRNALZJXF4uNYsRPy2P24oGuKV",
  "key11": "2gHH6ATopNotuiLz9hjwUTnnCwXgEFrhNtDS2QR7fTnEWDwbYRithf1iPxqZ5RJ3G3D7ZAVZTFE5BX7p3fxWJYN8",
  "key12": "46BBDrYKFBYx7K5itPW1UAGwzYa3TsqVp3RMXWUYvcCUjPF2BMCS8c87C8p3SNMBmjwM3kCdGTGMEWB2ohKEmEwV",
  "key13": "2RBUeT4cUKTuqvLdQCBu3sqUrT1xCzsNusUmZaAKNJHZHXskZFShebby6bi5gYksFSk2Xzhe1bDLSSBgfR65E19D",
  "key14": "5eHsPvF3waKLNz4GESJ8SApx4rTtoTR5vjrGqk3TC3TVvEEyD291Jn2h4hJg9kvL7k6BoD8RVPJ4AaJssUDWpC9u",
  "key15": "54C5H8FUuameJ7We3wskCwoDJHA59pypLFDLWgBm9KoAfbkutkn5PmER1N8sr3zcR1a96NoHisWJuajkWL5y1qJA",
  "key16": "64Re3ZGccSVhyY96pwQxbHUFppmf5Tvzp5CJFkfKxb4FyEz9ms8vTedTjHGCeB5bLFYRUtPyycwosMRCnqUvnbzR",
  "key17": "4YhL9k8mMQqf8ZFeg4e9mHmqRjReYu8spYfBXAh29JYFXD4XB3sHSvnQbUpD86ABBnLjXr3af4wyPwFR782WhBca",
  "key18": "8WT3BxzBoFD5euvVYRHKxSQDyhqr5QWARvyADwLezaSeo1Jz1fdcvpYkBTqgFaTbpyLoKujYUhfdUqZQ15ndBf8",
  "key19": "3ryXeEgWAKDL5tYCStYM7yYy8hcj8kTosRhsSVZkKGTQLDJ8KpTVs4zC44U9DHStdbN26GWentUo92nNgetB45Jt",
  "key20": "3Q7G1pToWnsTjXDGBE6kJZ8vhLDyVh4gAi2k89t8kS3NKLa7vewWFp8q6f2FKtur66BNR6Hz8XR2FeLnixqL2FwF",
  "key21": "5X514JKntawwiDxJLajAeQfdrwzaNx9AvuKZDQcx69AJdH3LSMu3xCYchpGgbLPJGgydbHXtToJG24hoTxnhrU5c",
  "key22": "4d1f94UaeYDZ7rYZqhZTMqsbWVm2pHZefLEYySpvwXLoys148NWtds3UaEwb87rxSFmCtTamdwhz3Wc9rcDuZQ8L",
  "key23": "euhjRVGJQV19bg1tJFAThKG2zLXcVe1VHbJqGGcf1ZoEiJZmbL72tz6JDewe3TihJMH8QoeaCphPoKJF76ouWNy",
  "key24": "2P6siQHpuxsM5nvyxXTwRkuZS2gSpcQQ2bNv1YCPUTywPPJNBhp6yF2c8HyHxMyso8jzZTHayrf57T97mLmV9s5K",
  "key25": "59kBrnBKyEqrzv2hET1ntpjUhjdtvRmxpRoPX3x3aBNRQfcjG527auJPRDyEhmesQSASWfJMtuThHKvRigseCNVh",
  "key26": "436QojfxbsQzPptNJHe4KkLo4AS7eb74U7K8taVA6y68SxpcZVbWZCb2xa7tM81H3UCACrWdKnDcPBJTDyptkGqA"
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
