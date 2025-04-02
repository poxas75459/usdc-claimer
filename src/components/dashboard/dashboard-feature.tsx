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
    "asEDXu1ZJwwcybCGRVBjzrcXbYAJwmHVqw1eRrAJFN2EJZqW1Jk7X3nz2szqGecSHE5Jp2FfPDfZXCkAZTq2xW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmLJaQwVEjeBJbKoLxybtuzcYAmm8YakTUgpPwZzGw2EpmbLhnDP1aT2XxRh61Tdq2iSWuizcFLJMkTsxscHTwj",
  "key1": "67eJj47v4vtSZ58RucyK4FndMH1PzyTJoDSzzNg3eUefBu1nqaMXVJeiL8Qzx5vu5zMhJj8oS2QvrGJ7bztpnWSa",
  "key2": "5AkUQ5HSiPTLGT96Zt69afNkotbxbPCNyZ6FW1g23aEeNs9o7oejNrTuYzr1HsFXvpVEdAgk26BZ3ZbCUmt1H8jq",
  "key3": "5NKpcZC1ji1jVSeSDYwNHQPXfLyi3HejjFssRoaxwHHTmaTpDEqkdF3wBVMRgDhPD9Hu68wSj52SiVD52hVcGh99",
  "key4": "2DjcYquf9EKHuzQw1Em4fP5ia2XjA2Q9QtyorgaYBeTX7sAkZyFec6MZUSDTtuyBKnULnL91GHwQBSRhYo4KA6bh",
  "key5": "24UWNQeSHigtEoCzgbZpfUxVQawZiLKwb6yVnVxmt6dvaB7tkL22SqABXbJGts78touyWuq6BTSvkarv4R1Ygsc7",
  "key6": "5i7CrYpRs8Mmss7Pa1qpgg9N8QyvgeWQTyjUXqB6wuf5HNHqzkVVU4nQorP3vsx7TD7sp6iApmqDixQHiju4Y5sY",
  "key7": "34sBCsUjG2thcsvtFwHSx6e16SDRmynb3RzxZtiWa6k9kRtAVKC9ijL1YwXKXYyjcc6M1AHokBQEiuepcvbMMmJC",
  "key8": "2cvCjqFgJuhkWCx1TKX3SPpkPpEinZE8ZPwymnX8zswNqhPKVNeX3AzkQkKZvHYpmQVGdq4cri7ytDwnNjrThTqR",
  "key9": "3fmrMcnmdJfdBNw2mh6FY69d4P16J84p3hsHivh7wDNAFdc9RxweaPTz8bmBYb9PY4guYpjYsmnZqExuo9wf92y2",
  "key10": "3LJ4f3w6vgJqie5N7GRo9FcdoChB7YviHT36NWndeTKTyxHRyqHrDLTMkzzrCws2Yna53xJTBRRBixAjFwmXwopq",
  "key11": "38XKA6XUELm1Fpw2KrZp1dQHDLWNehX9upbLHopLPvNmehYmaVKCpFxztsnP8Wn1QNggwinuwfJ5AGvHA6buAEyn",
  "key12": "2MZW7Z5YPhY8AWo5CeEQui8qZy776bwozHk8feWKxCE3TtV6HsDUEzsJ6JjrVTWFLqsDM2TQ6ZaDMtzRiGR7gNqx",
  "key13": "5XZXo6iVxyJCT2uJPLWHYQCPh9sPvsuDELf7qPbPAuNDxD6DMAA46AgdBFGG4LpTNjT5hRcs8NraKZNLAzVHRGPd",
  "key14": "2NGG1P9g8adSgx7vbmYsoDBMrAsFf5pGtuGDT7qkogDPZKU9gPAW9Ba3Dc4n1NdrigeqT669d3KMp7CDz9UXHkjN",
  "key15": "4CrBrew69ZCFVGiE8K1AFcAywx3qEQRjXNLUVmY9fbgqvBjLSzEywvNQTLLNj7J1aji4W6hUZZd9rJ7QCrpwon5M",
  "key16": "2wLSAqY6cw1jmCDQfKYXZSop86vfJjkB5fZKAN8j8cotUECBSd5UZnSoKT7N8BykSFfSdQUbmzMKqVMi4erq1DFR",
  "key17": "5fetv4LERxcvK1M46G7R7BrNEPtE39RCTpKCWjq1512NC5dyFMgd4dt5WC4Ki4WGBymCXPV6NZg2oTct3Q6f6bh6",
  "key18": "64SPod21qkQ9VWxhihh5D11R8VfeaKj3jipLs9JzAgwrm7d2DKSVGJCg3y5D1DBgeusZvfvH6kPHLrUCvWytVYrr",
  "key19": "5MCia6HUqsFgVP4HBjFm1pwrkGH5ifdAJR174Rg8a2mNdVantjjdthyGH31ux7TcSSthn3P9uR5ipAs21Qp3qxfd",
  "key20": "Q2ee2CRFTNFQh1FeajymdpQgZjB1tvNneyMHG7T9M9t6ctuHaGgxXKfBt6iwQ49MwuMGAamft9oxcr2ewBGeojc",
  "key21": "5kUCz8ZEtUS4fwNhEaJHveWoGewaRMmbVpSmMHypSqre8oLSdjZQTKEkhJDe7rdpgZdnGs8uC2r9XngcVaFRA9PR",
  "key22": "4C28ePhcBWjc2xybtR3ZEkW42tEFPUvTUMPrTZhPPekM72nXe4QkLVk7bnKjrvrecbYL68NaUMAzjdp9c5fQsvUs",
  "key23": "3njdHnYYjcruSqYKrZhRjMGTyFYXkX4onRFFrfMA3eZJWjR4fBCCMhViGJQyefiA9AxBeyAzUNWm6vAqWYJQax3Y",
  "key24": "2e9TWrnFs7i6rwiG12hgqBbuhRPadCXUwBNNNXWozWPfNBzxfZPioNfjnQg631aBQSDXcchuCxkqFCCgdNzrqiZX",
  "key25": "4zGHwy3aJgLRxvHB1wgHGrT3ed7remJSZvb2w4BT2QoCy6CW5Pr7o5gPjyr5NjUhDDLMXNTBFcWZq2BgF2Fk4TqS",
  "key26": "4BXAHtdeQyGkKJkfVsbfiDZQY4H3wZScMMh5edmChvt21Swds684tbYyX7wpt95hK6PwRNKwoJr9Dt8ie9mhhFFx",
  "key27": "3eXsCAcMFCVPrGDeg4QPCmVBoqWJ8bmHmLYMGXTfY8Ufwwcx5zPwuVFv91AviPWJ9h2fZSY9hdywYWN7nKeEbqVW",
  "key28": "2ibUrR3sWrmLUqxiJZeSwBoYpNSyJergWzsEdiRu27yJY2Fr5jnN9HmXBfVymjn6FynKsZKctWQxvQc9s2kJgihf",
  "key29": "2Px5wEqwpWG4mybRrkUXRniokTtsqt7iVtvBgisK1WWBzAhCJ84cFmhKFZa8Rf6S17LHLNbn4HQQvQ2omLZn7cuQ",
  "key30": "5FdiHPNdudjBtwRMyULcpAdMqXpzoru2NPdZT8m7CFLVtRFnbEGZCw1gpVTtQ1sFDVLxhJKNSHQMvdLBtboEDDvC"
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
