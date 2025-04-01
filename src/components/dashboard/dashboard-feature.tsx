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
    "3hwD6L9SPyZuFz4H5qNiw6kRW5xChDDnFmZEcpzhKvKQwM82apUoEb16DUtRbmLQFWidaxDkii8pPXqVZd4bM1eB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44DqJLzyrFrFdmL7YKvE66k87dKPdgGfQDw5mKhghN8cngrrKwbcvwGuBsfVKwJ86ffo6oUfBfxwR8jarDaDsQb1",
  "key1": "3MQqgVthi62xresTrswT5TyrDocqR5vsJFrqfkvUyecFvfyNmoKL6HYJt3ZNtfWRvwrMwg2mVQhgXJhzPfpR34QZ",
  "key2": "jY1gfyUZ5PqkCatNeDxCJ1hNLFy4WFgVAMx3gM6wSntJKYUk322X8ZbHPE3iwzFmq2RSikhEefMsu5ef3iYpE34",
  "key3": "doBaaGwXbjUiY5rySAr8hNDZ29Ve3JCVS3nEr7A2uah163a75ZWDiVcjikzRxLamgSMmKFQahhgEWYsqnaDW39s",
  "key4": "25zwaeZpEra6KnMCKowVsVP32fHr87WHwBGLGFTSCQMtxc3yxveXq2Byeuy7XjX1gWdQaBUw3eH4AX39QR7NpaG1",
  "key5": "45EWr88Kn7icqWATT3jiYRLBZoWj6S12zD1NnfGF2VHNvtRa9bEdzhr28m9keCzVdyaMyfppaJHNKfKxoPZdGLJt",
  "key6": "3GrQc5DyTW86sNzibt5TBeuFgQEnyLGXUupSE96FFRZskhjYJrhfQ6bF9CQwrx2WvFdEifcChEddBdnKSe1h6jaH",
  "key7": "2DVdBsc9DgMhRxXckLUd7JNQzPqqtDpxsykBK3C1taqjYWPXUcuzGUYHNH3eXLTbENn1g4ibu6rt7SYZyJwWbGKd",
  "key8": "434Pm8Q1ppqCKv5v6PTJU5KnQw4F7B31U25kKCBmnmgcDrHb7SSSaqVp8guxCot87wSZ2MsSYGAFLgZQrhGKB4vV",
  "key9": "2vHDMQw6mLrM8FBAQ9FTH2nQKt6ZrY2LuXJX9KyG9BypKNxF8nep4udBRB4frTx5bf6Gzo8yAhgQyBXLJtzHgacJ",
  "key10": "4bnamjeVGePo9xVgpAa6LskvfDQiRMbvXLdP48NEFXEPCqewLKvdWzZxKkeDDg8seR7f6AHyZHcfx9MAs1DAnN7v",
  "key11": "378xnpZEqJFppXhH2Nmn7Gz8ikx3TA322pKTtRv3TJTFtQx6bj9adHcPDs2PSio1noZfp9A5gXuy5eHob9E7VsRF",
  "key12": "3zscgZRDDs8hvTbNPTmi5JBrTFo3j19RqT86tKj2phjuFKNRWw3ehRS1fkc1KFKo82y3ndVhEneie4ox7qW8iTRr",
  "key13": "5V5sZgyjqoEV3qdTkMdidpL8iU2gUEyxCeh8udsMXRCzYbiFgHSaXVDMgsM9we92Jp4Xoxqdcyoca5iGGdjLE68b",
  "key14": "4t6Wn2jMHXsAGkCFscC9zmvWvpsk2rZRbFXFrWJG6pdEzmmSPt81SGgx3CVPhhitXDrwyjf6hs5Qf9Z12L9CsJmr",
  "key15": "2i6p6M6v26RfyUmbrGSXwwbkkqmXXDeJSiwUChmHkYHUb7UvSikDyDc8eGDiyynxMvd9yn3E6yadcyqrFcx2aNvi",
  "key16": "4gc1ReVEYRePVDSqwZcxkjt4JyUxDTmqsEo4Uwiy85KFmAinopLWDf7kZsP4mLwYfK5XEjxJyDi3dPRgPwHZe1Jn",
  "key17": "33EtUBPqErduvgYuQjGUfQN8cHU4VkBPz9sTDsc89KU272hRd2qvx1sE5eMkhtkCFmhEUeDmTp963JsseMLqugCF",
  "key18": "5UnzbfDMdEfxGL6cocKv9ZkR8bGmnDHDgKjEojAk7UBTuhgsvywEx287pa48zXM7uqGKV4fVaM25rtniM9frYN2K",
  "key19": "2jQxUdN9jwL6f1nTpdeHyBGXjwVXz3RHmxWuWjrEq4aq6KDkcE2dgoFLoHDUYA7dfTHQyQmnGJ9YCsU7PbKLehTZ",
  "key20": "ugPQBBT2urt4rnTE4fqr81r2a2QJ9FTFoqwyRFM2BhFekvLRMuE3SB6GfJQKTeRwZ2zEvzMFtn1oKKWVRu8FRQF",
  "key21": "7K71gSyrRRtLEorjDvqox9V56qLNTYMiFC9Ei3pgaa5mFusuT7aekMfRFGzzBUL121CNa6NmfyApmW82zuJXMz3",
  "key22": "4Gg5yMfJMcC5qmr1rVUgDiz3TDVC3t3Bd8CxkLkSDu852psiaTGrb2Mgfh4NCHgNtoTmVBwpAPCkbDJKLs941kds",
  "key23": "2XDTDKVYAeZdeM4knHkXir8taqb4GVNRGYJhnGcvq45UdJcFMqsqWZnsu2phejffL3TKsdvZRsCDGBpRaizeSEDg",
  "key24": "5h8smY43aX3o7KQpAW1gKFM2A9Gpv1LH8EmCh3fsmE3pbHMm1U8stBees2NF3qyB38wmngpTDdPexb6opuKWsJ9s",
  "key25": "XmCuqbsessjnsoqWA554PeKRP8oGD9LkRzxE3LV2JwfydZc4QdqGcHPiuB3ZNjUWSpLeUd314MRHJkA89rwvs4r",
  "key26": "3XDqnBpVSQrnnoBiwXA2LXURraCfTLrpkYKWGaUdVT27ur37aR5poY45GFaNveu9cd8ZE9CQnWPNXDyKvLYUFWjg",
  "key27": "3pi7tmLv8MUsSWpD7r75gXAudeFA8ujbc5kdcHJUK1zDCKuG3oAfAR2Ac5sM4axDSeUFsEcw9BeoZTbmBvXeWe2f",
  "key28": "4iCh6z7zsECquy2ERnafAzWwyoXCVNUKe4rt4G6Rde5PxG4dthhYg3PJfNsJp2RT8KFdfpqPV3LHK2jFaqwNHJVU",
  "key29": "3Mzgj3rUuBXRf9JjjR8xsJp7GkNB5aM5qPexBMiNMw3Uj2m3XoSvEYg8CZJf134QyKZv6hoNVH99Af6wSLGSp55G",
  "key30": "24dDV6Vfx1UubDQHEf38LvLZevZBAVXGmRoc9jzt8sM5uPw9wqfF7wqmJRiUgZipALJi7o5CC3uFcxuU1pVcw75b",
  "key31": "4X3ZGjGtN8DzyX86WhxWewZmYSLamQ4y6rsxu242Bb3KU7xDiDswpeEEhcQhqr6gwrfMDczpeFtnMfSTzvyLsjeR",
  "key32": "2VEqiNkuQPmCYi91i3VV83fWwJS8pMYEa68QSZVYU5UK5gNYq9nGQpvNrbYwF8GvamKYDBZ9GyPFFpvBdbvJdAGh",
  "key33": "5Jc7k2bYq4TCUTdnna2iyc3BkkDeUkwLfPZDp2Buscr5YrsZe1AQCUBLcNu18CEBYyJuPKLdbFpHH6wE2fQVzCCX",
  "key34": "BBLFf2AnhLvYFU7QQj1CVqJginvNowZCPm8vh4GH5Ju3kABKmrRUS2x9qZnkxWXFLaGroA7r9uPC6VSyfNtt5f2",
  "key35": "4jHJi8AheL7L1pdMvgdvLank3XphN1cgYjNoxsqZgXoxE4XihvZ8GVkLx2jp6jD7EivM2GpGJcMseBsRHuo1fjjM",
  "key36": "MJiVEkC6MvB8td621b7L2AgHSP6eFLMHyDtxPvSNT6tJt9xWnD98UcEbgCfHT3wLdv5WwsGdZiBmiYNm8mjNtbZ",
  "key37": "4QoKZtxF3Ki9WRMT7vj7D5dZFGe8VBWMo2xSGLKZVRxgMJdGfechQXhyxhS8RNU2XazYhmZ94aEFYttmhs76X3Aa",
  "key38": "4Ni4ivyHWWVSc61qZYCmvmGkekriz5rzDw9sS7Y1aAhPBQuBXpxNDrvwZPrNNs7GkiHf3AuSmcVrj8a6cHGRrtdb",
  "key39": "5CTKnCRSfuBN5KKimLg5fzcu38yEjDTFiKhgpdj63Pf4pmadTCznUeZLscSZMxR55YyV2WhKMjgRSHP1ftNMZBUi",
  "key40": "5BLDU5BQ2XbdnCBZRQ5dpj4PGXfpMYs4R1NQAjnfH1UjKzXas6CgbjemwX8VkYxvJiZ1hzSzoSGTjirZNkNuuoYV",
  "key41": "5dhymNAjYxuSefZZz6Whn1XhKCogErA17PpXdVNCYhfKLgU5N2Tu7WXf7Z6XD418w4qKav6AodER2kmsP4jvujUp",
  "key42": "YBnCB3CVQfokmVQJYbbfYPLZ9SxK93CQPhX4DhXsGH5HkbU2HY4ThMadpKhzbb9ythoy2stmwBeaZhoXnATqpuK"
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
