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
    "4JVQd5AiJZeGivDFw3BMrkpY3ZAST8TroaHJk33qErVtHxwRfB4oB8SxQBg757Re74Dcw2wAfzv7VWPFtNAFHxNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYnUL4GkU29G1QuSgNuUKhecvUqeAE88FmubDEDzQLaYDzZ1iHcNgKM9MbUmp7rU3ZxmZUvDGdkiEEih6cGp6Ls",
  "key1": "4vvQvAYUrRMjD5LdjS9RNvAtfWxVrXAdY2EZryLSNj9w77mw4KMnpjZWGZne3eV6bcRtPGUAfVmYFFotJ6gXfJW",
  "key2": "hRx9qtD9HSdev98w7QskgMr1bSzrm7ZXA6X3Ri7KPJUYmLAgWPvdvMswJQS8oYbqZBbPY6nTD6iwrg2VEHofv3e",
  "key3": "2Y42Bzcy85CScC1ehyqVdKx3WaCeJu5rGJKzWAHeRsxHgBf3WgEr36QphdRe7yDxTrDadLfmnQouyhiChGVntKZ7",
  "key4": "4KFRsXo3uj4jT2JKfA4QGZj7GXg94spuxYAwHmMM8C59Y9e3P6q8v9jUS8jHiHduPH2izVyLqMrXgx3oMrueVLxF",
  "key5": "42hod7iysAfELx6eYVoiYXEuUkzqBfEgLXsNziVAoehwLjFCCQHNXJwWMQk9v9Chvt2rXiYZqBaNtfDy4SmFiU38",
  "key6": "2WHm2QDjnPj814WMVK958uXGaVuSQDGqtMkRD8FJdasKixuaWxydU8fH4ZxZ5FJXDeDRaRusnWB57r9sRNCyofFM",
  "key7": "4S4Eeyn1F5CvkstbRb2CeUZkve4d2RCNrEPZfUwxyJcMyKiqiQFh9D6Y2rmZ8zrJf1sh6ek81Zd8H89AmrrpJh7p",
  "key8": "5eRyBxYkXfr2ikforZ3hGL155et3GRQ4aSKAWhhux8x1swfhsTynC2jnZP1bqzYK9YdpqM16gjNKBD86AbQxcJTh",
  "key9": "5LjuTb4jQ8ee39XWc1qmjWQnHzRh6aR419m6qBU6UTu9m82ivdMoQnq4JdgXiyahqCdzsGUCckyUX5znP48ahoWG",
  "key10": "4A7UPPqYrL65JcPXKHw6aokxg1TsnoaibY4bEuL6vUqveyR54GfNe7opjqguiaJRrccbNwRk2tyxymSM5FSfwang",
  "key11": "2duA8tYoqHH1LmDahToivQeh7ksUUgWpc6MocNecVxZDJ2t6JMCQAkhi8WUZfWjhQyJw1FAKA5M8rgtJwitWz2mt",
  "key12": "2ftnFHyh9fhW57RAMh4tmXgwTfK9TQUzUN4rzkJt9zCg5WRN7x3RTd4trm1xkErNgr57v9bjmQisUxA7FpzLmiJz",
  "key13": "5P9aaDZaDEkw4bgfymu4bQPN1jCcxbuMHi8MwPG4ohiwxhueKure8uYyZQz6fg85ngUqJq7EfRK7VC1ewHVDxUtD",
  "key14": "2sGUHrcvgLWqDRGpot8cfoa3F29XZ2ZJM5LjfFq6dSvV2qRbLNatZsSJivw8iYSKXmzSMCEAFjWvNvHzCa3Lh6vv",
  "key15": "3QLFzzT5qryYk7KeGRp87FSrLNRHkMZts3XmQWRqNJBsLn52qoyHbrmCSwRwtjKgEZRAkgPDZ6UXgMQggy1ibzdn",
  "key16": "56Q6h6GEK2tvL1NUYg13Qv2f2HvCqWtVzaFf8h6pbtxUS7Ge61XHqCzWDNbNUwp2xxACUAAzzfXs7JneQYEDWT4T",
  "key17": "2sVjT7VhzZxrgQfZCidkAvyf5TK3AdJTZ2KYGhe4C45EnSQixda4BTuaY8ggngoB4P5wjKfQ8PLrTQRd2Uq6idms",
  "key18": "4bYWKhWGUcUgjqhVZGMskxTCcicC2fSpqHdE4r4GWfRMFz2eqWPQUimpNvYd6uw8oTCnuvdt9gjtcaDnCpGoHq6N",
  "key19": "61zQbc5zznubttLFxFBDVdfdA3G6CJqgBPeQ3QR73mdS4c3UHdiDZdrAPFuju6iL13Cb5v59vq2NdejcusC6a2xA",
  "key20": "5KoxqGa1yrXXnKAthvEbFWdaahXbUn5ymsnHpsP8qzV24jLNBQSWJ4tqfBRVmSNYQSR3kUKCJpyZhotTZEnr91ua",
  "key21": "3XvkX34zuzpmzHTrRox9v7ELhoGSH73yjgBrVPv46bfAYKSr7m5ViYgBTWrMNfktRF4DPA8pXMGNZ1V9xj8MTHqR",
  "key22": "4YnFqJr6Cb6n7f1PqDBzLKSoJxt3z34xvfY6vCYuoJPiz5woTEuBAAnZACp13uhDkptWLe41F28eQqC8CVL4LTDo",
  "key23": "3HhQYSy9JXvQFpmbuueGZjASJ7f8E6pLobyrnaKX2htK8anBmDc7wVQ1XiyP9uYoTtCE82UdgEiTN6RE4ZLesDG3",
  "key24": "4JehJFHTnMsnjab2Pr5z2uYjJfaYTP7uNy2CCUxvL8pcBpyJcc2SXJTumP5kU6u6ymSP5RCKkryuNtWHNwwr6JMm",
  "key25": "5sK6mdJTEeifAR6h6UjBYjQFUXSq7hkN9Tqu6TesFVwUUVW8ztssiMUQqjtnXCqJRasD3fjG1scFHvNaaQDZY1sg",
  "key26": "4HtrBjsZRPKZH7mNXgeEMCydkNcmXJixDpu2fr7zSidfe3sujbTbWe5d6Ewd1jXFjuJzsxc9V3TdNKwqaPkWR2jx",
  "key27": "4rnXGgw8NM6YFVUER9EUic8Hxeq9mtSasUQvf4t91UTGMW2QhmmnRjss4U5zXuBKfHv5J5Bo9nDS4tKyDmsApWhB",
  "key28": "3kcKJ1BjToJkw15y2cJkq2HzhvZqrUoK4G867oq4b2GBtHi9jRguzYNEe1MjmxMYybpaeg3xb6oiX73PJZ5SKBbd",
  "key29": "49a3dyrsrixYXV4fkfJs9H95qZMpxayYyWb48UzuzNniwY1NcG3imJWyDwgjtyXdfC8j1yYhx6boJezoJ6usCW1P",
  "key30": "5uszToxRkARhCbriCmhBVymsnYCrP2BBUQjX3ZhMa4Cxx6YJ5oDtaDKMTUDCVqqTPSxH1rugXkLjSAqLCQ1NHk9D",
  "key31": "48VppZRyP52Am11mZmaDtuiqxcgedA6FrhpHBr2u2AxtHHm2egDeKZ8qNobu3WQeGpQi8P7CZZr6r1mfyCe6CK4o",
  "key32": "5EoJFok2r7jMUDgSTMtLjULTg58N4RBaN7BHjzbDXkif2xJJJim8uP26bvxAn3pEYJ6FeFFEtyNPvW7zX1PP8K8b",
  "key33": "5aZ2NJcQR7E9QEFbU9twgzqswJ7cd4bYLegwnDtW2QUBQnJBWnWDMCKiR1VGibfoJhgUfgtMPFxE34Qxjfp7Paxu",
  "key34": "o27poVgQsnNxiK8ct5C6QamaEvdvAcL6ccXJm7WNpjhyi4MaxTuntg4yGM59YqijFr4JEMEyy8FHdZ7btcr1cAu",
  "key35": "4yJGeDVLU2nfG2fM2Tk1pKEieYcfMkKL9p63F4yi8kaq9WeagDoJY31fVmTJkRbe8UfK7QoQUWLvu5Vf2Kvb3wK7",
  "key36": "2LBd4q8snWjp5Y9dZchtLjxXjoK9UYr26axbDoYznUBXM8PKNSBnbRxmdGjEQ6UTqLFAMpwdg74TCG9bizkebCLE",
  "key37": "2jEXNtuiZc19BnvRPWSDyeWTpJuvXPyj5PXKk8ZsmsEeAzNqV45qG52ErZRRS3rqCcNMXfFbR5jm8o8mV2LevwY7",
  "key38": "2NWMHbdKwSwZuvtDNtSwvSkLd74JGuX38qV3Rmt32zBwptMtbRRpA3EFXzMa9VPvDnmmovqbqxfQBm1FhpF1FEJF",
  "key39": "3Lg7izNxTWkEJjWpxJRmnU1JwjzV6HxQpXkVtCnvCfs9tcFhsnfKArRk9As9i3aqyp1ob6CKhVguHCaf8LsmhNz2",
  "key40": "4pr7Hg6TTgotP3BXpARV28NzGeLZTyiFuswvf2HbbziZtrkimmybdMN1MYd48U7S8JE8aVx6q42K7vnMtgTnZEbk",
  "key41": "DacK8asubjNKw7q6zrAnWmFkLCoMJfVAmMV3AdDSKbLecrS4M1k4h6pj7WEkPtuTSGJ3YPVPjz6yQXToq5VuCx5"
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
