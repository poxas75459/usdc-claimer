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
    "4TNGp6yVvjWE7UMyWFx1XnUK9tVfV1ppEkw9yKdfwAYRniaZeAvUCBF9B6itxLBAzAqJBjitNShMbgMZHEsRY6pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27fpS1iYipEWR12GzRiEVs3kGZm4XBHJxzVfkwqRvXiTj9KGR5QmSbpweoqti4HuAxxfUn1dPJP8BqhP9C1YD7Cs",
  "key1": "4xrsYzgK7SWXnrU81pzHfabbvZPvpCSJEA6mPfbmpRVAez1KLqkAbWhRwM2tAybiTxXRJM49mxm5sce9JtugdMEH",
  "key2": "5SBDJAd6vDuvaUS8mT5rMR6ndGAAwwCjNN1bmpfUniqnydTLAAD3QwfVaAujZXQris3vfhw5TsBANfbUoxF8ciEe",
  "key3": "3AG4qpgpbJKpRndkcbn9VdECzgxdA43w8bU5vZMXoz5XLtXHmrhfFEbs5rjxaVqAmjJrgZwmC6A5TyA2Yr7wTeXG",
  "key4": "Pwc4Ske4G6y4twtqjMcmU42PsWP4DqNzpcnAbiQZekj9bLJa9nfTvFFYsNGXCwz79cFq9y1xdV8QMTLu3rBdpcf",
  "key5": "Y9vA688xLrfM9dnLhNQ8TEbQYJVQY1pPUfmHuzjnLhBR98vxGem4pw3e3KWf554ddmR6g9UV9iqGUcfb8Ds8AYw",
  "key6": "UdAbyGunBh8YtDZYWepvjYMUufJTgUMbwSLzR42xDTKMkRSwxjb3UjLmvA77SPX1pHabuYkDQ6QNjHzpuexG6N1",
  "key7": "4Dr8yqLmu8P8uTSqbyzPvaJ6bBKuHLEVZphmWr65bhcW5pGFLD9Yz2AMMUT2tAxSkgPu3cTXkRwVh3a1rCHCDmzq",
  "key8": "54TFFJUsmWkR5qnLorwcY8YUDJgPbzdbuXvGtpPbADX7EQaMxCX5Y15aJBs6PPLJX1oQrQgcvaB4uad6S3qDZwyU",
  "key9": "39d9EaZJzZDNLc1oENvmKr8bKvkFsGeV4Kew6isWj8kcScCbG1azXAGMcppQyCFWMycFQCTeokXbMezkAy2Tfi9H",
  "key10": "2zjtStHzqrp249Fv9XLVGP4iXjWg4YMvmCVbXyYtTg2XRyqr8xYnryhBKj8tXebv8vGSN25sEBsmbycZ13htUnch",
  "key11": "P28CrWkhn58rspSPLP5EisTxyaGYahd6jjupLL1S8CREgxj13AUdD8bBWvjMoGPMq3zX1Ryzn3m1fSPndtFdRn8",
  "key12": "4xQGUQ5bv7RjWBJ3cXj4WhGSWmyh8bmqKZD3CTyH9wFbrfhZGMtPSHjSzUosor1DG96EqWS7URMnWzNSAhUAfmG7",
  "key13": "2cWPgpzjToq3Dar9pfJwgnZghVbaWRBdAxKk6s4hffMspoHp2UynkNQo4RTZkVRU5E6wQt8sTGVsgzundnpQY6u5",
  "key14": "358boBsiUwCKyLwRkouTSgichi7d1F8ys7kRxAxGDiL9JXziyapihDweAUn824hp6sBVZUWT2MR18cMc3N5wdRoQ",
  "key15": "3i4ip6dtBc4XDpRv5re3YNVD3CMtWv2Z8XzqRz8VUNtWkxMHVNWun9htGCgGZ3r54dLcS5goMAe4yb9XSZbLStMt",
  "key16": "5usNUFL9VMFAuTcRgu7bqyuD689XNwNFzSR5AK8mFkYG53YTQ86g5srEG9BQZs1wf59tSy2grAJwkReDLAAzsCDj",
  "key17": "2HjAkuhotU2EXTFptrgGdtwDQJ9Rpy3nwwn3zgbP5hb5zDxALWNKuE3eYQNVEsh89NgBjNncnz7uMPkKV24qU1Fb",
  "key18": "2yTikYydpfs3Q5RDmMp4uw6gcJGn8UXvLwx5zKymUyoMRsTHn5GBqXBhRP634NDPLE7DXQWYnEssqRejRLApmefe",
  "key19": "3u1oPmKZFEc9eUFmfjHToR2hf9jNaBWTsQ4m26SxeSKxKXQnjwEK775xjqRTJ4YCAkpxF9wco24NLLQsRs74SbW4",
  "key20": "56b2RaxDAuXWjPorr72iP4VgzPKcyobksBvk8LbdQQizBniPN1tFywiQa9bqpsVgsrU5qRWWQLSzpvcVkQwZLzvX",
  "key21": "3BWk3LtoWNU4Rd3cLhdUTmJ7VPFb25vCqeaZeJgtk3uhaRwunhbjbKXdcK91WLkCfJYhHyEXfcYDHq41WFDHsPQV",
  "key22": "5bax7qvmqUctQJN9m1m2BUdKqLNSA6Se13HbwMRTPPpv4tpDAiSopQWRUsimjEWrt1Y4yKZEJ57uam7UD4JA5SJe",
  "key23": "2KmeTJWbHm87CxteMT2a1eMeiYNsXjS6WHujzWhsxLYsbejDzKzaTpP2KHk7eVPDo9cCnrHmcMKkgTG1d8pM5t7F",
  "key24": "4eALiMq2Y6vT2PsPRNYPgAjUvYdCsfYnuFxMhdGYb5aNcySNP3uLogYSY9Mm3FnqzmkxpPW5ihgQFW9Wfsfrw17c",
  "key25": "MYf9QuMw2hRsT8WKaZuieQtF1pXhz7j9LkgwQ6fNmhffZupp2mvc3z1pcF8jjVWQMvtuR9Ed7XNgh88UzMrFuc6",
  "key26": "XPnHWkuLa6VxEaQmgdNtNJAUicG9649tzEb9Z4RtAiJnUwrZQLQd6Drog9cbzZXZTVubg4Aew1q1XFchRdPLRvh",
  "key27": "5dM7YSUcBhaiYEEk858ZjoWXBKivNaq5oU8QeiLgEJefEqRt5Xc8qHuJ4zYeNdTDMoSVRoepgLxTsa5uBx1o8ihH",
  "key28": "5ZsbM5MESWz6ek4y389jrXEyeZMXuyKD2DNokwihZyX4ifFUDF9DuJvqWjbFGrw8LtWLx775kBBDyNGvoE3g1ozQ",
  "key29": "3V6NgGgvVroWWQfJFwSAf3M5yXgvP5stmUK8tzAU2aXhbRBggUYwsJEAGtFS31jparjiitP41W2tB1izh5JHurGt",
  "key30": "464qfrjr54scyRaccrobYxEpci4aN2xCRmuTBoVcz4AediuZDb22wsrjSk7qndF6DiHg3eiz1DMQVA8QcUFma9PY",
  "key31": "5PKbQgFQfzETcQye9vRsgspFgeA3ctMrUx43h4HuSTC1AJUapZ4WC2mqRHJPQsQzBVfMwdcyNcpLycLi4rxbdKRh",
  "key32": "jrz9gynhcP142z9pjBziaRd7YotxDBb5MS1g89K38BuwnCX8WQPYpERyDBY6eKZrEjqDQFQmvmcaVQeCfuHZ7M4",
  "key33": "Wi1xAjrP2WmEhRQNYVHobs5YkNxLc18C6AM2N6svj6xgpvpYYBvtoGf67GWHeJaavhx2BABhrkF8uHX7dyX3BJS",
  "key34": "UzkT81YhYjBynVnWs1p5cu8VafhW9ho25hzYeNTpU7UR2vi2ociiGGtF2dmDgbisK2L9uUoaHX7ZBXEcjUfvzgK",
  "key35": "2PiszxYuGPJfFePXQTLBpgudNBuEttzpWc72jd6Kgk6KRMLDouRnGxFLvR4U7oCUqPaAXmcdrnS5DtHetmvq5w9i",
  "key36": "3j4WbzsaomcXLBAEKtfgnXXSHKx3TTD9rAZkhA8Gxag1FnjeSWAXXZtQmV7FMDj9LZnAMVjAwK37EmS5g1puJ6t1",
  "key37": "45aW8nZUy4qK1ifEFEobCE1TVEw9V4dTbkMajVFtMtTxBdGJpGmxex9DvE77CeCykxqbpW93VSTLxe3ZCBvfpBb9",
  "key38": "XuMqXX9XxoGgqNuVkGMcCddhkMdb2r1ygyzoL3PGX5Zb4WYw2vvaCfVCVHz9GR3bE7fUAz6QZV2Aku2pUR82c7D",
  "key39": "eW8XcP6ftT3f3onD7kidNfdG6oAPRX1VJs2ea2rQsgXJNMofXSt4zRxUzBcruZKPMta7KT5tjJoXcwHaqXLWPU8"
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
