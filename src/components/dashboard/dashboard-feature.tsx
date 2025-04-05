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
    "4PM8QZDBewWfmtZJQWM8u2oPZKcs8Pot9ynoWcEEsrSKyLtyboW1X5sSZvxHZh3iTa12pf44cvZ3BcEVT8SuV79z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4ejDRXJ9vPovLZegK7Qj4pBokc3728KYtDcJFAp9pvi3uoHGo2Ywf5XQxF5AV26ZqrmcqwqEUHtTKuGGoQnTJi",
  "key1": "3u3cnzRczVtDGxesU9pv9o9hxFJ6z7WB9NJQUMU9aUYT2Tgz4yfEvTA9iEExCY3c88Nsr1xCJ6ABMJBRx1AWXwSG",
  "key2": "P8HvkhnfwGfhK4ukfAojqkgJViiE1owkHy8UA3tuQPUX4bWfmugjD2kNgUemfCihJ9pdbQwvEm1tzu6FNg5Pyr2",
  "key3": "2jGUgkkvUrTxhpqwKzzKxy2y18hu2j4gU7k2mP7f97CYYdg42iULyov4jNrq2Y7fhrTviPADtxeJm3W2PviUyYQk",
  "key4": "5i45oKsYfERdxp9AFP5xjhjHvDRinht7QpHQwzQnhYp2KfJrXRHYQ57c4nZbgTVSy4KT5zH2RRZBgdkpwRcoJ7ep",
  "key5": "4R9sGkdvNRSCiAZ8Szu7ajNVi8q19D2QPCiSSHgRsaXyX8aENBUWREKThRWUDWkXqanXZL64oDrB8JzAsrsLnbdt",
  "key6": "2ut8w1UWqGJc98zMAKzoABjsLYLmCp8Us1dLyFFFeZZkDzoonNQpxMg9i4PNthHRHjHCkRvCB2MA3KTUbc7U1egg",
  "key7": "37C87ShoLGKLHhipQ4GpfQrq3dbCqjxJxrVeUnNkDReZUL6niMA5sb9NXjxrrXQT1LvzP2Y7WSdrwWrAWJt1C3hL",
  "key8": "EbdwW2N8xDbrAT1PQ5Qw2L9k7vwX3RDSJBZzJe1jjVXN5j8pziBZNcJL37n8MmxEEJoRGqjoS3r9ZhSSz5hAstd",
  "key9": "5buovU3p69ab2zmnK4fJhFeYG2UGp7ECJyGnCYxFvxhRJqCBqqLkk7xQQ46K4Brfvu3xL9wQya2LjtXBAnb1sLHn",
  "key10": "3PJvkVDpRc3i2bV9N3pzj1VcZRNWRG5q2tq6AA4BsF9yYnbiCtWotqeyK3CGqR5PiMZ6ik7GsCSmv2us7BvQGF5W",
  "key11": "5Z1sS6rffw8Ep6F3aAdayvLCaSvdgyLV2T2XdpWGwDJ8mWEWv2i3esPSxqiQVnoSM8ioLzx3LQBLwwjfnkcAoacn",
  "key12": "32tma3KYWvXghCSqeokBmBRTMCrpRmWhy4e4FH5jhwLXxoE2w29Rxou1XTXcx9yQ8Ly4MvRg22kE6Zb49Av99ucm",
  "key13": "4KieMEBx1Jt9kRxSCohZJKEPDze6wKu3sNsV6yCm2vKr9iVAFQtubKNMb7C5cn8L87KbHHXvwBC9Sig3haKJpTbq",
  "key14": "rVeeq85eFNJxzYyL29BKjgQiWN4gpmA4c4aFuwov1CnMEzJtYcZTfDSYN2gRj5urmv4jR2azkwNDCEDysMYMu94",
  "key15": "44VzQkfbTpauCNa1izWTtiVJbnThdNGVHnJVwKhEeSoGGQR4TiVBnzESCdguYkJXLyDbimGgMT4er39SRa5DAk3m",
  "key16": "3F4DKzgqX5CM2PotDSucAeHFxY64FLgJ8AEGSqbAovBq2u19rcG14deUY36jRnEraKEzTRgmCvibjA4f8uUV532F",
  "key17": "4fZHz327TzHieFLce4vZmj2UHQmAMuVJvyxsS5ua4N9X7ZJdqYdLNREcapHeE5aWQ1eZLBKC2AaQMh5CG6P7oCsM",
  "key18": "5n1UiiAgWYKESjUBXt4eVLZpAWg9sxCwk7Tm9rtsRgBi1yc8AtrTYwREBupgyYkVsguK9YpZLRV3UnKiedtQgjFG",
  "key19": "59rY8JrLH77QjqhZ11rfnqYHfiejCQWsdgHzCnhrQ1MuxkXjjBJztBrD62r1opvMMar9d1ib7rGDHvaungG1zDTc",
  "key20": "3CxEAHwZys5zSHhrY6hhXnKicUiw8GMjtaQrFN3ZC5hLZKjPXwdkYfQQ9DjZL3zgNguy6E1qp6wqoo7BqDnwbWCG",
  "key21": "5HXDgq8xdPxhg7U8MZvuU8Wd5Sh3zwvKbXgiP85A1qbarcWGbHz6o8ty8TTf7qiKhNYvECCNicrRiLdgepPWMRqQ",
  "key22": "5caE135r5musforj1FRi9nDLKboK9BBnVBYxkfQgsNtCba7kF1NpDJE5Utsn6qvQ4r4WXuHbft5BwyXYuaZ4amJ",
  "key23": "2ydZp85cAuLCuGKYjQ3WdbgC8MuY39KAKDHVvMUjYyabXnjTdDRr1MDxg7xDhVEsMcxhzNRmJHbNxY5fAM5Lx3xY",
  "key24": "55b1YDM2FZQHv9FjMMZNov9Mg7Ya7cyDsm58VKX3XNn7FwUFh1djZUuTcpLNTuRppL5J5uJFxtMPJVfYFL9csVS6",
  "key25": "63Toh7GN2PqqArPXQaF8hotxGGHM7ZzTXHRGWNTmP9wNRMvcdhMqeoMt2mkWb27xMTJcVabWKHV9WDJcgR5rFtqd",
  "key26": "5384Yk7QEWBSBNHToVoYvU6bH4dyo7ZSsVP3gM5K8rnrWkHU2ZyvuNMXLX8M5D5KkCFnFs9cgjZ6YzsNRXvVsjpa",
  "key27": "54vGztCVdUWwBL7ozsKJebtCNbLvp8CFbWiNqcteiBmAiCUD1X4j8cfvs7D3L6UAKnTQtpoLP6c67R6ihHcjcCLS",
  "key28": "5MfJEEnmUtBefQ4iq6vg1my7jX78E8m48LJK67zLX7yNjCYP6d1wRodvmhKD5xgRS26Kwc6pKHzDrzUDb7fQSko6",
  "key29": "2SCVeDWGDA92q88jkowC4ew3yx2UuXdo3CBjWpjCKBzrqgHYwwR79RN4CCxT9NSrPfv5MNMqhbzR5T2Bp8c2KcF6",
  "key30": "3GHT8od97twAp88binL4GYAwiDxFe1iwbuEX491urnzCwkdBJqgHSAfX9K4KBQPACBUALJ8EJzg8RiiibLZqTSMC",
  "key31": "5D17fA1DcE4iraMMhwycAQZrAYeAiXE2pC4SymaaYgEcJgDxT3mwaNysbfNdCdfvW4jbxXtf8HL5D9S4k1AXUXvE",
  "key32": "2Xq17soNd8HrVRXf2QrcoCMQ4q7jzRQqxfafUFjq9kVuPnEqKQwAcdehV6wywBed9PwauVk4Sdmgz1LseP9ZjvLz",
  "key33": "4F8E2pP4wNxdK4BVKSPvezJ9s5JbdoqAD8LKbrZTovSe8pFhEwYfb9ZTas1uTaME1ARHrRseHawGimrucRw3tFjo"
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
