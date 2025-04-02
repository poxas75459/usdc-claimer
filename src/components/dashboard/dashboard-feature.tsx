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
    "2jKBRcTLb4avbNcjp2se6reYxWmeHzwmn7aQ3bu15QMuabuCRMLe1sGEtmtm1HZ6WwJpA1VXM3qkgUQtdfjWhQdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yS3SF9ZmkGbFf3jVxKrZEK2DbA3tj6f6KBzTeHBBRTeaCqWeH4GLoN4zqvhdst2ckrRqqE9XDr2zzgb1MkqbzP8",
  "key1": "3zD4RMGRXwAnqrvwG11AXD3Wq84PPfZP7Ue83djdvBiEBXugzzL8yh4yPqn1mHWbhd2ecTyyd28qFYiVmujSSgSD",
  "key2": "24F67b1BaX479qhdymVvv4i4c8cc8wUxgZ4r5ux3BaMALYbPBqh7twSLsq6wQJ656qhk5v3kVPM5rwyHCa5xCCtp",
  "key3": "5BVerDWKggysaufr4GCXfz6h6CYaMJRSuaiVRyCpwgKYU9QEwwKUJU8rUUkqigzfB28vJpbajTns8u5hpxcYqrJW",
  "key4": "5p8gKzrqkevpryN9um3j5qA1GVQzLEARhMTWpSEFdpqqin9x4ADuXg7QshkRVSumneEBucEhjAeAinoK3X8nW3ko",
  "key5": "3ZcynTEyv9pwjXwJt61HwK69XvisKvpMGU1S9GHySdcwsic94CEXD1Mm1ujTK7efELCSFJChtAuAHdA67YrDsYK8",
  "key6": "65c33tFVcw8mkrkh197EESy4gkVPukbAQxQbNu96xnHJk9RqL9JkZwBnrY7acDM4eaE4jTfdzX96VAVgaLCtssVA",
  "key7": "9APh1iqvFZUVk2qiYQqMg9tzgoeoq3FdZV6vCAdApfnV4H9RpChrV9f4DTmjhLRtvNor9pMCDA7JLDxTdPt2ecq",
  "key8": "uCrnbayF8k7tE4wDiqBbcGa9tgidDX4ytdExUzkoE1qSF3ANErY851uhwkers45mq8vbjM9pPa7YchCnpnkHBLK",
  "key9": "46u3HPVgtcktSS7LRGQQAjMZiyRTQnCTKxY9bx9WwRSbUbk1QhFV8Y3P8HYHHWfsDLKNF7qjDJygpiZhiRMoMAaF",
  "key10": "4h5kzKZSAnn87V5u6TzWvi2ixNxe9iuTPkPNuNVbh6RBzSoYfHqYARFKRtjXKcPoaGwDomYekHBCFMg793SRGoAi",
  "key11": "4bqK9cYUNYhvfzrisMLftiypv6t1jrHroCKRn4Njqcvqe4TJXpnestZbDnqMmM9kqnT1ejfLb4smnYBEK4AeMvFi",
  "key12": "2MUkJkBhKZ2ej4yyBTiLuthiWS7GjtvXRjJJ37D1xMg9enCuKZr8AGhgnXJMwPfpP9W5HERJm16Jpc78mMGMQM2T",
  "key13": "451Pq1ycdJFopCdjNhHxvWAxdJnq5VzcHrJiZTo8yVxKkdzJVn3X4w2Y4JWQ7VSvhgtWKCwjR2dNFbHLo6Ybz5ce",
  "key14": "AnHttddFwZYgE3uV3F1pfQZRFAxmqbd3EdcytD8D9QYTrQJd6cy4qxByT2PeZ8wHXZuyYncQ37Gxwk1BVNL4b9s",
  "key15": "56VRXdv6LwUQJM3d3vFU3Zd2tJnXF3yJLuRWAeLfYCfcNtfsKbUiqd3vBTNEzp4RH6ybtV6jxQAUyCtwgULRpFzE",
  "key16": "2AkJcD43Q4bDFwXMJXwS8cUMMVnmYcy4KUNioGSGpcdVKJzEvTYTR7z91tZkm8yHcFr4YKJUvH69AVfsx3Mo111W",
  "key17": "3MGAUyqEB2rTxQF55NHQ5Zof75vgymTETbmQCUtS3byxajPojfMq399GbTs9ZKpqJ5jkQR2gVr5ZEzeryNMZGZiC",
  "key18": "4tZibQqYxZUGLcE1vVYPXo66hmkuYJT7V7xGKvj8eRBBKa2jmEwS7tonYe5wLntiau1VB5X375wNC1FDTgocivvv",
  "key19": "4LmsCjnAXAtYKHBYAXUHrU53VAo4jXFyZBtbQdRjzz4bCPB7CW7apX5JdLTASygmSE7WJqcufesG8MvV3Bdsii7J",
  "key20": "38FzGtej7rXmKompChejTL2fhZJKyZeqamiu7WdLzUyqtvQmiWgYUhS2NU1439TMR5cmQ5agcZBRrEuFm64PNDWx",
  "key21": "mSiWoarGupr6LSzpkk5HyQ2HpB7h6VzixWyU1yVwvck9oQ65dDRc1L6w2gtbfX8omVKkCQoZAHoWTE7LSLiacFU",
  "key22": "3BkMP9bteEpVADCeBAYbENUDJvremwdoxbSabtDERhnHDfc4z51eub282u9wW6wq3aqP2Br7PnjYF3ZuYVJ2t26J",
  "key23": "3f1xWVPX2WWQbEWPWuWkeTKwNzQoyh6ppcJKeqSSapCP8o92eEuStVxFxYrAK5TZdSVVSPUfwCCA2aM1HToDYQck",
  "key24": "2NNcrwSbdzfU8PYMVKaA77TDBHigZPpbRuBomYCxCqovGX7Uz9hBwEcV3166kR5FY2bEX2wL9EMKhzT4TRm7dfmE",
  "key25": "4j2UkFpGgvYMvYYHz8DwbEK5X8hwb2WMzqUg7xLyauJqMYXEryYwt9Qv4r6GLJVGgZJQx24QSuBkTdLdt45yy6ma",
  "key26": "2m7qiiL7jwg2mowfX8aFeEGogcX6gDvM1bdxrQ5kwwE3NNDmZqzXkB7CwYGaHuTWmbsddacbdAgFToSJGhQkLXLi",
  "key27": "2bqbPCYDWTEfUqt138moMsbCkc9zK2p4wTt38SaMYu2SMoA1JzLs4G1ZC7yvfCCgRmKKKK4wkdSmBcyzT88oCw3P",
  "key28": "23zWowKNk3kuLydjmcHg9k4WmyxifZ7oCnSwkGsypGTMZRZ3b89Pjsq4ebLxnPmDTeh1tHoi5NYXzJGPVPmkbXdZ"
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
