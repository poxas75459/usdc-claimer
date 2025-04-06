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
    "5iSm8v3h8VSJzGawvb2cgQezxhkrw9qQ9aWdYpna3jrRJbaYAyShUiRKvasD4WxUTw2f1pYjVtvkL4rVqx2B4k5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tFvMx2pp9nTVRxcfKAF4CMKiNGoCA9WCF72DCLykt3GLuVf8VPk4UUUAmgvu5Gf1VihQj1DiFuLvTncn43jA7HL",
  "key1": "yUrLK54b9STAfex5fpDezjrbQX7udkj6KNV2vtya3kcDKHuBZvojoQ2nDgEVRebPqfKM4jDkMTv9Q5PCT4afo7f",
  "key2": "4DkiUmNFWNtsshxsp7FJ23GCsGjds38ubyJjWWgabubnSeszNVW2GWPoo1crvG87Nae5HqoJwBXCLNEpYX9MB4jz",
  "key3": "24DsUAPmS9T6H9GQEpGDybxp4dQbnqY1X64vqzVBfwRRMkEEpQ64mgRLfAznFdaKVQNzExurQvAmbrnJogbd6qvG",
  "key4": "UWXnWojZqJVGpPDYXE1fguECUmZG62sL4677fvQAZA1ZhpwmD3vCF9xm6j6ffai5Mzdd144GfyeGjGDDfYjkjUt",
  "key5": "z5k2EhxAXqNQP5fkTE2xunJYbF7R1qwgcyXkFqdxFGMZdxRTGFL89unDGfEkDDydzwrfrygeM7cTCTmxoe3bnkj",
  "key6": "8ZpR6e8HyCGYD66Puh9hQy7X6kmW6Xw8hBBtyPSTk3Aojp8FoSrBnqc4HvQpcYzMYB9Ah9xjuxUQq9sJc5MCqsZ",
  "key7": "623zoBeWofg4CyhtGGoZmMnFqobaGw8roMpwafP8akvEG5TjgAW92CNW8cZMZLgDzVtMmiGVTUrBKqzQzuRfYCFX",
  "key8": "ukLncsvA2QQEwdkaHGe7jddBfS7Txf2MJZh8L5gToNWyQC7s32ymhgxUAKrqNX2bR3wYhVzq79iYpeTFqGqdNYc",
  "key9": "27Pc3tww1MZMSDetgf3AuFWxeCPrFPFkRAWM9WUsD2ymqBRqXYmz81XfxHJB9V9Yc5C86RUAyHTorFfXWCuNptC4",
  "key10": "5ZLbHSa7wuphHymbtShXRWiTznZ11hZN9G2Hh3Piz62hZ3tFhVTtqszB3cJMJpsthJmCBsenUzWQteY2vFUWNcpP",
  "key11": "Hb9tpc86MjeSFNAhoXgRXvg3KEbUKm2pjvEGnuDQ9xLcLLiWiUSzinNzrnNa9Huq19Ctph6edeTnA1mFhYPctwT",
  "key12": "3xtj85q1T7MF1eJUQN1Bf24MxVxYUp6YA9iGL3DBUAXu7Xozyy7XBj8cCt3Vv3bw1Xp1WPn7D1nzGTj4dg8fRASa",
  "key13": "272FsHXbDFbfdVfd56qhAdWQnHfxwE9rvUxXEfb5w1iTDh5ucU6eJKaQpADhyKbKBNW8YVUJRtK9wTKNLowf9dcJ",
  "key14": "3e2w3VTgKDsYXkwJZsZHvPs1KDZZU1EyDycZvjPtGgrTUCi9AYMAcR1EpU9AkVf3brP25DVyjJFkjjuxvm8B4MkG",
  "key15": "DjNKAfFQVwYKK5LmLEEp8RdVDAbjWy8SnLygHqAhnY1QHaQzGbgFDYPqEkQ8Aen1WQ1FAu9pgKZfEAzWx6DZvAo",
  "key16": "1hSfFHZi7jPHdu6gCX3jTBVwb2xwNFaU4LjouCXz5UNoMAYPgDZfLw5ebJ4M7MVduHsoxVSGfveDrqQcfR94rpN",
  "key17": "5ochBoPx4ThRPNWXGydWkYKRRph7wuGF6BV3aEjq9c7dHE1bauSS4W4wyuqAq4ek5fkF6MQVGCkbngXkU8GUgtDs",
  "key18": "4sqHCbrzFU6eLdfSvXZf7CBbHzuRGVbiG18HTQAKT7bbB3kR6aswFDwqFVjSLQdDzwGbSgsiL35gKRcyKWz9c2f5",
  "key19": "U5FiCtRdwDuNSMUqkrPrC5m795u1kBb4BSfVLk4puEzWkTkTpkn4cgvqCTSKXDWoMAA9NWsMvGZY78VsZcCnMGQ",
  "key20": "5Whx7hcaRW81b4BwunNbb6qU6UVd5NwFULXpyqhJV35u5xAs6fFDnXLPZxyrhpZP2BsYVg56QyR6oSsDV1GjCTf1",
  "key21": "cVmqhTHES2dDWmbHNXPm5sKjSDbBJg3NPGVi2ddyX4EV7oZBjyQLbY8Ji9CBKfAUHYHP7cuNYGigYHALvBf7KuZ",
  "key22": "2VoUjqs5r2J8aFeJm9jzFDeJxd4BTrczQ8fEZbo6S9CKueCJjXF7uqdanamW4cUq8vEsu9DTTWmPChMJrSE7CKft",
  "key23": "TzeePkrbpFdqAtAiAPHwSdBRnMojAWZmSXiba4rGjrRNZUmmMj3EF8R39yUb8PUiaBNTagSrxia5yQPgcptEa85",
  "key24": "vnDTkK2PadNky4afLAgzYtnu9RNguPVjXyUuoY61FKd2ciYKbQK2C9JGj88LTdZZyZ3BCKyb5FauSGP5ZUG9xeJ",
  "key25": "4u9GGpJCEsfNT3dS3uHbQsvGLmhiRJyGFbM8YwU3bW5LLQGcqiamjVLFHJm4FfvvX3wiHndDC9HCqm2ZCTn7yX8u",
  "key26": "5rR3Hfuo3i38kJLyajJbRrc9v1p6kgDop8Bo3GiuVQTszu8rt2JWTDckY4gEP7g43Hr1ZYS3PufSWThCxrh7YAqx",
  "key27": "47FyMbc4mUU9w5KnTN6co1UwQPzPykmHswSKiNXoGcN6NNBD1zx4gMTajjNg3HVDSQBZokMaggHXCrEwv3wZgPug",
  "key28": "5Y7KecmaYBUGCbWzhqFUvfqqX6ZgpuhsBF21bCR1CE54iiLi8PwHtUGnnpxXgZKGfHanfNLhy3Ti9n4XEeWEgphU",
  "key29": "3d3XwCDvUeU4VSJ6XXcrcXRLMj1RbwVNYpdDxieqopHjUU9TUeSgFRNW6vdaBA1G6QuTXF31Z5L8KB9CqH8Ssph1",
  "key30": "61A82xgn3bDf14Z4h4axEco7mNh2aJkpftsdNcY1fKU1P3jtSe4KCRsHfxeQoxcpYKxvLUHTfhk3jjKTKziTHqfZ",
  "key31": "5aTwS47sWNhsNv1fi6hzkwUN6ugidHwkwj7STBHyWNJMTixAnfdGx6MZgxnK3T2LbJ2sfMMjKM4Git6SumaVowjW",
  "key32": "5adeei1GDs3Ch958BKeLLFL2h3CsN17nAXCwEhQSMr8n3ATH4ScN6wmndehWa6gfEfm1GSjd8UN7z96KbefoxgVv",
  "key33": "PwnstQBvCvGVunDP2cTwMDExFeqqWdRvzeJ24yDBNad1VLKpX1z4Vpfh93LRLnh6WU5ZsdwSvhq8RHSqRb14Grw",
  "key34": "5M9TiDr88hmhVDCwsbQrYuA67Sk8Kw9idKYdiTJw4wEnn5aP57QuD2UXgoRHz87rsg6ixvBQM9pNxt74rhr4zN49",
  "key35": "38EWVd1Ysd1vG5XUexbN51TPoKWGETgNGnUJuvR3vKxQweo1rZqB8zAazSQD3Qj3XkvSRwxW9C9yVemsnfzFTwaP",
  "key36": "3sTJxiQp57bB3q5sPjeqF73VzJAZTjF9Qpio3VRDWq24MonWnyAFAtwd3mUJqCdc4j5pzd9nSndFdmVnrYASwr7Z",
  "key37": "t3QFP6uJRMc5RdvTUQYVM6fVFjm6YJ8p9XPxYjtbbVpAtRDTkZWgttND9VumnPKbGGo2UCHhFnDMefY5isJusvE",
  "key38": "5QHMNRLhRDjj2xxGJpsi8UEBHsoUpqtu7Gxrv5s2qXtcpUGpTz933ZsHExaxh1ySBUQw2S5qJzL4VyiWYnVft7kn",
  "key39": "63HrwYhqBtcfhECoSALGC1Vgmzr8vh6TH9wcC7M9KJWzDBkeUFvz4eyy4b4gHkvWUfSUcLzo8d7kadHAfUHf8UGd",
  "key40": "3vv9uZBVR6NCTAsB2GsGAf7paFwrbXX4CdpXob1RFe2ye4t6Ko56kZV7TRA4RGp1fjytBKqsaYB6BBpr4vjVVuC2",
  "key41": "2xbXFbVMfq6YbXcmfzXxqruCLX7W3TDCfUF4gRgpZbqGwp3iP9N3VDFaMjDZcyXB2VJA2FRDgYoAUzojYGVipKvQ",
  "key42": "2moCQi9XUFfq32AiP4AtWGuu8hApENpybHiEcaLnNHzCCU8543z3wdMgjmigH6vao2uTkKZ6njb2itEWkYFBN9JB",
  "key43": "3twuW3d96mG4bY5DaMzKFg57pKigVx4GnYEJJxKevkdeXWxy7prMVfhiWk7XzZyT2a5RjcW5K2AdoaNQvXRYkZNR",
  "key44": "2RnyK6NEk95yTDbti8MtGmmPJSe3udBXtAxyUuAmEgw4THzm52Ps71VMKoK5GUHTbnp6rTUz4i14EjRoNyfvyKpk",
  "key45": "2QeWp3VYC4iboWHXo3mkhsjshbAVVjunqDf7zwp66dyhNKwdnDfBv6Woz4RNfChf1ugBd3heNNooEU5DrxutZept"
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
