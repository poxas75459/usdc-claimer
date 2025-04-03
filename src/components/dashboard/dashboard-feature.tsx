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
    "y7FriBi1w4DRRsfMAtSmmriJr7CyuBCyrYKUuqeDaxepX6RFPmmA7jKPQ34afv6oS1ijN2bMF6JW3k9dDPMVdJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SjTPoyDifLbyJsA9dSjhgQQU7ufK51Fc8DG3Z1mm3r49UctSz9x1dWCEfb8wQ9NoKVfxE2AotQrNJiLusvebN9E",
  "key1": "4YoHot4aDpcQGXwthZ4PYS9ZnTnWThLp6RgqAAPN2ZsEeQGrYwKrpCw4tTYL9BAGbbjQR39HHBCFwgjmNJC83tRG",
  "key2": "3GJbv3jYSCsQd5gnjrWcGUarMQSTdDx9YSgxKeoRWZ8fxJqkqpUF2kpZ3HebeGona9ArSDyoZ5F6qHP2Fod6cbs5",
  "key3": "34CPFrbP5bC7GCpmPwrfjdFwDQJXJsZspXJdWo3VsYoyv27nGfkKwsZd2XSjrPNgzw17s2EJSMxb8WuXRjYgkHTW",
  "key4": "3xppf2mhUwmhkigSjTm4914LkhMq2GNWevngUKvbkQQa2FVkTgAq3qqLQbcjBUZe8up9H3L9rnEuFpPSAsuMXEdH",
  "key5": "3Ef3S4SzLPZZyh654BZ8hsJTmbpp3wy8JrWththR6W3nFKswGjmmH1BrSGvo63i4Daow9orNPaajoaDVhzYZra5o",
  "key6": "2UAxaapBWcswoxHioGBXhtoo9MWbbHKgXkJjqdP7rNxar933t8zDDibPxiXY7WEFCRXW6sU2uW9wuXTtpjjTZR5e",
  "key7": "5dAtSppMeEQn9DkqRHoFkm6YUnfKvuGy5QQLYQmorSRz1bZGvmXS1wWp36Y9WmovSAp28DXe5CtL1zu5CXxU5xAR",
  "key8": "3TZsT3ATHv23n6VRyzGs89SQLpzEQqdPqWmLKurRuZRFbq99iG19DheFiUkLfQ9izCp9MuCgz8W7jKqmVKtR5nSx",
  "key9": "3wnyfxufUH7BRA8Bug6d5FMLmQQRqVbFa2F1gP5dhEXLTsWvxPZZcbTsrUA3sSbuMr9FdJSCvUqpe7fxUQipY8d9",
  "key10": "8Xz6L3vB6nbMoNcqS9fxkEyDWf6CUpj269mWrQip2w26rg4dJdvnVRsuurSAXi7pzJT54Q194YrKGKx6gXFJhiu",
  "key11": "5FFGk7kMWmh43wbZ2Kxf52TAXCyAB1xJpJvZGHjfmo2LLuw9id9ZEACcdsCjQp9Qi1XvAc8foSbJcPreYN1ovrB3",
  "key12": "4VSnYvmRMg4jxYa7kNpMyMYqWKySyZ58hTHc6xNZ8vjuu34qfq4fq6VNks3vJqGGeuTjKpyBEHHqcK1UxfvnBzxT",
  "key13": "3NaG7UzHuhuHwF7EYby6jhT8zQmQDcNuhucXAEcrBqEwPVGccwgpfp3P9VKXhLCSNhGQsVLZjqDY2EREZzz12yLu",
  "key14": "33SNGe1YjKkA9kwEMrzKHMdAqfzMEYchRBJHdX6B7izizYS5ixHw3UCuagk8wpJej2g1awUiFea3a2dkk6BWPYrP",
  "key15": "2mN8Yui8ggfnxmtGT5UqQqhkk3ta9UsJsPT3jCsitXH19ffnTtX4ejEWmbQHuCJR76SGcAz4TdTipnWnEqP73rxS",
  "key16": "DbbQDBd4K4rnrW5SShsJ89kVQYFTXgsm4hGWUmhthT1ErEHx6dCL4QE2tHiZGNeeEbyZ5Uc5JqFFGEEAnNYbPKU",
  "key17": "rnJnkUt3kWQDxfvJ4PBoaU1ibQfATcDuKCBBFnhc54CuUgs8QXC9S1JKAZLJRJMaxX4wEE6edxQdXbsGFLViDcL",
  "key18": "muxt5gLYVSPxBZT6YXq5iWdc2vwzzGuzZrpLvA3GTPPuyx9moxjCkH4xqBDyBy7PpDwYS7JwWpXapLQ4JvLRB2A",
  "key19": "tX3ZE2Pw25q5zFALy7HXcJnVuZZNWimWhaWzYVmrtMgjiQ3iVi9Z47qqSqKU6EzGHk7Q2WytziM82BrqqV74pJj",
  "key20": "5WYWYgLNzZyACC638m1pmcFefPLvfnWUtUMUYmp4aCn4nKaFByUzD5p6BvyKB7hxdc8Trpp3T4GeKFuLqwriygMV",
  "key21": "AXdctZ3jSw5Kz9FTKYVPEXv6on9Cg1mRMc2k4VuCjNvBnMWdMw14Hrm1FdaEXKWhkrXLYK9jCjXcNWAow2fBRuW",
  "key22": "eHiqcCSH7g37ukdJTU9EnJQSPsqZQodZH5oDwQrv9NVoqhYrgXqDhTaBiF6scDkDqkQERXszqvFKp3nDuA9PQBZ",
  "key23": "5pgZBtpSMpfYURbzyTsiPk6i96ZfP4Xkn7HFiheqC7tuYRneRKJu8qKtkVRHkmppKi9pRCLjdiesAcu4NnR2vGif",
  "key24": "31Y6sWSr4Gbj5KShrJ2XGbSjWoZno8xHFEQMQbpfrqQ5o5uu9toJQFf2ELJeJpWAHxfforYQ65t6UaRzaTCbth3w",
  "key25": "4Yt2wymuLb6FZoJNryuH6ofNQUkipp82FswpXrjM4Fnw9HQbqTtbdfUszWXmCJBGHPD8BkS4yDbKGoM4KLrpjn9E",
  "key26": "4sVuNw85sspnYuAAQBafXGstgi5QDMwbJKdBXwndCsxMxBJPTHHZArVXvz4JSL8X8AjXEZqVRfisFGPLmmbZnSv8",
  "key27": "2N3MtBoH4gENAWqUHDVE9hpUacCeracuNrwAkjWfEBLesGQN2fw6g2pKVzWkxtkKUvjibpRMa3G22yPyPFq5uWCm",
  "key28": "5kK5JzkXMo9GTYXg1Ym7VGZK9LgGvwSuVaHhfjs7ZR7xnAq1smm7KSfNxGDeoJaqN8Gjq5rgLNuPPxf9BbksxmDK",
  "key29": "4iBUFNuqoULvSbKn6bVMrYsVpk5dkkLyaBMVExdkcYjY5r33aZrST4Cca9pUsdkP7H4Gx31SDEsAi4b8yUqu84qF",
  "key30": "dqb8X9JYiJBQ31aQo56yrxYMW6NtQ7A7twuaX2n53dEsJki1xmG9B95UhAT314miwqsNd5qVf5JUo9cek4mukfJ",
  "key31": "4X1UwwQLHQ3cexAvcRfuTyjrCgakTqJcxbq3ToQMsACAW9ixguJSTRhEXLsysZ6kyJEmcU2JTwCY9zXgf55ZPHbZ",
  "key32": "4GJQqx4gmRuNYdj7tJHNCuoqKJM2awiJZex38oEyCb64QpXSg4AAooBRPT1naE2nLUQmckdntuse2SPgknFLHmKs",
  "key33": "2PYSnSHsHNmP9QxSuJQ5SnRFebDtc5rMcfLB2QQPEFC1y6Wg5dToAcUPGJDLXapPnSr3ArpZLcqfcnHUzP8rTgVj",
  "key34": "47G52uAfE2JZzwVGtXNFhMBr68F3awPdThRu7fAsuTMaPx4MFYoMV5W6P6kVTYjS79FG6j5UCEbaz85b9TSTRh6A",
  "key35": "4MFQozNiir4eQkkBAtxvd28NYfBTuY5cpEKY53UJ77N8RfGK8b4kLwuoVGGna6XvzJn8HjCasHuAKM65bkjxv1ef",
  "key36": "5Yxw7VaKRjZAgqDfREAwz6xnraTmDBFk4Li9xAKMw5RRJmNiiTrbHJGbwPiW1wiYhSG1ayjrpQcntboHpRr1zaLz",
  "key37": "3Zjnu2MCj5RdqeUWGJChdtqV4fpyE6d7VKWmkD6MUhzJWu2Ze2vCcqPN4njKVdKxXvBRq4Cb6opJ5vC3UxQbAD2F"
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
