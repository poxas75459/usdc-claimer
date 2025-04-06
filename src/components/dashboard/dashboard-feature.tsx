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
    "pLbdfxYXZu2tQYsWSwFHYcMqZSJJhPc6hF9FyB22nPkvQRpxaXNeLYdHFXktuNff7Z2PEUwZznEAb6K6KG5Weem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FER2m4zUF7DRXm9w9MTEcWsU4JpVDimF34FGEM9sBzz8vvKrtWpC7pG3Yoa8LLEGSC9GS3P23H6335GMCVThax9",
  "key1": "4B214H9UyEeQKYXGsMyzAMtdP1CoqTTrFWrE48kWW639wZdvPcKXpyZDdKLfS3oHjSzpX8Pxr5eD8TWvToesu9KK",
  "key2": "2MbDpuXArU8HPSeVpCLYyYNNQwrgsGbyxG2FPnaMUX5kwhL5kjAgRFMGBo1KadwzK2u5y51fDFcGjDyxd5JQVSMs",
  "key3": "3JgEoN7MrvLxYzLwe7rofBUSVrngBc4Kh4QEHgax5mgMvBSCTa63VqoVig3mKSk2EnqsL5mZ2qyypmuLZGbmZ4jf",
  "key4": "G5nEPs81TVNEdQfzTtfnH1BZCaVzmpoTWaEx5ZproMzppJjLuBDMPxZbQw4gvcMPpmxmdr4cUWmQCd8ghXsP1Aq",
  "key5": "7zi1t9pXniFyFKd5iHLkTDaaM1i26wb66Y3LPs3w7yabKfgoE7YA4txBoXm73xWeCh8t2NDaPCXSsvgvyama2gu",
  "key6": "5J2QzmJ6z4xUzUMqGvfuCSofwLCrVCN2hAgCFGFs5u5PasGYxpTfB9xE9x8aAoyu9KN9W753rfaJ6ZrhRjcddtwi",
  "key7": "2X2mdEBztthXLFkpk7hPVyZ6UsNUNQFWJwgUBucLS52sK5DTFRsWKVrLg4h3NCVTAhzqJWWkCq8fA2FcHKg4NG2q",
  "key8": "4FwJgYFJDaiDDWGepkj2oWVz6h4mkv5yryNpV218W3aXYhA5CDQQTAYEQaCZp8tUN77QTXGSJCd1s9wjCDhM9fpD",
  "key9": "5vzGWbLLNJcx36E54UVzmpfdk659LBBQpztKnoMYJf69v2pM4ysJZ4esPTRCsEHsRt5nzf2pW3vU8sCwy1g3NuTX",
  "key10": "5ZMspvj8eouJQQ2bSgA2Gh5iRGidAZvTKLL2Do87jzpYND8Q8NwuPj8gtt6dUuUfbbVuQwH9pUPbNC43Ti3sante",
  "key11": "21aNW5EjwdeRLSqWSgHU8C11rtYYyXFBiQ6nQKhDp4ayUTSo7ZbQvzyVTizmKCunyQhB1StwqEjbo4MTjbXUPAJP",
  "key12": "4u3nKxXYyyD9t9XxojE34pvHJKL88h8S6nHZoYZa5CtTtW7kepVwSMKpR9pjiajU1cj2DUG3XYCiChZbRpy8ov8r",
  "key13": "3edDN81KpevN71twE75PC2it1cJPSQE3wRTqyB95o7Yt1xqNbD2JPoCggCAJbc7LFxd5QPwzRZc4J3vWKvwVcra3",
  "key14": "3RNRwuV7sLLwC17btwR3KBHPdaUuWrPG1fb9R1wgUJxo479Fet6Fbuc7sNPxyWPgzhvFjukL5qgb7nMMMuUzzRBA",
  "key15": "5Gc2jNGE78Fv5dGM3Zd1Wf6sNgKBvWqgwKMx1b1fNrCHwmRpXEhHrgKo4zHWDibQ8JU2j1oDsNYkWneLg7oR59F",
  "key16": "4ju1DwYEDj39GbTxzTcbZc2EPymNTbbuQNemMhFATa6QJMpfMujTgeMYWFgc1fwDMuEA4nPAkfEbMcKjxKCkArDG",
  "key17": "2XGLFSENeURUXtUbhS2iREN5gwW95s4gPmGBdRHuqhnJhuQjBRmwThDSfe49KYvfXX9fHZD5GCMizSHBLDJQjZ7q",
  "key18": "3bo92k5RvDXe7Fq39GdBR2R6esesb5JDpk6Jz7mu6rmjjfAcppdVq6A6KT41a2Ye3MrgRVMAsrTcTw4WxbMzf9Hs",
  "key19": "4tviL2uRSSRejRSfKbtxQzwv9XWeFVehWt7GNqzQ6CbmghXueBukfeHqDf6x5DHFMXV1TbyZPBMrGFfwamJzUL7R",
  "key20": "TQniKLMQDSSQ9DBwi2hZ32RDp3p7tdoUbX2Wf7meJaHunTfY6fFfpEyuL1Vq44Q8qkrG9cbRKGP3RXhoT7L4Vp1",
  "key21": "3WWerRbRzy83HVNZkHLga1Ws6yMuMWcGTsH9FC9crwrecyHLiUq55ejAsMzV5GmEXLztiWoxW2MBwSM6jjzChkap",
  "key22": "2qai8mYc6hyu4kScNVgKHEjUmqF5QKsmkq51Y7MPtSUKVJEYVfAdCoZWYL5Bmv7dUjT8kW6tiMZWSVYUU16ngoex",
  "key23": "4bhL3xULDQJ6Fq9UJmLWJ8GYZYK67oy9HUxfAjYbPtytBQikD8W81xXGg3sSm6ynRfUBrWwDBfSfu3bccUdFpyjF",
  "key24": "2hRZjX6mamfvzyU7U7HPv9zJtNpR548MY3D7YTqhgxdDsZFmgmLrMyKNWMzVfUWgqjZxdnDuzFMLBwwaznB78XGa",
  "key25": "5x7SZmZyFQa1PTgtEQhR4nmu6eXNTQwSBUPTy65Mr5AHBYWx97sM3wfwL4GjvggQRrgzyvJshNmrpeTVJ1BCsF8Q",
  "key26": "3kL2n125PXWQ5UMPV6DEYUicmbJmY5XV44taRcxpefDfK74Df6ziK5uXiqTxuzi1JtmRG31xwmH5bCxGcQ1LXDq5",
  "key27": "43YJgdZ8cq1NoyvmNi74PLWr1q6EggiF62Xoi7ztZnq1PPSLKSEnZ6v2a7DMhwwTHK18wRRo9NE1PifTdNuzs62U",
  "key28": "3EZVPhpPndkHdD7FnVzv86VZDAnNQYFWDD4V9YpXR7YktSQ2Z5PkC3iPEgYnuUGRiHeELZiGoSaTH2VHhPy3znF6",
  "key29": "UhbHSXNVQnR3R5gLjf4ccrGPKKKmRzKungJKA38SgRojVSG11vQcnA5Xrp4f8tZbghfWkQnq65Cy3xd5x2yqiEv",
  "key30": "3nV2SxDTknGg1fnZzPfwtU4ZskqZjM3tJ3xG3H1Jh7W5DiX242h9GWDzC6k3mjrKPdYDQd2S9CynVY174JDpVeHT",
  "key31": "4DSqp6fUMbpTp77RCKDE738s3HdT2fwZpK1SrjzUnES1i3wQRF3iMrr1WGHfFdeNjH3XuEmyEsgGZNgiX8H3zWUj",
  "key32": "2Xx3zh1aNjQ6EW12iksfBb1dNEzzj5SfTZsvTcaZt8bMDma4hZrLJtWB9o2MN5n61CNBBmTzjCPuuSiRRsj8kHot",
  "key33": "ew95YbbsSuFB5LbVtJKXy3HKFZz2LdHw6TMsE9PEerQovLG9VEkiMBYsndHiduLkz8NQSptoSzGs2Nw7S13CaCz",
  "key34": "5CEZG7id3j84b1PenTQfdVxPPfzVmCrZdisdJEmdphtT9q6uJCdBwweviHbEoCgE3eqSiQwzigLHdHV7BFdTzyMq",
  "key35": "3VameXVGERLvqRLGcMWmtFWpYB3nThoBGvqdrmEg95ChZCGwBqDLD2Aqtq1TfZjAhquzg6CVxF5fTRnC2d3tziLd",
  "key36": "2EEEE8b7NjXnufnfkXjN9k3jV8975FpcuN7GPTqVyFwPzMdkjvZwJamKvvX8iLCYfTkcVRRW94XrWryKWYfdC3pK",
  "key37": "wfzC9GYmZ7SLQCTpdJBhQEnsLL6HefDXxnDZj2wdhQR6u61Z5fo3TTZt6n8MbveNpeEEMYVfkHqmiuo443Tuwmh",
  "key38": "CVorSKZEf1Y3NnWCwJvE9d7nXh5cJVtT55M9RaTkWphPh5qV8VXQ8pBAswCM4gzpNDQQBJ4y27yrzPrxixMQV1m",
  "key39": "afaMUvbZj1CrHbkyxjreikKNrskBHNCZfWqg9yAt1h2z89EQ8i7XojHADxYKPp68sff95zM3sst5hJnZgXPTgDK",
  "key40": "qMm6Fb2b1kfJ3hVvu4SafNa5qmMm1nmhygdsJKA5JurXMK5sprhwQYBuritg84sXbDh577FzexbkLES5Z5ADxcr",
  "key41": "twyA8oR3UMrcE1tdSFyXX94SNiPygmpF2vvSaa3P7GhBiTL7rMKFF8Q9XK7ky1f5VmqDTjavo7rNqyrNRq2GhEc",
  "key42": "2wpcc1sMpwbhtNf4veVnjvGV6FfrJjU9eiNXwQ1qxBuwkysG4tPjLfkxsH7L8eVnDL9sGPkyrzNvQtCXe9UuDgva",
  "key43": "2AL6okgBfzg3AtwgKHimzuTrDDpg7DLvpcWt2fFmEuCiwsvTNwfw47TKrLJmEtidoUEaTcFMu1WsTxbkC8S2ZpzA"
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
