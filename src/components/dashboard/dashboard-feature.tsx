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
    "MJZ9a2aqa6y3WtSU1WNbYErEUxQNSVWNKMuXpWX8GBgLbFUsjkRCXKHUhyvhHRPE3SvZBeZjyPNHXVw8Uq9hHtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bCvaYBeTqDsF2j1fmRxVcdR7iQY6hKqJ187A6JtwetGdMwCkegkQJituMjE4AsxVUve8NUeMhkvhmksLwwk3HkD",
  "key1": "5hDwGGk7qxVSZBrYUciEdq85v6FWBMCTiU4NhpoJT3m8ajXUeV4E8mNDJGrZ71anBtBtVukRwRNMocRyoDJEBB1K",
  "key2": "3qWWB1Y6YTsuZogUuM5K4XbH1QPqLenssBETXmBhbom4BzASub45brLtU8M7wwBU3vSaHnW4cHvnC2oGLfKxHkJ8",
  "key3": "65hvZTbtzDcabuyvNRfTonn7GRQKsY3J54x3xZuFAFucQT7rmkNG5sk9p5WM2E5wdNQ1btdFaNKfzH5AKNCZdCGc",
  "key4": "3NjLy8PL7j9ETEt2ptvqLo5fg2QQmSmevtGzMAgizcxzcWqtcdsaKRLDsA6dKYxZ2Z9B8bYdDU7ahkXpsCukHNGr",
  "key5": "poRUUemtazeihfhKoaqyjeMnMhHZcEev5Z8JUgADTFenYbTf1DeisY8spfrqZUwBEGSuDYU5X1G3SFfG9qK8vMh",
  "key6": "5YxRz3mMHARvkwAPw2QCkgRBKRA71FqpBZwFx8T9PYnUAqoNhTFyEt6WxDtaA56awhAgkBybnyYJFSfqKp8A2n7q",
  "key7": "25ooeDVJa5BVm59jWhHRAjDT4hYd3yzEHXkYH5avq1gPb4SgS5MgwHjYHPHDihAXhDGAPzmMeuuSj5ARxxXz5MT4",
  "key8": "3QPyUPbC1gFhuqp9Gj88M9GkMMYj1bPyd4SqWA38DMmmHKVFgR2CcXMb9RYbQqDXsuz8Gf8A22VQDzbAErTK7EYB",
  "key9": "28x91dZq1zF9xnftnVKL1FYs6XBUJ4CvstaJ7LTFTGfBNQqvgDGpoLwgW8zEjfYyCqUfTgGZVxHV6T62WxcQEp3b",
  "key10": "4QZ1xMcdwY2oF5jdFXaw5pENnJwgtdAyv6gkh5MLnFANUHNkHgpU4KKRhrBovQ4nZQjSHGjRLueZMcRaRo88v8zu",
  "key11": "35ZMygyio13xhLpRzLorEqR4ZuNwa3RNFWiCnqvLa3RdDkUbqdSNMjVthYUJfoQauX5zUYAa4f8j64Pe18LnTp2L",
  "key12": "3CpQAFkAGjMW7F3cx4jn1tWWjowTPbSFpUDwiJWhPWommiQKGCdXdkBfmkgWjs9og4yW6omSZ9kv8V5SKahCqb2a",
  "key13": "46xUZNjxJU4xCjJVxbg8j4q9FxY8NsUd38mfoKA9v1DhigCnoNzhXcz8ZRBtNc6Mxo1f2t5nN6wjFtJ8eYCnc6me",
  "key14": "4LoJEyFfXr8J84UZWV3Yyf3B9T5XYiAqvSvAuy39yvNfVQTEqx6ADDVawtWhfN2NmKRpHM4Pg27f3Nj914K5z46n",
  "key15": "5LSSSZ8c6dG2HybMmNPeDWeD8bmfQXY2Aa5BNHPXwdgwJvryCbyCNkMR1F188miYx3E48kcu7tGb1rg3MqFhQsSh",
  "key16": "4QKyKa8i2CntncN9hBGPtcwwLvNN9Hjtxvkq3tHq9rBp9GSng1bCwZWHd6TUtzBWLVbpXNsvp8AyXRUdBFKAapoY",
  "key17": "5xnDbAp3PPcHBAGCEzd9yzy67mR1GajVxzp38iofLAPM8wFb49HR54Rnj1BSoXmhQkv36KhH5DFPLJRiqVxVyuez",
  "key18": "5xweVu6zZa33DtMdAyzDmotPA11GMmQzpQME9xZCirW5jYrytUKyvmM4SRtLFxd7c8CRALe4qgqUb8tvgaZuNib6",
  "key19": "2eNb2r16q3W5iPfcT5XzSy2EKHA7NA5GLJAMZgRmedErZkbSjFtgQWk5QCMDjzzNrwN35ndQdeXrYhcD3YkkmzHA",
  "key20": "2vi5GzsJ5i1JieA5RqtfYRdTrsamJS6B9HxAzKBnA3xdA5g1mTRQDndqeZFQosbJNVEsVDwcWMfof4qp6y2Ue1VT",
  "key21": "67Sr3SMraSU87Zq2BDXcMvpvctGYEfmQ9J46xdWqaxwWZFfZwEoCdBNoCqtD33cb4t64zm9DY4kMg65UMipTJ5Re",
  "key22": "4kXZfQLrTBv815fdw7okEt4bBsLb35sFMvmWvjeWA1w7Xf3shYXxjJtHjSRNkWg7k5FbijqC2gJZjPaPUmie4CD",
  "key23": "2oibgGZwV5QFdg3Xb5yJBzyXvrqdPnm8e4b5xomXDJbAy8FnZgYNLRpbgX5LhbbCifrvRFNKhFkvnvXgnzdkxLG7",
  "key24": "4QCaYATNTVx721S9euNmBSLaWw2eZiyAmYULAWXEWUiTRxqGMJdanFHByQLkMhU9h6u1wzbGfZ9HQPY49AA1pWna",
  "key25": "5591MVKhw1avsn1c9d8svqMdgqv7RFbEn9TZLQHw3V8X8KeJ3DgTN11Rh9LPPgRiqbySiLANSp6fM1KxEyL6zVFK",
  "key26": "4pQN9XRALGrnMjUfRp7a63i4GAw1eYPFrgqehUhEN7HVbCLHsEvAPboVrQWYfiZAmyW1UHetLb6Mgx5bcCbUsGYN",
  "key27": "25WuiKpE2UjmF5F5UTMwBkEP6SaqqrdDPYLDGDaQyaQ3GgNQdFFxXc8s1CqeZu4CrsyxpbMgAqknjV37hvqYcND7",
  "key28": "29NnTot4zS7iz3x7t3HgtERG5GzhkFWbyMWWY3cND3nmGEnW5BRz7WMiUMrEoBaq4AZCDd18N5hdxjTWAVzyBQgD",
  "key29": "3rrumCUBWLkdP3btWYKxiSZX9tyoqq6Y3DFdWYukdChMq9vCAzUzAStRMNmsL1AsqAqBzPaBetfznAKAcSjBrZ44",
  "key30": "29zei6XFr7agDN1UHW5ZNQ2YLthWfwCkjkGot9Sf5UUBJ3T36i9y6rFAXapGTqxow3LrHTYwQ4z6VZvNFQ6s2PdF",
  "key31": "26GfkQyjUpeFvZSSToHMqgrSA6TMcxpkRYpoXfANTHPGF5nZNrF6JdqX8uQFZZfXENK1aUSBuHmE3pccvo9E5hEz",
  "key32": "2GkpNXu4uMhiSmArv6hPDza4aPSfGeFQeJRiBomMxHFFyPY7BMbMoCDHJvpXrWqUuYaNbT8k9ywa6yQXKPn6bjtj",
  "key33": "pSAsZjv3PpzWD7UA6vK8jK4MoDxACpLkzyiMae9R52AjZgFw7LF1jRR7dVsRJRenpc6C1pZUBqK4sZDe4zXWT2U",
  "key34": "3ftQskDDhDTRLFkh7WrCtyKEfcxUiD3fqUc2Rt2qdQJsEGW85KkW4KEdcuBwTsjCMF8j1YU1soksKPgE3dzN7i11",
  "key35": "5ZtikYeWDE2WxiLtPoQ8DvA9ADdSwqx8GqKMfWhigYm1ZDt8heB8LRrK4dBcLiULeUxxXeR7YHWnAUhfwr91PoRg",
  "key36": "35B6osgN56aLx16ddYq1ju2XYcGFovDkEKHJLcdu3S5syhQ5YVagmytCZftcceEnif56LimU4KPhYmA1oQtZCKBm",
  "key37": "2QRWS92vH9qzKWzjWM16CutFV7EP7NkKMBKpP1797jgN9ENLxeDTDTWeUS9c4WCmKoRiBtF7TBVdbAYHsVU3Udu3",
  "key38": "63uQ57r8k6yCKeVdvatEaEXMZU6ynb7iKLBA9LpR2N2Fi5eQztPePgixuVENbyg6GZWp1uHrxSVC6VjT7TCWdThL",
  "key39": "4iRYyq8MmXa49kUUkrmRNDTZNeVttue7BhwPTrKGZEBFLxqv7y6WUHrdHwyxe9HyzrXy5MCg7u6e9xiWz1B7Cx1M",
  "key40": "41XZy9EcZxqDGAELChgsCAAaJeqPLV8tUh4UrGnnq4EYEn4axhoKmMDoPF4FABTW1F4mcK5JZ7K5Ljj6Jwu6NFpR",
  "key41": "4EZtWL8ZW6yvsgjda8HgvjHEYdHzCDmkNstTQHcb5SAFM7Lyx6rVVApyyKrPTNEpHsC1xd9XmTFFNxc2FN5hrz69",
  "key42": "4ftfbg8mWXRNnZYBhN8SHNRuUMAVRjLuLnP8TEfp4YhtYdmARJnPZY5T9tZqhtRQ9Y6x16rDieNLBoJWPrK8GRB8"
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
