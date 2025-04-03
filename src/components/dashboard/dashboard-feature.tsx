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
    "4SnwNTJ8Z3syKA2t3WayQGX4TyZuN1MCoL9a3T5EwcRMnhcNSNP1XrDMXWN4jvpdRzcgh5xWwfiTqJKFbM1bSHt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSBPaPMT2B2mStSiJ7pK1LqR3Tutjy2n9zrFxpFuThSo9fHhQKtfgcBb76bdbgQhJVXS4dJkCj2XxcsuxFitTiZ",
  "key1": "57XHQ9wPg5ctpZyqFxsqUuhgxcgaoaJqrC7KcPHJvESX6Rkoixu4i27LnrnB1cTj5L4PDqzMbNMoNwPtkErPweY1",
  "key2": "3cCqUSbiuzdP8JaY9Ns3ekQY7LSX2MayxZJNpnBN6AgsFnBmtxVnUoGrWZtEMLkgxDaibmCL5iD9FYxKvfTr3AW2",
  "key3": "Ty5MgAgrqhHhiTB3J3nwbKKmXs7tRNUJpfWJidfRg3hQwQfcoVKbcBhYSPF2MWLjnSNMRqvsTHVBoMbxeccJH9i",
  "key4": "4HWRJmYoPcde4T5pHLBs61BivdcxDcWwN4ysKGxYdXwmF9s6cFhFGGwp4hmxPr336vZNUam5haoenQCw2umgUgNA",
  "key5": "5vMyrFcDWns1VBqoiSrtXRxwyFiehdQKbhJbwsv47fuzrjGLX7Vo4Wc1y9XQWMBEN81HtcDQ2WaVacZuFLhcMhWt",
  "key6": "2oJ6RLbrg9FPLJVZpj4ueUoknPvmFJWXBwbUt3Rxqcz72ot56bMMn9H4HzrCNWU16PCRK3qaW1NjPqCqWbjFv6uW",
  "key7": "edg4YBKYXy2Y2L8H8oCBuzzaHJ4AsS43TDBPUTcrgTtTomc9E1deY7hqPVmsmvsGx1kNKHXtaKiEEB6erz9zMUV",
  "key8": "2jAWM4k6CLoMDsywNoPuQFsUe3GPaKFLpSTsmJuFpern8FqhNMKj7T58dxwUYXpsJdbzKcA9SgxqNEgNVXZtq1rH",
  "key9": "DtxCmwMEJ6KpguTWi3vJyv9FvXh2ZqaLycMHbbGDPzmraRRZGo95f1ttP5Fidkv8oMBwHxbJn6W8c4bwX7Y7ZVQ",
  "key10": "573tnxxPSQHEMFGvZ7zphvTLDdcobyAcwM9Mr5EHUMnmug8gSRHJpFVAYM6FyUQjBGQwHuRPjMHkhqoueNSwwHUd",
  "key11": "2qxornQNip3nE8MEbNfFmmyfg5x37CecD9m824bXP6v7DgH4tWghbQoPC5AwY9jFdfRhG1g3stjhXac4LNFLWcPW",
  "key12": "4brsbMtVtbbxQE1w5QosQHbChpkgEM8E5m9gGwoQTZ9HateJ5PSEVmATAbBzNYr3K1hXoizBxyHWENQQfdM3ZyNB",
  "key13": "4FNj7aMu2JLQ6CqA1UR9YsoaV8kNoc54mUrxobfVxw7Lh7P9fnKsZzxxuf3Pcx4JtwJXtovvh7oRJL8xU3QM6cHX",
  "key14": "2EQEMwZ4x7Zro4BH4vSK69pbGaQJjMwCMFwqoqwvQfw7BkF8RnWR96HCE2JsABKpn7gHHUWsy5P52X5msRE24m9b",
  "key15": "65MAJWTSUiEH5mrDDwH71ZeqkhkfEcnAGg5ySk9urUeSZQjU6GntysFrU1BmcFuKYzy2Veba4fBTF8ZyRoMvddHi",
  "key16": "3CenkpRpf2x9K8sQZos2s24npWdVeE8dDPwgEE2Z1aAVXwxqiUPsrj7QmvEqCwmxmxbLWUXceUfHGEvhXYa5miNZ",
  "key17": "4iEcA1bj3Mfd9it66nQrBTWoN9Fd1tCvNnQNrDG5QHz58yVNnUgrHDsRB2r4u4xHL1MUETar7RL8hNNV2tkphtfY",
  "key18": "5kokmqyDwUmWRV1VwLxVke7nCZ91bPrYZ5ziUQ14cCoT6f9ypLyoPsEKcPffFwPtze5jBPpXd3LmGmYcuxoamVYA",
  "key19": "3zsUWixai3fxctDtEbn4tSauG1UxHi9c6Et6yUTicV1ttUuSvnjvmLHTYJbzVFpSJiQAmf8njJjKTKVokD6wDnhj",
  "key20": "Fy7YUoFak9tMs4rAPzPheyMaCkKWwWNMqMDwq9orNxhfN7NNDYB3LF4QU3AipAFp9Rjjqp16E3eN6jfYFU8LVKo",
  "key21": "TMdTN5bFHUcKwGufwey8pm3dNjxpRxTrM9AkdsXfAVVx7FTu9Sj9gedkLW6Eoyir6geHAavTHHRYvnHYtgQJSdU",
  "key22": "4WGa1bTh6xmKzBRxSNgk3choeH5N8RBW2ftHXNZiWewusY3FwapTWGSReHcgZrh18rF6YCiyEuTHjwB4Lhyawaze",
  "key23": "65HFhoysroGu7tS2UkLi8BBtgUZJraGXwZrDWtUvxFbvGpoGn8CqC7iL4zTSXoBkDCGaCdHrnUr57NrDEXmY5Uri",
  "key24": "c1nFSFZHjfkE191ZcLd5E9qKEJotKUmNWzR5dXYsvYCDCYfD7fAjWftKQr6ZkT6jHCAEvB5MNP8heqfTDiNzegN",
  "key25": "2688LRRrC5CHwMgeXTwCcCZaVwBejCyMaHnazTCkpKxpEKsZmMdxwQvwT6Er31FSxhk7KKEmDvTnH1rk97FZstwS",
  "key26": "6E4HQUVqkPqda9XQdTzdJoTeFkvoKH8vUmYA2kWAHaBKEu7UJd5XeBjNA63TMpowo5wHZabyezwT8qHd1CXeigE",
  "key27": "4VBQzfEX9dzwXHwjE8ebUcx3EdTdMVvjWwjfjQ6YKgEFGFC5ht8kBGS31Sh7ag4mwFqDKk93RxZefjkVSt2onNbj",
  "key28": "5978N3W7sQVv1EHSbR3jaJ9b1dfevt2GWW7EfzXR8oxwSXw6UfL7LsUi2VbeYGh2SNxDopA55WVFtffH41pzTzzU",
  "key29": "5ARbrt3bhLtbTLAWCHAN1gZioktfpQQz5nJSspmzqpWRAiNwzFDao3NPzWefNbXvBmeN8tV1mVyoxnPNvigkfWgf",
  "key30": "4HMQ1mewBpQs4nA4xfExMhobmGPMaxiBGTvY88Ka93xB7txdzqthBAz7rCAwz4rTiWHN3TAmojJvhWKEi2XfboA7",
  "key31": "gZ3GUoh5uXubYrxYADB129HTavLGhd2EyMAWURNXh6auz8Nn4MXEvx4dJumsXwKN3yUJkvtP7ae2KwEQqwtJswr",
  "key32": "66ifQswPZvTyUbKkynARRvafbL89yazsVrECxQRmBNyYYfdgNcG5aDuB7LzeNBG4nmmbJcLbidTLEyvRw36q4eSg",
  "key33": "54qzzXKqSQ7g85PsDabAMrrmoV8t4eHwLJ4ZndFLTE1W8kSGC6f9J8fUsUJeu3x9W6wgXxAjjYJexckFxNK1s7Kd",
  "key34": "xXMEZhwGj5qMsiGZBF8DrBnCqYmSuj39v3cFJ4JDP9sZEqzJBJ9wmgST94iNk4gwLpqHHsCNPAuRBAWsLg3zCfM",
  "key35": "2uE6fbs5RHaKUB2mN54UWmb9kzUXrWbdf2zgSg5MAfMAMZVkcDgW8T1adASwLf1cXxt7BGMq5853NWmHdf22NjQe",
  "key36": "5sKAgBUQH3vBEQw4QAYjTFhGip81AiHAKeUofRrQhJE1AfDnBwAAMMXGqz461SWsEpkVEEMF8xLzjsCmQMAoYkd2"
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
