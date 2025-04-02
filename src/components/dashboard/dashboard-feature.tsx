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
    "2ge5neSdqC8NQxE4PUidYMo62Bp5WiPQbpaWjFwUaBDweh31sy2jNC2gvJAKAhmXTJ8qCZipwd8wsAdRfEy24jPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nzV21AaSVr21g5ZVxkhcbkn1XnRFiPm9R8uyqqWEqvDBxev6nQsLLJDrpgVqWFhTBYt12iJMKy737ovPdqcbHA",
  "key1": "2emhyBREAAcKBTuZNCRdUBnxveAWqV1MEP4HFbcu9CULyFC3pDdrSuKZjXYj5m378zc83pyfjr2CdbpcwfgrkzHX",
  "key2": "4k7711y1Xm5wfKW5e9neouC5YgvXpsdWRf5mQ6w2PKbTnQ3PZpfUFoCivnfnF35XuNr7ApFp7MCnRaYvJnRm1Frt",
  "key3": "3mN4h7ZKfHos2MR3nDecSvb8echzRh2zcRNUYAf2ik7TZfzaMM6wtnhZCCegNYdRHNkbgMJHNrETLd9t2YhBWkYv",
  "key4": "s2xrPMJHnC1muqW5mFh32LF1v36QPfpVqn1SwBp5He2san4G9rMubvEaRz5uUo2Es8y8YqNExEkVJ19XyjwPeSs",
  "key5": "3FFrU8K3TgsP7CLNoPBtrWhiW9N8yJKi8qZtUqp6d7shXPK9Ksx8skEdAmRotGgfFExG4a7wSd5grA7Q7aN7qsGo",
  "key6": "46jUJVMjGqc7QwcvM2RunkrG1uEsvDSvu8MNwANgnzpuqLZhxztv67Y9XUNB4PvYCo2myLL1QqaBEVu1bbKMBNVa",
  "key7": "5JHQCMuHUvgwbFZp4NWBWRM85gamaZDnco4pAHCD43myp7cV9g2ikKQm6E2Mqm6xxfCi9wEH4A3mPvc4RVvhXGKJ",
  "key8": "kd4fE2WtEfHxZxUJDUUECk3XrDTCGekmaGQMkiwTAknPqqC28ynBHpVnxRqD6eAa839zNo3UTNNwnHjbt6mhRcX",
  "key9": "5dQtizyAuvraTcsV8EsTTfbYMBbhg5Qz1Kx2pFCbn574t7zzF6spvCyCitCNPqCReP2Z7X7zRVsupLabo8FDn8zw",
  "key10": "57NRqNi3T7bHJaes8bDVwjw6JfVWWKH9omEcbpviWnW8a7hKkRdVTQ2qPnWdNUiv179nXG8R3QuEYxSUQnkXX7ct",
  "key11": "YN3fsDb3AhrqGQiD8cEiiFUhrknj4TGEg9L4PjeUF6W1h3j6z25htvJQo588p7TqVQw9oxeFPVuKYqMtoVDQGgg",
  "key12": "59LXa3ZxW6ud2gqVtSnhAVx67SypnYjsfWRCtkBgAw33WzfTm68uu617JAzYG9tmyHwbbv1fpKqtGcacGr1CNune",
  "key13": "5TEkoT9qynzBv8y6CZAXFsCXgLEPQu9DPhDAFBg1ULfVSydJT5F6wSckZEUmX5Di9xTQGf4kqatReH3jGm15p7oQ",
  "key14": "vCDu3coCzztDMS18Ny1qzr8hypTCSqqfDkXT5cfWNiaBiyV8e9NZmTb3jRdNDVjWBxtS1A9wmQhu1eqLqmQsc8n",
  "key15": "4dQMfzjLKhFHZvCGmRVfme5Y1by84unyMtmoPnWtAT3rJyuuaf5UqQE7eaL6c6Pgk7sfwhLFU7x8TfWdwCX8tReH",
  "key16": "4FkRAKMBpx3UpmnG9a13cCnWgmusAbznHmr7yyMu3VFspvFFcACCN1ra39hqANZv5icZsFUsiLFU6rVDpQtKfg3W",
  "key17": "25CZNKmGPDWUjgA8kZsXvyhgZi9P7jHDp676AJXZk1Y7ZcYKvb4KkDn8hrYV7nBktThvKHXBg7SygARmEdevbcWw",
  "key18": "4WKe8AynBMxA2KAL4VMKdUm5AXNq6JFL4QtnuDr9AR99zDe95tW2eHFgD2jXjxS3QDH1NmnZhEfLZQipdZ8ByX6W",
  "key19": "3Ppcar6noZXnDdssBx9TkobeCZUm9KqKUyQbzfXT1UN42P96aPbt6yrNsC8vu3BHcjK92g5KetKDZA4HiUMFdqdQ",
  "key20": "5wX8n73pDKwQ3odhtQRxwqrV25J6ZV9QRSNLjhSpMF1aPrkKXRfr4DwyU7GuuWToZzbmnhM6fXUpKTzkb5SXjq7G",
  "key21": "4Lz93xavSXuUo1sr1C7nQeSEEkK6wvEmrwbtk5QBvidmU8Yo2hakVw21PybtoNZc7GVg2pyDfV6vWBADH85qsMap",
  "key22": "5JJuaeNrMK4Ep5ML22rqzDxu7GorjeAnzBovrRT2ZNznTayH5aCEnGZC3v9D5JfAmA9EvKzB7JoVY2kziw2baEnm",
  "key23": "4uQP579RGGRU39uEM1fkgiVoZR4R28Aqo6XjrUYvdWYTuYbTGhX9QadgEunJntfRLgWpZwj2kCD91BfVuhQVF5S5",
  "key24": "7bQncNYZm5X2AKXfDV3cLDHK32g7bmt7Uid4bqvfunF3LVYfFx9GVh5sURoJy8jJtzDZyEQhJbZyHeJE3ZX4sjc"
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
