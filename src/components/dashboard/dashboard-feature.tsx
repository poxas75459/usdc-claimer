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
    "2QEtmFitipBJQCM68L1hNPN7zqbcgDC3utKLyB71ySebyAQCQ293hMNG4qxpw8431drWCSm26tzD31rHdVYCtsz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeUWVc45DuXM8zGFqKD3GCMPgyqwfNhVyKnBx4Y6qYDqste4mXvpb1vAiy8GYraYKwkjZfAmiALotkf491u4G7u",
  "key1": "5FgZdPQiXK632AR3dSyAmbxhAArs3mHZMdX2uwSui4pgHC4bdgvUyqMo1pCMBLbZP9kqVhC5Z2KQqs56uXmfrv8G",
  "key2": "665233Ct11o6nuGiGhwc8trsAmYTTiw1VYD6iwLrniqe9xgqEP3p7AkjtpKYT27kD3yKxvVvr9ttzr2BdzkPY1ND",
  "key3": "4CPTRxo2rybyiecbaGUqjFH8Njyc8UuBbP1GFESjbT6j8xNFZgGLK32aujTb8u9HWc2G6FVy94Bein98XCMUEfGn",
  "key4": "4JuKAPyJBX7NzWNpDE87LMYH7MGuzvvrMYuLCnPcqFaGPngQVxdv9FrK6GuwtDQTWNwpmM7Z3LAk2epdhNSSRaov",
  "key5": "5XxijVo1Ft7BXKH2sm2rQWUuiBbY3UiumzNMKpRq2HqRDCQ5qfV4YjRNaqJHiQiNyKk2JgzhFnDzYN2aK8XwxncV",
  "key6": "3x1UueamZdDaLxAqQQg3ibyaphLg1wtvhihQwEZ6FgaCLPQ3F4AcJMus2iVp7nphxjwJtRp9pDde71Xe5uE7WLQL",
  "key7": "5qXRVm2K6kTgDQp3sV5pXxB1RBnYUQQymayvTimrvh32rWYjTokZjvP1VAAoSjvZ5dnwJVHDR6rYaUmoDVx37FwC",
  "key8": "2g1pXfYzn4iwTmjSPohEoJwAwmMJwXpi4DLb9ifsV2U8NCsE8tsEhjMfykxfpAWuLFvfXnyA5gpaRzoevKmXgy4W",
  "key9": "4H62ARPy2pmqukTqP2TataPJSfC7dRL2YmJXbHHv4oPBMTktfdEPfJ3dLJqdS2Ru1UVf5SUDcLcZjQG4izAxKc92",
  "key10": "5433DcCgfCdgiJEYP8ZqPqzS1cW1HXAJFMZjtF1uXBQuaxoCojsLyqBb99PzvsMnUpUjwuu8uqDH76iSwcQ2nuUn",
  "key11": "6632wTJMat1XqN4TGucieHhqabDhKidUgth7huNx3pB7WR7EsfZ1rUkrQzdNXuJ6oZVYFbrPDoGPgzs9Bx867emV",
  "key12": "3B3mfZkCHN3frtM8MuhX7muR68A5LSV2wEKxvE7ND81GECXDo9PAUreGCscxzv9sQbkdhf8ZH8FiCdpeWcKDvaf1",
  "key13": "4cpwQxGYe1MoSxDeweHxjaEDXwFjmudroXiC8GkVDYgY1pMKCNNFC7uvJaLkkpm1T3eDUmre3LmEYfb1gNV1Cn7a",
  "key14": "4HyFoR3PjxpNQhufHq9wPpNK2agCBskGrokAi21uzCDaoXW5y6y7ytsjN2UWJAWtLLzN1xtjAn8nxJCoTBTRhyNU",
  "key15": "3ojWu1AgHUUH7Pw8yUkbWt7v251HSJuwtZfNAu1Hn4SZ493qy4uM22nxXtdsEtic4fjKDsyq2DniZZmyDaWTKAaK",
  "key16": "3yjxLQB6YY1GLthokhpoA4VJ7kpVt6NoWSDs8LgFzUtQja56fV6362UBn1fXFw6b4Ykz1PmaJh4YLbGqkkFBfz68",
  "key17": "2GjpjSeC8UjfpSdKDyNxFni64FzsySpHUZxHjzijo849NgARP47hmghvZvp6CxZr9aSsywGp4gi4peEcWENzz3Pg",
  "key18": "3vDP6mRVY3ust4HAhumqXZzZWSV5WZrZDMuCfAZCDJeuVED1Uh5PAv7qm1C8LVGRZu3RqvpKQYVcRUzpxRPVGqsx",
  "key19": "2ttoWX3vJHrCvGcZWwPC6g1RgVzTpEQUf43WNjaKViR5DQ87Ubn5xF7H7f7WAHzQ48kE59UcLSVcjbp2BwWyrsfq",
  "key20": "3AJLXfFz6R9YMXetnPe9dNLmT4gRvwcJ8QtQRBKDfCNpMZCi7ygddkjCvC5qGXUEZUYA9oQt2oHp2FUwhqHmCSNW",
  "key21": "2WWage7wXDs6AMxHJty59EdaGfKNiznYFKz5QYVr4d3Wgu8NWc322vnYJekqZtJtcBKgsch4CTzxdbnArZWAkvWy",
  "key22": "DB7iwhbrFpwxkjMVU8jguGuWpmPXvLP4zypfcQXd4gPAD3XHum8kjgwG1uPo9YCf4tb4bLYM5Lu2VgFE3kR5EJA",
  "key23": "5hPh19MLC4frx4GAenZ2DJvy9GGGN6ULZ1YdykhCzypC9k4jbWi1HdrzwSrXWYXpdUcuFVn6UeNgbn766dCm6rPu",
  "key24": "2pJimJLVKAAvSStwixvNJxeVWNbGFXsDNtNd5EP4JBYwauZxtXg7CNKf1PH7vVmHPCDTpm9mD5fCPt59wQ45b7te",
  "key25": "Sg6eb8uWwVCwtg2pU45NuwiDVtdfQY4TXcmNyksDK4vasQaWCCV59K5VEYry87ndgSb7hBL1EuVSisbFPoRrtWv",
  "key26": "5V2zaEy9HmqcnBYpoTUbEDz3opzRC5nkgkzjdbB9WaTbwLETPwT1A29oBcymhjnLYPcDL7Aw6yzVxRbGhV51hLy1",
  "key27": "4YqwK8KY2YEH1pS87gZT84vTAy125BjXJQTMfniw1EB5uVCWKv3HjbPGXmBZzHDvZz7TYUaxuE9tFrU9t1Qdzr7e",
  "key28": "cw9uiBc2BLekELvkWzRH2rNxdjUjdPL7tWk791L2zuBwExefVSEarYdm9sXk6BwYj7Hbkv3No8MDWS7utXuxvSs",
  "key29": "33xecPT1zN3iutJLCyPyHh2wXtd5fQNXRftqvzNayoehKFrb2iUtkSyvcdBEvsHXJ6kQBXBg3uusVVcwk5MyuRiV",
  "key30": "5mEr8hVqEWTHT6cBsXMBt7wJ9hChui2Qg9hp3LYFUucTrto2epy8Dqoc5LCxmNFX5b3jKwcA6cUrN6bmqRA64kFD",
  "key31": "3cgCofqxAmWKaardzaaaGxWHeugdi4cavDW2eMVFmWrQZAFu48BMfzcvHXY3Fht9nfc4kYRRFZMEfJo8b4z8C7oR",
  "key32": "BLdEjtKQqb4qLbaXJWjSstBjjsjXX1cMCQAiT1TmieQdetpM4tpNn77N8g7FQAd6q97CUUcpUc6xcuKkTJUbJR9",
  "key33": "5rs6T8Mrw7VDQuf3oAFJyhkm3hhCJwh1phA65Dm3fU1PiqhNsmRT36fGFeJUm84BwMetjxxFTcps5N93pUmnoDGo",
  "key34": "SGjficDi6U7ddGT9mnfj9xLZ4xDctpHoG5nkudW2sVJjxxDqXndUjeFtBLkhgdHnGFmyr9VJGy7baRyS3LmiGsp",
  "key35": "2VFk6JZvfVEoSfTrzUBSV7NpvD995aqpPbWSj6XuWGGBwxjPBYgV2jzKbQAxbWiT7n73JyWT3Jgsm3vTSJeuJ3wf",
  "key36": "3mn98n7NwGsHVB4jXMArQ6YMtNY2QA1ziNuS2XCGdwLaa3BJgiepkLVRE96HGZksMyZTCYRoecBX6QXeunxymQU1",
  "key37": "Ahk3RZ8PU9vZPPsJEyVNWCVAfhXzkNvpAuFjB9FVhATzHcv2zj88STieupZtUJwLRK9tSr9f5ZAS9tN8QB7o8st",
  "key38": "2DbrtsDVBH8YS3iepRLaY5HPAsYJWcWbYcwvyj8gBDCV8nEFS6uCWQ1NefMqpkdY3yQzuVv5iWdE7g5ttTrLPAZG",
  "key39": "4JQ9CFwLVPT5Kr4TTc4jauZUJhTDqt25SE59DqmHw3LBeJxtft2qVrrYn4mSh6RKE7mQzcyef3M1R9GdTwAztSNR",
  "key40": "4SqKpFWZjLNh5Doh8McEKDRG2QFkVGghRCR5RQXkZNRaWFgBAVq45JD5i1d9ph8Eoysmu6NoujJxiyNTsc8XFn6T",
  "key41": "2WrAY749B76PsVffxEzdK5uc9mCW2fS45Rq4TxpoSCBBsqHSQFQLggbU5fx1tt7rbPsbwnehZtqpBX8fGXryUhZr",
  "key42": "64CTQDyexmpMmHJY3MGQBVQsji8aQ2nXM5zwjThYDwfBKbWg7fpCr3P9SgxvrKtHwvkc7n8iFqPX1PpeiTYYezZ5",
  "key43": "4mc7CpYwdiAg3m5C5ExGUW3SabkVL13LWPgHCgEBwRC8zZv5w4iTfT2wY98pSPRAyaEEWNu6mgHsVTouT7iD5Yyq",
  "key44": "5sbe6Djj7TQRjZ73o4bfg4MKL5T3DDpzej5bD4PGMdXoHFHayaVUbtexhtWpjKFWEn9r4U8CmjdqhWLaTuLXyrhw",
  "key45": "5RQZmekByybDRTocVGg1L3KdrG9G9b6F3f6pNSiq2ZCh6z4s9SncyzuBhE5kctPWnF3VAc9UgrHr7s4ypiz3w3VQ",
  "key46": "4aaXubruU8wVNCZkKiNnQXAhTAJkcrjKVCSUAkxd7iPuXR6nz6Se6CYye9gAvnRmZDPACuFSrejZoPbzyT1HLAgh"
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
