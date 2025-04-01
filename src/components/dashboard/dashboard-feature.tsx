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
    "3M8G4D78Z71hHpiiHf5boB9i5uK7DAwPisvojtPqAFJmYhgko4JfGspVdgJpPk94iwHDSELMv7rRTUqovYkzdnSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yY5F84LgcoY5R2cFzZ97Lf31J9aDRCS6XFF5ZdfpxbK9bNboyCAnyuCuBRUqBmQXqgGtNxegm1Agx6DDi83ja8H",
  "key1": "37SkDsVGLqRYcUkKqNeivtALieyE9YpgXf4adubtNMiHnHha9dvEjQzRLw5r9fWmjKyaD8kYP6DADWHkHYTmLD7t",
  "key2": "3NwZPgaYntzkLgQTDD9KhBdeFFoapGFTCNbhNE98cRK51umnx7Dpw3AcP7J81uAc4HAevmrDNTTgtgoCkxXYEFXF",
  "key3": "4cadS83eZvgSPmZrTGr5uriDnLBQbvMmtPoofN583gdRBSjazy4y2vXm9QQ6kPUmpPajQqX6JGT5JtBbc4HR27h6",
  "key4": "4FFichmhg53FPTHhzaxg652kwXopWgrYjSmBg39U9zhsyKR6w3bugrThy31vZGBgQwuBKEvnjiDT7FEpNAGvaY4K",
  "key5": "5ExfSKm6btNyC48t4ddnGfU5GYhpNUVtuVAqskHtRV146ES8KPics824pqc1HDLexBCGKUD2xgDDqH6c41JgrW8R",
  "key6": "5Y7n8Vg1mRQ8JgyMw7k5rF4M4SuMVJLeCmd6RiDXpPo3J9whuA3w5i8pSFBoChBTKbLWcP22GMi3r448KpWhPum7",
  "key7": "2Le2PsQGeNxrFcS2V64g9yvwFy2zWdJiGdJrUTLXgtzJ41fkSBRfznT5geWfTX5mcbxwuVwYqwauJp3cAujkJ2Rq",
  "key8": "4DecCs8ZqczCLaibqtQpiPmFZ42uVa5ZWVRCJPTKptZzQw87yRySB1aLVpwaqurBK1yzV7RkfKjS7v4wxh3HGhvD",
  "key9": "4AdNVmiHkskKHQ6Pdn6L2kxomRkTvJStT32ozt35UE42Dgdvsu5iAHipLHx8tLFeiXGzsZhxEqVfbvEfmaf99BDZ",
  "key10": "2BhMhPrC16vagX36zSHNiq46ftUzk737eXCqt91pqTTiSLRGz5PS2y5FyL29ox11NhBq72ZkVBFcP88NPQDUwqiK",
  "key11": "5NJGrSdt1uNDeaAHvTur7u7kkNR7vK5AgcjcUAUhpyHdHMMnBhpGTMtPaM56pxupBbrd6fGnW26xvNh2hkpFVph8",
  "key12": "3FxqVmDLYgt6bWUU5vnv9AJJQDAErPjeeS2FZSSCPJDNxvbjwCvEJGu4U9p6pMJ9xuXW73tfZvN4SqfyeR3ewEp5",
  "key13": "4airVdsUNEJaxhResJtNbuXC4Hr16hFfP1YQWEU68AwL72SDwhJuciLe5krWLrsX39VP8Kf3kfxUR8pYNUF8HT3e",
  "key14": "2zVotPLuWRgFWgFxkuP8dDkGGKbyiioyicSYWUMriy1RLo7cdYB98DYWHbk9QNkCi52HjSyYXvDJVvaqNvEpmZeh",
  "key15": "3QnCFrfF2Rk3BDSEUJi3qUQ9a3DZyq326qQvBxm8GxaYabpKxGgsdJSUpeintrbbY5tLhFTc617ewY8r72pSrRJd",
  "key16": "4C6Q7RfpMaDTVD5SSd2XepJApcNv9SZD7rfWUFu5J9tL5KbdggGy4zemqJCssXVLzaBRFtVnvEk6nAZ3HjDUXpTB",
  "key17": "3oBSXEHBQiByJWisg5ucmEQ9BbhFmmZZWyphGt34NGzUrkid6CFWd8LgSAyk63Yt5C3NZpsxr3bvcsc36JVqrQyQ",
  "key18": "4YcgPHYjFZy4QKfnJrPhSj4tupiVY1UqChdLAaYBFRUZzFBUuvNP4gdENwrnqnjtnMeFxQkuNVnbU1B4Z33ouEAz",
  "key19": "5296mzmAphztNqjAUfFvCeiEN2Xgw32myurtg1y6vCXCZNWUQV9y72Rh3RMbftZ86vKcQ7TCyYANCTsFgt2vUuh4",
  "key20": "WPZuLCDb9kuafEUJuXwExiqi6JVf5JasVLH14ZFDgc81EnWkk5J4CUcmB6qmR1YfJShFC6upDLiAH7YNDcbQNYn",
  "key21": "3b2SErcES2GbmgPxvz5X86dF9c4qVzFpNDQLMXa1DCBpaAFdizJZKNqh9LBYMp43GCreNPSN84yW3Jkb6gwRgjhN",
  "key22": "5aHbf1gEhU73oxYoPgkm1J9g7NNcZC538m3jgdXk8xrj8BXSuHMfjYSVMzFcxHDoPWc3UFkgXGeoDRt7mPUuoDDu",
  "key23": "64AMtVJMa66kcgZfrty9z6WE1PePk4P4p3wsFctm4tx6DzC3DyBbigtEjhsTbh4g1tPzQSq8fgs4ZS38ywGXjSHK",
  "key24": "8NhgQbgEob9BKMyzdoEswKXt5y6i6eKt4iZD1SKPQiCXu6MoD3i5Pft4KEDWFcFL1pTByXJNFf5kGapoxBW5BxM",
  "key25": "4726xocADh25Vy1YV3sCQFHoUpHPYaNKX4hhetXE6kxRHaQUmN9LF4PS3obZ7UPW86xukQ2xbuRgpzKTp3vUUT3n",
  "key26": "xzSquwiT3GTU4YdxCjcqVFpM2AuoFYWqVqNKFouJSYqMKywh9eeB1znh7crUyL4nXDBqHNLSQVWKgf5oAuWKasZ",
  "key27": "5rXPEo3uRyJ2hoMMeRSTrhXDSmbnPxZKXUannaDhTKzHQ94P4NT6HoX9bMZjvWDRaQbqtLa8dekExc6y1n92vjpn",
  "key28": "2GPU9u81epn3tofmr9iVsDdkdg5vwftidXtvkCGhoFNaCqor3nwqcJeNLkyBddDttnaJ3MG6Dh9W4NPn6qbXfA3",
  "key29": "2cSnM7YQxHuZWM7cYjM88Gsvm3NFRuYYcjigCVHp1RHFGLrk1mbVHPvrAz5bWi15TeHFtxqV83ikFnUSzvWYKXnj",
  "key30": "5UCM3A22wMR3JZGzGVLx3qdKi54g1w7gsKJMnA3rUxpthrof5GNBge6pmBw7rpUAuAxR4nBxv1botsPPvMAdBJKg",
  "key31": "2XhpAcq9JYp5DyniCQwjLsDfhUWXvKurHstTBC7nwqjcyjPBRPWCPPFqtYo2QhDRDwg3Vnru5sGdas3FQzxYmSF",
  "key32": "wrZDpADBYoFM5kxfcAjtREfzdxwKNcLqFb3mBYmKEaTZCNXeEa2QXn2HjCV94tk2vy9N8MAqdg7rUNd6XJWU8UK",
  "key33": "2NsjNgURy91SvSJuFbyMgdRQNZQ71CbizvKx8QCeCLGfEg3fW1cWePcB1vbZpUZ5WaFMHXViu3KbpMjXnYh4a85c",
  "key34": "3UMRdJXxxvAG5yJhsW59UH5DSK53Gh1sF5yFRvkHx6o3GUyzoN1p2sj7GnEDzDPWsCZBtpU1G8UJaeEYScFsU3wG",
  "key35": "66dte4mu4DAKY5RVF16rnaqSApX1Z7fMGAUpLiGvEW8aWDJ3Yt374mdcxzj5fj5trrE6jyCmNcEkYX6SFgm7h5kS",
  "key36": "4CZPbnSraEy6FTRHjrCj32LpFCYhUrCFYKuZv8qrhfyLgmd7n7Un2gm3TFnPq8AUxVhCsRkJcuuiSUmFJtAV84k7",
  "key37": "4WCXDDWbeArcD3bDYKcjx33JA4HEr7Hr2QP37wDj69UwTQTqG67N2ufPUTZB1LVPrqzVkA1q3uuRYkBqVLvsFoea",
  "key38": "5FdzrVXyqtH37mNpzaBp2JAqj2TByibxYnMrJpbvFjNJyM5WBqoaC5A8p9scYwLRqaVFuVZGzWiAVdyFrFP8pvuB",
  "key39": "43QV4WKSeDJTyBGkigxJY3ULqvJwWuxj4yXUrwt7yGjHcEK2GDCmXPKRZ1mFkiLBu117NLbLDDqEikpjR275Uqvn",
  "key40": "4kHJD1oVnKMD3CLDhPdXzcmXxqebFar4TmdRy9qD9BE8x6uyo8wUv3p2izpLB5emkzQA87oqmWdSFEx6zqQy5MtY",
  "key41": "5Xy6f3boyUZRvSrFFyP6ce8UqmcGbJqBb81MALfwZHFEzUbdeWWxeYaMB6DPZMNeGuSDHLS3MxLYc3hBPBYrTkQX",
  "key42": "2XTtFDXDB8XoxQE2oM5Wh74L9pfnSHcjimyZYjs7MFwzCtdrkVygyWqV2qP4ioku6GboBKo3WSgjFbg9znNL3451",
  "key43": "3knemmjEBZqhpWB2nEA9BADWgKyL1bsK1ceyPMSTeDNd5gFHtvz7B6pTxrXpRwPqnz6Hak93gKKct3JuqbwuBfgN",
  "key44": "2aKCp2MeReUVLzBUvbsfBeeMXZQfym3KRhx4haTprUVGXXtNjwvvbiQ5rhjbSZPhVUeJcJGUx2v9moYCAwncpb8Z"
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
