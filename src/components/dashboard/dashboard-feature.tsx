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
    "3AMCW9cfNfGD6Eu6Bdh6L4mNCcjsVgJZu5ozG6CVqf8h7FtLgXtYmMAqzrydwm8PXrK83ya9YJ4EtnEhh8rBekfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T9ihSR7uitTgd3J26KyWJf3HZvP8Dmrbco1ENZPGCdeVYjKL43C7G5c2YB7YxSk8JMkR81tcjUgUYEUJcEQ8NA1",
  "key1": "3DZpXTkVQdZNW2P93EbiDynLhouLgEFfTGLWYyJsUEgb1k1F8zhLZhHVvDYb7HveYq119RG8d62iXMHx9SVxvjnQ",
  "key2": "5udfesme1MsdwkHdDXEJbPN3eWFpYfbCzj6Rf7tPPgrZVJYxY1wFsv3j3UE62bC5Lg2RVsZkfbWRRRdScgDr2CNy",
  "key3": "PtnbpXYgvJf2Ktd1nAFJyDNXnJf4wGMpvQ6pd4U7ku7uHNi86FvBKbSZsNSH4Xx8JPvbcojZpgBZXqWY16S25GC",
  "key4": "2o8tJRz8B4gAVo79KTwdsmJaNkGGusM188pjB9yxdEDwJQkpihxNNFBLRPawcoqqnqvBQqTXGevejrNFrV5rkyTb",
  "key5": "5Q3FjDFUK6DPDM5C5TxpKQ6AYE1SP6vjtgu6LjpA2AwGiBpjtxtvvvtQ9fEPvgZ8mALf7TgbRqzVg15RwPUNbyZi",
  "key6": "svNAyKLgHPbXJ9a9Y6wmaX2xpBjfFwagQ8R3ivJzDViW64NnbDu13dp9JzHaUaaLwFdiimhMBb64Nnn7AfQvpDc",
  "key7": "35g8fBRaRUDnEeLc3Br1hKq2vDY7AUhC2yenwGLAZg8VcUbbZCAhhFifzGaVZLaoapQ7p9uzQVfk3523gsMWykTh",
  "key8": "4tZqcyFj2p1QYKMbx3jx8BGRA1RhzK4yD4YQs4ALEuzFSzBxfznCUcM3yM5YpjuR2RfZsmNCsDjVpKLeDXLAHfor",
  "key9": "5nvH83ctcYotUfaYa9NNU8gZhW6YS9niHFD2gBMWKjXkLbUzLrRDhBeqaTLzyvJepUuRuRX7Tku5gfSmq3WmE7JR",
  "key10": "4Knkz6AB8kukLRWFHthc3MnoYShPrUtYBe9FdrYPUE446m382J74nYGNgdMQ2kShiyiK7VfHWoJEAyKz5EYT7NNk",
  "key11": "5HWUUghiKhWDaHoT1NrvKfEJyMsP4rRahPJrf75YMRDp35wkXMbnhsePpHh5v8rMXrqSZ6VrAs7xteBJvga6G2Yb",
  "key12": "YnstzJn3pFynBV9chcxD1fhCzGhUZH7wohnNsfutmp2E3tUHcyHjZd381A4MKx5tgZsq73ephrrQdtZ2aHCCArw",
  "key13": "3dm5WcWdAMceR5RBcX5ZWNrDXeuboDLzTqF6foHJ8e2MQUSiM2zW2vbxtEDpkTJEUtj2ovrP5EL8GtbE3U1ar125",
  "key14": "cTAw8poAF74Ghtm3GH6zpYYa97M9gZ3sxUMs9zM3a4etUS3AM6my2uCcMfcijqBrxKTSS6mJsYHf27uaKc1D6fJ",
  "key15": "3w1yGKM7CsGnNr8jzZW3ybHEYitVoYDw9o7kWeQ9153zXaodg3FoC29H5dnu1VaLc8Ad87P6XEx4yqAmQNneQmbY",
  "key16": "55sHLr9afcK7yAxfJj8hNw5YDkbobnVaYL1ut8BhnbcQPcDGqKjecyxEaNBfDNuSj5rzQJPyFymWwNPaMJZ3dwTv",
  "key17": "4evd6yxojSDtG1D5zREFyknTVPpiJw4botEJfRSXEZhRYRygLmsfa7Lv9D1kr79QviGZjo56ACdB49Jjpo5pFRYe",
  "key18": "4RAjqnciRxXhnJwBkd8FNHH5xzGPhGvared1jRaKY8uJgJayrzkefqNpQA3ZU29fLuUr4CzFv7LuYYQa2JRNuvhY",
  "key19": "3b5XieooC1wiUVYXEAmgJ7gsMSbE2vjbfeNM28JmZ88YXkYNWGoCURwzXpDi6GcJWK3KXdLS6wDucQg17VY6PGxG",
  "key20": "2g2wx74TSGBHiPr8U6QTckuT6V9tFy1npbR8w5FTdKaqKXrcPnXEMMuxLFigBDyAG3r2MyJGsUb25jsYACcyKp3S",
  "key21": "2WW9SY7RSENon2KvRNyxfSgmycKEtzwtk6ZaY59HLWeBDXrxERbGx2QoD46PLWs9c1EB5ykzj5nzFd95Upr4gKeK",
  "key22": "33KdSH7u9QS64C2ssuNc7xgha2t73WeE2YcVbBhA74KCzXzdPrzHBKof2j4rfgv2Jujn63dkYYSgGiB6Q4oU5uek",
  "key23": "3MHRFYnWFeMhn1Kry2guiFAwLa2EnQgHkMJU8DqCkUEo6nJMzTxtfLj2tAroueY1wLq1g3HWqaBsvZBqQyZKdCB9",
  "key24": "65XYqaEV67rs6kUicpnoAGF3VCbj1zrW64uAekowC6dS2mBgTUvxuD3Fof9b1855XExcSeE8C7pW7JMK32D2FRQY",
  "key25": "xMUAiXiddHm63dPAK2u9kXYdtc99fhbyfQ1qGwXdcKnX6fR2cxhng6iRH3a5TBtnCeo1vkvvjdaN8FJ1RR4tTNA",
  "key26": "31i8nsUwdjdVJk38WK5ckx1JzhBrv4J1kHEcJhyR7EsN4bGpvMWeyuKSPeCqMqET6XTVJusxczhMj3yDD1H6YQaB",
  "key27": "wMvtEK3KUMX86oH3MZLzM8z6kM9WowMM87L4ah1XLxFX89U678KVERhivgnACef3sV5U8Aj2xWwUeHix3hjgFJG",
  "key28": "4PMjJgGBJkviMPrpskSH77aWkhm25CXCXGn5zT6r1FJmf6W5MKW9HQURU7bGCcTcqxLGFT3nCUcfKq1JaAVxiyi8",
  "key29": "cwifJ1LU5wvCeyc36rUrZWHosCH2reNTKT4ZDpiTt29YWvD8Tb5maSrxebSnPZiwHQ7cNy4bpzmbUtMuQxvKJUy",
  "key30": "2zTXJRQhCeRL1jDYmf4t9weDPQieCAprPUstWxibpq3x97AaoxQYHKan4Azz5PJJiMGKdUGvjbSMyy3Cu8AQ1TZy",
  "key31": "TbFxjvcwsiWEaBbJKUVPoiD4CqzeJVn2dGPExcdkYf8N7vPbczgRVHnPG6hbvabFyL2x73tRtafTz8vNFAmQMgS",
  "key32": "57F7YKrj7Rtb6dffJfeTzNqEaU59m5AAYdjm9ESFxuw1b6YsiyAUgeSUDnoGWwLWGF3Rs8cpAiUKVY3Cv2cTQEyx",
  "key33": "MuYAsm8oU46PGCjiRH5J57D4jK124gvguQu2yysicMmVoBsJhTY2gL4qXZUbP2yB7ZienxKd7Uintu3cwhhvbSN",
  "key34": "5pEXNqNGYA3DduYiAEgzabQb4ULFJ8kLY9zx5HmgUUEUz2HFM3R8bBErVp28xwwV8widXVZ49XrUoDdykpJ2RH82",
  "key35": "4HCJFDcTvQXktM9qHVanfuuEM1vnYPQL8nogMTbD8YMUQwPVNbvhpxVjSq7pJWR9nAJhC8mCastfrGTttVcP5Pt7",
  "key36": "5cGnVYiQbFQPczsXjC2zPc3HvuSpa5F9baasQnCsq3YSfoueUPxbZkrhXhrHQoyHecSDzfMoQ8Gs8HpjSeYM33Po",
  "key37": "534e9x5pZREh9SBvezj3HyCPUWBppkrCcEZoD6VyosD7yZkPPdDRCHHTF5fbyVPL6aoQDi1qR8YsFSGv4ToH4Lw",
  "key38": "125rLZq4G9TWHE33SXKSDog5PcoZy4hqsTBtqimAURUzRNvQV51RMF9yybAtJ9fRdBNQ79H8cVpeFoQ7gSnSGgrn",
  "key39": "4Pc8fE9KtirZxFqUT3YUsCB7mnxyHBzPCRYQzEgSbsqh6CEJhFV9fGxmZuUMJCccUCbtC9vXxK22Q4vMXtaJWWfu",
  "key40": "3gBqySgVvNjEtnhNyX7U8DJ1sKFXWKK1fuJbuqaLQhKDgvc6GmcnvuemNLx6PDwoscQCWwNcWbxqmxtLg6KmaBB2",
  "key41": "4s3t1wRsbxnkr7mhJKS7iUyavoGyjo22qa7yQsPnmzWqtLvhQX6o1UfB1hNsb4qDmLXVM25fEfKSH9eb18EmA8tv",
  "key42": "5ESWAbhZbwnjwquKWoRMDUF8iM8hjtstKShKyTEvNgFbX8G1AYCL8bDLBfLvjRuiy2XFJULqT5rrzpBbtriTdEEq"
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
