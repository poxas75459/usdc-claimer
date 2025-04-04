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
    "5FVkwXqn2biXWUQnjjUy65McCGYPyz3JJJBSGVpZDrG5B8nKXz5rJnKEf6NiVrBHAzS4gg2eRAKYTRhrYFEqs3cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GN43DQ5hTmBsQKQZbKNs2pWgJTgKBbenJhJEL5mFgwKUxj4jWjKtJrgCHKXFML46euL72EDwZsLz8si4grwxQrU",
  "key1": "2v71D5aTGAf6zcBB7UXK2CYQmRbHvmt1ttaBnDdYgxjUyjMzeTm46CXBKWVg9N6DZ6WWKDd8ExcRuVXqPqdnVNkc",
  "key2": "5NXzG4vJjDhgkCRHn8DTCNMvPgnn5thRNCnjHRzDC9XhDUiqdNCHCr3bBJXJwJjnxHkyfhf8nuMvwMK5XQp8jTj1",
  "key3": "2K1QQGfYzn7EMNqjsZZdrAQzKBy6Jc2SyxBQJMC18TyCrVkVvkVkBvZbLRNt99sugUkLpYwZNErDrdtFLSSeLjWr",
  "key4": "8uEYT7R28PanhDGS4eSe6KWb18oZG7ZvNGtrU5DpUDwKPHSKtvwWRtW7Ym7Q91a6DV49PSfrqjNBUYdE96uBczT",
  "key5": "22uHR2Ni549yEYH5YaLFwjiy16GRvW76RM6uEbbbg77FhQVdA2BQEpB8T2vtdBTqGJZyitvYx8UinMXpJLFbDRmF",
  "key6": "2tz4CzyJuPMN5oKQ5yfMgfi7n6x6RLJYtTEMyot4qcYw2N2tfdaesvnb5XANqd7mrxX9tEHgnaasXpkKe8LTzFv7",
  "key7": "2fAoatSkChmhf5g6MNktAg1Hy8fFVnyuUB6yPWTyeQj6j1QMnQ81vFtDQTBCYTSot9gRSsccSzY1ybgyY6M3nSzw",
  "key8": "2y2egr4SPDRLqjVfqHcwh1PayueJjzkCUi4zcQcWj4Tn3iZT1d825j18N72Wg2VRi9VjCoFj4HVtMVhUBJVCTDt2",
  "key9": "5it4UbB94ZtAzLkyXmYwWwYvas67x2YZY2H6pY6SYQQDkRHGHCWHXLF9Vm5GbhBUjpZtzxbWbeBooiter2tfBRax",
  "key10": "4J1W1XDViCVyu84P98cBijA1LM1M7gwT2RpfaKa1Tc8woDn7JQ7aUFRkdL2kp4Ey9N3szV9Je8T5a9psivLeNgKb",
  "key11": "3tWsKYd2ZGVnEbrGf3RMQn7ohocAFwkUvfyWuKTugGhY7S6D4wyjwyzQ6k8FwQKcnRLw66BtA6JxjZGNQhSWQ8tn",
  "key12": "67HbVVhNrDaJHmTPeD6cjs5fuXo4yFUJ4svsdkxsLYoXEtqM4FSwny5k3kptQ9s8rwyRL3LwevaJ3CtUqbP5vExH",
  "key13": "67e2uCBBDjWWCRHgX5qngmtp1hwW4D49q8DPh8P52LmDiwKhD7ozJmfnQRr1xNgsYarCZBWVuA6qkYiwT46UwV1k",
  "key14": "3QDDMBf6goqwU31p3cYRCAFeNGcJrmUbDzAZAQuuJxv62q46HWer65H8jQuwXYWPsB1NZ6Gx5gYp7YZYaoB46qqg",
  "key15": "3XN4JyBLwZ2uPFuT7YAasDdYdbCLJ2XhttZgur7DQVJGppr3up8uVETZEAPtGiTJqEHbXiAUWp3rU9dd3CBwCoVT",
  "key16": "DjgsmUD7gJDXUb7rAk4hRoGJ755wL1otCKpb81snyPt6CeDret6vdvEncrU2X8RW8FFa1GnmfwgJF4avp1RczBR",
  "key17": "5ooTo8hw697F9GX9tL5TQ5YQzDJgzCEn8o4aLo4jvjUGt1xPNEPhGudcJux3W63t75WNLxhhwVxPnTp2dmwcpuBu",
  "key18": "4VSEEmeMLRe2RbzSpgFGdfvGCFQUWfdKW9EB1XvBqUdYYZg19j1w6q8GnGaWf6tcSZ9KhHCR1vSAXq4A9zHixSg9",
  "key19": "3RPf3j9emaqz4f9bsDRfDgWtKxAH6NG3vDgFckRW2XVKZrH1BiQrvhBFS9uSJeFfr62tyU5734ye1iswZVkYhy7e",
  "key20": "5PohCm8nPrqZAf583VZsfVsQLrC5QfdSwNM99d8HbkRmS1AQSWkuVogavRy9QWQiSQuqnzFdCejv7tub4huKEb2F",
  "key21": "jxMPXStnGaC7wbV3GP6mspJfzZQJS3aoThBc3U1jBhM2iGaENu16UsoJ1YCaFyd63kJVb9WZfHWatqKYKMUYjUV",
  "key22": "4dM3n8TqY7Urw2HtBXUZFqZKnEtBqTLDYVtn1xKjqPBiKUYCb1v1bpv5At1fuo6syLJbhe6Yra3GhFpRUA2qexou",
  "key23": "126N8vTaBt2CE1Yc3E7q2VWzkYsov7nK6vXWAeW2D79T9y1fw4HUUiQKYH4g9dBDACbAMiWUH82hHR4iWrXw8tDz",
  "key24": "v1cb3hbYeNFr75TXQ1X8w6oMgDZb149dmhGftRwEtJX2829SwLib3XN1iz2pBG27UF5rpedEETQXvzes5rhLhuu",
  "key25": "5YDR7LeNcbTDtxePiXpHwtMhjgW2MBMqL5ZLySY4p1JzcEC6Anx9UFQhAie56sggDRNys3F3sAgJr5pgj5EzXa6a",
  "key26": "L5vpLXsKn95muiEYm6CCt532Q8aRufePzSm1W9ZNW4Rk3yU22ncyZExRKxpMVCgV862iuSWef7byqXqxST13NRt",
  "key27": "4GhDW5cwASx82MRF8zuRhWwichv8nvMXL3z12yuzHG3hpfz6JPwi8fQ8EjexTxoz41uLkZfeMNwpn7nFLndFhgEy",
  "key28": "3kUebYjxa95uqCrqEMFKbt7o1qQAujswrww2ftSycWXcbVujXijgRArFerH8gwX7iAQb7SUzv9va3sHDJgNqEhHV",
  "key29": "2jhHBDZSL4nM3TsfH64BoPEVoPkZ5U2B8XJDkACe1DvkEpsVE6aLebJHBCXUeKk3nNaPWueXTzUFAxD3tq5KrXEz",
  "key30": "2Ck7QuBnkzgyCrWmDofN77F3G6sBXXcwnNh3U796tqTJc28ziPXSoiNUz5AaZyZPZoxjdtwvV1LvQzGtUeLuhAAg",
  "key31": "2uP6cCjYwtjBbqSLPPX5vQKEi7MjgULBnx5Pw8C6fyNULS2UiG7hZ6smQjapSf7zZZt2Rp7awgSB7QwxB61dsJjD",
  "key32": "226si3sgLyLe2NyauNMAGeJ6B8WDMjPESWoYk4DzBMXVgU96CGz7GFNXKJMNhR1Yi522CL1nwAFv5zsbGUVTCz16",
  "key33": "4V6NyRLLw42uHLeKzs1orH9EARkYkWAC523QnvwurPcQ5psyntUXuGkw7aJC5Fvfb3uwY6TrWg5AztteXX7Cbf6V",
  "key34": "yJ3gVi1KCCMfARZVEHmbn6D87rbDNaiGsT3Zzu7nPZhNTWYiPEZoECRhCcYbcaPCfSZKMymVQpWq161VfZdeMFy",
  "key35": "5Q1ud7JxuAcMhWGdrccw4hvMvLctR3PTu1V91bg7vvCQW1ssNCt6bvJt6hEsjD8Hiq5miVF7Q3KrXHWYvWJDtwvD"
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
