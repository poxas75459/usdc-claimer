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
    "eyY7pqWZCHWTDoEkV4oZC9ZjpSRGRS563pmmY1AoJGMLKQVDQRYi3rogQT7ULUYeHGGzdpkYcp8vkwBKEKJM2Rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXcZvYEoyuputEVeFitutFiiWQuz1dTsReSKxtVw72hjXWjb69rBmUL2KRqQ8CHnaj616vnRTRMEbacXTrfUrfL",
  "key1": "5CpeWY368pPGsqbWx6rRJ2QcDT39K1yu2rTW6TCGc9wDVA1cGZ1hixuERPU9JRP9wtiFPuyuQCPBMrZTVXRSJ4B1",
  "key2": "4xtDzHQc7QE5eLpPhnhhsjgc8FsDvKBHyGexQULGjdUbMFWGzvn5xr2rWgR8VnZbvniigeYTHMahFaaVBVecnbjh",
  "key3": "4G1JEtALH27gwCzTavpyHtcmsuhN7dyxBNFaTP6xtDNJtZXYdd9eP5q9iJA28NaPLNQQPaJPiVejNiXD2HfK9CLx",
  "key4": "3dbw76yZJiAjZWDsn2yQvnU4msW3tSHP2wrgpv3pLKvsABFGTaxYHDvtJk7pr69fAaNdXWViMf4xYqQyaUPnXNf9",
  "key5": "43cKvjaaXv7QWG5grXD9mywYXuCZ6gxHqjkHnxyGf1bxNs8U7iF3g9fTeZSzsZF5TQUcqRyDsuqTUZKo1mMbRkMq",
  "key6": "Trdvq6gCkrLAsTpeJrvtvnvLN4Lw2RPYgD9mrvM5Phiq956JtSdAohJ844XZNRPmZBGnoUbxietPkbtL4PbgQec",
  "key7": "kZfRMVbYgPUMkSh9XFjvfjUZXhHgtPEzKxJ9F4TKHVeNycGYqg4f4s7bEEURc1NqtebBUjU1xs4Sks6AJBrPYHX",
  "key8": "59kybM7hyM3JHj3qpppfqyrNFiRSvZcLtfPDR52jobCFYMpRb9Uz3BzquRqLhgf6qR3kG5cmHWCQ8sgUPrsSsd2Q",
  "key9": "5pdeRNonoBGH8aGjUaHfcULdmNByD6Jn1TC2qfQQMc73zprJ1TqRoiRX9WwhDYk2DDcwQ5nMfpde3528e45KyZKe",
  "key10": "tE2yvy7VrzwzKzmRzSqUq445f5ryxya5pEMnMFhvWMUTNscTxaLQHwEYjKvZKipw3xa6L2HCDzH4y2JjmrvACsq",
  "key11": "VW7wSwTTzkJLMRc6fY1KghhDgWpdL1y3fCcDzjbRHLxfFnqC7U5DVpBfcV9pLaFSukkU1CCiyZ6FBmZoAXToXLF",
  "key12": "4ymunijTMve1todNZjsyJbRpoiE4VYzPKGvYSgF9CYdeE7huJK4DzCJR8YjqeG5HAw9ny1finn4K1AFKQQXDNUtM",
  "key13": "4CDamzixNKHAmCzu9TcCSaA3jqQE448c1bi3NG9DJ5nU9AwvAnsScPzkUpDV7xNqGmu68LcgGq64svKpr1x4z4d8",
  "key14": "cWjjsQLohJSPTNPTA1ZP1fD6iyG1wggzKnNEgJKPo1Hd1icgTR2aNXwZiH7gZr2u7fxtG2syovGHugY9eibiKHP",
  "key15": "2Qs8WpJqh3eczjAMQspghFqEQzveoGjk8Tk2odM9YrNAzebTTrAix2cLxSqQRVDc2SQ8W9euhBeHW13Lzhn5j3d5",
  "key16": "3GruA9DB2QjHdELCX4BdZhCh6ACgJZZj2qHRHKxPymg7wwWW3ZrrAXM28s3FnpdmGQHAgpufP8MhzryQtPfcE7Eb",
  "key17": "kET39Vo2ofm6DKaVcvrPaaTdDjzhTZGkrvdbfk164pxiGpLxnMsfLp4pMrNUVnz3XbvuPoFNVLsDYu4mYqwsmz3",
  "key18": "3wdR3aWGswnXkJxekhJFfbq7BCoMutA9mfzwVMBCUBYE9RBVH2phiHQ1E1Q8jbL6JSyLtuqrx6Q4oUkKsHgVdq33",
  "key19": "5QwtmaRoXfnPXjHDRboznQrnqwtDNioyuPLWfJbTdGBnqmw92C619F92qhhqPiS5dTW6HHXYeTWELNZa3cncfUCX",
  "key20": "4w2UKgTbLouAfMtpZ47XLria9TWC66DTcvxQ78S63JJEGeaj1spTABY81r6MXQj55bqeeFesasMzA2uvyPKoRmVj",
  "key21": "29pYQnCu99cGVApFMF2kJrVGkAMgmenNfnHeYfYfuPjBVFyFFWytj88HGDEPZ9HPmyd7Y7V2UWH6KpQipv9JEtVv",
  "key22": "dRNzW5ZJiMMLdoMvFj8keACf8VvDXTq71AnKF5KTjfEm1Ux2KmDezY9uURTadAxV9WjLn786G4KmKJtwS2XJmU6",
  "key23": "3ANjvwDSjAHYVF76KNBdJGuGpDa4i5ffkiHBgVepQ2vBTeJkCWyS1FJPpvdTRVBtxVHFt6UW7zWarwmwdjnZXbAF",
  "key24": "2qwZNWGKQZ4Q3bmZm85UFS6V5FwzR5bk9khFaNPHNwPqQUpDJ2a4KFFD6rBQygmgjnrAez4ZsxMRmDkBVEA1JCB",
  "key25": "4QHRg4LumJjciFYJ6ddNTs8jRtV2JbJbkX1zvnJSEf3UT4cF2RqdjYsHDAUx4s96qYDurQ2LAPLQNLdwjsxw3TSk",
  "key26": "aD4ofeoBk3dtW4SX4S8rd2pd3gA1991hsNQLxjaMCqJpiwZqxztFiKiTW9cXrSFkXDhGgA6CT6ZfLmaeSQdJdot",
  "key27": "4Lyq4W4xftvoGYydcW16kk9wJYLFB5kYpqMgfnKbd8PtbFZB5r4roJQZ7g7PANsb9StdTYSuYFsisSYT4Bvn1qMX",
  "key28": "SVKoccuuvPrmDrCrdmZeKC1YH6iUUddV6Qk8Np1r8zJNQ4UfPAWUkYMJaHxAwRaVe4AoDcmL8wgT7vLXc76kqTn",
  "key29": "Dy2Skya9M3BWRxBg799fm2qEQ4k377gV23B7m2h2YPjYnAVG6dExKUVXKp2m11SJG6yoh4ZGjtQJTcZRrW6zLWR",
  "key30": "5GtEVwgJvnfhaoYPo5Ykh7gmhVMp1dTRdoPNMzR18t6xSDSNd1HR5tXb8uMV3tnk2YNtnoH5bWzotf5g1szdBCfW"
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
