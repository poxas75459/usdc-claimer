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
    "3GAjMfYoYUeCNgopwUbHccVCsZYsRyZG4kGcmU4KdMjhHKa68LtavR66oy5dk4uP3jjLPVtb9NW8XD4ZgmW99Z2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dYtD7B31snE43RYDHJUcLEDUH8MiLrSWBf5omswht68eriwxDboTej9GPDz48uce94GZzAHsh7PF9uFJqqnWpFD",
  "key1": "48qEGMdLjo7t1Nn8cZAg7eGKnsfSe6X8NWrctGynHseML6V2CZd6N5rt51AoHb253BwuyxDvuxbpUtBpggYNSZwh",
  "key2": "3vGyKVymJ5jsCvGV6xptiAZjbwNAU7nu3pwKBLd1uva4DMgnX1uxjzS8hbXrT77n18hJNo1frPJFSgNurPvmmFDD",
  "key3": "2D33fR24ZwRNmLmTTv2qhkMop3hfGEhB1W5BW9zyVF8rqTPkc1BUK7ZYzs4TEt3YKYswjoE2T3vczh4ro7mihwrm",
  "key4": "hN29yZCc6TArBi9JBTvF6gNownS1AewG4Mhc8ADEzXMRu1uZ8x2jjthdbyvZbHCJWfBAD19FHfDoYipoZiRohvR",
  "key5": "2wnSBz8XfyX8NDaEPu8beFT6wi9hZUKrpumxnP9pdheZjrCu1rcUsfZGxmt9SgZ49g9nLnedwkAwJM3J5KV1CVqm",
  "key6": "HTo24PXTSzwUTQ8VTmfMdNyneCgf5jomb6rYZdubmcjpwQokiwLZnGL4eMXHNoAVB3z8vE419xRa8hDQ8QWc9st",
  "key7": "GLCpsrwLr39rgws9Tz13qLqGigCZg2g2j8GwqSYZfSLFBC9wrMUdLmo1zWHodvTnitXMBAuh7mJSLjCWNUy7oik",
  "key8": "2BveXeTjEyDvFWWCae14dD78r7zY34DXGamuipumWzM9a81WZJwf8163F4wo3JgDAzbDhrtT6Brsy5j9ycxEj13D",
  "key9": "mPoGex1hhUjfGG4UvqKR8U6yeHZ2iXLWvsCBsygEQDNhrJUVFGjEQhHKdcXkzrRqwXwp4M48cCwTfHHzfQpVtUE",
  "key10": "3hwCvhUynKgxxBfTQcifNkzmwyEz2fagoC3FPDiJxaecaVmc45n4qukTVvvJgQpceohGyUAQUiyLag161SgzG6L",
  "key11": "p8wa76C7GvcAHiggn9ENScVCDsk5kbTMjSAaHxaD2uCFieQfg5dCPubNy9iHiuRSdspn9GVydpewHxDWKiBTWGe",
  "key12": "yevsgFvuRjqN23Mqtc5A8EenN4pYU31auTdoigUWaRgHSZiwqmjxCTg28uWJCcWTZ6FurjBANLs3H5spw4WzGjJ",
  "key13": "4JoNsfYCceHJaP2fY22n4fLkBJ5i69ZxShL4USauEpj1Mz8qFjTtWGF5QsrgreGuruMJzF8LPzoHKSjwhNXqWxUg",
  "key14": "JJH51W1cSp5sCV3wPsp62spdi7mAE97iKmDpeCcKb9aeNrq6MX6NGaimUMa1wBnFEmXnd46fnoBCbcpCCKXNYkr",
  "key15": "4ma7pDiuppJFNeMAETswhLKXD1r7hCyX7JGugT9q23CRX7BAND8K9q3JbdXKokgufimz7qXG1YUVq3jKPcfp6Wt9",
  "key16": "aiP57EEXwcjY3ZRjntEiXPg6hofou8uMWbUExwpuqAcr8VVVvq12t7u6ux2oXSyvDrFV7Lu7Cc63bibzuMCEiYw",
  "key17": "ui1Xzfvkv63TPBiGvT8BZYT6Gf9rN5MRkMG8kTjzNCRQUFYaaLGFTdJGkW31k19aLNsKTqqxhJii8phRMUjeYKH",
  "key18": "5bqFsgZtrGyYR8h67SBCpcGMyDrk3xPKxu1EdA3afoXSiyjLv26okNewiyPYWCmGxcFHw3tjvGByyFReeL6Zios7",
  "key19": "9c4zmBwe7ZrcVDjEn2vuZMfHeBzurom6wP8PQvMe71mSEsrWpwts9a5qoYckesrCLKTzC2ABKVLuA4pxGhXUN5b",
  "key20": "5Lpm7X32HyeccfpHT3yJCNetsE8PSx2edgyXeDScEgRD4bVwNTVe3BMzN78Hf9zqCyXSdv8RZTTdzdjgs7FpywNW",
  "key21": "3LkmaTRnAEA4v7p6g4ZGxo9ZzV96JxPtYpqRSErk2FMpiphtP2emdK26Tr7xoBP4rPCECbhRAdFcB6WKVbrBmTtX",
  "key22": "5kvhLC5Uyaa1BCyMNqznhtVTpoQGA1GPmokVxwuXTNJjtRPKzDDddXdPc5WKzj2i9vnHAf9tLQVQLWbrqPmAMqEz",
  "key23": "1m8rKn5DLMxxb7mut7hMA6SXP7E35hy7otXUSwmWwngxMsHx2vWPmobFRQCiPYqFVDd2S4hKcHi3JxeTcrwp52Y",
  "key24": "5sjuNE2S7nkZwHemhFW6wdAkmeu2U1rLW2owvr1zDYQo4XTrQ4euQ8bdVrbhE5X9qJd25W8EoTpfXW6Qkch62ytE",
  "key25": "4JkaMYBr97KsfPvFXMWZjY9vDJgS13k1ALq6R7cTmU29AgAKmjcDx9CbQch25hgRGowMRCuG2teyY8g1e2WJQ4Za",
  "key26": "3qjAyXvrTcQLKapQVZegc6BHyb2Vmu2bpHFHR3TjD6pBPvcru35BkZFDpqGTkMQPcjLWWVSC7QLNouWF7p3oVzKc",
  "key27": "3WJiVSPcLy3nJT9UUKmKXWfyKxUUKMxULVDVEYoQ7wAtwsXNur71WSd4dLABG9NsjnFAFWXh6srnGGUpBBZfcVRR",
  "key28": "47FqxEwh3FXFkag2ixdSZWvtwUVNbtWB14FUGYi9wBoDrnGwnXZ9A19qUdJGsQmnso33ke4juZBtjjTjtqKdXKg2",
  "key29": "4P1LRKbLpJ1jWnWrSSWQAyqPaEepsdYXPcdU2TRxgqyw5YTFqNYm8MQv7DPAtAunQXAoy3tW8ZcqSifK13RWvxPD",
  "key30": "VhYacTNZHNVjLLn4MrBgXPnW3EGmFzYEKPfEzwZg3cDDLw4nFGGzWCfu47HpGnwcSg85u9xpALJabQvGksbJMie",
  "key31": "rdfw4AEcK5uBRLYGPtK3Xx5scHsZeZLY4zfUK1yHVLC5HWuMw8xEVgp6FTNCNWLeCJyhXoP5Jo96Rddkc1XGTsz",
  "key32": "3xE32yaJN9v2smxmhDzMEcYBsYxYzCJcjNnzYupYrittZrPMAGgqA3qZWAqMvA2gHwu6URgrksdq93s12B1udAzB",
  "key33": "2ScRfrNQjykUiNWPUJhtFv19V4gCMKi5eofCeEEbeSVPs1Eq2gid2whQP7Z5inN7jUm9txGhv8EX1EgR1jNY6rzU",
  "key34": "2S7VpU7oiCkVHEcTL3tdk7tz4HbeynCooyUALNrC3tyGz3Zfgtm66kXLda6W6XfUpt2WrAAygbbzvuuseNnwABHH"
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
