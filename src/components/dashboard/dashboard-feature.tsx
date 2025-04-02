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
    "5iH1wr2XejiVbNpsS7JAeTqWYQABqL2jozjLpYK742Mychr1nrGaMw7fE63aZGgCmSYgoaLum6PB28bFwXzeCqsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qb22msKuD8WSjMB3gaph73KpaY1zKsLggtG7ajJBP5Q5VeL1sHLMe4Eog1kUAExjsv1aCxHg4K9sXff3h7GJCiZ",
  "key1": "Gfnju2vqFg5eA5H3sSe5WmYyJV8kcMQa7kAxgkhwKCj7kkFhwuZzw9uH2aqxzKzUL1yZJK8WraQbwtKJ9Qd4cYT",
  "key2": "9mSZxArYZboV8grP8UJx13bEaoBjCdQqu9r7vCsMQoCjxPrMKyg7Mct8svhLm57k3oqwECoRtw9YS5GA4Rc2nrs",
  "key3": "4DaFcm3uX7A7QqqgebFx4PmgVPvGeSzQxQHUomCHUwsFZvfq6bfQ29TUh6R9Vpp5koQphWKmqYHh8RfmWE1AqPyB",
  "key4": "zGYfGNL4mQqmdhcAVXJk58CqL1WWXpcoYcctn1dkhPS1rYHa8yvYngKCXsjZQdHkbfP94kdiW6u4uqDP35PQcUQ",
  "key5": "2zVC81421eLbTzyULNapKU9Yg7aDAaedbU9hu8Y1ajUmb3PHJ19nobmoszoj35fMkVSPTpD7nav92KMvPUHaygbm",
  "key6": "5tVmvn2FctjSRk4smH28V5XhoEYkEMt2sFoVJcSheqUCbP5VzyEdEY9wyf88oHUZLH9eN5bUU8XnLBAEd81vgyz3",
  "key7": "5mWXRHCAYVhgM9G69Cu3ZxEUK7TPdVR8DUkLnSQHizy5kvwxp4VEWunDebNH1RBnkJdFFxWnYV6GxJZMcEKdJwyS",
  "key8": "2VHVcVE3vN2vwizsA62WE364ETQQ6N6d8rNwU7kxtokrBcmDu8ofCbkhxRR8i5cZtyJxz4qnqKoU4HP9U9D1TmUq",
  "key9": "5xcqertmUSUZPo721w8btdVwrzCvbEqLDAY4EKcEn12uN2WKvZ7sroBHCa4xBZzADqSWiLW5BDTw7Edg4vQJDwLc",
  "key10": "34fNcbv7Lo3pz8hZWVrW8UPtgQCd11AAYhxnU2Nz9Se6rWArnpvajAUqA7GbNReK3R6ihh737CqqgMqzFDJaaLMZ",
  "key11": "3mAxoU2KBr2AgSA6Auujwg44e2QPcjvBZLRQ31AeuPCdfBNfpzDUymw2X6zuMJXTnwgys6c4nf8nUtpbALpCGPst",
  "key12": "4EPevhgM2px7qzHUsxSQVXgB8kXep5pHkAovcLokm9aAQ3owM8zJ4JQv2H2QXcQR6dQUy4tkDM4R2fBYHiGMWtfP",
  "key13": "kEqC3PGyat8g1a1RTL51DJnWbLfVEsm34jTrMxjxhsfdtDCSWrM9iohcJfhqQ6n2o1UeZbbk69CNfFsXLNhuJSY",
  "key14": "4boae5nkVTJez1cfdJBEFjDTrRTnk9GdXrvb7Ymo9MG74J2QjGfHTfYcme7AXSYJM1yVGuVvTHfmEY9gH8NSH89H",
  "key15": "32iKrt5Gh21iqLokNVck5cJLfR26SKHueHUTrmBaJVW36y3GhNktf2bKM4cJWF4jmo4VjkjitFC7AiSLk8axWT5J",
  "key16": "4VkiGSCoojXD9mSefmj6R9SBg5BL8D6vCSu9W3yWruP8ipEKVKbj1wVoSw71Yok9viGWDJiNZedYdT1F97ZW1MjV",
  "key17": "EujyNGTTUDVw7GcavuL5fZDyPdiX2EU7QLczzj8QxoKAAht7Upttsy8jMWsPuzbnDuchSwUFF46V3iBKCVtwZUW",
  "key18": "NANjboTK74hfKeye13uGRPTsyd3f4JGHzFAzaJHPLvpM2GC1jAX6ZoVwuWp5foaX9z8ysq79NJUGghscWx8Jwag",
  "key19": "4Ek7pHvSrEJd9GJaebG5Uj8Zh3jM1AhQi6LPzF8rWgLZsaLXHDgEUw2qaXj2NqW5PHiWYNNcmBXYZ2PtKLSJtSjV",
  "key20": "2GA379bmdkh5Fp48FpjsXLUFgJuW4TQyinJQTKzxYExoxNegFoxtk3EogY8y9fMwyD477EFL5GjiL72an7HHK74g",
  "key21": "2awArsYm96BV8CcbNSqqYKJ9Rdvhjp8aKKQHWEfb1AkMm1UEXc1BYUBM4fHt9tRpWv5PRxXZX3zerWCQCEJb6qUL",
  "key22": "vKQpkYV2kdpe2sHdAaf8ZUD2s4bYPBjB6NAPXRrAiUKqqcXSYZU3jhiJyQHVWTadF6tQb8jsbc38NZHBRwRkWd6",
  "key23": "2WNL5Fgqs6y7WxSAJyGhXhm9DV9AFkNkSf33odFs5YvM5h7w1T2X9R73QQ6BzH24A6HnbZUHtiQWjXECCESnKv1c",
  "key24": "3LGjpqagyQ7LzgevayLBUkVtJEQTgqgvRN71xWvGvBeM3JHFzuCpRG32ftjhgx3zJLCUH7C9cCqEj7F9aeadTCBN"
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
