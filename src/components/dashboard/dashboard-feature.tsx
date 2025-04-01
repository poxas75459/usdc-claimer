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
    "63XxzbeZr2ZAU7XT7EygkA1onA2aAQFDcugkPEWP4qUA2meJ9yzLKCrqxzrQsr1jLBc6HrDtQ6gVPL17WsD117uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M8Rrxq81vwVFgLWDRJtExfqRZSwLLbEHaYbS91YrqKLDUxrZPtecfrqHWNjyTNm1SzmvmLvnVBZWwDUxd66xKS7",
  "key1": "4MQcEL3pFc8xX9EBLU8kWgcCWP6M1VDE8vQzhmsugFb3UH6mb6AY2orfNdxU11Eo2nN9zCUaU4N5NBbLhTY4iAJH",
  "key2": "33kcLL5qhXFKMkEYd2AWAHWwMTh496qV8kXuFbqZHjCABUZudrh87VEAcMZt1hRiPtL6gWyJ9Gb8pLkiLUheS7GA",
  "key3": "47CLcwCwH3yTexueLLEH7gtay7162Uzf2paeBd46CM3KVRz8PCzx2WFqe6Le6Xuyi2YQoeAVHorxwnZYwcUN2qoH",
  "key4": "MvqJAN7uTP3KpT4qHotZeAt7BsiLg2hPjptovd81kNqZaXcCLX45zJc536dATjdeURSVYakKjM3L67mRHugPKjY",
  "key5": "2LEQj1JwLGNXWv73sBxPv66ukxR4XnhEnqrJs5iyTZMwk5A7iPw33QRPPvqZ35KP8DGLzTeQCyo8drWyBNVVZB43",
  "key6": "3drHszDoFCHbptp3cSdrbmJXSyGSJjBY7TmGAtb8AmeKnm4qKgMkGwZHYg41qFinUAz4WgWhNnWFD6aa9n7tWPLq",
  "key7": "iysZ7cqN5dN8HnhzD63VW3E65dxhZDaXUb6rYaB7LSQoduEYrmdY15G44YqnTYWwUL9xt9wTy8REZ33SkUVUxRa",
  "key8": "5zoC3kKqgPvQ2uLfnP5i5dLsmMomuPVa235QwZt9bkYfWaT7mRcZngZ3K8ttcVESru8voCb6CJamM5R11yKtLXRt",
  "key9": "5TmWH37G7aq4cHDSQrAywmb1pUPkdarSJ7rFceN8BQQL1yrXjSFjURnEoz1vr1wPKjZMmgFHznqKJ5RB5fR23wYE",
  "key10": "NUbJfC3NxZBT9ce882U73uaenVrWtC9V8JigwQMBWntDdb2kZS6pSfNkpnuCJsbtnLJNiFQcz17hbKghEGpEVpm",
  "key11": "1244PTtg9cWvhmAv1H63Up9gNyGRhxgdgVfbea2daPfForeXmJoHozg6xA1YaPUQDxvef8pBgy4d9pziosEmZeCn",
  "key12": "46a4x9r6SwJt99Mb7iRYmTv7YVQdJ9gzpf2uQAYKZzhg7sepHuDPvJX7uLBnyNeURkjLGadwi8Dz6c6ZzFUwSpgt",
  "key13": "5H7eLCCefJuRjsPhTLUkDP5krkXz2hH1wqTvxYZTEqp7MPMvcFFZn5tyPZA4UVLWkJXP14UNv46iMEgGpmnUaaMm",
  "key14": "5DbdQvt3jTsAFWpL3FiDQnnscBEiU5yYW3WNs9X6zgspF8N7b5dVDBkR8D4hAwhwgRDAXxvQ1nDz2ZUy1LcqovZS",
  "key15": "CgqpkAZzcbySDVVEiidHm2iUYgHfFYoNKfA3e9tFsPe5ugLdzi7MTUnz4qs7X6LjgBP9MKetxX52hhxXsVHCWyq",
  "key16": "5hFHqLD3Z4wpWJ2nguuAuX42nfDnJeZm1rTuzHnTNTRsA6gsbFZzSKsQUcDknGRzU5C8PxCUnvVKFYdwSkUn7dTK",
  "key17": "reJHqw1kmJm5qcCbwuHz7YCQypE3tfVg5XPw5nMvRKWMcANo6DHCCLpVnLfWqLViecV3ETwaNY2rj3ABLo8bW16",
  "key18": "5i1uzPJx9tZm68tAswefBR2sQSenZZPu3iBZq2phBFcNzdbqiQ52yM3FHQbEsEzvBFrmFCV56W4r7DGozU1fjTpr",
  "key19": "4kjEuQ14r77gePYpi1YvrgnHAVsbL7axQF7VPFJoGLceKc7j3iezEn4VjWMe6AToQLnrJNqwTxXFCSMRS1MLVbki",
  "key20": "5rj5HPpBD8kyecEFEdJmH6VBQU83Jm5WPsHLZrfbsJFF9v3MuRAXkLgcg8FsbcZTWUD9pKSQyKMA4tg2k74ZJJsq",
  "key21": "3QmyasSfQqfbqQjp5BskumPMTudGZWzauqC8LhJZjYW1qPXt1hooTguNarLDN1Dg7kPi5sHRViPPpTpTj9rN86CH",
  "key22": "2X43kdUzCwWs2aACuyof8zuGrpVfGstYBCtcR2HGi6f8dSUDkc2G7xzweiQWP8dVzuMgBY9XBjyv4Rj2WPTPCzb2",
  "key23": "CXxdXjAPhnmwgQeEvMjsrurKXg1aADKedUcca1Z49j2mPjVcTbcpCM7VCuAPHv7Mk5GY1gCac26zsys8tea4uQh",
  "key24": "2Do4nqfh2d1uwT96z4yENcDpVWaGjmJ5hJcW2cwkdJLtinsj1VbqWhWzuYBRuCyxmqRC6nzojcozMRtHdVbB4jYK",
  "key25": "MskYD5TzkjxEyRSB8vrkneSqEJrmXxFFFQZxaFDdDpagmFquehErseQR4yBidn8sEv9z9xGPU6vgJSb5wCBQSkc",
  "key26": "NR1vKzJMKxNyW29JJ9ZQXAe7VSvX1mvdJgN4AQNjvXiAmPgGbsFvwTTqxRwxw7BtqsTQ8FvoNAW8TXDcsEjhL9m",
  "key27": "3Kds1uYmei3iCu2E22HcqCCrSfirb9FT3KnSaDDGatjLFjYATVrN2kzxnPfdkJkFurCMLiATsnxPQAKiNRLdQVwm",
  "key28": "3PEmxwpnsjjZa4ghF4KaHDzo9L3nCVLFmbAVzccfdUAjqooYcTvPHLUWX7ABPnz2JDSHdKyERbz5mig6ZaoAKs4L",
  "key29": "4uZJaKpj126Njm2Hy6JtqoPEGxVuNUq9WFwGz1CQLDxTcNaF257xUPxuKUxWggsy3u9iAMzwFoscWhqzajPKjEEB",
  "key30": "4zyJZhSXN3WrzcGTYMjdNJdbk2xN3aTnz2g2Knxckc2iKgdzo4Qj5Y4GSmFWLKnTHbK7cHeohVe1k8wzVj5ZAuKC",
  "key31": "5LfpVejADnz2NCrtaN4TdwtCDE96NvBkiSb2XjXBoPWVFAj1GdKyTcSAzeUTPLXNtCPKefWwwUbeqNLfiwVoNjAF",
  "key32": "3SEfHyjkoZQvRbLLst4abKRqcyDQrfLAYqzDJQ9nVUHGspYHtXedp5FHYjEJz2dGNk79yrhWjVK8oN3GqeoEnD5W",
  "key33": "3jaF45qE5Kgtz4WyAhfnzsu16BnUbiunX6RqeBPze5b5CebiQG1Uc5w5r8jpEwqb1NBYqznwGuzK7iMrYgSG4Azk",
  "key34": "2EGPFc8Gv3CFDjMUNUoRr2j8GzH5PANgjmCWkJfSiujbYodJwgtqResa47LVhuGMBcmcv82njepHsjoywgZ5Kmqv",
  "key35": "4fxwu4GrEGZCHyEVkipmiwYPkxuFYVAtr3KtMNCUVRSwcuv6i1CJmLMAAEBFWoXAXKcY4zoDzCTfWHLGdTXorkPe",
  "key36": "57o9QXKueAN7hZymuguCZtcfB8WmPBz54DCgSmvKYNxHJZz2KWN3wQcgdP7nFe8mz98G6Pb9V8epQU8LMk3JrPAG",
  "key37": "4XvgeQR4TK7sS5KgT7nj3fnq2eEdVvpQZpzUH98CSWsWBVtj9uMJhgsnKBNvfz4SX6ZL43U6Fx3zQD1SkfSCk1Hb",
  "key38": "53LdfJNV4RKp6nuxPCLfPXopyyacKKxsLk3CPeaAdkjmN6L3ZqYzG1ePKvZvGNU5Tuj7GQpuSVx98eztADztFkjV",
  "key39": "2BcdmeqnGAP1AiDYT9kTFE4SDTLMeKM95BUveMbFwc8FWVmxzWKisRSzB1qkwKRgJj3cujamQvp2QNLgcDtA4wxT",
  "key40": "5MYhPZMBxipXZNhoSJdWJV2t7Fk8tQmwRGDGnHpaDy8zCL4CiMrqVY9JphktohJb3GiBdpg287oWMbQ64TXjdEk9",
  "key41": "3WAU5oKtJBFe3kzAiaCvXkae2DJ98uM4u54XDx3qQ1zyhrXXFhVFdiQ9WhnnTNu7WNHS174vYmeMQQR6rKtyQwSe"
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
