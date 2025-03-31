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
    "2ejRW3VUBUf5Sqz5AdyyF6zv3ts1EHN972QwsnJaLZuMz6xwXAmmWJraGVvus84Kc39MgogWqcs5ggcckpx1k9ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xjngv6x15rTcsmqytCwom5aumR3tQdC19jpNtjTw4kuAQ83qycbCYyG6aXg3UKjswLFVch235YFNdaeZwU1aA9S",
  "key1": "9dTyMmGGCvecc5FzewXjrQc9bE8haPWSA9vQYTrzoxwfrh3Gj44JBb1d79JehZjGbPTGArpFqsSmkugt8HpzHmZ",
  "key2": "53gB12Fw5GV4psZR7G5PAju2v1mziurR16E3CUgqGqeeNCXYrXyyRaWwuACs6wbhi6tj5WTw6qoPNqRRzdAagXaj",
  "key3": "41gPLefbjEXqqBkzDcDNzvQHPDdiMkuDWoVhZMoHFhcv2hMozrhq8PMRP9wsM5fBJzScDwCJ1141ze5vrfgHqChs",
  "key4": "WAtZxonAA54JPPLjxkW1EPMqYpCj2TwLzwGvhYtEzUSfZykTXSZgCg2SD1WT44nprMp6BVBCSqoypmReBmy2UsW",
  "key5": "54wegD7K9ndRecZofZ7qgALrRahZG3DMqbDKW3q4iT3jBFpfZi44drDUeBmDjCakptF7rqJQEk8kURaW7UnTKJQQ",
  "key6": "2QYk6ebLM5i3qBiaX5Mwb9PpBsEZ4JRBWFtAncm7k2CQmcASSXYXa5CrU9wTsoeZbjghZDuuek1X3tXTnBFjUzX8",
  "key7": "HRPpqW5NKonjFHZ2Ns16yfGBBgrnKkAXLu9hEz3fHyN6Egn5Bfu6dcFP1xRd5NrXfjpSartJFcjcKVUtzQRDS9b",
  "key8": "tmFjVrfxZNP8qLnhQESvjSfFWmEDTNZSy9Em1tYsotHY2HkQGm2upd8wKLGf8Zd7KztxtVKDkvEWdip6pFwsVrr",
  "key9": "5B544jHEiLhnTn3smV8tnMNHenMumkutwZjDMRmWpr76kk8W1bThGGYpReZSvvXWNW1QBtZ2t1y17mtcERSpuJFV",
  "key10": "5SjeuusnXogxq67dqByDy3CJAzQeR8wyz8H5zFsk1brJbWnUmkGtTfeiruYXddbV52rC8axw9p39vu6WsWJunu7n",
  "key11": "4cghi1nQZgNW5hq1oRQy2zENAhRQK6LsT4fzB2DkTv1Woo9TDYABbH7VQDaX7JF9oCGYFmvATc5bDKbdCJMEQXBP",
  "key12": "67kysHBZK1t6ZYuX2bZXcmfL9bjGHzZSEX3unvrvHnAQrZVQP2MYQ6Mp1qG2tmC9WdyauCThK2LqdEM5sDb5Tg6p",
  "key13": "3s5X4H8i6mXRw9WXH3gFfVj3rEkZAMYoj2xBEXDNaEB1kZtc2HyBnnFbqeWHb2yQn9VMp5VzPgFUNYStsAbYz2Dw",
  "key14": "3FgnBzQeF4FuLqGDMxREvYmWrpYifiNyWxvCBzZHyusQdxiyaDvM25XsVE7hLtJrxjb8ZpzH9M3CYLrgvaUz1V7w",
  "key15": "PXsURDtbbnkRDcLbkkQ1bC9NoKUf5A7XpvREzj3gmLs35w7Rp4CrFJsVQe4MspZtj6cjF3ZZ4qnZbvZn1spbTeY",
  "key16": "4AZx52iMWjqujFNRN4TzKGwB4WjG5pB81xK1hPPpGAfqiN9kP4EZk8iSCnq6uGnY7YsPS9xnWpnj6btPqPt7fwem",
  "key17": "4ZWewNUodBarRPszCmB629WX5kZ62BKYn2qB366jYUScYVx1yAdQ1RSqgXmtfdpthuwGAYPudui2AM6ujaH9LwPU",
  "key18": "3451i43YouDoiods9mNJDzHgEWdYPq36AE9ezH79kqfr18cUxvuy8CfAKcCDBR96xyxhFSu945gXKJfjzXE2HsLy",
  "key19": "5JfdZo9heP5UxwARiVBpGzbnAberbuKesMy6R9BM4Bu3tK296vrRA3mrzwt3RB7bspwHqjFtAmW5Wrthh6fdTHLY",
  "key20": "aGWjrcJ8qYsNKwYEmsmANScSqe8V9Pws5TaFVAmeg1G1LT5GaLzdzkRzWt6UsZYTJiPuDkXWXv2EK7DdiFfYjgu",
  "key21": "TV6dm9fKmMgxxUFHUjUnfsYnJyLMt2pk9Ax8YhHFaMC8pzmREjbFWvLMoeNzjAAvbC4XekkvPc4GTnNzfewSNDS",
  "key22": "5fb2d7K6fswgNZXbkPydAemjJ5D1NJm8goTMB7ntGwYyjUochH9EFxbRx8krHjgzYWsqm9PTo2BRbqXac8WPYwQ8",
  "key23": "2XQJYABfzqWuzZwrLUrX91LJs5CyAmSoQAKPkEHTGmmS31ksmTEYXM1gtvuoJQoeYzm4iYaBH5gigffKMgy2Q9Nk",
  "key24": "dM6HpGEixokv8Up3YfSjCcMcm3hmGaY25TQPSsj1JP4GaQRaSteq65Di88JPQ9jSyQhSQcQzm6jYAsB2pTqsyN5",
  "key25": "2Uf5oPar3cTWaoG2t1PuTrTHwUCNXeYHnDD7QHvvimWopWbzGjBWi6B7BvA3BaeGEkmRK9BhwkNe5PbBv86nQ67d",
  "key26": "9QaVarhyzbCXj5hTWSpxGfXGaguRUjqNvmhGV3bswr2Zvg9Jg3f1HsXFpsMcE984Ee2kWwdmxHHjopebC3jZYGz",
  "key27": "5jcRdf7bkTuAvTUXajVd62EkkrpjUXw54Y1BE8ETZyoPronwCMLLoqucffmmgyjJa74okWqbKPD9bqkXYVZCtYof",
  "key28": "5FTRVGWcwQnTNkzgtK5L1XuyPePg4dfqQSYh7uBHu8wWZvEZuBHokhVDZUbBQ32sWJXJ4cKxc3ny4p3TDDgTWqN5",
  "key29": "5hXgWmJB2yETN21xe1cYCNfnxZDAoB5fhqLWbmW6MVpsU953kpviguBpnrYwHPaKELXrG5ri5JopGjqTX76Ro8XM",
  "key30": "2n2QuGN4kMJdNKoGJP98nugDorn3svyU8mmvWsXLrsvhwhYHbvDAMSwvvRczJiy8A9CFPMtLHojEY4wZSaNaEvyC",
  "key31": "58pjtZs3pRVdef8ehx3n8byGG66YdGeLYjiswdwMVbsyUgNwtrgXjtgQPgwV81it4wh8yqR6UtDqXL8q3B33nL63",
  "key32": "3FdrNRJADdfsuwS97ttuR5srqQpJaHZGtU9UzbgiEWGAJ5DJZQgkv2MvkkscDWkDHnRrwZpik7GHzXBQaE6Cbbp3",
  "key33": "XTvsWfk3rA5kPsKDKozej24q2xRviXQaVfQu71qRMJ8gV8S4TvZ16Z5XdEG3BjBQgSKT595BWrH5Mq6LtRHP5Jn",
  "key34": "367Xeu2Kta8hboin3iNQ8T4WsBXhrjqPkS19ph1JbyyzA9nU3CjmnCFMWp57gs6T6vq2dMstYv7StWCkZHSRm83V",
  "key35": "5VBwDHqADJmSHZrEDpSnKr3DxKXaR4yjDWzHySdB5fGATDET9pgE6Z1mjC5jAQTfVNDxi8HKw9n2WLYkXuaSj67c",
  "key36": "3iJTHYJkjeZ7ozfwjU597pKDqcGzv5uMdXuFCC8mtjyoSBEyX7MfNcXwjaiiVU42j5W5o3Xzz4kwoPnRA8cKFKGP",
  "key37": "975xtsGAEDYqrY7xWyi8jPZq2PE8MNQYTETC8S4LYYneyUVvaCuGoLqqVuU46tPuESYM49nY7oZjGZfbeGGzdoS",
  "key38": "2ANfvZLdjkA7DxppNrgCCuoDdgNndxH3uSAeXkB3Gmn4YsjX1kt8PnNJkmG9vcCia4YE1V1bpD9F9Fh5joe1YvDR",
  "key39": "33RCiizpQQVGuVdVTWTHmghVRbJredp9nXgPuSiWF1LjA8wyf9RdKdvwv36HZEEeN3HfjXs3kVZYGTwLw2Wm7vhm"
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
