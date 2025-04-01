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
    "428995Vv9q19SqNVKBeouECTfKJ9YATQpgpZgq3Fb8Bdts88FfmCYAwMB8jr8SEXtmdd35DfDPjkFvdkLWj5SnAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDypndddH2RQEnL1QqaS5Lo9QJ924kyp6yUzsXyWBioYUDWA9AKhHszDXeeHhz5eSiF4hBFc4m3ZQ4YZvaEKZiX",
  "key1": "5r8PiuqRgjyv1ALx3A1qwFz47QPPa8aTCgQ8EnaEZsXQ3nxrfMc2TdcbAQvKAVchMgsaABJ52yZ1rgPPSvtsT5gL",
  "key2": "42Fj1whGPgaPhxdg5TQDE57tyNy8RZXT4WkEo75xD5updxrUCejeSB6jVyH6MYoLf7nrLhbJU25BBZ21HHy4tQdK",
  "key3": "32okfRtUWyEzfaq11zFRvEUWdzdmgqx7FYKWTqz2pMvNogrkt7fc1sCx3pPJnK7WmmPoPCrJHRQ6GdYsgcw1V5wE",
  "key4": "48cUKMKfeVZbPBDvA8iDwJJcVH6c6JR1rhcfD3bhiRBHfvC4pC59R8HhnYgG4cpJbjQXNfXRkLZDCy7CXkcxuLyY",
  "key5": "nGgvfJzn1BPjAXSuLQNxQyVJskQ7QbqS1XxaDPqQ9Xngm9ih4d58unjScaFcML7wqAs3Bdt5RE5ckDJJFU1wJRr",
  "key6": "4L7W1PSiMtwKGk3QMp1mDJrpJTizAVcm8PqQ4AsQQWJdjfsGmiyR1F4EtMjcdvQEe5B9Wupb6KKr7sR2GtwSjwzy",
  "key7": "4hYQvJ8LYSCmbGKSYMzTj3fNEqzPe3ugYcoBY4fwzg6eyBjuJNDqhJBhndKtLK9cUwEHgDUUoBLN21UjuKLjw5Pr",
  "key8": "216CRn8JNJdc4yaC6BpdRiye4vKmfXJ1UXHHVSDr7WX7LVfB12UXAz8mzoyrcgkBbenFqZV9yPU47vqf9QuVQ2Zx",
  "key9": "5aSKprM4VkKUvZpex3Qcn8YiT8jEZ6dKKHKbN43YhLryen24Q4VJkSsk2dxF9tBFkkfbf7vVGCdUKkMkWDGWyPPT",
  "key10": "22BFJ5uxrgB1gKixRNM1CvRxAPFLk2odFrWYV9boFwMEtpw3xksueRNZbQqPAXnCaJRqYzSzmSehmgQdZBPbvweQ",
  "key11": "3iVJpmkVS8kqc1wnh475HMBL4sFCRR8oomF4t2WDCmfn6Paw4eHBN4SquKtcucRXwXoVxfsFHh6iL9AY4PHCto5q",
  "key12": "3AYxSBtAf4g2h3XWyKAX1q6qojaVBwBhMPmDkjdkRhzQRXznxEdWN2dmU7GYRu6sjbwLzeW9pbwD4pq6cuyicYt7",
  "key13": "2bJomuDTY9DB9Gz5v6G7hCNht8k2CAFjFEyFGxe6zTXrkrkW6wXK66wQQfwKF41YfhHXsnUp8nLYTviuMEj5JE8M",
  "key14": "ewsWe9HgbGuZDKicZ26HXq4J9V8uuKEWGiwSED9VQdLKJMRTA5aRgF2wscQcyHFgcFam2dX9xqGiKgqzEUc9CxK",
  "key15": "4Xat3GH32oTFb5VYujZrN4CwNhe4JF7oFT2aTzwXAo4SHdYhioxggyTA7Kk8rwLoXBtscG5qcPMg9WH2Xj6cfzo7",
  "key16": "VKkkdQVw2Z1WMqvAWpEqqkSWU2QxqZexsD6qYJaW6uQYnR3qzBPsz37rcwnY7qa2AnUyeHo1c4pbnfpLey4zZpE",
  "key17": "2U5WVtTn9PxwSTt1riqeoZV3HbPswrrA1kq44KCtpChyg2HYhPM4Mdhe51gB96xFuGCwvAiV5WKuk4XHqPZCgLoK",
  "key18": "31b9wx4QhjxF2BiokP7U2FCN7FZDVLrxG3GHpKn1wDrz1PqabstaGhBg15Wz6oPyLPijbB97AEMaoH2ke49rWDFX",
  "key19": "iMhczVJmPrQivkKgQHxP1QsmT1WTMNDfHhTLRFPsXaoPZw8samsTsw8BDuBRUne5ARmmLRtjCQmndXkVYXMFPAo",
  "key20": "3Ypao2Rb51KwmxRWF2XFjBwPDkNN9d6BfQUX47KduWNHnNthVeNvNvQhpeEm96NF3FFuFpgYBmZSCfzP8F6oD3We",
  "key21": "4ZumxX996n81JeBsiVgzVEYs9LhzTRr4DebTpetkSYN5ZsbibaMe2uY2imzauywK6jcMdyB4sjncXzsGhJaBGWrj",
  "key22": "5duvSSCsoDZewwti5goyAZ9JMEnXfG6rXzpAA5yancFxJWemnNQNC6zmHT2429WTDJeFgMsqAcxTQhKofYqZXou",
  "key23": "26fiJAfv42EscDcmKyDwuqdwygXngGnQurxFVC1G4MfvSPvwK5K5YGGDuedhpA2PgTwgPpfwAqvZiUGupDxn9JpC",
  "key24": "5GrDZitEY5JzACjaMoHpPjS6xVEFHf6jqY53bWqa7DeCwYSHEUFCM9WUCaD2L75yoMa5HrTVMQbKq9KRV2U3KNHG",
  "key25": "2rbjYYAN4r5KfRNPnAm7WNkkUQ9QZiLPQSi4UvrmbKzos3GUjj6RNCkT9Uoa9F1ZV336HMPGLmwM4XAYDdRZm1AX",
  "key26": "efgL3eBAjbiD2MHSxxmbqUmYvCgwHM9XAxvSMdcdwJiVrgkT1VrY7Z1X2xQphZDPkVRYjHPyJ3WoQoYoGxBbe2v",
  "key27": "4Kwfa9ZYTQ7p69xaw8b5acgs495gao5djukxqr1GzHRbSr4kijxv9L1xuvAP2e9SNznpeLq8dz5HpPkPwfK3LNtx",
  "key28": "G9jkG1DdpRhZH7KoSLSgkVzEnFxZQ8dVPsFoZLifM7AD5JdFcBae7QM5a4rebibJvabCNjEAWyiwgTeTT5qwJwS",
  "key29": "4X7FXpDJEawsCEg6gVDbhQLTgfFXcxoDnczsYnd7DTDg8NeZWJjwp8rQNR6xvFKxT1EcN1UAHEbFByqvVhDH8rKd",
  "key30": "3qS74iLVwSvNi7Fpi8LDs9AATojseFaS2xexUJweLq2iRn5jLuRZWsavADuuj7RTN6xgz67JUwT88g7Gmi8toC3P",
  "key31": "3t8kNmHoRAD8QVqPB9GFJ1ZNi2BZLfARVtJLjKCME53YDGYnspTGDLAdGJ9eHnFYdyFXRb3ZozQWVZRHFJeYFBx3",
  "key32": "556Bhb9aq1J9LFnPb1zkuRLRTUmnBfuKrAEc8Uz6nGqXgoPGEZKtaJHEiXZyKkqwF3SzUCZEw6N4zTA838J4KJ5V",
  "key33": "44WDvncuzsXPkkawqcWesNoaFV9pUA1LscNmLATAY38mwr4YPzpAKXgsLLzRxP6n3W3gYoYiW2oW75YVtnSY1qPA",
  "key34": "3FNUUJxsZtUnWK2WamCEiprgEnNuFnym64Z1hTJvXpvufQdaAYRB27zLP7KFMP3r3nxvHWVSUsq7fHsmkCk3BoJh",
  "key35": "5FbUAqF3b5DJPKRMvDTGkvifXvwHH5B7HHVZHbcAxETjjDzqxT3rqsBaN3utVZpgqzuetTVTZhq8Djs5qEW1wS6d",
  "key36": "4E2x3FHAQGngRoTB6a6rF4dHSdS34YfaT4i9iHuTz9io66i6BHuEkMhvp3cpTHbXdPY3Y7pb9yo18TjEekpSTPPA",
  "key37": "4R2wpQvFxSQ5HC2LEGDmeuxUEenqfjaiU9gFuNJgfu9g6dqni6CmE5ANGrDHcbucFwrvybgy7LGp3b4JDtodovvK",
  "key38": "2ZRHMPwPkRALPvwTYPHqWEUr9K8H48FHeDrw3mzVXJr9ZmCVc789dxm2DLsa2PHe6GZBVrkB2P2caRbXMmRUXgMH",
  "key39": "5MXoagx3f7ZbzDj3xEbzmjyPHRRZdTfSNqDqfRahMFMkdx38PpCRRimB4oxzFGbqcgDcWfaYtYSSAu5HmSrcmAdA",
  "key40": "4d5L5PSYor6ASf9wyyGgdzDUC1bAiGCstUJmCRgaUJVrcNQYPAT2QFrvr2tuBy9haEhzTboUYNWonGPA6inX5id3",
  "key41": "674SsBqNPeusRS7oMkLJV5RDKNB6A9H1mujE5VzWt8H3WEEaYnTSChqjYnNWxJqurwvb3nWPVjn1zkFVVQcnLWnU"
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
