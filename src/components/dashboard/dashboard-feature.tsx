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
    "21AjNvGZrtp3Ej4YAeiCSw7oD8CcXfV6UW2AkgY94HBXFzm3mxWJVqdhWASgvP6sEWEWpsQPz76XWekxTZAXgdnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n6CyayHBZ9psF3iJ1MNustrKduM9SEmBXZTbbsgjBBHfmCfjjY43xjQenDY78BSBLrMFizUwPQR21QuiQBrjsoz",
  "key1": "2MXguRitgAAP2o3Z7aFQcZUded7xJgKzMNMfFA44wuJzBUB6bvUfrZr4FG4Uit3XqG6Do63XgW9WDU8mLKs36KrJ",
  "key2": "494NCdnCqt4eogAx1pMAhHsWrQpBnPXcZbC65a3HzGMCza8kbcwva7V9QYPhuS8nrCEid2ZThy5Sabos8aSGHBHb",
  "key3": "4EfNVPi96UzjPcccnFFmP6eiuQQk4kZkBDGhzWKpivFihpvHNvMVGRo1pGSoJyqd4j5aWx2ZjZ7BA5PzLW8F5SXy",
  "key4": "3Sk46kXD1bkMxYiSvCznTyXesBTGAV7tYMwAkipbCH3zv2Zp5a6cVi42ES9vSpeDFD3DL1yn9D5LBtSB8j4vCT2b",
  "key5": "4DNUry5ViJRHWDHoPaWFWi4L1fjiY1H6Yxjjon2pqBkmi52zVfLjKTefKLsw3QDJUtYkjSXjju59EFfmChSSYfUE",
  "key6": "F3SYM2aLnxVmLCDJgUk8ebzoKP7avDpUW2EdyNa7AZz1xzoyFHuSqqMsBSdY1xkeo8LZYD3yPgLeSQucxBdFQi1",
  "key7": "5XEZeZfbUwcaDJbzYGCkLC3pTKRpMZDXzwstjycwNZjU2PLUTmCwinazTWdq4nrvjdSFvgbsjkWfKVHxARjDeY3q",
  "key8": "UBH4K7qu8rMDHBgRLz9abTEUKB8cDftQZojiphniXHBVxYTXgbmP75BhvSYnS17NcpYFjSMQyZ4GJ6ELN5oFwZH",
  "key9": "5iU3c3cV4EhmhR3nuV1GezgnawtAqu7LbjJb6HddD1Q7TsgfAvC43ADGZessaj3gQQWsk6LzKfT5uBU5hRGtg94T",
  "key10": "5vsHhzg8f2ccGh4ira62Q5GT8XmqxscrHFmUwWqD9jVU9oxYgAJDZvCKAJf2fEfhVVLSzqGXQda3xnabn6j6rBcm",
  "key11": "zoSgbHPDNhrrtn96XTp1azRzQ72sVQQDC6drsgjPeo9EeVBwQkbB2Ywyd3fLzjGr9T7rWEdaRBKEcPu5JdLqxAQ",
  "key12": "onzoLbVF8b8DE6MtqnppSSHZwFbRu8AU9N5TK4SDMAHAtHDsRQPcu91BpDhLVfL2Evdbh4xU9EjKPJHhbmHsded",
  "key13": "6JebwfsEhUGcrkkqfT7mBhfTRNMSd4zt4kvUxsmnuyG2FbfJi6F2aKTwUb8VrxyPhWS15EkEdegiqQDGkgBpTkv",
  "key14": "2ibieXFyMV1TRwocaTS7zjmPnbTex1Z2s1QMGk6NTGGXmT3wE4aEdWPEHrfRyD61Q84ePFC9QDswN1y8zZaoE6Nu",
  "key15": "4P2EbjcN7NwbvUvEZs4Be2VGShjCw8DQiAVMQRwDfQERtPUua1NBz6emh2sLrkmC1md89SGM9qZhdeM1vWJoGT6T",
  "key16": "34hT2ZKW55u589cMTTCNYaSgzT8Mev65XqQwv1w9NJQ55gSXrAxavLfSyGFVxvQQiE5rzQY4ef9SbQT5HBReVNj7",
  "key17": "jFkcVdNS7Rgprm5H7xrSHMPXQMBxSSoRe8GRahETyFkj1D7MnitCfAiHBqJGLqev6eZ22nHfk7ZHdC2wvyivF2w",
  "key18": "4Cnt6bnUKxquXSBKYxWDAYa2UhGJUeMV1XPoQfijXu4cjVyFsC1cFjbY54jssVijqcoEwQ9VivgQJzwmcaA91gha",
  "key19": "3PzJFQYEpGZ5SayqRbA5spCTQUW6uyfipgpyJu4xv6H9SGPGZDcDs6S9A54NEgUbb4mk3NjTeQrQRFSawkri5A2x",
  "key20": "TtcWuAyYeL53JFrQMWX739kFJVkMo2mTonCgnXmF6FhiYfG5VwZk9DuFrkbr7gorsHKJ1cKWsRbJnZ7pUiuAXc1",
  "key21": "5fQB4u8kj3exsEtwpa8jCWgbYtFaBqTszKjpjFgwdFZ9pQEWw8csHycuTG4Y81eQgRsnMny3eERitPJD3qjARRbd",
  "key22": "548G1gUfX1SK7yvzJQmw28ge1ND5gvL12a7JmqUrPTNbjVQwXjbiYKQNj3Xji7W6bvJLvg5Fu3EREZhc6hZ6eLmh",
  "key23": "3DsyamYLbgfzYxmuRJu35y81GZzezKyQ7zKjuUy6nzZP7J55U3j47fQNPN3X3S3BSFQHY9DdGACJjAEYcEPXwJZ2",
  "key24": "5nxUPo8X2s9zSnd7LznFPPVRH18naW9uDP59yRxuqh7vwFbRvqGEosrhcpHyBsrRrfshY8Mw96dGbamvB1NZ2L8W",
  "key25": "4dZn7ZRSYjGyw3dCAi4o6BkHbcSmRJH5fL4sP1U75oyVhfoBPB5bnLbDeLyHcJMmmJbf2CrNxaHpDBTRW1HtL3uR",
  "key26": "fUCPeTDc8jTJjgWSePkVE2DpZhZasb1mXpG5qR7Levtq1oWYP3aCemLZtHBqXn7p4P44vAxz9cTpbuVNPjWYrXR",
  "key27": "2kr5DMCzygZZ2d8sHDQqJxzV2WWMdwwjhs4u8yjijS5h2DqTXLjQViKYfp8cKMZiS6C835TqXm1SHaLCySSRVQVQ",
  "key28": "4Wvb9enJZAMPpHebUGZmBbLss8rhK3cABFG9ytWWy8ESP4GXVFd5gJs9JYCuWGCoJe6sFSEtXWckyMrxzA3R8Yez",
  "key29": "4ZK1N4y6SUJdB2oMiokgcuo2A3cda6SqXquxtLLewtkWUh7qdZe1erVwnRMxXm9Vr6f9HAiAZf6cHKBnrcWpk2QM",
  "key30": "5uD4m2GPUCoSPwpHapbD4z6yGzuix2Uwj1HT3HDvTQnfC9AgBAfPr9GK5FucBHuKEn6hdT8krWB8Tr1D2fKk9aUU",
  "key31": "4CfV8G1CyvAmtbZGaxapK9ipvGRXaXnuYNkBmtmtPDrPxkNnzvjndCt6m6oCuf6Zrp4Zq5dZtEQ12inXfKJLeaPW",
  "key32": "2djtGzXTxBJAumrAk9U9vcxyNFAgakCToB33GPDGEmuoZaqtPS6d8RD1TFeAt7Z8AnJanafe3uiB8tscCgtDpTP9",
  "key33": "2CBBPYkMqucWCBTmwT9ddkHyc6s6DrgqoCTvDbGxQytYaxrHLranyUawABujmk1vre6ftSyujXpjUzhEHTfkaYk8",
  "key34": "37g4oj7eeGEaNNH5krX6u37eEtjrZETg9uNMji5E7sXRNJYyU9NW7ybXKZJBZYkLZXFdeEms8FcFhEh9Dr4mnnS7",
  "key35": "3pMXfj2ae2M63t5EBReTMabFZqN6wqZFdnM2t5y4BHLG33B7LLqeLQctmVPin4t6rgincDxtdoJnSWmY33xPbr5n",
  "key36": "3svDFe86DGPcobKCn6zqhUUVCnKYjvDMCJGGLJ2ygppke8JHyfRyqjUqWjpwj8PvNGhNYK9F92ZiMBc9kLEiTU1p",
  "key37": "LH4PAAZsgZfgbCndqkXKZoqTfQq68zVGLRJFmwpWEHvMxgM7FcfRZ1RjSJGEyHQwdv6UYsaUPJKJYdZvyob4vtU",
  "key38": "2TSiRdXBRjDj3LJ7XGtMBpSoehdz77t1EzwWxJUKJDGoMWRcpy5P5jda2ge4S9Bfx4xHhGWxbrWaWoCEMp1KXazU",
  "key39": "43fuQ217BJWVoaY4px45eLVNYwWt9pX4HcMkaZPeLC48eQ7yMgJRxawzAMtAPRTrpkiixEhzo3Y8jBTRu69YiZsM",
  "key40": "wQFbnagp85sv3DATMXsep4k1XrpBvvMGZfegcKUSMyjRy9B2hQkRaqBWjxdZY8DoSPSauncSkPabnNQsj7fU93W",
  "key41": "26CsxtD8bvsPoqSQx5gNuNvVygEVzoVYadtcZsxnRHXX4ENmNhrPatuXT4v4Ff6zR2RKtSmh4P8X3W6T7MX16mf4",
  "key42": "Lxcfp5ge3FMKstK34qurgzYAuwa6JeitjYqYvb3hh12Kj5JbwkHpnXfTt7S5AbiAD6cpeWCavhYrmL6n6b9apjx"
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
