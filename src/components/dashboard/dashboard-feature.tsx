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
    "3kd2pffu1DDiDRTAug5y4JRnpGX67VZLvSYpzC1eaQ3dMjeaf2TAA13c6MxVje6u3AD1B4YZ5YJUgnUB8w7BZdhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BzcLZFJsMnVfwyajxL5nKHJvx6szxCCSrL5XpxDWuz5x47xk1mbDFWFZRhCe4fgXqQwtGqcv3oidak2yMTuZGU",
  "key1": "51PbuYm7N9b6NjeRgoyei5UTASisQyZtRPiAH4oqGtfwYHdDHNzqwKS3P9jofewj3zYE1oY7GGCPckwhYituFYhZ",
  "key2": "2zj4Dj5xa7RwQ2PvdhPd9AmYFX4xPof9WHC4ne9m1aFFg5W8QCefmszmWCFwr9oatagroFkdXbhqcm6K9WGBNL2t",
  "key3": "vnfjbpBAXdWTdEKc7eZTmArEnQwJ8n6dCTuWtddFZB6GxGiJA5pEVC1dM53CRpUDFt3BMEH5ooTafRVH1YcAaT2",
  "key4": "2ZzT5vdxEgakW4AxPSopq42qDqSWpWib3BXutqypYpPXaRT6yVihq1k7h9AvvZi5wtTXmEAPkxHMqEMNfP7255JT",
  "key5": "4Xd69J3mAU7PFJm1R9Wh8Gz7jje6J8FuaLL5eN1S8ae8v1f1fdA41vsjNg2XLJxYAQWcSqMQp9KZm3dqXuTxCXAM",
  "key6": "5tWMVc66JUN6Pe8cuVDcXhfLJ2oBCyRGJun4Fs16G5tZbSbLP2tKXWo1oQhDKC2NMHMre17iAxC5Q5cz1an4ZoAi",
  "key7": "3rvqDkkUeWpYv5Qi3eNtJVqBvUiwZSpmikYQwmxzSeTPvDMkWMuN1vTjwjCs1kEFCPvUm1QyuR8ehXcogMCPtLCg",
  "key8": "4ZyE3qtP697Bq785xNiKMSgARoG8fV4CDgZkzuQLw4rSVUAYPeKRvw2iGwsPPNM2223EJXXZYMsif6jJ7ATN8a8B",
  "key9": "4DKHRkQvHLWj2RHxN3B1yFd577bUMNiqu4fsg9QbcrXrUQLe32dec32F8SeteNjvkRf28n5KrLSeJBGv5YebMNBJ",
  "key10": "3vkKuBVAXh26xhzHfjxtszfFetqRAZa6Df5cH58Po9cyfzYSrXiqiBtf3JPNs16oiHcdCJkVDJLXjHdo9G9saoGV",
  "key11": "5KQqkGpVS81bFiCM1CqVoCVPZuJiKmuDdpkGWBNnkup2uxS2BsQyX7wEzAWoqeRB5HQUA63XXz1mL5pv5Ucac8Nr",
  "key12": "3xYpmZu9QcxEdpyap3JGB5iTm7ZnWe7DpLpnfLqAaWiDBBNegjvt58xzKUXMFbMQSpGq5wz17VagHNFZ7uhGW1Jr",
  "key13": "7udi8gwHrr1xRv1xLBe8Aa7zapNBY72wvSC4Sfp4nZ7GdMv19YqFt86Pxt6dQ9m4uJAkFMVBsrk28PSUZ8xsrg1",
  "key14": "47LWzrLnDnMfS3kEdnYxQJiXedZeb2Zdi8v7JakasdfR5UM9PXyuZ4GYpoKWwskPr6A8JTtMVj3ZxfA6wz7hb55f",
  "key15": "XhKPJJ2Dohrxvy7rWZQiPi41SeUx1MTwP2p6MhoJzBDDTEKHxyLdsMCuhhiBiae1oEsjt4Z9uXsJjpxY3Lxk37J",
  "key16": "4if5UuynkhdMqATdmiyiRVsg2STa5zMazhAxBA5CwciTU4BHRMBbGeH4VJyCR7gm1MBdPvhjaPLWgbGxHYVLamFv",
  "key17": "wyTpo7ZvcUiYbZL8JugL7jbJHKMCqWjDQYKdvx4wDc9pJy4rpFRwXa6K6to3UVaGSkUZJ2688AgWzRKDat69xRM",
  "key18": "5z1trAzfCQN67QCNhLjzJ4yQVSawzGYRZgzzrFGwN54mf5sHY3npToj9vjZScm5uqUBYkG36nBrZtYCVYiRRTNcg",
  "key19": "5dBucNJVtRzi2jNwgjn5uGYecYfKHtAZB13EMoQkjCGzUZpzXTMps92ZvjXohGdDxW21u2sciexzsn3c3F1jQA4e",
  "key20": "4pPkdaXE8doXpmN3fEF7j78dXN2GsYMyfZ7qY59escRQGivNJfuTqzTeSrbXYpJnb13rtzA3JFpQG8kbDEgRCp5R",
  "key21": "3gsC8CcyRYU92LNnCRuGiqYsDkkMtMDsu3C9pZPWg8oLZ7bqK2CzKNDAAiYFRg5TPbpGaqm9dDQJ6KUyRgvUfZ4v",
  "key22": "3tGkwquymR2tqUw5up4DyDeStW8VN1vyNH8GTxx4ECyKMuFtczVVsmWBiNFbZVq69Lc1ARMDVeMZqkj7S2q5Sfp3",
  "key23": "VvZJK7NiimxBKUCH2cXsgpuFszABdeBFuDDNnB7KgQpRZ56fqj5yMRxyPyZveDJKUHgdKXSrjhuWUWjCCVZVrNY",
  "key24": "3qiGzpUNZdjiNBsGPB2y6oW7fcUP2AXFVhWULVsXq9bvoVfVXWS6MZNRSw9E3wRt66SQFAHwmn4t4NtRP2WHzgDf",
  "key25": "4guowDiKFNc7Uqy9ytpj3qYPcU8qc8xq9j4fH36V27Aca69kZpoy4Uk96LgTY3PUXQSEMMgaEhBVmyecYHJhhExi",
  "key26": "AnVijaWBFnvC6BFftG4iUyVTHsn1nPPsb9Nd1rEjBeyb74ESLWg3pzCGJPtJFJvfEaJfCimcKcYoCp6fs4uZSh2",
  "key27": "CTjwSZCL3U3CZZ6zrJFywAqcTfJuTcBhNj4YDWYNYjm3p3XwKd5uQUYAcyynCdrk4UJANFFE8VQ6XhnyvH21Rhq",
  "key28": "4vDiki3yPjzx89e7U6KHP2WAdEmbVfw83TYqCR9pFB9u51fK4NfBh9XhJpurZ2YMoBV4AA2GaCG9j7cMxTbVkcGc",
  "key29": "3cYR5fg1NBawks8G7P3YWBTATU5J8NFfeLZ9v3uWcoBQQJgvr2ZGqhTXycWUKWg3ShHcF7v45kn1UtSsJdahExq4",
  "key30": "2vXv6AaS4mbA5T7cqDH98jztWD5GnX2mLMEpHdQffgPBAUShzEQzjDUfRvKkCUcgzpCzpL8Bwg8ncFzTXY1ztVMm",
  "key31": "GqjYmjQfsbVudNp7De1wq1Bs6hC4oHUKWji8c9wxRUcJDHwema5bkcTPCTYfTUHZLeL2xWWiCZ9A92dMGzYA5nb",
  "key32": "2VnwXijxtCeJ91kxnrbzrB9HFAgEUhf8PhqsxDqhWYHXwERYQ6JsSgsV64nvbcs2UrRQ7jwDsvpFEYsmCoA8R17F",
  "key33": "PLZVWvbBfAKpTWVT8uSej9jfcy7shjPqGuyBiDpGcvJL2QigSBZbkA5peTrXDzmU65g7bu7CtmMiKqBPyDzTLde",
  "key34": "5xWu3svRc6KqEX7RCK8JTWd1qyHkRsqd7qvJ2aZoCKzPhyWPXYWCk1ZmUWc15Rjs1VJBSo3APci6G1AAnsKyWcpg",
  "key35": "4LisXomXMrWBMH8eePgGXvihjtCQxidenYbQPDVchpz1PdVhar88W4uoXifKZgyPD6hmBjLgHFfcXeXtbB6Q4HHC",
  "key36": "5Mo2SMPsyrjiGqE8vDb37xeVUUGtmXg2qFDdoEiwAQskkYNjz3wQS4hYLVtUybHrWq7bNTyA5CYNtsjbtUkC7Su5",
  "key37": "5wh8GEqyWSZAQ4jb5p1YtPvubSneVtpy34eNspsyK7e2Mk9DAvY9UuMWCeJ9Ff5A3uXE5uS15MoTpJsjdwTofmRP",
  "key38": "Ch8ab82W12y9gTYM6UdBqSVWNjCPKARjw4e7yfvoVSj3h4dXyCMMeTa6gYHy45Yfy7NZjRUdDN2Vqp6eJjfcwja",
  "key39": "5FoKY7wM4A9Po7RYJZjnQMaz3VYbUFVPcokav6b7UJ6EX7NEw23P5bCrmRqunfYBspBysBEj3tYzRKVvAzxdHquG",
  "key40": "3Cyxb1gPeW9RTwoBkKcFvJVuPoUwpZgjrpo4JA6NrhXRofVmbuFUZTwBNzvq8eFb4z3r3jmCKmiMZtWeunkPDvYg",
  "key41": "5dbZiFjhKZMNRrgyyGFptTiMgdj583oGCy2GHDzRMLSTv2i5tU8vZTh5Gj8mkm8BboKeiGzM6BAoBSHxJa5uEsk9",
  "key42": "dgC3QsKqTcpit7x9ZLfj7uB3Ty8DgLzcHgokRtu4btci2h7bGxuEuVNSk64NgddduPFkXeh1WkzbTQC1Gu8DA5T"
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
