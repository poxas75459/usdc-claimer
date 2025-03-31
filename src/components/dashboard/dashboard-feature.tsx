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
    "5HTHhvh6sfJrow9AcsQa2kvMfsGe6mJ7fS16f4BHN47ooUGdncWJqWvr7FiyHDu1FLQaRAm6hEfR1A2hKKgjXd9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y7eQY8rwCnjeMxR2r8KhrMozJm2evRwxkwmkmCNrhq75yavPotLa2Z5x1aMbxUbWzu15EwtQHnVDs2yU9QupEve",
  "key1": "3kmufdL76cYuQLnJXh6P2jSoEKcqpwHChiEELPKqrab6dLqQvjJyeafNNupcCK5W6PLVqGqqAkUemdtwwD4qdwR7",
  "key2": "3QrqsUCZheX8uMDrepSxtbUS2szmDR8NUEV6UNiCVoQoRtzv8H3VPkpiAd3ywig29xb86Aw8WrDbQw23qc9tEvu4",
  "key3": "4nE7F1VmoYi4WrLbQKTjfT7q6Bi1bo76f3DFRjBrenYxY9iUzZFvZZqkF4EnKeMtHXqudvSnrYLjKs1yKJdFcf9H",
  "key4": "2bzV472k57sxXnjg1GGbubGMbQErDAu6FBCDDk3kWyTeZBksz4yoLur9rCgU6fB7WRMjSG9kY99H3zqPMYucPqms",
  "key5": "35LzasE82ig1TpWLYxxP8GSmtoHJksodmgzN3LWCikMYEJGmHN3wsQTBDE2c9B7nejuttB5ws3u9Tez4UeqTsL4K",
  "key6": "55HGQjeVgeA6JjQpfJwQGdwkCPHoUk3pRKVchtBdkYNUdxqvT1j5LBitg5CcfRqAfTTdLSuzQxfo4iPp8cJRo39S",
  "key7": "2LR5KMvizDqJrxHZmpxC81P8mopjH7AFWakB9ThTnocNZ7N17stpVdR6MoVmYcRX2YZRxwm37rqby2bRxaYoGSBX",
  "key8": "3JyUqtBAb3VRZioEaojTVDgSby19aThZQFG8YUkHNBr6pcPPaA99NqDr3eWM8aupKC9mVXVKgZyLVZrj1p2nFBPF",
  "key9": "36q9qpThKFrYfbjkh5k1fsMDMse1eVtcYPAmiFhhdjQCu559iDoXdjQRMZhDiTU1bPAtWEbWgBPJ26D4maFCJLn4",
  "key10": "2HgYi79km7ewopKoptxQVKWAzKJhbmd5w6ttSQvdZ9HqsEMEAPCa8eJea7wjvNpwKb6CbA1XG7wpkS19KYBFDD9z",
  "key11": "2JdQJY1wUZvKMVWBr2uEd1C5XFGM3WJ8ByiFF1CVJwgAutTFaRPZGzpBLom8y7r8t1WcuHwqBfcNQ9K5BfLMCx39",
  "key12": "3TuLniREkb2wT1JTMVzrKfW9rdiLYm13TW99ogu18dwZy6RLYChp4jn48GgwP6MEsuyxqpqc8XGnZCsAREpB7dnb",
  "key13": "39JDCavWc8kPzwWGgec34oDgvnSEuQ4MEezhVsQHdeQggL3PQGmDQnFsoDy6KFqAqSo116f3BDbQuao1ha3WLyFo",
  "key14": "3fcJWK39Rx72wDgjwo1wd8mYZevQDNhXcvQ1WJFAh97VqijCa4tE6dWxb9h4YwWvXDt1QiGuPBZs2H5E7iX5SZvd",
  "key15": "3RQ2VpBVZ79kstb1waqrSR2a9Cad3evm54fGZNV17acVvBquj1Uk825M1KeKu9nSwr7d93AeFxvanJCHnU3ZhqZJ",
  "key16": "JCXxRTbvooXLrk9NQUdfaxTbAwjcfLjMtNpU6x9pXeEPmZs99MZnLjqbg722pkZRWVtUPUDxHvAmfSaewUeHxED",
  "key17": "3ex2UM5prucDZme8VJyXg8rvVhj1cQdwo7outf39VVGRpvFtJd3rfCHRdSySjesqBPGhxiBjg4QrngS3r7HyHmK5",
  "key18": "3c8i33pvNGk6FnuznrCJaV41WnzKN2uChVWzXtus4J6ZxoAr21QThMHhBZGoYrgRSDsnSNQd4gMZgHukMpDwwzYv",
  "key19": "2QfGoZZoSMRpMEHdSqmgoPbbCPYKSRzYwJqw6jvZDuL2FGSghNwbfgmU3SMrfvBR4YnRvdQjCnqFar3AV3ZwMKGb",
  "key20": "45a4j48UUGCwTHF9LA8t8D4BdvtetTXAL3DmFb89ucy2ydtZMgE3zXx2aMbVrb8xBDobASdsx8J4HD3PMrZH5eKH",
  "key21": "3BRmQF6h1Njx56NxB9fEw71MLBY8DnqsNuofoR3DZn983snqnv7BXbyLGQvrqBPJa5h672PtRnkLdELfHqCUcXCw",
  "key22": "3dZHP8yLp4DggMxTTvFBB9haLftuAq6USN5d3NxdS88r6zJM8oVHpZjfTdrabET2kc2bWXuUqDtDzxbqXTureYhE",
  "key23": "4bWJ8SfshhidfXhwmSVV3B5wjz651gzRCpawWhRGutri6PCrkXZgVRPGxSTP8Zoy9Rg19zihgtJBuDwLpNDPjAUT",
  "key24": "5NxLMMHSfd4YA4AtZnjpmL8SAmixpmnFMnVLCZk3A9N4zSqsQYQrTzpcPE2LzvtQSWS3rYWqCf1GYP28NuMNvbhs",
  "key25": "4M1yfovbHKFuJNAamMmGuiMqPjwrFJxSPdZazboQR1HhnckWrvMaRYXFnQH3z4373gndrksXAcytLCWQY1s42S8G",
  "key26": "2q6SYRTCYobs99DLYBxUdGpZBjUzbDC5esbqWPgEfiR8rpgXPm6CJ2DcHayrhVC9McMqYG6psgjNxmVyRnzKbHiD",
  "key27": "4MfsT2ZkzTwmjiCiT7C9zJZK3GFPEXrFSCHyY7Hca27KSDbKrKpVkCajm9pPTVnLHr6i3SGFb22nepmWVk9Njzfr",
  "key28": "21viYTWh6uCUPqJXro8RkBuu5X7Vw8CkZfbwK8CdchaPzJNAdMXd3emdr3oNDqTBV6hVvEzwDrBA82WBVbAU7hGo",
  "key29": "3ASduPCzXJmGhhTxg8b7tS63QwazhvR5kJoSjRe216of33pzSkByZDrgQsDuLtBiivAByvnWsKhbBz3BYXV29gMW",
  "key30": "2Lpc3GejuWcwDdNmZ1apLvgJfzW3Y56bsBfqJ5EYkKTZEkRBF3iKoDnvAYvnH8LYpU7fbgSc98utvdaA5EYtJZW2",
  "key31": "BNpsfGNRJRjzEwh4JM7AAD3zRFx6BmAQsAeSRj1dGQXUu1KFPyeN6BqTg4fksk3f89xH6uYNzPPvtdYrQp87Cne",
  "key32": "2f8JDPktwbeuEApy4uwScyVeWPkLqGNu5bhhiSsmzYRswJULfFvi6ukRgzjpXQosJgkWBCjyX5zjxPhHa7Mj2o8d",
  "key33": "kyevUnkrRNMCLD9SYn8HiGDbAYFK12emyPe59nKgHUtBy2dTJHmEib6pq2LhxScHmPaQ7H8RY4jALK9Z2RS5YAe"
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
