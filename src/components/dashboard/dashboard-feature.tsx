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
    "5wo8aCa6YG8uDUfnRghn85pNGz354jjoEmjUnuiXRHNvjkCK2ukhrqJqLTGjhY8KaE8G1s4kjjfNHNUdWuVxEcxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Vnp7CKyArw8X3vdq4ZRNZyDR9GsEwLciV93fgFBDD5qdPmG6HAUD2kMUAtFGPfSSgsuwYqHkPyZBAQswDUVed6",
  "key1": "2CyLN2r23SfJ7AoxmGhrmXCdE6xJ4EaD5coywPoQHdAhbDsRHQLn32NiT9tU8kJQ2aPVEr77hC86KMbQ9qVUVKuG",
  "key2": "3sXVcPGxQrTSQS6rJYkvxUu79N2BhaXjoCQWDTZYG99oQqPigJ52TzJgLo7PzwKfksCgZeCUmDXLhhjZU7g248Wm",
  "key3": "5TUvEYuKwVjGMDtSdkszn7XUnge3pL4vXNxYiZSKUH8DGCqQxamQCaK1pfaKATNpQY3PyVBA9pKunyCHdXRC5AAr",
  "key4": "3LN5EHSLA2kxv2oxMRmuwSfYHatZFDUAYX9sxYkM7gT23yRwDiYw8ZTrj1nBNvh9SJ1kNwmmoaFpgY7Zej6MhJ2i",
  "key5": "46jc3iw45YX4d3jRokHGhpFCZdEzjCovw11EXG1ipALnPnyU8eupnnu3vAUWuew4vCkWDiQVm9zRQpVigisvG1Jt",
  "key6": "3B42Tf1HddbzxFWs6PT4ctrw6AZNnQbgQZPsPVPTi6hE5VXk7jojbpzsASStepP669VMutCgr2FacpG57MdXA1ta",
  "key7": "ZUWZKzPzbPeigt4aMeAX6joLP1rpitAnnsiPaZW1rEuUyYWnutcgKqKrVt6Z9D8MRNForpnWGqbmeNgmofo8uem",
  "key8": "3MZ4xuH3uWMfu8TaxaFcynS2UtpZpJkzY6jFDW2jAYk8NAnGb6vUVwJbp6xuytLnEjBNiZHrZ85nKUHw7vC5qgwx",
  "key9": "YthmD8NL1D619XDqKHGYGJ8F5FLPrg9trGwf14subCVxtVkK327wHqMDChqBwdPoMUy1jfapuDspvyU5PjZ9G66",
  "key10": "67kxhA51fh6T5bvvS6ahZFtmpatyC8XyxvbhM9Kx5AGM3GLc1WbSg9jy19PhBoWeHmaqzG3hVnW8ZSKk2HfsB9XJ",
  "key11": "3wJqFhKEHXzgp1FErJhPfn7qs3dmVuxCT5Pf3NnTatP6WdrPVmvHj8vWQhhUdA8XKPTZEtwwYHsxUKVQ5Bza74cq",
  "key12": "4mxpzSVupjfNjFNkwbRM48BMK3UEXervgWnKYtGvEjpP1PQBWGpnYskTbBPwNUKhD513Bx5TVc5UaJn7SKgB52Cc",
  "key13": "4ccAwKP7PTFeLqvGiqyK6Lr3JbdhpcQWPDJJUCtpxKfZnagQLMxGChQPPV2115cpTFQAdbHzEGZktLzmKh4Bh3dU",
  "key14": "5N4xP7vYBFxrAYtooKVWHWPCy1FA61tJdbgWWMUjoNMjnEgDvfkZXypR2C1VDn5DaaHEgJUY9LtQX8NSDPsbBKcj",
  "key15": "2oSxFm4KodbpBcE9obGqbjbVLeG9oEA9KSqzWo4WXoLKH7LLedd8hZXH13KGJyJ3ocgpJb66cTENjk4HpFRD7cuv",
  "key16": "3DGykt1PqFJccEzJwdoaLKeQUbT6xNYenAhUucoHMopqBwxsfvY5cM1uyQn3zwkhta6WrgR8EXvhgiad9pnykkXt",
  "key17": "3xdR9Srv5PTkMuKvVKCRSLCT3X3xcrcsUjbW2K4QMK9Q9SqwF3ZEbsh8j4mtSvXMu1KZ3oXjv5NHgjYPAqSd13mN",
  "key18": "3PW4QPBBnPRyv9xsELUL2wMvP9DX6SJFkbykFZnxQXF8y68v12x9FK2XSgtQgCzon5TtuyV7hGLDvEWNvkN8998i",
  "key19": "5pFQfHeey51C5hD3LDUEKrEyxdQ7fwVn1znWy5LG45FPobMjawPpriK4hp75gTe2W9s8KYv8edLJodEi4n2xdrKd",
  "key20": "3CyW2cYLExrLqXxBaGjZPaqxNSjnvGoDWtoCRA3KhRg7AgXFLAtMSEDUygKxXivZi8JmTNiM7jGRZHT1av6Unx8R",
  "key21": "2D4rd4Mo8dgaQs7qmcqP9kq3u4oFDXwErXfYR6KgFRXGkukTxgmuUBwtySSWHGJmhJ5vF5QzUpRbeyazYtw5mvrt",
  "key22": "2NCbH8gsr72MdFiSNXxSu75Zha6hKadMNCvPTHfbjz6jWjDEb68HcaVzUG9w9wHPhr2eBY4Bo9sfbHZXvcJwE4hP",
  "key23": "U7j3koqJ5RLEV6ZaMyGbk6tVTbNtve5gE6titM7DWr6fnAGvP18UYBCJeV4b45C3gJWDMRsk4Cu5YXttiywNw4f",
  "key24": "pUS5ZRF9rzuz4CWDkqGrTBky2fwd781xv7QMByFsKXMJBsKWxMDJVK4KMyuAbqByWkN2ZVPnuXnco1MyfiWsLSm",
  "key25": "3B6PmSRtjVEynvAJFD611K55zem52qcUzY47mHQfFTS8QV1CVGrYmM349V9epBgvufM8cBiiupZkKZVazURqzLQ6",
  "key26": "3tRLwVAcdqiBqhP2bTEHJRHuJx22wQHV85n6qB3Y46pXfwCs1BAaLpghqiMGgcfCfxcT4ewfEPcm5izsGcuvXPcA",
  "key27": "5RQrhBzhf715jv3MC3m3xsZpxWhC9iMCo7Len7K1qcoYvkHM6uRPwqcgNtvVzcQKDoQDLkC6RNxqHk3EwCdsaHxY",
  "key28": "5xn9TvGStEmYMMd4B7JvJP7XPfYSrgoZpPGSBRvA6iKtYPj31AEx2ebhpo2A3io9ZmcnsDYEU5JF6X4DRUxvE2n2",
  "key29": "2ASinb2qrqX3yQD2iHbyrjLMVgLMbhZFpBwcxmwKk9j7wZrRyrkQhUewNaJTaQP8GKVAa2TJoFZSPzy9AeEt6any"
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
