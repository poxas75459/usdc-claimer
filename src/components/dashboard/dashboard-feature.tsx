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
    "2aJENE5mdFMvusey8kfVoPrfEvuC9Sfc8yA6Fi46X3gPKT1ttvcFCcMp7gCA51rw3fa5j3y5MfcniKLmk4eKZwT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62yVtKsNPepPE941AcaDEGdEfQY6SgVzPQjCYKx9zbNyDRMUFavaQpAcifQEdXH96o8Z3eGHpQiV85NPfy1VKmvA",
  "key1": "3LgXPL3H8LXsbd7XqwRKQD9vdWPxMZiv2R7FKAgz5zaGsHF3NEwg1EpTvewhxtaxMh77Epy1tq2uFDsp9jtUeSnw",
  "key2": "3BhXxFEtVnR48jkSDhCZPA1HV13ZHJuKpaMPxvi1TwafFrjaWmr8a9t2XCmGrhVQGj6dLP1poqKUB52gehQh65tc",
  "key3": "3MnzzhvivZgojE66fy7WyF3MZqaWEd8652mCtF15qCe3XpSeymbEDojzZvukTNC7dBgz7XPnTkKBjAD1wwRZrSWX",
  "key4": "2onSPoLSHn6DmvBVRcn5VPAKJmynS5uEJ768eTmrrRwDQPx9cRravvCWwcwd5Qm6xcbjyqnGrJGuSHTgqayr3ePL",
  "key5": "32XQ4oeCGosphcFXhJdJhVvkMXLL55ML11UmSEQCcC5BoUKneG1k8BPNbE14KYdNvTnmutpcpKH7pqKnt19C45nd",
  "key6": "3aGYqXyVHtDXSw9TacynHJ98uVh8Nd3kA5znE1dCJEfDr9AUGavvCmocWcHeakjRMxKov1ZPNjGnQreJ5LsCDx7n",
  "key7": "uP5C4gDtB6BwgCZPWQis9jVFNMK1JCYSFaNkZQyacP5N4aSXqPUzKU78JSRsqUctMTGq4roq7dKHpx3LYr1sXF3",
  "key8": "qkEYmr5oPvBeYo2s6ds5P2eE81SyZZdCfVxmShNKUCc3T1so4fJYB3aZZhixXJqZtw7XBVYvFcK4h1j7cb65uRD",
  "key9": "57foT1oW5EqyMTJjbLR7rTQYdhxF6AJNEXi7NBKC3QpUk59H95dAKPTnVKotrVT6cgPqwzkm41WnBhEpMq3UiCzH",
  "key10": "54uqiSGsknGsNAweTZMxHaJZ1VigjZ7wWWLTg3bz1DRjfxsXEoupzr76yqmPjVwaLEWneus7y1M17Qo8dsdGKKiE",
  "key11": "36ie71QJxNELKpi2K9bZN7ce1Yi213BGorDfBsDvDbmkN9pQxUg5QV1pDrGhUt85fZVtcP1Hfwf2p24WeiMPFBJp",
  "key12": "2QrHto7rTVZZsGkcaAUKaFgxCyJUW4RA1WBHEFmR3XY3LzLprNRy9b6snoCvoe7hathtiUZPUhcZKyrcK7iDBEGw",
  "key13": "58Vz5SqfbjZuK7fBqv2SLV5SWA7wzS6TeMPBQED1vKeVm8Y6ZM1hgV1NUPAJ8AzfCY95Jx9KvtQMKCc3msoDdt8E",
  "key14": "5iUxQSiK7pPGtxn4k2xhjAwpecBQzMee52vWbXbR73rUEsCJk5n3cCQJb69Gj1L9y2uVFv3GZqXyt6s6BVdyNJNf",
  "key15": "4YooKqdedMSyyHAjGSM3WMtQmdpMsdBXkrg4ZQYfiqcRhCuVKMFpRZUHGQLuT8eRBEirnEoxZSNKAE4nkYQgoqFb",
  "key16": "3eBgPiGkFWpaiFhYyhNZVLFBWRX5Mq7ueUYk6CbmAdzBue3FY6zLcaHFPRUoisjymMXLxWGveygDQsFnAC2oHxt7",
  "key17": "2KkRcmTGqbMAADYB1GJSM8dt1qfkwQQLn8ZzqUv9YbUDfKLFjgaW8hMVo7nPEUDQ3gYtAaEgM7y47nYkLVftk6m6",
  "key18": "6v8ZsuPdrNtjFQsP6DuRdvdDjkJiKQZojzvi1yu8E1ZqFxJcSyveDJCxt7v6qgfSYho5Nads2NaRPcDXQvv5sHx",
  "key19": "56Sgvo2LkviGiFkKwpAqmWvxYFsHSJ9YcBZs18aDHR3oTpAw1pj3W46i8KtK5rtFCbJ1sCL4kywkeqY9UEYXuKVa",
  "key20": "21aaeQiK4TGnjSWSgw3nj2HEjijzPDBS2K9Zp3kNUVpgCchseo2he8ZecVAgC3Nopk6xdfeEMi7cNsrfDC1aXZAa",
  "key21": "2VEtRZQKM1sjo4aozwJvCn7WNrTatPgevWKtTJyy1syvrxyN5kmetAxM3WC5hFydCZz1qKgKp3dRaDrnHrZtAosa",
  "key22": "Q5dqUveJ9zZx6iDd6eceGo5F8diTGyYow7u2vo2aPhE5vknGysWF3e5G2bTufouhaxyXg5MC9WWw3Z3x3jWv7sw",
  "key23": "4RnsdiSjp1PxR7qkztioTY6oAx8ony6vxMnrRw4vQMre9YPxj62xDzCrgnPWhiQG9SaWVhk7h534JpzGo4uj7773",
  "key24": "5EpB48qEwwDYoGEszmr4zDgWnvFMaPfph7zULTKeiUjJZhEsNno9Nrn5vnACnj5zV7Fvy37ckCUfMerhcs6yVZzY",
  "key25": "4CxizTBWF1R6qhYpihgPKuuq5QdrfzaBC2DkgFaCDnGd1zJtL5iEdqx4EE1Fu9x3jh2FGMeZh6F125WyyTTqHtgH",
  "key26": "57hRHt58nPie5ESHjYdZqX99oKiQFY94WuXwsounpvDudk7KKvweKDhY3ZT9ZWpdXoNEyNzbxzKAMYZ6YdrnRLPv",
  "key27": "5fmj4bfvvgU4vJBsdCQ8L7VEXtGQQwtcL5tSFmEDDLqnjwtqQ3JjoAcccyXZG86HiJS1Dpob3DQAuA8ZEXT1K2tK",
  "key28": "2j8FkJEmB7dbT7Ed6R98wrswDiwnNs6fW4iczDkEnE9WUWCCV8t9h61YYWvfJvDGLHqcKiVJX2C4jikLuRKuPtLj",
  "key29": "34NW5GK12DjsNm3cJbAMx3umDiKucViB9xSp4H3skcZYaYvV5SodgTwXZ6drLyUDVUBLjmukLV6j5pcA1evG6VQZ",
  "key30": "ghvLJv5f7hu4a6ikohv3pZRfVkiUBKN7NjekxrVX6JdRHkrWm35Mwx7QEVFpbGECx4Td2VWWYCK5MfCCxLYicWH",
  "key31": "3rqy5VbBtEHZLk9k8F6oc4Yt8iLydJroqMxb9mcSTxTYBbLNCEMn7tbdKE8sZT9YF2kcPovQTsiLs7LCm2KDuq6K",
  "key32": "qMtoFwB6qAeY3yLnuqBoJxn9EpPaN7ZrpYFzBU3ASS4Xct4qPf7EkdARpmJC8DDRuC4nEoWfkxP6UpGPTxvdMDc",
  "key33": "4bwWkmLV3JXYay8DJMP4Xz97tqD3D3sXe9oqLFZDb59dXpUG9m8yNZYzU3vdkGXJVu4CYk6p6nQvAg1MbpexD3ZD",
  "key34": "2E1oqbBWr68TeY8fcJxDX3g83mDTm35VQ8suHb3xCdehNZyeD83qLGKCVMkij7uE2YyJEpA95XSXaGtVdsUJ5uQo",
  "key35": "5DFrEzgpExioC2cvDpimV2E7gJZ6M9GZm4LDQX9i3RR519vz4C3yFWW6DxYHD8RMEqMYnUW64328zzNtWFJKcv9K",
  "key36": "2VJ8FJbVxh45n7ZUoQNCeHD6ejAD33NNNX3qU4U23t5cc7ehpyEBEXP8axakGGKBcjDgk8LcSiyjW5RsBuwyb4jD",
  "key37": "2dwpomkdKXTReBVbzs8GgYLJSwngB257cusbdtWZJMqvZsKKF9gT3cmw2NjyXKvx2JmREMuBpmaK4MR2nqW4yNfC",
  "key38": "4iitqchv8PaLPCGdqUjaya92FUQv5gfKh264BqqeMqC2buvcedaemkD6VUpWx1eeus71ajcNDgV9z4wY27zZAGbt",
  "key39": "4V5wCCPG4wvUrrQZ6FSL5mTE4q1HkcJs76TQpJnBQK6dvoBnwpyyKc2UQ2y9Qqs1JJWPZRiShUnVo2XUKkJQsPKL",
  "key40": "51xaNkJq25yDZbLEmHAmGZpMMk6dmCNwPx2Hsa23zqTFQww2obLLserAGxovz8nrDYuNau853QVBoGKKJu9PjbqK",
  "key41": "iMeycrv8gVEpS1HfrjASbrkTLJ9E9kPaqwEkyM9SAUvUztPnMb9UaU9Regyz2FvL8DwyK4oRubTRrZhrgaEqqCY",
  "key42": "4yXeCpGPsWmaGEaZgMx2xA9JSwPakRfgmnHGbhyTrod16exAdbgESyk9hwrkKwErkYAwq7j2NiHh53rkMWMhpyuV",
  "key43": "2nyKbYnr1x8YbJH8XgUDECARfGNGay9sVu3SU2XD4S3uXtkYCQvr4VXxACuachqPZnzgfXUn8A9gMWBh3u1yKYgP",
  "key44": "657kWv8PdhHNCc5EmYEezye6SjMER2sNrfgMoHXKQZeTRqN5jj6y7FuNTUEA8xWd37ScoP8BA6r4HLNzWbuF4RND",
  "key45": "2oomMBZvW8b861Pbdx6rkoX422XRHK3xGfnUjcyP54gojywXMV7VeFFheriwLn22HeuDSi4AjHRjTCk2vf1MLUck",
  "key46": "3p3ZbAGZRJ3fGkUkz87T95N7J3jCfRgAq5ApVUNzvmJ4xEaHoUFsTbyMgVJ65iwZLh65q9pf9MecM31fVkAxBR1h",
  "key47": "4GPHvqMFEKCdseikaVpxfoLrxYru94XbSPwcK67XaJkqQ2fbXkG1xArxZJEyjANw9vgrS3VBXP6bXjzjqrYU9DE2"
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
