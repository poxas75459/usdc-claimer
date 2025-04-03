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
    "pun32XvGTjb7VmQujYjRiXxMWypHZWqCDhk5gRvugNBm1ma6NS4zgKradPZVoCQTnk58pMWRm9cNyCc5QWYmDv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kywwJJzQhBz7Nx5Xe6p3yN94csJjW4ob7wif1HBndQstaRhjn3hdfmATzaJwS5pc5MRqRxhrt5hGuFub2mqHjq5",
  "key1": "JyTTko31pJSpxFjjk21fjYBZQTE8QswfqdRagLtLGkym6XDqZJ429ifAdHmNp55jqc4E6mLpK4fPoQQ5vGDQ2CJ",
  "key2": "4qpVJ6YE8RCueNRGnDZmCFJyjC7vjFQSatA1MoJtxuRjibQ8FdodFudcU4VDW5hXpEZbxraWbAM1LTu6MYSXUJfL",
  "key3": "2G8EyFharPfJLpeRbjwex3vcWVR8WQ4gYePtGknvtLAXMwB24HUy9jMwANfNwPwu31FgNte1aUsWDyk9QPbQJ5uH",
  "key4": "JQr33V3i3YFQFq3HSS5fkfUVHCARjwEUah8Q46CrfnNM7sAgGe7Qn7yaKqJRMTr59eiVrNhBLcrySn68RCKycer",
  "key5": "2AZnzSP1A8LNokeFmPagj8v46aUUGpi1eXfKTaeAMoJDG7YMBNgSLbAAQzj4FfePepQsqciAvKJxFJAqkyB9w678",
  "key6": "2Kf8MbASeCh8aSCFUXzSd3W19yfXw4SfUHwrW7EdibBjEoRfmsf4QKgPhevkrPtZizogEmhXv9jPanJPe69iYF8Y",
  "key7": "2kC7v6saULiSHpfKDqhpPj9AiM88eDyk4hs7xocWSoD9uWpwtsRjwDkdsFQxiyCUaCzpjD2LRSrZGqhaooJaf5KC",
  "key8": "23nXyZbAsEbpuTuzkwTQCgs34wd3gATjFrip1QYFLdLxpjJjNnpNV6SKkWajGnCaUEmvTxzjDEy6Py7P8qJmqN3P",
  "key9": "7TLQNDizXq3hqJCKWSZc7VEJMSdttzSS4eA8JJsi96hcqP1EuF3Q6jqJ7hjzxH4vMt7bDVnQ9qAiwSkBfjafnV7",
  "key10": "2oY22V61XE8jdCwCR2kwE2QVBxbUjxh9tXooFhStN1wwBqTRQKPoGZpSu9o5WnHRmEEitVc2huuZTHseGzcwmr6M",
  "key11": "43hbFKNLYVePPkQdsqbDioCmVv7mEp5uv8ZTgacWSnNbxAyVyYnrQfpBtB9NZfjpCtwMg4TU7KwXNpncvGdiVeE",
  "key12": "5DxkcjwPb5Qo91w5HCUwZAUPRZXLr5YYsGXo4KswPcvW5vkjBFmfB1trLt3XLSYbutFcDWi6tGqMiVEpe8QP4xoU",
  "key13": "4FnmuZBQxGjVcCVDxif1MCACMcAzhEv2micxAz1fFxJ3BzPfKmcn8ao3ZBUKL6GLpyELFTeMUbwtsgfoGaGEiroL",
  "key14": "52GAVn2YNGNNzyv1cSZapkVa8KD39sXc4DpZiHbBqWfjyHe2ApN3mbtu19t6q3RixGJXA8irEFDiV1G8tNW4VmbJ",
  "key15": "5YjnaTxGWWnRZRMLt7tSFcbbHShNn87q6BcM4sm93PRUndjW5jtUQZtJhDrS2pN8wSG7TAfbP5QRN7oJXDzhdtgw",
  "key16": "37WkmQ9HVscmnSybx3yXchwcrsu1zc5Mf2S6tiRvDeaD69h2AVmMiEbJTSzDGDom8WZmEtrUTqzkmkHLRFYEgMSU",
  "key17": "3ioiDzufbwMmKekNh4wfk62ipUrVf39Q3sVDV3qmDdwyCyTiLxTHoMENZ1WhfQdc6WoQgMd6WFvpwhPoHnRNngvW",
  "key18": "3nFWEZbK63VwRE9sXxYRCeSxwgWrfgGhCi7mZQJ3ivpdY6aFzSYiJVKYj7aDc94z1tNZS3Kq3wTPav3roP26uNmx",
  "key19": "3g3EQZRJo1FyaznXZw1xJ7q4wM71RQzEJEfNfLrXMxUaAa8VGjmQye5LZ68SR3AsDFb5EqySexkwubSYi2j6GMSY",
  "key20": "67T6Bssjfox8hhL2yFEs8yqwcNHhczqUdRhGYdVHJ9TokBFWVwtvEygh1P4eJ1486A9PrZHcSsVDbP2BpnhnGbv6",
  "key21": "3Ey6nP1pTA4ZM2dG2ZoFwYx8B8oS1CHe9oG5bEiyRj9o9rnNY9rkPDnT5FH134TJwKibk6rYPXeHEHrr7VukCXiv",
  "key22": "5VrjYnQxfkuC2egvSLCwBZefjdEKRow84wFtFho5Xc3P3v5tKVC5y8KqHtPoDd71WvCtwEqCLnX2dEsfyUG6pUmb",
  "key23": "5uBMX74qAja43AMEN8b5C6KZgjB4G9u7orbvZfMhn8VgSDDngKrtaMH62a8XfERz857NQqtFoJruW1Y6W7SBPqKH",
  "key24": "4YeV1TrHS4R38SzFqbGpb2Y7rA2AkG3h3WpR8bQxRKsvBJqvhMo3mY5MLWdgHd2s4dci2S5uFKHFoLwKtgYt76vT",
  "key25": "rNPHZg8uC9krYUNvGVFxHAZdj8H5PLW7WvSVwR62e4jD7nyMvtG1wyiRkZWtweLeqB1eDGfP2VaqhXCGBjJznY3",
  "key26": "5fDnfy252ZBa6KYLDMMt9JYEdJVrYmz9khnLrn9qeP5sMbiFE6q6g7q4Tp2v4bCbUcxTXMPRwmyNbunUPzsJ5SHc",
  "key27": "2CZXdgrW3yTYnPaWw5yHNKQeTWoSLrc2wo1vVQTWQ53iTAtCh5SuRaiSMhDQWLYDfMjQVPKffyw7gsAmgqYcv523",
  "key28": "Xs1cPMSJr8GbpuqbVGS4RcfGnD1tRknkMDZuBuBEqq8zkk3LaxLdWHpCjutuQpB86CGgSPqserxuEz7NcxF4wtx",
  "key29": "1GNiXvyGuWNqLZGZ2eGEWujTRYGSxMUcFLDzmBfqt776qrLTTUAiMWWewhmzPcxD371J5cTKwy9WCXB4KTgQcnJ",
  "key30": "54fWKX4uKNdBM4qeb75uBj5WZncxpnrrXZgjKGmTbxhAZRUhccCBeSY7TbgBVfGfm4a9xMBFpxEtg98mtFKbf7Rq",
  "key31": "46RFCbExSTtVxMjhMi9PFRsKXVrwfm5RAJvcAGk7UvbD3nK9vxFBd9mJXiWNKjxMZvJjyZ19DKRG8mwj18xPg8PQ",
  "key32": "5oPAtng9TMi9wSMdQUThUqjKZqpkNEkBQUCeDJ6fPEQw361wr3aFRJxQ88WiBZK179hMmNQUHdE8p3j1e8kRN6Ry",
  "key33": "51vao2RVp8AjeBWWH2RuWMDKJebe8DrQ1BoVuFhwTBoQxR91eCYYGpXdVujtwyuQy9F9Wc4kyXP2nw6fFT8Ja7WB",
  "key34": "2JJrQF63HhYagmHWvT7RVTiFHbEAaVjePbtkUScWa8pCKpd2VK6s8zf5b1Te4arZjkaf6EjygHhbJn6k3L4aYurv",
  "key35": "9m3psEietANjPYFY45K2hG8qGswGhgtXjUUx23wNHPNfK5iJdTvVsJQkjZkRpoiZidSmJRV6VETHorAZnRKa3LC",
  "key36": "3YQXeh9M2pHvXE3vzh8THtsY1HpbecB51az6xNSxvTdxCeponGLQBhoFFT8VLybMv1AyNPSFZoJFN4Ren9dKXvNQ",
  "key37": "4DDV3f5VR9SR5WZXt1WpM5yfeJtz4Ti5xpHKBtiXekxr3zYb87yqN38cPbdf1NZwxMy148bGYgvpULbec7BSAAoJ",
  "key38": "4N8hWdtFiVsu4DyYXXifDH9JuMPaFB1gyCPVVzwxvR97vXbDaSyeyW8Vhf9QzaLENpy9DKxSqgWsgBqkF4eCHAyF",
  "key39": "2ZphMhE6X2dFq51pHMNf7b3xb1vaKtNknY4GLgs3RvDSQdAn2NUgcKfsfMW2iPerQV3A3UptKxVCLMQekRxFiAc7",
  "key40": "3AnKmLE3zoWEsa4FE3zXJ3ZVi5BJefqR9zp3YHDckLXiRBjvn81jb9LDkZLJKyTFrT3dxmZcXswZDaYroU53aPRt",
  "key41": "AXDTZMhgQxEhodzTtYk4kojsfjcLMfqPYxnGr7dPUAvevLXnzEhFaM6uaVWiPqr2pXj54gLcGjWzokJD5Z8MfRi",
  "key42": "2CzSdeCgf76vX6oASUTUWHg7MQE8uXN2rSWgfgtjp8pbm3UAoyJgBsRZSCT7QxZjUfdhEi7euAMsdgKuhXFz495o",
  "key43": "3rp27Fa89TGaQBoQHgEmXF42FkjDEfqk85NgByu9WQiDQSbLfpNSqKCDybTaRYxfMrR4Nd4FgN7rk8VZZ68b4Upz",
  "key44": "5vePY7qpc2M7QqhGbPVxQqJQvbxNcwV1jf6cS95omXDVLe5K4TWUutmbgxshZNxZ47bouk7wi2YtEoCFmxBBEjRR",
  "key45": "4G9G59BnsbcBtB8RdvkUkCA2KDCfQcjqmkkAXYyX9X1yJa1fdmUTKLUFm2uxnxdvPuXFSnVGb1aT7rArkuP64RK7",
  "key46": "35UQBL11AAbtxNgPqtaYtLGm3n1aCazy7uNRyfukH9pKCCpevbT5NPTm6h9C4ppcNKp76P9215cFEwRwUSq9X6vK",
  "key47": "2y1NXFiDcXtjCCoz9Cipq6HBMDi5ojFb1w7zz3E72HqhvWJiWKquxNYoDYFWbYndMLW1ae9h9AzTz4d2itx6s7UF",
  "key48": "3mcTtxScKmDhpFE4PWGQ4DwxeXJQGz12HCTjHnpUBn1AKAwMruu3bmc6ntkGxvjwqXFfPEmDYbCnoX672nZcN2SP"
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
