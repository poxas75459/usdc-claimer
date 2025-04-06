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
    "p7vwackTLR3dqHbNPX6HY8rrdF2HJpAMBSeze4VqHBr5omLKAKkhfZ1kW7gAxd18XdWD9ioafWsSdhRAn77tUGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scv5KSiTp64nXrA4JdBaeU5ptFYQfeFc7ue6WmU7VXkutBxhxCMkBvnP6baUdaTY5mLaco6UXN98TcFBAcRg3Uf",
  "key1": "ZLZGZWMFVtV2AxpTeeg3xNKQbvV8X1V8xwjL5Z4HCGxXwGJT1dztDk9RCLRenr8y39gQzh4S3oGXXNtL348Pivc",
  "key2": "32fooFaYcuuty95q352Ta3Atkh9yrePJe5chZ9pZxKybAiMGLYqWrJqe1zWgcLLa1v13bvwuFC867fwbx8Kiojbi",
  "key3": "5191SNMUztS2sNdxzaakveeDMWC3gX2ZMkwGxeZC9nuBeAxpt1FNh1mMn2A4pQAkJvCAwPCxpC8pjRW633KCn9ER",
  "key4": "3rRHP7iwwFusK38AGCfRq8StrxMoUzZKsCNWLRmMArKfsDeTzM3Vw5vZ94dsthSgTXQBVq3UXin2RgaPzhr2aeyw",
  "key5": "3c2nYDVYd4k3iomiBrpJ5ae5kKZEhNxrU8E3auJ5MtY63789aS2yL8TtuG2P7ZxSpqUbTXuPm3uGmcQEUoDxJS1K",
  "key6": "4oTcANEwTv2Hu4xKkJgj5ZVqdZrESaq7REh6fgsqgrEohDfZWvP5cYwrAReFkeq8GpFugoYwRWUYV3RVLb35v4uE",
  "key7": "egVCKV3ZaXbztAU1pM5aVGWcg599FVevk57teSeovmEaHo73cpnSLRGQRKYtpjhm6RwmDuyEm6RGN1Pk7doPDXt",
  "key8": "5Q3c7MR2MD6R6PY2QUiHvaBfVXJ48bd1oBpW5gemsu7kW8TaYeHdusuPjBtUSKTU7D71mebuMtpChLj7MdFuKNiE",
  "key9": "2uCdhz6tBLEwJWrjUeKtbGhWRZ1BVjr4mKEvjyPvryEEWGcaspVUMV3Ln4PJkDrnpUwKR54rxvh8H9XJpZEozYGY",
  "key10": "4wDAK8hWmKZ4zdkFSuMT64mHkxWDDbMv1dg2FXY8dP4UVwjuDeZ2pRPnrdourkXvB4u58NvMNkjbe7ZnZs2cro4W",
  "key11": "415EXM5hB3L7whDRio6gAbJKsDRE3tQFhdxjA3hSSfWdopox9fPgKeNaVBzqZqXXrXcuxPmeoNYrciX6pAsgfrP6",
  "key12": "HfnUcETCwEgvqvGwiEuK96kgCT4EdoZAynf1XGtjdrzuW5j1K1mZ4q8vo13kGVRCAf7HiJoW8Kq9KSzLivq4haf",
  "key13": "39eBdBbSdXNq9H433KjTkVGMMR6WwFcWUbPFfbYDFwrkFGrZhfbuUdJrQGtRvyVexX5iVRoCfcZQvifGnHpLdP9G",
  "key14": "4FTYVRmLNX6gs8TbgEi8fR3cLdPYGydgtgi3d7nZxBKouv3xaC2RN2MMHXRG2oaxxn2RLeJsL3sBbCpmY5Ae7Rmv",
  "key15": "2eZUyvqXF9mqPe2K64iM2HDrPETwBvppp5sgSFX1FC8QSocs4XcfXsr4vgqqWnq2AW86YbEnCPHtwTZ6JB6JRG5U",
  "key16": "5wJLuHYTzmttBBFynB5kGyKrigfXimEv15ATQSwxfYDypAzQSDzJyY4DbS3iMmHzAHk9GLQBLoWwc8MxuaUBnoNR",
  "key17": "3E9Ar6NC9nK8ZhLYDXPzGEjcLqFFPmoWXeNDHTdhNftc9tsY9mmgebHFUTBTRdPurcRHUmZVu6Srj7qpyjrzbtr4",
  "key18": "5M3RS3zLRLn8Z24NQ8ucf9AHBm6juZwS4ZksYmiJLidP8NYWJ3Qn1U2kLdstYVY4nXTnWwXFTbV7ctVXqGpB2d3A",
  "key19": "5pJnrcQXs9C95aq2aAD8mkmEerp9eDv6B4faHX1m4ZgvNE7kwxGuGCPfMiPjaX6T9VdnXig56gcuv2rC399Lpf97",
  "key20": "217KcbpTcbhyH3TrN9EM9xC6hyR8gBCVghJQKMqnxbf694a7TMd9RToM8oejfpQVVymnZiZhkfSDrBVYVT2i21Yc",
  "key21": "2JwqrrBTgNgyD1BM99yVuXJEm12avTKEDQQ8CieKMWqMSBasxMPruT95HLL28osdp5iDbjo4aihjJSB7ityBftQG",
  "key22": "4KCSq97rj5F6Hc1fJzhnZeQvQR6gQSP9mScyZE83XzgWvgTveVGYfwhRh4jS6RBkEEghdNYTxSmwwt1Wb1kCeVMZ",
  "key23": "28DGhwgWQ2cTD7Cpq61iUZWhvCVWjDBvhK5XRPbEemNqp8wjvF6paYpkMiNaJAy9gsDNPozQjcN8p3YFJXeMCScm",
  "key24": "3nzjGVshD8WSruUcoEBi5EoYL7wqgtzUNdDXAF3NTr811RrajXaCaPsQRF5iDYtAX9pqhK9wE7mJtsuAQx1Tqk57",
  "key25": "4TakpDgQK3ppCRVzJfFcfuhpf8NfpYCNxzrceMvymVmcWUXNLeMVx49UNe9EUabsL76tWkfyVJgsufnw8DDdybQw",
  "key26": "2cs8u5tdoTMMyew6JdSxYC4YzzNC4r7ZhAAyrkNYkP6DZSY7YPbs8hVTiyQXcAdB8H5YEBHPnb81LtgshDk3f8C6",
  "key27": "2r2YVgstcqF37AShFGUfeLP8XyCxNrocyXgTtsgBLVQ6PsgzVFfnzjsrzF7WRTc3NrDLzF6JY89T1iru6K5a7vJR",
  "key28": "7LCkCtEQrou1ZXFkuxUUpUPQ8Bxt1vddQM4AQXBU2ef76nJXHNJKv6sAzuc4WFx3yyuhRUgFW4peveuiJXXAAvF",
  "key29": "kiM7vrPZrNnEzwB9ewWAdSJZN7uJ5ETPWWwtnuZ3mTdHhrMxoc9fZH7rgmdofYYBGto2N3rvjAZxPmdvgCuXYL3",
  "key30": "46AV6UbWiZ9TKj3xVCwCvxdT5r69MAJYtHBNKfEpdY1NJiMNvFMyAAsbgcZ7hNkZqKmaWxYY5AmAPgKrneADCHu2",
  "key31": "xg4y7vLwnDEEPiJPfDLbMLVn1XKdo18dkZ8xJXvr1ajDNRtFBkTfwNX4GUTtjGMJo1vLoee6hMUEhNyRjm5d4CZ",
  "key32": "jYfHzAosmQeL67oQVvDuoxtA6oMD7YfbpqRbyuJSa7upnsNC6SHF4XrYXh9BoXamrgmzvbBRcqN3hbseXy5wM2Q",
  "key33": "GbAny9k8j5nefcZDuyF3syrqAFbMNQydWiKAeubZmBEf4aejfQqow99W15aupJe9BbUW1FQWw7FqajZJQ8fXGpu",
  "key34": "u5MWg4BWifevAvbM2JUvn7z1chNQnhztNcjzdRQbVAewmbR1qfmJ5KhzEMrNyzB1pksNcEPXmBn2QkHAVfKjTjr",
  "key35": "5HnfmMrNQuRiLLvosdrQXhMJzXzaRrwnYNfLTMyr1PhH3czk7DnJt5wXh2edSh3N2eTWsuaWQxqKUTK5BZpPezAm",
  "key36": "5tvnqU69AYJv21miy9oBtQp3phm32XPEGJbncwFtK7f1yM12GxxasLmxk4u33oEAuPGkHyUq4Spt1QLrocP7v381",
  "key37": "3YGR2FkpNKcJvoEbPBhEuHLbdGtphzzPHhLCJoe7QnWS3Vwtur9raZJ4vaUNdBckhaALhKB9mUbEoVzxxFZh4ahS",
  "key38": "4GohZMSG2sFfhgzTPDZwCQoY5RhkzEvisVUqndid1iAZhBmb5bntzZZtm7NZrkRQNjR8KvU7qGMaEDofgCW1umCc",
  "key39": "x2o5JyeRmnZwjAbYdEQo5rthU3snp2uqdkhSEZGFj6cGXviKuuCo58SxweRTy5HfqpcCzt1SDHRMfeEaYcmozEm",
  "key40": "3WZXKkMQd4gNvaT2PG9mZ4qtBcEWhrawwS86q2mTqBivDoq9MYKKspvrU96fT2YpMDxSQnJh1GbdC9Eoag1bCQCP",
  "key41": "4DP3WZYrFnuFsgfQ5AXDpgJi4z5V9sceVNvPnGgjp1WsYotpmyqYqEwxSujui1KKGEmHGytE8anL5AD6HfCVfNst",
  "key42": "2pK6TG75VXKz65kfaTm69HGBPw5NUAgEPLt8Fp6qmioDQLs4Q1B6vstdgpSqqK57XNXU36P9c5a82PU2BQ5K1dQ4",
  "key43": "3mK7vBHPBi7SVhu9xQJjmJJzA2hzgKRhkt1dStVGgw7BmP1tta2qyd23DmGvHDSi1hGz5vXVCqKaiTFqzD5q9pbG",
  "key44": "5itCyWggXHuXvGZK86kG5yMkDAgVzLHpPbknTaJStbDTxTqkpeScUMpqp1m2Hjq1cMyqLoCXxSMJbXtapQzzCwPm"
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
