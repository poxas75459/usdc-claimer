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
    "5gF69NRPuZ6gef2zXAdaV8LCFvhX1Md2VneP5Y9tJWYNtQNxeiCtzmKCSt2froyMGfrYVTWbVFbdefYNCuwsbpVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uRscv6YcViGHn4mCgfvzUEhjTv3r13zRZRMssaGcCrsRw5tiKHwJqmHoPZo2eA4hBWfyRPjVNaBdK2yMsmWTvzX",
  "key1": "43WRTW2PcRTP3qR115UgoQuNLMnyC7c7GY5kbeodkw5EDVcQb4A5ronhNmfdVirT2pKPfZzcREKof5xRuXoKpydx",
  "key2": "iDJ8j5bxgATxmTzHwzL2bLbC7xGfqAyEYqpNeXuXx7iDT8kePQkiNMzcUFabHJ1cfgK1bK3zMoXPWCzPWrsue2s",
  "key3": "42AHbdcNRv7PMpEis1t5FXftJZq17vcmVy8u8qrquVu1fXGfPB8ArvmYj6epzuh1VtszMStPbKAN65wTAgUc9Dm5",
  "key4": "2GHswaVY5X34NG9mJDhAxmWC6qAEHfrENc9okphWyrZcviXLKGzFrAQQG938SLzA8kAoUrmQFoJC2mTH56PqacbA",
  "key5": "344t3et5VaB8UgKPDbWmuM22waFx4kecjwMzAgTWtAAQ2VFJ2K5HhQCjMG3rPPD5yRyeDuE88hojQ9jfGaEfSYoE",
  "key6": "zHUuWPqkioGFieKvrSQs6wwesh86Rswq9PrxZQcJMAQjiWDexwKJWwSh6u7CvjX8uw66n2XRtns18DXSWAkBnNe",
  "key7": "3zzr1bCY4P9GL7Pem9QkkYwY7qJx5RpWd3KrTWBfZY8D3MZtLQQ7vHSs6BdeebQbo7qZ6hDbhxX33yw9AsRRvfXg",
  "key8": "3jKHrY7ESxWZWqxL3aDWiDv8GchsefQBveUkbJ746c9s5aMxZbANoTBTMPZuRCx8dmpNcAxrMYsXKaPScnQToRWC",
  "key9": "3cxQqBACkcPoJRZ775bvtZWHmFWaMpeEWcwzc6cMeuviyXscixfqcyjUTRR1AqonsGYLPSGiT5atLE3hisXGVGZ4",
  "key10": "43vwkw6SX43nHUcBgCUmT3YuXk51d4xaBmsRj2y3dund9EPDkymTPah5dEKBtKEAszEFBBNqyuJBzHqRc6fePSit",
  "key11": "2rqDCrWuZS1D7aQa9Ud6akXtpK1BfM3BC1gq7dfREeLbhruEBKXz3eQoYsMLa1yf9RwAcLQxaYP9cKsxrzMmvfo8",
  "key12": "4g3AEi7xx8BXFvbAwSWTNBtsRAaoM589ZVEYQ215DMhR7e1Usp3Gb85XV1dg3i6kyyrbgGAfU2VXb2wyZ8yM4ypb",
  "key13": "45aRW4BrHkV4oNAsrSsidDyUc8yXpJQb5Q9CtMvUD55Quikm88AbXp3nk18X4XdZnAy9tic7Mx8gvC1cJ4eAaMYq",
  "key14": "8VnRZDEtQCH8WxJSk3mhq2ctJMmGTRqwp7gZyM99KdtrB1y2cvjUcH8XpH7iuVdBC7T8Ctd3GKBMfwk9bHB9Xfk",
  "key15": "4MoMPhxH1EitxmRdHz9XLP5Lr3Mj8bbCNhk9z1QjCdVSywYMQNH4GSFTd5WosjHhdZKvNfdgz6sSmBwcqyRxHuWC",
  "key16": "jyzRYXtRPwZAozH3Ltp5kbohh6BYiyCZeD2FEgzRA87kcqmZnJNKHQPbiqtd9yV1aFwPrrkahYGMp5KABDyhucP",
  "key17": "4xRE1oS2A8aMja7M3ebeGQbaT6uWd31px9KtjPrEx5d7LX4teKNCLQ2Q2x38GPSk7k1xwjoBvjY9XipSaKCgJmuj",
  "key18": "hDDTojs35mSZQPykm8jYybiNUSonhMktKDaX6xkaXv6BbPxngz7iufhojMgiBzUd8w9uBUGQqxDxV4mSuqeaKes",
  "key19": "5qYSvADjNsrSXFoDqY7khJMM52Q8d6z6dHCpHtxPEY9LRLizVct9E2w1woxWeXJcpPMd1NNnrPqtevh8WEDViFfm",
  "key20": "5sJmaiqpEe5jecvKzLC4oUBoAwajDsCwTK6Qciu6cjKpEfSvDhY2yqZmzEm575nkryCJ9d3QRwstEtLFSDiqSyxx",
  "key21": "4Uyk3xqeoWkaA6fik5TpcERAzbFG4AkaFEoTtHYV9yAfDR3Qc1W5Yjo9LR6zKpZqNZ9TizrzkUU8Fs4nJwQfjyjZ",
  "key22": "A1MxMC1BT9fnyALGEuyYTdio2monjKZW5d4EX83G25RWsgp7H1ZT8cABX6bBTnEPGxCPpm94puEdzgKT5ecQqFR",
  "key23": "4UNSCDGxirDdJVHtmu7eCT5FxpA4UM7aXpD6JtxVQA2KqnX1ysgcANSo85vgxj537aEkRagKJXJqR38PJTMNjFwi",
  "key24": "GerhC2D9q1iQMvCxMkH19ifVQrK3J246FMpFLZ5SQF9DiQ6WgEQjvYQi64J8377f3mcKWX6S1U4JBBqfjX9ieaV",
  "key25": "5fP8GrAPLgzUE2W3RRXRyrvCycoUNbmqKwd3AJ4AQTGXg9h5WDi8J5xXQTTjqF29rqXGmNhMNdiZei4AnCVkGDCi",
  "key26": "N2ZWxs9oyT5cfbSJT4gLBoDdZ8rZ3nMsZbwoFxpoMQowRXpbUwwKaKkDJR3AGv5A2SZYTGbYxekfe6tfU39FuuS",
  "key27": "peWCbQA2ZsfCAqEUh2yMyvLzbAGYexyECxNN3D6bxevXswdokEcSsBWCEz4b5qq2CKXW8HHCC4FDSFtZUZRFhH2",
  "key28": "58sWUGzvX3njR2fEefhyNpLPAJen3yPYC1RmPi2GXkWCfKJvF6JVxA4tsKTUwmp3oEWnQ4jkSZeaAqswh7zKe2Ev",
  "key29": "2ZG9UEjnDjb6wmaTRGyG1PDGnr4iat6Xm89ZcqfBhP1UvX9AbqUKPBHaCjkWmzcqYWFi4T4GsZ9sfkiGTwxZxHJc",
  "key30": "2ej5yievNp3GvypbFEmMFjA3ApuFnugagt7yPVs43GpRceUFX2tZcgn1C1o5py1WGwmbkcBmKBz3eLDeZnZzjyso",
  "key31": "2wtkpqw6yTcWwryf3JxBhwzMfdjC2LovgeoNJZzGKxNa8temYgCnrxuxnu6J2Y1kfFhWxp3y69ndBTy2jVxkvd2z",
  "key32": "3XpgTYC1ZbpNga27gj4NQ6n1vs4AmaguiZr51LEinAem93L7eCtymubEcYQvnhacWTum1CAswzUdaCH3c4USc2Z8"
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
