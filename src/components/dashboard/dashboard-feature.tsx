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
    "5d4YejgLr1aVLua2p6GJe9HoxawSYkXQpPRmqozHPoQbSjWfWqe8W2WUdiVJPoHqx1N4cr3ZGPXaqKhyqu81xeam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzKQMQZJbwjRrXc8Zk32UoNZcFx9DipWz7GmggYAmrG4cjWDSwTXnQwZQwbpTiTHoeqGsfAUK35d2YfnYzwpjnA",
  "key1": "2gEms2WB13T6CQAX33vy66qKMvP4bMz9MtnBprPKXENeqGYQ8vKPKRp6F3CnkKgHMbWYjXzMLqKjgR4fXC36ZG59",
  "key2": "3avVzK7khNtQ8bASq7fW468sMZrPtWWyRs9BYDP9fNoL1To1hVqqAr1UK5VR6AQbvAY4gFVXLZ5E1HbQckfcFga6",
  "key3": "2rmmDLMT8X5QPvvRLkueXyzTWk7dPnZ4vvT6GkRJnH14MrULeUn9dTdK41UHjpc4jJZVQYoWMzjQJB9F5SeK63MH",
  "key4": "4UqgXoPZg3uio9k7ad4XVdLSu1L5qshfYgy2TW94krDe5e3LFZuu8WDhXFPpbU9m5U1wdtxigFwev2U3D6akxt4a",
  "key5": "jgw68YEYPFeHZ4SKWdWwJpa1SgHBMfT9PyC5QTyzTeBZZG9M3aQdKAdtWdta89kabXxpwt89Ga72dynNeCuhD6r",
  "key6": "qYEWsfCqWQe8gg1ZoLjzuqAGUVRrPmPHt7GYxQHsFbbURdxNKdjBm7y9ySpZpau3L1bDL8bA8oBwZc89t6SWbCY",
  "key7": "42HpTKHf3bN1cKsvEPaHQtVguL1eLoMcr3kDG51A6AvgdR7Q1zvyhJrQYxpvKJEfuH6QNQe8kppeMh4RcuGpwHfB",
  "key8": "3YCZfCMdRP6ajYi1acyLcmTbHWhDWw8XW9LwJanqAQn4cQsqWXaoXFk2r3v59wy5rqQUH3Jgw4yt4ztyAF3ZxJns",
  "key9": "2HLdQXKmDt6ZzTCrTdHgcwWokTWBLekj6Q3aGCiVXrwQSfHRUvASFkre8SCzoRdULjvUBQwotmb9HRr5YgQs92cB",
  "key10": "5W7deDviQWSVnXoLfoMsRaqQHBaYWboLrR4NETUj6xr4E1imezm6tae2jTXWBsKqhRGZmmRVo69DmwJGbTRPEmuH",
  "key11": "bvAnjb6iS9yNjFng1on2S6LYc8fdhBCmGxALBwHDrMvEFei5TbfDRawq8EJxwWnqBuRboLfJwjwfEwews4WN1Ae",
  "key12": "2MEvNuAYKj2JTCjfShqfWDRu8Goe3tf9t5bFTCkmz5MRgY2BwKNhAerBZEtE6REeU6B7qnqooxcJbaVwJWjgUeuW",
  "key13": "ySN86bfJ7bJTegwy6dE5XvryNErxUZrR6iqmrBeugTaXUiDyiWYcN6X78VR44rvmXuJ5iP5QbntJPGfqYmoCCL6",
  "key14": "28KSZirR17ZnqLzo5Gr9J4A8mCy8SohjGi1fyDdFEqRRjkTbHHDbKpxUqxhLNWcjjCoSpRVUvu1Di8jupjqx2ura",
  "key15": "4XrkhbVgXzaT3nxmi2pGyDav3NzmtBQL2TUjvX4irs9hX15rJFP5o9QDyLAmUUHqnkrvA1NmJmyq9KRkcnBGXWSz",
  "key16": "31YTJPPVtVMvweNcXoPN57n3Pp7FScK4FNT7Xc5a6ES9n43nhtTrELammzAsrbC8fFdRoHLLD7e13jjNZxB8k8pQ",
  "key17": "5y9d9GBAiyRwooqoP4se6Gjt4tDDMVmuqhoL9pbCBAtUa75576rwvTRzF36nxKaXuCZ82gqYQxbdkp6yeW5SWEh4",
  "key18": "2N8ULLUAXdjCEJmTvA6Azd5bvTDEBV6DEKKY678hSVVUES1u8zq5ok3yxK6Sp1a942rJ1BHkm4gVAbsTG7axcA3j",
  "key19": "51YTYt6vtMXENUtNcA5rG1QoUC6VRRdpffGchujxWJytatYrCBZkBMdnVwbeZ14xbGB8zScb9LJfQKxQEcz2YYgr",
  "key20": "4hL8ygcrCepWG9gJ51RQCbfLSJ1JepMv5Jr17aqfX8BeaGgRjT1ecitm5oPcaVptxyjMTvNGDEPoKCpzPScRXBWx",
  "key21": "5dcbDdUaLaw9EDo7SeiSNqUDUbhAcJ5Yaqg4Q8Hm6wtrmHwEgTeKqrhABCTDUv6rYM6m11e936vM4C7goF84C74D",
  "key22": "pwSHwwJr4yv9V91ndVAE7VjxFmXu1FLN14mzF3w3iJcFZdKomZBMU7URQ5d4foTK3yo6Y1i6Ltd3hRM7dYEApCo",
  "key23": "5mFi4KdxQhQC8FxoyiZe66QwwR2fvrhipcprTDXiKgYJKA3cjsPBQZvSmDegqH8y8cKFyMdkKTBWvBHKHYhHmCwD",
  "key24": "T6iAXxep2QArikCr8LEP7h9vmQhUsv9GX1ZRBxbaKa8QLvhGEP2fNvACYCaTTvBXXuexfqb42JUq1SmoJV4njJh",
  "key25": "5K4Yh3aFKTuFVdxrR9rX849pykxx2hSf7ApKoPxziQdvjFZ8SpZERCnfzEUX7Jotdgv36waeSEwCoUsNQuKPxA5P",
  "key26": "3HiHBBWYukS7QTeJyN2Ejkj8K2hwvUpa4szcyP1ZBwZNzMsCUhhwVEttodt9ZzjBCTxMFMkHNEXcQoAPgfepTnfU",
  "key27": "3LkCfdukJ8RV2afMKCrj7DPFfQhhLtcvNxb6v3cz218v8DuzCYgRKVkv3GYkQG3q1MWnpBHwf9AdwX9W9LsX3GES",
  "key28": "2XAfQtr7PTD2ktwZEA4V8G1dg3GaBXML3d63z4stdriZ33tWJyuAVdZ4Y1ozorJpYiH6kyQLPwP44b13B6uF4VGc",
  "key29": "4o6JGoiWhXbowT352gQoQ4wNCU7fdnJ7noNyU4pbfm9RfyKbJGJqsqEUrdpEVpNkCuwLMDLuHbTEmDPSVSTrWdz4",
  "key30": "67E42jvT3RRuW56HDU31ZiUnmaCtPZvVoNFYvVTi9KQyNXsrfdVDKxQ7RoRePdrpWvABHfvzDj2Cn7C5ggs2kuHh",
  "key31": "32WZEcN3jBvmr1xKanqU3JCEoRthAMsqAgxFjppzgX1cKNGaSWsct8ozwpVMDG9Zdn1Wzw9PLzTavJdq9fv1CwRG",
  "key32": "2VGRYXhMVpgcruKe7W5iFUQpZ5wfRJcRPdFzB91awJj51GYijcAAx5ndXuPRwEnXYPWqYRperYkrF75QRVQbQ6Ez",
  "key33": "3sYDSeKsueRb3ZuCDcQ3JWF7y3d5rUeketjWoeadxsNn5FmrJy74wLJBu6w2HcSBaNA3tXv8V7yKqxznXGqdHkWR",
  "key34": "3tdPGURCP8ZChLSWoK6qtsjtmA8BUmvjTtUYvEBo1t1HRuh1qjNxtF14DkU8yVstDdHKTQ5hTjCwAiNdvog8FxNj",
  "key35": "5QHLwBvqPrL65Xdn6cJ41c4WrcjSXwg6YSFZs4sbik46ogQPXnpBjUTh5n9MNtRonF1j8ybLNSW5ceS9fH5PzHDY",
  "key36": "zGvYFdiUgAh8srMDKxkFF9y3sBHHGqc9bTVjc2T6G7MKZ7eYUziLgyJpHoNbrXt1PWsfYVaZbe9EjnXKMVU55am",
  "key37": "64ou7LiiqG9jbzGd2eWkYnhbCDnbtSqkZJcqAq1FwTtRMkDf3SBvu5R9HbcRtTrYnSiY7svsTQGCVhc4UBy6MjK2",
  "key38": "2oVnGBV8QC4ZsnZXbHbQVeemSbVfBLuU5uNH5K7GbCtcQFiuBVH87BNesdzETfXkyVmiP6Zkwu857GoMEipbvMwe"
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
