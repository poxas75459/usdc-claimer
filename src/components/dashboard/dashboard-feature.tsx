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
    "6XS7wpzu7PE6NYjZhez748VG3FPUniGwshKYf2qxBf6NPg2j8dwBBphuohp4ZJD6nibM4fAcM2cSYxZ7kee8ZqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4merHQeFDndqHWcKXxbX5EEPEWyDvvmgNak3azdfc8WSh7JwdHiKMaADC1tbFg3fy8cUbhyjCj9CgoWWm7ZRHmbJ",
  "key1": "UBsyoFVgAY7d8YP1mQT8U3kbeozUEhrFuiXUdcVtbNXbfJdQK4BsctqYcoz8vic6e3TngQ5FidLK3ER5Sp4T7Ay",
  "key2": "3frCZZPBBYWzPSUmci3rGTkK4C3dpVvNzE5dFrRih7BnsDJR29TQ51aexjBvGDWpGKWn9S6mdaZv7LXR7nuM3u6V",
  "key3": "47oYhmTDjW2HqfvcfE9coD7Ciw1Bco74F79wiQnUEHFvKVw1sPzN4cgugWk3ZaoyvM9eXyHKX9Bbpfwboz4HyJfY",
  "key4": "4oSzexdedueLYvqSwqS7MY58hBc9bq122Hqk6fRSSYntME6L1rkF2VDkWhgb2Zyc3NR483JBDNa6n1yzs4BeJDcs",
  "key5": "4VEcgnVyhrrNsmYjAFX6e9jUC1CDXsNpaGktetGnVqHnGbfzwVKrjmfmVrLFmDqqXijzykanvdh5qTbVJu1MQus",
  "key6": "3QwYAfvrER1m6ydcVUpRZnUond75Bu94FaPrGu7wUFqh15t3bDxHsNsvh7iGShWknGhpvKRR52y5vX9QBRSANrim",
  "key7": "5DTqPjEK6av5ipHWUTWcBoQ7PyWdsLfoBWsneBevRZ9ZAZs8tdsXBbKGrcNS7JXDZv8bu36ZdBBPsikTyRkQWtuk",
  "key8": "5K8nHX4rXYrd7pGFny9pPrPA3koJm4VQYNaPF2UitVQ6aQ2aw7xFtSicDe1xtbFrtA8zcNPpGSP27BvjckK4g26q",
  "key9": "5RxnqUCTUeCdsRNVugLfYECprv1QBzp21CxwNToMSVBTWptkFYNrciTuwkkeXzxmv9TgCuwEfPVbfMXnXXxR8Q62",
  "key10": "J7RHCgh8GjGJiLR7VvyqDwz6Vwfu9hpnGHtRpYeES1omeDv118JNebBnS58xKuJB9Tf9ip2tVKrdevasE1ep7Ah",
  "key11": "3tEKJ4C5EKLmjvg7joAURs1MWE8xqoJ6YYWMn1ov2JATXpYDtEqV71Fofrfo6BTSb5WW8E7WLbrW9nrAV4PYHfPf",
  "key12": "3T6rzS85mA9qTaqX1zm3gYZRGyXoweu9ZBBKvW5dBoQgGiWn75LWt3kzheCbh27QzVVAdZVPgZom3N4ShqaQ3dTs",
  "key13": "4tzBfZdQr6hiCemQVubvH83KeeB269UEwHdgBMhMzdAK6pN5DsXZiVzjNH7YvScAawbAERLDHiSd55XSDAiPTPZP",
  "key14": "8fLDDNaevy2UFgTqpbLJaSFD54ntVuDEz3sv1Pq9mnLNUp1tSEvNf22ST1XtdHD65LfXnfoNuh6hsjjh9DEX94D",
  "key15": "2b4aV3EwVV9VzWQuqCQUw8eFVScEN3ZwLaJuKF5jmnn3g7tBXJaEReGHyLuxDyxwZr8de6ekeNZ6geKzG5xMnPSZ",
  "key16": "6Cmhko6gjTs4k2ALd1bQdad9mTyVFgHder2N3Nfqk29fLCsamALcwpCaunLRRb3RBvEHhm9SvCv4odurfEXEtQU",
  "key17": "5vWeopHYEeBQRoQs6yttuht3ZbRjJQccF1WTB9gxLwqwUGqtUecK1gevqtiW2rKe2BXMQEQs6etuBVDBaUa84TAj",
  "key18": "32MGSXF2mUQ6eXaGnC1vqSaMJZJw7s9JA8n6UwkzXq1kkZrh89rJWJ58KigYrPfAgA2opWV94TgrPChVPDcsvQan",
  "key19": "4xi1CUaL1ZqZ1AKqrP4W2RAceLHDabNnpomMQkqU6iYrxCA1kFahvbkHLftaz7ZLYK1wg7DJnPJXA3zAyt5YnHa8",
  "key20": "2oLxpXe8qUpT1mRkYUmQ3L8MfFtSjhrwudU17THPHyttiKB6pgdxM5sq4QQSceN145yjMwktHXKDDygA9nZxZgZU",
  "key21": "5ASZ9MNNqUVfYscshtdgarogEmZXP93nEceg6SuqTgPruP6Uq99sPWKEdoFqLRQCLd4rUDxJo7V7G4d4BtMPeZqa",
  "key22": "3yBEA2dBawCwYutJjsiaRbVqfD9KV8dLdbos2wTUVpnm7Sodc9mjeVwDgjLm53fGGvRetEuA4HPjRsbBa7rjggLW",
  "key23": "t5aHTDZCNvbQ6wZE9Zge8yYYqRWXEjZaLLFDi64p3SJBsk6m93C4cDTxfYW1H1A4LfTzy6aSeyiAyXAj6TbmXCL",
  "key24": "2xfP9vWKEGi17orjCZa3D2oDwRzT2sK36ya56sCAmUSB2ctmoaWsBXbBt7Ld7x8soCdFyrdUnkFHWmocUg7aQCbH",
  "key25": "2wRXGHqg7fbWDghpmPqbGfHkhTbMtWF9xTJhGkb9xxg7mFRf2NZtKryqsH18rxDJrMJh4y6WT8U6rvh79ZGGAWBx",
  "key26": "5BxgYwV5ZRGh689PskNzkGen5UhxgzVoJJBu1VUKEMxZoJ5n1viQ4GXGM8V8XPiENctSDhBFabkAA7itMSD7J9JQ",
  "key27": "4ZvFNb7h42dWdLsKyv8ECmPGzJV4LSqe8qcZz6RzRMgNhYmCQ65FtKoCkHyAYUwMDXbEggqYYkrv1J5fsULkfq9w",
  "key28": "437yMouXcWyzKiw66HsEkHvjvbsFBgwRWUkiDvd4t6Xv1eqP9fxN4d3farHijsHAFqvtJCtoE41aWozx4dPFXZNK",
  "key29": "3Pb9F91vcws9vA8x8P2eRU9QVbgc16j9iHa3oD2xK41U7uVVtYAidMUDCXwzNLm6Sa6YKcnCtHadoZpxUhL3xaaw",
  "key30": "3afkYWJCwocey5RjfEZeD236HtnqTLdCDeK3xJa9vUH92ZqmjE8VWtzTWbFnKZnTaeNHsoWSD53XuYm6ryFUUEN4",
  "key31": "qoUfV5uZvP3A8Vp1XbxvAR4c14jcGnsgfH4pD6KEAt9RHZov5C9oSC9w4iSeMzgeWURohSEGYDLqRWYasE8hWHZ",
  "key32": "3KG4gRWuZS7SUNoJ5yirGqdep3TyEptx2StJqPL2ZyiEMuFSw7qwjj6ZUAWqCtLTyUjMqay5pPnEnaef8NotWH5y",
  "key33": "3dZdksTJXGL1MhkjXJjdpgy7pJR6zukTvdWqKXf4bwFeYWXaENN8DLozwcU6vRTWwE7kUJDfEMjb4pWsrrfrxZmg",
  "key34": "42rWBdRVsu14Pgi5cc963DeZpSU7hETH8XAtNCiGuSN13Bz1iH6ANF6KtTis4tVi61MRAvZWYgu96ZZbF4KxrekL"
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
