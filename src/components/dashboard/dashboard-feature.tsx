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
    "2R7QHZH6d2pzjyQsnHs3QbN2bCLLxzEM3XizjjfBDwNSD5XVrHDMaMqVtX6RSfEwwJj5eqiEX4BwvE2tx1FN1amA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNBpN3gp57upj5DV3MggsuVp5BxbSd4RJD1hLzwyDbt3nCdWqcLahgjhjXg4HjHquCm35GVT9Fb1syULYmk979Z",
  "key1": "4XdWawyWcLRJ1aGM3FSg22eYTGTse9dt2aB6AirZ6cRT7FDgfkiMpN7FSQQBjZ9dGmtwU54Fa6sBGk7m7tUHsv2v",
  "key2": "2wkTqnpvZmH7rSXYAZPmmq5HTYDZo7ERDmWXNUnGHiWVKy42RWCj8Jogaqb6iZT1eJsJFLGbvVTJViH99wPmvfFc",
  "key3": "39D7VpC3zJpW95BFXNKrTiF1ThWdgwQDySvmN7BJyEzSnR38xvNU5nkCzzy4ZMh2sY4y9vTRzHYhYpv1d21T2AmF",
  "key4": "5ntM1YGYdTX88wCAxGf9V9ZzfHXLVkoYnSHttNJSeQpKJGhRs3v5ouKgEArGpzFR5Nw8fPYiMbCGufwGZCZAdxuv",
  "key5": "2htjtHAxe55RSWh5RTKkNRXNKcwCFjXViP8VecUD2ZmSAb8DvsSyKoVHAuj3W5BBR5VNofp9UZuoRPFRSkHUu7GQ",
  "key6": "3A7nMbwhtpspW2cNdwJAgkRvJE44Hgk7NDFvg2aBRRWfo4PkLYaDxp9VPna8Y6E5BYy7eHvuYTUyagF69SCHiKYD",
  "key7": "duQiJSvhVdALTkkbp1Hhx4KnjHPVjKmJUT6azrSv7mKjCEtE4RY6e6Jwrw6h9TkavCuRNuaWvDojdME292mBcFb",
  "key8": "5FoQthhY4G8aUg98Tw8DJyqnE4ddMT2e1oFEXjHPJZViHftSVH12qz3JMTcvQoeDMnv3fuQn9NWZYjezDLCaPA2n",
  "key9": "3S8Aj36PZQcXGPhhcP438nKd7jxh3BYGAK2bhcLmmpA1BcXsNG9EJwLNWV9Hqf9y7rN8M3T817Wuh6E3YQfg2wsh",
  "key10": "2AfZaJgEF61uqr9VWvjsMC6w7P9SXze9ys5c2e78RuCHpNmpmSVgqUZSJJ2z9BN5EXYWoFsHHs477fh2ShCMHy5J",
  "key11": "5oziTfu2M2vXEMoBk1QjN6ftTRHC8XxFJF32C45fyTCRkxNuzkB3u2oaNKM1yUXRdaJVjzCxWe39CXEPdp3MYQjE",
  "key12": "4LaXxPv3sociWtKuu8bn2ZgWaT6uNKk6SMjF1S67SG9yaHTEE19NmYXgnL4NCB6bR2nvMgHM8p9qVFsVuA2GryEx",
  "key13": "uhNmLZyP5X1WoH2h32XP2Bq7js7tddfFaWiNAyND7uFGcmimQuTPsxBh2yorsAQq4hHLRdkbmt6AtmTmQa8PGmR",
  "key14": "4kSnEb2iogL9jocx2fs2JJL4UXr55PmU5uqGeMi9cW8JByQjsJKb216kuF5mipgYvq3wyQpZbF3sTQ6opyXkyfBM",
  "key15": "5KjAxAfaLeYpk5My6srfzTFfoAtJNpPLShUSXfw5nubq7LRYJ1DNUkwtRBStEFptDAQYRAwJP9z4jDqpJkXAvgeR",
  "key16": "5ZVzPV9JwyUgSTZLfdYy7S3nheEPZn5hHQkYWoENGk6BhJ7mMqWeRdeLQBPe6Dg6VmrhYwXj5ZkL2eTV3xHUQyew",
  "key17": "3NvyXP36Ppsaq3RhY7wSyntCaNdQ7YgUyoGG4fXDh1qF1VuMgXU3fhQUbT9v1rowByisJRNU1MwKi5EfjE5tcZQW",
  "key18": "2SvFFFzJf4HPH7zjFSU9crX94bhovwsf86eRv5itaSjqpPgEtR92fJ9USpQXRMui1gqrgmBwAn9CWK1VBvQ3SjTt",
  "key19": "5JPWSUvXwBrpqNHiNhQ5SAQjwouyQ7j3FgRw9dTCxe45zQFFjDMs6KETRdpED51SVE6CShcMbxRGNnwDQrnGMRnP",
  "key20": "31hr6fQSnX1BYJoq3AMGj4iBzepLSBXh6qFPeuhU7c2DQxToLF4PYZLpgngbmVAUba9c8bMgFCnmgcE3zRDo812D",
  "key21": "2NJA5XYH5XVL4ggZzzqaV2Aut6uk1zMWbed6dc451h5hmCkitFEKWKRAVVi9wTnn5NBg7HKJpyVdhULVqVWPLqTA",
  "key22": "SseD2EBKgF2poqHnLZaFiAKjgQXs8rpjykTvN4NShFoRQhZMQjadbsF9ajwk1yhX6efzyDaT2tqVJ5JYXPhCozE",
  "key23": "5SDNXKdCJEHCEvkaPnUVF8CTD7swcLxKExcwXQuJJYMSVFhamK3d7Vc8t73enfbptxUs6KuBUYu2GL2t1vuHQPje",
  "key24": "3iq3orBAJnNsgPX786Xcb2e7MVZ5wrT5NHyXy5hnoz1afeNenECTf6Rr8FNE3nk13vW9gS1Z5e9LevXHCyG3pSGN",
  "key25": "2m5bPNaSve5h3a8hbnaYyxy4McjBKqgPeRT4TbLPAbTxHx874a5Jr6ctCmTfcNsT3778uNSv8XAG5NL9gMiBLkcJ",
  "key26": "5EHoshixmWPcEpSwjrETJNMVhGJ5MxXsb7m3xU9yu5VyFpvv24DFG13oQCbk2Wc1QhYjobL8bbR5aBGjWzpNP4hJ",
  "key27": "qoSFz6o1TvRGKfPugyfQUBpjGsGYHTz5UuXrJVsQyyA4us3TVyosbSrpjsXNvRP5rjhTyXXXRfsiTtCbk9MpjhD",
  "key28": "R8mUhuyyLET66tuFMe91MPUcnSPPP4SM4wLuQGfaDNaYDkmpsxQJG1dEkajnp1xDCKvMMZgWPvCWmwuRfpqdwn3",
  "key29": "5vFf1k9boJb57hRcEYZQMecejTV8EVtS5UmXH9uS36xsciNwxQKazQT9rcwEDTSaoxpDLqwqJmJRSXJ2zuaR18cp",
  "key30": "qw6uxCvbqVTDUKZdKGrU4dQ3VzpVwhMqzVDRPTVWfJvD1GNLx8DuMwvZghxMP4JBM1j5nPDBxNomzL6izezhd6z",
  "key31": "4KPsHYfUwTDFVSqThSv8s1mqvDwT6x7jFc1TY8kJCaa2YNwFy54z97vR3NHdxkKBnWoDAtwRPxYQENcTayZ9oxux",
  "key32": "5AE4r9tibnzT5wM4pKEDja48t2jyDXmGw4DHK8hAdE2ksX9pC4m9v1LQxubPJN6pLUV4Zs5khDDkHzb9Gwxbemyx",
  "key33": "2T4Ecad8G9sW87uXLy5v7D8B8x8yE6oMwTKzx7WkbchJhXUeTzDstjSSLPZVhSKuHQ8sb7ANh4ghmow9SKxFu7zV",
  "key34": "4jgtnpKJ2kRJ6jFoptJnNSUgg7ufTuqSXWW5mLMzwQQfXQVXh5GdE7i4kpBY1pvUDMtddj3e3C2PcBFiaDFU8CPa",
  "key35": "ELqT2PKrtean2RbtH4FWDnrgTvxi15BA3QQwLLxZcLjkadJFTLmGWfTqZrLyDkiNYgwRib1SkyqoFHmxg81vzQq",
  "key36": "5XtLYBkpqJyesnuMoJmtNV79XsKU1b2bXTQiYF7QKpbCzhN9zokcvYLVm2XRoVkcg9TY9gk3qqhFwG9yxDYfH6ZD",
  "key37": "61Ly7CiBedNNZv1y9EqrFHkU5WzuLv1mXSRA5yHjSgYuTrk9inGZhs6CvcA7XQvG4j7aPSfiV1zbT8Fxm24A35CA",
  "key38": "3eor3Xo1UTpw7cHsgUxMKtvuNxH7QEXubkjhPMYAcDfj555DA6TRmVcu5GyvU9SgtD7VB4mfe5cPtXZbygVhTK9E",
  "key39": "3V1QSxRjwrtaUr8YE2Z8XghxSHthVsZDPMk9CSKBxLSmS9KGUikb9qFeJovAb2NdaAiwVrVhXjcitouX58z7iyb8",
  "key40": "5YmHrKNiJzEGoqVTJ3vsHNCM3i7NQFJ7p3gFvZFKLkC4hZ6t2wKZRKbjxMbXih5fi4Et3dNG1sVhVwpZ52pA5ULF",
  "key41": "4th5wzhWNoT8VFsac2Tc62AmEnoxUVcVJQsTgwgvgqmNs5KJrng6UJZZoSfNVkGAUEKy7gao6K5wnLniyWnBHPmC",
  "key42": "2KmzJa3bivfU8CQFP9fF7gJCrGE8SdjowJk56C8Tr85MUSZhDdBe4XXG851kqyGGiWNJztuH2WkAq8QccLESLJWk",
  "key43": "3L1UBh263sGJ8hNTkH8JiYA2DWKUknkiCapNrtkF5ZAPFMJvvTqRy25S3c4nhDdkQXrFcrR2WaQxXum1UWpBonNP",
  "key44": "4GJ142A6MdytXaqwLqMacn9tjtapjxgyY9aYqNdhitzCWFXnRhdnPG81k4wvLchwBVA2kDJh224s6UB6j2CSjr6Z",
  "key45": "65fYPykoPiBYdSnd7cwyeqnndELnh5wZhYqs9aBLPUVuJ2NyhCNZj9EMoAwJp1H5EQteMZpXRY5Fx4qUUdKYWFkm",
  "key46": "4QTdf7ocYiiVvPbFgr8HETyziY3zgGjRJfCVD2i8MHdQw1PPFDNQCyVop1XmSkaxctUAkFrGnyX1Qrc7QmsiPBU6",
  "key47": "63xpKQPNuD4KFP162ewXQ47PGt9RgB76VePwqtkbt8aKSbYxz6Xkj6LB9BKUaSLPkcFwn1mBYbacz1oeGTSUZYDJ",
  "key48": "5DnaAbTUtwxkoCk2Ex3j7uo7mkfPUb6oo1w6kFGn61GyyRyPbNkn1tg4Am9LBWBM2DUa8CSxyHGBvCAzerdauFK6"
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
