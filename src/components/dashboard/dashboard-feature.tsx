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
    "Dm53hBTRLmMHHJFbhgN7khUJqsfzRaxnBn9CPXMAcj9G613TTEdyVTqsfPPKUbMtiCUKFMMGxrPGXcNbakwAcCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gpvm2msj7dZjvLXdwVoWJJ2WHqqXQaoiJ8SjW62BYSWgkuWUm4YLLpqrpeQfJtsiRLCXt3sLEjenAu7mQhqcrnL",
  "key1": "5wpfsmxrBgcTgf9QBURZaidmUJ2Sb2ETzNRiKgTMgg82vd1ctqMkStASZqQFigWg594WanfHCwz6Qik8RLoYnQq6",
  "key2": "5Z9k68b5Xk2u8Z4N6BX7sMFQjFzA6tfWUsjqqA9E3AgVYhJfa24SKayPgaGtaebUiyZ2uKU3dpgVqoKzrdCn9X3P",
  "key3": "3bPcUyER3N5uhcrmFQfQm1fVn3p8zYL3oQm2tokMreTSdcf4tDUjjC3ShDny7UwSfHeZhpqhSxbrgEMdifzrHk3h",
  "key4": "2Fphk4ttpqNFNaEkjtLw42tapVJPPa6vFV6g1rnaXPM4SLNn87kD8aNKBNZskVt15La7Dkpf7sfWddKNNc34ri1p",
  "key5": "22iYZwpfXWNsh9SHiXpoCHZ9Y6kEhxSNqbXkqYcbH9JvRRa4whkT6QTr1eUmzLes8SW61RqYYAPn1E6PFDnxpDWe",
  "key6": "52Jmzajc4LG2HkmVa7cxSAbX15wKuDgxAYw8RbUPSv7KpSD4kJGZCqxXSRedJu5npkNgqjtqfHgkHDKLDuwV8ptH",
  "key7": "5C8eurnU1yd4g5YH21pRVM5oYzcspirNPJYyCzqcfnKM17tpMGqgjJywtyaC962fVNXSDAP2Tj8zLP8BXGs9nKHB",
  "key8": "QUXphuxiDDZtzg1KUjz3hqZriH9tFg9Xot9u99mKsFu7oYTUdtfogtHe3abBqRWdheuXmmSW3kixP8Bzf3HFTG2",
  "key9": "4z8bgUe5cCYNaxmBb6XsBtdwc3LGGp6Hgsrp9z5FHc5fRceowSdq5niASuVE94pb4FpXLfuwV7N9tC3YeWN5NZdv",
  "key10": "3KVH4nmkXoxc6aBnwiPLPEXtSAb7KeyMgWYNwhHVeizuWk8rGLFCjbQXCHzP6VmX17rG9juvoVZk1TWzYvj45L1d",
  "key11": "4TqbAcpfSvNA8VnwmayJHd8PjQjbYKkLYzSQ4p9B3Lukd3TypGHRD5NQvYQmZf7DWJaM53PZHpNB6W6KaTE2EVBY",
  "key12": "33q7qnwax9V1fc7ve6AAdnb7T5hnN1BCJT3PtXrCszDr8bBbaNXN5yRYmjctUD9Q6B6pVwLMxjc988rR6kjzc6Mb",
  "key13": "2V14LgHiEQSkDHRdmZSmoLpbD8wQyvXdvTUma6mnjxJeDgHS48XeBPxPkYNWPzfqRvPiJYWkxwdzVMxvVywXa1fm",
  "key14": "5G4uTybwCVF5rGmxJkRumThouVJhfucgnXrv3xFyZ6wYfVR3wzMU1ZcufRBKW3cGwuWyPUSo9iLqf1CninVkquiA",
  "key15": "5hAE8wbaD6B6pybzEfq9TjjAdvwHUhfqj2BizGhn58nNBpMX7PtgzBPjuQ1fwmpZXrtnU8sNN469r1wr6TksnetF",
  "key16": "cH5sZzoE9n6B9MRZgHVdMzv7q57TPqMK14bMRAsG36jPTzaU74PcnWW3yJmScNjwYazN6H4zWyzqBAfLWV1Sibe",
  "key17": "49aFaBbvCWBNr4G359z532wxRyCy5TgwEzUgxdYzHdE6PMUrKJUgw28iACkndwZZexRizf7jTR9LVaR9veCe2987",
  "key18": "57qmNuht5YXZzfppaNGZ1BA82mtPP9HJCNawxx8z7abgRTQV2QtCpNUMYgLqXv2jbxDMwitT51L6UmaiWezprKVn",
  "key19": "5Pmbig7KVUGpDmEEjGFiW3G9pcuHyABrguUGAjvRFa8FPvLTx6teU2gmPv5w7ZpbpeZE7XgyLSSb4vUFUoVq3p74",
  "key20": "VjxebPAcrt2bTcHaASYgqPwP4FLyum4x4ggQFBvYL4rnNHCHL6e1EfbW4yBr5pmTFKq7oTfTXgTNEGQfBc5yyYd",
  "key21": "z3U1Xkthq69UYUuesa7igbwkAYt3xrThRzT8yUu9UAnP6Z4pWkCxjYXvGNpuHgMPcrWUZqFRJUGenSDkof7ZRG3",
  "key22": "ZVdmrhHyXxQBF4yDXrYZYL2UyBSBSDvPhwcww6KWeZMUxVTZFKqt34pSKmUMhdjHhrD7aMaaYjhpjzXy21XsYZS",
  "key23": "2QzCG6kr8Q4NGY9oUCHGRXHxpUzvVn1tVMSSKe6jtMCUgJLhfFfXzWYWYpEyoh7z5NxTGsSdHEtfCUnuEWveGv1A",
  "key24": "35vLgeXhEi9CmYYS8prZBQ7m8YCRM5yKyVj1xToeAXeUEVjyNHzuSEv7ajeQNN6PyQZUhPRNWbqMJdyEFaunc5Vi",
  "key25": "5FdpP4cNLz34TYSkeGAcMYigBqbaPhvMtjUcE9wCcP76dBoYyz5LyHBTgWyCCZQJzUQcuygv913b4rid3X9pnhSS",
  "key26": "2v3HKKETH2Ny6sonCRp1i6V7tGWcwRmisc2CNkRKLA8VzsAD7YQPHT1VSwbUXkyUgVxmaL99EaVGA6zGoonMdcQB",
  "key27": "2Ekgm5UwnWXAzuwv1jybt8vGZMjfakwbcy4hS31SRH6wFWNh5aRAfchtvzgiVLXkFmQFFUifmqLAQWHDZukU4hFH",
  "key28": "2YapWZxRcQqSkrJpaTrw6HRgWomZdTHPd3EQiYTYiUwwVgYHusaXGzcHBYeiqE1AJ8AcX3afj8uf3KdhLtSeWrPm",
  "key29": "4YuGPu4XFyDzopuYNpPefg25xHJNMFNeaiaZsfexUnuZat5TqzXmLWS8o8H6L3BW5MdxGPzuGKDqCJjoQnJUxqXU",
  "key30": "5PRLt6xrRG1rh1g2SKFZFrukWDYEXSuL1XbC5ZA19qLxZ757kFSuX4tQqZKPjGMBZkCWKXDsKiquSVGEXdKP2q8V",
  "key31": "5hLjxkKWyEJpzspBA7WzeNxM47hdbFp8vj3hHou5Mq6Yif4wkS9fViNc78jLHRPhC8XycR7BNZvX9GGrJ7C26sJ4",
  "key32": "355uPfvFPtf8RevUtfaMYd9YrEGf4o7Hc2wD6Uf9mtoK6DFJUbF8RQ3wCbZ5n9X7p9XZhhFXH92Yr7JLxkGxFhQh",
  "key33": "4RqP1kDjF6ERoTADFdX54yYpAfbGxfr8KitJKCXoLsuPPaAKJGwQggM1YuXvSKqHrDFYRaKxBqr7HXy5dUJV3ezU",
  "key34": "2UnHwMYwTgbDa6QNjQFNSU7TfuFMDAJkqZxg9iqgnpCFxq1J9YFST1niVnbqD3fQnQoGQUgoCDuGcBRSbi2AYG2S",
  "key35": "37s322BFiWU1AUdR4FzbfU5rq2AAycbnMXBqWhwCaP9P1gYkkgUtQ2C6p9rtqZRRi3JBjFATAYHtn2UDpepPiMdp",
  "key36": "4XjqwkQNRuCP4KJyXdcXkKryTycFJfT9zT4orz3ikffDybwcDwobVGTG6ZN6gnNyHTbTapM4N4fAAHdPFQnMM1x7",
  "key37": "2xL1dHxtqhW6W2c45BJBbjk3y6PRBRzU1DJxp129AfjawxSx9kApCbs3Wg369PJ5bPbr1gBSyV6Tn2ccdfyVw6YW",
  "key38": "3e7rr458HEuVBvXzvuczNjyJbMupjYnDtG6cdRh5zD8TZYCkWeijLgTdQJtjZJb4JvFdhw7QimnVsnAYFzdjY6Rk",
  "key39": "RR2XMkZcjW7mYAA86YqJQx6mjXSYNSQwR9a8642UCMwRpWDUPFERTVTZ3n79CpTDt4Lk44bsizTBsQyz6Acnn1Z"
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
