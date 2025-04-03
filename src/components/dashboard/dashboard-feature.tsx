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
    "5ugwa3Cx4uqPruiKz9J2HLbVsh1gGXDCNDWHZSLG75rg9LfN3WuMcmP41a5kUP39YiVo5foN6EBVJu1QTu2FfPUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKCCJyVM6YfZC3wULSYzeanZWArfkukucg8QiMMtRMN61zyh43kmHRzWsqWKgfhKrBa5vK9uc1G2oJu5NJyeMds",
  "key1": "3vFobobZ9GXgELi3sfQ5quAU1G1LWK51oaD9j4KsuFcgMxq7bPQvmAZLeeGQZsq5SkYmSRbRg3DPNf1SkTUTLD82",
  "key2": "5gNDsyW9hZpSyfkwsnAATWmhd9ZYPRYfGDUzA8F4FPH44GQ8tXkQTVrCuewvvU7gM4jQRj6qhdmp1tSy2gQeK42y",
  "key3": "2y7Z3CSt8Dc9H8fN66hmnrCPKm5TxxYFvNoyWDE5gU7jRvaTs6BpN6awF1iN2UaWHfMxHMR3gXxmMPTwQt2Wdwfr",
  "key4": "4aoWee7zHuZrJz6QvH12TFccxPBtCNVoPM4KEDoZwtfh7vNZDepu51xRXLEJ4GF2CTFXiJkHJyMHYyiMr3tRFTBy",
  "key5": "3VtDuNRc5Aot2jF5PXbMJ8i5UAPmTk4FkjGzxHVdhaFQZXRLoMQC7fgLgsUimZ4XZDKwDagTznRotRQs81hqZLvb",
  "key6": "4DAQsH3GeHpBSen3ZdJrx2yM5Cb36xgNKm9YM5LkSoPWBraj1ZTEAsWpLhoc5fHbztNZdeFcWQLykMCt7kSx8Ndn",
  "key7": "2ZD47HxHkfRYnwAmgmi7GLHkzqhLtGvanhXL5RLmSTxFr1y7SqyXMr4xwC5fjnMPqeSiBMWb7aSwyTnkwGncScPK",
  "key8": "4ZxoTi1YX63p8YxKksghnxEumeCEMaJrYr4WaUQ4E7vrP7ZM2hvguT8YC73aH9FepeNdHxUAK3oT3N4APw2Tvbg4",
  "key9": "fMaCNheAsc1chRoLmVMGAn8qsTuAF9DikxEhzgLJ5eMoPAkXyshK84rXS36RfWRMYa9dq3LKy3rQhqhyYoMowzn",
  "key10": "2TfGPVEiHHjUSxooQkQtxMs9MazrKDkSwMJe223v9aJ4MPY2cSnE1kcvhkmgVsGyV4YCepqU2zpEjuy8qBgqgGhb",
  "key11": "4GQ3CGpxdrPjf4xpLBrFTQCQoLyjsSNpg2wAwHjgmwvEZUY2kZAWiTo7ot7V2nUPeB7eUo37mEGNrXaFurzSi6oa",
  "key12": "2npqDqh1HpA3Tt8o8Xczkxy5tHPHf6hgLxUwF1vvst31GQMuMmFr6QGQqKwJ37BnNhAAyTuFzbR9mbuXVA9QcaX4",
  "key13": "4FWHBpLnS18Y5jRSktg1iLZrJ75og1JdSWCLpP8fJPFqvWsrtUDtckKgxzRk6bkzc1UrEsrvPy9cLRFTYi6VNCam",
  "key14": "5vpEwbowzwnAan7jRpvfFdT7yECzGfZs2oRXvo6buzV6kzry6sDSXTvbvTcbwUkqjg11BPW96KPYUiSvcNEai3yR",
  "key15": "2xBqtFexMVEV5njoVeiDAUvLDrbJtnpjA3dQVLUESASJ51pTf15vtN3pPRZYrAWFAqs1RHw7fptus2GkHPmjkVT9",
  "key16": "54e7gXrBMFUkZX33G7m33Zpd3qMtbYtA8kUBax8fPWRQskFvXLWgVYh7HGxtGmCYFvUx9DqYZ7p3vrYZ2DXf6EL8",
  "key17": "DMFzGdmrzJVtKA8wsBva98D8Y2hDZXgx1KEtFphS7YqfZDPLKE1ptebAcUDxKG8VVdxhL9nyLUiCqw5NLhoH1Ec",
  "key18": "3EYB9c6HBB9efkJ4R2PP5dhH77JdfF6JQMvkQWCk9tgj2wFutpUiXqS82tjgEyvhdWuKJkdvg4Dw5yd8Gtoxd3LP",
  "key19": "4VmosKbb1jSeQqBFFHuEU1GDmpAxiqZXYjrvgSHL3GkN4WwLqEzBT4bHZkaJua953dpQnWNZcTb2UJtPCH1Z2h7t",
  "key20": "67MevUJZtQUcr6nePVhRsR7NEM53RxgQKSGFJccmTfrFDSip3VtWb1cngYdTkpxTeQhYJ29EkDv2WuwgdiqB3Sd2",
  "key21": "5dtY5nGaFqFeub1SdvTxwEv6GJPyj65WH3fz5fGY47RW5v7msLa5Qb7Ct5LccLdJHzNjuX7imedq23mcyExA4MsX",
  "key22": "3WC6AXnkxxSfF6wXEN1wpixAfk5P7GircioLZDfy7RZWqq7p6MjNaXHvTPi8tBDGcRgzD7KGxvXpC1hBs6RWsFcB",
  "key23": "5Z6EATSuDTw4zKAum95s1cTT8661S2C89Ky1evLtcCTRBrb7xgo9vBvpcrByK6NAZV7VUyBerC1HoXJeT23Z2gdo",
  "key24": "25sCq215sCtJkKbLzYoAvXqb1QvpJ7zXaaHb7rRbRxV124LxNkSbqGEC4EhgcuULSD7cRUQUj8KbPEpFq8gsy5q2",
  "key25": "42VAqn2kWJdrdX3xzxPRttZbegnSD3zaSGSuZEK2Y3Yr5cJPxCxLL1zFoEhUuoMUWvr49ySstoxARQecC8PYrUs2",
  "key26": "4LvyD4j6dawBzsxnTepwjmrXwLq4mDeFJNg73xrGRtMZuCxnyycRCGNJAaDewMwCKhbkFF71PErLDuTLLg8mcFCQ",
  "key27": "2xXUCajqRKQMhz9Tg5fF251g9dnLo9vPAs8e4faiP2fTsctRXz1vT3ZEjd6CP3xMSXejUwshAw8gdB1BLU3QVKMc",
  "key28": "5awFQGM2GvXRfPrbD87RL3e8tTCjvTwX9bWkMUR6aQUEPofN1WcBai6dGUCALzrUFk78B7pxQjrzDY2Dk8vx1yC3",
  "key29": "48WGgDaQCgapHAX9KMg6mjrR1d5q98LPA39mXoj48wheCKj5XNnXqCKoaWs4VQQWJyZKqmKKnHQWBS3u8AsLRUDd",
  "key30": "5cCCWYWtYkj3rtk2h9qrhSoVpdJTuzyrzkWo9RxmXLmDQSAkQjJY9dds2sMq8PGcbRf8bQYtrpWZ4tBvD7c3XYbM",
  "key31": "5nMmyuWNEJCHXyHTT4qRnWv4JCnfqbMgEWsU7MQ1RBxEWD5awBM4wFUSGEwHZ3X5pNSTrsxDMYaiGDE18egPaiY6",
  "key32": "4qtbL1fjURfhGtwKHMhKRnMrrh9yLmRCdaCcG3xweFUaTVDjQ378ErJ42ooApdZ8g3d5msA4cwduU9TSezfdJrZM",
  "key33": "5eeUPw5ngUYTidcf6ReQRE2vijmic5iKr3oxuZiq3e6jX2nVdvM9LcbLDztWXbmd2HdjmpV5BBS4Dr5cvg3whtTp"
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
