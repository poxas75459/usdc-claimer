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
    "2XF7HRSHsMe9M3pb1vNC1wGNDu2cZjUS5Jg9gBhAkLv66th17aMcH964sHXpwnVgWNqo9CBko7VP27PgGHASKSv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mKUwWMryA6KYeE3NixiQnjk3a74qsBV3yuWJepckMsuaAnTsorGVqnWV5TFibx9dQXNUR49nLTKe3RUZjXStGwH",
  "key1": "4nDjDjHncmdjRraw2nP4HdLzjGMBju7nXi5sefW4VazCE9ogrHrJBZq46CWR4jk6NpTZZhkdAErQ48im6DNxuV76",
  "key2": "sHmtRdtSfuTYsMGbA5rNFRLx12URHPNKc8D66jKopLL546pKQ7EYDmJkJBzeA6TDKpTkshNMyTR11hdZsbqYHgg",
  "key3": "4uAf6q8vFDdDaKfkW5oAhC9qTo1fRuEGDcMkcK59f6mfv32qJu87hJLGFPYN77cwA1r4BprQjG9zhWyMLYxTUPZ5",
  "key4": "bty5xwvTXXdqCbsDr8YoAZbEbGRo7hdZHi2UHKRLyaKvyTFLatM2K8qpaq2ZUX6LW4qtdF4fyZHkdDyPP7Bkpiu",
  "key5": "3Pwe25bbxDMu5J9oRtQk1174sgZ8pWfFvJY2ARbzq3PVXjaHYst68Yx7mw1LSEvsxkqr4nrUxsz1ZiqQGNyNo1Db",
  "key6": "VcCZu2djY2U6jFusMQBdx7bbhViWU7JbtKoyBUNG2fMfiu47kkCRADmDgKyQegoM9YB4rqFGhWtvVWdshmAdium",
  "key7": "2y4c7VgFBEKjpBEW7DVvpAtT2cWffEJkAcbUjNb6dnXNNeL5QH6mpzpSQaMhx2NVNEmy9GGbW43JfqEZ7J7iTNKZ",
  "key8": "2fowZdMQgquLfdSPPjRuPMwktS8Zds8y2YqXku8FYJctwx9KXhUtdsnyPQ6uVoRpBzWraFYkeCkKN1zMnbyeYAsW",
  "key9": "4vpxuCQD4u2Cg7SPThVLJUt3LowU4fKHfhCbYixJTqvxWtAdhmZFdzHHLmkBt9AZVvnz2JQMa61dFnLc8s6sDVp9",
  "key10": "4KthJHTyjyQ2sombar5VbYRHaxnsN5ofE1JJ8a17LWmh3qsTXnj5iQKD7PDgUS2sG1gqNiLnUAjYfLUxaBJZuui",
  "key11": "pZNQpMJqEDEQ64771YYkTXkT9wxzLw1oKUKxHyURbDm9Qw8Se5yjWM6GjL5tW1F5R1KDsTimCwjqZZ8u8VWMjCo",
  "key12": "2DnWn3NZ1dB8inAB6uvLySwZeXQds9FwZD1Y8aoNpx5FYhGeSL4BnGwSQph5ctPqf1CEJB7hYSdVq2ezj8mm6cVC",
  "key13": "dAC5iZuCXeGoUdHThgWgZHm3ZcsaxwKx8f7wBgKf1daSEWDTThxgT3rkkBYs4QYsyDFtFWjkHonxzdi61Yhyy6T",
  "key14": "G4Y19GNfkPY9h42wsf6g4raCkv7o11jQnauv7FKPPXP1HaiAH1DGgHqFBM5CUbLAnVhYqGHqJYnFfuJx3u7u5gy",
  "key15": "31psUSLnKkYecCU81LtdMGqZZkJ1mbVgA7DLEpFggqpuY9WgoD961NDgT4GQfqpsdzaMg5nR2uTCDxgEfhnER31v",
  "key16": "UgtMu7EoDeiVyJ4S9H2822wLp3VZ4SUt3n6ExgfQQ17rsGLPXCWHWBwqvCfgJTF9v2Q6bWFGyHWXQyU4k6p5UbV",
  "key17": "23wNH1kLqAq8ScynFz1bppxB2SkScSBLz16ZxFyWRNEB3KEyKakAS13gCyG6GHEFdfE7vwndFZzmRXcGpzY1JjMw",
  "key18": "51Murb65oR9HKuntJWqzpTy9KVTGGLEMZd5j2LSSuedUrMXiSaqPU32BoBXa48rD4uF6J4SCt3RqM7m5zLUhNkvB",
  "key19": "gCJr9zzaN7yjpygPvLD96v6krnteSPa1otnBqDXmxJ8NaLvKt4X2e3YDxztL54xYpaA6ZTytvZiJJb4JkrRtNFn",
  "key20": "64T5afChqCndEWewrjBExEuY2d45gFhSPyh9nxT4unwXEb5iXCQT5zszG8xJpMAUMjc5Dw6yAFX3G6aHcKTBoBhM",
  "key21": "2ZcNr18amGdLtPgssPDYjCyNT6AhZ6SxCbKCUPV3kNxzLuc71MwL4qSatKHLYqKCSohBqmUsAvNvQuyVKkgozCwr",
  "key22": "3ZHsrMicirbdM9EsLhJgG1DbmWtKU5dxRMzBuFMCZRJ1xhYns98Q3VNECPeRt1vsz49XXGdgQm1bKJ7bWBxYo8QU",
  "key23": "4ytsx5rcNoWajiAsqGVdj2iLVQxv48T1WdSrRikwXHJBEXWk7aSXtMBAhf5HoLwxcXFfAJwUhNvbWfB2MUg2LLAE",
  "key24": "3rRWQQyRBpw3yuwcVjvGtrVGkGHkvuEq4Ftd6xYfoPaE1wpAbaCEyvAWC4P1hDCwTF9U82aFCP5NRoCBVzG4cvjA",
  "key25": "4PvWBCRHtDZmvdpoRZNxWFTjG2grX9hUGec15ESzDsg1LTuEAZEfQgz9HEWs2gqRjUHnsje8SVTuqbZmQhY23NWu"
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
