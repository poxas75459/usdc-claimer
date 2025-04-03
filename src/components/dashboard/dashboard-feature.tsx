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
    "zvCxMjXCHTDVeYajdzNQrkGgJC6KtekzwKDL5VJjn2dqndHfb4ZAfNDgezi56cJjYN7qyb36NYoWfBKDYRp72q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ncrti2j9koxdDn1NecEyfT447dWouPTXsVUPehCEcJ8yJYpp1GR7hXX7pTQiLQ2yXvJHYzwBuvYw6pUiaQvXwwS",
  "key1": "3xoU1WUSBgaiHxREYhUAGoFY3TwSNs38jmABFAiGpSxSXVCWbemYwF1sJXvZdMdhH2RouX6mNRXv4h85ucjiiFCD",
  "key2": "CUYhzvDRgYa4FTX229j1aECEqxaWC91K4mjBeTVtR8TUUHqo42WrzweXzYuddHjuw7a4UKShcw2BYLugca2hGrc",
  "key3": "49P8qVzxYRCKyddAYyFoATPHiCzdBtBJZmKWNNhDkaHdfSNzpSke1qJd9VbxsD1p59RrB3RVH2w4x4ondifRH9cT",
  "key4": "R44YAknu3Ac4t8nVbPadJfWzKauCbLMrqWAyBxz4UPTc5ZYVaTN64D7na9gWRsE69UWnR98sUR9jB8c1qck1cno",
  "key5": "2WbFsuXkC5bTGCZVUBAiYNmohWp555CnyhatBgwcg94DnhRQtTVdRDw2NcbtcYDESr5sYJbrK1fQFd1hYnbV3u5s",
  "key6": "oDsCuVaiG28nDDR6Aid9sp9bhk841r3PR6HuuE4uG7tRe5kivLFwqFgCw5rj6YUHt5RrLWv6up6nDEeYHveFyjv",
  "key7": "3mqFb1ehUYSiX1YUMi3FinN9pwGwpdJgCvWmxJn9h2Hx3XLcDbHsZ5EYjchtkSC8QnKRzJuAgUB1iHF8qhaVhbkD",
  "key8": "d7ebi4Mo6nPWiQw1znnP57EtNavhwMra9r8QtQZJ33VcQMr7Tt2vDs8mBei7RyzUyQXm5fz3UpqJehcZDnLap5d",
  "key9": "5nmNhx9AEr3BynsJvfiXQxZXUb1WCFpbzD4eAzcuKq2mkxGrvqP9sE3FAJ1wAMVTjyGgrhMo9ZEio76NPCV2WpjT",
  "key10": "2FH3hGdGs87ADoJjsyWWRK6KexAZ1egQBHWzLK4tyfrABsHRjNgERVX7k2UabDhFr6y2VytJq39DNQwQfgWssQ5q",
  "key11": "3VWqDAZ3aGzwUpR9b5ZvZpUceR1ku71bnyCBwPePeoMsNy1xpXBdx68WFJHbvdtZWDT39bHkM2WftHxTSKoE9MvP",
  "key12": "2mr2WEaBwD2TFegdD5g6aXbNpBPVQpzRHX3EHtBWmpjq9BbFmj2UKHbNDkwyxTFm6rVUTM9UFTRQkgKEqUpRvJpM",
  "key13": "4CQzzeQbFooD2f1MDZaqTTEhGUxoVY2hRP2jSc8p1e5uYMkaHFoYcuTq69XXA7sp7enJjcBijDwupKLvLooUT6wh",
  "key14": "2TmhtTufqJk7jSuN2Sjc4LN7UG3YphCgrUimiFjRnENXUJt87uAFZQemUbve3nY4MxTLFHb3AE3jcZL7Stoq8EGU",
  "key15": "24H86TFgJxrXATwtY9n17CXEhz2eaUaoQWCcpDVDukFWUWz9qr93kH7s84VBySVSUP15KzTFqdF2iq8ZJEhcsiuA",
  "key16": "jx6tjyMcTHQZb5jAhJD6Ycca1rCRNHBHYmDwwE87X3CQjRWp1tsWDDSE9gVfFQGeHNLYNR3jcDPmU4we84v7LXy",
  "key17": "4wwLkXFLqAUHEzrxoYmCnDSisf4o4dznmw9Kf8HXGgcN5QUprAjXFGXqsPzEycYncvgzyXNg6uitkEu4nyD8HXQz",
  "key18": "3A3cp8F6vKP8e62kPQCGHeeHCktas15Y8ApHmLYmY5a9B3DBDSngztUEtSA4RECbtHSNN6CQGF3pXwzgsVEd7KcF",
  "key19": "5di14X6jrL37DwSC4Dxj9L7wDhywoE7TyB1HddbQL4auvZcavgVmxQynjKtxLb9rX7GctS222mieGkqfVLqWrJ2g",
  "key20": "j3KZuj7WDaHBTkfZgGjRyKXG77v2oNF1TcwaFYGqL8KBwwfv8Q62id9qnXRa7Z9SDWAbeki2mGa86uhxqnmzoSM",
  "key21": "3ZjAWEzrqPJWXkXcK1SoNM8JT3MaVwS4vR8miCifgzGZGSBr391bMCZLykstszWVjSMarzKfaJwMCYRzdiHoYZqK",
  "key22": "46ke5GGEorfpEz7DXK9wU6egRZTUt7UnwdmEJL5etpQjVHavr6rW1W7PyMN9zrE5Z4ofrPTHjThK33PBsxfqDGSc",
  "key23": "3w8nJJadXYGV2UtZrZ4anVHvz7X9SnTdW4Fq9KpLeERBjT4uqRFmM5yL2iQL1zMQ9R3xBVE9ACYswBKREWhBL5bM",
  "key24": "632G5aSDnuno8AYd8uWa2DRacoJV4KvikAsP6HJ8gQWp63tkiTrtif32YCKZ6ryd1CfoF9dp4uYxEqBDoUQ4n75S"
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
