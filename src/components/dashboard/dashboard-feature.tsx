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
    "3pSH1xtkirdD7UkFZHRZK76SQg6FB8BAaWtMWY2C85JpsUBsxHkeLyFyQ83b7HB1HYA8MHVFixnKkcDxQB7MK7zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aFTWqoDTyPeK2wiwYSEbGjwiWSuXVV7XaGBN9bqvpa4rueDbayT8PZoSxzCkaiKSb1Kv6RaoiYHQobVCH3WzTuo",
  "key1": "2gKabGhuhjGaBAij5XhkZU8rm29tuUw8Rk22R1r3GV4zv1TBwUFSdx7bwNhvXSJcAiiuvohVQy931qaTGDtjwqRf",
  "key2": "YndJKyZM4SmzUMXcevLSK3SSUGFvWGGToGbDxnW8nav1a1EeYsrNKSY3NLtNZvbLfdnF44U9B5h76sqcqTzNf3X",
  "key3": "5o69eFjjkQ2GWJ6xgRS8ktXzq4oxNyiEWws28yZwhf9ZcXgsQvGED8RLY8AinN3WAWy1VTENPNCGCw4wBq7hQfLZ",
  "key4": "3VkGfVPhbwrS4JdLf7yWXa4HCMSN1MMcmJBEYZjqjPcfrnRcQt1oZ73sNWDvVWnDHg7FBWmoEfyNx6madf2oF8T5",
  "key5": "2WacijvR8KuZFKMUo3S5ZS35Gd7fVagLNevmhMXn1CU5KMvhPuXL6AfMVdWyApgehKMWC9iP4kXUB12BoFyhU4Yo",
  "key6": "5ST4HvE9QjWvLmRWBrSHZgpb9DZwE6QhSaXbenZ69RnKpNB8rvFUs3w4MjbRM2kpBoVWvyRE7AzbJ3cs5Tik3fwc",
  "key7": "2wSxun9oWJryVR55x68EDyhfSsPzPVBKGKChNkJrSzt62dCTUdUTL22ZHmszRzXoJMtoczQo9DzhiWfrgDWgMHnk",
  "key8": "4rzNRBc5PCUu1B5fmnkjpsTpi5nGeSd9L3HG4VVXz45zHVPkAxixz9mYiscmRmMYKWiSbRK72axfHHLamLC1KnkG",
  "key9": "4BD3U2GwejXj9rRgFRTN5WLnzmGjesXtvRSXoJX6oX3WEKC3tActPDUWLKjF3VzkAkk9WwUTszPj16mnfjpSC87G",
  "key10": "oxdx2LSLaECKDPcreq1eMj8Dy1om1CJwffRcNGMhgjtcXpFKvcWpCveLvmQoTQ4BiHaBN4AfkMLXoEZsjN66hwE",
  "key11": "2gXsPQNLdt6pk6KBeUatggLrkUgLrQdR8wKUAGFRQCmqLmYXu9HZNjfFCoPe8s7FKVWN1gpGAH7oaSHQ7QRzh4ka",
  "key12": "qMtcUPjwz4jEQ68kbRdornKngQ89Q74pZPhQq85drFmLySM9QMRcJa34Fd57WpyWmCwanbjEnheWLtRCsA2wMX8",
  "key13": "4o8S2Wd1aqmTKeWRK34uLpKqLZx56RnpTBiktSjLYEUbkd7hUra4YfPCMUsU3ynnwJ2zey7G56VDSfNsDBucxKEC",
  "key14": "4iDMKd27h4gwqt84NFL9PgYytZaKAGGBaMggANeS8gemGp52AXM3LuV61VRLV1NhGBhnqZqKbnjVv13y22rRZMa7",
  "key15": "5ywoqfpbiAF2Yt3SFw4yDe4dFShpZvYK321dGRBmff3B2SKw74CK9c5dkA7x5i1eVRKeGxcNVh7AkmhseZYcyaSE",
  "key16": "5QzBXEQyTBrd81BTAF8KqShAYfEV1gE3dReryVo88Hoqv1d2k5ch7MnVZLG7wEYUh7fWf2VQ8W6cB3qVmeacz4gz",
  "key17": "2kLcaug9zN9Vgioh9V9fXVZFkXp9dzmG9GcJ4NYv2ydoGa9nHSf1oKwQVjtrFiczYUV3QaHD2DUR5C8wvZG3aMbr",
  "key18": "3QJELP6m9eADJfoZRQfmjHfG2nRjZ88FzijejfFV9jsHFGybvoVaQiMgnqS2m6U6Uq8vUoSih59VMkSyHxfaksnC",
  "key19": "4SM9rBwEjf8jBpNKCZUL8miavAe48LUgk3VC1XBGP19C9RPTLLzE5GE6Sh5eHRV5A5i8e4tCxVzMcKf4CtMxB9T9",
  "key20": "5cQiWDWTNZtbyusqfRVP5sStCRREw2gWLXv23svog7KUBTuXFZfL2pjxHqy3XWkxYjHrJyewPuCAYQNUg9i9sCiC",
  "key21": "Uakx8K28pjfLKi3N21SKeTcAHNqKose4BCmDXhs7v6nNGho9xVt9qWGNMJxyzmWnUzU8YFK8zknGhhyASdpJar7",
  "key22": "jPUUSVxose7H7pyZ9Rgt7ZtS5BK3f9njaSyvFYi977obky1pb2isGkABrXbFXAireJmobwJCT5oEaG1n8gkiqnR",
  "key23": "34H3fwebV6pE3NQgikwvMW8K3PzJdFNFefQ46Gq913PDbDwFeP2GEgZxrzD6x5UxeZveyLWw73b82UvpvWLrqmPc",
  "key24": "4gYJo1ihDoLehKuVKkVFFiXYErrkw49LNKvZzyj9kQQJMUhQ4PxDUbAQdx5c8EefbpGEjF48EQH7rNq3gQwaZZiV",
  "key25": "4v3gHeaoV4sNSCzCcBS8pCaGiv5NQ1mvdenhf5LzSVUbMvRqxwPdmnqYZT7o1a5ukuPuazSfsimudi3qnHhevRov",
  "key26": "3TeejZeXTtq9efSqbVaCF2QMyH9EwnVvhbqaDJ5RMQMDK6CS6XMsApNjnNjmKdonQ1qeaEJ5D7huMg8MViHkA8NE",
  "key27": "2u3dp1xbMkg6BxUp5SxiK7s1BBFzK4Z5h56Sc9rPigBELwWTxX3Q9v6AsVn4KANn31Krc6KjekXFdMdXgH5gd2dT",
  "key28": "2HnpaRjQKU6VtiUYpuq6EADGxaVvCqfFT5arvnKdBpo4SAf4aUurzaS1pZvavTqHt61FhTdHhQEhGCyoops2DVGU",
  "key29": "2Lx8Fcnv2BdnCXHeoLyFrcLZQUdfsTQ4zYLbJ2dNe3LQDoLnzBEddyqjx9vwJWmCcis8YuWTMcpuFbhnTRV2WUuW",
  "key30": "595x58JkXyrmnx7bFhmro8VsZx2RWZyX8vXwhDawdfxEqq8kfKvAwddB2RUTaJ4UgdcmGdhNdV2HYwM3tJ18Eo8S",
  "key31": "wrqX7NhF5GvRr8dxwEsND5mLFEqyVD6SxGaCVzGnT2DLdjnW6mcFGFHjjC9X3GndhnnvJhez432V1kiRiPqkGgK",
  "key32": "nzUbRXwZMcGXQy2XcoixdnmEXE5KcPfbNN1j5MuuGFMdz5BaaNgrJUZgNdavmHXKNW61ATnRBtvrTcAQFnSYbzX",
  "key33": "2GtmnJ64sk9gqFokoRDJjm3mNFH2zdUoPUc2fUTVu2DBu7zkQgAXKe4hzCduaJiPhu84xAbXpNFc4W9rU8wbQvNo",
  "key34": "PNjH2oJ5HiFHBdUgLC2aAsYCGsPH9dfKuAcyNd7tndkdX679iBkgvyJyH9eVmSXvkKzSN6YSWTzjqj2kQruWuGP",
  "key35": "53wkHSsT2zaNboULEyg66WnUTG5ocA5BGXDHDooQm39b7NJXtEWHEXRrzdKKdz41Z6ikkAH4WqG1wZtsEmRpP5m3",
  "key36": "nJEJAEMgahSZ8TWoyYqmhczhANuRAweM8VJ1UB8rsUFZVYmwXsedMShBVfAAU7jS62KJrPiYpugDQx6Aost5agU",
  "key37": "3ZTuTbb7KCd6xRP92Xhxhbb5aqCeug8vUbxtdQAgszXZL2vwF2n9cu2ych1epmViQCedHthbyDAukvixhzkk9SUq",
  "key38": "SGLHTMoieyt4mKdZ6mK5RhhRcF6spcVBk7kTczuwDSkUBRzvthAzqfe5uW7CXJiRnRUpc5WBSj5AkokmYT9UN6Q",
  "key39": "2unr31WA85UVWkhCi8TrAcVRG8oWjdoYqN1QeBSNFfCV1BbZw34GhEwSUoSBeF141uokN8azzdQC1vrkhHeMUp9B",
  "key40": "2wPuudDpDF8R93MJhTU25h8mNSGDSrFvBGHR3yf2Tr2QVUoxKAFZf34fm4npxqEJCwBKiDHpJh2Y3dePBM9rrNRt",
  "key41": "61uYxx6DB56R7CKmmu2R7du8EpvgsoAs35fAXwKoS1ZgTSux9TY5FmKxfyyVDTDAacEo9MLf4HWhUMotyiVWKLbR",
  "key42": "3ryD8YKzJsU1qkrhLkNtSm6rmTtnhR2j87Q3v8psDay3YJaMFAesrzeoUA6KpBuPZev4WNUco4BiwQoQnasi4SMQ",
  "key43": "peKfFwAiTqNgEhpj7s85nRttJbYQSVqosa591tx9Tn3iTKt1bmHazG3XeTdz6ZScm5qo97dAgqwc4Ery1EuZbrf"
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
