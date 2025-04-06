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
    "2F3ghZZn76HpQxo4nDc96xuavnS1RZjD7VX5KynyLe5sgBcBJUqUzjWymkCNs2gwqn5DerTdrZ5CJLDvcn2FgTq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kYPeNbMAmMsTWbWtHKZNnokg3z8Q6LD6XoC8fysB2DfncWTD3Y45rZUCQNmFbB5jdwXJ3yAdAuQmYTh4cEaaFMS",
  "key1": "2oaSnqjDx8Uodn7LGgxSx5rRtWK4GPJE4Tm9qYu5B4kgjVnpBoV4xGVpaRGx2evcczFNM4bGyW9iY6CmH9zZeqKU",
  "key2": "63Y6YpVdJKV1QuadE5rcgerq3YPyfu8QuqLoNv8ukPMUp8PJ5uQAyq29ASyzFmdWz8Lmx6USrT5ayBdsCQKYE3ah",
  "key3": "3z6fARVJHmiqv8NNAtqYhrP25PDjgLKMq7LaEtR48FRRkRFXYqWm955urD2hi4KbnFpU3vsJSo3PcPR4bhtD5tZc",
  "key4": "3jrFq75Jcx19bXv1fLLQJMbftietn1oatfWcUfedumJWdqJD2G28Mup16PPb4VfvQbsu1QJF7H4YWgcNM9DPuhNH",
  "key5": "5tEejxJDAzm8ZKxB6Yho7EuRHM7NjMQvCnUGorRo3bivsmHfVM8QJ8yT3t4YkpLWjPvddRnWm18HKXRNk9agF3jq",
  "key6": "4ks6jvTqQhbwHE6BSUtFKV4s6nHoEsqNXkqwoknDMkYNocpm5zKHShtx78gHDUSd4c91pJM6QhmfhbxXcaGPyK5j",
  "key7": "23ffyBP4SouSgznigdwxVNYUwDUr4RhusQpqFW1a9n8xKS4sQ1nxgMRjei4GrAm8CAKcT7QVUGhTxwuBh7yqDV3B",
  "key8": "5QDgz6zydQeMExxw715VM8qAiZUJFMn8tR5PREeceR7YkbwkiYxQnjdioJxGMiHscMP5287hjnZyGqTyURdvuJpL",
  "key9": "3HybcxiQ9R2d2pMZsrTZVagg8BDE9yJm2jyy46p9hhNnCLF2ywvyGxPxQYYVBG43eDYFGhivBfWtC5Ceaq9z2zGL",
  "key10": "65sryUfUNGwk91JFPJeaTRXpnMarPz1jRRgkMBpaBCi23LVgJDneBxZJpgjmtDWKazC2GkKGfpnfvQtMPpd1bUw9",
  "key11": "5XRJwgeP873zAb1sXsqUJ2kAthjZWErjZiwNV6jJMjhceACVsPw2V3rPgvMs5vWUUpdRXNcyqwUCXdZHBguFzGhe",
  "key12": "4D5rdmeFvb8PQP3fxY9WEGygNdFtDA2XE7jVamBCPFMqMte7nZqxRL5PfSPBmBWPAqTUEATiMFYrPxCTvJCL7qPY",
  "key13": "9jFPAQx9EYYqf7ftAYN8eykoJMP6BRKARoiCDTzgnoXURp8qYqowDZTHKKSjYNZxRfimTuM93VoDFf1LxMVN64X",
  "key14": "2BpQZ8633k3vZSZvBbf6DsDUWzjLnzGne53byyh7dHyStJU19dE7cGgSqW56ijm5LWN6sQrnrFUBC32Tz4SacZ2Y",
  "key15": "3ZBAGSxyNpWhga5EkiFL3dB2UCigVAiu9mXCWXrb3fUVUagS2NCHkfa9K7mUSmpKGRYSbTwJYoRaSPR2PEPjsaBg",
  "key16": "3jPHTXCnZgHeTfnHygDRVdE1mKhvvHNR1b1vFxnQkkZcq8skrga6iNkfaToLQ878EPUCVu2wwMHPxVbgPW5iVEX7",
  "key17": "4HNbyqSRRn8uLB24TzAC6NuWhe2EzNbtQQQM3Gt9s3xiALhWTnER6PagPi8kQ6PnoPxkAiL9e6sr3SNZMkdcJXmm",
  "key18": "54SHvqEDRjyQyEoctmWMcStaY7ACuVYMsjhwUvLNbYbAz8bqyy69fR1ycA5iJPxVXwURrefBwLy28FMfWhxZkoW6",
  "key19": "3LvX1iCzyWVfayCM78TSJSifENqd7cz3qqfk4rVbUTRDaTzwiiEoN66Tkni2jyukgu7uqDzkrBgTxdpo9s5QkwzB",
  "key20": "4XzxpR4D7eT3NvJjU4vr2P4YkjGJEGXs1hAghFTCixN9vGSPpo2W5beC3rwEqXnYPwoLvnKpbr3kT78edQNYg1oy",
  "key21": "2aGazjAAVrfajH7pVaAHW1Anz1EcQ6eSrhk4atc4jMppnUThoq4jDMyBRVwSmtFKgR2jHM2h9XGKvh3pJeQmfiAt",
  "key22": "5Tcatiy5qAcL9Uov4UZVk91BLCNx4a7g7Uqz2fecUsZh8VVEq6SrRQ2k5bH4N8Fb9Equ5C81SbZyhgzH1JULSNkq",
  "key23": "5ubvMyHxYhZ1hEkikmwmcZD1BDkbU5Zc5SiXhrVNASJtrf66sg9jL1LiYRfAm8qtsnAWMemyBN7DyqxJJYw9KZCa",
  "key24": "ZHu2Hz6JZPF9fzuRQHEMryqGdWA1LqaWWiVKAnM5MurjEtAA1ddAb4npWXnhyBRm9wCgJ23qTx8PYrbdeFJFizk",
  "key25": "5uP5mTrchaYd1twRroN87LLuEWCHW5b1i7STDXBa75vBbY2BsAFg2yd95eLwUkH9dRDBHqhhBypan5r4qr4m23KR",
  "key26": "2iqtYsR9Y4f8fwCxEiYCy3B9ZSKxYzq2bQe6pYXR94c3D2VYZVci4h63WY9xb9k4VPEySjBduxu8emgS6vXFhsQZ",
  "key27": "4XDn4QghfJmMrr1Ndq89PeSZqFymdhSi139ZiQvCu3CKtftnocv56Lz4yWxcghg3F2vjmjviQUtgueJmRCBDWfhm",
  "key28": "3frkERx5JT5J8fZBwUMdsXNBvvcvhLfRDh7QidJcs7oo63aRwnSFkgpmE1LLWqBdZJxwzb7jqF42mix9FpwgoMVz",
  "key29": "EHEm7ifEvdM5noU6U15zFCVzdPDmKV3NyY4oZNKNYgzgKDwm6Fy8XrhnxFPL8U2mGxZfNcffSY1BDzfSfqopB6P",
  "key30": "2knHAtumEFfU9PAhkXP2Z5bJqP9nMLxLKhPD7F6eT58Nmhytym7nRXu65Yj5uJti5P1h1xRHxTdPWi39ciuPqD7V",
  "key31": "31Dt5tRuygPgGUi2W9D5biXHdTbM2FZ6tvcvw74pTgfCeQySo6mCB9ozPhzVArPF7nmBKk6cWETT7xDUKeQfv4KT",
  "key32": "5KtfABX492Qr8jQ88kvfJW4Vs7m3JHzCEUFfMuqzCKYD8AH2kKNUD3kRFRSUxDaJTx3L1t3s18SdvzGtBTUzW3nt",
  "key33": "5J4VcMhgua9Bu6vui2i6Zh9N2gbL2frCuZui9rurqix8XRHg6JD7JhEsv5qBUopxo2XUE8i8w6Ekckou1fBBgtEE",
  "key34": "5V9Knq5FPKttEFX5wsz6HYNZqNjV2S5WmcfcsGP4eHcybaDGQa12DuLxanEsz6mBFTp5jMVNZeo6fLvrdDzvJsiD",
  "key35": "4utm8VGigLSvWBu7D1sDiZe632eC837KHDTaYNvjG9Thu3NEQaN4NGwk5SZfJj374DTYbUo76bDANiJyRTr3mStV",
  "key36": "2KMLN9JqNM8nKLhU6QR3Mk9M7fGPVQayyYVFbTnHtPLgL3ZwUrbW1BEhmgZDS81E1iSby7R46QKJfA8L4yg5CZwV",
  "key37": "5gaSeYZvZm8NQYxHWMS5Zxefg1fBudVmuiQz3N19xVtHuY9X76EkPYs1XmDtPkFjEFTVBsd6VJA2S8td7Fd3ofSn"
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
