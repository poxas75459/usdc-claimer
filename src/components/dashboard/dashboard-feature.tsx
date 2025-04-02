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
    "rQBMjWyd3mnzNaDMeoAaGSkGRNSR3j8qNT9xBDTHPWJmL1dWKQSqn564UBYmeZB1VaS5iPTQeWMq3hGAjC6fhz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yb5QU15Ekuoq2QoiJtBdMLgkpTBorWbXR5pXp73Uo8EXV69cCmQvP4kufWAZyREojxFdMLc6mUmeZNxLU6avYJ9",
  "key1": "48edViHBuvHG2Lnt9mdgnZhuFyyFRDu8odvbtpBuJ7tMBPm5y3Tw6FFGPUurVYYvBGtT6TS37CFZzo7UvBfXR5RB",
  "key2": "2U7iUHknb1JckzNJy1tCUQ1ixtq24unXtD5fJxHoiPx9yiqHwUK81VcstGstmekWckfDxdosGT3MwkKjB9eL84x1",
  "key3": "5KmSXJx5f7ojcTskDP7RRXXsbVgSbyQe2UheKGwjW64i2AjETA8FxkpuGYTeQb6HfqUmjrqcLscxdc8FJvd3fxhi",
  "key4": "53WCxvF9TKHCkpDYmHqYsP25rmHSYpSi5RaUXBdZRk7A7GN1z7JSSsdpZaf8b9P1d4NoFr2eioycVDBu4KZYCw45",
  "key5": "2p23MUohSuMBEmoPgpNf1qG7RUKhz53uoQSDgavkqKqajysuQP6V8tKMFMkPueTHxVUwdFQHJHZq6kb9FewXYzGN",
  "key6": "3vP84UPZx63RpPHBY6PtTeUer4AKDbMghWxZC7Ftc7rrmtPrqbGYhpiYGg4c1kdnQ1mGSUrzo3Ks5EnX8CzpvDSw",
  "key7": "426GAJ5yGFxL3pdFJec3oVaaHgRQ1E16xPtNK15hyP5FMLQLvork1m8f6otPbgsQK4EivDa9dWDMetPKZeeU4B2o",
  "key8": "331FVqpWKSQs3Ho8F4kytC4eFpkiNv5m3d6ZfABbNaqJq5jxD3xfi59pQLSQ2EBBn48fRBYBGGUzB7uaetN4YYsT",
  "key9": "4csad6cSBjfh2A1FRQX731BYF2ZejzJVqSGyfosbmXHaCLVUyBLxNba5K8UgiD4xdvDYPVijLAugjmEa3ysvkKPd",
  "key10": "3YjvW8Eaw8ChLVxrMDSEgc5LXmgJtCU42nd7cwC2qjfkKpjTzmVY2No8DT5wsnhaL3QiUhAZCBpgffmYqkdDemJg",
  "key11": "soVFbr3e3ULcDkDq4g6ucdWXnVzYCVc1Q2JeDEyxqtCtCKwCqeEDc2oqMDNtThtq2FPxJAKPfvqmNhPZsXfFqJD",
  "key12": "EqWKDSJjrSTrXTofjNh84az9RfmE9XbxD8FnBczXeVe5UMq91HdJVMLt7BagBzt3FfANPULRPkbfW4sp3fYL9rC",
  "key13": "2tpkDKvcSNNqfK1RNsk6rezLV7BaZnGV83ojsM9QQbn3Num9Em9AtqMfVZnN77QgB1h3AzwTF9dqW7ToFLuiePz4",
  "key14": "4wEAw81WJMvALisYEs594HGtGPEQk3eEhSQ7Pcu2f4vy5afq39kwHzXiFE6C7xg4RwRLaejP4bNn2VJY8VbLg1nz",
  "key15": "2L1Xf8oBgM8z7FAfX38teNrFv5pFWJmtsxxgL8tyhN5cy9edvZaPfchonN8TiedxcZSqfwnN9qGqTRFtYT1DWhwC",
  "key16": "59a8qX6z2R3r5xy17XbGC3oG1WYFcrUcBduHLFQrCAGMYHBtzTEyiSiKzgcd2mu9W5sHySSfZYmJRwQ2SFtkPuMB",
  "key17": "3bwSWmN3LC8yKjPHnzPTWTgx3p3otWryuzKj9gyJ811FfCMeuJN21nBRKVHwhjDjTRVt4YQq8UcBpQsthSFWHbX2",
  "key18": "31RZK1HVqbW3JgFpcPHfomkoPWRPUEyJrwkUsT5w5o5wpSHumNZNAGQPKXYqxCHAa6rBWizctHAsxGprAsL8bdiy",
  "key19": "2QGYd6hrQJuYwA6qfArt6dBLSzUGrj7D4RsCzzxSLPENPBC6tAR76gDNLUbYyezhoMjuZn2V7bqMtBkA4cqnaPh7",
  "key20": "3ULgy7TF1T7zkLCd163PbGdKMrCfY3fYj741oSm4C34ebv4mjvoQywVHt1PEbqA2vi8PbeBCgHDjwXAhcD4t6aky",
  "key21": "2VynQLvQdzK76yrs9FnfELZd8FDbFucUL3GRDQ9KjV4NHkLhWQaGnoruHhzJpFEs9uWnoMTL4ZX7gur82La2Jdyn",
  "key22": "3SsoCpKhCs6BYth876irF1B39V492SS7whqA8takG4UyqofqgPP4ehwkZ4zANMiZ39gTc9rxnM1QoMHSgAAtomXD",
  "key23": "KwEy3HuuLk4D4fqVrxjFq5Yn8G1BuDWqTHGwqtX8MPx5gh7wN9dVztjrccrSuBRD6fpE7T1RoBmAm9uUXxvptGU",
  "key24": "4Q6dHnCs3K2NiqRaVjnCUzh5GySW3CcXKRSMv6J8rwrBDEUXAuaJQwQKuTPhFwRGGW535tDb1MDPMT15ojrFF1Z6",
  "key25": "u7L8j59X222ji8gzM2wxN7D3NRhrdbW3cYV7d4ry4uzZwXB7nMoTUXyPVQdtDTbWmUmBGEY9PBzfmQvsqYYMVjU",
  "key26": "4t1BpFwWL1U4evQUFCAd3EPGCXEUrhNo3hqUNGNd5tGLUfbxB7UdkM2BbbTQV98b7z1gW2yPKow2gtpdSLwr6TWx",
  "key27": "5fs2Wn8CTD2JwHnYeCxKhiHuBATfhEZzCoKX6t5esnPQX8NcaHUFeLiAJguQV3YdF5UF1ZQ1RHd6KyqDAaqT77FE",
  "key28": "67A3ybJq9aJxDwz1Ko88k8HicWnUedRPD8Wqsfb68myFWs3UpeYcfBUdmt3KPYDSsJ6ZDD2DQ1bNgYGB4c9xAQBu",
  "key29": "EVY4U6U3WNrUpu5HWrYmeudhUcaXb3Pb7jQFjLSCaQZAhSuVViFznsUAGwffkCKvv9rzKgTnnkYXTsAEgX1Cr9J",
  "key30": "3GFfcQBPhy3FS2QzZbchqXaQoTx3wVauJPFnciRAUfqAFSxzXoqtBi5Zhohq4DrQ9MPUS7RWhGEpYEwGEL1xPrz7",
  "key31": "3v2DEjfAiJUzwLTM9BVCx74Mowix77uy5NjieqcHW4HJi48cvjBhoE7oKdFq69PzJjz41Qvoi4KCZVJfT3zmrSpZ",
  "key32": "3ruViXHzfw52YDEWyhfYAsQCQTtX2UyH854qaS5X89SGrye8non9ixWNpkiL4GGakMaaAqR3PTr2n4FJTeptEjvh",
  "key33": "62vqGX4owfheJxgZdHiBNMGerFQvHVVSBbvpNUhJN44FefvsJUaS8N5D64uLiXtuYh23NH9EYz1GqDDafo8MWBdR",
  "key34": "3Lrsd5cuXmgLtekRz7zhLFFeicv6tFvW16abvSdbtYrJwipy1jXznkXDT9fEDDenw7k1YRXcZ4xyj6pBQoxqcrnQ",
  "key35": "2jbbJv7nau8EcqDubA5zxadVFPXYdHMnse5MuEYmFzKu4cEw4Y6nQPwgiw74mjGBZgAdNQyJDsrydr1JNEJsHaqT",
  "key36": "66Yct7HSDpeHUxp76kSURbhLxsNBraKFKj8ranEiNkbBMtDwx7hLjo3mgdi7HRTruaTJHPtAmnBxo9vPFEv21dbb",
  "key37": "5D3oaoQGCb7RRSk3wvFrPhj8P93GT2SAGeMQvYqzx6792k1vK7T33nhA5rS8WP2EWpJBFNmQSx4Dy2yVBfPCA5Av",
  "key38": "4HrJ7qs8cz1JPSr1qz43UdBJS1qAGJuMSLUffELQYaR9Fyyh9Ya2U23ko7owbVQsTwaYtYcxmxSE2kkqnKJTUFcS",
  "key39": "Y5zVARvwzeg4AdyzDhFohgm2Y1fUZWrqRh4ACmBGyUM1GpJ6xxhhqfx3vE7rXXQFU8z59d1wohqnjwbdh7UCBeD",
  "key40": "4hYwKQxbqNGaoaSS5ixvWKb1YFhpRrG8Uu3LfchHjf2J45K13B9QRJ3adRArdGNBrZAtj9U3es84WF1VKALpBxXU",
  "key41": "qbCh139PEn34m4Tq7G4Q4hgqL7QKg2j7zToJsPT7zHYr6f7AudPThxRLnmgky6YveXjus6FPJzqeCJdg9yN98wP",
  "key42": "4Z56H5QgB9XySPwxeZjJocLxw7DSYSJ1oCmA6z3sZqBgAWxxy2Ndy1QsY662dVkUsm31N3FTxDxWMM41LmQW9qkT",
  "key43": "2VARh6Ju33XhHdpkYNZskTFcZuKZR7GwcJsDDCLpGq7dsQQ1or4kidBMQix3LNPZHdEr3MZZphiM7e74HDyb577M",
  "key44": "2R647cRoqda3NGF97K6abvudW4d6S7AYGA56uuUHdwPqLxa2LnRYaAsEUAxxXrtsQwMNnSzRAQx6h8qF2f4QxwDL",
  "key45": "676zoGp2VATLf5fDFDUHbmVwXh2LirDDkHajLickeZi29W5jb2N1QFgxUGcSPLCMAaWkRib6CF5DcxZ85bZkHo2c",
  "key46": "4UkXAMpxRca22unQzffkDi5Q8oE44RsqRs1dhnrLL3sdaNLWTo9cJ2p3FbaafoJK4FxeN9wm4zbaiDEj2YvFDYyH",
  "key47": "3LSsRLVgk9ymCowiv7Rq5hcMAGVkaLRVcn9H17PvzbEF21wptsgZ7f6fPVdXz6nj8BhSgP5cSRhC5RLv1k45B897"
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
