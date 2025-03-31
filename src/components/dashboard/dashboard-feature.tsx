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
    "4LsM7xy6cdAG4JhpZrVQaxr6QaS6pb5KEAPpTuvXAdBR1aXqsXCkuSUfpeFmTnPNPSAj8f3G8bkuZ649PzLyJe3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8guBxMJGBr8QzWuyxGdCYuqPwUYm9keXhPRsZwKTnYFZARRAkw1TZVrGZcHFJjVv2qZudEj9CGLez4tTuLL18M",
  "key1": "vVfwB8amPzMenYTPXaPGxExuMgvnFbKRAnQZJrKbW2oR7gKFX1wQkwDwmbo1hrux5BW1ej6nzqnsdXTVgoGxMyF",
  "key2": "sUhiJGJqhaZSjcHtXwwsEb8RmtjvVjtM1F6vBH3hK4Ebwc77mpyGMaGS548zgcdYYDNQUAURj5rPBRbNGq6BYfV",
  "key3": "5rDm7t8pNkbzKvj9YvUA3iuqLwuMh5tU8NGVnQCc3Qps8WhZn9yMxbYGpHZoXQDD73ZSX64isG6dictcL84aAPcR",
  "key4": "2ha7pRxjbia3uX6wNFcaSEfLHZpNkpywZesTPYn7ynR5KUpHDrBNJWwsaKonHweQDvANxLMBJqVVQjnBT1xVvN5w",
  "key5": "5EvbRUVatFPqdSZWrUVZeQ8Dth8gkEnfFQ1BiSywZDLbqUHBTgJ4DDBzNbtmiLHuibESRND3MGNGS1kLx6PPkGiR",
  "key6": "4SziuWuGmjWyRLp4tnFQDiDnwvEpcxz2HUYtnD37iYxo1ivV3FsaAhPtdvpdQ9kjhRQeg3ZpRM3i1eCQcAkW5LRV",
  "key7": "5a2E9o3NjELGwuaFr3PdgTPiC8vovQntjWUPgFJyuAYJ2yEjhCKKUiZtVBk1ktYk3TMGTrToVikeuEFeDMXeW1wC",
  "key8": "3cfZBtCUjW2MLJsaWchakvhQHvwWpiTAyPtqyZ16GQBKUrM6vAax6d1ARtkSF6ZK4uwD43RmiAbKetn48fZaBRg5",
  "key9": "Ht6k6FTjARbBLPsDUbQTcuPw8gbsuhWBNNX5BZcdeRNDTuEEDLcH69BsRBeATATTDJ3TiDE2HAwf9wXp26xdLyv",
  "key10": "3zgqtGi6zYGofX8TFRqtt39oWZcTPEHVBcSTJjad1f1KQ6LfKwQVXoHzoA9GWEAJLzSNC38ZTwi5gMciztV3hZz4",
  "key11": "2wobu4yMzGYstJamp5jif6QBNK6Urta9gZLhrMcAxAH7Da37QTy14eyaeYdvtN6G7foxszCVfjUruUUEgRmvvSkP",
  "key12": "3F71RhZ2RhNZPNYHo7fXw6c6nQ62ak1AJqmb5B22UMpF26Vyku88oEN1RTqudjgUBKozegtcV4Qx7gY9coejtv1D",
  "key13": "4kWNW9iyA3Rx3GEu1FGuFAvHKNfZLPLnFjygnAv4svKKLDgCpxkQbBXZU2LjdtfUBarR8cjGjGNtAuC9MhNvhsWG",
  "key14": "4wCYXPE1CZ7nYnqigX1hTi8EiDqHSCNK727M5YvfvuKTdYda5nGybaaysmo5sXTAP7zcDZ7QnfZ67pcJVUBD8g8U",
  "key15": "5nuDjGcFBF4LbcPo3SHaEKt7ovNzkfeHdV2LMUdJUb11oJGAectsJPBozkYmwuMHybrBX92N93E3bm3po2YAhob8",
  "key16": "5Q2ZmaRUYjZvNpRgcYtPcc77hAxJteDUUdaFxAdBr9SM2FrXLk5yQaGycNkrrvgLsiUrjyhyHMe4tM7jFtAixGh4",
  "key17": "21noWjDTGcpBNkXqeLGjEZyHKWxx2NLX23CxqpuifAKjDSHDAvsbrYsCv7qfiMY6sYmvek2Vxbw73ut5Ahv8amck",
  "key18": "48fmJ5JvJn6RBUtWhAnM7WWgbBdC1KaSdqjVHsXbUkTL29m8FmcEBMQQVN9YieEFRLLKEGoF8G2jfUfBPCaZSNuD",
  "key19": "5qKut9a67ivPoP8HAKFu5f6ibjmbFrbeQGX5xgFvE2L6BxeS18hmAd3cemHL1PJ1JSUXuEJKhty8erT8ZdL3GAC3",
  "key20": "33qAyRjMtJiDHKCVjAxx9TKhN6uxJfCv4Vxk1jFCKMwe3Qg7VhfQuCsm3tAZadcZux141h1ohcVnhcia36NnmtRc",
  "key21": "5YUdsmJQfq7m5qWrAFyquvCexs4PUxghrM9iWYkntAgTvkZqC3VHbWak7z4hFknGCZP7Fi9H6Wt78mCzHiwmDw1i",
  "key22": "3zowrnnVPeEYtQiUYsrEnSUGjjDHxXVW4UWdniqfdj1KMeNAm3iyoJXjtAVT9HCTYBa9mGHPkSW2cB8urTBKLA4g",
  "key23": "347FR6t1e1qESciZd5dVDG5K12qxEXENdnBhTQt8n6uStJaTbnFq9G2QQ7LvoLdWBNwAWh2VpCKwQS92qT9eS6MK",
  "key24": "YTYjux6sNvq4KHxE5L2VuEePgQGpbS1KYsNznhVayPuqs5unvCfsuJ7Cx2zuFKzNfxrirgh8QQ5DpfdA5weZwb9",
  "key25": "58jJ6N2oyvieqSTLYs8dYsZHsskmPkjuZJotnkJxBNYvNh94PA8fneq8mFJ8AQfw7GPqnP2mHedrtCAVr6S7CXWY",
  "key26": "dgmiqpYie6RTD2opBeLxABZwLEhr1eNUwkgP6y6NtbzPSAcPiWSJv2dZPsYEXNafMKSzxSuNuGV4HwN7PcNUVDH",
  "key27": "2tL7aidQEFjVd8bHGKSCXPEn87dK59E6XERzVhH5PJCmRBJuai8juYoLcgJ6JPRsipshKcxv2XTnm9hK3X14wPfs",
  "key28": "q9DojDs3KstxD4qowhYi448NMbeTWiLPwt62ZSXt9xZbG6cNgYoaauRVxVYAPHfYsC2B5HdDaVW6mm6yX76B8xi",
  "key29": "5Swh25QGs7k8sqaQHB2FWSEUcyPrE63dRqeefA8L5YEu5FEUvnnm55LaQZBJCp8ubLaNWR3TWFc3d3CQAaUZSK1Q",
  "key30": "4h2CUKbj6SgTGPoXdFsdztZcoPtL8ZPHEedF6Ma2CN8UoCPkaUsKy2ngLnFq6ovtAB3Aj5kLEfqrxLSnyDFi8jL4",
  "key31": "42KaVxQKAgzmyUGDZpJB4CPnJQUk8DpTAJch8iduuptnw3WnmxramfbhymPiJPEkJ7aGB8m2CW2132NLvhrp9Vu7",
  "key32": "3RuYyhW47pd1pfhd3B1gCLKiy71GaSyjR4NhuAEokDBB9izZRMYSXJim2QQXGifDsui69Uz1xQKcwxDTY27rLazs",
  "key33": "K7gVho6GUGzcTVgWwWRLbz9xVm8EQE9TjD1ZKuMtHGBsHJFiRBdjVSs3aL2dfHZ1MFvm4jUzYC83L16P1GR5F1f",
  "key34": "4njsjvMi3vMfyF8pgGsKM9rvA6E85SWmabTnwq9pUBpSoaJUo5jf3ugAhuBCbV1XjC1UoFckVmLAsUwugwsVuFQ6",
  "key35": "5FTWiY2S5JZ93WD1zCXbN1wSfZyb2t91JJJjoDqfQwCSWmjNBbqXXwjHc5wF13iiCE6FtyzzDDghXej4iGkGkuGQ",
  "key36": "4kUrFKJ43ayLiBF72C8RPGyEmhTz1yofKa4AC8Zi6EUWiY7rEwgD8PzWUBVa1rCVVtA9zqRySGMBD2A9o27iZAGu",
  "key37": "32vKW8pSt3uNCP6mv9PVEZNcsJSmFoEn5rHoE3EuSr1zS5rAhwsB8uUBjnFYqXsCoruCpkUetGG2v2Ev4J5GeVoa",
  "key38": "2nKbXFGi1v9NNYzJxQAy1TyTun4pmKvQDuJ6tkjPDqQtQDABnLG5S9vaF38JtJqJtgpwv4MbtT6M4ZjY13iCMi4u",
  "key39": "4VWpt14tRjt279CsMXLSaS8iJJRMhPXdV3RxxeavybJwHp9a4RSuH45SwYr3pxwnLpFCLvE4G8iL6VoSUqwnCf2m",
  "key40": "WJWich7SY4XRjFN7DDFetoLNVFM8huRCdofAH4R2tHMUUzRcG5zsu61BAVXVQCzsed2Hig7k4Nfc3MiXNadZJ3w",
  "key41": "jBkY7Qhov1ssnqEhdzDxekYy4xTUtzTFfS4RvuFEjeJk4iPrReV3MxyjePAm3JSuqp8TbapZm2D7beSR7ZjMHYS",
  "key42": "5m3SbcjPPkpjHBUpsTbuvwY5zQgWoB5aVcGDa2Co7YKU8wvV3YfY542KDRZeNtJWLWbsokDPoDkeeMQhZjjg31Hc",
  "key43": "2aEGmfRCYt3HgoNdU8Y3ZhMBaxDpY6hQUYEzHXzVLKuNmP7ZKAe6GC3jkb8PCdttNYrZgN32WGd5gevmHhBa7zm4",
  "key44": "2UQy5NTHwH6ucdUU972va7ZrZGhSakzQVr5c9snyVsBdRXyNSudkvNoV4Ud1Sm8xCDy4aHDv9k63q3TfJzitrzzT",
  "key45": "49pXmAg8c6NQoDMMGdkUw4y68Gr4TSsmYbe1Neb5jUj1NprQZGPS3jMDHP8MbGdcJa9zLvJHGUbGye1XMqHzTCUy",
  "key46": "123w6M6GXHwLb7QS1yT14zTVcYXQZXPs6zWDQFAsjnLZ5EF3Mm7YtiDz6LeTWfv4PESWAh9eSvMsciXK9XBEA5Ah",
  "key47": "29Pzdo3HNknQWKqikiC27AzsWX3bZDoWNgcnRPyqRLEp83KsNFVCHvi6MU5U2Cq2mMVRyjcS7iJnxLzua13jhpnz"
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
