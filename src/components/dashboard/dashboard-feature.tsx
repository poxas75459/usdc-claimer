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
    "2MD88YWBsSWAK4ZdoagNN8DQ4BA1tEzVAYcZWzQFqTWU6dKbkemafAoV3u8xAoT6NU4n8zKb6JSoobiQaCTrCvQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5epbc65xS1QQdGpHqVGgxwtXUVMxGbUBHSUthc9DyFYKLgG9A3suH6hJQZGoWdGyTycKKMWYoytcFAoKdhbVEqY1",
  "key1": "4862uPCbyHfnjnVyKLk8kLGFEV2U6edoJwWGWfQj9ZqvoRZnRb7yNJGwDjjvmCXaJu2nFGt7uAqD6ck6hB484JME",
  "key2": "4wNAip4ZoRRfmTyheLvNTrKChvw6LLFwpuaGB8WG7abmGmtvkVsAyotkwmD144sQDyE3ChuJUg6YzK7XTXDKLPMd",
  "key3": "kavNYsDpnB69waXjNQmNAKzj7WKyPMhHp9PrVMqSPhTud1mkdLqvS3Xyw8bekTVcA95FahiTr7nn1iRfiZersbX",
  "key4": "5V6M9BVBHFohz99XwmavuXn6R41wBAyNjr3Q8ZcWUwfrF6Fs7juzat7bgm6Hdh9q92MduGbvBmFb5v1eNMhGTNW2",
  "key5": "KvMpuaznAunxgta9vFdDUHa8kr8nSm3HhpF9Q3GZKXoA21J5JyxUcqdkNdPRnayiCDXCjhp7XtkRRafiu7TiK4f",
  "key6": "4f58oJFxuy6C19uNZ6Lxiw821a9WRpQy4tXALino4ZSXs9JBjZNkX8bCijuqNys1Couh5qwfsHPubpkZSvyRTEbf",
  "key7": "usUXhrewZ5QwFNFuuWuYrRz1SimL7o4xXFEx7c1BcszeRGLxTcnnkYzQJrPJWMS8FyYKGWSAU19a7vEo5vWCHRB",
  "key8": "2XfYABSjNspnJoiQRsmVxFjcnFbncFP7JspvzHnqMhndQdkqJs1rUjEdz7XM1q6cWQYUvFvpXFdcL2t8FTTEtBue",
  "key9": "4E76F49jzk39ZzA5Wb1LHCHua19UJZFk3XyswjfvR1C8SsWNtKEuhNGmxeZc2M986JqkBCjaRrU8XVHdhozJxrhf",
  "key10": "4dbNBig99dSsobV7KKdeSEav1gtQ8hAWAdBWu6pjT1Bkc8NnNjnscXnhpmnPbK1SbkQMHVrEJtTwMjoZwYxuKdRe",
  "key11": "2qe4EE7GMssziY7P3Unn5wZiCBonfRkQWhDbDFBYMWZjWL565vH7mvyVYTYiWXjGYF8atWbt7iQbcs1ZxzHF7wSk",
  "key12": "3NdLzzdmNdf3MG2QeDg4AisBQHcTMtBRycVUq5mKrKiJBXLFFLWJ4rasfrK3BHk33G86pcANpXSVa7tADKYFbEHs",
  "key13": "3AQCDgMs1eQbgU6NWzqYgrouhNyQokxKi4YWMozPumBz97oRhQDLaKBnKKYMpgHkyUkGQMphqjiW3U3FgqrBBqmB",
  "key14": "44aL3qZSe5pRKvt6S1Xeto9Ffd1yhwJHbjKTXFEjvfpGb9kYHuHSW9JHySG1qZLEmsUsmQRE47u9rHujZN26n55A",
  "key15": "479vtetYw3D7PWRxuqxNonUuNGesuzjJLSdL91eKfeDtiEF4D9sqwtiT2uDKo75waLYGinrFF8jWqdg2xaHu25tx",
  "key16": "2vGwuYnC6dk8xTmhmMai31DsjGoAYq8zxp86xSnc1wbdseMTEbiXex38vwHoEibErNMaqer84P1XWKasUNscEoTC",
  "key17": "qPUNUAgufLGNZHsv7gBYriB2J5bikXG1iew1qeMTjqyLFinfwDXuhwvw56nTsQXKvvcV4swrKrmbzx6zCPqTWYv",
  "key18": "2dcGfhDE8FnjKL2TbqKiXCtjRtPMuc8ZwvYGDmiWJwoa4A2DqZcJJfzXRPXhDgvRmWSUYXqA16cXaRjNfXs6GsQq",
  "key19": "2ooztX8cFnV7BCgcyJ1XjSqHk4tSVrc1QAXmZdVwWePiKKsc96VmtZVx7zM2Zn9LhxhFPise8gGets2kHz7oATPc",
  "key20": "2cddkHb65zi4hW6zPdUXuAUbZESjYEaZ1wWd8Mio3eE7MxWnKCxd5p668qr61fConJpXrAg2dEMhbnqRzJ3B7WCa",
  "key21": "zKYTLtQc4bLt8yDJctKkmofn8C2ynE6Nh31vF7ALtCQqchEvfW4ZdQUgGwxCTHVxtcVL1VCDDRYw8andJReiYTL",
  "key22": "4UGoVmzAordcFd7XDuQEiKWwEN1GQe2nZ7EjkjC3z2uaKKcu15WkWAaNS6A7qq56vpnu1kE7XPqvrwfCTiCJatB4",
  "key23": "tsr1pWHWUq88L7WR9Jnx9N2WCHi4JHGA9vwnEwwht2Y9RB3ffXpMe1ADnieHzmxNV9v1w8Jx6QXDW27ohtywm4s",
  "key24": "4Bst6atBE2TX4Js7jD9pdzAXLwXVibx4PUBPYwMhSFpNVSwEDqch7hg1KJhTD7isrugboEBer1Ww7dsdSPZgBj5f",
  "key25": "3Ne6KUsi7onDZZ8M32j5ttEydpevHkD7zCFMRh7USCBzBSX3Md9Qk6MbnMPxjuGwMjLYwZqrTM9jTZsk6njx4qF9",
  "key26": "55YkhMD4qRZqASp1xsvdYirWB18GauBDoi5Ac8eCEMpw6cv4S7NGi4AmCu3Zq84SMWnK7uvGepWh44jXSnwmXXGn",
  "key27": "2frMe8Gv6mSKbcwGPxqZs6gkAtwHka97brhppKj6UkxysQdWSPG2HDt5fDPa3ND4w8xTWYNvVEpj46xv1pFLdofz",
  "key28": "5Z3nb57JR5HMGMWmpUdxM6JonPbWqGrDQT7MHw2CinBtrNfNUpEGaoDZad1SjunbrZtPhAuhYEgtRZJDmtpz8NJa",
  "key29": "2gh1P9Cvz7wt98DnBPys1gugSu4ZQpMqRePWdKHZq6nAEBeLbKFgRpuj4zfTNqeG2U3cSbLZM9qft9E9pNB3pxGr",
  "key30": "4QaJrrvMQrPcsNRbwykY14iJWYGyfiY5K57pf45JMiSY59nJJct2SL4EaR5QFRrPp1Ss6Pfgg5wwLUve1BBj2Xb1",
  "key31": "qmRSiQ77QFCR42M4EyZ16pZgXGVgQKDwHt1QdADD8A49XDMJ3XRBotarpA65CGDrsAq2zjPRzWFGo9bdmpeBJ15",
  "key32": "2XixA49scVVDiRc16NjzaLRe21czCBrzECjJBosQnnjrS4tQPvUk8xgLG7A7mqfhiYJRLQsqnwW9y9L3rXbQSH9o",
  "key33": "34PzAaVqXRi8JV1eBKP5fCAgb1AwZrHWsyCXFuYCJ11thwdJbbBrrVZocAkkEY6P9LtrTAgBHQmD8FErRSAnKpwr",
  "key34": "353vkoc3YZ59quDS1Qb5x5xMActZLYapoj2YpS1DR6srgSnbjHnfvQ9PjQAiFKkj2jVENiYMA2utT733DCGo6uhh",
  "key35": "eqqnpW92BHeDd2aNz5LotNKHYNE5EMofco7b5vZLFP6xz1pDUvMuzTf3crTNJXcmW7KhkwTngTGLxBMTyXPBQJq",
  "key36": "4qNA5Y3TzFyZZmGZ4H5GSXH87tziX8s9gFZASzU8thtjg3BqyiwLmgi8PCbG7mQEokYRzDQGMuGugF2UTgZWtRQx",
  "key37": "2hoHQgUrCrBxHr6s81eW9kDNtXkhXo6Z2JVT3F3zuAguC2eaRQmDpEBA3Y2Hfq1kSmVgNUuiSC6dnrY6XSUthGHq",
  "key38": "36ushBzU6CG4pncEJxT4EzynKPxsNc84esS768WDuk6UV4MPMqoHRYRwF4PJo8GXUyFx84eDmbhAx6ryhySHRAbD",
  "key39": "2ELHLR1WwhKZfZXK3XzyBuoR1meev3bgw2c9xx9Aprf6UqaromcAU3cwzQ6Rb9Kp6XXQj4KVwGdHR2g782NwmEqx"
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
