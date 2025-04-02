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
    "2ModjwDNLGJJ8hzuuEGLN3unvKce5xjWp7QydSX88HGWvudQujXKTEuXe8HoQKWjub3Ajr2gHAzac38rNR4T7amq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UVK3NA75Rp6kZGz7piHghqVEuA3vQNFSFtR2GcyGgr9A3Z7nZd4iRTgRjNEQjKecSUzvfn13gLXFYb6LUB3J9B7",
  "key1": "3HA4EJZhJBbdMvbY1ZtbKGyhpYCBAJx8hgZ3WWgZHmigNaj71yLZL9FNbJN5RjxwUQJasZLnVnzZRNetJEhQvGE5",
  "key2": "34Hsu2LZr9Q7xTHRN3gEhbPLtkkV5K8E4w6cppYrYh6CtvRQqHi7p2DfmCD6fhC2erVsoGkX2xaoK4XEJa1z5pK",
  "key3": "27ZzeLGwj155rkfDV4t5Fa39AmMP3PoG2bVnVz5p9ExPQ5RnegdTmQ9VDeVwnyBVvvhBRjuyMPfjknAEHrTMQSLB",
  "key4": "2KQESZLn1sRiER3swvUznRPrSNh21Emms5jd2rd23fpUteeUt5TvAjULXzharujDd36Yueyrm22eTdioYWPHUJfp",
  "key5": "2a74eDDMk4Rcq5m9pgZGwX5jAeSL9BvXE9aK1BwpPjqRiLuLLXNzAbvwfsjfGTYitxHJyrZDTwzpbCwHpEsasQYS",
  "key6": "2MvEPh3kwDpP1yb63DrWoFPk5srCu6iboSTC1ApeQQMPFkQDb51MeCvUPAtyy9Rkh8dWe37zufDECFvtsHjnK91M",
  "key7": "qD3Bvqp7gUCBzq2AzV7fCCzAcoNaVkmhr9DVHQDXfb6wkUdaGTb8ErtyaFGYA9EQa5oh1JAYP58BFt339Tbznw3",
  "key8": "21F2XHjQArjTVV5oG4zhCZ9ggmyF4EpzJW8EQzDtqokSyVZkwS5cKXebZz9LebwqoBhJNCHKomuymeijDHjfPcYd",
  "key9": "2fXcefp5EtKyJeygKfVLifXnRqJXRjnhiRTnehy9Lem8zxcPBNkfYxStMGayBrZ85u5pFmP7vzo9DuGuzhAAsry7",
  "key10": "2T8GSxDzqCdPVJmZocQ6h3246N8DGsv31T9rmcAXoLmmzFGMFqEwpEgVEQzEznQQMaHbWzzjSYrgmLerEhtbyiVv",
  "key11": "5W6sV8T256C2bQysKrbjsBxXf831QqupDaVEntNiSVBaZjqKEEjCz8yaaw7pvX4v5b3prQshbYiKdZe7ZMizbh9R",
  "key12": "5Jz3CUqvtCRwXcQnrxnoAxUQCHtPPuuhtw3Ky8874dHhUB1bMRM8Zh6XbA7FPcgaWyEoQDb3HFdwmwQarSREw86u",
  "key13": "3HpK5rqW1cLwDu5wCVVBhtHGHT89MpVVcEh4UVd8bP7Zwiz1Sn75NPkm84aKbTTq3q6fK7wKBPSbPZuh4UnRgTtF",
  "key14": "4abv9CftZzB9hVZJmHPN1aR27T3Kt2CuTsuiohop7exL4xnkfhGLpzSgfWgWi3oeVoNu2MjbFW1xfcJKPBTxJBqA",
  "key15": "2kUwCaLpqJ2rj4zqRv21WLaWt5psTkoDY9dmtdBgo3xunMhcwezkuspamLQfGXDis4LjTEd4HkADSSFRhdCqr2z3",
  "key16": "gRUEmFinbQr2iuEApEDVwDC7QJSKk1fbjiHS7J92nxXNvtn8KogHiGte3GtJj7CSKibFpwkeB41snaAc2wy9Exf",
  "key17": "2jpGnq1LT8WYUm9worMiwTXNNmS7nFcJg5wuRj3LSeTza3FX5XW3o5BSziMsGZXNjyCZDB1PFZDTYqGhq8U5U6ED",
  "key18": "5Njko6cY9puuDxP4etfZevFtRvjPBNrAe3Ln3keoXPonaqorABfkSF67XeM5ZNcxH8TfMWSVJNVZCbAp2pSTLuKB",
  "key19": "5UjPjqEB3ytXUwU27qn7ez8KbyGCLNe25dJ5wB6xuGwK7FXW71beNsNSW8ZCAMKdJRRjYJN14dERvuDKDrvre8dd",
  "key20": "jVRSXvuWErf1G7wpxconMomgKuQSdWykEKGerjw68YzBHpn9oYfREe1brHGjca3VHfA9TBhCZXQ3YvpH494FNmv",
  "key21": "3mvLoZnZaf5GAqR2mMSCXKbF2ngg4Vskqs4vzAExB1hBwQQG8P5y9tNDe3cNoxyeViL7THoVVsFpzjQGuuyeGNMM",
  "key22": "43bm8Jd1fsPacadxvUJfZWEVRHo5gR1fKv7VaKYjKhJSsrJGBprDsdVMKQuv6kPp6Mc1B4F8vM5VLZWKskaHgJNF",
  "key23": "5k2CRxxgrZxvxJkCNnRPiQg4gCY5jsyaaBoJ872GViQYZhZjxrZL7tdWNt9vkFPLpiCmKsiTaHVWxq2FLX8poUMf",
  "key24": "65rJRQw98HXAtV7tRG4b1Q7tL8hYWAYK3ELG4JdXYgMcsJHcXvHF8ao7ZmpRGnbH9NVz3itsCEHkrDfUq5vmXNXh",
  "key25": "4zg9TNZg86Acfney4E5zgAS2HxhCz4Bi6vB1k8zUvqP6SUPArh7UajXri1YhWogLMNz2oARZti9PiKfFfxSFTSdH",
  "key26": "38tEsnXEXGdinsPRSDSGdV7o6d22xdKqz2KGQPM2UZioDqZJSz36iP56MjiSML9iVyFs1yJ4XVGhDx7vt7xVd9pT",
  "key27": "5ePrjBQmYmsTf6QEwzZxsg3M7G6nd4aVnQCoyJYRwyAK1BzYNDNdrqUHuTaFCf98ADp1MCH3XHxcsPtGF8Dxz4wM",
  "key28": "47yHdLK1iApYhcn9NyAdriiQTUugXx4HJ3MdsDURNj3epjg6GGfBuJUncWm6ZDcB3uoByo7H3tBAU6hD9D7GEczD",
  "key29": "5niJgnNnua5MCayDkaBvS6M5s54QBJWXLGMncR2BsXHX63BiupPN51xx76dMWGYcMrpwtERzQt1DTEvhSmL9Ea7a",
  "key30": "2gCBnhsCZRkfZRna2EUQ5HkpcgpL7vC7LUVzAeuTvtzH6TXAL7QPP6ExeywMEXwUxgAM2B9mG9MjusNBZQKkBJmT",
  "key31": "5XVrUoUZbrbfmWz9ZPbqnUuJVmUXcVP3iHisEHR2ik42rikxS9LQP3o713Y4iYaAHGMEkbsa46fP2VNscE6cAJHR",
  "key32": "4WYA4v3iTo1MYsJuUqScU692qbqqxW6Km7uhiZvA7NsvgeyuUQV8ojdxHFfHxGpoT9s5z8kJmrWD2MgZSv3JWPwi",
  "key33": "Sh1g3hk7ZZkanoobPsG5BTPWHmrkoRNVH7Y8TD54PyfthtsVTvh7Y8JNB5fSJa7G6Gk8sJm1Ea82YCnN8cYjKmj",
  "key34": "3svJiDuTkw3ahenyQXox4mmXrhTPdJAjfFQBUNAbfNBGEr5an76HxKUqxL9JCRq9w5U8bQdFyxZfon7sNgKzPwFW",
  "key35": "5cT6ZvzGXHftewP5cN9RmXkrsbsPs32FyqGBU2nktpkCUpuATNT4UrZQ68anDfRSij7F22yPXVki1dvVetDa94Vf",
  "key36": "pmCpyy8qDwZXUvsfmr3bcbuTqHqEAHR7uWehySjrYFa4JhcRoGaYQi2gKfN6usSCp1w7ZU5iS6TPs8Ty1zuSgjC",
  "key37": "33yiDqpjxZJnEsgBu7qLGfaGhCUpCxExs2qApmauqywA1Bfc7uFAGgCS8gLMBy1wV13bbFQqme95avEbsk4a8J22",
  "key38": "3RWfyW8qvftDb3xbcwFXTgFTJFetu1ZEY2KocEikzy2w1fA7eQYiAb2MVuz9Xw6dTsxM6NX8ojwgx2ByMCeUXY9V",
  "key39": "QQSq3gftBipGfJyxz43jzyK43KvP8Xn8bASzGdf387JQdzzukmvhdpVQ1UWXj146xQswpaj2NrLgN9Qd7YRRWmt",
  "key40": "43rbhFURBXkqeS7hiUZGUCmQBNc7JLZZSsSk2utVVWGa4HdLNSj8EHn6KUuDxrDxhSqwTEKKtkcSDfQV5PJ1gQMg",
  "key41": "2bcwtihpBWjs7QUBdEeo6BFJPJfvuHmLWTAErxm36gA6emKHhn2rvRLBHSabpUPaG7PFxPFHQa6VvsA2wYyrgbMb",
  "key42": "5SqvXnQCyZmNPtJh1JbiQq8DgYMts4XadwyuxZLSyPhJXuBMnqtZ63RDCjoZkAXgvyosgDeyVZiQMcrWgxnSfcjP",
  "key43": "2mzy2ptVNQdXcHVjNpH1Atsv9uPs9icGyFVHew1X1pC6xnCyMDsg7H4RiJxAzECd4Bci7LtxmHSE6YryzgUYsbZW"
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
