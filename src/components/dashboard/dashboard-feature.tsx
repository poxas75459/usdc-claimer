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
    "2V7meGGRLEbt92BHWpUtGiaKANE68mtPc3RWJbPwiyTqvqgsDt59tjX6Sq7F923Y7fM74HueaKc4Wof2M5JWAfn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pX26GpvrvxVdMAdXuWuBsbDuN7BgdanqcUwkPSqMpMZFU26vUTKrmHiVmitE2HosG33yCHgPWoNpvaFy251si9s",
  "key1": "3n2nLjrZBGpgGWMWqmHJxCQRPdmmEXwkZpByxvDymFBMxohwhAVCQwrANLwxJwow9368VNtVRxtNkznSFfjYhnGb",
  "key2": "5bVZ371od9rAoVPHasi1SpTJQKXZg6w5vfCqTQ4aByLzHyuJirL4iKuSFAHcBAsYG8stR8XufpY1PMq5X9tQ3ZVX",
  "key3": "4nCNE3FRy7k8khbAcxpZ8URDw4wQXuiTdtGBbimY2okGzM89ViK4V2u6hVRX8rT6t33xcAtumdhacCku9ddySU4M",
  "key4": "5nAQkXecWsd8UzYfwtApGSuuZmsVYPKwPUoC9DFPCAqFzgtcVwDbKb9KUG2jrbYCYoP81G2djCq9gJyaKSrSzu7j",
  "key5": "37fnedtzdjoyKW7kVy47DFx71Gskd2MxRWpB3CEwUevcG3EnnxLYR2pf6bBTGinGqn1iDHUUvNSBjHPBBhDWjySA",
  "key6": "hd7KcGPvv1WJ5oHkMDGRq6tds9C6AuubBHaMvM1A1xv7REgACYZbi2pmTA7cVANFFZN45SHTnMrnzz4UKZ7sV6j",
  "key7": "3mb4cSVJ78Yc5CXQSosDWVQBamQJkTQgLgjW9wLwK4ZWJxUq9fgiwSyna6Sfvryqpv52jwqABctbwJj59jjfrpBq",
  "key8": "2BY4sejPWtQJ2wLnU5e5auHmVRiALyvSz81ug6PQTkdsEHJVFtLGgu2Pyi34yj6PuAKgeeMWZnywENWL2dVzxJkT",
  "key9": "4LENKbTzsDKWbCjJXjYTFCNc1B47AuzMABt1z1occvXHAP7sMz9wXgLB9d5Y5LKcgX5MTRY8foqALZJZ9VtMy2Ze",
  "key10": "DMWhbcvkgHDpyt4yvUUZFBF6JtdAojKZRGX6ZXxhXkevQmaSxzYoq4LUL817mqCwpyNf4c6Yvkr2tvZCq5dwgqL",
  "key11": "3dznJ6DjwafF4ttHCFRrmG8RyfYz6khpz22t524KpLFqLdcDTxrLjSyyoPkT6XctJcdLGYa62aUVW6U8uRcqRG1R",
  "key12": "4TpBbNw93RVCPwrXrSsRun8xpDM9zcK2AGV3N1X2B4CHHbVMoPzHyeeJrWzcmzNpmdrGJYopw9PkY5Mn4itWJYy1",
  "key13": "3qnBC9Xb5FnFRuLUqHduubJdFyVo7jygYB4aUawvMM5QLZMCcSBBvwE9yziBB1WdAVY9wXGJKv5KprmNKv3jdDhK",
  "key14": "3DJTbARP1MY8hF59fyUmKqL3Ep5rZvdy9RMeCQJzAj4ty55SgLer2FBn1njXTkNQxPon3E74Nmo5BxQZFgrXxS6R",
  "key15": "jNpnpamTVjeppbWmScsSu3qsEV3p12oEfc4wmr5ywj7LbbAAHnGvm8QicNXRVykMbR8fdQGDoZhPgzijWXTmXGH",
  "key16": "5LnGWVg98YU1kVkxmhJ8uWQzAvZjMwk6S8LDTodFhP945gqvH6L6yzGeWbdF7qpjdNev6rLCSNZbPH4rvJXiHYb2",
  "key17": "zLgvyVdEBHMq3GjyUo68LsSiYHPSpSUhfCwzRZGSmFzpScLoXfNXneE3kx55W6qgEQh5Vc6fc22wBDfWGGF1GYj",
  "key18": "2A94d6SaoXR1MawCAfMWtecNo3KEsksnG2BrzGMDkW5mWdpeMfD1ep8GtDupLeHUTUK7UR8zfcbg5STaNGGPM2Gi",
  "key19": "23NcuFn651Nj5zLedsV2MwXUhsQ8XPLyLKDGurW1beV8p7J7WdwhPHXZx3pfyJRRhg9TJrxtabE8hf8KLaD8a5h4",
  "key20": "2N41amG4N2dZ5uPZPbNEeGUPjox3yzmvEKxjgiCZtsbGBTD5SHTacBWhpdStEhXxXgwhcqbpzb61mzRxJEgbaPGh",
  "key21": "5zKfZ2BhepMYtZVJo6wzmKxRKR7Amqhi1v8NSWUzSPx7N2BmyjhSjfZJPY8vr4csP9Zqe2bmWUv8PExtEf3YVKYp",
  "key22": "5F9fEn4VhqCMdBH2gbGFPKF4vcGkJE3kxdEJ9oGQqYcKdMvKkckQWXRNjhe6otCi7n1MJpB3hGjjPiBBaEoFoNUL",
  "key23": "3wwzE6acRKaHqi9Qq6dwuQejTzf3d6ccxGGSyviMFsRqUTDQa8MfhrJB7YvvTw4t32A91PTZYHxByPDafgLsBF66",
  "key24": "2YuyoCqH1tu4GWeZ1d8mjnauQjTBvwkhVvzzusGYxW2hypTngFW877XYajrhAkpR6sLimNXmTsS2ECSHB41aQtNx",
  "key25": "3e1RpJPBsmFFFZpMumfh2gbSAiNC4ijMZQSs4s4EQtWDy2wXYsizBYtPiHKej36ovkuXmGPspE4QqUPbBThKmdjQ",
  "key26": "5ZZqVRUF6KDrZhwru71aiQyHZMaRYCc1SrLktgApyXrvFDB2vsvBNAo4YpGcVDKcWNLZXn244GSbbEXu5pgcTUeg",
  "key27": "47xcEV5eHw2hYUasdV95Rvvr9EBQJw6e5JeDLUFGGEqEdYRCduvFBCL7tYwD6NrW3Rat7jqPGurRSSxkwnvSHJyA",
  "key28": "sPJHL3rtiCBWyfzaoDXrfKfBMHkGt8ZEY3M4LVdLux8XWsBnKPkgFrjZ5WHaRK7yS3f752JmWMBcm5EPtn387h7",
  "key29": "vRd7HoB5fofquAuuQCasHSUerxMAubtp37dg5MTyTkNsmu3sWywP9SumNWVJ6BR9PKmunGmpSBndK2zfcwn2Krc",
  "key30": "38iEcWXnMqv3qxRkgfFCfFnrMA2N16R9ux68UtxYNoW3xCaFL4UY95j6B8SdgkQrbjk2zH9SDZEstj3KqsU2ooHT",
  "key31": "nGKoE2MQPwDBHcSgoTrTzbz2cddbDsWoVAGBuEGmmfiwtZ8m8zngCQUYmhT5QGFm6LP3C3KCS26a2N2U7jW838E",
  "key32": "3qWs3xYteWiHtoujcbnWQ672Gqxqz4Lxr2NYEX3AxgNZ86v49ALyS8gRhFZuNW5xqkMbb9rC4oQgTGAnqyJn6ApJ",
  "key33": "5erSHLSHDaU9EMZ2r57Yv52vQSFJLc2bnrUoHK8NECT65FpDuwVTu9QoVtqX9WhfWZVhKauEt4Af4PCirQtZh1qT",
  "key34": "37f9kzHzDN1YEsk6kuhZr4KRJhq43KsnR5TWabH6haMetWnoGGJj9kjpqSNUV6m1xFxzYyHkQiGnSkpXgKtp2eMK",
  "key35": "5tCMgkyem72ruTvDj1LtBRCUEDNnceYrrttoqk9PzfMoHbjvW9VmRpnijNcu2qEG3q4q4yEPgCpgogQn4gDHs8ux",
  "key36": "4kYx48Gnbj9pa54w6DFc9j9hi6bdrZgFuNtrzoNEhyaJsAcfb9hB1LRqjMAQkBEaEv6zE7aMAbbYAHSjig4Mgwv6",
  "key37": "2V1cXtf1bBKP2fNsBy7B2HnVxsdsw5RHhSjNvSqM6HwyNnVkzHb2bU6hRRTha2xFV3RFxbMwKesrfcVjcvXFuTvk",
  "key38": "32uUqaNRwEDLcRUrpg13ymh73iPMu52BrKsdPNkBw8tEEfgx162y8CAhhgYEZbDwBDVyiMT5gWTc8RW4PSBirV5B",
  "key39": "hCfWNVhW3FBfg27j6eUBdZTFi2ioxvnBZHbyoS3AMnovGzKXxy5oBu9N1B9qduj2TQ9v2CuchkoP63iPyGCjLwe",
  "key40": "2SU7QWtNR6i7AQMTJe9EiTfwPVMyUgDRNopbhLKTojvywdvxzm5CQHdLPhzUQ4rLc6WKZkaE1CXN7SYgBz1s8ous",
  "key41": "2PYeQvbpCCqmvijU7K4x96aY1bLMMu7DNroW3Js6cmV99ULDt7wF7g26dt7LmsHT9s5YPTCqKSugdJ2rd9Qgnwbr",
  "key42": "ZcX4UBptFsCJheBDYUdzs8WAsn1ruz5nVJJYTrKZkPvVA23ttoJFCDmkWyiZstKydVpr2EgJgTcy31aRqNNHPje",
  "key43": "3VHdJxNPHjYeLrWn9L86xMo94cNeXA3Hwnv5uLfqx3PAD76CcTCbPGX6Uc65CxwhiqvMuuNcEQjAkMXD2Gm4LCAh",
  "key44": "4Sh9n65rU9MaS4xAdzmWSCnt1J8E2ATVmV7J6U9SXBsjg2CEBH8XK47aNtxx6ES9qGDN378V3N91YNbugeUhJF86",
  "key45": "3hdJNwHghF1i9y6YkradCg3CNGkjqhegN3oDn3K8u2y2QmGuwVsUgaVXvcuwZ9UrDzz9A75ike9Gh4sbYa8Fz8oe",
  "key46": "2EzQdYdHxtM1cvtkU8fcx5nvgwq73u8sMkz5SbVy4ygra4Q5MRChkNDM2BZwwVTZ2ByHJTkYToG1JYAUNGMDZio2",
  "key47": "1ZNTBmFCVrKsmhf5P42kTDbScABSwCKkAfx2uWWHa3ja3vbKGzV3GEk8NTVEiymSpfZ9cnQS4Rrz1Hd2VqroXhU"
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
