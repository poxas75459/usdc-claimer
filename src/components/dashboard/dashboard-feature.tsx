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
    "2zz4sJZYUDoWyokEpBHWmChRT58keRG9vrhtWMvHGQJj1fyCeEdTjLsAN9BcFiQhHL6XqXP4cVwQs98bSxScjkWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uK7FzuqwCdkSB9iDtUdnM3Ld98r6a8V43vb15Ep6C2ohuePrLufEzyixdnMEfG81khp4ScDfWQHAjMgqsgvbioK",
  "key1": "ZzsaWuQyiAwdG6X17pNhBw7zjnXbxbkYbLisS4AGABiWeqYbNKmLPqpVR295WXvaJZDiexK4AkcVjKHpXLpGw6k",
  "key2": "5jfW7Z49zpKqJdCUm4eZWtKANCKYTScQCF3wDhRWAMy6zAdG2kkTzt19LTSuDt7Ms3WYhn2LYUNWcpSEUeoAXgGh",
  "key3": "4TrWdqwAeA81HSs9FzVhxM56GjiEVKZKDChUfxLETmYjSEFzEP2UkAneaWDeGeBBtDWpqovEMRXJc22WjGPbjHXA",
  "key4": "5UBaqsUCZEkhZUsdZYeZCzfZZdr8W4UU72LUVWbPtPFAnaB2nzcfXRrZdEa8KVmmci3VGLBdKJg4xgz5Pwc2rCXG",
  "key5": "3UahFvAxFBcbdx4QoyTLkjMwpLRpSFEtQQbtAuNKbTV1rNJHET32jZFHk45fJ8nG8vdGiPGuFeVLojYAPkJeVnE8",
  "key6": "ewpUZmLH8dJpVBY65cbgFcJ1FMaxEqwSc4wYVRGhsc59y9TrTZLt8TcZFzuyfEzavC6eXrWWQXtSASDaMvsQp4e",
  "key7": "rDk67EjVrdah6U1jDgEPUGmZZbc69kfLob19J3wFHy9beUDvHiZedHqUfYKE5TqSPKXse5UYA7zPLvQoHaWNRRV",
  "key8": "2Hwm4u93AL3z8q1n9zv25V2pe3hbZUL6D4hJwQmbienjzt6wTLzk5W8kL4PgxZLib1Cibt7xNNB8cwH7bfFiz2XG",
  "key9": "4quNvj2ggVpYGdrQyrBR4pA58qTTR3HRMpdDESP7xmK6DPASUYv3xchNSWTEGNZ8XfUfwrtVpLkw3m4easEyMqpN",
  "key10": "3u89mHuQdn6npCLb7CgR2sedujgiYzZaPH8uY1hQRmBWrkCKm5LiLPb8gfehN6v8CyWauvJjgY8dAcmsmZsjKLFL",
  "key11": "5ka4uRXS5iAPjULvSsCq8BKw3mzSpzYcEVbCpLW5ti4ff1eKCEqJEJWEQiePJw5gXMbExx2ZzK6oYtKRNWY1r49p",
  "key12": "zTct4amHpuAecAss5W5rrJoG5dFVrcCifjFixyQTZEvkXjZjj4qdFBc19s5mmoLMJKvvCnzWk1ADTdxF5SWpu4V",
  "key13": "yJK4fckGVQwaFnZon4AWstmeEsDEV6KGU9CMANf7Mi6KKjZB9M4gNkijvcK2TjNFgiBP9P96vNAwekrTYcbuKXw",
  "key14": "3poQ1dz5JZeAjGeC6cAX2QDH1dtnXMjuJjmus1HLzT9mWaKB7RmM67NQT6oMmYwCdC5nqdXhNnC8MjkqVYYFKnCY",
  "key15": "2dSzapZcoqANRgUTj3qfUB3VoAZyHb7L57rr5pvkAboZvPaYojmZskheYiRoP9kFkwFvFVWfW4JzGQwAcxLmgChS",
  "key16": "5UxgRjS1tf2UsRQYrz8mcDEp1tisDK9cGquzpcCqFX7hRowHZQKMLBCWNHHCn6u3aRU8fjieLP8CRgAaUZrc9BEU",
  "key17": "9JcG4Ro1gDwfrhXkUbYbgTjjv42dTEwyW8Mka9fmzyL4VAgnVVAcATrHnTEPZg5kR6sqQav1j8ugd8myxi9RzNm",
  "key18": "bh3gdx6H8jnzQ1EVaxbX4Q1AFdQdbWhM9KJ6CDXBm4v2p9LHadyZSpXDCKGVMZwA9b21W3apyzq8zx1MbYqLBfV",
  "key19": "4Mce9gsxGGwiN7fFsjYGry4HzcjT4F8Sm87DTjmSV9Ftw8J2q3yAifgcHCJX44r9niDRkqMVVut7G44QXs8CMAAB",
  "key20": "3anW8gZvqVSXFnrZUiF2rDjrE7Qh4b3SG7SrMJ2ZffC8LwfTczZnRCSjHTTch2JSExeAGZ6LMRAuP9aCnVAgu21V",
  "key21": "Lh3wUsTCuPWmqrqtThZkC8fpxaGvWf6hf2V5UUuSc3XF6iyH4iZHHAFWufv1LM4ogAXftXo5XD8PW52akoNm1Hk",
  "key22": "2nq52hyWCPzvkryh9GAqhryQMyqdjhHkXKMpojvHpQY3TQMxBGhCEKDWBUpbZeVEkXRGrgZcd51msgyWqkc5x5Ms",
  "key23": "45R3gYhdyQeTdoHY3ZN964u1oF7tsPejd8euvxHvZev7vrgxfK7jSeDhkmHVoXsqWoVm9GUTVNLN1pieP1VNodQJ",
  "key24": "3aoGAvxizaiqaBUshUe164HZJpbKPJSdCXrJAuNJjR8zXCn3scHnfjYtBS4pFeYny6Q4iTfnHHoUsUssupEFDgaN",
  "key25": "4AYycqGHDji2JmE7sixDjdffuCyhTanMkM8RQDXaRBnBRZ186Emsv3qKatsU1HRJrXN9DkpayU2fbVDj8ezHAWL8",
  "key26": "2H1X1N4ZTSeaqbgGuy2Qpu2Brq7NvVtEC5uGXxsD64bS9r1AW4fgm5xXyZXvgRxXKXfBfZNW6euKG9zXzbTdeujr",
  "key27": "2XuoRNLBVbxdsn2Lo2AcuQTPMqeA1WBiPgTNrrpebeaAWFiU1z6bmuUnBF9UqUCW6aVNWLwKm435VjEfX6t3XzMe",
  "key28": "5H6EMWsjBzGmk88uPFCLk9gsZPKxnj8Z29UrdU16JreF6SRLPvnnWZkFjeVC2YQad6Tw2szYEms2TMsWtuoHWGWA",
  "key29": "2mN46FUrU72CKLzG6eAfVYU4ybtHZ2x7tLZbh7V75CeUqfg259NqUJWFr4BY8woKwDFEMZJ5z764GB5S3gkja6Kv",
  "key30": "3Y1j5VXBMwsXKzKN47tNZRpzvL8ft9GUAvmxW4SEEY7TsjZ9dLWtfR5cDVxqXypTRFxxEqZu6GjmjcR4QHm5zmHc",
  "key31": "4ko72P2p6xyYVnjm56HtqKy5bi1sx9StY1FAYA8Rgbb8y1thFcUyXi8mJFZx46gnx1jFJKs1grrBA4TRBi97qBNh",
  "key32": "5HbnBJNc2gdZdvEdFXRU3kPETYeCMtmDUseAfbPYw99FasYdsmVFQz6m1XarHUsegf7p8krKSYVCkfrWYNvUyGTi",
  "key33": "UpkqjSnCBvWx2HjgNisEKK7JpPcuyrY4BRdB29ZZzrhcSC4PEpECHNDHk3SisCP4BF26sgHcWeRiGQD71kYcwHU",
  "key34": "3nXxxrsZXhXjv235kQQtF4GBxWy3j7pQ7EYWERHzjxapaLiZGFW7ik1YaPiRD9F8L3J8xkVgHJgPMe37YAzeoH6P"
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
