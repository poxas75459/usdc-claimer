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
    "2rfeuWeTPtiwcYtdFZWqUFEzGnZqKPif3TrdJDZiQtPdcFAEHHtJ4rzz2hHMZj5oNLmhoEt7H1CMzHAzQyLfECB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cLsy2bSP7CfLaKhqwaWSfmVpcapzeQ2UjPVdSErjj3V7wJZEkW3nQPTqFRJQhgcSrLT3RwJdCKj7FbikUaKcZtm",
  "key1": "5Dn1Aoqft3KrCJxZ8PHsUmZvzuSmSPrR13UfzaE5Bike7cPZQXXw8mMW71sHBBGR3cd6LupwYUPfvbmm7htqQMyK",
  "key2": "2CdqK23nDE1aETMmEeYZLTWQY5nM6exVM7eyc1PgzqJ7LkXrQVfmtPo9oonokUzLKbmwjH3aN87VjhpUwQFP9g3Q",
  "key3": "5WUJ85c664BzvDv49jw6H6HbJGr9Dw14hcK3c81TbMpaa5k8zisqZMRNDu8dAATF4xRvG5j5RMr8Bfe1TsJCqXVk",
  "key4": "4tf5ZzfzxKAvAynX9QZRpJYafHndi6sK3noj7eCBEq1RVCroF1bYXpi3VYpno8JgFpDaGDvAVrJ2XTunNG3sk6yM",
  "key5": "2qMbNTguUESEtuTdv5ZkqABYZGgEiDPew4ffoP3jj1Ss1fUQG2nhHyRWkS5A9Qkt4TJRCzkRkJG5kHdev5gJGHzW",
  "key6": "2H8v5dRcfLCx1sJbvhLpnT7LwF54azSxFVHd9JrgCukuQVZk84TN9KFsEAL2eRmQn2MC1qaKb9ReCz4P3HPs8YTx",
  "key7": "6CAbtZzGGJ55rqmATAqVet3nRUyuMSEgCqjPRrzpwAfjRJy3QVFJnZZFASyen1ZoGKDPHdQnHUCpvzhxp9dMAXv",
  "key8": "5sH32ezKK2MZ2CPZPa3M2Q2EyF775W1mZdu5LjtRuLCxzCgYAaMiEzxNSS2hzrWpwLTsXM1qVCGQBYA5ssBqSiFf",
  "key9": "3GG245zNcGhTK2anrxe5ZakpboEHDmAZKRR52GrtUuw3nFNBP9sX1WrkGPF6M9SzUumY2Cz3WzVPKNB83kWb6Kwi",
  "key10": "46fVcfc4yqPt3QztABKsaatYjz1zLaYHqbQwbxaFRcPbUjyERVGjuxdvBR8kkAEiFn2ERRHcps8fJkhAnpacd4Va",
  "key11": "4hgFjd4FN9B7doauYkunAJi1qehrUGJaxJc8ebEbFeuEkjndPVatuTgZu18T2xJesqF1ijywhpbJaodgm2ZWn9cd",
  "key12": "5djxkWfMjDcDnDr9HMeCp5STQMoNzgjio2FxHWDZn2HS7fgP62kb5qVCAsaacDaR6foUrApG8J848dthwYdfyPjk",
  "key13": "YU3qZBPAMuTvpkjzieHm1RyGtFmLuqWSfaRdgXpX6Zc3YyWxDM5is6gqwktqUVe2nSG7MAN6kYgJd5JaNvr1w1u",
  "key14": "35m7wvNM6JWuKNSPksT5bD9MQaQY35XzfCWpqpmkw2FLYM4bStpRstK97YN3yb7fZC2dCFQreGcveoNWsiHbfxop",
  "key15": "3YohAziQAHDdtUD4wy4DYHdXNB28DZRFgK1DLXsVu26yVaAxEgq29b6XXqtuhcaCfFdC5FaULqLtCtNgLW7DQELZ",
  "key16": "5KaPxSWVNEsmWqqLYCpFqP8ro2ngFgcR48sd9XgG2KQkGrzfRYWXw1RQuYfcHgqak2qKYPshqMQVtBgA69DZWMwm",
  "key17": "4WT8512Ruwg4dkxa6U1QcLJHmDSiy3oLSwXJz527zCkUsLyaRKP7Y2keWYbfYPvj6wGSA5iEwsQ35prZdC2zDURq",
  "key18": "33tSNe5Z3qwGC4Zxnt81QJaRtJhpChM8QdDjKwddJLqfqcAq9L4e1QtpjE47XM6VhY369PGXCnqb3DKFTkimxxwg",
  "key19": "2eLuah9WzTTKgeLp7UYq3RvXGW1cTfJ4YYrydSRTnJTdr2vBmukwvyu61HnhqYJf6gzbd4HkkgeMF6zghsGsx9nt",
  "key20": "4d6o6qYvmmDfTcSw1K2gCgxgK4NHTFmrTtMnKXa6TyKwuGLU29uEGW1SZ6NXZAvqXNw7bsy3kLh7fTmSWE51Zxuv",
  "key21": "5AngYHkMKKHsUNUfq43DFhMeETVeMvyM91CxqVk8LFrxkKUmUbMntrjshoJXrqihT9j263bWDGY9FkwuowBdPb8u",
  "key22": "5GDCKjA5Ng8oyKmgzpY9uWGw5HJCofH6xFuAJAkzXU6aSXJA3MFdXJa7ShfVLeLcZefefNNoBHDfwyVhLhytiq7b",
  "key23": "VSBuNjPVD2UtufVdq6DPnfxXnrxBDT44RGR3W2f4jZMo7BHdQJaTRF4juDYHUezHgSXDN6bRQ4CgGV3visg3GrG",
  "key24": "2VSW6DyEFGMbTmSvSzTdkKpe6eFCX4XVBfKivHJLibQoB8tXvBzb5uo5gYqdjoB1Ywe2NTgpwBw1qBHQhm4kh6ye",
  "key25": "EpfY7r122uXp5C2z3RCriu7QGP7Q6NL8WJELEUwLQavBW5fnURtNYGe8URaFoe2D7sbGUDjmCcDSoAkheRTPpjV",
  "key26": "3gyjQdS7cysE4YAHmYdKetQ7BC6MM5gcpeYnK41YeAiGg7nEtWYHF2DVHoS3NANnBmyePkMZT8514Y1iJuhksRHx",
  "key27": "4WviuprtjMMzQmGbRwKSZuiZcashENr8L9NwWq7KjCUQfd7FwwVFT1yi8YJ3bAVTwUdgxbPKFfKSieN6B66AYHiv",
  "key28": "4B2oRr49n3xmyPAuK7KjFpmx2k6rm3UEQbh4CWtPWRZ8HrRqNwARLgPZC5JmW3VL8wHCiLyNaeYpZNViWi55ATfF",
  "key29": "3esn869NFzu6QKHdvfxYUwgKLAPpUAc7Zn8h6GvoM4PPo2BXHorSqG19jinUsy5VV2dDUYzEkYAftWNwqDhthnps",
  "key30": "3fJUKo9vJoBAknUCzyrAmWfvxuKKdDT4YGvU9mFmXzv2Cepi2FsfusYWQQ1oqUzCrSGwf3GwFTN487Skubpzb99T",
  "key31": "5AVX42SaikArfzkSbrbgsCa1bamhApXJeA7p96SG6kqNEGmzGVG9NKxuae18mU1YM2vecfPFLd7nAPZn5YhRe2m9",
  "key32": "5WweimSASQ8Mfn8Zfc8YqYCcpYuL5ubWsxcYsWocto3jbCAYpSNt4kH6bnnPUnZq5RHBw8VsSBPB3BC6NS2VteyJ",
  "key33": "3pfuga7gDbJq98xgjfV8bnxnXa3zsPvdvCz9FezWPQNeykxv9BE2nbEi9N1qPyHuXvgmybJc1zgkKePQSxgtqkxz",
  "key34": "z35w5Z9uaSN6cbVMbB6bswrp81SNw571NFmmJTQvQVKvVAM65e87KKkN74EtTiU1YwanuKVGJU5beNwkEDtkfJ1",
  "key35": "57UWimvpfyDBqzvjMoL4B294zBAYMiUc9SUqXtz43bSEMqYqYFACBWMCGf1CA97Z5Lzzi4ZufxKNcDTDwBv1Xu51"
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
