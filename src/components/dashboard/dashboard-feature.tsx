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
    "3PYZnCcJLb3DUcYisai7YYMe9GFUnGMLF6tGeKiFwLYf7QAdRyRQFFBJTvsJrAnBMnwP5BxVSYuptLrXhHPQrWKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CVaUxjE1E981GBprA46dvKJc1SZxzrXYRNZLd2zAqSD8hHEsEUU7giPV1Tixqt6tqneiC2QpHeFBQqN7NLUx3R6",
  "key1": "Mcton8eiKxXFpU9VvwNJk6yqfvBcH8sxtnsMHoZ4uDyQqvGbrh29zH6gxfxNi5Kb4ckAQQb7ZMDhvZ9A5TUFrJ8",
  "key2": "5UnwKJQPbEZrQirqHaEwexjbwRPV8yFXb73cbifb1KWga1GHNV1foCrN5QGjQJhPa3SBJQmgZLkWMacpHtDtanhW",
  "key3": "4k8G96poQRGus9ormDpZVXdLf3X6trzkQvVEhSzSXZN2p5aqLCf6RpUBgdShLXAwzz8fR3uyX6C12RQz2FSQw1ZA",
  "key4": "5kk9jgwduPt4r35dCCt43Qmz763yFDW3wcKoWP9ZLfoMrPA27yFbWRJQRjw7mg7HhE1uKvTsuTvfBGTaFvb5xgVb",
  "key5": "2R7JGohsdnSBUef1df3Ccyi6cBFAm9s9WfnaE78Ja6bMLxqVNz3pk52Sa6R8FygD5MWkJUKe1LcrvWyr9TUCMDR1",
  "key6": "5GEC9kRdxiJoSSj89xEeqQLpqSYxsRFr7U4fGG5mxoPbRzzKw8SXj7nFbgUXdqybsLpoDhbDnwS2fUiS5USv64FJ",
  "key7": "ohbzHmZXCKa6zgUJY2LBB1LHxgdBBC9i4kra48GmFiocB9jMpZVfUxzCHiez3sLVc8xSwCJounT72JNLb5b7xbN",
  "key8": "4ViCoDQFQxYsDKhFkHZ7ZcDWKL2D6sYMCM1ZSVniWobNSsLRizxvmpLLaoVhs1yAwncq6r3fDda2VRtCCEtdh1TV",
  "key9": "5MidFH9XnAFWVNLhRJrpQ2WMLXx6nNLry7Ys7zzrvqN9aXCegWpfY5Nje4oeV5sTVSKBeH1yAsBsR3iUzKjgHaYt",
  "key10": "9QWroTTz6w421ybMzVerEhJ2d5EgFUhxbdcyoiBvYcwcCFrtAJTGeHF1HGzjv5c12sMDAHnQHVzhYsTJYrv6itj",
  "key11": "dd2tNThyMXiMZu3V66b4xJZkTVwSxSgp9H4PF1ZGgjFZewytUHm63JjJdVZznv9km4enVFBiH6JCd55ZsnXvLHJ",
  "key12": "5apiXBw9YxmdwEAVt56aCTDYMUfxhzMzaaYoBCQRzgK6f8KkXENFjuPW6UY9pxHyzLm1SzPoXv6taWNd2YWutpYB",
  "key13": "2bGNfHu2EV7dJFuGuysZaq8BBTE92GAPKaapVuR4Zrxh9AhnHqgPzrFxQ19HYWyt8CYMucTPdn1e17dDBW4z9q7N",
  "key14": "5yViWjk5AMW1Ay53XhjwQwshagRdSebRmLfd3CGqe6mqRQhwcYqCNinSC5mnkrgHQsvbqJriTyiSvmeYQNPmQZBf",
  "key15": "2ruS9uDDAGPjo3ScpBEJbs36asf2DZBsiTYYzT41QqkEZz2tp8cGcAzBbqxjB5JhAkbkxfGUE3mPTCq2Wvr9uEQu",
  "key16": "YHEJ5T34Y8uTj8wcNmCCcg1QySR6DAmRX7C6ncaagZRiPyfNpv7EwoERTVAQXnsEmzVs3ExYLSHBPziCgdmFMpA",
  "key17": "2fGMvwjx2KAcb2itZywpdPGobMjX4nz7ogDWGAnBB923WTohTDwgAmRri7CkwZECegzEq6eLPS1byBnCCauKGfH4",
  "key18": "qvMhrq38FdXqcT3oAVWBiYeEBpX2Va3jif6MEMcxh2MEEzGX48jumy6Li7oApDwc8kb6i8XwTx9mMB49PGXQagn",
  "key19": "VHiEauee95uDHGEQvidqUso1hyVY4DEFrLGjTfFigvy3vJrGiM8piwN65xMANCkDWg1curJhfgnA7zPHg4rjPK9",
  "key20": "3HJDU6u3APVy4Cp9Rk8QhmBDUgJuausw8Zciu1s3Rjiup73gBRwrrf7DtUorJQ9TL5cPrRumhxunj6CgmPJGcTPQ",
  "key21": "3338KYdhsZdrjaQzA1wJGthFZaqwmockz7BhcpFfXwwrUek8ggzazXac2U3JaA8jprk696UfgYWbNHEst83y8Ji4",
  "key22": "51SfM6vjGTfh75LgaD3wf5Ds4PJ2cFsNc5tHTox8xf6DxZrH5jepamUDJNgYvGTvV6VxqTRDsEtDvczBbtR73VXA",
  "key23": "BkSgWbtgxop3mTnpBxMaFaqMF5ZmJLMurgJXqESwtDTLwMTm7uTbf9SMrT6sqpKFzjZZa8VsaHpyFVM9N8QNTtV",
  "key24": "46gFHkDXK995xtGTVFrEAquQjJDwFuLPyUchXbs96oTr3uVN3pp3Rt8hnP3MYYVFi3zegter2z9mAaZforVK9sEr",
  "key25": "5GWYHCDZTSbqNZef1V41TctUgHpULKmK5boxTh6nrdW573XsWxBgedwYfRuZTDTX2BfJuGEUPuxF2FZtrLTVr1w9",
  "key26": "5mxr1UNHJY7GdyhwC7uBveQ1raAB8Q9zV6JNjV5C2fuMp9FU9GBVJ1A5spKGfcREocdz3QgSKXxCr86TC6qjpU3W",
  "key27": "28odTizvSDx7tm5qnDY62ywbJoJv7eVu3kJ7qQujS4spyVmDTciBZ5uMFqmsHCkbs9F7QLhA5hM39NthttFUfrMt",
  "key28": "5vd9LJuZ6kmC7tUwXVX7KFh3qoNGLLVpgDG9ZiWhsUTLo1YSUJVVZx3WyhAxnRYrgno7WRSAutzF4QrXmiCgDb4F",
  "key29": "3GbWEMEHps5iiRvq5TaC6RSCNwxnGWypLknM6HyEKT96JG4X6TKEGAzeDskTnXvTbVNgzxo53vfXssFrv2dH6P33",
  "key30": "3FWKKvVWvDEkVFhcZJ5Mcx1rokdArj9jpBnDWm5i68dxWQXysvNbHRZoceeJaEbK8jfpnMX6tjWR6idRUXHeZv4D",
  "key31": "3dvUibLNsU58ZmAUgeZG9cMsUVBPqxrddEoH4vyoa7GCY4q3dinspaiyZ6iKUVBE9SHPYN5hx2DrJRq1orcazd9g",
  "key32": "33YYFz47fWdssAybooEYLo8GDwTDSinXpTM4UGvXngGbPGz53b38kAFdTxhBri8ezxtTHYbddTfczhxk6KnZ2EJT",
  "key33": "3Z7UfMrK9qEdpodFNijNdeCRhP9PReX3CDzHo87iFADLrjHr8sRX4mT1RvgEgEmvPFnxW1J3iodrEmtAJxe2mFzz",
  "key34": "5HmA8GXui17vo7bsXvAUbN2WffA2XVx8uCKDLuf9LwULsfTNgFZpTmCLXUbdRnBBsCGAR6An1KXLQ3RHU6n7z3ay",
  "key35": "4S3oLXwd9ked73Wbfk6xkYFFNszj4XKV2zeXpK6ZfCwQBUkeb6n6Zyj343HryRVk2Y5sTp4BCcBLZ8pdA8i8TnEr",
  "key36": "5CrLofKdiK6a6NovVTqPXbt8jZykMVHLvfcdVnHFoaf1iAdfjyRcLJk1uqfrXzjVDEZZrKcM3FyQSn9KhFSdUfG4",
  "key37": "4PvUTTMe2Za9TmJr39kR2VDjLvLS8KQuf3s952ht38X5GGtrGW2jJQ74TKeM7cvxhup9a1FQnhiS2U5fgWL5dmCJ",
  "key38": "256BrSiakpBeJhLdmsv1cpviEBrdjPTuw5oN7CkyEqLiXrU6vdLKQ3VBqrwMkSzj4ZYQ7fVzmS7RGEV9rKb2kGvs",
  "key39": "2EqHW4LR6hWumrRtAQcEUxZy3HHC16HWZmVUqVbmXno14NhucqukxZHA8UFAsCzycXUc4rP6RmaP1ef4sHH7qFuH",
  "key40": "3ksU75QuCeZbMtdRhAaEtEtG8Cwz2ee2yBykp18ZoxNwoqDC7LQCbZq8NvyjKXMeN4k3ppaymcgt1WFW5iHFghkb",
  "key41": "2x5CPJZpDF9znW6qRsiv3JZnqvRp2b8pn9RWWxgBrGVumc61zWeUGDch6jSKdAkDHek7bne8nTgCMpAMWGDJ953n",
  "key42": "ZHyKs1oXXersP2R6sni3q7decfsnpfQLoXfBMvtX23SZpGLz4EwCcvAcKbe7v9RjyuGSa7L3nn76MjE7AATiKPd",
  "key43": "42e9TfXTKAzxhpmakZG262fL4KGtaMriy3cNdrZs5m8vPevxuXDzqvoGuSPvRtHreayWfHjXFr87XJuQ7HTE7DmR",
  "key44": "2q1e8dddXwF5SJD5JoY5U8QbhA9Kyn8vdi9PGmJV94YSCNgMX9dX7HkU5a5z2mKJGwzVgVHmeEEFc71B1UPKj8sH",
  "key45": "3ZrNjo7TxEard71hdAZ45o9m1aWWpKV88oy199tA4dipLRX38zBHhPm5Aj2MbHeWPG2Asm3ARuvxaNfgvq5EwcUb"
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
