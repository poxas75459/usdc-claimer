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
    "3BXsnGhwNcBh3wsaaLNnwbh9h9PGv12WNwe9KPSZYN2P9p63aqhGHAVVBrGEBNJ98eziF2madd9rBBBS1gYxJaH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DzKLYQmqx4WMgMra8LjKnNkegeu3UfUhqFmop93MwMWjgV8bzepzWqdC9ztGKxwynAVZ2GbPoyeuqh1eScLveb",
  "key1": "5NtJV95LAAU56T79pnFLw2yxdSRgv65GVjTphkkN9zxL9xP4zWtJkwLa8zimGLQFzkpaYWscvDHGJrEejNUFY6rX",
  "key2": "62cwJcFjwEHBQ4UcZRzsbMgYiEqEjmMdskUhwNjoK6pKXLwGYijKqdiYF1PVm3nhpF4XFBE719MXtMEvW5t4HQ6z",
  "key3": "WjpbDWjpkuHz8VBhwZBMSy1u3QhjQWfSMtLtPhbBGU1FpdVWkcPvWSKvTJuWQHqtQj6zecnKX7yMETAgzYdJiyK",
  "key4": "2GYmHEd7r6KnXFFpvBb75SZavD64WAH7GjK9XPW2uKg1oM9h57PLk1dNen54FpKYE8Hd8fE36FuEyw6dotaTk3UP",
  "key5": "WX9CiUh7LSJfV6KhGXKYpbcjUEMY9mXhh2cp1R1WqPDYJcmpFZSBwmV3Fw416FfSn6QDXdxfayQvwJ6LtG8sQXi",
  "key6": "3H6x4oC85tWEKF9cV91ss7SjtyCM2Qci35yMcx1pbpLapM28mMRdu9tcwtF4gYKS2VD1hhenoZesAJPY3URLt5k5",
  "key7": "3MRqQJqrXHdxBAodK5WmafnqyZ5cyGvzPyumK2SS7kGx7t4XpaD1ZCT2DYgspu9ujxP6Du72joEZCxT6aXTQ6gXM",
  "key8": "54xS3r2g2jT7GvdFynyyAkY2m1dhRT1CT1kfFogByHqPUReBsdWE7U4HJs8LHRfRBDYv5TVwHv8xsyQ9Qfvpy73G",
  "key9": "4YmwpHrQvunPtVEbrRmhqn6q47QymztghPFH7kWbnGJntjoNvUkiybc9rPuEGM1sL2JwS8htcTuaaV6HNuVHuDq2",
  "key10": "47jriX9YmWNS1jHTuA4QwWLLC7VBWVt4TT17u5SidamKxHNK9yd446c85T7HvhuGGWq9boiTryJzc2ivmxRsP5cr",
  "key11": "Fvbk7Ppeham6R1DtfzhJcHMqgAkcxGGiaz3rh5WsJx4MtFiZvP3FSsuBPggBmSpP4sPiP8C2E2eUyacuPsCjcP4",
  "key12": "2a3AzpKfhkxCXWkM9trhwBqo5DoDQaoFdyMYJp8QzH9NPtg4THkCHDLcSCprY2So5v564hrn61pEFRFzwXGov5Bg",
  "key13": "32nDkNwMjm1cuGQcuKf9YVV7Cd6sSE11rYkh5wR7XfXegof61FaX6iXFR4r9av4cBF4i3Mvbhe9zY4UHc7j4RE5D",
  "key14": "hyiBxHgA33kKU1K5UXnZ659yZV46YsmZQR8qmHizaCR2izsXdBUSsmdp3nxRazYS5yH11BW61bQWPxFnjpHe6n3",
  "key15": "4HJxpRxchB7nXDF4di4SjEk87ynuahvp4AWMy3M5gwemfb4QDvNdVHNhLQpa9PHtTdgUHr7x8jPBBthnF88xj8Vn",
  "key16": "3tVDSFCsoKE8eGsj2VSRGPqQhpsHQZA6Jrzuqrp8YaCmzxPunefAqGr8BKKUhGgHqPTEf6o2kSqbWDdj5sVffZ9Q",
  "key17": "51nGdex2NYtzyvDhjP7awBWSshXBBb2ZMLgTc3mNhogY7MjxrvDGdAsMVhnJE7vT2CramVMPSJvHVMKgzPykyCYk",
  "key18": "2HbpovhXAcHWfp21FsGP8FgWiJtzZf7DRberwJsFMTuG3qbHp246mRktZAvTeqGu9vbEBSRBGa75kmBaLDnfikG9",
  "key19": "2T5dcfnxs11iVHPwvU8QnJseravfLssKawrKJX72i5wG7XHGuuLpv8wCn8XqHRL5yxApeqVB88Yu8y2MChbE6roz",
  "key20": "2YKhWiubzV3uLSzBPyXLqvWrQWwiqsZVNEVRJP4HVNvgRQVrADjnXYPRNTNJHhDTJzh7roFjEHc2q8cokoZU7jid",
  "key21": "2yQtLE68qWSNzM9YSgnvQnfAxkPW6yekG6goxFPMcBSQiUgXd4FR9QtZgmBrxQXQWBitLoaqf2fYjPaPk564yvtu",
  "key22": "52pRZS1ScAJSAG7B4rLK3APoYWXzCad6FzN4Zp815temkpKWPdhvDTTuweqoW2TAgaaf1tYMgEQruwQ6REf1EsuF",
  "key23": "3X6A5hidTdBE1KvR8iuqajG9mFcxdNLZe1hucQo9YLUV7Qq9H8PCAzPV1J1YBpc4FWSeYwp2wzn4Bzp5xuZrgyqe",
  "key24": "2jZvGxebmhWtkD8q1AkrwJYdWZwxXBZZ5XqFDArV38Jh7jZdRMBNdQwZ1HBttxJ4bi62vMVcCysyLjoRaU3J85QT",
  "key25": "bypU1ZXaxCtao6yJucpkP3eKDsMXxw7VHi7LDietCKVzL8KqsakvRjRRxKLZVkb2Qstjv5CkK5ePmtckHe57NGF",
  "key26": "3yywU6nsmgEvhCyxQhmkm1eLpzvzwE5FQ8Q7ykPHtWktctX4JLgGkFL5c7NgX4JuthQBHtHkvpZu9wd7mRKC35ru",
  "key27": "316mw77qP6nyBqEPaxvGET9kMaRvLfWys8AszB5NAYwxPiW5pC7RaxZPZq3fe6XuBqbYKcdiKJDFjBeQgeNMnvX1",
  "key28": "aHukfYzuKBMk5LddsVm7sGd21cEpix9TFVBZrPkctc1L94rRetADGLSZF6xjLv1JMkrFP19dCx8qiyNsr9caKR2",
  "key29": "fbSk7EXY4k711R9MXvyLzy4P7TYUbLgXPekeatAQExmpMCB5VRhu18no7MEo43RwiffUuMUR9UCnMSWXijcu89k"
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
