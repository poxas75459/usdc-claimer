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
    "2SEXC7UhXyo96AML6ddBZeJYtXJ9ymwCscQrUjdZNUWUPcZx3XYTaRhhdXphaSoReQMJg6BohxJzvu9i1Xp7re4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mMXxqcy776Konq489W8oxVbB8tUYtQ1kjh3EzSuQNxBNRXzpEWZtWjD5DGvJSV8oX8LbANXvGuZdT3BBdsR2zAG",
  "key1": "4jJ5vEenejYbTqpxEEeaBsHFg5ZrwrVXEhZL4xPnbFzskE5W4RWihHYgTSryQhZz9bm6xDxhMAq9p2P1j5vpmEN5",
  "key2": "3oHXXHHNt5yoF1rCLf4R3XUZCUtvbR6Nur1bCMg9dTUrTQQmcmbALHoyCNxi4VqWERwXo2Qd7X9B1TRmNhFdBbRW",
  "key3": "66Zh2Z4QFdGPN2rJUnk2ntV3ZQV2Z4GgQWMToiM41tq6FugvHak7ibVcd48cexvxxQi5YpwaUo7CJr2iHqZwjuA4",
  "key4": "5aegZVgnjg51WAL9KYTbNDeKvqMKqkaeWh48AxBoZryoJNKqy8z9FrLo45bf1HjZiG5GQ8brbptvPq6UDoi685Vx",
  "key5": "3Nsde8J3WMSWc6UrTAKP2uqanbiDPFvfdvWkZM2N5PbQ3t1iCrVwZxxcFZKDePTr5uq6AfcnEZL1zDvyc7s7Bxdh",
  "key6": "CVbcY9m3Ct1kZNdRofZT6TDfh3SJfgPcJSA1a4HvRuHGGAC6r5krzPSpyduKYFG5pRCjcjjrNZQYK5qGALHHAo2",
  "key7": "4eZphRdJui3fom5tnRx7sLb6FrtrqbAwB7ZuocEYwy6JobuobuH2BUpZuabzvgRxY8sAXQwi787t3ZjcPsZo2FB7",
  "key8": "32GRxZ81DzZoh1XnRzvAPC9NYWycFCZMFJbsVUYz9w4MvePMhCzp1pzdhUNVd7rLL1M2S6nai6NnnTqpVJMAgHWV",
  "key9": "54Tx5rQFqE61axZLFRX8bX4LrYmGD17xb4ph1R9StHgx9CYixbWcKeVkmHVd85Dn8GTNfXuRkyGWpCTXawLKAHD6",
  "key10": "2w2ZcfCmAKY7RuoUzu7W4xki7rNY98s9c1nUXGCnHe9h8yJQqXPKVrqs4Gi9bo61eGZhAiTYscULbD3FcPkwtPh8",
  "key11": "4mr4ubeHeNCYSVDF5PW224vRn8T7H7HvWKRv515sUrUY5KdHu8Gti7kcvRnA5aa1DyydV3G4nwq2kTiCWpA5x8rF",
  "key12": "2fUVAPkvVfC9NDmZV5HzF15ctAGGUq7xpqHv4rYBayp7FUG3uMHMdGKu3wNBjnDfnbLwThX9piMMZc2KJHx5c7AR",
  "key13": "25vuG3TptGEXsdy748gomTk3CSGtgw4JdWkCjMARsKXbjiTF6kMamHcKjUJ2NWwr2hYr94Cg1WknwLPg98XTDhMT",
  "key14": "5dUt3dCqZ18fYTmd5a1hkF4N4FNgERrPq3VppVyqfnrQM8RsYPg2sYMc4voYZ6287bYuNHh67nAsXTW4ihUTmR1q",
  "key15": "2G2JHargjNm8ZEL828Bb6wmNH58VfKJkiCVTUN9SLvv2ysKb5fMj3ygXcfUmRDZtLbEo1z7rheKkQQcrd6Eq9Ger",
  "key16": "5MMcymgoSeEpvEB73PUxDrYEY9yvPq35Btv2n6P5gMuo7KHiGEx3Fn8LCt7KiKoTwp1QNLD9d19KDEp2NiZQxoR3",
  "key17": "4Z7xGWj8wG5FAJoVbQ5csFtXeGLD9F7bo9xiwXSP7kwcGc7MJRkDAHDp5o1qYZM1ubjhf9izz8mFbyeuZwid4PgC",
  "key18": "3tsS5DMfqTQMSX4LNzCfEws2Hg9mHbUzTeSSVYs676feRajDWLfHKPyYnzmMxSwahF71rppD8ufAeXb7JUHUCBXp",
  "key19": "MX4mTvqv3SFxsyB7Ha3Pjmi3G4VudwJTGb2Ya3GVHVgWgYCjR9rT784KeAPeCLVUxcuknGLgdTBb8BCL92cdAhJ",
  "key20": "49TVMQiVwtinxZRCDPqguRfn3NQkoxBwxLCFGgQC5mP56b8Caf2AbRZXYZTv9XTnztUGaiZUCqPvbTTLK4aFjLm3",
  "key21": "5EBR9wVcU7nqkHuTypoSkjFvn6scQVH5NxrRVaW1icfa673gGGZyLaA4TCjvruFco6pR1cEVhyP3v9nHM3Lqd7Dw",
  "key22": "282oDVmRHZ2XJSxFUEtXzJ3f2gnMNpbTQLqLRDnkxDL6MbXonhbrMwxjP9htwq3ANUWdaRknNdnYBKiX4ezKpgxB",
  "key23": "NNwyVPeA31HdoMgXyZgbDZYbtxmLxAjRjZF6GvKakX2AhNSb7wFsiAf4d4JEdJdDsTHCi3m9dwegxrzKoTXQ7br",
  "key24": "5PofAyzYv7trw9tzzFMBJHAchFBXn1XPqUJTisknN1NaWrmbn6viCASSbSQBoBo8r1RJGHhndLHwHBSNQ29WBRoV",
  "key25": "2tSu44AAKyP9aQEFL5pkTkJgNTSs32ffhuVkGixNcpkeQAioALeGry1FVUjD1TwxMtU4jiTJjzR7ihJdym7vzCyf",
  "key26": "2ubu5wrZFSKP9mey6LHDpTY9JVppDcVSGCFaKptPSuMdovQM5pXtSG1Qvv92xRa8hZLXAnWjt412mGFpmRTqHnMx",
  "key27": "2yS8Pi6tj546saYWddQnRqn62am3Aan4AAQ7fN7R64qSascNm5iSUD1341aS3heQZRHwsE3rCef8qXseJmS1xGdc",
  "key28": "511xp14TN8F5v399gsuWQ1Lrt8KC7Szej4cnhuqrMCoGmK7LHkTsHdqGm8cyRQydntnpRuS9iPtyeNCWXeBL51J2",
  "key29": "3DN9VFr3SS25tXBAjdkQBDkqM4voLNP62UDQU5J5LNQUbrFuAiw4P1zg1KuhibqXycJsSHxrYSJRobUzv5dHHge7",
  "key30": "2gDGeVeFD6YJxW8WbkGN3x8PFc73A96XtGojiqXsXpZRGzKF2f5zVgsDAbpGTztsmTDHehcvBxv37o6ucaWUXW5B",
  "key31": "32AqUywnXb23u59rhJakaQcY3KKhXo8VzQfpYPu6fRAHtaT9totRDx5ehgyd7ynT7byLjUEvCEuU9C22qCTW1j3D",
  "key32": "JTt26N1wRAqYVtafbkGbc8oe8qUE5fx8x7E4KRcHu32CV8kXUsPeG3TgvtfXQ7xZhRwBammpHUdSMNcmkw1gjm4",
  "key33": "64YVYzN64xhwmwipr5u4ts7nZKWs5Ftkt1bDKfr2B2mFjxjFGsWUmpp44pMorAa9J2dxYAu4txHkV7gqjGXprp1p",
  "key34": "24SARKoDKiaUFmqcNuWwuFH5WT85PqUm2pnMDUchV7EqSkpczpX1a42byYYx1kboG4dkboEgHuP6vZ9BaHLGwMjT",
  "key35": "5xai7jUBYoBUXVUrTxnPbcBB7kveJGUaisMpKouJpYLPaceWy5TcSgCDQUZtBbyB9RW7FJj4x3JnaFgUqwtse5kN",
  "key36": "45i5i9fv63zZNS8vVmFkUK3frgw6UAZfPk1zP6BVFFT1cVhj5Fc3SS3wRkZhzHMPSgWnKcQA7TEoMMh7As9hFKqU",
  "key37": "3siS7r4eL7iPMxUQpquRZN2syWzyGyCW41Pfq4e5mSJN6yzYRtExrGC75hQfTuV9GKTtJvsCTXWZ1bmZhB3A7syT",
  "key38": "dmqo5KRv6cMw1D1xW6oerVt5vN8UgEHPXfKhJv2rJCzfNuVzPp1TF8sM8VPqm9RF34vR5g1NFETXT9KaqZkGXJZ",
  "key39": "4e8BxuRHL5z4dTZap1FfDM5oGgbDV5GxavvRNfhQtdn6Knw6ThMQMs1Ka8HVvuv5VwE4xNUMWekZbNrEXyjpuEG",
  "key40": "2bfnAX6ZVNJuGzuLhGu6peskgwYswMDZHmmynyXHtmDa3eHpRfYMFCQQiRQvRWKyQ6orz9r8bWZomfpLr9S9nYQY",
  "key41": "LmbhVk98wmksUZqCvbv6ws9aEtiSND9PsbFQWz5LEY2tt3YmJuE5GUWR2LK2GXs37X31sDpU5PHhsdodU5Rv4FK",
  "key42": "4VXKazX1v2VSCVk8utF2NiFqrno3WrM9xd8aKRq1Sevc6j4pzPfhWRVwPXTtSK86eMGoGYy1N8EegYsgBZpdD5Vq",
  "key43": "m6FjKiuXvSN4rHGCJosGshtt7isGJ7P3bfKZy47ubo6nn4Hr7K5uPEQqSRRN9mdq1gqafSGGELfoCkkMJZbH837",
  "key44": "5JWeNpCgytYGGfGfv8vWVJod9vUrLNyiZTw8wNtKZ4dvo9rbq8YoJPjzYyHdP4xnAmZKA2My3UT1hFTRwgeVTh7Z",
  "key45": "3tAuAaMQ726GHwepYBAr8uL5Sr3oVkvL37KiAfTcXCv6px3BPHgA9UndV9CFntAv7ffFSq1Pn1tcc6CVJ4L3p4pB",
  "key46": "2EMVuNmRRacfMzXb5QNDvad5pj1XvWx1oDmq3EkijpUPcjVgoxwD9cReg8A1JELrYAArock6FMoGxTJ5mNhwPmz6",
  "key47": "57EvrQeELn4feKdnnLjuFGUwVog9FPFnajqW6aca4m1zAaagUmeXJhDcSG6XaCiiHAcjgzpAFHabiZLmKpTh37TH"
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
