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
    "62qkiTFAGhZazeQRVDqMx73mqFkCC3jo3wErB98HWPAdZUjDpajuGpjW5GdhG6QYHkHvY245SePKAGyBBo8F6Nw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JiMSQCczzoVu8QnHESuxKohn1nVAmcepLWRkgKYNR35bgLektA8Jc9A5Ap7RyftuEb5X2LpyxStp22gdTkDPVqn",
  "key1": "3whsFEL7rQPagr3p3Nvx8J4xpVRPd7PcwxG8n2pbAQLAgUPpjUJDdP7cUNV3256YzBGtC1Ke6YPrME3dRJxAq4Hf",
  "key2": "4B73BayPCxL8QjUZm1m9W4z4bmh1TxVPUho67rwQxK4pnoKDixSktFpFwKEpKrCidBP87CQw5rGUq2PxbBdA1UeX",
  "key3": "23zvhaKs4bacC4us7TLqfUtEeZLtZZ2okh6pFi2cHV25h9LFfSK2pRr6YVFruvAfxGduS7GxxsG7K43JHKtXQoAR",
  "key4": "CsyDLf16Zn8KSTAMbyAgWttsVSkU54tZnbuP14L3mUgSR4mo2Vufmn6ZUj64pxLDuP3ibc8pfNV1Pq1M7eBjF6A",
  "key5": "5y8VCDMrN7RJ1sS949TPGDrUTF2pA5oZMgm6z3HuQ7GCUKsWRr2CmdxWmQrHhnmd7EceoqNAv9Ku3dpBzqZ4qUVz",
  "key6": "2qcrQtNbEXrUs3dv2EWmaGSb2QuVHrhmNC4rRABbaZLvR8LVQeBuYyTm4BhhRQLRNir3yWERQj13K8a4ibd5B47d",
  "key7": "5Jt9KsE3NQUwnmBAgvWF1Zt7ESbWDbmCWCve6tSds9NngCPS6bz24RZZAv8S1c57DgBchLG7buF8MS6xMR2uZhr5",
  "key8": "3MKpnuA5hXXwsxF7Papsuf6WjBCTeUXorSv8udSgVuhZryWssfe14r1tFwb25Bh4w4xPqMaYPXTKdUXtDuC5StuV",
  "key9": "i8gBV8Y78Kjq3GC1a8hooQPqSspk9aotxdu9PFreaxEsJ8iGXphBSSK2UQ8bEdFzoiGTyDCTgBk4wtHYif4QMRX",
  "key10": "4rZxnhuyp1fMapXjpbB72HhGta6QjqN2iWyBaU8kp2BaFTy3VLL2cx8QFUpnBeU5yRYJGZdwmJK5MsuVYrNQzcvi",
  "key11": "XfzD7sXW4ZYYChrtfeR6cCibBXzYgYqndeRTwbKMLABBewPEDPbkwdaeRYpLXTxagQaUXwUEPWRVVvmdqvXDnSZ",
  "key12": "5awbzR5WcBi6vpg7cgXpiMA43UhRUeWKhPe9U7fbazEb34PdVD1zcRfKUrmFAragmZS8wKHVG1pTTg96quQFYZeN",
  "key13": "23nVX77Ssn2SDFXXMUUz9HEz3GFo5LBkCkaFvQVyVHs4BM8H8ymb7NZqA9kthwT7a3LhWWkgyahSrUi7xXUWXE4a",
  "key14": "2RmKeaDVULHqHQCoXMetkoWCGZAnADUZHhRPtzCtYCXAN4nwTYeVx53DParzCgxJmPpekAW5EW1xEYZ7SxBq9S1m",
  "key15": "2zW7Fy9KJroXX9A26tKJ2Wner6gj6sUKZyUxdAb3w9PMWxLFyDWjAp3zbcFBQZNc9sRcZFkZFTbDEkjasgVNEJvg",
  "key16": "JMJCNmUDYo9CxUL57RSjMiTpvM4F9iSeE87LV2BX2VbxgBucXNGhEszg7yyBZx8uBFPEgrCVuUHNyxCdNvpxuiM",
  "key17": "416xzgJ5i7ChEczuzMWLhwii1NM7cqEbK9iqo44bJLjsdwGs53mieu4TGFWm983mAw8ftQiJ56zMazq8xFMPNge1",
  "key18": "4mTZmsW23urYrGtNZZCakgnZd82EAWEaDs2hRChqqvDLo4JCdaUD3hyAUpo6wDWAtspkBTcSv37LE3GcVK49TxYJ",
  "key19": "4GVYgzD8YMxuZFqVYXwKpjRC5T8oWsqN5ecZSyKi3o3uztSEQKLSkscEWThuyC23KTpCULHGTzEqN5aiEp1Wjq4L",
  "key20": "55ZadPpQV4uBNhVBqEN5gRGSwfFWYLfwKTBUCH47JgmEphpnxF29hEfabaksWcutD7TgaLLpUPVQLaUUCj6w7qy",
  "key21": "2TQbGFuaoUbXyc1tNY4TC3SvFaA5ZRXGbbaXESHgaSEtbKVYpnCgHctCru2kDwLJCbXNa3iNTQ99CgqjAR16jAUZ",
  "key22": "2W8qDBvucjHRhQaqqCzi4JbvWRbdF9FRUspDFqemVEXLypbN8EUG34DRtYvkdLVeDrSTrS4rZreLgKNEPVGjHj4x",
  "key23": "21rTiga5vmod6a29wiVhw85PoEHjdwvv8ur3GPom9T6X8TJbDFAs1ZqkNT9mKtoKmjvDbXxjpAef7pQ5GLFGwwUK",
  "key24": "5jESzeYGmYAUvuTj6267so7fUAacGyXwqtsuUrtZRQe4iFkCV97npxdYbgoEKqsYxsRmii1RN4AawKpYaX5TKoGm",
  "key25": "36ZWom5yWr9ZpT8UN9KVW9Lxb6pA7Gqh9KKeQfRwVTDQ6ESat88xKuLPGFimmZDNtYF8Lf1vVeArLDiMLTVQcYHb",
  "key26": "49pbUjZ3Z4qk1fZVWG9YoMnSJdKwAHmditjWRzD9enVjkg6vRwVs1X7SABYMr2kkUE6baUDUpooBMkt7QpLty8Ao",
  "key27": "4izLUnJDziRVVDeFEEsRXvkc36UFp7JN4zTd5QRn6btw4ykixu4fNiiQVPGRyMbP8hxR3UxvyaW1pvbi2MDx7fZq",
  "key28": "3k4qaEDF4EkUerbQQtN9PL6T1M3TcCfPLKRHWdHncRb3o8Zkug9KinPocZKwjjkqCuoJg8ZjHXzVnWzkAoxPmGYd",
  "key29": "4ZQacwpjBkQUBUSwJxcuGwigRPApkLwsUij8mJH9uoijjfy3SbpYiGsMH9WvtnFfnAFP2vuEvwdAkWd73VMKHZNP",
  "key30": "5Qes8fdqPMUBJWGsvrcuE4jJrvoENaZoYPL6TzLen8sTQT2fHr7N1r5vw17RkaG9yas87A8PACB2KmpsyNsD2wg2",
  "key31": "wzKwfHBaYH5cdkNZDAdHDSozVX38c9evNatzHd6pAkVYfdnN8J44ALCPi7cFdgk62Cx8u2HMVgAWhhN99SF3WRE",
  "key32": "5HmruRJUnXRvPRuTKpzeuV6aBP8JrfpyfXSVEujyv56A6ZZJskfUmrFvJmwhSFKAjWNuaAeQ9hWCYA12TfhJfzZg",
  "key33": "4RQjQEwKex1KuZg6RXZdwq1Ke4Bhqs6vfaiMQQYcdboeQ9X1WzrRY525un46pqPJJeQvkD11EN4gGFCW2XotqfJB",
  "key34": "394D1ipQFC6RDfA1egXYpyrv3Hr2PE68uXPAkiozQ4E39dLZUzzcUhZ78eUxn5i1N54XMh6fASiy9sKeH4WejhXQ",
  "key35": "5vLSkH6Vgi59XuRp5yaGwXxfupu6Jj57RBrpik6sBnES2UXPq69p7ZS4ouSkMZeqrZPZkdiohngUakYqY3CE6knp",
  "key36": "4rojzSLBpreb6apqj71ibQPc2pU2hQivTrzznrcjSrNFhNiwH7d5JXrUdbbreruHnGVD6ZY2SWQQEmbAVcpdgaWQ",
  "key37": "31p2gi35byh2adK9AzcZMP1JCnP6rQ7xgq4EfDpeF4SZmiprTrS8XvjcGTZmxLXP8x1Qu757Y8SAoC3jiU2U2V8W",
  "key38": "5Gb6xTQiidfkiUyCZnChpLX8D67LhXGH29QwzmzrRzKrwgfBmkdAmTWBL3AJfCqZyH1Gqnh5Bcjo3yd6pPY2CgF9",
  "key39": "5DqtjzPZJ8SDmgnwP7wJA3XXPqyD8YEKAsKQTRdgGnPQkmqEFqUa63SvkHbaSxzE93ndwWZkopJtNEsQR9NkQbLM",
  "key40": "41qq9m3aCqRFPcYbg5dsjYaZydUxbz2PtGHGFgr8mYpaHyQ7EZsQqpEt8TTzdFni5uAzdTH68dXemNyyW7baqTAo",
  "key41": "94WHEBtwrEApvqKqTh4LCButJZKQvFm7JucLNdfB5LfMkaYFE7MkdoMMFTifWQE2x7grzN5bJtyx4SK7jUXdiCa",
  "key42": "4Jq8qWPCKRANmQuKqmfRJkHWZ46fnvdLZZMh5mXK5UYtqZLM75dhj9wPpW2yxTFBgmw4kVFSq4CaeRh84SXTq6Q5",
  "key43": "47wUi9EaxXs1sv4sTf2Ai3YFxaP1CnthcEGwp2te2abh6ewV9fLV8Hy9xezsV6H61Di3u6w4NuicApvknthgPR2m",
  "key44": "3rxa5Bf8nf7nzw7t59VAqfQLZv83dbz6BHay1YrzAR7SzT3fYYFf8hWQ9uND7VSkwYnZYhDCmuRddUZ7mXc8X6KA",
  "key45": "2TsE8n8GKRgJ3RcCzREMUdDM4unB81pVFWBefgm9juLsZtt455tUufQtfeTgP6VquZp2C3iXmiUHPRgXJpcgoQm6",
  "key46": "4sMTTYZpz1erLCMWAiUzr1iDFomkAw3BPyi3krk2AmFUHp32YkZKfA5z8cA4XetgaCjCVRVy8Dfw4XYhhGf1tzY3",
  "key47": "3Gn3bpyNfwKeuU8w6Q95BNFzZV3eLgD9o6AZTTboQ1ewtH57mC6vQjRtovdoyoYNyb84o71qFvibBCnhUijWT9hG"
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
