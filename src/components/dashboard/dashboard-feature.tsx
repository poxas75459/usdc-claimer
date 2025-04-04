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
    "3WQL2VNe7QSrufmaX11iD8y8TpA8uFuFz7ipHhzg2iHrNXSvtyDQn3UXiYgdt9PFf87NJQMHAcWrsr6KTwXrb8ah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ar4AHwjsTyWiCNmbRSTEvWitTK2Y4tAvHaEqCR9ZMDYGCxRMqSgD4VMLGn7NfL96qM1eZEP2w7ExU6AVhqhpWSk",
  "key1": "LCrSgUF1R7nK9Pd8pAPdfJ6YoHbU5KLcm7yXJp8cSuAGrmLe3putW5tvx23VyVKQDEryuZomigZuzvaDmvvPfeE",
  "key2": "4YUivSKout7Kpk1o1tbQwq3whLLgrAhviWBPXdLudokGZQoUDL6Evukz7sdDzbZ5dtHnYrcRJWjTzoBPrGQDr2bN",
  "key3": "2VuSe7K1EbrdPZZveHzbi3HF8wpzjSuQCeZABhoNz4oHkjWPJQViYyvCWKnN56iLgbspLQ6tZQ8KEqwzQok2jrYG",
  "key4": "3cxPw4ihhKZPJiMBHH4puhobq66rW1v5vH4SPirEzyVovHXaW5Q2RCNBwnudCUXNPABduquMmWcJNXLZSBS5kJdu",
  "key5": "4XB6wKTDGqVXb2qMHznYaacwAaFG1R6y8Rn7WfsZPFoDEC3Txr1AsEoyuZ2ZwHNE6Z3XUh1oaPH7fp9wPRz4Tq89",
  "key6": "3Z3JxFSSwoZH2NmqYCbshZDk5Q49mAa4fDbBRZ2uL36LKtM6BWWBA9u3gEs4EcrN6yG3MuNJU9u9uJZhivdXDB25",
  "key7": "547nzagwh2RkRnRZxj1Yergf8kse4uWJTWwTf3H7wcsfLQneKetazzBpkJJEtTjze4ePknogY9S6nmPaHSCfMa4U",
  "key8": "2gQ6sYUXzUQzH63VtHL7tWtJh2yuY2dSn4aahYCB8neufJz3Jv19GpmDrKWo7ErpsRMrEPTbiLBRiZGx9reaXp9s",
  "key9": "4GSuHKCTmXxSduCfA5DgRuboVPdnWWWm9xfDPQfgzUJTtq8W7WeSdCAN1KU5dKvX43f81tgiwojw2HfE74LfLaom",
  "key10": "2aeipcy22Nd7uVe58TkRWumFt3VPNSyHxVUHycJP3sXKw2yXkVTtifk5RyVJWpKJKU16awkdQvM9GzvAypbUNVmZ",
  "key11": "5t6zPSLqUM7rErc12GVy2LMW36gPTSwzqDatU6qqhcLzsoBH6yzDJGJHYbViPd7X3aMCKp22uEja1oYLViUXcVrM",
  "key12": "67BzAdzqZZSTjmkrr18bYokPfJtsyT9nhCdJoWU2yxgF3Jz9V5rm6ZbSN1WxH5T73wffZziBdZAL8WbLNLatkrC",
  "key13": "5UMULGN2inBdrD3pRZWU3qxe2YPGAA4bLJEW8gdDNyV4HQCQZKuCVfY6yXfka9jTc3kTQTvZxG6uqMWb9a6gEMaa",
  "key14": "4S855EEqNWM4ht6iCF3af2vxNWiLojokPdC5EWB27xTT52L6NxVjN3XVygD9SUGXQeMSov3azT9uhimYobGpPo85",
  "key15": "4yhkLBrfVb9SqYPtegCo8M8L9ShMpnNKeD5UMBVHEsjbC7XzohwJAmc6Xd8mRg4piVJRRd7phuYDGzkZb9K2dP9e",
  "key16": "5Si9RdredenzUJFgwNHQUWmUJBAxKBD4PuPtKaMgXPm9ktsR7AdJEyu84jzDsMMnxDVuRTeeEJyX62AFdoHbAyEF",
  "key17": "5KQ46ZrQZREqevreGgqQotMFWHJYT87biHZFYvfxmdpfQCoWMLw13PsaLNFKUeDgn5qhYVeUigagJmgtt9hZS8fw",
  "key18": "4Z5oT6zKrP5eTV2yLJcrtA7StWviiCGAvjUfJjvCSWmQaAACk7K7TNKmXrUXjgAExt4mYM642RbTmPxmJDTMQLWW",
  "key19": "2Ehe4x5RrGqwX18qmDSgZHX6rHksNsc7fJA9rKAg6RvAGPXepmjDojMzweUNggu6X99gFww1YXVDk3QXNYzNLQh3",
  "key20": "2VKQQNVTJqKg5ysx4a1eewMv6kQJL1KTkyKf3J27C7LVDnt6RueSDXDJKrDeSX7iS9dQzs4aYm91Am5WgYuaBv49",
  "key21": "3Nup1fgSS1cufvaH4RR3ojsDsxSCjXUTSq3VkVjhiH7ydx4GzqsSiFNmzcLEmnanUWJRxGiJPeFmiycbmVcZ3EHZ",
  "key22": "gCP1JuxGsfJ8GaY53CRKey37DhemgoeCuBaLUcXqi8PKgXisaMiGnCztMBYg6bGxGt4CoHq17V7L4VRsqSTueDt",
  "key23": "3mXgodCp3rA1RAiZx6x9r6FqGYBnvgsuM5EB6j7RCZpzua7boCyVYiVtqzgM9a2MQXRciupiqZR9Xnp4gfvCpXYm",
  "key24": "5HywTRJzx4nSTZ2H3RfuCkotKD3xEZwMCpkvnyrtd46og1bMypX9yQrqVdZwyNs4ZrBZZ25UWHRj4ZaZUrnc1xwH",
  "key25": "2b2mGNTSNDeFMb8sWPoVvxxYn8H5WAVvrfv15KgTfbDGPe537XczZbtPwdcS8DayeuQ1pYCo2W9w3k5w7NiZgmbV",
  "key26": "5A1v4LydCVRjoBtsrR6SnunrZotLeWuKyVgndDmiwnpyoqHfo5moHdb62CnqoVsvvReSNaAbxnTnrhaJJ6uNS5Pi"
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
