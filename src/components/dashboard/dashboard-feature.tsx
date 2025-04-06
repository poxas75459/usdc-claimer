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
    "5GR7Q1FcVyoHBQ71P4DewXv7kAJu8hL45jwXTTo2fn52ejNrRymdHY76ABoHt2s93QPMon3dKfWMAHTgrQiEvWBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B7cNfwx5f2SYnRYX5sCem46Yc9q4zPyd1RnmM1sk5hWQ2xBPUxfNmkzZyTbfLLD4M1bjhPKFWMuxL5UEiXMeMZZ",
  "key1": "245bE5ZESGoQ33BEgEYBFCijxgiBjPPuZr1wgNmUMWJzGoGQXqboyE9i5yrmiR7rzMV2CF1XUH6SfrfxN2ZFhJbv",
  "key2": "4zP2z7xiUgBZTyr29Ry3KgiSjJNWrMJGCuu2SEk4D5NV8TFjEbqJ6BwqrSTYfnKMa3DcP8MpY2qjncgQERYUUNVR",
  "key3": "3qredBeqNNThAWC8BF9bUYdQnH76c83EV3fn3B2ZypeoZNZ46rM6W6WJjPUTKhLpE8SUgvY4a9pLdbWpmYP4jDxu",
  "key4": "3HLxk4kH3gAWHVDxsARtxmR4ddSCtdr1Apj6kczN9bbHY1YTS6V38bM1amxRygyRssbtNn8ebqftdhuu4Xk8ExpU",
  "key5": "4tcQP7mdu3HadFF3ta6XJmeuUKcHw6ZjLBGW75jgWYNTJaT4JsyNxgvRSJwnVroVR56AMe5JBTEYxWTE7N1g9DP4",
  "key6": "3rEAUqQ8jtw8Nzvw9JiQKWeJhYe5iKEb61F5RoYfxPCaW9faBEQm3nfUW12yxZktMSukd7TCp4kctTUpJ6yUyycM",
  "key7": "2nKmn3KL5LhL7F2XikymPVRBKsQnk1VnH8hVv5Kc9Sm1DEdJoxmy4jNcSaAPYYbkdpwGAp4aDqYXrxRYfVHYBEL",
  "key8": "Wz5KdSdegKVwAQdY4SfDqYCDu7ewPkMegCULMvdtUxKBVPGUg4vcG7XMmk8MDKMHx2oQfHv3EpcEL6EUreqA4AY",
  "key9": "2GY8zyrT9diCkB2b4wrXR2SaGj3FHNyqHYon8pfFweuRTjdqJJWWMhJapDEpNP5JTUedvGP7nB2gaiaF5hBiFz2n",
  "key10": "4Xqeyox7Rxt7NLpKgFCnwxLyGzz3RshifriDbE5ricj2Z6iR6hy71wta4F9pcQ9FRy1HWP2B388VFbyAoL1LhyrF",
  "key11": "53vXiqZsD2PLz8Rju1P3cLez8Sgi6xzZSrKPfVGuGjzs69x8ddsgKhneQ5SaSes2JxTUAya8LM3NCbmdW6qgAAjw",
  "key12": "4oCGqQoLtYjJpfbMtKrLr1iktTk3rvyntS1VyTtqzUKHzsEcqpoYxfP4Y4zpxTH14m3RLXNkZB9fJ3DyPaajgQjE",
  "key13": "4GMBBtanaB7NCWJ1aXwFo5w5T4Ym6eeNKNkwkpeHSKwjdK4cbzPAsDURvcVJadMLcdr5vNF1djP3WHjbnoyE82j9",
  "key14": "5sWj9hPkD4sixX3JVwZJDdGYUfTpiGqPeQLPxYsGvhqHDWwzk3ksKUTmaruMtNYKVxAYRSfwrAP6aM2epaRaJ3qW",
  "key15": "nZpTrnVXp2cZLquUkaEokRF64yavwTothXSvPFg7GxzexM7eMPB3T7nDdgHM1dCqtRcgCDmARkLtifXmX4u4ZKR",
  "key16": "2rnww9cm6UzcrCGGCenNsd23cpVg5VAYHS8Kt81YVjVTXpc4JyPYFDPraq23C2ASyQWtbmqXB5pLDjK7kzXLL8qg",
  "key17": "4bFWZz944m7yUJP42CBF1ybvCGsFJ2AVLUnAcV86pvBnrW2EcebNz6prxeHSicCVGy8ryJEoowC6Fq6QtSBx7CoW",
  "key18": "2Ck6grnbLyWghrwctc4jp8rzv5X6poXWFn6X4Znfo3X9odo6PPe2AA8VvT81TexsGeQfgZJgDFptxTsvkpDhLV5Q",
  "key19": "3KCGQ6iWSWgzr9aV2EwXZ35wkXmRTh7FqSuQ5vVgoZueMahG8dxutcxhFnC7Z8zTmNCe1Lnom7qV5S1B1W5mZkoo",
  "key20": "2DNjeTewYin88V6nUtNs91U2QXmhAW8pbMoqgSZyreh4sq2jfRAcubVqqv8t2ogALW9gcRFchbvSqB65vTYMLjPY",
  "key21": "27eVEMGPfzC7KcNW97wxDLBBX3bmAx3AsaZ5wbLpyt44CiKLa9JB2JBD8NUiFze7Zzvd2dL2RCpiYHHLYTVQKwqK",
  "key22": "scayVRfRKPgj65cSuqgFWyewqHs12NwyFnko3n7S4NESDXcG4Ra7M3MHxV8SQ7tTYpJWsviGavFhYRd31Xr7Rr8",
  "key23": "5Kmf7fp3KELad3ctJDnnJBZovdmvYAtK515Ujec4b8nidCaWeFKLfT6z3sb1T5ijqoyBui5iuycPPK3y9fyYCTF3",
  "key24": "5dGrEawU9pysXmSmVLAYrGPcNxhNcUCxFCRaLqmc9oZf85gBM8amFSWgke7yc382SKgMrreJcsWzYUFpZv2D4NFf",
  "key25": "2zMM69UzHyUskni2ZmRDZ3cZXmCtGNV6YCsCvx9MPkEYG2N34MyikF5F3zqAoSb2PxyWUNr9QvwDfzaJE8URB7je",
  "key26": "uznGdSXc12GGYAt52oQdKbj5ZMfzUQpTvGUUkwraZTdVqpWJi8BUJb8xXJnfyKJmbg5RoFDeEnJFVuoa6cTniiF",
  "key27": "59U5qjtqnWVwa8QXGVV9WjUHszjouRoJkJ79zkfEowpqyLW3WS5QUoQ1QHHWpQaT3dswkQvpwjCv478wHPhDmGgn",
  "key28": "4dFuPpdegKzdBCnVQuvvruJXhoGEpJ9ndJxLcawhPBpTKVAzhSif3YaSbZdSCzmX3UxqGJQ5N9qrUeCxuFe27R3S",
  "key29": "x2Ju1pQvxw7bZ1DWFGtaMvQksHtgmyQTCB4eZa93J2vX9mrhdBfuorzk21wBzKGXNWZJTPV83rkc9tg5adsUJxg",
  "key30": "3JJpXY4M3nhPHfFGhcThwTMSCFCwXF2HFxQAWu1TcKuEVei3E93Hwf7TntaHCrveBTmdXx3sTapfNsLREgZiE8sc",
  "key31": "3ihy4PyU5xp2pXgS6DSxXzqmgsv3JFPsfFg5SeEP4X3XDtgxWVyXkidD36Hs8xQFTpvSAR6yqDAZY1rc7Y8Ykg8Y",
  "key32": "2ZCDw9VJzXzXp5gb6iacrsnWrc4YbTCEp33rYE6n1WkqYFh6ufWuUNaNV1yfnXDorjWmeJKZVvPTyyUQAfXnzdRT",
  "key33": "3HKP5bgAFaWnVioKDyGQYJmVLBXAMucwB5pkZgzdEradyGfoM8rmHMuyqg6UWP9M1vcfdwrAgoJ5TGdfmR4zy2F",
  "key34": "65TRyKeMQCc6Zp6tYKUSJDfgLxcvvxggaR6LaM5HTycPrPieAncBpkdYoikQHWUfw1X67somE3gjxBfDpX4hAAU4",
  "key35": "5HdS3YdXXCZ4FVkVTFBG66QMzcH6M9J4bWYrFHdvUsX4VmBQR34qFDww5NdiiEQWtBnFk9sMfvg4s4fPeRmaE7jL",
  "key36": "4T8wKZc96Wui9CE4HSF8iYZQTYuZTbQVe2q98Q6SkfgX6JyQdAiM7GQZyV4ZhWwGMSxLx744bhvHr7WSFe3ke84S",
  "key37": "5CkiF4BFi3SGnpr8hLgWeqAuP4pPXSV5zeAM9YaKhHyAhFjBXvZHXJHHSrZYtzUfpNW7H2rxQUQrhqdsxbrTRp4w",
  "key38": "2gvCVkzxTr73TKnK35CL6bou4yvD89GC7BUBkdyM166et9Z1DHvrDieb22ghWkTuomc6xZty5BHfsf91q4cFmF6M",
  "key39": "4qA2S4RQKALdMBvnRFGsBXtkYjMEQLH9ZtVxc2dvA4Sr1dybAZeDD6iT7fnnpHiLDmNJeTc7CJCCocLryTrEfkfL",
  "key40": "VQvVjY5EHrzu3E2mdS43N6LfN8uuNN9BUxs67mWcqQdw8Afc6hoW5CMffYU5zzbPjoMypG144kukBnbHM6upRQd",
  "key41": "3HnhsHwtkBdomru39q2exGQeRv4QNPAv8niydvPphvq7y7Ap6rWu5Cvxk5XsMHBgVdYbX7acmAUBLnTXazJr9pfw",
  "key42": "64YVE5KXZe2q2c7sVaa48A5pLDspZrzAVQ4iVWoLw79hdPmHXcaHc2mZ9u7Nh2Vucu1aX49SRLa8jWcwb1FHdows",
  "key43": "2MKHwRMsUfj9FtmAFByGJBVAmeM6VK9jHxvvc5yhPH3LWAmzrazD71FDwv5nWKx12sZVvRASkU2qa9TJMguWv7cp",
  "key44": "3xu8pdM4snk6AYzTYdYo9sPdCDQdHghkJR77nuZ4wiNKR5NRd5Lrad3m6gjQ47PgnwwvvsusFv2sQzoadMnc8hcH",
  "key45": "496qunGGrwjyc5to3h9mhyqfzEiuUjYJ7ytsRXX6kDqM72cPVEvdNHzRzQqFVKH3zN17hCSfRfZWJZPaqoU7uqsn",
  "key46": "4Dm8i1euuPCPpKZ9M3QGSdBDNmBjp5YQa6aWVPxYnMsquTobHK95kxi7Es3UkBHB4b4jaJUCTn8Z5Tq7kkgvQhmg",
  "key47": "3L3NffWmdrXrBjC4u4xSvpuGcpXG8yH32iPoaVTcmjGosCJP6GvXZ5Sa4x4LiunVWUVdaEdKVua5TZsU9pKKbQbQ"
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
