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
    "3NzepmPn3w32GVf2Q57jFFYjW1fkJJw91bdvPGzXR6jDKmXpm6hWCpoch6vZv8TC6LCs6KHV9G7HnTZxiQYchDao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1sobGs3XPK2WeMpP5Z4W2pQ2Q9D8pQbLAhVDPKrjqEpqAZkEyerAisFpodfLWdRkZuPYL9XyRw3SiFBhCWWuLD",
  "key1": "32m29HK9SVu8EYtRDYv3kkeBJfundHMEm6S2wEqQDtZw3cF4gWQtfMy2wH2y2jTJiXUEiiU1JYip7417CgNPd5eP",
  "key2": "3v3SsfXmoJeFESWUbsenKAm9yGfAjmKu3Qncvh7pv5aS7CzUKJPPRW9K9s8Nm4DTT7h1HA4q9da7HZbrhALPAMB4",
  "key3": "34pn58vpY87i4jbFqHH44r5ghJV4PkeAe2ApLJ7ZCi1qmvPjhZc99JfoPnD8XZmKvqTb9LCRvMGwMs9R5x6wHNur",
  "key4": "45tkkfkfdNmFuRzfnZ6a1WiAxjrGqpGLG2zkZPJtwnSvB7AZrYvMC2khgbtpVjoyGuAAZuPdFKRTG3z1cNRgVHq6",
  "key5": "57XKW3CTTXCPwxZPHiV6q22V3n91PUdFW3fBNcsA8wyTM5sMz9PVauDmf61szVgqakRxRNFxip372jap7XE6Rt42",
  "key6": "2fPoVr3TEcpy5Tydbi6f9M2NiVP7SLjVAGkEE84HdY7cEsdEWzzfUysfDABKQtWguU7gaEGAGJWDdvA1kAGxo7GK",
  "key7": "JFd1tD91t2qYCtqfjU8ES5aHq6P2ma7A3ZX6a9LMQf9AgXMFuaUPZUzZr4cUA7LsufxLTYRndrN7xz4P44Lv6si",
  "key8": "5SCS68oTto2jDDseZH4fhVFJvDcqxMHCqzqqYyRBNDDy12RAwR8caLCFkKvJ4tHW763ggRnf8Y9jQNQ2r5JZ3rN5",
  "key9": "4M25c7nTZo9xYWi7qpT3iGkML68mbYucBtRNjzCozPMyzjH4AAAWs8d4D4dCtb2wYvAT8W5cEfnpwHFmGWvPaurq",
  "key10": "3yeJ1mnSmAr7iKQf3nrZbDBbY6r1zKE2Zn6nnYrcE7oLtYiasf7o3h3nyHPGLUMpWRtX4NPY5hfkum7ax7TnnPtf",
  "key11": "32k4bBDoNQZJ8cPL9QdmGKAzngYs2MquHThAK7RJvtMyoD4asSKeGygLnmaxAcxNt4YhorA8ai8a1S4vWG6EDsbd",
  "key12": "3heQG3SZAr3PXUMj54t5u9VamAujMWbNpdAaQBSF8ZDb9Xqg9Tky8R7rXTLkScCURmymMjPhzkJu1x2KttF9eMEA",
  "key13": "5QNGxHgn8YFwa3uCcku37VWtRAhYZkei5VeNQzbKoKVb4rhRQ5GRCBg5SiFw1ynJ9UtQRmqKxeYUEj1jQWVXCiCB",
  "key14": "4U4tvFVobK52qBqNc2LZyQkYgEyBHs77usAzhe32Bv3s5UxGcTtX1F3sJXAydsKBKfzDtYE172iTLXLsy7SU5hZX",
  "key15": "5cmRrqVVNNq2y4z2F8r2DJFkSPV34LZ34MiLTqqqAerFt7gTybchSe5a6AWpDrDhJeeTHtP9ueTTXQWZToV6vBUa",
  "key16": "5rwCMPipqWMJREGKi8fPtrkMfvbsYLip2YUAoCXrcWDfxznueHSuhRtQrKd3cCuu8DT6UJpfHvU8FcMjdJc8df1K",
  "key17": "3suyrjdK8J2Y2SsB4z5E12XBjK5k4dwxPboydqFMbJps74XAg3AyxhZoje7VNr9Ppmay9QHCVFsCSTr2R72Z7kGa",
  "key18": "2uKHWRyP6oBJcRAXHnryEEECrYf9yL87v4tY4mYimDsGFz4FPx7css3T6BVcq6uSvaDijJkQ45hCEZTY7VSKe9A1",
  "key19": "CQUdKi9bcHTw8MhGSYz2CPeVCrCSBPNcsqxj67qopVx3uMxKszsAHyVRJFLkpzoR2pEhdFb4xd2K1RDa1XUPeHb",
  "key20": "wSBMCuXwQVSbvzU9T4hyGYA1SsaMkB3wNj8ZEocTBQ47ofbngyrcp3dxzKs3CTeSYqdkvw7epYuZWxwMiQLkRui",
  "key21": "51CtvSWoKu1re23CiR7ka1HaL1Q5NJCYUW1eyDfSGs1NW1Q2ACnvvwNjnidRXv8qzdpGpHTFCsdzGHUvo6Q8WEUz",
  "key22": "2bYtVY7KBkRz2zby9TGR1puGMHkXSxGnnZ3QT3L3jNtcBytbpJkDZHtUQqk5XnVLZLxU5mCmoVkPKucgNRUX89Ld",
  "key23": "4jrRWwoDKwtNQRoDHo2hwoYMHSUFiQbjJBAbUnURZNgwX3GtMoPaXzNTSrf5Ekxaf2N1vue7KYMiaut31VxZWBdH",
  "key24": "213qBBaMnaoSb9a7SgNeiyduyYj4tztnUoDzAgbjjHnSGE4d8Kt9MeiE3oezMS4H7LQsVXaFwVVVxXHwAf3gsqdZ",
  "key25": "5P2t7rkJUjEMj6uWfwHpT5dfCGopcXb7c1LSs5W94TchXkk88JeB6vown21gYQeikyzDxUG1CeCiqgKdvTYwAP3i",
  "key26": "2gPPrjDibgXAEixL7kep5GLtXDQeEFKDg91A7iVYkyx5Cvxd9wXbwBN9dZbFvmZFCL5b5EkXc4gvkaZMawQP7knG",
  "key27": "wype3GCvsqtihAiFpGAEcCo8TH5xSyxKymcg8JTrXnGzHpvahoZqzN9cZZ7VBwsRrYCTd8TmY8hpzT3eJEUjqpd",
  "key28": "Nk2PMo1VstWhupSrETeMwP9Ub9AqERnxs6QMkVHoMSiEdJk2rujB2rr5rkgJ39iuPo8swHky1mzR2ZxfYs2ugt5",
  "key29": "5WUb6k2FjH8RoJLxHgWiUnZ15sSsxHU6QhkxXKZbTWqwJ2vnBdk5iMN9e2hGSpP1EiHesxJMLKWnBTRTKUvyX6Cs",
  "key30": "yTuH113nnsDdBvGmgrCcyhjbcY3jdM714ybT1gsA2YUv52cDN8c8bjTtidzDdSLyuBkMHZCjLiriavboKVh3wpq",
  "key31": "4WB3VRWctsdnzpqK1ZqJLfwjhyRzJtHskW2BSxF1SpMwwV49WUQkZowJ7FrDBVpEeDtDzdb4jCgXXgthMDrwRmop",
  "key32": "2t2xuJ36YTXkXTY4veEPCKD3DMqMHjeNDvvR2h1g3s9FwyYjvGN24ZbGjMC93vho4GQCxzJM5tcieYkGBVKUBZtK",
  "key33": "54ei98sVd2WEPxg3R7Hf91TTkbj8Kq7jijcK5kL9SFcZdZdN6bTRmtqtZEHFx4kTwbPGc1ihe4WJ7h2evgQDgxPQ",
  "key34": "5Sw75Dr6nFd5UxKQNzHD46bD1FTx78hJbkHMuuwmmiYt3CQmiNvuULHXf68EwB3YZsTBushvFApQrf9DjoMAnYQ3",
  "key35": "2CF51PTx1DmUrgCrrXsAWyDkA2pQJVKLN1hm9t7jEpLMPeN7sGcGHeAkcgnJDXVy44Jz856K5SqGfaxyawD76bhP",
  "key36": "2XWxPcawGbCXVYQ4xEq6AGNh2Pew9wV1vbsEorK27uLPcNRZnKeZ5TM8Fcn2qpbwXFdViEiq36qXgzUbtfBK6Rgm",
  "key37": "5Jpmqd2H5cKdr2otgh8wR4uKKJWAWzK4LqJ2DoboDs1XgS93hmvcw5WQFFSFCpo3TmuZySkvJbmQWXjPZhZjhytQ",
  "key38": "53LnSKtbkhZ3pKKSYjkEzpaDM7x2aDMFAaLpkyNaMQxbXpTBPJ2uMCKfu3VFePH52aGWLAU4QPTb5bP3YecgyMHu",
  "key39": "2BvTf9UvFZSekqryx1fae7u6q5ae6sgGaN9AgNVrfCYuwPxH8iu66xnF71idDqXN8WZpc1huavnF2LzGfzZnHyv1",
  "key40": "57bq6xTHh8gYrJERyWqe8m8gqYQEsR76oo14CdV84Z5bL1gXD28hx3a8uXQT6MsRcPH5kxfSW4WW47K3HAT543de",
  "key41": "FXCe2N49ea5Z7fPXMjjWL8TTVcakJVaHrc1TwzKBmNv54VQhLhyW46TRQdkzXJL5CAFeUyNKaDAkm7sX9aQy3De",
  "key42": "4qmCtrgB2sG65o9doKwc2osEzimqKqtd79bMvTLDbH2AakJPwRRgPA4jXk2vVKvnTJpBpBM35toh9jrfS3jjYSpp",
  "key43": "5ydZmDoCn1beKCCdPtpcW2uAnJf3RTFEHhae7ZPn8LHCgr3G9HF786hNgYa92txf2quiEU4L18kiVxq1yQXeewJ4",
  "key44": "gFx1rfhYqDE23roGWFAfTPUAELo5vWz7YxwUY7YuXUsYPQc7xgaTVRMoc3mJtwnCjZiW76GD2pRoNruDdxv3PVy",
  "key45": "5KzG2tjevrDGiTQbtcdBok25egJVBCk2GaB8KCfokfGnstuGHXHDuME5fkmheUPes2qjLTisHVJQGZc7LnKU5bVK",
  "key46": "2wAD7C4RJPgEoowoZc2kTgxqnnu5sNP8Vw31gzGsbRo6mj4KURcEMSm6DvVy8U74Yx1z6bGkho7Fks7hs57NZu8r",
  "key47": "4P42dg39cFqZxNzm64tCmPKUSeRLsoddeGXSHg2CfhKw5Bnz7CjnqYjJwDFuSkbqBfVcxEGACECwbFntu3hg5ojQ",
  "key48": "5UzcEoZyinpPLnSGLHZBUkSKm5WLpMxdoacDiK19RjmLxs883NyLSjxtzH5xLo8oKLMJGBgMSEsBALk35DgcfMeU",
  "key49": "598fwPtHzn2j4EUuSyhjwvwoSRuc4otBiA6nCNkGHMjq6BgfxGo2sTqUbVnFf2o3vA8X9xZHc5HViq5djJ49v5rJ"
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
