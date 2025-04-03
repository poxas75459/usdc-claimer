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
    "2vQfWkoqagMHQkPzhzmrjc8qnVbFDMDxFwHFKADNtmPSJUySVuyJ8VHxVzB3BsBVRCu8n4DCJ6AcM8bXiXLs9Ygx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuMX4Rz73ELjsH1SwqyFVTtYUkNXSRGnwFKYSz1JX2Ksj9cih1xBKFtnwqbBffZbE9H85qyGSZyJpUL16xw23i7",
  "key1": "4Von8NQzE77mAxrvVn1u3bKXGyQ5Bs4ySu8aeVBxQNqKCNVaDRVEUbkcXDhUrDmyr3CXVXWYtinFcs2s6GZX2avj",
  "key2": "2dnogKYreJhQX6QzsuU55t6b7X6Aesb4afVLCxcn9C7xw9RqpctfWuNHVoSuoVH99j4TenEeoZmvuZW7YH7HfYKi",
  "key3": "3L7bncQNbpUSEUkMDpsF2DSMcLohLzmSe2A8HZMabwYXiDccQ8PW4im71kFMSeuQsKBSYc6zBssgue4xecC5h1zQ",
  "key4": "4gGsLtVFiEB36xA48pAGUJLGQ8Ua1mNtL2DyocZREncER4C2YXHiMQ7dPAu49k968p33bm7SnyF3vYufELUB6Ah5",
  "key5": "3RQBe2KuGMRGWSnCbDXDjvi5G1jsyiKss5B7eRVSGDzceXshFUFudqygqM2LnrjoM62AEsSXosUEy5tcsriG4Wqa",
  "key6": "5NgXU5Pgqynzrq97FhE5LZawCSBNom7ZBP3NNVyT5GwagQU6XzrxhT1ib9qZymT4FPzdMnKJfSbw9cYZXesuHpqn",
  "key7": "3GjcEEtQXzNQ9jqrsHca9MtPZaBya5kcrFu1rkJJBJG7sggLAevymvvuauxWJwkPQvKzZQo11U53ZiNMivp4L8VJ",
  "key8": "67QyDfXWex1ih9wiTC4bWnxZqfZFNUQ52ojVYFbeecQuiyjh59rPQbqWm1y9ACm29oGg3HqeA2orKLJx6HEyaqBx",
  "key9": "8knvVqE6Dh6HBHvsPpRpBZvD6yNJdzAhfXmUyF3maeAJq3AdGejPYFfoRNotwFV3NfTcQUyVdt8rZGnuabkQoWj",
  "key10": "4zXrETfAekH5nBv7oo3BNT7xrGHXW7gQbMr79NJVEpUEj6svWb9HBxcgc1w2USiLsUiE3rU3orTqX82abiJ17Zgk",
  "key11": "3FKABdJ55Qko7TZgNgKBGyEcR4FPHvUAn4JtoGttBM3cVnhD8FxrrJUDiCCb7XfcD6zEh2bVyx1i111NcowYdaTc",
  "key12": "49cK4mdL9JJGgHE6DZYzYAmXXNRoRYfS5wx9skBzyAZJ3Z1HEiNwM3R2CxL6xqK3Nir4pDYCMtsUHQ5w3wYQ5co2",
  "key13": "5efpCdnsW1wMrz7LgEmnYCeSDy5ycRAUH6WAPNdQfeJda1h2VLVKpAhyqun6THHQs6Aw2nCmA1pUSEcq28akdipP",
  "key14": "HZuhwdyrFkGU5ecGq58wBcmYt75DQ5muqsuo7gAy9hgXNF2smjmatJgFf5HKVsmSGo7VaP99ccTXgg6V6d7JWii",
  "key15": "rJbfFpEHSKveWqEJjSA8ndbpKU3hBdFrBMoNLqD4UQmNWvU4PLFkJxnZP2egRiQVyx5qJBPYCGR9hyWKinDEzii",
  "key16": "3eWWEvnLVPsjjJmmMHHSfqurjdPanQu5iop9ZGvRWHaFK1wYN39Y46p1dTwmffmYDsSzCxJZfc8oX3TpSeLaSY7K",
  "key17": "jyhuJvuTN9H9767dBXt9P4QLCtVNZFic3ZYEHp3D5YniR7r7TZQi5Arv5j7tKbND89TBmJiHhptB9M1oYGk1kJv",
  "key18": "3XyZx4jpqsyGVtapYRVRPtAquBRZHVYXD8EQs6AcG9ERGBWRSGZiyAeuzXntEb2wpJMn2Jwi8R6n5cJFa7yW3Sjz",
  "key19": "5tZiTYMHcgLhpaXAbvVM8cJFsXF2w4n3PFpqvzmzoKbk55s2GEiccuJchp8JZqDUVFTidHRcnvFQSh2CWVGpaSBx",
  "key20": "2sUQY1pTCzAeSv2Y7DqfoTKM5dKuKv5bg5nWPMY8xkvxoUq1SUrghQNQPcpQZQHiSTAdGr2vaEk7D9gRP5AySHTC",
  "key21": "4y4VtfAAVM8i2o51YQgtWYfDvssnnEtHiUQQxTfGnqNXZh33zUTWpkLNCW2DLXsZGP4XoTZpJJ5BxJB3x64DsZ24",
  "key22": "4tKeddHBf6MCmFJ8U8K1RjpqU9UdfMLHQAWwBGAXYZA5W27YtmeLUxzQNyiXoPp4zUrxbCBDrkUmN9FStfTTsWqo",
  "key23": "5KjRmGoVRqrDbXbKPdwHnioHNjj3AdVyeyAz8Cke2LCnJ4roFXpXYyqJ2MtEiuinKiG6d2JrCVdz5mdmsgL4sHvg",
  "key24": "ZSWB8fSjWaoNajTWVwn9mGZUbWR2yxNDWA6PBtFQ2vFuP8QRmqmXx8aR4aeRuZgdyEzJKV6vjK6KMUpuzYL8T9d",
  "key25": "5kTYhxMZmAeekiZPA5CpYDbNXMh79qAbY53NhvUMMV8cDGf2G7C5aRPY9C44vou4SnoxWhuJj842asuXvxapRsfZ",
  "key26": "wG7Mg7dH1xR2J1UvTCpEGRBzkx5cLzvKxLztHb9j9tsTrceSV2n7qvbuuXAySVQZ2TngqbsBnZbZpU9GjDTVgcH",
  "key27": "2UPbuDjUbeUN1FkUM7cQrx8NuZxvwC9PCsUdMuFDvAiGMu5Uj3f7LsmNf3r3MUEgipmQqRV28m8hiytcMccdyPF4",
  "key28": "66ibd5y4Km1uFPF4MtB9Z5KP8YmwSvtqVh4FNc8bX5zxhy5pZyGmswsuNY7TyPJrhBjvwy8n9u7BsvwyQna4qtg7",
  "key29": "55PQbp5W5r2WQzuADSDHMVoXh6GaE5VfcVED3djyHnyrEKFJSk3GPaNmgLiL5uUqTzRShC6qGMYNzuCaqLXiWuiE",
  "key30": "3yeFFkEk9oQhqKDnGBraLrUXfzrvRYiYUGM2TCon41JJ6rB4xYR5n9N65BdnE3XbjaGFKagcYsFP9HwSqFnFAgXT",
  "key31": "3zb14tTTE2nwPgQUshUQVGphcC2cVp6bDX7WqZ7yp5w7iJzr6jFuR9W1QoXqBUWyaB3gD2AHepogSNuDL22WsBrf",
  "key32": "4hyMZSBfQ1nzh72FxBmKePCYSqA7vtGnznAdDfpFmnriH5rjdZgqDHzb5XNkpPVsLoe77ngcqp6tfVbnmRfULCFU",
  "key33": "5psvKE6C2VoeU8qxCQkAkxhRVxX5udmD7Jh3osPxrPoRFejE7JJgJERzxDanwd3YsMjJgX4nUB2scpqJ82UA6Qks",
  "key34": "2ZkxwRUhWkAfkmLEpswEXofTZSoQzAKEVyKiwUigQFZayFtBS55xSH3noBPdHF8SP1pfSoqFEmeLuKRxXWYgTPL8",
  "key35": "5EQ1EsmAFeDdAUfWqVCYQfq6DHmYnjCoZHRncoMYjFGbKqtjL3sXyBBDGGm9oxBXtqFchNyCUULYpYFnKJD23XRG",
  "key36": "Xh7N5Y6e7ZfCDkhcpmc9zs7oJhqvu9nuttzTYFegB5ArMspxQRicRAa93x5oAGZdPVr2P2cse1sbcsxV4vu6zJY",
  "key37": "5pHSjsWJxP9SUjJ3wBY4rYeqqqdz6dmG6m22SKFX3unaH5v7YaEGwDYnGJKbzGht39rn9qsjyPRKiCLzqkk2pjng",
  "key38": "4qCAHNohJrL8xWnJqRFgquZfTFJfEJ7HwAeLg7tDro29Vp5Zwd5mW63QbtXXuWCkrAAeZN2pMNLpC4xoJG7BqmTH"
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
