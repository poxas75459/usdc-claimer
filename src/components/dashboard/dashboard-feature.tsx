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
    "5wRPBh8P7BR6xyGaYAPirkedr2uh5SSMevji1Uc8mCkU5V24Qn4aJuBf4MnHB3FEr37z7JCJP6by6fFskfMtQ3eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zDUr1e3PAHFBVqBJCPFexUQcCX9nHmB8BXL6TzTfLXaoCkmbyzXBkeGn4cgZA4hi86eqrqN95ada5QEW675zvya",
  "key1": "ed8TjxUBYu2VpsDAVWwhsvDuBQCnPeQLPXH6V98P4GGrryq57qk7216pRB15ZWFmH2XZ9JnAQNaYoLGSk1XLY9M",
  "key2": "61EmW7wRam58zXNa7r85mB6V5u7637uaZCju9w5QK4ZWTjVDRFSf7PUcb61wgV56tPYsqmmPcdm1HAp2WSpJo7ox",
  "key3": "4C6uktz65egTdJd64XTaRDsrEkRZKgY6rsbXpAmoQ1RsTbSxAX3JrHb42GoRgjhS8KtzoGB7B3av4mXBoEqXsZQW",
  "key4": "3M1tartDLE4VpwczzvVyHdxyPq7UczVQkc1jVszKabJxWcYcDsB6P6DYEcTyC634siSM7HAnzVEyzzpYCHSms6G6",
  "key5": "4m7tx2CrrA568cctansBWVu6LD48kfdL8nYoNxH4xK5T2TuhdncXBKCZifc8kiDKbKUhtdMNyWQ9fpij3TyLZHz",
  "key6": "57aJUUgv3XhN1gdkUwLmt8fa37FhiNVt2zqDi8TCqYZPC4ctDKRQ7N769H2EJmet82PbLLwHK2J6kY2cyZuB9FuK",
  "key7": "2h7dY3obZ395tteHWreEjgweofeJnLL3NBwsm176223wdHkmyP7iMr29xfvgffH2SrhhHee96CjorHESXPgwMtud",
  "key8": "2BaBVdZ3C5ehuZd2XKtGgNwzVamrGQ7ZvhoPtXQfUgp77eZbjJ1Dj3LJAJJUvC5nxX6BFYryjWA8tr6KHZHRCpqd",
  "key9": "5Q6JHgNgu49jz7TZZpu9AUkRkNLBJ1Tsmf7WvaWhguRTpkr6uZckQHh98dcVwdTBcSRyBTaAihXP35b13GJqqgN9",
  "key10": "2zpYfz6VfgzK4ScL6zX3Bc17zQVy35JeTo5xnHNDiVBc8w4zxKcs9yege32QhzCRrRh8X7VkFLJmAqaDqv7MPKi",
  "key11": "2LTUWv1CYXVbB8qQvLWf99c8oBwfbCoLQ6nyjVjZxq3BNXZ8vcYifh4MfvPfXFFcqbqUeLmMt7Dv2CeoCHwQMpDi",
  "key12": "51ReWmQTwnNrc1sDMATHKuWnuKNMHpvQwZLB12peXEY2sjM5HYKycTtFUxAB2t7AFY2MC3bTR7RpeDGavx4Zrh8W",
  "key13": "5SnX4cKyHQJGPGv3hxwy2Jo7qf67EZcf839yqvr7t29HVkUxUe3MpNsZRHmPotEM6bYuT5tqbkvwAhrzNkSz9UzL",
  "key14": "3qEP5QRLDhEwaGd7Pc7QYHEoFUN65FakkNmUVN4QvyWXyQetTwnjBWuiiBh898Gv5swH3EMpyPgkyj9oU2fHifV8",
  "key15": "3vQfCpVSXwJ9M8GArkFFfMhbEKA31FdSNNs2rsCvmz7ibrshubnRJtnn3A3bvNZAr9YPcMUg1qUJU3RbA5o74HnP",
  "key16": "3Dx9r7x46xDKQRnHerqVcJh4SXAa5S9gBP8kZVWrRHDb4WJuzjRV5pfh4LaFhmcqcLqchcFX2dokyq4TB8kXMtfc",
  "key17": "3b7Z9KNJs4hyWg9ScQyxAC3hCS8s476KPLaggMkz7ftB8zPpvRN2ydMLS5t5DeWqBYqF1pGbHj4A6PHYKxCGZ6zN",
  "key18": "32zXXMMigtBjGZV34SCjHFArwScAfvGFvSGGg9wfYkPLHzziPubwmLC9CJUHjwUFioPMjcJEVdc8FRwEucz95k1R",
  "key19": "2WRkRfAddjZL98gzkScALVCqNGWpjCoWpajvGv1DoGZaViLQ4a7GRLi4zqB6i2sPByRhwTkS96bMqM3W4wqpSXNq",
  "key20": "2jxTgs58218fLtAb7grE9bVi7NJjPm94UuXfhr7WmsMs99bXtgNByyETcq8Wp4R9kSX69z7P35shcz9WZen4g4Aw",
  "key21": "4w1rKMUGpyjLjDFgNgsWYNt1CsR7or4R9tAnmaswpy4mnMvhyRWut2QZa81QTnLoHrkeN6BvV6FbSFDf1P46NDaD",
  "key22": "FZhp9V4Atdfzo3q9xPZf7AS4cqNj7ALidQhzF4TtoH1yjqG56uUEQU4WVWp4HBm9wBbyLvnM7zcFb4CxQVLzxx6",
  "key23": "5w18wsYsmQCBcTnbdQa778z9AA6UnGyvxSyD1TCfLFc7AnvE5kw6xDrqU7apaAnvfsK3Q9bt5di83hy8ibtqdBch",
  "key24": "5J88Y7WzxYYSAQyeQeidYvcEK4wczdN1KRgrGCTakYZ9paV1AcV4BwE1HscjSa9fkR9iueXJLggkAuc6Z12Vgx1g",
  "key25": "NRRFypzopg3FLjtweuoKCnbKCjA7EnFrEPY8pBrE2a7yK7fC86j8oHSbLrCgdhQ4jmnUs6GRfK2tCSPSGmEEygf",
  "key26": "4FhdJDodyEiiKGZRNMSud1BpyrWpj7wvNELrKrf8nPRSUJDekdUbRXP2aQ6KmoVNQJHD1ThZJQbcQ9iVcaQJdg4s",
  "key27": "fSQMNRME2CjAe5FwkVvSeVkyH6U5Jmf9NTLr8BKNP4HApz6DyPeUUH5jdr1V1uEYjZjD4RPJG8KELDfphnjqNZD",
  "key28": "3PEzDdv9aQgoBHxQu9bcore78AmoCSTnNfUfjCWmZk69iQa3DhVcvPNs5T4t1f95XdE4Z7eGkNS61c4bg8f3yZZA",
  "key29": "4VLvFc3gVo7kmEUWzTuVHFZ2QXYGtYoePt8bw9NGoJMDWdYgXoJhEAEgBTyfX8FQWYPYxJWjdCVrGMmQ7z4NhBot",
  "key30": "2RrZcJ5c6yyVgmgTqmHSuQBUir73wbypq4VKw69nk2bjsxxuHvk7fgYbV6Uwctj8h4QuCacVroyNMRoRscTdhtFs",
  "key31": "3DH2kTYmTuKFq9gkXBq1EQTWQ6FszFeMjREZiCYSAtjbMy4HMsrzVjNWQfNter1HDzHg4U2QZnsacJnRfL86L83X"
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
