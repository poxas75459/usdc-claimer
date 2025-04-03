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
    "3fShCXXAf7nYFLP3paGbwPzznRUp7cspxJh9av3xeXadSih3MLckT72sJpEzMLyeQ5hu5QQrwSc7XqdEWPVkzWrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39k5pXRTdvS1QpeRmk431Xzq4bmZa7DwWZPrc6iJ7Jni8iEsaxbkoSqPjorzi18m6z9WLuLvxAREjgXgwK9ydt2w",
  "key1": "4Rinrvx1QLrEfgCPyRE7fRX3g3pZ2ns4YiWo4wivopp3PawGUHGaaDQ4r85j7ChYw9SmhM4SFDbYAXZV2XXxrHrh",
  "key2": "zibMd9fGyVVuatRvWXn6kCKr63izPu6onQgXX1mAvgbtjuK65NYq578fTjnW9fQPSZvTcCE91uVLioPo1h2TRgm",
  "key3": "9ZvEmCxiN4hrqnpzJbzDqpiNG27WjTP8FvbdUJNZwSTrBm8KqWHSjmjDCKpsVNh9JTq6G6ZxTV7fU9NEa7GwFoT",
  "key4": "3QvB3BDb7pm8HaStsaMPdmSGudaHKjsYBoVUpSKQm8SqnHyM6NoTJbXSZabo7RNqv3NZxYJzQrKPR2HUrjp9Yc3V",
  "key5": "5RZmq7FucUjapWjQuXTFSxZVwgh6eA8yum6kfbVXoBQwFifzqmeE9J9VvconiyS6LfetKfkCUGG5FzSxxygFNQ2g",
  "key6": "4eCmwSrUqbETwQPaxMbqKqorhc4KMBK3QcwZW5pMdqCPNdnSTtdxxCN5NVhuQKwNe8zAx4rF94CNCQE6jrkCjS71",
  "key7": "5LV5TpaT8JTQzyywUyq8XPofxiJZWQhra9NeifPFsVQD6CoVpaiFqJSzrfDwaWvhoLwsCnyKhE2M1eDrnfAhmwCd",
  "key8": "gEGRq77wowMdAtgZpcAfxjtAAif7sN4UTpjhTR6ZQVy5EivPZiC1hryijJAXCuASF9AGkfnq388RGQSbDGj1Rsc",
  "key9": "4LyJcrUaQ5Asfb4TUBkMo2fFf5M6YVcTivY4MfBUqs9Mb5MF9F1G1iWipQgHNhP6yd994Wwp34enGwRyoJRfA3Tp",
  "key10": "2AhWT2y4pQ6LLXd4GqcpeBXWmr83XKUMyfBfH42c8acSV6QbgmTDeuP7SLYQ2hHmMZSGiFsLwmBNhjJmak3ULacR",
  "key11": "3VMBjwENfwJud9feLfDZUoQtBgTybXt3zhRZ4tutAMoZsisLmnxH5uDrvpGuPYvb727TDfUfp8uMgUMxouUJbSe",
  "key12": "26oEy3VhoG8mfMLPxGM5ibzc2BPTELM2JmTY8cD4A15urZW3EedTAasbsfEFbLyo9HwjpNGZPYeySmFBkzuKNqoS",
  "key13": "3nm3ixLSPooMpc33BMTky6QiznQrgfkciF44mZX8e5NbQDfyUjF2FR8Lsh3cXLHkWQqrJxttszfQxiR99ndv5anr",
  "key14": "43NReSUUwsoN6Umq4K3RwhZJ7SxG1GLq47WNJViCTJVnmit7r7fMjVQWqn5ndAXzdD8wzdWTjgnoR6FN2UsDwkxe",
  "key15": "2W4hwDSL7VJKbN14bcpYthgXEKgA3pnWFTWMjT3rvJ7jh4MmALgfjGB8gXwAaPqUBazHGorXw1J94onwkkZkAJxD",
  "key16": "3B2MEj9xUbyA488uU9XCn6gEJC8GKkMFXxVhJN7G89ban512u74b6aENA1eM8Unppf87c2VxQkHVKpQf8TG7zjSC",
  "key17": "3eyJ5p6AV73BoTn93zi7wshTyexs1d7UtFP9FAtof5CqVbGPWqwaHB65uXUG4saxZZTXBDk1iweqWL2Gv6JtcxMx",
  "key18": "26zZHbEBtgxx8qYEcmbRq2gnGN1NTZKqxngiJURTczabzri3Z8TQq4vF2vY6dA3wQBviRAWrrmyGVUGjnfTvBAyQ",
  "key19": "5gHKSJ7fE1DZAnHtWEBbWnwjkeGEHjSZYXdzHVWBER1gWbtufpTCgA9B1aoxVtY28cqAMbZEfUvkzkxtUn6yqR4P",
  "key20": "4ZhukHpv2EdW672Bk5UhroFJfuqk6kdwqbAwgLTKvxr4ruo18hfPcGwx4bzTsbT3qRoGitgLqoJXdqXDC8Sz1NuE",
  "key21": "4KmGSLeYNr9xHhvAWU6fq5txjAXDj6rvCXhpGyXguBDgCpXmo7ufGU4d4nMcgpLpmUuY7qxpwCtUEARizoWposM",
  "key22": "5kKepq66qWMFFA5gmrwYAsJLxsVG8VuFPjMX2ePYjDSwsLP8ieskWNkq8GgQPxBHo7rycTxjLGRZJgfSrmK1X3x8",
  "key23": "3xt8aesNcaoQKrVYd76cuLrXDqxxTwS2w3KkSBb3iqdmKYgNxo9ptbR31s2S2nusAQdj4GA1ouaDkDwbeUhpkZyU",
  "key24": "VyxVgnS9yrqwFNjvXhxv4e8ANJeePWy2neDwGWDGYBcWBbXcU5a6gM9CPBaESersMCCsTsMxNvMop6oyVq9XrGK",
  "key25": "5okNpU5zsUmorxuJuh1jRD32PG3iiim72gvdJF4DXihbLRdkC5d5Uzwgev3Zg5j1GgCqawkrj8izKwJbz5yvJq9F",
  "key26": "5ERNnnSt95g6WRv3JE4iaZ9JzgAebv1vf7u2ka93NCVPjNvpBPib6Fo8CXnYDXCTPbn3b3a1K6B8pYHqquxxpMP3",
  "key27": "A3dacEuaQfLV58LeBnSBMB6zYUUFRbSAAMEHsvAJcV8RPMm279Y72zXZWm1PxHmLecZJ1KgsvKCZyW6Dw5orsB2",
  "key28": "3LEJF6H74KHZgMz1sjYDgnEHVZoWowydF3q44Dxv6owBmafgU7BZo1a4pUZR2agXdzNAzNnh2SzCtmDDvLC7CXCj",
  "key29": "3xWng2nPAtagPoCc8JHn5H4DJZPaMn2EBj7uLTyD4rcSNYB5MCKdAUC1xvWrLyrnkzf1pqKT4phkynn3BRpaXYqe",
  "key30": "2iFvnQDoz1uvYFWR7ZdNYpS1XiT5BRFANUTbYtm1FPeZGDu8qsrbms8nMn1RFXKvYZah3Hthh5SW1dYwXNPucbR3",
  "key31": "51gVwRcXpTiUgahvAxCGBDbHC5JyZxXdERG8ZYBdud7mEVovjuhLmErFmUmVSFaxxwGjPxiEz9WxXvZvB7KAmU7m",
  "key32": "26WBUzVLnER3XC6tSCz5tHMVfZFtSXyNRLFvkdtCCGEzxhSabNEmNX6ifKYAjjYnnzk4SaNwABeYci7tDR6CukY1",
  "key33": "4hcy2DNzMronCugiQ7umu5fN7ixFg8AyeVyprAHNsHbPQYXsiGs1bT7TdLi8LRn6MBmh8SdwJ9cCwB3YutapNC5V",
  "key34": "4PPA5xk2JP72XQsvWAp7BcTt9SSNNjhxcSRcS6wDofYJdzNgkBcLMtTBfbBMYgdQNDxFeHjMkbNSV6DMst3imbXo",
  "key35": "3oMJHv5i1kwEp3iKFK39XTCAvgucZD9Jidze79fewAbPS3a6GWNHx9mpnuDKFgekZVpn1vS2pG7bWHxCCagG3uSw",
  "key36": "3Gt1kSpvUpyGymJRMtaZC5Sy5uDL9JrTYiKfBP89Lb5k4KzeaLvkPKX9Kipnqcr9ophsfX2aseBBg7aUEL9boceE",
  "key37": "5qYeL1SBWWuxfSPAZPVauoCfE18isPFCRqET1Xn6kjDJrfhLRLhzfWAk4bd2kxtneX8oDbESPMAabSNx7fbLvbvu",
  "key38": "4gTcTfrkf7dF6VTDoauAMKdbbUxTRa2ZbQ1jZ4dnPS4VPirmVC8uEXtqsLKcP4cpHCbaq7yP2CCQQU4gx1HvVn13"
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
