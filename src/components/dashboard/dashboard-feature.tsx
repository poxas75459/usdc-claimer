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
    "56HP5G68SouBjPm5wWCw4jyHoM7T4V9sZeg6BE4zdAUqZr42F4tb5Gtgew4at4N4SGMXGcxrqWBQ5MBj9cav6Hmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7vVwnaLi9rDCLSgT963bQHGVggCzvPck8ra7hn73xEwp4Ye2CrDbvLLWBsxBCNto1i1XGVyNHaET2WvukuFzRt",
  "key1": "8H7EnEJn95xvd62tvtRFb4vEwFSCpnm1DzWJyEHGv6QkZv7GEEZTQKUhJRCVxdXgH9d1dZgrku3NRLASZXNLTBT",
  "key2": "EgVET3EtEkbFHAyAvhT2hmRJMTiBv6byYQt1hS6VUDv7baLJJRrJFW2eenzTDXjb54VUPMjDyitWKd1LcNoX4vv",
  "key3": "fDuLj9FdJ4tQQU3MjuW4aWbCrvBvcK8SLsWcUag4Nfz3XxmwAeGzstEovp9HmHcZ3Tig6pAZnSfAcsqocT9FGtk",
  "key4": "3jhexgjMH3TJ5QnHw4FE2ERuj6drCfVHwqtDUry8hTV1y8Yegj6VbHEpp7hjbvu4cRFNfpBKqK8gEPHPDMWTBT5m",
  "key5": "2kXvLQrk9oggwfQKJHBhJdvjCtVAA53vih3Weqq1DduVryNi1956337nvoNn9XymefatN55pGfHmjabVSV3MvgMm",
  "key6": "3vzPo1UUCdUgK9hpkwiG3mB9ZEn3NYAKoFo4W22Vba9Zt9EBM8wN7EMQiHzHQvBE8VY9h7UC4QLKhQf4j9khYiKB",
  "key7": "36chBefdgdqaCWFyt7MaR5v48yKjj35jLVa7yyUnnwpyKooHbDfQMcdYEzE5x1uCJhfBNJ4cicyQHXnbai1Qhm9N",
  "key8": "4n8RJN4bCafmFXt6QdjrJXB1idCvga3QXWVYd8FHHo3bPVTj6SPuS3doGQt38cfp8b7ZmAiooCVn4nyJst6qkKxd",
  "key9": "2tbeKzat1BGKTpkqCvj3a4jKietbx4C5G2o2AbnWzgft4Ss5u2wrkeXfKgqeWMGBNKonpjN1otaKF3FBf7aHpu9Z",
  "key10": "3txV1DL4hbQD4nv2VapemTT5ufnkmovtM2fPGmh5EMqu3AsPf2PYWCK5d8LdcTdx1ADyg2moMQ37eLknDgCk2uaQ",
  "key11": "eQ5Jaj7XzbVm9U3DcJ1gUG9JuqhCk5iNzaonWsvzevALsWQ4ojSc9QWH64CL28ZjPTeDG8VLL6EYU9tFRrz4DLL",
  "key12": "66CoLRaFHD6JaeM32BwBGuKJT1RdsccXUTQDKUwNzqccbqqkyz2QwZ1vPKAcqgbNF5UxFCXTgaAHjPaEuqEwy37z",
  "key13": "5XuxQW5xKaGYFwBKxWXnSctyZEpVhD4rm7PD4ugdsXX1psnLPDD6xeWmiPZscNuCCjKPxcrh86kRPebfr2qqa53g",
  "key14": "37UM9KpGpA83hdD9E1v3i4HAd11phLFPJFwXGeAbLzQZiu5Ypyoppv3sodyuSm1UrzEYxBzq9EeBbPQE4kuaPxde",
  "key15": "4QN1oWHPEuwR4JGCaEUJZjL8K2pFyQGkHWpcZzakRiXhqLbARtQE5eLWdVB82Y1cigQPGzBoxBFHBimJEGbfHze2",
  "key16": "4f1eQhScJCdaLVEeAENn5XWY8JHMhF7jjxLBZHqSs4KWKsHodKjFm8EwMf8We3cGSW2Wp5jiE7beyynmjBbEbnej",
  "key17": "32Rdnp4TEka9paVTu6nZkPwTtzrgS5EEx2huDZpbqtfayBXW18n8ZbhAEPNkSq9idpADB78GQfUDjubnPf4DM2bq",
  "key18": "5fnsbmaPy2PUeUwh4hKx1nq2oiV36W4S1rZrN1frBRhFXw9vdAW1EHD8KVJxmBwKue75427ade1NwuFwpPnw5YCg",
  "key19": "4Q79HRfKej2U2jvx9DYiPdyYKM8rnDz1JuMQnZ7ddtWnNrKRtfMUFvsTwxsAF6paGNGD3d5gEsnPtb8biQg95Uwr",
  "key20": "5CQPvRNH9FXGSUp91uqYWzBicGpmjCyWFK99uoAZZ9BDFVxhaxhCwvTYXbJUPqBg6eeBbfUL8boaSyaEEcXm6XKX",
  "key21": "3U7mGq8HDcFii8nkAT8jWnJWHJo1516Fwrg8zVfihgxV81Awhoh47d7umspqRBZmvUxY3aNaCzt1HZVKBoZ4u2y4",
  "key22": "4dc3HvTn4DzvmYPSr7GPmLzgvRffL1JWF2M6qcKrWmuYFz7mPeJQ8qMdRegAdnUkGEWJHCrKg4JcLwHsqcooYaWw",
  "key23": "3PKEJU7GG456mdpNs1Syqr4C2ihzDgyzKFRRvrB22bGRGNDYoXMuE5nvg7bUTmmqDfk1iZ5MX7chAU3WFuPV3Mrc",
  "key24": "4VdTn88KhBdzBmMyj6n7vNfjjjnhsmnW2YVu4oc8ktVfrDbMdrKhovNr8SzuwCbAeB7PPMdgCkaUA5juBvreantp",
  "key25": "3QHrXNTugz1GuTsBdtgMTKXJZhi8HSXdGQfLxn5BS2LgwiDVGXGjfLsxGvV64D1em7DUxvqEMopVRGAZtV2bntay",
  "key26": "4pYwSZCjoRAcmwqNB4ENaLfbKiyctP1erUbKFdUyERB35ZADWfffNBqo6gJcwKfk9ZTYPBfPsL2FJSykf2rweRgA",
  "key27": "5AkU4nMBBRdL9DhTTPS7fXPx3hdaf3j2EATMzx6GBFfXjgU7HKk1v7zmBhC79gwwkjYJzE8T3XwcaV1b4MyH7uEw",
  "key28": "6BETAcuDZf1v7azZhiJetFwc5m4zpnBMQhMCS1C74HihsNKJ2Wu2PrFva3m8ddCCCaAoiAxDDfXkxha4zAe7Z2J",
  "key29": "5W4xMWw1A6D74bvC26mwoXRApV9zu11i2LaiVwgHxdDkejG2nFoAwLaRiwE1HpXxV1vzp4BhVKDPmz3Ei6RmStgk",
  "key30": "1BCWe7XnFNv8JtSkSpwDhUYSBJuauVnYbWFpd5K38JmxePY2VJauVgYKvEBS5hazu8qx1Gxyok8RveAeSWLdfzK",
  "key31": "3NKwSV79nzZvANzkGa3ZjuES8DVrkXhH9JVARKNtSES72LhDD9vgjhBzyXZRYgeUrUaGTj5j1n9ashz8y9Nw3GsQ",
  "key32": "fDN5gsDsSfXj9SUXLMgQuzqfAoRm3wn83c6pqruAK9g8oTN5EyTaUCBLshRdmFTVzzwu1aWGdTntfAbTqyL2nQ6",
  "key33": "2Gs1QzhpbDCLgEuXCtrkdTGusXQC3LdRkJRSU6JC21XVNBjeL7oxmQXJSW7FPaEC6LFygkzatJ7RJqoHETYJtpSC",
  "key34": "3FrzVtMcPs7iuFNE24ttRUmAFXAjv8LMravN3npNjvUE3sjdfu9py8EpDDKZtyaS9nis3rrmGqE8sGyTnUyzyneq",
  "key35": "5Sxzmo48dEVFaT2J87TCtyWw64KjFofbtKvwKHnTswk44VVUxwNGihTFAvn68boifkjeSJAzaKbcB8CEmbLVmbkz",
  "key36": "3wpBsFMrmmAfjKZyTqXg46hovbFZfeKkSuVwq5Hwcbih3VC9tQVAQBLoqpL77uG7SbcPqKAzQt7kVw4f94UVLYWZ",
  "key37": "341Z4dXPxW2qcUdru1BmWjMA3DyLZiz1vRExCjrPs2hmGkPAXZfwkgjZh8KXSw87VFiDRLWRMcmARAqW5Uipdiim",
  "key38": "5Jxt6Y8b8kbM5V8btNbA3sbsuPJseZHL2EAewn29aWMypVLov1abmDXUhdifgbe99jMazuEzWDneQKDeiNnGaNjM",
  "key39": "C5tngbtxYwkkvwFGXJCupzc1ViQhvEwPkq7fUCNSeBFYMCYo57EFJoK6Cxmi8ujVT6289XXJ5B2X3JRYsVESHc7",
  "key40": "2HonvBP1HxPQAFtbZG5pLDDw1ea5zGYfxxXgRxZvZ1E9kGMRVMHmpXWopd5qXqPaVG5VSxqSVaHuyNTz4fbBqvoQ"
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
