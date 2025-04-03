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
    "2D4fitLiCSQUNhstDMih9ML4NygjA7ewUbXdBsQa9C7gAQNrMguzToNGeLzmuRueUA9sDNndxwEpUJsiBrkytmXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nu6dJssqfTUxoLsiY2mtnF6i7yLgPnduDmLKXaceH9tPy5TwvdSezSNYjjUUndbdnLQeEpcDS7iUoi3aNLK1smn",
  "key1": "5bsZVodsGj9xEJZCNqopMUW5SGmScCmNS2BoAKbRU1kDSB5i5dWP91nLWeA8mitgWsVee9HsGLMp9dFT5jCQerna",
  "key2": "3oTAnA5QZzUHzL7p6QZsVUgmsYTPw7TjGXG2G3V5pa7Xx9AuzqRYHranBBofBVtGQ1LQkbf5heAm1Ft9ob2xEK2D",
  "key3": "52t84b281NWKM2YGDns59HWWucFnkycMqCDGtZFc6bhoPHmwGEaeZKemAUkhFyDuFj777RdBo6cWT1GTGRP5DDvn",
  "key4": "Whue8L61pWncJeVqgArgMhi7of2GytiYzTqsAzKarpFyaPbj6oz3peF8L9ZCpRVpCBUD3FQE5ded9LrdjNSfhYd",
  "key5": "2Rsr2eBByvUcDtpg5JFbRnDY71wkPfAJNeVWALG266mRFU9s9KzY3tZFgr3BwyxnZiPX8hrDafPsiGHjr3FheoEN",
  "key6": "AFARsDqpYUhmxiQJyWdGAcWLJ2f6qBQmcxTghtowqeGRFrcC1APVC8sJZy1tWPQYMzYDjeeCvHFyHoU6frjVtDy",
  "key7": "4aMXFwDUdgsLKZRzxZak25K3qi1DxuJfjUGzz9LCxi8e2yMJ7CMCokQqdz2eGA3AgvzmRFwQWPHTDSVQL7M8DhMi",
  "key8": "3goXVcAEmbSFfKXZgr6grFsPSGvMajefZTowbZSpTfLgcdDCPUXcgrc7hNy5bKMm1ejM7fJyZCtzuXR1CfKG83kH",
  "key9": "4ZBWLim5Ah894RySUhLSzDvNkzQgYQNPJVGJ5SuLSTYcXz5RYiZdfexqzxBih4zKxueiJoBoA4XEcJ87hn55CW3s",
  "key10": "4HLvhPwphv24gTQipSzZ5zJjjAjJxAvDGyeL5J1SD8LjszCxL3igLM9zVQpxEy5ykyH84kFMXiFdErk6eH2VyPgE",
  "key11": "5SGTQ3fGD9bTV1zwfD1cKRVpAjSjwRB3k24yUWKTKvbRBr9i5uD7zyeR7kzRLUc34ewYDAwAqaK9hS3nh7VLxeCB",
  "key12": "XMKCpXvVZfU8UJ19thD4fhPgGLU3LyQphPg7mA8dyYTn53KpbDWdg42pQYgEq2i8Z5p13EenzVQC3Rqsk56bGDc",
  "key13": "5QLKVA2tdVY2wh9Ypt6hGgiUhRpJkGCjmg2cm3drM7ZRsk8jKvJmMW3KK82XaPGH3cxKShJwgk7BNq69r3AXpjFV",
  "key14": "ZwMdJH8NmKNCVtxsARgZMEj13V6QsHM4g7KzgAWQYSNnymopz27gi1XcVj41pKAL2boAizXtFiwSAT5sP9ZMCEb",
  "key15": "5HrwaDqUUNSph8RkgbHxFs4iAfVdePZtaEvBL3Gj9P3rAeXWpdHwsKt1FeiHmqpsQty9HLmnp5cdbbJce1PAtgHd",
  "key16": "BcouN8jepvFj5hzoCPevRG7CtaJTBVJvRdbLbELy1MbP3ejMn6xiDMU4vTsFpnWJ2dD73oGTp9LJc6jK7XpTGSH",
  "key17": "tqKudJDtHJv9mfU4HyQaThmDLVjap2i77eQ6rBHwG7B6Y5rb7i962tR9qRu9Pb5uDGHvAx3vbNfvfhZKwPRepwL",
  "key18": "vdziMgQM6DBtqEWdvddH2LFrnMx5qm5F4282d9BThndYQvtgrQXLiDPW9Tthot2AnDX6TyLrLffUxFkentBEDcX",
  "key19": "5En38X82Gga1uY7yJA3naHMSPPtbcWhpgEEvdm9oHzZu57n7jEKK6HETYegaq8gKkYcs3KJqDrsMpsn3muF2D7f5",
  "key20": "4dzMvRLJL5cucey64DJTptQ7Xi9ifAkC2M2v3K5C4cNP1dSNzRUpQAkrBjCzoBj6HYzjBjVx1JoNswVq5qxL9dUS",
  "key21": "SNo6t4J5Agmfju9vPKSJSDK88md6jHNZ8hnAfvUoifoqswZefjMTpzFzRU9jfLTzVeEHJCa62MJBAHNybh3Gc61",
  "key22": "Na672BHnWqSiianS3rFceRSATanDKbz5ese9jHktL47g8CW2FtciJ653iM2iCreZPfLDszmK4LMTKYK1oYUAxTv",
  "key23": "5hnnRsXFyWo11quSbJb1g7wod7rkmLzCbn6AZP4YugLQbY5TJsJoJWRRTFQnxzrzeKkbKGsw3nJCusfMu4BdTKZQ",
  "key24": "53FBNAz3bfckQiZHAGuaq8i2PPrXMWZikRNQnV1jx4JigHvSoEuMmDcYwhymCJ25nTK9HczUCqutZVzjrqC8iXe2",
  "key25": "2dCHUa4kXBEkic5uFrDxpbGrzBUGZKtNnq8nt1NQJGVSScYjPx8mcC5m67WhC1UvUMfjFQPjSn9TXHbJHumxpAw5",
  "key26": "2ewm71NK1i3qppwjqiH121GqsTYr7DH6wGJVnTtT7kc7KQvRzh4Rx1u1D7dHkNJSWatZSvifMfu8pH4P7JH6uaEN",
  "key27": "3dHKhofBcK5wQVGqSBt2xCXdDCi3zZSdGvgAvGuAthNFwwZs49c3QU13sWfQWhWfxo5o89NfyGPhVD9oyRj4UYZy",
  "key28": "4KAQ734AxkMMGmq1tTt9tKdmAkSAajuzPnQetbYvstryw8KmMP1QG1f4wyHsTCJXj4WybyxrCj5szomB2aiZbHcR"
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
