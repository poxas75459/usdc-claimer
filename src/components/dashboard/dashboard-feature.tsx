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
    "dnYHREYDHSLQe5WXQFdMCxTgkD4t7BnHzN4tjpzdH1Bs5yJ147xy8HM8RpJCZgtiLFamqUGgBRWexM2JvFZTDXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phZ6C6vWLp3ZW4eQ4xzQB48a7fhKGmhtgJSNvagyJxp38CKejvX7845JNT6PkbHPgnKyRF2qi8Ct8hbM45EmAao",
  "key1": "4RWUqqxSZbcoabmSKnzTLcUKJj8mgregPdwm2cJzMCmUubb9UTkU8kAWWLCeESnzdSP3RhLphe8MjQm1V4z9xS93",
  "key2": "5pJDL8qryZUWiWMkcRQigCNpJVtiVfW3PkEXncPpDQqAPcxp78uXERFHvGhyNfPFnWxbAAxdUeVSFfvjKATFCmYu",
  "key3": "57VhwxRLqgrt6JzjjmaZa6dmkAtoSqjoAUbGLa199VrZDzx5fgQZqMoPMxCActJ2nSYxT4GNf1ePgxo3QALKBitH",
  "key4": "4ZgPiymwydgvJvgADR4gCxtciDZGgSYKLg6HwgmEEduvp77K2krVJ5pwoJt4AmJ8P91ChGDUUMz7kBbgWkYnyW7F",
  "key5": "3R34jjaeg5XVkWDHvkAVkjirTzQ1aYydnEDiqQ7gRqW6isJtSBnErueW7fCSTHzeH55MQFTKcZfHFVLaziFT5ViC",
  "key6": "4qfftGRkFPPcu6nz1BKnFEfvfLEPxLxyjdamxgdsfiG2GoAHERgmDbBweCPV8tnQKoukakaJwDtVtGYCEyVCBj4w",
  "key7": "2XZr5sAWVAUdUbpWoymzv6asw6nwrC5qQCkWT4RrRVkbQj8jwz8YZR7PGeaSdDN6hL8JfoDtuoEtjmNaCeP7Ytgr",
  "key8": "3pz1G8cu6bX6dq895op2H5q4gFZdDLWpBfGrUR8878cqxsubYy16KtV8xJR3WwQ1Jnan1Wt3MQ3NYTcobsVJdvsq",
  "key9": "46xGcLY9GiTRzVySWLmJEjKZ1fHWrTRARz7o8TZn6GTYxKcM39TcU6GEgkBtNghpDRwLa9oU3Vp9CqQAiNRxbGfw",
  "key10": "5s7kwvXpvp4XJfcBnKnMug156seuGtRcnhnbjGbrRmNDBmhTK3e6EBPAWjPS5rKSGgjDHc7icVLx66XVtuFqeu6d",
  "key11": "37wyYujCy7XMhQ9NL2vJ5TusgDE5etytcULf6ngadWAeQtCGm5cGQg1JPTLgYBnUxs2NmQ7rXSicpkGPi6E1gU9a",
  "key12": "2Vwpxibi9WbYG7enGSHrEWaNjgVwi1aQQeAZey16BUTUZgD35m2jnpdtKUPpiqLWMp1P5AoRes2XcxrAjHBEkAv3",
  "key13": "3cHVDXFpowjupY31u423PCs3wFaPDNL5DSMwKMNcaN77DoKowZJr1pHX4DwoGY3UDXTek6weVXXhdvB4eJYitL6v",
  "key14": "3mt4K7Xz3Wd3e68ucLyYEsmm1db2NC86yv63Gd5jEqTTr9kcjWDgkWeyseLSRpmyDAUfmeGNjg4UwB9Q9Ambn4cm",
  "key15": "Wd3SHxYe5QA47SZsavUJJWBqhCxuDppkyDc8mZjo2phqKhfXEggJ3KhMmec5LWwe7jVKJFiyR4X4ktuDaivX9dn",
  "key16": "2vSAS7NJWt2BZsXqj2f3UPTTfTjgmR76uZH68C4fsXubk6AvRDmVL5LnFjmmzzsKzvRfbC8LzZ3sigkWpa1KpMmC",
  "key17": "XPxpNWmuBMxbAFSeukQWApNwF67xkKs1PrhJSPQxLmiN5buz9WvXZpVBSLM8nrWBoJadyZMBueXk7kS7vVrDpmX",
  "key18": "VurDtvEhaPHnUwY8tmsLBUSmAbSroSGLqFRe6WszqssX2SguSqSpF452TXsSh6eG4Y5Y2oHLix5aVLUa6f7kAzJ",
  "key19": "5neL1kLyb4BzxPLNbNLDbHF3WnH85A2DJAJjfRMuidwTVbnGC5uRK4XXeEUeghUsRyjvu9H49MCXC6nz6G4tQgx8",
  "key20": "3JegayXdouCZMamu4uDTx5MiyM5jyJoXsMgmcCX1n6MmeYUbR5P9Edzdh1qraiDYH7UrxQ5cWvLM44uMNk3UcqGn",
  "key21": "3c5Ak3hCiQikkiLYEkiL5WYys8FYRmKNidY3bisboYE1Rn4QaFW3ur65VEuro6dPkwv5UjWL6gpNZdoTeBv7v668",
  "key22": "5om3kCKHGK41ZAzXBinCJbC3jqsMtFKUZ31M1ynAqEUQPhFoBkDHduRgsttUG4xLXfdcTnZcgC2fo6LjXgQb3TrN",
  "key23": "fTxigKrPb7k9ABTiZgFQYLHySCRi7RAx4QTEAbJLjEEHYibG365H4YSNeG5DNTunoDArPTQnTsKKGnKKdCo7PjX",
  "key24": "53Ew8C6MuXawen4RSvtb8ubfsGdXvxSn76YCkLjzM5ZL8sucm7gWCpbMYwvyX5BDPQ92T4H5HNdU5jbyxnaCzR3j",
  "key25": "4M6WqcuEpJZCVRWFrHUA2y9VKg7XRYkLjJRyRZ2ZADRtSM3Ls5ugAK7ujR2iFHzh3xZGDQiqQvxhAQT6VsHNGSRF",
  "key26": "48y2r3ouvYjvEgmQr4kFzdoobxy5epjptheib1yzR4zQsaUkxok3Zj45Ab4h3S7nHdBe8iVjSayHEv3WtCJk7feX",
  "key27": "4F9xxeQxSCuk95ape9NXmJv94zGMq7xnurhzm72VW8yEnbufMntRf9ZXWHqj9kwGDCiFeyLs8T3iAqbLUucWK6Ti",
  "key28": "vhyBumg8ZVqNPJDGuKHUpf6k4AzHvCD42hcf4kEcfptrwn4NF9eyJPsTG7x4Vu3xiY7WsUqiWSq9WNYYEnyrbTS",
  "key29": "tAS2sSwTCxB52RCS7Kw1Q3SewYh9MwhKSTAChLb34VuDtzU6uHpJy7ZAMJffCB1TvZqhij3YPKtAnboQmZXZjCk",
  "key30": "59aAiUPX7tsGQTBYe9Nnw5sqsEQ4XDW9pr9edag4jd3hsZe9j6Tvi7BSVgni3hgt8G8MN7t4TJsDdPdRKEdvngmL",
  "key31": "5vTWg444PSKZUr9YBe2F2zczW3LbYpZcsRaBLMUZ8zdBjvNgui3dHK6fSHaE9ztFgUYMnM6Su3acQyjavBkoU6NE",
  "key32": "5eEzxD71oPwu5yeAE4JDRhjTrir9W6XJqF4Cs8rcwF1JTe4tbX8KwDjwg2eNNsZjdp2c2LypgvndLhbTUhgZoBtr",
  "key33": "NNDKANKfvw6MY5Vmq6YB94D64pAfV9pG2Y61DRsTQ8pNEYq7BDsjhrWnXwPHR74vFmw566oy9DJNKmZvqebXptX",
  "key34": "fdWS4mL4WvWVX2tVNKPgx89tdSKfghQMPXFkbsoyXfpxsrRn5nToMY3W39TbWe7KCCxuYShjXLWLp77Sbk2Syum",
  "key35": "tULJzfynEVdJzHytYnf8mWjxktiQs42x2cBH5tbxirGsyPgNCRsBYZEcTGNpYAwZdg1VGRwywt7pze8orPBnQx2",
  "key36": "zmw13RikH3Zh2697jozCNVD9n1D5ysTEjLvND9yuaoLf59V9v6uK4mRmBA53f558MrGmUKDYi1hD5HjsDN2AfCJ"
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
