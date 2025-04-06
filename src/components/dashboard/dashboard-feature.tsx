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
    "4Zqwfq33FuNKSCRz8KfvhSKwDw4k3Jc9swAuwqkZHhhht1Sf4JDPDo5AYxy1fK2JAoeBZVQ2P71Mb7NQXYWNBgX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ho83daPr41NaibxrKw3wEJYeuuNKTnSNuyhFcCzvBekqHcixCjfkdXR93vGSgib9KGERLbQTvPhCXpDK8cxzMgU",
  "key1": "m1fiaoqfBmqFGLAvzQxvZcXDB58rQR96gwFUBn5rpX13ZvkU5msKnCxBX16grGS1gpbAXpTakJUXmdWKSsSic1V",
  "key2": "2VUJkzuBYsw16F4udVeBjto9NJenQCPHpkkCG4HuPaqsLZNahaMpijXGYWp8MQfEFibhsCGQf9J36n8qEzmtqEsw",
  "key3": "3iUFcZpdymzvuSV4dXFzNWgWUmyUt9a42WRxhVDGEj2TRZ67ssCzL8qRuAAYejjuDVem91yi9niCQzEhosaxVavQ",
  "key4": "5BETamKwobz11tbpvaUaPv6rx3KpXYx5JybzVMVKx1jSLxRg5eNQYkTDJuUeRdmfKb6qKzyF3bG8FYxpXLzTMS8j",
  "key5": "kQ6ByUBHcT4APKDdYgzF28HuA8DA3kfVmCS73SgPHa48oKkfqXvCBSiLoijvo8Th53C2szHjcxusjxVXZYwogpR",
  "key6": "5AznSPQt8NnVpcWNNEUEaqrtS8UVAMYN4BwJZfGRiAzGeUvoFeD4ynQQ8Pw454Rigdaj59PzmCKg7fJ91jd9dXsb",
  "key7": "5KTu4RG7KPwT3rcA4V66KwYJM3VTTY5Ptn2GW6ofSwwtbKP2gR8nWtxiWb9qMTKFcdQmyeyiwNozinV8G6ChQPqi",
  "key8": "4vSmPy9jHKaWBgaA3Ch1gZNUrjeAD2kgwfSU46pAnSwe8zDpQJkibfgYAtdZx9zdoQB8HW5PAFud4xzej2eKRcP1",
  "key9": "u5qYbACuMSBrcWcjwMMa2xDAfb2zBNSEfB4xKvAoeKXXVPYxNYhZrbR33mDZykw3ATQCAfkCtkPWBzj8CKVs3yA",
  "key10": "5EeTzm4RaAjwXLgdVXuAi3pKk6jwKmJShNYstMEf2TJBK47cU2wQwRrYsZkGeQP4w8udtvrTA1znQ1pMeGHakcJp",
  "key11": "4PryTL9qPeMX5UDyNXiJJVmDQsRT1p8Uhj8WUTbftudSNW9QHrLBCuaNrLCWNFsCG1GmBL6gHTuhSAwga3bboUaF",
  "key12": "21PHXa2pS7VTBPrAUZaJcPZwX5ZKC79x1o3DMS6LyAr9AMNY3nzD4AQ9HvRGiXRYMatVNpw5BPoE9jaLX8DVNn6v",
  "key13": "3CPUGeDu9sxd3HnETfje7sBAGPXo5YTbuZLvep7YXPZE3W9mRTUzgkWYzhjmpFEuJkwscY2Azd1dAuJAF2XAW1VG",
  "key14": "mj2VaSiGy416aCMJQpehwrxTi5tURhyxVQGNqjMHkziGC4PzjCMxNdaCeP5NqbuhWW53oxrMwduUzDhqchLVLi8",
  "key15": "55TGJDMwt9vtZpKR1Vg6Hybw3kSkRNVEo7Tv3cDZbsHYsfhjnXmDCAyc6Rb3XonEHW8BVwxkg9PP55x9G2yhhSVi",
  "key16": "2zCfezVny5pvSsDSaNG5ZjfLJQQcvRyctvgvWcrRiKcnXte3xXb8yqsH4iKibCvti5cpTGyXi17o7mFNYVkdr8cq",
  "key17": "4UtGvGpqCS3vnDTRsJufvbfKJRwEQGFdybvC56FvNUvKwzEWarvNGg9b6E1dcgbaRUAV9A4FGyEFswKd7LX9n732",
  "key18": "2dZTpbX3Z95BwdFAHqH2pW44KSYSj17YXCGek8nWydZLQ61rJFCZSHN1jH9pAB9yDrdwzZWocpoiMFGNvBnMtekj",
  "key19": "2sa5XGYr7suRbBnBYRk2bwm3hTa3huXZVuWYxcPzhyqej99SLcywyhvjFNvbKvqqSi5WhSxyKVzXhmqfTcDfoTJo",
  "key20": "3PyaFQ3F39DBYh7c9Uk3SSkiMr55s1fQw17C4xXbr9fbgtH6qronepGDoLCPnaasLwczPDeL41WbkvxoSZVX67vs",
  "key21": "2tEJjBNAfyEwncwStajMRUzfURxVouNNscaPoLs4bx7Qi72jKvaKEux9FyHaGT23QeK2cpZTY7A4qrHdrsGu3voC",
  "key22": "v2CmqCubVsksyqEaJ2792ocuEMoGuYTMTijDHx4DHHVM2MBa5EExTtq7CHvnWNEUp4Z8ybHeY5i7hJjnm2oYhjP",
  "key23": "Ts3oSuHtpmghQWJbK2wU5jaeCscJmgvb6ZftwMroxQhDGNRjjB4Yyknevx1dVrSZiBSTprDP6GpprGAQxYRNjQi",
  "key24": "4F9f5bZXmnFh1ZGKLCfqXJqiU2CW4C4YAoDpqcABP1qeByXtBqrEhNyfyt6qWemPYHEo9XUBSvFRymydgvudVaY7",
  "key25": "2VSXQvy1sc4K1nVxEyebDhTJDsHzNWFPZCtdr9bqzyXRzvFEuGwHdDuGaiHkd9vYMYorutpf8Hu15U7zqQcTVF9Q",
  "key26": "2h55TtUaWcrzoocXoDZQfr76WF4WLNCQ1Fa2oWkhDwadsyMZU1R4Qq5hCN3ZWGQaQ6cgciA933ixyoYHQ1LhZvKu",
  "key27": "5vumCz2AmhT2oLJUFWKg5eaLztccJsTJk2LtNzY3r9boQ8iWawZLhyTE3tSrGDcKsQxMiFXNj4xcS5nv18AhKG7L",
  "key28": "39JRyD85o8CpeZiStJzkZfUTQ9avmNayAYPpNnZzaijgUuLLyeB563bY4Uc3tEpebZ266zah7ibuHDY1QYjzkiBZ",
  "key29": "4ixusQw8YafQoPQXtdbCG6uGaR6nZVHDUjmHCqriQmadBYhwdKEToBcRvxEUVu2gXT5QPFWHQfLxZgpjHozJDDu2",
  "key30": "57e8fh5Vis9KCCDkZE4Xi2Q55UWmfNhjWsQL2YQoa6RYXBgiDDfH5SfrNeGh7PVTf81JnYS4pZ3CaCMPC9s4AwTi",
  "key31": "b4WV9m5yyvZpXdTxZrtjQnZPYh9xnX9EHGZG4irqQr45CYeLt1xiyunkSJQ88ZhdeDbeJHgW7Ec6uEHnyDPNZAk",
  "key32": "3vyJXk2d2zvTZMQY6iHzS7HnPcr2yu93CU5Lz3KdMusfMDzL428p3aWEi1CpVQQJAjSYH5UHbTPsqXgsy3MHbJ8e",
  "key33": "4tGCj8Sa4kCB7vgCVr6f1J4n5RqFjJArMg44XnCUwaVbuQDbCZPmEix88MGANGZvjuNRAFJhnod8bjjYo1Exxfqy",
  "key34": "2PZnwxLrsC7KyZwE6bz1MSi1JxDgKHBPwfBz4mWSWfKMR6o9rLoyBaTfCGz1wEmtMpvVXsVNGEowTxcoPRPbpBvT",
  "key35": "2PfcvHk6t2CKMWdm5y6ku4QqnQaFpAFZxm6G81FtM6xFEYKzUD3xQSFrunDLDnoGZZMg7Au2z7tQk3nqiNSmUN9X"
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
