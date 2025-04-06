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
    "421HdYpipn3moyk3ng6p5F6GWhfxuzeCsJgiuvEfBnUF4tBswmALAQf94rWARZ77HxevrYugsjiFHtBzfNUiaPpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZBdbTA3AtUuj8GMvEtWTeJtCfiwfDctXY5f2uUP385X89j8mmVfKiQDn6QbVTPVpnVuGwjbUo5m2gV95jaD4rn",
  "key1": "2SVjqSnXkBvwoYrbvTGpEWDKrfrM9i5uiCuNQz2dkVMLLcJF8CSnGT2PRAgF8ZFjnGWiFyVDPhiHofH8tR27oRLW",
  "key2": "4NY6Hr9udEFu5G2Hh4EWidxktp7a83RxqkDEgVFe3Aw734MnJcfJrRq5FQvFzQZykpjsBR67PeTDuX3HYKRJoLTk",
  "key3": "ReQyrdEFzuPDTJZuhFBnSzcQozEc5n4cEqiYGTeRsSmGCVw5Mk1Cdgsf3NJgKtYMWdwfXFrccKvjvTz24u6jCre",
  "key4": "4eU9xuhPE9QvRm8cRQFKUn3kUBeTsqszE8UjDYBPMLaicPk5J7UEWsYghhN697XQ1T4eiovtheevD4ZqfkjhYfRu",
  "key5": "JNgtUwYP6QCB1oVdURoQWbtFyU1wxnwVGuybDiZ8wxgNkQVwmZRymRXfpnKsf1HKV3mXvWizDqf2zWgVa4rJVcA",
  "key6": "3q8QSmD9mPBVJL4bGy6YCrbzjde3vXfCtBbtjd3oj3mggeyGcEM9ucdBqrb5DZmjtbFFbf4gBwx1qoB3BQ3g7EMN",
  "key7": "4SfGst89tHc3hbxbAbmDRCKCQXSC6JhXm23kbrcmvtN6ZdVGpQqZCw2A95Pux2TGzKv5hrrNcWdnzMsx5TAQzL12",
  "key8": "5FhNRNdkdLjL8f6uNYbEKjrSh9fapxPQ7GZMhMrz8U9j1a7xbQkVhtHNa34JnbeunkAUGFDwC1EphN3jf9azEn2i",
  "key9": "3UvNpsFb8bZnofFYHCMQWtqGqy2PY2FFVLk8FqS4rUsodmkasfpR6rqfBgntzCaGM3T2ufGVuYfoNXPREjQjY3B5",
  "key10": "2uMbSNf5pFy21fmnQyoWQWdU1m3rAPUDLqob9DhwYLxrnnQ9e5bjBWR3di7nrB1k2CuJVAFYHZKXujusHds8mGhZ",
  "key11": "4XM3fzthbFjRKuppiYGDwH4cKsgMQcFZ2p6gHGYiDbdqvBfkbnLwMWcQQhmfmCPnUaTzs6a3pwEooFXY6ANbWd2g",
  "key12": "4KLbyyjqJLFoGqFEy6iosEHxYdauhAcPTjc78cG5RhbtSgHanneir4mpEYkHc6L8LW9S9eoTEEgBXcSKmDab4jPn",
  "key13": "AJ6LT5m6e4GyHDDTZMktv1LZ2ssDMot5xHKUCBvYuC2jKmuxS2BjnXiUbrcrAReuLH654W7RiS3M66PZHKczURN",
  "key14": "5LNsTh2ZWDoy5o3cZoVYg8marTigR8cEntpB4WVKDBFd9x5vzKDxhzWx1TfmuzKvDJ14NK4qqcH5JiDET8GbBsjy",
  "key15": "4669tzTBmYZTmBCxkHezzNyuxp6Z3aS349Pq4QeT9yRDK5XowRVPpwX6obUZk6jRQjGrBLDzQeQcAta9dBxZHBen",
  "key16": "4GdZHtWyiTMkVvwszRFo8PwNp9CYGueScysMp2qgvUNqQEd7YPNSAGxg6XoMtbRPjkMmmsxgFuDnvSiCRfiFEepb",
  "key17": "3zNpgbkGYmoHk1a12u2BgRQARK95jC6Jp911GirTw6tsw7SuWPBwJyfWYP3nYq6g7zeCWuTu1c8moAWDaFxbsHjS",
  "key18": "2AUUV2NT7B4A1PRVDtLD2FNj2ik3h1auGyRy5twDsKqGADTiLiXxHRtBmHG57tbcV3wodYoSCxNu5FZE6Zf9QMPZ",
  "key19": "4sE945ANy51Mjp25q8CsZT9RCaHLry1omM2bmrMnSdgxqYhWz4VjYiU3PjpJYHZ8yQTEYK5ayHGRAWX1XnTr8485",
  "key20": "2LP18BdCvaxycRg9ZCcqkjNZ64wdGMZzn1LLLQz24SVkn4nwzp6StZ3MnfHjBbgTxcqqJuaSdUH2xThcC2WnZQhV",
  "key21": "5bUyQmPkfwt2P9VwFy9cJ3odxzfhfmsXWkP7ySeKUwawp9gaqweMYjbRD71Y7ZCPYz9EpFGrrBvto4vucsohzzjJ",
  "key22": "3GWYXA38XB5sPt25CAG7HHJ82fk2x5RGB1953a7vab4TbfVQGGuZ693AFo6w1fmMivW4QY9x5tbwE6auPG1LsXZL",
  "key23": "2ewEGKPsRArz52xe2zFssVdcRsuF4bPPqSnW2hspEc3Bvbn3EYAPDat1Gia5KHs26bdkBpbnPVsjijP8ArXuepm7",
  "key24": "54YuxFWE4U94ktxW5JQPp5npV7Cfi3gYgTubfJ9Lmcix2N6Kq9STAUweXB54DwUWBJMcS9Cb4n1zQJNtC3iMbVQe",
  "key25": "2DPgnXgW4VyTRnCFxtKaMZxh8YMFBmzxyFAZoNz6coaWCssjVqPYjAkBC5kcMFckMH5VRGyKFeHkDKyaWBcJ99ZZ",
  "key26": "5pkpeqSvaNxmLfDZj5MrWqVtdRKj9eon2VZSVkHBLHSZrWJiEJzLLy8fg99HQtG4xFvLbfpH6DrtAr5nxravrjpJ",
  "key27": "4mVxajnCRj2viQXiGVtA7V36e7qzqoSnJEH1DtoCnZJ9FQnuZ6wCRBGsvx5dhLa1HaY4mYkcR9JpLKCqd7JkT1Zv",
  "key28": "25B11einb8HP7TFr3H7jYEsBapzrDfZMCcHu4xcQKZyjNMFmznmZa3aPNE3AWPhSWBoZdNcWyP86H24rqTYiG9mv",
  "key29": "4VEkojjTXQpsf6oSk7Q4wbcme1mGvBrNVMqi1vpwMBeyuNFL6T99NUSVEMTqG2YXP9J4H4At35kFnScwPers7YHP",
  "key30": "5L6cYGNHnXEc5CHKbMdGLysVNutdbzK8X7NWXipJNyoeq9J6ptMoNgsmf2rwE1qLr3oKny9Gkd7ifm8Jp97TBfZF"
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
