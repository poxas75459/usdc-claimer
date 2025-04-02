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
    "2P9cKJ6AJCkoY63UrVp3QtRH6ER3VXK21gwxDmzaXfadLykGC5Q3uDD9j5Z1F7NCZzLARj93o8k9HsDsNyFo75Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Ezj8krRJMcFpi2vb1gT7tVZUCYLGsYTjVVh819JzynrRiWDFkzpvXAYxEk7E1baf42W8dChAEA8W8S31aqixwA",
  "key1": "PmieSMaxsVARxLHkxoVHtsYpxjAM9kevGdxBg9yCMGBpsop5VBQegwkm7tXDACsC3PBF4F4oBkqZgWBJ37mSTYc",
  "key2": "3G5uTHV79TX6V5tvD32aUUh8QugyrF963zudFLCVVx8Fgbmp8KSJnXLV9EVdAeXJkpwfAq8ppJwZbL4m7Tzs3zSb",
  "key3": "4HFVpWGDGNG4CNx1x24WtmTNACjcuHfvGWbip8B8Wr6UbZVhUL6u1aczgfsvgSAwSA1LDVA3sBqHK1HtV8imHyrA",
  "key4": "wKBNcFhYirEK1mXYGr8CznXdjGYUBHZGpCzi8LejKfphVDPmjoeW7T8FMYUoRkQSmf6wv2WY5Lkkb8badhu5pzX",
  "key5": "2zyiRzCo7bwJBuYJarJNy7HKy6ndduG9HKH5BHGafoeDL6LHzkz3Aik9k4Bew7Ub3ZJ7CETr2whwqbsAFEbRfrmo",
  "key6": "A3A8ocv6BBb8aVrqfSbCbZVT15cDtzcbQGCfqg1AAsRSjaqm8fPAK5t7PRH7xo4Lhc8Au5YYUyJi11yJy2NkVqH",
  "key7": "5zyF4GYGefBDTvJW2UWvJGSS7twdfrrN7q8UjyrdnwCoCJaLkPdv6jcKRTXfctosgr8cQEpf4LDoxJwpnpAsUbtq",
  "key8": "3iEV5mSymjpgsA4pZGGut3ZiFyzvNeQ29tv3ZfRSXZNRw74nCyNGjo6JiXhWqD3kqHcRjveFQwWDFMuexrqoxhTr",
  "key9": "3Lm28nfUsQSgJm3mpjCYgvQ4dBLvnhjR7d1J5msaH2HxjAxxYKdgBiyMMF7h3hh3moEadMD1tca8Hg1P1SVeQcr7",
  "key10": "7rR67tz1Ti7GhL9sbwBvzgVWk5U8y3XY8AuBTNnTqhFQKQwyjBRWXPr5xdL92JxjzjNmhGGnZA7Li8C6rXWmCk3",
  "key11": "A1iZFtBQDrXfpozkHMVeUZqYNPr9S5HLE4K6LUMipDLFYRiFSipUQWSKXMbqceyjwVCKkd7bpzqYgs8qKpKfRKX",
  "key12": "3b5m3KeF8yDDiGr4DFWGxhBZJNo2qjPsFuaPNBYYvrM2gDTtgujkUdpJSuVYpqGfmK6sYzR2RqgPhE4SuJmJtiXb",
  "key13": "3XRaB3zETiyrwGizWwT2SJqcFc5SGERKpLmZQ15XU2NDf3zZHWPxsUa7QW37DvHe7PaaYp7PRNpsjQLcU7jn33Yx",
  "key14": "55ntxMhDzB7M2znsqC8zVR3K53zi4YECsbaDC4TTRZawvB9F2vawobwh4vFabMuzoV3Q6YHjRDHu6rGUYw4CUkAS",
  "key15": "5MQhUwXL8hRwK9WEE7t2rvjiGiEiSMDCuq3cM15phnm2qu2h6dhnSPix9PMqVfqetHnQVV2poPVYweiscLukMLgY",
  "key16": "PJmD6KTiUhuBQKQE8XBqCeTNbSTeJYtAbSoUcFC7BiHXCGiRFkEbozwoi7o76bjQMRK8WKK9Yaw14cCPmAdGo2h",
  "key17": "4aKCastjuVKqHt7ZFJcQzUDEvgSo1QJRCAMWvmsuDkJHBr38Qz2rG9Xpa5B1394nGivUYXhtyiWd9yCbD1mHAoR3",
  "key18": "2zcKJD7zEGcg7EHRaJPCBvUhJo7i1gJorz4fARmCm67uiKeJSd2xBcAyNxGNi4mWLPC9pjJ9t2rn9wa9GmETXZYm",
  "key19": "4U9panRxNC1dmQNkjeBxaEHnEAweoaqYVjC4NcFSUswbJhqpmctUKX3yFxzRCwoMbjJozme1Je1jnZDNTbVQq6qg",
  "key20": "3DF4goBsikXpnpajwDj3usxCvFnEbtBm8LfvjcbriB1dLaJ26M635LzdmqM3EsVFjFEfJyyfgiYVXsk6SVVgPTQH",
  "key21": "29BHcEyWHqfc1Nfo7GxrZCKuwPncmcg3Bj7AP4LTBCcqe6zmsx1Q2XyndavRt6QPSeS6HvvN3NLzNumnSRL4ipgN",
  "key22": "S9z7nZrZRaDQHVQdo5ws4sygQU1uEttYXgE5HpAccsdaWsr5TRRAJr3StwU66baefXAv7xgzRfyxR7dtsRCd6gq",
  "key23": "3nsVnjPsvS7CibSEfHRWcSdpugPArz3PazqfUknjd3omHWak55Hp5ZGmKtWJqtQrUfTXCV1p45xkxx3yJtnNcov5",
  "key24": "d4DKFkWTDodcaraw2vDGne9gitjMd8PsKm2JgXk1fniMB1nd2ThSeHcbuMfJQ716GEJhc4Ur6XX9wzBdRCZV7cy",
  "key25": "kgpUGxWyzRERhw3Kbxqd9yrPrAtWpMFSg3WyDBrteooKm5T8vRvqWQurkK2n4k34T3irXMJtN1LoQkJoWVRyehr"
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
