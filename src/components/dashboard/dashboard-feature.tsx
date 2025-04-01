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
    "3zTbeaFpi7zPRWMjqnCefPiUQVxMw815o2hvnHuaUiEdWRmw1zTVYvRsGGadsWAKbh99hzDAoLioy3Lepdwo5Qxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHQE1KJWg3z47A3ibucHLaUMmzHLjEY2uhCLAAQr6q2igt1wdyBvne5bbZAVnbrSc6jSa6j5C29TPnCbeDN6kAj",
  "key1": "28C2QaVHLMLRqtDsK3Hx11x17FRmVwBiLEJ5N9X4rHDrW2yrNuHvqKLxhY75Yme9hrurWmRkm2Wu5ZGstTAAyWXq",
  "key2": "EgYfUssABHyctpHJ9CeJZc2t8qhaYgqF5XbBM8zizBEBz51sKJup8eaGtw5Xjz9PHeJJSDLcRn44ciYZv1Wk1AB",
  "key3": "5XqwmNnb9bXoCLYL1KTMEg6txd42FqTzexJQT76W59bYBaZu2zSTEJguqgUvKhKgejpju5J2if8xrS9cCTukBHJd",
  "key4": "B2qfZmXuAehKfb2TDLVmfgmKZTnggsBpRpPE3u3cFknmfgMYGto6ScZxjzwoof5moVzT5PkQBrcMr9knh6AkYe4",
  "key5": "2LEsj47H9R28i7F399Xmd9dmoBvXkibHRSDTRvwDZu5ShtWMkWrmNz9BC4YYdpbiKdSx5k2EhUyFwTBr2wGqXPRF",
  "key6": "3ABWGKCb26edqSV3WyDpjfo97uGsrjWdCCwqKNqAELSdPLynGzX2sGzHsQDh4QEGadGgJoiBZaNnGMn2rWrZobB8",
  "key7": "4zNFeFjK9L4FiAnbFCWsyo4JFdGMz37kmBQ7Tfqrod2sBysDVikKbZzJsPrCJxeYJQridos85NDt1dBtEsfogvVT",
  "key8": "2bwyztWLWx653hWkHnjYY1u5UyLNx9ysNhmESaWTVt2UFJcp6yo4yrN6MmBM8ZH4PnoKeGC4hp8j1r6jxRC91Js8",
  "key9": "5spGhRR9KgAPQfQ2tHovB2oAvZ24J67gF2NdZNqrFu5B1DWW6BMyoAxQQQAqPHcaDZi3pRqi34d9qL32j7P6Dprt",
  "key10": "xTvz98T7TUFuzfU53ERRqjtr37BKaduMmwkGCC5VtyW1uH8NsSc9s5wuRgVe8CsToRe2SMfiyatpU3zwTthLZn2",
  "key11": "uvbyCY9d7tuZNEC799e6k6WQGhrwEXyV8XcpjPNL5rCEvY8Dcw9ZGWP9LxueHKyzwwYPstP7pm8rZBq7Lpc68jN",
  "key12": "F5wmXcR5Mh6cvPTfpfZENmBJAr13NJZyoYgmEhst3V3xZZVdKqSqhPcJp5pbzaxts3eVHLXzg24ptmBFT6jQY5N",
  "key13": "hoCjnuLTs5vJbsrzZPxqzFyKDSeoyV74QNzuJWztmCtZQRjHEc87AzYpeScW5nTYPQU1bpp5iQEoNicBGwmKcMy",
  "key14": "3vJKrERfj4ZGY6CizMarMYDgHP8NDkmZbzGg4bPLZpYoa3cMmC5x2hmFxAvXHJeudFn2YxsRNiP6pjRur2qfxVHW",
  "key15": "2KuHspGWoWVUitUEmaeFiTnDn2sGWgmW6pq6gd6E3nToDMizaK3YHPzuqDiEzGdGjA71jRCz4hAf5YbRcf8rbHDH",
  "key16": "5EuK6JE9vx4ffGwNGPX45oZn2AVxi8N7vsXGXPr4J5FSd9x8T3BV8kjt3E1wGRmCDkYCi4nciEHw6hQjiCP9cUyP",
  "key17": "4kyjcjC1viW6MbQ8fhgkRVJEiCQTc5sVqYbipKh9a3mzX2B2AU4yQ9AvN1VsCVeUWvXJpM34oMuD4PDZ3xELgDoz",
  "key18": "2EnM8X3DEM7fay5mHG4tvkrB77AD56HAgnKjmEwoUkjYL7Guh3UmWPUKUKVEhypFMV7tFBiinmtkhxpbH192sHnf",
  "key19": "4EZTJxk7kkXTk4jaVxGnvWsydAHbMdAheqKDY8pGd27x3b8JSWvfdo6b4i42cdkpv3p5RUsfF9F8L1im1M4jxyYp",
  "key20": "H3M4eSfhURYtHjsDsjfLpRXYqvZfuyTZzmzKTRAr6upGDMXYMTxfPVmadMtVusey7iysyLuva4bFkgVkUHp7xi5",
  "key21": "5PeyY32NAV4PDqPEipfRdoxxYiDAkfYb9EJS7MRWmSgdVNVbN4YVM8X4mdnZBSHVbYnj7k2Gk8FiVzRfH6iuVXkL",
  "key22": "53JZDFceQ9BKihcPG1dmjkorGCytmoqWX6PkQ8NwxV2x9sZZbW9G7ZgvrRECGM3kL4S7vJSs3APAkBH5WTE7VUZb",
  "key23": "5K5ioMPM1wTiMzQ6XkUKGWiZHQMdf29XW5n8D1ydBjqk2FSuHy6SmvcEoZimtkosQCN8PQBCzX5RTZfHSRgqniHC",
  "key24": "2HjT3jRo6U11yeLG8otZRXDndSEmg8WsMqH9GDDeF8GqZZuVdW21HuPZi7oDS68KNpjm6raLv525Dgusaa4Vf4QH",
  "key25": "5Ns67yBwkw7GSzKNi7qX5fu1y9rDCgBSRZqWVRqsAFPX3tsZiToBpULecrpJjGYnHbaeYKN6DggaknxpU64c7GvA",
  "key26": "43rJJtYqQ5JmhAdLyb4rJC4ULLbLY8sbiTdWjwELZA3GaQTqoiLd9thHmpfc1mR2jMk8oauARzcvfQ7TEdTyPktm",
  "key27": "2vqUS75dMVHVDXqrtpiyK6RQaXB4LJakQ35C276bNMwRSkWRQagBLkn4ZPiaXegp6JPdW63CDkvFP3WSL6YJzXSa",
  "key28": "28BW91eYQYnxNjqqdhwdTuPkuTJEvqgq6AY3xgibGND8SvkCLCnETfwUNCtRPMMh7Q3rgScTmFVh5jvDHyCoRikm",
  "key29": "3btSobjLCs5EH2u45G1Yftm2F5ADT8umBb8zde3hxGoxeT2i8tVZZzAPqpa279RZorRf6Hbcxfp4KKayCL59ruXg",
  "key30": "3V9EUrRKwLjZBXxtbTy7pZENvkRDP2CxgcC6ewMeJF51DpnG4KwD5Jy5CSdaihx6YNYPeBKDFqyhM5PtL9SPi5KU",
  "key31": "5t4uGKM4bpt5ZuzELxJ6PsKKmR5hHqv4mHabigfe8XVgE1sjW4CUyfR66SNJp6RPj2V1A9YfiCxwQqfJ7vvnSfaJ",
  "key32": "55wG2t1FEVwXrgA9Fai5HHaiSRnYaCaXRqmDSwTS3XYrwC2oC7CodjL5FxiTSPcjXZBsCd2uRAVbPAGZAhDaRA58",
  "key33": "5A1kg2EPFbeJZc3u6Zi8SVtkABYSmmihT9UkA2cnJ3tWSabDzMvRQ4kVZ15potYJvwyKD4uai3dumCrvPMDa1s5T",
  "key34": "AMN5F3JMSLJLGQtXK1uxpqvNZStHg7t5rJrKQ5J2mZv8SmNjafwZwfVr4Gs9ZRPmQBVgU8tQ7K4uv3vM67m4JYo"
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
