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
    "duPAoLHAQNMSwSn2QG212Aa2UWrztRZCRENzHw9YzW1jsKDwCETPMP9QDnDFwWPQd5dZVdZU9dUQDX8kSCg7QeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TGaSvFVzezVB6cUqDb14cvN3xBwfP8Nmv5iCiPFgpMmCzt5kiYQtWjPHcrYEiCG8sWNznDTSRWHkEEAVx2bwdy7",
  "key1": "3VXP9YRMd7pXuwmreMzjzFe3q7hab9E1jASb43J8yYmZMZKLnBWJkuRvtuJkvJwHh3esC484F5HqQA2b34KJojrF",
  "key2": "9nN13sikyP5UH3yo6cJb89s5FRABzVdkQTjDCEnpgn6ony84goMMJoCqqj76Ji6U2JECEQqWsFj7YxqCYHjkJkh",
  "key3": "2vepErWz1tcHtVfDZBaYcgaTWDEtZEsCtqB1DUYZdEBoNNbwjxDCT5Vr2jJTcE8FdfN571P9DUojSQZeoWPYCq5K",
  "key4": "h4wS1Hb2meVzoZY4vC4PCKeT1GBQgYiv1Lmh6utuNevjgCGL6Hc5qi6wGTwy1nsQsdtGXNc2mTsy21RuTRE12t3",
  "key5": "24T2gvGzDmHRQQB4oNHAYA1teiVYeaWkAkJt8cV5MtbJDXTAsZMfGTkVUNqqsC8XGg5eqtA95k2xePHtKg8DqNuF",
  "key6": "27HP3szvWimA3xCDmq1eeb8YzNrrKDU8PyY4M8oKKpuUSsQEdjW1uZEZLVccFyPXMZ69JjiWNP935UAgx65REtzL",
  "key7": "3KJSr1jjpUchAMmq4VPj6CxME8y5VYrPxg9KjJngJxmVmfS7tjPEKSdPjkGWRdb8H9uq51RzM7YP8pTqEinLtzvG",
  "key8": "3fZwpitVsrzHRAUVVacsgGcAN9jNhejoqojdK9jdguswVCqQ1y2erSm6SespXQkh4HybPNmFSAR6GVaYCTbvrrz3",
  "key9": "drQYTNv1cx7ZXbaVQGv28vc1g3wwUjugHNN3vKAQszuwVQvAoh9jMnp5jmroyAwpLvJ7EUU2io5tF8PGZnAnR8m",
  "key10": "5NThAZn6V61p1GtrRtE6DALq6DsYnSNKi73TDmTbqjP8w72SsBg5WLB2QujiMXF1gRusKXcNUQ7hb3MxfJ37YXVH",
  "key11": "HFQPb8szbTbZ8Yrv8XZHt87CD8kEKACx6hpHjjDp28otJmNvoSK5PegSxjt85kvyKx2eaturJNQDKyjFHd2Gj8B",
  "key12": "K8fpvb5SYBLZbbcFL41uxy3tWMLZSqrwBA5D9CzDHWcNJEyuTgUprSVvC7o7SJ9PPRDVhZvibnQoWqx2XTG4BHx",
  "key13": "2dyE4KbvVwZE4GmmXuhtHsNnBx5ejM1PqmtCmREVisUwbNwXb3ehqne7f3vFYzFAtD4EmDNjVr6aumB6eDt5oAad",
  "key14": "y2QarTsciu9ZjpdbuVqfDDfHVg3DXtdxDgS53P9zGN6ca4gWpwZJspB3d61YzxZr2SRgdjZwJuKXGdqSRag7bbc",
  "key15": "2HHcp9G21XNWg7QJSbwf7uU2QoKez4i9waMHodFk26p2QRh7CcvQE3Mytndnxhvfv7UYnNt65t8Why5fgVm8aQm6",
  "key16": "65SYCVqjPwJnw5pRvr5pmpDH4PXtRhHf9yDrNaxpf2nsNdpMPQWz3eMrRTsVY2hposWPupeC2Dr9zDsKAdwHanoY",
  "key17": "512Mbfgw7wSgidt9kA2tiTd1Rr9ptZB5eNqiHYSinH2anQGwW2p2QbK4oTcttdMRQ4K1SVa6eda3ocoiJApNA4aY",
  "key18": "5QSzJfchWPYkdxJjVmqPnj7hED5wDTtXes3zukitvY5wUuNwQYTX61Knwf2ytkCXcU1UVZWKycHCKifFaXoFZDd2",
  "key19": "29uqJx2EaLoGtzLqBA5Z8SZzZT6mQ69jk2FC48srMziUAMSzAYcUqDeL8xveoohSnnPJ2wZyHWBjNhE7p3oPfVYJ",
  "key20": "2zarB9aQMLCE1aa3FKRVNnJhfQz8p7cnizS6LCecfopnyKNUzgGimYyfPppyqRcL7RiuHCRL2mUZbmsdsP1ooJa1",
  "key21": "BpGZs9KyAmxymfLPJRL8Ca6FHemjqScwunG9SuHBWNf8FzjtFKKV2757xJHTJUVXKC7NHPSbcY4epVV8z3yAvkY",
  "key22": "3dqSfb4wCcca7TZxpSDrGqZcRAStLWW3egKxqnG6cFuJ3Xq2kwjvDdqeshjRRGXg8QaUbAnRFuZcteYDXfQDSJYy",
  "key23": "3eWbBxtiXASTFipBiejHjymCHHQW2z5oVhR6wxKLUE9nDh8akumt9LCK4iLedGDG1RksCYe9nZbz1hdpaC5XGFps",
  "key24": "3W2mXcqka3kMkD5wSRjCogT4sWwmuhffoLzMkat5pHMj27fbrj1n7qQaucASmLoMWqdsXJJRrobrgD81UQKGgwzs",
  "key25": "r2RmZEcKq2yLtH61qLJfE5Wv4SVhK1oTUZTq1XCpG6o1kiw35J863DvUprtLp27ifXU9EDwph3yXtVpjTAGAdJV",
  "key26": "2TJfZoFffMcxaC8dEvBq4YXHXcUd2x7JYzi2TLNwBwn74qnUu8tbWHHTY3SPiqRNckufFSdazYnqHjwJf7PgNExN",
  "key27": "3mLNSgXCx8EFkkJKFCVBf3kAw7B1rE2LuwQyB2kzZzRTPRRm3TTysV3WSLoeB7txEyWZaDmkHfQhKyd47e2Qdnjm",
  "key28": "3ay2wrTXd11YqnUsGxF3zrQXeyjTgbRamy3dRUXSPWq7StAmsEEviifj69vprrjv45WKjjsX8WG71c4bXw4rB3S9",
  "key29": "62fBQcefTT7VrMaJipjvoHVyzz6cG3hcf7cGEuDEu2KBsiVx9AxTsaPZcagbATd1newMtKnC2cZCbfSZyHH8ihMJ"
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
