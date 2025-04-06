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
    "3W13MQRTCtioqRdhnBjoCJnhvRSVGAbkB9fgjFHyTcTLpdgGTQJj5R1tcT4ev1vbfAuQcVWdVtXguEKuTLsv1N9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HTFvdyYVZcA7mR1KiPTEYewakJgdwovAaxbTc7Hfpnkoqc9zNyZvn6ASYckjSruPnmUEP5tgxNUCXzba7avsmAo",
  "key1": "3GgrvGD1eYNQCiaLyNUXpgP431p5wAq5FKjbaerri2HCxmhciVnA6T1go1eJrRWT7TmekqtXgtcCgr8mY1VmF9SP",
  "key2": "4qQyw4q9nJJgtLV2bbHwFLr1N64sQ6UehgLWgx9uUkFBGUJsR58Befto7M5adsdj7JPp9Fi2nVuC8WVJUBnt96Lb",
  "key3": "4oH8dwJZr7yY15FjaSzWuLzJJLoWtuknYGN2q2n5TjQCximzs6E8677V4vm55EjYZoENFoowGoxiwPfWcH25wBfK",
  "key4": "5q5Zn4NPYmQQQG5ETufLfsn7LfcZ3xQHHEPvkoWqqAfmd4CKwRnHZ53sbizXrmonmM41Hrrtx5E3JkQJcJQUC29Q",
  "key5": "39WywqLdzSiVJKuNNY6GQnzFZCPjsurVM23wXBGDJQcXxUcfuQi7w8Mu7g7hZyMoAy1amoQjMTNd4JSWKRc8tGnh",
  "key6": "3U2XzEMwJ3BFU5fJPkUfPdtokkmQwmjhBFhyjDfJZu7SSt9eFR7ixLNfQN384dP81ybuyQeuykU5DromKWsVEPPB",
  "key7": "288gemEeEtfYwqqe7ipJz5nvDfp53XrgQPgEMMBNYynrHuqXHk3cDJHCUmZ6m9B5vw33pjUvEpZN3ekjbRhZrRJV",
  "key8": "5dq1UkniEXaHY7mz2rp1tqhtJaprShYRL5QwP5SXX4mfLLjNDwAQTHKVY3rrwHB2wFsWfS6nLUMXNkrBH6BpWY5s",
  "key9": "nGy7bTpjyQUsFBH67vthiNQohy8D388cBLYr6KZeVXDBamm3q3yEF68Z9H4i3QwQJPRr1xoB14UNtDLGri6QJfv",
  "key10": "5tJkUvsj7EZsDcp7cmgdmWSdkQb8EnfdSdr5bxeb8A3t34VR5VV9xBHr4mmBP5Vrv9ChdcqAdNvbWdC2pxDDaecJ",
  "key11": "4gZW5GweUwegagbgjBMPnRRJPA9r2LEkupwbLXoCH9EvfqfMJarLgMvzzyPSryVNx31VTnuvkjneiFMGEL4oxzfP",
  "key12": "5pxzPCDr1pVrqMF9793P7SRwRg6uLNUzBKGkFhyUTghucKvrFNcfAtDbro7ekJgXLuTVEtLcC5naBePGpkK6qznM",
  "key13": "T53NkPGWtgqXAVVNpMcWJXYN8DVdwujBpG6ZBUamkREaFhUuWNFD1Tu2edR7QdRSrKfQQvbZ986czyubnQr6N3c",
  "key14": "nsKmx4jUM76SJTVuKw7GKF3yfyTzoiCfUEyEG1SaToyjctwq1hM7A2PiSw33XWf55LobaXgfvouRfx89uWASdU1",
  "key15": "jUndrteFBNDCmQny8T2Mde9SXxnqdMmkfhMtfXNvS3bLFBSu6eRDTcTKCPohhDjAB1pkneDAF8jtErjcHxFgr6z",
  "key16": "DGuhPLy286gKacktTDbDUabFNxVvm9G2hb4BLmCPw2ckkDsvcQMwvXWgcLEJEgMQm1u2ys2vBjrMyirRMsVsyXV",
  "key17": "2GTwHDhg3kAvy7pBgnBSpGvMsAfkGHje1VncPJTYWdcQBTAGLH9pnvTWX2WfZgSGtL214KdPpxCnsbgQmhcPjScV",
  "key18": "x5vdeo8TW62QtxWcAAwoa9XhZL4G1mhEv2d8i1EWP36QPmU8urVQFGLdG5CTztjM3EznVnfEaedbYgLfqhH6fXQ",
  "key19": "cdPgyMUMjn5RrLx5ZeJTF4CEBaD9wB19GMv3pTMRB8frL5VTQHYbAsrWNU3vH99NgGee57fUjr9pt36k4hpHa3F",
  "key20": "YfQ5xd5hosUwNuVYisA3VFy7df5uVrbCH5czjyNpFG8r55FxgqHWkCxinA4f8pHp9Ns4YwYf9CngKUYRZUeprug",
  "key21": "5rezqRVva9hPAjdhA9uaNNo5H6EUdJeRnTWzHTrjAGjdPagyxvtSAETKfSXRYZWWsm5f47jf2nQ4na6ghQJd63ZS",
  "key22": "5YEKJzWLXWDRBnYbRQNfT4dUsNQmZUMxzFoL11pukBnPHE8WPWRbnkDHFWgASPJQbZe3GXs2vqGRdKNgHhHnRxkV",
  "key23": "4PXJ9FfCaS4wsgoXqHFaJbQ6iasrsSNEJM5mjWJLsRTP6d5dgmgg8QjvCQbcDsPeHKCLSNsCvAfmMo9xiZ3wsTmJ",
  "key24": "3QvQSveRYF7RdZ6HvaJQgx6chEYMnstVbetn1hgczGGxYFXCvb7eCHpLedmPiVBrLaFMMrVkqW6rYmmpVcCxyHwF",
  "key25": "VkudW6x5nn3hfSh2AfBgUjyxgCJw3nmzt1EB7aogwT6hUpQ1pPNWXc12G6GpAQ2kAnXxYQBKz2nTuupQec1JBcK",
  "key26": "X59K9Ty6JKPYELwucVx8osoLtrFshT45Pu9AmdmqDZp772SKXnaEdWScZwzkmvG9HnZAj3uBHX7GRUZ6K8DH3TN",
  "key27": "4saGGeA1SynGg4rEzqPUigSFTGF4dys6GqnfeieEAfdoKLj79EZSDr73ZDc6F6Go4A5yxLCHsKg4hkydb2uQVvYf",
  "key28": "nADLqXZK7hMMMqqvs69Zcboa7PxfAXuEkkupXCzrybgyCM1NCqk1y5KYHRXrjw5yuWcbbHfKEG5orm15XHzexLt",
  "key29": "47hUZmHiFhucf47YrNithAd7oMfVi6k36C6rQdVkeVH95sN1CMYXcnRSS5bFE2xTsB2pwGST23WLYF9w3B7ye1jp",
  "key30": "3uCk6CbK2gouei7fYCQV5fhCMBR7G11aWftndc3t6DCCPcoRWi5NMx7P6GmmKknP5YTuj2Dsq8pC1P4G948XdXGg",
  "key31": "4LijuKQWwSNw8TzW4bMspvLHRKHkcJDSao58AvkxApnQQJpimz7hZiA5jLKV51EyVU2eknHckngRKyz4rEQUzdn3",
  "key32": "BwpoDWxX6BvSQBWDMauWYvAqPaUnmE1p2bWRWBNJUEPsh7mqzWAeUdLsat4spCeX5bZ5HxGv1HbiTji4SiLgz9L",
  "key33": "218azYpLyRaFw6hQtTjw58qpVFULjvm8LadUKk8faVfBH2bZzMRdAkTF5ygTSMY2H4eYRyzxSQxk8JUCz8CYGxST",
  "key34": "3o3WBduckxdUfASYc1pbvWyBCDn6WhqpDtGvEwdo3nkNCMuUpo2T5fd5NvoZJKMnUuu8FrtaM424xTMdHNZHd8oZ",
  "key35": "2TeR9ZGA1GUeHjAjniUXF3urKWVnxiqMrmMzejgPstGuCuzbVD82xysP9PTwAZURJgEqwgUanQirbiEJs1Uew2J3",
  "key36": "4nUvkjnKVosZCcaNbwT1HVJeZgFq2bBt4CJF4GmeNSoupmr54EBB8knqTp7Eck4TkkmZf23M5h7nkx4xDAWAJKec",
  "key37": "49vaLxZjo82zkXj7LoNZJ6jS8Cv5GV3qx7yEJ62tw5s5zo6TH3knCRkqQHHgYjmKqMpFXwxEMSJ9csRcdQtnVMnY",
  "key38": "n58g5B5N4VZpFmcAZVvE2JoocDSGBcQokUnL3ZDNmM63HcM3ZfjJgFS8uukVYkpA9i2338VoVcXByNTmCm6hgn8",
  "key39": "jczrbLF7p7M3Aq1544CTrMtMU3dZCRXYj5ADmoiK92w4kDxbBQ7r9DXTisxgtY2yTZFpawaK1ZtBcZKFh9ekKBq",
  "key40": "5hzDYABJZuvX5ZqZGMLqGbtCnCvUd4YCFexDwHXeMS823uHu3vJfEEg5C5pQCyrRL4ZPj4hHq4ZSjPtQo6EjE25h",
  "key41": "n191K4D6k6LQyFLjxrffmcvyGvAyApr4joaqcx2zRiNKMvkFdVf95HDUSQJ6DH9KJcyXoPvbD5ugCC6jaugLoSU",
  "key42": "5BuDnxz77NmrwFfVEY97E7xGg8g9nVoDPEtdw1md21XNVveyrgAEbosAMs3XmZ3DnYudmMSY9XXj7cnR6HSgrAqG",
  "key43": "4Xi24eRZKWLUet9nhcgaXq6vfz6Wn32pSiwAEpEQnYyyb8F2V93xoEKmpGdr9K1raxrjgfS7s9hr7SSD4sXLQHzB",
  "key44": "3gPsBUBh8j5UmjNf4Tp1iDtny7w7HzgMSsiuVwkHKd7ArczMUKKjsTBZCbjwZ6Rb6rzVkdEsBTTGMNuQzbK54Yjq",
  "key45": "nHcnKKSRSEebmf33W72BjU9ZHwd2AdqMo6Ui8JfQJpYTbfab6dEtFHZzfdHaPEcjMBbKN7L2znx9VHASWAF2SVC",
  "key46": "ZxtWbvnUcDQAASsP7qA6GnZxsVWGzfvmLReUB3gtNVBAHhBdgYYupWBp53URhyumPacVwHeJYZdoAvhShntVmTh",
  "key47": "2avXfX5PrfgdxLEzaAbPWu1oUiJHFbDnM5rynqB2TLaFZTFEJA4jm91ApX8aMoEjqe4QTt2UEix7FiiVy47U7n79",
  "key48": "5YWa7uURrZ5fk2MCPXWUtf8K5vo8HqDHKxWjwu6aoUJcJtHqk4YKa6Tg8ph6B9r64eaCsgoaTBjgn4hRU7aZjmGG",
  "key49": "31j6Nm8aHRPqKwPNk81Ek6c6DDGYDyqLo7QP2MK47vEK7b8AjYvcYrAQhQytqcK2G5Jrvh5AkQYee9HZfeHZEYhs"
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
