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
    "3s28sptD5GLhi7aPshKqCPr7miR1EAS2PedSVFzBr4jZ8oPp3EUkPi4PauzoA7Zk4yEtFNLy2sYjaUV9octreMYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fz7D7pJ6XBxEWkwdU9abjJm3skszZUALR2Pu7x88kbybvdFVy8J7Yaqbsh3jufTQGGBQqNSE14AUSPZmLrv74TX",
  "key1": "2GFyFHrpHi7raqFf1HAAvAWRcmD26jTWpp8G5fRMAdk2t4HjimHbW1H5WQ4YndcuFfRu1ECYa6tYaBn34oBpJMaP",
  "key2": "3uguTn8iQkc4gbQSeyypTxFZVkAEjjz3WAu87NfrE4XtY1GUqjbMdNpo6h5DsdbvecCdFTwRTQZT31mbLMDfXu1f",
  "key3": "2iCZDUzNoXNVQA9pdRt5aeAL3iHjATHJuMGygKASQLgN7Vmgx6eMQk2qi4v9E2VSxKwXcG51tDwc1CmHyavLNgeW",
  "key4": "5Ps6vU6Rgq8aSsqMsRbsBgCdWMH64drCNzLHpYELmsGuDVa6y87xYquXYWgGXcCTjYq97nujCj4RHWyNnT5GiZ1f",
  "key5": "2Nne9zMqiP2NxWQM84bu8U9W7L8GmFfgfAVyN61TUgCHsMjAMXy4W7gANhdmJc2JdwBeEVxysmnWEchztSbuVKCb",
  "key6": "1MyJVWrY53PfpYfm6Ad1wRkySebRvyxcuLWa4WSY1ZBrhxzWidiQ9BYAvRwtZNWkAVYYgqJdB3Y5LyETqbq4bs3",
  "key7": "4fkkofH6HPsDKZUcqrYo2Aivwkupx7CDK3kMsdwJXtQ3RYDVBg7ANHeGw6UrWkF7xAib8LDFL2FYc6UzNaSghFbk",
  "key8": "3JgXyi3VJUr8N61zUsoNsq9QixBVedVKEfbsSjcurdxDPP2vsyyxhkJjtKcL5QfeK4PCw3VbZre4XF6YWvy9t37H",
  "key9": "Rb6zswdXKBYUPzFHFbGQH5rABSAQKedJKTyw7tHibcXGKrHAq6grquQbmMDcJGBcGoM6FQiZFEdHebU1fLNg6GP",
  "key10": "28RAoBsMaBE8jgod9nPA8AE1B4FKaZDsqHzx8kkRUavJcFsNTsn2a3dxb8ptMUwVoezu5gykAt4SpKDFM3ss3qN6",
  "key11": "5BbWqBB5au8yLBdvVJBjBC6KUEEDw3teSZ2PQ4o6wyWRXNkLrBXo46sNnuvvXyFsX8FGEe9QXyTbhghXaS3HLHas",
  "key12": "3rm8NNfxgUFxbyqB9GF8bExXkjX7d7QL8fs7U5wgeCCbDEv52nSQvYqiUpubCYvA5sydUQAV7MXz3S9dJYtfi15T",
  "key13": "5kBEm4rWMJsf3nwYRH8zbbRMiaX1wvChgLYjd89mhLSUTy4tSoHjEQFi4VndTrbhGw6hwmgAER6cCsA8dhSgA88p",
  "key14": "2DqWHNC27zvF35KALEV6XyX73KYvyA3r9riPrpgNiiFMVCGHvF3AUnDCebaPMLdNUJ5EUW69q3oGNjvwa98AB3QS",
  "key15": "38K2jfRCHQFVKCF4yNGKaZx27u8nMtarYfJdAYvhJ34zzQKwsKBGVTXRfhsSvtZsFtTM6XzouDhsMSDeaVwwRWxR",
  "key16": "21ErPTgDbF1Q5ANJJMiGS5nVsvH2123xCEQ5HxdojfNJAMPeGvvsYNWrNaxXiq8xkHDVbvHjueXLwGSATm3catmd",
  "key17": "3WzRYe5egaRtGgMjGv8QF7gySouNoKMZrNotup7swAuoQe4HcVQgQMQqVFvb6pWW35pj7RkAr4Xedkk8Em1zJb6W",
  "key18": "4ZsKtNxvWVisH2DyWF1epG9e9nM1aGv3zJPVp4bKgeJc7VgX3vTpaEW34fok3wy8y1cUnowFAKKoM5UiXDTa1THc",
  "key19": "5ckX3ohxA1JFN6SWtXe49PPe3Z2vHaYJqsy9S7WXPJbWWgrM6dDVW8iwkE42zqgV2b877ZMr4Mnakq6evy2H9CWk",
  "key20": "3TsXSzwWFUkUwhFzxAjtW4Rd2Ma6HzDBGXdaNGmzu1KMTeq3yfz9pWgpNGE2yFhaCbqAm5hceneGFiP14sUtLLzg",
  "key21": "49YQ5GvxvSnFFqWHEds6ZgYfLQQ9zHyoBMrhM4w9Af6ioRgH9anVzwGXwDJVLFMcFcyVLVdL3G5PxPNKpqX2hVjn",
  "key22": "4SvpxeSmTwasTnkWQpRbtkkLCBdpDy42J9Y2Vaub1g2jyYBZbsWsKp6h4ZVw2ka9C8TUT54epjnQg2wCoG52Lq6E",
  "key23": "4AxFDWUYPGT5MjDzGX72nxrUvbEKHZo4vZ6Fa2tnRDNz3h3He24ZBQNt8dGf66cd6NabHmY894wwKwG3dJwcqQXu",
  "key24": "4cnDAjGqaz9XFZwiPpVwW2pwZmVVTrxqhwMgD2xauz98fu6aWLJCydHp2XwM9SrFmXJiWWoEC1joCKAhsvSKghQH",
  "key25": "2xtBcNDpXZdnSvA7AB2nMjp38WKJtJXCBi7yBkoiQB5158LPD8TXkgkPdAVHeQFGCBMBrQd7xi9BbFBnekLSqJPr",
  "key26": "3qac2cJAD5peWvj3p8uPtTWdpXWKkK8KLkfFasj6dAoKf9kJQ4r9m3HmAvxFfzhBiF5hdFGcZnjN6FAVW9UG5iKN",
  "key27": "3u6jQRE5zMXRKMLUXjDw2QDwHRbt1yBWVmoSqmsFGD1pBmU5bRJdJnjN88XPrzwmUXiDJ68mYiXyvZeKTLMgpcLh",
  "key28": "2TVxQZkvZSNZhGJYWPGbwPRJf8cHMhU7ieeqoLQnjDFPZkMbyjtcfo3pfbU8LmsbCUS1pkmYA34ujCEN7aSZYyRo",
  "key29": "4tTtXmiXALP3hnARV5Mv2dWGTH2k1H9MhHm25uvKkzUTU9tc3eiXCduXitwR5TACaDLst2J8aHyAo54dBz5ZvoUZ",
  "key30": "2XmiTKwvLx5BADmnDaJz6JkDUkMBPtEdbzgxCXw41TeBxL784z2R4ocdXp89K13CJ1B9fBpfxmT7QJmPicSXumaF",
  "key31": "66WDTwPQhSaeqNntotyn3PraDP7TV8xrmZBDWG3kUM4A5tSWY2CbT8JdgCG1wfJrKuqS5himhYBprSLPY49Y2Mh5",
  "key32": "5jawSjM5BuUR8c3Jj49RzgnfzWHVTpHnp2ZyWiYDUpHTAqrcGd33i32jqiZ12GE7gR15cU1dUS97oihKEoz4nRR1",
  "key33": "2vurScRjien8Lun2BREc3HvAQ8Qo9n7pwU5tQEGHF2txHrZyafXoMhkTEHKHXC5wCPbLbDU8w6FPnTq1XmK6f9MC",
  "key34": "2vY6MwwhMCsi61oBZ3XRJxJfsh8b3cHK2DiScv9vtmHwCiogEUGTNnQ1KNPZjzR1ZR5JFS6Mv38nXbrpoZPzXXsW",
  "key35": "bwdF97ouiUdWacRcAh2HjFEu7vBw5V87RB9iMK8vcN1GQ46qkyp1kHSoWbropmQt5Kk3QPik1gaNx192Em1dqgd",
  "key36": "2ggbQpkz3kn8eF36utArVVmudPLtnXKCfsdkDtFxfEawyZ4vfu68rw9wHacSEmzpsauDdBvtQMD4pDzBv2t8Tx6k",
  "key37": "s2XnjfoRugUXsM5yPLg5an8pTVbv1AiGRsA7fRpCF4qCzSXqimEAVA3HsPJpWKMtRGM9M8bi4sGxZGWmwrVoSiA",
  "key38": "2vTC5uqkkBfkXyEGRmoJ3CkDyjAvRcwDR5bDRxAqx8LnmCfVayiv2qrnnjVEUFENHoYZn6WK2izVDA6gnkp4wn6F",
  "key39": "3skwKFu9Nn6EYrU1drj8pfyT89vDstLxeSspQYoaV8YZgS2LCUYAkpYn3FttNGgJTpjMAma8wtKVMy7KT8n7fdsS",
  "key40": "3rX8ykenYNF63s5p88dHMmBQWAbcWi2TXJhp64Tzdayp2SBFijK2xobEXHj6THK3pA5PewE9gbySEfEpTZTDpNQT",
  "key41": "2S7zfdQmCyy6agXDc15ic1A4ugvKeadAfCvLDhFbYz6QyJBQ8tMLZDMyYuVvttKBTjEHriT9DmswF7nmbaHRcpFa",
  "key42": "2kvT6AGuvgHwuwiPDcETwtvAzN5qjEkQa1CkvvzDm1Na1SXbD8cJv4q7pxnXKYoied7ENeEyodYJF8ZyDCyk5nav",
  "key43": "5KWGz5RpYjrYxNd3fbxPr5HwGWkhAxgdP2fwZcXf2oj4uHKju849WSxnUPniQfx9qsfNEtaGzz8B1kZjhCcS2ZPX",
  "key44": "psRj8M5PmGeacLTSxzLL7bZyzsaJxorHsZvDTaoW8EgUM8Pg1sFF7RHDFsxL4jKVaw4KCCXufAxfihghtXHC2oL",
  "key45": "2Fh91QSjuwxgqp681Qct2sj9rRpX9DAAJFkBTXv6o6m7TnkeZu4CdEFUP57emXszwidAiqrY8CKBreEFXjHaBBZ1",
  "key46": "4r28hJvVWpuMkfXfoSzcd9WGucN6Vh18STFqqQPdjJVME76syUPYtWvViEACfE8hNkR7oaEVWxHYaNb8b8ViyuqV"
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
