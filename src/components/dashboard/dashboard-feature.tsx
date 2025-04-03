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
    "39VfjZNTos1vkRDUFrJ6RgAZrSmkjQovrLWq4UHV9meQMrFHB3SizNmDDtbey8CzPwsjZrDob7uZF6Kfm8w42eks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DtzFa6m7pDS8MD716uiRmpMg6AsQMSGk8nFjfXzTq8AMbNd87z7XCyEueKDffjfDm9enioBqhfLAhXY4N8rbbWo",
  "key1": "3wRe4kP9xFGDFLjVqHUrJ7w2CVsbfsqNLzUM9vVaXfSqzUVZRmsDz4F4knGUWNvuEK3MudmF6nER6u5Z4SFaVddG",
  "key2": "9AWqWU2fUikAN2hLRFRPDfLgifSgnRvMpVvU4ajXDP6eFMXvDmiHPEP6hfyWvu4JKEq4YbaiqepQExx9reeoM5s",
  "key3": "4gPjJQXNfjbgfVe1mhJgV3CypASruYd26o5oRQF73egrDYXwRSPoQPnTj3pZtGHP8vJFUMNbEmYS4jhrKe9NBL5C",
  "key4": "278s4b58hqYeMhbxsi47TLcYyaDAGSqUQ6A9bm7Zso1fkmedKdbJKwDb7tmVT8Rz91HCtV5Cce9rioU5pMP1eMJg",
  "key5": "3btYTWTQXHPFi6EnypFbP6siKQf7774ewu88PWc8pU8o5DPsgCrLESEyJQbERzWcgh9vhApni6Yaz1WJPcgtSv5Z",
  "key6": "5W6cozMV5cg1rw5cgz7N4xLxFWE2TFtB1JNEZDwTz5SXb8mHdhhwZMqkABJZsqzjXfrmSxRVVh6cMwajkQ2fKh8g",
  "key7": "3nVX5h4MTGh2kPeGVAnynpy2EMwkXqH8Nd7KmKout59q4nG12nWo7EKArmJmTUsotNa9LWbTRYSsHUQTH5rW2R7f",
  "key8": "fx15vqyzE4cZA4LZoSV9T1NzenKeuw4RBrNJiRtfJyaAQrGWfZJMRWpE2CPSMLJZAdAaGoBeJ69hUbEjqUUkfc9",
  "key9": "3X7aGbQZYis56s8bFHMcRR6NzFnmEKA2S6JrQ8prENHbuHnUtcFaMcnMbb5qx8SYYX3h8zdDh4PrWTWW1sYW2pK8",
  "key10": "5TGvK291Kuip7Hw9AeopVFMpSewLPPF45YQDCtP6Bb7ErAoTtpaQU7Nrvm4PETF4Z539VbHuu7CeCBV3bhkcYCd2",
  "key11": "5zyKyUzosfM7PQn1vwADXPpmoTZqwbXfzjuF9W5r7iuHkrKpxEq98hzSdTy8ojfPmbhmL4s1d3TXAYcmR9eg8FsP",
  "key12": "2s6SZfZsPW7MzwJV6ZsrVC8Sm5rGSQ38HuhCFJToydqs7y48TaSzfXeLmpRj6U8nbRvYJYtZZDchfTPK2qv3CU1s",
  "key13": "2UnNupAuwgPg1K79zWxLVdSkAaB3ACFH7g35R1BbzxxTnVJ8r9u7E9dZm81ftNRt8UbBm5zcrerDWgUW7Uakjd9q",
  "key14": "2GyTbFWBAPoY84bVEMHWSFnC2JT7pPRdoLycJCN7YJ9XiWtSxk4B6KewdirYZ2kUN91uF66LbM8N2STgmqD5LKqG",
  "key15": "3RzZQURsqeDqHfegHCMUX3U96VnGzRvSX1pZhNtAF9JJpYGPniw7gRoff8i2yCKMjSxgXh5x2UFjTwYQVE1NYu8u",
  "key16": "62wHpGicRaRNTLG6T9SoySheFSPzLrLoc3GmZCsZT6TRUQCqGNJDESxwBKxasxyVjX9oVjWnjoZnTrgX92uQzQ4t",
  "key17": "4R8CMGxsaiSgVnPtewNVLj1hF41J6cmyfVHGrnfrdNfTxnpV4cbgJPjC7rfM7UgxLzgaiNfLwDJCRNkCTyVWLDeZ",
  "key18": "5Ckd25XNSqu9iJT1yGQAvg4CWrhAbseiYthcGMJ1ZZk3LXBnKFrA2fKbrMCVxE4YW4Rmj4xFNPL4x1J4wf9KDvKu",
  "key19": "91ZNf1A3LzJNGEAXkzFUrNV71tWMoX26zmSzu8j3FfExZgtP3roCxfBXhq2Xz89wRvmwH8Z4sKadpFXiw7zyxVT",
  "key20": "5Pvt9PqoLh5ruGecw1CEKJuAH4VC9JM5RGvmkjx7hUJdQ4iv2McVjoshbgkevKojgxtK7nJx3ccQGKTSc9pjvLmD",
  "key21": "3Ki1iKpWyx85rWU2zXwZY1KNFJ5UAXCEQXaPHrDwykG8CFe89rEUN7VGS7hAAvXgwAmYaRUTGeKpvuGAgGy6WcQt",
  "key22": "24xETtVGtvD7N2sHD2LK2yDbrWq27Gb4WJhtq42czEAzq7FkbEmJcMDWPE2MPxY96JHGpCUttEBsoBd5jMpdkPF4",
  "key23": "4xbJ6RAwgWJEhkTrDNg7UwusgcDzEbNR734CzFwYpVvAv3kcnmZCakpnNrVG6oYxYNs9vQB1Rf8zY1fXJrpSrvHu",
  "key24": "3FizoWPCCZMCdwvd7whpfxZKFYHw6V7eqJcCdshW7a56P4dxKAt8AK7imLQtSgtawQKEfy9LRssvJNHkRqyAdeTh",
  "key25": "52eRxK8sdig7R8cpcwSkq8S7xtfD76FgLGiy1hMXRN8SWkGm6UnPerTV36ZRXY8AWhhKp3AcjGpGot7d5poV7h4U",
  "key26": "5YUVHk3io97btfJVKhtqJf3aM44E1kTUxE1TMdzbq511xsobZTGkYKTpqvrvAUcmEX1yAT3cBriwbekLApEu18db",
  "key27": "2yJczHvWyo29xJVM8QMPpAKFFUadHPv7nU6hUQXcdxfQSf1dDyuAGPP94mcjF16W2KyYd7zE79ciXhqFJrwfx1sZ",
  "key28": "5HjMp319u9r1faNySemh19iarmpG5Cyizj6xMQAXAmyHMiRaQuxV58wmKK1FtKezLvMYZwmgxLFH7FJbDb9rduUC",
  "key29": "2A5a3odbCaAgcSGf9amyB1ge8SbY1kYbbQownPKBtvEwmBUrjLn35m5frs4RMXprMMtAZ4kXg15M6X5he3dpaXdt",
  "key30": "3zUNHqr2DmZKSAKdNmUnmiTQrJqHwnHx3wHSZqemq3578KfLTrMm3JYAp997s2BpKTMQ3i9nZ8PDz9fEBwhGBACM",
  "key31": "4bw65dKo5LBsGAYdvpY8CQ8kCBXSy9d7tjwnNDXu4De7wSVSqgTdma7P3DRkKkSyd2Cje2Dk7nmAPpS7st18MGiC",
  "key32": "2ZBh3yQ4bznkEJviGxUWxedM4owgRChnXZgMipgiUB2Wxo3SUNrsLVoESHydYhSmSiLHVk2LKg17irXD1an8tbrJ",
  "key33": "orbozj5gGLu6NinDd9xqaG1oUwevhCp6v9YfcvHSobjtoabUgGn4nVAawQSSZq2s36YEP2mk9Q1maAYwCkwKfMb",
  "key34": "5YZxYk5WZUmXjWg2A8FFjKGDv68VB5esKpLqTn65axxyabQ8NzdhTTb6SCDU6fAjtUfa7SJMKzhki1PVvz5uPNxK",
  "key35": "2WEbGTXh595j8sP2vw3oRcRxPzFxZZsjWfcUE9Vro5jSbcXd68198qsVQMbHAUCHpnVYKBZKLKi4F3Yff4o9WX73",
  "key36": "3hvWgaQbYrd81vTcfPFsYd7VbXBPyPaX4FycfpmhyppA6bwg3nZHfZcjuDdhrSqADgr8KUjXt81NtTmTAvhejr38",
  "key37": "4xujt1DME8NJUeMLHddTaxhKdiGVKGDeHXfGjbVho88vjwe6hx2p6YcAgWJjdjXYaQeQthcJ3rYnHR756KdqkFKK",
  "key38": "2RJxNHWhvuafS5HtVQEDckj6SzUJM35YdjzfJPHrKmsMZ3iaRkzaG35wU7C4dTSVTcL419y13RuNqa9xJ1ka1Vq4",
  "key39": "3caMQ6XwGo3aRaeCRz3VtWn7bsDQr7GmV8YHEpzupjuuWuhXjzynq1tz5o85W4W6d8z9DPbrbtseqCzCM1gktjW4"
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
