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
    "44QATfN2zrJ2Qj7qSnuvPtjsspHvw6SpKpwNy2L1SBidYXzkZmYjtSgpKqMQMmX3LTkNcyFnGcy86GMJ9DnweCTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DY7zG8bru7HzEDEi9Fh4eJWJH1GvNsRe8JFjKUqoN1P8VT1fzvcADbs3feEGh9cHsZsgcLgjPmUMQWwCZ6ygnmD",
  "key1": "3exZfz11UPKPbWjFALLCS1nd7MdswG1oNKZhVTfgEA7b3dMow9BWgqJAmwDEZ59KeTGnPFB5cWrj6MV5txci4Bpr",
  "key2": "2mRZZFmrUCSGViQzoNmqRAAPod3wUmi7Tu1tA6Vg9VeDbkKWT6Cbfmfyxi9rJybZSVeJNUkpeFALg4u8Tdy5Fh3r",
  "key3": "ReDq7BqEJ6SqD7VZnULRHfRd4VgPbU6iERKss7vKmYm1d3wqPnsUjBqrEJmsezSWUeMMUmRSyN78PJ1A4TDdhq3",
  "key4": "JFshQPgzK2WexMbzV6ccfSVWwmMVGdEaaJaBC9D3uv2z4D6yrEPGr84C2GLgT8fv5gv775HmnyAr2SbkrzJRXVp",
  "key5": "3JtZ9BggrkgSAF2o9kHpi12h3qjpEZuQXp9BSqcGJLLjHyBa1gpPe1myQhBTmWWZkoBcNRonUVieCzGPDZ9AtXjj",
  "key6": "4xjg4MqR5aKpo8HqwYqcJuL4ARa2tLsrFLkB1Wr5ch1pMR5XTLR52prtLmytexcqno6mBPM3JpWtZpYUc6rxH7KH",
  "key7": "5NREGuREpHMb3jaXYUQ4EpM3sizrFAW6WgUyGCcsk94NFC54Z7aAjPfKAEp4cRnBXAAe7JwMLQapF3AH9VM8cwMe",
  "key8": "4Nedyx5avRTFHetTRT4ZbtdNDVPiKheetH1dhyZKSeV5LqUNffA46aKmjKooEiYhu5kSqRU22vPYyQamh5h2Azis",
  "key9": "39QRAGnXvMgotGBEuK71oYeft8aYQSdSTaYAjMbz2BdAfRvMU3bfHve829cnn7VxEHP5UCbvUDFm1cWq9ZSXgcGc",
  "key10": "5c8FyDpUVYedNiNa1NinZjNdapcYFE41KwQaHcms6tXRjMPtHPjh7DCriPcP5k4XerXzjcbcSjCLfTU6b1Lq3qsT",
  "key11": "3D6ghAhrXELLJVqqxYzAJjoz6knK6uQUneDgGZ7LQF6TvZTgvYcjFG66Q2bZaUDBbgziVnHHLK4vZwTULqQj9kYg",
  "key12": "2zADBBvpnjZMtDrNXXYnpZTvSiBHCDXUBpBiyKfjpBDZYXiHEm4sPWd4BHWavfK2JX3ZMUVW36otpujQ3QS2vLBn",
  "key13": "5uQrA9P7aGKYQVujYU5b2wfYDaHEd7nsdFs5QHKvhrvrpX1ZVuCw6SU2AeVic1hYFiwE6z58KRvF6c6PEPVLFTf6",
  "key14": "578UHVksyye7e1fCg5VeTWfWSzEP9i3pwUcY1BJfQG5VBiWuzthv6rtr1gtVTcjK8PdPxZznm8uQSqS1QkSdsvfF",
  "key15": "4MrgSqnXX4gVrE2LBYsQ5aXjXkBRNcbigHPAUM5YBu1nk5M2ypFssx19FnLCDpjf6iC8o5ap9wviYT3rSqoVhJqL",
  "key16": "2ivfoSq1bkpGJYNxjd7bwFBWRs4dyicYDhTKN4WPEmaNceJ8AU9Ln74z1DS9zt2LHbht8TRPpPXZmSPDZy4FJuMN",
  "key17": "3JnNjimmLZABxAr3wRutVETdLPpXMcTiUwPeLxjh33S1HS7myYbjRPTfP5G28vADGCVgQ9JpfXnfWhdVpBnEACph",
  "key18": "62z5ENkca6ayPnmzH6Ftg6KBCoZqnuY3MuwSxbKpsux3hW1zNDmmtdVfSP6BrAqGsyQ9CUQvoRr84Uq6o1PmHsdZ",
  "key19": "2fNhfstvLWhs2LL8PPbqM1SaeSGMMnWegY1f9gJTszWmNWAVzQ9iZXPcszrJazLQZAkDpq12RcvnyEymUY32cKU3",
  "key20": "8GMDCEXgXkHJE29vAUYXpJKiLsyEbhUs8tjVsQmnzrVroJVs8Q7sJVL5hbAVNWWTVUMMdD6jYuk13v5BPjPxLqi",
  "key21": "494amti6GJx9wgfASDvvtjDgr9G8Mc6wcnTtxypYQTi1aBiD3fg9yjioDuAHLj4jiPdybtrJvEgy1e3Zi2W1pjxL",
  "key22": "YyQmWjwkpHaaypMRcsrtPaSCmTSo2JdwuC9xiEhCnfK9L3WPLX2Y5s7Ucf9DuDXhCZKZgbGcywHt2zmNr13MpFb",
  "key23": "2tHgRbKdRobXxy3jCvxJaJyZNfaUL8NipXXziZpVVYcJmXnWCqYBK47J2AJpiu5KWXY8zWThz1H19CL3sTWPVbBN",
  "key24": "2kipzHSAjxarv28JvUz8fUzpcW6eWCamoHHuGXeQosSA4fo5vDroUDbLtNLPMC29K5WdjgyaYb3ycg7gv8xKuVAr",
  "key25": "62Rk4oAN7aTVuSzipBgs4fToX6BmUAVcibtDDdB2cqXcY818fTQsw9aHGi1uBiQFTZA31iQVL1xDcrp6ntVKxQK7",
  "key26": "2W18XKsrmxr2ziRLp4n1yRFesECN6Svrs7aq1jcTP9L6QheYrpY6734VYUbPUgayxGGkMkk2R5HcJno98VYgLNaF",
  "key27": "aCkuQXbbGkz4Fhcsv8nnPDdJ95V2XfkFj5rMiDPdLekdhUcB9L8c2F46dTZ3P5GzWmtLq9ytZUAVaiPSqaE8AsU",
  "key28": "sGmfeicYykVg1SHXdFLYRRZWu3S5btCo32LYSbDsmEhqY3bh7KkAiH1MiSaH1fsULWfscLbRAjPcz691x3kybec",
  "key29": "FE6qu5KLDrjJbfqaGMfwPHJseYBELXEWJJpNC2XZhd8ivgVA4s16kJxhekNGbp32zAYSVY9iKqJ3h7vzZhYJpe1",
  "key30": "4pHG6c9Ki9DuqH5MFnwf8ujo8tJSoUSgixCBvpBtvGwjVJHLShi31bZDxrWzy21NrD8kuF3cG4zgDsr3DGz3EsbB",
  "key31": "1FheKt6JEN62sYyT4MC7RJyncZDTkfzgEgyGneTkNRTChsBNFyh3EZCHrb9ihHmFQFoxKbBtVSGkifAnxV1it6f",
  "key32": "28HxxgNSyLaEKS5LTjAUKPb68vcmP2EhdbZrbuSQPwq4zZxWgwj7m1rs7q1KungKjvTUFvcbkwTEv4ZujEvuTjPE",
  "key33": "64jNev4qBH8wC1qLYc5v6yDCSLwkWtXKNYWmNCwF68kFjAKwsxmNavDqLsdUktt76z9UEwWECBUj8g41BHFxXqzQ",
  "key34": "5i1v9JNvcw27BubJPMwfmu2PSmomnhysYRoBGAp6xqSbLfPdmixcvd6MiAiNouezpcyXNuxZYhkAU679manaZSEP",
  "key35": "2CXyJeAqJT5YjqoNTp5dSsCyVa2fxf6v5omeBJZ7281pJnWiaJ8qGDnuR6vLbQapTybGVYpe27XVhqoevyBvJbhx",
  "key36": "4a92hNofjktNQnDddSzNsgTRcE2YpCxV86hGAgHyGSTRQ3xExFoiQw8uHw2qB4YimWLW7F9MKPCtLEzMvNX75v4Q",
  "key37": "2LkuyfmPXEQPsMWuCeNzdH6jcNUur6q7niATZsSyAhk94hw2VyzPSbbK3owRTiFFF7Hr4WyJ1pVLtLjbNFYkRcxL"
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
