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
    "4hKWmSp6tMjimaaWjTzMFcYtsy1mjjSsVKp13QbamcX2EuzUwGyHhCagUwdiZePdygGqDQttPXbtMqxRXSXP8BxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8tk22zMDtTtcMvP5FG3Na6vRbEm3mVWhG9uuAYH3X27A45uL73pXZstFeQmRSbRBJopAtoRqNwcTMpC6hTVk2R",
  "key1": "XK6ZKpH6LvTrXuTwE95azM3tSU65PQhnrec8y1kDvJfjTyWE4nE22jY4Njm38kZXh8rhGBdxR7onavMmq2JeooR",
  "key2": "5LnGYSYEpMex27YLqggaFs8ExQB2cMLu3JqQ61wpEiapi26HkPGHE8uokdoFtgYvHjYANvDBdidd2hoNS3aXyVNe",
  "key3": "5YxvCzntZohPLJihnTfjtFdYHLomTDR4bYTAgYyWwKG29CvayvpigGXqcC5NhxdC6zHvTfh5Lwph6HtddmVjxY9G",
  "key4": "5r5au7Ms2ZmXzWbhrHpM1jkA96bgW7TBLBa8DTvqnkU3eiPT2k2m6JyGs6yJURvbqCDj2W17vv1EAYuqkBs1mtJS",
  "key5": "2tSN7SA7M7P6mHT5k3sh42NYgd8WhR1aJKkdrD7aUnPuqQ7m4qw8E81Sz6RS3rE1gKBfLm7ctCEB9crzQQtPNUjJ",
  "key6": "27Mp7fJ2UAGnDVC9yCS8uRJbpoxi958EMPqmpoy2MY6tregxLRszy94mnx2JMNT2qxswi7SqsjiKwQmR76QZaeQE",
  "key7": "aPoYU3DVSfzEjF99JCuMj5Vr21Kd9t91EiqyJpHQsr3DwpzCB3gC4Awo8ShrqXZdTwZrcjJbukwmtRcQCXbqjFz",
  "key8": "3SBHwKt1LeByP6eGfWMuR8nMnooyKcMgZzAdY7AHs2qwrmvo92TrTuV3i4vwtwoBUX6AJAdwyADMSHBaz6L7ktBM",
  "key9": "2ieXW6mCB7P2JwyN2RvxcFyoR3ZLMSrR31naKmKjF8W2bxx3jJrLarxab2PNDe2e3WoPaXnyUFtYgaSjWwkuXB59",
  "key10": "3BX7ooJXAmcgLB21i1FGYJUJa6nYqkvGjiu7GP3WdoG6n8LBbgrDQtNtQaPjwjpTcNQ1yXU8T2w22WtQNGFoAB9h",
  "key11": "31pV9vwywhtjNQUi3b7mH7La4Swg1jPzrmuJb4cLQh4PYQjjL9bMRfF73omoXojmrAJU3vbwoVf5QcMgdihPRtCX",
  "key12": "2NdR8Skc986PfQ568VWPnGqWgvP2RbBDyjTeJ5Pw4tmGhrXbqCRiMw3W1Ju5UtXJehq2Zq2iUUrY4pmprsSkcHu3",
  "key13": "NLyzjvqmPQN5qpNnSY9ozn4aSEvPiTxbqPpdzvgdWX7LvDnoJLTwwif8dCnqF2WhGSzJT5qvR1CX6HNMqJB64cP",
  "key14": "QfU1sYu4esXusWzeLLqPBUB2DS6WKCtuepnmyH4U18RceN8Q4dttPjX6wpbmXLmKca9efkqNxpk3nuVCMvBf29j",
  "key15": "5TzCsqY7ssQ5rjUwL2uqd36G4jPs1gAaR67vs39R3wrzdMS6ZqfsSS5hhQG5JUnEYigFVkZeuhU3QQxZq4GbUozc",
  "key16": "4yXkv3F1Cej6J6HNcMF4PWY9qyR4dRqcmHHFBwLeWTz6YsLwVMH26d1EqhQHT7zyNZ43x3X3HTtZcwZD6c5vUfSi",
  "key17": "5LPyStdkP4H44KdTuGV3Vr2zwAqEFnuG68NBLujnAWgdVe4deuGetj21DFwouo17Bx4M4M7mJp9xjyQyBSFLEt14",
  "key18": "2LD9cAyZDsWeeki2e7D9UBKJZJYfYNF7xAFA3UxwnbJJLZUonGZgqCBacgrMRHcRPVP6W9pBw9QU573HFmWf63cU",
  "key19": "5kwF5BmjE6cXeRF18YNm6RUbevrNYUVUQXsTDd9EPSdfNmwVkLDTKzdjkNZJZ57VwQQL1micD34yjXfB1awf4ZXs",
  "key20": "2zLG1iuB7VRua9z9n74KPRCxofV7bB348nbSGcfvTfSoU9uw67k6BPs7hBCRePmYKkiNHZBuCqqmwQDSKg2nA8Tn",
  "key21": "2gLnvKTrCNBTNmaphWo9j6FsA9M5qCJvnEbtWgjHawrzV6EYc8Xqcz1Be99nZhegogdmZ6LbEbKErXdNxVZM3Hfy",
  "key22": "2hVQqUdHTkWeLWBjvhTYYfmRDqbTd7w346kSAoi1L3EFAGUx5HHXH7mfdeJgWGERin156PDVY9C12kf5VjD9fa6F",
  "key23": "3VnZ6zVbPJRBHHrFbbHAxD4E3DxqQaxm19Y5E89eTX8gGXUzh8Y4Ld8PnvAufqDx1XoyeoW7VPSHGmWj34PPBuhF",
  "key24": "4ihNFtTF6d7FDnvWJnqR6FkF1WpcHJfvPHVhw3eYBT225vXgD4b8L9od9uPXCPXs67emidVVVKTW2vDk4WnTB59m",
  "key25": "2aSUUwdiqEsrZH5ubb4jyi6rKQJbfRWaytpPumR8mMMr6pxKoDp16d1uFLCUUBa94QJfozxSYS8z3AP4kzoFqXJw",
  "key26": "Zfvh3RxUb24MUHu6fYHQsyaMhXQo4Druqi3vkhnzV3HsM4zeXUm3BTcREQTRbQFgiT362WebRbUY1iv9jFRHZb1",
  "key27": "ESsXGqa4iUrhLAR7fbLypDQ7LPs2RY17fBReHw4kC1F5i77DJPtGbHjzVaDkHHbPjooXaYY13dqm1J8v4dL7Y3T",
  "key28": "21owFUYL2aZ4DEASXvcnij45FH4UfX5gqt1kkipy13mFpAtY5V7sRo3ve52CKrSQWFeXLMQFdr54EWRJnT3Jn2tV",
  "key29": "4GunEBsiAzqWQREY4HW6Gj1t6zucXDZvimjpG7drLCwBnNfCVZVUpGAoRvXRQZ3TqsMw3ve6r6p6Q5hNoxn1PYe2",
  "key30": "5A5VAQ16zBMrvZS3xH9EQY26MuYnyTUR6ShhUkqafZ8eg3e2DAEm1EMn5ttx4MjM4y5Z1oeSDUwfxGdX7Waw32Ad",
  "key31": "5LGmfAwqZ7XM6guAKLmATXXpUJ1cgDWEoARsKL9FUFDyyLAqhrDatHkyfKojqBHNmE8zhT3DseuqzHJwbXS15FeG",
  "key32": "5ka95o3WmuntdoW88aXUypqZurHSZYxFTTTpARvRr9pAKWnZck43BnjFCCFfvBbADiCRm9KDgy5NKCih1HrwXRHX",
  "key33": "3CRVmMLBbLSsg4sC9kgLAq9J2YBkabNbC3AvrauBuhoWaFtH1VJq4jxpXUt1oqshoo9EEWENqS6UoM36YRYFFT5M",
  "key34": "4KPovHKmPTQhz8kvQnv7HPAmRcMPsaUWshondj8asdFB4afZRhSgAWjhCZZnuYHcN6JsYQZB7DJN1fpTGkwghWi1",
  "key35": "5iMD4MyGv7xHjHR6kU5LxV8As3vwb3sDBG6XATaWtXVE43jKJF1TFEbzSshtDt5NYXaEJBZWVArua6dYZg9AgnDb"
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
