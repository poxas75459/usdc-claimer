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
    "1rY3aUZc66HegQ8zTJTCKMYjARJZUdoeMXBRcu1tX3H58nVmUz49pNT8Evya1bXspxvuREx9QPCcSuqRu3ctB9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7XV4WAnGeycE3WNQdQrp349L7MVm1oYzsPRWzqoV3Y5ZEkBURYJWfRZuYYhLwt7Wu9yQdCLFjRPj8ReoNdV2cg",
  "key1": "4xwYPKDacPHEXv4fUDGFtcaCdYL5R3AgfRDCb8TiMJ8nNQfJcuv4mKdzfdQpXkuiVB6yPdZWhesiTZE6toqb6M6C",
  "key2": "2YjGPfjsNci4XTxTgdUR9F5Wv26Pf1ugjA8Ynyouii4FKvpBVErfaVcFNgu9Wdus3ywVeie8AuBPriW4FiWgGVK",
  "key3": "3DVGHBojwh5u4kFkS93Ao4B5pUjNB99QCM3nAKAou1FocekxxxAkMbuVbHZvuPhsCxH54nYcG2gf5SZFCSoofAWK",
  "key4": "2a9E686Xwe5w784DntD2jxsMYaxfGMEmhdhVx2w9RbZXqdMN1mNTqLbL3E5NtpusbnpG3391xYVtZmt2PXDCckZd",
  "key5": "2o2jyrv2DuECCbehzzx2uFBc3HAAtTCeofPfMChWMG5JmAYmroogssNLCuoB4iRwr95nh1DfYbE31Y352jdnQ4q6",
  "key6": "61tPYaX5JwEGmzzi3FG46SJ4h4dYL9tKpREVx7ixMtJMSw7qkPL4DGrd1vMozFMwECzcyqnwmzTXmwZcyuV9wnVE",
  "key7": "2YdCUSTcCzuvYzQYQKLWPntp2R45xPD6KB1178jNfcfgLKEpQ6fCzHGf5Sw9vbVJvKmcAxe37sUmMmtTG9uo3K6G",
  "key8": "4scog9R5zefAGHdLtJCZpqkPENkkg2tpDAQ3RtVvnyrwiRCpZN8HVtChStoXXUhpAZxj9jruFrkK3QMd3n1Q9r1D",
  "key9": "4hVvbwVeyL6HEBnWjZPEGHMNJELpqhkxCsAWMRCBDpS5omhf9HYtrZpaWVWKyV6MZiF8mXXSSRfuJ1mhvJ7Fbs8e",
  "key10": "V3PiHuK5mW7deqqfDzFstNLEF1P6Q5U5HYaiWJqRSRxW3ur9bf2z8grscuuEZP79fDZgsDrsEJnuJ8p9fVd8Qou",
  "key11": "4T4z5L13eSXA4XuJubcseBgopoAoaBqbeZaVAMuoZcfpnA1B6ZyvwabUDgiodnPVDwsZGAooZAvmep5LfYZzGScM",
  "key12": "3Y9soVgt1XtCSFbjA1z5kYb1gRCoXjtvsDhqn5ZFvuGXhkJxXmXuFkc19VyK6QSyihtXxzyXzu4Axj9cJP1w4PoM",
  "key13": "2GmW4KPSBFUWN7cLKgYiqjtmzLqBb9UBxdxfyzHGMcGY23iHhXoL5U8f7mLJZm8puvTy51faxJFPjhY8tn78YwUR",
  "key14": "4DnW3xHkE5Pn5bEP5NyKYKQXZWu4gccEd3Q1KC5yGAq3X4ssK6DuhQZXomFSE25UsEsaR4YVy94XDZDM5ay9QJ3g",
  "key15": "3jcsrGLPsN4b4nWLHae9KChKxRGBBMCoXJNrqwMp8jzsJqXgcj1xgHqX5rmCDpmQFCx9ny8kyTtwSLF1hW7BjgBn",
  "key16": "L7BVsPpwnpSXQPis85RttyXrRvyDypU8E187oiVBTjBYRPZdVZnVJVngQTBZo7iQxHwP83LivumrdGgMUruXCnj",
  "key17": "3nrasCsbMyFYChfNWQJfmyJWNemDsY2FK8XAS6DFHEUXWZmkspuRoJY1pbvjb1sr4YeRRK83dD1cLK8P5SAARzwp",
  "key18": "34xNxeKkRgkuYxucWdJ5wmrZAKkDpKYxJr88nvugQzjtvx2AsYDisaUsSzQjzxadXPGkaXm6MM4qAU4s4ekdWHAv",
  "key19": "2Q8iTkavYXYofyrAosdaMBc8QiwpyttcgkxFvd3uB8VeWdqmL8tcLnDRT55Ap1AbBCayxNg4yLUboTnzSMiQUSQ4",
  "key20": "2JwFw4TGgw3LBKQt7utiEVNdMLNCCHHatyw64FcoCowCAM6PzEcsxRgHX97AZvgPrGqGBeA3EPjpN9DCmAdsdUFy",
  "key21": "3Zegse1wU4sDEEBiGo1SFSprazuHnPCwzh1ZkMZQepnZu3SsScovUdHcMsAzT9QKDymQTZcit9gEbCjbfRuYGYEk",
  "key22": "4rqqdGiAjYYvU5s9XdrQer8xPQVyEijcAuFxkAL4AsxdmWumVhaDs3bZjfZRUeKw7wTNdJZ6YbPPKYwgkAWNarq7",
  "key23": "4KLGSBQkHbnWDPHBRWTfqERj8oaZWKmEh7CRk9y6zatNH9kvYaxHDUx4Cs7aaE35obGxZcDUBQesDTLoBh8QSLdr",
  "key24": "5uoKy993FqgPyTZhNF86kw4DXz2f6kepKKVrirnjQ3Maxj4jMwKizfMoRXCdmTiUsT5GvLg16E2cqzv4BKJV6uDp",
  "key25": "3X3PpXxmnc3gcrpd81sTnZtd4rPxKSavxM3Rf5qdaQ8WiF9tHzABQFZhAbGd9Es4sYa4yuwC58XUqWmTvzSkfm9B",
  "key26": "Kdj5XXbfBpCtsJhcM9VyYVNTbjksLPmBa1VfDJuWkQfHj8mqX1D71a5KTfJdoZiCADayo2PyXPKdv57cbC5CL67",
  "key27": "5F3xWFnPCQJo2mcJSqXw1kJZrzUfBbEo5C5qoruADt2YUSMPTDDH5DHa7rU4BYkECVx6ddoTun5H9ERyDJAsqiwU",
  "key28": "4kHskS7DdGw4sSHzsHM4PhApc3KVWfx8XnsCz7isDauTKjVZohWysAGp2HDLYX3b9dXyDVEtvJxyDaqhdrN2BZPh",
  "key29": "3cHQBVv2GqmdHS9jxgfYUTEYEUNQ4gT126RjwSQovtrQm5gbaAQYqwJuEbG7TXRcAkEzAaXyGqMeUHxbi7NBjnsU",
  "key30": "48kMXQM6DqBEgu2wfpocUyWXWTEmKCfUkCZvLUZoQAbVZJw66PZwXoSGBgUwhcqStsxnNRS1DWrLGzDvReXunPwm",
  "key31": "2RAt6EfwYirUJiwx5EPRZ8HqsJNAHUtLBckpJzjU65Uf29ZJjiW9X36tGVUQFroN7x8BwTVmbubP3TVNTcLxWJU7",
  "key32": "A16wRbAWEzpW9VonJhVwtBwsvRAqEByJhgzgdvYCbkpeoNtksV4S2kqteBFzwQ8PJEK2LzhaTB3C4fkFwM5Ctx8",
  "key33": "3V4N3JCXJEfbqrSCZ9bCFBXFZSt271oEwbU52z9LAyx6Ca5nMAbJQqXjDGgXRTxT2JpXKtQDBmJ1D5TMbjPeaMvK",
  "key34": "33kMLroXiGNGQecVYekQTDwr9kkBnHWyAvTQUYZW4oung9jWEddKRdwBpQ1KxJ4QVG8z9iwmWDPmNocNx5MJsd6T",
  "key35": "5mrbh1DtRNWnarn9T7BZ8zYheRNGVB8nYSDaP3ZLHPJP3E1Q5Zjys5HpiebAUuf9wGUqRsZHC8JLjLuqNnozovp2",
  "key36": "3ihrw2yJ78LayoUFbC33q8AdxnCBNKfTG5c8QB3LfoxMSfrQgoXauu85m8JQRAYDisbETgkihG2Q1qqM5qo1AGHM",
  "key37": "2WpEVntqhVqT4DuUxqLai8cqedETnodN4ubdp2uC2t3GQUmNg9SHYcADresLgH85rPy3zvn9DXDSsUH76qeDaAD8",
  "key38": "4bMRpCtCrdV9Y8HLQztY5u5vCA9oqmmZXtkt8FmG8G56s1D6ceS82fSZnYRURmBaXkahqkXWHEDDUncEpRQaVqrH"
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
