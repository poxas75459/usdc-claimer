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
    "5HxPKN8MBYg3jGaAQWwP7eEGKNnNyTkK3XBW7vkRDykXvrLgCMmrX4hS3kW82iqHJ5aQooKPfUUfduTq5kYPMH8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37HVgo6pVxrYxBZ3FesYsX2tme1W9wgvoDpZoE1A34SWs1mNn6pJttZ4ua8gmNgCJ4fabTghC4ahTjCTjFMKB9AE",
  "key1": "Mp2crBvyn9XBfLTAutuPRYec4JT2q4haqkLxXLhSuT9Zq1VcFMHe1RqstTuMa45gWXJ1aPuoqb99LaMyrbJkRV6",
  "key2": "3QPV8Pw5FFxmU9fqXEPgcD5tpTzbP1hLKNCAeyGytRrSueQxvPrNuyGZip5wjyybtiU1WNuMT6C6i8r1fbom1VBi",
  "key3": "2T743p3TXJ4CXBtNXkKWN6JzbJu1Szbe4ZH5qGT5VjE47HR31Ab2CfZufthoc5qcyWYJWySRfJ5JsKPxhyHNN2xt",
  "key4": "3taXqWe5qPRrKESDEGkTukYNwvcsPo7zkEupE9b658Kgd5ajNFwnw5D3HvKek1gHpSnJn9iznMckstwxCF946avu",
  "key5": "55mEfXn9ZZgAZW7M3xznBjLPVM3CRap8xrmzZKEk227GirDZMtMnXohgqtSTSkaDfDkgzH2XoVnBEkmY63Ueqa6Z",
  "key6": "4BnQ4XNnBG1Xjdc4xeyDtHEdngznJAbmvK2Ewdz2VgRyoNVxZjszXoRQzS2FQ7jveUMwP1gZZ44Hnbbk7LsDEzc2",
  "key7": "3rhxZCYDFpsfPpTtNSJFiSATZGp5yWqQ3GL9w2FVcGJ7Sa974dktTw97W5zSMHos6v9mJ7bvezTwfHT2VY5QyoU",
  "key8": "3euGydaDA7P3i8uvNXjJCscE7zb3a7PoP8Yfui8VdYGNz7o6mrYLKGxcsRhqa4diJcfJ1vJjxuNv448xjCMCxyJk",
  "key9": "2XFXqpNizupnVubFXHv1zzCmn6kVLoupP5DoxrYm79m6Q6ms53B2kLxcjWN6sQmgjt8SMLowcsTewWyrFYFqmBEX",
  "key10": "2Eh4MJzEaKjWnwzrhPADpwBNK4bo7fJAqGdqGkBNNgKKN9bfVskBJkDaRhUg5rmRzXQwMFciuwbP3Egqn84iUDRE",
  "key11": "2bmMmc2WiCifyP74zbQFeAr4n8w6E61xgjTvzgjry3eEougs6g5iNnchq1WH56cRt2q6pfdV3st3rDsrDDhSb1DD",
  "key12": "3yr6qRTeqMX1M4uACqUrbSPXyYr2Q5axbcYs8sS8hfqMzMdaBDRPPtNDerJsk2oqR5MngXibGppqUYE47GgcNwh7",
  "key13": "4wLEemJAvqdKRDwpMaS8oFVUoS4uQkjyr6zzJ8V3f7UsvBVoMeSHDjRoa7vNSs3SAFp3GEuxbaHCmR8E6d1Nrn3v",
  "key14": "61xaxBgwC5k2c6Hzuk5qFUSBehMrCFEWFCdiTJBsM3n4eC7je7StVNYa8SRC2GLnT742oBTq3nGqPoBYoJqWULh8",
  "key15": "3FB4mewC7RJYWtom3sH6eDjJbJ8yk2PBDmTQ3QQ4FrqL9ak7x5YyYGfqkqdbAwjRKAQKhNHqNK7UmTCExFqXtbHi",
  "key16": "8tiedVbEgieeGU8B5sEPx8qsHWdGuidKa5WrG66gzFQ23byJPZP8mTVo21PVjmD2vwnZjw3jLes6cBWnuG5DMtA",
  "key17": "3991iL824rCTG8pPWddGc2jDRqTxHrHbaLw4Q19yDgE6zb3xCGPfLyayj96REfqr8qWBJdvu7hRSz2Kb2mm5ntZj",
  "key18": "3RCn5NEJYtQRrLA8AFvuST3x5HYEVvWDk8rSJHR8SJgnb47KndatavtbE9F3zJo85LDpg82G1RRKm9isYWPDRs82",
  "key19": "2QTqd9jQZPPktZzn2ui6Vp6fBcQhKB5WtQyyvuPVMDJzhrYgyRieojiRp3acPnMyvNFQr4AmMJVhqbfNHoLCqGAe",
  "key20": "25Ykz1h7U9kLv8pqk7hsNUdmE6YqQYopDDtd6jPvStGbQTvwHpQ7YX95ZDz3TLUbTabbkC2WjyiTxC6dqRXpKyuC",
  "key21": "4zXQcyADDbbwfVK7zsTKVMuLopQ6N96u4RHuPnhH86vvyMTCursA16mKVD6VFWe9tEwXx6Sq1zk3DRfexjGwzr1r",
  "key22": "4GzAjA9qcHVA3cRCHMEthfE4rGGMpNidYnupD3bvPMBor3AV3r9kKFbe6tU5r9jjfuX7sqfvnK6CvNrxna3J8Emz",
  "key23": "5cEnkxJGgZeqBcfMTRcMBCN769HEZGGhH7Aq87zvjjpRWCz5GHyn5dEPZt6ZnNPX1v3BmXBeA3qPH9Y4qu96RXpz",
  "key24": "CJTP8MwPEMpaCCprHzT8oyjy3785uHyVDw9GQm1wbKSPu535rBNFjgCERs7wo7hKJB9g4bvLS95WBRxYjn6JV1k",
  "key25": "66a1DmLQuWfMrhZ74EnVhPJcm9WiarmkGH9PfoXZLyfHcFcwpK8wt5B7qZ4cPNLTL7iSLB9LLsKqNYVVohL6cbUj",
  "key26": "4dktJzbPrDbVRvaUmhv8wyath7G1hVcewu8WkdzN7we3V8hfAAk42qxB1cLJa7XwqJ6V39vgq1hZdrox5zwK13qm",
  "key27": "63XasqCJWaLRRRuBFLRNNEygzHibxuGBjSx34Hp3PHkD98zh5PTSK5t6HbKwhhim3js4Ea8gnnMQYzTPtZMMUtWB",
  "key28": "3q5W9QrfKRguPdEEZ4WHAYXyRHxiZ5krdEAjeshYqC4XZBNRj6NEKtyiqMK8M5w6U1vUyqjGWEoqkqYRZiaiCPQ9"
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
