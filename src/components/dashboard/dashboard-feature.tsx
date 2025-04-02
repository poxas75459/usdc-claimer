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
    "66ctxTmXBzFDdMwxegJB6nZ2XqhSCbzHr3NuCM6TQp1yw6p6s6Dk4S3wn7BxGJ5toMDZLHTHH7rm5mvpKzFtH859"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mueeAn3dT6bQFgngtRfH44s9kBFth65xtopBhc6ziCAcu9uZ5qCAxu5Qggd53kwwqVLbf8pb6WdX2ti19BNdSSj",
  "key1": "WyTH8fHCyXNvtaRK78DrGT48SbwGeDMJ1Y8HTpmRn3PE9LKsZk2Pv2VQY71JevmU5WmjgvnA6A2qbvrCBufLEBj",
  "key2": "2ZSU8gi24pkj5ajKRYqmT1k1P4WMj2V1w6JTovjxzM84PqpVFEw4JtAbgFHceNL2eGxR6XeJH5R9dh2VMpobBBZJ",
  "key3": "3P8zxYpw9EkDqCD4ixkmHP6sgxTSRYRHvcfH9ey1QbLtBCytMZk6oFu1Dh95BkeiGrj6mRBnYduvEecAYK4nxJRq",
  "key4": "31rjpimygqagZeMwB5L1dWaVFo9ms4BnLBNjGk3NDubiEKh29YAyxd1R12KhwVJsBJHVtQ8oUa8cg2c7xKaPzqVW",
  "key5": "34ehJiSQ8JXsVoG7Wnr4nkxsf9VTnnbuZfDdLg7zJaYCZ3aVH7wFNrhsEmJMhYqDFXWFb7PrcbiRcHSqAcTZyQ46",
  "key6": "5CUyra6VN2PN3Dd4yC4AxJ3Zh4G82XJ2VoPmmn9XzCzAWiqBQei8bP791AQ7nLNM4sFMuAZj956epkxJD3Y8bFG9",
  "key7": "4xpdyooo1hPyRrZoVK7SKTGmNQMy97LmxwQFYYG2HsZFcUchwcv6qVLUArRqxwkvQyzPUTwrgJCNkwygHSE8AjPP",
  "key8": "sThoKpEuP6PayYBoazXTf2M2MdC9GmW5ZnjhKAgUHJ5QCETi7Rmqi5PQNFajL1HRB6Amgoa7eEC9gCpmwrUZ44j",
  "key9": "K3Cj6Jo5VxMghR889B9pQtLuX63ZQ9UoPaXsLYniTVfAUgaLwyXcLXo5Kxga7qSxmB5iUEyXvbPd31zkEAfrkpQ",
  "key10": "4bDQ3WBgfm7sVUoAjasNjsf2pvH9SiiDQ5DRk7uZwmoWDZYe7xB26Qiiz8vDKrkUoTeFRS2SaHT45nswGSFLBmKy",
  "key11": "4r9onmFxGu4wTQUq8UKqE6HGQUCJXsBSx7HmqJWfeVayPadQ1a4rkB4rYobzDEPHu2nFuYwGo3vsZLo66Ld3wrib",
  "key12": "4i3SwmjvWiim4Ti8FGAYkA4xNPVLWqpKg43fHwwYLDAXhPLCR6vmyu55csyuQRbJMvPoSGh23hCappVgiSiDzsf8",
  "key13": "467suGFAhRXxF4vqqYtepwpqCLJDETfALCbW6BxdqHYhYohw7mfBbysHbMXM4zvHnC3pLjNCsotu64WjMSKops3F",
  "key14": "QpiQAcFWz1FFmTM2DxWLLcbuzKzoBowLr9iHKyNBFuZuS2DjsePNLC2dTunKf4jhGHugWzEFi3XnmzdA22ZEtur",
  "key15": "4o97fszFMRcCuTmWuCA8QxeP5kgb1EqYZTfXYPs3sA7xg78tEfseDzPrxv6Ni8aNVkD9xratNCwD8Knk3qYcqy75",
  "key16": "42AFGCi7TCxJ1b2yRSGwyuLcSoFnLHyksTd45VuHcFRzUy1jxCwMCswjWSvfJ9RcgGP4Ty645d44uju6Gy51Zvyq",
  "key17": "5x1iTpEcFuLBgQR8aaAC3EyWVSkavdwyPzYHBVAKt9dKJhu8Fj8mPw2U5awyjwrgN2a2NEBrVkb4ofX7RpVcegnx",
  "key18": "3EtMCQcxW5H8NksTcwHk5DGaxDy65oVY8CByiNC4g4e5hdcbQfUZPoM2HGgWSGxJRA4XY854gq2S32V7MNcxAvVp",
  "key19": "4zAGigY5gjPUPtH8DNnkKFi8HUfFCXsQre3Wb7tFVHXz42jLkd6xVT68QpV7kgQzLCuaS8XdZVveHaYcLKRyLmQx",
  "key20": "41omNZi9y9M3Qw8f665AU7UHNDMtYRxa2rVk3sLtFJeVzHz3mU8rvswJcGMPHutBsBZvKThTuPpJiCm2CLiuuia6",
  "key21": "2NRMDmXsEe5tR5wKq44kXWu9aihJJU92ujtoXtHT5HyVmvuQC7yx34z557XUrraBeWrf1fV8Vr7u2pnh7F5WQ3Ri",
  "key22": "5v3PqKLn7qSDXk1n4MkcAhardXiqHCisy6Ze3YxoPPR6T2YVKhFjopvhA6BdJwaZ2AKDkW46caCai4gLAKMMcAyQ",
  "key23": "ymhEPuMfa1oZQpK3SXXFUKnU1VtsQShGThZ94j4n4qaCnn7H1otP1PMhUgVB6dZrYgd3bEWqTDe85qrMPcRYwrj",
  "key24": "4Q9tuUUVGjsNu827FMDiidAvSHKYvAGPK6gL6JmTHNhCRfJmrZjc4Qx6rLLWfKaJt7cBptrYZwTQs5gExv7oyz65",
  "key25": "5mMJ69ypG8Le8VZGHoUdjMuyhL7ST4hexZdLFsd5c8Bq4VojrJGpdnWN4uqqBjURLgxFE3nBVSmC23UQNVzJTovx",
  "key26": "3X3Z91ChxfpN43RLfsCJd7iLRgW5K1e57YPv5DW9B4RHzYpZPpPp7ubsBddnkr2YgjftpikPXT5xqYNi2Aok3qq9",
  "key27": "5fFSXwuVoVj9oRvr69MqVmPDWWRArG1k5rYSy15ePhWTPoM9vs1pMVB5GH9DkcQ6NDnpPuHLzdpFNMAGYKfLVToX",
  "key28": "4FyU6fRJy6DE1MNusC64i9WQKfYDq5jFAG9UtMjwkdPuxSnfYzr1BYKxamzfTcoKqzmAokTMxzFm7xdE7KdG95Vg",
  "key29": "4CvcyJ22FszxGh8QSbAMNmJbw6vY5a4veSa7mGgGp3m2QaSCWYq4BatsQwD97fpVT5qyMX82BEwmxQ9XPQaJ8hWR",
  "key30": "4gFvJH9LaDyGwVW76nzp67BNBn7fJT7y7P19DkvBPjQoD9qFcRQcoGbzKLAWQbneYoW7q9MLHHsDHf4HEsR8pyxC",
  "key31": "FmKFkufcJCK41azh8bow2fJaiZ2TS7M6ZpE9zH3pwK2JDur2GYK8rApsX7b4ZhpMPK2zcQJPvj3yXm51irDKw2W",
  "key32": "59Zgkk9JNQPEoSHCwSk8zqx1uYXv8JwhhuZRLPcRedYyHaUKGvTsbxJC6aLSZwL3jAb19RtqVdcYH7P1Hsijv1V6",
  "key33": "2wZ4Wc85A9apiTDAzNHLWwRfpXXtyjb4FX8osZRR1fHm1A9RH4LfWEdjFRoX2LodKH7x19RFfwgHoxtfz947VYWv",
  "key34": "beJbTHR5n7vrJgFMNW7zaRLCpuneAxGt6P1CNCoSe7gWWpnS7ypBfh4mmGCko5yDz2DVVwBmCFpegpHibEJLgCi",
  "key35": "2zczgEtnDx32zCSz9Mrz9hNiB2gMgLVaAWUafpABBvtainYFVfSFGodwHZRPyeBX3R3iwQXoxF1bFT2wpJSopxDg",
  "key36": "4sbpZZqzWKAPvmeibwnjzF3JGknkQoouFq45FrwtaehnCPpyoCBRC1vGKPjhEsjb2w8kMad5o1o6rrBAurGghHME",
  "key37": "1agLEpSGtUVY84eXW7SN21wYpHUCfLhawD8DRwGpu98KDoS6uVhr5RJxE5hjFJrUoeDARPZHrKELFhUnJQY2xHH",
  "key38": "3anLnx2CXEV3BQuEeaxyioB5Zb5Tgxp7AvYENFuSxRwuBWD6QdS38Gqs5zzQxFy63DyRAq3DDhigq68Me8nF8vTL",
  "key39": "5Q3UF1FQrZdb9dy3939anb8GRjSGhXY8nzXByGFH9T4F8SzPX8KZj7pfcH5j4JVqGxyMkPMfJXW82JyFBGDEiXBg",
  "key40": "4hZ6Xo79tgbLZbok5VCrh7UFyQWmW9yRnntQRavbkM4BbCtN3rqFrKVMpyrCRe8xmozs7WrYtKb9V4jGPzQxb9Ec",
  "key41": "5TcuVnaBEu4yyjF4AG9C6Lp5qd2tMenjRatTrMv5aQr5TyWSBWxZT29k7cGpBaKtGwCaCMrJ37ypDtMqspEwBQu8",
  "key42": "2Zaxtb42gfDXDQSEEZHBcccHemz1FsZcWecYEkv6XAMmx4kLyfgeEqrpoE4mcFBsGwVxeEFMufDrD6Xw9RCEdjA5",
  "key43": "3ziDBxAvxk9ZyYHiodVJvcysWHXcCaPADZYdYYuDE8eZhvnEGdBaoWm47zkQbPZ5z7zwJX3tXU5GL2kGY8GiZ18H"
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
