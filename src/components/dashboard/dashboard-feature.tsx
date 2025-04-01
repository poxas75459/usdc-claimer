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
    "22SjA6wesR49vT7H2LUsRZdqWuoSq2NTXyauSW5eUKZdFjcFpD7XXc5kAtL7XP726GpQ5MGykksC6gXXizAysT8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQjgcgaEcPYcm64B3f7VURkhzhCuVmMDchZntjoP9dB7Ch4NGyNGZirytoNaW73Sr3iNhHwzC1W2yzNHrxrhhYC",
  "key1": "5H7sc6r3cxddDt54NZ2F5obnjxd5MjjZZV2wMN1W3FbvjDS9mMNK1qajn1x5zF8fivBexRja613iyePYU4QnQu2J",
  "key2": "4gZxCP812XgbHx3yd5FijCfGH13YeG7oRzwazesJbw5o9oJqSDN7nX7wtWYZ3ZCXK5KjV7PFPvT494fd9JamaSj",
  "key3": "25LAL55EEfRCHMY4C9e7rJQaV4359hWF5PftN1pHn2pp4WBu6SFzSo3frVsBtBr2gJGoqeDX2NGW2B9ebgcbqW6j",
  "key4": "3qM65rJRVncU5SR2FcZfmHkNpVUGxq9B6M6xw82QseurcXKZ4gh3j8JE9aBjYs35qbd1v8iiAdyXSssA8PoukJEC",
  "key5": "22F4cnYJ6AvPvkseRHHm2e8yNGaQd9r9n11UnMwztkSiwz7UhLqfSsWPKEK6PxgnPXSzeBEWRL3vZF4XbXSMH9jh",
  "key6": "4AjX67CdFwgZ7kRTWNaY7fVJhdiCaNn5yXeTeBpMKZFji4mU6igGp3Wa1QsW7sTQr3GdgxeWpvpYKpfPXrp6sXsm",
  "key7": "32yGcNcVEqxUpxLegy1BJCZM7q39tBSgPjLiBnHa8E98e5CS5t2YcgxrqdADB1Nakb7W9YW1Pc6wJknE9xkN6hCo",
  "key8": "59FyS11UuPfCZEDWMXCVqo5dDpqaHsoLMDwYhSKwPT5Xft5n8phkb9mXKgEbHq5URqsXowHJrWkmfy3LzUsx8qxY",
  "key9": "2xNzLDUGuXL6PicHBq7x2HP4ppBtSsSw6Rbix6YjjzEHgxt8aYaZE4VwGVv3UKYrwQf8VHtHE4v585NXhZaV2Au5",
  "key10": "4Jb8GdwyswCzDNQjSLwDwQxyTWRFHWS19W2bgf2pHXjTsM4Bs83RWqby4ruhPASW6ffE7YxQsGnw82kwteYe75Ct",
  "key11": "swfUswQ9aqBQeo8Aa9j9HQYjnZrcvMGFcKgmeu4kJKXzVAeLHcrmyCFuUeS3MY7jkMf9Uarw7knTUEPRvPw6kUF",
  "key12": "5mnUBFDeednrRDAAQ33r8gV5F3ikj6nLyAqTg78eEXRi1YGqcyVoyFfB77Yoe9CY24dyEcVv7c2bDy8aHN6pJjHD",
  "key13": "5HRarD3536p2zYt2c5p8sPLGhgWbsJtNMRkP2wMZRMSUmyAugSbmFdXKaL41BFFF9EVNGiGKyu5x7fGKryhwuisn",
  "key14": "34JQkhp6rJiipjHBMDnXjQoKLkZRJoRvCQe7QyCWRzB6trCG7qzkjzXCdBzhirMwwCGpENDqP3Ehnum7tpxs5zy9",
  "key15": "4C7ff3BcfzEUWATYs5MpXsELuhCic6RoeVbe41Epx4ge57DWVJ1H9rr2psyxwVTzzALrQ5cK1na3YxSFWz6Xt8mr",
  "key16": "43Xbg7t9oMZbh8chWpycfKsQR7EYj43BAEuzQ68BWRaetd227DVngouKocZX74gLGfJNt5Qe82V55MbPvrxWkru2",
  "key17": "Ctt2CJyDf9gyLKb8ysDMT5pB23vpJjFpbuLZ4NuCSfVYC9KYYUsmpVRnW61zssmAMmwNPZ2LScRrz6JXukoZSYc",
  "key18": "2QfeCFXSNGBdCwiPADMr6enRPFcNijXsw3doNZDUsMK13hP5sfp6jkwPkwQJDK9B6TFU7jCAADHnSGNUmQGYaqq2",
  "key19": "5QdDYy6HhtdxBh6252eviRfY57PdcXhnnuwjYwZVMqofcyRooWVVUcMEmn94NTnaEgF881dJQBq2Eb8wsjVe5S1m",
  "key20": "KyZmwBHA8YzCVHtnsKNvvA3BSGijUP8PQqMyEa9tni8eDyy39VdsUw9SSTpF7caW7CX6Ar1mgikjWaKTTVV1qK5",
  "key21": "VD5Ny67dB99UrxpFiFHzvpQXuUwBLup6tzvVbhF4YHiYQGuwYHq4E5vvxxR4JaBWfY1C5ocfzFKDQ8Zf1qm4pBZ",
  "key22": "2nTHcDQRCi47T88UbsvXPHT4Eedu8m5js51tqpuo8hCtF1CACi9wJNXusMLz6LjsTt7WcxVUPhcpKvAckrQYFihb",
  "key23": "5ARJ5KoYZrzYVK2qGThy2d1mS8VdzTDqJ147sdM2XMPQXbAc5o1RGBrde7bq8NXoQvwxAfKQmZpqt8TqvD6P1yeB",
  "key24": "2bFa3aia6zwu7bb1ffBmtTA8woXBGf1QRHUx9z6Fo6xSCMm2oHryx9A5V4QmKcG671iSahxgWAsSAoJQA5rrpm9y",
  "key25": "41kMWjHxFGEvtqCiRJAK6xCqah34bABt9eYtPTLbRXQB86WzvqPS1qnUkqFio3m6wJxUdKPkT14BzoijjgJhbgx4"
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
