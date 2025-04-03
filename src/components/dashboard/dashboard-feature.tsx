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
    "2XFhUyode6qvke8h8oCxPqQWPWhgyKDwbR4v3pN9CKzNWvsUpmYagXHyNmZgLGuuprs1ojneQBoY9P64QoCiYRUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "majGCn4avivpS9LjzFmWG6u3UQK3zPnCC7zppr3E1SpwDckgoeVwcLSAL3xSn54RF9KS4ZazoXw3qEDCP3WU7ty",
  "key1": "479h9MTjbVemRnxmyv5JJe8haf4HGUoJP1ndwPGP9G5JVV1Cnn6enVUEgEeu9Aew4tDGoiih3VQVSEyoKzRGqTdk",
  "key2": "4J6yqpHKaDNBWETF1cgrrXm2MmAjMyyAuBZmiugvnJ5AUNSX4QViWioFVzbgTCmh45B6XWr9mASPw4DuaWBHKXhH",
  "key3": "3wDcsFeTYpRzTH2ZcamHCxdrZqfd9qY2a6tspg7brNCXxRWyayZBFQ5nKLCa1mw6zG9jxpoU5dRNSJ3HkXNKnf2M",
  "key4": "3kLtHYJcJSf2Y7yy49Fd4yQYfbJwmanQARdhLJ8DKzvR581Wixv5yPFoB3n5pURKa6mWbCgLNanJJWMUzPA1Vsdv",
  "key5": "5qVjEsTDZY4DWvaCZRthZxxRSP1Jkk1SDyD6zuJHVnsckJzkReEgFAJFQvWTjJLkmW8CXMGiCcGWgaTxM1W2Cear",
  "key6": "3eVjjEtj1oYRj299k2ixt4AX5geGMHGrDgYURMMAHMqC78DsVEfFsv96Ajv2is3c9sxt7RsgrespJwc2tYBEZrD8",
  "key7": "56t8bNZ3WDbv1YTeG4qxohBB7ySaRDDTDU6hue17iJ2ABAie23hJvKYFHS1Zh7fPFBBP23mvuvuVZ38CXoUKTgVJ",
  "key8": "5rjuyMAVChLQzWR5zpC4gAoh1vFXoEwaA18WVZJBBHEJtYyVQof8Di7xToC5ciq7X5MdtuE7nY8EySftYJMV8roE",
  "key9": "4qydT3oweKyVVZbeNytT7tBf7WJTdnf5tm4uHXZqssaxoXdH8rET8gbt8aiPmKnFv9cZwGTYfZcBsVDrBfdUuVqU",
  "key10": "4EXveKKUiAGoPg4QkFugYk6EDrrUq6PuUpqjE1bV7NCeuvmeMd36mp6uPh1q86TMNEybyLbvoYYgCT22EY6ftukL",
  "key11": "tBXNKNDBigt51bDyqgMSVhJuHrgdnb3onQdu6wx7j7oykLj2uSZ5DZfushYmJeRnKLpopZgi1Btz9hDG8GS2fEo",
  "key12": "3qDnHoC4XoTxxRWBRSfsygBYk38ag8m6xYmEhGjeeTUH6f6NaFsA3eUQneahBppQmHzkufQk8W63itsm6Z7Vf1Ne",
  "key13": "VzuZ7cKFu3QMMUqc8Aynm4uJWFL4Kz9q1sWMEG3rUqBteddKYX3jDkXi6spzmikMrqrKmBSutRhzYr64kXsfBcM",
  "key14": "2YRygN5s9irP1aCqMb7is6GoEsrNNEapQs5oCZq56xCpTLAvtonTCu9zM3t9LZmqeuWm6ZJrHvKaWzWRXbms98fo",
  "key15": "4nT9WtRp3A8dR2sdevCa53W4Mnv5FejG3CY3pGni4Fxx6NBQ9ZBAASqsXu11m9zSXFpZLCUkHpWnsu5XxVr6rRcn",
  "key16": "5yNxA6imzqZCtSPXWUgZKWAsqdEb6uZfUXD3VBhTSYS5oSwFepUaHZR7Zwni7NPGW6MDUtnixiYZ6H9HeB7fgpQm",
  "key17": "4JkDJ6GXFAwvhdzhhezkeArn5ihM6YFDnezT6u7pv4kwDCrQuxUFzx8i5Chi8wKQUpVqp3y1NxHWJ4zXnsXqEar6",
  "key18": "2V8sRauBjWiPqVSDXBuzgNwW32GC6dntNmgs3mcDnDaqTE2XenNRWkLm1J38Yc8TUcZVmnzW2Roq46tNiToYxhi3",
  "key19": "3UenAYqaySwYQGTNbMd4o8nEhBfA82z8qfZZe8X2CzUhHCSECj4nos5kKxtBvRFWgKrak3emyTL1QUGoCg3oR1uc",
  "key20": "4JBmJoWggm2k36nXwQgRfbu5isEw41ZL36R3i6rrcFyqpPtMdNi1JDN4hfGvjH8XfV76dZ3twJYCU1eUzRAcou1B",
  "key21": "5b5pbiFdChfFvDonxXTiSyq8fe57r4KqEnHNnS6uvnuWn2Yqe3mX6acvBB5UgfeoqNSdLTrENjuEb44b7KzKuy8R",
  "key22": "jAunLtxUVwxNZsCBeegaQCqra1GoM3EMUgLk4iTeWw3swpPQqDdBjnAH474y1w3NxYwBxc6w4La23792y8fp9Dc",
  "key23": "3AcKH9DMFiQVkp2ViJcJyTk4VGeVTVLUaBrfLJSGK6iTNbaYAGs3RndWZQ3JWjUxRDjQi8YMvUQ3j4D5hfKAjMd6",
  "key24": "58eANvipC7WKogJNg4TqZ6aGVCEouPUqhmTKMKoK6MkyGJqN2KHt9ZTXGj7SUXcM7S6f8GZ2vrrLdCvypJM7dTy7",
  "key25": "3Fw8f9aqnEQaW1NLKo3qzj9KsJ6ojskVTmkhfiJ1KjAZS6fCf73aa3q3pDft948EvzHByLEcMMqavLwKSbqAzNhm",
  "key26": "3aWatvrokSWziJiBQWnMbRMfP8ceKSvuEMGWFE8BG8ek2u9ZSqNPAMzTCwbHfxXJ79bzurKKZ4xivqKrbvyL6pDP",
  "key27": "2YCcd4h79LzzszVF9ErHX1ZRRXtP2TKU3meq1aT2GRh9XHFbFZHvzpd13Veh8rdNLAneTXdYZ2Vx33QGuisHSpce",
  "key28": "4pBbCK7kATjDPNFHpGbuPJcMK2Asco24QZ3k9fRsT28jbvogggqmHTDRAYrj6TtPqbNDqzGoMSrshJ4Dg3eVmkFG",
  "key29": "33RVR1TtT8iiwtwuc7BhQW5PkvYghBVkRz4L1fvXiQ9pNautUz2xVdRytjdRTNemFTiNqcgQEc4bv9b5eaS1UJ8U",
  "key30": "34P84LEYASNR9y5yULXdJ8VCkGWLcoPzHAJAFibxG3qrpNcXZA98oBNKhPmfrMp9o4gzZpyntNjRMtiyQghr1wVY",
  "key31": "3ANkNvR4PZZqmMPAuRJhecbrE3zZZXwHfhhzW1F8Z9GWeZoHNyXZUxSpdSZiBGLXquxviVQAkZU1xquAxmmEVm8G",
  "key32": "2Yfoqs6chN7txno9cTfViMz22YRbYycujTmcdBCNVuxBS2cHBh2eVWAw7Aqf6W6cDxPzD7DQr8NaDoiA7qr4EKtM",
  "key33": "4ieHXiPum1qkbtYRnRWx81YjRcLhvMzhTRyhi6jxqwwkBwgsrgSCBNoWoPpmpZrxkUKCNwbRq99R3p5TAue8KoYs"
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
