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
    "3inFXxHHU68bMB6wQUhqThK2bXGZnpcW28MqzvVzjdLpVkJ7woFktCii5Hib4TYSQeYQXj7wfcNsk4BZGJHEht8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FdGtWBoCHswBoYt65oXt3NxyWsPp8gmseUEJZPNQwE9E9VDeJ8GjPqNpVroM5EfXdDK8dPhqNbRXqeR1fn4YMWg",
  "key1": "4tvA2Mv31eWAbjosiL2N6RYsYMWWxoTwrEy4UFwPQ9gP6FtQ4xYh6JqG3zxuEYsxCpPyrQCVEPzcLXzrLr8vukog",
  "key2": "299GjEVwLs6eSjQFSje4F6n9mLaNv9UVGYhsBDYReCco45dZV7LWnz2HyivVoDz3aphRzuh6FSosrLosaXCM4DHb",
  "key3": "2s2bXGK1d7HuccLL8N2YQXdpF6Vyh6SaLuxzGwQEFVkyYGKvSr9zXGjvZuz5hckkymA3TyVEf3koFraq6PefyiwW",
  "key4": "vHL77Nw3HNxDzNJZ9sLCWumaFj3Cbjog34CG2HeYu4ek7KoteesqTYgwWZuBUX7o8LgLCaFuEXEeFk8dMzyvR4s",
  "key5": "4z6xQ4UbNAJnm3BWw4f9vfjYv7FUkPvBCusWiFWmScBWg47e3Rris8uiw2V6WVU3KW5uBTfFUCJPKVEtRFgvj7da",
  "key6": "5pWiyjQNmmW6P9GTuemU2b9tvaWEc28g47p24LPC9L6ScuFLrA5DUE7pV6iaBZ3dCeWrfzFCebAYBJVvkaD1teBi",
  "key7": "562dXBJGcEkqEWoX6YpKE9MyGEXcDsgkVkSJM6veY7vNdKjvP8m3uQAufGvFHGd4JreqBfQJzgapQY398HxyF2VA",
  "key8": "5tsV2RRVRk444k1sYqRaJGkg5YukVBynuZLkYDvxongGSn5zbWJYSRbEh8gzB9iRknmxBqdJmxRHg6it8wC3R3q6",
  "key9": "5AbimyxxaVd2cHxjYnuLmLMPwVJwsttmtcwuW8s4687KRQDtARzXffWFH246ZAnsSXLCvqWFCw7kLB8EnddyJ6vM",
  "key10": "4bcMXdQmba3mwFz4r85GtDsLrwSzsUDbuWNSsADYF4a2RAr942dPiExLmmHFAvyWrbbZqiUsU42wDgzcrb5wPj1T",
  "key11": "2vo3qAAtGeqvP5or7u8AAKyuus4j5s8vbWmpTr16j8XFnLwinzGmh8S2Mc51iqzHBd5BXznwtW8B2J2JhWdVQDCP",
  "key12": "4psCKb2K968JmGNiWdHNSvvwMEjYckqsmQa5PNxD7SmAwDZkUJPUyzw4R8qLe4S2xNPdvKFmSj19FazL93UPjKis",
  "key13": "3RCPLstXSUPT6y74bbynDNCKkqijjoi5SjbWK7QkJ8FAPzJxN2LkwjmAmJ81fGo7RSmRU759emBy2XYhmaN4LcVx",
  "key14": "2j9PZdSGT5ANfX57iChtC9HVqq3o9xdX1TXRsmUvVMwZud13EqAiZrgGUpq5L5Kz4sgEvWSCcn3vM9VJZijuDhUC",
  "key15": "2XaS8t8gPJbs2EahCY9GXokpaa83RREyr89Hu2EHBzdrCb2ExuYtv9JWbboggaqWGUkbKn73wbeg38qb3MxcGfQj",
  "key16": "4s9brwFfXy5TCjkjJjcaY2Rpgd41GyTzgGkuSuh2HPqcrHjaQPwQAZXdqzZbN81AeX4WdkHGC25u6i1BDpEW5qNf",
  "key17": "5Dosqvf4e7TJBDxusK7DUm146ZWXpXjfRBgeNe4yrhWboqy84Lv3RnMxdaXkNtUD6pbeTQqUc1h7EbtJdKjr7MTt",
  "key18": "2XuE5ER6S5e32XCpQcMZdKHaZ1EnFNduFf2TW1uuPvmhD7sMDVupRESYUgksui2g1f8g7FQVztFvy1fB8d5wTBEx",
  "key19": "4SL3h91yHtrchkieVu7iweoWRZ9a8kUJMmhxguDNBoiqjCpp7Dmp5YpsFshL2cJB8niLNSw2859X1mAF9XXQMSK9",
  "key20": "623Yt47TNYyvW9QWzWANfsKMciqhPCCFKKHuEj6vJ6bTFJkmDLETsazt13wozMvM226rdgvPvaAcj4ciBmYyDkhe",
  "key21": "3ejxKesumu6wEdTVJVvVp86kgGUAaQfLn9Uakqwmz6xSNJjP3NJUfHBykdAQpxpxo2p9yq3mjt4XFqhcB3k7ZYyX",
  "key22": "3Kfb9JWA9v7mnR6pcxxv9fG5KjoG1RizzcpZYZ7mCMctwTPjUw1uotFuU26Ve1z5L7GKboAyAR2FGMv42o8itVM7",
  "key23": "4a7ds7bchcZEoSe2BvNjkvcYrUkDZdbm8VNCiqcY2t6Zivne1fBH7WFwyj6eTutkq2B6vfEbcs6UYnqjjNatkvJm",
  "key24": "4fm32ho96SxXwGazWj46u1m3eeE17D9AEFS2JZvqRTfaBg4QtLjFuNSsVxhVoEpNx52Niov1TNSXdQdkmCtUCsW3",
  "key25": "3p9RcggAVAd2WqhTFh6kRKQKHXeVqQu8MBUi8Dp22fcxWRVXHKu2zgQCL21D4427cxqeNKhSAYGmKzmWzbT8R7ci",
  "key26": "4PLW6x62NYofbr7vMutFLkaXehPQ3v5Nuq2hXR4mBAWuqYVetoVoKmRDZiQ1tYE5A6PFGgDs3gK9VhrmtHNB15PR",
  "key27": "3kJLrMXJXma9cknZhFSNK4SYdn1at8WJyYMyHPFVUa3jjB3pgvbx7H2iyGAoo6MXeeGgrjG5Dkb7RomHBw9hhMKb",
  "key28": "5QEbwoiC1zb4c5Hbv6RDVBcxHU1wWEMFunvcNH3vrCCMJiyrrFqQqsnQEMiDPkLEutxz6Kzb29VfgtZe59LAMGkU",
  "key29": "yv1RZ2tLaDJM8toUASJvj9hFdH4phRUJgZCMwdWdZAeYSEcvTJHAivTEjGsiXuB9vATMWhonoVG8avRqSpf6mwW",
  "key30": "2JxbPYHUxRvB2dB7S6ygASGoXocA4aQ3yHVxx6imhsc9jXYwhhq4MTicTHpLu6gNajQdVDFfzFW4cVSk5iBHgSWP",
  "key31": "ciWo6aUkjQSsKR9JRfQLKPLEFWvNCe8qsm5DyDuuHKsBUYFRir8vKatnd2AfcLXT4JuBAp58H2okHqZrYzPamPt"
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
