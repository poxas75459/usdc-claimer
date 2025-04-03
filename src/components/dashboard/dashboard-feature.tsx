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
    "2B7SYxTCTUK71mwVha5J3NJoZzmS5QXgTk9C4VvGswW8SPYV6PmuHgtsTLymjr49kvUcSMpSYctkM9jsg8iRJ8Ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCoYchCB4wATGhSnHqhZGvUoquNxhwktbxq9oCLdrpinhJ6hHSpHgVdM9YcGhCfyvB2fULJzowVvsF9Ff1UEBDa",
  "key1": "2bJ9s2MaktSoVNn89J7XGhB9FB72Pi4e7au16psJBeK4RnLz6CcLiPjm8W9zX9jZXWLiXJpK7UiU6qJd4rDU96t5",
  "key2": "5LtHoMUkCf33CjnMATVaiRz4wx1CqYHZW5brD5Ze8f3RbXdGyqefM5uChMjGpKsL1SPivt5txyCzHTZaYhefoD46",
  "key3": "3afvsynFNrJFJKNL29AGctvBDfBursHbD7HPMwy7Eo5W3jRK782pm2oruaUCVZpMk9RPB8BmhthJ4gmSFPGUb9Wq",
  "key4": "8AtvU6Wg6iAvscg6GWbCW2RA7NJNWGReQm7FGm8YJaVzTeVvqDkJGEtD1ub7qpFvPNfc1TiWg91WduUDf2xhB6U",
  "key5": "2Mecmev3pQP5NyaV3WCtMR9B3Tnz9Y3xJFYMpj8zEvS9ReUD4PE6o9zwBWQaREs9RdDGoZZbmyW8yD8FgKCb4gHr",
  "key6": "3mw3i71dKwrCiJVJEoZSpJgYn5wWfxeLuU1fRetetFHvjrw3oa5YUkPNAcerLeH6MX7HBG84CuT6JPWYXcLm8z2b",
  "key7": "5qhWN1nroevSNnFMZcjWRYcqt3BLErGD1xgekA2Crk29ANZmRtqvwiehANCtTyd5cqLveRp11FMbA4YaXwa9E7Gh",
  "key8": "3E9xNySXvkJD7TuULgXoNsKRLEb67JLLxJknYPNs63C3xbxXj3z8bv13dp4sfweiRpyxHnQ1sdNVqqiS2sq43awb",
  "key9": "2pVqrpegVcxxSN7CGgSz5GCRbZEdLL5JL5xNHQyinSNXravsJukYZEdV2AsLK3KS21FD5zvuDNtviYWp7MzmjuVP",
  "key10": "34xqwF9a3yLZxkvfr9EbouLBTV3QFNBB7Z8U87tYpeXMRUQopktZ75xTVbEcT7J73QGLSVJTHFjEFtPc5iGXBr9i",
  "key11": "4779QoPskDLvwSyusoZywtyPktcY6BFUc5CcU4KwmuDjbVLdjYNLh6XgLNyKda6BkWMcf1nzy61mYwr1UrqNTrem",
  "key12": "UZJQDfRfiKYzVgGTruL6LqrLb3eRDhMaqUGwKvt1XHw6oxvFm1soExgHgpNirTskoWq7G1Bb3t7aYyFx4rRtZ5P",
  "key13": "5mEAy4e22eCCw3LJJXpDJTP1dvm3ffex3xR3TkyGpmTHfbzi92X3KbnquYCotTx8J7R2cvnWpXEuyMavQWKx9Mbi",
  "key14": "39AAh7GN7axzpk5bAX76E7CCgK7SPikWwnk7oNFeJ7ojv4AveDuZrgZCqn5LcjTcWxYuS9CvTh4QW7e3YDsCo21K",
  "key15": "HvtuP5RxsbDqRxKgqBGM65bjbAecceq3TkV12T1ehyhR3ZK1v2mBJBkFyBJWWKZzjKbVPMzNPktZS3gRNATC5i6",
  "key16": "28Uhih3umpiLBrgMHqj8fZni4jd7oLWkQ6zaHUSxY6x9Ji86ywKX1HxjM8JxsUDignsAVM6kXFEXAoyLhXaonuCn",
  "key17": "4ryoybsHmsXgPPiFs3ZgnGbeHw8d4To5Pu9Uru1qgmQ6MtiAuw6kbdfpaMi6Cicmd3HACvyBTefC4pm3EFpA166w",
  "key18": "3iyUiDc4pPfgzoCYvmvgr4sgxKjtZNsEXuDxC4AYUQQXqupYjp1stBPMnedsK9QmkN9sarLscNcnvkPrVhs2XHSN",
  "key19": "2YBERL8y86TemPipADoNtKd3eDzcAKvEDeSWLFDX5nLmqTSnZiaUbt29u1mqARERoY4fW7K4HiXzftjH2vv7GFhA",
  "key20": "2ECYuQx2LpGQkdR1G2wDVGJxo9nhETbjZsVfHpcNoKaxCMdduXyH9wjXzTeWKg83HzLkVkWxjQVPHJKX5cUHNV4y",
  "key21": "4rnETtVhDT1WsndDk4v9GgwV1umkYSDnuMXmoxA9gCRykJcso6ckJDLbKEAtHFSfKsBeFDsPddosNeCs4iKHzzK2",
  "key22": "3o3CVj9Nh1Zq9aKCnMUkgMaQ3SVu1ueSNHNwFQfcECss94qAusZpXkuYCGhyvpYBoYyxhVR9ovQTjzvHmafouHdK",
  "key23": "3xcQLk2pJi2Bu8VB52768ani9zTopyhpWfPqu44EfHy5GfNLrUrJWzrtqy8QhCYcmaDKoQ5R4EBSnadC6wVNgJav",
  "key24": "4vEPGGkmEe1KYHhzDgwWG98vjSccdHKwB9suc74wk4ntkR39jvWEKvcgipBzctwrw64h18aF8x33yVbTuyMb5fxT",
  "key25": "2mVsBw3TcWNKPUTCA4xCzhgwTUKAMJeV8AGvjoh4VXh5DP9CNRS7CD2ptnKCE5ifcGHEKL3Qm6WzASbnueEKQrz9",
  "key26": "4SbWHLD1HwAap1BCefoBZvNtWJEoABnkGD9aqSTSA6AAEVc4z2PKfTXhgXNZgCaqsTBvvK9VaDaZYDmdazNZdMPy",
  "key27": "25EDX1ZUFcmdu8wd8iGMSt7m4h5abb55Jd3WzbiNUb2xCvmB9yfFYi6mYGjXFvppfrToBmXLWcE7PZEMewDpUjMp",
  "key28": "53ipLQxXUeGhjtYKvpQG2DWbZRwg4dQJSLnnyBfSpgcKPvkdZEh33NoPKiV8oa5stnmEpieS58FdfMSa14Temw4b",
  "key29": "2gxNpGMC8DQmgV5Usp36cYzZGkuJVHmHumYC1SthTDqaqLBpsxZxJsso7qbVvshwgM6axThhYpbwjijgxfhAakY1",
  "key30": "yHk7pJfzrSjamjtjbY3mCUY9XxwtDjrEy6CKmW8oeg1kdNsBECJQY32ohDvKeUEYZReSpDCyh8Dkm8bfj5MsQx9",
  "key31": "3zfzG8oLdTvfEJCB8Xmi4Ash2XFxT3Dc2Gfn94e13cK11V16h5wVZi8o7fTVrLhstJquZ2L5MG9FcLhfLog5gEMq",
  "key32": "5qWF26EFEYtBe4gUV2fiAALrrdqfppufwtMGhkdCptAy13UbHqgLgZLPhhbsMesfeCtYPu2xXPZadg3Md7GtMGEh",
  "key33": "3eRTyvgg26RQddESZ4CfW79XNtwfo4LkhNrabUCXtCaVLPCdvBn1vxgzC2k2P3tdzLYm25FgMDCn6nu4yr4mtvdZ",
  "key34": "Y5924G8afGJ12iqw4py5Cpdrwz87yH7Jz3dVFhmCfM1mGdvjJhA98b35swzKUv42kuGUZ82YEMqrRL57zScH1rs",
  "key35": "5KofciciNWi9i1x3tf7VSn69rWZ9JKN6HkMQnvi5S1xNBtzjjTeGHMmW3sro5qpFX521sGY3voq9gNYWDc22Xfk8",
  "key36": "4CvNDLGEf1GPkPH4ZBUukJ3pSnMP5qA8yKRqncJpFsUUNoqUcpmbxBAqGhKyPdjSwWRiJLxmrpypvPTmmck2ptKB",
  "key37": "64h2DDPeRtf4jZ3Jn6mU5jGsjgks9dXt3JwKV4oxupK1XnGf3KNJVHZGsvQLWYMRws7oHjziqrwtvTJw9pDHDqEV",
  "key38": "2M4p1wsnyZZkH1qVSzyaqcm7drQQT6TwEivbRzeixFEehXNEcnvBRhDMC3NaDyEVAoLrbaPcDkuL6LTbDkpBMYhM",
  "key39": "5q8E7RzGnErexXZ4YSG6Cs6hs9PNfto4RvLjNp3ZoePSiosFThxKDoArfoXSijBMaNVFMkTs4THWuuQUZaTaaGSS",
  "key40": "2udhqvo6rCcyRM2maYkgoGpurej8BaDd4mVQeg4J1pobfBg5VhoV18JJKwkPkeRDyAfZwtNYQm3ruXaFzqCFqUPq",
  "key41": "59teQzubxPauYMRNQr97qGgW5Azm477QQdYc35KSysLk9xfr46WdgPiQeTvuzWs36YniSpLC74JRCo1dLYapbtws",
  "key42": "rpGAFHRgVkYa1kkbNiDUwPMyqXgQmm1yo1XqLU3JWhPxqdrJ7tsr8g9WLUnz7ZuyDCAqYoDweckRQTKRsPaW7ad",
  "key43": "PkWNdNdDn76D1D212JVRyGck6Xc2N3tFoiFuiyUgZY4FmXtmPjz5cVYDPDh7oYJZPXCYcfkKYwavpD7XP7nLGnB",
  "key44": "J2zuL9Si7bqoNWr4Zi5cpVZsoFNY8frRz9d3haYXoftH5uAttutTMypkWEv3QiQL9YMMTLcGfKvuWWWohrdYPn3"
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
