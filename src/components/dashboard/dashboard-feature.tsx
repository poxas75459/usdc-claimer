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
    "5anyZs9RYsXaJhagMpcx1vmfZFocMx1VhfkpNgdqwYm17UZUVSVUFdhDrfyvpEcLGoFjdy9JggdogZBxYRTo8sY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsA3DYndiH5naNtg1JWQnkTU4p1pnR73ivTiPejdte58XVkyxpXYKGFuEL96dfAxKr6ByHt9bsKLE6SYxkZzy7L",
  "key1": "VW3ikdkoRgBPK1vCEemrCujHtWxRhaYZsZUMuZ3a8fkvTdPoNJmRGpVePFzEH6KpFpPVPvPKwBEF7v5xtRMMypT",
  "key2": "3QvSQnY2D9jXJhvbj1mpb6b7hbzkTBdQz6ajccpXxUnf2ssBdbos8UF5uF4qMhkd2p66EQ4uYHfwsgMRdVYNy8c",
  "key3": "waRdrpSShfiv7LDPkC6M2mwQC4v4Q8tDWMNFQjwBv9VZk4s9bvBfkmdyzxkdLB3TFzVCvchebYEQXisA7WTQQrW",
  "key4": "3qtFgfAuTrhSk5xjDwavLCJojckg8WFcYPejbHDEXvjL5ASD6CgXvTKwMgKzyAbcXAJjoghEzGd1KW2wYPFnDsa1",
  "key5": "BELdwqdc6gQKb8Xe3bYr7y1rpmqwuXjL4WdUQv3c8z6NQSZcY95TsvFJMDj5Ncypk7tx4dTJFGBAuxvbYrM6kcG",
  "key6": "4hVeFGfiwU2pvmgruAS1C7ecjWu62hYr7Dp1LzzybS8K6NoppX1eRsigyaSSpVWGSiq7eePVDBdFSqzw4Jft5dez",
  "key7": "4zVWXTbHvmhVpUF1z4pPyJuFHnbzEGAUtJ6DdBHqXVqzS1MwsuDerjK9tudP83DBegZqP9HrWbh1B7T6fWAs29AA",
  "key8": "61tjzTRcqZzZ7zNPrQFq1ebUeaPVJxxH1GXMhBqV6GHG82brt6XuTgetB9ueZJrNXiXcPpFNLwvRV4NMJUFFidkd",
  "key9": "xg8YyhKaxSdJ5NMV84uio1rH7jbTeQ9N3ZyN1NALekAwN9VCBad33jfs1VK9uLB92YrR5Nf74C4pFMjzWuxvTYi",
  "key10": "5jTPxKzVV9mHDfximdswWbLyzHpBBNvPYCDmwQG4JiwhoEGsr7nYjERYnA759VzBDWSQq21MoqpTVzpGvhK5REBQ",
  "key11": "257BTxCYCPyEeVU9rx9giAoYqf5oaQaknySTH1pFGihgiCk8MVK5iUXLP8mK1mhEBCcj2Ex97KQ1aSXNB5dTcg28",
  "key12": "36pruREZScu6gPUzDjJnXxuzBLTAjaJkhhgVS2q3mf2FHYRTV1VQZwSvmmyo2MXSA7GQQoxnM1rf8VVoFTGfBwu",
  "key13": "568oyA5Ms8WW9qxecfzVj23Hgp8nTYR3PknxwDfgaUKez3Jujr5o9G8LA3afhbaYiA9ZCLYLiwEwjq6GiNH2g5BB",
  "key14": "3RhCZprzUx7juNPQM7FYqR3zvFdrRoWaN53Q6WFpa2R2Yt1Ry26KVZfC213qD1wnfcPXSFbryX6UThcEvMA1YQWY",
  "key15": "2FWMDmaPg3e8mpDVfh1W3UTggBFRxTwK9y6Rf3sLUPSbpLJs9XHJSbjYNtrsP1GzKX3g6hPVFWhAYzYPqZ6H36BW",
  "key16": "2RM8xyKxoMB7E8XhdYSkuX28xKrPqxcWx9HCTgR4dW9Uhx6fScKiQPaxzq5VyBbhNtepY9zpagwRAbUqnfSjJpPj",
  "key17": "5vY5c1N3WJ8RXVDCbh6Qi3mrExxhsUp8X5NL1SbcZswTSpt56q3yvwffrSnV5eAf21XchiSFk1EaNw7Uw8FmvMBw",
  "key18": "3akrMm8rUamQKoFK2iSZEr7FuwCQdscXRqeGY22UKbpQZvw4x8GW1Tp8JmhQvaiTbNHBhDCHveD7g9uhtYZHP4g4",
  "key19": "2pqvAfAKpb9UffbKGvw7gQFTD2JErri3AN84UTQrhP3SDBPWhgKg2nkAQFwu3ZCioem8MFCTD2S99bF94CFMMvu8",
  "key20": "ahS5PBFb2KsWoJq2LvyuYz1kadVdHvN5moxXGGGBdcykav8afuXqwEanXujBKAJpoy47KFhaKPG49skD9Ze35Nt",
  "key21": "5W2S7Bk7XkfZyFh6eZViuGQaQzQKvcmA9qMPStSyEJXA5xFTnMDoYcyYvDjjq3toaqfWsnGC5xd5CWmXGjfGE2Qc",
  "key22": "46ewrF4JeoV7Kx5ipHddnFgZB1EFtq37k2E6QFWSm2Er38z3K7BXVJXPfjL1fAJRyRLL9TKkAnriiMJMtpwvgj4V",
  "key23": "55ComzsLApRBjFBB4UKznLjLoh4F4ZeU8dCUf6uLeyThFdd31ZJcprDQPnV3eaSpDf4esiRRMAZFFKvE2R1nykut",
  "key24": "vwkGDa1x17Szvah7SHoofBDbhJqfV3gW37B4Kt1v5SbXyH1hxwo4kF1EsC18shMSZnFkMPu1xqzKZUWgEUVS4vj",
  "key25": "5BoSEf7t7DscbVKfQDf6SwDdSM4fnDWy9zSxMNzfVnS8xifAEa13L9C2cRBvsNHXL7QYfuUAJKFo6DUEzYQgcnaj",
  "key26": "5Wywj3rvfHTZvMGjHKbqAoEwfPbxn8vByHTakV3M6Ak3u39aofD6t8Kr2BaJ33NvL5RD8xjf5fmMi2ph3FnHdZb",
  "key27": "3vmQw6hGJX13tvWyMn61bZi9aGeHxq5gykZRTMvguSyho71X44oj4ma6FxZRcdemPktQnt6J7TUS3CnP7dFwfpsQ",
  "key28": "4XsK9f1f6Y62Atr3GM1GKv2M5EYES3LHq19FojhkmxcdAkguY9euiAixPGryyZPyg47nYJ5LvBcPyCN5UfyxTZMD",
  "key29": "DvNs9sohUuBr2yuaDQNmBzJQcdnE7eRESjJ68wDQorQPuvFfiZ884gLtM39Ru9NL433dR8cPkyKiooa9vqwKnzp",
  "key30": "goYwxZVbE2jaLLNgZMXWe9hChC6EV7DQo3TEh8RtLuUvGv27sPT7dJx7c77XE1zd2HzzhhBzRcSjfs8J8U35etE",
  "key31": "cdzdH1Wg4FV1uMvnrsmbRhUQSwcauHKVDa1HbMuLZ6PLQisY4C5frArcmY9rXxN233B1WuNb8ZdEzDi4AxUp4kx",
  "key32": "5tBMMibKijFssT3PYkz2oLN4us9Fu1cXdCDFwb3uEomsC3yVZttbwiSoWELwbTV66Hb5eppjX2oP6cBAwP61FZf2",
  "key33": "aDLADKL38QTGF3Qy9S36LkH2ZaqDUQg4tdCvkMPQA8MpJ4EueqyHEVGsuXbKy5eDUH4y2qdJVYXDtivLRa3ZiWz",
  "key34": "srSvLwy2MVyNYr4sMwsWbD4ueDRQZVNo2TT1KAWsySyQouJoV6AN5uq8em9eXCuEJrKGe4pWor8ktrnTEqxVczV",
  "key35": "5cPW79UQSchj1jZs8wVwswFcippkWw4gKiVqgPNLk96LgNsCctwHcCPwo3ihYUmy6kcmCfWUduTqqFZzLH48gNSR",
  "key36": "MYoNU2QNKGMi395FjqiAGApgRVWGUpZMq7kNyZ17KnjbBd5cZEGw5SNyrSNbY6uw3s3KNnfQmt8dEavok918vAs",
  "key37": "41BoEuCfTPGEX9nfpCSn9CNUYfXwaQGuCxjuvaQK2343YXa4xTKQktESmokf3q5XAMd5nTBEjnYutHXNsSnnHwfG",
  "key38": "2N7pLg87vq8FhMEraHv6zFcnmeGW5xGRR3WJXXidmfdCD3Yb2qrqYxUFVVgJnoCBxEaWEnSmu13a9ZQLdvHWd6uf",
  "key39": "NoL4KE6uBkhYFRN1iCVP1sgdEu4A6bspixEDkmMFiBtPvFgAZETsLcrcHdog8CrSnXnEFYguxemJfMXWziiUS77",
  "key40": "51nhZ2XJbt6f4xr1bzyNM5Bt8XsMF2ddpHTdvbSwvr8Gn1ZmRXYV7wouEt6C9e5TzMfd195KcsCQshgTkaTsAzzS"
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
