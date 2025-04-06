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
    "5jSc6Sr6kLS321KrAdyamvnbBNCoQjq1Ewj1Cku7DjD1hggbFkQAjDHT4azQekX3iSTqV1q5UtKidrMRcV634rcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tucetzmrk7mXtkimsJJaLQVudoCDXazxgCNnAPN4rfTTddpBaiH7hJk6Q1JaxE6rCedZvmJrxAmrG4AGPiiz7jK",
  "key1": "3LRuGpAVogwo6u9tg3zgqGZebkAtVCBrKrE2K4XPnWBZBFUaghapkpqw18zG7Eq2AParGkoPedM5tjSigPRBmmfk",
  "key2": "5J7mRCPMJfA73rNCthat3m6PVfue78PofLsYNcrnYba9X5B7zTiWz8fMz5uLWYwGi7B6CtEKTKxju3JE7owsyLbZ",
  "key3": "aGYzuvnRSp9W6V4G7BSGnQa5aooum8bNX3sxMy1nSYEWsPro3rG2EjSGVvdKCUk1B9PoJLdUJjmdqrqYFPvoGw2",
  "key4": "615d4TaAeg9d6T9G9eHrnZjnAGSpNtDQ3fsXAa4NtqqZcoUhvS35vSBc3PHDHC8gk6DeWzGjujQgZL2pVyGagz4E",
  "key5": "xck7kkHWSUUW2GFDfk4FMvFYpRHydrKZQqjPKBUoNmUPpyPRLMWZWBppsmFnKutLU3z2mRnJJxZ48fdaXWax7SX",
  "key6": "3zMoqRceqPKArLeCDVRCaUBh8NLieCvdGUWHgPiwbkMMahVVzdNnFNWnYunnzuqZMgRYziMfMMVh2KvN4yndnQFd",
  "key7": "5vmTdKwqdQmsFZzUMki77zTwPGq7w9RZi6Uu83Fgz3rMMKhYwc8h3inTtv6NVsaUqRcPyQmTn26xWH8MfnVgPKV8",
  "key8": "sQaQcyhKxSVSVwwUuAcqm83j2nYGqq2NZXUANhSgxEcJVSMhSL9XHp3SeWo5RMaUtXBf6P6mLP45adKS7sUa72d",
  "key9": "2jfVTmFG4KMXDQ7gUX2qa8jERbgCxTsgzcgm5rYDnaS8DkYGd7wi1439EVE3PDmZ6p1XfFUjYKHZL8n8su64ZCn9",
  "key10": "2uQ31napT9nQpsKyMZdAZrqAHs7GeLBYU6aqLThBeoPDYsaHxAJ5X2dii6z6cDbVDhAmzkPoqiVQzag9dGDMXzEC",
  "key11": "xZYgxzt5GudCHiVJPxQ1iH5bGcjEsuxzQeSd3LEJutnXiYoBtNRUuAMU3pMK3cmZDWwnPKoWar5AJLKF1JUwPJT",
  "key12": "5LvHftFBTqAqoEeqtVbGWSeuA3ATAD6XJH4yJfShXLm4DDUV41KrN6jSUdkVC6VqaKh8QabkUmWM4YS2TJX6cyBM",
  "key13": "8QF72o1FHw8tUSLS97iTtYx5ynrEGzMagphRzyBjaGp4G6cnsbzGtZU9wDWJKiYbip3zXPuqwQdBFHTpsF6axBv",
  "key14": "2J8NAXkd964pFxDZSMWm9B94UELNP3N1cVJdj8FAU4L2bJ96BpxoXGWtKt8xcUBCGEtqRyy4XQ2fGRGPagmeyEJz",
  "key15": "STdEHZxNRxjAb6MR8SV7PKfLv7E55VirdWdRnLa7uu7tGqhz2eN5oZ2oiMWWN4VCTvbr5WtkWrhwNjv5gYe8sJf",
  "key16": "2Xhbg3Q17JJJfrG6oV5eGM5RsL1wNiyan2WPyg2pJEorYf4H3T1ZqZNZxeHadgL4kDUtcWBXe15MrQtywyMU7MTq",
  "key17": "3Q8TpeTUz6yBiiEP2CPKWGJw6TnnGS8MDhA22pzFMntaumsEFh1W7C3zGwe1oNtJVPShCqHq56aYvxHdwoe77D55",
  "key18": "egYpuunAAP5hqNZXGpzUnbaeG9ZXoQgkHC4BwYtM2EPUmd1dpWjkAEyrr48oHcU1U38J2z1boh7yXLNP84bk4D8",
  "key19": "4tup1dTeWWuMoehWTbH1ZMo9aWqFTyzVTkzccpBVXQwYugPhFwQY6QeqUTSUimQGSDkeqis4JrqeUSjZeemAS1iD",
  "key20": "3rV7wP1FAajb31k3Fr3iBUhzU7x47sixX2KKyR1hDqSbQq7xNGvwgAiXXKunTkLgvvG5nJYy2N8Mk2gU1BF8hcoM",
  "key21": "5JFSJywBeLNRpezc6MVCuqZq9ZppuQNBsRkVSShnesDs7RC9KBn7RwWZfhHsJUa2774kwhxsLQciGUKfnuxFRCsC",
  "key22": "541s7ZNh8Vv8MZmuxuhvXKRiR1vTs47zoxqd3v1N8iVfE4Utz7ob6ygV8MvsYndeYMRv8iYidMc9YmddRCrwTGMh",
  "key23": "4oZKsiLwaNeSA4r9j55eG6wwQd6R9QFEa5riNLCLAidbtW42tyDV3ABpAn35A6CZLJRUD8DeFs2KPG5j1hv8c4rv",
  "key24": "38i9C5vykyw4hjR6eh63srfc1cqVScs6UqD1FN7meYyfWHtTVaChdz1qwvSeDyC4J7ME7JmhTNV8txx92VUjEry8",
  "key25": "v71Hc5v1jXRDL9gkBaQc6TEuyc8NCJTNR96p2WrkLrsTFsQZCGwyNx8eKxRD5RxiSb4gJ1ZE8snqbWyJhpZksee",
  "key26": "gf8XoKyhcRjRPTjHWVGo5LASzFywHLtgouCA3s5WvsFMLAAw1x5DYBfqoZ4sfyK8gYvjig9dvmq17r6GpDLGESx",
  "key27": "27FR1XpPiSSe82VasTk6gmH7UCivh48PAgfaTb214owcAqJ1fCN1DSgeZDECUVzrD18xxmbRHWtSKKCfmKzZkMsG",
  "key28": "4418bEjMLyxVQkLXcEJsjSGTEVfWqa6BRgCHi3KghM4J1d95mYhVrqLRV3eQaMFEszrZ7eFSMUBMckamFz5SuZyZ",
  "key29": "2enqnJ4CQ4JsMHevqPkJvtMnXqF6ftHxfzdD8MKVxUfQ99JQFcChTznX85YZDindvJuAoS2DEBsrBTvixeH7GFkr",
  "key30": "5k8cxfo9Nx3nBx2emtj2z8BDDivNfQzmB6PEQajBqea3FUWx2i4RtQtjRf1EaH2nDUxif2Y7Q73tQXcFQucpXSmP",
  "key31": "4Z5xXTR3CVAighsnZJ3fMbpFZN2bfyekqXk12ojDPFemswc9Toeg8MYJtFCSSexSz5sjwWxAcRC48YFZv9f9z6yU",
  "key32": "5cmmgYecERqm1M5aKAKBeNxRBuib7pStpoL2ojzgb5F7xQjMxc8RzpBU5j4o2AnU13JxCahWEeQP4M7bRVwhydKN",
  "key33": "3P1ZQFBxx56Abs1C4G7fqHKHG9WNUaJa8X2WkE2YHzr4SjfFg8zT36TZhf4a4fJWBM4gjMfa4vCkS8dLr4hzWeeK",
  "key34": "58urASs7w6x82HD2KyzMKUCByASx7wZ8QVBMaCmu9smvEpfLMH3qigNNRCYmHFntvPEP3rjFinnJ3P2mwaBK6bhv",
  "key35": "YqMSiSGrDj435SvCFyrzSW1Rvg3twVmHcBmhH6QWADmg1HaqLsi6YQUeDnktRmZCktLCECRPm74MXZz1LWpZmEG",
  "key36": "4cKUZZXGCNVMZyZmjKNe28y7Q8Q3CWhSZJLDmeKdbp3iXoBdp8m1EAojKGBtMevfCqGBNud8ATWMu7dwc5S48gey",
  "key37": "637r4rvvhHRPXJaMqJVjoMFGhHJ3qkmGa6JwM9H6cPumidffYw6wo9knAZxZZCqe7zrc7Gz2BxxNu6sGCSuviBoa",
  "key38": "55nybT1MAMs1KCZ9MnnTckd2gCVTMvvshP1L8VnhdXCLNDCUR7DsVGPSheNikARainY8X42WHU3QvVXnKnEz1XNV"
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
