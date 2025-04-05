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
    "4ZeCfvBedhRHuF9FmXywXRNq8wsVH2sRZ7og7QkPdPLYV9VJ94t3aQkrgNorJQoJU7XYPTmc89qRbni3kRgtAchY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55LCuLif7j8eCZsrHEuWZSiTcoVA1RvSSKkn88xgJxxFu54Zssqws1KHXfx558zicaKTa2bonXHGqosJudxmq996",
  "key1": "3LPCMfdqLJv6japUUr2EYx9RHEx7UhuNNCSYchXGRozEFGzAprHXQwdgnxdVMRAMTeM1xZJrzMLNar2zf8Cz8ouS",
  "key2": "4GvteAHdCbk6ypGsrg7phddFc6eVECeaTwKY3U3zpbpTBjwnbu4vNz8SwDdAUZ59Kd4kMmyP6SgMT1fvprMeKuKG",
  "key3": "4TMjNEJ4J314stT4FVD84Dri5Xf1Z79xccVf3FgxwNX7EZsZm2nThqDq7QXtBPCrJXGhY2yJZ7MESSRNvC9Sdm69",
  "key4": "3EJjTzFSWJLwdCcGJBnzZMMU2n31AJojTar1VS2AAb8RNq9pWFeDYdSpsEMnnbD2y8LCHQiDBXbtTKcWHDazou16",
  "key5": "533vP1s7uqGANpsckUcoR7xMJWVMJBYpPrsN8yGFZYEkewsjCQMEsyJSS9QCU9SfNXLdTqoJmQD1BMAikPRr31ZA",
  "key6": "isNwCgec876S4TgUZQoQJborYrPzBZXSzQfamfdGRcuXN96Fq4wSUsJ7vHZAt7313YbEyaT7nKLFFZDj5y4N35T",
  "key7": "4fBPPMqMqeH3bJX6NskH9NnVVLWv3wv5WkrVjWqqoiAkob33y5xXAUGhgh3gun6Hkugfii83FdFnnecrMB2cnF71",
  "key8": "5uy9DKswxmApiyHoubQC9QNuoQ4WisGBNfmHD2MZHtGmRvW7j58q1yeSCwVDGMwgwSBMGsLrn6wZ1P42QRUfrA2h",
  "key9": "zB3xmYQ3AnqDGqsoZS44VX6eB7MMbk9yWTbchE4B9BphqxWnpkNZQaX7wESdfDjefcSDkR2MpEL3oCkxn8C2FYu",
  "key10": "5yhXtDgeBj5P5FbH3ncwTbHjv2V6iirgMPyeNJJnYFib9RZauvxVFJ9DFDVQzTzkSfAvVfuJRR64JBhX1iyDmmyR",
  "key11": "5zvjzWfSZ7V6uCN1bFmVyKruDdPHM5ThArMterJ8D9HXuwJyF5C21msUpo4fRJuoCgypiaYBWdeLndfxWKscqq4d",
  "key12": "2mNLnq5rV9AaChDY4YZQJLZP7DMpdB1R2XTozL2TbdfmXNCe4An1T5CcUPh1iaYcS1g2fxqvBfgaPthzByF7irvB",
  "key13": "dK3pmPN7B9pBCfiCC9AxNVJDXiwNPA5ozwqvdwEKUjpDKgx9ptpZxLUAYi6tH4jxFimZbkjKgKdCn8TBoR7QWin",
  "key14": "63ZUfVisxmYRhP7s1hhLvxe8FwBnEyt8hfD6tYPNVVRPPEhFipsz2GEQbiLJkqJFyRZonJDTefAcAwgshrMpiRqq",
  "key15": "5Q13HqU8U6QAUgQ4JGYZw4gZGSSNTLKGJGHo5GLwJioWymH8VzQeeJxzasWkt5gKxCECtorEugN1P1LjvVEDB6Tx",
  "key16": "4Eayy7nyMRduUBmqyHh2UhXPMHkfMyLdvN2nfPjMLrXppyDVz9G7MuGRuYkyfsFADzJcdibDkNoTopcb8F2habbF",
  "key17": "52u8AVYZ5tNafBo75VNY6jqjUSB5jUFSn2oCaqjAmtHPmMhqrwg9WNgbqEaycdLQUMXWCdSjWd8M3GKJ8SbJZr66",
  "key18": "2rL7FTc4VvUx2wxRh9TYA4ZLbjJJxGbhuj4MfdgWzbcXndnySgrKvLEkJwQqtsBkY7nowmgGkpF9atXpjoSQcEbb",
  "key19": "4jAU637f2oqqosemHM8ixMz5hE1wqMcjCmPS81esRo5D3W8QTVHNjL8DPSbBzs1q4W1c8g5anmFxkNa5rCwNvi8o",
  "key20": "62DxmVX4NbrPfdf2TxDvDzajm4bn1JrJdortUL1ShJTMVPrYNKc4ukyaEKnRqFN2zj8vqDh2opNsLZmR9xteD3af",
  "key21": "5r5MZqHWg4FRyLdmP7eAWv5hTdNULnAy4JowQMe4t3nSBFUapjNQZ61X1WNXuEByjGngydo8CVMcD71x5vU1rEQe",
  "key22": "5uaowT7vBibZBnx6frgw5nTcZytxcCDcZ1cX69Y1f5r4ncX54JijzpvepobSHR4ERsWsUq9vKcVjsXfNr31Fb8wf",
  "key23": "sTuYcwjJcS7ywy1i9L3A9Z6hchkzSJKZDp3ZHVF829pFXDei2rdg5UbCRaoWMYYw3uaUc6GWUS7qH3asQDgWE6f",
  "key24": "4eKD9Zhs81SSN6vtDB5vhaTth8iFbVjvqkM5HBYMFWJmGQzc79VtMUpp851nBkeJLGJE2Wp7bVB7do8YKghv2uRw",
  "key25": "MZL95c6H5ZmftMkHfrccQ7uiy6cpW9qrFQfvJw2WhBUzLu4wYYuD1ANbRsL6MgMDyoAspfSa8iQaNVSXVtWJGCa",
  "key26": "2bezvX3oD6CuLUhiethj26YPEk7SyKQeM7WbgDSjxpawGpXxXBw3nMfBn8umgBDgo4hWbS1yKSt2tq9tmHLNbau6",
  "key27": "4A2n3BZUSPatgYoDimavogEMZViTe8ztLFXKhq4YEWfgh8EUSzZhU8znq4PNJS59hVrADrQtZEfJE6yHS6PLs6sU",
  "key28": "iPBvv1bucgJkAZjZHCkCoG43etRhnoaVSNCRm6dW8x3H85aXTJtQ1FrSEBzPrbK3DfveBoq2JSGbMSb2t3ZyGur",
  "key29": "2bGtP14PZBi5zuy2JHUCLLeiBfZ2wd7gJfUWf9vcQfZJrf9CXxyAZN6ztc6aVYKwG9A2QnmWc6AqVwPDbZgTPyEi",
  "key30": "27qaQPW9gH4hdmt5691gKWhasJMK9X5VfAZ1yQKK8K2ikjaX3ipgEYdBmDyEd1kgi8hXDEhp31LYxS2WHiGSPSUx",
  "key31": "3XXY9miq7YYGfxKLanKAk4e2x1X7bYqzrHHcpTCVz6nD16QFKkaJXQyA2nMoUvcQ29ZHoV5dgoFLKjZrRUz3siW4",
  "key32": "5znbhPa8igkE67f4xsefECFixfQsfBsnQGA65nqtkmRhVr8YazdhegJ8gbQSN2M2YtFNr4iTvvVaQJ3XbRMQtc4o",
  "key33": "5Bt8BVWHVWU8tGNpGg3WKWqQN92mtE9gsrBeydjoxnjcEVEuSN7CboLp5xTXoWsXQhXwyi9DrRzCW86ZY6fr9rKL",
  "key34": "36Y4EBkacCBFwTKza6K6jUsekGC2b6Y7uYziLqYUfkQrHABizR7HMFdougYQWKi1jXMH5FD4K2K9LyugVPv9TVGf",
  "key35": "5WkjtgiJCTyP8qttD44j6NFBJuy6BSQsyRAEfueLFHbz6bJMM8W2AoWd9fdhZjcA9VULC5JoQpcT8exQLHDPyhUg",
  "key36": "3BPQs3BVUpfsvYbXEnex1cyLujcTJJFhQs6xoX4ubaXwMaj6bPBipNz7vvgukGpXAq7aWqP12Bxj8Vr7HdUeLjMU",
  "key37": "3dVnAkTcm1Aaq9xZWP2mYNDdjiMsNwafYNw3E4i7wisBRw1qaZzhnX2F6BXi4nJUweXNTCSx7s3tseYVFwACHcrP",
  "key38": "5DzMw4nqPcy7wbFmsc75DU19bzSuXhPbFQQBpjSTyhtqGdvxfUqiK7vAhmBcgsYjfiBZmmBM1C99tfeviTHW7KA8"
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
