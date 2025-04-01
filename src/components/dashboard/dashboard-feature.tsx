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
    "QVfYkH7ytyn2wj5HvcVDWFpbYFhNusw3fGuz8vJPJKqiuPvnNBDChk7iBDjDXfU5kxopNb8rnofL1vs9UivajHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKki8aTntzYKymKr6a93kwN4C3wMQw8PNU3dFm5f8aXmwbPj6URwS1yx3NHwn3gYCE81BhuZHmZTit3WyyqicWs",
  "key1": "6dcgxUy8SsPMvdtpknFZGKHLaFaUseirwPAjAEqMmMZrcKfzgmdg9ShXFK9wVA6t6vUGAYc8GjKTXv3qooxjFZr",
  "key2": "2xa3jR1YpjCdgqpYb3YLuT2GLvMw75Y7QT4gCjc5wA4dMrecYcVsHczD3cZUk4TJXafHX3H1eaRugXSTKhY76MMe",
  "key3": "3FcgpEoXAvMmnG9UDJdChNXAtKr5LNsNazasTZTwyhLujvrKsdPCht2ccEVA7yVxCw8d7bxy3E9Gj6GruZuURfbX",
  "key4": "2xV6YhZuC7hPxUsXiswNAjTKVc8jZtBEzmcERSKy7T8ksuWgGRz3AWccHQ5pwZn8neBe9NaeNqoM2fgGJq1UuEHA",
  "key5": "3cn1CK5JQzqt2CA3A6zvR9LnMap2zrKvo9FeTBiCzwjYK4d543tbaoYF79rMnh3TXPX2oXLhimkmKZpyQNntabqT",
  "key6": "4rPSeP4XL8qbhtPnfK4VcatgytfBaERNFf5jZaZn8ZDPv513ox5xGPAskg3mz2HRoMSVNc31GBqVq8GGEit4gmxG",
  "key7": "34f1RUeD1iCdgi589q37jE7QsX7sSKQteshSF5tmLmaNGsrkUwPLcuh8fMb73smFzB4c3g7pYrDsbWHx6qhfr5Cr",
  "key8": "3v44ZCUFSf1R59XH4zoUouS29MEJpqDZ5QTwchJezW6vMQ9oA9swdx9PxERmM4Dj8DiNV19Qxo6vHpxYxevcAGST",
  "key9": "5zYusFEnFLrdGvi3Pfh48J7H4s4ew3jNNtRhsLwbEQxMnDeNMLqfgm5xWstGhLVQDGCCzgbasQnVnEMZtSxQowra",
  "key10": "2Tqz6FAbH4QjirvMMFk27wyxHQq4KC8cxmHnXK8SP2rg5yRraKstcbghp7d5XjJCgBQa5z22v81NPXbgRD6Eeo3e",
  "key11": "5q2BxSB5GGAeJLKEr1gDvBopZXtNcsxXD7GeFrHQ8jjcvh9gcWGMWcZS2eCrrwGRELWisKp36Kddy1i3zrmpt77z",
  "key12": "DZyxUzNjAe8WAu9GuHNS9RJAs2MfeamDyBHrVffdKE6DW2DwyNx5DT3KHxFmDLpaPJkMQJZCcndN2kPZybRqLJc",
  "key13": "4hec7ZX3zGnGCuJ1v6zfywgcA1HJDbDMrvyN27hxEyW3PTXDG1BAmquqzkVgZcDdop7tn5CLRkjSgM3yFq823T2Z",
  "key14": "24jey9i6iEuJUJuQnceqXJAwq3D4Hxotoktnimb5RaSM1ytLeGU3BQtgjccUHGYsCkFDpi9hzDjmreXh6fnsmFfM",
  "key15": "4EyTvBmu9bZDqDFUett54wB22ekjiB1ZB8vFiyZKc8FZrG3eAnjDHSUJy4X8BaRK7qBkK3Y1MbbEoUJy9HSerf13",
  "key16": "4kYXCXZQpEU2Cw8DpP1ubs4BNYdQqV5sGmyQ714s5YHp5XByzxMa9q4VdBh5hTaUyscVJhBikuUuLEZkgGcQbRDB",
  "key17": "2NVw3j9u94hzzfkeCZmwqbzaQ8jmc9eTCDc7Xz5sA3m3tiHAvcqm3rhVK7gmwT4nwmeWM3WUCxvGQBNfyXu4sZkj",
  "key18": "2SuyPnYwdsdm7f9NEL17xqeX5bXZVhdLQbUMK7Xp9it2d5SvMQJXc9eS1TVK5hBBM4R8z4h3Xr5wPW3tr3azZySf",
  "key19": "2rUCMDizjrWbJkyfkZ7BR5xQuymeGmahWKXMMvHLBtQqKSPqqFtpUAEx9oaydnXHfzBbPyMy2M4TSjY3NhLYdTtV",
  "key20": "2TD2Vcv4Ki2H8NcM6z9HV1Skvrc4VBJFiscwGbxUg3FduTASmpBdvMvTrA9M3vwbKfFx7GPoFUhN9pcXQ2JNzyub",
  "key21": "3zeeEsLgcXdsifZ4v9AD5wdajJwDMbxfk8u2YVzvccG6qDkbA3t2sUZAN4oeageuSdtqa63iQSow39MQkzUeaekr",
  "key22": "5AA63uu6LymDpw1PxDYAbM7PNPzLeXf7ugAjHE6Y7Cb3iZNzG3LTQqWAFnbC9WiabTgQdFeUqJRtDtwEPpdW4bdw",
  "key23": "Sft8fTxAswLrKShjL9PRLjh3jih29yP3kahbZFAfoioXTfk5DwfHgrw2GTi89mZm6ZevdJdncCH1wypSudPLGNj",
  "key24": "at5sAsAHZaQowKGKrFRA74hvi1AV1i7mEaUrfz5kihiKXBAyfdAq8JDm8sXjpcjDJMVqvaFMkRjqSX1fh21gGAP",
  "key25": "2AKmhAtc9mCiCLV7AAtzWCivLpwLiJGUf3Ye2CUX8R59r86vyGzp1ufeJpto16y5iQDEbfZw3AwXFVv2P92XBXTc",
  "key26": "5Cuq3CfpvxidLDWYrCaGiCK5SgsPKae2LwfLyEZ8E9gZ62iQGCf4h1Mtzt9xJyjnZF2i6Mmr9H3xxf4GJwgMzhke",
  "key27": "SkYXEBBC4JuzaKhQphVou7MC12iKbht2mzeYW8cnFuY8WHLhtGJyTdpqPeWFPNwseCjXP7S1yRf3HWBcqzWMfMU",
  "key28": "55TnrP5ggHyUDUiHCEpFnsQWyAMfiawZzSecGsJNKpRRnh3GSpoZpRVo55oDPhpEBCxUWbtHJoyWa8jeyQ4nZ7rG",
  "key29": "4RfNXAvDf9fcZf9vTMNAomJAEifWfk8ojqUCfXd2vEucFBXP1PKthtv2yhkHRSHAPQXFFYWSGY77qMLUE44Zzkq",
  "key30": "31WcDhNy7rEjtmFAv3GbgYhhrhsm5WEJSbhrCShMVbkxbdZbeth78kFCRLYmtn88UE6BiMW7F8gBFt6ocHcpUYZ3",
  "key31": "2zNBAaUSCHSXRhsArKrqy97ytaZrKF2UrLAFUGckQmMTHQY8TxvNiQCQ32yxETM5BhDruGHqUhqeNDv6bGSGxD6N",
  "key32": "4n6gHiHVnwgjDRe2qJ1Q4rtLzi3wNA1zCdybSEWRbuAWEaqg4DAQ3aMUJrFnJMAaZKq2naeZSdtjWEXgD5cAWgt7",
  "key33": "5RvLacq62vZq7CiPnrXsSWPqAjV63o8DmSR5SxWYeFcpTg4G3An6fkebMwhYR7LDZHYhs4JkqpYA343TnaM6WM3q",
  "key34": "5cvtt7UVaLxwnq8Yc7dXKFSHgFRsPpt5o3S9ne3dri5D9nAd2SK3CtbiPntyQEYCK6aw9hmT9PB6C4gHMncUiXuy",
  "key35": "3yHcryFQmMwgeSXmsoCQ6SXu9HGC9JYAwLACqR5Fn6VTz71yWVRr41gLdJob7kSJmY3LWYWHGosMwoU93ax32aCM",
  "key36": "2PnM3qs5CpxGUhmtSXaRLmr4t5D2xozRhnQD9ngpzNZTXBSscte2CXypnzvzyAoPeYwA3HL6Gis76XMwikUPSGVP",
  "key37": "49tZ7QZRn4ioYUZhQSwRb19tbkU4yx3RS5NQZNCD3oMZKWSLz3UoMkjDjSyGYoFWv1CDKrKcvfm17CuoiHGS2hF1",
  "key38": "2hhDGpycbxt8FirMmcE9pmNbBfxmJNFadej1zo8d8ToAoqLCwshYun8hc3Z84UYUsY7FFZfNsDa5v8qckLJGQaG6",
  "key39": "3iv7bQSgWqm19JTEKoA4gxQRc4ZhJzhZ2qauHhp9majxNBAUAQKdt4poGYdqyE9pfg73ycFZKXwbBEwgivcvat5t",
  "key40": "4yDkhGvTrk3mvcsjtKtz2D71pFteVVnDSrgyrpLxATF3fkBm6mw86wEdXVrofiZwdCcqqec3NkeCgLU1Su12ogc4",
  "key41": "RNSzDiGSTUj6nyq2FS7LEDHvtsVY5XRFQ355pV7g1RdDgBa6zWN9Lq2xM54xucxwzgH3Z8CrKX4ZN86iXQtCvaD"
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
