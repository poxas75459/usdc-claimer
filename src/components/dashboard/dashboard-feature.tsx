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
    "2mNPxfdRz1rVJj6QgMsa6rCPSTDrqf4D3BgNzJVjmPUqJQsgAPkzP4qMg9phSjHLcJa27uSpmJdGCyBYfEysxz7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXYBtHXpfCvc24i4hn5KfXpmmoRMYruvTyQYVuGZEdSPPa8CfxTuuGX92BrJdu8UQ8hGi1nj2D8RgXwXKN1Fd1L",
  "key1": "3WfcUtYdFzGjC63VD8fe1ocgh1qY7nTCmo4vDaM4ZyLWQ2ZPBuxsK1ZzvFthnWZf97muz6vNGbitVExamq8pwocY",
  "key2": "z6H2MA5nM4YTvzn3qUgzCYLVcit2wDXUpJQ4CRhi5dyFesX6FyLRkStsGNV7nursMXPiXy5uN2Z7YQpDwZmrTHH",
  "key3": "3hCk2KgQscELTi7Uq6G2135A7CsEXprhkjeRYJqxK9Caud3TUfJbVrfrc28ji6BXXGZPc85SHcUACxaKpJZ3VFWG",
  "key4": "3Q5KhWPnUZUbaHCkVWU8ZLdQHeuySWa5goKh7NhMfQyKiTjLw5ADiuafARdk6tyrJP4xQC2cg338JMuTeMTsxpnb",
  "key5": "2bCph3BdPMeyXE3A4N7sze6RSkHf2w4mN87FxFKmhPWi3PN31hXjCq1cQd4UdZ7NjDGP6PZAn53W6BnaEqGtCpRi",
  "key6": "2zv9hB9fq1yxbApNQyFftEJj2upnGUjLey2AArNkwFs1GLsV1TPwePZ98pdq2nbZjj9SPxZkzEDLnVYRZyknKMiF",
  "key7": "Ek1CCDN3vTCzouB1MqyqLuZCNVxLCzhfEDnAPooNcnWPJuXeEouAgGmsRjBEUSxCspnDqYtGHzCL8TE6xdD48Lo",
  "key8": "4ckft2Lm7gs3SALaSEPN8JmS44QRi6TuyL9ry2662KJrLaBJooW67GfHKVoK8WcG2DaaCz5k3BWxQzsPpwTmF6b6",
  "key9": "sUrtfp6zZg2v4zNhrSDxLK5VxDb5SANV8Rdr2GDcyL7nEMcox8DeUjJPcca19qXKx44jkzr4nmRtu9XU841je4K",
  "key10": "4nNo6dL1ER1a8JRiX6E7n82CrgS7vNeux2gQFKoThtTyqSFFnBAMnhn9W8ky1RBuXskDWEXtVeBZFESr5WVLBTo2",
  "key11": "3YFuGd5MurYBVRNQtfgJFvnKxouCQdAmkh1XisohwkCgGnWamL5Vw42r99M4xFTJXyLdLHcyvGx4zHLtKVr4BR4i",
  "key12": "5PnFR8b2brpxD7vYKu2JmiQh3kY491ZdoRaFjPdqTXWRC3ixR2pEDcmPaKBxNUpQgzjN9gPcoELtfXgqH85ArKAH",
  "key13": "5Ky6PvqYYnaYHZBo29UVeC6HXHJfrADyfLsyLsR1waE3y6Kkttm2MnbhYMe9pyAQ5XMPi6gtNcYfjTjsa6xtwDQZ",
  "key14": "2SSiqmW2fber8TLtH2vmJrrrVKbn7qNQiztMq1hzaD7tNWd9zv4E9DFq3DbTHqwEWtL4HCREmoxPu1L7xBVg9vdx",
  "key15": "tVWDzemYcdN9wM9MwzfZSVBSWsBHKEeSfZyTzRWNBffXbsEcykdeDrghZgybZX7Dt32mVA4rBg1vpH8etqQYzof",
  "key16": "5py8wuUxMYnsLnFLsPQH2EtDieMnjRmVi9xrzT9MbA4huYsQMznvTdxHpNdDGUDANnYY32Bkh4UFSPLtKU5qdHAW",
  "key17": "NLKdEb59zojnCneLyksFjYPqkUZdSfPfEbyM6jXyvQtreNuKoe6p5eDpPwTB9QELKg1ZrjYtLKF3V8qsz7Tw8L5",
  "key18": "511YUd4WPo7vRURYwTLw3hxoeYNSTtjRzmHGzN7qzGnz4GMbGma2SgwaA1wEcpnv2Av8To89fJNEo9VtPigNiAk2",
  "key19": "3qaruu6hKr453TEZ91NsJNwVDw3vix2d9Pz3YaXgtTFxHGap1Xtkwue6noeakSMmx1pp191Ab31jM4izfryh62rz",
  "key20": "4myiL8Rtt1pyRemgBzZqj3EauwN9i2dfRqYBtZqji1p16Lfv9uKwRtguSdiJPS5Vzr8TcHFptbMuzMX5YN4ZQQZp",
  "key21": "yodVtdWGhKBo13UnYNN7Ch2SL1rWw9xJb9XjhbkoTAQEqdPCELcnbg56z4ZV9GHqCZcJ3jgJWuLWRdrfR1UNTJy",
  "key22": "3uW96YCsuvj1TS6cEFDpVTpN8UAEidi4tMjGp97qQmk6DHs52iHWBGiKcnbZiD78rDJNweTjQfMz1bU8CEBGvJiy",
  "key23": "YyL3VGLZGZRkk53EV4DTmdqMT6hxjYSNLf7mokoecS2fX8TZsFusp3ysgtWU3GPQipxQF77SSU3YzB95uTTn8Pw",
  "key24": "gMMUbraNygXkAgimQNRRRQ9iGCHQfERP2K5EUy6A1KH7ANjSng4JB4gvotc2RvnWK7p8aYZ3ti9CNdU4tGZbmQT",
  "key25": "2nGy6jvrHhrZfzqfnwrdR7NWeNgqzrGRY4H18qeM9b9jCSvyRAm2ESjKwntgvA26CgT3iyFu6KN8BBxgbEioiZU",
  "key26": "2TYnWsUKwagK1A9xYfGtpSXUSFa9YaLPCcDHbpgyFmXwHEcnSydanpKbGGqrhmH24gnqnKabF55vhBJ6pki7Hwy8",
  "key27": "LYmJxsY8FkXYQxHGAVa8Gcv5eTGx5bGS3u5q6j48pdgfxCvu9vAkt3B7ZA8zR5nQFSgHjGicBKsgWxPfgaA5XZB",
  "key28": "4TtWruSjc2NFQjfRTC32rvsw5Lyjjffh1UjR7PreqX9SVH3RYZGsDZvwdGUovBAtEPVBE89f9y4fASE3p7YkmbNC",
  "key29": "2fE4nYREfKVxSjvhKRzm9EYxbwLyzETCnRVgVsAECA8Y4px71DnEdixojL4xLVAu1Tg3qKaqJMFWatckxVm9D7xU",
  "key30": "5wKz8QH3Z45tj1ZxFLF7k7ypFjY9W5JbzLnsXnV6xxTTdbGDiwnxTZHBN4vQvw4kfxTAZ4Zkaszp6Rzj8vfhcGki",
  "key31": "4m7kGExBwFPSUgComGAA4V8UyZeY9aUzc31Zqb1MvR2YLPYaCxxWT4srEFEnvapUgv85iZzyH3ZsDtMTt5Y4YcqX",
  "key32": "5q1w7QrwpvKRkbvZLLTEXqLriikHTbstisPjcX1RBJ4PhV9n8EmjyVoNExw3afDRE5u5xYaQJpFnfbn8KYDxmnuN",
  "key33": "Zx5DnTUZwRrU9u1oFn3Ak5oG75w9V1S9nNbLrSLJC8BeS2JTnKE3tC7rfcWDFGPg9B1uoeJnhoDcAgdoTCcy5hy",
  "key34": "BQJrP4Pyp22gWh1egBTBhoSCLisTSxsQfer628CeNTyp2i9XHeUxu6AsvHJMPdaXih2yevu4HsV14jxUPHtwH8Q",
  "key35": "3xJ1NF3vGeWU25zZj9u2PZSCPEJvLEhyTBGXAJ4s37MXSR5DzNjYe3Qpk9Ztda7ZCKmy4pDMbg9Kgs8hepgFUSQv",
  "key36": "jXxS7tZpCdWERpsgQdg7UzDtrXA7M7WuF1qhbe37srizmKgmWjSFHMFfTf5te1yHHBwPBFqjkMCuxd9Jpk3zRMF",
  "key37": "rhzGQtntA15Ys9Xx14wmT9xwbpD75BZ7DxQ9RpvU3n5AyiHcczycETjwbKwVQgB9Q6jMeigAigyNNjQ5BvpQ44g",
  "key38": "5c1LDChyngoBZa9oeUbwJBvZipRULSfZ5B2wNmzRGZ48v5q4gaMSZFjQbgAk7WP1HKRo3qVv9x3FFLmfnT5JpZ1H",
  "key39": "4kiJMkcn7Wg12tkB2tdKFNCtMA8qd6k6t9P7gSuH7TVMv7uwuqpU8c8d1eecPuDfMBk42WJgYAdqfa3FRFiivnuN"
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
