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
    "2QiHpYTdW9MnsqX3vTLpqU2AUqbDU8SSnoHycAVyLQzjWGBYxUeFVyCmfsdZSH7gtNp58QTgvCSBxNYntSaS4dMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21kkyDdkXNxHx6b5PC5qjUQ7d4PF3xLKeX8PNm8MqT7g9XRZzJ4jVLYdw1n3SndzZyBcgek8QcRYiFBWhjXCX9VG",
  "key1": "2boqwALFHR7DEBztqXUSopDLouCS1NcF1uKXZu9iStqkcy1qEE2zgzCM7o8ZNXEQPG7zpjaTeu4NRkkn9arbTBd3",
  "key2": "4LibBispT9Ax8dRjaVPtsfJ3PcSa7ocetA48XQrdvkjyW22zuWcp8rR2sFXxBJiP28njua1t3s5zHJJYJA1nZG5y",
  "key3": "4ZfFosfY6sUbZ2hp5KJMuYTwNNpZS325DpUL7JsN4q5dwcEuFPc4M97SPFPfZPWfXTQhZZokqqE5FV9Tr8io5vNt",
  "key4": "2J3TL8t6pQtxs8qgxRnSrGG9a7Y1kyxmuX7KsXyQHADwsm7ZaUkGj6DpZkQjeHFcr2xnC5qnDfNCc9LhwKvoK8Sv",
  "key5": "PtuXeGaVZryUyDSgXQ6AghmXbmzTtmFQoookTSZx6UKsyPhBNpSYVja5oamiYaVv1aLw7N2RNbK7NbAb11GjHya",
  "key6": "4FnRFENpKaaNgh5k3oUDPzQNE8zrWYUEbrxUDwDX4fp4DgPg9iyjTdH7L6512DSvKKkUUPEZFyoEUXq5DtCx5LUv",
  "key7": "4K3kqoTkgLNmwqZiAkUyCUUWjgi9n8dmc1gdxryH4RxReKXtSTXfzQQ7kPJVLirjE7ms3t1bihWwSLXmg9SYC1oT",
  "key8": "a8731syfciXX8NaSSvSdbcbS3j7qVrf9Q645QvAJH68NmwiSSZWXFJZgtExXeoKXFruofLZsRH66QVrnHW597Ws",
  "key9": "ge5mpLsWdYLp8Seyd5K4txALWZXoqzFPs6GaXN3A2Lum6BjRVwG8vTYWjpxDRFmtUqxTM41iZBrDBmAm4Qr1vTL",
  "key10": "3rHA7zz5gKjhmLjfpDGN3jvqAxZ673MYicRkp2prK2hVVorKwnGfHaq7gmxRm5xEN2R61xVr9xzsAJqFGg5UkaLH",
  "key11": "4d9Xti7EDEPfzQ9ubr2MeE9RgQrJnVYNwSbEGzW2DqPy1es3UzJ2rpepXtaa2ew2Lf9vwHUazTL1YVhEGHzEbmLr",
  "key12": "3SNPaXscaqA8PDNeo5pMuop6VDQNT1CQhJCJYHbXwrqezpMcgd9xbUUSUYg8vS3mwquvS8tZPNBgRQKoBZiwDtyb",
  "key13": "5JrUajZtBmv35FQHqKesML8ihNZAvqQEZAqscSvup3uG4X4gPxfqDoidskFqT31adqP5F9GKxngV4BSJKLBG4J5o",
  "key14": "A4rhai23G9FEVcmvgtfvy8etASsKA8YN2Ju4uQRHFqBbCJqDfSbg35xEJ4zYaeVTcFdJg2x54YLY1tD7XK1P5pq",
  "key15": "BxCHBtGi5rHTmQoLbCgXSexQLoxWzWZc4D9SjjzgM915EZDZvz4qRWKNhxyvzy1uqgf2pGK6tWZht2f1PCFet37",
  "key16": "yboKvDCp5KTLMZSsP7sDHcFykTf9tcALfAs1tvP7DqxzZK1KyDHXVrvmuinD5bGmwEguCvHogc2tKwVgNijM1LQ",
  "key17": "5oQruN2rzz8D496shMR8ti3BnresLkcUsn1fnnESRt7wPDovwxbxszU4uHyzktQxX6fHwNthfYXNkNMJ1Wxe7Xgn",
  "key18": "DPeP3GbyCAKMuQxUfYHvPEr4tLYZyz1hkkwHqWXcBmGVFs2JtKeZgAfsYsCV4T5zabzaGaFCaaUXwETxfRH8dq2",
  "key19": "5bDtgo2eKQupWBdJG1giqN348FdsW3vvUvSG2HDUjqQh7TRgV4XfvTQ53sykBkkKXjFMDSxAkwiWcquK982Nk81n",
  "key20": "zxS33CrvxK76gk6bsaLFtdNH6JRjGrTGd8YsHu7XmLkVhF6oEdSykeCsjS4gG2LSHL41daqd17KnkYDPS1C9Bie",
  "key21": "5ZViUM8LAHp2o7Dz4n6tmAs85ap4qTzZCvLJaGe4JtfN61TmR4VhWdpb2ygvs54kvJhvSeXxKBSs5dRWLQni5in7",
  "key22": "59cRjLg4vKg9jsTp3NSSAENNp19BN8MRthA86wdZ98WRPqFH22AHtt1FKPUJgap7wYQRW2z6qgWA2WDR8dQvSJS7",
  "key23": "287d63tu45j2CoZk4KpS2r4UTpy2FMLekThwg6Z1Vh831tSTLZsbjSTQiLNt2epnYCJcboW1Sbkz9nMwyWZ8YSwY",
  "key24": "5fJZjLCo9KsLDFMBLFNZdNRxxmzegYyTuYQx7gVAp5GmhC2CWimbZbX1Xr9a2Upk9enP1Msk8WJVvtpH5NJ1bNRU",
  "key25": "vk3Xr6DNQtFcXUKzaec16CWkHCucQXA9w5vThWvSaow9ZGsyLR1hkVZ9zGzeeiGMb51er259rvzWuKVbZbddtVp",
  "key26": "51fMYJNxz1F9wnBzwHMxkDrnM7ZQZtNU1Y3JEf4b8vJqs2bb5MNzrMeNge6tnf47MKTQoyKxqhhB8ZyFKoZQYE5t",
  "key27": "3FGR818ZbYVbzfk5sK37Q2rUZU3ptY2Von32kk3eQ3Ue6fEZLADrTXnAAPr7fM4GpmJ8BGn8mvucJG2VR2zf3bUX",
  "key28": "58YAeEZYhsQDRZ7HtekXdxUJxGLym9wveWXVCPJhn4bLoQPJUZJ1fy5cSKdDEzeNcer1TH96nex5JRHjNPVpR535",
  "key29": "4zgFoY5KjePuxazRtnW3JyBnoaU46o9urB3xUKKhqQkd8PDREaBCfgBTbUdjLSpFMR4rSFniP313PPCij6PFtCZN",
  "key30": "5TmAMTDc2xewy1dG4BmyQS2GUXnyGcyTqLivMTakZFGfkCXbZU5RrLDHQwGmEPtES2sVc2mdb2V2ud37BKr5qjVQ",
  "key31": "3K9tWoxRZ8P6eUAP5yTCqvBe9dpXgkjCBjitbMvtnH7bWp4ujwS2Xv7rVHy6Sdo3CK1Vj7zEo1dNqc9GMd4yJQ4R",
  "key32": "4hhzw9FKHFUUbCqm4vhMkZwCPKwAc3KLxmJ44x8nR35WZnqyoETHAtLzoquGnpPM9VLWLEHWvMmukeJWaiNCD5u5",
  "key33": "4iVmmG2gf8U3dhXyyETehad3YWJjHKF2VRVWvX9ijv4C8RhceFqSCoDb2weWDyzNC8Hs9J4tw2HWJPdXWKZFWSVY",
  "key34": "6SiZb5RvzX1YcHDsEMdxPw88VnsMuXsR2bVKu945zi7xyrBKajmDnuQD1uT5wxDp6bjwtfXHgfKEMbXHxELw9Yr",
  "key35": "31RXPBoebwgimNhEu2yiPnwnMGWknmfW8NWWGLvkE32SJ7BtURTnpUerwCMgVv71Ewof6jzbccadQADqqSu7u2ZW",
  "key36": "3Qu6Ye64U3rkbsxTjKiszU1XPQVvtRZWJ744KFzxRPihG67qXvFvCELA7vkgkSnaBffZSpFGbNJh2nETx5AZ2zs6",
  "key37": "4kitP2nARuvoW1ffV1bimr5Y1jGtYfAaDWWGgKGCXnxtYQ7egmqEootd8AgQhHhx5tsK4y6aUEgtssLiYCNgJ8en",
  "key38": "2c4SkkSTeAKkDCjDJ1uARjKz1oRMgwgq7wxTRpzhqcWGko3y8uBhptyck9rpnM6gguxfkrDrZ3v61CUiwhrHFVZr",
  "key39": "2uKVuGqNjzpw5KYaze86ctrnzTDmk38meykqgEo9ExfKmVU62bmhm8pEYGMMnRoDW5ZkVpexRn8pHQdJMJxKwxcW",
  "key40": "RvhtwDf92fwzTwntzUEGNozzD2SjRFaoU3RKsBCHrxzb1fLPhXRj4Q5gqzK1EypxGsonDTvXj7iaLg8X6zCMhsg",
  "key41": "4K7Kix4ZeRWomrfaActmFo5LhJhFtcc9has1hnHPM1sqqr29FhVMVyKBYRbTetVgqEksLbHoJkHqX5t7w9pksqej",
  "key42": "4BpVAsCFY6hk6MJMpNXEzFymSoS1zAxuKfaQRmkFDCNRpEM56LFFip1rMmt9rA8tkjLyuTAtjT7PZsm9yG4nM1WN",
  "key43": "3f3gohiEpUpE5Uw83YoVsV1ATFWhJGoza8VcUYZms5gxBwS7XfsA6uu2nkrXs7YPTUBidPKJEA9FuZ1zkR21KeZY",
  "key44": "4Kmq8LD2PvGGZTEMqn3P99dVFKAKbmbgU4WDcV5EEmu7m3avZCCq1nKGKeDghEAN9hqxzRqsKcc6fuhUJHXwmqr3",
  "key45": "n3xTKbZmGi7mzSUvTCdejjZvhmromjZMhGrgrRTMVysZij9ayGpP2o3u45vb2q9N7SGwetizQoJGP9CsmsGcXes",
  "key46": "2H3twZGWPWF3TF4VograhVFPojBGgvSzSsFeU1kWNeRierRRPdCMemTWJxDsmWZsjX5adm2ZeGhiwqgcjY5FWYxx",
  "key47": "3kvj79cLxHkyzJQpdJ9swFQkbSQVDCcPk6dBgfeT66h7N6pj9a7zcFtCsBZWgHCu7HkaCATKX9k2monuNQHZRsrU"
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
