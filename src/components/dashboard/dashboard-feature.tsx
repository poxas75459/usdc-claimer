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
    "4vfy39yMQjDA2q5U2M64yeJYak3fJ5f7D7hpPCKajenvcvfQs1jqtLjfiQuCHLvyU6jfoQW6dNEcK2aujwDsuL6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JcnkM3aYoYaKspUBPcnii5azNh3GM7P75JkNHnaLvyrnubKThJfprQfA86XyL3mYaaXigXFqjYALSrAN9W8VdjJ",
  "key1": "1J16KJcDPw8QVfbGQKmyUeD1meU38a91m3rqKyvRjjZQgR6M6tJSVKCbhz4xakNpEywYPt5RoZHepyTbkFfFEW7",
  "key2": "3S4JrnJBMH8jie1VTukpvN333wadVGdZ4ZDuiHWSAL2WM1Zr2HadcXJhMaXFsW425PM7xakupo4QWvxAf2EkETvk",
  "key3": "MMaNdjegyLoEmnPAv6aKnzBLm9NNtykE4wWK58d7U4YwSBRPqcNBtu2T2jTAunuSVMAq43kQkZV7JXq7XV3moES",
  "key4": "3tTTgQnE84sh4cuMjSa8rDqukv4QFiopTrFygUmEvcSyQGpKeWJvmq7qNF25hYUbATM37z1YDphQ1cAWi36Csag8",
  "key5": "4DqioBPt2pJhizHFyFnBys7LrBjdb3jD7ymf951oBNEt8odXR9JSWthXLafnG9DXa7W11kRKwedjmnqfQUsmSwMp",
  "key6": "55WegC7jdzNVuDgjxeq51Mw8RZ4tgxQWeXMNWsBpt15jMjBGLY1B2s9d4QxBRfoaEVZYwYgg8t1hbaZexXcRSExf",
  "key7": "fxpYDcw2vuFoqETzivreeM2SF2eWx5ZnfkQZ1pHQZojwnrpwkX3XLkbYVWYdAxGYdjQWJ4LfiH8rTPQ9u4qyKT6",
  "key8": "3UP4UcLZbm2UmtTpr1aRCG2qiD9fMskyLp3ocF5CvSw8vJwbB5mxPPWg72kvgeUJWAmzR7oyVMSHicDPHDmsBHc7",
  "key9": "KR8KTdGzSz4GU3CsWT5kqCFZYoUGKNGvr8KgAPNBpa3gRBmhaotw6Bnu1gatXD8igWF4gxiach9PA7ZywEXoYMy",
  "key10": "qBiXnQr9utgDMTkkRVZfhkEfp4WiYUV3ot9gi3KZUL5xiS9dWMyBw7ueWdVSJN2xwNrC9gfcBPYxKmV6BtCnoNN",
  "key11": "2HpyhGc19A4JSYoFVMTZuma7qUjUMgNheBZhmnLziURbpWUoCYJyh137u1yuQgPN4JnVQJEeKSLfxKTdZGzdJ5jX",
  "key12": "4EMrmxLjixojfWTTBst6Szpz2Fu3k4kqME75GpjeQD4pKJAE7v7bgA8ehPtNGKa2D64aRhSx4UrgBGNhjwYXoMrL",
  "key13": "5iJLBmK8HGKpus8U9iZozwoB54cJZbcnEcBDvDvFZRrNw2TgLfSVwF5x2YT3JXSVV6CsqA9xAPeRtkcrzdaaAnTd",
  "key14": "M7CmEk9wPceNchzi7wnXtUFcW4cJWFXoN33ZE5Wq4A7gYHkcUjSqEmnH3jZvPfmu9ZApdNgUgKHQFMn5hucBUKv",
  "key15": "2sUmk4bfkM38gnKuX4BQufCb2vYfVSNM1GhUhp7XjiqWaiEspS3HU6diKnwMJoWd5cXFLwyAcnFqX8ufP77po3St",
  "key16": "2kv8WA2biC7Zh2WM9xA4iA7tyZpLZ6bcL62azyoCtXMhojvL3qiUt9yomvWmB3a7NmqKBT1CHkqyGMXAVWfxqTpm",
  "key17": "5v951pnSrhXeypY3GwPerQBbkM1aFuYq9o7UmMm6j4i2rkKGztHmagEmskaX4TUqGc3oJUxvMzz67tHEzMqu6x53",
  "key18": "3RriM2wAiJGznvQaCsagszMubdo5UVzCF1YC5ufGcsxyqqwEXEW8RdVBbLEn7QUfg7y9mqMsAoca2L2pbBhtQUs8",
  "key19": "2pziXwsiRhh49bNn9dbnVSKLNsxDoeKdbTsnH13LbNKZUQZUe6sb1Z8UnpaFf1AHMkuz4XDAAH9Pc92fvaBnTPpE",
  "key20": "3gja99rwjvYhv1RpxH2xfVXt8eEU5qUysfC1V1QVEtBtTbJikUHBL69R7jw97LYDtd1Bte9jWDEnhbMYwg2zTUyc",
  "key21": "5vmCupPwViDojwhpUZPZ2Bf7sfx6m4HuG2cGu7WUzKDVkNAELsMnokD3ZCmWd8Kmwwd91KMKACKKYfMdyjJx3cev",
  "key22": "5pnrqoe23XtidUum1iE1GeUviMtn7BeJ9EAc3nt7RMNDhLK1LVY9Cz7eCbFZf4RQc7FcDvNu5tvPYsXVFXMYSEZk",
  "key23": "3mrKAfAjhxR31VGKdTCSupPGT16sfkHNNvjJGrqqyGYFYxTpPrwSGAQjpfVx2xCtd9BD31PSvAtBRpoup1EGwMst",
  "key24": "3m9ZekaLYUcmkWw94kdvT4w5BXJhiL7YBwHKUeSFTRDyjgX5ioHwJy4eXhJV345a73Dprg4nVHcwRz8k8kY2J6aJ",
  "key25": "2RrZDCRt5rNPkXfsdFFEd5vppuzKiJAkFhqkqBHC2Ld2LTWW5MAKgTgYDoT72jKKqzRufr9Jx2qCaTCAZYeaW46Y",
  "key26": "AvG752EvxMAQQgqdBFS53pC21fCrKbYARfMSvC2LHTyYUbR3fCZ4cF8LZVQYwCuGzdJTjcNUpt1oYr5nTYHLUr3",
  "key27": "DGNBkyVinb1877dJsh7UDAaC5LvzahTZHis8AvPBSMJB5HS1dxt4TzoNkeBttxzjD6cBHu1WP4mG5a2djFm9BEk",
  "key28": "TbgZUDbNSwdotwR12MygULiDTL7Jk1NhCUhphshe2CnUdsmTEZ9N3aAKSiz1dencbivMACnVk56tNCwaSDkCeuy",
  "key29": "2r9ATvVREnNK68TfHxnAVcmhBEHXwRcBaDsqzuNFCBT8A8tPehMV7h1UbCNp6JzoLPsPgAUufxnseKfgtgxgUF2x",
  "key30": "3GUbgbu7SkBKsE81agVnzm5M9EnE6mGaFHybzTbdFyKhRQbaDoCfaCrQMcUbSdJJkMfxJnVr1uvemdrd66yrv4mL",
  "key31": "EaF7stUZ4bV59x3oM4dEgGedTw3mK7asUNWbamsneWJEFXDCCtMg3Ut9Wd4b9mBTreAUrfaRBrLcDMvWCQVj1Nx"
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
