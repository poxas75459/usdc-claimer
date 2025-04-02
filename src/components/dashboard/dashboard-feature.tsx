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
    "3pnMTCSk8jsvPJkXeGLCuX5HT1UrtkwnPUVcckyDFzaXcpCzcFLdedwH49BDpCyssfY6wXFVSnkqHb7XqJXEJyU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r4Yd7m4hjztctwrXxFmfDRY684V1HLyJiuJmxsubfwvbE22YxHKsmth8wN5JChKvwiL9PfHtKt66hqKbtVsNN5r",
  "key1": "3FRaJCxrCrS3bKrwQZ7mCayRoQNjBWeSShjhgD8uPvAk8hoPWeAB2LwVCEg5JTppsJGNMvDFowXmiN3JUWwULkZT",
  "key2": "46ouU8YzHWpNFCJtmpestm8C7L3PF59LVMiPbmjfw4J6NacSv2z2GZ4GzyUzzJ6cfjuTam6axcYX3TWCdbG9F4XW",
  "key3": "4CWvrrRnm7U8Pu9EhDz8YPs7MuzMCkK68noYXW7uYkBBpfZ78rbHQBcgUiSexYveDKJyzMhT3kXiGWhrJ2i9AQLn",
  "key4": "3ZYvWAJ3afyET78EVA2HovQtLDxcYiouJAraGAU31saKWRJyCXhmPCPbf32aPL7K32ModPfWDpgApTP8tHzENGn8",
  "key5": "4TonwaVCS6tDi8d2aE7Kz3oo1HVtKHrN5UFA5Z8NdLkMFjFpPsLLu6YLkGQgUBFjQh5bWMAMoTfBtCeHqKoCbgfs",
  "key6": "4d8cw1J6JZrm5sXEPtSB1pB2LE1hGsMrEoktnZChQ3CfdUoo1CVG18NBqFCPnzMfFcdE4CSdpvM7Yu32DnigHyqv",
  "key7": "M9RFhBWmUU2gahgLDor5ZjePZpWPCeMK57RMfPN4YKHqLWaCCWhcAU8cfXHqwzztdAnjdgXRbJpwvow2Qx2Fky2",
  "key8": "3yAHoD9baz2JpPZ23pSH6AuoqZgJz6qaCmZMTzFaxMBXBLpx4Vdj1ppDeRRCrWTahpda6155rFGtLt1BzqiM97W4",
  "key9": "2PWEKtFPAnEKY973TdMKwTS4RoE1GrpiWMTmAeFpEyGn8mzNKZXKjEkHJzhd8VwmwJBKPBftm34HmMbj4ur3EdnL",
  "key10": "RYjKtL9JNAgWpMRcX5CPcqomAMHxdpZ3V8XiUY1G5BLgPnxG5TzerzWqUp8f7itFhvvzfCNNAUQemTsqBrK8Acv",
  "key11": "26YkSneLjb9zKTwmgLkUPWvVUSdPEkAXuqwLQ6W5zxUi7j5HfP6Lj4rG7VkVKeMyzWYieFSxjsunh6aQk57vLg9G",
  "key12": "5qh1VMt6gLhez2oaW28kUWeXxU9o2MXEWB4jwPRakvpRwrikPCUoFtASaZvbBEaK1pHA13aTL9TDwGePXKMfRReh",
  "key13": "3aYaK7zxzwPxmokGuLDpNpjtqYRHRdqJuhy9RTmZwno5kHUHbMdEjPBKe6ucKbEMdecdWwnmn6tVEsQWNoCr97wf",
  "key14": "39kQChBftXgdWw9QaMdB9enAMhFMuDDUoxV4upnCEAsvuCKivxQ43VVRPGpNDZSoMmcAbqfNbtGvQTWN5t3xXL47",
  "key15": "5Q2kBrHQwPBUJCwW7rAZTpD4yLh5Zr6Ceov3EaTFdiqjBzvcBpKdUNZyNRkqeD1DLz5HAjbxanyygSePd1zqHhpv",
  "key16": "5bf3jQwM6EJ1JkH77nu448dMCWQG5wZyGaG4kejhcinJJXP5Lv1MReYfSMEegCQWwLpDuJCizkjV6ra8ta6Ejd43",
  "key17": "5HzYZeDWXWjuVEYZnz28yVZEaggFRzqio8MoP7RPSLYJYpfjC7Y2LxiBUk2Ygg7qNK3WfVM1snpXDvhjbtNgovtf",
  "key18": "357ZPhCzondzzCAgsPwruVpkByvC2oBakccz5d12DsJqKcrjDFBWXQ3dAxFU8apTHZJFEFKiv3u3Jfh1ot2cNfcU",
  "key19": "24gqFm8YreQ5dsc4jvmQ6XGKooRH6Rn4YnCUKG6VBSoCUC9GZTpKprhGsTgdvELRyyMaFwcJdoEuXjpJCKDggJd3",
  "key20": "54NA8a76LFtCy5mJedjixn5iHq1Pw4SQ6wTLqgUiaoWnUUh633DEicPNQkvCbkGXYaN3xbUinTKhT1KfQx3LYxY",
  "key21": "4MX8fjtV8HL8ajktbmst3YqGdaQ6ReWCywVpvX1XmCUJZNT96KDcSphr9vKbefvoFvRcTQjXK6dGSNcXTpXeEoQL",
  "key22": "bq7FTLR68bwnzzjtCGMKMXbv81Xz2k8SMhPSSeKvEygeWCc175Rq1wZ3bCDpitH3XSnZvSG1sXRKUCB8qxTBuYj",
  "key23": "3nPWDHrSeY95s97PgKdZeZ9zizhf9Jpvd8i8koxfYd2jpqTAQVgUknt75JCsjhTSJ3MxAgrWvYu2kDxAcdwcUqfw",
  "key24": "5nhTpB6TLys4g2W4uKfPKVQqstZAuYe1z7H7eSwq5rDYXqrePQYk2kh9HjUzsZbY4H1soyyfA7SNCLoW8Gd7XKXc",
  "key25": "2t2thzzfkPm6iPd7QP6BZ9vsaT4uQ4rWye4tGDB6RZbUNrrmv87Mfhfd2yDV2M8BLKLfLWt5WPUedvM7gaMo6EXd",
  "key26": "5n9kuuNtL4n6X3TshiWtRwPTzpQafGKX5ARCdGDLk1NQyFgMXNq8dLHbtuXsPFGN71SWVLCFVJJtDDFeu6pap7Ba",
  "key27": "CbnpezyF3UbqpiWwzbu4utWD2E64MrmzHt1aa92af7Enh5zWG7orNwzGfL7A3UGDWK1cQ92HHMiSyM23Fg7HDDN",
  "key28": "4SUDv75Y2Xk5uKV2XjXVXGS6h7dou7fMbmb3227TxGC32Tp9ezjiVDWUReewriQV7FwJWe7Uj2Y5YmwSd6HFiEwk",
  "key29": "35muTKU68cGE3KUHJXeZGWTh8w3TrK5Ljd5kD77tyy7GNqmNNCyTY3nh1hRD2VJnsvukLHHRRe3uQxrDEpnngBPQ",
  "key30": "4eVd4MinVoEJL9t8gGZhEQNyhjp2TYeccGYrmS3A58riRJxNcZBcMJKx9ZbdXrqkLpdL2h1cndft4XUbQxbqoLFP",
  "key31": "42ARcJ7rfcemWP2kHWGciK7WsNhJpJgtB7Py3WX8DhC1votTv6AcMJNezQGi3ZfjAcEz69Qew1Z8ZFyCnoHJyv6y",
  "key32": "4L5P76Yp66cdxvyDgjvAXJnv4QFeSvK1WQzXyUQtmsG4sThymVVNa5163xyuFe6UV8Do4kBqLvHCkUwaWCTzto3C",
  "key33": "41B3z4c4KdXxQTT6uWxPXGY17qEx9LvsAVYrfcdR4irF45c5M8Xq2uXQJwJz6sNuVZuNFXHLhURG6Y67Fpnb7bWD",
  "key34": "36FPJwR55YXXCrUhRFJY2GiYn7W1nzSaU5CDbb6Zg74WmZkfcUTQrg7FbN29ZokdGzPqwoPhX6RBWqJNpvx5Ft53",
  "key35": "4ZMAcXgCT8HSU85UaNsYTL87JMM29EoBR2scFMN8vNQb9MkpdA2RwBhtPmJo8i5p5RYpHKz59MTnZWGR6y7WEBCE",
  "key36": "42dVpixzmiArJYf7R7dag1xuyWq6Bz8DB4oWrdvECiKSBar27dcCBhvFx4fjR3MS4NuebWVEtCznHs2SuU43Gkum",
  "key37": "5JWWiEXnK1Cryc21g5ESpM3dRq2Ur2wuGo6nX68gW4oLuRjcaYN2cH5V4PE8T9AzrQ9Yy4UG6NmUMiebWaZJRbif",
  "key38": "2deyLuPCxXBZa62r2ypgZSiAJsLSSAM1gudfMbywaytfN9L5K7hJ9bvQqjwcY3UCmM4iFjJYf1r8fpzRJCMe7cUV",
  "key39": "2cjcJgoXfNncWg9pKPv4PfSrJXmWXEWJdh3JBiG9ywKp5oDmRFAEGhHA7wNaviPwmZgs8WML3Uecs3rBEJNWf5Y3",
  "key40": "2RVbYYjTVxxkpCHiMfQtyM18x2KZR8yWMtszxFWrLvkWkvEWKKDJV8S2iNEbtTFALxzPKKjy1oaah3cPJm8xjw4",
  "key41": "4BVyaFuZofTHRSg1tt9kLsFBTc4ZienVUr8QMMJ5YxbYukSH6AMavUPuvRKbeMgoivcZa5Bi2Kc8ephLgYzXRbRM",
  "key42": "29mBmaPZJmmkmwNzErLe1FoHKnr9p1FJPkBxdmd8JeQ2tzbrspLyUFCDrcXK3VyfsgTKcqiTMaduUdLpnwK7w2kL",
  "key43": "5FYsYnLpTxHcHTwoAbMAQyfbAwbj2axJhQrYQg3g7MKJY1VYc9xpkcfhJpq9baKyMw8Nt73tR7whaHL2qUpzqNQa",
  "key44": "5dTGz3vasJHDDHo2vitEg1jcLxhyVhF8xCZTjxrj7qinwYRa4H3a5uq4b41g8fZPgQcRrwti3xRWvmXknoXWWLV9",
  "key45": "5EdJxYBH7DATYznmXtmAZfZDS8DTGpweYepDxFakhzVeKvNVgtQNvBSCCuT6gKGSxMgmH61fTyXmimWwwCdBE3a2"
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
