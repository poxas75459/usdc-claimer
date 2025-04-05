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
    "5266mvu1UHf4PmBQvZt7Y5SyAiucxAaK3o7STWkSagr8KvAKrS3LNHyKwwrr9nD69tsUG5vNcHYgc6gXBgheTAmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kqVvHc2i9TrPfr6zQjTGV93uLkxLVQz3qpHKmaxaZYoJutRb8rYdiExHYNn3F4S5SUZbiNUvRUBeqtmRqf4BuVi",
  "key1": "NZfYZsCjPMj1YAtVoiaBnfyDSghoEPMXXGvVqnuLWV1yiJe2ovai77BYmjWxKP3xvbbFZn5SF4eKrNjv47j3CYy",
  "key2": "5XwKjtbSCvjFTdFosygHKdEmapi7kKiRJGfq1ELoTLBtBd8cB9t3f3P2S5HfZxunQg9Ry67gogWarT7iswykkaZU",
  "key3": "3Bzf2nBbRCy46vairESQ6eoQEaqUMChtkCbJLYERgX8UUiVRMHyavN5AzazWM686QTqHQZUP5g7sJhgQ7gB71dSQ",
  "key4": "h1bvTvbSWQXhafEsnJ9DPeHsmuwQEuXDhaT7KZ3dW8dWHwjQBMAfBUqnUhyPVWqfAUycUTUnkR5pUejjQ5s6W5G",
  "key5": "UbSRj2k3Gj5JBz5tNcQVRj4t5o5vgMZSvySzhFcHGuWqXoQx33PHejbKe6Ykd35FMZ4Hr8gUFbxVsFw4mQKYSRV",
  "key6": "eUqBvmF5xiadCs3UCoaUc2SXQVBSXra3AHvZPytp1Vvuj68HEsVSMFUBd63C5uLhgeAH8XCgwQPtjTs8S4LU7PD",
  "key7": "3E23Q9wxK3odGfesRkNgXQhwMTFv3F7mPCjebi5ZRRJsNEcCsDHt1Z9Th2xf5rKWRLUqUCQSDkUNxGV4jHNEAhRT",
  "key8": "5fntoq2FMdoMcVfFYHc5HQ6qKbkgzSbkJ2Dr9HNpUpPMsXsDLAviNzyxnDb7RRtLUgnzHuaBveqtzDkDQzn35iX6",
  "key9": "4KHbFW3TcvYDyo741MjGejqmQiDdEEHfVp9m3bjohnsbP8mRwEzTmcWRskQmu5U29bnBD2vcPwRYgxvkWL4uNSF6",
  "key10": "35G3FmkTb3bGwqkCwkYodogQBRA2c54VghNRjtx2adtN3THg5k7ubi2JShvZY3FCt5TfcbAptMfiyCdKUvtHiDE7",
  "key11": "4qSysnevC8uJFvJAZYzEswQsa8uqWsd2i7X73RY5GUMk9FAerPRYMg48VKSbTHXy6weNy7TYGUvZtBusHjUZ6LXG",
  "key12": "22HvVwdUHYJ9ARDb9o4dTwYdqiJZAprHP2uzdKADUba2BXXXekYHJdUp4LNWSmB4mzaWNqMBTEUVKnSdoqbSGEGH",
  "key13": "27AxcyRSPvuRaqyPD76smSDZqNKMCyhS5EntBG71vcrJEQvU59mR9wohSijw6rQbHdwkgtyCpMFbDrdDeoV7jMUQ",
  "key14": "3RKgJp96aT987SacfV29nad2PouhWGhmqzgwk8vUfRbRkR6nzGcM37YVytkqgrp3TxAuHDnMiLNvVrnMzHzDKz7r",
  "key15": "4R2R3gDJ6PeJij4aZE5DTorjA4bzfZQNjXauS39wfFE6CPFUAi9RvDHCz3mswjsbTceQjUfgh22ixCbErLzM4iMs",
  "key16": "62NU4TGpH2fVzwyH4AJVK5sWzXseE1ytSpYkkdEGgE4b1dXGxKF419yEuqWRyMHFbemBCA1WjbqofWadhvjX6pNZ",
  "key17": "52VrJLFE76hyU3Ms5ASBbt8K4hLtVoZaCfWevLJSEbxS2iyHGiXRJWysUm3csUWuz1Gyv1NEi4zWHHRdsGaaXPUB",
  "key18": "4e2mtLqiR5rx56BzGhvynLzL1wXNFRvEpGsbZrHxhk17zefdRviJYFfHeex1jSybpWGxc3gi5p3fqQq67SxM3M7k",
  "key19": "5E5dmMbRzPHsnPG64m6EZMXmn1TZZz5QhKihYCWS1gQCuv984RHPsYeWb5xbcxoYivbQ8iCkMc6TCPdr8fjMUAFL",
  "key20": "41PZRddpABY3xS3ofTXe1F9FRbk3nsWeM8gTR95AnsJGCBcPC1CqaXGr9CTH9cKP8KRrE5ZEm1AGJD7yT2ScHB3f",
  "key21": "SAqRB3Dc5nrVphdwVPtDVxXP9Db2TU3FNDYPa9jQ2z9izufJheaTUkeFgxYcAacMs5hFgZUoxxTfS9ESGJJ2sWk",
  "key22": "wdHBc7GProwVpYk8dkJTjqGsAyndn61oHdjWCXibgtqMctJ34npDhKoQDNZnH9Fbnkw9CSWvYEAKDAJzGz2DEvE",
  "key23": "53NGcWFCxGsPjYrKFE9NdJuNkGHbrcizpJaF5amjRttfzNwFBvyzn8gHBcd7DG9jw6VzWJtFgk3SAfZEGr3z7nvQ",
  "key24": "ZmwhP53gqimAeV25bkC5m5pVfhfiX3Nqkn4BNEhcdePyAF9GQ5JKq974Fih4apyDtyA8gKDF8pTnJRFiajG6GbR",
  "key25": "5XfRs9Yk6ht5zCqamfENQNy63UbGR9tdSYgMvVrj1mJQCozUbvXi5TnJdYYsfRaeXjkv4hqXtd9TTe9SajMsCS3z",
  "key26": "27dJyrugsw3s7B3G5YohPcANjmvVCp4dVHZoKcoPoehaaCw2geYsHwb814mdh6G7eVQxkDTwLQoP3hHxrmJ2SUA9",
  "key27": "33ZepuhuApWQyhPA3HZGMrQr4xbPH6D6od1LvJpSzHszV3ZjqKCzqb75Ljn4w36BccyPALu5uN2UJadNsRr3VjYp",
  "key28": "29TMgCxiHrs3nY4erh3ChcLTGuMyjGLvQsAY3mrGga1uiNSqZPpHsLSKYuv1jzLPswj5Evm5BNprF4kLTDDeqQ4L",
  "key29": "3kqqwhaSabmrXmHdYhzgSUAtqasPYEByBP4QVBhtZAHkzJZH4eFDYHobozcsoe9VnH5yjMLqR8ZhgtC6839x7bSo"
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
