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
    "2rpxiVzXbv4eryrbzXBAJNC6FdzhYHiEdG3m6gKd8j5oeBjA3QaCohTmGhAMkewvBxDKH4DQ9Ym5kBaLCTMvgVA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rxYKKox9LqRBxmLcGC1gAwggmbr93FEGKdLyW8sNv7VFn7s69Xh2SgGKWkDRmeLtaWEREcJzGUznE9mHmnSf22t",
  "key1": "bX5Lp9K2Bnk7PbHfF1ExkEgRGFFnhZ7mjD8ZD9i5vF5zstSgWxXjkFbR1XtNvh1PbftsBP1YRFH5cef3uGs8w7v",
  "key2": "5jVSN3FZhNc8r69MiXSsL94UtZaTJ1yPKLk8jL1Niu47C2QozWbaEVnxrkAShe85vLZThBw4wona3akRgsN1kLpD",
  "key3": "3ZCsDTocGBHyK857ajsqJXHs9a3SiL1hAkHHngoGEyaGHjjZWRZyUorZxWr56xB75VB73CHzmWVcMT9Yd8hz9AM",
  "key4": "64n7FcaEqqejWpcDwZHA6itagD4zh5dryUxGyNcBkDvH8uSn3PXTj9SnRWcUehCebr3BLmMXxJvhxCEfroypcH9q",
  "key5": "3KfovVvowXLMiTn7rVBHbWAvfAbcJLo9gDwRBQv6jdzPW7xSeZfDQMhxe3i3uv8WSp9HHh1xTDppYDXyryLJQeWh",
  "key6": "5wC2J61tFmPNFaRJ6TBeXr9LmVxePyFcEfNtRT7t1gpe2ZYLTpAYkXTQyWEvafCgMhShDNSnTUkq1jYRZDgJLaoz",
  "key7": "2kKHs7rzQozEF8aCiPz8PkFarmZPmqUHg1yAPVNjkY5RzVfqfhSXGMMHhZLdcfY8GkS5wfntzYcbay237ShKySya",
  "key8": "59JqoJQQLV763ZHe1s9c9K7ChcwC7pREfrScmUhfp9yK9uLsxdsPwL3jhWSbgX8RtWZKepppgHsN4tcvZon9faPF",
  "key9": "3bJCLx7pHxAwZSwgaGFymQtURdWrd8WQSnd3PnPCyjaL3tqDmodNMmmppQtkT2vSyeuYtXuHemFmQgb3pu6gR1Nn",
  "key10": "4gEZ8smWnUHiXKAUbcLkCW4K72JTxzPNDXaxTbuWfb6n3yzt44DfRcK6ZHT9HohNmhNSMonNHqe1uQG72YhUwNVi",
  "key11": "5xGbeuLEhnz3bhyt9ZDkzkePLR5GcjfL3mbkHMizhT9SooAt1DwhHaXqUyNUnBPzmEKZDSJaXQhEmDLgBdfducWv",
  "key12": "2qh16FDSBSdGB3HKrcY3YCk1e73BkdHHcxi2bQz8gHxWtRW5RKzrKEru9PMx6xTMka8osXXgwevuAgahZHGaEpZh",
  "key13": "2f4dHhq1ruVvV79RX7J3Rj7ak6VCVBYUNYh5MN6WzrxSB4dMVtGnxGKDbjNED49VrDNCtH4FRoFLKCtFVd962mAX",
  "key14": "4xhJ8jSPd3Vf3G2xxsFTyYZK8zDBd6DzqDhbnQszK8fSqcmcMzcywQoyvKiP6DZ9mDBfxcU6GQEQEwDrXdrzZAWX",
  "key15": "535oDm5XEcbmkREBoDuPvvzTm76mFstmugtsH2qefKkEKonyphr6jiXiDJghyCuMwKB4hCdRQiHom16LahoB4ksJ",
  "key16": "47X1nc6MuLUwSAi8VeJYZ1gHpAq6pGaRrMmTAryrZS8C7rLTVLqTku5gkCqcE2HDen6EYB81QqLgdR9R81uctMXP",
  "key17": "24gU67tQBQoYKE7zfxcD55pYifHca7GJvzLcyUkmQ6GUAz2yUEL3MJAgtvTVWjf1XHfVsguspbNKK4LPF9VivWgV",
  "key18": "4bDN4PAWTXhvYEdjJNuWCaoUXJ418JnPZAki4SJGMVWQ12BvQJuBZ1dNPMf7uKiccCpJdEKTykzpjE24oTR8J1eB",
  "key19": "JCk3c5hrAh76pi6QDWPzRPZagJ2Nsysuy429iYErfGgJuGvhB9SC2LYP6p7cmhRzHeK9yNRTEn8G2RJ8N4tfk31",
  "key20": "artFjU8qNHEnSvpb5wS1mpsXwZQZfQexv2uBMHPPaUhgjBUr2qptmaHb7TpZB9PuteCCvVT1YmQUa5ZwCzKabsH",
  "key21": "4z7WyojJGYH646cov2SBeKUvQveyTeqq7kuYYkieJAVMZPZHpdWfbepn3Yr4bVCJCEHoWoiLxicKXiYjYC27Bs8R",
  "key22": "2w7YDxWmQAW9dJLkybVWPCzsgVAjyuRAqBkcWVgbr5TdqcasDxo3ca49H5LqQxyK4howwJnUs7GGLfgJb45r47FJ",
  "key23": "5djnsjj9HBdENYr2KPKbcpnWmEu6L6fudoisecMRMNYrj3diaBp6n65AEZXdNJa6SaQZW7hs1r8ndsWWbH3BNrE2",
  "key24": "w45B2SNktLjUJR1KwyGqMzy9ve3FPV94TVpUBSn7x3b4KMhpuprxbV5HfhMnnW5YtZf113sFHm1WTFT8MD97nYb",
  "key25": "3vnPPThebVuotfEBtobPHXDwBoXPSRKYSsAQruYj229U2T7qx8tWMgC1gjaW16zneVE7tqtrSJRUuCrDUUppmYa7",
  "key26": "cSCJdbiAtw6PqBpsNUcCoRJY3uHqroS1JVoogCujbiy5RUEMjNn2t2vQiQpa4zrxEPGxaPFuiDARqA5dEQeci8L",
  "key27": "5PkNUVV6EjZPp7TehgNnvAQdsUVYGfZVZ9sv5NJ7D1w3GPFJy6Pt8i7B6VPhSgrTFDrQq2k8Hpsniu8cG25vDEVj",
  "key28": "2e2DzDWNca5XxHr64cB4hgu3Z8t7gpFuqLXXGkbhBHCcZU3FR1yWTAae71m9RCDxugREJMymz4AM8gqrQcqLTBsZ",
  "key29": "3zocfgdks213XQ8YHdmknMp7uU3RaUzYPpyw3T8umCrzE3wHmDVs9xq9tHs36BGgzYsP75g4o8Niz5ajVp7Phued",
  "key30": "4v5rvLVQ7KN2CyJjENw2ejozz1JGTgs9aSgABEo9Vnn7yre6FH2NLCcXxWWVk1sStVENpQDcoH8rHRawsscpV7Hj",
  "key31": "3kMFJxej8bqPY4eHFgVExQQsSJTzhrn7yfEdvUEZjEC36YZVCc8sNMhiQB9h4uacLLSYLrbHn7poGFzWnTe7bPZt",
  "key32": "tkeJfuN4dRZW98kiHTg2re1e1DuvPkLVsf5dtMhfnd9QYvxkMyutL4ivjXtajdfKdnodwfeLabm7FuhqzvDoJYE",
  "key33": "LFrMZZ2FQTRkbvaaq7JAbjFBwasP3PbMPffeSz6EGXQeD5xWcpjs71ADGWdKnGw1SJYknzp422oUVePSChU1ZqP",
  "key34": "4msoq1rZ8GzWUVUKYD5jnKwjGyAnvaCk35juTwmoa15sUxDgLUrAySqSaXDjhtP5m7kQghNq3qgT1jGoNw664Lph",
  "key35": "24TLV3aN31n5vKVz7bv1qC4cjvCz93eC9ScyX2jGUVmUsuw3LJP8FpPVKHrvKoaZfLovB1cSVzyP2JUhU46iZFwz",
  "key36": "2dwTfXJ618hJqdBsoRNeu9fA3Y4s3L1Vc5CWjy3cvJuxfRZCy6XtV2LNpgKDfRTgSZpbaw9XKgXfF4TEriDYWksk"
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
