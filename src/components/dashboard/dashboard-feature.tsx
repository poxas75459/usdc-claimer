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
    "4G3L38DVM7gjepxY89E53GxMDTosLJcrKafJXFkZYGLmn9Y5TT7HmtZFrigi9vSXQRLzcgXmeV9httB2Uyz5mu3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563qLaNSTwf782ofRENRU1iedNoUSchMPgqH3VHsDheMkHcrTYwQmEs9rFVZ6tTr5ZkaBGz9yPaYK12AcfbZ76az",
  "key1": "4xkzag7kQpHCL9xwCutSmqyGCNm5iAPCKZXpRdRCkBWqNApMQvAm2v9EKaB4pgLiwXGc19SZfaL9AjeHB2z2mrKn",
  "key2": "43ThTfbRBeB7QdU3XcNwXwuJDfjF7QoVTE4bWxrxDctPW52ciDnnV4k4HoYjVdKSDAFiUP7VbdNffcqo8CDUuy7t",
  "key3": "4HyVTsSKu38M1hqgMbPtC2fCU1q6foHDevvJWAiVs4dSLK3aAqZXhs59e5gKuKgLiFAV73LQgZMzX6oLeQBGGZPD",
  "key4": "4W86wdrCUYkZxg4AXS7kJ8o3xamRGiYwCvYxZGsV1VMyNEVVgt3u7JfvyXW5MZCrDuzWRBi35LXzCHe4MtLBXt94",
  "key5": "4tATuHSUhfy8sX23oe6eCXvT9oKQEvdb8XgBnpbREXFfTNeZdrWXwR7EHwSYPhDCvLcPZV1ezhqXycAc2Uor1Niu",
  "key6": "3wFztS6UGwcC6cEcFVE3AcWmd593MBmNLJ83wSpKXk7mX8Q6poFJG2UAFSqn6DpeM4xQgR4X2rV1YiQWpkbYDTHd",
  "key7": "JjMJP3H2LuYAXkY7Kefm6cUe3cxijrydprqhrgg3Noq6TwF1AmpXSkuN234bemwjMj6GvkFKBYhJeMgjgXD2Z5f",
  "key8": "3sprSPkJQtoJ1TPy6ER6drXyCRBmLLdvKeCa6zaM7GbMQAZKVqnoKs8afqwBJjHiX2vxxMc7eKWYM9Mb16UzJvfw",
  "key9": "5iT9L2XHHVczqm2KC5mEFJwS5ZEewXBwRNJ7GErH1ZVtpyjLT1smSJzti2Sn6ESsw5cifgPUqUAuB5hbhPvDRQRW",
  "key10": "5uu5wGcXaJk1yeZcxF8sTtYEVUZnpEmZ45X54zT3CVmWHns4va9vPPZHHkvoZ8PoX3ChHQCJMr9tH5tv2dU8Aoqz",
  "key11": "52Wcc5KT6v2RzQVE9iuHtPpr34nY9T6R8N3LPwu4K6xij1W8ANDb4HxVPVKcfE6KuHLjPpV1nHug2SpFyfKZCXHa",
  "key12": "5YVWB8d6kpCko59pycvuBR5BXm8JLqZoUZJ19PncMCjaYVng3M2Xq7A833rtdnqsQHsKQ3sq4ivE6q5CCGXkGChz",
  "key13": "5ViqNUUUwG3SKfLa3K6fXJov6kYrrDCGJboJKBkTXSdFKHNLHqBai8ADidscndXfckCgusDdA5k4HfXFfwfXJJPq",
  "key14": "3HoP4Ddfm5QrrwqnjR1Cvr1VFe3hY1M9u1zXejE4NYmSor4VJoHdc11zWszVjDNd6hGTxpVNAia8kxBJPBzwGfVw",
  "key15": "2Wy4m6DJh2RYAyNK6UyK34jZbEpvYTt8NEPnb8udowC1x74ziRGZ9EnYV4LrikUNLCijML88eT6U5LPKUCYc3bhg",
  "key16": "4BLVXNKpwN654XEH3qKheGguSPStggSLa7KZDb1oZJ3MBJdxpR8Uh8NMvHcNAnCpy5ffNkiBEH1HHkLkkfFGKHEf",
  "key17": "z1KbaESFHCokPRdwT8Pi4wQnZTRZZxZTHSTBo33EBQTdEta6N8G7877ADP1d6jsdHq8CUJA9QCDxAxtWYtJR7a5",
  "key18": "63ZUvPr4FGFU6gkPFwAV9DACDJK6SwdhgMBb56XgQ7LXGESoJj447eTXij2yoQwJjC9vQFSiwKci7i7123P8PndS",
  "key19": "2hsumeJxqhkPBM3ouZJjeJCNVsswv6BQS27jsSwDBU3eL8jqZniRRsucWhaBpjqgtoNn35haKciCFda9FD2MzsjZ",
  "key20": "4KRYbCC61sVabGAZEvQksv8LA172Tzfv63NiwRda2A3rZHJfkJVoKXAVS431A6muNYhWkZHynpnd7wG9HTi1XbS5",
  "key21": "3mttbwwYxcahyMsVAHRzgHFkB28mGJyXJCvZ1giiuvjKddxpBQnT2vucffFPyVhW19VPrxpiG4cRarz9mGDDFb6i",
  "key22": "2Cbxw2GFdJS4pKu4joVs3epJU7zYMojw5pVBqNkdghTb3CQQLtTPPEBJVLnk2bjU71K8yvvYStfyQ2XqNBmcG4E2",
  "key23": "5xQahVNjfESXP7rQzppyVJ8Wbny6RoMydj8cRhA1XhQNEzz1yP3eRVFzj7BxHqDC6Gs1WVC8NxCGGpaTpFJxaa4B",
  "key24": "3jYFw3r13cV5BFLVHJT4vgaJjkZwhziMR3ekxsHHKWnyCW3cgejunnuUeKAGahf6933B9hzbVSJgE1fW11EwAgbY",
  "key25": "4hX1zYmBAE6TQRuypTsrTgTYEu5AYXoMVeENfGgwyiCxKwwCc8iQyruSugMkQamE7NRZmD9BZQRj4TmNbfapCG5W",
  "key26": "zRfmV7FGjsNzJfKHpsWxsuhNzYMtPaeoT6MhTuoBXUzhqiWUDgCjZSp8mPDxzhLf3DYg2GKmtBPEVry8PswU3wg",
  "key27": "3Lvq5ha6Y8wKXVkZBb2RnAtCKmrdb7nR8bt6gAD6mXGkxGMv1cQ2DkEJ55ypu1Unu46VmpvQEML3kDxMYmobzr3r",
  "key28": "3hKRn9CecJ2CMULG3sSqzhvgs3fjVFFC4ffDn3VKKLgyaVNAtg7fm4eWUrczrNes7KUfMJaJ2q1bKudzzDpSp5Lp",
  "key29": "4D1AZogJU8vuktDRszELkAhn8AQ27zr4wm6L7byeXNQUM4WeRNTQn3R53R4NNEdHSo4ovMNXwE9N9uJQsL55oupt",
  "key30": "3SjmQJ9FPUhQFawB5nyV9A2tXdckqS5TtDqBKzMYGsEXSyFTDHm5mtBQ9FifWmHrV1QYCwKPGhrXDdNuaDeqmt3h",
  "key31": "389WBFPqtq3LifzHyGybFyR8hZPhYqKAtqxWMgWd9Cnb6DEGNh1dPjbfsA2T75BcXfyt5miokYJEM68ozB2qeVmc",
  "key32": "3c6bmWQCeKrhaw5M9ZKsMAnV3HFnAWG2fAUJbRNXL1wAuiZvXxUdohHLBUQdE5eTpSMM6Qdz3J5EwQDraALsQuit",
  "key33": "3MwRT7rqTcoF2BarAagdZGKwQH91R1XmihWVCcVWABK3oiL7Cts3AXhLzv8ptm377sUYDRn7m5g5Xcxrpkkksdb9",
  "key34": "3wYi7MiXx6Tq3LTnRr2C4Sa5xwWGtf7pC7hTrTsGirbzbFn5c3F3urzK3xFKuQYVzmcdEjKK3hUkeyp9Fky5g4XU",
  "key35": "4fxs4H3vH6yqH8a2mWNH4eox7GmQc3XD5jSuJVTPEJLHbtbmCKMkWWRxhy6MH8AC2kP6kyoP3KvaTa145eeSq9y5",
  "key36": "3cGxW1E66VnVCjbZ26LHTcFZf4T5Esjd5cHADSAsBX33QwJDTctmEgF6h8Vsupgw2NTjmDvTGCTXNm7r8U6oPVWN"
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
