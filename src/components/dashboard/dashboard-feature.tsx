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
    "5VqLhNHzKpYgsr3kButH8q54UgVLJP9stdPptzG2CNpFRcd5qGKEYyhDJ9HgcyPPMBMnsfViDeMDkuYszQ6bCNWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WF48Ki12r7NFeULqkerkTcTYWca6tCvj1sjDbpSJynWMQrfujskmECyffXZu9P7gFt4DdpnikuvR789bpbCgQVM",
  "key1": "5QryGd23QUodhn2ydvgSozKKxT8YGBQbfYsFL21Ws9UWgbKxcyTTyJ1yhwHZrgNLWz4EWQqzKjzHuicK6QtRbLtc",
  "key2": "3hmWDGyCqBfpxapsinLVzXCzLFHfiXTyvaHvBppLgdSuUEieejRAFJX3DSV7ixkz8Ser6LLRJzrPN5jNSuBshVdC",
  "key3": "35igyViWumPhYwZbbAausEULFt75mqzaRXD8gC4d2GjGx55GYsAXRzBWH3Xd4g392vHGzf5SXp4Gnco8WZVWNUWB",
  "key4": "5PyrGhKd4ds3C7rZC8maNYkujr8NHyza9GbGLUHXnPp8FxQiiBYkSXWTGPSKoWBTTCVQEdoxFP2j54753Ahtpm2f",
  "key5": "3Goo6QJsa9dVVYrb4UFfeNME1T4UwRYhUTeNDZck1XMx4SDb1Q7n669PdMzr1wqgDGfW6ijSm5FqB812daQFgJJb",
  "key6": "4DMdEwEve6xbJ9siKB5kJP5EFc1562qXgiB2CgstfKQkppCVf7WSpxw3B4tdEVuzqTfBqF671mFc7Kn7joZNbBWT",
  "key7": "vmeQxAcTMtJ82jvCDJocphznCbQBULxRnZ9o2REfoKb8AWzwQyh2c4zguqC83BxENez7J6VzZAwxNjs7WbBbxEX",
  "key8": "2t9dfjGf3roy5X5S8zDUNSDZkkNWrzy7rBdoP8FKpwPcE6MwKXzz3MBxMAdUSNgEVKKbZgi1BsCVJJvzWikQz7ny",
  "key9": "3kJL3PTVjbjiQccsLx9Se3U8FasQQxP7mTUuPauPYgpmfuSBxGBK3XWu5u1JsuQF66NjfLmMitehffnDBYqYsqbM",
  "key10": "RzWyLP9NJo3XawJaRrW7DtKSQfgFq9bywrGLNeqXciFMCZsQfTL3nDyPZEdCHf2oaPyrgPYZRhwY83a555dA1L5",
  "key11": "4UCE4FRrpCvttEhkCHyEg5hnuMK3pCBA9pnFY2A9hJfyGPKTNg44GBg8Ch5TFbW4w5D3ViHcsoLKpyba5GS7Q1TX",
  "key12": "4Wkrx84sqSyppftTx49G4P4BtaLnnHGy78HwX4LBMc6jL6U2o9TaedVTbWYwDZiqnkzWoyeH7uaF4yN6ZqTXJuZT",
  "key13": "2GqwmbKkTRgAP9oAjk7UpLo8NTzwyyCSi69hpgRRFht7rufLcZDqEAfMw7sgkFhdSfT8SoBgKQk54DwG2s5yWvHP",
  "key14": "3hdriptE3YSyWhRzTjbWy4iUipvBhwoWRTnHbpgsnXj28Kv2dyN7Lshr1CnsNvSaRdVJfCC5B2Vsru5rgRhAajCa",
  "key15": "3GpyK373L6fjwgctHJaBxMaB6zyP4oLBVSYstTbb9yBFi1xMR3dHYXGnT1TixTFvvo6PG8uF9mzHk9Mi7SwBypMA",
  "key16": "VUL9ck6DQhgkk3PGdYDZprXczRX9aELfV4w6wYFVbNbBxMzWrUDCHjT5wqghijNfncVTrAdipsB553yUPyRvKDo",
  "key17": "4UqhbgzvniMSEJd71n2tU3iqpUGXwju7FsohzYcAHUteQKwadHDxi42qpeKQoh8wKdmodWY8xZuz6ZShJpDrWeR2",
  "key18": "59JzyT7hCQYTDvLjeUEr5q3YNfbDUoMBKxm9Y3a5Ua7SkSA7TkULXzby8b7RPpxWn2z4WSu4Fg3FuJgx3vp73x8m",
  "key19": "28XshZrMnA8XXvMyRxqZjtghEjPcSqzvmdVpszxwfW9sbCx5bKpsemYScixyDT4DXoduRUhp591reowWczBCSwdQ",
  "key20": "2LwxUGFSsobr41X988orjjVPPFbYNgLWqatCn6B8CgeG4uXP5CRN7oFGM3g8eHtgTuDmw2JJfqYRZpTS4iYSM7K4",
  "key21": "3zrAizHFebzSDwKynyjnfRCHRjNvCXZpmaVXSr2k8kRdcT7MTGr2pDeBPeKYK6qoF8QGyA9wtG8FQCVeBz1PMxTX",
  "key22": "4Tq1A1cR1y7ELQ8AteDHbfQzsA9dTwAJDwEWurVe7or4ThXmYDE4VL9NfTAresEbfeE5a7Lou6HiNPd1c63GXxTb",
  "key23": "5N8U1KaUznyQpDetTL3JHaxLm5C3fAfLkeJW7DFKyz9wMJ3zP7U6ghveVoF7upcxxY44uuMKNdSoZzpv54pAEoBQ",
  "key24": "3EXkX3uJEiF3GkyFa9nyoen4C35cNgLtABsFsx576uBq6qNBPSPKQrMJF4QduHsLNmz9G3QQKP4PuRdYCpKyEu2q",
  "key25": "47yfzeLmCkAUYeaRL8vzpjfKg8fcKUFpTzauGssrBPatCEK1HY5p1c4WHVWrbSBUHDJNbcGob5orvX9V36FzEuwg",
  "key26": "3tMBmjCXNRmRg3FXVNPkivtGhBFT1yePnDJKnYdWJfZ9PHRnsxxgvu6AjojkPR4RVwaSVd9yJChgK6yCT7ULeRiW",
  "key27": "66qk6hYxXEkCQPoawNatGxhHEQiAYRW4s34xLMGFvurZx1Vo1KoH1FEmNrGyYsUT81ZJkPLVadBn8EhX82yoJFzC",
  "key28": "67UNH82f3A5wZfSaZG4Huh3Bi5JzZgbJMXHVU9xnPdRXazgkNzUNbCVGKmKvSxpF2zgWe2GcCmZafi5zYSeAxEJS",
  "key29": "5pdwSVq9P5yVJqjp9LxULAHp31sRvLjgYY6u8v4LCE46W4gnQqkUtk4jEGKz9ACCn9YeVzjZLg37iE7xqZNBTVkk",
  "key30": "54DEdUW1bdtyMXLfG3jVx3dx8nDJff8PfPyATYakQ15htVgF8rnYCmyBFKmH9uaJqTFVeDSp3WdFyAp4ukNpYbfp",
  "key31": "5VU7UcYroGRbRnGdpCvhRkfd2BqmGoPtBkbcKV6tBR6hfF47nBxkWbkLt58XZwxWzZw7hDTryMVLHCm8xdGWQq9P",
  "key32": "56vWpzg7N6itpXbFaYMGUPMyPfAFEW46TTxuRzhrYC8kwNsM23ZXR2ZR4Kc9zd6vKshHps8epD17spLayf64t5hF",
  "key33": "3hc2R6PVyFoa4oEHRwMHpU1BzA1ppuUDZmSSRxxsfBAJ1EbXnP4qniXEMf2MynjzfwBCUcGSjcHdGzVjwyxTa7wo",
  "key34": "4FuZdzpPieedQGPWCZEWDGxSrvqGbThYj6hreoRts7LdbsRtj8fd5sroXbiBP3hZgsLSWfiXuZMDg9hqqRsvMtkv",
  "key35": "2jVXG8PTD4EJXrup7bwiQ3WWLFGXiH5eAJXwCVRvjXQJJrsPuv7yonBUMAAJbHCuRzpZqXqiF5K5z3cMCzKgSgA6",
  "key36": "4CTh84G1fvb2XCS6aBdUUzQHv6ZmobWsprsR96QHMeJU8hmV9sFG4odow5rKPtfbnoSW2jy39Mhau6N9w2evyDVK",
  "key37": "39L7LjiV1iALfVYgQr1cAAfoSNiNbStQNm4EVN9Rva7s3t5c1Dv4rQxeZgWTa2zpie6ybscabmjwkrQ9QYcZxPB9",
  "key38": "uJ29yL2W6yq7AsYMu7TTWy8NVDzqny17ziDGTZSJkfxU9dox29bw6Us6ES1S2pLD1akf5M6Ymm9mv5RnghqCDn8",
  "key39": "65yKQYE7YNfsxMfCesVvFVXNEdQoV8UUrvx74icu7oWbF9UeSAeFj2fguk6mqbED5vxxwBKVWdKMRJK9nqPawxL3",
  "key40": "2fLRSPs8Q7iWvcvNFBMvs4GcGXr7JVrMZeEFLtgzA9TH3er1VsMtNaNP3VZdVmHXCb79zArHN6ERJLCz4sB3BVJ9",
  "key41": "h5kADbzTTXrQ1YTg3ER93JhVp94eDq5AdSrYqwXoCRsZeNh5eH4dD6eu7Bnmr72HWz7by8ARZkvBNd6fRP2GASC"
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
