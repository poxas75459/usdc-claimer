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
    "4rdhhPFEqTAdHU8MD3C2EFKCoXy39zMmsJ7jYJAfM2exr7yu6j6g2Py75E2FQYdpDSjnJQuyiixeZEz7eQY2k3vA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fd2gtu1fgybPChmWzGZ6Tqrj3j4AsTADx2mBUCM6RZPX2nekPJwKZTbkDJdijs3XejWii3dm9cLGRMPWoc3xhP3",
  "key1": "4gggHH8vpHz6ku6sHuxxuoBrEq5KiRk7skBdesn9AKdzAW17f2QutB8XtKcFi3nQhAPKYSYw7FfcJeLQZafinqZq",
  "key2": "4y4pBv9FVenQm8i3JatscxYU1B3ugBqiLuT6B7Hi7G1izDaa419E6kSiNCj4i4PqpuoHDTokTkUDiTH7vis8NmTg",
  "key3": "3hjdqMN62U5zNusXE8eWf1PGnuBYJPW4uj9WKfcpJfE15hktjs5sxanEzzHWA1pKDmQb4eXMUsVgvFjmk1qs8Cy5",
  "key4": "4oy2r3n9r28NrirYs44ZZoBKJJqqpCJzDnnBiVLxjErojXQtSKpof3yHnh1ucH8G2AXT3AGoSKpDb9Agm8Lh6nzV",
  "key5": "2ydSAGGDPMf7G4fPdkxaJ7J6pvvB9ENv63x5yp6a7jYp1mzx6puvtMiPybq3SgpSoz4rHZYU93VQCktVLeMkyBRp",
  "key6": "4xJBtSDauu8YJhTtxMoLZPFLwUxccRc993atJGoHP2v7kyDz91moUcVwt5ST7UhTUgGtcszZ2JZoSJPH7fUwwMDq",
  "key7": "2xuQc7hUT6VVE5zNzZZPHq29FmeiY8quZo9wbZBaFzbbdm8bHUoZpT7J7VwW2M4UhQ9EtQhDSDNs5Rg8wgn59ebx",
  "key8": "4B2n3rZsaNqNpbCUZ9Pkqvv62pjCfaLSxBQF7jbo5FrLZvfxYVKAqCeQPCsgRUnYmffgmfeuj9m3jCQnCp8XLBWP",
  "key9": "5c6NXtSwY56WFitASCMp8KQuCfDjvczhkR68jDp9R3BDrhrQ2bHcHCQ5qRkyaphB9heqArj5eUQ8cvvne5Xd5m1y",
  "key10": "8WaDGFy1MT7k1mHcM3Z71a3qVcV3mqVqNqQVh9DfN4Nwd3uvn5rH66mRiJ4PAKXYM89x443iHL1u4jQQGnU8hBC",
  "key11": "38q5saaQspPCXj33wX27o4rcFEyEWqZYsBLWNP53ZoUT22MEy2s4v89NnEx7v7Qe2bbbyyxR1q35Qqc11nQhC4oi",
  "key12": "226rRdXPhYsULL6E6eS2xwJ2JsN87K9vXTygS35R2u9cGSm8YBVhGuAokm2SJ2FwKPhvDDg9NZeWbsyVEnYD1DRK",
  "key13": "pz5mPtUpjZUKW6LzusaAtnR5SoQci57XvvCxpayuxAJmxeK3fjur3ZyWWbwvXiDvmjxCY5KaJphnVFBjDNYFsAy",
  "key14": "4HKa2KK3Hvf4LkSnPusvmBq7pdyvo3WurWzoBQwwNBAPuTfjqed7agxsE2MyWZUXG7Sbv51hApgsPK9eT2TRGZnR",
  "key15": "mqZivdLgWwrGgbuc29hq2UBHPc8nURiSWnAsbmZqd1MZDxTsEKKHq7dseeB3FwkwgRkXXxtCcRcKHKendoQLJt1",
  "key16": "3sYrn1qBHeY37GLz9VBrnzkC9J42VWav84U3M2sSJtkpWT8Zxrs3L4xZEW7r7CXuAZzyRf4QWhLpcre9khDqcpSB",
  "key17": "2kDgURVgdkBSx4wBnjUGfHuVsdK3izcZfGykTSGxU6zemZGMjyvC4sj6BUt5VK4ve6gDyjWSes25peUnPzZ2Bc4V",
  "key18": "5mBg4eUTTP6d6tx3dQMaFdTxYc8VvuTe6LXLKntQtUYxYisPFx2u7xcvmNAxM2dRYxmGWX4f4wyfFc2bhRJewZbe",
  "key19": "4XJXoQQC47D47yzQhQMWh1aX3m7jYNfd4JyXLy4Gdy5RTUisVCRZXhGMcrvDHc993HJe1CnYgdScqkNRDwjG2XK9",
  "key20": "5ZRWahdsTihgbPoAMXYwgEsRFnVgg9NhFEaZcBrCTHTgnHwDb99YwSpS3jg6bFDbzAjkvmmReVVnh6rWHM4RZNPj",
  "key21": "5asPthHxU7xu6n66q557gq8vYCynptWwH1QJNSSdpFftZ22mHFFktsWxdBt7pEyhXpa87RBmCyzE6TSonzpUotEk",
  "key22": "4PpS57vfDw7oERxhdq6jwHjVY36JJrduWbdutXWQqugHn4Arbs7rGzp7UaoQJZxmHSsunALrmrrGihuWwMQ4HMsH",
  "key23": "416hhM3rbEQx1zDZJqmzW6yaFDgHVPj6F7xs7GwyfHUaETTdFUw7k2Ee9LDwkaujr6viea21V2ZxyzKwaBsCz5a4",
  "key24": "5ywfFwESBZsxuKDu4Li29w4JPiSJm3bW5zgv4MiZ46yZPLcWc33F7jMKFaovXsYhfPSp8sf3xcUVEofzPQ7dqCvq",
  "key25": "4t2ghiWceY14YUYYagQsg6C23qvKikQ71e5hU3NsQx9GgV7CBovtncQJPtSNtAEYZgSHU8nJySZH8fR3VB94cEFs",
  "key26": "5BHn8Hbb7YBYf6svKCHHZyX1zvnYMNPobv4MwHGFE4oo1cLJKHPub5fh2iYmrjftFtPqSxmpeufQFVMJLSpV1VFE",
  "key27": "gqaWUbHFS3cLKyd2GxfgaRpSFEVQmMBT81L7kF4FrTomB7v4whY1QuP5fBDnefFJ6hbsbb1Ze55S5MMVZbGZfsN",
  "key28": "38Un5YkqfGSGit3MhfSgDmMyDNcAVP3SmWuDpHYDuXrQjsNWdZpQW8X6ZBjcFfbC53th7B9jqtYfBcFyqGH2MxwV",
  "key29": "4dFsnEfzNAFMvHopZGc7sPnniEMh4zvd1M6kLvi576q1ES27sFy8YUR7NBpyH4AeZmkdHkYBrmWqp2XhXVo2qgE3",
  "key30": "5ebLTc8mw5a5BkAzUtqx13dBnLhG4Ky78KsLhMaa91pyh1P8kFPwwLt25EvUekSt6KL1RV8shtGTkU8pYZ3SZqem",
  "key31": "4chUtdKNxJdcDvHQFBHWMMZ87FpX6qaoZRvfi1HDdPnrSgjhw31K4jhEP3XdT84S1Y1zwaVBF6Vvp46KpEbCr41H",
  "key32": "5qu4guiBsqi6aXAA7kjLdfuXnSJdXGbdHjcEuy7s7ho8YjFSqeGpwkqmSYe8vS4QdV6XTQ6jGsB9TJjHmm6mp6W9",
  "key33": "3EFmjukur9w3ghPvr7FbGTd198vkcrDHC8KxWv15EmitEQouC1pPvbRm4PMFQMYGtg81tDCW1hVKwYvizMZ4fbtf",
  "key34": "4GWXsap2Pf5LQ32fWE3RNBXjkdbVxzCvFPtgt6Dhx9MhX6DRRycP3SVybgknmHaboQMoeo49Lxk29m8wpwLBdtBZ",
  "key35": "AfqfRsLc4kyunT3x8Bk4QBj2wFN8XJj8cKgty5rgvV47W97BcK6MfWU39iLXQALX9SYfMtqhnJGL7xjid377qsR",
  "key36": "W5GZ4j3MBUnLfSpL4AE1gm1dg2655JHKvE5ZL5EWeR6aWzAw2WsrYrtiDCq1pVPKqhgcCaPdkxV8psgcqFXSn5k",
  "key37": "2SoHLv1EkTG1RdKLzpkRXvrCn7BGnAaDsH4NhQxWZEmHFHYHivZmsVFLFTYd7GNx3pCQsLMPxNaBFj6Gwipn2eyj",
  "key38": "4iZeBYhuMqgSbPidH6FG9h8T6rpe7Hcq9BzaZxge6bMnF2waqCVaYdpyQuD22wPwfxEe5NNMdtXxptpUvzuYLUtY",
  "key39": "5o8BMSGVCZ6w7FPFi8xeFkqwovsBt6nbvPdXsw5AiPJFqc9HT5ascrBADcHsGxCVWeeUzvs57sm9HcD7kxwbeG5w",
  "key40": "4Qn6pfFSnGnjhZrDfEp6D3G8KfQPjTpwPBu4qc1F9RULsf4UrRQMSewJWSKRkUi9pbx8DhqvK48tKdSb8RLyvDJ6",
  "key41": "2U5NUZdH3aQBDgo1XUUn24K6UYBRuLrJeoGyP3jMSba2i1QxF7wfyLu5pn8Uunb9MfzNDWqgHQ4vRrjoY34nf6Ff",
  "key42": "4H7Xt8VqSkmDq5GxGKnvQjT4QiThbLiBkLKA1r9KFfyuKUT7Rhm5ccDEkEq8ZRwir7UFRXfiM2ePTVPBS1PHDpYb",
  "key43": "3eNTfK5is82eLafCMpWvWHDSCKPdWTG2GfrRppEKtji69TJ45Gzit2ai2bgBcsKE7XevPVJNzdoR7TdCxQRWo8FU",
  "key44": "3gprgvgiRR6WjqdgeVvj2w6Qjh7jJvoGFJkXfpDz9A1CotUNR7qErQCpPrjZLBLdGmQCtY81rd6DCd3o4r3vXFhu",
  "key45": "2ZpJz4SJgbzdbrmXCwXV5166vrsR8cpSPeFSpzRvbdx8CWMSxFcwwnCVxcG12o7A6XXvoi5GEWBrvRFdD9AZvo4w"
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
