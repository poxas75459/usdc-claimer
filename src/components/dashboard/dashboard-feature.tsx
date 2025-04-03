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
    "4v2KPDfKRXoQPwazVgPAv9SAVWHStogkp2xC6x3ZdPySqVNCQbRskBboPmdeNAeahhXzUc7aH2bivum6XkLqwHZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AR7cY4BBRWEAsYvSVFnoWU4bvu99urWBY6XJMDw5BX7TLseZzzdFChiFccsWx75ASGDXPxntyJrU2wJk6DSdwYa",
  "key1": "d2dK4eisexcHsgp6rWkuRwG7YqrGxBtGJrA18Bukq3BTMiyE8gsqBTq3GS9EStrhXo4hTuvLQtaikQ92wk8quac",
  "key2": "2mAdoJCY5dorVpDdabQeRpyNnK29xPYnmi3fZtLDRRtQjAWQMrSgd34VSkw1AgG9hudNWUHVbU7X5YL9cpEYSj9J",
  "key3": "3t1ATGQvvXkPCaDkcKjbnpaXEVL3U2B3v38QuFCgaQ9fBiM9UChwo6xY1WBsDYrk7Z2TPVo2881Y7tidYMWUoUzB",
  "key4": "593MpVUKUEa5jQcKonmjWLp24UXNncKJyBETKQCK7nsaRbwSAwmyPAwi1m1eML5v93CCs9XAZfvhQzHagj7k7TEP",
  "key5": "KdvdmmZ9rs2sREFhB9mnLYSH8KuLEGmRyVf5bWbpCVxAsQ5jvhLkCyA9mr2QK72ZuEmnjEaxnsEQYTGzPu3Jdep",
  "key6": "5TYhuikexWmnm7VJnw8eFaZ18tYfre4NvCR8xr9NxGPsZtiEJNwyzwZPQqqwvKXyr4ZbGrFoqumAoU9aaqDZkEQY",
  "key7": "2UHkAFbtJYfHkeGVBHkMspahVCzRoGsp2m2mxGJ58T2MYN9QHnBp8BSGrYWM4EgjZSxku8UcjZBhhJVGvKx46BBb",
  "key8": "3qJb1eKWrADmuEPZonmdSmWisCozJsNQ7JG5r4bWG7h3W3Azb3hX88WfwT1LNYTHgwHfpdb8DTaTw7cJcTVZhBEN",
  "key9": "3Gt7KzgATQiQxf162Jek666UDYqNvZgL2p2TeZtizLT5vzYErRX5FMQdsHpP677EDBuwR4cdK9GrbAkDm6ynYY7H",
  "key10": "4FYvS5vRwmZYGLYqqwku4KgFTr5SkBwnxCg7Ui6vRRzFewTZUujtG6PdUw4VbMFM4VgCU8Sbra5ZrG5FcZ3mdrcE",
  "key11": "3gucaDk6ATNb7AWeVJcGe7uwSaTYNeZiPSpdTYCvtvqFMjTmRvLx2EW7V2LGvvAztQ56NrKZNKuLwsZvYhCYm51g",
  "key12": "5AM9twgJdhgXBHE8rbbusHbJcd8kB24f7nRfBX9KwDkgA6qkbMm1FopGz1HaiYqk74y2ynWXH8ayq3FeZYvPX4Ht",
  "key13": "5gGSX1QmSSu9HnkiY8Y1pTvv355JsUc3428Wz3N4i96YkDVoz9R9QtVHjo2VhRxTshm7nHs2qoPBewpuYRewC8DK",
  "key14": "3QxWKhSMDnWLao6huBVAd4rNZLih3PvcxMRc2MD6Segd8Qcz7zFifEGjMsx8vWB8oEaDs4EroSmtST69a5AhRaSU",
  "key15": "5oM7i5wNysBgJDNtC6w4DtmJtJPKsnWBJPeDsaZuAhYj7idf8tG5WPTUiSmdhSWwFzwMqLzJsnnJvh7QPw5LqTtn",
  "key16": "3gYzzbifA8TwmKkPW1Ytn2wrb4R6af4FCn9NZowYwHQeTpthtrQAdsz4m61w9s3kGCrb1VsZRFsAX8VC7i4Vgbix",
  "key17": "26rZ2MdkwAZuYCLL4TpJ6gRqwpjefaeuX1f2M5gUCPhwbDQjSkPscJZNkF8RPP6AHigAttbEnF5o9SAqNjsEtAXD",
  "key18": "2YJdcpsndCTrLno7usPhdVh3inMWdsz3a4iT8geDsYMjKQ4axBHnAJ4DecmJY2UhiLP7tshUaqdPix1sswHexeuW",
  "key19": "4yKfophirVhpTpupVfZGZYPM2C91hN5tCji1ap18C4mkPmjuBZRrSSkFSicYfoh4i79WVapSQsZzUzV5og3UVsm3",
  "key20": "vdRq3AGaeJRFkvr5yMqAjeUuUwdsTeXpJxHkSCdpfMR32SZQ2CgJEvB2Axp2sNHQhsnYR5gmuAcw2FroNWPuJSA",
  "key21": "khGjVcF2ErLRprDjddwRVkwVcbeyDz5FGtBXeCSm4X3jdvtiiKgrzkkgLMsZXJFADpJCM6auJEoWCpadyDCEnMp",
  "key22": "4jHBonFD5zWb2HajfL4BkkWcq81qjabrCVR79TeHWsD5C4cUgrGfmCvuiv6oEMCDtenY7C861vFZJ57zPoXq9GYA",
  "key23": "3HLNShtRM2GL6pHGpN2KHLDB95nuwfGP5Fv6dCTSfj8JtV9MPGXso3M8yJs23fFTDGSfkqPUCeustPSMiTJWxHxv",
  "key24": "3NAFodKvQWvombxxsJxnKA6CjbryKPDBim7kzgTpF2JELK6LZze5BKbKtTpP8T1CA2y7jJFXBJhawZ6jQpAUopH1",
  "key25": "JsJiknBQQZymo7AaqEoa2GpwKux5esfQgNyNP6d4qmi7GWuU2DnHPimzJ3y3xNPP4iWFS1dN1561ZG6rCNQ1zj8",
  "key26": "5qMgNk54LWB9pSr2ZCeWqJXX2hTcwZDXvF73yimjgs8bYmYhouLtwPee3YNWioPi4GSac66C7cydknhrFkmoWcG8",
  "key27": "2ae3BbnfmGCenjsNh2hfEZYYq6J7Ck2FLeR6gSBA9RfzJUBSUdhQRBKx9DBK9oUY2crwvRGhyypxtJWc7PNTmBLd",
  "key28": "5p6XSQhgzcZgbQEYYPdLJGhFrpCS3FviTkeCcw2pDYMJqBbXxSfbiBA2K62yqFi6Enw5TV4dfmBnr252u7qxpvse",
  "key29": "5kvzxecuKnyJb72JF23prDXbLtAg9YUPQ9zUZL63goTcsyjxB1n2mAAEGuoEPWy1XVkCs7aRfpNYFQpEt5Y6VknZ",
  "key30": "2JexoKqK332WhzzeFBc4DNFv4TtGwdaQMJJCdH5VXsptGwo5hBJBHR2gVp7FFR3Cunef8uw1A3Gf5Z4K9QksLrJ2",
  "key31": "3wfuiyY5cA7FF8158nnq5NWxnqh9ZrZYxkX6HZ4n6wko3tPdKy4yqgP9eiCAqn24moqctU7Kfgk47wuuz8UsvWCB",
  "key32": "528Cu4yA67RRxgi5vsXmVxyUz1LUrWjkAL8RbREB6QmX88VM6F7X14CVw7n2hPZjUdW9nc8NBHMhwJdTjffQ7YWd",
  "key33": "5RdcHoCTVsMGPGFHfc1W71p49xeVzDHdoAoixGwM4W2BrbCvcveX2bugvZe5k77zeSup9o6MECfejP4sgTpKMAmQ",
  "key34": "5pcE5tvz5W6RuPattNZ1XEgpuKyevMrJy2CYTgCnBeyBZ9xDB1cSEBSPqJSrm3MaMiNcJvrETqoBaraRhyi6WJgg",
  "key35": "24PYUhmCtWqSZrScoWTtf8VmRotr5MR9UTfG8wN26gyp8pMeoMCaNrHdpCsReTcTKxfPaa1fzji6HGqjbeemtvXi",
  "key36": "4GCG8UbgKQtXXDdLRzGMEvMU6p6LCrpVhTtYdjPd4NLzwvWTa2mqEYwZ58H7boAM4e6CH8kHkWMjRKtipYc1rkKz",
  "key37": "5sT7c92izr4fCdN5gdfj1Bum8oexu72PZwB4LcmdCgoykB2HK8YvPhTgZYwzR9KdqpSyhCMazEcGvazuUtBNd6yi",
  "key38": "5LYVwbLz5N2sMA4kUUwGbkfo11YKE8ENtmfqPb6fNeasfxisvXYPjLBJd7NWwszsQa2x88vNvNc29ajxyairGqxt",
  "key39": "3gvk7pmLd4xYnXBaEV9QvaGWB3rtiiXXLinvA7yYoWsmAc9JsBMpbxmeWET5aNpWeWaBVBheT1EHmEnGK4cGyg9x",
  "key40": "RhpUJN7Cg8pJX3PxRFMCZMbBMX83gBuqBxCMJpbMRswTFFidbmpkM47LaHWpHnRJMVM8ioGjug7AHzAkKVVwi38",
  "key41": "3Ps4n1zF96tMXpv4uYDSboheEC6oPc1Nfk45RUa72Nusf9CjXG8Bgg5LbZYQgMEc9sVpcUg6sQRQ8LYwKzcCBUJz",
  "key42": "2d2yo9axz7dv4b2jwfYSTHUyz1cEno5WnvzCkUnkqw9NRqQBvSFUphNqBS852Soqvg5SMsqbFsuAnGt5jYG7CnLp",
  "key43": "2ovp2TX7urQGjs9TMNCd42w4z4yCnnUaANm6P9ZsjbCpwcS8ouf54Fnd2szSua65xZQnPzXw6x2jvs6Bk22r3p92",
  "key44": "5SYuDGz3rWdp9PQ3X3JCWJNkj7CjAwPwKqGsvqxAi3PDGMwGLsbJrgWPzQ7F2P8aaSkjU2mgH57NBrUpSY4r9xD3",
  "key45": "29GnxQ8CvMz9fwagfduHmoZF9huq68pLPkDwrLnmmctdZeZ2g33i9qmXnAFFDtKMdiwp2b1cWz3DaDUBjGWCQT2X"
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
