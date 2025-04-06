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
    "5xnLYLX4AsVUBViPSXL49osMwctnPHwgbWTBRXCjYnzD4YJd3rfETkDDvwap1knwHZBN4myUkpizJtJmqjd9toUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RUF4oDdHVAYh6Dq2pij2HzYdtyYCHZLH4y2baFM1wbUK5ckkaBLLkAhhDi99HRBPVU3mgR2BV36tNJcyBmiPQ5B",
  "key1": "62xZEV1HYFbycbnyvHv8xb4SRuHzbeYwzj6RMDVhNRFPvza6ndJbdgVA5w7x7godHZhEivQdUHr7FAkLvMtFvTpe",
  "key2": "4F4JnAEp3U34pCTz2XTsTNjGFvbiWVrUx9QmuBWwpjGLT7ps5W6vD7vjsB5rk8mSK79vtf91142kabk9L7rLqcQL",
  "key3": "3rcZAmksw2PGqZyjKuydvxsSYSfY73ea8UGExA3L3J5y6u1gk432ySKkyqRrEApPXhdh2yBKKPnjFYTLeikXDgwp",
  "key4": "5vgosco83t3VztGFAzy9AbZnRcxys1LtgFmbgGh8r5rPCDjFCDjoSvQAgSV7vozFhfVfhVp91onJfycFBwiT1opW",
  "key5": "4mdBTx89CyTBzJoffdRcKvrMRFe5uTe3S99ppNTUryKbS8xxVtdGfkmDXhSRj2Qc3hjfsj62NViTpqWSskUUFwP6",
  "key6": "4kaaDjKEnE7Y3K9rXhYsuY8zM1QBUfKA9bLmPRVTjZ7FicGqDdyztXiXVCP6X3K33F1rjnCQETX7hMcvoGZzRo5j",
  "key7": "5swULoahEKdPBNd6Te5TMYvWsg8quiPnKbzB5X6hcYpBujKNweS8a9xXyta68iCY28BSmp6YzGr6t5pA2F8uufEm",
  "key8": "3pNK5w21jMD7vkYZNzQT363FJTtufWXcyx3Mnh3eJpTs6zBmkUGe19KrjPccoPsK3aiMM6UfKHoiLWLAYtFGDGH6",
  "key9": "4t47xoVAJrdHXnMC2F4dVT8xjmt7YrPzYsL6zG85tRtTBkyThA4Dy3kZ74BP4nGUNbU9JE1RexB2NceuxvrwnUG3",
  "key10": "5H11o6EzxdLuV7HHRY8LqYiFYNVWKAeoyKMD6fZCTNQDV77NgWbjDBv38aiN2qhjcG85MHGhnvxYKk8ge38ixqDX",
  "key11": "4RE7eHexJYraCEc17sYJunkcAgknkyDGqRNsWiUSbxhvoZj1MrdQTXoYuUtshVbwEHQDN2qjvDRWkkgSgobjaVWe",
  "key12": "5mGJBfLGfHHK9jfLkpLExu55DTYVGtV76ZBWQxB1e69CyimyApwD965eHH1QzbuwJ1Wu4ToLrdrggYrvnAHZsrP5",
  "key13": "4gSZQFgX2xXbEugBov8wGBrFtieUfKiuCHkTxbJnxQRM3ebukbZFkeHy7snkTDvLDMkzhTNzsHJcnhVxpHsQRHXP",
  "key14": "3UKYujzzmKpF9SSj8rgrM2c8ArTAPdoGQtCUhxvCegp9NEq8Nm9H5hSrEJtN5LcbMBiFCGXDgKbvtqTmynZeLvSa",
  "key15": "25VWm6mLmngUPGLc94Y4bsKY7GWFiPVCCRrikzSzpBzPfGgtquYdbBmPid81ZnA5DkJNjvninJnpCp3Jeg7QYgeV",
  "key16": "3h26YsHzCFAPnaf8PMLDus353pVx2E9YbnR4znxPsJzcp559psvU8W9Dw1LZ3LnFuJU7Dsv9XYfYinVruSVWTHoP",
  "key17": "2nEtenpQFqY8CH3AYkTaoSwBvFP6pXZgs2mXCqfsJf41o2c6TrCn4qBNacmRSQ3RMsTcXLLWkvjspjhurioxheXz",
  "key18": "27hozHtsnYttMeXeE6xhdxMgymMsZjucYV1M3j8iLy1Gg7BpqNQ3Y7ppuXRsHxnRUoM9PYMFaPefZavWs6hXZGDj",
  "key19": "5XKtiRr2E1TaoYNc5CUPSqpiwfspKQ79wBbEWXpMyVLMzExyoR5TnMso2BJG4381b6c7Ug8aW8rJP74em8uVbsPk",
  "key20": "2o2N5RbNVgCKkEtYANWBsc1q6jQwyKaXiKnALoqeGPopmhXJsp9jMeTCE9Za7E1ybzvV5oQRrsNreBdhq5REFHrP",
  "key21": "FAeqDgCGgmQSfEcWdwtiNGp2JajZqVMLW6uKDeeDRgeBpPJhGHXioP95kB4JodVTrvHneTkW13LBbYm7icvNtBr",
  "key22": "VMputKvhPken2pXMkY3bYwHtGZ2i4i1Zaq99ockodW1F9hDCeZTyzAUqC1DtUUKSQT9adSCorADc4t2reVh7VPp",
  "key23": "qpAHbrj1UC5xpinMeEWqhAswJ8ecm1LJHMtqjv2vrofQYnNc5BA5nS4Dsw7Uk1PXLLkqAcK9dbzEe7WmvT7Vatd",
  "key24": "3RKf54yK43DxsGpVKqJYbSccNYaU4wPdRpyXpPp2UoUqvUTeTuRshtPRaFCaNS2Ls1fXKNUz39BznqALZh8xV7bK",
  "key25": "4bcjne8pWSWSMKwTBVse5AFpWYDYc6ARhL5iPpqLL2E2tHFmYHUvZwdY73EykmXLfUwBEZEM6ffAejvdp6YbKv5L",
  "key26": "3U6b2uKBVdqZbggs3y8isR7U6LE2ontoMNSZEbJ8ixnNvQcxZs3BX7xUCcRP66DfVd7xa6uW2y94C6gtRKt5ZGwS",
  "key27": "wush6wVt4dHei1nyTcfcxHiBAVuKY53EKc8C7omCxrjo7QRmuHJcf5qprBSh5S9E4rNtDXfAt4wwqwMMcoP4Rnv",
  "key28": "2VuQMk2zQQCFkJCd6bun9SpHSuMtLgzT1DKejzQRyj1iXpEfVXj4sQ67P6n4DakvEJa1BXXtctFMy5PSoGedcZ4U",
  "key29": "4XDGnscw6pJmY9UjBbeKRf2qU2eYDZK1PRn4xG69zdwVqsjZWQ1SvBsdLyP8RD4GipcDrAELRmHKFYs1WRipFxW1",
  "key30": "5Nuccd7JP5UMr1p4rvKncFjZEWoHEFxczN6DG8ji28kRLhN8AUyNodoZ6N67aQZZMoGJhLgTTVCHMfVUjUcCibgQ",
  "key31": "5DLZxMktDtj5XqvzMrzASgpofsybtZU3aUmH2MDVnC5pW4N8gxNXvWitKyWRZkhX3RLaeFZeLZfw3JGhLq1w5Dxy",
  "key32": "4F2jPyMiBBZiCxoJzAE2XF74NxZ3yS44uCGB8nj1wEdQx75FcMNfZLxcbU8LTuxJn5omPNTjYqTp2HZyAo4UxTiH",
  "key33": "HfQBG6bNq5GgFcV4yJBj1JxvC7bxTiB6EkeAvFCKJ5JLcBWN1vz9nxwmCNtbRsh1CrytUnbfYj2Qx6J9GH5WVWd"
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
