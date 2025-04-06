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
    "PymTLGGfS2x7D7RNQK5KcmYVoB4uTTKNEmx6ZFk9aUHpiQ1UDJBuPYeWsD6yh1wQhKpk2ahPXY5k82yKq8gePqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2vWBBL54T3qjaCJF94F4uFUzFMEfLktP5sUXybAh2GPEMvbVkfyAvWqURGL15yJpGRNxSuwcT2HLxyaV96Rg1h",
  "key1": "5HhtXo2eG3SKYNCuGUtHAGMpzN6T7WhiVzicadJPsNeapieBGBTN7zHVqJJWsetEiVemfkyb8FzpUjzfAxhQLrM8",
  "key2": "4K2tuTjxdtjUZ5jCCoHF2sTGi6hnKzXNeK3VejaLqkXKdt4ecsgpTZirWsi5E4rjm4oqAvMV2y7xrAeCXyBz9ZGM",
  "key3": "5WyvX1AX9LAbBsRrC2kTNYYe64ntMcktCXnEoKDW8LUvi6YxQezsvnRFCqNuZetH8oUMMjsjU3cWuK8siSwZ8ekr",
  "key4": "DjuuvBdk92exoAa4SwzFerWVkjMQ24YiE5qRDqZhqRgdAoExmpFQPinvUqkoHTpnsdjcJCdeLXewq7vSjAhsps7",
  "key5": "53PcMJ2f7F5vTEh9oVPdHbRYKmHn5qGseqS8Kq7Hqk8VgnRTn1uzqaAsi2VFBkNZXPFH4HALnBbkwz2WaG22Efd2",
  "key6": "3hCfM4NM16Amv64qDC6Pz3GDSHUQtHTC47SAJgEnj1P1Qo6fuKM7hAzoMSxowBHjR5eofVCQ1yzZCvCgXgCQWWfi",
  "key7": "xBXwhFq45w35i9vV2YZCmPconeoX65f7hbecAdZKCeBNHEWp88i2mZo4ABf1hjTnRodfpFzRcH5my84A4ibc6Ju",
  "key8": "4rGGPzd9B8fTsTAstifcMQQuHLMhiCPp47bHwhFf5VwndPpj2tBQHjmForrYQapXcebiroKzaXEy7gDXWY5xYvad",
  "key9": "5GFYsrgCPUbXQCWGGUTqRynpua4cZGq7EnTSr5EqWE2KH7ULLpGSkwab62G4ihyVcMHH7ngjoswaCoLq579hX8nG",
  "key10": "Dem8D2sNKKh6uJ6aiukziAncJmsQ3Rzgr4BaH2fwu4YdRTvqMwQVuLdt6Zm6CLunrDChRJXT1jGVzj79mHEX9qH",
  "key11": "48KGBYz6V2wxd9ZU31rkukxUFGMQnKzZU4rN2qnkZTpRW9SBJqC7ZxXdxvsi33KJw3bCbwAkH8Lg2zGVPWCt3PQ2",
  "key12": "3CEfTuZ6mHqk7feCFzS3sp1pSmdN6CQWYCpxBHa4LE9BnYb5LFnVU7ratfXq1dzFza3kqdvhc88SAYWFJXAZZJKL",
  "key13": "48YXPRinv5mi7CVyYGJ51xqUJZcRpUmq61fiyxFFPPWsdqB958pT77x8VQZAXmiyQvbM94oDdSqxd9bTxfkPMH5C",
  "key14": "2c964tVkk6giQbmKX149AUrZKdn4HkpmcyKKxEWMsSArKNbkrDHVeURDbrUqbLvWTDyR8APW4zJ6uUrLKukhQBbE",
  "key15": "2dz4bcC7VNggPSSt9vsux3JU1CHkGPgGMatTKuTEuvK68TQfntZwho4gfy1MCe2ZuYLHzhxEuRCU8145xoLTckmD",
  "key16": "u8bnL9HdjYrWGLq5hhoHyMPjLhCHegecUMrnaTr2EGcU77JDhxSxyg2mXhnMqEpeToHd23NT37cX9HCQrgKq9dQ",
  "key17": "5CF195pkbU2oPfNJ4DNSezTaZCaEMnhopmGqA5cwJ7nbYFwP2xq9N8sMkPyeyL1eAoGMMS491ctBSF3Dca7AA8c6",
  "key18": "4xZxxRxhzxjptX249BsyCmwciXAqCQ2p3qsWtgMdnLavs8F5TFL6TQUmJmEoathUm4VKwPe8WoHMUDgzTrPopkPR",
  "key19": "rQu17Du7VJg4RdpMc6BCd9r4s75aoutwoGcGGNuZ5u4y5GmAPH4eBicTYxqTuM6yeP1LWbaAsP4avDw5x5kQhWN",
  "key20": "5pgnpjG9YmL3nYUTZtUcMK73a1mwAJikCcQcWtRVBcnC2cLMLr1zRqb8QpV3WnT3kRTeifWvQzioM2YwbuaTuYW6",
  "key21": "5YnGyH3LKwfYnkdBzvSPVF8Pt7BVqhYCeGcoV9TFqCuN1TBUS19Rw4LRxvFgZYZAWEDyPUddXyXb926Tcskp2jiy",
  "key22": "3CZ2BJj1wAFY2GWuKkDL3wEsVsk4mMPw325qYdVbGs9TgYmAJeeF2mkyjrMKurArhmTsoYqtiBP3fcnqRpqAVNR4",
  "key23": "66pyqPdp6doJU49PurjG7fChUdZmUKU6BYCS72Zfc596R6MNM7oBPSvvC92gDnRR7krSmGMeepPHiAfuNUAGM42x",
  "key24": "3EMjimXXPaaEwT9WPcJz9AQ325jPYCkhWrU47DSeCFERP5Rjcv16BqfVj4cNdw7fani4rgKUv2bGpZAgFzY2at5P",
  "key25": "EZjyE4YCwTG1FFho1NHnnigSubDEze59ycHRtmXTT9nW5JzhE4Mfpx6WXrPSu7MRQc4Py68Vijvr2ZxwSu5cUXR",
  "key26": "4mi71DSjPJF3Tveq9WUoFSRxLDtAAgfhH4fnAt4SDUA8Di7m83QeTrfAuR66XFFPwaMvqSytU6U2xHNHxFFerFBp",
  "key27": "4wQEBtwVXa4zHUDV2M6R1cTZ9i8NYNk7vBVkN4PHr3PcaA6aGVNTYW17QhK1kpCMCnyzBZ7D87R1CbyFfDRK9NGX",
  "key28": "4H4LRshoD57Y8hkLKR5akFTSgNL7x61zbWKiTZF6GdBQ4faXcr8o8WjtWqTx7KfRcmdipXheomeWPNCyBWimYx6U",
  "key29": "5UgryimZrYpFeGzxzCV7abWMsF2Dr6gZvkXMMrNfb4CKyWbiow8ZSBuvx1fj1Lj4Ptzf3SH3QeBxrKkYaGBs6QSz",
  "key30": "4dKWSgSbJbekQkATokkTiYGEPMmqMf7eyiEwsUMJw54DmMq1Zdym1sAXewM5kTfPyyp9zq2MqadKR5FRvxuW7SDC",
  "key31": "GBQHWWsZEh96fyBd8bxi2hEJDCMmNh1gyztZ7QXUMcm6u5JDZYXNvksiPnTBZ66U3nh8XhWcuWCfYAP1MNyzBTi",
  "key32": "B44T3moetLoWpAWDwmxZtdVsL2dFuMNCW9US6pgHF4LZvcCPQhSCivgqA9R4tfn2KjLR6YvXXrMUQZjedPjGeoG",
  "key33": "5YnjGnhjKqLRFb9Lp7v8Kwm4zdvbvGR1KvEodUnzSmiLnbgVX4vRVvN96xyrW1R6QXourcMLodqMKeSaomhCLHsB",
  "key34": "4xwwm7SotXyRtGcsFjHrQQWdjBK9Ww4exaQjoc74YmsdehhkkUtQ7xvreSNTHRGtuKLsprSXi5yWMBR1kMPztSZ7",
  "key35": "4gYDECEEtLELyoVGMqbDiVxnQ43CGWFeef3gVLs3Y284TetnLgiH27uPy2ze5rr3BQU1yf5LApK4D1QQFaNS2GYZ",
  "key36": "24szCx4dcfmfd5jgGMeTFsYtmZKfqwPfQM3YSGjyoFPfedRc2CuJTpnQs8RhmoAFP7Bg75GZW7PBLnfemJrquvzC",
  "key37": "5fCygaGHbPJrJwn22Rwu1yX2nosBLmwLc3SJ9bLov6rmusZUQqK2xhNvT9TNTFzawrJzFopzZAVq786hQ6b7rpXM",
  "key38": "LdYgYEyDxq5C39rq9yuCsb483uMA3D6fXkGsJH4f5dGCM4UCimBgFpyYLqUXtpdmxom4tix3p7bdQn7uCYyVkLb",
  "key39": "3yrUp9H9hzpj7AavY2xnGdzHbSvL9tP43JwFAo7DdLZeoY7SWcLSWvuRCdWHbSBW2JEMaQobxetKxTqJzFV7ccqP",
  "key40": "2rVYpxJWYe6EN79xZL5ug1597pCAE7726XQFeuEm1QS1uH5wyNwDuL2xHci26NpTV6PALmH9KC1vz7jD9F8vXMat",
  "key41": "2a1SMKNCymMGY1WxMsKWPieSna7f4y2HgedNSGMxcLT9ygvwVNvAxYHMrDkqghXUaikqMWu93xAisuAxxx4bvD1m",
  "key42": "oPP5jfpHAKDaRttfpFKJ2m9tT1iuBzkskFoRDiuYSm51zDPMLXgchw9EnQx3V9MD3m7cdBganfLmYJvnhMcmTXP"
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
