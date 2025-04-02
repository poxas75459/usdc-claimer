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
    "2vfDGuGVsMTayTSF5fhEwjNRpc3fiU1LAJy3KpPQz1n7bfvphXpgB7DQkJRhzYcbNeDyp1LnXgGSGa8kCRuCNF5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCrRAXkUqjdSJsres3JBobKaQ9GfUK8ijHEpk4rWgQ6UMoY21NLS6LA4FvmUu8LZY9jWjvYY3dhNdZrzzGa4yaY",
  "key1": "2aFR128fNoQy14iZmGRRwgjYaSm63cHfmdvWCLuhiX5iBNqcpggQYxsq3VD3XshyXbsCrZoKTDjQteWLm4aGQAT",
  "key2": "5EMKK9wwVJNVdH1hqz3Scnco9pjDFaYbDsrW3gPaudGmZRxEMnHVJpCXUB1nSTNBWRjdTEDnKNK968SXtonj4Toa",
  "key3": "5sHp5wS5cYLW7zpfncZDqm9euEAie2EN9H8gm5HuS7ri7KEdBCFX6MDsCCmi7XBWU3B9MnUaZ7aCAGLG4BN6Yb4L",
  "key4": "21dgo3YGM4y8fWqX4ZsX4Mfh2hWnwwe1hSYDdfeJoDSQSGiE72Kmedkb2xAFiQZfLytbbvnaRKjTvPyctc2Z7eNZ",
  "key5": "53xf7FUkV9B3tJ4PmUie54HJiKNvVC8jRDqjNpqUYvamnHkWrnNQxQqM8wG71e3kiBbFr45WDqpkvBFPNn3WyHK5",
  "key6": "2Ry7rc5c1DpnshFDTySDDszRyDYiv68fS4AAh64kQyyYypV4x3oq2jtRq6DxXKuRkbP7B1vNzfYLnBAo7hR22pox",
  "key7": "4d27DhYYRwmKRr917oPoQcnL5xxgspBnMr3EYZ4BJz6Lv3BdcwRUYTT7GuRuf7BstF31VdPkKSFLDRjYxR4hxuj8",
  "key8": "3z9FyCdknJxJAvss84AP6FFqVSYyvwuCUb62RDU8JpSab9MLjZWzHBta2hfdEre7jkaQ8uim2tiX4mvdG7CmiyZt",
  "key9": "2hQP5GUyHRhVVWQrfmpb29hH6Hu67dxyyeqAj7AED5sAKQSHvgmc2Zjet14MvJktWUTkhbbQV26RCBSrF5gR8obS",
  "key10": "5aEosh2YzG5LJZAzpiiCiniMzKJWUWP1ZEyhpc31aNJ4AjqqBYgA5vbNiCzvL8hj8UehrJn7TAetm4B9h9vXZPci",
  "key11": "4WKLQhqXvimKcU3Kc5aocU7zD8XfnKAjz5vU7RZDNn6Ahm5U5M1kQxV2auTrTBDa1s5pdGxhUEN2GX3Uy8QEBnJg",
  "key12": "362wej6cm9JSA6WQEWUtSy7LG8P2VDG6XPgR4V3sx88smXAtuDCydUh2VcoPJaLhBVULb9SFVeLaeoeuCB7KhzXr",
  "key13": "4NFPkVTbfmXEm97FjzpHsUt9RrCf1ruEruEFuHWwxDNopdQhaH9eGkQesQRVA87CLRkmHvhf4zw2nPCBmxbjwyV9",
  "key14": "37FmSSpwdoC6WMyUSdKQNL5NggVEbZNUizUrKrn8MUxh7bGUSvsXn7NWykzaBo6YPBKiPuPXP1fxZ32xEut2nJXn",
  "key15": "3S8XbYDE3mPsmL95a7jj25NVbhmi4NsSE8nLpWo6iJmMBX4DyuhC9cFJeTwMVpmhPtozi3Kt3RJQMmh53B8P4yzq",
  "key16": "25cD1buKkY2sw9tEap7MU8C9Z88myeE54jyJ6WTCBTCrdfYKka6Q2ZB6JLoBVi1LRBaBxGVKTmAQ3F1E2Xds9aEG",
  "key17": "4srwZ2LFxSwwhVYF846SfDhLudZdohH1fDXiz841nBsGYkvULLYL5hmdMfnA1htFmLHXMiA7JtNRooJK6Q2KGiQf",
  "key18": "2VLd8fESt24KhkqxNPy1wePbQo1qRHhNtbaVH7ae9CmLtndRaBsDViJ3R7T8J7M5rw3QDS93vSXEgcSecMwk88Up",
  "key19": "5WL1gMTerxesf3aQbmbZkpFdN7hpAZjYMp34icMcSK8qUx4P2kcMpcqivDtndYbQz9CVEQDk9thgKEJD3UyCz4nJ",
  "key20": "4FwWv7rraPzhPqt9GGK4xxZLudxJTjVMkrTr6EsDgMdLxRs8xRAM1tQeytmrG7CXes111DCG6FmYea16ddukFqaW",
  "key21": "5NEzEFEa4Az79S9H7u6NjgbALq5Wzguuc6V7psXAjGHDgN6o56x9298aJ2TZ7c1jVgj72qW4mnun5MRpwSHGBfxb",
  "key22": "2hSFxEyix6rbFqtqYenAbZb4rGtgUpvFhhqtxXESyFS82rxEEiVb7FM3tYEVKkqasSfK4Voyuh528a4G6jpLwvnv",
  "key23": "2pMtPqAbuuNb8qyLDWoLtp5YgTn8nJj2ssKhroyiP4YbZJGivsLT1P9gHJTDt1rhW3kYtUPNhVp72o298KJipxfq",
  "key24": "64u2ogacVhSB3JFzvwyhayE58fpHYHVaqQ5YvM8rddDz8qjrBYEKTZFJY7kKi46819Yhfj5QvxvUHc7hKcwyntGV",
  "key25": "3CTgZDTnVUnx654nQ3VzcyCAGfC45o852GFRETEKCs41F2p5DfQeb7NxN382tWJ9XZpCmV15FkNhQZtCrFbyPQta",
  "key26": "2Yfze9PFdeTBzmHaaKpojj9fQ1Tg25nSsms43gUyoTE25p9o2CyxJiN2d7XBf3oRsfNn1hyRcVXWQ42WVfi4GKNB",
  "key27": "5U7KYCimq44JpLtfK9jNJNiFg5x6JgPgaxmRgnKa2XKaB8k39Dpv4tpPFudoLNSLeqhBo4KFKwQEqksSGc5k4wF4",
  "key28": "fzJmrE3qy6UehFxmotkcCdeAUY4N7TdQRewTHpgCTz7K9V9aeHQCYdjnK9dws4fZ7DHm1HbTEptWYJtRGMdmemW",
  "key29": "5rHh6btDrwfHcsmj5S3h7myt8oPqYE2MqDokApNDcKsNLRmd2Y4Nmsc5cdqiNzRrqJKLdpwrxasjQCRpXXtddWZX",
  "key30": "6224dkJbAPh1eP52wyY1nKgeJENQ26Lih9bt4GL69iW78k2NfLonz7fFwquNXPDQUcyG8eYYcZhe1CyZWYanBtqA",
  "key31": "3FC7zojanFrsK3E9Ko76kQq7Wmm9YhFDvHhJjxzmeWVGbwx6z3iEmaz4dQ6qszeLAsGk5LBGq7Z4H5yiLz5tfsyt",
  "key32": "2yV7EjE5nisJB7hnMqk2CMb5ULEcCPvDGog44Y8c1WA1vu7jk3QGddqUsUrFj3Q7Fdpi6LGorAGvUzAJ8bjFPj88"
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
