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
    "4kxAYTjMvirSwba7zZcNsxuawsRLg3FxBDezgR4aKo7JyjuyWTUhx6JL2sUxjU6XWpa1LZ6cgpeVWfsAGuK3sMph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGfdTYrStBmgXwE4kC7rZx7tyiARVeLHBGrTJVL2JDeqhGKMX483fVKfEGdpnfeghWfbWt4tAB4H2H6B5h55jnb",
  "key1": "51Qs3vmHe9DGnuEsmb3xggmmmPWRNyrCzV6qSV6d8x3sv3DSyhT9b3LehdvM6HinGwnMyfHPthQnxqzxryf5rzi7",
  "key2": "3VkNLFLmq2hgVV96TGBehPn5QKsNNyi7zTpBuYAbkWuK3TEtVFzQUDexqzrwPDHZn6DbP927DmCh9tCs2AsBdoRK",
  "key3": "5g1qVtc7ksS6FFmfyo3hHASdntnstZoKGmjCuo9hfGBMivNn7mS2CCsfF2xXLhRrWEqgvTGmWB9L4vMLCuxWXpS2",
  "key4": "3kvp9RY2vhxC7KLRq1JX6FFgDvdMZpcXEcCTBDYfztqDa3VM8nSsqeZFrsLMzjX7HA8K8bajiLz8QDkmvG2UhaeY",
  "key5": "4LtxWDVbTRQfqdTb8gosm7DGkpWQvkVReyiqzBWdwtNEd7oQivQ56AXQPD9hog1bbs2KeZ7E2GJ5TNDJ2ayFGZth",
  "key6": "2zpDAMMU5o9eQiUZ5NXKJfVrdcKRwoWSjPKE2cUZfj4gA9EqqpCU4shQmBRffF597WCQvRd6U1Wk4fZ4TSF5G8rF",
  "key7": "2Lp6JPiEuXLC8ZMgbCmxeTarjEdZpSLAEEwd9iZnNjmhg6uZDfa9h7QVBPzppta2v2XNX1z7Z9mQB29XjqhK4mc8",
  "key8": "UWvX3YvtMeTynwUjSjE9ey9XckY4pyn3coPFy9jqKxLjyqoS1qZber6Dazbf9p34gjivgogMPbcauCrJEo5Z898",
  "key9": "5651vhhABTfFsWijmxVX58tDJKMjyXMJDmxj18geGXfNjJPCb3UU8AT2CsqKsEjcBvw27xfoS8L2Jum5wxDGt9yp",
  "key10": "3ahDH912122kvtSRcBmAt85QhbcfXi4EMfLDNttFmV31aVaad9dFswM2fhTiaQizmqevHZHUSVsWaZ4NTrrCh7jw",
  "key11": "fFkDmquSMR1N5iVVHAbhyDPT8ZcqEb6cWcgD2MhgfYhrU7Bsa7MyFBCj4VtfWoBNjf4nTYPCwj5ZWb39pjeGQvV",
  "key12": "3fwHHENaNHsUeZvpKBHkWcX45oyQg11BqGZT6PLQNPcQx1jkm46yvtT2hKFZhf5vaehTr76SKdSCL7U39szchfgo",
  "key13": "nFX9neHZNqAKNG1EfEiBfy9txcbnUgBgHVtqNsDNvvoGQf6q65DbXy6HNhpox7mKexHfzxTkQ7t1KnGQvkGXRGG",
  "key14": "3ajmfTP6u5hwaHudek78BSYSdaVdd3X5X3wvc8YXFG2bmfWvHEmqnrXPLuaHS5ENB3ZZPNjKbp42hAzA3Lh9Kjg7",
  "key15": "dLzN5bqZZGPjSQn7nQHqhkLef6RSe6UzEEG5ggkhRWHhMB6ZJzaQxbD4nzQ1L3bDuFECrbaoCGnEDewRjaiUJ92",
  "key16": "iQuzCbvVksi6wzhTARtubeXFdb8xoS84T6NP5ZAKn8T4CNjAaJLMYfzPJA4vz37PZfLdhH93QrGUg3YDkXLzEUH",
  "key17": "5mMXjNatw8BoKDYq2BxQidafffcezZJfa1kL6sKW9nqkHyJDpbmMAb6SmMqb6ikYKwpsgsSMMsFkQSkBEz147wVC",
  "key18": "5QDdyGtGzksi4goR8MAKnZXN1LGETxVY8yM9vBKMryMmzMUnprYyKqBkUn5EVtFS6XnTYWkksuxHweeqyGAeyJQo",
  "key19": "4iftyXKcnMr7CLUbJYuoSQKFRokwx9QajgZcNZ2An6qWe9d9H3dhGF5umc7HBjmcEe52zdFLhvdUQzfFsU3umB6W",
  "key20": "qCkp92QKRr3LwXeqc2MXoATbnEVsr3fqMan5QsguW6htyBS7KDSDwpvu2fG6pBXwt8gSiwVv9JWtmATVVFcu78o",
  "key21": "4gqBq8bZYYpJ7xXiQoCzKEWEvnZpVgUYp7CvVPHiswxDtdVJo1vtNvQFPkkEjd5hUSQZVczN2MZAH9RM6S2BCd8a",
  "key22": "4Hz9VkueQ1H8sajwau5eo56zU2HuWLjhehmwSsDzXgcTBmMopq9J7aYXAXHH5pFi97YmgH4QebyfAQ3hxDJ8beZ1",
  "key23": "3Aixwv6ve3qwzCsG5CHYH2WT3662VU19BgreK12EZut84s41Gnqgtr2N3Jtcw7dEVnQF2sWsrsjqxoNAgVYNfTE1",
  "key24": "2o5CPq195N2Zdix39yh3jKM5TcPuXE5vE6mb3oFfbgMtT8Kd2bcxqB12YKZLt2CYR2iHse7Yqik8TMxLfAzqjgrJ",
  "key25": "4Rb3GUtyfmufRSadusZEw7XLbgLT1xMVGaaJAJSDZ9GqhQSjdYCGyxWsK3nFWjNjHQDrjkhiJJqA4KpL7vMaRR1m",
  "key26": "39VqMyozwwU6Ew6CSbo4JZFhA1V9nm2AgXcp2YAmb6yFsEhtrWBCceWh1EmSLLafGrSMTJ3G3VEeoDbGtVFVmTpU",
  "key27": "2F6DshkcafmHSgg2Hx12DZENZdu9nxdZMGcwFt3ZkMuTjRfTuN4Urb2HVXz7UPxz2qqdXA5ZyE8kyidXhiZCMQwa"
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
