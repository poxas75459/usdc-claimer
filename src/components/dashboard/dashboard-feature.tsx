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
    "5xSvLXrXKWtKPRfXtwgAcLK1gH9ipHE4MZA7ZznD7mQGGg6EQzsayV6N2YJYwGK5U4xR4zSYriKioqHmX3k24Va9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViPxyWHGm64mUrFiLeVL7eHTeBcCgRuDrxUS8FoL1YgUmkyeiqYuh6YUmRv1gF8uAsbhG9WiXopi1emqwwFPuz",
  "key1": "233B5wn9whfpsW7fr3DKT336ofndeowhQ5GbDdGCBT5jd5M8QMv2ZP9ZLjShpcfps2WpQhhiNsgHn4B4bhLoKjeU",
  "key2": "ePni5z1X8ZTVzWa2ntYjQeK23uqWBB3tSdJUFL4k5sHBvyTSgku75Yva6ETfwrgQ9yPZYNvzCmc7YfiTm5SANxK",
  "key3": "4wjLKm794VATpd6onf8LMeEPoqScWWQAis9UwMqT2PCGYwbFia4FJ5xXcHVT8LG1DPksQrv5ZdzYqQCJCgJM7HfH",
  "key4": "3XYKQcnCSmYPSRy1FVz1nJxEE1N6pL4gtW8HM5TjdyGQsfuFRPyE2kSmAvjKQMvkrT8TTg7yeKqYhMZL2XEh8W8W",
  "key5": "5iJx8NNDKsBuGaafBnytBz6zeu19yzJJ8Sny4H4JjCKonvfzA55C5CEEzifw7ow1bLkW4AqCmCWXvisZ795Btc8Y",
  "key6": "2dMav34GXZPynZKEcLf6LgfvEShpzzTXJQuweeCdygSgtasZBmxdjBYPmv7BmkfpzqRDsQ3yMwQJVRg51Qc9yCut",
  "key7": "39ft8sya5rphpGirvpZq75pHkRTbR2BSYebQS2Tgo9dptEJ8LFSaNAHrhvWjETjT9tm2soSFRHdWUT1DPGd1Ee2B",
  "key8": "3cE1DtpcZbXteXJ7vtzrT85QQa6piZM2VfjEZVnJJaP6PDZc1SCyzLGrMGaMco2vnk2muuAz1LteDi1gWDPW872s",
  "key9": "tDZHpM5NqQjMRHn9APkjohzR2D4TFZFuvLLmmQGnDFtMj8c67hTdexdYw2TGokprUvCwjSCctK63Ek88UtgtBP1",
  "key10": "25dkVxQ48Jfdtd2q9NqigZVv6kM9vKH7zpY5J54JJjaGV22DvZdZfxkicW8phYZgQVthRrjwrJpSg6WNmDdCavuY",
  "key11": "2EcdsapwfCeqJ7eV1HdGs43njAis2gVuBLLAxn48BKr1opVuTqPmtZZLQzn2V7DS7Zs5Vs6sMC1vNhDu5tb2V8nx",
  "key12": "5TNc9o4G2q47obgjZQbVh7FmTczgHPqqcxxucQkcYzfm3A8QPD6kHgyNE23szLFnBYmEmmWKiM7XwnoSnbsYJEu",
  "key13": "5HioYxgkx24Y5apPVsiAP7dfp9upJq9pALWZEBoxFeuyvQt2DcCUsRFHqRf9HA475w7KRBhjYQecAUEa37KMyTzV",
  "key14": "56HZfg7jjG8aUHsCKxA8zHj1P62RN1ucQPKUkeE7JWm6t9yxgFVe5N7u91EXfFT1HABE9cCUA3RebkyjqsSNv5nR",
  "key15": "2JunN8Z3RvmRojGKvtqTUTRaY2Tx7PEqjdP7peRn3h6RsWcspJXN26a8iFgc9HxSwBfWoybQc7HCd9ESWDA5VkZ9",
  "key16": "2LqsMfwBsso6ZLznjBSnUeF4N9dmqPYovXZjnjoheZT2BgZjHkuququG2dXSZgzcDY8qNGPnqg9HJokyvVcLBcgC",
  "key17": "63Xem465D37ZyugHSCkt9Fxr1xT78jhwvs32asexYUUmY7ctQ6XtHnvpAFnQ24pCTTp5jQyg4QBrqo1zb1p6KH5Y",
  "key18": "237jWHfHWxuzXocv7kL2WGYkYJadq4zA1dPFtXf7FZ9btFUALtGgoBN1fNNAMySXEzvcqKV549fQXGvHw3xh469L",
  "key19": "5juoKzSgQhmsBzCpTBA4EWc4ZTMYiGmKsTfhYpaXwd9NCq2uEPFELRxUzgk8GdJK2eXrV7z3gAjSSh7Zydy7xTv6",
  "key20": "3hnmpXNavdASTGcBqnBUZxErRP79bxDAh8Yqdw1qWhqdn1sqy9UKnctEo3W9fgLru5ziDLbo3CwcxLN2XxTy54W2",
  "key21": "6yQUp9XusavoR1XqKUrQYzdjVVuH4PygQrKcSpJ72fRtGWRoZFUQ2vRPAGnFUFm1fwQvErQmY7m2ihnZEFxzF4B",
  "key22": "3U9kxqad1h6ej61ZzntK4H1WFEpv43CHcLspCVeTfHiQRUTVzBT8eCW5WPqhU5bANZe6Ye4G6PQ88CDWC1v9wSMW",
  "key23": "LvehuXtHEiWGnPBom6XAoKQ2hfhHZBDRckhqSW81vU76MArpyy84PKAbFLA5xKvgdhJxbsr3brgSgZVKpiXebsR",
  "key24": "3iKyKNXxgxRk9S2vVEUJtuXqjD4GNoDthMXFbcECKcsQJkMDpvkdFXPtnW4c3wLsQx1C9Bb3VY1xCAz2gcYN4ARL",
  "key25": "5meQKZCamm6rPZ1vaXgKFub1s48jpKD4xgY7iEFkpUVfGxURQBxd5DSjfLiQ4jbx3Kmc76ncmkXvjYsUa7biZqDt",
  "key26": "5gS2y6yGeYjbJLtWsDK9Kb1ELASZorcF3ZGpwnAS4eGHzjjgRctc52bN3tWu8MS3HkmX2VAQWy4j63Mo1aqzGELD",
  "key27": "2akti8EAttZEmdRKfAwHzdq5hwoijBCLDtjjJxwcfsW49dyUzujxkdbm26mQPLn9bRTsuN2hAKEj92hM8e5BhXta",
  "key28": "5Tn5cTpvgugUkDENuwMqiaM4J7pzcd5ko2CKuUERyNkH6HHmT75Ag5zFYBgg1JK15bcDi2HX8kWhzDneiN5fvviz",
  "key29": "5gDTqqFqg4mKfNontZHxTqfFrjruEeZz6pT8GmYRf2BUFhVxbEazfBXQVTP5zuQe8UzLnGwKeKRzLkcXXDujkQbq",
  "key30": "5qdyzxK9Z66DCqMvd5cDY8wjDQZyVTfj6SVm1CzCeQNpDqBD3ph9jTcubkQy3FkRWNLzn9y58ngZKGrkfFHRcG9D",
  "key31": "3PMwJLLhqmgwCw9gdmziSaeteNFspovENnkMmzxytGHR3sRJMUYDiQhN2U9NaCXiJL5JGs6XFQjtcH1SF6U5HF1K",
  "key32": "3mkD5HVKYRXGBUgegLzEF3F8aiVQtVmiX5DfPCqfwLyJdmfSaPdmy3LdUmRPxCVRD7tbySgFUWHtu523gww2FBdg",
  "key33": "3QzHQYrYCVkNcKKdaQqMZ4AFYgaCfqNLHwZium2mZUYC7fFGVaodg1ZULb1ozHoupmzfCQDXzWtoASqPJ5fcR6a9",
  "key34": "251bfdAjHHjUzwFFCh3DaQyeJXWFHRZbBvdWAaW3UBFWGQe2hLytmxHKh5hXBSjJmg9tGkqSEW5KwFSGwdeoraew",
  "key35": "3th43Qb11MhNpzFFxcJEWRutUuKkVKdxKn559HeJe5WTWtBbqKPXJjkhaAn5uRTNL9bznUGxCiHGBnt1Ta7GxndF",
  "key36": "bnGjtJYsGNvHGtFMPoMa5qWBhPUJk76wbrF1j66xa6KgochjmP8memRabnT1ucqrYUPQ9EapkVA6isJn2Wa56F9",
  "key37": "4dDV8aD3aU7k2hSjcHCMzcYzXkGm5hDZaRzxV8Y7gMQeJjtQts13A9fswecUxYd58rSCfbwr7yonJjZZwSej7Gwo",
  "key38": "5e6pYncx2v911BTiddQjsCpK7FFJxcHZuc1N9dzo4mnZCyDy1VqoBcWFXVdpiRb3M97FiBP2sNFD6Gi3JX3XLdZx",
  "key39": "2k7TLQEBn4uPLDey8bLrcrtNq8ViMMEYuUDsoAUjinFdoDWhLRxEtfjZx7iUfc119iwFiMV6mSAwS3xQ4H4ddbsV",
  "key40": "41K6wxxRwSgW8yjMqdbKtquwTbVqTeBbXUAbL9yRkJG2SvpmSfJCAQu3d1jETBQQZnkzva6JL3gMgSwKcyrLvuEN"
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
