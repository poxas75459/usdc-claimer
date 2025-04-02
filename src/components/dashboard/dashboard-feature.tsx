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
    "38mXeSbfuDzQgpQPLj9DbjEE25pRoxdFKkBc6sxCEniLDuV7scZPi3ANdSRX1WTTR8f9aqWP3mrwxmNDZ19pe97u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZzT3ZtGmLdYWQpWcByK3eyHX4aDNuo2VmnmzrKDX5z6wECxjnvGCQhavy25FmnJXe1xswteueUKD8pLY8h2ReDG",
  "key1": "48W2zNnJKo8KHcz1agfdkDGV4QYTusmtXQN4cfmD4fiUCBHUwCFrjmBwN1czznetd41CEoDDK7FyHcSuMCyJq9CE",
  "key2": "5agvhK3WNgGMyzzzghwvFsqxHmuFnAMZ5tvV49f9okuN7cwNuUFassqaghabkQ85MhuMsuKNSqLtADUKt8E4XJLs",
  "key3": "2JNZodmLs2ZRNhvdKiHqyEtry9LkHiMQq4YUj4xZocEp92UTRGgKWzZFcjGf4drFDo6qNqacEdLpRavhEbi7JmrQ",
  "key4": "4cE4ZmizYfHCpEtEHhuEsFdzfxz4WdsqycUpAaRzqPDH7ukP35MCT9itpNDXmQkyrT7goewRpFyhbYgMC65LnvMk",
  "key5": "3rbXuPgTEtdiVYjsEJkoBx8WykVedGm6CbyqSrNHddJMu6kPMLEvuhtedESbFWtBiMG2xcVNpaUua6nwaSwPGMbW",
  "key6": "3JRLPxJm1HsMyFZmjvyxz3wcZYXSRVKiRb1kq1h4tra6C3FUh4mS2QhyB1tJypkWaeKRHrRW82mxTCrUCPh1rAy9",
  "key7": "4LhouofFHr8fXsLBD6smsfPbjgxuLMfNoPxgkVsix4aENf2m6VLnXYFtZJUWyfTTPvjuFVV1KDzufb68Smwdv6h1",
  "key8": "2N5DEZEsy4AFBdh4975PsYZ2Ne9iJj49KLJShwQXap9H5ohohiT7cgTNkHsuEwiLfyj6HJQ3Hdp7558t1wNypdsG",
  "key9": "45HicyteYk5cGX33LHR5QYAshGD1XnntJEdePKtRM6BTHhthiBf3HsefuBfE1bbt4WkpJGd2s39Xsg7uxj4yQioy",
  "key10": "5rdzQrpPzHU2MUvZaD29gaxXBuiXF5gGbKj8GpvYXp6LV1UGsquF5iQyrUQxhLceoNoZg2Lao9u95NTCNWBWW8mL",
  "key11": "3TsMdogEiVcj1FyrNFWVKZWr4M9JQJ1YKZHmPBKpzCAgs8bxqNbHjLgeNzw2aBg5eJastTLsxFDwrCTJFdwNKpKa",
  "key12": "3ngxaYybGRoBs6J6cWu77EjTE5bH6QDShXQH7D6HA8cwFpcVT6TLU76cg2TgxYMXnAjjz1heBk3kQvfcxMRs34Dt",
  "key13": "p4y6zfEZRkwTbBh8bTSQafDyHYgqXt45ZnL8xi2vwXHmpAhM6VKQQcvoNp2gvdiUtve7wjhgjT3iNidrSWo27cs",
  "key14": "4ZBErGv43trqijcToHdm9uJqwsGaKM8Q6ZGwM9JgCuwYpR5xieq32wfaq5HkByunHvq3XscLJzRgEVpCo1u6EQTW",
  "key15": "WHQDD9rC7cgcbNgDQ4MUsqQRPavgMdVsGHevBoaRueDjAAcGiosk55Ajzhvg6uPtYon6LFFTAp9xBPNzMDppbKZ",
  "key16": "2gpcLMTR7CTioF4qKk8qWL9CYbxM2uKXvTE5TQXxp2bsESdBWW5c6HhntejWxuUCV1ubBTfn55XMceZSsHn8yDyw",
  "key17": "3G4xDFSdGHAHkv29FPrQwCmwBtMP91zWvbraRsVUU72VEFhAiKG8z6jx7zf7cURqjxozuXybUNEt32tDz5JJeYvA",
  "key18": "2HohMVTr6Hsu99YxoUriAVB2iAJAbFKamgHiS8B6E6SBAnmmxN49uaLXsjfRfsHm5bpaXRR5HiqfreTKoWWaQYKi",
  "key19": "2JJZ662MsMxVM4sGzfjU8AFt26VMEdcgZy9yoWNQTVifibca4nJQukgu6HhztpmTveGRixQpzv5qtEGmR7YuBefz",
  "key20": "2jDLutMp3vCV7HtEv1wPf6kFF1pQJULs5RQhRXYzSo2o94qDJ52rgrFQ3q5CGKAk1HBLRgQxukdiXSAp1KbrCFLU",
  "key21": "5fXpF4zoy4EWJqBC3yjZ9zWu4vyejshmm7ZprbFrg1nQisZpZiooMqtF3cGYvi9bmN4f9ThEzxHcMePAY7Am9rvJ",
  "key22": "3nbxWW38Em5qLFHweWYfxJ5W5eJwRqb2yDYvHZzfCeCHNmDZPDCiLBMJHLFKvMGFN8e6kdfDXJwJNh94LErk2L91",
  "key23": "2F7TRpMcByf6prdxYLw4uUSF6WTah1jVKbw3uUyUb9BfGJAEmerZSPiPUX6osQccQXMpi3MZCLZqNty4HLaYmMF8",
  "key24": "44XxW6cfJewGN3JFUP4oaUnJwrzsM1TYv7gTk8UuaKDzdtTu3XpzP5o6RUQcoY5AUj2YuZfUVgjHaXcGmQjJ7y1W",
  "key25": "5ZAtmX9UY5PzTzTfCacAdQ6hDr9NWJhPLJzZ2oRobtUGzJyomoMJrzcJGdAD2dudCV7oK2pCm29AH2F3sL47ZNEg",
  "key26": "29Ki2A48887EhRxvkpSWH47p8ckLYs4J4Zqtgh2AUuLswggg5xLPdc1xSD9MLADqXF2Wjd3aaFcnKuBGnyzjDKMR",
  "key27": "3amj3RAxsCVyuXJ4To2eiDQgma95hVFgnYSHAb1dZv1a72n1rJhbGpr9ByPoPiEryTy7hd2kLwGf8tNkCf3MZLpb",
  "key28": "4VGTdw6Aocqacv8dQtpSYpV1uLoCgvE749Y7n2rYdsTsVhVkSLpy2JqUADFfnzFT7kfJ6tqrPnFyQSgJL37i1tck",
  "key29": "43eQz3FMZU8Becsxs51YvohA4e8MkC5eh618yyAdQQFvMAjYTYus3Cb2G7sW5EQQMBQqaR68fEov8fXznLHQ333X",
  "key30": "jjpZQ7F6isqrueHJT64Xd5fShVxwDLb72LJqoqTvqvrJ81eknDFdA3DDNuxUq2kzyFoMCdRMbzy8SA3DhyooUDE",
  "key31": "5tFZwypR5QCdwC2rtgtbPFfWPVvsLX6iEzMMV7pzBnZXiinfyCU8C4q4k4TvkFdRjEWidHhVs8kpd3UeHR8imxD6",
  "key32": "4RUhpTCAj7dmMHeBj6uFAismEDspkbqHrEhb9YQLn9i8neKjTZdJCjw3YJSg8rWv6j8UUZtLSQbocCEMPwrzRhgD",
  "key33": "5pcPGPNxEZo8QEeP37c69KeoGWgu8kSSnH3tpX8jK1bNa1sC7JviDsgvo29Z7r2wqDqcBDgcYnVTLnexxfQFm6o2",
  "key34": "3z4u6Xjd112GJt37RD5FcquUuV9TGjrWU3NASdNbfMhu3JhpGvAPfSZACLHZWUYY7SUwKVP5R9Wb6dJF3G9y9vmD"
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
