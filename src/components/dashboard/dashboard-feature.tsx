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
    "39HZzAsw4yAYB9fFowpobL9QjUWc4bs6fCLZZDBWJ2T1Cy5Gekta5a43f6Gga5kkEQSbjMxy5hbaNuy7n9pnf43h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bstzd2E4J4QixWs6WzGcDTxXwAX5J3zMGSYfytpQr3dRtk6KGvL9z87tybzkCJYwUQK1eJR2EXTbdF2Th9hF4Lz",
  "key1": "3NJnEiDfoneRbKkJ76ScxSAoFhtcFVpkhtdTtAHUhFkeurdGrWMQMKWSEJfqnjkJyW7uBi1DdRH74E7tT7npdWZs",
  "key2": "27XhtxyCgtxjbfSLasKAQx6Fkmu5MRAhFDmZ6KsxLJT46J1H7NSVhpiPMPk2pWTt4kcL8VdoDuYvRQ9ANdu5w14u",
  "key3": "4wa2HDWc8L5cfhwiTv333XfKAcwfE6hYXfpKHLvdbC6dNWirVhn5W7VXY1raePcj3hJzRLDL9HoMvVfoS8Lrgt5s",
  "key4": "SCJkGMrQgJuuxnw73i1zsEBqp4RadzgAC9KX6bEoxb1jpLaez81RqmizQ9WS2N4bQpQJxmzDQEkjn6x7Mhq68XM",
  "key5": "Ur4hxdeCvQ229RqsUHB89d62sVWRVpNB8tUpA2xV9SADd1GpQJXTkCj5nKP4qSLqSEWFw2XbBYL9kdqUHswVH4L",
  "key6": "bSosfaQ3xTo3ZcAT2ika7z9AYRSuhztx1XiktHFfTNugnpAGx71YzDfbVa3Js3wqd4ER2TeqsDFBQNjMGYN6cuP",
  "key7": "4LKuPcHbFB6aFovMmRen12EMGMG6W9wg74UniM4ECLvH9tgRLryQbdc3j2J1gkaCTWShb5Vt7VPHzU2JHPrv5iJR",
  "key8": "3Be6LVco2BVtyKQtU2fuXwNWy4CAQUVVg72aUyJw4t9x6d4YfmzX1rRNXVUq2ARJkKUnbaqpsGKRcBfpgmZ1BASp",
  "key9": "5WoPwZJzCyLqFeJGFuSQPsPKFQvb5mjc5j5FDXViyx1krF5WmLFcVxWn8kGWgfysR6aE31PY4JmjrxJ6TeBYK3dy",
  "key10": "5B4KbemFp8j6om2p36CmFHw8GAn5MJMpyhMHYydm6WX7prfdP1J7KJcxtfAoACAvuY2uwDMBMCU8uM5xS7mfm8Fe",
  "key11": "4mszkQbCynnQoAB1CgGnct1NvQrHgdBbgy5HYtX5X7ej6w8znDtn1Wqqs11FEMrd8w1JFh8BWhbHKKL8877Cjj9J",
  "key12": "pwRL5FCTTBfDsxPGDoutgZSaCj41NuMEZGmdYufimpcDp3RPn1qmqWAJt7NEfJQZJtaZeMwffsGC4EfmfBA771i",
  "key13": "5UeABytV2paChNiJ89mzQLNxJidAoCgLJQuBJP53pNbqu8DwNP1AJwq5AX5iCEZpw493RU5WSxG8BDTdSj7NWh7z",
  "key14": "4riLrQ7ZUYYGQXJXieHNsBk2q5bHwQyUjqi9MphC6XZ2xAQEVRRnT8BTdntupa2K7rA6fVQSW8zRBgCCoojiu137",
  "key15": "5bWQU1vXm3CpeDMxF3yoTfw3X97aGns6VmGTPBdDU73JBcAFpZZWRpSunajtZ9sYxrRoQFy4hQpAWpSAztXcNadk",
  "key16": "5HBEzVPW6Kt5yD5beMjcbJR9hfLMxxrdJpLELf43GGf6LQytsK4cCMRE4ZUnnFdUHS8mwviXmt7UgbujTVTtPAik",
  "key17": "3mNVw1xEPdsHJemuMxJ8CqQ151nRvpFNa7qhc1SctRSLdHJCHjvDYeg1uGU2V3Ymmbxin9MSGA8hVVt75BN6RA8H",
  "key18": "47Q31LJPsY8Qn2xwGRhbq3wgmhPusfD59u3ntEjTARsbpyCnNMmWd1nvSSqGYafncwPi3Xc9uXaJvVr8C3YZFffR",
  "key19": "2GbGG9yNprwaUNYoJ36sGq8FnBA7diXzHPzDGwkwgHMesnxembJushompwzyyH3RCNpAvKfCqwmHyCnUmTWcUWC3",
  "key20": "4zw4Rpx4wNpqpV97qLACCzDCoa3VjiBaaPrnNBMtE7XefimD5CDLE8dW6M6gNHYnUFRMzZ4uR3kTaM8vqSS4LcN9",
  "key21": "nhvV9oiqAWi6rSv3ve2fU5qNN87H1EyhGwujwiaKPpmF5ET1Cok9hqWHUcn9aPH6sQh6TgHzeEzyHuTc5dW4ySQ",
  "key22": "3BvcU8vAVYcWAbn6zFNBUuCSXVuGJnFnr8Gi9mMkHSnhFLcEz55ts7rj3PP46pgMS7bsz3UiRRPfmuT4kCAYPU9q",
  "key23": "zrULM3eggFF9YzUL1nfQECQU4cVwxruaHGNQkN1trcUXVvA9CbaxFD9D8Nc7vbVetpRMKFsiCRN7CSjxvam9CTo",
  "key24": "2QnrW9ZW7t5gPQaqtBeNPVjxK7Cmc5v3rx3wL8rHQvquFXg6yEgfrWtjnJHktDq4gsgTEpFR1JBzr3EZLgmcknQD",
  "key25": "5bxkxTGasp85Ggti3SfHgxq7LeoGLaFTkVFb5afXUNpDupQBBvkM5yoYru6tT3ij7QujLBCrPWm2JKueCaxjW6AT",
  "key26": "65auPMNu4faZLJxR4NZ2KskeVnZLVdeCFyrcFiifqJbx3pi2Q3SK5RecytJJ98mK2BMsrofNyhCRmq6NXKPUFKhk",
  "key27": "MwAhy57gHW5xcVNeQ44Kh7JjX6hwa1Mp1UmtLScfmD2trJ7SKdVFTezXptvUuQc4QrXgAdofY3n6DEgd4T9sFiL",
  "key28": "5vsh7aF4rXvezKm4mZGCBphwo6B7EBix5dvZnBjXDJ6FywyYx3XJqSwAL8KTEfjDvTZJibAtiQpDoPb5onmpZGhf",
  "key29": "2i7ZDoAxPKXaPurX99uqST5bRpd7D2JcLmeAc9Hjo91L7knPccALaNXo3f9vgjoS9ePvmAaFyk9unTCdW3Ae1fxz",
  "key30": "21PXr8tUKUA9P3cLkzkW8yKTQg7CBSsvStc7jx9Mys3rKTLjYwFbzPcfY4N3w7aZFpX5QCj1tjYqqGujwKjsxfyv",
  "key31": "2xDqPft5YuBxQPmmNEQnS88dBk65Uy5eGGjDopyTtRjc2W3qyAyMYqqi4BKWfTbYZtE3EmWPRgzm6bbc1U2HELU6",
  "key32": "U5LtcJT7QNwSvfbUGmyh7vix2dMUvA4L2Pi5GzXaqqqXW3HdjTv93WYDb5EFq3V6MpY7WScgLkgrN3ZkfCRWHtC",
  "key33": "mDStAww6ENdEBZiLPJzuPCmjrXgsUVfk6zkwkZJ8cdYgLUjrUZeUygLTf8i2HQc6tMWVh3VuMYmJKibcA9mGKLB",
  "key34": "3r7NXHCmHdHtt2Cwv1emDWqJHE7Yj7X6w8Xa3zJjBA9yqbSERRgaYsauei54umaYW2QML5Kq9Uc3VcqKvmzdykWc",
  "key35": "aEtn3nFn8Qb4oQRLeuipLZP8iR4PKCaAPxWgcmmzdMNMpYwCMgEVnL7yAD3jiJ2vvG6A1RsYL9tTR3t67M3oA99",
  "key36": "27EhACRrbGyYuRnfSoVKysFySTSzsp8cYYF8XjDURaxzt92nsYCL5nmWHrEKhkBggj4fNsMSZFWpqVhHLbWEtLCF",
  "key37": "wtSbGxACA6hskJq7WQjrqFzcPgVgbfcBvmy9zUc7N5k5wAFi3MxzsGWgLJMzeU3VPS8qnHJbFMGv2WaiSj6was2"
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
