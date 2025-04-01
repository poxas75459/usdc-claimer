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
    "8qoeJ4PncZ7S8NGpwRbgyiVsr9RU9d8P3P3kt2wJiBGHRjVCJmi18ZE6KoXUeZZDmKZSf1h1HgzJ7SjfzP6S7Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oyfdnAiCkUK6KsqCdRP1ssmNM8e7SSnrZsWJLmoqhkh7Pk7dSTQ2uybpeEbAVuXVrFm2MzY4aVhUEXzEHqFTafD",
  "key1": "yFvtifmb7BbgJrAof1s5Lwebm4e1uMkLr5sAL1GTbcUtKxyZYBtE6jPGMZs8EJ79DBkXrBBCr1eXvN2xoduYKMP",
  "key2": "kZ5VhYSDxKAUTgtP7WFeYs86hoQQfb8EJ6Vsnyu5e15uTSFng5JsWGkYwhCmwz6PnkepT79854jT1ynmKSvEDY7",
  "key3": "wXgQezdeSWqx2dRosEhm9w2FxU18K5SmraULAVtmm1SfUS4e9jv6ZTbDbj1V5a3fuMuJV8bzjfjrmixu6hUDh3Q",
  "key4": "2Pu8WtKqRWh316pVh8XmEJHqG1U64DUYwzbMdTEyUTcpum2UKizEBpwY9xS2cj1tjhDYdrVuZV5ZX2QGpLL4xRFq",
  "key5": "2HDoG77x4iY2Pyz3Tz9navw2Rpsypqs9BSEeVPXKB9ZbjWjQWVCmB2EAVKbdxsc2yaDdPPqax5vkPvQhGMCGp5vh",
  "key6": "2zieosUmdUcDzyv2R8X3Yyz1cM8iDBEzi3U5bMoTFqdBwoTntt9QUC3EKu5RBXg9p7CPAtKV3gHDXpwf9Dtwapo1",
  "key7": "2hUuU1US84fy7r14SsNifixUo55QvLaMSCL9nj9pyNjuDrMGHgxzCNfyGPgjhwq9aP52so34vDHrdkrXq1dVPfJk",
  "key8": "5EGQYjx41rAmd9xbxNBRy1MTbYfH8ZNFzFrx9r9Ut6XKkLbHAzyYRDX6baC6Guc5Cy4u4LcFq7mVEUhiWDaGRsWE",
  "key9": "4C318EJ1wnQpPyuWGMMzua1pRAZha9nhDq56ZwzuLRk3KAsn6BQAXHdWWRWJjuDRpCHisePoj1ZgKSTuZfKedwgx",
  "key10": "NzFnvuAazGxWqwGmaSza4Jwyj7GMgYtymGgMbzXiVit4yF1j7jsBhToE8BEpCxkXZobHxrDzznV4HxT1Nij6sxf",
  "key11": "64APnXBtccHXnrQWEEZS8yJHeEYKrX2kRtrM56iDc5TsSwn8NZ9jKCNMsDC9mFnZq5UysbMEB71aPHTCPmgJkKv9",
  "key12": "2Pw7YdqWbKLS3tMyMA9Yb3d4UDKnYeti6dqPbsFbjVpHzewkBnYkEy83aBg3rKx1DFTyCgmnfTw6KU321P6kmruQ",
  "key13": "42yXc836PNMJFx7h8zASwrX3rGr2Pp8qe31mUbf6TAp57PSJKubxLo8ZfxQKJhqKc4hBUEFENXPTW3iombCqUxkW",
  "key14": "4nEBjgrGWSyKiY9US6uWwa13Fi9njwGxmeMJjaJH99HpsACBm2oF9YT8LHhifYVUubbcvs6rfVceLEyWGC11smtG",
  "key15": "V9AfJVcJoKEdTFJvDE45KXCjF1e85yS7a1SPn2pDsNZx5DEn8ujQznomjbb18a8mXoSh48jAXEKDWFd586bipUq",
  "key16": "65YYxoM23hemWiJ7jMaxFFbJKF3yB7Aq9ay8jHxrHXJiU9ZFP1MzMYGw1EKeK7Uac5xMKYhXMqHhDEfiwT4hyF3w",
  "key17": "33b4T28RBJeLdoHUiQQ7BUEtrHw9nqn6DcbGQrmvTdyoxbwhv2k8B4CYg4UmKcju6984VP9KL2kYwawMpiR1cCJo",
  "key18": "ybpXrZ76DuXfX8FGZX16LqCEeWyFjRDzutoyssuvNWwVwpTKTncoPYgdPQ8JCwhCLigX6baUyzMHwUQYVSsNrRP",
  "key19": "kqAhRcUzkniHybaT6zqYbZXQrNH5cdBxt9qaWrhH92221qamiAZVD6ci7Q4Yxn9aviwbAw38gJnauk6HXZ8Qzcn",
  "key20": "4BDXQkDw1EbbLLjgTJdZ6x7bhAnf1AjBRXx34NownKFKL1zycnBbVXZZxhYtvx9iqDXYBr6oTvQrvqMWs1miSY9J",
  "key21": "4KJeRdH7xaFqPMW499TwvNg9vPV6BTYvRtCAZympz1weNWUhrjXtRRZm7LmigB4ikrjJ1sNUGxkxgWTmEXkatyMY",
  "key22": "33cdajD7jGfC63QMDxuog8xre5Etq85t9hduYT7WvTjm44p1fAEwz7C4G7powbjECKP78YAy6KarNAoRHqmbeeZ4",
  "key23": "3fAKhZSaKn7t85TaX7igLwCUUU3FnTkNouU9kpxNbwSdQaUiAGarv3UVcqTUpjBWUapUndrFByKh8EBhxvCaWgrD",
  "key24": "4rL6waZEbwfJdURr47LSKP7Abo42FhE33rru6nV646bbUssRMM8xChcw6rcCcF26BFR5fjHZpa7YjpWQB2gNc4o",
  "key25": "4WuHQXKuQEGgHZRRgHfp8N22gXSGMzdi4g9bVdvpsrSjY1mRdyw6N65oF7ZhjTWpsxXMCE8SLaboXGzKmLdxkSNr",
  "key26": "3Tnb7G3smYmkqX3KEh1R85pFMBfoKBYnQBf6rSM3avpq5bWG49DzXwP9ueFEu8c4ir2AWiieX1iuxcmDPjwfMZvn",
  "key27": "5NKPexCeWMFrA76zz7kU1fio5fFBB9xYyCPH3YXXR2jHghXT7sUV93UPipCXXKFJoXDUaUZjif2njuYVTTpLV7Bu",
  "key28": "2GE9HkXjmNgh4mNroe8HvuickFriVqqdfKL4CuJ1p5CfDiF9h8J86KSoN4UqaYABu8aNrKp1BDiEYK4fgmV6ztP",
  "key29": "3gHhfopCXZJff4ZRUqgs6oC1VLAPv11bdukg6VT78nquELc6bu86pob4vBfV23vJziJD39eAzq5h6i9VaWgXC3vx",
  "key30": "53jCdeiQDp7CC8aEdcGhAmD6muBV7pBoWxU3kQTcwVgaX9SzBFmDKRiya7U4K6vHCJMqXEgdn9TVKKmnvFkGzRqC",
  "key31": "4DWmGBMjBV35LRsmKHuYW8xhtzbsZe8T9fmhC4HS9RGcC71ygrWfQCWggsyaRBkso6HdbN6oGcJ3MoRUKiHK8Nc1",
  "key32": "44kt6yi3rUvgWzXFboUoUmtPyZsFD1ZSnzNotSbsGZcf6YxPDgcbhxxAftHPEATd5j5YZnyEvtMZ5tWHQdBw6cWB",
  "key33": "3poyNEB3dWRKhxffXz4Vr6eVWrzwKVjnuFaLLGNd3gHTnc8NTgHpbh2WhTZXiJJ5wP2FfztcLYYUBABxjuU61B5f",
  "key34": "4uhpcEhSEC1epvWnC2vH3iooRbJfQcBicphFsYhC6xFNSAKJvXzx9kUZbo5pWS6TkturZZJahusjhh7LF6jAHYfa",
  "key35": "24kLmMzeUADj1hCSUCe7wL9fnf3cPCcJZo4Hdt4abD7WVd5tsuyigbErVhwmZNzeWJUthTpwz19Rw9kFsMyKfxuj",
  "key36": "M5Sd6doQsfDeTLUuf4RDoggqeTSeuJWUNTYPhgF25dEWsTzTmfH9HXGtiPSBv4iLCsCPXtVargR54oUMhMBpsEc",
  "key37": "3sXGaJeBxLu5C1P2nTDUbQAasQJR38PZgauk4Qb9gTUCJLXLVWw6hEVuHtL7FkkZqf42rG3yq9xojoheXt4VHK7H",
  "key38": "2tb6ewFu97vf9Cia4qBGr7B1az6dYkkGahyUSTVpQr1kWszRv4ysU2oe8DpRBbcEvDRvNT96KMEbvDopujy1eg1R",
  "key39": "4W8Bq2cZxhRFV3gmSxeiJYzSDfQ4wi7zcX1H56VWQq9LpNV6QjDCxhqEXi9PnMSn9Q6JTWivzff6NUi8a4aFh4Xx",
  "key40": "4Av2fRe2DzMUpoT8Rr3qkaTX4721gHxzqZFqtib7k4gWU9WLNKn43S5RkWVM59KNt5VNzoiU8sLnbcLMCVrppUbv",
  "key41": "V4PcWo2xpsn5c7dTQCZktdsXndTKRL4cjtadnh6SbePVvK6MhUiaKyitEvYKe86KCN5G2yGkLUGkGGGmhQYYUo9",
  "key42": "4wtUUdKXwjsHmR2nyxMkKmpDR7TzmvD47iKuzcWXYhvUAG1Yz7HkGkVqZT7U2PTEMKFeuKuA54VSaLPs6pfjSC7B",
  "key43": "2uT3w7h5iUNAWGcNrDybD3xhMfx8X9MNfediq275RQYETE4XgFid4gFKeRTPqawfMNSWoXZSb6bMFxqUwrog9BCa"
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
