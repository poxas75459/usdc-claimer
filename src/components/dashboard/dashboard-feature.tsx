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
    "Vq47LqGvjSA5q2idc28Nbx6E1vuK76r9tGKKNid3screwA5EWpiQBSNycExgmW5cMZGbZm4jDD7gzXem7Xzm9nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L4XQNgQNvo61YjMGcmj9gWpZ9U2GKUuekRsuCGrXp6iDpnBmWNcEm7WcvBaraapAobjXuoHE7q28mTd4nhEhqMX",
  "key1": "4LMernJgd1Nbfyn3vtjoZa7Q7XzijDz7qBChxQrKGGMPejWAYGJhvRAo6UhRr4RY8tgjFDmNxfQUETxG69gEhTgR",
  "key2": "2GdeGCY6hoL6NpsQaXchMs1cXmS5EzYJbxTbeRHYUkmiYXDTMF2ZGzyoeVdtaNqmK3q24CvaaZAV3iZGDkSPEFZH",
  "key3": "28KbT9Kk6w9t4EuVq2C12pVj2QUNWa7LxXir7jXeDnPqddZTFNo1RXkcgGkSbC2ezCazA9SAuCZzqSpZEHcZQSAy",
  "key4": "3Pj4cLEH7ATy3a58dLY1FErkV4RWKddNxZPeCuCqCMJv6rbZMC9enNwwoYR337ThZkX3SsZ8d6mXeS6hNViu4Ag8",
  "key5": "4APuaT5mWrvxNYm5rjCncKcAaWfGpwuAhLo3RgQ1mhsG976KiaH3MMmTq9Pdd2ktAEAxgboPvBdejT2WKPwswVX5",
  "key6": "47kTjCBFwnQfYJrFoRHbaN6UHzKmmHh1j6XJBafDeNL8JGtD9AHpY3qQhuvkmd97TYT1jPDavvcKxqaET8Gd8b2r",
  "key7": "ECvgFwXsDAtfX6jdPZZFoJAh1Sz6X4x7EYPyGvP8PewDohdGvA8vayu6ohf4BSm4SLUgFLZ4v6qU4Wx3QzpM5wf",
  "key8": "4h877UJTRdHtdzeeRxnFBYzLYb9BRXJGWfewXFTtZvLj21XjgD7zJrW13wfopJKAXiWCdZUP1wkSCenRtdcZM1h3",
  "key9": "3P8DJouwtH3VJfLc6hvZnn1j6ni4thuHQ5FJ7ba9VkVSr7SBwHbTzHh7sVV9Nxd5j8VQpqU1HndR8j7SLp9ZLpEy",
  "key10": "3KQcVgTygd61EMoyv9ZZ2GXsD26KnMugPJNf5N6BYFDM9LYwJ4oCJ3AT4tMwCk8cNv1MK2MwspiidwMUaLKjU3WJ",
  "key11": "cmthcw4vnWKn8U93aZJp11isJq1FRR6JgUnnZx4qDr3oWNU24sMKsY2nzWYjWxiBj2sDtUkvif4Fj4zCxfxgATY",
  "key12": "226jaZXxPQYY5oRUFUyk7oTebixjvVoSh4BbKi4zT9Uyi31sDoCezUwqbkcZatvtsQrBeBF3i7wydZw8ewS1MpGy",
  "key13": "wc8N8cVRVu4Mh3H8T9vryKELtqqn2qgPSvc5oufLoho7QXDdBQijmCdgP2LmR5sCS1nUGE9qdSwYsdwJvqkzHmJ",
  "key14": "5nS9gmDr53X4FbsHDzkjM4LD9EKXhkHYayXeCNJXCEYj8tednvu296qNTxGrX16JoFPBZZ6HmjTrwVgKzBcUVQ3R",
  "key15": "41J2HLXicNPJqDooUPmzenDUw9fMauMmmP6bK3Q5BMEQGgSLX4ef8uQaPy9v2aKvRqntmeKLGdsT9Wodro611znV",
  "key16": "2ZHbnUGJwtTL52C5LSG6yUN1AvyjKS9cDdo8mUMpTFrJzAH4unvnMPdGn19z7bMzeD4fuJkDTLouZvodP4vzFad3",
  "key17": "2sNyoNHfF67Q2yqn5fxfsaaR4eLR3LCS7ECKm8bqFiGPenoKb5iUuU9A1QU39s73GzrassutR5dm5Ek4jGsB6S7K",
  "key18": "2snVcDrE9UrqkD79oAqatBJcWmXAB6QzA37ovN9gJ9ERJqWvXqYbgSyXds34Bum6EabmoeCG7jPcDk2RgpWt5Phf",
  "key19": "3pnREj9A49YzNUGCFZLtoHR7WUmwUNRMEC51Gv5N4tH9EGScF6RHQvqvQCGPR3UGujYdHRxYWVseyumeZa1PJHXe",
  "key20": "2jERHo8jJQjytJQUuZyFF5w5XGrqb7BNKahAGQjqBiBhp3iKngMvZuoCcAzcUJyQ3rVJZhHGqdf286pwsjD6CP42",
  "key21": "zyHuqYRsfa4HEZazFSsCFbpCvRpTd1pMpAMe8meiFjevB3gfcCWYLEdcfZbESLp7X9PPSTSyXBhKLoTBrWxVsnF",
  "key22": "5nLcKWGvcLVAqZkgcUjKB6DBLVAgonLZC3DGmvXZNbFjBUbQseUGQFFnWJo7WStAUvhyfRqaaCKXVMNXHwdH8X53",
  "key23": "3SPYDZ5F8geakMTH2nCJVHt9hbJii3pSFCGoWn4KvZkTF6dvQqbCFNw5gn7QXN3iY6rgEYXDRyqkgqy4MqfUFLMk",
  "key24": "4fZeWHu6cBESKiatonNBvG6K26FhiPaZrrTJpwsiyuaA5Am4LCSUPxoXBtAdbwzGc8sT96iwJD4KJj8iJog3fsqq",
  "key25": "3szUPBb7zYudBt9k4q5nsCgPX7SFywX1ChELomatbcAUNrSd1j99VD38u8WeQGE7rzgYxygttfpH8jJiexZWiMSu",
  "key26": "3XPFQ5STLUyyihJGsm9fMrPhS85M89eTTDN2i5cd9626MaXdWsWifPE7HXTDHcFjj5khV3Xg3yDBnSNp766tLx6R",
  "key27": "4ULfQg297iKPnGy9j7Fd3Vhq31nWQjFkEgDvrfdSnZkjpvu2mHmS5jkYCz54oHRo3nHTCgSATvyYckRAtaDHahG1",
  "key28": "2n5GzSgqxBBzsuZF24art5QAJLyG4E8wZD8Rb4nAkJpQ6immixiwFRNBboefchJoJkXSJB42CLpBj9y9cA7Jgq1f",
  "key29": "27zSyTSfTLzTv66FQc51vqppnzM4fgXu2ahjPPXcsWAMLB6X9KdQPQbbvsnGjkJzM2u7gsv96FiZSJ4pYxrs9m5G",
  "key30": "2tdBnvbto75Wqky4yz86yhxpcNxUxDSJ99CmnQ5651tErWrmFhcP3oAWGAp9VHQTwyi64d8z2EpU1yWsFhTsSYob",
  "key31": "3mgPYLinJJk1NqUmj9enTktEYqqSPrNxW5EgHupfVKkVE3NTKuJp1VcuTRjSDsrbvyYyhNGp596CnNdt6ZruQH3D",
  "key32": "28ZAWckWpKaUxZZDkhxwWq2gg1iu7K2sPx39D2S4ScBUfDaUryPTJvmvdaxqRRa4iuFd1WGTrQKHGeUJMpEguwJi",
  "key33": "3k1T9wvhn3eXjNxj2SgnHQwccrdKXpbEf4kHZY2fQyeeydaAtsmQHjwCqnexbWTq3DbiUPV2Vhn9Jsv8Sm7JDTSq",
  "key34": "3VekD2hd6xNoNYsN6NRkZdFrbk2Twmjgh4ekUdaxY9qcqQayFkQ5eBVzxMY3NtuUUDircTsnJHFSEX8C2dDqmQEv"
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
