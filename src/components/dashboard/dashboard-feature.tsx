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
    "M2U25JzLN3aBLHGPqFKTnDPPxsKjPYpTjoeQQyy4ARx4GFZxq8aAbCbKA6gBtoGnMizjAH1k8KRjxWpwKmJ3GTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wii3Px28D6Zzg2g6Ev6zf8C8AiTbBbxa7k6kxP2kJWcq9XxZfFCnFU6j33QKUXWyxQxczZZse8fhiPUxkeDXuuo",
  "key1": "3T8Gbn8oUHkh9PiuVgSTdTvbGtETgA6fcyLYB7e2DyL2HiUtuyqiLp5sDhdcGmxLjryTkyqJEXJ81o7KkmkUTrVF",
  "key2": "47JAvNfvGtYW6YwaouKpNVsMUQ88LyiXWm3wfVhNkFYY8o1BXLmZ3MdF8DvVxUdXb7MJq2e6yeLnGj8wj5UzWRG8",
  "key3": "3uwBujurtkYZX3PQT2Dmgt3Sw2my2tU1XY6LczqyY1WKNyYZ5mprzNXDcqfEoiuWjj8F9XRbsgRi8Sq3rXFtJPEL",
  "key4": "5kABnuo8fTd1FQpuJYQtxB1o2vm5ALrKUJA1Yr6xCMhA18jFu6JyjcXmCqaadpf9WZrx5uDoYTv2YmP2JsJYEFD5",
  "key5": "4NyF1zgSM4TXBb5VFyLqg7MVeAjwezG5PFFeyHuiD9yLSAHewtQPSNZ5fyrcozTdwKKT5YTiMNzpz6Wm4x8ryfeJ",
  "key6": "4J4Er5W7Pa47DAe5JvizAMQk4NDymCtc9CH9tWffyCmAZzNyECrNDzLXVimgSzxtici8KHySNsqMVhuYBEb2FvAm",
  "key7": "d7rhd8zkman9d3n6wyZNcnZ9txx7iLo9ZHrKCQqZNbjv7MrYfBnnLZzddmLo7KnzgSyN5nufVCozen7Epi3c5qB",
  "key8": "4bGPWKKbSbmj8ipjEr6G1kNJGcN62yGkPspHodT5rRtwvy7giWXs2eK3Bz12ZPgDo7T4rnMQ8kxdd7r473A2nekH",
  "key9": "3qcYLPtyWVAJbJNjPnSrkY3bGMe3v5Ngr6W5AKNyrWqZWqXvFNaKfzRBkMP57SA3KnL7vv7M4xEtm5hGLXPnyqkV",
  "key10": "2eyyh7jsYFEsqYMpbPwoNYZiu52oTMpqsDiqea9iVPK3BrEMVv4nCxZm6irZhAcdL4oSuBV2WnLAePPndFimEQcR",
  "key11": "GwT5AuVp3aqigR9YM4BHw4dJ5JuGLW7ti8UcTzWVASdF6UkjHRd88sVuLdojg7DM33am6WAU9SSZTghXUupJoKb",
  "key12": "2ThJXbtA6WTLeDkaPGxq9974bok9RfoV4PBmyb27QooZkGzGoM6Pcesa9npcu696qqnWUF21vqiaq3ZpKop8bBvH",
  "key13": "4DKjTnKK599wTDHdHrw7DuUrHGzhuWsBcZNer8HEHETiMu2upKvHBLcurT7mJ42AMNJmYe7CAt9ZSpfLC5SWiGgp",
  "key14": "TYczu78bhWkHkQ2YT9qWa574jV9UkQh1Eixirb6cBo2DgBNJJe12e6pRaeepLaCkMZM8JtHr1CbYxaEUaKynG8f",
  "key15": "37CVdmYWQXqVqmoabccxoh4E2dAS5YXuy3oXhTJmSY6TmpPHJDd51nDY9YrtrHq3P4kb1ru26afJ1PXRZKVyL8xp",
  "key16": "6oCUfwkXRmT8FcD8SEPjaQWD17wWVu1hzCkV2a1rCDfC2XMzLmF1jWcVLvAQp14pjPB19DerpMGhwgM8MTXVzMQ",
  "key17": "3JJnZ2CAwhxWC7HRhJPz48uzkNrwSzcLHGXzzNXvs1yWwywPWMoaU212wpvhj1ENG8QXKhJMZp6RTmKqxDggsWfT",
  "key18": "3G9EPhSA277QYtBHwdFtH54CPYFbwcs9MJSseDKfmSd3mfHyvAQuLux2sPNxt7TdjWvkDGAxhEF5AM9foL14ChTv",
  "key19": "3WzYTqr9Xo3kdwUW5BrAarsGcyqTHDonZLyNQQuBnkQkjGxz68XR5mJVBvU2e5LCQBb3Lzf6tDsipYzyEGEveTmj",
  "key20": "23cRiu6dLZxmr7KB6UfijKRnCZa9WvnHWz5i4z8WCmAreFkwtBnYAS7GQxkaQJL9UQw4g7217R9hXPAQqV6STyBk",
  "key21": "5L85MmaRxtXfhRPP9mpuKKQkQ2RwbzLciXh5Ah6QxnPQig1zWypo7MvEVuG1fJ1ct5c1N1rgmFryS8TbbC5cuTZ6",
  "key22": "3eXAa8fNbQAogCVNYYHK2iyf79xWQiKsxgQ67rCuXff4wZzjrAkGEwFSQ79KB1WxpszmHmRXowEjX9dxnrTCcUA5",
  "key23": "43YPH43HRVtpC8goF1CZL93keTMCVvtWg5LPZ3653ry4X6H163xuX7Cc5hhsC64Ta2QG8xocbHzCmTk8j8EESg8M",
  "key24": "5mbwQjguK2xzq5pAL1NKukQVjdZcXXvNK36tFDE4xGn992atY4GGXczZFTrrCRYqVYu6biAHBXPpVBfNwucYcgEf",
  "key25": "2GA4nfjzjNSKXDZFRfkCLVJkGizziKim8o9mZW6VvxAqYN6WsVqBGEAXLrbTML5e5pfVF6iw9sJjwgs7Bb9XdLCW",
  "key26": "MVnLvYewKhtMd9qUHfSxZbvfV8DSRr7xQywbryDmEVS663Vs1DwrA6qYPcou8BHdzaNEZDj9fgWGCCo4HVVifJo",
  "key27": "4yC5A7dFBJz3HeTCptuSKctsuiUjGN43qHjYsuN5HgUpQxxWjnjkaonFYcmRUQKqZTPEvs5htGnxhirEYrYdj4T2",
  "key28": "3NUbbzgN6ZC8KYcbchDLqUZ7zYT4Fan2J95rbbrJpXgGezEsLQ91NEpw3PJSjH7d6QrZNgQErBbonjDWpeva1AML",
  "key29": "4gQ8gRK6BopwXh2UmQnGuCuakVVGgp858riGuy1GQViFhPsEWVzckdHSbM8GtQ9YRxEz8Ke7uGZXRmwHBvr9GMco",
  "key30": "3m3NdVgKAfDoDPNPdMdn1jvcxJwSrVeAAWEc4oyoft5FE6K8xtSFwckVuV2k17yfnhDHDvAmXwMpJtrsgbQVj4Sq",
  "key31": "3s1JerVJADxNz7K3ahCLq9qJ1mNTo4aZ4yy5nj3Cyr8q4hwAjoThyJiKG7zRq4Roxf2CJ55fTaVeBieEMejTVXDQ",
  "key32": "4wP1xgUtFNUzgzwBNwUX2bGm1EHZLRfZZt79XShfxL3VbHpwggLCoSeTjW1c4vwnd3EiFQCH31cx8bjePDxJ4Mxh",
  "key33": "3354oAUqwA7qPzJxmEhQ8He3xjmpBwerLLEELzNe3XZfuEaMXXn9Q7gAWLpZKqabAhXW5o8k32avdgenMvHmwv9A",
  "key34": "4YVhZhZTV7Sd3r5QpoaBsCWARi4sVY4jetdwwsJH5PkmRFPiLfHGznwaJC8SehipzeNzKKa6p4iLeoHodK7qBBis",
  "key35": "2MwB98UavDM4DY3BZJzY134LGgaX14dpmXzsBo6TuXYjcp9pEgNzk895ikWZPrxWaJ1UN9aac3Zdn2NWawAVP2Sw",
  "key36": "61qpHQLzaYPrEKS4NP4VyQ6t2isE9jeg7TyR8x29ucadcPK3GBoP2gYCptikNrgsVSMrcUxEQ2LUoFVpwqnYH35Q",
  "key37": "3ZyT6Z9GN5njWyXe3nRc4Ba7LPmftAp8bFW3H4KaRrdAUDXKxgiDhV3HPfd78uVBa5CjC9YLL1qHedq9RBmdVj3L",
  "key38": "4WuxyLtHpXaYo19Shd4MVHDTCy5E31Ci5pggiTHiDzToGBcUS14d9LXV6yYZMBZ3zgNPionb9R8jZA9ixSoB2RNi",
  "key39": "2ja7gd2JvtH5diVL9GPn64cXJUMTK49eh1bsJY6QAaFR8Wh5b5McbXQkmQvVy1nbsqrXbzKma4WvgMG6yvaH5iwv"
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
