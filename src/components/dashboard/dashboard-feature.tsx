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
    "4AipfpzVngyB9AjeiM3RDdWH8WTee93HMVaamt8QLZ8pu3hnqcwNj3X7nax2Sc1SDLeFC2XKgvxiNas4g45GhhU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AUP6Lg6ZRpJfSh89Uh6hNGrnrNiZUZH3CFUmbGQHwuAeVJj9qCm6h5bCjKhxbrbF2EN2tUNUdJ9qRUUU76qxG1b",
  "key1": "266xAbfr5Jm3txHiHjdHzsKpNJ8rRnLCobxkAKAzbHXW1TvX1Gr3yGaFDNjenJ7gmTgLPBChpTHwZPg8mMXyMf3D",
  "key2": "5BbayXH9ZEKrzc5rhWBUZeDiUVwwPNLDKZYqYFortPvZcWREugojiAJJ46XGjBFupP8auFcbog6sjtnMMiek4t72",
  "key3": "4TrkShsC7qhML7eHJBxvrjjw96B6qYbn6DG325j8uNVFjEFgPBhnKoqHRnJAkBXp88MJaEgP1Awe3p3Yt293R3fu",
  "key4": "5V5vVJKdWsaEiV2AssCXyBsAB4UsUy3UgZUZPz86SMevxZMk7uWc9h9VJzhahn9Wv19EaEpi4CxJWMR57kZVAAJK",
  "key5": "oYJ4cxrfCSLESWvF5PsH3fgcReSNKDExzpRoyMtQj2c9bT1dRcwL2XH3vvovBTgVXHr1h7h8RyHWsPvd978C1yH",
  "key6": "49EYQV51GwPGKW52EYjGQ7BGUBmk6S5jaJFWkndFsEHASxVnpZMhxKHTykHA8oWkv4D7ywXZpfGsmEjzkAUuUbvF",
  "key7": "24eggvUE2JLTtSHyM6KHsprc5rg73xn8zsiDpXnjwdQjFW9haGHHQtH948KEjzZmGGdDeFNYRD7Kn9nhXjvP5VLv",
  "key8": "5E8zTZRTCV9sQiFijbEDsTnFdwducwQknZDxUnX6Z6MTKYzhwGtHuuday4NQU3HLSpon2xCk1dSMuDFFvckfRw9X",
  "key9": "3HEuSd1zxCXc9uWf6rqR9MmGnyfcirALLoFxQaSkNfQ274TB76NZ2VEJLRaySrtvpRTuUzGs5VmncdNd4MULKzuh",
  "key10": "Ea7Z1FHSG2WmwDeSyK9t1spGW5kdcEeRSrZFrtMHYatwU8TCSAXsnw4Uy1LaTVQErFSN4hNapsZk5wjawUqT2Vt",
  "key11": "4tZFvLs9Txd8R8zNStEyKEQqFkzPZFSapq62cjus78TJLZoEdLGsZp6wRKXBhnzrSBC4uNzt3HDu1TLF1MAo9w69",
  "key12": "7qAsJ5QkcohknaJKdCPjArmU5RZ4Ly5TUxMztv2cN3t6NiuSiYP1p261mswTbpz1q166D5pc2CAfqbFgDMhKQ7n",
  "key13": "2GkB78ngzVud7tSWhoTXospgxomsqUhGwMakADWpwdsorijkKY3NgVV1feWzfL54fkDvfDwSs4rhVTjg5hjUXJF1",
  "key14": "4WcLKwXAzoPciGSXzGwJtEfPjmxvKUS8VhvVydU7EDJiYn2fDgixdMVxZH1NvKe4rDzzazSmGzghHydzBEJPh8sP",
  "key15": "5gaZvChvikn6xFsAk5xBpyywPZxvVqRYvHuEZCkpGLNPSptWaq1dDH2DksbHHPKvvPCcXx1z6jdDKwt1MR6ned2N",
  "key16": "57riNEmnrNJEuZoWbZKEtbjpDpWXSKRuYTTKbN1pMA5mPbBMXYYjPMDjRVGQGaEkLRA6U9btuiXNXxTktvhn94Qc",
  "key17": "5XeKMbG4eXW8ouX2RizxT2QDh92xnGjmNmXzjQSC3meoMHoYGcDpipnMbd9uFgbLT5jN1NHC7BgWniNHtQ3gYLB2",
  "key18": "29VSANDXrSVpzvQMKHST8A9CwFkxAZMsyWbopxC9umebE72xjNLhmE5ZaRx63vvcDvANq1cab4mnjbRtfAuXfUEu",
  "key19": "5frnqyS9w7EwPsXGfjNWuurVjq1KG6KZhVQ5dr72kavgJpQcCBKNC33bSXo9Ckobzo3998A9d6Mwz189R2LRY6Ei",
  "key20": "5rg7wXwhEiKPTxtZKVDrtT9JozqRPMEDA76machcz3wPtHqLkaozJmaMRSQrM27ibGbrAKS3RhKAHnSmtHpb7cXX",
  "key21": "3NVxaXeHujHaonLY318aRRc78REQazSSxcVQkx3HSgXfHF7ZyGvgU8AjHMjszd2ryGBqQfhVFqoNWkh6qfHMrrpt",
  "key22": "cC8hD7eyxYo9vT8G7SgUx8msoxZP29XSWS7oMUyjmuN3RiBKH89Uc8b9EZSZYhK4JNKDaazBfXA6G7Ey4kbvvKr",
  "key23": "4pJ6VhjcaEEQmFi3Zw2UNZgoWoAieRUrsLpV7jKjt2G8jZGLFs25U1kMPLFw8P86xPZPfTxJyHoWJeg6fbCfdh3o",
  "key24": "5zEKGCLaJJg63Lm2XnQHMc96HtbSiAjYjeAxTJQZS3WkFRbg9nFtUpnzqL1ACXAyFDtNUsQPJVKVjXG8xbtdc4Nx",
  "key25": "5fiT5AFqAb9KdmjJ6iqLeAs1hqb9raVrY8Kk2Ut5fss5rco8U17W9fp3NRU3Fmtd1L944wEaKaCreQCyFtMnXZd4",
  "key26": "EdZKFtVkryUYVsveuNthSBN5cdVApfd8RUZ8m7gFRnUbX36SJnf8rz2Zvp1azFzKUBzEYG2Gh9ocnwUV36os3P5",
  "key27": "ZwzfEh9t2azfKP38LGFzu4WQ6Db5wLfTtwWkAB7JwvdNEpMrwYq2m2FWRHYzjXqDmQD86C1xDsZoskbuDjtq6Gy",
  "key28": "4wf4tHDMsZ5q2MRfHcnvCiwks1jrcjSnx2q6baHZQpFfF9FdoPXek9zuSsg8Gqf73W4MrnRHJb3tGsbJ9obdK2Tk",
  "key29": "53zA1GRcAZNE6zgWAuzTibYdrDEDsfCwrSyeLupmZ4bMZhSKJc8vW38xbRNa3P8ngxrP4qtfj8zRmrtMZfJVTcEi",
  "key30": "5SiJrAhX47i3p9QGSxRZioxa3fLinJuvZB7S14Hk2WB1Mvv7q9DQj3YkhhqTuzgHt7cak3QJMCYGGptJexCBKEWy",
  "key31": "45iuhABFFKDfqUqKikkrJB8pJB4JfC6qTDLShUWBmoCoQLan3GjiDF9NocLQeWiUJY7aetYDKQ2atu6ahoRf2vzq"
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
