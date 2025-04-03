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
    "rYQe7KiUgVdS4HERLvwXZySDd8BmLsM35s9NQ5fYFrUHMUwSAfH5w7A5EqPT2fBtp475Z9fEHVo6xqmjDke4Hk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZQntkypjpVvMeg6x4TVeLKnwJ9D3ZRXeVeeWr73ecDZQHWgGb9mR5tw67JUTpkXtntA5QFJUHLfmSYgBNSFqtYY",
  "key1": "2vefAbJYQjFzFj8vinkM6XvVWEdxDRJVyCGubHQnvfXBWMZXfxDEMgsWgmqQ5aviybeTt787xScMerNhY8nFyjGH",
  "key2": "3LW6Jzegw4JJ6G9sDbSvrxxw8QACoeKKPad13gieoS2XH8ggXYrUhupnDFCg4HpD98sz4MELBA6W5qSFHBaWUhE6",
  "key3": "3akJ22BToxqvzCKaE7EDQWPcUD7SUs6weNo2ybCCH9mAbRDQne3jXTFuVeg8fePYE787SWfQtBibPUeGvpzM9Mdw",
  "key4": "3CguT22ub8nmSxu7GL5wNLcABgHyue2VsaLCfLSCLjqNpDWGcbEdp77zQCDeN3GLHSdvm5D3YfpVTAEoDcGYW9ta",
  "key5": "4CgwAUL5Pn42ewTqqsSioUppeCw6f5RMutwsjZw3Xt68zEiMWnVRDHue7yuKGAzi7rqq5GmJWPikc3xU1YhYiAgb",
  "key6": "iMr5o4rxE5E5cUhRLhAzcVK6o5HxNwKu9hnLtRpUEiYLpmtSWE92mRbbU2y1hezBmzQF8RmqE3oKuQ8QrWUe5Wf",
  "key7": "2SAQbSDc57i41p1qrEGVbQgdCrqjQX4AT33tJjjheQwEmU6GD7u9sVwmw9XNGvVQh7EutcPGVEbGWtq3JghBJLgv",
  "key8": "4t9XnRoVwBe7e7vKtCLEjrG9aTAALs1iL8MZ7oSQbr9rvYoec4gLM1787BMu9GEMdoHP89XUcA98pZnQvrHPxdkt",
  "key9": "2rgHtyJCf3U2ZXbCEAXtUATEzdqP2BLeUBG5QiTW5CPr7fzs9uaVVdFfQs5tZtRHEC5uuos6GpwodaygAkfaH8E7",
  "key10": "2KL1DQMGZim2aQJ7fmtXHmaKeghTrna8jXu96C4WZaxqQVyDwzFo3YH3gqZPPz814q3rEWqDbP8tadK1RRXJPpJV",
  "key11": "5cANmAN9UYAGENx8LqJ4Xi9hg3XiRHFXvM6Xpy1uRq156s9FKdtYkpzhwRUcDUGq5ZtiCr9f42XtSFuChfXDc8gF",
  "key12": "4Vu5Sd1Rnhf8Lx5Y2euFvszVXFeU3BKf14eABAMJzsmJCpUQfkXzXeD3hu7Um2wTCfc56bpqTiAZyeLh9vc5zFDA",
  "key13": "5qi8h31VFtzkyTyGHLr2UXWjMeBt9idPn5Q72zRnGsG5zz2ctcUDadLkLT1inJzZL2iahNCv6LTS2HLLEkAYKn12",
  "key14": "UZhSP4YXMU3mD7X8ANSVoUbkim9ThEGMR7WTevyJ4ps1nQcgnMwVV4B2jPWRBctJfgP1LTaLBk3MRcKfkpfvzan",
  "key15": "3zvtUzLYdVbfr8h2B54za5i3iLGjR7grXMhN2bWEE2hRd1CXx7BDBWR6jJiA2qEWVfjk7YavL9sJu9Mf9LJSPmah",
  "key16": "2NZ1GPGq6F69dZCReVeB8PiAeWX4RxgvyDB2DZ6nxy1kg2Rxy6AMbvxMzP9eW1sAio1Jo1edVctrxa3ovRUCCLnh",
  "key17": "5pniEQTEbBnQ7ohwKCfEBUE9UYrWwhusDQtzpnf3vGXLvj9VdN1o7dKuZGQkCvZfZkKLQeKPtih28ukfT7FH1yAj",
  "key18": "2DV5cbJjAJR5xASvme1ZKyGiYjrh3a1E8dDVj1B6gtBx6f9BHn5ox9swxDtbr8AL6wpiXLRW9V6nKr6HFSinfiAt",
  "key19": "38V7P3CEhaUsH5WuFX9BimKUprCqJLCtJgadtvMc1aFfyKoQZaesuHcfCgv18iVNGsXRTakfEmQFvz9mYvhjG9GS",
  "key20": "3pULcKM28ZESXpTYB8Z7aiiLp7uVP2gUxQCxsAE8pnaXy6eLGHJ65ua5FW7N7yMYSu9SdYFpsG21CctJ2oFzwWKa",
  "key21": "3Mj6jiL2jYxzXHs3ZioEobkDHDTedk77ngSgWkzFyFquXWKVves33zoARsbU94DwCL6haSrdFB5rPSa4jFKozNg6",
  "key22": "5PGN3iEu6mxgNqA8w5Gn6stLdgKcLooGu9oTxvy9EaMpXJXV2euKu4waGUNyF2womvy6bgTUiiwv8DPtuKsLMqCH",
  "key23": "4GEEzAAPcm9VmvaZnGA65cqHCwvfnxu33MMP9gfrV1R6GthBL9wkDsdv1NF5eKBfv6D4xnrgg5gstTpkZ6fHc1Fv",
  "key24": "5FSy2YM5JbvwZVm4oH81DLAGQhndwbJQsb4x21NpE9czejwJPFk481XXKXfMhRRnPXSxPcX1z1gNYZdRynWjXq15",
  "key25": "2o1DyxmaxfoB5BrGhMmQrN49kAj7x9Bofvbey1m8mYUSF3omVJwPDd4B6b19nqsFGLW6qVY9XYvkmqqR5yqcWHZE",
  "key26": "EzV9ErogEgyNiwRLDgtxbQ4HVBVvgSXwbMyGMaBZri3NmnSzP5jm9HJNN6ws75GMXT1MkZfxGmURkWszEZqFSvJ",
  "key27": "qTPWYcCmZc5DQJNLC8LWSQBujr6wALVTNcQgYQCu8vbEZt5Suexkii5q1jq9MvLRgFhua7npnmy7ymmFsDSGzE4",
  "key28": "33AovQ9FjtGkbSGmbEa8wzug2PNPiS7ZmHJKzz6JdWiEK5V7sLWdLrnDWMNJQmFZRUPHuVbDytt64tUXoMHqPTmK",
  "key29": "5Rh58AS1U1UMXB1D7StURZ6aWBz8mVrjoiMw1RTCKbhnmsjazP9Pef12AhsVmToirpcjuV8r8nLcj99L31Px5Hyt",
  "key30": "4A2iHC3Ve3oAjfqCL8GHdsaLEcfgHH53GmwoJGozTPKhBh4hGzZtmcvztUpYz32oZFvpGck2ExLEwDQyW8opSNkq",
  "key31": "43hnHBsiP3ML8Airmmb6S2vyM2AEWCYz2HgG3mYQ8AbNm4eG7Y7CPKd1XoxPyvTjy5sYtsbVK3DgiPDBf41XB8X1",
  "key32": "3s5G11ekX9wFW2pqe71z2eBymRFcGba4HLN1DmLN3bFnbiWPXFmmWFb5JxWwmdmJHKTKW2jmS8YoaRLke6gcDhcX",
  "key33": "3R6fdxjMaJTbha7WHsYbvDZtjRz7jz5yJKPzZXVxbMDFFsY9i9zzSB8JXER9hiyCvFbXkoXHMSRBNbJZAcUPwspC",
  "key34": "635W5Vy2rJ4wXgmQ8xsmm687MkNdqPbhRKEBt5eHyqGqUZ9zBNEN923sfCZZNRYXyXaeZENvqmhzYvdfaWZ9hmdQ",
  "key35": "2ES5zL49KQHLmPH115LwZ9shgrcgiaCu89eaULCYkYpmz22obS7qq2UpR2nLohstKFYKRy7pY7xqQHuTAde44RFp",
  "key36": "3gyRwG72TzMteDYTzZRbmzzdbCviANn1Ube2HBBxQuaYMQPYrPtj5dqq7h332mk2eeqPPusx2WJpPgUb7r24HvXG",
  "key37": "3J1hccYrUs42FtbUGh7FEBQGtY8pL6LhPC47uRu7oySWbbTbdmoriEz2ghuu7y5SNzSL16KrkZiprco1GT9fRR8W",
  "key38": "54Y1ckos5YWeaeiGGrWe92C5qktyY61BQhLpZAdbwFDsc7TiVbMBbtVsqxiG2mgkV4qUPn37x78GbJgBhDHYLrqs",
  "key39": "67SWTYnNuLqtmUrhUdnjzPWJYqbSexwpy6XLafBkQncCNMszhxcunxkDxPeeiLQ9HQkcKvxiQXAxKUZ9fMHG14W9"
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
