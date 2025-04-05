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
    "5GTEL6tH7zu7c83JK2Ebqcpjx9cLU3rTkDFtxxcciMJZCvVPmPkRRpoGx8HMJYZGYiBjiKJMk3FPn6o5xw2o1yMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yc4UBSE69F1Uy7ALRShYCArnVuei21ZgKECt4mG9KqDatxjD3smdVtmi9fsyDskZwBxFVKxpE4tRvKRmhcBmxkm",
  "key1": "WyrAJURsJr6SXqcocaJNuK4WPadXvcbvdBuUxXN6Ry3EKWS3AswUU63MJ6nEvXsYFK64WT3rS7S9XTV8ENSYZGi",
  "key2": "2xqt7LtPqX25Lbeg3PHfit1eWTbWkxLYPVWth3dF8aPme1KmxoNGJGfLkYAf6beSF8H6BDtPk9fma9SAeWbfsitu",
  "key3": "5jZac6gL9v26pWdL1srTYPJQpckSc7hba8JF86QSkRK85bLdfpL8B1kYteokwwgH8gw4MuRjHdx9k6UHZVy9Mk8b",
  "key4": "2xuvqD91maHMvZKwYVMm1eZxNspQQJ2xmYRCc2k46pChg9zDX4m2UW8FDvje4jgFaSsZgyGQ361yZss5RssF97H4",
  "key5": "3BznVgq4bPwc7pWyHHNuK1rrN5sw29o5C2RBikFMWW9c4FQ391AkXWdPbUkkfW8GzDgdLVZRxebgh89SaCrpV9EA",
  "key6": "whowxCA86YjDfggou9fS8R4kHfJkAepeSGqaLTyAZ5FCVTT3Y6iL4NYA8bvPvvxRNM6z6jnwyp66c3cSp8kszQp",
  "key7": "4SJqP9kgK2qjDSiqNvfRDsuJTH6XECAKndEXoRpfbFDzYAJLD7PveisUz2FqyMdvVbogmejoiTCGtT63pMVJZ5eo",
  "key8": "4LwSpKLp8LY5k4eT1Bowvc5rXdyMrbS6UNDUYtnYUAXy9esyyoKWeZBcYFgzr8LQwTUZAnkKuWg6LjHj5vh1qX1G",
  "key9": "3KwgRZtGFv4ME86866tKUw2jL2revbCryxurLT1vRatgk76Ha5TxiRQiA2ZjNLkC9ckz4HUNMnBbA6hNBfsVgBaK",
  "key10": "627PwXtxcevGAMEpth4vmmBa38Yqv53zaFsxuGxxiEsEVE8JPUYHyC6ooJaXMVJji9fXerxT9fu2qB7yGZVrEm6h",
  "key11": "3YspPYGvXfCdfboJPeDmJcCDXcXkX6ZoLw1MYsj6zT4iVzitWAB9T5VXoZFWLEYzurzvxa6EjkwJf2xio2DqCAe9",
  "key12": "25uWUTnPsRJuNxir2qj9tTcFFgrvNTwiqxrZWY6g9xCkPHeuUX7sCqvmPmKduQwoRYoxuYT5zyPyhx5WjEKwGSin",
  "key13": "2y7YgignKCTSmCcdsGtJWRqcSMBwip1zf5h9Xz8UhFCTexj6P9YEU4frxu3Rk5hzJqcKPhEebYgCH62uRSkBRpRp",
  "key14": "2egUva6cyrYCH6qB2LvUNudT7hzsZw73h3wUEwogXog8YUGaKERjEfT21KjYRp2tLNmvm99Z2UXDFRAVXrqf1oYS",
  "key15": "3HMH3R5EJsRFRpH4d4us4kbDyqxtVZmjA8MGqBNdNEtTwG8rczGQcbEhanmFynX5WebMU89yRvkjwXrP44Y9KtRS",
  "key16": "2pdzVG4zf5V1XWHXb6SYpwPU7yvtQ2ApguVmgJhNxsDaNG7u994LQN7TaactJQPSQGUVWqZfboWEkeqCDMbHy1si",
  "key17": "23BpkwknTLNUKZsUmJV9GeydgvPpVaJp6vZYU1UUZB3VQ4TcDMTGLXgZYvH3rn72PSZ9D8cdECoDvjSTJ6eMwV9g",
  "key18": "2dq9ZskrUexCXHYDAPgCkFGERUXQetQqUmEZcSNV8FVWwHvbjiR1xV6CJkuwhzYAYoKVUqsP6dd8yXdyiT6EtTZ1",
  "key19": "4xJxZtvucH4pj1QiRQaHPF7QNkbPk6w6qtuWfHC9mWxR1QV1vpXwNi1im2MZSSQFcD2xo3tYJahtvT2JSbh6TZU5",
  "key20": "3htsV13XNFBraQUqWfZHu6VDP5KWbP9Pw2SSLb163NrKqcW9pf5eHrEJPwG3SjZD8KbavSu78uNRwhjGbpWLNEja",
  "key21": "59xkK6Us4ieATKvjitaF4CPL3UARHW7ps4a31cmDZnXhHar87SqzHbY8J8qcCDfD1icvLWxGJkeQvhTg8rErZTya",
  "key22": "5U4qapXa55BW54LqJsvG3K5xoePuGWm3p7U7J1Qh57P8NMAtZ6jpiuvEH4mmgBkFo8jrxfWkc12TLgqRHJa1cUKe",
  "key23": "c2CPttXwCpRvPhZJWBB6Vv2GnUdwVuQkVaf58G8J2oqht4pnAKp1zqsCtSEtxeJgvtdasnqEVn5xZHLYfdewqwA",
  "key24": "4GNrrcHyFVygs5ENEBCXi8KCT8LuzooZDsK752uaGAF77Zju1tHSWVuUZnVAyNe83gcUSVy2K9EVP8cK6i22Nwwi",
  "key25": "uY1QaZg3dYXL19DrWL4XuaczR1knYXWV1bBF72yRmJZHbk6svPb5HRJ7P6qerVHUonSccYC3TwhYiSQz2sLptih",
  "key26": "FP155sDPuNn4Tq18qbUzuygxtzcm6sq2gnRcov42sHrupqi9BvYExNmw4wMu8QunuhuFrYHDn8apdqZgi3y7231",
  "key27": "32kkmwM6hhz5Tn3cbSNDfrvWm4NQysrjUUvL9k1RFPwvaS1BvGvrzr1uQ6gC4CsvNh9V3RiyhwUQXQqUPkQ21NBW",
  "key28": "2FraKCVH5MhDg9vhd3Eissgmf4S9CA8YAGAfmv9yw1ejzcs7iNVEodRy9pKkJjsQf3VFufSpc2SLTzbxbhev3WWw",
  "key29": "5cGpNcsNi9ru5pFvXfZrykQDnLAxJFaua7j7ctAppNrjkjutEcbmYV6ewZdi28cMpst6JYmoDJKGKCRzHAJGm87S",
  "key30": "2hVrV5XUzCWDJJ1YBVanKDXrJKa75jAqTuL5bJVJXZnmo54waMur5jqBxtkUkyEoctsn35Guht378VQBPCeiTzfk",
  "key31": "2SxQhb2XCnhMDvGHRJLs1qErac4ssWeumuQwFQbxmrr3rLc33HH1PL7GnKCgHzZntycdbtorTcHrJbK41WUywBNd",
  "key32": "5uFNaSHEg9tkQDQjVxxT1jr8RTS9vTytm9fu1EkVSmPQjPnSRF9gUxH49gR9r75n6E4jgiMx1hgeefcAS1goRbbG",
  "key33": "2dQ63oyAcpPrhNyowGbWb2ZpxAVUdy9kX5BcyzrQaXmEe7teZ7sudzfS3PLax9mTWz8RtWwaQwiY9N5Me18xRmuw",
  "key34": "2FuyY4SPLjbgcKy8idbxdu5rprzh3wtkBFLmfuGLpiEPH36zmp8SyR5eCx6xVow83MBwQTfUAefFX2xYN4zXY1gz",
  "key35": "2dnM3DEBYc4MDsE4zF7V3nTzfBUuprtf2YsjCru28xRjSB6aPUSZ5n7vubQRRAZBnCErCbXkybzFDmYLqxAhts7p",
  "key36": "34n2usrhSx8JfU7ezUM15CoehdfQEBHP7gScdaskqTYauEqRNXoph7duxDFgm6AHK6E5pRM2bL4uvw4HbE1KiawZ",
  "key37": "3xbyAwVko5LKCaYTmZPLXeAyDWsbVFxUVbjKRmiGzCEd9FGkXvu9oB5Bp3sbNXGTPAV97xyAryet4TBkymeGvQyY",
  "key38": "rZUCNpJ82kwpqciFHPeXSx3oAyQFy27dSr44zrJVtWbD6dUFusb4qQ2mpPWv7N7vfG2oZB4ERxTF6DJzVvn7EYE",
  "key39": "5PazMev5bPHiyL6TjTM4tV8bcGuM7JWXbEwSjZyR4t8PkkGXDn92PjRZjyqMPgqaQ8UCRNbdPPnCzJgfvSX13His",
  "key40": "4pFpmeqfyAwSQiCMjK3g3VH9EHQQM4HWvXfkSmSU4QPmWtEr6cqFeU1M6mFi1Z8CqwL7ZbTVZLyMJP6bLbM3ec7k",
  "key41": "3JFbwn9L1hvQiC7D9DonCkbFf82DLcn6GkvVER4h7PGzC9xcLntwASje9BfRtcN3JxZcusdHDztq22jzx1WJWB4p",
  "key42": "5MX7J8vK6xbezVSXnHq5hY59d1VfxwsN1xhDivd2kBoBDcNWsdErQ9Ysde5gMM8SF9tgH5UNQtXtQ9V1JC56mVFE",
  "key43": "36KwUKf2wKtmKjdVkrbRYSVZ2RuYMDdGbAKBPH9nxDo28rzt86CNHzKKErcguVHYjnME2rgeVYhMPW16ygVAdAzb"
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
