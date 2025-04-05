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
    "3fdqwFfvun4hmVTiTjhuYQKaf3Aokgi9LZfr7GrfLzaWrGauN2zh55DgNPPxaSNXPGujAe6uC1wsJ3L4FsiuEyTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wFyT6jFhsJjXkNBUiuSsBewSa6JRjEA3gW3pzwNWBLXvHxt6gzUYioBjxVXZd1knA4EXAnfqSTqFBR5scZZBNo5",
  "key1": "4UBz6CUowxwcBLxGbQXwQJWVvGCVP1KYNoq3aSGGt9dBkWUXWXQ4B3LHnkAQLbxrFWGVst5zBFRZ3FGgyVmV2mjG",
  "key2": "4UCrtv293V2rLedTNCLmJdKXk8UmoPpyozLaHK3n2euhb2g2cz6sei1PQe3vFkcGhCC11DXAgDbB52pS8PXUoBmP",
  "key3": "5ho1LYbyy2fxiuQabjTvvFbVzkBZ2EcFYBj8ytMBe1zdk7tRVAvqY7WiU9UdUjTX4NZa5z7iGq34brb3AJidd25x",
  "key4": "3Jx8thPCeZB5ZovMDhEq43gKK2DMKRfH3ihEX6sfjzrBsTDD9Wg2eAqAFEWyohreKRCjCgQfnSWPk9wL4eEN5sct",
  "key5": "2QDx6FFpBrPssibpXeMkG63Z7r865oD5u1acVCQV5bULqULVjNy5E8HPamCPBTkcNdaFZdEiEQtmnq7gNXyupivC",
  "key6": "3BhZVGRZy5tqXvb97t82SEc8jXJfxSThERrdziCzojZ58ZsQEF1xx4uTr6X8m2xav7gz5Caygb7QvRKnxwZGipbc",
  "key7": "5xUKsyq8qzTw2ZTYAzGtaz1kRnbcVmdHWGxvC2RYat2kcGaHCgUyfLcivTVPsm9yRpKvTjQC7MoEV3LLhwChv7dw",
  "key8": "2r2Pb1HTMcUFLbyfnzPeas2w9F5tkYvgv12HTvwVRzfWGEVVHhbnDX1zkgJmbQJ8YDn1BiJSt581cYtbm4ABeEzb",
  "key9": "3o9gJAtvL7FYTBHMhyU3gAhMTw16WfdBCe5UHEazwYMZcMakC4XFitRNiN3dRRek37RLqgjuWmoyFtBeSzjZ48LN",
  "key10": "5KQ4h7LFftZQN2y1HtK15uzZrkeVmRpWtVLP9egurkBp4QqpUWoGvoaDgTpyD3yZv6z4gaJTtVwgN7v3uG4c4HzZ",
  "key11": "2x8nq6hmFu7X5bAuVHMyQCuXcHTxQqYsuxAkWCyKTcfPDiDqdkCmxo3fyGLaHcHp8dB5AKnQJrdrmrM3GRKG6JZN",
  "key12": "5Cq5g3QjHiqMJMXMFLa2Wc1brB9Sdeo7KdCuTKasGi1bava89HGezL9LyeCvBYFpRb7S1PKUM3N9UEwNCVGsUVUz",
  "key13": "epKRr2khAc8DXNzCUnjGYkDEeZq61URFZ31ZUsU8Ng4pnMg7wo66p2ZZkNizoreb7fdmmqAz3ksrcqAJEZC4Jb5",
  "key14": "2ckyCkgVuqMAJxAKFqQt9ky5vV8NW8PWKxmCHPeRDT261Y3qQjdLJdW87Txf8Y8yowW1GtYC224SrXuasxxp3Jqa",
  "key15": "3KtRW7fqyc8zHUUmPmtz5fkZLHjZ9fY7tTfFpzLs41cjy7hEmmY59Vri1W93RhKJU9v9ko3Dbqq9rshLeJcmYfMa",
  "key16": "4et371cyeweMH7RVACpZVe2ochou8e7E1mQQ3HjXADGNADsoMQFqk5j4w8MzTXsxA1m6Ez9e1D2GweRzXLM4kiZJ",
  "key17": "4ErErgfpmBsyVLUESyVcAqucxYCQ4DSvHDdqEF7M7B4zyVbEG9GBSZ3mYag3WBkUviEhDxEAso9Nnymf5Tb7oNTb",
  "key18": "2g5F1RhyiktyhDpA64GCNhtQKNHG8pFRCuoFrEgvDLpsQsJRyF2sL1YgtwYircnb6yuYA9oLgtaGZaWSf7eQqtuv",
  "key19": "2ubhjrDhiCLJruxJT2fci6BbhdNeyrb7zEq7je2fVvB9bYCCcj8XxxSrZnxtzeEfgGBbyaYU6uPYc6WMfSf6FNMU",
  "key20": "5pmfFvr1jPH3qwsxETfbWQWX2zrayVtHdcD38T2qWLyM9ypLLp4uMxnVmeXr7mzRJmtXicozdb2j6k4hcH1ecarT",
  "key21": "3d41NhxdwELxTLaY8dB6M7p7iNSN4G75BrhEyj31kt6PowEY4MTKUTfxq98GESXozSeEBwCv7kUf8nChWAcG81ff",
  "key22": "4XewSGBty9yg4gZjLxSNNBGfeXVJsLEXDMZE7nptF4C96F5tUJDGT6T2rmLpZKDP4dyYQ8d44sHEVqShTQGRZSaZ",
  "key23": "2tX7Pt2iLuABEZ1NmyG92XXZZqehVqLTusKLUaHfS3JQLzUrcf6rDqUQz5E2pvb1k7XxPrmLCcLjPymg43Q9uwcE",
  "key24": "4b2X77dC5MUN67CokbxX6Y3shJEaMsWeCHRYMQFdTf7kTZAYNXuUC5DbgPbd7WYvezWxKm6rdgH1JEkNSp1KiSYu",
  "key25": "Q4x4qwhQTnCFSLCtwJFgYw7yahJuR2Zo2ck7hQb3wVQdSVtEBYePbFkRpXNub2pu79q7qSZGq7W9UvUnBqPNdsX",
  "key26": "2HtbNRzkuFaRpsCkc9tfQKnRH13WsJcFdjpQH6myywvMWgwUwVSrgRqpKjEdenwwASPhhiv2hdpcR3YewCsmnbHG",
  "key27": "27iXetRnHdBU1FnZmcqWRZoVSczXZsP3zrvUYHrkVFLWpHmj9dgUYyNJKfc4JdUCEvRkXkPRG2snLZ2BJAYdEV4m"
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
