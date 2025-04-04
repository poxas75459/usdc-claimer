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
    "Awb72vreNjdudBBynS1PdJd4n7eVBcFSYmUw1quJPCyhZpc3HVkWfr2kJrDf5VRdwTqRPXeZw8pt9onLtyDYAgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34st6k5HovkqSeRaVDc9e96BnjZfgWE3WzXvNr1d2r91MKwMrLkiUZEoAKtNJPgfJYe9apWGePNqauQpedWa5YSf",
  "key1": "2XTTv6fffiBE2NTNSpqVoiH5G4KeZ2LMXUcK82oW6oQWs1PipRssNBT3Dei2DiJchQee5F4qxLqatezo5tGh5Qqe",
  "key2": "5Xux8Lcu8Vtj3F44cQCJiBoXxU47BRwt7pquTvXCNFANMNF4x8ufCdWohTZ9H65R6MuCWiGEewcsHSSfiP68sSpY",
  "key3": "4HU41aRJczWVhmqx52a8RYJmLT2yxremEwBY4PF4W831MtCKWkBcpP1WdzFi4o1Rr8TAvudrd2xJyxhqBvM6tmDz",
  "key4": "4amuMVmxM3UrfBKNJFTWCXGw8cr5ktaufwhwtuNHMyrD1NSbVQU8M8yMQ22mS1cw1FpV3cB6LvjUV8neKJiXg3ps",
  "key5": "NjJtmm3XX1ATY58M3DYFk9evsEXBSgxT8VpxMHQBLFvUEa986D9mpsXBYzkW4qQmrfWuvURVquXA4P5GQ9Jrv2E",
  "key6": "44gLVo1QWaSXoiLobBuQVqygVZjY12VUgBUMXBhnEZYMk1B37yD1m9AkfJVZTLuuKBSmYmaFGbHYJ4iEGHFy88xX",
  "key7": "4c2frd1hAAmBJg14FDTdMRcRmrmCKywVdA1KbqHAS79PUxyUtTywhbaf3M5cQ55DQvYLYSCjX9eQ6pDuuqeyVqst",
  "key8": "4aCgFkVA2aRrhiwwFdjYS25saYxjeoYufx794KR2K6rMdYhZ8f8hPukexJJVVu8GBv8ZmPJ5gYyH4bHwHXJvwCES",
  "key9": "2rnfEZxaZU3siYUFtR8fom8nMjkga4JgwWDwqx3XUiuqG3uuFbi1ZnPrmNcSTxCuUVZiAmnXmyvmZKWvNfkDcWSK",
  "key10": "3jzKBpj2uDtBbLtaCegBq58bKrVNqy7kvs52cRLM6fvAddDgNq9pjkmWFZguXLcBZ5iYaUPkdGWJx15yMPZButiu",
  "key11": "2vBB8mKrFf85qxcbKCpRzwysi5cutCWnv2Cz3bXAcfF3SJZPUjDm2tc7Z8Hs5kCWxBn4jnZXTB9infJKmokGRSL9",
  "key12": "xtUiNUMyAw5xsygYwW7fYv4Ee6mF7uczFveQ9Nm9ytzpqJi3ThFpfSVjdGfa7pzRYXVU7pdM62sRvD8NEMu88Ca",
  "key13": "mYLUXXqKatETCtr7NNjoSr4UcmrEk42rHcoP7KqH3wMrSKXnnQcqHMZkfzyWukBsMRPMVxzK3WQQCkwhMmBQR33",
  "key14": "4jxtj58x2uAKrUvCLKcAwiFGpAVtqAGKoz1HE3Vjoco3XVrNkKJGBQVp7yo6MLhrsF2ZSWcEbeBJJP7kQrhYtFMh",
  "key15": "5eyjbq3sDgpG5xjZfB17wqZH6bXa6qqum9JtZa4VkBL4yS1Yh6H27GWVetBKwziNraKBSwReKoo7LaFSFatt2Cm",
  "key16": "2MkKm7qdH96isXa5FMtU3P6KNQkd2A21RF3kZRb7L7LZfqv3McUBPFy3TS71cgS3mpKAN1qcqixwoGeJcKVzpLHb",
  "key17": "QBgBq3R8HPmUSRT5FXFTYzJcaz1d9aTtKkF5JUV99ueeb8LPYVJsQWvrMrSEnxkDenr7qrSXTR6Rwdnqiqd2G1r",
  "key18": "2N7TjfK3XaweLi8iRs1pi2GwijEj9o9TeEfcUAUHsB3TuWwmc7nUV1mPgKVn7TwHYKqzp6FoxsnVU2uYtGYECt5J",
  "key19": "58GWRcz2B4kDzoM288hZvFuMzKEiZGfEdyWoMc7w9vQ3AReG2cAd2j86TYqCs16rJMQEe6FLwS5wqUq7ax9b4kdd",
  "key20": "pB44MroYvghG4ibGsHCGFPv42bh3r89ayJVY3qFBGvxP1AYHurte58UK956gL8fJDyx8MZJdiJHPDTfSmhrLbvF",
  "key21": "7jLjAKUu2Z2Wv1vrndykpZykNtr68erSyjVpETAvCJS3nutwMyt1CNbJHzpeDjYJ6YajUB8kKSYDiN4VK1jvXdh",
  "key22": "5WSQQ5Fj7X4VLc3Z2GVt59bWqvUJLDnQR3Yfc152H3eWK6H95KeMpx6QzCCeGZHo5HjzjcAY14W9K2q1WJ54CbbA",
  "key23": "3zYACjPk7PHRohaUmTmbpVno2RT6ZQ4DsqJ8o8qGqm2HeajfVsBYYnvk1wAfebc8MHpkuMSAvvVRSM12BzxiY7gB",
  "key24": "3DUL5q7jrqV9dGRu5r99DRdy3rhq86yV4wPQUesArynWUBgcpMuQYT3qHvx3fcXryTJaQGaoLPYozrzDNputdJh9",
  "key25": "4bxJitwaaGKoHnXnSqoP8x5sxXWmwQzmCpaSHD3rxQSPgeZPhXRssmYEEjQPCRXbSGtn7nfHHHNWbbLT2YbB6W1T",
  "key26": "4r7yo6DEAFxY8wLYpcpDGFJQjzFNqrWE4VR7twDHLVxBHZRAuWGyNzCnavYwEBvGwc8LsTVfFSEV2LXhQaV1mtcZ",
  "key27": "53ECFpqfaqT1G6pdsXyuVj6pTCakjFZLb2hZpugTq7MzD441E1tnGpi8CbZwgJCt1wzEq2fzJEEftfAXhoeAcwp5",
  "key28": "4Su6cBrvTVYHUFcyBnu3EK2yCaJ8kaqDqydr2swadsxHShnwTdLx4K45D5PJckHTPGKf3jvGCdAi8mruLHUM6VLC",
  "key29": "7KA2aTwydGjpGWGtc5zDHnkVbBBgiQadJtFvKHCD2GHBKW6kL6fA2T8xDpMQrWXU38TZdsF1zU1B6yFThAzzxeX",
  "key30": "gJh3LSKFXex3tD3LGGuJXgzgkVXuct8fZLnqyj5SjxgjbZqKP1QsKSAasfkLa7ZnCUm43TJKK8iKuStnezFZDUz",
  "key31": "4BaEs7ykaE2Kp8scPF1tAL39uU8YQcP1iZV2V9sjmFouFE55yCfZWkiPKmwBLTVEEdC3maod1St596vhHNp3AU4L",
  "key32": "5fm4oKJgeHwmBvxT4su6bJrUL7xwdbooAk2AM59rEPFqJXYzdMB9CW46bHXWvc2Gph1uGgSEStRmQGj8UbC5mWfW",
  "key33": "bdgJyMih1caZCQabeXwEZukajEDw8n2ZM7Kf72DGoK9NJ2y3NDrTuQX7SRE7i1Y6ftsyYLvnsndK5wTvDHxfCMZ",
  "key34": "Yk6y1ZE6YS9gdxE5JhL9snrZoXdVT5BvfybgBzj5sxRqs7Jdhy6mbcWghwdvXPdrdvfMtTcD8m84WSVyk5u9Aop",
  "key35": "4SAv7aA6vfGzQbYYp9vCnmdqzpKWBSKvKyVBCHkhHzZeQygwipimW57iFYKeVBn1jkJhpaq9hZ383S1zDTTGtqMi",
  "key36": "58SMZa87mFRVKM8bgv98Th9zEUBB4WjkvmMwK8DT6ACV2Y6dPt18AMpinT2fNeGtMemBousgJTtVuZCD7gqpGC9V",
  "key37": "3s6cAiPWcLLBsdQUWAEfZ5LzTNcD2wGneNCKZvgRZg9MeL2NrsRYV7BAZX62nfEAhwK4D2zXAndzANMA7hyaskoj",
  "key38": "2aHY1BWrVuXx8dMsWJYfgmFfpYwWJSpnTGvWqDC38dvf3nZrd9qf2ESzz8Z3Ga3VMmLk59gEXSXfMFqkiqtRQxDa",
  "key39": "5XzpNAtojLZhVVtZkmtG1rHK2mpqFZftyT6dYbRQZ2j8rVhijJoDkGk8o4f2yHwPQyfJHzjG2kSEWLhXeuE6eheC",
  "key40": "3WUatAhFJ6QhHuqPn7q6rFuuq3putuiKRsrscE5dVDv6cexX25Ns2whBQAeEYdRSEdXyTtAB9VVGmhYeUcKBwAHm",
  "key41": "uCQyPXWZ2zsVVSYBopkdSPYDKJL8z4XidrsDX1mS4gcDg7QCC7LwvJFGVm8szGpicNHQtSj7EzzLkUTrqhRHJa2",
  "key42": "cG2tef1qLHWiDxh55PmUeyLRDfGk6psF76A3dzfRFic2Epb9zsMcn3Q8JFnv268ybUxMdckQxKN5gS5yozFzLEb",
  "key43": "4UrPVPkbZUS1mMZsM4xqEoPHYr6FaBZUvBwjap9wY6pt4wksRPaWGebxbuYBCjuBwzu1HwUyMBLKQBa5Ebf8wvAb",
  "key44": "44WjSk9hmfWipogkJxXxLG6z91ZJopLKpdGy4voMXRo37ffJFYfpiXahZES9V5zCUkwchJaGhaXwyTkUTybXMfAn",
  "key45": "5FmhUbHB567n1ifKJMUDFLdx2DAoeanAzrCcLHqCJ9S2ouQbXpNx2MY4JheqW9Z16KgE2ZcKZ6TPks9DB5FGp3Cm",
  "key46": "2DLPfjNR9c9LKcerz5FV3txMxQyvNW8oxxtN1FMvJLjJpWPqC8Ji136pRQp1kRLVqp1hJbvgSVNLVKUQzZCDrbZp",
  "key47": "2HJaLjrqz3jyMXimcg4aA73Y2uxq8XWnzBiLi881EGHiDWBDMGLdfmFKqWpyzLfx1HTJFzh7XCKdCLUdny6vyWGT"
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
