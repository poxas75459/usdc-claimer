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
    "2Dw9d6r7YN5DMYsKetK4ea7NZaX9DSCXZqP9m7MqR1sqPPapDvKDNYH6V5jzKtwGpciZUgAw6MTD5nqXJ5Ui9keN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Byk2ZPfeJwiTGM7tepmQdt1NdAWULovP27fzUs7XozDvpPhsGpcNRRaMKf5o3Q67Qq2j9fd7E5o2QgFRrAtYeBa",
  "key1": "5wu8JnDPbABTKCxGrfWbzHNh2HkwaguppWMgtSCvQAnr9xHqcdXM4zaWWWLcVGGYPbgnVBK5J7rC9greQBpLT98E",
  "key2": "3dstiga4xhDgZ33NedXaHNY8sq5b8qRDQND53wEWg33skiHR1ziEQs3CCHdp74YGi8oWzD4qdEDLaB8YVJWvgBDw",
  "key3": "qL8PrZL5sEm1hswfK31MynJkjWhkDK9vEyFn44jeB7oXG76pmJHoKW8LtzemHNnPUwhPArMRzshoDx4k2M2dxsQ",
  "key4": "4gfonnjCKoEQTtbgDTPZz8rZ39muPSVZqF2tzogTnD8jy1PHupf9dKXuLVj6QJrCNmDawc4BBFNhw61LSfTxTtAq",
  "key5": "yf6aRHUPwyej2nRHXFFCKFMH9uGm53XvWaxMBe1Q3811V9UgD6qgaym9uCW6ZwocfBL6LXdyrZx7yJXnwoFHjkZ",
  "key6": "1u4NHStvyfzSjRMywQWyMZA3mWswjdGqgUUgrDswybxRWdTGzPbkMfmsusq7BrpiCUSTC5XB1CWBqJnywiViv4N",
  "key7": "4fKRneFFgL25mnLJ5YK3bJ73YY3qrcK1vAXH1Nm1trU9e6RabvkisMcp7jQ8JUoeZ6sP5S7UzvWg4CoT9ptiHzYH",
  "key8": "dbdSmgnprRYQLWof3C4rwYBGQZfWiyxMirmF6KsqLQ6ZmLE7EPa7WZzxm2rUADFMwkPxjLHv8QyxM2wCeRHLSyb",
  "key9": "5ff3YDNPt4pdRCg8bdWf1PddbFgN3aHMWxpdQxULMhXPtHMsHHJULT3Vwo3c9bhvSf5qEbaQBAMsidQcj2tiw2eR",
  "key10": "ayNmJNHRBAhQCEN7nQ4TW7rWjwQGpTSVy4KrzcvBRuuJG8eBjQnpsfKWygixsz5ATsdexGQrqYpH79ukkE6YawN",
  "key11": "2uEgnhgE1QzRm56d37dhHUtD4JoKR4q4DFhaXBnDCk3Days8t1q1PUwkh2sHFEcDFqe7jwgWE54eJeiTmaphPqYR",
  "key12": "5VrJh8juooCsRWuAkpGMKDpvVWRdpprK39PRyZuEFXvXtWxASXToMuu4kBeNQWHfR6vsZgcSxh8BHRQusY3ztoH7",
  "key13": "2o8PgpZChdxWWC5nGcGJozftZYgAicBAHnsEdFuxxNigT2nom7yAtJFUJvwTyNrrjq1cU32ApD47tJ1LFbGoABLE",
  "key14": "5wxXALYZj3o7VLHozBeNx8dT2KyErDHFNtZCwCZSH1obTD8LptnGrFoDnyPQ4hrcxuKjtFbVkpyh7MbQ4BemVXmD",
  "key15": "3CZDmPyjtRjd52A3r5t8EJXyixH5aqEMrJWdba9PRHEncxBGpXiqgvMJRViCrffVT4X1TbaHXtfGwCKYJGGAceS",
  "key16": "58HaLsk8bcapNCUkYy5o1RQ6aHKNvfNsYLgaGRZ3Mpg6dZqhGvCmjwdTfMBbMBPfaAQyEQwsYnPByeynUAZfVX6P",
  "key17": "57MmCpNhCoJkQQzpKAFUhdRXXWHEQDYkYERWxP3AUdrP1jgDzk5fYE5qZtuNNG433Kvhc8MqXb5i9hVZWP47qjSj",
  "key18": "67fh3aRqqJhk8BvbvK8PpQ22A5vzUPyBjAtxWXG5PQ2PhcZ2SUeDsef8CJDk4pZJmX3XzrAjN4ocA4W61nVxKfFg",
  "key19": "3T2oM5GdBoRiLPPAqZF8GVzVTekVH5umi1Z5GFBA1souX6Af34RDe9vSfzGqfa3QxaePfq8hye8Vp915FdnV8o1Q",
  "key20": "2ACYxFm3Tdqcnwy8JWg9Hd2HGRYpKq5Laq28t2vXz6gdfYt6EJJfFtHabk8Y9cvqb2ykDBPwKp7ZXpqK4T1Vzyj3",
  "key21": "A9y7wiWoCBffgZWTNT8TAjAMFoaNaN4BKAALPbSCadzAc9jFvwXzZwpejuFFZRqmZW1qgHnSx464PAtxTLZp835",
  "key22": "4F7SbNekpQUCW71PF35PvLkNLbcG39mVzpeQSJj1gPdf15juTDa5UB3J4fm3j5vkpMHT9E8g37Bj6okrPquWUsxU",
  "key23": "3dZypfWkKpGbuteBTyTypTdAFZQaafXbyMoQAAdjenAnRy5knwHyqH6eXr66vpHyoE3sVXSNbR43BYR7p9XmqGfm",
  "key24": "3uaB9hB4JFgywqvFM9xBG5p6rgCbgDNXAibiDhiUvvehhamJBkie6aMnhV4XTDAx5P6Ztv3kaVkii1ZFe7GpYKTe",
  "key25": "42aS6fF4AAKWrYiCfc3NzVRXKemyCW8B1sXgsAN62onk552b1G6gFWXxkntQrGEFUksJiDuv52tLSdV3YYVHUKkB",
  "key26": "2vdED6TGh46Ezcq9MFEXkGUdFMtPPzYVZ6WFudpxsU3Am3MC4rrcMBqWVSypvM1avGXKBUx4uh2UwQBrAmtfbS8o",
  "key27": "4cbaLz2FrTJwGA5c2csV2KYhCz4JkVnqUKKru5S9CDbiLvDXX9zqwWpT68ias21J9GJXa7bexmWhV4UqNyMhRkjC",
  "key28": "vGA1Fn7zwPYgbHNUYZoCTA8LHUNDgMbj8tat6ssCCxznQtPNDFmbgr4GRLjFZXtMUMHtfv1DjHZ6NPEtQ584JAu",
  "key29": "5yCmsf3z8vXBYbGZHLArj4jMBiLPWSB73wWQYT5HQEXSQEHaqaUhf8prcyo1urWbBWzt6NKmxJmpD3PnNhep97wx",
  "key30": "4ZqVZdduo9tWRehS8fKeCEyHu2vZR5YdVCvjgfLdqsyyrjFbNBwTbwfBFmx3iKwmDbyHs8MDznW1ivqYG7x8WaNn",
  "key31": "5jG6XPPDxkDivhqTn9fXdpUgCv1Nvxz2Ea4SCFUQ3D6XhmMoCfsQcsP62UewVbapcs98Xdqg1uL4kBezAKmMxX5p",
  "key32": "3QnWMrA2q3cgEDPn8rdDZ2NoWPz5KtJ3cnpumMogFdjC4giG3kv8pSBMtLP68y1gevo43RtsavvmWUU2ZPSF3beY",
  "key33": "hfEAtNvCToVFaJN2gKa9ZxrrDf2wCRqX713nXS2rqzZYArbFV83r2HaXAkMBsdBKHYGXTeK51BFbGM9dXPpWp58",
  "key34": "fUTKoMq9XaFFcbShYsh2GNSCyhRGrA8umjCw6n9drnpeFt1C5DJAVv2iCL928LXgf2aQuxVQ7VmVU5ozdAtVe8B",
  "key35": "3o6DE1XZhLGkowUyPctEby1n4byQVnP48vgoZaq1GiBXwAM8VSinsgYp7uS4BtTCLrWdsyJFy9UV9vNDgekDVf3Y",
  "key36": "43SpUvUUoCcySdsJfoyXACNbS5McrDGUJy6KPevgWX9ziq3FzLnQR8Sja6hA2YNGHtNJx5Aj5WY9vWc5mkpcMUiN",
  "key37": "3qeCxeGuvAWzqnTndzNL1cicS128Qv5LjPW4kWWws5G57AUMggu2RCrYmvHN7y7VPU7YDPko7V1kVqLpDZ1bMrVx",
  "key38": "2wEcJh8MuavRAc1Y1yV2uhnYT5yVMYvp4zFBGVSyaDeL3MQHnSGXKuVXhFaRQT1HAK9qmycYBUxpMUWc2Div1Uk3"
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
