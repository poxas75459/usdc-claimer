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
    "2qV2HaYvgWpnCpHFjjgMdrXyS5njDB9rnU1NECo5UJLdqVsk89bzf662HSDcEALZjcHBxGCCjo9PUGd9HjRLSt8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmeKsU69JqxDBg1mqefJLhYYA5T6FWZsZq4WogoZCyxnftszNK5nAZrUe6Awu5txCGPgyVdLmapggzLUZd5px9L",
  "key1": "iD4Anj8WAkw9bCvZRyqzHz38zrmpXa3ARd1yQGNnnagZb2zk9TMbN4EXHAdmE7t7SWYPSNq8KFExc2GLAbskszr",
  "key2": "2XgYrwv2rN4gmVbE9CMtzLdL81VvoLMXndyJzWqFn5ePDQEeSjNBAzSgiWRTvsTG5pQwfA2FZm4FX2AWHNEpuWUP",
  "key3": "4Tk1XFVkd47rhmDtenTcD7QVLXgoknBgRTkSXXKDaw2eezzPYGuoxiSodFAdkbtcRXF6RocUKPJsGpx1xTdGvsDr",
  "key4": "4z4QDnnQBXdjDV7CqRAnSxbCUzcBSEo9SUysueSzSkgSQrtEKEaesdCGZsrNaEgijL488Bg1mXuoUFAtWq916fxT",
  "key5": "21PRUoAc81rRqHHdZc472W1xJaAcsCf7GCrEdAgPSHiBKeaJZksmpcU4dEK2v3T6xZDzBu5TWLctpFL6xVhPN5KK",
  "key6": "4YXcrFLcRnRbpLzbAABHJ1KsmQyBGFmTmgD7T326ELXn3GUpjKDCZnkEk3KZZUpFkhVkvJWTJK2APBcfo1yBfXBF",
  "key7": "2ysK6E87sdz2ZwpHZfPPYwtzA2CTbTE6Lh4dzpepTD68ii4JSBrpzZmcsPQQhDz2goBsyKtWDFCvQ8MVmztjt1LB",
  "key8": "4shzp6LX6BeXBJeGyctbSH8iqZWTFCsTVpfA3FpsCCLJcbsTGJHd1h2e9AYFTajm5VJiz8Z95Ne4NEPQ8opbmPfq",
  "key9": "3nBG3ALve7U5o2MnRhVfcihGmdkG42ohVyhdkLaY5PbWd5qHQU8oxk69mNRPX85DPdmQTuiHuSFcyDasFc68CeWX",
  "key10": "3kmzuPACzF4N4iTyB4gbfFMBHDsm64n5rYtBRqa912AAGnnbEqLjQdMF3tEj8pB1CPmEf3R96rFU45QfEn66Yffv",
  "key11": "5a457oMdiQ8wQDq6iexXr2T7ZU3GVYV1cjT4hPjmiA4pzbxokRTQfqHEKNxHmbipp5aVoSMuajnhS7MhXy3J6BfL",
  "key12": "aTvX7vanTdQC48tEH3BU3Pp27qZ1NDGa9eEhg13R6Ay9YbnFv7fnXmd2dqzkxsZ7kpGH49qoPp4EMnuTt9JtTHx",
  "key13": "4bRcjsaRfX9qoLn5AWLJFG7hhZSPTnQBoCSGgudWJbKT4jF2CidsuQmgoJuNfiCnf8Cwj11yYqu8CcfZSzQjNe6c",
  "key14": "5ftvC2qa1hZpBmGTpKD84hxLYZDZe3PRTg5Lv7Cj9sjZjwUVThAEcM4zMh3PDuG6CJfmLGGRartu1AWNx5JWBhGn",
  "key15": "4MEoYoJ9vBkCX1Evbw9PkogxRVYeT4ZLikJJtHm2hC9arJCaNsXyd1zECSd4hWRmaJ9j5RAznfQ29gWU713gzCaZ",
  "key16": "5YnL35peo8h2kU68nB9esQkmjEHKPZTydThxcxGzuaskX7RUiJ7hixND5uUyPjnehDX2Q85LAeZK6iYqSgAvxEtj",
  "key17": "46gEecH717wGFA49276GqrFTrMPbfk2TEBFFUZ4zfVZorJoFNgQbBcHpAEVnsBuCxJB1N4GH5SBpC7KGvkTvYtba",
  "key18": "5Xp3U6Nfp6neqaLiWHvEj5SWmRk5KULFos7X7JMtKPK4MQMD9eiQAx7LrYLbf1mx7pRaCvaGaty4FMJmQU8hWQLr",
  "key19": "4R6S3wypBtsvScPqwWnAmpYRJT4j1xS9vN1RFsRBL3GMytxpQ8kDxWqwbPzEb7ez9VpkdJPvhvAvKiKg342CBZ2V",
  "key20": "53x7TCG2HuQihFoP3r3iseT9v7qQixG3jwjKJqDsVZ4MUMGNSmbJd7ggbEEXG2vs8eWKkvLaZ9XBiT2xoxqe8DJx",
  "key21": "4u9rdKphjL58f4hZLnQ4sYG9X5ypav8PhGfgnpvR1BDMGdmgU2DmnkbNjzvBJX5DgJMtAwifdBxwrC63GXE3EMLP",
  "key22": "wVfTKgzThE2pfyfFmXsYVUYuZ55QVEEfkWNpm9urZqmJsBCYJRbetHMHVrqZqxFc3Dsc4Ve3x3PZp6QPpZf6w7D",
  "key23": "4D9sh5L5s2oYqvpttkG9miv5dW9Qki5wn9ddJRdSdKK42hMvxqKP444T1vpcwNrN4C3vW5p4UX3V4ifjTGZghPoe",
  "key24": "52vW6wmB2zYHEM6LAXbPFpEpqp7x43qZdMNjVnPdkvuXz3WwfFXH5q2V82Fq6hmPzYxPj19gkDQQa5M1YWBim8vL",
  "key25": "4bDxKYnzYF4N6iHyJi6fqfLkPjqGYkN3BFetrKabrN2V8B9djZuMm2kDda2zijSYsWgzqkRQRGpWSgKvCj2nbZzQ",
  "key26": "4NMN3G5KtCbHCkH26viCLrGi5QsztoPhbPf85eMvUPDFcpjmfYG2RzDzyZ3aHWtS26bVExv6bFkUUPb6mCZPUZLe",
  "key27": "5iuyLyV2ScKGUxrcgoBv92262fR82aXWUAsyhhfJb3P6SjK8yjkkjjCpVhUdde5D9MvAPDzHar7potRm8GXtTmRF",
  "key28": "5VGh2UCwNyc253Fe9WXY4DiB1Vk1xV6u9Z8W61qswCXJgRyUKAXgEjGmPhvz8sbweES5ke5rS5td9ojaty4L2dB3",
  "key29": "5xVe7Fehj2iPU2vDuAYLq845G9fSBGDfCgC5o1U2rBewAf6Sn6q4SwaTWSd6gra9XHckeJZZggHxbfvjFF4NHj1a"
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
