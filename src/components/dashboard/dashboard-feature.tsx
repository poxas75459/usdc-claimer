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
    "4nAXEK2JD3NkempHkrt5wsiQtkAFpfZpUPp7HwufCcPMy4jLjvJPmSnfECfG5KXZdz7VH5TwP5RVyW8Po1Zdy4zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yWNNzZF4MPTuB1L5kbQPBAgononXgaMXkqQsgjzQhXNHzhP74FAX3f3G1n1KMxGxrh2bJEG5qM1X6hvqmXQQaQ6",
  "key1": "5wDn6GTX4c3P7wwjhLMEmK4GVUkTzJDmYdFV6x3TrEcY4dut2uCr5ak2kwMiErmsjNVAWBSGj4qLdbicCcs6bvGN",
  "key2": "3GDMGBB5ZBh5paupFQcQ5J4Qrq3cEMEShNby3bvKMuex76Hy3c9rMHeu1ztP9iHUdoSEVrD8kaNzs9eGj8XANDw5",
  "key3": "5EexT1V7xqvba8D1h6jmwJEHMVRSxZpGZuwfUL44MRsg6NodeQJrK4F6jTijehbtfzMTNDLuXe8bvHVkxWaLY2YW",
  "key4": "uztEj7WaExtbfSnEWjdh5XKAHeSjPB6gZDZJcVc8bX4SL8cSW7vtEEd99oB6sx1LxNzsGW8s9WNfigZVfyaM2Mg",
  "key5": "46b1AdkheVSzDa6Z6VXCjjoGd3awhp5QVaLiwoG8rdweVNZGwX2nRQ7GePKDU5nKdFzZakezSCSviwPrgbwy18nM",
  "key6": "4QdhfYWho4EnCcS735ADy5jqZNDZRc7GbrYy2t7sbf8Dc3Eq1LDohvvvBMqVcJrBZPpKbGWcv6dWq9LgUVJn33E1",
  "key7": "44PkW7TzoPry8x4oBLt6B3MHt7f3xDqyom8J6DJ3UtEZ4iZtHURy6vcg5qE5N3mY8GoYyNj2TYwP9b3rdapfkbPQ",
  "key8": "5yNrrobdyvMXWQdWHXkaNzz7CU6z9NRcTADd3e8Ua7oQKLTiCo6PoCskTgvaPVAqHsCv5tj7gt9sijmmLozPnTZh",
  "key9": "2CVVWfDqaehKQsxtirn4SLm5Vh1TRHvAMBKzN9bBgfXVpWZQk2BBNqiqX31cEWUYJrKnnRmZo4NhuCd2m5fhUk1b",
  "key10": "44Tyhght3HfQgN723PXKP4TUBcASabUsx8M1GKCGD3JBr2X3RxSaPGUXsuxH2dyiYLNrN8jaV1HCtvnxwSjX4BFc",
  "key11": "5AcUwPpCvWjss9RkZZVj5tVE5hA4bueufqYYVEYkY3NdCCbduja3Dz9PGWcb91Ls378wPmNBuFXZuLmLQQKNhm9A",
  "key12": "aQmm8k5KP5FbM5Cwnwk212YLa7pBvv7KmNg7zeLJM4geZTRZuhDvRoz8iJvci26VvZVugSSk273nnc5DZFAvLNd",
  "key13": "42uXskz7AsuyaZadzmkVASN7aR7KDH9dFqhMoyjKggeDkxP211mwfHKcjYVguZWUjFNMskHiQyTNLTBzuvPDPoH9",
  "key14": "2TXjAAM32fbnBAFNdULVqv2Pm3iBFNgeZsF3YUS3cEAWGAMyRPTudEza4hWe3KYz4DnrHgW4gvFkuQDPAfiy7wVi",
  "key15": "49tLs1995SA9jZDJbNhJpSTTshjE1h91unejNxHkXRszxHCJqn1PwhFLnrzZyAvYEBMquMEL9ZoSDaiZfjiMEJwS",
  "key16": "56uNp19aviUG5ng64S9dyoM2dtBS9Hqvc5yGvktemZ2VQqZZtWa9t8iR8ErjxX92P2doSzi7ypT4CZhYgF7A5QcQ",
  "key17": "2wD5kLrwUrJABdnuYXidQ4jGkYKxgH6kevDfiLsMpLpo2Z9wK4G7t9VzabMnT78ok5N6nyqTq3wNsFhwUYk7dy5Y",
  "key18": "3Bc71KAedY7sEiS5r6nydChnBjH6dMZqYHUWakkqxn1KdShQWeaeDqovE2Bym7Tuta79vuK4DvttCqs4h5Cwo2Po",
  "key19": "GAvxxuJnJ3s8Q2DJaC5pEXm5ypmQye7R24m4rHAEjHLtUQebei7UixThgGLr28furHAi3QxtoxNJkX4KSLApefH",
  "key20": "2gpYh4d9gJrrvFAad2JDFeMcTmDfzwkcDyK9iGMKyXb2fpu45UB9uAHoEnr53cCYGYh3QZv4A6kKS3fAAFGXDRet",
  "key21": "mnc3zn4B2Cxe37tcCRM9DRMCnarGdsQp1ZycoTt8zzLCn8D2goXXZgerkXtG8xwymBuQQtMd55XJRtJBLg74Les",
  "key22": "28Xw35qQKz9qfhvzeXfsfLNcxMRHvwwyfM82Yc5yguJi5qa8mDer3wJAjTS6HJnYauYHAbUbp5CcdfdytFxrz7r3",
  "key23": "32JV5hJ9xdekmd3ZaPZEFyAhhimqSwPX4cUggzEy3xxqSjRxN6Sd7zzH7rMwM1zFsBVAwMLrazS7DfjcuCrFgw85",
  "key24": "tRQtN26U9pKorqeEzsY3jjVXoq98XXDPvs6kR8cSrKvyY4dCZBxM8yigQdq1siVN7XWWJKVo7vK9N1areexBmhp",
  "key25": "4TEgGUUqYDQ1ZvRk7UtwKikuX94M8MwtbTFMcpv7dtsbUoNRDi9KQ8oZgAJReJYgR6KUuUsj9oKqK2gXH6auxwby",
  "key26": "5VniuY7KLx1LsMn8SoHfM3QtHJEz7Mfrdr86wfMdpiGY8rK4kKqBaqvteyQfjDr4a1mhkD89rMVGgHMMgQ19XmNT",
  "key27": "5TbXZNgZ4sAP5Ph6h7rVdyf8AS62vAdSXMQBBVd5YhgeakRQCbHyeogQ9bVmEd2JiXrWuUB1bVA9QUiQZMkGYo5T",
  "key28": "4aWNa7N4Mi3Kz3fE8RdfP9ju37N45cvAwzBczM9uR1CBwMbQpphUiKo26z5zdb14kaUgqfoHvwFDhJ2At5ZytPCv",
  "key29": "21jNnAjvpBE9RqfmPNwd2RFUorko6mTjy9cVaBR8H3sDHuBBSY7ixKCG4xhXjYtE8FLLhzvRiM4PPbkbsQeKT3aL",
  "key30": "5rLZrnp7XGmyJAG8XGuMce8GihzXQ8VcFXMdSA7d45dfWRSc362GvLg5kPE6VWdzptECqCJiZyE5MauHjZ6Jt3xu",
  "key31": "5tTXpRGC4Pz6YTQZ45ALN31pYK3HrEfVzKupLC3AFKWrnpd5doBTXL2iW9UHdD6Bv1KxvukPEX3tCWTjhY6qfwF6",
  "key32": "4R9CiNSdQS8g8tTFMzHVJkycK4XsKmEpFWUEoXUB2zdGouCPbY2Uoq1woSvTwfq4Mj3orQ5Lg1msEmDyHdCWd2H7",
  "key33": "jmVkfMFonKv1NvjmG9HwCfqHiZr7yuCpgcCWvgAQGHSUzTVQg1aVxPyf3yEA22wgGDX9RnRVSVpVyyeDJmk5x2a",
  "key34": "2Kk7kaNXq5vbQVYkoQvM1sbvZRXn9T8X7gEyvADhrVTuqmysWbXsVBj5d4yK47im1yEdfZShGN2TgSk1PhBxivAq",
  "key35": "SRW8mXUHBBhUaDQDrMkhtmsP1jgVcQfPS5mDdN8k4nJeCStoMbGVWEttELC8g7UW9eoupUbcJBACRmzWFY7ckpn",
  "key36": "3WHVGJzzqHdg8FZVJUfnpmKZjfT53YfrQRLRJdwNoZXndjEFAcKUT8RtNGgCnp9bFT4fFfUnkHCc5Yanp2rRB1oN",
  "key37": "5MXfc5bUVtJihUb3k7ioPjaC7E1BZbG7b9urA4x1HVDYSaKkackgyWuSa3Wa6neHBLEJMBCNsvBPAnqKJCFxic6u"
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
