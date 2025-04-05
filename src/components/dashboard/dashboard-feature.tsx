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
    "4YSwGE4YdbQxZT6XfVVZRT6HKGNxDAPLS4JyafM3nNQqes7SYnRPjBujftKEij29nVADvokQ9UWndE8Y9t7as4kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjDdzVbyS9byBPpvZrwEoGj4WogFN3o5kZwULdcfGS6vPHYLwWFyiNQhkCj3MxoAnxqLEpkEf6ciQJUct9yQ9Pq",
  "key1": "kFCPgfbWK6VYKybvaiC6eJ2dYUs5Mk9GDTTgGstM36VU8vHyZ5H97tgT1NFeXyet31yH6bAnUK2FPrRhknJJRNt",
  "key2": "5zEALmrk3SaUXDVvvenFXsRTWQccB68UndMVAi3umanUw7J5sffgSzRjtwP56E3SRfP6KFd96gvh6jKJxsoTPASH",
  "key3": "5MffHWxNbiHNwMWdchwNbrpYxAghzQVprLaecYegsBD1VHFtjA7VrRAc6TDjkiqc5jcwA7M8bcyRwLi9R7rDY7RY",
  "key4": "3ujowETvbRPUqKgZvR7A7foSYd9kaV89APFxy4DjjNmnK4pkSRh8ke8HZ3fqjRaVQ6htx1KTBgpN3QyjV5cKkAP8",
  "key5": "3CECrCFthhdGjZ8zGSaMfyMR5ffb7Nrx6cHqLurioBUJqaELnRbidqU1DpPmpvpcEsn1HoRkS3ocvK31KyHwkrvN",
  "key6": "fDGvahu4RcPKH9aMQEd7K6B7CvsnyXAxHaiKq7Th9JFpYNp5toYBgsihC8WEmdz3NKYq3QjLJ5JwscEigWkK8GD",
  "key7": "t1j7qJCeRyKdZhbQ71MzsjofM3ULYynFcRQsR2AYGeCWAzytBZEbYY4dDfdBy8B7UQLai6ZDXmSrmcCUeF5sHGH",
  "key8": "2esLT1V357rcTUs1SjSrkeNvmd4G7G2nkSbgECm6mBexJS2xK1mLAW2zBWpUPvuq5vgkpurKnFtDirHGiA6eZUur",
  "key9": "3fqEqM9EH3C2UaRuGYGXAdvdmdie7K6AfdDtRAtR5bJ98A7jzYbYc9yZy3AXcp5sVnyEhfV5uCPC6LXfS4fsktFU",
  "key10": "3dGCjcYXMmaJcpxfZBUwMVbL3FcrYjTpGoHrmC7PcLuLP5TToyzJLssc1JK1JkCnBvHCzVScKfEw125j1qXPpPxp",
  "key11": "cXzdDN2Y9ddStNpD714ZuvFFfhCthX7ciFMfzt85LLiqcFEscuedy5wBJxEoa4GJtNE3Vejbm7mDLd1yp9Mb7TH",
  "key12": "5GVRMqLBgMgvEZe2zRjSsfTAre63zUPXCiVFgkeoh8P7ctpT98LtXkFLUH3vccDwvMq4fMXHVocHvtaVX8X4Sn5j",
  "key13": "28EyayK9P54aqJGvMxhGGp2u3fiF2uiwGJYGEo5PhHp6wBqMJwmpAJNXWPD6dkfxrWtt3g9HmDW2n34485z5GCUF",
  "key14": "5rbuHNgpE23rfDWoFrM3BmzgVpW2hUQr5VSaiLFshqa3XriyKzqAV9LwxkCnKQptjS7PZAD57PxvKmqG8xM7KWTE",
  "key15": "w9SmofRwYbKPGo2MCrqiKwqgA1XH8u5f3zg1aViq6QYUzaUYRqa6KFfZXgJYgY8RvLFKoApmJCGw8QMa5AMANi3",
  "key16": "HVyx1yrwYtyNdyXBnTJn2DH7ztgD8w8C2NJxYGTtQJNyLLkDi4tEM9yw7KqDn7tPmZ9Vz3jRfwEM69GFwpvsaXn",
  "key17": "5tJ5YKYKhPFzButFoKWcJwixc4opjbYKKBKQY3YQzN11piqxjWukipi899gpjkuvAGYCTgLsKErHY6cJLEeHUCKY",
  "key18": "RtWRXmnbFBJ3yY3HwMHxHJCz1Aws7vQu8duxmYsvNNn1GADyDtJtShgmb5fEw2Fs9PptDGABvMWKEfjAJzy3FUL",
  "key19": "4GCX5W3TxuEdt7BNow4b5kmfJMaFaWJwX1fCwhCEvn668WoPadecZV25tbeMj75Ui9vmXPHWJFgif9QShHTmKZCx",
  "key20": "3YAa4PqBBAoZJbax4JTQFnU5Mqd4t6jx8EeH1FadMEeTsab5w963dxi8mvtyQWH15i1DQDdpqeVU32kAJJwvtk3P",
  "key21": "5F1EXpPVoE7zGar7TzFko2uaJUbmpM8S4uFyTP3hCHPHWf5sAuiurmw1VC9HY2wUPqtTk2QJViFjiyZFw9PAhres",
  "key22": "2LcSrtEC3qd9JWvKZ46w5zJx3CeL98UfSv565RJdP3kSrq5qkcqqRw8hRd4rJf51ZQ9FBPyZuohJiGDyBskQYbjf",
  "key23": "4L2krGsdrcbfXAjGfmmAAtXiNtg3Bss1Um5jExfvBYYrqdY3dFwynHZiWw4gMkPEfkop7tGwVznfKR2CDjcJ7SCX",
  "key24": "3xsmgJsJBHkHcsNGcbGHNbFAcMWaL7SByRuRGGJ8j9v8dPBxghTf3F7vwzuMBMh1EkaHG2qby8fRHyJGzfAbbKhc",
  "key25": "6356rNjQptqEMmQ7jR5WdBdY1q7D8YXv8uTohkovZYLeeA1kG4guxg6akx1zDX1YfVXYufkYz2VmguyRjhG1YWev",
  "key26": "3viUJh3G8a2F62zEbCuTC5yAazhyTqiP8pTNkZBkxhZA9BBqhCqoFQrPn5YgUCAsmsuyHatqd1RBuUb9ZLgfJAs7",
  "key27": "2Aff21kv3Tt2DC5cDsAWRaUtEkoDeKYhE9KPvEF8WDerYpQVNsrHJndhbJ84J4ZJMMrr4e3nNwHwgwGQqjG92Aja",
  "key28": "3abEpoF1beYqyYpPmVCPjN7oz1SuLDocsi3Y9kiPHYFEfbNGZs4rvTdDYd6PhZDAb4AmsU2C3T9RZXuvnpeMDwJ6",
  "key29": "3JiVkideUJdu5mxdm1Jb5tEdnKEh9q7G2i4XT8N2mKukjuxA2uCCNnmjkTsbR56uphorRHCVkumAwugBJTiELFSf",
  "key30": "EG4sCTTyRLc8HT7wsVGAJeqgmcaW7uDKasbnCcaLQwNoB4iSBjLawDDZrhnjuR3XRY2YEARtnyTCkgtdYShE2qV",
  "key31": "4LMREiEgWvMZJutHNK84M9ZCX7HkteQVpUJ7NAxccX8C5NBkUgox2C3PwiuWfGCm2vxYNtG2aHnC9uFvZpCvv5ro",
  "key32": "5fj2dzMnvH1Pu8SGMszuUYtrsUjYnK47gCKeo8hFBMWp1yj6Smv2kHbMiMoP9e3CYXquzExgsuVqzmCGVXHWWhFh",
  "key33": "5Z52FmmLQ3xtTkm93DgKZVEG3NYPhbb8c66dYNTyp7uxJBJGQn2Qnyshu5krjQZV3NTGFFLPhPYp5RQgHwYEjpn2",
  "key34": "4S5VmkcEYS6ySav1A36DDGZ1MnbAcehyy6HLuvFM3jwJnfRtHQve4M16mkuEt68oLdi56F2uLv1bXHH9MJcG5QxR",
  "key35": "3eRE8LAqKq56SQrH7EbVq7CvhMExyqnUxo4A5VH2wrPmRzq5r9cjYpzPsY33GhpqPYimAdyHUWcc7batDkpV2cuA",
  "key36": "616EnJr2XN5RA3iNxw1goC4nU9T671c9sfXYzVZZTrUfp17aTt3pmxiTGXTNNwsNgFaFFTXpjMRuUBTEW4d8JAUS",
  "key37": "3Sq364FAFSu8HjxbTqC4twZ8uEocCe6U9xRAcWUmAgnA3GNJRqNLDREp9qjow7LGJT76tcWinkJA8ujohnyyx1zD"
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
