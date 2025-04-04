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
    "4gtSGr3xqv5onpXvDwd2BDTgnAruT3Fm1aSq28rYaUz91SdSgbkfuPyT5yedpdQynGNGhR83PXi98YtdQW6RvKVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWuFXiySBU2CyQh7Dgw4uFkHbSgzsq9DTSWK4x6NzGoFwFLnAjHfpn97kBC7EvZFMVrgo8S6rSJQN4j7VW4rMtN",
  "key1": "2okLTNG1ZVJ2t8o9woKnLujEtkLocZyEe1F3mBtVN2UdsbibBr2rgR3KcCNSZ8MdLviaPAHSarYRrwZU6gsLBd68",
  "key2": "HhAEkrUFya5HhkCpCjFfrSQoPhufr4gRMiYTqWryCL9ixFJMgWQLyaMAUyth1ns16d1MJH6osoAQVYjwNy3rasi",
  "key3": "3t3j7sBFDiEDfQd8KKhb74cvCzbC88XkbcrsJaA3etEzy1CgBaDuDrBz7iWJKUrf55HZke7VQRRfPChxtd5MA1WD",
  "key4": "5i7bQQ3upUn8DBYzfoWW6brDSXYENPAHho53TQ1t3wAPQFLQyaHzjj2DvmTsvMhMfZRHurRqg6CMGxyUQmhRFnzK",
  "key5": "3thQZpZsu5Sk9CUJfBnGSiDRjsfHCLiSJpaegM8i6FPf1i9hpo5YpQYdNwqhFkcyMkXCVTpspN8HKzDZJLSXMoqg",
  "key6": "jyZ6rDqFVWSNVbAzAD3LFXwCto12ri23zZ7gJey8nt5D9gj3NRtw2fuc1XKbiFRc2CMrTLuVM2hQTvPhnKWHDKu",
  "key7": "5r9kxxigwVzL1yx8ZvS8VDQXffyoL7MrgGsvVbrDEjnKu9rgXdBj9kCZrvUwCpPZ9w9dgHo4Wd18HcLGryvQoafc",
  "key8": "3mQYCXe8eNizrCuEDLg3WFmyDbR3FUeyacakg5VUKwRN2aYNYrnH3vUg9qcWc3BeWZJRF29D1hfsrya9VQrx156a",
  "key9": "23uNaNHi787sajXGsZs2YHqWdm22DXd4cJbapZqUwkFSsvjzjgbnVgMWkNFa8ijsNoFAcv2dEJCf1yDpNprQPkyo",
  "key10": "5mv898tTLj1Ur7m2mPR1UnnxjZ4MPK6k5VbXU6Y7BeEdvQ2zjmMobXt1zxffNWbjiqa5x6iCq2NPnAv1QVnF6fMi",
  "key11": "2f1JoLcBg7eGicGcWUZ68RJT5iHxpaYoeju2E8e8ru9SyV2rk7RVAqCqdZtNHk6ZsEEAFsKbavPdepDzaCxRAiTj",
  "key12": "4bxjx3Nswj9qH7uVSYZqSWHifDt89ovTZoupjwZ7TDQEz89KGG3Fyk7uMbXjtRBsiKZaHWCthGMWLtUgpqwZ1ka4",
  "key13": "39AWGgfLDppFFyShJVbG85UttcNKLWwM3gsDc6LBGHpzYRNJVqu2K511RbteXsbiir9dWqMT13XjhppoXWsrqRKV",
  "key14": "3tZiCYw6RfZXKdjwnBSuvoPaBTQmCuVGeK3mFXqMgjAfV2fzvwT3AdofoTgEUkWoL2yCn8WPWsizzFHyAWPwnLUx",
  "key15": "2isQtHSnCBTjykXZKNGfbUBgb6jC3vpM9SCm3z44gy5eUYrWMKzbaYrwscu3dX14ZpqnAKdmXTPwsvN5rdsE9Uxw",
  "key16": "wdZLR4U9rLH9zWxgHiLUsPGWUGHRwRKzDMXynAoSqYNXTnc2NWdVHrLLn4eYpDcVCpYXGX5C4cewgbPchqEP69R",
  "key17": "2bj7j7AVBw159HBroJg64b8sUWYxm1HEkw9TtGex1toP1CL2HkpZFfZvy6x5mNQ56dDMJijHeAYX9fjgVpYGoiso",
  "key18": "65Yyc96t59CtGzr6JQxCKgy6Z15mt9aL8txoDavYjKoHsFoSfebgBkZcf2HKBFjC8gFSaPrpiuovGNJNKBsByRHA",
  "key19": "4gZtbbyghxPwVVjpfo9p2QMnms8U5yGUCAUugei8LXrta8EuyVzJPpqjnmpyethf8caV7Bw6fm5GgsWsbDgeqMF6",
  "key20": "4HqG1TzWgbdaXUMBovkEYw7hbvgayRsVCBkys43y6uXw5uP8rHJ3M4xpvfej9DMDGsG2brd2yrjMycT69fusnUHt",
  "key21": "4SkmnGmrT2Lzrn7KZYrYEDtgj11ccEeWZHS6hP6w8sLcxEs3KiLz58j2AX9xhBcKKhcCDLmfWUcTg79RG65NRfgw",
  "key22": "28d1YgdPE3xLMRuWJfCyXDEvi3mVJP8vDge6Vz7ta4Yo11bNi5b3pwwBne4JJz3TiU4b6LPhWrDhptBFTGyCfwoV",
  "key23": "43KTA9VvHBFK5tXFGuTC3xjEHfhCopggUmxAzzRjPZmYM1J8L3WvuEqF7194DEKukaSh9Wkw4xyYC5E84UJAzVsh",
  "key24": "5DoxxGbrE2wH4ACEhc6qPsyqeADyPSHNFFPF7TH2HxEQxTWJNCVAdDnMTQtV7gwbTsGWwYq8ZQnx9iqWxVrQZLVp",
  "key25": "33rBgpCiMtBN7sXaTSceWjuiKY7oc3NfK8DRFcjS8dG2MAY5QvXrPHUxzCdk4SKtoyGni4rYp6bgNZXnn3htqU8x",
  "key26": "xMWuvgtv7zaj6DoaCz7dYkanvhj3x2nxFx9A4vzjYhMBuYa88AM7mu8sR277qshpaZjGRUC9EycfweV6Wq8rQSV",
  "key27": "3Pon5tsPTwnpy5xxdbCANyehYE5j7C7ceLWEfW2LukDFBapgLC6u33G5QEK2NJLZTjMiUN4cxpUuGyDb6f195NVP",
  "key28": "5stsUGz5uV9CcKJHMYgdjNZ1T7SES7hnPM34xgVLBcQDpdzzyrMpCtVCLM8H4VKdaYwjNJtux6ELSRNbdfXzmRSj",
  "key29": "2AM9RNxTQNuZw1AogUyuuTKcMS2EGmyLYC3CfrG5k5UasXGEsrtdiKpJL4cpcUqqe5tF7WdXoqSJ1tCSkho5R1yx",
  "key30": "sbVk2TDu6JfhcsMzM1vx7ka2JiaF2UsWk4SpXjLQ55b8nh9B3dBwKtU11SPAbf3LQ1NybH9U7b5JVdjJszz1exY",
  "key31": "Y7bDavAAHTo88so2vN4Xkv38mJJaJDJGvmrSYiYqMhuMTFdu2JjAzwA9AavGTZfdYLDrNQMKKsMZWcxXTn3oaEA",
  "key32": "4eSuQQpeRqBrvz3peozYPnidksWopmMDFzVafPPARpt2QAq4XS44qatzWjWeRpo4yZj9kWZHEy3hLRoSSQnzfeJ1",
  "key33": "4WzSjY2JymFjjfLW1zX1mHCNh2zht4PGy4WEwodTtnJ1MhYTjSTTt6ZTRWjs2zBYoh6789NDz2Yw2mXCP4V5HsER",
  "key34": "4ovMbTkvW3kTvweGffpjuQfidHu2cpQQpy1V9pCkJp6BpFLYWZ4UcuTGmW7BS47YNtshh5BKyXsPSFZaySDDh6YW",
  "key35": "66TW8CdEJrN9fiLECNEy3kEjGftqcNPN8hN6S1CJVyKFT2o2xaR5YvMYUY5DfDpz7rDAMvY1Bv9oKzf2Xb42HPWG",
  "key36": "4yvmyoKgrTqm7u2ZeoTgDyJZUx8zD42Jc6LUomx3eEx5mAS1ox2zn1Me2Zs9emTWsvykwmaYpNePZ6ZaeZEtLxjE",
  "key37": "4c7UuQvUwZvHzAMnTwPZxgeFAhnqE3nk34gLm3125fMoazxDKgtxquutGqMKi3AXTgpiJHm4BrQD3mGEuFCDXbwK",
  "key38": "GknPj4FMnBBz1RJ8fhVH5DtNTQkRKF4U22prYHYyf3p1wQ1EQTjpXG1SR8fBBRziVkyZzRxSeN9mboMcFmm5Ese",
  "key39": "5ordWYNdgxkB2Cg45ABinedB1NnGZzkDdN4che3X1aXnkyazDLcMMvCox5kejzb5yejsaTvcnCq5t47KNxv8N3nu",
  "key40": "ZohiE3rKoi5HriGvKbbthH9CmiLkGa59qH3TrXHjLgaLy9wg4ze49mAN4JMr7e244JQGwinpLHqn1iNA9KBzmkq",
  "key41": "5EzirtETHPgCwUNCWKASGWXdtCXiFYqpqpkxc5MFcJYiSkohgrANhJTL6ztwnNXzihHQY2sPpUPUaAmPUXPVhYmy"
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
