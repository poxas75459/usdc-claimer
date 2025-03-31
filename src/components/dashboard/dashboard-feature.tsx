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
    "bLpweTDCozFxNMvKWH9jKcT8cx63Rxc94Pz4yQkaRLW7qNfXLxx2rDwjg3DNyjikz2uMqRAZoec6WjuVFu2ibQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLuC5uEQW71Wybf2kTeTxFVreqnsFNpo2fqMQVUXAkuZt9cvq3RQsDKtmPKguqrrDepdLE6R7iZ6j3sna7BnwX9",
  "key1": "4EPsNdMYEo83XjduYbUJzFe6bgGHpGX6PFBS9HaAxocczzpexnUDyVSFn7fsvacNkgjQsaMrp762LD7B86G16QgH",
  "key2": "qYhW5dg8V1BwRwdNA4Fmt6wmwDn1bmzc1AbwH5MhF1aNigycQdARFX8KBhjeu9tnmA8o59g1JKM1hywSmVKrog8",
  "key3": "4UtGQq2w7jYYtNpt5SWdVCw9McMAUZUV6xKy3BcweLF7RG3jRiitQwzHGECS8NB8mvzXQMAoTWWDApcowH2jic3K",
  "key4": "2YSC3Raw7Na2jVDftDZ95kWmRWohiGy5c4a5tgnr1FZ78HQCQvXyhDjuWgjM5XUA2dFFq7n41Qea73x2KPQJiMMF",
  "key5": "4KZC74WnSVrmRuEAy3Zz1aSe8nSPPfe48jFubxkW9pnwUHqGoYzLSN3BD7GjrczQ6fHYxQuN1iQ9oHvoetQEX6LY",
  "key6": "4kKLs3bZfyeAHC8wsi9rDBWonDhY69fSjcQ2gAbwu2vXCAawdi3tfWSxHsTXcAxXczbuAtdkVKAY21X3aTuAuavE",
  "key7": "3Q8fMgbB92bzXYQtNzTi1QjMf1ATknuGApsm3EHmgJ4bBp3pitFUH7KcPNeqz2prBphNBtnJBHz9KoyX2Hz7iaqG",
  "key8": "5gRP6NohFq1D5XHzwHEGWVpmAkY7JUQXThRwstkGwjGmCi8bXRH7ZSrhHwmqx7bvVFNTg8azfaECw4S7z2EQnNXb",
  "key9": "63y9EGw4xNCXmD7cfJtd6iLnqB8KJo9cnfntDkS12iLHWkc2GiUqD6GtfHVGKDdVUtxgGH4QsuQo1uo3mCfZbZwf",
  "key10": "KppVvgd7C34c48UUfi1k2y2Kf6YyrwNt9U2gXtkEacbqT99T8ndW7FiwMhMTbP6dtpXvKGpkmUYy7h7B9Ec1aVW",
  "key11": "kcsjQ1q5WdAWYwkYndY8Ud2V8J3PNuVgrQzVgVKsrQHzVzxUc8pNX2jrUgn5hbU325c86Y4jGHuPBPvaexYMM7R",
  "key12": "2HEeDNJgfubWsw2b69HrJpL1bfWLV4QBYtw7PD2tHgDrBC52846FeEyVa4LQMznxscLHZDU4eQDGY1kn7xPfasun",
  "key13": "5TiCGD7DBJbgZBGF8aVZSFD9dgTYVkNp8PUxanTT7u5p87QPdDVr8KPuGDVAwq4rwQgyX7enijYY4eAcUvdptRY2",
  "key14": "4fM8Q154KJzDLaXZvUew7n3k6ZHRLPgMZ4mTVA8ZjeYwRWcnj3vwXoC8YEgG2pXC4iCaN6LoaasM7gxuehKbS12w",
  "key15": "3e7rx7is7bXo3tP6yGmJcDNiyTsMyRYkT1Ptaa3ViiEJDr4kuTKjEa4d2C7kZQ9K57fcMSBW6pM7n5uoid6Q59QQ",
  "key16": "3sCb2xhppBtk3pPdZMedSnhcC4Vp8cjCzpVXUZmnrhc3BzDFVJvqGVGt34s9ZHqFVxTgJ1KarLRGju9mUkyypcLs",
  "key17": "5gFr5qK5FgVA7DmPUwTBPvmEjhZYotWJDHev8ThHn5qtA3sLGPHqqWJ18RMW7N4f7z7rpkXEexmjEMjdUuCTEQXE",
  "key18": "3R3BZtDLbwMSR4tRPY9MGM1pZV6XC1ZNMwqc7YnBWSyFPJCsRT4LJEaotNS2TYw3gjGcfc43YmUPVwfMW182E43u",
  "key19": "br7JbmP32gBrMHL6VbYPgo6SwT8n69LtwULsQddfW1dTdt9LozJfARNBwudgSADwH9txUKbe4cMiqVkNeqcmaQi",
  "key20": "59HomwwDsu3TZ4VZcntajZnDYVKXj8KqqvP7EoabNZAgVWfhuMszd6PqY7SjoQfEfhC8vLVqNfknNnwCFdvwsCi4",
  "key21": "4QBitDZMxxaaFWoYyWLH9hyXt8XtPMzwzvvQavT73Q7e9nXqBRm8cY6edhyToE3uiTnDkZnptHYGM7dnTKamRtwm",
  "key22": "67ZA8ejaXTR2966ozn1cqPZej5oyPFwykLmpHVi9QKpiHfpFZHhbLQ7RVvrQzHNiJm9kiN6815zfxXBx7v9sX5ur",
  "key23": "36DhZ5Eyu8yMiNiBpUn2N8TC9U6xDYgxP5erEiPSD2172w7Rz1nV9c8ve1MEuivhfXkJgmJFDpUxNujqPPBB4yNq",
  "key24": "3tKnvX3m3KYQ2fzzZkwRCrM3UYJM8GxnVAPtkmU2yYCx3H16MJCdZiKjsSQA7eX8fq2wjDd9xrbFfLXZnCMBft2F",
  "key25": "5sbQb4beVu7RFFg9TGTpqreuDaUhcT13shTbEvydfd8xxpY3BVFvaG2ojHXHCR8Vy8KdhXJNdkj2fAAX2HRCxeCd",
  "key26": "28YgDY1VEiVBuuN9G5GATwJmyMeQCRmgavyvShGC3UGL7Erc2v8N82ERNq7sKN7VGU3WptXSq8uhGCHnkgXafX2d",
  "key27": "4suBPka6AiwZAhinDtya8Uxh6KLS87tCzPnQnao9Pt2VvqrYfALMVmuUfySkpzq8ansPhNtMGNZq5aqcRWof541k",
  "key28": "5WsMNDMpfVGEyEFtLy4vDwyGbrQWLzS8ufbobwj2ShWrvhL6NoV5DkKbGyL8acqoehvkGEFjisg6qhrtbuHFRD9v",
  "key29": "61jkxKMAFr1agWWEw39DPUrtqtyFEcwxQrdzeKjDdhSGZacWGnHczPpyfqcMU8EFmceQWBguZrm7ZuzTbkT8vJjo",
  "key30": "4FzSVn1JqraR4URQ3NoySSukUVS55pbQoPRPhyDKKVdZinHUFVc5kCZ6o9msCms4deZ7xYmZfJQmPyxusSt4Vnoj",
  "key31": "c5dqLB66HKQgZSZbJvb31rGJMHh6CtVcnV7jEoJNUrBTyqCiZwKHj6ahHhjTVK2eNRnh8h8z5svd1tYWN5pRDTE"
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
