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
    "3pfMXMjnfnVcVK8X6SWDG6CLXPj6G5AEuY6PUQfk48jczswBBRXJzaLV6B8a8TWHy3gVXKYDMKQFtqGKydfd8yUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZaRqtKWkEjsPBjb2khFeXYMpxLgMNKyZLngjVZGRbYvnyCQ8Lzws1ABxjCmZzFQ7bM7twFWRoC6LqDUdUyfy91",
  "key1": "5ntYRp8ALz7V5iQVMnszVymjijd8KAyy8hNUJXmLV4rsRRHtKEDAVpDQDsGtoLvggJSMM2DWczUpmmpTfornqAJ8",
  "key2": "5w6Q493fg5fKCKAvZiN9yKysu3KSjJLNUfSrvJSeP4NeyQSu8hFB1kZnLt2RH7ZgXkigLKkrkXv2baGZsDyATkdN",
  "key3": "5EfzDjc3kJh2KRTmQPvCeTevpZp86bYZaMnevXpCkQceryMrjR2dBTy3UAfkmfrsAqaoqGinkY3t8zxWWTCvViXH",
  "key4": "2psTkDubgenHcHfqJKooz5pQ2EeyXVtBE1TbnyprY2G7d5i5znWcBQHY2SzHe9gTNPzHpLtmDk2JfzyPmhqJyR6P",
  "key5": "2ybrkS3b6aQUJZtkm89S7jMkCJfwcYfHWMvQbSLow1zT5zCN4Yuvq1oZN7gDuNPztQbgY7BMhJkEVN7cUDf2K4NQ",
  "key6": "4uNm5EDp4158nWxRZfueDkHb3QnQW98WvbA1Fbk6S94PXKhhKbE4kwbHowgP8YEWUu4Wd6vLm5h6hGc6Fi8cgfz8",
  "key7": "4KsQ49NAX4e3j2r4559VMpEg94sKSJjkAYaxbYnyBjWnoeNes3y3ZKHUF7xDnG3EfRiEZ2bG4bF1sMyFTq2em65L",
  "key8": "4pTZzbf49iFy32J2h9n5gey34TMmKZ7f5ig8QC4JQMiWDzEZy1n7Br9kpiBhW8LV6y3Ho1JM4pDwyAbGJtTpQq8w",
  "key9": "4z1rU6sz4Y9Nk39B4VREgEGc4ciJJSYm65vecv95niFRWvU4sozhKp8rkK9dakRmo24HwifaF5Tfa6rghkkoQVT9",
  "key10": "DnP5xVnjaxSonp6zdUF5DQ64brpTKj9Tj3CGrDiEewoUMdmCgtrc1BFRA5LUCp4g6WN3AvFXjSAThwVjdsnNqTS",
  "key11": "4zUnoZ9rGPeMWYVNJgp1ytyHK8stUDyQ8AMKAFr6mNJZzeCuUuSHYWmBnLrWdxRrbyapUWaPFawQsP2XMVYTgPdD",
  "key12": "2mgwhXz46Tsic5N6P3q8USsaJ7aGNvK2KqpCjZhzuh1g6KFKQ4LNSgk8hQstgUW7Q2tVSbQ6XJJVRnuEQHfCjfox",
  "key13": "2oz89cB8PEP5TCkc9ar4gz5LQCzWdhXsYkSRzn497Ssje6NU8RPA3Px3K14FPR5N3HEAudiodMrnMgBbkYrgdPxT",
  "key14": "3ezhnP89X3YxMD9cG8XUFqyuknxNr9ZZRpW4uWSdFkYPouTL2sYdwnt4SEu3aJAWVS8Lv4S1eKXY9ZLtvGGjhpYR",
  "key15": "3ojdMTWuCG7TaSH3cUWLTLdDcciGEQ5nKzT7xq8ZSCvL7dU4CVLxGNrrLkjM47t29mCZTcnp1mFiqjZCDb28fvAW",
  "key16": "57Hh73zME4TZBBE7H64BJbUaLXpx9p85jMnVLqSu6B8NVD8764QA2EyvhrWZ7681KJEx1R3gG6o94Vh7UA1VZg8T",
  "key17": "3tCjRgfuZ1LtNqLTxPrn6W2CFmWBDUzMJqbKCCj6AaP6WSu5vhHHiVWjbazqaqxWQkfRtwGF34Xpr7AAo4DFdrtu",
  "key18": "GXvDy41JeiBLkbEw8WquYQLgrQajdTNWPjBuCw6mcA7zHnxzoFapEcP5MmQzn9h7nQKXcC2Rkf4RVeixhoPrt7d",
  "key19": "5qZWN4vjwnntLL6XZb3XU84X31TxvqdRhMDyzagkugFH6hm5zTGo1knXRDMkygZRSbJAEApA95TeZBwfBTLt4qHe",
  "key20": "42zqCUbaHoA7bc4jgSLdVKdqF54uWJQK9dqkBG1GNM5dC9vm3ofN9QUrU9Ba6TMEurnHYuARuoq2D6izUYUwdTnd",
  "key21": "3ujBXgvNo9hN4fdjkbjpDk9EuAFrjJaWoiQRDAZfySK2VdYiT3xjEfDWR4tDr14NGyeirVp5MdG9hnfpPCcsU4v8",
  "key22": "22BtqdcgMvoxb6Rt2BxaFAYrtuj8CBEXwyYDeYPURArv9ZcM2RNzYots8fbqtTdREFa1tmpuwAuJdgAsxaEsoEDX",
  "key23": "4R2QMg46RJ5pvyMUuqV8EAQSBci4FMfSLUhbqCuJnUcGzRvTNzTM8Bnf1EnKteVwwQfoCRUdJs7ZozwCyExBLZ5k",
  "key24": "51wQLTaUcv5xm6kp9zSMCKT8CUiM9qgtEtHrYwUfWPWM4pu9f8M9iSk5zARn7UBjExTB5suMwwC3bjPqbBGQrwjT",
  "key25": "2NaYZHArT2TAEGcfpy9AhZfMWXqoSCc5Az7LgEVUHHuGPEHjJkF6GJNkSuTd1rG87CepXQjVNwYazBEwMT9H3rrp",
  "key26": "5ZpkQ64ptfpsW5rMLj1yYM4b94KXtz8hMC2d3wvaRwBEuRz3VWfXsbSekoFfTM5vF9ExSR1EJ74fMQShUgZsEcy8",
  "key27": "Z55y4VnFBuWzwwNdvzbLYgZVL4qY2ywtWaFPHej8yFiYH2SXMmyp8KRfXPy4jd2HtqwScEJ3EBJBr8cDtiKLCrK",
  "key28": "3Ksegn2UKrNR8QLzaaQmeUXnS1yeE4aENZDx9QRzSnoBLoWHnrVtcAPxVFDd5Emc1aFCcTVNsQv7aQKw6Pm1bn8M",
  "key29": "3bXwQzSS43bzKHSp3dGWqRbp9xFUAJjVEfkK249WvCPBJwf9ewWDaAYVkrrdLrgkarnCVcETx2FzQAL21qbqT39P",
  "key30": "o383uEgafH61Zdc8B9HxwLNNMLYaMgaAxAZw5npds2Z4P2LB4jYtcmWpD5TUF6Q9vaw74UWAvQRoxNmqK5kgXz3",
  "key31": "28E2f8G8jr7a5yar7Cuqjawo13jorw45qJe8BsJyo6F7GGoewTsoTEstG1qW8uNYL51xQf7Mh8JeQhpRz34KXNWh",
  "key32": "2eQYmy76BHZ4sfrAHQccphfwFsVkevDgKJdmk62ne681YXXM7r1BPqHNWEBAYPvjAmdJzCTUWXt3xaW1o95wuf4Y",
  "key33": "5M5eeiB69aGy9U3ZC1WBrT9HrFtDPYVTGEQN7rGA3CaR2Ffy28iZhANcGnPSUZEuFhNf6FLgRrH65iJ4YpJmcV1P",
  "key34": "XhYr7MPmaZTK373iMBXqQ3MwJMapkWVYVeQVyGyyA5cfDdasyRqYA4kkKcjPboPdEHV11aq9BKbNZRttFs7vZGB",
  "key35": "4sm2W2bqGZbfDhNkRUGRbDWcJeEYgh5qY5ynHAvpLgfreQuAD62sPBpiQFF3QUnhi466m6yRn4V2m5fQ6zSdAHy2",
  "key36": "57uZgr92KEak3s4FYGZP5TH85KyRAvim6j6EkkNWh7JV4DighxtjLM6QRPBMpKy1RuXMo9bync7JfxEvCshx9xCT",
  "key37": "4FVd3P5RkJ4d9RiRA1rbSfW6vqiJprvGsLA7YXu6Yx77StDs5J9CA91oybVwDftpZWX17DAxENZoa2YGSjnzGeWJ",
  "key38": "2bLTyyxZcsxtmYXAXVZbwxy3ZKSmHEMrobxRXdNgEN7VNJYZUSzv8RHkzpfovzPUeFvnShUNqrWxTkMH95Boepvf",
  "key39": "4Q1hRxoefyBV6gVBPebKYbuVQQ3GEQiu6qrb5QVcUVxYjyjyb9iHVSszUVRg15rw75EWtQsnuhqhTchByJn578Hg",
  "key40": "4aVB9pxCbSaWVKEoKdkcUdzPpdzG4FsKqGGn1qjabxuQvCPYnCDLD4rbNhe87tJxWoKjmib7n85pKDfE2AJN81SP",
  "key41": "5LAwp3U3TrPudqNBZ5ge52ZaivcMbdC7ihiaJFdxWEnp7oh2dBUSr7dWKfBnyvi23Z2uXHED6fn46rrBxwJgsUti",
  "key42": "ExqmpHvkVmzdpBfVT7PyFVv9dpmXNPyX5Yo8GRiXHzRKajvLaEZ57R9XCrg2Rx6NgwMQJ4YHXSW2T569gfUQofP",
  "key43": "3FpFUvXu8j2UBHkLMV5CmMw4Zvp8vobqBvE7CbnwBauawDSAyd5nqmj2FRC6SiHCRghR2wxoN5xkX1irRFJutZYa",
  "key44": "3pb8T8fW88zsJPLgQgj8H1x5JyrtcVBZBCTVn8HrFtK9C1hR74yE1sP5ejQdzBQYD9pQ4GcYrgvKrw1UXB92SYLs",
  "key45": "pXUyPRQfjrpdMkzFfscLJf9wbEF93FSQmR6E1n8dG2LKwowoH4NwNYU9S2WneuybjzptMyE9LQ3pygrkv3aoawg",
  "key46": "52X5JctDqs1tpyQNnXy8H7n4GkKrJf3Nzq3PNRuz9R5wkHzj8gQv2Fk9HoKZ11PGeBxdtcnse5nxeNAVALW8CfLY"
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
