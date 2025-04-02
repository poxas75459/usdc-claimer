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
    "jyCk143gLcFXmiJFxTECRmrtuu6BfGqmePsebY6pMi672eimbggXaQ2Fm8hh2MJQX6oVgQQjpTfes585W9xdnwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fAmFWKCqJ57Zh2KHdMdfMtA2Qmjgn8oaqXifNzpnmESktadpn1g4NSQr6kX26NPQstNVomypDy7YECBrnR6cEhM",
  "key1": "3ypacATfajgyGeH3rVPTWfCDNiovGBF8qLxD6PHzFsm2p7sDHN97FQPHMiT5tCAgwCXNixemkpUG2PMLmRSmLEgy",
  "key2": "oLNnwE7JW5tcz76hazSxRsz1ZG38QVBxqa6vFc5q5qmSyn8WhKKB4buN9R25AAo29KkLAqPBfHr23RPS2ZfZpmt",
  "key3": "W7H5oTzsgXV2DtxLnbtcc4W5UvjvSgi5QzxkpW2xgr59A6xibqvq9xBR8Udj5LT3Wp92K6qvYT4e4QgfDwQNgfZ",
  "key4": "yr3BF9n7EaeRRn3dHTJwKw5BEqckbsRP4ZALHVhUAxhyToADPSY1FLvqkpU3yC6EkaQkmPbHwaAa95BzKUhZN3A",
  "key5": "29qtSb18nLyjDhRzwUhFdDY1TzqUJmiBWfv2NrjbR7Deskg87ZD1dR6bXh4zFGxX26YkMMkNyDvvrUh6hFGThaTD",
  "key6": "5Ej2QowzpG4YSs8VwmEqGwJ5XhMMn89NyzUSFujFBRZJFNQFDaR8o3GKUEQq4dhrbhoGzj7SegyaXdJfjoJJFqN9",
  "key7": "641Wa7PYNAastUMfuf4YAxCSjetVQ4CLQu5FTQfFMoBamH6iWUrUMqHRE6wXdPGbztjjNLUDj3PaqPtxG2ht5iRm",
  "key8": "64nv9UqZdLUYeYnZFCWQHTjkPJAeMdssFeg5k588k8EC5JzRwVFSw9UfFfn8UrdctcNCefvuncB5LKHmgSVKqre1",
  "key9": "537D3yZVEHUJQYM3EtaVBLokzkfbqqjr4LHS8mfC5SK99zibEbGVaTBRoPrwmbZ5AZD8RWw6kAapAY4ZpRWkcjNP",
  "key10": "4pABo2XBVdQdyHd7LVhUJwuK2nJvNqYfBBEY6D59jgAEbuAYcYBjFeR9APZGZYvLts1KsbDWyazX4XovC4Z92hCS",
  "key11": "5gvFrZmRUxDWrnbK5c9sGVBU3y5bHMycitv4BZbJs5uMWWKgto2gpZMbBFyMB6chwBWnxiDhtAPRujWxC18N5Abh",
  "key12": "2hfjERycvA5bqf6AwKjoe5HPsQirnEo9KUwtsnjt3Vd72tmXBS2iTA8aqHMog9hSC7DMDyqmbQCpyLt2Cup3THuL",
  "key13": "5HvCwHqk41twyWxZRaFezJFgPndxGXprM26TgfDmri11WjJhhoL8TKGknoD86tqxkvxzQsvBCi8hq6CQcuWTEEeU",
  "key14": "4QaY8TFHdHX3y4udfsnDwVmubMWYdm5pB7LPPpThW7AyuZayDMFZf5srVa3NgFLaMa5akeETGmgmwxeNnmp4VE6r",
  "key15": "NSkq9Jo9RwciVcbsJjQAAjdztMwXYuHZScQCEA9J8gXtM9wqLYwX8x6ynYDbcW2F637gx24Yj4R7FkoF5x5iEhE",
  "key16": "3HQtjxaiimyfjDqAenGDds3Ar7NhMesK3NJcHRT12vFNPavdsYxok4U7DLsCcphSXqxw7mooRCLK4EPeuq3k1rbw",
  "key17": "3djCBuvnLWyspEmNHVsYMi8nELQHXY1VAv8VVYssNfEaJWwph9qMMahK5294Y6LqSjg2TY7ujD62RUobG4xZXRNT",
  "key18": "3v1vmKfJEkPDXkqb9T9aFWXpajEEjZgT64GNJzERh4beYhZGztHRJ5qrS4Tsy4fo7TdfGpEsGxkqAVLzcoyNN7HM",
  "key19": "2EWUTM6qFxZge8zfvvyUapMcyo6d7h54RSAWZLUQ2cbjRMxbHN2UpWC81hYeazfg4nsVeKYjscwHunLaAQVaHbZ8",
  "key20": "4GNsCbnUDRvTfdifCKkGB1Rus5M9Mqcvj4PeuBVCqJ3TY1rgD67QCE16TsMi45GYxrqXgXPS1G1vbQSThwvfw2eo",
  "key21": "35hWPRFbjyLKGAFyzRUePR4K9wYbDuaBHBpuA71F2TwmHr539bzm8hwhZnBVaiXSV5zFsM326HbEM8Q2ikxUztqu",
  "key22": "2njJ7aZGvG3MEHEtQZp8HdmJ83rtRD8xbpeC9k8usZtZuWNzS23EsH3HLh9Zj1pJRT2aF3gcEsMZRKMGSCnhZ1qf",
  "key23": "49WPFt2W99STGpuKr2zscfiLKhBZ1s8GKPhcrHeRXzm9hkax9fdogJbmjCkPyVhDX9MY9JCGUCAYAykwqLMZyHNZ",
  "key24": "5zGUPfzMhGe6FKZavwBPkAgVWrv5PCVqpy3PFYgyeqrweZpGFnjdyTnc2XVmaesMvi6zEkpML8NhU6JM1C1a5xHT",
  "key25": "4aDHiLSo6jZL8dxGxW2M9GNd6Y7xP8EgdxUmfK4hwDFeMJvKkNUs1FbsmBYomZQD1qrnh75CEDjBXbSU4MKGjFHe",
  "key26": "gX8a5xQYo9qaAh9EqPoNDWfkzaNjSZJkCb7Z2Ua7Bcpwg2sXR6QR2c8Z8Q6SP79gvHnFEWEaCfaoDESeyDsoq7X",
  "key27": "5quX2hu3e5afaFYHvcyNiKRmQX7FjeDbuwmr6mPGg5UruXEwtko59FuAcm29X1AZWUGxgnbVpTscTnudxNDdbZEd",
  "key28": "66qc1qu8MvZsiLtmy7trfSP6vdjvCHA6FQAjPo2buaZT6ixxDYTX8ntELdoVssR8BhtS6t6YC3imq3A1b6ic1PDa",
  "key29": "LHsySC6dozip62oW42amSvzQnHQnv2pCNJLS4LLbCdoaLRWa8RxF1m3PtESPAHygPVBfG6nrCSrVVqGzYgbSKno",
  "key30": "2Pt7XeUEWmk2j2DyUva4fxCDiqgviJv1t5RuYKeQCJzU1zPAcjkbeZp7cLqweK54tPr4bcowa6fZ9nazBDCMgPZi",
  "key31": "4foinXEL7iAmaB1q2djf92DiPPdPQ9rjsK55CPWtpyxNLknEbJQKENWBJc3wiXvarmnjUJCvmcm8dxbtieYmeGqR",
  "key32": "4D6tXx5o24W4HLwmbZrTnixnAsX3L3voMLQM8UHrfUKBoYvi5faRLUbJnkUjZLa1SK9jPfpgm69NPohxhwDu5rRW",
  "key33": "65Mvfts7ifduDsbg93W7NLsx66VDGoMfr7Azji7U2ZfcskXXnpaFmkNcYD4ptVBcN27rS4yZ8dGqYa5f6yUXNs2G",
  "key34": "3YU4CRKc2vp6KQbdcypdfQMjaDgGdz5CeqRAbnCVuipGpUvoXuo39kET5XGo7TiuGpo8yXg9yejVrEhR2YAoDWHD",
  "key35": "56gj2ejZzhgsQ9cxdirSFcG4nhEDMqbJMKdumjdr9VGmDd3jinhRkhfq4rR1gorKbEpsoaHMwg22iogavfoJKaS3",
  "key36": "4XSrcpEQzk6KqY2XWquDL4Qhek8t1hdSjMSsf3RVa7WM9M7qFdupBHrm8LzxLY3ZNo9zeDrVcbrccuoR4LTzUoWW",
  "key37": "JUNqKxkJtXQvFkkPpxufqp2Xj4r1ozHTv9iQH8QtmGdGSKKy2Xh3QUth733wY2yvrTt8MXsaXrLyBWhFnvuz4cN",
  "key38": "4hCXM6yrN9UPWNU7UhS9cjMnWLsQnQh8f4RtNYwwHi9C5efwyEFNfNHHzumsuRygvnx6S5H6YWrWiyqAdQ5uYpXR",
  "key39": "3pJewyVqWHu9DtQHuN5HYBiqFQierkHefgkAyy3nHTZn6NyN2jMcd6yYRBaLxiqL5ZPnbbnpCE6hMaawRYExxj3A",
  "key40": "utZDSEDJBtr9psGPGtdwoZrs7q1PvpVdwmMWBZP2eTJ6ikFYLPmZFq9ENtA2SKsKLcs4pB63PSqdU9tjC2Jrteh",
  "key41": "3i9473m8yVjRAscrA1pEo3ePPMn9s33WDRkkfLwZtL5Rwm6xHa2LBt9gJF4XKUKg8GgL3LFvxZvbc3Qs55fet9vu",
  "key42": "2SkXDGC8uBp5oRt6B3Ai9NK2TsvCoUeA31HE2S2Lix6noRxfAEVn6DGX2ixpuV22241u1JZkUCZhpVCjCnZZW2Yp",
  "key43": "diQ2t77KySyQ8o6ZHvhpbEiZyPMJNpGrQ4f3dAjkXQY8x8aeVQnWeqAwHWqugupMWZfKzWw4PFHLTRe8Eeh4cfp",
  "key44": "42c7PqW2yWjXw6UA2DfCRKkvy6i8KjicL6GnVArJ1Y9SEac9rRc91XG4p7ZdYZwAPuUscpj6yLEbnXKV1H4HxAZY",
  "key45": "QUp5eLa6GUWPrGFjLfyfFznEaKQSQ2kEZfjHLs9o46JZd2z3QoPqpyAHJrydK8LUchSZo9eTmhHqUqiQ6CoWkPk"
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
