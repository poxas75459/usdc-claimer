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
    "4NnaGYXgGm5V3uVipHAGWygNvtRNhtXbuKcy3R9kk6afrQz9dN6H1gFz6m9GnwGsk1E37caFyTiNq4kqVic6Hrz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RwzVSmwh6jbaeK2zgNYyrQNQaYShT3BNz8ePR5RGtYTo2U3PSXgJ2co8h7LMKJGGwB6BBwTuKxfxfCUykvDwBLz",
  "key1": "5v3PLXrhcXEDBF6EUTZfxjztLj4eMANEuTGq8Dm5eQiM38rtaoSe6h7uanadM1FdKmDYAswPEq97iwAChyEioAdX",
  "key2": "5FecT5i2tQhdJAmcSY8RZG5VoSAKMyq4CT1fW8RbzKv4diQH6GQdvBn6tpC7x2VEtVjEqcJJRM9K5hD1TXb5Kw5f",
  "key3": "kRWKnKVXCVJkJXNRzCAq5NaCN3rU7eddAdgnekj8gq7AWJxrZoUPWobh8cxhKrMpyLkQVrwDQZdfvjyNfw9cY1F",
  "key4": "2GxzwoXCjXA7nJSqZEQEg5uZDtqeUmR8h5uJzayXvKhfV8WvBLytMs2Rosys4csbUdXzSdB25ZUU6xapKPdfm29Z",
  "key5": "5ZasjDfiwAVf5Wu3CBg72Ap9tjba8Wqwvdog7hjH6ekXM9HoaWcv9o6TrXSL88WDRsF5tVCwGpjddn994zQQTT5V",
  "key6": "4AZNGB1mECkj6c8WNqbrTmooa34F3iu12F1hMzioSzWNzCNdYzV34WfNeVC6Wm7MfeqHuJ72h7HNoYoNhQqhvDQi",
  "key7": "3TN7CYmSu9T8qTDRF89QcmEyGXnjUJWfmBsVDGDEN943qt7QCo9vthGASaix3116EzZpUWtWPyGKPb1DvLM6UCKW",
  "key8": "3QcBysSEChH13VxS59uAiCjS3wR31Q8VtdHsznurDm7wFvoQdoYfouiBAhL4nKrnKZ5edFdvuhoigREQgmX9imhY",
  "key9": "2F6yaSc925bciYZUd6pYZ7zDwxdSPsAz1uErDL4bzNJGdgvkiGihCtTSQVnvvhXRiz3CQgULYUNvie4DF7iEnxu",
  "key10": "3NBH9wZ7VeV3CmQ8Dwadg25ZVYBV1HWv8uTaBKgzAd1VQiCC349GmGdpTnbngLwhak1GtDiHuGQG32hd4N27msGP",
  "key11": "2RbZD4s61ffukavq1FJ5nw6TjhkMeqJ8NhkcKtyrvEV1BN7P6wgUYjeRktzmW5d8Ev4SoRnC4mBgVDzmMnmFvdg4",
  "key12": "5otYutMAS34Fb8uEicPsQZGgXbidiX8r5yXCKUBzzd1nAreKJKbkPQzGB3q4C4kdCEWHnantdwK1Q9Dng2m7M63M",
  "key13": "Q2MyvYyoMKVuRsLhDTHaf96omtNxbHqzkCAnXp7TPyGLaFY6EgS8ehZ6JiGcQbjxuc6aGkzt8BWu1VDXXGuUWsf",
  "key14": "3XAr6RFACTbHmDsJf17mikSFrL6QfrEocjywyLaq5PPGwWJaLYGyy27KZSP5uH2vnnBUre7XSmD79Qn4xiH3jMaz",
  "key15": "oDgXsZcDmuhDq27wndExCvRZgLGTb8bqEooZmvj41Q1JKuY8m21ey53tGSGuKJLrMwx9L5KimtVoYXAkFovjCwM",
  "key16": "5RUe3tYdRd2tCsBy8VjekL6zQdAJQbsGZvkRShr6boma4rTjudLvgUMG92SE3jpGCATQo1WXtSB6PgLqDiANArYv",
  "key17": "C8ZQw5RDJANCtQXN4JDTYeAt3ZcoyKpGd9f7DiMWRimr5wdnUYJyq9yzJvUH6rmBUN96aUvZxtB2k1Dbcm5z8Au",
  "key18": "3ZcnQpDUUhfoRgECgKNh3JVBkCf8VLY6aWN8wqy4SEEGsR8uucQ7veTXnkxoFa3xyFaNkXqFyxKpNZWhAtUkMA8f",
  "key19": "2E879GbAaPGX871JPNQto2eWFtfMafV6gdtnPQTUTLMqyE3t13vCrN3f3eVgj6DnroaniVRcaHrcQKMRZNr7HcN",
  "key20": "5eVkMt6fRYo29aJKgZBrVUGZCXi5awAFNKeKp6kDmW6B9PZ1zE6R3XGCmz9GiJJJKhbEy6nTA9YsMMhGahHy9tMM",
  "key21": "Mr82c5A2ZVD6DPm6tnH75atXEiwPrydB9BovrmorEMM4Rv5gJSykZJR6jATNUpzdpS5rUqWNvouDrC7h3HxcJXe",
  "key22": "5cgRygSPG6VEp32DmL8M1RpkEadAxoTZbhUibERrVxvURm2zmnjUos46bjaGMDfNo9FjAoHunNn1GQgCcfDCRqm6",
  "key23": "3i8811t5cBsFU2DpZ7m7MjB5famYzexK7W1YXcQ7t1USbHJqgyfaz5dNvDuEFt4ApUh6GWNBrdRoH15YCtBubQfD",
  "key24": "5Ck42oSVEmCtBm5vduzksftsDu6Gwk1ZkGG97xgh1t1WkHBtEmRRDEPqRZYBFnrqxnpPEbgt17ojUp6EvKG7hXcw",
  "key25": "PCDhXzDnBveoaezmN3wWYZRt8FfocyqkR6PQiAtVYHKCF4VrxSFyjV6AVLgthxRkiB91GvYYvf7coxbd8fjFbku",
  "key26": "aBxQ1PR5os28rLLyUBKKiB4k924NSf7ErSJQwNisSGUjAYgmamZQqxwSCgJFgEWiSrU8iTnkPLHkNba24WkH1sA"
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
