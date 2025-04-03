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
    "3js64qKKYy89BQsG2mFJ9794LUNxuKici5DVw81RAbqkWwgETe2qXa8tNtCdXJs174bHEGBEavLzKTxpow6iZ1L1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fq63BKvgdTvu2DWMQDYc5EutMNANtcQ5fnschA725zsb23s25jP38hVVt7dc9qY9E9HWhHC5XihyfqPXJMPWdMf",
  "key1": "B96YMSZUFU3wHbtDCFuMJW8VEz4CXzNzUv8sBWrznooUES3KHuC2csJQr2jnc6cZsVwShebnYRxzhmhrCf1jaej",
  "key2": "296H4NPkVVbaPVjP5ECSmrKsFP8meT6CcNyentnVHJvea8WF5x86EZoe1empssLecz7Y4EXHiVF5kWZtBu263cCw",
  "key3": "4cEi2gVcWQaaCKtYsGZELHn3Ufe5rSEiRyMfDgXY2HswW5aapPYxZ9RoQBioCXXbRkDmStXBCtxYTQyDQCDXZwVa",
  "key4": "3omMVP16ubmEE25pDeFX7jofiRYhVPbDw4kndnfqf7nrR8JMCpSrDM6WdNsM4bRn6ecRXJeFaK6CKUoipMR8VmtM",
  "key5": "Xuko123B98qifcbEPrrvspxor2ZtMMY5ZN6Kjtcrwyb9FfSv2LDsJc9CpXZ8J7s3ppKhqYx37gLsYgeypHYmud2",
  "key6": "3mQ9d1Vx98BXwYQC7pp9vjZCWZJxB46drpTFbGyuvfoEtdG6WxuWSe6mkEn8ftN1Yn42hCfbWcXSca99fRwuEEEz",
  "key7": "XSyrd4Ys6kxbm1B1v9Ek3uMEx4DgxetyFwf78j6QRh6eCz7W1YjkJYyqnTDY8CeHKzB3Hs73J9tK49JFYB66ti9",
  "key8": "5AbqijPdYf8MMpvnSuYaY1qcDxxzQqsSyuWnqwpt1vKVFumgk4n6YpuKk2qcxCuQfd3PL4zCpAjDkzti3bfaSrTf",
  "key9": "4JMrHawaz7QKWZp6Efc8sGKVVEaDpAUQf31qxwXjfj8AhQYpo7ge6ow28tyMDWYzcFaQ4yiUvFvKEEjSjP9U1hkr",
  "key10": "4Qmkps35Et4aSb19sfBq75BE9ASXJ5s3MYesnH4Vu523xZhKTzT4ycMLeiTHbCXaUJoxMMtueMPKWpboT2n5YaFf",
  "key11": "43XvDXzARsWfXsa9t1EhxqQmz61yQ45mvWSwe4XP2NvXXphoxxmvn5PbrFrT8Z9aj5MzyEx576ng3BGoEFPbrpSj",
  "key12": "4QBQ9DZviXqNzYFSRPQVyhuLG3skHJvMCbyQJuzrwX2RrXYfNpGFrm9opuHhxC18y5sXtnQ68qgA2hi9JcuHmKvv",
  "key13": "2HvksY3sjeHaGgf82QrfoW7BvSeyBBGY96bw3tqj57mQjf8Ue8oDpgQKRRELwDNX9MTr2gZ9fw9cEHTdjYtSLCQt",
  "key14": "3wHX47vs5irv1nyG6U5jCvh4XdEJCPUwebGqQWn8fxs9LxV77dDZYzetrTvFxUYBPpuAfH9q4i9LkFAbUuUaeGiw",
  "key15": "442rd7etDC8Eu8NEkHcJe9twMLUQdkBjFTLpXRp3TrXbvfUTYfUwjYNSBrm7N83Tj8Eaagc3QbG3SYCGP1QJgNvy",
  "key16": "4WPX5fPbGsxBA857x69XXPSPGqEeCQr2PGYUeQMyvvfksNzYXTL1KuyTVZvyu6t9SLyC2Y5AEtPrB2RL2s8VZnMp",
  "key17": "5X26X63UuQTJvkzchgYsz8ZFXkgCFHVZWRxGkU6QDyeQ3Lwiv9uVatBk4JR3UYSFqXk3KrJ7hXuiKP2ZkhXPnivk",
  "key18": "2J7iutmZvB2ju3cvbhipktNTvPZ4rrpR9bpGekJzL3537CfgwZE26A16f2g5fSwF3HC9nRugE1Y1A7RXf8hara1M",
  "key19": "jVQWPQbSaS3qyBSBByTSMAE43EWvK3MmGuoqeUa9ZBaVfSSufAn6GJoL4basNDztVKmEwVMn9GgucP7AmiprmnE",
  "key20": "4c4usjR4rsTA4r7hyea2Aa1q5QEzRxKqLnLPKLveYfeEpD5AmeNvNRpHjQY2VpWQKeLqrMdV4rBwCmposR9EKQAr",
  "key21": "WVqqoChAZxns1FinBWBY3g4k6A4BfzJmVeV2dVCjbaYamgnQtBWW4aK8Ayx9U93we1EKe1soLSSoNaJx2nPF5St",
  "key22": "4EJyVv63xDBykGBvVKq3d9WwYhR6JsgY2YzHVXuge7ebJgtGgWppy3Y7n1Ey47s397jZM8sKuYfdaWQQHCuwXgVS",
  "key23": "Jcua2XkwN1s7a9sBNoBsMctJsQXSdjVykkuYnhSqjdrm7fwQKtajffvzcBWJiaZkMZAoC8P9hGDevFWL1yW8MQH",
  "key24": "63gAiB6A2Utxsf5qFaMb7Poc6bpr5PEKhr1pm3uAkqTJz33KeXqKeWmNgLpzTUxQ5Hdz9mAH2ULoaA5Z7wXZMjnM",
  "key25": "3bgL22pHHrnGexsk5qRfzxML7MnK4JUbCRHDCwZ1Qc6Vc4GEaeajySk8eL988MB73kBrzYPGpBishqD1Fvue4BzK",
  "key26": "23Bp9kvkNLreRJnthFMXkfBBAofDuZg3vkw96b2icPBfnVKEhJnvV9cZ8b4Ngy7QR1cprVipCmYwsvPtggYnVpTm",
  "key27": "5zdr4EsDvLn3Nr6TXa2JbCkxkHeHorP5igV1zMg8serwEMbpwR6ChyAzWh6oVes3XxHWHaJD2BueWWLWYxQA4rKX",
  "key28": "4y6QLMNEZs4uFZ43UxsYwYUmAzEH9iANH6R5dZwVNZXng1e359pmPS8jtidR6dEaFvStRWhromckvUWm3Qicocsx",
  "key29": "6tDPHmFvq42Kp8J7GxCYeJ7x4UT4Td2n6i8sZvx4fYFig4XMpKQtRNrA2kcQerJBPyf6nfihtbnijfsf1sMvqis",
  "key30": "5WF2VfS6yD3nVVhC4wwwuiyPsM8NDycZBLtjZBtBpr7aWo9CTtB4cgPmXh1kC2FKNveGo247YhsbuoxLAqpUdLSY",
  "key31": "3oSPFc7QgZjebG4W8f9EcGWBwf4z3sCGnxH3tPEERs3YQacnFGWNNnaAs3Dpc8uuiT651iqXGUA1a8y2euerZ4gg",
  "key32": "2MWYeVhGtb78sjSuJSJopZDzwSGuadFdeqL7yJeYumBJFbgB3c1aWJhtiKbfgv392rXvMgRrRtR1epLcr9diQkeX",
  "key33": "33zLJRPnpmERSc59h824sKyCyxdc3JPSYmCt8bxNy8uMdGXpYj9hokuKgZCQCo433Zqkv5EZhvuQPJCSRw8zZjzV",
  "key34": "3hGsSF9fLcYEPuWerciUNnPeHRdkdkzvPLg3sPkvUm9uNPM5L6MoADXVfKSo2NnH7D91aEmmJzxVd432uBEFLuGH",
  "key35": "4vSmmZvLbAHtHiqT5LGdrUgqBziibSvRdXj12hv5iLtMmrY9TQuP4Y1d2A1gZffX1chzptXPsXUMWkQWG5zRbBW6",
  "key36": "2K6pCXQt84HiZLcy9xSsfS49PePa17gLr5gQZT888GCUZ58oCAD1Hf79qDZPhhjJx1hvupE7JeNuNCCQYJyQFbKt",
  "key37": "hyayD1u24KQBgFCsBtKDhoBbaM9VTwBVgoSa6XrkY2MXP3w9acbSWSVPgQ9LpXcNi3iNhmGnRLqiez3auXYBmgW"
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
