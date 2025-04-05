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
    "5azcVdtLuEqaSBTcbpLv7zFTrGC7JHbh4rj9b2nnuZQu27fW94MA2UYXwMZPigfcBBCLu26WTfW8ky595FzrkVKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vw5ZQVyt7DwLzWf1qmpaMZ5jkAjLnXvh89c3AP5ekaz87XSyGEcoDeXQTMRwaeBt4vLjLvqNRXkr4buKQZKNQBP",
  "key1": "345RU8wf67afg3bPtjBbf6AJyo3QFFxzChVVxnjGoLdKpGRSnQ1V2WsmCZs3uUnVWRZpkM24SXL8nrdCPczEsdC",
  "key2": "rprWigKYyEpkmbXCtqWQSwoQh2Rr3RTSd21fxHZjx1hzU2FdGj5rK7Y23gT6d1HX5n6TyzF94cAvUc5zf7LpHcL",
  "key3": "tUxnU2LHLLpniQ6iGL48ETTFhVUsdNHhUHwtdgBjw4Pyb2xjK1NJekresCKe3WP95LPNkWV9yFQfDnQNmUmN6Qi",
  "key4": "3T7gt958Kq4auTP7yhcokWz4DSaKHRv6Eyhe44FiL85k3uJW99YtR9TsQzmhC2ZDcG543MjZj5PQNERsPZ2VRsVx",
  "key5": "2UYELCRVd7sFap3twVTFV8vX545MX9G8BzSUwr3urDV4f7y285Y9PJeJnziSrsHwMzTV9wcyrU1pLeGSB3mZAorc",
  "key6": "3upDtELiMiqH5oNot7gWp5x2FQijvyQ1SUYb78ZMpXVRUqt8s8MB1wPwYGaEepAqvM9TpmX3ZrkBLkntZSnvaPyQ",
  "key7": "3XnvYzBKZZaekacRdaF9DSmQsPrtzeTvAPt2RtHQ5eQZqLgFUcnPC6kcBrPcV8NM3VEmaCVme8GAerG2nddHodFe",
  "key8": "2GR1XKKuskgoVbq9E7JWgJsbZeMw8oLbjBRzyYrvdC6K6YSMpz39K7FLjgAEbJ8nvG4CeWMQGZcCLjaG4oB8BfiA",
  "key9": "2pxUXmrJdHkJPD6A5MvAeHDcXnsicrh61bTGdzFQSqKXtNKLCKLJEUughk3P81LZ7PjLHFZrXKMAnmDjYHvBshiE",
  "key10": "2R7oEDt3aTbX1RkpeVG1yHUyZocyEjQjypm7d8k2r2GRCWtJmjGB5RwfRCGFYmN36r3ZSeaWreLd1Wje3BCND51",
  "key11": "48ifLNT3sZgcsA2aVwsbc8XKf2UZ4TRUAXhkL26NMGEuXugBPJfTYHmp1LaZHVtK1on2kAAouBeWcnVERYMTqzAt",
  "key12": "nvtEW6pPN37gSbHfTHKP3RjMYS9xoCRhmz8iH676fETh6gyVDKgGDeRvkybEr9tZuemvcANvfsbZxNLTfKH3nVa",
  "key13": "57GbGUvzPqDqaqCMxc7vqJCmDY14fVysNkrGDybyijktKokvZuCCX7CTYoE9C2DfHb13YevXYPr7ZhvzcZbZftDU",
  "key14": "39XNMKbcdnhbaAeCFjqGS7MjUakE8HPBNcSCA9MvXzbhV9CHoYRDR6ruBxPacNYqmBX8aQyxdMNadRgoPyHGSwrX",
  "key15": "2irTPszRRBbfBQXub9UafrJLLxhiP9xpuKDzNJSxQy2fwgixBmKhxUw9TTeZLMoDp9nZXsTEZ6QGuFiAywkjsJnD",
  "key16": "Q3eu4y1hrf8NoWTBHyCy1Yc5JULt7nCMynAYvC1f79UWLdWw88B2xGRgbk4qoGwf8fbdjCFoeKYVkf9QnMF11ho",
  "key17": "WJifNT1cRjiwpZbuJpNjNUZ4CDRnBMJVNvNzSV5jLTCWDL9fKHk7Tv6hVNnDyZH8nrSsPEFEJ4grBtCGh4fnvB4",
  "key18": "3nKAkmyRQmVVLc6AV7345AQyCJwtmDueS7x6C3uCutXk4ehgFK9p2keXUd2L8e3kaL9CREfptKccw76haptef3qA",
  "key19": "2dXTFULQY1HXsVSWnxnYH6KraU4RFArv4UxPRZGM4opkyrwbF6Wsk18cM9HjvCv5SCTYgbzAhgWuqjg9bho7rCpw",
  "key20": "jKZQrMg5WEFTJFQ4XhaSxjAw1ReJN9s9cU4TzYyd3WS98TxA5z3dobmNC5nsR3ZQNRmVgD7mfPPyFLCT8rRmRnT",
  "key21": "2LTkcdRfF2yEJ5gKJ7yRMRHqnLefQK5vDU8vqq7cDUoGxErUid7ikuxVUQJ342EhzcsU6v3v8Q4LTbRoyYHHVS2Q",
  "key22": "4jVHHB6WeM3q2rQCU95V8KWHrXC449N4js7u3NV59mUXeALozJKE6PcTAM9rDihRuyEGRC1xZ8GDyxiotB1EeVvc",
  "key23": "4RRmJKHreZG3BfSYBjLq35Hsm7GfvDvQkqUV2woHvvshPvy4dJPzccEjBCPkXN5Mm3UP26TuhaLxinmz5xnG6P8w",
  "key24": "2Y8yVUxZJMkUV5g62PzTWvUcXp1fcQCRVTDfkfGmjyLGwiyedCM2dCV6oeNUra2hPrYdRM4RXbARw8iLS1sXfbaH",
  "key25": "3t8kWPqKA1YLCLE8mAzCaFWAxQWmvBh8dnmAgS31w1zr3mM21UALv2vD2U2XrR6NEfvb3YUD61RvoTwq6gscdCDf",
  "key26": "28PvSKi7UjxtgbMsvMpDS7HbWbX5TGcPZUUTka7brxZpBxmSY5VbZgQYSQEHx9ZbvAhm93FhEccrCZcZD9pMGuRi",
  "key27": "2fvVEQN5g1tYtwnk4edL9w5YQmrDi8Lq9R9k2XAczNG8VGGWqJBjHP6shi6tyx22XiRJBCARzHSPUJrUMDUizcQA",
  "key28": "iBxJtLQxmE8ctF6AjoytZv4EjG5zvFgZqKrAWWMJARqASNhzJdYYVpceZvvvmGnsQhNAEXXXz7MkpkyJx75LKSk",
  "key29": "2qKJQxr3k5kxLZm1Subq1PR7awWztjkDG18BG1bz14FC8DVoi6cAzZXe17UvnCgyX8ju1kx9r6gmm35VEegcEyHi"
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
