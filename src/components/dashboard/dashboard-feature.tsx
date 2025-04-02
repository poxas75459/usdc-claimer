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
    "2PXdsZj98BBiWNck5FqjNEhgaU2x7fZUera81dbbvrphgiM2oyRRWfd6YUvYsoaMLoxUGEv3HURBDSusC32h1WhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CH4XmR7psTXT2kKrztN3DUZD3pLwyTQEeDBEwZ3CbrxaT9Rxwn1hk2Xt2JjbjzjpPLk864gdiTWhp1JqhEHGh4S",
  "key1": "4tygQGEYo8R5JWrazdKmamHCxBePRA3ygrbjQ4kMv6annRKx5X7b7h8yQXd9LVqXF3Ett52dw1uX4yprSYbkXBk9",
  "key2": "2TQf7PUmEMkPnuamqLoJJUqC3kucn9nBUbqakHDAGMvWNohcYEmiPJv2s5rWLBGSNQUZ6Mj3XSUAVuCxrGveT7Jr",
  "key3": "3feqRTQk6mB7D1PzgjvNGxQDdXwriKeWpkpocv9Ned1vCk5SkNb4kEZ9gCpaYyrF6p1QUaATpb7BZ477Sezvnd3h",
  "key4": "5U6TaE9KZN3ThPdXmWLoEwjhzJJinhWc6hpHQA9Jqu6actGhoULH35CNzxuSoh5bZwSY27PBnmCdB8FnmmMKQN4L",
  "key5": "4aUxG283sXMEf1npcBpcPv268H2mWAjRC3c4nMCrnCQGdL4ZhaCXe8YzSuQXu5PvfegoXHArefM4qxzGXFApPE97",
  "key6": "4NT1zM3Xpkf68iefRokD4Z8ZdBWb5ZerHVp7c1X8mLQQboYcu9gwrZ1saRhb7kt8U8TSuGLxrFifpV7PHw83wVg2",
  "key7": "ugTRjqPLPPPjYLXfzPihLWTNcBWgrJ5KcCegzVgCJeioSfdGHCf2hhcawzKjYUivaGgE6VaHUmtfj6Rr8ERCsRM",
  "key8": "2jvSrJ4waBjJpCmJjhLqJbAVy2fFMXeVcM5B5FzVYPNcNbf29TunmvZUiCYUZyDBVXKM16KGs7W1SsiGNiE52KjX",
  "key9": "3kcaQb1AYAxEabSK2Ev4DV8yXH6j8hqqwk8QLBd18HnGiwCJNBPmwSZW82KYqp1AdyvC7Dj1xR1RvWcUytkUtysC",
  "key10": "DKZtjXrNt2YSsphY2Y4qy92sjoByioMua9Ln4swsAeZMGk492ybC4nefwqw1K2b7d1YvsUZRcHQkJAomVSmf7g5",
  "key11": "5pZ5vpyLyePPCiPzkhqgYc2wHjCFD2xMzvshL4AP5ZFJTjYeP3MTPFzu4wn6H248zPxHjpFc3A953ZT5GYrN1fdv",
  "key12": "4GPvBf2XNVSAzbTSwxSJUTaecowUGi8WTszeyKCfsxtKBYvQQiQLzzV9K4LkV4votXp1vuZZzsdtngq9hjzBYZur",
  "key13": "2tGA6ADKRgP6fvYycjDvdVFhet3DwWS9EVRre7tyAvkhXTdj1BSCX2buxdYdkp8fY8mtttSCmEkipQmasjpBqnxA",
  "key14": "3okWd3Ww4krzTFbENPHELmbDBCkTK6ywzUaPzAo9Yoq2B7NerKQJmYdAyg3o2SZXE4owq2etWDqQeewBcmVqTqCU",
  "key15": "4rSdjD2eVGfXaVk2L2KEKhHostc2YZZuQah2WqdWQY2rm1ZifmSF2n6QAwy4mL3LSoF4GFkXoc1t7Y7xfNGyokgq",
  "key16": "Ft147WT4jdVVdn6GhmQXJ2vHPw5xbaPGPvdA8FTg5X81QJuV3JANh57HShfugGtMGqMWGH94ymnTwip5ETqGweP",
  "key17": "3C91NAH1RBjK78dtYz7ZRdcVtcdKSm55Jwm2JATPPa6u1LdN2L2qhyCdwk9rdUVaxqZgaxNMTaMxjmfJTp1V57wJ",
  "key18": "2wxziJ5PtBdw7HmdiWhFN9kz7UsShMuc9YJiNmLcBxrHTAxcT9NQN5CykaguEo5ehxE7ZNJJm7MyAFKiNcYC5hEL",
  "key19": "5HPfMrpXbrgfPUJaA7Qjnmf4yabRhTMvuiuQZELhC8AFq5yfJjNVF9aLw7hRH8o39whb44MJUSU5r9w3VjEAMeEz",
  "key20": "5VGRoYBsQ1HzqhgoBeFkYWeuyYXvGpFobexFJsfUXUY5baYS6uzGziedHRATXUi5Skkp1TrAEksy4QTfz9xhEYYg",
  "key21": "4kY4Z1G5igF5xZjyWdGdPuBBZU7PKBHHtzKBHzdHYB3fNxdSTk4pAGZzcekFtubRTEbpbWqYkzKgVMjREBT8yKrV",
  "key22": "5ykHhMr7baEv4xMuyCNfKnUeU3gC937jcdcM7PbML9sG5vVs8SqNvNZXzzfcySJxebrUmDo7mtB9UBGua7u9Mou5",
  "key23": "49cQ44VYFYxTMiBK1qbzWb5BRNktfCEmQ4HAQ71CJvGYteeH4zXpK8ZRSUTWq25Lk5x2yFXoF72BDgAASnD9YXhy",
  "key24": "3SFy9CVYwe4GiGqkYJmiborqLXzGHgodxXs1tZQfEdXD5n2wNtrvkADkJK5E4tQ2VxRMHaJpDKjkaovEQp9fEj7X",
  "key25": "5HktRX5RqpZFykwPRzUeWj4bDjQiiRAnH4dHJeTePzrfJnJh93msfgh6hVWZrSQ6JUheMJ1aY3V8NqUuDyh8W4WK",
  "key26": "2BTjQfVrNgfoiJJipzLKvDZLDn4rG3Gy3JS4LfsDhHFFXkHAGPw9PJN6K7NXeQqjb4fZ1DXh3qvNRrS8VTVmTViP",
  "key27": "3DDS1atb6n5a9aBZMGhCSczir3xUQ27YTvxZ5xZW5s5sEPuRuWuK5rm79k7u4pqjCLFHXY1EFdfASnS3UMCSzdS3",
  "key28": "2RrAzW18M5QeZ5PP73XiUCAifsWvK26FTeXfmFS9pfcuSUiFRJMkNETxNPDKLSn1Hp1JnTWG1uYfnkXcWWo9c1NK",
  "key29": "3sCnvxYkxnEuQzzv3BB3bDKsXhkx1Je4ZrGr2R5bjtZbtgy8GhGugTUwkC981stRNa9kM4YSfktRcLJaXfvPLUPA",
  "key30": "4H3JLyyM2WNRTHR7H3JChtNwJcUDqsN23ao9v1nCCQTdERdGYAph5sQzSW1gwhoZ3E52GfDGRN3Et78TtRZCLTyD",
  "key31": "4uXf95DAj24rAQgxXPQd54MhiVYLQRvTJ342MNitt5KGMbwuZBJSRaCKueZisZqqVeLRAPMH7ajSqnM7MTEewsJJ",
  "key32": "2a6nACBNPULdYXQWB5aC1CN6M8E9wQvExUkmDSyGY3o63nZpoc3tL9ATFP78EsHbxLbgFhvsEaXf6pm7rGruvU3Z",
  "key33": "46uySAVm16fGavqmCrBPR3ismd2HC666DfT9Vo4eTVn712zQ6nY5zvbWwYnMbHaJHux9F3ueTgRQ2N5bHgJLVF9k",
  "key34": "5ikYp2hRW7MYxB9QZC75vXkc73uaxHtDyvzcHUjyusUdP3Cezcv65Uszp2ccUqC4HwhNCBDJJNjmn4T7DEGs5v6L",
  "key35": "3DWo4EtFGyu6tosGjn5yfEg2DGft7q73VhUB8TyB8oqHoFSnZ2REVKgcm5RQvxrnTZm7BtYg13xsx9hTPZxBYcTQ",
  "key36": "JsNZZrnr8YSqibzG4YqXeB2aaUQPZ4adJGXtZLh8TphPk6dg6UAY8U9WU8tZaJyRdbLszkukhJChTjbCLM64cE3",
  "key37": "basphXGqCmNHzR1SXuQxssjsCd8mtdGvJjLNAg9MSsMu65EhSSHBuuJ9ZjezNApcZADysSxrDPU9mqKdsWkNVjN"
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
