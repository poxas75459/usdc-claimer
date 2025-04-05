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
    "5La7UPVXMXTJ6mifrDNRiD8RinpnUK8Tfx8SVjHkXi5xn36DLdsVSufdmYJtMD7j3xAGEgzFVkj6AbaPr4GZTUNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngsxc6yxfdBr7Pa3rvumV2Zw4MCsA7u3yJnictaQR1zQqdhQWhRZoHTLppLXP46niakrbSpimYww2hnVxsHhAKr",
  "key1": "2UmaZrr5kRiY5WpP3nyxhPr5zHJix2yik4bPpZ15BNPqMqnQY8MHQnchtEGw64ovSYX3GE8dEoZLUcM5gQ6kdiay",
  "key2": "2zpRo5A1DzjXPQcsmJPUsVPY9gyym5iV7JXcG3zPb11BLVQeANDkc9G11RADaSgFYmT6XawnaEaRTvaNfQUDkBrG",
  "key3": "5ngThWZdRB79ut11LjMuSByf2cKnbQKUbCE3cgym5oLFgnMVGWeWq8QPQfSeJ489XFbCuit9j2oosKd1bbaAhWCR",
  "key4": "KEnYE9iE2ZRrFr8gx9SJxwcj8o73cJycCcPriXwuo8r54iq1HR8X4xr53EoGYyS1jeLJEjYBtCuErPxjhuKE6nj",
  "key5": "3UeKUeX3t8vAdVFr8mT8Dz7PxJNsNYQZ4VXBj3jdfQznWqpbdCudDXJfqhDVt4M2dFxBer2iKqz4eT9HyNhC8fLS",
  "key6": "E7PnRkGGwzfHXXfxdsfbTEQsMAo24ydam4UCyJYPSvPbJt92Gn2S1DEd6WP918TrRmtEk5UEL7sMjoUGABuL1YR",
  "key7": "2aHTygq4GPs7tJEZErxGofmJLpBiBNt2XA9BxK1jB7qSqnSj1SUsuWnL6U4WHV9cPrQCbqGGX13PrLBwrxjPmHQj",
  "key8": "4hdRHAXRP82XGtxBSVYJYRik5dBrdu9g7BsFUQYw4SX8h595ZTvK5PjPgeftiVD2jTEh3gkb72FJnDzJYLu6uC3n",
  "key9": "4FcSArn2hbN8s3sEvahFACAWqBuX4Y3mNYwhbuyUtYiQpZpmZankkZAZWEi3vZirR1rjyZk8YwiZdSwxNbyy7iGM",
  "key10": "2So6iepTaY1pcZvEm6fA8ewkRSGzCdJ8KFnFG6GCDM8Ue4RtWmgJ3vaV3rX5343Cstg3BFm1svSqQY352nSka2ip",
  "key11": "4kHkJBvQpF8ZWqTRzpHHTNTQKVwjMHDevScB2i4v7J3Xx8ed9MDVor9vyZHkzY7ogUJnAPDE8RPJqnZWF5ZkkbPd",
  "key12": "2TKND8A9FTeA6DSmzQ1Pyk7UfUvcU8ZccFidDJ7KSWeyR45Tw8LDpo2FwTc4PYCyUeyr9ZNEUmCVnQrjZknyDf9B",
  "key13": "7HH1Rvko3SG1uFeQdqevCEAhWYu5f4Gf96ihxuBUfc1DNs6tYdShpd1PM27TRFMdUCt8eaBNw3ykpREVac2LV1n",
  "key14": "23iXSB9HXA9UvcEUgJQKaPRKsrGhqXDSym2fnPocvaRoBda3a8fqD4uegoDAFU43zAGgND4svtkpUswjTsg46doh",
  "key15": "66csJ6N8tw5RSNVRCi5bCJxZCQRJ2u1EYtPckUvWrKf1E2sJF3fLMZxWYuhWsPk46XX61F8auNPVxp7G49d31SK5",
  "key16": "GLhLRuEdu2KKpWhvy8PgecL9hkU9hXiRTteszDURSQrYnCefZSRbd6vyKqH67wvLW9Fewb5jEWG9fiEBbDewG4M",
  "key17": "3fDnVUL4noF93bUZC8UgsXDLTJtKS5Mc1FX6FYab4WiSmcqw92j6VMHgST3GrAX5wuytZ9GwnGeKkKnJmkxVJ9TS",
  "key18": "2CeHsFSFyccmL4D4fQzdFDjMUiDUJCHy5ETDkNTLCcSayjRcoFe6otfvtxP7oZr6jwYWXLxvBeYGdsbd1ALvnHQi",
  "key19": "3PpVAbhu5Grb3oXB6jDR11cBMenKDaum4vjNUHH4FZ9DpsNbBptXZmZM7sS79oWaEdbnHMLzvL5JgrWuCccBQGer",
  "key20": "2D27S88t3v7wgvV4TbEtpKTRZ1TYEtC5a8vYUYLDB7YMyD24XYzTJXadhjMsqW6Ga8k71ciocwu7vewic1e4mzN",
  "key21": "54j4LZroThnmRgkFywQaK19mi4VdA4MxaJNqPntTHWK5KKZAifwvFULaUSLfmSoyguwM42NToMcx5zHsUapQjMP",
  "key22": "4ixtjb2MMxa2R8akGZFpTGiJt3bboair5rdYP8F9EJz9z2Qcw6KT9SsVJfiAHBU9vQSw5eRy8WuPYsJVwfJfGgD2",
  "key23": "3mmbupJR36KRziomN675gEuja63G3NhAdG3HwjqexSiwCyMsdbvgtRZtZVqZKA7UM35ytfgzS8wR1SSpAvZgdXhu",
  "key24": "jwieSALET2ppj45iwcEK2vEyGNMVT8u7HUHoSFzmVprhAP4GmKaH14X5kcxCnKNXzDzY6YNAefpH2wTfrtd1N7s",
  "key25": "5neGs3undqVkXibXCTFyxQ8WU9yDeAHbDXVUEGHrUkCvBZtBirhjQuBwdPocJsaL6zVvhPwPNSShptVtHFRCkVLS",
  "key26": "5FwTR9LrQk8xaEAUySz8j5XiLXTnREGodR7tbzfSf1qehD33rrpoH8GkfHPzpYooaQKRnx2Qi34MATo2M2fMfYgh",
  "key27": "5p1FmzHT3QJDDFaCnJdGt2fJenpfkzJ1gxgePhf2xWACaz24NrgUjYTduziZ4PGTDwEBFV7wU1DHMusAwfktnpd4",
  "key28": "58Fd6J4yyJ5UmRYckRacngq5sQbXQeifbZX2k1hLeLU68caBXzczBqoM3tsTWzKCwchQhZjjFNXgga2351cwc7UA",
  "key29": "637nf23DEZJijuGXyJmnM1rq1UdASzQT4wABE1VixbGQhsrVLPEDWV8hJPqpHnhbderq75WQQpaXMbi5FSJpXMZK",
  "key30": "3iSkCQRQjF3sv47XXUFjJS1JqdyM9aaN5hzaFr3b6gCQoLmi67Xdz3u2Jz6rYg9pE74QTDR8wEABX6s6HaExPC53"
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
