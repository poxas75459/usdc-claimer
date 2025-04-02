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
    "2NW99UaiKvWNjiZCRBTjzj7Wax7aXrUUk165xgoL5GiDEZcJVERK7Q5bPwemCYebyFwAoBbq3XsSrgFj3CBqPPr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oX84ChWsYQKnoEjDB6baNFrArM53bw6afgZ5wvtL74fMQApapvbtjiSrA4GnQtYA1Wb8SPmujPBUxxweWztDVAA",
  "key1": "2cMQC5ncHbxVyBj6T8BoJHotjujLUHdDuaVy31LcV751H4pXp5uhuifG4DjfNfAwuED9tNWVyN2sU49N3Rcwtp6T",
  "key2": "25HNjWPfVNL2VwmxQUcCQ7tHaWL6AufoNeUYnU9soqUdh8d7B6n21mvgCJxMjEUbayFp3DTdds9WHyjz9er9zA8b",
  "key3": "x3U51evpxfcjbK3CEEK8ZCRg37k1oJrnEru3Mpv3z6Dru4Wmd4XAr6odJWuUVdkvP39bXKmkM4aFMUAZ8XJcjGv",
  "key4": "3jrn68i4ZVfHSgXdUSQQYXK7wXUejoytZr6jQNytLsmN9iv4FQcx84FbGkdRm4DGgkxC4Q1JChJpvNwf6RQkrFXC",
  "key5": "2mtaViYhbVJiy9U7T3zUtK2eckNsRBRQvLyQd2xibh2orLZ9RSxk3R2C6M1h4bF3AicJk79MeV3mLtAx3fVPPiYG",
  "key6": "hfP8bq2zTuHffswm2M1D5VLQDvMtGp4oDj6RBBJuCujHGLRmac4AYDxtD17paKFoBkFWSnhDhwanCqU9whWBAwz",
  "key7": "GDRWc6uDrpECNQusP8HY9TG6CzXcKtCZAwZRTmNLe1hzFJkNvFXioMxYX2CBChKALaXpuDK2kbdnbeidLNadUwS",
  "key8": "54KiEACXvzb4cHEeU74ERDYo6Ypvwo7z3t7oJ64fpe4vETLX4wfjmV6wU6mQLLX3E3Kigf7BBRfHUMNnVgGbYbHk",
  "key9": "4xgXKGFzzmY7rL291JBzqvzh4haU5YE4rLYsxw4B6x9nfngqJPkFv1DvP22ByWTMeyzqD1tXYamQBPd8CLvbPsAZ",
  "key10": "25QuUVP8DECMMUsw2jVjYX5xyr2SppRANfdKzhvubsyraEyX7eu9oEyky9Nd9GysDWRycFnTo4JKqvN87ABKzNrP",
  "key11": "2YeFehfFcDkpGQLnRc9mCS4bfy7547iv3iTSaG6SHQvvVUTNjfchTRaevMu4FiMmoaH1MaDFKRSBcNqSKaZfeZfz",
  "key12": "5xGy1TF7Ez9U943ULERF4Y4aRoHXV1wGbcTB83DQ98wTi5SQf9zuuBbfJbK6hyxUe6272yfHs43RjbE7RrqAftgV",
  "key13": "22Tf4qun9qrae31urBCgaL9HxH6z4g89ajdamzfpu2LagdAPRxLSGWmGEi5RLWpbQSv8v5nUJPM4TwaZjLRgU33n",
  "key14": "4NkqSChagkuXbuFPDP4s6bTHnsm6dVB1HmDrKHCMEpLJ6XPWAUFW4sRhGoquYx323xaWaH7uwAGtpcg8pJFVfa96",
  "key15": "2FqPNgWwp83QfXXNN3xV5zfYaqp6xNzvdXB92gojyxRgJyWaE5G5pEmDTynMbszrzojmFNB363aGPnU3DkXeQcMk",
  "key16": "39guTQMhduNRo7k3bEHm8Uv1XWD9LXL9dXtrrWbAeK9dtoKd1nPXB47wP4D7JoAhhCkZGEEUXBejJ8kSYbqE3UbX",
  "key17": "4q9VbQYDBgKEniXnXZRAoQjyTGRXe9aszj864Pw2gYvMSt6bj1txMNNcgG3fgMu3hZ5xgQHTAREdWN4isvRPbQe5",
  "key18": "5ATBjKZScvPc3y5CkVuefTvNb4sKYAwigPPpdS6fXWzWYVq5WchfL56o8HeBUJWkgNRQC8QMmQEY3iiwA4nzC2SV",
  "key19": "2gsxoxTk5zrnVZbjPXhgz9XhMJFz9tDmGTCmdLFDvyJ6ZTKcYeodrCokrGfW3Z87Dt5sFfkqbS4DoNQ4K5KBJaa3",
  "key20": "gGQsud7wfq1h3GUR4QjnUD4SRm1x88AkWSevxBXxAD499vZ3KfePyYKDPk1bAQwc6kLvL5yRrfvbUqfYuTGSg7n",
  "key21": "5qxR8CuFrLi3VLs31iCTkupyzMLZSsMU3ckxE3r4iKEDpK7w7m2paA6QeBygVGG7LuDdXqhPgFy9w5ZMHfV365pp",
  "key22": "5pemSiQt2Apo6wwtCqCmfDqS855hxaWMiETnLv4yRitEdpf9niKz9LcGssJugBEUpznSmTiF2k1qQNXEbvnoPv6H",
  "key23": "4UhxEazQHSzvgne9zyFJ1Et7kGVpCxpRhbgfgpio1g8aC3UL9v8uC37jDfn4t5wtgNQWwTKnCFg5PE9mKbUEYwU1",
  "key24": "3h5acwox9rnm1mgLfxvqwXfZveTYnHs5HVwSwkQP1iMxSCMVQLQFVZnewnc27QceRJVkCtnmsg3FTVJJVpuPBgHW",
  "key25": "3fL6W4KCptQRxkieUqiTAsMCgHem3rj5YtqRMvBShbjWpHyFNzCEDQyTmCofQjKgYqp5zjupCoFFCSn6JVBhAi42",
  "key26": "x2ZRAQ7DBWRuyXCFmA8BoGjXZmBja1o2fNpdMhvUPRZ8SRGQ2gzWyCgrF8TwJw9sn8eqizGqmwJTdwULHbWwV8s",
  "key27": "5h1juV3URyZPJ1XXajXLfwsz2T92FstekPZAVb4hSkvN1xqcd8RR3hVASVkrRnbzGtbGHSghn7o4AyxPHfsuZKfM",
  "key28": "4uiqWP7mNnatRaTTcYHJsiMqH7CKYYUQtwRNEKr4otpSmohW3iaFEV3vicbr9DHnXhtYfSDr4qGavTM5ckePMeXt"
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
