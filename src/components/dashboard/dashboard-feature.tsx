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
    "4ZAgV7mqVW2fEDeTpxrW76rB4FkpBJwKvJDbpzA75REPQcCgQryRhM87N5LsPCvhWKAAoZXCHq6oeGghxUD8KUSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GVR2oanNzrHtdCfKpgQg5s2MuRdCW9dzyDFDpNhY5rgPDP3oYmL9yXVJQy61B2HwGfoqWr73AYxayyCu52MbeYJ",
  "key1": "4fca7Egriut7WH2zMsUzCT2zDRJeABin81hf76gKDjR3xBmaGLLJmPaRsBaMZXjfRjTqSmfiygFmVs2jqEoqGesk",
  "key2": "2ZUuTC3W5aYFT4Z27HvMY39VfY8X7ryX2bV3x1ssrfHGj1e5iNU3A8Xrh5zS9ySkGWKwuSm2cTQJkmBrwrCKWgVu",
  "key3": "3HnJ7DJF7sdWEJX1jjgci3JEre5U9b8J6uGceqJa9rPCuXahjktF4g33GxEFaEfXLL5c2TgFy99ccN8a2qHJXVTL",
  "key4": "3EuF8uuQ5m1iTbBE3UYJ8advhFuq5h2kChYN2csDUTyXaiXajDxLrBkXiPPHrfNYfA2k5ufJ2Thi3vYcfBE8VFcK",
  "key5": "2TVxFpVSRvehqsvPE6xmUadT2sDHBPp7sEaK1nYH69xrgc3a3nwpWykYQ934UaSeLkReczbSHJBVkmrost8zmL5c",
  "key6": "22UwPLH5uAoZxuoyZUG3hjwMeo2eTmTHVDbueZHQGnP5v6iNrnkiNazZvUe56SWzK49QEVCfUVWhE18tWsUpf82Q",
  "key7": "5UFYZBofrUJBhCfsj7vZzZkax3Q1GUU5AG1MZ6vhGc6bMsn469nZE3o8JcYnJcaowmKdeoyY982MfSoAEHZdZLSc",
  "key8": "46CFNRwjc6FXxT1SxPmViY3Vz91WFQ2RnWJp9FtgGSQGXh9fDe8LTr9a6psSVDuBbyvYybsoD44Mjx1vTdohMKtT",
  "key9": "4QPzE8dUp7S9WxPbQQYNHHkrdeWUhznHf6tCkCBuFYy7cMUtG8epjqtgWPPD14HHp1uqgQnW2F3UcS2BLLVa6VYK",
  "key10": "4psJongPKZ8iuZJ5hgGcEUikueGq1WnKHwhfz1Bo3mfpmvqHUYftTfEL1HgX3CmEUJ76KH2yRDDD6VMGg3Je7RsL",
  "key11": "4mpvfve49bXBE2gkHU7tXosMxMinTgpFLDWGSLtSf7H1X1iUNAYBpJV13hZRtf2YrxuvZaekgh3rCQT55zj3w5xa",
  "key12": "4kiupvB3TpYS5dEe6ADQohhe4KiVS6XcsxEsdx3ndgUQTbEges4bex3kvXDNqiDmUTNRQdQGayoo1kxUGU14Phzc",
  "key13": "AY7cQrijPsazv5v5datHjn99EQB8hLWfJ84MEs53F7avrqdRw5MbiuYDtyCv2viGVopXBfBBM7s37rxsUaqrb66",
  "key14": "479L5Uqq18W7sFfcbT1uS5vpxyFG2JQK1inWyXAyRLKZ6vrVJ2UFCmcMZECu2nPTSztZS2QEtFvg7xsErCKpXjvp",
  "key15": "49UrtmBeVnRHNGneLWYGABTZtezM6Zmx1GXu1vrD6xw5FgauBUvVEVkoZFyDckbBaBXCL9FRXhNW8oVM3L9D6gz2",
  "key16": "2fFi7y7pssuztVUv3ZPqtXSK7Jzo4q6qobJFhLSNcTCgPbsnKmad4ev7fKKcWSPdn8WKGhBwaU7vzMnxbjmxhcae",
  "key17": "2FTFqEngpQuL5SyeCFVRim6PjxnmrqCvA6yKNYVcZ9yZvTrnWR6YnZHSnxTHBiNGpY81Ri3eEEZWh3BZFxdHkvNZ",
  "key18": "4zZgumVbeZ8Fz6YKpdun1R8FCdxX9EhrPx52DpBs4eTpBH1U8yPmQkHAL5yxFwyzZMbfUkctFC2vfosEX3cAUY1A",
  "key19": "3Jna8aRWkU4mvpGEHUGNy6uW9rbCQ98Bdw4XcwBNcdJE3kCGWDkhzXq9C28XR2d8qW7TTSRwD4MhyshDMMtG72Ue",
  "key20": "5h5eXVKaWduykN87U921XGMTnByiQBuEnVq9iom9TdQ5WHkhyimg1Aticn7FEKS3P6iSqqGHiUs15KXW14YNayPM",
  "key21": "4xBpRpJ6jQ4uwu9DmuQf88C9WeTLXyFL7YFnK5Q5Dt2JW2EcojkKjpzqxNsGPANvyD2paQp6xRYuMvqBaBg6zTCs",
  "key22": "39Aj7PM9cRXXrq9XnFmjyhsfH5XWtkYfoByhDMEBT3F5ZtY3c8ZpgxzRhbeBcAJJKjf8bfBT67Eg3tkgfCyGtoLU",
  "key23": "xdDjVM52deTy95Z7JCpM7GYeQvinoRTy4CF7WGFPNS5v4qaZBDkWaLd2VCZpgqLPGu8DUhY3BVDiyYjqEY7dPNG",
  "key24": "3t16kT5WSJg5gUWPZ9MvFLnszt7oFo94Ne6Z6gar8PvU5PYwkHgKsHuHcFYvC5NK2VVvhSX486KKfVDjX2NJbAHY",
  "key25": "3zujFjg9YTz8zGSfQ72Wibn4BTqaCgFJjFqoPzRQayZHn3bwzq74CjChbefxEDNuHnv4e7cGPYDiFwAqAaidWEsx",
  "key26": "2H4KqUKtbo1FvSmqCBDg9hTSj4wfcBbeeF5N7Mwbr1UY8n6GkFjPYNb75xjbPgo5GE61eAnJLUf4JxyP2daNXQLJ",
  "key27": "4GmfhNoqdyqAK4N5UWxFZqSVpJZdQiG6XbtVVVi7bAN1xa9o7pRY1haPgwir7mksfgtuqBbMk5hwwtdDNBA18uta",
  "key28": "38JDNSbMYfFgoR8PFrvvB2CwLsoa5fX6bWReyPQj1W1cg26pnGNd9XDQnjzZekdCkCxSxksp15wz9u73gUDqkjUp",
  "key29": "3znuqEgxdurGC7MBEG5BxVDpoh3MCP1fcRML4Z14TKyydp5yMC8RwAVS9x7X8cQdSdwAA2ZaskuWu4eq5twM5gdV",
  "key30": "5VAvnyEL28e57gqctwBwXvik1FXhJB4RP4DqYzjg4uyDbNRgpfxZ9AXKf3gXYs3vtWsMaV1sAJUdmv9StQGk75Te",
  "key31": "2aGJCPLAC1xzGvGuvx78ziZutZBMdYBqBNijWTVAQZ1MppSy2wj44m8y6uywoBeBQmS7qu7BxUdRvybrkPzPurfv",
  "key32": "2MbQXRAAZdXX6sV77ZE6KsmHaD9ZvNDoCXMRJqgChv5kh7QyZqM8mdkxudJzGsiKqytUYfUfxFfJVQR5E3rbs6DS",
  "key33": "4aHNsPrHLBvSQzzrp8FC6txYA5ggjcFqYHeJAttiaZgSwstzHEb9rM1SJqR64gjUcXmniKFPtAs7w9esEpMMbBXQ",
  "key34": "9ZJF4nbM6Li39cT1utgPWCAGFG1msygF5SVsjWu6imVN7C3DodJ3MxYjmiLLfuyWE6tfiEi96Q2fgkqzeh4n76p",
  "key35": "5xuKbLXVtvhB9Yq3HAyyovGApaexLCR3rstTrq2661R7JcSghZ5Mskx29T1hpzELmUok2V731GaxVLzNJZ68DrQa",
  "key36": "4whNQMjV5Z9QzekkAHEoSig4vtPyZj6is6n4uk9S2Qb97kgqfEa5q6irBPGbhQwovpP32JJ36GrXfGGJZyGww3k3",
  "key37": "56ZSU3QxU8ZqY2stMPYzYWuLNMBFKyfbN94biqd9y8NKv9C2vPHiHRPiR5KzUrtEdmZTiFDjRZA4h3APzqeopmNx",
  "key38": "3S2CkMakNnuiPWzUvqX32rSNyXkAa5BFVKxSt1x1W89UtNtpzyWZppwL8YodoVqYumoTCgbtbrZzdPtBghbMujRY",
  "key39": "5esryrG8g8GZAKvpqbHsqov4E5N7bJDmL1HZhtPvTgvBhyD6vh7GjNcHyRkBNTtpe7K5YswG48EN78Cep2nSPb16",
  "key40": "3eZyvyh9ekGnjZ5RydQY4ketBz8mK5pCRsa3ZNCNyLK7GFDVS6BX6s1x6FWtZh4reDYn7jwAKKwZrnMsXB3zu9Ps",
  "key41": "5N9S4i7YTyzj2L9S81PGYnUJ9DAAFtiM86iiSJ4zoNoQPQDvwCuAuEDHw5h8gcrfRxu3omGTNP7wt5LoTbBkP3bD",
  "key42": "2TPgkcZCuASTmKRqfor5ueE6ppydwm4WUMkfQzy7NnnJRnbYvYDMTau9BVg1gr72vvhuLuHNJmn16mZq5d91cct6",
  "key43": "3hU1HujrdLutMVbKtAEAEMMg19zPS9jUBRJH6fML9YwkKG1APT1BQyPvt9Adj5W8CpjSXyqgKB8PqjpPDrTUj4QV",
  "key44": "DVTNNXMZs4MzMtZJSHEqq6kDyKeBVWH4Le5GYDATi18WqXXH1X8FrjJpC4czGCBWFaBmPhKUQrsZYc3wcE8YkiU",
  "key45": "odv8UAnydMT3Am69fVDu62DAunSC9A51fv4E7tZKudQR9uYykBjwYggh9AnMgDP2P4bLSdPSmLzA12reng7X9j7",
  "key46": "62aecixoraxoACTGurKZFoTXbFwQf1yvNFBTHa1nXfuthUjbSfVvU2QpreenT8pT8mqU7QZoGtbvBoHxdYkEAeNE"
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
