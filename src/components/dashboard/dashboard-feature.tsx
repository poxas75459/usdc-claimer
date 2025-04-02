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
    "2jeLHNK3HfrpefVpZbjFifuqahxDk94X46T7p7dfvY6ZFE2b61V2pJCQaD9wLCQfuTSF7wcRn22tzyJo4K8zwY7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52EnoreNBZRZ6eERmAhxjumz8V7i87Kr1VqsPVCAGHUFvddakKdn3yL5yJHqPDDPjkrGDeLKq5X4vGgDDxf3Ry6h",
  "key1": "5Q8aLE3xiAyLZ7r2nmjDpnMsxP1C8h9W11UxZ8hbbpDgXiMoKUGGPzHsdrZvxZTfpTMjTu7YqMS42puD28paU6Pj",
  "key2": "46SHbficGXwt6WkUA9nJ4ECGzHRzHPnfe14Koaz6mUJWUfknRVeohD35Siz6tEmBXDFd5v9gsb63mu4jxuzQ9qaD",
  "key3": "fDYjX9JNpZEXKrkKSmvNkWkxKDeiNJsUHCowpVE1roFVG4G8ccBnAoJSGPv6YEPPh3iEx8FVqEe6XABDRprjYEA",
  "key4": "5qfiT5pMHQcxbg12TfhbD9eGXzwKyhfaFUPAVxZNfZHxkcjv6mBq8Vvr2mYYqJcjvy65aM9DLLTBeqndGzFy1vRq",
  "key5": "5n9xEyk4nycUsVw4isNKx9yf12ejm3YW6YFQauYobLTEcedq3AFtcKbFXCg6TnvRVZ7ZCbBbnYaWevrUo3h6741h",
  "key6": "25mdpFBVRJMWAC8FnNtXfYLh89KWMjEvemN3Ds8FmUDZgSWGuWo81cPgk689ZTRau5wwADwrbVG7fy9GrHheVGKq",
  "key7": "4zMy7xEYtwgq74ESXXKg5yPDu4y23X2tEBw4LHthXVUJBsTrMJwXvitGGknscxiy76SeUVrb2D6rWE2BLqa9sYsa",
  "key8": "4oJEhMf3LwWunE36G4iFmJUjXTjtmVwDpUStTFC8uQPZAY2ewj7odKt5MKpe1bCUzSBkojHTmvEqGpgVXwQnC4LF",
  "key9": "2Gf1mtuHEo7jAhRt9NJekYHfBE7fom5YR4Tyt74h7dMGFD3QV5tHfvxdHDkBDv7PSygfDuBCCp4V66wLUZiQ8t1t",
  "key10": "5XpU6eNxE4GcVDP6KJV2NecPhakCAyF3bcot2nAdeAbufKzybxgTjuNdMjsbXZhSxQEYL4q6hmCCwF5d3Sc4JDuu",
  "key11": "2wZsovPJWWCGo7TB9SZ924qk1Mu6aTZPDnRp6Br8PsuZPCLPjnHZdAhc1Abn9g2eBAbqEaY5yY3idystqx6Q76He",
  "key12": "5R2Mh2pgXmYPhocPaW8WeW8Yhi22xC95KYhAitzBEzQR53XgZ2mGTvRRgk7nWTa9Jfu6UYkBkxRDJeVNfwe9KQdk",
  "key13": "FrJz4mYbcexYU6kSPYkJJ6Zv1u1f68LtzTF1gC6GdsrYnisgKEUoXcxcyX8w3m8wiFaszweHtPQavcA9UVufwVj",
  "key14": "Di17aK6mqF1twVJxFhcGd6tYkWuvhLZ2a37kLwpsszxZ6ZMrkHgK1QijpsKsJeZZ1Av8yhuW42nzHkdY7SUM82G",
  "key15": "31HPvT7sBEpur3SUK5Yt6TRpLNDG95uHbWHeC1ab5Af89SsxwVt233EbxPvK5WrSvn41GE5yLjUaxoWz5fcgpBkY",
  "key16": "aBDvpW9dZmACBpei1wP447wvx8aYqZ97KCdGKseZuv4ZXhj2GBVmDXLZchQr4GhH1wAznoNzVPRoh9c89htcdAU",
  "key17": "3JaoXV7SW7zk3g3xcfh8jptaQV6mg4U7SMbxqfmKpm3FYAbvBghDptKySXpgdqBprtQS6z4yGFtgYCAF76Qrietq",
  "key18": "4yDPqTub7FUGRFKW4Hu6jwMwU5a5Dtr1FVrFkCpfZYM7kxFjBEwdHSW5oX7Bq9N3N1FqKKdYBYK5GCTnukLpuYHj",
  "key19": "53pHU9CJ5mLESzuzk16SfE94ckY4AcQnobWFf7fTDUTvXZpEewF4aMFiv2TZfJhoY4dqfdJp9bMnzjuz6FghgDup",
  "key20": "3KfTDtykLkKp7QSN3HFctVYAXgZytdw2fp9s6hLgkxid4Tv1yWCxJUiebbmr5QMixLKZtG3pZTXJNUBSifGpr1ug",
  "key21": "27X3rEKEDmmzNRnEqDXU3f9HasjCMFTtprg9h3kcjXyFbQ9ULdTMJ1E5adoXBgeBm1bV4kYs2q3Cx9XvHMVmshSk",
  "key22": "3uNP5if6fHk4f8f8G9SLBarJ8bXTBYkH1D6NrdTnnfk1qkEk5H8ZCEKMP5tvSrhwpH4Zmpgbr9mF3fKcDbkAj864",
  "key23": "5do1em7jq4RdbpCxyWywvnBujz4y3MRGNbmPGPg1o3mhG7SjMoeYxTRXeDSJojRFz3DZHXLWMZvWe4RQhP6GuA9r",
  "key24": "53HgVhWH6h9D7SYUqExnJzBCBn6sQ5gnEs5ZA6Avyv8sAAV8QyCZeByMSooW6e3142uAYrDUydLhA2gmhsY91aQQ",
  "key25": "No2YrXVCDNosBx4R5X7EKoraohU8LRprrMj1BPtG4aY7ySgWQkWoRM5weewN8KMaTqndVoALbVKioj7PpHedoCK",
  "key26": "3fvqceqgpAxVpynWm1pX4ZPALC85p8TyFKwJWUDUiWNheP2G7VicebdR3zcY648nMCmhcfReFFmQmJs4k9JrSRYx",
  "key27": "o8n4c1bUcQt5aVAUwYS3kXDTBdn4eKQ78JttZsgrYd2S345F6TGyxJ7GGHNRN6d9xETzhV3gQNLn8eHWeTvMWk4",
  "key28": "3aiefGfn7K7joki4o4Hf82YhfzDczVxQBioqwE9PMwX6Kgz94nna6pY3gMg9FgJ3guZfUkPDSnTTGG3zPTDxevtH",
  "key29": "4ahcKxWwffn5m6hKLG6gq2Mg7knQXZMhABry7m8e27dvQBfeYXLctZPFyxNZcBezRTV6GLbA8WiYfJeebjnzwMJA",
  "key30": "5PyKFWiN4FDSbeZDZZiSm5R2XUDR7chbqtFFaCTKmbkgFDfMxcpKBH2awoFXonhpvGjdXkHXsjs1iiNMTVJM8qUQ",
  "key31": "4MyQqEybSPmFVKtfbfVsdVqLbTz8Uf21aNkypXTTBbx8PfoiB9LC1BYJfoUWwReSimw7g4hxDjqXFVmDwWfypXs8",
  "key32": "28uE6vPRrovbASeNKTXjtn3jNE2doZeB7fxZ1muK4jdFJUNb9ATqGXRBb8WJFfMAPH7CuojLhVasUgzqFCQaxgvF",
  "key33": "53mkXah4KZ9nEGjztKHUEGk9nqnfpdaXAnyDTvFuekXgLy4W6Qr55W9W5ibNbdcVNPaCtXB81uZfmWpdoq4wrHLy",
  "key34": "fWNLR6vVcV1ACMvkgDsESut21pLCyzJKF2H6hbdWdRgdGLvgF3BwPEEYigSdVjawurBiBxuTDxker4AE7sTm4PF",
  "key35": "48dfL7SxiZT4XQLcgUEsYdpMxmRro24aRwpfPvoJ7Kmhjvrbj3aCWC3GTqnwsP5e1C8wMDwbDEP2Vd9J7bVnNLxH",
  "key36": "35HkWJ5AJRs44oBfxJx66Q3Fq9br39H745cMyprCiitq72xcM6Xw1vNFVBjpnqaGAwqDcDXRxioFMbh3dcyuLcXw",
  "key37": "4oh2fjDj3bU5Dqn1RThpXAYAWPP9G6gobPPBMcScvQK6Sg57fRc2F9G4urijdYjGMedQq3iiV5RJDNT6cgcUsb9Y",
  "key38": "3AfyMyuXTnuuxCmLbKSuSY5GHtyepfiKBpKQDhjHNiKNvvcbNcrGvHpbscruKTDBuffqCGBTFv7gh8wJZ41YqUut",
  "key39": "2NQVcBDwAxtNmoNh4XxqvFk2akgEQvNJrS6L6U2Sb4Vm6d4Tuve1AGvQX4LbszXARx13aFJoXiozw5F6ZYgvJbBf",
  "key40": "2f9L3FwB2S4jfNDtmURq5bqHJBCQJ1Kjz6kPkqhtA3AyvAsrowFUaVUbRmFtBTUBgqvwazQUQRcFmfXRZagvwKXK",
  "key41": "5enrK5nLf5MMEtLEA5jaaXsdvHd3CfKWNaBvY8LWK6Ljr82EhYEZdxLHp93xZMvSGNUi9ZFd38ev5QjSycSrWRDC",
  "key42": "3MfVT2RbL1XGVZ9s4oU5W6gW378wkzWz5HfSUg7uRhaTTumN8qes99j56CNxTrC94fTNmfqDAT28jir4M81Gk4yD",
  "key43": "3wcDVVbtacnUZn9DyYEkqMVgkrXLgxDyLyjSDht1MynGKSb7yqgnkjsqwN7mjEACJEPn47h4A2dWWxoKpoxpbewi",
  "key44": "TbGK7ApgMA4z9DEiWmP9HFuvDbiykmj976QMEn4EJrotc7A1ToCCTieki2zNKcHoF1Rsqy8xziiHxtzV4bx42fo",
  "key45": "49R2175JeoHaPrLQ6FFDenbiPkmeB8GTPDvpGiPTs2ADxPNEL8LXyecoGUyyVtRT2Pahr3fzL7LuysnoNPmxfDzR",
  "key46": "EqCZrGPgSxTBuaXR3TVCBxSb69Uvhrxe2oFyM62t913mzE6ELPKMF3AtMrNK4LEkKrLiU5N5amHSyYUSR9BXgVW",
  "key47": "4nTBbTSQA3JobPJorkhRGW5v8hYJVmeMwusiJM1f3cTPDwS5LoFoyyy9poNVzweDCtrH6f2sABoB9fd4KqDYbdLp"
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
