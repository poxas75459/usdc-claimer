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
    "5TnbPHgAJ5H3SyJnZocuwmhXza6L4mXu8BfyokEJzWWtk1qKnd67E8VZrcCuJActad7z6TxY9XGVsaV5YX9Xqafy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cynkxcFoXcRcm1DT4Rw6ZLMRH4pAkT3yiHYhBcf8MNVbYRYmf2uYezwSKXQF73HSiM6sj6tSa9imKBNWpYQcYCo",
  "key1": "3FrE7BMsWruSvYrpzjh3QvJfNUDsGMme7Su6SvDtd55Q8vFxe22mybCfxTGNxS17vc1tXFSRQQsauXPGb3pXAgjY",
  "key2": "4DoBstk857XhNdCsRg2NZj7Dz7obbR9DQvTZqsbgfqw6T1kS8GaszNLDT3585MJ1uuyJPYLAkneb5n2woAGD6Gkx",
  "key3": "2f8AmGJFZRSYYaeq7WhxaNbdLwVGtdMYxmU1BjW51xvySk6bKgsezsykxoKh6zvfy3qFojc1jJxLd87xtbEF5aGM",
  "key4": "3EGTwDt5x8azTMZWtc9xJ5Y6jGmhDqWvjyXJiz2MCxucjStgyfKqsQC4A79VzVNCG9VPBn1LF4LAKedhkszZBDcX",
  "key5": "2J9LqFSDFcNAerB5WG6bMqTyXvCBNzmVhvgDbxD2uuQjx59zMZHZXhQ1FogujMPF3R36jSFP382uBYgBRPvTfFbe",
  "key6": "25r7Nki7QRd9H59zYu3Guw5HEsBBqyrXv4JYsaYrqdqVXfv8iBMkUd3W2crVd5ZdxCMuey2N68HY4EWVRFBFigQp",
  "key7": "TpRoY2CpQk49RpUUX6mbTMwPcxnYt5x7fv6uCa5ni9PANfDhuwLEHuoGjrJZA8AhZdaPGCb4wpSDbjmUZrjMcxJ",
  "key8": "4TtrrvNsVFz9MMXmnHgQS9JzGD3qeS1MXnRr3pCfESBQtFCsAN4hA9o3svLhRvRaYHaGs5V5Nn7tvwPX2zyzCnj6",
  "key9": "2mcxS47uWeQ3y2YCCcSAXZs8N4ny9RngcU7RhhrPEjGM9tZcsQg7k3XhJbqcY85mqGRjWUgay5LrB9nFFeNJhZ7A",
  "key10": "GggjkEnrNej6VVzUT1ps91ysLsfvTWXLF9phw7cx84mf2X5ZB4csc5mtF7cewRA6kpNwEpHrEbz9TZdU1Dv6E1w",
  "key11": "23yRGe82Ve8hz26UogbrQFTy3QL2fGRoPwCCHffadysmdGpkiK5ZmxZrR6iA5aVTHFPV8pAwYPR3HspkeAqmgdJt",
  "key12": "2xhLXWV544ouag7jjVqk7wJdxp3tn5H6adEzvBJvjRrAKUaPUBGNy74sx3Nmshdn2e696N9UYg8bKsC5Qr79sevP",
  "key13": "5Rr9T7Da97fVnc1PTx29nS7qpx6RGeXQk9V9S5KBk7RYUgR448YqGxEm1LgsKXwzHFcS2jPBvHoevnJUzPDT7GVd",
  "key14": "4uss1xhEVw24Q5u1YSFPLcmY5sB5Zmnh7MEjfD51T512fWqRrRhfLoVnrXDk78sVRP417HAfiZiuVWcb5hA8uAV2",
  "key15": "3cZxgAVwsBNeWGiUTSz6sEFdDBvrJwet29w3UH4nkVuSyZQhscL4utKTJSe2fsjCWi9GFvpS2iAQ3ShmAoGNu15r",
  "key16": "2M2tS9PSQqEVb93i9bDGXJLrCA9UoKrba2c5YeVXNE5WZVnz79yHXD9D4S3AviuQDA9ViDD89iStpvqvQEG15c5i",
  "key17": "yc7Xk8wA1zH34baZtuju7rMXF7E1pE5xiz8vN9mQf6EfPJFj6rRqr8iu27dNBuRC1wiPkNmpW2Ye1xoQYLWKTNr",
  "key18": "4q56Y7HfqNvNfHUfCuRkfzuW27vMUhheAotcdyjejqqvUR42mJgaWWwkdg46XrFPYrxS7E1oUiuZdxsfuhM2PxX5",
  "key19": "5XJaByw1sfk1VCvhLrhKZmeYAanEy9XSgCi9KRckizNAjoxYD5mhmrgvoRZ8chzrmntEXhZVjxMWhkdptqoexygP",
  "key20": "qY6XgyRsjYvZfbA66Bmvb3DcFJmGkJHkR6W6dwZx9evVjbf1y9jzELKvLDJyySSJmVAxTVxac8Kt2PaaJiaKb7Y",
  "key21": "5KSqVftEBXCqSoSGxSCPMVuXxFPzUjg4iib9mjmwr8Atytks18TqQXVfqqbvh1JadrqKptaJPBCZMCfMWA1BgrAg",
  "key22": "TwhYwveSs29FdRJhofxZNtD1e31kiximUmPS2ah8Cc8kqpPrDtNB85ZTMYJToghExb5qnSBwLpg4dCi12GK5bxM",
  "key23": "Ht8eycxWKqVvDqqWmT3imG9C56iAJkpMcX65MfQXkT7U6kLpZcXotjcPGepdmuMXSMwnmou6tNKjhTJ98iHoMXA",
  "key24": "3vUfsoUc6A5nPFp4TU6bRf1Ccedp5Qpcnd8rrjptcN8yKGQK2gkWeap4ua4cdEvV21ChHNNHugB4rj65ushYd5JF",
  "key25": "4xnb2Qttqj3WrW8MtLSxo5FhPeC3uQS5KuxKbcuiq9EF8avhDeTeHZqVPSPTstcLquGrFn3rSEbNgzKhs1Jq2TJc",
  "key26": "5ktvHuKe19j4V8GdPPKxkC2GYdt5sTYexhGRs76bsGTDKqLpAtguqa51hHEdC2smnzVaoW9KQ9J8ax1wgLTaQheL",
  "key27": "3Y1EWeJYEHFH6nzXUKkrrvybgGzuPycfyGcrVcesViqXLXAD8WXhDHZEKu9JdG7WNbMQ5Vr4J4tmUCHgX7CuG2WT",
  "key28": "5irvEgAsLxjU3ADALrh894ipx2ZtE9aP3UwvkvWst6V9bG2jPXMQLWRHmht641AVb8RKZm2tSmKnU1obD4iifvsy",
  "key29": "61urbq8qxt9jqE9Mdm79jBUd6KkT7FavVDWysLNQtrkPUA5jdPna3mDNdZhr9FZGLPTjouEtYkk4MYj8Y1aQPDed",
  "key30": "3gwNCApGPzXVpwMRtgwG4nkBNjtGqT9DmLTcRzCqdAa9GGnc67gM9p2eWgqzHHcbP4LNdX8NUaETMxWKAJQtJk6N"
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
