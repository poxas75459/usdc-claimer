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
    "DPhUF9TDJczRfW8397XirSbgGH3Z2SA7QaFDjgvhe3w1AZEpiVoAm86JVWYoaU4k7qo9NBheSdw2aqn9so6NNh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iJhuUs4mgxuEQb4iiWaZ9xWVHbYtrvDzcgeFuBnvSJ3cACGbZuZ4gPbbVxGFYmGL4T8zJzAjesTAo3poahhaVXF",
  "key1": "LwFpikwdUhF5cJ7xogpKCw2rJQqLTMEcvd6xpQpyKh18vWBfmN2dMWvPCQyj8ze43pwAR1aiaiMs9WruwJ816YB",
  "key2": "2yoevb6kvWfm6Bqo2newhJfQzbD8ki4j8RYvxqVtDQR2vMazHJEBbQ7CYGAXjzYrScgjpN6G85oEDJdw7HeorN6E",
  "key3": "3tUWmbJVvzcmcXBKnYijgDkYiufnjnqvU7gZdp8YuUvKsMyFaP6hmuNPAsqzDnyesdGUB9MjFmT5XhTUuvNe5u9C",
  "key4": "3AiGRpvvqnrgsnzHeGwNnCV2GHekMQDKFdS1Ec5Tc4R7dH8CVbAgtCNZ83JZyPb8fqYiRGyBHbAUxC36zp8yp8de",
  "key5": "5x47sDFp3vRHdoXoiJPFz5ZkdGS7xoM2rGfpK1uScEFWbaAHmBiyZyhic5RAByAd7tLmNdHaN7unLcQ1NMWKWX4D",
  "key6": "5MBJSeA5tv8N5ty1kDYg1YAFK9bFWQjVdoAxkAuTnp5raJutQASiRszZpf5a2MzYmAXGVYHVerjhTjNtVvMMx6HY",
  "key7": "5TU8x2a9yJN15ZtR96JNNYUaV2VkrPmesAv1fePdY4RKQPXfVrFx2j1o9BCMD6spU1sMRxy57TBwK6y25FB8eRaw",
  "key8": "51UJr89UdKhwgQaNpXa6Ti8bURQvumKAkYXQTR8a915h82VXb4RsjK1WYwpXvLWysPKuajmJ2beDLNy5QrEmMhEY",
  "key9": "5o3K8t4Fr2JzkDhXRSh3ePXRwZPMWXgpntocrgwVQKpQoaTDocuqMDJYiNhm53pxBePuHCYZ8Xd6ifTYq87wdBh5",
  "key10": "wMRr5CKi7WJGKpi8nmpm1gKWHfne9CDhb5dqbxwFDW6UKcR1jULTEiSY7E72YkePVsbN8KM3CGJGeyZ6fFGHRDh",
  "key11": "2YmcwkR93H3XBfrBtDtx1nMohxNvBHzNUkp3xMrxNfx5mmH1R39G72i3WWHNzy9z6wDyhpznRkzVwJB2Pqk6BFbk",
  "key12": "3s81fmXSBBL92RB7DqiSLXcD94jwG8e5kPm9GwQggbB69GBH6iCtxYLGaiUD5TPR4v11KdbSeNV5EEtqfoRKnhtp",
  "key13": "NrKquAFHMm6XTCvyFLopXSnQwZRcPmsapzrVc3GxmcbwEqVNzuPQtH3igWYzV4G97cGjBtZyg7mcVicPRa7UG4S",
  "key14": "397e9a8mPg7ercP65EWbekyKgpZoDoNxdSvw6heeqwDmd31ijNKBXaFuHDiMwJfnbmCUnkRRNeW81B1gKHHKoZ4Z",
  "key15": "5gopdZYxK8v3YNbUBQawwGVHWvFBtLqQPdKsivdJTSH4ATaAnjnfqAbXv4RPqThQC3ui9iMmBwfezzoXFiobg78H",
  "key16": "2HDi1T28AM4sp8XuvCGwqt22rCxg2uWx4j1TSwKiZowhWaNu3sXWe5CbM13jvSbHXhCYuAFXnABFTE2mbkMTqjNb",
  "key17": "3k219rQPPMzSjhqE97UvzqR31uxDME2g2W2ASWUfEfsKnpTuUBE6xhcKmMXUJpd8zmAbEYbuRXb3ZKHmq6j7UU2n",
  "key18": "HXcyjk4mhwALB1y8FXbz2TiKpVzTScU8VWPU3aMVJeHrfLQkmAVrLrQjKVRvnrskMvaf9ru9txRTSaPUQTaLpr7",
  "key19": "5d919TzNKTJckpkxMUcLY7yH4Gggb9kxyeQbm8Pg354wRiJ6x2jBkjZfQArDEbpZuAJ3LoV1113dQfrS8XnzeL6D",
  "key20": "52VR1yCmJfqnVZSNquY6tzBz1zFMcCDapFjnrBsL614oQS7SDd85HxDAzsvQxEGcJ5cDM82RSpeNUckaCMg4YCAE",
  "key21": "4dd5ESR4aBcPNeDtmSrUaxALes2MzyVt9dFg3X1iYLLTtpK58XtXwc5NmRzVg9epMpeVpRtLXxmtnrhgRQUKdU2V",
  "key22": "3sFhbtS6WTuCPcjU4d7jdH34PRKPhckdkrLpvL6bAqGJUPok5cSu8bsDQFfD9M27jW2GA2xouSzHbxwehLcHiP4d",
  "key23": "2tuHTgk1Hv3BvyTc52xq5soTSB1ZPqBEq4SiaWTRjZAFpnUtXiBB1Jk2VzZqZiTgXrPhJVjxbvZffwRJyNK1A9rb",
  "key24": "2A3juEkRQGKyKck7YotaDM4rkqDRXLPW6tFtX6SuC64PosXXsSnmhtciwqSrvWpcMmYR4huwDfgdGxFk3wUh5QYT",
  "key25": "4a5uLXorLRwosYLciRMMDYfkwtpKBwUNytByGe1vJfFnZshBUYpSL8PvqK2rU3ZNZcp2QiMx5iaxujEATwZSLTNo",
  "key26": "4yzZkvnmvWhJPoGZoisVWzaqFouCStgiTZDjeE9HStSX3SVLZoaXZw5HaLGyEiZj4kmk6ijHrCmj7ZU9rM7b8zqm",
  "key27": "57SH75A5N1hnWAx4SW9j6pSvgXmpC8phjpWTuw1QjuwvtMjyVg85bXDYnPTbs2NqoXvsdBnpfXwkcKxMEP6wmkzm",
  "key28": "615VNbkccXVvJos99SvHrz6BVn6mJhZ3typsUE4rCHE85yaa5knQ5CCcG3nqkaF5tfz4sv6QUfY8s3TRcHBYhdf",
  "key29": "2xt2tq5g8EvXWWemw6zeq8G5hVGJrMZPNeuDcR7RvUBJ28TJzDiTCznS637F9UohLzQH1SqsBFb2ypFG8LNv5kRk",
  "key30": "2zptkRwfsSEyMudtat1fFXHbSe8a7RyFC2X4oaiVfM75W8Sz8jEsurjZZX4zzckTv57S7RMj5GB4YzNCD2E6R2pe",
  "key31": "3dgRhRqRD91y32Lg8y2ZL2rWxm7vHQS8L7XdiwQgGL2UK5yrKHktdxNCVSReQPagUnA93wqKQt3fNmpCTRCJFYAf",
  "key32": "22oEjQGKG72ZbWJYe1uP4bPeWcrT2vC8K6wVVvyevPx5yPgbbhJSyCueDznx3PzZkAjo7XwW3sAKANDriYkbcsmm",
  "key33": "2aLznTtJbjKgy25qVmV56Qnm4neHmzAv9tG4VR6X6H7CY53gjG7uYMKHPvaJktpHhKiE5oExxZY3GBfYgdnfcTHF",
  "key34": "DkNaccLtz4EpXdFuR6G2UJEPMvmASRFFrUPgZ5ts3KxiRc4GBsenXpbCZu314QdNDLgDLiHJqPbqeawJnubnQ2i",
  "key35": "QkXd2ZoH6VDmudxwsLrgz8BDvxm5bCc4nQMAviVK46xSCjQWxWqYdFqpzJyUnEsEGpKxEtgwBCBqAbsNWBWhS62",
  "key36": "5untL3rUrRS75yedeL5XFMGcJBheH8J4L5zbMTJ1SfnW4hjHjvwmpgJYyjJ9oHxrMEYRxjEL7bFxns7XcY9XanVN",
  "key37": "3Q6JrN2yoHfhxDDTd2KSjtY15EufYGYv5rCYiKqo7DjtufCZ1yMzwDw8tGPHpzBTznfAhpstdiToJGsgciym24Sy",
  "key38": "4PZWXJRqhPcqzBF1y5eYd2nj7NGWjML9iXYbDdsqp9knjhgCYqeAJUfSJQyv4XjzncMGUGUia3UoAyiPbDDHvGV9"
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
