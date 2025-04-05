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
    "5bT4VLyzKtWbyEQLRRWhJtb15nDNqMAB1qBS1J3eQmbgBj3Y5FTobnGpofACz3NnD7QRiBZr72sxvQNdxyA3HBWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQznJaRSGu3xqb8wwcxgA6mYxy9SCLmFbceLSy9PW71CXRabmwBuzwjknzSxGvrxyWG3rqkPnA9JGzxtqgdFKEp",
  "key1": "3NmcXBCybemin3a8dHiWaNiaCCNPx777hqoBt5o1ZAtG88Jr6E3qhNf32PshuboCmHiEzpyqM7M3hwZZxBmyz1PT",
  "key2": "2xcHdiaeN9NWvWJa6vouRjBjAAwLsC3LDHBbsTvuez5wU9FnmUDdtqhBiEuVXTohN2xtWZSK6LEVbrJG6FCGFSzL",
  "key3": "5h1mWSaXDiFzaMDzT6HYHxJmL931ATkMcYaTXmxGTPJRL6KNy65uPFuVZytC7RJaWjdfzwHZhK42SCk4ZLMB3Yky",
  "key4": "3xV61ykfqqc9BfrocDA6kCCtWy7FLA3f23ZE5sEZQsgs1qz7rmsekA28biqLGNoveSTC1eYrc92yzBaG3R4TkYxw",
  "key5": "62iZ25461YFRG9c5C53N4Wyae5DYmfytwS2mGmJhG27nyQvYT9cvX3KfioAPT5Ak3DGHaJAN7MtwuufYNrjb7aks",
  "key6": "4Mn2dHTGEFfxvVajxUgg8xRwC5xqck9xtm9fo6ptZHHWBX7DzYxZQhgshSsbEroqNdx7izyKcGHEnkfdgM3WQVVL",
  "key7": "5emcgv3DKsRHfv6ddUBLX2ijcSVNNjvHRnuxHTp2Cjb7QyHoouanWSf9AwFhKuuQQE2N6anJhDjbFXLX3oTrZXYg",
  "key8": "3XAE2qY6LHUR3WiZV1L95DyEN27RercgwwkJHkTNzhD2oYy4SJcN6qMmswXa1kqQ6Hizz5YwUJc2Dg22CRqkJKvg",
  "key9": "jQkdzMrXSLxDEzKae1WcR2Non7ccRRqwWNfFpuy2YRYWzDiwgAi4kBVBuzYCQuYLNsL7jprzgD6G1ryqQnETfJC",
  "key10": "jjg1YBhBdxVX5se2XTRXzoJEPjcLqceJqYXZCxLYg2KPi14i8VQHZwDnEYMbwUJr6ihhxwCgz1m9wZ7Fev7L8zx",
  "key11": "3NaJFrhacNuwbhbyB59ArrPGnzsgEdV2oeTgXzLFiockMM9guohCfkBYVZS4LH7iuUgzzrwJiMFmi8ntGmTwyhxT",
  "key12": "QSpJwMEW5rseTPMMLdPH9brmyT2zDHBDZ9zSUFvBUdznjzeYK21rBMFo9rYZ78kyhzKaFSY7DQXRsHmXHpghwyZ",
  "key13": "3xVVba65VnfZrXHfkQ8KWFqseQpewLZcYZ1Hfs84SKHgTYnqvmRrbQiLjLaQb2tZVEiGy7NSofYpGhffDDMcoNWD",
  "key14": "5x4Fb2n4cQgdSuE3wJkoAPSTBrGG7h6Z4fTgR9AXG6H88de5VE3ztD4K126sQBfJxqd4LtBk6aqPAeEwH7SYdZR3",
  "key15": "zWfaSY74ZfhT3kZ5S6nrvRTnVPHuRAWdyLuzEvUpWE7J2FRQVyVbzbzbh5wwkctmrAow1EyC3tfhdvBh5cGyNDe",
  "key16": "3VkA9F4ow3hbYPNU8a2bSzCbQJhTpmtBs2PX4erFEavXVrhHbdPHdSfmsrtbxgoS1xEwEPLGELzLCDoRZY93jHgQ",
  "key17": "3jBGcJFbXJm3pEojmub9BgdxpXSPKbyh5rW8bHfzvsCA8st34LrbTBSPpKjJhqjbXv8rb6W8oYchH5ZyFnPo7y6C",
  "key18": "DHvjhtvQ9ysEWQmxpUeSVFJZ3au4Gc6uCjupfBmwteP6nPSLg3BZDjFNwf2YLyqG5B2r2YHxJCtDnvW81272SHT",
  "key19": "NPKWLb5E5Kn5ZwidoETMYUiAWLEEXfakn2wcK1c7d8kMkRHKejaqFTAR5X1ne6vYSt7gn6UN3paRf7CjwRcz5YU",
  "key20": "2c5uSHtTjRE2nuchVDPULzZGYghB34gNRw9u7ejHFiaHMkAc3CH3nUApE5S9mtMYhHpj8jNxeqLkhueUrGJuLMSd",
  "key21": "4fvPCcu9DQB5qSiiWpjSsPpom4wnARs5krZJZK15pnwoRuaybiMpKbtQwn5BtP5T5ysVLVZeXmMcXumRqMSgapSf",
  "key22": "3M6wrSFAz74i1UBYATmh1PsotBR39CQ3H5prJtL1fbgR9C1jiYbu3tJUBzQ7cqDWHkp9DqwXA5dL6ooa7hPJfBqM",
  "key23": "Z3UqzvHt3V3tnR3pS7DjDGzEvUJ1G3JPrGB93kHxs4hbDJpTqUCbFbQ63DNCvNoWVgSjGRkFNoDDBkxj7CGoh7L",
  "key24": "42cDV1i5nE1qhdN5YzfH4m3LdHa334fUqnokYa8rzCtPCYmj3q8Fgi9DCp6fJpKCfzRMzkVXY8oCnUGgecSNb7P",
  "key25": "ktJ18qs9ct85sRfquFQbCMFVpnkiPjr8WukaEQAAKZjVN2rypkHtEMxH9JveShqRGt6UaE4XAaqbStPgfqKqT1b",
  "key26": "3z3HstYdApYbm2qGrE5XYhDbXiejiHxYytACxJTahhhbB6EJMEWhkh3BTPmzwePtV4okv7B8SwUC6ndnggtBbB2h",
  "key27": "4RGwvw8Hw4b7L2KmwUeQs49q1ZHCrtPWdhaDV9pwVsc51oznkq7E7cwePseczirob3uPPHwxeLYCrotQyUvMKrrK",
  "key28": "ZKrjiKEGd3kWCFFtzXugYBHhejeQ4htiiC4u6TcFQFV7KTz64s5oBQvtTooi8NP7tNgpX3eSXav4PfJ3j1BqPgm",
  "key29": "4c5N7KQPK5cNvdZZEB6FRGidKr97SwPkhsA3Wpvd239YPyGb9CfUTpPHm9J7Uc4NmsLy9EfPHH86wwTCShEyCLY8",
  "key30": "2RLyqmaxtDMWHveKXB7DEPXzRRwcKmsp3uHJXFSCGL68kWJHVTrzNdrfGMiZ9WhbhHN6kAW1qrdojehmUd3vPqea"
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
