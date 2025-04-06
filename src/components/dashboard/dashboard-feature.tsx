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
    "3nGqPSwZ2ZzjV9MtWZRHnxbCrRDP2qBpnArsXR6KBZnj6kWNuXQrr9jBjWwLAsqsP2Xj2qnmTst9igLkFZC2pEm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NazjUmvD53rYpKAoh1mwPd8z7VThFQerBghNyL8tMXSP3ca3h1eaiffHH6AsBUi9nVkXpzQsFZZ9RC6RJeW8Moy",
  "key1": "3R69Unub3RwUb3c2zyVH6ADeA4BtcBVhVmLWEJGtw8wziNPxpwLLdUWYDAuWyD9eyuvKuhpbRhyVAeunPXzaYZZQ",
  "key2": "51hGMAPGHcjWj2UAsKCP6YXwYhMZ2G9tPCLbSS6fktNZroFqqmgPr6tBpnanmrfzBiPZaL1FVmkurr7UAE1mSQVd",
  "key3": "4wVvjT4kKBXtQn5RXv5NhFPngcV84KHLz3S4ebNc15RNQqj9Y4PtPGwMKSR6uo7V6Vjh8u9SvTHa8HRgYHvwHwNq",
  "key4": "4t4p5pUxok9JuNbgqsvjoZJY2PgS1f34Cp8WRNpw1AV2uiUpTqH7g3t8884ghkQNXPVag3dcoiSiQys9whk1YqWq",
  "key5": "2rD3iKQzfHkpHQrwBVbvjzy6v4CokTWmf4j8pA9cm9TimZNRMiZwKvry4WfzZbnZgecQDF6gpQghpbn4ajYicY8m",
  "key6": "2ymdCFLBXbMsd8BT7AWP6ngK1aFbNT4e5qe16LCJKfYibaxcXiqqcdZ5tuZhH9hzdGanfGxnzXeMjUBCVLRVhvVA",
  "key7": "5RS6QZRR9ysdWv327zQ7HDb3ss9uYDdnLQMstLjvakuzB7pYZgsGKY3QooqBNyHZtYHHBC7XAu9teST1sVpJdBgq",
  "key8": "3kugumTPGf1osbRsn3m4niiqXs1kwvF9yAmSXsqUGCANkU8s7yGmTw1KG85h4oiSYPtUK8zJvfNgVEuxoKU1JsGD",
  "key9": "2xmqmegETuLeoFYFk2V3irnY1dQjxVJFi4mZK18toTQkApQ4zzS3tGxHj2TSdQ69FMmwdRzHeNYVZuLzAdBRXrzW",
  "key10": "33TakCfRuQGJGFzsZgDJzDRkDjJF4kzJZXDzX44oZq1ACnSiXZQ6tpjWkRk8QtGuWgfNEXcf4D1G6vpZ3gUTJCLr",
  "key11": "2NTTx1hxvvGq4vVGJfDcaFWCFaAAYiiPd3iGqRVnmxHbPMgbTiUcdVPgvwxVcG6JV2PYkeQMTpuG7ZpnPaNewhdY",
  "key12": "4WqYyXtT25xEeeWmedTe8WUHuhzFroLePKNsrQgpDfa7Fn9ksy783QRzXwWV4opceqEBxBSFgBQjB1Yw6kGorgFM",
  "key13": "3enL3kV4SMYU2ZdwEdi8EyZvNYpa93oWeNVeVymY4KbBxe4pfzHr7hpWQXxMg7WS2j4KCbMmebuFuUJpFGPZGyyT",
  "key14": "2yXVNuoDno5iBF9c22aBHDZJaNatXLekpxuaMRUR3GkB9PoZ89ujsKsZvM231YxRMjQcqUc7HHWJdDPS1UjNdbx7",
  "key15": "4kFVRmZNhZS4VZEe27crkpFVXvtknE3wuqW3Pg6N4fgTfaNi4h4QnoZ54sqweX6pTg1Vmt94n9xQQXLpRvs7V49h",
  "key16": "2V23SU7mGPbiWCGbU8xiq5Dh3i6AFW2XJDujB7JPVTV5C9pcsbo9KnhLEzs8F7DQ8v4gyLkto5oq7pFNULRH7Cb7",
  "key17": "37tZZgotFJnVdvWvUMb7c1xtNCWfHRLxfVDZaxUpbibceHazj44iwB4gitFPz9ZW2qtisgqVK9gDvhVJgbt13YPr",
  "key18": "3HBV1MTMFrW7hZpJpKeCVQQjbSkZuwc4pVEV6QFErcBCXSyjd6RTERN8do6DtUj11ZFLmPcnoazbaJE3p6xxbQzp",
  "key19": "6348ukx4NqtLTxWBQVYeV25v4zi7t25mN5qwFdHEJrNd1MD4CQL8P9uCfhh9RSTz3CWBfNLQSpEojRiyNkkmxqVd",
  "key20": "4kPZhD8sJ9UvRsS4431Ar11j71p2ZbFnd6To7EBXUq4mEWV5xGSWLEQHaP5LqUhQCgXkXUksUMGtLz9RK6ScSCCN",
  "key21": "3YBqnN4BUQTuhHMzfcw5gQXUg2ENPp7gDAMQr1mbMMkT5ExFnvTVcvtnL2GnGQTg3BToNHVVir3FjQZaP1mQzupa",
  "key22": "57GhvG3GtBZckPtViF8N1YYAcj35HjvRqRTca4UM8CCzRpr5hRvmKAh8fxN2wMTAqcAqUM4K6PgNp9oUb6TiLsMP",
  "key23": "4ofsPyYb3v6SfyDhPCJiwx8iUoHMAAq9VxHqgkX96DoE5kwnZUESySzwrtrZXBsWWWVuYWsJ3KQND7xdxB5xFNWe",
  "key24": "3HobbsbxUmBby8UDDkECPThwNurAgLxULNzYPaJtJbgoKkGBDoy6wRuNgKs9PJ3ZSGUEuMS5svtwC5AdmokCoqPn"
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
