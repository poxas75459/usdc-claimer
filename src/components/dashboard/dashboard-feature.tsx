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
    "3r7qGhsPQvqENAwqNxtia47SCFnwcFZgk5eNLnmWsZKbnU2UzkEPt85BM3HNAo5phx3tbskZUAkwwhXqA2qP5atQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rREKdFMwv4Z7SRvnMiFUukag8wS9jozrjmkTHSxbgMT7kJHLMU9BpnJiRksTKiF2penMZdT4TisRrDDM1f9zbZ",
  "key1": "2EHvbAHaNGtb9gq6KNwjg5XXN1pv9hk8fLvdfXcJLq6DchsqU6JuzttWwaxPzYk9z3rjGUSYTKue3yaE5vPgJpyu",
  "key2": "CoeyTJZvckTypeH4apJtmGh2H3QvApvHEZMCTqnVF9ykb4ZHBsbwjirfLeMN96182qDpCc5sxxv2PA7BP3xDe6R",
  "key3": "4oDsEUVxxvrs7V2fuLShte47CzDBGhkSrucxeWUPnkP96bh5rMcZE7WKd2cvMUr1U9LrzoiNg3rkNz5FNH8S65Ug",
  "key4": "3PbiTjQjiWAfsALMagC6aAvZJVeR26mX1hTBQViGScZMRVZgV9MnBEfkQeAtwAZZp24KHcYT8KE6X1iNesCcPFwy",
  "key5": "51HiBpuhK3NNKsYYuVkyh8h4BbZrmQPkmSf2VDAL9aH9iC1qcL9obTZBvLx6Tx564mF7P4SVJzxcxyAScjyzuvJG",
  "key6": "4CzjDnNun5Vz8V8EcdBF11fqcREos65aaYfX3sCEHJKombSpWHnTS1bU95BwN5B8adufikAt5yc57QLkG6Qs9mxG",
  "key7": "3iuEX6kN5asPAw7bpToZtjfxtwVoeWus8VydYqKQ3aeYp9RukLxfv43rNygmZ7y99cMEWPcSNvoh9geB4SgM2aw8",
  "key8": "fVXRmW6CyqQANzgqX7f3XTRGj3reAh8i4N3xZfEBRoY7axjyQBxGBVoUGUEWwGCa5Fq2BEV3MNtQUZDAUcrSo8X",
  "key9": "Ppa4GV9RUi6pdRp75Pked8Y2FdHBXjJqoKcTq2qhJXq2YN8RSzfu6vV9G3dbvbEG14CX3AGA2LJhRAVgWsfV1ZW",
  "key10": "3K9PQKGMgCPbkHFgBSjzQ1RUNkCGwSs4xKRk2RKVpxjzBK1vrJhivhCdtsMNpx5EJmZkCqmv5aebL2Cf1f8BPaK6",
  "key11": "1QzxuJfWgvPQU5SJ8YE6z4B1v3xdBfDeH1XggmkhWnZ1jPxAzjdYqtyB1b4UC55ABqJeLFrrEDYQPtFDzXzr5xZ",
  "key12": "4RZ7BJxA63nzqwt5LgZhqxo9QUtg9BqJeGvYEALmTSwf8k3SXst4zGC6Bgv5rWBP4FMneuPsovUXbHiuYoPa6z2v",
  "key13": "3KdDrz4FLZHCFAfbW6W519eWaiCKu7ruzQSbMp1PkFK5M75ELE9PVX1j3PqBJ3hmpY8RmkgB1s5XxDBvu4ESJqL1",
  "key14": "45nnaed9WnaJ54UQ33XMPoUdcnyrXb1QueBdcp6QwQNjbtgC4FJ76825xmfcWcAw2a8qeiBHUHZsT78t5w3cRoxK",
  "key15": "2h7vjaWueSbwMQpkxU9Vi2qNYRwRP9BLyW83XKPJqqrQKZmEbWFr9iTmgRtYqq5mMh5mdAR1AgZchjgysSRbA3Vm",
  "key16": "661EZ2uapXjEDvgbopQoK4c2YKS7f1Df25yPrmNwzHxUzFa9tPZiLWJqFBX1jsDb17uiw3wcmzGLZnNjHLM7SNb2",
  "key17": "5wmte4xiZkJqS2peiH22KwuJJptxpcKEWATifFqLVcovvVrtJjwyv3DtPT9fLM9U62FzX6VjMo2dV3qjQJkaaCoc",
  "key18": "54PPknnNT1zv9eDbKghEpe8LKHrjyN9HietZuwfcha5jRyxfmG1uNmXUiPirT7rPP9SkLM5FTUE3VJMMzJTkaK76",
  "key19": "32W7PDnxb4TNFFtSQJDPmnWfuRCgRua1WVy9L2wpWTgwqNfiMncoGSRcPU1zVX6e2bxM6vbvZgwV5vi8RGV42nVm",
  "key20": "4XkEzZKzGS4wZ4nkzBJ3bb6c9bcXCdWCYZJkpWtR2HrXhzQ81HFtyTV8XZYvHnamnzASDhQ8cEFxzmr32oNuP73Y",
  "key21": "2GHuXGgfcjzZxxPwHi7Axu6znT3dyzETNgicpops4Fc6jAn6V3ZajkPr2jSY1Gihhqwk7dUncmDgS5bbzhAVnqJ3",
  "key22": "3UUYim4MqZucrLqSjjiNf61PguVkg3YKXn3qWENdk8B2A3GRo9Yj6NstGZ6jDwT4EZaRPeBs5WqPgxddD8LGJSnZ",
  "key23": "5jtLd9ZnpZ5D1NYM1wz3NJ8ufKemY6GDeU2gHfwQHqktgZTaYXJF3p2syXyAWCGXPa5rxWSjfSEH4i99UZ8oEevV",
  "key24": "63LgCmMZLXbSinH9FwKjBLsKf3nfubMeSsX3piuUpNTUGFtcUvV5vCmmYxfSQdqEnKkN7CSZWFMS8SDUcTf6ApxE",
  "key25": "5ovWKsGV3nuq2VYfxNMQXWo8LBdzY6L3yMGGY3WDxeAxk4LgtDhWH2taHYXqfwGVMezMP8RQCTiyQqfNKFo98hM8",
  "key26": "4GkkecRajav9rfQuJZpw12iAM1Co3HQZ6b2ZKb6CqGFYeytqZQ2SiJMq6sscy15czgbP9PRqQqWKC6vPzz6Fcyzy",
  "key27": "64JwfbhDrqSaD8GCe4qx9BoLsep13VGsmNNSKVXev7CkXwDgbfZ7Q89B9dTSV4Q37it1YPHZEWqhVx7L32M63YEk",
  "key28": "3fz1xiP26PwgKxvKyqpZAgB6uPYPCSHBnfMQT6UvmtZ28dFBARxwneUpi8XeC4JHWfuPN8a9NJ523NgkUbD4iBTb",
  "key29": "4puDUyBEUboG2B8wXk2zsczRXtb5kkX1DDx3qxfLuzH6x1tVAk71UgbiAdTk6fCmLncRR4KpeySLtm7fDGcRzqzu",
  "key30": "61Accp1kbdvycYPSBYuiJsPpkafHoyTKz9AsHgpBWRdwBz1L4LpN2VsA2mgaPKX2rojZ4Gm3JQFsdTZaRMJMdYFg",
  "key31": "2G2DVL2XQYNpWgepcsiG6ixHyvNdw5NqY5wEzZEgQJY6DtmTtEb6ac6axEGgzBzwkSafJChKZGs5LjZdgm43H28Z",
  "key32": "5p3gyWAp5cezZ2REJCEf1xzSeCTXnCxTNffvjBqXFfz3WgEMxyc8x7rvwEGDYWZDXaznehGVF8rJ5KMVojYz29Sh",
  "key33": "53Lv8NLKKYoJWzewRnYvXWtZMGsfrDe73yKf4RrhQXzkGD4d8b7ABCyHwSFXf4xHEThmBygtpsUCHduCBH9FKUuk",
  "key34": "9ccY5Lv1rx7BmQJZB6n7X53KtcXxsDzayP1jrjKb7p1dUQcgHcEarpXfUevxYNt7spHTzNoQ8MAh6Lvr4sfCiXC",
  "key35": "3BZJLtQbxVKR4BAMwAU87Ma6DWpCPmJxmPCZGRNwBGnt1vTaPzfozMDBCg9ZiJtEKMpapHJCFUnKP69EDL1bMxr6",
  "key36": "5TVRCbrccgr46C8EJZu6yA9J6RYLzwfpFuKdcirrdAjH9HQkZbdL9TzKBi4AJ7Mqd5ANNWUVuYkpWNsNWzLDqZck",
  "key37": "4dn1EToDhH8qZfDiHAQSSCpeTc5aVVUeuskotDaZsm9Wg5xgNgca2EG4ZS7UupcAw3hzSznDTj535D3mHRwy1BHq",
  "key38": "46kLfnYDmtrj7yJyPt7ZaMB7ZUGRRoukrWWhBv52mU8knbnNHrvSvkejePoCWHy13dxyhZbuukYoPeHd7FUyLwbb",
  "key39": "4N1tnocm3f8Um3ibChGpZXsJz9npDAggCQ7Xyd6D9pXfTitED2qLa8U5rfQDU9rxrQuJ2YsTtkhgrcjbQ1pyJCbc",
  "key40": "QS7KS842qXa7RpGgCHd2V11ATSBenx1JcHWsz9h8aVnPEDmxMtBwzpYqiyUkmKQZSrZPoVb9w7ybaGNE38NdZHm"
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
