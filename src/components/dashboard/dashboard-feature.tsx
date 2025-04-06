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
    "2FjSoZVRskLtzzWvRSr9e8CiyMxM6vUGGMBWwE2gbQTzkHboC5vPn9jGW1bBLoa8dDC6sqD58KPPyTkqKmbuMKM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uaYAwmFes5pP9X7RHguBsb1TLjzCRfu1EhoL6oQNSrCyuhg89ckgbfd9GfmjpmsuF2t4GFnCYiP8rSYpytS6fbU",
  "key1": "46AbficsoSE5SXU2aaopaRJEGVMKbNTjnoo81MXBTEN2wHAQFm2QgX2K7vfkrrBb8mX4iJY3zNFRGuQNcZi2EB4N",
  "key2": "5p7v2ZjxokvTDmodkYmooujzMUjYZm8WDHE4VrPPTZ4yVoYEmyBQypNeNkNY92gPQivwhEgvABGnpXf5s36W1a6h",
  "key3": "3t3qU4MLyjrFyK3o3sLhPfABwieA9i7R8BLwLQ3Gq8dAqfXdWWNF9roK2x54bmZLag3g7yPQYzN1QCQzf16YcrbG",
  "key4": "3WQAoQYKx9XJKgdiJgKHntkQShbvuyYwUdByWbt3xi233UtpGayF2Lc3Kpdy7tnQ5zfmJuJXzYDdKbH9j2TQLjf3",
  "key5": "5TTpqWvqV7d9ANsoWN8zUWwhnUzfSBGxpLRLwvCkA8aVGa8zqQbtyJFZ2Wu2Zb5GeopZBpRTQZF83tYq9VCeRFUL",
  "key6": "5ParXjKGJU8LS39iamoumtYSginfXv3L9eNF9dTf76ehkmuiX9HhNwXQ5j6mZ3AewVGvRKFyDpKTYPBJWpZ1MVNe",
  "key7": "4XGX2GkQhANcysvuwrvE4kEM1TStECQ1MSfRZVvpzir22bWhbupLPFQKJXJxYELrdiD3o2ETKvTkEKtWXJoxZrGE",
  "key8": "3qsk6eFgA6JcAvvHhtvUv1HVmrkaWbWBm8P7uTLaPPKN33VgqzV5sZt1J8BNrcxzk55qA4krTp7JFY82nwZMRwwt",
  "key9": "4S6Tg5RLsL7NmcqK9RkDBuFJg9LhBKxiY2J7f6FgQZkkvYsqY2WGZQapaLYMtJFahMYWLm1uCiiEzdRjY1jyG371",
  "key10": "2rZbucXc8i4y6aeWsLLoJuHu7GUS53UaxrfFcKitLbDeoekBVaCVjTrwbqtXNs4pZ5q3tABDPu7uDR2emWee6nJn",
  "key11": "4B5jxpNX1CHtvJbNYeHMV9aG8mF1yMwn1gWoHACf5k4ePJiK2cLGaxLPn5rCJDhdDiuTUJYa4PSyD1TnEUWUDhou",
  "key12": "3dKsV5i2SVRwMfLfW8UxqA7gnWmk7TF2Fi9XATUnBZqfY7pidk6HTqNH2ZQmLqe45my3fRRBiXQwcmKRfzqqb8zZ",
  "key13": "xCBv4oBs8yBGvrn17t1Wn4a1B1z8GkXqh2W9AHG5WBhWZ3PwUfYAbXawaWLPDyMckZ8AeyCVGN7fzSzmYJwHZPs",
  "key14": "xkDXmqN27y1YGYqrmpZF22ty2vMyFSZ3FCa4okpsBp7gKWu9iW8UheFiZua2UrTmCQ4sCwJhuY5Mi9yDbFQhoPU",
  "key15": "3um9Q8eb47jcYHcd4ty7qW4hdsrrW5zUTgZSuXLnVtAq7burwCnxt4p2CZYH3BHEaguJbDFaPMD8hBGk5Hh4RKCW",
  "key16": "3V5RDAKaY3FC5MkWy3xnk2rpswJMXrjdgMaPx39yjwhrhjEvVWV1VzoaURWG2mxK63HfbUvMvSLpMkVYAvWjV9mf",
  "key17": "2Z8CbdkxhVsp5dufLghFQY4F9wtWmGA6ho5BjNWypzEpzTsUnfNRMFWfcjhDqayBBMVnUdxYpWJUF9Kjjfo2mX8c",
  "key18": "2ontCAt5Hyk9wtaRgNmFR4HdrzdhpvmEJRXCwWyqtM4mL1kMhH5T8c2MWTWrwg8vt6A8GpL6tWw24HB9m6LtYCJD",
  "key19": "45jT9oUosnox9j6zQ24ZqpmxKHVwWd6gEiKoggCz1G8xbn45FS8jGXHZx81wSfqryiJvaczcs12Zaet3Jt8ibzoc",
  "key20": "55FqBg19DabP67ixzUPQy2uBmp7KmxUfFBwcNzKGsfoSY7Uk8Wcbavh8XJGCty35c8ArLAomy9N6pNoQdTa6bpmE",
  "key21": "m3V7PdZi27SKtrK7SZ3eeef7efHB3EeejJjncxcutdCckb6kR6MuYHx4kRLH5xwNoE1xhefSRGXAryucaCMe86w",
  "key22": "5dUiC1MHGALx1z4evnyqVrjVLoFrnS2c5HoAaTb5Bp9Ld497VhLCP2q3V9Dsz12hdrKAd9DALXSojmtHwWpXP8qU",
  "key23": "3SmMpE8X9jxixR5DYLiVD3Vg8WvpwQH3N13g4kCK1Xu3VBbUL27Urf2wynv4zRQz1C6hsaiXzcceV1jD5hM6tMCj",
  "key24": "2UfZVhFRN86ktYDRHb5StQGu8rs2jqWMq2csB6XNcK9Ay1XCFRzani94bmpkn4qeUPVegsuWefbjJ1yNhL9TSx5f",
  "key25": "iFh1SyWT3TKuHN4sSkF1rLcUjXJJET85MCVAJ4sQ22KCvV6xARHmGP9arPSSroJviMTLBjvNWsMVXWcwHgU2kdF",
  "key26": "2pasTrhQC9DSCunJkgBCQbnnDC2nHebF9x1QF7TxwUcvQ9p1ZUMZatqdtjFVb3GpivtGjRrhYFEsisMc9q96Y4nc",
  "key27": "3fpJWUURc8hmJxCQAo1z9SdFB89NpqnNgx4ajXRZxBNabt4jdQ5RDE4EzgS19HRSy73n6pyt6cAqTz4m3svcKN1V",
  "key28": "2NhuzirWWMecvxRokbkmi8Ey8U7EEjav3DNzCCAcgTu6dVZfcdsPpGQaRYjhVUqat9eRyaswyuzjS78YiEKw9HdL",
  "key29": "2mSAy3uDxTzDu8NhVgqLMkHizDnacN6aLBS3JjqiRBYWMC5knJN2aSL7ZLw83fWL9ZfGzwryvHzySR8VqSPHctXg",
  "key30": "5ZWnwdYbqk116PL53hX3B84F1zGd3Dvu7YAWZwBx9Qohw4PQrRofxvyphepXtnBtm8uVysRA5gUZ89dj2datrEDc",
  "key31": "4BWvKwre8nDcPpV2L83cmpoXBLhAoZSHhS4H4a8FaqrGW4qvX42wk59o7JuDHpFujuRPbAGy6Q77bXqdqUXfsnyp",
  "key32": "2j8KkM7AY6Vfxzi2qfP4yzGLJWd9vTFvXqC4KHZ9CE2oFN3JjRHeSq3z77J2YPx8fLW4WAcEbUYYVyk2RvAqqdAT",
  "key33": "Bq2xL3K51KUScKYJAn1Gr1mkESuiR5P6H3ucNSWBWQNLiTkMupevF2o3tKLDdgrPUMbDYJh38H1bwN4e6yi8sze",
  "key34": "Bu6v4MGdT61Wmox4L4FzHKF7EMvdSGEvDzmGPMMFeZjArYdB4qNjsn96bPBjiP5po36psHdWShuEFYor3VHTYPS",
  "key35": "2CciaUKeMJ39Ya1FTim9zPXJcMSYeLgtdQRnmvqTf1hHcrUhSyKLqYAvHbPSLPc2Ze72NJDropige6QypvicWDb3",
  "key36": "4ZgVNSMZzN5sDo3uWvBNfPT3adTvnPM1X2VkDRE3ULaHmV8uadLNAyL27bWiLszHFb6TNa3mWXXEYJ8rjSyxMpki",
  "key37": "5wKtPzwCKdv41S7iffzz2SjPg8wc54BZWcALWdA65Y3apQWLM4wa9Go5asSGnnMKh2LNsavWsgdrLkwcGShKfUvX",
  "key38": "42RM7N7uinfKb2JTsW7bg2A2Q9cMjgg3Nm3QajocC1aprBPnhEZjfFD9JWQ4W7Ek8kRcFwwCEoRwLcUJUvTPEEvS",
  "key39": "3DjyZC6uz6kSiQM4q7DNwdzE5UxytRbZLJBtyxPBTwbiDtUzAoJto2HBuQodQ7XsY1mo2E1thE4kzHdb3z5tWoqp",
  "key40": "2syEEQSMXwMM7WaSGeLtnBTH1QDyWXG1gK1QGkARxGh17RYzywtD7fsTxA72wgacDpDqQkZ8ZdJC7Drg68LPpVEy",
  "key41": "XgWz7J8z1J4g9neaCVhebqwKFLQb8kQD1LX2YLfZwPW1FhVShjst25kBueTXnWnbsm42BBVPBY8jT2W4VX59EnC",
  "key42": "3B7HTh4sF3yHdhusHF8a3k7uSUrD3aCq3yHQMcYAwZHN4yznQZQ8FJgxcUrFq7XnH41K1MRSpJugbTe69zv3nqe7",
  "key43": "4wtGirGW3GbWEV6fh6XfNQYTKMdhk1uQuMQf2sLvHkuaEBzSpUTS987hgduis5qk2PQ9Ruac35TqobG7JAXSkBjm",
  "key44": "4xmAQVV4jHnBBgmHVsDVrWruH7Yw2GHAQCgqVSQceFYV2dCnBDqCXjtYHc3XUuMBpLrW3zizqGvuAKyHcKmj7Dne",
  "key45": "5P6ccNsPM6hDTjCpcdnxcYUYD8QmtHYGZgjYxueHWF76aS82TP4TQboet8koz2qND6qKegxfDZJBksgafcj9Vg64",
  "key46": "5asnBaJqJfs92ZdBGRje1QBoYfpRHPMYKKvZS6NbdmAtxMwvUeT3Dnufqbks6ojQ6694sTLC5FqwEdvFeDZoZvCE",
  "key47": "vdBFAySvDXU2KtEVd17iVcQkpUF5vJsteHRgnJQJJG5GK64ydDVpsfSPZH735wYdqgtfaWfcmyBHV9D1XhqGNSE"
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
