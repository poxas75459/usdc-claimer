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
    "2gYRVVQEHHFbJYxvgZKCLis156eWmNUZU5zkzdt8Xnw9uo1ooAcV4zEhoh6aZfVTvsSo2BdTtPo6MQ34xLaNN9dD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32oSsfhwUJrqUx2dFzVGfDtMKr7WbcWws2aUHAoLL5cQsBsi6gJZQfXXk6HRG7PSRFmfE7NE7rkBPpCoMod6AfEk",
  "key1": "3Js2Z2WHm9mVpJbPz27ohWCf8zw196G1uVRBa5HQJeFGgu8HdnaRG6Vcwb3UZpwjfMFHsX4ZgThBihq1F4aMMBbw",
  "key2": "4jQwiGSxt6ohAVQSGcUrr65LKBGAG2oKuq26R1qQ8gYQmvFoEk68SoCNWabPTfAgE42uBfFGSfoRYcdYHXpFW9FA",
  "key3": "2rcHRDJfPtaDAM1xmoHr2nQ5ZTpGBby9fG3t1tT5qKdioysfxNdM5XhGpwHG55A3oRqR51mrzeys2XitK61achkG",
  "key4": "4a1TUVLigfyJqtjWmamMJDezLMjYdKvUwKR4NBG2kKFDbBbhd7BRD6kyo33aDSbZ2k4iyBovacjUy58JNx3E6VtM",
  "key5": "4tZJZmuTNbs5NKNja9RhTc4v13qyakQQgivY4gbuv4LjYu2Es1ADnRTjaYPHmxk5wkhWdtgddVS6NBxvSVXY1c1o",
  "key6": "3w9RKnwHXLfePsXKbgzK2MeDkeXh8ozq3zcV52FjRkUscLarnx5AeYCRXjF4cpY1YdviUNMB3iWdEh3LRTbJTyWj",
  "key7": "47ojM6qj9iBNzRbSrcPCf34TcF1JnGMVTWT8KEUKyA8BL9cQXA9DzTG91kL2CaCKMEPk5cvjwQD8mxPZcTWbebjd",
  "key8": "4iERg52njJJTirQn11B4M7HeV5E26LVLn6GzLHBM686aTUhevdrBpaS4SF153R7Pf96ioAVRDUsqQKsTCKuNWEz4",
  "key9": "5sEq1vR654Bb34bC5bWDWRW1yCYzbLkgXBQ9W5omffdrsJZD3BGBJkoSxeKHwtQPiffa5kNXUaJXteQo2ne3gw3x",
  "key10": "5v8r1WMWF5G2vmj9UZDqn3vAFQsMEiu6W2LQGWUn4U7heDmeZtmbjaQDSVF8skxruNZeevymhcUuWb6ygQ4nxwy4",
  "key11": "5pN9RXAtQ9w1JPKdQkPVhnhRWbNx4UYDhuiaWMikk17uWYaFbVo9UZ2y5utFEEwP779Q7smwFWajx2Q3QcBAbVJM",
  "key12": "3jd8BkMWYXTQjRjrTZxA9hHwkoXSeMuUGTrnTdv8DhJKZmEDvpwEzvajusedNwfgrVBMoGAP8q1BjhXtExH6e8Zy",
  "key13": "2oyxWL25kAjaoQ4Dpmn9JS61SuXg4sXpkgQvnvibWSq4AWkDzmYZ3o1AHQqQND9sXXqxoaKAdM1ZfkDAPcTCB8dd",
  "key14": "5z7nbrd647URLmEJ1MAWyU8ySMBj66PCcnyiPynG3sQTtgjhN4E9Ppvo7dtMLiN6j5VBD3KGR8W9mJoyGpTHFN7b",
  "key15": "4q2dDxJzL2rE2ovzViKx33pJ1Vgv6nYu9FnnQArDkVL1TCf6QfqpMSJEJs4wBSB9BZ5xrY1P8goNhAxBJyrcWCTN",
  "key16": "4wQnq5ysQ9mrCNEuJxNApjwTV1W8h2oN1mJxrAELeVQLkQ2VTiivYcUionXkWiLReaDopPMJJ1XoLvA4XUqq626M",
  "key17": "2x4WjM5LoPTaWpYeGmFxSpw7yv5MA28EY3wb3TsQJ2zyrihir59ZoCaNvLNrzRFZTXD1RfHC9fJBbbdqbKiGZFZZ",
  "key18": "2bxgQdQG8o4Wgfu8cy7nJunKyNXsq8snamgon81mx9womyRFJmmvFq6w6QE5Yv4MjAbiu3iQ2NC2gAMvHq91QPcS",
  "key19": "67PX9japQct1gzxWLmPsCBVLJobfojNfaGiLuwPyXi4UbdyJPBSixxfXGzG69ASXRuYnSa8h5STSRsmEMGSybhKo",
  "key20": "2YQympfKWWZyQ2FszroXrvxZNP6967hx1HjKHCRgK9uBWSamCsYeiZ2p3pHzK1CrebUeqKdGVjeRqF5wko5dG2Gq",
  "key21": "45QowzQzUFhd1y1QkQ9GJxM5CVzXcF4XFk2dPYyH9HNJXq4tVJRxCpuE57zajXguXYbLKaoXrXfdUXQJa4Q67frz",
  "key22": "3E2KGChWC1Yq2trvVropFhxthFaHzV9xuSZzJUnAS8Mvu3vYMyVzjUqpz7NWBpdr6ji6Nyp78qrwGx5EpuDKcaVZ",
  "key23": "64BiwAG2BuChooBah8MfogMuKWMVVqCEgGYAi2t8TY86S3zthBcRvagzrjT6BghwQRcwnhpepRfpTzqjydy6D89f",
  "key24": "4kDyYuupyq5yGiqY7fRvW1s2RE8ZfH3A9WZkVQNK9mo2i66P7c7zYkjK2k5HD8ijoJWwqhUW1kJMmvDACTbxnVLP",
  "key25": "2wVtNeeRTxbm9vRoircMHbYweKVUSRcW9LV7WXrTXNhJkpHYcCY5HMs5xVgf2XuzRAiQsQgwqfEi66qNcJsp6ZiV",
  "key26": "2KwMHYrfdUysg4xKBKpmL2XJ2LvTumdkaP3Z8tuRX1asDevuG7F6WQWnKUU2WGuA76xGW3iG8YubpGcCvdkPzcBX",
  "key27": "2iR7tMjHCNGaHZC21EvwuzZQkiAMjmJCHW7WsbyEf3P7pp1Wkbd3BE46FrrzTqLRwSaTDMUNJU3cPx75UZz1TM9S",
  "key28": "2iTVwRstn4Y4DyGXukBJVSFAH53t6C7vSrgeEWHZH7Tja1YMRzgk6mNsJZMg7Vwnt8xmtx5LaPhQFQjwnQbftZz2",
  "key29": "5mgENcT79bBacuiu5m6YEZHJ1FqSZXwLs7RQEnA4k44obKPQgSqLeHu8KKpmcv49nfeAqrTXKFobzuRbJvjivwDW",
  "key30": "5VYwgpBoFRLYhQmCznFjVabA6LDQ6sf72Vvhc5QXDRUyP1FDDRYHDHgK9MB51BkbKLsPyfG6PGDTwgid4mLDikkv",
  "key31": "4kcwyGuWivL3j4pXTsNHerSbw3XbfK43SajquBbRzQEH2x36UE8MAyjg3axUqbiBt7CnjuUAZMAsWoUJ3ZSdp6oQ",
  "key32": "2AJd2JQfAPwAgYSnLHMFfhwCr93XfXVtNXSnAqHhFbo7QE5gW3jE2t4Zo4HaGGauDtYgLsZpDX2Ewya7AUyy4ZS7",
  "key33": "4NmfM17SVrWP1U1GgvQga4Ktx6WyCVQKDVDxT9RvAp916vYSjC9emm6namTaunFuMvNJTkhgJKCw2mJhsCvBSPcE",
  "key34": "GX3UMZowRtpzpYrJHvTQfJExafh6oJf9DXSoHTnAcutCbm98gkvY1hLkwG8ZhzN4SHuxsJmvAZcUkmtZhDyfZbB"
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
