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
    "4diiy7iuSA7vnUSMvedq2EDJGLijVfvaHpdjUezHZE7Lv2c2UA6u2zAPZuKsXwwBJm6qKw9p7P3WuvcVpWVeQAjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66N55nwaJhCPWKE4gTsDtejrWsrrGbqKHAAxGtzrjJdkwCKuGzcutViTNciENqbSvfQpNV9PxMSj5MeboMbhyhCX",
  "key1": "5MfPemgy8N45gKSwbUSGU7M1GJcetWG2SE29k88WvMWMXztBNodnApqSyejKAeqtfx9pXH4b75R8YCdL9uqB2ZQ3",
  "key2": "5hH5GjJdhxXPb2uyohqZVD32WeTXV3BZcCKqRmfmgo7CskdEeEGDBenZcxcx2w5UdSmbUySsmAHzrhrM7xyzuSLm",
  "key3": "aTRB7Q7pYt2rL8KwMxhVSmnNyRmuYfsbp9612nvKy5iUZFv8rG3mKJvwquagpGeYn8TQFZ4u1vkfvH7W8oMaVZj",
  "key4": "2egorA8e9XkD4ohEsobkZRxrwGDmdLqtd7Wu3ZWEKkjxnwgaMDuChf5kQYzDQaMwTbqEaWHaHkm3cVKeUMxpLVkH",
  "key5": "23EKht1EA9ujaeoxmeQ5AzAtR8aNEa39HxnKUpuAq7F2XmEWMdZyJSjmNrE4Ne4mevfevJ3cEMrX7WD2JNydS1sT",
  "key6": "62v3rRbKHKbFtndk93KWLpVRgWzRQPWxJiZqY2GY6pDwFxZpRk4Dz48tYCbCF81FU6PzTXYPxu8Zu8bsTDJswGge",
  "key7": "55HFvFQ24TyK9AjVNZFoEnmYn9ftekARMsYHe5Pe1ZDgfMqGubBcf1sU9ex3tcoR9S8o7gz4Tw2kSArPFB4rB5nb",
  "key8": "4mPw1QkYM8NBvCTyK25mNr1vo25rstukc9iRs7aovvFJo4XWnkAeggm4L3PkrMW6zD5i9ddanbKfF2Qogdi9J9Xs",
  "key9": "5V8zdMAYjw8ig1EhSaQj3MW59URG42KdS5ivZkDKfeFXXxEJbTFrYZFcYcFXQViGnkWN4e34KZr8A31hQne3BqG",
  "key10": "2JG6XofYHU4325xnt9y7PqLxodUSbdQfrAH8Q4kWn53PXeX9oRCpsgYBPpJaTQ6YPTqzKLzo6Srsor7G9N4ye3bx",
  "key11": "4MzwH6X1ki1VKwFKqdGVK71egpgNHYCai3EH5JB7QA1hJ45M9veLrSVqfKTwz88hVf33ERLeRAfWiX8gUqCrGUv6",
  "key12": "3dhx9fv2zxG6SD94QRdQmnzKCQZabed6yJp7XHZsh1LcKFQ3av1tqFj1nXUCWmiv2nqghsvoCzhSDF9AeELXz85c",
  "key13": "5ABAFmeH6Qe7wuDMyrkH8dakTaAJAQMFPEuKAqGikpN5sXhAWCyam5m7SY1SnGbervADrwju68nnWdbwsqpKMszM",
  "key14": "2bPdz2YzcQFvBeBDw8mQyRVN7cwpBrRCM9TLgY8sx5qW1qJxRsW79Wa1jfUXFmHpQfdGkM92mHRMW7cBiiFcFuEG",
  "key15": "2eD6kobrY4BK5H85ATCRQoUap3SamUkkVr7fLvobYxNL2jg9FCDYCAtvBwQepe1ZxououL1vHNxwbGf83ZrydUT6",
  "key16": "2seQF9MvT7qR33Vca5PDGj3jR3UugMwn5EXx3pLHPCqP8pcLHoY7zGFakigYXYnLjHkBYaGqpGXU9hfYHDthYXUC",
  "key17": "5uxCPMoyZYR1u33SoryXoczLj7W9VBfrxc9H21hzZ5AroakDKyYnuRSzEvYnFZYGB2ekUbfqc4y2Pi3HDnnn6nU3",
  "key18": "43nz97XAC7KHCtUVvMqFgvGiTNREEhEVnUi576szhps2NNVRGRu8ZUrEsxS1eyiUKmzkhF8XED1QpudkVSrGUvsc",
  "key19": "3hUM3MbS5Dzom3dLqzeU3DgKtjAv18UHiDr9yZg6CEgzs7UL5Rynub7YB11A79ZBhBRGeDUhXDDxG5DqL2i1w5bC",
  "key20": "5qC4KogsjXdz8qoRp4NqTstBrxmVV8ro5ppVxMi6A8qwG9cMU7JibeLJhhfHeVjVS9DmE836Ctk4dyX21f5Yi8Qt",
  "key21": "3obL8dLbxkJ6h19AE8vzCEofurmJnm1atyHqNzdtLDDWJNY6VbT1KFeNmV6noE6Hd95r8EowVw16eWqg3GtNQZxM",
  "key22": "2f7P8mpE5vocVe62c74AwKMhQJ7tRSrCt9kYwzaa5SCSGhqkZfJYGJ7ASuia8kGzpk5V8oX4hNhjPftYG58ujtp4",
  "key23": "2S4RFCo9Ebu1SyYidgxhiNCMZQpsMZF6brLEBvKVss5cSnVEkUKXCM6QhSVWKaWhSZM6Td9aA3NX1XKAYMcnjBoM",
  "key24": "4ans7givLVMsdh7xwaaGH9fKcZNbCKoA4JM5AZGMniA9C9xTP42FpCdsn8KFKyv3R9qkJmqLvP4g9ypdyLhawGGs",
  "key25": "3jqGo2j5KNWpvkbKfc1mNKVAZVjX8YmmZxoQp9CCgSpo3RXeLuh8wEyVsjwzz6bEKCrvfNkG4gyXQzaWDo8chxSG",
  "key26": "2hR3JaCg5mtc3VbXGF37PFPvhfadxwvUhXz6ZzWjBuDsV8mAx2Xco3nHmTrz8WqR1cCBoxew5HbJA6zGcDyNtfdW",
  "key27": "2F2mziHku18MNHpwPcebnY1AfQLre7vt1pxhnjTCrm9oZakeSqB6127x8Fo13ioHdVwB4iohXS8n4F4GYr6r5y18",
  "key28": "4esJkhNmQrEaQZzVEmCmtmTgijETwaj9UUA1MSvka61KbEkKTPmSqBYHbtrN7koAEFmtchShV7oXtNuRPBkbHWPa",
  "key29": "5faspCycyeZxVe6aRLSiNAXBdVKjbh5CzLEyiFo5BdcYEyc5ps5yK3opeFdU2HdsuPrnuMzmqiS4SWC9iBLxtFHN",
  "key30": "3ABfGFcBHzcHxZNWnidnSco3sRkPwumBKsvo2ZybiCZD42Gdiz8zdssSb9DuAzukywdCrASdtdGjfg8PtNyCaixu",
  "key31": "4Krh2THuPBm3skBRLCykGyxpBuBfdXuyvMThYaDPmCada2xR5cwopio4MEvpDmgtez6afDrmuRhN4ZYukgWXAKcD",
  "key32": "K2jBW2AFoYqkkSKES33FDQ8CfAVixcPnDRNqqrbpAbBYuFxB4uXDF6thWvJigvX692cMpLQSPJEYmBEMrjKbNWL",
  "key33": "4aUPQhExjAvB1LFXoTRwTB7VxmpdxqqgfuaPDc5MfurisrGkPbzyacRMnyuNnrTYuC8Fh9K5zUpjn91UdTeYDR46"
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
