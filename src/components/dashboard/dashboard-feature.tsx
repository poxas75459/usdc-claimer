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
    "5ohW4bnPBe5PUoyWizjFzbQYGkUv5r4kzdKFR8xZbzkMw5JevtxQ5NkdGyzUjWE2M6f3w547HcNRrtbXaJRx6bbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EhyiMPYmvEUp6JeT1oDEm1yrig4gAg4e4V1yRXNfhPkvB2YxVB6NXG1sQzk3fdWTaNWj9xuRtG1ST67ZNBUJ2D1",
  "key1": "2JEzygv8UNuFKi2gQcerX8DZETK5kAVA5srEZc4RceQXtZHBgLeADncmEusLH6x65QnJWhUKR7uxX38ZWGkTs4rF",
  "key2": "wWbGRa59JrD8aHXMZ9gzMLGyAWCZkjkpX1S4LkkHczDpcqr2Bs4CdCyzXncvp3HyAtJLAaNak34y25rUdSJYYL9",
  "key3": "xmihuMcQzaBrWdC5dszwpRn7JRLs2tMW7Ly7ekdA9ype9wkmm86HCE4ViSbsi5RprmaswcGuPkQqWy5a3AULNhd",
  "key4": "48UTsjrSYeetyLE6AFK72Kq1HPfZ3Z7KhPyoUV19ctw4H829oUTo6mJpy5JHYgnWR2HRpvC1PcgtYHVtxFdSjgqM",
  "key5": "4jBc43gaB1uDbCeeskaN5S7o8gg2CrMMQENicZy6enKaE24LGUGRs7KPpKrZ4CPSLqFRWWRZ19XA3jQ9CTQturNs",
  "key6": "5VzkFDE3Tv1EBUqirXm8xWTtULT6ZPfQWsqshrcAp1Juqp48bkVVp4vJwkCb9qQAWJueuCnXfQnUqqCBe7PiYxaB",
  "key7": "42QiLMmWFZo8q5bA3Rnqo6gjb8n8snjN6Wr7AbdtZ6U3peFCcF3KCi46fb7xtnbPm9hgvd9ChRV3cVsydzNnCRdw",
  "key8": "5E7DHfoQkxL4aDAfb7SnHG8Wd4Ng9eFhnj33Ev6ZiwUm33hwEvbmqYKydY3LEBuXpChyeuSMJnuKYstvZRAuPciA",
  "key9": "5Bncs9dSF6b9f9itvMPSv1H2Z1tYzydof1JrZALawFPRVpQ1rgLfFnuDpRkVGE4RU9By8FEXuL9Ye9xiP6tMbuM1",
  "key10": "2rnyT5K1ecgyNDrtveFThsRvbG1scJx2R1D6pQCYVBUXF4hPhyasSGD5bMzUZegKtdUMkJwG8hz3zKJPvSQBNjoQ",
  "key11": "4gazxEdzaBmDW87fNPK4eMJ6GkKpp5FfWe5BP1ybqNZ5mfLgwVsfoBp92kA7vdFHAuto5T9gpgfTZ3HLtmaT92LL",
  "key12": "58xUirahMJsgLT3QFbupBHwygUceu8B4HvBYTHPFNaZvHh8xL9voiLvmhDqdehBUwG1XZGDssc2StorJzi2NrUBx",
  "key13": "4qfChmC3DJUy9igkKGoo2MgqffHNac9AGrwETPfsNJVmx4ZpFRz9xM5dbuWZ4bisy41fM4FCGVnfPF26zcB37wfd",
  "key14": "4A4R8z2y4jk1a1tBH9zXMvfgWgFUHQDzGmX7itwK6GujcJGh9bUjeb2apg4N2j2Vwio32tfKTi6HRwUhGDiPyAGd",
  "key15": "2KvhXu5N4MegfuaauXqqG6Epkm7RM9z6wBKZY8RwnzeCy8WMnbZ7r4xSZ1vXX7wFAYi4tpJPAX14BJVsmmqfvHYJ",
  "key16": "6u3ZPxYtkhutf1Lwpv1zC8PPWxgPhaJeixv8zqzeDrJxiuejFEXXzqeDgSxWJzcGXG2Sj9GkasUSvmyG1HzrwZS",
  "key17": "248fyNcGS3bVRdqPH6tDpwMgqRPrVYWKeTq2uVrTfWPyNuiSe5PcRtYjbqUyvGTdFrk8Xeweg6q3ZMAo1XuUv1uR",
  "key18": "435FfkRU6fam1RgSuuRWZVCJpqUAUBaheUMay42ZDMSwcJbxax7mtHCoEX8yh42hPn49tKqGuo6sPdpDtccFtLLT",
  "key19": "5Mm4KETotGtUsLoQwsAx1KzAWa9NpafEKqKGAGHFiQiX1suHRPhyuxP3Kzuj2wiYaXJUbBfKzxmzHpx2gbs6nGoT",
  "key20": "5ExZkicwrp9AZ7aQrJCMDxUmBiWXVmpEMnwdKvFDtiPyBifpHDEkedmzrdtTYUMnWfwDCnyQoo8LRi33BDWM9JS1",
  "key21": "4tzFvMHe71qw2stzXUj5eP6WvV7wwTEfriVGqaEAU7LyobbCjmBKheFjqaNu8gG2C7bxDsscyPQz5nRFYMTsAUPQ",
  "key22": "57mJyKAxDaNDPhUwZBqt9SvarnT9aYe5GQujdsDbYGBzfjQJz1k79GH7MfJNWPKJ6erinPJS5P6hmFnDUzYvkMTm",
  "key23": "3asB1PygC92FVZMLfxWSd17sijNi3ST4RnfGJMEvo7njBHZFXBFF6WKcbStXFMSPhirXfNLvHuSf55VJsoEfJBEN",
  "key24": "at74ESxN9ctPe1MJcrCjEv5ftVuSjvyDrYYYFDnUCVxzHNHQLhsBLMW1ruQE9LZ6kNb5KFy8UJmCciZTZ3yjrHe",
  "key25": "3AJ7TQvwtHBk7KFxeUjxa7oN1zn4z5JWKS7qaZLsL877BVMiYVgz48ruUC2wES8rzjtJDcdgna1jr1h2GyGeNN5X",
  "key26": "NuMVr4DJR8urPLbNweKVobqseBaRSNFFrYQGgU8KVsGP5CsDLnRdGTh2MHTGccsphZNQVhue6guRCfsMcBvy2vL"
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
