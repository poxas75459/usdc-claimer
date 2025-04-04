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
    "5XPmoKngQ1RunCeG2AgJGaoVGrFGtUzysv7KQmuNf4DWZNxobER4BGiX2qvuvXHJssfUjCdLSukgdvgjGMFVevy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HpWLQuYBQgpf6p98ksqqd4BGjqowUomSWvksxQU5LSgtui4AiEm3dVuyh6AZg7QzBzsW9ZZxcEvh1raxUo7kyoH",
  "key1": "RE11Z3PrDmrxRGEMdjwfuPmyHxfGo8WHhqADTJASsAp6g7pjn9kcMScBp9w8g25Buuswnj661hNfZ5bkJXFSkax",
  "key2": "3JAfAq3L6cbvSZLyByHD6m5wmbDDhbmtY5UQK3XK2P3mSHFBK5WR9J5rLxZZuL4xhYhPdafp9nj9MGiyxQNm7AtM",
  "key3": "wXjnx9GPHriTqhDca1KvnJth7X3sr8cXn1myUfdKkcbHMnzxUJukCcaXgaK1BEGdupUwA5fCVPGhW9FqByajPju",
  "key4": "3uAz4netgurwBtyJmHDNuCUtYyU3TM3N5k934ZUFWRNDJ7X3Qzi624WbtSev1LbU7uYMbtS5YhJLSVvQBN2YueFt",
  "key5": "RCWb4U2c2hGwRQNzk3X6sKGgNCZLoGDWN8aioJiSaBC1pjSnEvC9M3bMspm75j1AzYnF559X1KiW4rXFmsJDoCS",
  "key6": "dqSEyb7PjKfpgsgrCvnh5tWP4YMotZUiLEfE6b2BQJXuYMK9v8RNSemrhrD2yuU82ApbaxidFf3rWvwEv8X5seW",
  "key7": "2uVpFBjuximBEvboQwbhMGGfj5fZZRdLfU8u769xfiV13pmBK1WMFX8jn6H4eCU5vJ5xMZZd7MRQERCkYrQB3KAZ",
  "key8": "4AzjvYSBAAAhWbsNTN49qWSAEmGzNS4SU87tw2U2fz4u2CEHXJEgt3XUSkP8WS3uvFYZBDGA949sceLUEyBQpWSM",
  "key9": "2yP1LjCgKfBg9Hipr1m7cJ9RECaRNTM5ge92kwnDa9R4wtpGW8LFWRAGVLXv2K6oZuvXtViMcSHtSG5MW7kzm38z",
  "key10": "2n4S9cTbB3G8aSS2daBbuGP2qr9g5wJ8vezv7NbpNJHQBd5XU8oqTHFNmHfyujawWg745beK6nTbmDJ4r5dj3dVr",
  "key11": "2irAZ6p18SwZYTHzSUM4awU5rgsht8NiyW7pf3uurFQqiMM3CwD5i3ggh5RYsgsLJBAG1VaPY9c1RzmvATJsRyZC",
  "key12": "4snYxzmAAKsqLCdmW3qiDfF7x7w6FrQ5WnjbJYbn94fE8FiQqgcxoUfnWz1E7qS1MWwBhEkH9gK9Uyqpq1Vi2WxH",
  "key13": "4Brtec5Hssa4sP6b4XFNXv3P5eQ2zn3iguRc6cdbj76Tf6Jo9GagEHpVANHpC6Gt2dUrmGv1bd3fXYeLkRYJbpHh",
  "key14": "5tuzSU63xS8YWRAr4dbzD7CDZpRxzRkRzeGfpvxeXbBj8s6pZJiDB4ux3qhoZKENzp2ZgevV4UXgk7UWySetiJdQ",
  "key15": "3Qekxe7wPkZEQEYKyEgzJ4Z2uZ7bkpRo7HY8xtAbSAfkuxsN8JmMNkwfy6yy2saF6hPuxc7fwDjdq9j42tGXEiFC",
  "key16": "G65X3JyXt8srqDAqcPQzmAGXDTRZPZhQTYajSBPmPfVnqsX8eUpgSXiRMpmgCYattXeG3yjwtjuq4hKGKZPCFVv",
  "key17": "45UKCsbJoAtDtnRkeyxEVJHg4WnFYHr9wbq8g6DuRtu9JANipWyVoxK7zzUbgfjiTC1CjZZQEtZqdWqqv5m3F1P6",
  "key18": "2TQyaab5XTttRb9i5nQq6QzHRNzKrEYwkFqyH6HDFgQyxHwLYTf6wWqMVNJjZ4K5J1UePfSdhQpVoTNTz81FaUDk",
  "key19": "2AhUUx4vGYUMfrHz8dfHt4Y4z6uQn7Nu7DAwGTmWPciDU52winvxwKdxBdvJa8ZcYnnRQLkGeynKJkdk2h2MaFLT",
  "key20": "3ndT9cvrLgETZpJzgCHTk8buyB6oHhSMdfKovtQq7QKExFMwiE6zX4GPnMBpkRTLFfYpbWfpDTHezF6Fqcwi1BWV",
  "key21": "2aUt5An9KDcP6DWpDpitFxhVbBVzapNuB2NZCXNhkdgHgAG9PkyBLDiTABNbwFxwVdiYqQsgBu18BNVUKbQHD6Vp",
  "key22": "3evhQNc9eh4u1ukkojg1jQZjohGUVUHxpw72yVax9SzHBva5q94HwSvcs1j5NwNgCrtNgobdkoyUrvMpfjWWBN6n",
  "key23": "ZSWTUUdYuhfstVToftpvv6n5y3PLQekbPsYYtt2528L9GqxkJVkdqVtFSh1ppJvWUVvbq9jrGEeKDhQNkVh1YCa",
  "key24": "2PBSDPqRWk5g2TiZFsatqJsR4TjmMywcREefKgxs9ZYLr9LshhFFCSWVqKy9rVJZt13GLnDMzCNera2JymWJodNh",
  "key25": "D1q9G517rAQ2gBeL7fNTo9cxEqzos4T1pChBG9vok1r5pfppB45c78Rkj6vpTUJELqwncL4wkMngEoB12o4N2NV",
  "key26": "3zodpTcv9TqsZSWxyATMDF3r7PWdgceubrQo5i2qzPUtppjffLbxW6Ef2kbRdBaTDvjHVwqKmGs7Q8gjZL75hZo8",
  "key27": "24NuWy2ydxw3h9mZQjHbsemiA5HYkXAwWqWnWBB7YqhVyDfbopWsu7p2tnf97hnxaMoxohZENCZq2Wgnx8fEt5qF",
  "key28": "3yUxzSkbVE8wQH736MZDE7UDZNcEmncZkbh2iQHi9QKxjD1PGviUMJJuCCRvsrYn6aeovEFSu86VxrmRGzcxqMFn",
  "key29": "316rtRKLBVKYbaFtPJkcDAu8bK2KeYWcgr2M3ZfcN9xweEXUkUWwMXzNt5fpE6QpH66ymzzaebrHq4hUY966cbj9",
  "key30": "4KzEZ9NJgQeULSqvUxjQi7ZTqDQqUwX5cQevpLVqxb3JMjfzVFvWML9m9UdiWc4jwejmsmGE6YRSV9LySzkAEcma",
  "key31": "3XSLsfM7vEq3U1d8jkzPnq4MQkUKJZ2cRdcbFBAiYtCckesFt6vfLE6m5BUKQAdQqBnbt81u6Qyq1zBDR5Qq49kB",
  "key32": "52WNF89JkqRs5hiN6f1hfS8b4a6QsdXbhXhWzz38QWqpixkbzui27B9J2xxLT5oHHoE8zMDhaCwwRmrRWCVn187C",
  "key33": "4mHJFbKJ7pxwK4Lh6tszKGjWrVUHYN8kadCpD6Md8Cb754ULHt5EfruSsEoNU7knTb1GSe89Yb6ALtmqg3nJqgWA",
  "key34": "4rLCm5CRshfkG8GrLr3ESfGG6HX65GYecouh7T3bE9Zyq3HSmkZBkNt7WngRkdWNLibnRYxfCpsncurqyhFZszoy",
  "key35": "5TA6kjkP7SawVJhCQ4E8PgXaJDjviv9e7C9RBNDJcnHiCnYyikxJUq2QFQPP2dEkib1sMZBwuCJQmhAweX6kLKX6",
  "key36": "4va2APkyo9hLHB8hyotfCmvsupHSmj9cyVv19955AuFpSNwz4wR5YjRdYRfDwDHDtJE93usvpyuHXy5QM22hqhFr",
  "key37": "2MY1tKtfuQxTxWBfK74AxwbQ3NZZ3BdvzRf6ypkHbGsR9bvFoSMc7ouaeiJe3B2mD3APK9Cxp8PThsKoShdeu5vt",
  "key38": "fsy53z9QCKVVgBfkCAVm9ak9uovY2FkT8U9qCUvhXKauhDrZnsJFiZmob8LAWVuijCcRBjuaN2GRx31Xj7RmCxg",
  "key39": "32z2djRDBrAxzbA5mz4hgN1eQ2LKoTMEx8NNetA6JEKkiWSg9inSKXPRxq82j4BtaExA2AvrVrJQ7fhwe6iPkDC5",
  "key40": "3FD6n7MdParG8cYkWhzyLSgaaCEwx8qTirrMmeXa4f86NoKGCzjd5gu64SADr9RK3SgZRGMEqaG8KFQ3pDve9u6E",
  "key41": "5ywzsVg93CxbdzF2u1RbUzdvrikWu4g8y9HkX9ugnUpg6hqYxPqZnTLWJG9ZmSbvTeQaEoUC8WoUkLuFWb7HWyqJ",
  "key42": "5LzUQJQ3KnRqNcZbhW5aJnZJpWSpUo8c5haCYvwGZQX8fdR5dtrasaTuyu1CtbWMCpLjoMbt74HB5aigjEbzQari",
  "key43": "65CGnCm26rKoFdEFUwrKWhsyM8TAMUYshtmQAXdLZYEmSGCFyxpvH68dseo5BsfLKDCr6FzgjYuE6K4QXJvS8ned",
  "key44": "3qurbcvV1saXqx4QesB76ki2LQNqbzCMXUfdPS1R7wQMmF37JBmtUxyD2USUnbiwNhCvHw4oWMJvYM1BXAKBVoLK"
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
