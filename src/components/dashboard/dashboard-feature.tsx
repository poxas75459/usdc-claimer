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
    "614W224QyfPtkKJLGJZ9VHDs9Xq356CD6eru4nNhGj5r3PL4Pec7kbkHgVScupoPS6BKKRmqQV1eyuf5axkxa3cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wd8wEWSU6fKomqABPmbQXKDGq2QwiKMfTSqC19x6cRaw7xNtXZU1bkmPjGVfYt5KgMei3Fwd6TwzNgYaFGRMb1W",
  "key1": "5vWqCbQ3cMQUstT9PzfExaJ1XYGy7wARz1gkHee9aF2hvT26izyufEkqBxXeYi8VHc29xPEVn7c4UBbGvz1q1hgY",
  "key2": "61tAVX1fXhBMHfqmjpuXFjYA1YMcMRoGQXyujDwuTg4iv2VWmjCKL62k9bEqdBCpZWFiNKjQuYHr9yecXwjdztXW",
  "key3": "4iNpa6a7mWs6hiHGn6dXpDALk9SAnWGFqGc96kP1xzse7LqE5Ex2EGx5scK5NuEAJVbU15JiBnorpYpiyNyKg3b5",
  "key4": "9Jptoswjs9ugkof8yhuocioNH6V7LVMTcd22DG2suUnpJcgNFoRzJEbYxAiY3Na3jjtXTtQFU3kNm9ckqnjjvbU",
  "key5": "2X2yHuwDAgphr69VfBUJNkERdS5pao1bgBBwor41o6NemEo77xNVLtDzHxqrMbR7waf6t3X1k64LkwBVTzaaPwTU",
  "key6": "3jacdAeLrFceH4krXg1ShFZBX9x7D9BLniP8DKNzq3muf7XTrhnfAravJkc23xnGwmZfAWKJM7LdTqo2nhFZSJF",
  "key7": "65CYjDt6QTBTcPmG4FWZhvcuJkY7bSc44rN7PYAF5CsX6GomQRAWJu5zoizmRDGs16BAJUXLBUe7gytWAgGMDyHL",
  "key8": "1GLNX37i3bBfv6wG1pzAnpgqekKFgMNUtDNCiJ1gpmJT5EFwTehLipzV5PM8ZHEXVaGV8mvpaqzkYP8nN4RDany",
  "key9": "2TbAA21wCyAR6Q5DgL4QT4tJSPKVg7QMZJy9L4J2npcuzyRPVDvUALMABhpFG1zvmAtFZAKhPFE48nVuX43fgMc4",
  "key10": "2nh8CrMShr4LaeHkYmWgMZv4Jf5yBcCxHW2mKwo57eT95oGo3t6SnN5JSZFxVRaN2Lz23frvN3xxSjCVfCde2WSS",
  "key11": "2uHBYxymCXoSJ3c3wX5ELoAibrHcq8HYHFxdttNuX91UZP5yTBeLxydCW6bCDfW9eFAvkZ9dF5yGhs9yhz2PRwpC",
  "key12": "ay19EYn3CQY2GhNmtDkzFAiUooYwKd6EkE6WwL7LRV6mMkNwqusvuTZamfygWMsk8Te22FReAaNu5vr82RhLAae",
  "key13": "2erid1iHz2HeGeqZ9N5Go4znpBW7YnvWmBwvdjqZfo32UxSJcntkHPa4zxcgLK51wddkcQXUeE3tbCbmAAnz4Wwr",
  "key14": "2mZjCaN76b8jLjY1WDumRj6jvHgzg3J6dYomMTNPwYgWXhyVwaxQXgp3PaexvbkdcAbzPbMoPi1w39NS7gsqXf7i",
  "key15": "4MS4mojW4yzB2P1oorx7UYcUjtNv715YrDQG4nhy9oZtjDEaHk4Yx8dH7ePuJKP2cVRkvCxz1Pw4UnWESvoemAQj",
  "key16": "4TwBo4dPjgedfVg3YPapgTzPYncqYbSGxioU2SULK39G9vRPhKbQHEcUftczezS23kKMDCVkofbKCA3LtJYqx4vp",
  "key17": "TuGNYMdXqyNiYiEU1dP5J7sHVKeBEpuBFkZ71zcbkDQGqxGsR8yav1k5CmGNDyW3fRcSSzKqM4ngX16782suQE8",
  "key18": "4xNmQXLstmXy2qiMFqFfYnvJ2bxzsuGVdychdqEdX7fnjUfEzX9hvRbGsSTGNRN8LpShJWjzGLwUnVgWqQFiPRuM",
  "key19": "5poEH3yC8aSbdAu9ME7e5HMiq2ESexhcEksYdpuD8ycR3akXpTyVBv2p2dT3cmv2QU9RP7QtybdTm3An2JucKdmQ",
  "key20": "5xntNwoDJhveFLi5WHvmEZGNAkXqaRrJ8t9TxFs7tX2FWFWWReXi3FKcfQsh9h3RFP3kyWLffShTdsSiqvuCUEcU",
  "key21": "5P3b6yoRL8XbNu8i5S5d9ZtMxjH3QLJL2jnxknx7Z26YrUfDmnTzZxsBvfwdtphJogBLNmWQTHmHqVarSopeMkAq",
  "key22": "WmZ5sVMu39UfUMsWwgP51PZE4GDQys3Cc64TK8oLqepySqbgraR83h6gZKCzy6sZG2j6vFb3mP3b6Td7bXm6Hv8",
  "key23": "3UJrWLBXBQis1fTYyeGKtzd4d9SZctcxHLvdFa43CMxRgQGMLiX88NkX39KHMEDTk9pHz6Kr1v4ZUkdidXeETRN9",
  "key24": "46vBj5dhRrfNoK8Aia3AUQU3nEE7ryccmidV26FZX9HFuf6oFhtNoS3syEPQFUpd2VfYBMceRqG5iMH1paULtqBG",
  "key25": "3SdVFFNE8aqYH2QAP8yrVWJ6UxPFgpNrWujmriZPFWXZEy4PH4QhTRxajAPZKXi4gAiyUnRqor6ACTKoT5zLz43g",
  "key26": "4FEWR8rqhqXn8FijzPyMPpi3fEsBLNGchdFnNR6jQXZjbqcxWNK9723GZbJjzUfqCvq8NuNYrgK6YUvzUUubFjJb",
  "key27": "49P3MQfjoX7E5bhWcjTUgwDpuj3BqsVaL4hyq8axnYdFRyfnzA5zzCdzFvDcLarpiLGhQDGvvmULB3Vpem5anHsX",
  "key28": "4ypGUAiwuo8fGJB4FiZg1JQozanu4Yo38GTz9vSubsPpkt1AaNEzG3Kd5JuQd5kvAn1QBzLLVPK5nsHBqQtAwwLG",
  "key29": "5MPipQXGaTp7vGK3wRqSiUnLh6ratpqMFQiQcjk5f1g2kXT8G3kJZFrKoeXYquZsyfap4WKUMFCWsZ599UXbNaTk",
  "key30": "5XU7wJGUEWe4bgutPK6XCsbrJRniaBdoXVXmhzLCkJecvsALnCXNPU8JNvXwwjBiT2HfZfhLyp1kD6aSoSTaeBxh",
  "key31": "28oHCWejTaaniLQbdiFoJCEFuwErCTs8NL4S4uQ4Dpea8qN8Kq72VsbtHNSuFFiVhFVFoPCgGM7W4Ahfz6oNzcPj",
  "key32": "2YTngjKSUxd1cBnkhrFVwuFn9m1p7ZqMzX9m5HcEjpgihT97mY9MbAshPPfGLG6CVkogWQjZZATrvuHkgtVfikJS",
  "key33": "FpZwGsHjzE9KwmCUBnrWHFogG79V3xWVFHeW4gMFFN187VEC84pKk88uddWN8KDmTBxcLT6NnkvKFkV2zFf9af8",
  "key34": "2TCaVWbyQPGRa4c44PTqD84uREYqR3buuhuE9us8vPXgYm8xeLnPQeUkk7Ko7E2bwRXdtPUHdkhcNjRKgKH3gKfR",
  "key35": "SsSunWQ5q4UbXBhPmhHjFU2JfVTgeBCY2hHT5mf6harCzp4Fc4jNhacdAts1NBsAFE8bNNw8SWBWbeWQh5WFC2f",
  "key36": "4H7aCGCyP14kMy2T4TtJkVcF7zPPMYeYSCbNitWjqMKb3ywBDm8nBQThuiimsE1WaUbqyYN3u85epoxg1pf29zja"
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
