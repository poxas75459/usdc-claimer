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
    "dxBamQMZZfZoTPaTYR7J8RiyScgUajHSXdHvjqmoQ9oC6UJFXzPEmh27SnaNFDxZFAh61YhA8xxMnc1iUTVWmjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZVaCeoa3nLwvLztr16qDbbudEkhZ5yVujP3nabfrwwuQjZhZYpWtA3h7e4EDFVK9PhG4FzxtiN4ya1dGb5TAshs",
  "key1": "5XKtH61tEay9vwQvk4khPHRvu6vFRojdzdorTwZGJg3NnNy9W9RXMqxhyYEZw66V69JeXuk1bPgB1DmnuE1NVe52",
  "key2": "4xWMAD8eTnSzLT3oepq6DY1dSp7U8Uc4F4hob9Phnw4KD4AhbGpc9Xpvc3C3F6kaTpUCtJ9bPe6pn1biVHZ4gR95",
  "key3": "MpgEVvToexC5d4c6UoCjVSWZdG5ugZyV9cuF2M775v7wvcHgfkTYx5cm8JKJTve5SYEkqxaG8abEWBYjWLZSZGG",
  "key4": "5nMLfrY8NhRwjXK6dDEUrixiCafGaQPLDBQgWEa4b84p6XKVeJQAMfK5xkDyFjrdtiB975RrWdfcehX4vqR2vMtZ",
  "key5": "2WSwqR5Q1QL2MvApDFdds8H6nHwmQ3Rj6MfhLkizoPUQUJ6Gbb7X3kH4HbXt5ibH7X8X9bhHWSHU5mQgfNRSJr8h",
  "key6": "3Jky5RrnoJB25dKn3iCb5EmTUqSawAGR2y9eodCieTgA9heKckpy2Zu6nSZ5R29FtzKxmwZHqbcySa1Sqza2qjPV",
  "key7": "isWXKP6TY9Yep2mnGPyQKABvwQioN4DmNySic7fQSv24AuL1LnjgmuuzdbRhkkztxH4JuHnPjLKjEpAKZdes1CC",
  "key8": "4cZnXbLzdkPcoDRTZ19MGoU2GMhYEszUtL2E2j4gAfTRCsC3oamswYo4tpPVkuuWZ92frV4kM9AEhepdurjg5C6",
  "key9": "3AJSbYgK7BZNAmy7vagR2NKTogfHzU5fx1TLoUQD1w7idh8JA8jQ9e3NEXCQw5cj5qcvKpvAtxFFAk9ALvxB2zVa",
  "key10": "3Z6KqUUdNQA8RMNJf2hRYxvr7Ph8nyP4sb3UjYrYVR7xJqYzwFpuYVvzTE9NTVSYyeWG9VWSFEp24yFan3rEG5QH",
  "key11": "ThbGvYCbWKdhTDRM7iiChdNhQjAvbSsYRzf6mWpvxoH5Ue2RWeXgE5uompBeaJ3e5HQC9TN5xpd9JqTbrPw44MA",
  "key12": "46eMQrfL2jN9G2zRhDskwoXQ6rBeTuiiLwfXprbmaaMh7EKMv25tVYKSxMzgtZxhmzxx4wmrLHeUEXoukPYia3qG",
  "key13": "3VX1Uump6xweMJqQHM3YqiGHuVaT2UXd9x8Um2EXREifToU2U7fQEfwvcHcuWXzrRAYojtrbxSgkNR1EYBpvuVJp",
  "key14": "2gJ6GN4AWGH2SJmy1rKHt1Wk7YcmYqnK5bZytqc2druZExGdEHHh9Vro3v4wQ6RjKUVBbng8S6idddpaSdfyBMZ7",
  "key15": "F3LhoQMMsdtWStDJMPiodhBcf92tzWgEjTyxoiRsdYbCsNXba4kpyCeq5bgFWHRQrKFMygUQS9dnEGYnvm3AHdv",
  "key16": "5KUxe7DichEzsUjEZbnzrz3F1G9odicJAp9oScm7wC54HwEpoLvcxRgWuyRFaFQQZUpy2af3QYXWrxwC1xdbYExj",
  "key17": "5fodrQSCaKuNcS3a4i9uPr9XuJEP6j5ovcw8DdmPRyhWsygtjFYfDiNeWwGnqUuXdvyhACEosqHKo1426p1oeVr2",
  "key18": "4zoFaUgiqKzWtZuWzucxDWy6nSEuEkbpfgGRPP6ckNNz1y6ncwhmNJSqBaJj4sYUWcfKBGc6raFLyvS4y2EqoWA8",
  "key19": "g8YEkrBs8Hxg3x6p7Kr1KxAstdrCdBM4JAACZ6kxtF3F5KwW33Y8VWZxAP17i8AAJpoLSVYKfsmFfCsF6yQbaXQ",
  "key20": "3ciA9jjRDGEGMBJPHfLK1McoFABHCrDXgG4QD6ujbMKKzrifERQjVoZcocSxfGxnh4mGh3ZMcVit5F5dgN83x84F",
  "key21": "58aThBkZH3DmUa6ZgZvW3bGoKMFXGgdfR2a8cA49NgaaQWaSPrrr37c4Z76SXSFHn34GAbNHRQFjkdH84iKXV7dS",
  "key22": "Mg1LJfyQK2Yhz6wsewQgbVEcB6CYBaHDkmcGJZrBkwZhFaHjxZTC17sH8Ev89jnAvZHDRnVUwciGD5KUEYX5zGz",
  "key23": "5EBesujJ7PskikULaLoYKVvfY9NLzdKdX25vFbeif9aaEWUkn7pnREwb8fDwp6ohw1jvqkcesxV7ts4MrVvVZM44",
  "key24": "5xZF5xZVLWQ3WRAuNDHeUdzcRnCLbsDrdWtin7uPdgpW2xfSFvBywJ23wzEvPixWuvjw3CWutLS8b4AS7zTGyH8n",
  "key25": "65nQB4fTD3sF2TrduoAGRk3edTLP9GEAwECjZAgQxzqi8mJEuNgwdQhiNvZT9eakw4Lnm9GkQMC5oLrJrmrdH6jZ",
  "key26": "2VmRZnZMtzGY7RJPjEyoSbRt6aLaqCcp1ssrNwCZac9RtGNkx8Y2oTukcn68nPHDcDy5AyP4f3JDsj2jRZRFtGag",
  "key27": "4UDzJtjw3daKuNHmV6JY7qFv6z8rn1nQ8BJqRo5gYuhJNSotcz5XwqhGVPQwVrbJjEWDDs8xjxAShTUrVS4ZkeA4",
  "key28": "5uJikXD7835XU463vy7pVE73iM8ZqVAQ1wffPT8RqJe2exyxujTCrrR34um1Dh29gdriPGC5zmqM7Tiz8yLPmMWo",
  "key29": "57TCZJMZNN9D9PCRupC8rPjgGMJSEVNoiqRzoYcLs8Y9Z2Wr9VLHDLCrr3DG1DZiweo8FTf4GPQFzTteNWL8V2au",
  "key30": "2Sq7XbszqUCJixRcB38BhmTbzx8LChRQCKd91x2jpZpCnn4chouXA6kXbjt43yGns8Ewb6a1R7q3Ku9kF7WDpHbA",
  "key31": "3BmvHxtLJqoXsf4Boe84QA4WD4JnpZsqbjzU3gvEgkS9zt1AjoNcCfbHvA4rbQYMuqQeC5aDYu2pDDfkEhWEFYHi",
  "key32": "34FCcBNcNoAcKb595Ci4ynrcDmshGbNhsZCnCX2B1F9SKGZBitBNEGfsfZgW4mUdxnqZUyEXHPrWQwVvwPCGL84h",
  "key33": "57YPaWuL5DgAmWzi4sfB5adPa9HWxcMkAcXqwdCsbD1U8JEidrT31m2fciVNZuGoK9UZWYiEhq8j5iKckJ56DRqM",
  "key34": "578DqPwkP6VBeymM6SNTAysTKrUKNsbSSybnvStF8yTtefs2mfbv9vaRJ6EY88GW3MVq1AaEEygC2ieNPK15ky5d",
  "key35": "3YHTdBCAXhDGcP3PS7A8u6es1av6oPfUVpHLFRXghfZ849pqPzzC7caULEvrEPXWxt488F6v91HF5apWTkxDvzuD",
  "key36": "4XmiVoR65eaiuSHSWb5qHywgBQRwjagTqcf9HTKyxPJ4TCMaHA8SFN7v7P28TwDfXQYghMA7phNG4Rr3diFSJFQZ",
  "key37": "2aq6dmVN2gYzyou2cdYau2ixAkxcvzfDDmjCGg8ESHVQmD6a1XfGMu9d5k8CrBgiJidgYECkDahNJaptXGN48ToL",
  "key38": "4tpGTpv99uPo1dYhuGnYH3K4x6bro9ZzGw7wXdMopNynnsBfveDMbchD61KiSEiYDbHfQZQDxcCGu2KtJAmQY9r2",
  "key39": "3dyY3MAurvEkFSNtVzKs8MjJYwx26J4iFSGac8ui86gcn4YaA6UzPyJ1nAmD5wTrgcGH7YFQrFzU1EKUXYJzWutw",
  "key40": "2sS1sQfFuouEGuRkmfTB1QpKwkrW8Dzibdmw1XbYq8vxAT8AiXgoxUqECPrj5hec5t2gjU249Th5kQ5qJxEvsgfr",
  "key41": "2YxhNqUZoCiz49nYKaFFfqk1nTsvru1URYFEhEEdoL5bzos55TqYiTtUD3VM4FyXi7dXkV2d8pZaDpQ7KUzQLq89"
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
