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
    "3CeQhZXuxiuCiDtnZS41QseVwnQB2T4izRgHi6hzHTPt3b9YUEK8u4uFW1oFL5JUGiUzzXBqJcZ22vEFFzFz41VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9hdMemxxXFMLwhQPCDQ38asnpTBdWG7LWRf99Z913nibSxcQyT2pzs1Dxqf8HLqkUvgBydyYjLRAc8MowyxCuMW",
  "key1": "5VELPA1hasEtMGKVSDspzyF9G9nVdNWRnxEAKgV98tpuG2LazwZaPkffcQX9xpueY6F7iX8VWjPKzYyz8wXhtQCe",
  "key2": "EHcR3RL7ht3bLUEqxJxLiUKbn4MQdFuVSDB73HXvYGAxdXms2dKNsxW6WhjZ3YKa91V8pb5mxMDBD2EpkGAcNF1",
  "key3": "4K9zjXdf5LEtuKma8AnoZ4gXsshe6JbEAZNSepVMWogg6FoiZTjD1pQADAXRFFZGr9DZYDyA8TaCSSMMyVfDjcsa",
  "key4": "7aYJLrwfhZdvgcbaiu61g2L3x4t19fCxhyAB24UxXdgdpKiaGt3hDSbRQiE5qTYhZ5dC4ptLHrzgjJeLehkrPSs",
  "key5": "3Z1yK8Dkh98iriAdnvXDWY5ZMBw2UBajX4aNBPDUdM1y67KgZN7cjA8okud9TvLSfY3inuwwEjcerdFAAApyW2vK",
  "key6": "5yJxgANr7UXhnnkCHNFhc6F5cJk5LPhgkeY1kV8pHqDQxncaVhDSvaZDNUkiYs5weHRHoeVnLon6qWQLR4TeZY7s",
  "key7": "yZXE3VCRbmECa6bKRLfjCj5P3eZLT3kSWWBEernhQua99CfNsbh7TY4TfaGLTgbxE6FUs855api3zucRfW3ZfXK",
  "key8": "UM6d3KUGEoqSQeJyfLSxpZkVac77UB4mpNiiYQUrd1FFS4rfLDg8dyowzqVtZ1nr4iZP4rTCEkinCRbW2SBhWSX",
  "key9": "rFcrYN9D3HeY9tz1i2AGxDzjbGB2obTqtyRBsQmDmDEZJWfSFJsm5mQ4No3iuym55uh11B1h4qapy1e7vi1VSF3",
  "key10": "4d8gbGXQXwbBBxXSvpbT9cf5sa8FpVB5ixA1mbdKyVtSDyiKebxr91BSLPsxAZQx3Qkq7sy33uxmUEfjMw5CHRj8",
  "key11": "2GgGVdNem6bXnb4TnsZ9RsU95vHzsB9qnTFxczuPdD3SdmbXn6DmLZu1aT1aRZdkE3m8437JU7nWfQokD4ybsfuR",
  "key12": "3GUURarAZrWCBRrTbnLoJVo6Si9FMfaeg3NkSkKhbDTyumfVKbES1sRyLN2g7FrR2y23SY2y83nFJD6Y5eN2SKX2",
  "key13": "LfFbVEktuuxr5D2m9KSXB1gUeKJBtySGE2ftqatgQJgA8DwKz2Di8eUQPx92rHsguEDTDhENGvpMamnh7Mdy4fz",
  "key14": "4JLR8NfyWd3NN5RhPTKRJhK7hnpU2cfT2VSpVJ5oWa41kULfNfLXAPUzyJfKLTo29t6F9kB5mS7qtZ1nv9kwf2jJ",
  "key15": "9Lh9SH6NykdaVibWgBcinEbLpKUcT77hbRQfJXWzF5SPC8F32JdEDedUSY6asG4iARy2b2aAjCNBU62C59ibeJp",
  "key16": "5CirBmD4Nkgbb2kvGnijLtNPoas8vKySXQxZCYSVAdPAjDdEMxaiaQjJiddbQWif8zo9quyYJcUd6fdqS5ECz7gH",
  "key17": "25gTBBGn5E7dz2ZPCDWHuyHVibzAP9SiNsL7hEQjvv8oYFxhfdK2zxNBr98aEpRsgDDhiNgV8kGQ7iiuEHTVAB3h",
  "key18": "3joSA2pVKjLrWT13zUdnitUvmqtCGdBEqJmMqeT6dcfCXE5aX8yRRdf6zDwEbGwgN2LMmSx9t65YCBtMMB3mzRLy",
  "key19": "NTRSGKLpjhKxYj4N4kKhU5HUmCcAHd5xb5NEcQfWhERpfJLXp5YNFb2nW7BpznRx4X85eEmRtwrZYChPzvdTKFy",
  "key20": "2EKYCsXwHeJphcbDcX4BDhVaDDF9upmeFXBvYR48SQWcxMJzLCNPGZngLwyWh8j8NgsXiU93VrqTmmhQAJ84mt8w",
  "key21": "61eBDgP9hvq5VMXUUJG1Enf7Hby66vvNTaxJWDeuEHKxsbXXBSeGD9Pnff2g2KmADMK8LwfBEr6KGVHZdzVnCrMr",
  "key22": "4EEyN2wLyD67NK2mGdGReVt2z69yrLFQiqwwkc3jxbysNv9RPmspL9QiVpPVC2gnoZr5f1WeKeaLYrw2bkVGMKbZ",
  "key23": "wWzz7idccfm3rvaL6Dj9L53ZFCFfUpwHF54EVakvWW7Fmz2o1yS1yY9AxfX7BKk1LsNrXxgLpSytGmGoFo6oo4o",
  "key24": "4TyyvTLruhMJGaS1WwgXy4QYRhPwJExQRXSaqvq6L5L3qaTjjfbn83iyBYKC7MEW1K8e3SUNVay8SAHsdpfCWNEC",
  "key25": "4wDvAhjWQ6i5ZeRkAN4Kkm4eCRvVWjrTQ9twjW5PMsk81FzGPZErZzCWeb58R5S1w8NHHQR3DbuDuQwXwSYky31v",
  "key26": "51L2r4KCfqR7CrBPt6AMEh8tXrYnC7FvSL4C1RLvjuqmh5HvAXAuXECoCGm4ozzEZYHRnYmmckkD795QproQjeyX",
  "key27": "6sJdxXYp3TsTC6niygbGjMRfNws4aBtcNqLcFdfLis1oGK758DBvBo5eME6PVD1foX9iugRHd7PCjH5eTLj78kR",
  "key28": "313TduGvpqfe6eXpCzuXeRWQwMVAMNMCmq95PWHLX4dYJGhT4MFAtPZdFSMPTPw2FJQvPaxQyosfbVDWdBdXadBr",
  "key29": "5Uk1cf88ZBt6Am8jWMEm2AJNTCkr3XsiBCY14To1m791V6dmBJ4aVZTPANfw7Huyki9DWen2r1i1EykcYPv5Msg1",
  "key30": "5Qd34KbNH6GRWjuQo56H6ms8hB4UPywCvxAHxr93KuxKPEkagRk3junVhbgQBq6TC5d8UAqW8ZMZSwJ5x1uU5vhK",
  "key31": "3uXPEJBShWdzSnvxqtpKuHVmEezvQomC7We7i37zAb2TZYdqZw9kmp2fd5B5GwkygHpA1ZFrt63jRJ4sVaWCQKnF",
  "key32": "2XkdP7Zz9RrdpsFgRuoei3UrPVibnft4dwkTySq1VgccbbwJdvhuzMht6NndkWB92k7LX7y1AnXmBRx82kLx8BqG",
  "key33": "2J789FybSU4AYbuEJhAp6YW2L64yUxiBxf7ZFFymFgAQaR66m6Njw3xjrvfU3sPxKG2zxpA5xZSktUpHrapbHZYb",
  "key34": "5BP9BNV49TC8qdrkvDPyQQ6Hski7w8x7qNej5MxUtaENyRDCJLympg4vKHLCuonBa6XZUNvzBEr2CS3dixptAKyZ",
  "key35": "2jr3fXBopiygqUUJpQ7MGwWq8AdnLUVQ7xheiP12HiZdbzrPZMVGRzvXhcTTEDF8D2pwaWtUihNKC3y4hAP7mioR",
  "key36": "38JfythT6ohAxTNguZqgSwZncYQdZcd7Cu1FerGGcj7x9JeJeLBJqMzDmq3rgoLumrauGPhcxj7ACJpGMXu4NVn4",
  "key37": "591KGLbseJpCEiTTMA7GNq4XJrxBQnJkXdgktVE66CGv6cqa1s7oVJcq2wwU5h3qGby4cqhGhmCnnpDsWMgjpktJ",
  "key38": "5tNzB2UUdQjKAQ6KzLk6oyWYkD1T24vEBsETUbvMsbtXv5LyUbN4dqNjPmpCsCDJYUFBBYAyZGvhnVEm5nXM27gS",
  "key39": "2WtVx59tbRk9hBH7NfTtxVC4vqMV47ty9EcmXowys8gPkTwSKJ5jFiG8kukpmL6fBgPbs21k18gUpGYuHYuNcp9G",
  "key40": "2DVxmSw4oaTfyPrL64n35tBmb1QvktTCG3vFmKggsu8LodaZBHxefzpsdAfksVsRwHM4RJprEPndoAjfPopsqyta",
  "key41": "4jYsScB8YxL3aBxL2tJTTN9v71pu1LLqK2CmwNHptkN3bNbCW1Prq4ZuBPDDkpYWBkEpp2PoUoqUJpB3RoEHvEWK",
  "key42": "QSQcWts6PMUjjtb592s7P23ENj2fcn22ZFtqaAmxbyeWHSBcRDVQsgCETz3eYw6xKmi3gakB49DM7PeyB8qYFTk"
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
