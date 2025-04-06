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
    "59YbuRFfVjxpHzxp4HKvKd4rvUbko3C2B8esSrxTG1psp9Jc2jTKFt3bN7d6fq6RoJXc8xLAy6ppEW5cm8VFzV1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdJsmu66KtKcwLzjmkSbamgyH6vUczoAz5Tqx7fdSuTr99GJz3jhfZckZ4bUKq9nDQ7hemDBmgXkWbV4bv5F5Hx",
  "key1": "5ePSw5Yn3Ht3JzwGhdsPmExdy1R2eDCpkXMaotqwXo5QnyHsj9fyNsGLxmBtdNbQcqgCATkYhPTGzNKxSJcvQH6J",
  "key2": "4Ct4Gb3Fi5dUUABJsxgBXtdaeo3VGv5wSKqNoD76urzfAJMD3vu9xZpGk8vRHAh1ecLnQKqib3DXtBpk33DzF8kv",
  "key3": "2DxKmaseZsz8WfuX5Yjtf3wJ3xRse13A5ztxxfgjUSXYLsHQuWnrJazGMu5gvprLdih52ByLZDLcX2Qhnbyed7x5",
  "key4": "3KbGUbcvZa5mUJVresyBmf8rMyz9ZGefXHDhvLgBrERmw9qc4JreTHZCiXBDk8JHxNikf7Qw1bTZqkvcoRKF4qEd",
  "key5": "LSKJ9duzsEFPqq83GSy1hSfrQDSLvwSmdQF5ijdG8c1d3evXspT27cfLyYvjw5BANhhBAcGTQSPQdQZ7YSmoeRj",
  "key6": "57CcXeyueQfwpzPTdM2c7XfcEriydJMQeMMx2EskmyqCuGu2bof1dVaZ1RPs1XqKnTMZXBmqqSdtLbgsQVdQHK4M",
  "key7": "36nCic2AtngaDLSdFGusgHXaybPHkotmVHPn3JA3EoStWfLCn3C34U2b8u1hCza4VvEVJQdYKf1kG4ShMhsmXuxy",
  "key8": "28gMq7KQX74bjsv8znFFeMcKqNWTqTQMgxx5ZDJRJCWejYsUKkEBHKvBdemChwP3PWm34TDYk2Rz6oa6gnRYpGSK",
  "key9": "5evxaTHApaRNYgLGjBwJY9KSndft6HfPvgCGv2jPhDtrdAM5yssyGE8zH9XQBdAY86Y5qWkmvToRNdG8cQ92e7nZ",
  "key10": "2KT9vDChmp5VU7sscVc69yz3gGnBM4gT1LfEfhBFGeMg8SmJYnxsWAeT1XxGZzPFqAS2Ga4KxYAC5FUnHMvqxhvy",
  "key11": "2kFcMb78jjkRXniWNiDgCrX4fm8yENvf5ZXu3yDeWG5uHzEDfKSs32S9jBPbREyMDMhZGyMRSkyV96iabW9ssNgK",
  "key12": "8tUw4P8VPearhRpD45t1QXpLZrXkRKgvoDrHq1w7Ga9jRJ2JrdAfAS3xBCRrWiyT1xiRJxpSe1LDGSdQZiB2jKG",
  "key13": "2b4MhhK3rDNGAzPawXJcUtAVSGNEt2rqdXMfti3y6MeBRYWwXqsuWx1Rn419SuKci5NcFGeLGRa3rTqt5yWNjt4q",
  "key14": "4mRgqwVCERBatvJ43S378NQqFcuy6Ft35fchxut2Pu68i3TAj9NYhJkswvtnw43s531WJavCAy9CXULvBdUAuNW5",
  "key15": "SjLBVLqvkkN8tXBLHJcKubFpvraznZjVbm5J5fnR9muzeBit5JJJ1isfy8yNzFxp1z2RbvZ25MjgeEenRrVDSHw",
  "key16": "4xYvYwJCoFBTzM9Hp2kvrYozj6q11jC24eqLqX2FN75W39pZDj37nEBuZ53Y7WhEUW3Su9TKzLghAWftsz5Qsuu5",
  "key17": "5NNv9LccfsZiNNebjqFYfYVNVzRxczAVn8F8yjv74zTQqBWmn2sJRv1QT1awGJC2CCNR42uTqPWVxJdZcCiHqKJq",
  "key18": "3GGKcHqNhp84zkifyFcZAzAHfTf5DjpFrB4JJtdX4EYHfWhZtXvbVFiX59JXTGPM5gH9r84JGL7prDkou9R3wcyM",
  "key19": "4D85rsHjVoifNCRbEk4oUTxnQWUgBmGhoiCHzLsi3zZyPDoj9UJhm3XyLQgBFV4TTTZJE83X2JxYCMvahgJEPtDa",
  "key20": "4k3PXHL18Ha5zJY3ZsmMqpNKesNUfVhDa5g7HdbUC4mrEayraCuaEVL5PRCDM4KXScjjqqmbA3LW3conB5PGrZEm",
  "key21": "58SnnD6DR3XPxaYFpnjxcJ8pqvTKcSdbvtAzz6fLo7xs6dDEUqmVKUfsLfpra1AameCPRqCd4yf499NV73FvcTqy",
  "key22": "63wnGBKLDyVuqz8zMSVnEJsm4mtPknt2NGFQkW9s9amDZ7dFaEm8grKKm5sonvqU1DYKEbzCAefvZcALbZhHmvLP",
  "key23": "3qDSnZnPEhppWPBwxQNzZUD1TbtrZjGcDcacXWQtUxSBhHeyZH1c5nUgwk5pfQ2XyPsNLzU816VvVjNYCuxLiurA",
  "key24": "Hg4Skf5TwqenBcyEbN6WwsLrwjAsZ94th3uonBzTScXGqNQRDpACmQrvFToRDbCHeXg4EqUvB9ZQwWVhQQMmy47",
  "key25": "2GmRdt1LfUY3VmiYymBr6Gfc8XE2U8fi9KrxDn9PcV6UuSRQvRLqpTRtpFZprkQqyHhfANHpgB4mm2LiyMuRg5F4",
  "key26": "goWnetgjvBMPp9EmK8iKeDkdHQA5pgFRQK9kow2haRHVMUa128Pb5F8TbfjewtYDQWgnTjEj9iYH6EskHHFVZrm",
  "key27": "4C8oNdUNmZYsGK4L7oFoFmfF2emvF6b19aWAJrabvCExNR9hgi6dJAYjaNEF6P7Pv8fGK6WAhEa4VL7xge7FcmaS",
  "key28": "FUH7M1w6N9Lf9xVN5x7he7p6Tn3Urj2fHExMfzkwhT5QLX6RryJmdxtEEJmyv4hKH7zRjp19kdWUUvJiDi1pWRa",
  "key29": "rXkAktLpAZSzafGrg57rq6DupX9Uq7BXobERvnoT3SNceifyZmFdwq6P9swohMboSfFmyMGtf7C4XeymCunDeia",
  "key30": "3ARnJpd22eUmdTw9YB4VicXiDvCLmsCBCvgvEZjZRiLzHi1VPRkB28WhDjxApcCKtkVFEM5jJM3Zyoc95sAoTVUj",
  "key31": "5N3gE7bjRZr3EvdFLcZwxgXX7qyv4VNqA2XJnMF4bUDj7xE5QutJttx4pUK28r1RRJ5JcagMe11bwZCLUNDzASXa",
  "key32": "4ND4kRT7LJYTYgcD8ZYDFvWiPv1NYUsbiFSkZxYkFbaFVNjzidurFohNkQNQSui3ERSKbToKwVBBQmJqF93q1m2G",
  "key33": "37fSeGqTA4v37PRP252MxHnowT9rUB988QRjU79grhDzcNW1adrqgjdcfzQt8VrA8vzyeDxuTGHQgK4pGPMEBQ68",
  "key34": "5afixtT2BWeSPLj1M6s928n4ivrnFkQqpHP7urJVSsbSz5rcNSw5Bf7p6Pj6obSvp1YXLVUe2YhDfDSU7ksxa7pR"
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
