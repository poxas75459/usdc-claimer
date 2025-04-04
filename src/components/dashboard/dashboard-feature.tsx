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
    "4G7mUBTPXA2BRF9PA1rY7aJtZgZVZbQww6gVnCF2AvkmzpmaxnwDY2JTFJcBPpryzeVVGdv7RgRJtP79BVVLUeN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5seWzvVT7PvggV6DDabMitrzuQq7txUJbyPrjtq3WxzSomwUs8YdroahQxcGrFRTD8qnVkPi8adtzCbVhJTRopqi",
  "key1": "26EjpZuxtJSc3uNiqPcFp5eHtJsT1oFjq4vwTcC8V6xu97cFAiu1oXXDk9UVoop38swhcGjZNbUoGG1ghN5guqaf",
  "key2": "5VGv9YucQiw59b9kd3V3aWt4HPGnQHw1JXFCNYGdKLsmSqDcGmfRupRz4CbSXENe6XNywCYBLNjgLz1n3st3GNqr",
  "key3": "43zqCVK6MtAPzFyR5Trt4ZiZWXs8pkSwxb1baAKMexiq94dfs6qhpeSEUFPLeKwju8RRADBQtK3ogZKSNFGppFQY",
  "key4": "3VZPS6uQG7GgGemTjPLhAcBxqokTnNbG9aYiCmiEhkaHjvteUyhiA3YfzAKD7Q4JE4iFHTyCmQV9Gscx9DNG7bjE",
  "key5": "2KHnW4t2xBp3gZ7wp6prnykwPFP1z69fjMhxMBnQ5BEvZ3VZEo5mPkL49Ef9jVkv7TMfd2E3a5Hib7bg51yV6Qrs",
  "key6": "3BPZgQbx85RvZRKEjgQ3Kf8y4kVBKL7Fhnq3xt9Lqe7ZUQCHQGN9Dqj69g7697q3JWWuJrB89XX9oAjXACo1F8TF",
  "key7": "4UmncRbpTHEqZn4orKApPFxoER1wgYHGhTnumAM4yHUm7TK2dJgU1rvkWNFoH4cpU5KZb41sFBY3SFircS6Euw4y",
  "key8": "3LfKN4CAcxLjw3pXCDfpJecj9GcggnbPnZACbUAuRgN5UqvMAocF9SPpGeeTwMp9ivYhVg24oikiMeeqCfLBcC1J",
  "key9": "5KvwdFJtj3ByFBjHJxzhA1YL3RQYzgTTVAugYmtfGzPeVPQmRQHQxJYNRiuRrgPtYhHMZnpsmWfhHF9Gjwq3r1UN",
  "key10": "3krkV5V9jFKghTtfFf32PsU3nEXomhYwic5CPFXvJocViGKHkXxAPRVsw2ecqKVwvQDYsPUTisz5NBwPNsCqaGvK",
  "key11": "8v7388d2JvtKMbrwrVmaYw6qGKhcdv6VRmJJUZ8znytVfg1L5S34YZAEjKTjcKwAY4DJ6uwEupMFVumFC7b7TqX",
  "key12": "5MAZ11gkYj8JEwzSDmac8YZifufv7wQHrnNyehmVBUkXXhokjUUSbRqvHPDGFR9P8kRhFrptfcJZvrnXk4ofDLN2",
  "key13": "3NQiEm5tAksoMJTLhVL8BJRZHSVjzGMcRpGWrHS32PxQZryDq8NJLcihei2opnurAxLFzNzvE3gCCS6v7ryPiJ1r",
  "key14": "2q1wCUNHc67UMGrUCEZCpqZEKSRNhQFNQocaVnPP98LxDqcHPTouoZ2Gpmktq5rwrVrQ9L8wWcZKw2fmpMiewVFy",
  "key15": "5DDNzdH5912jspiWE5TPeSphGzxEvFuYkcNSLo8gFjRVCQRDiMxkhdRLd8XSigtWL22u1bJNqw5fW3s9tLvzKbj7",
  "key16": "5axjTBdpEAd7ijuz8kJMLLpauLS7SPHyGxcw1vUUdNBqepVtCMuNdHpTe8XKpzQBmzDje13djd1eyRLEku7WLLX3",
  "key17": "ouGAomDVfC22gyTq7UP763VYHDVLKdrL9Bya7H7SS5iACqA1hYEcW8ezpWWGhtnNpfGJEF42Q8c4jcNjFQv6vrE",
  "key18": "65W2ufXfaK7V16TwirSkgZktSyEw5GBcvuhEb1HzpdCW4dDyLncjndRGN3rrkGBhuoXoCo8YdRz3zfDpV8fV9tNv",
  "key19": "UEnjxHG1rpxc8rSHrWkWVEJbsb6C5qAJSNQ3XY4soKePjspyTbkVsmAwMsznbSxKn36PMnEsmGfb9rX14V3M4Az",
  "key20": "dyWjw9nFYzbt9wzzEa9R6Xac7xXYC9wUaGxW578KcWuezhUwQpS56kEMuG6PkZY1CthPMndh5S2SescBBPtFmpM",
  "key21": "2ESb92b7xNU2Kfc181rcWW1WHcx2NqYjJCgFEyiYCDNFRKsBDC3UfcFNNHGjPqzBWR4jfCZUKc2c4HfD7xNgrX9o",
  "key22": "5Ah4UmzHXcVCFUxM4bkcKQGHkwgfvq7rtwUCE2fDrNTg4reU21uV771nPNCK7VCrUJXyyEbqsonscyUo9Rk5pD1Z",
  "key23": "5MBjrrkKfCBwjDn8QgjB2iRFnuzUF2mt45JAauGbyEZxVp8DH7PRr6M85uXJLQQKACwQ8avQUvQNPu58rTG4bP37",
  "key24": "31Li6RbV7qZb5vqKkj2MJ8EhRQLUD5m3dWA2eFUcRKwij7h9ATDRY4JFGnc1jxgaAHWo7WxwhBy4RahHno9XVgc2",
  "key25": "5uSsbbX3Mvh1HR1DyY5cJtjTjPU3dNkmwLaTdvtCkuwinKQMGKSP9dEB2pwJdwkWNGsPeUzHaxdKkDdU97KSn235",
  "key26": "3o8rEDGKwrq829RqixMG4Ki3oF5CJAHFxKyDijxak52A4crdYzgkdCktNFqieEixcKiRp44hVDnXENQNkhp4EffH",
  "key27": "37ReP7F4Zs7E6ExzNsqpbXoejhkuxuSLVXVZrjWzV4aCsVjPZHshsjpTuHFSLuM7b1kgpnT7u6Z5aWKf2zMAYazV",
  "key28": "3qgn5ZwokJf1sg3ACGJzSbPpxX9rdJ6Pu31rtPuiJiNuHid8SLUkB6iu8RzD9TKTEQLKrtPMdHvDbJr2D5vW7Nks",
  "key29": "4eXtLVQH86usYmDy4UuhiYAgz54rWujPdEqJKHRXSdoZkaHeQA6DwnPpndgQDqdcwe4RCwgAp33dhcDWzDEv3eSU",
  "key30": "5DGti5Mgf2nHZCBa11Y4WL5mCHN15XF93topoxgzoz2npzeDdhZ52igcRNtmGTmebYFqS57HBF2seCPiyzhnxDoc",
  "key31": "4U9BZkRtZJNkHJ28edVtYNLcTxNpWdK8wcx8Jv93WhAvJXowF6Lj63dgopJQsjjd3cusGbSdUhK2E14CYJ7SKeZc",
  "key32": "BMjCMUPrEbboqxEueVNjJkiqkc7MTAfSgneU6TdK8FqgoCGquPvXaqMkp8HF1vNtMb7ys6ueKDDT42Xr2trbMtJ",
  "key33": "2p5wKNfY3rF9WoD8ti1gPHkk4uLGaN1duSb4GSAgsdZJv1F9Js53qGC1xtDRva93serFXi8gy5vrBPAaT4iaqZPc",
  "key34": "3EXioa6BkQHz6pY8F7JCWhEAXVtTugS8Gymcp7n4HshQiLvFha8K1k9NTVEA1btbpFx6yziroSL7GvRU1qqSzLF7",
  "key35": "5YsX8x3rBSgNotwBL3jmBVhbV5akQQG9AsbrRQvWTqhr9zFiqxMWgKpRFbohWuKMutV2DG8XHeXWUtvkXqdeiaGk",
  "key36": "5QDjsqoi9QArKoSUr4WVoW6KH2AY8ATY4kSqvqES8mQpfB2jxQEosiYnK8KRg2egBj5CnkiyUFKtY9qqepxtCp17",
  "key37": "2PhhqV42hM4wdwSVKvhz8uA6Qmb6tSvJP9QJ2war6t4EC5Lki1WbXhNMvzm7nhKDLBUbAepEg5CcKTvwxKiVtSDR",
  "key38": "559nusjZsmy9EbeHgTpZppmYoMvGsGGNYXfe1V3uRJwbDC9z4aPxhqrkpYTZ4g6cNMjr3G9v2aCaYyupzAqZbefa",
  "key39": "37CRpweukAeHcHrjQuPyYrn48B3bXQduEhdCqoJh9KPTMi9hrCvXPWpGzmL1ddPj1zW3vmGKQL4ut697Ceo2TdTw",
  "key40": "5HGwC8kS9wJs1ZHTTwJqBt45R32ggqfXPRU1ZZg8GfES8LrV2NHLA2Jp5SqXZxM4twZPniy5CB9tCQEFcvBpvrhT",
  "key41": "5dgqrxpamEchC39DDbb4KFhMyn151KgBFTuZPWGK2grNATDwZqje9hXL7ixvC447fUGiHABJzMayJSWePUbqZCKx"
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
