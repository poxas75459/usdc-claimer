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
    "4dPCxF29Rq5re28taNjqFTYrSg2qJiJFASUZX773nrm3XVfynwx1z3VWuNf8hN5yZ8VuXayuV6nPHXuL6BAGVMsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mvz46Vkj2n8PyssmoabhzaDWLAHxxnLP6QXRuexSWcYiBmWAxSx7Su4367nprenT7JMQYtGJkFcFPv7W7G5UxtM",
  "key1": "2s1wY2pkRjYgggcRPuXebysufg4oTRFgZodTwkJiVH1ZiZCCHQeaBuonfzotFrQTZmdTLP2Fceetv9BMvjMn74PW",
  "key2": "5d5ptKgK7AUFixLnWpQrGzXXhjuBLgR4HhN8c3mTQPPjuRg2ekdvxQRczcBKjKm9xTRmQezAUfbvfQ63P1L1Z61M",
  "key3": "5efxkgdmHfEdGjgugxFRofNiSGTFBKButDiibqqD2JporPL1JK1rN9LyBiFATnLxgVbuQgcgy5jaRtLncxEbvLL2",
  "key4": "2Gnfjo3epzC82YGdKY1zjfBGRfopgBbfVFzgsHw33Vxc4bfwWg78Rormu5wG8u1zW32NUG6ejEdPbfxTDDAHhH2z",
  "key5": "5ZabNwYmGB7bWw8q2A8XBM2z7caKjwYPwVy42no1w3wMz1X6RntYboVD77foF241LvdixjxxZZqMzc6yTv75KZwY",
  "key6": "3NzaPBkNYCrJTZGGDZQicafGxUF7gvwrKu7frG3BQhn7VSPjb9TginnMAb7aG53koLWn38a4e8iNjPnckyA4k7Cf",
  "key7": "66YRoTCXJZ7vftnLZcia85X7oqwjgtBMsiYZeoayPiazispGNDJU6YRkiZBwctXqnppDf4c22UmMy5UbD2o4A9Wy",
  "key8": "NsmCWdTedqn2GBjZHow4P2kCF8bzJqDDNJ9mjXEMkk5v9HATnsD7SmjUoXt75BFNGPJarjRpFkJtchvMTtYDVtK",
  "key9": "4Uj2qFoLj2YbfPuAaayCoPCsYMJ6KpNfa9xJHwkCsSRVhqg7Qp1dAXmYw8UwreAK4e2gnibM7Dww747F3xkLk75R",
  "key10": "wgFFUXQkHKLG2Q5XFHGkU6B1GoBEVcs5vZKYQcDXhZEhjVrbgz4NTKZZdvwau1S6oDix7sGJdhXoGkrrJev8AXc",
  "key11": "2nNADamCLi5AYcid4S3V6gUCBiqLhb8ugjJfP7rYt7CpWLWGxrwBEWqHphqHdbTpFpPmzHcWYnajF2J2LpsqzbYF",
  "key12": "kVaN6JYHD64uJcJoqUZFmfTGQ9yx6WwpMCZEUAfnuXcs3ZGKb36Dv4L5ZxxjQcvkSH9Bg4YVb5tSqSPdFPSPjGD",
  "key13": "34k45REXgf4a96V1fiCAcuFC3FbAtXNcQM6vfbVrTvLT7yQoS2DqNMH6i1u4T9d7qCk4FeYZJGAPqKCQkkV6HkZb",
  "key14": "2KsPABYoBgkZsZ1ZtLefQnYuzJbd1iYkMw1kpyktkHcT4eWR1qk74FWkL7o7HZWAKcnzCbu18LvUx3QvaCGfioZb",
  "key15": "5HXoA87fktQxoeerBSopD4jQtz48vnE283LFZWCugp8F4ijhpfbRBtDbGCG4nMnhs5EF6Bu1euGq6CJa1C3fthxu",
  "key16": "48K8w1HKP3wFZBsRSs6Y37PkhM47X1ysbirdFCDsSKMVEfymXTdpiW83Hw1ZEdQpRyPy5XMXF1qhVmCFWMaSm4MZ",
  "key17": "zRcU5A1S7QaN5vgv2E7bnigAupQJLJS2nLCD8fxJijFse5iLvfWXg5Meav1ZJBaSbU986ELJJ8Cg3wy6smLU1hb",
  "key18": "nnEHYf68Mu7FaQvUVgvzXxrCsAWbnzBoiRFENAya3WJAoujJ29HAfoGomDFqzvDhXUNvuD1CipriS4WtutuGMZE",
  "key19": "3VBniTpsGKL6rEtxigFagwBexfvykesx5SEXyjj2CtavaRz9phTrBfmAAbq8yZcub14N5XkVSoGCMjEDLRyHTJXo",
  "key20": "3Ndt9V1hhxHXyHGBUHPEBV4pyPT4qYZnGVY3tzsPFKE6dbbCpjYeSK1dsgECbi3ywF4RSdehz6SLH89UovGJ6vVJ",
  "key21": "5NPTCVwazfVkompaghUqTLUUWJ1oBtVULemm43nWyY6hxiXcYABoUjPrR5MgvaHjy1MDfFwuzScKBw9qyKzjPYG",
  "key22": "2kJNgv94KWbqnjDGzHUoAPQSnyAsz1cbinmaR8HuqAyRMqi3VCSUCr5CLk4FcJJvAPzLpf47SxQGVckBxTEwmbqw",
  "key23": "5Wwdr5F2Bad6pbRNCVzzqgCJFChtWd6WJq1LtxYBCzX2mBj5MgGZzs3guCveEvm2jZmNrBX4U8PvLQ9FQWX7Tfsq",
  "key24": "5pJABBpU3sQZZCSqTUR3uT82WSgnUGrMBFVdeHgX1FzEDNmUHjdCaHCxSkzFXCzX6P213QDB2iYoBgKWEeVGuPbP",
  "key25": "31XcTrfEoFXeEnwEebk3ssuzzwSyf1YDyHQ7LM6UWVpaj5ykFca7Q3UyfdBNmaXDeeaifubhG5x4QcBiC64mz8rp",
  "key26": "2jbVvvVmhRSVKGCuZkeDGP2GX861AaZP3Hx4nVFmcD7AYjhvGKrPHVfV7Fo4Levi9wtMZiHVnKR2uXvBpQiJtyRQ",
  "key27": "3MD7hjKWsPpZd6taV72vrArsXZGewcxZDoQgMVjHrmsSifN4fJ5rMgGD5EgPtcEyhxNrkCntxQEmm6VPEzPrrtbi",
  "key28": "5iDFXcQmibE4x45bfUKcMLbvTq6zH6VYY42csyo86HxSJ7fRg1vpLeqY9vqX8pV92uguTz6vdKDfk2LQeXXtkef9",
  "key29": "3vqkwQGN8nGboHEHtogRRH57Ya69Lf3QwoRwaPVT4t6PH8hH5XB3R5gNVs941Eq3fkJp8QLsMFLgDydZ7sxG2yb6",
  "key30": "2ZBp749xr22BKtcPBLrSRYXuh4u4DZwqhVFUHRDYYxnTJCv2rJvbLjqcwLaaeWAjEjzd1S2Fvgd4hQghCHc3jKi1",
  "key31": "3L4tnxLTWgDWP9Ln8RVKr4g6EQ84yD9Tw9HRkeTAZMmrMmNCVVvRgykpXxsLcA77kWJWLYZ3eYio1kFUg5ArHAMQ",
  "key32": "65SrfP4skoaWtcsndTNNJ7vYgKnpZqqDS86ivp8qFs8RDVvy3TSpxiJSH4NzY1SDuPoSi1aaH9njLAsqcjiV2dbW",
  "key33": "21rmRgGAErqYz9gZmnHeQRyRhkTe6My3C9Sx1VoJW6hZmWdubDysKDZCoYLeu3ZFsZMLjkNxCPwGqKTQP6xNATHg",
  "key34": "oFHdTgF3KvKAXdrJwvEAxbLWie6htX9nx2A4Tcbrr1ty4DNpF3ZeLw9VjrR6mVEYxhRJfYKwT94YguCq3xkFeoj",
  "key35": "GUKDRoQSEw3qpar8UmdAsKqsa2Pa3qTRtfnuSdTMTJ13ZAugtEnahDw5fAn4Wub8o3bsrgQ2Hk5LLsZL6d7kkwt",
  "key36": "2EPgVbYDEmSmBSR149Up3HuRKLYXYwoYHLNuKU2Ujs6bq8x5VpM8CqttqkVgPp6BBgNtzVo98z48ofLtnrpjE3kS",
  "key37": "2GfT1jGE6pw37ZWJoTf3AjhfW7v9T1vsLvcBKbajdJLzeG5jyyR7TGpF7h42HFqPDAYcuC3GTr4k53C16r9BwEXX",
  "key38": "2r91NPgmS9yi86Qd5kTbTQjHEEwYE6uUUVNBEWyvvg9uo2DBDvyPyWqNbNcc1t2QiEXbStvQBsTwYwwhpsvYELEY",
  "key39": "im7W3ZT34x5g8pJPJ6X5gN22ik8NqsbAJBZy3Dg6xaNwanXQV8UMKYcEPaWt63tN4ep4ZEu5P88djZ7pnUwHhkK",
  "key40": "39sCLafYd2ojN6Mkt8Z2KzkyryQc5ungTX2bUrYXxvWJnJsEemxk6pvtWi4TnKxHMqJmKR2fvE5UkJgk8qxxAfGe",
  "key41": "3dARE4JPfo2fMp65jUHL2MZkPdLyjHpyMWyhYKvbK5FbQmzMKGYt8AQCh6jhYNLn6J8v69Bkhzm5ckwzCWEgyMxn",
  "key42": "4KYJnjTDpn2pBrjnHDHvT1LQbGknro1LEGWWWp2gLfYgXAKnYHHvLQ9uvVx6ZMtgjr7hFD3HfYPz4HREvGxV9ce9",
  "key43": "4tRVf4n1mHhp5iRzhy62kw4SNCqRrTwU7ksUE7jht8k9Ddv6Yt4JExQ2Yt6FFrsayv3UG3BCqJXyfvya5ztL1e3T",
  "key44": "3zES1sX8zVQWe5bCdP7VJDg5WsxrUcCGwFZViUmYaQBRqYegBDU7L2froStFzpuKBHqVX9sCyCGwFfG5TXALPLX9",
  "key45": "34T6gwaw6T1gS5oEWGWF8iZPH8HiwRwSg78wYZjSzJpURB7EmSwthFuVrou9qN3Qy4dSE7egay36pLLErKDqc8Mu",
  "key46": "3BYzMLJDZYAdaeB5bfuBUVhiWqnibWzq9urXFtwxfY1jg1FDEfntAKuQwz7VPAvh12LuGBSRd3Lddn5Pirubk7ic",
  "key47": "66xiqSMs93jf8XY4sn2QgcWELoZJobvDzLf5DJHeAxLad8vh91a5cSkdLvE2JTUXGrSCf83o1WFgyKoq2Sya5Kje"
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
