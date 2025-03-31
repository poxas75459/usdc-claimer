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
    "3Eks2b2EjGSeFcxvVhCZGyL3Ubsfs9WYVsJt8UtDdLRFfViQWHoRWcKKbsUNQBucjNQv1gJG61LnqNBbSRYrxV7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3yuLEHayZ7eEHStPBpbWgpscAKwxjbDPA6MAg1t2EqYomJ27MZKSutP3fzmScM6gdHBstJAbYpLwA3Uibq1GRX",
  "key1": "2eytX8nhqppp1KeaqkRREoPgyPt3z7dx8AQ7xPVm8UPKTJT36yJnsRkWfdTErZaQ8S35zNsJMfe4UiPdgbuZGiaY",
  "key2": "2LvDjqzQS85VePw1Eqks9Rx6Mc8gm8LfQiYwpZ58CG3ThBhXnqH6nVT9KoL93Zxr8mRoHvdns5E3knCY9nfkSwpX",
  "key3": "4nS6FaouyfvsEyZYWyxmcgSgbrLocjwU3WMuiKjigRhtgsv3kLBdW98Y8dNcFAg9VL3Lt9kTb3BoacFcsNSQUjDd",
  "key4": "2jNapUiK7aoxVd3qwayYZPwcrP1TEPu4d8LBnsu2WKXRdosEQydm2GsAjAy5oqReRS7pKq9ij19RpESxiR6ZYZC",
  "key5": "2D4hUpB1EY75Tk6qV6sw8Mzw35QPjsG2icgz6GwLn9zyPNpcmb4X7ZmSNA7nqe9ns2UJYKe3GcsDbL9p121ZQQ6r",
  "key6": "3SiPivfYoLoYAz7CCMy9UN7ArBegdfNX3gRDWtjjVZGHUweS82SGuPBAEE4hsrGpmdV7rwvBSmPkRCENGStwwEWK",
  "key7": "4DMkA4o88mKzz1q2Vdz6EKWj5YZ3ED8GXLfF8rS9SxxXz4XpRdf2xjbTv99gkbgvwft2CSu3zVeevhFXaqfMzKzF",
  "key8": "4wyFfRh4g5XGkDWKy3zTvpq2gWGAE6z4tAxDa56CfGDjuwKRikb4FX7fHskpTS3eJQ2MZR8xJRd3ABQnscDvwjWk",
  "key9": "4BobatasnGzGsShmviegfUz7vnybUmCdBnJmFwRKTZf4Afcwq1vevszAPHzgnNJbDCTj1tSCrccaff28fegsdqmq",
  "key10": "vE26vpiEmnyNavtzJic9YUGAciaT6oeqDWHWJSp7yvFk1t61udu5Cf61zPhd6EN9E8xgi4CMyEKcfudTf8boCYQ",
  "key11": "4Qwk7zRrLQ4LtbLL1hr3hDGKeJGAriTkGb37W7PTje8nWEbuGXBoDSUQHeZNVaPgG12aPyN8wtpNraKzebVn56fh",
  "key12": "5s1k6h7HJo5M8b89KrQ4AdNt1xCBWYQ1igL34hCyHw1HNny195jLs8UPEf85KULfu32Xu2JJBsXDrr7mLHmfohDL",
  "key13": "5fuMmVKKPfZ9oHosHyacCWTZLFfLZS3AWNRw553wge8igxSW1E4C5EX9kY6Ko55bAtiZfGgsoXg8qYQenW6vX817",
  "key14": "UDtveUnyk4J6n2tvy6vEiFJg53x5dYRD6CwmRzgmAACAo7iw2uaz6SwQn9u2QyTYSaAgrgmznLwEVHtJxKmaP7Z",
  "key15": "3RuZghhdzunWHdFxfbGvdEs94o2xccq15KL1WVS9qaSgoZ2Nk5SjnWNvH2gJXcihX5rwPUKWTMLp6p5SMfuNA38x",
  "key16": "2PvvQuYL9xaGY7pTqgaVZD1vmHFB2f3BFgHRztbgHRXKSWHYWcVACoXMKD7pv29WwmAnz7VbgRk1EQdJX1jTf48L",
  "key17": "5Lo5PcbcB4isXbVS9B6b2cC4frzGf1eeoVSDFq4jTJAXU2c8N5jMaSt4grCFjQ2hGUpnsJHxMUJwkK7Gq1oRJhU3",
  "key18": "PcJT52UnucAVQEQfgwYKBfPhaUgQosAnJGaQHXXD1kEnov7CtyUHXe6v76T1iX25i3kM4czT25HA2WPaR9HHiaY",
  "key19": "5ySqCL232Sf7svmk3FhibGTG9vTeT8ev3dmjUqE1JwFkE8PNPvjX23FHau9Q9ahAxKPe7RpChatT6wpGThKPXonV",
  "key20": "4X9x8iXvb1J8PsV1jG4T4SQDhd2ESEqFRhJsqHNUxqHkL3BGuo28fAgZrKt1cm9g32poX8uLiVq3MMyLjSXh2aEb",
  "key21": "SZELLUzUU3zt72V1oqRmxeCn6HWQGPFzTvnhywkc9AUQWWBcj59MmvNvxSJF2wwZC5A8Cd4dH5KiM4gf8ptt2k5",
  "key22": "4MaVjTYWvxSo2qp2z6DNXWRtdVSDfjpFc9aZch4pp7XJYYRZEVtwkWQtCJf2TjVJ9wUdkDe2Nb2qQdLMQ14rPviL",
  "key23": "5HkewPZRzh98hfrhNhPCbManv57LVhDwtCChjjAbVtUUfg7RjXXPQBMDRWHUS4zRicm5Q1JXM949yJjQjCJqFq9c",
  "key24": "5ZFheGkg9FdnZ5JAHmZFSwpydoc2MMiPcnAVKGvJArN4i3kJPK5KD6zGArKXuwm71t6wYJJnyL5a46fBR6UFwjNz",
  "key25": "5hD11snr8jUihf2VwKUCo2ecScUjJuYvEhsudzfrLBZaZoHbS9dJhjpL1VW166CLQWnHf6KHQbLkKo1dpYS4Zzeb",
  "key26": "3okpwGc9TWekHE8kzmm3RWLS6W52rvwHNbufbC5BqSzULiYLqEH39tzzjv5qQqyKiv1T3n7Mk1sLbLgpVP7oyptS",
  "key27": "4zf3NLCtz3gxt39P8uZEhqyAdfvRiMfnVmf1iPMDrH7oJ2zPAocVJiqeqJNMtpNQRxUpMK3yvAPg1aQPdiGLirb",
  "key28": "4UZTWWAGJuqq8tZ8MD99MmaM5zV89EBcXSPKTh3SUpHSyo7QfJvv7W26ymzJZPSyyfnaCFhBUe7FGX5AWkZZHsrv",
  "key29": "4aUVSNKNdysjUa424nNvwdmUeqNgthkTjKwBJecuGxPpgV3DGkof2eQiBySB19SMM4rtE2ZdBgLtMWzMBqwXQ2kx"
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
