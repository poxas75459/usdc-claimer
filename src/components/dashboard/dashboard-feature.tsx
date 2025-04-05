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
    "3bbJJEugMGVmGS3nDUd81C5PX2Q8JFhVQqZ6yAEerTciL3sJaq5XKA7eVtqnPKC92iJvFJXuNEYAEbA5riYXEfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BYKQ4yH68Rp1v9FicX1SK3uK9KfBZXmTKJALNK3mmkigePSKoykUKtieELQb6ie1zXpfmYJCPdB2eKUwer5F9Uq",
  "key1": "5mU9smTDiVe2neiGh1qHy4g1zRkwJUBMWCP933ACSxtGvYgj1KonsVEjhwFWyaMfAj3r9TSUFt96F5QoPjTP6P89",
  "key2": "3ZXA23Aey4dZRLkDHnbr6bnDExNqmaZgqxY8ivg1UhcpV11sEkBCqUcusdw88sT9kzrU6qfVaQaPfpSgzBUPfKaG",
  "key3": "4gHBxV6gZQvYuLT1Mv8ChsFiLGrdJuL5ygZjWFZB5xUnmuT1Z1U79HyaBJyy2gHu2LW7YeogLMPUd5S2XffQEjUA",
  "key4": "4DSfzMMaZ9yAEDBbNubxsJKfyqfXzA71sgj8vd8SE5LKsL25ZyC4zK8G29G2VheoS6eKh89dAUEqs11ydQrsKv2f",
  "key5": "3wXedx8TUj1oShZVLaeHpGrTCvDzz9VyhmKg83v6fcF9r6JChCuRLwjY3AmRhnXfhKhbYpyhZyfFmQBveo4UmY4y",
  "key6": "QtJYr1oQe1QG3QbRKUfY2ZGCHWfwSYLNLgsEA6y5Bochbb3Tqo6Yen2P378yW5ZMpwtjipiiWSYNJxgrbgRu3NY",
  "key7": "2gciQw5GEFT7avTmdHQX1wvwitP97TiBuAA4gQ2WV539oLLW8CYD7RiKD5h7YCX6wDe3VFq9cmHwHvgxy1JNHHZ4",
  "key8": "23ZuakZJgtZNrgmmqtSwz3PL3gsmA3XAKAfm6WCPzfpfAboy7oxQiKzFU1KJXcALnBZa3FX4kaPfgijsWpQBvJom",
  "key9": "vBHK21V7Xf3vWPapYm8XC1MZPvMVa8NPpF8qvnqcAoqE1atea6wee7J1yprhsi2jUSMfgVfctr8ne7RiiZyZYYM",
  "key10": "UULC1Qi9QaDqP9hZi4M2VQEUaJaBdqKGhN3A7XrB6u5uqXrgiRdRLQpD7Y6xdexTzFWhhcwT1zcdzxD7LKJm61u",
  "key11": "2FatrJvm6qk6Ci36j4PyNJTw3jVVMx6uanXaX1JdnEerhoWHpmJeSYTbzApTfe9eLvxXSpqtCLeTCyfg9uJ6SSTw",
  "key12": "2w4yCqPkrTTZtW6mRXd1p6n2rFureP3TGbZk5wjdjtphpKjg4keLkj378JpgV5oZz7oEcNEPrjPtbmAWqsy451VG",
  "key13": "2cmJHLMwHpyie2pnFVi5EP8S6DNYiDnaLBUcXjw5XAQ3z1pb5Z69sfZKDzi3tNaCeucw8oqDfo1UikJJNrw2VMzY",
  "key14": "4Kjmez65Kv9p7sMvHdD1DJk4c8YTdsE8g4ebXSGsSPJiQKLepcj6qi86zpDwGJcwcGpwHhvi6UFEZDjL7x9DNPeM",
  "key15": "24nzuCfHJPPquThrpnwD9GMKSbVkiiMQG9c1qTnjrzh5y9Ys1zBJKekRyZ8Z15magrnNWZxddEccLBUow7gbqUi3",
  "key16": "2XADRiQ6csQaHQFHhvcFHFmro8vKHxdhYdrhR59ksTx6hnJzn1k1fTs5Fq7CZf9w9rt4wcjPotDGbmjkx84qXyKr",
  "key17": "3m934NyaLc6GS4AmL2Swi64rotuCMAnSBHi6yoRegh5rvLRtE5riNM3Exixhe6Hh1GRLt8jNxKJFPSBnn9wMfYni",
  "key18": "4BuiW95EQnuRHX5eGBiEXjyRo9M3QnKNJfSEPhg7WwKoDujeEwSxwHDTdeLBcqSd4yoSy2ceKbmRPC1WCcFmnYy9",
  "key19": "vofx64wC2FcvkVXebvNWnV16G7Da4W3F3E99Mu46vEpHZtxtV2twWa8hqDyFkxJscW7jKwXQiVYV3MEUixrAkCM",
  "key20": "4GpsjeDQDkszMrfPHRVU7owZZjEMtzrEUNDEKPihe1K2mP1uJ3ho5nzmoprWhVK6oE1X7gMSv7TdWbdTNLWFraXd",
  "key21": "26iUwwhEcC8FexvPrLmiqAftmiptFixssxBvSmvCWzmmwD9pnL778BHKoRNAvbWu4kzQE34Kf6m5KSPh1yupACPq",
  "key22": "2qyZPaTiFSzwDu99THFcgADEGV9wK7UWjgBEXhRWfGesMoGYBeRo4XsqUbf9fpmo6EeA4jp2Ri2rQa8ucckyVVjU",
  "key23": "26rPWKGQJY1Fa9P5cV65p1BGuAC5Dgy2VryMyo98tiJqdRSZWtCYpLVdDha39Wm214eksB2sw4DP7YCxAKfNmcvr",
  "key24": "5FTyCvwa9d71etf14PYsuf6GeryguFLEUcuST4PjFCmRKQ3GvAwV1yCDbLYhVxhVLxsV3pL412ftDgKrUTb8QWyM",
  "key25": "3REZ63VdioGJUWBE2JpsxyUKmwFr9sYtXEhqu7QgtLH4Bug1qXWi35iwR1MMmuTHvfpPzaLKbA6bQLZLS553vc3T",
  "key26": "5tXjcg2mwDq3M69Aj93Y6mB5qQbvUj36zfK239HfKJqGC6KyRXQG4ZbgaxbDq2MffCU97wHe4rjJxZDwtR2mX3XU",
  "key27": "4hZ7eCGWqkpCuvpYcA9bmBtuxqeT3Et6UDvSWiRz91Kvzyqz92ztk5uRRXxSajxCWav8521haxh9chkh3wpKmxDG",
  "key28": "4GRxnK7v5WsAmFgqHNmn7HxYU8E1haomw3AB3dJNYLpFNbcQRQCvwFkKGqMF15T8sF6thijDiHE5xq7CKTDKyTuq",
  "key29": "3uutqwqhrU9nJsfVogpmghYxpPqwnKK9Epwy8eN54yKoBLk1pZLNQVeC8ZKG4vnFk7y3hEnXtxfCZxvjm7GyRXSo",
  "key30": "3vJ4nzsbYhWWTHs9N97vuqpt1Gn2dmSzMrXNUnszc2jkrbSK47pcfvvFakpp5cWFPsrm8yTH2cRuHYsMu5LjqVJa",
  "key31": "2ka5SwFL8Q1mLSri9afPNXudCbw44m9hpe4MzPGd6Eny2nYDC16z5C6iHrZuXJQXiuSwAmRL68UCBzPgpZxMkN3V",
  "key32": "ny8k52dRpCdS1pqDt4oG3EmwqbyLA1drKY7LDZQfjRJoPffSUZojmAWG47hiTzqaD47DCUWchVmsWtKAENn4f5e",
  "key33": "3N75yjBfP7L3t32RUeQmq3UxwJ8mQKFFa2JgYMxySX9bLJuHB4LP6kodQqbdfh8fSx3MCUBshfX2AG8duhwu1vZy"
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
