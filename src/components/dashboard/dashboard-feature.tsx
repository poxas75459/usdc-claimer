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
    "5PpiRnmQrMwDwYb7ZDeM8FQABofA56NS1dCPBdxPV8tqaTGbaPZrkxGLJAHDVo5MGMK367Z94scLsMQLuChbExhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8YC4yDuQrFY7hTYccca7kcEEyMe6ip3cBq2oUdwwd6mnJtMAWytUK7D8hVruB8h8g1DgmNgG1CfWv1CmX15EYy",
  "key1": "5oVw8xuY9n5XaC9yJNLgvdhCuKMYtuFTWouAkgdrcmj8AyC3mf23K4QL1MPdZSFRVSbJg2iLqNc6BZgrR3Wbp6Hi",
  "key2": "PGptt1xXycAx79H1hWihhP1Fp9sXZFG4Hhs2uMkUJ5tWeKZx9G12atHj9Wo8pxdsBtixedQdZHzTWe1aAWvRTuc",
  "key3": "5R9UkVR4mD4ZNkeaVd6HoWKfWTJAWxHsQM4y4LHCJoEC15ZmR6X9rasR1rA1WnT5zxZfY6g19wKGPVLoMgbJjrqe",
  "key4": "4SUqRdLuRzVbZye38W1E79CMMmDHvUQVjNUaeUBeBwqLzEbJpovqAFQZrudzQRP1GKQo4PtWMJKmGC8zdDhNtQes",
  "key5": "3BNgVZjySz9AZP8ZXqc32jq3KwULNWEQtaoPkKZtWhsBX2Ehbcmcz5bkHYCU8wpABcYpBbwXK2rKQVDRuRNdWBCz",
  "key6": "342z4i3iocx7bHyTVJdexaRwTT1sqM2q2mJWEAJAdfyrenge6SWwJrSoGFSbvRztR9hBEfc7tv43hSdcmg6sMJm9",
  "key7": "38v9ajTpDw7wdTqFQj4zbxvnjbhipDsQYKig4b8ZgoVQZZfubPc8T9gigYiZnm8g1EzMYtX1ucNXSb2AvgNyNYrm",
  "key8": "411ExVjZb7FvFog7X6MCr4tWYpHAfyAyk3rKmhV1pL85yWtZ17acoTXj6yWZ1qtPyseGyAzPRdVmP9mxhc1QoJt2",
  "key9": "FesRRvimeu6uuM1YYWPNGPcD8hkDXmAitv137FkzXFovui8WAcpWEmWpgyGZQsJKeCnvbsJmiqEQY33vPHAmmt6",
  "key10": "3zgXgdk7Bh7nPuni5WgNfyBkQWaomQRdp69jQvnd1XkwQ7aodVALdsPacDrSCmFNKHWeE9YSLuEnDj5hPSCTpLUf",
  "key11": "44oVDe4qwdVWcWzX86KiqoxV5pufALAHom3JEqVRMppLcjWUJwrtPmfq9AVsNdH1yoPuCnyouKjyFow6gWF7L8Xk",
  "key12": "4GtLpFHuJ6QDaa4J89UbpzCVShnc4M9X6YjPTgxCuzWmxMssXQA31axPMJiS5pMAhKBnd1c8yMMsZ9HZfb923szT",
  "key13": "2izmkAHu6MmwYh928pLpykr1VgkAgJkhFCEvDxW8hcDBL1HhkrzRaf7wrDT4UGaTRK5ZXDNMYZ4qF1VvYahP7bVn",
  "key14": "29zafBVzP1G6eZ1A3XJHjotzSz51tQ1nC3bFP2EcL7eizXJw1RKhgrovim9r6nonR2uxP5sNdvTWUZ6U91LizHwv",
  "key15": "ajMDEpciDdgA3D3NnYkr5qRey9CiUhfgywrVnkmgT6h9nGaRCxVdY9q1vNJ5JTyRKkafP9aAtWe3QYThb5qeHiS",
  "key16": "582LXZgP9iWy5UQQXyjFCKfYzxNPfXz67xqhpMpWRHP3nXaQSSRpGvfNvG7rMZNkhepHvdPoZZSVRGE9gdFMxogF",
  "key17": "4qVGKn28DgoDFYtuXQBtG11Lh2CVS3Lg6nvnxTnfn9srDx1UmarWsjLuHMxbR9qfzztu5ssea2t6EVxWpnNwjGUe",
  "key18": "QuG9ppsfDgmaQwgiVQsmsS5kzStEpdGKPJHjMJk4KLU89gaaqhjAjbZLYFUeBZ7GM2cr7UGV1qGeLPwv5nNLiXB",
  "key19": "43iKKMGBzxFFoXk7uDFE1Y4VM8mYLs8wPJGZMdY7bt4brXnd6nXZCEirBA1DJTkiH6HmXN89b8G8D5msnVVzhWTp",
  "key20": "5QXr3VUYiLgH81RRBfWouRHS1vj1WeAxzfB7U6MqFnqYudmdKvjt4xfbXS6EpciPfSc5xHm3W3k2tv82DwoQHhcp",
  "key21": "hehD4ya7AdFhHShyUqEEBHLXVW7T6dQ2WqVqJY5HPbnVcGX8uFfyUYZ1DSjCc4uDfT6zCMeXH1apUoeZSWq7Xth",
  "key22": "65FpJEnmnZdDzPaU4CavnPKJAUkE5ZKNyiEZTJUGUbXtqUgHRAAV3Q2asgmNDdedgN14xtsKjbx71gVjkDJH8S8x",
  "key23": "2uaispMAVhATpv7kqKjMKKenPS7dBJ7AqvJ72XnKFVVNL1q58GHotNz1ch6yuQA6rh6mS7kVJoaz12XTsVfR1TfR",
  "key24": "28oR2wW5mHXESiUFX3BU18ciRubiVfZN912XREuJdAVw19fYS68C7e9UPT9XNGAojh1JRQVdUoUZkHS7sT8u9nBP",
  "key25": "6e5cKp9Q9jSnb3wGSJYPATUGiLXg5cFhzPSNBpzveDkXrGgqEW9zSifXzNNgYhVPV1VcnyNY9EKqu1hVohS26Eu",
  "key26": "5LpUf56pkGTgRZK7Pv7VqAabCukwokqJzeibENY4gSzRvz7cAyLhFnuQ3yQZB6rQbYmyoxGCpY1sa47FnQxFXVvn",
  "key27": "2NgfFF83G2hXUSUnhyuKMKPfRRojmHwEspLWh89XmTLKWfpYRopCrNP7xgpi4wByYgsWvhyoZQyhk9FRviXTB4kp",
  "key28": "4ZAB3KykYmm2ajABH2zvrcvePeAF6QgkZPNJT8s9e3jRTtbcfbVmd83snuJ2RipxUAdJ1jLB78cuY8Kt2rpCfMvP",
  "key29": "BC5z2EraDEsCRV4mSWD1CN4vzSgAkPYYgPftbk6CCEA2BNkBbWdz4hRRrdqW2bEhLxtSzg4gRK93mjkJdwA9ngX",
  "key30": "64zGDFzeiXHCNQaTo3EoEQcQsqCqVazAjNddRoYeBTxYWMjrBuzxVPUDbgr3txtnjwX3GeLtvLWnjLJGFcxvcA5M",
  "key31": "3nvPkwKViLwUigPW3xvtqLWrtbWYbsqLkTgvwz893Lkh1EFhTRbPY4F8XAF5QSLsQyYePJ68BryALyXvwtUJyPvj",
  "key32": "3epNYMChWm7bP7WbikozkwqDj13Fin7S7vqZDsnNz55247m8J5nVWTMymoBih23KGXVMa9Ug4K6FjkjaAmYY56LA",
  "key33": "3uLHUZgFeAJ5cULMVdhJQ9XCdHVYQDdNG6c6LFB97e23MhcPqpsTPnbcdGurLovk2SLYfFoYobAA8jRWshVMuTh9"
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
