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
    "4MqUH9FSNpo6eTwedvpqELawWQUvsSmB1sN4sCHizhxAYork66hhrA6vYXTKgHGakLkvxatxNjt7EyLUX4i7JQZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35UoUnxkx67hyDT4w6YTRDz1NdL6vLZMiJt7hYeZJ4R6fzzBs1QPHxqX5gykmHeoWT7DeizDGUxtznpHec8rAvUJ",
  "key1": "sLGsbiB6jbWPtrESLXqNHRtBJoT7TL5pUJsDBiJSd1pH95ZwVRDkmMrbs5WsoBeMTsaPWLdBdczpXgjp9yXr5Pk",
  "key2": "5ix7dzG7y5iaHoWti7MciPbXJA2rbgq8yArn4cLQqVVvJA956qqHE7ydUzFDpijhe6jYGb3kLWKHors5EwJtqbaK",
  "key3": "5fprxnsFQPimJsgHMo4UYjpPGgfS8fom76NPW2Zcqp2NhHJiwtWUnqLzB1bTaem2D2xQZJRo6re9maeyXKd2AnDt",
  "key4": "2USwXW3Y6ocwDbSpcQPxUMXxfS88zC8f1rx5V9VTwAjeL3AsEjTnFpWF6dzWea7YXEriSEEJs94ogvNVGpbEfxUA",
  "key5": "4Kw3YsmPy64omzLeEzDp5z2pzLLSeLZMhRSu2XKrq2bX9HwUuQxayLAmf9CQWSfruo33RBg3UKTP6uesZSgughRU",
  "key6": "4Lk5iP6hCX3Hr8YkXN2Rq4MVtowxwX8kTSycqaqK3T9k2JYSba5uLhMqCounyjaDXfvzBj2VdGNjJGjqjjqSHXGB",
  "key7": "6Ct7bURKdGmtM9xvdwQm9SgCK8N71oDBniFG3TNhhtbc6mEzGmEs4oEVvtyQZpvxQ1g5zh1qYVAf5Fc81MYFtKw",
  "key8": "36neVKCi9acSWhiJLRJsPbAXAqwjETAjf85evdiorM2FquRCirZjNpK47EHveoZEtH4sfoCj19BZwUMWnAdd5HdM",
  "key9": "5oLJXFD4LcAY23H7mefZwGQqiSonsVjRgABB9Nt5HuD8qkJX6WSqUv41SZJYsXXuFC6Nc67JKh8F3jurpKsNfLVL",
  "key10": "5dVuVyWbJSRXfusTNGjvX2MXjDyxwfqtAWKFiaYgYzWUygmSi2vAwegvU3oXZa1xuRGm13fx5Gi4SRqgxRJfBVxE",
  "key11": "qh3DMpXGM2SmCa3EzQELv8JzMJbkP13wmA4KQsD28y73ytBvHKctjw3y1Tf5znHZgHpXNZ5X6aLbEA9y8GrYZeF",
  "key12": "2RDCXE5UeLoZGUWteiB2dMwsQNeWnd6vfkPDw8mkwUBW2URzZGjXYdFBccuxwVrFqM2aJtwhqvuFMc36NRgc5D2C",
  "key13": "64Z381hPQosBaaEYpBa83hpq4XMbLBKLd47jjMAtVRULTp8niEXL9Tafmn6Z5GE6X8bt4xDfTkKfXFjvripfXvhs",
  "key14": "VSgVBQLf6BVGdUYdp2qm15BjBZMnggXMZQ2a81hJ5uvmWzjUqDJB4xU2T5ssFpVhRQ9kJJJe3iRsSRtV8ojnMLk",
  "key15": "46Az1M4rKZiqoC9VXLEAhUtLDbnccxExaY3fKP7KW2URhXQCC8RakJibYXf5D5cAsDgTdVeSeRAJUMkRPXExRsVs",
  "key16": "Lx6rqVnyc1SLnSSNeAAjHFnNGi5pswkbPm39a3qLbfhYKsx5mfKutQ7PkNgWLZhzfZsPrQ9LZyyQi1fbvJKkDdi",
  "key17": "3ntG247BycqEK3uQ2nr8HRcY8dYatsPUhwhf1fEP79FcJQT3A8DQjPovgs7ZCUZYgw6CXBLDsry4uMBXXDS28b4Y",
  "key18": "3mdx6Nypws829BVWyfTWpp1hecsMc8DqFiKbkeiyNJYKbcG4pw871qhciZj3z5PGTS23xSypvaorRLV4ybK7m86Q",
  "key19": "2GKpJNonYc1b7QTTGNv5PeKd8ZAQpXqbi4sLdFtfoKcwrfZPi4aEk1go34AW7B3CiAXpKJRjTqaKAaqfYJkqaQTR",
  "key20": "4863xBTZqGTQMnBdAagBpwNTbQ7zeUh6gU9oSDAgXg9LYF2y2MRAxZvJTNeBSpYqWXng5xWd4NBYGwenPSL3P8ZE",
  "key21": "4rKM7YRWtDFgdv6zWWzVzDRck4KMLXeBRw6Ew5c6hKnQkyg7wvrPei29d4ZD29QMCCM9S7EJhmaUjwo9HaSMGrpv",
  "key22": "2RSrQhVZaEh1VB6172q6uYNf3RjDLZ6tKjwZeEWVRdjQWHtsqTraWdAfCLV1ojPuYRzSkpsyjzmbDCTUFJSCFaFx",
  "key23": "5wz5tJzkrCQLs1zX7CvMn8ZhNum3ymLtaC5cCHiXJF9TMXGfAqbg57d7oqBpLDchaWPJoA4cunYYS839U2hsy9wi",
  "key24": "DvhAPDGjpo5Qtk4DwsrNkkfxgtG8xLGBEpepcbmCkBr2GaChDPJVsCmChMRPdPH1EVd2HdoCEPMBpX9nNuwAzdr",
  "key25": "5nEarajLjr6YkwFacf3MGn2JAbwJPF2VJwvEPfgtxQqUPbfsjpREFU4iWNBb9ms1w4oP4KQ11tXaMCE55afPky7Y",
  "key26": "4Wk49SPaUXXm2BPhLXPSgxgupG1jym9SWTac9yfBNxai38K9gZSbChkt5hQ5qMLKoDxq6c5DmHcLPP7t7sFd7iVn",
  "key27": "2xk6fAjLQr64Y5yqq95X4Dcu6nrNejfxySzUrKvPpCMwCgrV1e4AfmQxjXmiScVMj2vGfSYQdjKGfcxETW3zDhG1",
  "key28": "3a52ZQ3YNwKFLDK4cVrbtrsC43FoXHQ3KEgZ943JyfhUpX9FRtBAyrBh2eVLnamuMDs9Kd2TPMKSwPFKhpgBhQ26",
  "key29": "K1VKR4wJGKxWk8LtQ8rLri2QfWMb4czbH1X96U5A2wKxTFg4JyHuCRY1YPfP7mqG5TcvKo4Ak8ZXS51u4AvLoDe",
  "key30": "64CH1tJjPUhufDdre8yt2qE9vzL5qep8GXXvmgW2z2fZBRngdtdttnY9xuzuVoD3E8Jy7fuptMAuhTmrK5cCQi61",
  "key31": "4t86heLrNptLQsmXdnkJSM8Ri59xdxhUsAmJ352T7PuNN8qQC8yRmWRox4PXNXcstzMEb2HxSuTcBKpfaGiBr11r",
  "key32": "37jbpUur8mbdxN4kBMKVYTsPEn4Uoxg1sDEf47GzW9fxqvQZ12fiSZScjAgYgMAtcbsg1TmeLDy1QXHhu4pGRo1o",
  "key33": "2pVhuecLhAkKhJRBLTTZQnbPbvx3W99JbGR4mhd4XwAX9w3xXjCckg14yYqt7Gn6oHmELQtovxVtETVAnpoN8Vu7"
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
