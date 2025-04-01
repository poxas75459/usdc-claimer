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
    "5CqxN4vm1C6Jh4rVndNLjxUcXBA1LvWkXYALAtC3EFLqiPV4KVVN8sXs4Y9436yJC1ByN1U1yAgZtDe3y9E8JXF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ydDeXv4rBbm9kdGYGHLSzmudUayjA18sFL4XV64cVUJQkCH7biAqnquWABB4EPPbTqoejeVQMWmoFARyWU9y1eX",
  "key1": "2mh2haBgPDkPziSU1wtZ9hGUZ7tV1fheFHsyVnPzw4s5Mj8uBAc33wKNhKyrWnhHmd22yLRM9ZXJRtNeL9fPLfPb",
  "key2": "4jMdmsqzbmSah56vFjEu3SSe85YRvBskg24DihmghiCSiqXSn4orwQGFE8txToM45MNd9GhJjrBqfrp1YKPMokfd",
  "key3": "47ovhuRTvDUuxh1Qw1YNef6addwtod9mSzg2c6jyg17sd7ZtU36T7CYQaRnFTA45UbtTNZ45tqqszW6PNrzoUsAu",
  "key4": "5i3Ftv6WkAGE3DtZW1rfEsdMN6zkqA5PSY5TeCfV3kEwXHb2GPcZFriDTzUXbAHDr79q3vHkFoWkTRsJEchwHWSU",
  "key5": "3FYc2XUkQexMavFS36ZTQvWrqbKcR8tUUanij795vWTfMr1xoNtMKyRxhQzJbFVUpMSNJJyM8MVLzbpQqGDa13PT",
  "key6": "4L3iVZygDsgoDzcBvboW9n1PEcVY8bdw3UwSPPyyShFPqAjDJbvzLDPtk1wRovxqkWrLX6rbUjcvsqU2GULkLb4d",
  "key7": "nEXPY2GsyTyyjcgZxAY3g6JccMFzWPv3wf4VCoUnkMkzaTVztQAtwMLHiue9VQzaYx9WtcRvv8M5Mnz19GoSEYb",
  "key8": "4MBqqyRkuKfNxgk3rCpkf4UcDctU5rKeE4R6C5a6BuFkBbDzmxTdFbSY6yfDsAnvwu7yz1TKz4nNVpf2K19s2wcV",
  "key9": "5HF1bGth3eXgbZtE1SatDtP665WrCLqyPCbSpA6C1ArSmxFoxSYZ7rKhTThYXv5exzUoftJbgWrGSwpxeVzmWhXr",
  "key10": "MhreDN5WPDdo5CWBn4Mg7fc4vXo4guAhkgqXyGX3ZBhQu3QE2VNnpqkYZBp2TNijk9FJiCutTGuetXdYG4DCYR3",
  "key11": "EwgZzkiswtkzGRVAyUkdBxnMxxeoVJt2VFPz8aSAxg246BtWWVC65DdnD8Bj8Ne6Zi9zc2nsxGAW7WsG1BwMvGk",
  "key12": "2NtWh43T4SEv3T4siegRRqLoTFEFgzuws61hrsBoaV9b8fBHgtg768yniSeyECfLYYrg4Ziy3k4KW5wL54shYm51",
  "key13": "4vgjMPucGVhBpTw7HiHBpUdxLSchLtqkkmLkcRMUTMjTSf352XgU3o9EmBcJhkXaNo5dALypyPH4q7MMCq21PJFy",
  "key14": "RAghSYXSz2j8A5wiAkmdLoqS7wH94aCpVptNsrMuyu5zQSWHpk24eJNqwX9Tr9aBdt7JjxvacUWhV3ff23fRqZo",
  "key15": "X2K6GRZSKoh58Jm1XwUJDsMXZC4wMpCiTrYVAoh23K1x9ynRRsrMG2pDDAp9aygSR4qEF86F1UKJKokkW8KjxpE",
  "key16": "2ZmdZ6cyWAKWXnwrkfDPWCJvBAYj5hNRSZHwFFMnsiDe17FVHRDsc4RRuPhgZgemxEtDxkJk3Q4uuQKyUugbPNJp",
  "key17": "2MDfwPRar76id3zA96MzT6KuofwQ75LK4PSrYWeiGWHo68fnBGEgWMNrD697szPzrjSmSMuCb3hdVv6zwDVB7wrT",
  "key18": "3YngbQExduSoFL6nHbdH8c7vqU4iet2DMZMnuBZqQ2V1pJvVLssXkHU98Km2Zxn71c49uCYV3VGX4wzvKwAdE3Qc",
  "key19": "RkhAvhmKdAb5G7kizeXnEyKbR4RkMpZwqNBTAy1KhYxN5PJqY1ABdaJSWiGfw1rEQib2ZqnVr9ot8rjKNnAqNJa",
  "key20": "e4r9PUe5aEQzF8wikJXdy1G9A3u8G5fCSGNwSxtnwGytDSXkEC3Qm7WDjmnjLtuvQtngB8anKEmDeGBBZWDQaQB",
  "key21": "261uoBeFMW8ZuUZisP9A95kQJodsBhAQqWpUvKVv2aDSkSYxDSMnsy1Ysmp9bYryuhZ7tvVeMeShfLw43CY9A5kW",
  "key22": "4XENDw53aKdfF9Wv56oqiMptB66ZvgcgReGGFk8sLZmLuquN9yj3cuGrNcRfo9VoyAZsTnrUPSqyavNPdSikyZaR",
  "key23": "5dUv5XzakGfgg7UoSgecYR5RVpBRdEEa3Umqg3EfG4yuZgWMk3MRe23JzH7D4sAFuCnwaMBBA5cfrMZx8EUxnJvQ",
  "key24": "kkaz5AAvmVNe3XJbPfJrD9pzvP2xJnnTCQZVRZf3V2JNs1FnTtNxKqcLvHUFFEShL6iS3p5UxmEutX4soiQKDn6",
  "key25": "3L5RZXTpfASgX9V6w7KvQGnP4gaPFh91UhtsBDz77qN7LU6A3GYbuXd2mEpEGvAbk5f6AnYapLNHuk7gKNsjrobj",
  "key26": "4SxFLovtrjJi6K3bbgkPriGiC1qzMXKvY7nhr5mUnrxcE6hmW7keBLaHVTXKqWZ9uH26Az4MPu1eDWRAP5jpmrFe",
  "key27": "3HvVDy8tAJN2ujTqav486AJaHpEGL5ZDMecUY7Vi79ozGW6zFx8eApKzJwNLEkJ7eBqjPfZWdoTLZfem2CxBRDTY",
  "key28": "4dHyqwqeCm9188CAtDM4hxmzMTW9WBwvwTNaM7MokBYHUeUDAs5qxzqU1iymafd9X8LK6qqx5zcJyCcmByEd5pmD",
  "key29": "4dPSX4zRniWQVYjkHCyHUfYQezKNqJSn5HHvRFk4vfFa1NzrXDFVxyMKwgM5QvRUcdtQ7bQbdC2sQFHs5vjgkTX9",
  "key30": "6Xx2fPZU1aYYDqb4WFVWSTwbyZou1mvJ1xSFj5kTBQTYtraeGzjph2ccczxbG96y9JEuW1hYAQiwub247WvFzc7",
  "key31": "51Hxg2zWJ6pGKmJJWZbVWEWmGzKDVFybwhpi9RKgSYEpUSRfvntyLMtaAkxG4Ly1xkVUyXxU2yegPhJdqjVVWjkr",
  "key32": "371nfb9YvX57M1h1hkoBFU6ESe6SBMuMzZYhLsaqGpLofMHbNMpbHaRtigEAXnEZw3x2eKNYSGykPSxPTjiTkqbv",
  "key33": "2MfgJDPWuPMnFpvGAEqJpFTc3M7cSGQNjp6ii7cvHqEvmERuoWpxBoM4uUXGywzmiwqvDXBDTPUGdUnMqUtHHVqy",
  "key34": "5An7tGtTudD52jMMRfAHbVPVpBEumogajSvX2ScoTaFHPH2R89tL4U5kZ4SeJL9yqU6FUe6EBfA5w19YrhgodLzg",
  "key35": "4z3A7zLNuNgqA587nSf9XMA5NSFeftXkVhfGpDR5o9ctJY84UfhKT6VdSszEz3ZaeM83pfjzEZZRhqFRAYu7cthA"
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
