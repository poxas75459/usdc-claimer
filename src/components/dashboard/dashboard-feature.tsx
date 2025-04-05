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
    "5cBbRFirAZz1GScdMJwgi2zWZF5bGLNamwAJUDg16LzbWhYpFwchwNiptC8B3RXjFxoAxQK6SiKqG342Cwunnti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uyh45PiJfyjfQNPBhWXrjQ6mmbA6KGa65giEdEnKYVVzivSye9bnyWjpgnYVKwRZ1o2ZvdDHJrDW5741LFBouxK",
  "key1": "3jyjCWTkC3xrzv8MLrPv9BBRJx9bZ1wj3NRjWupBTBHxq2cK1pEkhjbqrxE2srMGxwjMz7ng46tVA8pWJDKGD8nx",
  "key2": "5P6Maa3piri62QPSYZ1frrMCeuwACvvwyEaQz616fqomhTZcsQoZNs3Nd372C8jkCe9dN9jvxrYGGPTDagtKw8oA",
  "key3": "4hgYQaA9JGu9ryXmTEh5vvcsTfatGxAvVrS5n4ha3XWpwpEn7CGywUgDPdyrXGrYDoHMjpkUuqA7HQ9ADwyeHx7U",
  "key4": "3HJdQRyAAqcRzNn3ijNURZSgb6W59SKWa2MZJVCXtmmP1nhfwNDYzqTXwqXFPJzdEbWH6t5Q9HGMuGdUG1vCrrqi",
  "key5": "5U5mBxqsqNMnEFHY2oxo9czfc3rhJwK3g73ubCTCDM9Hn6dYSBf3LsnCxxEBentvEWzqDZb3yu5yNhz2VE8bjXpu",
  "key6": "S6XMKXjHLRme9t5QhVL7tAC2K9hBL5YmHUYqfsWmoU8uRYZct44YiZSBipsxdg3Dw7tcHdxAP3ryu8iVMpgtfTD",
  "key7": "5eQwr9bCqHv7fXRfsWdRgBb2QBV4FTvYG6ooAiqJvjEd5n9wuFYqS6xPXfUhwJuh8LPbsjD9ECXjDHenf9zGA4qb",
  "key8": "3veSJanKw65CGYMtd5txvFvM6hm7XhoW7KQA2ur5mwN8QbMztYDmBa13PgTftbG7HHw3fqabVseKc597wFWG9eyT",
  "key9": "4he462TsDckDKa7HMWUZxggTvYNGpKDjeMMPUnVZmKXi2zrRDLkiByhowMZcdUrrKpyzjkgt5VjhQsb18Y1gU4iW",
  "key10": "35pGLqTbf7XUroDzKmwH8Qh3dCYWZT5SVxDfHq5ST8rhD4uS2Pc5SGv5P3jF3d2x9epNBJvZ25ZFKVmu59LyiCJf",
  "key11": "2jnVTn4L5KdfEYoKFH6TrrChaMr1wgMRhTxHwSwBYDkjC8Zgr2d7pE9qL2jewb933o9CvntgikBMATFCkgogkCtu",
  "key12": "2jYyxJbvtV8AghDhb3GSc1cZ1UTKQGpD4tDLZCL5ccgbnpvkur2Ukt4j4GtpK51VMdsy96HNDAXmwWNVtmNUvDKZ",
  "key13": "3Tv5cBDzRrxzG2ECejQPBJk3m2N3FgbPJo8pbDM1rJPRJ1jYQgXTCg4jzFwfBFKXcxiVi4Dwb7scT2dmHRzDaqMv",
  "key14": "334uuoccp98GjhtuSVN3HWQGqFLQKY57hNzTjggYPxvLVeRitf4gWy3yKfohRTZpDACFmHPjsqtv4SZVDRAeEYrg",
  "key15": "BPNTSdwKZ41whtWpPXKzaJUF1wxaPhob81HS2cwzU4oETLsZ7g9eYE2gnKeJLKAiQRm6pBFhJgJXFr2jqDpHnut",
  "key16": "4V5kCoKKZniRZj4dMz8BHs4Gv7V7R1TGcYm43AzPLM3axBQ2ag156AKertHnZGbMEZmwb8Cr6g17YpyRBzYVQCqp",
  "key17": "5uB6AwVSys81BuzSmQWsuVkn4W79vyfwjmi6QydCryX6953kSqQa8xasUpv9PimUatBLbu1UxKNyRT7brHfWKWkf",
  "key18": "5dKMHXkLDkNKRoxKSCv5quPR7VFuhRfbMxpx9nkQxY5CukCGWcp7WhnjErjiYW38BfMmXvv4a3heBUh5DNbhHAY7",
  "key19": "5HdhngFKCMqdrVs59gsob74wdt63gSGSyiWrL5y1HT9hQnXtUPeWJHJpnwGNPBNfDntumR2HqZdZAcYpF69dnW7D",
  "key20": "5cUZbjUZDDxJip39651JV8V3AEsaZidmtjJBGYkZZEMceN8jTvva6w6HnF4gMu5ZHPcgTGaCW5BuPqnHtqWw4mm6",
  "key21": "2PHtaeQ1qciLtbHnFG6bvznpT3mwYNLjL73uHTJSXPVL3UvKz7ndoZm88wNde1sXue3X72fvcmVYUjSvposGuuH5",
  "key22": "4YVHzzmKtrRjK2siEsw6u4xkA4vDDmTEJJohBAnhrvLUzSud84Datp448UURPMJR1ZiUK2pM33YsBqNRWquRB3dc",
  "key23": "5PhnCMHUzgPmaEp77A3x8FouK7EPwAffdmvaC2FXR71aJbSWYCDpHCWqr1gcPAMPBjBVfhSixTqaZih7tLqjiJDU",
  "key24": "51ipHxdvqt1ThomxPdgWcUj52qBCzce38w7MyLEaG48c8QxJVa8qv8R8z4TjHK91zzoUs9pN1rRdUhupMnjx9jUW",
  "key25": "4qesVK8GeJzqYXJufGde9ozjZS6CfmC46roz9YX8jS5vtGj3AdU9T5MfNF4dStpYNmEH4prvyKzNDin4tojkBctM",
  "key26": "2xNKrAji78uczsJCp6wZf5mV4TCWumNFRZE5urte1S5TftH3fvz377o124zKuUHtViE7Q6vDiWyhrChxeM5CjNoV",
  "key27": "3FjSfKn85UY3ACK2Ak1eE4eNQke6zRZbT9J741khSdtUzU9wnbLrRPBeJn67k5jbVsMtDbMrRJsfPZFVUBkR6BeE",
  "key28": "ijrbHp8whTJS2ZBEvTh2JCheYwtQ3vfft1eT9St3AgT9J5Tb78wdtHy7qvLR22yoPMTd4y7AYyi4sNDsNLJf2fT",
  "key29": "2GYZ6WL8jUxPbdJmGL774H2eKuLnd3aWq2DqsgyVzQ1uK7HfR6ArBzxsdbeFYyh26y25aoiE25jqUBhFq7R3aCZq",
  "key30": "2iKzPPZukrHG5PdNEM7JsYajWQfRrDgK1m9jtBUAUrLTgQcjFb5hggEwLBYzvEkQZtfpbrMYfh5MgCDid2puq8Qt",
  "key31": "25mWBKh934PVURBjGLQH4WwKWb1bktNXeoHJdvx4GuTR2KGHGLkDMQhx28H3FBfzjRUtYfQsjLKjDZMuxuVXb4Ta",
  "key32": "24Dqaf5qTKigSmnXDhTh7XLSesMJGnqAybU6yW2gnQaJXFfwQFDjoZXg5efsDKhJg862SKGyCCTWguLiTtEWTFLb",
  "key33": "53tbkTs5hn2SoareX7pPweAZMVSpcAtAhfo3xnF7Q3NfRdNTWhusy1FrUgvtQ5dL1mCJCtcM4fvWuPQ7G5dcreo8",
  "key34": "5DYgHra2wu5hzZzpRkHCVHa48gDBQV2Ti1iyQUbWu7MRv1txSVh5tE7aispyPcAkLBrvQAUqVPz4ZMifPPjX4VvW",
  "key35": "38qduTkPhAt71r65MrX2ALyJwxzKs6u2EkzbafQxywseqieNHqzMZMX7dtPHpWU835qUbp7EgSWY7oxJEASDtkwn",
  "key36": "uwc2YmkpGEes2dnTcrze9nJ6W3wFnAupV4BxqYYRLWwdeC8nstGVwkgLpk8Ji47HZK7PKMFMxkTwCrAP2qMNocV",
  "key37": "2VphRkFipFX2dXKEjQc83XfqkBnyjTheNg2zxXMfiz4dTATVknzF8UwQsSwPHjHzNGrAC3eoZQX7Etf3o9Za5yT6",
  "key38": "2nTokNrcKD5nDrDY5TDbrKiiVsrcLWgyDMqnhjLkQvL1k81wEeB8AQuuE7YYKCKkgjq8RjbB7K4nZhZYvXPVCqP8",
  "key39": "58719CJoguK8f3tkPfq5ZrjCXxwLurisBhQpi4ZKU7evNyDtqEkckLV7DQeSeik8Pak6HLnc9D8NWwBHjBmEkVbt",
  "key40": "H2R2CQPi44ANDYHgH6oMc8o94vzMpFZGQwtcLQUbsPW1ieQrgpbH7FM6GWwxBPwAJG9JkRMQMJ21w88EEAKhLPD"
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
