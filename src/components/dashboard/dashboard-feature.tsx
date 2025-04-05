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
    "2im37TstD3Xp69dvsP87wQTTqgFuJ86Mt3x8aw6TC9zPRmL1kMiMQwAmdpFFbMwzuyr6FoVS9etarvJ833fcMrxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KHfCCtoC688gxCimmT8mMANGFtkshy9xzC6YXbB5N1KbQgEaanod2mRN7LbzNZyDRsgEDbUzRyU4H7xrujrNejP",
  "key1": "3o9aSYPUwm6Tqvz2SFrJ5bQbzKceAzPcpV2oHBbtTWG7MjgGvKCk8gLpRgu1nXkDhobyJtCDmi4GFQLx8AFtVVdb",
  "key2": "23zTPNxt5nrRjGGTxp9PMromJ8Wxn5jQcAnUefZiH5NYEpJHSZ3zD2uZtRPHJ96ZrCLzCdwthJ6FxbaZaF2Qmej9",
  "key3": "3RDV4hx5ZZ12PGvbxpFCbFP1zigTvropjzbA7Wb91vhcjNQzPHxfnWALpbQJ7PNfZBiSn8pzbuVLaKnFeRJURUCC",
  "key4": "4qtdceZv3acwB6PNR5pUUcfDxipXdBvs3bQnnnTNZGqf2po9Fb8FhCKwx3pdVVsFTPyyjZSBQtReQra1pBiAsXTh",
  "key5": "4G6bbMaYWSqqg47rQyqvkryesuypd3K5XZNbL3mgoMRaCSm659QZ8SdvmMi9oAFKNya1vV5d9ykwKbM7LW1sx9fN",
  "key6": "KQqXQfK5Sz9kizxTyaqcvF25k1uDJJPR32nun5WNVn8vZyCeUkYENhcnNoMCnDFBUNFKofg2jBEYHT9ttqU2rGv",
  "key7": "4BC3aZHb23FnM12LwC1PRxvsSyTBRSLoG2UifR8xJdmVyoeVcDKD7be2jzK7XcibfYgdknTi9RoAsaT2vKbVthhR",
  "key8": "hcP8y4NoBbw8NHG25p5t1bBoy5rHofmL1RXro1F4RYqvSgpJxXo3652HFqdSCCJGLpe1UhxAPQkFVudecyrA3oS",
  "key9": "99EppzKopT1CaLxjW9D2r7ieHyETDyJ3R6JVKsjdQ9DLs2i8tDJRegSZZ9hbWetaPLrqXKtizMn43u82rZ2sjk2",
  "key10": "4vd17Adqkj8bmfuy4bAp1rTum8Xe2r7wkrb6L4shcMDAs1XYacHGDf1Gf6YQtfbyhJ1kNFsrGEeGhP16Li98bYx2",
  "key11": "37jiQeGoRCNbNeMU9fVVm3AghjwKY6HdJ6QfVttDr11GsQu8gvsNe35TKj9uGD4xERt2BdeDMDJhdvFdmLFhSqnf",
  "key12": "3ndmJXLiw2weDZHf8RQHFieKpZxSMkefuSKzh5e864QVKEHBA8jJsR7GGSZb8hKeszyHkGRQFbWUb6ubfA87oicC",
  "key13": "2KzZCfooVrbcNHQqBxm1AoLRJcQ4eG3oMCkaHRMdbiapxh5SE5oBZCvzY6buWEGc9o55Pv18eMCsyDhzXzFtW6zV",
  "key14": "4iRcY4UTvYciKHrCs6RgVcdwWPV2fWaaXCV3sXmZ2b5Fyi71p6TsJtpRC6Pghtbo3LfBSbJSMmZzdep7uNBFZ57o",
  "key15": "KPqpocxRJ9qsrGksDdw7JF7MNoVhWxqoXPKLA5gmLnzE4DnN2sJuYLtB8oBQfMTH34e6Bk23SL62grWWKrCUh4h",
  "key16": "31Rc4XcMyv9cmLptAFL4B2zurV378aJA6A48LwAW3oge6zs1zHy3nPXiZqLKfdsbCDKeshaz9Xg55wEEju7mEbKG",
  "key17": "3z5zNadnqGQQyhnLRAM8Jt23nDxo7T3aLuRSpYDde1xT6iY1niVAFrmfm32EhXBrSyZGsJ7LhTedzEkAcB855SYQ",
  "key18": "6AXXmtCgi1r7DwzT3ChNaz3uJjSPqPNxkvH1yfi12PV2QzGx8wNH68YxTnh2k6ydN8A6PkjKG8VK4FUF61f33qx",
  "key19": "NM3QP3SceyxnPMrVUimV3Ag9jXT9yZPNAqEg34Wy3nQeXhn5ULFZXzFSDokh6hmUrqxm3SGRLFP3sVSsoFfMdFK",
  "key20": "5gpo5uyWTjXPxcmU4foMkm78yH36SmEvkqipeXEwuSVYAg8gicyf5Vc8Ppofun6mNyDdoURV7Xc6ocSKt6a4WY3r",
  "key21": "3x3wqh69ncHkSuZyPYMqGu2SgGbLGeLbW4DAFCrukMWVFaMQCuLe8nqWizkUoSPCT3kNpe8d9UzcdBG5UW64bkTy",
  "key22": "2Djafgmv1Bc9s1UdWexGwoKkAx5xxkHLH9Mrpr4JwCLfE3JmU8KhK5giLqxPRRibk4SkSLD7Axd8M1tzAoB7smj7",
  "key23": "44vW9nfYiYMuzMjRmxqXfQM1Nyz52x9PRZj7kmUSSZD2LDRihWxkFCizCNaFDLizi1BdC5wLYUFPpWTdDJDApNRc",
  "key24": "3RHeTSVw7dWo7iyPebQitiZCc8g4vL7tFJLtDECCiQfkdxiSb55ef69sWqocC84hz7MvZYEu6zMgBZxJ2eT5bLuw",
  "key25": "3ZRLujKYRtjVRM5NJn6FjqJ9YixXxAzuYkgMJyvkymSveipp3CyRUHBjtXkB4ZpZSecULT8gXiG2ZKkwPdZguiDs",
  "key26": "GHm5b3sGoFf7NbaZWcBeTEXPLiMRDpefEf35NzNeJfZEoBFQ9BeKzSsabuyTQv1JULXVkdfmYRppbkMFw8mWYFA",
  "key27": "3dMcahFosECdGjwbpgxpp47nexJw3CAdt5AhaQSzohiCnxDm4HXwCrZhmVk4kRYs8az3zBhMpdcr6bhcKDwk6xBu",
  "key28": "2VBxQwh1LHabmTm8axvsTrUhJLWP3vegmJpHD15e2gAMLs9UrZZvyESR5hBQ4q2HjbtXNnTcmdSZizPjiswwqXbj",
  "key29": "5SLYGBrfrNYUW3sd4UPjLcSZwUcAW868ckhwbdawFhkhwbGJBY26UsVFojcj69F2prDFFPF1pDnHwnEd4VTdH8AV",
  "key30": "4oxD3zhiLDicVMHrzawFJsoW4ewkABVXdNnp4reL8hUu1amEfDY4ajHykABKr2AYBdFN6Tm4pkZf7Pk1sgv4EE12",
  "key31": "4NBfi4VTwtJSWW5qEQ6YD5ZC8q9E9AoMYE3dJ75sHnaFb59M7coRHpE89iSsMtYfYwmxmS3HJnFj6z3URFhnMLir",
  "key32": "bYge1h3n9ztFMWa4SrVjSbYd4rS258Hga5xCZeDCPhQ2zYn2xA59exRDmJb7Nbm7sK93W2cmRunP1dTvtWTuhQY",
  "key33": "2STPHGUkFia5ASDxcLNp8c9z5W6YStiYrrTgjWmS7p4bBWy7LJBougzt4XvFpyyhkDHSncFqmk6tahDGQyiPy18B",
  "key34": "36qsufLnEBhGACBawtq9NRgfunFWWaEwFfazX2ovNnwPrqXtFaCmS393fo7GaZiqrs5x4KNAcuaPjMEsjzNzyw9x",
  "key35": "2uZj7MDik4SxQj6J5pzCXwPxG4U3aAZQTBbAMHyiNjAzGSS4gsJwQtvGSnjMLMH8HPzhrxRW5Ebgz7ZbcS925b2V",
  "key36": "2zErmVhAvJ5TkhHCaKE9nLkHrY36WikjYrWECWhJGWiByNfJnkAxaBfi3SaE1TdtpNVD2BXoCaW3wCtmWeFA1F3k",
  "key37": "fuCPa2PHTno7UQQRxF7oq3dJkvAngC8XVVHeifHnXGQ4qZuceTd8L3ySPgzQogNoMRbBoiQAe6h4x1xmWPgGCYj",
  "key38": "5x5Heku1XvgWaH8mGLzTn3RJitMiEktT5P9x8Y1vdyTQwBQdcLhg5rKoYDPPZLfbYebwdbXisB9W9sqruHNwU48S",
  "key39": "3Hw9KTv79BvW9LjZ1juJELuSoHGtXi5Wgq5mKQXNLTae6ufAt3TUu2sEdcvSAWmFCEeiWRfBx6bytx1NNPsFyYT2",
  "key40": "3YM94qpEXfihx2f4yZTgjiCkFmRhZ5eFDhMr3EbJ8rV6mQkdcESTAcdDuwvbwMPftujQvUoPhFdZYvfcw6skaNuH",
  "key41": "2w81gxApArh6zgLjz12HRPdJmetoEYkV9917eYbeJ7g3ow7ynrM1WXm3ipa4erqHa2voaqSZJATeQ2sLwWDJDrVS",
  "key42": "3ayXBtMTW2NunQyRSf4dhnNzJWUiRXDucoK787Einnein7NQ5MyC3wT94T22BXxHgmNFa38S5oN7oNjXRtWkk6he",
  "key43": "42o474U6LoE4Nn638bNK9D8dVTx4n6Rx3Jw6FZmw22ncey3shPGFyZ3Y47wnLvKUDpZTbYnygVNycc8zWsvdYkC9",
  "key44": "5USJNLBd9fGQwmaRTPSL7WUmJerY5md5if4kN9qyCmENrx7Xf4q6eNkh35mArmpgKNFXGzJnm9vWyJkY9Bz6QkSG",
  "key45": "5Wg9zpCKDK25B5AbiuovJJguYoCykjd5jD7czVgQdj9mQXFpaHDeBy68ScxKNLnqgkhJJ6aSW4pnhpc3ndJDUsiQ",
  "key46": "5via8ZpuuYsdC8zEdGmSPYZ851mGJGuVYsX1iDjwVPq4gDCNs9DACSeR2t3W7ijxTZnJK56j13hddvqh9JiWTUh5"
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
