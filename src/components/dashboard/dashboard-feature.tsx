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
    "3qDA7Vpu5WCPJwMM8XKYK8y662YvJ6ziAsQayFCKL5Wq669MYerK2uhWAA8Eq4kP2vqcxk9zRTRxTwY2cthpNqiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pz1EMGJ28RuFxSZyYTb9RcepdBESusE6L6iJonYhoDunn2eom6GG2we19oGWkBV689HMMqMKSWPaNCt3zcNtGuR",
  "key1": "35DR1R1nm83PVfJJ35rAaJYmYENgHUZf5VVCZkwXh4FD4QsJEQcFmUq41QVDVH7AEM3d7yZnQkzGWvQUviA4BUZ5",
  "key2": "62VPCWYiP4HPqgq6QiggC2vAfdGFqUb3WYTZssTASx2TKBcGHm5YqWkCAw4DgQg19hyE4KRnKVgq8Vn9HfyFLpAf",
  "key3": "2wZxYAtPux4gB17b2KBVVGTwuNypruij6nUHxcVT3sKMqCXeZHzBAmJYXZhTD2GJnfdNiUXXg4UcfzkU6deekbHe",
  "key4": "3WZPpffW2XjsajrPUApY3fF4uJnpg9BMcydmCFmCENWKAsyEPHxkpfYXroeqmMs4NmMigjUNVY31dutHMJG4sDR9",
  "key5": "3B9u66NSRuwY3QvXbnFVb1eQW71pmEc1oZNuFQryjLyc1VNiCkhEMvsagr41bDerujfv82TWhFURvH4D96H6bm9v",
  "key6": "2XQTGj1H6sXi5bazToBVB2LKehVnaPZGhu4jba8fyK8tagrSRGmbgYDzb984ETzExLS6G8k1ha83gdRaLN9Sqzie",
  "key7": "5g6ZPFfC8oMJnUjxuYNtEsZC7eTqNBuJU4mPe4NXemMskioxEVMJxoFsDYMamyDnACBxZeasogXPMzuZy5ZWV2XQ",
  "key8": "fuWG3TZswWFSZjX9gRo2jmkhBgj3jehh1BCdHD2XpqrorssrCarbs8XCA9SpUqNUhF39Bk11k4TNwovG9eYybz4",
  "key9": "ZEWaDER7MPpeFivUegue69gf7QupNayJSTcfvaNQt4jMW73ihGhowQrocX93LKmmCEN9aTneyQYrZFwnh3s6U91",
  "key10": "Ce49wpYn3RD7DY2Ky2qDrvqDu4FMtbjz26C2eM2otu6Yp5MuwY3tNC5pH8vyTPHXMoMhKYcnYxTVBmBjMibQLYS",
  "key11": "5NrkFrGN96NQ35BuUMZRxghrbz3rggWehTdQc2wYvrHeaYxD4mcDjnS6Cu85EyYVf4sbpxirh4SPYoCiVAxx6PoP",
  "key12": "5RCM9Nugz4YNSfm59jpCxXFUTZTGjLpQ2YL1oL4pdxSiXsBKqjZ8kQREsvzr2m6ZZooBzFDcsfDHw9d8PhbCBQh1",
  "key13": "4XqwfcnZ78LJxRb53HVG9nHrRq3hMZbZ1op92SzRbGN3YZpKRWfkN2d529aXTvgF6gqKK7iiXttaup4Q7XBUgwKS",
  "key14": "4qEDydos7qv8gt7pQkx6aREec3MuYSk66dqgdqvxGJXAkc5RNwLHLw81sdzGWEnHUyNXXG8PWyQtcdoa14PSrTvX",
  "key15": "5ZF1D9qx1fPm4F2Z7Nygdq1g9VLmyfswac6KnsNTKEc1xuF4NC1keMkT2Xh6C2DYf94HA4D8UxNCSwXfLWtk9S4L",
  "key16": "37KxXMgTmPjwA5pqffthdsXWcdzp3wACKQegCxL1fytJhKUHLCQbujxwhTmy1eWTzd26vDnmJYRQhekDMzjyL71v",
  "key17": "5bS6kFcQJC4e8FqaANVQJK62hhe13FsxDFQz5kkdu4L3RYHcrpeHW8p9vomDDeZDGo4NVwVD7GmAkyLj2WbZEvcB",
  "key18": "4vSjSUm4eywdXv6aE8dfGG3HrMpyvyEWxDhUJHDfHJw52QiqSpZKYLag4H9onwE3q6Evv2KpZqDxPg5hM6zN2tgB",
  "key19": "5kKmKCrRXU16xvHmcz5G5rwcfiLpZbT12MraPTKhKZvrxQCwTPLigZABCL3TjEr8JUPqaJ2Kq3XYzbfCxGeKPk7B",
  "key20": "3DLZEkyXSrB23M6ccMhhqgHEfjbqVqYADUtRLSC9txRa9jnRMLgkCU5xJc2LfGCHJrEeAv3fNehjF3d3w3PQjEsD",
  "key21": "Qy2bKTGoVf15zWq8MoEKZRaKfa72j24MExZouAZWrC8CgR8sMY4am9SX2hx3VxoKvFUXPxXWJFtTgfCYDTNhwcT",
  "key22": "5eXGQahkgRErU6pc8AvtmdC1hbq98ubybGZnQhSS3A4G2ZGMh2niLrAscPacEy7S8QZDkcmiunmCTtKpyxqSahkL",
  "key23": "2rZopJetzapYuv4cTeGuAppyND4jGbRD6mnZq49WnT6Yg7dJ12QNwxkeoLnsstJQuk925ih3r69rRmtSZEgBvFW5",
  "key24": "2BydcrEj42LLfNWyZLSmYShT6wZutmLfGxCKweQSJ86Tg9bCk8cteuMiw7Smjrm2cDmSNkLJ7gsvrpJcUFkoKGy8",
  "key25": "434V7zwqLnbHk7qqrwS763sBGeJEeLF7vfXSgzN8rBCKtBdqiJ2jzVeE74xwq8GmHS74wGn7DkXfmtyJ2WRW9xdz",
  "key26": "FnL2fYqT3AsmEmXaXbq1Wd6TNz5jBgzXvJLFH822u6gL2hwWG6yxdWk64iyYNV5bMipRz4KnCnPScsgEgsEvmLu",
  "key27": "3rKNpYvwKxbbN3ZKJMjZAnoqoDd6ejPzPaDQAx82jF2ZbCFDuvP5vTtL1rNtp97oMfa1U9SA4RHCveK2ZwVVUFJ",
  "key28": "4gUr9V16txX9JPyRjVqqjtzwhbrncZ3mQDcDJTKtigftyuViacA46AjzeXyTeEqEAdUgKqofTV7ctNHXW3NJ4NZC",
  "key29": "2ijeCvuWbEBu2Wso24avEYNbU4RAuyxiyYexXYfkVjJfaUroLKkCT74wdNz14Fpcr69PETmfZU2mB9nThfdaQ43N"
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
