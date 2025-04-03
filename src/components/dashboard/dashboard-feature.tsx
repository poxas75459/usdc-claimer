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
    "4SfSSYV9gVyehfPws85AGHPPt1SPYH3b641cHhnW2Xao1MtxAGDXtfRaSFWWCU7XMBV25ncRT1xHLcTJciejhyJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w8aVAebFUeB1EdK9u7rvd6PYM2GZ2HSfRP8MTsA49Mcrv6vBwEnCN4vpgTBKHFZGrxtGuabPQX54zhcMBZfWjgL",
  "key1": "5a8VdeouEsXS9Q1gGAWMgAZiSstFPGk6N76PB37tBmwTYP7pYhriBxzBqXwpg4sVMs8QoZ4UPRQYeWSfTk7ughJD",
  "key2": "3KxEf3zHs9np9GFQ7sRf3d5GrtA7HJkYLtLQaiaSCLdAn3fkg8WLpCv68qtDhndfKx6vbJMuhzNuVQa4xjYYcrqf",
  "key3": "4h8AEdzhn7d92j7XgdqGcuLpREnqfwpjrWBHqtW6wt86Cg6yuDV3ot9nexjNs5JL2pFam324HFK4jfPvQw2rmPoS",
  "key4": "5YfVpJrzbDSMoocd2bUjcPHq2SsfAyAH19MbMMeK2hwzLz175Y3kzGLB42yec3ztHyPYKwn1ghSp2tsq7a971qA6",
  "key5": "K2zabfivchHW7ACzhJn2a5fFPW4Uep36jq9J6WCJyBjNnNs3LpvYduD5Aep2tntUoRxdDThSvRfBno7AELZT8L6",
  "key6": "4PSuzajcGpMFbEx2gWvVDGwS5G24hD4SzU2p3jnPzqELMSbjcbUFvyKDupvmwkyES6FB6q3VrZHwGTQxECWmrgpH",
  "key7": "5sJQakHBnPTUsDsdBxpjGHBxyaUNckboaJr7YPucFpDGnTd8h7EHUMAvJSJErCapaYDSx9AYhaDWu7kPihHGpjbe",
  "key8": "5k1h9YhHvCJFXkJGAwTvL8k5KJMBBYwu43a6iNGXvqoGaduzShia4T9briH2TLyZJ5gj4nKzt87W6PdB5fDaABcK",
  "key9": "GyjBs1tzrihdmZM3c6rykkZp5mC4Bsqpat8WfrCPKdsgxxEnVP3Zp869KNZC67dW7Fj3M2y9nGp3bC1vhATkXwN",
  "key10": "5HFNQDwQSzNYeyLyGRYyiKiTfjMKcjxiQnhU2matfMeTPRiSW4E7jT6Uo6oN6tJrxyaccaXEzN9zgdPYQcA4vipT",
  "key11": "xW4KothbtBwbyQhEQVgD4aCAPUH4sP1M6mEFuMYcnAXmsAKSd6fJCZEQcPbz4Nk8A5MzaLs92nCZ3bXtViKSHyx",
  "key12": "2RjzXHttbUC8U7Jt36FPhByJoTFAF5AyK7bUhYycCtt2Y8nP9hnmJkztaAV29e1wENY8mBg3TuKc6sYiPHe2H5Ep",
  "key13": "2U9LifRMSXjRcVhnNbUBZHXq4NrfhHxvHHohat3rgiA58KzzpNRSo6nqSR96ua29T2gcWEbu1Sur1G9smySqzYVB",
  "key14": "5BSCW6wbTWQBJUhmQPptz8gdtsZfY66ekKNdpu3crU7JxFSxdyXrur3AHeJrnAKicbZDYTK1ncjMqDjgg6gQqSwR",
  "key15": "5AJvH3twUX3BGXe56kBHWczrGLRffEUEEjzvr5zVUx1C7UQsE67ZQjHKyxxoNCxexYXZsovTfVE73QkykLq1biR1",
  "key16": "LiJuwjBBoPw7PhwfifQdQUEG9Y9uymUBkBRcoRwRxBg5BY8zPmLEeu2PLXjT17KibTa1mzP2ppi8gEcjfGbpPP6",
  "key17": "isRqpgaQqMRnHHbZismgWeHo7qddcLydM7SiZWiQoGqZWPvtYHPhjG9GEJ76fVK7ewJFUyU8bay8H67iuS1kwxQ",
  "key18": "4aGppDjHozMxnBQ3k5zjLLch7R9PRXr4VSSGpHEbw2PpoEWrySpmdxS889mZAUGcdB2mnEgMdCHcFQxAzFjjbnFL",
  "key19": "4FUVF9KuFRCJFxWbPXCGkBkqTALnnRGUdvHrsnSBhcBGzjn1GZ9DKr8XVKWHcfQ9dZME6teYGgohYsoiJwefBWbJ",
  "key20": "3FenKKV7TPYkdWJHRPK1eUUMn8uVgyPPe5FA7N3GwMwsAtEWqFCFPQJj7rRqKqyHipn1kQ7L445LYrR2wCkphCSw",
  "key21": "3YUs31pZdz8AXfhgd9KDg9ooiYw3eVaupPxLaG4iVhwHNJMLUou7XXjigqd35hLYeXUedUkg4mGCd5ajAyPuhxcg",
  "key22": "4gqGtfZr6XdfyLuWUN9y64VfQDHXWdmMwQJLYvD7SQeX8r7j8qc5UAco4wniKj3c2C4R3qayvoabyZ1hzK5vjoMp",
  "key23": "2hFy4zVXUubcfVSFk22v4dVHp6tM9bPc88yPZ41eyddMESUPH9sroCAPZf7Pn6H6CBPzvJxmFaejXThE4nZUiEiu",
  "key24": "39cXUqY8eTbzWnhNr5ZoVq8MeVKnEkx638oQ1vUh5sRmEo9TcDS12iamqzNqJMVZQ4FzwA7oG2WYxovbvhdY2CCD",
  "key25": "5RbmjDf8QFfMD3is5tEhy8KHuaeu7ksYe5QoiRPZZVRDbkvuXJA94bNDMgsoiCe3EPCbSYww8WKZbZB2Mi3ZoFZp",
  "key26": "5gCFAUVwkReQEbsByysV3Uuk3wuqLENqdQBzVhP1A2YqLPd2jT9bzoUmDQAoQBAKBrX4yEccdAp59zd9DMNLjHrL",
  "key27": "2g2GSi26K5PScQr7XYxzBUmeJLH6tDPXD6ZDNfG59df3tAjjcaUHg7D8R87nNMPE2AqHfFFT16Qm5pUjz2MeazYD",
  "key28": "aXnEihpD5dc1YeTsuujtG2yyqJcys8z9KWKBD515zwip4quXxYGi5es8rf5TNuM4Tv67WsU7vD8N8b6tfdkBw11",
  "key29": "5FWBz68qanQz281ZVjvr5crUKmG3W6Cjk2MyeQM1t3dwViEGq2fcEhjwrmSaB8XZuSuKfYtqQASxwztdgkFvAGo7"
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
