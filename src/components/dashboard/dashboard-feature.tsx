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
    "38nzyLqXtRRD7mB9EWRpaVUa5eCtgEwdv3qu9ZEVB8eCJ13NVBnUwcnsNSNPZj8rG4nqnBbiwhoK3fXFCjNfL2xC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JtEnTV5D45a1MV2L8Ce1EP2oxVAeNemrX8vM4HL66hSLrNUqmFDGrYkpJMgoGvVh1CQ2UoidbDUFMxV1ZUyQXF",
  "key1": "2YPdndxzsSyfEisVosnYf7PUBHYJc4kFiGnGNjemtrpiNrvkpMddE4ajsFqQzfJQFxpWkRj67ZurrX9PyCwTsqju",
  "key2": "CYC5iqtvXM47TzS4coLgRRmqrs3FkLjf83KRSsVSEq9n4hf4t58B6eW52gMCvjEKjc1PX96rAWZdxtpm3r4cWgi",
  "key3": "21eMbexxKaVqEiDTERik87x9kzWRSwNdLAbjzbVZcmbzZsDS2cpXKEcoPA8ABr9c5KE5eXauuqypgtN3pUBh99VD",
  "key4": "FgnX5F89pD5aeo9Z1VbjdRzPnYw9WKgQf39LXV9DLL5XqdBR9Z7joathqAoA2rGJmrpVfjn6VLsk8e7yEczR5bb",
  "key5": "4ydMxnXHVYL12N5EQFdApjNXjvNqRz3WR5GHPHN9tvWqEarbMJrx6ADTDfSwt2rtY6yUTJ6dpzSQ2pA2EZLX92RK",
  "key6": "2U9X1gT8VdqHiGmEzip9nf83ep84gnvRoG1u4N95hQXQA6kfw5yA2Jw2JZBrxw8WTPR3d5eu6EbQfdJX3ngDhESh",
  "key7": "Uwf814HkSKhV2JQjiBMePfU85DW35ZHsReHCgoD1EeS4418N8dtZ3M2Pg9CHqfzeiiAnEu4AK9eS4hBfboDwDqa",
  "key8": "5RGgJsCkJQoSKMcXyGf9CtCp2NMVPbuXL8uV2yZzXtUJHPuGawKgQoNCAEWp4qsmwUf3RqALW2coGZnNJmmQUvRj",
  "key9": "4ZH3zLLsfsxW96sRKv2U4cCZjnJySFQVsaqUqicg1bQsX1Bymx9ux7W5Lpc7xFpvHAeM6vdKovTnyQD7W7Ayaub7",
  "key10": "3UcgH5JHNyDgZtwMinxQpCnpCMaYrkcPjm92hrKt7WTEfuD98FYWVJeud6G29dpeZRTbeazDanvuoyKAFyvnjGAJ",
  "key11": "2tnQcG3MAKd123wAUbaSPUDAaDh9YLDuT8gMWzQoC3tLPvDfz7xESJEyyLjJRS6hqjFV9mNN6L6skFWi8uJBZbG4",
  "key12": "2U84rtborTyv4TF2C2tjiAK3VtxBBsd7qhfxqcs2MxuzVWFsLFZN8mw6oe77dwdgx91YhhVaJD65o8ndey8CU5SE",
  "key13": "23PJjtkiTgAV9vhABgsvAByZMviL39PhhqvV1BHbsWReW3tLjCZLQ2u7bWC7UF8VkDCUxbG3vN4u9ZhTKgbnzid5",
  "key14": "2sadcLQiyovSBMSdTc5XmRLHN3hyiF3QiDNqkghthkoM2mhKPVjcxZxonueHzNzH5DVB5vYgEuw7AJ3HjVKKKKp2",
  "key15": "4j6JnzLPMYMupsB9B4FUsDFiTowVCQbNg38qsYJhshbkXis868MzHgWu8sbnLdMhyCbHk9VP6PVzbFrK55VgKQWS",
  "key16": "2epSkTxG3jkUXUS4PRkPRNKHamXJuGeXViHaHiX7xHauRbAHydgFi8tf31fVcWHg5yBcksCHdkiMW2i6DD8zCQRk",
  "key17": "2wwCMbMDDj4beG3tvqwgSaaR5FLKHTNgCJ4G38PSk1AnmZF3VVazjDFwKuZMFvDhgEwRiu5tsuVhPZnn4Pb8xvth",
  "key18": "5dqMuj5fzd9NqdGfzF6P1NZoj4y87ebc6DdEZ9rbAHqhsowM4eYmye9y1XQRT7VR5PErCCghxTWkRBwLUZPYCa2M",
  "key19": "AmXe5pFGT3zcVcypbKUeVfZMFHbMuZghvCU6dYgiyG8YU9SSoRAfnH62KokdpcUR898ti7pDXb5AiX2gDvtvqSQ",
  "key20": "4jF2NxjCod7rrjt1Wcja4tbjxvVGC65qbAmTXSZkbzx8dDKGhhzizDgNK1fWgenaBG9Cr1qAa97vkDJaDYXZDDwr",
  "key21": "3oTEhruLzGuonhK1epko5413NgT73pvA7ZBh5hWAjQWVrXPbpLzHQpQwso7CtARhpHDjC1jgaJ5HX9Gc4qgT5ezc",
  "key22": "58oJ9mdRoWFHE4iRFnGeaBngJF5SWZYUCQti4LGTJetji3im2bYzRMgu99wuBvewmWPKreZZ4oY4K1c2zDYAqsom",
  "key23": "DmW86q9ziYhLbv9v9oV3hdrPaNPk63xhENwuN1cXVaobbZg7Y9XnNJqwx1EPUTXVQsMXqZPTgNDrFyFgFbkTQ8C",
  "key24": "4TzNmqGTzV3HT4J9PSqJ9MshoE5j89FZm6xVsC3gung2u5wqDyJSn7sqSxEwLRrQmwhaWtdomRG88kVBXTr3vXQB",
  "key25": "5j7rHqhM5xk1TQRDQWngoLFTQRWZzJTuEt8jyxCfiLnxwZPBn9B3met37rHGDDr2qBo3E8katL9i3s9yhC1Et2ty",
  "key26": "5gdAnaxEXEGKCHQzuuWt2DTtqmqyrBm5nsR5brZkeUr4MrdXq1MS9WryPR7BXPRQyuvdECj4srkn28R9jnmrZR9D",
  "key27": "3Cc6uNfiiXECP74zLcLMkmjWbHppx2waqMwjQSknzcXpZFdMP5aRhEVMWTr96vYypVPawZ2odoi1P27DDtNyRyHH",
  "key28": "3HRLz1p1fiNHmU5R7vzWiydWFPdGemwfLKFY6sCHEmxSazcqYiHCDzYASDSywC47SmPN3ZnAVtkmJ1K899Cmgb4y",
  "key29": "5EYRJB6toFNZDtuf1mqd6HPkqscHag89aHHJmQvYTZ4hx1B2MZma2j5SrzxP1s6UrT2sdHnyiez4c2kpC9FBLu1G"
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
