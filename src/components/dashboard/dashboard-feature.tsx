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
    "4QEEMuAsg2uDG848FcTH7buD4eYyj1kb5FeAQ71fBk9ieyj3BWz9xEezfam3VpoAGD3k5kH99tUJNciuoN4XDZ9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BqtZZ3kY8mpnwWdPQkanRcjs4mvV7qrhj5iRnQJTBJsYYcXcH1ZLWs1yTy44zsVpL9XhrXDpvYMdSR6TnG9dycw",
  "key1": "NnZgUchA57fuN3s29w44A3BoCC9vGhwwRS7ETM1X8i1a4UZxjyq6ZoM7PsuEtADe4fVwheBdLDkeZu67W3FnC4w",
  "key2": "5wzBeFetGu5R7FXGQ9AwqPYUghaAKYxx2jA3EpymS3nbvi6C7NtC7UskEFnrJhtUwNJV3eaRrd8Qy2THv3GoeBKA",
  "key3": "5iUzTLnJtGuesUDmSF5cecLXQVuA7Zw4GNVuFEWkrodFHGe5msk1nKtjKkevwAfeMXxMKjtMkXMDkiwJKVqDi4SM",
  "key4": "BCdpDhKWY45y9ZTqfQamFYptaPmDpNDs3hvU3qY9BiDrkG7PF1wuHpcQFht6DNzJazicuASgE6QbGMopGPUQqsz",
  "key5": "3XwiPcAQ2GFzKXCN7f2xJzgMnDEd6mxnP1fnZtLAuv59ZXwEUBKgHqik8PmzKQYbWicLM3tBHqELaBh7JfRxAWUo",
  "key6": "3U1QfCBnTPHW5m3TUSFoQinnMeSYME5AKKpb8m4hhwv1Ub4yrHCD2jggMkTDsBxP2AhMcTD5wye18fAoz2cHfhqx",
  "key7": "2KFHreDWa6pcWs5EUUKctPxrBJhNmpEop3hJgrFzFoc7ENQLqvn6eqJuCrUAwqRfiLFQktSufWgf5CvNEfREmZAy",
  "key8": "4sFAZ4spNHH9qqGZDF9f5HUKQpYXBQqFWdWwikxAXMZax3KzMSQ71dTHAzzSVGsnpdN9KKzsqf82iFXzQ5yoiJza",
  "key9": "4nwuJ1cTPMZRBQ7irwwgNhMY4c11jPvrjcT1qTb5ma2Xm8CWtUMW4NzL4gN24YPu3bFWqNNR6y6aWA7xR5iSZ6wf",
  "key10": "3YyjPsL1zFDmRvxLav2K5KsdKXTLQ6febZXfSaHE3pVnohPz5NJhhWDcevJBg7xwwvb2R5oLB8kQMSTKbr6wHkSL",
  "key11": "3hBsNnssxoR8u6sMZtnsrCqJCbJBBSZSuXUKqH5Sc5LuhYDU3GiFJtGSTnC5zs13jXnHnRi7UGiaqSE7e7vGeahy",
  "key12": "3WEgoUxZto7A1Rx3nBVun7fgeiKQnXtrNGvFc8PaeFxKowjqtriss9TcgnvyLzMdGu83Qi6xuj2LCQGVNyjYXDAE",
  "key13": "4rquPt3fzoUaapogoVqiLDUuuyRreJt36GddRyaJQ7CA2fQDG8NnkCPT2SGDXdbUs317drnZTjzmeJPVZGTrXUJJ",
  "key14": "2Z1hqVkn7zQcxC5SRRb7dc37dPPceMGGKDGmc5wHV1SJZkkUVNKeP4m4FuWfYeUaduFpdUsFB8r4mMCjCWspsGuq",
  "key15": "4pEqevEMJSDFZfJuMqeZnng9HdeujxxMknQdoUgUFTAtXJFQVb3RUwJZVD4hCKqzTjWuM1DoxgJXiNdLWiJeVd7v",
  "key16": "3c9Su8762vnoNAspFB4eHCEtaX5EzGn8DhJjpLCt83uHahad4rVk7iw8RG4VJ4hWdrwN6UUXhoGDKjVYDjHPNjK6",
  "key17": "2zjmRsR2fchE738TKnq5HrPkpMqEHMZYYxywAx1E1iKRY2VRv2NCiFVsrouF9vdwxfC89YFCiW1qksrExWK19yXX",
  "key18": "wMYhMaUUpPUrfriRyLPfvnQqm56mCMFnoHQotqD99FwY5M3UCArvg6etvN8doWYTbrt1zXsoDkNQfjQ9oUTSRMR",
  "key19": "SQrYkuWruCZMnDEq6XFYW97Hn24TaBMPTZnCCmMnBS26exDr9ciyRfJfPtpWCmkkN1SyLL1Vg4SjBf2WgXXPjwv",
  "key20": "4tpyE28X7rtvjqAyCrqdGLqYYDAZWF6d6fHsg4DKu9SQibTY5cFqMbxS5hkk5idvoT5DhaKH7GUTKH4ypR4sbioZ",
  "key21": "4yJcGE3MLsCLNzZA1daRuTGThczUqK8AJoVepogNsykbAzaWGqbyqb5Y17nEqo7JRjFc1Ub7onKn9V9NHLhKwKcp",
  "key22": "2X4BpyKkE6XDT6iwQJ1rGf4oTc6ktbjiS7gK8FFd6i5BZbe1M7c5XybPJssQVzJf7wwHUts2vbaJpopx6vNY4wve",
  "key23": "3am7BMYMJYWkoqhuMSqP4Y5Y4QSLezYTjyvFLvBGJPf1J8zPnWq59RqeFJRi16aYjdgUw43kagkfQH3EWjahkatF",
  "key24": "4kq45KkTNEePufRTP8BisWVGMiKaJNmZ2uuBargYxg7PmZKxgoGNH2CaTNYSNhCmhGNQ26HComQRauQuznK8b8VP",
  "key25": "WP66vWBjaP8qcfoKinJngfcABpdUdzaH8DPyV8tTUwe5WFtTxwHDDxFur55McFRHqddGkp3nuCA95mwWfpzVsB3",
  "key26": "65RhH5MjZaMdTZCK8RuKfvTVWJrtmSf7S8H4egAFuXLbCekxu6nLUzsEP8ZWsV9r24cEMvZD1y9k233WUHPmuYuD",
  "key27": "5ufjNaevf1DznQtVbwkG9wfZTgXnsd4TcZovMYQY9jBf8HQKcoDp5gCtNpkR1CdaqB1gL33te9HiUCVgdLdZmf1w",
  "key28": "2kkY4G8axYyG3nFdeN47PxQehrPz9oKvMCUQx7fLGNZBBKFcUwfTDHiyqnCtMuFYAP38nXf8VBYtS7z4e59b6Gci",
  "key29": "5aPsVCePtAuthfdHQzYHJ8yFwkKubyjinCTwdog2WBpyTCAdbpfj8FvB9Uyrf1J3jur4hqwmcGaN3DaR7v8aotpF",
  "key30": "3vkpTykMZVfp2viSKNBbZGTRMxgmHz7WFm1jE6CoNPNZwot5WN3YmSuMLBwLGmBiGFNBoEBJg3t8PV3NXt1wXKp4"
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
