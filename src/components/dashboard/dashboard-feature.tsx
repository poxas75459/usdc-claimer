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
    "5niY2kwtraEXite9E7xz7s2RSCwqFohCjHr2H7H18UsXQsmFWHmkiiNwfrErKh754L7NancP75bMyJ4Lrj8gozDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nRhJxVH9uYhZSYSjDsCdVDAnPT4caxb2qH9FoJuE7D2J6vrtS34Bu6FD5MgryVXqp6qCszYLh9GYYPkdLmHGmY6",
  "key1": "2fgu9FYuNdVyr8w2XDadj9hJxFzHxGxBhvgKnwcxhXjuzuFd94vt6EgwvcHNeot61fxXf6BoCVBuqb4Cj8Zh1id9",
  "key2": "2RLuiXsumn9RZYSndU3jkEFdRJVg9oN7JtRfw7hQ6kgDpbn8jYRYMknSar8jMDaRnp17xojLvdCVW4whdAk2az6D",
  "key3": "2BtVTNhFQfdweMEWvHxSkJx31UoSLkU4oHueieXqnKhwoZ2fomU2qckhEVGcLYibhAANDZr1XUDmWSegrXy12BdR",
  "key4": "4ithrYhJzJFFxw8WvgycqdgTZLyvNQsZEhqAyyKVTvcnhViN6QAZNA4mJhm7aTfLrGi4nSsyUYDez5tTrgdtgxDg",
  "key5": "2XfBS1aCjVkKqrzJFukxaKqLnQRgyto92xxzWLevcuwNb21zEGzrkn3RxEGKpGhwtUkHvTWkqJjQacbmkD7HTzTd",
  "key6": "4Xn31wbXnHfW67TdQtSRqZRv1XzsNgkrC7ww8Gu8wyyVUepLZRzikr32iCJ2em6GkBALdFf35aex7SknRGJJxyks",
  "key7": "563bFTtWrjwVAYdQwDFNgaox1mpEMUun1QEAW9wPfTaWcfmLJhGUyBMNhqj3hmMZWu6r8SKCdFD3GDV9dRQACuzq",
  "key8": "uX44HNLiRv96n3YAfoMA3yR7v4FhitiaD2K31YKWuLD1RJHRLkAcRqRLG2a1HV9w2GHXzWtVBvvm94Jr74wvzVL",
  "key9": "5qvRBsLeU792Bek1hq6Ug9ub6UczjzCUSNzkR1HSWTLo1xSUTHNxSHU7fanUMf25DQSRvZLDRrdsbTn91CiiNtqh",
  "key10": "2un7jEM9Vb7a8WWXscLxbX36XqM4qQijdvJfc9kFgaAZq2Hayn9sSBeKyaDotJjqSMYedHqDhbHCvLnB4m3M6pQi",
  "key11": "28syM8jmw6vnq7hPs92P5pPinJ9hBLjXvzwWR3wHoNf3dbq5E4Bqkbhv2WxVYtqavCYWrk5mvmErrFZV5rEEcK7Y",
  "key12": "4x85GRdmHQDg2aamdh2aGbCvrx9wtssw8fM5fuVvpEH53p6srxZwwsJ1FMqwBGSwvTLTa4ts5PPgTNHTgAbZReLE",
  "key13": "5kKEqfCjB9AtZWahC17MzZC8SkVoFVCS5uDQca4bKb3ggr8mqBXCogbdM5KrFynyW49Lncr6P3hMPY8G7bdEdwJ9",
  "key14": "b5pudLE3QFq2kUeFy9Nai2g4SCZ41EJEZZH3o9GMRsye83eB66WAWCX7gdh3gGBuSEwAbCJwc9SfG7NgmJqYc7u",
  "key15": "5ZzHy4aVmL9ehmtGAzrhvfiJbU1ovUDZfx9fo5gQnUfV7e2NfsoFdwEY6XqiTWynx7fnquDjfZQoZMxADKTLLHd8",
  "key16": "4Mh1BS16cXyLzdVAhovfhMr9ZULet1BrE6jQut1dFWQxPDqB4jBmCudJX5Lf4vGi2ZcjL8kzgAHvnPp9wFAJdD4f",
  "key17": "66X9cRGVyxfshWaMA8ssHPQ5XfR5xEwjQafa3XnqoGRboJ2zpie8zeNNtSsPQFjzbcQpTLccm2vCMajCszF6iUqS",
  "key18": "41xYaGNRc17viwk9EwPhAWMB2vDGjXnPr4gJwxZQKZUea6GiV1FayAvFWrQXXDgaNycKoW46QDu6kFU5yGUxkuts",
  "key19": "MRndxxfB4TpTRc9jSJuYwa2HnUqejfdfmVFmmuM682x6FFk3hsJH3VtdYDL4haAnr4EyAL3MR9v1mbAip2G4bSs",
  "key20": "5r5Z1ho5Yz4HwXobMoKv8awDUM8ynZjiypP7DYK4N6jo3qVTvqQc4qeeQGSqctFA12eLhcraN3wLvRgr7DEuPcZL",
  "key21": "4q6dH2UyM7tpvnC4ACvauW9SCTZu6bmkvquoJ97RKU7TFkm2oULpsG4vtMxscNQNXty8dF5x4dwXpcrbRDN25ggj",
  "key22": "3y3m9orwDf1LEsAU8FAdkLh8pNkvR2xvzTp5QgSDEonoWpabHLLx3a3pDse6BEjrvjquKzg7ZezH3gFEuAYxufnC",
  "key23": "42kvVmijErfvBrJWe7wBQJ6S9d3dd9FrKqc2eYWiM3n7koYqPbLSMdCsd5nrLDHcWsyUk8xLYyqzMZHs1mtrYg3F",
  "key24": "5RsQbeCkH7hkmqqq692a3A9xmUxqajaewRCBGwgjrmCMdVy6BNLZYVVaTPAw3H1MdVLCYFcU3oZcyZiadNUadnu7",
  "key25": "4oaQYpXXgQD2q84kCutAQJ9tjqEFyiyuwuWuKKaCYzYStVxQ6mofLcaParUCpPqhwX4vCXHFrfnLCp9fKNfaCDhk",
  "key26": "5RyiQU1TFcecc7VD47CX4eU4g5y8d2rWrmJ745gCkpgoc3QUenkSHgLYfrhXTnJsFZRxxE4N5SnFTB4fdT1zDkkn",
  "key27": "3kDghXDzkkBBdyrFEo4D5sLWqh3QP5GtVP7WEA9QRmfmtVfSdUWWNn59xScZ8yzT6XFypRrQNgDma8TDV124c36A",
  "key28": "kpTpmcY2yUKyQEaugSFWN8h3PNA7CsTLbAesm2hL6jD552E1vccUpQK2MMYHyMAimCbuoBjcC1KUEu7krG8U3Ro",
  "key29": "3yAXwnuUJgKBvatAd8RaBKMA7bxGpkHBzwB46ZDu3Aq1Mu3hKqMwfQXiU6G6zVPqAEoLjQJxnYqwwiUP6TknkMn3",
  "key30": "5s2JXzcWAH1tTmRybauYcigrPfzhdTgRXc9n5AbPNphuPeHtjZP9T9YJ8FjpzsUfWuSnCo6Dtnm5e8jS2JYpM9zu",
  "key31": "5ze2M1i2W4KhBTujkZDyFodFMqwnGPf23Ygd51aeeciRbBLdAtGa7D42WT9cJHvpeDjE1CqEJvShTAXHsAq4YsjB",
  "key32": "4b7R8tbgBW7BdXNR4M1ShTSDLiNxxUmJ5VLrcgSAXWELdPgF3AquAqmqd5d4joZRB5UANGTNQB3JbBACExs8h41B",
  "key33": "2mDsHZMiQYXKm3pAAAQHyDjvynYUhW7aAZBwpyRw4K8Ain64HF5urwsXVmFVd2aRyyyz2GpMrvcZRBWjsgoe9ZLF",
  "key34": "3SrCu8LWJUFYhvxuS6cmVYP78hj2i7PDcpsqZcTts76yBUWG1dSkC8hKVmN64dku6CoL3W9kbtNEYCbtbEjPtjme",
  "key35": "3R7BKp9xTwYes1m1JeYgmLs3nfcqXtUF95oDKHfDsLLca5PtjZVBnNcKUs1zBBdUa2qbS5LQG3JNPcwGq7NmgfbL",
  "key36": "522MmFtWLw4vCZqvbzKsE3Sn4djk6snXTvgtBzWq9BneH7VUek2u3rAh69T2qGzkfrZXsQR61cYJaZmQ6QDzd1yb"
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
