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
    "4WKsaJMVdhyoQ6PmTATHkd7tjwdL9k9vsN2cqMY86xQAYRMX2aWB9pLCDctcq4XaTP9LT2WeBKfUNHGEkXhS4m7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bnohKJdBDY1F9zo35VchjfUHJALDoYV3xGE2andRfBWbBoUFNaeScxhcTdvu1nmznJxyHicR3sPGawbP8jBa83m",
  "key1": "5R9dB7R5mVA7pJhokEqhTSVUyfj8mUm6WyBttPQiZefKBFA9CL8RvkhdPRXabSR5u5nNgqh5HxFuF7u2Ng6rq9tn",
  "key2": "Cw25up8qTwhsdbqXMZFYQGCGFhfMuUjWNa9jHM8yBRrrGFgwPqjSafTLF8cuEJHNHTodYQo5fc2MM7T1cLuDSWb",
  "key3": "4hTixC7mFJVFruQKLSFrEi5PWDrURHZY3YfxFwQ5h8A46SRW5fSPvfaDffkACo6CVjG19ubSdSNLe3zS3BfugWbe",
  "key4": "mNwHYR5yrDUnf1An12b1Lip6DrGqt3bQRbiBxnuTo4UwAu2a4EZuz7K6zvaBhuKpwKs9hYXmq2K2a4UtGLV3WK7",
  "key5": "YCt1TvCnrVkosWH1kSUtrpcWX6niSF7EMrXjDVHJ7GkAUQ17b6LhcDxqTUDcByittWYJp2V2ZouJAVN3mFc1TiT",
  "key6": "67XM1uie8UVfbUPuxsyc13oWkp4ujNzfL718UwuX5V9befYAhwVMPf3AVaSEufvdHcBwnKRnPMhp8DdNxosZVMrU",
  "key7": "3vLk7CRC3zMoWQjA77kRpYC88wjd7HeEcxgbqBNyem4FsnigY5EgtYSmr5hAZ6Ajx6dVAEz8MHKupkm7fcaX91VL",
  "key8": "5VbqkruSNjv34FaWUEBwXpQPaSpvMj7DcvzzPCJFEMX23YAUUV43SMCcS6HzHoisrer4Pnw1wBQ7fMhy5cBvCfZ7",
  "key9": "vYmbpUKpisJK2ajsgBuosetQMR2Z3sutxeToZdcaTzqqehMEDrVdEGa9GbNXkQKU12VvSq7qGw2tDJwsL1MhXGK",
  "key10": "4PRM4BxfHMfAgJ1QyeH6zMZCGiUB16dZKcU4bkR75h5Q4jqAmXa7ikzCzBn2SoN7yPsbMyAyujvn4499Ab313FHi",
  "key11": "3aaPZEpHY31GVrnnzv9izWdVAFUh4Ht3iw3asiokHycB66XS6Xn1MFhLNnkjdCUQBdckt7PF95fNGb8TdqAx6UTR",
  "key12": "58L1WRfVBW7gNDqgFsCz2b4DRjLHpiNWrFSGMSRCVsTAe1KcMccpT4BdXjJa34a4k6V8fNGLea7HHogoqriB6iRV",
  "key13": "3JefzdQARnVXtQAgEGVijj7348ocQDTWGC7pRo9TGscQ7QcMUyESWfUCy2ixNWa9ivZrJyf3AUnWyRFHkdvvd2jX",
  "key14": "ZyZxoHdTtw4vVbrEs9uBYfkfJrFthWgELKZRG1mzdJAefzZPCTuuci7EyTzNkPYkgjY6WVQCyHCgkEasa7DKJfu",
  "key15": "41azXQpgL8m8pQfP6edoNuw51kZVs8qzyBVrMDS9ZnNULLJEiiM7L6UzeNSfSQ4rWHSxoTYPJGj4FjrTuV9WWpwJ",
  "key16": "3RTLqut2aAQazRgp8rQiSE5uzTkHwc1tuYjtAD97BWMtURSx1EVTd2pxVso4A92QsgoymzBaUG47Lxv2ihWSXbhk",
  "key17": "2BTVVGesQU4qoDp8kUVN9VHpiGaawzhTjZiLpNkrUzKE3ZjJ69nzXntN7VtXiXziVXyYUWjGR6w2goCtoRsaLYFR",
  "key18": "r1bUvydDGCiaz7kZJdF6m2Y5Nwzruqz6t3kCvm5FKXgi4BBeaSPiFyyGkzxenDV9rc5YuzPdC4jNRW936KkihDt",
  "key19": "jFX7kVCoX6Atv1b7XFhNHPwdWtB6sNTBkfip3m7qRum3rdBwrd1mXj8DiZYiyKDFRmGevg4bSHJc68NGSybU3Hf",
  "key20": "4wdjhgtX49KKyyCQJENAuC2mgYH99RX8EYhaMFR7v5N3EjGxpfe2t2TdJocgGsy4KSWzqbLJoQ7gDPWbgP6WTAjb",
  "key21": "hHaT23AJW5a4yePJ22eRE8iRvQkxiAHnUeS5sL4X6xWMwkz87am7iAVBrMEoHKaQSLuWgM2nSFKoLR6uXQmH4ZT",
  "key22": "3MEQ6VhAJ9zmECQmfnqkpYWMnFhsZqPp6M6F5UwKMWsxcN7bvVmceD7r7D31CFN9bueHKCs1yHGUFfjTWzFdfQKL",
  "key23": "aEWupxkU1V83UgnTKKJuPxxAmMgTo5knQBoeYAhr1JLYgmt8onz1fFvothuoyjR8cz6wktpXd2D3RSNZ7uGqgqh",
  "key24": "4dMwNAVR9mvTRenboooQ9bzfs5ot4hNY16ozNjS78oCg1QmijyR3KhSFGJHSU7nw5nw7yVFkk1pgLA6Dn5eBEJC1",
  "key25": "3qeBTRyNxNZtXjzKBAdsNPFf6B8ZnKicBvvHrUzkxRZFuKtwNQbaQAdVTbBdXyaRfBiCwxKhpe4dFGVSACMMiGBC",
  "key26": "3UmJmdHPn7GAG568T3aSHoqER951sjxrdXd2bF9ZuKy4c9erhvRpPKY7SRjEmKzG3y5ybNJTW4iFbaPUYrZ3YQAw",
  "key27": "28V3rWZSiFDKHKgvDVfuyGJfCRGafBeEHs1VhjUgL1w99P3GZK7YHRxGqPFvGvkK1tT3kpdYkvDfDcy1L5es7Gdz",
  "key28": "52We51dywDtciXq9573tHjnQ3hKc9MiG6K6pBU9gs4G968UGc4AL96HBwfwiqMJDZy2yNeMbixCgfYob7qJM656c"
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
