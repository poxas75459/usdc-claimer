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
    "32pN89pFdWu2PAFXPx1pEPwsn6tiYVaGXc1UQJ6NNUNd5fMrk4fzs7SkncqkRMJwEJ1etXBhufxPRQpFZFHB1Avk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pXK5pCz8W8tpteq4KcRBteAgqxFUSq3xdmgmibfuRg9Thz7XNqPzgvZYbpmKMX61R5hJrKnhJR4jTPzbMtKGUr",
  "key1": "4jFcAcaRrQEm8RUS4WHXF4ySCj26MxTJQFt6QMWzTCC3XQQbez7gFpUm5ko4ZuQ1NwzZfeTwictSdAR2tEoYssBP",
  "key2": "53k12fEkUNvUHL5GqipET4HhbLMVFEyq5DpXnrUAgYyUFwpDVhqGe58PAUm17vTBypyVRkRACg6ZXFnFJprWDQgT",
  "key3": "2x6EkggKWaPtrjqALe2DnQmAzEDSyKDKg666jwx8iCqUx9RbYUx9MCADS75RJfuz6wxrM7mKccbKNSMd6JQYEwZH",
  "key4": "qiV9RcU6DWpW5qV4gXqoJbg4zNtMawygcF3daiVsUCtoARE6G3qjYi8ztVWXVnMiWrciKiKaEuzVetJynwR6roK",
  "key5": "3XddJNUZizigN34xdzCJXUNpJATcPw6VcNfsXjmqV5g2rCdUZ9pZ1z3dZaVtCHzWLSy3Xn33EoBKENtHw5NTxAhs",
  "key6": "5CnkQqCD7QEuJY8ueGERSy2MFLXGCdwsozPvYH86v76iqDQDXuVNCK4sniHrYUngcfKkNhUUz5GrCFEdFxmKXwrK",
  "key7": "667PRLTGoF9sWVdk3ssh57gtJujcDAvUm5GfemeAQzeMw3yAVvN27pLjaWem7fttpsVdLRQvVJ43wVt71ENEMBEd",
  "key8": "Ci4dzUbkj2L18CPYZRdeFkDA7VPuhoNapUgyPPMSdnh4bxc3iB9rXdw7AHaj7ZetWGK7kLTWVgEYQtZV7zFYpBp",
  "key9": "3LoesGCGR6tZucrDykeUzrH36XBM6MMk6gEUH2rCQNbiW1FzSoj8Di2fmKb5DcvnoE7mBpvqiGv44BEM9dt5m3f",
  "key10": "iPvHuAYCVMGRYQpSMob8rzJD1RrWrpGf6stjePuMaj7SmeBMeyJiUNVwbhRgTXTVAR6YuAkNLezcmzjhfAD2FKg",
  "key11": "Hwkt8FXAA6bjerrhgYag2aerydMpzyZejGFvFjTZ9MfNycmQzirAfAepxLhZHVbnESRjf91YYPeUveb5uRLW8EQ",
  "key12": "FvimWoBJTimqRKhZyaggY2rvsWPS4dKkx4VmaW5Ur4QTASrBuJLroqUg8P5pYqzSHERiw5SyKkSRGCp7kLw9zg6",
  "key13": "45rJ9uPrbmQHcW8DQZ5xEVcWF6DKoZV1q6GJM4g8SfyntqptNjM2ngf9jspYkb1m7gGEd3CAwvN2acAM6hRbmtqz",
  "key14": "4gaaS3ek62sVtme9iBZJGaMZibJXyvSvDYxpb9iaYgGpEAdP4NkLVxzG26FBWHU4Ck9kuGgUomhtz1XSkBhsYkcx",
  "key15": "5Tb8YrF9qW6Mk2EvmJyzCa9NhD6s2VR83yQVjBy44ojkWBs6dubziHAoai53f17oxgMTKXXCAuHHANPMDp8QztU5",
  "key16": "58LE4aHv5eYu3rpf67AbNsb4XMjs1RNxW32cmExjDGCTv6ihnP2id794Vo2HrMoeyAXwDWjEtLGXyRCz81MXdfxa",
  "key17": "5GzaUcYwsxdvTokKZLRAYeAe1FBgeSqgCgsEyA2fEwSskVARRuL65WNa7Zpjr3aQrHzJRQsgpUrBuJJ6vBiYoyEg",
  "key18": "5BigCQKKNajTUZ193fzw4YFyE1jNQnffeonAcJhcuMNnRchNsFJ1hB6sa2GNVfhMZGtyU2EknvtLkhpVNCyGnmsQ",
  "key19": "3gq6UNn43bQafjTkWyY3mzry8uisTb9rBiSwsxcysk3NWjyR2jbw4YiThZAp893PcqXkUZ8mnhmS4pXSedaozyUQ",
  "key20": "4atSkU1MHwx2Kz1ixK3trUMox3ZY7JaQTL76SETusFgSdQ2swkdNBtG44ZMFLBEKcfUqtjoPWcX3uVQsApnUJKr9",
  "key21": "3YnL9r7aVmSgKBxkuxo3cLkMpttQECVH9pnpDgpieH5KBQjT6h1NiADuMiZn6zZdExFR81tDrWvSaZymbgrpMvfG",
  "key22": "3qU8T5JQGbsDcwWuhfv8YnHuZDtSXbMgK37mPziqh6NTNDHM6c9uQ4SDC8uwkw4sSV61xAsfWaaH6d9PEWhhrkwN",
  "key23": "2DcZYpdUqhsg9CL4h9G1psaWeFkmfhHhMSgMuJQVnWGcJMGBeuxZLdky6wdNpSQmVWYBfCaQXLrMg8V6gGA3Q9Je",
  "key24": "4dJe32nEq6Kr6N9wwfy9ku14vDKCwfoERNRquQEJMkqvCK9MtyTcMVT6V4hjCgfTLXgfPmrG3LsMScshdJGRfHtN",
  "key25": "3QnTV9YcjTz8wJ2TDKwJdudeaxUzGfMdj2ZZjHMjeYkbbUzFhjT9K2CBUTZqztNVrv8im46fV3kXQw8JG2s65Qm5",
  "key26": "3TcPjvUPLWFX9LhH5yxwpJcne3BJyafnYNtoxmunaJziTMjCCQjTv4h7hJ6ycq5ZNvGvoUzNjkRSSm7vxRMTBnpi",
  "key27": "5EX4A1G2MnKQpLXyXiCAJPUNzdfg8SWiYgLDrzCcmZMak7UbRpeqtfnBTadsm4qKXL98vL7NKCuD2K5V2kWxtNyA",
  "key28": "d1phqn8pT2TSamnSmkZgdTU1hwkERB3UyeqsN11WXJgCUrc4a7DjkSor9EyANXme2G4CRSoLJTZw4uieCN14F3F",
  "key29": "3cQQExotYpcdAX6mRgb8THQHonwdXVUvVo8M7NZkUUP9CQNqsrTmjboAkV7pSdazP6UrjkTFNSeqHx6DwqjsvKPa",
  "key30": "4XFqEaAm6uqH7xYRWauBHHzgv59svQjG1ugy7k8QShagaP9Am9ThoeMDBGrUNMnnJFzUSdyTJaAe75BBCtRLkWm1",
  "key31": "4bF1JpamzqB9ScUbBu6Az9NbMcKy6c86aBeMQTxQPpq8LHdD7ChfeFXwj9M2CtvmuFvQ96XQ8U9SBfRATcLEqAjG",
  "key32": "2sgdr6hw9vh43eW7MgPDACGsKWfKLeoCU9BP2wUDL9oDCHG8Xvcz3NrPWMqnFudB2QyEGq8BsUWzx1QMqFUn5Z31",
  "key33": "3jmYghPo6mszTNKWjdizjQb8upVes5sAo3kQQaX44g5SYfZDQu2vr423JFSReRm1A7faF9HbYuEw5c5dtAtuYCtr",
  "key34": "JkTBjEC4QmDhpgnJCH3XYDzwa4NiPENqoL3UN6sL1TgJrZucTEdQw6JduqBkwQ9fWvLrLqga7hwhny2m98bso6x",
  "key35": "5ovPiWj816ZA7sdh5t8HxgSa3P2axkDfEfqBM29M94ZSSqFZSW4ZnXPMAFWdFABd9e1qmZTD5MjYy8RwNteE4uSj"
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
