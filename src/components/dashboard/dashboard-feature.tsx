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
    "oRUwFWvoj843mtrMBPxDhq2niBA8gZKDztpBdJd8yyQ9gWTY5ghZdSaqJFpXJzuuXjvUQcPnFTFdTftb6FFfWES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DNk4SYpPuQvS2NF96ZBMaj2xjx9MsCHeuJ6k6TWVKXcQMz417dP3sGUciMPPJ4D6i8s392w7319tL5PeZdmdc8u",
  "key1": "tviuA7N9etxpF71JJLEphKs9FKngVi9kPm4pYpKtTRTdhbtficrsaBfCkhTe2kt8MoZ3oz8CkUdAYaswguCJqQG",
  "key2": "4SAH35fftZt7ExEmGs5nMpxm1zA8Bj725gSL5ZEE5yxBz56uKwC6SE3EKwtWPuzfnX8iBjjHCokRJUN1WwXA3KaA",
  "key3": "2xnaXcoyatgBDjkUs1ojFpeKhLCo3AD1wcfEyq8Lc1pwEG6vq3EmjLYfSYqv7tPf6UzCh5YuhuE1HB4mw2EYFxch",
  "key4": "3bPXEy2vy82wuW92aDmMNfGo1GRXxj7wHWyk7tby46HupMmmnAMrD8p8Y7NZqavv5toSqxGX5caQqEhfyDGwAZgr",
  "key5": "5FSFpwQQgXiqbSiPpWLZT8FovRwKFZQW8GqCNNje492C3r2C5a47xWv1TLcfx89JHi9b5ckMGj41YJnzEJts8ad8",
  "key6": "2JrePSFND3kZxVZmtGPyAWLecjAQCX2tqm9dC31nuqUTcwrMPoxGu1qD9sZWWfDdv5FqKTEGENyui4kvZ1xtKaj9",
  "key7": "5XuGPC7mtsRxgCWziPiLzEAYpmJ93Yum9f7h4ofk4rbnx6kQkotqchxx7SarNs3ieWYXvmAm4AVUgETnXB13Y4zu",
  "key8": "2Wf1ZTnNEARX6zWivxYafZtiV5c4uBw4UoinNf5YtvK98ehj5nw1rgvwFQvJfwaL89TLZTEBV2f95rcnZ3SCXLLa",
  "key9": "215vjCN6y4rhBjzU4Acjwu49hun7ZiVHoBTqCpkphLdjJfRdG1rFH4fKXV6veXTLDNfd3pfqKdd91HieU2NHuEB7",
  "key10": "4ZYHkfJwRAiiyLySwT2kMKhMb5Wn8kTLykXzTFybMfFoDYLmS8hSMMQZzkfByzJqKRVV4rPw6gPrs79L9sY1H8DK",
  "key11": "2o2YZTucUZftWx8AXsQvcf21x41bqnch1ztCcmnAeM9KY3xJaDLZcQzLL2pxs9nJNovZdNcAqg2YjXeD1LCws8Tg",
  "key12": "5w4csEzuSYGNtoyvkud13R6HfPtoaBykhksGs4yF5aKTj2sNCqxmcHuM5gWPUx8EGe9zW9C6TEYbfpnMRXTN2QdE",
  "key13": "3virh2bL8bJ5ophYPwnKmX5yjh7wFLsWj9crmGjNUEun3uf7si5Dhs2YTctJ94tBxewqa8HAt5XSwkreZGcPvdoG",
  "key14": "44HgG3EUEoiNQP22s5R5xqfjZ5mwRSK5LBeNRQotsXiX2SCqoeWdDT9pKbpHQ4WJYtA385YoL1vCjKq2eBHKP4hP",
  "key15": "4AvaEDEAJQDUh6yy3c4wAwTJ57gR71Cwx3jAAnjdcfhCc8b9NquQ9ozk4U8xAtpcaT1e23tye3CFEwdriz7zPSGx",
  "key16": "5fmEW9U3h2uUCscqRvfonveYdtUTe9BHavGfHgecBjFB6oticpcgiZpRD8hpRokyeRF7QMoQP5Yhp4oZFztV4PEf",
  "key17": "62TVocejNaLd1vSWb3TcbmXNa1LwY3ndFqtnmtCAviYzEzsn6MKcg4vv9nU1yw4jdbtS7DWH2NEZ7viQi752LDUK",
  "key18": "4QmAUrUTxSioAqcqELeUsj7eCTqabneP1j1ABvjxGaB4R9PxVAPcJMPwvpznvao9v3iKQcaKox5Na2ktmcEtW9kh",
  "key19": "53qmtUyVjTDbKfQBNkqNrWF32tRTdxLx2yoCkAB2ZEJBoN9K23DKyNG5Em2M1DFcS4kqsLHC5vggvKRApYL8gtfB",
  "key20": "2te4g2jLf6S8mt5JmkwoUr1ju56ZyyyMct4tpqt2ruiN9fdhRTbj6S9aLE2nHqsKDheEw58Fpiboc7bjaWTfqL8Y",
  "key21": "3qR6bhvtbKseT5GrmxZDb9AywzcLaP7WBgYnoAdo8ATqxRteAzacRvdJp1yfwiVhh3auazQkZKL7fQDbkwLkegwW",
  "key22": "4cU6N674wBpMHFDPbW3Fm9Rm4Pxs7369ogd3W5k5aXDeyHzYwKnGgEjKDw9LiHgUoNAHFiPLnBCWvmDBojHc79ct",
  "key23": "2Wkk6ALp7guG6d9ydadY9s7Z85TvT5Czy7m7PmP2DWEvdbFZPcJWnsybWEpkvCmxL6qpwRLx7BcufQqbyfBCbsVr",
  "key24": "4iUhYad8dDpHNeQqvb33HYL6d8osWaNk5htAQiQSNyD8wEcMxULJwpXviQq5zSz7tUqndxkcZnSs7fP3Z269myj5",
  "key25": "59kcxkUvFEK3bCM5X8ASQyCr2EwQcTQBEfAnB1MnKNs8PtiYauRWZkjpYuw8nXn78n7oSqhRFQNoVgUCEqfvUyx7",
  "key26": "CNSXSjiPSdQrtoPYxSEM7Pakdyy1mW2CduqRPr8GbNjYQFccDrokMTPvN9PpPgEiEinnYDwWtw4EfWNJtNqG3oj",
  "key27": "9DRq4rJAQpNdzMp3Tge658mpXmrkkpuNHcMffjrsLNsAePduzPUhEiuGedt8hSDxykr1DSgK4n8bCznFMan5N9P",
  "key28": "4iqqWCR18cpZfqzgDCjM89usKNn7wHH7DCdzyv7BFuMHuD5bP1LZXUQxtJ4zbZ5bgHDiQ7AJSh5sY2osyyKbXBky",
  "key29": "3U3JsmtgqsndCnwwyaU4xnx6RWgc1koZeAnNwDw5X5MBJ5DWom6ckthEf9ZvJCcEbVCzBTRfGJiTumcQhc2jfymQ",
  "key30": "5ngkanqN4kaXMA88fq9KvdpvzNrWzVd1f7jQg36T6GwxiK2BVuMbUJikVBHuNMTC7aNZst3ifQpRY2TxCJS6zLo1",
  "key31": "4DJAk4XG35EHkZ9piQGNnZhGP25SWp9RzDoDmbv8vweqZHb6QPiGL8i9qepoLq679ateiWw9LjsQ2nJprbefX6pS",
  "key32": "5Qe2Z4meX1bqW9vu1vjXRNRBs8uc5pJZ4KnSAUPRXM3qo1hg7mcqpxwng9ZF5o83awtfWYLZaeJy3DwnM7pRySqV",
  "key33": "5wXE3eAqxx7QFj3pLp8jMAr6b8KPCg1xeDfsjbN2CqmfsTVkAAS2TbSbL2knMXyxv8LG2n4ZvHFXBRgNouJsMxuE",
  "key34": "44cdJh1cumkkMBCewWpN7ibXvX5vjqtsPkbPTMrqRYkBPSD8ccBpWSnaiS9AvZ5j2bhYSjz11Do5fhbVLevnKTuv",
  "key35": "2eMw79LkyqVpv3fXvsZNkRmZ1DHhBbhKae4y86zkxNamMxbsRJdRDF9PZbBZ4bDkNNeV6PUC5NWKshNzEibaWh5P",
  "key36": "4m876z5kNjveHhMnb3AGMis3VQpeMuDpEpYFX3mg3GfnnUZk3ZdCczUmzjbCHBSmyTW5aYbMqEvYHEBqnK6VbZB4",
  "key37": "5rbkYscTCyESPMZWW9bqJdo64r8yen9PZDD2eXiSDqydjBzMt61MXLfeQMPNehqgCqBgFmTv43upUfSGQ59kBdiZ",
  "key38": "3dntBqLCWJNuTHrDYrUNTFZ6iLK9mgzAwMKW1Y6R95o3jszBHJXH98UrDtGR4sr2b7sbMweWvVnKkG82KNQAzcu2",
  "key39": "65yo6n1bC9CKdmG29jqiPa568hxbaQ2JodjtNAe1FvoMLcEcGqA3Mt6BnDpzeQBfNvQsZxP4o63vHVQTkfKuewF",
  "key40": "4LTtezKx3x44CaHjeHzHYB4e9bbpz4QTn4cbinccjwpjBMHCPPQUqaRLbrScm1zM3JrALLkCKb1ao5tBUwi7uzuY",
  "key41": "3uoLEFh4FAvfhoBe1c9dAJEDUT8xRAma9PbQYPxpXtXTG61QSNbfptSPEm7tx5Xkt1nKvs3PRCm5vMdu2cq3SZfD",
  "key42": "2YKVXTPxeEt7XqB8vyBxTdPSpHa82H7gJT2SDgrPuStgZd3Qs9YFmEvNAxtB1wMWbLVdp9h9t9fb9sb4C6kHBzRP",
  "key43": "3nSV9M8etgRgEb4C3ndhdqYTUQm6oug7VL4gBfd3crwNYB1RQy8CH5ERKtcDgudKQ4agDTVdyutpyQjBfmeuEs9S",
  "key44": "5Ptg4D1UjReLM9YEgWi23KvuZhUmMxfY2hfFeTg6M59CqaENaxZJMgHCyTHn4r6i9aCMP37rAPkjvU7kn6LdJTUC",
  "key45": "2vc45zfhyJLjhXSJb7otjXWCAQ1wcRukSZJw7gt8wa9qX59Wotp7EmYvesTPX7L1ZvXfmuWsBb6PLRbbzrrcHGgF",
  "key46": "2ETSrcBeE2QxdoEpEibADaitHfjzQKWPrPVwTaPLU3kWqdoCo3L1npRky5y7AGGDhPpX3B3YqkFEV2dAD9zkNDFh",
  "key47": "5JxYZGTJwvvTaXtMTDFeo4euphpWCoRozd3H7Zqx2s3ZmZoFrZBmuNqsqfY9LYMJxCkmg7Rb697zkUWnH4Ai886o",
  "key48": "szSb19Pu6YrQukEaKbecD13CWfMbQo5fwHbibtPWSedgmxsmV1z72drkUi8jvuZ6k9Wb7cLJ7jAePTvFAmumbvZ",
  "key49": "cuUfNcPqic3LHeyqQknrUG54S9J5B6tmH98Vrhc6CHS8Zx5BbSZoLUM4LQR571NftkeKgr8g8eCQW8wHc9Am4yb"
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
