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
    "4dwUiJZ89Mv1Pjbfov4s78JSVr8Wq7ZZithLhfCvWtkrcx4mvzqZbGfcJo13WFo3s9qxreTdRBW64GczTxXBQK7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vHK63WWcRtHo1pJnZZxrU63fspV7YaYGw9fei65f1ZrjHe3e45Lcnu2YUUcQGto2fjiarqYifW1V7joi1qP5ZM",
  "key1": "3vxs5ASeFww9kun3xKnL4ZaPhRJXEmeDK82kmYzeYiWx8hrhNPAYgQzvYyiGkERyHPHXeCtosCUZRYmgKA3FPfwU",
  "key2": "4TraJuEqJ7MVBaNrpy7Cd7gdqWPLGu75qVuSk78NixmSBXXnm7dsgsReY4TQZHRSSzPQprhWAcJDiieMD4NmmuJM",
  "key3": "5iXjCYD6w2s75vScrg3VBKXDESPkeBhDk7ZbRcTHCnVfd6u2EdnfKiCejV8jLgMw41NrdFbX4Ju8GAnPn4zg8Zam",
  "key4": "33J5WNuhnB7A95X1RTytCVUgbe2j5BPa6gBnjMFB2YA9p9bKS6itRwJyAqjV8KFVCG9bmcjnnDGko6g3D8i99yYs",
  "key5": "2VMfkRG4MiaYCfpKQHt7GQtLaE64HTvVtfpuwsh6fxdtLMDffUiYTq5JK8sYi3iZLjbNr9JwPYjy5b8LsfiUW8ZZ",
  "key6": "2BzFPbF9jBoCf8B9FuXc8DRDHL3aNJKjGaYFm21XcCV5s1xiV6fHRYTKYx3brq839UxxGxM4Et8JGXNxtb7AAAjQ",
  "key7": "5gMK99p1uGDCGNPtzRpr6yaygrNmCUQMDgSnZmgNw82BtVPrVCJNovh5utKHV5UY1FhbzBPWEwRSZQ1BLdm8cpEs",
  "key8": "gZ2MTFcL5DTYPKVHzvA6bk5C6S6tvbkr6QJrbbF4LUcrs1jAcdsEjcKk2RGAqEVjadBJCcRRfaamEnftP8s2R4S",
  "key9": "2AFsje3BiJmhEZ7BtWd55pWAm24b5DGjwsoXkVxLqBH5aDMYaTJxUs2Zn6NkzpWjfXTRhsV3PceX2VuVGBF2PjFQ",
  "key10": "3K8jqdcY8LHqadT7dXRmHC5y1LgMRcnN9Sptav5ccxGFmcH8JGZ5vjoPTpk8zyo6qDAUUtkM1DwKHFSosvxrKtMF",
  "key11": "3zXbZTStBcUKY4F5pqkgSoH1ZVfndcuB17u6wdbTbPM68gAcgDBLkr3vLKL2j3mcCWRLCX21SU2dkJs8pvhtkRXF",
  "key12": "2zTvFRQNZMVoh8GydgbJ3iwtrbJoX6aFoX5CxLSjMrthAsJu7m9CTUTe9W25vJk5PXJ2ggRjd4v3LENfczPzKRoL",
  "key13": "62t1zfUS38GCURnd1aMXq7Xad19yrDLiTj3pgNDFKTLALD83kC7ZX1w5Sf3RSBq3B2dWx63Jmkf8LyHR8xCCT32v",
  "key14": "3Sx5jtxu7saMvMhhVzd4ARF8hPEXpUS1AXoiYmrKBM1ZA5epJcQj61xth4dyxtiTHYt84gmVx48p8rDVqrzwituT",
  "key15": "33yFegPSFpYrR2hhRUtTMXaX2C8NSwSShLyc4KqAh5JJf5arLbrtTmtsZf1aDz4FTrktgFUhi5souKZLqXa4yXnw",
  "key16": "WQXUZ58JxjHVqJWgeLtXwzU2f6iGGMJYtyE3MhZg7cRCfnNsxn7ng773tTmxGqkSBKoWVTFcuoEandppexz1YBb",
  "key17": "2EbcJZzPr1UoEAMRsEcyw85yRtcHCgY3XqvrWWAhZ4H4ZsMLaoUMwfxuLRGNdCV1jF4xvxhYC9kW7PerFDSQtRh9",
  "key18": "5Zcsdav1Cg6WfWCuP475szbshLxgiP5WqJnDXD4SPLiNcK2dbHPfpeMQgH55MbWXL6WaQbfzfPvR7jdjZ8T4yqKb",
  "key19": "57HCNgSemPkh6y9S2khqaVBK8eijHEwiquNVbNq56ShwFygS4RUZkhuUK3J3n7Bdu3kn8Y6LdbjMqZpoCpN9ULFC",
  "key20": "s3fpSqvmAwCVvwJd1CrmQpAxho35agqFWgcWKCoAwDicuihhXBnT99wh73Y5ioKKku9Az3ny1FrW5zyYWtVhzNE",
  "key21": "rUrLPPx8NHUtzGmjWvNSt9d2xo4vFkoCL1HWumGAPxwxhjQxwApcXT4ZYajPgAe6c8qbvsewR4P3qG5YYiVmS9e",
  "key22": "12hxv18jjmGD2dVzyDBkovYHv7fmRmopPLhRBZjJKrK8jaXhh7brzV3AJCmedEY5e2vF7XJz195TytkhfMQkQ9f",
  "key23": "5fWMFU63XQKhnd1X6xvDXLEdpqmEwBE6RXAt7SWPeuBS2yrBwnFh97Zf3YPuWzoMSMkDEN6WSrGeW4mfa3Uk8LpX",
  "key24": "3wVTfrtahoChBxWunWt44VsRZLJjSuqotNFtr3t8tZx9dHBLnPJKaaqP6mAYdHrCJMiiirabErT9QMJQNJbvP46x",
  "key25": "3MG6zrMCekPF2fGD32xot4mdMZCdnoLUcv5u5UuTP9HKqysc84SNTmp6AKxe1mUq9Yjz8LwRmnRGBmVPug32Cn6X",
  "key26": "4jpfWNgignoLUqRdhJYMUNigU1ERygQYzSJMekpQMUv2dh1CX8yeDkwZyipqXVqcyynvMvpcKBpoCzCc9VudqwwA",
  "key27": "4fjMVFdjodf9VB79baLeSzyYVWYqWxAwmRyhUB8UAvTnmZDJ2dpSGArpawkfmUmm14deKHKgKJhkpcEot2CJrKF6",
  "key28": "3Qrwf9uQM3AXJDkv8zCFvqowbUQcipnPd1W7zekBh566ag9B5D8N3GsdtRS2q9necjiQNLeFhm5JXBPwBXboJbRM"
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
