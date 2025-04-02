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
    "38Dn6Upp8qLfqJdt9phhT7ccoWrBMeJ9cDkUTaCHBCXR3kPsPPKkXMDLgwSAVgdjNz3EFcC7upWU8Zg7LMMzD83g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQLe4X7o2mB3uPQBsd7YykKkDGFKYSKqspYWPji9ZngXj37jdU8vHdK8RUqRnMJ4XwUaQAH4Vth7JVg5x7sg7eo",
  "key1": "5rFpJyqU4sPNH6G5pMXv2NqrYvUvdwmzkyuKqgaXsLmcqxQWtnbbJ3HXfHoJ2pJEQHoBkCmE8TQJbYRQ2bCeprVi",
  "key2": "meEbv28wa9yBPyGgRhhctDzC83tfQqyA33ZtzznFv8QdNsV2EZRqFQtYaDeiTWhzfkXro9PL6KW6WMeq5Ax4duM",
  "key3": "2JaeNnFXC1hgyjrst7tFK6qpEvH5ygMYASFoBPhDLwsLDRKcks637fNhiwtqjjkvFQ3j13d5vpyBvtMyYPXWP4Eq",
  "key4": "2LX29wskThsvSSkRGrt3hU2AP9Z33DW8Zdx4TBunvChUiPWgeA968LAhBTvjb4qELYN7HTHmjAACj1yt3hyaj2Wf",
  "key5": "2abx6D2kKM8AtavhdJvuwVwNJENW2JgTD4GFP9Qb5oRhdNpDDj78JSwScqvGbqjusjgG3ph3by1UA7wRVGX6FTrY",
  "key6": "4Z1pM2vWSBJ12cBxeWPX2ABwyqEJjebWddGPgoByrhpyzAW9RfNv7q4qFL1f3v3pshxyToeRDPh6dHB5W7626Vam",
  "key7": "4erqmceXgNV9rSU3nZXMRuALrPp5oXpNV4Jvuf3jbVciuoJVh5P9qfLFePsUT3jntq4Lr4RbS3MTbkCroacr7FcZ",
  "key8": "4JQwqgC8ZxskGhEweuWA29kURTYy5TAVyQ8NLB3amdNMY5u5YhmdjndJ6KG2odm94yPpAJxcndsXvh1M5EiiCnSN",
  "key9": "3mBxmkgxCfaERUb9TzFhT11hFNB6XqLAR2dVSb35bR8esjqDg6EWmRVWx9GQAccCez83dUHDD4trkiXWo3nQEnGJ",
  "key10": "5gKSrwHxSQ39NA89VDdXsma4sm8rcZwvtnvS5jrW88tsAGwQonuGyqyj6kyQNReLARJDdCt2YuSCLSv3CTxzPfSq",
  "key11": "4hKLYUMHRq9XzTcY1qBuLrEFXBG8YDew3jD37XtA5Yak5qR3M8s15WQ3bTMRkmRDFTAGkKZ5w9UUQ2fsTwFAvzXF",
  "key12": "mmLwp3QxTAMKt2a47U9kV9sXuDN1tz5GT4KgsVkZ219vXAkcJiUUsHb8FwD8BTWTrpTcfJjFDA86TDumoBP9EVX",
  "key13": "3ZtYn87BVtbyXZpsPURBfEkUPpCTeHBg2eaiQHamtnLuGbJ9KcwiEUEXdJGtwPwzkDbgw2VrpmwBzTnHFX2CHMGb",
  "key14": "2aV8TKrbpP8JJbWQFBtcEpLTHeAeHyTCgr8XLMj5WEaRy5M4H3b4hWme4NPnyBMM5sdZiZi6b5anz6i1NF1yefLo",
  "key15": "wbvYvJwoxuEnZddw8WQQ4nggV4Ghz8spVNADhknbwJ6h35UQSw3YHHbq8mLiTYKHGQhUUoxrDFZtnyvz5PxgGX1",
  "key16": "2vHVKDkJ1PHvfz4JxsJDuXiMB6smjJyau8V1SyYsiiFrdV3RaZn2T5UQK1oPbaQSZrx5MpV3Q4QDpttkU9zwgKqM",
  "key17": "3KWWF2PwFEzz1paamZWoD1G6zchEfuCVwGK6cyuxESKcbXYgibxoq1aZxfg4oBLxLpPkPaMh1LWXPgNFwWJW5eC1",
  "key18": "5o2kXVBzambZoUD21qsZ7xE1qyJ7ho6Ge2f3UG3zz97DwQjH61My6HsGRCqCRCNgPThC1kbMmRtZVYc7hK7KdhC6",
  "key19": "HhaPsKcq9XUKjYtHo4e3GL3xQkx2Dqe1u6Y8jB4G8N14wqaK6rfP69awXzQgezQGtUitkVBZ4cABfSodvddBBNp",
  "key20": "QU9owJSyX27hngyu7qRdeoMreLRiRpDz6GoxrnLbbm3eAxFUf67KbYbXfcNFuzjD1ohtCEtjeMmGmdHMf7DFFfX",
  "key21": "34TjwuKsKNpwdhhVAM86X7KRUm9Mk3zS7g9XWPgw6eCkP7idfKfTxh2QKkEvytNbmmjgfw2BJHzQ4JzTZNnk3ztC",
  "key22": "62y98MaH6TbwPFVH8shakVsM7EwojD9R2EPhDQcAnVc51aCqfsGtFiGhCRjmckb1h6YXAuJGHLeFKZYxZvYvv5uy",
  "key23": "E9wjSSP35Pr6Pbix3DJSbVuPjXiKdQabHWpBNFWFfo1uXUypDoHUqWNdUsaacEi9E7qAnKcxcErtBijUJxUBiCY",
  "key24": "4ZSMxATrcYe1BS9BDAp9zyYWxWpuY4Pg8dRhS6vZxCb653RxL8RL7djBR979zRzTJvmx8EM1pqySo9kXVHZrZGV5",
  "key25": "3zcrR78em1jNcygRCN8CRpakngcAK9bdUFcQE9bzu9MoDMYKpyZw5wXVUCfZYA8ox4nnYrBqsD5JughVmxn72Rg6",
  "key26": "2n3sTMCrtwnKpsEEc8HT8scrTUrzAD8PrTwt8Qh5oo5BC6GDa1u4qHHaZikUHMGU5qByWCFjtzoomHX8BMfQowYo",
  "key27": "48UD73hj4puZCL43wQ1aGAkYq5JesCfcRHAyENyBiMi3mUatxPWSqZSxBPRafsy5Q5Lt6ta5x7qxJ1GZ7yW4s9Kd",
  "key28": "4PibkAozwmHnEXN3rHFY2BEmoGxg6Xzjonq6GZPb5FrjtvbKkG9D9PuzGKxg1RzDbX2PGBMGkjPqcUhtFhxiSLnM",
  "key29": "5peQ77fYUgxGqwxrAmwfDUZtXtpx1hkW5BrEt79DiQFQs6hLnNe7QMWJ8rveyTLyJr2YotGdseMAshqDBUaTFoBg",
  "key30": "5PmJSzaZVpRkjx1o5Mgvp1csWjuRxbkuCrP5piTUZpxce3whpUuv36JDsqpXM2svFwAtyh6pPpbSYxEJRYbnL1jS",
  "key31": "64z2ozcvwqKvXpWpAosZkyXN4qfCjWW3oMCtmYNFuK1xoU1mGQbjJ4S4uuD3fuXexmLid8Dg5W3yNiNf3qdudFXg",
  "key32": "5EMrbA531GEb8vaboD2hJ3czUzizESsqSuWz7LBzyHHLDjqVKZuRgDa45fWSzNLSU6ezXHFkwzmB4e3MSdKLvnch",
  "key33": "3UWxzuWSQAvWSTUhRFPiU7Kpt3mkfJNonAsFJS7GmcbDCvteQc9rSSCwBv6dYDuDZJoqHn74FUsSU5f4Na6eCSna",
  "key34": "2eJnq24GnCxCLSvUAW31591UJ2gPs9Gtedy77WRrr6aNpkf7ZRztvo6fLKg4m8E7UEsZbedG94NkLi2tvRDSnfrB",
  "key35": "3rNDa2RVLbLNxHmYZnrzE6HkqgqnW6skXt1Ki68NEuHxSSRVfRubtng1Lw8NHqZ28AmBMwwCR4gtKR7oCnuMCNRT",
  "key36": "3YYQq1GwCHpyF6cDPVJ4Z4wS4hNP99sCAs694Ls4Nk9UMz9575boiSsijZRPNvsGEj22cdmeTZSHFqRmwC1a9CXJ",
  "key37": "542ePMEosoCdYf4Bw6hfC8eEgGh5SDk7uRszGPVSarPsTL46VPwJWm4xKjyQu59CGSrCQJyUah23BNcx3SMLeJcK",
  "key38": "4CHVv7eZ8AopChkGkQoKjcrrp4k6U2y7EEwpBk3tuHHXe8tME5wuZrq3qz7J1nUtccw1pdvBz17y9ycnGwif33ST",
  "key39": "5A2np3LFbxr54zMaKtVju2dX4VB89p8hgXissfqcrLmpCigGg3VLZ3RjaFrmmD84r8tJhEKSgKME5q1gPajSBNPZ",
  "key40": "47YdTmuPFmCSV4SfRyWvDPV5SWZcrWieJsT33bPn5zknGhDGnySyTsVuDnGAtDQwuTAYHfBM3DYtCfM13ebmJdcm",
  "key41": "6zxTUYM5mNHswuYpyze3VrH9DNsdY4wSUsRiY1PfKFRciCkFjgz7VYwBQF3aq1m9QZLk16zedpZEGLaKyPMUDFv",
  "key42": "5j2GmtEBNZNv64CU8AkA7V4nu16mUc3uGKYtLxhjj921on6jRrTrps3Bx76x1NhNdp2vvuhje5rf5DWT9bi9FUF5",
  "key43": "4TQCS362M4BhyM7k1PMAn7bVaqjTF8sRwNG7BCCw2EicG2WSmX6scMzjp7orRoctfaHrib32ekstLETLLganwgj6",
  "key44": "T7sVb7UGzygnAeksLbjPmQGANt9Dpa1XfJaxyfkhpSXgBYXW2HsTKng54UkYG6Juizd2hEwvrr6okJdPkG3DSBU",
  "key45": "a57ppknbbomkkTyKKqF7pyaZt6wNjaaHgPLvkmeBS8YNTZs6E7wS6PQG6djUnTFXhHVvNthoSZngoMr49gci6qd",
  "key46": "2zxaqfz8pWUZuMd1sm5ikJHUAxmy3tRzLcecrdqwT5ZEDjAKLeUGASChmgpj1cf3Qe9NuAfckHANPpvAK3uVsZQ3"
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
