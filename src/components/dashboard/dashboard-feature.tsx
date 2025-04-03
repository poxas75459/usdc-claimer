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
    "61pDWkeFLuY4boF1ApTxvBqEztbUEY6D4uaFd8f1UUZ4ZEWGtNvEmGdApsRB6EtDs74HSwWoF8JFG2e25XmJFgsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47B7eJpyfTusn1Shki9rGiH3enwv9Q2Whgcvc9GPe2XEtUGp9j5B5rJ4XStsfPzPLHS6vi2nPR8qWT958kyGGcSB",
  "key1": "61R8XXrR8iSDZ74cNSPWPtx975CJM63QsruVF69RDJ5P8qkMHwoBpUfCTv2QKarEkcdjXm8J62v9wRHmDsNaeyD4",
  "key2": "4drMQ3bfG47g7JoUtvbumSsDrpA2H2BanyXRs4hDjyJCHeurhCjcyjZCmRz6JqHZ6d4W1kJi272dFx2nNyLTP29k",
  "key3": "35iiHyDhWjdoZVzi8ZYsH8P4Mu5w4iUHErwdiqTtbXzGc6L1zLrhapQVcvKhZQafYYYt8NSAU9bayPDrGbNPKNmn",
  "key4": "aZhZ1WCWdcV8ijZWt4z1NWNX9jMvE5niRk1aEMecJ7gWy9gjJaW1PHEuPUoaisr5aBgRucBqRgUz7yYirzebxVU",
  "key5": "DUYwg4QRmP7XA1UQucJ4NDcESrtNqwze4oqtYn1AcPLfJd9ptFXr9tGvst3H9MyAabj8FsaUEU5JBtBcamZimo7",
  "key6": "4wfLjU8gScfqpRmird46BUx89DZd1RjZwcWvVL7boxEvt4j7ysWfw2shd88K3hP6fBzabzE9GjXafFTE9fh9LZAH",
  "key7": "3MViF6cQm8FuBbX2QphAesFX5YSpBTwgPCZvr4TTz3KYy4WGur44xJnkcmVDYFHARxTd4U55jAt5xSSVRti7ZDXD",
  "key8": "5fqVzN8AtwJGomHktUNYNbvgVbrxDWzrYkfgpD2Ur1aJpiZbxX4NNrHHBz7WkeQdG7bVRgFQaxDVLKwRw4AcUQ7S",
  "key9": "2YVQrtCLLZoqRCy7aaXPvxDrh3vdfZ5Y2j9kCycSQoEuptDLrHWQ7ZZbfjYHdvbUZtTmG9rt5JUpQbgmyTW8XNRH",
  "key10": "51xXjy4B6cpbpZQfWjt6RyXfgD5Supk6RmWzbcvi7bbC42PqB3WPjKqrVxgfe6KweRvDzfcxtQtXLSmkJcMq6i7V",
  "key11": "APVtxfSCE8dQHPHKvJH2fhL8VxAtHi6m1yDJGGCaWshMdG8XPWhfpDK7rMcLc7Je9jwbJuyyFvzR9rpkg1igMhx",
  "key12": "3jbGnjp6x3oXTVQKVeX5pJWfrt1LcTsMk3cs15CSinoRd58jDTkQv93EwT3vbQB1hm3iDUXoa3695ZULqVEhERFi",
  "key13": "5TUWWCoPb7nAHrN37H5wbv6oVgrGZrTPKUWXbxn7VF55nVKbruzzCXWwnWffSh8e5vdCrkUHTSp1VFYrN9zuMaH2",
  "key14": "MAaCHCnLSfNwteQspRQTYVVgF2Cqazimbbw3KyCpt6aXwJzAMvZzwo1oefVUgsg17w5UKC8KsATTd143dkrgfSb",
  "key15": "5V7fFxVQmRX6MWUGpucjCtLa6D7dxRcFmjCyMreH3AQYpc5iwGvKUM2nyUj5DjwBkLb4nhKC2ADRDs7V8hikp73E",
  "key16": "4C6bBVR3awmrFdminn48GVDFXNe9Rq398HQ3SnNdD5ZuRAAGyMcxvacXxyCVi3fSYBV4mAoeTDeN4hsEPm45aw8",
  "key17": "5fk631dw2D54zE4iKSF8eUDVfybd6iUw2MpiK5LYz1LnaCMwXjHTxWc6F76dUQdpTKf5hhtaQJnWvyJEykFK6Azf",
  "key18": "2Yi5dCpaxqKbVZ67cquXCDHVL17HsRNsqUVd6hEAnHzJhyVN28zMeSAZAVSjhA7upcCWv2MjbMvgUYST4g5qeHNp",
  "key19": "4gcBtT8vk5ocjLwtsWwQ167iUbjUM22pkaErokdHD7YsSg9T1P79nV86ykNuTvG951uBbh7tZmBhEMQGzwgeZm8u",
  "key20": "4ssJBMSQMETp9RcXXAgqqfTFDq3oDk7T3vy6hViWZA6swwAuMWaqZQyUeRXQwPMXomqXvTBQjdnqEgQmcUrxaD42",
  "key21": "4VM5KUfdsttaijQ5rJ73E5W2chyBFuRrkZextypHTcujiVACg6YyJnEBm1VgY9hkPJpdgCThABeYAUBEp5YV4ayp",
  "key22": "4RDxmmxVecgzbEUBy2UQ1LarddbeAUz4pRgMad8TngUE8SDyUqrQRFaQZEgHFem9nbDUJihftbXyKPSD1rrxZXu1",
  "key23": "5z6DvvP47MfZ5C7abWUPZaBPcFcR6UMGfiCEdfkwwBoNQzEvPMMLQqcanLVmPosuwByrkQA3vrNZchQRaGwods1d",
  "key24": "5eM5s7RrUD8AyKSk8DktTmuKTibpe4UgJiT5jxi32bAnaMYFMCaN4kUYLhne379Ae8J6GgqkRYVZ6PkSX9B434sA",
  "key25": "QYUfJxHtxkpWnjyuQt9zYbuDfWpPDdA8ghJBe77eA6DvnBGnmDoQcaYVLdbrViGMf9Qr1AntzwN3AzoiKCMWUWE",
  "key26": "58EKiZcCCxkeav4bcp9DvRJcGPm5iU1JBbMsDdeiK8F8bEDYDPCwShjBSvuw7tkQb55G2ZiAmfTuueuArB3wtVmd",
  "key27": "62MwdA2rBqtzcH8isxbieukWMniWF8efWkLjhtxwmMuq4TMP4tnwDu1gh9w8HxJ4jYGNhKRFN2kL5xPRK8GpwN5Q",
  "key28": "2JAYvcgfAGWtCfaHZ2f844bfSv1FcNCMxXqyyaEm3KNWz1acUxtYssRKzTYFiETKv4mERgn8Aft1ML4vYWNKKwxn",
  "key29": "26ad6MAqLcFbXWLLgGrb4RcD1ounUcfB4NfJ9gVStxBSgrqUifELjAPeqJBVoXUB8bgnshPrvDSjBNaCSoyfDoFq",
  "key30": "3swgGs6MSvYsoXoShtPFTLA9kiGGHfxntzyTJ38bFApMjhPEADJ47yFDg7BjLQ1TMqgfs3sj6xXjPvRxCLzmN7jk",
  "key31": "5FEaZZ5Xnr1DB6MBtsSFaGHUEeFmBoo2m8GooXdMX549iPgJ7FFUKXERwQjiS8tJVqHNVh5GMi8HqS8PU9JhuFwe",
  "key32": "3CaKN5idyperCcoDjmS71XmrzCiTgs2yxVQDQkF6dTxcHcc23pwhCqkWn2BQGGRASv6hGjzWBpEn63wf4gdJ7dqc",
  "key33": "3XZJFQRBSREFsgwAzCwojNQijYWKpejbFufpnCK9SvAdYPoivAiry5byJYtB7EUfLDBEjLG887MLjHTyb3KSpD1B",
  "key34": "2tT1L8mEGLkAiLcJGRTC42LPgFJRd3m1PSNEPvbdfdfPu198HWE3uTFsnki33GAgmQaKBGbbi7eJsvF9PohKGpeW",
  "key35": "5E21DUD7kDHHvhHKPmtsEsnVuM5LFcM5apv1r3tswsxc7tAYiR7oSaLFE6eCW3XgCChtQf8B6qxAbzHDgMmgUTLH",
  "key36": "x8vB6ne8UyysnGYxjXrYzSqWpi4XL9ArRwbPEKjXDc8v1cGgpymDMcghSy1mpJ4r1gzpTTj2QXXn2f2bLKBA41D",
  "key37": "2zC4bVMf2yfKEkWobSe1SkusE3FG39WW3MYdYj8xn6G1bXaidNNir63TWVbR9rERHzjwEn2pfrMwzAUEVvP5tKy9",
  "key38": "4RWGGygNaMGsaSg6BZj5dXndrP43BxZ4xstzhizWhw9kPzkUuAWn8rbBEL39riVyi3F3wJ3wdHnZ439uxg5Yh6cJ",
  "key39": "5yyvb7BDZttG6MEpUAfD2qYBGSEQBNkk5aGP874rrLnZefEukNwD4Xmy7JEALtN77MtDRrWnzn2jaudL5ZcoxTHJ",
  "key40": "3SbW3AQHtvCmMbCDL29X9o91mgca2Vzu4oxmdUdoD2uQCE2ynrFkpqsiMgb3virE6R5bLK4AZXJ3kAmBcoNZHeSs",
  "key41": "2V7PhDpa4de9nDmuHzYquw58wNAigdNNNeFATfyE8KbXgJRbctPiXnhKfTPNvrmsvgfa4FcUZQC8iabLw8zdCzuo",
  "key42": "4L32WMin1NFd2JFMwAsDJ47hn6uTp1fqyJut88Vst6rtDzDPS5uNbyYUW8bKyArCJD5eGXNE8ZasVos7BgwuUTTn",
  "key43": "2hK7TzL3TCrjZfM2bmWqS4gZEyNQJfiYkoTk4qvtYgFqK8pbShbsB6UwMAnuC1RkXFmGuYdFrT86nVAu8e9tb42k",
  "key44": "5JhppUk3158RTsSDHh6QnjfeiKXak2KPWftW6MUh2wgNJRgNkiuPcM79zZVRot5cKPpNNH8v6hzjgsi2xqE7bM6X",
  "key45": "2iHWkg9sE4bUUsAmt6ANjJvmtfS9NCmwPogTZmpYPRcpGngJUaFLzk7sVYqXXeABpshhFEafjgxebBLqpzTzJNp9",
  "key46": "2wqY1zsj1f4pm2zisxjFkdpvgBgkmgvFTopwd2ppN1MRka6tddKH9xzPgVmQLaYQ8XUnjsubzDv4C6jfMeoZyZBi",
  "key47": "31Fa7cvUN4rsp3TfaD814Y9CvHpugh9EuJb1yJXkxg9vciYpudggJGrXBtiNSP4QeaobqF17Kv9GBzzFSwAMtATG",
  "key48": "2vVNFyYaW3mnDZhmJ62HnEWPxLzidG8BYZCbqizTdkhpxDt5YF6attuZQYPrmNhrstzoyFdKS9Tx2CpXmkFVUxvB",
  "key49": "2ML1oJs1D7NbvffHRmbYqzNPSUDB9h9cYjY68CeygHMWqLfBHpzyBFGtiPdcSTVWkuWDvX2mxKA7VknExmyVMy1x"
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
