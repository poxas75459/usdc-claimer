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
    "2UH1KCk1uvSJAVkKyva442iG2piNDo26aCfLgBwYc2BzZ5i5WNJa61Vz6BsPYKMJfeyoRhyStTYAjvuRHoCmJAUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BS2eJuuWfXQdpxbKh6BVx4seHaTsQ3jWH1JLqUBLM4gKgiXnsgswXXiPq4YpiVd9L6JfH12AWYhBVbTx9wqxiXi",
  "key1": "39WGD37MRSmXnDB4WEX7mykMaiqogVDAd1CkDE6VKJCxpgFJSDZzFT3CzS8Ja4rjkwHZWJv9xzvwVxkokNwAr3yn",
  "key2": "4AFDE5Yju51JaTEbXj7Nof67RprLi1pc64Pjo6vBAivTPqFaX82oDhZB353xPsNM4oN735WgZfd1mAArSrTqzZLH",
  "key3": "22WQZknwaDSLd2F7mEeEBpMr1dfJ5Dtxu68X6aQE7ZbC4Bpy8iXz7tutTs1kCR5DfBFZfhf8V3LeKioJTYyFgBwg",
  "key4": "4ULoiQv885E9WFwo5kXREmjF9GsoUbztk773uEjiCLshy67cytxLyJBW7S6KMZtUyefz2NPeueFxYi9bCibMsBdD",
  "key5": "22eXeLcMgHW1ptAQkVkuEJKmasENYdrfdgdWX6TfTsHY24P6Gk7PzyADHDGWg733fzKaXqbgKRiRktDJphi5gTzw",
  "key6": "5vBzTwia6kwRvP4aeC9GpDV3fdwyz24eZrHir2Zu9Sm4sLuaKdrCVR8nQS6WYGPCD2vUmYmGb5faSArUfyN1w5si",
  "key7": "3xGq6LgYjonY4weQ4eE3yx9dDnXdBTXi2ZQ612UeyevKM2qPBDauuuPmNusd8oiNLDA75LPEvYb9Cy17uquEf4MR",
  "key8": "5aJEJmP5DXL5D5dhy7AUHHhom1yCZZ6EFGzEYwqbD1rDPquXHSRe3Me3XEVdKpN1ckics1nurt5JKGD9dL8XYqvQ",
  "key9": "2gJgPsX67RTYvDnxHeV6LHNJNeULcrjTriRS8B4YG48SwNZjP7KG1Z1279nKVzgnWVn16VvnBiDcmQZErLWmCJ61",
  "key10": "4SEFRs3dnoFoS24KNEhDzUAQJ7qbdzEMqBx34Xy4HSnC4vrUWwZdxrydGBAnG9WCsCVZzPGBnL3pR4Tj8DPr9pkd",
  "key11": "4yZC91jgJwxTqbUVUGW879rZtqwvAEvwzVu5HXYjqGLbBGPpivvUfTJmMFMyTY7AiUSPUtJZxLfo5owcUd3keaeD",
  "key12": "54CXucCc2pc2LR6N7rcQK85z91RLV33zBU1n4bhpmAxW5FZygqYoPtTr7gAbQjnv6DmFW5Siv2WVbx5JMjnwsKpU",
  "key13": "2iQUiG19jZr163HzjqmyoHbhCLhESyNFgWBumrB7iXRAjBXTSFqfHHn5oZkcRWDHCzA3cuExgKV3gLxd4S1rXE8D",
  "key14": "46zdDLhJbf26sUc8PPZrcphNRRzERrL6G9DMZiGiBQzWEwkd67cCiKqE8G3GtribEscit3UAi3Fmhmv88Ggz5Eq5",
  "key15": "5QWA5ShEzG5VzBsDQhjdS9YTz3WHPgQG2wcQsiRzu4MktNKHjKQDfqQRGjj2QhFYpeJLhsUZrmmTQdVXPVs5n454",
  "key16": "24u3GZX6MEZWEfeTjawcEmZx1aZC7BsWbGMvg8XoCa7UwJa5ordSyVkthtnnVWxK2REaodYcKBqTWjSQBnHEQCih",
  "key17": "4c1GHvgFd1bGvzSCDZSmDdzkUwVwrJxFwtyUe1jowKvxVT7ySDHTZMwvtC7yu55hmgbf8KEZtPMcKnxR8vGD3hod",
  "key18": "kYNTKZw7pkifqofSwPtDEBwPymDzD7XfUackq3s69UTRzx29qTLAaygoAQ1RuMpdGpxG5rLgxBH1xk9GgWabG5u",
  "key19": "wQavUFQxKkzJwMdZDhxRQZkbqi9iHbRY2pYBvX9ygWcZeLLaXSVCped8yfMqrbL3p73WvBi9iGo5hJMjkm2EM3G",
  "key20": "2MEufXdkumqzkbgtjr3acSTSjqsc7wQKB4j6P3hTXKXrm13GxcsL1WtbVHk7jkqLBxgwViDEGGt4ZQbwvzZHxvK2",
  "key21": "35kr3rNk571Q3FBhhpiQ3F7vn1qahoowbguTxXrCmstoQZSCuB5jH3UQy8vb2R729nvamZAfUuxao4RWcqpZQymH",
  "key22": "41cxSwFvZ4tVpiKCXwfE9jZXHxjEiFZxxYRupD6i3QMdrCtAEQrnz4EzqveW7VBGixHNiBWcYhzBatjhq47RCi9M",
  "key23": "3WQvKZbnXThLA1kPpCHErL4ciRr6NHKcyYYV1uzdcJaWcZ61sJRZaFGoNNWQ6kwgfbw3o4MX1XtQw9my2oAiEinn",
  "key24": "3edy59uWoSKRYGaNKWyJ7FZK2nwQz7rpDBtk2WbeCdUnXyUEj3YRZkTgZrk91zV1Y7A8n1ZAdN4Z4p398rUAz1GK",
  "key25": "4mVZEjCSGopnC8fPYXYGhS25qGkuLgL7U7DRaAnFho8XG24Doc7fnW9yyYzBqc3ghY55Wm8LxEPav3ZtUnjKrMT3",
  "key26": "3ASffeexKpzEeJY8QofGHA7WDnvoD6MnhGJ2vXq1E6H1onoP89iFDX52ePx7fZKxabKwvVokSgXQyFtCb3Fo3GgK",
  "key27": "2wPQuCEEtMtFdxFgmgmYCuxH3iNpdJ9uT88DDVNo76CVjGyYMTJTDTZFPuGUMoezpSjESuGdcSiXmGB5ddUs82uh",
  "key28": "5df6du6g7keuzdCYHF3ZgRez5cNKqBedagBhvThDc6bDTWc2vSzPZXEYgB2hHWoUhaiAn2jJw2Mq1yak7YpNZjjE",
  "key29": "kP58cLYPrQSKdoaK72bZ2eypw1i3h9YA4myeYL4wtKtPhAbn35UPBBHf1SufrGfN319XTeDugeqL9av4NWZsDCp",
  "key30": "3muVXqWkwLsekg1AtaZRpF8WC5fCnfFcncQNk1f1Ny17Q8AyHssvsU82C47mErHmTVEjmA4qTRVHaKbL1Ugo4Qxs",
  "key31": "2ChMH6pGeMSu4tS6egaNcgrH4SJxKKsTiJfqZzAWUVLF3DafPFMWwU4vtqhLPrmx6nS1ASgG48ZoSR8YRYfGwm4K",
  "key32": "gYDKkRDKCmF4VucyzGv7r9osThcYR7MTCPhcDHB98GJTrvr9iHFJ2WiXvHNru7Fqs34xifBLXUM5PiMefAGQejk",
  "key33": "SEdU8rEnCQ4Ytg24umdGKB1Lw8qiNhBTsJJHb3btv6HRKAmHqaxjCUM3zbUbL4WmwotuzFvGpZ2EF4fRPouxF7N",
  "key34": "TJizWTrypwLDf1RcwUWzRSV9MLeRdUi6JEDUrGNjgk5CrxBNiA6aW1RKDZLfC79NQ9j9eT3T2HUXWBaY263M6aU",
  "key35": "5pHFomyJgVNS7KoxGZBLvkjWvuihEHiSL1yc6ntZdt3prwUBRTgpJpaCMrandLG1fGzU9iYKa52kzus7agJu8Uv1",
  "key36": "4k8aVd36ees2HNDLVHYzMDYhsp6vfQjkKwCwA69jGwBjDxx2Eakry1fSP4EbJckM64J19U6God5dqQtMGRqgCk3a",
  "key37": "2rH4nK5N1hcHV8XAKn53FccurDKBSdtTDEZERorYVkxHJxNtD4kPddZZ35y29poLBnBzrMJ7iFUZeLBcRCdoYbRm",
  "key38": "2tVk7AYf33kLnyHMrZzLHZJgPvfk16enDkto7WV9e4Dhq5GNDEi9CjaiXGojju6gQGe1VuhLRt4TEXdBMEzyMbC8",
  "key39": "4bArLeRwpdDucUrk6zQme1ikone7aXCpnyCKYW37xKMucUMQomZooseRDDWipxwRGGLomGbgesR83qjwhX4Cu5TL",
  "key40": "vEEZXoVrmUickQYezehPbKMU46mnxhG6JKsf2ugmkYgPtGue4AQaipMsuNrUbR7jmrwaXPzvkvTbkEvNEqniwHF",
  "key41": "5nTAGZCgf3UEm86AEpujhuLos1JssRZg2U3UuZ5Wju62LeWL4G2xdX1wNZwJjnsUU8ssaiRpLaZnBE7V15DhVAyi",
  "key42": "CwMmrRc3LUWTRc4aDmBJ9cY2wLFsjSiQrkU1rxkF2BpsXtmxGFxJKhUWyHQVusBE6HuVzHxbdjnac4sutCJ9vEs",
  "key43": "67rDK6BdyDBro7VaTnniJUzQuSST3nFkbfES9XfyA1oZYmtqkw7Wt5bq7dJ9N3StsqafJSEqJoFweGBmPP7wsQYK",
  "key44": "2AYN2rC1K7oJy5aZ6JyGPRbJ2Fiwmm9ZsEVD3HuDRi32YhwCW51NJ5Dh1dDTtmVRicLn5wR93bt2cPaSJWJXHW19",
  "key45": "kE8a9DPNEDhq7xny7TA1JcrHCKSTPRYWYgvGxeZJVajGWZBLHPfXjmaKVE2NEK4J54PuXZQWTRQiewgwZ697Yqb"
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
