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
    "TsYV2Ub1fXn3TkZ6YgDHkCaZLMpMxeNCrJLZUw9ap3X7toocfM5Y63T4xPZF5XveuLog96d27MeYpDC9N48tWSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNdnQXKLWhaZYTLbzRDeDgZ3fHCE3gntda76o551vCXcTCoJMs3He8dkd7pHp2d3im3uHM9rpgfA79VvGWBfCQH",
  "key1": "5w76LqcgBvqeEvvzkxnmjNa9pS3y1pipaBPi3EfnTRoabvPGtJGYhknQrSzUvCNPRtBYdzLD6DSvbXYsmduD9jMq",
  "key2": "3tTcyREACfBYKNFG1RvWhbecicPvSKUsWSKaiRagZ189mXr8ruydE87orxCeAhFfrEmJsCN8j9bcjoFUrb9DPxrJ",
  "key3": "3NFhTXwgLk9JAtFZBzYGiHwSXh275gNBe8sig2J6e9DqCwmPJoKRbyE6igtxZiw6t3a2FbrhfV8Ka36DZ79d7TpV",
  "key4": "5ZaDrP7D5mQ8Xq76z7YA8tLx8ChJCcJpiVxBwxji6WdMpcfgZsgmcBAxahbdfuQwALE1nqnTYcWrbdKpDLyqHifd",
  "key5": "2LStDRtUj23VKxQ2pKHoSDJ1Ebe96Jv7xN5qEtYQGrzdAy9oe8wt1iN3KosMvybS1V8DzsDCY9LZzKksjaThpzEc",
  "key6": "3wGx4v1PLzzkvzBzV5Me8uALrPBYqHhBSzHpcEtJKN7gAvJrgykWsdf5XftmCGVHTDBtMqfJEwBmXyFtkzvW7ZMH",
  "key7": "3UwJFdN4h5cHTUdAEWqpxoLQpcyTo3wVcBFkqoWSW3WSjfvzVFYZ61Kbw4e7AnJ6xj6pWkaZUaxGENi62SKxWqQG",
  "key8": "4maUCC9LAJgyr8eKJUV3e7b3u43uwoMtG5wspja2QDXkjTf2g2RLhRLDtF3HwWSyxm6uYtSosWD1rUswbpMa33hw",
  "key9": "61k2H2z2gxgtjM8KDYkqvZj2ZpjdqWmAmASn2YexNKp4ffsBab6jTF4ewMBzCgttUZp1f5cF7qR3iWLc9Zv8ApNW",
  "key10": "4e5XxdgdwZ8WsAzJECfndXV1dcB9WiuqnsUjQCETqhBdC3uyz8f19hh11vQFwBTmvFYV21cFqRvgrywG18JERJcR",
  "key11": "4UW1gQ5z4dAvhsBNoAvhzpZ1Gm19HJ8jLDbnXbnVGaxJWep6pFKDRyom2BFthaowgBujZBQrWdxUpsR3xardc5v8",
  "key12": "2rwnxaa617i3eZvXiacCkYAFRvoMmC3c1kpErsKMqjpVzgGJYnH2KdaqMAvfVbkFdiqNbYpF1GvCpNtnZPW1PD9d",
  "key13": "2w7sfdeTj7CC19v2pD9aFYRJEg4wJEupGAJjZtz6a2tPM7mhcoLVS3S6JzouSeptvGdCy9UgfjtX5g8kpgv9GYuW",
  "key14": "5uwrP79oG3TsxbkdAfDvWPZMCJGWYTrF2wKaMw23Ftwg4DbSzdxofGSR1r4NQphBfkixbyDUVdAdBQRHnwdxkjfm",
  "key15": "3MSuGKXb1LfWEhVhnmzwAYkFUC5M3UHMRYepTSb8TYRu89EHumLPzRRzASRe4osgM6qUzN1KVzMVRzWfFS2pKP37",
  "key16": "64ADZqrMqev9zp1Rbhs4rM8iekhRXcK8rJNpS85VfSF7SseoPaA2swB5wFRCctF3FWB1bG2RyP8Vza8dMqmdUhiC",
  "key17": "dX5jhw4S4o7NDKsu28y8D399DfTGvGo44TqPWwACWMUBEhx7FJJWSCkuz4uskpRJSXkXshGjTcFEDzzXBFaNGjC",
  "key18": "2BxTCzq5Kdn69bEST93JhzwsPuhVc28PCxD64uFL3gzmuG8KYKKoQVTL3tPp14qnCRBZs7TcKTB2kYQmSaJoqnEH",
  "key19": "5LPDpxsU4Z5ja8AVhVtni36b3orpEQTmryQK5PVXaWcHzMkiEg8gE6MWmxg4Q5ce3hYByTgrG9geXh3nkodH2hEz",
  "key20": "3UjXkkmC3eDXcBiymqavv7n8BiLNogBVR5b3AxonTKBM4kS2nqJbrkeiQTxJNNfJKnmmBfNCPgCFxxry3VyhcLLF",
  "key21": "4ZtNeXgWri96tAjghNTns98ESLCASy4auDs3sT8aNWcG2crd8RUFnvUUdAWANXum7M5aqLfPtccSaZWkN3cSt2za",
  "key22": "3ZVu39e2bfnVJHk4wQd9VEFhDCJ9HJQiovHnnT4kkhdiKNXpg29WZnENzf7VGpLuzBrnQ5QcnoXZ8kGuzrj7F4VL",
  "key23": "wg9w3ECYcEkdsiG7WG2dRoGkih7GJTZZKzrtzUZyRbiipcTrCHSxhSNSpkKEHLLY97F4NMwF8JjEepwtY3zUtK3",
  "key24": "1yuxMRDFQ3MJ3Kf2HoENPHzCAqAzbKMZortRt5Pgi3PiQA3VX7esAn6V3Nsa2jUXTyQU3XFRZEYPeQSrcBNPbqq",
  "key25": "2TdTcmSAQSTN1WzjkBcec61eeVaTZyMhyXJpg7bvABWJnuHYPdbX1i91M9qwdybYYYPVf4LzCCPmTV79CuCUT569",
  "key26": "4dKbApHT7KVD6Kx7ZSTx14GHqLUsXUPyKKtjjBA2dVFgAcK6xmnz2HHAA7oUX6XvrEmykDr9aczb33YsqjjKet8G",
  "key27": "51QqTaEmRrbvsr4ejLSsKVJ7gn1ALAxRNV6T4dxtcpx1f7UffQ5hc9Vh5vwEJeYo95MeLbWAdsnhzQcUfbAAcBKa",
  "key28": "5UiFXUJrv1uigk4EqBym64pqjCeSpUn8dRGex9MRe1xuEQcjDsnon3joR3GRMhXzBWng4ScGeAnoExtdYuUoRSEV",
  "key29": "4NDE4q5dUitni87HoKkLJDHE8cCzajFYotm5zZFqeGoBZLayPZM82F3UhXLDhPFKBghzEwFyJ7VoKoz1a7SiSbsM",
  "key30": "394txBk9CVV5mx8WHfxNYvFXV8cmk18JGtRj7K7vULyugd4c9crPtcBrZSnqEJAJEe5ZTDxzBDnr5rUNetbJ3Qym",
  "key31": "SmCA4vdxwvnrv8uzaVtCohcp3oetVfuqAPRgakUFwG2rsjotGzi14pSLciqmK3f35ZQ34hHPSwn6aHzrvcxXVv7",
  "key32": "EPQo3u9MTBY4KRtsgFSnkCJVXtwLavYAPQ8dcpX2q9sNK8zbLQBe8XttZPCeLQz395PQEoRbM7jfAipnusX7b38",
  "key33": "6YxFLidaWnYs7xBuhBD3XkbcXJXhLGFHCmjhQAt3Zf9RFtp9Uq5uA1Ph5oiGWPHg1v95hDQsQYtANT1kArncYhM",
  "key34": "3eCJdPR8GE3zvrgKNK1ZafUb81bAHjE7pSRhYEdRbLzhtXjpkuD1kB92KHEz8r1D7hAsWTi387U96aACXj5A3kJV",
  "key35": "4KZPNWC8kPV25tqgy2gQwKWvmfhmLHBLyugvaUBgPybCaMYttGwKxouzuUKi1u8a6DRPFCzotoitwkyTibH9HAVY",
  "key36": "3CCurwg7aRJp4P5P1qxZXv7KedRkunSCFuKTyz4b2GP6Ln7EmcZojuZcjyiCeYEVNYRBsTFbJt2dAhDr48tsMRp",
  "key37": "4Uqjv5yfs8xcBRUcKs2rE8mvtMoCpHJm3GdniJMNtuChstCCyzfn2SJ3kr9bVmU83LkSuxueLqWurwiQmXanrPJJ",
  "key38": "2njRkz7ieitJyjqhYXvJ9fu2VQT8gZDgMamoxE7iJ8GJHb4YnsSwdf7wEnppqJbrQ2BMVdwpHZhCUzAAw4nPhZV"
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
