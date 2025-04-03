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
    "3Fk5crPjkinYRA3UBZwCDjHY7psKkLJEgRA5gpBGnFcGWH1Eb6KE7DgJXVwYd9ExC2ApZX7p8sZP4z5AHfGbHVif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NHYRXb7c1yqBJYwxAdddVH9yDS4UN83yrjuwzYTByVDSqWJGjcMcdWSCMx2wSLPDr9BwdVM1ATZSAnMJSYv73ir",
  "key1": "4KcjaML7zmrYQKV2HNdyXTgoTcfHi29owUMEsMXzqYxwgGyzorMJ9zh5796Y9GhNcb18fuZrjA1QH5RKPjMDMoS5",
  "key2": "2FUJTfNFukT1UEFykCxkqionhy6RaHgEYuxqzLZ8DgckL6FZjgkoPr5hZma14LR3pM4ymKrDzy91nFwoguewdmSo",
  "key3": "2KVUunNdYNPweyhsA89hesPmy1k12LQWoHYhFoy4GP4hjJcdPQU33EZAmZduUB8doqJuGYUiZ81Ue857s5b5SsCF",
  "key4": "5gRxWGHki3bEkhM6bFqtRBXYsdW29kNkBxwTu2pL47gS3aZqp5y7Z2jj3uxQVbR23AdLdjrVrATB8zuCm7yF7sz9",
  "key5": "2xktbLvW7nPaozGzghAP3rAJZVV8FhKLrR8UZUVDPQoph1kKv735SKhTxfPcFhSmu4gyhU6NP7ekYeqzJ7DRmAFD",
  "key6": "3GHRRW3SqkASUzMiw14xTzFMF8XSi6KRJ47TcFSLuGrm7DdZoapDuGGfNwB6udhVfnAeUC2r1WwxJv6RXovGucra",
  "key7": "2j4app9mJHefETdHcAhMXf23XaCK1tSgnTBfPL4LUUSRChD5jDP2eFkzYV1U7Rcu4XiZQNtJJ6H5Dac5nWyMjMVR",
  "key8": "5jZgq4MEVSMe6w5cg8L1iGWxm4b9xxJ7BfUTBGrJGUMqn5QpYJczUXcjcSQMmHSEre5oTNPkAPrZg19Nvf32hjCG",
  "key9": "5H6yVxKmsgjiEABQim3fte4mpt2dsNNkNjF4VWqeg7CuHyvxbm8LgcRe5R5H4FNU1PwGxxkkGgVHbZ7bVU6nRDzu",
  "key10": "516oqNCfKNnZ435a7s6iRogYwkbRfsgrYJBZ1AW6YGLJ7JgVnTPn6LQXRUSFTGyez8d5HaW8TZzxcvWNY25SpHQA",
  "key11": "2fXCZ5PoBNF1BwVAe6V1FFinJRHcB6gwDc1eMGvm2aqADF98SAaLRFQ7RPm8Cdu5MCkpEbh9TQfLEsRWndHGxocB",
  "key12": "4ChPit1cAasBM9K8Yad8xvmwNqhyEtZTbqe7crMrShBnPs65ZVPruz6WPiVH5YTvEKtaD98bWY1DZsJW89NWDVmm",
  "key13": "AgsZwmyCREHXZo2yQtGHrxwBxcFvEpRLqdzurvmJvbjLYkrFjgcmfmFw32bnG7CyicDUyHQkvUR8NfeZ3QjXfsg",
  "key14": "46i43VTAV8irzd6GAYBX2XMBs8CAzgyid3EP2xPJpHAVzJ3mJn5f12x5euJ6AZ7oDky1dnpWjss2ty8yEgnbPQh3",
  "key15": "21SQHyeWqfvFa7qXdvCovW6iHZTPkckuRAXy1Nk325JK7jyNKzHUxbATmucG9Y7C2dMn1L9eAsXP2r6SbQeFykcp",
  "key16": "4Zp8SfySzpGYQmZvYqtmDx7XBtPPmaUqLmN6ZBrdVeZrCvfLfdbN3KK4upzUHkzLgTt3phbqFLezmeKa7GX9aDFP",
  "key17": "4m3bE7RSfLvG9ZutGDNdhbMvdRzw33ndCkTYsCt6B8TzHtvpupiqe6UYov2Ce4RnTJJvbAUC8QkJWcWrYDX96is",
  "key18": "4mzumPmYgSP8UbaEgqEJr9aDLRGKUx8dwywT8r6ZXUoa4bpvfNgzB38bmXGzCFKJPhhWTsoLQ4dGCBfpFPNT691t",
  "key19": "2BE2H7ozfcBA9u9rjED8rhcufG9wLouvZCUZ8XukzyZvHFxgzzwZg98uzhaEyhDL4ezt4fqvs8gnKku7hXPeBbBX",
  "key20": "5tA6ZPpMXFCBBRcbRkLNqowUKXVtbzUkTuR2YwsVGzoFVs54YqemCXFWMDdw4EQUxYenaJ88cRNyokwTkcJPPQ75",
  "key21": "3m4vSpSkgEHZu7q6t9qTY5UWQxTy1edEgCvZQKMD78ZuSqFWspxZEcLsrtnATTs37hCKi5nD2n9ZphNvwepzSfuo",
  "key22": "28oUZ6LJWmbLf7rYdTz4WMiui7ExU14VLSVQsszXnx4RMz59a67jXGJNSLesgMb6fJfVNZ3wyAGMdHSvyin7m79e",
  "key23": "2iH7iECPmqiZYDD5KGHx2hUjZ2b4cb7DEEfCmDG4FGRM8PLrQd4tFZAfEd98ziwZ6MdR34xpbE1HksUbL5MvCyj3",
  "key24": "3GYSbasLNGfb7iTiM2BNXzsY4fVUY4uVfVNXiE1Go7SR1hVb6XJNCnkUhjVz3PTvx9Te9DX7mYDVWBHJ7j9xRCoX",
  "key25": "9yHE8SqhpD7mqJ1DyQaZhGoSP6qMdPgZWcZKHJG72K2u27AE8z28MT7D4fYTgk2LYU9zeVrVAsVeiJZBJpkHJSj",
  "key26": "313dYDPbH6DEhjnfLg3zxjbGcF6QhkSf9znqcawULuUysMLdW5aGoNUMxgcMr4DT7jFHu695DrFhSVLhCdLxCenZ",
  "key27": "4BdRoaaVudvSMFMr4VjYcAJryE6YDYHdYwVnPKxsqE598Xv9YeSuCN6brmKewWsKVwEFBR6xKtAZrSWAo4sVtaSG",
  "key28": "dGoNUB3g2Jwevogq8ouYGxUDdMqvGFpYoiyBXyg6Th7v6XxAW4LTigVqFZQwHRK8Ey8m4hJn9YDqrEL3y3r2AZf",
  "key29": "5SuuyQdaLNgJzQHSv7Q7xGacwy2kD8Km7nJXpH76WDDUAAuRRBRDzENDDs6s4H5j61gsE6FPXfS2RyQxLr9rRL5X",
  "key30": "22wZE3vSR3rqcuZ3J7755JrcRnzNuHy3YKqHEm1n3ZZLgpcYtiamdb4mdZnAaB3Dpm3MG7RB7945y38tauTmTXtQ",
  "key31": "5ocoZMqyDxwSeUy17aU1aUc4k1AMnCdASX1Mo5NtuofUthSLUMZum5FiyycKAjfJ3C5d66pr4kFMKKy2RacazNiP"
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
