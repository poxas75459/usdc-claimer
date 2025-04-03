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
    "3BK5D515t3AaQ5E6dStZrKVSx6j4YpSSGRVrPf5r7zfTdrxdVdZNN2knLnBFrBEGD4gAruvdLrmBzsJ24LL9FJYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8jWnTEP6jyeAXmHyrGEhgKsvzyx4cv2BWki2Zm5VXPT8p636oSWEAsLHHtJ6DNiDSPgNRb5LykHrGdRSAmB11KJ",
  "key1": "Fj52in3NwUv8FJ5rpoqci4p1VyfbDu81NwVRSUBYNTPKvQENExGK8JD4WNhXTFDh7WSfnGQV8uJJ63NzipfpcSx",
  "key2": "2BQ9DPyogWsAxiLG3WGsfw8hKvuPdgkH6UBNJQcMB7C7X7Ekq7EteZgo91WoWZG4UYNYAkBrRv8JUrzE2bcASHnH",
  "key3": "36MBmvNVjDt8Ks359SziacCX4bzfQz6gKMrB9PupwDGbeyWYRf1unbeA7e572XUsFzeU6MXc7yrDKvQ9mcMymjYX",
  "key4": "3xvT6jbEVFiTXo9V98pb9a5Zj8M1C1DZDFERY3y7CJ4NKQ3MWV6JFX1QVbe8rh9GZ9Umh1SDbfV74JoLT4LCnk94",
  "key5": "3TrtUGAQzKfrtSUZyTNq5UgXLVtq9yqwuC7tY7YyDPa2A1SZXpf7GUye6B8RPHy8ab3JFonYmASGyAVc5UEFbfdn",
  "key6": "pxJGQgi6rsnySAsikwYzwEyzg934P4FgbhA844jN4kDouMZwNUhsSmCjMEniuf7QenScLWJK33vauMiwgXj4jMv",
  "key7": "4dEhgtJ5spbaPJ2BvqFT2cBqbTHPguqcFRxq1wu5ymWs3thUChGSgspKE3pqXFVninzF5YdEqnQjnkb13woKT1b4",
  "key8": "5nHKK7zd8FwgtwcZsZSHdSpU2BdcFBXjjjqGhnHwmJ8UEjeDGhANbJkhNVTsoWM9vV4MpebES9gDxwG3nV61ZRiP",
  "key9": "2xZLGXya5XVsLFdhzpfjHhR1pAcfAYKbWTRXmxvFt7boifAy5z4FGxS3MGJ9PRQNwTVq5sZup15Zk81z1K8h3Ycc",
  "key10": "4PT1iDJFcapA9LvTNg5dvj7cqXsr3XVzEdrwnpEh4YeiN4etZTv4EJsqfFbtjDRwq8c2QqMLnPD5DFSGwTarhhhM",
  "key11": "5n9X2o3hVm5hVcW7DDyBBPpXM3uUirbaPJ15QZrtQv7w5kQ75tsTE4MELwVT5RsZ2gNaUiAdHcheZk58mdJj3Kyi",
  "key12": "GvcUcGxo9DBptRozwxHSTasDh3Pmg7iomFTAdDzqyjjS1tjHoy1Vmz3U6ScousAfi1ZBGZVGiuHhST5LHs2Wmy8",
  "key13": "31oExFAEZ3Dw1niA632F9waPxqbsWeMisivUwm2pHg19HaRxKJCa3Tfvkccg6PfnAgaS6xdZ7Nx1ZRF8CFBXq47V",
  "key14": "qKA2mpLAKmp8xR6NZnKM9ZJZuxq8fWZKjFyvXFW7fBPPdvCkLkePxVWsMg6H4Zkb2pRHKcsk6qNmUwZ2JnhetNC",
  "key15": "3Lcgqjjrt63mCaLv1Kfj9eSnrpPVT84o3uDh24McSNZKdesakZZY6u9NnAKwFT5ooJtJ8Do4osNCn3tYfAejmRQd",
  "key16": "16GyXvUXCbCrcd2G2iX321op96xTvjy38CEeDmjN9vQ9NdZgq3T7W2Ecn48kBsiLjydxbHiqd3KQ2Pyp5f81Hjv",
  "key17": "5LX1SJQV4zJ2R76ZvfxJYD41P7GJgwi7R47YMytMmEyvHmZ2y1HMKaqFkBjiiKZAkh7uQG4GSowjyuoHwnbZg4h7",
  "key18": "4XR8AMvCeSyuT79S7qiSbr8S84UbQXYRdNc7qFs7vDim6BfszybayJz9juM4LPT5fBmMSPN3DTjFypjcVMH19Pwr",
  "key19": "2eswRLxtJikNEJsJcxyeQ7WeZkANGZsAr2rMf17zEwqiL4ReRpjhETpLBknWGf1j2yxZEKVv4ewUantcijTZEBuV",
  "key20": "4RDRR4AY7MyE6gyUAbawAzx7gFgMPVUqJWqEiYB8EqLNxTqJipGTQb7DPjYikvKFEfB4MzQFLMF3hawP3CFKhA9",
  "key21": "3E94vTMCTfJKP56NycaM7jKbHEgTnoV2amS36puenErWdtToLmfKfxR2Thh7DBh9JQ7L8gvw1APy5oxVmptmbKgd",
  "key22": "vBaK4EZJdVMenZuPVyM6vGdu9aPpFJaQXoxLWeA9i7evRGB9E2uC14HSJudZTAMvqdWU3X4JPC4f5ochek54P98",
  "key23": "4h4xRRUWKTfReSGbb34LKAkDQLBgck68tobvfEi9yiUHaf1HaP5Fs7uWiNxpngXi3gywqoxJZkVdVbxAet9MnyD7",
  "key24": "2EXNF3tP1gspJpK2pWtQmqHkH3L5Qv13Q4dB9AAz5QzFgmbtqLmPntXRBRwXqus2rsGYa21mozmi4wyzGggyi3ib",
  "key25": "5GZvvkEVPq8SXuGo5HS4eMUDPGpZJJCzEDqFzRhMK6jDRpi7SFvzpy8sDFK8KM4atKGTJcrNP8R8a4PueTPgfobr",
  "key26": "3HsbkmyxRbT6cCsiV42oNwWKrh5EaLkLB7KN3MQNMW9zRDgF3oTfQehDsXPUEPdpevNqEt1NhJPuMyJbeuc7mALd",
  "key27": "4sE6CgJvJtnYPZSYtvPK8j8Xu8GqAUsSVS6Lyh7pveCKqaNK1ig3ZSYYXX46oFJ8nwvZ3FvY73czGYWsFpBKfZT9",
  "key28": "2DjEAoyBad4G2StteMbZEWHTmDe4oSQF55WCPQ7CvtSLLmrzD6SJKrrdcn2n4XFZPeBXZLECEx9ktgNMBbQTvmfQ",
  "key29": "4vhybZWMq8qxj2xdAWDB9QtrKpY5PcLTb1dDxons6RdK33fyeQWbqCXAQ36KUqzCT6xo3BkEaVowX1ukBcbtsS9s",
  "key30": "fhBhM8bUwd4rwiQ6BqasWh1hUbFHDdocR67M8yQdthQEo5U5vtYz7bt1MhbVuqWsoLt3E6oBp4VjbWZTzThmqkk",
  "key31": "h94dFsWvE4FBqc7P1BCx9SD23GuYwpnStEubUvqst7KFUwEVwhkKyCHDHPPor7Ds79w3KnzZpvraz3oE2ZQ2nmX",
  "key32": "2K6LuYKCeKNDKdvFfiC5uy7ei7UXK8sSAGDwpPQryGD8CZGQs4haX9FTipygVWrL1jieFqqQCrYGECAdh5t2cVrE",
  "key33": "551tVPRA1CCjkddPrswa7cxQrCh1zkSA6gP8qunDnoV6nLkHerrRm6rNRXbceh8URDxQG5J5pUeeCyPXWzeohmwd",
  "key34": "4gL8yjorEQApT1xmyYE8wrbmQcPKmeNNDgs6EaFskbb6zwxgkPjKBPNwcxktGs6hJjeHeHEMtYg9L7Tb7MskZxPK",
  "key35": "29GR7twakBT6ZEvSuJrwiZeD6yZZbxdJSczRdgmU1G9KmqGeREstSTqaCRZXFLBXsqdMAWPfxDRYQUD28zNUu5fq",
  "key36": "359tUXsjjcjwQY9mZsdchpnBmrN2iaDrrTNqshK6TjvAoZRh3LkBjmZDWEaWaDg7FtNa17fw9WU9r95n6jnUb78Z"
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
