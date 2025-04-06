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
    "eNCvSXsdqdcMAgGtejhyG2wjYpAHeS2oy5nbzxTkEPkYCeKYaRvY3Kvw5Akb6BUqQzpSrpMqjsTmDyU2LDaR7QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9KYXTbMxRu1hjJXwjZZZH65ZPGT1sppVMBfjJ7DzT1QPcssnr7ivLfa6WpBnXXyni7Qd6kUyL8xxMBYKATaew7",
  "key1": "3gsS9qbkCLF778JbZZm2Hidf1mzae8CJnKNpXSsPebWiqcn2MkA97iMh3aKS5s2umoNehUdUsTn7WLxZj8D1JEDr",
  "key2": "3UzcZT68J84XQ7DT7Xcf5n28KpT7rm4ERnDRQY9bRizoMb6dtJ3nJt7LHYSi7ihF1sATnQHNF4GfWLA4BAiudVWx",
  "key3": "3g1ysFWa4CE1VByafmZVdUm4prxNKv5aKvYTXVRkGgnwJRJQMigSba8zYAGZBcV2y9vKf3R6ksFwRZCWe8ZdBqum",
  "key4": "5mWuSA5U2rZTS6RG22dwv6N9PTwrC7fhYLTGuiMtjmYb4xiNaEDnVSBaBytJoMLoWYuznUaRytiQYVWNfzVi4NkR",
  "key5": "36YcDSKbKVoGSZEM6bPreGg9L9EEfJ46RY99XZ6Rs2BgDeqZVH312ghuUNkxdnBXUtwQGVWkMrPpAjSDcYkDy1ao",
  "key6": "2FE9wY2rRu3tSvtc42xnGgwib63KvMJLundWrL6Ro9yxrfJgF9Zt4QTBP5ob1xLzqCKedDPgCwjFv9njbxbrHFta",
  "key7": "4mCED9vYSGXfFWF4q3jyrfAPU2jqi5jr59V9erK56Y77ewaAqWZy6YKvuEu2a4dDQD52UZB9XthPhqvVLCqAv96z",
  "key8": "3EB7MwkHJuxW6WMPVLBb72dczsvNhMzbkyErued5XR9QgN7GeLoDWg1ywJmErNuBJ4sN3CEpGD3UTpSC1wJjFU6s",
  "key9": "3mwGXjtJMXsyRBDgwdjBNcGjRTx3XVS9wPGwGiK9U1QsGhtTqhmhCuRjyJfXe3849pfTTuqjdai9et4tTEexnDbp",
  "key10": "2FiHZ8waxujx2ywEscw4TuZuQPfUSZiXefPWJRiPkjxrHwed1ftf9JUDZtzfGeb1gzcSYn9kGEG6aU2ycbT7X64W",
  "key11": "ziqrFukE5CFowi6dcdXZRSNN44DWoFNQfWnrZNafPV8K1KHzQs5u9ZMvCgAc2vRtwTpzfiQNQuDBFt3DeTQt3Ce",
  "key12": "2tpgaPEc8it98GXj1TBJdy6sSZRQpQypqoLJd1idxhonAvRGXk44Fs7K9Wd8ognSbq5yD37xGvy28TmrYEXCQfb5",
  "key13": "2PTaE4wmTepwU5iL9jLDdCtSkVGfowCswzoBZ1nx4dfGs69FHBsqeXSemW1NrESC4p2eyGVr5smJad1iY9KJYAZf",
  "key14": "33ztnJc7YYNCir942RNRTZxagWnYjZxETJ2AmAWEmr1PeBDzWtKr8XhMzZaMQTmx4SrHqJz5vm5GSwgdtvmava8J",
  "key15": "3QrkBPFhTXCPGf9XqzR1oqZcAmE5MsGVHpt1dEQZVntFYfVHXRu4XzNLTKN4cQEVeemox3WctR8QWrL1n3rNPGxt",
  "key16": "3LS717pbrtZEsEj83y2fNXhcBSdy2turuFtycueUx6WRKU2j5akmDbzYzoUdYcEgVKhFwXi7HQkic5nV8PthTMSZ",
  "key17": "zEuP1jcoNUTpr564paiYCxHyg3hyF3bmzo9radxpLRRuMfBNNCadr31H3bsaizKNDngDQsRTjYbL3oXX6wsh764",
  "key18": "4nXnoxWWWva3pPsixT4eCoY3ALBh9H4R4kxza61cxH5DDNTsMaPobrCvc3E1SHr2b2eFZt5ozTRmB8jjNAyrqbzv",
  "key19": "4ZsQpgrK28wuu7xHfKhRegcH7d6eGFX18uLouwxpL8rCgQN1MEAFBNMS6VXxqA1xtuXa5quBks3YaJt1cZsSLY3q",
  "key20": "2exWPCtSBP9vR2uauKJUgHQKtkmPFUgvKbnMhdZQ2AFED9UF4xqFzEfGMTkc2JKu4TZnQU1e7KAaGpx65yW6DQDm",
  "key21": "3V3mTyowNtr6kHcbUEgVWRi5SLpqybYuNvSGHoc9JK98pt6odXsFW4zj6fS4pkYjz86hVNAALamwyLMykLaRnJk3",
  "key22": "2oVJ7WtRSKsYb6PHzZew8VwaZmJfBTUuryDyF6cJF5YiaBb63jaLqoxQjRGFQdjTDdDJFzduRouhNvtvX6ut9Be8",
  "key23": "5648hT91xF94kD6V9LVEnzoDPheQe5ht6LnRCCaSjJzz8MqtvgmTgK8Aa62fSTwyHX3yrmmzA1LdeZ8gCCqLSJ61",
  "key24": "535FcM4KAwiGpQ4jXUBNpYSSkqm1WraaahaG9zsEVC4C5vvWjCZ7wEDLK1ZR3sNeFg6nGBEakSBmW2ur1SRF3Egr"
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
