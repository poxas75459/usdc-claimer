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
    "7t7JD42VnUCZVuDe4EXkrxJoBhzvnJDzSTVHMBmwUpAJVui3p6MucjNRAvB3eJdBa2phbuEiZvtUXy6yb88kC3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oNPTsMkNpMzLsXfDKW9fk23JY59NzHAEpQSbngwPoEA9zuccWZw1ZJGMvLJjgdB9JwdHQdwCM2TgHJ9zeSiNHA",
  "key1": "gvF3W4CTeb2AqSFf64kC9rnbpvdMSguRUoFFKaxa3pT9VxduMyRhyXefJmLvYU1e8oZS467c8QF5esZYn4T5TwS",
  "key2": "3kdtFTRBUYqj2dQe2Y4vzWLrCP9ptcGAxQ6tgSz8SmyztrdXud1mnf7HqaNARctMPSCyP13MQz1Kj2LuKdCvM1Db",
  "key3": "wMwQnSuUAcxVyXWPfciKFSsC5efnXLSwBg5XpHtR4GVCoyT2EXu8DezRxJZLpGtjT3uo9P1njoLxMXmJZ4FhcGV",
  "key4": "59uQzxcLU5TJQSVwKQkxWeGszznLZCE94xvR1esnBuu4xhJtdWwYnLRbUyWmVBrmeZ95G5zbRQq8L226NqUPnKYD",
  "key5": "5XrhLv84AQ96VngUqLmkeAX4NFX2swKWLT2kjhJsxeXcFhQEePDMm1xzNBftYtUUU8J2KqfTo2UAtp3ZLScyt932",
  "key6": "3VDD8zkizTPgSw139urk29yVZgAdSTZk9SUYrPfHM6XN9DDZM3tkNowQLwBfZT1mLB67ThX8u4JyHLx1LZjMdy6Z",
  "key7": "2vQUBcUP4gujo2NkW7bdHABM3Au1qUVMiPcPCY3Akaz532gBjVubXrLMH3NqBwBNWXrB3T9SqETK6JKbmYupoWaT",
  "key8": "36m9JU7rxp4Lsfi9Vb2jqkmwC6z7R9reBUGkqKbJZmE5JJpHdvWDSc3fz8VrmwfLSssfHJroZaQHJGvY3tFMxZHU",
  "key9": "3TLMchXc449iW67HD7wqnnt4TBStK7fm7JLk2YTg3w5mW741J6dDw4tgbhtdtnRPjL6xLb4YdmJuTXbHWBzKS4q2",
  "key10": "3GE5z1DA5JkyCzohvuSNShve5BZkv6AVp7eM5BsxeX8BHchgBd1EPJ6xGoaoWSU9NPwQm3eCH9hvQiVSUk45jYqv",
  "key11": "54W2TCY9KDuBSJBxn6jpAYqMU35vM1DznFFeX7s1XapAxKi9qfyj7cTSxVyW21s4fpfsNoWZSm8VPCvPTQrTGD1r",
  "key12": "5ukQUvBfyKcYyqy8v5ppabRG8CdnzFA6hERoVPZir58wWQq6MP5ZXRv4eTmuBUytvYBvtTCjDBUS8MxJkWNHQJbW",
  "key13": "4sdfXGRWfZ2gLuMxcLoCEh1CmH18QzwXJY5rx7oJnnsWAmuYuZnAiuofiDXkK8251GjQiHESAijJ4eRwtK5eEhNR",
  "key14": "436TKaeSSpn8UBVxPcdBkG5RY591oKanNzdtuKB4V4ynJ3PAkFkg2vzRxjJJAHCZ62aR1j782RoKd9V5szbDjeqf",
  "key15": "5hsqbqy6ZpWQ7KHcXK11Kjbz1jTfJ1h2pbGEzo3H8kqRvsLDddPiFFHMtr35PXM5t3a1xX9bLPeSzZp4VrdbBHT4",
  "key16": "2Ze5JGUyWeF71JzT2XuPS4VyicvDJ7X4zcv5MX6zMFtHJ2F8Rx1EKycYrAvTUQy6cnYTZVBBmQFx8rshHWxYsuvu",
  "key17": "2tjGuXvEoDk7kM4iLAC91uK2jj8yii2k1HWp6qUabt76TtSPC6otAwmN1zQWYDctTyiSjRmSpENgZSPp2tmabWW2",
  "key18": "5HG3sgbFAYXMSEzSF9SiGxfSwvECY2jD7Sw7Vexy5cdj7soUaCeAHGYHEzLUwwx8ZfSHSqMBWhnGKocrUc7tkm35",
  "key19": "5dznYsgjbCfNxphNayYxiM8SJ7ZuQ5T2qKMtLnfecVd5MaeERCLmiZMqDimJzXY6eoYsxsutRfzkNeydMw7sUmFw",
  "key20": "5iXtvqwDdqwrPVVFY8nNztiEueuJj3b1MfT7UnitiB3K8X4BcZMqGTSVa51nurkqqjqNqSDNjwtHR8gJExtq6xez",
  "key21": "hHS33cyqAH1ytN8dQyQSvXEHcjvrsf2yzvo3nrwZpfpRz1vJTcJdbVfgrNqgnZdq58aySLqXe35U7NHb6MAyMCD",
  "key22": "8sHWFvJnSSpwpjshYf2xKuGhKdVJvS1UaQWU4QwymrJshnXhbQUBN6sxVsLCVaoLbp8iUcNfcmbqFtEdssaDa3U",
  "key23": "3tGYj47ff6EBbvnXKQhb9qAxSV82eJQdrW7MqjguMe5WLKN7wimosaBYwKGw1aKD7TXrm76kfpXGV5DupcdSEeAL",
  "key24": "5a4nXSQ1wA8oEsiaAis8p9DA4L2dtLK98u5DmAu7zSoEZeiSA64vaKoJhU4Tp2pYyrL5y5umt8CAReJRXBzipGEk",
  "key25": "nxKvN2n5ygXRbSt9wMXoyCRynK1xYzD7D97aeCjhxyz5pKXBzy5uGfBSw8Q2RZdq3oG4unFM1zr6kDDZ3wzxYaS",
  "key26": "44zDjrmNDU5bNxivvPosNP2fZGxMJ71xGR2BbKxGmy7Cg8y4aNZnvnq1SxLsxHA43jJ1TLRY1PJ8mZQ9NF2zgYS1",
  "key27": "4XqkiWxvt27NVonDG7axRS5L1mt7qMA5SL5SQk1WiyYaMsNr8vaALS79yKiGmU2knxV2XjqtxSj4PV4xKjJko4s8",
  "key28": "3xNKrmLCtGV6ea6FLhWq7mRHFN7PkNsKdUiZtjPm85vVCaNVZCo1Ku1a514br9qLs9pMwbHg81ceVM5w4voVa47R",
  "key29": "iKcrFb9FMzosW6dWPkcxn3K7gW5Vg6vnRYFRQ3rxHhgPdTCLb41JwW3apvNjQSTvxziBAWqzsSpi1HjuUXQjjr9",
  "key30": "6LcPuRequHSFpmU4vy8AC9X3MgpSbH8NPVBGVtAhzv5usEHf514djc7uwrzQTmdqPZwrh5WfUZ3Co79xGg9DpfK",
  "key31": "4DTvYvVvLYfLj5Gr9HhXf2KTqDmqseUfnHfqMHL9wG6RasSNi5NDBrnKXcfKNwRsVdorMdKC5JiFs2gPgu1REk5U",
  "key32": "5XjLqFEG3BcUwaVXJzSbjGhF9XjY9dw73auoKcm312PJsAxozcbGUxFEz4fENYAMnrVq7BEU5S9Et5hwL1q1hEPz",
  "key33": "5rRt6bA6QTetLmZjRXEjYroYJMHPr3tQ9uMNG8n4x8AtJv4QLKVPxKAohwiQ8WxbCUyk19WgzyZbT2jtBRwLzYo9",
  "key34": "GS2K4sxr6q4koy2feDjLcVCgPkDLUwA5kJCnjn5p5cn6soMgXMnUrQDw76iVt6X8DY6z2X6R4AKwsw6ZBECV7XU",
  "key35": "3Xvg8jzQ6q35rRtGnKZW5SkeaRRLQhRhpDpWFtbrHztsRXb2xkdorvXLJEywbWpvfr1RTrckiR3wPqv8jkpvtD81",
  "key36": "52oUk2ftmgkdyvxMRJn9khjuG8pSf3cHwoCqqbDRsVtUHZ9tjDapn8CzjD6TuUEp7DqjdtBK4JAD12fqLR9LygLj",
  "key37": "21NPixhWzuWPHKG2a6HPiuSRnwmuK5cb4VCDMGLH6JG4R2Z9tFsaBYZxNss3MSf8sLTjhoGw7UW8oiPncbrTeV5W",
  "key38": "boZs7kaPqVE67Sce1wwdqrLCkFGuqzqPx551tZYv7dujA5EgUkGa5CoK5vH6tgNs89AC1p17kJnTPpDDvkJjfG7",
  "key39": "5AXfsZW5gtf7RfQrGymrqRGVeh3sAXh3PZyWv8KZi1fw4CGpYJvGuYU971MMxze6qCWi72z9LEZUt5EJvJJ8tQyb",
  "key40": "5KBya39acVBdGT9UrDQrdYcGYrgZAcPvi6qSenkiVt5M1QNaAuKutEh8rDq863wb6hGLDPCoY3S1fDhx6FyRYkjq",
  "key41": "4hZuFsPxkL9q55stGM2fWwLLzw5JNQG3ha5a1Q1BZe7kpeQ5YQWCji6Gbeb6ej67NRuorZnCqnxBpxxurvJ17Jam",
  "key42": "2KbddVybqkK3o5gW5xcqx7GzEV1fFxUAubn92K351BLttnMgzjxKwBzhxhY4r6bLzcY4niYM7b5rv3SKWkUTdmMK",
  "key43": "4rZX8YzesSyQWLK6KaJgzUVKE6og8HiUmrGSMSJYjPVNUu5dEdDvZ1d61HnJSMzPBsJRU5KekrPSNiSRBsTgkdXQ"
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
