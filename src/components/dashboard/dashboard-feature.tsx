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
    "4YYdLS7wb1grGhX5xieZsgM71kX5cg2F92crCtkzSxj5j15PFyEq7MjyvGbmNRvWd51r6sXg77N1vYTQxbmLBKbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hruDkUFYGoEkFjxuyFA9PgwFgw6UYGjiy6cnrLPooCHvM5jiQdua9EgvxQuX7Yz7JofcWtCrmYocPUnJmJUvJ2T",
  "key1": "4nM24GwxoQmhKsxD8BpSM5mGMtKiRPmJoukURSBxYwH1fdCBAzJL8WQWHmxxGZiVYNbbxm8SjkQoGZyZmGdDPCrs",
  "key2": "2LRQ5Zg8FfhkMXGhWW32ZFnAvQNjNYDmTpqiXR4qyrhgg6BSRTfSvW8KNFwJ4TcLXM5p3LNPdkvuc9yFyDVSiGFz",
  "key3": "Kqny18EcLZAgqEVe1Uh8cBrc2FBizT1uvNaJqYCynTMNHASQwEKoxY7wWXF4yjxSq193FzCwp9AR4tPsSsQq7x1",
  "key4": "HNk9vyiZBcGvTnNZNRw6YkmoaDjU9C8nqpq1FRAjedC5fVtycRVpZKTrXVV5eCWZLFNJDX47LmSq53NpwfbFoNR",
  "key5": "2scwnLPfwJLSippdPA9goEh3UfCGwPGGvr4Bj7CW37z5ShuaGxPqcz6wsWZh3jdjKtsYwqMjZqtghM6ruG79nca5",
  "key6": "45PCWXMUiP4bNCcH6Gvbt1BHGK8beCjuK98Fq7Bo2S86v2qU8BeuwTUZ7AcieNMoqTtyYYAKyhvdDKDwsa7Wdo9B",
  "key7": "zYxtDNH9rEx5Kurv35S6JA8nBb5Dj3mJeEAVQGCCbZUKn2rsfYQyKiy3wpKaj496t515dFGNMMXTdxMVEHR1tPW",
  "key8": "RNDpRYC1j1eEr1hsdeuarqr2jKw5PJXjvdcN4AZ33BoaENJoXXsXVojqM4Qs96oYxVvjc6LBgX4VivjnTWhd7Qo",
  "key9": "5wjvec7wCD4aHDFeNEdCYSkEXwdc5mxmuwcrJTf8WJXxn2c3ZDXYzWqZdWjzmnNyqVioMzBq1dXQLvkTJ88eNFnd",
  "key10": "9oBzRuJ1cNDk6L9c6wCoV8BGCbekFptb3Y5muhsB7abSL1VHbPrJt7MvLJkC4G6UqAGdNSNQFZoCRYWNP77TCUx",
  "key11": "3cGHdA6xm8qZDrxxdNo2fMzoC5LjXma9RcyndtikmmCjtnaAvr17mgHeVc6WzRCEJHDfuwknQfwYqTZy5gnzJZBm",
  "key12": "4RjQcTTNSKBzwhJJrA44jvaSWE5NCfUxD26egxepbUoWi1WWiB8rHsiAniBctGShJML6PY8CUuKzaf2JPJXcBfwt",
  "key13": "3ekpYhvd6N5pGueSEmtL6hwWuHxTGZ4FhFoKKQwsh9vCNQs6z2xJ4VnmAG6i54Xg87Yj9Qdv5GQoK8tthUexDzcW",
  "key14": "5eSxaGUaqBzvrVwBzbuMeSLVhLUpzL8w1L8NK8STbdZhkBxSpxhJL5NJn4axWBmyPCD9jQqyTEr5HuDuPVb91SB5",
  "key15": "6188XvSgyFYBbhqYTgbnhKASHM498FnKh1AmgbetyewakdRaWzAV3hNUNLt7XwGRQpAogEXwX5LLe2zk2ViqAd2g",
  "key16": "5YqVa2VMGX4p5Gy46UGSJiD29pkapT392JKFsK5ThfZBg5TBmPbjTsPFZgTmN6Kkf6j6F1u9LFvgZEvvrMXSb4u5",
  "key17": "46Rpazb7kmQBoV8kCEeYEdJG44desUwp1yTydt2XMW7X9cvRo85PMgoRbkBSz9rWnTn6YWKhcqcbhMKJoyY965ng",
  "key18": "bhyWy4otDvUCXUzkxY4qVJi6WWXCn76oxwXbiU5Tn66oPELomdxbjvTdFKVMgwJEcCDQP5fPGGt8cafrahVGsip",
  "key19": "489iUKaHF419Bgh9thMt28p5n8qwBRqXQYk34nj7vgb9TnFg4vt2waEiceSkyZztGd4RRDZutLTiWay7tYJdWPjc",
  "key20": "5coHwmn2jgxTtvLfJx9xxSVgfFKzXqgnbdzbLtjAbMLwxbMZDfzFzhBHrPp1RZgBxhFXEVhLBmy4wppQuefSZfvm",
  "key21": "27oPwkjMQg5Cd8p1GBrik24b2tqnDJR6GqkmJpJfZ81UXGgmtQSGE1UoR8sAda9NjSFPHM78AU3vsmntvhGjnZuL",
  "key22": "5crGcocTLNLymcumSwSf47RHRbTRaw2292zHDJxrHq8PUaBSAhWRE1bd54NuxEiqLGhqsmp3F78xRtv4owycwJX3",
  "key23": "3SRiERcvc298nJoAg4ERqDC48fanDbX9TNXvczmDZaXGHdeu8Y8sUWqNVvA9FDFxDSMMtiGLchrM7r1bfPzA8Df7",
  "key24": "3MiF7vCEwQ3nuiMHAVHdfViU2PwthwdfphMQHyiuFjdBhdKXEzPc7DH3V6tjNkjq3ipJC9s1QGmdRFEj39kK2GFH"
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
