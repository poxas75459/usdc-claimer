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
    "2kwnT4PMfGYfwAjnV9XwAnNtdeve21QRJUvdarVsSKQFwVvR9tPevAVkTaKnCCZkBmtuvLVswZULJwU2PE33Z5wK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGbYr7JruQ7xWpzYjN8C46cqBpig2jAxt9oZ7M32EiCrLKfbuYhPftfKZFjPyowBnbEceSV68pazhjyvqQPTY6b",
  "key1": "2M1NwToNdLMQhrczqvXbzUPV1fZbizuSVxXJW8QGs4tiuYMvDgyqunvYYJfoqSwFFZEnrVPZR7LtxdzzbGYFLB83",
  "key2": "2vRPCkozz2mx2mYC6ahXzDKgRjN6QRwoSEqbLsDtthKFP5S57Zf2AGTQm4SeZYq6p5ktAeJRGEAkuhqGvsv8nmy9",
  "key3": "5gBPtC8ZJCDETmLkTXcPXjjJ6fX8v4ZbRtAWY85tskrheG4NvBfsxEhobiJYwVtzAXLC7F9ke4mwTEZK5hvwZ3Z2",
  "key4": "3UdxF9fmFDYUa2S6FGi5Wed6FxkHQxv13MqUEXL2A13gJKEMLtBtKHEyHf7aHFZ4dUXG2fHwUtWayN9y2hTUweuS",
  "key5": "2y8cmDb36ZTa2mHHdb3gZDfnzT8mfD7YwfgxRjw5VZc6krcnPRLmz6DeqsYNca5zHVQsxdGrRLw4a2jiEEbe4FkF",
  "key6": "FBrTpgQTPmMik1MCRFinb6gBefkHNPvQM1oSxioBQtT31JD5hyyGn33LevhqeCtMsU5HoKEr3WhgTcAvEgsNJBs",
  "key7": "4u1S2xrhWYhNkdModbudC48JumHDXjSPvd9G5rpLiVUyYtfWZAudu5F6RRgryHfgfbLXVbndRhmtbmrHnd2wwo96",
  "key8": "xubDsAi7ATMgKMAmSRXaUwcz35zD2Ly2sT9coTg7Cw98WQH7q4Kx5qq97GHK7KTtsTKLoYj312qczQxTQ5PYNwo",
  "key9": "4AGxb5s5UFJEYWsp7Fqi8oTauLgDGDANq28jQ9piMxjfu3SLMxhRVRvm8eJUqKo879YXiHt3uKtxtz2p14udRjgx",
  "key10": "5jnQKGvTVcWz2iyYZmKqGu2pJtdYnpdrPjojCEFKmt8zHtYcwxTXGUhUfUkNkRtFbiiugiWY9zPRWXo9aQv8xTTC",
  "key11": "YLGFinjoEJdqH9nmmqhw8HrMyMUr7JbBdySVTirTcZCAWhxug7XDiaKe7vwqPb5B4oi4KgYZ69VS8Usf19pJ1H7",
  "key12": "378r6qoyri5TkHfBE8fnoicPacNibwBizrgAuDHJH4aNU8ZPa5ryZC3EKcNNYDkxUT8UFAU3kV6PxR4uyWYWL7RQ",
  "key13": "ZM61XaSUnt2aMUE5tQCiberGQX1bK81aC2WGesxad11vTEhrBigRpt8QdDc1EhHT4qsaVEpntxyNL62uyn1Z2Pv",
  "key14": "5p7HrJ8GPbgnSPBcwRm8MH1ZjqodQTMJyQb8aMEhgWqVhTBwtD6xjKyxZsxv5f5aTXMPeUsgazCqpJnhxC3XGtM2",
  "key15": "SsmpKTCZ5zgDw3nz8wHodyZZ6HAGbibR9VERSjcdVr5AXowiy7QFuVXamixdBDam2zzD4K1BsiLRfXeSwpxzcGd",
  "key16": "3miQhS51KYsBotyvKnsHXXqC5cy6QrmtpcWhkTTGGUeAkJJdva7KwjhUfrp1rSGnsMsyUY6WoxmiwsREEsN4J7Gr",
  "key17": "3J2fhG5wWstU5zf51RPfoopVF7bDVwtM8YoXXBj8cZ7H4j8oqxEKWKfQpeLmb1KYsbZYWgHMHxQgoPpkpc7mBHyL",
  "key18": "3So77yuV9Ntsjeo3xAyU6wJ5D4U9HJC8Escj9ig8kK8YzSF3b1yGmjAbEfcDWpTsE5iJLQTN1ciKAgHWKomVyP17",
  "key19": "58n2GKy8M9SECtvjNTFv15C3XEW8xAZhLK8sgJXJZLk2Syr5FKL3vHPN4QGokJxCNkAoQgqnS15Qqbekfb54Ktyg",
  "key20": "31BpeBBb9LC9xtg7osH6bPznDW2i9KDwFvvQt9e8hbdiFqhwwTFUzFH6zVNjX9CiXf2KZcQKhUh3cyVcbynm5wFx",
  "key21": "5VVGMcRvewrpadL2QcdLHk76pwxvjbHeroSWLJKhPTHBArPAzAXDpPa2Gd8BP2CZhb1mMhdy3UqvJR7Vmdhu8pw5",
  "key22": "GmC1xfdEueqwreRMbTPtKcLgVUnBzmXwDW1ZmAioKGf7EqSmAtQ26V6ETcD3EvTPXMPMRTjZVmuTGz9kw2BYLn1",
  "key23": "5Pz2YxL1YEhyrk1kVLM1nVFECCXULqZkX6RgNjan2ouJ2K9wkqimQe2scBE3qHEEoSkHSrqmeuDdmBvVLyTNgski",
  "key24": "2JbKxXSeDmJwWJ4Kzht82KCSeeCBtjseh9onXfrZ3cc27zmV8KPxFo8bwLf5rDABrTB6QnVTxsrEgNwwGvCQohxM",
  "key25": "4bvtmzRsfJBkzLTEFbXjJhhuePcvdzccKXkqKj4YK56hgunHoRxPS7Jqbvj6cCzRDBYHuuNSbZmNVgwMDLYBufLs",
  "key26": "5FKGbHzzSHkb6UscTedeNfekPK8ocCQkqTJuzg6JQpcHtC9zuQkTtvhtRAn8Nm8NBewbaZs9ESUThiB6HWS3Yz6p",
  "key27": "2qNvjvbRPG69DxXtWPgF7zXXbPBvGqwtysZyP7EJsb7xnikrKXYbP7srsezbz8K3Lrn1uRDDD1rviodqtnLCjxM4",
  "key28": "4ir8nTmzfoRAbvCeBNZsai8JRLC8MC7yrRMvwsJ5pyzh3qiyJCsGeaMtwhTJfd9trTeru2SgTnUtHCo7oDt2EJ9U",
  "key29": "26Rf9mdTKM7izyniPGS5HqMw6hnRnW2CyNjAtTsdvY6VeWm8BYY7VotDNyxWYY6MCpFvtKMkL6No3JKdGydARQB7",
  "key30": "4XCnYRJjjE19Cj46oMPws4V2CVNEsGJmwCeyvVJWidRcNnSiPe5XTvBrd5MvdH3gVqBw5z5zajmWBuTFgtdJxuFL",
  "key31": "5vTVKW2n127LrikXEkK3qfqQtLRgSpYouoGuNwYh652MLBkkMyJWgnoqgfTqckZSppW91dnYT662Rq1MtHWZxVFZ",
  "key32": "2EA5cP84VijiDD8jtyZ81oyNjxV4XuyGtcq2YNWPw7jrVRi6BLt4zQLQnXTwpfPEHuQYtfaCt5ZS6eUneYvzdaZm",
  "key33": "5ZekAK4RGHGgPXDXsymnU5db9A7eyEBWnkoi5qNAPkcbqdCtFsJqvyhbSt1aRdWEEZneStZnUogcZ2NVnCoAq3EU",
  "key34": "2QE6hUiqBTDAAksHX7wUtCuprFHeHF1JMdHtd2DqzBYXGXVH6qD8VUnenbvjKRCq7vRjZuABaXsdhp7tqA8rZogG",
  "key35": "258i9mUKXVF41aKXZUfVanSiuZ4JibXT9QtmfEz9sxMwVRAQ89tigJiBiTiWJxSSY4E1cwYQYjFiEiREV85KmefR",
  "key36": "B3V5sAkF1b16UhBbt7XQr48ANYd67HyQT5P8bGu7d9Z5PoapM6P7E4cLhmhPoCmLYUoTW3u7o7Ei1nNmpVayoVi",
  "key37": "5ZyFLbUo4X1wAfM65c3aUxJchukhJeFskvYuGN6ZKW2WYv6VpGAWSAnbsyXEQ5eaiWqmRt97VL8Ky7RYnYCAM4wP",
  "key38": "4DnN7NvUEjQQ95Q1mhExhe4LeWFLxosFsurdi7jRfqPk4qT8VP5vdniaaYASdvWokesnJPKimseHXzz6okpiBwWx",
  "key39": "3mykDX25oyVuTyv8mDoMHzMPGc7Fhujj7mWHgYZsjc2PsEYaSNrGXc7GeL8KGBk8cuV5S84NJJvU5gvD6v9ALTMu",
  "key40": "3HX1rC8X7HnJJVGw9HEbbWjvcn9XyrRAiaJSLxn3gifMrhmDCrKZrdAhoDv6PWaNhiJkHFWRxRuy6rwBFFCb1Q4L",
  "key41": "5EHPCHA5YAJoiCNUvW4MaduqRCgfQ3zZJn1Nzrk35tQ2n9PPGKMnT15yjToMeAWNCdi5WiZfR6Yov37CxwPy8gTD"
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
