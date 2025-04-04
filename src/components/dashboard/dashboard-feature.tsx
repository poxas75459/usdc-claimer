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
    "2Rmu5nGo7y6zkFSK3FuVmfMdDd9X4tBAwWEd3dFBhNSngv7sVzNXho1hb21xid14qjCXP4z8BUSPBjXbzdSbjU6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8RbpeVhnb8P28zrYxmXWDpcn5iQLPTd1e8bHYwowZfmNLmEUQ9W4PB42if2boRtmuSxXrk9xHvFTTBqgoNoq9m",
  "key1": "54a5dhMMDr5TwqwdNBKLm6oqVgsQVMbwfzhHJFKVR6D43XuGxovjfwq24oD5MwFQ8rWo3KrVyT6GdsQgPUVi2hXD",
  "key2": "52vk8nrUPWQh5fFocxvMxRnv3iZmMdTrXTUKNSrBsuwo3xXkaaf4hhHQEGi9ithk15W7YXPyhvRFKpWTBn7iha8s",
  "key3": "4cLJYhHWDRwq2jxmCd33NM3YYKPR1sYHqLxxm6h4wJ5hZ7SUWekZmA7rKdJJvFi5hY9yjGGjQ3oPcDewVymhxAwg",
  "key4": "3JJaFV51GD2qEmkNhoiXpwdE3CT23JYdnv19cTmgj1jEuF9ySjGqWV4Y529G9UBzLrMPD17iHu9L3NsZ8RfsnhYm",
  "key5": "57AQSVmPGqBGbC2yaJCj8BwhnQMG8sBViR19UXz2JKL23Tbuvy5S5jLDHqoqyZeymoUwdTUEATn3C9Aw6TE1JWH4",
  "key6": "4A4XSNWec7Yg8bUDxPzyEtRyhBPLi4JjV3GZik6h2FVDmc4z1KB5GRQPoWUmHd1VReAjg5hhgJsgTjx6EaBwq6E2",
  "key7": "FoTeD8kdvAeoDd2Y8C1uFMGdRMy8zEjBo5HyHZH8ciSd78N6V3nrmLMoAj7nfRQTZJXUBVhbHUmyDNnY8TqdXRq",
  "key8": "2zNt9gktsmdzGRNq3kCxNUBqNTvDm9LRer9Qr12fLNxRoiFoEzeyohTWZejxPEL8yuNcqct8ua18okBZ7BhszM6L",
  "key9": "66odCzUd6sLNhbraDRd7fAzabxj9oZYR9fsTdrNSP7r8S9MckEX92yeoHXhzzLxGLbT9iaaufcy4P3zei5NsrXyc",
  "key10": "TsnwJvGvM2Lc9J9J8uS9ZmbeS5g6BZ7x9eKJrggDtt6pxZwmP8AZght2YuhLZeKy9JbrKYijQQb2vaRqUgMQ99v",
  "key11": "415Cr4o12tsJDrx6ajMkh1p4xRLdYJ2MUUcFj81oywNq8jnpn21C4WAeFC1PyAX9zELj8U9C9VJkEqX1Ydq4W5ki",
  "key12": "4tNrA62dwpxNfppdZiwqME7B9yaYSLVvBf3riW4Qy1G29FAvDMuceECfieGsLXux7twiAhiVLobc9K9mdN6LMndW",
  "key13": "YchaH5B4vS9uwFSEN9wNZW5hQi2PbCds9jYJUxxViBx7EnXSKU6mTNoou9zjQn93YwbsQuCzEsyTopDSvMmLLEw",
  "key14": "3ssxGx6gercnRzYJH9G43H6N229sxZYYW8TdDS89M4pE4WGuygh7M6SmigvAdYrLDsD78xQZUezfgzqpZJYJ9oSX",
  "key15": "5isbxGqy2WyQxgEL9GHFBTTYKPTMVjFU9f54Tm6bCRRBYrQCJKG3gAd8CmYJB4LeVwgZXaFQuznBjMpgs6AGC2vr",
  "key16": "5MXhPgFzKzBPCLJBSugBvDjSbGfjg3dMzeQ7D461HXQfs8PMoYEjGKHs8wSuTWqjvjzwKkSJPrePVUoLhfvxhe9Y",
  "key17": "2jC1guPNRkoas6YUvtw4RZDcvUd9Yb7CtsFj5s3UGBpm7nYLey4LhxCHzkNk7haucpYgknKGxUvv5tnBEC1zrepx",
  "key18": "2okvfVfmGRjd5kCYvnNQDyksNX4wVKy9mGuQXFnWuGtvNqE6XKja2ZXnDLtLGhBVVw5gisiZxB56ZRVi1BC7q3nb",
  "key19": "A2e3bRRWesy54v5PKcUWabFEGs8VvncnCorhNFriRttgNbQmmRmtHfXZt5PjUHR5hbL9DPjbmjkNt7tg44vaCMA",
  "key20": "bp5HKNWHobgt5Hj4yhiEbBEgHe2G81GpygDRfDtLrbktEvyYx3rh9XKmCqk9HyHuPUxHsbCeJoMpb15Dj1Tb7MB",
  "key21": "5uXZt6HLaFF8JtrsSL5G6BDCUwbKYyKXGsncZtZgSPVg8jX4YMhtaWUJSjtUmT2bLHQbXZdUtYNpxjjMMNre9iBm",
  "key22": "5BmNH4dbSKuYBR8sRQpSiuw2bJRip2yLAatdihZNKRo5hM1BdhzZPfo9i1qxySKnzfF4aPEVEWH2DBMstvU9A2m5",
  "key23": "3TUwHxRM7eFbgKZGMJgwDWNGXZH6DuxdJLC2V9YMwASkfvZcwf27MnNsAdPS25hxmK4cEUvHT5474LkB6BGBtasz",
  "key24": "2cLLRRM7hPvvSv6CAtwFrTFCj4ziUd9p2Fh3v5Jq6FnN6JJ7KR8FVJ1Myn212gpmzaMroUr8LPR1oVuBNUc4pcx7"
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
