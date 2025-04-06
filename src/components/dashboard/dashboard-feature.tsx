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
    "2mKezEVA3AiZDSTRdNbb9dfK6eAgvCWCeiwB9KLdghhGmqk1a11igLQNYwexzDDw6SMwSUYwt9h2ioy72qEmDFMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGGAegri3BkSHRVRyjUpkw7RwTdzN7QhKFezKt5Guu47uYD2iCz3RarDEpkNFMZFZg1fXMTzXZxefmdRKzvmmpb",
  "key1": "3YfPo2eZ761VVHtxgVrhyDA57yFrzXr1B6H3BSuuUkDxMxaYCZo4WwjNUZvdhhZqrdegMo2SjeeiN8tcqUMDNxtL",
  "key2": "2XchY8pWn9Q5EU7c1ZTUvQzwVLwxbxBu2J2naMygqKyWX4YJxvG2Twr1nTjyz3RAta6zHbVKZE9hhwRhk8qHVU4",
  "key3": "2f2xqm8iidZewkZjNUKDoGa9CmKUY6EbB5SzyvhVY8T3gRPExByn5YGoBbjMtX76Ea8cBmWjnQp96PYhHaFEaTpp",
  "key4": "5aGsTQ1h5BLFwHgBqmQdZ2FnCaWSJQBWTokwUBqWyZjWJXsa9jeeX4HFoqe2qEm7NU7CXfap1Gi8yipArKWnnUrb",
  "key5": "isEbtWCMUFgoMB83iK6UF3b1Z3DqexBrsqgevXsnE9YiiETBUTGTZ4MZMZv7aZyVyVvkWu7pc5Lm4ujpVT9Nxf3",
  "key6": "2QDuZyTbNBCnqpaQ7jNqQtbUGjCfHA9qgQJzQbxNTNkhtTdugWbMGgbS1zDtqDsKvQeg8k9TDsB28CNvDxos2TxK",
  "key7": "YNDbyAZMMJGMVTyLAoigTgfrtizmzJUpCk9etXoagvUDumSuNhPGtPXxdNFM3JZJkFo5fe2cbJHEbZzSjkrhwnd",
  "key8": "5QM1pAdfEnAo3yM7VjQtZ86SX44sbL6NvCYhku58ZbWewiTgKReJgDreHi7ztoynbJXuZL5ZrAjTfdMbXP8BGo55",
  "key9": "3nGh98eroMsteSSwUeqqYzz4HbqB6WWKNmkbadSkkZ12EruhksfRMA18DLkASH9r2CQDFoB7j4vdCQ1sTUL9VZGL",
  "key10": "3PYtgFfPQ67cMCLNMK5fZgxB9ZBjyT4RAHC1tdSZ5nXhfKoMkjLoYnCdW2j1TPe584jj6jYv5oQWNZHxbLoBEzVt",
  "key11": "5vutbHs8W9FHda5iuYRdAdi7YY9dUkfFsJFCx6okBKc2A4ap3L5gLH8e8cBu6J4SfDoy7UJi5BWYmochey749ufL",
  "key12": "4u5JdnXxQbdGN36RS1kgqTJzCcMXmmrPvUnhwBUBYVF7ZQeDPEpC2EAJzA2Ty95w8FZkDNpAip6Bodicrz9yxTXN",
  "key13": "48JfAPnAsQ1ixrsviNV71MW6B6xMZDU6B3zNdyG9SMakLghGFZJhEnkkkkfNp3ed6UEw6UegqvdKpoE6EkvGnQtk",
  "key14": "4MFaDCNcHvTCSbfvH4xfaNpPdZxZyNox87HSZXYTgJPdCEcU8WYZZi2bdTA8NDs85yGggnz77UZLFBx4naCC3VMf",
  "key15": "4FN4hCjYDvv5U8cY5BCbfV4uq3CQU4pbffV5sCvKifryApbuTupyR2QdqbNqJF7wuYiQjud2bRuTGbRcwU4r1gAQ",
  "key16": "4we6BtYaprfznnCc4gVtaLNcTJRm3DRhcdaC9WEioo3XJQGnLPoa7xcb19x5X1ajhUhRQHbb6aUUEiNTmybhJKJs",
  "key17": "4x6Frmf1RMqPex2nwbs3Xjn7m3BT7EdCLGAJKS8mV7nSmHXthefHVi81N8oRyapNngnSxBVvnPsYtVgiPTpYArjF",
  "key18": "4bqY5dd95SKdKFhbmnFjX4nBYPeccD4V28zqBtPqZrQKECVnwnGAGvhcfgLQDmrrGS542wsbgUCkJpC7Ttmr6Rbi",
  "key19": "fKkbh6amH6c266Wgmnnf5wj69nvfjdnGYdoCS9GDT4QbWW6TkCQn16qungQydeDxZZezWBFBbwi5nnznpGKXSmK",
  "key20": "2Q7Fa46aJjGSWH5Q6YSyKoYfaaccGKAmz1BuTKBGPoN9imfS7KZLohmymoHzZhrLW6kNF9Jy8hLjM4vc47LoZJ2C",
  "key21": "2Ln7bEC68ks2pjnS43qwVMMRKuwiMSmzYymXLJdhrWctUmYcmoy636HhCQAg8GY2NxcCEXd9UheDkkzjHsv2xEog",
  "key22": "4upt9YFSnwLPH85WeRXxTJVHnFd2hQ2czSHLyrW4RaQkYcMUCeGG9QT1av6WfexMNdW83Qkdrvh7GttfKo6YmzXR",
  "key23": "45oyAVvPLefCddgJMWV4tRAqLyifZsWQTwkGhn3kDw7pGmysMgFzaNakk5bk1tpwEDV6BVFSwYpKNjyYBHzsijEb",
  "key24": "4nS3TiNc2cqeGZjEFhTh7Zb16gbYVbsjrNxcKqNiCpQaQv9WLz7UvRXiM919X82MYh8Cruh5AfKVt8VBED3952px",
  "key25": "4ZgLvc1A8kE1xEYebacQjxLJLDJjYTiSJAGgPpkTJnFtrLFqE4WJDS31DrWtTrapu3UisHDwe8FDZBByqP4bEpfs",
  "key26": "ZzDrQw14ZSk8dq9HEex7q8hAoShZJDgiB1HSEgtVfuA2K44hMUyKFXscVtP1bHQLB69kagJxAw7GTaicvRgYgAJ",
  "key27": "4Np94rRJaRDcoUJ5jFT3tWJg1jzpaBTM2baL1U6UrstqcamayC5pxmRUuZpdGAub9E9autUgU8wKbpP6u83AGcfh",
  "key28": "3GzTEzW91ursFWJRo7ptzoEpsr9quHduPu9j68ejhYSfuweg3RgaBvkKigVYERYGYaTYjBM24YmZFXvvWme3oMbN",
  "key29": "2EwzGH6fVjreJJeDb9uouFF8v9BT4xZdL6yirJH9FAydjJtUdzULH5esacHrC5rBxwSpffoXpnMZQskXE9SFN2mn",
  "key30": "3ug4LCVS1PtZZbxLjjNw8f1pqtdtLGzATuszbzqk5yYFXTa2r2pCY3kBZefpAGnJrTLR9Kpju6v2NFDgwPxRey29",
  "key31": "48n1Y5F33dEaQwqfY8EqcKoc7J8AHgK5KsXCmU34onroE3JzWic1GSbu6HKY5Z8Ys4yjcJQuQhwtudMkdoozaKQf",
  "key32": "FaVVv3oRdaAQMfJmF1aHWjdjdpB83vdVfai5nuJrCsVqspMYBDTW83vcWQK2CbieCzmP9VTKBBr4rG1TqWFEEKR",
  "key33": "5f5CE2FhSUAyb6ZLpecWjgT1CWk8fu78ALez3JSngbn3YL9jpLzxBmVPXxPyeqWBE2HU6gGFnx5eUw7RGFK15Qzf",
  "key34": "3JwPkGYXDBYgnTzS887aB2KZEhywcAn4Qduf2pFL2UGGZbjeEh7FcAwCzxDKFVBkkJRhFRWjfjyKYHVRd2EgQMtU",
  "key35": "z1NzSuSHxkf1dWC5Z4dbFmAYNyewVnYEqckMorymR5mj758K7eKBuQddj3Y8eWb2Agug5gQ7h13cU6WSTfa1d2a",
  "key36": "4nujrLMjFYuggrprUcG6NWBCw2pTs29Xo37XRJ7uP7CiDxYyKNQGWMBKCYoEQBWjk7PohpzisWR2Vm2MTJ4dZ1rV"
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
