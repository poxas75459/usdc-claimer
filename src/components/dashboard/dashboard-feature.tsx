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
    "4VnihiR438NpHARTRMcxc4GoC11btE31yP2XkG3UkXqttM7vdvqcyMgiMRh1r54Xu3egWaiSDTUu2XQJZb3YJBGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mT9VyztARXgHhaX9TG9fctDwT4Ds4XBpa9WwXjW9imPzoDdjAs9QZSi93NwRNhFdiptpQqEk5XGwsgX7BNXh972",
  "key1": "5swijZJEz3GpWAt4feUjnJKZ3FsB2ZUf1S7EqrJ3LELkMtz6Qq18BCxQU2iHVd5oXWwECB4Fveafsqb863dxsjvb",
  "key2": "dpya8SX2LXWAC1joZFVYh5d4s2aXkXbxZrN9JRxGGL9Y2rVTwMSxM1JhP7t8Z8Dn25MSqhr84kQnmmcY8HZh7MF",
  "key3": "vdCMZgjiZw2wETGLsSzSruiExDp59bHbK2C6eXBBdVd1qG1nr5nygH3X6XWenxhN933jiDsRDys9LocozkCCCeG",
  "key4": "4gQe1PpM61uP21NAQNzqUQrMggwDu3oZDUgojrKEnsFkayjxChPY9o9Da4Lumn6QCXGYTzJzynNfQA7tJnEucFyr",
  "key5": "4EaX2bhPkjkbV9kTUeCsRhJZxb6WSjwpPtBDD1rmQYZ8jTuN31JoNovQhc99BFzSeY263kPuaPesTq4WxNc2P9x8",
  "key6": "2D9xvMoXR94ZnEAvnoj5WCxwoS5mApPv7EZbuG3ZAxpZmYWG1BKbYtcPHDU5jsJ7QVF1ASmB2kdBRwYbCBVQ3KkZ",
  "key7": "3DsnWZdRF3RYVRDpVuVnbHUCtikWNviYMFthKtQALE87eKN6amUufmtSJJhFyGo8p2twHw95ybkbs1YoF9DSzJ9m",
  "key8": "2xc51ysRJpiEniyCCdKYLFVgnRdhf6HUuiH414EThhpB1qmVMWAQV3NPM3iVkTZr4KRLTQTEgNoPyi6udBYTPKqc",
  "key9": "53oLHKmtENLCJsKBNqmSgojcdd8VEKJwiYVovxBFwBYUZZd254CwyarGGo7CXBJPBuvP514Gd6HpZxawxvanYg9j",
  "key10": "3yL6YVk1FJSr8wMR1toYXhLBX169wJUdo1EXz2pPUYdGa7L2mEQcQJR25T8R2zWjU78ubDxhGJT218FcRogNWmK8",
  "key11": "2u2VaHwVfwRpDYXj2cahLUdSVFXkEtTErCtKEfhSCDHjd3qMZocBSVwXrzCfv1G2c8yXhqm59WTwpdvM18gcwfsR",
  "key12": "4Z63SYCdmQZKM9t8tySbGqq2vHC9EvHf4zpyn8U74tbD7o1sjyfQifndpQCVuJiP9MyMK31gyJFb3dUu7AAJCvCG",
  "key13": "4GshJKo8nCUxrC3mBwcB6pw9jdyKA2MpSTsihDsB4iu9LkZWaAj24tqfDGbL8e1kzJ4QyDS3WinkpjoPhmugvGGV",
  "key14": "2yXgAym62WHsi6ADMTGwm1bQZ8RkKSwWVsaotxG7wKVRHJE6xUKyCQXxRyyGV8umXtGxX67VmCcNpscrwrvqKXus",
  "key15": "3z6SZTV83gLRbA92iTsK7VvW32WmgCxCKXqN1PAMhHU7Z8RQHp7QrXwU16yudHs2R7q4fsyrUT4VJbuWpJxwziwG",
  "key16": "45RYHvFvHrgGFHXCmKJAqBrhyx35idHJFd8V33kDwAhMwgCbi3vFfpc7SnYQDSoJvAX7Zih2hCBYr5oNxYyqVxL1",
  "key17": "5HEpzuA93Wzz3nEq8fDzqSXsyfvUxquTpzrDPqCgrK786K5HPdh6pX49fNboVw1ABWvo1Sincx8aWw1BWJ5umHHQ",
  "key18": "ivKqUPi3srWN923RYMQaL3PvFMLHZFFTqgUfLCm7EUsGyvWWAzdnmiwP4DVNMK1d1TF6uSrQ25GGSuCrKVb3H7D",
  "key19": "gHviP5GpuDUdA66iZdYepZHN8qNXCWu2wi45DsJa3ABkMh5FSnShzheNXtXG1J1qy1jBonNAjorioxgn8w6fSA9",
  "key20": "2LikDkJY96KMnYypqTvsVwokXerHJp2N5v6y1vDpK1hJoVfaaUXjpePXQYHPiQHYRc1urGADhoW395vnxjEVy5Xd",
  "key21": "66fTmTMoBdtm6NSNJG4Cm8fkRkm1xZvKdzHg1Q7sanYUazxSYnFL4bSmXXF57RsMCxJKpT8D6ZvbcTwXV17wC1Y4",
  "key22": "28A2sTdVoN8YpQxo9opwBoUGv9xge4Hd2vhW9bGh7by8kU5bWVXt3k52J9WfNHLa5UKfN7N62CCDuuGctviGT3Pq",
  "key23": "3ae29UmHG8vr58t61aDy4HCDGGs1eroFFpzfhaNhKQeGj3H5KSjVv7cC6RdsKGJpbtn1EMo5AdeMDfLnin2uCJ3w",
  "key24": "2k5SK4Su1Rg6vuhAfPJr3hJbABxhnhnH5cJgLWKuKwFQNumHn5dtzcBhNqtzz6nMjMEqcLM1LcKZN7fkR2QtLyXj",
  "key25": "e9MLcr4raq8JoJJZFcqLeJVsmSfmT11tmLeBPMNt32T5Y13sibCzL5aXL3Kc4PDNT291UsWQd9jyHW1RSmH2LaW",
  "key26": "5zquDQA77W5gNN2rdtiWjU6CYp8LRk2oTbeFdAVBr6GjxYiacYqGkhHXPQ2Hh2Tb6n3ZmuKLMGD4qPyzDUmwCE8T",
  "key27": "tchGTFuTfSWkXLarxZDpycZU6jpngVxQckUMexYUbfb17pK5gCQibDB9RAEawRNwc3VdwwixHCx21nWe5SJ9i7f",
  "key28": "2Ty2UARNBqjAL7hQAFD9SxUuaU9CgDDwXKvCXqbWs9NBnH9ZShJ1382j7eLUzz6GMmh4RdubeJrWvvU6gm7VhoTu",
  "key29": "4WrTLEcF52kK4VkywW3NrmZYpVVSujzdAn8DTPWFL2MkoHJXos1j5pY3U5rgd664czDqFkWm1hSGafh4F5ymjaqz",
  "key30": "jLdpX6CkiqRHozX4hEkeMHkUDubkfo6WxZ76zk2kjDJkx6V4mvSGZNqAzdwSsBpqD8WNgYCaitoAEpyHW2rMMMs",
  "key31": "5rXakyYdpeL8c7Y9hw6V6fkKRgWNWGkyG9HqfVBJutnJibQ4hwi64hLzj3KhNbAM1q8mgvSyKyjELJm1jPDy2XAg",
  "key32": "26pX79buRRWkUo6sY7GbQnVRxcu2WMokNegodEb54cK9qC1oiAXvhNyrqtF2UbUb39fPANh1fVw6eAUPpRfvCrj4",
  "key33": "Zj7yCWruB79eb115qn9bkD4tyCy3X3R2aRJhsVP2dqLnZaQu9NTLSvS5KgCtTyHXgJZWMmD6iYT2XcZW94iAWJw",
  "key34": "5hFLPwDNkUfkZNaQQuxwsuKAC9YRCf94KgwoUyoRm96nv62XLvNTJX4PgBSBoiMmkyWoVRquf4yLdsxPcwycutiQ",
  "key35": "yGxapecehGnUwxYLNyKytbZWU35cYoLtHyCueo5MMXAF6BFcQq5GdbAdwPVLjdvTLuiYXU1mtaF7MkFeVUmu5Cv",
  "key36": "4QS6KtAA7Xq3dcBpFZFEqvU1ZN5MYr9VnEc2j3zXKP5jJFmZqYjXP4sTfXWnhXw4bbdNcAGHdAdEQQR6ePwVY1nj",
  "key37": "3ipg1hHqqAt9AGNDbgkxkcT1ijzTkGzd9AXdFCbtc2ce6HKvAxRExBnXn3ya4pkzBi5StUcYP1cFZw66SnZnnvcr",
  "key38": "2NjbTQkW4g27o4ipX8pE8RgTLsiBGtvhnvj5kKFEn6kL1CpRHrMXEcYwySwVPbDRfFyZ1NcExXaxBg2ZniYE4ffe",
  "key39": "4QEEpcHRy9sgsV2NZddX1tsBSgR8ay6WWShKiGUsNe6y2GyF3jV7zBokXYYLtPT31hnNcyxYTNACFq1EfTDCHQxz",
  "key40": "3UQZfnVUbRRnvNuAFKo62yazjQPCDZR5KkavCDoKGmsfFpMAKcPAkkRsgoM3hqnMQpyv4YrnhnVr4CHsymTGsE5j",
  "key41": "5YhfT7ZP1wYt7nXMDBBMJQXARAXRTMLTKFRBCwNgaKnk1GRoS6Y1a5sv1Zpw7vFUWBAWVAR8sKF2p9m5aiF7bdpN",
  "key42": "RS4wrwRBvVhwgx6ikxVYfXNi3s8aj9APPD7cZbhCvWMzFFefUKuaAopoo8BezgXW6MN8KYpdprkNFybr3Xhrmx2",
  "key43": "4e2qpu3ZzkeCBnkvF1Y9mxQbkZWXQmHXAZJT8zjmtT9HokbCHRDJFYC9E65Gsj4b6mP6w9RHSszk4qvBVW3hza28",
  "key44": "5QTgoB8A7pAjFdbzadcgeASSxp6rN9HNQxjv5XscFJQp2WCS5ZRmuwDzaXZ5Tk1Embu9kopMfQHVz8BU9HPojvhM",
  "key45": "2ypLnG5mitUFzKhbSWGddsDbpY5cFJrcZsVKVUD6bshiRhoCyFL8zGdKCuExB7u7uNGL3S3cEkzGGLZHGNLTrzBS",
  "key46": "4fK1f6zmMB4xxiHGummkHB9Uu8yYsDc5roqi51jP3yFMLNBFwkgLtU3zioFBywpmgrx1Z2SPRwTdge9JbS7CygET",
  "key47": "32euQeRD3TzDThQwGAkoUkzGUuo43dqzCiLocCKvqrHtd3fMvPt4KLNgXxzDhZAd2uQ8ijLTaPcFPrJ9oULvGdp8"
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
