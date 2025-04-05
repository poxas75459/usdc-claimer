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
    "HWc1cow4aULUXA9dkdF4c2xVqkU64khRLbYSjNZBZeScuJN2dJ1cSRTTBTwVppqTkNpT3vDU7JfCREg6LnnwKgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5burrX7wDyHsfbUNMUPdEcEupBPGGqqdtQAaeNHWesLeZBm1axfowasbmc9dUPDZYHDEc6Lf6y927ooQUQWhwVZj",
  "key1": "3195qF9BFYQgjWgahLtBPkLjg82D1srH1jPb9CuUPuPESuZ3qaLedSey2SG4W5q9uKKSG7WRRWEyiHjgfKvnNiRw",
  "key2": "3SqNcpHT8FxfJKUsrLcvar4VReMn7NqVHknMqpgxKVWswdHYvtf6yYNts17hwEwDp91bsrso6PTF2peApyxHDJbY",
  "key3": "2xdx87dimNrapp3KxPJYLoKuTtZdMgkdAU5c77JPxFcuxhF3tHeSHcX7fiyCGC9vCUUQRwAnvaBc1NzDGmuvT9Nq",
  "key4": "28ePa7nSproo3jHfaKQDqc3stCiLE4jhLjvEwoxTCwtDTyXB5dNTBjj8sbrkd729sd4pZtcKqhaKEW5XrHcYv26C",
  "key5": "29zcbCXsRPzc2tByiMHshWve1ntv1cSBPPNKfFggZwCJziUicNWAYvpbzRygPXXc5YJFuBDMvLQmHdyZz7yHLfLJ",
  "key6": "GPAYEb6v3RD3irZZcT66VikjUaSGGSrXdpgqoEVD3rWWXixhc7zVLFB6p7Px3KeuRgShpVQF5EiCr9dyiw4ScwD",
  "key7": "3wap5XooLkKV6ddUCrMJCy6dKPa1MWW4YJKytNSY8GSgaAyyWcz8y1THef2iSchwvWiskWvyasmG9zZM1d3kNX2m",
  "key8": "VRe9cUqGJmVf84uwqjGTZswPaMgmRNmNF4hAC49uZE88nJjk7sVm1JYgBgLzvthPDRRRjkVvZyWGF8Qq6Y9TCac",
  "key9": "3Q8xAe8SefRVsShYU2SCfUBcQSWBmyGN1URswgaQvP9uspzrHnUQrXEdVpuovpvQFA8JCGGo1Lk4EMsKRhuXuTAF",
  "key10": "45GuDntpb1yxaQ94WVmr1M99x1wSLWrbhcWbyGL5uAQQKQJkAzsmMkJtbDuF3qs7ymkd55zAZFp5664dP1puDPaN",
  "key11": "2qCAWTs8XTnZeGgbeHh4RiPtKXXS26eRitDpFpPLeaZNyFiPZNqtfTMZiwiXisafmsZguvrYkFJE12GudQC63mbp",
  "key12": "3rHKFPPbYM7CGj4tcG3V4nzfb3DoMxSbNEE3eMbWytojHxk6AefEDYHXk6zgrzZ9RFFaabzp8PzM5pHnaLENuWCu",
  "key13": "T5VAfDbN9LPvEJsiQdTee2quiZpVFoPLaDHKapJZYAXRNKriRxCzE8T3TpwnkKcdDsYRQNKC94PjQoTcnwxV6hf",
  "key14": "23oGDfpjGtNfYQAx3eLZy7FaqRY54hZuKAagf6yigVUFRwmWF4hxtciUdcz8s6vUe2rFPJmpEmXimNbEyS4xff9r",
  "key15": "3ke29ggxeuagw1S6XJG7U5xbfh8fEThns1beRcT1yPkfkKUrmxNknoYzYw6cnSMWyGbMf8bYsYdpYoxMujct6MVK",
  "key16": "3ephx7sre7jTEApDqxQA1NQqKHTfvtk1kxHizo2vagqKZgD1pkgzKhKiJUhCNUJLYQiqNvQaKaMzoxYGTNafPeds",
  "key17": "29RBF1DDbKYCFxz5gEZAa9KXwaLKBCXgoxHaYFcsRrK7mb1mYGpyiwTK8xoMsf8Ag4eeq7yw2rV36s3vu1Qp69QD",
  "key18": "2YqsNX1WW5SsrYMoMNiweUWzfJRQrpAYqf7iQh79Z5zEng1gbHv6UyGh56fV9yGyjHgwFtTz1D5aKrNVuD64jSdj",
  "key19": "j5x7ntRxUsXrdtYvCWnT7xZsbFQYYMFAaGk8pK44YREmUsRQ1cAMr3JfE3X6SG5axkVvUiqxr4gqhazUkdgsgvE",
  "key20": "3TevQY3dq1b43EwNAtKhfRmbUKCm1mzYD1eNSSnQdmpGsrC4ZHhd9CquPxogxL54UaufdPvJvRvW4Mh4YSvsRQM5",
  "key21": "59Ar46siJ6pStUCd4dhhZBwRzTJaMeFoqrjT1qJ2Bo3vV79t635v3k1A8nX8CdzmEv3QNAV8UZkuhTzByDRp8tAW",
  "key22": "Kr7BsEA9tDdJ7WDqzJFhPscobuY18iRMfebx27kh4kckcNzLAVuGJA3XAL2Y62qBxUJWHpbfCCW95uVTS818WsX",
  "key23": "5CPfne9qhuNEdqo48Frx6HSrvGZtAnjx5dwTAu2Tqfb9S88us1U2P6bPP9K3kfPLDGgR9WskubrFFFvmsXhgrZrp",
  "key24": "VQ7VfgcfG9XJRPzoFomHf6fehM9FKXWRo9Mpe31tP88kcBzTfPVHoXMR8PzbeGuN7gtHuFoSbLy84ErxCfisy4K",
  "key25": "VHAnd8A3Y2Cyr5rx18VA8fjHU6DCUEf1X6iAWkjzAYTwYamwri38xVuGsVYkq3tpKYFdELBVV5VhduUH3hY1h3s",
  "key26": "35YohhxbiS4DNCx95fAZgo3ESXkKoSqxyHpNyCSoGX4tRfqvSJaYynQZZSSEhnxvHisqThQwbQT8vTYVQyVaY25s",
  "key27": "4fLt8wiwNzH9V5Z2fqqbfUuXULvfDWoB3Zx9zLSN6soH5SE6svHQRsazxUVPKtAqMy7Ku6sXYuDSsS6X5yqpH65G"
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
