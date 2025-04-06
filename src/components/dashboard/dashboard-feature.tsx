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
    "3NUnxk3SDavHwBvzQsfjjj3jDKQWJ1UQgETTcjWQDUhp6QpR5BTt4K19eAFEJzhv2Ui89YVLTEgJkWBoqG6rae4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NSBE6KJJ3BjXoqWQWYyGzU7CfgtFmRHGUbmyU5U2oYni5GVshVvzTNnSkXBiDmNVKfaDzBEokLuW5mKYSNjisAn",
  "key1": "4xEGh5jvtfVhG851rVsCG5a3Nr4uGuQkCRyWNu21vVUK9nJ8z9iW7T4n9fTUSZW7k68v38FLvF24zNQRhBrEKkMf",
  "key2": "3c1a5EC2QdxS31fnbNBXiehW3yYRBcpKDKMz3QqAYAtAJAVWubRcgbjjwEEAXSXtM58mULj1B4ZoSMEk4ZmuAfLa",
  "key3": "5TFvsFsA2VqeeEtRzjbprYrEUJTvpgSjZhe3FkaEZ8JGRBChVxS6erdp5M5P5XffFqedihcGntzumBupXTB4aph7",
  "key4": "i23qtWv4Z8b92M8XY1xr9F2jYPdAKWVoYMTUiJALK5sqCH48sogVAuZbbCCJhGkdAkmhNmmG4bvD1i9ytt399U6",
  "key5": "2Qb8bu6i4KbMxfJxstd1Rk9Teq7FwRaHcEDTMExtJULiiqiDEDs98QwydakZkDkVJcQE39FQaB56xtj4e7hSZMri",
  "key6": "3Gt8LvYRTkW5CAH1YHutyXTqdS3uLzsfk2obZemu44gWGpopYQGuxRCK6GEi5Q8tNLckuvbkYeCPFk3YgUEDy3H4",
  "key7": "4LQhtudPb5tLHYDPsf799VNnQebqNB648LdpPfki37PTRXmT3TTsEgsjQZsJ2EojaczVap9jXuVxXv6UX9vr6DVb",
  "key8": "4t8ufiDsKjrducf8m4Fd3C5oQEbMmE2Zyf8JruZwZprRzACmi2EeB2FX1BjiAAXa3qEQaspJyz5HGMukYDUsWUAQ",
  "key9": "5QDE3GdLwbAF6VKnktGPcMH5UrtqKHscexZL2HPrHMPANBG7c8FfFnF3J4gycxyF76YDQ4K2JGWLfY2JZG33CQff",
  "key10": "2RKSspSBhBE1A2Avc4NuB2zBSbbQj8KZjPjNjwUhDjdMKtxdCYn9X24zFmpTUhZ3YyctkHP7NUomrqNu3qNC3fKb",
  "key11": "2cUkE5z6Y8netXQ6Xy77GnurwwjefkoDoGgmdLLVfJhEZAax1AGvK6yeucT9wjNLu5yziaicp1Ni7M9gFokJx2kq",
  "key12": "5bK62khZos2q3RNv7RaFAGNwQgjCeV9kDZ9BSjjdbBSh6fUXnxuQZE6dTgVQ3HMaR1JySucLGmBuAgCXbgwS4J8n",
  "key13": "5fxGrvY7M1M3SQHqQoWsWVXsj8koW4LCZvZ9fhvxTJV257rZtui3C9ajSTsdeep5FkTizbKKynq11sBDne5tmxi9",
  "key14": "2ipLkRnx4Rn8X4jPZCku3awZeXRcvjPbcxoHmjcyepyKQUgJCQFeXnyzgKx5zUBfasgsPWzkSPFYvWY1VjjYUuXx",
  "key15": "32iecvFHGek6K6aPyLCKExZ8jX54HmG5Auf9EgF635u65dNuRvtnLv8gHVjizE6w487HkGTDnvvCxdwcaNvWC5Af",
  "key16": "GEku5ERD4SLyFUTXvVJGskmcrnNB1KQhKWktstt5UGhiRtgp7BbJJwMQLxyPoJenwujxSwLNEUTLkpdBWzmdk6f",
  "key17": "5V8ijoNc5qeSBhFQ7t4NMAt6fSqRaZeRyg1cKS5rLRgxaYz7G55vp3u5ahrpqc5v4Z7ZwmQyvdupxE36kx34hEsR",
  "key18": "4mVSvY5rmEzJwwJ81J21nFBJxSeHXvDjNNDMbRjn9EQ9UiST9pYiFWep29mhRsYJYfHRjon4iqeRc217zjzf4gFM",
  "key19": "2r5mx1f4wFEH4ZJytuUU1Dm1d4jD4bTn4YRmkFdn9TEEbAbdHcKL7T69rgkGxGNS6kEubxfegrqoxW48YHaWA42g",
  "key20": "qgc14t2p2dwN2sbiJH2j8sCv2AiDQ6ZUGBSdLfu4xJZM6ejfwNvTME15ezvivQD82wVQ87De5gxpAruc2yzVgRw",
  "key21": "RfwH3QnsAXwogvcykTAHzD7KmD45wHE2oZRukPB7L4YACCFasj32JrxbktGd4ExLjd6y98Wo8Wit8TW2The9Wd3",
  "key22": "3hGySkpqjBe6GSMaiQCXje9UFNKmMbUsVb13jVYDjzVcsMQWrwWtvgmBb81CGejUtKBXWBjPGYtnjEpRc14AorNG",
  "key23": "49LcwVCghzErqkFUGZrFdEb2Utp5fDd83bdjDb3ax8NyUQEAvCEba1gzqXJ4uhFoQ7dLawTvuqAcQBmUZxUACAxF",
  "key24": "2wTLNH3Lf3hGi5VjDj8x96JWvVVNScTKmrQzaUw9R4fLi4H8J4AFqsRwsWFFCV11DXRGVL22QhwcHLEu6tHo9TAt",
  "key25": "5hYFMR8H9LseezvQNwGrnrbfWC74EuRcNyAD9oMWcCF2unb6N9aRR2uhaDioo7TBApBjuMYvREDDUtHiiNYf39uk",
  "key26": "4KPDpkEXsdYgVHe9D8cfjytUzpcr8NSo5xPcB88EXpLQGEgK2ZqwyMno3jjarCAnbJ2YKyR2NoS1BLCwBuURrz5G",
  "key27": "65tXn7eyw1k4gH4Qsd5sHJiZwZx6MurXWgggHEsj2tZn7bGGFFCQaZdETwoV5BWhTcAvRrCWZCimcdCgXN2cUYVc",
  "key28": "4t8G6kWQL18cARrsuF2hY4jHEVLYiH3m2fek3Toeqp55fhSPY4WxtZTqAdjCASf8kUewBJ6gJd58J64evy1RQ6df"
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
