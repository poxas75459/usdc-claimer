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
    "3peVXKDMPE6tN2rkE2jESFnJa3yx1usw3FYMXTabkDjyYGDfX8zFPyHuooNs4Gaj6EimpJUF7A1koP71x2GDKauD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34hzxXVzgBXSacafAPtmo2QKa7BN74uKV8VgVFFYSpUs6F9epgARFP8JhBu62Vmmk5U4E16SFPfjMytdbN1hhSQ6",
  "key1": "5bbrDLVT7G38ZcM1FJ2fQfCoSP6sSoGuXj86JzNeKM4xBYASQHuayhtarvvNcZfMhUJZsdW94eT4KqAGtw6QyQh1",
  "key2": "4T4cetmepsJpzDcAwjaEKTA1S6mtedz9sn6DRiBsnMA9aWx5v7fgfdTN4rK6iD2hgFLX8VSh4DBUumPDfYAxAras",
  "key3": "5fNGGPB1XnPG5LxeyKKguYHTaFTZzv6EZNnTEFrLxGZ98Ff1iLYQyYSo8ZE9evJwNr7ujG4tHZhyowE3eeaRzciw",
  "key4": "h1YwRdc1AACvisozdDp3UJHDACnTrko998VqsLz6HHT5auSNGBpXbTLSWJUWeKZz84ztJKjqTWbYYX6jAzzHdpw",
  "key5": "3EYFmV6RvdZVAtkpDr1Rhjr8pVMCbaBhQ6RkNsz19wEWZXvTrJ3a3ie8eFHFksPEGuY4Hmmj7XxMp6GCA52vz5rV",
  "key6": "3BNS1TBUn8NDnS1Z9frG9F6iXMXbsuPGDhKYAFEk2zU3LZ3zJDuh6RV2q8xywabigqqZkom1T5LHM6oV4ay2dYrC",
  "key7": "4VgHkP8ooskj3mGJYTqJaahZjXHbk6mtbDoX2E3EboRUafCp5s5Gmai8hg9pCxFRmBExA5LczSdznyZfJPKLsSXN",
  "key8": "2rPyXVpPjmt7NDrm6Evw4s6vJ1A267GfyqRn7qz8KDv4hMz3uTH85yhsht5k32ednWkEpftdydR1j5bA3Ne8wbNh",
  "key9": "4u12BqHy6Z6uBZKgbZKYVrQsvH9mK6E8yNQYay4aGXakb4Ru8kfq4zo51iBu3VURaRERBtPPv7V1x1yooMuPmEk",
  "key10": "h68jAyCEZQobJT2kRH5EoLD7tGpNgNV8iutcfTMRnaxVc4XVHXMT7v4HGBFVLt1CGvbzLVbrmYfTNhKPaUL1uXy",
  "key11": "3ZgEQXP1vaQSbGh23w2GG3DeydZtHZydewMvBPkuRmYFwjMiTLn9AVTRVALBLEgxwFX9ZZYLHuWnDvD7X7LMB2Qe",
  "key12": "31F6SBnjdymNtL2PquLtzYmtTXarq2ECg4eYoSCGcHEttHznJMYn3NN2MymKQ4TnFCJD91urQt2baEFdc2GhZ6Py",
  "key13": "5P463ydtJqgYjZvdXd4kJdKnKR7GMx12yHKMZ23twgWGB56wcRqr1NUrTraxEyhiLJcBWhchr2MENFwoXwBAwnhn",
  "key14": "2YykxaLRN7EuDfxHq5h7eWZxtYxoFFZB1bemegPWTxZHKDarfTzMwhNMLCKEuUENcEzjaYkWwhkHGbkRzYAs8yDs",
  "key15": "4qnpB8ogQGpeauywXe8CozxJ3uNGfFcTcpULBdxyQUAK9H24ykNm49XYHxoA8o3cPqwFMA4SLEBcMKmyk1zQ6UQK",
  "key16": "2Ha4uSVQ22NFRnFuhHtDwAiiZaATkAxZW2JCKNak29mCSs2bJGWfDJyK5TCxdbBoC2G23qtBB6igDjGRS23Y5scq",
  "key17": "4SmR9XD5kTz3MxKyXdR8ubpGjj5dJNRrryXmHvNbjrfVGCKMUfYGKQ38LYrd4mVaYn3Tc4GadEArpj3ZfAP7LG4e",
  "key18": "4QpEFw9N257krANDZcyyHZpUcYBWfpw6aEfk6zdF3vEhPLbemhiKAMqvoFEpzhFBMcEGw5zTK4qgDDxvLK4wsE4h",
  "key19": "4WgCG79XjzpJJMk24jnzy7B1xv5UHyL2jVbHNM8APBwPJTczKHgmNdG72bktu3e7TuUZ1pgfoYTjyHjCPsv2jiwb",
  "key20": "5wxnjo6WBMKUbGft4mHKE7ySSfXnJRbN1M5PoyoEpELB9hyogDeJ7GHN7P7HhXQ6CcfQxhLFDiAbve5Rgw7UeZ13",
  "key21": "3WTwBrqkZU1SppdmVTrTjUz4bVUFj7Uw8qKJzCxv2auxBSSqQ6VaaKxU7v9ESNx1zyfnUvqgkHYUC9zEwibqHuQG",
  "key22": "CWCz28iAABwTywm4AnPDZcvKp85FyZ2zQH2Me18msrNGimDUkb3ejZv9tuQfxKLEVUodRNDhfkYxbzkrjgpFNKw",
  "key23": "2JZkzJ2znQNtyKVMHUiz3HSnr17kEZYCZSMvsBdr1ShVmekH3UvT6hVX1tQoTMsUiiTS3aZxVAAk7biHiJbj37pb",
  "key24": "4zBZKZhG6QZr6gX27FEPVge9vVjYDtyoNogP82Mqe1JPfbZ6wXTBE9GDpLDF9VuEwZLpWtSNxfkgKHesLf2D23SW",
  "key25": "36XhT3CVeLQHrMvxDrwnajfVUKTh7iEcQFdvimaUEvLiM1JpmtYt7goT6RucXXNk7aqWF5Qi8eMDxz18SYSNLE2w",
  "key26": "5DJnEP5wiXD7Nr2x6ftzh4cTyuHW3XgBkrQQzs4B7DRAJzfybumTNCzUMnZhC9syokU1QRRzepnmKYf79PdQMrZ6",
  "key27": "2S2aZ5yVCr3rgNWbmagBg4WZxJXE7LMkfgkVpDYhBmU3izvD9MqbaEcWNLr1BNLkydfehK17rERxjYrTC2vasLf9",
  "key28": "3x46G9rWN9FUyYhvJ1fHvQuMPn7MK2zeQP5r2BKCdrCmJVkbErx4hTwyuLfVgrDahWGhFit4GaLx5eoZBokCt8aj",
  "key29": "2ZFJeNCfRDocw4QCSTcy5pDA4ALCeHcciaaw1M6rMfVmorJuTdnuhn1H3KhDz1UySkFqTQmo9aqqHnTrAS6fdki6",
  "key30": "5KNeAWhueKKEiBy6JcBDZSpAEg5XTbcmCmjQeoN624HsgxTq1b1YeEbfcS6Q6L481ABoJiaXpYV5aqSKqw1azvhy",
  "key31": "2etdY2sUdoZYfZGMmJTUvPtg77h9cnXFd6NKYD39tHsVGvKR6BhrLCDJQJGDoThS3wiybSmM35mJkxp9JAM4VpB9",
  "key32": "4MyuDfYsNf1YyuC6aWZADRDfJEVVk8AQtmBCe5rX8k6SPJWPjRfHZYfxz8qhVifJyFpLvKRutuZea4YtRgMaV8Nk"
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
