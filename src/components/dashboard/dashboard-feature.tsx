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
    "4GZNGQoUMHpmne8g1GFgQKJ329pQYVZ4EBSMzr8HfzLRrdCh2mmjLvNB3ACuE7odp3eo2BinFKpVhh4saMiHKK5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kuDGd4G8YudgLbMT9TH5MyhHKoNdJMYdHhMtGHwAWr36Uwn3JWmXXJnWCkN2iBizwMRApk5YzDMsDq2PsEhcrJj",
  "key1": "4XAukrReG9gDGWgBJYSXXfcxrWd639hUc9Cywx5xfo5ZsVkTyBhupguzKHRByMshiNJzb3TZzNA4tMFNb7ztjHBm",
  "key2": "4yxW3AhjsJmcqE5Twu3qdkWdr78DFkJnLJTCFtEGGQoyV5WonEiswtn1pKgWPFebDMDbz9wjK9L514C8pqHdeWmt",
  "key3": "5NXBu6qtSy2oiXC9xAXEafoLKtS6hPTQD97s7x2ZtYMdmejw1aURNMo9TkdXdpze6iDz41NsP5gzC9cGozjABmE2",
  "key4": "4M448oJi5deH7PTq4PvKcakSQ7KR6KRcfNS6TmvMgXBf3yKCXPKt5TE7HdhYgfe3VsU5nn5W6TtHEJ2cHEzRQfoS",
  "key5": "59daaNbXruVj5ebJewhCDsjgbfchNwZTMz8UxZx9mzEMPEdFktKx8jgfh7MS6GkRB7bxGpFDgFNAbq3LQnXj9L5S",
  "key6": "zNkGtDV44aMZrkhwJ5T5Q2DVz7SF6kBHHFTTxUtAunDKohhbdZ2Z7F6SAeiUQKDhVekzo2QD37zn4PZLK4bjJhW",
  "key7": "eaH4CcfX9rhmXfzAwVjDDgcmmyYp9AH8Gvs8bLSjymUxrr7RwDRvdrhvDRJEpArDsHKVqdBsKveiYQzy88VFQAV",
  "key8": "5yeBLQHjVRWDcfqCEBSp3D1reyHm4aTEWAzZVQNJa4CpUtfBRzmHE9LeebPHgF7cWicc3o17tyACsD9TXCMM4xbW",
  "key9": "3oLesndGze3WVk5G8ELmdSYEQQ4tTtXBiPgodmaWXswnfFLaDL49cmDHzuyk3AcoDJtUw8VkuhnWHA5BdCDNLcdc",
  "key10": "4kHioG9gDh4WtrnKMAsZUDmPk2vBhCXmmpXzqqsefih4SCpyKoketxdLkdFCLDkjpbLSiTJ37VmNuCkjB5qEfrUe",
  "key11": "5BHUNU9oTUokJNMGWfg7RanxLVjR641gpXStFzwUEjUuKzh8Eon3k6fuzRmkSEozqAv1gFZ5X6oyawms6dCJ3fyx",
  "key12": "2HNtRUDHwmA1NvLVQNRfAZ3dw7jdQFap7uNSXoWVP8pKhU4uS9w6uiRvBpiQmkzEJesPh926rQyRHY47DgtzfSJo",
  "key13": "66g52bYj6ckvYAPnQcLWZqTDRvBAaPeLeGuarcvq5cWtfEnzEF1gbL1jKfhUShCyq3YaMoW7injFTNt141pVaYjQ",
  "key14": "tVGkdu3KJWfPnFj1qXF7hCXRWpmPokYc1Ch3BTWMPDMom7tXLgcXzcFMDMPSWMXccPXKMTWupAwdY4mQd8dwmtA",
  "key15": "bjGF86xPauyAQtqZG8pc2G1KqG9GPhKXoUKysu7M5dWvUe5M5XZbyig2RK19szbMhmAjb75t35CidYwjjxVn29u",
  "key16": "2UCgXAJ8ZTUzyFwfsyU7bzumkKK3KhrYf82dsu4LvDxR59nAesJW14rud6DDbenknugT9zpQwqcNGEqr65C117wh",
  "key17": "2hegRHx5Sv7rGnY1qfbiGM48i9HPSc1JMMKfCkMLEVABdGZ8uN8qwADK5SxcTRVT5pw1dhmD632hKxfmxZwigGC1",
  "key18": "WE979YWhXEnGGc4FrQtRWt1qmQ1X7wTh3K8Ri7jDLrdkyB7FySsNHbQrWpXPfWrPgWaJrJwc8L4skFyYgacf42R",
  "key19": "44VKZv5AsFzwCbj4vtiDzRi9LzYv1D7LkH1q2WYg2gAiW3Mruy9SeMiiWjTPUxf8Py9EKXEHTDJzSsxffKGbGor6",
  "key20": "3fy2Gfo967eAqNQeXQkdhvXYBhPadfLp2BmNKDGaN9k3EeBCHmhVyf7yUuAfpWgEmw8AiaDbQYGTN8vEKVLATT9a",
  "key21": "2xD5KaVpPFvjuryoW9moNHDwWmijTEJWguzobA372vEYkGxwu1kAxf9V4uYWzukx256gDEzNLi2xcvohZQyX4rVb",
  "key22": "4FkLGcztGhhR65oZrQPyABnS1EtLpYmdGdXNWGcgyFNStXBj5qdQouJtFZt1eMDFdtBcPmCyPKwAtmbngdnADmnR",
  "key23": "3dHxWzGvnpJUx9vTRtCCnxoUAxiJG5o7UAVx2LRFQhzKYhpTemmrug3nek7JmEKN9n217728ZwgPfsEXJ3rq9bmb",
  "key24": "4WuuFWaxdVKa3c9ZBD1L1PuEpCCFDPGP6f7sLBvhrtBntF5L1gk8PQLnoMXbJvveT1Cm8LsTMRj1bcMGYNzgcJTW",
  "key25": "uoEX5mHSqqRFxbUSxSqHc7uhTMSNEJLdvtYG4onpu9hsLTN7ast8CrLX7CusZ5aiyoEZzbFTcSfP9A2CFmqYVAE"
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
