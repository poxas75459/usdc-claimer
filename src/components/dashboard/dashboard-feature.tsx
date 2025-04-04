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
    "5gzPoAXWBkWHniRaWKBXMUT8xUYbLHJS4xB8A4axH3KJuWcJTBrQ1zaUxgKJZuKBnE2w5MhZcVnYBs3zktg6jRhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Drf3zwqkUX1FCxCe7msXEEj8DPb7rawzZRScpHkFDBpFEwQdAfvpWDrZsMLrGDdfwpPYU6rkAurkaF5tbQD4FFN",
  "key1": "4s7b9BA8KbUztKwtyM6fGnsMz6krYDJZSynzveVVcu9htA3To5XFEH46zjpAfD8HQszCs4zdxCdzQFvo7FGBmMyi",
  "key2": "wB7W5X8WhX5tmFsXCK6qLZj5PU7fDZn2LmDPFT8sgTrumy816DrttsKQre7KK9LqCHE8ELLA1dEi8DZxXiHposc",
  "key3": "3837GEARZxCyv8LR4MMQf3Hm6g4Kih77gk7tqzGss32rvFCsoot7oHBvxu6pnEEvzvNnZby2pfQuXVVhbhu2ojg5",
  "key4": "4Zk8Jc316wJk4sk5WcxBp5UqVEBaKXeRhFDw2So1XQZGkTepAhsLinp3agg6Yy3Ln5M2JYKSd45wXYQb6Y8Js73m",
  "key5": "5ZfiU2qgJ3KDLLHvE9HgtY3QmJ8yvNDiwHZJp2mB2FpYPWJAaWcEjGyn1CxSjUHmB61KEu85qVyvXgHNzcr8md1W",
  "key6": "4eDuaXcqbGJmyP7jn1xXPBi94WXtSenZs8gScAg7TEKWKxeHUnoqFS9pjKRmkfKRvfR1YXjzKjycUb2bTAepFzAD",
  "key7": "2di6rCUrd5Pkp5VWbWdmJXh5P2nArxFb5Lcy6syuNkUhKjxdMDxJ8Z6f5hsZxbFufa5U1hsUVAEpTQfC6qxcrZz6",
  "key8": "47Dw55hzkwogX4FuBjyeUjr3iP3wmLmMQD4nSUaHdkrZsdfNL75p6fAgrFrzwzv1XaU5swstHwbE3tfqZ1ZZ3dUF",
  "key9": "55HRfJUQshZGM5Arwb3AuAPtEWgv5296C2EG2H9oM9zHg77yubG3VB9ZL1Hk1AzbWwL9pJbgjmPviumLsyMzkTQs",
  "key10": "4T8Rvgek3etgwHngZGEj5z9CYF5EkqpfCYMUYkBh1KC3xdHaXm5VCxwHrYwWZ5S79HR9JqYW3ZdCRU37LeqD7sT2",
  "key11": "219MmLPRcEc4rc2wNnAk5XwWGefdHYqiuQ4jXLNHxpT5u8v13i1bETxfct1AzUstmDo39Qx4hzDwEJwpgjps4KUU",
  "key12": "2xQC1XmdQzfzpHfQ7vmh5BquPffxK4yWyXftHLaG1KWo8adnpbCkt7no5NKSEVLKxisuezRYJX4oXMAyeUr7Jcbp",
  "key13": "5Cm8y8ego2XLs5B9Wp2bNWyMSxATxJ2Em1ufUfbyZrLD9tPAdn4rXupXETx5vpeyX4pbSvVwd4msVeTsvfYfpYeg",
  "key14": "4pPP6B1pDR76CNRKNA9jEDF1yKLeXz7tqZ823N3h1KFwMTDvWVVgFtR18UJJfwDmTf8qacRhTKwHMcTKsFxfQRna",
  "key15": "38Zqw2DkTCzcXdCN5zMYsfPAm54n3R9W3q1kAxUhhrHDGBnafhQt7pKSRtmDV73xE9YjTwS6m5qobexBzHgS9coR",
  "key16": "5pksg33jpULrGoayF8YXdf5ZdUWk28mwSjZuew3a1ZVcyTpphFSp1BpWapiXYVtFnExHbqvrfjNTzhDfMkYVZHyb",
  "key17": "2Y2HFZFhrzhRQVCWVt9boNgyiZoDtggdtR5w2K26K9hfp8Y7NtfNMhLj722ebnYDZT4dKjKxqivdsrKvXdrr3tj9",
  "key18": "3uYb7ZJ7kzjHPMNPUe2ZavmkT6XCLvPYGqSmo4GZgdUdoMGNkY3jbXnaPVUyzmwmWD5pduPHVCzWBgZRsjUTLMCL",
  "key19": "5M7LHj8hcLTRWmUmd5DyXxpoS3MFr2ckNACWRRT9qhuNjsPDRSYV5B6LE16sKqzX9UUwek6v1i6hwQnkJU5E9Shj",
  "key20": "3XWZu5Yn3PrpwuL4DUaYNZww75hjTUw9jC2mGj6xBueazMwDkQhhFCPZsuFEEbVQVU6h6Lauv7YiJLy1aBBH36an",
  "key21": "d5ECK2CpUkfZryegKYypHQREKnQRPyLNLXzupHXsp4kApzv3kyNgZarYLSRr3W79dMiHbMqz3qmPtve4cgaC4su",
  "key22": "4EBbhySk6BFxaL1EwVSYsPnFVBjX9EBpjad1a38bb9iauLLRxeyPYa46LsuzdWyFM4zVZkdpXWb6D9qhZd15hedt",
  "key23": "jmYC2qy3NUzKPC45bjbUeaxnLTV5TKWaTrSgJcJer5PCKBTBVHMpmTyXCvbCuqdmEPyfzb4aCpK2GYqq9aR3z1q",
  "key24": "5qhTDb5fLS9ZnX1ERj2U184wpMp824BNrahN9t6Coufk5gk9r2JUCz5N7coeEZPPk4ZfVVJ1uGtF87zTCMMsiR7p",
  "key25": "uYzXsZdyUBnjYdiP3j8MLXndAjscAMJ34KZc3uRChB4fo2tBnzUGMHhh2vb3H31VTcFmp513fAfbCoYozuPdtLA",
  "key26": "2jkTwsF1yxqwwaK8A5dmFb32XKeUkKC3R7rwqyjcBwk9pnTSXQBWzsFHStCBNonsZQVLVYN76dihhFQP79QAFTsJ",
  "key27": "35VpQZEWCyDsg77r2Ko9gsbffxj3NBasae1AFFVH37tWuzkTwuxbJY17WYqSLJzz3MJ4JRnztuywM4UvHjiM3kdx",
  "key28": "5dq1BQCZmnNXV8DorYpMcujG9W5ApDJeJ5ApJ5NUSJrvZbWmeujpMbRp9GkHhAHfUtBwjXtaD2bC1KEprCgnip74",
  "key29": "2BVjmZa2nm9hfyX7YLnhkBKVwhDZ4m3rXXUD5gFKqgYAYj4rHczcLnsaedh7y9vBCHbePGwaHnYg37eihgx92x6Y",
  "key30": "5nQdGPKcqZ6LhCuP45cYi2B699J6G26FfFuzk7mh2c7j5Ztnz5S59swu5gt2dLe7LrSfFjjuxQe3pbU5jAiGu97v",
  "key31": "2rBHkG56SbDqjFuZgJKXgemo1cvZXwzhongSykFNf6yMzc2UBejJ99ooPrMtzPZsuvazv4W84FwYrMSUcBgddSLd",
  "key32": "38GDSxABeUNbUK4QAgstdtLKvPGtK4S2oin2wT9jByckmJLEzC3P5PVKa6YKA4pHn2xYUG86SK79mc6VeXtQg5TQ",
  "key33": "3X1qGbJMRPGf1kZQNLn2jYpRABFJpWi7Xz9U1xcethRYdp6VjrnZNoZUJWUR1fdbxWank4nezN31vZLCDGLkVnDe",
  "key34": "3UJhwJ3eu4BQfuewKrPSEJuxe5qQ4razygGmfJeTfG1GGf6qyzJ1meQfSaVtELZF7wB43AmA1YfiWzZxdZq2TjcU",
  "key35": "3wrGEFjGFVZ8GYJLprmZx1L9H6Pz3Jm8ecME33DM3wAz8BN5ZkEuxbJpVEUnbCBk3U3hg5KhZkFEQBwPnGw9Mu7f",
  "key36": "27ZjhxizPeHueozLaiYHwjmCmDEyHW8qbq8ahRPfzE5AipUMduryf2AR8Dz729zuKeT1e3MUcnBJQNv1DbBkL1xc",
  "key37": "65ePZ8yhVa8s8AiaK7Dws9piSfXafePibHTXuuamANjNb35cgvWD3ZuiEdKrfobTp3BLGHvmEWGLy8wYuQHx3DmZ",
  "key38": "63qsiVu5tCE7ftQMwAZfVBPrzzLs4okduT9iuNZGUnzPZPd8T2p9DC7G95qjrgVQMadKpuAVhg7vVw5CRivLR6L1",
  "key39": "rpB1fjZnSSpQxkpkvq5q8etmMSPypJwui6AavQmGy2k4pHK9j4cCnta2p4hCQccZnuzJzpxVEiJgsRGZNRvh6PH",
  "key40": "3ojnaF2ZRYRyKY7FbzCxkEYoksMmrxSRQHJdAnpCX4qAS8y2eyHqK8zp41YBNtjePj5QWetD8kzKdtvinF5kHNiy",
  "key41": "4xtDwm4YKPmBzs8Wy3oQw5csDsYxo7tmY9bmkWpmozPYSSupXbmSxWZPUfaNEFSQh348ZH5a6GT3rUcweRt61E2N",
  "key42": "28wCajj6JcELNiBKRtYgfyDV37cYZP9WWm5EKyVStdSzgY67aVXedjMXmuNFE4zpcY2Z1zLd1Tko9efLEaV9qv13",
  "key43": "3pJ9mcTYCcFipr9GMT4JFDfZo9KkhQc32TNgRt16ghBGpyFzuzgjQpC3N3vE8jNd6cqHt6Mq4zL6DUGJbqEDqdWo",
  "key44": "3FntqD31kYEPXr4XReH2BKXAE8Zu7ra342Aae1qTL8U3HBuYtuJxhDWfhcPNkTCWysdKK6AdJDEZVzScPWFCzGuP",
  "key45": "2o5xAg2GEExMaURQS6J18oE9NDESXzqZP9sGecK252SALeWA94b8cdR2wJmy54YkygLAyh2P3PhgADBXtzKMd8pu",
  "key46": "4sBAZqVL3pPBRJUfPvoYTSeyPSxH4mdnCv4aZrXpa8fzMovr6PYEsApaW4YgBQnAU7sThT72Uc9XcxYDsR2ub5Jq",
  "key47": "3EYysWxUjQQDiXbCA21HeSmTjLUPqYYNkqyqRn3z1EwFdeM2fieGTg2ZUdPMuKYXQ2b98Rqz3HxBexQrqMiw7Ggz",
  "key48": "4z41pjbJETqrLaPw8DvjTw95gJBT1GE24nRUctJShqxsksWqy8XnjiVaf1ebFymharTqThcLCpwsQCH6R6abidpm",
  "key49": "4ujsaCFrbNgg3FoUMJ8xus64n779vDdDRxm8XgGvfXhqykVqLzmZBt2JL85eZNTJDBmfHSexEDf1ZXoB1QrGNxYo"
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
