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
    "xoEU7PsvcQafhybqBnDtajzcBkJfSRZEiT92b11MzG5ZZZhtEfCKGtHZv2iC44VvKzJwT4uReyNBZBSYvcvSWaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4e3eq65jBtSir32MKpERghkANbAmwMMyx6q4DDxQHaYnVSJj8mfzP3nxfHjCHpwsazcDMKuVtYZAj72pVwRhSY",
  "key1": "2uKfwddpAUmALND3uSh2DBZCPv4mMzxRD4ksTJ4oxYkiTpuuNGpN6RoRKVrCnZSM7GUUYyCMu5RAP36Hxj6ArL3h",
  "key2": "2foY5WCNQzr2Bd2ehx2yYhCMYP9d25Eu6YuCH9h3Y64DhGS3Kt5uKkZCeEu44nzpTLcRgjJVrXeu6GJ6nSVpjiLV",
  "key3": "2mWn5PDjMsxqzszQq8SQ1B9VSnmFA6xgWoJKpA4KtyLePZ9PJ7H63ZWenQAcKp97KNnnrW86jZEtTsoEz4i6U8HJ",
  "key4": "66BAm9Eb2819kGyq8AajCRy9pg9N5de1LX1r7Kae5QJfuWNQ6A5AKTMo9nhaG4p9zNCasqSLMcXY5R5HAn2vUB5V",
  "key5": "5cEJpJpx16TEh6q5gXtMUeGwsAKTFTAqHRVkZtKvFv6HpuVY1E2xHdNG9SXhz4WFJPhnYsUHuGhzU3Gi9c3rXR2o",
  "key6": "3E7U7CxyNzXNm7UWjtr2v9HWgRxqMm2HXWLas5vErPBR4dT96ayF797KyC1Cvr3AN4cbwanjLXYxunoDJ7tmVkuX",
  "key7": "63L3ZRAYnBbVPEruxSfcixSkJLYqz25VtA1D6gSKzViJtYyqE4yNvYmMqfJLbEDxeAcqDaWGWX9w4146DoqLpujm",
  "key8": "4iYE8TQJzRqd6cRbMizDUshSXstgHaixKBv6FL72CAV32GTKfC1fv84ng5PVqru3m2VwpTo2eSPC3iaeBNQa6dkK",
  "key9": "44wrhJAxoK1mGf8h1XdD5BR21e8AuSRcMtCuy39etbEsJs4Z6RjAjApEkWHJC9Y2M1h5gth9EWaRBU8SzcBgfgUD",
  "key10": "2zqRanrMHyBkKTbKmGuxutn1mfEEqkaS2Bf3kpPvHGsyzhEK1JRJcAYoj6urrtMYMoeEg1jQExfdvzVws1Ne44cj",
  "key11": "4obocm7GfKMpQiaMnuuGwMSv33rq7ENwWT9FXTS1Ywe8EuWmNfnW9UC2rSXoexBdxGSepAYekzEQiDzEsdydudfB",
  "key12": "3ma2RKrQ8LEbPN8E7iyKNtzAZGip5S6VMsMqqMK8RZck2vgLYEmdNhQfd65V2tA85Vnz26ZVFaJptVUVQYiPagvh",
  "key13": "bQ2c9qdQSugfuFVSWSoaNajwrUX3Hmk8rPRuyTkXwZbVgMtWE4geFm1aoPbYW5ZAnhuMxjCEXGErQhoCU3n1QnD",
  "key14": "3ib7khTFU6c49bxYVt8tkDf3mW2K6PZWJP6Hn31n8ytZ4AgVtoSS65XUPW4VnURSRxfgy7R5CMnjGTgnKGUzzD2T",
  "key15": "5Y1LM3q69Cu5ArzAeFnZ76nkZMFWFia5jBY44BXST8KpoKBm64qWp3QotiEt7SVkg2t28r4hYa9WPdaDazstuftU",
  "key16": "3JR8pYv5N5yChvbsrQDxNBtqabKwHigCBy6tLJjfzMgwCvTaJmWcYaiFtCJbgAjUYsGuzSBen4LzsFtW7588u8vb",
  "key17": "2nVa4NKTC1PaBfSauVSqVc4SyMVPvMGTiJbWeCikSfTXz5bDdrFcGFzMRvx7ws6pMuqutYAGgnDYxjoVA6ySCr4F",
  "key18": "4LqcVZR6qTjQA2T6RZqHSukb12vjnxpw3BWvmp89Z1SRCBkYZXGxGjSW9c8Ux6Wn54qsEaaojT7M1zUWh3nNiVes",
  "key19": "4Svn9oYcxJUSM5ZCudHLftctoJ7PwdSfFQNfzvUcykLEvK8UPAaKwKax93FctXDrkmtw9fTVW9DFotVbz5aEBcF8",
  "key20": "4McmzqR53kSEkLaLPiRUGqcsj436nWcbPBGoQJCAwPrgQdjqGmCWQgCPhPMHZ7Q8mVR84JFgSrGQimDYnfyp4G1y",
  "key21": "5JG5wfqLwjyWbB1m2wvYWsXkhXHsvPAfspM21g4CUTBXARFmjKXw27wqJJt5SQB2zh7C5LbxAdgjFza1DxghCiLU",
  "key22": "25FBVeQPT6zbsvai43Ao5Vvi2Ts14EubtFnn2qZv7QRuHMHZrrxkqDbzfy8MRKaPNjDjYCBGCr9ZG9aeMFydxTzu",
  "key23": "3co4YT5XVcXui93DT43X9Lj7Gh9mr6NDRidikXZd6q2E6uT3fFj9od5acYtDFmPNue7zuJHT1RfTKCyG853e8bHj",
  "key24": "5Ls2exPXoBcgYrkgVVWqdvy2xT3EfaX7hjkN4D9h5yNQTmC6zd3QpedYKeKZ5qb9ygBSqWRC1wcTWf5zwp6o5vFK",
  "key25": "7W8a9p6ztJ2tuYYwRozwp1xrky6FKG3wqL6MDdFrdLkrvGFZjFymMSv2GRTxgz5HWwZfgGA4MueXB7eQx1dz5Wb",
  "key26": "521TyW4VMKnBySruwrjxLuEq8jo1W9CzK2paznoxqZ1DXsqbKAwq3MMN3kLKpmupGSUHhPF7jEJ2UcqeMaVeWVDp"
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
