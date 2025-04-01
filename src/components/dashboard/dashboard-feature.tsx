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
    "4XqgHm63JkEjfVbHKKZzdQthaQkcLyWtV5ArF32QDHZ14L9vp6JfbJLBpWJgBctkkravpPch6hA42ue1oZP4ZVQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qh6GVsRPC7TyY8vGrZM8KNg39fMnuQ5c4Lvi3CjEKG9LusnNCagadMhUyZeG7H1YbBbe3PP4aDrfsY9TEYGkwJ5",
  "key1": "3kyYUm6WbokiDxAnoGqMWgzdceXpaQiGeWyMbYjUchCFBBsLW4zNQNews9DBMRsbj2BitJ8auaA9GCvqSEQt4TLZ",
  "key2": "38MeGuhDGYSLfAk7VEGxhKJsM1UHGSgnF1zePuum57rBvUUAxBDtFxrDJocfNEXdx6GhU5hZsNkKW74fmnrvVQHe",
  "key3": "2pbQDsgt89RB8vatwuNXXcNmp5wF9RPURM2a8aCNWScKXyyXcyURJSraZ2dBytoRksahbuUTktahB7TDq7fNHFDg",
  "key4": "2wfQwuw2bF2EVU3sfnGiihuZKqyxET9wi2T7qZuREHm8CR43WuAZU6J7Jy6HYaQgFxMMytF24JEi7LyPpavwkfxq",
  "key5": "tWmi9B255c2WfHQBJmVQyQPZLBzeAQuqYs3GD73n8yY62oYoxCVUyP7T4TVf5yJNpxAfawpvhPnNnnUGA6ugEQw",
  "key6": "2yq7Y1q5H7vxFeZsQNEpao2rwmAATf7o5Y8aZgT51b1UfHffa6N86RP1Zx4ssmrUPTuGBXAv6dErL98SA5xAdAbd",
  "key7": "4eoLBBJzBW3wJeZ6gYrpHjjipVgkeLRu37LqyP4BoYzxBanzcJxsWqLbo4QnpSL6AFkm8BVu7bsTqvXxsU4GTwk9",
  "key8": "4k7fQKPkGuzFLxF7R4uh8MPM22jnqpd8EYdUnoWVS7pr9KUGRpiBpodvP3Js5BPGKdjkYvxo3LYKdjrhHwi1CKp7",
  "key9": "MCTbynQwSg8VxmUF3bgiSWPqMotjPpPMeb2q8JAzyXEXdQebNx6VmsLxVMT9V2hhPxuDvYULqwFVJCAWiNbN2Zk",
  "key10": "4n2YRsmGxAagfZPutc3qVe7idSvy5ucfmQLvC5KiL8gRUVLPhSSEpanTdXMdKWXUi5aGznNDSzcAovM9nC1W5idy",
  "key11": "3joR6mMLZUXusMHKKF6FdBq7aWichNLbC9iq3L2PeAN3PXHi7cT34tNnHM2zBF88AUnBvjKRsVEJXm6prEbhhWQb",
  "key12": "5axQoj5dJxGP2fgCDAaPQ56MBJdkTSXSp4PzboGFcFR7oV13bGNqhzW49B91ami7fypXfTVochitXb5Xmtg7CTd",
  "key13": "64K3EksuDupmMrKy46JjR8JXiR7Ah45dGcJyf79PeAHpov1xJrrcuarfurehqrH3RkBm9nanYKKphFwaWXh6okpZ",
  "key14": "4oK521fCCsudZKKmFxYte7Wv6By36NafTt8hGHJndv1579fi4bnJ6Batjxmh9Yu2BFKQ6P9QUHpNe4nXRwK8q5SH",
  "key15": "646wJ4h5iW6yVDskxkz9fvjqcYY8osBh4S3Hgr7WtMfHckqEuk46UmNnKE8EnWLmssqRoRgJUjrX6Dqh9CVCqVdg",
  "key16": "ybTtBcgb78Lxti9w6dsFBx1eBUJG1wCJRGMjSRfZ5Wa2XBe5AvEtMDeqb87d1ZfvEwikLRCXtEKbsyJr4RtZTTg",
  "key17": "2Pj5AxoVwKVMyoLFgh5eGoGTrbtotoBdurzzaEAPGLDUzw2qaJJfqwsJTRbu9TsoEcHZx2tVKwAt3KHrmLD8qAFD",
  "key18": "ETc6d3cKVR4enrybAfvTEVDc8WtRaMBgdJmq8ZazoQoLsxZ4DDGY949v1YgSuAmgrBY2fwPc9iVd3GSNMUsfBRS",
  "key19": "5wj3denbVQxuMYVvcSZw1XqoZzi8gpJCpDLMuQpEQzxySFqR2WPuYt11ntLoqAuGeRjWMF5Fb3TMbpy9gguRxbtg",
  "key20": "63cecSWSEwNBaxWsnTyTcwfcnofRzse7mrZkratidfHwH2GgTZMcmaUEwgyDNgQGCrKygDQgYsMBd1nipN9A7Ckf",
  "key21": "6aScxs9vWj3nE8P2RnmPUWAC2fyfXbwhZMrpyKbdU3HHVk5wYnhifEkfuiVUEZNZx1wsNiqr5PhqyGSbivv1jFV",
  "key22": "4EQUcu3c1jaczmauXfPL4cGcKjU2B8aZayf97EA9H8Rw1moNQdks8aAHEQFq5zw1F2wmifY4zDXcsC8q25BuFq9N",
  "key23": "5VFkYj2btpSVGa4YNHLviXcoRhzXTFkLf537vDPqVbKxR3FAm9ecQDrxKAnJQjKpNSdnCi3PWCdKxdzvrQw4yF4t",
  "key24": "2FyUHdEYC18Kq4sbEptunP39aPNKb4sqiX3thG8UopN4kWHx6KqzNUkzVbY6nndF4R2PQsJx7X8BtaERnCAKwDc4",
  "key25": "3U321TZapZSWURRtQrm6p4nB2tVecuupmxtERSwUzchw3Yzb5FwGZpJiDB41gzR3GhHwgMedMfmELT3RFjbHq8Y7",
  "key26": "3XwTQv2WgdK8qaqmMxeKvgicJ6jtEhPAb7eX37H5WKoKqrVC4AwF6w8vi4oVMHr8bPAAswx2YZmUKpE6CYTrDq1A",
  "key27": "53qyhJcXbLq5RCbEwmDkKh2misH4FX17eSZwPxKR1ZoMmTy2SdXFihZFbiXTLaTByzUnEpeB7CyPetPG2gVsR8x",
  "key28": "316bQSeicV6S3QtXps8PZuWQfikBJsczU18iV4B8KMAe1g7pocHkH2VTFDiBKQPsLMkLBxjpbz12xSeVHq9utQ4d",
  "key29": "d1bK9QED9MAH4UWphx6T8crnB1EntwzVsxJUNexMNjous6HgY4psMs4MNyPZPZmPZfy2i6JEWSyEww229LyxXo7",
  "key30": "2jnffa4MEXMJMN8MGwR6JRQdjg1YwhHcXhH67ShgFj3h75HLQNoJgoiF4SegGKb5BDZxXHx7kwsDYvXUvf5ug4Tm",
  "key31": "38bijJkZH4hM3RtPDSiLSGnzB11wrMZPoK3dgXLa6UD98VA4mR8RLNDrZ7Ke2Yx2jbZzrdeLiK41UY9nBd3GdCr6",
  "key32": "TpwQaqDVQraRaHfAAFR7JwTxezP1ANNRLj3NYTtJUUTDYBDi2cxkuAdNmXoTpq2KqeU4ox5q1emkfkCppJQv87J",
  "key33": "cd1rAE1DSDeQbL4sxvUYa7XDnSA6ZowGBdz1JXUbNSqVEw8svc8UkkNN42ZEegA23dH6vro1FHaikuikJH1d84k",
  "key34": "4rxUqeXAXyXgc2qAdi9A5JX8LHEvVEQhccgP36g3gxT7uKJKq45rbNS9KAAezdPEECog2iCR4tsaE2grRAa6XSzh",
  "key35": "647ubnbiqS7K2m6z5NG4gvBbvtwU1DfiajbNoLzdMg5Ay1EYTrg5d9zY4N6Ev6rooagfJdr5L4sNYKynL3KjepqB",
  "key36": "3oXS6rqhXJKe6EJPhhqcB39o9Ug7isbDPB9dKWeKa77Lm6THDnyTmpgW7NtnCwk4sMP6KPzRWpQEjskw9t5NhGFU",
  "key37": "4x3gZJcGtmefsditfNeXnVr33QAeG347sSTPW1hZW1Wd9ws74qKas1p3f8PPfhdb82syjaA6GZhr8GtRje8f3Swu",
  "key38": "363xQn5QdUuiiS3xQX8tqmNkQX9sSmExY9Rtzf5XRfmhoSEnZSBcP16YhC2wMiusVM5n1gYsPDHM4LZKjgkf61EW",
  "key39": "3yR3nZJYkyXGUDgJ6niM2pJWooPaCLAhKPz9HziDddy5eGbTWm69Tq51WyyDuTnToEmkxt9CaTCctmXvFgdajrpK",
  "key40": "5yyMGskRnSPRcg2rnFcs7pBdy5e7JyuWJxNT8oc57cuDCvqzvusvundBEQbYHafYBy6xuBYhXVKoccLNxZKS59oS",
  "key41": "QmKkoALQMqF5VDaRGDabKBmaeDwAjB4mi4PC41jE8ZYTGcmc1kd8N1tSY6nUFVGbAwPR22esN5FhhQWrHcVJz13",
  "key42": "3LerpCvriuzu7uzQsjbCNxTYTSgYtSvXLRBPXGGCVJiYRhR2c73AoAmKpmaHscUdpG4sVU5Kjry7cYPrj3QD5nS6",
  "key43": "4hemQwQhbNPBKEWrktSECTd5BUxr3XR17LtKFyahERxM7dQH4fkzEPRwvEi4CRkpT5HtdhjsB5LUXs4iqPJrtU8L",
  "key44": "23V8YiSdmLf9pPp9Fssk1zHaL4Uby1Fv3UKeVLLKXr4t6ZMqKWxX8uVqzBsYVC7P23FhP1ARtTKxkURuyvSeWPVy",
  "key45": "4X7Zr673X6uSEAp877qGykjsucRhThdXK7RYBpzo33AKQ2QePgE3pGmG6Szi43EagosEgtUSc2AWNmuvZwVGFq7",
  "key46": "NRTBQHco3WVvi47HP5uvLeC4yGEFgskH3P2UFVi2xW9VAkEciZn6TuRqfr1w54r6RkW4BkAcMi8BQzoT9urCg7w"
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
