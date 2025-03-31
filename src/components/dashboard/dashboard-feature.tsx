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
    "XPfbMyhgWJJEUw7g1QPjQfNtgmo83MtQ4nfFbzVrtpkjbMVzNZiNMKSR1bBmAwxtnc4utJKenfefNjMMgkGuFZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgzKfmZgctY2gLdSMiZxFhXwkJtGJfXLK2HmmNGUToFXrTLUNNtcskEvc9LNnoAjhoXRCQz2t5t1qbAgFSGkpxA",
  "key1": "5idHjAmD5tkJ6yasjqqSzxsd9wGXSfBZKN9DtNpsEFsgxhU9BTqEyvyTMJcCXmZoYaYsYzFjSvwN9sESHrpUu7nW",
  "key2": "vEEuZh4xBWvQciMpJHL4EMiPPv5pppmqJxFpmWqrShqJ6bWmgtvdeN8RfLmMigHjzUiCQtmGdDFt7aivkZdmnLV",
  "key3": "2ronF5ZxLUs3ijSZQGZMucETHjfdyEXNJna3zZk6isQ9FkPuVA5EftxkJDqkh2xEwP6Tau7vkhteXsLj8EzAPrG2",
  "key4": "oE5utGXkBiAYejYfvgavUEYyYifuD8dHzqvQDB99mf1HZHarsaGJeizE6HmxqhVuxzfEmNnCVkxucNnkuVvBWAx",
  "key5": "3SoCVxPuj6cF5YVSf8Nt3nym5fVFtbbbWfVi8aEsEav1v8DZGrFZJUyf25K6NRcjcKEMf9J44RWn6xHCMABu5DPY",
  "key6": "4pZujwuhpMmsbrLQukJbKtJY5xj8Dx6aiFmPABcy941bA3Tq5ihNKFzLMC6JA6PckbMbsXPzr8TbiMGd95mBwRZN",
  "key7": "4K2oBdyp12DYqeGT1WzY5kPU1MbnSqHpVRfmCbyYUSmX47ccPQXczyr6886oGLXCEjUwzB3zKz9WQ4oFkTNcvNsS",
  "key8": "3xKZNtv13FCMpW94R2zrhdUq2SBsyCJUfFA1X7useYE9wL7i2TaaUjVj6Vq3tk2LMuCya3Crb3EFkdybRvRB9QE3",
  "key9": "5AhGLxpbU39EFAApo8xXRRGYUz2tbc96QTgV8cNaQQrk9sCeP5Wm4gHWsRBVZgtnnsMBC54niXajCdpnXQCsJ6Jk",
  "key10": "5ap3aDXp9nPW3f9w9VtB9LvypQKehxbL3Z85tM4UYtSzkCB3PJugfoejrnGtuf1JdVTwPFAcV47eGK4ArD8gVH1m",
  "key11": "2jkyyHRX6mTw75zERgujiF8m7fyEKKreaCz9Wm57epzuHdGrGghRRTHTfBPnB6x8ymbbK44BjqVWbVnsdPUcgj8U",
  "key12": "2MeJ3NVxKgzFBkKxuUfxnD4LUp4MbPFtvTCbVcmrHLPJH61ETsUSp61vNZRvDFzocMmrdPumWcCnx2qNxPG8h6P6",
  "key13": "36ArAoMg5CSvb3hXMwmRk9QQfrYZetzamWQaTNXP4BqC4Ag2UYca5Taqcxrt6XjiUirtNAWXug6grxQXHU13sRFs",
  "key14": "Xu1AQofmwkp3pahGKCoa4rgQgXupKvFKQd1UAKY8H6Ujb5hJgoWoAxGVT51uSMwScbDEeDJZ4iFoSCvstn9tQC4",
  "key15": "64JQfiByxsF8d43BdPur6CrQ79YKtWJjZLt1LXMGNxZtGixafHDVuvgGtfvF4MVEx9f97Fm58NVXZCbXgS3ewVAg",
  "key16": "4YHDNxenP6Sih9GU8WEQeRdGXcYLaB7CVGeGY6Trs1497SsG2Yha74r9M1aT5F9TJ9FZopb5PgbD1ZHKej2H2zD6",
  "key17": "2Q4pjRhGBDWmomHHRUYWSQFnz65eBM2CmQcmDay6NKE7TQQkeYwNHFxiRMbpAQViC7JemnuYg4w6AtpU2faAsudK",
  "key18": "sNQwjtDoS5WKcizQ3SwiB4KqgjwXcR8BFFeDPKnRkXy1r9mzaBNJ268Qh19cq6Tc8ciFPiQ44N4dZVe15vscMF6",
  "key19": "22ybq8WqZkyxCQZWa4u1214LYULnaKAeUjw5HJuNdX42bkyPRedcNxjmsefpFgLKs5hiiUPHm6mfDoKjbJKZWXUg",
  "key20": "2Wv5oLUegYg72XULLQ9zySkGjSxD5TFmTRddceJYoXsBzC8p6Azx2yBhRndsM4osn6sTCWRAsDyGS51TkAvYQVMG",
  "key21": "2BKThTGoAmmTLDxo1yuWZRNJy23N46syxZQ4GiHaW46W2poQtoFikGy5XpMSHFPqxgyL3jYgTTvVWrVoccUYADEe",
  "key22": "29UiSL1opcRZyiqiw1sNi5gNyZqaanG4gYuTWhgNS8dzyvmnxwKQ1iqnaGWZa4jFfNADFx2RHhyUtUNhPhsLGPwm",
  "key23": "4KhUr5o6M2aP1aMi5WhCDibCBFABu6qSBEqxVWEdGRLa14zoYzd5Sbtx4XKUJZBWWznhRLLzfQExzXzZjJgzGEZr",
  "key24": "5Wc6AP1zUNxYe4av8dh6qXiFHLJm1G2nS1E4CEnS3LWDtMLCFUkMsbVdc9xNDfwiZqNpoFrxy844yctM8hG4KpFR",
  "key25": "3EHDwezREjtkMZHLd5Gx8gwuEKwtJo9qkcejA9Zph3KUzXcza56DdzRzWgFrN2eyhxVDxxbfFFJA45Cd6PqvCRKZ",
  "key26": "NAQVc3B6Z18oHN5s7RNZQFUZL3eQEmCagrvKqTTJvn8QCrBoEKNBwkngcLDbVCKFc1XUNbARKn48o58U563z3tp",
  "key27": "311rgRAy29TDTzvdgaNANpWPWuUBvedJDEiBBs7venX3RXH7qzdAg8jBFTBWfdhdipa2Btm1D5e4J1j6Hdn8UgNt",
  "key28": "24FisC4qm4Q7D4vJx8dcfazAiwqoGWbm7159tmaWdsShRmLE2ct4B5J7KbwtsUpyw2nyMUUPBsEZLVGW6osfBXrx",
  "key29": "28AwgHczVmxxKur26SmQQNjhwyR4dnz8rKQJJLrR7RsmBrvrTgaG5cziae9vGpsCbgKrhUsC6D49fMXmz7AKVVDi",
  "key30": "5VLmAexFYPAW2FerAMaRLiXgXAYKQUPUWiC3EPxxod9zqfE2XntqFwL18pH8Kq2s6WCVeX4ZWV9S4aDN7vdhqpWw",
  "key31": "32noG5iHLvMm249mBXz3bexbMJyopBU87YFxSf4XrVZN8iLiJFx9jn157DsE7ZvcrtnqoN9LNrH6uXwptdxUynRf"
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
