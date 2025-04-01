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
    "5gUeK8omBNMjQhhSTcAN7okYRrCr24tPpJojhafeaNU32AE9cVexQySsC5EwFjjaYoR6sqzNQrF19npsEi9KJf6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634EFbNkiDqPPSUUNKq9Wc1chT3LL7EJinReX4RY1ZWmAZDNJmULLdh9QqXPud6FK8XZA9Lf7SP2Gmd1doHiESLr",
  "key1": "3JcPcFjJ7VJF3pRtReyqzNfcBV2MUK6cqvR8RmcHkfmFEubZSk61L2FM7y7MZy8bHKWCpqTs9ZquRhBhFydF74Qx",
  "key2": "2eT9krMApJbS1zw1SnckFTzHHodThZCRQafR3GrDYsSPjxjdjMgHfAhMgiQQDoimpAJAJBaWn4BYTgAUaZu6GL7m",
  "key3": "nJ1L1ofe1u5CU4Vo6kwApCsmPkeiMrZjfwDbBp3Wwkcgsirc8sVdvx5RcUyRJd2eCCqEbPhc3Mqrq7p7AHdHuDU",
  "key4": "58W1ZKHwuQMJ82eTfw4uyefgefqDqBeWqF7rkeAzhNywfqFQmiJXQygrLYUtDQjM7KE5h9vTV4TJ6fjhneAxRMVU",
  "key5": "29D3Yszb5mY9jMR9z6LR6sbWqQU1pC9F1pxSTGVkM1FkkjC5NxjwBE3vpK1dcgwe9AWrFeisTGmtMusMghfe1dk7",
  "key6": "wur6uuMRkbWKoTzvG8wptcHcyjkvixraiJGCCmzGWe5gp7eKDJ6W2JnnBN8BQrxVrg5gvoeR6CsmbMRYQFSo3sn",
  "key7": "3CYu1A5vbVmRJ47HSbwHfXbd2GUxF6sbyiRaTNopnAPrWsaf4MpLcLWwArYiLjUaSY4ugtvmv2s5WnLALTe6KRBz",
  "key8": "2pcBHjpZ8iVy3YKb3bawMFhQxUJYWNZFuZMw5NTTPr9iitjqHtxuL5iA5xCdxnTFa1c2nUE2KimK6qhKF1YGSmzu",
  "key9": "2oBa66MQ92HzpziozfigrZzxn9vpLxJgjEPWbGYqDaxxi4frdYNwTUe9TQGEFvpnyBc5NHkHga2ckn3GSpytBCp7",
  "key10": "49Yfbf1xYuDqKk8dFGs487qTB3p17rmeA2VfcPpwvThuHzkSqR64hvFXVCegzqSBdUYGyKf9nRuteJc8UjQjSQek",
  "key11": "4DpxD9rcLBGCnUbkaaHtWnirfM39QcF6CJghe72Q8aFn2awPiyrHfthv6dywpKn5wUbrb7MxEqsBtc12K62QSoi5",
  "key12": "597jGCyoCxqEqNZe8uwgvQqdCybcwQktgnoL5wxEgafkQJik2q2awrC77L5mXnp9EsRiNoCqc1Xsaepfh4i9V17U",
  "key13": "22KoxbhWghu7jgVqzqHWXAzB6hEMu8jCj8HsS244GCWZQJn92fE3qajy6SCW8se2y6LHcN8dLo5YWjz1xUbEzMyV",
  "key14": "4meGgKyVv87xcbJEq5eDtoLFuusokiLxR9md9Uv9R3P6uBwXebfaHi7kgLmHr5hqLQgNLQAZQLPfPnSJEzrQ4fSg",
  "key15": "55esjZ6jXHcYXynqNqxWt7EazstBCMkK4yzJXZjxEBzL6km7ikbHfAK2awZz7wCEMABwP3jtq2zBaFPhiuxQtaRw",
  "key16": "D1x9dvLZskSGENeFbhE3Tmor74PgUkMXVc37x8FCuMXVtTdPa8HLBfuP62FptY1ACQAsoDgKw2kqDcZdY26GwbK",
  "key17": "3AzjuyCTY1rmynMifEaeyc7mvuxn4S2f62ZYmN5PAXaEHViuHSNobijmPCJHLgE8LcCQeYaL9SpoFedjZDp96Z55",
  "key18": "4vnnBW68cfUxo6PYJ5RQpv2V6JJDvhRfdFUChCnK3TCsVRkF74NYfAi3wZKXhKCeAjEWFM4DX6FdV7x6Bz438xUV",
  "key19": "48CXsDehgARjULwwchnqB9an3tyFRytmnqmWBnHLPmjEt7VBJ8EhcGyY5r1JKFxzsUxWQM46cbGj9mrskeL5DsAU",
  "key20": "PP6rQHeAe7s4tndwhKhgHp2JatjcweT5tbbPVcddtsMumT6aqPYVVJhARgN3ysLJoTE1CWmnoVFkqMVUFHtP8Rv",
  "key21": "39TqzRGopvVF6exWN1Q9ZCkv85hyz1W9zxXw9RwwVNWd43XvA43RaqjDsBzuVNNtuujVrN2f7QVokSS6nr3haTte",
  "key22": "5ochkDbKwA64Ha9qyoWbaBr1sV2JbWFtLcmJghdFi4s9e8jYca1Z6K1nDgRwxzzC5H68pwhnchbKDkHuGQ6dW7uM",
  "key23": "2XJEKYfGC5h7rx6z9bYrbaWfkeeA6VCh9HvfWPfp3JLUMP7qQhqCS4f8pte7jshJzSis49eRqRYdUqo3TBXn2qLN",
  "key24": "5kbw5cZ7z67h4jPRDmdHfi2PKYTNGjPjqaWnnQv5D8FvxeKSB2CyfeKbJbNkVto7Epj7XJrMAoWSZP5UZFa3mkx5",
  "key25": "SSnYbxYtge23R6jgJp56WUwQaPv8RYENC8BD2PcCDGQ2hJPjX2Kh9qwhCqJ9aWUgiCMcMecSKWqh7zUs9eBX8U4",
  "key26": "3byvDsCKT3YUbWoQhLkytwM2rRX4nnSuZtUUC7cQho9mW2Br1tMhh8BVpqD4QsR2xFPpCGUVsgSKUQKPsNqSXLpa",
  "key27": "59gqUH9W27T6i7mUCNXbHSFAAPPDnDujDaSgfY9YVkXY5LLqyDD1LMPJQkakHzHCnocZxmNtFQPtArhHyvnjoZY8",
  "key28": "4iDpeChSKt9ofvDTKapMAacZqkp1PsStzw8X5seXjVWrmg6DZs9ARQZEMASKXnSjUsWUfS1q5mxpMKGCgVoftshy",
  "key29": "iKLjKqVa38MhhwgfegNdQZrPMXLj8dWnoUGTkLez4eL4CwDvzcTd32RmNyQfrLmtFC3aaKR2zPYgdf1jn7rrb3W",
  "key30": "4YtFWKqc2YezXwMRy1pRjyduo7fwMJ9B6Y9DxQuyhxTMcLhCzePAqEE2zaoDsvyowyFqQ235omcK9ZDvcYExF3h6",
  "key31": "3S7nPLERiWDvJ6hzf9N6p4Yz1U43YMcPcBhwGXm9QAoDazYtS4voi1ZsFSfC3nePA1ecMynRtuNnBTTC6EuU6DBK",
  "key32": "49zEHU67GvAsWcg1jDBNjgLEBWLvNgXEX5P4kBbSzKtMrpejZyaRG6Cu3ukeYSe3E315Eowvfyq6oT7D2fANLL9K",
  "key33": "2QMse6De9VCQQiCgXgqKwuADDjEPymjCx4vF48Uchcv2ra4jahNysoyDeam8zFEjzTy34zcEceGBk6eJBhCW7sp2",
  "key34": "4CsAEsfa2cURGvQFL1oBDHVdvG37uQgPGwXBKusfn21J7PYgXvApAfmVNzepAghUKDoeTrawWugFaom5vGSRaypV",
  "key35": "2ny7NhRPd9khKiozdvqN57P5tru34r4TDsBhTxCWkMKbSYy8kADhLHHmqxwgi44Sj2quBtx2SqQbbeB3dPpLnvoL",
  "key36": "9F2LfxUuruz5fmYfVEi6ed59SUmn7UPduX74qbivH39SbUpq4LrkHCjPTcp3BcbLQBQhxcexAEyeVX3Hb8eXxkQ",
  "key37": "2jcrJcuGTdasVWSDSrZRsijjVgDGHcQYYQdCLjpnhd2C7V1TP376kiRZp6oFehyCWRizhLWZtnbf3Yb4K8TM1bXN",
  "key38": "KNuES5NY5TAQrx9FwwpaFdWgejHJtp5xVuPv8fzX5BC1LQ7m1FSd4Pp8FxSaehd3zUncyU3vbJrM13N3hhacRJj"
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
