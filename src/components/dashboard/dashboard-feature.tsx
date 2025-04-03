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
    "2SXwF9WGG9Kohc6EjUAEdtDLvehJ1wf7zufi95biMYJYrje7RDb3HBH8RsMPRLysRpoMQHnjui6iev9H1Mr5sbdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eSa7n2tqJoVrGvKxNC5UNb5cATzVAavgcnbtSa7Jq25Gtq8qARYbTpRh6NhDL3jy455DEpsRRGj9r51oZkagMxu",
  "key1": "4DwV5GSMy4dBEx1ys9MzsLYPHifJGTUGiteuh4Jyu1VMJZTbkNeCtgXGjUaL92asQiEf8jv8QfbSHeDwmtyPngHc",
  "key2": "4YcV2f3kFJw9as8oddQ2VcESzUiLZ49aJDXotUZw7ryyvVH1HapAp1U5J13ctnkmdkSWXe3npmjikbJsPcWmbUkb",
  "key3": "3bT2tf4Sty1NZuW5qJDMAAhhqJDAVrV2rnUFc3KC6QYfRi296n2vXCv6i3CSeJvsCzgkRKcapn9janZUGu6YxMHa",
  "key4": "2zTn7C1ScVfgZsBnKnR2LbMRB1ENzcXZYBYxKrxUvMjo13qERGXFs6fVUrq7WpBpr5RRHmBbUXGyYuWCGBz63xzB",
  "key5": "3yG6KiKVC8Y1yrhefGUdrwKjXZ9H5tAfy6MSoaGZkPwAMa3LQ7D8dyfx7c23bk9fvdikyxzuF3QUzcNviHZwqa5Q",
  "key6": "2YSvghMM9r1YMGC7om3wimc6fXjEpLBWCijS9WKHCPwH1jLbLETBcQQWHdkxpY7NzCCg3jH4M76uuKCsXuzUXZe",
  "key7": "59KuH8PqVUkrXAFgbGj4ipaeeg2Tq9qfRrRtFYx1gPqSC2jbA6omNwcoyTcDEoscnJqNmCYJryh7SQ8CuqEw57Zu",
  "key8": "2HuhofZ34SnBShUfCvugW1ajhd4WP4ctb1tiPKm629ho9c2oG7Hv2C6dZZwgoPA5L3R8siLyubgrRkc1B8Q9Zfvc",
  "key9": "4VG7qzKpxPYSzES2NNeaGv5Y9JS6hGq3HLQ5YxVvVJQ5VbU7ig9yW7duJieJgKgsnn2Rq22ijz5QXECFrVwrgVrn",
  "key10": "5HKcDgC9TB1FxF7YQZ7qHcEt1b7GBcnAuE2hjL7NSguXPdgRGhdLJn2dSPJrtUaYYWdJRbqf9kg8L1MYKMEuVi5H",
  "key11": "4c1Rzasz29Hd1aMKct5evihg4PDFkUVN6RmRt6asJcU2zaokgvPoHXJYdWkoc6sFFreiWQhoNiADtdNfrn3mmzZm",
  "key12": "5Xaxs98hnnyJLAkodpzJp8rU7ncAdpWubxR5KBwMPXMxUMBH3T8EBTAwMM34ahVLUdVfT9BQvb6cxooPKxnXwm7v",
  "key13": "5hjB3ZJv49qctmoUnCdUzGFAvmzP7hi7LmK98jTLHjVU4tjpCZfoYQ2vA8oz2dB2HhjW52rv2roR2n7D2uDVnt2W",
  "key14": "2uhA3kMCxtv5LFZu9UZy2sox8HRjh9wjuHkt56zve1KDgX36r9WCvPHwQnrfah5iyK2uem5mBA1s4uJCRbbHLBEr",
  "key15": "vdWyuyKKf16NuoQhyKCYyQz6cjxgHwVYnFc1qpTJXV6S2kjwSeTmP9d4FRHPGqpA5iLUKM4ZNxzEMC3pBbkP8pP",
  "key16": "3in6yUFKuDTEhNdUYHh4o5uSzxMMAa1f2YHbn6sd6tXePifBNERLeDK32dS2RqRyZL7d5pzNn8syLZV2Uxrxg1ED",
  "key17": "r8myavy4CxtRD9xJ2ctoESgZuB3s6A2zqETcfzSuoKQSJT3ZAvb8M9SHd2uTmPDBfXWtdq5PRVNLiSVACsVGbDu",
  "key18": "tHZKsiVTMGSuhXmfstiHhUeFHuhke8uTqB6xoBQSbHNksbwk2MViT8hZrFx2FbJguxnoJinZocT23oodahW2c8b",
  "key19": "4g9bqUW19nN68svsXPPhoS7WyQ4AkmCuchUEWYZunQ491MSxmrNhCpdKuyv51bqiB4g8pw8tb4XJ83tEhBsBcCJa",
  "key20": "2ds9GJHo2QDyMWYh1vKVHJ2gLWn5iAscNarLj73EdXS2MpeGDi8Pr8mra3GLnrkgA9qqS2DEDQHfCaJEfr6Co5PU",
  "key21": "4RL8BuZ2caycJMAP2tDdfD6Jp1h1etFqBaoKXoS4uEkxKz1hKmYYWmqsawK3N5jbEk6y7W1Fsq1Z7YFQQeJ3UZmX",
  "key22": "4kBjkJdXumrdcq25cSwNWJPS4NutYNF6dmZWPmykannvjc4eREoVKxLRXBNnN93fPJ3E8pDTCsuN3Dp8rULo4JXT",
  "key23": "5mUroLRvJVwaqUJrCWobBvbj4QbxUUGvb2BEkudztfL6DA6cFoMPdNrA7y464Dv31XTyRQFJz5tCFxm59wA4C5jt",
  "key24": "43AiD4qy6yBmEuFgXNYKtjUEVewK5kkk9DZ2pNSXWWBSRsfkxfH7UFg2oNvVrnd1BVJwaKDtTWrztgVxPPNGg2VX",
  "key25": "5iTxJrUzGsvmLUhBKHzYDgdVfwRoPGHQ238xHTD2r6MjZMKmpu8XvwCWWdbmy4BnGRcfeDCMfypegPJLLdFJ5tzq"
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
