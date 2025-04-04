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
    "5mN6HejqueyB7oMAgGhw2AyheWp6YrX81Y7sufqVrHvZ7jfybh5G79aNHxUHsnyPS7pSRbDERbuCt3tySaAkPacj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P6YkDMHm1uqN2T7jvJLJf6JjLoYK3UTquXSxRApRuUs9GhSBwnQFuxM65UpWpLgQmhN2m4bjf1bNvLMgicbqFGh",
  "key1": "3V4q7hQDfnVuuVX6kbefFNezJ3B8Nh5rB8txB64nGeHUEpi5KMkYUYLBEsxkmqeE2dKzexRMBsxFKuJ2DcQbhbxi",
  "key2": "2tdUPM5xLKw5v4Wfx3P57DgpUA2vnJhK3qLzYGzCkXeXbw8nMxkJDEGoMf8zWrxKCqrQjphrsVfw7JVC7pixfZ9D",
  "key3": "4dgYptnQqNfm84NxgLP9CRzweHPpUvQZbBM59qJMAJbKBEmd7yQm8ATWrAFKPYsgaJH9C87ca9f1cWbNWcY7mTZQ",
  "key4": "4BvUNKHZ37j2ovrU3HyMFcDVw1oKtPjoPiA2BzBU1a1ichd6Zt2EVbuyEsHPurPRHtnQ4BH6qn8xZy7Tq81xAoWX",
  "key5": "4FyD5FPoWNqpGtJ2uQHL3EeTyQ8p2UcMJXE7JFXQzCbWjXgaCQXEKwTtqa2MY57mD3N46VsDvqCSqTrNmmcNYokG",
  "key6": "3gwHRSjLxEbW7WMfp1r8Na7MDQHtjYnjzd4dumjH471WjGCE6jHPQxe7Tchbvy7Fwmg8CrNXFLBBZw8gFGDYHpXX",
  "key7": "GTTqmEbtBwLiYXWEvPE9qYmTitKYgtjWoHwTdRCczZeQAfEk6MMj1xMQbJcb85zDczFtEbH9LaXcQ8PYSZZqzhu",
  "key8": "A4HSjdPbhNB9hNcXSqys6DBVnmFfMbGGaHxkV9s1Evq72drjAtjwfT1ghd1Rs5FEyd8VKWqnnfTJSyScktAcppL",
  "key9": "3TPoEH4yXqirgRu2Vo35rwkZ4rKsRt6rdrxyGQHcUwo8jRKPy5haxtdqWrrudaTFGPjiFJXDpGufxqWwqwiFnLXU",
  "key10": "5soNv8Pz2ZPBBN8KNb8gQiBZ1P692fkNiJJjaa9TPM3yf6jimXgvRNqM4ChHpy1nbzrVkuaY1Tk6jwurHDvg7kPq",
  "key11": "CtKw8ZPUmwZer3dsRgZCUwqxvDQYzex28bsw7rScvJZ8qTMTCF3aH8tCzGTKEjMFxMf5ykPfWhk68QJjapJh3iU",
  "key12": "5c7aYfWqsXCMsi5ENsJzwYmbnC77xjhpoMDZyurTa2MFs7ymuecg2fSLpLsJPyRUpGC4XXCmzptGFgCbYdt1Lyri",
  "key13": "5fRkL19hetWMNYJoYcoN9S7G6VWwF9cgBo7up1kfv4vG9uiVr2oj312q5QJqaw5odoKUR9kdVK9tyNGc8QzMJGdu",
  "key14": "2r9BEQLvfPazWaFFoe7frwDxefUjgu95x4iFgmjCh1EZp4J4jV41m9K43de9h7iFVCR2jGzwH8vPJexADgecWJEy",
  "key15": "CX78ThAFCMdwBxBhdsazfYayjUr11KRbBd3ssUnMppSKyFUZXgtAiCsZuUhaPAgSN9dM2LG3tPjtDmBksvJUusi",
  "key16": "5JL5SGdu2rs7KFkBedxu2Hm1RhSTqjN6VVFKieQnEw7cqVrk448pgDMF1rr7Xr72QqdaEdyhTtDhGscPNUAWKdah",
  "key17": "1ZCgswEWhe9LSEkxhXxcyRzv4n3pgotqMJ9XSPQfDVPoXYTPP3Cyy8DuoD1STdsa4DqLXxe2rATPDMzFjfycs7V",
  "key18": "3ezZHEmmvB18Fw8eQVrnQ3d6G4BdYqAyvFKQcHUvH2cVfFcX9bW7grkhxBYUrnnpvuRZj8sqf1bRWTBwUUstC84z",
  "key19": "3aoAVRnWv5xY92w6WFc49ZAxNjZqzb7d68zVtQDRWraEiDE5v7aPuHMxLKnXdmPSxDJ9yCuCqiLEMtJV2ZY1nd73",
  "key20": "4ambpYFyDvQREiBr7MXT4kTAUSY21TijGh7j7wFe7FxMEeSVdmL9AcQ59k1ZkiQDmBAbJfCQoriNHYgAMWDm3iBs",
  "key21": "2uVcSGEtSggTM3ebshUKPQSFe37kGMG1eDvzTgziDAvcUJRWL7RrpTJbYx8ecTVJgHhz1rGWzE5uzvJGRsSHMrQj",
  "key22": "2hD2zXkM6JYgKxSxsxHiu3FS344WvGWHEYED9eWZ2YtsmGm7X53DVPiy36v2EQEQN6aRpizTULGExH6YSERTX2kS",
  "key23": "CSXgNUv2LpYpJbU2zLFvGkB6skaheroQRT7xdkH3Hf7KBA7ZF1doxM8A95dmSxnXxr2iERmNC5TJvhe7dY5Cx7P",
  "key24": "3Qy7kRN5yi6zS9VpTLPq8TcgZThY1hiQa6DwLhiyEqCYmKmHArQHeqfjUKRrZKi7vsWWqrEBmvZRYLqTB5sNrsw5",
  "key25": "2kKFZ1gdfZ7jQVUhYSMeDTwAu3hA6A8rBGvQX5PRN3KdUanhWcAdbzJFrFaUnZDdvdB9EkTpvcEajHXFbNjf46v4",
  "key26": "66Yqr2QFuX6ihSAr7nGmKdAYTtvebhZ2fg1U6ewM6eGF5DKS2eWCMnKJMxC4ht56Y8Ev4GtGMCJ9MeSYzV4sutxN",
  "key27": "2oWWyLq1qjcEZ652Jz3y6SujSuFX56B3cQS6ZV45TKnXWMn7VnjodaQakLKCEwBRjeyPomZDcRbWBQ3cGiRY6jYS",
  "key28": "3vDR13JfkAEWmkRMiME3NdFuTxUvcBZEqm3q2EWnBRZnNr2Ruz2JR5vTWQ2bcpNTu2SgaMkvRAVGZ9L8nMTNppVz",
  "key29": "MNWRXhQvmvnqvzkZtV8VjQjHvW61JufMP3zeeTeFXVbEbshp4kuzevjdgj71q3UX8J68sfjqYEEooNk3CCLLbdb",
  "key30": "2jPmTGWMWVUXB9C16hBHh3wo86PFPWsw12gGwyKDmabJkxqDjqXkmcMuFZgeecPQMeKjzmAiaQwCouL6dsr3pufh",
  "key31": "4JEbnCf1Z4Fbxbig9dRVfVCKSdxqCK3KkkWA2fhrECfAjVMWrutMfeTrFCAymhmkpQqH9BWweCZ43RcAwF8QQCJD",
  "key32": "4Ltdp3xGVYnN99PD9nKshsD2oqeFHZ16qJNstuqzmKLYEuhbe2E95VswFU7HDEahX6pJqCMKUzzwLerg5ZUV6snf",
  "key33": "2TmJpDEeFStvaHJpRpbSpDGUkxejcmgUdgs91899xE9Q7QcLnu4YDKfzisFUXJA6ZwkBDkLMbytftZxAbsfQXXmm",
  "key34": "3APV2ajT8HTtkbxteovSQgjn7F4MAjQKpAMe8Pc7dzVdwuBzHdQceQ2zxbPH5nXcYWCnskgqu9GMsv19DPsiuSun",
  "key35": "2pbt87TE6dVhQdjxCpH6rtNRjjHRLmRVbRVcfo8v6U7VnqSbjrqyLwM9SAvRbqrkuR7W1rvrHeUNEwjPEUboxs1a",
  "key36": "4wrcFEXf5MfDvhYPEvkeSBAkxWzxeQpmmp6cZGK76FpgyAkMrzvez5yzM5ECDiT6tigP1gx4p1AJWUrHv8ysXZiV",
  "key37": "3h9JttoYhCB6ToigPy2DuzoCcDCWhJe9DBzBPbXmDiiAaYGNALbKzc5iRGrHdECq4Bhb57AGQwzMU3b2WVPxR5Ei",
  "key38": "4j19DcgJH12PBrtmbMNQWcYwePjVQ5t8HxZYEmNUo7KYdyboVZN9XVN2QeXkrANz7Fcs4iM9yoGMDdTuRtfrGnPn",
  "key39": "y8zgDBYgRh8RBRKn45D5b7hWwyyBS8jqbjUVmjmpLbaFETJY1cJ9m47w1jmCS1jrUJ2RoirmVSC6Y3Bh53xryai",
  "key40": "48si6bv7nHxWWdMZ69QwfZXpwtcodUtQHksYZqDRHHHNtv49fb4ahgMMsD1XRG3VpiJtDP6mJizmHLUoKmZA47ww",
  "key41": "4NLrGhEQ3GHXr5w3sGkqr6itMvuvJRzt8xtvPQK9umfkxKYZieKoWkj8WsGhmStJcpJWXdnAZDnVo6fzrL9sj8ky"
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
