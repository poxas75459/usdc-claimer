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
    "AUw3mX1ZUCwuMgHCvFv8pUCygxPRT3yqhzuaxUBkrx1nJrXMubrwfZDDG4yXHtQmYJYL1mhyJbdkbjMpA5FPqh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HfWZvCyhznqf19fNkdiE2nGWLCSRoisHHz6TGNsvMRebJ3EtJTZ2fdq6vTTnCrSYqSmZT9toEpmzNnjd2gXygUo",
  "key1": "4RgPgspEtX8Z2MsH3FYdcHW98HPUAybcR9N9p65HpXgkDBFh6JaAECFVjjjZ8At3CznqfQ4yeFP6c4JAtu8cj1va",
  "key2": "2XFcnDqvi9NrLxELN2cMNdxDeFSj8t8n1FGsTDG3PYvf1sDfUpY9G5SaKs2GQVWa2ZqtQ51CD29sPawqGxc2nti6",
  "key3": "54DUAPRrDFVLztNAXW1f4HHHgtnrggx46TbBNXck7sJSX1JsKDpp8FuF9iQw5bSYVzuXmW9msAFjDuX2buLcsVwF",
  "key4": "5Sx1TuS3idHdxNZ9ikJaYPSv6Pan8usYipyvXdyc68o6UojS7jyrJXJAAp92K45gA4gGBckEWbrF5BFH3Um65oeF",
  "key5": "3Y7M7qW1NWbqVTMCeQjZ9GAviq7tm5C3h8Q9H6XiSSS79u8zE1P8Sq4p8GTe25oMKtdaLxrg1GmFaSQuHnK9tvXc",
  "key6": "5wfYrXWkDJ81n3DT4AkDziB9qEt4QVyBvQcFSrBjiacbZcTZiDYZunAosNtCMhAkchCWNSGxfw6hqqyhNLZ6Da1Z",
  "key7": "3hMgJHZRnJEij1vmx9G6XBcf8gnrZwS5qfagXfa6eawyZoD9tc38j4XFSJV3QguQ53YckisWYh9b4tjmuDQ6myyD",
  "key8": "5ATyTvfM8SB7BZmuzYLWro6tFQUvX5AfWCuZNLEJE3FZtjostRQWjtuSbNXmZyGyZk6vPwUBaGMrmrLPt1fKPYAM",
  "key9": "cJiahNeLjExFKXushtCvHvxa6MVG5YVVjvyYcEtYhitgSoP2jX4rn7RaaNak5tzwEQZ5juFkBaLFQEZnYD95mHF",
  "key10": "kS7jgZNSK28bfbyRmCKv5wBabTNtoujgMTNeENtQVTok8LPiU8xKsgBuBEWUFWqgKw7yav6zu6RyyGT2SfCeN8N",
  "key11": "5FTGZFmfut7xRa8kxW3rtLztC7ZdxJRbsD7xdgb2cx4F1pTG8AAn1UMcwQWGFjApCJQK9myoR4PwJnU4bqJNiT9C",
  "key12": "5SrVJQJY1tK1u38y23eBSPE8fy6Kq1Rhtwc4hDM5LJzykcdscB3BWhLenUTN6jiZTGRfdE3Rw4HhLycFmQ2Cjif",
  "key13": "256Q1AsUm4FyZBb5akgVwcuw1nuKCuP9YGumwNocQertCmKavmqSnU48tHKtiaTKnNwuxrrxeXbQ9JZPw6GVrqpM",
  "key14": "3EW8p3rxGt3kGnQrhbSaw9PC7mJL2KUj7UJv28KEpaKvsjfgBueSEgLpzVUePvKjZ3izXWWvJ4G8V35iUNf1abX",
  "key15": "53VTrwgxRdNRvb76EFgP2R7Ps9JyJi1DBKSYHiDFJekYYgu8bfBK63X5HYzxneYhtjVVwXdqfMrxH62rV8GMCHH2",
  "key16": "54uNoFV5hJmhYfGTbn1NEkPiLdRrQ2PN3Lst9htQ95gFpgg7PWho46PtzRSfUtcQ3bJx9mQUHnv8sgAUXt1wtJPo",
  "key17": "2n6ykBpJdfFngVXHwL4i6Vu4LRDxDpbWpFCAMMfGSrzusjLUEfeF774MEFhM8vKprP5qchYL4ERTqxyQTMvQsNkN",
  "key18": "25atZw2pQAxpRpbBXreaYXEdxfJHUphS6AaHCq49zWDr2CyjTsWdQ2BuUEU1tpNzzVM1eyxrnMakvbaqPUg4zonq",
  "key19": "5cnMabQxpa1S43sqLRTX1yeKMjvePDAAfWse7xixaLiM4q9MbfTt7DQB4nESu3k14ts1Fvj8Kj6bWWR7QodPHiww",
  "key20": "VNuQEhNKuRec6WFPXDTmM8hPwaNwkHu92fmGFWmBj2KTt9Hj35N75QiFJt5FKYaHizhASmN3nQNpUbuyUrUufvM",
  "key21": "mt3Z4VvRubDxMSK7YXypss3x6fMR8Jr7mzNxzRmAQWz6Asw6vU6Vv4WNYNhR7mxgAysPRLTrzsYiYoZdSq4zDAt",
  "key22": "5LtCeYbPezaarAzw1vqNetb1QF4RvcfToJ5X7JAWLCVQHaVbCYmSXcGM4AvDqQrwj2A7o74M8xUyfk7yB5NLr2bV",
  "key23": "4VKpXc961GBwQaU3DodBtqDd4t9NTWZXjcJzHdRF2F1P7U1Hc7aiDjnQojJsx3PjHXR9MzFx2EH5mErZCT6UUgzN",
  "key24": "2E8D8ZvkNSV1CBagvq2WSTthdAyvCd5WhkSoXNv12zU1t9LB7Ng9TheHcTjviivxSxueVGQR8TuK3NwWGtqFKwo8",
  "key25": "uYcNFo3oXTpgbqPXTc1Tt5zp8QewvChNPSvZMcKszhqkCY91LXf4HxWiUU4RdnsyY7Nj3FNQok1pXs2jUpWVPMc",
  "key26": "2Rh3B9YPas5BPtkYXR7P4VHd7WbsPB2Vj4dafK8DCWhS615c8wGBfYwbavpySzRi6KzkksuhaoKmoMiEKw9ajjx6",
  "key27": "5dMXGEAS8vMgwnB8RgQiohUM2n1mPxuxhc9H8GKS9vnFPexDoZLnJFgYXkBoNnjqhrkfFCe9KccWnSULrmRg6jSA",
  "key28": "5HSkHnhcwbowK6ymr939bYb3vvizBMENiwhXxxp4wTuJzP1LiQ8CTEGWrZaoL4TYJdeLAaKUxT9imQJhGuhDHEeB",
  "key29": "3ia8TTjN6uFs24fJyEK5wDuiH8hatckE8yVwVoR6xoPiPRNCpSLoqxLKpFUQHM83W5BoX4DVP7QTXkLbMgrEjRak",
  "key30": "2wpYnVnxw1vvnaXdSFyuofnxJY44iwj85cfX79hRLPcsG3mJ3gUWNHRpKAXAUD3pKu2gpMehXozkTR4Tga3kt15U",
  "key31": "usAu8MBU48PvReieV8Q53vc28dgH3XgzfvDVEQAke9yMWNWdKR6JXpbQUL7BjWJS1qWq57s5nA68N8yF9rZDmSc",
  "key32": "5b3bVzcVtuyCLYxu5y1zLzPmnj1FFfZMaYeTAGHMiDUFtGKb5YppKmSM2tgpkRNaUPvHV9Ju95jEP8PH52NkzQR5",
  "key33": "3cCJb75PQe6Pfb85Bq7uupS3yvM6WeQ9qygK45nVwJJgqi6vpHLmxx3TyArDNvUjPU4VTRBr8cEB8s6ijJd4BBYa",
  "key34": "52imUMpr89Xk4mrUdvsQG1hwMhCSttqJ2e39wBW1URkDKpKzra6U9BiEi9E3uDWYU1uEkFVixiGuT3AvNHg35FcH",
  "key35": "5dziodpqRqEVUFADTy6D6QZEco7AJhWpMMHaD6pZW8boiqTaDy8nxTdnRh6vwdgyYU139p7JpEf4U3tm5gZXXcqh",
  "key36": "2HNizRGyo3w4qNbmJ9nVgjfQTPiE2Jsjd4ws3VQwWWXaRqz1fmUAGBqT2Zq3h4QkDW7B7iRNojH3D8sawcaygmMM",
  "key37": "4bdNX3tH5Dhqc55Eo9gA6kawjywKqwjqi9T4xemUWQyLakfT5hiabeZ6A3sqFL6fwjtDY4cu8st4C3zfgDqKriSp",
  "key38": "2B9hZSa7R48kC7K3D74Fhkj4ozktwHQ5AFaeb8qxhassSNGVZjJS4CZf6yruM7WDhAefbkj3nnCaukFb2JMD8xMb",
  "key39": "4cvLdrRzULk7KWJ75E4iQ1k2MEHtLNRwjkbDJfaYKB4FJMXwaAKqEhXjFZNCuDsxGWcesuGWiZdVUdoquNinVo4o",
  "key40": "3vuF8ja8BZirEirDprf42nW4jsQ9HcXBhSU6qm6r9iKZy7hcwBxzcNpsYQqPmnoq6bU3a4inTxJVHyCUwqMk5dSU",
  "key41": "2HGGY3WK6raePhRYRe8RLoqdxsgJDbYty2h6n95aMH4Mv1c9g9x1M2AaVVgTWoQ75tnJ5e889A6FNM6MXddHYhXa"
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
