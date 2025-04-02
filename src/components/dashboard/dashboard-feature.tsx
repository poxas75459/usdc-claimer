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
    "3Qf9odzdtJfNArYvUidB5CeEznYEKC3pDzxayDQAGaJH9U93CAfZfpucgUF9rEzMt9ZobTutecytWEGXG7m9BGmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9FdHSuywWE3fhUtr4s4z7wpsxNJAai4jAyZvV5hocVLhL6uzj8oeHZr8U3Mw3qhjNgTcdsVXtFPgwfT8wQPjaSM",
  "key1": "24vtFgJRSEPak4F3ZHyGgSChqf6gxTZo7TCAWygfU1B82eoHjiteoCdqXdrtdCXoTTw15h1JuTvmmRWqAFDTjvhm",
  "key2": "X6S1tgNvitgZsLrRweBwSs6Jwtaw6o8WqCS6AzaEtGoAJqwFRTQKrmp3nxMJaR3YkzQdtvsMaMRjw8ZCpkUyAa8",
  "key3": "W1q9oqikLXu6ZJQyfkmz9H2ubNqCgkuL3puLkgJinA5XPx3XEDRLvYdYhfvob6qZnoouGFTTU4f8uVyu339MBcU",
  "key4": "2knNrViNXGFb8BFhm4sc7FxXLbFK3pGaMoHh7ybjD5rApXjFN591Kv7xtXgNADmjjvSHCuhzWD2vEDDvSn1Q2yQM",
  "key5": "2ofrTRUEL4SkgbH71JfWQZuFjhe5e5YenjMVM6LWvMWAQ49sjfd1EyfV8ujYDKa8gnRhhdTuJpohdunvCvaVHEkf",
  "key6": "5qMXPuFHnz4oAZxSBHvcjAJ1UC446dfcoxFRFzE5D4gNG7MPCLD3bCgTMhfN2qvLrFZ9AueE2NzDvaoCnmZgAuJf",
  "key7": "8jByiGQ5rupqYpeBkAKf8XjHbxQ4oyBPodSPrrRiJXsfLeQnSorS5P7tPQhfT7JByYa67jQ2b9JKroimwnNMCdg",
  "key8": "2a7CRETtTK9dFRMi3PhdEQvUjuZd5qA5TtCGGP8AVzGDkSTUFBxxxwMgkeXmckx9Dj8SWVByW1T5i5cKrRsx4ZDE",
  "key9": "qNVFqtUMBL5mVBdHu2HNvxxuUHXF1sxNXozYMene4To12LuroP3daYwBj6tYWeb2Jeoc3VH33h2e4DhQGaLRTDA",
  "key10": "5DcNc1njeLtT6AtWBjp61R2Lb1FJ2pT1FqcTuLhasqZrMDEbA7xDWyH5VAPEKZ58ahqCBxhf6bQJLGWEFsq9aqix",
  "key11": "eXxuTEqZRJLx4GNG3Z8fX7uQdWPi9cArPWrMZKBwCAtz8u1h8vEVCPjesyQ4wZYY9S3AWtKN6ezQczW1FvWDYbw",
  "key12": "3SiQtyX75YPhTNx39QtZAdDDEgs8dfcrLu7zD9pDyu1ejKqLyY3KBoLFmJPg6mHPupModmB7Zz4KZkYdvgP1gMk8",
  "key13": "2pgS3HVRnSGSw8ZoKtDZjh9weKRrZbL8uj8caXQ5hYoSqJ11uRiQYYMBXBWorVbxy4s3ZCsJNP2qBmTDF3RfqGDZ",
  "key14": "NP4C2JheYjckZaqqzjtCYkbS1dstptEuBAvCnKineURVpFLae13sGg8KKfARW6Lc7q8yGxjaAdrYkfYB4ueSmxP",
  "key15": "QxwVQEa9tF36tWYQNmor6fdknPqSBFfSvdAmYSjXXafdG8hPjh5bV3iuBN9nxMSK17iNYEU3ynrie34ax5wM5ef",
  "key16": "4zcurXR5gUMx9va7Vsk5qWG4Fvwh46xWY4tw9hWGrbCERKot3Z4Lq9suMhuxEhaJD7uU18cEMcWDkFY58nahjqiN",
  "key17": "26c2m4absjcFrAeYc3ysctofSDRyANcDFS1kTfWEM2mPV8D8TesG6cAuUhLgiTJ3jjcjKZHHXGLeKNLPGeRsjwgX",
  "key18": "5n85MLbKtFrQGozzE69y9CpoRPAcF7JMRrfB1nMUbSKwpY1ySwboPRjrotf7vLxR7GH8qfgMDTPbbWnuhhRVEKRk",
  "key19": "aVgPZHdWzUdJyci8n42kYnEw8pbBNEgFKTnUGfrasbSGn6nKeFzoCFcDHEVavVsmmL43qqimpLLjmFqDcwPgvVi",
  "key20": "4CpwiSAqxdKzvnMTNboohsFXRWdEcSHTbZzNRprc3Zks2Wssfvw8WjmjoadbZ4HawVp5rCcaPWB372qoLSu9b1n8",
  "key21": "4xe9BXqxHwmkFrjdPeRPjJfBtHwXnNHLPEW62A2yHe6f5EvmQDiPbnghLC5aewa36V7uRXTLDHvVRSELKaUTyZ2B",
  "key22": "4ZqcYqhUmpz7EStKTpw2fyS1Tnf62E3rUYhjqDKjJJgs5eSCWHmY36H367k61zDEdh5Us33oG8Fok7xJrcMCUk3M",
  "key23": "4Arrb8veJR2Cxzq5JxPyNu8dNZxNEz4ydrZoSxLSedGSTCLZusz3ZQEg6coFEFRNEvSARqHnjRtLLxoVrinipKf2",
  "key24": "3NKHD1oEBKyS9N9kTY9fo3Kpmr3zYidkj78pbvrgePNFAiXjg1CqcZ7njssJPJivsyNMyfJs4FMqHuLWtVfcZdBM",
  "key25": "4sGPYrxMrDadjoW5y9tGuKGdgsXnpMuPU4yWeXQi4g6BsTixMdnrkSDJsUnyiYGa2tAw3dF5y9p2559EitvGhQaR",
  "key26": "5wa8oeqv2FRtyFAAW9MS8GHpznbrMqgFuHcdPR8nDnMESbyTfy4Tspcgj7c6M3NyhVZDz1gRBk59xUCydFrmdn6c",
  "key27": "419Nyhz5T1fFpJvAbbeeJQpZ3Gc5irwpmFErbutpiKWWrc6up6vgQmFySKGqhy5irtu4fTFmXZ3i8aTCnx2WCHSh",
  "key28": "5JJrCvkdocPezSjqA4LDPAehzWw1qQhPGAWoYqBtNmS9hJ5QJ2kC2hEhXWRSWV1cHtu5n1GTjmrvAM7xK3F2sDCS",
  "key29": "KqNX3DiG9y8gSxRLYPbwxnHcLpugNqg4s9v3bQk51CrbEqjTDRMdhveKJmASouEp82ocpwzbziWnoAvk25BwoVe"
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
