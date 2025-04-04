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
    "2bCNkQqcsVVmmYJGmGHhQ72QJdtoAxhasQwceLjDaaUFykPouwYdSCGG4N7p8dWGp4ni8wa2Fj8p9gi5Jfp3JCoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWxX4EruDLAMJARNQ6nYEDazLWCmKBicJAY9U8J1fWKUL2mVdrdDDtnJae6jBdvLdmBCaKy5iLhchcuQMrQDVtf",
  "key1": "5BqUNGBdQnjQj2jZkP8qS8oonVXwpqnqcxru2XrSmfgk8HT8o9MD5qZkW8TDNzSSRsnmTsT7d34kh7urDNvADtY1",
  "key2": "4LcGjoX5jf1A1sEnGSig14s4FWV18YDNBEemJUcTR43xTZP2aLPYD17NtmY5faPVncgHnGdsAD9reCTGbe7t1oKS",
  "key3": "4LZ5UqhGTZpjv571Y6V1ZGu3dnkyHPZaB6wHSPUzRTgpZmNnNCF3vXXQToFQWZgvqtuRekwn5Q6kn6H31536NmCc",
  "key4": "52ybaKXBhN8KpYp1PkSFNS1amsbQvatc5kYM8qE3oESG6ZWYRd5tgAwxqvpTTtuZ8dPqBiPFzAcDAJvMyrpZ9nZN",
  "key5": "3bgCynkaYQfHXJhRdMkgkKLRXzzHLsocyQGb8e2jww2JFpe5bF8RNcsPZJSDdAi56Ro4PmwcVLHGAoZAtLT9FfLw",
  "key6": "5LHs67AZdBJa5AHs1p8tuCB721KKg5p2bX8pUJwLetzacTM4hcNM4XKBEWtaCZjUtJAS2RFQvaCEq1x6MyvRfJcS",
  "key7": "2hKNyGFacvAnemJz5vryCeXWWSiswBnar2ZeSpnZfgH6K1Lp2MuavaXJguJ6aeBa2vM5ZPeuTShbYdMWvradsfce",
  "key8": "4EQWL9dgNd9xRFxiXbdNi8wz3R7M5ZH3MY7rPhar5MQiix6KKcYT1VGxznGksBhQyj3YGyffADyacXgQJBKrE1h5",
  "key9": "218aBcZwSegvfUUZ2f16jNpo5Z3GNASw1LQg4EzG22WDRUsVccCiuPi4cSjo4ikS4PZ9iRxexF2QPN6XtnaJbmrK",
  "key10": "53gRk84WaCy1w9vYr9gq7CuJE6Qa51T9UAFAYzokofh663x7t5C5im3SEtztVQQkgFxnb6BJoaYQL1ZUVVHCY7D1",
  "key11": "335yJiri6vRdZbr4QxZSPLw4g1e8WQBW2kL5AoFELq8MpNZFAMLnJayesx4z2LyYzJ5HJw63m7CiJ9ZFa8mPJqL1",
  "key12": "4CPc8optL4VafZrpJdGFKU3ofQojW7GZ8NYkf6jyP4ocbxRMEe2z4zdmY3QumM6vFQMuMuKdR9iDZftVSjMcL3mD",
  "key13": "53VEa3FU7arXFnU9uCb6ZyPsdPmqJwnjhFzQd7nMDNTrpXpXvJChTZ4k7XqxutLvJg9JsycexSNfbaZR5sUqEbcw",
  "key14": "5GPRcVQyhLMmGDPNcpXjXSQFwKnHFzSpFvFHjkHkpwDEVund86JUPBrr11y4MpzPQrpN6hh17PFF4Y2Uvqz9CchA",
  "key15": "4W8cFotZeg5t4vz1FE8pQW8bjCfTKpkAXM6dyLMXXdNgtLgM5pcTY7M7xGs4PRdoT75Vzmsder5pzeL4ECwrUHaP",
  "key16": "2HDzSTNqXRLkeVK5w7fyMMco4TpoMuXxF7wxGkei919orhXugUcUaJE6PYcEaZcnBJ3nHEWJRX4iv39jdvBytxES",
  "key17": "3VUX59qVJiTS4SeJJNC57xofmxL7ZBTKrcekfCBhPJ9nkTmz78qKg7PimsKpAxUtGSbu8ZYwXP8poY2pnPbWrsQx",
  "key18": "YXtqBjxr5tPKoCFvPPKf2YmJ1ztjVefDdLhc8T77S31RwwkmXv8YFQonLZyCdDcciSziRSrC8Vqwhpncyu99CXS",
  "key19": "25gBrumUd63L7W92dUaHcbEfWDDR5wYxZUozaK81WMi3ykgUQ9wvEwpAcycDBZXrRRxnqTUPtguW5RURrbQhr1sH",
  "key20": "5QRkuA71K46MRqgHWTSiMMmdU67j7hHRvM1sGUSVaoTbTPjjkQxCvwvYMR2LDUYxAsB28JAeyqFsZozNKqM9z8pk",
  "key21": "3RS9NJjwc6FXxXY9Hy2jWjzeLFxNGWdwC5kfQcKwwHTo6sNSD6yXb12yhcEBtVLNqJ2FTWwk9fGvqEZ3J1X7eCW9",
  "key22": "2cWdwa2mteUBWMffG5wN9wynWNSD9fJ2fcWYweFRnrgg2YPie8vL8vT6yM3pygi8AKU5XiR2tPGBvfhZGTFHemXm",
  "key23": "oD6ut2mVdKTtgyGiN6YHJnSu5pD4fK6a6uu31mJxaXSqTFfBwnGiXTvxBpZDDmJ9wiNKY2jGxv1GRyRGshqx3Vh",
  "key24": "4i2vbSLS6szEmmMPG3YriFMH8atd8VkazByK8Vx71dWMDxrtgYqECtR4FzoYdsrkZnpQVPsN3Gfb3TUHNpgbHnU7",
  "key25": "2xjUL3R6BhaxG1Hv4AZ4FjDkpTriKgXR9UCraVALknAN35opjrerAvn2KtwFepXhinrhos87BXMKKJhvgqhvmCny",
  "key26": "59pxJH7AdLRhnFQkKYhxT98G86Wwz4RA4gKGTo7nWtwdftS8gA5htMS3cv3qDHP9hCcKwkr7DkaVH6Rfdwg7MFCE",
  "key27": "3qSNDf8Ar8Nn85T1q8Fxxf35pY1t5YkhSEJ2ChsAxjU7bzVYNKKcV3JbuDSCRVtEKQ6Lzo7S66Uz43KXxWpV3hzY",
  "key28": "5RFspQbQUVFTnU9ua2qXvVWC9Xu2jzqgENrXHUbRCjmjo7h9BLFYTGUUyTJYE7Xb2MV8JZPS2NKKDQ81nFxDphgM",
  "key29": "2VrZS3BZYFmkYobezP7WVHSSPAzaHh4U4D7hRsY3cf8mQTV3PxQtLNVyXUPRNmgf6GX4HvLVMJu1PRM65QAiHU5J",
  "key30": "3RcuCwSe6iEv9uCibS3fXvwYZB5xJ2VFVVoc4sgUWwvT3iwBbaZ1xvP4ewoCDLVxMVtsAcE4xcmw4rLmY9A9UJdF",
  "key31": "57P48nrrL8A5KDaq1inYPHXXvxYFCiMWD3Pst3uLkHedrV98eCcCKDEbTsQ4F8ddi2L3Xc3QtpUN59XexEa493o9"
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
