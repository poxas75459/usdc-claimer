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
    "5eixf8kVCAGnwFHVmvuLED578vogBKDXLzLGzU1wmUM2T69dKbHP9Y5CKLCbPdYdEQQNgQGfuJwb7msFyBKv711f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haRHRdMoYzNFwahMJ4hFAfiUN7arAbT4JP5QW5TRpg9PyKqZxSMaNTBDTj9a3zZvsnusWmsC973WvH1SSShvwVX",
  "key1": "2NCAMsFGi6e2mCiv2E2DDzBabMHF2kyJghLLSGg9CH6UHYbo9usJ7Tx8aaM1CHkJcuoEgDtTAdiVh63Y97p4r8wL",
  "key2": "5Gy2NL8oF9GAV93om6xjmGcuHd5zPpAPAQ6sia5TPC8XVns5MFjmr7omwbDCbZWEdogaHKtV48iCp3yiXpJtHJcu",
  "key3": "3TYo7RHLUmjS7vtUqURreLzCLaMhznMMeuuMq3bvQMHtxUTZutViu4dmKytMs3nGreK3sBMLeq9BTRJJp4AWNZYW",
  "key4": "2dg8oBrBehFQ1AybdgMhw5gLLu5pF12jZZs8bBtVgLPgM279sg13i4hwRHxNEU1dLyhxvm6yR5LKzwjXziFJ88ym",
  "key5": "4bucQVKavQkDk29WkXarGoujYX3DzcX9AnKSuiMsWnh3ZetUMTYbnTND7su9zvxQ6b2isV6hCBGSqTPEz6WHA4mk",
  "key6": "5G9BNTosRJ1vmw8nom2Fd3PqTVrioxdwABGUqCxeTR4c6HB2bpxxGpGJSnayEWzSTRzS1QLe7tgDjckUikdZZJii",
  "key7": "4gMNx9QWDwRonG5fWvjintpWZbTsaZQDdRqMPEnpqGRWb5W7Pg3CQVtWvzj6Zt857yhtvHiLWAqZaGk2BBb7PHHx",
  "key8": "67WsDW9uQ2PovscCD9emui7X1YhJQoPQDwvMkpMZYfiqWxV6jvW884zM5t5he6u9a5NTAv7ftzMZ6Yr2ivSy8UHh",
  "key9": "4hkUZgYY7TjEh1oTVVBLdhSQedNohXVKStT5k4m48d4HWbQDEAnGodQb3JuCC4MgNZW1byaiBorShPi23KvbSuK",
  "key10": "2MkPL9nxLXf9iYckYK5wBGkMQcWQ9ngsSRZGAv9s1TdhVzRdAcnh8jmKjytDHUvFWg5xjSTVJdxwaFBak4jYkGB3",
  "key11": "4LAaCrrLxUgGWz7vjZN6PxhQLd8egSEmipbhevD3Ka82xSjPx9mxt3qXD64GdWDwewZgQBcBZVqsVTpzmHydp8WF",
  "key12": "vFWVXrrYEBxaf8PkZbdQDw4PSmnR8AkiAQrunFb3gF1b8AyEMAkAKQu6bP345MEuNwAbswBBQ4RyHVgfHn1shzX",
  "key13": "3kFhFHgbtYiAEXDWw7CxLCr4Seb4tw1Xc7rVUcCWD2oo4sWjChW8nQScv1Y4w4gQMPwUWR9ycaPye6onKa7xBmzc",
  "key14": "5RGLxZrxvb1sXfSCkVzRVs2EbHWp3h8canSjv9zJeQnFuNPGo2fBrq1vhxTpJQJUSXCBswewAoBKzDpRdUNTcjTW",
  "key15": "2yPPJHEFyiAEvhq7PhdAjZCjzQNhh4C3MPyHFxBhwCTaxcLphr1SQZQomoZiVBf3cPTdyBHByiwGSHNCRr3Q5Doi",
  "key16": "d9JBjcWcfu3M9fkvjMJLY7oUmRNFu53oxtGkVmYN8Z5yPwr7MbYKj5PvMYG25ceg8YXpBLyerK7LEsSzFjKjoyh",
  "key17": "21VV3YqqSYoca4cFp8LuBMSMhKBq4MjovmmfmqaDayGZkYd3AoJm1ZkZZJyzb7MuYP3g1HPYmAgorXBuZ6C3EM7t",
  "key18": "3H96XUk8Y87cMrdvVXE9xQ1vDcgG2FnEMP5Drpm9k1gd9QycGjXdVbVcT9nEyMjb8wkKJo2yXwsvg8CrE5MSityJ",
  "key19": "3VZPPfePTt1cM8TEGraMFr6hc7B3NYuMp9QwNFtjHSWN9ynX8gJesadXqfq84oDUnmk355T9g5NjADCdtuv6W34e",
  "key20": "2hXt3NRBBTS6h95joLLTpaW1CMuD66JcGjeLTVAjR983SxNVpHu5obTfdef3kQmBtZAYZq9eEyNjKWYA3eTbBKqg",
  "key21": "5VJ3hMEPZhbB2VBoSEj2B343knW28GRUv7ZfXT6jU9QDBVXvprsLoy5gk3NdNAHiqw2Lqp98cf8Qepzget6D2zfQ",
  "key22": "5ewr7hTGQdXqzFMcMWDnp7Ryo8Z3o8LWHmASSVS3HLHZLP2QZXfyvSZDoB3hbefPV9qh1wJLQAyk7jw8g8BhCz2R",
  "key23": "4aXCVg3ursM7KCZKdk59GcxoaLQnycZMciNxP2QNLQUSv6Ab4gDrpKQnVND9LpaY6G2DCb2j8bSvbvZR4b2vCiNt",
  "key24": "21sKdjdcUyNW7VKQm5piHE193ecYtM2WwKKmy7n4GehuJ1EE3oxBq6yKXuuGc7TzCRUhNP91pCknST6ApHJia5vq",
  "key25": "59ChoEAfCgmzXt6FgKhK1Z2eUdzTE2pYueb1ihddjFqhFxGEAraGmmhe7L66dBjjEPb82XTV5ZhAYvNTv1axkzB7",
  "key26": "4SYptqyfq1vaUXwtEDUejfDuSaPNQxpJXdm3FQVqgcxQuChgor9gvvjtiotCbkfH9Bf3Ff4fmQPoQGb6UnfRqjBw",
  "key27": "2KBLUkv6CM4CMzA5oDc3L4Jn8PknpA2N1bQTQQZAz7Yd9gJb1Pszd1r4T1uiMmsBtX6sLJHDVbuwzLcX28UzymHN",
  "key28": "2nPeFFCNj5NUp6fVWWN4v967Rhp8yHcYFDo5DpHZotP9RTQBcKyxWXrfyocjDWWsaMBXUDzG1RpzqmXyYe6LhdJi",
  "key29": "24LMVADypkTe9hCDGLGKVVeFXq6fxgiq75dRZ6Njqino3sUzsy3GtNB1NA9jtn72kCuzP8WQYn1BtwrmpDQU3DNP",
  "key30": "272n6fg9L4swEQoJ4HWA3B5RSLHjmhY97trLj9nuzCXzk5HiMfsJbz2tMVbKahCz383LjjP9iPhToJLwKGug78dS",
  "key31": "3cwoN2f5t1Qip9CkYyqxv8k9E3TP1bHXxzRDUJ2x7nsgouc3LjDRExrde1WaFBCkHYPCkydqbit1odoCBXTLKA1M",
  "key32": "3dfkvCubYC5gwMXtZUKyTgkBiCFr3wK9DG7rLh9LPccZfzgvu3NL3CU1TXSbUq5zMmpreP6FsXMuoMH6JyX2qG1y",
  "key33": "2vmtsofM39tCxDyykr77niFZSKFAuSz9PoaRuMqLHN7SzfC6BYe7zrYVbL9xsKcBKC2Ms6vq7Wgx7BdYXXwpM2s3",
  "key34": "4LQvtfuNjq7UFfr1W7pLgjiL7yz4GN4Tn3hLukgrGmiKHaPzcQeDTSUWyRW6caKRJkARfWk2M1EfAce1sJ59MozA",
  "key35": "5jqQCaTY1jUc8ZMj6YNNmvYEMUmmrXVZ1EtJV6TR2cKykFWgNL7eBh7kJAJaz5P5n2XJEi3JssDzZMQBjtihFwyK",
  "key36": "4oM8zFZzq21gXjmsBvA7rWJhJ39zSrEJpgFfGuSzQjgzoaB5Bb86APx8nz3WkNFZjUhwhnuKm3LSAeiVS1Xx99eR",
  "key37": "2LhNhhT5Rpmgnsdtn8hK3Ub8Q3bfwHGZFhEcZcwtCCxzFtHxw5LA15FVHG7XDv4zKH2dJpXncS2cKL96TthUULij",
  "key38": "5HJFwjU67BbmiAP3cj1tDdQy4NmnKfx2mGy2Q4hFhFeeb3DrVSs82w286j3GyajkSFRh66uWNnJetPNNNHZxXnP4",
  "key39": "5s6SagCHNZ4hih49PYk8XQ58itSjspRAXgz1vgw19kZxeVT4qredQE4nNUJzR6Prgxc7FhvFCZ2Gp1CKuXxzW8vp",
  "key40": "4fKGCrA3ZEUSnzT8ezniiwda4o3nrMmjv3RqnHGwZ1L7fUGDQtGcXh3jG1p83axdkpbXWsFzA3QveRrQ3LohCqCV",
  "key41": "41Uiv6nrGTJDQrFnkKLj989io7hrdvjF6J3RBRzuhNz158E61oN7Ps7Pzrujm5w3wvo1JkTSSwLkBDxYbvkK1EZC",
  "key42": "2Kx9ZL2nXrJaxhoKkZ9SNVxAvRzwmzKqKsdtYwSJcWgReH4QDQP8wiG5XhDyyXYXNPKY2UuMB4X96CnNibnY9UkV",
  "key43": "4yAoVGVqNdYk2Mv4f5gLeMhtpukCTDaAkom5UhaVQnYd3affFpyAChPWRX6zmDNKz2ZUydaURL4cjtpggEEhxXUv",
  "key44": "3z4EHEz5T8ZwKM2wHaHYDBXk5auZXHYSYMeVi3dBXUF9DPGt5CSQURftKqdL2Jk2UVpJ2xVCDq5N7yiSazXSGqfr",
  "key45": "tWvEGhVJ5THpiJXChXaMv4hRAafvXZW4jkqGocVodiDA6FtyxhzQMVy7xX8N6tGQZq9qHoSzxuGLW5gYAsN7QXP",
  "key46": "2x8dJNykcGyEhPTZ45Y95VJP3nenx4crgc8KDRgdEMAue6UKdL6z8LktZiZ5sMmRp3y6SZLsX3PJ8CmUHmU5i7cf",
  "key47": "3zUWAqQMPXSpYMMjv7YdSBg9UvYwqBb2L16WpZndfe18KdFX4qhiY3ihJG22rLAboaJMXhFr9LTzW79ELUeNWXzh"
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
