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
    "qvmmMMfj6P5dkjqVa3NiYBzAvrmmhVSVEkHYteGbKBycADEYhJBF5B4XMetgFddptoNv1JALqqoNU512izAhfde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ra8kZeQR3u1BZuSjpmdmdii5rrJwWJ8ZhATczk3SiypLqTNCJjUam5JDWviZqbFEgwQrpN6DBSbA1gTuYkHENxb",
  "key1": "4Hckr5TWaM6Dg9Wo3A3VY8uqqub2uQYr4pNLMp6wRevYFdsuceXg4yeJzJCe3F6MJ5WjBWMoiA593o4GwCWHCJ9S",
  "key2": "93XHk9Ps545yw6a2KqWFp5TMQWC5kfgN9e1Kdek74CJ5S29qAnLRDoDkvsfCSdNjE2kBtQQJYgYfpx23PvK7byo",
  "key3": "58NrHJautsGND5F5MgbkvDQQRjzrWU8dpGkA41nxEezGH8cGHbVWSh1dMgQ7axFg7WS75U2zzSDoK2B7Ke3ghcea",
  "key4": "2FXSrNy4CQV3ogjCtik9oFWhYYihy1YsgyXQzSq3RqieqBJNSuCRjadX9wtKbAkWYSjUXnwBaV6RnzVF7uxpTFms",
  "key5": "9bHBmjqJfyzMjAsozJAKbk3P5Jxr3oAwRrES9K5M2fXb7WZyPP16r2C1zpMDEqkxH7FZb7hSt7uLPrWYoaACCjk",
  "key6": "4SjBtDzjfMmHPbKddkzcasy43k3JgHQzfQcJh2cabyGiptviSKuDdQtFccgzzLFZRTUptjKZAYtaN59KpjaNQGt1",
  "key7": "27PmWpBsAUc8z7j6citjwBbkydD6zaUP5WWgnsknGL5CfmgkHY7wQUgwn5KfgeaHdyK3rDcuMDi5KFKZRPkETYuZ",
  "key8": "451K2pFHnz2z1QygtAa7MWmRS6Gz4Yj7QZMskHJTbkoSmnLX7rT2V5pvbU3pUsccD4wExUbWooBjSvfvkHSpTFXi",
  "key9": "33BUcL8ck1XVwexWpb8KPLXpXsaiRE5ZPc3eNS6TXgvMfW7cPQLgfdXyZSC6W8UanNdXFaW8TjubNfSFUcMpqTCw",
  "key10": "4REeiJjedYzsupVdr4zLnEUERZWyNSYSAJv7nY4m5SnbzQFVW2sE5coo7VvQ62LNFGb8GgTknzCgLqGQpchws2gm",
  "key11": "4Ci53RwYNChrTGd2113rTjRa6fYBpS7fJqAoQjUEFnNNLmvXQNBxaxwZHv7BK5iLvuQY7VPgDSi1YeSzTPNcYRv1",
  "key12": "53LogCEAZ5q3uoKyfDVKNWBQc4KNFpNCB28o6bPSMSN9kb2SVx4HrcbR4K9Nn6Ri3i3GhP1nVcxYKtmSwgUjFXVZ",
  "key13": "rA9FUKTzWsdQ8CdnK8UBmFJsnDKuYCDPD9GgKvUxgDXD4z3vT6PXd5S28Pqziy9dHzm97eNWCTyaPKrrJg6Tynx",
  "key14": "3N6GbzzKtBMs1oDvzPR4X9XL1NnkgEMMGuvqX3Q4i7q4sfNi68oYcih3NMeH4LmUx6x9zoQ1K1AiaVwTqwFm29C4",
  "key15": "53knEZfLhfmtTJixpWXB7xhJoyvYj9vED7DAvCe2e57yiK8cAuuCLXqH9opyUA8E3TKEPfMb3498XiSEsYTPozzh",
  "key16": "443SREFKUgMCRsRkBEByxUxyBC2LWWo9AkYHKXnomSQCFfacpTNYeuKVh9EWEbRn3BnAv7RYVVMS88n1bNxmcCqZ",
  "key17": "4dYUsSTd6PG975NEX1NcPkE9wRcrYwZPCH7zWFC51Qe7Pughdamdb9WXue7UtajNRzq9Kr95wYuKSFaL7ziFbzKQ",
  "key18": "2GKd2xGHnbQfNNtQM2Dwv8y769v2kCeKThzreX3ZjVezScu1SQFwffuZ1sbk3fwZrBiwmL31UDVV8zhcvipDwGGs",
  "key19": "5B1DTES7nV1q1j3F687cuEBqTToZmzCLL97fCwyQDnD9JwiGbzbAt4drF3SUiAbH2DWrjXPHgPbRaZ8Mqm4w5hNo",
  "key20": "2YmrG4FhPYwKpKaxykXQ2JRFSCB1j1uUyGRYdj8BZiKKTqPP5KnYLuuUfUD2M2FYQjkRRGoFHJ6TXj7UZdZb5fpD",
  "key21": "byq6kisVqeLrbMj5uBYdVyzakGVthxhUs41MHo2fJ58A89FwgE6uNS581Rw8nGgcUP2Gti666bn8KQWG4m6Kp9e",
  "key22": "5kMpBDdz4xes7gtJCFn4p8qLvEXujQciSfzyCZGB4V6Lfju3VZTB1w8NHfZrqUW653zLaRuAGPs33cLARBU1S6f3",
  "key23": "5aFaM2EwPueZ475JfGUhH4iZu79Sm5VEQUZJUeveSvb1fuqQoiAAyVcAXwvMVLYieGnYoXWj1Sg9yiSw3UZi8hwG",
  "key24": "5zJXNijc3gEWjrr3AFqXjqgL6LnyRWtfB9WXoMuoSWUR5TZ6asrikkGbvofwzxCghMVfQ2WAJHcQsEAnpFxyvZpc",
  "key25": "3y66edQ84Yfx1doYaLEgF3A5ZBt8G8WMG9LwSa6kixfzYxsJ55Uby5xFTtm3EqqhuvanUdrBKmvg7Cn7yCquicJR",
  "key26": "51JxvU5cTM7bBtCnYq9XPLGZZS3GRF2hbbWTmKbdeABzh73DqkNi2wSyT5PhPGcvjQYTWbu3YgiBidmQWSJL5WdJ",
  "key27": "3HLXyU2Mm9qvgC7FPJ3yRXyEMm7T5P4cqFCu8btKNFBFvQmHJajtQaoVPPy8gXDRYJ2Mo5Ab9fYD2dbXorVD8UaC",
  "key28": "aMJdgFfZr3hUHeMsFrK7yueuCye4ndCZWcMfuR7Beh6F2AA8v4wZTu9YaE7guohxUJyNGdrPfqwwP3MGSwN4eNj",
  "key29": "46sHrwovNp2ypiSh6t13gyBvMSmNSK4Nt34PtuPQsC4s3yPaFmEAxy6vUTUxjsv4njCKerzwmnpAEjFtPtixgZTV",
  "key30": "3B5f55ccxKZpZEZeNpQPpjjeCw2S8eeqTV3zP7iAvkczHaEZmqZH6KvQATpsnu2i6ijBqXu93SfvknvgnhYjGSs2",
  "key31": "4QEr8kLXMPVduf3ie3EsmTB4iQsBMvo6PdFb81xZ1VB4KYHLqUud2PkXy3tCmXVVKNCwdVtwodENYibMukpx2VT2",
  "key32": "58adrLQg59N3SJc5TvEC32twf2KWqnYc8qh5s1izm1p59vmjEN5aA7K48a6iTsskVA2QA62RcjXGh6odhnQYUPNq",
  "key33": "5woAfquHgQQeQtaXdbEtvgRP8K2ySfEGKDNM5dLMMTh8bE1weidE81Po2CuHZ541V1xaYKQE5tAJkiasWX63a8ba",
  "key34": "5mV7WTgNvguL37Eh962JZqjZY7MCxtoLYPKKe2a7N64jLPiyDdirurgbT2dzovhEnAjysgybEHy6XGbuHHQG44ba",
  "key35": "21dNqpjBu4rY4docAbjzsERn9C8KdXAAxB9FArntbxPRWmKU8FZcVBQoM7dqY818D1vvprfk25YFRotq4qCxWCna",
  "key36": "5Unem927CVUbEjz3mWk1VC3aQSVCZz1uP2zfS9CvxQH3nkF8E8FgRp8Bb5mycA18x5WKot56W26m2jNh3QPJwKa"
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
