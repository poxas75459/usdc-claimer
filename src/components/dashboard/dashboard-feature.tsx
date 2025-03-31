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
    "3cKyp9BLDcEP9y6DwA9wZ5oujjc6EkzoXcXkcCpWvT1xFopoJWHSeufNvVV3SbSEGifzy7M4PUMJw5HgGUjP8oT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zqPVL3CFXLL1NTjmatzGtXa7ALb1DGsfU8EmnnNwMWjjuAkKKofrHa9DYr6W7QscALyGLexZCGpzYwxiuQm7WTi",
  "key1": "5XRsctGAyihBevBbXreCF4gQUANZ6UsLXD96wH77rLRsnDy5FTYcnRwDMERP5KnB9iYaCFdPZh1SHwNZjo7S6dLC",
  "key2": "41zdn6pKVEMwTc2d4MuCXHVB3GBNAJXHhopVQwEjdNHApszGhvMZvRF2YFkRKa7sgwZUcBp9ou94rGGSXuR3DBC8",
  "key3": "64edL4wgQRtNcWxtvsg31VkYV2qYLnBxRQv4rzmQ4F66CDanjWYH5aym6nTyvZN57hL7bWNgd9N9g9UsVreyufm5",
  "key4": "3pzMKPcNKNViacFwYPp5L52jEsULqttmS13xMb71RPnppqUu3A4oKdy7X1aU71skanXHemttLtBgBmqZkQfvD975",
  "key5": "5fmvoUbk5uMXF7DMe83GfKXdRYvovAoahhqvL8tUtwGpP9ARdmYBUrfD5oJ9NDuzJ7a26ZNP6HcQRufiuaBaEuVH",
  "key6": "58GWqh7GBU1VKKcrLJoa8A6bGQNFVJLcpe1cVib8F2xcHZjD3CeNv8GmnT9p5hZVTjNyDztkj7WDdFb9MLH6mFwK",
  "key7": "5YXGN1WGKgJnC1mmsvqaBLjjuxXxm45f4a7PHZvY1kL21gQYJ5DC74nczvpjbvL2XE8p4Txt1HmJqAfxJJy6f6M4",
  "key8": "4Dzmvz2riDw43EvFtWhQSmctKCH46tA3utDixN41tBhmUAY9LUy8uWHZZzkBkYPgJdnxq9f6jevx6qAm8VUVhX6f",
  "key9": "FCMQpLBqbTctQRMqWy9JtU1oyNvR7G7U9oHA1CQMbCpfHWypvSiyRVrmEukiwkxpM11wLpffR2hh6XgF5cKSgdz",
  "key10": "47yWp2p41kjjnyXkmUgA9LNWgwQf6GdduKuhEjDpvchFiWbkkz8FiPWJZdEbJUpS1hqUGUk6ygf6jK4Yu1zuEXVB",
  "key11": "f3BFphkXk6BPWnEhHtmSVFgLDkx7NGZkXzxmja8JD5aCRFwXxmTpqtVUUabpRZqesTWKL76nZXnkedAShxSFx3D",
  "key12": "4o8UqFJwEXFHrTi1yxGXvsFYumyWaFaLgxfCiRGogZT5CHtVo1MzD1kKVdjA3wBgHn2G4jiy1k2UXafzYLUJVxCE",
  "key13": "jHv3Z7WndKeRfa7sgJb168SqPumydy8z9dQb8yoZbZaugqYEidG9DUuB4GxiUNRMf3EddkVxBQUAZUJH8K6gfDv",
  "key14": "26Du6yXYmhLALQ6VgJBhj33jHYMJmfnMZugYmpxtutHyRd3ScnGu2G1cEktavqetdGZ88LsNDLCQK2EnPXFbcw61",
  "key15": "5uW7rSox7adgosjd1nQ76P6PHG4Vf75obQaPDChRZhq9xWU85QVcu3ayaH6qXzesN8zWuiD1qVc2QgHq57DK3ALZ",
  "key16": "5BFSz7uGM5KoVuCGA3n31vXUKxS32wggVjSnoFTXaowSoTqHyqcMQzXiZPxDV6969uRSD19vyPycueTBbphKKWve",
  "key17": "2AXuncxhBr2PwLP8caHJkJWW6ibLNW7KRyyxQ7kqnjUEhC2R3JQbJ5DbM3gGayyjSKp1nUxsspQzPcQue68Tp2Yn",
  "key18": "4QGoR3fmHVNnKZMixebeJHcwcjfd3vNHvr461AEjTunQ21D8c25pSCf7dbYxo9poTskz5KiFyLdiRhkN6E5rerpB",
  "key19": "6Tt4R6LETppAQU9Gx1mPNnvWzpiinP48hLUp9tkgZP2gbN73wKCxUFcV6Xbn1mebG6xnGBhNUdGQu9DxR8ZG9FK",
  "key20": "5s8LmVWGELK4vtngse3sssfoXDfubUMofw8BSwNDAMwjb67d3ytWYgRqytDs4tndNNVs9zks3og8Sy7NdBFc9Dgn",
  "key21": "3eWB5vCdSKRMW26pJYeXLN4ZoqpNJL1Fa5AYgVbQd3oZ5VP1vmUPAhcxNQuzRbEpCVvN6A6eswtPfoWHpqSaAcFD",
  "key22": "2NKCp1RhkeRLhM9FMFLSezdF8e6KtCD5XiWYjAm55kFD6E7JY9i5LqAjjLK4avwUYhoJKCvWpw9Qqmtinv4iM2hM",
  "key23": "3FphYJphtGNNeg6M4JYS7pHVGyUrTjNv8vNyMZyQYTkRGnFtCkqBuXd5CXDDRz3QPBBYWq7w1BHgt4r835NURKDi",
  "key24": "3XxZq4AAUxaASZ69pXtjDTBTAb6icZ62hyq9yV3faP4XcLXRJDf1efv1wCpMzpcTWsKH8qzihRWF2FgLoYgwDqqZ",
  "key25": "4nCoL3rq1GVVdNjAhXdF68To6vBKYjaeZiKfmRaFJVrF2saF8SnhoZkL3gYMwBQGM3Frvjd2Zr766cSi43CUyqPz",
  "key26": "2ogWv7JSj119sA6JdMdwotvdrVWE6tyy6bpsomxHVoBBtJSqtq3ycXaqpFQLnHFpsAkBs3P1TZJyMPiYhzsZNBLP",
  "key27": "3wA7ajXDrvPk4Gh2MKeK8zMyhhfgeVNMnzKj87sKhiQnmK4XK7vG3T6R8N7eH1CCMWjEbpAYHZzZ3pviYbBxztTh",
  "key28": "4ZkTeSGkaqxLRcztqA5jporAttFUnRACv5fRVmQ6HPXrUMZXC3u1CaCL283H68q1zhQpQqjWUUdat7Y67bQMBUPU",
  "key29": "5nHjPuE6BUfzQrE7Fen4PHHpvRH4XtRVeDnBBHxD79oYQ3DBGrdVGrmtk21y3sh9P7aJikbCszUqdfb6hisLmnDB",
  "key30": "DK6YpwLq1KR2SUmb1yJG5ukhq5k9H55cqF3RgRFcJjhf3nToFNaQzocxBA86khKaT7rcYHbV3HZhPSPgjEzKsPg",
  "key31": "2HtBEuovTUMRWG7sjheBYvKFDJFzFc5TWn2FX5L5LNwBBjvMStb7yEK2PiUEZ3zTrDj1yXc75vKFN7HWx4TQTdpT",
  "key32": "32GRcWNF1NLxugqUao5szzo4TwY6cCLoA3hxYXPphrex7zjsMRXBf7giCbXXLWNPak4mXb1HSMZ7Cw8z19cdhs7W",
  "key33": "2V8N5r2RKr94QtBUepT6PvC8CgNSPaoW2Wzckc3avJmrgzmgBgZzfcrDF6JZ9GQ23ErbmzCiYZiYPUESdpXMKtmG",
  "key34": "2imoqhj1XgXEXLCc2fYrft8mnf6HYaE3MbrsgSVvdEayyjSDjVKbRHFk2cN9yfy5PU12x7XB8iuf6sRQa9jJX5X",
  "key35": "5dTpsPPdqpPZD3Bc4tFh6MeBtBPDcn5q2j9PeYf9BN7EVJTRD4DmnFxdixVz15YtV2A3RymWrTCtqD9Y8NqpdWcC",
  "key36": "meNZBehrqTAGVBUYXkGyCrnxJHbWRZRTZCtCB719XwC5iK4sAxpoiuuUdCWF5HKwgco738hDycQDAVBaLV9cc2T",
  "key37": "4v5ErAFJPdz7K1hJa8meYMt9eun6zEoSQ9oQ63f7rHYDxXEGYFmZR5yBLJygy895gwycvu7b3EY4DX9maFD3sS2Q",
  "key38": "2YGPUsgUkLjMVu28i6sNKkqifMAGvLXQ8m2e5Z7mCjFB1gSBSYDFKPfpBLdp1SpNzMB2Y7TosJSQ6hd2myVV1MYw",
  "key39": "YgSar6rmMgud37acDjfE7fXt3YWzR6PKgygqsHNpmGgTN6pcSjQimrC5ZtfQm2tz3LVdS9VgxXnycEiFqbxYQiH",
  "key40": "3kREt872Fwf7B3QeWZHjwhcMzhtyd2tXST5jxjsW5iTFFjVYvoPcf15oVuswgcmNVQQoYjSzwQgvMS6NBXTJDuJy",
  "key41": "2KcrbJnF9nP1KiULaGw6eFWDH7d1dCKhcJxqUHa4T4A3MLAm4M1Rvn3PuuENovGnC5m1FDELj9XNF2Zf4qKdcaeg"
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
