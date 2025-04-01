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
    "4ptUjhyocCpR2z4cR7LGfeLS47H7mV1xtyDKizjhJYwcsREVMNo6wkKvDP9G5jGhxvMxC9osKZ2svhhhj3CgdhPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AHJMfhv1zYmcLryizaTfz56hMhigLXP7neKCsqeTpMfvkedrbSGCxyiTnZ9jyuTKKCr6eiqsG5EokyQNntHcUvn",
  "key1": "4wzXW4hugTHJiTAxDCwvzQ62Yypo8ZqhyPYDMiT9krDrWFqLifVghF5wzBzwzSsgWakMefKXvKqM6twt9XgJUhiB",
  "key2": "2BP4cyJ6UHzwUdgoWmzf7vajiMm5GjYXXkd2Qz4Pan2kbnoUnKMdTVJcACtHVc9Lpic2VGSsz79UFiHFm1PMHGqy",
  "key3": "3isRpiHw8wvPcme8JVWp8qrqxPLJX4DHPCDqAmCZWCwhvZXdUVGaq3cA1HqdveQpZpoXQtauCUAdg2ypXV4BAhHk",
  "key4": "5fZycD4QchvSUEuBZDgSkXACtr2q6T9bnPRZoiHtRYUrRuGZS9j9qjzKhgNVCJdPkT8gPXtooPLtiQqxTgws7ywL",
  "key5": "38PzFhDiexuQmvMREPv5rtfFQPYgmRScVjRpmkE8cSDvWkRsryRPHQyGeAtgEWiGWVYkGMFtAq3UHHJj6R18J9G7",
  "key6": "4sBua3SAZ4H4Xkq9Mm4v9FdgWw3mH3dum2NFqSHZs7cQz3hpJqWcnzus3k8AKDxJ8XcqjqwCWTBC7JAZwLB9wgHj",
  "key7": "65uukPZjqBAzDiRUNFEcRwZmEVCTDQn2ja42wmMRFNTSetuM8Jp8bE6mHJ7YKZbvUyCY43PWZJGDZpr2HLc97qm9",
  "key8": "4Hbep1gxvqdr37id44EnbxwzmHtUs6SjHRhbBHJrfL75R2sAtEzkHfWkX1YCHxiNSu3e2iJzMJMrSnsVseDktXPN",
  "key9": "66ZUYxVfPRHCShZxzuUfAYTzxvPyffi74BBeAtGYjktmt8PfESafLXsEbmGC32awrWJHk6Q17QQ3EtSHgGcH4cnC",
  "key10": "52mxbDhpvfnirUTVCe31h37bSq9u1ZZUX23Eiz6LAE44kKjtbr6opfbFZBHVMFbJ1b2Jdq2ndYDkq6see6UyQuMo",
  "key11": "2ujAuL19jPjz1ozZFcfxjDBZYecwkd9YZ68dvLsWjnqX9hm7QsjMubdSt6o4heEqHyNPpARJAaxxVFsyTb8Fudky",
  "key12": "3MuomBu52bHQdMxu6fecwypHLatJpT4QStDkA6amAY3KK9eCKpiE4BWnX1joZ4xYFefq9Sr5YQR8Pn7cSu9qCitg",
  "key13": "22tLbdtFk5R9D5FUGocfJpzq3j5yfx5rBq8YJpY9J613S7SMGQZNd89KTEh5y5qW2zTbdymjkXWFvTbi1LjnGq3Z",
  "key14": "3GHq2hXG5QyGjvYm1NKN3EoV6qV3qK3NDYhvbjp7HRyTLc75wrD6J4PZaGDHrWHsc7NRpZ8JNyr2VVnzp77f7NY",
  "key15": "5YcdyvpTCY8kmx6azYYbFvQdYymruc89xQaB4RC3zPuowQqWrS3ZLyTrThMVaucfZvEggDNUeV55a4WaHRskRLn3",
  "key16": "3CB7rMXkwKRFrfVnDXamcLvfAS5hsCea1NbcHCaYqcPVHj1CCcXkdhzvcZMUju8oEobYvAZ5q7tVEVCQoqu2nysW",
  "key17": "3UGSG6xbaABz3DuK6zCcaLpVzXvJXzN4uNkyG4XCZyhXEazfgRjD5idp7kZxrasDnWMQQLQUeWRpr9huUT1VPHE2",
  "key18": "5H5aKrbH94Jn5qSrPZjuA4LApswgTimNs9AFcktXtjhRadWQMYs3sC9F8CWAePHX1m3T47F3KB1gnbHcBtymyh71",
  "key19": "5dsj3s3LjVza1tRJhHdFJzEptcg8vshr5gGgnE7iKPvzQ2eVycu8bf5aCceDCnyLNGWAn1rh5geWySBT41Ligmh4",
  "key20": "2Ud697NsLdX6ighvsQTenFMnL7uyX93vjSbBnFsc6QcWwkEhk5pyYsvWTpYojaCFGjV6xsLyeFEYWib2FdbizSSn",
  "key21": "42bt1SS9VRr4ZurNfLmeQ5zjnqCyYRHfLHno5SpGrYhYaF77xDqQn9vvzRsX1waDRCWMvP64X3MQNGZf242ZxgdR",
  "key22": "6GjVFPtoWaY8j5Px7zcxrLc328MazTeKXqC7Y8xCSD6TNHi3WF9QfRNmH4XSz57QZtzK8C1z2w15iHsAJPDbkym",
  "key23": "4onmSsta3nuqyKZvHNTTrxbowSP8uckU2J2em3UKU6EZSptVEy2vL3sq4C2ZjJGW7arFLgW4DrTDHHgpSzPt31u2",
  "key24": "5nh7Q6cq5M5oZNKJw3NZvuuHQRGiTg3JxTLMQUVwrzjFERzPGS7JuwYeqrEBQwGhGZxjexaQUpEpsdwY1LEGVWC5",
  "key25": "3CtBD3q9n9UtqN4XVUFbxPf7vJk6nnm25mthEtPJwgEVPuQ63hLaFNKxuMnUFUybQbVjdKLeqCaurWuHhcvbmASw",
  "key26": "665p1NL9xepqrqn99161S76QTZ2VDgUDAjhAAjPVYHuaerZoqoCa84auhc1HAFK8ZDRuCq3fmpArvC4X1SaXqvr4",
  "key27": "3ztho9W3vvY9Px6uEdbk5Md9NWdjUsQRxcaN7M6DzjAxXu2FEbtMbiDa1EgZEAi5nPfkWkE41o3vh2Js6k7kThbb",
  "key28": "5ScXD19uZMG6jgPPGbjcotgzDrHiSs8PJBQNJAxSVZpddQVJ2yKLJtrrkwfRx32Pq2PKWiNJYwszb1zpvnHRtr5R",
  "key29": "2zxw2XHiErFQCFLY6XEMtybDL3E5Ks14aVPuXZtMQeQNuASheeh3ZzaMpC3X7GinJpYuwpTsNgi64b9a3o1izb1a",
  "key30": "2NGBeNkAa21R5b6aCLraneVUx3NkLx1Q1zHHjqhGcStbF94bzhjkw1TSHZoUMZjRbdoHsBn2DRa3Rqk63iyXKu7N",
  "key31": "2Xy7jyWssih6SFeps9zRDMPrejLTVBHZuUw9PEUr3kteLB8hwZ3fs871iLwzZ17Zncdxt9byLADbRYFQDVgr7kyk",
  "key32": "4MwFRJznYR8DAtCdEMDXNonBdmBUNr7jvzBD3gCBnQEMA6HNPvPA9erTGXJJSbsPW1HYBAbBF6YMjpFFLCEjjqbL",
  "key33": "3yHFQZUfsdj7PJp1KaUnzg6vm5yhoGEgGEcSGMm9fuU9jEfT5N5JvomdKNPgy2F4w49b55xHpFkzUvGM8MTk5if5",
  "key34": "5bhPf7Xtr8V7CcukU6MLTL238cZiD6iPUMNCwvewXVti4757WtYrfw6mmUqs7J7B2Pxx9YkmDFpKe9FMdtGA7exf",
  "key35": "5sqPhdXEuAyw4SqLadvjUqb71wVxV36n7hETpeoFbNcFE9tSRRAeumLaZBksw7a4zCrwPH92YnDjNuom3aLACRNm",
  "key36": "mJLWWYC3wBRHxvAm6YgeR8fzF4T58PeGcScVVLHJYijij94gU7CLpTAszsFVzZiXTThcX4nD4PLqdvCti1NqWLc",
  "key37": "4SGEqJRyXHBZ2fQjDDaYuea4sBeeXr5d2cYo1YSQZ2sHKS3o17KfXY7e5LBQFULwq8hCwcHSjvwHjTAjAedu5i6B",
  "key38": "2p9xE4R9kAu2wdu1vmeVw8Kc3gMoLR88gsbiAeWdJE89tPQSz5Q9ZCfLatAgzdMdwqkGp3JsZcjefNBV1z7FooB6",
  "key39": "4EKwekyLaNAoSFc6mW2HnJyVPMA5QgD9wLhw4DBdBQYLvcppU4639Vvk2zroM2YVB4H7aSLC1nNBUBed1J9qbxkg",
  "key40": "4FunFoKDpwXkSatbBuS2sW4rEdsMQxD4tC9B4sfSk37rgFFFphe2KnygmewiCXgYfcNprF8mdWEqZDokRk7P2z1o",
  "key41": "3EXBvuT3AAgNyQpUAGc8jhHmy6cGcdGFDDoty1rNwLrY5ViazTtrQyX5ra9tXjUWj2Hz8Xb17W73wtGrJF625W3",
  "key42": "2Y78Yi5ZFpgYEYopWrj11VwbL38NKb1YfpJP5teB6ajCcvXA8n2b5vcrkRGAbBLuWpFa3EZBfCr1Po2XcF5eqBr5",
  "key43": "5P8Ezr5xAxeuJTYMnCucmW5UaEmFWaxcm9Rbn6FhgkiKg3BAEeD4U7dCiL6wffrUPLWWZ3y3DBs8Bu83HteyhhUQ",
  "key44": "1oufYHHi8Ys19hprqJAQrxv39FrsYPtPVfCeMG9xpxjgC2vJgoPF9VNJteVv2NUZedY5QoCgqqmdx6Z1GLPtn64"
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
