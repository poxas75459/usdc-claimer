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
    "2EHPiPM9M3BJsacwUyZZgESY1TvyEJFcKgGyWRLfKXrpRqaFi1D7swQWCcUBTXrrfnnaS4RV5qNdkfSuU8He9JJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ckaubuMJn5nv26zeVDenYTTtWtmdCfNifGouXNKFCFi1pikvUrhTYHJCXcFv9aNw7eQrTam3QC6KaMBeKuUPnb",
  "key1": "1hRgHJpgnSQdpGJ9m38T3kT9jVxXoHxKksBMKAzxZ8hmPpx2jzjCsq5ac9cbJKz9986ir6rQt6qz5ktTs9bxcQZ",
  "key2": "3zcB7AVJVzt2zMXaV3MLECB4bH4DMbJ6EsKytDM8WFq7gtj9ZgZ39qHGbb7KSjHRuxY7Q6jSCGdRws18vG6pFamb",
  "key3": "3aj7GQmF8mhb2kpSP926GD8hmAWfiZuJ7rr2RD25aeLyjXKBt44Qpj3Hm1MRu5sRj5dBfWZ34eAG9336yAmviyhp",
  "key4": "4RsM93PY9xGTPVT51BLsPyS3D5PHNwKYzeJPa14r1ed7PfTx4vxdhbtoo49TUEVnnUBxNJsS27TKKPergNN8uP3Q",
  "key5": "BHgtgJg7bFU6f2KsD6SNpxLsjpmmSBLsKpgaqT5DrTj6nPKuBN96DeK4gq83RFSpfZux8K7F6QsMKafbsCEZdYm",
  "key6": "5WfU4G9gajtXkpx3jcgXkCZGk3vcWEa5GrGYf9euhWHYomuTtE8EPtg8umHt1acachv3SqyZdWLpKqUZCxRFPd5P",
  "key7": "TJWCkBQgpWrEpKMUDp43a4pMhoq5NRFzuX7iFNfHZKkjTpeGbEJUsdCFLedSBefoExLhuU57mHh4PnPQgbunxEx",
  "key8": "2yyB3mdFeARhDRnSiC72GmBxQT932m5rNrKbkrUkuw48149rLATC5s6G7r9Eh5brmZ3RQi55Nw4i5n43tzLU1cDc",
  "key9": "5Bfe4CoCaFHoF3t86baqM6q5AzAvB9mxPLdZiyWAYdT9EeFfxW4WvZJGZY3w6bbowNsFfJWttks4gTBahoFCUYqG",
  "key10": "61S9qW8JyFPkgfESEAMgYYdXqWCL6B3Sthiih9VcBJDULiGN1Hk1q19zSKCGYrTJJPPfgwWP4GYYyZVoYkvanGzU",
  "key11": "5Eh1M6bxsQhJK5yTGjhFngKdDwPe6nwJPRq8Y7d3bwgNHYg3K5s2eTLSAUC1VqCJetJEcGPWqqNjYontUuF8wq1r",
  "key12": "5zSL7owaZu235wmcsbWTp3tXBnZ91f2Kx1YPGLZz7iX1hpMu5Usnqi7HzhY1fqyePweuMaotMGsDTEbFAjWa3ToS",
  "key13": "3F5BqBMy4B9YvhzKYUbxY56K7XTLhdmR6119fwdrUA4pTqo1QY51igAWVEkremRgDsmhYjJby2pzWR25qLbVLbBd",
  "key14": "3cPv51HkLhNaNZHW6Gey2EeUJoJZpQup5u2vZtbEn4LPWhYorx2j7rjrJuv5hX2WP9L4zNCakDgWFaWDWrNP49vC",
  "key15": "5PWCJNAtpMsSbtoRWBL5vMnyq8VxwAnoZ1UPmEnzKbcSkAVcLsjo9gk61MHMiQF7VRpDuC57yHE2NA54oKfWrgrg",
  "key16": "2Mn2JuBFsRJTaB39psk5WmEALh4sJRgMzvuFZmczt45by9nQpxDsnMns31ZjxbB9RhUuDy8SYVMCMNwUZh9pD3r",
  "key17": "4CN14d3RVS5W3Fe4Jgr5cPZHitDQLARNXJ5QJYD7phQGLDiSpqoxUs4sqSnecSfTHuJT28ydSNrHba17bWmXVCJX",
  "key18": "iPZa1seki6fKLPAfGXQYyjStcbvBCSF7X1y7oruGs9sqeNj8Jtoj36GQyTzipwr9Vg3iGtY1wBNJNFGhAyGZX3U",
  "key19": "2cFGEdmouEg8wXpC9zXoA4toTpVU2nwTuf2VuuLuDfYtFUwfxaG45JMv7pZvF6LTnGpEDmnPmY6Btiwi4TZDn3g3",
  "key20": "2PYJe8bpqhtd3oFV2mEdXujf5KaxyhGTfGFvAgn39BLGAHi56LiASCoU7sGku1BF3ajCqZf2mwKRdsL9U7gSWULC",
  "key21": "4X1NkFbeLwSpYnE9g6ptDijeGVsEJeaPafb8wzxSCQ1N87FnejjhXw6XDai2pBRRBNWSZVWZ5BSi6NftnNpS692u",
  "key22": "4LgUjBifmMA8YnZkBYJb4exPJ1woKMd3uXfjTNegFUHLzNYK3NiuNfphCnBWuJqBBVHJqVj7HvwW3Q3y84aaEug6",
  "key23": "3Hjtcz9b1T6Zy3nvJa4geWr2RETBZ6mTCL6Gf8bLKa2zrDUDvFDyPm3zDyBt9j82qf5SzoJzRCmikRnrVChtNG6k",
  "key24": "24KwXZDMeuHwDLxSWR71p4xheZKvExRdBudTgFzCpnpw6ZbfrmY7tMParCxZmYdJN2hnp22GiNEz4vefnUAfhwur",
  "key25": "3j1ctB6biNaJJJpfze59LQb9L1M7Z8BnhuzNpogw5NrRqXif9XHegZUGgKWz91WxsM4VfApSe9mKLBo5hqBzEv6q",
  "key26": "8HKfconAmpxRkazC5wg3a1CLr728prpHGU71qMJ7nYjacQREmhZXpZcP4CC39ABwuuCvFtHMTQ5eH1FLrAFRfHX",
  "key27": "3eczDxS4Gm9h2TBwHDFY5meRkKZLy1Rm5bLgossqg5LwzkPM2NQ3xRtthnNz3vGT2pLgrsv28kaPxWY6PBNxohsP",
  "key28": "5ERs6oHpAuAuNECkJ7P12zBCuZHfT1FDDkogR9G92jFLBqpucYKdcrQWPprS63cktNUem7A1gkJWLCat8gHvJ1zN",
  "key29": "snPrdi1vAaNBGtJ8Ky37qA6HUJ6JYLK6zb7zrJTmbqeBJ8DmFz4EC8R8igv8uQnCq8PJBoPwu5ysgtdSb54zwsG",
  "key30": "3PYqqGhQMQpNouXfDbeX1zZvp6t5DiuF32zt8FfZpEgJdP7zZSEg7uQkHNPiMeeMMcz21SwdEUgAf3BnojRsUQXp",
  "key31": "4ggWXbsXJkZ6mkpFDYjwayxbzwxdaywFCQFHykx7BwNWd59bK1T65ELjYcTVBVa7z6g9fXaHdwMKBpHGotskRKpH",
  "key32": "4VtJ2jdXZKtdXKwogKKwVdu4uGc6XLaUVN5zEy7um2xs39hvMtVVkkQ7EecjqjYHwCL2H9nc8Ks7ycAazZpps5ky",
  "key33": "3v8bqadagJzp19j2XYiG4j33hFjk1ap3yUnhG1qG53VV8d9XeiyPbkqXWRqsXypRKNAmL2xeLxfh8VngPP6zDSbi",
  "key34": "3tfUnB2dbpVX1WeVkVEHy6ArgvD3X4jksc6F6Hv6NwYMfKUfCz8PppjzQUmHgLqx2nc2qCgh2M5VoXgsuF9PrUG",
  "key35": "MKEugftSgZN2mYaQn9oFp4uKwtn7xireDNGVthYheu5Yzxiuk5AAmg91tYNyXGzxDJ6ZWSWMwaHDSoFUPLPqjee",
  "key36": "37vLpYk9VXbEbjJDb1ziNvZcwtbCSnpma6wrn4MJCtvoGhYWrfBj85NiJAFjihkN4uS3J4rc42PZf1tQ3yZyz4P7",
  "key37": "K2QJsHfPbri5DqFYJBAnfJWE8VVbYFEKo75QWtcBx66DxHbUDKhj8vmSHSxd4hU4zjTVjo7nvsFBtVzCc5NMo1t",
  "key38": "2Ck8ySJoqX4EtRdJqyutdVjaUcGkEmEDD2q2LruA6BtKZZ3CH9ejcaoaMZ7ehBYiwcEqHB8hPqW6YHAKcRNJtLyQ",
  "key39": "Y2TEhJ4gB8ifYvEECwALWhJeSTcE2HH1cM2k4QEvN74n9CGfxEJLeQyHLRB84KiTmBSP51jar1tUH2vrptUSyEC",
  "key40": "2b99JXRfSRHxUB57nM48zJSqRHto6B4X5x7XXR9AwU3ocpEEwD9ndpc1EbvSz7DBbh2rWKqaLpr1ap1nLfnNZQ5s",
  "key41": "47sQhCXk5ZtnmGtvZ5SNaZPwvkZtKXUXFAdfQLPyf8uf3Wd2GMXFRUZnMCSPf7KsyQzYKFKerNvwSLWF6oB7jV2b",
  "key42": "3BH1kfG7Ndx6z46BJP8ih5vjRvk32569hbKGwHmyFU6rn8NfKG1SQW3qWu85xKHVWyAdqYf8nsboZ86fLZQNLBPk",
  "key43": "34eNSdXLR67GUdKQnUkmqM5gyxj1szY4ivsynUDwHQ3kRfuoPY3Y27aspECqw5RTpv9aYbVuN7beFubyLfPz9xh4",
  "key44": "46tmexfvZaCH9QNk2WVwwGS8LWLrR1NwnCSVKrXbZ2o47XBUnzmwJDwfetVQcU1yWrzD6Zmyi7ANM1guuuZ9Ej8s",
  "key45": "5j3pnoNpnkFkx59dAyRtaZea8fTY7pCWKwXr6fmGMGTfi8eWoXs3djL6FiFQWL9Rs5tSqwwe5nY5rFvTuB2uiEKh",
  "key46": "2tA3gAmDCVdMi8BjshTLdZ9hRWjrqxLiJdH9nitGbF6Pay5JjRxNDA8joVqVudDMeV79QEdQX7foDk7VteAWsB1j",
  "key47": "ZjE9MB8BWJR7iDfxogdxUq89bV8gjtKarpEDbgc3ZpQRdbHx4ayMjUjs4288XhY8r8fVuRUoHwirF7RPBP3RRay",
  "key48": "66tTo3wUWNieMLQhkLBRQJ4tiweKZctwSwhzF5ZCFNa64hWQiixta9Pj1PwknvWX2kthjDPGsgsE4RrYAC2Nzbiu"
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
