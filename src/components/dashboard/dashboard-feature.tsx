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
    "fsSLEnxN3MkDMzJNNzvmwBnw5kn3AxMMkyQEgWG4jT5ZLfS3ryctGRUDMUW73nUp1TXMAYUd3y64x2chgU32u2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYkuA3u7ebH7a68rbB2W8FceJi9MpsuGzea3uP6BzsAWGYYJPPhZwwzPvXJAkXGbZWJ97vf7paY7ZCXocdb7Z5s",
  "key1": "28SVmJ8u8EWbX7LC1hcf6XEk1WETfHBdMbCmRAUW2iMgcQWyJs3dhMK2LzEJU7mV5LhXD4cJSiHi9dePvAkNqmrA",
  "key2": "nSGZxtvBVTN9nRxUwz4P411fqUinpY96YLybAjJPUW28RwZEDFtSjh14DV6NFbXN7PcBXa8xzaNXyoVXsEWnuv1",
  "key3": "vYZxtFGzQC1z3sWtvexG8QfGMeJkqpjdJyFaVLagp8rQJVAG96A3BpW22eVUHGBH9yvTG96aonMh4VKfT4XCKFJ",
  "key4": "NaWMisELGLV3pYmfdEwd5WTFmWLsbMvRVNXxrHHVyyF7cCr4yp5jeSFo3jjT1MKXRPGDBsb9sgLvpESkQEyaiwv",
  "key5": "3fZjAYw4PmrZNQ6Pjx3xzUMzMX38eTqKeJMY4bTHsPniPUp5nnG9SaC947pXVkzrX1Uoovm8cRiYgZfaryiwexf7",
  "key6": "yWxmpWbyyomaXJP3i9CFBXQHrKDsQeAo4zTnaxtsFAY7CnKNupzFVjGGD5VY2rGCRDFN6sN4EoiN7L3tvSukMoy",
  "key7": "46kP46RqCSGtBukG53PBRXwwqPAJN5azvnhnbEDTgpXD58Zzcn7nHvfvb7ccVYKP6MDsRCPyq23s83NLEtoTQ5q1",
  "key8": "cn5vwpx8Qynu9aAW47gd7hu3XETsqatjwG88QcX7zipuqdDF6VXnn87uk7LBpDysQSQW2QiiUaciASdvSSRQYMW",
  "key9": "3Fnh884Ke3SUvGNbTtFdJ2WXNVK1rc4FdDfxe61Dxq7ZTta5YdKNTinYhZsKTVvr2YoyAWbPh7n8oxg1NpvoPwDr",
  "key10": "H6LLS23XsH7fagJbFdhAgVKvymdbAqjkwrM1oKcAAN4BKNKa19RJKfuwmm1mGXrTrou2wgqa4Q56gvxTJnDgmD8",
  "key11": "67Mcyu9Ni6S4UphgjekSKmeMf8eGqNFZwBtxEu3KCS5cCFJR5cZeAR4A4piaMf8gztcta7rcEeJxTASwyXfV5i21",
  "key12": "3zvio8U2XCpLfpTvkw8ArdD5muj3kmAB7fzMwKDDdpQcLRcbS3qyvshMZibjjWXQNTfcnC5nu7Ni71AaxRG9vvd7",
  "key13": "5K7r255GTsrSYNkUukaVqx9YQQzvM2YJXtvjGFt54P5c4DUqVsN8hifhhLzmQUKoZCyCF8UvWqeY8s15hY6xRZnE",
  "key14": "57H87GYhGNo8AdjCr4janWtiC1stRTTCzraH3qy7iFrkFHykkVJTzQdpDrxp3Vp4tDZPyfFG8cvJGtcviK3d5xmq",
  "key15": "2PfBwYJoXFhCnswmEVTnfw9norWuQDrssEGsvkaxNqegHSL4jkUZEze5Sody8Rk7aVwCssvyCeaq6Cf7xT6Sxkyg",
  "key16": "Vo9Y1qnDb7hShkgmuQFMKXEnzZiyEroH2ruPpqagq2PcQCps844VdpDD9gRKrUrSh5Xdtq7PWMTXqtTF4sP5sUr",
  "key17": "34md3TsMEY4VPft6FUB41jmnw9qAA9ifbjntifArSmXqZEFJE77VTHoYzFmybvMtUaag3hdj5J6xUkENNScPey6S",
  "key18": "4BR9NAess4Bh5mCyaEHak6TvAgptzxUxsaDvG3HjcjxXxzqMB5g4JTJWP1G9wTcpQwEupQhYjEtefUyRMhJR4D56",
  "key19": "tkQ9y9SPkR4Kvk76jE4oDxFpsb38kpR76UX6yYrxDxJECT7SkgLQEnZtr7xrLMQ7TQWnsi9e68b9nodrdUsEq91",
  "key20": "2dR2Pa5wsNkLwioGQBK7QKPQzZMbyVLrdAWm44mRZdcZ7TDeqx9hXgWjGpXk3YXmFG72gXKYfAxgprauqsNY899j",
  "key21": "428PVTSjFZ1D67tWhEmGzQVf9xvB6nAi98NFPdcLkxyxis1dqeUgtbMpZbQ8hsbBgB6YZsDbWi3DfNi5AhTyXAar",
  "key22": "2tXfAJa1bLWCwkANXk2x7bpV9Xav9o3BbqAUrfpzfck9SRf2qhB8yuV9VnFHYCq73NuG6NpgifCGycPcAasmaixz",
  "key23": "3ZX6nB8qRtn3hrWMXDnBgCGGGHyfvgebdAnQJ1d6m1z5yRvWmk2v7ns8MXBBRV5SAD2YCGiExwmgLFk1oHsWKWEj",
  "key24": "UuYpbGgx5vVHTmNbuvDKvGgXaTysVYqK1eZ8U7jnKJCJ5daGy9qc9NGqezDXsvNGaUni4rQGjC1bZdfKjTqfuYS",
  "key25": "22X4QhyERGcHqWZNR4cPPJa8suXDjyYDLVGBFj3Y5TmSacWWc3cJurwFoH86Dm3oUjtmCJGkWK3cvifiYgx3WZd4",
  "key26": "4WHvZkpKPHpwBA989CNCvPNdmcqywHdfV2axchN3gWoTtBxGq8s1D6o8nAR7QTtuTx7kxJwZvctojHenktcDRy7Y",
  "key27": "2v3ky66qJEnt244n9Uu5novMTKcTqtMvx91B6wZxaSLu8mZsqsmTi9BMBMVTgskXSVtH4ihs3etuWzzpSFmqUGw1",
  "key28": "2WR7RCPREofcsgfRsEV8NNR6FecYwT3J1Q6zGrooRpJSupLEvwWuu44UHj1z9b6v1fzEWyt8NJCV4AJieGHtc65o",
  "key29": "2eidph1iQa98cPmDNpJLbVgva84qux5mUCnHpEpZ6rxw7bd8C97kwjxR9kW6M2GNmWWdQaxkkWTnEeyRgkb9PzLE",
  "key30": "3aSnhWgy4VoZEofe6fDgBo2cTiuSUNYeV34i3pcWagwqDfBgF2ppr4R4JrBXGqJThnwxborUdTYVng1MRrAsBxz5",
  "key31": "2mPjiapicJR7hzoZYbyrQ6A7Ti8EjVA1w6AWFFLAyAVD7FczTExjQTF7gn8TBBpQiRLiZdi9gTwGZkdLdFx7oRkk",
  "key32": "4VEYLFShWSHknSrKZAjYoxZZE2b6E6eMrWh69QXprpZvcy2XQukSzrTy8AoK6Q738TMCHa6R5yeYVy1LCKT4Y3s4",
  "key33": "M4Rk6N8Ro8V3jHKYqsP53d7vQ9irq1QmXghPGPyi4JRFmbLCcnqrD95sgGKhnY4KA8YeNXR621iztedfCKGNA2u",
  "key34": "2dgXevQZYxo8ZnS2mcTQaNWnxNVAeiy17wvepi3Bq7YNpUU2E7X4QGmqkBnZMu1L1qZT2qvYVXxgDCcbAdE7WxhX",
  "key35": "2YYqMzjCYEHb6sWsd1X6P83QNwWwgqsBpojZXemivTewR9QaNezbsFFP8D9JHenEywtbHDpfV52Zq7CfPvhdKzEN",
  "key36": "34fwSK4wwZyvVpTmaCDYrjBNSxcuziPWm6umxxdbL8zrUALNQLwQdJ4pa4dDRJoFt9AMct8Uoz1c37h9EHhEZ3Bh",
  "key37": "ApkAytgjHDK2qft7r5L9RBmYNy3ESTwLLHdoEoao8rwVXNsRYuir1awXdyrHGTCvQzhg71KCzhXGnqomVeZCUe7",
  "key38": "4o9KQxQULz9y9TVbXQ3ydqNiNsHsrdiwtc5ZkUpGKTngMAVHzBGY1fVsRPX9ZXr9Wbzr4ZomPFT45wGkVCLCDbeB",
  "key39": "2bkY6Jf74eVc5pTTwt49em5Sqpj3nv4tpvrmNcN5Tpe5vm952dRf4srGP9F7JMPiJqJJwZHYL4VDhV77RGwTuq13",
  "key40": "2uqzwGyaVEphiNGSEqDdvvFoHp7VTir9EzCx7K28uSryLvxRSbKB3fcFzrK8BRyDaf7xqZZSHFWR5PzcPNjwurYz",
  "key41": "357ni14MrNUdt38DwbcKX2EjgGL1hdXcLLSEyo4Qf1S15cUzL3xngDCUy2HZ48wGgsqhPW536FA1p7T2hJ8yTEwU",
  "key42": "4VQMZWjy2n8TJWAmXQTZmw5rAAU26ddQd9yuCcRnwzihST3k4MWJdD22GAJiHxnf7q4hbmrjgJ6aog5ACptmwoyU",
  "key43": "5VzKrc7JTux2C1gvxTFcSA8CdTh6htoWw5PAw1CVhxTH6zHoyHu1GfUCz48ct1Yz9gLvSQP43XzkLEBgczSTMmtf",
  "key44": "RUMakqDGCU3CyJYWLHpUEDhnVYiL6JDJCEL9gvBRJDFGjyG3GhajxdpqdgM12cgtSyeuKR7Sh5LKkuzZHvTrx2X",
  "key45": "o8akGPmJyoqqhAV7ovfEsJorBYS64ajgmM4nMuZLnfvg1VVBpRKQLNTkafephyv9mhLGK8Po6E82arLbdUPVwyP",
  "key46": "2PJbwbymKWYRs7DkztryWorpxFcbKJhj6iDK45oaKTR3CE7k45twNBzhoLm6i4svgEkJPdRPro75Bg22gsHy3S9N",
  "key47": "tre68c4eF2HFbgQGo3pUcoa4brsSWRepfE7irZxeZiy2DRAKKywTfNhgVaoUinA75GqMYeEQcURPgF7p7pA2XLj",
  "key48": "4mzFM8tp8sjcXPQisDm3P6B5F6g779xS1VTqm6BGHfRgHfyrSqLnQ8jNRELGEzU62DfnGQVpQiJETRoYUZGHMXWY"
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
