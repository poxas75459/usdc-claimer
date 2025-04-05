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
    "2La6b5LmJsN4WgPSSRhGYXrh6rbtXZp41y1hzGtvEtWCVHNHCjntQCZiZaseaWpNEvwe5yYkyWXJuEr8TJHFVsas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WKTnVpau73CWHJzn3TecDX1EZVbgAtauLEks6jGKsBsxCpphPVm2Gu9Lj9mNbj9qJFGPH1HaLqKVXTY8cyhG82",
  "key1": "24og4nbCm2qHhReKjXRbBFxtz9rKmXYtC2WJamncnyyp4JiprvUtAcyFP2xfgNp9StJcFDNLYV3dKtNw1CkRnnTd",
  "key2": "5zJScVsqbyTmWsNTMzoP4vWbWJwdew9ySdqU1vZNvNcKAbzXigSPi6gYzVjaFzk28mCxXpvcoN49TdLfa1aAbMJR",
  "key3": "5Knwaww4KcvyuKtuF5Yvnzcu5MhjXyzNqdM2Gy7eeNcJ6A3238m4WJ5fboAErRaXLCiCvToUJPpyzJ9V7vRdydHK",
  "key4": "RuphPW7MzHdHXuyB7FLTuTPjHK2VPnPV12M3Zi9ibdqUnAJ4J1U9EeKBww3EtdD6sCu2LvgFbZkPeZKvcXpBgzS",
  "key5": "yd4UBYaCzXVgV4bLcohd1YSBYYPcrkSjAr9Q9LsS3K6URwjKmVddgTdTm9BebJQzcbRzGdudTTYAXCnUgJqr3Sn",
  "key6": "vt6PSB4ee9KiNSrEbqbbZePnH6jhtLxh6vXevDYNMcJoo3LLGuFdBRwQ2Wv2WNQXgDcsRHb7EbqeUeWanzL7Apw",
  "key7": "3dsvU9gr3LKQnfMH8WTE7RYN1RrxsSbAa1zPGYjhubeSLquxAPFK1GFzsCoWn2tTxZSTm3DHHtvct8eGp5teM7fW",
  "key8": "85RfbAaPz4U9FX9pNKC36jYTTCeGf6V7MApSBsH145xCdFbK8eDDpKbULBmk4Ghto1i7QMXyN5G7VydwFiUS4W3",
  "key9": "2topAiJz3qUN3oR2V3q5dWDFkaecXsMyQgKt4BgKkcX1oMg7n7PgniXSoodD5jyX58kPh6vhhfvbE3ixJtkU4mhw",
  "key10": "3PwLs4fuwAUS6Bphobdjup6ruZRzRCd4gxmUctn1x8YFcrUHsGLx7ZpPRVWE1Viv8HZLbxfed18bLNyXssbqhvGX",
  "key11": "8QCku45zBAYsruoFSoQ5gmHXef9YHtrdWR1YdcP8FYzu7GWyxyLpNBDcCG9zir9jReHjkzAE4G3NYuhMp9dtk4S",
  "key12": "3dDqWjEvPwbRZ1mS4UQ9dDgkQT8LSAkgJg9SjtfWBXuQDPKKKSfQtHu2aqWg8xbNhxCgD6uzJRd8fgFgNCmToP5h",
  "key13": "57nUGc5aVywPaQsFsTgxJW7gLH8L3jiMmfKopWkp7JFGHxJQCcZST2CvmFpXsVBK1JXQwsiNGcgeChyUAA5LnKyP",
  "key14": "5eBvyVBsftgeZsownPZewAQv3wQXiqGf64Db6NF7mqf6z3KxXTTU9fKUby7mP1r2CDeu39iP8VLRpzgdwRU3DJTT",
  "key15": "Et7u97v2jVVum3vMDspeR7fonPe5JiE8ZEx83asrZYodSRcSVpZGfSKDAnrfK1nEWtiSHJVoV5QjUTi9FcLFfgT",
  "key16": "5d2ysezJxP4yU7NwgtmSVBz9bkDhPjWGH4fJFAyPRL2b2w5shBWduuSChhKVrFcmWo8j9rfPcYRx2AzqCXRaNoWC",
  "key17": "4u2Wf54G1Lj4DBXXj56uqNSSSNrQUGPpbZMnBvxBVd5CuUnwkZojCNruVPW6ZtY5a3MQqE7CcY4sKbxY8cD7XzAx",
  "key18": "5yxPrBNCSGnpKRPWKeX1RPXzax2GTY6W6V2296JRoJNrDzHDyzCtor2LT5873sGQYcTaq4LQqYKnbVqwCQgz4HRP",
  "key19": "2rmpKSQLu9QPZf6qtNzeZ2gNca7v4Z7L81GKdgZq5N1xCHGPCbAYQjNUsa6iUqiFsiKfxGtungddZVY8FKPznF5x",
  "key20": "47RkLy1xtLYXmBnBAvS3P6WzBDwwp732ibMzf5EbEvE6Dy9QW3eoqRKgPPyhgNxiqbvN3sNf4z1z77vRcNaC2bXi",
  "key21": "57tKCKiFABi5EfpAk4uzBxZsHsnzpZxpNXND1B6XJqbfZaTe1N6HQB97E1AKNyEEunXba3F2FScZfX839HZxtzcK",
  "key22": "5kiZpc8WHKxCNyhdALe1ifjnC83EgforEWh3TTzLqbZFKZhE3gEj1twvukq1WSJ6HipjwabdjwLRaPMR4EY9YGKz",
  "key23": "YCXM7wk3x2MuLJj38GhkLoiGfHrnCRBzuQZVx7RyWZDFtP869Mh4X4FUvn1vZuuj6aSjRURUjiPwm1h9uJwfkAR",
  "key24": "tbjDjWeZ3EF62AUApm3nfvZ3FLWQ2M14Qc6SHX2sZ5CuRNB3jMTUPxgKReE6BjbvkuhvHXEx3xSbnWAGNsb64du",
  "key25": "5i9Y5CiZ1M2EWWEXe6fZ2oHu2saV6N18iR1yciNBWGsZEHN2SPXHHhbEGW6PF4vzjx5yc9ziT3HCgXyL23wJvBUB",
  "key26": "53GQundqncpBXXBDZCR327dZ1oEEx5rLaqUVEhmxnBPN78bEB9QREKsvmhvPNejDm7WAKYE2Usv8x192V4WLS8qf",
  "key27": "LDRxXxRhwegPh1t6s8q6fgqLr7dsv81YSdxrygnQvjcKcxMxFSBmEJJ9R3dwpZ5tnCkqzjm9sWJaDf8JRKpb6rm",
  "key28": "CMtJxB4NyhzvxADXVGh33FY838RJPh5LSNcMGggfwmnZRPAeSxwtSBdik97XJfdvT26twnTeAobRJTVpGnECnhF",
  "key29": "4FJue4VTcPscB7fZPo5B1YBNKrpNHXN35XfB7DbQ9y1amU38PTAkUaaNUUkhgFXXiKr4FaSVfDcjzDU3LC1E69Jy",
  "key30": "3njnvU8xKvdNJaKY6PJMohuV2p2kXJvKGsgKCGHvzKj53qVa3KymwojzVxoazBqFDD7qLc9B71iTAoQay4KUAq75"
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
