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
    "3UPDz4nevTz7JUvLZNrMyyyqiFTM2Ks63Vq1gZ9iuoG73mk63tWgLKi7o3J8u8Gta3EfQAbzGUfWbDyqcQthS4VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FnYApdZxWbvnkuZqqEogHpqfrAM2SKGh54iGAqyKp6qt4h5UeuzHUyWE6oerYx8sYrJwj76Md1C1DvTaW1JFQoM",
  "key1": "4uZEXVvpBYHD9djPuEQFdZheNtwD2euSK4qZV7B3SYrgfzRFMmuCzvGhY2uHWdW3ouYn68PXtnQpNeKqmhkiqnHb",
  "key2": "4gKJ8nFmVfuU1zGcWSK5YhWLrDskAJmsbfD5RUhVExW5K6GjqKHyvrsVSNgHLNLq3pPA3D5bCWHkNQdhFbSj8KDE",
  "key3": "4koJCULXvMNRQdt8DxMMfTZRitc5a4EzR9PHMcVvK2fCqyy1mTLCe1SvLkt4zDBSUs6CnMH7AwUwppTdNfeEjwML",
  "key4": "3w7wghcesNZVAVoSD6th2ME1ie8gyP1i7gfNSDy6NRPLi67hSpzudKKXsBcoq1mRh5JVeaaeYMCvroGDoiEe9mp1",
  "key5": "4f9Rt9smbBPgJVbaA1LnLMjHUnGtpYCWMC7PRFugzy4h7rriuJM8zqZ1AwctvJ6cvMRtceYRkb1XM2DDJPfnTp5M",
  "key6": "5jy5p5wg324ChuxEnJV2WJQ96vQxDhZBWEQzYWCpEJ19SU4j9Fq9wWc5QVd56YDPTiixZJzMP7SXwwxCH7cQMy2H",
  "key7": "3wvpW9QD6CWkM6wiguRmdDrtGxU8WP5dmjV89Q2xhPJZtUyyW9u2fGacZrfJd2cRF1Lbq1XwduyatsgXuBDLE5pK",
  "key8": "4V3WrZzp4UVL24Dy2YTp3ratGvnhmZjXmSpWGvyXaCnDzi8AT5seU6ANGoiNaetiNrVhrVD9zzHamP6FvAgw8PGJ",
  "key9": "4gkJtdPzeJnrFcQ26HGLNTgyHCWjeiNUnW7LmdEvb33i8moQtxKSQxnYRBY8HWnfboM528G5UHE8PxGGpBoZ7cxt",
  "key10": "4KLuHzAs6cnVsJUbdmj83QKMq3tvhaPRQGjKeHgMEKEdyxkisZVdqVv5Xj5yssNvWafRmsvG4VBW7stUghmGeaot",
  "key11": "53JHKK2FB3REqFhCptjfsymDATXGD8H1jjNsi1f5z2u2WNAKfdKE9DtdG6Rqk7FjgbMHHE92fx4pPpGSk59xtnHc",
  "key12": "3tUGmo1sgQb8hwkhiUXbftT4XCbCdMzuYdRbYmrpgV2tU3Ju2HDQuqfjjbn3ZFMnieb2nPPi2vFgLBcJ9p9zxXoM",
  "key13": "5qabeNACPxFyeCAoyhaV8FYmD1pDH8yzAgPvCD9TTGSqfeaYtosP7ZsNgjMRLkazrPrSGv5utEivxUb1aR7yLGP2",
  "key14": "3DewYA6veaKGo9Ryqxp1eBvTvunVnJ8jBvtR9eGVtRzEvabTYbyjXCTbPvRQMzVazNJhPviheibM1wCUeKiL1gzP",
  "key15": "3hA9HWFaFKJdgs9ddrZKrcGuNgqhvyWUxTHhqtJxJCrodSjhRQrW9gDTM5AXQqqrfbgZnm72Cym2izibs8AWYYGf",
  "key16": "3KZ2Tswbq9FP7gexbaUJp4acafePuJAmS23NqVAnUWTeU6DtxGUMACPiGxrAPU32SbZyWdkpmJu38hZs9BVRzGHD",
  "key17": "5ipEWqexPztrRuUhJBjpBjxrvt2FHy1ndZc8VLhVJQcxvXCQKYoteDCppyxB2wr7zQ6Aqu4gWCgZKDLB8Z6ETbyj",
  "key18": "YY1mRReD7s7kDgojknKx35b4fQ9om2DMj8DV5Q7LhSNwmwFbgavFu1W1r4rms9TB1wD3inpPnZH64tmt9uMV3Ni",
  "key19": "5x7zAmKpgwmSATuVE5CmwLuYqwFupJUUXaaCBHwQNtotVpSvrWBRLZDcwET1CbVuGoiUm6cLP2X2Br826kc5db6m",
  "key20": "28swT1waJGNgLGP1maK6oYenmGvYBVW31hfR1QbrgdtZfFRfqHpBGLJ2TjBQogCEurPKVixW33J1RHDj94Rb9Ugr",
  "key21": "57TybcgM7XDAnbMrjfMex8vvRBmj1DUMctn34qrpUBN6E64tr5m7hYxzG5Kn4t3iadSivybpeUyo5ZHgfuo9FVrz",
  "key22": "4bKfXXww9NR7ij5nqABZcgYTekNDZEnP3Fg7vfTiUsm8KRyXnLBjfDu6myLJ9nUB7WCDHr85GUgsGHaJ2t9jWXWZ",
  "key23": "8UfxtM3VWvVqWQmMp1dgc25AVVHJAr1iP7tSUH3RHmuBkmuhMR9V6gYJPoGiq5QTqYnXmLtEnt8eUFNaHbfjDss",
  "key24": "4N3CXqf2wzK7kvmuGptQ6fyHXiorJ8G5HByWiismLx5BjNrikHU8JBhNKEXjamHqTYu1M7xRa9v2yaRyzSXyYvJQ",
  "key25": "2LEPVvKmyLsWNzQc9Lqe9trUVxGtnEdviitaEkEy1M9p4PqbL3T9bAV5tQXr4JqQEn5hL6aE1TYoaGLiYcHkKGzK",
  "key26": "3GMJ4YNx2rXXPj1xVwsERZwuoGrierpJfgDNX5b9e3KkprdhnkqmnRDWEbqtKJLvuze1cbyRuT1t5x5tg2FyJCjR",
  "key27": "3LRdfeBaPujiwBtbmtPLfBFTqVqECPZc7FKg19SEkavubvmxJ8j6qVcFCgeMsSPB3T9anCKgF7BDW1TrvoGE9x83",
  "key28": "2FXg4fDTrvvrK4rFFcbtcYVTk4NKA6cgnsPnmkP7AFS8mzV8iReVu7UtM9q3rtWBG8mhFRzwJxx5u4bcmH6YZhdM",
  "key29": "1v9q5ZiuohZhTtKvpciFXUHj412YpZgBBrnmRbzdr7ebujvLnNVDdhrQajY5saEAw88gWoSVMRVYVm4NLiWwyJm",
  "key30": "4tSWDfpqRmxgTQwTfssgpfqXUB6kBAAh2QvoHu787iNm9JMRLsoiLosPf4inthttg7Gk7Mb7eEDjC5oDcYZK6kHu",
  "key31": "4aCm1RoznAKUB4uMVkAv8whZ2yLAFuzKkN2tssqkqynNCHvdS9e6h3cSWAZoB9YdUEFBWcXBBXWWdFkDjuyKjeFn",
  "key32": "2uwkzTHsykK4jfe69RdwdtBQieEjozrizWSfkuVBEVMLdHdfzPR6PixYnPMKGvKL7rR6s3k8X6mjTLfqX6zZsgMC",
  "key33": "4huopqnusDwESZv51A7zbWh63TKDu66zRUgqugNtS4Bqg8NbYvZyfJi7ew86wozrC7rzYZDC2iR7LZm56VEJENCz",
  "key34": "WzkhL6wJMTFx8bavVWEdAngdn3fmUQYiGCuFtaTDf4qfbxbzqow2ctsVtZxN9xAFrLn6N5SrrvHuWT316w5aRk6"
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
