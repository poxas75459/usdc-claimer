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
    "YL8xVCTJ2157bJsWUaicH3NTAjG54vfun79DZjDnN9gAFrXbbjmU6J8NQbbRtf38iQGBMVE1HChQFrNVsZocPbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMi4jyjzSsEvHnGEQa5RBZPtDbqDramGqq9kZnezd4tqhK5fGJ1CZv3vWbVWVHJjdTHHyt2ETfGLVxgFxMw4Sd8",
  "key1": "3Jukc2MD4R13akG6f5Nh1Sg5XBpokXgaTWAji7wu9GeF9bhxHGMWtMXwa2JP83w4bV6WghdPqu4qg9nYaU3GiLtt",
  "key2": "4f1nR8CSUrAvi4hUZ7hTtio8Ti1su2ycDUbSeL9DJnFeU1k2XBVLP3W3YXCp3pESayBymQDnRJr9baH4iFbNSDUn",
  "key3": "4SwuqYC57ewuNCx6gX9kR9m71HikHv7fGhv9tWzu8YK3S1XxYprJhwcV6m5grJxRpGcdi5tD3XuTyKrtGBWcoGEt",
  "key4": "41aENPqY34s28YDsrF4Cgds9aS88Qi1fzPPiMi4Wi1pCaWWU8cE8dd62tcfnGmc9s7PNvaAn5TPPydon8Ujts9xp",
  "key5": "23FKTGjf4Yg8skU23jwfFA56hJRXppLfUQyrRUKUQXPtnVwf2RjQRwvwj2p4WC6vRJCFNRHcwegi7nrqYFaqBCdo",
  "key6": "5pHG4wi1ZKEq1z9aWbf8xWdHV27jo6JPhErFSNtNAqYhRQStjADLZyCwwgDcwSRAkxQXHAYYakcLE9t1SLC8wy98",
  "key7": "5NSU31VktthwscWrdt3CoX3dK64QjMxMb1DvkdKC7AoCqpx4fksvH1WyhUrJYTDA3R3EkqmEEdVF3MXaWFLHqqbs",
  "key8": "4MhBNfj8sfeHQQ17cQKqkhUmo1iTeQYviHYSNjMSi2jSYp2NcoZQb6iqR8dhvGQ34BDv78qHMhUHpSozBu8jrANV",
  "key9": "9jGv8eUnkm2RfWkU84tCad26Y6xHh7cUQBGqGN7g9z1SgPYz1UW6aL8cvxj8XrEYvQMG83rJxvxn9Ky2bExKPf4",
  "key10": "Lv69acrZFeTVZjEGwGpYFXSDKmScJWvPnnU3oDNhFWYh9vPJRPBetDzd6ccM2bc9s8Bsvf9tGsnuVyP6q7ErQLc",
  "key11": "65fMmiXyqzJD15QGWpKVPrQet8kSYvhuW9Nz6SPhCCBGrWe77G6pEuP8nLp9ufR1HHgjybxtyvuS5fKZf1v2PWax",
  "key12": "2cB6khPUBz8CiEfnRD8ZhvdkhEtD3kEs413Yw2hdFGFMj3LD5UC73XFfekYGgLUpPVCznNc9dkWofnPPTTYvwg5Q",
  "key13": "4PVhfvxkSNErSeJZwvQKusZxyx6pNK2NyEHphUF3pzh2aQy4tnCdB5tjhGy8efnGpSxTw6fTQ5e9i4uDFq9jXnRw",
  "key14": "4JXzUn2W1LUZtVnCPoVcmRSSMVm9z4wkxfCJBL49GSgzDj83AAhP4EB3s1f5Nmebu3YNH1ribobZPJwAo2ud7zYq",
  "key15": "5VRHX7sntcvDfyajzPNPRerAbWLQfxFbjfMWYV6NiE8npHzj5wRDtL5gZBjx8Wh8XSUFpowtkngd862YTEBb4Nau",
  "key16": "5wMcHpYLjLFzcwAixqtpdwPxJVUHzwzoPgH7RvGxBEmK2iHUbHxXkKa7vuHT7EQJ6D7N4ErCTkB4Cn3pSqyu2cWZ",
  "key17": "5uaDoqXhNjxKNkw81LCrPT8VCP3gj3w5p63vrRZHkD62gL1LPYYcS5PuJQqXbopLTmFaADAMW7MJwm5x1bH4z8Qn",
  "key18": "5KMuHWC4VuC7DxeQK8HKRm4C9b7gxvuHp6aK9Y9p2UbQFEuKBRxRYMbTTaKPWsiCtG2ruzjMrNzg29bUp5mdcwxw",
  "key19": "2JFbXyddQ4ytipQoCjFf4pDuvg1UtbvhPaATMugweLGeNLbckC2UtQvz7CYirKfXZm6MeydqEpWxme1xKyVeUrbR",
  "key20": "5D5bicW3xLUEXWk1KvGsAPCrwSKxH5uA9XTWZxg9VbGk43FC2zXdnty5g4vwMtJoBPH4RT81bPGZsnzrA3LAsHgM",
  "key21": "1LrrumP3ZEG7jHDsw53e2yFgDBE3NiguxBwcmaR6qMKJnKmwpzSLs8rKNA6PGckvGwre6av5DWXdrEKVbiF1P1w",
  "key22": "4mBm3UG6TPPE9JLHbZ1Jsvy8uZRmXrWenkiRjX1sRSpLs7Hrgsmmd976kP3qh4GwCXjrR5p8a7EuKC7KTo4ev4dt",
  "key23": "2JiR5eqpCdsE7K4ZmXSMY3DnszjuWuD24yCn2bnAcweCBmnpBK9SSse16Fq4ZDT1gvSFtkkAydcgzozcPuMGDVQW",
  "key24": "nVLf2uV4isTzNGEu2E1mDDD1H4KPXwbLbLBsybGSLY56hWGPZ6PDnMefuTw9nKoWa31jW9tc8GmqyfgHYChydtq",
  "key25": "4keSnZLhCYMSuvZRNmZ3UaMAXQ6N3nVx2K1MhtBuJUWxawQxm6tDgxUsUsQS6VoBjptocXZqNp1KddpaP1wNKBp8",
  "key26": "3CSku73eQY1CAKNFqSZ4HXqjdqUcd5vZNt5CARy3aNEz6MWymFuGC6DYhvUoym7kP7HCjFvUd6pcAUhcXzEKcgaK",
  "key27": "PMoDcRC5XFcsqsguJzNLpqsSBZMBGPxZFkvMeLwJz2s3HJM6GRrnNqj3SX91H54ar6s1mV8TPdPor2uPnE86rrv",
  "key28": "2S6Umh7K9AyHuUZeg5efNKVDUG7XsaznqsFexyCvBm77KjxmwUzTZcXPgtsNUFpcryMXu2ia8nMN2xFW8X8jcsho",
  "key29": "3D5oVEAbpb6yd1EYcagE9GLVd8SJ1SGeqeHY1UHNHTMCGnL3Ahe6L71EMYifLcZ9sdv9V3CPKe8Cn8Q2Frqe9y5Y",
  "key30": "ksLDnEHQLUo7Po4wBZ4WsYCnQAFVDjp93UAhV3FkLfBBF4q22s8E2KVmuQWWxbids4VR7HukDkDbuE1rUpTbWzo",
  "key31": "NzTbAwMu8i522LahKobutBF9mRwtb36Dj4hmXtLQdqMH4EB4FTzg7nzsh2weNRVWSkJbaoeZXVeSvRzwD3abAtm",
  "key32": "2wR3LhAEGaFBAbzGFE5S6ozFv7T594sKc1JAxFRPdD5Pvjtrkn3S8y2Ut3g43SZTUBTp7EAuUDvahJS5e4dz3LiW",
  "key33": "5J5BSJ8eB9QnY1pHAcK1mFP5Dwvs6AE4dL6L5wzcDJYRTafAsEsB5EMc7RaxVK4xXd45a2ypdbPmtihWzaxcwh7T",
  "key34": "53ZBh46YL23KMDLu688joVc91TtGBS5ghYQmSYLnVRzPc41dC82KiyEPEUfM8x2yjJxZv4NZW6P6G6egZevhYuNT"
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
