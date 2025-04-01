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
    "2zLxH5b3TKnUfBF8rYMdsUbtUGB9xehPXSspD4oiA823m2AP9koSLkTatJNcfne8dpBHsnGo5y1Gyak8x78uZ8EK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Thbj5PCUbttxuurp9BbJVe4dPpY5PkARuZfMn2TevPGxrg2XoMFa3riz22rCQdbAArVNqWEay126zKhDaBGGzx",
  "key1": "VFA9yRBrt8bZE2FQh7e7wbDcJMdA451rP23bVce4guvGrZzPS8VxKxc7LZuZVA6DMtEMXskCqNamwudifximxgZ",
  "key2": "3DnbXseEarJJXjq17JZNcuX2qHZybmr6RKu4yyDMGHPJ9MFGGjW6E7AV9J6ELL97yvmEXo5pzG5Qfg6vugw6QojG",
  "key3": "sw79aaAr96DTTzSGtQPZVUYi1eCNcGTCvVarcKswtaEaXpHf6NMQPeZ5b7tb3DfDHRhbd9mDstzXvf6RVFTYGef",
  "key4": "4bq3ZiTkqMKvXagUvv3ooJdcV3ddAynZxEKbDAr8JeidDjAaP34FFWmcmaE8S9yd85EfGjuqsmTxHQdDm1HNqKAu",
  "key5": "4EEq6Q2rKe2UXdZR4ZBXnXX9yD2aopPu3MMHrT8NootUJjpR8fai65ZCtiZKN1tH5JwuTkavvHPcH62k1TqKYdVv",
  "key6": "2G8o6jEF8FzV49CeKEEyaAeHJymAR4JL5CrRYRQjSkiNZbEsCz864Wwpkkuhdc3YCvSg9pqC15BWy3Ht5TzkGV9q",
  "key7": "59VuFpnKsqBrN24Yp7vRMWfwMEK1ndp2AtviPbY9JEYbsynExrj1jqzYb1ENmjFNs62G5fLR7udBw9anbSP1mD5n",
  "key8": "5hNXhptJshySyH3DrwC4kaW9ef4AaMtT4i8FmsJRLrCziB9uBVQpbST1f5X4yYnELm7sJ6DKyRz2w79rL29HRvsJ",
  "key9": "5wuaa656iZMW9DdwaJq7VY7Jz8tgMfzKqLo4DqXFL5fQNG7QHBUdgttSXrKfXb64T9j7fajDtmBH6s4gJFuiKYLt",
  "key10": "2BaYCcTqrMpmeKbgq2qxQrH7BQQvXp61gsxfMpq6STFkoAKft4hdanYLkmNZqkD2nALnHSmHTApK14WFGnH3YDoY",
  "key11": "4AdSduqYqR6t72q36VXuCUyUkMiWo95hD9CDCWpsFGk1MJ93wL5v6samYcYy9enDa9CqmzuSx7eKg1qJus8zgDw4",
  "key12": "4vvMPLAVEV6pdnNZe6UndT72AqGzWLj5HyVdKSPw7ZhCeVzFmgSpcQSq6fcdDCiq9aCxsPaYko5SLmm8KgxTW7gu",
  "key13": "3v9Nu6YwpAcaEdb6zqzsBjSSYCL9QnkRk7xoJbM3VQcnMjrmYSJH9zmCy21gsR4pftm5jAMy27R4bS9dLdZ4tERa",
  "key14": "35yJmNmExstk31TF1NCfWAMphd11Gk1kAvGSE1iVsPxemmnzAQ1KDHV9f5f3mUysFs8Qp46m1qASn3AefJp5coY5",
  "key15": "65St6CMujZ7tRbnPQDipoSfg1FwuVHpDvixa85mttozGoVFA4G7zUdG76GSUMGVjJgc65WgC5EsmGox5ssToVYVM",
  "key16": "5fvm2cU6gDzVVA15WLfwJWncsCP1vPuy6kDnX5Kmgo4qwBPBwbLoniVrp2pbfTJeRFifkeSVwdNLVEYyBC8w2d5Q",
  "key17": "4KcCt9Wk4fxwzv7eMt469i7KsCRXi8bgePcSybYtkLgRgY2rCZz3KuV89zoZ8JTn9gmAPfPHRSTp7k7YkauH9uze",
  "key18": "3KyVmnZp5x3UrqTtbJ73wUgu8xtgBof94ssHmNjSdhPz8azZLFQHqaVk4t651h8cyHVKMFf4knZibCNmrQsm5gYo",
  "key19": "4cWXEHAPwan2YXVU18ASPR1jqDKQBKMw5Z91saWEAJXzq57bgkcrWWHjFboaoFJX1W9rAFdrg4JG8rdVct6qvLst",
  "key20": "2Cn6omk9RSRmZMreMycPGBS4btmzAXYZW9iezkhTxqGXtAGUayxuMgcT9EFVBGTe5UcZygCa7KqrTeJCkNFcQ5N6",
  "key21": "2qDUWCiTSUtZQBRPvAi8MMY2k7AfrYZH6HvyWTHDtUULyCV884WE5LohhtLiayhNnsL9JMjSm9zX4XrrqS7ihPr5",
  "key22": "35cbrwda521otWKdw2XcXYV829arpmK2ZfbKEwwyXTQesdaRUc4rm8kwytKba8V5CBrv94XLfvqrvJ1qxBZ7JSep",
  "key23": "27VAZPEm6ZyudmRbjkQW3mWRA3YTHUKVTDQSvFrhvNcY1KuXHBGYZcTf5QhLUWYjco57HAcX63KXBWa2MPuHrWNw",
  "key24": "3zjYBPqiwyGtmnrjnhoZRcLPuEVWtpey2iLefiNY5Xx4KyG3ayvAgPKRuxPzJcy75dPTogDn7DYZi5tUB3b87GGZ",
  "key25": "3Y3sFebtHrcG4sk6dQGtbDpFZnywtJYuVoCwUgLyHaTEyWjinXWSBKMzDFfUKDgYvRLsMM1yLnHVXw3mLaMbNL2B",
  "key26": "3ooUwJ87K4QRtCQTfzz5oEsvJjaAa4CZFy1fGDiDeJojSkSyab7ZUrdtZm1mAtsiscW8H1Z6xHeSb3WEu2uXMipL",
  "key27": "4hVnBJeohr5xktW1wW6KGhDHxbbLDYwtdeDJisxWGce5yZZBVHtXf1mHUW3WNYtkBzHnb136JXF9oKXLohJbsVJj",
  "key28": "4pp6DgAoTaTb2a8utojt3WWsrGCu4nNDYodBBPvsMXdGavEdu5eX2Y8jXjWghcjzN7A1J3JY6hpqQ7ekGjEWyf92",
  "key29": "3uMcqEZC1sYm4j6WmfL6byTXMFaHYHmmV4HizdqiibuuGCf1qBBaoi3Gzf68wzC93cb3bqKDXPdYGsiRUvzZaov5",
  "key30": "wRcEuw34M46fe6HTQHrMDncax5mz5obuLd6i9i9LUWgVvENf5AL9dc8oEgVrztnHXNWYuJfvS5f6bxp2EHiWB7H",
  "key31": "27EdPkU7yDRCDpD2apapNbRKxNsFYC2reCRfssi8c4jfWQAGjQcs37htu1XNSpvgxh4X1Y3aTjU88LJUe2eBLfFX",
  "key32": "5f85uGrZsUsiocMu5gZtVjnepAsViurNYDdBF6oz1XVnL5A9DwUwaPCKzNpFrh6dgNcpB52CeFowDp6kkyV2bb3U",
  "key33": "4RdwM7NzxjNCGhFDDE2bJ1aakp57A2dZC6wZDDMmUKYvfgFqbcsK3b9gGUJuKcZ1m62Bv3icCXNshpZr1o2U694i",
  "key34": "DPmQc1ajnynjrao7GVWnaLjkg5vd1nXMmqnySbraxC7zBzr16kTbsCMF5GmjFsafzzuJxFU9Xv1KMgR8GufYMBX"
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
