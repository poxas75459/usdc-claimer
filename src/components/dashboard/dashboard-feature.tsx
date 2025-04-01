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
    "24v2tnJ9Cd36ts4wWCXbQrhaE8a3Zyq59DZWwX1TiNGMYxQjnXC2NU4WjnsZaXovaymfzFbqMcvuo8Y8okNgSnLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FPVL62MV3xey7sZK62ViJ7AQQG6Gtucf4pCHrX2aoHczxMUEZioeA1HXuGmKtjwnvsabSAT7m1woCViz9fiXdkd",
  "key1": "4EDzCkUvzbKWRTNKQdxE6MV4Ho2vXJraSBgyf7iVwpduWez5EivphLcxiTBozyBzCzkZcS9nRCQzZPVZhScFLiQU",
  "key2": "2hpPhqzeL8cbHexFqLJWabeWNwRJbQKDNecUB6rQ133pwwo5nFkTt2WSnBRyQPJj2FJv7m9SKn16TrKJAZ1ppSSZ",
  "key3": "5V3XARrJHJWVAUvfZkCyddU8EqYo5wkHohHVT5QDiy3yUA3mLm7Ap6wvxgu9wzFGxZUYbMqu3gs7yyeUeFFHuYdZ",
  "key4": "3qGMvdXWiFD9sLjDwvEdyDkMZDFTe3Ho3VQDbLReiFF67b1xomeE7CLQT93GhN3Uf2SuY85dbM3fL6LYhZDrdWhP",
  "key5": "3z8yi8DFREF8kcVXG5GAtkC6zSbLHsSScuqpatazxiBo6M5DjqYoqtUcEPTpYZFa7ViMNpDoonF5k9PbLdG9vtqE",
  "key6": "3MHnjm8ZsU2zYzVb5WZKbL7QLWhQBst8LXU6RxfCyCxD7y9zAfZ2Ejrd1kiXdcdRgG11SyrA49j5TYoWJ1fVPWsr",
  "key7": "5mPTZhNUJnW4nHWvRkXD6hHJNedSEQeYQiR6oHyouZgds8C3LYEtMGJimcWuou7hCCPC8nL77vvX5w7NvcFeP7JX",
  "key8": "49nMiUQZihLWZrxaRkxLTjDwmJgcnuKbyN42YZqT7wUF1pjtWpw2DxSh36E6W9bxre7xM71sdiVhzEMkPejdYRyK",
  "key9": "5TpPxukQEWxGkXT1YYXFZAZ9TL2Wk1XBRatGRfY2SwpnGhXg5ZR3AMYb5oz1Mrf8UZoZT1MSmCFqpDgdTFpKMTTy",
  "key10": "617c7XH4NBuqNL8bDm68vFb6tcT9boADGgtn6JEUQzB3cSzNRnpa3wK1joikJSuyVzvbtDct2YJcLdXvuBoPaKrZ",
  "key11": "2aRrTqCGMKj7WNrBtuesxYVWeQ6fCdQjNSRBSGq9MEMWQAP2SZ4iwW65mD7Lvro5hKkKogtshSVGEoXtEiQveicE",
  "key12": "2eQ7iuygtCauX4D9dVgnGFhhLuk6gAXEBPv4Xs4s4TFn1oqYD26Gb87N7FehJEbsNELe5StipwYF3oYS8464mUt1",
  "key13": "4KhLGECi8pfCmJ1mFWoaE4cdtg2BAtgDAiPMUiA1QtUDicdGzZoCQ5ZUxKrhhvD2WXQqWVAGYv3cHs6gcbsGQLQ1",
  "key14": "92g8y4meow296KHCxm6N1qZwqwMoHdoiFZN1ZzDGtdUW5EhThfCzqesxXu5Guq3FV7JgCVfxwxFka9oxCqrmWfJ",
  "key15": "aQ1JutRaqZnbvGGBCq7hiFDTMYCXK5FK2oLJhG1UtXnknUyXMpqUC3apMtBByiy1WxasS8weoPvY2phfnkTFmef",
  "key16": "t1B1AFvckLUCAmfjwagpvqzsPMFbVmrVtFoxhx5iZrTo77R7fuY62s84nwSLFpEaY8zJ1ceB6krtYrbjwd3atS6",
  "key17": "59A8tV7mxvRc2gHUBBJ2u87wAv5USbgLepVz43fGASzNaNxEsFkdrfrdbQJrKNbJS1nosYEuFW78JtsWmFJEkc1s",
  "key18": "4vfcYUeZsZMGig8SkZPAr3qQXAuSKYKLLqyj3SzreLGkQJ5HkshQdMasrajD6qR4XrmBnpujepYGJxzp1QwVQ9Uy",
  "key19": "3iM8oVmFfXCQT3JZX1HZAMTm5YQJpCgpxCon5wxV4E5EyCABrJa3knbx5HhrcdGBJFcV6bPvQc6i8QbbftgThTw2",
  "key20": "4zhwG7dEEeF9zriYAsj3iGNhXaEPWjQooPUz5apNGspfqggmkiEGQiP9iBfgXfkWipNs5ZuHb3r8YZp5sL8AMgWS",
  "key21": "3v3D2xaMgESbYVTWHykczRkWjbsNsJgA5CJmn4ToVjX8wHws7Mi7PSHgMniUGWadPxusGRr3o3Y4Qu5TxBXFVoHd",
  "key22": "3aJ8TgPgJnqsakR321tQK3vHEzRbSBTfXydd8e69mXCgJ5scBC8h67WDdXc9UXecm3rPzrb3FwionkS7g9NHpBX2",
  "key23": "3PZM7g7ejY3Qsx9RpQRGoFLBN3zDRoSRPMf32XGitDJjureBHwRTVoQSZ7ce6pnMU9NURNKtbuz8r7ERaH43FC6Z",
  "key24": "2HfmtyQufveFj39FiH2SiQphNaiv5iN8md2sPR5YGNMEkhj4VDn28HbRjnM7LrS5QrsVQhw3Cqfwmbd5tgn8VZTQ",
  "key25": "35dxhsjvQZ8G5ra78A3b8qqrcMnA7FqNnSDBpDLwi5wZsD4Bvc9tFRDZUq5UUjyCF5rjBKSNcARfLM88agCPDpDf",
  "key26": "4hRzhxX6TWeoqmjN1e9dZZxRest5eA2aaRDBhMe2vXzBFnTcqa2iH62grk7ZbvVfmrwMHNpUjzEEBxssB6W464u",
  "key27": "2EJS9CxiYskJbh8Q9NkMkiSy7f2Xtu2QeyPf7oaFLRDYijjJT3ygB2exBEEd5SqzLz9zbSPVLpJQcFxuRCNxSmqh",
  "key28": "4gyydbpDD5D73tJwe4XBFJfJFAqArjiijNFcPS13wEqJZiX7S9VDmVDWTdTvps7r2ZUyzrc3eb3dcSsRdstdjuw9",
  "key29": "3ieuWFS1V5CYqnngk2cL67H3w2tYYFeL3RoqbmLF8Y9LFbpijqF7kx2hZK5iozXjmrvZ5tFDVho3egzbv28rSzHh",
  "key30": "4HmmQdEkY6dSVn76U8XSX3DgRogxrNhfJ8dtDKJCujMVAm572XGpJ2H35SygCcXkcBURdqYgKt79v4Eo8mVhrzz4",
  "key31": "4poM5sE5RErYSAQ613n1LdCAFKYAj7g58UGFAcxJvz4ubX6UwCENL1Qzkrp23bkcHkyixibZbgbFCW8vV7jfBZdC",
  "key32": "4zFqMXEx7dF3jKdpkTbbuJ5mYASo7xEoT16UP14dXKaAEPEELr7kc6RXmQUDZG19bqfKvUsv7sokk1c5GznkoDPv",
  "key33": "3vsbzyDkHHUEoKbNZ2JaDrP9txAFhF9oovb4LpC5EAMxR26nSjmcrQQrVFxkKQxAk5LVmb6GRwRmHrLYyUYUfCyy",
  "key34": "487CVo2wjx2ucs3HdtCcrt28XXRLLfYWa5d8Sh6FJj7oYyE6nLirzAwSeD1y4JpbVBuJR9MSHYAeyPmDEzh2AXwE",
  "key35": "2bAmNArvHqXMnseJ1ztFGYtQXhmYVWBxi8KNcTVALfCuY5cha3yLWRj4JPLQgVwuVT1JZChoHBDRqjw1wsuEnjFc",
  "key36": "5Up4UezKWmQkweY5UHFFpaTAJjbrWkr1hH7stdArXPJ6smHD233zzUSKBNGau7SvugDwdpPUY2LWQaRfYwrhwWVp",
  "key37": "3i3hUEPMTB33b8mAQDAH5a11AgqgzKo9BfjGwh1NGbGg7KsRHXfnbRVsFxb5o4CTyZwtuSuNDeCb9y5dVtMibB2A",
  "key38": "2WzEU6sZLmBnhQiyDQw4jXarcb9wBhYCgDKM57i4Jan3QeKtkiGZC7KLBJfeRPymYRnuGeSYtp32bR55twoKvUWd",
  "key39": "uGooLDVEnRNuAwUE37nEbn7DFVuFwrrKaL8yr5xLf7A74o2zL2C2Atu6SgA6vVCFjqtB1FdNvQKgK766HupHaeR",
  "key40": "NhgQBnni6HMvqTZ2XNiscgxFQstNc81Nfa5pPhAE2demBhihPV1pcDYJQNy7SKRGeGAFemNLGShoiwxSu9kDcWB",
  "key41": "4iBLVkx9fEwmBwfC5PgoaupZwkoGUkgJDDs2eCYzSHcg6S55n1qLj5yxuXidtezm2RvfUFvEk1qLwgxrv14z5cB3",
  "key42": "3WvjVicfiZ2nkFBxaRgLMtBjNLvdWRHywR9ZqFheg9v3yvE6xYCzm25Dg4chf4j8Wh4KT4zcheZMJz5PKZoKH2PB",
  "key43": "59VFdyAayrYKgvU3KoCnFfcs8JmoxsctyfN9MoJLALnNvRwop3pQz2FdBcZB78Zp2H32stYpFp7UZrFr4GSFNrxe",
  "key44": "64ZmaTGXKjagQZWfEwTvoKWXcZ72Sugs7dg8kWqoK8m6DRrrHBXk9J32uGy8g3ax5PnkQ6EMJ6YU1Nb8zBBaULbB",
  "key45": "4hVhDjx8UiUM1h6yvWixkDcE6hZvCXa877euBdo5Ddv4PsbPYWrkRXTe6Tg22pvqJQbD6u86SnsCGzPrj9gXuFy3",
  "key46": "5KAQfoADRBKsmye8R197JFzQ4aABb62vE7Lpek8ag6e6gdgDN65jorAmyMs7qUspKVFGgTift6Q8wqX8ZkFavmk6"
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
