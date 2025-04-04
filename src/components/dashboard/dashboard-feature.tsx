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
    "ZQPRcnS4GAyn2tuGwCSWduCSWz54wox6C8L3kDrMTqbkwuL91NgQBZykNJgiPd1qzKKV4YyBMrLLvPKJzYeLz9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655kLtLeXs2s93h5z1WCcEo3bGhHB4RZUqqbqwbva1aVzf6LZMXNDdgxVaW6hjtKDJg1t75pc9btXKiG8LJCoKfc",
  "key1": "3e5DC6Re3MoyPYLB3P2P812XozDqfKKLXqWMGT461X9VunUKwezKNJvwTBuKVcFpbNJe6gtuVQKrW5ZUDZh36iCB",
  "key2": "4mHJLrWtpaGLHuisFtwAYAQ5rwhbWXmTe9yLEngoxPYGikdbUW9YRZrEMD1LqxBVon6tAJSRUaF5thoPc77E89mT",
  "key3": "5pWkHoRRAjTuNCcuGN48D8hspmqK9rWDbP9uGTvJfvK25UoV2RmczUa8c33ydCqs7LY3x874xWn5qhcuibWARYk1",
  "key4": "67kSYNXtc8aJkEkPpv61qR5dAVkd6RsoCztNz6j1uNAZfkKkMswhdw2E9PGAMVzaRCMysVohtYYBiFPpwonCau4n",
  "key5": "3RyjqrvcY4Rreu2HMuqmGoh8LJqRgaFDVcQA4in36VZtbbrE51iqZXG2gnhu5NygT89nRCpNaQKPn7BoMERbdvKw",
  "key6": "sTekprExiLFi9L7ipw8CE6KvfqHPenHkETSnWauAz11Npb6CwBbTLEVU98t4pB4xgzTFx1Ss1eKiDreDjrrhDbu",
  "key7": "26YUooA7horU2C8py1CZc1o8wYBm4pLpEEJYGN4D8iw4Ko3Y3eehKFiddCYuT2yjDPEZRsG1xqQA5xyH4ubgG7hH",
  "key8": "2DangtUWBqz1bPuoWccjNt7Bn4eG6o1hJjoYTvU3tvwSh5WSXuYB8kTvhy4MPuNCCqBAr8cu8cJcbWmxeC2qcSs3",
  "key9": "5a8Rgsx8XaNk7hSgSmg8BANfYVZTqU8aDzFLGMAMUgbR4obDmxKmjBr43z9qv131zHAq5UHG1RD2XRQS4M5g55iN",
  "key10": "54Sv6iGLCjrBEUG6APeLPmr5gpLkci5w2j7GRfQ5FhyBkPZYo1LXM4LEYJSQAjmUndhZNfsKU2wAekxPRnDWPLsZ",
  "key11": "4mPqFtimwJhenc8v2cMnQRzXAmSAY3194F5fS2oW4URuw3QwMGd1swnemMqm2Y3zT7U6xF9xzfiry2mBCZRjc2EU",
  "key12": "4akBBvovhF1QeGnoTvFhB7uriWZ2o8jwqrMqdNoN47nHbMFopy7B26uUxFXKbujx6PKfJMcXbT5tpiHpSw3SGK9i",
  "key13": "63RP75hMMqDPBZqDxToPvvTTCRuQhx9yH88WtythvDh1LfjXurXdJkEBAsx3f6TcdZtoAyMkMxz113xWn8aNkoxf",
  "key14": "5TZiNv26qtzTdx4P1wPZRgcxcUDz8LX7Q4Yz4XRS4RhqvANW4qUhJwM2ANqkH1wWZiVRR9fm4Z7qjS3QCjnbL5SC",
  "key15": "Zp2G3XHGFH6UbE5kQpRobJtn6v6E4izu9n2pTGqq1MjA3EZVaUsJwtNUNmLBY1XSrAZZj7DQ7paQu7ippBqXhmd",
  "key16": "4uS94Dh6de1DYZuJQnt5z6rfXrun6qkyF7x4nssLnKtAHcXq19dqnjrxJ73bth6vrr9RGFFCVxabepJjoARAj8JH",
  "key17": "3ar1uimF3G4Tyze4Kp2e6VEFdTsPHeTRMKf55m7JqFMDD4NdsivbarxWNE6ZBERJ2ccwdvN2cAEwFMrru8eRDG3j",
  "key18": "2Jr6Affbuyop8YtSyV4obyKZfhqRGVJk3v7sA42Bwsiw7RT8RE2YxUsEisTL2XgZmdZve9UMyGTjCrGgQqEeNDPZ",
  "key19": "3PAzX8bvnsTjLF63aKK5suHwb4dnSQ211CpyF5v3SMiLzz7qZDUe8oMJ2QdPtJaFwf82fKSFWNaFaxpoUM8wVQdK",
  "key20": "5YSjAvM9zJa3g6cPJiGooFYumYzU9X4CmRT59jmkfKHqb6HkzrvwzBmaSGGHAjWJB7fWWDZa7iUv3oaCPvdoYWdr",
  "key21": "bvT1kL29vko8dB3Mt9dJNY7Vy1B9KE7GHuRrsV7UFHirKpntkHoah72wGKT69crRqg6QwhRdHT73WkHo6NZLdfk",
  "key22": "w5ru4L6NuKjiKGCjqjS5PEow2L4Y58NgdQmLjA3KUVzRnZm7NZFUcNCMomECDY6QKrTyGiNUMNXiWvQ4GHbUWqU",
  "key23": "8RH4f3wbT1xW62VNdtP6K5WtPLTPJrE1SMdxRKgQ55mE87WJhWH7YBz1yfHu41hVM99hqGvmb1w5WBdmepFoCng",
  "key24": "5tjv69aQb99QzZWM9oXvc2SR4eXvw1L6J1LxCV8ruMejnGrawConxEZMG9V2HmGhFfnjXePFuwy65hvRgeSHfX16",
  "key25": "5WnyfBU1PnhXWJSNUp4Ktv5jEeG3fCWVs93mu4A8tFM2j4gyKjYkmqKEjVBqzvN8uQritNyJvqb9KQ42JpuX6v6z",
  "key26": "HaucbyDpRwiHRJwFebaF41LCB8c7wwYXebixYhyqG6mFqSjLUN7rywL3MftfNQz9Px92mBGot4rfC82JJwTkuz2",
  "key27": "5v13EUbaT9HV972Xayv6rezibRmiPUfbXN19T9Kpw7gHJ9uEmtw1YgGg6MQMn1fxdMLTb8PUGcHBWjbmVgsdTYdh",
  "key28": "5M69UaanxaGcMDzm1njbhKjTF1JZ48hMSu15tgA5N9W3eupeXBNcwYvZkj8f1gM1CB4HjkwXEzxcjVZkSzWJcF7p",
  "key29": "4zaNipGHuhBHUqR6wS7E2qcprpXjkgmxq6yiQ3ygXRGZND6MYPCtxqzPHFGQNpsdY99VepXRiXyN566shdqJdkWZ",
  "key30": "45e6TWsEcQ2MYMihXazvDB2Nv7YCoPRXc4qu7rEY19ecNC7dsNVtbyny1yCmxAbEfx4pSwLj17wZCeMyDADR2t42",
  "key31": "48usRD1L9vXiJnG6RVkB2ZsezbXyrwpwMc1NuT2ZWcdYPGkyjTWe9h2Lk1Df1FPkk92UmqLHKSmpZc5KJuihPcif",
  "key32": "4wVVa8YjL2QPB1Fv57rPwmBhFnQ6fZi3Qt7H7jSTUHNCeFX6UfHe5frZXL1rgSEsDvmvCjzEUkCw54GvZi4kpHqy",
  "key33": "5YxtuaEGSgDHHBZbpsZmyuiWWCo58wbx2xdVd4z2emAR8WUSj49iWnkHANQk7B6rVoUJeq2MrCYZqZciqWXheVfn",
  "key34": "5zK5mLHKKQ4HWxKZkcDsZp6JjSHWxnQ6RPSMfg8mHah5DJ7cF2eAF6fadLTbJm2Mi6gWu8jDf6bT3Vt2dk4zvsNS",
  "key35": "3eh5caymGpfY2hyp7LnmENeGKCrveRkhh51wT8hZzj2sVLG4mgDwfNA65fdZLMuHSSShBY4pT1hk5dAKExXCyrQL",
  "key36": "2imDscrM8ZrSVaoZvLJMN9VcAQjqAcBAhSrjZ2P6y3dB3pjEJDjuYJ7C6x76BvX4xtaS6VhQnxjye6RsdYLcqzpv",
  "key37": "4PeEBTvSVYN99MtoLeuoRQZ4pREiNRPvFp4Mj2SXfcvzvo8yJHLSmssm69tyiXKWbLsEspAfMQ7dEVp73eJj7aAh",
  "key38": "3AX4E4CSQzBpUK79KwMcPf25o1cBejfFExQ4mHYATGNHyGaCAuWbCbDUQQwUUo5f2WTism3wNcJRD8GTd3aMSp7e",
  "key39": "447CCetbv8SkV3wq3T3SJtDygU32WbxuZ6jYJMSNNqokBnS4Zr4dw1SBEPhmEYFcTYGxqsp1nnAxDae4grpyiQ1X",
  "key40": "64bx4HNFRL8xwd8iG3mH4mHZncbWMsJo8poKrcbmWvyttg7gAsbDxw3tAYW733vuCDdxAcYZPXVnE4w3FUq7qdeb",
  "key41": "5DtHpgPJ3Z479ba6bgqHEnsKrW3h9jJmkNwiHyRJxcc7nMnUK2YKAsaKwzxbTFtg86Nb9W1BFZGFkk5Nv2BUXAcb"
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
