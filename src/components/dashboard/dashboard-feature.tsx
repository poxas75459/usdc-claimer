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
    "Dzg5rPrftveszFr3jfeWgQqzFnQgajpVkJ6ZQWUdRJqFrf9ic2G5MyLcRVbXDFTzx1ap8PUYKeSr4ZnyMSsPjGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zrcp1UHudvrhRhkDzqzmEMF8Ta7A5tX4th4UE49pkUZDUsN4peDGdu2DwgCiwFwmurhtE91yFQQkFSVoA8EYj3a",
  "key1": "zH8FAyVPevYNprwi3HxNFJbUrjqnkDZLUJRvXMMsUhXRGecW74yFjBPUbW2FTNcf6SaWww7q9R3pGUJakq9ktxJ",
  "key2": "4EBzWD77Kvp8KNDL8U4jv8HSmsMXHPnnepLCZTgYrqupw8WXvowu7cB48Koha9MxWBJL7GJU2B73mUJgWmEnbEGv",
  "key3": "4ayfXdU97htPm8of1N7gNeGHKUVomYvjWot1SSwwRfbzk9SsMHBXRTAT5reLGDGUMGFjuq7z9fTTpKxtpKazcEUB",
  "key4": "59Q2JeJBsigm8hKshrm94F33fUYbuuMoaE58VST1jpLy7eXPfjmEDa5A5yUjDpAiR2a3SkbxLRNpbkqKAvLCS93K",
  "key5": "2upKRDuXpzMp9GDoH2zV6PkzkLcmCWpG68eneUYhiK4kkruCTMCiQz7YqzqHXnDjNiwnffGwqPt2gEjMCakoQZJt",
  "key6": "45d83HoWCo2wxg7KC8psgxn9p3axj9GLp8AMFjfa5r6UjheVy7xJq9nmXW1iqM1k1nHZKtiu5UXQyMrwpN42vtWY",
  "key7": "55wppywKF9FqdvqLMPTa58b1aimT7yJ9AL7gfR6SyRKCUPmHCKFdCDEMbB5tmLUpjbwFXarwKngy5xqPL4xWPtJh",
  "key8": "4846rTCo5cgirgUtqwwG4ejVXnPZYEJtgTKq2jryioe8ss1ZZQ5C7ELiJpvsZn9CvhrZ5HW8cby9aGdYanuqg4ES",
  "key9": "47DtCsmfEpRr4mBxcQQ9NfrNjmKfNeo3mLxVeohnHy7C7xZzY8tYn8sGmB2F5PE2y7R6p42nV1EZ7myu3bS96RNu",
  "key10": "36d6pLSkTFB39hSNSbcmvFzT1ARzfoth7qGy8gUTamWXjEPbUr8oYq1XNQuPd23ys3e5vNngEe4PzTj846K93qWz",
  "key11": "tWBb4RDwSMZnauLNB7dpPFYtCSoDGqnhLwzd9o5z4i1WCPJX9EkgZ1SkgQSnSx61dSfdYjtgGaMC892Wvjn9AZG",
  "key12": "M5WUqFhYxng2WPAA3gffrAZ7Mw23ABuWQfvygyLd9yPF6qSz9tdQ8BDSUjEYBYqGDAmPqqFK4GLKA8WAyvNekus",
  "key13": "3Jbt5WDyopzRu9Xdoybhphv1acHc3onadcMYTna4LNMh5kbJ4T5MqbvgvwwtdR7ofbySqJaSkSqTduEJ5QAAMdRD",
  "key14": "3mxTR5r7V43pCRtSB2PGn9dN1dRePytGu8Gn7axNtyBvCenLybx6VCpJ5mTheRw72Ysso63CzNC74HgPShdTgdf2",
  "key15": "4wJn94A1VgVSUX4jN3DiwykDwshAhT9wox13q2ztwQfYZFvQVfs75UusqJnQ7NwdRmzurGPtBLFcy7oMM31DhTHT",
  "key16": "3hazhcp5ZFJc4FVZDV6Wxh5avvpynM5RshzusmPD3zQTyqU1WncQQViHFpF5HnYL7q5ho93TDJNvujBvJStiqeVd",
  "key17": "5LQSjzaX1jf46qV9VbL5Ut5P5JLHHarczDw8edcuiYwhjNiLGj3daMrUrPdqvwAiQsNtLLV1Hukf7c4DKNBCJarn",
  "key18": "hDg4Vhfm4aaLy5bFJ92pmUcPCHguE5wGucm6pciTuvgiMvnEHPBy6qFoR8iQ5h1MrtKfqNnwihZgxssNqnwCfvJ",
  "key19": "2xvhdq6HFtG8XtCBWg9eQuxpUHTGEy9sSV4MjtBstSQvUsZE88XtmM7z6U7cbfMKBygrXU59Lb1PLTfvSc5Y63CH",
  "key20": "57Wtikrk3uTX1ptZq8gtJiQiQQuXSk8ZZvnrhdhEz9uj2B8KxEfJF6CS5XCRceP7oEA8U3EBRnNx1xy677w8sSN6",
  "key21": "fkgrvVqn9zvJvkjhfFhpKcMSTUQC1WHWshmWddyEMLuRc5oVEarC9kECPwVvTxjL2stbW9zH9i3FKZZwC1RH4PF",
  "key22": "phjz7wsiuyjzGMYZhTM7EYboWCfBQPN8VeewZdeVFRPPsB6tGockr97YstfMNBYmW53u18L4j5Y113sqeZWidP5",
  "key23": "3jYM5iecfguiepCRQZ7nRk5FouWmyv9kSWepckgYmbjcnY7CJhMmeXjMGK91sABMkd8BMGHMu5gWiUAqesxie8Xj",
  "key24": "4tWkTdYeFYBpSAmX2ang7Hy8eJ6zqeqbjGTzUoRPDK9WT7Pf1SReJ6LdggXBbKYk4agY3au2MK8omrmBX7Tr6z4N",
  "key25": "4JNY4Mpzzv13DxEXQKFVkaZf9y1Es1H1Dwjv6JgYCUNyAPF1FQtgQ2x5YocNVZ8koePyYBzurh9Lub4wsWHoiFMr",
  "key26": "Yof53Gs3ioToZLzmmD7LhrMnxk2V9sx4g8DF6H8XnDa49ZarQytGbotSoue7KhyyFPTctb5T65WrbR9Z2eka4UG",
  "key27": "2Yicf5TBKHuu35Unp9r6hdu36euN837XVn3R4ZJaD8qAgQGJHZK777jPBFZ6uiRtT2iSAsMhRnU38nGqbxAWeEnZ",
  "key28": "3Az3L2mybuSiqsoJV5SkY9QVwkW1quYSoaEu5SyJnxGtJ2iMi5Mz91mipjoT2uZY8qwdxJyYjQwPaCLU2XdAwpwM",
  "key29": "5zg7iSv4NeU9sShr5cE7n3DXkGYBaGYYscEEYKddRhu8MkC3fR5j3NtAnD39rgxXCuA9KqFAgraJy96RxN2AfxPA",
  "key30": "kvMxV5ZCfHB44Et9fpWGxs4tqxPHv9joL8nLmUCiKkP711kaxvU3i7oofyLsT7JuZeTJSgqoTu6ZDjTwyfVhNjx",
  "key31": "3up7ggsocnZhNq76HAQhGEX6da3VQZs6wFBrdCqDmrBAaSAoSMvZKDZcije5WTgYEkPwXsX845RaGJgtaVYYoFxV",
  "key32": "5J7SNRtcmC2mq2LADqHikLAuurt6vhYeTU8inZpAXkcYfUFTcXnjiKmRMJRzY1yr8GWye36R7bw5Z1rBuXiC5qiA",
  "key33": "4o3RSsuprXhKBYNN1VK1mpQXGJQeabUoyaFQYvppXEpKxFy6a9ivMsEgSATPt9nVpiv5uqdaXpGzXDYkGQzbTCkn",
  "key34": "21xNbknhr9yFQdDv6t6RTzFyd7ciBtzYGnPuYz4ExyfAdrX98W5RiqqBCAfiLzTiLUt4ZWyPvegtfu9ScC1FAQAP",
  "key35": "3g38GjebBTEkD5cMsRiTzTQZ4MPCHgrp9XnZQYB5dA4ijhDqXmypYg45mYNLj5jJn3EGZP5NW9ENSDMQbBbUB9zu",
  "key36": "ryHdqUEsip3JPCnqdWEzEJZw5XueQnoN5bNNqSYFYN39G3yt49P1NKhPyfQ9KmbmRVoEE3hdQoZDTrPh7bNjE94",
  "key37": "2NtyaCJ8HPcMBUMFW4oM1jpKmZriktsGtUL44vc7Rs7bFN4AXPmFASqW3na4viD7AFSCqUVfPShkipuxEip6tW7d",
  "key38": "a1inukWrpYb6qLjkTxaqrYR3RnGbZs1AiiDJiv3qhdiJvcSoNXXo3MGCVgbgmgodt3SVHEw36Vue8WC1CEznZMD",
  "key39": "4ezBJAkXD4iVWTw4yYn2PVah4au2ZzQ1xHBhm1Tzp5NKFzxejuTnJZv1StoubSjyCtVvFkuy8kf2qvJACZu3c6Au",
  "key40": "5Ent5LwQM5oHd13df8fsv7eysBLUmDFP2xP51TrFXX6HQv5TnSknBnqg2pNjvtA4S7h6uoPY8YgiEVQBfNsLhydq",
  "key41": "4UtkjQTnhVUgFffrMMQ54Xi9vbiWn2UbyuDG4MCcW1Abr44jfivrPPRfgTnVKA4NAsCEttpHHxBY5n8uRnFvqUZV",
  "key42": "g9bNmCLQhtawLi39Zgs5cqVWbG3o1C6w2LNUrN3Sm5pHtpMUJ1AbCrFwDYapiQ7hWJrK6DhXSK1Y2DnJXUn8bje",
  "key43": "34LpK9rbTU1j97XzzQHuHzCU5V3458uRGiHT5ciLaVSLJKRtDThSzu4z6Cx3jHvSqvXmkQN6iKa3y1FAdLPBSVCv",
  "key44": "5qcNsNvuLf6MRDRV3Xztn13XM1f4HiELRxYf53CJQwjtiwE3jtRehRV4qVTcRqY2FsAUubr7sJL72UqhLr5v1HNL",
  "key45": "2wARMD4o13MXy2tyYs222NPrWR3Zb1xvQWeRXSdsgRyk26xeKs4HrXvm5X548b7qpmYHvZRkZcouXXCEr1WB4La6"
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
