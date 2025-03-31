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
    "3wArWVMUwT11Rzwd7tXhcmxAHaN9Uj6ai2HusJgnasfhrAiqxnZPWVprAGvKF89WWg6tDkHhT2xbs5e4aiScuLkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61nNbuVbPnox7t56mUqW5k7Hm9sbjYbJiNtwaskrSqHqmQNJcEwdrRWz7rCe3mXhjHzFi39f3ZJEmFHnu23M4Djj",
  "key1": "3PMT1sDjKtcN3WJZdfVVyrDe9wWhmwZNY1LFbwrm7uJm2nqLTLvzuJ1DxkwK3Y964Zs1AafL4FDmnjQu1caZ7Vhu",
  "key2": "5gQzqMvHyMJLVjcxssrtMuKLsLeAER7jWrA8H8akBJ3HdZiymjmR7VqZjMBgdb2G4FYhB2GCVjjHKVtkPXskdqS3",
  "key3": "5dAJRBpGKr82XXf68XWRmMRshngp6FvvhkDZr91KCF8Hemt8mAKzjFHQvVYLAk4XoFH8ADW3xZpnUckP96Vd7CHr",
  "key4": "4DRTZMY1VDRmwZUFFz6CSamXj8K9FZNypcKY82sD4L8oVryD6T4ZAk9c4TyyZMF2HEmdpBQLUf6bkPsM8hw5o2Z6",
  "key5": "xZusva9AJ7GJRW7NT9zpZdnqYgDJZAQ2rPVigKNAgp6awaUjYUjBd2oRAZ5eMzDAozix3n42pt8gBZgiSEzXetg",
  "key6": "5a6uT3AKaSUqpVvh3LDVJxuuQ5e78dxieSzWGQG2eyjyMqt2gsrH8snL5QPXbgp38n8M4u6cTu9jkFFpCpjNBjrs",
  "key7": "44qpKpXHjT22givrfmmtFDqEGcHRhidDw2rnJuAirYWbL66NPpdhfsQYZeSbiRkN3FokjqsWfocJMKYdTrpG4zBL",
  "key8": "nbV28S1GgHypRYm8FH4NpiJLw3i2BTipGXFJdyTRqUGFcQJreC7GaL62z1j9Mxq8AXPW2f278h7Zsv4MBZKLqpX",
  "key9": "5uXcQ51AEVCSKhgHGqN85H471Nc5kcqFxAGhskhLpRYkWWfQGG6ZAVUMXMLshQ3LDa66ku4QtRcVShNQ7nCqyhyA",
  "key10": "4XC2LBvi9HkPfTGEAGKMD2KxYkGVtNpVHjcVtMcXqA1h8LqvyCvJTsPPnEVh5fzEGe2zzkVKUggt3YAGe2Yiphwa",
  "key11": "H2dy5L3A8aR9WyzdrGcmWVtFuuhDLRLz7X7WAbnrjMc7Zr23APtuwwbPS5z3Jv9tdHCqJfJWnas2H38eqKAZEuE",
  "key12": "5rFK2hu2tFP14TvDYi9SoMYMfwGrjxDBDR6vtqfGK7xPSMvsWMT25FGSaHtjsqwvPXaiQNsQiC7vWKPjVKDCFJwB",
  "key13": "aaqZdYPqJEHdZXeMWWMVGo2VeMvTxaevA87iBrSesMocEWuDKNxX5QGnfvGQ5fNGP6XjPpppwA6cQSfK4A1f19j",
  "key14": "2EF7uvB6enkeAgAK51Li9jdkizpH1Gpd6XaeFAAWsJgc6e59Lbp7tFzjxAMwJJkGBhyK9HgVGd2YhbGEp8Wab7f",
  "key15": "4ZcwQRZCwtSPviaADdENTVQxgZdgoLUY9eeRrrJb7GHbFFwUfsFL9R5QJc9m2jPrb3BiNm7Jm6JYVxBSJtrZFy2N",
  "key16": "5A14Ky2TqQLuf3ofEZX5SyRtykwgfJcBjS2tQZtHXmd5K4G2R75NJxrexSFveqd2pNwEVGf9fCgwCazr7J8p9HZY",
  "key17": "8DmDKnEvNLLX8ridFPzFeLdYqN3VF8biMKbJFpiajmTcGvUUoK3YNGRMfidsPiuZXtdZwfrcCPewmUFu7HGqw9Z",
  "key18": "3RDJt3WYqmePCApfvi3XCafgSRydWCCCgjo34KQGyMZR9yLvGsn66BedRPXVnPo5LM1MCcGSPEpfQ5DNGWWhDPBv",
  "key19": "28mYNYTeCFxqE8eJvkRxoXRYXSNBwvwVD6PNQk3RpAdAxrAZT5838muhCftBZr3cveQei1kTgiFqvzmcb9V4A1ke",
  "key20": "5BLkncJdXtfwHVjfJkg2FnZuFs8dZfrEc5NzKueUsTgsyCkZygoAkriSz2qN8he5eLugbPPFkHMWF3LAbDkfUxCC",
  "key21": "29ngTwEnBub21sjtiK1uGrbZhKg4zwmnVpWRfdefSMo4TineudsyXoRoTs69Jes2oUf8qfcRzw3fHQrWpunJYHJx",
  "key22": "3aPyhqTjZeR8TjazgxHhMfAU3JGFa698i8VRf32ipsXRibHBtF7AcPBqPs8eGWTJ62DCTHCCCG7iJTE5yHPWL7gp",
  "key23": "5336tnTZx9oaGDF1LZQN84dHKzvjWrcX6UCkWrbmNYrgwJZkwVJFRDdKLP8BX73ACC2Dde8HzH69YrzuoxTystct",
  "key24": "5VF5aEq5ifMdfdgZv7MvzmzgHfEv87SUXtSxHabTKFCvyscbRQqif52T1m3KskmyUsUHozTJzfLxtMM5UUhQzBSE",
  "key25": "3mTg1NxoVftyEK5mj4qP8Xn3Z8rUSht5pur8FrxEK2a5ii39ceBDV3wnoWPnPf9vZR2oDn6qp2kg67fqhCEywppn",
  "key26": "2fTUQ6BA53t9o4hjYoz8joChL9rLR177fUP4bo6tg2UtAYHk7gM39yXq3VZQPAwzzZmycZJcQbjQfoEHhBve9eqU",
  "key27": "3jQQub7c9FCSPLnnvaQHqihQLg8aPDWWQxnGdtoa9DbsLAJnZRpiPDo6XqC45ptpAB3muCU42VpQQBj3JPWSxFTS",
  "key28": "5d3z6F6JpzHvvB9kjUAT9Uc2zZRN1CzPnPLVWXmTewLTHZW5PrRurEFMzQrGc4fgbzXXz8udXzNbH5oHqVwy5uFL",
  "key29": "1TNhAXnqNbavy14pdc2q4wfRJqrL3gBJueiN52eZTNBokNT96su5bAoj3T5kWkCjBLMvzfJSJAH7iMdDCcXDQic",
  "key30": "5ZynzZjNKRkpHCiHDrAVZwG9L99eZN2t1CGtR1fCJLNcPvWCnKSZeUc5Sm3cFPZM3TKLSNyeap3jeEwgEeT6jnRD",
  "key31": "4j47swvuaMvoXFxDKnsU8M6PHVfztEeRLBK4M4MLyUHdzDjLwAZAcszu8NbmQm3VmSSodBeYeKQsVaKxvaP5Z8WJ",
  "key32": "4mcSfagS7Rh2VeyvC46269WAG9QjuE3BrYesqRNV7RV29j48NHe9u26X3DDNCQpSHscURbe6T1aSFgM7DRxDv7nh",
  "key33": "496A6DLJxRgxdf87jrqKmKPvnbtExLUEYteHiYrGN6GGKdgRCcdMb4nTgU4pMFDwRL5FzE8cns2g6s3QG79j2NBn",
  "key34": "5o9CTHUD8HuYoRkDXhfK9oP8YbmeB7gAVWPJmFWy4mBkV6kwXNyoRd9Q3Jbe9PkTGSzXUyMLnqbtTZeE69mvKNcv",
  "key35": "3QZxsbJqn4LUWEFhaw6RTWNNYYjYQCquLGY9aAMebSf9VBLvtzDK3kSBod6kH6XPWsPSskoRWeRxpW2C4Ea9wJwe",
  "key36": "2r4h83wvuHt3fNhwqYvQSq2AWrSNErvStwmEEq3QznaxQWMwicvC3R8BeNngLGRUSi9uXA2ptL1oFjVphkKYBjqX",
  "key37": "5egVtaSb1kozuuk5axbjjnduvrBF14ncZ8dT7nucSVovuV4NKCAerDFWYW5zemJuuGPAyregSWNXrBbz8m1b7zND",
  "key38": "49wrsh7D3WnZa4UydxNTLHpMqCjgfXcW926gjCyeTSaZcbW9hDZSsRnKxLc6wHq1dvj5wKS9zQ4fAxRry3CQgGH4",
  "key39": "4dD5JdSHovkgqveo7WZccT3UAqxjMdT17wVauDEySMrNHmqN49YH9uxr5hU1NwwqxsKFuF9JpffCtE3PwB7xVFsj",
  "key40": "G9wraoaiMArN8EygaurUk3uDPxeYTPjva9qz1tod4NPRjWUsUkx8PdwLgWa8C52MBMx8wxGWwS2Q11MXTmMoh3c",
  "key41": "BUcYMvbsXA5pgsUpdmqrNqiSbgtZgo2Qk4bptyHTUrDqVwXPeXcpGXDEzeNFuDwEA8dcTrSjbju5CqmN6fQ9m4J",
  "key42": "4XK2L8ciWr8nWZKyf79zWUqLMVDnBv7YwodSmJZ5pNNzPjiH5aKFvZX5NJW4XSfAAFDaCtexSrbJ2KwTEgpaa2qm",
  "key43": "2j5kLtQiGNg3c2MgEyguPz3iQst9BTRS9wzaws6uS67htHDhCRUUJhFBwymvj2zTcUvLSDvV5k8tiTnrRLDAXKo3",
  "key44": "4nvCbxAik3MJCrkVUqpXitDbk8tSqqYbqzL82SBDzVfV8QVGLZr5KChjeQ9x8M5AKmEUgXYBQ8QLeexYyL6FCkoX"
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
