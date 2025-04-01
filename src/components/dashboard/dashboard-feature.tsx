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
    "3H265jeFATm4yXdcEQXxmojQ7rWak6qJWGMB9mzkvCuUoCXTxJXfDaZ8P7yDr9Ge8ioM12GF6yWRjjnxHhUcw7K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45WLF7zdudG5KQimtrPYqWhKBJu58PeEd8bdKQCCoDmmzivR7czhtgJq5FTcuP1kPQfq5y2gZqTPtgfZSWEQgj5P",
  "key1": "46bUVB1UYeGn5p4c3kZdV5f7dWg2Gi9wcDaVWA8CtZiXdBdc5zmQaxFCkgxRehXkPKzMbmuhVQBFsattDq4prGhp",
  "key2": "4hPTxiENGypoywFjywKow7F9UnQjMCTRuCj7R85BkxJqKTpwH8VzEEAMErnvUyojTaYhhMKj3JeVPz9grsiTh325",
  "key3": "LzQwApkt4pFWarBhNRDr3XWXZvMig8hpkFQ4u4SkqJf31EHGAKWczd5G3jVQDWwACnhpeHx4b8my4muemfKoA7Y",
  "key4": "4GgMHahmnEpPPhWLLHeP8AsNQXAhGTMdcEik6cncNhJHFLLBEwRJc8oYQCpehGqZa1Lyt3WhBFeCtXwgbvFJS44r",
  "key5": "5DDpEQTFCxrDrLjPeeMoLSU4oU1LNkvH15T7ucY5fPYNpFMZtUyo9ocDhk5VDQ72ECNegH2pVTggVaJuXsTpC9YF",
  "key6": "3ue43NLCRm5DXhxcwDHbUxd9mu7UUYE6gnzfTTd2X5EPTidFig4J9azJJUygWLWy2kxzBo5Sn5dJcZvaZwaozKu1",
  "key7": "3TjZdKs3ScqpD6fkns4cxVWm1sBwRcg1NR5EzKq7UAwhA9zgiJkGJ7845n15RXN6tRnNpjp8tiCjrzP3hS8C1NpG",
  "key8": "2ZkdqzVuFUL1EAV3eRYZaMwhxgbJoYVKY2YtTCn9yWbdjnSKayopvjGcx9J963cF9nPpxSvjhLrnuxKGpUgaKWkw",
  "key9": "3uzDT4MXMe7FJn82uybizDMCFJGUqbgbF9w6TAPcfJHd1rDirbEZn8oBWCJy1s3KnoNxKyufzBzfgUgr9CnNo1yd",
  "key10": "229CDAuYo4xtwjPg1CTzqmfmLztyB415WgHe8biSSq5MdDLtn1n9LfHsLEuLV1cwWMiAZnEEyTvhdmzzKMDtSDa8",
  "key11": "RGpCYqo55ZWtf2kqttWfbzxbYsScNSeZhVFgjwdg2yKkLcXxYpNCh4mw4CdFe6x3dkrKbMu29tZVNXAdHpohMMs",
  "key12": "5dqAYibQzggbGvB19yURNnXMf5rrtAwvBPw3f1QbBrfPWusDdpVymKny5jeLuxS7XK1Vv9RhUFG9iJzvngxeaVXy",
  "key13": "464DRQPuJ81G3Lxs4z4uhDGwcwdRUjBY19X6uoRpiW6TQMKkekXVB3W1B8zGghAfjvGLnczP4ZjGf8N8NYnJ3fpc",
  "key14": "33TtJT68p24vietF4UdPvut8qxp9T2wWXibQe6gGsJFRfsbdGtFzgUihp6fXVoUBkeCYvrkoXhzYcNmigJRnV8NT",
  "key15": "5zcfEb4oEbHzRSVM25pMmoAfHUKqcXruXASegGdotZkfDwKqpY3Df3kFipG3roXk1tnqErwon4UEB33cDThU27n",
  "key16": "4LmdY9LpPiQUxHdVxGU95ey86aqRREifucEtWPvmG1X2JdLYniR9qemPF79nuLpM2srr85jfdQ6QH4FBsYog4uJF",
  "key17": "2NiZjV2PAwop75pp1P5iMsdqMNE5oq9ZLDgSz2mavbCYvqcq212L8k76cMpUgyyjE8e9LLLNweM8iiLLoEvmvzuv",
  "key18": "4eYbYQC3BcDecc9LsuyoLqnaDokXAe3Lt5gbzDSgnL2zPptYYo2gSrHsDcYsM1uZBtWvFSwgxjBzZ9zedtSksrhM",
  "key19": "3HQYQZgnwyw4K1RmvstzWMFbH5Cj9UVJPP3W5vZMufifQGb5PVGmXCvhFYGgwmbqNE3ANBNaaY6h8jM9CqB5LsmX",
  "key20": "2oVKRn7RokGJX2Zy2nysJGmTrMQxA3KAjdYDN43qQVQxUXp7ZpedhqrYHB7grKrYoVqXX5ZX3CbwXoipudeQyAqc",
  "key21": "5JumHjyDWbrgiJmNgQmjGGhRwQGpP4NgL5SJ5oNwB6TWm3hB2BgZaWeb82UwQsp1q25tWwkPWD2FvH3ZLn9BdvZR",
  "key22": "4CU4FwZMd6rKbEW7EqNa9R37aNExnX6CpJwMV8iXtQN7FN3EDLQwmtPzSQjtfv2Tpv7XhjoLFBPsDUN3MvNCS12k",
  "key23": "2zJp4JPs1dDPSBj3xqWF5t47p6JVDxQpGARCUKyfLSVaNVsqgi6163Y3o1E1W83oEnHzV9tEJ4fvEjDB6N1vAbu1",
  "key24": "9k6Z8nyaBYYPfASjfqKgr59WWtg1fqCowjvAcs6ReVK2oZiR7nC9KgJdcBBSuWhM445p7WZaWFiRmXEiupQbPf7",
  "key25": "35R9rENBntSdo8poD9Gc7LMyNHUXtRKMWiizvMiVjeuWyYHeMM3ikz2d1wsQQVAQ38LhswUyFPyQTDgX7RtiJ6TX",
  "key26": "pCFsXmJcedBgbjSq46p6zydap4LsMaV2fHNSx9W58FKDRtSL4c524rErJ2tKhmtCwQU3khVz7o6YNQxgkEazxmZ",
  "key27": "4DgZZeSHhYiH3TtL9YZiTJeCRFc7AViANwZUuu1kUFoT85sAJMY8nUczJ1xzV19KzNGF6sWBEoshaJ3h97nowDdV",
  "key28": "SNEFsEu4Hx82KRDkX36oHganFwWmKxEkgMdY1pGsUAjC2kyEuTsHZVxud9FMWE295kojtm1zbe3iKmzS1Krgyqo",
  "key29": "Yai4MCQM9hMXv7CvXBJhpyAeqCbWx538NydDkWhwRiv3CLV49gTsndgXJsczwZdq8vqrFVjLTw6NPMH1qUEiPCE",
  "key30": "5BkbbJafsiej3cZXRibFns83G5ck8nUCFEGVvE6Nfj5vVLFeXBPK12LB8AKWPrgyXCGojhWDKvgf86veiHZ1tsXY",
  "key31": "65CHzeKAxSgzL8jCSqKaBvspqyBSHyDUj2Thm3jn7Ponj5Uo1crQJkaV7UM4XJ1qNkjbJoLxirxiTW9qy5Hd9Q5H",
  "key32": "3aoJbUivamK8dqxwtPrUvA49eaZDEtNFRUDR6SDZk1ocpdhxk1z2iJd7TsfKTBqhoYyU8HnnPrXa4MazzsWNY7mz",
  "key33": "2VKRUWJhQizsUi42WGiMuVRpbk875z2175v9kKUZtRHCKwP24HaugELTCBHtt5EKRuEsc8Xx2LTo8zNoSQtFLCcm",
  "key34": "4XeAURimUqAMZWto6nC6CTXKDHLfuGhSPaRYP6d1YV3uJ6yH4W1JRtPeaqSgRYpPjaB6iEBLEKZn2y5u7fFGtPtn",
  "key35": "5z9sBVLkoM1rb2cuQaYc8Fpw9F8DWnNWehX3CFEpVeFthMKhvBQkMTARnqgigtUaerF3FdcoFfPRXBke2mYfT7G3",
  "key36": "2LYkbfMrdSYKhh7yuW3AP29rC28hsAK3YmRpniZAjz9ZDQKSLPmhSKoR1CseJq2fGGXBDwWzKnqqTmKqtw8LMfd4",
  "key37": "2gw94zC28YZypGAXC5biHSwKEqtNNn5NmAp7CPiPwWJAn2NTXikkj8ZrzRfSWD6peu5VQweXcSrV3VAiNU33vK9R",
  "key38": "4gM5n3xx8XBBapH9wDTmtu2B8UmUzvyc4Q2qyL6fR7rPpuqbUZ3yxGEwA4368G5hscYUSREx2JodRijE7mXJoUhV",
  "key39": "zhdCdR8RBjrR73fWyBSDuXHV3TD4onkxJXhdf9FPByBUHL2aarXJpF6xyDo7GCAYP7MhE3DRZcsyu4Vbkw5qgZ4",
  "key40": "5fnNnqaD72ign32tayknSSQsjhP2y7aR4ev75HKDgVwSKnWXzPjRLSnVi8KDjfBQ8L3sk4QsJxjfMQ45r65j4ZUf",
  "key41": "2pVuHEoJCYaRbERmNvhgHdraLbUSb7GHJGbMs7DuTzwSt5bfLaqqVUo3wWAjmPnZSSBzxGERZ6AfRhHQcr7iGsQZ",
  "key42": "4caWjjCebRXWjU4WSXFQBsfCiK3FWjEznF7n49KGhFrZhrY6SV6XmAaA44K7PQ12AN2hVA5w6eW3EBL3pqnW8VQA",
  "key43": "2AfAXb3YLgcWtVgTHGSpwZtTt8H4Nepyan86XnCFYR5461f2ZKyaxXiLhNV3PfmVkPzhbvGe3cBxdkBeHuhfhfic",
  "key44": "3cDmQMoqiHwa97aHX7268hv3XViskFcW1Gfy5CuPzK7iFN6icUNNJLxAs7A8ZetDPCDkop1o1BWuzfm5DhV543RN",
  "key45": "41c6KUuyycdszv3GxExm54i9czVxLEewDvy4hPFx6cT35EviCwCbp6sgK9SonH5qKikBAw4uy2muRLtHJGdcxAeg",
  "key46": "opJxwoeMuQ4hNVsTXTGHurY8eJYwq1Mr2AvFp43rJPnarZxkTCvu9xE2Wfsg7d7KN8B1NqpiASe8kWcsRozyxmV",
  "key47": "2Ywuc8hsL6mLSu4nvacCwDRWzTGp6qoEtXRdkwpUnkAyBdtXH7JUkeBrfVSYaYE7vz8jEEHp3ZJP9JPU9kZVyD5Q",
  "key48": "HtKWErC3zC8KHv4aocnm1iMHfFnE8yxE7Q7eP8NuvUcRS5VgBhN2TVRJFdwX6n3hwT7mBhzHDCBxBhZ73BZKfcf"
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
