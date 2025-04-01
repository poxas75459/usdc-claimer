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
    "3xJqcHLpiH8mY9R8GML3LWckupQNXpC1WHFBe5JPccFX459dKHBs5E3YnSkh4qjrqAtCDhDvuLFCsYREEvj7viqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UrW2kPoDxdGo8LHd46c4DddnRi4GBQzArbTDuWafQRFbMRhWtHZFQEoMCaXN2hJEVRUPYc1b1d3282A4AYrRckY",
  "key1": "4YotxUpc2NB1X2ecnk5cMYrSxFdwHwmDP2Emfp4CNRjpSxAqSRDGj9nxAWS7FbopDEaXbworTpB67doScLxhbvML",
  "key2": "5o9xki5BSJJyMgqQWqmFTJbe3hsnExc91KurhHkw6rgD5ESQHkxJYyJno8Ycrs4bMnsvrRtASz1H3fRAMfZEab64",
  "key3": "4xYbHQSMZEJP4PMQjnAFrADi64FhXvwv1fRprvxx7YS8HbPCTsh18B2kxf2Humm5Nc3vCFX3CUbLT1zrwRbJffGY",
  "key4": "2ouSCM1SooZb8QWG1YM62Zw6AoA8rbjZMbMLYPb811EhTnWQSa3qmsuMZLvsznMyTpZvSNs3G9GoMFmLpwW8VJUj",
  "key5": "kT95Ua8LDyPs68HaasS15azoQ7i3cyF4x7QUzedGb4YexxtyvkEDfLTMWojJE8VStGGru7u5mHy6ttho78HM2Qp",
  "key6": "2fEY7WpddshTbsNvwV5TqcWEpC1hQewqTUoHujmYeExbdzFr6FZ2VcpjSn6S1v7yN3AqRPXYw8dUxXbJfZgMsdHm",
  "key7": "2EmS6j5k5oFkUg29cAoDnoXZzzH3xGf6u27aHYEUZvMTGGpfVfjKzszV1DaqQwddXmYaf6tF25DvHP3rfPLvopZM",
  "key8": "4oRXBms1kUDN49smwDBtysdRZePLRGew3sPbZvsPoWhkZBH1xx35oSQhRHaDJophK5wXFE5CsofixiDMetrRmqzi",
  "key9": "32HNhHu3ufM9Xb4SLjWr3eUiniBE5ZVoNYJeauTHf8dAihCq7w2PoT5TPxjpQphAN2Br3QC9NaGzzew63x9aEYew",
  "key10": "3E1t88uPWrYqfKEUVUFiHf3JGjD1JPcvAq3JRi8pAKpiBrikFzdNW9X6SeHwUMv1fUBd7r3s7uExWyqyo8RCaEt8",
  "key11": "3ZVw96U1gqh1Bwjh5qR2GkyrQwAyDoXiDqDZmtcN6wz6fGA69poZLCpbboa694swtq9szi4aFf4dRFeuCADXeXpU",
  "key12": "4RJkLs6XyoJmADvpmteVKXtUzRqvHUK6ytjzg1hNgUf8pkF5mtWTDroAhcQWDTXHV29hEW8E2MSiMf3mVnEzHfeu",
  "key13": "2xeWcG8xiVJo3GqTGtunMKCfaYueoqarFFheo4swyrcqQN3dKt4jNfcacGB4qWzXXDTpMK474ynn7nFdm4dWMzMU",
  "key14": "5BtKCk3qz41xcJhT8PEXRdPzQku23jjrw8EYg4oKg5kSAzZSs764sM2tA8J6pdqTGKJnbfbKahrx6JSkHrbZmha2",
  "key15": "aSGgRTk5QbsnJqWPz6gohiDDQkvp9HtYs3Z3rSP4zt1ZPY3KW3MhJKaaxsRFT6HiXFGD9VM8ewYVeHwbe3gYoVd",
  "key16": "2qV7TDy7FopsgSeam4EGuhEoihTwE8uVswC3ksYkNzoSMiRn2fuaheWWFNczSiXcicRvPj3PLLy2u12QkCBt38sg",
  "key17": "4fkhQidj5WmQKAECASsEuVvgzY1Mj1proFMZQZVv9ccMyM5nqutaDu2QdKgeqyxTezxj1gGSQkyAFvS3FL1hnLDu",
  "key18": "4wW24hNt9HEPAYyhqZgz5pgaj29FA84FNS2p7M7g1x1oqBPN7ka3MQ8LXuJeNgHqssxRmVY3pfu5JsgdmHmKz1Jb",
  "key19": "2mjvceCitSQGXj4LKuNsoqA4SiDDr34EFKB7k9UVXAcBsgX77n3C7g91EcBAG6FPHfFwYMecBskMAHM1RtpsrRLf",
  "key20": "2XF9L79gSWHP47x6VW1CWbpFQmLp3AXNiYZE3FnXbWKRowC7vkvwhz8pU2VfKeJsVE2oj5VzPgq4gC4TGhRq56jR",
  "key21": "4xrz3Vcg74BmDvkP96QMV191HQUL6ZSsY3QVzbUobksF6d9Wi2kak8hxpnANk8a4uVqWWs3rhyGv1nst1GxMNnUT",
  "key22": "3tsoHZuKNP918V1cPn1sx7rL2gJqMHxT7komjhpVBwMVZQN2ULum8DjtkKUMCo8nT1hZxdswnFoyjq3tFhZWzFve",
  "key23": "3HRAsqnm2EQuQtjuLWLwsX8oXN7iabRNmCwxszTCnR3DxvnoR2rpSUwJiBGj4Qw81Moe1ZTiBPjRceCPGcXtKfDz",
  "key24": "3uU1N4iiFvFBSWVm3AADgrfpxGRuwBynRuT5pfmyx1gWRdKoLR2rhSe66mfEgTaZfAPpFW61bLFPd6hF2E3AVXVt",
  "key25": "3xGGhwQ7ekky5fWM3iyRsbbyC4ahWd4EuHiCW1hhEQaJcsb8jLJ2fJkR5qGqGrwVumjHJobKkPLbHJYhUxsuq5Dd",
  "key26": "2Un6vL1SnNzDtCWzCqqpQhYqTK4CeiPnPQuCAiomnTuFzpyTHs3x93LrJM1yrZKJEdAUd3GqpLbs5wT2rNidKFTb",
  "key27": "33QooC2XSBedbJGucAaEjygCEdzkg5MFrxuZp4FawvfHhQaRFd97vZoHzXZ5w2dXYsHRaNKxoWr3N9SJVebjjcWA",
  "key28": "2yTdxdGu2ax4fSq3UazXN7iTo8QAcmz7x84VP1MYFCcWPYWjBAtvux8sHWYorvuQSayTmyx4yTrbkbSYJr8FQBdN",
  "key29": "2g2eMzdzBNqfRU1NQMCdA74wPg14gDY9gkzQUpWpWWyBvxyzZtQf5LN73nak2JWngpaqy4Z92HmHHMF4ArcvL7dG",
  "key30": "5w4an7sA97UCfT5mosrXQdkScsHtpXKbzypYsSyTbVkWFVVZH1B2eUhU9HM1xbW7Agd7wZnTNBpZjSAoSzn5PD51",
  "key31": "2Lv9q98XQTg4qFSU4DGvZ72JSRJe7T1EdCC5eiDnXyf23fe6H4kq8e8A6tfUWPqAhKq9yjh9hVDXSLMUZyKJAqRT",
  "key32": "5KdAQtakrCzLbwzaFDR4XKB8BpN1fcGdoEFZPuqgfxzNdeAz2d1AF6SFH23RgaQRavGHpXpzwZSUCpE2mszukD3z",
  "key33": "4N9CjYbBmBQn71kvKoAEVw54SNCpf3gREUrKgLGsuv48yVfhP1qk96qR3PXaVVcZDb78FmDWtqQ6dcx6tBB4owoN",
  "key34": "3pPhGAq5rDJKH6M1eFJ6y6RNeN7TNiVZrWMQZYyfUqcTLXQLPuy7D5jUEVWSLqqorjPmW4ndXzwcPvY7oGa3FjZZ",
  "key35": "5CogQjEvt9Sxy9UjkSHVHrk6XJU1moVjFkYZ5dQEA5Bnz8Dh22sZaWFx551FQy6jJmESSSTDEnYTBiAUWHBZnYXz",
  "key36": "XfL58FpLHUAwD2tHz91Zz8oii5w9CNTytAAYft3Ye1DtqwEydKUp3zCBzvDasDEJkkBHvHp5uxXZ17roLaH86DM",
  "key37": "4CVdMttdyCiE7w7ptoYH1HRn9uM3hawqtBurxSyCfacYdAYmmJaFY9k5JFyfQftT9g2iaDj1ehqBQEpXzePmu6We",
  "key38": "8WTD8t2cH88hcVruXNuTZ3mZmCMwvm27b6f6JgGvBVz9rEx8sbpAgmmKwYhrZPLHwSod7kaSZLhENHUZitek9Nx",
  "key39": "5Pi21svipzM8nMjYWAkazLgppmEYPyoGCqmh3MfTUxR7gBSnA5wqc2T4LTHme8Qodku2Hgifiksaqib1UTM13Rew",
  "key40": "2ty7mdETAZiRSKBhG79CGayFEZQRwp3Zmo1yCfmPUyL2Xf33wwukdNwDg8fYVRGzC8K5xZHXc6UULSK1jZUAH5pa",
  "key41": "2cYrBWuxQEjkykLyVJ1pHgAnNRdZNann985TQGu1LLug7mvHtfhAfrJ19guVU9H5mjLt7C5S5faWkJTh3ruVuzV1",
  "key42": "51sKTVmz8Q5XcozRmYTnpu2jxgBEDQLHmBFcYX1JezNv16P3JQFsDrektcJtjJUMhksDab5AE1ox84W7Vz2zne6v",
  "key43": "2W8vi4k4J3zhEtPJ5SFqjV9EmcHx74f5vQX86PXynkxETPZXequSVAkXQJpns18cy9LjKvLGU62MYq8aVq6fU4VN",
  "key44": "67dopvyAmXmjYaoqahNm5Gp1CccTyPsLR8WvLpN4zMF5yCaMfYV5upCd5JNSpB2bq2EzHLVWzBzprFdsZFY8aZ87"
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
