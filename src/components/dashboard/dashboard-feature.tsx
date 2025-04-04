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
    "uYCT7td4ekYyiVGsZw3aDfx3mQ7RCSqvW9YgbkgT654HBfgk7CnqaNjd2fc4bivJJsz6XFoomwvuZq4uyhT1eRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNCzy3KcyG639rbkX2b9vZM8KetRKjWeSKRmsgW32EbtVS6gd3fxcy3eYZLYhHX6tvAosjrpGreYFcfGiVmXjzm",
  "key1": "pUVhVaujzWT7bZmqFfjYGz9QzMzrSdveeaZCqQatVRtwZQGL481q5djroSH6XTbA3G3KU3AswBxYZf1hwc6Nqj7",
  "key2": "5Pe5HXxWPGnZ2d8YwkaVUWJTjW9PcvXL5SMY1xPoDKosugVnMfrZVdrfyqpEh6v6ZfJyUy4VHaKHNR4huuXD9Rv6",
  "key3": "2u7eJTDkpm6bhFMPpfQW9skQB818ptjZGNDzDnkH1aEL4KzmViR2piLMQuYErVptQPVmsBtSL6LXHNmW1nzVXQE9",
  "key4": "2HE32TgaM13nL58vWUocdsvrDmadetpqJGnvUCM6xQZpoArxxKgDXWBPaFFMGtVzfshFxEYHFW5JLLnwKHJmGEdK",
  "key5": "4ikARsEMdi9YR7NNuQmcvD5rYuhG6EbYkTyL1UXYL9oJDVYjAWsrwTe4aNxJnq2Y5BjqjCCrCFehd5iL4hXndX9t",
  "key6": "3crKCAX7akYPvAKMQW5ZVDqrBbGVaJYh8qrAbsYvqweVyxEgqj9JCLUVgNHWr6hjdSTHw3L7N5XxdpEUikQg7Ska",
  "key7": "2oWir9SynemwJLxk8mAC1rcmvwZbdimu8EX7W7ct1Qw8PagYTbZ6yCxEy3wAmn6SKN8Bu1XBwQdc78MoHKmvjzwh",
  "key8": "4mFYZJTvKGjJhcqNT7r8DuNZW1rFgrHSstagXZecSu9jgfXpggZYPYhAVjpdgdbBNwEiydJTKW7vvEQUyPSAf5h2",
  "key9": "4E3x6pB4PnGnSLpirvTig9sxjNVpJMzhfy9S1JeT5gWtNXCCwx3DWLX2okViNGhZiefLJ8iRAecZCwkhSx2pcG5v",
  "key10": "5rPH3FVSktkbYQxUTp2LwaM3froSb3bhu7dGGkiuaiozmGf8aWRehHh1zWEXmCDaNJqp1x7RYpBi6sMc8zrrWwQM",
  "key11": "5AaKMoW2ysBaQPXoVjCrEGVqB96P1rCzkQZQHaie1wY8ZtfJWWdGNAxhZCTusaUVDWNZ4iPWfnJfgoduvaWgiMyu",
  "key12": "3gQNTB1d7k41AqtvyBfnL8mSbWhiBuP2Zkm2uFet8foHwA6HhCYkVvVfRmMkywrQwpY7uWog8N9cA4rgbVQMd6Je",
  "key13": "3gDoZihzauuRafDDYbPMoYRG9FckTKx5jeBVLuA6PfYr58ZsdbfRLsj5tA4bkxt6Mn5947rpUU1edZ9xNish6Yje",
  "key14": "4EJ52DANx1sSEvJM6cD4yhrPVcPgnsyd17LHt8MNPVS4Pj3oX7Nu7ppXTCfKsTHMwN5yNamgxFRRsftdJVCtCcGY",
  "key15": "28LqWGvhSNfHoXmKoovemjnpLC3QD6s5PduKzJTNLRPetMQoH3wH5r72c64MALU3LTda1Cbioh6xsvppLbdMmZu3",
  "key16": "66nnF2wijEXtaaVEUZey6j1iNGVy7GLRtygfkUpWxzTSkEfrpyohGxQnFPVWvZjEvGdoDCEXyCKWBT1ZeVaxHhnt",
  "key17": "5yEqmwQjTao3CeiUD3ZdZLVbTJNoNQy9fKubTLJNZKyWvHV1EUDPPqjMcuyhRbPzoLyeptb9JyxhiJs76M7xffgP",
  "key18": "4vLD2cXwzYeLuJGuFLWwwcrUYDkzynFYmEqzW6VruhqGksR5LBhFNL3uRKHCb81rSCA8aACPdxcLuSzP7HBnZ8So",
  "key19": "3groH8pEFLFHZNGfFms1KFE4dnrHWmkqZ95usx6MhorkSUTj9qGBGmPpsBrSii9Keb7vTQw1UF3kTqks2X2bGbu7",
  "key20": "41T2uwDaCBm64AUxBt42yH68vZ68noh1E1jQTCfa6JpxyarHrwiPcJjW5dfhQTpu2YcENSc1tAiKatTquvGazBHB",
  "key21": "3guCAkcn21GvfWAQJyHaJUgNypE3eFtLoNtK4XXhYbL1sfKyNiG7d4KzFecemAMHPcSbifPVHnJ4QY7XkzM8uZzA",
  "key22": "3pQMEctPsdAbheVYLBjdbXuzZep56rVvgWCn1buAtEkgAzJcgR4954GA8vtgVx15267YVk85fz4LtHfVYGVAfFTE",
  "key23": "5xErynhgUHZ4nw6nH7Z688C5dP1rJ8KiWt8vT9tihs1odwAamxvfm6wRbv6a54KkU7sV1htfMzsBtapVFDpFPG3c",
  "key24": "2ZgsPJnDqhWAa4eE6uRzNVt7tGTsUoBzRuAyfTCSQ758V5Np3zNnMDk7KeKawkcBi2YUX4bh6ikvPXFUp6wY5yMg",
  "key25": "4x2wkRvMJKuYySv92Q2zhnh8Rs3tNbigfMQgQBxc4ZxQzs9N32fUdCKhiW4EXqh9fmYXAwuULihD9iiHfBECGaC6"
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
