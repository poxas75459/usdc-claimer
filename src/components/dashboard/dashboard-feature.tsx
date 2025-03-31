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
    "5awWPPq4pPqgtygWD6AsnLKEScFfFoc8iipKZm3JFyKC4ASweSSKJS8xs6mgC8VF5GFyc1uoFxcTj31YqVFGjWBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V94VnrcJJRnBFzZVudCt31SMvTo5EPLv7yRCPW5gwYYq7pMmnzENhP28tLrpL6cJEG63h1BZzaM9esPh6La7yPW",
  "key1": "5zcriGV2ER4PgcrqG7zihuHHHQSc5tQ9C5FsXnm5MV7tMbZsHfohbjvaSifSMEBSdSASCbWYh3dbNNKwo3soFSoJ",
  "key2": "2oi1rTybs4fqZoGSzUA9H6tSuvmm7qmeAS8WZfUFVpEqf9x6QqM1tLjFHdFs566TcK2CAUp2o5nbBB4ppbEMqEy8",
  "key3": "4N53x5oWoHzPBbaaWuiMFYy5LtLc8qegDYsb7pC4nwJMscp9N7u4wh9eLdksyyVdsrpRze4Ptus4vsKTJ46rKzj8",
  "key4": "4h8gaqXNUb2fVUejHvE8QXEzmrVLw6yhpTFN68JFhCPi81d7hhQ84cVT15cEgRBUyr2jPXf5L5657MPJ85mKz5Z7",
  "key5": "21cur5zEjKemdKtqwhx84RycHiayTQEhdkdktJLHQpWSjtSJZvNDAEZFW3p1D18AhXi2sDX9NPsPerY3DiyHxaur",
  "key6": "65aQ5qBYPVN3JnCKtCT4xc6QCubDpJMQKoBHhH131dZ1Xm7PVsyUKP1p2zCosAA7VN9igrXjxfquf8HXpkRKy6L7",
  "key7": "5BH4Cfh5P374DqNCkcZBmUrXvSzAMZiwuGwVQAFmw1B3AhzngibYtJgpS361ymMM7wQcrPW6QhBDiQ6T4Uphe8Eo",
  "key8": "2SFFi1zycPTn2Z15g4EvAvDQr8rfvrdvGtA9oUG6NtXYy1W8wRt1pjw7fmANhBgqT4wWmAtCVyNPT5ibTLUr5t4M",
  "key9": "3wYd2MK4i9EksuvYnPM6RqZYadh4UUfaLwYiYhvmQwwHQRTqZdpiniNtryCuYNyxXGcWToks13vuT1GxUr9RPyj1",
  "key10": "2EZJbw921CVL1YHhXrF5RagoB7JmjLE9dCyYuo2bnSAEcNmbkz1LuJiRTuUFKKAuRieLZEeSQQf3nuHMLZNT5iV8",
  "key11": "5toSr45fbfQWLWpAuJfScnmLrmYcm6iBXRspyzAZN9VUaSjy6yZAB2QzQub2dRe6MGpLwtoyYCDfsG5pBp4W2Z2h",
  "key12": "5g8WuD3Zyo8HjTrfSrQhcUiq8A7oARFC4c7tsAVbBmFpwUgjvbTDhE4AXa5pg3aQ88XUqKDciKSQdfp4kEsYzZPm",
  "key13": "4SGyycrhRJ8yznXr4FcDg6wWx3F4pnABrgGgztYKRdZvH2xXuwD4fNBBim6oE9BisbRT7psjtEmLfXkwomjZwEP8",
  "key14": "5XwksKCCG6tH2EVHebPtU8UoYbpq1hU9BEMhcZS179EDSSGUwNxJxfBSgH9F9VSXbhKzFEsUZELQYH6HXJcv5gM3",
  "key15": "2gNtN7u758ZUWuxpU8hGDwwQjMcTQhoLSNGCobpZgVKovaWG5ZwQnP8TwdLiUpeW2YdPSSLvvhgc2g4KUHTwf515",
  "key16": "5TaSrru1oB6B6vCVeaw4MdwRARWBiXT2fisC77kMLqz8Vj2e22YTqdeSiG5VKrh8ZMrE52fxmUKvMPoyaewvpJPa",
  "key17": "4GhiYEtyGgAHdSjK3cmCdwQFrAcVT62ew3iZhKECJux6dLUcwNXTtQK277DvDVHQgfhEuUgn3pPuvxXmB6H77evR",
  "key18": "67cURn8zQoqPPJ6gFg8FT3txzZksSXtyJcxNTyB29FFa7YaXYsSqAt9zSbFBxVZtP71a6mupNWbo2V7rPhYB79Bf",
  "key19": "3RCU5r3VkAatd8tzE8Zb2kUjpSkwMUp2p6iUCqfhhmC2LtBARRq5uCb6JrywwthfuXEoJ4Hc7WPcojopqF4Eovfo",
  "key20": "2TRznczk3EcmiLfiKFvUxjxxJVTpZqvfpbFyYvrNhw9S4ToGT53TD6gNWu3J2M9KQeFsFohZDzZ8SPWmFWU5TXd1",
  "key21": "61U9AV5hppGrhE4U5Umh4NQb7FkxutkhDma5tNURVPXmcSCtj4enDhFAyDMfFi5e2BnRVnXjFKxUeoAxCeaUmMu1",
  "key22": "5heDSvYjoQV9GVy5fjVjVgbPaK1JTFEUYae3jynnwyLZPyk5xgYWQ34ZXr4udbz1ex5jHkjijfZ5apr6Xwg1hGdw",
  "key23": "38yovhkjitJpt697eYCMLFB6UsRoPdcv5KJ71EenKC6CAPXDJ8omhCtwWbhqPfwBP7SJZ1WkSiNiRrReFfm629m5",
  "key24": "5couMeb37hGDJqA4fy9WUsLQiDoG8fT4iRyrnuLycKNdMDARsBEuyp4r7mMXueEWpnDzHGX3vVoyf3PZdnMrcTDL",
  "key25": "4n8qSTaLXkCpEXW8bWNbjEB6v3bJmcL3a9jmu6UxssydagMnmwiUqKz7Sm9tfTTzZ9UKfTqxPUdLvFwnjSGF8UTL",
  "key26": "4FfCqAgSkX9CqBjtuYfBhZBMdmYN7Ci7LrjnxsKyVCgNJMufPmd6CDTNY5dxYyHcDiQnfRyb1PD1tQGwnx3TRJus",
  "key27": "3DewmaLJwhba6nTNceuNT8GG5tvAJk2zJmze3fXiZxBfNNAjuHZJR8NV75zwmqc6SR6refYPR91UThQCBkEmqpU2",
  "key28": "3pMHtxDGvfPcqoL44uLQxMegyxS2TJ23YLKrxksmwZ5QSdYcjQLWhY5N5GeQxKLBB95KLerFLx9B5mPc8fxYgmZ4",
  "key29": "3DEKsDY44LFpigZRVDjfXTyX8UQ1CTAcKwrHzShn7PjcjpZZ8oWEntctcvmWGSh59cBaMnUTpuS684wFeweaPLFE",
  "key30": "4QhBVUYJ8Yo9i8HWHJtS61ydJf8ADNfh9Le4ZCY4gW6PiKshfTdLiiDHqbnjzjDi7eS3s9gQDJLxFMu3dFat7iAs",
  "key31": "4vuUSN1537Kaw5M4C2KhtLiWchuPGoZP6uqumVLPeqZiARV2ewBe8kUPP7d8QbQJ9bgnRxTgJ21gKpGZgtAnZjKh",
  "key32": "XGvCLaDP6mL4zncSFv7iYR8yvK5DzLjUFy1cAirAXurE2U9tTToQrTTJBWXruVuQvgEz3dW9YycEYXGXmPU4oZP",
  "key33": "4snrjXVziBzA9aH3VK5ke43x7YJEJ9numxex2aLwgHDyg3GSff5Lzk1rpAB5dwNpLdoY8SdzFpUuwzZatNgPgom6",
  "key34": "4VN8kT7kEH6WK1YzuixjNBc4fn2hBu5VAHVsv1ayZGhBb7y44aVV3qD5K6W8J44bXQH8MKTihQifd7837yU8W3Xb",
  "key35": "3VhBxUvXdTg2YUKD62QMXzsPXuvfJBSZA6ynVWPKyjeq2bcFkqKgmSiRe4soAbmRj9EWJKeaAmCz19oc6g7qZyhP"
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
