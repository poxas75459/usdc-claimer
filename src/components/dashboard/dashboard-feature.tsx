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
    "3ZTGmNf7S9KhQDGM2sKZEg6KnX3WJ9mMq9SmUz6L8655KmiXSqNZJuAKFLQXNthPcUtuUJqVLnSEwj2M3E7swLVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3HXzJ1NQiGNPd4ubXwU7SPJUvyPtS3hDgizfXG7ZA8MYSPW4arFtzY7HZB3wkPyJuodKjTuhsWRsXjFUgpbWAJ",
  "key1": "4qzaDjVBy3DSXLRDDHaW15vuGuGrzAFkeHmX2gqgtzuaka7fSV2GDknbejnW1PHLJeZqwj2vPrkG1sGquuuSaMfv",
  "key2": "613T4FyfyZtH5GH9AA32kVUTXmjzZQiU2x6SraV1fb8kKfnJaCHihnHLBRAkWdDRZ2TLQRhBCtvnvjqkgBVLJP1D",
  "key3": "2u23nhEDHG4Dq4k1PmebKa4vdQex4j7NxXPVdBUwYhxXT4RcV2HuuhcjVsUP8fmu7bvX2qyzcszz6qKyyenxQdnJ",
  "key4": "wZdGHV76pzDBkewbta9mpT2BChcJN3aLf29dxzVkjfHVk3ePc19m6J1LeN5vfnQLuASZx6r3VbZAo87zRntZnya",
  "key5": "2ZSEmhbqCKgbHVg5jcebAK7mL4mgKcikqU5V8ETYrPodt8K8QXHYG6cRdTLuK3j8yZ93PtatmC5mhcojFGwy6y6z",
  "key6": "5GyAT9ZkjRoMCrCMUeJgmBDcdzYZDBYot9GBkKsKJpdkAu5smRVsBATAwyd3AyAfRuVr7tDsPFnqgUuCDRtj6kut",
  "key7": "652j2nq4cNAQ2qVnXNczobZQaZcS51GNNSnjDUaSJdo2P9DLWWsDHeoUJbX7uDdQNHLbemJqbc6L1fPzzsRUzKNG",
  "key8": "5LPn5BjaFxyEa6yVf6FrdEy4Q4MvxcHKwr3NqLPoR9ru2VRpuEubuxq1N1qNYEA1EjN6MixPCCLSoaXfRfypfu52",
  "key9": "2Z9H6LqWx6M5hX3DUcsYo4BgMf3BpUhbsL3whDDpfMiw8q1gmZjoqh4eDUiVREqv8enQXex4hej53wtYGVb74hfW",
  "key10": "2NTwjbo4xkfgZxvu877WUyeK1GGqbv8LJ4jLwdRA8dohjst6T1CPSy37gayB1Riz7Hxp7NA2U7VLfkSz6AMHU3AR",
  "key11": "P9K8X2YstdkcxtawQXYVBCgk6nYZoF55z32vCvv3VaKTsMRoyuc89864Ke8ygyQu9yPMFBGVpqBVfH9cguBCH8z",
  "key12": "41Zk1rHGJtAym4kPsAfQqKs2M772fNJKTmEZXJsjcSQAbAidxczcou9Bi5UDPw5fAko8Y3ATjde7b8p8a9dqXAvy",
  "key13": "3ig2t7GgJmtU3iat9ZXnNgw2FX8NbCud5xfu5wbUDm8uZxmZTDGtP8Z9dz7D8Yy4LyDBKiLpkj6wyzFqd5isRiUC",
  "key14": "2vceVznKQP3VjuUQ8ForkDAyQ4pxbQgvodKaUqFt8aX92FsfTq7qS5nRWg77yKieqHLgKsBAxGDEf4LjBP5rDzih",
  "key15": "3CCPPgdWuqvNtGyFAdBAur3QKztojW84yNjbFMeUwtcJhXjeHyXY8ebGDUKAKnHMsJCVeEtBkksaPpeaRvkdMbZe",
  "key16": "41stDQVSA6wWfubGTpJcjCmwF2btFRg42bLMJA6ZAhFwDJTiTiuDe3MK3HJ8WPKrw45urdoA6mP8Mq7R6tYrVFKh",
  "key17": "2XDtZQYngMZd15HiDcf7GQtJbkZ9gSv9VrMgb4XCLjHhHPdf5y1WgdBizo7TEfb7yyHRc6DW3FS5mKhuaopzGBof",
  "key18": "VP5hV8Miv2Q45UCKVQ9juCr2zAZWPq629JP6LvUwTxnghAgg1yxkibPNFhTK2vdmiNtSMCV7tYjFWjhvNpN1q2z",
  "key19": "2rZuAyZ5gL6B5WVU5ZFmsh2jz4dw7VRXY84NrthzXzwvoqLbYXxaggeScXLwA7mFyA8D6NTM4sQVDQNcGNC88ipE",
  "key20": "4D9mdQHNYGipHZn7Y3nRMz5AdQjswnisRxVd96ME7tNW6XUvg4ELcjYnKcYwzyNTKrfVmeKzZxQKHU79ZgTzoeqg",
  "key21": "6ivp5hcuQtry6wwjhE1TN2dLj2DotKCY9W2ZjXCBMCMnEkpFv1qiSkLtSz7MpVZuoXFeHNZ25K8pNWEECFQgiBk",
  "key22": "RBBZnbV6iEeMizq8XN5TuQ9kmDhQgPCUqHPM2NekMa185dRH84DiPyoRvtnHrfDjLJpUC8TqLq6jHjoQEft7KoD",
  "key23": "3qpBxavqj6BxM3TBmGpnHpcmoWUkQSH6c7DRqXNHuy21wQKG22SJNGyjpTGALq4r2L5xSp92hXWtbwNMMe82BWY6",
  "key24": "2DLTorS8HjEZDTJfqNd9uqbsvLajJFRNNKxZZwAaBqMEmNZSyS7eudRWJRf4faJhrH4PqGx9XYhd3m27wQrWRU6y",
  "key25": "vo7tip8WQhnjSezT9vFDREJxY5H1yN1hjDVjeM5zR5F1ixq8xXqsKkaVojnEWmrhWapNG3TMGNUiDtW3Wn1YReV",
  "key26": "4zQfYunQsbkcszuovbP1xe9mJtgSeZH815LSbHktTeR5JGz5VxQ8qGc8RWNgRrJz9FscHcYG6kBGqMewczEFRzzi",
  "key27": "adxT2osAdiuctkXgBW6gBRu2eBUHhDP9U3imQvBHKJzFLqLZcY9v1ehzTaQjV1zqQsu5Yfss2zH8qjG7VQ9r58K",
  "key28": "26nXHPQ7tBFva2zjryxJCRCwtY3Xqpbndw9DUoMrjLGNBPSkE2ZYQBfAkDTZvPzcQTHUWCWLr4a9swHfDT2xtwxe",
  "key29": "SikrK2P1ukJTnpEq1omkPEqwP8UUQoVrPo6PmMArFu4ZqfbcDWCiAd7C6bNmAWV1C2bNF3FnnnGWrdFsTAwVrcP",
  "key30": "2dzC1WCwftY9m47DBSYHkYUFv5TFYdDC4oPBQaUydG3G4pBcYMAWBVWiTERSQxm5riuUyCiZPcNMWubTgyJPScYS",
  "key31": "2GziTiBZVW1j6S5D8zpBX3c8EoyjJ1ALh9MtR4A6YW6RkghcReNi41pu4Ph2KtChbJ7NZ2kaxgdPhQRQ6WVtJJgQ",
  "key32": "5uzokK1EbKPdX8UJJHaWrXwupdZpJk5rQfEacNVWjvApHLTk2xd5WS1sD4wikCArEk9daAYz7b5rpkHpxFtwnXSE",
  "key33": "3xSfs4yZu6ZwtwqYDhpumYDjHctKEa7YQxWmBasRzNzGJ4epPUq4thYAKDnxS11sof6aLzsajaGv57pmgBYs2jTA",
  "key34": "JujuPJFFQK1kTCp4xLFPtJfXpRxWnBUEAV3ZP75preBbPvWd35Rr9qTSEm6ih2v4yVUo95fUvCnRuRYQknza9fc",
  "key35": "468iSdRPdmU96tTEr2rrDu73DhqCoJDQoze4pks4ALc1xP6tqKuXu6xWSRvKLkFxMG4kLrkMvvzmdUM5meRCNSzz",
  "key36": "25nn5bVjmtvRmtF7o9UeaueNQjRzajhLuFVtyrwFSowVH54KgxK8FTyH95nnDzKTtDiFSeN17RmuK7r9Q1qGKmZ8",
  "key37": "cTKCu8zdvbBFvuPoCzhJMRYpzsqiXBFAsPVF3Lc1jwn5Eqsmfq4P7HwLuABnTPtbtToyKYcdwwJg6n6SZ8W72D2",
  "key38": "4bLLpWmEGM27to13SnBLsY3S1FqQXsLs7h5fQjQziQDPYAS9dDrRkstbRBtN4DPennXEuWRK4XYiBE5L1QhqE3UB",
  "key39": "2krwjDZvG9yVDXz9oCQd9oMH2n85Po1FQHaFhWm8kq8QvreNqoXHZpqZV1Aj8Tc8oMqdqr18nBhqrkrY16SjEKA6",
  "key40": "nDuiDSnM5dtUmqRYbXad7Xu3Ms8gHRs1rb1JyFV2AhrELYyCp26ckkA1MxWY4hMKVkd5ZTMxLki57GmpFuuuFpK",
  "key41": "HegrjTKCL1HxmaGa952XxEYBSb5hHGb3L4rxyHCGydXYcnjvXwGWx2B7gJRY7XLxj2U4nnwtULiRg97RC53BqFz",
  "key42": "4nbzKJjBbQrPoxQMUbcUmqJBN6YrFFSMA5w69yvWM7oNB1pkDW5uMdP9B2BLRo3FgSfGyT3Bpm8hDfX3zgWExRoa"
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
