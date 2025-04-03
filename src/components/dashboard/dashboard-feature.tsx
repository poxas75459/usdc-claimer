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
    "29fzWgWnRugbdVFmiaRMh3z9kQtgKigb7zQjLoK1MXHEfeEPanuQZMLVNEhzTdQncVQsJAoqiyKL22E2Bqv2zL3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWuKsa1DXa463qJ2wyryrtYkDJZPdWymjbA29Um6P9qFkhDxwGv5tG7nvqQcL1Xd4BZbDjFvT1jeXGMUfuJ8ijQ",
  "key1": "3YiWv5WqTKAfJoE2fcrYWH2327pnJNh9nc5UgZiEVmRDcaCBvua4cGTRzaoSAjYyXo2SArS3dSb3TMxjDLPG17sz",
  "key2": "SMydjr3uLQD1GYYSYi7CctdGhVG8EpjAbmURtw952fxZEN3pfEA2LXnh9Sr6Wkg2LerSDt6TT8C96KkovjVnia9",
  "key3": "5r4pb77CoAXqCYPBTHg8QE69aXu7GFYAe2UcEKZGdFrzGM1rsvXtKk24QJh9aTepvm2W8Yogxw9dtKJEDu2XeDrD",
  "key4": "XQ2LkBy7TiKSWMkj4Caseu3V4Tbq2EyU2LQ5hsN88FmEbe4JXQTLVng1GDYY6ecFaee4kBFhWUyfdLisDjpvXTx",
  "key5": "3BhMUv2CcNPG7U76huagriT2kupNr8mASismB3U5hc7jEqeMR8cAoHatcwm6P8ZzQpNCmMsTN8oVunkAmKiSzoAY",
  "key6": "adUCCxah9kJDBxrJYDnsP8vSr82UroX8bE9GgLa1FX698NaJqE1qSkMw3aDkSAzbCe8Dug4HXSMAAi6aju9jir6",
  "key7": "5ec8NeHtvwdFpWwKLddwRL4ZSKkfCxXMyjDDysa5gDswQMTvkNuNZz4BGQUSH1fEy9eiKT3bbrsNCZkWcqE7Ahfd",
  "key8": "4PYbq2zSn3RiytQ2miAJr3Kh8iCsdVjcVSpTVGyTLeky86EvcKRpr5Fmxv5GrG4A8U3n15DJEcPwW3nykoVvHf4S",
  "key9": "jCiMdSDzTHzu1kv9swLitzXVQgwKEP1WHCYX9bYdUXZYwsNKnNDxmnvbQAzehLEuDMz6UWhLkmvootTbgUowuwM",
  "key10": "UKxxRDeXBxWcgeN7GqCh5LspdLzchkPp75BECCVcN8LChqmqwuLvVdQUhC882gdSBh59WKzDTPeZtYTmg3Lg16z",
  "key11": "tPLxSgKomu7H4fJESv78haTxkyDNNEjhYC67pJnCXZsHpTAcBtZstV3TbQTRguDsSXLJW56yoBzDckkxqw2etFu",
  "key12": "5ZxqQor9z3WjQDXu6VjMyEEhCLH7k8Vn8qupN4ZrFWh3Q2kJDMYWE2PAjWUA4H5R3JMm31gM995fSqWbaxZXQDPP",
  "key13": "49PB3hYLAUgWAhEDk7jWCiXu6EDxEeV7uY9mTBwxB62AhNVLxGiFQLKg5BpTqFEuzLVvp37UB66WphYoTMxbue4",
  "key14": "d48dWzEynVZcisAA1zBEJMH5h9c8ThzVpSYkPJb7GGan9s6b2X6XUo62C5T7f8EHMtukBPj26bjmpwBb15JCTyr",
  "key15": "4yuLaTNHT3HRNrQFmhzjKwSNJxytC8Knno2xvQJxz83Xi4i25op4Cgp84rbnJYJ5X6nRifpFYKhtsjqff9j8eL6N",
  "key16": "4QtinmfcYMeohphMCL8BGZX51cA428BxFfkgsvURmiboihMKg8GHSAH1nwGnWbXcnnbxdbjyeXkaJwhWzKQX5nDS",
  "key17": "mqs73RgMwJvRUD8FNRyRJVQNaPQuFqPprshwRvUp84YSRsjJHG3rdxL9Xva58jXcXRpZX3DvhpPEeaa7BPTp4kc",
  "key18": "RebBhsf4WffeztXrRHKMvGd9qsRVc23PUjUYMYn85REac7AKpjtUCeafJqw5fbbcsZXUTsa94j8yHxBF7gSUNVS",
  "key19": "447z6kQY8AHjbUTMvw6ZLcDfp24NHRiKLp9q2NirxLJgeg4ucck3tBk82kpALZJ6nejWSuyrNhbDMmBfVDLDz5B7",
  "key20": "572EevgRCdVgtqc6c51Ke7zXxx6sxHv5FktQ2qc2NUEDSEQ2mszH2h3fozMyR6aMMd9jJfMuj41eAfFx1Bg9VToH",
  "key21": "2K1Zy4GoBLYZodCh5tpj7Asc4UbS7efP4v4223DfmsbHHVEg3yhYYjmpvn45L4yG3p6fTbuEjVg6kZhP8JwNx1jq",
  "key22": "4MSjmbEPAYphMPvTtjdcF4AVQLmSN1osSydT8ubcr31Db5LVMeaWFqtnuWBnGK31pzzzWavn8xZYr7BB5MZUHX5j",
  "key23": "rvTz4dWfzc4H5HiWhDQ1qyZQtRcEjKkBy8Nib7Gy3QiSsgUNB6YcCdaiMsKjTXvELF279KA9bSxXLwkHemgbWKh",
  "key24": "45SMWPK3YtGtdQaSCmiWV3Savoxv5mLggkpRKFZT1LchMhVz1aM6d26dTgzHqTJh3CTfYaRQMe9H7tGVoL54tAJX",
  "key25": "51wvBWio7N7WZSQGjjBaAfmERkpcjYcmsPLW7m7WHiw99A8n7YekvkyqowcTitQBicCbRoTUfxrdtnEJjgPTo9cF",
  "key26": "3FGQQHHGpQCxrvzJqSEMmPLk3LLu8HHzAQjotWi5PxW9ZNiTQPPfSmoN3YobBhhNjMGLqVs6rRMgWwAqGkMt31L7",
  "key27": "2WsqZHYwaGgkPLePTEjnqyDF8uXJSkFnqM3vg3EMQLcD7oHeKstAk4U2mgh2qHGKdy8h3PSKBq4TRcsfybP8H6Ai",
  "key28": "43ZuR32npHZB8tKgFfsbKon4eyw8Bxx5acowUyUzbiG3zWPR6WJromwuaQXSWXtkTzmFC81UQzN7r4kLjfWN8q1T",
  "key29": "2AfHHLhx6X1eB88QDHkcSJ8qF2bZD2KRZfU3sypGAgGc8cKfk95h1Y5xeuVTS49x76haBPoXTsZ2MAybRhBH685N"
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
