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
    "3wev36dkAScBqNHab2eXzfEpsoWhhtVQ9F7iXY9HSKVEUmZ44BPv9no83bt1hr9yG2kKihxCu8ztC4SVvFuVwQuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "421kLMNqSd6AWfDro1Hc69mTXijUE9bDswp2MTFW6GTy46DwqZzqkNTkpjGtsKBTjCikUH7pWeFkggmzMbm5TJFk",
  "key1": "hCoNUYrCGUcMQeoBUMatjQWTs6Rue4jmDbm4825jZGZcQcMKcC9N9vCjcxYikX6YKgPybRmsvG8ztkyoH6SDP3F",
  "key2": "2XsELJA8hCA8E2Xgxm5wZjAGrZemvPEHsnnmkAVhsHo1sH3QhUaAZQ1YPrpzEcNwKjoi7K1fBujutAFG1tpA1STd",
  "key3": "5kC6VSLsQuaZiPE8EdSv4hxX2ZgxvMoyzG9bDL7ejPxCT6daYHzxVLnm3DCQMhmxXFFZKhEtdc1QvDp1tXjH3kvW",
  "key4": "2HFRgN7dgf7koY3WoQ31yDhbv9VkeNaReVjYmNZhw1t6N8iUpTo8Hs3h1LkW7537B7BuHhSLB9ma6e74BoCp4nr",
  "key5": "31kd6TwZmEZzb43guq9xBnRnQdeQYPoJ9ESyfFCxZA2BppDT4s3xRPhpT5nUHH5FNTpkyfKwi7yCnG67eHAjfc7d",
  "key6": "4WuMBz4nGLARK6ZPxyn1uY7LnQ1QZu1tcwxSWGqKF9EvEnfYnapayiHuCxrfmzAdXjFgTryyE1dDk3U9UergRtNX",
  "key7": "G5MJNGKWCAKHme5mBVLHub23JiTpNcL9hFX2x6RAV2njTosQiEJub73VSyhutqZg1soMDWG2XnfDdMrtAZdEfih",
  "key8": "8DHPeHRAEUxtaKDZohmhS8PyukX8G41EYgCGR4Zawjbu5tW8x6YAps1hQe2DAbWSiMCdCvGE4sQ7JfGLm266czJ",
  "key9": "3Zj21hBa3MpiwFdwu82NGNDntVf8q8Mw1zdeojWQcwoXHyPkN7bPvRjXonZERvPu87uGiAZhm6FUGb7aBxrdTBPM",
  "key10": "4KqT9XUsvNQ4WRQKyBNQ4gY4JwktFFQrVWpcJHeDZ1JxB1cWDeKJ7sW7U3uv59qFMWx7n23U3grpzF4J3mZqZfrq",
  "key11": "4iT8hNAQeWiAcEaWKP6NyfL8ecHeSAxSzcEfgPaqZcntuALz1hYEKXzSkg5Vox8NLHqK8MxL3zQ1pC7ZeRA8baRG",
  "key12": "3MeJA3bMTrKgYAsH7GCMmJh216Gs6z4ibF6htGL4xdaNFgJkj9QkMWRtSP8ZEK1LwgADZiMkMt6YuGijDXoADpW6",
  "key13": "5hmJ8DdLAknVguBVTNsy4scX7GVkh9m8TsG8qByTdTPTXtrFPcUPUNdVXrpsf9GkvwJqqUXDRzYXMgdDncnHL4N8",
  "key14": "3pJCa7QpiMsH7DeBW6P5sqbXGaohxbUBcvvm7TzaxXMhzEdgs9S2yXEQr1NDutoiai78iwX3hTrDRUF8eGZDPCZQ",
  "key15": "CFus9ojzq1yMdukPFFhE6M1ff5mzeL8GHQfyKCxA7BfziRyoaRLdMwUKTjdSRZttHeFScVzdz1H15G44sz7NrQo",
  "key16": "634Y5htvDJh2GbphFMGdanps9m9qH4vn67cDdw3iwsrrYd4B5oMzcUN1mcMaW4UTCP5kMtgWY4cMYmokQSYHGuN3",
  "key17": "2oniKJLT4HjDiQK5LskQZgqLV3JtLJd7QQ11JyH5VbKY1ipceHQpaCSJbU8xndij7JVu9MDAyjw6Tn6cQK3UAQVs",
  "key18": "4w248LUc8jumk8Gu3VBcvcsHqJSVTeyGFhKUKZa95sBfwWanQDhMNDJnnwh2ZqXoWBt5P8pmYzcNCLFNS6oBbvMf",
  "key19": "Yyr4pXeRKvYvAtTsg4YrHXJ8teHSBoKnsVuGDoNDefD15qrtaLWooGARJq2Q8Fe8JgyRuxoTToDS4NYkMxU5WVH",
  "key20": "66xNcLzu4M8o8LyNAFxey8fFHt2GSCVDoExZHxGz6Wsc1Qqo515cYcg9p1QN2Z6nPQrUPuH4vKck2WrNkUUhWx84",
  "key21": "5xUK3fxP2kXBJ6wbGbFoEhDutvRoNCsz1qKPvkJ1xXitpcZXtCxfJfofnb6k9LZk1NsicCG6VSZPy2jtZLpQeCPr",
  "key22": "2bnJEZ8WvBoqzuomkYfp8Y5ThGCom4L1Q44EsJjGV1hqrcCSfwN5nKYxFnuX2p7PyJKNx1Hzq3uMt3HU91DKjFym",
  "key23": "21uhyRvXWU3r4f8RYLNnmt5Adne18ZQQLpfiLmPSeAf4wkLKhazUp4bDLAmWsmdFY6xQYZ1K4GEY9fcqrKEFdW48",
  "key24": "2WCrt2EkJmiNhFugUNzf9nXeu2na7FuaoNYzGadG3m8f6KkHAnLmFWHYUgSjY3Uv3oJsUimLDYSNcnmaf3FJwTiP",
  "key25": "4KHP8eFMsaX4vRHrRziQnNKb9CJjqA4jF9GNYoGhmM8Fy66kDV9BJHhsWBgCq6gsbaYW9hjHjvDdtjf3JW7QdVyi",
  "key26": "5EHYYp9HFY8LgcP647vSA5jqvL7uCxvqUyGyoXwMVYfW8XgpMpQ7AjmLrVMU7NV18UoCLLUmiPSsJGbm6sMJU8hM",
  "key27": "4tec5VQ5J3CiGJy5aKAoQQweeS2VcTMgi73ytV9Zu3zLgYcYnMHRdapP1tWqbAdKaoJALy3naS3DajP4VYfgRd6m",
  "key28": "5SQCXYBW3BmL4j9Rxkj1QyC5EzoNdTofjMX4DomA7eFKJy3Mxa2FUdAefgBUjcRM5U451novsEd1gys4A4Lmyba7",
  "key29": "4jGf7jm6PQyKKn9R2DBQC4vycqs1cJpgjQKmr8oUdDvL2hm6XDGXTjHzwz2fZRvvgoT18q32pvb7Y3aX2kVhDPsu",
  "key30": "3eN9NuNLse4SEakFG4nHw78E1Cq5h7etKL7ynhRmxopciqhWhJcTkmLm3DPxEZZmPDbst9SsXXDyGKnaSRxJNFZB",
  "key31": "4if6gY7mx3ox1skGG5FKs8PnZn8zfhTLsuwoKZdsdT9jBuZf4ceKfrq2EViidemEnJBfkW8JyyFcsz9uwZnwhLgY",
  "key32": "LauwmwAUHZriLkxMGL38Q5hhxi3R8HvYFDrcDz8kGTgYJcYLMWsnMoiw4GKgZa6H8nJF96TEAfCTumVf1aMBm3e"
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
