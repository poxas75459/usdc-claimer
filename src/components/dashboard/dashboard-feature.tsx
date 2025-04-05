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
    "gJr5F1SAFzomPjZZtrVk4o389yw1ki8HKUPbHD1Zcr2GoDoCG9iXDoPcAWZcPq4wzJ9nKcqZVcVfAgxcfyrYonV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M1P3xbY5pYPnW9h1M99bqgU69VJYAXV55HAT918FT3tdqDwShz9nRfSd5VqtPgqNF5BvjGDKpDowtSQxZZFDD4e",
  "key1": "MHcLSLk8UVT7MhhbsodhucNt9cNr5oxryDCyHAbcPUrPbbC5UknwgNKG7nWVvCXr3tHuBuYXWThFJw2ZMMoYQ2k",
  "key2": "52b2awax3QYyZDjeimaU9MNRdkqBFQTbNyeHZGbAk2mLcfnXG9z5zG2Lij3bGMrZpNueV7PGeJQfbP61b7jKAPeC",
  "key3": "3AH7FgG2Ja3eBLHt4zFLExoxTPuLM6FBBwHx92Yb5SuPGsZcbsnkaTzMWWcnS1RQQhLeyTgLwgAZWpryRnkWnkrE",
  "key4": "2PKDLWgaHJzpDGKqxuQR17bPnjDZDExPxFbmUbddfasD7XTaGpvfVDVQxqqaPE9ScoDcskJkBF11pHVu7ukv81Pv",
  "key5": "5UXJTEeZA1fuWMtv7CwFhyKJzLWXgpSEejmkeXJXXp9ssjfudWwugxnebcN1n9ZL3U8bWF3MhKRdGvn4YWbXV6RL",
  "key6": "5uFxRLvaCSgfZFAURovFX6dNUQCvsnfm1vAvSDiXv9c72wqBNfcKTD3BjRXUJuk2W1vaFTkoMxnGuAyLAE49gGmc",
  "key7": "iQ8nNiCP9FHsRuCxrcvGcK3MuJhhn6XxD61Yuc8tcxGTAFBkTVpf9MfxuopBxKNYuiJCaZ5Cbc9gGd58BdwLhjJ",
  "key8": "2iRypEzTgToDNwUBpbMMLgvrn7CgvN45DgVfSRScs2LM575LXmeYBdEJBvFqYQChDDZZG6mAjRnWNttVLfcHm1xg",
  "key9": "4z98peBY7ndFWNL2dH6e8RWpq2We4ySHtNw2CsvChkrPtDcPMafV1Y8bNwQbiyyi15LTkbuzgGQCJeeKKnEgwLeZ",
  "key10": "372hRNXH9RaP95yWtDSHtcmbmtZurbewkMS7ygDipkMUfeq5kHyk5gwaKbC4MuH2Sj5Ex2XJW9foMCv2eUNXuPKx",
  "key11": "5hrk9XBrzLa2JmZ9WMr25e2CCaJgZQmBhSFtVp7zd7S7CWbWZFNky8h3LPi6UZQtTuZtH6QzvX7pPmKMj7WV9PSj",
  "key12": "2vh6yCuVKoh6sexPTSAtrbtBLmrvs98ur4vACsR9hYvpF7vxJiPXjCtimcH5iq1wQiJZa4mthwCUmUnitVFEHZ9m",
  "key13": "4deyv9dS2DfyNKMAGDvg81DAXTmQ4wkcNKqcSQTMJ2XkF7wGJuPvtRmymMzwgLeCpLwJo7T64mAvvzg9ANQj9ifJ",
  "key14": "39cRR2FNA7HMMrQwX9J52L4NxUu73RhHocDnWM6rXdJm147CEGBWkNZvvQfKTDnYo5WqXwc7Lu3WaDJN1F3Vajbf",
  "key15": "2nRUU4dnAsfkfHxnkbodvRBqohCJaSQgXgeThSx7itwpFY6XS965SmdRDCa9mPySUyn2rR9Cs6MBEPX2BCMb7men",
  "key16": "qpce5HDqbJPKYrmsZR37n4yDkobi6CKvxFn3EcR6338bVW636GBd6jJhThLirDUXDhossxDD4tX2S4CTPL3ucjW",
  "key17": "58cRsJDhsH53crwqxbi3Te4Li6bvkyJtKjBHWd9j3y2TeULM7HC4LSzxjoZ6MFtpH1Vrdy2h6anhMftdZgSHqE7C",
  "key18": "YyG6wewAPfm9KZTPY8irG5UNBB33sAtUMDJqCMzfo24azzAoVRnuGr115C4hBoETQpF8NpXQa7sW4w8FS5ZtG9o",
  "key19": "5m2oqofFgmQ47LnQDXw6DToeuorrerKckngAbPaD2qDNLYjavYjBG3ab7CnGsEoa32qSDDedQ9nTzmBiZ9uzqy4A",
  "key20": "5SyDRQ2CpbVPavqbLuA6Pch9FLJrVQnK1mojg9jqte1Xrr3GjEx4vziQ1eCK5MXZHkRa8isBTUTRjA1RXep7DMmQ",
  "key21": "2AHcMKh6gJPXBCo4VYLye2VSYRmKRcHMZN4i7hyj85mNCPW86btft9Dv89Umzu6BQ9RZ3MKjMbvRWP1WXYCix69n",
  "key22": "36UCAJQ8Zc2CeEx4QgSGfmKL8ZLnrm1DL5GQr35Nyeb6mrtRey6NkrWZtB7R1d1biHK2BXgqvxv8VvaA5YLTyQvf",
  "key23": "5LDT5PWA1yCij8LP7hQWwaw5d4cPcumWy598GPNGxhMynKeRmFf2qFL8G5PfMVioPqHqQuFtAVU1dku2DupS5uSk",
  "key24": "NNJTrvq3LLk39sYSKZ7R4svDvus7fxpUzKxRMkqYdCRFW7AC2WjmsBrx5j32uGHKp6S7n5uY3AeGUveoP71MLMY",
  "key25": "jQ5vmAiBge9ZMDeEW7LLbjHA8ZqDi4i2hsaMkEiLnKMSrp2GWGYd3WvCh4EPNoNguyHtgjz3MqqHPheyXkUSoWu",
  "key26": "4DSg3Ukz53RzUc6x7mhEMo5rWmR2fwUAeLZJAj7ob9wo7kXLUb5dRKvsac5ex6PT9WYaJZG1Gbb6hu9fP9qGxKyJ",
  "key27": "4vgLW2jBEMnzqhDgRSpnjfX32y5bUMEX2jP8kNRSscHthhKQTiydpcFXZNBCxNC3TJFzg77kmoNu2sXk5b8Fi5NT",
  "key28": "joWiCtXPQEap7s5MmMN8eJr2JLcGhQ6DzegpYb2hxCipyXFZju4yjwHWUjREZKRgSYuSLmTHpRbcxHRgrKFtgmZ",
  "key29": "5RxQod1V3SHb6acSoCAJS3N7RkMgCiVEpBDDTbRfMJsKK3UMuUKAEfS6ciFTWRW5SVvUc5wBHszChfKt6oV9wYU2",
  "key30": "66eP3crcZvX7RD4buNwYkfAMzRdXN6si53hssKsNGmhbpq2FoHrtkJYvZhReMF3fTUNsxVzVMppBVFsYwhU9D6nA",
  "key31": "xCt5mxtaxWac8Eum1wKMoTHSAyysa5NvEqFaW9tMF2eQngRskhujKCWQ6PczEf1zFpPrRxrkhEHc4xJf89gfZaJ",
  "key32": "4JHB2kgf9MmXrxjnL3QfM9TFB8hhLUFBHawhVZ2cd2x5TKm8KUvr1pKU6i6wNP2oEehrSokBsghJmidtyMAd7YLu",
  "key33": "3F2TJKApMNXdBKCB4pLw57vW6DD854eFW4cUv5ZwibNfyGG8erCYV93J5QJ9vd8GM5tY45Jys8LQB58CgeKPP49A",
  "key34": "3vzFpgsXo5sdrp9uBifT8KpVhtpniuJikBXxM9ShcLZbvvp7gyW6vXcQUBrViSYrqGf5o71xgPWn4TcjjKioZyYZ",
  "key35": "576iigEc1N1ufPBmkaf6KMUByeXuChfNeKEq2ViWBKF9wuPhp1oz2jT16sZhFjczQwDJtrSQ7yR3PnK8thGSqy35",
  "key36": "4JRT36hzP1LmzZTBkdURw4BhvRzZNqYr1myedTv4kKnTgjrYEQHuBmEXzbDQKhRuZ1ggEQnMmwx7V8juakdCs7fZ",
  "key37": "3jhJgG5q2UZm3HxeYnxW2NePvQA83C7ok2y4UQx4hvBmBqKFKP91BzkeQ2u986DfxKXfP79cxia27hTsLa1ZKHNs",
  "key38": "5nnF3xqB1uhJrSW6WutmWePHN4nJAocYkwELfQdhWGKy66LXzAuC35oybw9Z7VwsAwVVpcJmqJWQxYm2k6uwRv1b",
  "key39": "5rcTpTzwVKupem53hPcJ4xsNmXAUK74SoDPhxPBo7aF4oJXAqsmdAFBAr8H6uzt292jnMPs5GHyeFA5MedxQk7a"
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
