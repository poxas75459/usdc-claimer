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
    "352y1PHJ7VWSFmmdKWZJMYJzr7AibGn2FGMMmvjAxf5eRBNhGHVzNsjw4NMsMeBTAvcyMsZxiDjXUZ89rG7VcyDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ALPsYydNTTjUCwENqaE3sT5RkYsUfW61J1ckgVGrpZapUwW8s1QcRNknq1VesRo2KC4L8YHWrMbRMFJjrZqgvo",
  "key1": "273W35LVacxnHHf5AgiZ8yjPckJvWXGCuFJZ9zwTJfk9X3mzYEseYxFtkBrAc9EyzdeFx8qae5D8aYwFzemHHQs5",
  "key2": "KFRrwztk5gzoNRxUHPULL4UJ3C4jBMDUYTYv4cwPuhT8MbdBjt3B9VZZojiAkcmVc8JVdvNydahcryGGFTgbA2z",
  "key3": "wNF8Vi4SaePLfvn8byNeVnhCdAesfYauryCELhnYbL17UCyxegVaWncgHCJ8H8QW94E45aURRticAMdGo2fMoUP",
  "key4": "47PMJ7Z2ArKky3ZnohtSFJrDkHGaoo5n3WurzGeX2RHZt1dPqRT5wE41kfzC4DEnYCADfZPGTbYSC3adw2iN1Dhc",
  "key5": "2fZrQpVcJUepebPECXiM9r6oPgV2GtWEVeqd59nmpxHG6WGACrZvxZYiFXDSbsJa5FDkJuQNT1CuEhs7YEdPXX52",
  "key6": "4is6xzLtVVFJtUitUiafAt6WPQ3ZTGMAdEcqk4dWoLKDE3iK6onUEpsWk7EbJynyS5w782rizxtbsbTdcZhwiM8w",
  "key7": "PvT5uL96ShdEgXJQWdfwsE6L5z3kSPtj3MrTpfPcYXPLcUzhWKbK1KMwu5RBstygTCsrFPEaGHomZY4RVvLNwbA",
  "key8": "5MjT6ZU34YKveavXsPvnBDZBZ7tBap89HpnLAyWyetHMbNUtWNfGQbFJ7zTgo6GbypVSyXWBcf9KrXhZvNv4G2zo",
  "key9": "3MfQLk8X8ssBQpquQgG1Yieckrk4dK7ZWgBZVw2m9gXF9ULSWK9RrVDtWx2QYzd3wacjEtjn52jrUHwLX21TNxXZ",
  "key10": "4wFVXVXKTWa2sZPTLK9mPitGmQagJEa7aRjJFAzKYL7XSWhaBhqP7YgW8rnEkySTAtQuC92fnALxn6Jc4zPmiHTS",
  "key11": "WLiDnE6KJGo76aZpej2BPu7VgdBPKWhqggd1eb4qomuw47oAK74u8KANYu2bqFL9k5XHiQvFu11K95fSybRfwhD",
  "key12": "55pCkJLEkGwRs6nWn2JtTTuWjDUXbUxUdRzECUfJbMYjkgcWyfQHRET2vdZeJH5Up4vyWTSRRWzRT3pDypUGcTfR",
  "key13": "QP4C5eZ9DjXWsbFvtb8BF5NbvPk6M8x518Vxm8DMe3nbYJBP5y74STiVwpKFp3biHQ9iyifJgrK88VusY6tg6RX",
  "key14": "4wXTnw2bqap2wUnzf9bUXJgZhf3ST8tYTSG6eJk4hMSacyxia6hhV5YTXqR1cBCvknKWK7V7tjuE3nxn4aUzzHco",
  "key15": "5vt2JB7JvzGjsTXufsTk5LUPjK8D2At72h6U7omepVGHLaPmLYHjn6szN6w3xidafaaV79kawoq7DDQeD11bt8st",
  "key16": "5X74iGZDupprBLdGfmcBGaRnucbZhpryffsTmhE8TW8D3BusnqiHnWGCUhSz3xNDQxvqirQy9VY7vSwQwHpYCpBY",
  "key17": "2SRo5cRqkUiCmrDfpCciNFPBurDYQ81TcB1eH53gqnYz5qstZfiLCLuywixR4ZXMGRRQ5ig1dFd8EbKQZD72BvwG",
  "key18": "5uLPb7uhNuTkvo3kXckkPcH6C2LBcfH9kA6NjcUNDQXD5QRqEn7HdRbXjHTdRj75tUm5YHKrcHGxsbywAB5sHNz9",
  "key19": "2E6xXR2vUdAYSzzPUMTdkkP3zZdMVypjbKKRWAcjr7zWkPB844do1Z4mnztFdhRXUHFqZeArxyc9ovHcGb4eN45i",
  "key20": "4UTeiwPNcq68psxKVWpvrvB8FkiN9ekoRuZ8MUZBVFARD2HZQwXjsMUTXWcrRiZDMAofvR3t4K6m8A9CPBhEMC4g",
  "key21": "5rfX11yBoyjVFth8mXcDSMF3pYRX55ikWBjaMa9ifeUG8BCFM26mQKkHUbjWgEJea8yRFgGQ3MSFQn9ymqCHwk45",
  "key22": "5Wo7f1gKcdJL2kKi5Uxp4GHPqHijLx5nJgmCnZVZ9bvmSVit4sM8dHc28V4Us7cprfWupopFqKH7gK1CX6qA47Fc",
  "key23": "fxiYrQWT4n69xFVxKdjP9RwdNmRyEhPwALC3Qx888urx69HthXagf4RGsZQKkmZLkHjYw1JatwQLHeifSJtEGoP",
  "key24": "2dtt2uUS2YZExkDvh7pjHQ2tSbXxUHKka6vkMHr5QxfCRmppwxnw7HqQ3AGUC7gTYo562xnKk7PnAoPJPygXgp7e",
  "key25": "2KPcxbK477ZAHZDJHJZDJK3akHm2MsmeHJ8mSJL5VKWUQfxyDPFYYcuVpCYEG79EZUBQ16Jf3EQmJzf6G1K8cvMG",
  "key26": "hqZq9WrNPQAn78yHuYYY2Cod9qbqC4Hf5vG3ELk3izYf1EcaR46ozXhmADKSpx2KpHHwHzLGE2WADpGJG9VtvB1",
  "key27": "1v7EGDE81xijQYrhUuJ17E8waZqrMjFYAPuWLY3NxbqZBRMpWUDRvrSA2xQGuo29mGhhpaAfbr4s7UB1foCgnfh",
  "key28": "5AJ8RtGQmFpv3zm8sGuN9321GEM1QKcP7yMc54NkkiLw5AzGEwq7gnkxtr6DxdGsMgfanUkBXLjnkGipMvWREmtT",
  "key29": "2sR8y2G4a5hNjfNe61CdHVd44PVoSKLwLu8dW57uyGQwynS9pjCRr5mkeduuLfVJJumHLfrfGM5Hq35sUUwyjdh8",
  "key30": "nW1uHfLa6FiBHHUXCkFgrTv1fTFvSxPUKLVX4k26Q5QsoxaVZXkEjTu51re9QehHkZzcRzAZygi3v9ooPd2xic9",
  "key31": "yjkGrpgWXUpPdi7sbAQjWasHjec4cNshptwC9ehTH6NZqk7ZH9QEbu5kRLLLWfetvcmeW2nHSzj8kKXssK2Z8tS",
  "key32": "gktt1bmXjTtUp7Gx3KpT4VK4VtzX3pSpgSq66Lt3qap77jvF9m4eViC68Z618WnzWq8iCH7rHDAbbAns6eiWYvL",
  "key33": "4gCiYkj5nsbHUg9JiJX1GcqkhHAVjTUCVS2qjrduniM6mtiWrHSrgR4sKfCYJRUX1byGnAcnSEA5GiGnwPQJEdR5",
  "key34": "5E4NRv5z7HgDU73EbFY15y9cUpUGgnqJKKTgQrEV7X1Apzyu4mgmUL4vvDAXxc6VomiqdmjSzSBixTg3FHtQUFdM",
  "key35": "3PTqBNtMHjhP9c3vDFxBY3jyzHhhmu3yTf6z29t87HLwbCSXVsVHq5q4BoJDVRFoibnd7AxdjCaHs8EggJCuw2JM",
  "key36": "2ohMqiVVYbE5z3PTDXhLgkgQGdrXQN8YxtZXHp8WBaFknLhi76w8oEmbLKRKgMe6AJPDVNrwEEDXEQEHbbmxnzw3"
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
