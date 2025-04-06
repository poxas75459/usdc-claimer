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
    "4WgieHjYAQrMn9FLEjWQmrUCY27nHDW7iUvmr45Cyxaw1v6Gy1qL38ze2kzyNsyg85oWcyUk6jH9ttktzsbKWpoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WiizG1XhLVftivAqovSRRhnc9oGVn56aRq5DKcL9j8RmkPDHLauJvKtCadCRwC6yeAQpMh6NQ85rocFJm7za9A9",
  "key1": "5AfoACXAo8bFxoJjMgP47fqPirLwKi1x6uiTS7Ur92AqKwNHdJj21dY4onV9aCmRmHjLLJgtEka8MQTBs3UZeBhg",
  "key2": "3UzLdrauDz5UUjdz6n8UGntT1XVjLkAiyPLpDNNX7KxEstLw89fJP87VMqqagq1rmdn6TZavVUc2VEgPZZYupFVS",
  "key3": "3yPQWCNy3jtzHCUFXAZH819Cdme16uvWWfcRJM74E2J8e6KVFvpMDtQhz9VHmTtFg4Y4HRns5tpEpBygF45cmezo",
  "key4": "2nXyuMmsFRwBJU4ZFAUyjHBq4M99uqxcVQBeELvfxRX5dn2tRYH359Q1Q6pnsnD99q3AcoiunfmydaHFMUZU5qCy",
  "key5": "2SHxGrWsRB84rQs8DoT6a6vBNhn9mUXuy2dCv4u94tfYAxQkX734nmcujhxvZJ1vCNmshjHskmE7cR9THURWygs7",
  "key6": "vaQDN5gzayrhwht5z5gvKrNqJo65XQDzGfENyaL5qACQn25EGqtxpd5ygbpwgQkLoK4VFvayZVkkZN9nSsFcbZn",
  "key7": "5zhCvphUnqQY8ANvQvVJ4NFJKxVDHFpoCW7ZaSSegkPu6Lts5sXgGSRQfkCLFZucMeFtCDhCZn7Up5Y38PQ4tBNq",
  "key8": "4zKYVvsJd8KjvnEFitbgcHvovtWSHXQgYckJX1fnG6jZGC27XhEue4aWRJWJk1dtuFiqHnRhhMqSVfUmDede4bTR",
  "key9": "LKQqYV1ZMuWfoR17y3QydjmVeMuBQJJtAhB14tmerqdZpdDCy4rbv1cEnn8NrQYhNU1ymRUd2KA6gEmTk4GDqgb",
  "key10": "2JXeJUwwWjA4P3qM3hUv7kWLMsSTTYPwkJ1VvsQmtx459haZZguFbTBuXTU53jvSL1dLRR8Z66oA5skTs3tUQGT5",
  "key11": "56u9wx9DHFNqmouKn58fkNQhsh16vSAeQU3finLtizMtksD3YdXbWrL7r8t9tTgb7Ayw36PGffZJEDm2qo3hJNeR",
  "key12": "2XpUjLBc6eDs4Hv1XzFWCy5sa3fVs4ig48vkzd2fq1YQjkEGjhrrA8HaMwCfvqd97xWgq8v6AmJvbk3ZeNK39EzD",
  "key13": "42VyqCyh76kxEZpdXedKqHbNacdcBHZXqN4gmEJX3E4qk4aHaLfXEv4QL3DYv1sAdQu3VRnCN4JwA9vUSxWaprrf",
  "key14": "3CqvThHQxqG2wqftCAqJgzD3STJ5JnKNYLkJkvL8DKy3uoYdwDmvbeBaSFDnCgwoZt2KQ3RkdLJMwbUSW1DVePhy",
  "key15": "2XhZzjho3XjPBtCdJDEpgw1YXj74PMBe6BqbFy2X68XqzpqB3D4ZeGGGQq86ru6PSMj8E53VCLz5ioXyhLEMUpxv",
  "key16": "5gAE2bDzDB9ATd1sucDjXtrFzSv1poeZUcMSBZcthr8YYdbV8zqgfu8vDCQoFkfN8Hi8ZsaEpVtstqstDyHud8pW",
  "key17": "4Hs1wsEqoc3J9qf3XAwqsyUgK2ib6qZg72kX9F7GURf1SZf2TXU7mwbu4GfxCh78bUbBUbJ5UFHdMFXwFJZ6Q25h",
  "key18": "5fSkMQRUAib4GqqFvVk5piweFWd5ZbLVx17ynGbtXx9gr7zZPyQC2LRPNcbJwecvnuvan5itSXuvqMcHy2n4miwa",
  "key19": "5oWMZzyFypzhmbviYeVwDSDtB9WpHtc6qs5m1SU4KCrp9NLWrRmXMbqMbtAq4EftjH3JvrcoSmeUAjXBhM6Mb8b4",
  "key20": "5crW1t5rySqKWdQNdPnBA3sPXEXcYAkghAjgcjB5MT1Xp6iqHb6mueSjrtFHSSygkV61MmFLWjTCcphTbaAoiPun",
  "key21": "4BWUeQkMox5svz3M3bgP3j5pnqFRJ5BohBZojfJrUhSYh9QiHxcp6rvKyfFMy3mBhXXox8hRBMw3kQf6NS47ziTu",
  "key22": "4hYmoKDudADTYLErLRqEU42oKBubZrfPsEnTNrtNVoD95tSbuErosAQphXjBw3Pai6PynKL5bKg2LAYz1pEnXaTp",
  "key23": "37SBhbZd9BMuKAeWQJxKwDzrVF8iP86nq58265K7B8vYidsRDquSwC6JSNy5JQckVG6AtGSvjzRPF2BTNt9fnVdM",
  "key24": "dxYy2EPWDuNvdANqgR7ztsYowcMZ4j4tQUh3hEoGkrzmJ8BEt3VDzytjomvwDqezyYkm9TV9rvebsUgZA6cfvxU",
  "key25": "2ebbfHuo6dWHkCzT8aP9LxQRV1y8uFXBJ4LzFMfvsAktugPzFKVYSWNkCdxFib9ykJnHLaM9VMC98KEZmqH7urvx",
  "key26": "R6RjWNmbdrt4ftagYrarJbA4HfJfPmikAZfJeHxLgXcHd9QWu998Zyk1iS6K72XyiFFL9ujTchuE7M9C4GDws78",
  "key27": "3dGKpx2CwekJXKLCYctiR7sYvdHhp3H1cEodvnCDnN8JUKwcjtt2raKfuaV5PaSbtrFqkYvMNp4YnzRUPEf2AKW8",
  "key28": "3qhQ339QkSRzMUF9pswsjy69Uy9rsQSKcTQTG6vFwH9QWH32AVDY92te528kMV8V54yEk5SEShB2LWbV7iP3kXBH",
  "key29": "64tMS7MJreMR9RvKU2zLwFn8pRb5xgjREnWbzCsBPX4fEV5wTbwREcbWjuYQTBCyRoFh14vSoma5YxA91zwKzTGz",
  "key30": "3RYWgUeSU3sCYj3biBTjsSvnMJ9iGYNoqKM1rWrgxbXSrGKTeLsjhm2VebuUNE8zVttUGuxYjhETM6rvkL73L5CT",
  "key31": "5gQ9iLuZ9cCxB8T49xgCzyCv8WrZR7nwfXvQRD9TMb5ALt6KMtEpetjSoxT6np7GXfjibZ2bXpv3jBb1EBxP2B7W",
  "key32": "48KdcYdofFfEuenvRvLkPeCgsuhs573r44fHGD3K58Vn83Xy95WKtNKonG9pNBRnpdgfpiPsfhPhxkhZAPbyrjeq",
  "key33": "bUTdcQjq4AnMvAfPavX2RCvs7qHAdRGqC4hW8sS6fZhJaBmGz7pz4dKbeMRgmwHsGXPxUMjXgsDjmQVU2xwhYLd",
  "key34": "4qVqP77R7TeX3FNdkvj4TJsiv4c7TbXiuTV32QMbLSVNnDKSWuJyBASqBdGAspPhC9VGpeGQbkAakhv7jYVhb45Q",
  "key35": "KSXbVm1yMaugj3njPFMjpLmvtBYJ2RTPtyezyAZQqDpHGD4HsfL8ySTAcG4U8XBapYqqjsMMtMbnbQctiwAZteV",
  "key36": "2mYKH2M997ngFRegH1PwVSCGDjYKbKucNJnAtM1XBd3n5hoDPGaWpfVzL9jMq74dkZF3KhmeUjoDY7wUfNxwSefT",
  "key37": "3hW6vswYTxzbMpYdAtJjmGGMiSGdHVvifRXKzAxaEK1qaV983BDVw6kuTQKMmCcKJtfvngoZee6mWKVnqrmnCGgb",
  "key38": "5SRfo5ui6EdMc9gaapXuvqYFwjKXLBreugZ2hjCvq45hxWDGignB8KEo87PPwzub8ZDQfrst1BTteoZgcenV5oxP",
  "key39": "iJhF6QcMsbP2gkSWQJgPdzhiNvCthy1uWd83Kzt6T3VuhkJukXPDfJ2u3hXo6h6y4erUDHcBQXym81QmafYAgMB"
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
