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
    "4dhedJ8VoC5vfSjSBkAZpADVBhqAzdXtSTzxf64g9NWoxT51p9BinUibWhP2uz7PrqajrSeXMd4CXPU7Ckqbdtwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5oKjt8hdaY5YHKLWPoa7GNgakqMi22NpEjHFiUGp9XbMpLMyabasFX5eKdFGiFqazK7F35mCc82VyWQ3Ep9tY8",
  "key1": "gNfp143omQZPMATHSHmnqV4LcPeqxyia9NfzCes8EbgcNoezmvQD14yFQY6ah5JZFavawBqMoV3yHNKSkH7Y1Dd",
  "key2": "4BRhfndtUUriHdC2shTjcsnZN7XcU6S6R8VSUZq1m9PpJeLhb5tGW9tSfDmy1kFwXY7gg2MGe93s21Wbu3yuRBgQ",
  "key3": "ewmXYZ3aFcbCYQ4v9JiM5UxRa1qYWqSo6NZ6xfSRgkZSSi9JSnpPCyYNgDp9WmRVV94VTG21vsbM2W88j6ZXwgY",
  "key4": "3gN4VtH5bR5cnWaikRt172N6qgsW8KBuJ2TqMcr3bYE8PdhDXoDbaQiMAohpYCjrrhSS39CWrLkX3t6eYchkhc6",
  "key5": "H687Mcqsry88f7gK1MRJQGK3FVpUXssV6VeRKGzzGz9ekw2zsXKWYQevMwvPQw43mWboV5DFKPV5iqSG3j9Yu5f",
  "key6": "3M5PNH7YjosFKdrMVt1zv9YTsyUa19MwAz2NCj4E3fuUShYanwgZxzzRcmAeAAobLV3Fqp39MWLwFJr4zqqzyhJg",
  "key7": "3cXdJFC7PS2otoJpBMCoxW7YEexbDDbB3nccur1a2S42V5wreAcdqQ5PtKr6rrxepfJT8prvQJeM1cjfxtGWE57W",
  "key8": "3PYS5vBMUVgVdNomrRuhDhjZzoi2fdmtGwFixh8unJPKSaAKC5YXC12cQaKKGQqz4UigaQksfhsZVU596zfYaNgc",
  "key9": "3Yg8pqHxihrF4Fr2q3vqQHxd8kcZWWGtLKboGohmJ53F7SyQrKDvP9YvfNiGiwkPALxPvtq6cYydf32oYnMbcvmE",
  "key10": "Lps8n6ZYdzLCNbAVsneHqUeNmkFYpV9RZvoaYV62NcDYvoKyYjcNdPxuuZd21youc4knWhFkicPwTxEPR9exDhQ",
  "key11": "xvQo7kXAfzxDa4M1Btq7EeKVfbk39HWkqRNRyHXPS9rFp5QJM5Au5RDvk7Eerb6hhLZyKbuNssgHSn84n5231Hj",
  "key12": "5A4boUskbFCuCpx5fr5KqiejgiXti5Ve2WyvmbpT7wCi4mDrioUSWiSYaURryBc9K397skMpkaPiRvsfHZPKmVFP",
  "key13": "2f7xTd23KdDWjVCKRNdURLaTbhAV5bYz7a2Bnvr1dz3QhBf2YJaKhmF3AcJD38cxKC5LZtz73NwAud3SbtB8eRTV",
  "key14": "4NeDESXPhvPJnSvax4NVRaVHRXEmXD3H43itFicEc2TMfWLooH1JqZeSZUWb5ZbEJSh74NBCTvHHzPrz7nY3MryL",
  "key15": "7tTE7wbsRpbunC6Qwr4Bza1egBhJ9PTixJAjFWwyZu8HdThkgwLWCPLNFZUEzgDbxqKHdWDqwMLBsvug6F8ovnC",
  "key16": "4HJAgEUBP2BskMpHUju7NaCnHxHLWrptzmp6LUEVoBFB7ERmYrVNacsZNrZr75PuAbD6Zy9i2dj1rUPLxSsgzoWy",
  "key17": "2obuJ9L9vwqkQNqu6GFvdSLakBABp6vprvYgtcxvEWJBT7Unqo2Jz1vJVRTGzQkHE2opq3Ry1yPz5cRC4GpyA6vF",
  "key18": "51cBDhiuZeabRJi3WqARVahxHHjaVafRMZspuMEQgvgFXcQ65v9uA1ZuCcgoWpATKRqaYAUUG6BHA5vwvddfWJVU",
  "key19": "66gsrUB8GTa14a31ipjt33coZYqtvKoATEBCBW1aSxgCNZ65vCTJZxvwJLhEVHc9iswMZPv8to8RKi7Bta2NyxuL",
  "key20": "5pbg6quHa56TUfw99CMCuFnArYnFPAaNWE1H6LhuxqJqN72FBm4nKoiurH5towxS9BUkrXkBQqNaeYc8NvKzJkPJ",
  "key21": "3Cg5DCTSJEkRCTrDAzXyHrP5ZHmtphxXx1oKoNPAonUrGDHej1XuLhwKcH2aGi1grb3wvGiDQWbgiCLCqzJh4XeA",
  "key22": "7TPCaJuvBrqQjn7DCe37zDjim5fPSMXvTmNLR9BVjcMo15CM39kEbZKGmhRMWj9fgiB9GsvEtcau55M9hU5HU3v",
  "key23": "4oRsNf95dvCxUTsCZ7cLWfg7DzDUrm3QbYeJBtDsym4NMTf5r5Zk8UtbS7SEpxH5jveCKZzJcJbP39tcnJ3YkBnR",
  "key24": "5EGoT2s392XR25sVRVxnjRpJiNyQJsExUgwaPPxDcDEbEZip2qpLGRcAPEd9YZaGiL2PUPqtc9M4nYwPqwgUoXir",
  "key25": "5yfhdvQ3HhhnGzjRBgbnB6HSesw5Nk2MNySdcaxJ5hkjFVV4BCSKwiQWLCu5ufNXctFLUWNSzfKvqa5tChSikanf",
  "key26": "tB9rQEQsz8wwwr9BS2TQQavbpfo9iB6Q1Geakci8T5zhpV2eUaxBHTySpD1HATk3zs5rB8AQv17Y6hY8izhYknf",
  "key27": "3QMhq76crRL2v3hNsSNTt6zopnC2ite5ZPSopkLRdqpyUv8oNKDry21GBRX3wVtatztJdGHCQqAfFW5t3rxrCbaL",
  "key28": "2eiNfmtEk9iSiPDY4B8XnSc92Gm37T3VPSLbopt39qpgwbksBK6eHLUAY4ckgmxrmxGXQx6wvoecd1z8Pcaqoawn",
  "key29": "61QGoQ7cGTeoZ5tXEoAvLinBkZviT3vdfsdf78LowUkc3rwMREvNNioiShotZr8heQmrGWESN9XTwhaUSgyHGpQ",
  "key30": "2RhGguqFKBMx7LnydJPB1F4NyWburnfXeuZ8BDh2sDDxJC9cYq7oMCmaKurzUoPN9sUt24Ygs8i2w5mEAB2BRrVL",
  "key31": "a3Ka5WN5vZXBJ7s13YxcX1WSGe9umSebqQ2eb5DjaTDvtipSUQEp6WXT9z85x6BW1UgUkeJ24z13seoJ9aNxV6g",
  "key32": "9s2CswLDMudaRN1Xc3nwNQbMdVdDhyGmGeL2AwnXxidjLEMubfhoY9WKyPtCyoEeer5onAQkTvBUJUubr3i1YsE",
  "key33": "36LnBxLMAnrbgwPCymNySxkUqYn2jdb8Sh7ZzNpmKdS8PurDnsJMMSBzu7PJeR1dJk5c63rv57xCZ3dhTXaJLfik",
  "key34": "26mDGJCFEukexdgbp1C3squeDSqgSKrUjjT6Lppje7i8WnJtyqp91VKyjc4k1yYvPQdnsYEic3AMJDKyVs9UdELd",
  "key35": "67G2pXnVcJzPqWs5bbbi6cLZmGgnLbK71Wp7Pv9Nt8t1ojjuhVwCQkzkGMLd1tSoPSB46vshEwNk5HDTZuLaWDZh"
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
