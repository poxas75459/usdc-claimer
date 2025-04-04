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
    "3W56bPHGmsS5yWjrGhzcrsVvhW59fpaQpJFRPhbg8orSuqENKFS217akyXBTSJK2h5hWi6jN8eC2HDgBLPkTUm38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sh9wHTfUHfAYvwjq8iSmjGr3yhpA44jNQT5ep4ehLbrwSGCyv4r1JLUs1obSKBfKBFEh93fUnoXrZDbvEP9tgex",
  "key1": "5EiixHkm5uS5K9TCjxfZJVfkwZfigrsafJ8y2Zmzbo5RLK9QsrZfMx8JETXygD7HzEx9F5ny7VDvbof7iNn7d21G",
  "key2": "5bTANeg6YSYgUKFJdj8hYy3pE87aPmcwEKUsnP9wAwfBsCJBcYkNtEMWgxp6aebLVaJo32FNfcDhQRTwY3nixkwf",
  "key3": "4j8mPP8kJrbKmE36ZvQ2xPb1VW5BjnNvWqyjfxy1NVRdi8a7FoyqqSJLvyjFMJGL2dsvPA6TsorwKw4hVKLjEB3z",
  "key4": "QuWvY7fsj7mU9jiQVfAZEJraszsFHGsi4oneVQ1figZi8dWQQQubgG37MxLsKbZonS75nDz9AkcirpMxdvyVuR2",
  "key5": "GseidxMSSUnqMNxphWrHXYLJ1FH2pu58k6sL9cLc9X28LHzhVTTxSqjPgUTJ35Hpux4griJgm8c5tZ7UEK8xhjD",
  "key6": "3DAtLmV6kodxTd7Gp4qMz7iTZsqtFHLZwTeqUaDtyxUSDVP6u18mR9f97YA7c6FYD2UTH71wS5BMDG2XEJeipkB6",
  "key7": "4bURfRuGkPz21QUY8BGKAQ7FCgsyaU3NMGpjgGNyzyav2K5zEN38GWVpZ1ysdFGazyMqN9ddddxVH6FhLZ29JAai",
  "key8": "5NwG9mU9J1XQUhWGXd8HzdjYMPRakSb4S2fKsRXMRToZvhMYfZNXkX1bWDJv6c7rxy48JQNT9A1GdfKFTYNgLcj7",
  "key9": "4oZoU68ZBksnkfgRtf9RwgxujoRMEPt6eNhjxDF3PqRKZBxc8yfavUbegW77WwAUQTWqH1ajiKdxnmSEk7LTJ3ne",
  "key10": "gjLvrConqRprcuQsC1RhJ5B5E7gzzESdEpYU3T5ia6c1znRy4Z4scCwfFYvDSVuFa1johK9Ut9Astk7aWffqvC4",
  "key11": "3LAUReZzdaGdkK1e3t3BQ8gPMEME1jTjfay8dmpQoG9En84WeGkeekBmhov2CHHoM3djpEZJdAa5FmbwmZ4FCuzj",
  "key12": "2hbordrs6oFfGP8Q1i4z5aGvPvfVz8HNikzr1ECnHCsycMFwsiNY8KixWrZg3QpwgFoqrcE54o6FKj5BHN7uJJbv",
  "key13": "5kEKs5JvWe1aYCY3RvV9iVTbbPGFWPxMGM9GfEz9VaLAuYRz1NGQJFb7wz7JJPD1QYDC2HnpQ1v3i8kQix5TGd1u",
  "key14": "3rCDRzfhgSVJgBtsppkvtcVh3LWdkWUfyfnzoog3awhJoMsg42iAbz4zDhYtnZMQrSmsw5kpcLMKptKxLbmyy7bK",
  "key15": "Q8eiq22kr5L2EG9644bLd2Nss4XcThydys9Da4dE1kHNcnYM3fd1umXfK5D1TFdtrEddqYgX5atMUTbFXb8YuAT",
  "key16": "4uJgj7e4jgmCDC6PKc3qNca86J2Hr1i6TV43JKBdwsVn7aPtYfuessePQs29CzNTCcVfmD5eQm3Th6SrRAhVov4E",
  "key17": "58CwvMhzknKbPhqNXQRqokF8x4dDBcvzY7YikkbqUB9mRRbbXXx1ccStcotBnRDmeNtaeTw2ruvi31uFLcWecBCX",
  "key18": "3j7QtQNSkbkP7PYb9crmY8ySV2RTqMcX4C45vU52fbfHwjA8reGYz5MVpysq8DmZ7vbQ2foe8x9eRHxS8YQeYBMS",
  "key19": "ss3nzCkbtQRMKGAxbTaDUC4sY4LobQCcZh9DKjtNBaVjPxReH89vYnh4seinvmfCjydDysGkUJubCS2zUwPoaXA",
  "key20": "2dydjLpSA8HDAcEyNWcQwozkMT1oBjUt9rSrDerVJPw68Vb5VQdFFFGKTNBY2PfALo4Ej7Hf3VxW1baik82HdSAk",
  "key21": "5z8ZM4RPakS9bpENKP4wTBackQ3XUuMKsmXDWmZu6ru5Wa8F5phgCVnWpY28wuh7qBFNZKVUJQyz1eKV8axranHb",
  "key22": "2inoEKm4jDqNhJdCZAtq4QRimWKY6GKq2Ev7MvhzYefhEKrmszNdtuLE2cw1jj24HoKGhzxFjCgXMhj1XYkUAfFz",
  "key23": "2tsHSKetUhjcLC1mcV3kR9ioSKsf9tTYnui3pcWXCDSEx6PoAodnTifSwvDbvie1a8oRUipFdNT2NriuL249wWqt",
  "key24": "5vewXTCWuKKjcGEGHBwZV88WBrrH7Uh2jj7JkcqpBAYm9A7JqM4xt7maseuo5XM4dz8g4EZkfkSmzgqgiUMbZRRw",
  "key25": "4Cc31QifWfiuJetqPsdJBsWxje7pwMwZ13yivTo9raqn6EEV33vPbBU66QVCPhQbTRqxQQ2496XzrAPojKHG7JY9",
  "key26": "YtBK86LRo7N3wV9k3QNeq38TgpGdD1b8xnrkxWxCR4SqanWoWfRCkp8AeMRjrnTWiU8HUzuBuovec7tpZxXBW8y",
  "key27": "5F5NS5EwitTwQUxM9K1iFnjDPwQ8xDmBw6iXXx1AvqaLHf4pNgDkitroULbNjA2FdrWfD3GibEJuHVtwSU8JVt9U",
  "key28": "4WRbVBsukF1FdT473SvJtS5jwdW45cvA3mpJS4Yh2tcmALr46oz6aUJJeTqNiGXtdAQyJrEfSU3EiWDXJiS97ftD",
  "key29": "LrPjbVBXi6q5fkES29FuW48J64suC5ExYDxn3m2HcWap1KE2ssBNZE2Eg3oESjv9FVqo9MktaUsy88QmCymDGfM",
  "key30": "2oGSBiLPC7jpNKGvsDc6m6ugnvHz4MK5LGuvUZZEmEZs9ka2s6hKtXd5XEfKt1JnZUKLtZJM7b3JwK5u6JNw5JGq",
  "key31": "2GCtreKJ4v1hrwWhhCpexUnfo2dufAw8mWWFWyeesJpWRN9KrsPs5KyDA51XUyc3p8fHS2HU41MHHMppg2gDXomA",
  "key32": "VWfpb2X1DLU6ykEV7mLRkuTRjWoojoxtacX66BR1VZSSFom8ZTZYeeKhkhLud16ni3TAVkmJzYFUgPoY91AwfTy",
  "key33": "XaYyrF77iuWs7Db3DR2jFZD3rHNuE8ZPMzw8jxRfXguqceDsuknyVjsDzx2SbQna4M3VN8hH2L7gqmAck2ACXT9",
  "key34": "2arshFDLj5ssDAdMRUQvAZMN9XptvR2dbWehFyjLwLxhWEi8JubJRGM6hGtoZNL7v9C2SrjmJKt6ZdzpCnPNfCFH",
  "key35": "5uaXBrWwEaprzqNKYrnY8N6xYbvASDKp2ETCLEHou67t3bTmJSc4J7iEjw2dk77WVckAhKBTjnkCUdh7kToj6qhK",
  "key36": "3WZgJr4MaQp4QpDUJH2dvkWLfMwiGupwL1fucNw1Ws7UWNkSdUjcpoLUmX7NQbFKuXv7c5T9U2ZuaBzkXUDT2Pc3",
  "key37": "5U68C9RFddUQwRpJEtGF6fr7CB3oxaxzbTm2L3D836uoiUoMNzYm9cBiyqdUP9MsdLQCQtQRqpMTqdeBBRDQnqRf",
  "key38": "UBXFpKHzwskVfsXdoqRWvBT7Gv21QK7Ty9xokQrWbd16iKxZ62iKcynmX5Pxga2KgDWeKWPUjCkbAXDzU3o7CVv",
  "key39": "5FZzHsAbTBK1tdJf2VgurRZb1AnYcqkHaAiY74Fmx79GhY2bhiKnZQh5c7zPUrMji3pQ9LwanrXjMpQyzkDYgL2Z",
  "key40": "2y8rmyA5tfX1R8DH7EeX2oSiZTw49VHF7TAMTUzYPNudYHnU8wDAr8zYobGEfM8H7XmwKkBFyFyUnYiDosaRNpbu",
  "key41": "2MCok9Hyf1dV3616SBP6rb6nfrN9z3JZ8uDgir7Yfjgk73oq2nJHn69kwzik4eGEo3jQwXZrdWzA76ida7L6pxG",
  "key42": "2SHTcUhphRUJGurDz2F4U9QY3S2nCVeJZWp4xYHmDSw2KabLiYBACYm6YkXib7wpjSjizyJNRqdbHeH7F6DaCPUN",
  "key43": "5dhg6KEWVhN5aVAMi1Ljct6w1qS4b3EnVAe4vwAxrYRa1Qa2wnUgHHcorp6MkhLh4Hyy5p2NXu5D3eNAb4ihyKbe",
  "key44": "2shFKZXr5szMWgdRAQeQwhFCU3MzRqRJUkSp8hgwysPrekdqex9i64uWvfKvwhwQ3nUUZNP4Qwn6kxJgXebZrJCa",
  "key45": "3RA5qwvsAsBsehD3JdHr3keX8tF56EUM4vBtCcMJU4GJ7cayKH1ZXRgs1KnpHWiVQzzpuAsJG34YxJNcMTTo4SQt",
  "key46": "59xcqkC9bYqtbje5YkKEYPNJbjG32NKRdXf4gJ7HL6Y3ZxBw9nigP4SY199aHScMt1kZzvGRMu8cVwtfqeiCyjv1"
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
