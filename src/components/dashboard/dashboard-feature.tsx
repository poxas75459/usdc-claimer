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
    "3FqpCReiq3288xc18VexUJqqVkqoT8LodzaaPnkREMTwdLdaogYEFA374ffFcEfXjiSUHjppP5Ytk15c6NBe6cbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gou14BJZqDLHNHtLng18fUP5eoSUkSUoDTJGrtGV5Tb4kRqSmZMxL3YDTc2JUfsfkjk9uTnLT5DbZBfSTyNQK76",
  "key1": "gtU5TgBf1EUUBfq4q6W4gTUb7q1kAzhPeQpUwcd6TSHXvp4Zv65ZJUJQX5enDaThukxPvQQFcRmi1w1kdhco6GB",
  "key2": "42YEq3tLL6bM918wALUYDD4tC9jSsffoHcBUhgMmqZRqrwSKHoH7MiDbU5PwRQZAX9QQioCvP2DoS4d6tUwnwk7A",
  "key3": "5hat5LXfYSQ7NHDWobpA7e44Q263qUVftRkdwoUHQE145hT6tuQeAE6nS1hAejnwZRPvEB8YsJY1MtKkuhfqgVEs",
  "key4": "87YkTTXkeGT45WhuDUFnwGMtXKujGwXjFWWtCqoFo4nSCG9JdwirnnDiVTuxM74NwTqH1r7yHa38VSkaxnr3XYW",
  "key5": "pzbKQ4ug1e1sF3rs617FPTxyUWAp6knUycTRSQvR2dWGnhSrZj59DQLwZUp58oE6Sr6hdQHpHuD4nmZEwhwtc1n",
  "key6": "ULhGdnYdpV8g7naVJonC7crDAJkRgixpebhajmZJFrZtPwxhGdv1DW49sdfhhukoXompEV5axRcT8st4mFrNz9k",
  "key7": "5rqPBq6sXCs4s29cQ6NQivJVBhDNkYQTw2V9UjdoU4hs5ES6nqG2oncUnkti2xXRtcjntjX7eSoaqnNVpLueSTRm",
  "key8": "3QvYt94A5BdzcT4AfcqNEuLp9RtMCeeDjDf5wDTZDv3UNUYVzBdqLpZHDtCe2RqujDm53SdgvncdECA8UEFkZc6x",
  "key9": "4koCMid54u2iw5xiA6ZFh5ma8NptEC7jSiGGgm7QBSojkQd6PXXguujmmcP3Bj8acXtky9vsnJzURoX8SVH9Y93L",
  "key10": "5iBU4Nn6J75ZCb4v5HvsYp1JfiP3Cko1Fxh6ZGzMiXwDi9YhLiogxnKgizLEAW9uNvDdTcQVZvhZsYjk5FJnns4J",
  "key11": "5jvxKFTG1EeV2bsadmw36wqPofm4Vzzy6rkqbtR2GcqGueyoDH8m2fTnCdh6q9ZE8DwjKhQrBYXStqmvjpyvBcf4",
  "key12": "QxLWBtrAPfdZCDq8NP7BViowoWjF3nyvv1XiMMkcAt34QqfVzKsFdmDkCwCUfhiQKv5zBaWdZN8iQ6rfbsJFF6w",
  "key13": "5rNkr6gHTmQFZt4gLcTiVoapRFxTwgit4QWFYgvAV3xz2Sc4o3ZNp8sLYVpKLycTtk5NfpwLctfp4tMUQVcZggm6",
  "key14": "3f3U3bvVMoHG2qKhdH8jAo9v1zn1vmXcmG31UtveJNWKGVEnEiHNzJ4DQEk67ZhAZdsjuHy7V6B3rt8ZvCTA3q7W",
  "key15": "26vVP9xeBFiNJx92M3uDCSpVZ6FrRi1iVwLcGJK1QmM5fHCbj4ymJ2iH96obNwKYvYzsHexFgbUva88BxDGryPKT",
  "key16": "57oVPsNM3WrLRTFNjbJZkfbPJPvGmZr2frVWTpoTHzck7mXVjpaDrHxDuuD2NUQLoGPo477Z9aTMzCUB93Hkce7b",
  "key17": "3TPX6MDijZ4YFKLNL6hbQUNdFVTBqrmiXEFCEskzwAaANoLaBoqvvKH27hB7b1mX6mqQAgAXoGW4JtsNfX6bVVpQ",
  "key18": "3Bn8Ja4tncYfqf7iv8zUkVtcz54TJuKpmETTdYQEAztXEKN9B2rdqR4i8AquYWv5GtUtjD9xtmaN9mZJvHpmJ6v1",
  "key19": "LZouzzSqypKJEM7M9ttHtjENbobdMGMLpmEN2sgYT6J9oKPW78KEzwiRJg13dDq3MyuHfq9NafHacBB39WtpyU6",
  "key20": "fU68dkBM8otrHXGDGzcQsCeddttVKg9sDGc7X8MXvCzDXwsiKXcMZhdXzRgWzdscCmJkfTEXTPMWXTsm6L4p7K6",
  "key21": "2iy5yXZMjFCcUEkoLt23aFqX9NzEQbY9AAm7eHMCPpUPh3DQ4pjNtT6bGyjSuKpKpC8BAc4UAvD6H5RwPt7c1qLQ",
  "key22": "2H3LiAo9dKqQA3LwKy3iZSSrhu7EBY8L2k459cNsQyJVfCUTkenb9ZfY9wiX5tf9tfkHr7UPgbAeC2wyn67psvZ3",
  "key23": "4V1qsUCisf18erZ8z5qhQtXrmC65UjpJ2Vpcs2h2SEya2EcUryg3c1qmv3ACpGsDmguSzwCwLmZmxoTWDjZNRjk6",
  "key24": "3NkhkDo81qWGEfj2vXobrRjsu8rfotoiCrKqF8uRnKY7kka5bq39yVVKWxbLqDkkKGJRpPDmAL54UnrPr4K9g9yE",
  "key25": "4LGdVQDTctpb2M7uftZF9Fnk5bTsrasmvFDjDW9Srau7hcfJ63hMBhxzKYVxR8ZWhirc1gZseFctG36XW49FbZwJ",
  "key26": "2nbC7idsp97M8TEi9CoRbnE56NwXX5fWCA7hY7BX8c5H48c72JiCuUfB9DsMmn4TZRnfQVZPTxRZ4KMejW7vUhpf",
  "key27": "4rQFcSx6a1Vuc5Dw4Azu35JajFsWA2ckPjJLsjBDiS8kf3ufN4LZKxgad5QjV9Ybq3DjctuZgaT5kSa9gpnC6FUq",
  "key28": "4S16PM3Fq2cF6axwuHbmivtzzMzeKqZ5peVJuXYTpVn2EmHQCnq2C8eNt6NXQqorrNYFRnvdfDvyhsZUttkCjjwC",
  "key29": "5ks4eqFSjghCRyVAHDgkpHCfmABbpebfq63H6zzGKSTxxjCvGkDshk5temDnTeyziUGjqiS1zM6UDB7kmSipE4oU",
  "key30": "kVijT2zBBxGLJzp1EJ2sW5UqCv5qwMQCzxT9s2NvYAVzJJNjdbyBstmtVxck1BroTFkfFn9AL2o1z8BAtJjY91u",
  "key31": "4M1DioiYLNhSP8ZadjabYiHiRcRWEUmQczXKtRrumi3kjeyhcjYC1NPzuz9vxY78u8FVdUVczRSXzQEmx7ExwFNe",
  "key32": "JZzAcSGwJF7R9fZrVczW8ey91346nxbFct219z817DUtNeif1ikRRzCuMyZmc6bSmegLCHVFSUch3N33tNXLRty",
  "key33": "2Dztdj96CEdZz81DhnK6vuAa3Vw1TbNyv5gS2hSNbR25uuVwFjHZsh87XohA1thsUnZ16TZ4n3dEfkt8PZRrYAuB",
  "key34": "561KcSWbP4rxsta3rGoutqeVHJAaSP3kR62yRaKBjq1t8AD9UptChazR2sjVyWTDHQEtUkh6h5pfpEqnh9DxUWJ2",
  "key35": "44chEXvbypwJ3zhJwahi7tEUTnCYiBNtVgMmznn656mTiJUYw3f2e8VD8WXKu1UhkSHgSjZdSeYTWgk7ojikmjLt",
  "key36": "4isaPN91roKoiPjc4FTHaSv3FHUXDngR12qkzHTkANM2T5te42b5NLv1hQz25vbLE2D2r7ntmHgiu2KCtd5uQKq5",
  "key37": "3PH3YnGQbA9QaVAhsa88XfJkDEk38ZNe6yFe6pdiYaTWJ5ebMHPScHZVUHUQoZgWjTsGkywtKod4QKWnd4YMedpK",
  "key38": "3bcxGZQabyZtNThT45vm8Y4VuA7Adir7aMDKVdvpbwAhmvZMn5qvxxSewqBXhG5NeCqB57KVhY4u4HKTMngSC3Vt",
  "key39": "4zEsz4E1anN9jBwoZEnf821EbjRQT46wCMqewV8fxVdSnkARf7BLH2Hn6UQ8BHr9onqrVyh5jbfXo1yug5UaKx5h",
  "key40": "3i25XX4Bm9j5ktoNRG1mqBznCDp6fxK3zvVKh9MZeJqCkdrFKBFZY39RHTX5Pg7rXvBCVvQbQgW3TqPesT2xu1zT",
  "key41": "YWocVjvxSAAgmJv55yYVyoZUZGpfUb2E2KiinHfomPVYhNdNt2aY4X6V4jL1YkNzCYFvYsYoAHmjqphpRZwa23T",
  "key42": "37YR2aBJStEnHMoYF9zL8WbUDmZ2dkrAhbcB9cGHd8fXQjfyMBazS6AkDMJoMPcjeASiiEDi7ZzRGVkQBMW8Q3kQ",
  "key43": "2ThQQn4ZwMEJGnQyJGC9ZKLD4euLQvQd8C64FgMN1Y7DfDVLSrEe8DosTVktoSfaPQaE8sL6Pagtd9HftpJpfnpS",
  "key44": "34mF8CbYTLG8cjpo7AGoNA3ZYVWezwtheKm2BXxZFTjLM4pfAxwi5duPNTVXoyv5aAr6kYfzy5Kfr4DEGZjCeFLF"
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
