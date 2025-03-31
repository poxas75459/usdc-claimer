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
    "QuQym1hHsfUG68DdyuJohDrxMU72mhSsxJPwzMb9SDBEZeidxmz5Qy9JGNaRtgjcfXyjrLzcqJbt6MPc4aWd2Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31FbP6yPL1HsmTrGoQEZa1hzp9SWdLXj974J29GKDzkDyeV1YrZtrJvC7CG5dggsqbDLRgmsFZQFJZ4Sg5Bvn1WB",
  "key1": "2jWeViY5NtbnQAk2MyxzUVghybDGoEYHymVbXT3oPmdTS9C5Vz8bMhUbE453BbBVMvM8WmnDLbNwoZsRF8bDyhiE",
  "key2": "55AmxLGbPfWUnCSSuyzUaV2vdn7gFBXTH5AP7wrq3fYBc745KxVDQ5Dm8g4rbe9m9hZLj4JwXiXSh6fMrKFividm",
  "key3": "3ya6YXNSPjZoHf8uGWJzng7unVBWNiHrAv6ExKGWLsubiYkLB2XWi1Z61g1N1f2Zfn4ERJpPwQUQTzYEa7GfGosF",
  "key4": "4bqeoCDwYafACRMPpFj9huGFs2VuP3nyMMJrGFRkeWzzkHpAEewFzRsoKBjh1M1qzP1pL9rXDPjED3mrfJktnYEd",
  "key5": "4mp1QRcZ2SS5z1aQssBQ8mFjDcAkRp1pvpFsjJSJDkz9LVKsQecovXuCwJpnYjtXLtJ365dHgnBr3SdTyB1YjVKx",
  "key6": "3Qsd9LoLmGTDruM18AGQb2Y5HWxknNbYvUE9iyRgu3mDCbVvEjp79FW2RjeoEWFkPbPTQdRTkN6uKjodoNJBJAA1",
  "key7": "432SnyHP85HmFuXzFcK2iKmXuHPRh1qdTscmCd1z1i8GtBp2nX8jJPNhCbJkZsbnFPiWTK5QXi6njW6qirHHqo4L",
  "key8": "3su4mUd1yTWfAvgny3kLV3EVjUaHnZcHRkHnxNgiUSdBbBvBJSrPAp6gkGrJEVZznna61GbR8wgkdVpEqSZQd1Hg",
  "key9": "2XnCCLEM5bKLQ7gngf5xb9uThN9zBThgEuTd1KRHotiFBM4KwwyEhuBBM88i3qKbht4oefJeKSz76RMkcdcuc4w5",
  "key10": "3JACBbcK4BLS5RtNo6bPDG7mCZg9V1mjYZvF3E8RuA4tnpM4TzmF5o8LVYcm4J86r5upuXMoreT5fkD5jWyQqtg",
  "key11": "TNibssBDtzwUB8gpw4fJVkd9BMuuNF8Fs39F3eUgN4aXHRhrimQBNgFNmfgPYq4zb7YZXKxt9NzjU2M5LGd9Mjx",
  "key12": "2Xa5mqpRKjMJniPJ44S9euZdsQe2kbdJZJgU5knwMPTXDodd46hBsQKaygYZp5YvEPBGfUygW725QvjatpRz9KdQ",
  "key13": "WKaRxh9uhSuyh2dNGNi75kAAUgCotWvMCn73p5yL45KtZnTC5DpffXqHjauS526rwSpJ7ziWBEkyjdNxwap3Ank",
  "key14": "qKbKeam2Dh2kgTJpuNWBdooUacFQPJF3J5JFxnAUvL44kiBHHsrGJwp6VajE9MLdkZHAdaGV2KunNykxBQ51psN",
  "key15": "3FcGgHjdzwgKtYQty7df53PopAdRfscgFTixZoWZewcvTcx4nJgNft9H6NGHMxUd9AKpgn6rMLoocusnacpMj2cz",
  "key16": "2hErKRDbHKPBLDa3XFUamBh6XnaQLaZKMmn3xxEjUGjFDepoPf7dHGe5QsqF1XpKURPCQ1z62AibYHphJnktemt8",
  "key17": "3a5JFtkzhbeefpstm2vgMa2mPPNwNj2EM4JhMA7KkEw8ATDLMus8qymjvFgUsKTmkp2tZYbhuXnMHtgDjyL63kKd",
  "key18": "4hEG2D5T2CtxvnMMqzcDsS6tUS1fP2wuGj88zDCMd7TLQwaie65uXdwU1zipKRKrbHrpjNjmLy2ajni8Hiv2126",
  "key19": "5zbPby6id2AK1GNkjAvQSsCWo6wZb8w1HCrjaug478ePPZY3HyJwZ3TcUc7n7ZznR7UpgQcgLTgzUb9rtm71nLBr",
  "key20": "5sADZhe76dMCEX8A6QKK7UTdhzyjmn345Gzin2hgsAqdmRbAJm4JNTUf4NFNVh6BNDQ8mss6QLHh1GaPpBM5ZD15",
  "key21": "2ZVM59PP4ai71fHXafYSK5F7fo1E6krAgRgTvvSA5GNMfWq9WACt7KVMic9ZEeiWTdnonxXMNk8xFeUfC8eRg93",
  "key22": "5CjgGXSPRKradcHZLR5TzEgdTQHrZTN566JWh1AHAp9G2Z4eBowqEGaSqQe61erqtGWw6B3AmYbRt7mg8aJBZPrg",
  "key23": "3WakGmXE5BBM7HcDxuJv55DcJz2uUXEb7ghQfwDvNtZHnULVdno1LixuhxAPD3YXewJRYeMgLTQLNTfd23GCMzVo",
  "key24": "54daG28P4dBt24WBKpv6DhAnFrVV9mBVHxeYqCMEGip9uLwJwnCva2v6SwXenkbG1sfWcUPr5fR7LLmyojhX8tuj",
  "key25": "41LfmUZPXpZDEUqkqDwbXfwSB2j6NgmDBYpeg7KNSLgfU6W9EoVmyQYbEixcSmaW1jee26PyoyikCGb3crXcZjN2",
  "key26": "67YuZJAi15Lir6N73ikjp3i5eUkA9GcZDSC8cqDacmb6gGHWEhQVyqsZQrKoEGQyqK482bNJjyYiCKgi1ZXrEwS5",
  "key27": "34BSoPEmejEAYsJ3KL87XHuTjZgSkUFE1mQhs85YAgUUsGSboRsKbThLQoCnxvtHGwFKVnSwh2Py8wovi2JJRQdM",
  "key28": "4fPs6BLnDQDCJ78xQAcpqFgiVGwu3jwvhCkMheAxTJLHnMqCkQuvnwkJ6A25esEviaccr35Yq1nxy6SPHiARWG3g",
  "key29": "2scMqnewcTGFvNDwGyzmUdqqKGFm6C1C8L1W6XPVc5oHnYwCbM2CaaRw78vfaovSAwtb8uEWTHkSD521dtHFdeUA",
  "key30": "3o35ZSwk7nEHBW5ujHLWEhcP82bigE3i8vHmHj9nCUmLLXt8R6eEb3MTYwwxQrAVpJgeaZmozkQE8RzveudsjUkg",
  "key31": "5zr23wX6FAg4eZqTrHh8BW7HsNbHRCdNuKbjeRJMjGtMjy4aXfTKkTiwPwRtLSB1vPB3YqKZ3LfuoN2F2YLNrqii",
  "key32": "4mGZ958UfxuYv4Q8ypzpFoHorgb9VGYU24wYQLLNUszJSBCAjNkBLcFBVG5si2sAskFymxCE5cR5WPfP918C7qtw",
  "key33": "3n1kSrbiqsJTZLr3uagBaJcz8Ss6xChXW7u85VWaK1Q8zbuvqM9z4mJTiu2YEAD8nSMJUqZe9eKvQeAz5oQaFixP",
  "key34": "2iMqMJbXi3EJrENMLT6MWEjVTaTidCDa1KwiH2QRy78EskLEpANnaHXXHpMupaVQP5ABF2KNHaRxHFZNy269UCeC",
  "key35": "2x2cM7HcHNdfrGYpPz7ndsig9ryp8ibK6DbreBqj9yMdoVaE4NCqxvJMG639KK9pRXJNUvoXSL48i7SYTHCHzMsJ",
  "key36": "3zStBULxdCHGwXa1h37CezbXUjhA6Bn9f1L86XNGqcNVbw5E5sgHbDnqm346rk7LJdPqU9FVqkXBU54Lbzs4xBzs",
  "key37": "Wss46jFUqKmgRvst1VhNaTtvS2qvUs6WJAewojJEcEQbUvn9ya49RHW86oNWFMq7GLXQRzAnkhQG9gRRzH7W9Ti",
  "key38": "2R895LxgtiQKRi5qVFB2ftyiju7NzauaFbGC231LiKtvKPqRNe8ugbmRt3taimPY5AZcWTpVstHi6bS5k1BYce1",
  "key39": "2Qa2CuCk5LKgGUyNPd2jYUBSJXs6bayqPf8k69zPWMH1fyKPQquzrzBYEFVzMq5uy8SreZ82pSko1jDuvSNAqbWn",
  "key40": "3RLz2TnTkmmPztZ4m6kRoFsBeh8o1nrNqT1uYRHPhVwXDtFPbQdEXpgQUwUn8NhAHj997eLiMb8m5QspU2iH57mo",
  "key41": "4P7wDejNM9SYbsvr7CSEXWire9p9rf34KwajQpnjHFS1UuB6638Q3xMQBZwENWi1J45qXrQj2io4SwKcammjyt7i",
  "key42": "9Mc5kU9AWyPrymZJM9dY9oZPZiD7xpYMDoPpBZ7GP5X3wkLNSsSkcXA6qumrbunnQky6HVLZByw2P8azyydFFcL",
  "key43": "3t1A8GCazkkcMhSpHqxaQpUZ9A9c1kvaavw84Eqo1XMA51kZyLHzeMumYGVZuT2HHw2WonDgn8rESdnUZyrPsRHh",
  "key44": "4UPGW1fuUPcnSZfJLWNDQ9aPGdweDoz6aQ32zjZPoH2T4VSJFbcPoRMHN6Ndz39aAFVBwcoC74Rt48YQ5cjt3WKM"
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
