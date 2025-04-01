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
    "3Q6sTy1fHKJkNwmGmLEV1wDfyQFDqNEvNTodcghMduEuz8MTizVfBzmfarCpHNvqQvvKJisdKt86ULtMyXUbMfq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cyK417qCT1EPBZ8HV4pyCieJ42sRMro1HApmbgnSXeECXzvWJgViwDkXSyHjPBWueFCkLgiD1CYWWsSL8t9JbBB",
  "key1": "s8gEbJ6KBgVznhsAf2yv1JkUAxe3s4SayHL9bS3UFToJD7oz4TV3Nfyx2XoeJ8aXo7JzgN3uif4Xs8BxrrPxiAY",
  "key2": "4oX2Gr6bVFLEU5MdfWoA3sSU1ySoRr5crAZj8Yrw9MLAzu14Kc5vS8yemh12naQ4Anw86PJU97pC7D589xWauoDQ",
  "key3": "4uHFDpkbjqcqkJBngZ3S9ser49T4sWEYzBgtqJJKUvcWbL6nKUQ9sHoKwv25PNmjwGRj37RRLzaEuC82C9FvRFvR",
  "key4": "546irgQ8Jc18AUHST9i7xBu4Gsx3GcNpUbf62VXHaEQhUr7bTBiQnGAfYW4oSECYx658BZGFFZX5A2doDQG5wwWm",
  "key5": "2ee9a9zsTb5uuoPHubGcaZj6wagX7Bb6iTvGKcBMH9MSVt3Pi4uDBhuhiXhGBvknADdmt1hsijMUMvkAHLFsBMrb",
  "key6": "2FNrjVrhrEx2Ve7XJHE1uEdPYm934hTGMZWrm6EVtvByuNmZ3r5kc7V9Ng1am2TfTc8befwbcvEf1YjMV1gPttod",
  "key7": "3nLkXr4xY7tWqLyJse9JUqSD3CzxCmsHyy9XFMogCayNYagWgPASHy3gEJT5ofdUCL1gpNgzXWUejCLD46mRv4qD",
  "key8": "56TwRvUPVWzh2h4j4kTNF3UvCbQA1JeuLBFMwDziMD4mCkNqhjLiDRu6UtYt3nAznz5eVuwBstEENE33nxbVzVF5",
  "key9": "3CVdjBRHEJ1SiwkjdVbaYbgKuS9H8jLckRqke5HgFuMRrRe6JUijCHdmbd3h8nZRwzBEMuGWABhJefpnUEnYJu4t",
  "key10": "4iSpReTyAePMGKyfXCjK3ypr8uZ2ehAXbLh3nzRKhx5qcQ8MPjwHFprBe8Dx7DCfVZJJqNJYKr3wuuLB7S8swyBq",
  "key11": "5hrez8EydgcXQQ2r6E5cnBYQw7R83KbDPw3kXPujSu1P56a6EB1JuygEq6q3X6RdnHjcW2ZcEGQ1UgAySDfgzR5c",
  "key12": "EzeGDme4J3JKESfNx459K6GPCdbPfp7HZeXhsQJmFeQ9f1fy6jCMmZmWErPBiYar1b1gNhVdgqftRmP2g61suCN",
  "key13": "2uYGrfwKanY7p3wxkkTbYeX5egWFfJAeTtUyrGEpJDt6RjcBV6aFEdkgbcqo33GNNss195rpnXDZDoraqGZGA6oX",
  "key14": "5sugLcguarDwpNp2VAhfYG2wAcsR8DnBwjWKspCnYACsv2tLQtJwfFViFcwHJ2Y9znqQF83qr1PZgqLUGmVNgQui",
  "key15": "5o2DR9hpirpnPqLNbPZ9AV8ZnkH68wvr9TUm1Ta5LyuVimpuDkuiC13tFSKuiaCLZwBmDTRcJczrXFxeFms2JshY",
  "key16": "5ZMYJMwz5PdaPKYchC5Ew2dnEDzeLeoMqddtdDj6GMwzLPeV9NX6hDSp2iWiSunGdjtBa37fH8wgLpm5T93shYj5",
  "key17": "3UZKzQmumWQyLcGViFbp5U3aCWztmxxsRyyN5aWTSdqmcPaL9CCdzAK9VnBU9cCzBfp7sznsFhQo1Hr9PYZfkpoa",
  "key18": "4gf8hqajoLvxrTtLj6RyDF7S8F5DpEtHXR2C5trMMEKfsTeUhobrKM3Q9pYoB6F5E9GSUXxZcHPmvzcs1j7mRpw8",
  "key19": "5Zef2kgvqbkNPzmAedodiTH9e19zvAx2T5JuJdQaH8QhiCNuHcQMSTJApn5t8ZaA7C5n1wahKnBPd8TY2pCSWyYz",
  "key20": "2wdhEWbsoR8cA8KvsAGVSvWX2eBDMe3JUTr9pkTeLi1pSW8b8XX7pDYpGDMaKiiq2g15D9GcJiBdPFfuEXLWGMSZ",
  "key21": "2px3RfocgCfB4L3HzaRfSEkD6bHyY8SCE2izPEKxuEV2pftQf2EYT3vtAUEXpko4Gk9W9Lr7DgfjN9Y7AT6wSy6f",
  "key22": "3LVtnBs5KSCTkihyreBxZo5QwLeyzp7n7ub7Z2NoAkdEPHswXJxLisHajALUTN4c6oKpRM3QfRqou35zdEYemjp7",
  "key23": "R2W8XfyQStPhm1txYGrpPZQWSF2faYfTEnTu4SGcsjQbbpFAqgs9GYXcHUddoRJVfdk7g9fe1Z2Ut6hdvkQ5MnP",
  "key24": "48jNucPeMEFRxSMipvfo8KQbgeyWeX38it7PuaLCNbzWKwzor2cevwxwgZm3CVUeogHxye8ua5zghQcRaag5PdB",
  "key25": "5LJoWhG6EsXcspSuLCp3J3fZpRps4WcQjgForf9rg7t3sU1gx9LBwvRW2sRWEHv4HC9niY15qQSzaZ8gJH928Ywi",
  "key26": "PigPZpP2oEKeq39PidkiogqfQacfMYTQ7BwXQ8G9D1dr7Tffy2P9CcQHbtct63XCA1weqhZHfe7D2WPDQJW6xoR",
  "key27": "3unyM1hVvkaTyhV6iCTZVc3cDcukzeJnxvXHiA3eWkYmPQNqGfZX8r4vrKWzbuiVfZpbdrY17nxKJLZU5hM4n7Ns",
  "key28": "24haC4m3A6jBfhmZrzuBAZAnLFPhSWow4ACN44vYXVSSivkzuVUAnvL9skZ63mXnn2Mu8icuB8CU6uYRNrQBNmrn",
  "key29": "2Tm18ULbeQpmSFrhJzFhpvvxdtQvonthA9cQY61nCqjd1NxmUvt6W52PTZdDbbZCtuK4kFGTBkU5GMxBVRerCzPJ",
  "key30": "3DwBnVebqGwwTs8KdvdbmyG1tBDnYRRbZpsMNuY3mypzd1D6ForoGXv5QcdaQSj5aYiBVYyyAUuSEzJ8PkXQCkVG",
  "key31": "3goMLPpLSzYGjAYUkoWYJv4LYTf4rVazj5PigbXWCM1tBzNMK6md1hWgNo3PzWjZgw21W91DYQXR2rMF4Vo6WAfX",
  "key32": "2mNbvmg3JMJ925ZaRoKVCfsTaz1XSNY2xtaAHSpm6kizDn1dNRbyF8DKLMcUkEzJ7Tpx751Me1d2Cx85qqKCBXJR",
  "key33": "njj35DY6xgZXbNaJMsu4NLPhxshSw76rSRKWeKDKZK7VoPv8WqoTboTCxaYvbS8hGgffQU3HcigbgC5AmskH1oP",
  "key34": "5ZwtfwA3HX52w31dsgE1kH6ziV177NWuSRw8mjaoyGhi5fncL9RsG1LaGjpxbdJcncXKD84faoPXWoFKnaWM1FtD",
  "key35": "5aXGNZ9K1PRhKXSqRL3a8sJJyWs6iEr7WWcu4wDLsftwaJ5DyDW819VeKx8H38ctYHdtkpSRKScjKte1Lk8uuwCw",
  "key36": "4Ee8tSddsfDkTc21mrah62qpA4mLQZ4DdA9VkZBPdVaVtNhYriiyQpriMxQgcfve83ksiwWrJrytKrAQSckZGFVR",
  "key37": "AZdSZWwxBDrWWDJjZnAGrRDjYmPUhSQKM579cczXNsJ6ozjQctFVTq58xAxeAJ5cNHR2Fpj6SeqU5SrUX5ge9py",
  "key38": "59rxZGVrASuHZCm76EMj1nJ5LVzX6u5K11h3P9AxR9Hrt511ZiKGpks6FtBAs7P7Vz9kn9jnUKkS4sD9t4VgV7QD",
  "key39": "5kcvsHAKhs1PvUdFwRkwXFZbGrhuVp7X8PdTYbGkWpF1WP3qGjuouCTAHUKRR5h3Np94FnLEzPcqisTHJAoMQxjw",
  "key40": "2av111DeqLHojcTEZJ4LfeoyfCx4JGTSDrVkh44pLpKaydke88HNX47Aj11BHEPSU6uFjmfyT5xReGhnVPzP2UVP",
  "key41": "9Nzb9A8MedKN8jfxpx8kd7VhwMsfgPZRGxR6xVEdXwy7cPnd3gzp7E5c6PRHyy8Zkx57SJWYGzW9qYWQdhAJ8v3",
  "key42": "2R6PuZmEH3ptsJnFJG1oTgTng7kiax4BqTvXEAi75vWSQ8fhpUV1n87D8Zjytv9EU8sgUY1CrBK58ULRevVFeZQX",
  "key43": "2dEvzeBu9sCzroicKsB6gkAZzjrriZd5wdnd6CuRvCACy28iYxi2TqYD5uicqr5t4CqMzkixWuSzrkHTw6KSYAKe",
  "key44": "265kas11S4MsLL9N6y5AJtcvWZJmXZZVppgG9EYQBgFPDi5bZm7Wk3gjXPaAcicrP5gfED6hT5mVfNbwvzNEDqQq",
  "key45": "3cqRdtnDEgXUD9vt7KTKAZywPyxMvgt4cUEoaSj4AX84EnWKZQjsK6QKbcWy3mdLzCWf8ftX2rDBLSykHVpFZYyG",
  "key46": "3URVjkABqcFQ4ie8gSMKKr2Aoypx8bVzbRYXrh4E95SDTav5RCQBPB2uB3eTaHAiFYvPkgSSQDjgKLmF9yfQAq3X",
  "key47": "3CVqHvrGM864nLFa4NgfqfNGAnerS8AkoFWZUbbwWEokz4Ga2H4D7NnWErPveyJQMJ32aj123Qk4rkUChaUaT7Jp",
  "key48": "4HNw3vWihh4LmrEn8KAB4D3DQhTReJ4f1scSW2htXEAvt5a971JJFEm7a8JezomUQFCh6U9ocPrhUm8Zza3hLid9",
  "key49": "3WXFom3Tt5d8AXbRGUEn6DZd1rprxkgVUprhmudBRMPKLTfBuYFFW6aGM4SuoXz91Ba85MdJgpmfM1YiHwzks5dv"
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
