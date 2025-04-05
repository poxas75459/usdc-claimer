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
    "2qtWsbK4dsbBf7bjWQmHppdWEUBozNbCXxvnreVve1Z4ukvBkgJ4JWaZ8oxbkMNGRr7E5W9pnjRaFVJyizak7FY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PVhQ8iv3beDjs8fJ5WHq9YzVudCiCKrz9ppK9WdwhgT76fzf531HqnZrDnrD51bUBzLrwTDuATHQVKjUguAKyCg",
  "key1": "3hAEDiJRLWrpF9hEU2QtjUyzAYJYEebUpdh9hWKQxU3tMu6yJdWg1Fvq1REE2axi8zLYgfxuRfZzusTVnZN3okkL",
  "key2": "4gMCVkkX9QcFDnFCiVWZyixHgnVKAErQueWoVxHs5uXBsYGgaZxFoEfFFpo5ZRZMoVDkhVgYyoj6NWuAYFGQVju3",
  "key3": "2rmGMpdUbQE9enjJcbA43PSG3PLVXKG5ufxVAVFdyk5UbhnWVi4NAC1U9fLQ6eWQxzHZJ8zRbRpbpPpTLDf51Med",
  "key4": "Aur3VPRe3yyXwjvYsqEs3tjWBGqadJvzwGidGaoAkjv8V5fy5D7iG5Awrp94E2aUktrr8yBhqpMX8jsBZTu21c5",
  "key5": "4yaXw8iByvCTBgZWq5yxKsXpzTzWsfzTL9hpx4bpEMegN6R5g1TDKB4fjvcXgLaKJq4L8SiEoF5EnfYUXDhszTJH",
  "key6": "4ThyFMsYYgECDn76bn1H6CCXFzz5m1pusYwHdhvQoS4xxbF87GyxywEz3jMiWp8pXEUB6vojo3ZXxgWq4HXydbex",
  "key7": "3JHo9eow5RhrrAtWWLgSmM72Aa3pzrNKwDiTJfkwP35e1UX1TicmezEAWdjzNcq75oymvWxzrWE4L2CePzBM3MdW",
  "key8": "2JzGjVHMAcKnSiKjXT8Y9ZDpYsezUhgCaRWN6RSuWkN4Hmkjp9d7Nn1Tj9WSf58fTCcEFchD3Cx3nqkdeD3JALaZ",
  "key9": "5Be4CkAWMAuKFpEZaZTCAfULYw4XvXBTvRmDXqX29FwNkDxN3skcbnTdoXXXtbrg31ASzHFQ4bA7q5PSh3NxxMiy",
  "key10": "5K5S9n1nWabH55duE6im316Tj6FF2G4sUM6U5MBKDFgR3BGxhaFNgeMc5DvTKD7xPXy7844H5YnHid1M272f47qJ",
  "key11": "3AjPpvf6s1nGWH1nd2g46HgMT5kGNEWVo558RwJShyboVcLBttGpCvfVnZyj2cmtiLwaJYKNrbFxfJo3T257AkY1",
  "key12": "32E1hkxYegzW6ZP3EsVPYuc63s9py9s3Sf55gdNzR43AjzS1WRSTRHYnvmGytL3j3mK7u6DNuG3bmSWnfNm8vsgZ",
  "key13": "545S5yBA4zGxQCnunV7XCNtGZYJXazgeRu9d9gYwBjVpdgs7fErtLKAHiWvjuXk7Je1StTcLzE2k6o4MHHMyijxq",
  "key14": "4C2ho5gCNmKsdj9V92izHg1M4YhiQWxZ2g4Papv7fZWBN6fPK7eH8bAFdrQA5sNe3docx7dtiapMXdSUxTr7uwcb",
  "key15": "3aoiCc7Q4iWmqYG8b6QBJ9UznJZAmMeqbbCjE1mtfnM72jx9dxKBpmfgoEGmk5EXb3VhyT9YuhPvtapZaNde3Ano",
  "key16": "5C1CbLMDXhZ41gyK5fWMi3BYCgVf7g38DB5g5euxi37hJqGze1hRYBokrDNPLsTJKmZvCvphMLbrVAHZUw4ZEaaH",
  "key17": "5ZV72kPevesMz2Fu2vYY3HortYL5wNrf2G8p6hMECE5JfrJF2Jb5fEHkmrPHPKcbPXnGiULqfMaxr2H1ApjKEqHv",
  "key18": "2ZyVHeiztNdJB1MWjiCdE51efzCjwrg7427C5zS8nKnjwQMw42HkjY4CzEeuM5RwW9HQy5bMz1FWPm6wdSwKEax8",
  "key19": "33LwCoxSLagtkfZTNkh2y8pfq1MGXE53L1Vaka8fASTFB5xznYAp6e5T2xkN99NRhrS92hF8gBXZt7RWugP9HFM2",
  "key20": "HWXAm2FUKBUWAkPmZLkk9zE2RewvNN6rWpPXR39u4doU4ASDpTik6A6X1tUiNX9HgrHJcjWkX4gBaoGCUHuazJ1",
  "key21": "3fML298tbAtdswbkQyNBMt6Ceu7VUjXkrMh15fCxCBW8qTnnZPcJdgEv1Gz2piieVADB7xGYD2KgSfaVvjvpazyx",
  "key22": "55u9E8Fi5BnNaJ3nwWtaFU4dTa2Yc5m2hXxjf1CFSHxuZf1RzBYtcMskZXLwRUDNXD7uEEdqFf7HCRP29kwSqoYG",
  "key23": "Uj4jfYzK4dHoGw2fvyVHDukhY3awxLUns9pMFSBK7RkfhejVJCu2T6RaVHutN7b9Qu5fG8UuhxHVR59n5VUhc3B",
  "key24": "5x6iJQovYNoNFPcwLve6wAvcowRXiAyX4MezSNGQaLVyVM7rbfYznCFHyRaQuuuHXERDDqiZDpEmLCHFb2ZRPtXS",
  "key25": "4jY4UihQf9zn6WBjc7mpzVbB6EHP6odAQ21UvR4mhTRAsSLCkeQ7qh53Jh7KSGd4nXZyJ8cu4RTGq26p7ev65WKs",
  "key26": "2pjaQsFs8ts5fEx5NNhS1TUZzbZAu6xz5ip4iK2tcMCr7jhVwQbehvmQGCrZF69pFPB1hcW2FCyJniKSK33z4EH3",
  "key27": "2B3GcJ2amwJuVR3auYMkbESjG1McGnNc4Fa9zdSrh55gaWppQB3NnPAJrNtMNK3W4ncUy4sN9mjGVoCM7NYDfci4",
  "key28": "3r4AnXucJPYEM1c4Cs8CSWWVmXChYo3qFJGeWMq7C5BYfjmJMGH65NwNZCX7hj7wKdSMwRbtQMa1aoKzPNTVWRtY",
  "key29": "21ZtKKbSrmwCjx4943iTBEzeUGnZDAeeMUGCkppEGU598H3dsJdZhDRnyWd8kYB4qMTXqxddv2nHUPq4a8etUKwV",
  "key30": "26dc3L37WTEw3BDRGc3kYUyoByrtU2QWrndcnHYogx9PUi5PkA3Lvo7ArzixV6rV7GoqWVtzgME5ZnuHNW9P1v7p",
  "key31": "3fG1sQaWjPvoyKCiLBW3gYUEjDAcZCj98gccARAFNTpn5GM8XBCtZYiuupehiHBS9nFVNpiBEyw1o9UwWQH3qxjT",
  "key32": "3H7Cp49RFTipAs5jaWKzQQZVN6mDmcgErUDKK4tNTZFkaHGWQFophCgWq1WYfKeKd23dDnapsTQCiAdVBdcNzNz3",
  "key33": "3UbvbgyJtJ6xRZtDmt5G56pcEnVEQwnCAnKgeckjteikSB6HLuoqRiQesbRvgYHt93tLNvbgMN42DXxJmqmz4va",
  "key34": "54iAiidcPMPda5YjUHXp18EfQ2HpvwbzP51hnhbdYBCNexzrB3Pk9jem5iscxP17BYNx8tR2sxkCLHdnrnvQ6jEH",
  "key35": "5G9utCwDt2BhSYw5bbrQsWQye6quz5yrsR2ZjfzwTT23YMypXFiz1H96qzSA84ZGHDg5NTQQaGpnMoV6Uu4JkxSs",
  "key36": "2NGsjPgCsdQSiJefVLw8qe4e2Zm2T9Qp2dKjJk9rK5JzgKWLm2RjaVwQHcG2TsGQqKW5WuRruL2xVmwVWNJDPLN8",
  "key37": "wS5YXxjGymsTysYX7jxHALSDgmVDihgnnCuUw4UU9ZdQmawUEXimFjDh44KHi83cFCTtCKwJGviVzEb3PHdaEwd",
  "key38": "5nzNb3UqHwXsMdHzWq3tPtci3diAiY9SvyThzgyti1B6qjgBLsRRxmA63JcGDFpSurHnsmQsCZi5baaPQgqrw4kX",
  "key39": "3dsnspdVSwQJjg5H2SiBv7Q1TcZVcjMxg1X1YWMUPMZBXSNxdMUS88CQyYZHf65j1MsGbubFwi1b2ZzRV97kgYqq",
  "key40": "5WTHXwpaQTrj3kTgFyhtoKZYL5Q3ev944qXFMznBM9fUQp9Yzw1YvL5CZLPm6UnkHJiAmrnuBy67KWoyRfChPTpa",
  "key41": "3RkNywoH3PWezJ34ZpijowBAQPS5GZgmMT1a4D5syGjcBgp3HY8Kfj5DX2a89YQyGiJCtzzyZ32xTWGCsS8cbp1S",
  "key42": "67tjj1cWKuBfgth2Y5vJ6okxZDiDFzmR3UdCB8z3UDECNtAoqFBcDria336qbF2TpL7qNFriwUepTaK7g5zDCsZ",
  "key43": "UKJcNs4CAF4QfH79kD4ptnk5GcSQd9DfwLdM9TGmURBBZt8uo8pPdZoqx3Mpvkb6zv381DUhJardjDMQN5Gtib8",
  "key44": "5RrnP3g53z7TRF9wbwkoWB3Zvem5GcXKW8nM99X4q4jjAj5UhFaBpFdnys8gVhfxUu8gGBN9PhNmsjD1gRt8KfJN"
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
