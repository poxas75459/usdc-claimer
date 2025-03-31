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
    "4C8SuHh1uCjHCbsXLgkdLFKijJfRbkxFrQri7ZTieTe421jbdCyKnCoWRufKtf8JG1AUsasKAaWYRq6SMTjLYmsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vdu9DTNuKCkBNhhVLtzefzZRD9Na2RPB3sULopDNmHJuaTc76YoGYFGVyh9B8bg2QSs9NFDygLuq1cpE5vu3ja",
  "key1": "2hN9eB34FBw2e9afi77hGCkhvYkwN3sZB5S86ScC1GzgLoHrehSsLP8PtC6yKaAWM8m5od2FH8y359RfCZ1GVT2i",
  "key2": "46MVdbTPFeWrkEtU2WngodhrbgUYMaNYnSQYBiuMYiJFHtLzpCVFSSX78p54UX8sP6Xx7acvdfibVNAUaKKhAroj",
  "key3": "2V2zMeJtVKrUqFB5mRXErXDjyDWG1VqChhsPcS2eSZZ6w1pr1DdWxzL1Tupsm2zAnfr52HWgEBBXwYQ2eiN1mF7J",
  "key4": "47rST3kd6XRFoK6iKaynd71ho6sLwZWBra7UxN6j86uCadQGYhQXhF8FpyokGKiWqWWGeJ5dEEPpr9PmjotWyTrm",
  "key5": "5ngG4iGQZ3QZzuHNmitZa9mcCnjWrv1GRRS8TYW2NJRfDCqAWD12GrBNi61SKe4ZBJYoWHQgU3oNCqKaxCtBS4Gk",
  "key6": "67T3ALRtSjcoXP7nqef31X7bv9kVcTF7kD2Yyno4atGF6ZaLpH4wbVUGxhva3Q6JDUfWeNULBKyHHzekycnQnMKo",
  "key7": "5qTRMgWa7SGfMsLcozZJEe9V5WiazAc3c1HMmowwkmd4iuovgUUqYHXuCDo6Hhy2i1T2zYxP9hS4rzjiqyRBAvtv",
  "key8": "2uWTLT3hkvmzzX5pJD614yX81Ffkiwpk3cge6fBiDoakr5uVYaxn8q3Tweijetj2KC5jFgc7vt6FZRQNYfhUDZT8",
  "key9": "5YeddJNvCzFTSYsrU4bkEZ9mcKHQ4HjC4d5pE7dBG9Mp9fFV4o7GdsrQUe6ab46A1MyEa8ByHiKH2grtpUakeJUo",
  "key10": "unRn65p9onRVx7X9azKYU7oETBVs5CYW3rmzZtresvLnFnXE8yHdLM6T82z6iFpY457R8FY15undv4G9bCv658Q",
  "key11": "2fT5AF3VjeMtA1ae3d6WTGTx1mzYeHRb8j2H1d8injDm8gzA9msBLENW73pdKPCG1Rj7TMpDqrzcwtVEAZHFd1dR",
  "key12": "3hV2TD9vGYnA2woXCBemxsGmj2VMw5PqPdCT1qeXp7ujUEjueAsuS7j7SY5WcwN1AN7eVrk1fsitVdB9Jrd96KJo",
  "key13": "3T2HuxjnYzDkBYG8j6RTJVBzqVxzq28mafk7JA1NurdtVPZoYJvhmKfw45xPKRiU8PCv8n8T3kxR2XQ5cE5MWzgd",
  "key14": "3hyXAZWPShFHKY4B2zmFnMm5wB5AFMUe26xiSkK6m1kyfR6Fg9uVe4fhYDgEc67auMzmZFer9gut3tnBJoLhBSrq",
  "key15": "5FwMH73YM4T2HwknjxDnyERULprddQeATev8MohRFK5X2243nPBZ6sWdTJYsPWXona3pk7bJyGuSjpfRp9s87B1M",
  "key16": "dH6mFvBCTwsyDtRXcWw84xtiLdR7vnVipvTCPCv7wynd9RjauR91Y4kLVUT14js8XU9FmJx4fBLyBkFKQTT5Roz",
  "key17": "4R5JuSsGQDXxiwm2HihAN8bjmAnV6UVjauwRVaYdd23zPhQoeqNw3Ck2PYbeSzsRTeRL2sJX2unzZkBgD5ZWSGZh",
  "key18": "33Yjq4rY2ELJbYjK8fctLD5kW21Gpg3b6f985DnoSvTz1KcDZxcKZaZTz4gwDD2VsvgSDKMjSpqghYr1FY2DA5EY",
  "key19": "2wNLbdpgLojUY5Yt4pY3bipb82REkDLPHUqUUj8CLy9gqMTAtH3EcZuRp48zGiBtNrPkSqPcsYAPhP5V2HDhZ8BC",
  "key20": "5PoQgP1fenNRz3mKANAL4b8JVSD4TaKEYd67JwT9qgW4K6YYUfPgjCRhgqFyEFMzAHD4VoYtoPBFqd4XqPusa6Q8",
  "key21": "3czeWHw25xoNSAMjHqZTTrkD2UydkcVExvMF4FmsRS267LNZhJQF8EEvrBU6SBwjysFgMiTAQu8Zvbs3LUhACtEU",
  "key22": "5SCvCEXPm2SLWRnEPV3pcYKjX32kQ1zD1yzhR5RnX5u9MfFVJeeqxPwrqRfKGSJHsimLLRhfGwfCVJQ7LdCtMnXj",
  "key23": "f5wH7ob3pi6MyxY3S12qePe2bYtX1XGupneQdKBvzaUMoWbbvCrNdB6MGdaeQut5CNdK62Nwn3HPwts6Ye2h2Bi",
  "key24": "4rCDrwSduxbdyB3FxUntSwoyDdL3gBJk7DsE7y8o7NajLNwPUPksEN7B6PKzveQZukjneeNXhr3hndG8wA1Kdh4w",
  "key25": "65simMPVX5AMujX7G4p1ogoysKrtbaxtwKNw7iPVpAwY7L1E2uq7x2XJNfzaK7DNEFZ8fsrMYXMi33JvKXJPeG7g"
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
