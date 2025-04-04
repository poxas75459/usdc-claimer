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
    "3gEfPg43DVEgyxXnpLRsLPeskzi66L6szymHv6WjLCw9M69Wub9ZLEkTpw3qWYgKYDH12tX4SVcEZjKNoURaTQWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "386xqhRQ2AKSrEyFkXQGAeVb8p7XsoidGPAViowFEFymVjPgTybJV17YNhwgmYP9LUrKu3uoRTuhGMtnDRVB7QFr",
  "key1": "3eu29yrhTXvQkyPTXbZB2BREbX2F7Y44HWDGanxk1Td586C3vKE4ckmf5mhezBDs51WGavEj9YE81KnmTcoieF86",
  "key2": "gRC621B4XhpeudrMzeDejHYPtrSsWfvGa1iKKR3duk1jsGPuGDK3UVz2QMy9w2atr5Nw9iUsjf1hpprLPcm5dyr",
  "key3": "2trMmoRJEDQ1fvqW8BBQbDFDAVzPWerdedGgUBVgyqKp2oGy6uKCm6JdELr2m7HocU8paxS8tiHQFgdHFW2HKQw9",
  "key4": "3v4E8V66648iZ1YaYY5hZ5oZ3RXiBbyJ7oVeSW8SdvNXdaEAhYBWW7KrcvquD2nzMJ4hqaonUhtvZ5i4Ua3aWrX4",
  "key5": "4NyHhHLRPtF7ZUWiajQ5xy43S7ucaD2rxYNpCKzkW5FLzPQcHi81zuPPTNnRsPDkVahLeekbGT6PRDB7FPLFrAWD",
  "key6": "K8fVzsNCk9vqj7Ec3Dt3SxLzqq8EXqyEru9xpNg4eV3CxcU5cXgFV5iNHeJwDM2beB4yNsKfE59iELHSBBXfV1h",
  "key7": "56XXCD6w6NJajCxCSDq5piXZBTCvW5dnvD7bQvME5xAct42tpEQni6JQKrWUqb8RBrigWeWn8u1zm3dwrhZxWwEo",
  "key8": "51KrmzsLie8LjqimJJwfQhctCaeRM7iZqs69GyKgmULRpMMNhVbd2wfX7pPDgwXhPLo3EZoFDfaGVBHnDAWYbK6m",
  "key9": "5SagK8o8zuSezRJjdMsixTs341MgdvMvjU8VV4F6VSeNrCrE2fVB23WycEL4yAnhgPDYneLoh69DPwZaY6gGj3yD",
  "key10": "2wxDbe8WjGJ1m7zVi5TZn3GV8mYoTxptDAfsUaa7S9HLQLExWwGnadXUWNCw7SfXFQUTzB4snsnbqza7WJ87ZkM2",
  "key11": "4ZsohcwSXJ3gfNE7ojsiUuNvmi8X8ZNJWYVNnXsW26anLT3s7RkJRA2KURi3wPK7rHfurZUEC6Joqv17GntHUL6f",
  "key12": "kA1AzesjfDE8VoY4XeoLJwTRFLEhhqqAZmKJsus3gbpbF4fLaGjrizugsdNViviVjNXf2zyiWBKWTGHHHApDJKh",
  "key13": "4xBShVWQm8PPXwayhoZfNXJgHPFvAKthc5vVjtvftEgwUP9HfRaej4QkmL4n1yEyLfU8Ca6f4cHMyh3KWT2KLqUr",
  "key14": "4QiVS77TfzdtZg7F4bqfyVx8VGqp1nPiSGvZQ34Te7jFXTHo2akRDGKRkqzcoqwpBz9gRuuMEoJyhiTnTaoq2rjg",
  "key15": "3Adc7RJuzhYhfV5pDbLrMjBUd7XAKZj7BMjosQ1L9kNm9yuPbB3jLjbKuXSYzJ6m6YgRKVFuF6dDDhQWhq7s7W3J",
  "key16": "4RQrFjNZKZmM7ow9GkfQEM8pvSWsZCzj6T4GKSopS37zWBmTDTTQ7QaZZ6wwwLqKJ1Lv1eCKoePpVATNDYpHTMX5",
  "key17": "Z9HXg2PU7JUmNH4v4xXBUrUa28XfzaGLeK4YnZfU7VcJWSHELJphnYAAbZ9j5nMpHnPWQ5Z3vnhfkTGZUZ9dWav",
  "key18": "U1Hh9ttgR2X3J8bfDxqiv9tQvPHe4AYjnGy7bTZ88Jp8kEMpWrZiBPFG66znRg4GR1my69K9dPKxv8XTdw1CS5W",
  "key19": "5b5FkccEikQH9qRMG3b6Vs6SCzaUbXnpAjgqcuvFL1iHd9HdEV7nXErMoKNWqLKsTf21yFJbAHqW6YV1v94UjPki",
  "key20": "4b3iftMEySfTcfLFtPArFpq8uewVyX1BGtVfC3pVXDuGPSbmCkzDcfX6XxwXW3aQuhKmCDiibgv5nF8xDrh6qvX4",
  "key21": "3TLhjFbW1m3wVNGjg16LquRUiFkGY6gfLczcRBkni35SFWbqG4V4dtdf1wvTnhJU9qniEmy5MeGrvrjqwoibJMFs",
  "key22": "4KQvyiFBZmemqeWPfdjvrQHu25FNkAnsnbFBcuB1rdWnvc9k6knkht3THLwHZWTGXybWCxqBdH8mWj4zQdkBKdMQ",
  "key23": "4EjdxPJKm8nWodMjvpVve565wdqy3BHDUf8wGXbsyhcehcRAMTuUwqLHGydKE8o2zffApxeMC5zt6m5SG6JpgmMU",
  "key24": "3SWNjYb9R76bMcA3MqLUtL6BPrqb6EfMmjCuwdcVRcm2foGhrh9b8XQ8SZEV5vNb9UBu76E7qHhLjk3JhGigyrEV",
  "key25": "4pRk7tw3tz2ojXkNTnK4tqrj3puJTALnKc9LKDkobbDY3oXWx2u5McFRx8NeCtW15kQVTj128ySrpjKtQJyVQc3q",
  "key26": "2fpgdbSLkXR4WmggexKn88DWfoVsDMB7bLQjaQeY7hYB2i4QBf2M5hZ4PHymtH7bRHTYUWWrumXCGFkL4fTaFE6c",
  "key27": "qaABgLP4ViTMoLGgWeNTFahf2sBSxtw7sany2mAugzVzwFaSAVSj8km6dsESdv1QbgNnrggKtLcN7WhACWgN3bC",
  "key28": "43fLcLkDMas3aRZE73uZH6tDioBTpYLQHHstSqo8LXpF2RPU73PXCYY3rLJKBeq373JgaPoR2qKVJabinYqGRn3u",
  "key29": "2krsufYVQ381gH4Pyc5YmBg2atmRSZ9jxXftLgNGvtrjkwx2LWT4yizrmGKxpEacb7Z3A3MH7F2mH84iXYW44KXK",
  "key30": "5GdjanyxEjEF1GinzECUdxHsUapNGmFPQ3FdcvUh7iAjwCQfXmAjepoSCWo55AQPsht1nAQrbwe6ay59Sx7bzajB",
  "key31": "5NPgV5NNBa7BcJ9RXt5on1zbUGpjDK93Z7XKe5hXgWyaQZUYj5HX6uaPxuDhXMbGShyDviSKRcM3Wo47knPhbcEP",
  "key32": "5DKt3AHjbaqpPY1cJgK9g3KMpeAAwWMTyUHC41uDjH1nDKddSJZ4ETx6zZfzPDjGMbmHG674FkdDrAH25BEzRh4n",
  "key33": "3fPhDPN6eUKepjd4AHZZJcFS7bp2KuPmpiUCrafMPvvgc87rUakQfotyqQRWM8dv2Q2A7jmMVsPMhGbn17shx7kY"
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
