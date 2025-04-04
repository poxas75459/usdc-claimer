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
    "42qb26SPz3foj7ovjWKGDF9GTg2GUW9jMAxM2hXpmEuXUqJve7PGRQf4Q2Xsb6bVG17J6foPACNjTsfb9fsobPMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9dQepdB1CCJ94aM8hns7WQ7LyB2YHTT84Avs3uEDFCCg2jreAv6aegsNpoDU8CuP8m6tBeg2znDiz1JDcD8AEJ",
  "key1": "4chBsPX42pKaTcc2SDSo3r1ZnyzniTUzm4tVZiFeB2UXc8Hi9q51yWSM3XME5zo94HRxubHhRMa1A1JYDTww4JZ8",
  "key2": "26FFmahPZGHwZ4oLRm6NaMxR235pbXpoCfZMPpZptN6AjaUNiyFmaao6qRoYkHt6E3ewkyiZUuZa8t7a24h4DZY8",
  "key3": "uwoyRYkN4UwjejamijqdWcuEh4g5qxFo6Dzwsp2utYX5Mp9M4cw1RGQ43Y7GDhD2kpb5eZjpvdfU8SSDES7hP1M",
  "key4": "Xwp1ynBDdjDoQtc39drUder4WuNGnLWDMeszVLpTSBc9m3K9pSoBZew849MNKfnFYjpfev7vfZsdXbua3xitofT",
  "key5": "4tB99CHvMLWbauj2z2guNFvouURaA4CizhPntXRh1Vhw2Z3RcE9gszo1ioni2ARUzxZxmCQvhLL1LEcdyphVobgG",
  "key6": "4kpqzdpc22Dnn9eaRBZEm8fAx97jTYkCbxes5rj3j13PEjUuocfmCV5gaWGG7tAXExv4HkJjLzHnW1uUSNv4Uujd",
  "key7": "5bzeqAFjiQVGrzWqh6dzEUkAZ2kyBWh2FMECSKbBH3CcGE1tJku1bUc1SwEpFgm7ig56cL1Wp9Q1fZMpQpMao3rT",
  "key8": "47qwkuxE32ykpGQFqniXf2n4skjQpPrmWdQwHbKHqhn3ARzWcN1aDMv6U7a1m9x4y22FirqSvwQ6McTsdqzLuhPW",
  "key9": "3H29ZeDUER698rAKNDgz5ZeqMcFmGV1tiFQ2LQKuGY4aKZrnWvUU867zS4UJ8PZje7GahaJJk1AoABHAYYBPdNz6",
  "key10": "5UV4CCADfpRiZqESz9XLZPRgJV4NBGZkSQmDnyyJm3Rgi174v3KKTXCmmS7xPw1C7gqwUSz6ytFy93me5jAuiyJA",
  "key11": "HKJSyXENjeZcr1pHFsSFBgqsHEuzttjBhdt1e6sQfMPQ32wuwGbgjxcCVF6NkbdCTbYSZedTLHw47eBCs952qZg",
  "key12": "3H8oQXYWhTYBktbP4BRxY733RjMkNBEHkSEQ4womqh6ddvjAjkkiCre26bGFD3mv17uCt7QQ1dySoi2jbPw1D6Gt",
  "key13": "JnhBCuXivNprirpBV8dP5SFRyAFQ4ygvwp3LH9wtc2MfUqt9idxpCtmR8GR3jjLmVaSVgwXxQjKMMPNG2jKPZup",
  "key14": "3rkk8KTrUwBW4vH8JPQHXycNaz1dYjcopdDL3tNwRBPFZDEQ2SmBJ9AYjfjTB6buszz2mwcU7GNVSKvKiknS6bhg",
  "key15": "J97avjf6ae1KEmTvRhMgJbjTkMsP3179uuNec4zi3u9LM65UHehzwDaEfZGrfFX9rvyHKeVgCX7j3zHqhAfkcMK",
  "key16": "D1AHTRTLcJxHwokUEGJVvW6QLyppUru99MHzkypvkG2CytMkjxwgmoYxmAve8gyysmhMjjLQ2fHah331EYWgM6g",
  "key17": "5C6m6KHK7aoCzyqwFPye2bWxrL39iiCjV9tPBNoanKYp9jXy7tBZqHRu8rdGVXRvC5JnS3cmZosTqGDBsiHaL599",
  "key18": "2prLB7K6raP6A6qhTdg4kPqraKxhUrHbhSjMHs24Aj2oY8dZVJ8QRnjUNNV6yVL1dCGWgjSmVvwvyfGp6yzgLA2y",
  "key19": "y3uFgohTB6MitwzW5snEXU3tQdf3TeFBCrEpQNEhC4fNs1ZWLnDUqTbLnnUaFZwoVQ5cuetNYWTMWv54i7iizyp",
  "key20": "69CqsHV4fCXVxqH1q1ybaJ3fAbNbbu8Wh7rD3R65kCPuWYqXmiZDE87higRwBLGiKL2shcH7yhA9Ctemdms2xWb",
  "key21": "39GMWTnkzEWRi6etHxHVoAcpoMJyd6sc4wSak78SHkeXNaTwA5zSggJ6UZtKwizHsVviULmm1E6wxEzscmy6GySo",
  "key22": "UW3JBRn8hiRbho3hbYJREdDeuL77fCsh61aDDwrYXb7WkFpYJZZsWFjHsXhDrY33CwdPV5sLJkohLM8CQ6mQ49z",
  "key23": "4X8pEpzqKSHFBTiBx19et1pJ8xQNc1oJRSRV69MbMJQ2opvTyFweBFdy844gEcKqdjT3kednrscwjv5kPfHBGCpv",
  "key24": "3TJ8kEHNteq8wsRY2zPQMuU8hKUHYMHnUdYfV7krKkBFJ4cdPsYvVUdpvYADep1oyQSp2y14TiYTmPgK1br5xhPh",
  "key25": "55Hn2aM2fEmfSaLdwWN7VrLcnAkVRTWBCqGb3E7a3Cbo7QtarGwWVcc9YJ2L5dQaaSphNduKsVz2Ht77g3hV85w5",
  "key26": "47QZ7WNNENgrDn26WrHvyhTMhMFudTLoBAaxn8hu6yf9s2jRVfxhgDek2JZw6YsfNFrct7uwGQ9Eo6HTa3DnXR8b",
  "key27": "dhyorsiJYknekeNrjWnXFgdsNq9z7iU1uSuU4bA4h4xJPKKpiwBBoxdZTMAjkmwjB9i1BaP11vzCVYK3kMzkCAb",
  "key28": "2tpEH8Vp3GnxmHJbfkzJ1Ysz5oajsKjsuSwHnaEgUw8y6zazZZaNBjocGU1NVwjZCbmmyTzqCFSyJ6K4Ra6W6ZEg",
  "key29": "3nWW934uW99jAJiVLxwLCHuzFeT9xB4sVhekP57VNaTPe9Q4gJr9fgddjgA7CYiWY9WetWruPZXXsduV4wwiS5CH",
  "key30": "3ZHgaRzzsFfTadUGZHcmzfxpU2tmskC3VRr4sZGJWy6RbnhntNdGMkSm7AHnnKy4TT2YU4ir4deMpnunsMVmqewt",
  "key31": "4FMtwcytr13zMuLkTCyjHNpL2GbacqcwTLEZMYQGMZBcTTLrdds7UUcJJmXqz9DPAozhJxYCPzuBjkQhrtpeoCGN",
  "key32": "2YQ9CXCxZsv6mgDf2TxKBTRdQ2tmCFLgYHvrJHKMV6H1MVkhSMDeT2S7MmkRtgAwoGFQ35sRKuLbgAP1FVZxLmEu",
  "key33": "61JjbbQc6YFxhFpvaLzG6MvbzRKWhammbcx2k3Jxd4gNA5KsjD8w6XUUDvPvcfoLiYcg8Q9sEn3XLMQCqzrxiDKW",
  "key34": "5JEdHtvww7mAinCQkBxohMjv767pHUDK17qQfcuKqhFvRyiit4SWMPsyEHeixc5EyHa7LhwpjvkAY82yrebkcw5p",
  "key35": "4KiPUdrSm5Twe2i3joCGC6x4ENsMGmfRvm1aW4vnp9v3QnfsEu8CvsY4RD8j4UsDb1X6qLE5EX1tQPmxAnrxUoG",
  "key36": "5XyqRhoYYuSSbsLoxucQ2NMvwXkMi2es9BPXPc8aiHmnXjF5FVQKs29fA8a3ffNHZHaYUii3SFoN5k429A3gQihL",
  "key37": "45oLq8s5jxPZaFguiWGzsRC44VnyYrnq7Qkr9HuQTG95GAck8r7rmJGkn6J7q53VgipZ2MkZGX6B83BGTEu2Xtqy",
  "key38": "3X8YBijWebRASWGhviucQPVCH8RnF7aPPuE2R5oncUrD6ZimEdrijavHtWZDZJppftxE8pc6uv3yiuUaJGu49QUX",
  "key39": "3PHeigW5wYJwXEPH3xG9zQbgKSoiSGqEDA5WpQ258Rg4VUmMR9TuHKLJbJNSs1o4QoaZn12AHLW8aQow9dHxXJfT",
  "key40": "mM8seLCXjPHWMwChuQWovExkjLdZinLjGjUuVcREu2Cg3z779e8kNRaUxqB5oAy2MjDffqt5ttjueZM7kiVcrim",
  "key41": "5xcU1BpfKEYFsDw6gAfWaV6SDNLFjSAyNUmvtKBs8xZXPfn14GfnKDKFN1hp3ofEnLhrWybBTBjY2iezc2nqG2Ch",
  "key42": "5YhdBrsrgyRUsV1WbBdmZttYEG1uWboTLwWLvGbiX9r54BLFGVm31P28h7veC2j8NrJ8muVRuRCibsd6Jng7RbYy"
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
