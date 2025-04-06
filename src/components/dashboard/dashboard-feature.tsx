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
    "3i7BpDPhxUkMc83W41qDEPUWgwwpsJnyirXzN6gtHdYNkvLEokGHSsRC5nEMvUdvsXAUGygCPeGi6UdCVZRFBQRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VcRWtqYbddNg7CxBEsBh1LppgypitwEs4mC9rinmhn5c345DhFYoQTC2dyskmuoFSpvoZW6CfR9mMbvqJNUCfVU",
  "key1": "2hjfhwWpZ6SbLM7u9embcKxAcoLNqNhzpvEiLbtdVULKFY4LP3XrTyXhr43hvML8r75A6EQQv4k7E9ZtvY2mnbA9",
  "key2": "2jZpZ8noYgv4Uw1Uv9ALHPjD4BRJcoNFdHfYPDu2pEgw17ASSXqnsVczyFRhB9hzC6XQxf1UBzReB4JNpnDJpz2m",
  "key3": "4pCfrXV3d9M4EkRAv4SZgp1WJHiN6RvesBAoeKSLQepka7wD788staWjppxy2772PR2EFySNq6n6BPpWLPQD2AXA",
  "key4": "3bkUNAEhtTqi5fZZ6QUYTSLzez3iBxk7BKCLAw6AKWQSgBGJ6ZtKZJSoDMdcab2gLHaAK2MwF5drXuQZZfQuWYW1",
  "key5": "32csUWnizjA9EK2kMeeaYNznyipZgtT4UCjNw2jhDHW4zETybfqnrz6FMXBBzhZkA4TGtXkZ2shz9KVG9WkLkdJU",
  "key6": "3hnSW2q3jbnyWRnmHjRupqUo8P2dNcjv6t1j5xHmySZJfMZgibnAkpF738skWzCS1oCDsCGrPenhHQiRPmXQTJUb",
  "key7": "XhkLqV4U8Bff3myT7BWhi332CBs7uJvzpocfP3UV64mXJer1Lyv8DhtQzipHrm44nLSedpEV4sqhz7Qv9BQRcz8",
  "key8": "wMovTtdLy43pMHRV93cEdt2VxH7zutZoW7AUWqocSVxpjkoYQM4xSSbuBbL4XajH29nkKmbiKHKnaoQtVd9fpuB",
  "key9": "Ez2PftHtfMezfbt2RSptS9YAZ6JWSPjTzzmzGC894viFN3Mn1rZSN31q76PoL27NzM4c9UGqkpdQ3LpDohhahX1",
  "key10": "4kLbv7JasbShcyrWKLGgqjCTAR647daRxwivp5x4m3u7BWKQcfsckddQ8KpqQQg5nuJozDy7eWjDbhHzovkjxpFX",
  "key11": "2MycmASFrD8KfuvUm7UMPznFKnr9QJHCGKdBwQQBJsB1XvA4WSqBEAC5SSt2TAGBohs33DCrYFDipkFmbwsMuvaB",
  "key12": "2Y13fWgVTNj2PjkkVf74P8QT9U5H8W6KGwxQJYZJq9zFMn4yo4VZ7rNGwdw4KZf2uVy1LpM2YuTuneLphDvVBr8F",
  "key13": "4RCdsZYPU34BhcVZZ6DcRN3GnycPJAwqri9UxjSN7SYPbgFJxTx9k1kT95N9tqBkBUtytrvRgJMdzb6hBeRJJxxN",
  "key14": "ZvUUFqWkFXFHLeqRHAVbNfKBAAYdeuuW7ymy4MsoDWUX7bMArai7V6mev42KpnPjbwMjbipEuDSx5Ts2LKXQm4f",
  "key15": "3ZZy5tEDHCNRHHdfyFfiNPdRhQ1vcgNkd3otyMZF3sY2u1sffYj1sNMsHLDws3rsWsUMDzkCeZ4RATQ5C1LBdBQV",
  "key16": "mdm9B2Lq1bNbq9r7y9XcaQxczwerryoWSxDVEtSF9b9d9FkZq6ZLoLz1yW2EAsJMLZmFvi9NrXQc7vUmTS2eA57",
  "key17": "3RDMH4LBGANHWo715UBu4thVwpQquSa5wpjd9QWfge9tWdhHFyEifNVAqGqkNmaj3XiWCmderzB1Ez46EoNmekCg",
  "key18": "4Xtv4MoELSzFrbBYvQ29PFAEDXxeYgMPac2Z8BnyCnGFe77onWxbLE25fWj7JDABV5e7bgu6y44jRzaUvmFyCoL",
  "key19": "tmuozzYBJwJcDGqrtC5Xry69qa9S2Pox4SZvtTi1EYv5W3BJ39GqJCkMikatSFvANKxEcBYvWcEKBpPrQheD55K",
  "key20": "bQnh8auK96xZs7duLepvYtS5Ht3FoMyXGJcETZW5g4MwPwSgC23o5t9XWdYVw4FqHL486yHKgeWtMvriBUgBe52",
  "key21": "4xEksL1PhkK6c2mc2zMtmQnBCUzuiYbqvSSz2N7XYYtucqTztwtjhhbREGpFmPPCkmD2xTetN3ftDPNSSFKmkHnd",
  "key22": "3tNP1CCx4JAaKtnxWpZiphXvGH4sbwDm6xm76TGMwrWWgvPvFCjcYVQ3HWkzPV25iucSXFQ8sgWLMiVEizUeLiKW",
  "key23": "2EXhvEmt9JyZcPUTfcyYmDXfKEUua3H9muNs2dnApxokt7q2dz5wzCwYUcscmBeCE9fD2ahuNhGwE4A8ExD1ZPsd",
  "key24": "4g7h5LGFVEKaPeZTw96bUhzSV8cFmRv8ygQV3nEUmHdfLQ66xzixr8xQpeQS1rTjRP7fiQjXzKjMnXoM7guQ7LKF",
  "key25": "55Rxkr1U2PDCCNwtTWWCTfcYewRju24vR7kYb8prdvV8aN5rBzcEmQtTmkuLmgRXvCovj7H3JncjHXHX3VjPi6v",
  "key26": "3DF38KE99N8HhrwznrCTDcFF19Ger9BTNp93xnffuGJTgA2fwb2nsrgJXjGot9cmSVNcWBP3g3tfpSMxRQ8ScuZF",
  "key27": "4R1gSNgxCZjAfmejD2nNBY6gPY1YdEvidb71f9jzqREUcTgApJeUoYQqksZKBFjQCftCAZMnhFFGBA7Lo2CykyFt",
  "key28": "nV3bRiGvpt5cjY1iNjiMyFpgms4zoDAqqvvSg6F6KSn2RsbGSdT2isMLo6cmtB79UgjV5U9JfW5t1TqxWLtN4X8",
  "key29": "vyrXz5hmz8WkAH71hQNMk28apubEv9sXZqA5SHBLKsdiL2sMvE38JMYX8tVUQThasZUapUNMfitcskis2xKzoPt",
  "key30": "33JH4pnGgVUbusFcjSByfPsX7W9eRQQ7ARKC4v1iWKesCyJaJcWuQC1kk8Zg3iyVEF9y1YZEyYcJzS4i1hCnpSHb",
  "key31": "53JdbQDDcNFkHwAEND8QZsTffPZdn7Ubg1MsRd33CMzozL68LM4Mpos4eFUrv5nxWf7yktyvxWdXKJiLP6ruyuvc",
  "key32": "55XbfwHDC8Nc7psNr1KZhaTAx8UtuLUzfzroFMrqHW9b6BQSwLwyYLuQyE5cuRHmZk9jQyaRgPKFF9yw56Co8ysw",
  "key33": "cyCycjawpWYLqaVQ9NbtVSqkXH5sQyr1rLJM6VFv2ZZU8bggMAkEJAXapMfKE3rL5iAqP7mxp2mP1W2886jeJTF",
  "key34": "5AMrzGJLL19UkYuu5DsT83JLMXBxU7DjUgK57cc5HDBnKXxQP4YPtATubB8zcwG6vcCux4wVyd9ZChXhNm73fdSn",
  "key35": "3uSCC6EcicpS9y55trCDuBW41P2ovg3Fo9Z1RkoTTZUyCN5YfQNWbeJnCWkP7nBUyBkp86kf9ZdQyqXfiHUq6c16",
  "key36": "4hwFmyhuz2VWXqjQiVjmVAJTxkJX83b74W8trmpQtn5GwomBU45jzbpbtw6Ae2DMkoX7E9mFAczeGyrWQ1FJor74",
  "key37": "5MgaKC91GS212ikdnzQy2qw6A8iF799qXjk65ZwFLQsRS3znsAEXGSw4arJY3gfViyUJTvF3UEGtQfy7FmUN8icw",
  "key38": "3ZQ8JpT5SuxCzmD4BJqiHw7jLuSi2LrvTjyCZ8JoTBvupj6xpmzNxqdxxizgbgMv9QgFf4bcS76Mrq8nat8e9GfA",
  "key39": "5jgViBuAtHJYqHaegHRrr5zTKiYGR2n6PMFF3x8JWycUqshtE8x2MGvwudxoiBp9p8JRXSNAi1gyYnmGWWExbZT9",
  "key40": "5NuRFYN2c1QMFSXmPn3SYyfcFRtaxApD9criPRj9pkzDyas99gfKCeMxgpDoxUdwVAP65s2pjN4er5TLEo4FimKH",
  "key41": "4H8r9yRNFqDqKmqAb6G1W2C4KMgFPoa3WcYEEchVGexAqzcizLVQpafNcLN4PeDyo8Nwbs4PjeoqvXay6Cd45nwm",
  "key42": "q4iUxznq1XTywrtbAuNnnFo7VmPqn5ntqRzppTT738K9dbXjZKToBfgg2xx7AAzbsSadfYdooExbT33xQJgwAPj",
  "key43": "4cJJSyM9Ebh7rQ5dtphNaZCfdEGQkwbmL5r4T4bHdrvauV7Qg11M2tE4NN2tQLokWokXTX7XfTTGtGoRQ2GqhWqh",
  "key44": "2oWw72jjym52fvLMrtrmd86ZGt9zfUzotE6ioh3KW6AZF6KihGupFVv6va85xnAGwfMwUwMoHy2QzVxFrFmn7qor",
  "key45": "5GpR5kNVJVYtJ4ViqMwe4zcosauUFRcQwwU7eDezpjJNy2opDmSBr3ZPuygEj1W9oBfgCNEKFi7NeWPybZ3wAfvm",
  "key46": "5MbZTLWZm2u1xXYKMaa3ojppQAyUyts494c2BybyqrijDwoG4dPvEjwkCFMK59XBXiZjzFVQSkNVr5Dhktp6hpEz",
  "key47": "4YBAUkJWHaQ5G6vYKNTsfyPPJv33iKAKYeD71ZDqcuEwHugt9BthsZecJPUPpLosG72R4buZyVzw78nrLjmBh5Kj"
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
