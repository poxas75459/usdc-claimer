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
    "LrTjUo5xzn7KGXAqnAKk19XHFqZcHJYcSrRo2AALtnkgRXKBH7LJeGqSrGLp3cuciXi7RTzn8hYDcbLWpaJwgnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D36WDw2biMa8Zpiq4xUwL4Wv74koY4kBr8LMNyYqt8gJ6Zwj3KQXedu1T1WbH1HZVz8LaSmX7ZKjR1YvEWsSoyK",
  "key1": "3NGV5QnhygPv6H6y2vYWtPyoNFYVNHf5e8dLR7ZJsBvtSi9Uq43UWbNhsUmC34K2GQTJPJDy3wCp7cAawLhd3NRS",
  "key2": "2vc5gnQU9BVD3efpXnqZPmiAw6bsCRqgAFbSFo7vY9raVJy9w7Do7cWDhmzyGvBQNj6K6rLLr7wgrX4P1VwaWdhW",
  "key3": "2kzeAAPUFT8LdsrixniNcpwR9QChkUKCcAVPhYwEijj7qEwgz6zcvZKsp7zu3S8isQgvhMdEWu7pCZ3Bf87vd6Pr",
  "key4": "4yrnDXGFKtoGpo8WrffaqXtzjmkw5LrutqeJJojb5UoAquEYVnisJESrCB3EyqPsiqZFx4LyynqUqLG9e1EykJT5",
  "key5": "2F8DiQRGdjdhSuUoJ1i53AJbkgULuB8LcQd8qFGB3wVzxu2SGaTioQHbfqaPns6eocgTcvuMamNjjbuoey9Kw4dw",
  "key6": "3mwL24BzNWyDrAgNceEVZKrXhEm7uT4Q1ct4kJwdgrosQ34LVpXBPs7U6YEMPKrwyCQTdiseaaARm3L1SKneG4uk",
  "key7": "3nfZYxvvedm3tfvR4mvuUEpzibo4AT8UvtFMjhwhQ7PpSYLzzLxN2thTEpnhgmN1y9wi591m3rCvktvEMpkKALz7",
  "key8": "ifbmgneRBYDUgm3xQjGDNgnLHSg5ZiHQYisV81RzHGmLTzNPaYTfmNSsLwVTAdUmsdGsRXfZccJ5VSJCawhmYmg",
  "key9": "4QfHfEjb4PX8pqVpn6f9qAcJKoz7Eg4RRQGFNmsbsndJmkotf5c4RFM7fkyh8MbfQDA4xe3VjBrqidG9wLYdGrQc",
  "key10": "2KpM5AGprEYjqjkspiR2ScChkvBVDWfYM51ADKKAvkGzpzMqeECLxRovtRDN4shCf5KHGDJdELCEHPt7gACFqikK",
  "key11": "5ytQgfpiPSLDtrEUQS4giGR6kEjYY5oCspFkbd8UjQDocMQ93NNz8j1Sr8YWe5qvdJbg7NFwEKwTzs8tuiTNemit",
  "key12": "MbwhKuAAb767zVD5Nk1TpsiDBt2gwpvt4mj3cqBpxxHJtrdPsAmp5BrL7z8yaumxSSDnpmodUpPBgDqyCJj3kuS",
  "key13": "D6QETR2F86YATk4axpuGqh9gZnsjJ8ZbcdtpbG2tXJE1GcqWxemT4nPH7fZ9YAMK3QX9p7NfPmwhbKcyaAhbti3",
  "key14": "5QTsKRmZN4veUwjAXLau45KsDxLfgY2dRkhnziU6ukZ4wkUyj93LYEPKt6KkT7Jsn4F8JL3XhaqDv18sASpK9TCw",
  "key15": "2id5LitDUdCfHBCSoAWsT58bSox3kiqsyqLjUeqbVhy6zoFEpjoxR5MG4aEVXm8PrnmTcMwf1gNEUVqZ6gn8L3un",
  "key16": "2618DTZVwar4oaZVQMYnDDpWf7YWRYFFwURUTPYeW9ygQ4w7sf7eHr5AC5eWBkgDdpGA8BkFJzZNHUzvaCQETT18",
  "key17": "5xTTPxUEfGk9A5stgRZCe6skWeGjfJuEtExNFn2p1wbbW8fRtEVrpW1wygq3NSALL4HzJxtXZunvsBho3kxB5vrw",
  "key18": "4TFyBJJxYjUTTrv83R3QrbRqg1aSyVbXPRrB7ML5NxaL5iVgVAJKcBmm71S5hmTXGWpPyvBmefzxvwUdVaTcvLFh",
  "key19": "3eyLuM1MoG9fbf7Lk3ewqXFLMsj95cxddv3dKcoB1N5YtdE9x6zfQMqr92U3wq6tUV39YgvQLF8L6gQ2yv4zdatC",
  "key20": "62MdXvAPWkGE2785FUtPU3nyWm54w7Gj5Qvn5W9SiU9J8kyPsaL1jk2US4tqhUKoi24ocifkeQLZnsgRanFaWHd5",
  "key21": "41jxVG5H6MeVPLDE3GQiU3ZzU6oXdAJMWeGf4eRs9ytv6nmukxDbzWHH7yULrvaDUsNc7JbXTcWGayELwnGr8hgT",
  "key22": "3PJB6YQn4Woi8Pe3TrA4y8Q5zUxebLv64kP3vHNKnDcpD4WtH9nGz6sAX9ukxgt15dVX1paAujZLQTgXXvCG1BvH",
  "key23": "2Fg82yjdaVSg7mGzBXnecfrkVnHbCVyuoiG5KVWsExbnxfrivzDoqRaj9hmTKDRJLi9xtYfvZNbzBWBocYoqDGEg",
  "key24": "3DSBrC2j9UioAZd3SgtLa8g9EezmSPBVJ8as5K672tSyB6q3iZHmoPgEWbnN2eCcEBhF1iZrKTVZh7RWhqJp7jtz",
  "key25": "5wEBAznZ2RoajoNL9xdowDeWcph6KhWCoG2Mcqk7Bays9dZGkmd6aBrJJt4k1a1ymKpmWQarr3pksyGtFDsUe1Gh",
  "key26": "53frCTHHDEPAyNmXweiqJiExZd4mMbo4vDHdVJxRbJWHKcxrZWixtXdD9TUPrDoxmjrswGvoMAuxqJb8Cj4KYKcX",
  "key27": "22dvPAVwEtw2FrmphmyctWErggbj746zNM34tW1QHuLjdUgR3W3YJfGinC6NFw7jZjYqWqCjCeXuWBU1BGK2z3Q8",
  "key28": "2KHannfdMdBRcj7xmcF6bxzLvGKewuqXgaAeqcqPAS4v8vDDR2W22Ygo6HsMqHCEMLpF4n4GmFJzTTGqb6LhxhQ6",
  "key29": "3UcihgFuFumyAzJNYY9hxBfNhAoA5ALnPjpJrf3F7evHgJqL1DoXaimYf2yez1bawUivFVwq6AprTQdsZngLJRHL",
  "key30": "4ZnDWdqvRrcG1BqHkkQ1XBBdM8iRvAJkkUZHp6PwGkUehSeqgTA6Yy87Qkn8gDSzeSPpyuTagqDhuo255eNm2ypr",
  "key31": "5y3Xb9kiTxuYhd4PaVLi7Cyj45jMPUcjTrU8wVKKmk8sPAjWH1PGznnsPnfArwr8NhZZ7j1XGnGxccyLevJFcCzr",
  "key32": "38kiiqPaH6dg1zVqxumTaDC2V113PeBb3Q3T1MCoXVpe1vxH3T2bVJYC7G7GGyZM4g8NVAhfLaW8iKBzHgKG2C1i",
  "key33": "wv4cBbLQnKCGpcFKZTzoiVXwBojwstXovi16xbTr1DwnAy6JJ2Yn3F7ygaifi3NCD158XJyBqR7J6fcodmFd3CQ",
  "key34": "2Yda2dgYVa9euqCVc6mCsaXRwR1FsVZLL3jtHPh1zyW5DoaEJrgmaKAMg5NgWnQPVVWk97RJXLNTWxSUHVwhjfpj",
  "key35": "51C8UnazgZcycHMhgtY4tPnpQdGqJ2hk1j7xPGZ1rDT3X8zUn9BYwyGL6tZAuxaZkWCM4qXuV1uknJMTD7RjAFki",
  "key36": "26WT9XQVZWia5zLbGkR6symyW7b9zqwYrzDZzkZMbWYAqszEXnJwFMVNm9dCDRk4gQzHyfvDcGqU8kRGJEtPR6oJ",
  "key37": "3jQrVk6ifC6PBBBVnr16LAhkL4UqgnaGzhBSuQxoWgNpDWfxL5Npct1uwrthJKjt9uDJZgUxZ3e4ae9VHBY8iQsB",
  "key38": "4g1bxL4UDPAnjijU6UZnD49AVSLZdUhkQqgQfHFhPb6rQQrUREkkeSEhznpNdvrEa4qcQ9b387VwrydjojweFU7y",
  "key39": "5PECMXG6CyReawFgYGBkEr57PTWhQR5LwDFMd5gQaMCVuxmcSqwj7yJiAYNza4CmV8JFzVnLb8VGYsBMhQaUwMEv",
  "key40": "3aKxTK7crhbHkP6sQsdFEBqhaGggreqWiupbcSzXCadDvjN7XMqi65LTDrMLVUyaMN7MatA2pspuRUdzUC1jEJK6",
  "key41": "4HVfyoij9JTAejqwYhUnTfFbWXQtsWVL5ACeFssUw6zAXcYYAPf5QpcRTuLw6LRsLjWAizERUUoSXDG3UELmc4Yr",
  "key42": "4iuaQFkPTPCSSQgiMjUwtXAsQZg7iYLpF99FuXRAuVvG3qzvS7gK9iszmcH2X9umrSCNMBwdU7HrUgfjmAk7Lsg5",
  "key43": "59PRshg4itsyUjpgFuJQJQ4hZUuVZ7L4otaRVMSKX2yqdVvAzja7YcxSFVop8mTvKwzCUv46TePE49YAioCKxheb",
  "key44": "4LwdUdMHRPB91mXSef7Pzw52cVYLBzN7yjZ2bTxTJeKhFgu4u3SiAGZuk1cmRUT38ejseU1PRy2sbGqVjJUBe8ep",
  "key45": "2pbc7kCXYKoxnnemnzfbZ1ERCG6VijirA5DUSq4BduhdPTAf9jqzyDJo2hfAXi6suvBqbnbShkgCCt9oqkGTceKa"
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
