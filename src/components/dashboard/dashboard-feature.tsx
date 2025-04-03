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
    "39rtXHfbSZbAfCHi9xgiENWMXyvbfrzUWv3vqHF4E9xPDcWVixcKRvBHgxTrJXLVJizt4M7s69rdr2G3Q9hwNwmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DHVzGRWoioe1xVkQFc25hm9LCCfLYjEyDeG8g79STj589J3trDc69CZ7ng6g5jNyDxcaQ1wVJY1XcMqGZFmex6",
  "key1": "4fWLqUyLzLAQdDTtxZAYXd6L6YNU3QM3D7QfBU3nFBMtQJRxnRCgp7B8J2FxRGfn8chN2N7RGwa7FGaP4gQfvtaA",
  "key2": "3p7dowb2YHpFVx6s4qqXEDCv5qQ3SGY6xTrHsrtRXbff8iKSt4nXuZ16n1eE3qwmq2CfA3dBADRPUP2gYE8fCw5q",
  "key3": "3e3t2umt4WHqwb8BgYVzwBTLWHodsCPMNJprgwz6TqmtcdM8wxzBw9aEr46cv7qkk385MHHGwcsaoZx1Q5NCKtJh",
  "key4": "42AQWdkjMKGm2t1f3QwC34YdBv7WPvuprhbXUEi31fMymUo6BugqNyLCZzyjsLjMkgnhxeYMqta1Lvb5HGhe12Qw",
  "key5": "4ysHnn7AEUH8e76WhbzeDNsPag5Jpj6xUguoPkXCDsxN96pbSePTcJ7FotRq6dSXBKWXMJ2gwbt8Lzyz2RhUTHP1",
  "key6": "4vzYveNnGifueZ5vV12rHvQGsbStw2CiGyFyr8eTiEF6nanocTHx9wzaUvNZUsZca4G6ZsUEoUzLCjvYNNypyRkU",
  "key7": "eeD7oC2EHu2bHYNpkg1ZHDdSc5erBmfJcVtjT6G9quDcZLHAqrPrtPb4gmuxWnEENwZPs2T45EdwRgCFDs6ka3b",
  "key8": "3xhGGgNybPzt6fTRG4386DSAWNZevpJrfLDtYszt9uzVzrBWSkvGXxrXzPr7WShQzC9nrNXmsN2uMY6gzA4LTy1q",
  "key9": "21CHvt6KGiad61gLA9fdY9caT61eZF9SdiGs5ZeEURfi2RjnU2LG9iKMHTwxATcDpmEKdjCGYEWZy9phuZMYGCNK",
  "key10": "41AdjiWC51v6jn5Z6ZWZgWCrTUota2Bbnq9zAFoefgbJSwfMoM5jZ8k6hQ1zw9VMSjm3CQmXESdga16gXqHWX2NU",
  "key11": "4rh9eXrR8hercz8bKsFr2gE3eLTCZQCw93sFzR3Bo9HynkDfWBWdgL37JyMHZH2XbS3TRiRHqbb6cRwGL4qKRkcd",
  "key12": "5UFJ4EGb4f3PyWUvyCmD1Kbf89h61CYuTHfuN13s9WCGS3ZBs7eLUW3LTMDP34KhD4RaDVSvd2HU17kBAKkYmVNj",
  "key13": "4CLfr4pEHuf9aXHGhBKixdgHvHPDE4jhAWWT9BxkfCcxwrufXPsRZbEGzZEFScbtu6GjegAWrR4dZ3AzrqxVUWnq",
  "key14": "M4vY3CghAJ5Daj8WsyWkknqreKEkZCQaFtnmhYwEqPAqabiX21e3ZLSqzsx7j1mKPKXdi3mM6NKPwUpMpkj5W6u",
  "key15": "3muLdtFR37apcTHHf2w11aBSwKiRw177CfNRTggBGetMsBHLw8HDTLww9QGPnaEY918sjJyBgWKVb8GNY7aaAvg4",
  "key16": "43HRfkjsXDEW6TcHEqi9L11JihAP2xFyPehHZVWhR6vrry4s3TGNwUgLoFyEVUmHTAbcPUvNrJd9jKZVwUCGfGgw",
  "key17": "2GxUqpQpM3bTMq2D3dduTPmSWuhk9HzYhV35FdcNUsLQqQ45gr1eXw8gvPKthGfEGtgkPChA8A9DcqjPJLMqEcqL",
  "key18": "5Kk4QCSzAFycgWLHNZfspvjWw88aU2JaPWzTk5RKVTMxwtyk6REE3siXna1nAjqe5hXByrPAjPziyEKZiyFm1XYN",
  "key19": "5BCrhKLnyB38RmAj2AyHx8EDpQdKVE9VwpHxTrFPiAKzEbAqSGEWT76y72MxD1xTK71rvSfjDRivLEmEDNnhja1E",
  "key20": "mqGQbu1Uyv3kgyttRqS8RnsThyCKrWpEXZLcjLsAkicP8q5JMtr9x5XGVSpFCTR9h9dGqWBC2VYeXVTXH7xnoru",
  "key21": "ibqHtnhDhRkNRPhes74CQc1nP56XZTFjLA5hE9jX4QNgiFN9mSU2KqaTujotgsWaZB618W3LNXZGCqN1zNUutGa",
  "key22": "3Woyu25MDVX9YkSygi2MRVTkckkJjkvyyxtKYjoRtGTY1R1puP4YU1u5HABsph1QzQJXHNJpchBDoyJ6L2eMX2eV",
  "key23": "29C1J11iAqFPy533rDSXAUZVwdkoTeHR8iSh2jKJdSXfiboTLXbwRv8CuTJd4QUbUYzootcRz8D3Ypx5GYGUMUqU",
  "key24": "5neUt1CqH4vaqmCNMQM8AomnV5tJP5QMjEtFteq8VrD9Wj5CjQhimpCzPscw73tAdghom1RHK2vHvJzL35QGH2Dd",
  "key25": "Bmy6EdFwcNmCKHxBuzVqGuFA12g7j4DuoEZ3TPT45fdGKaRsQG39Tz4yCVPZcksf5G1U4wJxk3rHG1UHYS6kwa9",
  "key26": "5kE4wmzngiavsy42tZvQZEhQQF3fs7YKsDTJyXpMkmVPqJhR7rqVrAT8ZUtSAb5dFCowEqfDbccvXccKgRMgzLWh",
  "key27": "5KWSLenMqXdBudn3YNSygo9E5bSuYQ5JwZpUDb4owQXFX4a1QLgXUh1eLvvLqz3amymJQvW1YeNeU3aASp3fdkgs",
  "key28": "5HG5jor11wtjmyyShKnHBKarxAH3jWrBXMseCtqovuXJy8X6FB6pwrDL5adTmTE8TMaMUmGSMCtupsVXnXUdycKi",
  "key29": "4LuKWP9bXAUUHf3GPRicobTFCYXSTFqHUHvVsYawoZt4iTopc3JR3dVzNCDdAC9stfW1vH42KodUv7Rree6VNWdW",
  "key30": "7NR3iL6JQMREqxNgX1NXqfR3smZkTczL1T7tKSrykwX3LSZaUP63YrJ2dcqzN43zUg5LWMHd2ZzPUWrgHaXNHQZ",
  "key31": "4scVotxibU5nKwny5U8CCAFtNwhp1WmhWjkbeEtBQzpbuUFRVsGpE5U2WVFDPu6etWYTviPWJDq8Hv7rNNsTcmfB",
  "key32": "25LgpS68sL6UAHgvd2xcc692MtxoiFNtyNumL1RKr3D1LXpa4JPJVhkMq1o11YkEyou8mLnNDV3mLwU74Q9iBxPe",
  "key33": "5ixb8a9rGTFgwwagU7yArEwGFaxSTijFvXpttXEu4C8kSpYT93s4hB3SgBW34eTKWYJUeB6UKcteWhSVx2XcxWk",
  "key34": "5KHk8157L5tMpNFU6ZfQcxkscgeQm4XY8Tbh28dSUfsbrzQWuR6vw5YtMoPKwDCf4FS96Wc62TVMuag9meoKKHj1",
  "key35": "4QwbP7yMffP9M9nXZgnU3iizY6jUtx1UgNTRtX3e9sNz72kqwuK8eJJqtNNUhBXHgDsgg7BTggyvhRDNARuWz6DL",
  "key36": "4R6wXhaoi3wv5h3nizaq8vFi6Y4v2o7e6m4wu6RdTSeo1stMvEFPyPCfXinGNJuTY5TXyrCnEL4SK1X91fEJdGEG",
  "key37": "2zoqNTFPhmiNMXgDiB8CscrFUJCZCFfZfzJ9v4gnkrWmcdsUMQDCdZbiLX1RdDYN5dXHetcQfBnvhT6oWU2ATwUW",
  "key38": "UWJXzZmxV7GuSgfPoGDgzQWG6L5wJFKNg3axB2dB5jsFN9Ke6ZH8zqPqFqUe4ibtQkZCmgb37RebQ3GViB4K5Fd"
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
