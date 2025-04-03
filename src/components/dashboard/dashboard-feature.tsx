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
    "2GBRqA3Ug6iJuvrCyozeJiFf78oZW7dSDYKTTLyA3WdJrZdsG92r2yAsKB6fDMwBwcrcELS3KKS3ExqsTK16gyes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRCAKz9eWGE8srttS3PDriVAoE1RVWXWfWZRZ5ueTPFVYLj6mjPvo1p5yC61GwZAVMbBtaQYWSvoiGWC2w5eKvm",
  "key1": "3vX7JxXsAXuenT5BV2aoReUtMyZFMCXMt74fqnb8Hz1oCZWEnKafCDc5HkCe2ErPHqcjxUXxHrJj81yTUV1hdaHM",
  "key2": "4ZN7ppsC8qc9zVeXGQ6pjZz24DwPCz4z1EfgVhMgkF3NvTzDH2mJBk6puU9Jf1xgmwcw7bQ16NMrBoxEwjA2oQX9",
  "key3": "2AYmE4bDk2V7L4MjzLZ5sa8BCJr3os2KmfTJ2bsu8xYyusSHGyjhnpF4FEecpgCWebEZtxmYUnpoLpZnDBBcLpB4",
  "key4": "3ZhuQKCtxqNRoNWzVMftGrQ1BWW7RNUjbmtkgL4iugT136FfTmWjgGZS4ygv6BQkD89k4zVJVEZ2qURiwfxFm6J9",
  "key5": "5mR5hPWGBZxgjPbCewUPA4t6QYCM41QLfgqdfL149PzyxtbYxrbsmbNPrPuMFWWF98S9yycQctTvofscz5qygTfg",
  "key6": "M33RbfzMLMTfbEgBQ8hrFnXuRXmhLhVa2TFJfs2MdwgMq7c8svJAr2YEfzbQvXHTLfqmqxeZmcbUDXqWd62SxTW",
  "key7": "2ynhrYQiEiD6kVDt3EfEEvpv6Zkk8imdgUNvvCWupUE5KZ9nj2Hux5RscvNALYAYAFReo9WLsm1XkhWnTSiVWz6V",
  "key8": "3YkUfBCgGL9JHecjJ9zAd6P9dHvg42W3DHYEbHMhXEUvrSShgAzZcLkBGBYkGmdogFsVSF6xooer3RE72RqZdrpY",
  "key9": "2nziv1P9sjZHng9G64yEenddiennVXgPSy9Rfr2txkJidJiweyFFEBvZfMo15UHAMFJXWHcuVk7TpGNagxyTjRuq",
  "key10": "bDsbSF2hQUamxMYEeGxENDqVPR6d1qzhjpVbgtBbPUcZoJNBcLEHMoPUyAxoGXyewXfKTawSKDZhBN1k8gt1Taf",
  "key11": "4X4Z78Jw1kjDXXTMob8zUWuifuBSD5bScor2NhYqreG1izXugba559KueRDVX8gtFy7SmKy13cpSkUZRmFbxTQ6X",
  "key12": "u4vqDWdzLcoo8jVaCSXY8VK9XtiEvrsfpavoLLCzGFDJPQp8LFu5wuMcx58Wr7mp3GcQRS68NAorjxWwzcGGtEZ",
  "key13": "Av765fkNnvTvvjhGezLzHuNPvthNW7YTYruJMnwHdejWPxRZsNV5czkzbT5wB7798ATzxdr1tYpZdNKD18BiRnP",
  "key14": "512wA6vW5VFJjabM8P1zBU6PHkZLvP4WwJGuMaZRyhGdLvF91nfAHdmDgzUbsYGucuiMtvZBuF1dwMshwPYRuor",
  "key15": "27L1z9s6VScYCiybTBBdFQwb92uwE6hwrLnaRRzbEoWyw9oLK2knuKSzukn4XSfyyoRszbR298XxPGQnEUVBbtVA",
  "key16": "21vHq9U4Gk2zPvuV9nF5VirUDX28bJmhvD2XfL7P6BuJd9QvJwvwV4w6h46snWthyTArF4T3HF8sD7msUYbBwTMk",
  "key17": "V6zaP8GAnkZLCjJNxzAYa4EXTqURdTrw5QvD7ySJEdiUGMGFQ8EaUUZVedjW9D8UPyvx5rNGb4wmV1wNSWrbR8j",
  "key18": "5XQ1hDyvdgp8nsb7WLny8nf7xDhLsjcW95vzQBJmoKa2aaZDdMvAnpEJLdADkgYc6Wwvo889rkGw3MXYoo7CAw5i",
  "key19": "2yyXjQbDsioVBAgs9hCBPVefVccuUQCr8TMURLa36mLt2E74zk4egyff2Up4p45FtDXUj3piij8MnLe3birVm9UM",
  "key20": "5oFThWTG3gSZSMDSpghLWP1UHdzgZzcCCgvGCZQe98PMiXtmAqWN543QLA8hfTbbzqSWcbZNwQYXitNkiNd4jRc2",
  "key21": "5ejBToTCyH53qA34oTx3iJmNnGwsyQoMetgvq5ah9wDuczjoBLm2XkkBzY97myxSsCL9QMGRJkwBdsDhH2Pnq6Wd",
  "key22": "3vR2xCrXydvbYCHqoHFF7eWf1q5QfKdzuTqPzrXxrNAtvsEZMFTEeYBGhK6CktCM8jWDdTmFgZD64URD7sqt49DP",
  "key23": "2Wf58VQNC4iDktUVakNE8fac2AHzmw79JCUddXqbYSpYMhPjJ4fnv86b2KW8hCfpPubt1G59Gm2Zs7GY8f7wZCz4",
  "key24": "4bKHbLimB2p6TdQihUnTNkx5sbDdpBVeqmNHvarToz9QBLZgmYiqaNz9qB6gmZtAGHNTaEao8SsgEifFoLP1JquD",
  "key25": "3b8kH58mcH8SjgFLrvMEqv2wZuFKUYjTT9SE5aCeUEkXnMv3N3oiCifKnbp1HfhGfFMR5FeVFkcattuTwupQKxgp",
  "key26": "2Xpr3Wqt6iiVwD6dvmeXw4u8P2o3HgU1dkCVMXBWRjw9VYDnLCVV7aM9LvY7GiDzVdn6JFSydTp8cyDvEhpg527T",
  "key27": "4rQWSDESiFgWvrBNsXmEHf4nCdk2JdQstkYhaUBESLAjRHBVVSCRw6cUdTGj2JNPVwEBdCkA8LaZTfS4NHnA9QhH",
  "key28": "2KYosUjKku8s5hYPEsJo8PgV9pUYSPpcMSJswY2e2iGf5iL9AkxRv5kVsQu2g6PpsgXPBVxwf2e5XqTYZ6HiSkFW",
  "key29": "5TYEqu7cnv4KLBFm9oBCmVrVK5QJcWcoYg1icT7KZ4aBDN5F3KvaWKocvaHkAv2qgkJYRVKtD99u4ueTRHUMUA3s",
  "key30": "22fM9DG6WENBD4qBFDxvPqGRHkHbpwFX81hbL1bjQgY25UgZLvAz98e1A5AwHm3DSj8mpr3pxSSd2pmijKCrkqUF",
  "key31": "3RQEVjFDXqk7CFPLeEPMoow5GZRg4LjCeMpd7LDqv93TVa6doyzSDBiHomzs1LxGPW6KNeRVwB86r9UEzD82nCN9",
  "key32": "4bABazG6DqEvW64KwuwyjxRbEPXQKQcgAoQDkF8eXrkiPazmBwqXsouHCZwYRbDoz44UmLN3QtxxEUUg7q76bfUP",
  "key33": "26AgRPirUYmmpgEEUb2xAnMoUw6PSxLzxJknfRLxcwpDfm9gUKBvjgf11WdrVKxgNuApCKv9Af8e4v1JSQEU4pHu",
  "key34": "gxkNXBEHCkB3cUyNTKtUhpztEqxiRnYgZwt6fiukPoUrnTuj2bbear6khfjQNKz2LiC3tQvbuj2dFhTt5aoU5ND",
  "key35": "3KHeYZ26TuQjFxzCF4DAGmnqwY8EkWmXUV92idHymCQy48np6B9LvumDFwmUBuUGhzM8MS9a1rpHFoTh66y1Sopo",
  "key36": "4hgsVdhvS5iu48YX4PAoSWzGjLpzBzr4PxxEWfshQuo1VUKE3aPvXArCBcc9RniGDA1DU36nqDhesLZqyJJ1mzAf",
  "key37": "2BKq75GtNTDqZUELgvDEr68G1WzuNP74H1zLamtojndyLMp7NxKTfz3oGr9SfQTJ5CwouvFMBiUkmRNKbGjzRBhe",
  "key38": "2r5TAoguA2q5jTFqahpZMaPTMpZkSTzkf7gFkRJzKJaNrzn7fx5m2BJLM9pniCqFzMPyfoSAcJ1riymgNNirsFcn",
  "key39": "fXio4exsXpoj6xQrw72AipASJciYAbQZyXtMtVur1uLLwq4KEXL3FvvNVr6xMKWyz2ZDUKYpHsS6Pi577abjRMX",
  "key40": "3FZ1uJCCLjy2zP3tz8dh7XSBMhvq4VKdEaHtM2owKLWBdzf5UvRJfX2eEPTRD4jhTyuYNa8AmPmEUBwqUZzTg3nx",
  "key41": "GZghHA8uTebzu3CRQqrR4YBu1kqMTQSG1weLtAVrorPexYtGDbbeSHG4siyFitQprF1TwMQ8pnhmDo5p4oCHrvU",
  "key42": "4vmiG5j46cwrMi2MJLEJn28YfwbRW4hwj52V48cfPaBXzVWKbwsLUErVPARfPxiHgVcF8EdYWcLuQM7v1Xh2xUvL",
  "key43": "21W6RoYdZdAFww5VzucQ92WuNuxfXFDwCv4ZLY8GeA8tBivTSTHfqQB8VULwTmccK4Lwr26bWaiVQkiu4LMKmfod"
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
