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
    "tB1k8cHtRFKv4VESVsQg5XeKS8dUNAiEPaQZbTMcicFnJAKYa1GgCa1zvYu6YXCaDtYA9gCFGv2h9xQwgaK129E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ed1YzCJ4gxsofDiKzLtpCc2n8wfsLmxiHTNATdcHsAWwJca7YTtWjmSxUAaudrj3AJyhmcrRyvLgZJhnVxFfCm",
  "key1": "wTrbEeLjJDXF3D41qs6NXTnHUB3zgssNK9s5rWJk5s5ZcU4ASTmJbw8JrUDRqcdpYu4PEunvjzzu3ThCqkxYnbE",
  "key2": "664LTEyMsGarSHsJNa4oUiGH5pLX6LA8wykKHSVPN692T82AfWTxxrR6YqM3A2BVBbZXHE9EuddYEmXrWojwnU3a",
  "key3": "4CDoHPX3YSLGi9KUYHaGVrVzWms3Z1w4gcKP9E6CFjgWGFiXNSaMPvBTchCdZkpYwdPTqtg24qV8ZLUWQtdJt96Q",
  "key4": "5yb6tjSBEqQyzYoCccbsQbFpC6un7vkM9GRgCNq64RRPU28mpcFjBWRWRJK57YfKFCvQqakaD4StakxjTRRiphKC",
  "key5": "29LgSgAbV9J71dobpCo29LhgFEbor77qGnuxj968BbpJRj7ruzuY9ctpk4oDij65X2qwETpnRmvKgAuwYYFwpqP4",
  "key6": "HcYgGmjwkoYiP6NE2AL8oWvWo7ojxochMoKkAv7QZPsgrHAcoLYw82AnGRoqRkyn1w7uZTZWwwsdeWaFtphvk3P",
  "key7": "RYqTyPRtAbQDgUYLZ4b88ZhavW1ZSWy1fLHyFC3ACNvbidiUYGQhU88fk1NMhA3NjcfrGze9EGd6uhT4zmwS12s",
  "key8": "4qCmAgyFjB5H1QjomHxE3BettZ869i6Zo3fFiYq2zhbAC7aZq1eW23RppMLUnZtEkBza2zRb8W1CNwf9HzTdMbMo",
  "key9": "5pyXGUe4hQ7BCmHkRW57yXAuqgppjhNprdt6wLQzqUVEmD1pRa5KSPtzXMVubYoRrrxj2zNPQKgpEMyicDx8uLbt",
  "key10": "3KvQRnGDaSUCYvt5jnVkUhkJxJpMnmnysDNGBvpDdWwzZCXBRfEEQPFnaXeUxAM1sJu37F9JQ4rH33zv8CQGiSQw",
  "key11": "4t7LpVhgPj8F2Jw4gxMb8UBWvLW2TxQsK582tcd3qpqFBp4wa8iWRU1dDeYvyJjABnCnHahW1gZHhtv5kEKLSdM6",
  "key12": "4kvZDZkr8yayyNjbmQdmVAW5dSJ9xWSMnxehfobtjhw1WjZb7NQfBCxwJ1Ke6X49tr4BfqsqXWT3JVpcaTpYHgCg",
  "key13": "53q7WPAiCbPuVgYzYZBpzcihKdb2NdxdLHwVAiqZhmELD2DXywZJ5SqzdTiFgruvbJa3jV1RQhja6bXTvEEeN9Gq",
  "key14": "EHjqPjnWZL4CBegURvDM1PvsJcepBVBaQhLd4oXwVhNb5TWrE75sRA6Meab24nYajveFMTwG2ekGuqQJwaSGxJL",
  "key15": "4KNRTbnin68BDZ3JEhmhNHKdBZ3EVwXAxKBB1W5PJiuVXbdHXzfRqtjrdGiEQy2ZEzdGdZ8hMnW2bf5LzGtX1bZM",
  "key16": "4WNq2rQgS36Aj9CjXgX7i5u6ZorkQBwYxZzWWEeGUyKH3YAYvxVthGsd2g6zHjEPgBVBAtBnc6bmJh2qURob95sT",
  "key17": "4eWNWLaHUBDqgiUpaAkod1xfraSsLWcLdu8wAZ42ixku9ToCVdfnEyuosc9Puyj3o8Bv6TXZB4ViqAX1fnuF1HvN",
  "key18": "QbH922rubw923Q8Cr1Mvfa4WbsXs2ki8651BiTsiTqP48SJj2pci9Fyq5nd7KqaX1m9ADwntUNK8VcPvqpyQ7g4",
  "key19": "3MGkVHna18Sm6UgpMaMRG5QnXR8TNu66j6YbfEj85oTQYdZja417gt5NZ7gnjqy69zrXJcZSRU2y4R66dHZPuMpk",
  "key20": "4uAigTEfD6u74R8hByRzpnTnQoMotHDd6xit2FCxumVakn4MoevaF1rZYsNLZp84UxMNwTyJgTSBgyuuzdPXdVhf",
  "key21": "21eu6iUFwHBhjAu7fJHqAJ1bYsAHMgmt5HW7nW9auDPtkjdMXT9Wq1ctx51LvFtx74vWH23V84K79bXNBBXaJr8b",
  "key22": "2Kr4czSx87jQoKhi2L1ZR9xstjYXjYd2kJ43skR7zH5Dfa5tFqJJ54JiuBUmyFqcvDxcUo1144R1NZo5dPnix3TS",
  "key23": "5jPCDCwn6HkbW4PH19iDrcGX5ESFif65cyPCgR18Q7o1HMG5xjw5BnAHvos6hRqCmf6d2cRGbzdAFTY6jTwTvsSr",
  "key24": "mpimHWB2Kz5uhuyVxeYapzv9EgAAmtajMZHh3FadS4FJwx3pRJKRZB6x7Tyd9VmGHfBj3tt4tpAPyUMaSUFq6VH",
  "key25": "2LTgcfHhemm7UqYsn4jffzpCVRgJxWTTxLC18Ywj3AwDorUdyrUTQsFECF2K266PGpaVSNiyisUkyR3dmKyX5ep8",
  "key26": "2RmWAqzG8ie1C34Lc9YBb5hrYEyBBTi5uiRqsCEPde7hyecdq6nn9KbTWKHTYLQZwA6kSbA4fo2bu9oUiJxYEcwQ",
  "key27": "4z13iCWgPF9HPPDNTAnC12NF3rQj7e2tBbwvujPCEEJXzcopQivwKr1SQPPzRU6vzv7ctWQ1Qr1SDaPtfh3eAUj4",
  "key28": "5FLTEaZvjMHywFpWFtjbFnZyDZ9aVAw9MFLxLmdJ2n7wHHFdBVsCsy3v69tZw1rtKjmTaudC2nx9DNxs2V3FbXKN",
  "key29": "46uwqVoTvy1BZWt5THBM8xWVbRsCY4as2D5TLgS7j5Ym8JE5fAz4f5qV8tkx2Ha3ZyT7FxxsAiozNfBKdfSGNg4a",
  "key30": "5Rmx2Zbn3C1zfaSqr7rGwAqa79XnhXpienS26k3MS3gCvVcxhvjfEqZhDih2CfBWBV9BHUxcv5ujTTb9XVbBBA12",
  "key31": "44dpeGGbWrP59ZN71toxQLNFvNAHV2hoc4c1jbj7mU9vWn4eDfRQkwEz2hxt8kAeUhZcdUVDjeGEVtdqrbFXzPXE",
  "key32": "2oSJ2hGvfBKQr5KtBfc1axu397F17xaHuHtvJ114B8Q7dSGngUmwnD4S5LkgSrnmzg3GnH2huoqhXuZbLG4h1csu",
  "key33": "3PqqWDoLM7m8Vr4ocoFGvMo4K1BSGQHTs2nfi5PFN78zeyk6QcruaGn4TuJvjpoTcuyHQUMhULfDx94mie1V3tQ",
  "key34": "3mL4wtvUvyDUkXHCQwqm1sWLujQB9NXu74gL8FBp35AFd2PSE6QRzYtunfscE2xL7Wm1WS7abvuTTA46xZhR2WVq",
  "key35": "4Bn5bhUf7dei1DW85fcn9KZ5efjJsXHKAbTNsf8CEetx3BQeu7MSPwMxXQwTgqEaUYmzqCAhpRqEEhLZ2Yqr9kMT",
  "key36": "37y3YT5EYZhriDA6SjnvBPk3p7q3vzG3rUnLNukRqA1ksxgTu2nqXW8LGK5vow9cKUv6ZHuuC9oWv1ywj2pE8ZS4"
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
