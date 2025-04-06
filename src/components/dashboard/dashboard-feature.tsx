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
    "4CBnGW5PL44RaEPWKJ13pdKGAxLCEiyaqw3czYg5NUguWzc2n9Eow85o5BBFn27JMv7NQYvqWU2bXcGYyVib5NXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LADACqmYPWusntpRJwXxZhEBNZRnxkXihJQ5PaLyxzB5JdY98PQGDC8K11GM9SYwwT2WEZgouWgjtfHkwqndGU",
  "key1": "4D7sib9Gc9jXpEyYSDyrJdT573WCHrRZUsU9YdcfXzgU5TU4X4Qpgb8qemVfXBmpf6gWQHBZWLGMfaE5zYLKSPwi",
  "key2": "2DZquR19Pa1UdcR4APjJFDuR9SdpfEYa9xAVMJLRL7YBpTtZfAfFBnCq2axcfANRk9HEJweyQ3aCx4B7x1HRtF9G",
  "key3": "62mTP3XarM2wFXppMi6K9K3snYY7Lr4ZfGLQEaoJ4BapNQsiR9sNJXryWxoJhswjwhh6PVr53wfRKbvdKnVxs1eu",
  "key4": "5znZK7a39yLYGuDqYeqWPjvs3Fo52mHSJ6tB7BN3xqMzdK8JWA9miZjMSFZvwWAXvFbVL74GY8mjtRzdHMfrBTwU",
  "key5": "qsTA55kdtYpecg29qFQ4L1tFrcGq8K1cwqHsaDxPUyMVQbHFMG8kzFf3wG88D7tKCEXJC5vNdDEve3Dq19sWL8K",
  "key6": "qGuDrxzv5ia7NzqU6BVUNa1exdBRUatNzH99QfomDqW7pQcxRc6fLfci3Z6vyu7gxbr6CzvWtGieLyBHL6NPqqU",
  "key7": "5HLUwV1yLKcWv7QBpbPkQL81b2U5RbgX1ZrKowTMWGfGgcs2rFH6UgBMC4yYLkR1VZHukFtcBZbXH1HE5Yqa5E1S",
  "key8": "2C35XjjdCciW3aH99kEkoDwj3KzteFwUNH7W9Q24aD3WYHQkbcnUrFrHFbkLszMPsrAsg5ejFphtsWXajCeHNsix",
  "key9": "3BeSF18aN7iUsVd2A3J9GhGSj3JWb8jH9Ebp9Crn3nUuRx5DB8K7K8iiyduJ8pg8vzqXyE6a71L4uAeh97UQDtXm",
  "key10": "3B4x12XmvNuDnX9ZkUqFhFT23va188XcPWGk4NhnGG8jJSLgMc6FL4Twx16x77s9wFwhWkpEmMfJ63sKRQc7nUDf",
  "key11": "53C7tfgPrJTZ2SmCcpVmpDta8GzTRYzqCESjR8mvVuG4CQCdJ1FUmDFNLArMsa5b3AxgaH2ULyxBh9xLQMfaqN5g",
  "key12": "c8YzUC2v84qaLfXNzQCE5qnJLiwCPgJQWFQNewyEYZjnmTJC7ru1ZsKk5wueVaW8gqEHeLL34Gny24PT1zaSpXQ",
  "key13": "3tbuP66ycJkJrJg4voWK2WGyPRt2FFVtyydWCZ3eDGTY3Zon1qkYR1UXy8TsiQA8pn7aj8UnszA6kHW8xTWQPnY6",
  "key14": "4E7mkx9G25geL1nvPuAF3T334gdT6Eymgzi6ncxhQP66TPjESwEUnPw3Wtreg8VXh5qo1h1VBYShntJWvUf3E59L",
  "key15": "2rUpiP3ZQXVEeAp5FCUdFGAREyzbponTzVsm4Y33RsqAVa6PzTrSxVF4euQC58646k74Q18VLgHsurFgD3ZtPizV",
  "key16": "qagQLwWNAbWjw87yT2hYZNdogDpJu9actD55XSTNNLSW8rerKTT8qrWFvu1Sc2Pzt2NcmhLqV43vzKpZ3usJzVs",
  "key17": "32CNynFdmR5m6g47pLidSCqJBqtytW5vT29f61QhBnHfQcuY4oA9oX8mGUGnrNDCoaueuxjJpERwfBfb1kAm1fjZ",
  "key18": "5RMoYN5BBFsvgDRw5dQ5fHrjT1SkH9WU3Jeohmt5cctbGsQaWnz6CW4UgubHVSkjQ5mkbSYs8Q9fU6N1Jkbxzui8",
  "key19": "61fPYpr7f6QHWVFVEMqiFzbiFnV3b8KZ4P9hLuiUtAsJRgoXk45DDDWM7Ai8ugNRC18ae8fTAyJaYVnYmUaF7sbj",
  "key20": "5f7zikeRUYWLXZqaS5rJMpEgBTuSMMr7kcDJQmQ3WmBsfb3GVJY3jSdHuiRN9ZvMmFra5kjp69hoBhzFLh4nE4zW",
  "key21": "2tzD6Fzc1yNxstF4jfkQZoq2ZkbBRe6CvxZRBKSwaxBzMKBiH94SEQRew2pUTKeb3jRTb5xjufvmbtkAHTrxUdin",
  "key22": "LP6p2MJ7qojainpfXELKu8eZhundNXgqR8BxMgz2tHTmmuQruNUxeewCND5mAy2tAqLtqEW4vcmx4JJTiSMNdBu",
  "key23": "2CFvuBhHanYxGdRVvDShZLLnB4kWvEuma2Q4UTXJ2XJvUT9X7k3C2N75Ys3WKNM7bbeAKyfkYhpbG8Pxmw43KnnB",
  "key24": "651jVz6agZS2xSRT7Pctup8b5FBWXmQuXtZiSmL7BYwfRDcNexKQ6HrH1Z9hUMVxLo2wyoHoEXMyVf6hwujgiq3E",
  "key25": "axTMGiCcQAosX3p8gQiHJrE2AG9GdKWqfKKic3738XAGUZNj2H4PcyZ9rTMcHKsXL6hjQDGcNHJz52jkm6Ln7uK",
  "key26": "36TBNXp1VuEwbnGUBBjo6brcW2jwipaE42bXNxnV5Z9LfEya3NhrLcN1o6EfQW9Hvf1f1tk9jUm6Xegi1MLiTgt1",
  "key27": "3bCpHuH1hpwtqif1aj2kddz8gXRFQLMAZNF7ugEhTA3GApribgqqEYbQxgXJ2zhGQgEKVqe8kpabsiDLncQJ4GGg",
  "key28": "5kxQx5v6oY2josd6Js5J1vVTgWPoskkRSs9T6X691u6WMCP9ccMFiMKGD2yMBwgPTWTjaNqMetceftvTiobuspoz",
  "key29": "jEGjVDJhbrLCYL69noedJbNUHVSk3esLrZqz4oPhfMjqhx3z2aux8rhxqERUNsYnyU6CoJKUJ3HVvEhtyhBxUMY",
  "key30": "Ub6onYntvv2hQLb2kcDFKQHfySb6o1KwbAgBbFArBCTZmte5fXFLEhXFjrzw1FLiEXcF11q4KVHoaQqj1nWqUaT",
  "key31": "2JkMEkAm2UFSS8PAxhBPs8PYj62kx1wwb8S9KjRv1vxtBUb5u114NrkVpzToFSZoh9jEgdj8gtPgv8YZFUymRhC7",
  "key32": "3FKzCp8NHa5SC917dXHnEfEsccsPyjT3L5EfA9QjCGb6cp1spUT1nS9CZr9cHGiKgsuSLdnUCeiUjNMvK1K5iBNn",
  "key33": "2c3eeh7p7XaLZWntFURhEKGF1SQ3VX4cjPpvEUPc1fYT3MiicJKYdKJaQa44W3dC4oJqDKCNf1xFft1cEQJXQCi6",
  "key34": "2UgmNAVKTSiSNhy41uSVtEfiy3ufc8G96uUY4JKgmy7kLkdJH5NV12voWsCwJuiX1PNdVu8PPadKtyChBw5JwWPW",
  "key35": "5KBBoj8KVNuZtCyVx8gfMqoATJ2RsbaAXvWVqQXwZByzjLG5uWQRZdNWjwTS5EKcwrGjMo8GiZv3p7fuMBezc1vX",
  "key36": "WqvqnWPRzj26H7JaBohWe4Voc6jekPuGt2F8t69sq3w5h6PJuey8Z1ophZ5kTPqZHywp4Ga9dzKGy2fPER9S19D",
  "key37": "4GaYn5eRxnFbtLxG8fQL7CY4m6674XL8u9CLXpcUmaZM9xCLqRkWurC6K3QWvMFtwU6pqtdNsPZj2x3on6Ke4JUj",
  "key38": "4oYPk6Eaku9Wc8rkL5FJxciu1D82QtfikVsY3N3TKbg5Nkg8HK6H6vDffhLm5MPytNZWveX9mKzUAavNzafGdpfs",
  "key39": "3x3vWLAsXHcun5Nr6DBqga6iYUX6ZqwnQxLtyiWkqgWswvfS535ZYfTE1XZ1nDCdiQnUnoJ5cKU9mv8qDZ5hEjj6",
  "key40": "2YEBAZwLwP83ZBYgosPGDNAerrz9TtkgdV9KNVotkrFaq5vtthvGdXp6Eb1bRjs7C4GG3n9fnYnysLNSwVzX1Lf8",
  "key41": "RGHqVcum1bmg9scEkrxJzzErCv179Fu4GXoE1DSZqWTzndcxbaJrfb7W2MtRJjo16qPhezfuqmNW8pmpaSjcGw5"
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
