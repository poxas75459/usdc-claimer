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
    "YzhEcX49x5mnksQmFjchuW6EVysqhUGQQtMANDAfw494Mh2ydmuaL95zEyKKQspd3i5hcfj3TSr1cbeoETQnw2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1WnS5rqAHZvpL37DUJLLQBcL8DWYTotjrUf1UZgf4gtaSUec8FXSxBswiyGfJSSvEDxiYc5NgZg1Q3Ex3F7TCN",
  "key1": "aAt8XWHwGeQAXihGwVK9yCpF47jAWcKUaNq8MFPTb8xxP5CnUtHib1UNA9JscNCj4mVqukCtMFofkuhdS5sBMeU",
  "key2": "5Lv5CNyCETwK65CuS9fdJ1SUiya3gRcVEUJfx5rY7k2cxx3YCxd2orC7KyeBQsTJKHcxUzDyuY7DCa7oiMvyMG4J",
  "key3": "xdCdAP1kXaeoYbZXykHHx46F7V1SsEKbtDLGoYyJaz2akXEJyVDzhDno2zuKSEjWLJoiC61FiYAxwW2hTcqPuUu",
  "key4": "3N9NPRU1ChPUBCPGgNGNWFMM7KgPQA5aJkuRAKbEfKuTtnaucqaNC3xz4oscA7JM99gMTi1QVfpZ87vWEf6xCtaj",
  "key5": "3mJZWgwc3ZNUtiemJ6a5tKjaNmhdnVyHyaC4FknRUrLSNP8iAU2xh8SG3zTXaFMnDxEqReanUo1rq8zidQBrceAh",
  "key6": "5hQxf1LLrYQTKWmgHHnfEJNpJvq7p44Z5UCsuGV8SzXm9M5fJeoGJSd9b7U7GVkBwTHqA4Eny2AKpBBmBfWWz5xL",
  "key7": "S1PG4YsKvpxeoBEsgGPhdQC5iCFoxnZmdWaFpGBvRkRRUouYP84uhtAe9gGH3kgA69eWK7iDHzYxftCPLVJ6vmX",
  "key8": "2hqtT7aJPMS8eHSgtVb1Tpa74rvUuBfGz6myM7c4JxVnTG6TUNQ1RTCKv9uhmxwmfGhWtiqD14WtqkSePifyDPLc",
  "key9": "4ujxGcDsZRXYCTR9r1iq3s8j5au1EYdFb6m2kvvtAmic78ftAGj8sEsz8SKgcxR4zSmjm9w94ofq33rfFo88jxWm",
  "key10": "3iKanoo3Szv9HbXAc3i96yfbnznesSow623AgVc5ZQwMFHtwYQneCC8FQeHBhjVoaFWVCw8dY4jVFxDEV96KLzdy",
  "key11": "4RqehyfMcX3Rz59PvSfi3AFu5RRQQGdeYNHRLcNEJaevpd8fvYvCFGCApD91jxrQAWD3XGZuTAafaQotgvB4hRp6",
  "key12": "5eK1vff9UMkC7kkQHqTwKuhgcMsZrv9yRcuUcJ8pgwLE9xhtmZ5kEZa3H9FMf4FRHnh7CjbutyoUtqptL6fsZ4Ai",
  "key13": "4eAT9rcFvN6Gah3um42aEzkBpkoi7KBjLv5hoJvBzgGGGEuZTCGJYc9VM8zGdpnHMywQmPA2TDpFXE8Xp912x19x",
  "key14": "4WsaB7KB4tFDUm3NAZJuB3u99x6iE8iFiX8YDRgESubd98mXby7Td21bQkTREw2o5u9jytGoZ7C6n84qd67VR8vy",
  "key15": "45hSJWo92shTk1Gbjbs53ErMbx9xC9177dCbdsHNpbA7LfVUV8QdBvqzM4t95pnuhr3Gt8XSCK7d5SqGeM5zvykN",
  "key16": "4EYPtbj8E15x7XYiBok4A1sx62DA7NGBt6TjMLWTqHdaHZ8LcupfogUeRWcWuUnPPt9fdvpZbaUz8R5V1NgQ9JKB",
  "key17": "1dZ3qGZXfCQKJK6yGjq8CWFDT2tempHk2qS8MZ4mMqe2hahTGNMNhehxFbhw5NeYRj9XEVo6pRoLaQrmUh9Rkrp",
  "key18": "2ymWMSL1WnwdqeswDAzRCgt3feqy3hKSwYNcocmCncXJ1a3K8h1hxBmdWoEhkNitSuXA3Z6TVekynA42E9rEC6zA",
  "key19": "4q7o2VSwqS3a5Eqj4jSGiJzvQC771VpiWVhKrEDZxVMddsczxD5g1kkR7F46qSprC2NdRDw7WpTCRpaepNiZJpqJ",
  "key20": "4Np6aRtjVz5XSu4oTz8FbkPwJAB7M3VuzVtQU9txKRrr5U1rAZ3tN2XvRjCNZGSv2LikjsKbqkb3dzVM1BMo6Qgd",
  "key21": "f2PgDdUXgzmGKbXRBXPZ3vTXhRni9KdywpVXn6tpRMfsiQ4QpKvf2b2pcxiDxMyh8YkS3qWUyoTHxhaeKzb3Vv4",
  "key22": "3AydTfADMbnmFuz6Xzqc2hwh9H3jXCbwK1VpdBZGTwAbHTvrE3hKNKwQ7XPW8MLcu9xpnizbUcLzJZJ73D3ytvyw",
  "key23": "2GGpCNZPVb5HsoaV51SsfegM1egFYi4h73hvWZe9izsGdYUQEG89wXY5wCosxANCZiFzNGwo2ME3FKdUtsZKxk9j",
  "key24": "41qGFeKp3q8GzAv6GQy3WudY16oz1tkiHDJKMQgFuyefCQKUon9efgppaXjona2KDKLFRrATQec2wqDfzQMCvq6v",
  "key25": "4r6q4mTqT9zgitWrx9Yz7SFng7DYyhERzKEoJt3x4xXoJh26gmDHvkCe5xqzaM4n4no2PcZxZ4Y8xGrtg1LzPjfY",
  "key26": "3HZsXPtsCSow2TPBoH5QnKZF7Ft59va3jMipAz4m7EtqoNU8ktqMFEL28N1ws64eLcmdkRZ4HqRpH8xAmEQJG2Vb",
  "key27": "3YgFikCC4xaGdcDpP5T6uWDjoUkW3zWJwHRogZrJ8Ati6D6KwMtgLy3Jr1ToHWxgWoNp1sYJ5LXuLMdMGQj7y2cF",
  "key28": "3JKj7r1AJiLvRdXq44afCp81KSmH3hq8b3ckuLk6mQnq2KfVFiGHAeYHvNGcidzCSHqHWeyeEUYBXEZa4FBtsAxU",
  "key29": "oFtFxYomape1aqNiHtZ8qk1ieAHWCxTMWX7xFWxM6bkcBrdx4WUnDWzv2oGwzFWHiBkVw7yToLmhkXw3MvuhXqR",
  "key30": "4zchTqbWdUKcVqPfmwXCFkHU5LDi3PAniAPUeNzwbsfs6ycA3wSGZgFeQcHvRNg41Vm1uvatxKb3n3wmffpeFwSG",
  "key31": "4tCVWFCPRBfeYjVRk4bFbC7U7y7ZSKBS7d61Uq3RR6cKWeRXRq7bvSP95Ycj2xYFHd1m5kwPXQqVWkHNxvCPMBMx",
  "key32": "4bi9dqTi5tzq5SjRxzx8yEjstYk61aAHZxTphNGrJ3V16YBvH6HGHiVba8wBkY552T91VCQrNUW8VK8jVMVknxqh",
  "key33": "2ma4eBk5h71iRjA5cG3pGQZaWEqMwVDxkhtzike9H9Va4cAY2ZTC5sn7D4heobrk1USKY5atsBdg7h9836mTUhGx",
  "key34": "3mSSjtyUEK7XNnR2dPgmUbB9MHqLA6naUPZegFR8xx91Bn8W6erSdR1v4T1N94MBiJsk4d9zGZL7vyXLaFT2HkXC",
  "key35": "ZA7N9vcvqipg7rC34gfwcDfF4gcM8dFVDaxE1hGr6GYhvLLdCGi6AB6aNmR1beQPrBUyANVf5CErj8U1kUDPYUq",
  "key36": "2TKa7i2ba27ZU4ecA5dKi4DCKC8Us2ip8C37EeeB8vEo4uPGPghCLbxQPHFAJxhif4k538ByD6khiqPn8LX1dGCH",
  "key37": "bmYRMjMZkvqizftYofHV49S8TkDSGgHRJ7hibj3ar8zUW9hDd5UJU3uTsScwtqQwpVgZvQetXAgQrBdzu9yVVNq",
  "key38": "2Z3tpFfpbhjYeDyZEr6bRirqxV715vdMJeXPkhMNdKuvdrDZNpTeSa5YGvG5sDpq5MgauMjEKZhoExqeNT8UyxRP",
  "key39": "a898EQZ2WW1VetSa7QYBSnZ9ek8GiugANyZbnSWQ19Zty8dhRXSi9hFqbGXvw75fr9Jncy9Zj6w7a7ATLprKmt1",
  "key40": "4iWDucueEumZiXN91toM8zJEsbvUh1WvnDTda3ZHJCadP4MGXSWB5MiDP9Pz2oh27Ach4FGHvC9fGoz1fhuxi1fS",
  "key41": "rrGBqXzRCGFCzXVTgm6nPt1NVsB6QFxPjmc5ZT7xfWepz8LiPMsyJ6qVC8tWezgT3VMd1czUHb5U8CYVSkY3bez",
  "key42": "2cV93CWcyKdB9i6phWqnvTdya1jxhJxfjQbR31dP5hNPxYN6k2WLNzXK7pXXeLRVZG3p8n9LjYtfZQnPTcyP8uZL"
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
