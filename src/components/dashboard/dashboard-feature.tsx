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
    "4thN5Q1r7FMgY6cmVJjKykM3NC3HjbDmfMVZpTwhkGHckNRK7htbZ55oxE9kza3Mq8vPmQUFKtH7pbFJoAPNvAhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MPGwpjxmKAkwfUNJNk7sQaf5BJX6ouptwbfqKHhWUdd3ZTrorQPnAfWfEo7LCtW7FNV9N9aJ9fqyncmGkQJQnaE",
  "key1": "4uSowLUB75gVm3SdcXbDiwPnER4CjFzmhyMUHvLsL6k1V9Q5iSGPqzHr6QFVqo81SRQDQeN9wcMPEsa8VfqHFmCC",
  "key2": "2B7RepSMgzwYhi475HR86cpBSPUPxXMYKK7u7yNJwW2edryc9UprkVEGG1Nwa4d7soQ7EaJpY2yVmRT57kAtmCho",
  "key3": "Lo4511jkEEAnWYCxvFCFcHypYHDGaYAVR4p7Qofp1KGB5GB4FsmDvp4BCsQNMvkGH1VPJtCvov7kqooK9r83eH9",
  "key4": "5sGqWw8iCbzs9t4eVoPmTWE5m27s7TuFaQKoRetHSjoZYJbSYxmtK4FwCNBaNgk5ARJpjBfd1yeWUW5dQixsAmNS",
  "key5": "5yT6Mekubynkm15gjdrEKLmrKzG4HDcTgdKSQfLodiDG38nwQoCqEZxQovBc45x7suq75VQ3y2yggMeb7RGAvwVg",
  "key6": "LW8okPFUqJwTrgMWqkca7vQZgaQEW8GwezqLgEmQGCuogqKYBouBHp3nDVFjapAp7GrQAJaotyKHHzVojEuhMiW",
  "key7": "2VUmer9kF61ms5WbL9hF4jbMPm3KQULQFLEaGghcpoG7duuRuKwWpizuPtHRm3viJj3UPrUUeTkaALSfEir1STjC",
  "key8": "62fJQVjCgx29Yks1dX2hCXu26dZofAR5rSEzFZf8y9Cjesg6Uu1KpypkDkZVZGR6S2hsBpjoihPg5QGU7ucYTQ1q",
  "key9": "61imadk7bLFfZcnLg3UzjjW5dd2x9gyHZ6mcyn6sRT7B446C6ZDDzxs7xJHoKGvEXs6Tum6PUHmmk8PZhBTeUrif",
  "key10": "4hr1fKX4aGqgq89obikNMjVjXT6TAV8qmNvhkqYL4WbKSb2omHZEmVkkYEZsKduXnjBfTnbfQKyADac3UuPYG44q",
  "key11": "Cverje9YZxq1LJMQDFCVyTTRoroVEiPV6TxJ3oh7wxcztjaC1FSc5KF1gSjc2AuAsWJKT6yE3f1Hi7C4KRDJcEo",
  "key12": "3XMxf49eH6jCFwQ1j8jU2Kw5vaLNHzbtdT1QCPb1yVkr4unzBFnAcu2VjVeTRhAJ11BCnY1dkbdqnqV94Q8dSBJF",
  "key13": "5o5NfwbVfboW8GpSgEAH4SXU5236ofGnERUkkARP6PRZ65rAn71nVURMhqd7RX6jkigTfExrAdzwFFsGV5Zdn7qe",
  "key14": "4kSR9evmv7wBD2ySgmLbdczW4eiuvSqvuRqShzaFdDNpPe3KoWvLS4UGFwstaWjGaHRySs1Tg6HbVY8LB8ugvPsj",
  "key15": "5HqQ2PrqnwdwJ9LYUnhbFXsDUFrgNJi9LY68kbb3iAjS4ScxjekWEtc8jDEdm7JZaZLErGRaUm6wAkH1WDsvRFRE",
  "key16": "5jE321kMSQAJ7LT31ePfCC74toenY9XywWSNvSTtgFbXZNyce4zCDStm9VG5HvRkAVw4xAWpWkcuRZZWxbjK5Vkp",
  "key17": "4J7HBQQwv5DuYdhLpo7oSiU9ADBYqYZ5xv7BzYgzCT5ffzY7hT3r6KufLoqrkMpcGuy91T8w9CPmMzGCff496oGS",
  "key18": "3Axf1LsBxKXsbUwiDU72XetqKi4ExbeP1NTvtG4Nbf3XZnYTqwtaPh9mfpdGp8nPGWS72noJyUV4JkYU9fD6t3w5",
  "key19": "pcwZj81Po6Axe5x7uVs3AntfWCgmi2zaat18eC1YNuCkvqpqiop5uYkuk2wV3naDVFLCqqT6RjAQL3Naj6r58sp",
  "key20": "3z9LYm8RdA918ZxXcRRPxxWUbNph34juGFjzXkV86D7SkAE9ULUe8ThqFVW9ioMzBpExrRVRNe1Ldyz2M1w4iYwt",
  "key21": "3ciefe4RYXJt4QeVu8c7RnsAtwpcQ5NVmGE4xXHxh9V9ArP9oByHmJ6NSeCTXizTKAYRw38LV1JfJVzn4dFDQmet",
  "key22": "rKuEVCBnV7c28cMSJbyFW8tDBLvSRk7s1bEGMtmrvxJE5jDfvy6D4mfGFbAWbCdmzMUx4Ti9PLbEuEAqNNbjCYS",
  "key23": "Tkb6wQgxgZMGZQbcy2ckdRe954vdQ81hhFf57eJJDJF1L8Jzcrr9kcVxnm59WBCdFU2ggaWN3jMhNLJfAoqGRVh",
  "key24": "2T8u79Qbt4p25bJPgLSnRZGzbzeMAQ71eJTs1Qv8Y89dvP9TNT3wUAYmJ8JWaScpEGPDXEbHeQJwkMkJjBJ5CaZn",
  "key25": "44Wg8nV7FTtB5E92P1uV878rqrgSJTW1VYR5eMJNQdN7J6AdE6d2MSTEicu2sLb2uaCeBAveWQLkSB7aHMgV8cbt",
  "key26": "65idnK9Q1xMZyRaoeiskgcVRgG42x5ubTgVbznvAqKoFQ3V8CcTegVq1bVXHTxTGb662qHKHKxdAsws8HNbdxTU6",
  "key27": "2rhwLbSE21YLXpU3XiM4aVWQnnuCQMZHkN8zhbbVH78pnEs2x1tUHJMcbeJnqsUeyhwzb5zDTRkm5pzNT7J9A4o6",
  "key28": "4WQBKj3cu42xsUCchHJmpDPFSLsoJ8RqYWwkdn8o8HftfybiN4KTAH67LN81dVFcZ21Yuka7342Mby4MyRpUMfcB",
  "key29": "482BSQX2oKriQcxKAWYXE3gn3dG9CrfkY6QhdEpiSBugB523swK8JfEa3Sk6eXV3kX1dheLaN5KUZsmdaZz4iS1p",
  "key30": "3fYwKiQmuEeKQUpdNC5SxkTvdrce3NMJSyt3AvDGdvE6zEG5tZNk192zAqfowUfW25VvJxwvPSqE5XoPtykVcjZw",
  "key31": "2JJNKJaA1ctK2ogptSy5DbuV5dVHbRnx9ekVyB41cYQNzrdYAnGz98ZnYFJ8nJ7weHzxidpyrdMn8VSbnWAGaz7z",
  "key32": "2i4j15SCQGaVbpE6qHpNTvcTkG52H93m2c5cNcwckYHPkK2aVzk84Ck7oWkg9wSF2ZJAXPcvR1MDkWPz5HwGcAUG",
  "key33": "3nKn6UkW5do1TNu7HgKAq2H6dipPfazE5NtbMgcgJz4DLyCkATrxSKrx4NbLu3CKaMwconCTa3jcHt1yezenp1c1",
  "key34": "3jGysJDkc5gxsyeFsY6T8436bjw2EjdEUcFZJ9LhnjG7WRrwPZ73ZSsfcsFG3nZeLsVhBvW5FePDPMKRTftcBiic",
  "key35": "3rZaT8PQSYrrrUsqjrqHCCsr1zhbqZifVzJtoSp9Yst8efzjkP6QfCT4PFdaGxrsc2wU6KgX9BbotGiNp2SMrmET",
  "key36": "Xv39cPwNRkt3V1GejVFH2WPtqbzuDFhgCqoXDD1YBBofqeg6Wx5Qy4wyvt9jWKV1d98Ao5uESTS5UkBMgvNqoCG",
  "key37": "5Qkxero7Y42aG8BEAyoYc67rQ9XzsZMwNCCk9mbGPojQWXNdW6kraE7xQevSjT7WQiFxoVXnEi3WRmtQcvRgosE7",
  "key38": "DXCbWZbXuJ6yNQNBaCbh85dqDce9W8KQ5vrPNCG8SM9cGFpwvxewujV2NYJuxh3vkD6kESAFZ5TwwDaR1epCGM8",
  "key39": "2bKfkAe7fG3DTQv6dxnvE7e8vQMTv9QAP4a45sDv7uVTDpBQ8EPKGr4vW3N3fLCDdBuDP6PoHqTtqHWFXsGwW3eG",
  "key40": "47kYawxZQQLs8hGX2qYACzXdw4cAg28X42S7kZL5YRGavdtLCzzcZS81cxnjHYNSiaPkSPVdwkBjJ8ruLobwotLo",
  "key41": "42UF7gxkvRmPyF1o58Di7JyRzYi8kzaEx2q75LLho5UtS2unRZ4MzqKrsHU5V1rNwFSqcuZzMeeZG4qjQk2mou3z",
  "key42": "3fDVSLQdK4ZcY2jCn1WGmKVeBdQ1S6DmzamBG6shujCowe6SpLz6ew2qGUBNW8pcTwnrogFi86TzxzCbkedF95B5",
  "key43": "5ZtzNaJEY147BzYxQRAB2o3939JbgvRtUUc7aanQ5rgABLxuhPRJXD4NyN4PUasMvutxytcRZDtsPoyLEAwgf5qx",
  "key44": "55xwSCBRbtGJt8QM4vb5AL3HRPNh8onRFmVxaYNpypxZpVosvc19sTST5uekBNhYHD9KJoSigMiDAkLFABj4Ts12",
  "key45": "2LDBxedhYciz5tPFzyZUHgS3bizzgm8AgZvazjcsJiKfew2441vhWWeF3h2WUDtSNcuk17qvNokfc2muh2ZfxAod"
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
