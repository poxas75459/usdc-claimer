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
    "4ZabkFk6EUfFsxJM9JMsPATjxG6rhFYJhWLFq5CsZheQis6HGuedC7hZcKPkjQgkGQcBPmyJTTo3vtG5ApRcazDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ruhigfy7WasPN7czmzu9gdn1acMSbcYFYDgU5rcfbqh8217cYpH4RYkfg3yndBeuEqw8Ayj2hMWVW9rnApFYdsa",
  "key1": "Y1AR8AX7fa6XxhPPDayNR8w8MkisvPJqwQp1k8vGqbf4Weh9inx6LnJH4Ut4a43z7vNe8VEf3BZ4haaFmDWdzwW",
  "key2": "5DtQjVSQACH6zfas5L37ZKA24AAnbaJcvJRTiPqcTaKZUUQpTT7s5uzf5FFKkvuaQSbd52D3Ze9236gPum6NFTdj",
  "key3": "T8EHfGp4RuBmxCtzjT9S255Z1tVQmL9uvrRZMirLgBH4BL4tRCiun7bZAZ3bNdpbWRgXATDQRW3Qbf7weU1v4s3",
  "key4": "2yJ2oZbGGguSxBW4iQPZATx1G74jZDjQkVCaRkYCiUpA7nYZRXcfFe15DKwG1GcnZaQcXtv1j2zN2qypLz8MqqCk",
  "key5": "5TxfCFuoTyMGu7HEYxjUxhTSDR7vPS9utAADYqZrsNGGjwVL9FHAh4L3qZXNHbtBEWCHDk85Tva4miqcw2DiVMk1",
  "key6": "5LiENs2bpGDw5KJ5U5HwFKqXN3mBZdWeTmzB677vaeb3ASbmFrHzf8Wp8C5xEQcq7qAW2zcy8PudpC98FiseNEFQ",
  "key7": "2Uwz8KrBued6AvAQUgoXDDWGcj8qsHX6AbdDDUYxu1SYs31Qf81vZLtxgzctMUEZXxRaABG8bmrbNn6ycQENrUeH",
  "key8": "2tErh4Qzwhjp5p77ZG6YBWTc2TXz1wHTD7UMgMPw6MEap4uVgaKBJGeUtR1Yriz1BcY4CrjQiQCu1FNJzaSQEnSb",
  "key9": "3MWagdjeAZi4gLrVH69ZCZQm1ziSDBj21se7QU83ceJ3V6FEW6axqe2fMLSHi3P4gVPeJFnhuSX9nwmESb4Pt941",
  "key10": "5GSpAeK4iRayaWZpLZt6EgPGHuY1Lx34YN8KEqakDBHiDVDUWcxddYhwzo8TzUvtevELUaz9TSFfndxeZkmw61cU",
  "key11": "5FQA33hFeF6DKGoh5bJHCsHtBHm6GjaALDqRK1MqigWCpWF9oKWX67gi3CZagGQw33BBi6Tdb7F6TwusJhDZvbKv",
  "key12": "2BWc7MkHBRsaxopU1e1GCy54iaUneD4fHDAezejSjd5HVCESuUQety4iximvRhnf2GT7HYYmaLm2TM35KaTEuS33",
  "key13": "TM2sNhLZJYcsitu4ryeSjqgKxTQhoJw9G8guHKsXBMvJmTSGhYyRWA9Hrw1zGBeCjv7Dwtp4aNRRZwtQesVtCx7",
  "key14": "2zBvUAteTrws4sWavptPNbW311hKyUY6vcDy3aeNxjzuf3dMjfYhvBstBtXSnrP2hWP3ZGEa9UwqSy7SyKAFxYWU",
  "key15": "34uAJxT7APahZgBRizMBNFqWCbyg1Akwz2wKTuEEyz27o8cwtkUWQ3g4jo9LKsmWfNavzeoWKHzgW5Y9uQsHkAhv",
  "key16": "4TxgdhTqvmLpY3qNHGdsMq63EBnxg3FBMSpRwHL3X8QSqLNreqopW6pas35bvfRZB11Tbdvxk5qdwjDsqc5bcX7i",
  "key17": "3S8phndMmGgeELubhMsjhCJrzXmdJDfC2GmChK5gCSHgA3mUzpFcbysxKpn4XYnZXK6n9nfrnQhePkJUkSjJdFnq",
  "key18": "2LhMgQZPGUmujp29AcQmDPEssyGJ5LV933PRpwPLG8NLujuibUroSKWGXSHdS3i4EVCQe8CT7CYCM5DECVVVZHQt",
  "key19": "62FLA4ozJcCEb5u4JjsUAsWjUav7fhC53CvLuqduhS2kyM4cckeyLMugBkjJre3GAy5UQEhAsmCrkpqx1xh8GNsH",
  "key20": "7nZjxqvV7C27kHFsdeQ2oqezaPreLrQyRboHnBvfxD6bzaBzZaP2Htr7pz6icKLW7VW33yvSUgWByDNZoGr5sKE",
  "key21": "hJ5bJcopfv4jBrPtWiBN4txLG2k4g7JZSqUa5Y9Y2F7p2oZu671bJgULDnTBaPUWW3jTbcnmJRf6DB2KJPPiFJK",
  "key22": "hnUqV29xZssTwkM88SLiCrZJ11a8UkE9LrmLnpNmbroQZ44AzVytAwJoYhyiWv6gYK7Fx434v1gVwUbqWheaLSR",
  "key23": "HnUarZbL7qG3QNtHzDpJUzzspQSZiaxx6U7h1QHettg719daepay9rHsvHKruMkrXcv53Y2azwMSR3X4F24ptDV",
  "key24": "24qJ4mZK6mGnnKwjk6hrxftt5djL5booYc1WR4T1BbgPSrDZgfqcKWPVUEWnuHbioWCMbEbTeWt6h3ZwKb6qpryn",
  "key25": "5C7N967xbDVtCKJtpryapqmK4F7RzEKpwkYrS74423rv28NUgTt7ofhtub3Maqd2NCG8THiuM3rGevwjufFCqX2P",
  "key26": "2uM7eWvXZodGu8BEkjxwJYGCiPNrpZ1ACeT68fuA3Z1XXomtBa4c3CVTuqakC6RRNzmnRR5y3mtqhJuLg1aG1zYt",
  "key27": "5u3gRtRhAtWGFBX8pC3V9NG2fw9HgbMVXvUXhFxPqjN2pR2cYVF5cao4GPtL2gCSo6KkN7zWZ7PxEpQLW51d6zbj",
  "key28": "2e7joY6C5PX4MhTtL65WGZ452vPsmTXeHSgSF7PkHjnujuJTgwXpvv8UKSUpNchaTikTNh9rt2rBQNQTLWDVSyv6",
  "key29": "3bKJYbCSMTbPwRSvtDK4UMWBx5Hqe77iWcVkLXnhsZ6Qo1aK52jfYoQSoWA6XWCChsdWVdbyT2DA3Aps1EDYJs5T",
  "key30": "2Lr1bybuKaerrL42tCGK8Sk6JpqqPNtMRkKzpJwNYFtsiiaYziyasntUQb6SUwJE6obPu9Ej3vHuSdp42kh23UGe",
  "key31": "3g54Ptgei6HBFenhVXVdmbLT1AUqSLzvYYVkgRP4XvVsecrVC51vjZjkzrMKtQs2bfcA5QfZuGQbRznzzzFYsMP6",
  "key32": "5LBfgd4T5FcU12gmpc84rFhC5E4U9zvMTB9vnj85GjEhwXTtZMuBoE5CbTu9L5TovoyBy8mnh5rqXqdbDp4CEa3Y",
  "key33": "5hgxA6gnnRQeyH3ynGFTEinN7j6JfDPeXYikwLhdv8xevYSAPod3iPuXuGLAs7ouTMEYy98YLuEaqAHiojLGRoax",
  "key34": "3KiztBSr6Lka5Xcw6GhYhHxwvJZCzDYfXzWQNExqcyMUoeuPeCEXB4CMpmoYxjQ8E8dw6uhvL2tyS4phS5kPi6eR",
  "key35": "JAwqgU86bRHKoAqPhoyqWqS183r5mDu4J6Ron2gzNqsw8jHHgy9kjKb9p7AAdCPFEo2frQRRKUGBPxTQ65BKBKU",
  "key36": "2HmJEeKUsJ1ubxPZV3jHJk1qTmQVpPFYhMhniyE5NXCUkmFyftJsToKpugaDAnqbvdJqMBMvnTYBL4wDutz1Vfbz",
  "key37": "4SMd6LUQe4QLy1BND86NTc2xV4WRttpqnw3GXoCS6i5NJ4Ao33sjtmYSaBDkcDUC28bDK6yaixg46VogfwE2am7",
  "key38": "2VorgeCB83DFWQH91tFotDumZNtugML4u5iP9SKUip7254s2FvJCAVZpKaRNK61qDtzHtVK3FSMrUDW1PSTybXPx",
  "key39": "NGSpTxeMGzfsdaoQdJcuLaraUReNUWUuATjGo92nZnwAuqDqJYUUP8RLnMRpY5P3p6Qig7uvt2hKQQDkhRgFneP",
  "key40": "4r7PVGdfuoCu4Tea8AyG4sboV2MPyfRomcXQ8BsfQZcX5tiESbjwjmzpPqoA2yTUzuv7LSBV8mgEb16BCTrKDGY4"
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
