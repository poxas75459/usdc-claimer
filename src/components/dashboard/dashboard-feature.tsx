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
    "taevfVDgPDVk1MdqyArEGs6Z635Z7FohsWjuqLgyZ5BKH78V7NhFtDaqWjaxt4oFP8CXBKQEJ6dtw98rKTawRxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXjRvgzwfNhyZKwQXgRVRyHwqXYuLEQorvDzmdNg7hmLJvxoKeidmRvX8t5Nkr2CGBeVyNXq6iuowoxB7uZSsEk",
  "key1": "5SjtSQS1HzJVdVkoCsa5isyDpCgg3VJ6mFFTFExu2qXanPhcS35agFMzGmokehs8pSJrRvDjtvFwWwRvLDniZuzi",
  "key2": "3yEDfniE8GUVude1jagUzvsB88VL5x41cAwgsRFvZHUUk3bS3kynhJrzV7WYyheRUEqTMQxMWu9wguskKVtreA9P",
  "key3": "a68Lqzqe3d7ist8aGJ8UfmDYzWFXK1Ezgk82bPoY4U8gck3Wbd9tC4QN4GS7zXLjbM4WCJZNnuqju9fVmpP9m5M",
  "key4": "5NH4GY7mXDsMCk4rkw5td4YZfm4UAZYRfnSLnJ27R28eT8nTUcycy4whMRysLRp8HWx7c7AabWGn4KcUpPB2KZDw",
  "key5": "UgZpwbL8ysW3hw8ULkbkBrnfLD4MDD6rFPfNkB869vN6ftKu531AXVZcpxjPbCGXuNkuw3BZYFbadVaRE9g1ybZ",
  "key6": "3AmSFhPbL6ykjuYwFuyzNFVM77DsPLfA8BpiA9tmKjVB6JnJUwXbY6zeXru3DL239vAB3QR3Gi9ZTBhzPv1eeZEn",
  "key7": "3FBfBmJP9on7PTxuQbWuqHVgS7QexxfqB13LzGWZvSE36fTukQdnSDpcLxaXwjhEudm6bkdBrLMn4a9yhTt1wfNX",
  "key8": "Ggx3Fe6R339B5aH2qoEreNUepKwixRS1k4QSimVS8DMhkpa3g9mKphedb6x8whmA5pfDKwCmiZ4LMNFbBAP5zhi",
  "key9": "2DJjN6UFTZMR5WZevNq1oG7NqGQvdDTAzgZxd9ef6ZBf6LVHmn8pRdf4o7n3WvtXLRN4PH44v5A7Kv9VZeAv3jJ4",
  "key10": "41Xovy6REVcj3FDus4XyjZW9HKrt8oBS4dErUTn3sCT7WsUyy1pR6AZswu5GgjA6dVUwAe1jabr9cL538JY6vsUX",
  "key11": "2vZuTb9xUx7JYmQH6auCh1jZXqXYGHcT7i9pWetFPutPtcAGsk8MWRzBPGMvU1E1hAjLK42cWzXVg19qUXu8yyiZ",
  "key12": "3S85xwDaNanTUv97cBXRcm7jEDJcNtUm4MTRDcLuFH4L7WqtzdyJrE1pRcprFHn6qRXP5FDPrcV2tREzfi2TA77U",
  "key13": "3qvQvYeagvtGR2L4RCMVPjMbAKXDj9GqwxD32NLgk5ESiTBfLoZD6rGspDcGqpGqWn9bxGcRQdNjKdfNB5Hm9bTN",
  "key14": "5cctoceiBqjA5Vxbda5jBEmEWNjKf3TXM7t38qotWGWZymVfuvtCR4jdeqjhvb1vakTEYmEs7AkowhMKtuQcQobR",
  "key15": "2ttnkownfMuD5YtWsnKpp5MzqGuNXQhRVy6wSD9A4mQMQBDBFBwuLgwUdacBAYN2fdFdfH49TM268vvnsPdkzLpN",
  "key16": "2SRgnhfuzTffjQ44RJCzv2ZAPu9Cuof5iyaSD2ce9zAAS2apqaDMhhfFfRrC4zqPfRGenb8NunXGb5cfjEP8aiuJ",
  "key17": "6m9Cak4RoVQWKZHr98iPwcfZa8PLjWVgvhKmD7DE2FmMjMB9PLSK18h7P5MihVnCUiEbFraGMYbC958qVZHK8Zp",
  "key18": "ddfJQ84LiRrY3CBJcvFLrWamLPYV8qYZjyfjmzUdJZAmZjjbMArsXrEimiNQ2LybP9KiS1hZzaG2akUfdRfQQjx",
  "key19": "217jrSejgihRcKyKUsmt4Ma1NNE4L4R4rY63fedjnpbBafQfxehT6z65M8GdR2SeaBvWBLpf8MPPLFgq8tZcZq7Y",
  "key20": "658MtvkegFc1XvddmsY5uXdNVqL8ADWVLKervhnp6X63nQ4WcAz5fV7jfY6oZXkt86Xi8Pa3EFPTLaLRSXGXXdyH",
  "key21": "WckBpQZnX4iAPY9RtVTgZsZKywf1NXzqdEfXCtZ5ZiC5TryMeuyLUEr7o4s75GYJoA9D8tw9TZV2Xd85swqKuBo",
  "key22": "2BDTkycD1UWwiwzLSTaJQiNvQJ85yqtexHbeeyqkgpgkiaHgWsvvHeDLsxtpZBUv188zfMMuYaSo7EXZzC3vpWVb",
  "key23": "66nvVpUXZiigtH4KhkvdLoP5PiFRtfF7rg99PYf9y5LDemv5PnYKh6b248SLv4XfA5eLsRJ1vxDxbUYEgverA8yQ",
  "key24": "NetCUWn1yUZfTG2KXYJt9MyBrJqAKY4cBQwAvvkngjEZrbzguWfmjVpAkFTRWMxdJ4SaAX31VbNybTbZricuPYr",
  "key25": "3FsAMugxAgXuV7FGmupvmC2w4ZwVZb5pgsYa8FrMQucqWAQyZ6TgL6Dg1f4PQBoBNUzm9oMdA4g9LuZf1DEGhLnU",
  "key26": "3YW55VPfHv5jmMmnhYtqZnskHupqnbty1jCjMqghxqdNMReZYsYzZkWxwSKh388po54HfRw5EpTei5kkqAxo5hVo",
  "key27": "eJ5r5fbCvEUnabpMncChN7K2gaMinbpTKJBvCD6VXJaBHaHaz6xPDJ1au2z8AWNtcXoUnHuBurSPdob9bntz6dM",
  "key28": "5UjnkgkTZ5K2VwC6dyPcVBjfYD3tggjXegugypLmfrkJd6LcU9GNaWFj65T3YNNek8QUsf3B4w62i86DADuNqoP9",
  "key29": "3yxqdqtarqQmk2GobKrDytcayZNimsQEVZB5TmpPWQugfe1AQiCgK2GdqcqJEprnTAZn5wATQbZUunMMnC6jXrKU",
  "key30": "3pVoGJwDHCDCZPDPzdqS31D11c17MzMCr3anGLpitzPzk6L9TvYQZS6QBvbnz9kJS3Qij4MeKVpgdSGsJukfqmWf",
  "key31": "p4kyCtj4isu747WrN1gckw2TRPMxKWXcHoamFQKv6Be5tjn2XeznpQyMtStgB47NHdxxAxnm6Di9DwhRjzb1QF6"
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
