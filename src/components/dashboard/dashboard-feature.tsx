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
    "GdcxfCsq3KFQVXiuZkpridCR2Vs6D6obYdeZyReHQoHDvooTrfyovRD7QgPSdpzWZHzuKLhchTSeDjWqp9duGSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJjfqBX96GmLbU7YhTBKcryhwXZ1cYgzteKMQhEzzt9Z8jyQF6NUJPT6xcJ6VvqDGpQ4u9xLzQJLLXzMnxGRZrH",
  "key1": "5z1mQnBVpRkYvHAyDpay7a7wZbGHDMNiu4PKqygLrKUC8Vq1s5rKVddazZw7DDwj5ynPScW4sv6JrNRhyjmV4D6k",
  "key2": "25jdZxaMGsTjw6CQRKEmbxWbGNbySUSejaREiTq3nipgok9JBbw1MSUsnWtoisxfJ2FG2PrTMetLsLXNkrbW54d7",
  "key3": "2hT7uscDiuqBnRgJLcB6iKa39U2nK15vUDhtJJTb98Vuo1FEQ6WxUQX9QASjmgfakGr8C9zTSjvKTq5MNdE6TUdK",
  "key4": "4kTdiZYMuUmNtEURj5nVrviDvaqojaQtY3aFmkzFopEd6BTiBWLdUfroteHw8xLVu5vzrA6aLS4Wa3nCxtuJvAMf",
  "key5": "5qR4ucfc2tp1SqRSQad8YmbeCPJqPANf5ZyatubwJFJJ9wBCQeRNu959d5CVkhXHJXxfp8SSx74GzF8NSaNU4Qnr",
  "key6": "4y7iVcznG2MgKHuKCNVPeidzAMcM93STcEaRDyzcSmLCV1MVhdaKRWwocWXLFQgRmtsnZNWK7PyW7usmnYoHBwEd",
  "key7": "3CgPkoRzDJVax9a5RVxEnZBu3fCZgTQLW5FqeH2K1tsxSThPrEE4kbRn4med21XV8UyM5qXuju8D2UE2c5yPN5XM",
  "key8": "6ZhtiFQFkqhdeAdTCign3Kfxqwv9SnFTrBpVRsTfXBn7aHh7Y8Be8Zrgz15UELCiPjCSAh8rGoZ3MSztxxUrJNH",
  "key9": "5sQaR4VA7BSXBbPwVH4Q1pQ525bCPCersFhub2VGuocCi5SJJU9zNhzVcpdXUTSiQXYEYAKhvHbtPaYWETbSXpEK",
  "key10": "5u963s38Gd6LxxvZ8VEH35UARWybyWKsDXhGAycS4vW95VGo2KKSFqqJbcpQdhSrLhgWrjiVrAHTa7UcYzLGra3h",
  "key11": "CxncGTjXwmu56zYf7ovkA1Lu61azsixEkyuzrL91uNbcKYKURHXtJL9KjHL5oGau4hQXeKcBn8zFc1tV4i6zpCT",
  "key12": "4htJyjvjpEruXyygZxN78KTqspCjyiTbr5nBAhtVyapQPVwfYWhQHpuDP6TqLFKTNL2HshfMb8NZhqDJYgNSQd4F",
  "key13": "36QgRPF7gBH3Jf7YHx3k6EX8bkmUvS94Y5CJt1bGEVccnwxb7qUzKKnBMzN79DJ6wFSRyEo4MbN2bvF7fjq2faQ3",
  "key14": "WR3XNutazhkjkUqRrJg3QgonVwVZBf9MDMS3TuVrrhFQN3t68mTcNaLj9TTwTWPWbD5jMzCLE8eHs3S4mmLiouT",
  "key15": "2f8dkATuS1s1hihoT7aJKsSTobM6rJNc8XKHssn2K2ERHzCWf8L3mRJs9Z7PhFUggZCzBvytADZrZ5vK1Qk7UwQX",
  "key16": "2oRZbgfHTU38SKWhU9jTagXK21AQdph2rZAPjnQjVNaDBxYicTR9FfYEUtRQnm7PqEUXabcFLUkHUceTGgoog4wB",
  "key17": "4MZwowj8U8JrsarrTxnf9pEkFvWWgn5E13sLJhgYs87ppWM7in2Ujgin3WT543CisyR97KXC25nNtBTwGdXZT58j",
  "key18": "4BTm1ZuWA6YSfNkbx2imwLkUprZQmB8kRQE64KEcyF5Js82KkPyZy7BVjm4uNMsh8pSa6xtuDoCejhWA5kASRHe",
  "key19": "42jAXUXSFQ4bxDyC3T7foaMWExBzL2Qh7XEiBrBWD6GdWiFvTasVgJaftipvmD76hY3vBtCqbj8cKNeMAyD85njj",
  "key20": "3v8c6HeEKPwnRmfxGbvgqdsXvshVy3hYxu2JUp2cTfadPfHGW2rUZ9r5ySmz2y32vr6QJUrqjgLijFxpgSVwvNsP",
  "key21": "3Lo67qmKeiQPN7Dvr7DLdjyCxLte8Y8d65yRX8e1n6Bm7p91wH6WuRJmgERtKVUi7aSXFsto4M4zgvCWWhV6ewat",
  "key22": "3U6jWaxA25hrcg9AFNDYJaBfxK99ukmkg5utvJrqqmR1AnG53cfuNatewk966t8p4AvUrCuT3Pue47Q88koQnAvs",
  "key23": "2eDBKy4kkAnDEeoNg91AEU7nyzLvwVRQD3kxufp5deNhTHHqUvFQpZEpx6cXBm7W3bajhjwY1EBA6bh1djD4JnvE",
  "key24": "5vZ7LmyadGCvw8Wq4e7g27o1GeHu4qR8DuKSU6EyqF2vFPVrv8VaNj8Pcvpf653zs2bqXNwY6VGLL3gV9QrtvEav"
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
