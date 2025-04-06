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
    "22Q28uZMDK2g7z7mcNjL7KYKonDuyDW5c6ASXoBpwwrUc8ftcBToo4racqiXBdPEm54ciw5FjFEstBCp1Bbv5iBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9EQvZ31ejsQvgdCXmhF5NGGzhEgaS5WVtweEvrtBw4cxWg5Tac11Gwm682rYTf7fLW6qYpYLTdsuaJUNAYdjNbQ",
  "key1": "n1wnsUfWZqwwLXJNLk93RG7LPanNgRz65V5GkiAxyxScxicJ5aLrH5FYCSTFXHBpZHpQJXc7tB1JRRLumj46cZy",
  "key2": "4Lyp1B1PsDTw9qSHzK99QPRG6iSoaBAkjaZ9PEadCgCaZbhaYvxuCYkUjSpQEoganffrApqiCyohXqVrVLFeiCQg",
  "key3": "2oYVteneYNvcjgLPy1dymEzhMphouVggSbFyHGNZpH3XtWEy1JYTcYiDw8QYxaor1NaBR4fBqEeMqLaZNx7Rypo4",
  "key4": "47L9wersbZL3FKpfipKZgs721pgjveYsso5MrnSz7XdcjBSPBU7VDAVTkBfEqFLNw3NwktbXK39y24NYE4cVos14",
  "key5": "42F4iEZdVnDaV4y5D4CJsQELUzcfpE8K8PqHtNLrB7kk6AVGTJcUy66JrA1xKeoh79UvQbL4FrFydxRDHRDSoYnA",
  "key6": "4UEdUx7PH6Dw2XSi5EVqEfn1sDVwo1YD2o7TQW38UMLD64mkKPuaFajVZymmvgzgwaeyo33Dn5cxQptXdrb1hbzJ",
  "key7": "5PXnyMireEJXW63ZnqwB4YwyQGMtBTEtNRTvLZUxjS43xMKxdJCxZgaEndEVewJ8oo2y8KBqYYAmhfctW2mKas7Q",
  "key8": "4QiD7T4DGaYhnUgtXcRLhRePWjYzUjGqeFw6LXEJN8qRREt8d93wmxAnLchzXZBLgWAhBBQa86rXALKHAKV4U9Hg",
  "key9": "4t7m5C7Lcdq8Y8KQP4yF374QuTnVvrSdmDskAiWmW8A5N2ZS6oLsts7xnKDGWLLBUCDW44gb8ybEL8kXMgHjcK8R",
  "key10": "5VZqKZ3HKJxL2mvnA9MRBsGRiK4ZJkq8Sh7hxT7q2gPJiFMiQPwRHm6RqBKdZ68PkxpG2AJa94HxnFL6d6hLSfdu",
  "key11": "3s44ZuCfWUoR5u6XxWxiq8dkQZBySHzzxPBUZXE1fagWpSphSVi8reAH9UryKZLnkVrvXLuF3AMT3sBV8fGV9Kkg",
  "key12": "41VJafpE6aKCR7AvYm7FJAuSxfnLpLHqj6u8n748cih6hT16cVch4gKxnUJb9nKuELbUfBAkfYWkmMmdbjNWxxAB",
  "key13": "vFJoHoUWWtQoxXco2q9jvBQLezdyihAJsgdht4Tv6rCFifT6YmZmQKc1zcw3qXYxfEaVHebD8HnUuX7Y4LPx1nB",
  "key14": "2uG5PugSUiZbN77MHanRqhigwYwReQqaFBJmrtx2SkBGZBZyhFemPrNeTF9btp8xtbEwqTLhJte5ErZqmXtM6J76",
  "key15": "5wsXnFAmCd1rSUyJo77JqPNQ941YGvuEk4SHo1Bo8jXkPgoszoY8EPs887rMywVdx5Va7bSj7FZxwykkg6ZWPWsN",
  "key16": "4HQah8r4TTfE2UmVfKpczkEi5Wu8NmM9m6CECoLDoBxP3ntvkGXWoMFaTfaYL7bQFyuySuEfsYSu6ETkEydmFPEo",
  "key17": "3AWtmQUbayMindEyHeq4wTZrbwSfZyp83x5fw6nQhfHtDYobEiJCsCgRZFReDys3r2mjBh8t6hZo73yRn6mm1arF",
  "key18": "2p7qsU4eqz8p57mhgbthvM7cLyYZPYtC9Ewv8TQNpcC35C4tS7B8NjX6VionTXq88bq8oVaV2VEfYQaFKGiTmykg",
  "key19": "4PdfZ21Pt8fSrkNHxVDbwyAsBa7w1P3dQEGsaqN1ck1hDtFd3ofZM9RJWAkKMFwqe8tegmqurx11uCN5aQAXF2ab",
  "key20": "35jtWQeT6DHEzHwMtDhm9jpUEj8tM1GynAqB3mkfBQLodLSHZnEf9G7QyvWuiBzTp11ksHo278T2AL1cCWg5oybU",
  "key21": "614qmuqbfY1kbeckgFLB1t3U8u9jdXnxSboL2PA35c6utpt7CDQeuQA9y7kQZrepKiPzJioQiRUmWyfwcjawxiFv",
  "key22": "2wrCoovo7S9SyM2ACYFqnS9tD921NpkfjBqkzHvVTLANf2xqj4PziJR3VwxhZP1tQJKaAbPRNCsJavUXLrRFKxcP",
  "key23": "5eDRNxTzf1MuHS51mi6hFzR9Q29b1x5t6gY7pF9Aiu7gvCAtjtUZAusPRGNyRJ78ea3XePwRWT5rP6mYCKTRQE7A",
  "key24": "4T2PWHeqpsLM82Zv6bHGLPW8otozzp5ZP1hTin3kGa8QgfZowTjPDNMoTSoQnJhA3Vkyu6R4fGUsSS65isXqFFrX",
  "key25": "4GYyST61tmZPKkJsZZAM9yzTNxxyNWVrm76HyW5yg9m4m4BdGQVuPJnpFvVkB6PrUteyaCZbmdCBBzky7V78Utq5",
  "key26": "iWV1rhWziUypDob8vx4FiwSCg9UDLwZmM47HZeWpMbfWgmeP832124ABM1MjqUgaJsnRhNPk2Cc15EihSfJ5gap",
  "key27": "45WPLQV7xofwH9Ve8GQfGj4f2dzLqSx42pzm28zs8ASDysHVkjYdPRBUwEvcxgBB2HqrpUVUDpuDNKd5nAkDpw2T",
  "key28": "gZ8sSgqCNanPtXnRcUUhJL4ECnNgY2WEcqM4Ekhu1t8M78oHzsPS83SoWc9M1CJYajKYJMPNs8Tmgm1jLgQ2JSR",
  "key29": "sW7YfHoNN8xRFWpJADHrFYb5KvJLs2h1Rk224WrHNhtMnKq5FBNBGnKLMT5AQwkoCpWwdbGqBt3VsczoCZxWEx9",
  "key30": "5vWSvvd2ra7qxobFMBHmh4kE11CYhtEbk4gCnk6oQoRSH625rzNuEidMa4CMquen385hnbrCcPAMmpD4b13iuvng",
  "key31": "Uke72PkgxeVbz4mA8cr1EeMnwTnGC2PWbfkigi5tUjezSXmmsGXpwwwdvcN4ZYAcpSxnPkC6mfwNreLLuZocegt",
  "key32": "VjkKp7xZVU28VsyPjoiDs3RLkRiYU5QnFgmMnkgW6t1C6XcMbynEjGc67jyYv6ZBesAiQQ5J88bkHWmS5zkZHWc",
  "key33": "ioRefH9PB2gzbwq1K5VxTZK9Ky81jZ8PpQD7mCHdZfe8LVLKsDGDoTnDgWfZvAiYhbDVYW4ABVUEb2oTN73UWdq",
  "key34": "5DUDQ5zwU8embAyd65918a7nfUuEET1cRmbLCa2cbEjFgnRCLLtQdLN9o5j5L7ycXQGeSQ8AyGF3ZoKLoM6rxzEk",
  "key35": "2Zzcfv8xK6fY3UwEJWVrnNFD5oz3ueGw2tnsrcH4iQWWY3znDeoxjkcVCB8UvTXDqgARMUodBF9rrSuh3eEQQs5J",
  "key36": "2NMgxh3My13adMxjVvWJpDGo59qh3EqKGhqkFTmJehjS4A65Rq8fHd2mSYConfHJwaXkQcGcfJZJkRDjMZX2SGq6",
  "key37": "5a6nNnGodMrLAtGKxa4wpk4MnNzpqbparH1iLUCcNPjVgRRvvGvphqs9foXFhYGdk8i8hds7vUVgVi6qZA8QefRr",
  "key38": "65wtzzW3j8VoF7ppki6CAcYBbMknhskUjaUg9R7uwux4TWgFJCNZeLCyxfw3ykqWDEG243oQ9rSbyLxpQoCvAKgA",
  "key39": "3Ms8aa1rKSvnHkqQr3BR5yTmVDnu26AWkQHw4BxQtdmL1gFehAfZvPRrmrLAJMxksWLuiSf9TKQp561XMzRb4efb",
  "key40": "386p2ggshPovFVAsqGyAuwAXsUfsrSmajjbs4forPsrTNcHJsUmX8fFZ32vPyb2dmj39ZNTxwh19HQLZA7ghxCrM",
  "key41": "3MJrFAx1qJA8ov4BpcHjCMGTNjfT8ZN1SWBEVFxAsuHHmmmyVwmWxd1e4eCGE7GXwgkRTF532pWxAunfGmqX5qcZ",
  "key42": "2Yfi6tJYGKVsBAwre7UPkUg5xz6cynTaHom7KEKvpDeMzYfwb9WR5gSPsnviGkWZGN9bCd4pGDDQxagsnef9wSp4",
  "key43": "3Usxuqmsfj2q1jLXckCusmG9YtneCgQSSAdxhVwnuvwe1VBYSsRnsfLyWcX7d1bDqvLzqHC1ASkiJseGuTK8ZNBc",
  "key44": "5byTEHGjekWqShyc5YfEb8emkEpNk8ob2U5mH1bmHpB2vyGeE65E9gWBXEsGFxzsFde6ycc8qfzQhqztWSuxoKJX",
  "key45": "4Bn69ZeEH4SJHJNLNiAMKsdhqYDkzuTBRDLKgWVGhxrrgavVfSTgHmgmWQLckoGAAcy4634NC3voNkNJqs1q3FYs",
  "key46": "3eyxGg5wZ6ynZb8e77JKJAuxppHsw7JurNeaEntYQGbkXCSkZW4xhBW6v1AjLQgeZkzaQ38eE2StV4TgEYtmtADn",
  "key47": "gQxnbMvcN9EEarqN1e6UNcqHYZ7KafrLTxh7t4fNNBh4d7xJz9bpkiGt76bc6hAcH8uakFTFMGGP7JdwcjHmewV",
  "key48": "31TXuJ7mDTpaLfTpkAFsj3MADKTokQNFSFavmHVHBfu9TnM6unBYPxYGC2CXY7DSGM3zGTWyUqFx9sNPsQmmmtXD"
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
