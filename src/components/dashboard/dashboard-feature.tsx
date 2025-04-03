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
    "Yxh582ZqUa3SP8GmBhdfeM3bgMU3TzVJzWLknHNLymPUhsqzmHFw58CzZ7TyQ4fpHCqS71TQdBE6ZPshv3Qu3HM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c4SKze7BazxMCbUUeoJ9EBF5nrouuZvvzmXjXa1dPei4oAHGsajWP4nEhTfN4ZDUPekpQ5kmf9dHYUmF2Vjx27r",
  "key1": "4jBAn2FNdrjtPpzwPUoVePLWEMLzfT6EwLeCfoPvxACp8fGTNLeqgqMvc96e3gUkqxZ5Z3ZBvKe6EySxdofk5DWx",
  "key2": "mTtXMuGyKdz4R5knhQQA5gM4Hd4aL3bSXHijbFxXSWWReFaNgu8xGm1YFctcCb8dQA5uRrFqiiAYxtZQrw2aH62",
  "key3": "ZMP8SikV2Z6hvGvobwTHQANTpR4Q39MPBUooYvBMRskHGwcpxgVNJFzvReZ9BVTxP2Ae8Dm5E8MPr7B7Jbqnxje",
  "key4": "5D29taRtQP45A9Qto9aSLG5GFSunvQyoac9Vf2f77YaicTggqhDvkfWPFpfkNe44TRWj3AZxi9VDU9GXEFfr9hrg",
  "key5": "4fSUUjP5LR5CHtcYX6bi31b9FWZ7jmvKhc1Yt8EYQ154PoJ2op93H2H8ywZqa9zSFgF4DwSnnE9vvvzEGjW7nJ7L",
  "key6": "3fNo3MfE36qG1MajNu9Fhz9iUVQ8nrmuzVgxsXFHYzkt8qShwrcXZ6GYyXL8za279mQD3ZJKY1JMHyDGZCNRMHiD",
  "key7": "4UJ6AXqXVrARVw1NGwLGt9yPpioCWFjZNuK3HMPnhHRKsr7ZyfjidRPis4wUg1NXGzHXMT46VNPZaN5VY75HXk9m",
  "key8": "bguHEVdZGjMtt95j5xekbiCX3yXKpm2PuT1UXsjWYauUAqfairmqy47tyM1PG9A9ZSBS5sSwFE9hJLmdDYn2ct2",
  "key9": "25595sabWrv3pbi674N4c1FwRojwHTGDdV4pEDMcK3Dut3nzGpbLwimshsYwTmmxYDUXvpjpjnBftB2MESqxja3y",
  "key10": "4kSxqnnEbLJ6uYywF9CsqPpPuirseNKJSdMWFbEbpiMuqy4Ldfi2yxaCUB6u8ceTUABY6s6z2Y24tMnfErsHb9Lu",
  "key11": "3EL8ASvkPFHiVX4Ad3NpqNnCpd6ZQd8kXyeD3EhnWM1yyK2zREc9mWQjDVM14FaX5g1g6ftNLVnMwRPqmw6UNG8u",
  "key12": "2ggthBgRdfK4XFwLxYU8wxh1UU9rB1vRjVX79eWhHoE5sBzvVe2EonqbzyvEwvgeMCA33PWoZfoBXkCyk57ZkNxu",
  "key13": "4KEdazCrMFAnFE77hDMyp4YefK4VQ7HUGdoPVwgeFHZBhGyvd9ZKk6p3mEE9nGaQYbhxtaqefwnPwaaZtfQJdmNQ",
  "key14": "5GU4voBZeMzTxqV8345i8TLqYvymbeLHe4WNXrQJi3jvpq33mT4ujf6jBD44Rca8RsynEGGJQbedgyRn9TadN2VK",
  "key15": "mVd1i2sRhUqFJEhVMdq4hQ51GkzZZ1Gr7MUxw7EeF1yB1wBnYSVUQm1RP49W7i3c2ds1Tx68QcBicRJzE3Ps4bS",
  "key16": "pt38Wq5298bxkGTc6darpqQXNvmisdL1CxjZFGnXh4Nki5bgddaUbgTQuarnam5K9Tarrqt9ZzhJxeTxkGHDwKT",
  "key17": "5y9rHog4autnViPBSpPEuYJZeW318tv4p8GDoNTepfr9wjFxA6JqMNmx9Ggc5ioe19Tdxe5QbgiYuwFpWNurFnwC",
  "key18": "4pbp1PVjEJRcmXoRPkvunfmSKzv9PmTqZQXKfsHhA2HBouCzbPe4AwoEc3UCCguHjMKbu6CsGbNaiP8D6a93merS",
  "key19": "4KXzZtxaHywnVYBLp2deVgi53b8wE66ZNUW1ixg46zeZidJgKyLnj7qjkbu1sT5fmiE1qLfCnXp5qKifmhk6Se2a",
  "key20": "cRaFjTtDWwjHpoBAjasyXt8MfUGWhinXVcvx2F88aG7maRFU7AVd3nYmrUnTaNT5xuHC6pyoTrkg8pdqdrMrsgt",
  "key21": "4c2Hz82oAmcFJWewqBx3qirZqv47yqZq7yzuxpRbDQxns6yc94GiNZvoDtLkqAECX4kVAp7dMGNDdZg1wma6oBAh",
  "key22": "4qR8iHvmVKmULP1huEhYcGPAnDTWmwL9evKdUqhLAzNrhsU9ShcagM7hqZS4PDwkt2nsSTJ6otdxfQhNccSEXFU4",
  "key23": "3Kp1A8ru41pZv47kFcb7gcbMbWpBvSRm8AkhwTCrMGd5ffozT6s3zcKKCDq8VMDbMuHgShGYNYDp4or6ALv15hvD",
  "key24": "U4WbqGHCdhpoh3X7jeQcUvR1EGwnBD4w1EL33yTu9z1DUstX4bSEahpcEogojoxfeX2g2PQ96UZdjZqNH9C4ung",
  "key25": "3jD6WE4s5Fi2LFK9nLeUVMmWT5q9E5gucHU5ap2EJy16Svyfu48uHNXK6zsUiGSsk2Y1bToyB1bojC7oz2PWov6S",
  "key26": "gywenp26NULP3hhEAxRE6RHvTEpcQ6CKB5ZaboPzZaJLFBmXaBo6bvfLRBPvddLrr3twBKhKVSWijmPrBb11Cna",
  "key27": "zFMVVSycB2wSo2Z8w5SHNqLfPaUbnYBwQnWyfE8Bs6cN6Q86huG6maAQ9GsRhx85Fgm55FuhYKCLWQv1Za42spg",
  "key28": "3njbyrXLvnLGHnfU7sEJYi2xSr6A6QJkuwEdyoWesfgas6WXhGEnAzzR4vG6sUJ3CyTX9veqA2fHhybXq4EEHnpC"
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
