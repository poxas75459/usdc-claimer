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
    "4gt5PKPrbUQecnbjvqsSZpw2jAD96GD44szumkAaVDNWZEHjxZHV9oe3T1fbK5z2dNjeozMf42HFjKPdbH9rqYQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMTums2EhiooodDwcDvYcaf1ZqRB5Jub9RtC9kCc8HGHah8YXVsAq8ZksHFjeTTsT9v6MyoN4P8sQNdsqDYqBPR",
  "key1": "2YJqEnZj36n8Vs5iAJBsv4ygnKX1nQpremiEeZd6xFqTk9aDypggsTmTfRZoCJBZj9iDFon8aZ8Lcidu5M7k4V1S",
  "key2": "vRtZ2GoKVZetdd1kW8gRWjsnW8MhqiSiaTrgStS8JwMgz7TQQCGr4aSR5Gn4LDKrpT52v8qefqq318n1wPEg3uZ",
  "key3": "5gDEipCHgt83L9pT4gnsUK1cAL2ZbxQAyntpuXSySoYtCUX4SkaSJM4L2DfrfVgmpV2Dw8EyeYTd4hECEcn1BnAP",
  "key4": "UUJWGXrgnj1pgrVwHmNufHBVXgecuYAHf9zFeGXijnAqwqzdkfKEx7VL1huxTcLvnqadsNxTRWWh9hNvM37LSX8",
  "key5": "2VrDzcQDU4heA8pvbVtiHeRaKBAEWnt4tPbPpe3txYJBch3V42k1GpJJFn3f9TxTVdHtzfzFqFfLUSQsJntcuCf4",
  "key6": "H86KPSBjUix8HQAKdAYiXkS8dbZHVBYryYUi9V7dk2oejrN4BA7BQR9GreVYu6eSrGZp9w71XQjbnqAecdpeLfs",
  "key7": "yfjarbnin8mUG683UaUL2QPxPacdaEWkPDkjKZAgPnjKj7QAduG7dGd11grbMCwvk3TFF44qNqPw9XNR1gDKmcN",
  "key8": "YqU4tHxfeKNikhNQL9TvQmazwPj8zFtPskByKfNSuovzTrDNNsGig49UttskoTWR8Y3UYJNo3Y3aNgnNVPpyL3i",
  "key9": "4UBKgoj8gZkQZW6XCT66MefUe8MQaxL7acVpCKTRsFN8doEVyRiHFVLpyrpj2b5K5j86XvJ7g26jXX28sr1JTD42",
  "key10": "41LkYYS1V4ybQ3wrJ4XkWTLzvrH6cHE86Sv3stAiABwN6PPtmjBJLSjQSMpXkaCA1txMAPriPuVmk6MKECAYHijY",
  "key11": "35VcmcMY3wpkMD3CWGo5KoyPZagggH2zjXTvei7qSgR6TwuL71FnWVZD2HKZDQ5SU1KCxupTwz7oZ7pjGLx3peRM",
  "key12": "abp1JFqVM91Qeb9bHq5M22nUyD2wYKaD2rTRXEWh2Wiioqw1sRJPy7mJ1wutQPrjdFQNPsdnJDtfn771NTxzbn4",
  "key13": "z7U3oU5PYuA4PEpEnWbr4Md8io7vQvNmc18URnmotNpmr2hsEdAQVLvCEqMgQrG8M2AD3LUgcpE9YzsedVtTZ69",
  "key14": "5i3wR3GYDDQySnqy6ab3S5bGEbM5BfMSZPyPUC94NDhpNNAs5UwYAtR4dTGChwiAaFw6fnBfL8ouWkvP8NQEUvme",
  "key15": "5YUTEk57H3g9jXyyEfwYJMW95tqAuRnUN3DL4GoLMBrBy1WYgt3SznjYZ6DX4LVn3vxsCtf46mAMKmbmTW1FBxM1",
  "key16": "63B3yTX3YyECqR5B2zDWo7nXkwziBd3FTBKedB1QNMGPH97JuRDKRY2rjGL2rv9f7wX6oufK948fj5pi167FH9z1",
  "key17": "4hUBmE6wXLN4GEnMENo6fJ3YYKi9wGJVCFt5JF94nsE6ARycbW6U6TKcsBiM8Yh3kNi7Toy6ZAEKT1Mvr5pVDjfQ",
  "key18": "66c75NkcRaJZzL3CdqQeWpLjGX9GqgJKcm9uTU1VGADeUXPSuBC16vj5KE8vLCukLEX48iASbnVyvCggFd1ivab5",
  "key19": "2Bs8EbwDLCDrGsGZstBBE5bYrh5D2SQtZEKKKJzypgY1Lx8jTG8zaaUetcoTGx7BaMpWmxSEpc28Gq5aPodV685n",
  "key20": "aryu3vicTgwRNYu7ViGdwCt5VdcZRBZN8kbZG9mP83JiuTyJep5n9sKjcYeQ6jjvPqeBJY48dsZYZ7TK5eQcfJE",
  "key21": "5atL5vwYh9Ru2e3UgyDQ6mDPs9CCTNDpyJoMkhE5eH82VKKd7A1XptafF2D7Uys66rgN2QVnZHgyo4sBYK3h3CUv",
  "key22": "KHAZz9tPvnmp5RyPtsNDtWDjgb8FSVataKcF52t7G81LtgKhBxkzTH9YwcyVhETXZ9dSrSDBjv92GoQHVievByR",
  "key23": "36sAdf9ogVMhd3WsPdnFBw9GTs3zWtnZn3J3N8kTztZF4kednQ6ChwuzmUwTU6LH8sZcMxwfs7VEG4VAPRM7yHEf",
  "key24": "4XqWpvqkThSnfLuVGLcLVLX65HpWhyqQRbgiqNCVaoHF6joZUMBBqboR6uNt6B55AEPhvmMCxweyvSrvoBjuB2LU",
  "key25": "45YuX1erwc3UJn42iwKY6eUFGCkHg1iAQurtEr92kj3EAK2t6bLSDjTNc8vD6dUqifhKrkkcCB9ge3oLZu8Lrz9K",
  "key26": "5veWRxqqz6TZywxoU4cGDTF2dguvNGgvwz1vYQHiL65pZtcshUmsrCw1WFAoDwXje6bUevrV8eaK5cNgZLLfw6Bo",
  "key27": "4CrvmVfUDRA7vq299WkDRtzyzYyfsNXJk3YkQWoqYHzqJmjjZtizd5GUZHNE8Y5jJAb4GmTjc1159sgLxiLKVQqb",
  "key28": "61aHk2nLdiJupNPfF5DTuzWykHETdcvAhdfdFi1oqi4Xyi5WHjGkR27trnrWMrR18NNxqRuXBYUXmQHMNVy8De8P",
  "key29": "nQE5mHJwiKwEHT89fjBtnuCaihZJ8sGFkRanxkppS57hY8gD1RhF5GZwGzzxprmbdFtpSg5HFn3srZgVNSoBQT5",
  "key30": "4fvPWkdEtskPobB1ZBjWhbX58beUC5mVQ7pvFRuyPrBmfHW3CfiuAQS36EcpLtGmjVUYyXbAdbifkobJU1HKNu8d",
  "key31": "3tCyp9rCmEJHYUzquBsxxkqrjG2Zf9Yp7oNW4U52EPtiaeEVXf6iGRnmvC6XBtxY8GUr7x73sPtzg7YNPdXVsd9P",
  "key32": "5zk8yCJFVA8gkGsfiXkrMAtvom7m6VHzKnB6g4nYBBTEnJZxHuCYdoKTV7zrMqoUDERrGopBqFbGGLGyXtDdhaKd",
  "key33": "9fNtdLhnyVpCWCGXMj7Dd9QEegbvDFnUPHNpi3N61cT5SKtUFENmkn63pxNKFnAmDBZZseGj1PoWLmfY14WrNhR",
  "key34": "5iHZxor3dLKZw7n6Xb47ueJfLct4qsAp164rfc8j3wYynC8bHBFDdRpG1QpsfKVHeE578XhbVKtQCtkvcNuHntN2",
  "key35": "3uYbHfxzX4UbfkikxoYTBjcxhQxkjhhA3E6QzHMnzVbqz5LCwouuN77c8jEbU9et1gVtuxGkHTQJR2Ao2227g4Wk",
  "key36": "3Cdoz697tkgyEXT7hnGDjBiPXfZdxCBxo7srENyY8VjCg9sWYSae7vKM2U82apwfNtnU41UmaUNS41ZnAkQjy9Zr",
  "key37": "4D1Pyf8ntEGcV21Gb2KeWiTHbjZAMKkkzBeYmbNSFNy52xe7RKfDruauxbL17Zf4nN3m2fWKQ4QQYnvDmNY5qtdE",
  "key38": "3joEpspP4ShaMuo5kDSvDU25YppJLfHFmsY5P6vqxS9i4GeXMvdpgX8wcFEXvaomZxgA3k3JhygruTWDyJpdVyrW",
  "key39": "AzRQeLpKLxhUad3A9FoZmahk3ETu2xdK1VSZ3dUYDezbvey5QyXSy8ghmYDu82LGyQSyDmDdv9UE8BVySDKEakY",
  "key40": "3bierEdfH1L9NrrgtEs63fYvwMk7Z1SjDYKpgrztwi3FYdcna8vkzbxPEcCEGBKvfTEzfNeoGqjrwWQswc7Ms35K",
  "key41": "4rmdRKt2GfDHJqSDqnU9dgsNbem8c5kAq2hxxusQEYixWhQbSBfS2BHvgbgcva4u5rteqUzKM8onariMASmiJDci",
  "key42": "4umVZKbMVDtC5gLH6v9Ax8WzW8mQmFBAdu6ZMEoKr4jTGyQ7f1Ktw2V5kiGsjPj9BCf2Pno5AoujcYSWCvr5TvFd",
  "key43": "2FUhZTr8eLcqB7Zbcex8n7JS8CmrJKeDxCxjF4EFjPWKR4vZn3rgRL6WExTFPBYq4pAy6X87osmiRvmCBfh2XE6S",
  "key44": "4BDmpQtWBuV8RTHCLRFyp6ST1LtAvuSmH4xPvXQc7aBipnXGxKeDFrsRUfiQwqAF8D49VyufhJCHVwmAFLbYrpeR"
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
