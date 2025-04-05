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
    "3LUiVxJ9xoDz5ZBPqBY65c2vjbKWyfaUypLwEqq1NMiqrgxFQ83zv2pr4iFeUEWnfzunK9s55u9i4A3DTtzNkMj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qsWJC3kFDiocsmx9SThM7HSk1bkucrKUe29bKXkf8dN9DFMgquMwgSLwjMooRiFx4A1EPn3eNjrMDFjBFiarPYY",
  "key1": "4eWBUbpFyhf2SnEjzRe7z1YLCkRh1zdFoJuDKrhno4ZAaa1xWEUvDsuovEvreYiDkVSM8JycW2GY1YxqC6Egsxer",
  "key2": "3RLWTgyyfdtLLk8Fum4QupyzC1kj8mtSZTUgPCeapHW5YJcVbQh38D52PDstKjaC487hqQ9CKfWkh7X2roV1zuL1",
  "key3": "2JfU8i1JwNqEwy4BMD416tJGeku4ivgaxxNCynHYiAuiA5yX4Ygg9jRspEn9XvahVQCw3TLEYApMDYQv3xVAZVdE",
  "key4": "5T4QAFXtgBLeUUpzx96qhgZVDpGrrP7oYrPeR1j11ujN3dbMQ7nGXeq32RsLA2dvzZAB6ZLriS1TCBZsKFjDMtFs",
  "key5": "3jwVVeZDXaFEqPggQvinhiXMSY7HVABNuy2x8KQotwbmMbf93UDdjchRvkHJpdQPfFxhz2K6YLxFuZt9cHeXUmGB",
  "key6": "3ANgoJokQkBMTyXzabH43BaLLtoozLPsiAaWTSv3qqUAggmGQxqpAuV3yCkpbsAUw7aBfzto3tRPtpFf9mKwxFx",
  "key7": "2cBGGGtdPjrS68sr5fNLpwhSZ7L7DncQxjxMJgTMm5KqbEjVL5AYizG73b5aYwZZ3AFcJRyNuJX6FgKHahk6FJjj",
  "key8": "5jnwCJGMEhZGb2mFMdTYuTzFLtHrA7GmPn67JxTQUMnpcosjatffm3dTRoEAUBD3jHK1iVBcfxBoiKRKf7Pm2K9v",
  "key9": "4sCCYaWX2kvdxDzpYj9FTm88Q8CM2UDh2Zw4Wa71Uyb9AWJrmDtPxeVDMYyF7sgWfhJXuSF3c4Mx1qheGESTR5E5",
  "key10": "5ecdFLN9yRfa53QhgkXuBZYQ1D5Rg1dZxg4drzE5BNJR7QtBzw128V4P8NJSNw2VBsR6pN7LNdQ9YtxDqtBDiBNi",
  "key11": "2nMi7wTBwXDBLgr7VzjGemyoujxsJNSeiddGZ7CBg4sknJ4sPMRungGfR3e2MSFLqWQAmhLi9Pdkj2MmGmgaJFJt",
  "key12": "5UVchxvpwErfixpwLyyoFvTb2oN7UUfJsyc4kt6e5MACiyHWaXtBza2nNW1HFBc4RFpEr1r6MyhN5eg3q2DXwPFL",
  "key13": "666FJsGddHFRZ4GhBe3KtvrUCYSM7NTxFWY9hU9rPCetNHtPqk9e9RSVpYxoKxQKPGJ73GQLoSz9RYbVwkp8KZCb",
  "key14": "EHdkTYtEetTxrEXCprcR6pHiVREQJPrJ7fDTofCUxJtCZBRVBz2t1hs37CPSjWkQSqhS9NUM6o5rf2ep2JAMVQq",
  "key15": "2aHVW2wawVNYppUrK1CMWvwQ47s8GN1ttnjTuByLgRCQKmpNSdH6MwG4BrefXDybWY3Tiab5Jom86DteW8pK4tVu",
  "key16": "zeX72D6tyh25JtYUzAJsMkapCysAkWLfwJpUGU5zaKeGNnP7SxnAYcKQQALSD4xaDcbDU7Aes2DroDzdmq3e3f4",
  "key17": "2Mwxxn4WtvwRhZbu1tGz7tJXJsvZZD5LGFFGbRrboPQuYdtmTbS1mSFp31dxzxchAMYqjCxwqt2q4GNPJaJhADgA",
  "key18": "5FbTf7dqT463ELacDpqYbNbtnhC9duuCuFEcvz7NuLs7ewfUyneo3YneMK87Lk9iRtmf2cnjqhXrYhMcgL2wgXy3",
  "key19": "5UNMygco9KJdqAuranr8PQvpEV64JMk867i7RJfoCCdnnRui5n5sgoGRFGgs22UpMgt3PGXJ5LPxz79GpuHmhBaY",
  "key20": "3jbgS7cMaBarKmtPERnJxPL9EsfWLivYnaiX9bDwTMxzAfYeTAkEseD9Kq96arsH22yqwMwL2hPpHzwyZpx6y1HJ",
  "key21": "4DjnAYSeMmX3ZDuzLDhExhiAmPa6kKcfgegb5AQgJuCnaRWqwMbhjs1zV1ZpPP8UPJ7Q8Q4yQWyCHVYmVz8acufL",
  "key22": "9pPgKPcsFJ22Vob6fgJ1GhLSyjWQVX32zkb6DNXji7Wnx4ar5cqcYcSCkaYhu4Wndiggggs8xBKqW9Rsiji2nN6",
  "key23": "2czPFYhLN7mhZYkVhjFUpd45tkQheWuqGcTrbiWtfzhj2vJuNBVsFETZmUdcU1Y8uXVWRmnXFE3Gm51Cq6hXJwWD",
  "key24": "2qs5FeVPnDJn3vX5kwexWr1UKAd2hdeREoWSvgqN9aBBhcRKW5yQYzMMGGhh6uRHkGJtQSJWGinFPtCULUV45Ug5",
  "key25": "3KGXp7YzRDpv9quWPmfpeTke4bEUfUC3TzBFJPJkfYtq8D4mCg6cqzdBzj2DVuru4DTd2wSHYLuUTfMcnJVJRwzs",
  "key26": "4ZRE2sPAtcqnLNy1DABvBRNfEh282ceGtRMaP8ew4MD976C7U4LUnrdYr9aaJgLoZ1xYoWKZC1b42wromaCvsQzw",
  "key27": "5fqnQj2QqxJSDoRHdNgjTU2MRv1hW2gbJ3ythZMqpA8PuXP8wp9ub4tvbCHAJqXu2ctZ6nY96UvRLe3d1nyd139N",
  "key28": "27t2D3XHskKhFFLnGbcFRwSqEqKrbBinrhF2MxNHMe5fS7RFnGbo7xwqvxFUPGAcm5vtC1CCYxmhQxsLXTq1TuPq",
  "key29": "4ZykcPVVkTjsZxbtvrUM2bbcd6yJ7qGYXC2maqkM14D1VEBdfuYxGDxrYyosaS3FgCW9nhdJinWgFLV6JNakmq9p",
  "key30": "46mkEsySYJsA1EHuVB4nARzX56kTsAFnVZexkcB4oYGZoL8V7LYhiBMdgRzeKxD4HvtQ8m1AZi3ptnVaZpQQwbxB",
  "key31": "5vsPwpymFSRQ7Yv3U5Cy9ZyocHgQ88RqexMSPTn3P85mtfJ8gWo23gEiKGjA4bAUQUB2evvcT6upQHFxCV4AU7XG",
  "key32": "3RTfZn9NiZjjhkdbxFru4DiaDnvzdQzTYmWXaUdWg7U5LvdqfN3pSoGQAurs5VhbHX3tvFyjmVFmtiECp8xZuq74",
  "key33": "3mzZj7U4HszvVi61ACvm2krXzLoBU33sXY7puXy3ycYf4BBkJ3hzPKhKoxEoGiD9YCTkyzHP5BvnnNxnun4b8TWa",
  "key34": "5vbHsBfaT8j5gTwRoj7cMBHj2h11seYMkSQwM2ia9yRoU8HwMj7Y9wMc7QTYYJuUvtcDozswoqrbx4UWqWqNXgaj",
  "key35": "2YX7xvAc225Lyv88U5vW6Xsjt16kPQjD2SkWyZ9gEJvrGmVftn2eofGXX9XKdyw82vrLtb97FcMypd6gWN7Wf4js",
  "key36": "3uvG4rDAiLkmTQkAo37esWLfwdrRnF7vZVV6zCLfGoPPmuWRji1iQoL3qjySE1n8jif2bxkEf6HQQ4EdqnVPtZdm",
  "key37": "FJjUCK4oxqSfJteCgvy7zNEwia8nKkMukCNCaTf4F5u7RkXnGfxW3Uq5iG7zBBFNfefugGwL4j1n6cqMeUavZkQ",
  "key38": "EWVTeDzjbxr44cFsnfn24wG9T2txyYM9TdKtwTWx4pWmxj2PCGFzSYVtXCjk9Yf96aSeMuWyuAYPVYyudTTkUVr",
  "key39": "2UZK5dGc2Gv1X1utJSc7GUFpneEXFeoDVH3WHywdYGFT3ZTEBE2NYQzwtp5XU7w86paTNdEtdnVANKjPg3uJKbrd",
  "key40": "tyZzXmvA4k24W2NXVSMWWpTypu2CTzwHQbQqfNVNJyvf2bkQxxgbk2jftYw4YZfJAsujC2X9qVdBaGnAJdXFqWQ",
  "key41": "HNxHDSbZMkpS4Cm9WA99a5CjUtHxsZoUmYqpYkG8hgrB1wWf2B8JmtCEx14eUcyJjELcbh6GEW81ohB3wKnqAVD",
  "key42": "5TjoVQnd42acGB3F1bjGQ6gTxTj7LujK8eFQQamqZNxdCYGZHV3wt2ihNMXRBGpw1zYCEC5unFHW3jahPqPExaB"
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
