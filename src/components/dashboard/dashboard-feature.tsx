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
    "3qoRW1UHXY16WTmgMQXYwpBUjS3aYvueTxToVu9WaKHNYXzyEHnC4c3HuyQqq3UnLQwcuNJzxQtxoJeqkLwS1h9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ziweiR8bkejGTeFyU6t6rgK6NbxyFtQXVzUFiaZuCGzvWqmJ5qVD3aph7wMRmJFAvHd7t5gmFrwjN2Pi4oCBfqU",
  "key1": "2utxzHHJfba5WJKBkyhDcSYoEEEy7sHwCKViETuAjJsw8vDzt9zeXxcwLrWworg8vnwzSc1fU2MVAM21JcxaQi8n",
  "key2": "2qgnKEqTtHVgkghKLmRVnTYoqvnGRfcoKfVKLbBxT3J1VPPM8MK1iCZEi7gWR1mzAj9r6xKMSQLz7Qr85ZcEPrSz",
  "key3": "32zbnuFXJXcqYGsWyfdY7oQrzuPVUw72LtQHUAGai3aUT3rB9LSwo3NHdMAMzc6uThDx2NLjy4JiPdVZ7kkirAXm",
  "key4": "5WbJ2k7kWGeSkwVDZ61GbM7so6BaDcwT4FWvR5vkh1YLZNNmLQG9mygd83kCTPj4WLoRpE49mTYg28opDe2B7CcH",
  "key5": "5VUM6Mu838nTmj6E9QE7dNectq141K53opFjNdSKj1BTibZgB9PTe9kTcXz7SdqPJRkgxQfdBAA6ZqmS1L2zKrXF",
  "key6": "29xnGpntW9S4xR8evtcfYUERe46BcZ42ZLcaUvg2SgnL3ZwTVDdjmb2c4ytqdBCfBK9xGtErvpXyChRmyzQDDrVv",
  "key7": "4hwnMRdHZQVRBJs3pGutTJCVxR2rforS3CYzgHaZgVwYBhh8LFDcoh4GhcszVAnmm96CYZBX9Yxj8Sq6oLmNi4iQ",
  "key8": "3wnx7RXL9JttVpe5t7y897woug93jQ48NA4Y3YhkB8RNLKHoVJkDoddr42iwKtghEyepr3iEmqHs6ks6iFUMkAxd",
  "key9": "58Qisn9e8NRthRYsmVQ9w2thjxJWRdeVdr5Zd3zVS9fGPHNjLAkyxw9PyhLzdvwg3kohptMSZJtjAKTeLxgJEx2v",
  "key10": "28VspVNzHkRgDHR66JiLmgKwafYhfSFrUjFBusXdtixzRPfupZHGZ9qAMa2tqnoyw1GCR17MAZJc4r3n5V7G36Nn",
  "key11": "4RqFsC8MGBdJWcntWgKFM91d49tUvRkZ2snxAaT5JcG7G5oh8Uvq8kuESomjSbcQT55h3Gn64sEFapXW1g1bk77f",
  "key12": "8xYHNF2kLMytdcduNGQprtCxHESsnas9d1CQRqth6zhX6S5E6KJ2UwBamzWhNnCuxLQtA659HZUbET55MrBwwo9",
  "key13": "4mN3RGsqhiPUSH3WMsPHGqKGr6VzhDH7FViW85rDMRGUxvAfjd2Cc7H7BzVjBqGuzxHKKqnUMK94jRQzhmocGUt6",
  "key14": "pjyk9Ni8UsAiXqAMqXpRoTtYYY5heC92CdhD2eMWeR3f5kXnPzgQx26m6rE6PkekMv9BjELKKF5HB1UnZKvZguf",
  "key15": "5BuaqqM87ARgt33PU3n8duaQF5m3Cdc3FPKKXw5P77XUmYPo6WU5A3xEC5ek5xqbLYN6k6WryqUAt3b4QEJ6Hwu8",
  "key16": "5sPvhqAys7UfDqnenuuNNbLpFcZq97WzahcNDqFPqoeb6x8LSwTDYf3zR5b1oAi8raFJWDZpwS3Pwf6RDeK2B3RU",
  "key17": "3y4T4EuMqXQdZ4h3nUXrb6njAjwiMQe9q9zfrTTKpkAp24jLKznCFR3Uf9oM1rVcRhRuUr9ga6wFrSBYpxtjn8SN",
  "key18": "4GymjUWwUALpvykvQztFSmn3RhKcKGMTzeaNhVL2vVdRmb2zpWYQQZA2v3SE5xkd37wUgXZZwS6wGZjakpGWACrf",
  "key19": "MGPYc1qW5nETZFBZ9pm7aZYafeyABW8Yz421Hr8piHVvGDQewp9yS7fJ8n8i4ZybbVyyjYGv3FkjgvBtyWQC8mm",
  "key20": "4USTPpL6YREtJq92gt8YVo2r7bcye7MbzngBBLULVdQ5jeg67JeZH47dZ6NTQEUFNCpHrXmJG7fBgsBf7JzpFUNN",
  "key21": "5Xp4onGGw2pQTNvyHejSpGJdzZb1PgvDMNHCqb9V2BK6oFgfp2mXGiGi6mW2gwcXddqd2aL3SuFR2wbAhVGBFM1R",
  "key22": "4rXg75kZGcaG67i7dNEUfZumbhA9zJsZ8GET29JgVUjEjqCZGb5vAsfEvuapL9a8Nf8a2GxhDPu36qgzdRK6uBxH",
  "key23": "21UBa9XgiH5UDtyXjVWSEy8DtT2gKbw79HCnTL1KSzZuSDhY9XxXqnYkCjUXDyKQr2TAGCANXVmVEFmXzavhUUfW",
  "key24": "2WmZ12z9HuD7FHNbfRxFZhpeiK7JDpNAbNFXUX7mbFqDuuCeDf4jthPPLyanVzgCaY25LNsoEC8g6LG5oisaV92b",
  "key25": "25h14FmER3yGx1EKHWddkwDSocVCeBd7s4FXsmiLouWzWoj5jWbXdRwHwV8MPSYu58qWBd3uoQD89N88P1aHYQtP",
  "key26": "5SW67VaqSVVLQYcxX5K8rDAcgVMwutujpMZCMPc2Je4RoT9j4gwMzG5avYRCH4vt4qLjh5bH57zuiFTU7VHeM6nj",
  "key27": "3x9RckNrLihDHZ2VCUEFixgHwcS1CUYM8WTunLojnB5cUVbfBQTWTpZ3xhtS6ENCWc4r8bnoPzuBTugcVfGECo1G",
  "key28": "4YKbXPqcVuBWJo2ruDgHGHxz7NwZonY56W2QQUkdxz4J7xWGWiGgEUJm3TSsma3kg6VzQ3CZiERBZfsjGa6ExWGc",
  "key29": "5sif2Med83u3Bd4DK8xegSNsB3gynFRRq6tfsStPX2xUFAHo7p4W4C4i5gMwonr3frBcYYoMbj7mkCTwhEDQYHuY",
  "key30": "2SGZvqU9pvvjsfuePJnLV3BswS8oUQnj6msE9YdUeYTJRqtyDnXGMRbnVm2n6P1ibMTgkuqZfurrXApBiuVZouLy",
  "key31": "3e8iVKfrr7J2eto42MRv4XRHeH4FvJ1Pk2WgdTo9eqszrQLAAeMVNJVWsMCQSU1MsoG8ojbA3MkBDUDLvW57y3ku",
  "key32": "2jfEx8of61Xgo35c9dZeG8Apirq4oLhQNATeDoJC3JTmgmEKJkt6Yj8rYcAjyS7aop7wi1btFjV28vkNaKbKna4h",
  "key33": "ovHEUNotBo69putmC5odYWczvhwBMvRYbq4mPcWBAUmbmUJomzBkJCFbxUqCDbmpPsnvskaxmujxVr168V9N2Fr"
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
