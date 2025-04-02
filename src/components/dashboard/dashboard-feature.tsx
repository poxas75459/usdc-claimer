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
    "67j1QmkjtAQj1R589FhXKuQcmhusvmwRg4ZvDhhBmrDhnqfoFeCArdPHQDMNpTdMrRP4bMiJXnWUQxQSiXwd2eDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VN1hrzcripUvLfsMTk4Lcd34GBcsE8rmHGutc77Fqh6SK3EtCdPuwDDTECVkjdsiDGsobcU3xHB6hDbsqyai7eL",
  "key1": "3kR5nrpcMrkepTjuKZ6QoAjYngf4G1TSz5gkVDADZqbcxqgxLXj29yJdBQ1Wq92HgQWWkUCiFgnHrdX6AY1q4LS4",
  "key2": "451tzapKBznGWun46GptkydwfUVHrV3Ziu3jweE1a5j7SDDg1sp41bNKh6KTLqLmmdPo24UkeqjYPnPrPAagG2wU",
  "key3": "5ok1XZ7ZQrSfMVVAmyZVJkDCu2fSfFQgtjKPY8nDdTR4qc1bQ3CsgBXRBkr2Ttv4TE4r7X9bJcxRWBFYiYeYpm5L",
  "key4": "4enfsRuM1Sg8E7HWLUwTmSn9xybJqmBMYdoMEfDQ2NLDuvptLFYLSuuKUw2Uq1cZa6rDPSYvycRLfNzvYp98MGMm",
  "key5": "676XEaSZ7NLDXGy99kAyzzkAhCJbmFPU6QhKTEJuW1vbMN3qvDQy4rwEXcVDPUqDLbhA87GEBCf6f2aPDkixAf3R",
  "key6": "3YqbnwzmPNdzS8qJeR5VjPqiAJC6PFRgCqXK3jnXoTpXxmFoQWHg2GstfJAYujiihPcSpcnutkWuAemCoWpzdmsG",
  "key7": "4nV1x22vy9na35p7jJ4Nac8Y113ck9XpjXqJSY5HmZkX822caRCa94V4heYLHtYQVMStTpGoyR9UeNffQ3s5Ye3G",
  "key8": "3k8ws7n4BNzdH7tkE7eiWn9XFVW5VmgZvU9BZDBL48yrAKYd1ihiCdUVnmBHyw2f8NyE5C7mTwrM7osSsjsEWBg",
  "key9": "3UTDj7oGHS1ipvEy7Nwisjt7hTU951P96VfEZd3ATTsoCPeFyLuhYybGovdFmvixZHQ2ZvJvLGeGLiptT39ztPCg",
  "key10": "5zj5qQH9AXsiWqWsfg7o4edbjAFpbxNpRaypioDtEGiuTrHq3C3C1svibv4P2mpX2FXgKnqzYKXZkjdMpYsNQ2ep",
  "key11": "5awZpn2ueutqSzffbyeU68ocHp6vK8VBk7y377TCAYgQBJTNmJx3GFb2RYpfwsbTg3vP4c6bbF7M1874gVc44wUH",
  "key12": "47o23RfAqh7UjQKVsEe9Mzku3pf77d77wCws3TPdzE7khwxmwVWcNpT3oA7zCh39A7oxsFUS1XMJXaFt4gKtRKhp",
  "key13": "27Keir69SiqGAWSkms3saBTDKz1DNdWQp3PK4VX7Mnz28XMURAdwg9hjFh3uUrPLnGj6CzyN4HvBmN4GB1EySjSx",
  "key14": "5cngErhWq7b58i9iT516QMqWVNzBztVzmdby4YmaamEMPyrVRvMyvPDsqZuMivnRqxnFx6mf8ZGxhvV9iZ4XBxcy",
  "key15": "5eSYNHnWhYL7T5rDrXt5NA3vTFiM5ZggncDn1owG32vmLGsZdJBtqoj2AtnJV2irvgmh12Mtx84XzaELcyhX5b6x",
  "key16": "XEe8gzDdbnPA7gDWL6tiKa5UjejV6WNkAG8ewHYSDQGBs7dRcJBwPdB4nYp31T92T6t7TTNYNP4eHTUUWw3iLTq",
  "key17": "2TbawdfsjmqgXA5LaHp6gNuV7Kj5PF8hjjLXNbXpes4zV3qUFwiXj1zDYANHBDypKZgEGtRiZeyxMAzZUVs6Da49",
  "key18": "3K33VCEyFxGUj892brwVg9oozLZUvxUSgDgMsytWdM8q5QXeRZn8XfisQoeeWUu2KdrzoRM9mWQrMwsgzgxoH3j6",
  "key19": "5qSa1AFrzyHC81xBftFe2D6yMHUh2R3JeTjLY6edeHcdq2igpHmdmAYbtx3TcZVdajqVWuhbsb7AqSJhzhYYFkmd",
  "key20": "5nKnoQ7gPeXYHXdCzkYg4jFyxEdE7Qy79xiD2JcgojsqhtLD6KLWdRagmwmjaB4c57iHDN1gN5RRsMYfhAoPUCqC",
  "key21": "5pqCGUbM56nAVZrRma4z4QhNdRVXvNiTXDHYSfZVayk46pDweSd6up17pJfNE33HmrjDJ6kLfmmuceTRRTbs3PU8",
  "key22": "45BH9U5LcfYx1RjoyvuE2kMFPTsjRLB8CagV5TSooPMGbfNJrsYXcihW1mekb2w7TdSvenUqVMrXAKNhTr56foYj",
  "key23": "xACT4t8csLmMQ7TMZFEAqpWDYdTyy2dGL6PWJkeNXpAkpL8HMAQxsDoDdaPRFqtzqezfHnmE1kjE4h9zCjfUQef",
  "key24": "AyofuWbGPMtkAMUPZVVuzUseBCoPSQLRK1GACStibPBAJDPGE2S9KVA6pEUZQW38Y68FSSyF8eXwSYqdCtV64v8",
  "key25": "5vmJcgAoqPx8D2fwtJFHdqSAELrQ1SGjVPYup4DDA9N53dqmqgKzdqS3iphQ9h5MbPYebRcjMhH6dvujaeiazrX2",
  "key26": "47N6SFnBNRwb1euDB4yA2edVrwveWwL6yyy1c5CbSXk5vBGwVb4d81ugqUuChQD9WN49mHAug3Q52qeSrFANsEmo"
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
