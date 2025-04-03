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
    "66ttTRWjjFgdFYzeWhsUVjS4zrX1gkwiL7GLjMgW154iC7n8hUwsHGugiDEteZbfBVcUN4QAAPpDpJb5DiRbgk5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3HquzeJ56UbpDRakD7W7DZ1tBvZAu5HEqianU4RVG4KUqZTLxyEvUn3a1mG5yLb9M6QNTBA2mXZv8UiCBEAiYV",
  "key1": "nkj4h3NkV9K2QvkGfG5kTNbaaCgRN2fPv9bsbs3jbBEtU5zsWSvwdUuLE23nKvDh6mLyVgK3MP87jx7YmrCjmYV",
  "key2": "KjYhXHAM23ti3nsTRZmVMuzoHo6jQ67DcSCGbEXPrkgzBaAFDzeRGd179Ub6GFpFTvBKyd8TPjaHdkSBumMFzRX",
  "key3": "2Y63CH3xCBQTDi6tXVRpGwU2U4bJceFkzTtq2Dw7MAT2CgNSZF2Cy7xJuizYiYqLAWfyewPfRtwrPvNR6BhnRQoH",
  "key4": "5ZUFns8LVWFmHxJeuS2kTaoc2jBGgeQFXcR89yjTKdNoKcvFvWMA1pVgmGpLk8nnvi9iLHVeA8u3dy4kZVr5KBSc",
  "key5": "aB3RxgC4GWEQYocjfh8mXTM7sHWPWQM8nKAn2RMpLC5L4dwbJe9G3yKc8vzb8uXwZSVkZdjce7W1CyTXNqZXk7G",
  "key6": "4Zgns1fueDoSLyK7Wuz1fWWG45aMHBnWhK4Vx12FRQiJwrsmF5GkNLzXCBxbzBfBF47S82K4oYZPdVGCnmqeqzr2",
  "key7": "5KP2twSoL4g6JTEedX1P3Y5Ztg3XheK58TWh44p7TfkzkZgNmfHZGaeseDVMuWHpkBVWdjmMtgGfmo7b2zHfmKzs",
  "key8": "2GpLqEoEaDr6i6TQj2fTfZFkZdwSohP1nUbUfpgPL6tkF9vPyNyq41Rv81KymqFrWCZaFrcGizBLiWiPQ1SsK6fZ",
  "key9": "4Uuh26QyXm3g1NQiBXXpjkMtXEY4pnZWvA9hDgzeqKm4dt97BCiSKiUFgAQUmL44BTE3kiWB6hptTt2BH6p1wRQ7",
  "key10": "5Gjn8JWR4wjghgmN9aaVxYKmcbE91KqYKyRacXJSMTPLk6VNE2oUv3n8m34jAD1bMDAvyfkfb3Ln95vNw3iAVymc",
  "key11": "3R3kFBN6cCmN1zf3CV6BmL4A4aMBzU8phEXrcrGsRMHziNz5UWemonkHPWBnEhuMfzMZMaMWFpks8SUAeEtmiJvE",
  "key12": "41rNwR2UdSBtBZVU8K1nm1x1uMin7qJYdcdzQQfCFx1RMakTzQzeq5GF4D9Ydux1b7RCzq4HL9koS1gCAuP9tsXA",
  "key13": "3C8rdmbfk2YRKjLMpzA3vPrsc5Qem2qWpE4nYM2ufWxZZC4aaBcptC3AF438B4H3P93jeQNfGtP9isrHxR8M1BNA",
  "key14": "2wqQVz34kHfGDfh23rh2NaHp1zuu6YY41DaV4ZfVnE7yMuykPJKGFEPxFuVzBHLydqgCAHvfiXdtXVGKABAuMgn1",
  "key15": "5sBMawsUshLzcyT9SF2PamHPwYww1tUbwRd5sB9fLoJociK9JAWAeoQ8CyP7HwPbyBajWazRP4aHaTR1xnLuCThs",
  "key16": "dNXmbMYB3C5T7wPMnmTQz6RbRygyC9rzQFWYuR2ptqsjy6f9YED3xkKpGA7XZx6McenpVvuHJCPyRPuraZTocoz",
  "key17": "5uXsUzaWojnF4AbSR5n567YFzv5K6uAw7yjLPYgMB86HucfNT6S12w8deupF13GBJWBYVWPjvenKexxEtqtiGrPK",
  "key18": "5JySbhzNBSDrAUibz4xDD5HSKYECEEiMaZZvEFBMKyebeXvxmTYHBTTmozekgJVudvfWDTv3Z7Q9nGBvUKWfT4vn",
  "key19": "5r5VJAtdGCDebcgdxpFikUfPuiU3cjpQJmtPmafs8RgwpGju4DFxs1oxfAUbrHVXaTR8rG7Y9Tgq6nAvMQjTscLK",
  "key20": "32m7EPQbr7qyo1Hg64uxXqrjFnqLi4fzEEmAVmgJ3eDkg97ksVUFBBNeLf6K6vWg56PzcvGznEZeGhjshh5pPsa3",
  "key21": "4ktdtcuERXiWYLagQ3fFW88XuDQNRrhmM4XP4D5ewKv19Y7t6QJMhnsUoLdfHPodw9hMsVLS3CKKrBDwJdKdAMF8",
  "key22": "2N1aPtqccvxxPfNUZMvn7TPRTqq5EsChJuwSqq5jbuPnke2CvMjbs2iP9GkWPVesGtmDrYNcZHhKCYCHHZnCkLgW",
  "key23": "33K7nhMJpojVR4jgpFPngqRYvzguwY12MYvwg2bmZhKU8yw6RWkG9zh3Up36tUsjuUyyRQRgi5WNh1gDvbj7RE8L",
  "key24": "3rV3AyUSRhrEHG3djmvrjzXVC51dJeRBpjUq4nhWCLduT6TMe23xs1U9FcMoVAd9xzokkB47CiDNKPa5dGzMnSMQ",
  "key25": "3syXL1f6vGgGnPLFyoAf42H8qhviGFhsmzw1N1jvfVpgSBzK1hqsx1s8KS9if145w5VKMyUuA5NjzSYPFGyp9fje",
  "key26": "229v6jazbFiyVnZxEHWULoJxepMoPf5NiFxwXc9AQ8XdcgCjBeSXWKUxc7kEdo2m22jJA3CEBAUTx49LSXtREYz9",
  "key27": "4NHMuafNa9TyeWzUJShm6hEmVzkD6ztSNGdgCVk9AzL1G3AS9ToMRc1sJnUUw2uUaRvFwrfgwL6GWYeK9Y4tibuc",
  "key28": "qPqXRaskxvSkVMgzi2QxwZW4qhhJxmPFMikHxMZm5QucBETwcwafcLNs74TT5Ais8tv7ywgYZSc9tQHENdfSc2E",
  "key29": "2R2fYdV71UPsxLKc3SCWWGdwgSfFHHiySYRuNAAxgnND5Pz7GEkm6zuqncqx1SWB1ZYifFcarrobxcPrQy4CBBnW",
  "key30": "3h6o1PssMmPhqUvK2TyVy3FWphNT3TZ9GKfJ8B8h2DPetuhzv3Udf3so4pjUdjJRFHfRRGMD44HHxQynSwKgWvjn",
  "key31": "27owPCwJauEDZC2v3VWQEwyYMfAn9n2e7MxaWAyUhYcGaPEE4CGXfWWPQtaNB4MsCBnsLSNoGPZWTqKqfm91TPcf",
  "key32": "wNBVXsJQr7g1nF5mHjXK2nGmQ7bFa7BppBCce6jAZFdoJog3XoW4hW7EUj6Lc2VcEXbP8sjpDc3D52JAZhA1uGc",
  "key33": "53hg6UvqRpStUBxDFEDPX2nbTwFZxVFRuY8g2xMMjxd9Lxvi7VgSAZivBtYkA5dZjZ2Q2naQVpTBGHx38Rgis81z",
  "key34": "3gJVTvn5MqCitok5CmMCFL3DB7KsUerZSp6h8KHuVmKMddDs33AzqRhT4rNw9PZJNYPtKXKpJVJFEg8an5uKYwPu",
  "key35": "2v8ihC4xxfh8TwcKyYnTz1UG3Y5EokzauNNSw3dHnoJGKo3LuabkTU52oaTgchZYV4V2bqhRbinw3D1wS14zNAd4",
  "key36": "5e4harLj7vAfikVYifm1XL7JUrh8YGGrPvJyr29JmdiAR7Fs3vG2GH734Garp3AppMSmcyqMT54Le9aQX3M4aL3Y",
  "key37": "5jm2ZuMZpawAbrYfjo5Xpf5NUm9aWziHPxCLvx3jZEHJ8zjqnkvQ7woYptZy8vuh8Zg4jaFbQLprFmQzjHuTxK25",
  "key38": "3t8R74W6VDTERWvsW9Hd6nvoimY5cC3MdUo4E4MBCXQqyQsawighNqUqftqsn2HaANFuqrHEE1enJ7jxs9id48zU",
  "key39": "QPe1f3px5zvyfEc33F4rbPxwQGfPw3cGmp4ou4NSrbaZh6iW2dndp2xfmrZPZak2Uv6faS9zV7BQ31yoEtmPE7p"
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
