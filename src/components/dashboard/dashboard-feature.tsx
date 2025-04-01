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
    "XFzbDK9f4nVFBK1x8dR2ZvTX1aBKZDiFkgsa9kDSjDBhoCXx6AsGX5hE59MQshHn9L4gkkK79QBV93qLn2SV7Wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h28ft837qrJy12PKNensDr479aMU8yD58A3mQwCfMkAFgiCPwzp8eiasX8FudNUXTt5PpTLEHmeQAADB3L8RbQj",
  "key1": "3rjPbpfJ3sgd4amG7iiEVnaioQsn9Wsq5AkhkSnAfbB8bHqT6vhcZEMUYCkrGGXY4GKh8FcDtAzTELNVdVcZvDGn",
  "key2": "5MjSTqTCKCouB9io5hFLXEngHpLNArLzmyx8uzrkMccs583T5fFrfECq87m5Tz46VhjYZz8chiqJ7FQzzNTZRwfz",
  "key3": "5M9fLsAnZvcaNNvQryhvGMv4B6Gg22GVAHZTBUq2dAcMknyiMYMiNoSAFUrAM5HK4XCEKrvsmzot1zJAhynrnQ9m",
  "key4": "45dcU3waUm77jfdPQQrgxYtvo9z3LaMPS5RTqwNKptHnWbNRpYKdYJsCAV3VtTjq3Rr1qGTwNFdyB4HxiQcPiGJ9",
  "key5": "3ghPfC1mzr98ULFQvtF4zDP3U5eSaxtRqa51tBEtDETRVenurHskbbXtTHyNSS2jiy5d3Sa5DZZEckGoV9ZE28xe",
  "key6": "5oMegEWj749u4QVyeBEi1mzydGFRDoS2GTytFv6X6ebUhjxSKxQwzoGudetk8r8WYhZe78prnLZAw26pDWCipF79",
  "key7": "494TFehzMvcdiVVJdzynNeLxZsVCtLVwhzVutb5pXQj9ppZyUoYbwNXAX8fanRxgnkPpcidzvS1cMthQk5AVSTkR",
  "key8": "2eQVf2NmLYEz5ep3mWasYFrRfTCMBitM64hb1Fq8MXhw43MwUKvdVJv4YaaoFySv4Lw6MBbqurHqT5xGp1pogRuP",
  "key9": "4KuWb6Y8mE89VzXA3wapUs6Kb65ZZSae6yoG5gRuDWtMbTDDwAAbmt2MrMn7XmNPqwee7eb6GXv3YnxKii2qX6hk",
  "key10": "5L92XkSikg27ZAYBacP24zMuuS9V9vfq85w5YyCmSX9156vvUv5ANg3RNKuk5di9ycU1pzTwhGwtxdfVC9HworzF",
  "key11": "3Bd6WsQnvg5Gp9KSvPNuJNsvrdvuK4kL6fhWzYYbL7Xq6aR8wRrKDwfvd1B4MnsKFmYEiSJsmLG9EQMARzh3Qa5F",
  "key12": "4ZMsLmnx5PdGCuJKDMFwQx6tx5ReWhgkRH4vMgoXPcDaex3X2Gh3DJF8AgYD5E1wqUzXikJyreTwwXDUoALr8Ppq",
  "key13": "62GnLUaQhgSRBZgAHfogKanT5Fxz2Dcfwc9xtN3ZknAJssRzcxo9mstFDWs3ZhmteaiWC7wQWtfsFBvv9Ay2SpCR",
  "key14": "5LGL2g2ZpUEcW6dfTxPLMmukJxsvruXJpr9qyraMpNVd29AcgnLiQWXAkYuiG5WEx46JmcSLNVSCCKuTrHBvte8n",
  "key15": "5jJdy7rfo5hfoRwkfrjBTiabxxgCCdT2wTd5MQtcFL9mW6s9Jw9H6gQWV2owX7GbyJ55fTgGcjLi88ANH9DcbsTc",
  "key16": "3qTPA9oC5MgguYp1jHdt8ETCajGWR6JX4Zx2Y2eVfwgy7h3GZXEsDR5PsMSy5pgeuohH246RQGo2WJoPCT8tPTMz",
  "key17": "4PSogUWb4doB5fBBEKkdWXZAmQy8fvwYGLjnYs9BNEVAFxndAJpaYp6pLWykzU759AjKqNxCwkmhhM2oKZtLD6DT",
  "key18": "3S4yfQp8Xx3ydcq4keadLCKM5NQX8PVfkbB8PpFk69fFB6st1o7a2GuPkf2fq9AovR3ptAVJSFbRq3qjH9eh4oCZ",
  "key19": "3SSo1azdRKcdBxWPe6pi6uY2nH6PRyRA4JA3M4DUfWdquZMB52mYA7eVYNU3hkvtykQWYJWjp8tqkVYnH8ixqUPV",
  "key20": "5pvbUVS891dJi9qmXQq4ZkwUppP6XvYr3QhPUuCRpyRuoS8T2oF5oCu9buXLiLAyQtKUd7PpqLCsKFWAGT4JAudQ",
  "key21": "5zEEYuGz6u5ReQn7X9s1ZyGVdPUokiAgKNusZsEHhc3rUychqzGeAacyNkvNWCo6PByYP39nE5MVBaWf8czXUnrC",
  "key22": "2uToRWJHwmRC7VGcHcHM2hnA76vJBJFDuAN9pmSuEFVbsfmnfQpevCm3nqvFLGkrzsbnYo3sj3n5yp3yWM9rnNcB",
  "key23": "iUZ1jdo1DY8FnafxK8ygZg7LsRQiSLDyqARUZecbLCq3yV3HMwYeTEd1yQZ9gw4KJ6z3nze9rQFGQH3mcdSYRWh",
  "key24": "3WCFxJ1htocFtAAHT5xAgDZ7vBUZkrfrDjEurkWeQxJnjPkuEfgkTBAjCYHPWw46bMPDTeAF6192jvv7YAPoBFgY",
  "key25": "2iLVud8EE9EirFpmW3CxeYS8Kk4ZJejVkfSKTkxzQt6pwQURDe6EVUTTGNVD7x48AMbE48J2WPWt9q1rvvFWrrtP",
  "key26": "sgZjdos3XfX2wY6PgqCXyrVrHL5aV4Aph6AsEWgavHJM51Tcd11wconKVyzJ1MQqtnQCz7zVPvL4mrKxV3F1DBG",
  "key27": "5fzEfJHtEQzYt9VLE7399trdQmVbp4AojNygwJnBBi52Z2y6FRZBHH5YCqXPDzmxjpZFjP1ZmaEDc9fyVMsoUFJm",
  "key28": "3iTVksfGY3qrsZeAwPdq6nLjsrKcU4de2KjeWo7KCmYq2fSEJmPavNn3HMhcK41Npy6kJ6YsjGaYmjQuPRnWjRFS",
  "key29": "66zFjhafok3Yxx7JHAw4tXkitrVUiNbb2Lo1zM3Rnh3sMUky1BRtQAHT3JfYyY2zSsYRgpD2yRLe1zGZvCsy2pzw",
  "key30": "5jXAuK3D17KiFY4x4uem4eK1eTKpLbsbKf8BsxpZFYfh9p21BFx7Rq74RUrPkogT9huCFXwy3kSRZ7XHfEspkcuV",
  "key31": "2S7R6jTwwWMF4TqLeJsXRq8Pk5Wp8iNQsxAhzMUMkKox9kAgwUajhjqcquhAieEJRVnYf6SnoYpswhkQGWCxUMA2"
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
