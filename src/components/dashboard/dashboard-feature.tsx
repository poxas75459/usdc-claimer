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
    "3duGDfnCHqSmb2pDp32qeMxF5pT6326fEHq3QFZqYLfxy4445aWzovUHEHhG1qKmtCWL9p6xQK91fTQ7ZdzAjCUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bfBCsvWumwXr7DDjMsTEwewDxTzzb3mUdhJjPMCAhnBK1VFmSzkNVgpMLF3gGA8dhrKVEfmLTvjvnYMXG5LkMd9",
  "key1": "2ECPzxHbXBLPEbZ4pANmPtSA4wj8cW5sjLsJh29xc2BUKiHYg2jeTHKe3ZMgRarAdXfZeBLP7kz2AUjwohYudi2b",
  "key2": "3Z4pX4yQk6bNku8ZQWqoRhaJh28XyFxgt8Rffh5en3apSFP57B6J98xrrA9LAaryTM2YFWr8NRpJDH4rJsiSp4Wf",
  "key3": "29YMpcxsA5rQfc73qQ1Fw77suN1kGGUbbjsQkxTdMHwa7LDreSiTZkJLudeMzyNhc2ry6LCojoQthd3wLeNJwMFQ",
  "key4": "4ZSJBHuyMWdsh7pu9JKpFU1evL12zZCVu2fivmFsxGZf3J3bS3fQAcFShRc531cJugdKD4xwQHW3v5v9TFsKpv7j",
  "key5": "zwSVXPjm4cN8n1ZHPQDdaWdBtZ441EbHpdYtiFwBxuwyrM1iDAvoVZLRy6EuEeXKbf8te15msdyArLMzEiFNxVL",
  "key6": "E8c1WUYzK3kkBktbiPnwGVqGjoTfyoPLmS1E4qMjptKc5rep34ynu9MKodWwvxfaXbrrkYkvF8AAafwEKgjtX8P",
  "key7": "4xNsBF9yHfTRyUtNuYcjNvzTEUXqf5Ejhi4VuJ5rFwEQjvZuiBkCKuZ7SgS8d6uX2y42QvQXnNtQrvKKZQP8E8kq",
  "key8": "5EoYuWSJErmKY1VPmbJ5f9DzcC8GDK44gkxCPbJ1xzbZvtngBqM88tnBcwH38AZBwXbTU2u9gxnWmt7AYpuB31K9",
  "key9": "DPgKD4LJMSA4w6HkCjFWYzNtXpaHtZNyzR3V6RfChWE9ieDGffmHWv9fYRW6qVy4WJJHasw5ihe7RMhviGUcsfm",
  "key10": "5pMYd5nmgkr6mSPMjEWbGhgYXnBJYPyJfySy1WkV9j2n3TESyZo3B5Am1vWS8Vha4Vgmd2SyCy9ZkZRmhCRwHnCd",
  "key11": "2z7r5TJYoQRLZNNPDCnLouVwzaim8eHUEkDvsptoTRcmwq5A511bVAuL1Jhr3Qmm2614cG2WAGkRPAbZEfSPodm8",
  "key12": "5L7VjYuCu3C53E4Uj1xFqa4FLoAG6V7cnu21vTLK2c51V5SeT72CKFu4epzViDgtZRwNZ3p8pmPpRWcV5LU4H8p5",
  "key13": "3or5CJwnWu8R5DKMh5FPnVg2yLWFikamJB6nNYW6i7FMqmCsHMm3bUWtFZm1ZpTNFhY3xc7afgJxE4ubxHAWy5Hb",
  "key14": "3b1rSPb2Aw6oCrX4aqSJVuyo7koJWD4UDQ34so64cXziRU6K46rmdVvE5pYAGN5mHLr9AdiN5wQzJuFYcx7gzrfo",
  "key15": "whaEYuu8cceQYTQT96QVx7nVPr9sHnXURSoN7P4cFG4HLjWA5q7TskZyog5vwDzyn7gECJ7Mo9wiYmtUuuEXpvn",
  "key16": "5EA3JpZ2K5M6Z2KCX341X5wD363svfb2QjimC5GC5EtfBbiLVZo97Hg38EqCVAvuXkWhhGiJU27wuE192UET3L7y",
  "key17": "2hhZbG8awY1VTRomSLBDEKjK9T1eovzgaAy5NJQb9BPoegAtwWEpdXrjHgn3Uk9vNtikLiRTbrJoQCe2fXp5mjbZ",
  "key18": "4cg9Rf5PDKwmormFg3W7q67YBDZHxJkQzrQHJdS1Zzprt4QaMorkYeELFx1nWRQSokiU8UWrxUboCvPXVwxk1GZG",
  "key19": "RNvJSjizNC1fXMdchjFu5PA2zUB9aMR8NrJyq7XfTobdykgcEJCWtVdEp6iCeWn5XM3oR6y9XpvbDqa1epng6iJ",
  "key20": "SGBHqSguoyMWkFhj4sKfZ4fQ3fQrMxVEJXAFGCgAEnSDAWfsxevv6D4n4qKCmbKKX2arfvveQacUi7oyWqT2Jat",
  "key21": "2a3fed2NWYSPYxbAELZh1AQLLu65cpKmHZ8b4iBcY5RHvCAyGfoZuoEDAMJLdvFmdugq7kdsRdKrV1ErnH1Gq8Lp",
  "key22": "5Kcn1SSD4usrUE9YsUkbejLfmwRvJND5EudmXspDJPmWTjPfJ4gX3sN3ZXkZKUoQ4ELYRhguQsDbPZcxq26fxkfM",
  "key23": "5xi8cEBkcgYawXivbP91poSMTKWFWgQBKu81ri2qMf58JMJswXvF4LsbDwKrCxyNFmH18AuhcLgEdthyuKjRYuND",
  "key24": "5hEUGshn9chH8tszaTSQbUJP5GTzHKpa4BngaLa7J7UF49Tv3LQi7Cg49X4X4PwjMhhvxqNkrDvbgHj2nYgoeGxp",
  "key25": "3ZNLMLy64myhdoamw7CKwpqP2N4Bbj41fT57rAy7ijBQwrSrwTrmE8pXQGNS8HrgVzKxWeNHYB3tfDAZNjTPVGcV",
  "key26": "2yxFw9zikL93Qt4k7QocpTm1emKUPt2HZQEzPPErV8QkRvcw6Xe9WMdQZyUoh2tB1CWZiuBZjHsveTRn6TwgYGke",
  "key27": "2za4UQtqHa6Tj8gnc5scRbDAanaJT4i8Sd8k9WJL7Wmqbt1c7geuwdutsYtHVDd51aXTLcVPfnYyU3AD1x7T1ABm",
  "key28": "evGNs7VqgA4BqBa9BNEAKiXeAM9sBBuYmdk99bCA8c7kJF4ngsG3UPjzUhtGVQdxR6UKYP5fhYJzQ25CL9Edm64",
  "key29": "64gEBVexGVy2z1LXJbvGwnvoMGe2GmaLUUpLAvb4m7GvZWD6PkbJc9JNiLd7gsUh1Q4fFFtwUNCE1KP2Z3VQ8Rno",
  "key30": "3abefAYyKmcstUzuVkZW2WSA5mBcffEbvWHveucfuWqsmKTKi1gQ9mZW6J76E4MwACD6zv5WKu6t1AWjipqSn6Pt",
  "key31": "56HL8fkmfsYX82wow4kUGuf7bb8DVHqmYNXbePdCYbH6UEtKDhJRaMrKCFij3w8u13ML41Fuz2svKC8SeJDkjDAJ",
  "key32": "4ceLFxsDaXbgsaMDMpko23GmDvwBvxgTSCnRhwXhjDJz4m9TsrJXoYbbFmG5AkzLWNDQmwBiKzvM5vXaV9VzR5Sw",
  "key33": "3qjjPj73jf8URQazT8UwXH5dYVsqW9ptDBq1fVPx1veTxx5GQ2WZJyQhKpwfjUypcCVoMbc3ejdA377WkgyvoggF",
  "key34": "4SaiNzo3UWtP8ci1sG6U33CKiKhuWY1r3wN7yMu5pxjmVKWDTThGu7LYEZrXcykR3DuibUrs9NU7ckDCBHdDnhzB",
  "key35": "3Z6PB2akNyscUaQWYgNW46MG9cqADu4qSeDNmKgob9h8Cp7KSKGh9tcemuWnD1HVuD86yQSsHQwYM3MpXsXpXGkj",
  "key36": "3JcotMHh3ZrM76v6TXCv1KW1XZz6kAQ7sWghrqHvWaBEnthb8iAX8KXXsKd82EMSMJUqXYrsNeZjXNjkxmeadGeF",
  "key37": "4ccQSaWq7evmJNsv4T1rGUGk1Twrd8JV94QpXPRs6QGsRAZvSj4QJ2DEnJeixtsvtjVrtFgrhQoxp9KomVfZtL3b",
  "key38": "2mrbwbBQUTkxJGxtdVoirc2XbuawiGjKiQ1qm9cefghGBjsqtqFJozbVq287Pw6yjZbCivpbGX8PejEtZunwT4oh",
  "key39": "5JWZZxLgDUNXh87RXYsKcLcZtgUUYEGHxbwJDWLi3z9BpGZ3odjouLUqQwmsmc2rR2AAMiAnDTHBKqEKouvcviut",
  "key40": "33fcRc975fhnDkRcqTof67SCEFHHxhzvzuPamNi4AsraCMBGh4158YiexCAvFjoyAnwE3Ug2Tu7VTZXqJkJeUoeG",
  "key41": "2cqgWCiG2CUoz1NnRX5rCtJUG4sGsA7x93vbvcTjLZZmaFyExCeGs4S5FNTTFAUZZKQhzTkbTgJfpthgmkqStFMs",
  "key42": "3YwAuDwNBuPLZNHjBZHGAKtUDSq5NDTN9f2uaHHgYQffwtN7f6TPPzLeVZAWYE5nBJ5Cd2KcVG749agNzqTyQ7Q4"
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
