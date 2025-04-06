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
    "4AYAsJ5VUTknXbAPeVQciwnfGnm8t6L6NtmGPoXVw7PDUtpGqiZWCbj4xrVxf2xAo2pCJe2RWCejyuZhmsn1n9KY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kwvH9pJuEwf6QT9vkjtZagrk8qaCCKmi5g1yyXvhtoQqfYVJzVQ3qgHJQBoNiEwep5y5Gw1XByCJMVhjKyg1SEo",
  "key1": "5uE3ZAREEy2qEyk1983PHf99AcPUDepC45hAdb7B9CxdK4gV3GXNx8ytouba42fgHbxhtHJRipt12eWacqz3Cu5v",
  "key2": "4Jz6ZhBmKCttndMREUYJ9Kp7YZyNXxZefwXugRtUQPMcSEnx6zycVDzBNPFHiFxqEu21F6p1k8zwZjvceVsnS2u9",
  "key3": "4H9hisbqhNCqyyWNLVRWJiRRQTMdRNFd5Zxco9gnJtrb2qCC11pePFBxFNGPnCdzbVkgRUAMidxA4PgZiaTrdaZG",
  "key4": "5VoVi5suBkXCWRoaSnok2HTLzkixGntbNhFr7QZJoGJHwVLwcdbo7w4RFhzUWS4kTJm8uqsoDKetnPBeV6XmuGMs",
  "key5": "moTvei66E6FWR8vm4iqHfyMuUbnASyyD6fDYBC9CLShRHNcrDm8ZmYCzBLTPPpDv92CcECmZno4ShAGgN1D4Nf4",
  "key6": "4qtnfyNrhCasWTRhmwxPUaMxvdGyvomrA1BmMygdzufeF85QYmGxT2U8sMLnbQPDf4B47ekFQNsK5i8AAb4DYHae",
  "key7": "2acsxs7RfeJYepZWHe1sBakQQJUk4sAk9doSDZ1uYbYbHFpDsnNEUnUpoF6ygjuKcg5w85jTs7vn6fcm2f9wEZXZ",
  "key8": "4v8SDV2zLZh3PqVJfVomUa8BCpNivLkPG1URsAox8KbfZr1gfHBHbxYmHJe1i5WH6sMegVmV7d2xdQaaTLYRHoqd",
  "key9": "E6FaTQTDGPBsvhFtwvn5qhFCtAtTpXpKjS7ifYni1QhGBWCXAvhb7svTxzu44FpcdFhm1PGaoZuSaynMswcQusR",
  "key10": "NrA4Wed6DFJi2FwHapPWjneK6gZw5vjUbrpq9Z2eACXU7ZCdWrQsP7ruA7JW42ATk37YfVDu55MgT1CckGpRJmT",
  "key11": "22QJzfocUsedmwbe8aESi6NS1h6sxYvJL7egQjkz9BE3MemWJZk5npwFLAwnFdwYkU88Lw4tzSGZ1UPvhYrr1Ypa",
  "key12": "4EeUB2pKv17Rm3rLcbzcaBGFU4ZSWu45YPcFzcnN2QW2dTUf6R34yGfAkrn8DqWmv4KARfumEPXuYiZdTWzGkuuT",
  "key13": "3ud5o624RTEG9BpFrLpuHwXQ1bjKV7DYxahnt4bojPqhpTwTsbiZmpyvxLNA1233RCymYhb21D96cPWFoBoum49R",
  "key14": "9jF7mnxrBbyrebNDyArr1vTYGxxp9Xbz5tcLmgcSMbvQEpoFWchEysP5QYvFNbrR4M1UaQPX51vR8CTdpmQ4hhK",
  "key15": "2MkgaU5whK8cQhHZvR4n87HNKvnRDhqFLdi7Fu1Lx6oYGZVepNv3PWZJt56KzWZfYXbyRLr4ZNFKHjfvwWZFY3FK",
  "key16": "4xpB9NKTTb9BSdAr3i6hnLRD4STQ4m7tMXF7jrX2QrAX9seQQDFYXSswYksiQeAJ6MrPjALBknmpwqDy5bi7FUqz",
  "key17": "4he8iXqQio8svPvakVqYNAzn89ziZMz2APaHAfosDaWpAFKLD8j7uacLp5b7qmHm5RzgiWWWs2NRKMqaVrVRyTCo",
  "key18": "39U4hkAHwHugcuZBrgPeW1aNLitHQL8vkR1DY2an8yBU7QNracFh69Ni12XGwRxbhjo8fFZA9o9gXVmP6XYXX7tM",
  "key19": "4PnQF99fB6VGBATAbBSLwdTozvZxSWNiqmepVwWfPWBqKXndBrCHeoUwQCfn2WLnzpvUGZ6xaXfwAndL9EHkgSsQ",
  "key20": "3b81dEcrPfDtXaH6FBuNj5QJE2jWK2PScRmvxX5F35PjrjJsX3bLusYhYz7gLpjAuFDAdzhRAZBbVHidmRhuPuhy",
  "key21": "5thSkhTQwYtfHCjiouM8zL3VeKBA1jNMF21F5Lfmne19xejCwF5Rww5vanBh66e8wnCeY7xR7vFamF5FvoKDf7t6",
  "key22": "sHHhi2i6N3AXbvQLr8rGF4k8RzxAzWoi2jZWTnLXbSPor445vLsRi81cnaCb6YVHXVzctSisgw8S3WGJPtA5ZNq",
  "key23": "3dpc8qaGxABgYx3vrS6jh5ufXfRHTYMbwQAkQSaVkGEV1M3N8gjxrrukzE7AyQxVdpmrtamk59Q6pcarFo7syow9",
  "key24": "42cVg8xW2MvjwVsw4PSfaZDRaU64f1KrdgpxPWTHodhgCWyUrpPrU5gAmqhku1LvGQ8gNtG1cqj5vjpTwia9cp3J",
  "key25": "fTFv1DBSDFNYspwXmPucfaQXmhnKeyavbx9umiMqqXTPWYLoFk4qU5kDMTnqjA3kNjnGHCt2kuzDof25B6AnSqz",
  "key26": "5z8iGbdQYU94TuL7Tf7hcAHNiqTsfFRZHNkmJZ2hx3FW6Ld4hLAPHZTruqWiA9CUcrwjZtr8ByoSpgypV5RGPKX8",
  "key27": "J4Y9ZeDw3acYmFXbXv3CwQyrWDvgbKAuNL1EP6m1P1aAfYbHJGERNoFGMUCbQZtd6qgLokqfzC6Rs8rzjzz3p7o",
  "key28": "4AVsiihTy4ZivGNVJrcpqFNjYGkJNoZ8xpaScWNS74EdHu5vx5fZf4mLyV3h5LspUoyvq1XoWFMjAiaPbVBWPUCx",
  "key29": "J9cbFnKS26enfUBhqqdfqFD1g4LSo4cBkk3UtrJ9ckNo4hP93HhKptNi7Mvf5WywN7fgGoYBwFKsifgAMWKV7SD",
  "key30": "5wRvnzbKVtLD8NbPWgyxdkQ4hok7Y1eYMWCWq5VTog4xLqikQFDhit1HdhpuLixrn8nthMeNwQRRcReuSASGMXkJ",
  "key31": "2Jw1N2Lrt7s9bfTCAhH8okaxFCztQbgwzmPUhRzmxhKUK4Uh6yuLa4b1otRS6qBRoomZntLwJPhxAspC2X3UHk43",
  "key32": "hvqB5vNd8TZS9vQQyPczsMJiZ8JbGLnJhEYvujFL332DMZj1MPjdXLRtisuGXnfNd5kbvAZzXxCb75WGaCm5Bhb",
  "key33": "3A2cXjJa8g7oknMdUMx12Keu33HLrorMntbU1ZSvgy9intFsZLS12m5VL1G7Bbd64AvSX29EWkgDN6pt4gaBedQX",
  "key34": "5S2t99w7oUFcrubXutDuiNQYeTRLrXWcdKcesuoUvsHS744cHJMFWjpujuXMU42YfU8CazatVMHmZhCJ4z9qTgpd",
  "key35": "Y5BMCCCviemFQSgjPrwdt4XufjzLk4H7WYVtCG95f8p4yqpFVRDRbWnB2ckwLSbagGZiWUkwRJ3wT4tx5f9ghBH",
  "key36": "qWkPGZ5vWybsBZcwubgAFL8wrj8pifGHNb12SYosrR4LJzABJm1npNCLom34d3ekbXserP1951CifZdoQFaobQ6",
  "key37": "UM18DwLSjpfRYZ9mWbmciwmdMi8JYNmVVVNQt87yzbcbboy3xUzMAK8NTfjNfAvBavgHtb9aN119JwASxegjzbt",
  "key38": "65W2ZwMKuu1YmhpTRSfjbSePN6WgzGBYVYsVYW55yQYFftCdPThNgNMP9k9dcXuPH9u36rzGdQ4C9rYVG5GeGBnA",
  "key39": "42nFKNmZ6jFMuAXB6PRUgnK26yUgMnsC9XNAoyv4ntiGdDQ4n18ABNiPDFKixhKcsfxgr3E7e7j82SKqDmomkN2R",
  "key40": "33ot4Bp17Vp668C8Hnfx2ZtqkKVPC3RuAyPmTyHmH3NEqBP3b49WtnxS8X3CB5Rxveo7RY9EGsqR9h6FdcT9vST6",
  "key41": "5NAdY1aVjevS6LEDnwb2ZGAEwna4a7WD6hTDn8LYj2BRiqv3fQ8wsQ9S7WBiUT9rP7w76UEwpmVvmK9xSjdZxMjF",
  "key42": "55W2o3tJwS3WcUEZAaWDJNhCMZAbf42yXgtCxHBwFYk8ZSZaaPVeEYHwXpb5vVAcegRzGZtNd62fLMniwr2P6ZHw",
  "key43": "5rqzLVy267BqTvWdGemze76qzYLNHFE7HBJPXrF2FY7SJdNXwKAgDtr7pr1f2iQUHso6ox9TEKBgJpLqbmkrLuPQ",
  "key44": "5yyQcGmTSSXEtv9FqnM5tktkS64oTiSK7NaXxsXtzJCQft5kf2x97KBoWu8tPTez3kFK5FStC1vGmT5fPdoT2Ji7",
  "key45": "5oGxsRzSDXvyfAvqZPdg7Ea44WUDAWYW3ERKN3fpTxswD2qxjY5UW4utzZ71aqyeDw7wtwVUntfGnNdRtM9KhR2y",
  "key46": "58wcicFYMM7LcHXCAwYtuL614RNgyCBXW7RRXnSnKR2YyyPr99hnP9qXJfacad6zaDB6g6Vs9bqgmKJFsXzo3nnV",
  "key47": "26fNfRFzfNgBjJSgioJy43HUozZJNE3HGZuM4ypQXwozcdvGebo5a3Z6JUHdFFXrT1QJXUDB7wZiYLkjjXn3ctap",
  "key48": "cCw1VqDFuhb1GKd9rFhrskQGsPmnJRHuLuQHwPDBo9ayfLE7qxN5n9vsYeGTiN4BsRpShF2UU49EcEJ4RvyMX4A",
  "key49": "5Mu9eZ29XK6Zvvz1V1ExUDZYwoQhRL1jtzGdfwjiNZUCNuHzN3atoUGG2mnn3C9LsrnSRo785M2QJ9HJZPe84KgG"
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
