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
    "2TmHcGg9ALTQnrJdbGeqb4d8jiFi97QV3TqaLKBBdVFpnhSmPPYTgq3795YSZGwiFtvGL52VmLsYv47nZ3g1qSik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ve38BEvsaxr7q5ZFjza9gocUvQTUguBZvseXCwBkAHQRg89ZmFxewgYEWQFyauMwMq22MrQwzMQyEvmX2XvVKnV",
  "key1": "3YV6KhEVVvacuP8fkiEvL659w6iagd1du7HvqkjuSNeiQV5hLNuTqQdZAzejmTbMLTb88L5EMdbwq7uAXt8dfDEc",
  "key2": "489cWPkFb7M4dbk8jVGE2kgo5Q7xt6j9zcZxcXVWrXzYgrd8M5DbHoDBChRc8F85Lau6AmtTWyayWMqVmAPLszD",
  "key3": "238ep6DHkEgKaozcn28wNkXnYZpepUgBqjpihibTfKMDTfbTrGhYKXEJrWo2xGraXPwhEYUGdTLYMk4qcQduiwi4",
  "key4": "3iwmNmSappMSb4nGhmdxhVsYPpSya3Yj1pB6gA7RXeroG2DGc4TvJ8g73rv53PoDJ7orDGR3dD6H8TSKU8sYLQeG",
  "key5": "3vXivVzzc7WPZbdRoMy1EpQAfk26pnZ7BKc35PJipffVK6B6r7PZutLQ7aMYobWN9zwubM4nwf7AgjJwkos4MZq5",
  "key6": "5dvzUGA3Mc6t28HU9QwJnepaqJVxdJbQEFGGxLmqAiYCXdiFbP5zVfzjxwK95EKAwwiQvRe9dPX49eFGTXo7M5m8",
  "key7": "5pq8y6AQqCAY8rV6tKdc7pfv9z4tt1M9uvUNBFGCCLUncrn9WvVbscDaYvo8gdtwhk4s6wNBXxtMW3DoWdA7uZi6",
  "key8": "5poSstei2PFaKdLq7GUuyjmvmf1upT47FszqSEzesDkWEreBzGommSxeuk2uem9SRQYgY5wzSRi3VqZkhqpCBvro",
  "key9": "xp3tZE43ZkmURhj83KPNUN8kHdRLcWPRuBr6smZKhftqvpbg2dyzp6XxFEXmLyCkh2Qwj33nAkVG74466KkAYm6",
  "key10": "CUDHxUzdvLmnttEomtAtf76t7GCBnKzjfNjFqXuEFiiHobaeUiUDgQQCpbtmxrc3CLFrjRoEKtkjn7PaQ1x19Pk",
  "key11": "2PvLiNvnXuMnoe3q7pg4zrdcio39YVC2dqCkRHhiYCFhJCwZCvUk6zLLxMf9UCWCpWxZgiEoxxtmYvSDYZP2arcV",
  "key12": "48VkoxJJYDfGs3RhCQerJSGQAaeCMz1Xd4DsKxWEhZNxtkMMSRxkNdkZ5rGWd8Xpf66WEgn85XepnZBAZXsNK6JC",
  "key13": "2Fuz3NwBoWxekhvey97MbV7Mxj7zYantjvNnEQWpdbwa2shYJvbyV7xTHna4Xw7req44RwLUpTqScGhkLecMJV9g",
  "key14": "p5zJujaer9eKHgr8wyvceYacgxSGNq1wYu4RiLwc1RuzeHzoXhFqv6KDBXCRrF4DCfkeZwxvJXHBK9S9om7iHxR",
  "key15": "hFU2UWJAztgGaK61zPzMLhpS4SKEuwb6BDhU3TCQmaXYtcSBMsDkvLWgbBqehCyYdXs267sCvWy96BjWkLUc7mp",
  "key16": "gxHZfpsQLp8FspWbWz6ZAGanQkyLqcAZAw7q2tvZq9GwqmSLivJdvbd5qx3aswaEcrYqpCDJDHCR6einoJo7W8m",
  "key17": "3AdUVUoG3nUJzwj1Myb5GreCS5gRbPByMSjqCHVuXMKZzHEzwypZFN6tGTaYG1M4CDXdSy8GBaknE3wrka8K2yAs",
  "key18": "2cVo3E2wrCCQKt2E2rzkmsLnz1LDqLW4ExeiQZf8h6XegNCxS7SmE1XgurvCdkNYDmhhuWoiMbrjXDp2pzd6oMF8",
  "key19": "2mFRe36HRPrnpBK97SW9Y5EpPSFSRdCc9o1vEm6YP8MMfWM3YGD4BhE9aw5FJr4CmyprNZ9EJPfmfjeXkhrkpiGu",
  "key20": "4ErHe1BLiribUv39rDUMsCPx4DHKt2BQCFb4g2ZfKDAUZ2BtZqX7ShEZNXEmhmYwXQXowgiEnvkVBM5h73xBMwsC",
  "key21": "4N3z5Ejwka9CeQMUmKynyy31SNTYKbeciBA5r5izwMN1tQ1m2rxP2qNtPyzQNQ6skhEA1g4feLQV27o2cTyAbmhZ",
  "key22": "5GEVcoHgo8Aow59uKELw6Ef6R6LmE2n8gCx7xMhvyE3HsX8GeYTBcuQk97EvY5cRLF8vLUEVGbytffi2JJLJ2CB5",
  "key23": "2iNftYAh6XuL6wRHn7JrW2E5ThZWEkaFj8K44U7LubAbSsYoAtqykMZimAi599FBd8C9GkRhh2xkU9UGJtGB4q3w",
  "key24": "57NsMb3XGQ5MiXtSzwYigS8Nmk6LLu8UbNztoR7Te6ktgB9Tm6d1XyMiBdtbbDXQ7DYwVAbBGDFHwohZEE787arV",
  "key25": "4SQLqqREqE6An6r1dGmTpzdd79iUWM7y4JrtQqS7Fq9Mb3GxeJJgevmfd5BZgNrRYxUzUwBGfM5BKSuUnjxScVXn",
  "key26": "4PtxtyLUDvd65k7HbzQYX7eLfoi3wpaemteywkvBsg21RGLThYfMMJF4KfMs2MF3CoKDc1oj1zyjBZcBoXQGvMW7",
  "key27": "3QLCi2r4fwb1TSJ3EY5jhHerz7dycfSaWJFkLU6HMCjL9sdhN326qdpYxv3F4fNpWqFwxrHq2ywdbnjQJB2ZS4Jz",
  "key28": "bfVsAkXPg4b61b1XnNKWAM2Yjc8gviesSwwKS5Zb8Um93fFbH4vADbpUoKpFXijtFTK5iVjFRkTgusQ4jvW2mC8",
  "key29": "qNGBRY1kcb8ursCPZHAuy9mgA827rzXuomwbtpbsKkXX1PSDTzVKpN6pV4MiqAL7xZtzhnSdSkvr635enxSPeHe",
  "key30": "S65MH8N7Adv1TNzE2UTB68x33oLG6VnHcwz1VS95Vgm2qEx6Y3H4EapGDta58BkWGGys7j4kpQLcmq1DDAVj7Ez",
  "key31": "2db7piHo4gosGF387b9enMbvyRSm8uK12dHiid1cJjXRmNRPv8b6DL7x7zA2ndDZdPoXQFMpXA7dUX7hpFt3MhBR",
  "key32": "yjFc8PkftANYtnajb2qs5xoSpKD5rY8B1NBBBDjHSiFA2nqJCEeQgYqcBmySsHWaYccqxSr4Wrq9GG2NRQo6fsJ",
  "key33": "5Liwu1feFZ9yDmXprz341TJG2yRsbSSC7UUikzGyhKpt9yeH6fo6MzaTaxJrFCP22REKdVCqffmrQh1Ysry63bRo",
  "key34": "HG2iYt3GVvwuwHF8mJUpEy5nssswxu17SnJ31gHQ5bUYyxaAQ2bRuJrqevmMAW6ZjfmCApgr8j3LsxkRjTBaTuy",
  "key35": "5xFFyxLHPWpsLAFCKCjPWcmNndM3PXkeZrcEsX6W1twksWYLLTqsc51mMposciEawsUt3GuCVKdMZNq4xuwEaHVU",
  "key36": "f5Q3N6Fha3dcAFxwL6mmFBZr8YHgKgv5h7AsknqqppV8h8wbNHCYpri1D6vNbwTqTaiKG22fHmNvEWgoRE3RUKp",
  "key37": "45QAoZRy9kdge7w8SjR5UxzfErCLFW7ES7Q6V7qDkwFavcX4Zr9FnQxnSc4YD9FEUSPdENsy1B1RPPt9ACV7gr1s",
  "key38": "3ZeWEZPZU2QnU8W3XE8NsfGqYQfw6AjHG5fHYx2ARjyivqtHcjmqrzbe3WW4GoTUKUQy7UMTCZxsEdHcMGA3oh6K",
  "key39": "4XJP7Zxs6LaNZCyxAPeJTpMwUb9fgGE3gbXUn5vit1nfnXRy8gcJ5Xu7TeEmgBQfg7aYyq5DMGo4L6LkDex2ZvYj",
  "key40": "2VFmEHPSJ6HSSmpEoJGPNYBr9NFB7k5ACDqAbw18FeCUicbKuqNcenqNLmwGZA4cJgRPFczxN74gTBX571NgNdb5",
  "key41": "2jZiDwndJLfsS38SaZo2S7ZAAqge1K7eMoobrrnfbrTdGCdbyaUxsmyCocgT8VtdRhENTRaG972X9h5ANBVwozwm"
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
