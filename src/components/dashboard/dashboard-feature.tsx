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
    "5kMM1izA8vWeanj95eypVD6LyYg8PdX9Us4CMpuUgavMGrEFWphRAAgBg9LfNmTKAXc9kphpaT7tpvi7ypSWFeWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ootgAssr7UfB2moGTDqysKxMFWH1UdkRmq9KdMmZXbVubFHiF6ntpuEdsFzYBJyffwy4N64gHUWn33XYEzsV7J",
  "key1": "2inNh5CHtvobDZAd8XgkRTfhKarHgJn7TawNatvuhkSP97UitsdUm4NmNPKrJpq65CKbntWkch7rLr4Mx4Ge8oMc",
  "key2": "62KxWQwC9oC7g94kZMHppg7aUN9dMWuBqPz9mPBYhZ58YnGkTNRMhUPiBzSRuTVfjhbeeXNRLHwf5M6xDvvUsdZ5",
  "key3": "4vtsakugWDgEc7nJzbFP32gaYJFYrxToRbWs9FiFyFDKmvycgZeXbc5vx3bwmaspk1acqKq9ZWqMLYakUJEzrHSN",
  "key4": "3dFAPymjG5uv9RWW4mYHghnyMooBeA6Mfw8sVdHp2TEyLXtVRZ6jXPvSQWmUAXEYdwiuesXFewoPf7X2r4oLctWq",
  "key5": "oW8uqCs8KdkFTcqANFzha8PeJyJaxLdQ1L7j2iLA7wNFQ7L8gKaENrUKkAZA8aAqcWYzYFafM4dpebg9drkoxwC",
  "key6": "2F47cTAmWYA8APCSkuxkjJuoyNNQZmcuyRASZfKEF2ZD5ATNx8DNCWATGyW16eTrdm1VEWNLKWf9eq58Dnu4X8Md",
  "key7": "4M36gcHWFJg4GFqbjN5xUfzCY9hWQfrnW6rTD1jNttUCTtmdM1y4Xe4T9xbPgiifL7xamhysSR2u1tyCn5BjYKy1",
  "key8": "65N8MVHPCmhMKy9oFK5oP4exk4H8AMNTXkXYYrQmL5ZELi5Jo5hmnpaob5KZtzTntVz8JLtEpX9F1bSSLLnJbAJ4",
  "key9": "sn16wVH9mUwsgJDiRZ43fF2TR7XsdTLxzkLzm2END7Twv1xZupYccaEdHZTdfRTv83rYqEQ5uqnjsb7uog38mCg",
  "key10": "5bVXrpRLPcrpWJSV5j5G7wHp2WYtBYxoVZa6wGcfpjAdG8wF33pRkSriE7MiVgCe4xaTjmvH1T2VQc4GFaeZw2Dx",
  "key11": "Q5FV2Pt6KxBV5tHuiWfrsnZH8aENpnpSHdnkMu1cW54G3xHakYNFRVFUbJYSZsrdkSQR4bVBVuJ8sSmFiW3sZtT",
  "key12": "34uRBiKmJPpwewYQousoxppeQaT7fT1wak8vNca8tHJL3mYMEZXntRGM7ExDHnUJZsVN8UBz6z7b6q6Gkrfc4659",
  "key13": "3Xi2oPse5fDpaeCGsvN7YH72PccbyykDrtWUrfL3tLRGEYaWbKwA496SiF5AWToxWUZwz7ZDsfewDdTKkfwobsVg",
  "key14": "PBYykG8aMvuxCpmnNWCmCxXWvqvic3bCjQu4xaKV9UtGhBaqe7MPEq1nrFnNT3PXKe9ahbuqFQwCa6d3Jgh3k5r",
  "key15": "Kcte18TQgD7EUxqvwh2QWRGKj2q3CWX5sHpQeqTjus4AfCgSSNHPvzU1JPpT4MeYYdGgGzDnvtvtqgxDpvFuQS3",
  "key16": "Es4H3L8mreaicjGWT1CB5cAPvWAcnZHPjAmRimDfMLeM8KgDp4TXjX6tRtm2RWYidgKE5HmjeQgaE4FvUycwozJ",
  "key17": "5ScKdBikGJtnysFoS6nHPuQ4msNcKTXNgnv54UmHNmUVtEmgoX2VTpK514eKRofkTDPC9W5JArFGEsxjGZBEiENp",
  "key18": "2BeLV7CEu1yyixEaCcESj8V5K5bsSN6WTWYZVF11eZ53pg39dkMVJpmaTAzaDMQMNiRwXQpyYLSDmBxyeEhN4cek",
  "key19": "43P1NjzQEtRJvkeLgbLEZM1DqXTsyxPcyGFLyzJ1NuxFJJB6kdEjfGmCVFG3Gwzt8kV4XCvYamggPNe4y6kcaygv",
  "key20": "4LQgCPnv6iJ5WMjymJmTi9KYRzpDNSK86TsQYavSBWHGQp69En4z7wrE1YQ1kmmcUz6Cm9Rfp6a8PNFNomvQE7Ae",
  "key21": "5mqGktcLnxoqyLbzKy61cf1uRcMcN3t95nKLazwuUSJmhD1XWy2H547Nva9LtCU9XxTQCMX3VBrN9HtF8FPzN7H",
  "key22": "5Hxova8UCbCdAQw5Z5ZhtUavzWbTqynpxTxnvRGuFwhn1AM7JuMQNYuuth4yBZid7pPdWnfCyMUzy8zDyvEG1KkG",
  "key23": "4e8vUZBYCigR6AiEgZbrXXpvv916bEKQLbfM3N2VbpaSmRvW8sodJurd4A7Q6heYGWUA2HBfPWMw6f37yaHRj43",
  "key24": "2Sa3nu2B1AsdAsE2V7skkpVEcoxajMKyPhCTMakF2PNKoVKKpW9UR2zhjTtnaDTUx8HZWD2TmuwdA7uox4KSqgqo",
  "key25": "2Ht9WdEjUxpwKDUgYtXFZ52KHTr9b7Ub6vdeRaiV7QYZaNnbesXs4qNfkQ9jWVU9zfaBNkSX599gfiBisJeoG7gY",
  "key26": "5dAEuWAkEEbxfRGoG9CjWgSNL4V51Nh3dkKtRhMSAaHfQ8tr6yZ1bUmUBuR9oj1V5uZEWwfvveqWf6nhDNn6SwFs",
  "key27": "5xHJ963Vq4u6buGqh2LyCzxhqegWT3YpgN8eEK89FvgJcx98ktwzM9xnWYe5rJc6nLnmWC2w8iKorJRtxJDVy5Fq",
  "key28": "4BkQqSETmEFL9sTK4i4XWNqx4g16GStUgabNb4EYq2soMvgMcRzByAX8HxUBsWCY1VJScDmyd9SSprwaZtvZ3Af8",
  "key29": "5Wqa8nW1CxoJi8Q3MAxAHspxXvUH16ihYcn8mWa13gsfszWaCRQNPqv1aLcDfyeUumRma3k9rdaFDffdbgEvbNad",
  "key30": "ocRNiQoGGkPQH152vkjNaXXVARx8GqHNmnssmoM25T6d2aD4Un1epmkYN5i8YUsfFinV4gNXowXGkyrWRm9iGgY",
  "key31": "5XSxhH4XnQabzgPTvYGoH4k61rJAsvLjHJ82E3YJfEwgbvH863eBvTaqMaasBh4ufqQBVUeptA5c7sXFnidedsgN",
  "key32": "2bje1g1roxhozoYD9yXz6PG6Rn5Q67SKE7G1qoEm9chucRRrMuxHRQSJUdedgKVw7Ry2uV8WK62oSYeUFzGgQChD",
  "key33": "3KTomsejcpr7k1evt2X1jmGRnagBc7hMJtbcQcnjSZt98jhak7bPV3vXtvXXvTHr4oU4jPk8EZ7yVH4EmHfjwqWz",
  "key34": "2StLEB4b2L82SwYrjecmVFcg5qHAPLfvMtQd2Lk73RsEsLhBCUbJKH5Jxxj3Qr3qstn3hftSAAsB9bFznnD5kaiN",
  "key35": "3CcqaL3d8NXjhXCKw238tWX5SpY3HkZEfYe9m92wJeZdy5PW51Zfa78P4EypQyp3ynQLr6jAne9VdLMueGuxmCCk",
  "key36": "28h3CguwgVNYqsG11BPHdTrXMuo86PsduBWrXhDrBXzz8Z7u4iHbfgpY2vo7QV5GUeDcAyKgSkqFDX92L8vjzRLZ",
  "key37": "3VngSLoKCTCeoiUnRg26nbAv3jQNtZdpKpijhRS9efaiqXn7A4u7HRdDhdYyDbLenNk9WwSf7xpVPEVNnBofUwsa",
  "key38": "3Q3iCDkcUfq17wXsEskdiYeixcf7ruNzMpeUmwFMms4GikitZoWm9pXifVPuDx55EUorewgQoMsT7HKMBMa4qyjs",
  "key39": "5ptuja4ssKKo9EBKMbDwFfCNNQawiUzCzBbAehpyHKK7BW8cbvMj6no1jETDj1S8yYzddwMFq5zWLkPgbLzbpqH6",
  "key40": "3AWDhTbirH1xjgVQo5MpDwFSA4xsjot6rCjpzYbtj3WrHxtStkjAAxFGMcChrupfZ5RdMfV1h8LWXUboqqriHXqJ",
  "key41": "52gXjVXhbHNR7NQ1EmAWyEijMLKaCbAdm7qVT86o3MxvrTaGNYHk2UXaXDaoKAKF9bcDgKZPQQDMGzh7ZhG6XpjS",
  "key42": "4jYY7CgyQU7EqoGfAFhy5mRH6Hos1xuJ5ZuyPsrWusLxa2xCEKWHjig9vR4tC7iLJ7gkcETctjkecFtiKWxzodpq",
  "key43": "2jdQUDsTWNHLYrZHhajaxeEnHsoSTrTgYG3emct54wJSsogwV7chdAqNbzRwzLqKB7iQcZpgNjg9fDso134nMXBh",
  "key44": "4tXaE7pRXdGcU7EkBeo1LBLunjxqx9xQrKX1sGMp8A6Gn7E3iqgfK6hFz53wPFWQwZCumndq9hWag8xfetgB7Vmf",
  "key45": "3KhDBRHH2ZBH5E8F3n3MNi6XJ9F8TZNWh4Y12bCLJrCnZDQJbR5yRWjJGWscFFHXTCmhztnLX2vVyLjJ2v7PJwgp",
  "key46": "MGf7ULEdWR9xgGQMCQtDvFMRL5Wpkz6q3b8jKhyi2exGp7EXg9yZtPxbkBPG3tcu517BWAZLPchuZ4pwLbrZiE2",
  "key47": "2fsFXp5KrXhC7DQbAsysZzTo74enn5vd1MJGnk2zgG5RkoRLzYXxJgsCywrYUxHdqwGReFhVcQJ6Zc9Mwz6EyMwR",
  "key48": "2MSJ74gxi1FSdTJTp7gn7cS1LqnNK7hQfZYTbBd3HhGs3KEeJ32Mm8QN6yn8q7LYLNf5cjuteeikuUUtG23Jik2M"
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
