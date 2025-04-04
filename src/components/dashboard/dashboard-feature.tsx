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
    "2NCN97CeGQCn8aCzT1mcJNQmgb1Z78qUum3VmycMDzVUrBzdoKXZPQmumcTr7Av17Py6nruNwysgeMeMqBWMAVRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52T5rbJR5qRaojRvuxUEJDYD2ovSCMZNQBmyzncveHq6CybStzxbFiCt9kiKNbmhP13DELbiYiZhCSAG7q3XhieP",
  "key1": "4dxHZe8EUroozEW1y16giZrCixQ2KkLceTqALpN47s6bGw1tuiPdk8tFxrMHahtSS7UqUooUZWg1zdZvvsEGyLxE",
  "key2": "5Lb1k6PTF3sAywCy4FDzx3LxAzBqkxGzv2QtMixLn9zETe4oVjqSKFPxVUtGjzyiANj7BvWF8ajKnBVTVfnEoY3G",
  "key3": "94qaRZXNF68dCUBm1wzzWyRzgn9j3q5eGa2Q5MpPXePZh4NQLCVQvgyeFSs3mNq2yPgw2QDo7GsAhzrNsW1NHW1",
  "key4": "3kiFpCf1nHenG3BcYRDCpSrrCXuo7YqKgiziNz2jaEgW51bf93s4XbQ4tThEFCaKZpG361XgfZzptJwqEtdyjG9t",
  "key5": "4mbS2w393tkF6E7F7PmcCQuPuGtZ77hDo7Zz1t5iWSbDCjC1C9yUjPgViJVHbmAkETuGmgkvSEyxybpUMqvV3mNQ",
  "key6": "5QcA1fQaKsgtQgyCD3AyDPf87PHFy4jj621wtBYMiYrHCAHgnGgtmhTSm7bQEnRxH971cZqhsvYU8gCLonpmSqdx",
  "key7": "3MCcfSNSRU9JFVTokb2mWkwC5yrwxNsi4qphXH6edjcjHsARJzRcps9c5BjVevhVV4gJe1rnegTtac39Cq5h9nta",
  "key8": "56RDpq3WoKKweuD4FbuD3JA9NTD9fYbqn8Hr5fud7x1cD5MTqtxZkE5cPbN9Ba9KpdfJcE91XVvrijmdR8vCRecY",
  "key9": "5N7vJeHyWqP77WgpWbpkanttJYseurdi8aF3FYFnXGXcDDSkrr9gdXCJgZCzMjssMZaZ3aunzT1tZZQsfWeZCyph",
  "key10": "21UAzdhL3RnYe42YkCPkRqnNyLRM9qBuVWA146v83hqacX2Y12yasDD85Zp6oZD5B9HmU7SUQEWK4YcMeSgK7u8g",
  "key11": "3AC9TvERJjma3Zqj8p86g5zBjeg36AB5mfccYtWTmprRqzeHhfJ486ptQdBhfYiuWugW8cDeHhnZ8LkTmamaaWXd",
  "key12": "61qx3LKurkYq9jBkKH51bS8gRcX4WAU9WNhQz5qzEhbJ6Tj6kTxejBDsxoc6qthoJykUJ1Q75QEJpnHZueosopVK",
  "key13": "2coogF9Z1nNrJGSkE8efn4y8NRK6rzFXokFxTxuCRTas5tv4vrATpFwP1ZF4gvT6jSw6Az5vV6Sj1Vyd1TsUiEiF",
  "key14": "65PPmFQF1AfdXAwkWKuM91MRBCQhpjxzWpCWkYBGtUQarkRZRK2j536QfNnnCg57DhBdHV7cjtndjfqnMpanwGE1",
  "key15": "5t4y2h9N2HyMBfbUPtpta6XUPjFpAynSRFAbJDizKCZY9vqBaHGC9CCgKdzy9uThZuRjzrd2m5StHNBB5i7oHFJN",
  "key16": "WYhaHnD1XNYgQ9xVro9k7tFMWFJSeW5rAnqe7qCb17qPNo63m7TDYaYdRAaPqi6ksw3H6M5bWMrdBJBEJuQmhjy",
  "key17": "4NdDvzqqD76SjdbgDcXCxeHUjEtQCLDPhnkyA17dKRyUCkn2vVnAMKmKQhfZRHrXHRcvSMEK9TQsuEwwByn9ZkuE",
  "key18": "2bu4uvJtc63HmebPQShSAsursxqQHKX7ndCNycxBbY5BAv6gjsD4QQKuVrsoscnzawFW8PuWcnFgiu2MpsewsGJo",
  "key19": "5qSyx2hEfQCZBV6dqJciJvmFDFYauJEgWTDUKVe78ryR4AMgmKdZb7zPZJLfmNfoLvWpCLNaf5kZDYk6h2ZD6yhJ",
  "key20": "AyYpCK1gXYtX6wYRc522Hxf4SdvkxyczF9Do33wUyAkXSy9Jq8pkfjmu9n29V3Ck4u8rmCHzdfCyVAE2a7YUK2j",
  "key21": "46soDJ7jFcRPkrdpeodo5jCLqzBSpfdtfLcqRdUfj1UknkgRiPFQSxfiobGqTCPSTknXg9dKcpMmmk4PErsNagkd",
  "key22": "JXBpXinxfZZ2aPnXVpf726689CwiTyi9MASEUWYU7Gqn1MirRMB2FhcVwsj68ANrjWQwc96bPAYF5vedA4eoseZ",
  "key23": "36XbbFpCw35k4qeNNNg8sebG4i86jfom8jqbB1689bw2PmN8H4kjm1tAAV2u9HFc5i76okGGeSdZQgDwL9HYC2Xq",
  "key24": "3HADrK7CMr4aXnBEQQXhZQy1dH3G3DTV19W4gBPwtjbKwsXDSAwtafmxHxc8hMmsEd9J1xQWK7ASJToKP1DMSooi",
  "key25": "5iEBTQJckrYmT6oShuSaZ47kboDtbYGYWWQvNxhQnD3j4xyeq2AFdu1LKi4v5coGH18cMk7UMTF253bRQGm4ywyV"
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
