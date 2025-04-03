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
    "3GPZrfnXFTSWEf1ih9e8nNbsQSNJUZtchngPWhLevg4EQrLxwXRX9ARwoH5aKvBXuV7DsgA5Hso9oHFfLM16cqD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29We1ht3xYpsT7nrJmYZcwuTacq6AfTQX1s3KuXVYczWHzbFp5yJU7Mw7TTBem7KHJ6c3tmB1DaU9PTH2E2PhZLD",
  "key1": "55zmSsfWUu1FqFjAk7tnKRf7DJpXZrNiLDxTdMfJWrvGRu7c3M7BVf3EVMNBxT1hWeu1QPkyJZfy4XknuK6a8siv",
  "key2": "38BP2uQ1TMrSymxcYUGyLBY4yAtTz5hUdp8F9gd8Csg9wwyNxgiRsisLHNsNtXVUtQWUZU88mCjp9mtcNWJKLUW8",
  "key3": "5zLVFPKRGX5XqXAQP3jC5qHqpz7ZgVxGy92DL1gKVhSmcowFY6VsUqnuamh9FvLxst4gcQenFysCqLm1ZHTiE2qE",
  "key4": "4EuxdxniM1ttwG5JoiS6Sp5QX6GkaRoK1JUb7DB6oJj62KxeYkwxrrEUsBemnMkL5QGby4ZB65YCd5vrcC9wnfGC",
  "key5": "3Vbwq5dB5hS1NorVKygGYtMvqFpznVxGkGbe76TBQ214DtA8XnS52zucStUk5dLqPjgtNbAMGweDViEHL1Uxwuy5",
  "key6": "5F2zqdFS6eb6ZAK8pbg4wFLdmVubvuX8QqqFj7m39UNAwwSVGEF1XdaYWCjPv38CqPxsFNKJXKrV4bQjf1fAAcBw",
  "key7": "498u1meHxmubMMJRKkboWjyfwGo5zQWkMr1WAYARKRgdiQoECu6cZ5jmvGxFaKZym4QrU6AJWaMwxHdEzKZAwRfZ",
  "key8": "4AnUgxWs4bt6KbBaGJUEFFUm1LJirCGMKSm8Cqf6s3zZL2h49w1HgY5gjYartBy7ELV6p88nw6ZM7Ddj9zGkPMH4",
  "key9": "4bqCRyer8HJyzmJDnWbHKQjRVcnJreRUhWrvTXwNh1gfghbnWNLQMjifNxyUvJGMXsHSP32xDwaaQTDTL73Dcnnt",
  "key10": "5uysytaMW6cTnL3Uv8D4FdQAW3w2K5cs6ks54LCJ6gbpg788PJVWqjrenGVx7NRPELneiZBrQ36RBnYHuFAwEhd7",
  "key11": "4hmGsmKL4P83gHzmvYeVb3iapYaEB2mRrGNPpaRQdRWDArMhd5moyEQ79NumGoS5iNsHkqh1egrcvYy6yM9Gjeiq",
  "key12": "3h63yegLaw3NyCdFi73sa5HSXfX4QvZ6jRDBrkqpsUdsZ62JrKjtZhjJmRHkMVXdRZGhh7M1ukhRg5vH5txt4E3k",
  "key13": "52JxHQEpa8qxaVKUfYtMrvpiPGo5iiTQcDWGRkB72rHCPqbejL8NiX6UYdgv4FEwPZ9bjkwNQYy3JwJkDKDfxrXC",
  "key14": "5LxGCCrBHSeLGeJWpRj3WdnAKeyDG56rqypBsnpixtCXCQPed31ncckErvghMSXyaJBgU8i62Gg79AW6bxww3WZm",
  "key15": "52qedt37sjr3d6r4pxwu1xDcpzbWWHgxHhG7RgD6KBnaUMZYz8CTQaBBjv5izAUH2W3sCSAphhEaTo7rJq6jZ3N",
  "key16": "3ETX1U2nagfvdoqvjf5Sr77HmpL7rywoikpLMKmyiUQHiwfXvtER4tEorpcJq1L6HMG9qxrQ7E661bo63k84Fjrz",
  "key17": "2h9FToH67tFwZ3sTFt7qFKcjngWyPNDj4Zr3G6vpoHsWNVMF2jASQ76wtd76D5gbj36YxXAuBDQscz7CSy7ZMDoF",
  "key18": "2TRoHPEyKEv7zz2Wzybc4T6jz3t5AsDuQBSdByUMgBSnXK4i7miPtNCojAwHQtyBGot8X3BQnXUJtB1WDP4AvQKx",
  "key19": "2YwcpBKnunD2xpbgvo7vyezy4S167NhEWL8rzokefKnEcqJoKTc9eJicV53zbB79TzKhRdgzFQp3nkKdkNgdFmp",
  "key20": "3NCsVXmuKT78buaQyJqrM9GQv1ks9G1xDrFYidsozougeV33CbWnxF1jECoc7JMYJKRx1VPfvbPL86oiMUzuupcC",
  "key21": "5hZ8mDdD8YkJ3HxS6YF9YLZpPevm2TprmWvWth4oJVyPfCNzky5vWt6xwJYfkXtTU1ASnL8aDcMYBa8W2YNVScnc",
  "key22": "4qk8iSSMtMEnMncZBdGgG8ehtnCZFXkNpXWjsenYwiFAXTajhYfYcRkZvktUjzqxgX8SFNvgMaXWVwCqn8xfaLzk",
  "key23": "5kBqrzGJpWiMC7NYBBMKXUQJV9Uq2LgnFM7xcRPMpNuo8x1kd18xhJnoapDEBSNgrEzXTbQHCWjfsRbia2dqG1Ac",
  "key24": "2iGY4QrismzVG4cLN8wkCpRzDWvmQQ7dzSyuLYbh4XwKGoJFi4M4JnEXqdVMPcHe95KNpkkayoneuBZHuuFu9KYC",
  "key25": "rUYMrQtA4diP2r6G28LWepW5r81BobY9ZAiAZi2kyzbSYh9Z4hP5KBRSWnKPPCXZAJVfF8rCYesutFhpf872fSC",
  "key26": "2CJMqMzGBaw8vQxXkYDYNBEi2JzXk6sbCPMw9YWTQNmLSAYfiiCUYrMSGciCTeN7YqD9KNtkZLidTwNpjgvB2QHM",
  "key27": "3hcN9r1SKV1Zix2uFxbkq8jh981STp5hYyEsVj7j3TpF7imJJJvtcw7DNWyoXtuU9R8jsenf484MyAuN42ZX3ZkD",
  "key28": "4P2kvNKnesCC6UTrrdGcVLaYXTYpHGWTJ24ZBEHaXXsVe87rSvTS5FmAjsW9KGRFrLyL7k5z7ZomEV93cvMUg3yA",
  "key29": "49vnQPXs4wCuBYiiAg25Kz7Lu3XzGZZVwq6fX18b9mU4YAnvT9WEjnD8eoSZiwx81tBLqUvwdP5c6rVNHcHCQbVY",
  "key30": "3QsqFoYpDEgu9CkzcAuZjiw6hz9FftVqgHvyTNrAQfG3QMCZnPfPjecAp8t3tc24VJ49Ht8b9WXVKEQJQL93iqDD",
  "key31": "4iyHzHNdnTcZHbZH7UPvfpZtV65CviUKEoRYU7B81aeti9tVsNGv6nDQawVfTHwwHzAuWo6v8gJ1daJPegjZ7NV3",
  "key32": "2cGrVBVK8fYMPCBhTDeeUq8gT2PPS1k6EdRvBETHeAmGMQTxSPATHWhde34nSwrHRjqTfH2Fasq1HPhVUGogisLZ",
  "key33": "T53t4fWwAPrE71ebmr2spmwgaEn5Y61wQeoxyps7CS31z4NEH3UhZPUQ3SU52px68sBVatFMNP5baEN25MgFt6J",
  "key34": "27McBjax2FmwinQhUWU2xtCFF37GRLcLU3i2kh2dWiCFzxnjawQa81VKJbcPJZENRQiJhXGKRg2iscj875x4M4ZM",
  "key35": "31LxeAWqY6D3nMLSeKMhhrL3PH1YRJ8S1UuhqsrxvCsriMvxk5GtmUK7otxx1ZSaiHnb8Ju3LGbffrF2abs4hbyC",
  "key36": "3iANGDahrxe4tRUwFArCFAbDHggeB3uKvuGrabJrrRKAmi5F4aRuG4eU7eNSSsQgESodTfP99FLvvUd8mewUJaUy",
  "key37": "5m1Axf6QAi2pQdRmaytmtmHEA37CvssyXNM8pFMrWuDtF75w7ZSWJrJqfsUJUQr3E28YyCzxMqrdnogUER5xZrAL",
  "key38": "AivFJxPkrB8kcpXdo56pQm54GUUL676LjXC6NHzGRt4iiZ7YggpXPT8TbCgY1NwHTGRaNbfN2YaWZkRxmqu74kr",
  "key39": "4Xi4SFTdtho7CExmyhTzLWL1kSEAUgXwLiWxcYMGZDkt21iZqMijSmSDX1NiXp4NYZ24NpnPXDmk75zvfqyqKEZa",
  "key40": "2ZznHWmNtwCsd5zxEgMzXc3nmxo3ftAGti8oLKwbnsQWSMNMYyVbQWKbvP3j6wYArt7Ckf9YsKQAQxVj9mNFfE61"
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
