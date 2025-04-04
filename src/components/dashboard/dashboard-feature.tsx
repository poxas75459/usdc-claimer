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
    "65B8yN4ahgXn9XuSumqeGFGP8BGpd5souaGCNbmof2npiVXZGCk1MBMd7yvFTbPkkQXTB3rvAZ1wqD8dQbnBfvq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VrtMasPqALEhdVzeHL7TpLA9un1tEV3EER1ySmmMCFtSuixqg7B2cuHgJsR4dwj4Wxpw34v1sREDrFSxP51Vecp",
  "key1": "4xdZ8cPQvCFinby9ZTHAWepUi9VP2bWRhnyXzfgWDq3Zdm6cbSFPnXeZiczXC6nw2NJY253Ak9oihvaYKENqBqxG",
  "key2": "57RCMLJQ4XWGb2teBYtjZScaVb68FKunu1ZNC2qdRv45XubQQXnayQbKis7KwAgFt6k2qzNKGbNjuBfhTCBySEHD",
  "key3": "2c1cybtXthrkWfNqadqmT1iu8b2KdHBvJ2PS4YG8MysgCrg9wQz1LUxLaDUdQQc9HLHBdNh15q3RVbrpiHYriXiF",
  "key4": "2E59GPjvxdJJY6PTzgddJBDHJX1NoUCUcGh5nqgVdtTypuqtPSNYehWxK1eW6z2U5xTCjntoiUY48mG2wa7ciNr6",
  "key5": "R1FTu2TontgxrjDrrV63ZhgzRjb6UsLB11dMAYU9GEEpgWYgm7iWDZQ1j3uEf1jcuAh8XhHPDswb2vqwTjfxset",
  "key6": "5KQ2NGKDrpRTJfECoDqaCPnFqWJStKsE5KfeC6Zx1KJLfxJvz1k8UpVw3X6oTnBSjNj6YZeRDRwXiU2tXpwERA2V",
  "key7": "4bSM2XQeCrdxKkMZcSeZer4TYBndzk36E3RwJw2tZNW483356wiPx4NhB7Pmh8nXhZ9yAWpQ2Xph8WAugkow1je",
  "key8": "3BbVG2EFeaXKvKSkH6N9DXeKxR1GQmYXJwMFkvf7XpYfjhVZHWdPhrYnmFNTfFwmGFDG9joBhAdSBWg13WmBivYp",
  "key9": "4m9Fhbg8PkbjoguZsFhExc2eD1aino82VNHMtveGBnazTfeJwLyHLHKAt5sM4vPEK7xayVfUeTQcPwVUdq7guJo5",
  "key10": "4SYraDsPsRtt7k9kNzUt4X8cjHakJZYhoqcqybnDJjzJLfyQWb1NKYSGqJMPFgCC32WT7w3zsuGiHMETaNrwVKEN",
  "key11": "5QLCnzBimgoZvSoDq4KbLZ5Ak8pMhfdfxvSR14GYy98xurXZvWnUB2AW6BLz18mCmBSS7KhrDgp7YqfH7KtV6eSK",
  "key12": "kWcYAZjidD38HKydcGwdXaEwSYTztzzNSStJN5JEKH3Leed78JTqQZ9ucx9rzkBmxSL2J3oktY9vqud41MrUqYS",
  "key13": "HDBHrAdESbUFEp7EsXLvBNtiadjSEurh149ZmnygfTC8SdbWXLQZLGSn9d7kvMbBzrFkE2QsTnqMLKJxaPbZowY",
  "key14": "2jBM4YoQB84bPGxqf7a7KvHuEqYRYAUiz4sRwJbBBp8STigqpWHAeDiXVoTezJRkcLVyyQ1vk1TtSEtxJaA1dZLg",
  "key15": "4bxQpJhzRbN5gBicLVZt8VvzuPGZ1a5vCfLmhZC7MWzErZZQkyFe2MtYtN9XHEmA1ASCG4xWeqQKqSdb1tyodvR2",
  "key16": "mNT1udHaSji76p21YJv8FCchsJtPJL13b6b17iqTwCtA7Vcpuez4VHXckJ9mACkX33VGhixvSAjASUrtYZrtTA6",
  "key17": "6HXfdnKWSJkoaa7QWFde5CRFpivvgym2KpAmeNsvWBnCJtH5mHY1xUcTF3B33LrCx3Ny8fXM6ZeGQu3h24B5JnP",
  "key18": "3bNbLKWQykwFP6CDBu9y29GZNiXws3ZhfoAw12Vo8RSGcdsXpmZKcdgG6oZ7qQVgzrLh1tsvBkGd8vR6eCnB8tGM",
  "key19": "4EnpnEWjP38mjYata5dW3xALRJdvay2JN1B83GxXx1Xvy8uor9j43i3EgyF8hScZdodgdqM19qQTQz82U5cPC12v",
  "key20": "mUC1fM8MJfUc5mXkZ6vbGVjHcQ9NzStpFYoaZBBVLtmCx9SS61eQrNjP9DSzgYoUMWeg5kkS7P2fNk75JR2dGYB",
  "key21": "2rfZbLyugV6mtDe4gFWVroZF1MJcfbyDNCWc6Y1dHYdpYoM5cqNFU4MZ31CsjT3ZD3zSmWxfqiuhzCyVB6JeBax7",
  "key22": "5jamEStK1CZBf5Zuv3U5HBesLGQSqfNjpHkgt5wWyYLdq3fLyR1HZVq2RcVU9ebbBLiUp2KbkiwwoLrM4kdPhNAa",
  "key23": "5pXQvN7zKdzUHzaQkD5TKCJpxZzrkxxM72yXWcNCB4Yk9Wrshvq4X4kSPko7q53CX6xsncvddoJ4p6WARr6v6FFQ",
  "key24": "2SwYAbNwUjWRGVsGzfroPHRBpunmQ2G7jXAWfVbxQ2QkgF6DR58c2KW5DFMMmam1M7iWsnSD4yaSxWyKVEEC9pY1",
  "key25": "2QgjRSQ5tRs4VhFoXbe3niRVu6D9W5XpZn3F3r2ZAoyJteLrYLzXrwjUQj1qodJZ5nMPHRSjskSitG1iumcQp7pv",
  "key26": "35VQ9gYp4MP7qidx4XCKkA8vQvYWFCWc458CMoPRE9mkRmZqsmVo7H8TeRxPskvzosTErj6r7T6cMbo72h6iVHQA",
  "key27": "4FHxxwagRa96nSNiuuEYhkeT65uMjPonTRUWGN9ZePxvuHdAUyZJbVqSN5YS3Nz3H3YHCVxXC4YHSv6ivofvVrxZ",
  "key28": "3ZqRWFZE4ADUmhc94ve157v9ixZc83i3ECRGHmwFozD3tiqmn9DdiWzcBEJRreXbBGNJmdpT8gj2umeFEw3RtXGq",
  "key29": "4MC6CqzJJEaDQa4ghZPRMSULeukXvVx8XDznMgp2RR2ydsVXBBjaQWxhUKRwSSmHetnGMuQFSZbxWXYRHE4N5cTe",
  "key30": "26k9FD8JASd5GPyn8CtZdEvnrSNYcJSWHhuBX8b78Cxxj4tMZgjsNGnoW2eN4L7PA7p8i5MbJtqa9qKEcz9o2Wwj",
  "key31": "42SRsco5d5gLTnVDtZwMhqFKrDysZ5Z9KepzT9T6nDN1CHtQQcbWJhMUasJfrrupyPrUX9R4i3YwnMTXGwcEJyj1",
  "key32": "2KCzsVD6Wc2Rxt187eics8fuM62xWoyNG9HxozDqjadyarjdRhimMMhYLAnXRhDKpzDMsATVLATc5pzLbWn6L7at",
  "key33": "VJjvrZKFTminxEj6Rb4DLXFXJi5BYK7neykWJ3DQBJJZ8L4B5Un4Uk7XJ3FCrrB7kBTR6J2sJN5WvAXmnEwmAXq",
  "key34": "3Vau8RDVrJ4uFN8NZ7o9hqaDdArBbCGY69MCtfGefvCCHKtLJrVBTF9M5vdPnJstdwvSRba3tS3FfFuVLgPBenEc",
  "key35": "CV4oZ7BfJkrr4pZN4rzUWTLXDveniKEtSXyhfziUtwvs97nju1cy2qRMV7E5vLZeo3197SYQzLDgCSRzHRdJ4m2",
  "key36": "ztLezsRHvExFZ7CY24s6TdUH1BweZYbzykJAXmd4asH52bkdjz5BBgdWR3uaL327DoLmdYx7kEe8omSW3qAMQae",
  "key37": "2fyrSJR2DeXv5eZQAPM4yrpubZ1RsQsjjfUpCpc11dx6zTjzoFZR4CaRGfLkqMpS8Vx3wybh23wy7wWeMZbU4DY8",
  "key38": "2AgwMnx9yCjHiagGHuYAWmdzcwb4JU5ZQ4ApYMUHA5kxQcy8fjd5DckuKbofNuJr8vuzbWwyXBCemT7Y46icjx1y",
  "key39": "3c9nE2iYrVk1TCrDqpLjiQKXj4dSyAT8FLx4ZQ8piKBNtKjc6StGfEaHovLK7dS74Zm3EhgzG35wjw1NNmTUsK3u",
  "key40": "RXNkg7u11rciLqJ7JyfsvjbiB8W9n68wasjTXwT9cQj3UAwV5rFNTFNPgfXyvaoptQrCxMjMrN6ZmJUNQaoEaFu",
  "key41": "5i2StgFHgCUBa25rm1jDtXU9LF5eHBtQ94SCZGLKRjEMqdUArYZhvfbjZffiXNn6qPquj5ZZEs7oRxwqecJNnq5f",
  "key42": "3viJb5X5oREJhvPMrAejJaRSHNqBLwJsLa3sqmSt1Vq8gzhYtWTgkgqCU7dSWSYK6Yhsy12zKWCmjWTBfmdxVhZL",
  "key43": "2xzU6ywZXk6K3E6L4fqnjjcwpzrjH17idAdEBLPXqxTWayJbVrHiCzP1PiLEBLBPu2EWWG79R4JAW5Sp2y8qCJxh",
  "key44": "5DyYc2wuaCDykyMCQA4T8jNS1LVDF7VrL211WrHu1JuYwPVJHuiS2xDfVCxZRWRGGSv8V8gGebndMoMV8BqEQ6Fz",
  "key45": "4zk6cgsDm6HDrRzDZuD24bQncz64zXHuB4PzXTLJiEMHyoidETaBsPBhmsniw2KPxUerUiHNqQUH8DxWHfgMMu5G",
  "key46": "59KdFHjqTbLSWbBtLSoYtzCX19wEJRqxGDzHArznwCzAbN2bU9WAP2MwxkRsgAmzW4uAeFm3c9uJcQV5KW4sBisi",
  "key47": "2F1CauNbxkAUH1H9MzknVWv1DRX5mX8XDWRrg9kY67uhxqSNPJwNHbJRE29FsmB5LreNaXMxAppMuVTGPS1SYgMS",
  "key48": "JGd6a5JGG9HWXRiM87ASVipjTsW8mihtKEtMBv2biPGn4Snc8yKNArMSUxpbmhLQa9viWG1JDXc3qm7iCtFyHZa"
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
