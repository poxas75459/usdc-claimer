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
    "4hZCoUJEKMjn8pCdgnebnR4UdnKcCf1fC22aE8dX9HNUcfhXLUT84zfWrZUWQK58wPPARXVu6XQfhuKzMwdizwfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bc9QLR37kndCE6muWuRJTBfwWzCfQnvu6yXFKSUHxQD76YzvpzLYBW2SeLb2RNBEywnWaJFvTrRbgdgsyMSdf5f",
  "key1": "3dsvadMrrZSRWZRTqjASJcXcfmapTH3KuAXNezidSReRaHWa4f9NHxgBEuMqMQqpALS61dvgfjQRVKRyoB4QcMus",
  "key2": "5bvGbUH9Yae7LQYkZ6ZkainHiFX5eQxAMcxpJ4n9MCtVsRkhc7jgP2NFuMid4C6JJK2nYTVCig9JMB51GA8BtczK",
  "key3": "3cmScT2Avfo1DDeKcshNpafe39cKRBNJqXsmhLipCGnApcLMYvaZVRFRjuxXjD8kp98QXuHNySeRFUnXJyVbDy7v",
  "key4": "33t4w3U8sLfiZHzVX9uk4WZXey91K5aHXeXsSWj54HVKpnu8y9hYPovWHpdbuqUNCCoSUJ8PDXcTUqfh3yFfi9E",
  "key5": "48WkZic6DMm25LovBxnfuV3mA5pbmKY8r1NXoz39Xzi6V4L34Jmqmn4f1yBqz6DnPU1vSarjHZ2EzJjnshNRbkZb",
  "key6": "2k1tzTRg1LQzUoHaQ82AKVKEacoXKJEwgabbQ6oGSgCM16NP7zhRg9M9R3wvxBPonQ8Gnb9UuoQqHJTd3eFpcwX5",
  "key7": "4YHwf7Jv12TVQcLyHtQG6T3C13q1YxgbAXHYb8EavgwhiKjvHCva98sMRS6MnriK8pRx6PGwQisMyUDLimLmjPz8",
  "key8": "29spTYCmKdps8ERXE964YaVr5gaT4wZp4568w7thrheTrhQci8uAYthoeT7CeMFxJbLS51qiZS884S7AtjP4sMtB",
  "key9": "5JBmvc9knGrvmEqo686QWJtszDrDbWnkWG49LdGmGNy1QnTWcmvMTwcyN1xhSt6tyVh3rSofYLD1xjbsrtKoXHNi",
  "key10": "3VwTvQkWsEZR6oK5SYuKQP2v2pNNjbXpq1QMETQEnHDkuDGZabB5qiYN2QpWNe8bCsVGE7UhAbWfdh1LW3aVQDdf",
  "key11": "ByohJuGcerBWVksgcg68hDZr4WcxK8uZ4HqaEGRTXFXUb456XWb9tRfrEQfsH8xTk1SuJytWps6AJKZC5vCeJGc",
  "key12": "4D1mJuWZD2WoGtXC9uby6xvDmhejNA4NsUYSCZHcUpMBEDpzh4x5EMkqjt3ggMaGqt54oeRBF8xVPoJzv93mKpvu",
  "key13": "4E3ciRh3MyXeYYLmwhm1o8cCC1JFvHNxr59RaAvkXCg3zAddzbK2fk188mkk3SwnFCZGBp7k71A7SFCwkJ6fHxnD",
  "key14": "XkcjKLA72ma41rDfcMJnJaYe1Ke3rBt5WojDPak7eR8aPXJ2SsSRZo9Tzp3WzRWPLA9siSfPnS4gbMf8KPBa5Rr",
  "key15": "3QZfRzSFFFx4BzNxYRvkuxh7iDYGxgxJhqbLv1U23gugWaJKoh9vdDcg4H7qHdmPr1SySGsTdt4VBfhzQp6qyRjV",
  "key16": "2d2jDjmbJjYXwQ1JPZHLKagSDw8gD1Ch9d43d9YM7PuUW3ybTioEtF4kApeCEuB3HYvukokFezXwsULQGpG2JwrV",
  "key17": "4SZ3hqtgCq75aSjXXkf5XXMJRwbgnPa8ecRwFVg4z91b2NYhzQtsMhazBJWWP6tcmHXEfynQX4NfsQFs6d7fBYp2",
  "key18": "4uDCxMBMF4FAm8SYb11g8hy7F42QtgMzyYL8FTtwJgj4AmeQ2VUsqsnVnbWfgGWjR8NMdoueYYBgRSMfYR32JeHZ",
  "key19": "SF4QD4Q8HPzR9sHgBS9evA3jqFrpquirKd37ssBV5bzW2ZGxKKYvzq5iGhDRyJARdWaMjhmDbL3CL3oTPR5MeDN",
  "key20": "34hEqLDjkKzzp9gWhQ3QAS3MS4Gn2B721c7oXn39sGHzPfEyweNGX1fnr3k7Ksdtyghy9biB3dygBLbauRDcBeUX",
  "key21": "QxzEi1YXmqEPwv1pbicYbUWWW2gjEGaRBsRn5atHUrGMRKnkdD2WVWjthMyMVYn1bQKUBspWwf8APgkx74674mp",
  "key22": "2WYZrpUcbjdwB5uNhPDKvM5Jwa9g9H6kqZhzj5VxBeRR8zkvh2HHpKhsvpdgNyFcVCx8jYEyZqXFUyv4j4YX39tU",
  "key23": "4VfaR96seawoEctnivmLAPcZz5Gu7Wy4BTmM9ksEVGu1qjYvY5TrhXY7y4dwMFEUaCtDeEjveW5GStnSQT7K6pVV",
  "key24": "371q3EEPvvoEVTuxXLLnkjDGJ5QGWeKxwwuXbFVnV3fRKEHh78DC6v7myjvVhMg6mTVuniL3tGUL6ojKkTiqbLPG",
  "key25": "4BK1u3rmr7pwyMR8Nj1q7QVLoj7ayUhp6istA1Wg9WmV6cKC4dnqq7Aa6zAsKzMJR76tEbsf7jkTtPSMu2Yq3TEU",
  "key26": "5ZFnVQDJqXtGmccxYYuXutp3KT1bLV2xvJQwn7oYzm3SBhkgdiAW2NJrgjCm1cQnnp8mBmusFTZRx2SfYsupoxZ4",
  "key27": "4hpnQrwZNjDUC7PbKwxmNHGgbJhiVGtZYNVmmok8zP8AD75Fu5KkmpddULaghcXkrcnZqydEcRhLJfRL9iyfkBNM",
  "key28": "3uQtniX7BuEf8BfGZ1uANQdzx4kNmuXPF5yr7iUzaUakp3vweZYucNH7fpLmMNQbg3HcHnpd6dKjgoBm9J8YiGnY",
  "key29": "2Ek19sdEjkLvAR7T3DF7vJbcHKb6tmH4jdkXLvaTYf4F5VBVixM8EbYX5eKSr4s2oTADthdfxatkoSHn2HGLSv9N",
  "key30": "4S2qr5MEEQhPuaT5FPTNLB7snTWCBj21oArLL5gfWPzwQbQotceqjs6shwXnnRLTjCkx1CDZyDjXPUUCCWc9A7Xj",
  "key31": "3Q3qHxbBYKNioa36mS5nzdnL7GpGEKAmfJt9T6rbzmP2fJ4hamKNKs5Jj7UtNRpYpF1E9XwhZSC55k3E1MQAek6m",
  "key32": "42nR6tRpuNJEcNRtCp6LQtTkdF9471dU6zJgBwzdbjekhsPwJBv8KE3fhhMn1dcrsd997ken7NG5i57qghMjht44",
  "key33": "5eiv3rkPjwyPDw3u6R44r4bvuAomi4W1F13dUHxV5QPbrm5T3YF2eJW9i5yBPJhGFUmakt6755SbXyPWmijsPCfz",
  "key34": "61zP2HrAEigQLE2GP8XVhJqM18Do9UpHSgzxZ6a5vWRJoZyQofV5xaybQXuEs8MQXEbgjPpU9BdpMTa8jQaRbRiq",
  "key35": "5VemdAtjiDck7Y8p5uGRL22WjA5aNPeZtLe9S8rHPr6e7MyzE3MC7E5ZiVrP1CJGjxy9vHEQpCy9C8iDawJp1eUv",
  "key36": "2Gei4E5oZPQvbwQFJnrFFpg9eAAoTprnS7ZUbGErwKhrjbeA3nhKJVcmpd1Q2TKLctwozFSFCKdvhWtaWmSSMQdg",
  "key37": "3xM9qkVG1ANNt5PR8Srtt87sTyxuW1mtnAzAK9Gv8jT67kC34XCSo82JwedAkdSr7eAFhxCbQf2jcQLyYjivfE7R"
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
