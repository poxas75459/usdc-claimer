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
    "5PaLYDNyYTgFxqqgWwq5RTA9HxMtgQJmJJUjo45yoL2BPa8y1peiuDQWepNoKHi5orLmHVAQvpJ3hHVR6eLx5nsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihaZRZBR9euYScgFPb89ipJSUJowyHo28T2DnGbFcVAkBzpFTsLC9GoU97nbah33rcNjPHoPqMHy5sS1eKFC4K3",
  "key1": "3mYqdvhQwAkhYodvQqfWXq2d6yTQ6bfJoPVsZbEmawv28474K6FLPH9csjBofy7mNDV3XN73CuPKNZbrJqMg9vkN",
  "key2": "59RyBysCmFxSNQcVNEcNjFovyaoM9W29aQV4isrbtztSfCmbkB6yPSkWgJVL1o7CchvBiTgraEUeTr8kbac3X6es",
  "key3": "5PagfqLxHKiZXy5jNSL8LwLyjyvCvFEFpxSCCrdnwFt4KXTNDFDky5HgztCfmKW2s7d7gwgC6TJVynYvkXJeHVA3",
  "key4": "2TM8VCQayrCtYf4ujrs6Pr7kefUgi1FntYHg9LqpGWGmQRWvxwUnvu6JsCF5znnBaqnzPhTA62YXKkPk5BYzoBdb",
  "key5": "47cJXFkTUUnzsjgJ8cjxpdSGBdeNDhUU1g7YQ3fcHR8HWVbYG74HHmSAuACHg1zJov1Px8GwmjX1i1o2eyJUnpW",
  "key6": "3Qo19RbHNoexYLFWAAidScVzAX4rwASrWHZWcd37gBnNsnsCnaQ6sCBeYyXQxrD4pnuYAWjNjnWKgJ48kXe3HkCc",
  "key7": "WkjQPGzrE3MgpPXbNw5Akt35DwvJg3TU5DaFzdoq28KjEJuFn37cAbeCfPKWpsf3PJM71sxDf69cw3Wb4WeBvkE",
  "key8": "4hJb5VsJAigbkQaGfHrzURL8B9oxR1WvQSkMKsbA32ADT5Fb7LCbP4CbANDC2NZHLyaMeKs6cpPF6e9ouvTMDvpD",
  "key9": "ZNYtEbQHhcSXijyNJW4rpFhkGqzXuRhM754VYtfoDAtR7MUERAma1rtnVxCz1t4prpFCDcv1CkhxoFdJNX7xcsA",
  "key10": "2wCoK2KBVtD5tbe8hwht1pRLx7kG4nu44VDRxkGBmoiaBEX8ZGoUEWDkj4bd39Ldv1R6rhPmtZZUzFzQKiDSvxUP",
  "key11": "4MywepSgpxYHno4xoq4FTjKnvztcYVNxfPQo2dPXybuRuWew7oGJP8uXY6kNNL75vr6Hyf8JdQGcUYAZeb4sonuN",
  "key12": "23RzNauuymf9FBgUV2RbtxQSNywCoeir8WKHCacatF4Q6p7w3ZCUN8efV3JiD4inYLRY4bTfqBbyXAdWUJBtd5mB",
  "key13": "3pEy9uY6AzAhLWTKHAFE4TanTFitVJDRzv6kA76PCAK7Le2FYZAnffB4FPvf1YgxT8K484gd6PVjhZo8kYYNTGUF",
  "key14": "LoyDEJe3LGyDVDhCxFdGR2akySgykdWa5nXdGrnEpWZGWGxMcmZpBnbGAjqks2GfbS4km3gVCT5QQqyGUPPiEDx",
  "key15": "5FkM4Nupno5mjQ7ZpZ1Trdm7dk5Aj4Tk187u81fDsuXodJ52cspGAQ4vW6LVrsedQ34PX9q7XXWXggB3uVst2WN5",
  "key16": "3rJ6iB9Q2rUgjE2okDSovCTruiT62o6LBkXA6cHFFg7UPLCsYXu8ax7ffh4zBmRx52B8qD1HHafNsDnNV62mWNmw",
  "key17": "jdrMMX8n19uaWvU3XFjjXJcg7K7f3jWmdycEXki72oNWUFZCJjdBbGLXNMDcw1iXaWFHpEqD3aBrjaPfNxBkcdE",
  "key18": "2bBBUcYMXJk3u9fs2yo3rEk3tDVP3zjjRwgxYcq2nuhHbzsu6qSWcRcppseodqPJHTQC7RxovhZ7ogFGNog6S3Sa",
  "key19": "2RyzaVzWievs66LHioYdDm8HiFQHTctQuEBNhk9W7n6ddHekHbwZKZXmoe2SLGq4XJW1xbTdnk9fKwKEfKUcnF58",
  "key20": "2uBZii7Pu4u9qq6xbmHqGemk5NKSWXnkZDf1zM514tuEHyVx3T6mEyK9aW7WLLiQsfKihfQSLTtRMwGLcJnG32Kv",
  "key21": "3zXMtKi3suG1KuvQ7KWCLGJYgDCyA5aMYK7Podoys5nL8n67UUZheS6LKvQS2P627ZD79rTnoS4jQ2wPBKydH8VM",
  "key22": "2mRSmQYbF7js4p9MZfW6wGuxRBnEUDb4ZE4ctw3AhKTtWkwoy97cFsvxQfPCEC6caBu1UYuuRgicjpW24WX9zRN",
  "key23": "4LGyFjp3CFuUD34ZQjUTvPdbPhaAzDVWf1eumM5Z7waEDZsRYw1rJFkbR5C1n5wsKPVrjnb2LqhKg56QwguQaYC4",
  "key24": "5dWTBVBrVnPyRBjN8zGmLHoiLmNrY2sA2CMe1JATC9UeC8sHkpSKfEnxsJCzrkyAW8X72gaupDuUW9bJrPyhNFE",
  "key25": "A8pLNoEauFKecQDiMwdzAkGFKKn7DjBixnwUVmc6FgnU3vzB53hCTjwPCbScVvituNDuCPpPCogzcVXQzYTF2hw",
  "key26": "2pzA1aciN6LeYe33hjWXYxfRhJLMN68F7SenyY4Nf6ms5Arbc5obePBKKhKPng1SFQzwyn7TsUiBYfeiRX9bkuax",
  "key27": "2tUsR3rDNTwaWVapiWnFFFWjFs8rfFWEsyE5qEZVRrhV6r9fdvDxzyFdXDBVfXgRfRgBbVAwqn9bSyFTpPQke4MA",
  "key28": "4ndjmsNWtthZTuT6Jfb2bzsKwX45u6qeQ5TChtSZLmQ9kQ6GmXgv5V1Fj7qP8KBNkaSzqvNonTHwEM2Bfdzgi5Kx",
  "key29": "51MGEsVbMctxuSWD1Zb2GspaEZ5VSiE3ec5WozCSFXrpoHbSZjZ5VbV2VTq1h7c6n6oVeXUMFxrXdzAu3epqjVfF",
  "key30": "3WAtprs3uRezEaf5nJBKZN5ZwhCxyhKg7Z343JmFVwPfnrAYYhvgy2mRTibQevndrgUzxaTP6CT8z3cN3oKHhNiT",
  "key31": "3XNUg1bHYyBmmpPTakSNtcZR76k5JwuBwjnh56NR3eiiuw86Ma6M364DZLdLepyaQj86pAbM4yZhdtmVTPJyBMvo",
  "key32": "3sRfYgpyhxzXE8EXScyKZnZr9xoD8SqFDRzpU7jrJZDGnvsSJ3vSthZdaQt1Nd9vrySsQGp1Fy24PpjVrkeHB95d",
  "key33": "3uU6b51zMxbARrBitR6fQEYkP9nKc6WiYgRkk8Nzv2DUMP5rjQVb2rjhJp5UhcB2cJU6fLAGFEZBk8gN2KGXxDaB",
  "key34": "23Zhjgto7TdSH7i6SFUg6bvfh5UoEXWiKVNch5o68xZ5TcfcsXmp7otvNHkdcaiSTc3uPbGU7ffrPnYhxiBjiuz3",
  "key35": "2cTL6t7ThiQc68ABRcugdvJ7GQFHA3PRmfuoR924PbWihbrx59DjxmgduAAD3gqd5wKfqoNCSgnUUK6VkyJgxbYJ",
  "key36": "21Cvh9Wu1YuSv73ojBh15UQwzjpXZVXm7NNsHeew2CVcESCrqWjZ1E5j2F7x7tBy4MUumV1Ve8hTYtSwwKhX6ub9",
  "key37": "5JYFCrk1MdCSYX7naG3xCJ3Sfhx8swKKXbn8zH7FQ2VvrvSoSYegfKNxUZDrhbsfv1HNswmuPepGmWM3ERo8EbEA",
  "key38": "H58tN9xPhSD5hZFMpj9VMbAtqmqzs8mUVqVgTZAZ8twidZFiszbmu6jAufiaAFUum8YWKf3eNys93bA5EYKPvDH",
  "key39": "4qsTVi28W7EegYTVnrGA3uQZ9ioCkPXWFzxFun58Zm5eGQhqBX3URSgdqxX2D8Aydz7Y4pgbGS6tWQnquZkYCpTy",
  "key40": "5aXhb3w3ukynTuzzBnMsHx4wKbBFvSa9eu2ctVxwrAudx6bRHp4cKFmYycDEGWxFSaXwwTiCnJQfCi4kFdEMkT82",
  "key41": "bjisqTwsQtecXr49ntj3SQK2D5JaTPU7HYfSH18irDxBPC2z2FvUcYssd7AqXd7yEHm9kLSTsZXXSeat5BDvHmT",
  "key42": "2iVGkdSXdXn6J5CQe4sWrH2E8s8D6i8dUqB11qYu3fU6KnUXPgtq49vdajwAyicLqSEAPJDSo2HjmKqBeHE8VskB",
  "key43": "3LzocYTpd1EnV5rgaDz8EjhztuZVfGiz1CYEBaacVwZ2GNQawFN68qHGaB5qZvtTMpiBBGZgpAxL4StKB7T7z3oy"
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
