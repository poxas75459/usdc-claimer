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
    "36XVxzgY2kto7WiLWUNa8LmkAya2LCxsY6hopWY7r29RmGWdLfLgPL8tDaAZwGXmkVMhMaUVs6facaZ9ZnAVFmny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikxT9kS67pxZ9GMVRhr3imJeUNEEbYxdTX8ujJaRZctjauDrrEhPmfSWucCGdDeWssNherpygp5cGQszCukUrqy",
  "key1": "56DBG6NzZNAyug9gXjgBZu9rseCnrw3V4sycBmzFyzAReqZNLzWCtudupNfAviVWZniK2MC9qXFKVUSQTRaBrhYv",
  "key2": "THYXd3ffbDbKoWTtz8bdNQBa9myrdm2eFeSBiCRBzDCaEgB6aYRDUAfpHGbKVvZihUZMkwrZHNJ52TJ9zaYfmUx",
  "key3": "YV19p1nTL9KvWo5hWXoaPgs7Bj2gvyKG3frHZxLn1KwyBozyNSz5YfJjpSpgavPkVstLcgguZkxPPirfbiAxUBM",
  "key4": "3pp1u6HDGkd6hQHR8dkh8M864M8jiBSzgHSQnedfeUpLzqZGUoD6L7hGRXCW13jiYy4QSAYpsndCThJ2PQ9M7XDw",
  "key5": "56CRecFqYKoJgsn9m9trbQE7F5nLJPdCmuLsUJbeJTetta414iZd6bEe7HaomcTgWppQw2ycsamoFR1MhSdpp9Aw",
  "key6": "3BfF7fnXb3gp34qUpgSnGMD9Up6VcPvEnoegcvFMfa5tWmvnpeX63vcyXcynX5VAnqEiQMqDs5333RJuj8izHGUm",
  "key7": "4ZGgqJZrtdEdngEzuJaAeY4A5YbBJ2S2rHNHawYhQBzZFyTQ89LGrBj8sui9ZxnqdCk4MnHqM9VgM7o2sZTJ42ye",
  "key8": "n6u7zxj12xNNxS2tMkVvYqK4BqbeRVjVB4G1qTB3joaGktzwUpF1KfWjNQY3JR3hPpNC9eW2tKHrYqbCakbTVeU",
  "key9": "5MAbedvW2xVoDWofnazmagjLBQP76NsmGmJS5ENNFbrbvvWBYTeiCJPh7HHmz4tooG1rE77mjyAjAD6L5jmvTG2V",
  "key10": "3p6BUx2MK6yRLSBzy5i6MuSk8CQb4gkHeMaWwQNAZwJ5gzrUJ7Ejx5pvq2zbvM5XC1DawKM245JCHHAo5NWHtEAh",
  "key11": "17vXwruSBBy6XNqZoJTJczTX8vBKDzq1298fUPZMzYvBRHGMrfVypd3eZrin8QCVjzFjsVkEFzzvFnNg5XMD6Aq",
  "key12": "q29JrTPEHkhvVZPXQnw6MD7jbrhA7mF8YZthS6eY1ZXWgdCCwBewFsPXiQX2JawUhjDm1QcBrnkqrxRcvAjQs9D",
  "key13": "2Ccw46sxKvd68nA7Jtszr5KxjaSp4hkTRECsTgkRizYsHtKxs6fjumS9tFTKJoS38dMtNdSvpoB6UVEGKE5bWN2z",
  "key14": "4MrGviKYcfnPA9zJjeDX1rapByDSW7nTFV9Rh1Qbh3xQj71kHosRqdgaXV4dNLRM9SXdpfaUip79WGqnNrcYEp6Y",
  "key15": "2hL9ucZDNCfCnkD8S8W8sVZ5L5uhUtcsmspKuxigerWxQrsgZ6vA38KXjwKv12MuxRfDUJKYMXeTMmveLsJeeG8u",
  "key16": "4rFwvFdadPrTxyXqwPY5euUxCQ8E6JF6N181hex8y4gnH9kXnJ7a7rtFEtbVjdLj6NwS6VJkTHM2EftjZupy44Ga",
  "key17": "2c3zaWVWK7XHaYVb1aPmge175gqUXpEKJhzeUcYwESaVdddPGdRHZbABgarXqPFZJNTe89ZtuGDMkFemsq8oVKgG",
  "key18": "4se9YHdZRR4RB5iN9ENmefjyKqyXmNfb6AZigAesG2e1ZXakHmDtowgiLrM4sBJzh8vDNgSjVwnoWTyuoPBCQkZq",
  "key19": "tnRJqS5PCQBt2SqkrvrLWJe1CP9wTRzBuhrsiFRPERGnzXzS4n2Mh37PVvgpvxh2g97FfsV2pnuDSj5PWP31YKK",
  "key20": "3L4iZNJVtcejDa5vPK5dMBpdznjB7atv2qGRS2nbgQyzsV78NCZn5NTMz3VcsVRAUFPwnH7xDtAyPV8i43P2pwB",
  "key21": "5JGjXobXD8pEo8dE2bZzLfM6e1PbCsxW4eYfvimWQU86BNKHA2CZkh3jWihuqSPqRciHH54TEL61YgptGTTMypHi",
  "key22": "5zg8VMF7Sd7UL8Yz6VfeYkMoQG6833yYKxh699N5Q7FGiWXrRwUu7GVeMdCmdhEU2TYuQcL2bPHZHoFo2BMiLBnN",
  "key23": "32irrehQFs9VCzhkReYiYyShoFTEJcZU53YaDWU2wA4BMmhXuGR77z2MRMx5nctRYokW9vG7Xpe1Wqzvg4QocJ4M",
  "key24": "5HzdYtpzTb5F9x3NiH8KzgY8uDQP7BjDuzvq1tXcn7edZTWrkXkHKADa1CCJQKuhQ14S5mesWhUqpVmE2eMf7aFM",
  "key25": "5xgzVXs5XZtBxyYVyK7hRuDwBCHqzWjhBHh7SFotn9LnRXuERcNmdqeWj194bayFoAt5yRYiL6u8f2g3iHpYhCqH",
  "key26": "Vk7dDLAANoJ1M6Fu8Y1bXSZu25PgtgzPXqveAd7JWPW8Ce4m1yP2h1dcuHBYLoJYPu9tL3bfvmcdKP9C4QGPtEg",
  "key27": "5rCyCRGkVVYL6CSyV56spAzsWsSM8AbVWU5LA2SxWV9dyxtud5PGJyWU61Y333j925v9f6u5jVtG8ARths6oCE6v",
  "key28": "u6P9HfpKyaC1DPFb8HCgTZ31Mq6BZB5BzzRJxvGDvyzbQPM5wcsU71ExLabifNM5f97H7GNrEwketkpAxcB4wa8",
  "key29": "4VkBsEKbv7GcTthXB4UYzvchJBcC5USxfUyJHPCUZEEtRCrPgqw7PiyUoY5JL5Lc8a5jMrw4Hd2WZ2Y9T3p9vrfY",
  "key30": "2oY1FRaSmJxF7XjoTTYDKKa9JCbVPtDoTAKZvRsTsBnyS5tt82GFFvFsAaFDYtbkrgZK5de6NnoHu9TYRY6NfUnn",
  "key31": "2RHYZSjcb4CFrAxsSp74xyw9RHyba5FFaBF7qxfFtrBywv5f3TSySNzej1KESHoAbWx5PRnKkfvArqdNVfaDg3Wm",
  "key32": "2o7VG2m97BZr1jDv83bt4uqGxWSCAdLNn4RKasrSNL5kAVjVZCyGW3KwucXDuWzhAzhPTB2DrQiCRBhtjNf5gCVp",
  "key33": "41PxEywV15JdMWkyzpqMBxk9et7GiyEEZ4TY6hbGojpPicp3u1osnWjxhXYirDpTvCEgSFNMibYeJpLpwqU5HTDV",
  "key34": "5vFrSbSe1qxBKRAg2FKU2AUR4wMKkNgRW7XoHMr97uP2bf7Qax1CFwNuiKgARNVot4UFB2A9EcwiGwoGhavahZwN",
  "key35": "3w5ze7FPzqrJ9urV8wNx1UTKuV1G5sQSGkRBhtF9pY2auLCpYc8ai1qufL7CtsYK5d6jvLZXhpnYHcSfZYPG6WXY",
  "key36": "3JfouRdVK7n6jpAM7E6daWoRRZiPtSVMARzhFQ2hfiqw6Hb9c8sMum2ppPysZjUYaeUqp6drcDePa5iaBqmU5s9R",
  "key37": "5pQ7TbKz6FUzGejzzBVcLmH6qYbXTVTwFniT1iqpWTUwq6k3ZbPsUkfMTyyQAYyiLCB9VtBLyqNxMG9MZrQMRj2W"
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
