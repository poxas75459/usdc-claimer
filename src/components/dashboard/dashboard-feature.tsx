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
    "2gwnc6bJWUbEaYXmHarYevBjhFiyotSqNxGiXSadLjCgH7oc4Ez8zzDffLk9bGSJERvyFAf6QRyARj4i4AE9R2a7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DJSk1fGJc3oi9z9XLaQAiZiZESfCJBAzUnEf2TMjx6TqLABhe5dx8vE2xTix65rv9CtURajSwkQ5Ufq7UL8Fqs",
  "key1": "5c5rsWVfC28quxNDjVatyXtmsGm4QSZ587WWg6ygshDbg2wKVZAi8RwQ3GdhifwfzSZmdgg5bL9qBkUxpSKJNhPm",
  "key2": "4UnWZcP7Lq6PjFSLWeJTLRFfuU2GjSbKWvgnF1q3a14nzY249yaQ5H25m1xyMwMXi4SmaUcVnsGRPPsk58VmZT5f",
  "key3": "4cBExnntPZdVpvxfaYUfh2nHC2ytzpwNSUczJEtY7xXAURp1FhqaQ1EN364NMfhoggTP7RVNHg6pPbE3oXxVr6kK",
  "key4": "3a2vYCcN8aUGhFF47wuCFm5fMnY5myjpq8nWg3hwU9RiEz9xnTTmG8Rv8tFKYAucXW8QqwgGVJ7bUvMqGrow7DZw",
  "key5": "UFsCUmUcH76EutwYpYaQdnCjtBGggJBoUuRCrp9ohps4Z4hgpZCgo4wCY8gF9nzCMpzdaa1bLXQ8ZSY9hYF7n5j",
  "key6": "3oYoQZ4DbbkgoW48zSmitZf123e52tJCr6eoJ7QL3tzvsFtWskshxERjTZmV36JEc8Km9HvxCwezLjeNw7f2zm2r",
  "key7": "5TDrWcDKdvf2LdwWN64oSgq9mCwiW9kjnMKARsmURG2UVhjUhfX6Q69ZYq5mYWyDz4CFxcprjiEbkMQEiikVNoBv",
  "key8": "n5TuBU8nR4iGQ78Stx5x8NvTqkhm9mvg9vqri7suSmhLWtMqGo33YvwWAm3UBkUpEQqGmutEjZio6kCd5a4FNDs",
  "key9": "2y1sPYQ5sWGuiLNo6JdJ2WcBSQiJ5rewY2AAg6K8srwd8Rww6prVRJXF7TBnhS72ohYxG45bmYDeeEffBeSg7kTm",
  "key10": "4NYE4epwWMaowpgx3oTQXENQ8AcrkDsSXjMsnmUxdtYCTWwBiH1rqegQ3rjQqLtnmsa9PQT375w6en2sx96GsoW",
  "key11": "3JMLvjncaNxq1EsR7p3akXXqAiU9fxvxH5NiNcEMZFvaKin17cGjHKe3pHW9cAzB4jnAiepb35feFZkJV1Ao3V4V",
  "key12": "VQTxWDMaVYUAo3Y2DHLotn224rJHBZSpzCTsL4YWgAiU5J8WbiKvQwuE5kh1sT9wha4SvNabVoCZQZG6nXPrQmw",
  "key13": "5GA4dktMQuMNees9yop31SYsVcbtv7dp9RJoHtGWXR8A4VHCqYqbvqkraUsFE2NSrTeSQZpnJysWBUYGU27933Mg",
  "key14": "4hbhR1K2CKfLncCu8v6jxkD5WmnZ8GZcPDkUzXWhi8iLeD5e225WkZ3jWrYWXwULjEJegcruRKM3o3ZXnvv1aaEU",
  "key15": "3yZcYriA16UVLameP7M7nFkqN9htn9boBs9a9WWxoCrZveq8wpt942fcPNPda4ipttYkLWQSdULoBMEasmxvU6m1",
  "key16": "5DPvQB8GoKw6ufxgtGZ6CeWVr1TDDJBKLHLMWBDUQVhLBxW6LgcPRVSsXHiYFijBF4k5n2o83wm6dpvJcSrehiUc",
  "key17": "2XLNkuc8LEA3HdFqwFd5EpuqJgAYJa47De6bE1ntTwGmKRmb1uF7qwLHkGL1jAZEPvKf7g35w1okZE9z5NhiqXQB",
  "key18": "3JZFFZFN4zgaoWXnUdhkUxwLMMGgWjHQ5VovwPkuDS4kYvmaS7M7Tci6mF13oNLFpm4zYisAHexSXuFpfCLtgvdP",
  "key19": "MsF7P5CTymEZ6jTiK4jpLwM87cq7PLtU9dLHo7gX38tjeE4f4tAaEsqYUC5j6MgWUEQKXQFmpKFpHn4YrMzSCGa",
  "key20": "5mFTTGWTg1W6D3WZpn9rpJE1fExQ3DnNawDFU758SRcNXS7UEmDSKFU7LDMCpq9RQybEurSdsazvtqJHB7hi3si4",
  "key21": "5Y9cs81B9H4HCtqjVr6gnsCJ4nWSdnrA2KtnCXXoaqFqqchfwVqGah5fFpcpoRtyvfhTeEWoYXPnNzoVztrj3VM9",
  "key22": "4NgDcMtwWWJvoYQS1ALSaWmZZ6t7ZggexTZbJTFVwNpoZjPcjNjg1mw2bNLY1VDdb8UpaFegfSJXxdPjrzW2j2LT",
  "key23": "J7TF7TkJU96WfnYowhy8oUYkD2qEmqnV5hfszf5Uq8Ft8ysvVN3M2EfytorAqxDL93xactqyHgEQjdoGpBYhiUd",
  "key24": "5CBfKd4JgFWGCzgvYfbYeAHa9cczcbv6rXeWcBNnYThdrTK2AVNuxizw1oA4kSEE4gb29A1zry7jCyWBKcayN7Nf",
  "key25": "63xFXkyEPJVrJUSrZ82uJDXaz93JG7TbdgJdqjCFY7GtfVTWksaBzwRB3Q2gxs8PKFCMdkXghSDurSNkEKJjeFpa",
  "key26": "59Mg1eZ2c63hvi44uD9UtudTKLZQCcVokTvBghNLpZJ6UF7st1PigP32JLAWkuaZPx2qYmTDDScs1FVj2ktT4fNr",
  "key27": "5PS9fTBmdPLxM3RT5pap6uHq4oqQzyoFAZ33xmuGaUL8tTN7iQQqqBGSPEctb8EZCXswE1TXTjh1Sj6ZYD4RJfaf",
  "key28": "634gfCqpwTTHG7TNHhgSebuTvv1Taw5tYP88N21f4fXhP7CYFZ6CxD9Lme32BMM4BMZ7wT21iYw2Uh7PU75weNyv",
  "key29": "2Hw84aiZRUrqYvGVFA6DfW7kCEccap9aeLR58X88gxZbAYsyvHGrtTSpQBGqNEvYqwDMfdwH33UaYMaRuUFPQzv4",
  "key30": "f33wkxdSh49JFAy94ne7nuG9cft84YwZL7dBpRc4URdVYjJVQia5LLmfoZMzXmNDmeUUZVDvXnLjHKUAMGv8L2T",
  "key31": "fpnTaY5QNgVP8zAmk1xcXdkmT22Zjzcaq9AX9X6JUCf12JcYncSUrKEVRhiD9dS5sS67mH2Qf7v7uFNztj7V9xa",
  "key32": "5Hgvt1F8L42QTBi3tZYvHbz87MswoKMsfFZwdBLShRuD8NRb2VQB4fjF5K5kY3Z58cFAXpzWEA8ZYaip64CMQd1b"
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
