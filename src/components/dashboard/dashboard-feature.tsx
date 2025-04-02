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
    "VHacMJnK79tS6FfkrNAKfm4viwTkxfMK6LR7y9atgkZABjLufA68XCK2efpK5b4ZMpWopyA8tfZLDszseBfJT3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xU1JM3gVN6gNd6Y4kaGhko8aJGy3abEy9VSnS3fgUY3gDVcfpQFAKTHe6PSWFfE9ZeadPf7tzXEdFD94j7Rh2Wy",
  "key1": "4motzc1tCYd8Qep6srUiRUvto4ep43qBPRT51y2DDR4dR9FQmnFpiG7ULPufV4vKjmP1wVXdzWTvgVw47U4zJ1ML",
  "key2": "4aybWqUWyRvkByWFVkrauTdXJpFVPD4ptcqEPEULm1qQaMDZwBuvt6ktGUfXy12zrdvTmzpmw1odWUEk9rjCjpKJ",
  "key3": "4rYvB6GZRYek1AgDrMhVUemtgxhypEzoLmCzdx6LjqRq5iiAhPmkwV8GktnaMoMF9S8TXdkacQjaJLrx3dLwVG5x",
  "key4": "2Q3AdhVyExJSvy2CqRuigPV1kiJ51tR3eYnB4RuN22cwGtGUpqb6a9fdwrCMTgjAsr17QaFsdwpcx4UTCoZVPwY6",
  "key5": "2DfKksfEkuHtx23MK2etwu4jSSP6vFTVmoQoLWqcW7K2NnNJ7ggh3RFNZHcHXCWmdUx6SPfyx3RgM2HjTWLPUG3o",
  "key6": "4T2967dKnPieBELHuas7xSisGKnSkennfSRGviGYRutHYXoQdYnV2i2FBXKYwo1X15vUVfUvUgkiqkFjChUGjNvY",
  "key7": "2Nr17S7WbvWS8C1CXN9R6BdYVTbTYEBusWpX61Nnwm2BPvfgSKX4XSmnmRA8XkFGnjimfkNJuLBzvZisxw77E5bS",
  "key8": "3WrUCvDM4C2rcWnSrdSHyHNe1HMg3THYVhUcrYRMEHdgp6iPze6tXjF7Hae73LJQuBsD2UBxLQka5yN9eY7VY21D",
  "key9": "4WJHgZ8wKqpBGJ6kpC2DhKhibi14vjt2PuzJH9R9XQWSnT3kFX7qvKDtEFHYwXPyvvWCu3sEzXhBA1TQsAU1nsgd",
  "key10": "AEXGcJn19EPyyJqQjsAbwu8KKxpGmNWFsi1wuj6FsQhhr4htzxSnkTxXua8oHTGWArhFjCW5ZhKTVzeaV4THp5v",
  "key11": "5hPBAinkU4KZt2s9qYAsQ1GfPn4w4dJ1E3P2xkJjjqGy4E1KhzyDdEMfcm7Y2f1eFJp5zJUVtiroDKosSWQLRxy5",
  "key12": "2yjdubd1n3WjWbAqJ1V1ZSdq4HoxDZ5unfeFoXNj2eBBoCvPcNvhY8Zy6VV622PkFESUsAivXzSvsZBuR6oehgoD",
  "key13": "5UKM4cdJJZuLaJa5BaWeigLaVrUGGwWSzSjG1YbWrkkm45ksKEXp9SFJ9z3csemcdW28f3XsU6d1LysWham1zVXx",
  "key14": "yeiNh9Xc84HuSZqgVnEHVffRZ9nLfCjN731v51we89pDhhVLwCAXrfM6r6WJSVQ2mYzb3PqnwE4TofEHj2uEDTj",
  "key15": "5dbi1gUDDDdiCvdPy1y9WomJxmqQSDx4zeogAcAidjoYxjxKwB6s9xwfXKLZgwgqAkkzQ9npV5HdaJtBg41hHZzB",
  "key16": "5VDaiawMKRZsqkKoCzy8P3nSx7is7RM3BGQCkLKrUnqUTGJw3bAv57w2Cw4dE2MCEyD5QXkgZ6vxsfWwnjtsn7ff",
  "key17": "3VYdLL3gbKKaPEM5UAGk4FX3EvciqnhoSoSKfXhzEm4hRHm1xfnKD76sTJDPLioLibbdfKM579a65ccBxmxa3nAE",
  "key18": "2SQDCwkFJW9DPG9tpyp5ZWNqmSy71uEEfwyjyrnrkSD5VCmvLZGnw3LfpYtAgmKXd5RU4nsYrZN96hFmTmfZNNEm",
  "key19": "26EKANUFYuuXZUwLsfXu8Nq4NjB8poQb1UbikqhEm1hd94cy5dtNEMkzTyHEwWktsqmsmjQf7nCE6QKc5x5ccXVS",
  "key20": "Jthb4nQ9PWeETw8YCUjfrsyYfR1wiWsjUKN2keih9WYtB4MhF6RFLLykxwMt8N2kSMzm22G6XuFVy6c5JZr3MgP",
  "key21": "v7TrWxfVfmz2HfWyParZgJWwJ8Q52ktP48v7MPbvrgw1WgXpNrHhHEpkXZdrKVABYTqJyebxTGhMEPWDgZ1fQWz",
  "key22": "cctuH8wk3CkXae9tUiVTQ1X1ZbLBvgKwE5j3dSN1JZraP1yYzcSuWuBWeBx5hh5RrBDyi8F9EbVfoyZUxD7zkiP",
  "key23": "4t8pno5EctRwituq4NMbgd52LrmyxDUgcxw8owGcg4t9nNNsAZx29wymc9LwzJGwQbLUL43MySfMaJhSdbxx3sDX",
  "key24": "31hDtGsvNhCbyFMzZibx67P2yZ4r2fswgeysbRZznzErjC6NGhb7MimhYRH5kdPh3fSU19suK4nTbtRrjC5Q38Ar",
  "key25": "4S5jFwbzLY7XbEQ6Di5TArgMPobx8wdw9vpH4bsoUunsrE5MKiLida2v4UuLhyQeruhXrdxFNL6hBCF7SJ2Dp9pe",
  "key26": "4ZvoDUaa3rr8uu4oJsvsuDALfrtbtBEaUQ8GAdKAeoLi8U8zeitnD5B6jDfdmjvUJVZ3QyqStU7vyxZ6FHdn2mZg",
  "key27": "3fmDCDMPFL3X7KYvPz3NhTbJM5MZvFc6dSCkNQBJV2FbQVfgCKgFcVSfpLQbZN2XLZyPFvhLXPRuWiLkeNiDSQng",
  "key28": "56DfQbt5UvNVQgVmWs59JkouXBTeQRBQ5PMawSGTKfnqQYQeXJEMk4b8PPWqTPUrDo1WRX2knCPkdVg9c5CUStx2",
  "key29": "5phChe4hB3a6PBSEanZReTohLrQcg8b2L2Pkips7dc3LHCviQ3965fU3vqoDxkB1a4YfWPMM5WwM32PZc8fcb4Uu",
  "key30": "2pU821966wxNxc8ddFHsaR3qt9DAZG3Ddv7oH3Mx6teRCDKNtgY8stP3T8vj4915MeHvMqhUdz8Jmj3nEZxwFKDG",
  "key31": "3cmWBvEDEn3tdg3Gmoc6pxdttE3C1qVWTwyAU6iRqcRhDxGGEhBfRV33dbeySfwJds3Pg5oCGLKBjD572UPRAqSm",
  "key32": "2BCAbvf3ww86TtaiJPuzAK1GTbBa4skuJKza6xzziqonJJ8avfNsUUXBix9KjU36u2R5addDsrUWVAet1MCTT55N",
  "key33": "4uenthXa7wuaPh12caVnNetFmmunugZTMAiuGhpfEqAiTxtkYFmGtDngfZHhfnEHqqYrt72sAdPsAvY58Pm4nTAg",
  "key34": "4GCJ51bKMhq7eEXLqixHyFcGek1nmAcdkhU8gQnVa24Dw2pvN2iazaEHMvyyBt8b5T2FB467mUrjP8vkFejRjoej",
  "key35": "3cLNhvYLUn9x3W1Ru7xccWjeth8MWy9sxdfu6tW5vRNSHnv2x2mBX97cL2okvmtzymdCbXKC4dCGH26Tnir9iogU",
  "key36": "ptXcBzxP2BWnJizeZZ3qUAA9hNsq3AqVWKJrkQoCJVDgYtYvjtHPtcg9gyd2W2Jvyv7aRdsGHaU4Rkq71KrfSyk",
  "key37": "3sBVhkZrUDcQH8qXSx6kuQ6Nd18LWkoFugaFMCcmXcgaZZqkcEtgbBM65p3GBnhv3NvxuJ6c4jBPVkhST6v3spuC",
  "key38": "2hK4WLYFoii3ghsQn4pK6xf4jYtUCBZjVw595sD67dvMYZDRqizmLyWm2F78ioydCZtibQRWWmXfRoksaUaL3V2a",
  "key39": "5hUVDhkE5FpYEpkApQUP9iZbvVF29Jyoaz3fnJThbmu6uCgePLGiVCxKAYhAL3Dprwgdu9PYrVxy647sHEcprFUM",
  "key40": "5Tn9EeyJBXGBELUGjJtCRxJ4GTxoNeNXV5MZoXTBCWB9CzCpECN6KSxqjeTeJq6zpqtCXhwg5WcZixr2hyTzQaV",
  "key41": "5HiLGFqH3SFdTMmvCkJo77f7SAoERYWorUByWUZQkZGRYMw6zkJ9EF6pBXcYZwioKq8UJ4Atzkqhut7EdWXjapAx",
  "key42": "2eoJqicjY4UbHofNrqhiGTHoUkE3vtU1ia2C2P4iR5o9VBcAV8qxr9fGMomrdKe2vrBumgU5LoKBQhTS6dZ3nJem",
  "key43": "2Z2NFBxkykAFxKL6NeEDamop4unnZn1pX45c5SiEHnfGYsgXpFteDGyVWt9iQ9NiwdRKAQEzPkF9CfxvN6YUvebc"
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
