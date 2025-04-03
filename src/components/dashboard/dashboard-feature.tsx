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
    "HBgbUrn8vaovAijAXrGgh3zZkLcnq7sDi4EhFNjAu1GZY4gLMu2SQzmL1hUypopbQJDoCu9skYCzg2RmHuZ8mu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nxmsSQzqV4cNKmdWfpcCwb2KPM6yHEjCzMtHPhczqrrKL1fFCWNsECAugQb6upKquUrJ8Y4mnfCisTUiiydZEUZ",
  "key1": "3zwYjkDTwm9U25a8t6HPx3uwYMrsdVEjg28TyDd33JmFgipXAeqbNpXk1C3jcwcmCPHBARhAkAhjo4xp4h1Qtt5e",
  "key2": "2SgamANvV7pSQHxLi5Rxcj3jXVTSFpUvjvPCyfRZhe91tare3GyqYW1kGguFikA6ZYg3bEvehnEVcHKrjMwKy9im",
  "key3": "263d6ziJT1dNx7VsdJYzjEwn8wSkLJxNAdAWp496ycdxhmysK71hf3msMQPWTvGvwPxek3hPdeHVGthsDz69NC5E",
  "key4": "5AopJehnhddGUQJvNwYKcQB4nQ14Qr3v7xE3izNiXkXPgXx8dgxn95iU9W3a5SMH3teL3mMFkfErJChnjjSKJ4ax",
  "key5": "2HH68rmdnAWnHHAu8mLpUWh1eqYLdNVnHDmNBenJ3oH2ruuVyCCbtzM7Qv6fk5wFep7AEqDSnqaDSDY5LA2vQ9p9",
  "key6": "59qcu3ZV795LGEsPpqC4ermKMa8z61D4Agxz48ekntdsf4ogNgXYQCp7172cZtbEr3JaxFgZ3QYVVzDuQYmDz8CR",
  "key7": "297fA3WJkuNj3TasuDYf2TrQkQ7pEmZ8jaNLMdcwRYReVkvGSkxpX4xaGcU6GS7LYQBZjaKe8DMnpmUZKqsTMrsq",
  "key8": "3hps9iFQXChoN8FCpaskojjihuXVTjMLpR2E1ENK3pquHxKigasy6DJpq1CRt5upSMXUmCFT5AmHYezYmHvcYsPJ",
  "key9": "3REjDCenPUBrtohWRb7KCUWsBi9LzDdEhfWuX5wRSFZ2cxqDJoZLapVNqvS8VbQYbjK3CfvFFHCmn4vEtsVe1CbB",
  "key10": "2agWHxzSKJiMAt93vHXrPCabfZm39ZiiVD9BiX6u9puoNQ31EZPQFNfA1TUGHcp2gyVF7Tp4ebC31KacUrjNFWc7",
  "key11": "2CQvkJusQXZCvp16Z4sQKyQjuEydng8Q3EEBZe12RQ5MjtvefAGLghEqBc5aURvaE6fXQ6ZNz4PM4N2vcgMzL8dH",
  "key12": "5J4KD49deYLECFBytYfZE4kG5sCXfSjo4zRafifSLHPo7qTZHF7W5iLYq68c9AoGTseyBLRWUdFFa8ZUiWD3aJNW",
  "key13": "2Tbj16tJp7igrDQXZXAdYZFoKXk2G3JAG7zGnbWamxdnA76NNuvVq2FNTs8rhdrkuVqWHh8EkrEsLRKzZ76rZFDZ",
  "key14": "65nYrE88X44r9aZMFhL9jCBrxKAoTtkcXChAsxkiYMWrZ5jrp1a1LXoLjaihgdg8hiS4XqkieiaVQ6r2K8T4XBjT",
  "key15": "2aEg82iZ8gEMURSejhRbKN55kyREZRdSzYaKFMSYUfYXYADzsMRBQrEoHsAVtU7hzMs67t7VdufwuAXqFuukgHvV",
  "key16": "zXDtnVD7h3ZRze4q86MFtMeZeLKQcvVmqCKYsRXykXtd68dupKUeVi3TgLvcgFaQ93r121Lady3672cCrqAR5NU",
  "key17": "61UtBjYQ1KpL9yAbbDKtWQSJ9HnUPv7W85F8XiQ53x8FN12X8zwbbRafhnxPzcdXwFVyoLX2yE9CEyzsWtiDvSdK",
  "key18": "5ucjXHMBwp4nx7PqoHELq87SX5XQhokWGZMYgwLqUxxRU4RKTB4exuBem3njKg5NrCjn1G5DvARw7CFNi1opG1de",
  "key19": "4D14UjkL6H493htmgZcbHyiBATCFQJqmxPmJyKeKvX1wgr4WkjVFpYpXJNNbjyqbARQVEkWxyNt6jPFdEAHWdxYK",
  "key20": "5sjUubF8rNxUba4EqwhfpnrZfRnZcpMbQN7iqvkfuN9GCHZwySbZJrKHDe2SZHuvnKccWC1Rm3N2Guj4vsJoZRyZ",
  "key21": "53Jz5GGY8GokVb3KVmrspeRYgRWY1CkAx9eQT3dKgU6oypKtw9nhTy1fTHhvpKochBM7mYcmLuvUbMADFSXZFiwE",
  "key22": "HUaEAq2MprAKc6pWDPnaZdGUH1ypZ1tMPEvoHgK4bdW7LZtpaWk9B5aPbXXZTV3ihv5FRCGWppw9CNRg3HqXiaR",
  "key23": "3vtVBsWp8CK5ZQSc9j9CCQBg8d3SFpGEdbYqXs8obh5oggiyEuujxkLLe6v6hamKRpo5NViAfG39B6fzbcwnPiz7",
  "key24": "5tZ2KuBTJXTK2RdAYNpvCobgjHcYxRGGZ85CheKVPeZ36Chj5f9dJYgJqb2RQCqT9FizMKHk1Xqu62VLemxHJGrc",
  "key25": "5f76gpAG641QGnuCzRPtL8Pbeou4QhPDJcdkudM9JDDX7xRir9HDzg1wY7KBs4smLXmbapHY34G2d1hpmreG8sCi",
  "key26": "56GEu2esX4DLA7iBRoNknY4SJx85niHLfGgwcHdoi7B7kf5UDowG6r1NMbFj6cvad4qjKKDGwYzJJTqsVkwVMu52",
  "key27": "3SJSwt2jb5gJFB1pyN8f4YtGa2PtmyteXrTjo5aQVukRBW8QSmbhwzoNGxuEGwREjfoWxYWyxxrcDPJUDsxHf2UE",
  "key28": "3n6j9kDBLUbQMgS8KXo5zvxJ67CEipvXJnrdnZqXPXDH6jtxVrJWhNMp9DJsdbmjAh3j3iEMLzZTFAZp69SVWC1S",
  "key29": "3MKiMytQA11y1Rs2Pb29uhAYccpd2tmraNgS9pBXWqMKDXKJTjNMieojCxkARkPU9Y1LPFLiG7BXTrrrFjFvrtuk",
  "key30": "3qs4eHFYp4ByTET7y6GYQJLG4kEWK82pwBe5tGiRcgTKTZdSL7KtRdxnV7b22sPAtjEgzw9RsGJKT1bKumwSkHtX",
  "key31": "3qN2mxuNwizMtujN1Lty5X7px8tiz4pwTdvxehtKm8BG4Ddv9RGmNphnYzQdJbzpZ2euD4H63nUsLN7PnEjNQHSx",
  "key32": "45Px9bSe92wgC7H1ooSThLvZgYMm1e1zJNwpx626KZdDMJoXbq3syzZLY9pH8QvYhBLYZ9t1M5BpFndDkhLf9Ke6",
  "key33": "3Sgng8CR3LUNTGhazy1yNWiYTVWSXWbN8s76747sDL2S3Eee6wNVzUSTJBPNuKVAHG91C62HjwRAeT53Y4M9FfXD",
  "key34": "4juq3ScKWnzmCd5nyszVAfh72sqDVbNcXyN2wiaWyb39yrRLMyUc9YM1X8vgdjTxA4uReZ36Mgr9sTK61ZjRu4Fi",
  "key35": "2PgHqnPCGYAdyftWw477twUbre7mZsvPTBUgSQQ67ugVjVTmQbeHf3p9wccNahbggwRYnR13vmzJ9tkdkmAceJ8f",
  "key36": "4vR4t8SnuxetrbypY6xPjWubMoBxaUM1sjmMZmcXsDDJ8yQWPQuX94cBBg8xH6rgd67mQ3GmVWpzWh52LGFhx6pL",
  "key37": "55Sr7o7i99W7Xb8EcgEaAZLRaUdLh5qF5buxdL6Uswr9jjdrQANMEEYzr2ESB6hZFkG4sPihgxXjJ7ZA25vK4yxF"
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
