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
    "4d8xK7sUkAAFDnUfZsJj8YK917H2Bt1hZHyyzSnsXhu8jhkPN56GSAAHqxJydcMEuvjmNVoWpx2WRDdmXErUeYi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vGMWaZrEnJGiUCLc9gyssWBrC23iYBMTSTLJdmAo9BWUmt8UDgXNzVnotmEJQU2U1cRjxkBP1qhSha9BQ8Zu9Ev",
  "key1": "2ZU3ZjsKTRv887HtxXu4GqaLT58NVBYCoK9yiPaYJq7SSQZXmX4UKpJoeHuc6QfJqKnBLZ7mcEkou9jS5fYQTeVz",
  "key2": "3LFKbAA7LCkqcocztK4QBeB5xfpnvTzbKVvbpHbJ5iQ858T3TemEwNqpFuucGfq8CzbcTxKiY1Eqhm7KGXPDP3L3",
  "key3": "5HTWtEgUyTfYgK5tmiuoYpePE2spB5UFbwTSb8bhbQN5NvmAsnXP9jqAMmu5fNPNMEBFQ6cQyYxooW7qK6x6BsPH",
  "key4": "oha82MeS5Re1vyM42kNKs2c7u2KNTjWCPRZTgUWccKEPjVsaANBeGyjSWVFGLXEtxzHfEdMH1QTdTs94FVQzV8A",
  "key5": "2pzAhEjTkTmrXtbscMJeM8igwSbGRE1xVe7CikvbSoufq72W2UwWuReM3CDc1AcwwCFcoN28kfRihrKzPdQU1ik9",
  "key6": "STHCUCbfBYjL6pTaUFvr4EgkeetZrfkEXH21nwtNu6R7ZL3SSFohmbnG5gWt52wbc84T8UCU4jH9Lu64ziaTdw4",
  "key7": "2AJnVFmcvN88ZZCWWQAUTpy8H1iGqsrfY2JApaqEng3ZGZ6W1mpqsUHCkLhPmQVwXwYQtFxeaxLgEszNtBZmReN3",
  "key8": "CvZJjUVEUEtGZ5ymESqmSBW2gjHwZdmviyRn97VfsDFrBh1NPSKqn8eRLiG4MZAUjzr6hDmU5bPF2nh1An7HoYA",
  "key9": "3WuS3dSL1yZFZ88F6TzNAoaYe1ZSi8jfxxMn3LYNcvUDHmEN9QU3CryXAwx1WHV95bRU7C5iXNHtLehF7RbgjVHF",
  "key10": "5kscNkVAh6ijWUunHxiQPEk8if8jXHSPEHGHeHtN1f4hJXw4PsKwPquhrMyCdP4Z5d147Fi3tpXce4bzejKBwKAi",
  "key11": "2hmFz59FuAGLA5Cv2SDXJebrrc5ptK1FC8tvB39L2JPkrbFycSodw4xuyAZBBMa5zy9TPhTJh6WGihHYdo1FVB75",
  "key12": "5tKZ6gv778yMjE6JHhBZXUjJConRd23zTZ7aT5rKVPFTNYpqhos2LG1cst3P4CM6ATcWmuPhX8ZgpRPY4bWrAQ6k",
  "key13": "47BcuVQVPnk98mrx5pULp58uj94HNegZBYJFvLgNnxNqecXpNViwNrs17DXDLfbCjfYJeGbkYRq7etHhsEfxZxpL",
  "key14": "HNW3hLVGbNHciGxgjgbqqKxVGajrhWiEfECBHZbsJBJy32Tbi6abrf3W5o2ZXHmjXFa8BXBfBPQ75fpnaSJzpw8",
  "key15": "62NoN4HdZBXLX4gCAYt6YSTzjxSY8xwhKNrVTZDASrVYfbGrpMFMonoLB295yTHrLprvhVY3ApbWBZb7b9ayGLKk",
  "key16": "TsTwBH82Zeh3CDWnoGuNsLFxP2K5oN41uUpWdadmx8a2NaavebjzS1hKoCfYJx8pbsUhxUgV71SrEYqKTCdSk9N",
  "key17": "5i3hZBE72uYW71KRsihRuHavmaGg92GdKsKBNhAXVL47fs882FXnJDUnSYYnq4n43czVsU5oCH7qhhmv4MnFCriZ",
  "key18": "5P1jiUCgMV5H6p68886sNXfvY5HAqmGVqw2RALjuGXTtvtA1D1Pp5YqrBFVUhpV3nQY16rZyxndeD1XgocBJYVw7",
  "key19": "2ctxGVEqqp2BEZvdp67EL4JZcmA8wWcCjjRZ3p6fBYzHB2jXHtHqsd6E6NPPdeft5x5ZowpzgUePQMcTkhmq2hVM",
  "key20": "3pPhFFPigCcjhDqTEVSsxmBCXrF6rfhbbvARcfFXKF9qqhiBjc77Wv3McJ3rpEiQgkaj8VsqL2a6REG8EQKCYHii",
  "key21": "2o9bhP1vDgugtNPLrCKuSk9mZPJK342j2M6p7zd7YaJG6r88Extr7zGu7gXhLggAtHbAwUVteznHYoGzTPnPN2id",
  "key22": "36hEcdGtfoJ2nqt6Y2g9DbHNf4afRhKqQMxoxYRifR5rtTsLSJUYNAQcTzLCy3vdaWRho3uYrKPjJhko2KW15KBy",
  "key23": "5HYKBc7ZvZbRsaWYtzMqUXnxvpeSmwE6CRxABz7nvQN96VQxVb47ebSj6bVw6YbepBjVzAye9TtiD6wTgLcqu3Qh",
  "key24": "4txqbzdXb4JD3E3asnH21GiCACvEWLZjNxRGY87DjDSS8n2ioLPktYdavBZajRTu6zDE2hFBPv1qRE32L1zSFU6u",
  "key25": "4J9F5dE59xRwW3zYboMpv1hoN8uZnGHFWdWyN5HuDNkhjdNDKLmGnHB5mxNYk8tt96G8PLY2poZ9pwpKnAqpngW8",
  "key26": "LSBTYoGW3XnPpiz4JNq1JgSxTntGmwkbkxvkzF2gtrqa8vHGjCc3q9jaiKJKDYGZDeuvFKwbaGncXXehkkp9be2",
  "key27": "3V2EMaASSziufDGUzjLvmg9d6H3uDPcEwF6f2phP1aVa3RAEH4HxR52uVtxZLSyyB8ji77jX15z4uWbWPpUAvhFs",
  "key28": "2j6fBAnxP9Fkgbkspv7KhytWcn2gRqtYfqiwEJguoHSifwbfBZbtqBck6MzaeRvAEbrLThZD5Re9fB4j1Sm1mDdg",
  "key29": "3uNH8wLYgeDrjr21zucqXredLJTDX2igpjfKkTBCDQStGMpE769ehFU38DwTz2M7YaDaLmcqcdoCFL1TeuCvqYXC",
  "key30": "5S5HachYWd7qvE3RVpdTiDwNDAYsizuH7Ux1swvoCJBaGnhMxqsJKWQjKbtAviSNWyGRNAaXDT3gVhvxFP4k8s1D",
  "key31": "5kSfwYzde9XN7DyPFpCwUFSnUf8cwnzEipEfXUDjunY35vRmjwAdh6vuJzseN7iEVxwuAVNJ2aKGtRZhyehGSic3",
  "key32": "5wLA28gzWNXQxnPqqGBhxheJwrWGJ4C1YaG18SeVCZHQvhPyuiQdvLwiFKAmX6oqqzMpusJ2jWT8QyjLHrZeTV4d",
  "key33": "37YDPS5FtoZyJ3iWa7DbcrXNuUCrnhAyYwNgPgKMtZk5v2SQySsYE1rxFTCxztR8G8CRHqMTVVCLbArrDrwXB8Eh",
  "key34": "4YJLpjrbUXXvK2NYG8FyJqb8eZFD4tWDsdptoPn7Lby6A6en5CuN2LQKqvWmijYHouyyuzzcCBZZctr1BQvMqpnL",
  "key35": "2Fv7cCR1pXzGdRXhcpsjkz3PvZKi4N8VR1Ni8fq26H8TZ5YEKgAQGnfqSCRVt5vRxKciZc1EVYgFwrnLq2obPAn8"
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
