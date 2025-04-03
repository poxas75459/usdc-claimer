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
    "3PrhQ4friHGmNXwFhuajqvP4H2k5o2qX6MHiGQmVSfSv7yRSiHxpDKiSFaNf5PBs2KjGx9QUN9CvkMwVtVWbEeoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRTrWqCuRyUzHNj3S7JNqbi3TbTYGu8kExdwKsEgejstJujta2EmJSwj1RTr9WE1tSdBuDbBYHbUM9LmB1PBdDg",
  "key1": "3YxkNDu8WCDZyLeY2fc4RCgwXw8gnx6FsfDdBasEPnwHAQe94DmWBJUFQ9yjzUMxMobqkPbJZgc5Mcskafvag1kc",
  "key2": "2pbwLUYVBdZYKndQxqa8F7ukiLK5fKHR8uynmsPevaa8MnsPBWPhF8hvY6AAuDnwkodB2XVBm5Z2B4gjukPEDdgB",
  "key3": "2pmiGqgJou2Sa6SNcHjLmYhbYZRaQpFv41XJwQzoCkAF5sAUMrx3Qsft4WrvbkqmbZ4hyC8TPznkdWuudRVutAdA",
  "key4": "5oJ361oW6R91k6F68srSbbFG9LzbsGXuqB3MvDdu8RMLGNNuxGJH8g4QWufcVmYNVbiTeuoR3fV4cBPpa9Va49bt",
  "key5": "3xnSEmmRg76VVwwECKceFzTGtgxRxmEtVtr9uo7ayN7TNWHvYHrZ9rJdPvWsRUVw7KitoqpTzQB99YB7WiENPFVM",
  "key6": "4ektUpSFVPpWoyMwwbCNH9M2azpMswHVMtQPoFv8zhaay9vs2Xvu5oPo4kogb2My7XhHgbFWspxEdnZm9scSsmqj",
  "key7": "4eqRbxsJk7o6HXxCrUiSqV3bmSe3MrjL9EKGFaYYt7moxzTtJevGvGekKCJSoKPkZKpgokrPZPm9gbnxeGeQAzsf",
  "key8": "7mfHbGxsUTE6SUCpnGW99u772VQqKWuQHkYZiAn2mGj4wEtu7pdpHKbkkucnGQoZWapQkbhPEKRJKv6BQR2JmuW",
  "key9": "5zMDKgyGYV67mM7eZ7rD1X1JErhNChye6brJ8XTFQzcsfqzBHz3NTHoWdo31YENKxseNaytUwdqaJJps655pcBBL",
  "key10": "4SGNf9Yij4jQqy4fKiYdaGxDDfk2VLi4uJeFgnkTtHkCeMPVG8b3on93no9gAV18ULnU3eMWeRyMmNu6Xiwd1c1Z",
  "key11": "2q2wJvMCcG78ZRLQwk9iQqxVxgrrNA2USy8LYCidisgyPmjUnPTrX877ixvzzEMptgKYXvgQvYs1EaQ65T2PtHiB",
  "key12": "4N71jUKGc8XX8hnKwmp2Noo62Z8xnS9GWd5UakVCytg8RRhRrVyiWkPdaCnUX2pYc7Hh8zqb2yqPJxcQkkwMJgk",
  "key13": "4Y3Yq7nNJQmsDRWEUfAuLpjXLAmEuJ99Aduif7ag4FW8AWUtertgerjxrReryLRVpyFaxGzSt4R7cmHzueZ2Dg24",
  "key14": "YKJpWpVLtFFgATqAzAcqBLGbzahp7Q8zHXb2NxBhYm2MWVhthU42RZqQ1rNRY39x5Yj5dFcSuc8QNMTycRG985N",
  "key15": "3qWetBsoPdVFDaE7JKXnceDKYnwXXxDpAfxZ62D64QC5B613C5gvrYvGiRktoXwaFtTJSC9mb8q66M5ojrk6u8Za",
  "key16": "Dyg8UFcjj6aqxKcWq2LwT69cwi3PZparsKz1CqFZ1Vj41yB3SdB7uxY2575FYEnod1HAGNofn8V8FE3TGktJfJt",
  "key17": "3srRobgMZ4w7q43Mwdt4tx41uaA9MLCG98xeRNWFBkxmukif6RTNPjKB3fD27BZLi5ofMzj4JcyMk3m9VeFtq3zy",
  "key18": "4uSHFJFL3Yu2yXNjkpurvu1JYg5gB2XNx8xmGJ9ZqokjEpYpbce1DfDZBmPG4Jwgxhe27tuDwSAgZDFEHJwcHcBz",
  "key19": "52i1k9L4owFioHDYX4gcqE1w2u7pWNyConpho46GxTW4oDm8tXvQJVyvzRaf7yZMbQLnJ4JVq2nMqQoapWaP72cu",
  "key20": "XxgpE8eHcVPpqnYhnDzypv1FWoaRBXaopoNLr8aDRXKiZc3GxmUNsWLXiG929jhA9EqegDpAu4xGjtzsjYKZ1rv",
  "key21": "BmGB583iekqkA2sPUMeaUjK9wyMNSo2rqNtptF6NcJq2b2XpSmutSMy4Enhu8f2jmryJ22XREag8DYWBs37usL1",
  "key22": "UoGDsK8b4rhvfqoiPZBqqjmBqsWpdCw34yUA8ta5AWRzYbNnmrTHWqVBaJMJgo4nC9YpgzMuCGpGEmUtnSR39Xo",
  "key23": "fXLo7dp4P7BAuwgJgJfXgwLNMZJmYz8gZXw5u8pGrZ9YXKfg4oaPANXgeaQ6b6wzD9JypnESiCUYpf4Z33uL9UB",
  "key24": "3dqSHBK5moNxiAGmHgg5oxCBii6x2nNHTe6JuaVE9nprX5goxGmn2dS3aaP5D9H7B7WXMjg4Ny5coxTbuRnG65BK",
  "key25": "5wkWb3CPTco7FVaXZWsMZBHvpkEVa19cqPerdyYEqnZhQhHhrhbZNU8PRsyXSpT4RmbJHGmw8WYKA49FcM8q3kEP",
  "key26": "3xRCCoahU6ur7S5qUkR8atYYDt1GDJEjg96erChVntfdAdaorejXHmzdE9x3xecz6b8B75ngKM3sAbqX2d6xEkek"
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
