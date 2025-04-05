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
    "5pm5d1sqXwHB7XggXjQQBwbVZFK86pMhDuKZo4s3BeS63ZKEhULf6TCTtXxyM4GsrisLEDjPbtie3qCWaWnkSAL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzc9dQQUmctxscJ4QJ3GrvkCram7sa79W4Ks7VDMndQCJNYjTPbiJsA14LNBgZ4ymEbkYTcwK3UqYdtQdHcTAYD",
  "key1": "5zz67was7hjhBMXxo9ZiV1ch1xGNy6w7mJSFYB9GCL5vfBKBbJK73W6G55Q4c8qnjGnWbmvvSyyWDyg2JnQdgEwk",
  "key2": "JUZqVNH18SER4m3SXhzYiv4wG7kVwhdsGW55BH1twWsUZsh845MUwVmARCn1yrbPcpcu3W2y6GLvkuDgdf36KPF",
  "key3": "5xnXz6WJpBjadyueudzhZNBABT3tBBsw3PyP9V6KBsNLdfxwWD6ZJfyjLhrV2XQaaMgi95UyYKV24HQciaHRZPLN",
  "key4": "55gVDBroBPZ23wo4CnxaeN2bzNSHjEE1bSbnQ78CcE9LXR8XvQkdoxwZNDboEAY8HJjaSUueHECSmZ1cL7uwN2sy",
  "key5": "5DgYVA9vtdVTeT2QGm5nJVjjofKYgSzC7HvQmzNaHomnvPYS8cMdQsiYWgsP2YwhGQ6es2bEacFdZ4Qs2QyRZTPh",
  "key6": "F86XabXMJFsiHmj2CRsthsY4SWmrhF6Ji2pQFZ1u4EZqorYhJb85vWNGE9qAsDhLQ4WubWwWz7D8U99Wm6X7gqR",
  "key7": "4bFscrc8eGj4BjJafVukgohXqf5eYCsJKyDk3MBYpgnRdXUexUZHhfUSmqTWN2c35zBp9FW9NvT67VEsbAu49e6A",
  "key8": "fY3xd4o1k5MhZHqvPFgZegWYEjqYF9NsZz1QHhN2kHu4CLdJpxyhNfjRmvC1wMV58eedAcx34cK8t6FCJDFDv3d",
  "key9": "61TYbper3WvBr6dFPpeGvQyWPYibvbnkMS5omhVUjZfLF6SJcAtbUgcnFzJbRxHbbCbAr3deSKKXU6xAvX4TBfuP",
  "key10": "jvLrSwFMbt9it9SyqByHhZT7w8BhnEHxuSsZMVBXMJQ7r6XDHZnd1zptF6mWRtmhdudpqseBRR8kc1B4TuKPyZC",
  "key11": "2yH9Ca8TqscQuxr7qDArgP26YYeqdHhuZk12SFEiJ1294zRn4zTaT46VpekWYbGfjZTTELa2msZCjzbJWdqqF56q",
  "key12": "6648bCkdxLaHYT6xHBzSHVYEKFMtqFTJfiYfJzHwKYegb1SVVGkVrgYR8G2XgWQJfqXpkAic48EFUkVY2VEL2VtU",
  "key13": "2khbYgLdjKyzSjrqkfzvqcF4oYh53bkkgBMEENRKsq7eAzN4ouHXTZ1UxdtXoFY2PFt3PdUYXhhDSdkzJhsv4v6F",
  "key14": "28Eog5hnvf7B5pVDTBczXArUSyUTRxQ1Lo3zqP8UXaDmL2frrb77n9mpBdRQhJNGsgCBX4aV125GJSTSooLt5YtX",
  "key15": "57BSrh6JVrdGv1ysp4eTE9nZrJke8Tj4LbQZFtzo8fw2jZetFfKt4w2g1KubuYDnT1n7beaL2yTgtn7pa79CWSdp",
  "key16": "3SzWPezhqAVY47S779hNXDNfFPout7EbfaH316niquYzgNfwRYT41GzfRyciYR7waDHNUT573XtSsuXjg1uo6VcS",
  "key17": "4Rdi62dCHV6GsiwJy5ty6fB2VX2pfJMDBNiaPA8XhQxvgqQhFKtfgoFBVnJg4beVreq4H9i9JGKMcBKfSBaM8pCi",
  "key18": "58VcJYBVfrGvb5ZTayb1QWLFd2o1zjVJiU7uthh5P5JXey875BSCBYMcMCdSzGSQYWJaQtX4khthryyUx1dmmq1u",
  "key19": "126W5R33EB4iNbn1xgANM7fEiG3prRmxBjQaw7XF2iyN3BAUqcBzVpQbqaNseqZH2VMv5Fvtku5PXSjMLV4hEZ5W",
  "key20": "3Usg6mpqf57e53SCP9YFCLwNwVHra6V2BHEBwHwfFNPi8UBKfN6dsAnHVLNLChWPrY3QUDbcE1rBu2BiFuC5JZWa",
  "key21": "3vgLYpDiZ2f9W2XT3iDMkd69xieP4b8iw97SURytUuVPo63bbwqRm44d7YWeiPoqnYX93ZHedbUEpLqGzPXnfUH5",
  "key22": "5fRngvsg5BnU1xq4bB6iRae6n7bV2JhW8Vj149HJYc5HMrT29VSv2SfEizkqpJEmvNHrWAd1J9nXyzLA916mohwd",
  "key23": "37kdDiWBeeGt17JxidqbqW7D8eZZ9xKf52F6z6sQTBngNy9U68yinF83PgSeq9NAHLDH6s19BXSVgLv8NAbdoYnc",
  "key24": "5qnyvXSmoQaPZSbvJKNzaj1n8Yov6p11VGaSgcexN25n3o4TnWo11Bd6uymovZYZ4kCMRDkkzBV2zHfBbuBciWRA",
  "key25": "4TfwkPofkf2LtNd46EEg6ztfrz9WA9vmFVoqnMt9kiDwjFozz3crTSPHhCfw6fyvuHgJEkSCBugF9agfdSXfFN14",
  "key26": "3Wdkr9cvJhwymfVWV74ZFUjjagfMrfgtEkD4xo36uC8HnoBjYSmj3jwVD8YE7tMoQE73BXgcp3J1hniGzujHkXxj",
  "key27": "3b8L35qALniK1bpfZCXKDqb5iFGfnrdsm8GWxJZ7XndpsCUHv3DCkUKpsX2HgHqMN8v6wYSAAHZmEGFKTqMEeqV3",
  "key28": "5ohMkSXgzGPk1ozZkCe15LDJXmPov1eSqjRynCX17WsHMu28kkiVyPKQc7K5XBk9BSuNAadebThYDgFncdeVfJSV",
  "key29": "65HZdycpKUrJayVPfve8yxBTVsRC8e3WCyDtVFSUoKBsWCUPxqFpQYAEo5SAMK3B56fQJUdQqAeTK6rbanwn4LvP",
  "key30": "49wV8VWP1QvTTRyLH5dWMXZzFuGAiLkFB2SH1zzhgTVFXzZpFFZn9AWwxKWeWPaiJRzD4wGVkZVV38pGt6HzfYqL",
  "key31": "5y5zwrgSQ9EvmRrqbs8igorZubR1U4Db7YGBm23bWXt8bcmGzuaNVp8CVun5G7vkboKBpMmdmo3LizBuYmEo7uPz",
  "key32": "5ZcJXsxKpzomuXj3njzo1Veqq2hsUurtXcM6pdtmwv2NQyoZydsdWTghemBaQmo4Suph6DB9fs53DmYXTcDhxBQr",
  "key33": "56PSJYAy5EBw3WaYsJ4ByaLbptVhmL12u6JusGcehMrz76o5gxEBhEk6Wq8TZrogWn1uhopwuBY5w1yE6n4aaS6U",
  "key34": "2pCCX6sngQ5LGKiVu2rUdmVh5VkpN4s19MVdNkY43X3eeng6yc2h2Eqy4nYZwpCzT1uKVhQZeWTrhWWMwMGstRYk",
  "key35": "qHPANk8fpaSYefMgQKLgJbwYSVBm4bKqASHuj8eVb75yzhr7U6HjDSGA3JuU1qCL22fv8JkGUTn3vW22jdNjeBQ",
  "key36": "5gfUtRZxmtGtA518DQ9kzeQ5MHmj38RQbM9dUxUijNU67C89Rqrr5FbDVzdrcSRqsxqFjtcDdSMp141Y7UviH58v",
  "key37": "4qiy5bhrFyvFADqZ9yDT94ByD6umHjx3cXHWzd2ZwuYHZSbR2cYjk373SX8KA9oCt2kT2PpUmq5o2Ryj2f3jKTGY",
  "key38": "2vwWaZgsUY6uiZCmXC67da4F4mFC5LRyC6U2Urmj8Nfkj5VkdqCtGJ8Dwi7bY1DRfngTRiTtbL73NnqALVvreYBq",
  "key39": "5MHby7STbRWoFXkQFwpijteA6KMB2UKQaRdeUzb9iT4nGzFhhTP16N6bq25W7GKGTjQGv1tz6U9SPaZwEBqV7uzz",
  "key40": "4tupnX7eisLSFaQQmr5ATW5J5wZw7RJPE28rXk5jfL79upiLbGYshdjweLh8YnqhCsRhERrJZn4SnfuMa2fwMHFj",
  "key41": "3jsbPfkbckEjru41Ykb6q75XAQ5HxRjaXEpyh2HwybiEVZgAFwmaC1sVcRQGjvgAHc4hTwbmSvtUvqKHtxG2SdFe",
  "key42": "xscXX9t1RU6mmU9ys3185hza4eNX7hJo4vyky4WGsxmxGoZz88i76zuTrVXUh7taTdJ9w3J2cG9W5KaaDD2zvi2",
  "key43": "29xcfsriJ9TZkjNApbCFB2cNXRiXzsVGpDviRnVtidiWB1M5fHJFzwczRq7HGQtfT7HJTo7HdiwjZDjZPSC1WE1R",
  "key44": "2WA6hbRecbHF66AXXhKQj9Cx1VXfhErpWfGFKvWqo6J1an8fYmPjmjscZYQ6y39oJhvqZZBx1x37MKZuJVtsrk3a",
  "key45": "3Q2X2bsMrQwghJHuBtvoSgtZFYBXheM7czR8pGvxkU1aLLbK6awJNqXhjXB53jFL3qwV79AbNuWpY1rjBZUuHhcg",
  "key46": "4gDjkGFrRFBMGmqin1S42evgrxmVGik3zycEdgmNqSsxftxiiK44k6AmSBVjiFSDGjqNv2ZL3vXntNL15jHm7nRP"
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
