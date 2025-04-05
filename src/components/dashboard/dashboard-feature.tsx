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
    "61YT5Syfw42b5TMssdMRfXUugp4spBeXqEzjjqsnGEE14uLAnWChdEb14wVDWmFyZ2yW9R5ABRgurq5DCdCyY68k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C1Hpvsudf9EbYH8tfcMXpm1m8kUZpu9PMQVerED6DD5Ufu9rdedkUZ3TDnFL8sZCiMv2PP5MEa5oZr5C63azJdj",
  "key1": "4s698FY8nnSJ4JuAsWQH65c6Mkumx5715Ymu4m2Qf3K92aaX9fTjKbbNFmmxuxit23HxfDAA1nM84Jfw9xSo1RM3",
  "key2": "58QsbYhCHJakUUq9kKAAZguwi3MgMjefDekFzph89d8K2VpC5sVVGhpzkM1GTFQrcZ7EAuU5RHfH7g9NcYiogUqx",
  "key3": "4ALvKkjtLLB5UYdTKcNwNRtJBhDYS9TDDL1CRKiVMYbBbmua7FPFNaRfRnD4qAvL1bYmbPXcKWd31Jsk86Gq1EiJ",
  "key4": "3vPaFnwEKsPBwJ2KnfKohxZgdoSmszMTNfmdVHTHCKyVpWRdLXwoYQgfWfSjUuRNamBD9FuabCKT5xKDS7ALzLSt",
  "key5": "4WfHZdN8D34m3aycLBNZKfaXvjeJAuDaUjUciWov449Jgyqw8ZJs8T7xLHuUmu2brkxrhw87SejSF9jqhr67To6q",
  "key6": "jxfCk4D6kiiDETJaqVDRG6Pa1wG3EMt9dqsYdK1ft6KkzZKcXvP49jN3TR3D5YHQTEG2ijWRkku3pPByYmfhoXs",
  "key7": "3aMSi5G62UUNgtCiyqBqG9B8Q3XhT2hr4uz6RfbQcm3eqBhqwkkCFZ5s916KsvrFsFezTVaNbEzU4FvqzfE9UDfK",
  "key8": "4tSHn8Pbev5wRRDhPQ7MDg1UTbVsLmLXGQh3jX4i4vkBQjGviJSJAbGk1p632jtA3bnZuvDnXjLszRNe9N33SLww",
  "key9": "3pq8E2kweFFQMVsH9DpSYKMPGTHdjsrtg4D6it5aVWwa78CP5nMYAMWjwanHygunw1oSKwx9g7ZfDZKrhkrJvHz9",
  "key10": "2M24X2bJuCZ8hu5GcCGiQbSaWD2qCp11DhGHyfw8WSC2TMz3XLLUrKdGFeHvGUHTDLr3SjTwHijQoG75iFDD2jVc",
  "key11": "m7GB8uJnb1NEXLCkbxMQkLF5tQ7voS4rZHh1pGBLggtdFevbV92hWhmC3Ro6BGvbqzTgsSPcr3LMFyQWmdxEGhz",
  "key12": "59Y1jnwykueTNf9ood9tpDRFS1qTHTjLHK8Jyg5NxPB1KZYNnzXqZpGzvfBNtsrkVDdssPkN9zMh1YpQfXrG4R59",
  "key13": "3YzJHCgWhs1Z4TLMTPjApgPvUBQ1CQj3NhdSogY6Kkjft3mBkZ4f72g3mYJ6dKT6WbX7RdMQ4GuFCaDGw5j9ewY",
  "key14": "4BrksRy22uBDQ6bn2ELaVWCFcFnquZwRcdyed8aSTS7HNky2QXLrScJJZh3kpukZUNi6EfioqDK958rLfXWfieZN",
  "key15": "5U7AkanE8terbJUJKcxAy8R3fYiJxa9a6iU3mW2fYrz1m51xPTbdeN58CAvv9PsndLS4s5NBGCfCCMbvNtsWSJ6s",
  "key16": "3sjBaSJoijmrEnacdayPQa5Qfc2mWtvDRcLmqncUT7TjQ2qyMFVPAj8odqphxQpvsEcgqdBGfoy7KZbigwqondpb",
  "key17": "fbP8EbpgzgyCV7oEqJS7bozth4Utvy7ehRAocw3CoRA6sXkY4sDWLFZv5aq1UrEWxp98ySCAipazpBbqETFRKQr",
  "key18": "4XZtgm9KJXx6HzDyMK1SZGBfGgN3Dnvz6S1vWnQtyxzwbf2wLN6MPtP5sovATEjQjV97vzUU3VRHdgQr7sLT8pVE",
  "key19": "2i6ieC8vciu9UnSFvtPJFsVPyDkHpb2Y6UUs2yoKHqHPi8nzQqcZhjcn5Bree8T5y9aycDdxGuG4xjSYPhocmXq1",
  "key20": "qKWU4KbwJ4V95f6gjbz8mcQnMz6BvoBBvCXi1TqJNFEmAZAV8Hsmq22ZtZmdyBAKSnnJqjxxfKq4As92diVdiGi",
  "key21": "2JzUwzS6CunRrbATuw2rio2KwuZ3f7tiv8Q8DRnHftMbeDKgdzCcjhvic2zQyHTLcMhsfnrKgf3FnX17BrLfRWwy",
  "key22": "5H48Y3mjrYUxaizeMnDbbAUE8DyXGv1gbNEB6GyoqrkxnyHmkqbfSieZtu51NmLmv323DzpRcVC8EWm7BKTpkjpE",
  "key23": "FL6E2mBeLmxkG1aCggoeXj8E1YErAY3ATJCEfQ6gobofh6w4C7pCuYxutKoqGmfV1vvSaGrNAF1m91u2zZ1itiZ",
  "key24": "xN9GPbBkCL5L1jwGFKRe7MxAmM8Ju5jW48tTB6NhoEwnMCJytD5GSmFmbAHrkkFzcDAu5Sqqs3r7gf1oFyrTtnC",
  "key25": "iUYZCUS6gQwkGjFNQzCZvwW2E8yjQe5TCVzLAuCsbaBQp6ehE6kEnzFkGLoUvwmmys3sGtF4ks4dsBZeByDJTK7",
  "key26": "33uFGJ4ySniLSRdBHspGaTNJ9pPK36KSZsmLbQUX9KzqQsvLNLDm5eWWb14Fjd3EvR2tKogptaH9j12F4UpBzj1i",
  "key27": "tvtvm91nm3v9C2o2fpHxyFQuH2aV1egiF2nxAgdxefNqjF2PbymXMTYQwgtpkrQZj8p8dd2zZgRC1igh36LPQSh",
  "key28": "4hpYZxsjBEpHdAKZnzGsmn1pWyAjcYC1JUovg4WvB5NAmCoZs4WhXJhoQfZFTQvCzjBa8ucg2VhyWqjEerm4YPbw",
  "key29": "VJmaKTZmQyYgaY1fqLn2VeBY7cGBmzWfU7gdAz7gjYcYmAqFnN2RFrpMxUKmsyn8H4CukSf1NjYMdQfmco5tAkG",
  "key30": "3wcfeNY13ouCKJD23e1SKdB5Sc9TxJxLL99ffnjT7qvxHMJEUwCZHb1d5r1hptgwwBFWRX5HJ2SR7f6AuEZangap",
  "key31": "EotanrRXTxLdwwDcJSQ53iCP6uNPHM67wBtdzJQ6NPsS7i9aSaWj3rzfXa9zEe8a6ZUkj2Gk7X23m7TF6fCZZ81",
  "key32": "rmctgFza4qgcq86cVjFBWp8PFVL8XdWSjRAPydLkfxKDWgCs2E4aebgBE4oAqCGMD68WwgaadVeN6aWvjkrriw7",
  "key33": "2wnKDgLng8PuUwANnmbJw3SLoB7cJk9BcNr5qJ3LWT2ApurUmqfdBqm3eu8PPEChPdF4EdNvBZB4RRQc3bSbkVDh",
  "key34": "7XzfV67Vow9PAmrsT7wiGSB7sn7xFMcQwnNZUh4AFHYc2e8GqD77TbPB2QsBZfkKLwbwY61cdZqYUzcK14eDmvW",
  "key35": "5jLjoCwsUBzmygsJSrc1uQzawvaQJ8diReRb33dv3co52nU3kML5QVAan3AataVQPqaaaswo6SiMDxuoid1wUh3R",
  "key36": "2kct4eG9nhhx8SeX4rgZqj6caoBLkQwjMh8WSyTUvvDnwMCfwxdjFzsGfFap1bRcjX8Ywa75kHEjyBnpgVhJSW4o",
  "key37": "5XLmkji899Kupjm8EWgmhdB3yZUPRWJCpRK6yPHVhJCBkpJtVtB2B27Wh3k6EzDmwuNH1QiA6XExmX1VRmMc8cPb",
  "key38": "3YcQkdyrTyszvd7yWVHpCgXh51jSnedqinKKKRNmjdbUhVVUEy4kF3wa7vTAjwWXmi8f8nfSrHvTStwpX2KGN2Dm",
  "key39": "3dCS9e8B8CgYxx78Nxmkb71DofmVw3YA256mNfeX5uEV3ks2uxHA71zKyaRTPksY5fSfafDaSp2kscHkfwErhT9Z",
  "key40": "5T894bveALyeerTCUgCuNPT2ee8ddb4NYsV8twjRXLZv8xddFk8whqN7GJ7ye19nZZpwxjfavqeSeixVyv55wXfn",
  "key41": "PYQNTGcrosL6JzDhjv5yyt5KEJj59rM7fvwWkob4h6Bw1iq1sZTwEYWaQs4YoghQNPJ47M1xS7R7uWwiPhieoBe",
  "key42": "4SxfKUdHG6cbLA9Ek9j8a26SqW5uvuF72kBfxaJLAHsm1Uw1GLwfJF7eQtQNG5NaS4uGhuYwUPjhAzx3Dgz1AEnM",
  "key43": "4hrMR3A5E8s4PKfWc29JTVwyHngRCVMmJLNcsLxyeRfVGuqXLaDCQLcCrd9dTbAC32oKxs2JjwnPKo9UC3FYVbHo",
  "key44": "2HJDWqzFgKFm5cm4Y29XB6yACUiYdzkiir9i9CgJBYeRyAHvawcVT6ZJrfciUgNQnkhwR6Yw88mdxhfo4LMCT3uz",
  "key45": "4o4boPRC5EMHUGWuYaQMgTVV1pj9xJuzUkFqvbnVfjoG5DmNWfh4Uihd6VGi6Um3FjAfhq395LLQUuJGymzpg7Qj",
  "key46": "37rKYEencTfFQBxsLB7FYAcVfUawLMY5MHsbCM7pTnNt2VAk37X5tdwksd8RV4Hi1kwmLAfzn2c84Vowt3ZGEzBA",
  "key47": "29GvHGYHugRLCnjuH3otzmspm6CcmEdN7Kymw4W6PozmjMZ99y1vx5A6Sa4AhHhWdXqFoA1XNmxmB72DEXt3fTDx",
  "key48": "4TuQRZgFYJXVCwJjmCoHExGnwPV8KsBxH3YokB2WgCXS6BVsqTTvYNh6LJyV1PMcbqhDodkEMzft3eZmWyj6CbcN"
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
