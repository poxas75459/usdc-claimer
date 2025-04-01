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
    "5RY8qzN4y6TM98XukWX7Vwej2rWkCLSRZNLN8CgL2vT5yunf9GmkVrfTbwDZUPP1ftkeqKaMY4HvMBYU56ZiBH55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtCkxKURWcMdkPVdkRsXWRM5iEXAi1VTsxYckeaqKbGVS6Ci5c2HoNG8y899pvcr4AtMCqkBsR4nKqDrnFSc8Ph",
  "key1": "yEhjVekvpJFddX5zBRVhcsqREMvdK1yrABERdoVebGg8oGQuawMFZhyqV4xJd9wr471VE39HGhAFa2FRm9Kxe4o",
  "key2": "5eS6weeRGP3c6AWKkwyuvpdfUjjyYtu9gutKuVwmsWqWCYtFLVzpuwoakp8opRV6GkjBX7zdJZkPBsPWPKub3vhU",
  "key3": "5fryiB3xVAjwso3WLweQajwnc9o7K1ySYz4HUjBDXi4BPKvjAvZFg2cpwZ7H9BeergqThdUfWFRVhV6iB2J9vY7G",
  "key4": "54GBxsaxHPTBvADub2m5UDwCKyTk9cGT23su5CpjoUUiTZP25M4Er2rvXdZdiFKi71Efa4ym56ZxZ4rV9vCA4c3N",
  "key5": "2SGTxtaE1q1ninNdvFvzxdxRbjBq2AabC76947oEqaCjESRTnWWAwVnjg4nwbZYdrLZNb2th9byfoAH5VTdd9PD8",
  "key6": "45LX8LHkFvNW61xCPfZh3Vks4gYvz6L3dc3S7bizJfGEuAEEW9VNjbdV6SUDfsDP8jAXN8pn1bfZhwbuyWV9XwfS",
  "key7": "2LVKxQVgivs2JpMf5oArUpYsgkp8wAzg1UkfwNfWt1a4KPXb6mfZek2atRwUub1fZohFeyQuDzGYZXBM4JsakpS1",
  "key8": "29YUZen8MdR9g8VuoWgvZadS9A8zVzwvgunEJDUPY8kFeBZzZnmdsee12USmUpTG4gHnQmdSfhFizBxEigpX1jwe",
  "key9": "3KbVTGGmURWUscfBmSPRhAVRtYjPJZn87tMKYAhmfqAjn4V42D6mtxRftmu32g6tnPtJ2GRT6j2XPQzb6t2EjHUR",
  "key10": "5ZZiqNtSqC8zUAp7q9FuoQ4u8GfRoN2YQAm1iEzNNd2ZN411ngginkZiPspfXqTCk2jKPiX5efUPV6yEKVnRDqKQ",
  "key11": "5uPoFxW4BoGh54eMxuvW7F6VB3rfoVovgKWTRDH13zZHZyjd5JpXJuMyFKbsc7X8sAs3t74BiZkmKqWKdhXxCo3U",
  "key12": "vW5bHPXX9ciavykZMYvYvqNBvf2VUsvNsSXFHcRqyoaaZH389gGq9bijzci9wKd8PNpo6qcL4in1EtXYeMyu2Pd",
  "key13": "cXCzbFYSVBYX8wqKqAdoPnvGRg943RzdSKeEq12qjJosnySxQN7BU9JdyYFw4aQwUavTNSL3MYoDD2xv4sNAcLZ",
  "key14": "5gn54seAsiUSgHHqhxSYycMZS6zabJBhZbub6yr51oXkBWXZpHBBi7z9Pyp2fbdVqUKMs8cs3sZacEkVGtTuwUFx",
  "key15": "67Hc2t6DPdnN6PtRZbjQKEWmLLMYTqNGnb5NwjXY8xXm3KwiHNFhiytrfF3w3ALekpDd9kVqnU2ciYKNUiq7NQ6r",
  "key16": "35XrdQ4pKT4SpxXy8vMhBJuhGFWGQbr85yxHBtQ8VSuehs9puJBPoT1J6JowdYZ4jx82V2KBHwfX2Ts2kKHKUh5U",
  "key17": "1coyEFewCumtpBVZTvesabyLvYj9KyoiBQVBdcYj4ZN41NEwVDPisr1sVMzYE4Tt6Ni19wynaSTKwQpSBeoFjJP",
  "key18": "F2eitjAVWFh6EAzc1uVZnSvkV3wj5HjnceW8HiyGLGAXv3T7Q6NQmo7WM2a3RRYh9yzW9bSrMR4JxCgfZ1yGeGg",
  "key19": "3DZSB6dXbfmbcP3yVSKscZTewnPnuYd8j7LFynL1CSQAwtgPC3QBssoaadhQHB6JoYyR745XfbaEXPCKTdLoT9JV",
  "key20": "hV6qYy7Ga4uyLqrSwDsDpvftmvHJVZg38ft5KojMHkWuP3gcA3SBMyUgHAWNeJpDWceYkCxut5KGePrZSn7kKnG",
  "key21": "3HQrRztiCjmVLGNSk51myawuemXdqaozLHB5QfcfZqg5FkXZ6hr2aCJr6AiowYY9mzaNKs5bhUUVEEUUueg5comp",
  "key22": "4HB3ddKdzaxmVL7sC9RbkGGmQSHwZTZZHu84Ny18vnsGLbwkS3Tmh7sPtFsoq2MQiTM57qTzmLViBtHxwrpaGruR",
  "key23": "5bovzkkHzBiDHcxcZhsQAMuz999mHwW96B87oJHLmS3KDJW73DM5hSroWz469zj1HroH8Ba1hu7GeP68dJA7iwzK",
  "key24": "2c32FNoxt2JHaQ7Hh3KboiKzZcG9apmRBKuCB44NjjGuM2xhNAjqVwx56EHH6S4aX4ccRy2CzJauVJrGWEjpPuUE",
  "key25": "2it4s4jCSMcj3ohDBppddqudEJ6KQFb1E3CeFPGnVMXvMAurw3mAunoEXRPmVCLv9sC9yhDZbXijShiqH8P41HE3",
  "key26": "2EC2mKqBjAyVMjQG4WjN2yDShMMguuimTeSpeytdfEEYxtxp9pezLParRnSTGmopqKgd5FNzrVTQ2rwSs3wNFfit",
  "key27": "3waxLbp3gkby52ZzANmb7ENZRbNWTbbaxsFsfRTnUu3djzb7CX3X61ewFAwCF1NsX4yMDd9asaEQQjNewu4wen9z",
  "key28": "52X2Apq1mqK63J41ZzVHWGixR887DUGpWwUyL6vGab9UXUobruTU5YdXZinQhu7p54AY4kjGAFmN6DqXjE1abfTN",
  "key29": "tgnfLzaUJmxUiW2wNmyvq5NcUPxNNquPbdx9rSS3qtMmGPwUuUhvp2nZwp7QnJv1yFDQYGDwwacjpjkcmvqfTBb",
  "key30": "2ePHWPySjk4pHJX8CtUNYjQvvDRczFZ3MPmStej5pWkdag36hyCiZESHh5VvrVSzpPvc3Nyjhg3opFuMLNHruXU5",
  "key31": "1BjQ9aVZtN9rpGEK2sQ4CW35ffvMVS5Y34i6L3kyhxRNCuBWhWzUUEb9YizEWmzvoYTyHe2jyHSvqVgGJaVXooL",
  "key32": "4T6zu7w4F1PG3J2YfkEqTgE8qNLLCVhnbAyifXgshY52i6FNmFPXTyXUxwdd7GVrz9nN1341pPxzcVNWU7p1SwM5",
  "key33": "4qtwSfyvWXNjiGwr9HSo3y4st7sqWsNDj5AFuzQkio58jb6fzCWvN6xN3XSGrKev6EKQsGBLNXVNPyqRMhLjjnF7",
  "key34": "yhrf7qrco3vB1BympvMdFXnwnP3wJLP4hZ8MdCXKFtSxpE2YhTUoRdMFhT32A1uRAmygNXAvgw73kotvDke9Fya",
  "key35": "5yoZoGKjoUneTBUEk3ffz742kUQ1SUrSCvt38CD7jPXz9gkyjNJww6AP4Vjobn45Nb2nrFguJKDgx9gkervUaS6E",
  "key36": "5YxhABtbMvHC1s3213yhcJ4XTZNHiUU2Spep7GZGAwWQNk1tLhx8eCvbTDWb49FBXjmCGaXEYXaDdo55zGx1pnDJ"
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
