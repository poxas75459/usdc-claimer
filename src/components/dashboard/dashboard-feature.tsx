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
    "3uhgUWrraEu5KmXyCA6WhqYtauuStZSYaeeEtC9XBqS74dzdARjCFYPMnpJJdAVrPgsmD1cR1jmfvYWrpyH68akd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsRN1zF61Rt764BVBa2L4mSTGRWh8VtWsp8SoRH6gcHzJYXvCB9MQ2WZN2em4ndfUaMRZBzWjFk2oedSRWDqXV1",
  "key1": "3dCSVi61vFug1BEaHpWFoSiPDH3Z529yseEX9VwWtCQ9zgAEo8AFCijVuBNt9CfjGZaKRRytBiXc1cp7DzrCefDd",
  "key2": "5DdvXh4YcMFuv7ExYfXLTgj2nQQfFrzm6dhLg5LA7mGsux1T6VPjrLJ1szWVfSTfboRQu6eMmCG4EsmAzBq4QJ6e",
  "key3": "3AfVz6NFX1dYQAUB1yme39HNH6C5RXvuQW1S24jooNgnTLo16Ud9GzRghMGTaiGdsVxrbTZgSdccMqwRo5f8qXtt",
  "key4": "2mhsGsJYLqzRxcTucZVJXqH9itg3N6hDa33siFdEojZTrgYP15Ra6gjphJTWjp3vooKf7on2BdCoK7Z5JAMi1twA",
  "key5": "5xzFCRiHKJ9Ku8kNQhhLovNJNGDGcLMDca1JSjh7QTuZ4bvgjssAcmHT6pRjNDwVs64fwyx8uejUAuiX3siRYmiG",
  "key6": "47Qd7FQKPdmBG9KrHYDJ54hx4JLrjn2m163kmJpq1gis6CXUzErBn8HATZh1d9nEqBRh4s4WmFEWMd5DhvvRVVUw",
  "key7": "3yd5JQv8iqnqx6VdK6bnBY7BUHZU5oMjZY7aQRA9kwCJM7K9cGDTMmwKLUEoxfqhvKJdDpRC5MaDZKd2dxHdjDRP",
  "key8": "3EzBR54Dmnzeku1r6LFS245bXxfZiTHnXNoXBc8bBqJdMPPFPAqzwrdRJ6CBreBDjPtdrdb9Q36CwSMoL4JTWPP3",
  "key9": "2wk4jUcihon36hN6h8b6cjR1JWvFG28n8cQSJy5KXzoocwViJSVSS4sjha7WUkUhoCstMdnQtdeRLz92BaFpQknj",
  "key10": "UJrGxQG5PSaZkQy48JdNkGdFQzsna56VPbGgiRdh2r9RX75ro1Pajxxb5dyUnGbEnGkJFBLqb2YWkcfKPbJT6bo",
  "key11": "4JDuJAsToKqNyUA8CPaYsQJ1foDBFdL8K2DTGF8ueKr5G4E9qfqMy7gE5jWLunyooQiiK7wxsbVnbfKitc9nX1Cc",
  "key12": "2F8mNRAiUsWYnscwFjFXWJWtF2w99QDShtFAdruij4BPGvAhtYL86Qme2nYo3CdFq9TxFCyocuEbkRHMPVYpF3Ly",
  "key13": "3Z6hNVhD1APTmvMUHD6UA7uV9DJKaPqKJ7fqY27ukuEod4tV5cQvDakwD6oPgX5rg3Lg1LtTCHWBp7q9QRWJpnfu",
  "key14": "3QCCWbTyaZn8n7W4yu4VgR52gqo3EPt6ggzGyeVkBXND3yfhCANRBvh4vwJNFg2AzcEtiiWucB9F2zjKXuR4qBP6",
  "key15": "4BB8gm2Qnx4AobytJHVRdzs64gh18wz2AUDpHdQzoFrVbMvSk9MZK53oEXnQVz8x2YF8rcyhMdupRvNCkYDHfVce",
  "key16": "SJ9WqSJfqGMxsGhe95E5iXVSKuaUbRe7pjmuC2TKxbg1jMyCZeYqcEEshTWJx44ZwbFVv5VrrqafRVqWXdVQ8C1",
  "key17": "HvLaVPsm7LToxjXup2G6tyA5m8x7karPA74HNTQHmoB8obq46Buw5DQJ9bTBxRdTzuwTtswkeEhq1fi7JPaDDrh",
  "key18": "4cnCf2Y6kub24wb98MFpNYd1AMbSFj4ZnEro5CQnbg7WHnTQAFXZwePMYZSGbgQDjqd92DCCWe2ND2kQLFumnhgL",
  "key19": "2s2wcjWExdq9h6dDzYnSk8QKMqdnjeFzx9uJ77aEqQxNpvREh4YBsuJYX55Hhjna74fw5gqjvr3Ysrz7SYx1Wjy4",
  "key20": "4jZfC2j8HFgHZx4rPxR22bq1B21vq7Ah56X65fcSU2J3nDjWE9PfCShEMMknwa7bzphoakg9y7K5EDWYSsmguy7k",
  "key21": "2hicd1hmPTU2b4ytXrs3jyHngNB2bWcMDj7q7Wnut1HwRyKWUk2gpeNm2Ld3ZFvq7Y7oJZnTLrPKXYBdimDe83EC",
  "key22": "5Y1jXxtPnjJfPSNCoDXTi2E4SfgU5q28FVQ1zru6KcRukPYynusHDUyTaDy436AV3SKk1nSThB5NUFpYo8hJr1oc",
  "key23": "sCqWHNoZeQX5LtDFjmUhJvEufNepHvTTypxvhXPz6uUt1ACwsWCQZWZNMMaKyZX7nDu7FGgqBzXH56jqzX3mLHD",
  "key24": "4RKLHu7ehFZcfm1Z1Bc66Cuc6h6z54Xn2XLJ7wJucyU1R6x2vQ9PcCEz5ANWws8zygmXL2NaJhhkR8aFSyJ3nLp9",
  "key25": "3W4vg8v7rpPtHX3A6VMZi3yHcsGu62iuSyCw7n5odmZ9Zg4kfve12FHUP5tMunvcJMtBu5PBHBALgwQEQN36UxAZ",
  "key26": "5TUR8ho7toEdpogzoAhp4C5tVzsUSPsxKvVo13gEmWnqukZbAyRhVZsQUZ9E7NWF5rDkXRBm8snf9b2BhdDtRN9K",
  "key27": "WS5pqQQ5Zifax3qrLSScw4mx9WyjWdQ4U9vnXFeQzXM3o2yT33TNzq3kYT7JF2y7FXgjtJf7T5hWcC3PvPN17MR",
  "key28": "4LhnDs6arfpa2A3Wvov1m8FyEG7zEmRUjq5FeWARaLXXD4X9FRUS41QK7YmfZMEkyaKcdHtVoopHeuNY2Cx3ASCD",
  "key29": "5WLF9qCApGp2uoaexsNgc69ptj15S39cbKzUZhCig2hCjbzuqk34nBDi9tFZFpJbvyfeNf3aFZr3axai3u5xf9t8",
  "key30": "3tBkBrKXaEUHvAc186jWktrGZMx1XtWXS1BR72LjmKe3GNPex7YDCKzEq11DXrvEv8AKjZFL7CyckRRsmjR3LA96",
  "key31": "446hmmB7co1byqGNYJVLSyjvM2hmyM3LFpSrejGivP7c6fN9hQzjGGcroGugNb1TBtbv8XfWxjt43RJf1V7jseYN",
  "key32": "2noCaveFnPqu8krL4H5gqhvDCzpUmLgustynPwGKJn93yb7A9q91Wk8EzgSNuCUJZvyp8MC8PfMLQ49s7xSSnbSs",
  "key33": "jNFwHf6yCj4qSNrNKyUHWf9aWBdp2429KrpTAv3XH6CgxFnkvtv3D9YbdYzZZV3eRsFoo91rFRb236KE4RhDXE1",
  "key34": "3hnQYFzvdLz6T4wvAdKENw8kX34i2tvf4zvex6Wbh5J44qSV6Di4Z9mhf5Z4V8ECnxf3d7aJomeQudS4NJUa7HcS",
  "key35": "4Xtr7a6276uYDbJE5WqohBPkcmCowUrjqbK9HoU7ojBriJqY1ygrMWXh4DjcxLK9Pr6NET7cpZEXtqyGjM3jhTFt",
  "key36": "5GsztbaTDK8eCkJ4dDrSYhVyNxuZh2VvPU8pYzBEnmJ2R987Mt5VncVPcTcs1nymufjTmWwLaWfVoB7QVBKPTjGH",
  "key37": "2QLV7SycWAFZBtrGxbJnKEAzhQaCaw4DxRUgF4uMA8teUPRn6FaaCGxUgZ4hjhgNeexQLJkC8Xuub7fDEwJ6CAYg",
  "key38": "4ziZA4DDqRLAm8p2yY8gVdmNvQA1nJfNrbPRyCF6dzdoS7DokMaiZ2RFzZCz4A8q9hC72trfWiFPS1LYi17ghQ5g",
  "key39": "yEncw9G4F7k7f7pNwmX88EFEuehRHyqi3St5BS6g9TXeFHVLkYn4Ys9FC4DQpRxYeEgpZQRg5rDqbsD9fN3Zg8K"
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
