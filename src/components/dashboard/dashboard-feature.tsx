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
    "3VTHDknxPKn5yiNYAMKErHdHnWAwtqe3X95mYUi82DUoCjw5uKsJWsaQFhHxnsFYdKzigs76t6ZYxqaW6LcYbbtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEQSpkeQMqWQ3b5LSk2pzaNXhvGc9PBBLGyyq1fcL2cyLXSySqNvThP9DPLtWX8RL2TDQ21UH8vtfxLv1UzShkh",
  "key1": "4pEkgGWFjQ8hmy8QL9sEQkPiP9jwiY9rWzg1DVdyWQ9cHhe9F8WSTXTot7z8RqWs68sCzbQuoZK5Zvv7zyoTJnTe",
  "key2": "5cQyzwB4vDTkrFpHXSQeoy5k3DRWqufwoCisBLrnmjtmmjEM2CJPrBALxQgSWV3t4QJVUURgcBqKJfgQ6L9awA7W",
  "key3": "HN8H71dRqs3GrVqen9NXUF1Z9sKh6kZCqavEsQV3hoMFEHEVgUMnuoNY4zT2iLa3W4R16r8UNeLJ3S7EEGJrGq5",
  "key4": "2g6gA9SterdTKeeLtgMsVs6eceDMAVYou8yj4SPqoxELJUWrNUjWD7QT6apVeTJJBzE2a9KsPNGyV9y1pv4rhr58",
  "key5": "7iZCnXPXdpokHK46dWRGW4uWUhsa7uCHRVpQbNRuQNWXoHKxSnKBujRsGbceggxVBewD8AGWFTB72NRejnp2JHi",
  "key6": "4CStcUyNxTGVHong61bMFExsnfHJhMEayyrg4AZGpPyBCMMvbxqtAKx45G45ra7Bn4FABWjRUjgDDJCcHMNKTS6m",
  "key7": "JUBSsUxEmAGngadTA1d1yuui757JMcUfyhsiwPVPLWWCEGo7wMkQUyzKUw4LxSt9FuFBYFKgbLcfK7WqP8b4jUc",
  "key8": "4GgXKPQBn86iG7xPB8TFds822kNXtU9HVEsyFxijqjBg2QvQqRsKdYLepJFFJCAtAwBpxVciRpFFBCw2KFJxaiYm",
  "key9": "4LovyAR5MRaQFFVcUsHEkcsiPYt3pGBEkdVbgoKuTbxKA6Ys2CLJFHFBLCrdXjcPTjfmEFcG5s3JYkpwG7vKTzWy",
  "key10": "36VBKNGDrcvX9o49Fx4LyLbZVVvFmmreK38ya8Yz4HJ1ij3QfTntwYVDs3g8tEwF6S53YBmq69A7qHTCNnRP8a6Z",
  "key11": "wCDJJcfk4YhYbvbY3bPyJYT9p8hS5HTtFSDSo1Av2oNHm4qk8AM64aBscKfpGAC2LfjA5Jad9hFLo7GgS1ntV3P",
  "key12": "65gPZ2E15YQdkFL4T7rwA6omR1CxdRMLtxcfA6TDpVA2rAbRxVemdg6crKEXqPzHDbUBovTLMzvTugDG1e886rRA",
  "key13": "j51hCtfq7jtn89uks1mm3p13BZV75hTwX8iLNtbh9wb2UUa2ZXkzwhxGneUBgP6LE3xEKBK1ty6GxRxq5tWCNLf",
  "key14": "2JSXVEY1K1hMHcLMAoVQk6g7qSQ6nJL5iitXzreyRCApZPJWzKRH7ujxgEAok5cztiVS4M86L3CscxfdvMqaQQd9",
  "key15": "5sdcS3QxC1gi7zLKUceBuQUVR5XRyxbspGFKw5UVvQHkbRUfW664FEJA9yVgRktyfm72BhvtTm8hsqb2M4wsnwGo",
  "key16": "2ZukSKehRdpcSbXUgxG4mERmk77cCjuUAQG7QQ4mPC3sb1XQ4AY95FFoWYeSL7rkZ4mttX36uDiL88Z377aidSbh",
  "key17": "kUUWe6YvLkJww5a7k2CdM2AwwCia1f3F31cDRVVjicokn4KWBKDhvX6C98KaoAYeDgb5HTbQAZebSQXUbhckwtq",
  "key18": "62faRrrDmzXRuGJCaUUa9SFvVzVZSH3jxbtDrzRcjbi17dv9WMrZ7j3B8MjsjmyYgenLi4nfWnHfXHhmVc9fdAD4",
  "key19": "5GuPu8YnqS17mcCBMoqKJbkUZznTmA7JYnEBaKKWQVnrsFshwLymESViEycNQ6BiCudYabdgxChHTA38qp5n75V6",
  "key20": "37DPjm3f9ppCe8o23smJJAxAXZH7cERW2U79sWZbydDxReQ9shn2rYRvHJeVNL7xoUqAJpm6Xc27Y8mKpSh3TSi2",
  "key21": "4BocmRKh6nV3L3Mr2My9hrx7rMiG1izDbSwH5j6MG2GRQu4DwUFrGsPu68nMavJUp2krEHajzgcKiPU3ST4bcpLJ",
  "key22": "5UZf6pAvdBxMjWY9LEJSc558paP7aapc4aUY2m97UDxLUkSNoS6WZNLY6wVs1fbxMLTL3AaS9jYjN7gSbZg7Gakj",
  "key23": "42zC6nzJg97H3KhB6SHNdBouEscYug7dMCBHAjBGPSqHH3ARBueKVcXV6m4hJijNBZ1rMh3FS9KBsr82Xm3s3286",
  "key24": "qyjJm3NgGH4KTcCiK5pVicaJKYd2CJ6RT5efV6RmwK8VdmaYuYZ2fpiKmqDBb9fmf5EkQHTxsd252EqhKhfjwbM",
  "key25": "2ESJxc9qPR8fzDRFxsQLsxtozY9DoWHm9nSHK1jb5X96Dcr5mPu46jpwHMhkmRAtfp4YAKCYEQcytyb34bZzLJyN",
  "key26": "3ER3EftjeFqEML9Zj67gc2iNWJoAagru9yPRY7YRY5ex9SffSnjwSoemQMs9caxZFgYj2g9FF1BTwLYVJBVSnSqU",
  "key27": "2T5TYWNrv7qQPgnkgjckFiQaFueYR6N3HjA3AAaDcWPKdmQkm17T7wpeCFd3b9YJ5SHFtcve8dMkiu4mpvXtHAkW",
  "key28": "4B2DrVJxJHKT9TVAhJzXwpABy5ymiBRKxk9HdLPXVfkbs5uLpVUqjBJVSUiMqNk1YeEM5kE6yJhYUyc54hxJFyiV",
  "key29": "4Wwv5M4KJjVksikzsmMw6RZXNLouWVN5wNkhhRyRtXdyBCQ5Uf9iZx1RTYKSCQmMytP3RabjQk6dzNMyrVfem25X",
  "key30": "3UsCdjeroA4Q5VdmaZdYdobV1gMtnFG5C83pSDbGZ3bMmhg4SoFo81FNUmjPNpZuJuGxpu8tvQ1pVUzLZeGLyLPg",
  "key31": "5DE9sAtyiVYvRSmkRDNo1scELdT3AYrioL7bBRYuuzq6AB5v9nXdsea9Mw5bXtMHeif93SuHYBC5GuDM8qnPAfuC",
  "key32": "2Y9bkKruKhTbcUAugDcxceBdP9kSXSYb5SJbC8AWjs6pcGDBp2xtGUGmw5y85NmhGf8vMTkfy4dtSnpe5vNbLFGv",
  "key33": "3idHLhrypekmtUHUgbzSVkRKaSX3N8xMri3veC7vGiorGA4PSTBF1iZMPR6p2wg8VLzwch5NcwhYsMQf36Xe21jF",
  "key34": "496gmhsxUmxzZarjC66cCPBCHwCVKkTNQnK2zDf8Bdr9t5BJAUrCNZcyiSRjhRmBWCUCPYBMBiXorMLMFXLKVfKm",
  "key35": "5J1sEjaVqMbGoQCXna8AfkDKHkMSKombqtDUzWeJaELpMtgY4nd8z14Nh33ZZ6VxaJTJFLsE5VRFLok7uiLrzjoz",
  "key36": "3KrKis82VnmQMPEamw4m9FQ8KaUWe182HLC4soAUrL5wkvSmLpjjAfpkSwZPe1GATNAJMmZukKmS5jYMaDzzCa2z",
  "key37": "2vzEajZ88RePoA3qKnc7SnWwdHsXfjjpfhhAWiBw8wQTRbkLeMDFthKpuKGzqYPxwzdmR1UzH6JPeNd14e4uiPjb",
  "key38": "XBYe8Mz6yjHQykb3JZ4hEhdxrLqxhgLBkuhjCF1YTXTSquKRz5jSrZyV3Jc53fLPaCY4mfhLjmBtZXdEygjuVJo",
  "key39": "d4CZM4sbAqAV9mgGoKJEL9FTsz2i5AWc4Knyqn47o7yC2AB5Sr6rryQCSifnXFTsHD72zk28DHAQAEVPAqXiE4q",
  "key40": "347XTXrUNVkRhZX9GSphFjgbXzCwZCabSL2Y6b8fbD6ExoigHy6E5pqmT4JF2sTJjCPVaAYgisR6waXiAECV3aX2",
  "key41": "5nwAYhzDfy1csWoE3RodHabQ4irNTAvgqv4UZG2veQNMshm4pK73U13P4zfmzdtL3GAWEgLUbefU7wwjrA6RHmYi",
  "key42": "3B5nZW7WTSSiKBZc6RFHNqicynsDU65DJhTFmidhXUyeNW4ibXTe2ZR45U42Kmd4j7heLqhVFYShA4RBBLiwjzGm"
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
