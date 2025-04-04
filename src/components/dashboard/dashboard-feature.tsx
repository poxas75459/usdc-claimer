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
    "s8SUQyj3xPou4w3zhTHkEi16dzyeNPChCM6yL7rguH3UMJ1dwAbV14AtfeJtMY776ALyr6hWeC5Qd7vMipXwDjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QiAk3Chkrx4GNi9wytdCFWaetzi549Y97ecG6o6wNA42NVAUXegBPqZaoQEgXGxbmhTCf7wdj4fEyUHLZkmYmVS",
  "key1": "5QKYSqDz3Q7xFpYuPsBPTW1oFRtRUqnG7mE48qSofkLr6r3hTPXGa2PKXa9GjJkLSaLzhzKrwvGZy3fW5Nb8VKsD",
  "key2": "233pSSqiAfVU47xpVj7SvC7mA3ePf15fP9CutdjonSUAhjJ53xsvo3CerXrcbiT5mCXyWQJxTqucq7cpnQqbVSJU",
  "key3": "2rfTmTZuq3z1UF4pHmX6wFtotwM1x2d3h7T6coc6e5dH4ibjWTk8VvYjofvEbkBBAEwzJkfVEfZ1yjQpqep8u6ZY",
  "key4": "4XVsHgdtLqtbMmusXdoA2a81UofRTy6CLec5XDnW3uzoPgBELiWw9hhEFYnU5vX7XUZzWjbogorUAj1isYkWajr5",
  "key5": "4YHte4gr2nXEhb9gdTJYyi9aGcC6TLSaTdMLh1nfw4f2H8inzaUTHc36fAfEapm9cxeWcs5psCnmd6dLXNYPQeni",
  "key6": "2z3JfSNgQ2khZnyY8V3w4AFRwzt796fiGSQYcC8NXzwLBXamKTm5xt7tcV1GTXoC3QXBHgwrx88Zp6Tq9x3vgXHQ",
  "key7": "5RqMBbNz7FfdPVUvMbAs6ars5Lb6a7Y6bTbbBd38EcwhXqKud8nNgiqX4s2mzAy9p43ksv4d7o7cTJW8io41vsmG",
  "key8": "uitx2pHV9YQGC2cbK5eEJ9KKxzBSSozCkwi8mYyJdKeT72AzJaHAHT1gf9514uZH3J4TrqEix2d7tsU8ydUnnih",
  "key9": "2YryGNQkBPBAyXTq6kHkiBBbSaNvxWpfNGUXTUBpGrb5Kq8kSDrDScd94vJfsUisq5Q4g4Qh9wHq337ehDSio6NA",
  "key10": "67HdmXvvyFND8fYXst1GrQgsGqSvhHy2oTq9L5K1dRCzA3SBsYehQB9uw6VTkSjhyrGVhNXQAvNQ3Vn6sWeSk23o",
  "key11": "125TsiKAfyjegvdN1SnvDY4bJqVkWqTz21imfpF95sNzck4roZcC88ynW2TLGko8AkdJwQUer1gBJgcMZ2NncAyc",
  "key12": "5wCniaLSpKfka4hy9GJSaKskmrD8iioWmsSw8eoiQUdhxh3NMMbhJ6dKx9Q1wzbs3BVsNpXFm6E64JA7D6hDruKX",
  "key13": "4jRoryQzNGpQCBKdAFY2Ucg3kGTUzEVnhgtknXhBdTbVRe595aqD7JgK3apqsQcwVgj5HxnmH2VuxU4npkoz1Foi",
  "key14": "3NQhYjDHwM9E9rQAq5DRhyJCD52RiCGLkrnunLKsbbR7yj4c5Jpww6XCuTC9BZCjucFnBoYT9hXUPyMq112o1j1o",
  "key15": "2Kts3uFjtctM7UkUj4TrK3xjvUkqxCiRSyt5gRVrzqPtqcFnFjEFNyu263dhkqZ1BisrouiN8A7bQNiFDFzspURY",
  "key16": "3m5WYdMKHhAFPJLpm25aTo5pkN1eha3xoQraxUMK9TXPooN5fiZXKvJwdMaodq4yHHrTF8g634LD8nk1SYWmrS2y",
  "key17": "JkyZ4x6qEwSFGp28QGMiAwNSS3wVckWZeSCsZfgqVQQ9e69Hog2S8mMFPToFbkimFJS55TvuY1yWLVP2xM6sS7D",
  "key18": "3kcWUy41eRHaomCvWUCP5BQ3B8Fvwcq3h4U9s6iNuvb9QJymPYWNQ2hwHtawzTAkBiCRAaFt2bsXhDkfBjqinWmM",
  "key19": "2arzjvva2mw36J7K1KgXDSF6gbC4cDYiqREvtQxTKA64NkDW5P9qDvXLuaFLyKXRBNkTdzVkQrbXvGyWmEMKoECp",
  "key20": "2zfrbJbDYWWbDT99WHC4BoYtnGHJeFUFHy6eaDmM63Xza9x6jXjF9NvbckEEsvMdVChQXMwkbshArWZGvUWUUbCo",
  "key21": "2km6UCqqg8p6THrrEgt8Towz9jSsxQfSarL5KqsoaVZcbTQCzDeT2wYY2B8ZoivC58JGoYFqEvxvCKmsdh7vh6bp",
  "key22": "4FDEnSKMGepxDGM8wGnPgBjyQGyw7CYEM9u8H8MDA8g1cwMXEUpBR62QAfGL54c9pC4L9X1658jHTQnbeYzgA82N",
  "key23": "515oJercvxCbcsgstGd6BdmPox2MP88jRaVLyEJNrjyxsbpHqSuWsxoEjXTmReicDFXZeyXcerLzc9X5zKDn9qry",
  "key24": "2J7v1KmeLGD7CpArdfEXVmm9n3KwYLyNhibZ9epnBsfJ7CmFQqpFUYyrrP5b6u5zLSsbowA8YbGGktMUR8zLuBXE",
  "key25": "YZbXp3ggtqST6qu9LzB7AsKW5byX5xPoNpXeKxx5r9kcraWD2JY92bZ6j6uLdcfqUuMQdNVvRL56Nehrmyc3g1E",
  "key26": "BQbmRaKreVrDaacBdjdXWk4U5GFjxcqHWsMznyyXuzkkZHUPBzCpvg3Xk54xCpgbsKC3qCrSu7GDJ3qKUG9pvq5",
  "key27": "4e73dEtfH4D6rbpKAuyuJMG1tFJFFSPEFTym1Vr9ggdPkDnTCoP6s694NJY3MJAuiqBgXRz7P7XPtdVMSYPuiVU8"
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
