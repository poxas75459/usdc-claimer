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
    "2E8SgDGdErev8apApQqEs7U8YJnR15UAWdKaURdiJhjtAZPuyN9hYS8oT57Qjes8J9Pz3MoSiCfDZM5i9rT3C1Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KCuymLk7soVqLVcVxYjgsRVmg5HSSbKWSR11mk3jY4U46xWUZivkUkmXFGzqp5jquvinywcTHz4PeZhNehxbCDf",
  "key1": "4Pt2a3oSMeGKgwDPAYxkBPJ8wPDoWHNEC5T17LUfX13JWvPk2YbcXzEgV62VvEvD34NLCxCX3v8zTVqDyStDXpCz",
  "key2": "4CzXkyDHaiGrhknrfoVhYF6JkTK5JLmsiiVJBnCe9MiURvXyKKc7ZGfmF8boxvsePoxoWjrw2eFJmeo6mmY8sB6r",
  "key3": "4fsWoC3rXH6i4nEzHYJ3BkYdqaNt8fo9iUxnCvcTKYQaKciZnxXrDKtMtW25q6oPHYxoq67eTtdmbUdqDXLhgbCL",
  "key4": "3qDbxJTHkmg5vUmo13Dsmbjxr72C1BVduAyZYSjEdgqdxEVbApH3m6C2oizFRiVSjF3Yuz8JSemkmGqDPHyDLYH5",
  "key5": "drqcoQ74SLjWMbwPY1vzCUP67GVFib7Db4sK6UMe2qagkEeVtzWTMWyUURz8ebC94BhrsE7is6N13BP58zKhjcm",
  "key6": "3EnwRGtUFTLRuLPMSFJZsfvRwpSsFBvDocaXTTb7zMLsLwUPtFdSp69QExNVLksKRDF1U82NxY5nihRU3LQ8bBm8",
  "key7": "63iT2E73TpY35Jn1bokSCH7gtXZHYcpj6FA6XamVabWKBAThhRf7KuLiCsY7FQDDShjeHBYdLzNVASxp2kWTURYh",
  "key8": "53DX2RtMkgLHaLrMp2uBfUKQsToAt6kt8cBr219RkHEDTAFSJmEe7EkwWBR5DqfpByXkRGP5tmEumnTJbL13775L",
  "key9": "4uEDEWGv6oHG6eezDC8Lm5rsRqu4h1a2s7esWJv65diSSd7bci2F8npL9oc8r7Fw8jJ8q2s7CgF2qzZNMdHK1Hwc",
  "key10": "ERCTuJjotrYezHJws9qVVGTLHPta5FLMz99b4JtuebFatB3QwP5tGLFsUXwtBrKJk6PZ9eyGi2nmF2TcQUE1cpw",
  "key11": "25Gr4eCMettjHbPE4xCtD5EJTfKtbxnA6pD3ooYnuwPTAVH5hMLzEpBSfHtqbiCuQufWryw4MujS7ifkBA9v3Zo6",
  "key12": "372cEgReJHnFG92HAEXjHMDLazJhGE51RGrYY3vZ86YKWkGY38VowTfZXei3rzt7SiS8CpcdMpEero2QfTSEkFpT",
  "key13": "4YSLVQar47eub5RFqedBBiuQnqUgBUqUzsZNkUymJb3VBELBsU1WE3E8AcuqG3HCZpLSCSk1nHncsmtcp8czg2wp",
  "key14": "2N9tpmdpxNBe9fGkvnhKzZuYHt72cP27TAVVMQB9Yb7F5AHWcvm8dmng4GLChYeCfZGyKVgTF6L96YwoS9kp4k1F",
  "key15": "3ZoLsjsFkXtDHmyK4Wkn6c8LdEMtKpoQB6DcT3URofW3KEoyUoe9vsfTY3xQLQ3wrbuiKNkqP7brkUAk82V49H6Q",
  "key16": "2ShEc4HsCiBA8VDzkk6WsbArYkPUepJNfRZ4mjVMej6zayYHtc5chu1c3LnYPjWDrBrTPnohBrBA5y3Fpyq9bovU",
  "key17": "5wTXVAgcoFPgcrTkyr9Rwnq7jt7anZVmjG15867gTYgJ6yEwiSaKh998fEegqWc4kSWpySZ8zAS1kfByDxf3QZqC",
  "key18": "2im9dS9vezkZuJkpaty4zSCMunjMsDHHE6KeCypmafT8DeqHcegjmtmvvzZUvJU8AE5Edz2RBy5WahqcA71XqUKC",
  "key19": "4zqef8ewBT5zis742tuhAVLX9gDbKccDZUmxVnpnitXEwLKdczfpU9ouPmJbsSY1ExUEokrdFbJjALHyLc6vzt66",
  "key20": "4FLx4ikGP4ixFYmJfB8ms48eE7njQtTUrtQPBNNRuTk7WQAne31bpX6couHbqo3LhnfzTbUyup7jBesF1dwgv6rV",
  "key21": "2xX6J2x1FrmiitH9aoG6XaXrzQHUgZp2yH28GtowEecLrjR69CWs6Pr9S1GUs16cqXxS8DiPdoFLAL7WV5iDMYQR",
  "key22": "3hXtybhQVy6LRs7EmcBNUURqfMnVqCoeNgZhWcfi4fFXBoymbz3HGW9BojuzJtqoWyRnqNUigwh5zS9rkJVYANSi",
  "key23": "2eCh8znWP99YY9Wch1gbdAXMbSYdQ53MmAsjKN5atfj8yNyFep9W59FEKKjZMUiqPqP7yb9FQQUyoWkiDCGaX6Go",
  "key24": "3bYhvZVbYBaDj7iaro94Jb6W3iTD684uwDLUWRnBdxDTBdxi7QjdRKsY5bVMDz2MbzWsrAqXserAUcRXcXbzvc8a",
  "key25": "3JWV1ujSjz6AAKGyjSMEmS5rW5fnjptT6ZwHyDZTbrjknnLmr7m1r6PEx9aJvEHqVqpZZX1eqJdGphr34USHggfJ",
  "key26": "4vCYNGjy5XYE4mKyHkSz7NP7FVFZmQMjtMMeKiocg3Jnvhm4GBJbA8VPcBq7PTdw9cuBfjcMExyAGdqkJ18bYi3K",
  "key27": "3h9feUowi6Q4Eb8gvnhHRSKcj9KPcVYdYeyMdaq2FyXu4uAadS9KPqMqJBCSVkMn2qs3Pksr94N3CnVk1gndG3M2",
  "key28": "3uk9xAE5gr4yM8mPArVL8t6xKFTvsAWiLzGN12yaWC53oq9pXWJhshqsGDaAjrEZeqx8RrJs3oCwfi8P9F19fm4j",
  "key29": "2UscW8n8Fbn4HBcA27KDJ7tBhb7S8Dc2zPbVgKuDc5hknV9ZS4WyGhLv5cgRttR5yrgcKtec9Y55cSpYDE2TFLrG",
  "key30": "2bb1atAqf62XCsucHSR5TJXenyhWew9sifjuW7trLeSTL339nZi4414nuL8UEJPHqdsdA293W7ib15YcZetfdzj2",
  "key31": "5vtZ5GXG3wsPz7TYkzdKDmus1ikkjqHhoDxX1rf68f66TmKomaaREbLZNVMV6gekWJe7oGv3QSxwgg2E75Bxphsk",
  "key32": "3PqMRv1aM3qwRbejXnw9Ldaxfre7S3LP7b2Sn2KgRiDehAoVuB9Wt65WyZKGWef1GEdZGZqEDoVxDVdxQfJ5uqQL",
  "key33": "5thRuL72aDLQe876EBWVRdxSmp4uUhxXj91PBKiCCTwbBFd82YYjV4vDhVVZW3x82icHnW7B57CKjrwvmRKAMMCt",
  "key34": "4jAZNucQD4wWWKATwtYdWywSWsNMQ2eE9QvpCnm5nhTj4Ybdd3NaW3Y6r7MvC7TDE8Toj9axqHksQEDjpveALBSe",
  "key35": "5qbM4hNzN4DDws7T8eJQ5P3HEssgiAv7vpEtLR9DLDa3pv6PhnzE3Tu1x9izvQNWAVDhvkz8XKkoTNDqEADSFZYL",
  "key36": "5pYiQBd38ViZE4FkbYYpnrBMsdzQaKqkmfNdjqptsTJPbB9yhoQ1qJSv7jUstL3iRb2KLgqmkYFJpGLQj5KVVV3T",
  "key37": "5Fv1xoNoGyfTLAVcGWmuuncWXd9gWmDU6srVE2NER4BRU3oe5VQkDV3jAZG9gznLtuEGh2X79HzVGv3ZWmQMKvzx",
  "key38": "4azFTa9qSUgAaSUHPuw3eHzRVpSsx8UEft5mcbvzQq9Br9voqngvxmMiZwQnduANJq2Kuter2HV6cjLTij6HL3pk"
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
