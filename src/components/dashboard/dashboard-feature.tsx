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
    "5VNv1NvKqiSTpyPggwdhzomyNSqwiH3mhp1UnCVRkRsYTRPEKg9yEubWahQbN3oxXwhjb6vb5KETirwSx2kmdjFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwKzfw8amZDATM4B38pwZkFaooBgsnyuezzbU4sfrTnysN8jPNvihAztT8pVUTwjsApZ9kiscuhiCiVMF4denUT",
  "key1": "43gm1ftEX4iQ9V6PyUCsS3Z9SktYG8VNv3GnFAixHifKW7AEGfe6PFSyWr4yznn3kRQHZvUUhA87hVihgoBQoxX",
  "key2": "iARHDxbgVMRb62kbyhU25wEuX12zMZAri61ougCT3ZS86ZiZ6A4cj6qFKdkrhZNJk6B7Kxvh8T8Bg4STF7dd8ek",
  "key3": "22RF54PPXfoGJark2Fvix8LKmdngB5PETdPiuYUKJ2kD8fJqduyNnv7Jg3o7S4KmXaqBbEEsfkYWjpmEPdMGNqV6",
  "key4": "3NeXUzgUFXQePnWMs5wvBULgbv3VgCwZhXkUzzPboX6n4zWuVt4VzNGKBrxWFU3KHK7LFwsXStGBvTbUGz9faQhR",
  "key5": "q6VU8qiAiQq3rrFkyJRqfBwUV9wJETWzbRicrtNJfBg6hxfBFBjL4YqEs31RSL99EznvC6zwjJuewVs6fLMvQev",
  "key6": "2N784eYj4EqBdXJzq4MCWTkEyWR3oGXuLn8PiK4Qvb6DGTAaYXSrE41h66kUAqpLR1p5bVrq1r4MHMAHMaYK6MMg",
  "key7": "31SMrs5mmzHpqQLCqdsQtNB6yQ1aYtfarjmedBpFbKLJbeKFo6P7i8pWm7kFxoSRUoYU7pJEKmpmvhu6tHdEQrS4",
  "key8": "2w6DdPmmkaZbeJ4ZfM4Xei47Jq1N16ghGe1zgSX4gc7eovkEkbbiLSSC2RNaF5HHAKnPALQ7qjRPJjqmqvcUUQKH",
  "key9": "3ZvPGxJPhD6vNyibpuazxzLPP7qBDXBe5D6tTr4b834ngmwCPiEoPvEKx89MDjuaWpK9ssd5n3g7QhfgGrDFCzQ4",
  "key10": "3QvvxreCkZ2Ffy9wwZLV5RsUE6DbBiF8FWM7NKjK8RcJ5nPrCHVNCTMQbgD9bnQWop7yM4W8H1HMc96TwxiBbSMq",
  "key11": "4nT9eyYjKCQWgpG7JFWRQySew47ikte8Mb9ZfRHrVrUaUugNmah1Y3wLYX7UhmdY1aBqqQxwXfWgnBma1pTxeFf6",
  "key12": "4Qf9C9UNSKNxLXuiw6sDShTDDWqry1HqC6sKTZcbaqeFxEK8KCsTDFDL7KP8cW3JJ7KxHdSVb4qMZDT2fFCSRtBA",
  "key13": "2hDDBfwTrMnyzoETPdeCKXwxr6TB4A44rateBbgKHhwR7NgHqXVFA96iEzgEnEdwkReuiqUJjv1wqpbQmtmgdRZ2",
  "key14": "iZyH7oeCC7bjAPzBgQSgouCgnjA3PWRMD89fxZk86vYqxN7S32Z4rfhsKxJAoLQRYCMAoHoVNrHw77E7UQqNfcr",
  "key15": "6ySvjkY3evNYRjLWK7AWFrTseRLYDr9vu93rwVv2M77H6vrCwer1wqE3BWarZQpebmD4NgLeE9idkLShrX4wZZF",
  "key16": "2RnPqVsfNhk3nwTTPwkfoKCXXfRKuLEhxVmmQT8JsVytuA9TVdEXLARohScHHNWrjRuDo3a4RrzZSkXRGGmHQYYh",
  "key17": "5sj75Mdffzu1AvR4p2kXyPZJaSVMqg9MiRnWk7jbNnzRTyw4y6wwMnp1qsPv9oRwodwZyd3vw9nDmMxYmZ6vxNuL",
  "key18": "2bE6W9fkMV7G5XuXTdDt2VaqzVzz6NZzqEkW5hKTEQSy8N2gJb8RrE1pQ5TvnCqMSEpsvb42mXCBmX4g2YP4jdnL",
  "key19": "423HSrPaH5MLUjdQTKsoGBwYSRuLfRhAj7CducDwZxRgraGNkh53vbKXc2QJZ6UscWQ9mcbRKX2cpWMjtvAH4qVa",
  "key20": "3iw8Y5BChkvbFLCDvXQLLJELnNZcPbMSp27gEvUzv84ma6g1th9rSbHnvar5Vu7pQcDpYviriYaHRWJHVhZ8BDfd",
  "key21": "47p1YSmGbEUZf6PFPFiv5AUDtq1FFQcgrykQvY1DxyMyN4WJr5kHNU5HdZMCTBqvEv9FD6EC6xpXeHSmqTpw1EQo",
  "key22": "3QBYgamBkmdNNa5tzGM4e598vn7MnDcXudNUPoBkbryj18WoYRRB4df6G76ci4bjsG5ocxgajxcHg8tx6bnixYjN",
  "key23": "3DRBJgK1DqPivKdxqJh3KRYVNk7Eu2mr2oxm812XizaW5X9hHwFFnf6QKrYCuBxmUYAEXVog4pfGvF4n2jQb7MU5",
  "key24": "4tiou6GCbAdsbYjbXqnUj3yq1HGQ4SjPUoTm1h3r9rqgHZXjqojcGrAv1MYPt4HQAJ97JLa9gTTsKRX2Gebv3FQK",
  "key25": "62qHX5zVYn3tvJecTYMcMUE2covgBUA8BTnC8k3Csc53BtYkMA6w46gHNvz3bHuyEshaM1HsxmbQ2cyQuaDaaAfH",
  "key26": "58W6FYWSidFSPbDcghiQE3Y4SMYNgXufoMondr8KgsSVnyouzSvh5SAwT2Tg2Pgo3i3278GZbEXxU79biWAzdmya",
  "key27": "3c6QfogWAmaKs7FZ822hV4aCkhXMMsoo6Zy8GaTi9UPQ9YiUg9mACjT9pTEw8F2yjcgvr7jKZDNwz3YFNrHtiNrX",
  "key28": "4FDJt1hoFaPh2uLiTQH8h3R72Ri61LwzuyFUFS69ABe4hYfCymdL5VEZuAsUytWgS6T2mQLSxmKYSBM8aMM5eWTn",
  "key29": "4uBuiPMQhQSiMQpvZSv1F2i4rxnf2bDFxx4MfdGNVVWCuAEi25staGSBvcGrwnCLyQbJGcKpaWZCkYUVni5aWYwk",
  "key30": "2vTBBrLJTaqVikryW8wgYGjqsnhjFZC7PMjSyBc861LMbchXzx9sxAcj6yFPzSHhvehaff1Fiiwc3cTZ1xomaChk",
  "key31": "3WHYfMDdboPs7jjUDVYTNWA36uy35a6WMdZ5TUiGGQXrkuQ3QZd29kQ9Lid6t9b3nE1qYRQTSjqVNTAJniKFXVK",
  "key32": "5oQAspHewYry8Zt3NhzsqKbk6J9cEPvDpcmYgT463dK6ShDo1HZsQvcrFLP24ZdgE6jzNK4pv5Cn8Xt8v4RRnQ2e",
  "key33": "63UQvD74MaGLfDRLf7PXrwkvwbxSxAPBrqHokWhEgVZcvxMUrDEzHoYBdRa6eXYayfx3MvL1EqR7V76QnzJddUMB",
  "key34": "4HL7yaNZ16q4ZvH5K7XCGFgEQgJBNenpnjcfEV6h7mFYHNF43MsRind82rHZ37PzGk4DobqH83HqZAsnxQ1nCJC1",
  "key35": "32vKkvGwLzPpHEMMjqkKLPWdYvNVL2G2z3nD67SmjZH1z3gdEdsFZiKMyJMMX253pRhZEh6FbdBfGDet1yhpDT3p",
  "key36": "2JJr7oQrgVg9W1gVutUkzUSdXi6dZ3M1DwpBmBRs6WfxV7PwkP6ovyMvAZecJirmqvgH1WVgSGgeN1LmiNuMrKPW",
  "key37": "61TzEZaK6yJzoEk6fmi3zuiEBGuatyUtvW7ksCf1sPuaHcUsDSWdBBnT44Ff6cZog2Nffk9mVbpPhbu316DPaX8S"
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
