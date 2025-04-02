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
    "3Jskrv2TvGfjy5AHbeUhAkE2mxNFWzzkLMLZA7Za4KkK24brmTYdeNKGzSjPQGbSt6f4KMdLpx1QAg1HFnqTF9Nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHdmJMyTR77fpA35bDef4FN3qwXC6f41TRbJts41S4gdruU1KRa2ji7PKi5DapbKFGLZfDFBr5AZydHTvX3VUfZ",
  "key1": "54krFKvLeXTH9TsCC1zVUcoELag15FoR26WtPGsGV27HU9Av7YuQPYrM6pt9kTyrDW8u4BpRRaCw3a6xgeqkE35R",
  "key2": "54M7PqcxSAG4gCK3B1tB1JqQYm1bFwyfhPYBzdUaNpD2dQ1BXe2d7VUcwDNRAVGvQtUwmyxEM41NZmmK81P26PAu",
  "key3": "2JSzwLLuqUZipE5vdNoxeeNcAXsxtopxV8JHGnueNXmG5g7n2creuURtiGbxrCMfoYynwYMLrvJ7ffukibMNyEJE",
  "key4": "3avMtausb9JoMH2rUZbCgorNGzR7VnvhjkG3Uds187Qnt7Nwfnx8cgynu7CevUHQAqB32BBaPorvUbStJZFj1ofQ",
  "key5": "Qq957WnwVY38cQZS24SsoqkNSL362gTpfdQwKyvEVPqHJyti84C3ru4rnnBsUZm4Vqj2uBiZNUwc8q6sP41E9x3",
  "key6": "3PfZKL5yt833sUvT1nqe4HNFaceNAjWydurYi5YMp3vjPQSEUYE9kD2wz3TvoAPkp6UPxLVefhi2uTMC1U32yQiU",
  "key7": "3cnVpUwY9GpRYSYZgfjoyyPYbEcg4pLt52gGgE9M2y12k9LqSVJxE7YVTdKqCDcTX6C94GgAJGgc8L3FKnDUmyqU",
  "key8": "3wsGizJiPEGqApv7DvTeXpPMRZAGRacYxZkh3VqrtGx85RzXj3jjA6vfy5yGtdk4PYx6z5cNTqt8Wqq98bgVRdWt",
  "key9": "BvLhQQf8GGDYJh9z7Wtv13M5wvXcvJhoq2YftLsbiv9SqMPN74vhvL9AQmihAF8LerPCUeEvzhy8v3ziCtNUZXy",
  "key10": "5ekdRxdwxvq8awbw8P3AKSSmKgTRsiC8eBq1pGgA9GZYMatjuNY4U1FC4btpvQYfAbCurbDvtn9WmrmoyH4YFH5F",
  "key11": "5SCxmaDgsDVEB7nUH9236JQweNAitdZZvHH6ZaPp9pnET9E9QjR51uvRMS4rSUooh42kZjbw8kWFKzMSWX5gJjpT",
  "key12": "4M4JGrZT785f9SapWE2kSQys88vjnepL9f1HpXhCrhye6A9ecXE9MMtitsLCvSZcz49rwdp67prMH4ueNZeLpyp6",
  "key13": "4sakegdHBNqbgpQJYY6WBk4UyN9MzcgSMDwcXiw7uLDvSxqPiVo73nxnopXhLhWP3o3ypdD5pMH382Dnp2R1e8Xo",
  "key14": "48REFv3H6t61i3ZEVRiTHVZoSNSQX4hAMzBhPahmZNHJ4EN9GgvcqYu8V7fx9yMZevApLPkD69CJBU1upJVKMVmk",
  "key15": "8koFCSpBkS3ScHzXBzhJ6GYgyScYQ87LWb8Ftu7STT9RHytqraxfKbN3GJRLsCMeib15Gzv3ByChGKjgBj7Hgip",
  "key16": "AwmW8gmfFGfv37ua9aBfDPEiYrKPFQmvtv8oj8Ln99SEHiVYYmqtcoscbw4NnRh3MKdCMxjDmNVDnd7sgxrL2xF",
  "key17": "3uYtovVqQWKPW5hoW8rxfyLzMqs2rrNuxvEQUah52fJoYFySUgijNUT6e2ds7e9F6vv6M519g7LkyyExVr7tMKkD",
  "key18": "jk9ceSjp5Avtsdb8RnfiQzjoqAS5LBw8T4bdyL5t6gBUS7YNZUN82dpNNt21imTX2To3YzoFrhyULnjb3et5sDL",
  "key19": "2rJYihgpE9HyHaerKgcjNAi5jeKgpBFFHYnaoHPGYCJuHAS4CqKwVozCpHMLXhtu1zDo7XcHeKvry1BBhuWNRv55",
  "key20": "4RQAYwBUNecRrXNFTyypUYTDz5rVerFsERn9cxsAr2TMLth1c23keHLBnhJST9bk3TB1WPMY62FkE4MuUmiiCt1G",
  "key21": "4GQMg7g74wmRJmhXnBKTpnmASxw3CBgdVaE7oDCF1YCmJmbhxnDCeFXFAJj1SWnAGVahBWTLS4kqZ4QgXsSPnVkv",
  "key22": "vXpfy1SEeA1CHqd71NN6S2hJ2PYJpK4SuGetmijPxx31nNHXd4N7vXv4oV4kiumjB5AkWpPviEvgnCSLo4oKgjV",
  "key23": "5Uzi8P2MS5ThAVz4TJy5p3NSWjKjfQCWeY2WcwePFiFSBne4enGxinEDvry94cjw1XdKRGVUuJcJnf6m8C1wGtnt",
  "key24": "5rrewgjtgvJBVpxB1yUZd9ZE8NPjK2M4fAtvGhYkFuD6Fj1USrWNfChkkguJXd6xtdmEimEYqwyez6aNHSNaFzZV",
  "key25": "3BaPfXfGWA1VFHu9oUHohD7mHARuUK4i4wVpBtdTtEq1XDtty3ZozRLxzXFxERZjKfrEaBmAwyhLuwsqQ6puCGK8",
  "key26": "4Yv36i1k7okcARt5iKd67qWhFTsbzr6qUomMGkWqns5ua6TD8tetJvY9HyYzrLWMc17XKvHcY8u9dJFSR5EqMVdd",
  "key27": "3U2qXXVYFswECu4Emwnat2imJ1i6wvfuCyLETYeZrkcx7U3zqKwAdUYA79KjEbz7wQWEYJFUroWAoChSNGskaogF",
  "key28": "37zHgFT6ZNvLpNMz45bvghQgb5BbCT8Q2t7ZaiFmWCzjmFFj11JHxfsVQNXY43uwtJmPwt87uYU3zXkF5DrkbvMu",
  "key29": "65SRKXJmT79onRCFiS1hvQ2N1DgcmeiP3ZsyNcteQyxxaHhMHZ5mrFRtyvM5FqJRiFrCU1p9MiHBpPwoN8HCZaiq",
  "key30": "2Eq22Be13FVQNkrHiKumpqgyqU5VbtKPjgoiPEHtx8tcnjdpEsNQfySpPrtCgJmrmVFyadYfkuraswhoHpijDXPh",
  "key31": "3Lq3cFNxgZwz2HEaD4BPfNeDYo6fG95UVkSE2pNTTdsJgentHKBa7qopuaL82TVCiyfvdFwbkopP137E8gV1duZy",
  "key32": "VHwEpXRmcqmjJtUAUbu6twSL9sFzmdzzMivW7yEnG1DLKEw3g9qZY9uaLrqpyfxkuVdBkqjYW1oM3MEfgWsdPS7",
  "key33": "38DNH4RunXZspieC1W4sT7Y9YNCdPnEM41b5XbmCoG95Ka6kxYhNCFhqsM8qk8FSXA4pxt19x9Y83drzeyqGPFfj",
  "key34": "5ayLu1rQFCSBAtpJ5K2wzyKBqg8jtRwbHB5oa39RrC8p4kRhSHVvS7s1fUjaKXYQNQ86x6e3rL8Md4CHG36kQz9u",
  "key35": "XcWqNR38U5x6BkAKXdUTsmYfKeENAgtigigb3Edy9Zd3adFrgkaqNw4gHTqPMisWHhtMsWiJujTzvKJyZeUxTpb",
  "key36": "61yEY62CHaVREHFh1ec6aLXHUGmrPWYV5CCDQq4n4edsHywAUrGniB7kRwnFvzyyaw9R4MdyWNoBJHjzi2YkVU6B",
  "key37": "65XSLctC5U6hMJZ1TdZR89q58NQiE2dRNUZCzBU1eX54m2Zkfr1Xk18jr1SiBkhV8znoiUxvC7aAZtZs93A1otdK",
  "key38": "4AJUSeFxLFsqCABSY4SZdaXQVKwYKQnGXeKbX6UuYivqpwRo22A7NJvtchd7VPWZXKLfibLcp335zgY9g5oEoQYi",
  "key39": "i7dnd6SmsFsaDJ6JzxmgYNyGJsZozp1FFypHDhBTy4vH2ExiwNbhjaaAH5qGwtycYALBKDd7WZpU3jthUEZfEnH"
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
