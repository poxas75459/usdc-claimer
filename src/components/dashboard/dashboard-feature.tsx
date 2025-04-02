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
    "3WLMa7HSJMjuq39o1GKT4PsJYUCNnLfxZkTPMbuC2dQ8QrrPjPqyBdrekcCexkX85aK7ydWRnYZWZm2VEE48ozTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AwG8Qe2gKPuyD72Wcp2sfFPKdP33PMkhtxBwF55jac4i2Qysk4W9TPLk2YAivUNWCJ2JHxuNoieeQpAEarsJ3MV",
  "key1": "3AnPcR47gHWwkrXQ3xE3c97jFC3K2mqDrbfD1Z6to4apZtV7bCUzfp9XDeAWVeBdyhFKGP4zpnCj8yoK7Ck7e5Z2",
  "key2": "4TrXsod28kpxGVMXm1JvvV59jdCeqxTQKvQkS5n5wj4jEMqsde2qY4igpBitHxrCSyNVZbBAb4YSxgoJLeePDT7t",
  "key3": "4hPPzRZtmUADFYghCXvm4oEbtRHPsUiYitMnoDJ9jbwRLnMq9EXsSj5ocgNjPgexQUmPyJuuzigifxLNH4SSrbm1",
  "key4": "5tTwC8BTSomRM2hL2EWAbs7jKzcGAfvNApojsLBmR4fEpfzpfCs3YiiNDVEwKyH4XtwAJu7JJbgifdg7vA4vTKdp",
  "key5": "32eFsYJkvYmPpbRsJANBY7CKDE6VcGCgPuMG5frDBoJGEcRDaynYx1qWsvqB7YnMPQoDpcBkjNesYq56iJMpu7U2",
  "key6": "o9WBryaDTw9ZAVVhpow79wyJT5gexwVp6xM5nUjBBaFVkLHxSaNzMNeA1rWTWzbRL5FWW76j2ttRTSEWXqQznyZ",
  "key7": "3mS4gQ5EVq94ZJQwSnsf5gnCRFAJbmBtFzwnEuw7tv2M4PNQhk87FSVRGBiPmV8AC7P4KHXpbZ35G8gy6CaYJrV8",
  "key8": "2v81fJRK5nzLx81gi9u2X9S3zSxDRnLFoD7egiKm2TKYoDF2RrecEdZcSwWJMKY8ZJ1DB3iqkLbQ9Euafeyii9rx",
  "key9": "2NehziMweXsyBdDpDtpPb9MwAz8UTjRFYybLuGtPyctTdRH28R7f9GLLCMtM8DN4q4d6FLUnQobx8pRkFGCKsSXS",
  "key10": "2rDzNtdiwy9bQAaEPpEgqmkrTmAfjnu2TvEM4oiTvLtTFBMT6BzVFd4Ae8F1vL8KPtKx2gH7yY2x9W4esXh45LkE",
  "key11": "46rzVTREUQX1ngEUqSpsrFBRNAZTzVgr8gvWzq9Sfg3sTduPpQugakraJY9rjPTikdn3AZmFzuXfcXMn3KMESL9k",
  "key12": "2j6HoqequRNJhcXDJkjutLAxZmXs2jVw9zc46Pqi9gmNiKsx5BmmHYxSpCJiugjbgeUutqnsCKnNCtFkNgqmcQPd",
  "key13": "2UGnL5YGqiSjqjLyi9pzwZCXowQYGzn664WZTb32X8UKphMr7ZwGpkoyxndUtNqakEFxaqsMsPAmxHGbe4VoqDGq",
  "key14": "35ExtSN3GYVSD35FD1cG3f4EF2aBA3DtnqrwQYiQoAz5myropaCPuCL8yHba8M1Q7SAZNsJFHeaPepNUy93htM89",
  "key15": "3eXzy3egAsHz8oWMDusyDghS6ZpfhkCCyj6tTNe43cA4FHQzFAjn6uCqESKcbrED6D7vmTcDVebqz6gJtQoEqdYM",
  "key16": "FzYnChbQQ67639jGhCRHtXDqSecxGQ15SXNdyS6fjSRtfTFukN1A1SiHFXB5SDDiereP6NACoB4EexsEj5g3Nep",
  "key17": "49Vc6cJvumWMszhahmj6EuPq4bfqATNmsRwoh5ZLht2VSDor26CkvjAVMbfGwDJAdd2xDyq3NK8zvcCqYUcuMb2T",
  "key18": "2HVAdG3Nj96z6EnNHiHoYLQPFj1Cwrka15wG4zDV5txanubSxpv3ziPjsN8TuYPbQ9JDdG2LMJivfb3Yuf3PNJWa",
  "key19": "UDno1ubxAjZxRWqR6oGmGhHd9LeKXYFWvpEj2xdjGspS4y2e5qqpTHMfNA3GuPH1uKMycTgniZipXzCTFbVKS3d",
  "key20": "2a4Mq5NBPRxVPmRna25jUf5MENW4sUWh2wZt4ZyjgaXioW71Ehi7R8TdxV39AiUwGsoLhfkuUzr9hhqBmLrwuK4w",
  "key21": "4baZ4SB4rJqvyEEp5ZCnSzFYovcQei5Fgv63nN4YMX7iiPvkbc4VAkVwxY4sk8fuxU2Tm8XAZbyRPFvbC28XYBP7",
  "key22": "55jjKPFrLg9JjuQZLq7LLtiAcRxAb4Xm6amdongPCa2V1xsuyXC33eDFdGySENgXDHA5Ksoky8JHHujUEpBoUwZa",
  "key23": "22rnhaqmvHBLEFUEE3pHz6jhV7UVP6M3BRzBHmGCSW7TKgXQfuxTkgqGBfAZ1XGkCTTHBcAv8hrKFwU4pMXNh4zD",
  "key24": "DpMvPcASRuE8Vez68guGRDn9gC8JBA7foXE9jyRtAsVgMyghKDWCYjvWxT4zXo8B42aRwXggAZCVsrffdJxns5d",
  "key25": "4XWMgeBBNumJjoDVGy3PSh3DrF9qXgwTox6KoQW4XA8ctDup3sG5hHstCwiLHQdMURwam7M7FmYDPWZFuoqg6Zjr",
  "key26": "cxducMCqAuE8iJM5k9Qrc7ndbaj5JzpC8P95gQWhTcuarDxj3nDJ7S92KE3Fysyh4isYmpRw7f6JAigLammbM6S",
  "key27": "42zpARrtnjNngcjt7mgQ1Fzb4AFzwwwbAkJYumUv96DpFohS3npBjakBBGQSaUF6ezDmSSr1N2pAvRhri5W1RnEa",
  "key28": "5hiAK6LaZKZoSRXDmHDknGQ6qFg1xZ28UDD5yKoSjvdCFieRmsJRvGGWa19xbxBXXgNDAHJT2FdyawwXEb1MJuuA",
  "key29": "46NAKfMQVEePeMpTb6PMdYNK5cb8sDxV6bitZypXAGhWBpZtyLyjDyPJnBHVpedak9Zs4GsuowJYuzLTA2BjTKcH",
  "key30": "f7rULCQdTDmZsK5xm2aDmQ9aFu5fpDTZ3TJgXZPG1XjoYBxatyoE3stNYSy2FkNhcCmUpDVYWbvNqdoDqyXJkHU",
  "key31": "2udVGi8zRmMoU2gwe1BrW3WgggQ9Ahz4Q8Ep8aoopLL4PN2WD7PHYt7bsoWD1N6abysyQ47i4UFnjBQ1neAykkLz",
  "key32": "2BMsERgJx2cAat7Q5AwTG2A9a9Q72qocpo1ixw9cu73uhRjp1dj78Xr2sGqUmEp71bKkpmXNzgxEVVB3ZggfRZUP",
  "key33": "27wxUwjQtsepiCFCxFj6iuPUY9s2CuEtA6R1KsZhY7Ndjo1H8Uihz2koMvnTvRzAGBMsRrjXurbU9HN6PVkBR7ne"
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
