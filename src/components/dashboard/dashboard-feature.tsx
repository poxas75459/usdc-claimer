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
    "k7QgkZE1ABaNaJ4ZeaB163jyNzQxfEFbvLHUKvoABN8r8tJC88Ks1DgcUwb76XEBctMk2Gw3hJvarNjCfB6b68b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j9sXkPV9xPS7GBtiU667vXxeg8nGpso6p7q6hyyp5KRyYDckiHLBuDdndi6AJGfgqykFghtzp5TYc2qXTnYrXsS",
  "key1": "3j5YY46ccQezvToyNw9JLNzrrFg3VGVDtEuRHWca1Q225vfixE8TLreAKKUjh11weNHcA1Sd4ge8QWwpFhSLi2Ah",
  "key2": "2bX8tiWMSN4nVCEoYtn8WMHLp94mXcJpynGQXQJtaQMBVR8zYEU5RQtx2UVFj5rrRnR2BowFoCpNNaFrrXGvey7e",
  "key3": "3f4gPaNAn8tPugVqXQch8yyiSqxUBLfNrv8c3w4RYX42w8dLFLVgn9geaMGTYcCyQfmW1wDiFAAgfiMmB5y5LVc1",
  "key4": "2niap3571gMPoetbb2KLRXvMfjPuzuSbBfgSokoyQ74ubSfvePLXrDTzAgBed3P5S5KRMdSF7hNStYuY8qCazw5e",
  "key5": "MFnqohUb3hEDFZYGoCv62ew3TdkbStro4oFVsKJ7kvLU5waFnsTA7NpPscBzf8VZxbLYVkEj6mPPp1CLxVa9kj1",
  "key6": "4PoYfPs8DVvgncARe7AcHfD1K76bPCCezEU3n4tZQyReQidEDH6uVpiL78inFZEbXMZ5N19VvjNyHairqZkaDMFW",
  "key7": "63sGbSSbQWAVhu5ZH373dy6hMcwtJ2i3Jef2WAuBNnsy8faJE6ZdW6UFeMFjassY8WQvuetwPPNMENi6ou1GQKLV",
  "key8": "5kJXf3GpAFpkejmCYZFji9DM1F8vKL2tawtHhFFhAYjg7ofLG8qCKkmjn2pPTKQUp1zVkDydwo7JB59TFH4CiPM6",
  "key9": "7esU456z7vv3Vx61SM8sufaptFf8F1Ki5oA48bkWLhDzdEbnMQyKgLtiC7TWMRjydYGcQJLAG5VqHECUP1caj2d",
  "key10": "5L3JE4sSWoFfqoBC8k11c2s8GLpYc8RmXRUDbY7AjsjMYcafv8mPMfPhNcUjwGG41E29L9h4eH1BmDxxsjnM3kSH",
  "key11": "jpojQGgnUuYYWhUhZaFoEeUabLefdfMhZG2wBbzmGTQq5ZEyJUYkXWKNkRi32K5wzDxj4GoR8QC4in8bFc2NS9s",
  "key12": "2hksRYFAEKYpwojb1sqgXuKVhSDFeKPWGmNouHoA4zNfzDSg7CzeqVVZvPnMjBj4YcNaoqQz9p7VXkJQRsU5WNW9",
  "key13": "42AccPCxz54iryTd9cNU9qzdwp9YeZGQyF65Em33WDsFtnVt17HbrwBAEVwkMq6WNuYNC6ZbcrSMuic7517aQuST",
  "key14": "62JSSpHrNodom5Mxc3AxVCj7GJLrs2bbTh8VkUZxTE5WW7wmaLySUEwxU6o3ymxH8NBzV6UmGCyhYzzmgSH8GwtL",
  "key15": "2ksvGQHTHBKxgv4cT7ay2RL1eCqYnnSj6wQLS78uGn4ziU6tytRtWygwxnrfCDMvJrWFxKnhqzfp85RxJMmwnwgD",
  "key16": "65qCqGEdYnSF1J7grmu1e2dw5NE57tHCfKfHJU6VCR6XmVRwfzNSM9ok1DVKDg9rAeds9qTTnf1GU6CAxhCan2oK",
  "key17": "4JirFcv1a6vhVq622JtMtkf3Tm22HCo4nP9E1gv2DSErizccYcfA7NjYg1Ku9mbjawgw2c32ZVqfdebSnAafDwuL",
  "key18": "5xhH5cLPLdC5pxbh7xGme8n5RJ3FVKf2ci3MvTNNEQ7211y9EhuzPYrWyDDQ2onFhYigYVHnvnZavgDzD32df3Xj",
  "key19": "65krQXYcNvgK4bKt852YJJ4w1nS77VaUs9wN6FVEhGwKERpfDtSFYRg832PdGtSRJXDsWZHbbsaTRK488t8CxBfd",
  "key20": "S68BtUngG2rCStSNGEhCE9u7torTFWX8gQ4W6FrR4HXJZDNmaTexG1qfaS9on1FrhGoRS5xfpVYsbk2yLmjgyu9",
  "key21": "2pyVknpDZyQMBwi8kTF2Hd5YEfsx2RNhiS6vEG3jGfFiafpo3PjavyQcKcReJF6JNGJBtYf4XxHfX9WKb9Rt4T2U",
  "key22": "5AUmEqCvLhGus4VU3FFDdWCv1Si5yscqJncrX4ncjHMXsSt7qZ3fmSia3f2Q5C37hMyrMme4uLUYMN1ji39HoDHU",
  "key23": "4MueGExXij3ztpLJsbYvRcpP3CTACzFYBx2i1LSsajmYdGkXZaQm1V5g8ZxhEkhiPy5hmW8sipbKuh7gFzM9k3aE",
  "key24": "2V3ut52UAQgAC6euigeWLaJkenpEEGBzT18PQHJg6Ezs9cB5wuzGMFuBpLQLPCuG94QZidcC4yaALfnjcB3TH9G3",
  "key25": "FcuBT23R9RSoKxHeZ4eFfiRb7DKniWLYF2qjy7TgDs1iEdpxLBGDp4Rs5asw8TSULmFQwjQi6CsvwTmS1vnV3LZ",
  "key26": "2e1H8AECNDQhipBxsz8TBPJWfSuxUfu9u9YRweLX7fSDh63ndu2xT4DuXyHDn8TTCZH7dx4uHJmULAC7XBGNDuc2",
  "key27": "5H2n1PTXNSZodArCKsL9Pa8sgR82ZTxZVhNxhks5GHo4g78MdhCQCkzFwW6TjZgpfTRKzPYW6j7qGaQPeX1umkVK",
  "key28": "k22bShMAWZweHJLgH7WpEWdzeRSChyEPfUYXc3o6Cs4VQbF75Vz7L4gGCwnbWiEekCKe55Zf1pW3Y8QGxcZyTNi",
  "key29": "4M7f1jsLhNe1cjA9ECwD8ZQ9Wi2mUE1bCMPXSpgt7zXD4izwuc15y5zczJMdwENfhhKzr5FnpHXyKmuhKQUVNBhF",
  "key30": "2DrrQWffHAjJNAXX5SqCqnHhte9goNAwEHpgNHKqrwRTZn72pRc36WD2zENfbLtxRvN4BKcLATzUYfS2TUFbNoL",
  "key31": "5XaGV3V4W4zD9CLZG9UYNZ7YDZ5BAu621PAds6stjabE2B8taNyrkC54jsNjNZxVFopXfqY6p5jGa97vpKcNR4uZ",
  "key32": "4tZRzptFX1rpu49LfpPwyrrFKiYHXB8ofB2DmQc8zgEbYy6mSuxTy1oxvrBpHWsr2zjU1noAUETADgek2x95AumL",
  "key33": "4mp4rabL7ncmz97C9qXpAywXeN9572KKSPpmEV3i6AyYFESV5ZXcwFQExKEG65pBapwrqrdyEReBd8eizUSZJSsQ",
  "key34": "5zkg67swrXDVdGbqTyy8P5gddRCvFPug1mv1CaVETXZ37EzHeoBrkJv8xKw7b8Vkw1JAWKFi8CWRuMQQiLtuLbFF",
  "key35": "5PAYs437VsLisBZRimZ7vzpSqc2AX6L3Vpp5mFzLZyUPi8teEEExrKxEjdygqz9bNjnbv1i3NJJUfKL59oDJayXb",
  "key36": "4u67iV5qsYkhpxXTgQycBueMMyGxSxCZqfkn8DhSRkbiRDmWY8iv2t1UAUa5xM3VRvf1JFtPfRb3EMrmrCPpdYtd",
  "key37": "3MMK6EusgbrpVS9DX37dXQoBYD8bEwXuBqCjCqhn4mWZ5YojknErmEnZ5116dYKMxS8ZbDtHEK6PwctKXy4iTRnu",
  "key38": "3pEvF2jFdTGo7KnXUYtK4cqndD5CmxgawBPSAEG7vdWfq6Y1Ru2YtmFMJ2eK74H4JPTDEoTpCzdKg2LprehwT1CQ",
  "key39": "5EBUv2DfWHEVCW1AsMpCraExTZsaXn6NBvpcLc7baUdM77GFZ3GM66spePM747zLYDq91iF1oegP7udkSHMigVTH",
  "key40": "5CeBR4qiXxT8moC9euo7bPb1mFWTXxUfhnseEyzLxi9FDeBLCYfMyyZFCjTV5q1V8cwcLmkfmbgkU38ySEahbpNA",
  "key41": "4yCWfwbJ7Y9VbqtFUAf3t8NGsDRkkoEPzsQ9VW8WpUr7pRge6q5f6FFzZYKoznBzd6QeVw1NpHKPLDuAi9Ahncip",
  "key42": "ySr6Hr5e8QmzYXDtpTiXXok1Lz92PDXFiaVpzvEN1UGsuvtNAb9ihxSPy4k6cZrtYonAu4t3WGi3DUsSbADr9pm",
  "key43": "3DSTA5bZuToP2FPpYnhdg4hNthsYoi4ggs7gsAt2K4ca5Z5yDfZS4MSgchVHF7n2RYhNqwxrP7Vy3Lg6XkVnF2VL",
  "key44": "3XWbky7A1vebBaYmq9GcRgKvAwSzD7pTcsEkrpnv5KwpnsocJUidbsMmpJyZqnBbNsGqBNdfUzsWtKfxNtMvXcNt",
  "key45": "AnGUW7rwuHUKwwgAEKAC7MaWPNnwVD8s1NjLwWjziPwyAWEGpaE1H71JRHuMtXRSkK3gctStEdN4LFf9qeRsLWP",
  "key46": "zSfZLKqhYJgbpKdzSSWtQsR4fMFc9bJb6wGSKnpooNcF8bomNwE4uWBGMtvci4oi3K2bRxwNctKatb9GNbvWDZ1",
  "key47": "5sg4Hq8whfp2FePK96DRNHeqKUoxsoN9NdizSsBVo5ogmMNstiNh1qzp5uh5kiZ1b64PXTqewcC1G8ZsR8whA1jp",
  "key48": "5bxs3RuCwkPj1xbi2qrxTVifPjmuvJTXkt6fv3ZEpkUh9fboi6G1XfBZLjHDh1LtDFFKQV6qrmBj6teE6kXQbW4n"
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
