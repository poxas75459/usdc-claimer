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
    "5KYxi5ETYGryeHio1AMAwky7D2sg1SB5BxFMJuidDfSdLhH8qkKS3NASaDu76e26fKyuJBSwp3JPvsXHZTdnjQds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtzMgfUsB7ZtAWyJrXD84MqhbTATAtr8GxS2cQt6GeCCVvhe7HjdPu27EujkbcfobzrbhtwrPXEVBxv1EvxCh3N",
  "key1": "g74feYswpUvHnzBA5sfjhEUbTP1on5TmLWDoLhZH9zVBTEEmRFiwCYhT58FrUv5bDzxR1fnGdoVFEYTMQpFb8kX",
  "key2": "ULDt2R7wyZttckypX9kxogdrQtvdBvGvTDdhD3vNRg3akgkSZh5Q21xxu9vVopmnSuVLwC6GK1tu8Ketatq2XJr",
  "key3": "3NECY3spB5ETzpxjqx8Sfx1JcmCx5X88ni72ng2WYEP8PEtHP8oMoznajSF5Fs9KWqhwrR5greJ8vPs9KBG8hj76",
  "key4": "3tcrDewevh6piSNyy3EaM1fACuH35nBdS7dhmpsXuYatrcCfbvdg4qhAoYeUN94Nq9ppUPkAtYFqYvMB91HAT334",
  "key5": "5rsXdnqQcN34xwGFnBMbh7uzVRtbdy3aLF3hsAVcUnRbv1REG8Y6WyXVhdNHpC2RQCdrojezXB4wJhH8D2jH4cjT",
  "key6": "TRRxnCK5KNvxkPDERSY85JTa6TcSJ1RFfUWNb42ZyNtd8vLn2SS72vhPCZ46jtEbJG4RrWToR23LJur8hZm74Xz",
  "key7": "2C3bCarKWw7zW7RSn65yU9vi7uWsr1bmSmrdckaPJJHiL9fDr4uziAu9KkMq1rooULD6XznRnjEbZuoiivsLGvZ4",
  "key8": "4WZu66MhQHRNSHpYqF1oS2qSBuRHEexKmH9zG21Jq5bVD4Aog8aKxSAyNt6bexqfz4senTdw3Qh5czYYykXHTTSd",
  "key9": "24Bhth12G6pZJLEACbHZGKsCHXiW6quAJopGig9wXnC5wE2g1TY5GeHj4HHsZwYNUtkBeXWBMJsc6WJgc49GqY16",
  "key10": "zEEPMoYq8dmCVW58J5kFiyRVWTf3PYsfL4oCspjuD1bzpeH7oQHdu2ZXjDC7iwfnDt1kmuYxLh4DLD6zSP9gTwq",
  "key11": "43j8mgdysdBFLTXBmQgT6ZRykgVLsJCeSvkxYA1Mwdyo2zZSmjLJF8yCYJ69WVjNrXn2nUim7634R8yW8yohXtvt",
  "key12": "5r7cFtyHfJFZxr3vPfNY4WVPZhi2qX4sWRQ2rUgv9j8tpzPdmjzKAYUZXtmbzDasfPyMoBCmwZVj2cZdqZQC81i4",
  "key13": "25gFhBpSYSDY1V9FR6KYJvhURpTRWLyHXNah9zUgMUct4v1P3aFpxwqa2KBZh5svwiN5ostE2aTV2b7ER2a8bJxF",
  "key14": "3yUC6ftc38g3ydEWmPHxHSozq4EVxboUwV9UF1RCBPCWAsszvKeEDbfztTGzkEoRjpoYkhjzPnEY1EHUZuKEvETo",
  "key15": "3bh83aTKBZNpratVeqM42fARnWv7v6svB1jfHyE6rgNAdrDvgQtpMTUWvC3af5N8oo4bJVBi9cocwM4kKEjxz43m",
  "key16": "2zM8T3N5HzVCsHtHpx2d8jR6MP4niFHNMvT6CnwjHUHGAYVRtKm4ZH2rvN6hDfhnB6ctrr2mfRxBm7LqcTW1A6So",
  "key17": "55WABaqvELyq5MTnmViHPtnSxACPo3XPU34F97tCWhjrdg2VSGoiGTM5pCMZhNYAhA3DU7UAch5j6ZcaYGRZiMre",
  "key18": "2KuEtJGejv1bGpT5cmYL3Ze8wFuntteyDnJv9CuPxpKdJRnh157PeP1sy3tPH2zyG61wj3V6YRWbaDdyGwPyXWY5",
  "key19": "4xUiaWqRh1YsbJ3TnqekJcjCwPy6JE84GUVdWRvHpQhoDUxbsSkueVBTYrTHHpWZ9oo9dDXHvt2U7fGEZSXa7AUn",
  "key20": "4TLgcZz5jHbX2SNEWKhoLxMeAKePesrWnxncSa5iR4eoajBPCf3QtWmsUS7hG97u5mZQRrEVgERCw7qDWU7PJDtw",
  "key21": "2kqd7VuyWjec1GZFaFQrb9e9zRg4ctfvgxf3PeNkYJYDWVgfdSqKsxdnCg7rZGC1Xf4o9cN5naTbsivfLmznunZF",
  "key22": "5Hg6o4fVto2xUdWZSJ78qqujpzB2X35EornGeDjkreUumGWvK7Ap81QfXqY87VYcitJxun278yvZVQxKpDaazMGd",
  "key23": "2AnGy864APsdHDnNQKpeoN14kkEPSXzy4jngecvwGNSuR3mYJYqhGmDGsxXt9YtADBa6mBxc7ZVsW6NSESNtDbJo",
  "key24": "UXHPU6jGPiUA98nR7VtZVED4VhCjqQuaAbuA22R2KZ4w9n7VVoahqhXA86rzoHvS5g8R3T6qf2mXTcdt5PfEQ4N",
  "key25": "nJpPxtjbt1TKfomYbmJ8yNEr7MKEGjE182kPjzXQEBv1HuTPEqESSNv58yMyD8arrJPy4HgURJJSwtMcwzn4Hoo",
  "key26": "Ysax5PtUxQZSBQJdkrU5SQGbKRZJ27ZPgvNNmhgSGM1BGex85BrUELrQ2MZ6Ct6npRUWknz6ED9DxUZYhjjvJhk",
  "key27": "2J9gLYESB3imVi3incXx2jDeDQSCJ5FMkQkKeKfP35Ni1yWCocAf3orMiaVbBzgZAtiu1cuQhHJSF2dyaecYs8F4",
  "key28": "35oU46CaUrYB2SXzdftbRbjfvCdATa1sEf7pAv24WkCdh9mDp7KVdKvSt1dQ8MbCnpdaSwLyNGzNyGDNYuPkAZj1",
  "key29": "4p5VEPKuAYpmfXXSjSDZc6L4PeGGzgmFk8uw6hVtBiu1GfsB9DMQNy47ngWfG8uHdiSQxTXbq3hBegwZ5ATru63Y",
  "key30": "63jKY8Fv3tYTtu89nbBwvV3fg1ZX8ruGES26dGP7cTFMF5BfEGG9V5bj964vyTso72vvfKx9JTR6VS39X5tuUdCZ",
  "key31": "3ow3YJP7fvyaBQXcGZzmaAuA5b7Pkxazn4DiDXP23ktaQHT4eH4RPqSArYtUH2oeLbYavxbkarmALPUumNuqwAzv"
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
