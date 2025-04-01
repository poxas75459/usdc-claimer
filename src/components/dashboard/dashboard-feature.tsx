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
    "3SEx7MEofUiZx9mPRRdtffYHGuX5roeciV3mfiGZZ5YDxPvB4RtWsuZYGQvqbcWXzYEePDwYzkbVh4FPiudqryVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SPtZkfAbQfuHj6pkYQwGs8SbDW1Mb3qJ1oiDtMikzK1LzH5S4q7PwdjXv2Ci9TabV1J9kfCfY6BbPaURGJtN2DA",
  "key1": "4oNU3Wsxh74HL3nd3iYoLcHu1u8mrW3JY7wTXdYE1Q33jj5BqrU8opiUVizCpQF5u6zujFAkzkC9SSsm8hZyMCr8",
  "key2": "3MxBc9dArKVeXtbszZBkwE6T5gf8pnBTWSMy5Ecwmybb3vdWsV3K2mWFPgPkjPMfyg4dqBTTfjoZ4dnieZay5X3u",
  "key3": "31HAYugX2kQSKYDmLb2XEiEP5KiZPewFBRfMRJP91HcxtrbJhN9Z9bkvGzvHVuvLy5WyUFGgyquUrkjZDG2Q9AHS",
  "key4": "Ad6jFWdpztqPwa5LwMubZtmRZhmCyXMCjLPbMmxW8rP6qJ8ZgQmzDXMo8P5vxSGWH64oDUBxXegRHMQeDTjutEK",
  "key5": "3AYnzfcX8APNALiPRLBc48Q4ALUxTcf3819oacrMqnLGEp9B63oACzNjYXyjNX5YMtG3Z3VrxfxVh6aKKYYTWAqf",
  "key6": "vCM2kyBLmzFSCYgSLraPC777Zt6ZTCrujt83sbkz1sX7igdm8EhYNvA85VgMHiAAdHGiFfEGgpFanGs6iz121Pr",
  "key7": "2kGiKmAqrNH3hajQDqYwi6VxFpF9AXXKaqVbZUz27kYKbenAZijhBENWwYWJWjzMhqZd3XitDE7KrJrp64ULSGic",
  "key8": "2Ar5EhygDnpLrNWWfdkw1gUqN1ALkqKZ3B9PogbeqddtVAEfsvZ2EgpiLFZUXZj2hu56tWGy9twY3UJZevsR66Wx",
  "key9": "fuAqDme4k9bMsVYaTR4C6U2tq344V6bRcfZn2BqB6wA8JKL2qyoWEHjitAxpxEQiW9jDmrNdn8CVtZbmfrDktEJ",
  "key10": "9aRRymL3gVsQeqNgWy1dnH3zHfiVNAUTo67UPCFYUHF73m1McDiAaw3tEPx7fp461k6ajHix2izrb2MuBDNy92R",
  "key11": "Y1GhbNy46zQk7pPVoH4JE6vt1LQoCg5ggdxvN7JR31aHiDY3aBvGBdmq27ciy57dM6RDgk9T2ZXQyVQg1pZNLSd",
  "key12": "2RSEr2gkTF921Mz5R8myLt4vdQBguDmVAtSrBnrTJQwPDiGAgnZkGZFDeb63VanCFWDNRyan7YdyNB7NtfQX389P",
  "key13": "2WSx8ZiDaYTgFdHij6c1Ak17Lqrabxz7Z1nZRPNDGEoamiosUuhJNomEppHkHJzwmrxHTxqsL4zSm1G3AzHgGekU",
  "key14": "3F8C77ZTV6At4akiuWmTSo1797L5Quf8ctwqxiiaDyTJLfZusDaQaaFfG62mA834Ze7a4NMc7oJ8buUrLzKNyLQi",
  "key15": "5C3uirnNDPGVpBUkm1xUzbLJdxwTu5AnjBoYrxpGXkZEJAhQpofCF69TXyd61MfU7G7YUrRHDzjF1bF4Uwj6UEBo",
  "key16": "5j2SagpCTBYmk1U6HNCBTMrXYEvCHHG3uFcv6ncsTfojeepbhDSPYv8y1RiXgbTYXAxa4Xo8QsBRs4NXwWQetrK4",
  "key17": "QacUWgrjRw1wo6Z2B9nJ3otU1CAdZafnUBqe7TEp4YkVeinFYzPLa9jGtbnGeHsPapBwhPAhcbqHFvnw2L4EXts",
  "key18": "3WJo4BjkAur7AVDxqmyokYDN5AHq9ZeGkW69oLwzRixQ5z1LQmXMDMnZ9nxYHhsmwq9hMLDxdEPVszY5yMZHqCPy",
  "key19": "3pAERkSkpeLNt365sPHLJW7NEjH42qMKvpvE1q1fQjRUVSGFD5q83pNnbjyXDeEDmsAV3Fe8Gabto3m18iqC29zp",
  "key20": "5dVhUjNF37SwDZ9Fhkj3bu5Em2g7K5mbPyi3NT1UJfUJmKw6GAUDrsstCmEpSmX6FsXuuwzhPGUADRA4iiAcU3LY",
  "key21": "2czDfu8AqueWMCST3Utds6AYS9Q3zpF2Kb6H4yUpVdpYtUVEa6xSLHY3KgMizaon62BEM4VN9YJSshuswybnxDa",
  "key22": "3Qd4feEWtLmTdjQV5D2dLZ6BtQGetBYZB11qB7JSePSqTpC8XmxbUvKC8Z1ViEakUATSM6aocuxHT4DrU5crQNZ2",
  "key23": "4wHC6LKcqcUETixuRyM96RoLvRSy4s8rv85ZdQFD5r4YWyLUPq6fMGZuzdDWiXgpgoo1ypaGC6prh63YkpUdzVBM",
  "key24": "AhQWKr3fin5kMy9Vq9gds5HkWiQvL8ZPiSBHRVzkuFNxbYWFtKfY3gAYHwSudZyG9CS4GTWdaUv5w3aPuXEYZuB",
  "key25": "3J6VaMd8QFYVzTYntBUJrTyRG2xSL3xFXdkJsJNvAxMYQo8bjc1C8kqPk9ANygwMJ3D9oU5tup7CEUwzqHcJo235",
  "key26": "2UWjzPYBFWytJtWKg5ek4T9GynEwo4gFoaxd1bmQ5iVzeo9FVU999vXe4cDV18iEBiwyA7tXPdTwLvBbDT3vmTZP",
  "key27": "3p4bP9PDrZqJtPrS7RNKndukFijxgVTTbBQ2QbCjvkJeTXT7rP9BeHyM1LbS4sx5VuUAjEbNkdg5B42L6JwfJYkc",
  "key28": "3gxUoVEhn2mnAEz68HBa5rh71x5feNLjoCJTdAPL4pp1fxMmxg4uyBKw9pc2zkxE5Jk25GAeMRZR987dWFu2pE8V",
  "key29": "4XAoiDPf72awJe4p7TqU61bBguD1aSLb2vLUrCJceDUbFX6vPeXQ3BopxAkBYwnAFGxx29Hg83cbCcYcvHgSUz9T",
  "key30": "4xtpQ8FdS88EMAPKuJm4NFcUwarmJGAF4FwPyBnPDzrirEg7JuFYUpSfXMY9NtzWcm5qtaPZEt9bzrLCzaHwY6fM"
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
