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
    "39YfjNoi7JgcP6HKDo7fVBibGnXF4HCT2td53X9ZPAa8bJ3f41PV5SWr1kruENusbmUz1yohZm8MeK2mYQTh3dSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LEgqKKRmyRkhrENzAcG5NXbcXsfNmnjAQTnwJ5wEtCzBVxMCpxTyxihjW5VVzMYLbvPTGFKXZNEVx6Xtrf6DUKn",
  "key1": "4EEfppLEHTm2BhRo5rpQRegxtKAVwgJnEbF2zAvH28ReGrLKMY2iw7o19tZeTQvanGcKcex63cc5jyWf8xkGw9x8",
  "key2": "5SXMCe42Jris5eZcX1mSMpuYE7keQHKsiMyqNjA8BMovjk5N749h4gUxSYYfPzamdfthukU1tYdYVUHMsfNPpGbX",
  "key3": "KwBk7VU1ybfRqA83gvDx4ajT1A8q16jNvar9mQ917WokN4A39EtWCdjhDRsyX32irMbncsTun55J36dt4WxGPtE",
  "key4": "5hpa3jAkx6qHwThDqo6A3eSfF9Pn2WXiUvDpr4VFAYEJ1TDz8q8cbg17zuJi7v8th8RjC4pUyN7qY8HY4StYKHMk",
  "key5": "a7qwxWo5CMge9DZrZN4X7Xy4dEfL1HtF2XJ9y8eny6Sue6LxBXFtW2aSTJczVaUsDU8ga45ohqbRLRUTA5E1FJJ",
  "key6": "2U8MhDdqC8wiAaubai2MHgeiDpZLGjMqWd5xqU6ib8676eDne18wunFs9dMkeAQsPr2JgjickvJxUuQGa4pRNJgs",
  "key7": "5bj8LKoDYtMjKAhwD49Qdh5unUD21vvD172on8jXyrk7pWdEGcWKovfan8c3pHNVck8Qp2c6LDqqvrbzLAFwWsye",
  "key8": "3oH8872FHVJEHTFY39M9opNdaxRx4VtGmqH1NCaQFP23fsL5WZ5zFLWujzqAGZAbsiD1L8CXEyAxFXh2KqyH4SRY",
  "key9": "5LWoUxbuyccxsMEaFdXtn6J4Rjgj5z4QZ1DgUcdTLCgr5uQ9Nxb6tzWAkj91h5rqpzhqb8ksqGttX8zx4yu28cvs",
  "key10": "ii2kF128Hf5u9yfx1Lc2aYqUvT5B4LU6ZNJriV7aGgB1fiapyoN3gWeincP7GVpE6U18DHFukpMtEKWNQjMn9Aw",
  "key11": "28YhrTc5zxEMQWHSokaCHFBhmYqzFm924KkBx5gePc4AQRPZ8Cpt5jrjC8MD55GpM2MEmzCkTRH9HQVmKatXW6Hu",
  "key12": "CYzYM1e7LXqEcjKyC6j6czoDnFutVbnCwLRHYXvXm1aKKjPXBbn8iVxXcWcpU9MDCKNeQ3B5NZuDv1vdjmtCDog",
  "key13": "3JbrdNsBiwdbcTDPHEBaR8MtoJKMUXhivUyoTxr3aMA5DshB3CLUbsUyHMJWqyu87gnqMRH633CirQHgsGbrtucQ",
  "key14": "3sFGgS8v1XA8Naxz5MKgTUyvfSmMjHT6qiYjTdGRSiPDKDt3kCBRYiEFFhVrwy9aWte4toKe29UmzW1Czz928kYA",
  "key15": "VqpTuXgA7BWhKtLETX83wp9Y3XXYF7aqcatmHBd7CK8oaBpQRnxxW71Z9hRh3yiL6VLA22abYJizTG7J9N2iXJj",
  "key16": "2C3cz9g15ZNpuFewHR5NVtCM3jPL8GdbYVVt1qpBma5wtZw8XCjTD49MpyYJ1MhpaY4tYLjUH4Te4hSRSADpvFye",
  "key17": "5vbeKjQF51YuVdWduPddjxFTvEu1RW4QnVpz4YevKshz9M9fs4m6AdxjRA85y8ydLqWTyjVuDAmnRdJNzQ7fskDu",
  "key18": "9uRhEaxd4njqSpHFpWj39tZC9GshFbFhmmHsNkKspm4bWBafbzo58tzDQkgXqtydiEt5d9Hh7XbgpJ7ZEzTMDWw",
  "key19": "3Q4Nqc5q1tKHTo9RLdqGG8XkD5vQ1gTVP32Nq8se4HzGHGr1srUV6FNpuL1nZj5wA76BbSKaLYL7yXWPkddLFaqs",
  "key20": "3GMhoZGj3cJJbEALyHLF3AHvEwP2i1Gs6Y1zCWseCp1EY4heXQ67nXfSPAxhWqhf6DtTmnWiWaHkBU3DbsfodEqx",
  "key21": "VmXXYhKFLJTWBS32hmaPRpsHLxzawPsUNcFFLvUEMbXLBUvdyQUnfYApaTzhdgntEcGFMBd21GVgNRr1wBeNbBz",
  "key22": "3NDEwsYnu3t9MLVrw8ufCRmPgfSCk8yafP9vWVtEhMZYjSyEZHaFVfzDqKKWRdumRPd1AdmLLSo7y3miesvJw31g",
  "key23": "2hW1e6PmJr71LM8zZPzkMyEF7YB5FAovtoEhBiKBF9on66jWrMWJeLBr16KXaztFWaMCdjxs3FRdQ9ZMFjzaPijJ",
  "key24": "to8LN58dNhZWGigE16sr7mtLXydpKpssVA8cvY1x42s8SRABwfMoFAc14cW3NBmsYUwpnnGQM6nEwJFJsJuLcZx",
  "key25": "2oRtbKoWhkrkcWtU18PGkDcQuay9gSazcFXbRhP8GrxAHEj7YnLCbrJf5ja56F2t8Pw7a3sEqJ3xUaDCE4s9qf2S",
  "key26": "31eybQ21Sd9XV12vEd5rqiV3xX99f5Nx1DsBZWcwNVq2TD37xMN8gp2nTxxAdDHvFDA7NnKtvE8i4zChXp8mRZVb",
  "key27": "WzSBTsRfvrjbMXfEp1C7iksAzJRTZwJFqWyDBN58Hsgid1kcark6EPXXKHj3Jpgr6vmJYm835a7ZS1tbFZK4UZu",
  "key28": "235iJSkQq5tXpSSqD1KrHdjZvGbFjbwGpEDAA2JksXrVKFZApHVtZ797D9Doso9PSRwpwvoiDqDydzUsWttAGCbu",
  "key29": "2pu8JZsvFLyHHAVu3KamGDTzAZqKA5hCgdGUmP7C3rUdRSaXHXKJVYnAbecXLQKDRdXhb4exibKpF8kbK5cLMMUE",
  "key30": "5HihT3KNUrME8EnngTtdheHuVPbkFfXjM5e8DAsmiB6VZZWQ4vGumowcQPsxy84maqwjsPza8TK4tz1ZZzbABjCG",
  "key31": "5TxMeBJcCm76nshEqUtY6EVYz3x8b3YPXkHZfc77yZvh7pqarFH3j7KQfYgPrd54szN5rEfBz9ShuzEWUExWvzTH",
  "key32": "675SDq9ZR8Bpep9H5cq4xQHr1hUXFScaULoaL12iPvFQ7qXhBnZCEZSHfD8QvfhWHQKrhieX2iqu13U6LazxxA7a",
  "key33": "64a9YE4ytEBmUTt75T6jfMudtbHtqDssrV4PX8KBfv2xbHTdABLtzGnSUrsz6ZJA1uqBpU6YTi4V4dJu7ddWn3pA",
  "key34": "Fwuc9QHX8F7qinYEjkW7Ve6MHPhkMMEKUoSisE6WXZ1hwLwh1z68GdReE2JUVEe5xVHPeAJ4afprBtHk79A2Zwq",
  "key35": "5JyKpFsd51Cx878Mndt8x3oYC8HF1A3wZkNYpe3tFYSwMk4BJ7KHJ1EWBntMHLJhFe1iiVxoCEeMZ6yn48zRm2ep",
  "key36": "65yRRZrZ32hmzVYnMLshzfJgeq5ae9QMfVx25gtDbMi74aHkPiyskpe46b9Z6XLb7cEW6E7yoNo8jd7BMkzMY1WT",
  "key37": "27qJKYkE4ETr8aFZwGRfEos1iK2rVuhJPcTBrHLS4VFVqqN8XWLqNaPdbztL8MS9UBrfgufpTCExXgct42Tqa8CZ",
  "key38": "3gBArykp7nCgMSVibAsMMdvEVcUZ5jBJajqVWdJ5RNvsdcurrmSutzCcgW8NAtv4YHWuKqosWnPMG188K9KrdzqT",
  "key39": "3PP8qcbXAakVxLPakmLtzqNYt29vc6qEw2d1w7Nrp2NE7WMv3awL8YLdkK8qViJ3hLv6jKY3rCovSAev656c694z",
  "key40": "4JhCC5J5BXW8wknrexvQpvfDWmp1JA8pKEVniBrG6iSgF8fR9mjLMDfDjVcS8LeESvHU3TxQApgfqkRSpHYdsXCH",
  "key41": "55Jjh8JuMJSPvqbxqbQJk3fWrwACnppQR37R3CxUjC8zbTYpYwFxPmEd7sZt5tFPAtLQtUNiFnbMGUyT2sSggjmt",
  "key42": "37W9MWHT4vDBUQLQufftVATc6oG8cFsypya5U1UW71vwThZsZDJZ2f5acL2wU39pWKZXFWtYDJZc5WzhTnxzwJdo",
  "key43": "ys9vKebtUp9grE7U13vfgxJmsF6NeaHpwPd1ecCrDsh5KWDmrrnNGFD3zsBobEySPkor7W6MoM6hGBjZCiy4hJt",
  "key44": "5NXThRPaStHFrV5oiotNY5JY4Gv7tD74STnpGQm25VWAoh8X9PT8ZsgFuu2xZZs1kT5YtKXweLP3yBTvjCKDKz66"
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
