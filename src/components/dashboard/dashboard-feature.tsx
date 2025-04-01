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
    "2fAdRFv5nBYi6urkDYYGyU3D9ZviPLNpFKkipRXM2iFi768TmGt61ZaG1VH648VWLuUFGdkhLNTE4zh9tjfbVF1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sY1kC9WvYGdPfRXXBMJAHoHNRqLZA2n2PKu1zFXrHUqwx5VuM3XSRZN25kQeZmHvVFuwYP3um28mRWKeDaN3Xq9",
  "key1": "2Ae9aySSXpxGHVPbNsoifoMnS6UzVLUE1y966k32K3L28U5sJNxWzxVmsESFUAWpZ34BvuPsUSc25hU59f7iSqKB",
  "key2": "3ewM3hsMX8cMJEm3o4oAqyyhyzDG6FpRKnnXNZogT6Eq28wN7LV72LE5sVKVaF2iATw9Qn92dNj93XvJcyXbTQiz",
  "key3": "3mGFcrekQKd7ofH2j1nox7PvY9FWu6W8uvesxb5FVQcqafCUGdqb4MsmXmtfpvd3kbQYL3T2eT5czeK27Bem4tF1",
  "key4": "2NUqYbBxPzVS3d33uRMEBm77UyKSWa8fhCF2ScwMx9eSZbXfmWpTzsdR8Am3ybpnmrRgFbDCw2fGPkVpM5xssm2R",
  "key5": "CsbKKCJe42NhZmXZJNeSmUrqjZiTZ3Dvcv5FAz5HVeXXLKP6thkbg2oDNCPuG9v99KGDiwuv9C3crUcbTXZ7NoH",
  "key6": "4EFymtYGGbj5hqkNGFBnSFqBfibDs4AcrdYvUVkSMqAFVyHX8rhJ73GRmuvDAGcWjHJai2RuAPSq9SijSQyscGEi",
  "key7": "3s435kCobvk8suFf1AF357oxUe155HK2GUd9ob69XMK9k6GBfwd2k3dVcdfQb9W51SftQerX4rZSmKSU7oUvMZbp",
  "key8": "3pZuUsifcJ1wZ2tHLuu8fTuHkkqSJFAA3M76rLmkuy6jCEJ4JaBfdh7nGtRvkKABTP5oLz7tfoZhdVKhkXbBJKgZ",
  "key9": "ecKvfMhVeoVsfMoGpv8VAxvxwA5PzfLPRVvU6AdzgwLhwxKAMmDKsMTQgLEijHec5eEbMQe1p9cLR8aPSMfn9Sj",
  "key10": "2rrSXxE7CXtrUFQrYMvwmdK1QrDexsHyyPcSwED2cghDqsprRKHTPTakh82egsUdtjmcU6VVhkVGAfDMksACgQdP",
  "key11": "5PvhqbspBhaNkRbu7bvSwjPVxiDQkXd7V8hVJZ4SAdQSDCm6AWK2soRNX4WERFc6VCDsnCszLRmK6TngMR8u7TEy",
  "key12": "5oYUvKJWfAS3KMjGTGS1MWTwj2vCnHWtNorfA6xXrfeTcCrh9qWveNgC3wtHHpHvz4fiaBArwFLftL4dt9pYQdHG",
  "key13": "2QJQWBj1sw8SrJCY6bLTR27Xe2G2nXSQMdZtiLS9kiHA29zK3r62Xm3A6gyZwpf91ByKHBMLXznkqug9Air5Ssms",
  "key14": "5irT7dPbztUCMqJwh76evTGsX3SARGRxFPe9hHivuQhxKCdM3pdP62ZR5LpVZUH3Y2zf1EFFFnXQmAkcCm5nKi8A",
  "key15": "4cphsH43XVs6J5AGZFSTgAr22J9qcS9U3jmSNKvy66BhN3UpQfMrrx2CBunPS74jpkXbFwTHzsXAcvVtdj8U91ZY",
  "key16": "vSBqTVLR9vVYpx7GMkL6X4xvxLXbsYVM4fF3YEJdu8uE69oLiw3U5Ag5HFsh2kheQhUuoBDYHF6pKjrxpeVdW3H",
  "key17": "KUzTcLh6sp8HUcoRhQHtnGfgV5qpF6hHiucKTmv2MbLSXCDK7b94EjyBiHcHLN1UGXjynLY1EWtkL7Y9s8z9AnZ",
  "key18": "5PFKKnr7GcQSHVJpPEyjeesDuCRGcHhJF8i3YWAwtneHji6Ws8okLrJEBStPNggEuLwXXUUrGSw8qusfVcALkNGV",
  "key19": "5TaEWumBqBuqFYLH3KtgRHTMQ7gXrP7XANyGdhXBTf1JfyM9XzPYyNPbzXGxTtNBZXUTkBiUne4LNhwn1MioZ7kk",
  "key20": "41oz98PyztK5ENvzwUZphsroKhu8TpJu1Yg2g1t3XcL8omTDo8HmsYALqYqBMJXzhT5eNqtW7L4n5nZuEGkCnADM",
  "key21": "5SfbB26C68tVLe4Tez3FBJCfCvobbcQf6vsNsU5cMz8pC9eFCSY8AEpeSZ8H4UDGz9HbuPRgphGwogtSSP66UdtP",
  "key22": "VWJGSmvuWHwzyz5qD6pZSnPhVs9up7SCVdWvb41zFpYXAWwC72B5DMMEjScy8VQvjLvtQ4Yms3n136UUv2qKvTF",
  "key23": "7ZcW2tk9VngdtUfrFC43GGdascsxFPjSEKdD8HMHqQWAYggp6VtbFqhZg4g3PuhLjMV5iKuTx7y55qsT3FvoMid",
  "key24": "2yZEYfqGGkFTqZRx8z8zLBoyd8VDZ4TwJDQxdBFx1JqbKcXDNsgRYy8XU5yLoDs2AEujLmPBSiPDzNrr6tjt2Sd5",
  "key25": "24AcUN4zL7U3XDLWDB5sPiLir5ZH83quuHxT1a5TEaLkxZHJaNDjNxJqjkQxheDW4z3d3MpeeT5WGMnxETEpxAwk",
  "key26": "3DiCezcUBvEymmQoSbvFjPwL2KNFoHw2TYRXcoJDoKSqgegUEb4GjeWnA21P4TN9NefPoVMeyB9em42Xn4QddCG4",
  "key27": "4WseBP23MVZc2zPwaYEvsYptWCjQXwjbMvKFNaoGsSxsbWH7sWhUMQcdQ6QvVmHK3RjGMUJ9PfCz4hgWsej2hV7g",
  "key28": "4ho2KsuKqkL5jmkqVYryMub3cgW2DqpWtxdtfWU9x4N5osioAj34feJSDGTADuNnzRx4k9UbAUYbqMvUE1fyFzjQ",
  "key29": "24WmStwAxbBKycz9NUjx3cMAVdRd5zfAa3N4S6Q7ozDZ9A5cem3nRg9h8MhVaN64sjewN1ogWocFVY4rguBUWDm2",
  "key30": "4zM2aB28gwy6sqLVFxL6k1n32x9Fw2fW9cV5okkL1n9RzW43hfna4amw57hmtUE4oDJhVxiYRYiWjmHBCqZqeeUP",
  "key31": "FoBt3Ln88rhAimQmqHKHWRyxaMKHAWnr1vh3LLeTszpcFqAdmkkP7FGuCXWHKfwzTq8Ra8cBgYxiL4vqX4iGYhu",
  "key32": "64niUU7uA2HHKJwmcNieUeRwbS7DmAHZHW26JDHsyn5GL1aV6ZFQADMNxSCDpQZLVSiQzGgVhgou1LgqozeRDyct",
  "key33": "2icQaXw8NBYkDaa394JbpcUQwLYBBnQS7QJ8r9bcz4DerD8ze6wFsvxEs6fwVmCfqy3UEnTFoAUsyH17ffjygavy",
  "key34": "5FiSmqFkLYZHWw7weR2Xr1Km8xik8vMkbQk5jYdmyyvFuByUuf5kZyETT3B1XyZYDBe5GrSbochvCzoW3DKHXCWK",
  "key35": "HfnxY8vQCsaFVbtbvNmseHMmDQ9eGvqiM8WpgDcRAse2GNEpD3nA99a9c8HojgRoiGGJBRTNTS9k1X6B2S2CV3F",
  "key36": "4io57w2y9HYAA3WQvBdqmC7YN4ZhUtWNVNxkgSpBBcTvH5RnqSTBCKFUN168MHUPhqUxFpf6SA9nWYsoaDV8EpS3"
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
