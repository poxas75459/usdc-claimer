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
    "dH4zzKBhqVbVzohZ1ZxnUdS55jKPzkwE19DfS8hF8vPCYsQewpcBMJMST1wBFMsXD9ijdKVNL9BzUcAgTLHkjxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67n9XZ3ULYJMvfzkvMxxBx986XMUb4zFADYdZsNpL4UyiJBtZdj8W3gKxNz4WwFQKGDz9LaHVbufD3pkU8iy1jUq",
  "key1": "4EAANW79UFhVChzGdze2X5KX9EdB585LRfdRdkMbkQnuJLTgSJEHARseriih28X9jqv3A9aJ6bnH2n3ktDWW6JKn",
  "key2": "31CxvVMwrFWASgV8hr7UeeyDpXmBxU7XKD2mQYQjwZxuPEj9are8hR5XkHNPqS1j5UVs5ucDsdpMcnxJTZQqNamn",
  "key3": "3kZzEoQ34pzweDk9rb3mvBz6jaStcFefx8nDtcq514cMXQzfsG5ogQmjUUATEGYbJjHxobDBmEYcvB7ViATDWtrd",
  "key4": "599tsCHT8iHVyS6rY1FJMqk2izsWSsKxk1oSdJPkNT7RVJd9NpJgtmRgSjUVNzzwHz3pDzBuqxaEZq3uewKCxxDC",
  "key5": "4WhKvwMNUkBf6foRWQBqp6SMSqGorP5PnVzuRgLJAMKkqnYNrkkwntywfB7uacHc6vwSm2T7j8Y7ojDHAFwHwm1i",
  "key6": "129ECsHysEM142UwSNiV7etkcoU5TDcwKkv5hVtjLgsTiNBPQU6aW5P2W2jSuvSAvjyMWjsPnQXfRWjuF9fDeXa9",
  "key7": "49kdUKYetFpVri9TEH35PidnMozzZetqxSo2BBbamLCFQ8sRraaMF58fzqnR5648ufvYG84oLkdQYQFz1dmzBTUa",
  "key8": "tZkVvYoZgmeowanAkbpmKej9S6g7xGR75ugFbmRGSe6L6KWhja1oWJZLRazcNDT9R4jsQRn4bxsRbeW1Q3x7VTq",
  "key9": "5gxaRpg1KahsVFrDGGHZzcmznWVko4ZHq9g7SJ9N7reedQ2ftfTXKgp6D2zLRFH89Q7zVDjbB1U96fF9Hib3YgvS",
  "key10": "toFnXaR5M95wjU2q4xhAYRsQmpqbfomZxR5KgKTK1uBmk3ZWYh8bwUGVFSmqwf7bdPEreYdAv552iTwgtqrMUc2",
  "key11": "2gFDkyACCxYc3f9fRymoqxmgD2WX1DqY6juRVFiMtb1oDTutCEb8EiwUD3PDcfi8JzB9iDNLVK84RmUt9AZQvwMv",
  "key12": "37bNigU91Uz8iYeaFYz7HV2CevdkUtFRNKeLUrcfXfts928YapEhGF36Qxa8dAfNfN5HX26Vp4CBpGP2inYdqPZK",
  "key13": "5WifWFxTwg9kBLojTMnEfkpZxLzvgcQ32uErCEYd7xqSyxYYoDWtPUeg7jXDsHY1PRfwvGwjtEHUg6KVfHi5UGgC",
  "key14": "5z3rQKbhCi2o6LkpsHTKjW9BXM7bWWEjBVNDmhZHa5cantv9uE3VDWTScHbEZrvJmS3yLJrzeqNaQGw5G1mKd3Gf",
  "key15": "5ddJedWEN3XGdmViBk46hxdFXUUd8SXZMMFf6Qa32xZxHnRuEaHJWtX3Xf4U2VMG9XmStSnVfSQvGcnA4AbkuDgE",
  "key16": "67UMxkAAvasSCxVwmo7WeHVmtGh4cYvESoFLYZwUTnLxMFVa2fowkhGRLsZH3XHU6fVdmHjadazKfutjNWm1nbY2",
  "key17": "2KEE1CbisgdRjxc3rqsmm5oP35CHGLpr3YGotCj1nqipggUuTAf9h1mHuxeQtLzTh76kJ3wPQaQVBve1A794Q3Zd",
  "key18": "2PY1Zk1LneLvqMs4bXUZ4XYFLPaav9zvFQD3XCzHMwZW2uCcL1dBZk2RbSw5E7ehJsuiA6MvF9hLK7qTf67uAdGX",
  "key19": "3KGssv41wZzUSFcus6A8xqTaPFZUzKSGvroGK8UphDu4Lz26piQU24a6KRFYygzFuJU6zXxeRoKAhPxpLkZyXjcZ",
  "key20": "5VUUNzrW5CUACGSnfh9CiFxMYnWJnKsBk2byPHL6Vh3JCR8HWJnZYzvLo6DRdXNbPzY4hSLBk94e33AumwjPCdCH",
  "key21": "doMBZfJ4hC6VUvga2DUzHkSdsGs3AYbtdsXMCneKPQw3uRVLUb7DPHyjitLsMPvqabJ5vaai9vuxreLGSqJcB8d",
  "key22": "a77F6TqwR79XFi4F527iojXPbmAxraqkDxwNGaAPBEwPznbmaMsFZJKPqWQT3bUr8FhuCVmwvXNGYp2S7xBMLoo",
  "key23": "4Ag9DYKaq9RkBaAGBfHyFBABXDcj8jwZCvnmeyDLjvzqdRaPyYQepvgGhuXgSo7sGMJgg3qmvSiam97jXUGjBcmQ",
  "key24": "4PWwMw9rWMtCVyoKSGoPNQefXod7fVLYbKNKVRQ8AaddLZsoqQci8Li5dzsdU4WMAmcQio5pvA4UwdpMXqfo53zp",
  "key25": "4ny9WfT3MufLVJJDayuZ67jMwRgx22onwSBPxhDbbhg6nRXUXSP8XVsoC4soJnX89xXQELEgq26SQqvNdZw3TNgM",
  "key26": "5VVa7jzLQ61hsxoDMMrBvyjmivxSdFzEiE167Mu5Qx1zQwVyaQXht7BjNX7JUqvHaUvGTNm6JzTvcFZ2LLfborWm",
  "key27": "3j3AMZyHndAyJnEZFpVS6bEoSeCq6HEtCEU9gavhyYgPVYyTFzXbiCjeSYBERfGJMXec6aW1Lip7frSQFoRb4ALj",
  "key28": "3gVtn4ipi5kGWhKK1Pswzcto7dFt64NaD6wGeayZE1kJtgPSGDiLj2ZYuaTDsxdV8TUxK6ShxHNuWtVfUAhtF4nc",
  "key29": "qagZBzerj1Foys2aqpdgm6czxmgEHqZsDgcfmPV3XGgmBznEipqgdgxpXDaxB487gfHtqFvUtK7fvM5VUVZvY4i",
  "key30": "5ZPRC5kaop2M9uoGTcFyzBqCqeKEQWKPkubTXJNcmtHq7kHJBxXbPG1LKQv3MwG1PbrnUzMHrB6GdUi4h9ptz5vd",
  "key31": "2cxnB5bWc4ZL6sxXJxj5MSSiaVwQUJ5fi59fhDwvz4w2P3p6UpkMvgBd1wDffcD2hvqTEFoy6pxY36szGWPVfyJC",
  "key32": "3WcenQpTsf3Ag6RrcrF168RthgosA1TbBgkRD5xGW4PzHUynxXgYVe2gGrVggY2ohqe481NMSSeSAYaoRkWMMaZx",
  "key33": "4SCP7ufN2NZZz9ieLsrrAaaqiGcb1J4MPTtWWXNmVCpFGMs3NbHdgNCni3e88AWJCNgxN1buwq2BcEeyLjUFsYxW",
  "key34": "3L7qRcdtEZ633iuedP9xFfab45LSquq5tXYUmTQHU9fq7jmpU5eHwmfB8XHZwwu5Krf73JryrFZSweAJmmEHaj6E",
  "key35": "ss88ASoyZxX2w4Q9FrEcYw2H4xBFNF499PhyYya115eVZCqBv42XYDHQyzx3NKxd9RiZG2MV9AGePJ54C1FsPwQ",
  "key36": "8CeCEu1TF2A3kaweHmULGk64mhrtJVoXHaz8ZmyhvdTbxCobd4A2ggmX6ZYNN514gcr9LKTHBion7b8kv516oUU",
  "key37": "2Qe18sjTMkfrfiGqANN6t9Y6bMstqfeKMzMvoFkrnVQYLv55aUTq5DqKUhTFG6uQYax2nsffgZkzMAvKjxhS8qXs",
  "key38": "5cjRkmcPsKzD6uQ7sCMzr5fMhAb647f5Qyyv6AzoeqZF8SF1iwpKFPhWYANk7weMS746nhknFcjkyBPxj64y49RT",
  "key39": "3TvHJU1PDf48QHL4dF7bXM6yHPCpgTdVtKbv5oMvfubjQoBkSpqGgHuvFcrWEeT1W5z7mE8dvy1cfPU3BmJ8iBxD",
  "key40": "4ciqoCC6DTsoZvGckQLEg29L6tot96rNTN5i5MzJSDqHoQTbvJJaVThAt3PYUGkNh1NyJbs6ZHugrKRwMY3TQtZB",
  "key41": "3jYBMBtUiSHTqoeXpXWF3Fse2P9X9nkkqdSfrfbzodooMfvPyXTFgczd7Afgp3B3B27Z3e6kDLVoEZKzsahSijRE",
  "key42": "2NcXtbmsNuhDSSeFLQVMVrtU8ngMB2aYo7fyE1pcZUCadX4enFpQnSAZn7ZudzR2eGWPkJgr4z226vG5jS1absUs",
  "key43": "3s5CpwMwouhUkEKUuN7Jy3fZySgrLTg9KehFMReRHHLRpjHV4AbAkG43MYgceg1WR6Gtt9DK5wHsJJXWyKEmhzVW",
  "key44": "32QcmBLaZQoKHG9fZXbEy1U5Fd4kMX9JvcakoHrEBdca4T69eRRUCTxJ6C5pRGAJ6PqvpfKMB17pxNWLp1DhoSSM",
  "key45": "4R3XjUXvSQKiknfNcgXjajPMb9bNgDNZbXJYZCcM6GhbDkVR6Vk8x7SJhemaxSE5PvmMc24ueKQACCmLuNN2nCij",
  "key46": "2KT2EBUb645x7ds4NzAEQKzF7R6yb7DMFT2Svaggd1hy8naTxHx44sxLRWD1WncnzuocEGtLBLpZymf9bXMGzN2x",
  "key47": "5rcNaJ1ifYGcjo6CKo5mhjAoZqsScxWp3jg3kE9kMwEGjUwpxfpU375Vk271hcsSPivrQGqM2kjyys6YPJEtwjCX",
  "key48": "2PFvD9BYVWTWZpArx94kV8RtWLUYFSvpUsisg1qN4TVn5LoNSfXcEfX6RkEnZpzKK3wjhWTPyoubDRhmniowMuA2",
  "key49": "5vViDz2d4MVTLSYVThz4F639g9rVZxQiZqTgramkJbcnzpMD5r1X1c9a1d53jiHBwR3wRtL6T8QTSTcLGd9d8924"
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
