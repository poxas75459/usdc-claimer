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
    "4VbAy52oqU2afSdQpydQjZRpviCoDugmabfrqvYgrW1zvsiUMa4RwG4uFyYUbcpqhNwQjNtGbcJ1f2NKgMCUPv1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YFL6d1zPMPPk65AVg7EGXF1p9nQ33uB6FqgJWEaYFQRLWezu96mUBuvsphdFZftVGxJy3uYLmnUrbdbvcCVzPd",
  "key1": "493pgj6ny2jYf7qtA5C55XGMrNXhHtsp43PbM5R4qnnHhpLSGBRaozNyMfcJK9EqZ96w6r7YaCG6xxEa4uGKsLy7",
  "key2": "UiYqKxFtPRaQ5JWBmFLiX3EWWZMWydtpwgzyA6tSP6QiMmhCDVJoBACiS599D9b7JFjmNFBeXZ4WvhNwgv6yZUh",
  "key3": "4hVpdAjDBPGrpV12N4t6MEX8F57br8dGN3NPuBiEKgxfZ3uaB3nJgLHuuqSmU5fzZVc7vGw2dfvfZXa62r3DMiEk",
  "key4": "28jYjTMyboCryTnPKKHe3E4ddKMx1zWr7W4qjHMYeYifo2vMMCL3oSdK8CgNN4FQLtqpgux6CSgjH4nXf13D1YBh",
  "key5": "3sYHUQte6YgJ52YRpT97bVieBRSUEmZ8PCnVmg2oELVkoeRbSfZMocQjBDc6aoN87HGnTRANwaxC7rHaPnW445mi",
  "key6": "62X3fz65cWQszb4nLqvpiyEm27rhUMVqtKXvEpYkgeSE9Hzkwb8zQXGzyWz7tPKd4uNtXG7dSK6KdRrBy9p6uSD9",
  "key7": "MHvJZrSGFpaarSReM6Ty5eC22cZvGo5jAU7jy12mzpMVkaGoJN4weuhtJUZBsA4noWxmZ3zr9k8vxPz1Vdun1Lq",
  "key8": "4C5ez9rbsDyAYRZVHp9vZmqUZh6jFYDb5M6sKjtdx3Q3Z4fksKLDxAmaRnWRXE5x3KhaJGaDneeEGJ7Ho1B47PPR",
  "key9": "5Hr2dMUrGcqtFa2jcdqwU4fnYdsYgj5bCzHJPGhJ67wMfZhiEmyAyA7fu9UEycjkGqMFLSrnuPz5MWKfHQYm5TGr",
  "key10": "4FBfVXfW3xA1kNHQqR9TSZe1HfC4BuqBCF7UCoU4AEKemVNYwTm4PWLKW9XocgZuoEg6fHFTB9QKk38aJD9qeSnd",
  "key11": "5LyUmSgceiXsSMedMmpCqXgdtWzbBJciHgEVsLxgZvE69HGpQ2wwfDWw5M1NWVwSoz5cCiyhXjPssvHvG9rg9GfH",
  "key12": "AksCzqWjBFbY9ce9oN7s8tx6EpM3zj5CnYinUeRBYk7VP1oiwtW1wBRX9owxE7yW2vJkWTb8EvNMoWbczW84jbv",
  "key13": "4QgXNbceCTBNPo3E4YJTzp1jC6K6Fr4mnJ1SEQJyfi5MYtEmML9XuWLacaYYp3F658NXPfP75wWcDy7iaE4S4Nb1",
  "key14": "4Y3jfCUYNs5KgQWdw3M6k3PztXrZPoczmyKJccX5uUGHFjhtieXxVTwWvbXKw2Ho1AFeiM7mtYAN5pDXPhuCNPpE",
  "key15": "2Kdc2ZhvqZPP7mmZMVvVuuMbQjitje4JJemNNEhWg2e8p4KJxSk5enoYhv7tuZUgyKjDKgsXh7R4WXMwwqcDsgEf",
  "key16": "53tRGop99SRgyRDDXsX3wa63ABexz5C48kzVuw9sZW4KaSEoWaPHuy5WHxiVwzQAqsePPs1yZzYiSSbBRYyDjMNC",
  "key17": "5py8CRV8sRCPmxHtwsL7xmdu1vAptfNaKtshz73oWj2qUk1mC854hBGpFh8Ed4bjHZ9EaZ1QnUXvJcZHBdWUrmHg",
  "key18": "5pnq5HrQxJrYRij9Rb4vAQunMeWAdGAH7MwE5K9PXec4rLFUfWjQPvaCS8ZR79SbqX8PQKyFAvdw57Nz3KjL1Cmr",
  "key19": "5NEzCmU7NiQdkqHhnqpnMD4tNu9kTqu8dP79aCmKtYw21S2UDadiR5ANdpwD5qsJpTxf2MRKFJzq8LMi2wERJkKr",
  "key20": "2RSP2MpkCqJQeg7MRKhkAZbxzJnb6o7c9YvFayZYSj8SfV1iU3PsqZLShdeNQTu2a2L77i3SRAko6T4A2ByYRRw2",
  "key21": "5tC3nEWe9iRMNBYq5QhKdJEFYq56HKzJJudZVwtk8b4wstBsBGF6ZjAo8bYXCyfK7356eHhv1G2RNcrPqXnUX99",
  "key22": "NXoRTVyYv4AuyuKgZe4MPVoEysmCMB27iSvgfVetBgfGA3A7h54yASPMEJGtd7z92dHfUEUZEG9VC9k9n2nSE2W",
  "key23": "aFY48zW5hTwrVzE6VJbT6SwwenEm6gV8NpkVbh8gZdJcQJrSbGfNEX76bemrqJiZ57iEEeW1PbBEHxUbbAsWzUX",
  "key24": "38R46tDWAjZzApEbhHiEbkmT1oGt4ngFm4F9ZjBy9xrhxaRh4nvoEzB5Rsth7srefphUjao4Nvr7Rve3XcwPcGw7",
  "key25": "A4iYdbKPjpPn9MgiraezBMQ5FUAUzc8bAhvzGZf8ioohxMsYthNubXHqz2BsXHTtNGoWUBLwcUALkHsPy3xUCSM",
  "key26": "2QTbM84AfuGbQaXGV6DSNiFebocEag2LuidF3WrkBkgietPK6E2vZYgLNieZ6xYEWwwBcYhgLnNXuTp5L1LGdz5w",
  "key27": "2NSufqvsWMNDgUKD6UocBzfquWMGarDDK3VrHeXZD79UhxFL6e1NdLxM1ydTFn7Zdt7iJ2zURB1PSBQWSg2z5oBJ",
  "key28": "5Kst6f3JfA4sTWXYrgxxV1RBkzzw5TirdoSCbrtsMfYUGTUhVPwv396xko8cdCd2D3bdxbTpCYgmGeYNYfFP6tSC",
  "key29": "4oW3iBThf1uwWEJFKUbnft7JQ5ZGq8Xb7AZ6fLALGm3neNBNV5kPseUHiTmWdeMAkqP3kVML1gkHNSsdzrtFtKvi",
  "key30": "2Yb3qvpUqokfRbcVXe44gmpSWMNQZB8ecTRsU8vCt511EkyRxqHyRVZHtrTJ6g3VUR97uuWXkDaMiJQtN23uKhQm",
  "key31": "2X2odNGMDACZhpPvtou2jUffgeJ6MDbqBwoyKNZsvoMod1BvUNjLKEF8svQkRY66wvKpztVEiXXVsNvhSjCH4BB2",
  "key32": "5NdqAUSZL3H5cM8Vx3TiECEBKHwi4HJyjQafDZmMDMRFSVcqcrWTyXQLQDqZCMwoZs5SsA38VLftXqpMfGnfgrQg",
  "key33": "432cyQrcyJ1ngReLaf8pWhuq9joANXD8N9gaba221diR6m39VZ5SywNQuQyobY9TonBQyBLzuES9VPn6W9G6Sdtz",
  "key34": "49ZiwsVZxmagLPmgCdij2x9MG9ruTMZPtHhAgVidEbTbd4U5xPm77WfHAUVpTpKyNVkBVPHowy8jc7xV3JKULwxP",
  "key35": "5m4iTngy4He749P9ANoyw4FhsvWAaCjDD2cFEcToqtVQxoQvGSdU82VWZoQCDvoDjT8bEY3fF21Wa3aaqFHFLNBG",
  "key36": "m27X7UaLT16rDQ9YksDX7sBmtH96Ww73shdGJAdyGRUS5CPQcNL1LiArsrKbKLSLP6yjZuLBjihyuKwyNycy4xQ",
  "key37": "3qRMkfWxNDFewwLohTHFe6rz9Z1t1WZTTxXRZKkRP4JC4B1t1kcs2HhzizLNKTL6VVx55scoGadafzdUe1qiWW6b",
  "key38": "3rhdb5pRRRK2DsbqTfT5EffZcPcatFtmdv8Nb9hNJ3KKxML31MXUuvtpty4LuyiPz9uPacWrwoLCoUGzA7DQZKL",
  "key39": "4LfZAufP4BYqexTcWVUUCFBfxvMisDVJt4RQ8TMvdjx4mr59XHbcH2NDgGBgCDHt96nDnec6wsrkzvZJX4fn5LxS",
  "key40": "4jt1LfnioqcLJb3k1FiALEqvGgLY87wgpPUgfhDHo7Mc8z91Tc8p24mcdX4n94bqqWQuetuw2sJE2YqxhgWNBNQt",
  "key41": "rVDSTLPKzswyZuNPg5B8WpKXfSHvyoZKVwvfF3TG5omMA1FLghPVV3iFop4iQfC6wPgabRWerSm1SNEvR1ZsCuc",
  "key42": "4J2uNsrCAcHjTS9qh8qdUpbSZNJ33rCdXKYtuHiS16kWtV8U9SzaNhezDKjFuxGmDRKkwxqX6fiArGhyvQ9ZzzpB",
  "key43": "2JWTvCdM3cjPDEwYnLQjAwTYbnhbKYCgz4hWGsyioarV9KS9SZWyxoasZDVsynuDRFLBghJJtbbFzcg9M2CaoyeD",
  "key44": "53wSf3DbqtvM3HwXWZNJ6Y1tjogEaiSQqJNrekxMBUcFB4KAjg1bBT5vjoyc5po3GmKKRGnkjnBBaTirEjvw9YLL",
  "key45": "5hSLmLh88ghmCXvYxqR9nGPN4gzvmqHRFyse8FJUxovZrtK8Ai3FDHDRCafCVbGTKKfo5aGVR27SQ3LsTdpDfUAr",
  "key46": "HPihAWchQFD14jhmneAx69orz8vGEgSZxXoWTUdL1wFF4GCP1ncBKCzicF2nEyi5MeLcdtzR7eNQxsEBAh3WHRs",
  "key47": "63puzNjoAuRpemX5aviyi8cL9Xs2KU1Lp3HNcCj91d4jGU7WvxWvDnFRmwHnjPNntbfGE8jvCJucMVn77Lc3A5Xo",
  "key48": "3MqtbskZ3jiyDue1PUPZJXEZmxuPJKVL7cJQx1cY22cfpx3cFvVePwHRVdD8zCYd9qY39PueU9t6v4jmkrB3GF2P"
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
