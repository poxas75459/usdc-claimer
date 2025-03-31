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
    "9q1YpQPX3Cbtik7E2Cfnqfmwizc7M9R6dgFjmft5RDepUyYX92Y52QV9onS9AwsS2cfB6knTTkVXNpk76tyAPpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAmXFxuJUdkhshtVpgBUVKaSYhxJ9cPSXKurMfdNBwYkerZfW3XsrTortqP76U8DBA8gBHPgu8nbdq5FPJQu3bF",
  "key1": "5SmnG3Jc4pt6g2V5eetuzqi3PcXmMR8Dy4H575adHBibUpnUtRHCfESiqeM2teXBtW9KeAXokmSdBcy4BCisyN8X",
  "key2": "4gPj5Pv8e6i7Xufwwgz3vfswvLvb6QtSWnptwZq2biq87CW4WvXgYcWpSkKUaFDmE4kkniBeZMLxegqjWQqpykoy",
  "key3": "G6L3tpYRViSfE62L7CZtZ1xg2e1iPghKo98Kf9PWGgA83dY2FneGruNc4FY78h5oaQGumE17jHHCWLdC1mqkHLx",
  "key4": "2pZKDNeAZjoUf21D5qvAU73RMbVzPsUypboWvGTCThy9uQvoDSi1ZEMcSnGzEQt6xnzKNDyaCSSFhYpbPfRQgNQT",
  "key5": "tBN6gxwchmDFhRSV9unoEc9ARym5ofWCT4KDLLRPndNo4oPBXX4ZanXSqmUkwztGoaSUh8KyoigGsthRWvb1zaB",
  "key6": "2oTzVU7r9oGQAdKDqsVW5GzXj6zsLeZqBBM4GiV6KEisVSP2AJtNK3BHz65yWEfgAx6vuDHDtmNWdVFQk46vNQGG",
  "key7": "8Ux3bBez9SsKtmoUgfCnA2oigicW3MGUN42uimLaoU4YnsKvK5ZwmUFvepGWCc2wnLT2PA2in5MfZ4KsXq13ooC",
  "key8": "5yuotdynVB6TqqEnxyuZk4MtRZvKpv2mUSr3uPgJ8GbYH1JyxysGvW3MYoN1879tY1uFLdgfB7z7dQff2GLh5Nwj",
  "key9": "2oqgFbbF95UrcxPaRJYVyxYykteuuSAiFGoeYWZfCXfvrUbtkfYWJCQ979pGXLVaSPviSzicJ9Xk2f6qMMxGjz4k",
  "key10": "4eT8wGmknTN2dxg4ekH6UWsp1uPHi9CDazfZUYRrMTiqK9iD4mUQn1J4DH8tReNduDvdYT4JZJdMrny7ozFMwoJM",
  "key11": "c5kfMeFrMT5VbqFXF59wx8wYgfVQZFRgJRzqycUaNpw4v159NB8vusywZ3Rfk9afYU9wkcBxwGojij4LbaySr2X",
  "key12": "GuC41BboPMvV3N9RJLN5uyxjDU47f39NetpZLEjywHy6LLmaCCPZGYeM6kS9rkwhCgsKZgJBR9kD3cAcSSZjosd",
  "key13": "2DZ2cy9coveEzQxCqsJhSnWznQNqGMC8tm4VKMpsRiqXzkia3GZKYSXM2KZQMYxAVjHkN3Ka1gCVNZuX7BzTqZnF",
  "key14": "2Mg4fjCi1vH23jnPSBr3AvySuimVbCftN1k8HfRxr5qgDBteYDx5NQSpxhYRdq9RGg5wrAkPbSVNkFzjdL3PbKtK",
  "key15": "5XYT4nyLJPanxyBKqi8kjhoqrdxcgyQAJwvzcHvhz7xLd2f5B4aKmzNaG5jhhKstAZY1dkv8RJwa5DgYbid4Si5E",
  "key16": "55xMf1VaiTyntgdvmLzPBqrfskRmzCjKUdCHZmb5cGJEehdngpQugU3K8BsFck1CtktEqBmAFqnJU4p3e9wGm7Ne",
  "key17": "QDkCQptRQH8c35ua85a3srpctxp4ziZNB8oTvW5s1iRMvTEvnJ6hiQYCChxNRoxpwAdQD9CLtD1iwdgNXLBvZmK",
  "key18": "2onHt2fsBoZd1GMGmSqDyvYFGbqAgEEMSDTBE4w5J6CcfsaYZGv8Gt317GF6ydqywnzE85AXweBLqRo8oGZqAo7D",
  "key19": "3EA49hAbtwuhM9Yx7AZS1baqdjty2xctqzVZFMj1CB3EuRnjDEHHo7dFybgx5VsTmRJ6Et5q1ocsNYhLRdSa1Y4p",
  "key20": "5YqHnh3fMEn5gwMm6EY1swrPXZRFhmpnEPQN6yHnzixiUszTMJmdpkcpdQ1FxPKosmyQ9NV5HDNdq6g4eKZv4SaX",
  "key21": "21hP2tFJXe7mfhdXfPPJ3FfSJMhaLR3GJ4u1qhdpK36qwizAcifTaB4XSFNJsoYUfYKxLohvBCSB6VfVfErVeKec",
  "key22": "2efndPgmpZXZ5WJjiNmD8CAYpAxNVsDrjz5W3fP3HgnAY5AYjmMuxYY6mnCnBg6euW3GSSdnf3htaS8in4CDi6cW",
  "key23": "2BkPFBmkMHofAtbKiLLL1F4H1xQbsBQXfDC3ziF4ubGeHE5qroXjWBeQmUmKXWPehy3NnpC3WSScoa739iS4EyTS",
  "key24": "4Sy1LAJUj1V6VsJ3tsiacjg3r6MhNZscgPaWUoFDfi37269UV3YDYb2Zny1zivJ2SWgUQbszjLJYhtKu7jvQoJ4T",
  "key25": "LUQatQBta7ihYe7qB4iWcoPuvffAhB4uMbK8V4jUCKpjdC81GotGdsKuU1f13qGeWeAt4uqUzp6jTi1aYRiV1Yo",
  "key26": "4MeZmE2oj5xfpCoFkkD53w9acYW6S7ThVxhM6k7UGA3eqLV2BV2kkjZyR8FMDwsEZhVHNyhVkZGmVon7RkST7xF8",
  "key27": "3jeM2QvuT9QAGkuruN1i5WUahTpazhcFh4oHLu4TwFTisKmvUViBoJzqMKi4NSoprnAMvgQL6pNbmY6FHfTFbFxD",
  "key28": "3kFJzS17iSQPpLqLfPSw5hauV51VRkj88SutF4wHzXQA381xdtamPXf2i7JhetgUwZvZrqiSngMijYTFgwzMeZqV",
  "key29": "49w4Rv8Fv575dPtoWYsqL9poXBrE1yPoDf9d4M82bG6tXNzedmBm9HAXpFFATLisC7WkMHFUpaRo2eayUVcYfY5",
  "key30": "3gdrS6EmyX79eSyy9fCtYRMFjpaTm4oG2jKAxgEsdCm1Giv96VU4WuQ3zM6b8mpisW1Kp4UzusKGBnywxNFoxkJw",
  "key31": "B1N3a7VRMiBxv5mbd6KLn9maZiYQR1J6MTbmGdyE2Jf3ArcqXWNc5dLJey4XpascPJyyGvGqTmLktgncoyA8GHF",
  "key32": "C3WkNhEXfY1Dkhguxy3TCdk4CBgYj2RaNNkVS7LtzMedsk3TYJMNLs3y84k4vCcyGA8z9Vn5LiDMsRHNjc2XrV7",
  "key33": "bBq9U4jJ5YRkfAsfoYLh7aG91rycatLMrzq2QbNar23zKzZm1TQkgYH64M83e428XjWd8PbDYVPLayCw3YU3oqb",
  "key34": "4vV2Vrzc5x5q9pN1Qyw5rFXz9i3ibD2nVLwUZeACRxtASo8pAjnSXQou5z6vuRtdRhEwbeq1pV8TgsAbx2M9AGTx",
  "key35": "d4fVPQYRHgtrvu9butasD3TdZhcjth7Kq4NpXFmTuHmso31BY1KevDqTtbvXBcvoz54iYu1ppVJUviBvzGj8W3A",
  "key36": "3z7tSBtMWujVtvHambzFhVXNPRJoCbA1qfYAZhkS3jFjDfsWLQ3Y1c7cymCHgPJ5JtAMt7C2eeozRT8ffKuU6V44",
  "key37": "p7ehoGaLvWU5jYybsHsaxBy7CHBTbH7uXXXbgbGubPb5fQuhGk3nnZjiC8A1Va63Vsjm9VABHX5TKWRL1YyusyG",
  "key38": "3DcQw8wtWmpkNJ15bjHhPQ4VUdxqYVxvDYuRxnu8idV8CFz3R8PoAnFrhteFoCcBgxjj72rPqVSfDz1NHeeUBmAM",
  "key39": "5KXxisqguh9d4KMpWXvw8aHZ12Loo7L41hn6wPo8HLP7VaJgYDzRweSibCHbsB3btD3TnK1nBYrxMKhVxHBXjTzp",
  "key40": "41dj6Xnyq31BKgE45Tp9rbx5F7nBDURhbgBwt8zccGwvxtMnRvTdrs9P8Q8bKGc2y8FiMg2rLxTZaYVghpZEdaLm",
  "key41": "4bc9GRm2Qe3QTwnugMht44GWwKX7cftRjMPrm9L4RwVeuFRsNC9N5o2C3SPqjKfjotL3SwXHs4ewg8TDJ8WMBJmH",
  "key42": "6pzkfZM2xMx7Gbh8AqTawMZeYydcJum3DRPpvvhuugkDn2ZrJwxYJFdEW3d1E4Zug3SH1n997dytUkeBsftZ5YV",
  "key43": "2SjeM9K2pcTqoMRhWTe8unDXXq1ZyV9bFAYJoqexfCZ7npED3VkvSKKMZAyH2pjDzc6tvfEsLPn1XkKdP5rCdx8r",
  "key44": "9SS3AEqSYtKAGf3XT8LZxZsP3yPxKpuZCHWPPAwq97MWeM7rbmFZaDMvmuqR617BKKp5rLGqwstoWDuyYKLBe7p",
  "key45": "nvs65W5WcBVwqhtzyCiJ13nQScY8sHZAYKAiJoEQTCdrTWwUEeEekHF5RiyR6488Axht7Xsesd3Ta8Ua47jiQss",
  "key46": "4qQsJpkzjwWZfcZGaNLCfeGffbonuRxT3VchfT7FjbCSWsPrt93ZWoVmMH4tocSjwo5rJXoknhmMGBMP6o93iGnv",
  "key47": "54xuvmd72Q5bSe9FbV1ubwSsqx6B2UcADSGcNmPt2Q2yhKehx5x22TMbdwL31VrmMfnY9P2ohxV92XuWKuAh2Si8"
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
