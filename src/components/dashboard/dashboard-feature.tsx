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
    "5TRWj6PmbUZzucJNtXvqPhy1y7vJPS1Dva4PEYJCtM65ePzTcezEA8v7VyzZzivk4a4SEZsN8HiovaUSxmjXUVTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K2AroaMjYESDyyEvBarRqjGxyPS8QCuP8njHbPZ6aTzZWvXrmu5v9FEXWfjvhcfPQTztEm6z4cNugajgwjDoQe",
  "key1": "25vthHqFCFbuFojTHueB9vqDt5zm1ehEX7c3gV1qSTnXCs6WMbao12zVhJubx8ngVV633LLGJ7mkpjneWt8HsMcp",
  "key2": "5MM5xeggx2afffgLsjnv2mo6xYhwjfPMvMZGHPayERTbe6TRC4iSgdEAEfWKBH95rhu2BVwE659pC3p3o7j6GRma",
  "key3": "2Pu1tKm43FRbfPM4RT3Y4Rp6w4ex7AJtb41osab1jB2TjHvF4BkF7aq3LTQ1gsC2NrBoffpev5UjcifcrFado9U5",
  "key4": "3CGiLHPzAkTcdWfLD2i4bsmodBGmpuWQmt8W1aB2QHWqAWZr8UFeYgpHB8RR58U3RxmB4BtfGW2D9wuYzYR63w1F",
  "key5": "2vAFoAggEQ6hHKcpXUwSPGmkwMv8qh5wSHEaMJiqnWkQYGKjkKhFZKv9LX5ppcVa4nx676mnmyhvu68shXT23PAa",
  "key6": "2mt2VwLWuWPTknrrbdbjUzYV2DHGFAtWqEwDHTCndHLEX3pxd77xxTcG8Lbjjc3AmXg7PS4caSJQMThbmadTjfen",
  "key7": "3UMhc7TJmK2Pkv1w1qBSHJVvNYKU33feo5FN1hKeosT5CygQEi4eAuTXP6t6qQ5cGTxt2FLSN2Mi1osXTeBU6ZwF",
  "key8": "frC6ey48qidrDBeQaSn8bzqUgjrpW3U2JSeFZdaEximsQ4mrmVSQNGkKcQaS7tAgAAAuya3TDz2TQzyFTCzuEdm",
  "key9": "2A5ShYNm7QH7RQZnukQ3dQ9L1cZZF85MypvRcLaQu9yYLyn27ibMphAQxW2Z97q8qtRkd17ym9w2UZZ2UA6kdAie",
  "key10": "3PsjMuzhvA9fqiMWn5eDWBLSDchhsi9GmgRLCHyFiejbRJs6sM9Q6SckiZ9zHJon7G94YWQRbKFaXRBCfQvn7srB",
  "key11": "4EdxjDv6kb6xESDEQeLSJAUoJ3EPNa3yj2y5JajqssdNaWbuuMTcAWh8rwvP39NkBDYMiviNHmgBJptG8ZnCVWtw",
  "key12": "4tJf8F4QBDUAbFUP3xwfyZyWPSmbhtCbzo38pFSBHP8UiJkorCi78jvGvhW1vK1sWGq7KPkt12QCRMe2KWPmpJ5j",
  "key13": "53ypdeZxh7yiecZdQG8g3XZsKk3LvC9Xszvi3zD5jyDtQTVcoMqCaRZNBwQZb4iyr7E7aFAg3YgVsj4gaiGMMkAr",
  "key14": "5L72C647t9Jm94ee3XTLADcA1TjsoLdLiPUgxHxnCRmx71fEnWNEVyRBEhiR2C21aqGGAuBynCpn9AkKXprmfwtb",
  "key15": "5TVyNAKYJy4ADkpAKYryfJNU4v87o7B6WwDbJPVuG6HzynRznVy47rNnVpxbw12ApY5uXCt5i55BYcX8Er8caLBn",
  "key16": "39YbUWsnBopeknytubebzGc7fsVYuzuvF2sTNHVWyniZGvXbjZpHMzTX9NCJUrR2v9RjvVKUdMBoBU81KFk2MqxP",
  "key17": "3u913jTgxWxvNdEtQHNDQWEYZWpjHoK8hoB4JrVhX6WgeQzakArnhg9TzoZvnzX2qgEFYng3bgZ3DaGxmJ5jk3mH",
  "key18": "2kv1EM6euQiQ94pwv4S4cuuc3M6WHwzxcB3VvN8faFSJcCYSUVtftjpc1pD4zq3eaKz3VYEXhrqdfaz9ci5VG2pW",
  "key19": "2DZdJN4X4onSbuGS29qopTuVonUTKJpB2Yy5FkS1EkkaZvQZziorTW4N9gJKKFyfzUyffoJcnh8MdMhPCV6CMLr9",
  "key20": "5HzUn2VsVVgGNCo1VPrAjDzD1XG2wUHdcuJ1t7ZdqJqgUsBV6JrBnJPUuMnE6SaRq32UK1e8hT4B5htiNCa2ent4",
  "key21": "4EhD2YSHcvyR1rNUdN7wq9a9gaAKz64Am2XB6sPf3rWznsH7Cq8FbagBwnCW4RcsdJ23yFWrwjTH4eSnMes5YUpM",
  "key22": "3yTijR1BvYyFddu41aQ4WAEBWFsq84CMZ4SrLYswSWQWKLZz1zmJpdVUqGVtxs5q2MxqUk5sTHPpBuqXn7abm8Cu",
  "key23": "3eHkMQZmxQ3KAPFhnTwxqDNrC121aTJwQKShw2fu3AE8dcHjJfiNzsPZVmokdZowmZqD8mrQFneHEKTEWfB6E3in",
  "key24": "4cXMGUCaNobFKVhBTFUaURKzv7RAeVNWQbn4VBDzkwZEUACSkUk4Ygak39oX2pAjutq7nQLPbYTYhCWX1gTpC5tL",
  "key25": "42ji9ZJUsBe7mFCaYvtTPoCVw6BuEHQdeXsLfjtjKi7X8LsYaUZaRGmYd1z5nQboqjqbBATpR4oPGxiNp2Y68erb",
  "key26": "2kecxdzcbMZkZL4ozpf7vQhcEmN3PoAnWj2J5whk6gHgURnASEPTJmbZQ6LXZNFbJnCrNpMKxcbu8AT1pbXgFFfY",
  "key27": "4Q5tUhW4wxf91QXtyPP1EDLtBqdjsxSnYqnYSaQbbLZRBtUwjbFL8FcEugcWUfgDFtvAvBYg5jmC79zyewU8kLcF",
  "key28": "3GvWkZmQovwUAqxkNoYtswSxeQhhzcwU11iNfxTmoLZLGciEK4FUHTJH89L66t4dYQoiLHaJUwQ7fLhKUgUqtQPS",
  "key29": "58m8w2yydX8wLAHR6k52vPgn3YnMfZWomr4dPqZ1Zoy2E1h3jwPuHBsGLZEYRqzqRCcVaqvPQ7QLZ4Nui35yL1kv",
  "key30": "3cesqcTKw8DPCKEe1Ur42KFdv5igdK62SDUnEm5LrMbSPKHpqfZVsYi5XwxzsqPxhKQsrLRdBRreS7JWKZZ2JDEa",
  "key31": "5DSQ7jCzN71Dymxme18AJtRpBbmc8yxoq7Dz6X4GAPVW2qAykiWT7KNUbPwAVM6snEb6eMdPLZTuWpzyPYxDr6LD",
  "key32": "5nE3a74SJkJTxx9pXWPn2HDcWCKov5BcZ3MvqzS6JbQwxokmJMB7yRcEtESrrRmK4gViGt4oVhPpqwGbkF1NNDVk",
  "key33": "4qbpKpv2roGprpcrRRBftX2mC9nxd5cGkgZsz4Z1kjSxPXSGj8QivEKYuXqJx8EeNjHsZaCSQniyRUC3eXS9gFJN",
  "key34": "3Fg2Mcc6JhT463k8ZkBJgbBVRsdxcVcjZipDnH9LYdbuoy3WsTe5y1QhiqqtBBrhpktRUv667H7t3j7bwz91JiLm",
  "key35": "4bny4HZFoGJgjjKbraLTnrCQZztuexneBg2PLjGirBVRGqtAg1ZChffxmQPZ3Ch4KjPVrbMo52dqBwh7kDn2HQVu",
  "key36": "3DowFX1o3AeGjSRM2LpeSLu8GsqAGTmfhgTMmcarG83kdf9wQdZNavoXJTAW33eLh6JEyUhh957wVS7AEDmkPF2r"
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
