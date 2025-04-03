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
    "5fYkaHMYaKRc4NnWhuNm8fLPk8yHkizX4MJvJTRLXQPRgiyF49aqFVA4UV1vXmoXrK6DKuPrYgWzF2pMvMyDGJxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ScESgZY657pZMMte5EyV6yZ7pnQ6qKwGcyceKSsazXPzU14UDzCiK68yNw7LqqrTYKmbGySNaPmCz56eYvfTa9",
  "key1": "4Jc1rc3zweL2vbCsYC4N3Tx2kFoBJoPpvRYz4T6fvstKx7Me4PRPjcumyGJfgkPDT9tLz2QLA9sYpHPYr5oRs1Ba",
  "key2": "5TnvnafTSd2hN1b3C5sJoKww5WbwuSb2CSXQwGKZmbgkfRv573sdnUm8j2iTzRRFvdg1p67H8tMqsuQ4VhwbSFZZ",
  "key3": "5RjFmMAhBzsTL9dkJoUY2rEY7GPpoz4xbvBnrsi8NUovWduj2As1KvRJrHxgGutyPmhPXgd9LfCx5bepuxvCfxzw",
  "key4": "3zh8MhQUiSQbAtZ7A1hD9hQeczZaib5cUoeV7XxJXrXfSMDBJH1k4qG3VJYoEi7uubYuZyNhirRrtJFZUx78UriK",
  "key5": "63TUcQpXSkSKxbwPdNgHeH7vd8m36Uohp9PJVCscZzKbtLfXdrMdMkbFEg4ThvnS84FAYsgBRuiq9ZdoKoptb2Ra",
  "key6": "2v6TH57x6h1sgu55kL9mX4WvWQzzfPnLLLqCNfjzCVQBAiPhbPTSLt8p3eNHaVRA7gEqHHxnhVxSBirxVfmtgf6",
  "key7": "43sDmfbi9ybFJ7EFSruBiQupt7kYPaUUMKWRv4QLjSeiuvPaBuvvJRdWmJCQSADTHHGEvxywQQ7TFeCfWKPtqBt1",
  "key8": "22hB3Js9Z1c5L871af15qLeQb5yQGD9LaULy4MQRoxN2uRFbwjFnWM5uwa17d6jxup7STETC4gWxGrbwy9QioVYg",
  "key9": "5EaFoDQuWimmoPVTb4YjNR3QqkUM942gaeibDSequ3sYwA6mtf3sNS3LbpYZ6AE2PZaJYbk98VaxnZ3n7gYsrYDw",
  "key10": "24QTDhSBYMsv7MXatX1itg7HdN6WCeQnARQ9VnwtJuwK6HWgg9AG85gFtDVLwN6CNE9WnArw6eUMKAMNvSDENegV",
  "key11": "F4Waoa35cwxpA1rLvDT8BaT6EVA1xpXxGKG66wayKLVn8v1tRWseqjXYUDq7oH9iupknugdKbjDrT4V9TgUekbM",
  "key12": "sZoJjsdMrueXK1iBzbnVsHytTYSDbuL4vXpJa5hMFQE7fbBHRLauYBaUz1yjftP5vSqnEPncoKEPPVBv2ZvkeJs",
  "key13": "wz23dFJ1WwbnFABcotiEZHz8hUn7wfmBremKXtfNTmjmMfmkqM4nUHEmhKSQuzxfCF4htgzzxeRZThE6ANGci59",
  "key14": "VEYQhi9UixYGZNtdrdCvYdFvySBrBHgfCtu4W25XyfHaH3dr2ugnXoNTcXG4HqBnh1RZ7yaT1Cx11wGWmQ3UZ1u",
  "key15": "2cQ7LYDBQ4JRy8kmcgx3icupS3zK8QCj3pHoio1qBN4XZRDdbnn8f4Mu47JW6nHJugpP3KGr4Sb1pNPf9yvwzqLs",
  "key16": "5ZCrJpddRQXaQCkW2wksHssC76hSQFTuC3rrF7v23yhyyANNzJzZUTBynt21jKahYVN5fzCjXEfCCSwJ8d44VnAz",
  "key17": "2hHLiKMxmcZhzja5sJnYDLpYqECWd1L3ojNDHQwaJGqaUYpZ4cZt1QJWYQxqNZjNNw3u8d7nDfRBRg8sJGXjJfQA",
  "key18": "3TKz6DVngD9QuYKjNJQg8yqpqnSWhLYrmWMLftbLDiv4REUDjDDELhTEXBPrd9zndzaf75WBuw1vzf3U1gS9AtXZ",
  "key19": "5CSKc4pfTjwTB8NRz5TN1bVYHcyS6sbNTGhXKaWEPySYf8rau53vwHJiuTdhzaSvjqLky5VhQp9DBqxzGGYkhrZj",
  "key20": "2NAtrCNgAeo3j7kSNCbizZtNyA3BT6WqxokTzM8tfeMquiJfWzvXtiwKV1N4dXCAnEjFeG7189qyuAzFYhNatSTt",
  "key21": "5UikbAn9GpfRt7uDU9CSKYSmfhBb52N4pYD76LAmcvEFughSjEKA5QfHpTqKcaNJRhodeAhu3DUHYWMW1rqgCNh",
  "key22": "3w5hY7LNkXxYVzrzqZVoHbZa73pMCa1Fqn9QeD6AgAKFYSnvLLwfmfAELvJxgd55QJ2JDa2T7dmSyPFMr1z7GX8j",
  "key23": "2WjHGhN5e8eMakDQrTLCB2JLyarJ1qi5Ww94NHuWmjvg9wkBHobAnN478eMQfKugNPU6hsKhf1CnjasybNMwk5iJ",
  "key24": "4DQvgPPt2VjVtF56QcusnRt8odEgXETCpiykX6tNh7YaCpzsVT7shnhsCUYwB2JC2Zmm6HFhfd3e3z5G19d1R6Wt",
  "key25": "29dTw6UX88SmvhDB2mk19x6PK9gTdGVrb3RqueZt91mdiWJ4eQTJRQmbtzEvcc7v34ZxfVmJcPG78N2pdUfKvsAY",
  "key26": "2PKdb4wuQ2PqmkSfKStQ5GkxbgJp5KD26rcVyyzcwskVwN2hF9RAgNnm3sAjqfFR9T1a1pbcuvmG9cLRXA1LMxmw",
  "key27": "2JFHtviM6SSyheEGZ1L2X3KNpb8J21ugTg31UJYmaGn8Aacxqc6FM8MXs8HQkr26X8ADHUjuLabPh9hX8e2m6BFo",
  "key28": "3XkqNQrYBNzVtV9WiTbSGTMLVkQu9BwWLs7cVWS1dBn6PPCKxiw6LMtBDpsMWDrg3UhHh75vJnHHPL1KxZqHgh7V",
  "key29": "59R3ntvgXQY7uAKD6J8y5VfvKTnx6m14yZTHUMvAofBqfPbj8sWbtCwHWAGnQiudtrQN7uZQGpdZGefkecmZ8G1Q",
  "key30": "3AdBA7TnTdJGkZaLD8MHShYKRC3JUqmEpjf7KtbRw1wEZyyHpbkHQVegaDL3ET4sXMWEzhtrE7aYMSW2rpnw2vPq",
  "key31": "3Fnq3dDhXRf7wvfQXsQTWS3udBJNLknWUKSFcfBwMg7S7hEtWnLHucgMLozD8tcoN1mvunHEqLVBUd3XnT6sapum",
  "key32": "5ZBvy65KhWQdBaJzboTXUgMDvJyZQsrsnPTuJkzvDExPLJk8otmWda5HqzcrLXXZT2YtUCGxJGCMBC1DXEYQQDJa",
  "key33": "2L3m4auKbbV8sJQrWPTjtDjr15h9xnxUL585Zxjujd5VwW31guCXqR2L1aBpos2vRt13HmoGt4rPbfZfdqkD6CNZ",
  "key34": "o8Ff1gkYAzj4EgDojNMGZ81pHGMz1hi47ob2hv6Cg1GNYqK4eozbSX1vXiJA9SYqs4gcC4NweVRnuA2iQ3hw5he",
  "key35": "3znWhyMDKvAo1dXXj5dHt57ZJeTiF78T5FYdJ136bvte5YivmdoExyir6hZn1YTjduCyaXDGtEvocW4VXv23rWiL",
  "key36": "RyNxm7a1aPCx536dk4AycxN61qzesHgKxsAkL8qPvx75Xf7VPdRDtCLCUezAkD5TGUuohEKiXL36f6hK7uDWVAq",
  "key37": "qykpLqi8SCvA8gesZHTBTWAYsbbDifCPvW2R5NY76YTAdR2MBaeGFKNDW8upja5JsH5P1sP6XjTAWn6A97USzuv",
  "key38": "6AZEdpnw6Y7o8Zox883eZyDC7xp1M8QD1pXqu2qs2rs2M4Tz8rr3rNmEXvtuBnge1B9z73ZmSCoRzREn1jBMG28",
  "key39": "3YXZfLVx1tBownq8uS4iAB9crNC855x1WAqgqkUACshZNqyhDDgiJjZo761Mu4pdmxMgzp7nqXHnLbj9xm84KM1S",
  "key40": "2BnqoRoTcBELRHThsKnwAJjXYG5Ri1ZP9VuzrmAfR65XEthvs6sGopWyYLPSyDLh97QwcXBPazvD1W2WZKsAH84o",
  "key41": "3J3TAHwD9SuQHkT4hAhHzLuR6yrDjZj7hqYRJCZzH9mn2vdyTfibNxKW5KEg3jQzSjwWMp7RauakLiNQkj8gZC9V",
  "key42": "5B4LB8Q49VKGiNWVRECb4dc9XipASi4qU8etS19heFcVvhB8iDzi9jVP7PhZNqFYYfT24U3LzJqAStFBXPog6DSs",
  "key43": "mza7q2223dP3APkvWjEDfm9uNvDP1HagPpin6uYnSPJzkdz3ihW9ErABKsSn2xRxQRnAp8ofp7BndMNpAKFsdQd",
  "key44": "Etq39q1V12wrTqh6L7tkjzf4yAToTJesp8xdF5MhTzEtiDwPdRpeoHvgiiHtwmokp9NHxUcmvUw5vWh3xU2aF1V",
  "key45": "4WdvxwpUFSBT3ntUCdsRHV8krGxJsQS1NHyb3U98zAeoBSonakvhKoQ8UwLUkLPzGcKUAQmwqkCWB5oCfcGfWHD5",
  "key46": "12v8MizJuuLMNi6kGKq1UU5aZ2pyKytGiZSmEXRZKhi5fz2FD6dU3kygXVzup8Z4vFHD8t7PxhKBQyfwCGcQiAa",
  "key47": "YCrDHVyzQ9xpr4xHsJoAoHJhWvXBzAD2UH5tbP8T9ELk4WEZ9La9WeVAqb56gQxmMmj4Nrz6XaAFksHF4kiRKNe",
  "key48": "29LXkXS5RyVCxZwFm9qe64e9io3k2FiFsKwWEABkLFiT99gqsYoG43eovCCZjY3VJDeGcNpYtmSqkAZqtPV1UmCy",
  "key49": "3gZbZU7MQvYBst1jgcfLXWrCC6bpgcqYhKzu7iFyAz1eRypYX3C43dckcZN1K6ztvq3kLx6ntrQs3jv57KF9E7Wx"
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
