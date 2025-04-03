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
    "4cZgxBTECwkqJoa8kq17bfZPzRLFHMPrybqLHMRc7Mc2ZC2UJ2jaWUNv7tgNwCaGZQUscPiMXLRRJNp1iQMLuScz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HuYFUEFi81ZXFSMk3ZkEhoNVjaWmFxZq4mdKR4ZLxDM8PwG4eEbgE7dm3WPCeqE4u8QExsLssQUdRcKZnv82PYm",
  "key1": "2YcwL4RN2xmDD8B121moBKhQJpUTZJYJc7StJrJYzapgcyiu3dzqDULifh8mUtLpjzzww4y4GpXRHepgvDrdBmaH",
  "key2": "7ThYgTiGAHC4vP5BdZe141LmahLRyHsR6t5gHAvmLckKmM5DLGVaZ3w4JyEZ6QmFQ6S8e46udTLUrdDkGd8fbgd",
  "key3": "25amyKb2WHmbsK8zoLdHGQRSApVUAQPnaZ7u8RpVLGW65WKbfYn9NDVJJG9JDLCgoqXgRHeHYMdoLQ9p5oy2UFhu",
  "key4": "5WzGVGiXWKzo6SK2GBgP7NwsPcMqP8PzCqNDVKAn2GSTishcTvo6Xwff3hbJ7B8ZvnD3kDsz9gvcnEaDLB8e82sg",
  "key5": "5pm5GZ3g1a3pgujg7vVvg6WCbsqkM1JzETqF7Myge6CbsaEDTzeAUb7e565mNEmMCHDdE3cTV9rUZ2GJiY6AW9ZX",
  "key6": "4L431nAJMHerV2QhjgWmZZGkTwBUviZm7Jae6rAEhBbtzAPQBhqHDCWg8M5526zpgkTL1JTCLvKyrXNZC1YS6dEe",
  "key7": "3fVaSV5HSUP7HtxE333BTi4zt3C5JNZ81ByRq96ykhYtyCTkJEMAdir75D1jbERneCKvNbcgBdNNY8QX62Rj6J6g",
  "key8": "5n3FyNcqi17pk6ULimDvwFuMQgum7UgaETHr3sc1uB7sL11gWR1WbudYa8xL9mJf9KjrmM4wEa3EXQWWWW9TBCf3",
  "key9": "3zgGt25DL99KKFJStMJ2o9EwHreAv7qcPS9kt2aCFDqEm7Wt4zaipKfgTP2xZHXgvtgcgtzsmLQrtb9suypq2ehb",
  "key10": "5KLWvmakRXC27dx8TyHMxQ8RMcawYGKHUXFbDkYQJtCGBMAFvsVs339kt7RXkRC4Zs7iFd2FJJGtp1ECfo6uskWJ",
  "key11": "648EigjvAobMRqQC9pK3NhGL54VVUjxMB4oCpziA6kvxU6nStBhbhzaKmd9pestScGsz7zNdvxMN2frtpMFbpXHD",
  "key12": "2rAdwEzzTsgdFpPkHTKgUMxTkAsHcG6pJhK6Qo4xPDGJwxpN3X6F5y1reLE3Mo6eaREBBd25H5sYP2mspQ5YUkcj",
  "key13": "3k5eUpatafa17bE31gP3T88jKe6d8pSwNkfcK9MduaaSacLwMivimvE8LE7c4em86ona4FcdwY4mkmZcUiGhQatP",
  "key14": "2gj5iVUENwcrrKYfZd2Fyb8F2MVCX9c4FJSQgUAHUTsPUYpTgeKcoGzYWVda8A36v18anbwdGsnvJxw51xraDeGr",
  "key15": "2qnWf1TegZ5Dq7hzgiwPwdppLSTogu11mjnsS1TwcKxtv6r3yKRZ6YST6ey1xxMxny1iSNmvgSu9BYkGG1SGjLtv",
  "key16": "4ZFkhFuCJ4AnmTLpD5f7omKRHfSEZ1yMvDmGdooqZCF7rUcm74xwSdX57Nr8P1N4QpoMvWQ4g3tSduc3qynUBuNt",
  "key17": "2otmGrbqrHJ6aP2fSDWAWVwsfQhGkJXiPDDs4ua8eKGQLXBoNTmpZorjkNvdNGFebj9wx9AEQxfuwAjBzwFBcutB",
  "key18": "34at2DnK9rnzQGo48eHGdVMCRhJeSsXKAUMKjceTLTdtPk3Ntm2YM776k3zqPP9KFt57zUzsfg1qnsBU8fQQ9NMy",
  "key19": "2PzhSvNXun51oBtSdfkJRGx6JfMS3oXy37FuLRby6voTZALQqHvBwP7X7zdi96KHd96jTLFWviaDvcHfRCdvNtxU",
  "key20": "2wQVhxVQWEe1QuKa94GSC81rFPPoy7RjAFDGGpyHg79cCMpNptpAVytiVqZeqb67MsSt4YF4m5MxDzD5iJPZLxL8",
  "key21": "5qDMmJQT5v6WA6ksgj8fSxBmHQVvxDz4E6kUMfcuX5uYUWyz42Dq89JZActAoFCSv6Vej4z9bj9oee2EgyZK3AU3",
  "key22": "44ahKzeH9v7d9MHEzxcE8jxpF9z5MKgEbYbDecdeTvgymrVtskQya2doNS6WBKdQhsibmXeujWH77LhnxSZqWbYn",
  "key23": "392Gin5YP8vKSJ6kJerKNf3vH8CNUi4hi9PDcjNkyeCsFoyiZChwo2PmTvpdhZdo3p7MwNGF43UGwp9yBvF4kpX8",
  "key24": "2fW9nsEuN5CSvYTa95BFYVGfidEYUqz4GaY71eV5nkAMVQcpjxfQQF2owU4UBFtWBWu62Jb4u82amWvDpWgc1amT",
  "key25": "2DyeCkCVVY3Y4HWfsqbWhoNJjCoC9SAW7DJiBG6PqKLeTq18LLgZiJpuPWk3QgeK6QMb6uaDdo3wGAJYqpeoEuYf",
  "key26": "3RUCjnBh9kRAYcjH1wkjUTevD5ARwYo8C8gNrhWM2hx2386p5jcei1D7EG98QHo4QeRSsR8eW55HEDgzh3cnJ1pm",
  "key27": "4DWPUMcRceMAsdwSYqPJEtjVzNY187psMHd6XGfZQjtkiC17xaTCCDt4a5vp2yHXZ3hhK2umV3re5tX1fwPmk1ND",
  "key28": "5Ubc3Qx4YcarELoM6epqvyv1V1Bnnw2Mq8x3upBMSL5iUHU9h44H1STy4uUT3F2Tb3H8i9UbWKf9YMQgH8astAVw",
  "key29": "4n1nkYBT97R4YyyA19gD2caSA7EBXE3QqNnvedkNmeenZdqd47Bf85owhgsp6bmyyJzTeHz4r9G7Nbh1oSxC2JVq",
  "key30": "2ni3EtHTk2orgYx5Q1R8g71zhqz81gJq7B4SouFQTK78sRMfb3uQuW8XLGEtrdFptzds1Tdz3psBYZXRNNNo4t3E",
  "key31": "3Qdx454F1v4trndn34RKdcNeZHdxYMwRoQKLdeVjJBsmVjSPhs9fry7qUPaBG5JSEsg1mojBidqYybNvzcH5isy8",
  "key32": "2ZcWcT4vP59awyddGnbnfba9Ui52euJf1UheTkp66x3wtoZxAm6dbXZPMuLSBDYbn2Dg7b4hiPuxZ6TaXvaTyRg3",
  "key33": "4vU6wbo2QURP2zAWPXZQ98jCqgnvk6Kg4Hd2UZtxuRX5FbZPS6mgbVMjF1WwthNVjAgkBpEKY1UF4MR6gZDRkBwU"
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
