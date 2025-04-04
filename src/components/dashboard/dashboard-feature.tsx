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
    "258LoGbYnHRwCPPpcJvqbx58DHyiVUJXFCTTws7KCtGWXmPvT7TiAWb7tWfbtWZ8wKKv7NuXcfmEeh58KEAsjxob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KQixn8q8bwNnJMZFyEJjJt73mbvxrZi9QcWbtC6Je7oxkhuXbniLTioQE1fErKwtvT4aEyLh8Thaf3sWF78XRzs",
  "key1": "591W3fFsu7duvfNSJ97EYsucdyAebNrD6V3aPw9tko5UegGfGepLkrnSqMTxDjo9ZaKDmp379buAE8WVmAMzQFvP",
  "key2": "43vwuAsoWdT3DQSk1Cmr2RZGeP1BGYtCD6YrCg98m8Bnw1sEoWKoL3t3sVq5R4HnfKN9xtrh7Ehxgx5gCqEJXNSG",
  "key3": "5z3U2V43HdtmT8Ba5ZgvL1JgpA4x5g3vy6gwRKfsPmo1RsC3vDY8edqgP2MX5tiaUbtWzeXbynrhSgrU2DqS8fv6",
  "key4": "UKcy3ecHYmu84X2MUb5yHbHWvRwWyfP7L7tSddPvVEYAPmRKbkdUPqgH1m1t4d1qqqp42JtpLJWrVjtc973o2et",
  "key5": "2cj6u8679jPWdWVqQKc5d1hgJaJntRM9eKZRhMd7H2zWywz5uQhfSXomtcaWxUX76YEouDhPaSutmaYbdijYpQN6",
  "key6": "4ah4VZ2KGk1AZDYAZXafb1HxcRTdbqMJZn689tJDTGaLNtNBFB6oM12d2ga9Jy1WpzYqYT91utCXgEfjknSPyvud",
  "key7": "4e8Jx5sa2M4xFf4ALtYos6qd6pSPsLccigmogbWRFtBwP23eBPhjGTQhJ8gKuMPx7v7d1BSEL8pv2mHSSALhj8zj",
  "key8": "RQ936Gvx47vBRa7urjdrQBBqBq8gsa57s1Q4akwUZXsA19m4x4zC3jxsma4PizeKFQxWJz4YhxAgvxj3shztrQp",
  "key9": "22bb8qroMXH9jLDFrvqTVgcNXSDQ9wFKSfkGAewktMxpvv57hctCBNqzgxe5LttM5UZpypNMq2WsAcNNiHjqcS5S",
  "key10": "4sK8HG5bRqXCRFcaZBdXM9JJ6k87UGP6e7jYmQU5mHc4v9mCiRTwJVroZw8UtxLhwkEu4tjqDCPDpqmRejwvCBKd",
  "key11": "5xJc9kcVMwRsb63VjzRoJogScAmoBYQCd7RZaj46p5R2p4YRchUhFiwJHJpuRqg9jPmLUKbJL9HMZBwFgJHFawGz",
  "key12": "3NNDfc6pawKrkzbpJVn6XB987gAVfsQ6CLcFfLBnH5LEuHyLYmAmuU5T3Lyky7NGkPkpUaG8KR18e9L3e5FBUDnx",
  "key13": "FUBsAS6vVuncMoLCDpNYQvrC7QeqhfSYLbu32Mr3XWrcVv1ipYRoZqugCEz29taHqK9r7DR6jdNR3uhq17qf4Wq",
  "key14": "4a5ae6Gk8etEiq4CVM7uHRGtTDsqmw3xyrfSoGPmqRXbzhBbwakiHkKf6musQfjwjJy43j41j6KFdEg9fnhZTaA3",
  "key15": "4a4wjDE9yQMw6qJxXkiUpmmLWcqUyer7vzCjJZUweD6KHyPwjH5hmJaF1KFRvVMfJ6VMYWvUFCSV7FkrekV9PYg9",
  "key16": "2m6rPMxeRkp75YKQeaJGvToo8kxymYdF2adY3Kkk7PgLTmKoqhpuo5UxzyQNjxvjonnQMEvcCX5BLYCo8npfxrni",
  "key17": "2X9nTwugSfrkr2CXqwhVnKd7Tu44MYeZTM6EuTVoamtUXZH5ye4wkyjGhdMsQ1c1axMmUTRKjPDUpCJwtUte2qCS",
  "key18": "2hE9w9ESxpMT2GwuK7xvdjVbc7GwGy4V1QHbMSFFUtdBd29cZVkr8XrWV27w6haSWd7p3PxkxnhuQXfAUCkjG4Qs",
  "key19": "467FQUGQEt1AKF9bJotALC3LbfH5MEgauDY3zeXvRzq7oZAYr1i8S6bto4BJj1Kd6PtqnJpX9iAMJCgdRbwXazM2",
  "key20": "CyXpAdYW2SSacbmSRrte8majvzXpkAVxTMYznmqVBcExj6JMurYfDQiAPmKgnTMNDsypiWdR6TWdjLmWGvvg1NU",
  "key21": "3CfpDak2u3wi541H7R1uHrvie8t6q9KXvoRohzVD1PeDKd5oJjw4tcMbh9kHyXLCSGWtPhdeGymrKwPKPduS1f5z",
  "key22": "4DFAzT2zEv1s2vYuWSEjVYYXRduzAg27woWxQ52u3gRJ6vuWm91dqUwHrZxshfXnyow8KmTtr4pM7iDaepinsvhS",
  "key23": "5jzAnkv6jm1Mxd4wXFGy2vFj64u4jdhC4U4x4FwNfJYSpjYAyYmv6pDndiB8f68y6DxmG2TctKXemeiqJCsA9GPd",
  "key24": "4sJVyKH9SWkUqDi3nv4f72YDw4rdqrBG8C9EQJbvhocshoNfQrrgy7fVzqvCQFznWHTqtUcb3CsBRPjsvXKafxmf",
  "key25": "3Dgp5kfi5Z6ASVrmVWwjZKhjBQdH9LAXNo8oajhTKBNd2BwNxzzr12tkG2a1KJgNCghHF9GtacCZuXbSmzRypFyK",
  "key26": "3uGZ9qemjPAh38hqmVJhbwRNKRqUPC9VzUHpvV3m9whaSWiS98BwweKsGbGyBcuBat6oiQoRuaQoWYUkpSo6S3Hd",
  "key27": "DZTRKWhayZ6vVeBBNVDNuwLJvs45s4KNii3j1DaRz35Cca6Nd9aQFkUnKnNY41Lntq8qZMhpFLLNkNZX5EQSQKe",
  "key28": "42stAjh9ux5SkDZBYh2EFGRDpDkQweomkRuz478wjpfRfVnXqZ5uksSzA9BQa17TAHp2V7ioXrRAS4Heuxjt3nsb",
  "key29": "3DtmHP7fqHfi9AKeQjPN5AdVyMvxLKk4bJH7n634s6KkuXQGkP2y7UztPRuf72rnqqgH11sRqxrUuyGoZE9xyjAx",
  "key30": "2A7F1UjBAVzBtb3XMHtoYXzJ1WhVnp1w3QNQTqkFhGcxHUb8xZwwPjT83nRKPPNDHrzT7Jiim1mfMbt9Lngqidjm",
  "key31": "pUdXPEVBJpJPmU8kExfKYNcMTDESyvM1JEMYKDWzLUKKSyHVmqmM1MXtUkeHLyXrxpNN5SFYGxdf8uwVmo4MkMW",
  "key32": "5t4UprC57bcCg9s4GvpkvZcsjhkRsHGcNrtmDPnk3Xo6ybJpDzxteYbNw2Wrj68iaBnRN6aEzyMsRU891mFvUWeS",
  "key33": "5wdMxbYUivzq8HayGVfRSrwwwipYL98Mm5y2omzVgJFDXEHkQK7muAAksHd4Xx9RUom3shkiiUR1MAFqFWyYSUJH",
  "key34": "21R9b5qZJFL1Bj1BMFU1yB4dnFHnCFyxvRvZyAnoeHEpRYmMtvL4HVLZgesupNKZeBRsMFAirbwp3egCg7MSgZJW"
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
