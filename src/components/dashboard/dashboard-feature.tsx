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
    "fWqDkRmVoWyoYAUtJTc9zSbfSSW3byZuErpmeNrnWUoJtQux2FSyv7Gvi5Cir69mGA3FgaR6wqSoCv1jQBbxxV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QHcPxf1pbS9iveXG1FMKBVeL4WGPzAp26fmrnsDPysDhVC4Sk6Dkt9RmHYsY18FbtxLhs1kMg3YE8JeA87U8u5k",
  "key1": "8mpRk1gtgXEcJWx125PvUThoaXVW1iRpNdywKFV4EhfPFS69Vx65YWiA6VWGU1rNfsQGBCGRH6wivX2o5VhfN4m",
  "key2": "5J4z81nKu9NFSSAsDRt9KGKCK2UMLkoYp5qaXEGhfkotH4v3QaLCxaqLuEZD4vLJMuoCQ9f8nGmTK5s8v1e5VtMb",
  "key3": "2dQwWLf3Bas3oNuyUYphV6ddVPQfoej8x3WXCAaDhCsr65BhnxMmtC4mCUEVBDgGVmXkf5ipGRqvXvgNbYZpYmN9",
  "key4": "34qm5a9zT7DwupfRnpqmmXbuJ6HXjo2zFC8ynJS37oU8FNL9WGMzEN5iZWDsWL7aktmu6onqTcG97tkceuKv3WjR",
  "key5": "4dyHA4AdAMuWcD3doppMfQwo5evcPkNmRnJDTLGVgkVggL8f33uywcLyZeY8RCZhsX4XQhT4AnrSeyGgkrWBtZ79",
  "key6": "4zbYbHC4Bf9gFHb6FLuvzHUafPjbtQwBw1qasfevkTwk7WUtKCerJq5wXHhsVRgDuhnzdqBmNDyjdRkLaCsMXaAC",
  "key7": "4uP8ytGbq1BLmt34XLdg4vGvsgk6E13ZSJdjMHFkubGjavaqPcFRXWgd5zeZQMv2qjX1ugQBdTSAVMEtPPKq44bX",
  "key8": "3TMUWbZL4fhyZWndng2e9aPKDBzXh4JenyiP6qvnbDdyEYxo9kkgLT7CegPPtE989XFWFpL7BEWjgf3krrpa83HY",
  "key9": "buS65NDm5Jt43Wx8cKbAgyLX1o1ef79f6GBj2bkxz7p9e5jS8pZ72iQjbG9ZnyH6wn51GdpLKFL7wNKoZtoi5k3",
  "key10": "2Gzey4VDo1mcESDM7xYxQ6Vw7G3QDqaj5eX2hfQ1MrFb8b2rZ7wfPC5srQoRbh427yZXzodZRhriizUE3Q1DGQQc",
  "key11": "2oaZtWmKNL6kSYMHVpedETREUHJ5dagup1hcoNf8JC2oaucAFMyH4YLiG2CKNc7ReSNQqf54P8zjocPrWZorqLx1",
  "key12": "FytdWJSi7xiEica5zh4TyNyuB3nPgwpu4d8Epi4yqGoWgon4quN7hugixbabs398msx45DXRe7CZ87PCJzPL3Yr",
  "key13": "5yq3rN9yPZHLCj67XNqfagToEoaE4Z696FyxAXt6zCxq7Yijt77UZ7NioH2CwgmsPPwi3BYFCr9jDzrp6DxbWCiy",
  "key14": "4RxWJMvi5VKDEAnwHwjqfQK3iMYB9RoCfUQSRcGCCLyZRpBr4EgFNH5aZ6KQzEby4AE2HkmbpufwswexXkzPsmc3",
  "key15": "3iGEzZdNPPMXwRwr3HaJcNc5k2DApJQmMxgmRdxan4NF71HEkE8dG69C6LXHyGChQFBcmYpRwNdcREfe2J7bFTav",
  "key16": "4i75pntQ4GUTKzcJE3FfSpibfSwwnmfRCAZG4BNK87UrZBgguN5gQfdh9rbjkAuiRWBDrTg8gxgARuqZ2yZbkrGU",
  "key17": "4zx5AQE3iPxhokF25HV8r7VZgBPpdX71634LdnH5ZGDDfg6rySzbQq56keE8xqEKFk76o9V9firGTUEe4gevBcjo",
  "key18": "969hYXWYE2CZ7k73tLxGQDR3gQsXTjsUZ1vK3TvQnFrxsR7MYrvqWAnyh4KRoVMc5qyHCzthDgy3ehboSSuYd8i",
  "key19": "hyD2dZo6GB6tvBtGaE7JaxzCKcERXhk7enaFsFAienzuS6KsnNFtEsSBLC6LEo3zBYFWWBTGKXGhJXkpHqH3TD4",
  "key20": "rMhQnXtsMeqfrLh8pq1KSTrkf7yPryvPjr5aezrpJXT5KY2xGBEzYQQ6wviw3aoAqhyitSaeggruqHUYnPxpee8",
  "key21": "3jhYsrMgwZEk774mwetPU9HgrUy3Se9GqvgxrBJqGKj8BrhzbjHzwPs1AHS3yCmFBtKddEhU3Tfsn55jmXA8wrai",
  "key22": "2Hm7BpanNpJrbzdbHZDMdu4H7BR8uB82vbj9u1tgL29Cj4vaXrLKiyuokL8KBJdtWh1J4eHgak1jJpESqVwduHP4",
  "key23": "RpFCpnQKZpNMzKehPC6VMeAinE8aHzUYxM1sS2Q8M7SgsGyykY15LUEziksB1LviausWAGiLgVZcAMWyMhieyZh",
  "key24": "nczFQc2mvRgsP7npmYZxJ28LaGncJKG2fhBhgpyGjJ5vzBzt7hQJvDQyRAg4WKnYqa7Ptwv2eyhn48pdYS9a67c",
  "key25": "3QQofEDJu77LhemJCtzXpFK4Q3njn6jteX6hXBx9xx22WdTiuieSdo37Xueaa1YpaWVqHHiG78UAUh4HCdXrLG85",
  "key26": "2fnURSGa1KinBvgpEorAxGwDsNXR2HGaySwB4M3WMFB1hQtYMFJuwr4tTE4DyEpSkPGwPMuRYUNbgKdLWLXBR8y1",
  "key27": "2EksHf7RiMkveKQ8pPr1tR7wTGAqVPWcwSg8Ab2NMj5AFQ3Zwbut6YKfN8C7hBGkD9J8kcBZTd8UocmCtKrPf1Gv",
  "key28": "R9WBhNXCTwbxZ1jLbHi2Asj7L2M4GJhPTMbMTQfbhFTy7ArngT2r3C12cCT6vwviKFYyRLPGZUi5e7M3JUwVhFq",
  "key29": "5REPoDZbhJV8jbGN3PdZtsGMbFE6qBFGknYk1UuecGtSQLJdPeruVydhUKXSe1oVRiJcUbSuWbdgm1PBEgqJpGyD",
  "key30": "3ihxzy88xSg1HWhMTyV85SbZn2k44yUMJkU4Qp2NN6bP9yHD78equoxcvRh6FNSu6MtFiawCFnMndx8UrqXnBWz3",
  "key31": "4pkHx5MqEuzf63xAgDrKY9QtC4ga2Ty2i1E7akqf3DB7LL8LTWLyjvPJ4LhVTUrDt7zJ8A6Q7YpuZchZwkDdWGce",
  "key32": "32219ZdriSnSu69DjFof9oQpcEQ7HALZm5WF9QZh2KqtqtXPiz4ixd4MEpUQPpALeSHB9CZLgRRK1pmKUBcZgb4R",
  "key33": "5FQWxXRAPHKSj98jbrN35Lo6nHKQyYeXbjFDhW62XuQcbUbUQNEhiQ9LZdeMbUQNyiSXDkewei3q38aN1EUEo3Tm",
  "key34": "2a9ugmyQwGnQF37v6VNG23UXkhEVfsgKTcHYWPNyKTpFtVeUc49Nr8uL1jBVW5itv46gRV3hEzmYQ118WRZnp4iu"
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
