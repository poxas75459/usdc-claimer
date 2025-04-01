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
    "5nFwGjGRRZup11oChFtLaJTkHeRi9H4tHbv4DyqTA1qWeSUsjRYgLvTveVF9PzSRa8ShpxyarwP7h88eijWngCx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5inpe5tBesoZFpi9RAL7qpqgGeNVpdFyKFNW44pA8UfZzf1XD8YtZH2bmvgyaSuGwfhkdkJohArhB6wHY4ERbMa2",
  "key1": "LbQsWb7doqWCDdtvqbSfjJC4eHkF3ovBVBbh8hq2r4SRukjBectBr4LFSQPoVkSgBRJBtS9Wf26vQ67FQthb3J1",
  "key2": "bki4H5QLGtN92AU1gSh946pUU3ZBk5CFDKcTSeG42nj1dC9ibgBMs1pcNj2DT8LLe7iKc5C5GcXdWuuQvSTChwE",
  "key3": "5nbY6bmau3q5zcz1ScYE8jE1b7oVYFU493xsZNTCZBHv8rXcZ24WdSUU5G6378tXMhoFjAYwLckb1XfyvcKd6FWF",
  "key4": "39dzGN8rEiJkWPjHu1hawSFVem7fFtsU3mz9YhB4oDRWhy2zvedKmvqqXtYbKL6GLzmZLpgkBzQaL8B13ap252Qf",
  "key5": "4imSVBxPVCoB2MRFJf1jhDJizAevdsCWM8romEZkcnMbTiBKxJbxUyi5uSrZHGNTBMKn3SDJEzoPFnRK56D8RG9d",
  "key6": "vr4n2HgaRCp5JmsAXootsPv87smX2YVSkpaTWeJT4grDP5aUSKjD3hYjQeZLvfQgcM5BuNitHwkHbTWBP98ysRF",
  "key7": "3nCe64yrLrJrfRv2DYCBy5oCRuHSdti9MugDiVaVf2RCnTGPaepT8tNuxhGqjJXTBm8MhPjzfkEnfQG5TM7zQfEt",
  "key8": "3SUbYTLCJw6Q5eZH7ddoTAaJkKPtixMdiBWofgRaYxewRmT4HyXJfAvLS46HbcPecB978sLE218qPu1cn2vMda4E",
  "key9": "5XJLwSEC3miAm1X4xWGV71no2Cq7jfKSUu78agadDUKPypwwFz3TDXwEREdyjfeEoLhA1p7ynrravpZ62KGf9B2o",
  "key10": "reQsYvnHKBxWFxFDWzeGMoCRdqcvgem7sFTptPse293hB9ibrSN76a42zSvqor5L8V5yB4fyF8qd5i7G9bL62G2",
  "key11": "5L416sETdSg5HBjXPc9xU4cQBsAYmozUZd9auf1wy7g61Gj8PdsGSvKXeUPgWshdCLMupLDtMoBHYJ2GGVKZWPSF",
  "key12": "5V89F6pY8iiUMcPDFLiQU4gG58i6wfvfQJTT8TyE84vRoVKbHkgeaWCHuoEB7a4zHJoMvTYNrt99Mu7Cx73xpYa2",
  "key13": "4f5GgWjKiXYUeFucrytHVHothKb8CfReS4SwbH6oGZCkA8XdxKdAzr3m83KyYQkeXMUcbUygmDwQSp645rL9piuy",
  "key14": "CcEUZ18iaSSLcBEnWeRruDDTiyDtBysitRkWf1ZLK5E5q6kRU5fgYL4PL67Egi1R1N7TknccxdPeb7u3ZDkNvtr",
  "key15": "3PbDQAhiT3KyvJzNxoogoqBZas4amnW5NEHbyJZ4qnJCbrWXidRSVJuXVgzLmAT6xXqvM8GWCzF6D5j3v1SU7Ngs",
  "key16": "5ZqfGkiCei9QDnmhTQ8vWfaKS7CjubM9exgXJdbdZGtE9PdDw6J7FWkJB5QXeyiRLHwD5msont97yoFt2Zam5NK7",
  "key17": "59gTB5pajjRKzBpEM1kEG5X7tHjoLahiNczFZFSwPW6ZAgQdFGgjG1gk7Bkky7tNwsb5hEoMSquW65gzC4EPceXU",
  "key18": "v86gvTbXgcnroB16JQdwte8g3nJySQGw4Pmm4HHD858XFyfFDTwrFAvrNBDfXGiUFDPFDTJ3tFoK7P6nWnAinTk",
  "key19": "4cjHmeiZSdwds3hFeHbHNHyevxp5av1CKg3TNFAixpqGX6EPCC7yiJdjgC96JwJEQiWUryD9VfgewbjuNFendEMe",
  "key20": "5PS3YdVSS3XtCTKzhKdVkkxxJzHWH6RhsJBZtsvPef1q4jrAVNidE1hcCpK4po3d2cKT9xA5Gdn9ffi9Zj36FgYm",
  "key21": "3dTSM2SFYUs2NxGuviip12KGXi2Y8Uzrq5TDUQPS72qMb7ovBRHGVCVCFvVWRqRu1xTCTvw1BXRPEskGyRPHntmf",
  "key22": "417ysfph5qQPSUR8sV1cqzpMFGDXefz3Kuyyif6vtr7V5PrAHcawxFZyebawvqUBUKvm4X6NbPxSVAaq6n2zN2VV",
  "key23": "4qdW5KLLusvfjHbbo5TJrAb6HvXmy2kWjvqiJqjfY83cAvX9Qgr8UYfZPmQiSMP5Dvsyqozd8U586B2hebfhoWUz",
  "key24": "59zabvedqxAhLy87aNShBg5db1znzNEd2yPMRR3VmauToBWTe1QxbEE2m2SWXm6FwuHDwvzvzsh2FufKDSTuAJC1",
  "key25": "3bPs5pSsQURiJMsjzfngTMYDCnEV5HuAWTWiXA7Tf2F325MSHBL1tQYBX2jGEQt55zMcUxWnWwL2vV3EduBy6ys7",
  "key26": "2ct73zRjDGbVfXJsADGLYAXo7ySk5GcRwsAWfUouy792jcntLDTHZD5cAV1ujQBjX7sMc6H2K78NmVEig5gTfycc",
  "key27": "67R12vcRFyJf6A6nUrcfYEypmBMnAh8WS43tnTMK95pTnjeGkd2BpCrrtRQj1CzteygRevTvyKeRgC5FrQYKpXDz",
  "key28": "2n1EuLeQnYGzFbCS6dL15gJ7ZZU6JFmv4YRsYNK37YtqRB1k7mJ1VC7v2D4sxZ1My1q8o6PpW6B9MDzfbQnH3QWd",
  "key29": "5GnQJZiCv2sJZAvF7Wm3psUnYiVCxCA7VbEzs5PXxtZchwAVor3S4JyRzzdsrDDV69R3VmoA2q6mdaqVBurYPatZ",
  "key30": "WWf1c3VEvyJ8VYbXgN2ETwvdToLcPk38EQMis2gHpnopCL4L4aN9tFNt4kTZ9ySTTFczQodLL3VDYtFDRFNZofr",
  "key31": "9nyDyu6Wsox9NQAD82bvjVfgpEHkEN9du2L6jkGCdHfSJ2hR9afJmNUG5NaK5CBVG6oZMYfc3mT34Ni6Y2ATaLA",
  "key32": "w2NHCTzDXzcZXAQMtSo7pjVm4THxJmJcwFmJR9r7SB63h8Bhjf7iuMiVNx3ToQuc2mR19uLa1tR4NherwCMcWGt",
  "key33": "2kLKKvdeLLwd6TP6JJfEHgVzjdsmM9YNpuXWZXwHcKY6x6X7v6bX3FYbDzmTXp41VD3fskxmbUrBevrS8HMAY46s",
  "key34": "CgNgJDYccYd5DRAUPBX1yYYrRDxQhFRZbtoJVWDX5WmLrExxRDhNNKHXyxAyQ7gR8CVPtqbhthQqKeHaUxYQ9t6",
  "key35": "4U7vUYth3fgHhwGxAngnt5m792ru3kcZ592fhuXZ4hmBcrhraHfELnkAhS8PC7SeeZ8AD15LNev3rdbxNU77hiv2",
  "key36": "3yt1Q5P2zcUbaZykVDLa1SmvxfqxDiywy4KqxUSxcYfWEgrh8o8kowHyofwHWQpAjoQFGZNqvk3uS5oJxEyZYgHA",
  "key37": "YEesjemdVkjimyPpyrtSK3JFps1jmAkFXpeAtEKZMJ9xPG1YEeuWUjVj9ZaeVfbAEaUEmZL4wg8sLxrTWUQisyP"
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
