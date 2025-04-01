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
    "3h2QdYwd8hzCJ4Vsz4zuihhLLeh3WimwNcFTTfVgmiNKqiYUuAptXA7o9mSmgb6HE5NoW5WkQHcHCVBthFMwHtmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6XcyedL827h2GiQwvYjquSXiAaUVFUb6ivaSd1tTZw86kWKdbcyqM9mpfUkGdqHJV1ubnZzfqUGSp169xURQzj",
  "key1": "3duWek9w16s1GChGYkdoFa9R6bwH4TMUh63QgKU2DWdvsrPXSNdqt8ajhjw4MhMtz4Ekmyx8FZEiC13YinRutoQu",
  "key2": "228NBwAXZK6Ad1m2Enfy3KLHWC7JKJUsFGm7XGkPgoCLuWFxWvjVCGCENr1sAMWUu2somJ4XnhAiWX2b7GWyXgng",
  "key3": "5G4MXU79GabAEvP2H1m1hu4gco3Gcn1HdLoq6oQaQMEFsQcUCSv6PhDENEzFcnkdEkehWVJd8kPjAtp3JRhCfftc",
  "key4": "4jko6xtXkG2cbmRRxxHbKUgfRNjB1RWJibLzojCRvX9tbTGWRYTqM4kheg5mWT7cncU196RL9ZzBuH84Wc3LBEgj",
  "key5": "A5eaFvgaYFwMvTjntganYAwtNP23R8Aw9fGgKs2e5sD8fFgVPpdtpjh7ZU4R3ZUohhkvZMVPB9uAMrKmR24dCAs",
  "key6": "4Nptma4eN98PPZMGHuRqXk3CZKFdamcFGWwwegzZDgmEFwzqwdXCxcVZzQsx8bqJAQgtrbkJMpc74uzewrXhBpWA",
  "key7": "55iGnNgT4PY6J4je9SvBtxcS3KosV2HuXoVPb9c6FnBbJY4TJtC1u22xuXzmHqeGUDXpCgbkfimokmTUL9QJRVV3",
  "key8": "RgDFHJ4zgx1ML1YkeUUcwQbGbGvYNnzMrkx7mF4P7B1wGX8onrXCYQ7gja3R3yX6e3TVLQR6d7d9o7KLsbs9ueh",
  "key9": "KbaZ6yxf6aNwoNa66V2k22qVzeZ3jnEDWEhR4GnH3YR1hndjauN8bDzdy6QkhruHbEqUEgR2xFWtj9wy8SMSjnF",
  "key10": "5ktLYiidtaVoNaopEFsztiwafyndM1iXo1UfoGNfh13GWXKmoXFyfKk8Wg52nPatCZATkHWHTwWV6BiqgLkqTpef",
  "key11": "2n88WZyfLkzWBc2KUQ7M71yzbNvXobJ2DTVW7DtDMkoTQ6Et9fsTXhZ8UnwS8JFyyXxqEtKLf6sXR7gZMg5qY3ih",
  "key12": "4DfpbxXbZ4QEBxamxe9UzhCri5nAHccZC1rsx4Cuj9zno6R31SHbL9TCBY9URnpxPMS3xdfHqWpqyaUotmxCV5Kr",
  "key13": "2GNJ3Umcv6VV5urjdLivrU5yxtCCXFzzJTyrA1KZedeekdud6YCzHuRmdm7tGVGnqoUfkNwAGgrprEobLjkXURQ1",
  "key14": "4ByTuJYE3i2C4AvsHZsEC546CyFbwHiyUFV1gDSM4PvGmdUeE7d27cQMqfHcfAcKPNw3fQyeait6hfXZ6kQRgXBn",
  "key15": "5qUc4tdssSrXMCf36QSpyCHjATc7vjbkrprvZp7Xrbt9mycjxp7gXfAfmcJCFR2crSi2ywksLfjYiVotUKTDiAMk",
  "key16": "3iHGCQwVV5JNdqQhMFc3hH2NyGJK7wqrFbxEYoMEpnhzWN3UJG6wRVQ5VHGAC6y656b9KcYXFw3oZPZAw6KnjetW",
  "key17": "3VZhGUjGXKr3LeiAyHZ8gmyXbGgLApYPFAQLXSwvK8Xh3sUyrBcqg4AfoJqJwYQb632cHsjb9mdmiR7TvvsLVnsR",
  "key18": "5YnZYoq9owvevmiB92nRVsqrB1DNjLqarcFfUD6t5jEkdnsquw6EVcXEAsL9oaLswXFXrsYmEewmCSh4yXPgqpJR",
  "key19": "3xR4qqsbGFm5WmZJPiQjNvURPTZng71scNBoUXcnqvP6s8rUjp8TqBUv4XdKRVJvBQvmdsc1bYim4A6t7AF43bUd",
  "key20": "336jvk7u8mhVpMGtEbeVQBf4Q5JztJQRXVSfvicwtSPv1DKGhhiakkYUU5SufkJVUBfjcofZ7HDQCtp2EcJbM3Bz",
  "key21": "3ysgq2DwMgZvaUayri3yucFs3sEf9Az2eRgMWaU6QSZV6poZHjWLJs4Mt5gj88dS8Svypwgd8u6WbHxd9B9jGoaa",
  "key22": "U95Shqc6GQDC2jppAd918YPKSuhUmQvmnFUWfqZiewvKDy9HwvsqTCHXCWBsP5WhqvCBw4XLm3PbztGpBaQtvhh",
  "key23": "PdKtzBLsY5TLZfXhVud1hW57L91TNVc9h7UfqNrak4PWrNSXoN5EUvwC6yME7cyGLcHWLfDVdPtQ3CzWdMN1G7V",
  "key24": "4GhWt77x4hbjS3KyMKVHCd3jPMTLqyx3iSf9DV6pgjXZFSV8zrGEovwoQ4Kxvf8GbKQ5MxEQak2t3HCY6xpX5cS4",
  "key25": "5nvPDpjsPKHrg5mzCxVTWqWBKv8zob2xisonb5qT4eLWUGtVzGZwHD8WRKCsHMMiJGP3mcUDbtS17j8BjvjPR2GG",
  "key26": "2giSdS99H1HWyMUmvPr3i3TaSrgrrCp1HrKD8Wa6qd2pn8zCXsqYK4iTRPMK94BYpFkPuiy7WjYMXDs3hzwtDRHG",
  "key27": "3FDmnzVX7bbYXFgPmKuworRbntcYtHZxxPKUxcv7S7xjadt8vJGoucoQEpQyAek5Ebf1mscDWbzbsKEKDtDAjRkr",
  "key28": "256WUkNhTPtQzgEsekrhtrfkqRLNAmLtHd7oNQZniMyL2jnfHYQNZYP4xVVWNwmzGMftft6bWKwUpogBbF6386C9"
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
