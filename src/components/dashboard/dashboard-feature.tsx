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
    "3j7fCPn857j4ttAgLQpfjt36t6UhYPKzPoCFsVaMqF6TZHo5jimpLaYnJt3oUJJ9yxZiaNnzVRuAmi8omEovrENN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tT4wCD1EpV2J5SXcUy5CArwkkikgSjgZXqM3QoLvtXDTsjakw4c25UbxvhMuQBvguAt51D81pRTvZJRZwa4aRur",
  "key1": "3MwtsQBDg9vwJbmwtkMBi8wmPYpFY4uyBSW2ES9o8D8bwELZxqw9Zy9HhwVKTy45ThyFrKSdQ23a5z6i6joSb69z",
  "key2": "BnSWxyPSwQ4DuNYGQ1RSNyR1wcpR123NtUMRQGLmJySXQZaUBASFP9rKuWSQbgkH7KhkQBQFUzJVwZDvsEv2hhZ",
  "key3": "38Tx9jQ9FmTH6SkRY8pdwSRtz5KV1VJ92H4T8DGkJ69pGoDEGfKriLGofxMUcMP2hto6iPPbDrnKS8mE1pNkT8Xn",
  "key4": "5rbf6Rgpf17J5xGoc5re5qW479LDfv3EUkuL9GffAa1EZqnBUFTKwqyFbYJXsvbKqc4PCX2jNwPsjKAFTTodzv4f",
  "key5": "2v92hpRo89KRXqTGF43FYyPw9JovNsLZ5vXEYdD3mzfTKPdDbYxjfTveW8jZffj4FabArEjfcmvDiC2ksq8TxfU3",
  "key6": "YwmSvxKXcX1Fp8mPaEeuuy6vsUFRuPePAMr54xft85ucaM1Z8FmEdVgkJ64ToaiYqn5a17ED51ujLyh1frhCVqH",
  "key7": "37GX1g5kK51599z9LYbkkiD9EDP4jHS744KGVQHUjp8CNDn4YZvKzFjNijXPeByemtqohLDoxJ6RnLWwGFN6gdmV",
  "key8": "3wAYUGw3oz2p17HhhSFBcMEYgG2EDLYh8cWbDk2ugnYmKCj7VfPJC7f2WTgFxzBJ8Q5h6SdW5TEafd4d8aKWSTi4",
  "key9": "2aoRgmJDMNowDi1bsj9UCJbvLAKfuDfgnpsArxVFuNxk11wF3XCqz65JAsSDqjfhYu4oUpqjf3hZmCZ8m63SDp2q",
  "key10": "3SWLjdyEHaC2igt5ssSeXtmoDcgVJJ8joWWPQkthywSRA34Xyw8Zf56nwuCiRnA8iucSacSrUQPa8QFwYS1rVkSk",
  "key11": "32CX9d9Pe8FQ2esch17kox8cxsZKju1Qbi8VuoaJSGkCEBrRczBum9TF18uU68MXQsZWgZ37Se1QPGw4achCfpiD",
  "key12": "3L2RMobxLEREPqnkppDKgVT2zsLeJKxWLzcAxR4qQfMnMJGrBbEyr3J7QQY5WrFUXiVViioUaBJGEgfBtbAJ9pb4",
  "key13": "3gb3e81WWnGDttSrqvkepRokLSVFj3gKzR1Ux6jXQvNY32jSC7Xb6ipuUzWUSMR4wLNZD4MoPXw948JyLPcdggUN",
  "key14": "jSYGizhsYELemB8FkY5uu6DGQ2ry78Z6SFEabPZ1yQyGPd4osEDvAK4E7LFLPGNXUvQ6oP47k8jha23ZUdCQhk5",
  "key15": "5rFWLaz5EicUQxbXdWaYmczrqr83ce54e9cubhVyvw2UGS2YLg8wa5Kb8f2TFRP81SRcNr7w5VUXe3hUbxwTFEeY",
  "key16": "cFWF4beV2YaTiBrD51UxA3ZngZuVKaJvj86k8qPwoTLEHcpqzAaBAgGujPRD3MyMeisJ1ePbJMB4m9E59a8QD86",
  "key17": "5Yd59QyBhpcdCMRPBG5UCe5LivrKPupEGbgDsuVPFJzAaMwDz2GxFCiNLN7vCh6QTBv6bvWFTD1ygYYh5yfCaVAf",
  "key18": "336zuoLt1buC8Kxkx6Rg5YJHAv7vPG4Gg7koSGuuJ8HsLD8EFsfC5Yr54Yfk8P8Mv8GNayLyAntC2C42zyzQq45m",
  "key19": "3AMeCwTJ9HKYTsdFX2X8YjbNYw96yWoNpVTEtebYEQGxZJ5opgXqffiTVXb6KWm6uLsoFCbA7tFh1qa6W7KvACp8",
  "key20": "2ny98WDGLbQQPKMd1RYCRWMqFB2p7r3UeHDaFob7on2qevbuqPLtZCXR6xAfoCKyuX8ehustp9bAUPZx7a4fkb76",
  "key21": "TJvZjqi5gsxpXpgJkP4XszysfgbqHcLk6SB3jLVbABNWc9yGpxzc2gdrvxpbXwsX8mNkn7Tu6yoGGU2eyFEHBMf",
  "key22": "5eYhi9vihkju9KiATgwme44knEaAv1JoZ8JoRrffM6UdUC1ZKUdg4LcjYiWWEURvAwxF3Ta8RaSweycpMPDq8wW7",
  "key23": "xgLuLmjQcUPUEhvC276dGTjem1WEmRJomiteXCRCvhj1xg7W6sXoaVzsU3vPfGQLdh6xTXuVNPQGDP5n19RYCeF",
  "key24": "5rJ1Br6Wz3aQH8mYPb1nipyTmKkregz2KqNjDfhhJRp1gjnEZZLAXDyozdZhLY5J25ymv1wBH1UMcppoLYPXfKUv",
  "key25": "5vHDPFMzFJuMVR2RpNB5W16SCaPR6CmN57Fp8YR8RzsjP2aPucLUyt5yQBTyc7c97YWcQsfgf5EkqYyCNxz8AokV",
  "key26": "4C3adyN7a3xAhRKtMnwuenwVrXogsUATHvKVf99Tqx66BwVTunrh1BTWLbkixcBGtiSDtbtdFJfZqaFhFtqA7CmV",
  "key27": "4ANG9Q9EwWTyedLvDg52U6N8JpN8hd8eiqpzmWurDdkWwUJD9SMgagJxVhVxTi7aQLGcnQ5u5343yVmWR52y4m6p",
  "key28": "3UFdS1oEv2RksP4s1CVk2mKCAmc6zQMvJ45rgk1T8GcFzLJFE2x9oWP7yesdowBxzLdz5K9Lhav9SYEHpWsKvz52",
  "key29": "66Jada9YjQZ8HYcUMkr2jvbYQMAy7JiKWchb5Sd9CEyrxJyo5NNsdF9LXefss21wRC4LdKpxQ9Nhn2kV12uJEkCH",
  "key30": "2z8Frx4Zj7pJ1A97riQPAjEJ6wZnXMaA56Y4T46mLpJg2XU978KfPVdSGrhxNpxDn1YfDvSkC4rA12h2tJPQkfrR",
  "key31": "62Ab3wsajQ4SRYbHGrgpmXfoyNmoNHia7pSFmFmmAfYYquZewUQ6mEpL13yefEt8kx9eMkXbAnEzmBCoDVsyaMdK",
  "key32": "ahDr48ppG2EcxGXKShYx4C1yiixBekRJkUmHhriZdCf8citkX2KPTYDaB6KbgaWuahJyZYnDAn2sSG3bUAb6QMh",
  "key33": "2UNMqwoTMr8o8bbpn8oWeSk2VzPeAZfjXEmZhNm7XJ8w9DyL3a92NWp6Jf7n81YGf9DWd8Rz644PQukZqfxzbBrK",
  "key34": "4SMTvVnissegb2zx7e9UEBmXwVcHfwFhyzDtdBVGTQUkSjvznkUhaDhvz7HutdhmkvGiEUZorwsqS91qPyxdvvbo",
  "key35": "5wXMtQYNJiUAUEkSVXhkHkf2gar7C8JSJZFkqhgbhXTgda3V9Ro6BHeBeqXjc6R4Dt5ZXk9Ri8hePpwodkDRM9Ua",
  "key36": "vmFmwBXp19yPTzS38htTBejr2BUyhYGDeJbZE6YEKq6xzXV6L5Tie4RzH4voqsiXRQzEwNEQ88mPPC3pnjuGSmS",
  "key37": "5egqV4ed5WM8mx8jRDuAFZiey4uE69xJGSjcyDpPqaTKvVjD3HuWTRg6E8HC3au5oYoDxJKfkVGjmSgD1rqtrEnB",
  "key38": "3baUNZEUZk6j28TwTZpdXzDKQEdr9x6qEmksNaJmyP7zxwHne8DbK3uU9VCohGqnXMLvtEhcK9vQfqFWD5EaeXCq",
  "key39": "24ZaX4KRC2GuPZuKJn5y4tjH87XQbQCDNNu6AmbMZYX3JpFCviF57JiPKqnevKATokNXrhTa5TrAegH6yM8rNPA6",
  "key40": "3VJSnbTW8gJyx3v3Yn6eGc3GFWJZcVkr6LHzVEySnhDJgUceiRSPf69nKNM3YNMsXUib3h6jD372tBZq2PNZKPJ5",
  "key41": "4ZhT9NxUbN7SNUWkjDhxGipBJVwrQXFMHp81M6oSNGznMgvQcvQvs5hcb8aEcyFfch5UL6GsAZVgJaB6MHSP2ggv",
  "key42": "4Xd3JanC241zTpjnzC5ENQsrLahGWPyv496LXFzbMtFCWBt1xSfZmEPLPMPwvrN8FFE5br9Fm9nnZcHVmdXPNEXK",
  "key43": "4yHa88QhGTfpv9hvRL5YWmy5BwGLmLcQHFHJ6Ja8gKy32eCPspoqPu1KjjXivVRoKbK1U7XdrMaKMrpd2Vk5v3sU",
  "key44": "twHkvtdTUkNLijaGUu7JXBcd2m5mkkLBQN8dDaAh64gUo7AmmD6zxhNt8b3PjLR4qDU6hB5xRvkVchkHVgLEPnY",
  "key45": "5h7nLQaEy4kWKdyrzixJVzLyiCrDYx6qi53fQLmUbHn16xu6LeB8Q7LdQGvN8uuxvXsyyeMA5JyU32Q8x785xDYC",
  "key46": "3rsLLX9Eiq92owgXncEyMZ9ViBqKEGuHZTgPLYEZNMZ4tmjvvuohggn7x2AnZYLSHk4bcjck8az7grudJYNSsmaX"
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
