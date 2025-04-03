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
    "2Ps2T6bF4vPxF7fYi5PqRKADiwsePpnVB8N2DjZmB1wzX1sZbjXxY6HQuYFMAs2TD9PBNyMMqqoVodLoz7zqGRF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7FTDxzWsaYouXSXASCHh43bjaTUyDmdMQFGVt5mkqPBV6wWHfL94YeSkb9nkZs5sGVnJVSGwC4pXM42YJrYh9UW",
  "key1": "2HUn3CQGZht37ZSjydnqs3Bj8Lx7sVygHbVAtTSUJcbJ5h1v1NfryZC9B4wUMn1NPRCXLCSoJM1aJoVS9nraSszd",
  "key2": "3ufMEwAf9MTNvVsZyAYUKLQbFvnGzxgkep1W1JL1Ukjb5TQ6tWQZPao4Zavfcqvs2DV57RvyZxX7Qiq1YYW57HoX",
  "key3": "2emEmivUZbfnbMbZ2ci9e52BaBy9vqdpcprPKmU6ceMKrfvxkGcSiWj6gVAeoS9aeCCdT5L1vLjWj659hPwgyPth",
  "key4": "55nardKGnQcrALsGXF7w2b8L8YF3kQVy2zdrLfvx1jMmb58xN6KUKQthVzAk9voSqyL2MojR6D1pK6GFUXcdbGkZ",
  "key5": "3hbrFFVMNBA8qvfJHDpDQk5fMhPJEua5QKY21fx2B2Mk6jpEFzidBFUXhofRPwsvuUppHvS3NcvoNjkRYNUEVY6X",
  "key6": "3S8jjn7w5RqaHKh1eHteMsqNLrYDSUUqmBd65ebpx81diBxaYqvKBkNgYKVKxJUauv3Quy3EeQPRcSYPsGjTHPHw",
  "key7": "3btTKwnCcTzL7H8es4b7CCb7pT4mcyKqRnRYnhgAEMtbtfSeSnprYKE7fNdmqwjfgGhK2fn8fvri9EwuqBxgQ4Fc",
  "key8": "2d29yrGUDme36PdxQaAmySLhaW7PLyHfn8iXeRQqV8PKTmt1DotL6GXFKEi3155YHnSgKJR78TgSJH1KKWrq6wZf",
  "key9": "4EtyjSSWuv9ckCip6u4Cw8Dp5x6DiBM8m1daZQVk5cJkYBZNDU1HrVoFka8HXaxfszvpnM3ZJKwfB69bBv5xbHhr",
  "key10": "5mWpFMsARsP1BytJbeERxVoUwDtjaRq7ik7EQS5uJsbnWqbvwHXv3XRgQsjEMaCbBzv1sM4jFv94GxRKu4TnSy53",
  "key11": "2CeMFgf3iJQ7GprSdaix9W9nRkxmFdTPaCywVzUvzDYKuBV4ynmmegjExsydo1bSMQPzEs2QkNYZV5K9e1CJT21a",
  "key12": "3zzkA28uZmC3NHnyDqUm9dUAWzciQmse9BEqgrxJyto4msXaAivWfCYaFhNaNgkUbdoH9UzXC2tXe8BGvKXEEfUh",
  "key13": "2E279g3sqhehD8Bzi8UQkYzstRXnF6jAAxtjK7R7kWMdBzVxUSa7sa2cCrRqC5zsjDQ97WwFktZUtDCVrZdyKN5",
  "key14": "3HyC9SxfpRw2GFqg7sh5eH2taVyvDJNUZd3xPsYM6pmuJa4CdEYzHSStcoLcwZ9fdHG1ChooL5eR2a8YFpm5qXo2",
  "key15": "3SPvTx6moMXhz9myJAgChPjnxF7a5RKb1TE9731GaU3XKDq3gWvqCabaFvAaR26Lvdte8UF8RTbD9jGtaEa3YTGY",
  "key16": "3AvVEgnr4C5UHgCHRtkxMakFzru6cuNXyhSaX2RJbXBTzBKw3apxRBDyciTZDrRvJg8BHMLwskh5gboSAqKibZTL",
  "key17": "5CWDNeWxRJte6BFqm1XaFJcHsUXCNwzu8c2ZDkRX6czYvYPqbQ6rC3zD9xjM44AeptAzGKhN1obNZFFRid24Mwz6",
  "key18": "4SjUpMJvecq3zDgkUxY1C3YwnYSbsWjCQU3dpAYNsM7sT6dmy97j9bWcvm1XDYBZc1FondCfLGjrrStZ52TgsuBL",
  "key19": "4sCF4qjDHA3LHwuamgr7MN2gXT5ATwUnJGYgUQYxcq9Hy7xDrKQ4onefo5nBtEyMwD9SiNtf8YznLD72nLLJ7mQv",
  "key20": "5sPPZvApFY27znCPCDxFyF1UWFbQLsQW2AQ4SJZPstpAHgBj5ogBhym6cRbw9PGFD5HTqrLggbqJguFuGhRpP6Nz",
  "key21": "TtTWBVLQvsdwdjL1b1UPgNhuYKh2kDcaWJLxPJ4ZMBPPmN3CY6DK3o2iUuks5TozhytXA6BXvcmXYiWgam5grSi",
  "key22": "wHcAeaNDkCJfpjpyxkHqBGgU551x8TVYRoqXku4xrPX7D25D6iWiemWKeCUuemqrWQj4imf2Zs4xC9fic455PD2",
  "key23": "3t7d22qSaAzXP5D36EPhoJ1bqCj1Li7a8EVkDDpBYovMg8n8e3GADGDEasSdYd83UNny65V5HFoi3UbFTo8BoFLK",
  "key24": "3R9dHKrEnsotN6YpWWkVSnBBLurBTg7zcrqhJuJPr5wURBoMcb3drvd5P6KiAqnXvfqML7sUjyU3xDSkLX88iryu",
  "key25": "3rwSZgCUZhEqiaxYhU2pF5DyvSKdN8Qc4A8Ek9uXbcyc98M3tx6WvSKG3ddrwGT56ceDtjnJJEeVUBUkqKojUYMD"
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
