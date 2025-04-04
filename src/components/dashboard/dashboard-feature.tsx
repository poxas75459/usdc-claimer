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
    "63Kw2uDB1LGKYxLyBNvBr6qedJaMejKqV43ghgUPFniEwk4BbtP98BXitWS91583Guw5MrvxRK2WJKAuTXdF6Ptv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gRpEyPXB1RkUaUdb4QMCibryf82fPAHPzXv64MPcExmrUbp155kWbRfFWD69wCYqexaxkGL4Qnick83tft8q9vV",
  "key1": "5vrQ3SL4qVzMdJQSFTg9qttKSrZRuyxrPRAa8gCfdnD5kZmRsf922rdVcAXscGXwzUxNnetwKb1v3cZSBThhuTNH",
  "key2": "4xumMZH2PyKCcXDSzMUibfQev2hzAg1FJo3em8tQ8GxqSnjks81CGyecuhaJ7JP6RykNy89vjETpywTYLPwqi9vK",
  "key3": "2PT2zbAKxBoYADYqgMkTZQ5ZZsyQ7nHucE876awCVnTZtw34Hqpqpmhs7MiUymR5ZHGeP9izcPHmoWkoeCRXyp4e",
  "key4": "5adJS1LB8ATYx5dU2Nx8rQpW53Tu2K8bM4afSDQocuqVsvZ8XT5Nt1BiE2sn6u1YxLR357ScKozvQGYBzJS9ha5",
  "key5": "4ztxxfnyThZJzMHxu3dkKoXMx7ydQwTE4qKGBtWaGp3B1mBJwpoMy6Fdizt24FfiQ2GiSBW2R4oyaPBpkERFGCrk",
  "key6": "4mHURgrKLeKQgzXys4pf8jruDxj7CgRfWXXNosSwto9GXT3pePgmzBSjf41TThqWEqwJuGa7v8CoPBea5Mv6pnaw",
  "key7": "27zGtLU1jTs9JDPDWcuyHe53qgHGKGy3BdSpxQSdSBhyWrU1pLHhkbxp5QWBUSh7U6TGvruhMqVAUDAhX4P5SGpe",
  "key8": "2fYxbDN5KNzEUHHngzwjP2mpCR4LSd7jCN1qM9PMifgwDNTqUbfe8HUa35icPScxq59SQm3xifCqxyKst18F5Zht",
  "key9": "3L9Tc7YDK7Y9ULZ2HkiT9hs1M3Eyq1hLKzyQsV6LqMx6xWh4TqXDPZuhEQtVPTgjNiyDmLgXxMBfoiVyYdHBm9CQ",
  "key10": "3wNj5a8H4CCPJhfF4N4Rab3aFBW7i5SqAP2wmaeDvNFW722fnE7Q79dr4gDddfgVFL4ssm3mD8XCvGMBZMRKmHLe",
  "key11": "3MHgk2Wp2daMvvA27oZjxXUSf1m4E3ayvN6Xk41qEQo5HCkxL2aCkigFqkJ839ZjBcBeCn3tgCRSbDkm8aGPH3QC",
  "key12": "47uyfSvzrviz8xAHrrmcNq8EH7FB7wECReKeSUBFVqLgRy3xtLdtU3PGorNc5QnSg1f1cGrYKC2M2ZjHatJfVMJx",
  "key13": "5yAs7cdR2QeEFzRnQk63HjoU3QuAj5y5TzMpL1S2D8GXvuu9J5vDa1vjV3KHzsDkTmq1sKfnbVaAqLUPLwBt9dAe",
  "key14": "KJ8hvCDRcH9ZoQ1iNL5YpMjCTP6gGNn6jo9SDBXactbR5Qqra2shSujgHdv6Zrj5PJYWLqqXV1KtTMEzfR1dsCe",
  "key15": "KPmuWtJ5GMCteh1YvF8PdqdXj474HVA2jSn7kwA8UsuUCMvajVEfQX6eDbeeU2NqWxyVzEnedRRsCYFyCiCfe47",
  "key16": "4WZXdTVUSAoKJU5rAry3qBFZzsRZiExpRNnmZ7NZXdgiLDEAGUVZNST88zKGQtTcTXCwo8GHPbnJnuJwnjWTY9fd",
  "key17": "2aUkjAwKjSKBbubNCyXfYmFxzzxR4m2z67LxfJWu6vZieXhCAAcRee7J9SccQz1PZNcpL9s2HJfpR9o1hF9P3t3o",
  "key18": "9yW8LaB45PaPy53zQuYKBU7Xo6wdkbQBQc6eu6SgBnuGzDcHQS5pzxY7qKmRzqwkN7HR2VrnE7x7EEPHRRzi699",
  "key19": "4r1YS3RRS56mubSQtKopNMzqSMtAqNsrqMfq8o8V9CqXz2dVu1m235yeSVAY4tK3AdGqLRHTCYnoXJ4q4WfvA7sq",
  "key20": "3EfHV1PHj45d4MN8UdzNsqVksfobz35U6qvtf59kBmX4UT8zfzhwrvPZMqbq33jAhCHAHwfgpFmmHiizt55rq7HD",
  "key21": "5CuHaXxiGuo7gAdzkGaFTdKK9eUL9ED4fVkFV85Ece81HfAeEk8L8pzV14fRFdU5fmoxaz8ViE4AJXrBeXBrbjer",
  "key22": "61yvH45STz1cAHMgVdUMsA2d3UchAgqrse5r7WsU9D7UKmK62p5J3Wbxy5FNror8zQj96T59XckWA87p2EKUxkWB",
  "key23": "4PKBKTZrsL6Z5bVn8ejAxbm1VrGUvZecHTjUBnV7kWKKNYsSY6ZAGjjRpHNyPCgg68FX5CpQ2P1BgAGi9GvBHSMh",
  "key24": "3hLCbHws337VS76NLB6WefxTxJsxWCn8hzdZyNteDh3ewT3nWkUg51DwZgPTgsmqZbFhMmuHBbbZgfx4FGJYP7G4",
  "key25": "2f7dkhJEbNM5q56zByGLBjJYThyL9UdfLCnUDQFXBq9UViKcH1t6HrUcvDLX6fakKCCdvP6wKDMJiMozBQLEMcuT",
  "key26": "VgAzqU3ETS9VzTTHQFHjZqUXA351uPSJeQ1dcjS8DTkzY15TQTHFqfUTEn48pRtVobsoJjceX6n5VVexEK47e98",
  "key27": "4AB5vELtZFt3wVsHrXvYBMZmvd5VdciZym11JzU7qch1NtfMQYkkR6RYZ92J873q4pkvA1Uwaka7s936eWmhpm5S",
  "key28": "2d69pKn2Szy7LCMQWz24DYgmkWnfowwP4fG17J29LEmkFgEd3BnH8wQP4qSQnc9XR6dyrBeejXbzoGH3MXNwoTCA",
  "key29": "35GxmiNvXzggFktP4FEdpR5RN88fvmVS9kWftBvfFZAEcuTj4Fsoes9nSv5tMPBTrKJ5VaNKtkDpiQZHLPtiJKFp",
  "key30": "JeH4RhS1GUwysytpii44vYFqp1oA1dZm3y67QwvHzqUX3rMYzMt4dzuCFzPfTYudnELWopjnzNsS7zJv6bRAn3i",
  "key31": "kZDjchpe4LZC2MScS8rMhdckjbbzXKPnvSj6WXVCivPwpyU62ofXvkpFtfHMYtkQVpPuVH9auZXM7Js3TisKcT9",
  "key32": "5VqUuuh5JS5UzSu4nNWKCTsyjryjskzD6bTnmn41kY9adEg4cHsFYibRrYQLCNne5QZDb99YBSRof3WdPoCDpuj2",
  "key33": "4PBBe5wmddqLRL9LLUL8mdFDXPWTgjSR8D9Y81QXiCh9Zw2vvZEAPmsEZU3aGjdxFxzMCaeP9ntZFRPi2FYURQ4t"
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
