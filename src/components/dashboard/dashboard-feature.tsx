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
    "5o9qQ3GMnnNYjMo25vxGGgirD8n2d2koNhXobiqhCrhcPaqiJWXASuJ6VM5m4GL1VWJoQ2JvZexiLyUXWodeCcji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MKmiasbxr2XmxAmuu6T7eerFqzddtfe1GXaAbxoUe1CV6Gwq9pgGmaQCXh8Hp9e16uDB3zMohEC1nYz1XY8Dm6m",
  "key1": "5QaiJ4RssQJCjq1qwpTnqYQ5PmZo6cfC4KEzec7Whsf6PsmooDdfvo7yjGvxHoPHTmmPutczwwbjQj8Wq73kmhqc",
  "key2": "41LjuJJg2hg5Qk29gzhSQ7VamGNPrwpG8jLGKP3qFzTr61fyjMdWVccnJb8oCM962Nw74j7AL7KAeHAWnqgYCiXM",
  "key3": "31KQh8DenLV5ZwQ8gT1yZWKo5rnhA2LtuF9vD6eBSJKeBy5uEsbvANJ1HrK1SuVnTHg97jYPXFfTPmjYnutiK4as",
  "key4": "23wHJbdWnRpC8qw26MWqYZyyKpFWNapXZ9TK3MWojL6ENamwA52CTwdNhVWJCEtu9YKC2XYQZT9mtbBYrnHFYvwB",
  "key5": "5dCpvJMLE2s4kUdYjCtvpG5Ti4dTRTe5T5kDC2GxvcQbCqYhBH4dWzdooKK9bQToyqrUwrt453Tqie1bbfRAmfa4",
  "key6": "SpnSGzrUjSa7UAmM65KsQnoduaaiEMxy7kxhwqQYXeVmguA7jQwsA2DasE1SdhwRfjiN4AcdWCHPm3xPwnK7FY3",
  "key7": "2Mf2k5ZsD3SuAbSLzGTbEWj6bi5ubr71ys8NackeBKbWBwFMqrxm9hBS67BE9uUqjvozCd9rsNfgxyQt9QhEYdiT",
  "key8": "qfhdon8hcKJW1r4AjoMqaZVrHP5MHYZCd3YCwBKAY22R3DR54bdRjyXzwpEHdsA2eARfhp2zmxLM5VTkqvaw1zg",
  "key9": "ZBg3E2XrF7SPgYV1KqS15HsMwZP1eEQJLoyaRV16yD6BH1jhpnwf3DNeqwFdJsAj9ZdPJpkersyGF4aHRVeP11E",
  "key10": "364YzyAPpMjpX52Xojo4YFXvp2LRFVuPx1dfoeGADG6dvSCbcr8oQ65fpn3bN4aWaBfRHTS6Hf4Wj3pSn9sNGJDB",
  "key11": "5PkNDoGFSkg44HjPtn6fcRwe7SrSQ5FvntJud9qz54pmz8WAUSovyezFZcAACh9JB7PPk9pCZ9XzwMamuCyosusJ",
  "key12": "5Y89A91JWrcwropTrx5pzjjkWDKx16VBUkcwFQMcmkHnFmDp9oAcVR6q1CMKrERrV58QdnpSRed1zszibHYycNDe",
  "key13": "WcmfosRxjcxGnwYgRCFd6oZVqUoNVqi9zuoPY3SdjDBA7iY1bSECjBdwHjm32z8hVUkG2fa981MMe1Du3JWrmke",
  "key14": "pjUoGBfisJsFys6umLDWwmp1z5gK5kLYnwHUrXN9ZLrE4yQHA6Ka2Ld7QiVsaj9GtP6szijaRCE3TBMkVhYGcSc",
  "key15": "3t4tRo484kd7V5Cu4tERY8XLbjuVNj8BnCGjV7G6vShxrSyYuZLpTNoKTHgWFUL4SMQD2hoeLTfZ6M8UxXj4cDLH",
  "key16": "31FG1tdjUcnr9xbvEkJZQxUnjRAyBmAMNM76zjnykNAxSsXWJB2e5HgZ3dNtEi4t7QQNrpbKd8vNBxxJSAR29Tij",
  "key17": "4VdU3TWRD35F4K9FySTS21xia3vQSuFHJvVbhL3ShX7rE7Ry6q2j99ZuscqGwewwrMtwWqMp5eoETbw34LuN6XTs",
  "key18": "5PHdzEvj211aEztWFzbkxNN3hvpBMYN9w7GgyRc3soJEMNt7eoUojTkthZzNWRzCrdzGiz1Be7KywrWE9t4r2waK",
  "key19": "2NCHC3L1mKYdQUZjuAw5p6wXPKs9Kjh9zxzKg7m1TikKtGMKtUEVMMWx1bBXt5kC6TreiX15nmEvSWAsgxsqX3QE",
  "key20": "VZsibr8zepZLZfBs8Wwy9NWL1JZQ9uF5gWRyMkr2rRbYvGx5iSTt55qZpbDGSE8NAvioNWqq3nuHoGgxKyPmWCJ",
  "key21": "5v2sGXFB859sJCZDe5TAmQgHRcEs7YwUGNU8rMzSUzu219VXiJUCMmPbrn18j6GebGVtv6vpTiwgQ9uCTJajYwnR",
  "key22": "3QZkLxtGYsCSeGgLxnnzcXSZq2M2aD1b8QLUcjzXuNEfHEb6xnDEPGSPPH1LGo9WF4i96GeM7wzSfEykWJGyG5ad",
  "key23": "3rLucfDFqDLchZj6SVmeDMfrAU8jgjEvnvqv36vqM3pPZ963GCkXXRjWubFG7DWPkEy8qSp8p9hSc61SMZpmfTxr",
  "key24": "2Z86vjYWu6woJb2nAsfrt6Uiyji17hPP3jHNn4YEfw5xdEtcg42sJvo7zJx51ozGJ5t4HapmPsCFfQyTFdWDkCbR",
  "key25": "2vD7UgHfdFKf3EyA38BVaaqBHbzPRtqMAM3TJ17FQSEBVy33ovEp5zXGNK1ifT8uCpqrYU4xpeecapxzoWjG9gbG",
  "key26": "3HQKWjJWCsPe6j75r2UXFaL4Lk4PtYXYhA57ZiMD2grFHsuv6jJCxGy42dtGjTga8QUQhgspbsWvVFBJ6EbiL3wY",
  "key27": "5AbMZ5YoGMhYedXyqc7yJVTtAsXSfC3ucBXNcRpE4XsQuTFqNQA8wWKPDJQcnRSvTJXns9K7X3sK3tsq9LMWUs4H",
  "key28": "LbjNSD5Rjjnj8ZR5io68S95zQVXR5NBpECMrYuobgLjJivvgYrFtmkBFXQMWREynGZXXby5Df9uwGsqZ8J8HFhq",
  "key29": "3PujLsK98J5p5Ccw4ZvAZz2K6sJzMpxfRsDch4iS4MHddgZEM675LZAWnCDF6fyCL97mCFpsrf8PouAD3M8f1fGi",
  "key30": "5QenfsPPd5oVM61K5bvijPuLy9Z4hVzTvB8XvwLEYTiqoVdKbuviHXdAaKVW8Pv3dUXv6Q4kbgELiYsMpLMxaZLQ",
  "key31": "2pNk9FXqjxeqiqZ1nFWKHvENq7F2NjaipNMe2J3TB1SZSpu9RtY8TwDtswtLNB7DJ7kRq5rx834sUnz9eYeNcVDZ",
  "key32": "3fa7W87ZQP898g3XzJEh8aVdrjUwEDXq4mR3GuS69qnRrdpJGuXWauJmmepQ1CsBr7fz27jHmRux6sFaDUFHp3y9",
  "key33": "2HapCHtgUjGBNGVymAHaKTJ6VtLvJeBrJBGKWoqJjW6Yxc8M1TuaoFs47GVkD2SDR1P1JeDQtS8Keo5AqeNMCFBK",
  "key34": "5mV9jpUnHGCttzKg411ugefTWeYA64gg1pnuFtxX6NQ2mCGnCWJ6G7SLF1RpTtbb5zkMkh43pHXXDnso4DkMVa1S",
  "key35": "2xXZNou2b3bY6u6PycdejuuJbiQSUgi36FoPB7Ur39riLFhmu2kr1uyxiT24cSmhM4Zz7aq3Zp7toFj93BNstCH4",
  "key36": "5bUTCjtCS9pbBfaG2aYbiTMGFi7qLMdzbKepCSHXubvAM2nLodecFd4WFF6FbZasgjWQQJX1oifZcjXEimZ7NWAf",
  "key37": "5pBGH4wzpiZzfUXkb185m9GmVYVwVWpgzFjjo6i2hG6yLuqXGwuasxBZSyJRPzT2bhKQC2jRAxgkFX58PE2166Z3",
  "key38": "2nTdqWa6JSQ7HUacCFWbajeZmAicW5PzfaXF6sQWjBYWB4Crj3MRDHX6Qjk8uuMyzeLWxUdYkecKGYg4eSR92rAk",
  "key39": "4ZusopJW9rfufsvjFkzJBNcRcT8K4FmqcotzMjRoar8tqHUj6mp6dLF1B21NS4m9vExyKrVra5DPNXcRJwUSFF1t",
  "key40": "5vfFQ5ajXB8RtHZKPEhLwjFFwajALGkobKLA6wA8ZKsCxDjiXw8fgv1yJNe5SDgyen16FAY1ispg6TwjSgU3YGe6",
  "key41": "3fkMSwP3RLBLNBSHKgSWtVe3cAWgUdZvTSwXNRU1PmcHvJYdMGLcei1hf6TJDJWP54B1yKgokTASvbb1G7oDX2Um",
  "key42": "WFYL7k29KmHp1dsVigTPJFLN1ZojsSruAgwWC8XMbyYudJxDQmAdHGbRD9THWKKggMW2WAZTcoB42J1FiStEwgu",
  "key43": "5AJom3sTedXixsrghJgGtktyhvoT8YhyFFpzAmNBDDecWCVdjM1v5kw6wixhJiCgf7uJY9Hn8r8V368HHJiLoZ2z"
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
