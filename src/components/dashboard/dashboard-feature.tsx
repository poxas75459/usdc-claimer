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
    "1j97DARRzrRLRYmvtC2fnuajepv15beVi11ZpbRhd1Vo91RMeGHwT6FSi5HvTdeEJ2hXHuEwnCRK9vXw4ndNE7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKn2rhMdQGhP1TMgLgvL2HbWUpD9KLCi2tbj1YSasA3JfsBexyE6RhaBwio3SBbPb4fQioeXgYwt4UyyV98vLt",
  "key1": "2sL7HNjB3tNiHDHWpWU4w3GmicVX6jjiiP5aVW7YLniW47WMv41sa1wQtq7Y3t4PwkeLCXmNak1G5R4RTUynf6rL",
  "key2": "63ad55mDLR5Pi4gsHKVRkwkLd1e8uCgPwPWrWrRissD6BVFPtFpgRytC6HVQLLQEQ8xxxoqGnAUAu6iKfDnjKXEJ",
  "key3": "mvcyhzeZJV7U5ToJAEMk47jnotxVyjYvCUQTP8fJwzxEYait4EeVSmCKSjdPGgjx48QrromUQWPW4TnmtgCtMKy",
  "key4": "2hPqwY4WxecX3hHiKafynaxZogNqpuH3NQ1rR36FMdg9rF6R3iqEDFdAmXZYYuHh2xSFe1cjBZSF2fbYQQTvf8AR",
  "key5": "d2Rgn3TjUcneb51yrHovGpVdCDUksBpQG9SPCBQqdcm9s1Mbdg5MhhkxAxQgBfpKCEQwxZ4biAhA5izdoSx9G8w",
  "key6": "5pE23QiFsHRHS2uyNvBTo1tT76NoT91KN2zr4Lo6Vn95RUXvxhdXTUMhvBkE1BxBJFs89jAtdAg3xXTTUzJXwd95",
  "key7": "2WJ42WBWtTBgYaRuetLaowurKbnMhwtbSmW5W9fjpsAaaKDAiHJNc8oS2MtGzGMwNB6aCHGhdGV5rUSX2P5Yn7oT",
  "key8": "4cHGmkQaoTBu2wShS3qdmEm5o7qLciH9S4ctex29CZchE1uZs88evRgaKYE7wungKVjSN5MtWfTcYaMobfJW1PjH",
  "key9": "32WGEN6vWAW5hLrCwwtw5zhyLW25eFbvamtjN5PXpbegWv4LL62QyDG32bhsUVJYHSt9JFgnJ9kYhLeyptZg5ZBG",
  "key10": "65ZggjjUPJxXkrQvJu1X3fvcyvC4mnqup1dJjfjFqtSwfjnirLW1hyvRKdcz5tFJaEeYdVCBNHi4J9YEReRyhp4Z",
  "key11": "4tzJChvLP2kXPuLe8sTZEwJnFiYabAjDWebTvSdriqE6VTCieLBtnPjXSFMGsR6CYK8ayjKgDrrCerd5Zq1tNzFz",
  "key12": "2PqhoWYQAgb4orbNtJ5XuYK4RYYwVVpXLDC1yjschx6Q9c2RjBAN4fqdHZAiiqgRvHhX3AzFnFThqupMi6Durp1s",
  "key13": "5bByAH7yfP9zEQpwZn16ZqbfLvdZ26thw5xmdbJL3XU3rxkTB6WGNYEwWr3QLGjjLdjrHNppo57VxYJSzgsAJdX8",
  "key14": "5uuiciJSMSAhameoWnUhKqTi6HkHntfwWq2oy93GS6nPDyKuJekRarCzoFhr6H8BU8szPMRPmFX8cqtqzqJ4HYEf",
  "key15": "rjHQWy3984RMsP5hTX1Gfj8xtpAGkz4CHPbKBtNQq8KiJupzhJCebJeRAszstnEXidUhmTfSCFsqJPoikWctvuh",
  "key16": "5ZyUh9Mk2bK2gvaxBH3W6n7Q8HuPSENaN1owhYiXHqgChkC9rbzoTc5BoifezUHBdXudgnwu3q76eXiJePd8AGWt",
  "key17": "3ndDHwF89PMg8FcbsQbeHKw4g1ib4yeiWBSyhu3h26JfGxQiAUnBEE8wNKxzfBJP2QqG6uUyD79QKy4YNAk5pwbf",
  "key18": "5hrdtm917b8hLiJEfTjgAJTSbcXmKLeV4sSJLhC8C2ZswmfH7rET84HgBbwvzgK7Ju1iRvdDBJQM4Yby3p1rNqrQ",
  "key19": "5jT155ewwFLZK3bt6FKUZwqY5e8FaVrLD4FQ28UatqcfZihaYDdMP1V39bB476EwkQ7sRxU6HC94JKFU9xtkETZX",
  "key20": "Etu83VvoYJYMSnTmo5GmibhqAjZ2Y4C6V6waGw6TcBJ1W3WbyjXsriEzY7yRUUDJrUnMZRcFLBA8cvYApGjMGVS",
  "key21": "3zvdQEEWC4YZ76X1KpuTvoj9d8Vi7VqG96WBFUaF44sGe7P7rukYPG4Tw9CiivXTsyfNA97RbWAgqjonMjgUwxct",
  "key22": "45X4Tn6qaCemV5nXum375zYT7binvG2xCzBkCvBbV2CSJKg2ghEwhYLLCNHdrXu8oNbZDK46DXzrX9S4nUx1p2U8",
  "key23": "4nZrimuMCHfFiXC2JdxCitPikvHW37SKQ43Jkdh626y7ZVYnTr7tsgn8TinHwnrcZcjUM5QyyADYjWkQedjsYuiN",
  "key24": "5fN2yA1c25dd76phGXHnrfM2Hk3ktsGQYa7N8JCRGvA4X9kAfVBfW9pZq1yf1fFjvqGRKEo3Xg6hfoQehbeA7gZ1",
  "key25": "2AZbAnJJxiiBGN4m5gB53zjg4ss5BiBzaQrDBtiwcaGbMvHfJwuMP2GThac2QLR1vkMKCZQTpTL4AoyXkvDBqbEj",
  "key26": "5xxiwJHy7iddPnWBr5aVDDWiYBDsC7ybZhj6aGa22PM9Up86dMmMSbLqZ45BApUQu5JiS94jDXwXgCznEPjAWwj4",
  "key27": "2bv71LMHjgwjTAh3mRTjD8bxFTD7PC6Vvt94oPu4A3j98wSqubCxyPTFY7VCtZ9nGQEhzwDAJhkcR8dYc6M2vgyn",
  "key28": "USMN9mSYhgXbZtay4UWsrknWD3QuasYzbaGGpeSKPbXzARUvDyfHxJJMax7AAKDCyW138qwp4bGt1XodJmxfNuq",
  "key29": "46QVxxZTDF1tpSfTbAT9Yf33kCVxBwtcij6HLTJbuGW1HSGFmxvv8LbuJyoJAQ5K7FE6pqgNCGwzPJs2DCEyq8UK",
  "key30": "uwUP6fB1n1bxJUqSatYQqi6r15ASaQY5x99WH9mttWxfoHScqxwQes6mw6XpqTep6qDj7KvWbM8s5W3xqHupRYY",
  "key31": "Tbx54akgJidKXoyEC73JjYF48zmXNHorUhL5f2gbXyY6UA2215b6z3hChS5xNUqVKq548G2CbFChqbFs7jwMrXV",
  "key32": "xzPCXRHWraTb5JMAqApcEfWaVrK5DkxSCL1v6kQFPj5KBxm7gbrQCbzNNXUkP9YrzfFjUkwAMMyVa9zn9bTa6Pa",
  "key33": "L3SR3mWAMYUFxe1Lvxin7AzrneS2RjFCSUPF3UDj6Q1BoahqxujxiDATrcZzJ5BnmEEVKqjRh3f1VHVCroPGZtY",
  "key34": "2DvCwypVaxjPMXCGTEZEQndBxb66NchaXW1DhAYVhznS8sqjuSWwksmdakG3waa32n3h5jzTkrLvmPGGRHjjbZYg",
  "key35": "54bNicJKBJ4kGvuthJoQrxKjYboMug3LDtPkuzyQJ2GrYiQDxgFUnCCKK4WWcEV2tTfgSrutN5vpawLUM25pChEC",
  "key36": "67rXCngJXSkMemfNwmUBpLz43jHznLiK2J2ts7h1m4nj1ts5FZ96DNZm1Fbcc9jBKLa3pVkcQaRpp3T8hzQUPc9a",
  "key37": "2vccaB1EvHtRpwA4d8Cz8thjuDjWAWRFxCDRS16yWfjMNLF387oa87reM8khN6EQynQQimPk3HzcrMVzarCqWRDa",
  "key38": "2H1EFT1gDGUq5y9nDYGXeCqSLkPUK21f6Ey9KRXqH9bHj95YQ8jj3ZbDGxJ4P3oGronm9LJXpxpZYPhwdSmKnEia",
  "key39": "3pzE4kWPhD4zbiH1yFESxgn1chFcbZxAHorNtvz4qSw2tXPZoevhvDdsZdniWbyfW2yFWFVoNqYQHtWc91FR2t88",
  "key40": "h68JNXyrHwRSns5yZx6BxdbDjqRqMJ5eXnxvGbV5jUmMXdkFeFrQBM9rs85kTCfn8Ev4tXyAiRNq99H7BmKRtXp",
  "key41": "4Xe3pQRVNQfKhgEoR64H7shmCnfY1BmKMv7Zanv1w7PUm8Dg6hLsXFrcgtARLTSFJFCRTKvnbpeLgeUNrV9caU42",
  "key42": "4vPiEfv1d4sL5AFcwTBd5x4ZfsU8C9nqZozquHxfdxQS1gMYmQZDwo8h2Hm6hhm81KLzsYUT2Vz2ofd4JgpEhDwL",
  "key43": "2ytNPXHBDiWcqWYHjnnisSRL3AByAch8hns7Uyi7WJcSN1mVKL2UQtwpZWgMk8gRA1euQaZTwNu3jYvgcNhszb2s",
  "key44": "4T2Yuj2HJb5fdPDrpjNCoT3ZqEjAuPh4zSqSMgh7N3qtmExRJSAApBskBRGFUnXPHSs99JL2i8s8sFGZiMnqFrm7",
  "key45": "3uiKKMBqhc5s4xe7cudsm6oQH1CQLfSbTpeGgJ3uksRBgCxSz9nAy5dUFXtMT7pzUaAvvhm9UBDfms1AUm8Z28X4",
  "key46": "3YkWtBTY6VPyZTs4VgP8SsaixKhqYwpuwMM7WzMpy4WvqLGwtUePxzmqk9xM7ESpGpiEDbkYJqyJ6eLu6rp1xEcQ",
  "key47": "5Z75sqPMEsmUVRW1v29GpEoZBEa2rxaEQ32EHz4pXy9TJ1GBnWKQ4Thwj7RXfuQpzfP5nCd9uVRACVgQpykwtzp6",
  "key48": "24BuNSBBeG2SdBbAZvw6AvTKcB4p3x1dbGHPMgiFZBwmcSCk7dpw3gjbyys8VR9dcfcUYa1XhnCzUuh8g76AiYm8",
  "key49": "4t25r9kEHzncBstzW2C4T8Lxbcr94KpgF4xWhW21DbTmAqjXStatsHQdDUKxj8L3n8E9kbg3DRffKTGqQfdm7hV5"
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
