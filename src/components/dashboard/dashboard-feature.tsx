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
    "2gupbQht3RFvynheQMUPeZuqum7rZTgPMadQVdWdKGrVAx987PVfLyW97BjwCbAhXBXB6pBZ6Cmm98xdmMR7UQLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxB7WaTPfafpKj23TvHJq6NwQ1v8kDisEp4iPMHkGK5dDsZwZuSsGuBk8Wwj36wVv11DZvdSS9qDon5fLxthnHC",
  "key1": "2uSZYdMC8ydxHuerXGJq6Szvcb85jRK4YgEZyqa1VVGTd6F1DiZkvcFNsxQjfzkeTQo8U6f658KhYn13uHkpWG3K",
  "key2": "72NV5oYE6KqV4veyRRA1ZLgL5c9sMwQ7itxiwEaRm1ptw9cy1AvUUMvWiazNscH4XiEqxNWEWVHBLQww4L19ekA",
  "key3": "24yTMdwh3HPSfjoF42SadgwLRLvZsmBQsaSt6LnDyKhrZ4KE1MYHcKy7Vp9WUkooSEqqkzMu4K6eVAq5wJzsU2xZ",
  "key4": "3gsTgZqdPE3UkaatMkz2UudYqtcHw1kJiVDjiLbiW1F5iUTnXbxRAiDgYG1GJq3NYbxSm2sKPrE9YQ9HUGaRYuWU",
  "key5": "3zhuPFoEfmtrNoXrCx9jzAzGxWSxinkFuBJ2Cesjhj9WRnBcdL84zfRxkEP3qbUVm11FbnvBCzm2xGXpKgFng58p",
  "key6": "4Ega4XNpdnyWboepmuc4HQy14dBdyT1ttUn15ZJ5WgXmV65DPxX2XvkbcUHVPtQ2GucWPYCbpzGDni9wm3GvvWDF",
  "key7": "21qD37SVjFCS1kuVP9L8vVdpqaGaV7wLpw9XsjZPatttBtyX5n1jLedpNdtEescm4bGP6xH5wLXFJYZkjyCU3fnA",
  "key8": "5erDP8eHDPWDNgudE2qWudvRmCdxkFr2cstRMag6qAxUdgD8sNaiHpS1cjTBwENe8xPN6Whq4VbfrXq1sT3ErmNk",
  "key9": "49f8C2fP3hw33PYY5R94gUyUcYyoNQCnkDZ1zuHQJQoyrzwGLxg84H5xeM2CGznR4uTqe2dJH8o4CBffKBxEiGzC",
  "key10": "41kVPUN9vVY6z6aXjNKarry6iByMsu5ZVkgShtR799WQL1kynpt1Z1jkrPt3eAcKwtkkwhfsVcT2GvrDnjXoen3s",
  "key11": "2awMqgPAr9z858awSfyNJWwPKYayzaXWsomsSxiJnCysAbjHqcB7wvH5YiSL1KdJT3XJGdmxQtXGiLvDmMCYFLq9",
  "key12": "3cbrEgzPgrhZpZREBBodubordaCPnrZuzHk5ZX4njckxXKfpD8NfjsxadcWS43mnEi1LMSooLfuHWjmiCtGUaLRE",
  "key13": "5F7NXx79eZLnHGWRttpkCE26oNoJrR9eVRskTS6JzdiqPTYXype8mENZ1gFUKdxhYssSJ5a2HfBvmxxwweLYvHjF",
  "key14": "2gtkiFQBL7Qjy8SoMudKBdLT1bwbcdiwW6bJBu6Rxquvr6bSJtMMDqDRd7oZkAGsGbgU3H2EfuRni5L6YFWjTqXh",
  "key15": "3i5YRcdMcAQa9HLCGGnJ4TvF95BJiLVnFoZmQH3dw8NoM3f8aUz8ELg7sWhdASNMT5KTWs9WFk9XvodvMPENus4y",
  "key16": "3hPygRh5twG3F6Nd1DHtPCRMmGuaC6rKWsmSs3q7tjc4Azhn2heXMdUNr7yMNmGamkrzVjivQLkmDSh6YXwX7PqT",
  "key17": "21Q7jn4csWQi87UmWHH6RAvReGj4ixuhrc1LMrZTbc8dGGhEKvAL93NcyQ8uDroVP1YDc1K8MoFJeM4f7Pjyp4ZH",
  "key18": "4vLYvqx5SqwfBJmF4rig7sqFvFsBaeKHo8ZgW4egPC177UP9MJ5aDh17jWsjwPSB8sxEn7RcSmzwuMsft2qZFCsN",
  "key19": "5TNGjHCQ5AJshYuZpsCX1sBwFpCmtLuJY9cEPt5o8Vb8XXcCqgyEmeg3HKBZ17vU53dipJGkvM61dvHX2S6oTnao",
  "key20": "fNVtsGVKEgZ8o1Gvkjbh5fGddEckXfFoLfS9LoUeV7GWnG6UWwiwNco7vUHJndacXpAvCbxW1NFafiKJctuFJXv",
  "key21": "5TR9LrJ5Khv9SQsGexZXeRfK1qZYUNdVsHgdnH6HxjkPAvTn16ZXtj29rpZ97Vwh5Hj6wWyVeU17DAZMEBNhSyj1",
  "key22": "5Sc2mS3xsnqy4D98JzcBJoqohq67974ics3JtrC3dhqN7fNDbCb5vawdZRTz5cJxu6gbyYyF1CLCQS23u3wnejBf",
  "key23": "CjAscVCWyxNZyRbmNBFdHVY5PYW25GpGdpNwXH3ydtHFkPetEyhZrFZceGjZMTbZdp1sX4p158Y8w4Z32sYzdHc",
  "key24": "5XAY7vjzRVK24xjC7qerFGdi23encBDq3FdbFTzTBvGozYYMcdeh5WSqywx54sTBqtUoM4dAfjGC6oPt5snhcEfN",
  "key25": "2NBhChbuRSdFtdbn2YNa9JuQwKoiMKgHWuByWJvm829QRUxha2m3JAPfpixe9L364d3okAsmq454fnRJsG86L7ib",
  "key26": "3vt5NA7692otb9sUY8wfzSm9XFxREwwBHxXqEBmSqUVZrWLf5BRTrhJar2LfX6J24XbwtyYQWncphFXf9XfQGz2R",
  "key27": "4HV5ya52WkunaZzDhCjFimibUZoAMbqQEQ35ZeuWdGQJ3ULMWTLEnM1ZbT8oNPWvc3UyovRJfbF1v1qMonce4vt7",
  "key28": "3yA8R4djsEYrqgVPsCRfcmTjeddJQqHGZQrwiD3N6w7hF9Hx7zaKNeAYYNymeDNd1MKUSjtPR6Eq8N3vJ5AoHcCk",
  "key29": "3F7Jqh2sec1obWYhoYPumSVwZEgKyHKfqgCYeiZgU6GfJMaqZD5y4NQ6YNjLdfwCLBw7t52Vm9K9YcbDRL9ZjK2F",
  "key30": "5hMmDu2cDLbzWSBQ9wjUJLRhZ3Dis6YNabLTTfZZpoxCPwt6ngJTr5aPTq7dLbBrVx7zCR3Cq3TkS4vrB5haJQ1Q",
  "key31": "2uBureBGTconsYrhULQQAxJ28TJ3Mwx2UqH8dr7FaCF4UfP6aodJwnMCuJn5V5KtD6vWaWqynrpcnP9SXJPZrGNU",
  "key32": "Q28pRZau5hrQtr8bkBuYyKc8LpG4vytFRQuyBmxTmWb4L498Sc3uXbuXMrjk9Qf1dmFjwWU8eocky6XSyMkpx11",
  "key33": "5gAiKWJaBDSDRYPXjZnbT5z16xR6SHaDN5gwvjzy1juEY1qBAZC1uzEpp6T13N42gMXgpSVLLoBYYCQ5LEWRY5Dr"
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
