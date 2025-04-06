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
    "5SAJtFx4bsxQRmGXrYiFJa79JqEMVKdXP6B1saLJtCdYxnjyRpapCuzSC5bfHiBfTtoVU6Re4cuo6ad9C3XavmeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xeeknDUzBmABGsTtY9mDajbUF9XQu2sgJkY1uWQCCkXvspoGpmd5b2GACF29WT9SGeh2TMWGFKhZaE7PMKQR34c",
  "key1": "3Q1kXhgyeohqpTgNuDVdDmicAKgYKwW9YrjNCZyb8Jb8PW2Fb9sZPcuHkLJyWv5QTMos9RCQkJAZJRiBjN8ExZU2",
  "key2": "G8XmEqhaNB4yREViJNsqgnGP1amMjaio9jhdhKbtDtSoLHRg3TC6t3RiMBwVRzzxmqMW8mFjYX1TAXpqz1PB3HR",
  "key3": "4dEjo2KaGmGuVokeXnvrDb5zEjdxj3QVCSbpmGCxucEJ2hRHbvVaMUKL4WRE4Lc6SPwkc7pknDCvRnxAUxE7mD6b",
  "key4": "4mennQ69PgKsE2MxzdrHZ2AesRbNBe1skM1MVqDtjwKXNAcfshGTqR3VpftgULUycsmHjYnzvDgQZaA9ApvqUMb5",
  "key5": "4n3T4WYrcLhKppZJMgLJp1uu7ugH75iRFfffZvk2vR9CgfFNWi4zwbtpEEKcfV4eZoXyHQbhQ5Z6aQzmaduLGyvX",
  "key6": "3anubf1YTvt8F33WYqcAM7e82hX1yrtTEE51Md5MJPXUvApq96G7XVx3fJMZ9FPFoZhRicyVcC92PzbzS91LJ3qX",
  "key7": "2eeM9GiiT6kzJpYpqRrFv5ZUTNNgjhhxqs1xP22euaB1iqW2nGrzejU7KNu1NNK9knYGKKc1CrrXvtX88son7c4o",
  "key8": "2S8aDNRJX7nb6bApHLhs3pHb4uc6AAbywo5McNKakfQyMw1cz2RztUya7f5YzjoqBKnFZQ4gyPEHP4hWRGB2qKjR",
  "key9": "3avxWQNFFf6DdE6rHo5zwiqrtbVP4ev1etQsFaLLNprFR9suvuDJSfpNUX1xAQnd6e9qGcEjL8JWjf7Nvj4wwt5a",
  "key10": "4APPo48HEEUXWLj8D5nJ9MP4bWpTUBFLCyn156kH6TuE6MtpML6zBocNvDSe9kSvRyuAdYKGLGqJaq4PA35wqkWS",
  "key11": "4zWbnMdRpoCq8J65Mv5LYncqM12yautCoiFV7EzJFRxa7Ndevj3q8wU6Ce1P5oqUK9YiHB8pv3dcCGY9pLh4nsxH",
  "key12": "hMQphw6MWw4GMEguHhGDKNgikdTVeCCSPsLjqSS4VM8VFEQcqLTVURzTZjYueGgthSx7P7AGZLLtdu355x4LyEJ",
  "key13": "2Ez482NNtyoJSkTrWDA3Rn2Swyeec8bbHWniQhozN9iyWYtW1MGZkxFsModUR4XXvszCzQZ7XQRk7ea8ejjZHLWM",
  "key14": "LAz83SATVSUrJQAgnsD8zWgWYSy6t7qVaJBuRSqrz513G92dvjBPiw9vvvBvYfuqinCyJddeFoULoR3RgPQEydH",
  "key15": "CxWTfwrkWWQY55GpjFf9r2jmJPgG7RFP1mt7y3xDAcSJu5qc6qgkY72qyvTSTMQvwK34hphemfWVD9MMD5uF1vf",
  "key16": "65MTiijqhPF6AAhLhp2CukRXutKzWCxcohkapKYxq5N52Yp9kUUgWVuTwWtBPWbc6rFegFXHMKtBn6yMLo7RoqjJ",
  "key17": "5par7JTvxBLHS83zCybzCM42vsa1Y232g73epJkEEXPrQz4gfMUEkuQi8mTLSWavstv866e5nrHDmeTksYwmUYrp",
  "key18": "5T6xzCQ8CggxYKQq9rzT9AWyoLcF3ALnp1KHy5ei2ALHhB8UmxwwahsXjKbEJZqRAgSNPGGPncVjdNTPqTLsqAjH",
  "key19": "4ut9c9UyD6zd3fjUmBAuNEvufmVG5mezod9cZE25KFd7VseSPCcriRFyZEyj6SUd1ifWnuuKMQoqjmRzdqcRCnZv",
  "key20": "3jgmokHEcJ4W9mggCVMQq1D66iDVye94EJf2nYFY6KcDGQNRwKAmJteabYeHVg9x1XNQpaAs9wwV6V23dehXa4cG",
  "key21": "5DP7oa8rPBaCQJuk36XgG1XohSMAYJpqnKnxh1XNucDcQoE9LCtKhG8zWwYriiLgZmA199kXkm3qguZLMDe1WTew",
  "key22": "7sC4mKYXpNdjqfgQmaNFaDk6wR6Wa8A5f9Phk6uaPT8ouehaSEm74bk3gV49B3nz29dTGZ7gyYpC8Hd8QTmLuXw",
  "key23": "vArrqM3xBpuVjtKRRm4r9NLwJCtKbJLbug1PKmbmrph6h7TYD29Y3gATYdWZxt4GLq8Va9gL5CQy91AzzCTsEBk",
  "key24": "2yaCvSyMuhKKeXCVa4ty5qXpxxSK2TnvXFLiwCuRPp51su8DBodPazuZAGoHRsiy814wAqtdzb9RRdMg7HHbPBs2",
  "key25": "PvJT3igXSCnia5J7PbN1x2AehThE98SXStCVaRQgdrPm1QWdQEUpWcSAbffVsgDujYGYtnzdz6GVXQrieCxGX5z",
  "key26": "4Zrs7fucnpJYQeWYNL5VWx3B8NQ1hoqwB7snXqWetZ9oM4uRn2aJqbAwzUAaFCw1NAfd6ts85Dij4zfkRMXzNdsb",
  "key27": "2svCEGkwSJJq5TGTXZoSEgrkD6exNbj7fcK3uGSazaSRBBvDBRBKFSsg7GAdDUWiy7N8iKMt695smgva2mGPkvmv",
  "key28": "3awkdEGiyWr3ETGyxzMvzhUoVPiayZ7B9QcRFeP7WnTdLRc4qwc19mtvuGGpX9uB2F9LbXPz4okuJYCNoNaWB5FL",
  "key29": "56pVkfpgrkYXazkkuaeasdq2b4Zde2MNFsgQVkxEJagVHhMEt1FUq1qgYMaA3tEy2u9Xx6sfFc3ZG9oVRYAL7jai",
  "key30": "3Yp1cny5eT1bHAJgYXmSbeLjWEjoBbRyoduxzXLLfcSyEjcUFdxU45RP8Mc4zzTC3gef81jtvUEkXqBRdeTtoRoS",
  "key31": "4aivVkJnPACHhmbKY2jaszcUB4CEF15rvX9AuV3QwxB8sEL8kQBU1dqJF8fumJpz8RgKV6cke7v5RETutJDh5cEF",
  "key32": "2u21w7SrGUR2yqKpsCp7rvviT9jmT3GVfX5CkR8gnEYnxnXLuNc97WosAab8MBMzWnkMquUXHZGSGWFSb7CPmTC7",
  "key33": "i9afz2NtuFQwgRtTQRU675J9Whvk6Hm5JAReM3s8r8Tximwx7sj3zCnnvq11r5J6UizQhrrHoYAd4xCGev5cFFe",
  "key34": "z2pazGSCEFUyic8BjzxjBo6mdDggRK6vF37b6CYN7FWMcMuGHii9RMrsd8nDRo19aYNuJ8arLSGNNuajLiZLDfd",
  "key35": "5Pchz5xiBVaDHpYyMxM4bXgfTtmWnpQRid6YYtWbMZXREkcrAXwDhUTBmofuExJrWy1N1BMAEVpRSFCFwCUscRA8",
  "key36": "3WkZnaQmVs4dLokxPRsAhS1HoH2ZKtUStqtXUtZF7qfxrj9Zi8XgZL6KBdQ7R2kJDDijFhTg3ukiDGb2SChTSPVy",
  "key37": "3KQDibTzzQhAbuuKaCh21iVyPyUmmoQZS5k3N5JpKTByN8g1nTNSCA8vxWNAYH8DD99qwsWn8vw6wNsnq9xb7go",
  "key38": "58ZEemcPEFDj4bRn2Jc7bduv8wWbddcjL76TaJZibFQGRzE4m9vaZ2Ce8pmAJAztGupZrU9SptF5iN8oAjZHV7RR",
  "key39": "5dXK1EZWweonzDX1DtRQS6iYC3nipTWdUrrWCahvBgSXRAFqrE55AKQGBcTqVWZP1N7asHYUTfPYCGgQx2H6Lmcm"
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
