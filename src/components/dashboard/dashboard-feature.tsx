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
    "3CEPwjHgwgNEbFwA1ABjvHuBEKWF6Bz38uPh2sCiT5trKH56ETMb77k9T9tJAeurvvn5t71tQdRvvSazM9qzvrSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ihfrF5far9qHrEB64kxPVBZSFa61MMZttqThwREhAdDgjHDHCyFdhTXHYfYmLSYoFhHyfSSCSE47qJCJQ4bsnmF",
  "key1": "4Dc6Yw9TrimL7qHceYoxaNwz6uG1obAD119vD1494vRJNtn82qxc11qK9pTuP2yezSDwnyKs2ZKxZcYRBUUy8qPa",
  "key2": "2GXC74StRER6T7wd8TF2tLbcyuCcLu2t5JDkBhA7NGRZPV5bdPUFDhznDgMLVJMt4sk1dJJ42f6tnX9ccsha36h1",
  "key3": "64SUFVnGkUb5Yc4YYiopTCvYKrzyijN4XEbSVciiRXvWav7xekFmokUV3ZqhakiMrXRYqMif5W8x4YtThH7ZDbez",
  "key4": "maYLL9jG5BtXg9VkboSeNn3pBGFRqCCiUFDd4cb4aY94PasVSkFfZptdqghAEXcbuY8rE3uUVGZnyeNKEdFTx5L",
  "key5": "4wgev2HN5FAtk1Y75toSFM5fQA7PcWPbTUSuoKvgkmhZkenhNY2SegGH9jD94wJkQ5Ap5ezoxbyz8YBAxMu1NZCn",
  "key6": "4cniepD5MkpRLuGfDh7dFUxKT13mLRFdK9T2CEMucKmZq4h1hMfVgqZjxuum8tTznBAgRPQ6oWsVVtPgmYNn1GWw",
  "key7": "46gjzs7euNj3RF6gPvA5J9QQWvxA3UMbop1sVyFMXEqxXEa6AYeJPZhCtMU78g95kbGBy8cXFbuNxVeAJuidoEVo",
  "key8": "82BeaRBr3i7e8ewUygBTFdT49zmH4yvSBfe7hruVgXLpbBkAuyFyQmHNPsTLyw5esuGAfzvqTQtrhpKH2vtzXgc",
  "key9": "3SYdGYJkjCF1Ympk9wXVjGWRKZoAn5UPueVGYkZgpzqap8mBnMFuzgRa5KpNvAuyFjDSahw7TEfcXx3JHdPGJ8q7",
  "key10": "2m51VtDMMYUnysVkZyT2cgUdzfaToXvaqPMjzWrYxq34ncuozgmDo1TQptN9ayHH3g4XSbBuGU3LeLNP7R3yJbhF",
  "key11": "7j6wDuu2EK9MjAJc7rFryQvCEDSju5JPYMS4in724iE8ors9MSgXRAdxgyArdRnmCNYqUCe2zvFNsYWnUrgPXND",
  "key12": "5GGpppjNqEYCxw6opTojN573bexuQJv2ppQQwFGKXFxfuyeMC1knrTG9DXVYRbY41tATWruZgTePbtEuD3N6bigd",
  "key13": "5uG6zyXETWAhXNcwwUzEDxaCUndcpRnpqYJjYBdKdEVcsGoK543W32Tg1XjZMVdPD1km8Mwcxf36pokC1Fra9A9t",
  "key14": "3KoEpSuEgJgM7xD4u3p5HEiaUtGJ1n1a8eoVzEZziUdtvUuFmbWacc8UR8sC7fTdp4H5P6nH4BSrszowS4WiHiiH",
  "key15": "3XyoWdH5PQn4KMtwKnEijEH7Xz86f552yXfJ7onYciX7VXrgQfeMdTS1UAoL3M74BSdAUTZRHujZfuAFMKyqErvs",
  "key16": "aQEVWLaqq2AE3gCagYiP5neZUL63aEgtf34vqjCJBSxd7uwnQXLReScue3uNHNjfnYrvKQjJo5aaiEaGcDAtdyf",
  "key17": "3pjoX7PhvVP3CyeitKjrMbPCxy3NdX5bM8WsaSDVaCvWMW5t8ps5qyNNPNgdeBzXct5xuWws6BS7HE1FTQ8eEDj2",
  "key18": "34W6FbnsR3B3i5UuZpEAzKbhf8BQwcG2UjwYPm6Z6CKBFRfZyLm3MEXt5WjetVaR9s4tEFaYWMeT57pjE533zUT5",
  "key19": "5PkqmaR6DNKEjZ6o5e2FxVUD2rzqdZa9ootEbhb1TMqzwyhtANZ9HpBd7JZb9kdcnHs3WsrFe2wKcnbmWcKDEE3Z",
  "key20": "41sQtSabnU1c4e4sNSKPcrXTGwyQYvHAYjaCw9fkiAnc82yHMfhZ9JGTgeAGQv8zfQzWwhMqWeXpKEqE9rPbyYMV",
  "key21": "3pKuorWxGERYtwLVHERYrSbYh8ysaivevdZ3X7dpsWA3BHyzcJozVbeP2QhMajr9EpSwfSL6E84YUUNEErecFimi",
  "key22": "5P9p5FMuQKLjktkpGvXZ8Q5q2guiFS8LWEN26Fvnxz552bXaLJirukeAaC77QU6qsdD67nAyT8Y9gQQo16j6kveS",
  "key23": "5jYc1XXeeVNVy8hG2TLQrCF3UpuZfZewxDKyfDmqFV3dw5azyqzvg222vgnyzvRLjLYHcTN4DT84umgqcQ4NqCDM",
  "key24": "47xGPpsYwjGxvyYnBS87pr99DAMaYs1k1BFJsYc6ZGzHvA6B9YsyKVAmGXVENweSHhH2ouzugVQqHesSWuF2r5VU",
  "key25": "5R8Q8jizcY1VSwAHXfF98ojEE3JpkCar5rjSbAwRb7WgTpdmE8EWUDXXE4MMP8eBBeJAdvScKXaFPJpePLQiSiBb",
  "key26": "3ZBg3d9dX7MmWRFcFnhAZwAW6AweNwVBCPdaofrouE8GgEMbHLZcF3LxgXCWKRtVnJo7tdvYKZm3zJxpotqAuGFU",
  "key27": "5YMpGPErT56bJoKRNrtnuJTVuYLdfSxidwFXGNQPNgdCJrBxmvvgnSAZfJxJtkNot8sxmUJDP8BE9kqzC97HzRCY",
  "key28": "5D49BYo6ee3YBBkvefDDsny5hajRkvrxdgysDcqSQX6XBiEqxVzfcFqxgRCg4S93adbDNcpLtaNviypS9NsiwhYo",
  "key29": "316HRj34t3Du2wtxZvww2D4Dw7nGq39JB26dTtao9eMaFY6Z8GPQwYzugb7yeUQWCUw4F4y99mUgXcq1dUX8MtiJ",
  "key30": "586z3RDuMBL2tH722JkQYcWzxbNudsEmyTxNn1rj1zXAZkG692oamunXSBWivikkQzQ2ZZiNM1Pwmm9QTTzM1HKx",
  "key31": "3PqchBToyTR3eg6utbY9gxcjXDBU7HdihrKQVK47CRJdWQUbek6JGwjRx8D15To7sKnK6iG8dvdttKLS9S9A1jVt",
  "key32": "2H2nZZKQbsWekHrhmEbzwEghNu2CcD6YfjbL5okZHNxJCCmrKz9i5SkA2XsptUbQrqAaigdKNHBBiQcWwYdKgztq",
  "key33": "37TjpB5otoqmG4PrCpVcBmFpezh2tXKCbXj1fZ8orpJE7rMvzbJFXw6PzULzkidNrMaFxuhu5hywtUZxBXVwSg9k",
  "key34": "3dLikMmkTKkH11DTRuyBhTU7wBH7McuM2vpLdXbXNWnSuDdvSs8audUPPtTS718MsyhgC4o9mKuQmm2eRK1xbgof",
  "key35": "2ykqjpACSKQbyeHnaYCLUDgwQm61kZaswj8EGKrMrexP2uog25WrznaL3tCdb26CbLGAHjo6rmW83Nhm9VJqDWmq",
  "key36": "318aS4kahVw8uYY7AcUsPyhh1fCgb3waAEypdZQ2wmD82WLzxosd2wXE95g9ir9xTfyr8y7MFrtZgcitWo3pto3T",
  "key37": "4ZgHch9Q89WUSAXF4RgU18Xj597BbJtWnYJZeqbnnWkudja6DfCxuDnc7uwq8UzF8kn4mKASzaEFxgbaXQhFZ4yt",
  "key38": "3zmushDZ7gh6bEDCZYEVZkAnsRYN1BnGQL4HYiFKMYCrN9MwK3qe9o8j7ew1rmzgijCjDhDpbBVwWJnf2L9MZoBE",
  "key39": "3uV1w7NuHesLaBZu1Q13dPjf2yGnju9EZSpsx6N3yDSvZnmA7JhP777z3c2g9XgqrBvsofpRYxNKYC6Uqe28Qp77",
  "key40": "4d387YgY5DxBYV8beGWcsv14iEMMw9ujccgNy8gMx85CaRewDf3YfgpGh7w4tToE8zGWrFtwRSA5VhBNvmZKs6RT",
  "key41": "4brAgexYZdRKMrJoomPR5Rk14MFJaG3LNBxeNL191n5kUA88X5eo8V9xegdCUCdFPjHkg13PLGLK3CwnVXxiEkuM",
  "key42": "2qFyXPeHRkMs5MayXeuAXMvKUytvoKRwbnn6icSvob5x6CL45UegLkqjktBoHZs8938ssFwpoSwFPmdVm3Z8mpPT",
  "key43": "2ymxQcVwi7kquPbvxsHsPV7bbQqKfzD38Cpbjfk5QfvXhV4f5ZEXTxkTyu4uwdBaWnbr2JaaFmRsim7HK7wUpjwV",
  "key44": "5vCJm4TTGdGUgtWDQEkuG8rWFmW4UrPZLatTubV7aQ1dADCLPxfoZSrqmUniYatnTwJaUaS3TSPdRncmAwUfLYH5",
  "key45": "2gAyZ7kxVsAwkccfcqce6fvJrSWXyRUkBvCaVYbzu1YcmTY7YxpGCorBGaPQL1u7Hd772SamSUXqpciucFjjX18s"
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
