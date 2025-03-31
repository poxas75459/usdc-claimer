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
    "4XHy1td56oJnGekAuwXM8eTQREoxHUt9v7W85BMYdoH8QpiwmBKBLqbFZDTRKSaCQYK4wAZyuUpQE3eG27Q5zR8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21JHLHtwBpMgmTegJonbMXsTwgvJ6GRHthonPEUJvDaFKhtpMpF9k2r5LvZAf2n2TN9qVJpsY2QbgwnUeBukuj24",
  "key1": "5JhNL9jz4gGMX5e34tPDYhtK9UAat8YaBn7SCB6qJhLpJ7tANeo6G4TWnjMqTXnGNtZrhsthPECo2FHCAzSRxuPm",
  "key2": "yt7FAZUjqguy9tF6bA29hsrqnUjTE1qBjTgJvPzpy6FuP7Dg3kJvXDkXksRqjnzHa8TnoaiT4TEuL7srLKcgtLw",
  "key3": "4vLeHeZ7gL9Wujjuna4dKgvHfNmzT5AQKJYSW9WtWZBiHMLjtiGxTjZfqZ1EFPKatcvuTNqtpS7hDpYmHmGBoXN8",
  "key4": "PMw3pLu2nTM7oJLXRd6oiTP3ma9hwta3ctxGatH2hde2myPGvRXnpYS8CzwSyKEvr1DkfheQNtH37mhA7TNALM9",
  "key5": "2m7SncXC741XqHzhxQ1N6dfxQVTCkLNfag2HirRsi3jaXDwajD9F4U5hDXiUsKkvV2rpUjKNKrUq3yfEhp93fmNr",
  "key6": "3SSi411B7aEYggSCwKxr1oJgjSZFZszib48uVsDLgjHfNoofiFShv9dr2Zu27Xj6stJBE7h5rjELvfKt3tDp2SiD",
  "key7": "229hXhe4QjEkG4CKucW5kWSnLp2b24Rd26KBrC3sCxZPbi3YutxVLrF4EF3Je6o9JgSCjWQj4C1WKjoCkpzgqDMs",
  "key8": "oLqwHm7sfDRdDXEaQyinsGSoEv5HHacvFWVTbSDQWfNCdYQrGGGb2TCjb92mwu7hKSFDdofaPzpFscS4yAM5P74",
  "key9": "25RMK66HQ6weWa7n7JbioDcgmaFrCDuWpCXJxVQRq5VoB9vg4Vtv4fnicddojd2S6Wu3s3s6ZwfnbDhz8cpFCAtV",
  "key10": "2sZmCCxsyyHMNndvQAMTcgYmnJTcJC6GVoQcNwgab1V6p9BJftj97G49eSzswDtpGx1EAs1pS9zV9rw8zUiChMNZ",
  "key11": "3qww5C6eWfPVuRGHU4J8Bgpj9LYem9zEvFV65kRHGgaWduAGaXgVXakDzcnHw3BPrE16ugXnewKsjgrcTfQVFYLH",
  "key12": "51tfpNoUm1cDtYxUDYV9EHQzyGxjZqwQCasRg4rLFmnExGCoi7LK23uZSpXtopyC9jCgpEkiM8a7sPDZKzZS2oBa",
  "key13": "3gLaKjx2WP5togiQbXSoVwqGVohdKHUsrb6BuUFmEwCa8ZGGZqeSzjFMnB41Pc6hxNnxnMC4cwUwxVg9SQYACXii",
  "key14": "3BaCnXcAMD4y6zkZwzWy1z4c3U52xYuCvtzWUSU7CH2DxZVvssaBpcs5PjstjR25baAYtiHHSpBNdr7t8xv4TT17",
  "key15": "32uiM5xs7QgJaAoqrQ3P9eFLwSQ77qxnowzJY2Yyyoi4bz2gRreeRy7Z4GufyFizuEL4cmVfvX6fRrJT9UbAA4Pg",
  "key16": "LKxPF5ApoZGE25k2Ey4NwpZYxmmGDHPBg1k1Kf2TpGTWwtL9tvYEbFw27ECT8BTQzKiZ6LpwyLrXLSQ1VJzDf6u",
  "key17": "5F86iTFdJXbPAc4LoPm1MS7kxzinz9CRZ54UoGgwB5p3TNZxRWHH3gaFZsvjNDBEKdsepCQBzgEYzQcoZ7RvkVB1",
  "key18": "jrjayWWCP2Cx9b2xReBvAruCcbekyQyQmgy2PDTxC1jvnaUpYKfgZZEbcAv6oDHLZh48f4JLjyJL82uqpAWYG5f",
  "key19": "5vAoQvMxy4ufdCHhwucJ6M1Yo5nNqi8rYXtWQf7pmy2ZwaJo2JJozpDQzUVKZsoS5nKZ61qQQYVxJdxaUKoiFbDt",
  "key20": "sfcs7NTusXFKMM8r7aDancxZ9CaqTXz1turGyyhd3k82ad8vRTLtp74Vw22sxPc6i5JeUoPWwMU9Uh9a14PatDJ",
  "key21": "4CAc99qkfRY9ETtpDxqui2y2N12wAQDxy6sHXpaRu98MmZuK88eL3mRTjVpg7wzn8SCpt2KbpmyTqgsqdXMsBKfP",
  "key22": "63sT5pvYjU3AdFoiKhYuP78ojxhYDCsWEmq2QDBkBAsYBbJpaEKd3fRUp2nUwmvHvqpUsZUfdJZFwXEQwgu9T4BD",
  "key23": "GyHW7TWPTUCbYDqSY4EJABbpJDvU9mfdGmt7pcEvCjUj9VTPYDfdBeQS5oPaGgCYBMPgrEBqzU9jePwvQJw55C9",
  "key24": "5Zi1JrLJ8J6Cb6SCAQfsUJzkq3ztSb3QNjktsh8Ki8tECQKCoMYRQY4MZHPHJu3Tu1tWK9qpTzSzmCHko7dUnpxk",
  "key25": "4uQMc7SXd4npZ6uvXrejmZui79VJTWvqamTjsSWe6b3n6vEhazjHMabG9CkNyzqNLmxrSmnbB8jw9JYgJh2XAGeJ",
  "key26": "2oVUJFFZdjLPwZsQ4hRaMWQhGi4GTSeBbw3MRfLsoqkw3KxftFxM8dJJNLhpx4FBLhNu3Xt6RUSWnBqVHMcCS9hZ",
  "key27": "5jHEJcZTKTJkR4b3GkL9pcCUw2FCxjdcDCAicrfps78ESwZ8mZ1LYsyLXMjFGKDdBeByMB5rsnexeiLM7v5cQgVk",
  "key28": "4JxXdbVVxEagVLVqoh3tGTaSNvXz8yJhDkAf2CGs5BstdHh6vWrP4wcurVgwoEH4b1kqsFt7WWZyPqCd5aECAx2T",
  "key29": "3NmPyxjL2C9EmCmy3Z7sAmeEBtgrfrJZ279nZvkmVkhkAvqZvLtFBD9J5ZTEVnevWjxKruf8jHyiynHHzbtPtLzZ",
  "key30": "1Yu967cun18RoLyuW9v9Pics8Gy7q5k9aGsxgj98jVx9kj7JyGUPeJCvCbdDQJRyXRaow2etwGU3kLLsSWpMZoc",
  "key31": "4asdYQgVmxYi4AfTTJkUcituuH2cRpBrizZr3ypvX6vqpstR8h3K6Z4zZL9yPAnV7AKPV3WBLhihR5u4HTMKbr5o",
  "key32": "eKUFwHJTcgJvcWDAcYn9TagS94REdQ258f7RuNMiUpGLFzc24DfLyydDaomLV4AjriYAJLnwjG1y4bMnSe7eY6G",
  "key33": "cN7mL4pR3h1VBaF2YuCUDLYY9PZaiVxFtnBPMYqE2VvEQf8S5hN4LjxrQcrr3LvBuK265KP3AULMnZYCLucwbtm",
  "key34": "4oF65rzvinkudX52H5EB7yTCxCQ9giBdqB5CMiaDv98FRbMuUo7WRgZCSdp4vARgooPt4rWCz1UYvVQqdN1Kwys1",
  "key35": "3qKdX62kZMb87xaNqwFNJHvmVt44eXp4Z44zBd6TinrU9P9LbMRBTcSVvHZzzAd655mh3t8BhWW5sHV5ibT1YqS6",
  "key36": "9kLWCh8s1WESfPdkNiGLUEUJDXYJN2YRzd1RdsydjczKD3aqmY8SGUMcjipLpX22cXKvuACjnGqLVQU4EcQ5Lv6"
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
