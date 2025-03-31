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
    "4ZMHe5rEMghm95CwvXK7qtVGwDwpnkmfP2ABxjNTcJfM4HT7fvyYzUPGo5covrQ561uC3KLdGE8XAJDSdF9wjGFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDwXx49CZMb7odqwNkvKTSJE5bsAwQQgPa7c2o7zZJsZzT6e7kE5x6UFEaJvfpCtQssgXyJQGDrhiGMxntfbiCN",
  "key1": "2SnqEzwnAxQmyEMz2EtKt76xZv9PFuB6BDJUk16rGYD79s8tkGCNH79Vpp1bdGWJCwEXnUqQFetSiaL1PUpFP6Nc",
  "key2": "64ur9D3pJcfCvnDRD9Ln1BFcRZRLmki3UnS7Wr1NByhSuuBptN1dQvVxGgdfGepTsPc51GLeKsEhHDx16h6TZvkV",
  "key3": "5HZpRx8eBoF4h4cRuyZ28fA77AZWYz92Ew7aiPuicLFAMAfMvEGKJPeGbWYbvWSuEyfNAagsawEdnJ4ZTS687NC1",
  "key4": "36Vn1B8vaZdqTFQSLGX9WFVB3kVVLM2VZrc5koeZpZEHbytpa8vb1i3UMouUuuqsGt5ed2wSnSmHrA3qBx1rpRry",
  "key5": "4h34sD4LaPvFRTFBnqq3WcF5RVrMCN5T4EX4bgJm7ABThKYgzPk6dgY365SotnKuTrcL9AAYt5nsYSMXzjgPfwwi",
  "key6": "csoukcWayAqvrEu4SyNqFHr6dn71tQhTRjkvE889UJF9Gvau2aqfLtmBR3kreAWSpUwhg5vpruaXJiWETZSfYr1",
  "key7": "aDsMBAJUNYVEAc1CN7azteiymgHxEZ6i9ha67HCg6A2guPzbejq3FSUyjKP2VBXvZDhicojR9sWPsr3Sqy1gV9d",
  "key8": "5d1dXSYn9pKfWmmhsbFWioHCkcXJ7yHxFW4o9JUE22UnaK1EBKWGQTiZAhYeWMx1QeNN2zxGoBtG4HrXsgsuSQtH",
  "key9": "FJL9KNMWoo6jPaV8tsJCdhub6bJJr4puLx9nQeUsGZkXXSmrScoN91aNU3PYrg4TxUWVUoqNovqMV39XKPcPPuM",
  "key10": "42DGLJrZrR7Fq9Af4CZyypvGNm6WfShNmGZZWAq3PfzMAYkvQ9zzUToSKYK15fmeT1hMJVVSR2B66aimu5QDbspc",
  "key11": "5vjpdwfjJSiRpJTNnhxYh6mGHvPdJhpHmEJtKX6EasyPzcwE3jw3esaXGLabecJNs8UDWunbZHqpWjCHVHvfmGAS",
  "key12": "26iPkDYmdsAvWEns5CveJbqZqbPYheWk6edsV8UK19YPrpWjDrbJ5rf6onXGKD5psgGzRv39oTV7kG9twQthdPKr",
  "key13": "3VWg5HhFiptq3QJeV5H2Fcwj9oEVM5r1NqwMz7xUp7f67aFKKRQ4Vc8HH6DUqiQoaZLy9N42FNbVEBHWAMVF7rpE",
  "key14": "2XjcLKcU53TPeeVf5S8difJshQzuZZjAz3aBSUmm8qwE6AwTbmgrgXMuMGEpuHRnSY2yFzBMin5m7Yf8o3Hk5YrK",
  "key15": "3RMF6ZdfHyD1oEoBWjL4B786M12psYCGCdfEB4JYKd4wjKkpVkhm8pG41YphHbkyS2U7TwjhLD4uBKp25WuRNkTZ",
  "key16": "vdNMcSdzpTEMkJ7xEVR796DoCDJNk4m7HDc57Dh9mF9EdAoQkmnvJtFwmrPeAtd38WC4pModstEoGiKvyAN16sb",
  "key17": "5kt4UbE3kaiMJxbXuEELzWtTbDkEWLygLbNSQy87V9p8xLGcRxLFKZMBBx9VV4Hw1MjXqFKfU4Vg3D8J5VTti4jQ",
  "key18": "3Wb3v9yHSXaMFZwHVMAJu1CUVap1uLsiL1ga5nkxhiyZjoNmZvTBiU7t2NNSi9LmuWRkbvCXTtpDdAyjj3fh5i1a",
  "key19": "2bHtCFJ6wnf7bmmgJQsgfjjm2kzrcZmULXZGAu7v7PDbMHfcqLBJb5gKb3EqecV8ZKL7xjy6qC6TQkGqpGC2qdfZ",
  "key20": "3ws3NNs8CgsdgScqoVysAB3AQYPcdZP2B8CQJak1Hg1jpC7L8HtmxeqsuyVgAYLgnTuwsYtALGyTCKQsgwteJCxd",
  "key21": "4dLn5AvcgwAVjZefjrwREBaw3PMhKk7bq1zCkBa2rcXagS72t5dZDPsogbyVNnPM6TGZTiYWqH4jK7RtJpkXQU4S",
  "key22": "5jAYDYqehLgNUnqCAFW3US5RmoeBJvReVqLBU1pajA3DE5CWEGktGK9zGSxnQMSYjuWTquT6jZXsCCX34Lw8byXC",
  "key23": "3MidDDGNfv5T4tZVm7XDDSZiGBL6cTRTWicwXLpA5Z2snDTJ6qNEHVwY3n3AAXDEvjxNSNDK3bm8nU4hovEmx9ab",
  "key24": "Y7yrfFvuJrX1gBMyHNqw23xa1tq1boWsHWNRmkSojpRgXzVMoHFTAYvZpbP6mkbjzv3cJZdqfiQtgmNMw9pMLMe",
  "key25": "2JWD5SjximJvNGC6abH8TMEszcWrZvRsppsF9j9oLVgKAfQDA9ERqSYS99Wcvw7je6tfzTGNX6mXEb9F7LHXemcb",
  "key26": "5qiNiyFi3G4iGwApiB4LXKQZGNQJzV4ifrBahACNa4h9bZ5Uz7MY9xRN45Lux6xirH3n7zQmV43iCrMUS84fxHWn",
  "key27": "5VijXqeWfvUduxKgmH2YaMfXLYuGdFBMMGqxp48sTEpmPAjnkhDdNrwndcCFMy2rgdWjGj9WLeHvZe9Mp1rpr57B",
  "key28": "3k5eWVmPbaUc7cxs8MaSexaJKBQzz7PwYnxYiqYkeMoHGexMU2RVR51pReMmiFvgGP2njcwpwchDy5mxGum1QSNE",
  "key29": "JsxRWckrBSMy56SjvRP3KDwT9UsjtbsyaUUCBLt2NHFFSyb17EaWoQLW8MZ5cLfbQq5ZGSQR5Q6B3jZSxboj33h",
  "key30": "CbK3mxSvLo7P3UCqeaBk7bz6XR2qa1tkwuoa6u6m3jnkj9F4Foh7wcJ7fMNjCdD5WxxVLm8nYyr8P7qscuoz78M"
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
