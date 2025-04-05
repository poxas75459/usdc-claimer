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
    "5duejWW9Xb7YAiASa7vrg8PctofMbpVb6pgw4EUsiDKoY1vgMqynkpwS2aBiLoWqueB2r5BMw9mDxdKE8hs2rGDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uwp2RPVaGhMEoivBFiD9Mb9fQ7af23jyYdJKAYzxQD6MXUFjb4Uf6WXKgj58nPCwTDjTUYhni8C4KKvupzp7KWt",
  "key1": "21mJnfussN9n5aaTdU8aQ9RSGRFRhJ9ScMRokfCVXobsaAdhYyasLUD3gFH9HSNs2zVxeK7WT74FFVdKjEiZ6QV5",
  "key2": "MdCYDTsqLnDvm469hmDUUGQVbFgbU3xzSTGD5VKSCbPY96kffVnqHASvwhK2yQRys1YXtxQWW9q9j2tasbmfQex",
  "key3": "4BLpEQNb1b7DpVudqK51PJEk9qDWKY4GwDgfrApgPHEq593NXCVcGfKK9aBZa47nBXbTghhxA2wmnqpJywP5gerM",
  "key4": "8zs7tzhjzsRRcYKpvxRNEJFj94YzfPqc1S9sbm9Hh9cN44ULrwTM5pGJbEgL6cmKgjuWWhPhbAFsj9RxsLm7YfP",
  "key5": "3hXw3VAJGV7uSWhpyXSZZTXmUcifGaiaEHCrjcoKguzxA51T4CFqugHkZnsv1A748sWaeRLa6DzgdZuXdR6sBpd6",
  "key6": "wjzvm1JYu753U67K2DaVxhoTJrKs6Wpxv7xT7t3yyzZbcdafhZZrSFueRaC1NyPpajqBV9Cc3GxHe3QK6amMqHy",
  "key7": "3NWgMUhuHRdM89mQzVYC9QWfoKSMnYq3svS1WU9cgSJPG511yzQL8si7X9brcopX2Kgu2U4JiiCQDex5euLSHLWW",
  "key8": "57rChUnXwNDj86mVdYhCrLCDNy5Sr9nRRXVRAk9xP51Yaz8z865xcVh2TD6E7FzhdF1wAUdrUyzDv42x9LTMKmfi",
  "key9": "3ZL9PsFtNv1LsYJT2ZDA5CzKAWeNg1A1HW7kvwHfddqQagDWAzXwWQwJFFofKc1s1D59UNtvYn76xeGQw3Taz4QW",
  "key10": "4h92KqNNQtPgEiDJgcZzS1EYB7TfQrf4vxvTArLRZNupY6hcgSbqRGQfBRRqyv74addvK7NoTh2yCXwGViUGos9c",
  "key11": "W9rtHZwD8MBASGgzYpSuhfYxcGPfz7LMADSnK1uR4ZEMWu1jgrvHxYqmqWv25GmjkoB7mhuHZEBFzJ7zr5FvGSV",
  "key12": "5vNeK942JbQvxFdq3p1bFrf6PZi75HSi1citscuxACFrnxshV84NQ7izSVXu6sK78KsDfdBnFZENGxTFX2UDcyvZ",
  "key13": "5HdbmdZpNtCvVUFkHa5ASyTgN9vPpT6XjeNKwPdWKbsnRxTibT2e3kjXGNJyiVEMiDupEGBAkzrvnmY1LjdUCjFv",
  "key14": "5Qi5zSzmjJ6bgeacaCPzEvu7SfPRg7coyA1Et35A7F9TFhpPPg9GiS8rjyMtHaqgUGkzt3H5SK1zbsLPqfS3uRdJ",
  "key15": "2ST3hwbSLUV9F5Va1h7Y7ProaEoDfW9y5Sj96HEP46N2r9ywGcEza47dbvobRb9BfEm4dqM87SP24ioHbdpxkkL3",
  "key16": "3ETtpzk95Q4hsMKnMjVb6iX7cmhpgHj8fC9AVYq2u3ahUwAKdGGYJhEGy18mjK3LVyHaKuKu9FhV2yw97wnD8PEL",
  "key17": "3SQ6eERgcGou3vXzCzNyVB7M7q874mSb5Git4cjpK4SFCkvFMX8u6ZTdMwRHwEnQbf9UfjpUpdz6F7mjJ4Aze4ed",
  "key18": "5vxyyNk3KHk1cJrcDtgywqyXsM3HqHkxqB2mCe2AMJC6VqH1aps9em3sy2coPnur2JgXUTea9hMzRjTDqMJLUx8G",
  "key19": "4YLksaBHHBKWsNzAq875rKvrLoMDVfhh9ZL4p6x6JXkiN2W5r8TEPhatLUAdGqU6aV2UNL9HhPVjLdXeMZfDsE14",
  "key20": "4mz6EZbeLSekAKabuSm3ratTYA27M6Tqq26GmZVSrPBnthHBAF6w4sKmAHf31MapeUeyrH4t2fKvjLZQRmvexhGE",
  "key21": "4qHT6z4TybeQwLkjtSXisxnXdSGEe8Pjaj3q2uG43DBrpDtMGeNCDMjqfMBuXXa7hy3GLjRpxtYrSj9dGtoz22SE",
  "key22": "8ZeGVknnq4MxLxitCRZr6CgcJj7VLZfTrvxruBqPnJReQdchBQhxAE1Wrv8AnwgwAdkt2whW9JdBCTBnj8f9e3d",
  "key23": "3xvxmNMxVquiLn23AEFw9cyEHtQ2G2Q65pGeToQ6KZZuGS51soafLA2QBa5g2WvyG1axKdHqg3MCK8noxJ3PpQY8",
  "key24": "2WR44vhCW91u7CYtvn1nDvwXjVHLTGZ7Lpn1vncetcbva1MuedZVBGZiYMuSXECHCb5uGcc2B1seLP7tSR9vnPGt",
  "key25": "4kkYwhgBfU48JqSVriLNpCm4zKTsHy1trKRbjHbv3QTs2JsSs3JbD6aaN8a4ds8GiHWACVdwGbwiKD2zqVA9TiZs",
  "key26": "2nVTohp4CbGWeo4eRB3DYuuQw3PoJFySxTUW7aH77TqUJdPWATVGHmxCwT9eXTuyzTrDGafFtmFnfN1vSFzC7SVZ",
  "key27": "62TV7j9m9Q1Dp66vePoo7EyrsYV91wjwbKmdeNVFQYTt1zDRSQWu9E6ijdGByjGQwHRJoS8WJSmPMaZK9nxRJCN1",
  "key28": "5RwKhp29wZMJfUPajWPhbnMsWScGBisAcZK1eYt5HNcLo4eMuc5Lqdtzf62UwsRTsfLCa5eDLeip72LMkUNHZKTd",
  "key29": "64kexPv9cv35rc8Dq1XJ7jyTra8mVwT4HbHn6TWSdQA9HVqEzmF8Lvbct42EUQCwsMyFWcshv2UKz9dg4L5gQbw7",
  "key30": "66pr92fG9vPAPzcdLBZyetJFM4aBMNY5zv33QDC2CqCiwNbxzYLi6bnbFf8oqtBKZW3B5sjc3ghbLNnJWHvexGvs",
  "key31": "2LKtSRG9NCRY4euUscS1HEnrXybcyc5KDTY6NewkX1DaGuPwYFDgh2F18teXAeynszhzn5GDw8PZy77hSs5n4EJD",
  "key32": "ZQpxTwguDrxBpBjdkaghC1sB6DL7mq41tHR19fQdxZETfC7XVgdWnVEADPZMiuAwhvHs6ZKYLYjyGdq8rqUuvTn",
  "key33": "26yxTrwZBSDLTagbFnQzgVS8baaTPtvpf37pwLiCbBC1XjssHJdpU5YLvudQN45XtmUEJvtnHV9Kk74bCbZGdJRe",
  "key34": "2cDBffR7A8YPTba32SU3VzVQQdaov4HSAKyamzYmRz6meyAGJZPAMDCy9SSbqzrHPWqmuztAgMFYMB2Tz3mB4C8F",
  "key35": "5VqJ3XB2SrQ2bEaHWiwLzbHU6xmQMbB81NaHNkh5rPtHtNFdupWuF3TjAdJLEj1MoKBuWbge8J7uNjgZKVTRqx5i",
  "key36": "3Eihy1zwpSs92CAGcjqFBRL4RYENC8iPnpdGiwqGwD22itSuRwGa9o88b9N8qkqnVhgk3He2ZUjnigN9uTJP7Lmz",
  "key37": "3RhzFiJDz9aJPFydbQgwQoNc2XKWCmbRhxRVzU4nbfgUYadgHworcya8rUh79kTYCbtqDveaK9U8Ce8vFdCEQk9R",
  "key38": "3UUXmJAfFSJdvoaGsiRRfGFapk4z8hERLCcf9AtXNT7D3vWY5NuxahqHuWQPR5gSSiaZtzFA7uSso9uLiSHMNJZ7",
  "key39": "35x9hugH8CZN8Lt1MyzMfQL6yrpMhFtswav4QfomE9k1RTZ4XHaBTg5YaCSFeQSEsmHexJkeuBKzXGrfJd4U4wwT",
  "key40": "58ZU9s6JTGNoUsQYz4Sp2nnfe8JPSTeoHmRvNo8HoYtJrYV8tF31pCyaG9RbWb391iCApUxhCNfMKLe7HZMMeG3y",
  "key41": "teFsu4eY4nymjCpz62BMNCFsDtHa5JqUTHsAPWX4yVeqrmjovivQeBy3QUAqXB84Ljz8ZdrKXJxaBLmFgHk9wjN",
  "key42": "5BHiWqA74Tcj9T15Wru9EEZLTR1CabEjrKhmkskaMFymQ2ARoYZQyozqr8Mu6ozskJPZa5TJCH4tExN9v6T2416g",
  "key43": "ae3P4KKUdGJiLDSTkKHd6xm7LCbmrBHCxVkxMScCWpDWJVr4jfaCkxoeVqsYgbEcP1xzkRZfSaqTYYXGYqmQFh7",
  "key44": "2aNH3G3mQnLkKT7sgTGtAesdcDxkN9efbD68fxPBWBKS7q7nx5JG26koeS51qcK1twaUmiVcPiFHKZXb245aUfxz",
  "key45": "dcYuztmwxQ1xKdMBakGoFLbFxNiB9YJfhjZMuSGeNePEjLcuQhLUSbwavojn55ejK5JztKCuKg7swo7WbpT8nU1",
  "key46": "269m3j3rKJ3hPCPAVbNjkeqvkcq8xEUpE8VZgpJyW77GW8bPJkdR4D4bAFfUUiqAVNhe4QZvw4zh1hcXUK5VqfUa",
  "key47": "5zPzXq2rNSaFvvjf1h4M2NZMQoYAJ13V9mnurT5smuwEjrTELFmeRxTrr8iroXz37sjR7KRLn445aWpeuZV6kxDD"
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
