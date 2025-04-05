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
    "3ZwNTPwvkQZT9LZZSXu2oAbDMgUewCEQ6nZp97G6cqPQgT8FsSVWfCLKXUQ36iq5jEFSF5kweQu3HgduARzCA44y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RovNYtQTrhNzCYNn45xUpKe5AQ3xuNnieBdMUouom85HofRuUTHd8iMuyGMeMAerZmfVQcFtPTrH66bGSwExTb6",
  "key1": "2faJwDCkha1qoTuSiwPK3MkV3LP18xB5u3d6vjMGpt3fugJvpRPdJmbuzWKWH8D6PxChVeSsWYo9xgALmKGsV3UB",
  "key2": "5fhorcaPtoMkFMr9cqWkUy16qcVRRxv4xFPyBacSKre9AtFPcCXrM65bcShV6KSs4RQeDHrfYzyMEgbwS6GKbbTA",
  "key3": "4iWGRJ7Mxkv6ijckkGvCJjvTRNhZFDy9R44m6Kc7sDFGBW35Q9J33u9ZDUqGQWcsyHavwQc74Cxq7S4vXrhgq2Mo",
  "key4": "t52cUo6vvwx5RJ4EU2pN6Xev6QFvVGQwnKp9pB7rWYH6goPXBUGqFLmyhEXgcZigC4mkgGQfaB1sAMPoG2p6WTn",
  "key5": "PPdpV5TcNCSvt3tXEupgChdb4opmaaw6BkJnDzxfa4MMtRRgp2WGxbMffBSFbbDknPt6GPswnEipAsHDqwyzCKU",
  "key6": "3Qhc4FynEv3XsBc1r5v6BAAPfvkrpnqqtdEnkfSTYrvysyi8joavinWCNjdsnEHsXmW9SqGKVCNRoisFbDnJXRnj",
  "key7": "5iE6oGbeVZnauwUN7ngwnv8tdo1xrFHfnheV41xkVNyJfwRL1YPniQcqEXBoDmum2ZqnP1BYqqBxVQYuYBpPNXKi",
  "key8": "35PGqjx82VosxBpvMWJLbb14GhqRuLW4MRv1bMQyDRXjnegk3vDqum87jMsjKG5jhB5mLrrVk9dtZZhxf5CJvvkV",
  "key9": "672rs2hLW4f9NkqGUcnK7BQA8RdqXdMcQcBtYCVymkUxREEuaF2nofJxGfbWZ5LHBGyZtVvqKsJQE7qn6P4bnDDw",
  "key10": "2XJHMpCqVYD9H7d9NDVuNW3mEiZAz5zshrFgpztwLCeRVgwpQT6FzQc81kaSHjn4cmqRoiSNEUTchVGo5GtfLgPZ",
  "key11": "Yw3hEGFTS6EwGsrGWZNi4pRncHTbDv8bbdB4LyYM8CDjkiAS6Tszt8Ya53ukNhiwf8VG4yefZJY3nqhfxBeY6PW",
  "key12": "5PNkCJFEJiefjiDFjKcKm6u2CViXHyg7ftB3PLKhNkvTdKTs9Z9o67YEG8VkVANF6u3UxHVNLVVtWT8uVTWtdTKg",
  "key13": "2hh3swp7KJuz9tkphufEegJpm6A8KJonuusrFNXduZDtheh4qdBaJYxYnb93fEPoUxwPZJv5NgGEBaHJHp3qxF9H",
  "key14": "3nHmssGa9DFXib3deBM3DLWDzdMG9UzQWE98DDrGTssF2wYakxFKoWsu8KtkPqzp7nXYNTk6HeDHdwbaFW7STWwQ",
  "key15": "25Fp3eUMGuZK4Sz1WpjVaJnqWg7vsRGgFw6mQnyvNsqyUKMhkuNwRsD2qmm9TuFS2FtF5Cn2DNNjXVoYXBekvg5k",
  "key16": "5ebvhNskBFBWEkBCz61H1zvm8BD3mVFLX4pAUMyUjy8GyEhG9PsKVmtWf75b7T2hMf8GQGqR8QTiDncbMiHTSmDH",
  "key17": "2XHBitW8KowEhXjLbJHLdrg7puV2d4ANTaZBwvoxqgTHgf4obmjP3VT4MtWxpfS8vNwGrzuYdatKuzdAJxxQHEoc",
  "key18": "4gEE9Bkfzc2b1efGfwMygjqNqXgJCW8MABAGDyo25jUSP9v1Wu6aV8vZmqQf6C4mBzGE8B8eZZ2bCbPi4kjhRvq4",
  "key19": "2xCNy722nkHjgkHmLf5FAVX58riELUWL5UxtjD1JTVnYYn13VjZQNp7FvAFuetMaBDEgtzG1zrCFsKCnhYZHkvFe",
  "key20": "3kPRTt7pFba39bmqEAtgJK6534XchFCWtiq6seW7G5KfuwzkffoD8VKMcpy3Sd4WJNQnizXgVzLL5xe6nu6VnXmj",
  "key21": "2TCkd3t8jpxN836rbjYUJg1uqQfucce44CJrVwpBhCzUSXoTAsqQGw4hq842ZZKVK6XsBTMYW6iFFJn8FG97kVPv",
  "key22": "21VWDWEABzh2MAWXdhNS1PKAesdB7m4r674PdKnBMGnecQr7mbSHsRHYKERPkHcj1DPiD58adNcPXgZT3RDQxCfF",
  "key23": "3zUDBfPtmVTG5UaVJKCqeqQAjfJpfpHLPy7LphTdoK7GjJPNko5UoZLPF5ZeE7BxPB16SduKu52btoF7Dwndoh6Y",
  "key24": "44JgdN9VpJ8ZYrByE6t874eHf37BazCsKqa7BckBSJuExzABStCtsJ5U1Fc3GxbsDb4YLQE7YtBYJHnUW3hvkdeb",
  "key25": "586UgPauwS9im6E4152oip237MD447GRLYwJSWo3TtfnvdDnM4VdXbhdCK9oewSGPHZpde8nBtA2yP9h9re7GhRN",
  "key26": "5cnLyWT7YgEppcj4nPF7bLQcGyU6GALWYdwqXpm5EFKhxEwVVAHNwy2FpnWjH2Ra6eDJe9eWCSczHt2MMyHYKDAR",
  "key27": "gxCxJHmybRqoU8vco1nZavNKkjCkNyQjRnHkui837Vo2zFwQjDJ8wwajLKRZMNnV5jRgXhqQuWYgs4ogubA26Tf",
  "key28": "2jVPfYN8yGtaChqA5E1ZDh5pqaygLqT4NAqdEM6ruq4NYQa6xPuQeRgXW6K3UXPcYDPi7MqY4gCRorXarcqVgtu5",
  "key29": "4nr84zEVGZKxisWpxnAqijAepVnNhwYfcKPFr9LBzRZtp5mQFrgFUBGcXE3ciWfizj8UVHywYRJyM9vST9brwWUG",
  "key30": "5Zz92sNMiyETcp9oRgyxa4g6STWXan5irY8Uspm2K5DYEErFmdGnMcHUKwUHuiEgdxub7Sp8AzN2PnTM2JTSsZ3i",
  "key31": "5Ptwo4nGA4URbiFi4xMSpAzSiTjgiJWkfgVuD95qHKy4GAMgyC4ZywG2ZQMWX2VcJUpUKetDFg4AxtzxnwbqDQk2",
  "key32": "6ozC2HYRHjBee3k5FNuVozGQGj24RCHDsdxSp51qmLvp1i1AcZxx5L7sxz1ZrUUxCb2K6GN2tBxVueWspk7o3wv",
  "key33": "26sHBZQSw1y6LkdmqB1x6SkqaQgqBtUE9MLuwDhqBZx8SJMubBGszWdXZ98LoQahx3VnS5Ded4KnjH8DAXKMouV3",
  "key34": "2FVTN7ULQsmz7hE8tbyugULgLFQ4yKiH2p5gjYgTGdWDbkWdqEkdyVDmjSvSJ52a96QhCuWNy5Xnnwjg4gKAhcEg",
  "key35": "k9FdyQC9x7o25rXTgMFok4uDVCUyTh24qmrRsHFxtqSRzQTvqJ7pEBSMTzfzpH4tCobJX9ruuMnBfupD13zw77h",
  "key36": "4Gz1GCA1ZRXSeiDS1bKgDA2GGwjyczWSjsaWRsXhNjkDq2xiEui2RriqBB3FBnVNuBfUPKxjuy8owQnrKVCnSAgR",
  "key37": "5p35sDAQpDibkQyF54wLS9LkLzjFz2NqF5TbFVetUyPw4KNBRDxVF8p67nzSPcX8uJuJC5vQQLAR4ggxGm8FFWAY",
  "key38": "3FquxEETymVBMf3xbXdQ4Z4DaVkhjPLgcKYF5AvnmJC1mVRoaPx6JUW1xMaGKzKjBVo7b3Vknv3YYwFbeQNBxcz8",
  "key39": "2DfMjskER8yKDswWda3qaPLPzfcy542a2NPc9ZRms3JMwVEBEH2X3zMxLhnhKp5Xrvq68hKQVoMzzgs9iMhLzGLq",
  "key40": "oxWLW3rueBsxcvvieQaGv4frcGuR7VcwV5Dha2iywaCreAfc4X5TdbeuvxntjxLneqqkjyuV5JKfyH1i8tPQAEe",
  "key41": "3Rw8wAQLBgiLBbFEs1bD8z7ZoPN3cpT1X9KusPB4VoRKzgPLeN6ArP2Hf13ThXMuo7U4jypJYHXRvVbfdYCqdy2e",
  "key42": "5LzAb4R4zmwXbedPzoCCy2u625pmt9zXKZreXTpUdKtspiC8CD6agHWvgFe2ykzv5rf2AtzukD7HBT6iiB2xZwv7",
  "key43": "3nQXuBnymoCPiLUunJ8NVHofPYVsbQSokzmqhN5muGUDAcWuiWgkSDaFppQJRCUoCw8gAxK4cjTNvHkRDsitVdYz"
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
