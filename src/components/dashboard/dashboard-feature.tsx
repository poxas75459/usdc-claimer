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
    "4iQjvCRuC8i4Y6fNEitaUoHJeLEeeY6Vrgh4bKjoX5rFak3nxRPYH3KdwCQvYHLzSekKQ4XzDJEM2oyKHx6bpjaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BMmTT5q2mYvMxnKehFmseRVZaFJtf691k9uzAUjayFSoMcytD6J52FJoZMdhefRD5jxn18FbLdfmugLsg2wWdAA",
  "key1": "44tkZ5rHpuaWHpMUJDf7J4cnHozhZensr9iVXT7PzGTjgHKgQfzdcTZ5eBbB2rgv3PzmkJ7PhyBudQxjdddBQQe7",
  "key2": "2qtCZe5CrH7q2TNwpciKhA8RuKM3d2yDWTiU9e5KyDdD43x4yEGKLcPUUxTE1hQLFWVJwiKa7QRGrLhFd2T74cbX",
  "key3": "XPyFR1by992Si2YooRkF5xaHGpYd1BBNnnx23ASTyUKM9Q8KSgVsic1iPap9zidFP6zacf7QT6f3oVLMwdXDRKt",
  "key4": "37TK1RF7iQ1FK34fYvMgLeTFaH7JMBYNqCdkKdVGhbXEHGGUKoJUHoLLjL6HH8biwTHNXcWUJLpj4ZUPoAmjbQYz",
  "key5": "2aDnfV78A7McU8kVV6M6X8HJnq8u63QTHgyKdrj5sWjJB3XHtrMMgRH3CrMXBpa8Gec5ViWWLweZtoEm4P3T9AVe",
  "key6": "2w2KofEUSZmgB6ms7RkA9Vfki2vjvtd5sKRHxuzAAoMFakMcKeRYq9WanReZLcajQQbibRdHrfPtGVoQsa3UTmUh",
  "key7": "26obpQ2ZVADHWw9CNPriYi5GD8GqVqwPA7J2NeU8ZSLDNnrCF5wxEhGAzoUxd7423tYdzjoxc4N4xQTR5fg8ZPm8",
  "key8": "5HHv1MZcjER5Ya4d6nqar1U5YLEorFedE6fJcXxccR3aoAfhc6WtNHepecc4ZJPZCWPWkD8XYPUhdwdgKMzuEmyJ",
  "key9": "376tP9RxDezqHPuwiKZh1jJPCq4bu8aBxeiGcLBbRjsAqCPY3F2gN3MtqWn6BMbwcPoFo1XFWPYQ2dTvViUQ6xf3",
  "key10": "4JD2TBVLDDnu5RHwSAjRvb4K33TDvbGmYYEWXkj5Q4WekYjZiF2oHEVAC5rnRRJ9zMpLfA5rze1VBdE4yPE19Ehr",
  "key11": "vcPz5AnixCApPD8QYXmBnfFogu53XpiM6huiMQTWh4noqLAQWgDDtU3AyLmBsSw519a1cbtPYNXwJgN8diYXxp7",
  "key12": "5EwKsmj5dVTVSJHusiKupC1TwRdwZag5BBcU4GbuCgPEVeBxCnKZVxM45U4CYNQGEgwaHWntzHT5TthKovYJgj5N",
  "key13": "4LyAc6mLCuVEnwBZGWARaw4XkFpoAhNDsmbF45PzUcateAbhfQ7X1KLw5wScWyoK8UTHedaMQi6SY3fTUJXnEiNw",
  "key14": "3aEKEhbXg5TZRGRPqNWhVH9PAoE48CSSy5tih2yiN4sjCrTGM6mefYekHHaTJk5M9VAF2PV3ASNqmo4yCcYtTHFw",
  "key15": "5mxqYc38NkZTfp9KiRuWhq4ieroYMrM7VCDaTCshCHAeQVxHQ6jxyenygZ4fZUJz7Yt6mWEusyetBz6JieQ3Ukij",
  "key16": "5Wk8gT6YidyjyaoRDgAW7egVFVQBr1avYAXkmLUFRAeL4j8xJ5DHzjRKDKn42ZmMGpCgWaZjYBdrVov4kHvnXVHT",
  "key17": "5C2TNPrDc1zwFpBTfcLYvtRJzZsCZLyHdR24T5N6vLmZFYdevxwwoydJu5jNpkFAYqtGgyHzLf8fHiN72qx2G1Bb",
  "key18": "49P1kBFz6tCKBPjgFFDpkYw3KACkH4ExiLsZJKX8orE2J5eynThhW7SLp5SHc1U2rowsbbBwPyrA4BfsAkjPoMTL",
  "key19": "3CK4YEE5A4Km5FKbX4G7FpYMopku9nJPGeKKGukcSxS8c8cHHgpvvgQtR4PCtEcQEoJ5u5CeTFFzmWWwErp3NeFX",
  "key20": "5TkBiUthadUrZpNpBK77rLNTAf3xnxemiWXCeNzzuBjXe61GQv8ijMV7azaRnYLKgMKCw9atgnrmm5J5omeDWjP2",
  "key21": "2W5hSkuJHzwdhVd7EjiAmGRyye8oKWhYKLX2syQHB7HB5jvfHuSdE6WZAHFu845NCWANHHi6wyVigroLrJ5SU1Bc",
  "key22": "4BAf6sUH3Dw76nZwHavrcLqpjgxZGnLzYrKymNr5bCVVw5gZwdqkRdJ1ZXos1qwjGYGYMDpUoAeVueZpGwaP2nqM",
  "key23": "4CdpXp1nR6u6RcGtAq3SQt7HL6sVVvCabS1BvjAyf9qoy6KLy1Ab22j4uqfLKT9vj62ie4grph9MxgZV4CjDHJ8K",
  "key24": "4D9nnhWVfFAipgzVa6c8uKG1PAr3QfRWnJXAuJMc7rrwdQRHtVxUdHYFbuVDeKFGyFyRmW2FdwNLvgWufrweSh4a",
  "key25": "dZdqV8Bjp2Fhwi45rFxvmfuTfDKGYSEhwrB6XgVPXmDxHwn27kmnszxGRZssGoDVQZyPEab67TrKXWpxzbExPa5",
  "key26": "4M2LWRxAJQuURD1WAhjUF1BSojFGRcmpKXzTAbYUuHry9zPSsB6wviis5zVT7ofww34QLRkzfKuh46kjUo5x28cL",
  "key27": "2jC5YwX2UaEWYJa3fcd657yuhviejnzyQpCPjiv4YHYPHsizggYcP7KJmg7WBDqkakcxELtQEdBHB5YxL6s4hB35",
  "key28": "5HG52ooyvAeRMhvEfKx1J8CVy531zPju4zwq9sAwHCRZnjWCkSSZgACWo8cR6NfjmyG66FpUa5eEENbb2CfCaE16",
  "key29": "52mnPJSygiDZ9vX2WJvJAtfZDJ1C6mfHKspD4UcTfCMnJr5TvH1AqFdERc1gPbvTC1sYWWqBTqvETmyGUAeqepvb",
  "key30": "yeBrPwwR2n3uz8zTyu2AbSBxzUNtyRa4ZuSnguAZPPXopkMavKdNXXxpenvg7tRBzY2yxPy69M6bLhYNS7MjXqL",
  "key31": "42VuHiE4WAa7EuJ5JDhx6YdsrMeEKDvHRm5XkU73B9pAUGX5CdDfMwiGcGGwZQTZE3WZjV6vkd4JCy4uQPJiPKi6",
  "key32": "aKyb6dEi1DfqaonVp9i7xQoKUWDsmXRdgtiU1qK9H4Sf8Y5VoB9WrQ6AXJKr8SWDyymxab1J58DU671EYJSHL5h",
  "key33": "2d3u4jgcEutxYh8wJkdizTU9t7vwavg9aesRKZZwwJe3Yu9BmWJ3BBke7GLcR1bLgAdk3pNLhrpGkjvDPisk5FKS",
  "key34": "2TpCDRDHwjJtAJwtdf5Y44k5v38bk4rT4B6vwGbzMbhGAFKoJ7r8o7m2a4zVE2osPg8MHiAM96pYRnhqM2KoyXRp",
  "key35": "61Fyaad5g8zZD4xujb8MFeeoAy99vYE7iCTqP626nmkMBjVzCeapdprnLAEKVjqrGZpn4muiXhFypx2yDtH29bsP",
  "key36": "2XBQUAPbPGRbuYxFVmgGPVt2gQo9a4Lr6LAT5HzQNVzxsBRWmXq12cARXEwrpXToCA7eJtrcDPN4DsHP12SPDjgu",
  "key37": "39cNJm1MXrLhoqzZczAokxhsTxMTdxJRDf8MjAtH5ZkpkwCjPZi7mZHegAuEs7zBCnrjWgEA6R56vfESsVjY41sd",
  "key38": "vJpSbX3aF2d4AM6aWWhhXxPkE1SkNfufGNHagXmZJzUVbfKDATRckpB7mzZob6HNgKUP85AJQXwTbjiifeb4WvF",
  "key39": "J8YEZpjvhVbs2SUEwhqFBex4W13XTHFuUMExgkjvZm3rCQw6RQo9aJGh7hQiGPa8wepDbKtcr5RLhzLqKLJ5k5X",
  "key40": "2EE5BL52PvanHAvWXAgw2EUD9TxyxN72gaAMTTzyGcWGouXNRrxmNCFTbHj1aq5UkKdBzZTRptjKTkN5JjLDraR2",
  "key41": "62aShEnRdBSJm3VjM545thLHFSpR253UhJn36Dy37JQjgvyLy4fgq3KFRmWS15t6p8gHeH6JNEEewXvzezxMFyRw",
  "key42": "wbQs3p7DK8PvNcHxW4isyFSCJQNqz7LNG5KV53RUPivXbs2JE4tzVFe8hCcs3Hg26rmnej8QcmMEMYtGkc8yjp6"
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
