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
    "5HjcUndZV3ecSV7PpbgvYkstLWakQDvzwGKJbhc8BjsGDrii7dUC1HAjTh8E8bxPe5U7GFPqjpp96oJn5QueH6ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ff3WG1gjweuxVPCWrrU6z1LYXGwTYeMmUTaHVCTUJ1H5iQWYrEWUkF99m2r8WCc5HFENVjaJijC2LVBNQzEbLcJ",
  "key1": "5pkH4w3ZKWJCd8JzmWR8VejHqU1gtuikzHNM1X9Pm3jKjxWtx7A3H3WUpoQGzEYRQCw7AVFpE6Fd9kRtnzjXNXBj",
  "key2": "ZueygUQnVRHuPSEwh472ABmY6h5RvYaYwSFqSGcxqVUEpCxVTwepVuqHGmPm2LNvrRVzaRSBEQ7ZZLr7ZtVa2sr",
  "key3": "2JdCHBUubuNzGavxCWYXWhXUkdEBkwoQT5gcjds3PmX9ivu4Wgz5Qx1P4ddGSdSR6HUd7RgF1Y53FqnZFkKCiW7u",
  "key4": "673HBg9soo4kD2DyHjMHqwFhqNt1b2oTAaN6MM8ir8BNrJkdQSQGhqB4b8nZpuChyGC1gX8sbjSNUtWrE9QqCMp3",
  "key5": "44wzbx5wuGu5zfuc8nZakhHWfZ6P3XpmvhKuoNd88d94ZdcUzPeiProLEvnKBSNBNniYs6RwqE3Lazwmm8YDyBZS",
  "key6": "2VDDpGx8XkpWtpyJTCUnc5wWgUrKLcj31p8EYQeKat3g1oLn7dMUfwN75de9Fxwzr8f6DyU42SpoD6Ta5iQUBjd6",
  "key7": "birjUjVzWBBowA8SHKirEumjTtFAHFdscoLpLFJYfRVkQf7r985DCyD25KgLavBCamTbBm1WHteMx2sEbiWXAnu",
  "key8": "2qTsSmpdFh32PcwGMWTVNHinYj3xsxBQSHTNQbGm39bPsMkauyqkTUpm4JgXrGC4CqZbo7NSZB4RoQ5B1zxCkWAp",
  "key9": "42WTBg4zWxF5RHtVAgA2FeQDSW9SiVjHUZCW8RpJsLsWG1CMrbvo5hrkYUMVtFT25PyXLSuAHoASCDuBFqQywWvX",
  "key10": "2SzugPkXNWzJF7Te9TiqG3k3uRTCQuEVvdh7z6Tp3Rxqm1UPi3tSZjd79uBycevGStvEw7JrMqJywWhJ5aNWbBQj",
  "key11": "3dAp1Lz1rq8rmS9teP2gFLvWD5cT1Ahn5agCfm6jndRwkh4diEjNQbhdj2hDqkXG978KzsPzFGf7YRCen8LTGYwd",
  "key12": "4buXge7WsjP71F4sXACamtSwTQuh7XuF4g45voNGk3ZsUmsXvKC5KGU9Lt2HBjsywuG5xryX7RH3gGtYhBk6Uz1A",
  "key13": "2tkiznotfrG7mDkfKYBUo4WuJEqT7uycdbDJjU3jZKGbrfwvmA3kETdwAEGefvsoxLnHQco7NKrpY17hCCJEAWU8",
  "key14": "4iHAuBBxFtuoaJhA2WEEgGHjkwMfGsusanAf3ZzyE4L4j7bh1kDLfgXtDY23xLbU1vYqPtMHdW8LzmND42fHqEdF",
  "key15": "4EGLwjuCSCKP52FSHEHbno1pme6dKqBaxnisBDeP34Bh97MVb6CpLuoypwZ82HCePJC8rpb8VsHz9KsGnRVv1oyZ",
  "key16": "uMc84W8isRt4ikUFS7ChdjwCyJzTU8UdeUCf6eaSPX4mk6UkyBz4Sf2Bnemc34rDQTjuxQYQfPn7Exnh5sKbMs3",
  "key17": "3EJ9b7YJiZVydwoq4ZTLPS3BHcos2CX16hmyWKHuZMdfgboGAdSvtMivfCCryxChT9t1n88fEFrfgekqUTyroAbh",
  "key18": "Akv9jSvpWB2fNLoTpFnuytJHkenVtNSWLqTeHKYRaxHQJic7jZLiLuvonnxoFWHKKybYPzVcATkMYonjwpr7qsq",
  "key19": "2aNb2ou7V8XHY6eRh1f5SpBqKuoaVYvjjmkxqZ76PQGxT7krqz4ZuiEaJSaxumPHdW3mFRZs9QEF5NqGr5RDuVAt",
  "key20": "5zoXkJDfJpUH4s4Ja7m4aDhWCeKwwxCotTUqdTHoWtzYieQuWn7BwLY1gsuWQKpAia7aJm4aVDAawGFACytRo2yU",
  "key21": "29SHEZEGnSi38rPsMg4QZ1YNgrAVESAKk9U1kYfQyWr4cHzZ551EzToPP5APyg3BqQMSZdwtcePDUVicKLyBRWvL",
  "key22": "48R5YmPkKrBN2Xtnx2KuNJmRQh7wFagB8k52HTSpnZMUV1WxmGyvosYpe8BRUtfLNDmYndWqxEH8jHemMgGzsAR8",
  "key23": "3KNPheDreWKfFKF1odpk26W7HZcLzNpzbDzZLFDjfd9VMK4LFqrXF94RR4meo3AnbXaL3iNnj8JWQNAJncBYWpDL",
  "key24": "Dp9HhgECgNrEeQnkD5b8VtskTNPKMi9xdnZjgz2uUmm7BLTyfBgxvR2UoS22nwmq6yTRLiQDeLrMv2yr2PZXn51",
  "key25": "5CPUN9UEfR1FVuLFy5wq7gnW5JJ146xu4DVeKYtPxQX882PSCg4AMKrgaTV5agPKdrhsa5FBS4x2VrgnQtUswUUT",
  "key26": "4FY74uvi52Ud1fAhEKcFDC3QKLpkgjiCELA1xXmQdnhXNj55gn1zeLRTcAeLjqL31e1TkzapV6ptCiNWKrELpJyS",
  "key27": "4LhgZMjzRMb1kXkzcW1rDJGcArwCbi977QQFXJUeGfGm2uZcnyNGZPkLTfgMVzccJHaUTUAWfu6Dpaat92CY2XvV",
  "key28": "SoXNPHYvEhZ8k7eLoPc8esBXQYAjJBt4MhEfcoy1JPXTXCE4gxQH1vCRC9y5K5h1KcmHB3Xjx2Fjt8rGe7XdYW5",
  "key29": "512BiEkxsu6SjgZ4WcALkbfBsGcmzEBcoXe1FGcbQ4E5Ba8BQrMpX2sP8WtD1NhxAfM17iUafFkJ9qwCXaB56xUD",
  "key30": "4EUYimeZsBALhSKCy55b3kf8NFbFTxjRoCQmakqaJb9x4qYbgJTPawRMM3fhA3bjywKPC7EUKzbYPwJAakTsCyZy",
  "key31": "2VtEGPAX6NnskeKx5EAiRdc1S3L7Z2smxtf3ELchH8x4fe2BvbZvG9p668inWS6DGaJ1GBHkkgZgzUCoCoeSJK18",
  "key32": "5A43TFdsvVyH646grL3AUUNZsV8wnummtT9x9VLUmNUw99xa1uPeLfq75jKzezeJ5sUNHoXQDzWLCPPoy3GpGkUh",
  "key33": "29fMvNDaNjNtUkaXudL2grNDYck1Uyju9hcnCadPnrZPixn7v5zQ52jtukvnnbRKC6QcS2zqBUqH7Q2FhDPvDGxw",
  "key34": "2KBfdDYHzPys36E8jhfzFgwNyRsmVJd4QWznBzKY2bCYKcPMEyQMRm96tPN5BzRSesqqkLnJR9GfzXvKdduQnbTo",
  "key35": "4ABCjQS8mwdqgvgCan7mZkxPyRTMcnfFRBShzLXZfUAZCuC2TN8CLCUXWW6idtNVFMP2UDFWAtBZwSd5XcsYgyrq",
  "key36": "42wBMqRQJe5qNZmANaWRwV5Echc3Gafe2APCZfik3g2Hp7mX4uACmbKqnwvPxdZovz8U1SLM9zLaby7BMJy3peRK",
  "key37": "2bfGB2S8DWqcBEoq6uJN6PLDPeBe7kN6r3Fven8tVyAR6hHfhn8dabdp97Z4zWNhUdJ5YGXEdBCn8MYX5NgF5jdN",
  "key38": "53eBzE2HLozUb2wkwSuo2LSDU8H84SHcYEwkgAfP5xq1dhfRqJ9VXmmcxJgVqbD8vQJye1qLubkyFx81RrtXceHS",
  "key39": "2cpfVEDF8PnsLMC2R7bseLx7jjs2KPg2c7rPaUTdYaChGS9zqFKWvwSigPoP53snKmsDvyQciTgVf4wKVNpiLfdJ",
  "key40": "3aiQwC4sgNbsAR28RMJKddg7b3eCqqbQmLA8TbKKCiQy838XWrGQkTcy5drT6eT1o8SKVWNvVFqd3JaKrstwHXkw",
  "key41": "4Hu8xFKvLhp7SdBycPSNKoAzhhEvrXcfojdSdXXQh5jjXmizgcW6NCZMTVzzhX1q2j7MMnDSugHyHU3UZXG7kkEp",
  "key42": "5XWRdRgCUd7QdEeyRBKnPX6CZmuoNfFF64XWEmWG5rsBGLgrJRTHjbu1fSh8Dro7DECnVAy4jqwqinXLVP69gCTA",
  "key43": "21sDoDXxf5YQJjqu4YGda3mWPgsjoqerhRCNuWnRVMaeegSj4vAxRNWsexmhtecQtBJdJdiaaBTWKQqQzmbyurfY",
  "key44": "4ohGWpdVyr12211guXtTTymbcBeqw9Z1ZhXxqMHrDagQe9AghmA6VsVxozh1NYN7BTED32hcLKu5fi3ib7LabNYD",
  "key45": "XNW8VxytuqWRbAkZBjoQgVcVP295NdVYJmJYXhL3GuCfR7wm3CprqDgMXZ9ixJ2jiQDBnrUDwXTiV85x6FwPAok",
  "key46": "5PoW2ghgvz77FJkWcgLq1Hoorwai2YcMQ4LhM1BjFA6uKpNxhE244McQ2nASfYmPUE9St9dXuagZSLhobxsnquJU",
  "key47": "5W3BZ5kKzeLB3GMxwjQ7Cy6Nj2ogCrt3Zu3R9pjZLg118ZAEpJbXJefQVW7DcRSPoLgWo1EJe5zv8Fhxhh2jh3R3",
  "key48": "3CLEXNXVBryE58TsGAoh3RshQBbwBDB1WN5T5aBXzTeDr1ggUvpqbMyo8W5mxQGpv7oVvkPBsryBXYWcBhwG2oU"
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
