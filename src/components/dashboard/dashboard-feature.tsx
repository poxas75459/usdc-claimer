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
    "YhyC4zTqxVBhXo99JFKhna6bgm9gyMAteESZhepb579vEPqLSZCru1HiZnovZk84SmxVMBKKPHMczn6XBEnjmsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K2g4p1so99zRXeW6w86jcMihMrbZR7TVdeZme2sbFZwJJy6DjFSus3FU9AL5YgQXtgvBn5AqiQaLgSFfMXAFPZX",
  "key1": "4zQ1cfTmZ4VAERmWziJZ4adbH1rUrKW4yUbTmXTNy7e1PbKWwdwtVD23wRXRG18LFXa7tz7u4HjWcS7GGUgEsuG7",
  "key2": "31envPiCMEjdeP8t8rBafihyqtnHg81byZKJgCC3sEy5qPNN4jx2dP8WSJKjx55ddZM6LT8XY9VSECrra8FwiwFf",
  "key3": "5yrCge6SwLv871Qe2kv7WxtVEycegcks52aspiMaie4CVRvT84aBcBpKrAu5FRGPbbUnQ6gmUnQx5NHm4rnyHARK",
  "key4": "4gXAJprhTGXEnR7wSmyTVcSRbYyGMMHtqeiiYpf38M6xEWjr8M69nrwN8dKLZaSD8akq7NsDA2yG1GsPXMH9Umja",
  "key5": "3gDbfKAa2VQqYCdphTCG79RTY3DzBH2GsFAvmH8JbyrgXowUCsqGVwRm5fNm14C2XjvSRLHgjuVxKGuWHxKMdVs7",
  "key6": "7n5xQwkEiDFndde5bFUKFjmMUoepcEeALs8HccCdMni8BSWCX2yMr12PWDqVBgF84Mw4fGEwvZKJei3Kuhuf9vJ",
  "key7": "46ec2Ys4PVa5VuDBsSdpg6vxJ8DzEPgtM1Wd25EyDsEvFeMK9mKPjtjeTXj33xSKiSURpHiHBbDJpj1quSeny4bs",
  "key8": "4ER1nxAEJPXHhopL9wG9RakJxHAuRMKBRfqCUHecJXKNAEWKoAvKcZbGMVBHwhpmonTC6KNWPYqE61NwGPbqCAN",
  "key9": "3cNVqHBrCGnsV54evQnthv6vaoeJ3Z1RbgVtT1XEgNuFRq1C7JW2u65K9gdGLP9Sn8iDdRtGZbcouyJSc3i3cCRQ",
  "key10": "4P2Z6WDjh5UNVxKaeR1nKZAoNmUsVppEPuNtknUbYwaSAkL5kkJwmiJpaWRKc6JVdfBhXRUHWnh6a62VipyM4JyB",
  "key11": "oV6shjW5fRfj2X2LQxwPertxgnKDz64rbKxhoE9K5LbGQAskZ5uy4PTCPdwn5Wj9rtwJggJa76d98V2sQZXBf5T",
  "key12": "32sYRSXdUHjYzRBdctPyidBekzxt3vyfwExA9Z3wdXAzjDR37rcQq4yugYpiXQEEPpx9JGu2CxhaQsvw6z47Fgbi",
  "key13": "3Mh7UxngirUjtdfmT6vVkf2jQWBzcnxE2ubUpKJmLQ6xpUoihnUg7e5ynBUyWkHzQJnCyyWTbjxDXFbeXoUjk6dt",
  "key14": "3WL538d2JLQ1g7jJ7odm8LCUSQQiGkjoMePn5Yz9Z2hrPCsBwmbUwbFajQpG6HWtoRqus9J654icrfAuNAWbL84T",
  "key15": "5TkTptzCvJCyHU1ZWJJN2bBmGNq5UNWgF8P5CfczcwAaX35DNKHaKD1uAFFr6aSsZpSbT8hbW1sw1py6xrhXJnDu",
  "key16": "4Pk9V19vrNmTtpLUKuDKn9EuPcHJph3fJNpyhy8sxv6ivrnWPHWyGpzCg84TWy5nXm4fuE9bVQGBk9Hn7o4nBiTp",
  "key17": "47KGLLiq67Ax9XpSnbARrAoQdz7s8qhxfJmtjpMoRXUU2QWE5XzxV3GXbPbqTdGpF2dkgEUjjSmDmsJKRhn6s4bL",
  "key18": "Y2U9XkPhEBuge48Rs9orQHxybAQivsmBvTyNdy6fLRgexU9dWjSMnF5VVZy3m1itiQ3aYzr3o6QbhbEMFJxnQaC",
  "key19": "BrddThJ5siGQfibR14qz7jt3BYj3KSojmtVGGkjnHVk2WJxrd6pUjsATe2ifoFUYMNXh3ax25A3o1EGhwtKEmST",
  "key20": "hqxhEtdZMad7xEej5YVKqn7Fiu9aeARYDWdw5wKQRDfT3whduje7dH1PSikzfT2YozLCuqmpVGFeUe3mpWK35x2",
  "key21": "4wZMyJZKeuVQWB2ZD6tDuobRnZT6CdiMdufssMnKA7K2h9aqH6ErDMdLPcmLp8Y9BroMe7oh1jAmRP95bQhaVwRk",
  "key22": "YdZRdF2e7aM645Nt9tsvE4bxcrdtJaMcgvX5UUv7o7RM9frVsLKgiQB2hKPA7nNZPxC5tZ2SW3QKnDPDRrkBxBd",
  "key23": "2GmbcurJWPvcaPX4CCGpLTGkdDsHYcmH9wxfofM2XGMPGF5kvapwsSo4k6n58iccnzMUxwPLyNXyLuYdpCosJeYF",
  "key24": "UUWEjmqK9EuZJKgSPkvRVfh27xww2tfK7fzKdhUWRfczYpZiRD9higMqzHK6ESgZ7qmPsgckp9czKbsDFx6QxRV",
  "key25": "4FfUdTyncwuH7JZ7dQsYvVxTpw5qFfEVhk1zeDTmwuoFf7sdVC46m57A4u35iPmkvgR2frgnti2WCtUF36eoLb8m",
  "key26": "2geEv3Yzjo5eaJYdCFQd1eB19Tj4tT1DXKhDTDj1ZDXbx2dmFV6gDgDQQcYVhMgKoi6bF2tkQPnTMDYsB6c3HwRH",
  "key27": "46a1MbcZ8CCq2yRhs9jGG1qneAXBZfLEKpA124mempv9zGQvfsH9Nuih7bQw2jCsjisDtYEB82DpF7GSBGTk9Dp3",
  "key28": "3utRcHY6EmZBzGD8FL2LQMM6QuSENJD7E4Z1wNCGNtQBnv97wBwRaBPu3SRePaGVqhU3Xqgcg2FFJZooBfhdHRmz",
  "key29": "23EgGkQvKreFrGsbofzwEBhxBKTdEHXUerA5Gbfhbeti8nEkjvWz2Mp1VUpF7iPuHiiBr8QXXpwBU8xqwCHHSJsV",
  "key30": "3ntte8EtvYp1QMvjw9LjBab8LVQyxEDaKrkZ7C9Bk2ufz4w48S4J149FVQjgxG9Ymfh52PRjugSe2MS1imccobf7"
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
