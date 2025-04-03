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
    "5CDymTcv7hp5M5NjRqoe43QePnL9vuTRqQKHh2yKG6dYxEHTbdNranSLDrX68FG9SkSyXJRJmCFNhuAmCUBzRLBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zvxDYsDTudNvdu7s4c6fruFo5a14MgAcH8oht4sq4VVxsroLRRZ86nKuhEBgsmLBzpGiFDrGgmVa94dsHzofjfF",
  "key1": "Nq3ZYMDPZiR4hB9YqX5xhdruiRETAKoMX61yunFNeqzfLiPwtJJLE5zw3iZaw6MMf1oFRqkXzPnk5jWHEFrdB8R",
  "key2": "4hGBnoKwCmhtMeoxJyW9biXUzLXs2VjMXaMfweDcWRpf3mtYFKV9ZvzCdoHNGFSbumgLLfxjxNgrAfRPYpcedM8D",
  "key3": "23eyZX6zMqfSrR6tnbqAP43YaGZkHZYsBRsX8r56evyiudbvhcVwoGt8wg7TwQLb4W3fmcLQGzCZ38GbGXh2GPWw",
  "key4": "3u9QTdUcZbw2JT2RJWvytoNXZceZzYUWV2MKvdnVSXHoB4D8jhsinM9j3bnqtgrtCw3bBEdUJ64LSoi1Bx52LheN",
  "key5": "45JP4N4Tjs1WLAvYNtqA7DZ6x8yMVjQm58BtmguZXyjXeR9KkLry6NLHh1tBSqsv4PDaf9KvfT8TsMN3gix8onBk",
  "key6": "63zGmFgTwX2yawWz6SUQT2TRif8sVPWETTYRor94ZVZt5QTB3cfuhwBaG44US95e6tKy3hYdtbvg3FoAJp2Byemo",
  "key7": "4M3w46dDtdGrgfqCCa53RX7EMjumsFcbmyUF7pjUcw58WL5jioGHunmS1e2HWnDy8xDeKHtwTxYwHmJhFcsTug1z",
  "key8": "2T5udCsPu7r7uxg2kyK8QqpDgFDb3Vm5hpzDGzj4BDE1emkCeweSZxdjrwjcyCjvWTib7o3YttUiiuXuQXf74uQ2",
  "key9": "3HS5SC64mvdkc3z3fx2jug4oFa4J8P9kMXarfAv5HyAkenZJK6wb8EDC8Mo9BJBPSc6geHdYQ6uEGBjM43CxzvKn",
  "key10": "2kPabD6mNTmFV2KvpAF1Z3y2pNcs2PrQzK9Vrwb4vNm2Vob9hB5LgpDd6FG64qbVNijcW7ZnX6Gx35gxTgovfiYW",
  "key11": "5G4nsNWGAkn2qDmVTzHJTjJ2F9P2WUD42bUEFuR93BQVVortRunciwdQrE6vWbgCMJ2BUmFyLZ1AxegB7N2WhKAj",
  "key12": "61K8Vak5cnyZdqi2FiwcratRXmBkFUpXWxFkeRAn5t3DRyn7XabnrmnMUta9X7BYJzcKSKjgvf2kLA5FFyZ3mxDT",
  "key13": "3DwAhKqmGRvoVtq4uzDXzF21q1JmpNT15DHhcXo8v4VoCVCZi5dS56U5eFYTaqtcoFWfTJ8EuRYyFT5bD1uBKSZ3",
  "key14": "33mJ1VUK6EZmKLbwDJn7eYJRDD518xqaPfuQfnqB5Sn9iHuXCwxt8WHHjPjSwn3GxQEdoa9FvFin6AVq5g21LjNm",
  "key15": "5AU98izDPon1jwACJYemqFgTfFzfzTRBwYMeVKeLqSMTzQGZMF6bdLU55Mkf3j67M6FLKP2bMPZnd1kqk1TjEw81",
  "key16": "3WsRTonDs7GLMqExzdNGzxeFSarTx8TQFXPhYk3yEDxWZ8HCnU1UhLubiTcLAMTiAr8q3WQSL2i8Uf2z4JwgbVvR",
  "key17": "3YAXPEC4j64n3Z6mFb4zaWqADhvxQraJwtxuJuEFxDMACD8mMrkyjMi83QuTnTYze84tfvwKigSqFbnVYCWEvEo3",
  "key18": "4SDG82E5ad2jkGPV3FPANxpU43Qph74Bs94aagTqmLVWMmwq2vCxxKdiwDWR5HnHYjYduFMofVuqGvFYXcnanUns",
  "key19": "MiAQ1KQWEox5zvTiBVsyYDqJ67ruhysB8bP2YcpZ4ghZeh72ZdU9xMFs43ovTGMHbMr2zj9ff8xAjnJSQHNZsRF",
  "key20": "418SHeh3gFVQTzBQ4EdSS6rs2XWg3rDUTFNSYbjPLLyJyyyb2CFVqej8cnJDZb3cNkvjoCJrLzFNg5ZYXTg9djUq",
  "key21": "23jj9EAxLF5Z6TrJesqhWJTu2bXxRTGqDLWZN23dYhnrG5va883uETjuzLASZUeiURud7BNoQQxWnPwJKWXZ4nnY",
  "key22": "392JguhL5MorTEHVftc9VWZ43QvA9bYCzBhssdifPBGJbmjaQjXAAz4oATqpdwDb6o4qExoizb1WLRuHE1McywXN",
  "key23": "5tKmW3M9181BfdQCjR7BeBBXDraLyHBwUBAoBoNgFmaXnadLkCzt96sMhJ1HJwaCvHj3VF7BijJEQ37zBz6joJEx",
  "key24": "3qkuMvdCqPY3N6cJ8APvA9LJsihjR7fiK8M9VuWrRiUVD785eYmapJzG6Z7ry8sWTE1RkP3PqsKcBRdHjeLxdnNk",
  "key25": "4aYRe7rgHUUcBm9nRbQb6ELXShBfYFXcYB8SqZZCbajBb6xHrGsE2c9VBQ38EATfFafQMHYhHxSpWdXNa4CS4dKm",
  "key26": "5RhzamWRFVARcbqRDqT4Hv85A6HT1EJ8mYLeTCQ59rugrhY6EwznGBTCfUcvWvs3dJBzEG3Jpdn8aZpBSXQx9ffq",
  "key27": "3PZ9AqNcdimk2XG1Y3dTQcPpJVTeY7xzcJNyqhQ3KexY36aWZCCT749LvauNddtyEt6eYUuEpLvhbMQ3Ju1mLh7Q",
  "key28": "4AjpGfW3nvDSej9PRKVsb6kf7QMtDVnXBdNGSr7SEtA3Af8XBEFujHdKcVx9mGt725Q9LWHUATxMmGHJ43Krt6Mw",
  "key29": "5ENUesMnpgGxcuNqbaKu2tuJyXbKTGHj2qdXB7TFth69YxXFwmH1eV6D3Ty3RNotBTjT3kUhEr7gjKuvdA9rqH86",
  "key30": "3oaqgihqhRkATNSSSsQXHuKYKG6tg7sYr5oUSN374iCFqPS9XWgnhncogWAT21KQu3n4tQJqHWN53mcdAEbFVvsL",
  "key31": "2xi51kx9LXTP7wcTLE6ax6aGjpHiL9EaXP9Sks7BNJtwaXEsdJjueWU7Xuarr46np9w6ziNMnVbVnaMPHQ57Fkkw",
  "key32": "37wpFC575A2656ReQY9HDo95t1zjGxJa1asmuZR4CQfttDB7yLndoyvwQNeMh7MgGxSFsiKC5EguzzrxPuAjNssw",
  "key33": "5J9YxfnbFRFRMSZe27YqaecMaJ5LNYXFuXfhuTbFJNfQdwsnS5LLpuvsDF6TcmYQS3bsXxDSYsRPZgbFTHCZxwWd",
  "key34": "29c57Z7LknbLp9EyYTq917NArcMG51rZtXWV7qNkrm23yy72eQeVvKcjWwFgVjac5Hk2a6QCtcnGDpwRWfvGQjEN",
  "key35": "2DpmS9S94PnP6v4vHKsQqHH2cdopCtw9ATrCi4nXT9tdxS2dnNvnkwpZXuFNqoaMBDPLbXf4HmbbZqhiTFf8BTqo",
  "key36": "391PjVS6w1KmHHgvFUbVy1sfqPrGw9AFLmesxLoLG2GH9aaNy7JiYan6msfJ1kuLszYZkSmXqzkPmxbifeDoFENo",
  "key37": "41Bvc5zpxPPrHe4g7wVLexgQpkU6ELNR9Hq1rB6tqTnWCktyCgDS8iWxkvRVC2TzwcutuvEbzqm3dggsrMXeD3Le",
  "key38": "4T5WHC78U4jM5v56umnUF6jpYMNJA1nzezzNHr1tvRWHVs2xJpDzMatBaxmuoWk9Pzp6cJMxCpUVZuvFuvJdiQNH",
  "key39": "38YoTzaNzyXionQFA4TKCxvWy4BGoy5929Ukx2fNg3yAVRGN4a5t4ybwwi4phLA6evoWNmurRYETfhFUjMXWiNfn"
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
