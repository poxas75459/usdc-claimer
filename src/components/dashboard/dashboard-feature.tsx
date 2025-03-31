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
    "2Q2B3PLZa3Am8Fw7SbRNaMFpthGowDZZW1iH4TmSowwNTkr2D7Yx7mjJkvKz5D9MHUZzwv3Yb47X8ys5DPZ3ZRxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsuH8NVicPzqLyJVvYANAsUKZQiNsyuFWpy8pJDLyNMeMVsTAfJs2HA9G4ZUGYjnCmvwRPeNDV1TuQTEdhK3XWL",
  "key1": "5pVcC24w4mB9ZJ3xyDwSSXFfnnbnFqYBkoK5B15ZTnKXg9fJF3AKA2ppwJiRjyx3EH1oS8AACaQm9YLLzymQhxuT",
  "key2": "5NxvHr56b1KEToANTAfDtPib1Whw1qAfzN9gXMzfHQEWZYQ139ubyZCWy5qywqDUT1SUzKVfSkqbTQRfLxpdR95e",
  "key3": "PdY16tJ9FJki1jwVntsA7AmxQkcB2bCs6vUi7KsQacKoWf7Y9bZTYWMM91zqSdJ7dhxJbR5qPfuqhuCSdyVEpwf",
  "key4": "38UHsBXwdubz3HnLk4195NZ1K2Pn2jnv9zogvKVx32EBZsC7ocrmD4thZF69Bdh3yxC3SE3KPR7qPB65ousrTP8d",
  "key5": "4781WhRtjadCcvhDHYrisN3VkuHa7sgtuhD2DGvKQ1WZCcRBHsEfL3KrUESSYKiWREZqC1Kp6jbF1hva4MJT7vQ1",
  "key6": "66JoKBTQezciCjaTciwqJm5d1UJQr8XsLziHQchv19sPbfdGv1pwfYJEiZwdgF4PGoRHhZ15woeFSPWskiXDxH5a",
  "key7": "5jAgoQvocJQfYRSe1VEKviPEhLSPDXcRFj6TaGJSMY3obDvxmxy4ZKHA1tLuUBGWWFRUw44qh17BTo4L7gYUMkLH",
  "key8": "4x1i6BxMEMfpHf5R1RZPw1xaepzEfaWBsRbJYBwefX5hZPpbMQv1cQqXjGGtC5iGyAHbYLCdWiKRXvSepwXBCttL",
  "key9": "4dj67VDxdTRhLSJjGyD1aJkEZDedLJNy2m6gUbderv4xUQkS1X4d33yxwDHy3WtAnTbfRyDFp8cXH47ubQmgKXFs",
  "key10": "3BEsdg2udKZJkLj5aTUEVusD5PuVGiXjMnuxfXfhZJvgLAWaBgQBc2VoZuwDQu18rJTK5kKweiVfcK3t4f8g1u8N",
  "key11": "2qWWSGKnFhKT5V314DLFAuPrFXNhfjtdjQqx4CjNa6GpZziVotKARuLyBJm5Urob8AHraJ6vEsPSujwene2HiKfb",
  "key12": "49h1mzn3wn671baxgEUZPgP96v1SENEARpB9ZcgfUkLy6BHExQKWw7gg3eL9bguSuzwFnfdJJGiHR4fv2rrKeVPB",
  "key13": "WkGko4cDyTfEUpUNeUYfEYLJgdygDXxsfkPVTNGxHpVpfhVkfmYdAyBu7JtSEjBzcmRxH5Ksz5K6su1eA8b2n37",
  "key14": "5M54zqujrQeVcnZgcfGtDgN377iAgzrjHM9VFfV8nkodnDk5NKTZzSzeftaXpuJbCtwpbAApLLyygDGV8JFKy58H",
  "key15": "LSpnvDiuTkwgxCfAnRSfdJ39mYjyzg38mvV4Mw2B2eYo9jamNLTSXH4xA2KKnZ2SboCZNAhGa6arX5wFiEqcwZY",
  "key16": "3C5PPvy1gfC5Y1WqhZxhaYz4bZft547heGLWXgmHzx2ouNujubPVy26aQ5xPQk5UxsuSGX7o7tsJFhyyXHB82XDH",
  "key17": "5AyxTwURoEwyz3D3fsvr7Ev2BX4XdwKdgX1Q6p858CXWwbg3ydRRNQaErJt1S9VNf1TpPZEfDE1mF58t9LdPrrsE",
  "key18": "25ZJggPQx4D4bK5qHmhVSDrDLwAubmsUQxesHrcScBofcTU9QqzSNsEc33x2HPscpjr2bTAphSe93Y2FhDUXpNBj",
  "key19": "sjMpjpyJMUNwjesEAPUporqy1dmpSQ3hXSenWVU5iXtF5B2GHNJGiaBfXir44kJkDsaxEbJHRiMjFBCNgCNvA5q",
  "key20": "4GmFW6J8G8ua9cKCyM6ZNX1YzN6pg7jbkusze71aPLPfJhCRDmThsQuUGv2KxnVVzsLm9MUjY4ST9NFCEAdcocEe",
  "key21": "TqRUR8sRhqoJTjRYa2Q7fpMjtZiAgD9ArQA2qYQpLscGHqd9NSYzpFSeA38ZmmVhyCWEmc8PdXusgEesq9W5q6L",
  "key22": "4X21saS9DCrD6hhjSn6jnPWc7YgNCQHvXfPi6owJ5zYyMxitoEcnw3ewdPUgi2G9tbn9GRd87XrESBozxzAn2Gr5",
  "key23": "5Fb4MrKxxoSNpLpvQDGaSu3Wk9KU4K7yhj2KQ1mtfNFCDbfZSmPsfECJ3y1QPVP5driKqL8KGyNA9hXZWsUui4xn",
  "key24": "2z4Q4kTTj8X97y5iFS7T6SNvKsndeMTQAGMS7RJMgaa9q7jhcXJCDn6ezHeQ9t3aQDeKJinXmWsAtCjyBkayiomb",
  "key25": "2FL7vDw9VER1C8qHhohQsKxYGumZXrukk2cEVZcU4oR4UmBXiz9MULzHqHMDJEgTACspQMKuRPmCLYMA9cWZgyVg",
  "key26": "3yqTszfQJBhwHNmT9Qp5Xu8W8ntSD7PieaFpxetUzWpkV5XrB4AeYEaNTrZmDDRQEhqMZiJDemof5FMBjpGA2RVG",
  "key27": "q5o9kBFTP58Sd3MHbjspr1ww6XbVMC1o61KEsrEehAYsHXv95EoHnN9k8ZxvkFnW6HLmKBJe5ThyVD7gXcyq2Kz",
  "key28": "poEvMfTgTMUQz5m9RgsuMd3o86Rf9aeeCvnTaK8kDUrmPzr8wccCqsrnqofL7qru2JciWpNgpyDUAjx8vjVsbkd",
  "key29": "3xohCpvE8qtXx5iLeXneseqGoBYbHQPmMcet6ntUQLobhF2EyTSc8tTyKVoXYhybVwHpouTTfA4g5pjdug8Wo5Po",
  "key30": "PjCrQXvdd6KCtBmCHypMugDQg1bLzKd9vBtZ2BxH3SCrBZcXMzDzYP7DSwDSoNrdkiZy799JurrCm2xekfCg2jH",
  "key31": "D9xkG5j816weAjeHnNhEqgLW47JDLhREHfwrZMYVqnQjaUZpsTdGKQ3yi2bKJBLH366s89tL5VWkYCEKxQb21ux",
  "key32": "2JmH52axJDZFwrV7Bs9VmUv9vzk63GADDt1Yi92ZqBPDcmy917Nq2PVc6fBx8QEbvf6sEwf3CCkCPEEbCQ75bSFL",
  "key33": "4RMqWUVHxCzFyGZjMceNUVvxM6rqpertviQB3niY8gz1BiXJA2ByRc83zNLoHbBeLHRQ4FUGd5Y2yps7Crnybf5K",
  "key34": "33wtPwg9JFuYa4WUMnxFQaXyPT4tKk8fn7XzQuUWfJPkEtvKorpsaSVRuKLZR8baK9c7zmqMBxj66CUh7u914RiQ",
  "key35": "3ZC4FaqqZ42EUWrCUmZ17CFwVecNuqk3bxrRR99xrRk56o15ryoBTuKpDSQn87bEZwRaknwZWZjTRMixAwqmRBSV",
  "key36": "2S5ghcNQVDhRqBJQDDwQ3YXdf4end9pyfhCQS9ZUx11yL44DdDVU5k6Cr2w4eTJ5HaWhtS8y21Cr67oKRUpSknhN",
  "key37": "4tp7Fo2hFk35UHjtk7sxZ4uKVY9jk7UYEwH4TdhMWR7UmAsnhPVhLfm9o3xfenhRrpozXRYdymxFZv1sEZU5dNn5",
  "key38": "4Lv3ieiBm7ygteBZF9KqDfbKp9pSw6HJcG4RA3NtoPtfY9xgmVHR1xRNGknzWbUMaW8bn7NKGNYo9xfDevAUFCcF",
  "key39": "3fZQsVWRPa6mhxYxnNha2aPrM1KyJ5pr8rgdq3fVPi4G9pf76WFGYmQf3NJ7F7W2r9EHX4MeF4crjpCjHdEZbogY",
  "key40": "4NWNDqP8NUxps54xFAYmAwPnhQxHLvHsqK1TjZ7xXGCyXLL5ci4stiLS7a3udKFA1zQ1bqKBtJAp2iXHPRQ3UMMG",
  "key41": "3ScWGJi3dDqEKoRpDXELnEtK1sFKT5BCdrpvsQM9wjkSWQP5qdXpSK2t46XqzjLj5vv4T2bMsXmJwEaKwEhUANmY",
  "key42": "659c41j4Sr5tv3TFfXTsELF9sbyvNnwJ5RzsNZ82waBq63iLLwRgoUoCMLGgkZfaME4VQWxVkFYM6N6ajpCvbQBF",
  "key43": "41Xj128sVL1Zk2W5LWpUNNFryckB5Jn89K6hsywt3wodr4z7Crq9dx9QDxwdx4WB4TYXPBt5BMp1RYxGUD3g9jbw",
  "key44": "25SeXcUEq2WjTaE2p8gCevyGq19zPSCPRB2VmnFZmcxejaPRe63bb3BmmXkwH3o7gH6HmuXjjH77x23aWergYUvi",
  "key45": "WrcXX4v97r66iar3Li2MME2vTKTPZpFsc531q7UoEdx4Ekcw4tMxUFsRRqDdAgDwm3VwJocCF4hcUtB1pRDUVrL"
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
