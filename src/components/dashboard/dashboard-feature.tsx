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
    "5rxRDjRAsQmSUCy5TYtTXrieaEfZeaEDK6ob5scjpPhyUUVuoMeB7eVV8ZyTagXSUhtt6PuTjB5hKZKFPGHmPTc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjzHTavzm3iFrgesJqJF9GDZuKdwF7t8zZHaAv2cpPzqA2CdZMxuLrUwXbyrHje63kDNkbAzUufNt8VVJUYGUYC",
  "key1": "41WH5bhy4ChtYaEJLXbJg6KK7gwL18RQByhkWTtFVDC79hptKcSywtpR4v7HjbrsTbgjgv8FintGiuBosx5B8cC8",
  "key2": "5jjiREjoquEY7FhMmKiBNHU6uqmTypcqN28bDCbFxrM3WRooXx4WJ5GuvoSRPZf62kEGw2aJEzBs8VPDenovuyH7",
  "key3": "ZGoxVbaPKXcz9LpYn8RBCPpAXmGysnMAqWXuQz3qngQB4s5mHJqk6xepZPDnpgQiAa7AdVqRbHBKUuWvEqKHgHr",
  "key4": "3RrfEFqpYvghpN1JYLJ11rXobyQiJXHD9pT2KUtyCg86e1DudhwwCeZe2Nz8Nsayq3GuHkfSGcYYfZ847mbP38ki",
  "key5": "KuymiurMN51y2TCnX91fwv6YthFKRHgQ3b1GaaqEhtG3pzXffxsW5BGv6BtotBRtjn8oQCt7HbJ3ZVJj4DvYc3u",
  "key6": "4aziLpgrfSvkn8zn92gKFfrdHAT3mBJCcyxiRQS6UsEKQ5ewrguZpcrQdcrzCzYiq8ehgh3Vc35gsYkCBcXyhsLW",
  "key7": "2xqDJFDYFPhYkQzpRYZ2yrwGJahvWN5GX4tKqav7FQyo7kMAUhxr7Qq5MouMWDrktppn1VpAoPzDBeWmZXmL8vid",
  "key8": "3yNZZSxu2kNeaNVGcsScbfiK5v5VyG4Wd4UybNcUMcQmWof7JF6dcGzpCEr86JcJY2Hvwc2Rfcz4ud9GbfokWzEE",
  "key9": "3zXhbaktRWLVgpVS6fe1DmGUszrdPGgpUC2gx5QWmr5oiDRJgZUMEmVsRCXfFYqxtTHFNhz5Fs6WXku3BvCshzgc",
  "key10": "4272th8k4Z6EYUyG3JtH3UnrKxNyn3D5qSASXZujZqYZq5zznjXd7aENjboTNkBpzd4FdhA4swYNTZjS2E2BHRnk",
  "key11": "4YfEERRKcxMrL7m4Zhe1XSF76h9FbhpAEYYw2RDDHKtrpP6GYrpzrWMVG9KpDFewXmGj8KXPWd76KKtxSH851G8T",
  "key12": "2pTsjsdCRsuxN5qvsia5AHCjeTZjAv3rXeJvw6A5DGqQo2mhmXqVVwW2W97RFvWRusG5uW6NWzkff2i6sx7qf1Bv",
  "key13": "33a1hHUwywz7omjvMVkgsCx8DWXgiSqH1Yrd9cAsn1y5uADRAKsx9HcUV1jYCpqVwPHst56wSAt3W9KX5t5spHzX",
  "key14": "2Y1brD3kHczYTFr4gR3C2eU65Z2F97hC95oqTMjWfWrkju7oujsASzjJkLVuiS1SCk9noHScoaG2hiJUi8YBFrJd",
  "key15": "2pP92GrDhWnz6hNafqxFkDtUTf6aFMzy3NTZDiR2Ksw2mcpM4GBd6yEqu3bpsdqPDaipowgjHqmqJGYfyyQLR8ML",
  "key16": "3UpV7LUFjiqqnXLtgKdmxQJPYsYKHAJAkobjBbfWp8yDsDJ2gNMhjxWsMosb6c71AjBkTNbEPZMz3XbBTCmKdCLN",
  "key17": "4VfPwm34Ddsxa64xMS7WGZr92hGtsAmiBVYdj2yc7FT32r2iCGf9fkEobdwMp5sPWXaAJWXckwmBZZaTQVkfN8eQ",
  "key18": "3kP79LSxQzET34FbK45djtheVNfxRhFQ9EK2GhLQMKTRJkki3SYNwphYuB9ZKCtrHwGbHPQ3cugvxWNWTg9DwvSz",
  "key19": "QK5dCe8Fv5ZpyE6jn8j9Ta6PJA6qxQLspTWEfiYHGLw8hDYnSY242kFixjqHhFNQraQwQzDzuxgRibd3Fzcd8Q4",
  "key20": "4wAbnuHCXXwH9jYg7kK27wtpZico6NJyXAiFuACzuCzfZr4FZtkuTpJUm7bvaUtzmzm5m5HJYRydwF83zqPdEiGW",
  "key21": "2hxNyUybqsG1NRKmh91vdMEkFLHq4vphpEguP7AGSoysXBGBRjJaByQmTTEQFNpk8Hcd8pgjVXGY7WkioNgRq1hq",
  "key22": "8HZqnoirVueY1k3ywab19xzd6mvf6WFZPPS14pR7sNP45ywvRJVayUmfPXbhFtD1ccSb41fWdAwrkU9HprBEauo",
  "key23": "3yhSTBDnpePuWK8QgjDXMbpKwGBAnETN5aMD6cRjAY5qFdxuq4BJ8wzdNjcNWXKhkNcjDpDGBiuUQ9o6duq2ao4z",
  "key24": "2aZPh3KSNTvphgcwr1yrfwUMXccE9uQW7kTqesvRD98S6C3yM72Zhvh7T9W8a9GMFqbkRdVNeSZP4M2TY8XLZVxv",
  "key25": "5kp4eHQeTvjPfnEbXXYbhRcrJhRZ5vqveJJkgZKzUXujYGDaoyuRpmYjw4BiNDzxaE9RLhJ2wMyxEfY37ZgJ3v4N",
  "key26": "5amt9E1NiJWs97jthmhdQyhBCCdRQFJnFFeCLPav1VXveqdGRwBNJhYbribNv9eBkYrfxxRE5gnvawr6Tz5TzJot",
  "key27": "3DuqUKCr4xZxprQAWeCFZJSDPQ6b8jjeF2msy8eN5sT8QaEiTiMVorEaCKJgjpQbFSYBdf6ZJhf55GEuWMsReR83",
  "key28": "4LoAPk3uK51CjkjspMkMjfTjx7PYskTq1eFdH1ugyGCFSSzc5k1Mt8kXF7VuDs2RinLV7p6tpQt4ffPcp8WRzA7c",
  "key29": "272BoejnRSnAvNCHieXKx85qnofbqWGGGVgHCfatYthY7w4rohRwR9Q95D8bXNDVU13kqa5qkUjcEBtiVEJSUGn7",
  "key30": "3xNdXAUCTJkEueaN1PzDAFyLyM1TXgUhBiSke8zEEDSbXjRf4XRqnHx9YBj2affVvuhnT1ydbwWkgfrJqwXxdFsU",
  "key31": "q6Gkm7Z9GFdvNJiXLriSZYLGRWjaibXeXHJtNzRe2B55cMw4QPMWrdDHKTA7nzkycUM6n68oZBpuxhHTwxNWw9F",
  "key32": "JG3usf3eg8yi6nEJHxWj558y1eb726fxYFyyqNPCospU8PZeFCJzNKGhtBE7FNCwPyveQgw3v7iZp14Uw6dQ5DV",
  "key33": "4EfbYPomq3LkVGUKwf7NWCxUkZMLZcvxwSQMvMevgEV9qYgoAnS7SyFFuRPAsHXn4ezFpF2noymbQPSBQDTa5WwW",
  "key34": "2DDrGix2SxrHNYb9aPh1HA2XqceahdLkAW1JBNmMSWYiNuAMYqPRHeu328jGggKUHUwNTKd9xSDsrVxaDB6dwWJA",
  "key35": "2AMrRXwjZrRVm76M24VhUHx7yvSfQqLcbw9aPeJ5isvVqKS8eXgm2XMywyZMbgjXUShgunmqnMG1N8b1yKLUQd5Y",
  "key36": "5S3kD3AZxqZwxtEo4zerb1ruc9tYWZeeSA11q4XjizsTwqhuLhyqpWiCXLE4ApajAcYG8V9tyCMFt1ohTLoqM67Q",
  "key37": "jAg5kgU4AnwbejowBuoApQRd5DAL85J5CLazUFqvxA7BEYcJnUqqEsNc7TMcr1vmns4NgjMZC9SWbvYCZptcwTF",
  "key38": "3gRQ5MuxtN3mvM9tmraDGQuYeD9EFzEQctkaexe9NMHGMZE3Kroxbppzz8JjPp5wJepvxv8fBfkiPWMHiZyb13fK",
  "key39": "3BDGvV3bTHS8gUurVw3w3jZi69s1bcVfsc9j8X3TgqbnNRAm1YCJRQgrWCTNR5z4wh9igRP3tK13FssRSjpUDkN7"
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
