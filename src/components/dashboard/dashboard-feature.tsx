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
    "Skp2YdtMusJcULcsSgoxaz1dRANoKD1iauxeqXsggtfhzAM4qPAVUESng6LNmNiHjvXLPYdp7EJs3yN7rHy7otU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQq6PmCBGB26SQkZC3R62A1KnpbjzNobpRjZcPqkEScQ8ZVYJzYDyAiVoNbVrZRhXmBinGdnVE6kEZVKBxAXq2e",
  "key1": "2Ugj2TmuLwmAos1A3fSF6vT8MRNc2zHy7Pm4TTJpjrniNySf4u4P1ACPXpw2mgxrFijwkfY6tAoe3kKPjcJcvp6i",
  "key2": "5iQ11RbnPMn27SFZTkzRTVfpPUjyLVMjEmajr1ggGaA1n2yvQpVzhN3K64MkXhyMhE5HNsVExLUxpbhLjhiPzFjH",
  "key3": "5jMGz4QFeA8ktThmxr35r46FVc43TPQRv44XaZSatxJuCyRPWAUMCTs24Wd5E3qLWsK179d4sLsrX69428zy7MkA",
  "key4": "4jM3QVe8ykYF4KHCtn9imo2bRutb2apa4mkdb2AU88shPYx4stXoZtgja9W8qnJY7hw4jvL8sRvcW6D7dhcMbVvC",
  "key5": "go7C2dzP3HNL4q5rwUMTz3QxkNzSh64QMhfEMugsgHKgeQAf1uy4qvow2EJEA94e6ZxZSdNKE79EgnWQ7n8ACij",
  "key6": "hDSCyZBBTTEFUyobeCDWu1r6JGhdzGLAz81v2UdiaerQSBwx3UJE4eDz13ChduPEDLoc4hHtkPCbHuyx1tmBxC3",
  "key7": "4DYAkPCxxAhxnQxPJHK7zo7P2CuYEcaXxnCEYy2AepRQfrv4qv31YWwvUjExnVTzWs2UTZ19EQnvYfJMbZk7CwQF",
  "key8": "K6zjkh7YcWh85FUweDdyK68v4xiKtpUa7P3R44hwBHc3rQieUM8w14Upewyb6k5G4j5WJn7V7ZZEadQeKmSe7zX",
  "key9": "4vw1jW6QRxs9QLScKj2yjWvbh8Fq9TpqiTSDQc272VZ4gCg2P18JJpy7JK5GiGKMryvHCrfof7e2sam1mppL7ZRQ",
  "key10": "289D6QwaUkhSDo7uQA3dkq7RcYzhS7hpY343pQfm9H4CoSg3Dn5eCGUcyAh1V73fYUcaA4CKXja9ztnRvnfNqKAN",
  "key11": "3ndmYGAFivHqbxDjt42LLyeYn3bmec1QcA5aJjQDoWKwiiLKaoAaS2wMo9xfggXV22HaYbAVj4CG5gYQLtb3VGgU",
  "key12": "gnkTMJ5whzXSP3WYyyhwLuvXKFbvF2ojqb7MPtULbCnwN4hXBzEwJ6W3E6axmcu1b5NK6kYo7gezcx16NowbReV",
  "key13": "5sHZ3oH7JyJpRa4JAyDmxMXwfzsXz54YRbw1DTCbJ1zHpsPh9DeRtcCmRnYTJK7x6sRnUpJ9CBvMGMcLK2mJLDKW",
  "key14": "JsTnsSrTa4ZCT5WQJxETUBAKLXwB9cEoeWds5PJ9RoqsEwyca3vYYXy6AuA23r7QUfXpD6HHZDQM9PBYjC4DazX",
  "key15": "3KKcDAVsR9UgvcidgsPk2ozJVn6pJVrraRs2UkNYbk7ZaUgkatUYjf9CRMiLjC9DAXT6PAETBwKyW5UHQzyuuYEG",
  "key16": "3nzQQwV5oZS4s7SgWZCAkoRPPmWq2jtqVcvjR9TcZWxGw9xenycuo5z4QFzwqPNag31M86uxJmw3tJ3u8v3a7dWr",
  "key17": "2KVPr33FsfnNjQpgiL4KJEJGWW2n9bdZTccxpwAEUPGynVPbKFMKVS5XgFfqZpDjD7Dkqve1quBsZ4DabfsrtiMQ",
  "key18": "4brLGb6ZmJ4Z2wjrMLu9pac2qYyx44ULvNCwb5BYgnfFhULZk2iz2Y2Z2wu6fQdjJpxi1nmDdWdj4z8RWkGfH7gp",
  "key19": "3FeENdbDrqbsRBkg8hPhvUVtZZjN8GRe7CSqUBrEPgiQZZCRQsiDxAkNLoCM64Y6Mt6Y8LJdrNKxxfEiGDtgGkHW",
  "key20": "4yox2SUcBbefAh9hWc8YkLSyudX9C7STZzqHVQA6dVXvZsAvUiegBCoQ6WKtg4sUGzZ8WPULcwv2WmnZTxdtu7dy",
  "key21": "39aRajKwais1AytJdtzP1DtJ2xvtnU4RBqqL8EGiwYojwMA2SLrz9Nv15fVahaCnbuQjyEtzyXYjZzcphJy6yvab",
  "key22": "5aY7a34Cg1Ek75rSsDeetGYnxnJGvdKt1xM3Gvvh34RAm9S4K3YgMK2Udp99tTvgmbhDHt2k5DbyA9ecEhwjXaQN",
  "key23": "3hPGZLmcvgXJXjmxhu33GZsxxhWMbxjvfwnTVUyNZ1UGi1zLC8wCrnERbjUHfjDrMMez58g2JKLUXsbgyvhjqa91",
  "key24": "4e8DsB7KzD7jRnVJdxRXqLjk6xJE1A9VWCqs1Ew4bjTRwKFm69XnoDynSuZAYjzXFmDkUdwm6Xrp74uWiRG26V9x",
  "key25": "3ZJRCi8Lvi3eXfDSAH3goNUX3Z8VsnfPJ3kKKfcZKojvfJwgYicGX4qTNeuYPmf1TYXrS4GqvnutC2Lq9JrAkgpi",
  "key26": "34YmBj5dAzhNp3FcvbRCoRMN8kXKdtPNr8oHaXBKPUu9SSUqqjRe5SrSUrFfrwxKjYK14xt3ynoTGXZnY3hLQxHB",
  "key27": "5DGsTvtveURrhweank2KTfkeyEtZy35KyeG9DfYcN8oxYaN8pMaqU7w7DeCHPwF5ioLeRGUA8YTSqJP2siCTxoWk",
  "key28": "EBBWCaRHipncBFEQQknLCYSyGW4rX3VBdxSNs1FXjXWk5XkAPQAmULFe3JckMb19RBjT3dbCLvLYBdYhzsfpDyw",
  "key29": "5kW9a1vwFBCUoj5JtCFxaw6he4LcvaagZ4qVauwae7YxXRyniL3LQSGZsgW52ZNBQERsUQbK1oz2mYvRUCp6oGMP",
  "key30": "3Hj1EeGbfhRBxbSUkPhzGZSjpbVpfoDRcuVkmh6Yypbn8qzsvY5css3qPENwwYrtRJoFnvg5zyK2ms4AW6qTRumU",
  "key31": "4CHXCbupG2xnfYwaC5ct3jRNFb2tf9ueSAWfeuAZyTxAFDm1kSVhrnMAGMrGn7XF35XemJwserEaRtRVVH5ReBEK",
  "key32": "2mvBadNNvUAbFqcNRj8SqkpDEQQLWZak5Etx18gGsfVY6Svyuzco9q3LgT8DCt4V5mX5YffykcD1xDiU5zQsbq6z",
  "key33": "hj9JDFjmk8cGYqN56X82h1J3HWRYVYmLMynbqSbBeLjt7Zqz7GDPoqArdHXXm13tGhZ5kwDrvz1g3znNV4D1YSp",
  "key34": "3mQEpijLzUyLRG6bKDfVKLRTYmDsSTuGhhbik79B9oqSRf5SxqcpdH6Ati92hnKBQzf2zbv53VMwKVK6FCpib4y5",
  "key35": "3GV26znexYrYFrCoZpe9dHT74MEny4YLc9V6tugURDcW9CB4QQJ5P7Wg4LTKuwEC6ohtaxnovcYpYiZT7XfmJNaL",
  "key36": "rot8hWjdXtdjC8iLgPdYh934a88bet96yPHsHXz9e6vHReKMSjqSUfASu4w7NgKqnSzHL8ZjyGcQwa9D5i3xQg3",
  "key37": "4wM6WqSoFh5dAxoUnfomEB2AuGX4uQC2yxvVv1ceUuX4ELgNNFhaQ9mgKAefM4NLExvihFWY9p3huAaYcwyyCB8n",
  "key38": "5KZrQ32D1kCC4uAzk2CHK3b72UnauDPXiinp6V2f4hM2saJGdmyEFUQMBVQCKkEiSaEppRhEy6gyoSMH94NXcrji",
  "key39": "3dXf1Tb9BehQaFsYwWPua9b8wC8NRRRr82iMis298ytg1o8x5qw6FQeaPxA1cJJZ7dj6tqqqv6iK7bp2CNN8d8zn",
  "key40": "2ZzbndVbmGNzH8vZNaUs4MMtfhQcU39y1rJMjcR98wX7t1nyJV7P5yyxe91VT6WGQGQJrUvj9Z9u7ig8Sv1K1kji",
  "key41": "5dg2gPMeD58THB4A23ZqyM8owSSUm7RqQocYkw4SjRVXuJKi6jDpSc75BLryjKqtxfCjtEEi8RyvoeXwc6xW6Lpu",
  "key42": "5FkGHVa7rQYwX6rXQ2d42qZJFNrHMs131mzC1BnNn6ALsCzotzP6rGLnZHJJdwUoX1oEFjjrvFQWq5QbrzeBeSCh"
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
