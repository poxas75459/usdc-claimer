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
    "63jMfkWBB1JNWZaE4QZy9a9ht6ong1RfUJ1YhZnLdbMBwtqGBt4kkDaNhrmaZnzVJLGAFAAsNSzpksFeN2ELV4DW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1QZCb6QArYwjsy3XzRv2APxtm2m2Hv1QYm4CH1jYFFdymWVUjNiZM9oMYkRkqdLo9BKz1hxk6eiC7cK9zATbXuj",
  "key1": "4YZXoDq53Ny7MEixyKnGPJ6aAcFo4GE7H3Ruk67SrfzvtLmZAoaNqLs9RzCeA7hcfu5SNhWc4rruM6LrSaBcJw7U",
  "key2": "5GtCoWoFohAWF94tcoPPjex37RcRAYo5oy3561NgEV2V39KzqBDQwBkFeV76C5mv59Nf5q4PqaiwTKQ37vGMotcF",
  "key3": "RfDdEebTPtjZiRL4PbjMjzW2XiZMNRxUUVtUA9tnHqSj8pogFkNcJ6zGqqHYLkVVMjmMnTMnHCcQGErePrU3tQJ",
  "key4": "e2VduavNPatBirVSrP8XvW3RFzAGDovy5u9xNAyd6uwyGHHEuPSuFV5wupYEqXS64b4bM1CPgcHQASob9jJYKej",
  "key5": "hGeaHZBvNnTXfyjmtYUTojHqDi5xj4BbwbZhpJTeaGeTwhG9rBbkXzo4y2wTAM2ytsnagtpGKLMdNsfR3vAEwpX",
  "key6": "4hFm2Wiwmhi97PUZGFQ9gj6bwNPXb6TgfxLXGGv87SxHdJEx23qCBCkjsWpP285YTSQXJCNdww8TmNMh7Ft812Ey",
  "key7": "3Sy3F4SumjbZA1P3aHNdKqb7RusxC9U7e4myBL4QE483A5jbgEsSTaEiowvUEPoxmp83fkEVoLes6o59tXS3s3WF",
  "key8": "nF8Ms4DsCZw3EuJcCMZoyUmJG5ezoDp2qwuU97GSQvoigFd4Q5GcYxXniQWQnrD3tfiPk7HGw9j1Dnw3vGKiLZv",
  "key9": "4XiyUvQxzcXqKYRPCjErWwGF3vGzzDCoPzTtP3aYDG2V8ZDfsAZJQUdVZzvR3iE2BksQqbZq2tMX2859JNw2WCcp",
  "key10": "VTtsTfnAzsyj4wQZggSwjYv2GzoTnUeJkzWfvHB9ttCGWfiypknQuqLzhX5QVczqCiZ8YK36aEyBqPyMQ6N93Hu",
  "key11": "3PdDd66rJ8e1Xq4dyHqwrM2TAgDMZ94oh4itXcNSEGG5ghVuEtj6KYm4QtoRae7J8U6RHR1GdZAbCC3RLUYauWt1",
  "key12": "VGMxmAXwhRmMbMEMvrRDRWY718zoGr7tjBNuwXJFTYD6ppcktCmnJ1cJSbKLYd7CCy8JbHS8R7aTuHeHW5oFV6F",
  "key13": "2EMV7J8ga59idLeyhAg4AW85eHm3FUPhSdJRYY6pTwaj5QjEVF4Q3E7MVgfZq7edxE8QiHumoBpjK7BmYQQQfRTU",
  "key14": "2x7zD3sUYEzMVqkVp3UfQG5QHRFgzZifZGb8KXVfi984UMawXZjAyi6KvdjDrUzUP1YxvvyLb18yieu8EJ6WreRo",
  "key15": "3SqrX6aZvVGsefvymi3GnYwqP1HJWSrQdkc67dtKv3UUct5jPxaoSHomk5b9bhNgsW4pguu2LNCwhMAxf7M3BACs",
  "key16": "23Bv88NkDS6JbVwKENBHoz4JRrZqRxR8sNtwbufWHX2SZC7JsW2CxYauEL6sQDUZzWCGSsvKxGmzwK872UFcetc1",
  "key17": "5L3z6gH99iJ72pEdqyTdeyWy5XHwofTmqHBcFJ3Rs1kSFAYbPPmhwH2P8wSHruZfRTSRPFDZZ432mvEFkfzDqPG6",
  "key18": "67noGhCAP72bMfyLtQ2NZ6SFSqULa9xh4kRmz33K6LeEw78NELiryyKGut8DfoUNXNNSNwviA1bUn4G4W6Ur3Pw8",
  "key19": "62idnhbAgKGEW6CPtvFKmHo7fGNA6o94Z3cirSRZZ22UFD3PHowJtocAoDjkgYPsAnd85G5Qq8nSCuVZg2nTuJH9",
  "key20": "2EaRxAeM2XJBMqj9NYgzGFqPvKwyFa99RNhRmVur1A17TGYny9rNeJjxjvHEqjtwTZ5C1S2Bjo1wDNUweNhDdX9e",
  "key21": "NdCqiFEuyGpUEyg7K8W2nXMZ2L4JXi47qUrxMLR38k5V2EhWG7Q4QC8KEGi5fotHcSt5g8T3QG3kcd1mKwviyrA",
  "key22": "3Luk8nFnNR5nKTFCLaE9gniBs8ST9NM9MrGbZL8qh9gzmHy4VFuukEHrwME6HSZFsPJky7igDGaamX49m74Pe3Fs",
  "key23": "E2m3ZSAEtFp6ZWyd3WQSQKMMQBk18Yu5nS6Rxgg7Q3bQQPYEEqnDrGxGmyLDX7dW7fw9CpttkW31pD5QyGZSCFo",
  "key24": "hnH9v8WGrHknwbZuaz6Twgk2dHYZWNwW57aSMAYb5jLhEj3jcfGKmJgZSGw77YmTkZPB5QMea68pHvkibK6G2FU",
  "key25": "5JFEDdAs5BXLJdLbq1KoJf2FfEZV3FH4vCgvSdXWCcMgN7q1vvbTNxWXVYN1MdUnn4kMGfJBBD8D5hLt8WU9xNn3",
  "key26": "jhPFE2aZ34HSLFiMTtQ3jRNh1XKgfYM32uDq5qRDFaGsbbBiqdmjUwJBLSPaThpiupNY3JqghBnNqgi3GEbHVEK",
  "key27": "5FsTe32pgkV5W6waBb7mZxXnfxmmGpXg72iQZXZkxfLYDrxLrp8yGR7xgJSbV4WmNEc3QoJM4U8qTtoRHPLZUHMG",
  "key28": "28fSkWyRUgHyPaX6o8Eifua5rY39Z6iLF6LhgvNA3oi7Y1u8wtzGUqoqvrpzKyncDt4PpLuqSy94dreLfc1VHQQn",
  "key29": "3S1sfmWadXgFofegA2WzZXBhPPN5bBYq3P5XhY1USMMtqR8Bfn3oBpD1fewn8eFPsUER9Htq7WTPvysqNXZfaDM5",
  "key30": "CSoeL6P3BquML1wVGjqLQNC15rzZAL4GAEJib6AR91kbLx89EFFNHnoqtcRq8McdRRtKEEZ7vsozshtZZEXxSzi",
  "key31": "4QHcsuGmEyNWc1tdFg5qFeGZpv5pKiAxp4ZXkS5Dg8Dp17Qak88JE8UbDRWQgCbR1pkdCFT6jVCUnDdCgsTHEG1c",
  "key32": "gq8EQh4G6idmwqrmJsEUED2T7Hv9mXaBktXQ3uYXJ4UwEgoCewTyQabRKhaPNaYYqtMGnid54xnySK5e9ZAtEvW",
  "key33": "2AwUYSYVAYWrcBozHnUT4idywuw1NJbib9eTezxFqkpWDfWAwSk32epsbVjXPdv6y5dHd7Jr8Y4RYCUdYK7AMW7B",
  "key34": "2XMkGdTWqGTCitTizhytf8FP8yKQaJ7XUhJqNxSunbGQXrSXt1HpXzw1zYYiWi7d3B7ni6uUVn8JwpE8QnJV33RQ",
  "key35": "3SQacUrff5pTx9j7s4mXW5fiXkzbcEhYQUixDjzEra9vE3tyH76csU4B6KZ5kjkbPHjKxFTKbK3zu6FXGcrBN7Xf",
  "key36": "4YEb6vwitvgd8gtAjTiJdX3Cx7h3GbsiNQg1BvE4zromusnAMgPozseJ5ypkofPoBcMkzkMnVNjvnvR9PCWjSFce",
  "key37": "2h5cw4uWevaknGvhZ5CSRzwXKXNG44jus1Lya8h89nrgYbK4vMSbtVU3cEcNsBVD4EeB7jn49NDm5PsamNzfiKtJ",
  "key38": "3RZzaRYihVVmayX8NqsGy4YRf3k213wKoDPWZmcNSULn4ZsdU8ne5QAG2MSJLdHhiBuYACM57nvE8uXgUirYftNV",
  "key39": "2MDP89SJZzrxwaCzJmFmRxMeF28hpzW3x6aJb7QxrdGZ17jJXC3eoEpKRCAzgCGasEYsNn9HvzKbQoytYmVucxHw",
  "key40": "4V6zpUHWDXYghjnKQ8vWZw1DvummMgES3urukqNcp94Scas4vhJXw2t8WCsXdpWK9wUjYMRanHfwzk7XEyy2PbT5",
  "key41": "27Yz3sCjFJMmMauKrHYgoPdzmtFW2Vyi17WfAqNyszcLVxZ3WJN6gsCedoFyhsWqdn1kwA8o3m1BW4VL1LJQ3asQ",
  "key42": "4Bk8R56Ec6L7xEjNXDKY6cegksz9yLjAp8XsSLQs4Gmvs5jA9f5HHEHHbhsUz1T5dXSqSvQDaTHSVWFXaMgagZNe",
  "key43": "nGUDZ7o9mBnouDZFAZ8ionHHLY1dVaow8mMWwBYVzbBNQS4b26JXmBtnGgLmf2mVFfCey9MKHmLPY5hWjGDHSBW",
  "key44": "4Rb2vPrZL1P6qWpjoubi88E4rVtgK1untZiNMre36wU5tWqjxdJajMm7kizix1psZsP7rJQ36nUJysCHvhPB6VhX",
  "key45": "46patApTRXnUxpjUM64tyMi54h9qTt8tUNCHLyapWfJRa6jkDKjJaH1VD3AP2y5466EAKybAjhknKRCNPijsBxGZ",
  "key46": "2NxTr5eUGy7Qgnfjzfa9G2x9MLg47BJdN5bE8koe9oZAucjkQ4S14pj9sHE4mJj6i6AfMETD57BuRcHnuQ7Mqexq",
  "key47": "2jHTaX53mELJxRRwaH83oS7hi4B1iBbXiS6g8rRVmBY6XHCsPPQunG4WkEoSAUY5UWmTxecwfHxnEeprzsSX7TJx"
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
