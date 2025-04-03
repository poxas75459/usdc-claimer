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
    "CcXKzyTTzxtfeQM5P7Wh6TwamniuweQv7GBjj5GsWtQbupwS1LVz8gLNkyJRzn6vQiihPan3SnHRmFHopfv1j4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5Wei7E4Zk3XKVidnQMsAzqW2ViDJWfhWoatd7rbdUex4KPfiAgfLbQmRMjveEdB7au8AVwE5gxfV12Ci9MBsWJ",
  "key1": "3bGuAyx97VAK5S6WyMfTe3vFA7pDvdQyr3keRP7e44aTAyHfU3Jj4Spj7wrTn4Hm4VpeExVp57bvwS4eqkxgdzSu",
  "key2": "2PrZDnLjio9Hc6rLHxmEAKfKidak6szen82wvfyGr7EjSSr5k9o2V2mxcsAiMyKMayrKGH5BVsJ4c8FiK2HJ4x22",
  "key3": "42y3ejF5PCgkZg5foz8DhC46FZqAbuzbmNkfzcrQbUx7eSiwLL68zKDZHbW51fbmCo4EsZZtvutEVg5TEChYHP96",
  "key4": "4hHjWbRmnmQZHg4597ZcfkCVqECLgv57WHqYqLbX9EzAfpNXQHzraPqRWbVLwD71o7F9zVmKKB1FDLf2xjsLJKgo",
  "key5": "sSmPAsP6JaHdWngjGvU8MtHhYunhRovtTvENjXAnmw3urrwgtk3R3Mjg9mSL7GskRZiCUtCCR5xDnLvs4RjpAGm",
  "key6": "5Ws45knQvXR3KCeY3F1yZ6SH3W95mFT3SJcQ8CTW7Ywks4VLwGEvnWKwkkD4DjMffETpodayjY5GGE6hJgBLGDPS",
  "key7": "4f1ec914NPNee2rM12Ut9w2qNRUbukWmRdsHHqLyn27iJPKJw4BVCADfBcvpb2MLmhjr3Gws476TsnrGd9MGHm1S",
  "key8": "3uCFoEPba47oqRMKJ3EkCcs7BAoMDBU5zudpuPJRGEz9jAhKY338Ca8SQHtPCf8R7jb46kEPdPQ46KsfyuwHsA4s",
  "key9": "JiKjo7oKzDtaa63EXVVccYLXw8KqQrvxUa2Tkfxd7H72V8E4e2J5ohuvGBUxz5NvoeqsNgWe1xLNbJ9Zi3NudSL",
  "key10": "31k2o8CbeUGji1Ast2ADXPqcFr5kWqXiuM6KXX5245RYoybX8hm6fKFQfp4S11t3Sk9Nm8itzfUxWAgBJavgmTUi",
  "key11": "5FFDVy4RTFCGHoK8ZzaviwYmQZkQzQgNKCuy78C4owKKBDLoTqJbxaRzzw796GpJ7bcqwF8uTR2BggZGtAezjCd",
  "key12": "2CPdHGa8TGUet8Kzp7xufWKCAvTeVHWoMABTmHUsMrwNSUpAsC54R8VffpZP9WwyQkwngr7xm31YohgA729tUYNJ",
  "key13": "y8zSwaBDuWDnER3Xyo34GAqDEmcdR8xY45hVg31EqF8SyK2BjosX5SY8ENDav32rbH3MNa5YPjcK3Q9Hv9DVPou",
  "key14": "4dNoTeRDAxJd8a2a22ekZ4KLMSBfabfG6JKK92KsEKJJepHZ9A1dQQWPWifpNoGp9Ao44iEJ3eoaSGB4FXWSjbQs",
  "key15": "22PH3rPCiPy84fxZsbA2UaPNaYK2PdxQfADEdQrUo54BtmnAqmc8mvkEWAJnYyx1mFpbzr9cdQHCT9DnyTTnifaV",
  "key16": "EwxkFi9TGPyHgkAa2heqT77fxp1wV7YHfsZWn2tfxhcX9o9QRxgmLUmxcicZrwoH4XXRo83d5c8RZGDkd1oPoNX",
  "key17": "33kAeNYP7s5qbpyCEnHmQU2W5E4Lh517wSdnptEbXmRK3s2CkWuAoy3Qs2Z7KS6YA2gjgK2QnoE8RcSH7N8DqY5H",
  "key18": "2Jqho1ie3QrW3MoAqhh6zcuJrPrpGn8SsXyZootzMftF4avsSETdRbzE4NkvJtQijJdQk7usaGLA7DYfc1R3UZqy",
  "key19": "58BzsTHuJskRmpgwKTL751CYnLVjQzAYYwbZKx1SjK9urYkU2kVCjzV2DGfM7omQ9HqG5FwGu5ysG9mBFa2ipkcY",
  "key20": "4nLh2pLvrKmr4yth4YqsVbrAAxJV3mqgozybNVjxcsAf7rfdmuopxf2SRL44x6smdgnKCL6AAbor6N1iNRdupnq6",
  "key21": "45Da3uTxkmZeiuqczhxhtE7Nn5gJbkJEQQcz6PpGzGJxw5qv96Lq8V5AA8CuQZ62WCBiZnfG2krm2z7DQ4TCNsBc",
  "key22": "jvtgKf6BgFNQoWsmKVHj7xB8g5yvnWZtujndZQoYLWCfNhjXBpMaTRErNee5QBd3fBsgmhEZzsjfrVZAC1dfQR2",
  "key23": "4roKqvrTBuohF44C4dNbVTSTHezC6SSWKrmmLfpVn5uv8yKAzU15Ck6FnbX8UjFrzhVfgM2DnCEWnsUahQ1uQn5T",
  "key24": "3JZGd839sPRaQiGKqMZiCHdP4emP3dx9SREkrNUwj7o8m5PHh3Gm3imb1BnAjBuuNW4ZY8CPSkQBWEAj76bXxPtp",
  "key25": "4Y6ejVSfdGyqVVqYVHCwLwfkuFUNkVtBHDnupehwnFgEARwDWYWh9AQrAMHRKhgqHafoZHGv5KmA5TpcaMcbpz5a",
  "key26": "224K49grKuruPXP4HHjVYnwrMBnHjWKpy5qwqE1dfsRSazHKYYdyqtdMs661ACtvhT13XxbaRbfFNjv8kPZHN4oS",
  "key27": "4GYNda64GVxgmcQo3At4d482frWerQArYJ5GMRzni9FhUNhqYjEi5NETq1dUbTZ7eeLKhxXsbFrwsEfY5NwUyCjk",
  "key28": "2UGhM4hfV1ks4XwQXxgZgnkg5BUr9hQHuyUg19UXTCcrBYCRjiDLLNXsHqB9YdNqzqz9ZWrkupk5QvtxVTgrjLHi",
  "key29": "66dhNeM9MEG4DeS6vMKYsc5aQX8tpG64wG21Qy93cWUKGVSzGx5ACotqx1xKDgbBkUySZPtBqgir6Q7HMhCos7Ap",
  "key30": "2XQ1A6xyN8hQkmwuAjdwWTiPTA3pAjjgcP6rMd133vQCP2DpexwiBgiGYpzFHKKS3VgJcE2dqr47Edt2eiG1mP1r",
  "key31": "23Gni7aAZDMcqhXv5QVkq8oE3Xc4cPa1i66rPehJYehycohhL4tEfBEW7DQzqo2w29fjom3yoC4sVhyBqpsuhpdY",
  "key32": "4WwZyapeRmavmfgzG8x49e243k5iK8QyjJ1svy14EhVkeHTGBrupfMyJfAQGexBSYWRUMu6uEPxg5k61RheEb4Rw",
  "key33": "CXowhzzSA77fQaND56EforQLErFcjnhbhyyF5CHnLiaVweRfiBcYqDmiPAvvZhPDc38zUDhK87xoFSbdPQzvPJe",
  "key34": "YULEUjxfRDqSVsqzdGSFxEM89RLK6wC78h9dbUzhuNwqLpQKVhVChcXTfCikoVeae9379QwudyLepw8tyLwzfBK",
  "key35": "54cE6WgQybDvcgyLRLdC4rLR4PTW6QgCCGfpx72N5hqXWHou3Sos6gx1rQBMDNLniR6vVSo3J1Er1kP4eouDBjVa",
  "key36": "5394rRnHaf3kCTUNfCJuTQwxq5SU4AChmA79m8ysZBRx7gkVy1PXdXgBtD8jvMmLbSM6phLkbrmhSaxHBhXm9BWf",
  "key37": "3grMvoYSNvFrP8FxfPtP3rtWPPYwFejro5TtpbHTMBtzu4uy4mgoBWBBS8nWecE48bPTkcTULKR1WJkvJ2cyikc",
  "key38": "49LQtHk5bz5tdnUYiwYGZUpo1Qzo5hAcmdRongCHK19VA1B2rsD4jM5k6dYXgepBcd3C1a9WswqW41veht7bUh1c",
  "key39": "xQM2G4b8j2n7RjBaVR2Joed6C6dPyqniDTHD3q4itYdaP46yxCcabEnxo5C8MFDndDcWAqqB8yLpF8nYypeZmdz",
  "key40": "KkkLNrTcYXkHHEeMkNEjfpq6oYsfgaT5JnfuRoiw8kppvq1mQQQHFXbvQSQfh2qkNfzDywg8JvMnAwhA5Qad3u9",
  "key41": "5QPUVZcx7bRrqxnjgDDpdUbDZPLbPZ26nD5ynNWvSaeM13atgc7SdLhM4Rp4kvyLBnZdcvWTy1x2Y66vxLMRzhMT",
  "key42": "5Y5NtCLNxpB2b5CorhzHrWfprhA7ALiQGQArbYnpKbmwDTjJWR7SVfiDrTMofyWqgyqdiZ9fM7LPENcVHBqKZ6xh",
  "key43": "ujJ5RcaN4Jb8a67FbysWQPmKewwzVGqUnYNbbgqG3H3XQC7t8xtJFhRcrqgxYgCT51aQPkkq9rpxzP7k8oNQKh3",
  "key44": "4L4T9Ncjv2mXq5sEh3WPL5iqff2d6PgoPs9keDSbcCAWR7YJvBjVeyVkiXtVfY3edVfKWxZsCs2yL6mhDvz9CN1j",
  "key45": "3S3S6Kf5SFir5bS5fxdY4qY7YrBW5kGgsi8nncZTyCT7eCBQyR78NbrQC5qd6sTuPCau9RRksth3JdgdkNV644Yx",
  "key46": "4X2JaELG1ESUMxdKx5Z2w8Ax7TfLsGnA66NgEWwdpq7WqYrGUpGmdpraM3txUj8pDEtoLzKf3mRJ9t4CJ9rLuTvq",
  "key47": "ekCX4T8YTFhjbaNQQvFvtpJzHXzqwZeaFmKLBHg2rU3aCrnApG6umejX86GkXax393fDCjGFfJpmyUN1E8mGD4f",
  "key48": "64N48YCZH3RwwengEp65bngKsDFbEfapHhQ6VDCdTB1mMBxCHSSMYUegqBHgqyyw4gwwYMb49fow6iWUEqu4aWSH"
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
