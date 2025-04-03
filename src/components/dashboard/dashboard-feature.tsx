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
    "2sR2qxaRSpWcw6uF5WXciBTNcYVfc49vzS2P9rkFh5hiWhG1YpnkGzZJoHecfzrxU8Ap7vXKMU317bTGvi5K3UFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7Kr9h6XsSpDaRGCWeLgFDTSUjCXDVhzjr83m6xieTxFBipBc7hVpsVd4RJ1Brqo6nfHDNqaAsCU4aGwxe4v3N9",
  "key1": "55UMjRh8SwfGZKUZZK94Xc7MjrcrS6bjWB4FCyrrPbSYWyqT75kNv7sVYoe7jugH4CrudXwSBEPymWExRicQgN88",
  "key2": "2FXPMUiRGn8HHFcRvYgbqsfoCWAYeAEU7C47vkwrCi1mToaPk2grwSqHqpDPKypFRDRgZjPZbhPcsraJ5xb9Bkkj",
  "key3": "2zTBdQ4AiRR56oLNrCPkJtNrxbU1N9Ew3yQs5VSsujD8yxo9cuxiR2MW76sJGcaJK7fyJ1mEwac5NYiSLAyX76qW",
  "key4": "Tusx5cJ2pGbrbq1uXHh9M9gJqr3HqB545c33ZRmiSPVF3rd84jjhofgXoFFFTX7tiMGDuzaN9ffFncgZSDY2PTL",
  "key5": "Wg98SQKz84fnKoiTBo5yCxvsmXJfnwhDMGE1utr6Pe9zD18KCjEPTzXuzkAjiTvjGAtEqNcGfcRSZApfYVJa8n6",
  "key6": "yDYtgZuGnb8JybVFd4UwHYDfEgmT3a8sAqe53yuQ8HQWTPPEoby9TZ8FHZkzFb1B3eVYoz5MFnEL1XYC8geqL4z",
  "key7": "25Lurnkc5DsPjt7vKfJtAsuJf4kZfmfcH8cMZcCyZJ7LiQgXvHYkM8LHarjg9DtZaKcGcVuX2n9SUzJKErNwQqqN",
  "key8": "qjwRXvJm6sFKGWXjNAHe1YSTaygJZj3CXxaY4ScXk2REFbTjkHzWieSfKdbio1Uum7NYbnX4SXKimU6kkHpknN8",
  "key9": "WjSDkb8uQMTLDoYJumUbEpiUvJbKz9YncVPZXtygL9Nsv6Ag2XQ1ihrAZNNFJ7bicYdfhmLapLoJe9FQD3e8wwy",
  "key10": "4bddXGcf8aC3euPMfiGMQdSE1bRR1eTY2rMyErSgisFKZqXi72uU3YcTg6xu4tfCzKKkDNsgFWvWPpNmZ83qQS9s",
  "key11": "3ZbNv1sBSm9Gwjj51LEWWWDRx2KP9u1BoBYkEwdBmfH6oZTzGDraKcuCaaZ2uED9RQCgL7MdrkbVS22NggXPiKQx",
  "key12": "4JiSjzXpH9oVAdNwqynFfMtkwTvaSaL9QnyvZxev49G9uQHtDe7Xs64GbnEiUNXGA6xEa3yGBM1N7P8nVL9dT7CK",
  "key13": "3rsoPPjzoZiv2UvxX57RUcbrxwXvP7aQoTDz6VZNy9eTpw5ZVbeohuHPm634Y2b7HUS6XUwbEixcNfj8c3h7p5ft",
  "key14": "3yYHp33gypkaUc2m4ELQguvNPcvfy6H8P61YqQLoRwTsSrN6eGRMnf92bXoNGLJsM62eRwm4MyRY7ZGScLUtMkSb",
  "key15": "5eCdeKqXvJU2hDo3vRN5gkUWFLupgjVP7DKXeiE5s4VqEhpLYpZTEHnt9Gy9sL6DvGwZqNRgWAGGJ5TXUkPZ2nD",
  "key16": "4UjaaoW3GUKJJ2BJUo3SET98RsifMihnT99PcgyNfQaBHkAtwA7YFWW18tar9SChdjZmTfrw9WLyoETePtKmvDu2",
  "key17": "2hsweqjXjjd6uGmQW56GAKZZ8KU7rX69KyquLwHjMxqagNho7kUV9oB42mXwujox8rvWEiWFtJMyqNz4HcqaUWfT",
  "key18": "3DBFR5R6UapU65us6aLzrfxguVCYxrStQTLK3kBUtQnRrBiLnStbWxxBJ5oqFnVLVdCJBJuM88qaxD7SLDgpj96h",
  "key19": "5ujedFuTy26afwc64JqhE1amXD47T4uqFmqQ5GnNKV2tHE898qnQREuUX8bRfrUEZsWS8ELnZehXNDYBkhSyMP1s",
  "key20": "5KE4E7VffNfmkSeh7WtHwJp2QG6E8ZgWmQj6X6x18qJxZtyYkfDDuM2vQce89cydebxJN76nCVq5Qxbz8vUWmbDA",
  "key21": "2LKh1BEwNUuD6uFFG62Chj8By3YetGrSvUjkvEob4gTwEdL1bqUbfiyjzqPGa94PVRDtUoKFEzJZN1PzxQqfkADT",
  "key22": "62rJLrDb1b2XySsAWeXEZe7bJRNj5EnTPZ1eRwuMXHNtE94eZmMPqvwMcgdqV87gHZxiHvK8VNCacxgM8D6NwWfk",
  "key23": "4FK5f3osDMFBvahjpyw1noXRceZs562kKYCGH4X3U9TDR3iUxhou9HkYqcD85YiBwPuyL6UT2WzT8U4DGAREhBuj",
  "key24": "44xeYrzT1nELKq1hcqK8KeoqopLSwpPFDB1eu9JdCZGq8mLuAaRfwQuKZdCrUpLECG2wHsW9Pmv2qjrPJVQmzBRX",
  "key25": "4YQHkXMYArNuQm9zMUH7wmC8zJSNnDtJr9azYvKAGnpLjcf9Hbe6JCguP5yG7ZPWjLtWxKnLMdQwhwrEu3RABot4",
  "key26": "PELRod7YimkCSVzyjnHgqwCANnwdVmt7pfqaMXZJwcGLfzVT3c5q9KA7HUpe8gqmz87T5SnJT3tgvR2dTAHdLuk",
  "key27": "5Gaazsx42TGZSWtZR3GCzGTcnAWKiSr5Hxh1vkSKBTtZf2VUdRvWhxX6MBXLJJm7yVbjGRX3QXNBPGp7z4sZtq2M",
  "key28": "3Gve3CMqVLrFMmaygRSeA9XWPZkuXiEjCG6cVu8gdB5MpSsCVTTF7NhcKJfg5NdAaatSZekzq5FM8bSxPei6VJRX",
  "key29": "4x9bfT3VzpQ2RncSzTsCRYXikoxRUwjbm8g61Uce4ezCNWJN4i1iHbr7FDF7D2v9mFvMuwets9wkbv5PPQB43rJK",
  "key30": "2FBuMtsQEmUR2pDk2SopYjGsXwv4BTMDfXLnfcyDFJjrAyqTfofmthare64VVhrNoLr3QExVDH1vfM1ddqMEDZYh",
  "key31": "BauvA13r2aSuKKEafitUti3chTRgS3AJBE3hL6qpoZDtuuzNjatbPuadWkAXDbZ8v4k5VyhAqeHb3GyBaoPRvCZ",
  "key32": "pi9zEiDvb1wf13eGbU173KcCu7Nrfy3T2Zy3QJ4AShCMLN7qLmLyWFcNAp5rtwKKzYhCMaFWLEg6fgzaspz4EH7",
  "key33": "FYwupSC4P3dNXFXXbPVavRbSL4F61FuTgjwnDim5vujrRogcwVLgJqbvHv4rXX96XkfS3Li77rvKNoQU9aYPjVk",
  "key34": "wwRuCY9cJ88DhXKWzLqWcRQyx9drVwDEepJ2z4KyWR8MTNepfRim9ouAYT1gTesLz1EQ6NFURmTwUmGBip7ecN3",
  "key35": "s55rotifpNKLD5DaVtRcmcZN1azRnCus9S4Sp92VQJnBpwbbetVU855Rc3iBye889ZgKuLA7DFbjqQnzRrAaPKw",
  "key36": "4qTFcx6TQ3xaCiu2SZrccGXtMEfA91y4ie3iFYiCnnVkWLdF6oGtVyPf1wB8P1EZsXBJZ6Em6vJNKjZegQaBELsw",
  "key37": "2yi6oiGNrQWnbEfUDkT5iMPSnq7PWRxguZ4qZzJkfBgNYZztLWz9jwHunujrsmRv6vbTc94HP94QBhCdCp65epVu",
  "key38": "5msLS8zqvbPnLBZ8FQYJGpEU2J8PG1t914S2ekQrKwvLKzSwrY1dchoryimY8Ncbkve9a9Lqc6oXe1WcJ4aBvVrQ",
  "key39": "4ZRGbeAQuS8vuJPJiq5UdaHkVLcrJ5eGCWUnUkpdDLLtVtA8s67oK488uju4GQmPXZzUiTUKoVoryyJVMFvdmoeK"
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
