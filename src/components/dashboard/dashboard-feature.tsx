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
    "4LZj23x1YXUWPSv8HoQUrMJjxP1pM7982LhN1UEveJqfE8o6HU5SiVjVWCqNYKcjNJtbgxQcyBRYiAT1BPsMsjNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mwc71iDHtyW5kEbLEXwNaDo5sA4DkmxwuNBU64VAHycDPVsQJqF4GDchYDkWnRjTBxZQAVvS7eEsAuqCvZiDUeX",
  "key1": "4prUxLBYurHCvMxh9VdtSVcN6BmrsDB5tD54XLzLfVPtP3PmyNVAHQarCEdy8bdybBvVEdcvNJmHxJnNwPEthW8C",
  "key2": "X1kwoiX8wNiDBCREU6Z7gL5nGdsnixpWVYQabhHsdQ4z4Do1dJw7YqtxnBLdpwGKYfqFXL84ZjdPfnMJoJmYDJ4",
  "key3": "2NstZsgV4KNJu3iduPy7m8L54cTxpJBhc8wQgKzaMHAfgZWW1uG7Lt1TiNppYMxyFk3XA64UxkoFnpEQ96HkNn5a",
  "key4": "3L395gaKzmNp4ZBUL94Ytk1FYpgsFsqXW4LzyyCCreRZz9K5Nybn5DQT2BYFc67MZZSAcpRSn3kwWbueb3n4jGwd",
  "key5": "2ab3C1wueJwjrQSHHKNRRn57GW7DtG29NFhEiHmEH7XFiUaHDQ8L2f6g9E8GKmSfDQDbzvgJeEaMifarFk7nvk4v",
  "key6": "U6dMy6R9h8gzvQzX6bmM9TkSkgZCQqq7KwkL6ESaxSCYqo6nFiSAQn3vrcs4ZTovsFfuqQ7tosotaqWYfybgK3h",
  "key7": "5bNPneDLGubuq2dRoT9S55TsYU2Z6GUjwwjzCqyTj9JxF2kSBMSomUkRT2mru1D5obWB1gmHyYcxUcidXyqEbDmx",
  "key8": "5m35nzuMtQpjC2JPG1GXhatNweJhwhErvELnNR7QkizSwL9KahjRahxxu1VSfDMN9SYojXSQ2V4aRNwckD6jsawX",
  "key9": "4zJdDbLH3NqsUypFiPDnVJbwSQ7WcGwYgYtsDCN59JoHcxhxrAvroA6RKhY7WSE7aYKsHF74gGyeSfDdCLH9yKvT",
  "key10": "2puuXv5RwyUtdjDYAxvBY5NYr75SawrxnBRasDZ35RcwX1AEDS2dBikd1DLXogn1SXWX71ftwTWJ5qNL8E4AbD9P",
  "key11": "2Mh2SWPqCHEA1g8xQqhzHAHX7TBaHtnTKnJYamPRZLoPHbp1kvk7sABmdsGeqKcHpcYPnLrzyC4wJpVPjZK5wTw",
  "key12": "2RcrVUcDnbR4F4RkzrWZJzQE5FYGv2JFMtvFHezNyNBigQFbuHVVNfJeB71KD3mJtDeRi1pKfk1DxrHNPGtJW2YJ",
  "key13": "3prNe5LZ3QHDqi5xqo1e9qGpvpfzaqkU5sHiPDE4nCksDsUwDi6Wt3YGWd79qZHukHgURpGdy6tYmRTgjdxVFe1x",
  "key14": "4BFBMsYxhxjY5VrVqvkExjjfB8qNdPSwUGiKjHabP3284uwXLN69cnvEPetrZTtfS44sP63p2CgG1gqy2eyP6wiN",
  "key15": "5S46wgm1tbwDa7f3ubbVpa5r9DUyp9kHrxsWP8TdWJCDARgbM279SADcsMEowqpongNijPeREDwY6pcPj2ufewGz",
  "key16": "4DuwZAPgtJrouoq9pGzjw5xuP9JhPZV7vQ7bxJEAEca8bPRhYGdKhSXbkd34qc9qkHmuF8JepkXxmFHV8DkLjpT7",
  "key17": "5mzvw4m2gvAhp8vbGo9GVPxbKk49dcfEgAH3GHYGm3wXDK4uQ5eMJUy8BtkDQ6Gp7UNDBAcRSaWhAEN7uXfCd23J",
  "key18": "4PA2V3ka73so5Tbn3evGyqWdy2DutjC4ymJeffg9xk2MJmM43fKbjXDpRr3qnkrggXZYpdY3YYyyGW5T5XGgCJYo",
  "key19": "2tV23QpWAspdcKw6JtheNXyagtzeNR492Y1BfEqFJ8rUqZVEh96bFeUeH5YmDW8uykeiWePHscddKw2jW1pYZ7Pc",
  "key20": "24sGf8a1y4MY4McMP7WZUx7E1erz5xJgyhUJr4QcxFxzGtAzWjKo9WuzGsE9CdwimvRivUmwF7ivDkowon9GYXEo",
  "key21": "4v93peuMDGS5koymZaccvU7udsFgVBN3MFWkpViwkjxfqF4bkicR3m5Mr33eLdykXFYBunFHCb63BvZGPtYnuR1D",
  "key22": "R8jGPtuJhCNzCQeu3c65vEBsLz5zfv6bBFwK1CqaQ5eDHTDB4aoiLjgc6RsFnTiuFJX8R2CDCLNeHRMihsBxK7a",
  "key23": "pqn72F31CojyBf7Stq17dTUDHcsP4k3xeuvYWz46Gi2aSDfYMFD6F7F38X1QhMpnDwZmT3fzWVwLBjA2EkWdMSN",
  "key24": "4MSrNKxeFHXTXKJDtmZG6V5eYx4G4o3QHr45gi4sFk5uabhepdHhuE1Qh1FrQztC8e1BCsooGEGAgMYBCPG9EGQM",
  "key25": "3vzXVj7DRQqA5VPSa6LWLN4V8bogYPAfmdYzCtD2sa7CW7Y7rx8PregAShxR7oYCBvGkrU3UKFNhRnNJuDcKs9Fx",
  "key26": "NfNVjV34xfbVEfhmBSE4CLZtV34NXHLuWwyRPEhr12pwjWKVnRsUNxcwkWkQaoBBoAesKhSREwHeb77CdmCu2LF",
  "key27": "53BDdPESZgDHzaQw9vxqrJRAMqj3PnkzTMvUuoKqrcPhxEAP2tnVraZS3ieAKMpmBmzsDHR9FQEDzwegBYu13mcs",
  "key28": "3ypm7SLTcLQDSuM3zTqNuL19szk5cckbPHhBFWzQC5aMUmjLho4bTZUYfDkW9SixZjfv1WLQ4Be9cZbPZf3QWB38",
  "key29": "aHCWS9bH8iiet5RJmSjRikzUfsgXp9RqqTjGo746xmsF2Gs5ZFbedstc9FP4yG165SJJCkALmfTmDDdmDGXfAjv",
  "key30": "3oEFCDXczD42TEw1bPBPTC3Gb2SWoegFNfQVSgCdUaXjQv1UxCorpKB89t83Di3J6icwD4EFQTWVvXer8eK6USfD",
  "key31": "47DHDnB6gcsADctKLfb2TdFwkqmtNxouWAL47PHjwuDsFZyAU8aiq6qWyvkYkwJHWj4XwcCGVpjSrZC22kdobAbj"
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
