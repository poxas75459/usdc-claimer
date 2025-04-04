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
    "uEiX3X594KWt1sQUewaWDNev8fLe18R5LN5TiHE1QKeXcCiq3Y8dSgRNYAfxfngwyAhMxAtVj7zXkBVZTbLwX2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QsMaeayYTuyqFd96ffbhmp7ec46KMac3txJ6di87HaDhmQN4XcUTS5BeGvnYr3vAF6kgQUGwCVTp8APhTMxKFnn",
  "key1": "faev5ozmH6QpUUTYAnaoyx6FPSHybzPUwfFvBkvmj4X9U5TAaK6p9yRBWUPdtqGucHft9eMbnD8hKXJCjVfJzMM",
  "key2": "4Vw64f4wJvngzQn9GafMR8LoSAARoUrfVeyzQWmn3mbrZRQypejgkxxVUiRVQBjptZAyNf1aDMtoh9cBLrmWjkKf",
  "key3": "44t92iXjHPTJyt5k15wRzN5Kcv67DiBjWeGjWCkRsxuUXU7D7ARYnJxBBY41KS3EusKiXNa6c9DUNtVN5Cx1WB8i",
  "key4": "2q47PS4uahHszLPeRbhGLbN8tpmudxR4fZSZFs3ZZZtPv3RxBpg5VLundZW4GBkGx7i1RhdQvNP2Vi6JnZri27nF",
  "key5": "3pLg5FeWRtMUr7ZPeWmqGaDqsKt8bytVBszsdx6xF2cZ3dSUmBxtvLwq7zGEfiQxGKpEMN7V5rBkbyjCM5wFD26k",
  "key6": "4JAuNUkd2WBNTjAahyam5iBcNnxSeB9wYW4o46Ub4X5Q1FdqS6ZxM8tgjNhvXcdaF9iRpffBSMhLDTDi9RaUo178",
  "key7": "4UvZXZETuEdb29cUBH5mVTCvRSXAra14t4B4m2d35ELpk2HfpBkN7MJtxBBs9WVeYipgLirYAm6MBfMs4QXtZQbZ",
  "key8": "2MnBsP1BQ8KWHVWq2doqDhaFAMnro6wjNpdRVhSyEG2xf94u74uPrdc5vRyExa3oRdqbf4bDjYyBCXyHDkxPSWWh",
  "key9": "4jXxVPh3xoFMBsV9pPHWvxfMzMWkj6GCPeQmNbnACwCtrX8Qu5b6pQyzSK2h5BB1yV7aXy5Yy6hbx1XVh6HCLRGb",
  "key10": "UUdsVdLoABcC1oKLPJjZ9b714dZYj3bdZsTEsp9TGstXrk4rWQN4vT1BT3g9BdTgRQgnRhyYzQZkBHHtrmRkPEH",
  "key11": "2xaet6EmfRcRUTYjfCDgkfkM7dXrqoAP13V7ea9TPXwg3CsusF8AYpoM7S9Nw5R4d1PsNtMwJ6y5drU79QqbQGQy",
  "key12": "3Fey3zaUBPZVryxYHSJEtt39soJE1hNAw8ZHqRSJmh5fFnAPyozX3RSKGKzEYkvANFqJK3mAuMkrbesHP1kD7Crt",
  "key13": "2mx5JCCp528GjLsrNDuuPb8baAXj7wcHpnbj42mxqP3PjveJrUQCtFzgCqN9CmMnM3p7zk4baNhc1c8AmuPvPnyD",
  "key14": "xjJdW6FXT6UMAMfG8SpUTvs6ys3sVNEF4avMiZE51PUwHbdbi6SfNo7sdZwiczj3KZTokyeQZunZs1aGGzGwpV2",
  "key15": "2rxTxX5tbpC3cf2LBh2hZVbd3NpMvxJzZkexCP7WBZm3Tw9uE1h3hLbJPkGqTTPRtkZygfKxjeyoj4HeJ8NhPv7U",
  "key16": "4tFa3PDVaEnETw7ryaFtUdRszxMVTEizP9qU2NGosjY9je6bvzv6CioQ7CEGDvNeUE8ve5yono8mYY98LfrwQpBj",
  "key17": "5Pjj26wrPWvh7SHwZJvKCh7m32pwT6q6vD22gHoky9vPJFou6JH7UNHkSfGSAHC12GStqdhCACvuK7Swbkv15Di4",
  "key18": "uY7jNQSxMwSZcsFG7VcFwXQ3QPfHj8ds1reo1bg3sfkWUxzXD2vvwMxdHre4WpQnhcfpj9fiZPe8y8KTPFd4QQb",
  "key19": "2XekqooxsxdxZv4bRcUfVADsGgBcEh82XC5fXHf5dQwmqiLLu2kmxnSVDDMbcC9MnL1ZLATpp1zrZANTX514mh4r",
  "key20": "Q3r8S1SJnjzDR5jkuTuj96QA3MM8LPNgdKKuGHArEGtiMRzMyLAjrQhV1wRrr6H7M58tX5B2m2ujcEKwdnnQmDT",
  "key21": "4zQ69u1HQB6L9VtYNutdHRNxmpjVU3Cay1KU6j2pxLNYur6sPjrzHZ2a6uXDfJw1tdf11vpk91U3Wbs9M6oGFdFm",
  "key22": "Vo57cmobkGGBBST5jAs6fbazAe6UVCdSL7mdu9g1yGdBUwdRgpQY6thxH89dDxkR1WToJPXAKYx42DvkZ37Udj3",
  "key23": "5AvNcteuFyEvEMiqtZYALVj8hKyLcrcCR7UP4fh3iWXcHjakcXt824o3wHTTCTSYNekQJkYz1Xc3RYxTJPyTNjDu",
  "key24": "4p6mtudhC2o9UdRkC1fPvf8N1ZrkPqPM4jJtp3e56Z8t95xpYqsc13KYR3BS3EgCFj6ynXHnAMGdXqXPPbfZTzUk",
  "key25": "4374EDUCUTMHGBTVpPhAGHZR7hhPbhioTNgVcMgpturRM7ue259RVoeVVJCE9MbA2WVGFcSbNxv8AYcWoeQayoyT",
  "key26": "xkTU8ADQwtvuaCiN7hqXfn9aFPaFjHW1aZDgmAQJG4BoLHCA7rK4JHcp5Zob2RKorTWTdjWEBam3UHyscpgXSJw",
  "key27": "3M7pr6UZp7KptQ37Kt6LXJ3ng2U4JmBqySmUSuuxtyQBB2VddEpjLu7yNeU7afaxDyxjcnXvvHDaRoKJ4Ts2Ui1X",
  "key28": "RwWzWGX6NVsVwHuonniJTXFeFPHf6n8E1wjR4qBc7ojNiieiwbZuREqgLEvhty9KHNuyeRAgZkJdfmyUhPMBMTK",
  "key29": "549dJdVq2P4Jcvd6dC84YWt7XLa7yFjJHcjQGxw1BoFksBJxxumNbxcd3FhrrHY6nHwyn2UofVWZveccr853Ayno",
  "key30": "4KfrjYPQaTF2mAQYqyKpdYrXKVfS8oUxEi6Gsf3ddd5tPsrMfwfUL4jLPYZDXHZAKWKsnS3ueF2Tn6qummMG4ncf",
  "key31": "jPHxpDTChRRyX46XNknTZpDfKBgRSxtD8UZSFa3tXdi52Ub44UcKJjEZz3CjWy5ND4Wvnq5XGkN4Z4EuHJcLLFF",
  "key32": "4gsPZUJWEwK85NuMsq9wucGANS3maAieyMQ75Q1Jxj9pt4zqc22jvuj4XqXVMEQpYfBzPivbmJxw13DSD9sHbHX3",
  "key33": "4LbJVyEZjv3zuiN7uRRC3g5HKk6JLJH33EddTCuawf2SJTzDCMq5VDZY59iZKztDBV2nheGqXEQKNDxTc5uvcngZ",
  "key34": "4aovrFcqWhLAa1MC3Y5U446DkXf88Q949DQ4XdTctFCQxgy5vz5PC2zXae8HtX93MY6LyLDA5HGCrt1x6S27v6SK",
  "key35": "JW9ADyUis7hawUgQ88t83tyD6ovYPfa6VWoKs6Vk73Bc7dWez9RcFkqLUqQ1SBmS6B168j8i9fEw2vHZxdxUuKR",
  "key36": "3pHj5pWFvVsMYcZ66VYWUECgHR7GsTKv7567okVm3nnQ94nTz4UvjnoGMUkYam7dPKE5vN7Lbjfr4QQV9f8PPL67",
  "key37": "4Pst9Pjx3do2KQS1S5Bxz9kyyJdr7NJZgcCCsKqof8DuinWVWEJzVXR87j5WFKut5nJN8KU7B5PCBpvFGikM1J4U"
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
