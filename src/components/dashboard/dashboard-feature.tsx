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
    "2LRHJfq7FYhhThLHNF4upAc29rqAfQw7py4Fz6AYUA7JRaazWz2Y34UKZ78jUdQbmJMxMiPtcp73jBEg5ueAzxw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gWLUBafJyFRWYiZTKLdntKD6yoPdcDzhqciopMkRG33tvk6HzJVP36b74SoRVr2RiD9eMWg26KJqBswARLDk6C5",
  "key1": "txByZKjK1Wq6ERKM9YzaZZiF7yZV1vrP7BjEQTppUGJVYJVJcs91gfYNs9uCPxPjop6zcxXkgw7ib1bkf5ttUB6",
  "key2": "2FVPss3z43STqEYh6ZnUS9Qty417FU7xBw3BbHQCA51mzz5Ayvu3Hybw8uJ75ciTJiX6RgwmMVdPQbrYysCf1Fs6",
  "key3": "GKhMsaU9WG5P7Bp4U4BG8ECYb7kTQcFk1xXaGSvYgnkB9A695782kHchj128e7xfcbxpzpaQNH3W6hnrHnWhZzy",
  "key4": "57o7tGMMCuFF7TNMC6b4R7C5fQGGSjdXJmxNsaZPupiFD6qXLyZetxDJPFWaTund5aFYKNyVtGGiSiS3Y4GbjZoo",
  "key5": "5RbNVfXJiiBCtcKA4qrXJeRLHKGMFGenzPwSrL1fBtFM4S6ew1noHf9AM5wPSAzbwrPqApBFzLgEhhnWEZMq67Jb",
  "key6": "eH4xgDRQi6M9cab6hDtN1JSWd6RUXPA24M6Rf1yEUka6SsSWPUKLuuiP3CQofbyVut655hDtE1HRrFTJrcreXxu",
  "key7": "dNpkdyCS54Fuarpz9z5hDa5FV6aJyhVhie1NwU7S77L1nFDiGNygehnb8pSSexPQiBEb6WMUHWqzGe8WGhhbGmg",
  "key8": "39P9gtMVAdCt12R9JGsRXyD6Q7YhBJXZ9JfrDosYzts4CoyHF7niG3Nzn3xaFfrFF4ED4V7i4kUPakVGJE4mfBxY",
  "key9": "Dy3WLYg72XCkgpEX4ZQEWVQfaqCqvpxKSJpUyAbGutuTsHLJ9m1kd3BKFCHrGnSek8oaE6H149W25NfjbDxFdJh",
  "key10": "2hvWkpkdoK3Y7f3xxGmS6i8bdnX4HRwgYFVsN8F7AnjpmUSnDG2uuTTyvJZhrW9fmjSaKgNfVFhb87zK4pqaRiUz",
  "key11": "42bSFnpBHGiqUnZDpepMbv8sRGhFiT9d6Au7qbHyLCnAEhJMwowNAUxVHWpSArcbN6y7Y7Dy7UH9KBF21bzgzPoi",
  "key12": "jzBMdjrYzuW3h43hDZk1xrPt7S7rYpTcD19rVMVA6umoX7KgyaL6rZw3dv3mXwmkZj7x2ANYKxnyQJ1xU5zu9P9",
  "key13": "StRB9mFjpCqN4KCK2ptNXhVpcb6PF3ACXn2LtpbajFzeoWk78rzJVwKEL5DHQasCQTzXg2WSMsMajS9qCNXwehT",
  "key14": "4SHdzzq9jKQP1rLRNBnpmyZhHmhLB6hkK6PZKq7FDUJhtHioyuVT4gcN8SuidsdTRZtiMEm6va8iQ2QrHhJCACHe",
  "key15": "d1xcG2e3SFRh6AUJNAhdDEkpR4dSmCdMsvTdg8zsjmDBmfPg6jgEgfTcq2amZDrZEBowPanncqRtAQXpjHL6SPT",
  "key16": "4c8a5pqcSMemS8LCHyTwdgfoCMUAhKs5pt4XtSoAYip618pa3Ucaxo7QVJqPBtSUHcpSBUvpVtqf7q1aZ18ug9fM",
  "key17": "4sLgMNvbtZcV1x3mJ6LcPdaTNJuVQoFZnpqBk2Qo2U6KZF9tomCT4g8irtbdgkQyRNWdNtDyXGHg9CDWWAuuU5nb",
  "key18": "2CBNrVL6MxzVAAfN5hxdJkfrjxibsoGZq6XAkRPgkxabR6FE75s7tPbhi3Vo8UyM513ccPW13vtQvuybV2TNu7vv",
  "key19": "5wd7BjsEzYF7krV6cytLQJRNkUkaFqQb6qFSY8c4zLydba2zfWeyU4UYqcbTtX3ECJqt3NefGVPaVssdrnHcHafC",
  "key20": "62ShV8Pjw3iS8DHoeEuA3BgKAmBvVBsTaemYem9futifit3HggxUaPV9eYtiRidKAqBU3UJM5SF6b2zHaPCkTHpg",
  "key21": "3Ei4YL9Q8ajhYrAsJHEjtzZyZbSkNoxCU6epw9RY2C5G9X9NLzXG87J2drXUtqSLHMfMuPRFqxsXtYXHXMn13vjQ",
  "key22": "zGjNC4WoMFSbUS6hdeBqeUe9ELXA6xhymx9w5EC5R2M91gUYLa7HmGuNJXXJ7YkcAuzXHBYrFkZev2n3qTCGRzJ",
  "key23": "3daVDYNBCAj7bNJFzNsXB5CfqfxhisjrrwBQWGe5BysGyXiBYoLpD6uxXif2M1HZCYpzyxkppQXhWxNFpNbnTPtx",
  "key24": "3Fx6KJPYPNjGWK7AvGkpxEDiHBZzSfFaPwEmGAgmykVuQrjnK67TsmWawFfsWpf284aELzxak8Cof54XV4fTJZRX",
  "key25": "3rn3LUHA7ND2JwJExEbnq7zKAXsb69Y92hFStP63pawzcphfrwpZnaZiNJmXHdaLNrDcbVMxpRuQ9BZzkGpjqzzz",
  "key26": "4gFzbcyvr6ehyTdKBjuhwggM8MeX2p1fLFD8bUtHjf3FfFdhz2Wxk7g5YYexko2fHJPhdXdLqg2udyZNWna7fb3k",
  "key27": "4BeNc1RGpW8DHdrwqHZVGZ8rzKTtFCGYT8Pu9iEqqLpmRkLLMpaQgaMTbEpyt6SC6NAyu4YAw7q7bH9RyAqDpGes",
  "key28": "swx5QtvxpBr7F8Yzhu53gkPjqYuK4gz5NqzTvjGWJ6MV3ZkEwNtsimKMEVnt3EvGuD58QZH9xkxnoa65t291ySv",
  "key29": "V5dp24wt1yHRsR1d7iPezkyFTAKRH5vPqqsxms7m1gvZYKZy4Ax2LogFrZEKonQGJnuy4WmrZ4hrcZkKx5mhR5U",
  "key30": "2fGwh3UW4DnmXHnpzwvx2Dz6QSJEkHwwY8N8JFiJSH1VWiZv6mqWLPh5duqfK9M3fSmpQztDJJytvjyrR7j1XHwx",
  "key31": "4P6SpJkSfBSqYFXiyXtBS1rVs87n9rNnDkzJ9eSnRtwu43yQVMr9uaChoKHRAcWckq8NPR3T5uBZDw9DdzsR1YUL",
  "key32": "U3yPEKq3CeuMeh3SJtD15Ag3UeLNH7sym9bGbnkJH4JSEHYp5iJc4yL9jQY8fQgpTAUybzm5iamxpb9cBrjSTMV",
  "key33": "5rJ7M8N48hucabcHJadVVwzmx7aBAMYLWf5XNQbuGApKMSzQARiQ52u8Ymh9t1yKS6uDHun7o7vV8Y1pYNRjtReo",
  "key34": "3Xqozs6SEJz3MZUboiqNDgBtn4Q8vTuhUnRtcPrhExuZZmpMTKXYEcqXKPydpugGfryDZKjSk4jyapmPVsDoSFYW",
  "key35": "3BwWiCebzxyCpNSLFJs3EN1PkhZTGdnSwrh74vgtpRDLj6rj9G8W9mtDvxJn7DCwWZc9kHdi9M9yUrGoca6uBy1k",
  "key36": "5Dbpgsw4moWsakpyJj86ZEtX8znSAw7TcyQCwoXDb9ghEqo4oUXEqg4YbVyeh6v3XAPoEs4VWjBkQvTNxRZSXLrM",
  "key37": "4BTsbhXmdZ2wQqr5CBuPrRu1M9avarGDX1SthLwYun4TRKtUcg61RGrJL3ya2HB2goWKnebS6EkKp9LPPa3Q8g4e",
  "key38": "2HLCoLpS7RLXUn7cCTLmioaCe9KynjEE4wW196ctxUfvd1YPHd6hRKodE9pRHGyiGe5as9oo39bhbvu3rS1SCsDb",
  "key39": "2a1WLaMek2KfqYdmEhBxb1F7nRawXmb2NioVT23vrv8LBMKL7jjeHddVLm35Yume33WoME2Xo4N31NpXqeT9nKB8",
  "key40": "4sEHHDg5WauJC4DQWobYaEegZTCz7M9FVG9qksHLjS1QWtxmMdVptLkMYCe1qzi53zhHD8c5t11LqPQR874vDFEs",
  "key41": "4qnCcMEnHGHe58pmKTEM6VF1munpwdTRm7LzmA94cQYhhsG4DVdNeoXZuKvZ3Vj762UBZcqwMbpu16SD7WWhpkV7",
  "key42": "3uVGYTrndwFZZUrfcZX364wmPAF2jLEkjTPda3YzLMYZBK6g89LRW7dapnnhoUstjVHzB2WoxKmu5WdPcRTyNrgK",
  "key43": "5hMSPhtgsRsmjrTEaBJYk4RyYbsiY5MEyZamnu7oSzJNFyGDGfztoDntZD8rtZmnomKybpW9VpUKQz8kBSwux3A5",
  "key44": "HjjRKcKf6tE2ELYFymuyYJwHYRD7rErsVvYP4zUFomZLnVvPzYar3vePTA8F4cw8RvcNvTJ2rQ9cFpRXkRuPzQG",
  "key45": "5cy4qQ2Uh86LQXFb9PAxy1Si2VRqLgPLHSXiCw5LHFBt8pd3Xe6yL2EdivCY8uEWGZQaRUsXc1zKjUFu5UAmo3cK",
  "key46": "XXPFMzW8WYM6Bgm789hvYeAqREk8V4NUVryt2M3fmRniSfAiB52MHsjTVD6GAwNqPVuXxC7CaWq3f52UztKt3qe",
  "key47": "5jDQHPoi2ugxm4PHaQAhn2ck3cy38TPJBZBQm8VVT1R3EgnzmuNawZg6PrVrBX35KcNNqQzXASup562tpjauw1DF"
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
