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
    "4n9t9edkEEhmCEBEc3vaoJGk6fezoFJpWTbeCTs69Cja93rgKe9LpJMGcsRj2kCcUSheA6CbdUJ3qXqw4Q45TxAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMPv2dePTME1c1hQJQ9gTHeZRi7AwHrrssXvrpXM6TA5yqAv9iEqFMr8UAnRfHFBevKMxkVyM9L3CrVC15GWYZ4",
  "key1": "2K6nx3KRQRMfgQmiJprh6TmguBhLdk4rSMK3qvxE1grYoasF8VwrG842qG1EFPhXNXxffj5gQoLb8ZkzG58hKh4h",
  "key2": "57h7KA43qkAxfHuWKLG1nibyfkVSzikj9hoXdYfT2czDEMMMnnNjJztFv9aLFxE58hYbQRfmWf1uTgXW8VwGx34C",
  "key3": "3R7yuJcReRVzY86SnmQnjBpKXVQE7wx2T3C29AbyjqysFycwrrLyNm3twEQzzkJj8ENctM6oFaBtN2mGY1xUDd7V",
  "key4": "3krszpa7Cz1t17z1bUSh88s1xh4MChpJNkLKdQD9K3BUnpqAbMjzzowAii26GwxPsEjvyNudhEqtPAXFstbAnxG2",
  "key5": "5hnXfBF2JpyMZSQwPNV8GMGKBvPUimwJPQNznnZEyRiq5igWNcPdoDFKaLENGPNH7CbxkcKZSNZjMNMRjsZ77A3J",
  "key6": "3baoz7w8zx7S1owFwFJuaDxu6KeFdYyx2jQyrZ9xuHbUrB7NqWB7b71BTiqiLPWqGTk7UR3QQocUDNPvhePApWsQ",
  "key7": "5mANFPDTbgrAQvdBJBG5jfWSHke9dMiG89TcxFhyvRij9Sj7wdcyZ3tXaEjUh2MidtEtnDGeyJVc2fDfJj1wARop",
  "key8": "3VeBKCsZKBQSFEsG5FMC5646yxAE5ziwjfh6bkyEYpPgj8WnGd2NxHQmAygsZwMBg4peL1M3HDkw5kgNW3rjyaH2",
  "key9": "WW6E7BsadoaUrQT6Qu3XUwXnVSSrQmRKK9oyC8MpNcLLYKXbX6pF7ozcn6nnMA3H76JRgrErCMbTfYsWVNGRgg3",
  "key10": "mEfshWhwuibDv5JyZ1GZ4KpiPRsdcPNoX6NYaxoAndq44k1CCveRfhQPwUhRQB4zp9jC516BisRszauKysjaFYV",
  "key11": "3C41fE3SGysNv6WFCjxeK6V62LSyAW1MJR9m955W81rjDZUjBpBY2qa1LPgxV8RDw8eXNuQXLknkvAvhxMVoGzNz",
  "key12": "5ExBtvn6bnopFmBuMkpGMyBvJ49z4aFWbQ8XW2MBAHk5McYapS2xdRY1LnTxT5E1M8wi91TzxNoy4gJT7BtKRipd",
  "key13": "DhufkCPJ9g78sZh2YEsB446UvgCp7bmTyALF7SvmLDSdH644QTwHt8JYbHwcXXz6Xz12uXdzvgCn3h3b4DNVvgQ",
  "key14": "3bWwdhwQXftznG9ytrRmY7Sed6GBJyQB7DBk5HhjPiaNzzv7QevNgn3qm2cwVnBwya9gSGEy8LRhKJjbscv17xL",
  "key15": "3SSGqFVjnW66ZdVHPBAtHdtyKDtMEyy9KmQXcqsK4ipzZkp1nrhy3YmqcpsGBrX4VebPp6s8zFLKja7Fn1tB5h7r",
  "key16": "3ra1jFosSWWhsn9JLGDEUKcLFLVNcYPPtfQB7bepgSQNc8gZAPyC1b99gn8CMGWxdaytV1VsMSnteMyS5iM3D6BV",
  "key17": "5T8xoYqKD5YqWzCab27fbKj66KfBAphMK8BVkAcb6UiV7BmYjywCuv9UtYgKfexvifPNtibvX7tSv1sxE3KzFepw",
  "key18": "2cCnWAjc3CAt6XYCcUJGGJi4MbvXQwtSsxpLKAtgmVq1ED4kKvRmVLiCEdf2qqNjvHCfsS5L2Gshpcrk1XAWG5Xy",
  "key19": "3GzmhZNJJX5Krdu9A1aKz5srp4rL9bm82B3EnuistCLPvfpN4PwFfRd2McDL9nRLhGZyfqf35b2tWkZ6nQWTVeou",
  "key20": "4yo9nZM9rTYA8tGQw1tt5cRGVWZFXBoxuhdQ7wcZ4ryLXUjYiHyBjerahsCPqYfKvYnrH7U4ttQ7w3ZFHbZAg56p",
  "key21": "Ya56Lm7veCGgQaDfQtsftwqynUpT7ZuUsPsncKoQGqLMbqKaG7QyPjA7cBjHjsGfZ3V3HJQtMDRDftACNYMr3xJ",
  "key22": "45DY14rrv6rkHMuucE8ZkgPTHN4oufC5uctfUaMUTsQurFti5FzK5hURjy9MH1HBbfnm4wRnqLKCu3AzW5PurE84",
  "key23": "KsTg5scVs4UcKS7SDDHUgHRra7js39AXHoFARmB1UF1T36fhu4pBsRRgYDJj2zpPhmzsse6U9mR5hZLVrbyE28R",
  "key24": "jAMC8ZxZLNGdL2YELj9FcexksLZXh8KeCBfDZPBw21XF6H3UrmoY2shvuc2p5f22YGt387V17rJsuethM5WTGF4",
  "key25": "5jXG8V76w91JGiFPxPYLmmNaXmtkFNViW3pk14VEJW5ZBMRK8Zo4LdjHbHxQ3Zn56ecMDyVaZMi16uh3Nf5kgU4f",
  "key26": "25VT64QsFokr6BmLmv6Gx8M8am5ErTgWSC9sGFgFjM9v8zEzFSo5baMjk6zjGKun1L86suAvHXcz33Ke6qJ8Wzxn",
  "key27": "3RJmNeTm8KPEg66iDnhkpZp41u5zxnoMuKbTxtwY6LXJ1hjncNqvWzx7aQu921kNi3KW9ABBKEZmPVu7NxrabBfZ",
  "key28": "4Gq63fUxxN33NnoCHH44cr5c23mR6WJsxv5CANsYScv3XK3Uw1QDemwH7WUSDygujyuRusUsfZdEukXxuBa3bmHJ",
  "key29": "trRDVYePS9b8MMpXwX6UTrGCyxJeqfbo28LgQiLTiHtYTxyQdQYxQqTDqdQkUP4JFkP3tH1AbqpjpQAnjmBEkXj",
  "key30": "5fUCki5qbFvbFnhwhzi4zbcTj7geeSYotjjjqeEve4rqbmaHKuvhYWv2zgYupLU7ZUVVr8zdfPTu4ZSjtJfSKtLA",
  "key31": "2Ukst3imb1odD3qr6zFgAG1gv1iLA7D98SYFBmcBCdj2Z76WekskEevHcYAk6enwhDWqnMB3MKTemDjB2N4v5gfz",
  "key32": "2k6vshYwQ6z5BGJTSxHg6TYci7ACi97RQTQSEwXz2Y4upYuV3TbNFafV25RYnc4DpXaBJBreMD9ffSAdfpzVpUYP",
  "key33": "5Jcpoj3iDRrqUx4yjUXwfR8eYJnzh3yN4hUkZ961PAtNUSoFdy1pQvGgb1gNcu2teGnZGWtHpEvS3zx6qVLXdWQv",
  "key34": "4G6CD4WLpumR7vXYFb2ruMr2V9hdVcs48r6P2SWD7Y45CcsvyZC2RthQjsar3vC9bGaQmt95FJJkEE1aCxbDbt81",
  "key35": "5B5rHr1Di9eLY32oZPs6AL2rMUrGpSMaxrcsuhm4dQ11WDaxUqx4WFQmqDM2japWfqDjdWxu2ryeexu5XsqzcDTT",
  "key36": "4pL33oG5P9z53tpDG4QmVuNB1qAez48tg14MuNtQrgzZ6yLNyJcZP65bRJKPYe58LfrTB5cwjPFvghqEFk2nBpJt",
  "key37": "4rdxNokg5HAWWrQu8JQpBwwYucxuXbTF3AEDniAiw11ZixXiwo54rmYX7SE9D8nKviCS1RvXT5frR1ZyE8pFnmmB"
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
