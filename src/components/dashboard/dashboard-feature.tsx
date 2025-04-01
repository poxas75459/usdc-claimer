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
    "5EfwU2TJ4r9vAzRrJiULJBi9r9iuE5e1ZCajJYPpxJEPTpR6i7un4ANNdrKGRzjmTXCavUvuVkWuKcSw7unCL9oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64VkPUTYj8wmDT1fLbZzSwqFPpDkVAogomJYaSJsZrbKVgBG3mz7WVbrZJj17TdeYqqNiigexf6ezG936DS52YJ5",
  "key1": "uZ3T6judQifmiZM6uK69pRKExZz6kayZuZiizRgBqhHpkT3pmfAo2Ub3QJcWdmFDY3vvUkd6Q22TTPHN5qHPC8J",
  "key2": "45DMNTNDNKipHGtX5znwweT6YoXqgKcG495S7MvZ44HjsmhXtWFys3rGoFgtuTnUMaJXkt7UNVLPyMbhvC8M51T4",
  "key3": "2ZTV6Rx1hjK63S7awGZTU172A3pRbQQjjRNtvssrRvfJ61Swf1Y8FGQbwMvRWKKZgqUdzysFigzX5uFQgRkBwGXP",
  "key4": "3BpmAsEV4VHhhjq5CMugJEaLQKJMhH66ZpVnj2xqWoXneKj1TqGxj5NBQyFojWNuiLayJTXbPm615qoDfKvqfVS2",
  "key5": "62KENpyBTWABUeehXsVb8GeFAHtyR2gXA1jkAFkQZD7dyQVAAxSaHbx3HuMa9SRa2CMYTtDfWW7tZoVjtqPs7gx3",
  "key6": "eekSVDkdrR4tFwGP7fUzQGWZihaepEKdNN4veAK7ma3wQ8CV6t3W8QPP3YscD4apFZmykJ1VXKtnAsWsUHrueaG",
  "key7": "3rdCbuG4vQWkq35aWbn7a2AWwfJbq16AK8fZPUv8BKnCs9X9zucRJWtJS11vv6zXJ33Atw2bJpik7JDGdFAPkV9u",
  "key8": "vsqcZYhMmrVyFUDfecHGCmwb9zBMNqxZNFrZJNgM7XUyXMgXxpaBcHvYMSUgeZsUCroLmKqXW3uoWt8KVEoTHJK",
  "key9": "8Z1s1cR23LA1QoHvCmdSHXv3j2irkf7ZZvTN4V1g14jX6pLdtSeSrQwzm8xTdHRC8AEbdBmMJgBxnHuPLxxZjwP",
  "key10": "3eY4G9hLHNWDCPFSgeY9gt9pJKUGq2oUAZe7n1do6R155Wh5zyUx9wGZFVVksZvrNxU2oELtMqDZmVrmQffwm6hR",
  "key11": "VCbc7MoarRrNfTaV49YExkEQrFE8fcdk9dbpya2K2FWo8qBKWS5SbJCRShkJRc7Wq3XkweDwBEoccL7sfA1cC6T",
  "key12": "7bAuebn6DDASZ6NrHhinavEPJc9YPdzqVSDzDYTbvSwEBYMMZJonKQUUomiQRVrEibw4C4M994EpGfXDaJUPppe",
  "key13": "49omtyjwyBmqfKsAhDH7wr6FBTAt9FMcGZCT62UuaA9HZ4i2U5128THuPhkDyUVMsVJh5iQGZwRMWtwASRHLNYH6",
  "key14": "8kdvGN1ELmT19wyL1JVHqWpBWB4nnahJjAPa2GWuiGX6BX6DT2zx4Xu9MDQ3JxKq6mB3wYopsmsEFXbc4zEdMCm",
  "key15": "3wSq8fKBqE8KfFMfGMWcGzojq4YFC4wXSaesTMcfacnLK7RMTeFpKvUwkLX9JbnWpwAycaq2mZToxpDhREL22p6W",
  "key16": "i7sXaup1Gs3PjkcCp6WZTszfwRwmnWW2vgK8yHZ9vUKZddUGbctHL7xiWRr9YNXiDbnyMzRSzKWgAZ36wkTTZEG",
  "key17": "4hWcCoMjzkCgweDBXBNLMg1DvaTQfeniNyQTHFyFjPiczB21KhWUk4D2KVZMFwKndfoBk8kRMD8p5WT4gbV6c5Di",
  "key18": "4Ua7nmorMdYNFYEf6UixGwdnDRRSFjhCAtLxKXE2D5C9T57XxnpX346mxcfNSfBxwZeeAKs6158bEJva5MJwmDYW",
  "key19": "4Ln9Bru1ugZuW5tWPfeYFVJTWQjeAEZQY6Q329fx4585sUz7dG8o3SfwKMUFvesfJVNc5mR6Hi8TYcksVHkd6DBK",
  "key20": "3ggmc8hR64preoUM137d1mgLWiRK4HEpQp6ZH9GirgAzyFS8BQNmPXVS5p46ZmAUfxFNFeKoE1dxjYZij3JTiLQu",
  "key21": "vvwWASxiog4WkdfTpEDmpYGGsD9PLarS6oYaPaQgNFtRfSqeLNxdmGo7AN85QC2aAcsA6jeyBknRi5jakuJ8FQh",
  "key22": "5De7WK2GBbr6Y44v5BrtYb4LT7gyBoy6BERsK83igeLCzNPUzsQrNuXzi4QBZ7WJPPmz145s9SaVSv944EQzbwQB",
  "key23": "4qrHJBTw6a2h7gmKNFznGVyzoByXctTJXFqmDKVhXbjv7NisMCpjtoPJ46yStMgL98M31CDzW2UJ8QfKsoYwRWmW",
  "key24": "4Uc2UtbCuUsLS6wHD8TG1LXZvrot1FVZ7HDwk9vRz9JKW2XZa6nDsvRwXt3yBxgH8xPFs7itPoBZLVE387eWqiU7",
  "key25": "7cKLL5HVzknzza7EDn1qranvBkZkP42EnoDm9ryqYcoUVzPoXmF8UpzcJ3nVogdi2e1rG8XwBJAnaNqecniXcCi",
  "key26": "YASJLbW5cjPvAPxnuwARRuZopLK3tqKyWquAMCcaDqYsS6PB3MM7Ljq2ZSTPZrUjytFasAqEjYEfCY7YCtW2HE6",
  "key27": "4eC2Zi5nd3aN6dRF7bQnkKC5h9zW6Yc4EYm3oAxKaKrHmcYixLhpe1qh7ofDBVRn26wmuXqcQKcXKfnbrvrVPA1q",
  "key28": "e7rEVoRr7h5AjBa6hQM6jJodVbmU4w1QpX53LRqHeVkmbR1MkTTGJJARBbB3EmEbXp2YybDJ27A8KeST8auY9zR",
  "key29": "5ucSNNYQayyiVaNRnVzQM8ywt3o4vJqxjJcDHtrKb3ApMEcxxqyvG12J5spjwcTwYxyvxadvjRyquvVPU9W84en3",
  "key30": "PoeyoUqiKPPQEnH2iMMpCnqr6NBftkjyFDafETwfafMYM9wCCvBqL1cAqu1ykjpBKiZkxjcjKZijTDG2mmrKar9",
  "key31": "HgVvtKz6RD68VtHQstAcMGVhqexoTp1PvdKyRvcF8qPHxjzJf4NMvxXnX5UStKxZYBzQWyY3NgoPLmPUMRuwYSr",
  "key32": "5LJo87kNyP2cS2X4zL2v11YUpkRXnTnxzpzc6hZDrXv2jDYLgA8n7om8g9kbRyzvoRuZKnwCcWDy8qFNHe24JkWs",
  "key33": "5gjD7nHgvvm7P9rcmnXxj8amFxt2xZvqHK7aCsLy7GB7rgt2g1cThQzRrtfmMfVMrb7KMzqMnnVWvEv3tfXHYNbZ",
  "key34": "3qDosdVE2vHMzDQXsG99QT63NUt6HFg7e9KKPtWA8j1nTistPVQ7Rr1yXvzQsuqZHfNPo98hxx8sbCqGAK7N9e2e",
  "key35": "CxaVqxvyfuW4beu8hjfXbecfiirhpS81JV89xU1zdptvNJDfN8WfJwgMtQMTmwu4BrP531jVXyxz2UBsZkU7g4b",
  "key36": "5dbopMKXv7KcgdiGjZt21Tjj6kyBSTBKbgFMmaCAkmKutgKaUfAksVQjed9WrZD5QHCLNVv4nTHTQfHn31w23qsY",
  "key37": "34P1FQuKRnUGenur7xLWHeZeMKJuGWumSdyD5MsRpwn2qtqXjoJgSi7gVJJSLWQZHtSYuiuF6uDssXnRZm1LTHEG",
  "key38": "2KaiqU4D7LsgpisUVdQGFYp23JjRNTyym3d45UFTaoNQEkYUyDiWaVhtNaaWmTj21MJnKf63ZLe9rXVK5VSK5VLK",
  "key39": "4jBzm6jzZeCUZSxDYV7yBzyx1YzUCEFejpKeHNCE3eeo1nzEKKjJvAKmKaLejgWd53nLCWNZkWLesHxJ19YaLonb",
  "key40": "5KR44crg39CDiw5PrDhFpN2Ush5nXpf1DiMu8X7gN3K2uYxphwZ1L2JJ6bPAif7V4UGKYb632k8HraChmWj35DyN",
  "key41": "4nmgNbp65giHhtRvnbCzVQEDPq2PkofwtofpeSUjvRzbUEPrCrAaBpAeWrkXqVW9yWzJK6QExMKkrj5y49nRuK55",
  "key42": "4ocQybizzCjQchP3DzaHUMwurFDPbeXqgCooBcZW4HjUo3cjounPsgQeUsqJKg2b4fAJgNWRtgbAPfjQhrsJ6wcS",
  "key43": "5826KtHnH6FVajrZuGGsMPYbEsTtzQzotSjZ4cxGqYrGdEPZuMwgAw6ye9ZASKnmX8KGaLdkz9BjQ4y8tqepGLng",
  "key44": "4uqLRLTfugoh9eJF2D4CngaPZchjttD9YMCrwkC9fJdqG9ACthutvKLJjhn2XmzguBa7kVhDCa4mPAMANTxzNQw3",
  "key45": "71Yqfxu8vTgbPGEX4jfZnFhFm23B3SauQSgw5Q5wZGZ5bXwKZuPffjgKTPpQ81gsCVD2as8uC4b5S57vQ3EzqVn",
  "key46": "3o55msQVgwc17NvjxKo9HqNATPGufJ454i8SDFfXWmpwrXFUPavChyVyDk2MEszSkvXvzNekKihyiLZWfUHNuDdA",
  "key47": "59cWuRHRCDMDaHXfGt1qM2TsNWUkYjAxcx6q9yTcdmy2rsJrqbAxupr2QVvneYixFqcJ3e3eZc2daZAH8x9HEEHh",
  "key48": "64RE61Yzthk7iv5SAbVDDJZ9FDoaBtNiA2sxcsju9xJ7e6pZgYPhK6rbW9dg1Lh24cnXzdiS7fpsYGiFTCDNWhUo",
  "key49": "3U8bSrA4G9EHpm7EsPqUfABsuz4GeYoFp9SrENThqdssQqUuyLtDL2NMV42jxGLx35HdqsQtW77PQ7LDpPFT6qW8"
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
