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
    "2QhcxwwCmWZhZBBedZFMWocr3PVitvQxPhU1pGBagjPfQ9bU1aABu7vecCtg9eRsro3s8EerQGhL3fk67nY2PqNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZFoASkkZKYH7H6gKxmF3mfPLYR6d17UjJ9PAy2sgpGHYQPcK6LkLrCtongr4QUv8AGb2vipHEAo5JU29mkJEAcz",
  "key1": "3yJY6Pz9U3zdn4YAh3uGCu345xTmW2nS5kw6s14JPQt5HPUEU9iRnEcqXQQabG5n4dJMQXz2ogCPPnGoDPvT8KfM",
  "key2": "55Suii8hyL6AY8tvY13iMszpnu1LyguUQ9D279sZ8EP3MmEHYxCxLgqdXTTrbAxdHvi8RRcty9HsSkuW2Fh4NWSc",
  "key3": "5Tm8kyhaih77Guhgz3aCvAYYjtE6cKHiTe5xYUc5A7SuKgkxz3WCErTE8BdCpNunLGCb45wkotQEL2xT3TeJARKV",
  "key4": "4uNBvwGGfqiwAFeGy5U8DtY1FVBPfoomKU9w1v9k1aJVwrpZW1hQDdxzn9qjxy1J3AEjBicAUZmtN4HMqdv4Msqz",
  "key5": "4pnUMz29yPpq3VXaNsKiBh25iBzLu6B82FxHVSQBKjsxMDAy14YT6GKDobpAJBd9YeJUERB66LqmimX28B7L8urW",
  "key6": "4mWFevuKzBM9FDQa8hD89mSFHbxPdhSEvWq2F2Sg6dn5FWnL6j8PNfqUAwCaLQeKzMpwJsgeGCUKQop3hwKnHYy1",
  "key7": "52EshdTxbU9f66VnrVoxiCZRRBoaGViqNLcsvfNVVhwUCe5TGLe4RCUTaxjGL2BF6zq4cU38AJtdEbpm9qJVoiCJ",
  "key8": "4hMxF1zchjc9KiuGAVK4jMtx9jASrzHdmcqEfxGQ7thtLcPGebejF2FmbW4roZ6tZTKeXJAoXFRrKmqE9CxzfHdq",
  "key9": "28qCcXjm8x4PksNtuNmnHv2tZYm5a8V4iHPxYkYuwut1gN3dkgGQeJZGydF7ExUPKPjVH6VtLnUoAzr4pDbduUym",
  "key10": "4KZdTryfXv1AyMs9DecpdtoxJDGueMf99KsVbDmYepLNjCFGwrm41KBHGX8WWyA7E4NPeWyTNmjUo1Mr61Q2Vz9a",
  "key11": "5MAyLkjpdRk1beKCbdVYPzPWQLuxJAiKQ3TLPUXuBb6LsUB7GbfA3s5MxZBwLbxy6uBEE53EP4CtPkvMLan2qyKN",
  "key12": "5WWbPRkHdVLEqHeq2oTWtasfMecnxVPVocXHfnjU5Bj4K97obZy46zQBVeYKwjLoxv8fCbJPTk74vAeYxJE8PU3e",
  "key13": "WuzE3MErQ3ncwQ5HzAcHfv644trxXSaoRXHM735muNBciPkFwgbXWiRdvguYvQn17o4RRMNbrJh75iQoHHLktsm",
  "key14": "433BXNMXdfJN7hBk8CVo2WkWUzXM1zXewHCFZhEaCczD7SYEbAXgkTKRpUqbb4gP3LnUYZom8vSAtmD5uEQsi5k8",
  "key15": "2HgQqdTaYJPvtxmNdNsX5xmrEPG5gpVQTgYDivh4yRbHDGkXdu9DMvzmFVuqnNMwo7ekbZipvAVWu8yr39Tp6SXN",
  "key16": "3mKJHBQLzuiw2E55NpDbjkfGqXTu22X3XqHetY5TmY9ebvwHDo2ywNeTMg96huttNQ4ACSDkfKMFSZRffhXAJyzh",
  "key17": "5WcZ8WZVaYbzQMY8NqwVWWHwTHYAF1PbUKX9eBGKaguGwjseEpT8PAU3VpiVwBuvURrr1dX7AGrVu8VYNYLuacBn",
  "key18": "2P8jQ8M7UwertSXYoC7Y8aw1WGRkeoDBDquFZQaAcSJq137GGX2bm4xYHRTWy5M9xnU6MTVnQZ1JBwMJ2m8hQmZZ",
  "key19": "5GF8caBvSoGBv6QNbGaAqoKmK1p9Fin2G8C6RXYjiEMbSeJKDmTuXHkRsRfM9p17kjU1DfyphoPLVP8JvoPsVwz6",
  "key20": "16GdQhwdU6VeuozuMvEwdRmmRbkMk96EgsrFJH1eyhXgFa19ajJtCVA3RV1qnfdBHcHtigAFGJLyk1w5f4RFow7",
  "key21": "2GUQgVuddFh5Y565Cp2SiuJ6kRHKfVyrWb4gNPaHd5oSJRjp1p7G4m5crmVPbwEau8nMuD8KquMbajwVGkSVL9SK",
  "key22": "3XjXaZwgCvchaNhknp54KEwAZ4pBZkbnj2ANiJFgfS1fnRZcC6dGgC2HAoi7UNNVQcnncqrCVhEDa2iTHEApzcUH",
  "key23": "jxYEnsPK99yhFGNCiiS72Ha9STzKmsiYCaGVcw7vGbXnWBNhjYMJaanLVTXz4F2z4dt5K2Th47gM2CQWnuzFnnk",
  "key24": "3bReHvaHHhDFfzVHrk36nzetJQiKSGhi3CJaDAHoZ3osx8j29PtKnwvZwKq3hCH6ZH8e5aGaeYw6eFvCEfy2rd4v",
  "key25": "PNp5LUavNnzDechT1ysb3nBoy9K1DKG6Cy2UtNB7GEUyPFhCBv18FagEoyLTECBBM6idiM1FHt2XkUtEK2Y6hoy",
  "key26": "4e3T53SNi6BNPzgzzShvdjM18RPyFYGiqF7apGy3xEXVz8dXcH5DakuEbjYJVaRJSsFMwucf4HSJmsVipQRKQSdG",
  "key27": "5JySep4RGyuvGtKpcH9xEnsuKUVuFcSpJK3DCNXc493gZRJDSkDuE8YqHNXKGEBWm9SDpXd4shFXa19MLBuq2dRh",
  "key28": "3EGedPcEb3fiEJgp7oRNPSGH3SR3gfzGKeZ86UJrGKFu1Mcx4aczpruToZYoYA5iEvRTJqZfva9TK4PM3vyFEZbJ",
  "key29": "5KDFAAYPKVdrpkwgMznNtLwcYronFsrxSRdUKLpaMmDMeWq5v2tor6oz4koxgBVnm3FhgfeTQrtH7Fd9UVRj12Ve",
  "key30": "2oRDAggezbgchaX1K21QGhq7BQY76CL8iG6dHa1TPkiEK1ZhqnR94WR3mgZa6RvwUQj8byJsnV9VL7RoeVLcZ4cz",
  "key31": "5a4VSiUFPNTwBFFr4Sk7MBxbKeVhr1f4zi2Tx7P1eXS7m6oSzX6kNuut24TDtfg7XkFXXtUJv2d7wJTxrmoeDgSD",
  "key32": "2HsND1RJKjAjiPDXQ981ye4yMJbQRStcZ43Qy43BgKywC9a8gQCKJCiGrBtthPAP9AsWRWmpy1TpHrqq49hPPTjd",
  "key33": "2dmBxPhBt9CnM5kcLqi17pgS4nPJhnf7WVnTfdiTENyrCUdYSpnF3vgmaJb4be2oK3T1Ni3p76fzXTYh4MQ6RnKu",
  "key34": "4E48zeywS8NbJSKgcHtUAhRpJariUTuVBmfY6bHt3YtdkJ5kKZUFc9V7SZmBsNA3cupeZuiEzxxRE7jL6FStVXQz",
  "key35": "zUN4ktWUKQEMtQhvW4pWwGAfpd2QSwXRE1u1BpBStffJBC6cTPtSsRuphyguCiQHCkiFoFYjttEz6UBoNcTrfug",
  "key36": "5HxfQtqDPLXZDADLPeLAGxkP2SAKj2v9sxuS8Vu86JBJ65HVVyb7bo2nBBFre7j32VukHNWvLYqK1T1z9usgYsiK",
  "key37": "2fjDuhtxg3h6AiF768Hn1RRHfm5vLcvAUqsa8UrHdabkKXTGCwYiwh2r6MGavcsDnnjVAv19nRG2bm9Snb67tPNo",
  "key38": "5FwRBb14fG8FFwG8syGSxwCHnT4sQXjKuFWi3f2DGsbE4WJtUvg2V5XBRAftDPzuNBsxBySkATEhXa8VUv2HHToC",
  "key39": "2niH7yDSgdCMRuDTWmT8w2BgjRfuC2UvXuqYinWoQeN5Kt4jfewe1zBuLvoDCYaY96fL8zykzr2ngNXs8tyjJmKp",
  "key40": "41ufLg69NjjL3mTC6o7ocdH8BcWRYFib3XeASTDp355YR4mLp4hNDbmYnHRoUUL9ZBFayRbmUr4sWR5qy8MULkmk"
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
