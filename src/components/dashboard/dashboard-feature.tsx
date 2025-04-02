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
    "2KVxXC8RCMQReQDJ418VNP3XKsuiLoithA9PQWVSbAKSXWiYcdgwkAczKzX8SafPQArGksDGozserdis4CHy4toj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42yGVBfhAPpNssnWpbaV7HUdAoFVZT2qBJuRj6qxzWWQ616rEzyexXLQgdbe8c74j5xSPQVthPDDXmnRaW1fZXQC",
  "key1": "2QfV8h4nMksgYnRQktJiKAZSq5os5tsdKXX5oAkFwBmQApBDqMrmXDAyYFxUu4Cnz8SuFv37M8qCeDpUcMKWjykX",
  "key2": "5FaNZUwNPJSfePWzV8CUyEJh8rNEKZ3Ar3SNJ6JjANQ9PGDXPNjT4wdsWg2CwUoeM5dag3vVSmfrxugfvFWwMnNB",
  "key3": "5TsLGNgsbRp93c2wwSw7tCQBJpNojDF9Uzzh6z1WDdzbS5Aaoiw7btUoDFNPrH89UmikmZpM4htzt8XVuEtE1tRb",
  "key4": "3GNSef2MeMeEHMBFrahHDJDa3mcMbmNQZVUWoBv9aJhTbtuo9Lcmy5zh2Rpt2oxg5iBXUiuo6iCx1jTShE14bo49",
  "key5": "iMWi7dU1c97YNaeAwCiKsJD76iVUdJXyodPpFo5Rg2JrFMCdifg4fRuxoG6c2yqwxyARs7M7FukQ6K5xP6MsFrB",
  "key6": "2a7GckwVWraJMsg68fvEbgsQWU5yU8T3rrEVyrbj5sSATkfzzGJo8ygXLSxVXQVt3BsJyo9w3rDXCgTQdbHuH2ep",
  "key7": "63XKKGQFLMHk9WNcqpVfWQuThS6bTaxtsNHezApLHV7b93UihjK5VsbQnpFBtNhXq5wU9csDBkhmS2FdbiUDL177",
  "key8": "4pomY5rmA2911JhX4kEtLasEGKcvREVrUNE4bRgbbXRyRpikXRyFQTjnzuJfq5mmyWPsm51nFzc9W3YWWGqrsLix",
  "key9": "5mYyKwDWa4Pq2rBLyb1Dd1cPM3SSeoAQupBvixLoZQHTpJs88Lvnd4kaqc6kLHNhw1hd8kDFhW5mEUGoKSpYs5w",
  "key10": "223T4tUNQgW9FsZ2EvQsjxBtRd85arV2a5k2g58tVKXCLkKL3HfAD2hJaZVU6cxFJD2ejQhgkNw46FiFUdEs27rk",
  "key11": "cqMfgqU4aDn7j73fQSeS2HXgV6GFALS49bwpUogmuUKUdtk2j8Nzy2XMU8Vssd6yjz5QiCyQ4VPHKj7aayPK9zo",
  "key12": "4iS3QTRkpdh6AmpaTbTkeCvCQa8pRaoVZB6koKBCvYf7G9DeravcyswuKvdLr3SvcR1iE8vMQJNwnJiLt41Eqrfu",
  "key13": "2wyhbTwSG2SAsjPWK6uxDHF7xbNqgB1ozrB3bbrWRGEEVhFQsV6fm7FKjSMcDaumJ4Y5BKaNuNc6UeEyuqQ8MSrQ",
  "key14": "2Rn9sqVQmFvR4mf6SxVNqSeP9yzqCehN9vn7SQdaWjnVqYvVUd1tC6xzdagDFghQK3X4CtRMkYtwyGzcqRxkC47W",
  "key15": "64MoCf3b8zJLkJH46VZFUXkRzvCiaUwNxqw1jMGTufwH7DBXpVi9QEJJDPXRqFFA7a34zXP37zKt4FHk6Mfmj8iJ",
  "key16": "28EwVV9VcHvwh31d5DSyjXeij8RCWDjE2f5SqNnYWMkZ9AZzRsvTGUYHCo9JVT4LYAPKKsy8wBX235EZtXwW64ui",
  "key17": "25g4tmEXKTWHCuN2dMd38KfZ8MgMFw6B6zqLk63PCmncCvY7SmdhQiZyTwt7djuSkcs4eHuxq1PgbKmQVU7R6Qed",
  "key18": "4Yo1NjJWpp4ZZvqutVRKnGv598uCJWm27tQiogB3o5gdei7Q7VfTE68ckWA2oxjAfPF7FuzuAjZjp5rfGpq6uJbk",
  "key19": "2zqvTfzYRyojcVrCTn7qjw4mysuknpKFTj8hJ6oEGc1hnJsHKhWsMx9n6ZdtCtw7qsAPHsTwvtBjDyAHXB8krZd",
  "key20": "43Q71WmQpSarFSqfEU4v4sWj99gxfDKbDK7sJHKNAdAbzXH4C2oJhXompxkp4fh4acd7eJQuqURJV1tK4R5BSR2W",
  "key21": "58ezqAabZknPPedTqu6ZV2ys9F85ESP7excAPMky4bfepFJbT55F68XxivwtfKj6GyPoyF5F3m5E317k5aHjE8py",
  "key22": "t5vmMPk6Ntpq3ZURCFe8u6NxUGwsx1poVggsGRukd8aD6uvCxRfSaXPyn5aiD7cbrFio1WNXGAAs9Qwozc8n6hW",
  "key23": "2hP9HFA3dbJLyB9eFSkuXcLNv18yVymBGbsAQN2UrkymmekDtrafefDj8iw7wyiPwKsgS5L6eZs2f5XyDvRcE1QC",
  "key24": "mos9pQcbJKiscNrz6ySAaDincyoGUX6gRJoCLk8m5XejSE1YhednnHdxfD5duBSzQBeireA52UXT29bURB64xcD",
  "key25": "514fz2yNBXCp8PkyYvmzfeMC4GsPLXEmuxr4znEitsbwTN1TzAL6uLR4tAqPaXnD5XshHPBYdK8mXJEAZz3iqmpX",
  "key26": "pez7ie5yK5m9zox6azLRE67wgFnQM5513bBwnVHKf5pc5FCF1vJTHxzzox245bnDFrFCmHukrL97P5i1KS3hAha",
  "key27": "3FDad8s9dvB6CZSFw6Q9xs3GzCefRU1Z21sti8Ub5WA5VwAF2fm8GabDfb96q8LQPt1ZeeHmQXUQzWYTtwrUKx1J",
  "key28": "47GhZugWwtLErttYkTaUAXx4ZY21VVYQpFtBgtRXfrcACvo8qKa96sy7VZoHAttCRzHQQekfmr6fpbaSTp45BqVm",
  "key29": "34YKN8KxYoXKGGXU5uAgVr6wLmhDxoxeiShZvsWs31w2bKa1RKRjWCBj3rQmap92dWDeKAPE5M5GoAX6NsshD4r4",
  "key30": "4bUrxcUWyiM8fuv1y5d3S2X2fSAXQtQthAEy1eadMyrXe37k29FBTsVrjjWdyPmdc9CjMHvUw3SHDVjYdr284zEx",
  "key31": "D3T2T9t8nxVMecS3Tv3QZpyzP6FXjvHYyjULvs1zxNLx2aSD52nD2hpBVPs21Rw85BiuCKdtqxHbKpvufgivYqs",
  "key32": "9aqjNonRLKLQG2z3sA7RCF6RtGT87yTC49SjbnFQx5YU6qPkNmT85eajJhBomRgj41w8Ez89J8wG4sh2aGRKthg",
  "key33": "YYGnbyLtKZFtKxVTXDfsHeDzLKh42xt4intc3NobzrUKjsyQ5ha2dLj68TkZ3QhCeowQSYfGgXJdQHMpfEbrZB8",
  "key34": "5rc4VS966FZtH2ujJv14U14nFGhBr3DezAr4oBGFVYt23tPbD9YEjDN13PB36qcM3V4Sb9VwRh9aRT15zMKyeJCh",
  "key35": "5mX6Mjx6scKxHBRWobkBAVYiovF5GmnCBr1QEP9FoNeRRcUTrmfULip8M6mwQeQdiEETQMsdDMY7LYGmaeVegcUL",
  "key36": "Fob93ZNc2GKf2weCeRzFntboqcUWcbL1YaCT4Q1AxgUSxBomf8DRNjNCBV7in2Son214yCscei25HvFa1Ztqxi9",
  "key37": "4FCAhjXNbRRHx3LsHdgTVWoxFJsEmcr7j4rMJXG3kuCQV5rgx9vyKrJ5THW9uBid6vJ2Dr4n6k6MXZwMiaU3tY9D",
  "key38": "4V65WtppERfBy91J4BYMwCXb1RsvwVtJGZUMqtd56MDCMPgKZWUoqYv45KZrJMhJeTsWDyRqMvc5DS14thYZhSEn",
  "key39": "5rVmfTKm2jyc2PZ85TyMan2mwK8WFUsTHwkpkoKnSX6EnLdvH8UWLJN2Sfzx1NshwVe8NX6xNJ6LtXEUb2qMEzn6",
  "key40": "przVnQSkkGRVuxVAVBEu7VmA7WSFYei7figUVoWipdpudex53TTVsn9aKGgw45Wn27tddmTAmkioQeAuCSPrQLj",
  "key41": "4fqxoqYofoYoLixZj5iKuwVQSQjmsoeLqbvGjAXonsXAufmnHhyGi9YLGejD92sK5PjePHvPWaqFLuoaPYn3YYCY",
  "key42": "4abLfNq7uXeTEFLxjkWNBn773shK6DtnSvYTqwnavPqNm9F1FtwrGwFTZuJg4UTWw5tEXtA6cA7kwFnazdyDR4xn"
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
