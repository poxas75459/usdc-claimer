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
    "5STwCCLTFsRtntWxvVthed2bKfWwK7VfUXz9HgReTYjKpN9baT2NMWdFWECcEWcwjEUG68vJ4oZUYjKNqWzqxigp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YFFamvViQVF3wGXachcu1bwAdFoQfzE18QzeLvJTSv3bG89QC216XWRUJ7Bdz4vMjYVxCqwrnYRdQZoWUWSHvX",
  "key1": "bYHq8BHo6Haq1zkv1P5Py4GFdKFQEdBjGC1p6VBva3Nfn1AbFkEJfoVD5wVSwXA5F54DGLPPDmeZxawY83mbm62",
  "key2": "4h3ZXfroEkXEXFapeuP1tfMC7Hb3p7MxYjT3UaBhLP98iFWeLXGKKLXpzpJMcxdWJ8ZRioUJis3Tvyg8in9ms4Vk",
  "key3": "91UZJoycujRjWpsRdBw9fwXmMnr9BqNu5Trv3R3ziCj11o4Ao156iDoQPdpKtovLsCEzHDE2ouuR8Lot3ZaKBKs",
  "key4": "59zQ488fe9YNMqZMmacpAU8wXjw98PFwXC9nbMaaGhBKd3BCnJiCoyxcFVWFKSejnggeRjC6fQs1Tn5mLpW8seNr",
  "key5": "6TLSP4kKnp4sXf1GddAwtRzb81LoNV6Rx2ms9zEwQzekkjr4pEVf1Rwft2tiEDb68D7dxCuVYg6RaY66vjeuNnL",
  "key6": "5r39ced38pErjFhyQCsbiAT6iTondL3p65MLNfjAGGjhYvsAiUPHDTZEPp2y5DA5C5figNjyiMsr7ZD9L6vKKryW",
  "key7": "vGiiTirv54YkgeQLXE9XBHRxSZberzNXGXHU7V18eKmcGMrAiNE7FZ3oJ2mZjKPQLmmSWZabYQRr4XWWPvdWpb1",
  "key8": "2kTTxPBACVGSjvqT8S88NGfBGnVxS81jWg6oy4XeQXfLyKt1f2FT3Z21zXFQXR1AG1bfQ1tLyzxdUnkYWnFFZt2o",
  "key9": "5rRCvgjHU51SQGcsDn7DrrVNSwgAW5o4nL9AR2U82NewaL54dBwMkTi6Gdx8EbFPNyqqR6U157Lgs6dB9QcEprjD",
  "key10": "xZoTwvJviYhSbKTV7iV4J2m1VWza773odVoejSD363uRuapGSbx3iesrnUYjpR2iadb5yRHjUa47qQBndt8CU6v",
  "key11": "MFeyvCmV3B9mHYJi8JEqZoZsJgv5pJwdD3hnLZVpbkFnCGrffb1dkedFPQUyBb5uknJvzo86rh96adPa4mUA3Pp",
  "key12": "2RKKZzjW2bywyri6QSSYuDJJoDLR6juFbuvtT19Rm18LhSAMKXJmpNuD9B2j4iZVMhjD71nzG4BjLfPjtxw8366y",
  "key13": "hojQjuL3ZpkvSRHgvpkwMN7aCSukbjWzkfAF97TWWPAs4vjpG1nHr3WDjY1iXHAB61SkTwsr5hPCPykt8eKZtHm",
  "key14": "5M1Jf8pMcTzJ7VZupRmWFZrwYhrj8yYR8ixDcRoV1BpcAuSGzQw6SJ8r3Hqx2vr6of8h9Cf7g5YyFu3YWHnAdZ95",
  "key15": "3tan31QhYdHwaREXSPFiTZGYi9gbUWNRT7hDS6gxLme2yyC3AGBMPEmyyUpBWv6T2x3RRZp3k7AhRdGgjcF3ZyMM",
  "key16": "3TuEuCoC6BbTY8j2MYVxpgWUY149HKYxMi5Dwza7DZu69fhVmKHPLR3miwEJjSS3t9yu7W2g16oAMkS9JTaGMDjP",
  "key17": "4nxsE7S8xY1oFMC8yEYXGsTFEVjqUgsHLB4yhR4F3okEwZ9ih1hkW4d8YoQieW7A3FdHkAe7o1ow6SDTMzVXFNwJ",
  "key18": "3GLtzm3X2raVFT8Vi8f4qc18CHL1RiWi7pK9zBmfzLa1xhCxb6zY6dFLppSsLdAms7xZSECSvuGpsRWEKZ6dNdND",
  "key19": "2W28jWRZCwiEXEjwSc2k6CKPpxdKJpYQDotwavfYFzyDbvqFNyHfWMDemUPRf1xzvx3ghdXfT8V7sNFz4NnhcmUx",
  "key20": "5ookMgSdhnpeUMXUPT61BChN8wirwrCBgAmyThkntxXsQsXtySoixrTHfqUxjYZeNev9E5S5Lr2FfpANuRCrHZSU",
  "key21": "3o8zsVvBDFsx8X4uz7nBKyNMXxrfp2bmect2mjcRtaLYv9aTGhgkjMb3eKapxsydUCSoXHJMZRSfv16UGwDntddp",
  "key22": "2KBAsNRPeNYj3cQ2h9HbQ469hyQ9E2FDwgJSzfGR8W9dCHcRyxWz8GLZaBPerDmy7AiPrQwws8RwMoqKdLZurUTv",
  "key23": "ZyZrh2QnYuyrauGewbMLPzHP3ikmVbXpfpFr6LARPNeRPDuA5Z62DmQzDRNEjjfE6csVmy99N1MettmRaJGKbYM",
  "key24": "2Hcyhm1rHNDgMF1aiWX1ned5WeMMMwuyrHY53B9zfsMnjD3SuCe2XjrP8SD6UvXjED2JPob6tXVTD3zBBubAYSj2",
  "key25": "36B811GTCXEhyLJfWc1kFNuJsUoX1tDRihthuxFvv54wuxP4TivdU5Ax7AiYcFcxbxaujeEsYPtouY5kMJAGvbDm",
  "key26": "3yBJvfYvKuaSULqZPa5Fa8VZYwr7FUbgwVcoo1S4zvCPDbp66ArFpkWWBG43RynE3mBuNEC6EUgkXZYYwkfoQrNa"
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
