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
    "3z8aj2yp9XFZjWKde6S6T76WMCfE86zy8b7MuMqD9Q5h8t49ZhX1japdxQQTLGam6nF8qSqHapy9G8jWPGnBvsot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8jk1ppTWVCj62JuQTrJAG76Bkt87SD81UDn8WuJQSzDuxQn16NKUgVFvWcT6aQRcnp37ifAVcvvMKEnN1A8UUrh",
  "key1": "4w8jrno1bm6smrBFjuLzEAQVRjkix1f7arywtRVNHUsxrugCHWfWi8w2BF9mxM56vDEhbPKW9NQZrB5ny9jSWoQp",
  "key2": "b4LNrW6HM7aTstpnvsSsFdyAUzX9qLkrPh9sDUdFhg29ZwvMkFDH5MTmweNsjgjqkbtZn5hBXQ2bwPrnFVArs52",
  "key3": "3gjyBtHXsvjzKhH7Gkg8UrLc4KDNUTSUMqF4Csc3wHzCP6VQhoWoHTcDfJJtdhH43A9CG1y9PuMBhzBACrsyES6M",
  "key4": "2HDf3Tu5GTgoW1mhUvCxmkEhkzQQ19WBPtYRy67DKGZZfvPYbSKBTYhF3rxAX2a56JD22K4oLrd8ybZUBJPZXaf5",
  "key5": "2VLCwTDSUxKP5jm6AQA6umXPeccQbwfzg3qiZuCcgHxXtF3mt4RC9STACQRM25toM87uRd13knLrFKj3PrefpELG",
  "key6": "63cEodQ59rjTiYAqMj78PsR72aFFNS8JKbjnSA7qz6jt2xvjJMU4S3dQ5XoPyxCiECLpJ2Mc4AAwTpYVH86zz4sL",
  "key7": "rvTrgPs4VwHW8nGWW9jSEdnGmtyoGPd1KJuj6jVk9AgaLu56KqhnVQoF59xVq1ViwM2Tm2DvJ7YaeKhMDj6jDYY",
  "key8": "fQH5dSyVmkJw9oHgLGvkFa4kCyyt5XMpBD9GYYD9vN1jM5T714VEvd74vFrypV6DDHALHL4XyvyzHmJF7sDk88S",
  "key9": "3yuyKvjurTu2uD7LWfiXgJhHvMSPzdDTfJRf4CH6tiP2y19sxoLgrX2xfidkJreybd1HZC4upcQFFY12tP8ksoia",
  "key10": "2KADViBdZAuU7XJUjgW5wZvj374ZXSmVT38DhRdqCXr7oV3VxTvjrxKXV8gRo8Kdg5VDr7gEm4hxjiaSk85kS1m4",
  "key11": "4Lp7sV1YuBM12stCt2vDELoKFtRjwfiSnM4Ncox9E7zHaJeM4oA1sTU5shsSSXLPbT7agBzKUBm11z51vh3oXEiD",
  "key12": "3CXaz3srHGJEPydyuhS9sC96w6t9R9TbFdhQop2CcQZhEvwounGkC8dm1E3eNJyt1mrX6Q72UsYcfkzmi8PiGo2v",
  "key13": "2rR1tRKqKt4Y7viP7Fx5rG3ZCkdiQg4u9xnz3u7JuvRV5QSo8d4DpJ9YhQKYsfSw9XgA6wtWwE7Dhnpy8eqbSf2D",
  "key14": "2syZ2iuoExnvmMF3JkPUJPKQPqrqz5LEQQEaRigCJR77MFr4Pa8he3fwHE4vdDSrkbvudU4RNCfjt2y5agTnoWU2",
  "key15": "3D8S5u7Yajas3YBkcXNhQPd2kQy9yELqUnm7UxGxkyhSz3hRY1HJ8ebXx3FH7DQoQtppRwmaLZTpiYvwa2ma2sys",
  "key16": "23H3vYKfnRfPo1u6p7mAR5STFLdspjor5dBs2iNYzkc38agdcTNqL5VsM7q5v7qR8zXqYE1Rsi6AF5Tjjx337C2b",
  "key17": "5Z6MXpyejAuiBiXaTjiMYxuPkGfCeqgLMWHtQqcdbKJVcRxxsgbPYwtbZL57FUsNgz6ANSw4oiUvY84u8UBJVGwx",
  "key18": "5C8wy4ddBLHzduS4dFLrSC2nVRtwqLPUwHXBCZnVsotFSfbGsSjVFAu7QHdaDygDU7egUbGbE7146MKy5hqA6hXF",
  "key19": "pyDQD28eyPE6Dwzm4Xy7HVU9pQdsCPi2Yxtop1VGhFz2QzSLho4P79qVtnX6tZjv7xphfZW6a7o4LZ6BSPg2BYb",
  "key20": "23kaGwtiud7i6SRJXHPLDnh4QMYRDidvzaJSG1aG74o1imdLjEm9tcV9wNJ49xNzRm7D9q21Fukkj7QBL19ZCET6",
  "key21": "4tx6orYNCGaGcXjWy16v3GYyzTvCfoSNqjRbAsKzuSKCNDFsoBx1xFPmYR9Mum2nMaqbfzxkpoQwY3VKFw1Mdcwx",
  "key22": "VhXX5zjtX79DuBr7prc8azXRRUn9NseWkGciSV7WFFVkswNmjMAwCkrxC8K1gawGsnLeptwASJ7u8uDPxcygSis",
  "key23": "4T64c53NpRKGVaRcBp7tZjUnheBkBTXVvR9xh5HM8bQ22xyqEZRuME87v1ocMQYLy4RbwGxx5VS2JiPqD1j9Ffbf",
  "key24": "33RfeVmm1sBLpzTUYVtpL1MNdMKjTbXfzTRjX1M8KvuajoPfoXcHHqMfXeYHPQ1AUoDtug4BvcoBhKoee9ukQMv6",
  "key25": "3sQ7zZR5EpoM2yw2bnCRgzi2BiXEf19vXQfSMoPj5byEKF6aVTqhf2GZQt39A8GzmKsPxuEkMQmxd2jhDF6crxKF",
  "key26": "HEAkw7vYoAmcRRar39zibBZ5eSrEVwJk7WUMiWzzs97DUG5ZSgSyw2Edyr2wbxYtnfMbVDnAEGKF2r96s1Gp5f9",
  "key27": "22C15y6KYKjCHvVPuWcQS3wnMSdiTnBhcoNgk5phxLFL4QKJ7YJMwhe6FLboRy1MAVrnAUV1m4K2hytQp8VhCtXD",
  "key28": "48qJXf5V5P1qAwcNH9nFoFVV5tq4YBisA1Mq95Z6BQ6GsAQfCu8PyzZcky3RFAzABGPEXN42Fq5U1hZ7FMu64fo7",
  "key29": "5hyP6DeAHEzPoD3Q3ToLaymzv3Z1jh7WpmQKB6AGo3jZtCvTpVSJEzTfqUGyAtuEFKRQZtsqvLwyfBTuqRofjZT2",
  "key30": "4uorD4m1aJkk65TdE7ExHa6Uatf3c2StJqBcKCuzoVFSucaFzYDSvbj55JB4Bo4rdH1VWZ17Fe4any3k7Wx34hG8",
  "key31": "2K4vKCHjCsHZDcosYGB5SWjA3XBH3wvP4ykSmRYX7aSrycJWxRfQpe8fsdYHVeKYmZLVYxj7THKTQX7Cdczb1RCx",
  "key32": "31gY8iBF6r1FQkRGhYHq6345btfgwyr9D3GNV3rtm1JBzNMzDKpuRfBDMnaPJNEMftmJWxEHDhtuNzAmMqy4CqvD",
  "key33": "4eEyFcrM8QhZUeDKakt7T5HfSH58FLg6WNoJmGjJY19nYc5hHLeUrMypCYPWgv61wKrLuafKYYb582iPAaoxw4jY",
  "key34": "dVMujpgXrUgwmJXQZws6SmcbYor4CFvybHwp3hTyYRt5D4yNyB5US5vy2zJEXV1nDgDBMG9zmpdA3DxKp5vSKs7",
  "key35": "RjSAKmN6dPBENBh75YmHmjiFRA1WExXVNCrxhgxVLpgqPbgFFJeobzE5CU1L5HD2ngHK8czeAQNwkAe2AYX1U2b",
  "key36": "3DTQeL55MsnQzshyXErxU8RoGnjudoDKi1wXzQgMgMweqpVUtVXzxYNB9KT2i2BNzU44hL6VvQawKntvvrNTtiuT",
  "key37": "4MqcuDGje8DM7WFbmEVVoP9WuFkXVMFkq6DL7p2zTWUX7ByHx25KJcmZ1F7VCZZHmwmzXKkrjYEsZBsFUPqd597U",
  "key38": "4i3DbidPKvBVu8v9cT1pW4Hikju7rh5NpzUSaJDcwRLm1qWsSB3ajX8MnzZLoMBmJ2t44DBLpPffqkUyGUR7DwRy",
  "key39": "3884tFtwpYdxYmTfYCQmDHqYGCdww2JqkqUW67rhAqne9Z63iXP66paQ8SS34NkCaYMDPKpALErmCijq4ooAs7tW",
  "key40": "CBzjguy3jNxDYi7bTMhcRJbR5UPwP2dhcfqkJ4AZ5ar91VZS8K924dGU14iX6XZgYxNFamuZbstyTba18sUTeom",
  "key41": "3WvuLJ29m4qZpuDm1tuj1bLPh8Zffd5WVnJGVjjStFoF5oQu7nSUSAh9qmaQy218iD4sGGsfhv9KrbULdw3KspT1",
  "key42": "32ibrJ6qXX9FtowqKYMZ8ZxjRCtw74gfXwejWZ2gJqan1imCpWvEAx5abrJkvEPz5Xx5abRyARuMJqmvKsAU45k8",
  "key43": "3pLjEGp3sbA8F6AThKF2h2rnWgm2eMSNjfLcMcNkNUAKJWqpTpj4cB398Mmavnw8c58g1Lkt2cq7jmrYrKHckaWY",
  "key44": "5FdgZPWYqnyUTjKVs1tDGpJqy3fBgxZrbDKG3F5oATyrM8fmNkEAeiMcUfRvMeAyC981WxMjid8mM5TYvqGAgSV3",
  "key45": "43zt1Nx6YcidCtUS7fw9iHoqvp4RYp4FTxurVDtRKwABCfQ4He4sisaxuxU4gSSth78XfMZnYfBMz9kXqPupraf6",
  "key46": "3j7jNd8EbkDqpGLUZ51tjhGF7sQwgPBzrKXneAv18CT1pHNYukZr3dBobLQZ6iudsdFsBriyjPiGAwTPNEkU3TL1",
  "key47": "52AyC1WJ9KtRzfgGSSU2KhHDvdVQ8pySJhCzQV6GVjCMSDBu9TRgWHyua15zJnvDECWqMZ8uu1x5WoFrXYW53se8"
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
