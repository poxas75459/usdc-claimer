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
    "3RXGAVemRB4gSKjK3LyUgWCrwakMZo9XcA2sfPL6N2iYnitUWo1og3tYDevYomcypAbT2QM6k4GojNmCyM3U9Kz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Z63i8UGqhJkMfknGGdxnqxZZffAAqZFri6diPq2D63wrjTZY1HqjjgBCJK6iGtiyHF66uNLXgAgfcqmwRpUAm4",
  "key1": "cjjiymLsRQjftgFR1xzi1dMd4Yvseza47RPyENhmgKDCDEfGcAVD6HYKwScwNJUXRFBMgoKWLvN4UwVbCejwRPe",
  "key2": "3UHf5UiBzwSa36hiNLspZTi6jZrL38XezhuktQvyBkSkTcm3ETFhfAyXy7wK18YR8ku97KUxnaypwgjXsNCazJAz",
  "key3": "12428EhxfMj51oStCunCVbTFJ9rbbDLJHopJ8pxYrxkd4tabHNEV6koSENKj6yctrYXeXY9BbveB1SwYMprWFAy7",
  "key4": "5tkumSS7xcfCP3AJD2B6HnjiXUy5mzuDJ4fCF6nu3hiyp5s5UwbgqPzopyLsKMPxdHwWKoYchFhYCdY2mwiuBc4L",
  "key5": "2fYnaBeP6MtxjbNJ6RsBjBqKcQPbP32naqrEE5ttfFRhLphvN6732QiTyQvYgpdN4ahbkjpv4vejxg1ZvZ2J4qzS",
  "key6": "5q9TzJBF8Mo4NcDbtQ9YCJeREgDYn1TLpHWE9LsBYimgkTrdnNZUDjREEmG59T9HTvspLp79NRyZqWj81AAjU74a",
  "key7": "44Q7mg2bcsJpQEuJuYSja7k4GWuwkN1QSmbnK8SuFUJkyQhdWB7mXCwM3khHMsLJ8TxZu8kFnD5zK82xoaSDDaS9",
  "key8": "4ntPYt6YHzvr4mQdmsg57H6WUNjM3BjNnJQFLsSAaLPgY6bqtHigwp2dn4cLXPjHkBRwdauHaftpbVXgscRWL6mb",
  "key9": "5UCF8ZhsMWqbWskSf1eiEL6Nv4GxTnbNwKPBqqxWnt4XR1oTbF8qVPKgwfiTACeZ78W7puvk1uj3QPbBVxMP9zS8",
  "key10": "Nj2FBd4DaCoAW7V4w9hGDBfCGh2TYXstXcdUsbpjhhMrJEz1EKjYTcibpZ7xUBRo7F8W1z982zAAnznK4HzKEv3",
  "key11": "2eHr2rVdhy68e8zKEt4fwX3L9p2feUVhHz5ndmRLCxseN275955hjDgeRH8utxbvnNKq8ghhu6vGqhbx5WGLfXNt",
  "key12": "5WL6cLTVyt6B7fkL5WuMfTb1nbFo1MwtjnRmHNL4oL1h5JXWXN2FywC3JqpQCtKBioEiLCaT4y2g7A4DQm9oJBnk",
  "key13": "4Ne8FbLdEHu58HWsTrfXY5FojG45zsnP9qM1RPrUVa6yN6hqrq8sZro3diW4pwxjsoW61MVu7gRWARVK6WobfeHU",
  "key14": "gKXva1L5C57cHBh9xJxZxspTKmA3eXkxZfMK2MWwR5QXnZBjcxgaBxKREEZDDfhRP6NX9dEqB5rZgeCZWNTeQMi",
  "key15": "44Q4rJxnDdAS5RMyUM9KY2G8K4TSTXGEKKr99gp1HNXTe1dviucSi3cgXqaNhgU6e5Y3CovoU4sGDCnJzesEWtnb",
  "key16": "3fckvWgDjJLrDWX4XTmTghvR2AiXJKewYXzzp1XHhR8VUGriNxBM91jwQZ2DgVmyVu9Vijm4r59CUtyQKH8ob1TF",
  "key17": "4aJYd35WbsepQomCF2S1yN2Tsr4aM4aViwWKvyR41PjAyg2EgsQYP78eP2g28H8eX56NJcvrjqmJd4tpeDXbUhz5",
  "key18": "2pQxrxtF2ZA9NYqZH8FCZ2XtsY4Lxwx9wQDtXg7DsJ4Lmd4mzANbWdcwh1PhgEPXbaR1RR4riZ2UEPQKoiiMGMss",
  "key19": "52w5MQLgRAHYkX1UuAbjKKvwQENRCqJmXyVFDkq6pNgCCLbk664fPb5JjoJVjxu75sdJerz5UcGoNfwpjMpELYaV",
  "key20": "5tLdnscgpsrrB9vnkhDUsXXCxshpyz6bEMScggm9u3cu4Uigk5KPFVy7FyjZvzHwMzL96FmZw4QqtcvzFbRRLdqt",
  "key21": "3SZz8EtzrYKbujoVH3kZCskUDM5gyhDVBJ11mrnbFwWwjNgBYkYRUdoKB8t5jqreSE75gJUCjDrnpuCrxtcXDBes",
  "key22": "5VNLfuKexEwK5eaeac8o68hQEtXczAF7FsCHmWV6gKSVVJYLQT2fqCTCVUhNV2FeSYbrQHRCqJTh6QPtGbTTRXe",
  "key23": "4g6c2wWhV8jzSrJmpGjBfMQUXokH2w8uEa8W9YFbBehDDFvmcSoZmQTia6HxH6tx7w4FjWMMv57B9yWMQfhXHmf6",
  "key24": "JPPazEwhkJjYbkZGyTcfxCVSX1tYmeStcPDoQ6R6AdcKqjaVrtP6KmRa2e193PnUNopEGcZhQRCD11esytPeqZ8",
  "key25": "yX3puuUs9sQ1dnwbRrhKrARV7sUTnvwviarc3omYTGr6Prbx1ZYnqNYYf9u14j3tJBvX83BPTVBSphyxBhkE69x",
  "key26": "3yCev661vHrBhpVU8N19vMA74Es23rb6eg8Hb2cXL6oejyPCBLsm5PpNskSJoWqa8CV5D8RYjVj6ntbwT7z9n1W9",
  "key27": "ZcggVghgydfWLX237UXgdMEeFkH3vEB42PEReeJWa5W2Yvif4cfWYRDQqUZQxATa8xV5WPEQajoHFJiBTnzEDQg",
  "key28": "VmHqudeauUdJodPyirg1NUwUnohMhz4KmSMKyXvAACNRT2kSxsdbP6KbGRoXmvGhMcqobz9Zoz5noMmCSpwj5BK",
  "key29": "55i5au4dphiD2bHwyxgGEVFfLU8QHE5UmV8BzZTBQduuBBecJdP3MxtPDaxpzGYE5oRm7RN7eSHvRzfcgvbzJcPr",
  "key30": "AXLo3y7e41VnpWuDcFdMdpg1RYndUF2325jcQWggmfwF37d6VbqbKDW4We3qtF9bwnETdEeebKzejRRxT7EJ1iE",
  "key31": "C2CqDQPuQUzmdB9YZbAq8pDRqjTuPt9pTv4tAZswEPWMZX7HPSi4M4264XA5XRNNDFsQx7Q57oLVknfdgmU54Jv",
  "key32": "3oHdXJU3HhDQBCnWxWncpdQRkwz8TjfD8XdZAfWtvabTNbSjSVc2Qhu9HSYW4VsfzhPFhsLnnjD3kKaEYCDZupWC",
  "key33": "2pUozHH5ByiPPepcZuuW3Lp9KherEtqCfa93vM4YxaEyedHTCNb1esTcXcnBdqLrHmmcrHM7LFcNYCHKH434rgXM",
  "key34": "2SQJdx9FyQv1Ww9bHmTHhDGmNDxuq4Ci62rnEBt5r5JhSUYsQBba6xHNLvArLqwWEBwpH8dxScomQSL7iwht8dX3",
  "key35": "35NzLsGRT7BT7J3mhsYNFYdYwHhA9ZaCg8HtL4fe5d5NgNHLZ1NtZgZ2UYbkKHy8mWcXw7CYaF3m3F9XRkHyv6mw",
  "key36": "2uo69M6etYmsJZx4ftWYV5L1G6a64r69zg8PVisXr9fZrB5BVpgXqQXBjac2wvpaE6D6foPeNEntLuqx59UZFb2t",
  "key37": "4c9HsnBCeCRZCuThbVTBvmepXfk8zuaQmsMbZi7Aq8sndvnYGpjLeqavfUzTtA2RZNoMybkSszotxH5aFGZyYyCb",
  "key38": "5bXSuGFJU6i7C5htDLd1LXHYWXv4pxGw23X85NQLF4EJMATdKK1zDDEmMFCEnyJ2xcoYJSWAdjqeP37ZDbnNvSdN",
  "key39": "2GfrFtB2fKdaBeQGEMbaALuBwmTHesjJHVZPQrpNKMLBaoW3mYRWQKz6Q5zUhpxGhziLbbFVeQAyR4aCUV96HxyU",
  "key40": "3E6y6vnDFBZZs6ZaQuwqz2aXZUmo71PgDbdbppcFYzeMTFzmtV9r3GwvEVm1oeE6PYpvqsDYs2dfJgRbnR2y3GtL",
  "key41": "2LM8hbJ94mGz5JwDKRjmTy13zxpXq3Nnry21GYhiAJL8hDnMY8FC3U9aeBy6NSNvtQ3keat9NqfB1drzHKigmHEo",
  "key42": "4rbhRZXiMn8rjKKegLeMsBYAyDTaUvqWY8HBH9xBe2izjiS9aBpz5PYhDNg39m5hsdyHzgvxV3kFtfxPwS43oobm",
  "key43": "4rNnr2wRTSLojYSZURoHnEctCiqFbLts8RXQmy68jg2LKxGPSMstYQdBpMwYqQMxz7hBKWurxF2Xkk3pr5cNvjxd",
  "key44": "63FqkfRz3Hq6Pi7UVfNge95fNWXd9u5NU8qvMdNKAVWH8z8Dp5TWeMUKr1T53j8JtzfuYNW8hgzpqfKmox8j3fhQ"
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
