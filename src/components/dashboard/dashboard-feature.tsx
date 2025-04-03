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
    "2s3uMSWHKGD2kyfdnG13r9CyAYA4vRkLW2Wkq4Hw6ADUH2WLninErhSMGhubCQVqZhJp8eHihQTsNPJ3VBfUKv5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2BgvpsAmtjWXA9b4NQyYBKNspgcqdwhCQi9wNH6CwNN6yW6jEKiMinxugfWGYNPodPCfCStTHgoHak9NnbJ1kQ",
  "key1": "dLkQKSJGiorPDZ6RoX5iwZZ9dFmhwzwbfQzby5G9BdJByRayUzzDXYQg4pyyoo7GPPeapmYPbt2w6XdABq7wQwu",
  "key2": "4fEBX3RkdER5wJ25C6F6au7NtvwS1iYFHnB8vmTGh8DKaq4bQdQo9S6oYf2ucFKbq6GKdJyvg2nRQjemjnnCDJbo",
  "key3": "4QEadRxi4LAC4cPK33QFaUzikXMn2xmrQqrwCwvHg3FfTeGWGkRDzrzk97fos3hs8cN2kiar39ymPo23hHNsizKt",
  "key4": "kbqcbjzzMMFgP7974aC2WmGmUUMYMbCQAu8MaiL5VffjqibPp2dr7dDWTrFE2q8dHFTJBHtntSTShmdrwQSNjBj",
  "key5": "31CAj2YiKREKj4Tape4MPfhxYL5EvxGo3fSJpQjEgGr8C1NQSZWRxVD61xLAbWrnE5hrWxTttaxRsEbPK672wxEH",
  "key6": "3Jy8zsTmMYDbcA1nccExdYHoiyJYUJ7qS9rFDMpa6QrXAAnFr3QZX3hQH7YYG4p9hnMaKAfw3dAcaA7iCyRhNbqf",
  "key7": "46AMoo1b1DRazrtyHKRUcc35yBm72jc2sxkULe7m1dd9sCouWz1LTv185m9qb5MCccEUeLHjPgiLfsTgCEogQGb4",
  "key8": "21YABcwDAcQCKS2bRSB6VQzvs5Fa7hZt6oKiuH5PBY3eqAjYq7CNK7MgMpYvS7mWbBWo5Sd98hVqVaVbVSch6kXu",
  "key9": "228nm1UvRXDdE3WMfA5VYnWhz8E1V7vm8AxtB8VqYZ4gHCewpU2m8N9LFAoYvS3WDgeEKQAobcG84K51sXWxzVLk",
  "key10": "3GnkLwr1GqKg83N5mA7zUj886Qn6i2G21DNfd76c1dydsa3LH8VTWG4bcTvw85wBx26ifr4kGjyMqLZv2jJhdRfV",
  "key11": "2eEEafd9icnZGXmxa16ewr7vi75hWizwTayHEqhvsYWJQ7sBYpLpdwyLWhA2cYzv9zVA7U7FAoVVLyb3vK6KgaQ2",
  "key12": "5WGJ4XyG2W2oogGVfEkkZVEn9X64yBjLXy1GMGTeNb3T8GScjc2gWLzyYP2MpkiqdV7HKDwwoWwY8f1MGxZxganV",
  "key13": "368YnyLSrvnnTJGS83vmDLthBTrNDGaaWBKVJBRcKqeKVCcdgswkDxnoMPNCiUHdMjfXZKreBWLyWh9RFeEzWj5v",
  "key14": "5DeRnPSjgn5LGFMd2PfV9kcLct6wmL4yR8mN5iWLLmygzDYDygWRxNeSsCBzrghV2ZccwZFCqd6PSwK4KyRMKmx8",
  "key15": "5Tv91m8RGhHyDJaV731ec8frgTzN1bPyZfAqnSeJd1gYjzLirHBnh8Ka5GhdX7ebcohPNwvWqoWm73BQjVwyfQ2t",
  "key16": "3oWM19jvgjb166WRFUb6oLKjt7724SywYfrVJAhmgmSsusAJDHFJYjzvjVqCkrzfzmzrrw8WMUXbWAaH6Q4mvyJT",
  "key17": "3f5PYDaNnWV8DC7EHTzhjZzXyNbzRn3LV65NR53AoEDgLckvenwPCjZv94XAV9x17Vw9wpv7EGE74gGZVZVFEaJQ",
  "key18": "4obRTFB4oxkeXw5U4YHguzCNNv7QHnsrkAF419cMy8kNtBMFmVx1U2XNVCe1SZTRwSP9L56RNP6VXHzrHqEKR6Ty",
  "key19": "2XMJndM86SDs36NhjEYBhQb11mxAM8J3W8fYbyRjc8ijus5TQrtKceCFjFUgM1daX1MyCrZgZ8nfgRSMBG9gqrCa",
  "key20": "67bcmmQ6LuUcAPCdcfSUujUrSngQGuk6pARb14HitaZi2KBe1xHguGZxRsL6Vgww1rPbaqqyZUcbKvUtbkNftTrT",
  "key21": "4UjdZm9TaEXe1JK2r4M1xGe8BnETeK1f8QNWyGyjuyWEAoqB51akPaZtx5FoY4YFunFCagYQdD93yKGN5Db6tuEW",
  "key22": "4mEF2oUu53mPrjh6fbLZVJEmmZATYJKcEuQxC9rqmqZcKZawgqGCVoMfqQNSTHEFtxviD1magt7Avjg94Vsamaxs",
  "key23": "3WYW5TUTor3aDEr8dAjoZptNvvQWxhLokheTwYvHN1MPsiyoA8CSsJanVCYVahcEUr1c6NVidSFUuijXyD3JoeWm",
  "key24": "N6LsBw98McKAtnvS4wULipzbsgiqvnkZK7qkhRBCcozHtua8Qe1dpXkywyobWA5TuJiUjeSUsyjuR33kn6waJBw",
  "key25": "9EMTkT96a51RxrMiwQ7hFavSoyXxeqA9DJhVzCfgJfGBzPdfA724X298ZTkfvqi2yWnySKsZpuTh5eW4xb9K1aG",
  "key26": "5MjAN6YCm9VmN1zAk6yUEKUQEj7ek6T1jA2PZojdrPEnfpXgU3KkVHKzwHLFiBLUxXcfQ45VZ5zsvND5n2mng484",
  "key27": "66qM15HqKCea8Q62ghV2aL9ZbzsZNsCSUkoVFhFuZyZ3mGkxUsexs54HVrA4CSJnFuN7QPKirAsBQMzTHMvYAAaW",
  "key28": "uB7hsm9hYJrmqdq9ZsMn9qYyPw6nZE9VWBHBCJq2Hss5SqxqYm4uTbHTg1yteN18mGGXKYBXsisKqcJMpg6igGE",
  "key29": "3cJa51PGpLa85tbKum6fAAJdVnWkvzRMyMvYYTzMMwH9d7qwaj5ecQV6VJssjCJqDaBQELLbgtxutWnZWvjMS5Kf",
  "key30": "37kTbq6iL84ude4ha654Ve8XQrFWUR3iG6rh4ssMLNE1cs2ka7nYDAygg3eAceuCC72ovwEx5QavdLhdJ4L2Lj4",
  "key31": "2obRrF544Wqmh6uqAh83TZ5aVpXUk7DsgySW2wnxdviVG5MAmeTS4jzpQAxExQ1Z6ub7FWXAmt2LvSuLbVgwZda6",
  "key32": "2o8XEAXFzHQWBB9HwogzMtN14FkXfQyxrMmJ9bLaXGfXaUpsF24Sak3CwVi5zLe6reoBb87s6MA6PQpBLzu6FQ6n",
  "key33": "4gvV4wodwtpMEEALbehE6ubVGJSVGkaPg6s2MrXWASNi4DnFCVUEWwWx4VGwDU2kWV92L3aShkyhGf4gUWaPDJZv"
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
