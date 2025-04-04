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
    "PkpjSw2r9AnwckcYYnZU5z79S3fyc4B7THS3stsU6egA2tH7wuqtTzn9or18zetZzgUqBxFBNipJbjf8vovupxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQMMZ4ER7AygjMX2XPa22532NT1Y7hvJWr5s62dsGdxAk8rbi9ZhAjoVdwycdg22eGwYxeqwpp3sojpy8wJHCK3",
  "key1": "4YN3i4qaGDNazLxuXuxKgSKGFQYabkbECaxj6tecA3vaNQAXM7RVkkTyw5ZGKJC47roc29HdyrzzMwX8kTuYJ6dw",
  "key2": "4U8tnphy8C6Hz3KJZ1A6u6brpwr6vrsCfQuSvT6DiWFfrRRNVc4auB7fPHViEPd9B3t4uduRj8GiqvegHGXakaSY",
  "key3": "5rza7WrVnWWvwVK6yj9Px4mEjqCLuFkC1bjd65hZbQH7nXfHH6Zcp6m8dvieDjXvLDYhXwEeGDp8B3en2spemGDC",
  "key4": "3TEbEx9J9V1WYFvVsi9L4irkyVjEWC4cwDh8qENQLNxpTX8AXazmTtDEkX5sj2e8qGPMbKx6xJ85twY72qudT4ty",
  "key5": "5KhibYMSpn7yLQvHQQ6ouD8MyqMaV4cZfmxSE8cB63GZZ8yTTW1LXo1LHBDF5bFWiNQNkqDjtDDsHHVZCXFxxhwD",
  "key6": "5fD954h8szpQzfqk9QW5TyWAdnmNKNURxQ36PfVrpmEouHowJxH2fT52jafkp1edEM6YefV9uHzNuUiBbiALdqjn",
  "key7": "aZUzErt5p9Yb4eDKQo3np5ZFw635GEGNtLsqdrqSa7yHaL8AkfaCzwg9m1GDRS4GCbto7pvpD94dvhHJh7wr6fY",
  "key8": "65amiR4SBnp1aJFEKQTA1D6aTAcnJymiL8bZGPrmGQvV92qpRTqvzwJ6EU8x9312UFxkByh4HEEHY42BzeXEB97Y",
  "key9": "kUK9Di74cNWHhqVSGh3DJ6wYibhoySPDJxLiv8c8A4XZRLu95v8mFGeFUd63pzTwpgNL5nQTYd4rkn3DiBGviyJ",
  "key10": "aeojNATrBZRhiooxJJS4x9yNRrng7NKdQ749Pbcys4Ziygc2ewnaBxsMdEuojodLxaeSqB2Di8YexMhNAo1acK1",
  "key11": "yYtRnoQwYNCmSinNUS2ciicsLMmxp2wsiepuSbk8yhPw3qTDP8TG7iTp4oLNyEuBTL3jHT3NEmsS7ZvzmCGYFKR",
  "key12": "3FYb4e7cWzskWb5HUNZhcfW3ts8Zmk5CZqAaFhXkN5hQTrFE5rzdMtKJJ9Z6XiSkNAzxrQTtwQztn6Wpaddm2vrR",
  "key13": "UMUbDJSXjMTfp7gnn5zLRuX4XMNMA6enLvifAZDimW9MkShqSUSY4i1Wuoe2QgML1ytgBv1MrfqxARq49uJpxFv",
  "key14": "3c329wuodhGNoC9vRw3KpF4TBi3hYFUsUx887pG8Mp9BhyQK3ksZbiDMn5BzdMUdWYnWWsr7stMLbCsnGkF18sva",
  "key15": "3bK3MZFg2UCMR6zWyrb64L8Fe4nsAr8cEaa7AiFRfdBQ7auwxTdHnmG2hchRWCmebQY4AW38ThJZLu8Fp61mozMw",
  "key16": "5KkQwHGn5R3zJfc7L7MErGJnKPzP9f3f5mXYv1PhX3mLKp8BpY4MBFx47GvonCkQ9me2bdeqBNxa56gjupywNKEk",
  "key17": "3EP6EPeYnJqnR8i2BV8E8ZGV6UrHTbeHYMGibKGk6FTo4G1DsNn38K8RBexk8bojfaLPeQoCaNY1qg4xNm4gADi1",
  "key18": "54iQ5YpwTQBZWmgaWz6UPYqefr6ES9PgX2gWqFmPeqwVWVma4aSzbnXzpebYXGb2fhjYozqbV9ajZkD6TViVpYQv",
  "key19": "ReqcsiVaFbKYYBSoARmUvSZujZTMHeC5pVa83QPGtsh5AGC3aoeDa9DCCXgQiQXXLmgwiqZRGESJwpbbkzzinqH",
  "key20": "2rwkU8usymEYnQUd6sqJNoBg2ru4oiTNJbRu425exQD1HdXgeD3EuJJXRanXxa2Trz4KsT3PyWofXMvhPG4rLDWP",
  "key21": "DygCnwRnk75C4a873SWCcfoyujhHun4Nnn53Vv4iaFEEWt1qKfYiima4Cqzq9RhrVwXe9NaksNNEiUNc23hgQx1",
  "key22": "5cu7DxTjfoVFsfi5iuFW7jjEVCYvy74Sbufqd3vFQcNjMXMHiueTfeiCo2ioSbMKRKFVANmNj45oJFUvd5vNrQDQ",
  "key23": "42MT3iTso4puPz7DyFSfs72jnVyWuHRi89wH7jTLGZECfG8wXicNQcU3iKj1dZANdBNNXrgPYsBf98kUhqxoD8Wv",
  "key24": "2f5TXmQ68rzfeVV8iz1QsNnQUoJUzjnyV6o3vQFpoeFPr4NTpgzUDfLivXoR3iuUNwHEvEeXcFFMHMfRbZgTEsx",
  "key25": "3ueHdFQYs72Y8veRgSN9eKeAy9PXpKvFXcgqroom9J98kKmFek5aifSJz3z6c9EWmeiosMLqfQmNx6QZPuF6soJX",
  "key26": "3hnds8MjzGYA7dHuRHEtyS9fxgneMMstrBdCmpRMp3ZFoSsE4JKaoSapWgDz6ZdyuGAFT815vau7QF4WXyQtxZRJ",
  "key27": "3dYr285gPWNHM892PKuuPuCfN7T6wdUv6TQ5R8zy14C8KHTwHqvqXW6hwcxydtsyXp4C2xuwHFVSx4q6ErwuLdnb",
  "key28": "wsU1vP7zBg2DpZDRKUkMAJuU77uMC9Zww43fRvAUQULCWBYrRE8tDo8wNzhr8ZxFK7JJ6R9cgDQg9w96oqaDW4P",
  "key29": "5odXBxZK7t2k93wxXsWJQ5VnEWdN1aWnqhsUYqZ823nDpSNxMfYdEH5uzfw2kP56R6PuiGVBjscZBwpApUEBMDKk",
  "key30": "595XgUH4MQtRo2CN9oXxLweFjyVuuyW4FFnJivgCYJjTTDQRHruKWakXmxEXoyzB7CuxHWAUQqeTXnooHATswLtP",
  "key31": "5S9HWVhG9aMWuzYcmcUBGt9JrxrbFkvYMhftJqBK4Z947uGLZsAvwZwp8rwGwdz7NR25Ymyx55VXjaTPniZx7tNE",
  "key32": "5ajdWYQrKoyFKe2yrLWdG3xFoSX2J4bG9g5fnmX9jfxZtdVtgMB8QBiaxX5gLLMESk8zBAaoQam88Zn8FUGxAdtT",
  "key33": "2UFo4YA7Nmyz1m1cymiq2wpmcaRrvQPUvSezSVD13YC6EcCXyULG5giBqnoiciosdBEQZboA3jAWpNB6EWPFoboj"
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
