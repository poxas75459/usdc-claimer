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
    "5k7ijGGEJ62KhwNRag6FyJb1FweTvHkRasC8TyqLx76ganKZu1wdAdR4Et17SQMtXRfLYombDbLW3crPtue917Di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBSJAFwqkMZBA597rA4twPrXbtmTuTSGzRkZzdvAttm53FSgLBmwZy4utjruWoLnDyd7JbQvAedQRHDfd3reNqC",
  "key1": "r7ZEMYDWLoBb6UqUYgw24bcFkHK6eq3sseaenY3Gpw17byJBWJhaVyUGr5FcLn3J3kei5UmfyWRpL4wc72Tumtc",
  "key2": "3k833aazW3ZXpgG1T8wLFhzAoood3cx8WKgYNau57HUH2Q459HqftsV169k2mdL6eS9SoTbTXka6JDjWLLzpMDee",
  "key3": "2c4Xh8KnN3LmunsGZ62RXGjjcKEyF114uRLQLD483n5Jj9Z96RcU9GK8nkSJTWbstAurx41dYFUS4vJ3cqtuktd3",
  "key4": "2fVWk472t9zp3kpQy8ma4zsixMe1379xp2NDj3Ge5weY4FhdP2wzqBYJBBMVw4uq5EsGzNmwMHHnwBbJRigcnsbL",
  "key5": "vq1K664i8HMowZQsjtvwqd9esxNtNVCVoXtduSFe1Kw1aG7RDpghXAXEGi5uH75BuPp4Q9Lr9vhWhVsf3QLcrW9",
  "key6": "55eLseswTJfbcxs5PkVweNoAjQTSA2R2TujJnDqHJgcDxqX1KCB13FuDyZQhA1d4JreiEwt9GdTSdXMJ7z6RTzkX",
  "key7": "59AZ7BTtNTGA3AnNaQeK9rbNCfj3VvihCa77vmtrTnDHHdpEfeR3hS21iqbeMMNtwaPBxfBEroN5gU7HLRmQn99x",
  "key8": "4k5EBDEEznarwNQ1hcvQfPmzmwZtbq1gPTbJxDB5Etp4kyA2zjSF29DnpWh2EDxHaBwbgJ1oHBAUzQVirs9dUA1w",
  "key9": "568QAtyK8R4hr6ZtAMfaXubdqXRgg4oiDxVGxbHy84EH3gdyni9fo6pXik9affphoM2dVK3TgW8y2TY8k3umEQt1",
  "key10": "2xfzpQ5CBJuvigbMCqk4d2LAVqywnDLqUUeJVNKugHvzmFtpmhLhpRYYE5sBjEKAJfgwRP21u2bRNfesDnEWsH6i",
  "key11": "61KFgpRKJMNgs1DNaXsnJPBdopN2VDgoj4QC4spgfKP6JZQZxT9hXPocbzWdLTKVZz49Uknopm2HwuruMn9MNqQW",
  "key12": "38D2CaxB2jwD5XVGbJiG2MD7FVhS5CL78hQTqsbJ3d3cxNDWKU68LzyMCCEaS5m5YpraLHXhVsCgM52vDhrhYp1r",
  "key13": "2HPvE1gjsygNiJ2V1FUFpcD1YrzJ5ua18d7AuTdXEUupTpuWaS3Pp4tkEWMtaJWZcqwCbWhaWmkxs8mjYYYqp23a",
  "key14": "33QioEm1SukQ4NQyWh7wKoRa6K4yStGcYjMnGdKWfpV6P1wQ4DhDF2TkZ3zNXNegvad6yZg1gRB4UfQokuqXA74p",
  "key15": "2i5wb72XssQsrCXa3YXbSDDva4Jgs9H87VSZizRkEys4UwHGhiwNivYErE2WUVCPjboMZDGuPcZJEcGtMY3F79Z1",
  "key16": "5KmztwE9y8h1bMEmAuA36M4Zepq4XuJqLBm1nfreTD1KVDpEiDTVQ5VFxA35NAtm7G5B7FTkQrhqG1YA5JC3qLKu",
  "key17": "5J7LrNynYbtczbWtWSKg9x8axmzMaBAaGQkyN36eU92zCAvuJ6NmZNnUiArmEmZ7diRVvNTotpqYB4JBjVGtpa8V",
  "key18": "5xvcVwqXEFX9iD48v4gefi6LNUqU58Rs7y1ubSB43JzGYqsXjWu3SaTmTLkAk5ERMXcDhLxSgQiqdUHE93hp2Hk6",
  "key19": "3wZNYkdAWW7HgcEJhcVDCR4dcpJHC2hNzMKL5LBkNVL5auStYkx1EfuyYUPTnmqNMRTfQfy6aN3CZxFAhEGY53bq",
  "key20": "iUuCdv2DadvPvDujaq7ActPMTqEqavL3Mqm1rzBk9DRxAh197CnoKaxpUHPXJhQSJDJtcCKk192uWSt77QPSNjy",
  "key21": "3wGghuHsgmqtN6qesRpm7H8NXJuZVGqv5GzVGjvdzLEjZVaZ9jLcme2apWRSJE53cv39aU6PNhejmnc7vZCzJFfp",
  "key22": "4oA8ogCLojn4bN8hqaX6SQqUdEuL27dMibDGobYAPYvjfuZFdPoYWPky4fx5winFb7ryR6TEG8R1GBSG5ZKkz8RP",
  "key23": "5vqhXKt4pNbjQRSpFTkiU6Nq1o5b7DXZap216zMqsrp5uspKpfPqiF1BYvg2ZcZmyDuY9dZn4Ro2zXNbFRZfwLEv",
  "key24": "2Qb7tkruLu938brxWTeVwPp5gVqzmz7AGtuGunJapGHy6Peu8bmadcpeL2P3qB1LZUWbr3swBPVbCmudELEeVs5d",
  "key25": "2xbU12FiskByK4P72RzoNTz8CzgUs7A37gNXTdaD3GFvPmSnfx8GWsTqBXdd7RFq4ZJGnxhpMmooB8RmahjvbaKg",
  "key26": "5ENuxVMycZFBZCvcXkmLU3thHVZMoBttST3wz3oi1fxvJDD8inq5sEdiz16hF2E4ECy5rGaPbcTwviM6mTJDCMRa",
  "key27": "5bSoit5fhTmAWZ15CfWEnB7hW7HNRVnceirAhBiQeRhdsGQ652McHxXLKcc6qN7PTF2wutFFrEGFEVmhSXvwerCd",
  "key28": "35DzeJ1iT1KdKvzoCM2S5dQ7tbP68tJAm3beKZ5VNBLSCrkehvQVxTXmxu2b6uJaXav5QLXKTs9Dpo1m8Tw8WErd",
  "key29": "42ZwP9t3X56yEoGkjwLpdNysiKiUKqvD8wD7mhcfiUgZGR4JcK3GSnFtXxbrvJtrzRRWFtEJAU19JWkNQkq2xVKR",
  "key30": "1XLGUyy93h7EBFeYV73VLgYsWmHaJZ21DJ6d7egZTkTY5jW1Jy91avq1X9trabi3DcnLc4if9rKuMX1LJ2rqANS",
  "key31": "2NE9QehVRTzBxUYeukgdn8HnCtvcda7dQ4GD28gH3MW4kb253MWtTcEFf1fu8iAAKtpx3bxEYXMgJHt185ec2DSJ",
  "key32": "2scFzbXmazubzbzwQP49tZRtqZono55kyS4hQmUdKsdWFzVRV3Cwpsfg8dETXzPvC7JsP9pxyVzAf7nP2XhvL1JL"
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
