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
    "3KPfxyoSWAb7nWS5VLiDUtEzApBTFB5hA75URAUeTLDCFmgwR2AdHibS97yC6EShYE1ucEB9ZP2FfFJedm3LeYLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rn99iuW621TWXWwWb3RNggqGLGmiVhvKcf6rdvFek4z8PX8WcBWbRj3dxo1WJRZAqC4GyLcQnMZME5Y8qNhT7ZN",
  "key1": "3BMbUNzd3oJSnT4hhVEJfbPWcbmjqjk4DuKbNSidpYmkPSvyKm7AAG24QGPZszKkk5YT8Y6R2JhTPLBdCyRiztug",
  "key2": "2RvfnfzjCSpUDECRSzjLygCW6HvShspJV7pFFFmQkfSCEJpH34xdhdYZMJfpvMU5Jvt3gm2EUa8eTju1oG4mE7LQ",
  "key3": "57ua5fpLPRdce6PUnMxVNaWdo2XESzpmBczE6uggXDhpxQGXW6tahuJSQg7mWkKovKrWZRWNymRE43oAse3FPeor",
  "key4": "4XiGqLdEKtnvMqTaKwWFAHATRpMhf6pYVWk2QMXyA4iMCpVqMqQzhMHELoMohCGfwTYLn9dU2s9cWjgW37QdKUjZ",
  "key5": "31xDwijUDkXL7iSiAJyXUebYCjMxKQS2SUxXJyymmqWsFfUrKvj72EfYJqE7qAGT29GFiBhRsZZCriY67vJHpLwE",
  "key6": "3tbhdiXTcVx4Ggo4cop23r36dMWNqZxj8BJeqjhFXNZY6x59XF2icUAeNrPrtjKzhgMutN3Mag334Cs45pfdoKCG",
  "key7": "3DfTHuvdyKqfBXRo62Rhe8aEbCuEn9QbBBoNWjamFK59HLzJsRDYunh8WmKRMymUBkyjMa21eEaz2dx4czuDckr2",
  "key8": "524Yt8rBaGVYsSBPes4Hw3Ba6EVYeiETjfbHXU9rV8NkcKoJvSCu2bNodTcSmqC2UJXtBD1pP2u2uDBx149raEd3",
  "key9": "3DcGya5qXsZymoFcxAZBENS6J2yUah4GEHYNmZJ9jrydcjSvhezgVeKRZPigrRAy9rrkWdR5Gmvm9pEQQcCLfNv1",
  "key10": "gkQGAcsAvydQdE8yAat8nJgFEcPLLEousGuXreP9Ub69ChVSmikJB9kceaMQj5C8eK2P5C2L2yN5ffwyCmdvrG8",
  "key11": "3XgvNqVHe7Ve84s6QxKszn7VQRiD4a3pECW78NFVZNrzDByy9ERYAZJwLE71igP2z3bGkxZuKFe8U3729gEQnxPj",
  "key12": "2byTQcdQ62tLTgNDmEDKvkJPgBCfhR6UpLihw8N76pa4VW37mFM7huHhqWD52w18krsHX9yeBRqQNPYpkAvovxvU",
  "key13": "3cAw911XUzrj9eP7Hx18xzUj4vq8EdQvGXJW7A84BznY7XEBoc4ey83UqHzUQNuTZwf8vQWRRJCkDx8SBCA3ik1A",
  "key14": "pwXAEK57tooeebNNSLXeBcXwQKCvqLBLrWxyC5rnnKcWodC1yqfjCty5J1MfaKLmpikP5RgtBJnXeMUH7QeHhD6",
  "key15": "3HA54XP1A5iDEQS6HhQnPi61Ai8YNviGSUUDg8eeevTQrDQ4LYEApSe4xXijSkPMzGUYLQSLPeVwwTU8LrjYS3pB",
  "key16": "4r2hE8735psKpr4fLhtoj1cmbqFwYdsLhmVneaZW2L3hpsUTrJYvEjkYquekhYZ5YdZw7ddDJ9q7supkAJExWvd5",
  "key17": "21AsYFBh9Y1o87J6ctQXdDfyYRxHoL1uSEyKgM3vZj677v5zz3TV1amjpE117yZafdQPcQsunzeHQFNroyk3QSjS",
  "key18": "5pA1M1LhogCpP7B58BJgZQrgQRuPrrL7GPfoK54dcN5RHfbuormE22q4rGhkW8hPoe7V2X4ca7X67PCvGavwvTkE",
  "key19": "3xGg72wSMkr6ZcjFCW4TLAL8ecNPK8cUQw6mDJuvsGMLs2SNGxsy8kcY69sVoniDdzyhiVyzezwXeLxTAnWPgxoG",
  "key20": "3Nh9Sce7ejWibfogPUPpQGMaWw7zt35MRJPdEsiuaSUyPmCZgMFG4YKtJotppfDXq5t9AbYEiCPs3kftiEy1KYLu",
  "key21": "TpQuJmTQ9WUmwQTU1DhNMQFoLM66gNXX6dJkiGScgooPHu3XuqbCjcMGPyKwg6WQXwKzmKXDYWTjyqdVR4DKRHF",
  "key22": "5kaksJjSg5posXibmbW7AERLdLXhPbkRZ2TfcR3tXj5c2gB7EFsekV97PYGDvc2HWxhpRkMHN2BmoEtyjjZUbQ2j",
  "key23": "4RMioQSZnDzYtmZraVZNMnLoVn64ZsuuZcwzuCguG4CRLgKqeHZSRGngsTcZotyFjohKbXBmn6DCuGajUK2zKGMX",
  "key24": "37eZpe59CEnzy9cQyQNfHXF7yu42cxrXYvwWP9juTfuwNAdRcQwfXYP79cKDbHZVAJe4PykUtGeRffQzHFUUxaXv",
  "key25": "4mdGGxWozqRUDJrY37QLPwKjBg7JgGGSwqR96kYfcTEfQ7e5nY2HSpf8wUzz6P6vY1n4QHM4qGoSisonJh9rRRV2",
  "key26": "2iSSBE6Aa6yzLWgWjxTAxAZ6UhdSJsf259B6Xndb4ZrTQ3wE96832XuHihXxSmYwChoqM9UPVMEhd2wwfQSGSFNh",
  "key27": "5bVNsKZ6V34s5fpk9CR6jo2SiNKquVEWsnb3m3gSH6EeN3anTRgAP1VSnT2yHJF4oPv4jRAMhnKgvmUtwzfJwkw3",
  "key28": "4Now1v9Gz2hTJEw592wmKcZTRDyNUyZtoBX789MEubpqVCinyi83VP2s9Sa3jRnC2WGbVFM5T1Wp1FtySCGBDLBf",
  "key29": "2sh4AdoZo9SZpwHDpTUBxz6jkhndGWnErFY7xaLpA3ZRBjq4UaApfwsqhTj5jYXHvxkowRXEyMeenTmXj41QQDsR",
  "key30": "54ffK4KNaVEFGbW2BjT2PNdDyyNVwrHqFSxHfkxBUtNoJeNcgrnnbQ8UY52GXQ64QzjPrySTZDE7iV5wvTGbueb7",
  "key31": "2iUww8NmcQZQppUZ6fLXx4qdQaU652fQhCJTmChrdVU5J8Rp1rwCnXomqoFgvJkvtDxBJxk6UprMCByNJRb9fqdX",
  "key32": "S37vRBqtvzqXiTV6S8U9HWiph9aBDPpNTDwobbkMcdGgdJaZhRUH9LN4Uu6nssLcuJrnSJfX99HNM7CvHot5DeQ",
  "key33": "7qsLQCGtkA8HG61MLniwbuT4638fZdkmmAjyV4rHcjSAQ9bupvybFriZ9gNdGehyfUUpEZrvCcPu3ZGM6wqs84i"
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
