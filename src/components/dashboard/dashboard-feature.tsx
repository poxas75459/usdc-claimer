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
    "61TFF5eGDxCuyAaewSGhUtaDjDjpzg7tdR1dTHiBi7j7PyVv8XzSZBefZ3nvaMvCDhG7pNYshpFdPvYdacTTrqhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59vFHMzHP5ojBEkBRQpxxh6nMuzeQpcPXrKPqsShmFh6PSs5e6n9ideu7jZEwJJvbRjpQC31jAFwN4QUXvRcofNa",
  "key1": "2PahcsWeW565wwDmKyjxveafbD3yHMT6qcKuhzZrHCzyczZ3Kkii4oqxDeNRhpspwUEUgzGgz2gXT3MRxwS1XW8",
  "key2": "4c31EqGgp2vWmPSTj1ayDpBGiredihshFrSM77azZwX57kxasBYdA2196jh7paug1qTcoS7Jds1PpqQgTjyWty8V",
  "key3": "4dPhotrszP4iqwyLB4sZVkiQMNKwv5K1NRjkCZXZdJRrCcqXVMaqpNd4Z7HYpkRU59Nt5dT64ibVZ4HS7Q4mXBLe",
  "key4": "32wqNASP3tG3Gqd9nLzo1DEGx2Ydiha8NDd2FuRNUA9wcKFHGqWt9s64FNM8mbq2vbwQCUViBsC2XgTvEsxHxy1q",
  "key5": "4XFRfAnHRq2wTMnJyTWrzYJafZW99JY5EdAYmxoxA7J9QSrsYEyJEBGRgzLeHYi1cR8YtS1xLK2fqRyUUqSPtepF",
  "key6": "2tziLtxd13jiKmV7gePiUiJ3vz3pargZGq8d9FQj578SLNqxm45Y1PbVM7HtaKF37Y7ZMxr5RnEZTSAWabCoUGUz",
  "key7": "R9HKCGVhjCBgPrzMKAuKRKuoBvQCFF2UuUeFC7GnawafsQkxXY8Taa8YozDtvSrojbSjRPgD5FmrsxNqPStgFab",
  "key8": "4bceWvBvQwb2miDbCy2ZVZ6dGvgfMhG3BqV32KbWiCkQG8q6MmnrhXbtmSuZp5RBeSdwaa284nkhhVTDVbipYLDd",
  "key9": "4DYKhDNzsSRishJS8SgtqhzammeDH5QNPx5uCrAACmWGiVWtv5jJg6fRo2mwdjigUG9BPJibEhH4BCSbke76puXw",
  "key10": "412TQCm66VoVAnfSLJPYNsg1WBSpu3iyGr5uaugnxoe7Ksty8AR4TQWLcboTqys7Jv9D9HcmGZpNUVUXhdwFTrUh",
  "key11": "5HiX4ViVXu8rZqBY6P2r7gMDHDS37kg6j9LnQetazqLmpi8ZtLLkofvB3ZZaFWamoUGjeSVgBKNyJbmWTrjBzik4",
  "key12": "5YSESB9oTzGmaVtjSEz2bExZa5T56XAwnicshyHKJLKtJpg2tzDkpgzjDZBhSSTmiZ1PH9ZL2s1NsFbrDmQoB9Ke",
  "key13": "62doFh1TvLTHhL34oSSeCFTYy8oEq2teUF3C5Ubdde75rVBooZ3KfWjNeNzsU9GJtdsJsEWsHxgWJfBi17UxjRcD",
  "key14": "VVqEddrK4DSJonsGzLjXUNPrjYVQy583BYg9ZzrExE9n3gN917jnsHTk7FeAQNKMzK8aAAv31q9K2Ji8CcND1b5",
  "key15": "y7wXQoVf4foFXFvKmFnHBFfGUiEEY5tQHEw67wSKy51F1u7T8q9oR18wLMdw2qrr2vEp7U8qywy2C1dY1a6Ku15",
  "key16": "3KZUxXt5zKyoouaaC13hWLKYcuXWmRAes3Q4tPK3zWeeJprVoX1J47mGhxJFJiiEdX5HPyg9tbNntt4rg3u9N7gm",
  "key17": "3ZE6QdPfNjpdwvFFC2pzjhStbhnVRJg6LdaEgSjCBtfg7vnvwtz2MMbAjA5ZZaWtackVbLEh24EGp9coWzRmNCHZ",
  "key18": "2vSoFUvxupjmmsoJstSr4suopnzjMrDv7RwKWwR1UJNkbXWjYPvppFEMhgJQXwc1zbYCBmwhaLofEShiuVRCk2S",
  "key19": "fbtjDUc4qo2uQcaAdENP3B94fDFVfx3ZoQYwz5PJc3DBSbdDKkhgX37wCKcHJqMsjqRKrJyy4dQaMPrATyx4FDJ",
  "key20": "2wcfuSMkTExrdxT4wck5CXTE1fwaL8K3SBC3VDJTpD8ZbCemnEfYbmb6YEPj6n6nA8NcBY6CKkqdtcjgBGRFMJd",
  "key21": "4QyeEULJ6zZ21uybF47yDvBKx9937KbSQvthJ6rBUWdRUsoHPFnfNGGzPWyD38y1Lt12pFRTvHDuinv2a9ChVErv",
  "key22": "5ZiqojTeFgXR1LV3eeRVatjGRvTdtbC1qq2rU4Gmh6iLLAvRstD5dyNLrEtVxZrwVMrTvvLM5YgJ8emb5z4RYcUM",
  "key23": "5qdvzkK3zXRtNHNqfT4TuQryHQoMZDL3otoiaZkXjxUqs9VjPRPqb8zfLivH9VKt61njxx44wwAeTn7vL1KDxrTT",
  "key24": "4Thx6SBcKxRe6Aexa38dg1d6DhfdtDf7RmS68m82TtjQb2V2iCtXGbQ7cjduWDiMzArLd7UpjQWBmvQa7zxHCT97",
  "key25": "2Kf5PcjyFuB8aQHhYeyEPoMLjcsYjmYDWYbL71YVz8eBA7PbjqU8aAL5nnbbxwhcJxqym3d6jnpQKTtQpz1Bqdmu",
  "key26": "DzBjsTuXQjqvYqvJN99FTipi5NqJKDeiQpnv2JediYc7gSVcP5g8JkHs6jvNHyuFYcY7CCNQQpAFTaaJesu1qv9",
  "key27": "3K2W7Nidpj2kyBebZyFitMd6t7ToEF1Bqcq7UkTKrCw25U8F9Jd3mEtbCniF3E61nhmRc34ZuSEyjqh9crtrt2LP",
  "key28": "3Dkn8KuNZGg29NQnkEeoyZtT7WVobg24iCcg7DEoND2j4RCRohVB6wKTpNfgs6MXFLumwjNe28YCvJXPjZzzMKdD",
  "key29": "4H4sYxjQpZQF4CxTNeXsCtEf1bmXS97EL4ygdmczeiWKMVvnG5xh5AZ599osCfMH22ocPn6M98h11hxu3sxkwQQ4",
  "key30": "3cm7dEaTUdDeVeM1Yoz77dbDEcThgQjqW7Zz4SJ9PEEn1yKy1cRZUEJR8SH9kTXsqtKzqthnUt2eHwKgUuj3V2aM",
  "key31": "2Y68d6BXJzNYmutkh1dNeZCXxxa3FhENKNdjHPwDgeHkZvQFUDVK5VTL5GKAEfVc1ZRCLAGshnooK32t78AJbTK9",
  "key32": "2XtYUYCYkgGJ5BNqaVuhmT2A9LCCAiCe2CP8AD8FY9VuCvwpPUT54bg76478aMbPmBxmT93qj5XPiGxAwLarhAri",
  "key33": "5wrk8sgiosN2kAp8ZLjkiKiR9dSusYcr9k87YAzZWoe8xt3JGRk55cL2m2eqg5EkF9oUuQrtUqqnSWm2ZpQAfLJc",
  "key34": "4oBi7JcwuL1NJCG2WUxK46kBLouWP4UPNL3AKXcuub2LNvKHPQkHN5zM9ssecimQ9Av4dAdmnaCedcXnFes2RVjg",
  "key35": "KDjjig2865xYfmdMRChGiHsEBtwih8xLxQ26LVQZwi7uULz1Xqmt2M94c21fc3roZW2KypTdXbPwmwjvBXmRACQ",
  "key36": "55ssmwb8ystUtUw5tsqxrngudti8qgKVVjetzKmHn4H9pnc27TvzHiDamLm1bawn5ViWSgUdKrtRwiNe1ZwyJBJG",
  "key37": "63f5evjVZaUrFXPtXNpPXfu37a4vn9g7bkytcQPicgDPQgAL4VLD5wq6p6j4961UE69AR5qkWNvDhrDvE6D2ZeWr",
  "key38": "33Y2yJBzRcoVVJNsRRCudCQyBtNShTx6xRzUfyc1ZCCM9bcttpSdyQD5xdUEPB8ZQecj8v1aUmfCc8UoiaDEZzfP",
  "key39": "5KEF8Ahy8xMKmKvFbmUXVVFd1EKQv2H88vhVAuqAFgkv8HXb5GUuQy7w1ATx33NGZyPGVwQu91p7QvRZfvzGB6bE",
  "key40": "4p8FNAgMRPQNBzDU6Q8KB8J3hCnfpabeUHPGgi2wi4n5xG8M21mwA2rpfvq3sTkWX9cXDGNJAmvJchjGMq4yX1g2",
  "key41": "4wSYUpMLfVMeAZ855GH3GRoGiKG7i6QFbmMKQqdnkBgr39jfgqSHwMik6argqYqZcnSxj7eVQc4z6j7EnBT4JdJH",
  "key42": "ANGUS3uhvztFeTMubgvv9sESiq8hHqEJvtuTeTnZxxd6vbiLaaonxf6ZXDbYheJVRrTS91Y4WhR4yk1P3JD5MJZ",
  "key43": "NddLLxgWgwav84kp13WdzRa31zKqs8G5BNAQVvfLYm2882eEzmh7AfK87fNZDF1tjDn9ibyeBQ7ZYq6BWGFiwgr",
  "key44": "3vCce85esVu8Y9SEbXBnRVCzS9NKQq8Jz8rNYccFejneXQ61aFwm6MJTd3y8jiucM8FFRxeWr2BfbVPVDogvShQW",
  "key45": "32i1LVy9Mi9fYbYCVYd4vtjoKktzBQaUDjAF3PMkF17vM1oYDCFVb7YFJJwW4tnqpB5VjDTBQ13XcmxzLVtXpxu4",
  "key46": "3wSmsJGTTfMeLw6capgHnTdKrRLeoM8wi84CeaugQUhCLqUTGtUsaPtNJdttyn9iW7Xx5mm6Le52xdMGNdmxAown",
  "key47": "2QBvEhzfUZBRJehWoU6tFBpSgzUa18y3LYbeE6QsN3vFm7iH4d1uCeLyd33UoLiV9RvGbfH8z7iWrgC462ioFjgU",
  "key48": "4CjhPrpRNr5rCkaWw4S2zc8sgtvZ3bLh6phdSSNjVYLh711woMeofU71pGRmef48ENGep1XbkcEWkFHtZXZxgr34",
  "key49": "5Cs2PPeKm5F2JPrip68SEmGkwuEJHTERvC79NvgPjnqKHZZYFaz14sGwcLboqmrej5NnwyfBqfqzWXv7pYk7p6a5"
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
