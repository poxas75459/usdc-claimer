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
    "4xhYNFtrnuJqFsQ3x77CpRi2WTi5fgEqWj4EzPMBdmkkGfo3JgvC2WShffrxGxgzgdxYnZUSr4mPuNLEhQ9LMz5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzCS4QW2vwt11bfidDZV1Ueu1MWGyQhz7KSoGfFNDrd9mgsA54mAUbMfep92HVRjUaYRJWfSWoUCDAiM89BmiKA",
  "key1": "5y6MH9d5rn1ejMfcgh5B3sShM54q9qH3UKfdsd7SYCTHp4RR7ifcovT5oifARd5ZH3RToGEuYy4YTLMq9iN9jpVQ",
  "key2": "2ejCyUzmw5mfr8CRgpDc84gN3kdTtpu42Rg7HPFyDFZ7F8gf1GnLT2gWBfa7Swc7V3op52xCYpZgGwkUe4dQFc2m",
  "key3": "46KwhwjCQBa5gsMcVPTVpAuRx9t1CTiKPdDQFJq9cpaHwGcNLN6ijQPMkRmjCAJ8FKf5bcdMvSuUUEm1hpd2ZYUf",
  "key4": "5kR7xZeUht8fEes8fdy5QTd1cUuD5kMP3LbLBKcVJjF7rNDgye5xenKYUMkJAaa8YqK47n1D9743gqDUmBHfEhMR",
  "key5": "oL64zwFLRxAFH6yuyiCj1LwjjjZ4c9wvyVkNjq1ATSJWxNLDesUPE3CdS7YyULoDAmF8CtjZb2yLp3BvR97tBMg",
  "key6": "5xSXAq8Xno1s48QCk89qHvyQoc4LcgYaLP18L5nzHgVUPoJSGvnZQF97oMgR5WgU8fRb9JrbJFxbGp877a5SkZ8V",
  "key7": "5FkpCRPyRyQnheyAurU3S3AcRoRjrS2HJUZcuxdJjkfGQiqkPkznCVWkkv8kf6WtVGcvyeXyevsFVQLY3ruKgYZC",
  "key8": "5zY741EjBLyzidUTHhYYeNLVDdAKKwgKSCvvmFHFPRx4m56wUEjpxYBSvKVdoKgM2c5qhUtC8ro5ZLWzMERqQThG",
  "key9": "26jv5oct3cpHzR2VkjmvN7gYJ6iAm1iS7MPowNvnWDXFk5dFgi2xyFQFWh4VpHqF9EbieDdip9TcPpVB86B2LCSD",
  "key10": "efZxeWSrSuK7HzMTq6Fqe9sfFi2u49aJTMRZntoTWLVCQh8n7ZWMcDmWB1CnQTKhVaEBnXaHZMzrw7KeqU2uYVV",
  "key11": "5qDEP9og9PnJDdK2uxiu3WDMu9ci7J5Dks81R557RxdAqCqP1hYozHdfWwJf3SXQKABa5aHkwAZ2PeXTzXeK1Bex",
  "key12": "8qteSMybJLJxWB7yk1bx4Lf4514DYkQqK18NwYxEYD99oMSqxfB9fpZE9XqA2URd9fpZKF7a5mwA71NdquwVwoD",
  "key13": "e1bvhxLYzsTgofgA21zgK4i56Tbb5pPC14D1R1j2QAsGL1deQVXxQdCgEBqJ7VM6LBsAFx25SMxcJAG9qcgJauS",
  "key14": "2ZpizqmVSVAH7b5pxUTt8571EhpP7VmA2yuL255EDkgQbTRX7Gv3tCd3iJ38TGByzGftFYhxrE5DUEWdJ1itehBR",
  "key15": "qWg8Uc6rjzjmxJhYtdKd4ShwwMkdYFsaYg1Lmp7GY9W8zN93hUX5xHyNL7jAb32X3zXbPT4HFyYGR6wxa3MSDsQ",
  "key16": "5PPDwAbW5sxfFqJV96Tey7mjsjtDyPeQiUV5SbWJUkBGtuUFvCnrYztojiQYV9d535KABDP3YG2Z21W7dGsAkVUm",
  "key17": "4s3GVGJt2SNN5aqbQLdfmsBKLF6RF6becDWDZj7fnep5ZzWsBFfX8wqKcDEaboXVpLSKF9nTbPrkYJVvVrrf6fqM",
  "key18": "3JZgWYmLnLwtkKKPbVcvp8WobSGR3qCvr8qhoRw2ncJHa4yA77BNQrveuXkeKGaQrY5DqLpTXr7Ddme1fKZnghgh",
  "key19": "4GLq2XLHBiRh8yBXLvwrfjoNvLyuJnejh5Q5U6DoHJNMPyErGavnoz2QepD4Cb14keMJTfB8aZ2ZJuHraJzyt9kG",
  "key20": "5BwHk1u5sBQGnZEXjJ115tFyeoLxEydMw6kWnGKGn92iH3uWvr9pJBzvLBvzzrWvtd461gBtzc14FzGgNPGbXRwT",
  "key21": "5U5y93AtWiorxTZNxi9HcBzhCsz4VE7iqd1BmJEDcQiQJEuV5PjRf95zbt6S2XJWyELZAviw6VMkzpmEmJUy6gZu",
  "key22": "5vX3SseyaSq4D99mWpbTNZg8MYvaQMKCZZ5BvW4Yb9dk8UQxXerbhtWZ1qippsZAFmwbfFoYEQxu5XG1wfyTq8Cd",
  "key23": "5wJ8tRyosVrsVLM3uWEurjtPn4uDXXZW6np3d6JyNgs6PHhVz5UteCnWN6zM5Y77NMDqBnhqhm4MQWYtzL85L7TW",
  "key24": "41s4JJGKvkhyC6VEDKD9rVi4U9ku1JzmBsUZKBR6BKSTawpSHEfuGtCXf9DTLJB11jMaP7UG4jCD32XR7Qdr8t6C",
  "key25": "5tK2koQidFRiHRpvbkH8cuncT6J8NFUAN2jbvxx6LiFVWt9FtMZPdc6RSSde9m3e9DardJpRjX9Q1Bo7ukEPgTng",
  "key26": "4mLjevC6Lhv4z75ijv31CX1EuGNnDto7KGTxGPnzkyq24uRyMRPpkRgfdSq36JNNV2s1GCWf5YmMKYmhQJbDFmvD",
  "key27": "52exhQm1McCckBtHJX48TBkogeaCtjx1E3vootKncAnFzsxDjNmQTqg1Ex2h8dm4snsU3uxy1w7fWsTvQn2VGe1Q",
  "key28": "3ajEnfBotxCKNqjfyTcLq9SuYbbLjBvoP2AkfCjPd7Ta1TmoaBukXckdPUHbz7UGsSG2weCoUoRmUEKSxuU9sQ5X",
  "key29": "3yeYJMDLTBCwpA4bnkz8JUWCmX7m7rZi4Y1Bjud3i1i1gJiC2VBrnpGe2rmnjx2cbFKZbwdPjBP94PMSozmz3xG1",
  "key30": "2E9xR6opTn2AGFtbrHsgFMgLm7MmV2Pg1p1nmqnensNUeXcdJzZv5D9xGwXymkBxDmh6GLgmbGvTUQGv4KfHgp9v",
  "key31": "3dzjW334ggVjRWx64ynXQbgRscAkdzi47W36WakbKH1HxPjJTfzZua3L2Z7o38TMRFuC3EKoKAZayAbHuSD3NRNb",
  "key32": "ysxrXASZiA1WXKwwRwZNmNVPmNb7Ez8Kk3m76PmsHVhdmnU6vGVmyuhsHMX9qbZp6PBBxF9WsAahB8NzYNCbES7",
  "key33": "imULLJCmazuzSx92Apss59iUbjdfD6xmViegiRajib8ZomAABgYbRDVHbtaNE7StAKWxYR4NShvY8FQkVubTJUq",
  "key34": "29wnefrSMxg2ab8rXHnkc68mnyjXcfZzkeH4PazxL2fZijkgNrkLKouqKC2LEPDSpHBwQxGrCATJj6TMaYUxt96n",
  "key35": "5wkD3vSEVVxMHXedR1yDf5oFCEgigoHkuEeB7P45P1Ty3G5mVxePRAJfs9c3kKc969nr6TSnGytUpehz4PjRGGDT",
  "key36": "4tsg2WDZHzrnzHTiNJRXHEMWir7FcnP7J21uvRAfLVjbiY16mBGVttqVn3SfLGavFt9hGCztsb8FbsuQVGvVg9Bk",
  "key37": "48xt35MfSyisUsJC45LTSMkCzCPmd5cefyHkySEQ298WZ1skQVtjv7n4jsEaXH6UTDrFBMyYFNTxsfUBg5BZjRRF",
  "key38": "61rLyHBFr2s3HYv3JTbStddDJZPBf4oCGZegrsmtZezD4YNMZKbBKjWp4fZGPE2mHUUkDUuRqrpQEik3114iaEqR",
  "key39": "387icSNe2Nu78ZHgHoR9PkKfXjcuAqRbkuWPHjddx97zPVwvr9u8guehjASAnp3FS6aZShY3oF6mLb53sbW4ohax",
  "key40": "5gNErWX5FrUKeXjBejnydKYnvF4LJJHhHp6QWTdgaCcHq57n35cNnbqP6fhA5hMvPWP4PPmXE8B6UxCTjymh4cjs",
  "key41": "5Q9z9hQw4GQBJzdF9RjZWNi3zTN3Fva6jDYn9Z2aSjZ5FhEs1N3UCxjTjryHFdqKBU8AKCBR7XtvhJbPNv88icC1"
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
