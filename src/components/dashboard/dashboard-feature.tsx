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
    "45vcQjNAtDjm2KSEHKoCjZQaZocUUNFuDD8vLeBfBwZjvA3eMTcXsC6zV8jA8hJR1b3SEF4WsNnRR4rjcq16J4nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h9aLCe2tBWcZyoArai36FUexV2tjtbgVRm76FHNauFiKv9T6USt3YywJhmaqm1kHWSeqC5Qve5iGGwnFVNPNZ3n",
  "key1": "5WznVJsgRfnQ7wcRHj1scoqpkTzduYCUSEXHr8sBVZ7oFForn4tyntfbCNcHSi8J3vaxupvPX44R4R8xD1XWM3rQ",
  "key2": "5yfUcVuBeb6xYcNXV1L5Z1PPC8dKV21goYUb1dhvGniWQPeMFy2D5jhZRiU1W7XyDE2TVPu5B594t6a5GChuM73p",
  "key3": "2WqL6WpBZLgBJP93hMgVVGQMTWWCDZQGAkhXzQwP1NNUnAWzMHTCdRwmLZZzAeZfvbCSs8eQCn8Gd9myqYSJhW7q",
  "key4": "3KkvqC8rUitCQu65W9B7zhfvJ6Xzb1v5HRi6NHVc4fpQjaNpQ4bfL49jJgkMTwEKM2zdNAvUYi9n8N56tkwhG2xQ",
  "key5": "4hwFGYrA4QunRbbR5sU7mFzvfzn74o2XF2z9z41hMCaYBTTxtnf4kadMnZ3xSyMWchUcTuZkfcPAsvxe3pdBPFPn",
  "key6": "2N7Yo43uGdRcTffZ1do4MmykkVzkymMpmLzU5PGSVtfJMmYMH5UCYRb4Xan9keCgsbxPXZWMHtoqPaQe15FMsrtc",
  "key7": "f6ZkrL1cqDi671msraSetorLY2sW2D9DpLPbtwfvotok4zxuj848eY8fNggExeQY4D8Ax8eH9EuaRTLqxdxpB6T",
  "key8": "4pVgwsmfWseHE1g9idd6vGWDgb7crath5oYykCbnV6eE7DUFF3s93stZKHGNpsBtwjW5mDFkwfWRLfczivwpT2Wn",
  "key9": "X9uiJ9UKNDhKj9UdStGmq75XrEga7cLnpzNFA1Pt1AoEiXNmRwRxkEft73Ui4yrp9WaeUqiq32aonSuq7kAfLrU",
  "key10": "3WLacYAV6EDRxYnD2cjQ3ovtNYP2shm3nnEPTVbHqd8pVmkCUG3LKrrHbtprYZJeW6k65oniN1qX5hQHUZWje8xG",
  "key11": "63gmm4bUn1Rc4XbjKJQbGekzgxxXCqzhNzpJkGBeK5mYPLW2yZ8LuRGEMGvzK1AZSjXKHfHgmRUpsNGRLSuhU7De",
  "key12": "35DmismxJzQxAjRCStMzVqapXV1qpQSFPZqAZgYeSEqcr8hxbgyibaZwYCgVUdiyz98kmpwufo96Y68JNEN7ftPx",
  "key13": "4pQ6GXd5FhyJW3GQ1SegRHT8uj5RbuLYgR93uAU9XzMF6S4rWub861t8YrZHt4ejZSHW3F6jSpbJC6M2kzHP5oLU",
  "key14": "B4BwSrwQTULzwmfd3oRu1Cov82ehX7EphLedCdurz6EYw5NtJUASH8FdwKPVm3Fdg36LRTvzixDA7Dmhr2GWWHy",
  "key15": "5Xxi2G83D6iyWG8iWVXxAG89YDCJ96jfbYfdxSANYiftFNiaBsVchbrJE1cXUEANZ9UjYg16saiJ4j667Gv94ihC",
  "key16": "31P6zfDHW2pxgJeGU5e7ig1rFv3R2qc4n7zFM6rH9s9ZEBeVwdxzhHVCkCH2tufjA7bWNjSGnsns1a3kx26uM3iH",
  "key17": "2XwUZJ6ZaWbK5r9JAXtwqXcKNrvAq8e5B6jhvPCfA6qBeyd1v9hZyNajxsh5F94sN116zpfvJVAHrs2WKjnvJmgs",
  "key18": "4gvGKEaj3ARrwJfCz17if94jNUbako378PpiitL3rDnqZS7MfQhJVobWVraPHifZw6byCgyjeJy7upoVD3aPpb4S",
  "key19": "2mWuFRwgwLjSxnTZMEntikzD16amQYebVfLhuJazyK19EU3hJcQpqnU7XwhtT8qvJHKpK9f6nUJrwB3XDxhJxnoK",
  "key20": "3emSij9kgCVUcE3rs6UVSrPjjVw9cGgRquDamAWHLUcMWxFoQK1d6WCec8sX9YApA2j4efUEXxFcNMoeTJFhvoEL",
  "key21": "5SEYjHDcpM8Ye2GQkaiPptXGsZxojLcp4XBA4tfdK2W8FbzmUzF54kyH5J8CoCt3KGZ5asmrznfzoKKNvkUNvX3y",
  "key22": "bxn2cdvW9ksGT2SgFrQweNCgSzd3X4RbNy6ng1GvRwNvLV7DUn6BthVTECeSih12NmU4LBqi64m2tGVK7RmTi1o",
  "key23": "5DbgM7wVCJJCXnn1jE9cpApePFCfrPKppNQbWbUUsCR3zHE3eUCw8R6tUosYcAhZE7G8EamDDSNJEFbBRkHfYNR8",
  "key24": "CVtmLCFTuQ869DsEMkuJzGon9kWxMb9xKcjjLsYCSh5afqQW6Lpu15XEgB46dLRg6uR7R2Gq4vUT1VgR6tTUtUW",
  "key25": "66eNyhBF8tofKbG6n771nfMpLWgGpLHT6WG7Wq3P6JuBQ6BP9RghR5Mi1HgAiopuJZcqaQWHYoxc1gfg94iJnL5L",
  "key26": "5F3UD6LuQqxL5R56JjfRfnTe1EPVvNMHwRciKp3AsLFCUcnPUiAyYEWZjpSjPTK1juEBZEWNDR6CnHRE56wgn9nV",
  "key27": "583qoFTPjPHA2RNkcWzvGnbTmoo6DqbqHnHf8F5aC1f7D1tfMQFAGfxPt6g4Eb1LwsRz86fR3oyGVHDMsuqqiLeL",
  "key28": "5xr1ooA4PUjwNmcek69cmRYeFJJjgsqJ5VHibD3AfYwFb26bxrNSyt5VFJQPTP57jdo4rdViP55X16SWzp7un2gz",
  "key29": "2E9VndZBASG4StgcfM9dyeNdpLCKThFUwg67GtEN5qWXaUYPiqMUkWPhWF163obYBqVZ9W2PdwXqL8RRiFFGA7v2",
  "key30": "2T2JAJXZVtrG4ahW8aMfsRJXZSZsEWCkKFituPJdC2rPnGV3FHCpRfRcHiDFDJu9BbyszgarMKWpM7ij322uyuiE",
  "key31": "5QgzzyC7F1aPCvEtvernDAMNk94F4wyETXhQ1gFXu9ew1AvyiPDLbj3st2ZQ8K9pNGjrajLvaXS9bDmFBLZizKJU",
  "key32": "sQgXfoFjuTE38T2mUe9NGgBQdSkFEtWepPjRPEy2kGsuTFkj2cShrE6NBAMqpxKMjHFw54MRRWPrvXqsS5AMckz",
  "key33": "38NpFCBiPDLDaksm3uJF3epejGc7P8ArN2zqEsPmHPicS443aBgc3riVbSvSvWL652vr5Rys8D3xbPvTBSneQb6j",
  "key34": "4YjfPzuYA9LG6vJDEqZ3H7z1YDU9cPZXX5STQc7cwNDSNfEoDp4xvSmf9rAQidm6nmBUJXjWPEnC5akgjMXiDeuE",
  "key35": "8bnqAqcYLKxF6hDyqpXhn2CASkzuo1JKJ2XnMBjWVUVvCzV44B7NkK5rdosEJJv8nqixmZfqPG4iyF69sAE1U1E",
  "key36": "56sK5ZWVmWth1o7mqRBcCWDtB9WEcjwysdgmd58c2HS82LBMvJpje1iDnYRxBzyKVgMYwXDyRc82pHfS4LCG5Pe9",
  "key37": "42ukgv24qozCEWrS2RHyYsGoyfEFG5agENN877EpYygCva8cZLwYVSYweQDMp1qGuUnyAyiwErTpZpzQbdGeQfJD",
  "key38": "2bVYZ2odsdbESYNiDCASR6ZBd7XSYrQ6zBw2YFacq2V28LU49aFptizBp8dXrXKYesAFt7LsjGq2Mv9r4yHGSZwC",
  "key39": "2YVCsPjvpazRsMp5XYnbX3oxzAEBZGRioXYLCmUJEtHRQfbbTYK7jLqnjUQfU57doKqPXpu55pMp3oVpsnvEXy73",
  "key40": "3hDfSnjL6MJRyBubn1w8oCFkX5WbaPNkFZMJT3inbVY1EhRDNYE9PqERgEKFfRsWvZHY9Kkqa7AGYxEceKvcTMhb",
  "key41": "3ktzxwUvxygAdgsDFm7b95R1zFDZUyNwnkppGzCZ4PGqEoAfnvV95wXU8b1ScmAcXBSSeZPy44pqgVSrW7rq8jxm",
  "key42": "4p4mB1J1SSch9yDjzz3QZgqPeTHgBXqwqwiToJi6LrEg69UomtWmaVfvMLzdU2TKDMLRJEmkcuCi5yYAx6AFoVQ1",
  "key43": "4KfEzUmdsjemDgdMu4dBM2zjSgQUKgk4oFSCYwhzDJKYmBNgPKHmD6DpfFAkMvVPdt1TStVNqUvRzsHvWGRnxQkr",
  "key44": "53EwgDkysV4W4bR3hemENfz4zPAXjTNwwMPTAaaQ8NhwUY1XCaEAtBhE44AyjKxVUqqqZN7EZ1bjUhkfeVKGZ27A",
  "key45": "2sBXw5paftJ2ANRS7BAAiS7zikJFRuUzYmJ6npYQuobGusToeqZCYziLcKRvHmgL32cwP16GBJJLctjyKGoZFGm7",
  "key46": "16a8VG8YCashKYPMiZEsF8hH6aLyr99Sr6nNcqm2M4uUoD8CZmqR6TRhvUZsecyYSdwEjp86Tppp5RqZLqFA4U7",
  "key47": "SwYdZpNv5TCEQYHR7UQaET2dQHM3bifJm8uGTQ6m1Jc4hnRCX7zxu5cPQmG9CdeiW7kg4zKgEz3eo9UXttcAJJ4",
  "key48": "2oUXonJn5a99vJAeJnXvyDhyRArCqP6qy5rjPbZ9ZP4pBuhu4Yct7V6mtNy3WB6ABcTrmPV9YbVoN4dzKiVRL9bG"
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
