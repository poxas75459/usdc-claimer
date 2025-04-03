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
    "2zvSSJUPrzpioN441YGKPi7FmQKQTRTJi7skAkLVXjo1GBNc8xxEd4vNPpwJTci1C7NFtt9tz5D68z3VX5bfmrwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUYWVHi6DzLK99BUbXXkDn5pNEhpb5tKnfZaHVkpxxXALb56mDUHrEgpeE6YHdh5vAqBpaReJeePA3rae7FbT7q",
  "key1": "BgSwoXikzZREBWYnXu4DpJ9yTnvYAmpxJZ2zRi2FakKarnBQecFXyKpTa9qYbHJYCg3QZ6mhDa6kJ55dTrUyWyE",
  "key2": "4XkfAx58tjoP9fTVKkHRctqLhgTzm4yd5kGav2yCgvDLM3zJ8u9w2x5rbwDW4SUN1VgHDbg8ese6tMojm2G3JbJi",
  "key3": "47qTikjhtyfFoLNzfFk6TVBF8Snpk7xHxVNZhJQaubBdXs1P78PDM9XkVH1HFbyhUMvKv8DvYbwwRMUUmhyCwCf7",
  "key4": "2wSGTYVSK55nCT6gKHx7UipXJZuqcAhZWPE5PbuddmzizVm9KRkhtzzscBTQ7uezrQ5UXu6gDMM84bAuWnAe5XGQ",
  "key5": "5goumq9Qp9SvUM3a5LrB1JSaYs6D3gKPT8qYYqNQSpoQ7cdyXAYE3Lwq1KoHX11rn75YHxuHhZUWCyL9t7ojtqy8",
  "key6": "5enfDmi48bNx7eoVJS3qd3iK8Yu6Az9pzsrwAk9MjnjJoAY4YAZmhuFnRa9GnyxHEDajPzsutTYeM293RaEjnG53",
  "key7": "3mAnyaSXEsGKtBQGEvUbY3vgRGhV9saNhN9JfEv9RyjH6pKeZgycAVJ92TaJmUW8qkKYKDe1YUE61kX5xBsWoawL",
  "key8": "3H5ddZuVc1cYJySfXG5mXt1wzSvr298PajxuzZD9swWBmT1icaFtzdcuBof3PDxFLgtyjDYUwoFhsyqKmw95uYab",
  "key9": "27mwDeCRW6JXGRDgSbJXyBMMBwWXzD611tS36mJdxwzw7rcNf2KmVp1kcMj7iX5aJFwhRAYVZajeCs5NC9wgNwaP",
  "key10": "UCZFnYPhwtr1Co3nJspRuhhbocpveDCDybwBM1SBmUosihurDQxbkzGX4zQKoYfnixamM9x3v1icSY7UA6j2Qiy",
  "key11": "36dNDbgknVoiYUcH2ciz9QknwX7D5zEfoqN6nbC3aWiwEb548ZzphadhpbCAUkDBmQnrj4TtfcfR5qCCTktnPsJC",
  "key12": "27AEN2o93YAMYWY21nxbnxsTrUvQBHhydYUyNP5nNzf2Q6XErqm7Q94nk1FV5TFvTohw5wB9eqjDApFu7C8dDDsK",
  "key13": "63EXaMWwqv5WhmtzCkwWxrtcdpA9d2ejztRbSzn3fWEapGjBzDpbwG6sAYYaGCE1xJdcRzvSckujTGQiAnbczzxF",
  "key14": "2Unpb92CxTPshtHHGXW6jrLC8kAtt8NGXrWA4Gh1NqJrc2jcskAwJxNUkKAePXFmYo3HMTVdqmgvzdRViEZYRiiR",
  "key15": "5vbKFtKmW7BDkKmxtEk1urttJ3nAS3wYe3sDy7gDZCWK3dKPiER2oAZhsifsN8YqQMbAs9jSkjhU7R4ESKSiz9cP",
  "key16": "26MQPtQnoz1hsV8v48S7rNJotMGvWqJzoWdNb4W9tHQmo1StZQeEgRkSPotcQ78GP8qivDkKJHDWgg5ts1RG9EYY",
  "key17": "3bZFGdzUu1Z75ED49ktryfKhHTvEBUozYqEXxvAHs61YppvZqdKjmRH6Bxfc9XsfoHvNYiKPn78PmokByEHXvzYK",
  "key18": "oNP8N4oKPdDdqD5LS7UULgYeoxi4iteKEM8WcfSddbRTihkvjPb7LbsWU7cQzegiGKsLVgAbXZuAkfMYih5AcTU",
  "key19": "2rFmKx6XQUyjdfvqZiVA45pb6VL6yhZoF6MxUQiZaG1TBaxTXVjFHzbRCRfcDqUev95ehNd7XBRmeomUcqXmrAgP",
  "key20": "2r4ohfaPMLwbrH6enn5ef6Gz7E21njL4KrDiogKiK4EqMcaJo2WoXLMiFXXfFEMaq4joQpsku3V1gGzkGzSdYbkb",
  "key21": "5ZgGEUemjxndCwNhqXNbk6n13GM5TJC752hhXHXorSMpH1ksoByYoiLbdqaPnVS6SxREgonJfC4pftneyXy5fnBy",
  "key22": "5p3M7csweTWeshZrBbWFhdZRniHQhnNwc7o5gcJtwkTkiUK7G9aRZNyHbey5EqCdDJBu6svLUFkwVvE61ZhURqXJ",
  "key23": "4y5YyEa8ZgaHF8YP3PB36vFAVro4pKxTTCGvhcd3AaGyLWHFwLbFR5gWJ2sTVJqtvGxSXyzxHBQ3hQwqu2KGjvzB",
  "key24": "3rffzKsHciZGLFXD14f3kM2Pcd4VRSPXjqJFbE89ysPBhZtrT5MYPuipUQKZaeRRVPCrvRv7auYvqrwuKFQFrDkb",
  "key25": "4ndtrvs8nCMEn3aL2TCiXqKkGYtnA3yqEqfsJ5w4QrA7bHXcxZ3YuJwMwGBnP3u2qcFH4ttQMPGLZxGNpfBtKETD",
  "key26": "4TyVG4MdvshEdfzvQJSv5r8G5gyGJQFHDE1t2VJDJ13MggxXa344QKD5QX8ahp8cXphdtcRZ6wvoLWRUxV5cKtRR",
  "key27": "3vZa27MZxyS7Md8XVfkMA2QNWTZmSL5STU9sovEFGpq1DbiVHkix2YEHeEof1Mq1yJb1JzMYHMio3UG2dTj5qW9G",
  "key28": "3ajfaLdGegpzbWP6SyaGUN7fm91hufmGJK9iDyrmpZcr3D1iERWYwdYrwt2RmHRtQrtw3yrSirVeN8ASc2GAzEh4",
  "key29": "5LaqFfUpCG2pe8NjZUQUxbGJJtaXY1KGsa2S3g3AEDaPL3kQzZbuXf2M2CgJD8UWGWfvXsp7V8y7UCWT2VyQdAK4",
  "key30": "zccYc6yyJM2HXHBgcRscAJ67KZoGDagdxsGqocTauBFbgrpfNWgMfZAa4a6hNQ1bWE1EsUWCDhGUon6fSVqfxCc",
  "key31": "345skcarm46GKMV82NNT85m2AkALAsyy6HDpRpiG6qC8iiwb6kfT7EkUV14wCLZ2uAyqNbu94PZXmoEAkAsd7cBe",
  "key32": "4hrs4H4n5jemhFJ5bcCt114DhoQ84SQcwQduonbjxKJ8G18HMRXPqH3pVopB2HpDjZb9SJ114wdmT9HURqHPqC7N",
  "key33": "5rbYXX5YgAegPmLVp4DXCyptv5wCWm9afW6csSFSyzEvioBE82dFqcGVwrq1Wtsg3pCWZd4vzcG9pPQNWhv1C3ZU",
  "key34": "5DcDNE69esgdsDLGkd8AXS3LLt4sicF5XQUYMV9sqQJtJpDqMwe38vk7WJV9sac2nbgzrdw6TuLv8fpwCJcmuNBx",
  "key35": "58svVAL8YfMhML6pHpfMxQeZEimNqf8zxE3VMGbLGzV6aZTcEYMPw2K6SXwRcBBVP92VKBGUrKsgAuJ8UfoNwHfT",
  "key36": "hu4Cy8eXCWH8naXUYeNRHpGh77HgoQVMv3yzTouvuSLLhwvbWCj9EgjshGLRuSXsWWK6AzgbDmYLGgnPHeEMnwY",
  "key37": "597jsVogPGa5Zc8LWHjDXuq75f5DM4hq3aTNLVJMm2VQYMLbCjDLKgZjgjcuYxA2qTMGYAcuxBU5u35qJBDwWJqW",
  "key38": "PURY228pxVRm4N9gToWb2MjXwrpne5CKuKfF3CSPh85Sw2VPkNsLmrXNmFZBWqHnL6qtLKzxL9EqiLo2uj2WnvE",
  "key39": "3pjBu9bg54gEDHKkDCGQKYnXyaxAL657rPbvQSL54VRs9iuehgHPVLy4JGaUfqkZHNwJ26kCP2VYdiWoDVQd1obm",
  "key40": "457BuK2iNwf4LWDH8yseENtRecnPEmjtgXMVy53PzJsFpRsyoYVBAYTxNDBq1Js65yqz9iSgaDucKYxg3w9MDqMv",
  "key41": "4YoSTuuX6v2DrZcyb4ExrpMpM9rpdvF7KNFBdb2XBpE6XjAKsUP7qpUM39ahUjaSmbBUaQiySSgyRXUgfiyHq4Zd",
  "key42": "sMZyHGX1ot9tv6acvKpV3Ffvgchmjh3uq9HNrqehAEJ4mSyfBFYQf3NsDjNrUpErwzCS6iZs68y8xDorS44rLPV",
  "key43": "4NjcqQykRMdUaTgqe4vJxK8ppWRbx5Bs8rrpw4dg1oY6bg1GubBbgum31oQUcZ4935pds2FBKSQuhn89H7jeyxo9",
  "key44": "4htGt8CPkUSddLaSZjMyhm5bgpsvtJdnyfSknFbMFZjzdcLSXtkz6QZxmp6tLvtHc6mMP4P3G4wx79JTrmiAUeDR",
  "key45": "4xUhcr7osa9HRpvb5fhZMhwCmeAZFWVcAoAdBybTFf7jPAQv675Prk8m4ga75PaMJDYvbgyfFSS8xxCf9d8QARpC",
  "key46": "4y8GqAoKWFpyTZDGaVnGke4RsRDNSUun2wD3jbqFoBFzDxhKfCSyKBazSudAZsrRKkcy4uWHHEvCMknPVHy3JQHA",
  "key47": "4x6u87FpsEwoafeFrnCSX5pszwmVcdmiHX1D7tLg8RP4VyayqY1S6ajn1awXieUjFUY4UvCtsP3NMgJ2bJzGkrgY",
  "key48": "WZwhwjKZAPQeAgZW4FjmG9iaXpRRcif8HrVMevvMxFEfpiJ5P1MmsHLjHdcsymJi9kuFn6A193Y8yB6WcBgotRy",
  "key49": "5q9bTM6szJaWLho63WfFHX15KW776XnUBQtKHi72J6wbEGtP4Ed6VssZRWM2KGUoQYoFLk6fNReNJLqDDwRb1T67"
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
