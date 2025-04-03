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
    "2xk2iCmCDH9keECfPTYnfNF6ZZCU43jdGM1X8s4QXgi55ASrcNCv9CHmTrJZeqbmbcqDnfkyv6KWSPJeACTxzTWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zBEwgY3pgCFUiossAghE43U2UKWYnEbCiFm78aEGR4e8w6Q9z3N7hWMEcTmyCz8EhdPRuNfGDA8GrAkNw9yKejF",
  "key1": "5cqEbFh5HrtfcjCGm8Xs41R3WKWw7MLfgvYHQuBM48osdeP82vrVeyBxmAimQ9CxLoXHj5e8gAviRghpSrt7vzgW",
  "key2": "63KfH4Q5eiNaWcZKZ7bPtjtYJ29j6ZGutsbvPwR1LRZyt8An5kxQ4mKcQ6AohdWpt1CysBYyUiEQa142BXJjy73f",
  "key3": "WdRJtEPUeiBRXwqWWt33uM68He5ZDG1UfCQqfh7vA9CbAEKpEeXv5ehuBgwLpPt4uasL7fdWZ4V8FBLKtNafLUg",
  "key4": "rbXmeR4kZyLECwkXg8a7iG2VK5ESLAA6SeMsU1uWfZ4tKzeHm8rNrKiuWAf7aaSjihVt4e4TrB3dwNBVA2x3ZxD",
  "key5": "5tj59qsJPRmyrT8t6B3upxStbx75cBPbQHLEga3EtNrxTQkpgTkLCQ4oXigZYWkeT4QGGt1cACknZfZqeT51Ssvs",
  "key6": "2wJ6pSfB71Fy1bzTF6TLRMSTp4z3esnStjC8FAYeu3M5GKVkakzuU49juAv58joXTpB9a8A12p9GKpyRSmZ5GfQA",
  "key7": "4J4VygftgLeGS5mVmJZCYSkorczJK1igTL6wF1VKBqAijk8VnccdaXsqksufBLuhnuX8psMjsV9fPnZwwKSwPV54",
  "key8": "vdPaLXX1PSrRXURiN68MvRx1taLCSkR9f8qf5WAboRQY4Wrp4PwnBVuD33zeznKQh89t1osABLFqC5DWqbjtYC6",
  "key9": "27PRzwnvXGZ3rrCwCquaY6Y8iYZFVv6ecLGuyB1nBLg7VjSP7bq6nfKJLmpoYTf3BXwhsEVfQRREiSQWfh87eGhj",
  "key10": "QvVPGiibjqwd1WaT4eY7APDEe8GjKU2nkjioxgZ3fjiUUQZVikW8enPk4Zg9wWmxTF9cgXCtbv3QKXt5P9Y1T9P",
  "key11": "4uRx1Yh5sLXJVbxwKcf5rsLPJNzX6kAakqAYQ3GujNKuCZTkMXPi4GUSbuL8v3FjjeRLys3zGogjHQziJE8CDKmd",
  "key12": "4oYVJoWFkaX3vHmzdZpvXqjjdQ5wCB4n5WPsPYAumW65nGPSX3ZCnvwEize1hd8H7HuQKxqyVzCZqkZKhJQRqDZJ",
  "key13": "LMDXzsiVPdtM4wq7EsKMotb8TrtKRwXRQbKLPGnbdVdWD3nkNcU9T71ixLDMFrGFEd4kSq7yGpKWHvAJnSUL979",
  "key14": "2mtfiLUmxTmyvY1YRySkRx5fDajbTVuUZEX9C1b8v6UqZP6MpcALaEC518fnQoAQsv7EoLiufyLxLPUYQk5idsnK",
  "key15": "34MTsB2kkWZjs68nUghkNTwUiL8jPHFXrd9KEjvYJxzfUwSiDETEN8sCKjX4WMEKZxsVzxsPsP9ansvkboVqU2Ed",
  "key16": "e9m2BXXP6Fpa5K6H1PoS1HPMjsQw7tSMntKAJVkksGcjYDoHc74BJeiwNw8ueHT7aVroHwxfCU5Y9tv9mShCoW2",
  "key17": "4tFnSy7ZG3nhVistMSaBjbx8JwmypQ4E9wfU4PLvafoNfXZfG8tJPTNbmtPnjqYJvzJ7gdpyhXMYgUiw6vqMkhbL",
  "key18": "3dNHi5QNPT9hTsEr7NNvJMvRT8SgKkZxJW3gw7CyqsR2opPKZiZn2WxaE4NN3iEUXHcQoY8waiEv159Kn9hMs8tN",
  "key19": "2qgSuUUnTYvfXXbJEeAoS8fys3qpQSvCeWg9Gc6MFkTs1v4z7KPq1GqzKcj9K5onPcrY4fDR2AvxNutHzFjfUJcJ",
  "key20": "3GtusdpTmxLPXcf9YCFNjC4fx6aZmhaHVchVBZwEPoCyVA1ftnKux3KGUB8LxjU28RLAqzLENWvFnYTrqqjMFS5m",
  "key21": "eBCyBuY9pY9hbjmCp7LkFSsZ7oYCui3Vt9bn4m8HrfGZJceorQRUKPojhXR2e91DqCwmPVvBiraHUaWKfvXcAqf",
  "key22": "wNezVH1WxsDX4BebNN68KP7NmPB9dEmM1dJVsSKrBMfA53uZ1Fd5x6YcAU12QCC31LTbJQwh6b5rKaWsH9puuRe",
  "key23": "x6CmoLybV5PeDT7Wcb3butpLUqaBR9JTydKtEAF6n8EP1GZfobnbsmtRd3vmLuMWaaVQjQ8LEjiMWG7EJXstHJ5",
  "key24": "4pqdVQ5yKzEbxhvKvdsyWdMnP9absuxYVT49tG1eJrGCa3ciShqEYS7twikn2JLeyRraxNzKMkQfkPByhGC9Lb4i",
  "key25": "3T14k42YfWG1ykNZZiEj1uMz3ro145Tac8TTkJPfj4N8jyjwZu4MNd9ZsGK48r8sa7P6QwU5ht3WMaQV94i8h7xB",
  "key26": "5Gso3r5AgbV6NgZKg8WorqKEdT4YYLKXQBjdXvMNs71G6qb3trN9b4z8JVuZroqS4AAzYT1o8dwoCdx1KSGdab1Q",
  "key27": "79ozAiXU6zDpCVeAk8hqWe532SiVX3NCqLAHGbQZbqQUJx5ZG3GPgJzid9oJDz45KtnJhXXyYxBkQpPx9aD9yS3",
  "key28": "3s3CpXyDUcMqX8H5q5GgDCxNmWeorQREFyo2hUtrBiu1YVqG62hMQpsLLztRchaDr7T8wm7e2iQ2RcZ2VM6kJvpE",
  "key29": "26dPnzvcMKYbkww5NURRCmxfwSmZVgTc7P4JNLCX9cUGt3WHPrGAfuqxGfpXSzD3MFJBT3csxiw72VCxfoDpAVSa",
  "key30": "2fLQN23Ypn2LsNxKyQCKh7XUKn7wW6NuLGBtDWnuueoqWHaGhLUPsT2NEJZ7i7eDK4aCrVYp8LeJ8hv248qPbzhc",
  "key31": "22ApL7ftLPX6d75X7aiZkK68AWkrgNg3Hgq88XFpkdPwtz9aNoDeRHLXAz5ChjW9vxds7WcKS1crk8QrxjbW4cb3",
  "key32": "5E4gPqxd5DCRnR2BYx65GVSn4fWGptbyJs5oanNfPuZs4hpnBtpAtMqekMZ52P74aFyDGs4nScQaVLKkaNGRw4V4",
  "key33": "aBJFJyc2Uz1ARD3RpgNEZbDeQrPzszWfKidJxXBEiRBd5Wkw5E5QBRiGctoQeGbU6JtTFojfRt3yZsvSSuBSeCf"
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
