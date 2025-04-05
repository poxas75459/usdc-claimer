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
    "26a2LCuAp2pBSSVj7LxAhBdpKpMd5LVXq9gKpQ7BjQNPwKehTksYopwoxw5zpcGj17WVH9Q6xH6iiF8zDPawe5N5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vEUHff9K4aCs91GMjaif8bmHmm7AKHTG26G6ZiUPBQSoT2RnP4pq73JvEaDjrS43EiywXfgoQArUfACooRXcTEh",
  "key1": "5tAsDSsKhirFzVp3gz1EUuN2KiTyL2WVWjTFv8GtrkpUEBzUuovbdgbifiz3uJvcHjjThj7Ey3sBoaEXi5yw2QSp",
  "key2": "NK3xqYT6jNRsBsrqQENwwyEpF3RmYLdgd3oVqPrxt4LSaG4672qmyQ2JGsADdXVxK1CDGoAWXwMfWwqCoo2U5Wr",
  "key3": "34EWvEi2PRwmYEQZo3ToRzwujFEA9qdoMTW9JKRrxwsFMHY9LEJexHLHMd4RfkKQekeW74SFakcvrMHzrf9oBaEL",
  "key4": "tdFvnZYb5tG99iPUbtiRPRNwcBiggJsbpQDfTE2q6qmzMY4bzfdnKGj6a3ZYmXs52LJzXfjwcibtjMyTto4iEmN",
  "key5": "2jTdaq28TTXwW1u4fuLk72MvRxNAauBhLcynjeGezoDXPDitzmgAhJ2TRUX84t6aDMjiuNhGbdBp7Z1mZ8zQ72iG",
  "key6": "5QUakUXTgGheJGJ8cgZCXShq5aUhym7RM7ixStneJgZs39uzzAcdbY1taau1CLMrLG8z9KJsYj3wKbaBsnLHXLnB",
  "key7": "4gtzPPvA7ivWCsFTYTjUTHiEZ58z8apt2xaJYmHrTEGc8CmvNzgk8F5B8rSLnLksT1oBGqssn4ggXvaD8PqWfWQA",
  "key8": "4zpWfTt4Bs49gBW7rvyM4gEfGADDP29nucbz1dc5SWhfustXNdC3vqP4se6ZCpqm5Srjcidm3QwXb8PSGyh4k7ny",
  "key9": "2m7fFTvfVAkEooed7bCf7rtsniT4bgugpancViArUKgVHZ2qa1ujp1JGoLhGYyEU7ou95DeT8MiNDzwBLUcmobc1",
  "key10": "5x4uFb1k3VahnTa8MRy4Yev6upnApknJXtzZBUPocoigq6r2Qs6VpTs13N1eQzF9T3eMJjgYNo5HxkdXVqi7jV6J",
  "key11": "XfVdkuxYKQiRjvcAa5YtPi6MyzkLdzJsw9BXyqN8kQVyXmDpe91atJLHxabd2d1visactE3kaEPExaiwSED388J",
  "key12": "4mxgam2hdF4NwUmFXt24HdyYctHJG1kVrwMm687Cy5okeB4GxixkjZDBXJ1rYPYxg6hx9Wv8shp66eLTBYV7DrSW",
  "key13": "FoR9pBNfPp6rBDR2nsubkucPQLCZiGf9rk2cfSTLJivrxxfgAty8jvkDeXHYbFsBcHPSrkedATYJ2CjtaunG5gv",
  "key14": "T9sE7ifGW6wAi83oRuwqhNFENYiVq7uW3sxPD67VZZRCxN8Vg8bPQosugPixaCR6UikDsj9pdaB9TzqzW4M2GRQ",
  "key15": "4ndsedVUfHtEdbs6HwrRutJKitaewgyHiaWarXi4Ce1ze6cXRM55yoX8Pvcw5cciCVppb5vwZrNr8rQkKqKFf2r7",
  "key16": "3CmXs3uNzXahboBwqzu5EZQVfSA4es6epvLkmUiNPXVMTKndBd9yNXGKYwWbbNgJLNnRUZSTfrRzNLBcXbpV3qNB",
  "key17": "226MTcs1wVaaCmE5WiwnSWDnrh7WaCmxF9vUkcyy6c4ygzD28zfjCZbwjBrxJxNSe3cTHQFSPtYwmCMgxWKnVyUG",
  "key18": "5ioAFBj4Jeyb4WFiafV4SPKkyRUAYZhRJfhRGt8yhTUEtVRwJZy1nfFR572usjfvXJGbMo484S5EtzDN7uWbowNe",
  "key19": "4vMfVDy8i6zamvJ3CQoZP5ya9gTxSzgHkPbsdfht5zHouqLX8La5DK4nm11KBwPgje7FbNfakScYaHo5mcPpWmx3",
  "key20": "4tK49DgoZsm4fNjK5stfoJGtWDsEEhASG3N9h2gv1wjfnHMq4kpLYpy6oNS7tqehb9tV2Az6gaNg5qt8RYKtRmYk",
  "key21": "3j33dAMj3oxC7FiBv8siACc1RJZ96UtLY9kRJsWR2FHGF2kEEhEjQRKsX4AoaLWDVvoPsSUsDXmMHzwr5LCuQnuZ",
  "key22": "2wDGuzy3n97fstQTMYnoMBF1NUSBkvzhrCDZ7spGXdsaVHuBbxt2sXPj198hRaH77FKS9JEFDUAjbgFgn23bBAFZ",
  "key23": "4qikC3NF7uY2fDEsykc5uq8ZxpzWYXhNts3p7QboE1bPkpCQQQMKypaedQDj2AvnBW279pKiw1PZdbdwhDQLxk35",
  "key24": "4tKrhdEP7otsvn8Rs9idcAYTh9d8biN4BzM3oNRz7Cq38EbJFRc3Pn1pSayjjEpRG1f8xfrqT3b7ky9jxCKPSxmm",
  "key25": "224kho1hyEfdPod2iZYwe4he8d9KjaL6f96i9hj2JPb5PWyfzVYARi6B9CQGB8jTAgB3ymm33opRKG7USgQPcQ3r",
  "key26": "4hrkGmp78M79VGpz6N6RJvEN6hWT5yw6D3HVY48LYtPKK4zUedV4PAHMgZSy4qGnP1bgUwVuxdQNgwFSLuMiEiHy",
  "key27": "4iTZbh8N5AF7QES36zyb4JW8SxieRu4DiQV87q37bR7LLjU6rYiqEr9WaP6jHf4A59v3WFUdYrbkEF6mebL5Qu7s",
  "key28": "3vDjfhsho58deJBzsuccLCGRnBSZRkB3YQnHBRUWS8DHZyrbkQ6Kohs6KC1PwyDrvJ3THWocXxn5wKcsRzoJc4ti",
  "key29": "5jJLXK2ybAgNgoze5cFWSax6KQbbXB1MBuaBXZEs7hQMGUBBpL8UBXPzQcZbtZAuV9EyDPb9jrYg8eu1kDcbS4SK",
  "key30": "4z3L5eQu2F4odSNgHsnhck2SsLTcEDpbZMYPqEz9xCXFB71dLidUCCVAeQPaYgabKXpTi3Xah3pur4zhxGqr1gHc"
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
