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
    "3v1Mmrciz251nQKsmrg923pV4N21nKMStTxeHX5PZAvcB8s4B38yELCmmCMbKiwKMZUr9gjhfGT3BdtLzgfQq73J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52caHB1HXd9CZDgyhh7DEW5yCFGUouTJkCfepJtVWgKNhPdCB3TaZ4F7DVJMqt57vhXWgnwcmN86u2tDF7qSKwWN",
  "key1": "2aXjdcMJbHH5KtUDZEky21Y49gajSsLYV8FX8HBGzudPuJqmoiZU2wbwkjmVkN1ESHKs2ymN3roVRtV61HhLASqs",
  "key2": "3JwipvHXdyevwHw5rT1ZceToSXJNLs7CXzzkMwKtLPEKKpZUK3UbZwQo3YWnWZAq558LHztEfgqy7v8SEgcEN9mC",
  "key3": "PfeBsV8hg8FDmURZdVeD2Mv6JW4usNLBHmCufA6wtQY7wBrjwuLt1LEt8N8i6ULtsJKEsZWmB9TMvQy6v8dNQ1T",
  "key4": "5BmNpgSnevtXgHx8cS3nVm1s2tpwAqTE8773CSB9aHS4r8rkSurTGv2Qoy9D7LU7ydJvZwJpLMoAmiT5J8sVAhYz",
  "key5": "5B7kugh7ySerfW45fzCijLPYPjM72wWqoo8dMdnXj99AFJoaJFeJQWZvMaCSZujdUmtTechVb5RiyE8iGYdq1E1C",
  "key6": "2Koo28QM9LZMEcsDKKGEanH72kDmjM1Zj2FaYEEHZm5oLikB7kjTghQzYjLFUmWEp4bzqiRHotzPvBNffXSTX1H6",
  "key7": "4WjY7gPZr4aUiBmETUPpGjpCm8Mr229KrCn3f6JL3NUtDBy8Q73UQ3xan7cHAPfeLaCDCSFim9r7VfdqcgCMiHsy",
  "key8": "4mJ6EbPmfQ5x6w7ZiMCPXuuHpQz1LuRoeFtvfN4qtYFK91w97h7jmWCjiiEPRvnieuVT7WWDzkTkdHJUGchoqwv7",
  "key9": "3Bp5b14pNWWsEkWNGdB6uTBd4dSMF9yYoV3ewXEymfFjLSQK4CKn8Qo318YmK5QJWVQa3oeniDh7Ds1C7z9LZtRm",
  "key10": "ydBT9pTyudUPwh5Fz9vJLxupZEWVmjfXze2V1kftGCzZUYz8dsSQkX9RuBPerokz5hxvCtVMQQBPSoxnVh2aHEn",
  "key11": "41PU7ha6b1oLpf6hwLhpRdviaxizsn1ZS4EKJcJg2r9yHi78bzMmFpgQvVpPwDeGh4AQqG24nXswWrwFZPFq26QH",
  "key12": "4PqEZPqggFoPYxjQaUhhJxkqwhnm2BfxKANxfExMZgtCtFD3ApaFuqq1yjTLS8YabjPoZJjoGFQCnPmETtsAbSG3",
  "key13": "5SPHZcoY6zT1YrSewjP1v164jgpMqufyfDBaDt747EtzWgaZtSrrRNSdVxuSqafDNHRHaV4Cp9BcJJdXA9A3PRww",
  "key14": "3cirXJ6kPJ2Ke1LTZ3FKywTYr9BonnR6dJGqwqgESRSGnKuzDkBgmuku4jwHQyRXmDcQ8NAzy4U8gBXEqPGDZWpf",
  "key15": "2SFPRAitV1EDnhwA5kogTxk8X3ijegE2rhkzzjeRhgSpwdCJrJJTJP3FSCKmi9tK64mkhWj6H44gfZCgR88T3V58",
  "key16": "2fde98nUemFdsP6svoS5B7PDwySrqgicLR8qwsPaQP9AXBVqxPm5v6BCaPUaebNzVLtwctUvEnj1LGkWYTPYHFsM",
  "key17": "2Gx7uS7Z1DXJTPGpjFuqJcEncNXqg1YdhogYwZHmUm6SzC5qq71GUCCEEc9MbaeqNi3nZXZZsJTgwFUfFSAvX961",
  "key18": "4aLoFq7ZTEwcRet5SUjxzXRQdurbLv8k7GonfhYdxGrwCS4xqroyTnzG2cRqAow76M7acMwjcRhNcz8F8VdVrL7T",
  "key19": "4eER38EHgaV6chTLiLtVfb9SNBaGqqxcUiDGhn23vpfSvdn7QLNAi4ym639uTfiRZqZQwkLdmCbfZ92BDfWZqkiu",
  "key20": "4phneSWFiJgLU9YL6ocYJj5W9DHatQNq2BxejYwgoh5gH4uMBAuLKkUwE7JxXG861eCHFx4biguHLzQ16SzVM1qY",
  "key21": "NygTQnnyx1iKn8oo644C67iWRGKaHubfVAQFhKxWt1tAajHUL4mGoTd8ipvEAryG4SWAP1phdzXouXpc9v49qtv",
  "key22": "4X5tRTkP5UQ1nBKGdFM9tEveykBaa999R44cbUn8497Z1yLT44oYCgTUJizmHz2wHYQEDFdfj7AyQPEM8xEpysxA",
  "key23": "2Y1TJnL4wKArTRgKJBegwwRon9Yk9GEBUzzoboKRCmXALjsyNncXRTXbrv51bXXaaN3oMgVwayofNt7xssdnUJu9",
  "key24": "2tnFaJy3WqkcXGYCmiJ6hhoHUM6UrsjmLTWGNd8X7B3y6odqrej9oiHJMpCa6xRjHxZnFUpeH6ev7ig6RdLbF9m1",
  "key25": "3gwEvKV977FRiT6JH9w2QTwA1S8tUGqdAT5ykqEgQnJs1rec3mRURAuFxb1mbosYbTinmhBH2ZcctJgXrms4e5zp",
  "key26": "5Dif9YcogzkS2rHatDFPoj5jpoukNXjEgJiJbzLLif1ihgFzNHC7mhegrNLXJHgfg7BbqudcxZQsSgmBvqcimzCi",
  "key27": "2GdEVRNAjcjB8FgQNjvSkwzD4vGnszLkPetHP6hD7GCh2kBq8Dk2ff9jL4Rv7RaedEoebh2oFqT9DE2qM3y8N2V3",
  "key28": "MQ3caVc7cy9nyTUq54qRyjWMpEoqBj3bGPT7Qbk3w9v4a1Ky5B7i4pdPGUk7cfGpCQuHkbfPFobRh9Z8n1Q1Ekz",
  "key29": "L7MmeoMNzAe9GA3gGuPKsjeF6qVVMcXs6op32wUCy77Zi5Gq41JMsCprxUVk53FU2XTfQEUMsfhmkwmYU4ZoJyo",
  "key30": "kFS6cebwkizBkQ1i8EctDwUcrJjX9S5VVjWBCX571aAaTr2gh5Ex4et75tnarzuLjXGm5UZTBkCzxRrHhvGrvSv",
  "key31": "2MEM9m9RA9EwrwTtS4Q6yAFFyLmh8F4SMCHbbMPJktPndJXC6UVHUzVQYmhYW1atrvcN3tyAUnFodbqpFssXpAjq",
  "key32": "2JPiXkN1GUzSLbuCgZfV1zHKf98K5UK81jfTDhMYYfiCvxU7wQRo6RryHXWyCGKMnzuyPoDa8pt5Uq5QbwWDG5c3",
  "key33": "3HEuzuai2vBH3YoMBBfvitxV8wQkyCJh7WcJzPGmoRKTzXdoyj7LEdmxTJefPwUjRcnTJxnXsak3Sx7WRwAk4HEM",
  "key34": "5wZcb3M4Q6tPupH7PpmuP2S9a6jxaC1bSRTkQxCnwxzot6nanR3nTy5bpzkAV2LGd6M5p8RDJive3xKjRbH3juPy",
  "key35": "48oVu42Am8THSu294w2Xab5U1GwBxa8ECtTTKLsF8PYkaGMXuyvc3BrSnKrvXRB5EgjnHpYAYugGFJFvAMWzYH7s",
  "key36": "23wfjqkfBBLaeRAQ2RSkMsUyB7F63PRmvKC6cdnpvf3tMZ2ijGFfJVXzwqaq5moVMk7mDRjUuEjkkNoWyq6jX3Kt",
  "key37": "DrbuunpdoYLvRVS23M8uE5U4Su2Cia7Lubszuh32LgwyJz6zYpZ3U5R5XSHzjZF6d16nwZ2BfqjYzHMQD5Z9TWL",
  "key38": "5gKKKrQNYpHFkMw68yQt2LEn5yD1ezqgMkyLD8jK5ztsHAKzdom4i6A9bmcxs3uDrgEqe8WTbYxJhaJJdLvQeBRu"
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
