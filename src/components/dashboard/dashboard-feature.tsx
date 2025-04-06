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
    "5XJJyugfYWdB7X9ATXCWnXNbKhCS6xiyP9YUjtXoj592mUfam9sQJyWhA6a7ZoKrmXZ88LXWwC27wHBFgZE2Hmum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMjAP9b5jFS945vXdAH1msdPKBPEg5QeunaHKgxG3LPZyZdvtrtTUG8d2CSnew8cASkYMZHj7mTDEw3BruGvtdZ",
  "key1": "4qYYtAdfoytZ52F9FCoMvLvMVju9PSPtceX6Ek3k2T9TS3d4gYNz2rY2FDR3KowZyZjnJKPPmtjfYVzewmYakLb2",
  "key2": "49JfnpviDxkRhy32c9Jj9CFSarE5DYsQ5cWCkHWFHWFDuCDGsJx3bQPXK6hdrSXvCyUQ21wGUycwyNo3kFQBBQDT",
  "key3": "w9tTRbimqvAr2mNc6zc2dqDjbRZ9xTDQorMze47f8icuLBK2YGPpw32dHG6nbAyjDY9z3RWorgj5iDt4yeUA9yi",
  "key4": "4GKp4GVVQgjRQ6MtosXwWmHiUypcCApb3acmRttxhDB4wyybE2Z61fDpJ1Sx8mZVTGuPczLgEZsdjteGXpXKpcjC",
  "key5": "KA6RG8qNiYJYkA7hVPfAh73GiEsVNPRJVXqcXUpajwEY8gjPqJxgmAVfynCjnLMknW6tKDQHsapU8aRvUz8VVZC",
  "key6": "5AbZzc3sbbV2aLiPYbuMh7RPM18X6rX8QApTwu1dXdzi2NNVbXxEggBSDPMm67YLYJVSmrjm3ouahNVcA5eRV27J",
  "key7": "mQrXNmSZXqebaVQMSx5L8wwzd7q8tbutE8toFKVqd2ZTKiKzVuN2X5DKRcAt76E6qPsJjBCNzj2r4LhVMLgvUpA",
  "key8": "5Mvanc9vV7NK5FgS4rxsigZRj7Aw5uFC8wKB9Ra1Fp29ibbLFFJ6EsJ1tYCYjaMLAbfH7JRSjTK4Z9YWPvDykUGY",
  "key9": "58UDHcwTWgdMTaitUnsiVFBf56RFsgTSrBCY4MZDMUTTQhteKxzHDrkegujrUrbtcpqb3XdRCTW4TojXKxEL6iy8",
  "key10": "JsXaazCgmsCYMv3yrWYY5fXkkBTQ24Va9YKrWpmdiirJ2WjAZXWiK4WAPEgtxZ23Q3FJN8pQk5k6Ztxngjs1qRC",
  "key11": "3h5YUmYHQFTT666JJBM3yokuRe9b6E1ccnUjcMgM5kn38sCxPzg61j2JnsdE7YP9W5qQoWSddFn2ncZHq6kBS874",
  "key12": "4w8644Jtoq3DgpHjjZQ3X1riDSUWUrZ8viGtdhBQ4BxXmLgNtGxqcQBFJnrbZRMovof7mMUQq79S3D1MNd2FAMF9",
  "key13": "29KHBtV4AmXzoevnoSDG9B5Vzw4iM4V28G11Vs8fst7eCWQb6VdxRmhieAj4bDzJTFWGD6oAwmi5yx7qRXFFr1SU",
  "key14": "4tKw8ozt3nskoiEY8PHkBk3iBsMvM4xXyov3qVwkXRaorAiMqAiXM7cAQT9cm3B8DxUSzKxpc268FLvS9cW8KAGq",
  "key15": "4Qqny8VZVF3yrXsVHkttpCb6a2W8kL2KXrkYNmwX65fGJVDMf3HgDhznPF1UgwQc2C4Gg1BAH7RZ9XCfCoBvyo97",
  "key16": "2BYcHVdEQJXNxjjct9u8NVjxGzAcBf2bxWkS6vEN33yoPKRbgB7yRVM7ACCnqbogpuNqffyvzWGTMTedsgHkZERs",
  "key17": "PaT4hG5C1ar6uKV1wnQSvdET6eiYSJ2fCfNZouD5kkCVTp4Yuhf3pn7oaBqxBYpgFfNcCHGESj4mAQKA2tJfLBC",
  "key18": "EgwqxDjFDk8tJZ4y7nK9WyNj59gq5QzsyoTUqMNGTbaXfTUhgNcWvchjBPs4oc1LGunEYhqjbnn1YFwXhhkp9ss",
  "key19": "3B4Lmvdh1ZH22kbqSRkzxrrRunJVC3pWSWQAzX76xgJuYm9vRKF8A9X7DtAb8mGSiCuXBRYwUrbnYgihwh826gxm",
  "key20": "3gmjqLPmSdxpAPUktMuNXXHCQhFqCB5MxuSUapiruS4bHEnNG91Uw77FUY7WHn5vjBHuNRQcUNmNpfZ631d2L5Aa",
  "key21": "4VFAsUcp7M9r2kYLgVNMAx2CZiq69ukj2vmYZTcmZFpEojaqXbyXapSAbjA1TMQBJznizUDoFfs1Va7ZcXDXHiu",
  "key22": "665CP9z3euYmp79MxSaTGHtUc8KNFYw6Fe5d1Q42cBpQCBGGptc2BHZnNisrLP4rYMD7F5PBXr3ZF71ZM6W8A7pk",
  "key23": "35LuGpNXHV1zRuCJ4Rf98cFGdtuVuwihvZZVivGKEAqnhHDnDgV6DCfFEPXKc72aTKMZboXxZUNiabCpZoxqgrRJ",
  "key24": "2v4odjadBBQH9jgqxRjc1wiz5w63Zw833HZGLkiGy5bBaAHiYa55LEp1DqC63axLkKTJdW9AAkyMLqvNewHQukmR",
  "key25": "dnpLpJhMLTEt3WektsiUesiQRvqnnu4LqyNm4Ee5bqy7e9U3gjZkJxsyoHMHQEoqZWiVPU5izZCCgnjVJoqzgAa",
  "key26": "2HwiU2TjJVVERVfuAqBWhcu7N6b1eYeNb3W2irvr959WtVrY6UuWhCVdxk5PS949qXzhWyEQhG1q7Ro9mPkdAfsy",
  "key27": "31FD6dhpc7u5AazSMkYd1majWwAujUpLaCHc5KrW4WkTNTBhZHXYjZ2m8hq5QRLhZfmG1HqiWyvbdW9xPRCxvKoQ",
  "key28": "2fL1ivnnkUZMjLREnFjgtzdXnA1P9uTnLHCh1E8jRZ9fZhg7tcfhjg8hKGWEZujn2qF7UTUKBWQgqV87LdbeVtVo",
  "key29": "KwdudFaMiEdqerCmH4rhabjb9fhTYgPxUi7efKYhg9KXtm3xMakPgFErhmwUJ1fxVjpXP2FdaHmQi9wpg1CUKiE",
  "key30": "3QQs6FKYKR8z2zTiz48LvFyTTuGyDFV1GfA8bXCk3Hx6xS7mxr6bHXE3eTdxa29viksG9LpiLCUdaJrmdnp66g96",
  "key31": "kxHuhRAV5U7yEkgpcfTmYNAfU3Db2K8LX7t56HVDoei3KKNms5KNsqgNWSrdPsQJ52WrHJW9ZMnyd5P9QiVcRaN",
  "key32": "zrnd5agXsqzcmZeGSFx15aWwzDg1XnZKFQ9mghwFKDEKxUuXqZrUYheES7V8GWkbM7DEtZghUJgLZCYGe6MR8qS",
  "key33": "2h3vo1r4Ks46zgLeEDCqYtJ1s89Gh3fKCmgwgggSfEA82cUMoLHmcf1eFKU1rhFr9bLuqTgwTPg1Xh4bF6SK8CAt",
  "key34": "2jvTAKzm1fuYVXSaUDLAKbYU8z73DaC1AfujG6uv55mptdVcFg7fX3VskfVqRBsq8ZC3Na7LdWGhNTJso1k2tuzp",
  "key35": "4ocinfpHnQ9NzrUiMKEv1xwf1kLPuhMiqSSd1BfJfZKb9k8294mXhteX1znCQ9t1fU7srHvgqr5jdxzku4867xre",
  "key36": "53bQuvT6Joqjs7nYonHE1tbxKbEvNKLoNEG4xJTSDkErfB5uY3hruQG3Y2RJPbUjnBUjiGWt3LYLCVpcm6VdPScm",
  "key37": "2dQb2g8PtdeLokivs8qvzen9PU9n3djr9fRXTg73xQ3NcMErACkAZX1zKcG39cKhLbgomKJGaRf8aov2zJbu9f98",
  "key38": "54FwQyHWS5He6Uhr6h6F8jVokfTCRszmAruyaqHzQKwocigQRauVJYAeUsvThy6Mdbkgtg5DhWj89b9LXfJQ9KuC",
  "key39": "4SCfqYe2MSLYBLgePG6Cz7hPhS3FcwXJRnYSFT5jnp4YSD1CKigxrtwE69LhypR3MV7zSRiE5cfZxc6gmfUgQjYu"
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
