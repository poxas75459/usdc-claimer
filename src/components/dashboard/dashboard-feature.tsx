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
    "QndMCDkgi9eUDuGGkz3viFFCfsipvF3gp7RFYgMtdUArLbk5AA2woVuGUxkmsYF6QsFRtwqu1RitFatFyZdrCeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21iUGxtJhivuvcv6DeLXYPAevTnZxNkaVwYSCXF68HLRyvfiEjBF7H47oACKd8y7H3EWvxxCAGsBH7fGPLyA9hhR",
  "key1": "26JpeoxMEmL2Kidy8f39hGaJD5LJm5cccLU8ooqVaJkSU42G17cP53FxSjMBxAwJ3LonWqJDdfY4XjZS182e5QnJ",
  "key2": "oVvFwhCMmkzGvm2LuyVG5jsFzL12goXbVgZkBkBMqY2U6bReUW1AgBHjShaQC2EieqSLmCu3bG6bXNSzje6qRNj",
  "key3": "4TfvyQfKnrGmqknC7WWnxj72Rr1J64y67rUGLtHjo4bvmyU56PMK3Lz6YBVKaRjTtAoAv5Y2RLrWa9LdKadX4ERR",
  "key4": "4PT39SRRZwfm8DD97qbdu9V1VqmWZtgFn74H6xHG3ZkMLQiBMZhG1YRtd1Tz1ZVama8Rg4GokH3h1vKM2o44xuZw",
  "key5": "4MjUcfyAo5kx1WLduBuJvxeRvHTSqPEyQFD5w5mFCgXXLEBruyMKeatdwhQWAfm9kKhFgA7hzwNDbftuowFf1zab",
  "key6": "2GKBszDvbZ51rgPETB53zmX86oNDg934HTJnm4pWL7qMBuMQvRrH1bJiezZFQJZNRLnBNonU1MhisroSWzEMA8e5",
  "key7": "4hCsUoDPKVnkQTDLoKKSHmrBtJUMwGjJiu3MfTHTbw4V2XfvKUKmTqdbHGLG2omtGRmULik7bF2Y15PoHsEgc7fV",
  "key8": "5D8CQgTd8ZusEDNMxGS2KY8UUwRWLE8aDSTavfkRvUXT9TwC8m5SicnEs32266CbcXsYx3hstzeeSuNVQeDDhaCh",
  "key9": "3j6BxVEcWPiugmcLhUDz7sEACuHaUviiWoHjergUFFEteBwsnQaui7HnZtj2KruQnSGeiCzPwY6iLc8EHmQ6Q7zy",
  "key10": "5UVQG1ZbMNV5vbqpHCR5aNDS9vGo9FQxtWjF8UMesm6wVFsvMnf2L21nL5e9hLxa4fnKkT9nJitjuzhJUZero3Qc",
  "key11": "2utuM8i97LWqhQSSCBqUFY31Wi4CN2SK1adc9VM8d3xoXLy1PwZv66d3JC3YQLdVKhG2V5UbxC8hLqvUFt4LwYS9",
  "key12": "2XCruqKV5eDFPoYxezymvZQxNmN1WQ8eYo4JHL3vReDkXsn7eDfWg3Cr4oZaVVzRovysYWoeqx8NDbVkCDph9qpk",
  "key13": "5W14Q9izuN4Pa7jqUdHRWF8E8zu1nv54JQvR8gh6cxn7uX4fuyfGUNvPaCAH7dyCVyVeDUjNja1Knr3wWkQdhbjQ",
  "key14": "57pPxzds7jd86ptHMKvPobeh8trGvUAtDXpVE8aH8ScwGDmo2gvoSxfgHAMkTJ4rF8TUndWfmt81KMk5YryZ6r1G",
  "key15": "VfTjEYdzNJfUzchisCgi7KXxHxhDtgyzpeH9WkSpbj4yVoffgQDKoUzPUDXMZBzkXztbP7Ji5m3xhzx2Tc7xBeX",
  "key16": "ZezVp7sfwJ2rJdnv7MFRNiae5iyLVbUkDNqQHmMtR1fgPjvQbDL5oPJCBCgteXTCt4v5oB4sZp8SKujzgSCxQ8A",
  "key17": "VLgTUS4iuUNfkZ63GvGyL4MjXicwmZZuZVowzHeXGY6c2pvwEAZn5Bt6DUkbcTQcLaM2HBqFuuVsv9ViE1d4sNg",
  "key18": "4zkYqfMwPx5fSo6Uddz6APjRkPxWRAZJ9gDrhQmotsGaVggKMQsgzxuKenxmu2qQyRkRzJFXkXxwwBmsuJGsBecf",
  "key19": "65C9ApFzcNe6nBjniroQbcp1nBxKQ964ktJ4z7LdYdcC5zLhRRRwNt3EGsABLM73nCLzNMxeqYtetTwwDcSYV7rd",
  "key20": "knks3cspPsTatiT9wNZMsf8tRmykXzR6g2EToviuMarywxj9osfQBaFbxAZ34LzuqbMPT2PmYDYtZLrhRSeV7Qw",
  "key21": "2B5ep3kSxWieNDBtTedsFthF12KaiV7CFSeZh2H4WpoeiBcxwMDD1zmpU9fRGLEauGYGL1UbdP3FZNqbPxmit6XQ",
  "key22": "5iKsgEaDgeEg8ARGv9FwZxBSSofcbNJDFsCAMY2MkpuAJU21EJ6eeh6fGweNAxbxzeQUBngBvjtm7KcquEG4DTJf",
  "key23": "4M44itHAzAHXxoJ5p7KLhgCkcM6MVC27S92Hqk78RfkhbVG7mzYAdcP68Fqbcv76LeZwQZ7vFGh4j4qe1UoPThnr",
  "key24": "5fTKwT29frjFan7Ki5iSu5S3yZapkTp3yB8oGu4a23JCP9sKqwjnUNTp8PngUDC5ejLkUDAANRv1fZJDEY9HbhJk",
  "key25": "5MmE6yyHGUj7VmZwrmehrMG85KLofP6Ce8FbZLUS5QJz8YmkzyQiDHwW4CbqdLM3b11xWAqDhLTWJv2gb7vUXx1L",
  "key26": "3jqbf4H2PGRy6GXVU6bNw3uDXjkqbEovvg9ANnN8MaWzdToW7uVT4S2b3pm5rs1metrYQjmu9qFJzbQP1u8B62CZ",
  "key27": "m7QUPcXH3Teoei9azvxvVcYdeqZP5BFMmjmYUHNdAjuWaV2tS9yBnAiNA9hJUf65xkGCZCnrQvwXTVTgPoh6Q4S",
  "key28": "2FKNrM3eoNDsCVGe43WkQBAvafNQ6wigoFWDnaEPCxek3uDXLaj6hmC2BRfmDxqae5kbQKVbMwxQXw3s6ES6XuY8",
  "key29": "32V4zxxzUp7XQvaxBy7Gpaxim3SQjoYBoAejAuXi4u2UFU2JCu5qfrX13SYqg8PGRUyWerzT2fvqKgQr1k42Mo8A",
  "key30": "4KKB8WxTvr6kkMvrg9TgnkCqDCJ1u24E2WTECukbEYubX7SV7a4rhaATjTr1ftNHjdiazWV5cWt22wdcEGyMJ8do",
  "key31": "4aSMQ6xfkUdPE27YZS3afE9ZeWhJX4MTYpDYcD4rWVp63aMBvRUKgTeTX2JxW913ytZjyV35kd9JznP6hkC2KtSU",
  "key32": "5s5DenfQMHd7zUuwXo5aYqVpTQf3JvpDaQyiCegMLum66CFFu7B2iBUTrYfmFn4RVNMythpu9TQBL94cTdKCjcbs",
  "key33": "5vMKGruXvEsq1s4CGf5ge7AdehyqaPL1ca2eWVHFYXzgLTgVgDyKdEmE6tFoNCdRzGh29BL6zdXeKLLm13WVDWiD"
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
