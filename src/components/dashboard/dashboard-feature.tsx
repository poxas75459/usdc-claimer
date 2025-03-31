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
    "5nQwkjpthmVoPPqKYEKZkndx4fo4fAe7LAQrbf8DuT1vGmx8FxoRvTBhLhVyMhRrPX7pPkUwqPX2drf4mK4nd2af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wxof53RhCMwZK7N52xLTQNVURD5bcmbx7K8h5jaYZiTdGhuWZPR9n6j7AbGvMKwiydHTBoiykSczj8y8a7CEDCr",
  "key1": "48AFb6bG1vmvHcwY9UbvKiEBf25Pzqw7KrgrvmmKu2vrtbrfGa6vBnVWekDBaR7YaVy6Z1Ginh3MAZdUVqRJDMBe",
  "key2": "pob5p1QKyxcBRhSjpkqcXZ4zDsNszFWo4bDscaTU5DrVuBfsVFKw6KTF65KNtHDGcHiz3NxHT5Rbgr9JaYbdqZa",
  "key3": "3ftSZ6DFvdAwy6dLV1mLef8hPB9NN1cs2ANHnECDXrzcoGUbvsUZ2jT4nPR5aCRg8H151EMMnPnKrW1u3brbBHf1",
  "key4": "5Rm2HaTHAokeyDyLJ7sf9FE5mNHpadxpL15FqPghg2jE9kfsaw9jd6xxGz63C7isQvEz5gc9LSmx2jWKbQigJF9V",
  "key5": "3RwUz2bjZHUPKkBWcHghqEbQc93vGaEKLEixT29WG5TxXKmDSmT8vFHmJxiGgffgiSa3xKG54hHF7dqhNq1Kqv8v",
  "key6": "2wALKpXovYvMY9RzgyiqfRD7wKugTkE9BovfMHbroYQHY3euEjH1HU2wLi89d8Cqr2jsoRxkXVdBFRL4BpZnFbyj",
  "key7": "2GwBWDWWTaJTkaHL6mYXa6V5tXT8zJttq4nWZpfcT5fbttjaRtd7SYzuX2BznnaEycmpuTHiYeFYBdcx9GxU56fu",
  "key8": "2hYuaoLVm7Meo8QMHhYShAZ6hTbuyvvQAZgaHc2gyWkKQNgEG8XjjFkPYArT7pQCFUQMmfKdyRJcf3sPH2fKxjdw",
  "key9": "38sPt4NTXVdK67rUPNkKWZQRbLsdfXL1ekW2zjqpu4vMorWpKsrZo7jYnW97a7Q3rLEEjyveCogbsj2qVYb9oSfp",
  "key10": "T9x62HHA3Um7hEUNbtSTW316pkwy1w6kNTq1JfKxSiff9DiC48tNJgX8uUALoqou5DLqaia6MB8Adb6DQrUxV3T",
  "key11": "5wru3RGXeWJeDy4QkENr8hHTd8hPYSujgJe4n3J4UixF2SA4Yd5qczJErZfrQhSW9mmDxPLWZEshRs6YD3kaWCWq",
  "key12": "5pcuafxjxHGtvau71kzznr2i8ZvzGiuTSaWhDdrBsKij621gmypbAVNoYiXCme1haBf1i6Bcw7ZBAjDjsJcDLHJK",
  "key13": "xk9sgWV8gsmS29ZUTf8iDFyxrL6R4hahyrSEEaNEVwU7eY5umi1EpRJNvsgDNvALJBmWKkRKN4AcZReS6f4rqK1",
  "key14": "2fpJi1ty76aP1tBPG3qrKffqiWRXs832ZjWUUp7sbAWLtSvDgA6BqxeZM7Zysiqmvb25PVVC8eosTQY5btmbDVry",
  "key15": "3gVwnXtaEFYRv3PqSf8nVS5ApAmfHgPT5KQF8oXsmDZakV6stkv9yB3Z5CywZQCEU6RasAiGtpV1dqtqQXvcP1aU",
  "key16": "5xtisDwMdVERMMM5hMbVvQwgdD7JfduJeAmdMSuwiQbHZzNCotQswVGUgBU8JnzLR7wU1n5Wr3mbUakpwKb2kWTd",
  "key17": "439NPZN6eq1LpWFrxWn9QLzf1P95vNLqk1yrnAds2vdYvLRBnSjZEfaPVskMr7Cx6x82AEbw73WWshYz1FbXSoyR",
  "key18": "3BpWZxHKzjgokEZjjQN1P6t3MypcwLhcC6e5XyxiiaKs4ooRYk1GJMw4vq9XmxwfsmCE48vgcs8cwtPpeNKd2xPz",
  "key19": "7nRgCRzaQPXKqfwmwan69SPAVLyJe7YiX8zHf8r96gFyYGBaBc1i5QmzM79o7NYFHpWmT321VNs5wbGbp8HVABE",
  "key20": "59dmR8e5pgZJLWWQsS5zov44JnYeMhzNq6EaHcGQFJk96tCsjcE3MnEPo7Czq6sR1FmJYHVohmNNgxxGvqM4h2X6",
  "key21": "63TLyZcQyPRKWAZrHX6bs1r7eZ7VLW2jFffprhdEPYV73nYzVjGVtSUy27rK26DBAbHCdaceGwtb8Zfc8HGNJEqi",
  "key22": "2QZ1hLRLSgZJK6r75cwv2n4Rt4P7nmDXfwHPokt7W52BEYWQkQZqMuSgLRUpX3u6G234K2ENEQyi21urz3R6jb5t",
  "key23": "2eF49jtwJyfZRDTsHpR5YXSPqA2jNHjKeU4B9mwnL65CEibhUJwrea6uZtkWUYyR2jtvj6eEvTaMXvb1PfAZvakg",
  "key24": "hk2ByyXypjNbgPYfyxevgkhwtcu6bQTpUwUB4VM9xG4YNhB1dxUekCXcq23UAdGua594gUkiyTdcBSGEPbU2sk5",
  "key25": "4CaJiJraH6TJ5T3csaSAgRUomaRJqMtQZH3JBnQoMv8to91foa7N8QnTrWfdHtmsTcKqKqM4WRo6deFY4WKyizQR",
  "key26": "EvwpMPX6ji38wrtpSo5WTZxfWpRzvP3LbNijCiBFex8udWf94VQeuNEqxm9tvG2eqKHYm83PoFWN7od6ZGuCrw1",
  "key27": "4rxF4rGUAj7wgbY81oZZ3FY2dex5HpJgxZbNrENbhwtv5isSFiRK6edzi7jDcNRDJLBimJHADnjTFZwnBNPy4bdz",
  "key28": "5PFMttPcmDMxc2qzt8cKXiZURCK7vCVjfkhcF86J2NSUguSTu9yvYH3KeBfNFvBbSNiBokKV98WQgppk2MoHc2rn",
  "key29": "5mnKfxbdo7cdX3Pu1jahSfChhBeezs6s8J2Z1DToxhEn83kaQoaGs8eYZv1uKaU8H5Q7JgYyx79AWn37YZnVa7a8",
  "key30": "3UebsKcjbzQV1JrGjrp7BnNFFUoyUEYAYJNXntUUrvEQJ9Ht5M66VR1Nnzz1te3J5S7vbVfShVxBA9CpeYWgxEdk",
  "key31": "hepnokoA3gfayiyDDAYxvs4wvMLzEzyESfQgqTgzxfMmT5ioj5ekzTkYvXFXY6wWA8w19MbAT5s9PTD8QoKXXkp",
  "key32": "qYFVZbG7ZNkrzzpZMYfLRUGFpQkY7KRpbYaJwdDAnt6hHWmfF5Zk4aSi7LcQbdCi9AFyeMNN7VFECSgUWtRvNZu",
  "key33": "3Bhz5YPZRAm74u9uYnUMK4rQqi13cEmB2Y54m5JorkFoBYwTSdBGk6vKkPthPJvuy55JdCojFU1EoB8x27bDg6Jt",
  "key34": "2wY6tNpU89wN8zk4MD2m4FiK8no5LkUBKycC7un1sm8quiGXBJgLT6MgzUSEf485KxURJrjE8SWEi1yVyNbXnPXA",
  "key35": "4nh2452c3SpiKMHzDi12s6NFQzyGjRCQA8BCZYozc3x43ddRQj4fiRXDThQJo4avmr5KF6dtc1zajtGqvJJwq5Mn",
  "key36": "Qgg8rDaKQW5StiSj8qKbw9xv32rstZ8iFaD8c1L4rFSq8TzW5b2a8xbmFgipTuyWLZ8XatcChTQoiUiQfbYmVdQ",
  "key37": "FVwwckwbCTEFVTUaEHvdvMHSktZetRUG38eeAQY97eEudyJv6kKpenJhTEDsbJ7xTYdUidhnCwiS2Cu79tk3QWJ",
  "key38": "3qfRecQ5zXYeKnvdYRHQJMp1LNAZC2fAKqYgZxmnSVS2yHMJyWx8d7khdwaQTpfdVdEfbjXZJSxtYUmsqtjcihTw",
  "key39": "5ionXKMq7TRZ7D71ssgZrzAKowwp3mcsqYRAgAgdERX4pi1REJLFwBVUb7NTmHqBJsh5Hq1DqaHpjLXFB2wc9A1a",
  "key40": "2Ao8tBV2qJcu7i1FrNx2TA6nKVXJ6iSaUtN4LQCjMYize4iHr4Nos9u7W2cwX4esWb6eg59c8BA91gh51rWYeize"
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
