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
    "3WDMsBJVwHvstayzcbDHEujpTx5ryqAVQnCsuLrS3zihrrVKMEge4u3c1h7vSff129FuyJpNzEAX8wpCZcFXXRHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WSof79KbgzNGtLJ7tFWQcrCNgZ7Jstghc98kph8afW37xfKbypQPWCAAsS7zW6DZdhBuQTrCRV3Za9CrnfaVUkr",
  "key1": "56HTFJWGgkW63Gq8w7iiD73eG7kiMW6W4ArkhDVbdV2K5cKSz5U7CWJx7tsd8ebve3sQ8BGPuZXwz5ARMP6VAkZg",
  "key2": "3DRKVaupZt2PojR3CzNXEMxFj6tTpXg8yXuBk4MP8Dv3GEVqjw7W96yjmyKUc5QabKcCx9Gjdv3CFfsksjgQj2VW",
  "key3": "5zi7qV5oSMS2dspnXY4yjTtfUm3vEdZPD2tFRMJzFVYBQt1QrSneVTEYA6BUQmqvh7hbzGfe1iW1SkczqXfR3wKW",
  "key4": "2FHXXtbeCdQCA4MALx32y79p8vNeuPGCcqufrEAiKa9RRkEhL5QcxWrMbzz2Hyszb8DHjL38HJUf2zXGXLLAfaSu",
  "key5": "5LWCnWbgcs35cnsuDFrsMf61v1HKJukuau4Lufzod78jh6JYRoHC3LweKDf4GuSwscUtXDa3e3WHatd7ruVU2FZi",
  "key6": "xZmPQAAu7HLn9p74RoADma3xTmf24GN9D6HtxHUDkkaBxmGhti7ynJ2mK3mVnh1pAHc1ndFM6xreNdurhZMVykE",
  "key7": "2wjW3wswUh8PG8E8rAShgWk4A9cbiemRhzZgausEXhsAvp6Keooq7AyCy46uVaof7NY4pq67LYQsvTwbVmBywBii",
  "key8": "5r1W4RvLHJvsgSFsAJuY7s2Ds39QuiHiVXsxGC74xrKziZCBK6MhAnPayZ1oz4mT81sYnQfeyziX8dYyLe44BDav",
  "key9": "57JbXJkvUnhx5uDrMgigaLeLgrkSo1GdATDBQdpB611ouz5FJ6gHyR2QVD9DFhLdDxFu2AuC5t1mPmDwiNDfGq2w",
  "key10": "5jjbSXB6g54CjJhaifhNQfjSdGwWPHJW4g6Dcv8A9vm3RqoxAtL54LG9AEVXLqRNdsSGc13uiQXtNvJhM4H1SW8y",
  "key11": "2QyqwizBLuzxkBU6VofyZ9FzQkVjJvdLKuiVfEx6p7YsgEmPcYUKezqVAjcC4pM6JvqCqnfKiMnLYaZUnuEZDhkQ",
  "key12": "2DzLVaLVJ2fgRpKu4rkThVY2vTpNsCjxZY2mSm1DN3BpHWX1t29x1pScdkywv1kqyijU7yeYzJxNhTNmsswiR7zG",
  "key13": "4ERohZubzfSC5cEcDZeQxRo6CFyQEiVaTEZ5NtZ5qdUZweCXK3VgbWLrRxJvKRPjTQpYqJxjPiiXFczzcCcKSkS6",
  "key14": "4AVVfgFvqu3XhdBUoGrhYNwnPXJXAc1nkkHNmKY2myWmPst6cgWWzfzAQo64CDMjYNMxmk69eJJDNorCHDAXH3px",
  "key15": "3vvKwJuZcVgHPstAfU9nKVss66bgmwYEvfA2gsmyqz5A3SvBnmWqXRnbQ1ShqBzU5hRxKzYmBbWZa4Ru3LJ74GzV",
  "key16": "3z8qWxbChUkhzW18V8xgLRP4quoBFfMSwMW21EFiwu3QvJSsFbHZwP13gW4YgRtydQ58Feu1MUqyAP6BkxBMjdbZ",
  "key17": "5MbgDUPCviebdEkLnGCgDFFC555Lv96MQMvAKgteWfDZ4SCqTqeVYHhjRB2N5qkkBtXff53kAaZeHk6tykWVTAgb",
  "key18": "qn8A43JWCAqrF7iXdGLiKgcsZnHGidrvhvA6U9GCk2vfMZCLcVdL42Do6gUQdgBiVLujWP3w7nhykso76Ycgim2",
  "key19": "5qTiiNMJRZ8Ax2uzyCxuHaHfEZBoCK5p5GzDWoB5ZMSSK2NJBXhkFoWdivScesxz8tbyHdknsJnCGNxtj4p88U5k",
  "key20": "5LE6RnH2REipCMM4xM7hXVeUwF4Mn8tVE1JiA1D6aqiHtztNdS2Gs8G4tvNfj1sss4EpnB3Ma8pDbdxdQ193PTp4",
  "key21": "472uGDZPmsSgxM6ZKh4s8AWargrcyiXa3djrWiWtaBpByYeq7YBHF9RcscQUHRwA8sLEj2YP73WaHqB6Ga7QeP5c",
  "key22": "2xHuzy1yCQ4M3nHWo8qGZtKV1fBqDekZ48BnvtsVzyAtXR5HguoSvgd9FddXArarykNFhoTij8C9hhaX2JpRdV7t",
  "key23": "5emmFL9z1J15oRDQzkKR49DXHCPCmHusBDm6QY23H6nwj6DBKartVLHkoPLKgn1BHbFADaBZ8qEcrt9N2PdvfykE",
  "key24": "2biHXgW52MQS2DMYXEXEwiWJMWm7LTW8uQGCx9Esdg3xEdR5WDD9zprE91RcguNqRA2q1LiJETDVwWcWtHckwzbY",
  "key25": "442nDwReRyv4tQqEgfoiYWyRkgjXbbXL8psDz9NFvHCxX1z1v36G6pu7nkZLRTpRk38vsMheuxXyNW5Wf1eg7AVL",
  "key26": "gpvfhzjNZmW6KkTrvT1KHDZxdGpH6LHUCS91QoBCEk4ZSH6yM5nF8AGzp3xsohiziYP6qwZUX2QNXxUN3PAFgZr",
  "key27": "e4RFVXKoQaFuCMdX2KeuoUK7Ryqfd5tx6vMhjQApzXWpFLmpA6y85EAQrmGPMyX4PnVUxioUyQCbyAKikQ7Ahxo",
  "key28": "52JRmNn27HjAAvUvPUiH7mPZhaYiCsiaY8WcdGYqp694ppPb3wT9f2RTKWZ3MH96atgMcmVSNP5DP8kSmU5TFJFu",
  "key29": "4VpvbcmWqz3XkMiE9DiknyEmt5QU9qmrUfFTFkginhXxYAHr2MaTbaGFZpVWvqHBadj9vywKwFhA7ae9x5n7ihjG",
  "key30": "fYNqdWpTMp5R53ztWy9rxwsUczAYqPJYW8WwXxPZ2NxttvEmRudrEtnBxo9nC1GkhRxHgeQACz7LUgFCkqpxfTY",
  "key31": "2N6jqcP13Mp4P2Cs5dHbxmQut7iqKPdrNmFv3tF6j8oiw62MRhCJuKfcdig2dY3huRERbuAxwHUff8Nsim1sXf6b",
  "key32": "51d2Nh5ndgieq1F4KrHDFEhx1kWKEHCJvoTaB3KVFEKTgcX66Dd6M2TT3yit8PnGHuP1af3d5pAnjiDULnMoPEME",
  "key33": "24Q169LC8ayRC3kmuQbbKuYoHw8gjQ5VWTxMNVASwU8bnMH8PKQiJrhfgefwRZuEDN9vQ9pvYsysmp8U3BGTV75c"
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
