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
    "3j1RZgaEJnd9mrGgRWGPtkSjMrNSmFyF5ojAoHfZCujmjf3evJ4pMt1w5HX1eFCTPvwXzFCK1E3biT3YJARSmNwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zexv94g6ghST4GbDPUr7RihMLQRX7qfT4xWYkwAwhfXubEvid9t1YWCDX3om65ERfnkhW47srr9TRQkZsQfyhhE",
  "key1": "26RKLWERVUQeVkejasryP7LhS4iHGv8zCkREbc8agRbjA3bwHj6PG2CMPJpugbcz2q2JShauKKZBvr2t3dcGEXoM",
  "key2": "4QNVeVcsWje3gpUMF7hnc4tHvXMLMAEs9Uf9xELxbsJdmnB437DKWVtcvepPPsnnKdN2LdywJjiq9DkttaSF6rmS",
  "key3": "2vvamms7dUM4d8h4hT4hxDgFREZWx4MKhBP7LszeF1jRvzMXWUEAUsgRRBxco9Ge3nn3wmvNwiFDid4CVQi9sw3",
  "key4": "5aTCFneXai3hNZDqHwVJbaTtBsBAoHuR6XGoxBj4ziDNbuCewCFoQUqqFjWWQbeEBZ3mLNjiKvzUrumESizdRsPh",
  "key5": "3cSrHXBrwngdoFGrcK21ctx9iMosJxYj9sQc83vECHQXtY59i2UZCu3SUvvxCnJuZWipnLEsdSCy6KTdPJp9CKAG",
  "key6": "jyqC5At4XwEeX98xKAb8UttwFwBCLgarhPnbcge6J6jMaG7UDBPrF4Jd6rpaZ5w2jxSQcJqxmApakdfYxnDnqLr",
  "key7": "Typ6Ae34MTUyW77FZeH5x1zqDEMJ5W83gcfsuP9J5LWWJYQ42kYJTiH3EGq8Zont21zuTGEHBvaNouMJDsojcdH",
  "key8": "31sRfdzT91U93qiqpfVAHswWRUiYprj3eeNFiRHfzaG5aMthG2tBSKqPQsYyZQX1PXQmJL5yL2Azn683CN561jvN",
  "key9": "B5UjzeNXGnCTtHTD4pErxMDRF2XkoZfHnM3Hnxk86ZS2eY4VTkMkjZ48v35SRqZTZxMDbHUzNqxgo4tLV81om7W",
  "key10": "4Z3wg3n9QmyrCg5YiVfz55yXdE3PwGnhW3WWtbiAMF61EdwxujA9DNF6Gc4tYwn4kX3PCB7ZMcL2qAUzjBYH6LYs",
  "key11": "3JYxCZ2Vz1DXgyRVbuKA9FPFMfvXKL8rtHNKD5bDocUZRA6LokAEhbGA2cfC2znzLznNRg1ew7i2Z5Ky5xSBgme3",
  "key12": "5Jf8LowkHZ8csQb95ZCxcmTr6kjSXLexiNewxXAB2haCwoG7StzQgbsDWK4HZBHQUMm3iXXK1cBYGJr9FcHgfPZg",
  "key13": "fBHZjnmAeSe6GqBvBUEt41zo9oB3o9RXDMgCvDf1du6FrYK3n7R5uSmjne7e1tvx8WexqTwqoE2HJv6Q4HnHiSM",
  "key14": "5QzBZvBXCKmSV43kuuJnCPuj3VAHu75d4jGGbvYS7p7hnRBpjPzMygyTTRT7nMdyG2EQCbMitJirD8Kd68eZEZk2",
  "key15": "48Yhf4i778mTc7i4NPRBigNwbCB7PiEFAa8mVzMitj8kyeXCL7j7DAwGyjj6gxL1PVv1kwuHq9EZigZsF6iiPNrD",
  "key16": "3iPW1dd9dhyNG9dt7zT4TeXA32L9bGoACA4sJirSQBieehnyPMGqm5nX6wTWRPp7C9CCjdQWYT4JQPcDPTzBhrLV",
  "key17": "5cE2ubbFy5TgMbmp8vSQheYfwiwri9BSo7eygVGwb4r3jgsoEFHTZb5QxKVSWBBujp4a9WrZYVT1pCduJmkwonW3",
  "key18": "5Bz4MoYJUvgQi4EusbDc5q876kNLmwP38SPD7dYjJCZ2X1nxRTgv1f7FUPuDeJoyKniZEWG2Z7mFMfLxQJih4rsZ",
  "key19": "2QFf8dktXaMVK6csmWvgF4oVd4ec7jE7yWVjEQDfxeMufayrb2KBH5C9mc3QZtqSnSLjcBFRHUuxycuAD7WcFmPe",
  "key20": "2KM2vnnZ3Byt2RrZgVdKd4HxgP1jGPXJdMUTuWNxSR9JRHxgptCmVsY4t4YnZDjYkdtsvCGmqYLqQkfhhPRGtpn7",
  "key21": "38vNDkFeNsCuyPSr9Cch6t2jWaPbBpRVG6U8fo7XWPe6ZbV4k3vJd3BQkvT7A3fVsymdG3AD6L1BK3vzRqgNnsUE",
  "key22": "2wqoS2WUMhTm5Fm4SbHe94gQG8UPRXpNv8XdmtXZyKJbGBG5PYtHSg4U6wLYfpbQaQQ3rfQGvMe6R5R4UUMpdLEG",
  "key23": "5B4smya33AwXw8VsaGHrGrV5Aw25Ex1mvH8fZDsjkh2VhNZQSz1tBbaboiGXEzFK4uyvo5pmPBkYQqfb8wJkuzrv",
  "key24": "3KJuipd6NWMg7xPd6dRFk6miioYLwdLEGu94dM8DrpSGne3gqf1WmyjvrEzw2omi9YWWzY6CghcWXRT74rQq1seG",
  "key25": "62ZCk8rkSQFK5JDeb2BH668wDbsQSuWw8KYQMrd7CwagVnV212VGxfdf5RwQ7HyEvHvrg8eMELiqhPYQgPA2v29F",
  "key26": "41DBhVSE4fBjB7ZbenF2Qik5TLFKqz4kFVzP9fg7vhaPgA53EZSifW3TenDSYBpskhaFL6SN4oiei56xGcdF6rs2",
  "key27": "5D1LQzm3QN17srfegTnrcjLk7PqqBqowBfd2nHWyLZsY9Ev2xyYF3Xemhdi12zMW2U9QQwghUqzJj3pckgJYUB5w",
  "key28": "3GbZpcsW7xnH3x8KWcMVjNKap8CRmRMB7JkBHQYQLRKN5P3nBV6KYz1PSWYYcmsmfDFj4WPf6JKKmJ9WRMerVpxk",
  "key29": "29Sm4ds6P1QSUC7AVSAonE2XHrPSnQRfVSZ6kanKKhiSzDTFFFvPvZ7xxQgu1pWyS57RSbk4prqt9GQT5GBkxhGD",
  "key30": "2GYmNhtkRcfBXW22RxDmyAU8uXqbQU6BVPKGXo5uVjC47oTaDer5rbjEZmW2jUKP8wF9BQXxzwz5pkCae5xg3F6q",
  "key31": "5TAckPcrLvv32fSYdqkdsjM71S4PYCrNGrQ22zLs4GfTi3ZkPzBe3aNA5sA3n1aMQFxQHgZRJgxdWT6Wib4da78N"
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
