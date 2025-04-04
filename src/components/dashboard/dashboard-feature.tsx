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
    "4ytpZLDC1qYg1sniFDmW3iPswSosdCmDCgc49HQ8JFfHjpb3KtSSX489ehfJTqap6TaE4wHSFcGCPUFNd1tQ4mfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vGzejez12hqKHoSub1UjtWxWN8ewhuL2Hbg9jBpptWRtPRXBBkvHBRUcdeYcX2RX2tcg4Mnd21WeXfY9ZDpR6EU",
  "key1": "cy1Fqsjvi8xrakfer6jUxsiHzEGfsaLgHyH8YjKKLrYU24rqLLq6LcaSS8VefG3FDMvTYUgDDdNt6JsSh9ujvFn",
  "key2": "3iV4QSzX62ryFztB54Kp2KsrskNHVHCQPPTBUnHzb9BR4QB37hHauNEev7Qw1QaZ5wn9MYGbtC7xyJ3qtPBWFJZv",
  "key3": "2VzfMP83kfsigQK3yFDeMJr432Kepbv2sMD788G3eDFsgsBp4GjfQdDUDqePMSHsznEcNcW6Bg4d588vAZhu3Gqu",
  "key4": "65mPiiVg5XUabyAz8sXyAWbkXh2ase2upe3wmqQxd72vwds8j2DoDZHGAt9Uzxkzu6VEELXHMhjh46fkxVRQ5KqP",
  "key5": "4YThsmnLi33QMNE5dqap1C8NsWFz6gbg2BJjUaQjEASW5HEEVrBLYqvyV4YuUq8JVAQmxvSdzWmmDptiae1RDHFg",
  "key6": "3f3amYoToMJhjErRKQ4HuhkHv4Scn3s4uGUpvK6wBm6DQ4dAW2J83NoyPL3ZJjN74xKo2vdPJgaR2fbkJM9H895Q",
  "key7": "2FK6EHjWcQiRgNQBE2KugxxSkMW7YoGgn95h2gJBthUrPVeySZZCYVnY4TFSAgVS4sDHNkhQw3CHVxs9yEKYq7uG",
  "key8": "3qFGhSmXAiM6WQB2YwQtgE3fw6EEXaBL1GLQvXUNvyzuhuLNBaseYrQsdvetVdnou9kbA9M3CGXNeyKL8kpjAZrS",
  "key9": "2zz6qPC7hLCjb3oUXThgjcjP85XNgzLdHzgoDqdN3GaR6hab9sAErJc5tZH5ZBfrMicp23FA9QGMWr6ncz77Voxa",
  "key10": "2C3nsKJ2hixZnxRrrau9542kR8Lr8dytSyXVm4BBBSB5hLQ6nGUyF6rNxG97kyARJtv6N5ny6zEVu6M1p2mofDbg",
  "key11": "49ZYLYoK3yT1jxuiekbAQyw9bADDt7Qzz8vTYscdKqPJURUbL7HojLSH7FM5fGy3vi1oZnyMDgSFp9ypAXEHrFur",
  "key12": "3DvRheDTz5c13k2oRXbfUb21Aj8w1popKpjFda5puGHGpMnymA6pSjovwwuTd82eu1ReeEXgPfgNTqf8oUCPXDmd",
  "key13": "2GgN6bZSwuhzUtX6jqH8LVqvGfsZ62iZsQvZAz9YSR6XZxSqMNuMpD3gSWKtJhNEcPsWPBPZL8KaYkTTkp4V3RxG",
  "key14": "54HYUV6ydw3f7VD42pQXHqj8y4eA1tkconqn7oePUFoGX1H1H7fTAvZ3oGsXaPTd9bXHscmZcezczPFRConx5tKa",
  "key15": "4RQHnRXaCYqnR858ghfCyeQjqRsiPuaVkJaZcrWDuWkUcxm2jnezr8R5cGHrCcpLbA73Zhxp7uwHbU8Sbm1YbiQf",
  "key16": "5gtFFbhMcX8fs5uayfZRPKDitfQwTnzcrbDMPyKLgpmCFDhQ1jEYr3SYGaERTsqKoaYAAdgydiYKoTgfHTfehdhJ",
  "key17": "2E4nuhALVBndyRuAXL16UvAjmroE53AYDXqeAWo657USVScJnffZFNYYGbWWrE2j56xo191XL12MfGAVh335uGvU",
  "key18": "33LvAW27QYqDFwNKzs4Gt1fAgZnH1fNaFaVEXANsd6BssyLjf8iqCvVFzW1SwmUJyCpJn7cm4pTGYjSHLrw36mSQ",
  "key19": "4XdvjRX53ksWpJFkwSAr3wSnweeodZ85za4iFVsEyS2ZCmng8jPGbLxX6hpnrDk3QhVSGJF9GB9E5mK5rggxCKY7",
  "key20": "373FZjxyh8dvisMe29aVSFnDq59LygS96yHMw6nkCvFbijA2bhY7XrTPpp9s2NqtFaQKcxZdS5nDpWavAhZr5Cpf",
  "key21": "4VEovh4V74tan7YCjY1XBn1Ui25K7FeS1WQPS2Cb91NwTwMV4ojejs7g2LuEaGdwD1U74SU5EaMJ7ZSLPVZAVirc",
  "key22": "FP9Lodd5X3M7PYqYpvo5rpNAiULs42oTB1FzAHTtkd313sm9XL1ixPAdUqNDTUneCzWVAqM45iQwU3gCVd5RoBE",
  "key23": "4LSDfcK2C3APuFwtpqtgQanCh8pQhVtpPyMxWr2cxzKWe5R6QKbhan55wxdcJtzsB5A7ciBHin2Utbq7KR4cHLzK",
  "key24": "7gDmsGqCF9zxMUsJjnG7xBeFJ6MCH16Lhq56ybDy9ZU1f6JtXXtRHPRGuKdPPHUNZZC2eNw8kWxZQXvgEhtThq9",
  "key25": "7eNRjR9bTntdknfRxkAVMqN1rfZk9SyDnneKAUaG2zv382JzVbT1zTFmn8NDR8BZ5yQttXYZx8cB5QS9tEeHMV7",
  "key26": "w62GVPny7Z7fBuNNvkF4rtvJ5RijhFDvrN3k3uW8m3Qrg6rpKfGWq3i9njgNnXoV8mEyRXGyrsaawMVYK5gr2rT",
  "key27": "e9EXqnaGM8VgdyLWzXdNbsTsTD6Ppu6eKPKJjZt6cVReFUSPqAiLCGejKRebFXk8NJZRXNbp1E9KSHNgV7WZkwv",
  "key28": "2boNx5GssrNxa3Xw8TXmYa7a79CX2nZVyh7x83KQsR7U7HUobNmydQAK6JJTJyYRj2UuZcKo75EZ5CNd8rnEUDzL",
  "key29": "tKuKPU4dAHVfWzWieW5pJdLw8MFUBpTkBz97SJUk74C2SzQLGhq9psAqEeTZBz5h74HNViwyQn3DJiREMeViq8q",
  "key30": "54Yqz9r3CDK9sAYfDoEfG3511sEkFkaz5LwH7tNSmzjCBwehMsVeXy3ZcvjxjxFvr7ZVJEeq22bC5bJv8JDdqz3G",
  "key31": "iVyepTU3pDXSXob9jVmhmvCfw76cGnpTjYfuUEBrWRDVwuB8s6qgfHsgrknTrYv6dMAfQKHJLqcZcCrfcwTewVb",
  "key32": "qsaYkULj8sEemjRFnnRxGzQYLthEEuV44SoL7iE6m52ipQp9oNBvk89cP2KAfv3v3zXxmqXSS85LMX75Z24WfoB",
  "key33": "4d851HJsAKiwuiq3iS28kJ4UWA5kvxzsiek3psKQag1WkK6h5y4qxseJscQU81pSMbWr7UCxCPjYwjGtdmb18LSv",
  "key34": "2yFvKM2SW6J5yFMmY2Xxke2FGpk9dQpmD9Nk2aAcYhdZWV3dZhiejTofUfPRVUVApxhNv5BRVwZBR7EBU2dLqYKn",
  "key35": "2cyk8qR5TbeuLGYTujm9MzHmLPSNaCjoAHfteMVo2g82YKSnfgZcseA89zfpBJ47kxWnoAbALenEeza16FEzH5d9",
  "key36": "5Ggm17Fkg5SKkQ5qyNT6JDotbfnxXQxM4zkwdhwCpGUqkVFEX1RXHETwzze4Mdhem2RNYac7D1b7vZNT2YNyTvgr",
  "key37": "5s24N8NNedHouQm4L1P8sWKuViFcwTNhzadTZi2JUPFcknTzjphjviaxkFv7xLot5uFu5coxGpTjPvUL9PHMTAEt"
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
