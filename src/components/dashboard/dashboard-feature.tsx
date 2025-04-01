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
    "3yTm57efsHMLGLYBc4GGHyprBGa47chVqW5RAbjGSGjQjhLWwJ72382dZXsnbApVwTMWjBVDD2vRKafHdRKos29m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YroJomhuoPBDa8VcjRj5cmKwbMCSQJsSBsDsDhXqLM2qyUyjj5QW5ZH7YVnkiSHdUaa3YrvtcvoDUaLPCkn2Xtk",
  "key1": "2yYwtgXKUnxr2iXH2mHfgksKZdNHJZmLHetGJw7CwXYdAMqbnhy22NHZCNvfhRvyi9Y57zECCrMMevYUysJWFs9T",
  "key2": "5fzdzQZyxRFUG1U1jYgW86z6zLPNg5VojLJY6S1Zm83C4trh4QqZKRFzXSvMAqRxmyhs3XtgqNjoe6Sb7i2ikAx7",
  "key3": "YbDVVdHUtbfcsnuhVyKC2yhqQXoiodBA7rBbJY5st5tkK8CNzEboHWJkE7VUqJPmbC43LSJT54Avg1RfkfNyo9D",
  "key4": "3zyDTijiXq6vq7jmtv6AEHxjDSR1ynK5JLFbbFNhupwV61zHCvpsmJNa1PJuS58qU13i9zaHm71TwMnUqYv12zs8",
  "key5": "5LNgtvg7WBJr1S7ZpBW7hZH5R8h84CLDmeTgzdgdSmxZRkMwBjqy8RVUSUhRx5Kcidj6p3XKKSxEo7BP5isFiNj6",
  "key6": "2LZdD8dKggUNi4jXAD5hQksJtjsDhRBtU4xYrT7xbPcSptSg2M5U7nJ3bJJxywCzs7uKcnfR9yDWcRH4Rgx46Yme",
  "key7": "3zzZQ61gUVdJYJuVYPz9h9hYZMUDoj3N6WrnkFieScX97KyK9ovauRbNTSqewqYwVZMSxWsbt7sqZZZQpgiRvbEa",
  "key8": "5UjbJArzkEfZSkRMjujA4B79foWU3thx8Wn8cDgAdzLvGwuVbWe1Mw19D7JbjxUdKhbDdKDbYRPsUJXr3JuXAA4C",
  "key9": "4iRdytBifCq8Eg4vFYWyENA8VmiiQ4Zbxn6GxcVa7AJRDHjnw12LEuHEa8mS32oTMFNYzfz1n7LVnQrnBxrPof6A",
  "key10": "Y1bx1KhGqd4QaG7jPCce9Trvzt6yfFKPXVnfRpAaPDAJqSqgydAriuDB24vpB5YCHw2V87LhCeaZESqZYphB43g",
  "key11": "5SWdvf19mwjn9hv8LJXLyzUP6TMAbAskTap7TmiiVzce5pLZAzsLcovvEQFcLrKpQdBwbM1Wnofy3A4gwkFth1i7",
  "key12": "tHBBZPqE8C2mga1EpR2nqNVsnjP6ZZUsQk7TXQUtg8NWzWaRwmPJHRGpAYLKJrkopQN4vU9H7ahLCAkLh2HJzhW",
  "key13": "M9NSyGV1piwBQHSJUZtP1FJxBWqYsaqTiEGRwvLYyV93jkqZpcZuSFMms6bafwmrZM7cMnctLnQ5hKf4ZodFktW",
  "key14": "2Jt4xGUpoDn1R2VbxKWMKXMwmmdvYBDtESmoTuSVakazKdWBC5GZo96TNxZ1T3VdsdCDkfhsEUnqAzjMPRTENYnY",
  "key15": "5JDjQ4J1dMTYHvNgKhcJPjAATV8h1hZG5d2zC7cynwtV9o3LeRHy9asp1SrXa7LefTc5AsdZQq91wiGdw74ZkT42",
  "key16": "zjxeyT78kA2dR9W8i5PsSpVLKKb7ucBYp3oaZFParqaYL7io4FUD3bsJRJf9vk1QsHNVp5Jk5wyfguKMZwPoLz2",
  "key17": "oyXw22WzznzUBR1tnT5DfSBk6NtuMMczhxU9pVhP9tfEomUhABqhnC5vHMu2XqE3tzepedZaRCkThBBBPs36MhY",
  "key18": "4wa2uedg14daWJXiATHRuMwhrN28FuBMHNSnJbfXNSrEVARFhKf3bE3oFKoU3ckoVBAKvd1y5ParwdWHpxJS7BLG",
  "key19": "4fbg28cSrbah5K6SyvBHsCQYpmcdXdnYY5nDszV8P61tmJo4kwdCB9GoNPqiYNJCaZMX4KdAii7pUmYS6ZBcccNB",
  "key20": "5cAG6nnLMvhEw2JMfCguGdz84xLuC9XidmgKo5oEXCsbSETav4FrF3xXitkDHX2A8BZULLHVtGtvqp5HhU9R2mih",
  "key21": "32XQ3pVEbLyLhhYh5NhsZNA6jDbKHdUH2nfZ7PPVnMUG3jY8BhgTjf668KeoAJges8ZQs3uHgtGYkwLDdtyW58Mp",
  "key22": "38s1KeGHDcfxKJDtLEUrJWduj8uxskPJ9WvtaN2tNFSVNLSZdCvD9XrugpqPzjBAj31vcTYPNAMbvwvJmcJu97RL",
  "key23": "xnEUEz2ZtTxo3wLAnud6gbwEap4u8SMiNjZ2DP1ZjAHdXVg3UD7F1c9LZkfTjL9fBn4V7dPYVVoXHRoR7itqnGZ",
  "key24": "5uPkDnvqSzD9v8RfSC4nZhMzx7QW866aZiYRAG3Wu4P72B31cudxArNQ2XidepVgF4Bs9vk7wuEtXRQLca35dehu",
  "key25": "5b7ozhZ8vH6RJtoS8eHgbZrYv6XBG7VbC1FdbySzCQ1jjVWHid1AmBLwMuFiHznnUNPYCaU3rhXNn8CsvytNYRpg",
  "key26": "4L7aVQbBoCcfbUDpNarnmR9uH5JReG5E61jTgAakNwdcrL5Gyg6gAqACUPzQ4gH7YLuRadVyc8GLAEAbG27agbGd",
  "key27": "34W9MtHbx5TyMoKcxxD3NysLj34t1eTSiA39FZC1BNZTF9nowWMmqKjrdsF3AG1HGf7icpLygjz7AsV47tTn5njv",
  "key28": "GQQYhLnS5LoeGb2SKGcWfU1gawtjab7sbTh6zWe7q2tHidirt3zqoQA3m7agMaSEWuWmaT4stbXAuiSe6oUBFMj",
  "key29": "5k8f93rA9RBiKCfAYg3pwJzSCAaLvJBRHDrKwJ2Ysq4FjNY19cnw4JmyPXEwkdAhHwAyMJH3exzyzBUK8BM5gmLi",
  "key30": "4yfcM5t164F6dg2Bed3r9hWJhups3kbwG2LuPMTuCnhRv5mQo2StoQRR9yrb385zR1rmxhw8TNmXcgmTxknz296Q",
  "key31": "4DsCgF6f31J7k9BzYWUHtUAS9TVaJRz2JJhseKkzXia4xFXMJpJy5sHWQkTxjxRTXfTYWzY3iZeHWsWnfaEV7VPd",
  "key32": "eTeKKvP7vPrLCk1yHZSVuaBHrg3dKuuati5LpF1FcnCc9J4LANjXCPvNNPvyQPgot5AGiZShTAqKzWCFZ8G6fqZ",
  "key33": "4EoAhHqDRrrKJpwpY3SQQcQqVXmuLTnoFpmRYRMntpRiVPBhAtKavkDwhdJHra4wZZTTY17rg2u5uGeXk5arfBmg",
  "key34": "5KRdMcAdESKEALJHm4cmNFdUycUcSb7r1gb5YGLybgR8T6ZXfGf4L1gBXHr9v6ZGCx4HWvE7vE3PMqqXMY5SRnpW",
  "key35": "2XWWwHgqh24RT9nHkiPy4Hd1ziZDkTuEwMuQyNEkmNZcdwPwD7Gptvf8zr7KB38F42Sob6dyLfiZMEiia5J8z4rD",
  "key36": "2pa3Wq3vPszVpyRweNNHRjBh4TCW1ZcAA8NpYhrbEHEootimd66A8rm68eLZn8HmJJrbt57Bh13qovRm833ZbF7A",
  "key37": "37H7nbw5xfZu9rhGbzoRJaDcpSHo6GaxMgkcu3ptFzkFV4ttpUFRtpGtBcYNb4QBaxWQgqUJWJspXz5J6kUEqdWt",
  "key38": "4Fz4Qz4Z6Z6UjfNccDCpQimk3nwGMJfV2Zx1UCte9q7RJMmF4jso2E6eGfZcLLV6uZ5US7VibtXqwR47GuaWQDri",
  "key39": "37v8cENQMrCJ65o95fJVuuXMCv5adickYkhq6cfTQa9XUM5oazvKdwhP4A4N3jKWek7SX79SG8Ugso65grnwLkWV",
  "key40": "3P6sHyJ4CLp1noghnZ884SngjQm97PtUdRmu3WM9fpJUfcbMJXfX6Drj6zsDLCi6ykEvKu3PumZhdG5cmS16cLXp",
  "key41": "4tW35HDHHUHYfJMCiTfHycXbqwP7e14PDYXLFrmMQXtsFrguHHogkYnyjRcbtsekyU3Zizeye581beeKFSTsf4Je",
  "key42": "29XmnngwShnRuZWF1fu9H5siR2NjpEmaRjMqprqMpyX3iuUhtrUQSajmYEhc4u9hRSGKuVbpUP6tQfEWDHgmyrJG",
  "key43": "2Dh941rvFjUUvtHeSNMFEvR7eCr9UTYb1H7zxXZHFGpPPhLEfW9ZSH4aG6zvBZnjVD8NTqnoiLwWuXrJvRDRnY5W",
  "key44": "549eAQ8ZwDejCchcxoGT7h15FvvyyUqX5wARUckWQFMr92269WSffuKbQLSn1CkoV3A1PMGH5Y8AxuJ3S9nQ1gZ9"
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
