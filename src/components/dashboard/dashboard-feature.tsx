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
    "uxzAKmxxbP4kaXSjLruUH9hXZejtGx6XWVXQkCgS4HuRwCHTreEpmJndK2L7quSfJENUFcbVHPJspudkJD1VGkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AY3S2Jom2fYYu2SzDhAMs7J31pcrxp6r6dzTBewzt5rCkw4SdQeTotuTxmk41sLoNoMCme8AYvRGKsms6REWaGh",
  "key1": "8HdnZbkKF9mWqNMEEa3KTD64PbmuFpS8EVjUaFYBM3oD2SWyi82mHXTHShifnfBByYSYKpQupUraLn5eEDvi7zJ",
  "key2": "2iMjxq8u5U15wgX4pxGWkxWfWoExgF2Kw6QZfbVMWP6CAo1n9YauStoFMes5ceMjjTdzYgBaM3AFd2DiwFDTFUB4",
  "key3": "2i8SjKcAkdhcuVRFckemFX516JJdgbgBKEpxx2Tn8P3wbarwrk4uyYt9gD5xwAhs9Z8nJSUGEX7BpmhBvxbPitGK",
  "key4": "3fZtPgj59Vh1jcLmTaDvALuvd6d7s9zsQjqGDe3HVfC97KYauFe7mXpG1S4npxjyh8uekLzTT6u49QAeopvrmdeZ",
  "key5": "aLePi3vC5BLoV4BXJ1nrR9xADt2AZns3kKNrYHhwkhk6DCAkHwrM2RnFJQkXBYqb4ngD1ERbd7KvHV2kPFLPgdL",
  "key6": "5ki6jLKFFasKevBcWqVC21FpBy74k9RS1xt4p7zRXjdkkSTPem3sPv5RghFQdMPFocSb2EMk4Q7gvoGRyL8fK2c6",
  "key7": "2bwAnB6XszjVwq9vAbL2NcBy2gexBin5BsBhhvDckvmT6Q7okR3pfcoeFqxFqmuEUq9tMhVvBqkgp3XDgXcMR6Sx",
  "key8": "2SVQ7BJtZ9iJsyARZGZgqnJ8sL6X1rS22Xb8zeummEkPegzqHQ1pz9ACmXCzLSvuh29DJ95Kb8xRovV452JAKHzY",
  "key9": "2v3M3ZTHrTwa2i86yK6CxKK2VqWnNbf6xviVS8LzF4bNipxGXQYbiZv4rP7yTdSgvZrFo7poYqTcAHEXYMXZ2CsP",
  "key10": "3TgqwZUiUEQrY53WzKVYjsbuAtyCVKK5xL5zWJP5gvt3WcYGvLdrrsLwda89hpyGDaKe3gMpvimMsdgJfP3Y2LHm",
  "key11": "5CxQjUiRNdCTKcnwo6awbUk9jDZrt5JjbLFifusz33PKP2WDWVi7ED28jjW8NjLpb92JFWY8z85FFi3zWg7Ym3jD",
  "key12": "2dzxb3JRkd8xRSYAWQy1GbGrLkyCwqdqaauqrhVBM1ctYLCXC5EJjWm8ZmgthVLW3Kdp1eazoaVEo1ttK8rTnuix",
  "key13": "5fksUSh4NVgBH98f6Ws831CPUdBwwk5sGNkqVGG4EDDtkvkZTpha1mAFTzCbynUhfiu3thsXsLLXjq8wK2FdHVDj",
  "key14": "3LXpBYGJMsuAHoMShsDP5AJUnFNhMsppvddLAUg1Lmi7Bdd9GWVJ6XahLCZbxymvmB35FHr5Y6dobT8Mbpt5gKZW",
  "key15": "46qUwaiotxQiDGq8EHTK8c3dbRDDhbF8bKEb6zM5gRR1wGEKHGVEDsjodPFfMZZQQ3HwKEwzxDKg2y4akzSGE1ER",
  "key16": "2qbZ6tMsQjwBtyciVFzm27A1v4v75ny7pQi6cFfitemNQvndjKjzELQkQKMTqZj7zWoYzh67pTYm55YBgtosMVgN",
  "key17": "3svcnuo8pTgPLdkgR2jw6qqi6XPBaUNJcj3Vamdv1ExWqgtVaeeamy7yroKuW2tSyWQb13SWZAqgpAy3sAjvWu7m",
  "key18": "2AnMfiEEbPzZknUrHXq4aVS9U7RchF87CvigTYxZDAgougaav9DXZQnoGbsffiiqvsnD15r25CieA1J1zpYVPGwS",
  "key19": "3xR9Giq7GSLLwtkPtoLnq9fRaCEmvyDeYyQduQe5cdkczJiyqKW1XHe5mhEfcSKjAyW2XpZRGLMzoLVVArQBbUbG",
  "key20": "p69uwVawPMvyG4bcxhSGCnhLVsKyvLEpjgf8EPoatYrtK64tXNLsaxiqcbj2VHbxVxPgbmMhdnj3gheJcw3hgSZ",
  "key21": "5vaUJKBNoCC4DLgX9Yx3J4gTGfiiwvQpK3wvDLy5A9Z6vgHBFvTygwZPakbEffW2aBaudwC5LX7JJZH5Y83deWMm",
  "key22": "2ZkQBy1uEYTrP32ar4MoaafNtkuqM74qdPZYpJqfYhecfTKkKTf9iGx5sTioRqmpAMUJafSLKms8mTYKjHzJ2KHW",
  "key23": "5KLzbvSMFGbs8mWjp8puR5tGzHYRhjwDsq3pRGeUdCQBy3oUpUTtTge3A3uc6xkeeLJ7AakQQr7UaYcfPut3QRWC",
  "key24": "3UuHiCaSQVymeKyVb6t95Sn4N7rYoXJGmvvn5eYXkhh4FqrakucikvwjDXU1PpUQz92TEsxDZDZPimj6rby7jURD",
  "key25": "4jCpvaPzKdQjGQFezTyDfDMA4ejJURBhgLuAa6uRLgTWYEKJr36WNYdfTLSsTZX8NyY1dMuv39Cdu8r2p7gSot8y",
  "key26": "2cJJdiDtrETYnDCkE7aj6o3K6fzN9HWGmFk7iDohi8iKhXXerrBiF4dJWqnLJedQGqdEp75uEYMzo5UyW6muGAo2",
  "key27": "5uXvvKbEyEs918HugJVkYSkJaFQWAAckqoiTcXP2saXGgpqdnAjFriYJV6GEYW3ECAKkR84Q35vMqUL88GR27jtm",
  "key28": "4VKBrPqkyZG26nDzHhpgwgoRPGgzS4tcfxFn4hhG3THhYoZ5doqwBP9tCdjsqJLcKgb3A4jk21ATZtwnYpdMjAdb",
  "key29": "4tBHDoAE2tXTVJq8238dPxzWdcsd6M4A7yU4HzZUcz1vnTAb2dGbt5x5Au7m1fP5vpeatE6Wbru3yXcgxBjm2TSC",
  "key30": "51TYRvvsNxEtseqtoxGNctZ93AyEG184g3UWESAoWHKgLKXnXNwK39nhZ4YcJJ5wj8Y8JPdgofde2o1QVxZW9W2a",
  "key31": "5o4JCyDt35hc7aT2fAnxWzNWBjPpahNDVr8Wnrw7owDPTPvU2xhpej7B1adtUZsqERudZ7pcF7yC8QVph6iraoys",
  "key32": "2WWUB2eeCExWYwGPqrJtGV1LvhabdcDn1KUrNP7iZskUcQzPTjMqVgJfM6R3U8D2kHdSGUnh9JVFkD5vY7qwiNb1",
  "key33": "35v7enwTNChZMWMh1zDSUpAPaf6EhZkn8cAr7WmoYigPmt4dHmpnrH44CKQMEJoNwas8u6fmuRzhKzVmtnWmWQoP",
  "key34": "3PBHQYwXYjrVZVtX2zBapATov2FP3XTpjMaxMghj8toVSdfZSfcDm9yPZLLezbP572jyWNPRbHX4GLmEoMWbuwNF",
  "key35": "23V74zkzuq7Db6WNjTGP2y9asZrea2F9vpYtqdJ41YVzFDLXKZrubRmYVQHGMyKLp1ApPH461pDJvY5iEZKuYwWi",
  "key36": "2zfhpLREJUh1vB73SKuggFViKai7rxDGWJSS8RJJnTVQW2YeVrkVPagw9mCL5NjXobZZevS1VQW2ZKVeioN6fFsU",
  "key37": "yUUhBvaN84JsD7duwgsEMo6Gvzf6AHp5M6DQPpvTusP2qqKv5dWQcdTSZD8sHa2UiXpxchcvyog124be9tzdR9r",
  "key38": "4Kg2pne5CuytW4zns6fuYnHssQmRr38Ljxs65sdcaYpFuhStwJgJZVa6XirE8wH4spbttyPxX6VBhsc4W4Bmu2xk",
  "key39": "3iJYDJDU5d2ar2VfW8fJ6SkyYz3KBozWCb3aZSXGVgAPqo78tjjyg4mFy3KVFAqVzVYyXTJ6nKjrrVLJG1LCsXKX",
  "key40": "5gTuANWH6TKxndBx5qEvjCmZnVQXcrmUJKen5sxzrWhHR61XnYbK3XmkjybQFVoZEcrVhBHih7PK9D3w75Xr5asr",
  "key41": "4a5RWug3EPZMKMFGuwSvCswU2vHamVH6dcL5wjn1CJHvjnyTULHcJeWN3UWiqdCjkfq6Wft3dRrKLJfUoxUZHpio",
  "key42": "4JeL5hmReVHxp9Xfz4Qp3EmfuxdmSNHW1yn1ZnWdQvBSuUfzm7qomgpWAdUcUZuV5BLF8uxcrSjruz4ckGkZ91gh",
  "key43": "scVXakHb4HEMfUbAQv99RTkNe42crmpeycmXoLQHFmBjDbyexJn1ghd9kKpK4kjjQ2cAAggZ4cpFKzmXL3CHXxQ"
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
