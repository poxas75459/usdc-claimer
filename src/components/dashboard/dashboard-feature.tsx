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
    "4yvYc86HNzNUSmkQCzU1Cqo3u4jRcVVQHc5uBL2eV7WUXSEX9HcXfDqxSrmFgMiGnjGFBGgq9SNFVTWh7EsG6odq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258D6fqjT8raJC7ihhnmZoZmRay53FFUYEQKzDfFdPZotG32TQzdNPabqkAX2PXkUtJTPqzuqj8AmqGVdKzDER8z",
  "key1": "2QfZApoCMfytD9s7XvZbcGChsSWwHFAyMNDUktdXNRab2Hyv1iHEi8HdeuxpwFuQeqszftjbcn83r2KuLiCWoQxJ",
  "key2": "NsmM2UT7FRgmYZ78hE3i4MyPeJVRuyU5ZwqC17kndKVHYiPPSAot3gb69tKvb58WvMpVD3andhs3nknMxwV1UT9",
  "key3": "4fddS665fnupRfGign9AuNocwAdFDRvBKjaw2WWj7fSJvJ17LFfSaTch1Cg2BT97XMfo8AQXFGR5gNj3qT46ACmH",
  "key4": "5TepTTAyaRU2v3SmdNREjpfTivN7TvGt9uJZ8tyjJfdpJghanTVXgTjMeNzhcFAAp2zJvTZuBns43jiFwPhH17E5",
  "key5": "4n5HEsjnyqyt2aMzB7Tfkd8eQvn5Rt6cfMLJucxxwD41Kj8ZffSAArdy6qucijphudUipNjq3JyTseTJWz1cRFFr",
  "key6": "2rHxpwZtDEWxiFfSwJxTfDnNuvhmzwFct2SxZTJw4ArqRTzXahuttGNxm7rKevqM6hJN2dPwd7YAW6HT7AoEHFkY",
  "key7": "jR2NaQCojuV85DYXGyYHA6ozChkEYFBWDTU6QFhTeTBgHQUW1zem1F6X3gihjpy3DwS6iya5Y2ZZMdqo8qvyUnL",
  "key8": "3tW1rhHVVRdML3PUijAbJD6pnojkVW2Mgnp1VWKh4BikQNEVJ7Do9nuaar4MFmx9i8UN3niR9vaxQMCXazmPNdpB",
  "key9": "7YC9JVdt4LLi8gt1Pvh7q5jbLk1ECfHdVK5ArPCwwhVK5sfimuofqmj9NrnHiRMRwiAFLhR3fELevQf7vYd2NG4",
  "key10": "4ZzFnQisVoQ57d7gims3LRY5dbc4NdySSx5jTWU6CoXiKbSz1y9eQo7xjzKU8EWA6R5ZoB8oFe9tSvuUV7yVXDSR",
  "key11": "3vYrX3GoKA8inxtrW3281i2XE6k5PkJTxtCHWEjXASyp5hjG81jeKdxMCo942LS3F9VRJpGxj6PTfudRQfFBLtDP",
  "key12": "3wZtg6sk1XHsP4JfTArpSjKedTSsGKhx4XtGjyqEWYLso7EB17Lmp2S8nrLG2hUBLwje5jVHczGNxmPvXwHo3x54",
  "key13": "4vZoGKi9sfXmLT4fhsC8f1eGpneQdFFJwgcwdgG2yCKceetozRdZ3crdm4RSGykQeKMS7PzEjJYvBc3fpeUcBLt9",
  "key14": "3i6fdmLr7DejcU2vUyYRwv5Q8chLMLLaKykasdWWNmpDrm4oQDG3cciF4Cd85WrnSb2CokiinHeAQdAMGLfd6mJE",
  "key15": "3LjAjRWRY4d4aRvPj46Z94Pqtez2fuQW7K7a48TEtizTse7GTWcms8JQ88gFoWjdGcZ8oADvwQFufPrFNDRHgbQp",
  "key16": "4XNmRL2sT2AuSKHwBLbF7xv8xNnHm9Kk1H1RkyvQ8Ainn5xYmAyQMqXpi3s7pAQYBrDFWXV3XvpWnSEUVRsn9gQn",
  "key17": "2fBVutRDHe7aeRtp85StAYDxGCDnWhnYjEqu3bWpr5H3xZsHEjWJs352C3bGwpKbC1HBvmiFDzkQPqXG5v9K2wm2",
  "key18": "it67gMGvdic7NVGEykvtVidKteWVctfGmvz7U6eAH3JDAuSynAZrHvHbmrDScKrfcjDoSDRAbowcBnsh4Bc79Es",
  "key19": "bf7QTT1HhVwmmc7V6JjQ8wNywSuejML3sDzNFYKXUhrCaQStrX9DFHqdZkHzC1mK1Ei3uo9BJUoKoe7CVSmqqFH",
  "key20": "4B7nRsiz3cUkMsc56X5MGLWNyzexHNo9bfTFgh9tJhLr43DaSnQtVArRHKjpgjWRAWrcSME8zkbM9HfgRLQ4kjXd",
  "key21": "qPdgrAqKLJhWGNLDm5Gwjyn4FudegZpkYJyYc6i6V5vuyHNsR2ry55jZ84SZ5TtTKTMXsxP4Cj8Zh13DgtTb3KT",
  "key22": "24BwoxrcMavdTi7ktbRm1xggt2Y3ZAFohebsBoTjdsEoH6ZF6EgRkEUrSGQGnyc2CducYFZNFXdskvkmQ1aC5M6D",
  "key23": "ftL93NBhzf9KEnimZ4jcExC8z8koe3EmQHhCzmKEyqKugQMj3QRL19nHc7sHJaJvAUZZDJiNEMJXzu5ujxCfX8i",
  "key24": "5pdcWJuSFckDyMjv2VG7y9bFfS6Wme3CLHCwiQZhLyVdyzh1385jKwMjSxX7RYoArc9myMUxSYSd3vjXgReeP5Wo",
  "key25": "5aDbC6MxEmyYZGzNuU3CcgfCeeQGtNZhVtvj8b31vVyC2et9TsyeH7UktezsvyaqdVhLFVZpeh5A1MXhWAnQvHCy",
  "key26": "4Jp4qK5MroYUCMsz2g4KXa7WnraeDk2nzQUNU3Cxbkkv8o33WhW4At8bQ4aA4DcCEAFPiMnscW8BsGvD1PDT9j2L",
  "key27": "4PfGAyF1v2xuWbAH2NyKhkRCz3MCaSk2H1bXAqpx9Nbwf5dqjMQekonEJXDhJ1ovPvqCqM3qU3FhWR83VMyb1jCz",
  "key28": "2kK5tB6ArJQqYr6swBfS35B8tWiYpmayFLpv3pfta7Doh8JoimfZEpX1LxRXBBpUq75ZZUMKzZ1KM7brE54F26Di",
  "key29": "3pyZkTnwxTQF1EQuSECMhTwxj6dvtTq5C86vHbzeV3y9B9hfbXnngwmDqWo9sjpX7jCj7h8nFPvpavof5DT2EdRA",
  "key30": "5RWbmW4h6b619huvSryWdjJ8B87BrYQ5F4ZmMksDuxwNH8FozdH4pfQ8kBLugegbfKsCZFCWvdot9M2jrv6xNq1B",
  "key31": "3NDkmoAjgJTkTcwauCDFmfY2yaFxkJetJ6WaDe9zJT5jrM3VYYMP5AcdHXh8rHebGzdaCQ4Y4oef82vPxGwth4uo",
  "key32": "2u5i8wtjbyT4aqf1vo5Cuv4KuH3bcp86Y542PNkoK8tHVZ6V3BB8ZfhXuG3kWpcQW4F6KzFGz1SxGrd2hMJD3Zg7",
  "key33": "5ywPz5o8LN6Jy25yrYevNnqbLnw8KoaMSg87F83nWrrhS7mGRVFjTZ1sN3PraapvvvRDkRya155RGVg9vQzYBeTH",
  "key34": "BMFBeGYmBBWiJdsvh7uKz5qWXPh5Ad7C4nuR7t68V6PtdJmYNctQQH5dEEXVqAEPYbHKuAx4ysafu4cupUM2r34",
  "key35": "bc5fMp6e4ahfxYz26HRS5smf2k3rXd56M5V9DtU3ZgJkA4sRzo2N6rLMgRoSEw1D3XHqQ8sRFMZ587uBZxnHyQt",
  "key36": "3n951QotVGLKU5o9CyJjc81qciCUVhuqbFrYTU4fgEHdY5rbp7pHpZjczo7sk19gApKbtkBmsa6ohFYvkgVh2yGm",
  "key37": "3vcEX7TWeMhsD4r4k9ZhYUuw8939XFHkQnsK9bRVXL6pFoL9DPxLXmTKvWZ44AvrohTDGavTdt8r8Exw83puNe3D",
  "key38": "3XkN3uXjW3Rz9VvnsNYYgnb2zJP2yCmcJvcJF69AQBeRXPDdaEDsibKUii3RPez8z9skX5U2bCGmS9hrLDATXRC",
  "key39": "54AmjK9jAoDoZGd8HhsrJEordB8eFs3p85gWu8M3kCxurs8HGjfHw5A1o3gTxnMTR6yacsC47J3ukTcwoehtyNA5",
  "key40": "2r2YNJr3fUHMJvNvoGetwfY9YY1WtpWGhFDdUjwjTkQUvKjoZiKmDmJjiQ9REGHhTdvvismfub8SPfoy2ajjAJzz",
  "key41": "5VrZV7EQxBg9cQfJLjjwJVuo3kqPf1U8d7nMymGRysdd7fXGqgfvsuY69are7Ayo8pWifVgcQJFfRK9ThCbhiBei",
  "key42": "XDJc7rY7VQ9K8dApTh2oWd7D9qSiyihmPzH7DE6u2pRLQzm5V4GUEYAjAmxYUcs6SS5YDbijABsqrdv9tPoaPLj",
  "key43": "wdMSUMgQBrou3U6KasCKwz7Uv5HWH4JTamDFTs47AyBAvc4XB5VTKaJgdqmiJZZoVaHMDH2T3UXkCDSggf2ZZry",
  "key44": "3oUCaiJXWebgPHyGgkFnvpwEAxKjojgorzNdpsBu9UBWfmUk75t1fxFEYE9LXHtBhMF37YScd7DoTdSaXB3nmgUv"
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
