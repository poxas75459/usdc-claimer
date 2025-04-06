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
    "3yMC22X4u5c4Lf64sRvKymnkBfHsfy6gnMPBcyxBtZ3NkM8mVoWzTNHnnW1BPCF8mb5mPKHMJq4gyJoPQ8WMjzBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RoZFWLXYALDpJCE4eJnQjnkNqvgd9rU9SmtiRHXcFSzvcmvVyHnM6e3bjAxvSjJ61FcDwwHMNPM7txta622oty3",
  "key1": "3xxuMdXwoLVhFKSAv2wR4nRZq7pg5PgCtTauBPFjMnkX1s87MJ3PJTFXb7VYW4CNSC6d3FQudNxKMT5pazHEQk2p",
  "key2": "2CtbAn1UfrBHjabRihPsZH3pi8MzLvtxaq53NkJKPHeWHLb8zEbu8aZ8UjbsEy9M7Yc7a3mA4tm3UZparfct82Es",
  "key3": "voHvRCjNxxyfqiCx8LhP1Pd1WF5ZoAVkVxqUjYYW2TcrcYnzpcSa64nkp7pNyNeVDTUTmfgf3ZfFRw5AQwE1w53",
  "key4": "5PY5HCCaKEq4gLZmUdyY2u2rkqERKe9pyL3pSxwjmZqx7HNbSeG6kveeBRhhvqStjvvsU3L2v2h2XZNtMmvYvUi4",
  "key5": "2ppurMgv1NanNAqnuXcVjpESPmc5UvFVrebHuSJKRS85xSsLWoE1imGEbERP652SRdUrHniQxxPhVZwXmgp1WJuq",
  "key6": "3AG82Qhn2wiEwMcYPwwkGTBaE58hTnhmaA2kB6WCUcgrZVRRQ14bXSMkPxBCKkyieH3yvuemzS1TAjQSvQXsxnEj",
  "key7": "5NNCFP9nA2Z2n93pVCWpRRuMXGFgb8AmZpfQazWKfSoH8kikK3AFbQQVsxrAuovgxRmWMX6n77sN7oiJPeMny6eY",
  "key8": "xdrDuVe1JKKziqpcYUbUNqhAowY3JdXu5MYKdA8eswZExsock1KCfFqmL5P1qAPUDfzU7ndcZnygymSDiWm9vQM",
  "key9": "5eyDPYrs6ym4GJrLrTAKZpTkWJC3LC2rxDVPZForTTLP5DcczPXS5ph7T5tfFFMkt4eC9UoFBcbSQErd72YuPuQe",
  "key10": "2HSkQQFSe6ttBpVYNFXFbxcCnfDNBoHWJLgnfv9po2PQ7dThpnZPKAvG6JTURpXvwJZVfyn2AEsj998chkhCz4fY",
  "key11": "65ojdqfqD4tJGMUMKLEPmjiLKYFbWsgZaGsPjosCUrhvnHwMMfeoeTt8afAgm1L5fCPzcFR3mFQSiSq5cJCSdv3t",
  "key12": "62HVfC2mTuHxLfEBVR4Ljt6jmGrfWDeMmrRkkYsjY8a4KQzyP5D13siRxqVTHr6cTgFJeLz6PETSY76onf7ReWGg",
  "key13": "4ydi4GAz3MGR1X29p7nBMi55PnLxC1SaCPG9Z2GF2hvVgJDGEeYRKpyVyQBhQnNpqNQpPS1fX9QheNG6D2hqYtGL",
  "key14": "3JJZoB4yLNfTg2dYKhJgUnfjYABgYi1rstc6UJZeXwo2c97QDvdGuRrLMRj7zNZzuUg8pi7ttN6vVZWDMZKeNHyP",
  "key15": "pnaRRRHzjRaMQ4NV9H5ffuxbpsdCogN1eAEPV6zdVxqEEXY6giMzbtdtZEb7yxec7dhDgrNNBXeqfnNqnJTkGTZ",
  "key16": "3ZcyFWnVZeowRL7nqUZRkerYbiWhTAzJVZone4m3iWRqya7zXKPsgkJm9iGEdpG56w28M2WgdaVbvUrbRr6dNYuE",
  "key17": "5kzCzyC1CqPuVvysvCzy2rFWYfFpaRQFvkdEyE7uiiaMUtM4hCDpqDoMC3C1nHoxLbHbUDgcj7mn6Sho88nkWFiA",
  "key18": "uatWZTArFinF5TQ1Sz8ubhYgtAKv6RxbVxe7amYLdKemkGXDQsMJxAViPqff13AekJyNoXjkKxk5P8wSpKK3Sdu",
  "key19": "5jrJRrNnMM4Q6U9Q9LQcs5TXyPvxxPE49cpNBShMenWnfi6BgBFWJvjTVLN9TtpobqP2hMVMvvA6RMdGxskoJhAJ",
  "key20": "4iyR6HSDBg5sWqd8E2RMcw4oGfDU65DW3BuecpsXruiYVydWGepRZXbXeRcXkf1mS4EFGJD3CGBQB7w5VtiDSxrT",
  "key21": "3wdCqFYgXb1JFfrzQ48FTFGPBbnWy9qNrhxyFdTw9rMNYD46Hnovrw1VGhzkSQabdji3Zm5kSdpSm9mhLEcPHHoj",
  "key22": "5djVSy3WqMc9hFsZsRiFJv1CFHA41T62bYLctZJme3FfdZeDn1cXyM37skmuzP96DeFbrf55eCvUfWjNoM2NhHdQ",
  "key23": "3Foja9i9rnktDAESwPW8eYrf3fAg87G11hFRwNFpc5bB1GVL1qUHpN8BaHmSCeTqtSD4Laoq2w7aaE7aoggPSQZg",
  "key24": "58MLpiED4NFfjHcxF6NVGhyPXPybdWZp5Nq7opT3ksx6aWGZ7D6YFmJmPWZgGGLdNyx8YAPrykRuFgMk9rEuA9bP",
  "key25": "4HHPkTpK1nfzY6x3WkLwKwd2wxeWA9mgHUcumfiPq8QfVhcpCpayzbnNLyU1x8q6XZwiuaAyqHAGWq3rcc4tbfcf",
  "key26": "5GoX6brwLQtFdgg9H2d9gEHow7FoRGD6k6ksirn1Q5KQ9GTEytvk5Lrx65Tq2sVp6PA71XA88FpNwsjrcNDLzXZq",
  "key27": "w2CjhwjvHMfehASUTn5yqexVg3khfG4oYTwb3h7c5Ur47G5mYfxLS9hgTqsQCdyV51DN2CHYS8c9hxWUPkVsTnN",
  "key28": "3Y2ha9UmvmaVNhhb7rVcmajzdedaAaDPzA9zTibVG9ywGXr7eE6S5ZKppWVsLNqT4PrZwX3EFBhqYZzcFQJkph8H",
  "key29": "3zk8GGwNHEaZbVsZ4VRRU6TvdRHPSp2PbDsc95mTvD4RdCM21grSxw3woxaABVpSA53ryV9ELrnDiF4RCAWbxAh2",
  "key30": "53Yz8H47vrf7VRJ6pgpMgUdsCSZRVi3woPTJVWkJn7vrdUySY2rA4AzSHzov3dKJKyeVmMgg9PU9Bq4udLTzn2oP",
  "key31": "5Rojhci2sKqEhNnVAADbKzdZpFayhUcktM6diYckR5PeZ356ohF6kiTCD8FAZhLVQCgxA3UqQo1yKpb471uT5KMK",
  "key32": "4P11Hkif4xVrCXwBb95bjNrrvBNgk8yALkajCmc3HozGso53BPjs3Jph56RvMZYHP9hKi6g1yKxnhwS1dnWwFyno",
  "key33": "ZWmHkyoxCMCcvUkGMqhP9xRo7QsvADqV3A9mqJgZL7YLfJWr7dGDTvW8Px7wXdtoaG29rm54FotzEuYFvu4kwqA",
  "key34": "ba28ZnkXXHKirdpijWDZVn4bvnjQ6BTJjjmxizwo2B5GK8XAYit8nq6FWqDp2e9B4bTDeNAxNnwZgEWAYYp8yxi",
  "key35": "2xTSvmXRDwa3W2ZsRfUnDN2Sj2jcpy3qxiELjzSA7mpDGZmMrYwJTonoNzspfZZ2An7ZfJ4FKWPwRQN2qnkW22gc",
  "key36": "2SYL2HMsKvyojr9yphrvs3msyZ9ecqB1xAB1q3dLokqzyZ4X3posoN1p97Vs8ZLhdj6gtrQ6F7dUZtsfiZu7GWNS",
  "key37": "PXBRCQfNTA1Wg6ZgQnZvV16VjYXCusMURDbU9LBTze7NL1BqQ5sfNRJAy2HftQ8Mx1wxPvNeigij18c7Nyh12Xx",
  "key38": "3rtiHcsFcxX6dXtAn2HcQBj3tLxDaKLSvzgGsveUEqCvPEouvtmtqg1y4K8M5mnqH3oCGbdKwXocnsTSysFAurSc",
  "key39": "4R9mpLZgoxKP5ZpEvwhP1kXScy5kq1QPi1jbCZXoheUv6gdUydgfsQ32bqFZCMpDpLgMDtxw2WNsps3C6s8xJdyT",
  "key40": "5d8ntcKLfZehkrSdEycday4HeypvwkHjUbTJKyi1GvK1u2Xbodks5v598sPnZc8CM1ueBfdz9HJrQtRnMGS3fxa9",
  "key41": "2i3bZcqC8kodaLGx1RMoHDEh1eozYtPd6GdLWxeCNdUooN8ns7v9zJzrV1fS5naipeGuUbxXHDkTFF7TfGrF7UcS",
  "key42": "31AWWXJR2KV19nZeW2VQ9QpdYcZ2C6DS76xgLsD7UZZpWziyiqfTjEiyg6ADp8N4dDuvzrCshEry9A7reLq3if4L",
  "key43": "5bA75oxjn2graYwHcjUv6XXc7ppjSxbofBFpEve5n2egfggANQFnVY4pv2Gh9s6EaGQ8k9mRCFZn95vRSLrASeFF",
  "key44": "4GCctUhGu7uhcX7FfEeZoLSBbvyo9h5Hm1FoRWfa6Ac382EEpKcgYG8oXM4oVLU3ykshiPH7Snz753MdmV1JhN61",
  "key45": "24MPWsfmj8AZXN6HmVXKB2RgUfWmGE4qSanpN75TV5LLTyVJ52DRJXyKVjYJykf7vnuEimfknooiHj9MGYkAUuir"
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
