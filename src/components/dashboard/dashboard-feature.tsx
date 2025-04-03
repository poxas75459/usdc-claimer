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
    "4WF32m2g8GgavwNZNbcNtDzFJyzUEKUrSRUV4kxmpBiJoNeU2vjUPFcuRiwgtyLKrabaCMvEU4CFdEsvapNL4RoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v6rPpjV5JdjP7FiBvFiK6kqFA57EhcYUSe7mDtgisV45nKvEmvLRwKQf6Vuh7F4qeFA7mmvvAP2yiAA4wYiMWZF",
  "key1": "2aLmxQfSPkLBNN1A6UCdFMyhxzj6gHzSe99g63UKg7JYJz9xdHXq5cz8vqVQ8BGLiKsKsQ8UDn5vfSgpiRgcEJ7e",
  "key2": "2RdN1cBJmB9heCW9CQyKREamurFUD7DFAqmX3eMNFVvUxcF2HaCZKC2gb8EowPchcjYrGPQxLthkKQpLSmE8wnby",
  "key3": "43wFdwTCuSHysoj42ZuvALep3viCkjJvZgyZ7ZqDqV7VWet7AvvBxLDo1gwzEr6yMiJZD7pBYBbAeZJAXKNpECry",
  "key4": "5Xn1k3iTssHadL67ZToEeqsFkmL4i3n7Gqt1EnepWCDbbiUhMV5iyycFxv7qMbP3gToiU8PttZoNLjXVB1V4ywpT",
  "key5": "4ud6ubsN7e5ZFF6oTYtfuTXB2WgUKJXALh45pxQqhnxJbvJ11ogG8NAMkxfDBcD4WCdr1XcQfMYaDiN3JEdDsabS",
  "key6": "2WoXRQLrmNkdTnuV5iYxvtz5NDSU3NPrcsFEoSbd86ZvY4x5C7WjG6ZkWS9u7DMcWwfcw1cz116h6P2Psx1uQMAZ",
  "key7": "Ktn7MKKxDW9XUk5wBZxqUHdKg9QSt5MAhewaMV8HpZ4aqHxW5EDkQRNPZC76v5WcWr9YniZjmvCnqBtmzabUNMW",
  "key8": "3foaK8idqKKHjzBcxmxDC4rKAypbf5qV9WEL6Eu4bb4vvwU3tKJWZKTqw7vJjuJ5oDS9RBuz94z8p4iRdokSVL7w",
  "key9": "2tAKtDo95GBJrS29VNCRzu1kaSJ2eQtEC4QNmjKzpZDVYe9Zvrhd1SKGQm8PMChpGnxaRGxPN9RKCAK7uSMqM3zd",
  "key10": "4MJyEQXdQpmank5t3XRMCas2HwkUdgJymhRnKjLZUxySNaR2gPxTCqKyV8NGSmksSHPYLrPZXxSSbdKK4NXSLEHZ",
  "key11": "37qy4jW2H6MBRgyETJMERk1JPsPpVMDwG8Uinbppm1gfZPhmVkAnnXMGdwPqW5C7qHycjeT3SE7DjyPXb8n8b2z1",
  "key12": "3hk4Kks2RDNUQUvKcgzC9jnCw6TirQjwEspd8a9ei79WUg3JdhMim6uHX8DdKPXcso5tH6YbKxnF3ZJWd123Vrb5",
  "key13": "4eR7m6RsZeJzdyn7r8EZNj4UMeaQtNSsx8XPbDWSbccAMaCKeBMZSXXj4cAp6wnBrr6c4Kky2rX2BjRhMVnfTQbq",
  "key14": "5gPCq8DrRXvzn2JPNY85dWzvFdw4KkkjbcBiKWQAWRFBSanmVh4nCjqp4Sqj74z1DgeRfSQvR6Kb4YgB2DzTPVWn",
  "key15": "iT5CtZJGmF2VZPrdiVaPBzRXjTYsEJhTZny2ky4XGvwPHumYp9VxJZ9pj79ZMopRG8zrFWZDJNCNjKomHiiB7QW",
  "key16": "514XYKhkfLiegUASzNBwdePQU9EUwi3tuZtQdDDZ8WCuj635kdVCeg5GM37wzZdi6h2SELNZK6hM2V2Rxgw9d1Gu",
  "key17": "3j7hBwehiRJM7rHvZovaE1QoifQxC2xGtHAS2Xr1vSwUerhRzEAcRNLXMZcex8tK3DFcGqSVJuhzSTjGEdT9kLjC",
  "key18": "5QF2foMkro3fvAZmEsbe6k7CCQNdf6bKj22aMaU8ubZRvE8mUqLEHEYybBKZpHWZR7LsqvNCqWCd9s9jZgUPeeSF",
  "key19": "2xMKXNGFtbkKGBhq3mZzRZB4RGbpdzALY76Q35kNBxXkqkMrg13n47Bk6AxwEuVufQ8pvDuKD8sPm8a5VNJssKpW",
  "key20": "2Xrd3BNfn5d2N35pkGtH2EbxbdSZWDU4FHHWtqjR2sKGT294v9GWfJoZADmNJWTkswNZU9qDcQkMhXkAY2bV9usq",
  "key21": "2kAdJMkppcqpCZt688iGGE4h4GeJQnP821bKrQ3aWHHWQjxCYiiNsFgNt99uSW33BrmDCX1RL4mTT3DZLYPUE46M",
  "key22": "3AfGP6iKcn4XNi2j7MBSp7qiHExAzmxpoGd6bHd5EJdvJZYU56yeEX7J8ypuQSUzgbCPBipR1Nef6UH6i5HYkca7",
  "key23": "4UHV9B7DpnVhzUY87fTpnUTKH4a7346gSPaibU62crGYDW2v5HGf5p9UgdiHQxgRw4s91Jtn8UXK8fVoPqRa47dR",
  "key24": "5wUSa5tyQsBZAhagRqUQwVFdUwse93Jf9suVCPPi7onJpLbvYE2GEssFbHK7FUFU4YixJkUjFjiYWtkh4iW1qBaK",
  "key25": "2stQ8LW5wdGhooXT71RQv7HMaN5psV8fWiovRhrUwRTHwMJNTjmBrrbZLtEpJeJgBZZtWqkcgPCdUsgnNEWDBkDy",
  "key26": "56vDSxeMfxRHiZwPUnbaTBxBezfXiSw6tBRJ2KPUmbb4NUpkDFNgjUQo8KgtrsNdLFfUqCcEKP8mNZ2Ac79NQQis",
  "key27": "Nhma25dm3YnU3vid8fkQ5fZD6G5fecm5nhYxsd28rBqpM4MFKfyxGPHLzvfUk4ACXusEszjXyxn6rKAK6SzmxVL",
  "key28": "3aMVtAqoTLpUxnCPp6iRkK1Z7GyG1j966zz6d8dnBnxnPicQFt2sBgzAwsyoqhZRyNcV3ctj1rtQV7M26LWVUkCi",
  "key29": "5k1gVamBbrNkw6jiQpPMyrbTVZ4gQxkwWtWLts6cF11R1ohUxdy2VP2xgLDcHb2S5miL3UmxEBfAfrXuP3XZJ9pR",
  "key30": "29myLfSqjPYYpKSkbWempjoc2FNe1j2tMbVio2K4AexZUr6dnQBAjJ4cPXxeC3aij3KT3mHwiXkBLmQ4Z4dpkz5h",
  "key31": "63c4f2HzQyEHkE5evbApdTr23vWkkxjuyfKKTDdx62U9Z4vJ5DZyvVbvrWEzyJh2x4BGzQEfHsWwB1T1pY9TT5Dh",
  "key32": "cbgQTdU6i8WfAcNqYqmeTxNr1vXgVdwiskgVo7cr7AVPfuFP5KUQx41LkxFGx3DdEfuKG7YnoiyHCb6ciQkKWh4",
  "key33": "zSjrGcdyV8KLhiM8oCvpiovkrZvLtFZi9WEZNwfd7F2p4fRZZ5NiHQsAvMFUXqmnuJEhUW5Z8sd9ydy9jKX2Dd9",
  "key34": "59hhJE34HUygMMhupdeFqQ2wc15NGZasH1nFqKtPbVhXeRzxxNU99pQKVx27Yxgoen1azRKncMTn6K1sy1Tswig7",
  "key35": "38oD8KqhASnkdDZ7uUQCr268mg7qxYgjdZtGj1PjWNMjRZRMeSZyTkTPczddXrbEYoG5LrJekyM4azMPobfwWNzY",
  "key36": "b6qzDcXPrqHnaMizAX3Fw8y8A2oB5cevpFHGQyDcSXs1QDiKwZnKfeaRQzzcEyUTtaRPQECje1knah9rS4KYkqm",
  "key37": "Fg7PxxSVVqNyvsxDn4FbS3pNUHwPZNypM4Q2fx7zkGngYf1LRApd3yFLUoLGE5ByHZ9yvzN2Lv2uDxzF7gA3jqp",
  "key38": "3y1UKwumaXGdCvk8S3zjmMevZgj2jdKPBgnbL2H3RxWsqFQ7x5qXzh716stqb2khqUqDFsCXRB8bcdaYi8cLGn7D",
  "key39": "58PLDVBF9wUZMoRfbbkDMJxsjcw8S8kQ7SuXF1VDzVJSEaG9PWx9FtjeKjvyf6wiHXgyYJqmr8p1wnGgQrWjjfDk",
  "key40": "nrNnUwsPWFwRBSAt6x1EmbYmeqtQdmS6g8sDuRCKMzDUCSezTZPJ8Javvc1csT1JMGk5aw9Tmm6Xv8JFpoZo6ym",
  "key41": "5THZtcCvMadyKwbSS8mgXrh7Yx33VqdEcFWD337Z4QiXQHzojJLMP9VTR6EJ8xWRfHdLf4eTp92STaQB9q6Qtukd",
  "key42": "3tyZ2PKTnCoaCZXiAA1r7VufTFBgVTY1Uxq33xZze51UxXXzkh8Cd83QsPBqFgXWdeWdcPqXM2degyeR4y7db8jX",
  "key43": "3cf8QnyTeG5ot11hNcKfe3xrwSr1t5Vf3KMAAeJkfE4wxKkvphmVv3yaNqx2g7nyVuRXo3m4yWPj9L9BdzLuWZnN",
  "key44": "hgp6W69cxzYbrVfXXxRcPTgEonZFbHUh2tiWnvH1GNPa5yt2BRDgNqjLc6yianQfRncNYJmZPvSXP4tnU76FaSf"
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
