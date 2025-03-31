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
    "3R7Sx9oUePSVe74iBNN9bGopkgypFKnV1xQ9aZj1N2XWuTVsMKcj9N2BPw4MpDpS5sMKNDgYb55aoAcayPjusXAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67bAKCHjmwQDb3rW7mo4qVWLM8w1NyzXqiQ1huvuo6vpbeKB45yjbiX1KXzekhsbzqNQCoZ4T8HW2AJc1UmgPH5U",
  "key1": "hZ8BsTMS3F8C2fL15PhWMTNFteMiGehdnwQXBQXoXU1nj5tkBS1btazZkycC3JCogGyRHa5eQAD2iBjwZ7bgyVn",
  "key2": "3kyDAbjUb15z1FJaw4eYBGaHbURE6KUCst6KeMEVY7mXAqznhhaeZ4xSuJEtUdBLMK8Q6ZvZc4ZNAadodedEqHk2",
  "key3": "3KXZcvhs4i99Sw7keYHDEbZSGdE3y35TtLdhgBBzukRs9uJ2UyNQthTffDkFy7tQ89MygG3hP4AGWz9ZpqRu1YmK",
  "key4": "5eXiJKmKGEjCg5VmmeRm41P3XRNhMxo76zqYbAtPxmv1WtXcjiR65ELuD7X5qfXF8xNig9MRf2RVAY3QWDg6HvRM",
  "key5": "4PphSHEE36hTn4zHoHZqu2hCqFocG3tYphjCdoqCUQK9ERYDjj5oZAfbKCiW2k2bW5SEWFzgxYSxEyfhsx2qfMGW",
  "key6": "62M98X4ddKhhExnzopLhzjJhbWRnX5XbNaoyuCajJcnhhztaraiqTsXcjWQgj4nuibTWFcfY8DimEvzwR2LwrURD",
  "key7": "3wVBeaaL1poHhZ7WHSjASyRheX7GzQ7xbvyJBaxg64rmADicBNHqyJr4yTNjgkGQmoXnHYkw73KUxWDqvVkFa6jg",
  "key8": "3sC5NPsq6NPQC9Mqyu4Zoh1nKQkzbLTVcdTPCw9RLJexems7dU8C1eyiGPtjCcD6N3hvuoM9kQvUrm8UVpzRMwJx",
  "key9": "2cgMPBG6jovUyW1GY5HrA9tMFYiH7oGgrqEuBWJUSEh5qBZR1UnnA9v5Gqt6N1Dtgd8WktmdmJ7WTuaHymKgCpGR",
  "key10": "3BeKwogj2UKaUHvYALYMQPL8orgwzcJC29Hg9u8NPwqw576aQfN5R8CTsnFYPr9xaURQ2Sqe952tKFXjFP3pSrDP",
  "key11": "3RRdGeR5iEGE6d5YhwjEjuuUvYfn2MVEECZGZVFDDQzCcMHKfeta3FchqL5riWfgMYAdtaAZJkeifhpihiaZocdB",
  "key12": "37ynGbH3HpWphHFuqf8VvfRvAUZp9N8egNZAwUaqx52v5a9uBk67CMdnyNXQwFKGG8jHzf57yHnTu2Kf8VPumtXL",
  "key13": "38E9nGuXduRNALQTxZdZavHcDSnJFiRzR3TvA1XSi6s34NBuWuBaXQPjMc4XR4Qjhibc3xjTqZTLPRTnEQvR8nxL",
  "key14": "3tFjsh2CHLLnkoZRqGR5ugN5JCgfpE2YtUAXAfQE7fkWF34zFf9mxxj2HrdmHZxieJxLAZzzNcudrMm66GtRGJCi",
  "key15": "43LCXQiXzmM9a4KnazvzUHwWqQ4AVEuojvjyG6k7TapEWdUNsjA2334AQC15VF9a4LNqNyW68V8izWk4MguJBFPS",
  "key16": "2D1XUe8zz4KWTx5nBJUhpRLr4K8Y399yS3m2niGeTy65BKbbkmvtUwFtQ4zr7CiRUtEGihPvxeA3WYRQgnU3mZmz",
  "key17": "26R1qQrc9opG8LcociQVKjE7QL44PH3iHUkicfCB8uxn7GdhrJg3Zjmpqnav5R288nSdFyEu1iZgoBr8otjahVgg",
  "key18": "5vgDvAoveWnpHNjUvzMaMZJu6PW8Gf2ZHtFRAmPDQjh5qoSGfpocj3jHGH9LGXsCwTMk6m5v3eRn24w2yRhd3QUz",
  "key19": "51NQvKqsJ4x4mn6aZUecq3cnAwTro63Bv5FNDwPbrJVahBefsnj6i9kxX7FU2g5V99675KrQKq8eqs7BLc6xqe7V",
  "key20": "2JBF6r9MV7eB9zYYm8Lm5JxYYQWMh3yC4psaHFabPRmnrztTFMR4qy3UFdbvLkoDj9rrU4QBCs8nGr5mwKWtunay",
  "key21": "29MJZqnWwsUxvktvqcSQabKMMDBDCcaNwhwLkzzwQ1zqQvY4TLaGyQMjuX6j6MbFAkokTMrPZ2i3K4EX9yvo6fyB",
  "key22": "4dcMHKZb5tvWBbT4WX1TsBbbj37LN8cSW9PKYEd9KwaMoqnR28qRZ11WLJ9cYkPTfko21GyaKY8pJzAKrDX1Wins",
  "key23": "3srpnjsuvtddngKacJE9HVRpkswswT6zhXtZPvwtFWfcPPta85bA8shB8offeWttqzCXegS7yK7JpJZvscKCDbx8",
  "key24": "2U1DCutQ7aR67VrNYhQG7HWwXN2WekjCAc1RbC1btdYdbvUWdMZNtnsSEvpEyXhRCTtgBQMgsSotQSUxu5tY24Dr",
  "key25": "3YrjcNCcZAUfEbAnTPuzTVySAGzENJZGYwP53u6NQLCwzRdEEQTUfF6t6hiGSyRLKoH9JMadULaXuz1qhhczp3U7",
  "key26": "4gV9To9RRBHrA7woYoQxwpieHwFsdw6xy5Edv1WcR6CGuhAGi1gMossgQCauAJVcc7ka8x3n4JbRnNzHWthdCY6E",
  "key27": "2kLPnXFiZK6q9fhs28mPubJ5QGBaQxx19CGQg9kD2poYoK7wn2NypSFhhuNPWojuCqnuztGGeEPhhKfszyz3gceP",
  "key28": "24Fjioa3eVEtkqzP464L6DwBASgNSZGRcPYqosrnBpz1DgDZCEeyBkBsc2pcJUkTGEdVQa5VXeak1K6cdrvZ56aq",
  "key29": "21WWBNhXWxdaWKoCQziE8YFUNxgigB54P3rMUiYW7xNBKgpRx1ip1W8D6CmCsAad835oVx4UbM3hxB3sjx6BA3Gu",
  "key30": "5xjyNFpXvwk7c91Erm1XsvBa4vZVoro5wovaVxzRyLqVZ1eEAkkeryJDBTe8jvTEyQHwqETzUvHvEdzvaX7uKsYa",
  "key31": "4Pahbjct1fdbnjbrzeqDXTYx9ek4n8N1SuRg5VZDagAuYjaQr9xmPCezzoLCD17qAKQSEuvERq96sRd2c5H8BppH",
  "key32": "3ABW1HWHcc9jyYSbygHCnpJ8ZfrjbCrseCncriGWpxbgpGZMgFSXfMHtyvubVf5fP5uzP4W6f9pFSgXFkmjR3t9j",
  "key33": "3nY7uYpSn7FrjbStMF6TvtU9sHzS1CD9EpDP94Q8iuDrsW5xkwk7VjFycfHTTBo6Stj2kRpofhfTAjZ2enTSAqEG",
  "key34": "3X8SnfYn9hsQRG1TSTtoUJ6Dqbkhnybvo67Rf5SLrJQSDFGMYcPLaWy9N2ki6EMa3gJww2kEEGEXnLbgo7UekkqA",
  "key35": "9FKkM9tGgnCaCoQS98g5rYBcukVBZQ5bvFdj6jBp8CZoBHDTf8sBUoK4Yd5ExSGL7NdXUwkoPmq3yKUMYjmJRWK",
  "key36": "pAhax4d6ejovtKyJNgkKgb9i7AyJ77qtjZdjZ84buX79g7eX5G81NWWAwr5jEFWtFBjUXsKPtn9usRdF2dHRadQ",
  "key37": "4asmDKX23Jkk4kE1x241XQZihBsDaKtjKo6aEBpLAX7X8FTHzBHDUYg449x9wKBRpmhmEHoHgi1Pjib5KdnmC4oX",
  "key38": "51ixDoUeH5JzkDBDamXcRRSAnmicEAtMdrJYqW9xH4mHRoTbH8BjHXN7zuYHj7ngzQhFCrEp9Qhd4UKTHbh8dSXs",
  "key39": "3fvusKGNaFouJ8RSZEoGfnoqtBKc1fgfS4y9srvcCgtGT3ry3345skQ8BuJ4ttSzK6chgnYuVD3XhF7GnnxyiJtu",
  "key40": "2peUuNrUjfxx8C9gQ7nDjLL59Jf3kfPcpGyd58pvVjSu5zBCS3SxHcSK5NgKSDM42aHahaRepZrx6gNccnhUmGTz",
  "key41": "25hmnqfJPAgbCy1zBntTfCowgmJmN7W2esAebUVNSRhKw8PREo5x1gkmaahDt72JQS3qf5T6e2PjQKPWGutnPqWD",
  "key42": "5bqeP6CYhuvG8NzLBrRWXmN6B5z5YqXzoTiRzuGSHeRR62XWURqE3fBPUHXnY9ThiNcEw9vveUCwvgjYoQtQQLst",
  "key43": "5vVM6nmDFXC1E9E2BePa4cQZ9vRBdQocnpS3tL9aepuVF3MwoFbJcrEz6s2CvDq6meLueLE93qEfFQoJbCEnyuCC",
  "key44": "Zcm9sPrWsZutHbzcZVB1TSRGaaAyKG3r8EkZKXXa3mYJmWfkwKMkxqXaBF1S5CifT34e6XYtLMVkRu7nUfu9vEp",
  "key45": "42HKdSwS8qSzZZ4eHMrTGPB54HM1bTZiWW7fNqTRWUEpvbagyUGEPXP6qDAaRr5p3ghaRcjx5L9qpdugwbYCLt58"
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
