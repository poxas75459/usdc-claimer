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
    "4EuXBWx56EkWEvQb4euWJGUmCeXKHQAoSgPBk5dJPYfGeu9hMu8FMhu6og3ibCi5kTPQevMjEkTuGtjo2HFgL3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBdaE3C1WGHfA7ncT9NEP8iN3oG36XBxuQLCCLMptUZZ5VfaAumwuY9YZxH3oVSGFrLrU7f3tFk8ydTkh3cW9ks",
  "key1": "3926yBJr4aTZ8fiaiGsLSsRwyQWGPTtvH6WSrYWEnXaceunynNrjGkhdHAbzRWKexAwxcsVAEaUkjF3ceP8H6oo2",
  "key2": "D7rixTS9jENX83W9WM5WFeEDCgp27FKyuPy7h1fufAtwrTZL8edz9K7DZv5m2SQ33cg3igMwSJ5uV7MbUFT3Hmz",
  "key3": "4wbLqPbK7LvxKLz989XBnC1MTwwaH9RDcgJ9ooFvwg4My8Fb9HAGvja2AtgSMdBUfQtM7rVkSTNQ2d8sWjDHya7F",
  "key4": "2mrMgK7kchcWq5iXiDwohw6cYp5AoYczvGT6V146J21tE8E5HMSyiYSJg2nzSWgdBD4aXdpiHHsFJuc3vgQLFKzD",
  "key5": "24HkJDjh7jTeirCPFYXSLrqptvKs2kvYf8w9HNcVntVWM27t3KHWUW5szMeAQ1sqJE7WFdUitGxiemS6BxPDfN6G",
  "key6": "494vnPTGTqtHEmMKeNQmxHtnZjmyUftZCD1Pi87kn5DTeF9zUxxFGV9XwStJEV6YmtjA1uavUbVYa84wQTXYWPKR",
  "key7": "SGwWQYkP7GorLx2mEp3gemm7YbkbiWpSXHitTDSPYRbQPeZX2eFUZ1MkG1Ejw1a6qNspXX2FeJ659F5ybe6zzGY",
  "key8": "3tZymYbtAQgoyejV95zfCBK842ihiw2eY41w9gf4Y8zxnMsLooCx5y96uCeWwCFFe2MefncsRLxKXruGKxK74EAm",
  "key9": "3a2vj5K7caSjUdjwG11AgQwK3j1xLPLyTJi5dwdUrJRJsLSWySBzznYAHgFCs6Hk1R2Gtj44wJWAMpRQW1chcsUq",
  "key10": "43Eo9tjJ1ApV1YHm2C6zcxjtVXUJg5kFFQXRZ3GZDnwCFvF4cA4LDthyxFaqsVwbJupEVwbQJJuYede3D5DxCEH4",
  "key11": "jw6os4rLztsKM2vCL6HnjbDrKMKg9XX1YTjoDPoi4u95fExT2mpop5UkhhfXffRqHaeecHZ7gfsED8tcFZWJTJa",
  "key12": "2zhLykLZzV83v1nktPyrYQNQmsHwvb2FJBGHbVjdttXvugfYcNaotd1RrnPW9dqP8NyDRqEer1j3h1kDdmWpdPMZ",
  "key13": "265x5ZnHAb9W8HCptK3eyTM35P4SnhSVrFbPim1aXmQkE8ovGqSmY2CnArpBuywjy7Vb8v6Z2Egnm7qw9SbcN2wM",
  "key14": "29zKZznikfFVtZMFX3sqZtC2RUDjCaEouzrsTzyNjVDTYYiE5yLroza57vtmaXDv9xhx5yaoQC2UrY5hAh8yFcLB",
  "key15": "2juBYJKAvpHhTHNLfLx5KbAbhVKAz62rpRnjHNnXEpPzYoWam1MwyWPjf7CwDqRRURCVErNH9EyyUCMgdYYGTGFK",
  "key16": "2zDB3GqVBHzUTiJHWaXv1QuSFQoBULRm57sffaBtEYWRduq1yvgEvXECH8utzxDFrccAAbwPb22AqLT5ZwfFLsED",
  "key17": "59HMRmKukYW5UsAQZZPAfxNemHVZaChqBMV1GWn436gHEzMggVXCk3ZJ3PuVHxAYvyZHS6gxa42NRgLqhUqFthVg",
  "key18": "2MHNFK9dAvVsoYsXXvwUu1JcLBLZLYckxojPdni2ChREFJTnpwToDpM2z4T7bRHXndAMbSCUkT73rak47dRM8y2k",
  "key19": "S5pi1Re964AHtWGqUTCwJp5gLm7wPPKJXJH5uLBi8tQJha4i1bBthJr2K4yWPkygkUNLEiLPbw6DxRycaqvrxPD",
  "key20": "2aVjC9wHGymXXxoYvsaybvAsZPwwfAT2Qt9LvsAGA9cGiWYX9xGan1EgcZdKiyQfJXHqwTqWo4Sa888pNNckzf6W",
  "key21": "2Mzt2pEs3pciJY23jWMSW267X68aUPkdYGoFiRmCpJFWck2qhAPrKP27Pgd3BqvtRrpRpqJL1bAYg4xTLqS6AvcG",
  "key22": "5nZ4Xq5PEhAYfL2XWJyTacU2LHio8pZTWeAp9uKvUfFsBMDwAwrZbxgrsKBPXNXDuDopae3kVtAfp3rgy86ZNCvQ",
  "key23": "3PSkC8jgQc8CttsdoSnUGZt8pRsn7Rmf4EN3rRTLLU4CZk81qFtJWbYXQQzRkwLL6K7qNLx4kXUYaQQA4PPkSdVS",
  "key24": "3BFsusojCK5TR8L1d5KyFNGscsfTNYTsaWurW9XKTzsP5Dzn74ttmHZNNfPfpkYjCinSFKf3brgpJDcmumqKTtva",
  "key25": "XYYP37gu1Z1eZieDn2KWyYceXx6rzEUiYo6UwmZWu2ohkZixoBScbacUqcGA5N6GeSqzcaedvJ82st4inofozyj",
  "key26": "5REhTvMETfUtMNUwScmwraB7oYK1JpAr6aehVpst4ZHXEHb4N4HFucPCN2SdLZSC6BsETtG5TqXnhMeRHT1YaV1X",
  "key27": "3XL39CZk7zYHnJSWLQx2Pis2FoGEUgS1w5uQam4UtpR73SimqtZdjhDKgzauLFCrSQFZQsYK3Cx8HWD6zfPoveFP",
  "key28": "3TphkejAYuVMeRRro61Ms33RUR1wkBTHMM6gL85PSPQxXUA4oT5ZNaWpJjzycR7sLTMinBKu7kVogZLHbn1h5M8G",
  "key29": "5JuhDQM2qrB3GGUeuQssG8rmqNaTg2hvJf1B7uvaWtuuQgyUYuGxg2CUXvgpag6CbxCC8HBFH1maNNjvN9nwHPB7",
  "key30": "4E9jexrD7FzXVwSLZND9BrEPwQfYwiTXKu8K2LY9EeAK8nS3zUQVA9nzCTyEJ4LoJwhBmK5ikBQFofmSXwPSbutG",
  "key31": "21Gtc1ErtXas5N2SXqfVH21jjxEa24XgU1bgD88fo3YpaX4Z2VYF1ayVqyg5C3bXP5tyGC1gZHx2H3nPrjagyV8Z",
  "key32": "2HKgpDhdW96GPzkF21GthLWBCEf1Z9tgK38vcQVMMNnZLTsLbQ5Dp4Dg9gvLXbL2VoekgVehjXWcFL6S2fr2LiEC",
  "key33": "cXkBf6JDM3XbyZhe3FLp7iw6VtJE1MhE7rwEE97D26KT5awJfxC3w3YNJm15Mfiwq96Xoc2MUHRE3BpqBzmacsD",
  "key34": "5Q1niEjBC4BF6fkuia4HDRMR81PWUsKbAEYzpNxd7KopEuX9AGNeFwHsk9uARggd9ypSwi78eKVJZgLmFHPcnM1G",
  "key35": "2gN3HkVEHkp9hnYhsZYWf2UUXFp78CyP55QYpZFrWChfsKGYG7bmjSqVcWRT3r9xKQ1csFDkEZUHhYgz5eS69boo",
  "key36": "2mtLsrpjzGpMMKoWg6Mwq5jJdn6miwcuoqxcW5GZXhq8Amfwp1yvsGv5434nbVoYYhDhKPjfHCzthhwKHmXvJFa3",
  "key37": "5xnFsQWpH2zBVnWm2EhwczLtc1JmvZdJqCabMcAyqoSdLmdJ8SShgnoVJPavXxptCecucqbT3GEX31F7D4KYiCut",
  "key38": "xd2qUoVZ5B2NzSho2e6EyCvGTy24JgQFAmdgPzxCJ4xrSXaQ5QGnuJMMSAfqJmyWw8cLQarPSEsND6N61GE8BNi",
  "key39": "t8bxYnv7RsFWARF8UkA9D96eYuZaY8Tc32Gw9cDFJMQo1VJVCaWuFgeXK1Wz9SR6jcTon3LDkfM3rUMQLzFADE3",
  "key40": "5YtNUpNe9ZaCdGCiVvJTzfbqfYTKw8enrzCygNeDLkG3XRe6LNrHLVFfGzeLhZRmDs9BwGmJGjnBM6Gq2DMFiiHE",
  "key41": "5PiYKrn5ksJ4uH4eBdaRUVUCMJ4Etu3Gux3GPWhu13LK2E4bfAZbvWoESw8NeR7JMHHnBjQcFZPDLH8j2DMKNCoT",
  "key42": "RVebxaeQmtoVVQdbFNno7ZHFLYyWsfLXrWDJLwdUSNvPVvkh3AABx1KxxneHoUFxUp2nadNEvt4wwCF3bPsJadV",
  "key43": "43qXCFsKHxNp69Tbhs9i8o97BchpE3GTZsQ9wCkmRX4okyDAgsmQxMr4Y1YVToYyMdrC3QWT4uJKepKw4ZeiveL9"
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
