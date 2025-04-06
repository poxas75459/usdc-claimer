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
    "2brjCrPYXaYCYw2N9hmzp2ZLL6MMujBjUHtTv4ejjrhgMgtN3R6XntPZVJ2HV2EtRp8mgsBuag4fEMJpLuE6qWXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbfJVaNXxfRtpLweW63zTN15sjuU2LuT1QtTr83mGG5QJhoKKwtaqDMLVJTr2m9kkAYbo6g1pMN8ZTxwC9WCqnN",
  "key1": "2fnU8at9umK3CXmBqU35mXEVkN1ZkM87ChbvyP4vd2PB38CVfr6SuBJ8zy8hKyPjv8zAGbhK6uLXHJJiqTBHyqHR",
  "key2": "3RjQnrdwRC6GRjsum4oe48ieQRxNHc4gT63Y6t3g4SUfjhR5JP2ZqXDNEgVbCDn6CphZw9LAxnGVHs2eryu7nwth",
  "key3": "4JVXHk39heExQrQS7xTmZrACnRTViJVfoLdQ4Jjs7odRnBqnCRpEBM8BkumSCkT5SqZi7r7trqAxpr7rHgeQFtcW",
  "key4": "BBpwHfMoKYQH356RfDGR1UC4af3kbWgFcfDntiyC9sPJhnrx9zMQxVcNvrRvAEzusM5qvWuqzKvfmL1ReAreUYW",
  "key5": "4oEAYYmKbkXX41XUf7zcrsvxWqpJF8t9cgQgChXYLi4v3zeGbwEBHJ4PQhiZS1EjBrp6yaCeRtU77c2UH1HHRc2x",
  "key6": "4DvdGQGaYsAgZECEtuv3dVeas53DmzZDMrWzwUpNXi9Fv8jCqA7XAedHb5wQyqEhB9EUQycoCHiG98QJ9BLnkJZA",
  "key7": "2kTsSY3xJkMxsExUJGJGB8E5MsA8xp7r3iAVuQdqMWMa56bF3sZqLvGWmfYqHQeVha194XB1jiwve2j3Hn4gWeZ9",
  "key8": "3UkFtNtgPbNB7DMRX3dotJASxyEgR3j7xT2NNPE7RMW8DeZPMCDUFeCvcpK2t7ooKRKgs8p5MaypjohHrVXvxsFX",
  "key9": "4JayY5dkcHTGCCVcDNkaLg6Goj54aHWELcAyPSpYrBA6FtAhdegp4Sz1vBfKsTZFLRH1HvTZaS2mPEaTdQ1xEEPx",
  "key10": "4FGC3ZehSBKb3oybCbjV94zPM7VoC91FLbicexys9TBYUvK47r82RudSs6txPeRTkBCNEUrtRhEzQYG2pNd9eZC5",
  "key11": "LW21pzjdPHbL5dxN5xe15faUYzEy9efKZGoez6CMVbfL4DW2trFk9Hg5PFgYv5DgLt5RKpZiT3HrW9gEdwZyLq1",
  "key12": "274hbR6jdgsjdoyprzbLGgJwS7TXmnL3XY2UDwGMDs6kcVqKK2NyPLWJfzRj4a2EVFVUu22n7cKLnPY7f2DYAjTd",
  "key13": "38T1WPAsyxgMJfdCxoELdXWYMH2iD7MfPgPEVUecJrmPgk4UQAVK9kVpJc8Gt8fybSkWnsaXjczWpYDu1J4FM8TG",
  "key14": "2w1bEwfDG658CTiwaF5xSUJ8SufMWXPTCkz3jcLXrVu4Rr2ZegXAN3LV3hhWvsKwP32YvyhhBpH8HeSPse6ThJL3",
  "key15": "4fKRdHPqojgZZNFkzBmSE53RahhZVXWwAnuQVr1qABm45iBfui8u4WbhxEkgtrj9vHvhCcXn32hvCZ6eJG6BQ1XZ",
  "key16": "3oXqvARd3GCwaSkpMeiA146kdVwpn8bmbsAYvQDZ36btypjpxvp8ew6tKF2RSTdpFGmQTFeaQaHRYcLM7W2ZhUhc",
  "key17": "5dkqNTL3QBUUmdxaET95rLvLQC6DeQKrJ7Vi8apqM8SaihpiwcFvuVJvaKa7HziqC9TZqauETisJYdggFwyBeypy",
  "key18": "5HG6EYpeArsQmRoeocLCLTYuDdbnVnjfoccVFbioUBUmN6b5JmoTE9d9GmvmoLWVqJzMiudW3x57xdAi88PLu4V4",
  "key19": "vTDzSHHsWFjXvBRNasb9YDgibecsryQwag6dikt457pRXqjTHUy5DY5WH6ekS1LizKAhbv3FFiJKvqMymTV8VR5",
  "key20": "2JnGT1WpdcNwaaEvyFzHx4x1erxJjjBJk6yYuH2CvGGdZbkJHAb7UGV5d5Y2jHJGzKr5q2fk5GXcYGoK1VUt2NyE",
  "key21": "DgRbFQPSNmLoJVHXTdkBCCeMdURi4aFgoepEQkHvN1vZ5Emwy9y8BE7onXLgBfapuKqkXXjgL7fPemDrqehoYMW",
  "key22": "5W2zmTCKTbP3hTRDX1tbUZ46VPSxCSNiRjs6UN8FpB5muoRYebQ5xsURNmfukXJQ5CdKjX2Y6kHRSmXmWs7zgjtu",
  "key23": "5TNqJnfAHUu54P8cg6B4PVYSjcALyiKZq6rTu9uSePSuzJsWiG7fa3gYAQPTnaaj68JWbc4z4iTrocRLKfnewgb2",
  "key24": "5asc5g1r7e7GPkSVHcTNzXRxi9hSQ4rwCSxdEGgVMgLrj1b6DnnFYngGYsYtmPtMRSwQjaKxNAyP8PMw3VGXJVLT",
  "key25": "32yfsPPGetMnuvW12GddSJPUnQ35VLUy8BD44E2zhWkTenGqgJnVbjKF5WxCRwiaSN5HDLMAjotdJKp9wmRGtg7o",
  "key26": "4sZNYrKLczujo1ih8rrp4LvhSXLZ2FBm5P488Ank63fBdXL86b3pjKwQf1g6HhnHbK2HNw8Ra3DAXMtrD8EhG7sN",
  "key27": "4EbzRhESjNkNaaU4TgwvhGbsf935MKVHY8vqtEGhRz4TRMcboc3nUXZ4oaG24gPpubdYvu57TShQ5EcWBsQUz6yV",
  "key28": "4X7AmrZR7sFMAvmG6ckZbjxnN49RyTZ6co2TDXVxhaVBQnZ9VftPpaxPD5RAegpw8AVn1XCfRZyrhUMKX6QU95Lm",
  "key29": "4VPvrfZAFK6b6s5uhrhTcuUR558A68mXg1Bohc3VTUpNuEhnMwn6nk2axAhzR1Hafhhc9kjXrNzs32q5v2wwVugP",
  "key30": "5WbEiPsJs37U9oa2o3htCEW5n2YzqMYBRn6qyj74Sd7ChHDKY2RFWHsRqDUKypoRNVyHS5KfLfYCbRUjayrnHq2A",
  "key31": "uTm3zAkfDLjDXVfhtmHm1fZbQLi2HvqbkdhnMrEByfUiqcsT99GEqH5kCu7dinr2Ao7hpTY9gpJMF6jxwtRdn8p",
  "key32": "3KY8twAavc8kdHid4wehudX1GLk6GS7nXGAc6Qg9B6V4NTdDnfmw4pLha1xv9RDsjybqvrgFL4wracCbnCR3Q4pV",
  "key33": "2EtYkDNXPd3SoA5gQ2aqJhZLRMyGJtcRL7EEYtoreVWMRQHvkCo81iU3muK7WEu2ewSS3AAD8oPgHf3XkL94hXVg",
  "key34": "2imsiXD4Se6e6VVCJCqZvuagnVjaQjV6D4HbTSDKpHjdT8qeHo3d1eW68TfGC91nosnuogymqWtGMEtqwFwRmzU2",
  "key35": "m6ANhHeLDM4T7VvaJCH1oKso7d9xZYgGszmZRadWtqKgQHNsukPZtdMfbq4uJ4d6EVpnMuGkJSb3ZZ756ZfmgC4",
  "key36": "5r7nw6r6xayFuUPd3KvJsfhz8uibBm7Awh4X5sQNYPYZhGRuEMWybFJu36YYvSdDviaXcAAYw6nqPbufb4QNjDjx",
  "key37": "2vQZLJ2U7aDMYDaGaNMi14jxpZjQXHu5TYA7y4c4pLzYeuQE3ob9zaUnrHxgiXPaVY5zyNPA8vMcmXqH2foh8nrp",
  "key38": "4HJPWxuPK2L9jadz2FSwTrgwpDY19SZ2yHuk9daB9ZGUGEA8BasZgvE5Wg989gymKdhEyFmsN372fByouNoHUqzX",
  "key39": "3C3sDH82QGM4ZPQR3KLydxtTLUG7oym4kmQECkUwKqr55kVY1rVjhpHmxUGHT5mTLiAL2uRAB9KhUZt9qHTpe4g",
  "key40": "5B71g8TsGa9wiLxDYipGX6EpkJygSKbdEymvjGFfJthR9NPdvUCrLAYprJMeA9mc3MsSyBcXi5fygXgrVhsfxAoL",
  "key41": "2QaK3xoLbnVR85P1XvjiBcWcoFTBKi8cqbofVKk8gzopHhbdzXBUbta2CVjM5PzKNX6WK2xW9RRBJiZY6yg3QXZZ",
  "key42": "2bKqKAKUaDNj9zPWPRq5YDmos6dfAFBnwZU1LoQrw1GXxMxzt6oi1aFn6YFMcqqCApN8Bjp8g4upDhQebDEhmfVQ",
  "key43": "2vnGETSmrXmD4GASphhssUUa5E5F22Wy4eFUyhUdd1G4o2YpVycQoNZscowBPoVNM3TZY5XLwpJcs3GXSHcdfoJb",
  "key44": "h7nD9UeLYN6baTQQW6s9Wu8qap3faoZLJ2UsXvXcGgxMcmecdpcinfnDhPu9XCdSMqWdLotGZzcAPucjyxR7oWc",
  "key45": "4ty8SoK8aqAfCKSnVyGGDCj8psrvFYcim49bWu55PCxqBRLkeHi6RALzw5QzJn7JXb2u6PkhP2scjvTQxgpQMn2f",
  "key46": "5jGZo4fZAigUvZgSZ8S5mTjBGKEshEEXY1xo66HavCKrDH9b8xNQY9a7zLr5CBygsWSZ62tnHUEp8Ax3wDmdzHJq",
  "key47": "2p6wD66CMAEt16qn3U3GdP1sLWXiZrdZ9JNNGvzFUqi77qRN3udpnuJxf1gcgKFqduQKApLqR1GCCwEasJPxefj8"
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
