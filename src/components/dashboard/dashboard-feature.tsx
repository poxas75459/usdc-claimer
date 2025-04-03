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
    "3U18ivaVBnxvXsX34T3uBPRmbNM7JSEmjohweoirB5qY98CFqEwUbZ2MPZ9cDC8rpr1oxdTNo9ji2ADtufwEjdS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhKmsaSBnrY8bECDr7bmTsfNsEc1jjxpP1SbCNxyLQ2wjnu2KJs76HEG7CrrnV1udDpGBqjVhuT4QkwhfkGpHAu",
  "key1": "y8kPKM52XRx12t7YkctU4TPGfJwZSvr1Wq1SXKwgf55DP1GXbWGNz6p8bnQrAqNLTXu5xq94bEo7cem57NFxtV5",
  "key2": "4m1kWmpNuGdNP3MsvW6mjpgb3d4KdFJYjnNpsT4hLumE3FGotE966pziiGd6HFdrjPKphG6BBA3ZhZbRB2oF4EYv",
  "key3": "5LxFJCPN7QwaMjQN68kh1YoLautWQm36PFBKH9t8Agkjvzvo7iV49bk6uY7ut4q2jYewmkoKJxkhoAYkVGmRKnug",
  "key4": "2t3uzx2fE6d1zoPW1UCkBRAZDLwhnbNhRtXDaveVJwuztDhqtB2VTRg9tTmyFc61uU21cbnTLe4SX6JjCQDZY4FQ",
  "key5": "CpU4fS3A2fRHZifMSg4Lt7URSrkGB7dygdg1XndGfzEFEfDGRVebLcN9ZLAKXYrpBPyDC4wEMnVtDZgMtgxdu14",
  "key6": "2mqhH1PsJ92Yzzfe7St8u5nHW1fg68z1AirNyFqMfniVSJo3DYbtTEWrhQoz6xZmHUj9r82i1dmmPMGUyMnvz2hy",
  "key7": "TsoaRUQ4NNGaL5NvJWiirUe6rVhtvBTwwJ1NjD3jnkDYY7XjbnJsfF8Ff2zp8TDjz5ji6kXjnuBokWN2NDQFMcC",
  "key8": "36AosFxJDu2c1pDnxkSUMv8bg7pCS4BK4CksXxZ8uLPNzwKMZmH2brFMT9GHzLdeuFfw7QN2AXoNNiNiaUQqUKcY",
  "key9": "3FRDJnp8fZSwWWVetvHkLZCus6SKM8fwvcszHJcbgmENqJRHJixaDEYkuKVFKrGdsh9KMJrBMnCu2EfjSH8JNxj7",
  "key10": "5H1gpz6tcvC4trQ2qZSqqyNE4i4187ykhez3ineckRWAv7CG63mDwgQTmEpwmJ6fUHgDPFYLVdRmzC7XvqtJoQtW",
  "key11": "4mu3uz7BAPCBLSyqpRsTSiMDkf6gUvwYewiZRdFVbSZkiTcgY6AnWgBQferA6RckWG7GKgHcsPnMKBTSSMvr3x2D",
  "key12": "27pavcMEX8fW781nYrStovgtzaje8pdmAwZjJJSBNCdJ3QAWZZdF4CFi6yvdSYdGwWbfgReM1jTmG8ctVPjmzynh",
  "key13": "34ojiWnxk7mWXsedHx9SyvKgW11sTSMwNuEgKsWhYKTKWjmfQuz5o8iGqatjX96cUFMP35ipnhaRaPptkZ5X5A6V",
  "key14": "3VZ5ihYxsv69zJAWYhhaAS5j1mZf7H2xvZF3D1Vzm9rdMNCDrt6xL5cKrAvZoz61GL4kH3FAuZd6jESox2Jq8Mbj",
  "key15": "2H5GDcAucs3AKjNeED7q2WarFnZDDCLepmgVyyqrNftbXnSeMkfjvBDsLZDykkBhgq6cWnn5DEHpcwigCukwry23",
  "key16": "4TVNmWs76PPSGSdrHQ2AFTHNVSvbtNiDGXUNsvtTKE9qbuZnDabjychvGgyzWkzGm9Hgw8uikka3yW4LULb4dvgJ",
  "key17": "3v3ruPF5L4FEns5fCGKJZQT5wccWGgFBDsVEN6ou69GRkM2KtuPJnsDcBDCz21J2knqJZM6c3EYkyPLKYf51opq8",
  "key18": "3VLvygfCrPsG3sDoVE7wmE5eDQ3b3FzKciGButrVAHsrsMq6tXzKvggzz4Qrq6AXai49RV2oWePwanZR1f46mVCQ",
  "key19": "5u5tu8zvtMKFcD9Fn7WoEXrx3eKmXdFTU2Wqk64ELPFq2PyRDGBQ6dMM3mNyEPyPdeFfTz8hdaySzEUu9DZNFs6s",
  "key20": "2tpBtLw5QtnwaMnw4WQMak5korCxcVjoNo59tQ3rjBQYgPuLXz6J6djZinXyfETQ1815ZdCQjgje66qPwTZseUyZ",
  "key21": "hhFMZihgqeR2wihESxZYuCj3Ng67hbuhJKAKNSMCTiryucAVwEQVJ8FckZfoSbsjwwxDjRBXDXdPUNF5ZXxqN6M",
  "key22": "5uJhxdftL7Sr4jbi6x5n5huwtLKAKBSSAoPZnRPgrqz6WoRngY1G8UwVDN5Qya1b8oCZ6wGCT72GDEcoEHgEtkD9",
  "key23": "3yqdkft1DsJwsfVgETq3rMVnWBgAMbQhQXh3Xq4vbKXZRqVvcTZtHJrFoVWoLLY8ZaqxzwKnawDoejuLdQjya1H9",
  "key24": "21vubLiWszUPHuNBRBwkNUUW2Db5t2hBjRnUiYkcXumtjxxWSnJc87wuUnWad7sMKcvT9wpVk4tqBKrRHe6bf6TR",
  "key25": "4mEVQedRMRsn4aJf3qWcQq4aWbaCvmqr4Q8JPGKXg1q9z9X1st65cBwYZbTLMFjwXWhWY4GYvFyWVVZZxM5mnyHV",
  "key26": "3KXZQMHTPeQQFSU6Ws8YQe3r6CLX5BCXBZKtA1sG5CSsAZvmMBbHEgmkN5kWLuBV1kLKjBwrNRcfKBwo5JZ2q76q",
  "key27": "2rsrjACxZYxf9BRNNBQZzd3migt3EuKFVa4CHPW2j9B1u7kbzNe6EgE51qY2bydncbWp2ppiojX7GxzGqxZ5SwhV",
  "key28": "5uTkc747JgJt7i9hfaH9SySkTCEetksgD91JH5Y9qwP6WuYJ1af84isE5yMWcfLWWRP2Rf42BqRsyPDgKaoASvFE",
  "key29": "5cY3Y5hMhpn4w4Gqh7gffgsHnXwtETLww9XRerkZ3q4HzFtnGNAc2bM9CbzHWKwPdQkEH4BcUsGdZPzkRBc4JFPN",
  "key30": "21M15Whq6f6s8EAtYS6pRKxWRDjGQmJUb1P46oULXuGMXoYg7ds2nXVZaSwihWqyBdCLNf6BTRFpyR8WfQN48mzz",
  "key31": "huAGNMNagNYwYrgN3AXFJLmfnkqaCX8EbhpG5uMbTr3xPTPpWzvDGxw2DNTUbDGhcc8he3jDLjsprJdy62PAMpc",
  "key32": "5m7NY54tjGMTwpKkRpPh9caps7J2Cimpz5WeNZKeJEAgsJu46FQ48gu3U2xZtBR9vuoXvuTNwCMoWqBrPqwk7hZz",
  "key33": "4bLhc2roj3tEckcD1ZfEvKLVSFbvE4ZLmLbd6ECkqCGc3tHYkggt2nqhxuEkAd13kTaeKkTVzUjYzTPUYBjuK9r3",
  "key34": "36c8V28khix5yBGSVZjMMCYUwpNHaZnaYBS3UtCem7ojXvzYJnuVUqCrxA2S8QpD7uzgGXbMnuZGMps6MJaa9RTe",
  "key35": "42BZLXQGKQBYGQV3iZ5BszRy6yinpdZGv1t4fYh116fJnmuiNea4r8Pk9NK7eRQfTJscFvXRFKi8NCzF6Pxbyow1",
  "key36": "4APpmdzgf5KsoM511bLLHQNZz5gtKfSjCWgXrkuvwxwqwCQeJvUPAfknkJFUXh95vbDh9cXMs3HcAoWnag62P6bY",
  "key37": "4JszM8g8YnxQNuCwaQdoGcZAEQmYtoyDR9QrrKBqL33YLyoWcGfXo8N5Cu5qfRBJqRMKMYM8Sw4Msic9kLthFcms",
  "key38": "2Y2oCxrnYwfmYdTpcRvG2VKwVLbGZ1qKSMVvY6z52y3Vo9q5hz8STHxVNTvft8VNy5Mxxd9VMj56UB4U7hbojgRM",
  "key39": "5PSsnLyZrP31HtXBARWdWRAEU6WHZFKAdoDvPjGt9HB8gDDqzqb9TGVLqJLCL918zPxW2nN9mYDmVT25gNRMZ1uu"
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
