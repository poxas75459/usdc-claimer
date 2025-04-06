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
    "Vtx6CNUz9VNqLZXdZRR7x8KAkTiD9v7NAjmqp1u5Yfj9xrgnzEL8kSXoMK5Lnsj5EmoCkSVHpmBGjzi6H1zUmG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xebL7UTuVP5WsebVh1h1VXm5TAD1ULn67QgyXap7t6E8cVwDQjMi7Ecir8akewquQ8o3NVY2gzQTbBMv1hGa8Zx",
  "key1": "5c2UV5yP6hjz6JEmdM2CBr1Fd4aChPFZXB5kkEXknw8FDj5uR4FyeQ8zZRkmRLRmZnFxoXv6xKQjEP3SUCVwSk6H",
  "key2": "52XMNFmy8BQwhPs4nYEpR7TdDBim4L2s9JcNT7xBiwTaj7BpaxYWSrEAgRrPNusTAyiPykdeat8jGLzkLUUkVASb",
  "key3": "3QY6aCMP9JZ9a5qcdD1z5WoNQzJAoa3TppTzWxnmZD2qdebF6YGsGuWs579aPez4T5vPmt1buGeQTJoXHh5nQG3X",
  "key4": "5TWHoFNHqrDCGAxzDVU9hH9xTYXKrMJjgKuoQBVdMs4uTmysBZMtwxiWCZXJ54dzCp9yBRuWULG6xv65SeuLVeTk",
  "key5": "253CaVBG17XHKz3V8H7WZFChQy825qRhnEAhWmWrNbftKano59Bdg6J8usB4bGMnWDZLnUfucZgGSfijw2uEqxFu",
  "key6": "4bBKMFX1NQx88EP8VABJyHaWbttre3GDc9rmAwSbRJ6PzHoFXEQ2oer9VAxanKKjvba6Mftxt7NzCGVs2z3vXht7",
  "key7": "2NgquyWpm59JALkjQW2kfqQp2JoNvhqMobdekDMQAdw82zcoDVmLthu3QcvCEZrKkRmYHMRDQk7f6aCyuvcoyiuE",
  "key8": "4AY6rB9joNjYtgbvLfpQAHDkZm8ZEzu4RTq9afobL8PNbPwNhLdrBMpAwDzNaD5Qp96BJBqdzDGKjdDQmr6RRGCM",
  "key9": "2xNbt2kGoicML7rAZBQhFoCHmGaMkeZpg7SGttAzrxcWm2Nc45RuARPpBG28gqPivMZgQVnwHGim8LgX7gMUYS5u",
  "key10": "wfSaQwikm6ECMf2xJ35uQwPwQedUBETeDmETmysFoyAVfbF4khSsp5W1ZZ1CV3FXC3YgMMyWAkYtQuWe83oGK3w",
  "key11": "5LTPbAn9VnryZtdy1eqXNjNPhmz1T7hW2LVTGbmh56bmHAbBDeYhZb8dY1WXVK6WMcHaJ3jRtbP73xtTFm5ND82n",
  "key12": "4cNmArnYkZHTpWC1CwEuoTvbB47eoeGwPowe1gExYSZLxgzaPXJPxirirkTiQnLyC3AcN3dJAEagtTxcQsK3PwHf",
  "key13": "5i9pAg5i5XWbdK3uwhUhN84NAxfrSXR3ak3fyaKu14sFaz7nTq8rdf8LqnUQJfR3uBR4pNt2478HUxVBaubamD3L",
  "key14": "vcSxWBWsCntAtZXw6MrNPK7qMdTZFRF5tqYzUJ736bDJJyg52UnFL4BLDkEzdarfPoMXvRvYeBB1ZdrwfkC46e3",
  "key15": "5hFVHf5kYnYPkAL4TrBF4FBW67r4XSQREqeWcDpuFdcG7Nhq1jiSmd5SeWhgZsZ2AbNnTc96kW9tUp2JPwcXtyet",
  "key16": "5ArRNFbQ8AEaEVqPWfvLaf38S26XwUnL631Sz5SUZV497uNAZEA8kytJw9bS2v9v4d2yh2EDP2ybhfnngsZJVwp1",
  "key17": "4CdPbba7UQC8R1fy8LVvad45uyM715d1XiJwd8hVEB5yAzLS2MDDo7s8Ypz6Yae6ayz94P781fQHEhBqGdMwPTZ1",
  "key18": "4ee2M2EkbNrQWn4w6gKHZtKuw2TbMqNxdJVQmW6dDv7bx7PJcqN6Gm6PXRMMpwbFSzU77p8fPHWPi4AP7TQZvD5o",
  "key19": "6XjhgXr7DQVDzQGPLb4qGxhGQbqgoGyidYYBRcX1iYEDRqfTAdTpm32HEx3ou9K8w9fXviHSqHgd7nz3dKKCBYG",
  "key20": "2aHdU6oagEWvE6ZuAMZbu3UdiipgWAf3GgNcptwci9GUuFdWSzoPN19inRA15N1422JNy6HUXGhQ7bJbtPTRFdyt",
  "key21": "2v2EESRfqiRghsk7AL5AMnNEd7EEPzGzjsyoiGjAjYj2zStJmZeDJzjdSGNDabA1EWtbcJiyvDy4yvsSt2zbFdX2",
  "key22": "wSZwXh3PCmWFMehTPyHNy6cSFpcmzKLmPYRcZkXN9Xeh81gdGcjQoBzrX688Zn3NskhKJt7qiPoAjr6HLbkbsaB",
  "key23": "2jSwDKXpsZQujEaJHxBu1qupYaDFSDzL1q5DZ6aTPPmHPGQKJvcMygip5eMMMAj2GmbhXizrFoaHqRXQ8oo7QZ4K",
  "key24": "26bCGWfv42XnqgxaQpUrNtPCU1rUHu8E7VVweqp2JS9UfC2iyBUuMTxc3sA6oweVWFkGdNiP9nfq1SZJpkomSF2Q",
  "key25": "5UvJ1P7bRzxyrGqastgk71q2BgbA8DQhcemD41frv5BEUmsu6wuzB8sKqaFmbuC24xX7iYYpde3XXXVcXe6gS9wM",
  "key26": "5KmWrfJUxksLK6Cota5USzsRmjx4wUYEEL81bCBYCx9Nvs4v8Fe4zFN6Fd6Y893dj5tJHas8tAfvGMx9KRgfkrUW",
  "key27": "3bEEeGBtP6h977d645YvhB56VjEyZyZBJxSMVMCRCyU4Ahd4XyQbGeZzCFxxvSYQ39jGLtk26RtQ7YNRYyjKMjJm",
  "key28": "5DAH52fu6CVxtVLqEtz1WzsLXYk194rbqQ9W5tsmWzR5qktGXDwtgD1wJRXcTW6zU9nDpUDzubXJANpLzXEHvw48",
  "key29": "5pqAXZs8CfTeuk9jrPCbWmwQqvkwrG9XAA8GUVAmmkh6XA8HCyDVikFoCE1K3mJfp1URSsxAESncgbZZxRcama1q",
  "key30": "5eD13KC5168dTaY8Ss1YTsgsH5xqZrC6fvPfzVrVF8AEKq6EW7qmquZAZYnrbMnr5dq6afCkB94AeeSEUJt7qV8L",
  "key31": "4FPC7rAp4QzduTdc9dPrEA3DPZbCAABZVkymdxXNwEqxx8KHXa3WCoT2huQ5Cn9e2KM6rTBcLPsvEQaH7YfDRtPP",
  "key32": "3ZnU9MgJS7mGqfiQBTqTsgsUXf2Xi1FdZNyngFjKGLJj8QimNWQ2HuUUKP6YfmheXhqDVXrhzHdgqTuffz3ZxoFx",
  "key33": "647T9D6fxiBA5C6XsZJ2jt4iRzmuFhHdAsG24wn8ovJHDmCKJLCgS5tb47XsAw9N8UbBaFpgzcfwSG1y7DSQFcN3",
  "key34": "2evZKeE1MYRHgv3pg3chXY6ztmQw6Zjzd3zF4DExBNM1Dxwg8YyJpttVJLmZFRjAATJHi3ovBDRYfNNmfcUAqEQZ",
  "key35": "4qurxV2aGu8AKA2PNaEeo1FEpuwrDbPPUGavLDQ8zw6imbsm1xRKvvTrC5WPsY6DfUnWd7JhSWdoHw244qBMmxwd",
  "key36": "3M1HJTLSiXrJ4LKGLsVLtKpTpiYt6VAKXfyXVqtVrUDn52bRQbGH29oupBtjagnGeXHR2a2i5LUPKaxQyQvpXaxQ"
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
