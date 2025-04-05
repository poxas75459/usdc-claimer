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
    "5i4BADdHymP5FUUG5WydXSy31NRmgMpa6BrrBmqSTpmRsiLTZjzmQm1vv6W5baBANbAzkR9aphEGrfx8P6BHAgkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ES1BVDRppV9MPm8cqXdrPQ1UknB3jVQFw3xTeftZ9h1PdDrLKuTvxxehKdGGh97tD16JCMf7ZSWmYupSgFN8wzM",
  "key1": "4LhShTjmxhbh8dM2awPUxcLyWqxdJMHjSPdENMmbJZd4yjaLYCGwBTDTVG2VydkBmDJkR81LFkA74nzbNFn3P9iu",
  "key2": "4aZYSCDzdT475B49mSw78zgLcVrXqeRQjizHnmmSFuoaAQyDFeHTtiL9TeciV4JaZpzYiz4SJT2GwVAWJ8bWmZM5",
  "key3": "4eYDyEJgki8TgiHB764zcCxEGUtdXjSQwAGPocfSoh9hPRpzP17Bafzup5ouLYp9fxjAtNqm4ZEyy9MsP1kNM6W2",
  "key4": "5PYUMareNjfY6q3xVAVXRvbk4sqAGsWkQ4Jx3Y1VMg1CkJQN8hTde6EXwdygoZTK1FShyBomWus9r1vUABUsAyMu",
  "key5": "A3FEx37pRsE88Nhe1GYaq1LcNgRTrQoEd3NZSiqRpRH5dmWHzjyMXrGWfbbQiCYhRE7mdaSdodrJYneMCoYF3mJ",
  "key6": "5XLubRt9xW8UyCnEes5wXf3NDQG1okYsdsdDUTWYQHFa6i8sYDgBJm7EQFMf9QgpaNiveHpYPVcE3YWoVyMVo87b",
  "key7": "3BDt4yPKJ8YVaGeqSTv8FhRGHThdmkA2bBiNCjiFzQBtGvdpXUv7nBu6hRRfsL9igoJx1sSMXiHv3owo9nN2Ny2B",
  "key8": "4vV6WcH9mFtco9GfgXQ3QbNZm4MLdggcCJS6ngmneuFcjbXQcZhccUdJun8a5mZZbC8p8BkMf9TapGPbgSUjmeae",
  "key9": "5V9iWF7xiCDjS7MLKjyPrPnf3weNxnVDerMbyTPfQ78SxmUz3o85JR2QdhwjuLcrzFczuJ1aFyjxA3H4MeAGgrjo",
  "key10": "5LXbn3jns3dB5iLMfedD4FMZDUG3w8bn7uRj5ULtUdMAsBQmWg4vTDfsQGeo86xxFpx6ExDc4AXjKzt6Anzvy6dk",
  "key11": "3ggNF7Z2LaidRE5NvX4Sg7ZycpYZstzFgGH7DbMn3wonGsZtptBi4WENfhi3cYXSSwtTq8hGRZoQmPCypTf4DKHi",
  "key12": "4zgTzyK91Rg3FwXQ9o46budbSRA6VaQsJooniiLGJ2toXyjhVNf1rYn4mRguTHAg1PFYgZRBotQqWNJmYZ4C22QJ",
  "key13": "37vE5PjSWTcuUvEZqFT4ujY5mz6rXKsbQzTrwETgfr3DP29WVs8J6JktQ7Kz6QGk2nwGGJVS2rqgPBe8WXDJ1xDN",
  "key14": "54WTT7uB2DTxFvtKXAdm1DMRgv6NLQrLY7AuuHRQj3shEUKEK9EmkmeQoJfALhzGQjk6Lz67vX8nJ4BCippLs6kt",
  "key15": "5VokBiHWJvVpEtAFPWu1UH4BQW9AyBWKb2xbFRrhtnTKJrwgCkiA9GLuU6GnVC6kFVEXM6PKHZaqMyPNFC7rvCKf",
  "key16": "5p99xMCnkLufVFBjCxKUyUNu77ebzuU5XnoL6CyjA82feG99tBXsB1dncDYzMd2gCqcUG4tEVXQW8cn9BPBpVGQE",
  "key17": "5y4minRTJgfYBQXDjmEsWtntcqqKQHCnpXLLpTTqejJDLTWqyco82GATex25m855wnCpvX7PmUKZshTz1rNxvE2B",
  "key18": "2CBheGQbtuk4invVFGoqw6wSUEv2WZf5myHikpSJ7waLT4hFfba4peXhg825z7suaJPRn4EH1ciqpnm6m9SDrAQU",
  "key19": "4YXAxCtNseGtqEyk5gYsGxSZB6fCz5GiadcnDv57GnNvKM2YFnGJXojgZHPxCW9CdPokLXiez4yxwRWfCXCeBFdT",
  "key20": "467iwjqKGL6kbgiWzdCWehgX63T6AuZU2kGSQaeX7T1NePpQiqDqDdSWLDYMMcWbxVQzgUkBd7LKyoSrRTqdqky8",
  "key21": "FFuiNBtmBcaKFNwkaoNMQ8bT4Ah6Q3wRMov7cDvf8aNywZ4vo1pG6n2xqJ2D3i7FdeWNdMm9gsEK6qxet6L7YE7",
  "key22": "32Tc3kZNQLUDCNHiTGQqdKHhKFNk6vwYdSQAZdG722sbkxZxbHCejzho159KB6JgBvSGVnXHckTTxeYRrV61MZGm",
  "key23": "4kBe2eoCGjPrasBNSSBW4x23ivocrvntvzNVetmG9DYEaRfWjwCbddLJjk9EqTHd1N1qBqfdf5cx5dJuAfJjK8ss",
  "key24": "5xbe1F6bY2gmoyjSAH6NqsEkw3wjwP4b7qgHH6szkg6P5PSs6Ddthz99R5xiVXPQ69czg5ovJzZ7mGJBKZ88brtB",
  "key25": "5sNgdSZRXFrR8T5FM4HzsAArDa9QpHkvjfYAWeX3zZML6rt5C3rJeSxZBmBj5U9rZ56AHBKCA5QiKygDnCkirdtR",
  "key26": "4M44MURXWJfMj6ZgHhxuZHmpzdAc4nRuLSWg2HRa5hjmWQ5WocUeLTYt6s4j7wm3VDxfkyDFP78ZgazWyEgDA2Yh",
  "key27": "2SncSj1spbsz2cEVDureSytBzMKPqnF49CFoF4U57b4da59fFTEB8wk4CoGt7JASUMX2pikAr8b9zQB3TmpScX7K",
  "key28": "58rMEhHPgqgBuTFYjLS8oo1N7t36BKqxTjFR9thVy1S3DNTX1Wz6RRmetHLATAWYprB7prhv2ifJvgJECxMesWs1",
  "key29": "3Z5KYYHytWReUjnqsHBC6zZRDyEuQngJJV3o6xaruwijsWDpEaaBUWLkngbtVuzUd43XR9hH38wpqs1SK6PCibK8",
  "key30": "DrPZsmGK7ncPMF5GAPyuEXp1myBZYi4NsLNDCzqgstnzLyXvhrGUmgpTbqHq4hUjC1pUgkyWVAEWtuA8r7iKoVQ",
  "key31": "27BXmKenHmcJamEYbA9WZCY5EB9dv86Hmpi267wkFcA5CcvtSbiKPnFDgMhLCQjom1LLHqnGCUUaaFQ1rKQ3Jvcz",
  "key32": "3BDZ2ZQ9iH5g2YBhkHuKEGaksHQ2G1utNZ21N2UZijMJjoWcvjpUkkSbwu2pHaDqF6ssPyesdjYx35d63fJSk3Qo",
  "key33": "vz9vVuqZdXpNgV1qkSGHY77P8jrMVpaJNfE7RrsoWnP185j1JHC1hTmWi5sZLyUnoDoM9S893d6TNWMHoDUbsy5",
  "key34": "4nGA8dK15HG4mP5jfE4vZvLoU51tQbgA3rfYcc6o5GuYFWn8uqsUxWmgPmMugNc1kTVZh1okSuBSeNv8dS9FQMyG",
  "key35": "NwMVm7zwL8vF5uz2vH9vtCqgTn8C3yVYKDVYh2CtThr3BHYmnokLJNjqZsXWuFrzjuUFVpMk5EE8oKBF62qZEDG",
  "key36": "4hSP5A1HkANvTHQxpFC7sNMrqFEXHYCaixLY1yr8Vc3iPTj4FpLq1qBzmK4xV94ofAxwnbbrf2pJhzH5Da9jVeF2"
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
