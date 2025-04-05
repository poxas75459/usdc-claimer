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
    "2aV8z1NrEhHYjP68qkW8yhBrofAmWRNrqfQocfomNC7batbexZhb7DB2QnjLxonRGpdFXZbMbNcLmfn7Tdru4eTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HH4sRktxcG3BRxd8N1AtNobAZXyvuFmGr8BZK2SpzdSBemuZj3jQounjqGRzhPKfxcxXRsM4i9sTyceKVwJkmxj",
  "key1": "3ZZfVocnrDifYVTyKQFhXxUBcLq3VeuKftkoReK9SwgV1pwA43Xge82bqVtAD4mLo94GGZLXKwUV4AtnPF2cuV7x",
  "key2": "5XCmXjpuNwvQ63rRHKiVpgr6DBRPdGYqsLV2yVMGpbeMsZRGmEbVBqc8ngeXMAcv8Zbz79AdKB6TsyESi4nWa48Y",
  "key3": "5JGeF8GweMmxYUSeQaVvWHZRfAk6XrZDGjBVJf75dj27kXRu75Zcz9H1V8rACSzMAJD2D6Jq1gcc8iYCW8ibwqbx",
  "key4": "Xw8urK1z6H2zr4vP8Aw8vGGcZG861UoGMpSxR8jWyG74kAUHTVPymo5j6xXJaHnFQ6oxpn3vGerQycbuufiGdP7",
  "key5": "6hb45Qj4fkyR4J3Rxrjt9ZQZ4vzNC1jWHYmSnK27L3DBQgCzZrcqUaGC5qjpGarHB8JAqq55pEaYgyAMHxQnPm2",
  "key6": "5mtLXrP8p79KygV4VgJyMSNpVu2Qg42bx67yjdYcU2VJischtFUdcE2KA2M6iRB28UaebERgsUDQG2dBABaB61vN",
  "key7": "4WgYdJqc8hcMLFuj1D6nKDDDGwRAaH2NrvH9R5hYyiByeCJGhPHQoCLKhom2ki2LXdJkMim55R81NEZ6succ5Y5R",
  "key8": "3N9vb5eaBcF8Q851y4nML1rNTB7Pqonw3KfbtnPbnozSjBKTdETz2CubC4mt9ZPUbm3S2URUpbFSLzJH8hzQpfwT",
  "key9": "2PiGSo1yaYLPRtJ5ESpkD3HPPSzj5W1UUYyzpQBoiVx1Num22zXc6XTXEVunSJSnKTMT8ZauLneQhYDjZRnVr4Ww",
  "key10": "EjQFWguxmnn8ULaCGNZke3hijc9tUYKzNm8pvRGaYPM5wF4eHCUnRJYRMJpi3oFunPsLAFdQAebuhPUdBpm7XSR",
  "key11": "5BDyqo9PmP9tiWtnm18rUicTqLGQmXULKnBWy4z9hR8ExhuQ5RgshWL9s2JKGwgqrrH89wcHAqBKWvQXCHrPSJEV",
  "key12": "4zDcKTrLiVU13uzrXh3otyBFKGctL2c5cbceAeaCjvHdC9Sj62b36rSWuBJ82yaYBFmcgC8kSdwUzu7AQL1tPyk6",
  "key13": "46B85VSczpxAMCNqZqNWRSscceGANSxYzJzWJSAtvbQHnKg2Q3MHNvbDiYHTV3HWq1EzdiTw3t3tZG5EFTqvVN3i",
  "key14": "474QUJBGC6FNwF2rBPRFoArHcujyLbwG3QPu44Ns7nUgQX3trSx7br9Mkoag4w2mQQDmiXDi1ERccsS1nBbJGazB",
  "key15": "5ky9n1SUencsHMT2G66HBGmYwZWESKmFJxg5BKiTMEsmaKMfsZSbaAGzRsvtqxNVVdBDZ5eftGeXUnnGRpcpRvUE",
  "key16": "7MVHRJ4FoQZTXKuzpXCbgRaXChq8THpERx6PDYTDgNGhfjmsKnUNxY7KtUQs26HW5Amu5ZhJUYXWKrGxpGsi9Cf",
  "key17": "3op6oBZFFBE34BEZAyRzuamoyHNhY3C5bMYMLHCSd2ynPGMATvFYaZ8EGn677CUyKho5pN3bTYmGRsUNUJnSmssK",
  "key18": "4fT9t1cScHKVAasGccs26ovnVCpT9Ed4myjaojUcG6vJEmhjbcvSXeo4xVAruZ83U5eRuURQDaAfnC22zBpwLqJX",
  "key19": "4mMfvHstkivPeE9pnQw63P9QG4zPno3TZFHQUTYFvbNgKASVGGyBXfdRri9FbxLBdYbfdPoJ6usvHstpDLpbhFkw",
  "key20": "4F9pSWM7y44TuvHGaXAeDTQ4ZhgCJMFTAB7GunyPzDNymLkusMHRA3CQPzrZTbTL55Yjtmc3Xh3wchvzjcJvUpvi",
  "key21": "2zCrdPoniXAxCzGejMoBJz9pAp43AvW1VXzuaSr1ZZ95uXqNFuGdi5Xzy9PRmF9PUqMdYeWgJTfUt5A56EgUG6xb",
  "key22": "hnfft7zFjqdyc897qABZ6M8GF5N5XyoHVb1LSndiyuhbXekio181ntfB9GvdPT7k7co7H9Ks29vUcAVfDNVNujX",
  "key23": "2hu9T3SWweepewvwj44b5DbqeBYcUN5BHEF4tdwxXvg1C2gvz39J5sxpHEo5LGMUwGUTySxLMsNcn8iDqWGDKtJg",
  "key24": "567rdyeMnVCPhCDfgqiukGje5UN8e11cHzYyo1x8QNNPvJy58FZ6WQf6QRm1sDzJnbZCZ2QhrcLVxxm7ccVKUxr5",
  "key25": "36B4KVALZtCjzwh3NCuVoVph6CZFHgSpVC2vQPJRJbgJ32BC6JbNp9pFgZWa35JAR76RPpkyQC4AX4wnDEHVrXMv",
  "key26": "c9L5XAzz2VBRCZVg19s1NPDizSCYQGgxyKJU4BZQRhgxV1KqaGuKaSJbmMsPWeamRGatgKgavRtm9pekL6MoYcd",
  "key27": "46KtbpbCYwxEFad5PG9jJ5ur5nCa82PEtZtaCaYZ6bfzBbF6HTLP8FWGSpBCrhQ471yp2fVEZX5cxc43nGo2SUNg",
  "key28": "24J5YmAdmXruucSesXvHDfN6ZLWnc5NPwJ6GkEnV5fUesksfqM7j5WqF72GpSoUKkp5LYZqrEAG5sjqTVxzjxYdR",
  "key29": "3qcoXgpJeTWZrHBqwemfpYRorBgVV2MHd9iGF1fNUCNgKMePY5ry1zm2QbKM5wNC2sgNuj1kfZwNNMSrgMdMuiyy",
  "key30": "2GsWm1rHQmY2RU8rf833fXJzaoTQpyGLyPjg66qRPc5DXrWuRuLy7dwZ1kgK5585umGbQHFn41BD2dGGHdvJB6E3",
  "key31": "64WyyxG27fpHaVRzuEuMx5XNv9ep5AFCiEyurqzqeBsSM6rvPdCSDHerijZFYcbvDTCdW7P3srxLRLfFNbGwkHiE",
  "key32": "2SPsnbCgKBbahmt3TvUtoVFTRaYrQ8anEUt5Y4WuTPqMRnBiaLbsFx4rCtsdkpeJCfnvsYxs2Z3xcdb8YECgqBjN",
  "key33": "7XkZC85wZvRQe5kwBao2HdMuMQFZrZwupCDusGv1PzfbRkkhaEiFXyxp9nTS44F1oYeqDadr4ZyiNZ9cBGJmfE2"
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
