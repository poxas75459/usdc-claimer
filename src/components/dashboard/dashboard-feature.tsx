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
    "4E6fmsPfhPz97D2F9KpaUygxCHBz8jy7ZXyb6egkBo4XgadMF3ftWdi8uMDZDnJEi1mJ1KADzVNUcY4T9xpst97B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UCZMy5gALSEdjUPFxj4bcJwQjfREtj5AmsSDCuvQRgv59EWhDYCmwhJYjCBPfNwNNujy7cJSDj6zJfKVqR8wxNH",
  "key1": "4hA3jGerw4mFCXBPDAhFT5jLVzpfoJp9ogAZitqc6uDgqZcZM9yRdnFpjm5Di3P9iyHcP3Q5u7cbG54Av48TV3GF",
  "key2": "4hgduakaJ2xm7z1S1bEUWayRByarijGi97ibY3GPQTxtvQi38pGb1m6MkDa4qVL6haVEwSEJHmCykyEzFaNyLeQH",
  "key3": "96vqZ5NwcyzD2gr1mQcUP77Jj4PdhvK2a9YZ8jTpWBAThs9fh1GhfWQ8gmgW8cNvadcvJV8ofVyVpSgMww8bcZ8",
  "key4": "2CdTEQrzoV3hQE8Tdp61aokeH7TKL9A1kPK18yDPuGNcKRkRWMFGUMxnioBYtjSgJcyHWBx8aDb5TrQxkJkNkqvq",
  "key5": "4a5hHRE17PSi1QNE7PUgm1BjxNJhbx8yEWP4ssAdvVLP1aJQskBZkhpFmKMuzUZz4aUiAzqHLCg3KXt4B7ZFdjps",
  "key6": "432FK9L1CVeoYK4VPZKCga5Jzr5DhF4mwEzV26pr1B3k2SfV7CL9pEmv1bkQEGavY9b6rDkMJRe4fT1cngttHoUQ",
  "key7": "4LtHgwDxDqmdfDQjQScCmbTPb6mUN9o1hiEv8w1BYiFbajTd5HntGBLPushTQi63HCMZLfXvtP9whWACLsCveRjw",
  "key8": "3U6BQfkokjYkumWKBNyFjuNfj2zXNMQ1HrMtLr1DG5cutHZSn8wgHC3CgFGHE7drB4DmhaEgHTrjwruoucpGA553",
  "key9": "vbJywBpKhTTjnDR2sxPCi5EXFSCJ4HMdWAYEYK54EDv6meU4TSGEy7PzRuG1ArdeMcr9VXHq2Ry8GZc7PLf3GGa",
  "key10": "5KWUR1YbzanKAwDQJEvBLTy5zgjRXwu5WdtEdpENhfAiBehiu53EdJZJLLDZtXVU2P2CE5BxWtdYwWHoCByXnB5C",
  "key11": "4VqGLZreBZbxuRGA3C6FfREMCBRtC5CdpbwPwCmR3YxEqKw5sBsPwQWHWrxmYYuww1ioRsLUUAMd7yEcJoqyBycu",
  "key12": "5F1brR2drhLRspTijo7cJovuR1XTm1EbuEL4zsWixoNSzcCZLMMg8MZiPjbf5nAn4dQWbKYaNuT8Y8X9dY5TVwYV",
  "key13": "3yMQDBaqGJUcRo25tFQABiMhGmsuCGpiWLFnV3YzpLynhnWr4AAdNR5EZtqofTmAR3BEF7kRVrmTQn5LTdc55Cvc",
  "key14": "y43LMSZVgsH23LcjRF4qGvg6VpYkZ7dvUGG3ZtpsuGLudMQFKKbFw2rv8JBEHqraiC8bNWmYxedVDwUKA7iBELL",
  "key15": "2hhig8T5eZSdF2Df3UBgizTLZ8bPfD2SETw4XkCY8tKt6xiuLr9YgRL2VZrZJBjyra17f9f6nPysRnVJeFsnPiSd",
  "key16": "46ie2yNgB71xH4Dby5tHqwtPWmH7sbfzvDcBEZicZFAHmUXeEkjEP19ZVq2Qr7Ut3atWVNF5Gh2M7Pf2uzidGGiJ",
  "key17": "2WWBU8HhKks5eUZu8rC3SgFDHN8CtHUTYZa58v2sU76u7kViaiTCwMPuUCucZTSr2R9koUwX1fNmXkhG56hH8KHV",
  "key18": "5bDrKU3URYAjEcdywa6d5tQS287KhgekD661RDn7UtBTA8t3fA7b2YWKVdx9i4kcpcZQXJUnvEJUa14kjc95mo11",
  "key19": "4i2kn5W6GpWRYGKXWK1q5PJo3ZeQYVznmNhTnEDRv4YdrNYoeRJ21ApmTfdiX8ssDhyPUep9QZb9GBVn7MTNQe2X",
  "key20": "5kxK2Nuc9Q3ryxjb88nkh2Q1PdmhrNd6gAx9XSpZJXHLRsdsCThDAzLkuM7WTZy2328RP9eymK5zd6vFNz3Y2DNw",
  "key21": "3fQrzMoJDbiDw1Dmg2gut9ra5opZHkriSicQT6PiDEq46fqzWs18cSJnGc1MFT2VFo7UxSDzYRukzof1wtcYrcLi",
  "key22": "3fNMAk5QK6M7KzmF9FeGh6prCLdYCQfR9FkZ9dNV9mTVrAhAcXVH5KFzMwJHEG7VxR9X1N4Ag2H6jPFbwBbR6sJk",
  "key23": "3aFnZcoGJWPB7pLKP4FwvqLKajyXnwBfuDy6FrkZxuB31hYxFnHGMc3mYfQ6dzdjzcQ2kWKyZ1q7JQHz2gmv61cT",
  "key24": "apX6YNg5eBMVtLJaMArvv7F576rnUv3YtYUbNXzExsni1hfRTNQr2RQDi91LycX7vw8dGB5mzExLbcdg6jUfV4h",
  "key25": "33F5irWBQBJwurFkAQHXcXDbiSP2WDBv5S5twPQqv4m4wJ9x5JGqhhy745FRWkVtNB1ceTRXC9LsDRiRow2SkwtJ",
  "key26": "5qGgcpUoAw1Z8igpJgw6MWVrmUT6tMscHBz2NZjGSVC5BK1zu1HgveZdS9h9f9UU4awrcS9K3k6kU5zRE7QaRw9E",
  "key27": "uQLJY3vdxFdPjz1HvNc3WT5xo4J5yV9Gk7WqtTAjoWeBsJNv9hkUvZURcYfXhCMQA5SiivAy6fYphwcc3kxHJvC",
  "key28": "n24g74P4yg7kZi5xKhYGvn7JaqpX3q39wfFWTbsE4RyB1q7y7HG6m7DbGeehASyjMPakyALGb8JZ5HfSY5SR2eW",
  "key29": "3vo7dgS2yt5LvGqaAPuJJ6Uz7yVse2bX7ttKQABjAqUbVNPfLka62bm9KHJUMKs1AByyt16DnALX5A2Ktj3XEurA",
  "key30": "3y51zUPbT8hMpWRowXNVxWy6ED6irxMzCdyAKvwfe2h6prfhg6GBnnZQ4iyD6M8vr1JvjNgCnnyG4eaaA6xi6DpH",
  "key31": "3vSwUMfKejpPY6hT8PirK8KG624rWKhde5jpYsV8whCAnrL3wUmsMYQ9DpWE7RuZuQ9Dearra7wGPrzxg1cqx45d",
  "key32": "5msvpQw1Ktr51fPhTGjhr78jJtVVw19qUTRD9dfwVoCDj6Gt1kuJrdX5uYdEbQantHvgNUM9G2Y9F2JdkJxXZLgM",
  "key33": "5qypEUnm2oD3W1kYB3zV3LebnUughRpfs6xNi1f82vcx9fTrRCVJQW1MuvAnUd7RX35SVHhUJTtrJdddyPF3WoR2",
  "key34": "3wkoEPP8sJ5MgYfK7RQsJ4GXRdxq5nwofRDXxCkFf95cDJhaqTFck81MZuegXop1h8AUEiHjRSRjoGqC8M4Gcgb2",
  "key35": "2hvAp7Hp3uNEjNBymccuizJJboyzjLp4Bu3puY7vQPRrEvNThnsCwqdWi8ShiWYpheqxkbdaqJ1VNMF5NmXaaV4M"
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
