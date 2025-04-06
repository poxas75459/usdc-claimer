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
    "4RXXLZQoVwLDrz1U8h7tnaAQRtXkRBybdLPaPYSkg41PmFoRVeNc9uGdc4CKnur68xe8Usmr4ZJ3kKm517nso9P9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bHU3uTeAkA7CKKdrtTHLkBECFAFTCVVPDgaPrzZVEts3pP9r9C82Y9YPpAWrJpR4358pYBTHBadhri6hmyRhQCC",
  "key1": "2BuYHeX2MrdMYKQGcmM7Eg6HXws4sTfkCgAS1mwHdHBH919VXZRHoSmM5sJU9JYhyL3T9UyZNEzhPSVQdSbxYR4s",
  "key2": "2mfMXHX6kgHoh7qGAscBqiccvi9JwsXMt5v98G3iBijYh4C97S5KoLbcDo5RaEGG96Mch5jmxM3d6KVQ29dfEqSj",
  "key3": "8TeG3w3Z6V9vMx1HK5ZV3rdnNBBchm6nDg66AJdUvyzstG4exPzQqc4HW2L9NW4wsua1w21ySHazNZNSguVXGFm",
  "key4": "3o4cywzN4UAHnrLCqyb8gnLN7zpfXHAngH3K32NP6sSCpH9p2EoFvrN1psyRDQWA8TzDUZx1sUsmSTfbGXWxfR9f",
  "key5": "3oEHUK77d4ht2yyG1y5PvTN9Etm9jVtGGApMS1uBYgB28WyTkwQB5ZsWoENEaP8To8iaMGKT7qMaWiyJhqDYxQjG",
  "key6": "2Rjbroz1tCrNbHPr6bA1iAk6sw2ZtQLoXqjMxLpKhDEPC1otW898aizLNmeCC4V68siJ5AeVCq9UK8gt7f5JV4v9",
  "key7": "3jwsTmyaQ1bQznhTHTLdjDFNGd4ScshZy6eT9C85L3YzYmfzPxPWZ6HtTmtKm72LB1eKXXyeBGdCwJs91Dgwamh8",
  "key8": "5ag86bRkM4NvJNJdCc7WnotzkY8BXHN1RyRKchq6GtujTeBXHBPuQAZRsdjbFJyewj86RWdGzhkb18LQqhsUtiJo",
  "key9": "3qudykRu9yXnNfiFpdzqqG4doVFeTzqLjzKgzQ4uJa7vS5Joqm3Ars8SuGaH4qeRLg35kj22Y8waV56yt5RCjNFF",
  "key10": "hgevX5Vd2JdwNMoqD2TWRD9kWCUDgLLRh5emHzesUXkF8MQeZNNCAowMS5EKx9HRKCm5kjNLgBWECQw58otkL4H",
  "key11": "2PLirDq7VeqnhypTF7eUqcBcZ6ADE9CpErAk2uZFYqjwJLC73h9munhVat9kkNbihB97kBjAoXdB5yPm3hppkYt3",
  "key12": "2eDVWFN9xXUL5EXVDZYrDAsTLH6MEEUWZMkQCLuc3bbDbJMSeVgbJf6RsEwJxWTw2z3hsK6PKG8RbWTCtkvJizgu",
  "key13": "3nGjam2NJNoRpzVeH2cHmVXTgQbWUeKcp3VV3kvMc49jQN7siqXXb26rnVSYtnp5kHk7V2aTJyovx9CtzZswvAxu",
  "key14": "3NbH4HQEfH4QnDC9ffjVfYRSnnox8roDgTqACL8qKMkL4GV1mNDeX7Uo2Las4ggb32L97u1Wee5DvaSq4EsiaMyj",
  "key15": "44a5ufcBavE2ecSqPjcJ3tRQ8bwWWgVTQichpDFbqvMkg2fQhttWNsFP2us1NrHjsErYzzYP2kjrWqbQuCr6ZPoi",
  "key16": "34zJkT8f49vEwjsQQF7zmzmAFFjFWWHPrkk95G4a8PWvrRw4Yo1TRhTbj56qttxw2XrRi5gmU26BFyrPHRgpmFvn",
  "key17": "5m3cKnvALtBhc9RicZCL46HnyQ3yx3ybJyG8r6NePuqdudDq1ucLcdJfjDrTmtVJfLJq26htA71QFhFnhxMssDCz",
  "key18": "zArn9SbU2qWLo3aBatVMuiS6nykoUMSY1oJ9XZBS6fHThC5G3uVRr2TiGzt7DNnzUbY97L5fF2qs2acW3NtCoDQ",
  "key19": "HCZgRR61yJUspi6eFn5Z3QqA8DU44Hi86rmoN5L8eYq9aNAZEUhLDcvJEbkeduzAuJN7HPrDTpwqkPXvf5DQLPT",
  "key20": "d4M17Ld8MkExkBef37HENcrs55SErtbhzfZ3NS4pdsibAR7MMRMAxFcwSZjYZ2dJFGi9rJE96WZhoHtEfwjPgQA",
  "key21": "36J7Zn5avjJF1Qc1iohFXQJKGYfSJruz5epomFiTspZkc4pBBgvWWSteRnpK8fhT4rx5AFWUr5rUWM4Nb7ZL5wQB",
  "key22": "ww2QqiBaGScCFYnLY7nP7ydWewArHqPBh7wQG7vT3sPktEXzK3wRuqetkQ5kP4yXLmHhqnVAGHjQU9Nt4iome5J",
  "key23": "qpkB2YDfhYmqM8Aciy8ipCRgWqaWjhXNw9NADLzjRBg2hnhsxTwPxBnHzHsCrVxTodwqJz2VKo6TgFAPrnukEMU",
  "key24": "4e92d2bfbNPr5zbLisSHGskUmJNBMYMfryv1ppKUCrZYsdjCkCUDKPozz5UaPFbrcEQiSfDJQNNpypPZWCH1PUmA",
  "key25": "5GDejUEDfyghkdaMogQtoN18c3NJzsun8jBxfdPW52bXY1y8tHxhNrCb9Jz8sm42rLoZq4XaNFRZMbPtDyEbY7ZN",
  "key26": "5zJEsjWz7Kjpp3VnaVPPkHU6s3Ugca64avGgL5uPJWHGg3H5adZy6NtFU7dmaKSjcHkwuC7Lpqgnfs94pig9agYg",
  "key27": "5iNB8QHnw6LWKWa7yWDr6ZP72MBEESkf9qY1baw3tPQdF5DrwW1G1G1qjsQUpG26eeefMuBJfxUdJBPoLBxXVQUB",
  "key28": "4zZis8eMTDp5QNnizSJLvziQ8eSX1WRGJDUoKLVTh6JXC98Ugvtfxg1CEWFvx9e2mkF2HfHJwkXxrWaCzZaJJPua",
  "key29": "kPLCD7GFeUKpRg6yDFqUtSFK2or842xqqchQEwd7QK864uKZVrrBg3JAvZdhhpnuwC8JmrKDjeL37fwobc28QjN",
  "key30": "5eSNdoeGC3fQuGSpnJ3scdF5MmSmE9WgNzhWJygDnpYxPMuNnzk1XfHJp3AeduJg81bNagKfYcEkeKqqSsZjGubC",
  "key31": "Ra4QRSUBBxv3uceLXiVfxJ6d1aCJ715CcscJQaHE2DkvUAocs5T6Zb7Z18tkC5JxagaP4esq1uptV6idiQw16SG",
  "key32": "4fTKtc7yJLbEoGNZYurY72uoVJxsRogevp1K5UUALTEjS6cu7r6VnYtLsCzYmkhUExScLJwuwtFyZmeLzy8pujW6",
  "key33": "3GNsiecuy83SwG9WUTtsBVXdeyPx79dtZsUtAM2LoCY7YszaZkb6Z4AL61oCNyLzeCL2dTRCZ9bcCpha8szF26BA",
  "key34": "3QebCK55qJDxkHDxKNSEE2Z7Eea9FdTKS1hTjHy2QKuFrPrjN4rb6ZSwfCp5ZiXXt2HohqKwrvrPV9wLemWyjaFp",
  "key35": "833rmih87Hu2ifuxmL2vMtFmV7Rce3ovEer9pVTTfFHmsM1xjhP8LQ7vW2hTanyPx3oNyo6mVcdczWQuE4Nt29b",
  "key36": "2QTNtQQGMGrRX1H3Hh5jnhKhk1oPWmoLVUUgoqEyGX5D6QEqjBzX1vPDF1Dt7Z1pXVUBwnbmDnbQX3jHiTqfaZnt",
  "key37": "4wETcP7ipx4otk13Yz3EJPZE2boSeemo1aeVA5yXrYSeuJoREFBvjR7atUvr8Bxd7QFL2CXMys2tLaWpi99eKeB1",
  "key38": "2Y2pFM7A6Ev9MFuev3RywsJhBxJm4Q8xCHjx2krdZZT4vuKbe39BZt5omZjaNRNnskAxF7msdQM4RWqnw575fVnx",
  "key39": "5D6mNTR8nTAoc5g5yT89pt8yDkuvEQCZbXS8aRRGHAErKftToQqU4bqCt5ZEW2mdMXLeeX9HDX6MmpbxqBA5NPUL",
  "key40": "33wPRGhRHDcgxbXbXBJ8PVjWQQ6iKEu1n2TisgB1ddNu9R3EdhTv7segk7ohtxRxqH9Tb5nWUdzkDrzCStdv4Wdd"
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
