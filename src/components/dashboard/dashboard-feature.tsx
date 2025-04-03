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
    "29FXhv8bdb3KhtYgcCoMdqsnrwtKRGthx3z3qnzzvFtSviCb6QeqQKmbowH5NSH5x1nwd6kJX6qghLUM2PjEmRZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZk1CMeXuDbvXsq7k67q17yZkuq7MCT62HWQd8pMnx7nkpmykSEXsm6nEjFh9mqdQD5UPKEm3CLfwnFeqqj47NY",
  "key1": "WZeeCC8zF7eDuge4DMka4w3skBSzQtRz2BsiprTLe6pe1UewZGQgdCMeTVysp7Mtf1xoUmAXEAGniEubS7kqsku",
  "key2": "yNpyKdfY1QKR34qutKdRQ8RBnJrSbCXi9kF5E8ayizLZtKXz2WykbSLEzNhN7uTzrtVXmEGpo7aMBBJH2iCA4er",
  "key3": "3UJDfcMfVEeBVwicSFQKw7Hu1bAMormTQPBpvRofZ8HT1PTr9MUKGcVSjuTR66eSkhMWW8RawkWyPWdR29DiEp7d",
  "key4": "3JApY7DAugR1EAn6g1EFGSuk2xAVe9ikU5i652R6VQZ2XUEvAAqjP4SJzxg5LazmyXQUvtGFakpqMeK1QvjFwzx9",
  "key5": "2YF96cnyu88LAuSRvSYxUpWacbqG4z2d4BhMFULkeh7GUPRiqt3ujm2ftKCHsixcsdERNXjnSnmJFF3Hdqbvjs6i",
  "key6": "yPUNAvLTdzgBW9xNPu9b8eLvSBYEFRJvU86G9cGefmP6aWLnxKLNHRBABjj1n2jEd1pkbzaJ79Fv4FNo3Thwbpi",
  "key7": "4ior6nUC8T7yKTq1Q19oiMnahwswAGuRoWonWDTY3xhDL9qJfNVJdm17rBSCmFMcyMSbDsWSv5K9FmAV28KR3gMG",
  "key8": "3uqC4FF294wghVbp8pkhGBBdvpjFgtsnntd636MdRhznC5wv6yzHzt1PbnAxkycpEBvxQZaUUTJUCz57oc85CMXZ",
  "key9": "5fAAWmzGo5Y2TcPnbbaB5FxdsPC4UCjzQbTTHLZf8MSRnT7MVAjpRiBuS2kJqqssDC9DTPJGtZm5upZ17hPHLBA7",
  "key10": "5ZFpLJ43HcN4Mv1oY8i2uMQxHQSyHFaNkU25pYBid9vCwkGW6PF6xy2yXadK1Qg4kxhV4D2ipM6fY8qxr1BUxHQ8",
  "key11": "2wfyG3S5HfncWzVwK3Kt3doYXVeN2d82HhWe4kjFncdmvJPuMSeeGQufP2rkbLZQEHecDjYf8Kn1BuzwHt6LBg81",
  "key12": "4X8dYsXC1g3RB5L7hEfu7BaG3nvunb4EueidjmhmsVepzfPMNDs1gWkVJEaS3umo3tigPWRJFRwNYq3pbEQGiNid",
  "key13": "gNpwd3Q6rqaexBfi7Brvxonmv8gkw7LoYkLpN3dfKPFaYW1FY73QBCNqpvmgBEPyXSiRdQ7Vaz6dbQ1xaneTWyQ",
  "key14": "2iyvHzAiM6NPG6BLggJyoCXxRq9mCumPdyfQtUFA7KdvFs6hDN8YqFTXVCMoEC1kqxdYiep6ciXGMZxAP2wpajV6",
  "key15": "3hXLEHjKCrYuhv839Xty8G8D788iuFCnsXbsbCxFr54yHNwKe1z4DeB8NtUZWPSZMSUxxf6bwci6UuiehusAHMeA",
  "key16": "5LtXZ5fgNdkYWbyVykaEcq7EMD887V3Vk3ShjF7Mp4DpXmdkzPkD1fxeg1xntNnZPnRwRbqFQgVk49Js3K5shS3R",
  "key17": "3SfiKcowno4GNh7agrMq1bad2yEyAP4f6DBf3xuzJEUZ5fJdshdwqhDjPBfwvjDHhAtwbTUaEEHy8ygS8x1sYfsr",
  "key18": "2Xtyfad2CMBKwmkyFE8unUt94rCA3Q9RPpXsqgKx8BqVNW8ykhg1vqn92U3Bau8eQy6rMgDd13ZUZd4ZBC9ryuez",
  "key19": "2GxKyHVXWSYB1SLsLvKeW1YgiswRHwjkB7Zf4Re34MsnTQhmts6WJ9etHzP4PTXR53zM21soB1esHoe7iWL5t4fP",
  "key20": "2VqQWJMComoUHuvJbwViHkXWwJ8qHTcVBH7JxDJDTKDANMFwRhTQ6czwZ49T766dhair12wouYYfnG6prHYkhZud",
  "key21": "qXcjQK9SUX8EHC5ruArNNWTAu1usvo4NHVqQ3murp6xre5msCrJDaiGkFgztCZ3wB5W5zHPrnCgjGUZrChTE93U",
  "key22": "4G3z5iRRELCFMKtSQNdosVau5eyDX8Jntm56JSWQV9rdGDYrCXY4ZviBSAW3tkoryLZsEWsLZdp5YLTcdnx29iNA",
  "key23": "5tw82RmrdnXvD3n6Zez2r1vj4a8Zr323qo89xmXrjEPtfjLCT796D9LnsJcCVW13Z2EH5ediAbPaYe97X9QZpYJL",
  "key24": "3c7BgvCqBPQiYF2Vis6wf17eMWyXPkTE5CFrBMkU8Y3hpHPsbUxkoqZ9JgaVvR85WYrGGxeVisDu8C7UJ9LK7Jg",
  "key25": "Xa2moqvWzDw6mQEbnZS9u6nsRP49GEXs488DLJMDrAWZEEtznyg696QKK4DCKhzGogyb84J7ZAvVjcfEaAKQxHB",
  "key26": "2n2DrKthdDoTkNxLXeUg8dL51eXaJdmWK8nUWDjdZigoARCVqWwj6vpN3Mu1HJT4xBgAfyyECsMQ7AKoUeS8qEHt",
  "key27": "4rfCUHVEcv8jWsxUbkJkvyA8NhZeGKvRjh2D64ZfqvHAFMNTVyNgnJtvES3QWYHrL2FhSzm6UpqshEvN1SRnM38H",
  "key28": "3CTxFDkqsQFJuWFGpWgxNrTzVgL9RmCxieHdvAbNcjCnktzUMusrEWDLDkMrbTyJjhiuuA22Gsef18DzJaeeyAPj",
  "key29": "5kzk27eazZrg2sBUVjVfGa7CFrHhz1rbk3iCzUTEajCwBF1aM6bYrq3wXTRsCwEXT4qSGxHTP37CUXbNheShefxw",
  "key30": "rUEowk2mu8pU34Ro77ioyQArUuYs28PcSANeJun6PpNVTUP1BkpDh5vbY2T8tgPsVqLZ7aZGYUyqGzuipVVP834",
  "key31": "3n837BPsH8a7GdqWvKhPL4Qt7JNu9NUZnTVMdTJP5DYD5ei7pDUn965sdmonAJArk5sjK6Xq4NX9jhE6W3wuFHdD",
  "key32": "4CFU3K5oTmBEMetyLpLjy346G4y8jAWRevQxr77rb9vxomtVkKCbrUre6p7hdbDbjiqWsYEssjvgdR3RgvpHn8dX",
  "key33": "25yyQZnCmVfNhwjETRXLSUvhK7SXry3A4uLGUZTLUG85BRhyyNn6yceyg2k9xq2vAt1XPfZCQqqyUha5F6rjm2WF",
  "key34": "46Ax2ijCa6TyYmbZF351G6mJPKKcmKzYEAEAq6o73iGVA4XtRCTpHGfcbGLsDuD6LcFUKPzuWnrKkhvsYPHxjBzM",
  "key35": "27o9qibttSmHns1JrvSocV8U5UY8MuDQxcpLhTRTgRsKPN4kojemC1QsuR7pBTwrjgxVqiroqjb1YmuzwvUSo6kW",
  "key36": "2QMicYWMqb7KHTV1WSKCxgVLn36WQC7D3C8XR4B9KduanB9UzemHWtCUjreQn2c9JpZ7Y8tqw2cXGGLhwNYoVEoG",
  "key37": "2ZdMWAJRyaiT9KanZT8XDLSuZ4wLEr1b5USzuKFqUHghJbA3Die2fjoZ353441mLBsfjqSSLyr25YCo9BLDiXStS",
  "key38": "2oPwATpoK3RRuNrx68ewfeKvkoUm7eYYioD97nfVLfxBBkXDvaxXiaEf9SPLg1qEEuEUynfuetqV7Vo9xEY7wgau",
  "key39": "5pJw4uJ5LhAM7WiWd7VYQvZgmFEgBF8p5gGjvieRBq5zRnJ1nZa5Qu7FV1gzYQsGB4614egiEsTwfQUeEcnLZKmp",
  "key40": "5tZJqiLWfQUwZUbZDEYAFREaqM1K9aTVyH534rDd5QNARsobm8q18JAVNPyHAHDJkjNo7oKvM1N1BvcZCRJ4Uqbp",
  "key41": "3ZGMrynzjuxtdtRiYSZFqmNtNg7K5voMZNKZJ6skEEd7J2qvxjBPb4tPzT1eKLqMRnbEhakXZnoWBNdYMvGzCpH",
  "key42": "4KF8BH5rDAXmFzPHssw2VbzWBenoxrrJ8UhvxbLsBAFDriWNo1oXos3QexrZmjWWhzW1V2BEgFvncaPYMe7BdVvd"
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
