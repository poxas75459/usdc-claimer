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
    "SYnF9hkjXZv18C9LPtypw4ugnHRbkhwE16DDKX21wqZuapxAFJWa9Txh2562ehRjqUs1pSXCbX5bcK3wigzdHRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQjpTvBpFWd3F92FZwG3ttnjpjJqs9kb5pchy11Sq52MCMJyNPrpN8vJpnG2po2Lw7jZ6Zs1TMoU1QyZZsusK7N",
  "key1": "2S3jC65nAXxxVrVEnDq3YfQ7EJ6wzDGwoTJb6bNHzs2rppSzCKSbfdcEyXe2gzPZd2pff8vuHRBQTPmq3dzutc2E",
  "key2": "2WsxGHh4LTXZEPb7qdkGotnMmEU79Hi6HdsRjVhUws6BNdWSGi7YfdxeaxFFp8s8abM2rabU5ak92F9zyxrwn19Z",
  "key3": "41XdQCW1thddsGYtmHbSL4hGQYe8wtxpKduWinSD8AQsm9g5ZzW5sf4bLrNLin2TmBGcaGNqjDSxJEeB4XEk9k5j",
  "key4": "2iJpPE9o4tqF5fCJqDgj7Fx1RBv5DQoFR7fqFQp9t5RvUoKSNzagEo1fhSteEyP82fM5NpMdJDYnNV2bAYFc1Z8p",
  "key5": "4MBnTSmi2wcogLhQBJfZy7gVtpoXorT3YEeBCZ2mXNg2Jjc1k2PVbZRvmbGGJ7Kb24oaiG7JxNPS9QpH9N1NqeLw",
  "key6": "2xZQwck5yUDjQ7ZKV9RxLcbvoiEpE5HFT2wy15bALEpMkk8ytAjReE34HH9djzYh4ou3v7t2bcwT8VeqsgE4VfcF",
  "key7": "edHBWUThzA5weycEYwtFzqGi158L68v2e4pXZyA9MGT8hc8igT4TQ8aqK4zhQGuVEBJ29jf8RVxPBxPjxxaPAhS",
  "key8": "3FDsXY9xJrybSg8KUTkmiXc39qXeCsXFeZ9GYpcdgTTzmv6mvXL5yPcDWq78USFN9L4b31cxy4281RvhxB92oLYz",
  "key9": "iYNsuF2Ci7FBH5KizX66KCVbb6xDjDZzijm1NbMTDCmPhugs89jekm3gm95QihHzDMAEw1FEFJLuX4eFYTF7s5t",
  "key10": "2t5FM7kkebXh68Hv6oK7mAfs4HNWiG8ou4HUrous6PXTCix6utiB7C8B6VjpPKSvHnL7FanE1dDvV6Pvx2n7cNt1",
  "key11": "39YPdKXGM6CLgwX7qJP6dYva13PdR8Fa5Cdbe9sFd15hgrJ7VhQQRBUDUS6cougYjiRn2uqbL7vpkgfYyPrJ7hs5",
  "key12": "3iUjtQKKMTn9WCRDH752v5b1DPA5dsQz7fotsi3vjf6XrCtvfFpwhVP26G2oc8scC6xi25k2EFaBZzPgRfse88FV",
  "key13": "5T7QnJzq8nhQSCYri5GsFycJAf1nEFriP5CFhT7gz5EvTcPVedfhAKYJ61L8WqSzVgQdEPU64K9fT5fkmipZxPAS",
  "key14": "2HBhSiGm6MrBuiexQM5KdMWyLciCQt6ZcT9qJ2YebdLcr4ckuLtsEqfhTwASPshDXZJMbtQDDFvURq1HY4huSr4u",
  "key15": "66PFVLmjj52jNkeRoAhvRWzeq6TsGQh23QZfowmxQgQv6Rk7Kk73hTfsJB8Md6J8piLncnSEuDbFr4fwhLxRQiXe",
  "key16": "KST47RSSBN5ayAh24Nn6gXWPz8YS5rzeQuNVYxabAWKnGRSRrZHLevfT38pEs5hqq1FYmo9dhXg97tjW8WLpxYd",
  "key17": "48vAoWX7QpYiHz1Y1Xn1988CXBVWiE5AwMtYfU4ZCJhAvqsPEjp3FZ7NCT6QjUydjnQxBodJ2fgfq9FM5nzL1wgT",
  "key18": "4PYnrvYSkCiU33rvu6EY8W1RN4muG65DMgsHUBYuTH5XDsoCBbzKLpJP9oDU3pW6rSjqmujZmx5UpdncNaMgk9xz",
  "key19": "41ERiEdMocgisk4qdiMBHJAGQfMkfwyo1FRF4oYW1EHdAXV3etALUK5z54gj6Dp8KVakpiz8DqE4p9weBY516yfJ",
  "key20": "3kwuW1SKQ7s9umeE5GFLfZBqhFpta1PmVdXCxoVSUKX5v9ynZGBrrsKrpxa359N1DmGRjLMEDKMk3ak13QtyNNwD",
  "key21": "2B5oHKnzfokD4L7Jpp4QsTTNcGCWaDgfVc6G2BnMjhYF6gLzfkE4e1G2QHaDzAzwcY37hdRd8hMJP8PjFTfdpmwC",
  "key22": "4RUj7SDAGLoLJZCy1pWzpjakQneBHw5a1KUcRVbdNKUw3hf4X2uDQwHFwWCo3siQfyhGegpLJ5Y9kdKtUFx45wJ3",
  "key23": "rLRoVdYqSjHMnqTpSxYQYioj5oiWytHN3sxkPh4GiFkYQ9UPYRF7v8UXBqm6EcMoXdiFbFCM79qKwoWcJMW2R4A",
  "key24": "2JVSx6vZJcZHrn3AwkAk4nqrCNaFVgqqQggvb62v7UGcKxvBke1tLVK8bppMT1FEst4cZm2sgGdAKzvRgCdSHtPs",
  "key25": "3rqNutp46FqHRzc627A6fuy5tspKcpgwNhssPVdfUUNgsmWXLyrbSmoqMn4zBw88msuBfnbAUxywLuQUVUTcTTRL",
  "key26": "4ZBjCALDFxxeLPynVsVzja6SX9cKM3FPWW3Qu4eBoMynu79zfXxdtdb3kd5GSxAuZKTBFPtvjzECsBLi6p78ikcd",
  "key27": "3E6RJcwfouJqdCj7Vc8Uijj4gCKSVdd1vSGxG86Rcj9WyYPYcUA6tfxjjhXLdd8si2mQQAZPWAnm5Pr4rKXTTeNk",
  "key28": "ZpMAV7uVNTm8Kjptmdz69ruWgQh92hYNZVhm9x1DC6TCvHxdc5n5hs7D2nXzqJaBfGiqim6cFB7nQqwG3vQpDhs",
  "key29": "5UPvs62UUzKqbFAEC6c18RbHQ5QKyoykZyN1EDmJXaPF4doc714cVHq6oBSz3D45yyY68gzU8FPZeSoKHYJqC4ei",
  "key30": "2x56s7TcnY3LyHM22HrBPRMEaXgYTqBmzdFfP6KdGJYvscgqDH3HsgEWd9UmpsYLjuiGkoG9imRnj5RttSULFMUb",
  "key31": "4twFjExn3WeHMm37aH82cv8s8D4hVPs5ydg2jpaUdvGmyPhCvEYFrf3QXCYHb2bmEqrQ31AXtZ6R41mFpWjcLXe7",
  "key32": "2KmZdrWLfrt6sPpSaiwGqJjRFWcmohkjfY4NT1iFG9hB74GPeAKDeS62cNKYM6gcD2QS39PcEAsbhWno1bUHJ3j3",
  "key33": "2BWQqbYGqvd3YdpTCZtgSbw8HR8b1SG3C9WWSAfJ1aiWLGjvhDfCQMTZaBg3amjgjjWvcKXVLZFAFkVKDaFRXsRM",
  "key34": "5r3KWbRbCQppZSf5dAvAFBJpae2FxBwBkrgpeRkoUokZYbLHKYbL4k2WiUsRRxgn4AXAhzAVg2fDkT9NxhKF3ZvF",
  "key35": "4q5LUpzrEve75GtsvE8GCCumwhF4W9P4C4beAZZKihLkmkFi7Zm2iy6wdHyG2tzcapt3WRqXhgzbHx9ZLhUAtmYp",
  "key36": "56ieirKVo3gtjFy7cEZDunAPYcPwP2P21kNoqFWagvNKu6fjXdw7jSkZ8GciQAVih1QpfG6Pn5ZenwV5wyxSqpbC"
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
