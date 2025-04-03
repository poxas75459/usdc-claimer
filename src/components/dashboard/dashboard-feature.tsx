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
    "3VXYS1Euf6o4SnYsZLgcKvR5CAXao6GWvuypQyztYgKz12ao6rAax7GNkYjKgBwdrkrEURHtfZNq3Egxiei3VMg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34246Q3334eRUNn7KpGYTS4C4qfQPYoXsniH72TxGipBkEjXt9cnj3bZvfTri4Z3VQku8WULGu7PmzR1ya2oEDWT",
  "key1": "2NKn19ZRBZHbDAFgssEdmHuc9dtkF458SwtijixpVbsuAsWjVUkVQL4nbd3xVe2puhkR874PaQhWztksn9PgUkzs",
  "key2": "2CeazKsDLzvseDtQxED8pfftyQve1Y9Xgk5M2RDgWVfxskdo3EDMdzHrdEiWfS7h51ST2ocD827CcoSnmYDKAQEQ",
  "key3": "544yxdeS8ninGGZRTav8idWGBbqwKeyakXUqrSGPjBWcuFZ7JDdvvBV14K63mDHaGDuuFnv8rxEZggqz5A7vh1z8",
  "key4": "22TqEKTqxibJ5QNqc88JUuczrZMYEHNMo3djWWZgaYEWwjzrSA7xBaLiBM7ym4eUQqjtRkLc616hPndhBZLPR989",
  "key5": "664JkfvYikoSCB6dqn2cAX6uhfMM88uk4k14rkQZ4Tr3vEjDuxe84W8vUJj76psnSZpaYDEUPwpftb9nyHFqhByR",
  "key6": "4mQSjonQCYeqUwbngYXs3Yy7cYXXmUpCehTTLnpkaavDzTLkhNT2Nu7C7jUQ5svSRxCVUa6cc7sTzpnRUwxD5F5F",
  "key7": "3PmemCeQV39grKo2Ctddku64TkK3FfYtM7VgRVq49cYNzXT6uJjwGaLc6KHTVa7gbFouqG6g2VwiBpEp9MEUkDPe",
  "key8": "4uC1F3ix2jjndFnk1Koc4fKJe4q2jW56GW8gYc3aEE4SwXS9Qv5GbBC6gHNikkJQHkoN7YaxY879kTyjfgLBpmn4",
  "key9": "5bWnhkETSUsELDicqGQLt9hFVr9mmEZ7jGTUivj4ccuk12wYsDk1NtG2DTjGRrPQqTiyKuGDMBR574SeYDWPwqBx",
  "key10": "EorXHXPWDnbjtZ9M7Gdm5FrK3Q2FpXLGyPZz5wHWfkaUsALqdERxhe1m36DCL7HkMeDD6BBmcsLrY6TKydedDDy",
  "key11": "iUGZLpUphtepMgwhMQoB3SGkw8A4nRer2H8raJ872WD3ueF3R8Q4L5qbZL2Ef2TdEu8J3XfV65PHNfFuVmcHB4P",
  "key12": "hQKpoDi2jhs7pEb9ci9f5imTtb5k8mzFZCx4fmp5EtQ5D9vd3H8J5wnHEJfaUj9i8fgyi7YH3bJpkr5a9fqcgZp",
  "key13": "2sqp4mPUHDQuUQNLrZXiw9XUBzt9n93feeXCrh9s3erWDdayTD8ecX2xj6fWyhLbDb3vFgvUvLEbwdQLpVti35sv",
  "key14": "2zVc1GvnMtm1ZDVQZXqD5CwXT9NDjw6Q7LD3z4bNnbZxaThdE4f3gjGJy6d2XtyRaA7RatfkQUDcos2tjWRah3ee",
  "key15": "JeP67SRVoKF1zSKHsPNfmMuvQbVnuTLqvHefEudrFq2x8xEucnsBovQeawzsNdL4p3xTeRTAamJZUYzHzD985M9",
  "key16": "4L2Lc9yf1L6MJeakXDtLSRuuAd4VuMhYhBGAbqWWSpBCcEjxhRBe7vXBYffhkh27cN5L1XBxZd7NyTFFK7KtJnLg",
  "key17": "56XNHJ3hChaBpXEsYvdYhvTSgaBs8UCv7JDWoMFAzW3kCZMYkzw55t9XMYrLHHoNBViCHq7bRtoP7TaUXq28ZjDS",
  "key18": "JxV5NwPiiTJMwJdgxNmAu2m5FRYTwZDAn4iRucGtdZpNGSHGrjV2DRWq2xFGwWumeMMvNziGbRQoAG94KA7pwaK",
  "key19": "22CKZvHduRqts5kpi1K668LCm1oTex9pr91BvVkBBxBLMH92MeCLqPKft5H28hTKbRAW16njB2yd48cjUdHpVveP",
  "key20": "2KX65ypU5uEkscGT8NQQvhGPFvXHWMYvqu7SbpFedhDZggFHL99evJXNvRPJq4rNGpxyzsevHgrNd7D9DdEDLLyS",
  "key21": "2rPHQKwBDNzqTsWA3MXQiKyF4bfLEdjh1VFdP4EzXYUC2USU61no4RBDtsA3pVscxsQ2HCueDPAVuNhge3HyLV5M",
  "key22": "5xwXtzAtCXocMkWYNHujxFbjQg9Hy3LGFkmhkwG44UuYJLyEZVFikKSwFS6rRKkoNaG2dEPPNfRagRMNTeNVig8b",
  "key23": "48YQaQyA7mwp7BzWEt7mjETGVKQmzKvXScbWknuvHxRFcnMLvfyXWYmWCk8uPxy77uLfqNsxoaEUsKMRssEdZGR1",
  "key24": "5DMxPk4HpQYJPLhHnAwJsFR4EsopcVuweErPKSzBRo3U3X5kAHDHK9dbwh1iKCFNZdbETwavPaBUjeLtAzcR4Ykj",
  "key25": "4H3kZVSaVaS7V5x4Zdn19kSWoEpmvt1RhJyHM7jXxyKMKudC7ztXjSGigvUzhPuqhCzukbdgdGDjBPbdm2CWhFa8",
  "key26": "2MCsFo1spRVH8fXwujjgav6gXgES7ku2ZcXYRnLTMUknYAo68qDhk6VPm5cwXJ2KhZp9ZTMxcN736Lk25T4bZgbt",
  "key27": "rpRjdVBxgGdNmf4HYEvLtfwqrHzs2aiPJi53WVTBa7Yx8p1cucFofBJxCsE6hPnfETVWjzEv16TQwmb9CnC327M",
  "key28": "2HLEL7x3jgcmc284e49e2pHYhP9wpmvKPiEQb7SrQnG6reaV5VbhShar3V3SwHeKM676y7abpyFFEL4tEvYGexXw",
  "key29": "44pJd7AZfNvb914uBvDitAyGRTEDSckfrCkdhNuMKq1FLjjfUETY6hPJd3HA5NPauCJctwXpoVvTaChgdCMuQvaB",
  "key30": "3WJT4vJdrjTQC9oFLyStJU72esdgxv8hn2ruVnDLuvSgwNW9oQ6MpB2trPMZZ6BqU6DhoY4vVrpGapMtnrAAPPxn",
  "key31": "21Dr7fiYE1VNit7nrgwbdaKhymVYDNhtkK85dGnz3dPVetRCLF1yeom7Kcmfq8TfKGrxUacKL3jL1K4GhNkUqLTK",
  "key32": "wjojMswgAbbDhbdj4KnR4LpLVGKVvnAnfHfj4fkwAVvkbuhbap7PoVatdNcH1pyzyb95g2EyhawLV1oJBX6TBc1",
  "key33": "31XmLfQQv1R7FZdypvyxhpZPvQ6EcWZj1oMr6wmZyGLtnrYp4ES9ZsRuW8b5oX6sPHxT9CYJGA5Wrv9o9N6gYoVP",
  "key34": "Ly4xdwUEHN56hPKnwDoQq1JfaaEBixPuAktsmpjHWZwJGEtuGF1MwVNn7uMar17Kgvn2sm6ur6MT9eVpyNR4acP",
  "key35": "5rV7EnbPKB3p5xMFuYqudjbc8LMUgdZmuY8pjo5uEW6Rykth8vMwKv6n5F6h3cGJAKsyn7bzcF6yEBvnPxjHDfYn",
  "key36": "5iKfAEDkGcpybu65jCgY41UdiE877KaudCFNVkZRdkitRQRVSPLBRQt42kaipz7mqNvSom5jzDmqn2zUVnU4F6ky",
  "key37": "2Air6Dq5bYXRMZAowa8xWV7rWWQ5YRURATxCaXnqJ72t949ELE8rpTiuZUEKzdmrG27zXdr2JidHyYPSmNTHhyy6",
  "key38": "gQnGKQRnwgrMKYMrBaHus56shfF7p6c87MwMqpYnXzZjqwvRYBVLo89GXbsPcQ2jTckAHWbVRZm68yoZe6zQjCd",
  "key39": "5ci1kgRcTdq3kEbSWm6zRUreHfV1MqzkP6fpjjEVdKasdnzj5v1MDVsdNgBHZKXw1yvioErL5JW5s4r2BN1Rqczh",
  "key40": "4pNwABvkBzyDN7Gy6iwAwPrX9p4Juefi8zvTqg2RTTzdiKJn3cg37W2QrHw3f15UVwH3Ve38wW2Vf7DqWtRaodNJ"
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
