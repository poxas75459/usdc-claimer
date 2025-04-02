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
    "2qf6rJfZXz1VWG8LBQtuTfScEUdLoLJEp9uxD6ZsuKgZgZsj313eGfUc1epNENQg5zwaAih4diKuZFagVEkDdSu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vgy8CbDfha81sQWiQJRjH8NauVo1vLSsL12CFRR7xgN1KZybTXiAaKxt2vfrhrLXAEirzo3k13cVjKvt38gyP2o",
  "key1": "2YFUffsbrNwkFzC4M1ZbjkA32t8tFhohkbCUT4zektR5kPoWEqV6eFkgA93FbRFLKUdoeuA4RHrNnM61VhuRt4ju",
  "key2": "5D5c9ufditjscuV4oA6VXkTzVyopKVievEgoC7YqX329eeqZ4ZkUM66j3rD6ERgibjK75XnqsyGUXn8RCjRzVuq8",
  "key3": "3sKVcuHAJbwKziUU4SbQyNpGhJDvnxvmiWmRu28D6qH8ndt4dNMsqEMwf3GPt1AdEkYU2gUwhKceTBviG2Mqwk1g",
  "key4": "ifxjPEQeVXTRtjACKKaehUZcLGdmbxEvcU6gQn1pgDFPQd61W2RALcqpnR8g9cXZEiC8m7qfswZPjgRDHTYLXrn",
  "key5": "5cerCJLzLQc48P7ktxC3gmtY9KopuXN89y26zHt51AkDamYfb7Zyo7S3B9o2NKgCZjT6TrqGittmNrrJAQaMzr2f",
  "key6": "37K5nrQpKD5ozgDWUimsjH5YoJcfWV994NrrpZLArivKgfbWjyLX9854FQ8pY3UnrTwFhVKqdCVykKFYC8mZyarh",
  "key7": "iAhnEdkod8mNYqkUcwBxZtwn8jgf4ZG2o3Srj31dMb5onQptSbUN9mJpDmBSFPP3WntGAAdcZrRYKPPUANKR628",
  "key8": "4eL3MUm8o4fSyqMxSSYbfFkfH9XQXk19BMPswVkGz5Dr68sUhtnRuZ6xmEmdVceeEVgig3UjfaWfquBXTEnLakgY",
  "key9": "4iZy3s7ihvo3fQ73eF8bo8X87p2x17hXcJJdGaVXYhJrJXttnCQ3YewW4J8JzXHVrG7sbpc3Ley14GnL8ybAqfSo",
  "key10": "21A9cRSDiUs1Z6wWB6dRSGxW6GsHsoe7YnU8EGAVEm9VoCquMB3PxncE2XJmJW1ynt62Qg82QUzXL3zZwyQjVhJH",
  "key11": "4w4nrVj1xhQ81aSPMTMTKZFgvmH2Br6GQde7atHgaKLvC2a5SUY61PP5AgJhjSTKe9WC1qjMsfCocmPPjqyQnSjQ",
  "key12": "39yUDvNJPLb4WgEh8kTwVuTxvfpMuXL9Y1ddAFdsK6eh76LaPYAjFFi1EEcuXA9m5BcUtdDbs3hvNMbELd7wuQYm",
  "key13": "2i4vZbFhcfT4LeF6dPWDmx4fHSFd4onTfkZUjGG7PDDFXfuaEBnGCXXMywFUxHwK2CpXTLjaRV3x4kPmxmfPqoiS",
  "key14": "4CHfRda5SLBEcRRsCBSVBmyeFa1Asx4iKAjj6NGgvXLQ9RtyFz5gMLLUbtmunzmZchFwvWLeqjFjTArBsjQnxUm3",
  "key15": "3Buir6R674jMgjXbSDvSjJsGdVCBK3tB18HPnDfaQMYeADWsJvsypuNqbbsZsmpMFCYY1zDXLHtgF1sN5odpZw4R",
  "key16": "57hFvtohaPDKxNNuQEPBER2hXimbNL1Fa6MNjPtLywPZYKGfAyXKQuaVUGENjfFq9QkuMAtUQWHcCstf1bAxEe8z",
  "key17": "5cjsTNyFyUKDKdMCLarKCFp7FvcLNyCzBavHPsCZ11eVD7V6ZZKNDFLv3JAfYnfYobx4QayzY5nbeWtXkXUZw9Ap",
  "key18": "5ou1ASCfXWWaZnDq5pnWHEhrEzFjAbfmLYfoxRpi3FP7Be26paWcWosDThzJxTHixDCj9XD9p4uBGF82Zp6QUux9",
  "key19": "2w1JhwvTY6LyYmWgLSDUacQKopYSVR4Aza4sbmZiwsvf1ShjBd9FU6PEbkzbZDXcJjxgkEZ9P1dedXXedrw7Ptky",
  "key20": "4kRouNYsCt9Cn4aptk4buELd2Rjb9hXfEjWEKVW7S95mNW1tD3vzD6pREH6LviXF3nd6NrCm79tBwrQcNixkrWj1",
  "key21": "3wrCZCUx7dFuzugDxqodoSHtwbF8sUZx4zt9ZCUsSa5S17MundpdJpLpCXhP8VSgzPsJrQqoq6BLikwGz2e1dPRC",
  "key22": "5wnQinZA3DgHeJkQmenJXBDexSMvDGpioFMK21cNEho5bSkHPogDxhry7fEaDimRGXQQe1iwBKniHYGnG2TCFpco",
  "key23": "4U7eg4os2kUYFdeqffncdthFQuGKhtrVpAtYDZdE9ZuSS5vcfgWkxmA69BtUuay69GvJtJDXLpZXWo9Utj2eQxTF",
  "key24": "2QxT942HJr97JJe33DjLzcjqwyUjctmm5eDm3epkUCFaYuidVVEbKCPAeZU9TuF8Zr5ppWk3A7dXjJjrMWkfhNKx",
  "key25": "2fbjBTZXsoxEYGk9LZSAcYH8FHhqvCmKCXXbYRtWcynM2RobjyoULTeNJ1dhLEvzjFYLDgwXR7jz63ydYs7EpiXV",
  "key26": "56TC3Metrm2DqLrSLp4CLHW8X6ZSVN45aVKpi5QgUJWRTssoZqNrBrjVYsDis2oyZNuebtEPvVn82EpyQco77CVU",
  "key27": "2vA6oHDX1DBDR2SGoiH7kyojB4onC1XYxQwAMZEHvUPHEeMf87g2Tdxe5bHh98WuTxFTvXbcjQCTod7ig3BtWHsL",
  "key28": "ELmRxLTMacLLbNX7Wi6DYqqxcmwfpAb32iL7vKkwYYGetEk127F28XHAC7cyVNbzEQ3e4Dzi3uWuMaxQqLJuBDX"
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
