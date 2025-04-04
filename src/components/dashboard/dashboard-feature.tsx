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
    "2KrF9SsZxEMDLQWXP21Cz45frRBCtCN1fSQDCJnTvPWfkrdjqvmPhHEpdH1zaU5tgYXLNHagrm8qi3K6Yt3QHzeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWmKP82aihfwnvnYU99GYPkdB8LpsKFuiaZMmDCtkHKkudLzMiET26oxPrDeSAdHwpnLTAuzTLqr89dCZNjG9nh",
  "key1": "42DkmYLurcYgLfbkbexL6BfPcPiMKPmXgFsQb2Q9poVEi1xi8EhCrwNUxRti7VuVWJRKRpNcP4umcTFvQvjJnqcG",
  "key2": "2UWRmmMRQ9G7Cf6PAPQcSCTeDbLdaVu525n6WQHjJfSMnJ2BZVq7ToeVGjecHNsvPKDH7jtSAq6QUCeEUr29xLE",
  "key3": "TbyA5b5wTmHrF89kJCfYtiAi4pFErGR6BuCC545rsCrw22Q5N5Vtd1izwFboCXo8BjEpkBQ6kwA8msdJVZzTe9D",
  "key4": "3n6Pa69FyoNuuUGMXTvhYzFnjKM8BjX3g3ALZyYMmkSJBo2GeQuqqDAwsBuRQe9PDeFQQjrnMUdw3i9chBkBEQS8",
  "key5": "2VrN6KZHBcwv8LZxtKQSxR5xWGzC19qFtkhnP5m2xt92JcGr9ospyD592cUXLfgCXinNASs8VUmEVk1AZzdfEtYi",
  "key6": "2jxHfHyRDrPVBm2J6ENnneP9V8cEgHUZa1SUtQ6oyw9Mp5CrKgXSZjEN7Y3hKvxSjPLjZrBNLUcU7WWRGzky8EuF",
  "key7": "5Hbe4FdsfRxspL3jFAVoT1mnLxutGNimbyhqckits6NJQsVo6fBy92qT67omCeUPa3QhUEFCmq9w2QcQFjhciuCN",
  "key8": "2g6Jrdp93pb31JWTUcaxu1kZwqXf8jgdd1FR9ufWBiw6VeFZ3fYnH1VSLQQy4t7Emj1C9aFwZ8Z3brjyxWd5Ma7V",
  "key9": "3m3tPgGDUexxe6TwZr5TpYVSBY4ApARimu2KvZzNrfQ36NkuE4PTYBXjUyBd4kS7prJqgRUTqDVrcGTsZa6WBNj8",
  "key10": "3o2M1zmzW1zedxbJ9SrSKdrU2bMZCGF45xAsMubV51n4GpMjrmqmQ2yoRMMYb83RB21s5c2U5HUaHeP3XHKGQRwi",
  "key11": "5LdhunV6JCTa8VWDuPM3nwvhUE2DzuYckUBezuwMYyCNzisZai9DrBTTZNFopPXjKgQrwAJcGM6gAMxxuUy8c9mb",
  "key12": "2EnRsnh9W8AtMC1a4XvjDsAGewB3Lm6cdgkZT8tVm2s54dNy1kZxRW1hJmGDDpEYjtoUHiLKVtvGYRausM6VvMvA",
  "key13": "3A4BGDxjVPV2dPkiWDkFm3iwiuFhUDnQ3Euy4VrA4Kdqqzh62k4Xv5gMM3hQDkA5teYmdudauMXozGqeeQAcRUm3",
  "key14": "5x67VH4TiaJXRuXXamn1yDNfZcsCgwVQRMVJvi4HQanP6HH1V1AEVSju19MLCCEqQCPodNLRja4nebn5SSvjgMD4",
  "key15": "22NQR3bwfRwzmqTbbrfbPdx7BZJVnFojX48X6Bctm3VNYJ19PiJxrH15nRzAvLnLRXo7ZX93s7oNL7QKdFmxJ1Wq",
  "key16": "5MJUWMbvPyFCpnq5chDRVgYRYew1LcDh2vNGtf7aPBZ2n8ZpcrCdYBqkcTTxk25nLi4VrBerdnhbGSMwvmhUWMqZ",
  "key17": "4iBiQh4aWeXjffT9XfrUaaKSzp465PhvH9MRMN1hhWjcs7xKiyU1MWYFJFLdtxMg5fpFycWfdjxHCezaAQr3B3A2",
  "key18": "2HkStaFcE5ogUSEXtrTfVaC9Gzm7woarz8wdAA3ikRH9dVLW4a9no6raDpR6oyzjcm2B8g7jxZaptPr2EvhpEzMd",
  "key19": "4mT6qjncKog4KEp4u3XKNmsiHtxSnfS5PiTxJfAPYFNrZ2Bet6sxZAv88MJcWB9QaXvvFV9MWwLz5yZn7ZKEz2V9",
  "key20": "5sEdjjTpYdjwC9DdCueTASW43ihajLi8pqmAjZGGjWtxRZyV96HhGKQX8LrpSyZjMQ5MBbjRarKVm8LJE4H1J8gG",
  "key21": "5BidymtQ7XveqU6YKLsaLiweQrUqu75Ff5c9iQSpBT8LwVvC114rnJSCJx2aZnyPG4CSM1K6eBg8ASZptYzS84zG",
  "key22": "1R7dKwAJzsZ9UJdWiZMYVHbXFAx5CyXoCm8fwLSQD13Xpa91JfzFESfgzMhkhvBjEyWC2te7b9TnCUHoooBa2ek",
  "key23": "4Lg5U1tPmryD8NRkBiTZgsrJYi8Ekxk3BXrwGEp1sN7JmVtDhxdG5bMrZKytfhT3KAiC8Npp1Ec7nKpSnPi3sQhD",
  "key24": "3Tghk39swoZXeGYMs3CQDFsf7vMS8aWHz3G3KNSf69UGQrihknvTUDX9zAwkw6EvKDVSSAPjSg8K9zRPJxJfHwmL",
  "key25": "38x5LuXYEBvuVmXd7S9D5mpa5FrAM5rtAtB5tqVdSZefvRvw2Zq27CBwxXftyHozkL1BgYg7wq9RVovcjM1Dh3hT",
  "key26": "5BofAwPrRZQd4CGTYyWJT1ciTr1modbE75pPJ5MRL6noWzLgr3qxXfFvPjhV63PifBF1SYA7yi5cfQ1a8arvYRZ3",
  "key27": "61ZXMzrLAXDX3xXMVyJQEPHYGxzGEWWQMfUas9n9NEkroufuCPrNz8UR56nTGrTxjK6YXMwC4uZAMLyQfgJ9Vh2L",
  "key28": "3tcRmdXYPqSyznE4MNRJ4ND3SsFCDoDD8BtLo8Rmva7S5mcfJ9VAJ4t8Sro78aZfsX2QfggTGEgBoQ2EvcxuaftK",
  "key29": "2ZYTJKVtL2eRinVfw21WaLAxioTStKbM75cys97so8LCkrRrk4NgkDeZUE8ebhR7jShKGu5Y3JJKzH5wGJbLsRfh",
  "key30": "4bgJCBWoAY9Sc68oAUssJH3AXYxEY9nRbPM71oTcN7RcNdsC5n6ygFEqYX3xuTxbYNnEsS6hp2oWtEQoRfdmooof",
  "key31": "4Fs5aydvy1sMS7goUQoQaTjqrMaG19eu6Hmk1ndzSYNpBzEGn8EZAduw6nJeFxYrZdRFT8eL9nmN7dkTWtyeAwdT",
  "key32": "DAb8q5jgDPuHsMimX4rAwtMwBg9DLxKZ2jc54GbbqybufZr8eoHxBdK7KkhnYoAN9eSNPAEz2v28JAXMTvus3eB",
  "key33": "5ehJzpqC5bNPoWER3RqSnRhgmWWkPA16m3mFEXkL3rR9AJyEvKZHqbwHtNp8gZVjQLH5DAybhYth13FhsnbYLa7y",
  "key34": "3xYPefFsaBoYu49Jq8ntke5f1qFktFqVsCDLE3CN9Jq9cmdjrybrWXuzg3BbjSDBozHTSn7bFMkJ45d51r1wTbmY",
  "key35": "AY7D3RQSe9A3WDDb2v9yNjJ45uZiaG5jv4hyW9CH3hRG2582nxjePhVFfPYmeBp33qERUn3dMyKGvCCcVh9oHyu",
  "key36": "WMaxxDCV5WQEprHGmwiDdWAUkBDxBe4G27GZEJXkJBHxTi4GPY5GLFwQfECnvUCmgEU1auGqyXi5craRXiteq48",
  "key37": "NvDvsFJgKeQaE3PymEPC6bu5Hkvkmc934RFLN1izdE1AkoW565Hf7q5qpWV69sbsST2J8dKmJKdnnXtm2wQ2jZ4",
  "key38": "49ktbTYB7ACvLcBAAyhTCdzRv7SBh5dH5heMNTCQengtb55RVx6V8gbScTLo8icwQ6MyRLHWQcpRcjx12y47Gdoz",
  "key39": "23tULsnWZqcSBrTPCW88XwCxRgYUTMAa9XHX9Ckk8WDL9hdRVrcWkFGgES4XsrzT5C3zb4e8Jye19YB7uAD1my8r",
  "key40": "4tDeZDUUYsA9k8Dci1HQi4V3Sr8RXmKErLQUx3Sqns8GupQtFS6e7S2ao9dSP1dwEfQsjqHYTS6gbBGds1fTbAoU",
  "key41": "3jRauqxL3KMTTTYACXPFmnywiiQJffNDhVbesYiT5Kj8CRc88nmxy28bkacweHobt8So1R45BEaFLNCoAyrTTHWg",
  "key42": "5JRoj34sVBVAaEZ363PBTSaffb7oGhnZQHib2piSHvQCc2pYzUV6En5yDTLfmfeyry1hyGcBXCvpntcnEEkDgp42",
  "key43": "5nHfa9jBXgrRbX1HsBpeLeXxUt4r6miQVdJLJPYH71ZRDKZdZJSfu1jyYR9xLhtsbSwJJvvCrfYrgKvsY32TDVdQ",
  "key44": "3HXQpb5QrgM2CUUn51jyEWFcmzCEhpqngQKWdAogNYuTiQLn48zXcRdZFxbTezE7iX9g3PCamsgXvu15di5fuFy7",
  "key45": "BNtKEs8aQwAVFk1hgquowFUA7vumuxYywnMGNRSFqWsLRYBXxp7SanoLCrubGzT44tm3fg6v4JwWDGWLkZBrHLj"
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
