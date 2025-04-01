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
    "4NChzmsRs2ip4hAWLA4THdWdTZFmKazs55YCw4rhiU7j4QdLU5MAPYaJCsAmf9CeYLQVYz3NAUPhz7AeonoNyT5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AhmW6kqnDvhGFMRKLb76nK725pcE78qDc4o53bLNc7HtArHmgV98i3Zo1KfCccfMkeFNBKjS6G2CQNnYCKqsrrT",
  "key1": "5jXxxXPKH1fFFNhRkU3qUuvR8SD6m8aEDHs12TfPpGmRgymQNTsLficwSkpcAyj3LuaU8AFdJNhnhfc1gEdMEoFH",
  "key2": "3SeverEvXz6huHW4uPGxDoDk3mDhRpZhxK3oUDvKztU9ax3H1qRKd3LH86aADg4knx3zPAC5GUDzm2CdYCAyebrA",
  "key3": "DNiTbWbyTq5XwuXRqxhTVs3NQ8TtXvjH1ewmdj2LCHxDGH1KoPp7rw2yUEPFSGc63xtL7823rYKMWCrohxfWZHE",
  "key4": "3vwhkRkjZu5qberoDFK2MzEnerRfcD1GUKomSjeA94pHrR31vDANEvCFi3aYnzDFJHHH8jRPnsXvZtQykVzYH6w2",
  "key5": "4CpDANU4czFw3Rv3YwfrMS27cFosPA3uQhzxS5akN2JLj3XjK3b9Waee17vhtk77cLHjkrqyZoQ5D3Gb7mtkQ4aq",
  "key6": "FKg5VcQ8aTmLssWXJQJ7fS56PfLxq377xkeUffxyDjdeNV6hQkson81AWRsKfB3ugmzYwkgv2xtibw35ig2bxdc",
  "key7": "4GyN9p6hDCoCTNt92ovvK1cpt4YpcciZ9W2JQvtPY8YuAZLfarrqsiQgFJwLAAKGMmd8Kh9wEw6xtJRVzJ42z8Mo",
  "key8": "4jLxpTu1C3R8ggJUccYxHE5VLjKwbyn2Hv6bDriGAXuD2LReZoYxWrJrFiqq25bb7ygsnkVeMrSAVJaSazbsjG18",
  "key9": "iks494pdJmG7T65Q7Tpz4tBuH6efMDao9sFU7RBxWbk2RPfLBrguBwpQpTZhkdKkFcJBUeAMnAnxq83CxmWRGdW",
  "key10": "2pAzzF6HXnvW7FUBqQ16pf1Brbm2Zw1RqhNBE8P31CE7yNWRgrp69NgcbwqusUBHxVm1sP5nexu3yeenXkKpUV9p",
  "key11": "5bsmz5oQsdBy3b89BJfR3H7ALQ8rrHMUJGDMMpeKczuAWTMHgHPTtveeaMBqkgAYFMny8VGgG8jtdqVDMxWHyBe4",
  "key12": "nJjhX4tnE45x5YBgXXetMjjxQpa6ePaoRbZpux6BG9a2RxfrKEb5ipkNQCEiFi9UsqszsgomgpMJKbsh7X31AyQ",
  "key13": "2o65cuQwLK9Wr4RjCQWyA6ui9oJsvQVw7NxYH11oWfidekftHftwRNZm66TdLipVA24RrD4p4mniyrXTic5gGZ9p",
  "key14": "2wRC37icv4aE2BiCDYffNCkfH8i2ip6bdrvU3NuJZSWgnU7vbj1S7hkakJPidxgFPjPHLY9JrHnJytqZ4bgp7KHT",
  "key15": "4LJDDVKnNa5oMEdfETpdYFUUbiwtTwbH83VjoNZHXN5TsFYZoyx8mEdZzbSdnCLcAywGSfN9YqVNTCeCcVo33xwn",
  "key16": "5BpmvDbHsuHLxttZnT15cXEb6bhkS42KVzVcHcSQgyaFT3mq54abFFUBTSUeu4QZ8ZM7sX2dzS4tznFvBNnPiHhR",
  "key17": "2aJQmfbqd1jZyUq2fSwvUKHnPGpENxDgNxue1XQ69xLnEMFsSXqDNPruJXdqgqXaTQF4bnosRTrNPiVScjWL3TSA",
  "key18": "4jb6YfCkBwJ35X1Hm8NcwTkTMvu9xsDM9qGd1oxKmJhkKq3T8fwKtvfpzyDjjukvAwX2C754aW4GLPMVF8uWDQLG",
  "key19": "x2HqioUoxseKKBVbdLqXQifQo7s7GFGvEWaafmqUMzBSKHrhN9vW4AaeSSuSBGhxudgGR3biPdiNtkH6hkWszVL",
  "key20": "2sYoU1GWuu3S5N8abB81sWrDNLeePA34Jkc4gex7YtNnsAQJz2Y3ZB7NGSYQqFL67VPbRjjYYtobhYYNR9DJnJ4o",
  "key21": "4r5gHFPVxinQR4BgUqW2vs69CnMcXcqUTAjYPn3CMNyNBGCr4xE6zntxRwbPQLS3YXQePP1syVVArPEzFS2HqGDK",
  "key22": "3TwiPPww1B1JvWE3cH4gkF4cgqacLX5aLZVfiQfZjgdFwvpcv3494XwWr1uxR1nhx4VDuWQVwr93312PXfqxwoGK",
  "key23": "2jioC7N8y5V6mVNstQ2vZJDTCDfHgSbmeonnhwJqf6wuteN48c62HuN4VaDi4EdB5cDqm5dS24GgsZGc1NT6jvZu",
  "key24": "4ZaZ6KKcET6oG2MQLQcEY34Ci9H8e2x9U4WzSe4W2iH5XXNx1x7Q3RiK7BVqndqzR4NNXQDvF9cx15ZhKVqjxu9k",
  "key25": "4pAK6LwJnYzvufbvPHfqneRrdNDzKNpPCCmCKuNcBoCF4J1pMkndkewckHbfaNy4Zu2z3FYSBUzb8nax5gmpbFDo",
  "key26": "4E5v5jjvaax4dESmcecerGr2t9CxNzi5MNDw7QMRJhZHn1mKeowBgaY2hw1a49fcdczB7yXET7134Kgd31PG2jRP",
  "key27": "3xyRsW7J7ehm2Jxfm4cWFCEnQXDgrdH3Kd1En26B8AV2UnGzCFdMLkM6kDiFeCNfqtPm5c8oW7BtkT9JzHq9A1QJ",
  "key28": "2tqf9tfqL3tY9A5BPMNAGHeG7Wdp5LoGUVoE7eXUyRcDinYKob3cSEagba17kqj3tuB6uC9be1CVNtzL8Yk9mWXc",
  "key29": "VSehLREPAskSh2gkrXFyBknTKi3CMq9v2Lpr4hGyxt5V8ZYVXS3H4me6vHisc4ooTmdY6ybeg8tTuwebQ8hRCG3",
  "key30": "2yVnoq6SSV77KhVFvi5MV1VyXbeszmrzHJDGZ8eQYQkTeWBpD1KoG87gQrDau7YyUDYdFpN8uUc7dCwxBcyGr9UX",
  "key31": "2WyBdEwKgHhSVhvpib5VDzsG84H1fcC3Vv7R22G6KC9iADLpaBNtAbdtRFCiCzKBRvuaBWESUwEPwgtoNE8e5L3z",
  "key32": "67gjjLsYtPBncig6eD16JfQM69vYiQo1XcDQvhsPz8RmAV8wi85UDPpVpwwraYcEWztX5vHu8GmiDctkh1tBMgih",
  "key33": "5xiyXLqH1snU51EcAB2FQLFF5NPE1PJfRQgo44GFm5n37Y4ryufGzNRU8XymTHy8mSJtBtXbqVGoBkBKFZnnZRUK",
  "key34": "FYqMt2jcXseV6aUnBLJVXLudXt92BVSy3XvhtAX6oEayuzQTfGDUc8do2wNayuqt6pSQWWHcFmQy9ZgrvYJRD75",
  "key35": "2AJbbRy7jRr7ZLG9F9VTZV4SC3dvCNBudmojiVRrLvwdi1qqySxThZwzoUENuPaKXUvvkaTXHkwHgXAwwtMPT9MK",
  "key36": "5wfUyc5gnAr49KotcRVh5zkbQ1Z3u4kYti8uGnAiVEJyxuDz5FvfyrhzNcM7ToQHH7D2oVjc3gEE1h4XzgQcvYZZ"
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
