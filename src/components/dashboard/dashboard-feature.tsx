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
    "3S8iUs9hNYP4Hn3c74jMA1oFAfYKbrYkNF6GX1XwMU4QgUzUHAKd8VynYvjmujagMHw3B2SsV3R6XpBypAhVTjXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i9MTqUpo2CM9y43kD1psQHiy9cJRxq5QH3niakH1gSWdsMirB1KKmjWB7qronNNb42Q27exsmmeb9KF8qgDm2fc",
  "key1": "EbzhnjLXj1XZSdeZAJjXkEXsJyYwaQqfVmzGMKt25jezxRPTtb45EssKxeSpsMwcASJsMEKrZcUVaxMNM2DvfpA",
  "key2": "WhhTEbbVGvVzE4uUhmLJJ6CRzZ3Nf3axygayw6sja8GkBRxHq8N3cV1qaqL9ieh3yGSt5cKeXLBMhqgzf8hbwRN",
  "key3": "GAGwbuPRym2RJbZwL4ptkLc386LB9iUZMMrZUM2DyMnBDgwLYvES8FTrrPaoHc6A9KPxJtW4CTqiUAHEVPjCzHa",
  "key4": "2JHp2BjdLbVUSV917atDAkuyvubkoBRihmQzKDbXNQhfkZUH2BNvutTNKsDoKLMCRGLx3uFN5v6RG8wpL1Dmww8a",
  "key5": "4BkcCD8Y93NA2prNAZ6QGRHgH3suYzLbHTURAjZ3kvptqVSYSzRMQ2nr4qSimNscwWEEDKFTrUjR4kPipfZh8Lp",
  "key6": "Wh6GrEvrZhAUFpQktnTHb9WE2MdfF3tmMyCSUj36zgTNdMPhuM23vWbSnrr6UW7mmrqSSGsUHGeVVHDuqbjismX",
  "key7": "5KfeSPgjLD9ssD1goA7SzZB7VPjQNUk3iE55TQKe1qvtW51s1YM6Dk5iQxNGGQatmrfwU4tNT48gPKi8Dc4H6N9D",
  "key8": "3muuWi9xchf9YhvTxkbLBJEx7ykwTqZshu4CFwjczfr8n59cnHWGyz7G8acK6g1SnGyMXqt9FLyKGpg33XmEXb1q",
  "key9": "2vp16w8y4n5qhGqjmTZHyAA1GxkVKymiQeT2EDtpBpDd7ntKrRAAPduVWhMX3XpPSPmTLuhpZD8gcHj9ZvBbvZ9Q",
  "key10": "4LbmSztJfgshwTVXo3EWtY1qD11hKPpEYTySxJ2v3DAYeJKHWQSMzMq7vNtoGisjEeesYmNpm8THSiLiXBhpkMc2",
  "key11": "2ar2BrLTFLW6sg7ziFzbpPVTSssjEyLeriLAnHpuhLrK7mZBKHii3mhrYjU8NUydNik6abchvNDMURYnMuiqPctZ",
  "key12": "772PGxxRKyJx7JzjK6YAhQEJR3M7aQpwgjxpopNSzv71ErEKFvZd68BjFJTYL23sqFKeiH2B93k9swyVii1pkPT",
  "key13": "63JacRiHzrBfnSxHmm39C6fXb6hm3Sn8PCuCx1X5VNuBn1co7NnbaAzcd5kAPbopaKL7jTx6WBYBEEpGxH5keBEE",
  "key14": "3WC3j3BsYi6FUnErJXSZXDvrs354xctzqyAGzKcM2wCB1u2Tm4zGWWsis55HajXUVGjbankw2CxngWgsKUHCMGH4",
  "key15": "3HWPeSoxVGyYf7vyLRoegxgcsxpvC3qtWBRxf234E5g3s9aippvi3LBbdStwrL8pTHpTdWWEoAJDEgbHYrcn3twt",
  "key16": "DCFamNshNKqyqkheftzXPjnkWfxUqzcG7WsLauRGDoJYdnhNy1SUBPc2yZiosBdmZCp1nJCyEwAYrfkCFHPHBSd",
  "key17": "2hqgMEGNJCxAXauf8uuoETxdeF3VQgPNmTLny1pnGkuQc1btZnfSkyYbeewUpbC6M8YBbdVDQXE2uKiCUYXfa5qC",
  "key18": "3k11GoSDD7WE811LqNxzJ29Sb1uyDBjWw4SekyJKAMirLjQ71Bs9gBDcLRag5hmoPVP2g1PcrcG5BRmJexgpD871",
  "key19": "592bN28TG54TzrEyagT1JvxcvZdyuPiH1bQha157ntfxTn25kHDD5t8WPkJH458r4vHqmpoCMgBJDYxcCLBPjzTF",
  "key20": "55e1MbUpdXAvBPiTssbhsuKjBYvbnL41ZJdZfcWzaETQPq6j37pBjprt2WiAzXB3bQmdPW3ReqeZhUfXZiAmw1hz",
  "key21": "3WgHWtS2Yin9uzqp96aifiCMSndM7BeyP1pCCuzKn3yUEpDgKGFvDL29sRXvUDvDTmALxkaSLBiiewDwbpEZW1M2",
  "key22": "4gk2qNytnBqiKeVZFkTKQDbQt3ygnHD3dqsEMXdZYjQebtcwi2CpXBHR4gfj2DfqSFDgCYKe1L85MnLcYTXtFbP4",
  "key23": "3mu7Uzg3D53CJiJAvxhj14iuwSTZWhCkA4P9hvjkEoe1TdY8ywAEb1zjj86FcPhzPb1jVLuzHyvDoM2o3mxmW2B7",
  "key24": "21M92PViuAhyLayoyNTfsStLjsdK9v69H8ekUhxJJukaM3cMJASFEbJLEBLJ3qCFCnWm3KFpSFjZh5RhbTb5oaxz",
  "key25": "3nkqAqWsBrUZq2SVLdH4XLBsd8LWY7Akbas4yYwpbNhXu4o7ozdna4U2mmiZxhPtLHRwpDVJu38hYvoSDUTtYp3Z",
  "key26": "43KZ7bKxy2Re28ZWx3wD4EAkzhxpmWqWS5PpCHDod5eL1MYzZg4hXqWmmYiaTUjNcRWz9yoDe5u9X7PKqsuH8ieD",
  "key27": "5vKAfmNsNSRnjMHF5QpwUYVzeP2HSvSdSwuMq5pgYfnQF5nYf4veDZhFJsPF6wS7iAortnVkYXvgaWS7Ai5W2EiB",
  "key28": "P1gmM4M3X2tHgtEufjoLxJ9Nhm2cbRKC67NTytZaMCTvXh7Ne6m3bX5bS4A1RFHRRfhC15fXsMyKLqXthCw3SEH",
  "key29": "1kU3Ph3T8rWattzCzTxPwEEcSfqcpVgPVsn9Gkdvjztub8dmoFHSKL9dhmscjUehf17XgoJBucZrb9pY4W6AxGt",
  "key30": "4UCN11g1q8m5fpLM6G74zVbtStGkRDZz6TtWSGCedm4BjJbZLLggsEZWHQ2GN57av5ArK2hgVvzmM18hms2pvfWF",
  "key31": "rZbiyZw2zBVJo3xWw4k5TmjUjgJJVF5C3FbnZyp6YePYFx9uzZQEbYYaLtSofGxqR31c3iq8BxWrJEpuzJcb4Qm",
  "key32": "66FZZhtEsYPVSq6piF4oHTq9AvAcj1vdLvA3jdqGj9DJFLp1eD58Wf4yPGf4aU81nqY1e4s2Cjr33ZVkQPVrb8ZT",
  "key33": "5R1ax5cLdbpJYFMsbpguPJ7BNkMR9yPKEjEF9hZwB36RG5xjwVNmh6muRz2jZ3Zq1G6erpDfVwRB7YfcePGpVyom",
  "key34": "2UErEsLhoxBc89HG8Gg6K6ZvHEg9UwwpUu7kBZKUDBEeZGT2jegxRGoX6RASaYnbQJA4q3z2vLNwuKC3p7SrrQJK",
  "key35": "3rkrKH7nfa9Up3rgSmKrd9TRdhYmhH3ExFERiitJSWCDRmqTiQVSs2FNM8bMrPQDicebEJNoH3NSfGvr9PDTwmUM",
  "key36": "4x4RdeGaWWN8We1zE3eDQiE5yT1jk1kJ3zu3a5h5Lp66FbCxfY6ZnGuYoXrB4efE3n1MUK84gTqsFZv9fTc1YQ3U",
  "key37": "4zqLxFPyVPrEhhBtQg8XXLtDCydFqQTstZx3x2iFmxiyNzHaszXQ38BjoP9QAdSicPDSuaEEyqoRqG94t9VJiWGB",
  "key38": "2jmTigJoDLNRHVZ79xBBPo3qkp5i9y2YvtNkww9Np9SsJUgXeT3Z1mAwDbMZ4mF6rFQJrESPDfBT76AcPHsSVN8F",
  "key39": "4mm5Xfxw5xgkWpPeQtnwUgtepmWNhgT9DCcGB5PxK9uQguSyQ1h6jYZdPTUUXJPb2YLEPuyT4BemGa6sQWjQrq59",
  "key40": "3vApfr3ahHifZLTHYJPkp58jwkXTa3cg5TbYjKxQHxy23dKWiihdXeBNG4PFgUPiAFoUdUPkA1su2HLmHKoJXRJc",
  "key41": "2dGpL8FVWEhEjK5riNDadfeYvWtaYQEV4LxTEEhx79aJh4Kj11soagzozo6Zz2dGTKpVSWDiEB8b5tDNj17wztHo",
  "key42": "4fRTMRiXnoE77KChhrxUSuR98GrgL59jQjkSdU2qGRzMLsScm2VyQCq9NPiJ8T5uxi1EWHTWVCWiJ4ahBxWzGwuv",
  "key43": "268TdTN92Ck2x8xgU7dLTzns7BFSczpBGBbgm1wKofgzJzkxZDWR26yLgd3hByaZUjWn8ZsFhQRkJf44s5SKnFun",
  "key44": "3uN8xbuJoVM9kLnsmFdp2apputzbUjrPjg9QvxQHuKrFztxkucWgxN774uriKtjc1ogaFHZbTL7FSoSVbvGUyZ2d",
  "key45": "2KFrENyG5rYFLyk9iVNMD7JwP8SAaegdRvmBhkaiVM3R4yrNwkDimkycxB9nDtEDjRdKv64NQcmXRpwJSjdjNVaL",
  "key46": "41Qg7hvtUQmPbpsNuqCJnVRRH4wavgvPjTAX7a3v69AWi2CnE4zrJ3BYFQhEK4TePveozoVJnEgVtGC6YWKq9JMR",
  "key47": "2sJEcvnCJUbaNNdsQcUhnq2qyjQ1tGNiP8wPWazDxZeEz3aEQgbQCRtEdkRoAdj1hRsd4tkfhCXtMcaNTWGyrkMy",
  "key48": "5sXHps1Wsf6jLgppTQsmmDj5SbdQpLDVeJhaY56oqFySpUVYAixjK2JKaoYpb9R2eThF3oB5cYuj8SW64HtWHpyt"
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
