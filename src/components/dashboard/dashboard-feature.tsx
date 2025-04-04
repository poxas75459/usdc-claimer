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
    "M6HsE7QkWK2qpi7g5jefH3B3ttHsXQSw3GPum8ZGomaAG6ScF2YMNhQU41szXhugBD4FJ2tAaokioSWv54fC2kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GtaDG4zEX5zN8ajV3dXTdYcGDBkeUEELHjBDvM6KaHtK8HNUCiB3RR21Qic6nTmWaaho34yM3r58vKy8K2aY6NJ",
  "key1": "2HwhjwUoZx27tw7pYRjLndXsoNyYdSknaR81vMygfEMovFMstMUhLgJLaTFuqkWQFdbdkASFrbUdFuKAjrbrGUSw",
  "key2": "3HGUeXAmX7RYwk7zHYvrYXqTAQeun7cXvsCe5EoNcRmeNEfAidFRDc87ysE8SpXV7y3UVvT92fA19CZGW66QKStu",
  "key3": "4cNbhFfpve8rXtGF6tHy3iVRxRmbgQzKSgpc2XyvDZg4hgQzuyUf1kxAodvpvB8xPnfYc5K7Tpq3kD6HpFpyxjJs",
  "key4": "7UVcmERq7ndYgCxHeDStwDfkMg9Q8ZTDVsbh8EpZXg2ratdVmrTiXy2aHG5BU75fJPAhR64WuXXZRaNtQMHrBvc",
  "key5": "2rB1UjfFa6mq145yhhMzGpHDBvsiFMb1RpHZgSoofEdgBByYvCRKEMB1cCn3xgcgoCjnvrX4duGGFvebvEjXsajw",
  "key6": "62shzDivkspiBKTgS58BTDNvns7ZYhWTnZEQFawywUp82ix1RAs6Xh7C9L5g42pUeBrv8ps7PxWv1WLF3ERkbNks",
  "key7": "3quUfsFhcMCoNUBpWcWJgaFxGwExxMit7RMDxMABtWk6SWFvT29XEx1LeLy5fN5DaiRpPSUiy7nYZeTjp3cBTsM3",
  "key8": "3V7RdyKVpVLqqvDQuiCuQLXUCuCDdqgdXmyyhvE1wCrKKb88HgH1tG3gYLx34osok5caxJy2u9WTufdbXaQzpVzs",
  "key9": "JkmMYWro8KJ3AnWn4HpAs6HYkywdTxzizGS75fvaS7C8TxuUpcnu7L22PXH2n2dVAjWTEmeh8463RKdyHrjY61t",
  "key10": "28fvmYA8s9nTjYq3DVWQ7JXhcjHxR3rdjoqJFetj3mtoDBPufxnAB5rks8pVUmm62D3V3aGAaiZHgTtcs5Mwt8pk",
  "key11": "4WadDXwkSgCYDKcP6nAxNkgrCxggwVmxf56QK9j1vt8FrMMYew3eKgG1PWehW9Z8q5P7drB6uqeBybQhx6aeHv7",
  "key12": "5dnK4ZXqRHXcs3V2zn1fYpxBvrVxrn5PFtWLYca1As4XVigR8DvBfvsAhgaaKMyauGnPctixz8s45aGU49P8ZURA",
  "key13": "3eq26M7v3J7rZcLjXtUBCk3f4uBXQZ2RX8xyQ386KeJonh5MqtmqvUjo4YFvrz8UACQ22b9YoyJLecGs3GXksJMD",
  "key14": "2nugngYa57zaZHjxwyKdWMc4Zg68arCHjnUwtkkZUQw2828Hc4w5hakNGM2KLHoM4w7z9J9R9ekEiTYZMwgVDYFk",
  "key15": "2wEwhFqWf3e9Kc45y8usoEVUiZ1oRzxqcoJdEUcknSqSRGvY87UbHRS4eNzuFj4oGvQMTjxp273B3QTqdEA1RXmc",
  "key16": "2sQxEHc21KSZdvcDquejUzNuc1qDy8mfpqgoshKS6nr2oatRufEZKATsAGVgs17WmNTA7EpP6gSvD5nrxTDSKBpT",
  "key17": "2B959oZLJWdsiGAgGQfpc1vCKw8ePA4zY4ZMa8J1QBcy5e5S29mLVAhxRCxscsrxEpcGFgnygkb1cpgoRBun8byR",
  "key18": "2CszTtKqiSKs4msNgbBhP1YWX4WNuyibBkz1e1DxWLcFGUxUL6P5UQ4cFce9ueihvRZyZFEjfpQYvGqqHZB6jAXe",
  "key19": "3muc5ATQNT86CXZmnsfEUaKs3uvNCf5F4bZWyC26L166CouN8reX4qyAiSnGarHtDKVM8mmpuZxUKoVxafe2j4W4",
  "key20": "52f1vTzKwBVBf6GMGqoQhdVo4GntXs5uZAZ5JTcAdJp8PxGd8PAhzGQAUBcZXe6Tr2QaETwQkEpSRZbE2q9XRL9m",
  "key21": "gdv6a7ix7gkeAyB9L1vLNKDn1HyFQsFiZoxoncRo53VrQVhAe6GRtwjsk2VJn5yXyyrv3z5xSrtJRd7inTUMFNX",
  "key22": "tWh9e5fHdgYDPYiHxkQGJk5GFHsA8YEzerpMW4zbUyxvrDy1sGr17t9C7J4jPLBSVLbJXLNjFzBdgzCczRxAtG1",
  "key23": "DTsroXUKY21Jsoui9YBNGpupvdJAQaZWptQHNZLLrdSuC7i4ca3bQ2xzSbnQbrJ55aQugxznuV723KG9Zmxv6e9",
  "key24": "5XdBXUMmjYbWMc2jhPqbJ5yXK4hnN9EScHY27GrvsfMdZmowfmsAiX4qjMBnvcceFJCnCwMbLB9FTFDJkyc2V6Mp",
  "key25": "3JKy4wWYgaiQSNULWADeVGJ7KqgxJftYrXZmVQDh8xqQVRKmnkNtJXvznGYdjTCKDnwTjKHvqdzuPWQ3CdREUzdH",
  "key26": "25Tz8iwkUC9xXcqNw21aJYfVMLkUtNuTUJfe52EjeNYUVgdFrPRuXCHqoDRtW7YzDQ9jbKpP94mBjo9PdU3TBYcE",
  "key27": "4FnRH4ibwatpHjpJADWLTw2hqvUVZzc2T4uXN9BwpBnBK9bT9TzZPw6p2X6Jh982RVi3eLTt9g3i9rK1gXzv4Q6Y",
  "key28": "2MJn5MrRYSVDbpRxnDtCknkQrK4WbVr7a1f1NGyYmzn6FSnZMdKCAyyxif1ZfxzQw7J3Y5q1QYNczj3SS2WEfnmf",
  "key29": "4HUiMxy5m6ZZmKpVojNkVFxZBKw2rpwNYNENw34Vgy7XirrDt9Rb8PEifSZNkKdTgNw1jUf7T9P59qgXNjVZzenf",
  "key30": "2DBryvsjDcLLV9EDJL1qNtQpU7ZhgQt9XbKgZXXphE2sUZWEcCLtvWsHCHEm7dAvbaZqYHrDF8TLpjDejL9tu5xt",
  "key31": "52TF7wUfiBcKGhqKoeTuqkcp9zFpdyq8TWgJzEA85JNh8Yxs6HCi4pZQZEZhpuUijLKWbDwMoXwpiVnddPu7CjwG",
  "key32": "23WKn8Rv89GrsFFWYxMMiccFibpbo88QdjGEnLEYMpJupr31fa7vR7LATnMm9RwYU1dQncThTEzSi4JGCXJJY25k",
  "key33": "PwZTDZ7T2LUwQLDrrQ3QFQhXbcSFBtQH9XmurVspZpTAhx37poD84Gh9e7GmaWpb7dhYFDZFtdwtXQkjszvGNWX",
  "key34": "41mBdMoP33ktYjZzLDgVUhT8JuyhqMZyaF3nzZHtD1nH7oghXq6J2JjfyNsNHfJJad5XdrF9TUicnH7JyCiXiisc",
  "key35": "xFCwv15QGBuy3qRgEWkrFkM3RLf4ipP6EiiJaFPmNWNVjVKVNNcVYZAdKBepF2NAYJo6LaVoyRwCrw5Q1h3jhYU",
  "key36": "2bFxENpryUvjT8TcA92fmdHMPm3BZc8GHgUkzURMp6j26CnNPXkTt9WvjPxvJJc8hD1rBXFciDZC4akGKqvtMYfv",
  "key37": "2FCEzPDa3EgWDVt1r5H7h8xqCUvnmmfjqS2AKFxQLvEptb4ixF1xVPUkG4sjWdUDd2XPdcAhKpirjWwcY7FU6HvF",
  "key38": "29qg9HJYmxxve5V1wHgqUyUv5vprRwb4xgjb3o57UkbskwqbxG1mjYcwPtHiDXeZCHGHme8KPqq3L8TfiCsTmvJK",
  "key39": "8w4dSnQrR1nLfS4og2cXHE1qzSCXPXEiMt89mmuuAb17Zkmjv6RaPmHJmJkbB6NUGqcqHZZUzVB4DKRoLNKjVsX"
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
