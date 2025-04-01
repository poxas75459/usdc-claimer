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
    "2bMX32uw9gS1prtVq8UzGCjJQmyYoTP1E46nH287MYgz6sLZfH6LL7k4BDeTPRaMBJfqmB48fFhXE6eHFZuiSeP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LttAxEB6xpa79AXMBr6LCSQC2dN1qZa8a418Ba11t7xYQmYqLUefzn9RaE4e5cAyuCzHwXY2K5u928eJrn49fPD",
  "key1": "3DLNkZ8BrsopaSoVVW8Ke97akbdA4jLKjiJdUo1YyAWZbHJkGsR69xY4jGpc749sJSmoX9Yq5U9L6fzq6eqDjEr3",
  "key2": "3sXPGtjggTHLpv7MxgzuuJjrjb3Y4DS68VNwd9VgaEKPJVV6UGJzWXJmhfEspR6qUwJeVykwWHWFRmZSh5ht2FjT",
  "key3": "3S4wCQnfSeFfi5YApLwSgpsmQ8VaUUrbajE1TW1bWxaGFSrrbFWiY1ZyfXdcAgTBvFhDuQo9AGyG6DiKXHovAmxE",
  "key4": "2sN1ZrhDcAp2qYrogJNNK99mnJeShnJ1MgLBbfoEqBtPYcSxJGWp3qbyHqwRhRBWzwctjFeNNA4eETVpUGjgyDrz",
  "key5": "4A7L8uHu2KfHw8JVV3mEEpdFXGGCmaVmxZdzWQvaUtfa72q5sP4ahFgNESgYb9R7DQD4f1vRdw9FY5SKdqV5GVnW",
  "key6": "okSzatvcryEN4rVoiH1W1VymdJuCGsBEAcrbqeXWeohGa1jiT6bKP19BZbWt92ZP7hBGnpzTdWryQDPzAVqNof7",
  "key7": "5fSkdBkxFeYv5B2TMfC2BQmJehAbGRumtvPtGq5FtUrvdho17iXcWDAa8TgZxaYkp3cXv6MVsWx45zfjJRh2VWK5",
  "key8": "4WWrR2nPWAjTJGhDGdXKeMb8CG28PVVLKWra62EQnuRLKw2mNuD2VucPsCu6LsdqYCE88fMsB1FkfAeJitELtv9b",
  "key9": "2CYTg2w4rgTBYh9SGPqXVriroAVnArvDvDpZBdLp7jdY5itMCCwq5QnPLFJGUQScwz22rfKmqQa6j8gr8Qsx3D7X",
  "key10": "3xhoreZxtGB9vMenwLBg4ETBT3VHcd8CVxYSC3rXNLQezJzLYe4EpQqkXdqLSa2nfwwi421CA8wKcN8pKbvEEC5r",
  "key11": "3YsxeHBy3rwqUJ4Fojgc63qm9YZuvUp1hhbVNGFjZE7EtJnw2TH3HikqW9yPNxHSWG1Yfokk3JNAzrkfsVhSF5KQ",
  "key12": "2fMB9cxnVneqWXyXmJmHFaRoWPjkhgUpffGhUweAwUbSMspjFQNDxs4PguzRji3HCxqw6RvEsqQUfi57nkihGpxS",
  "key13": "5ch2E8fnWZjEoFaojygvHPrG8trwVtcjJj2vaowfCfxvb2VQQoHTCwhfAEB2hKFkihxN5Gj7epNhscyFVHJSDvx2",
  "key14": "5d8qf1J14GP6ku2hED4vPjNUof3RVfhX8JXsTTxuKgWrFH2Yu9aPT7xEcnT5QhUWMYTYiGAK33yVLrGQKFoQggf8",
  "key15": "nGAkYsDcDX1uevbvoV6q6go8G51cQe9nAfT9oPs8kRbBnQhvpuiALxZBXNsLPxYqqPWCUWqkbe2ysm9n1hLqxXv",
  "key16": "3qwhHF5aSo49np1Uzbt4LH7TpjrgqNkn4mHXJxSqQJXBh7Hky2BN6EgTkakUB9ZMhQ7ETEpQ131xzYQdgpEbiDL5",
  "key17": "3Mri7EU3aAH1Y36gtkgakGVKy2hdxbfeJfkTKd8rs2QGhseaZhPmrXXtr2HoXvLn8VVFoK4eFL9jarLiFVyNyciR",
  "key18": "4gFf5Z7z8BhC51CqG3FpecDKmYzoNC28dfhzDu8CHvCZZZd4aoL494AiiziAAFRhfyhiFMzir65XRcdxKCkpNsp",
  "key19": "29QsB4LxJh1Gs8y1tym2qtBS5vAxjhDqLuLocUEYxP8nVFnEdwsan4P4dNp5dUmyK2ja5CMBCLkbmpqzBJ7f3jHf",
  "key20": "sD9pJFnsYhGPqpGWGnL3TK3HbiUB1PQa4HXkr76ouhvpNAXmsscJRkuQfYgekEArB1tDjKjWVe6SNau5VEpz9LZ",
  "key21": "3yU8NiHyg8fnn2p4Q75b5mpH1WsdRWoqcssnSnQLXudVqJYHG2GeWjGH2vacKwXcLLx5NR2J4vhx98WHcqFhH2wc",
  "key22": "4zNYi6tVudikTvT9mR3mq7g26wiTCTUwsSHWkf8mtn3xVfyRmm8fRRES6hebY7yvyZ8CVibtpFKwRiqucZBH4VD4",
  "key23": "44GBFpZF5z6pJqP8LQLsjSCPhfeDWxR6SGynuDh9ya7gT4DEbumCy9ndCxGToSCMa5mLP1vQQgYfMEDUVH1yzziB",
  "key24": "3WnxWvqZMyMSvpmvNgybeaaDc5MUwfwXXZphUJwq5MK9fBhE4krT8M1tAK1dKYk7sTun659pGGSFgdKmwuqbBPW6",
  "key25": "wVGyWHHKnsof2Lqi5ga5jMYjJUCj9A6oaeGCBHXa6rZcL6XiaXqzy3i7xAkwzH6DPwsNhGV68fiLSCmnAsQ8cAS",
  "key26": "4J69oFNVZMPW1Lb9JgTkJ8Lj7wkRz5TZRSLefHyTB6warCEMoGznvxsMUgKDiSNrhvmacAk5vNYhNke3icsdzJSU",
  "key27": "4V7SQA3nXfnPeqjRjmio8Z3G5N6FmPR42yCyHtQK9TE6hqQhEerKr3Bwzn6GnyBA9ZmPg3o6nbUufYFUcGKBjrtf",
  "key28": "JawmsXpqLTJjjjxYBTd2rrvGMGXu4rTNJ6JdWHR5KeA6hEzn226WkGxaShQ7yzAtHWK1wdWpBMjoqrU3p7dGgKy",
  "key29": "pb1bcbvgZm4QbbpTRgDMXeuNtCMy4KgZjoUTuhRauiXCsUNwLnvJv76hLycaqD3oBaA4UjS7LorUW9g49UvJTDz",
  "key30": "263sC6ZMoGvFiF23mH3mAMVHwjxVAHJN2hu5t9nBg81KEm9HjQDt3z9WSYsfTtfGw6jRPL75DBiZTfibzzRRVPDb",
  "key31": "3dYyvVCHwCmxhnCaEUVQyqb9RYUTX4YU7ekCitXbUAwcdyN4ucrPd2swGEsVfmfXtqbZuJCLtbyXCSev7464iRjX",
  "key32": "kyvyoUm3YufnuovaCyb5jFg1g97tCTuBSLGHaAnKAv9y5QPBhswSrjKBnZhf2YkFdgyjQUH5ZXLEDdYvSGgXZjc",
  "key33": "4RatVAD9Tvp3DBr5CqCDMi4CEz3RyA4pTLY4j3j99kjkiDMiYCD63mvZKJogAWx4d2cmsaWbz8PkVGJ2SkgqEYHA",
  "key34": "2aS6FExT7qJixcFMuJtVWSSPqe4v83kMBCPmeyztZEPXxVkB5N76oAe4Nhkk7wmz3vYxNiZGe559X8M7tniYQjKS",
  "key35": "mG2hx1VL5u2RswEbLER1qiLr3h5LubtoJbnCSFEuGP5c6uEYq3JNLvibhm9eYFy18XvRS687NeT4uXmZPXZK5hs",
  "key36": "4mP3v3CDMTqo8tPWkJdQ1F5h9D3rk93gCPVPWnGgb38fuFCSZjqW267LGzySiJBVcvkVdLZk4YysGJsC6373i1iU",
  "key37": "26REdFQuQWKghWz4ELaa4jpq1rs4mmZAXLSvfSenGvkWhwe7pnTiaEmX7KRxYffC2yTrjNSGwUNHGbo4tTras5jm",
  "key38": "4bfkRyYUoXU7zcgpekpdwPUEwQ4NEVmAods1BaQTda6QErf9GXMFYFHJvYWqvwrjKHFS13cNa8UikPBTJ6zgUhVP",
  "key39": "5jBDS5Akoxb3YdaFmUNfPdfRyMtVkzPJU7iGHkoAzEd3kaVU3n8JatN8T7sZMSEzB9tEg8y3fTBZ6fjsVAH6wD7Q",
  "key40": "4cWwPuhvyCsUQxSgzUegz8S4XHYQL4jzJsJ9odyghfCatWyxJwLV9H5rsqGKtNjiBtAiki6swCusUdLtEphp91BZ",
  "key41": "qkCSaKWaGCzKUN7df58BLmoAM69KkwCPXt8XYFo7HsiGPCXDjewTNVbSv6H9AWoz9a7rKFbu7ECUWnKRZScFgwE",
  "key42": "3r5N2TdgPkYRg7Jk4qzQkVkUBJWVRjMAudsdGPaFjcH8THmnKXgHYuXxGxbtnJVN1r2aK4CQNfJnojkbR5ymtHTp",
  "key43": "488nnbxLZAJDm9MSro3cqUCgueMSFhb1eRyp9bNUA6XmDYQBaS7z9gNd5gFAKARCfnkrY7Fkr1H7SHN66tRp7Wqh",
  "key44": "3HFZcVQuxHsamP1WUyffeCNG4GJqsiF92jLKiWhj9QFVgiyqMNmcoY1jHixxtcVARNzruTCP7vtFtYnyq9x2KMPn",
  "key45": "2jmvfM7MARNHoh7NcEk9uBUysS3pWu1pDC82EMXPyNHuRroLTfmE1eGjYgkk677yB29u6kSyvA4DF34fbr4s31Ef",
  "key46": "236DmsARKg7mpHFBhUjzcd15Ceo43EbiHNkia8TC48huxYjaeRojwnHJf7QYHAxiB4RTb8dprLVk6jV28bjd1wfy",
  "key47": "Bph7Ezo5Y5VJjxJpxqdcJ4DEGKP3JiEzKvSvGmhZH8pvfVHyH1jtr5fRcGeQXFarZ5CoLLyj9DZgtz9knmgPZ2T"
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
