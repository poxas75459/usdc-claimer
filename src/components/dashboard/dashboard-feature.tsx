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
    "64aTaLewRRtZkQdmu3toVCFTZGm61ir6DQnQ9W5cszhgtXwZhCrXgPi9NWtp4g9ZvHx3RbvbGJwN3Qp7GeS59e9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDGN89aK2TvSgoyj6KJ5Vap1u8vPzvdVbQspf8Jb4VtwhFqfcxuFY1ZgDNRHAnim9nJ73ScwUGTm4YFBFyLg6G1",
  "key1": "b2Lv2ZzRa7ELDMEXLyiKKEYJju7d9snoWvHMrC2dsEHmXyUSr9NCaEE5KfafCjVodD9UUVaCyuY3iSYX9hfzTnX",
  "key2": "2oT28ZivpFq5WUkVsbsmUDGyBrqA3FwwtbwkuJsjRrHn8qkW6TXRtXJLPNyUwEzhQQExQvK8reEiT2HjTcJynJ2Q",
  "key3": "4a2iEDDq1bVLuFqqWRmWhs5oCP1ihfiHMfE8EUdPqFfxSPnGWvWSziKWJndGxLRQyH16mF19oNxgFhe2ZJtND2wK",
  "key4": "AJu66NNX21N839Az47GG3qAeJP9VEJtagseubWuSKrefrGS6xV7ZDwZdPj79aakiQJrvThVDEvM8DK7sYQ6zmCD",
  "key5": "5W6uDMGJrvfUsFhYJyYUiKdiNApkkJ7EDJcv35e9ZJUJ8qJYff3FRH8qsbjJNtBBVmERNZRSx7U1Kfw2v5AA55p9",
  "key6": "3XJ6AxuwspeY8jh7efV6Roj4LA5Ez2bDoJ3RuFUK21R352XEwi4Swc2a18RKmJgskxHoUfxbBZkpdSJvo53NKyDf",
  "key7": "NsGHXfvAMkakGNRFgEuUm86gFGwe6bSkxmUvRnJDVEtZkbZpFcGJmzKqWChNHtRdzPWbghBLKcEod4FwABTNf8M",
  "key8": "3wLjjLmFL9nxz6ud8ZxFghApKvySDEvm9BbAiMVJkPL6E1Boyg6jMoXpCabJVwSoAyEcVbDf3QyRKPy4SfT2bwQL",
  "key9": "3CRoKrdHxMnoEVoBGsCgPGAr9nZgnFesYybRSBZ7wUQG5GtmX7MjberUh2duvKgHFFpQC812rsX8EsuLCfRRY5pv",
  "key10": "5fowQ5fa4LVZHcmC8R5QaH7YYXzMRHCnVX9Sy7MheaLUw5ce4NBp8v8ajzqQPNFairRYHJdj5hhM9QTrhHka2Un4",
  "key11": "xy6ihufzopLTfGX9dLkdsJD9qWwPJyog7PndJSrPqLDW5gX4mkfCF3aB7Js3qW2v1pxgYjnaepLX4o4AzsG2R8w",
  "key12": "QS7TDtSjUDKvzNJpHbSSrHSM1toDu4hRc8qQ7AHHmLVAKuuRnFmov3DRpwZv8XmUMGHZN5V7wfLpurVS4cyNoG4",
  "key13": "5h9JtL3iYnowFp7be74h4kS47EJc6iaS7mMT4cWksbZ4Km3wGbbctT9Ruh1RQN3Hzgyy8vTc6bMs2rw3CaKTcYew",
  "key14": "2tWsWrmLzG7XqwuQLR2qjiUM5ZuN7iD2po38BxFkoAQHEX6PnogSYPooFa3Div25bfgwEfX1x3twJrFG3s2gDjYz",
  "key15": "MktDLDdUWwpGvwCk2UgbvCR8LAfDiDhPNyatcdrhZ5NKkB7cUny4KGF8R43pbZhdfEKzNin8ueCdTFdc9YUqAk2",
  "key16": "4LhHPsTjoHzWcnBXZNrfPHHP2y8jVKJTJnTq9q4MU4qREkHnHJTNdcZiaQnuifGLFzHj7qGNv83vV9epPmZJQvJR",
  "key17": "24UZi5x4QREXyhDtJmGGwKbSUhj5jezNcmAdhtrXUwg4LsWzNCB8cF3EJvHN2nKFqMcybcTUjJcZaPAPDsf4zMeN",
  "key18": "2iFqmARBvdENwFHhADyptJwtKphYH6UBmGPnkAzvjbYGBqKV4zAXnhQTkwBxrXXYxFbpnhebwpumr47maCkRoQQk",
  "key19": "2CrihXJPsKMgamNpANn5gidfwqQ6WUTgWXDijhpsS15uLJZUQvLt6U8YvfpDd7eTtZ2eNFikgMNeYYDX5LLMRJ5p",
  "key20": "2LndKPtdYps9oog6VbHXNsvY1NHVAWUoEfmnVMKvT8ogsFnVDSDPMQhGJUnTKo29jqhTGXS8pH3dXER5jEgpZUys",
  "key21": "5euS4AatSZeMSLMSN3E2H1ewfRJpk2nUeBGqoy2jP4MCAkoKXUTXJAY5PxWn4xDXpcBGoRM3hzou7zmg785vy6yx",
  "key22": "4boZs6dwPCsdi7rPmsSc32Ua1pEhXYRKcWJ9yEZEwofXaiL6bep6svQKJvVEdUabUg4821PrYYdAJeA6ozMyhgcw",
  "key23": "2WBAvwZunS4VhVy1xRSXKsFkcsm99P9N8STo73CjmPaZRbGuKYnKVwHUkdG1DW4oPAZNzZWVvdknhvi7Kz6m5tsA",
  "key24": "5FkRhbPc5fmAj45kFXo8rt7YnyiTvdhrgSaxqWpfgq859btJ7cvN14BeX3qRb9GGzVQeedy7YFFrVTMzQVQezKJb",
  "key25": "3Bg7tXjpWqZZZAahC8vBxB8PEDuN3ae9qwRwUi8evqpQxqxJcRJDe3ibh1vXtWHhBckLyeFTCWBScFqZ8Lx7www6",
  "key26": "4rxP8MSquwXSuy2XAsJ85qgydM4p8dzyCQSATMGhfijRg6bHuX9F3eDPWUoU7tnJuBp2uQeWDuPZBzgdyCaVs6JX",
  "key27": "3KhVDAiekY7N29im1cps9g8MjemQpV79uJdyAUuXMHBSRTgS9KQM8tKALmMZ5wARQnBsjAWoz7qMq3EmyAe2FaHm",
  "key28": "2cVEnxtVN8tCthfwQPqRHCMF2ERrF6aeTisrg4FJFPF9Z4jQoGVqYxij7dATnKXbhQGt7gcFwJESxw8jZJSeheMP",
  "key29": "5Vp5DyhbHu5ZYc7rPXfxeiKzE7EsRkbGnqgC7HPaZjVLTSXyb8yQXivnW5NdVFPA9FgCZk1Q69q3hbjYjjfKTz7J",
  "key30": "3bpbkatVfRqZnSk2LGiF26xdt9TjF6cxoYg1AsHCiqNRcxuC4vw1qY5jJM3ckXsFMpcZ5rPXFgWnUf43XJyDFvxF",
  "key31": "5cGDAR6mznEJeGvfrK4AxAUuYmrqWAHsCMKdQLhLhaYJEQWKb8dTiT9msMRakscBKw1Vgjio5wE2TZJYhhN5iPwT",
  "key32": "2zs3yMuyC2ANpmNXMmgWmD9bafWnhaeTZBGYLjwZnH4fSciniWYZJZzKcXZ1dYARP6C21mrXcdRqYfgUKMJTXc4u",
  "key33": "Un6XAzEuvT5X449yjnKrTzrHDY3iZic8fXidUC5ZxpG7frejCDGbUYzu1kEzkxpbWUaUYkUV25b3rAR5YMF21Lt",
  "key34": "3wuPPiRH4bwZpnGd8ku2oCh5jAgWMbHfryG2q7sfFLzeX87RktQi2SRGW1NoiB2SWiePWYtRpTwPSTQJYeAL2uc5",
  "key35": "2uDfCJG6XUDgdkvkLenqjbvYv1JAq69FQDc1YREksmjfknRSeBJYuSd7mJBCsjWH4ygVr9MMPXBcWrtEgrArsiM3",
  "key36": "2PP5LMNZeXCh7dfuBjXZGcKcvabSTohrBR3Nrh4Hvyn8yyr4R3T7NF2eVcuFpNUcrtz7Yb75mjSxpZyRHaUPhAWM",
  "key37": "2DtUumqdMSkYLTJqX7DJRJw3Zzf4rT95U83JwDQuZHoEdzsrnWBD5AbfuFszjEr7H4QMhgtAH4xL6YjRPbh3GgpF",
  "key38": "4kRSKcQpCsusJNjxVQyRczmv3WCaiyTvBjmWBhtqBWBfM3nXQoia7zJfwDZJLuTRKgx7YAj7GfcV1F2cANzmXKXG",
  "key39": "4oozXsrokqH7oLKNbibyLfBW9NhkyhBFAtWGKtUZzZy1NVxTUPuAgC1xuZx1p1ixQGaHuR4YQFBMTHVF2LzmW2Lp",
  "key40": "3SFTaQgvWmJK3aYxaxU7U8C3JYrCGxnL5DF9Vun6fppCL9GMU2nGa6iPbyqXJXwt6QoAsq1Vsz4KPU8uknCevehs",
  "key41": "3uFAJz6xGDoLTVKCrrT397hHwKssJQLrBfJc7QKZb1MMz6Ku1V9zY2xWbtpv42DSyqEqWw7UUd5bsRjPL7oQuDoM",
  "key42": "4BpG6xsyaqamZcgPmQU4XcbvY9tjxwTxAH3FTXgozgy4JwPEDE6nGQjphNFCCLerqSuaDfULMQYx1PQoGxPMQ6vz",
  "key43": "UEVyWjyJx29AzmCjpBTBhFit6EgNbE2RQKpAiZyaGgW2wuNymZnCcEZy8SvmAQFBXryFfwuRwTztthPTkQZd2yR",
  "key44": "MaqLb8X8VdGHK1UeiXX6FvwxgSXuASQSuMcowTbYfqqxvKyNLCYCzLKdkbdzsGcfifeMyWKX5U7fPuqZu9oyT6h",
  "key45": "24xvt2DoA4Vgm4Ybk5E1nhVLYooUbcUFJffS3YuWD3o5aqyzwPCQHBCEtUYvd6sUrWJg7F4maixDPkiAR7XyQ9Nh",
  "key46": "4hR3ViFKSZJbxC3XjDRUXFRHk8CzXTLSCFWh7Vfx9AmoCJJxtP7X5t2KXjEgDQRTTumfADb2e9sDUcx7XP2SZ1sT",
  "key47": "2S4aMmam5sK56tk6JFmt3LCJCbqiERJFjzYVg8twKP3g6Rn3VvZ12DZVGf2Lhm3EU1oSeLLmuZFrN3zZ8p3X9yyt",
  "key48": "Fh6MEcEixR87nkqgQdoypBtJcUxL1VUbux9KU2Ry4kf9Ngo29gKkYRcvsMJXPHDSTftUgpBxy95HphssWvyam82"
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
