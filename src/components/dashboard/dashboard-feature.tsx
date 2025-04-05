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
    "D2cvSoQaaPCyGPvvdW3imJnrXeuXuypiJC2rfshUoEZVc98soSfog89oezL9x44A8JNHp61fGZeu69GdUY6Wd7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p82buRzWgxSDisexpJDgHnci2W6pUMy9o2m5zbQ2xUtYkuNxkQPXyMKQMhKLaLqqzCR4jJN37d3Ewjkt8nmKAB2",
  "key1": "2nrfz8rP5sQQneKbRuDYhGt1QmAMD7VZhPoK7bSJYLKLwUwknzKLDsag6U6JNijXqCJY7cMNaEa8QgNBtYWrbRyr",
  "key2": "5BDGAaKz5h32Yx6zJNZ2Mquk1Yijc3Fq9E4iGCjESEK8WiaA6Y2ci2qJvziAq7DagBESdsmombEHekW1o6F1mzW9",
  "key3": "3SWFwMwwqMttk6YtrFGQq7zE9giQpfGDendsAC74jERLze3SgQVRwJuCqkws9LpGb1SD8d4ExgHPeaUdmiDVRBQT",
  "key4": "2AFrmN5jJobRFZKsbvChxNCuvR5EFv1XLYAC7UmRytCNSD5FCcbkaWBvCGCL5oMSBhcu1k8CiGR6fpNLvh5GVSdw",
  "key5": "5bfqyFRjU3AVv2x4UxwGefXVXCt2U25b8Lrne6LcJR6NfUB7Q3uAMFRMhk576HJMMzAetv2qxLGx9H8fmWB2vdKn",
  "key6": "HE2B1UdkjHq1o1XgoVu6y4rbHmefa26s7CxJ4N9NGanGNkR6tzYeAmvAeHjWva7dmXfA9FwqZDokNd74UGLgfrK",
  "key7": "2A9TH5GzTtUH2yrPuPrgAVJFFFtJENUs2LPqYqwuY4nyNzxwQoyo27QrcxXTt6cXamzubjfKmBDiL6QTBHC5iXWa",
  "key8": "5DTAik69iuBaqZG8MbAnszWi6FNmyhW3dPrgu2AJBH6i5Jw1vRNK6Wsre1nCyiUWdMBKkUNbeh1JjBhj83NwP2fZ",
  "key9": "5hnyn8cz8Y3qhNGPER1r3oJoJaJ2Q3QFf75kG54d2i7BuKDhNukRRJroeM1mtZR4AkXtgNitkby3nEBn5rtdE5gE",
  "key10": "4XjPuwmEugJFkGyAQVcJYLwwNKwM3JZaQCyv2WKDpqtWSb6iVtWke2HjjsRiTUjfKMvkypRYNZZgCNNo1pVxcLjD",
  "key11": "4XSyctaskeqfDQYMQhcznsXQvLeL3UduuTKawzMLvBVDu9b6PVDMogBpUJiJ5JeffMK98tX1ScQFMZhdJQTztnce",
  "key12": "2GirCYViLN6rbEjQFoTbUnY7LxKK6Hch9VNjQJaaKHbR12mgnEKhQEXVvmgCpPvJ26GsxSBWv61et2jjc3nhyUVY",
  "key13": "31ZD7RrLrKsAgCnfZt36MUAXQGP4BMkFKpAfsEo12NVLvxf2VacR6xpXCRjhoTutZN9cyQJfZZf9bbGeQFDXyQRn",
  "key14": "2C27W4otb8Yae5D1heuGx41Tn1eRC7sze6r6xsGNgDisTDLj3zduvTjyTyQm3YKdyj2yj4KQLqhhS4WbtR3tRtrt",
  "key15": "33UMji6pgmGgmp6ZxaFMFxKqV7LNceDyczcgPjVmnpeDqY5s7ePWhKpos7dfJ25Cvyuggbxo38gPZFHoz13kS61t",
  "key16": "4XCr2Hqv9Hd47mp8b4srKXfLDs8SzYJK5a5ndb98QbGEaLYF3RgAdqBb2TsydsKvKEsg1fpLVGi713zhpcc5vJxM",
  "key17": "yXHBvxk1BNWAzgkuxF2a7yYgDdjdtD2Ug4WWvq6bVAgUxMcH8MtRn7FJHnKooHQbRSoLQXdFLYcnDLwBZpgft6g",
  "key18": "2mC1R7yGZrKHGTpnT7gddJs55L4UJXkTv6RAEdsCK3hytJWVcrCx5xi1oEkiDYfEaN4fhv5sFZnNG3PEBYb6k9xw",
  "key19": "2nR63r2CdzyZWDnYmjr4zcoTBVw8oP8dgBSFxbfyAQUMiET5XgBD95GoFWmwuqMUmNNqTUFXAV5xvx5FHNSf4f99",
  "key20": "ds1Lzjo8nXv6wLFuRMQMuE5Q2qJepPuzgtXAikPeCXs9U7XMCwtYdDzjdU71H3fcMzSNJ8jsZbWzwX96by68WeH",
  "key21": "5Kb5jvwViTU2y3XSWGWn9NmXwNm7YJXo1Ls6qWjcvcgjhpMTNYvUadLs54FbLVgi2oKjobC1d8HctAXRVjVMybjW",
  "key22": "hcKwka2rqyAVdQUBNMZNgrj5sLPdtKbeS2u1qDaMBJLi3wfTvR7mkaFLyKdDYzzGBoGpApopiRmPXguX4sHbnKg",
  "key23": "3LNeAc25MGsJ7UR8J5pbe5B84XmzeDLo8RNPBymPEgL4Fa9CVo4GAmmotKV6Aq42gFHjxZF11tLQgkFp84zbxDjR",
  "key24": "GST7R7M9ALmG1aoV4KVFuJeaFsMiyuQRqAgpP1WYQUbRzuY3URm8Hya81dgWhLLEqqtcruN7k8qGN84Y5SrkGsK",
  "key25": "2LfspSBFVt4tACdtkAh3EWUiHE35EMeCYREpsYjv721FUV11YWjgvd8ApYk6u4xTBn5469th7oaNuTNGHDn4wmSR",
  "key26": "3yNRpnXFfc7HrNv93PFExyUYogCKsX3cUnf5MDUv1Z1g1ucgfBPi84FdAhBPk1fCJB9zVRnxG9BfMDCwJdRSCzWU",
  "key27": "4nHRJpeR2jTmEcJWXoALHW8AHTk5uCb8pMyJNMfGd73KetTRnF8gb2A8SyHqydwQKCYTd3JJL2qeLWwxaSTrqiRk",
  "key28": "5ZBFmHQfdAE2EnzfUCX3FTuGbKtYCSQx8wx7BheAs9Z1XWSym6EtwQ43k4u7Xk6WWhJQ7ntRng4pQJwykfRdqyUx",
  "key29": "31Mqx2rC8SWt5FVy3QjCcKn16cCXHnFp3tg1xwrHRxYqpwNJ6uotcRdpbGCrdyWDZY1fJsffmSJBcCmz1bvzP8mh",
  "key30": "2YLc95LidQvUMfXC6VZn7xsJ53MU2o13iLu6j78vRAMfZ6fEFpPc2ACwBYUJdLX1MTW2j9dwSfjHjFYQ5YbrP9Zh",
  "key31": "e1tZ9KVtKgcfpLk8nzSVcrUHuvRgK8GHhcbVJGDXK4mEn8y1tVMj3bjtMePad7KTSZ2ubgVR5SKdoDtCjYxhftP",
  "key32": "2A596ibm5cVgYL6WVkYvQqzoHwu3YpmHMuWD6tdGQcDoxnjxLWS1szZLiDW6c3769WTWNAWULczo1BiRcQjuFSTS",
  "key33": "3f4oHiceNvaAZymexcPP6BNfEJHgx4HBJSFFi9DakkrvSwqQDTkML2ihJZCQqAe9ZYhDsW7vCJXy5GkYept9yEPH"
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
