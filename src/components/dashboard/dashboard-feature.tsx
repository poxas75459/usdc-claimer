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
    "2jZQR8EsvFoBmeZZX6g6YZHP1CPcyDkUUqpNZemhzxetRk97pLdrr5CFpb2s5g83qLbWPT94ecquXSxbgwPCA5uF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BYm7BdKSyRswoNEdwKjUxv3TYQw9N11pLviHos9B8BB19P2MxXc1RnYQZfKxLuwgHAbXTUvcRZjrCyY1XmC2uDN",
  "key1": "3J2ucF1f3HeZp2wUrGUzHqBC5RKFoH7Zy7yBqpa6ddSpbSatQLLeX9cVTYc7LsCWfmfVroSe8GuX97XxuZxg3w1j",
  "key2": "2GX8vfWn7dxLddnRDc6PMsAR4gjj35ZLUa6NLd63QXd5nMi3Gs421QHd7QZch4xn7pK6wCskDt7AZwz3mrg5NfvU",
  "key3": "4iqomwNoPbHMziwydQ11ZekMJ4pc66TYyHsxehwCx5kma6e6FJizcq6emNEfUf1KWcMWAqrnfyyQ8z1f3H62Pboz",
  "key4": "77hN3XD4e488TzqWZa1kUxyrULvoVeRV1a9KzukAFguEQg7MKKa2Qm6agsBFiLSZzX9VQgoVH4dStRNv6Z1aXy1",
  "key5": "2kNR3AAHHYaSWtdYztVjsEhAiLVJZaqLc7J1CrG2od32jQeJSEri2gNpC6XVeCNThxZM8TJQZPNFhnRRyzEg9YMs",
  "key6": "3oCdVnCkenkqXwDzcR9jJrgnK8qWv4jmXPHqqEmRNYZwjr4kTxzmeuW6Vz5Xy8MjmP4iubYEMgQz9Zi8AYdje2Ny",
  "key7": "5NCyNL1LmcJG8smtBmfx46rHKF7xExXUV7cwPhk9M6Vo3JE625RvXjZ5AXjJZAWyE7X8VfF8DBHfcPjEcvN2Ma6S",
  "key8": "3QcvPpbVLwAGMwT51KqsCSawnib4zLKSvDhLgMp7P3JHpaxrzGSCmydGas6YEw5v9iVGdcVi9LwziRLoMuNCsjEZ",
  "key9": "YhuSV7xsYGW8kT4RRQ8e9tWZuMyD6vszw26UtU5nsqb43bcPKCEUHGCKZuaSUUbioR7SdaASCF38ftFrnp7VmkQ",
  "key10": "5evY11Sjqvni8ajTMtveCiyGxGtDfBXjn2Lx1fFgtRt2occiHrGZUxPdTj8DHwSTQinL47U3zTfLyqPfW5qzWyVW",
  "key11": "4uRdyu3W8NYb9kJjKGzc3wMz7TQxbeZELfENDmoYQ54iSpqobvV8uumEf6huNjHimbyvVc8gXw3rsVh9Z7HXaQhJ",
  "key12": "LexuM4pGWKF3FtL3eJfB8RPMvxthNYZj5WSARMawAWjU848bA1uLknviyBSWwAewQukhnsX7NampT7MB27ZD4L5",
  "key13": "2oiQeAov2UpuQMcXGQhQoEGSK4nkEjAUUrxSLvVdmugXqkVBp8KwnDuFQpW6yX3oako2goRWWJCZK7L6aPmu7Kpi",
  "key14": "2y5YNEQZRQ4wqn76uHGGu1HkrkJMp1rTyLjAPaJPAk93sbK8NwZkceANYx7XYDgwJNsrZiRzxLf6VK3pRXhXcXPk",
  "key15": "3FnxpAPxFBofmPVbMrqForin1r8Lh334rJSiipCLtWWQ6ZG5GQA11fJNCBiiKBgA9XMuPEwdukXmg65St3upgzUT",
  "key16": "4oqutBRabYAdR1zZFECP5TYfmJMxECRD9HEbniXPp5NwaTBQPQjab7AoJrydkd5uyQkphFKA9rrNdvxJV4xc1vi",
  "key17": "2B5CYjT54DnPjZctHyWpXpmRVrtax2dMTUkzCop5EXnmmFjtnXyyHCPLfk6mzyFr8Y1qaHA7vqyjKxeW7avbDSLY",
  "key18": "37vkCpZZyJvVumEFQW799mGVPZnQcZ7yfZ1JsQtiZASa2r1Tt7qPFMKXaYpUvfD4oAMo3h8CtABjjPifqGifPPtx",
  "key19": "4JrwUfNt9uYJPpm15HgGXEykGPU864Hm1s9xmWiuscghtLRx4t2PTLwmdo5B6m14dqwr5waNqtdcuKRjk921HHhG",
  "key20": "37xoteJgZUAGhbek2uutwmRKmksPZYMtvx3C894mKEXcLND2r2fod5xRFiHLgbu1E5gx3wSCAKojqPSi4dK4uwym",
  "key21": "5cDr18GJKCTNg4WCM1K5CinW3vUduj1YCgNdHgbDKB3oPvh28H3m7JN18JHVFsjJvnuvRsL9Rg16aoxASgNSd9J2",
  "key22": "4TxuXpE14vguCBqcAkd2fdYoRVALwfkHvyV7RQPHoovK9WuWASfZyQ4aZjsmCaRHwZvG6AmmkekLxTAbhrJh8vBX",
  "key23": "5qpaMbExgpatwPBFPNS6Ys8AhMQ36CdtmTKj1PmTXXMw1sQUTaiqZvCgSYXLiwWFjHn1bRrMGBk1B6wxSpsp29Y8",
  "key24": "2pojZQ1pUmNWA5wwVUJne9CBvhky95v8k6w78J73ktyy7eWWwY7KuoorShcc9g2iiipsMP7b7sqQCsorPT2bRFdq",
  "key25": "gaiukyf89nWzcHwSyZMV7gxFxNmNXzi6yGGUWDRycQt9PEuT35F2vpCeBMzD1KzpadYGmkyeJAo698DxJNkZAt6",
  "key26": "2aHXE9hrH3XH1YJKLQunGJQfaDHFzNu8jXzEMryxbvFJ58ruaqPKbWRXZbGsWuBGGSPpN6vH7QUpPe5ikNKYmJgV",
  "key27": "4ST98a9PAruaNoJAGqnCyQvXZ63agz1ihDtWnLQBsJyjQTf6oRrsxKoRbfWDP4Wns4J3z9U2jKiKh1Qg8yeiVGo",
  "key28": "57afxKvHmtEy8s9zru6jEeH5tR9g3FmYpHHM6noAtnHE6sjKp4hEaCGDsMYfcykJRMTBFTiKNPev1urGPr2L8DYz",
  "key29": "2kmVJKvKi38CQ8foA2oHBbcw18muAEw4gAz22s1GpK2ueSiVzNVwaxZ3d6sLHE5NDbqrud5PhCSRonaCdsKidjFb",
  "key30": "4xDcaEDLjj7Zu6YuFsTfussY52aAxftLoKWXJ9FBqmepHv3eUpZxB3BfensmnYLGwH9hMHuJFuWKvCJFLnexMebQ",
  "key31": "2jmFxGKub9hUFSYkoGpGT4Z1eahYHhv43mB75pbkJ2tXvMoWPqzZLHxhL8WSbL9ZH6rNFTCnX1gdTL4gggnrb2PJ",
  "key32": "3SjtDjHcxrpJ4RkNBb4H5Nigmjky9dTSp9SFuE6ziqXk8nMRS8JSGeA7Z5ipbVbc6XTbRTfcMEnGf38oUmbTZkA1",
  "key33": "4CbbksaJsuA5fg5CFR2swinTJfTZDeWhe6CufVEQbm97ziRhWzqS2XX3aD5Sm7M7D3nBQSvy4K4DrG7DxYcE9Uzg",
  "key34": "5mh5jS8A2NzBmEGCSd8iuKhpMTVbtwecBuC2rsQSQAQ1ZcWH8z77GFMCbkBbUU2L34nUJkpuqyV9vGmjZ25QPK1J"
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
