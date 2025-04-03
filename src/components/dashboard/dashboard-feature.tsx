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
    "4T9f8MvZfcpjkNTMCPj18aVUwLYX6utWR4x8ZH1VVjJzpYS1LPeHRyrQviU4ZEFMDmPaSdvFyZhGaTEy4n8WCjxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QxhnNBmpvqxs3NDV1xibMx71YA8MbeXv317cBDawPFEdAubvaFNAT6wAnBpiSshjK8fNVPcFqANQJr8AsCVbnCq",
  "key1": "2YwHXMLVWxfeUCrbprdbopZ5GnSiXqXAZMYyanFmrEHmR2wjrJrvvqboG8Q5ZkCbV5DjKRZ2apSJ6LUbpFoS7h4j",
  "key2": "48EBTJ9xWdxokZZ7ViMhWKpKBkpu92WmcBupu8rkN4gxPfg4ZEtNPGtkMvzGEwwexVZT2tz5pMyPe7cCTxx5Dd2j",
  "key3": "DS5HRpCiyq1M8vseSFu5ZWsePqEX3nehX5ujfn7kWQjAe2pmvrf2HvAdBDjskMHMvvPP7cKjDCLA87wDnvKCPes",
  "key4": "4UTswt4mV9DQX2rRZMfD1aAUraiB41ZtxVP37XKkqT4RxjuKw8He36x5F8tXPnn1RDG45kY6k3efN9h9u2ZU879s",
  "key5": "4mwBQFtnmAt2LqFQXhwZECwjZxSriGeFqpthA2jooqFoyznAtCVikuzA3QW2NkUuTasdDrzR18Zn4N62rKUUKVqh",
  "key6": "5MUgsmJVebc9bqk9xmLBgzbk9MFhFtQJCTDoZRrsxWYr8DRdneSsFbzXgt6dR5bevTp62WUZddUtUZiXC6i2fUXo",
  "key7": "3Mo2o7du4nTmFHTSH8H4R5WZZXY24TpmabXCUBaQVKFBbyULQNo4obU4axmhBqznVHJBoWBzVnG4UsGCRW3dNvr6",
  "key8": "9dxTE1jXY4C1hCoZrbTjhWgNzzZzkmuSAaYnBm3Hh5Frw8qjE8zmqzEYTLB2YN95n2k1VpXEsqJNu2P2kZocXPh",
  "key9": "54BaGx4MuKzmJdY5xY2gzEcQwS6whaXKLgfktPzyfLB4PWHRhAivnXjY9UynypFwpFMLpyWrDVCMjRCUMJa9YswP",
  "key10": "4mwQDyCc6P59qkwnLPTGLetJF576ac1CoxpPNgxUzovkgy3KPAJHJeMjjxioKvepubu7jxdT6n95gJ8zjXH5Xeqy",
  "key11": "4CjLyf4TwLNaMDTbKMBKv6ZJVvmQhFwWt7jSogPnjK5RJJrtx3cXzgkaTM4fdDsdZiYfGx3LrAA7VyAZPtc5UbUP",
  "key12": "5njJoy8YgrpWn2vAZbHPTwiq4gZuWFKka6e7kNuwuth35tar4CyHNLb5FveSeHmFMUbZB7ikQYR3fM6Z6yqSuvhJ",
  "key13": "3mBXwsFudPgqm64EwDnCBGisHyhy9VWabGfZRij163yNCp8nP7cbbwz256GXQ9ehoKjgzPDt1M2i11mYrnPZnLnK",
  "key14": "5jFYX8sPtir44fYXnEKickZAhogaSwPJGk5mVApqmMupLjVp9hwqJdusPExR9Gvxm4MJMsC4ke7HZ4xm1FDEy9mg",
  "key15": "2WRTBY3Y4ZskHbHi4qdrxiZ4ovombn82xgwZhciv84vhL5N1jAxZ1hESdaXMC9oVaW3aHapMTxzk2kgrSk4XUzyH",
  "key16": "4bDbCp7J4zmncBmzkrQdb9FWJAZvZ9UdnRhAK65XWZ5sdzKTxkEq5PjmSSp8RJUgWnSWWmSX7NQ2CmyzMb356tWw",
  "key17": "53juuSLaZ8CazZunVRhnYVvDP1oCVhHaN4cR8bqn1KmBxfE1BP8cRGgfLdjrAZmQCrboTmCJ1seQpdmeDoqMRTtj",
  "key18": "3gEGy7SX2MnjaBjq5NTtoRL7pd8mPjyvpibEJ1SvNXnTKDuxLQe1ZsXTiA1EmCUY4FLk8vwLu4wQhnYZEiWvqtLp",
  "key19": "3bWALA2QT4UUfqSGaqUdPfYcn6kyS4RCg9naDEYNkkQY13Hd6EeDgxqHxGbuN9GvdnFq7cBooV9iHua8u7gGFmLo",
  "key20": "2jLqAqQs35s4QaZ9DKbzair4hnbyEGGj9JrfbixmG7o5cjZRWznMCFZtTWjsSVu5kb5k4QQ2g4hSk4D7fTj9PPYh",
  "key21": "3disUdtNRva4NUZPAML8c83ZwrmuRAcHaBnMWz4sfZ5KndcdqyGfWEqmUy7eDPUGNBqXFHuqiqEbATZRJF1jjbAC",
  "key22": "5JfgS2evogFvVJz8Gm51ZYqXzCy9GDMRoLmkTTsUPXbu9Z2GrhzHR8H4P3QUx2HZoqdm4bcQU8gGwyZWfbhwstvw",
  "key23": "5tqg8QkSsEJoQezET8RbPnznLSGQPeNW4KzedrZVNnUQh8WiGcwZNKemvnyfVnL8UCyaERsGTnXY3TXMkYPDPRUS",
  "key24": "4HdW9egKHZhWho7GoeXExF2qbA5MBxEhpaS22quQZSf8J5NHwLLrSiKuWgx4hJy39McKxHDv9QgcDrYPoFGftx5i",
  "key25": "2xraNLB5rcc5Dyfre4uRsLDberRo53mRaUQLYQyVjon6CShSWx18VxSBGDQVFiFwk2CMsWaUq8UpqAALxKBkd8Wc",
  "key26": "2RLKzFARUa8SXLtC7fYSRVn3bWjatraZ9wmmnRURtTM949tUeQwcu8x6VBbJ8inmz3HakQThv7JY34ujsE9B9AE7",
  "key27": "tpagbVXUeXLhBYUbWDqSxDaYpK7HuwT4VBuuXvT4321RC3CVmJzsxu4EHVxJMYTJm8xj9WYjG3Azt9Trpx1Gmv7",
  "key28": "5R6axP34Z1rhmAWYQRee4658eT2GpahjUc34LiyUnCQgdrLqTJZ7WfQKAYpqFNrz457Jz2FXWfeJXnvyQb9e5w85",
  "key29": "2cMqfydKaa483ZyrYsW8d8yHappGNWaaEfdYYuyZvt3X1wm2BE53kQMdKmzocnvgENES1xefwz1cmYqjc5uv4Jt5",
  "key30": "4feBDmKr3Sh5WFkcQXef9ypXNYssNjuBNb82Qvw16YqU8kNL9Tj5346hdTphTkCTtSVMyNZNFtys8H4utB11deAy",
  "key31": "UqKG2gyJornK8j1Wx7iL6gkCevh9edSzz7SdvcYiR484adsr9NUVf5L2chc6ojnVP5T49eLkz4hz5KgPYBLRLmd",
  "key32": "5yeh1NLrkaq9CPJVMGWgPEBLPpgJPzeLWrkhpUdydHTjJ6xKeZm8v7NbNk8HpAm4HuxjThH1vHC8khfCW3FXkB3B",
  "key33": "2i1YL7aQZXnZcpQcGpP2qDqhwYmhJcbDpxDwB1mGYuAXu5PfXDsFKnhvpia8tWMZaTWaDixwL4HWDarfB7r6jmKK",
  "key34": "5xsU7MBuCHjJXSdeGccTgRQBkkFrF4TxxUxwTVQJwvXM9pJzHei5JBSdmverXshvcy9fTBuKCRZNgnasnNXZZE8U",
  "key35": "JSm55FasPgKtLdWa6ryT7oyXRnDFgWHvNpe7peyr2ZJWR6ZWkaDvEFQktFFdg1n9BoHnqQtKw5giXnXpo2GYMhv",
  "key36": "3KoN8HXg5MQgMYWyPZScA3CdiuB1LBWQKzYLVpWSBparnkhPTftBrwzX4RqayUHpYijbiYjhfiqxVBLB6BmfzZTx",
  "key37": "39U83zqTcneAhDErHbNRKU9sGcQP3PvkSKykXdJ5YfkmuJUe55t2GUjxLJNf9yoeC5xggy3Y5osYsJ4crUbqL97Y",
  "key38": "3GqUwqttAKMNRxqprzLMx2zUfpSyYRKfgmyPhWi5zjFMg4EGMR1o8HFu42cgtdtjg1qMCjTryLnEcesSuvX9KS16",
  "key39": "2qACbTYAfNhQw6xwJmFe9XzDXj7k5doCgjaBW1q3fBZ3ihodvT6Rpp6xqCYL9WjDfVCoND5cN9GeZvC3utLePLMf"
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
