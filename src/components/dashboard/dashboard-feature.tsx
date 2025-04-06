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
    "2R7wa76KgwepePke2uW8CMZAppGnxvDse8V4Vt4JhJAgJNauXWM9at9db43jAeHdWJPbCKhf3mrT3X5bVXKbioXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zK8ecepUa63wipQDjwyJzzLCFEaHsKHWvA8bXnBncy6euPYPU5KXSPLj3erqg3uvbDRjkcdPuCXs5Q6tkANJMHK",
  "key1": "3c9DTwVAFRvedox2pfdTAL2GGkz7dNSoCB6gf4MdozBhNW25cmJd9GwEcDJUZA72gjdVkknMCuQgrhpM3Kf3WmRA",
  "key2": "5yHrBqSf1MUjoHAsGpvwTTp1FF8jvZK5ELGVPfNDbqwyPJYMSDRnF57jeoq619ZWswz4vYqxzaiFr92bE7u29ivi",
  "key3": "8MMveu54MimZZR2G4u3UTUE33zQtfkWVvK6wTecLn7P7C1fmFBUxYKknrD3L5ZTrRtLiZ8cHZczhyKLYz7Q7t6q",
  "key4": "5S1BCX9yrWWN9K1aifp2wgSprMSVDKfoHzpruRUHm25B5ZMddziPNbUZzzLqfmsbuQdEXq4Jw6uj9nXBjsnfzTcR",
  "key5": "4kkKzAfNdhGqRLqxSjzcZy7TCZTH6kNCyFrk4bSEjvRDvMLMVFjyk5UoG7JtLKqGGUGUwhorXVVNtcywrkVWE3ci",
  "key6": "DFYsKa2Vjdv3L4fZAhwuiwoviyfjEv8hjkQR61UJo9ntiHqWpznG1BuHmNYfa8koK5AyhTqRCtGabjEWWq4Diuh",
  "key7": "4SzJ9mqFgk7BYJAv62siGE4iGAPQwt29cMzjcDpZfTFnQuQSh28FNL7CLYRAEMa8pm4e2wjsGmwfpURKdVSSD3Pi",
  "key8": "5fZ648mBd72ra4pLQW1iuTSDgVrPuvnUv1GHDVtc9sCvLPPF1y8YocbKzt69f7ruaxJfnb77M77fPBQyTQNz6qCK",
  "key9": "3NpR8z3SvW32C8Jov26y5mXTeUHQP83SzeGauUW6P49g8b58XveJafbLGXqc1gogCGMUu6GiMGJF7PwTmzLCFc5r",
  "key10": "38u61mNBSW6uXm5VqStupAGeZq2PCwiXcT3utCXDJ22iQ8UptacTFik8SYYR2Sa8aQQNSiXndgmMKVcv5fmvUZoo",
  "key11": "JNwjZVzLXgmdeMqJUgZuMqJELrmD5t3WGURUcycE5E9h79g6sQNUDDAG5JGYSf79k3HJLv7hUS4mprJasW5xFw4",
  "key12": "4DEqBjY4tESJrVEdycqJxfGuSEepmBSbnZRPezKKXrCjGnwRoi4FZkuaW97KZckzfuvadkoJj2Br5w4tzh8YBbDC",
  "key13": "3M2NyUdE7E4hdJrB4FmETnbMq3fRFxo9U2NQ42iTXoCxN7pFf1P52CYuUSEvtjyUC4UY99yJ3Gz1jPUECiaFeZ8h",
  "key14": "5ZfBXRQgZKftr6XxFFpS4RSArDrz7k6sSgEXEimdY3h5nsABvjmYhDxVenbCupSWDsKtp2psygCTWhA2Foa5qiuU",
  "key15": "22PtK3c6CFh8Ag3dEKnjdJJmHxPmnDipcNSUS3Z9W8PZRbfPqrkMqbHCo57ufsmyZe9XJVoQimnzf7qoP6p5vg5t",
  "key16": "oPbfsNUz5nDpQvWB6SzshedmfDLHvPcKF1rpRdQJYPFgYqegR2tqe1upBST9FDvr8ZdCqkU5AR2h5q8iruFN9rq",
  "key17": "4g75sDzssbzKXL9VkmqKS8fcwg5avvsZBJAHD6LJJ2vaAAH9RrUYs738MYp6m6Qn6RoTCkkeDotaUczKhWwY8UF1",
  "key18": "2vLUr41m2imHRAc4ZhddcEHtDvWkWDSgCKvZWXTMfHZDCQqGzW4uyRcJcRqb1jXhfrwP3eLsDqtgLYJvoNAgNemq",
  "key19": "4BXt2Axuy5FijDkEeY5yNUDjuJzto7KJdXEVi2i67XQexRiiGZaD3waRx8kCa9LCHuJVM541KuYe5P7EzZD8Bhss",
  "key20": "2f7uHuGD4QtKTke4KyZLmGbccLwXTRdRJHtDQ66NZK7gpRVE1sgM3mpG1Sx7ofBpKn2C9sHt1dThyBEACK3dZJhL",
  "key21": "RkxuTyQijkLuKAJSZWMq9meqdDXTuxegBZehmx8eUQ9KNLwdjRys99ciyDxkA2G9CKG1wxdVUeve1VMXSUToeML",
  "key22": "vNVK5dry3VAMeg7v2siKq2cG9VAJNby8fHQcNqnJSSyVWZ6dehRs8tuUAUQvfRGqWeaFGYTPZ5x9vpwxHCGTKsf",
  "key23": "62wPhQ4qXPe9QYvaGVf7hYfPmEVhzk6BRrnmArP486yFKjYhhoqYv9NASp6BjgSsASSt4YES5abUMscnBSmsPe7Y",
  "key24": "MpNvZfZstDSzLQDDGuS1QW4WzadSG1pPmwRpgqA1mH8D6XaBknFtrPdgFJmW9GNQ2ggbFJNCjheNWnpQSUBvQkc",
  "key25": "4TBXmQGCLm2tFGnXRJL9dvBMSw4D4NR7j1pEaEfoUN7qTbvgP6XoSVjMkwHFEKvCwChaKmQhUrayjxYFcyDkMTZv",
  "key26": "5B87FZZapFBmZ9gPeTCVfzfMAsugvA2ksDZYRk5zBGcjQUgCrZrz274RRimGVN9CJqZCcN9641h9U2AycADec6j4",
  "key27": "eug3z8wgtdHM89W13U3XQoL7JJteT4nbStY6HWyZAgA7NvX2jTGP6ymgW21e79z2dM3KW54mRM2wxCcFiTxLeYA",
  "key28": "5N5gzG729hH3YFUpRk96kLiyfkKgkk9Yj7XLVwv16jRzwpJCLERK3njUWyHsTz1Ma3BJwuowHRivQS4PzqEKUnpv",
  "key29": "vPVhkLg7b32FvgVRhhGrVXvsXo1tJu5Kc8rUfur44med9K9BGzDRxaVZ2uHqtTd1NcAKH9pKpdGacdimNk1Aw7E",
  "key30": "XA9m6dH7S3KCFP6fzBLvyhC1414fPwCwv9L5bzhvoev6s1BRGiQ1xM83BKrwV7qhuq79zfxszMmpgsM5M34t8HJ",
  "key31": "64Np7QG3tvSB2uDgsi3QHU5swcRC3vdDek9JUzRCVVE11sG1CmnLkjBMQ4GjvUs2RyG3n2KgZv6t2X3ZG5XJyeDm",
  "key32": "2EU78TDjv6ZP2tfwpmRStxHdmrVxpSxJCZCDpBTmWN3aTgE7Dtph6JbRqP4wSCdJuuDYuJNwj72Ws7rcpbR4S88T",
  "key33": "yUX5M7AzWJKfc7QXVSiCSJeWmZAq4uvpse1kdtjgYnC2AvGanMfs5HQ18wpd7KGNFtf17B8mghnHikEHUQTNJWt",
  "key34": "3M27LHZ4QfKm6hbKdF6ZT3dYjBvtgpQAkbYvZ4LfskDDhWanWza62SMe8WnRfbparUJh1DUNeipUruRgUjBpn21Q",
  "key35": "XdEhL3ubY8NbUYVtWhaSLkVm3Wnt21JyVJSSCdKSUgSVZHmt6kWgCsDA7ZU351YtScegZCZ3KH4JzRLVkCNzJmC",
  "key36": "n8hRdgyfoV75tC2AYjjWR4MpWjUTKaPfLEcctk2Z6GTKSFgn1oeDXR2fXAysWG81fYPCqZTprn8atdH1pC5iHtJ",
  "key37": "56zhxE8DZya4cKhf2KHdwkeKx6qCVC2Lw6fHqFEoUPqNU81ZJndJkWvXfejp5nAgbiN3FwCpmbfwCWqp1CJgKs4x",
  "key38": "3ZyKapQtGGWC4P79gxqTaxKH8rKtHFSu8LSfWu2CmpnDUB375QWoZv8qu2NCHRn4kUivXGLmm8FdMk83MZzkz8i3",
  "key39": "39N8jdeoLBa9dYNCRxAJGzcpvXMfZsUcAE1jYMaveGmp7MDua1TSBTtWJBCVk9QXCaGNwFGKiPFiCYMvi71QpT5e",
  "key40": "7e8XkePWvnnQ8e2sQjgj7Z3BNU1eWrqtY5tijEVPBep4Xo6NXBj8FyPBBssXyMS22nUsjmxRXQVTvtGDuAhdFpV",
  "key41": "3YgHVaTMMhuRNHpg7CZXT7Gvsb2SVCQLtKFUUbPLbFmgHdyCgc2i6WTWCNk7aUH9EPD95W521pgYPgg77a1pZ4R6",
  "key42": "22wjdYQn3TC2Wfhs2jg6X1xsuyHB9JKtbhk94hK3nVREfH7QrDYYPcB2q7qzxxYp8ZSYqzrSLeEf7aecnDrez2zw",
  "key43": "5hD58ubdTN6VbhCK28ufgX3mE4eBbYjj6KBHGg9JfmEs5tHhDpB4RZCiQta1AZtiBLFMyhHLczbTSm91Fc2hzmvP"
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
