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
    "41hoxNzFbc3VZCUt72QdStAj4BTTWVjmUe7uGhBknX4qqJQabEd8M5k7mnNKbqwrfamZ7Cj5Q7PTL9oEe6WZKo4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdBZMdft7r9KrerfH532zis1vCAeuMF2iFnvLc5bjhy9SfXoNRekWFM7rMZPp6Roskt2e2RMV6635JwKQQJ5sXZ",
  "key1": "2g6yfU93WvtoDZM58eY1TwakPqjGhHQVvFdroMaX3EUhWNDUYU3Da6af7orUZbWyvcmzfeAcEE1CuRDr8VERQ1fb",
  "key2": "2BfDaxB17akRbvr2N25Szi8ym7sQVdfEFjxhLnm3uQyn4SkJaCjq8nWMLLxFwn5GZgWx4wdq5Jepgiekw2PurEBT",
  "key3": "2bbyxkXAAvMF2m9RznYYKub3R5x7NzF7sAzwwz8cmrwvx5M7arC3tApwohbngUVF621gPLcpix6r3h6JitoZjCmN",
  "key4": "5Q4reFfEsJTeAVurGBmBkrZLwJEeqoxCoyoeHG2DpKECkCof7CBtgh6P6TNirNpswrqLuXduuNv2uFtLRkH3V3MF",
  "key5": "36bqT5pWhXmXztBiKTMZkKwFZ85ibuuWEiq1q1FdTaMBNqVjJheAJ7Agu1K2JxFGZHopeTvh3rjSDaDWMWBGJjqb",
  "key6": "Gpd5jpXAMARB6iGWGqM7jN8WuXCUWxu3wZzy3AyJ2hR4M9F5z5U5S3Bq7HwQxga9VRaytKEYxdRpNNU45XV4piD",
  "key7": "5aBUq7vFBfdrxivs5sbPWj5oMzGfjwT2eJZQD447kxHhj6SBumoMjWS7DYj9ZLG4ya3tNYeATVbPMnfy2fkhQref",
  "key8": "37Hq7tRxqNYNTRrAu4XBJ7XccpPCkXnUkkxtNDLqHq2m1iS3tUG8fzfSzwk3AAKqBozXAuiGxsCt3DvE9v2YEAgq",
  "key9": "5Zx9RmHnwAkX8T1LeQxsMUCneuXA8Ebx2usCx8X7Q7E3cyENag5qB16TXuHsgKde4LsDT7gF39rdjEzWAXtQW4dz",
  "key10": "5U1yFpgQ6NVRjD7KPfHqxqG4YSAGhbi3L8oJGJFG5dp958t7JtU4RhzpACQAZBTDE3fFRP325mBZUcz1qexv2dKQ",
  "key11": "4JaffCriEuAT3f8XUUVoopfUzHE1b5HHo1JnKvamGsr2wPUBW2GALiroySTtMU8aqz5sAPGJE2VcubceU7fT83Zz",
  "key12": "4wU1N2TtLvpkePv5EF2qNYnZMhee8hoR5UusYE62jhgkeiwnn9SFpuJodsPA2GZf4ZpAGvQ3jQPNwLDaTqaJ7CWC",
  "key13": "9wKihKwwysdAbF6ZSPmB3gL33FtSXL3tCNU58yudt7Mp5Embi2whCtmWcjqDiU8cicHFNo7Na1uRJxTXr2QihaK",
  "key14": "5vJZ1zZYUaQ2Bs8kRrk6VWnGvzbkJxyrhpsdmgcyJ97nKVxHxn7XgFMt15betETrsA2oG6UsNVEq8up91tzr74uY",
  "key15": "3ah1viehQ3iGterUWHV5jdswg2A52BpD48QLqVSikBVPFYk3Xf5SHZtjQu6LVixCRtXwgoGKFbqotQrGLGX2cj62",
  "key16": "2Y3PEbJ6KgaNwz2C5SgYU81bftvbfoPPpTdbe2nF8itQBNCw397unJjasqcEENL815TK7xz2i3xT4cKKSQMhyC4a",
  "key17": "3rJFDzvMMg3hLmNEC6NgNiUCVcV5jKEeR636XSHqUctYA3RQQ2Z7vTr24Xoz5gxTRDdeLNrjfw6LhFUdZ5wKkyVg",
  "key18": "2eV36XRg4NcrePz5h2QePaJyaaPQETCAY7icfDRMTo2DMKKqm6BKaKWdLdqUf3vkp1eyhT8ckBWSsDjzJxw5EHFs",
  "key19": "5M1nPS2j5ZSaPTBeWDxdJX9Njf5a78ctVFaerRYAC1b3av3BMzijBDY7ZYsRFmeHCReBfnJMNqNegfenEXYVcTgj",
  "key20": "3J3fq7LvYX6LveY3yP7fAMHKHybMNC814jCuUvPeWfP4eTHSKuUnfq5oNT671gLTuPM4m6vYiUdQyTPbcxm4kBaz",
  "key21": "4gaYum6dQNyuxtqNX2rYixpeYYNgkVVkfJ6ewRiK1gtr3JSprUtugUEcRUMSVeeyd5qa2aenSY5Wzs6NpRnhRJv6",
  "key22": "sL1ubDRyMv8QAAhw3o66rvusxoCKUrg5mx18s4hFxhuJkzJyrRKDtvyd2AuJpTPsVT23ALiEWXL6TkKd3fzGkBu",
  "key23": "3djjRcZJ8RhBkPHT6sW4rDNA6TLBVWzzFrin69JEt2UbwE8eRmLadNMGMunXdjMrowwXUyeBrUWPVQUgfb6EWxgV",
  "key24": "3feYfPSrFMprUaNebY4duEjZ5jBAe6hSds8Cs3KZjW4m2jR5We5uyfEKRLvpAJgvnnxnQNArKkWX2iJMUpUH2S2V",
  "key25": "Gxz3foi6eMLpqZevY2sVXLCAXYKvXQph2FWejnGDhVy2bixyxXmUMjKsrPkTkWr7qRGEBJPQ5HAvBFfC8YgAnCv",
  "key26": "2HsSqxvkSH7We4SdNSueQLj7KeMwTpT3qzN17CQbAQVU577gew7X7DxDHDYrvPz9MQyQQbWmhQktbzUJfvMWFpJ",
  "key27": "5QJPaoAJL1swTATLqE4LaVFMF3uQ97RXutmTWBnkECH4911GGEu8hGQzyuoYv4hgz2fifwjnXcJ1AfnMg1n3oqZc",
  "key28": "4iEcyae2X6ffY5PBGsu5kf9hagnonuxo1GiwLdQevEyHxgRmNRQmQwH5bPZtTMap5jf3nHEwpVpbgfTYS5sZzucG",
  "key29": "2cqirq74mdhnVan5Xb7GTmwwUF4yA5osAXqE1atnVJ2LmGbtUayLiZfk9WSsAaHrg7KcrpvpKRpSX8iBKig5hobM",
  "key30": "2triXShZ8d9sygxkAkVG2mKgq5Jb8YhjgKwwoBo942vsUBt5Mgv9s7WBWusLd1KeECaFDSWpyCySKAnvQqWzMqPx",
  "key31": "63e9bh6wZ4c1Lahd9fGFU1i5cSz8MhqQj2cWRGYfZCPx1zhZCTjMak3NznymUgfcS3BYRUcNRwRLFfZrA9bkUuL1",
  "key32": "2KkNfnSnvziFyeRWfxKYF2xVNd4zTkyGP8gi8kX4TFtyo7hJpxTztyhgESAdvcq4DJ6CWnEbytEtZqEpc9LgqZpi",
  "key33": "81XR3rAfoqvVGCo5pAP6B91Amcb9ToUDZpYsUKTimLaTtaajxS42fxuhavCSEUTwPVLfvuwRqkqPxNf5ad1np9Z",
  "key34": "NfSYpzzXVj4ckWA7xKSi9KYhmX2XtgcR6T86YxB9upEAct4mmvE23LzAFuPuvFqnEUPesNhZwooWuawqXCirM1X",
  "key35": "4KWJYBWev8p4bY5D68bVM7iQYdZfBqKuK6wKym1N2EjARb9ApnSKq24kdMYzU8SQfMct3V496Qryt4reNmHNQxFj",
  "key36": "61Rp4snMtNCGFbJuQAwiYT2oufWKb1YVZNqWNVa31JbEUbKLyUrSkkKMBSAJJpTZzEHhCx1tqwn6LuaiLw4hii7z",
  "key37": "4AxwVG7GyX8JtEkShX9fWwWzkHhJmdbSqFEz9ZiyJRUikZu6zd6vZzXfD8hiQ9q1CqFPo2EMnet4RdAavPRNrbmZ",
  "key38": "2Zmvv2DVfS9EEUbv1ATwRnyZ12wntSQBHD8bJSvN8Eaia7TZFrykyQ181TrZiYYLKeHuvRCZAWEpEY75hvcTjB2b",
  "key39": "42FXSxhHShGV5MbqJUuFy8NKiqjMvyrYQvC6RvL5qX5ySayjBVhVK3Phfbry7p24UkQ1jcWS5jJYxZeebiVfMkDi",
  "key40": "47RM1huQgwgACYGjDJELZV2zuXGMiMA2W6boYJQN17TyD1XYzytTYUrEvCTZEhs56UYHsNfSMo8rMxTACxP1jhSo",
  "key41": "XSDDjh3a7nwZea9JPy5EXyWSwDTDBUhHH93xo35nc7bughTeby1Z2Fpe7ED8E9eTZnfvo7duHNfXme4QJYxK3ak",
  "key42": "51DhdSxBMgmpMiu5SZy9Kq4gzjj8U4GabQPf1tJkioBrx5cQ15ZxCXN9xU2hpte7cK5Ys1SjT2i1GNdVj5F6YtHm",
  "key43": "6FJkV4KUCXAAQQtkNE9JXo1cNP8jQSZkVTLyFSRk1GvAdnevusuGjY5yTfxgyF92um3qktYQ29pqsUozt2FXz9o",
  "key44": "3X4UmCqfcsk6rwkGBQEvFgBimqeHtryt7WC5CeAich7vdAA9QycHEyS2ZSNa2QAkwNS4eLv4zEmRZZoJAxJVBiXc"
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
