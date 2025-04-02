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
    "4S4v5ppkkoLbSZFhBoNAxfdiJxKFeq9Ks6y4aQsHVfKEToB9H79mmzoUHtHMArJn2rTjD8iWBc29TwAEB4hLP5nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JxfBoVgdzJGXZTnHeJb6tcUbijWGnUMTbeYGvxBK4DZ9FDsVtQ3u8LYgeZKBynrRboSepYJMGq59A37JbAmtCvX",
  "key1": "5JxkL66x5FTXFCy1GMtUrFXr9VbMrxVFCCHxpVzFzvFxh4BRrDPUker81DLM2dWTw5jg5kgo6SvS7QsFC394aW8j",
  "key2": "4Y5YRRH6CMcH7MxS5EUVbiZaLdvTWoVkRsxUdBXdqt1fUy6vt4K6Naf8yqR1fAZt6gskLd2qcPHG6nZ8DreVprcy",
  "key3": "3sgdK9XRUpp9dxvyDTPguQ6WnRjNrLM1qSqbd7nWssJiEmJkJLrqMDF4hfjdwwpoaTvAWWqsF81NJCRZA3SigPyy",
  "key4": "3bwXHGvVJWCmcFsYRn8Ff6nwtNoPgZNo82XHCmvUcx9FhokmN9QqMSpyJFyMXCqJc72pQXAeWptLVyLoBSM2RP5m",
  "key5": "3Knu3Qp9c5gZwHmaSdK5hW1KkAAeiBGuNkkxX8nzcpcGsnz2pJnTpfUJXxuYyBhT89uZvcvNqNxgf27P5YDVZheg",
  "key6": "2JjS8MbHJrgtAiu9cPrczMtetDAPRVhbrtBUrc4zBy7VeCk8F89NaSmakYvjTw44Hn5ExuVHtCWU4ajDs7DDxNfr",
  "key7": "5NGTZRNrovfgU5svMXyM4SoDFKfh3iVDoo3WHpH9X4nkdk4VPymhfakWS6Ca3kjaAPJeP1nYAvoK4i17D76xmkz4",
  "key8": "5QLBBbMHxQkP5Qydic84hqXN5QoZFSYwKWmXMJ76urJJc4rFkYdWfya5qajX4Rr9a8xSKAXnEd68veN6JuwmRs62",
  "key9": "3Jq4Rf1fxBxUhTGwRPLb8w8eYpcn5PQdSefFVidr85X9na1xpdcnpUEv1zgwitUfbCBYtkRgiFr4XgFu9uYuUSUb",
  "key10": "5qAnQvgrCmE9JSzxPdQzDt8q4qvX9o2JEhkdPfCXCZR3MptPGEac5kBuhvZfBChbqxv9R6XRTeDyVpHyMj2TNGUG",
  "key11": "2t1V4Au4PTbwsLvD6VQRz1qqEWUr8tCsWp39NdTzmcotyaiF3xkzzif5Ci2gEJ29Lhj6VV5UHkXv44Fz1EDXEZ6q",
  "key12": "czmLkYLMxh5pKXk1cB9JAf9m3nVmx3jehiMFcX9VfUG6sxn78VbuxxhvcdVsS24GGkiX1Xxz5YFUVLKyw5Ffmdz",
  "key13": "36sJgVbBbKLbqVbfRkcvFcJNtMY3Pn8dci8G8op6T3XLvBQn2szVn6fS8sNz5NWrRe43vW4Tdu2tE8PzahgSxcEL",
  "key14": "eTDx1tr7aczCbqFxPPxuBV3QZtVJKHMQkpDGmiDe7mfLdKPvUnWKcXzJ4Mm35MNvX7aDZzYsj3cgc6oDYGBYxZM",
  "key15": "5mScVzR1xCxz1vvwHp1YB7rgey2HUC2FmX5V8AhgUGVg4b5tTWAdtWtXGq64ZE8mbpH3agksZrow7Sxniz3E2gaC",
  "key16": "3i3se2c94pXL4ibWbGkaXvy66aHR6EbaB1LvdSawUaQrmxGxtWwh2UYaXPgr5jUAPq3bfVbSNw5KToh8jLvHDCZj",
  "key17": "2NxFxVwRNH3sXxkoWv8KjyBj3GpVkLofqZCxRJWZ8LBskyziYPYFFBTk1ThpA6A1fzGGYSXFdMdGmJg4PjnT4WSp",
  "key18": "64Z4pBYrCZR3rP36gig9n3pNHKrHdmcCT1EyF9tdLrfCPQFti3N5ewKkZKPFF4hPccTjYvra12DDJh8FheAig8NB",
  "key19": "NhJqw6Jq3NK7hBNFKvLwshAzLCFdvdjJyQrcwXtjxZtYJa1uALM3nBM1PVjDXdmRNNY64NekV4YPjBMrUyrx2ou",
  "key20": "23P5bNyxemSfNRb9htmru3pU1PpLB2DV8i5sv5Mt4oQYjwbBm7BGNGP4q5qaVuKKCuo3eUfuVrZn3Xc3u7fRUFEe",
  "key21": "4FzdJYke8oC5ShrFnHuio6jehHxNSbXhKZ7L3hWbdMBJNSoLy7nkvDyuc7HxoizbMCUhqtjB4PQfwGjRWaPx4Mvu",
  "key22": "YPhdQucUzRjH7dzUQi1yUiyBVNuay9i1yPkn9171gCa1LFWmiMXdLTjrvNT3T1jXT8GSky8WAGEj1CYfFRuU53B",
  "key23": "5FKbo8R2qe9ba1QQnt8X9eNXpavwDYJm17mY6GukdaZjKnTbQLYNykd3YLCZFUjpWjAU4rwhhYWkckgKb5WN5Hxm",
  "key24": "5tCyiaX1U51UK62MqthL6T7QuXn9AFUYnVEk3LQEmkf5upM9GesLhQU5R21KzUqqhckRpbTWYHuNNrMakBzWKYzK",
  "key25": "4PqhfidBjrtFkCiD4cgzppPv89iHBzoDoAaShuWgdMz77mbDo6xdMqxt4xdDphVPa4tMFguzBrS85jMrdn8UCaHz",
  "key26": "2dzmLfnbQ3rvtWmYTWiUFtLZN6beUsHoWhpSnMG9T7a9kJFrL4uMZherJ8Hd5gsbKengXtN2uAkN8axYaEw8MK35",
  "key27": "2ZJzGtiBhumd55vQiSzCKZywzDLsh6HAiacLd6nDrMr5opWRnQ14rSVtWPE9ycvTB8a8MSUm8avKsHAMabejCXi6",
  "key28": "35L7urUJi3WLNkSJjxwgX2HXnSo7GP8si1mSLWNxkUis9CJiVCcu84C9SJrAUPrK6jC93F1xEQuGmqNnP6p93JPe",
  "key29": "5MbrakJte7yWShGdQ3tjkMkrSssoRdquN7cezVE95GCj4UvcehFLQ72Jo7UBJKVGjccSs313MrAnAEJpkCF7xrpc"
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
