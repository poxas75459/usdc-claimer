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
    "aJNUDDAyBKSRFvC2yrm9TQey5rxdX7pqULD6U5qXhPb98qCAQfpHdgwnucugKMUgYRMCHW4YSd41Tgx6D47MJ6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ekn53YxqDre5QaApq2kwFxD9d8g8yRhyc1CcsYFE76F87egErkahFNtT6AzznHrfGSbQZgEAeL9ziRa1SD577YA",
  "key1": "4pHLw5uA3BW9rRhiZs7sMHuYdCvEwUHcadFi9pxfhG3tnZkTyGzWfHEycNdZWURoiF29HW5HHhPxe53f5YR2qJ64",
  "key2": "5CuGJnAb87fVZ2mKbWSveBvh3vtQX3ySEFTJktGbuBaSBbbuSj9wZYa8Ea2RPdFZBiuGEwkkpoXbmGvFw6zUiGKM",
  "key3": "5jce4ty8G4UDwxAAq7ANSbAaTVHseyzy5QnBJ5eA4Gkysx2HEZiF2o33BofKJRjia48Cn3fC1P5vHAgaBmjUhsoJ",
  "key4": "8YRtEdHUfs5zAkyqKN9AU759C3vj4AKfvXopiDjBXkovs8R3ABjJjExvWW1bHHg2HvcrHaQESwpuN9XRXHurW5i",
  "key5": "57VbsFxYsxv9BaRcb2NviT7vNhh4ud5pYzkQhiqyYXqTfocFYZSxuedonB82MWHtBRDvtG6Vio5VPvtRqqiGy2Qt",
  "key6": "4EgVLdbh1VRTrxHcfmTdZoo2trB5Tvecxmy6Edzxm3xoXYnRiTcgpZnGaWWKHBJwNpUyKuWUJTxtwSMCqQDvkvyd",
  "key7": "A2o9RKn16BFt3VSzoZLYQQ4YkAZHnfVaBMhwTdVCnbhmAmdf8qXTgn8MTBrcnec8UfMFrKm7E5r2rci9UY4gE3h",
  "key8": "2wkv8X8Cmy2TVDxbxKzBK4sojiSojQFPWyQdYHkdNZzYUV7BMV7h9jWaBM1PhvRDKDEe4myZGvAUWb8pr7frw43v",
  "key9": "24XQhEuB1GyDkHN3wqkPu5mts4hLZVr5chWPuyEduQxvbr1DWmXFScPrqnPN7T9w7W8ncy4mus7aibxM4P5rkg4v",
  "key10": "5DJ2wNMT8XN5JJEhdNeHZWeZUrkjrpTMNR4aZeKkk4taBmbHYsTRQPxTDtMhvVqAtF6ZKbATrFkZBm1uHcyUWF5V",
  "key11": "5ymMjP6F4oDkM9hRS4wCwPMMZjJMP6Jvv9QVya58LhDLiE1qHEZjEt3qJ1dUJK4N2EiGyrn5AwLg8XpuzLkoTX6U",
  "key12": "eFewDe2qMC3c58vMLu9f1A2ub1mTMMDQMHqDSfGf9MrdJE5LmWbQ1xt6BPLtVcTyjNhpXoBpyXBvpS8iMFKA2E7",
  "key13": "5d8cfqPFZEainFUnbPdkbPKKuck55bHB5SCxYcbbs7bcFAFEfv3V5237d5kXv7Ne76zhswiZDa2EL8FFZaWf4YyG",
  "key14": "4Xfdm8JfbgHSoYHBWVxhV3XTQSMBazv6Sfpp4N9TajjNX23dKJcry5zPzkGGtZbF2vbeL4ewTJcz61XyDjWQKcxG",
  "key15": "2ut5DUkVEMcV6vVtirT1D5CPxesHJbLe8Pt6yCG195Cp1jPzUMfEb6AQDNGY8Q8U39m3Lzis8wHHqFg9hSbP85ys",
  "key16": "4G1ad7zmaFV7PHQtDrBf68YspXHrzoeo71dcvrTo7zMaempbrShDePCc1hHjB6CrkEWivtgterjiGHgf85oEbkFe",
  "key17": "CdyPqNQwqicYWVGF8XxHz1nb17kEvgJNFh5BqSsNfjnR2kf2XkGBm8De3j5S2xU52qRuXVxVqhon9mtLZfjCfSm",
  "key18": "5Xbxtomhgh8dkB5XFHdf12ZDGTauy7kFRYECz5RsgmtfzM4FduW6K18G1gCsmCXK6wN5TDsoqKR3ehRwBdS33JXW",
  "key19": "3W3pkPU3rJJF3oH8hMpBEnMi9bgtF5yqztjQnCpdvdPaUFbxhJiiQKsKSftGa7htG9HTSBZUmMGaaCs7jE6BLDES",
  "key20": "3gyNbbazSVaYxdjhCK6vaBb3EL1nA3x2UFwJjV5528TrASQA7femrK9mk9qDpi8vYhLzpjXfAYdDncQnTzWfNVxQ",
  "key21": "GX1wWUyi3EHYBKDqngnxDYY9JiNpz2javw7772FM7DZZUPBL45uZe8pLE7TdgyY58Gpuq3W1fLjViPmWu35Zam7",
  "key22": "4zgz9tZuyEX9m3QLa5FCSdKZgkRiZvb1wF8KpRovK66rvmfhvA1Cvn1iQjVqWshxJ7QiLoGwxdbR7uixfZgS9otU",
  "key23": "4aWsRqMkzUsZvVWJpSmTzwcRtik2FQnsNQm8hNMWrHGF4zc4zVm7WFk1pYos5Q5MSfoE3H9uzhx1HCQ3Y12g9eQa",
  "key24": "5WXAQgwZHKYufrbCJwXXWgJQeMTTbZE2h9dUQDJKttU47QB5QZMJQvuH3bJGjw83fz28JMzdTSFDDCubMxCVQhkF",
  "key25": "4pCjaaSUpCzkLTR2ovjLEG3NX1TsH4EfXyJn89QhVfasW4f3v5wFeWrwTa4MbvtfKK2Pds7WXvx1Myf5YFGZohFP",
  "key26": "3gKstow6svFJ42ztXJXz88hY2jcS1fPcLSjWLhnu2iWSwtXyxnDou3tUWRL9RtvKjeQYNkByzFjzNn5ppjZCjgNY",
  "key27": "2ntWSncwKUaJxPPydSePPgmreS4QggfPGw3PHHwLYRDxirE3rcVFFeqkZJNnAhRrCReLzQxSX4EMYvkY1whAXsJ9",
  "key28": "2ifMLcSKWPYJsDQGWUAE6vmbo21xXFp2nsqsghAbKWa5VcJLqHuwEJsGWAv7G7RV6SBc5L9A3SBwZwNFqXjdvoQn",
  "key29": "42sLzEfcevwjjARM17wRaQp2cyzKSg4dqet6gaWYPmjGYs9MxqZVVqLnbUrWWB8j1pYziZ7yzf5du8gAan89Wai2",
  "key30": "4G6y7rdGEJGX5kxdhZmS8U2D5ECo71FjejaqJaB2j7R1iKB5Zv4YQcweT7XJ8riYpNYSLGPFVqBzXXfY9gfFbfvv",
  "key31": "1vCL1hWx1txTuVdDJ7BpcbK7iUv6wq4saXHcgtRv5jBuUE44W5WmUaTvaEjggXecnWsa58cbnb6TK9YnnUfQ7xx"
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
