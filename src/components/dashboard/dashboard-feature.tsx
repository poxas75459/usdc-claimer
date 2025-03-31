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
    "a9D9y7regHTqgggDbvYpm5keDcFMKCCV7UD6bL1bkLauBwNu3RXd6d8wkJBDBHBiSohLazKEz6GA71t5xTTkbKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tm2gS6NjcpiBQ7tp6AiwAd2LCVa5DmdfPT55E4ifyRvDvTTbRBUf2u9EsFrJ3DWzTXyDZfAuwAEHZS9vappkHmQ",
  "key1": "2u7ZRzUSW7Fb1GPJfKuMMhomsxNaRNktvfNBmVfzvZL9N5TS947KZW1JaUPYkvaWFbY9VW9ikaHAYXLBLKwQK98y",
  "key2": "4KCBPLt4FArnhgW6Gc71yHGUFxjSvmPA7TmMoj83BRGvqVVzYbRbexCaz4HM42m3R45NK14NaWUToVxaHBVqDppD",
  "key3": "4cWMvmEM9jPPJPk7A5UxnUApEruaGMtPhn8ZjsuGGwPA1t5euoVdHVqM3CtYEguWMsvXaWHLRkmwRxkksQHu4xwA",
  "key4": "3ARQ1Ef9oRFrmLfkxrDFjxmYYVWQJErneNhJwqHb1PJFDaFxUD6vjibrnnZrabHCw28hUNBiuSD3UCXAa2CnpEvS",
  "key5": "5dfnG4bmQxK7Lm2iMyrBHEERpPh6VxMTq7t1zBXNg1Sq7JJPrYtQD3fnuZGM2uTvzCGC1ZcudqUYZgP4wktiwSRk",
  "key6": "nYQjy3K2mE6Ef49YzY27ZZBQm5xfb1Sg4gry3y8Z4B7ULeNy4gUhHEzdAYaSQu3Hwtsh49K1YwYhMaETWZJftUg",
  "key7": "C6fz4Hm7hNdgrKa49SNnCNK5b6b5N2LdgZKj9z2jSxdrFA7tA3B7P3Hde6KA3pm1uRiJMLwxjNo5uxNncsYPnSx",
  "key8": "xYAb55XGMWSt8hfBNDsbEYioMZJQEDmZJsBBS6cCrTHnZJE7PYq67VpfDQGvf8ufgRZiPfN5bAAC3wg65YBmZcF",
  "key9": "4eFtnAKXfbJjKNszBtBP3JithdUJwnHLGBkfC2MhpmXzBAr6qavKZXtkta2gnkLYAah2Rm8tqR5wA6dpKy4xpZfm",
  "key10": "oAAJm9bi9w5K4TirEbtdt6YkVYJHq1ALPQfVecZBZbYHhoNVj9oLtKkp7H9gbYYUyBbNBPaZAnrNpuqxeboWRBp",
  "key11": "2eBv7uAX9xoik8UzYd8z5gxWJLCTgpx4u3YVuYCJ5TgDMs1faGUfzkrbRZyceFt8XrHhmu6pbbXfWaJvGBTDjBHT",
  "key12": "4RswjLb85RLzNfahFa8qicu2NtnYkV9Z9cXiFu4v2fVFFGMxLkfrzXurQBVupX1okk3fKLBqpzZXZp5eViZa3xb4",
  "key13": "2FdwrZBQXWoxsTWJ4biAtM6ndh9Eh8qXdVQafxUEZ6XswsjSLgJ8rFgDSnqoSXbKMEomeHCWh9JU5DD6LW34w1Rb",
  "key14": "5GYYeLdScmfaWpFgXehyRudvWyZ1GWYhUFnu45R3DdPrgQrxUwpWJwwoDtPsLzSVZvR6xmhnP43Tanq8nXa2D4uy",
  "key15": "3SCwVAPsV1q3nFYje7bDP6dtZHtpArbuNuAgBi15fk8yFSZdYHCLxeMquhbMG6qPqSasRXhuzPjuM2NAF3Dtk9Fd",
  "key16": "fzfHaY9ndtYjmzKPbmWh8WkbFwayrjvtWv5qRFNanJjGuv3e9RADB7zV6CGnXi82hhXVaR52XYMbzt94JsWNE1N",
  "key17": "44Tit8DFu85DNqTMtiT9yJrh74e2P3L68LSi6e12JV6feGNPGNbMvCruDHYk9FeG1UGZ8i1KbdberpUPYqXKKq1w",
  "key18": "2rEGbTsEmsgbh5wMQu1TmCxTrqDXdcNh6nLRknQWiCf2K6GURTDov1kXL4eVhkcukSyBFupgk7nevTNLbDbhmH76",
  "key19": "qVNywsJHxT2B1hWoi47KJgj1P64sNtXzNtQDb9KwzAWrYiTqGixQsfmehSB4cNmz9c1PrbWmVnfMNyrabK56Fuq",
  "key20": "22thzPNSYFTqxMRXviWrDvnYA9AoitewNMp5cezG2FxZgoKh1NYWVReEhyet1osiCLvQb32AcYyrwf4CCtK4iK8b",
  "key21": "3xDfkJmKLbxqDiYoWHDyc5CHnQEAqMK5h4FcAEBTW3ZbqngDHbJ18cWv2e6MqQFCFmNvCpwittwqLRwbZMC2Hq4F",
  "key22": "4eHHQYTUHmjGj6xkLyXgNJHkAjouskk9umuSP6p3Nou46B4bHEXLm81gL89aoyHMXLZ139WgbiuDBsDtevE8jwhJ",
  "key23": "421SF4Jtr4c9q8qLrmHBDM25MGupmzE6DKrWncywFUhbjVa2EFQofoL8uwfMRFfCwH5ozJqMXxWxXN13Tz9ExN2h",
  "key24": "pnrGVZbvMRm8254w9jGm5tVBSwWBG9howpxDEiCTNUjk2RU2Ak2pZ6X2xPAF1S5ufsmHkczx3Jzu5kTsWkYCKon",
  "key25": "5fKarYScoNfREg9h4ceQVQKjNzXvbdWfCXyQAKkd3NEFSevpxjVdu3vKFQMpLrFrFLR1w8djUUDYdBVot1t1wKh8",
  "key26": "54qSxAPWMc1GMvtFh9qiTqFwDfQZB7X4f9XwzJoPx1gDAgd6MavUgmimkv51YEc4r6BVmVW22Q4rYNGUoXABGH3n",
  "key27": "3EqES67BnbQCyc8pGSa5JXM13NpBhm8sqFb1GWW68rbmYxH64B3uhaR9aoRAWDaMphLoDfaz9CbSBGiUbiBQ4bc1",
  "key28": "53NcXLoGskFebsxRHisDCDZoYzStBNF8YktfRVToLFTML2kRsjX6U5VCev1wFNisTFKzjQABgaGJ2YtEsKqQxoSQ",
  "key29": "37ho8JPPAeUiTAGqdnyzvTZjegb2ygERAc7RDkWnXQS6RWnaDqB9ZfbZnt9poZ55oKGbf7U6iBnhMgxS7tU5AGsi",
  "key30": "5Y7gi8Xf53S3qzEqgZcSSU5NddnrkLFqhN431f2A2ssik8dS4GQLLGxuwWH1moMgskwJeB29pTJupm5D7Ks5L3iA",
  "key31": "5XWHyCFyDPdnvs8SyWwsYbkWPdbL6puhUtADPukXd6q5ZTWMVgwX6WwZp1HWwH2q3NitKFTacTGHHJfh2VNkDUbf",
  "key32": "5LvFgcCosvMzusjmHbR9edSRzQ8Dyr1fqmQm3iGoED8Yi9n9GJoRqHyG5FDmLHrGcJzWqiVQvVh34xbNRcvGvYjU",
  "key33": "4NKqwY1oS7W5fZRERc21H34WPzpr17pBYSb99bZ3hDS47QBxVRxM4tgyG3woevjvg5r5vMb8DdX76UT7F8ujrq1z",
  "key34": "2wEU4vEBRYY1yWBnCvXwrQ7JsrkpFczxX4dnbUBi9MWXWwXGUxWMFy8AyCnb81HUFDZoyH5yssJxFAnXNwt7pDVU",
  "key35": "4HbHeoGeLHrat6M6AUC5DqyLVnGdUvm5P7wRViVHtuz8FFgaeNK29jhYMwQA57F52ryZkVkw4ARfZWfNfVYiKDAA",
  "key36": "4rhtdfKZ2NEGowNGzMW2Eyiezfk7dGJNoi3WokzrJtBMLGCZNFWzDiwiM8G7AnGyo5eUmGR8dhw5YPYprsN57xyw",
  "key37": "3LW4Znws9vXuxnmhmscf6WZfDozHQjzPRutMjZBnSUKJfg4LdH9U4UzZmxRUXPEnV8XGNLh5chQPydbyuUf7umZL",
  "key38": "2QXnADpzjoGj8a5M794PXCWxhynLYqHAWDDke24Wox3sY45bMrFzwJLLFc5cpByZw8hVSY2WHqT2emfZsrHqXR7Q",
  "key39": "3ju2RszJBC6nvth6qgz9d8SmhvMqcCHhekKB7c8P7yfyD85vFAPVaUPg28qb59izbCpBtVMWF9V6mb97CsyZvN8n",
  "key40": "M3bFDsu2Y7ygEk63MR8kHmP3TxueJKUzkiQ4SCR1h12hpsJ4mHygzs9nD7XJPkX1u8EAc7Zqm4tzBTkBq5aEBtg",
  "key41": "54DfqjnRejTseJEZ72MRDtGk6i1TmNZsCaD7nqKvZ7dDt3P8L8nVcYZcgqegnpANTFB6BzZ3KyKcbDJ15hWtq5HV"
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
