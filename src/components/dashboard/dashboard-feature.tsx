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
    "3ZEr41Yxigzub6xL8ETYwv7wpHQNvWLJryfRBURkBDLkzwwx8Xtr6oeqD2jxpSEHVBJ5ys4Fec7oytYAGVj2uAg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Ptv5Wmg8aeGM7zMGKkfR8cgYMS1p347hpwtehBxoaqsRwji22sfB2QUW4goQSBT3KL8rBbc4i73thqN4DTYPnt",
  "key1": "GkwweXfC6ccR8Df3yd68iHCxTcVDAQL1jLrDKsnVWjhkUc17ctKZ3fLPWDwQDc7tEs56p5cVCo2rVfiP6yDHKfy",
  "key2": "4eeKPXH5h6L1mcB9stfhV8uGUgeJ6DauNJkscfRSH7gEdGS9NtuzqTpXhDeed57G6XQoM14gcys1qoZyuHXuUGVb",
  "key3": "3URBWiYQtsgvoJBexsFMXGZ4BaYjm888eWTNq1f6dqVZeNfnWfUCGJDL2WVtsGRVqKC8qc3KfnU7VwHZMxxh1rx6",
  "key4": "5QorsHb6BnNzGxaDWxf3QeB7dUgij69b35XmfSFCjtNSwLUYgt8RgJhukixTpoqJRSLGiye3wwuFC8R5BbvJViTS",
  "key5": "zG7oGf2cQq2A8LRgUwNgRuxMCayxvWgGL4TR6vGZuERxbKW3uNWkcvLMVi92rNJYPCnM9KxhyGX79bpiudbkAV7",
  "key6": "3gypydqQcsa2vKEVqYczZhYbKTmL6CXgXXZ59o6m2Du2gcShSQRquDz3chu6ZqGN43upRVpkKvvgFPNZEo81bW1A",
  "key7": "5tSS2QVeykKX1wkx9MU2P2fwj4JP2ADgn2kTCp2GK9ryrWjbmUYcyFYEUNPnmJQFygzyEHcoyeCQKPyUumVaor3E",
  "key8": "483KrxvCEr4yi2xnnhUygVADjrn21zSYCjTEmHcKN47f5xR8cjirSNogLPygJFeGsCsDKsMz2b15G7riJur1Sijf",
  "key9": "2GcqD78z1HPNsJCYZHLURGdNxbMmdQWXfXh5BdE9QjPtXnS9tFwW6PS44fcSB3CRmV6KMVJ8jhi3PNTJfR9b1Lop",
  "key10": "4rQAAKgCAtn9y8yWm56ns4YfX9BZWusPkQY5J5QBoAUGuVTGCa6W5XyGNYcYqzeHk2NGnHGfT6hrki2XWDrdcH2p",
  "key11": "FsbgguFtzS5s1kaG3gAJ2yB7SXkEsnq8Baz14yxnUBmuKhNfn89vJSNghWd94RzELgEorj6NSE1qqS6EukyS24Z",
  "key12": "SwWdXCXrDWCdV7jgT85VDJsL8Gjj1soKoL1NGadu6huQwW2hpUKKwTDEVa8LdjKSAUVHtxLuc4LajzVq57RJRjX",
  "key13": "2sdwKQESfezh5d1ZWNSMixbPWtK2coc8re1vBmEz1diWF3DuPBeNo4ujixuzS5qo4JmysBbHKBCuYMTG32LmxmWT",
  "key14": "4eXJLRpoWse68HQ9Gqf8NSjeogiRMgFjqKdTn2QbBEoVknuyW17WWR5tpGJHkGvqjYMA8kp6eytKxhfRyCq1nf8E",
  "key15": "Ne7DNVe9oKg23BJpshF3TfmvWvAiZBRkxgb4htAJaucLuAWvKSJE2MFrh6CPZ3wrfRqLui79y3vvr82zUhCoANx",
  "key16": "4aegSMPmSdb5Ge441GhDTimC6rzhCY7z6TLQMJ3MAtgwAFKyVPk1oS1Xz3JqMw11czRoFnZ6qDVabWsrHTJ6f77i",
  "key17": "5dmXae3Mnvrp5UMyjiGj5n6YSdfXs4xT43UsuDsJf92A7zxozLHH8EaTY4zmBzWXEjYxQt1ixobS7h6KMQKUs7yt",
  "key18": "5fGeqYfREpoNQTZ8BMaVfrn44AXw1zsMVDUCcWnwF19hUfQQCKzXVFTvMgGNGoztYvA1FaJnF2pjNCZUgeS1tHqw",
  "key19": "5PV7DYXNCLxXkuySs3jHmDMQer9x2bawPQkKaFGTpSJKsqds2v2tfA7Jptgq57YiLFh7i93v4X4FW2kYTQH7ZR3n",
  "key20": "5cbze558qbMPtmLed1v2FubuRfkDeP9vDc49sHvwqYoDXdfmaiYDcnuRSeMALhiBMk3FBhFcrkqsZeTW8SidnNZ1",
  "key21": "2xGsKk4dq2zK9bkHt1rqLZqd1TR7PJ7BgX7vRtL74fEVs3p4iQfFUCVaHcjnwdf56CyA45f1GQivsTtRHhhs8Z88",
  "key22": "61JUKgtvHWYAExizLfdFVNqwcn7yduLLMLtPssKRk2sWNw2pW5iMAZhrgU5tEkqBtGnmgWHZEYGUSgS1posbaRVN",
  "key23": "2zJyyktizHbcKom59adbGpjLjgDvWDfmv11oR77DUDo93wcy5FxNsKXirtpyJV9tu8W13Qunt47ekSS7LF9MnJU2",
  "key24": "v2ybFM6CSWqVH2oFk1ks1RtjBYHXao8kV681DhnbtjinK7N9kfGPXCrvJukG33Mutt6nkiioNXK6XcibbWXH3SG",
  "key25": "4j61GXzXsck1N9sHTAn7ehQfvCcRYpJfv3scbu35ozrTbEWXn3ueV1tAeRJrbUX1UeovWciLnUqdXLdxerYfQqUx",
  "key26": "5TUFpjzTvVVUZ4XrGQF8yT9kNzTzFdtyDmfsmzaz31X7mmPdRTXrXqnYUxXv6tomfB1S9FusneNbP3p6vwow2FSh",
  "key27": "33v2YRJWCo1g2qSBy5fJhA7N6jooFFnSnzY7yYhir9WCZ3LNLHDV3HfTJc6Q1ZeDfptLggoycfnwdJjBZn5btmXW"
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
