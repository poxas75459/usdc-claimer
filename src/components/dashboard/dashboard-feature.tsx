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
    "uGc64UUEL5VHvvBM5viXRsfU4EhHz177bYTECizxMfo4cY1vKAsTD3CjAxtFc7V5Cq4xXsS9ofc4gRWpaZ7PX7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gu3ZZaj2hZX8hrZTmneSufoTAPBYzsf2HSXewm2zeqRkBume9CxcVpu6bUP9iPtqZGu6Gg3wTKFuDGSK4XPd8nA",
  "key1": "64ed3QVQZqCbxhZGbrY3SY5w9iyNK4fQVctot6MsBQGzgprHofmVRkckdQjhZQwaFYNueKf8g79DNYP39ozSKLMV",
  "key2": "31ShJayXGKEtAzufy6xgBCaZhLpxPkr7uxHmrAZ5NCWNRC2PNT7pnUFXuAjYL7DGwyoWDGbXG5WmKjBi4yfbk77g",
  "key3": "5etG76HnuwkdJxMP2T7mNfVvKUV69D3Fq7DMD9p3KWQ8yKLqffS4tcHnzegBVMaPUoS7BY52nT4pHW85LZYse2VJ",
  "key4": "2PZocUtqQQ6YxdNhUbkSZVKd3dxVFBLNMF3PXKdyMojbbZrtXAcGiKwg5oj4jRgE3Yiunuad1DDoUNe4rxKri3dt",
  "key5": "27PFSkbU8pxwgGev9ymFKxELA4LNTtBqgUnihd4UsjBwhzqKN7gZc7LoG4RhE56y8mQTfcn8kdRcds5RhztUUVdg",
  "key6": "4ruAdMBwGEkNQL6uUA4Byegt6VWyEnXSfH5tRX6Gw4GJ7oQsw7HPpPc2hWj7p26qHEBFcZDYntQPhhUYNKkyVWMr",
  "key7": "5EvwQ8Q7eSecivnNNvUPdbSdwo1N3kEYd9dpgFtiNBNwqnem4jfJzJCdkN3GpwuqpNkrEcAshNGBR6bTcRwCFptp",
  "key8": "3hcmdciVy6gUGYRRi79mXHqhwNUxAKmoHMfV73MT4BsbL7Dfp4MWCFh3jnsRNQwYtL6Y3ijqjE48jCiZXAJvwtRi",
  "key9": "4PFypBWFb2Jii4TMF2pmeAkWc8ZaofrqqK2jXnPb6hmfUdBK1jFwojHcNfRcbUwg2MTsZ3bUFmoySwdS9DvBpTCM",
  "key10": "3n7ZWSxY7kUJjV1NgCTJbfgNfSqHs9S3eEVVkm4om9SQxBiR4pXNSoSv1jk9a5VDy4kniai5yjc2FATnTLxufGTb",
  "key11": "32DepB6aPddHtFiQULPmP4SGDPQgv6322K6kMFhX5XNywr2S1V4BeQCr9tdXyzm2c7FGoAARpuUhDMYiXrp2mCkq",
  "key12": "2GwCvJM8MJtn1KVad8XPywovJZaKX1GZeEkabZvwmzDBpHGFBrDg7hafwXZrSyqt436rhDkPQXq9gFC5wGFq8MtW",
  "key13": "3WQFfwst4JtqUmJeLWjpFGcdyHpY9VPXWVQu2snZJ8tc9B5BGUyj4iB1FWgiNNrEw2sPHsVRPmxBS7ovYpj71Jo9",
  "key14": "3KMU55z3piUgNKorLYDDvwCoxasLXoPRmMyXqhsa4bLW9QEiicxANv9rSuE7M7GRNKpZsa3F1dXrnRQQDxjWeeX",
  "key15": "jYWe5GcqicWVFGhMjfYUh2UjGypDU9XdeTiVN88e5Ri23WUvvpznare6v7f4LrVnUFpt8Zg2SsS5W34bpGyvyFp",
  "key16": "56n2d8P4QXZXZwYFknCjMMLfkBkm5EsqPj3EanJgYAoUa12pd1UJfW2q2HvFRnMYwMmbtvL3HXREyJyAupHKQoEP",
  "key17": "3pTbiFwf9ahsqoUbWk5FfEcqhEPyQ18uYDZHpKDXzC93RFxsdDJMsDoFiLXxmkpLHSTwY6SFMD4TntjrYFMAgH9J",
  "key18": "gMUuFQsEcrr6hA2JedVuQ13S7ReZ8qEP16WGEVyjfxDuaQMTRxbBHk2R6fXMj677dgv3VrPuY9y6yG7u2mJyHvj",
  "key19": "4TNn1vT117QRixUWKqQnm8iVzvBAbtGdM6NLhsVsZCMWsM9TKGfk2mnfJKnkS3ppWnBtdA3qBBLcQJcSSzbSgJ7W",
  "key20": "3Ct8JiS6QebU91sYniPWmSajKPdHJmC8k1XdZvL849HczM8SzZLCM6rURabrwGEhe3KLCqsqw6wXvcfCVTjLQJmy",
  "key21": "3SoGrerLJeEogVtJNcbeVRE5Ne5Dz19oeBzsX39UJCiURVibppG5Vd1sqaVfBRJcafKR1nf1oCzrHE8UNiY12dSG",
  "key22": "3G4GFPWUDS3Zr3qbig9Bzr3dcAdogsju2D7dc253Q92mCDwKhNbV5KE7fEYFsAWwrjrG9TDU929fudpHHnKzEtVk",
  "key23": "4v8Dgna6PK7NCabgFMb8iRi2a8N211tWVaXe4NCa9rDApXPqQ75B6gEf11GqNinniXP93yivMSzopJPEsczCB4Th",
  "key24": "599keDG9XhnucXMvcpLtwDkfzxS69u3pHxoCnX8DQeQrNsx3F8UaJycUYFGqQ7ge3z94bRuDv1id2PRV6Tf2VE9b",
  "key25": "2SnKL3aDiL9HQBnSRh82KMzCgk8vPYt6hmWna6JnSaim5XCiYJchD2KzdBnN7yspY6cFPkHrBZcf9W9FkcyiKeCu",
  "key26": "dtcXGHUaCaaSvVGdt4UUmWA1Tei7UKgS7CoTjixqFQFAbrkGcx5eP35xM8Xh4o4YM4M8WQUa8PzcMJ2sEkNMUBp",
  "key27": "54Ywwzg4Ja7fJ7N3pxG3xFjNXwiyYtLWXxnjJRc19WQWCuFcogZ68hKs5eSQaokFP6NiMPkohSUAcnJ7jCiXvwEA",
  "key28": "22fND5DJLeBPKF6zQXTze79i2M61NiahVJ3DgLAAvNfnZ8mFNHq8MFDD7hMb2GTt5CridodoFFgSNeyTouhe6PU4",
  "key29": "5A2fSjAgHhxA4LJp9VRrMyNfhNXFkFcXtCtcj7VND9vMpfQWJWp8LGJTffWVXPriTSwVNMNAZvFwDV9CauEgnzr3",
  "key30": "3mvT9WumnyEZ9UwhwsKoLaYqXqZjMjVLRVUWnbCDMicveYLzt6d3Vkny56HVTH7cK1zv1izGmcvnBoWGyYSoYSiG",
  "key31": "2fV1ewEQ5ZJYtQu97GTG2fyLUcuVb7BKPNi3pHFXeYVgyybD1GwzCTV4KSjYQD7jhTRGApr7RDBppEAypazf9YmP",
  "key32": "2hAHN8qmg8i7DyWZThHjGRqbxYotmxGPBX8uBWVwjEGVUBFVp9GnHWRr18YWgn6hwTUoKyRmfZKXryz5ZiLSGdvk",
  "key33": "4AerD2BNvGC6GNc3thasuA8ZfwjpuFTFNTAn1DsbeeEB4Gyx2yckD9XstY7pnXoiWqXaLnN7T5BFLaiXtCKDJFeW",
  "key34": "2Kan6visT9y6sURrpLWyFjX8yX8zSjqV11TuSkuPJj6nQHwpDERuw3rGMj4cZx5Vs5qjzWvbrxtCQ5cTBK1jBoUD"
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
