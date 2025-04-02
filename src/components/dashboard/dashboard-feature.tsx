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
    "33ZRyhnjpVicAcPDw5EeocFKi7D5URhCvZk3iry4pjreXhxN2bYKsm8R2dfFZUQwwtq2GTUVm8HCUUYNi5kbCBWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hbj4QT4wa3Yq6wegvQGVQqK7z4M4nXvcyksX9duaMsTrrhQFgwbEzMtetjEsHh1yRp1VaU46RFyuSfwZDbY9Zwr",
  "key1": "3Vse8iWFU4oXLFUnmu8DDWkzHmxkLWrKsFJfEonqT3EMFjmtwvXkEGqBxjGFyrUzimTsMegQ5DnAU9SkL8CsRqbz",
  "key2": "HdnJJYbe22p966pDp8JycrRXMd2x423VayzjMWBDknpApy6QdzZSzkSRDngtPJHnXtSTz47noQry3fJhoQ6Q473",
  "key3": "5uKncAn53yhf5LkgGWwKRBdFWAuJjaqV8HTJTW4fry6QFdzhUurhvtyXNVez3maUU3guzHwbVAZGAXC6NHsFtQsh",
  "key4": "4qYjE4Jdq1MTJuCm9GLtGYeVj9mGruCYgM1pbixXMHhgPc85t2Kkcw2aHRuthiA8FySXiXJHUrPgANUFnZZW5Lu7",
  "key5": "5TT2ZHQZ6JfCVYKrjBormKHQMmEqjt1WdmdcJVZzH32nMozRJ6aTYGuDD5oM8UE26brwngmBb8dhjf5ujjwVB1TG",
  "key6": "4BwrmFKFbUhpWAa5ZjHoCLRLLQa367TD3YU6pxSX6VnpAA94rCHy6SXK1i3tbJ58QB7PWxdRYmgdzttx57Hvd2fJ",
  "key7": "4FQBzTvqsn9Z7VgvQ8aHmEsxsH1cjiBtBMPf5YXjRBUJuimpZ6jqSSfnijhcEViq2d464bfwPU6v5aK1RryJgmyd",
  "key8": "3kJ7Lq1LK4WDqCtor8qEMbohEEqj24j3SuwiSjD5z2nQXDXcRk7EWiuj6xAfjCwcUeQARan5DoeNNAwU9xtdNwwx",
  "key9": "5ztszNEzNimwed5LsXjqKi1vG6JWXAtL9hWdeUrJPzgkdJGqFaimN2MY7qTN6VccPwi4wYeJFQCybw1Xk3cHjXbr",
  "key10": "39axHM6C2dEEzNUhQzhKjx2DA7orGDwaVzAjsiAeJbJcV5QbWTcAqozr7BkQkYWV23KhPJbrRgSkx5kV5P2azso5",
  "key11": "4zqbZTHt37fYnw7JMCzeHKvSvpzEA46n5WBbUSVLfw9DdbUBqhYHUUZh9f2YzZ8in6FRb5Wv6AkcVRonG71inGKB",
  "key12": "2W3fZxxfoo93rVEr5jV1gyr4Fgdm4J1g1UWnZzZdyPuHQcaasGosa4X481kx6ivbkj7XdCMUEeZTtvdR21F8LiLc",
  "key13": "2R66ypjy397xRHfdpKNLkpPCZyGEnswF9kZDetc7mhcKZX3XnmneiynqcA3KdjCeX5BsSnjkgTXLmWFuWs8bku5",
  "key14": "5DnygeH3jsAMDmTu57nSoDCAe796izsXi2soFk7omZpADXckmDAYuXHz9X84mJ3Y5o9FRSUL3pwDWpGfZXGzwSCL",
  "key15": "5jRnNq5dNE8eQMWCjGqTcBNx6pg7YUJutRDwa8cZhwybgBMXLXNzxdMhTXGeuwYfQtuq19KF3nhyLdecSo58AQGm",
  "key16": "21vvRjbsQbJvF71hp56ZwFFhvFVo5bVFJDbfTT7sQVnXbDwwtNjmqbRm3yZSpgwETZh9GudpBvbKcnHp44amz4qx",
  "key17": "3UWNjvPTFcm3AieupZVSyj8ngkUx8Fc5hTTCVNcMRAnwxbEDjTUcwxKTy2gvCYfaWRVeHcBtkTqVkHJizTGowdjC",
  "key18": "2nSV3v76s1zRvnDRZr5jRDDM4YVdFGHmMvN36qXputy1qLT1qKa7HUcUZg5Z6hD3dEm24VwqxgrLuMdBaPyKPoxX",
  "key19": "s4SyNbfe3qFQGQdPdtaKqVZiTL1n9rtHPKhFPg72HJJjxG99UzvToETcPHfMeH1qgaULfy5z9oMLBMCh2HqCW5G",
  "key20": "33EmwLrcZ7kmrsGFGRSGEEudHNYbtmKnbnd9qovDZuVq3JUvDZFaHCbvJUWQQtep46mSWwY6HZtsUAUK3sBKyHD6",
  "key21": "2qtWwebLgKV1z62uWFJpeVygHiKEUqhamU1hXafN8Y6LdcRZ8mz5nV2cBXZKacfroGiBjdrrZfvDCe7uTacVvd41",
  "key22": "2rtpQHCuQMmuN7JKgn3ro59vhySadnNXtS64Y2yfBVDgtvgXnGz82bLAtEisdJzUSCmmPUoRsRiLEcE5DoxfNEmv",
  "key23": "hbCkGC2UxNGhVNQWqRPWzDuRPyqedpV5m5hpBGFXa42j2yQ3qmugYiKb8ebRPKiZiaCYeQdTadKVeWy9BpqEDYj",
  "key24": "bwHRj4J3TAq2ADYNKjdYeGE8bpFQDqcFkhS1n1iiL8wVsMxT7eWoxp21croWZZV9gWtoRKmCYGHt9HZPPEWcwiY",
  "key25": "2ELXYfrTuPhC4bQMsv8a2uwyXftUuU8h5YVkuKTv8SMg7zjyp3CfJGBCvvzDe3PRfEzxKrSkpWHvoXUxGEHA68Zn",
  "key26": "3d1vjyBfJA1gNzV6e5e1hVYRvCpFHxibF1CjsvyGne7QBwep2XpNB35nscYNCXn6dxWvHzqMEFTtEaDD9xg1W792",
  "key27": "4WSVya9wckqY67Li4Loge95W7fu6SYgDVrRberx5PETd9hR9fMihPmnuJZfzS1mV8DTX8ezBFNfv6tgmEzHsy83Q",
  "key28": "36CmQYReew1B66VDEPkCbxxupCm85k4E4etsDf5pPYiH81dHpKczqAfvNcRLV45yhe8prBW9PKc3ZFpf8w5Xe5sj",
  "key29": "4thFkNY4eQXCqA1awxYeisvs3n3VsQiYCYjyJtru7CpBc4Arbe7kUd9TyagdaD6PhcXVky3t6Uawwfo5vztb4tKL",
  "key30": "2bP3wEB6AikgjebE5mXbdFib7wDQc5j9oFkJ9JqWjb8sFN2uM5j8HjTeqgTvxVbmB4NHF3JeqK1PenawEkR6NvnD",
  "key31": "NCaKDnDJ3kLbrT3Ye4h3NnSgvSttKeux4fcEtEpqKYQMJMBPDEYGQ6nrBZWYrbyNMUiyE8vBL5KYtobmjQQEzhd",
  "key32": "5KLLrVVCUHKYC3S5qYcZECFssZjYKpdwq729UBD5cQciHBRpf7X7jQvkTbKFVsU4Efa2neKnXw4zHxEUS4yT8sZt"
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
