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
    "3eCuRd2v5S2VJPRneshSRtvSjS78DGxMg3LQrJpt8ZCAbongEN5wTCfpgkeszjjmgXBdi3gF3iP79oNGMy73Ym4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ypisN2ka89eHxaHwC2Fn6XFHJMCk1qQe9DsjFG5bwK4VYFnWmN39qx4hizoCDEZSXTYrGqmipBVtjnY7cpYuSr8",
  "key1": "3HJFuSASYjfhJJjTE4dVc1upN4AVnsrTBGYR6PCq4iM1y8c8brG58FwQHxtrT1u5kyTMYKhnB3jaTRTo8C2g91Ho",
  "key2": "5vke2VSpPLtnVb5r8DbHCDrnfxcbWkpexuxupibTDTntb6NAijJRxqRdjLYHe6HxLEx2Z2V7CYvzUg3bUxMNPhJ5",
  "key3": "6vLv83CmQteQcCadhYHCMoNXKjGD72JqC2ZZBPAHCXazxkQrypBDmdG5CQ47fDB1rvphk239uaVkW9TfGiNjMYZ",
  "key4": "aWuq2diwkMJocBLgAQG5ZU66gkRHkntXJ7FAkLMefSE3ErpKhRi2ECmgG9SBeT9J6ekzJLyqjrS4A5wYQw7AueG",
  "key5": "5uqKeYZ7QCmQ6Jbwb91C5mzvC1CZdwvGvA48rhYGWAiqFTrTTPmsnzeB8k9oAUeYCEr8LyewdMh32S8QAL3Uhqtf",
  "key6": "4jAApQj7NwnHHWfCKoPdRSthtF31S87D6hNuRo3c46qXazXMmuFUNzoBVjevW4cvgL6ysAonx6PzQ2tETdjysBjq",
  "key7": "5XEXCqZ1c51pXyh9KpHpAdeEfLjiYof5MjoDvuV5o7GuwmjtW5YESnXeExUgivTdmjAUE9GjmpjTbrcec6ttWaD8",
  "key8": "3pioh9DPCABASfLjXXArDncvpwKy3XepnpYnu5XWYWDagBV1VveFsvHNHgQjpTkXqjppzDcBCRQ7a4uRW6PW72sp",
  "key9": "27smdxEcR4iYjJ667Z7FNgcwYHG7TyqYUE19gddxbCfgMLkuUaegkGYiKJsLusfmBmL9DBJa6AbzevjE7rn1zhvC",
  "key10": "2vsp8g4KawdWxKG6iae5vbkwn6Y6Mzir4ASGjZ81HTAhWEaQJbBxXD5A3fS7MemYN8ZPaLZxZyKVFUA4LVSvbNQp",
  "key11": "5mo7hbGsYho8N5d8SMoB529af8o1kQ5MwWJBXcGuoW3BZM2jvUHqdL2xdDx8WpJ1PKMi53zdn4xZY4RSjxkfyLwW",
  "key12": "49m6rLz9Hyn5qpt5rBxupmcPwsM3Ndrg5b7ibkwwqqDB9gjyn2HzHccJRuvvaYQWpsZsmy2sAXCbUBoZ5r5NKwDB",
  "key13": "4da9J47bTfnpQrvtGqwCxqgRvHtQdnzUpSxsC8TUCbEGDRMiHGTidbzQjY7QQM2wbuv2fCQG9dDotd4h4W36Ccfm",
  "key14": "scGT7FaJNtjRghreMBkuH7YNsVpiswThAqX6hoUyWFQb9T58Y5G9GzWiCKDiqEPYoR4oAnphGVa6FQAdzHD5SL9",
  "key15": "4UCwQjytxXMSzc1LZy6sRJaNhokbzdE9ZwNq1PW5LH2o7REXaQmayq7i5AuAXcVpHpjbYRuPnMQyL8VQXJNh7pK6",
  "key16": "3GNRNTUd5vAHKn6Q21AenxPZC5hs9EE5Jv6ctjYSEkHYKeU8YytfyaV9qwMiSwvVSHiHEpHhwMPhDvoLrfd1BgTd",
  "key17": "5NrtaoEWL9pZmMRfCgMcgh5G2Gn6hs1w9hTM9hf6HECxtzTLNqiAYh7WweMu5uHG2Tcyu3WRaZmYP35qYJ1yvCU4",
  "key18": "46JwjJFfrP4bRH3SbPZuQGPnZSBFaFbvgFjLi6EoZhwFmvXkFrKzX1oyQcVfAi7ExjXT2NBrVbce2CyFSYCEgZqB",
  "key19": "5MkcjxDDzs2Z1VvPcpUfbzBtuP27yXrZ8Y5VQA8k2vwmCh4RnvptzDnZZjfZubdJ9coJkMrVTaRQB3ZhoGPBoFZ3",
  "key20": "3Fg5QrgEwLyt7CfKjvvytdnKCtRMx9RBKaK43wEeugCZqhfS5557gfEFfjLgJmcwPkrzBGhzMLmBF66vkmhfyQt2",
  "key21": "5BKDACKMgo7kgyW856wJAopVD3duBJZ3aGrE7eh8CpPTaU4LgiofRwkYiKttr1MTNFkX8WKQnFpCgdusmKACYbmQ",
  "key22": "5jDNb7QDGKkfp61acRxcvjfWAnXLwwY5Bgoj2oyfekULF6XBDsc2ZPHKaZG6XTrpP5mR4ViwpiRhYMKyuDtLQ59t",
  "key23": "3nLqtpiune4DRXWoWVzpf4zMYTPeVDiLnyTaU8vu9sB994qHG59X8NmMFWvAzrKXSvvz5PUfpzVuw4xyPLvqQDT2",
  "key24": "45XrrSKxk597KpGomt1fMgAW1hhxc7hKPtYaJe24n3Bs8Jv7YcFGcFWSmdawht3h89rQZutYrSCQYGjND43S6LmP",
  "key25": "57mT2KkwjnaLPs1D5ihfMMH1dgZSYvdqT7XjcCdXiLcgSSU1mENpF7SybASaD3g4YZpx9tntqF3n2hmB1iVHKPwN",
  "key26": "2aZjkVzb3ud6HUeP8UVKNFGcMtWMUv5hjYVpkjWYXjU1ADqopiCeRGJfyceUaZkNjkAUACLo6XzVmWamE6JRPmFR",
  "key27": "4WdJiqKBmxsqp4TWQQJLhdk73kuvRSHXew68xMWjLFCmrmNADdrPWQtaAymHRseM8FuTu7K5ewhx4m9BQ8nU7hW6",
  "key28": "2xwXEU3jntFQvu351CNN446j5jnQU7y4T1HvKKh2mzCab1y34gp3GU8RYygYufEGAyp26ytbqfSs1xESjy9yAWhV",
  "key29": "3kbHbgANL4PxNNyVzk9JEb1k6AigSaUkwVBigJNaXXM22hkQjxkD88ny6iLkhjbZdcNfHoWWoGCFSc5FAtejGdj4",
  "key30": "2KPSwh1fM9MucWA3Z3PfsXJzysHBgBpunh6LMYg5b5YsYag6HAWogN6bfMwSH34mN8o3Moo2EivT3tjzy3mUTBoq"
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
