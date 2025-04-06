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
    "iFpvUsbCAR5PAeZTpT6ykReUC7FVGEtYvwvgF47KaVNLvi8pahZSJVeMc9vYZiKk4CFUqa6pThHXu7kNAADZzdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243qKDndf6Difv7fTfaocf3cKzdT1BAsH6iiC6gkxwbnUGJ53FB7cRBE3YNTTP7TAGSoAT2SZCUx1g6gvJuNd7Fv",
  "key1": "2XgCndMubNPiCmJfgEJdzCEZR16anN3cm2H1UsTd4VhsD6nJ3hUpxQpn2Mufgz9KCN6v8B8sXh38prjpq6s2hNrx",
  "key2": "zS6erYJYZp68aQMZtSchgVREqHN9vA8wTy73mXPdFQ2smkG61MgaRS7TgWsbA9vhuv8gc2kv1696NyEyx4jwgfz",
  "key3": "2mWk4tKa8DF4sWyqqBesmirzLoKcwcRKTbx8aZeB2aMgaLscGRVLRAzqj9VZ4MuLgfyRdA1jb2Ler5a6XVzvMSFd",
  "key4": "azjRWHxGrvgmPhjsmqZC7PTTW5LaKCkJFufabQB2JvuUAYXkmBw4AHvQz6m3NdTwgYmkZwrv6SM71QRFFoRrasV",
  "key5": "5LADAu3TGEBBiNAc4WL7WaQxRWysv4E9Ue7kqMciK4Ez5yag5Uy3tGMa3rnHAqpCH2D5p64RxJfkReuBUETJbxPC",
  "key6": "TtXR6uhR6tXZhTxfjw3qbfgaX1Jo6W1StyS4NW2YWcWkWNntVDrJzKAoZfVbWmo2yVrQYR5VGE6JuZLhan5HFLC",
  "key7": "2JEiBSZLsUMsvdwFzdJYc2xK8cpJdif36akuyiWXcx9D2iyednnSpHSvGmR6GRyRgctvexojweZszLyYkumFW3he",
  "key8": "3SnozFYGH5ELUZafwyW723ZmtaGuRKe2GKDmZ8BqmrCfniBo3rJCXjbbvwd4HzZPZipfReTkeD2HGmSdFDtnwoJT",
  "key9": "3ggDMswuRV8dfyYTmnW4jsCCzRVTb2U9vVujeT1b2MNJqWJp9fUgdVzamaNEQFTruNEh6KGKSURhQBv8KXvkWbZr",
  "key10": "B5BZZsSq2f5GMpauAsTfGL7ME1j6Uh6nVXrrCuXWVakE1xZe3ccyEDd6T6oTGL2CYbiwbRLTRQpNVssbeBDC3c4",
  "key11": "3to4RZSJqnHPTR1szUvyK1qL6Pqca1RVwthoZ9AUmyYUi4YzR6Qd5CuhoXUNiFoByJ8ynN5JcukUKwGXUkfepKeT",
  "key12": "DGNpsvvF3V2by9BDhmtb94422NPMqhiEPRNw4JcQk4uDw8qJmA8QkMPMLYQfBB3ZBai58RyNwhJzvJUuzsn6r7h",
  "key13": "SyczhL3nfD1ZxMsoTKyaaojFee77PXc6MC4CokJQbjzVJvNuRzJgErV59ZHo7mkA6D9DKy6eNjAZkGr495MV31s",
  "key14": "fUohF2BPvQ6kHNLVoZBbjgBmmtonhp7eHtGYaqrPkmDUft4wzDBwzLnC2wCgjKzaJMSMhXGE3wmBWUkufoYNnmW",
  "key15": "3MpSWP6TJTk7iHed6UfanbLSh4FMHKQkrKHgoSPTDEPpvP6BZ9SvPvkgxrjQcHXJJih4EkwYYYR2Yp7Dzo8uPDat",
  "key16": "64JFv8y5beWMAJ7KmhyZ6UoFWCWP3sHzY6S1yNeKvjeSKsCjasiQts5DYF2eBgotT3Hzasw76YWLh7VYb8Avn6h4",
  "key17": "453wyzTRziN4n1B49uz1x7HBBf2ZZH6mgo9efw67QW5MDZ12SQtpewmRAdkkyYrs38mjzESUi8sjmdEgJMoaZixd",
  "key18": "3pBy7uBkrckkuzjj3GYFfYA88PdC6iWtWnf8y5KHfcMN9v2Ur8a8NWEGHPdbxxz9G7pYwD5EzKXhZHu199mZFGDP",
  "key19": "3WYYYrv3QJ1Jw92URs5GdHnpYBxyQFVXWez2jR6qyH3hbefpAHyeJtMz5jMYVNqHzzfvvy2VFwHV7qzZ36aKsnRU",
  "key20": "2r8PtUS4y8T3u9wi8VYa1RNAPSA6jZBbhwMm3D7buqsaE1idRD9ttW4ywQLdP3jXgnRgxyMpAUc3r7bp3ZkgMaAk",
  "key21": "2akXcf7jJfNBg7SUw2qSeGwhHcJSp1iufhAeh4xTdH4WffnKpj9i2FgU1F7BQivSLakpH5wtFG3b4KetCYqD7iUH",
  "key22": "2TNbpvx48kYQRQ2agKXCFjU3zAL7ZVR4SuHrA1ZHrMa8yXw6pZXKH3ZGdUcwhikTfMQ911d5NwmTRDzwTSVAPHsX",
  "key23": "2LZc16QhfJpjUz4tLtwxkSFto9pHSamH53UXwLQ9jbjqaiZNZu5EFHrGLkRCY3s4Z3cbqoFf4CWLmgqtKwUTuLnt",
  "key24": "3jkrwWPqgjHPbe1cqnbAwoia9TPWr361JgcQEyrGiaU7J9dSbfxR7pSnRY6wofTL6FAiZtyo4PZYj213BsNwWQZe",
  "key25": "18BmKKpyRsxi1t6KZ1SCpoGFKACZWLKrLqkcmbuFedZQGZjwLAxPgyEA8Lup6S9Xcd6sjd8yHYD2VNXsaQi9nrL",
  "key26": "4NptsSz6UHBDSP4fswnWUvJUbzx14UUCxDC6rPw7sdEonXTnT68MWM2CzDNttzYb7B5JQkpqcEkHsLZtcMXwat82",
  "key27": "4uWJS37bFdZD61TCBTxZZnCPGVbLtYZnBm86UZq4oR3hb7aV4pUaingGnEnWCBsDWDf8wBBbxSk4Up8YWWtXdKrc",
  "key28": "5nrCvXUsNBeXzgVjtZVQxP4hkibeakhyH2XyDygXGWQPcHNqxVQzXn8bKBi1hZXRSDhzg7N6YT8pqM2xz3ZoadNE",
  "key29": "4313ugCK1P6xpR4K5iksiTUWMBh5YqUaLJkrnWd2aucmpdcwYLcVxrUQeTHQLdmgnJ21LFJ1hASwzS1TmKh2U7uz",
  "key30": "48TXsNiFS1q3EYPRVXfhkLkCFQi4oq7UDRqcQNX4UT46Ra7Dg9xLC2dShNf81jAPerxn1FqcBwhaXhGeT1Yxf72e",
  "key31": "4kgP9gW5c943GMnEL4nMRW9ugQAr5pS5T5EohfkLvR9eGWqoqXYUodKN5kbaxtkDyvBsQ3zJx1tiySN3yR8yo4JM",
  "key32": "4Y2PQgt4w9x4cyxPwmo6PQ5abxpkA8emevtJF4e8HCWxtCj4ZJWPKkgkENogZvHrBdm6DjReUi36K3fXURmPj44Q",
  "key33": "bMTrMcXnfG9VoXEUU5xjXvE4DsA1hgDqgmwohfiWm3stzMn3PjTM7ZB3RhJ5EMuibDEMjdEcTFWFv7pAZJcUv1U",
  "key34": "4LYkrkMjjJwn6qitPcZHCQkqzD7UdZ1ZfZbvEWMfghfDjLHvUgFf2ywwDtfFm9jbJmUFzS9nUsatRpEu4wcb1GR",
  "key35": "2pAnt7wbtJT244vraZZDCMcUvGQ51UDXw7H3RNwHag4kw7sUm7MU8h7E7cjYVkZYd6ctQrt11omQJQKNveb584WY"
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
