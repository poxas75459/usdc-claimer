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
    "5aEXWoEfcep6rKo5cHB5H1Bp2hP9TF9fLPX3UZnbBtsJhzTKbEkKJwUTC1DWeQsdMX9sX8HF5HmKGZigzWMkG9kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aMbJRQ89mdxNMEYU6ZC85JdNuPRx5iChJCTgPeQ5N4UojfZX3mLYA5LSDHxZF4GFMJiqYcWjbHVmVUdvaiGYpob",
  "key1": "2cKkBWM4znaupWTTiAN4SipG2XPcFejQKaTqXkgENJbtHmuMDhmn1ff6s4sK4UNDZ8Rqo9LiCnb4Yo2xuysmK98P",
  "key2": "2ocC7ocBLs26seSShqkt3i9sE1aTE5AYUZgTpEmqeacEfaX1GwQF8T1YZ8Euu72DpZMDWhELsoBhsk5xS8Zy6zus",
  "key3": "53kzPnCfEdVomVZZK9idrSMRAoZCaGxbpTSLokh8QhbLWpExhtFfRxNK3DPjPb8CuKcYookEnawqKkApunFtZJ49",
  "key4": "rY5PnUvkbP4XUjuH8NMZjBFj5g56P4gGYjuRFF3JqZmCLZJmAEKC4JWKapHzLhtm7mtcomC6JGQSo1uNjSBJr4d",
  "key5": "3cgxXRx8Jf2SUWVu3XwMfjF1dHiEcupiorB3bgpAuvGbEJCqsz5EVSgj2pYGbAJ2tiVjEaqVSkYXpt6nLpXNPmky",
  "key6": "7mphGBUT6dPLAuRtijqEDvdYaaGHsgmippPvDtD9grm3bRMEUoF9nwLQGdYZBxzCJWaV9ri93uXMpKjoowGmCNt",
  "key7": "4vBLZEEV5bHUNckyq1dvtPonDrnyQotNbmjmxGHqtLKJRFbMhcbhizGDeDsus1TZ731crvV2ac51oYSVFnJpgKMu",
  "key8": "3kZGsHFCGpc3ztQTKHWvnVT2dPfpjZHwGxMrZD3xWfsTTUEXx19xHyeexgtvkaiJ5ocNtMC25BV3tntSfQycT3gp",
  "key9": "3aBk43qRXPJCQ41BEqWKAjJAVAtMkusNLaLoCR24uUrbQX1gQL5zLPqs1LuFkEH7b3DBNSvYF6MTBKDw2hoidpNx",
  "key10": "5pRyvVHdwXdfPkYtAJ1G68oSnH782pkMjCvny7aF4kFv9KctkZeroFKX1jHv28pP9PrxxqmHyzjVSzA6Zgyk62SW",
  "key11": "J87rhs31EKiyRFmzW7TCahSeDF5M8d23rMNE38ky9ijd8Hpjw4haGhLqNLS2nSUtBrJConYTqABQWtwuWWpLrLJ",
  "key12": "TMjLzjPKwqrMYMtwfY46XgTPsqFPxikeJyBFKEpCCe8vMZYcQe2p7S4io8AFu8gEpSVHrhdDhXWNWk65UgBex4N",
  "key13": "4vffwLPzhb6b5CzkCzizXKse5FCR12gXPKAkwjVjAYFNhuwW6rmeRW1CY2gMaSvmPFTMQAFWF32PbTFmAWpiYXSg",
  "key14": "22T35QiDwAxrMwMtC4sv7JU6hDzkWbXCe4ZoQcJyy1pSBYH3B1LRy56PJcmieqLmUT5jjoUdt2nsPTksZvUj9iQ3",
  "key15": "5D9Xo4VJjrS5EszdzKgAUD2aerXLTGh2ARja4XWzHMjikeGohe3wycxDQxkExZ2haSc6sQHTsGFbJwVFYtGJaxsa",
  "key16": "266SvWsFUyakQTk9GZo5nDRHbgZTKsNowaaJc5jeoAJdtZzS34b1L2NzcMHoZW3Md4HngL7JEKfTqWPdKpZ6zXrr",
  "key17": "3BEmwgHsgJBWprJ1fo5qUcE9hj9PaAMX8c4HS9icFHad8wREgCBc8sVy4271J3fK15fLHsujmFuRq3doSFxCXAwv",
  "key18": "5WL6ZBTjPE6pnNP6YCfWxZ1fYdfMqv19ZEThRmvfdjiHf6Z8P1oCZJGfCzSThjSSgZboKzhKJ7iJYQx553vfus7f",
  "key19": "4bMkecjfRj2bQ7YXte79bdWJhziQXUbPdiedDARYKwWfAgbcBJ8yv9k4GjQPJDVg8tvkAUy43eAPc1m3JWV6FUPu",
  "key20": "Rtfu1ZWyExwCeLwSmpc3ehSNKe3FaxNxHvHjjJW6nmyK4oBDb7f6Le5jUfHTfqjjgSki5wrs6uftfavgsz6ZPHK",
  "key21": "5xBFtMS9oym2RgF8bR22AVSpfxJEKNqnVoR2VQVXhqpXSRupm9RggxZRrsyBQ8wFhHpW5tjGTzeKkrLxMR6FrRBF",
  "key22": "2WiMt83DfVU6Xwu9rx5M5mUWDSwMGhgHMqTJykpkyEa8LBzaNSj8X5TLxADjUoRYw1aQ31p95vR3kRBbfjmZZVK8",
  "key23": "3eRefgBScU82r2QkmjegDeDSX9wtExbKKU12mH2EhZTwkptW4ZPb7LZ3ThT53kDJtgoyBrWZpTogwfk8BLjBhYYH",
  "key24": "2B4AqEradmGPqsaCjBQHREZAkmzr1jzT1Xxfj2p3dEfVX3emt59wMhpRvxsAPRPE195S2nqVz3Kcbg1uwJvUpwk4",
  "key25": "58V8VmEjLcGNrciZQNwvYZmm5Tb3A1mSL6GhH2P1k1JXqW8TfmNSxTi2qLZcrfzviGHEQxSu2ZCwjqG3PEzWQct2",
  "key26": "4jk6yibnw1M8kSDmVtBttiohKLpBzDqoKDeksCZRhB4E8AWwUnCoLgQpzRxYD7WLuBojxyBZWjbjHn5s5esDvFko",
  "key27": "2BQdVJPWxuGw4G3y65E17SWJYhaMtrjLNaPJtw5HEbxkUef3Xnxm2txuPckQw19NxzThxxMPf4FQGYqBwHWe6pWe",
  "key28": "5XNkEriAxoAL1QrwBFuXueKJQcenmaDki5Uuty3ZALvtnSnuBpaVU4vKWXCPA4cDJ4mgQ8EVjPid6AnUSqSGhQT2",
  "key29": "b9KWE5P9pHhBHeeZhvuFkp8dMmsNusPTPLUboyvMRdBQ8ERKHHWzamxtDbVWawhaz4oKKGnHa1cC1hRrLCDeA3P"
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
