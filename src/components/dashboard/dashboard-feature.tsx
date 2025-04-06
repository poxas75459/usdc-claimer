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
    "GWTPNRkX4xiAKdKXR8UQcTBazWFY5oNCsCPF7kyHR1VvbsmFnhE2FgASqSpi64RNSuwjKiicn6exPHHXdgJvYxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmvUyu3LRBJyqG8gZ3bQvWAC9M4aovdLFtrjkU4f8nAguG44PZo6j6TVAVBYzY2UaqWaXMrFFzYvZChLprtTFcQ",
  "key1": "2uo2Pske9WALfhxsteobRtfJLwpFWJmjjzWDBpQVcivk8kMkumvKC7tk3KAtukiMMHRW5xGqetuK4AxJVLn6ZUDE",
  "key2": "4822rftakYRgoi72fjVuBVQxKMHoJjuZsQN5ENjNAER5hiKUWNQy3a8bbZLPX1yEacvJNK5y2Qzd769Vgmf7SsCQ",
  "key3": "3cGejks3LhJTKemCWtUPWKhQfVcqDnMsf2QN99VHiC4CMFKY8aSxhMo6DkyoBUnN7fuWMwdmHopTqFwtFs9bALb5",
  "key4": "3pnZiJpCfUSeXPf2DeXik9iA68h3Fvi57MgVjswdXrdiuyuGy7BouTLUS7dU8uKHtFqYuJKXVxhdPH4cZjg2jAJj",
  "key5": "4iQLYhPL6ErEBv37C8hryqzs29RhH9x91SziWm54gJTPUcWvtiezd53EgUVwizW4q5LW6kD3zi4RYWA9QWqsnUUE",
  "key6": "255jV7pmoKDah1mFDyTaAAXrqFWH49wpVnAKCgmxkYJ3ytkALKRxVd4EYWgBDn2WDuN2cLi5LTLgQxQGJFdvswVk",
  "key7": "5Rp4wn59ayxFURqZy63AznZbaHfEf6Cd5KfPxhzMdMiQdWFX1DSHEoA9oPN2rGXRYbEjNV21EZAE8ov2tdM425Yb",
  "key8": "4DJUZdNsoWgrQxu9DCH69yMzHHq97G37jHLojAKWVR3SfNtCndFuWgXyyfi5eTwMv9ZJmuLafvz4kgLvcDUn1R9",
  "key9": "5VYuD666KrTAVmjt2nYRtgwzon3zTDuxJtav2f4JWbz4UDeQYDksGkEsRKJHMxw4ef78oUKFDWawTQH9QwgtLdXo",
  "key10": "y8e8AFvkthqj4BCnQgLxS4ZBxjSqku5ti1g3Z9zquYPKj3oZrDpHF7Phq6HLTEps6NqEMdC32eNDG9Z9BHZbBqt",
  "key11": "4yomBW2g9NZdt3Edpq44j3K2uz4aXiZc4NmtwsBSNEedYQ5R46vByhDKgJfvCB8qHUZ4XdMcUUwNgGS8H4UBgTN4",
  "key12": "33AwZ2TuPmbrrTxZJyGVjXCzrZotusRsWCCyhffLqKiaNHS7v3ji9x7eLQk1TPxRb4UjMLG6gYTrqMbp2VnYmfjk",
  "key13": "2sH24hEcAWfjpR5Nocpr2Dk1sEsa7JqFydTyWqRzimnqyiTfYtNVXMR76RAH1N3rUj2KQApEfB8pJ2GkMN7QbVyq",
  "key14": "5cvtVgPkq53dKENbutqzUWdhJV6YJiFjzANPTr2SySpDPBjmxT3kirWMALEiHeBCDwjcVWSTrdPYB4h4vk3Ugtk4",
  "key15": "3DN7mYwFv3QQNoZuVoKHhARGp3N5huVhgqGShwQxyDfFyguwTHyX2qCVDxhrEubP4PKf56ywqZQMRW9XS3ietWfj",
  "key16": "3Md1qay9rYcqTDHhgHtmnNa1jDXPfti1Z9NsadMrymfVAVyyUj2kGfTbYSq2XhNEtsEpCaDyRFxnJrnLaSgZQNUC",
  "key17": "a4X8mjh2qUhHqtrk1MoFPrGhEjyLmuwfchrdVf9Ck5aSpQoHXBFnbZsFoKWMK3DsBfLstejvaQ6fF33TZ882WHD",
  "key18": "4A7z6SYeUeJjgCvuPdtB3wv5TnYo4n7eeKV8bKWfuJhySRvofUjUfawfSSQxdrDMuY6PuR8bHPz7aVcJQfgVeRmU",
  "key19": "44qZTwS7NRaJpu5CvawPjCLkWByKYLVTzNh3z2L8emcSbZhU1fxRGoxWBnBUovX59N5PGaEyZo7HpEonbk2U3hKc",
  "key20": "3RahyqYzYLEfmvbA1R5jP2isbn8DjNTq6hBGV5efU9sjxTQLhrruK45iYauZWtZmf89jRG8wtRsJS5BrQrVu9j8h",
  "key21": "3ZLV7qSoTirP191vnjia5TDA8gQDU9BLHA1DUzCDjL19vzFCby3WWDKpo8yqG9YG66XYHMj59xTWVVFGxEh3pVvs",
  "key22": "XK7D1a7E5r1wE36kdtJUUYgWcJ9d787o9nszopPcQzRTyDNanT374AUGfnndqHDLoEu4gJ3qrBJttMMd1DLF3QW",
  "key23": "3fVQDHdnTcxeGsrmqiMMmoyt9K55BEbxWKfhhB3bPGXeZHAbSUwLCD5Rz3mmoGSMjs5qzFi2R4fPKcQGUJdPphfj",
  "key24": "2tGwUe4tDb4L7LaKJrFV72SJDEs7jqZLEZdNDhjyCUtbCi3CRmMdpAuYfyqNB4PPei1SbkFZDt4LiEU5dkJTR2hV",
  "key25": "53yu7Kceb196WrpUq73XUP8eykjHLoTjdt6aTjdyW3v8UpGDjV7QKBFQL82Dha6TwspnLTXYC6vf4TfzkPVx3m3H",
  "key26": "3Vyb7KNXchKTupYB7RyVNYGcyUcWqiJVd2RposaosWGgYuWiE1YKL8bbApuNEVqKH2KhLnY8mvMJnmrdf1RxXy6y",
  "key27": "2vP8PvV6EeZyTUjaZhKKrXU6xYaWYKe5XhYafL4kXs1YbsGcmF4H6HDp5KRrbEwczTosuLB1m885gubdQs5jnvHT",
  "key28": "3vsGY4iNd3tJCMnXPLyHbQGodHKUMugrMGeHPXrTqHivgLYNdVmcFv8CTj4CDvBekh6WD62pboNsiC86EnhRuNc",
  "key29": "2nDSxvCnhjDV68DFfX4gwX4eM6BJrSQaT7cde4g6iJ6qJscRAk1nhz8GfwwDCxZnr1durqXt1pXyTHE2chnvu9xa",
  "key30": "2EbYGbFN8k5P6SAcUSnFwKwRNvYbwUjCW25BVrKhkMG2wzBFVNXtqcmwWCKjZTVfe2vG9VL9SCDHFci1HcQa7eiU",
  "key31": "33ghSGrLR9Vo2FWcdKGB6VrymUU3nNQWQPtrkJPnHLMouXugAXR5uGxp9LLfmAZW6tKCpB3iG5B87omrot9CWjvc",
  "key32": "4Dpfm1YGUMyGzHoRk21CfMQCVmCHW8Le2LtjKjEc9ukBhc8hz1zKRtavDVJgsUtBgP4kE9tWxkmXRmrG8SzsQhZP",
  "key33": "4W7Tfw4QsKQBGmTmYaSu2dviCdUZpULJRStwCnfLzY6uFrCxfMjBLJ7uYZW74Cg4kpxydnbpFpZA12zooYLqu3iF"
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
