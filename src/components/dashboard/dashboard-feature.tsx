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
    "63RB8xvfiLhJnEYHrMhD7knf5b7XwajFG9qo4hZGcYWvRyGMW9p3KYUMhFUGombNPULL4kuBBXEubMRqPkTaZ8eV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37b4aC7xTj7gw3LmH5bTYskkVsWpzq47tVRgATRZZhZkVqhA9VYQHMDg9APx69qZ6ZDA2k5CeVBKzqH3QwPZ1HCR",
  "key1": "9Vk85mYRTrFd2bQWVH7RVsN5Kk283pBWJVdg2sBh1Y4Wacu4pg2y639tKT9jDNwpfmmu3YMDtABak3o54NV2XSR",
  "key2": "24pF8EK4CapgGyYexoZkJnF14gG6fm5X4dE6yJ7JQ4q5238toMmmsZwAVE1RptVtx6Ej7hcAvYXECe4cRZhVTkV1",
  "key3": "6KHycMsWxkgdfLtsNBAWzrS4oN6y7asTrhTJC1uw3E1E9AK23YGivbuyhWTDEKAgBAkteArHAqAfG5L7WGqSBqd",
  "key4": "4rkDhfoskppywEDHW19mgQvGBH4MarUk7npubRnrT6sFnUvyJmX41zJaSs1rCkuaYQgG9ScGSw3xsaoE7MXwDSr9",
  "key5": "5LgTjM94X36kYzUQtv1rWdiDjD9RQyPFYveYqaBS5jbjwoFdQ45ZRkj179ivUF9UdiX271dxbwdKEFeDGRaPML7E",
  "key6": "4VUnzL8nY1Yrqwm5bYcdui2qjzyPqQvXeo4P972p8QwhzypaDsxJciR5cZxXM2p26YKrBtNaa2eo5yzmtzBsQgHu",
  "key7": "DTynVh7xxXEk4EHS2FkKjEeeHnTysWxSEq5wNKN583HV4SrMcL7DBu6FX1dTKzsbqvj6nJNuF9k2HNPxvFDq1TX",
  "key8": "2kjMobkEMVP88nXyxDUhvkiu4U2CPvoi1f36Z8eEUWJkctj1muzcBKoLSxzRJY2MwopGahXaoz2eigKHVeNzv3cL",
  "key9": "3FSLqqeKAKXZr7Eknmc623as6mvmkWYCWYFch5DbFW9CqUt8X9XggHU6Rq4ZPtXKV1kXKRgqJzzMLcdi7cHtajpr",
  "key10": "4iFT6MtFrQUF9tBeWNktAxg42kZqESFkiTpCTkLgNiHnjfRiEjxw3QXfoABStBkxYTTrqE6HauLBgfaXHj3bLQiy",
  "key11": "3sEQuzcY2bWa1EbCv2fsmfGz7y4iAM8i33ANEw7ti4oh1VgRTjsjZncE8EmP1JJLTUnJjffkexKK857prxdSgots",
  "key12": "57VMCYLgo7CointZ7XEN25fJaEHnDEdzNC6Kvxdiw4JLS9B8vj9Cb7xAKpFzGkyeAy3DTi6pe6pUGjASvoY2Xcuv",
  "key13": "2qTdS98dr9MJi8NhbwGw62DC4zEA84dEw2mr6Gx7FdYZZhwFAxq6S11gVCd8vJmG62ZuHD6wjRNZWSgtks2ZwRzC",
  "key14": "5sqxgjnGA5jSWSG4RBZFPYVfSwWYnBSrvtLe4pPN9GY1sKYFDG9FYXVrxN8kaMMkaeZTGXKrFyxpj9id8614oaB5",
  "key15": "2tz3t1S7PESeCRTMRAaDoSfBX8v67g7Nzk8hg96rKej7LqaNohxj1iBrWrm9PcaknJD9Wu6DFZBLQYdffNwXWckc",
  "key16": "5dFArsaPQzDsZwaZDL1TGdXXLEMLkhdLst8zmnthB8qYcA9vF44PBeQ8Z39C6QdwXNJC4SnmDYRhe7hSEDovGEzv",
  "key17": "JVmezug2EvfJd8jmWzGY5tquu5AfjmsYUE4dL4bKaN7KGqma5TzEA6XG9EVKUpwmGTScA4VSyAFWp5vXvATHigu",
  "key18": "5eQMPj5vxGLD9a5tAdrspd5LrWZZWqDWMstfL8N641Mm2FjDBYsuEhA7yQjyEVJA2fASPYEyRzZjQUsqihDtQk3w",
  "key19": "5VxKMzKpvQrHStULVV7WTFkwFvf6eVTFTS6hPk3aGPyfVLKWmZ7LTVZPHFFBoAA5tkDNuNscXTBTdsqaVxyYbnkC",
  "key20": "65vntVXDck8VE12DY8HdYMhqxSzRpwn3bajitZNU7wkzFA3u8bjDk7sXfB9XvbsnDJE7gRSLpuUeD5durLDAQUgL",
  "key21": "5dkRp2FHWsZbJhu4Jy5ff8WjVA3ZFcQwLBK73xKR1kVfP8tY7tvvbKo38QZWiKFVwLeTGtBeYVxM2bU4rdQeGstS",
  "key22": "3zkisH8ea9rYDhpvuJL8zdCgHqyBCYNV34WputM8Dj33fr824yFYwRmXT4ozU4udezfvFd57Vb77Xq6Z5HTQSDvE",
  "key23": "5e24L5dKQ4X7sKRD2y66jcvRRfeNHic1aSJwtAo1iR4itwQEwtJqLGYUzRnvhg7yN6Xyvex7JBUqrRFSFomafBN9",
  "key24": "38MTgUVzbacsNw7dicHBCHLYqKFEwpX6TQa5ZWpi7zSf4dYRsGsQb7rCHFLetZ3ZBMWqSHitqRuwB7gC1L7JpRGu",
  "key25": "4LnSQP54CBXAVuNUFZeQFkdMxKHDb1BVACXzuWweten3mYZ1bULHv9jWQvRynUTKs6LvVtgcbAJGLxf7Mm6nUskC",
  "key26": "3pjsqw3EXpx9vGGbHS1gYyB2JsTuypk1is2nxTtjDjy22ZzeQG5tD4KTiLMqm1hFPSp5D8Rt6JZkBiVZphJsg4rk",
  "key27": "4EFtortR4zJ2eDXCewyUfNRGRvfSUUJKJ6zNjzMprvDGUAz3K435AvCPxS7N6bCDf1rjEPyiyXn3D1XjXggHP5rQ",
  "key28": "g5hxrQQx3aDDxS4TBgKMfvGPWgArcHCgMy6gL5zWNSoznbLiwgsCPP3Jp6W8zKp2dxHyqvzLGi69bctHsWdW2S5",
  "key29": "313fx2SdxPmVD2pTeQMbfqZAW2JGhkgFXouZ2uTvuuz2z6XrBSZ45ugedkX3KRuPNCDt7RYykBvyk4qhnNRi5c4N",
  "key30": "kLjs1uAbsGeAfm7aXYcWbQzAR3AncCKLiqSSv2qsaNv2Db4nD2qa81iuv2mcBKryzXrgJKD19ShWLjNkTC9UqtR",
  "key31": "2mexgk7E7qpEN5JH4fReVUx6qpxrMbfy61gkNGLFUknuMb713n6GWnekCmtKG1Kb8NZzcXmomDFG1Jdz8fuWsbWV",
  "key32": "2cbWfbbQ7T1d6te4rHEBaAr4X2kYWTtEp4PwMWckwTggzZwjdHTQvXPn3xKqCBJ6kTVTsAgkcfZSgJkzQ5Ykp69d",
  "key33": "w4Jr37LULHffbKibZnKa2XtmbgmdLvoWruaYbtX2xiM4hXPNYWyJ63pvyti8vrGCb2Su4n8r89o8mRzhXCAESa1",
  "key34": "5r9T3QkgzKwHxMPLpT7Rr9uy5oxa3udcuJexxrWnaKUm2ZsuyEVrNZsr84guQkT4eqabTJWHHbL7jdSG4TxEh3Hc",
  "key35": "4HkBVCKiTf3qXDwscMCsmm3YD5jF4FxF2aPRsGasgy8wcd4YZvK5ZmTuH8JhjqXNzPaTqF8yE51e2RuemKCuTB4d",
  "key36": "5djAekgkbP4nEAvw27zccUhfjhT4Bib4zL7Qfm7oUZb995RoVWAHTkzrPE3RGpipHmbQbMgbWgUUehGtCddDqmhs",
  "key37": "21dT18P8qnHB5LgTyvUgwUmW6n32t3pAzEW54p98ybZkiqi4habMsGHmwm8a424w1P9xXpuMTY8CKmbc5TPXwL5M",
  "key38": "2Mu2hdyJkUhua8dVk2RD7tbXfKbv8ekAo5CuFjg13L62kt8r1bRWha3fDuJqoJiwPTG8W4vUqX4ZXcDKoKvY3VsE",
  "key39": "44zcMQBRrizsQUC48QtsbCMjNwR4YsRNTR5ZoqBU6seLu8LKXZMh2caLapN5EWrEag1SzFCa4jsMu17pMPU8sCfm",
  "key40": "DhWBGWVAydaJYwoXYzSKpKfnax9wfUcMTzV5ZPL93ShKFrq66ZgbGByPHU4XofHxR6DrdfzWRa9pFWWzfn1cxUZ",
  "key41": "5Z9LNLfWktJYFYEeZatMJ9qFBifNKMmJ391XEPe5gRQsKkUkCfYUoNdBRmrutm9gqFzu2aEYNFzM7Jp9MoBruQH1",
  "key42": "2xZTzBgzBwboqjeHc68SBcwXbojdrAzjGAoEQiyCZPL87hT256YDwKbgnU1CCsix2QD8nEYPcQh2y3drJduiBYvH",
  "key43": "3uF7rSLD9WUtTCNpenkTP3T8ohAzGqqFrYh5DHVn88QQjVnDFnWSpcWgwDvY5xvygj6eiZF1SSD1i5n1RHspZvsg",
  "key44": "5dwthUFt9zNGTxbAAVnKPTNUMShBU5m6QB2UwCjcc6mgvedDprtrcaFKN89g1qYdRoJCmMwFH5kxvkttw7uFDL5Q"
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
