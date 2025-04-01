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
    "5idbzHZ5JMTFwbqQCmzXFXEPQoqPif1awxAgNpaYJGhgFSCVxfyQbq5Uio2hgHZSfxakpSNUiUjF5Lj7aecn38YA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hSWuL5UiwqKAwHLZ9zpSAEz6f6ePJnWGKWeck52UVKWzshVB8AsSKUSjSJNKt46W2FRXyjyGQQgYCvLCrX5uhH",
  "key1": "4ZJNyAoK99yCvSkqUmNqftNRLaJidUUmwzVy5FXEmaTgZgARmY8NznRjUEkVXVgQ3yPDmCZwFAGUVdLf9CeLQE1i",
  "key2": "61UckCAbCigkHeybtQWG8rodpb96SQEmHQDmQn5yDv2zmSXESRyMrRHqAShX2gBFG71hJXXEKrfunpU7EVz5aKBi",
  "key3": "2H4knpBBgNKYYRXdNBKchqEmTjVUEB1KdUd1V1FcbxY5Y1wVMG8sjP2uz38KByR3hDvFoy5dTcMnxqfUiNCdmj84",
  "key4": "ksTqCHPWotXFFS5hYQMsFKiEK3wWjbmtedBJupcqqrc9tumtDignPMfo5iJShZU5vhseuwZY8NN3YjWaiF1tYDN",
  "key5": "5exbvdwSfa5Sd5Cg6gzuDfgGmZVcP9iprRCUuDqkkVuSyMJ9GxiA731Veq7ZACHv3iQCzLK3c5DodGbSvwgcaDTk",
  "key6": "3d4NLQFxCSnHkeT6KuTJyVZFbCBiXeQD7oDb1g5AJWX6R6enzzgSWqPEsoaYFwMoDgeeLgg4wWEwgLE9rZWDiRux",
  "key7": "5nYCa5Hs86pmoMrDYVPtkehwrjQv8wTfGPieGBSiAaB2XSGfEoxv58Yb2jJDpZ4VySAJyF3HiDy9GUxXz9ipRhMJ",
  "key8": "geCh6psuB9VyneKaDKg3vAG5qLmXNG4rvKGTxz4A2ZkgZEWMVPhogMPskwaq3CA7G5Uew21Vv4J5CHe5o7rcbFy",
  "key9": "3UZF1xmU36wqEiAX9gtoxGtGSrpzjB9KY7H5CdyHuYHnPmjyvdJNBCogUhvhtYwDaxEcaA7sEMgoNkPbgDyaZVu7",
  "key10": "22D58xt7utZGQQnN1ieohN4ew9Sk2DXQqhWgGaJDhhJa1xMbwEnFDwrVrxqxwL8nuQRTjLvjaLF5EnRjxXo1VDFB",
  "key11": "5RiHEfXqvczhKEg4c9qcQVSg6UiF55QjiXmhHYe91Rfi47fqfdgBQwJC1cLrD2e321WsYNvxpMDgK5xTYv1Wq1sw",
  "key12": "5jbmGKo7Tyus7ZpmqWYPF5v3to7UfQEN7GoLyyo8EhHQkKa6nzCPNj963ZzkFwUZjMMPTVCnVtWFSCo23va3WifA",
  "key13": "4n8JCRjM1KzzqDbE6q5odajXJ7VnXPW5623DQL8ss9pp6QjD68N6cLLaeakoMK7Ua4vXuTmFHTUVrwzaafZbUrpq",
  "key14": "5h8EokiboMPFaBrAGMGPPjFMe4Ji5CrcuWmK8XyuhZ8A9BnwFwgGK1CzrFsrHaKW1jyTwHjAWJqipkbB7vaRYZsm",
  "key15": "m5eb9LA1SU1sZk9whHPxT1CqAGy8dWuvs6cT53QBtekXU2ZeTf6xnfSUznfdyxB7ToRW8SuarFFuW2kMwEDsEEN",
  "key16": "2iSu34UzmzJHwktUE1qT5iXY4r8NJE14sBWgPvGvCXdLPrrNJFNUKYeVUFgVrHigHUZVUqYzN6KZQqtjBcYSNntu",
  "key17": "5eyYtHU8bePV7YZFqaq9DLjRxbkgieg6okvgjdq2GVJPicY8RwHEd6XBhSh738KQMyGyRzyhobu5CexZUged15uB",
  "key18": "2eDZwQDvNCfuNb29mWv9RBv3spUqFY8Zsyzh8853AZmFyNCaRCiVqKZDRLqMrQxW1g9xWBR83pgb6BHzFJpDaosM",
  "key19": "2N5zN9pkLACG9HVCevscdQXqjEa4JPPDLsEZnSsvQ2aHWePw2Fwq8jVEwwC2iUAU6VMT7nraRuXuHDSWEdAYwVSP",
  "key20": "3s8ZDfvkzDLLQybBy5tEPK8zve4GPtsQcpBPkC4JnWZE9nSSPkLzPhJoH2hq66QNZxXAMryajpKHTwDjkfJecUAF",
  "key21": "5XJG6DWciVJhVwiqXBTDDw5A33sVQCacSyxsdiwDCHoQHFxWTMhTHVLAykdMFKL8KqKB9Y5wLN9hKR6SVnxZZ5Qa",
  "key22": "2qP9TNgTZtCsSHJnEWLSKbp6kFw7d7MbaZjs9jMVhhf4Pfdmjy9L2DxcWS4wnvQM8ZyNwwXMKJPjhrXVMoXCwiq5",
  "key23": "4JPcB4sfHLBrn4Jjpdvt6K8Y3Wh367VT1ZAnSxGEVNmLEpnabdDUrbd8m3B4zV1veK4yVKmzRmhyAGruYhnET7yq",
  "key24": "3KgWiu5JSDxTBECJNnSkrf141cXxWq8rMSiJqEgTETETVvinoaqw68C9BP18rUF4Nes314UYWX56gvFa6Mxq8SJA",
  "key25": "3uPdbrZCNxynAJSr4ti4eXGShKkhf58tgVM5FHv8igsyxWZWotMkZ2ffWkLFRgcNyJan98tYCifmayPNQi2rhmTC",
  "key26": "5G3ErfLXjAx5n8e8zCGAJi1Pdv5fcaAUrquyVjEuifkfDEK3Gd6sD89U4N2QyZqEvuzggKL2ycSEhC7DfbyqmWv4",
  "key27": "5fJH3XUBcsYjz2vQDT9Y4LNnKaEgpwjksDJhm6tBGVFgEk7eofzpdvzoVSCMUvc3LcqoZa1TXy6wv9jV4gF9oHZi",
  "key28": "RXrEAJkyoD8pT6Yoak8cHKNS5g8eHBQTZodYZurvukZVonxvc1vgbGMGEz6MC88so3adgWxerLweHP6xzVNyLuF",
  "key29": "2mHmGPrz5wkLx6oHRK3rT8Cmzu91omZ7WyfW9HDy7qs1WQ5e2bGJHreKeh5eeGRHoDZ4yVfkrnJ3KHhKQgF45yfs",
  "key30": "5i6THBDYT81LGKGa6HEGVkXzeQLrqw7NFcGwhF932d6Hf9F7KuZ8WtA7LUdMd5vKEeNPhqyxZvLRN9usKNgQMkP6",
  "key31": "3FrZucdGEj4QvNepiRhptVi4yjuVnuMvfwxHUy53EnVFLwgQXtK9dghy9MqrN7UmyXekAUtEF7M1RkNSEKJcsjV6",
  "key32": "4QAfNaUwMEVoFJivGsZPjWWijpYnoKKn38aqCGS6c2cMQA6QkP2TUfWdwSLVgqn7hDLfJ4GQn9csNZGpYsj8X2M",
  "key33": "55cQDNjzZbHPw55eYHXD7wo8rFkLa4ZDPhpZt2URfgJBwvu74JrDSxJqV5ek2SeghfZ55u4sgDQPuHj2Vve4y9bW",
  "key34": "3BtvqqDaw3S5FPjPeYApfAbnFDriR2dqPwhDmacPzzXRGM11SBzoyCgFDF5i1Tud7aKxMUnzQrM2VwtZ5qybCWss",
  "key35": "3Fb3tpCd3regS3RqYkQvMgaEFv5fcETscDvFCq6TFyX5ngSJekbtMP2MnN5rfonL7nDCvFjMTHmpkRkahLHppNJv",
  "key36": "4YMgymcCsmgP2391Rt2EdX6cUNCAainDnaJdqtBzmS4uLCwEuvLy1iMc3iJRPFxcoxn3E3GSBXVqJbt8guiz3GXX",
  "key37": "4vRqUiaYFsAGCvv9GqmQuZtAJLLZRygm7A9PPKPXd7hsWD759tJfVM1fh1TEdNEyAJvFCxfzQWictwWe1HTkb7kZ",
  "key38": "JknjSkk2KoNdW5Kuy5Mi1tYcbGXfyAu2W5qxoZibVKzJKvHbakAGke3SaxgLu5g9gfosXGdDNN89U59VFVBnZ1b",
  "key39": "sTXsTQjrSxQtpbhZmZJJqVkYpaFbm8D5FT4StBsMG82CbH3ApTs9wpsCZgygjmqBk4uvMgAhRd3qFiTJ7syVEQD",
  "key40": "5rtQVGT927vibfeBaFo9fy7d3e1PTKtBh14FSNefrBAgovEumz6f6fkQ2fR68aAusAYMa6PsoqfY2iFuWDkPhX7J",
  "key41": "4fMqPngb4REt9NuwokoJAxS5QKKNbsDo3vnxJHV4eQoxVQKTS53zc4rwyQUH7bFHetLtpCytdcLL6UDmAGAPZ3cD",
  "key42": "5PD5GKTVfDmhJBomb9hR871a5DNzQCeKx1awfuDPhbtdvH4eTpubZRkLRkeaVpzENkVpobeYtZkkpesgF7RH3ybq",
  "key43": "39x7LRZ9Lj56dLaAUCd7f5vfQ7Y6DCRwDDG63RfbBfRzNkf4hx91ghRcY2aUsf4rbye5FyY8WGvrGUQTsyrubfHN",
  "key44": "E46VpTXZNESXkQGZxhBMFp8JjUNhNGmUhi9aj6J6znbTWRxx4dA9Lu4s9NYYWjr3W6YYiNQ7xVMAhmQaZ3u57Pg"
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
