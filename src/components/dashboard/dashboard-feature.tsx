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
    "32nHMvU2gY1Y9APEH6GVyAA8eWg59bRy2mQPe4UzNc9jmPZhhwxBQJ7ajERcYJMdEsNe3w8yVpTMohSQiYPJK5ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YdxPbQbPasBzYH1RgZdnWJZeWcXRo2ZSKA5HxGXmEmCy7suq1cpwmhbi4vTFjnMwxovptGKdd27pEvQaJ5sAPeK",
  "key1": "59mwiN9Rpi3MJ51XE57MgwfLCQi4zP7JW8xgfSXh8e17TjWmeQ5F6tS139qA5kEGrAGXXEDHnmDu1m5dTUPEPABU",
  "key2": "4QyLsgfAbUZaFhnvLygS2T2znoYuyPMbDvvGvUTpYfEsyT6wsUTa7BFuqQix3NasifxnB7NgPu6dQEzhEVdCjFQu",
  "key3": "4oAb7Crp2y39jo7kBBnm9KTrcTSN9J4j22WKxZBqN426CxoAbBzBkrbzSGVS1mFmiREsdiJPEqjjWDjD8PVW4hZ",
  "key4": "TCsYGSMtJPKHq6Mni7cNGrtuvGsrw5jwLArboV5xJAiTsKPhCwZuryPawiVPSv2pYBcB6wTWTAvnyunpLVG4UzU",
  "key5": "2EcwAYEzzDBp7YJaFFTK7dSUieKPSh1acynQhwGSwapCBVKXguoYLPz26YkMhYEuvTeBTbxLLmHsRTGC3Q6U9zh4",
  "key6": "2JptuPHZtfxbWmrS8tQKScGFxjo1D7uYXDcuXQy7xr2XAS6o91vEcfaCeVpnMP1NU3x1jUwFfaXWu51TqT6aL85x",
  "key7": "2AGJLJZqjZ2GzBderTExTSocF2Nv4Gq2jAhvAPu8spE1EFmsX5d3YbSJFvrb4iehScy83M97w5SBpdqJhsytPWi1",
  "key8": "63pFHhQoD3rV1EBP6fkMVv5ZhmAmm75n8Tmsfa9Gadywho7CaVt5chP4z5iSRk5xgop3RAS4pFHAhGuiMAddxPzE",
  "key9": "3wyGMT1T1dWaB3wA9Kf5wmMCvAjssyB9AyZu8eCq4K5pR7bjamApr2bMqLRz1dLSNAFBt8jwGzkwveKRWZNQ8zwq",
  "key10": "2AaGCKjwtELaxqnG5gtvvQCf23ErXWMnmeeeLsNhLP8PALfFdeSpSZzjEg5Pf47QeAYWMgxDZvYn9wsWpvpzDvBy",
  "key11": "4oimThzWwxLXPWTopCmBV8eQyLDGVccy2q7wtDXG6mj3bFF9wTp5Qmtxpx6CJTscJ4EXpXG8KJNHS9GeZhCgS5xs",
  "key12": "4dMPCa9ANEXgvAYUR1BtAWUC8vcbScmngpn5MYA6jR7LjQRHADAx1qcNyJPWZojtP97QwCC8RS32Nxy52WV5iA49",
  "key13": "3TM1KmHvmLqH1EymfZTHNkT8Gadyvh93B1qGEX1nvtrKRXpXdAkyXcQf7E4FGxk8DyBRESG9ihhhsYRFo581GyW5",
  "key14": "3qv8sW1WVo7TJfUzyBm9tFwFtF3x71T4WSo9jm5H5Br3KUgBz9TwejLH5CkBcjzBV9S7MxWRZXxmmGwr6XEAvd9f",
  "key15": "4DkDLzz1shMSqArBkDW17AxXyZuNbAXn531ey9pTPTxXPx8HiJ6hpJkqFMEi5A5kfCrDAw4FwDw2FnS8oG6oYLjK",
  "key16": "2UeBmRL6hhm7FUuepYLDKhaFtNYXogBvwCssERwZ4kKjce7Cj7hoMt2HTT9ZUsNx93qU5Pmp6jvnF51JuWGQse2y",
  "key17": "46BswjpkGL1knD4RxUpkKYPPYThqmKm1BykR95FnFiQgxxkWxbuCfM3LivF9rgce9Kvxt9kJxZbjPhh6FTTGqnz7",
  "key18": "5ubFACdScfZWyRUtswU8LTD413doe9Lkz4j95ksrYGYe5hCPpueHAD1E6PzsgHygQhSFWYJBQ5ehQHXnNsU3N9RT",
  "key19": "eXR5GWzYU28cHFMUcFA8bJxt1TLRrYaQGgfx7yj5FpYmuWQLVRu1NGB7tE2zn6HMz18hzT92dNp5EJj6Ydc1Bd8",
  "key20": "5uuhGgbx8xBX2jEnK5HtHnMy8jNmzfQtwfzHgKsZJk1bDLxTjgazqP9kVZ5DkU87rSmVfwnmg8tiQmb7GT8yCfJs",
  "key21": "22vHPMED7GEpCiMxoCemMfrBT2mGxJvKYPgHNEn7jAvFECyzx8kXFnf4VuRYeQX9DgFQ4Ww2mv3yQmK6veBbvyA8",
  "key22": "4h5EJjw1FKpT1zmXTgSC6wqB3DQJYi9yD1iUxZGapPGz5ekSDgovALXK36Et6P5ypMUpUcSeDPZ2RjESxbQ2Zo8n",
  "key23": "2Ray4LY2junZwe8kDe1bc5TAjuLD73rW9BKaC3pS9STXmxo1A1ZgrUArs1Wk32tvZRHVPEc2G7scYjwAYzrTDpdk",
  "key24": "24Pcps7VFin5f2hz6P1wtLcxxeJRXUe2obm7uHqQyAq4yfxqkQsbxNWmT9jAGvC3yDfzQyEix4UnrphP1hzM5pbK",
  "key25": "3wmxjkpZ8H1TAacgwQNidFEpDHxqz2hNYA43D5ZpYiwWBBVRk2VbJK5isZdGh1pBhCJXKc5CbPNw1DuYTMATpBYt",
  "key26": "4PpqvSa5ybcmj7X2EPbb64zkR3azvxpPAfXTybM7uiyjJWWegGkQbNibHQLFQezS541dAFLUH6fpcTf89WZHK13u",
  "key27": "2c8TQYe2k78SpbG2sKpyBDCAezms7h8X5p8av7X7kXouxQ5npUTwURMhVo5WuFTJNm6wMVKhiZ6aW9hUMoGmKxFm",
  "key28": "3j6BnqvrVnC6uuYx82P51HuNoi8YEQGEQB8UH7pkENiWH68YR2hV42L2eWHB1oY9RmLvxhwWtVFVdVvJAktpJjGP",
  "key29": "3AKuaCai4TnG7TPh65Po1CxAqDBwuinfZbzbw1RGtb84MvyV8mamLaaM9zGNHZpJPV5HBe3DdFpHVTFo2989uZ4c",
  "key30": "HP9Zx1wq8SkQgnJdp7GpD8p3Epdsp2YLHyZt62wmfJF9jC1a1F3QiLeH8ktwfVjWX7Y6AMzFziZBYL1yC67KjvS",
  "key31": "4YUW2XLL9jFYLCZ3YfoPcEYxxY2C1JMnXxJpCYNrubqcxRAfvSYLgJsh4hLfnmQoTfctBmnLV3iXMrE3kXDcW2S1",
  "key32": "YwnHj5j8TpLee6idZtnHpjnnnLwTREGqBAJcMsHocKN3GbHf2GwCQFEi5Aa8K9ZQoxvaCttVUAv9Fpjygd219yZ",
  "key33": "bCLSzriF98BKZjke36gksjL17M5U19C4yMFmeYBdiVRc27Ce8RoVTbH9vw7vx9cssbw7ZPFzWJvQaEL53d7gpqN",
  "key34": "5biHdR34qL9S394Hv9EDt9S1bdMhG51mY8yh7XJAr5j7QsqLjcLmwJ4Cza7TcuCmNq13FdjL6A7QTcBc39dwcV4U"
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
