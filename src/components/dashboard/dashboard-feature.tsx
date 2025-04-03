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
    "3z3y8qH8QqLz417vNaFkM9yS355yKPvtNdMt2FU5efY3oikbgqPSQNw4aS5yRx4VNpTX5Rz2XqV75kU83jkwk6F9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7KQTeVi5FSj22WSXupGjWhj2TPdAjDb8SoFbaLQfuGpBJ9hKySSm8fZLzeXrkGLjciy3qgwJ85roVNrqJrJpea",
  "key1": "5WTDrUd3SnfFEvLH1q17TxbyGParDGdVnmmCWa4jqaqf2nRrkH3PrqpGmTUhAXN9Kw8oRsrQv45n9XbHT5TvgDwN",
  "key2": "3YdADrxBn9SX1VetdrH5NEojVDraE5JX2sB9gQtQ94D7cR7mA42RYNA4UmSBBk1bZ8wfNZpZ3KrH3GFoQJFwes5b",
  "key3": "yGx6aiJsmWDmVZ8fLYvbh2eNBK5v2G321oXjRigHmeeRa4Who29mZgQD8fQqzBWCQ5DRTZ6A26kewcNXaZMeGbd",
  "key4": "35auWZWtE3D36eNRkMDN7SkTQLX1rxBN5fYXLeja7is4UqWnjKjJPJgFnnD2jLB6sGzUwfC5jENjKqKL28GGsgBK",
  "key5": "5hzfXsSXan5bdSL3h9eikMh7jirh1yrrtxUq5kdMX3Wm1EU67NyFcExS1SKxAkZmYuTnWGuRqpoU7XQkgjEayFP3",
  "key6": "3esuPtWSypwrudLxf45e2LcrDpUDjBk7tcPuXL6M27MuwePdxv8pJy34YG4PtrRqKvQd3p2rAaAZ8cFrZ4EFBi29",
  "key7": "22CKa2dM4ogkxJ4FovY65r4XAxoFNpohuYiPyAeC1VpkxYTqatRbJjLnohHV3KHMrss9ZE461KS4Ze2mhbL3un6y",
  "key8": "3A8rtgo3Pes1BXta2kRzk5zAwhDBQM52mV85piEuommzwFa7EcZ1R5WvH9MnEtjGR6oKHjTH4gkubire6Mk23zPJ",
  "key9": "3UeV2onagewsBhmDKsA9pWK6s3Yun93HAmkmq4NWnGk1izgw7EG2ueiwdcwALjDeH3dPesd6W8hKnZyNCyfxjdUM",
  "key10": "YF4nFRnsn5idPYTgS89v5UGj4JpPaZfUFNM7e1b5HsVM7T9qFDoaBGynjQrFNTCs4vTxjBZMp1JP3kj8G6ysHPm",
  "key11": "szV2Uz9rQ1Q8NurZZRfo9cJR7nJgnk4Z84FXosmVo1G9gDBRKVuDvs2SEQrQaXJ15r2Sppy8z93eSJHKEgD7NGt",
  "key12": "5XkK8RtYiidio3kQ9HixkhKuTvAiiHjjxaDfgubZAf6vXNJFcRqGqvzQzPEnFcqXGXht1gFv9yy3wVpCRuXiSpuS",
  "key13": "5YBygLEhjHDxbUymR5YeEkbrd57Xunsk7STV1vfbWvk9YMLqMKatDk28aD4ruSsRmSJ4dFaLbceRt8TSAAh9fJQm",
  "key14": "nR8FPSZimNP4WyzLKRCfLYwxne8sfsUTZJCwHeSTdZ2UZ3xJtfv6KKkGHu3XFS2t9sMxXknRqaD1A37nUH86LsA",
  "key15": "25FWXQtBhFdSzUdzVTFJd5sGQ7RxNChpiB5cz89GoWjP6dwuAQRZ1UjLPvYitERNTEvC8TdRCW7zheMFUraBhHyJ",
  "key16": "2X6zTt3RPpxcs3CDX6rzdYqGpoSsQ91GDkL6RPvLbQdJz4xFvB1NjBYz9sUeJ4EvEi9qbFQZ5trfypygSAsvMTiS",
  "key17": "36Ztsd8dczrsgwRBMy6KG8vMHrG2L13LYJB2ireYyVLh3e8Fnn5Zbug4UuCJknLaFEiVzEMF8df5HBS99SWnZhZN",
  "key18": "5u9pRUdJ4UisHqrw4MKVN4nDNV5qP3NcHj5Hp4dSpJa7DAHeMD15vjHRcumhG6Dgo8qcL7dcdoSi334P8xbDV4UD",
  "key19": "4gxqhTEiFC3dUFBcBbfiTZEm1k7buuotvjYXnGDRvFYTUGc1G34emXwPYghXjrW55TMRL2kzhvuWZ82UM5d8Mysj",
  "key20": "3yzAjTG6LqmAGh4aTcz2XY12CpKxX5j6Qa8sGjaRMZ7KqcHMucvoWtBjS8jmkgLy6SkG2rLsCtfziq4PEK1cFYpM",
  "key21": "GTwDeaE42kijnM27NqoAE8PthxEV2cLZyUthVAkEBT3rQqJjUYzaSCWNjGRg8SSbRQQvCKZWtXicrhN189SUbb3",
  "key22": "4z7LisqGEJEjdW5suARzjtnZyywH3iJGmuDB62ngj38omVv6Yd9tjgN4hqjx2fJucN8ndfbtg4Taw6Bb7hBaCbKN",
  "key23": "4v528FJWdQJYRkfJCZ3RSkDCqmVr2yS4UVrjKLGduCNhiNJode4Dx5qX7ZRQ2QZaV1P4zM2ntMxq2jkdXBDnoFEP",
  "key24": "5gDdm9QY1FGob47fKbmuYJpib264nsmFL5NBbJ5EWRXUj8fcgxyRmkRc9EwbvxwHaYr4YELQWkf5MuWSWaF9MLd4",
  "key25": "mo8jSvsyf6bLUjwiQEifUusEK3sGJMpgmeBCKkKKxjQ5ZKfhwKc85KmPJ9FMYgf6GbiD5eQVm6CSB2UuxAGwGtB",
  "key26": "PqNYu1TEAgBPdDPGNLXxFnAk46UUQw2UQZBDPaKt7HqDJ25YCQGaZysmSeKKXMACbShGUsR3xNV1EboCGpHH9LS",
  "key27": "uMg13YCoxYvGJHFKLbne7V48eX2qkeMTp7Z2SdBrwCVk59EiaVfMtkTgy6xS8TDekAQjJhscZRLLjzJP9nKtEQ5",
  "key28": "tkGf9pUQLWecsRUNc8uoafEfE3Q9GScMyv1TNpdYHEK3UeQN8Z6ADbwnMhR7HiRB56eq4ohEBed8UCrBJ4Bof8a",
  "key29": "FYkM34yFspCrJwBmrqgG2AcYUmzoNGoEtKMGgMmpc2kSKWWoVobmVTgerAHgc2WCGieHPZTo15BiNnbH2C6eyVE"
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
