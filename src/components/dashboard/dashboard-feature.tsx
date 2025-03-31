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
    "4jwGXd5EEwonroXJko4UnVXj475KPrregbed7SVWZcmwBbYG9r92TWgcfpozsYaw8HkVfjuMfGBKPnJtyevoCJaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t5tX2r64ySd8tEnWgRyWoW9sqdW8un4Tyqr3YUcckSxUqWDpGzby88NxL7exa47t3djZg6d3WJr9ywJmFTTyoeA",
  "key1": "4NkQGFyTqTK6T9srGvnMhW2dqpM2ssif7EBy5kJgmMr4na34HNrKzCpuXppw6otCwQbJfLTzZiAkCCBQy4Ba7Vdj",
  "key2": "j1L2RimY1T6UMiRhVRx6ospRN6ULiujHCxzVp4meUDkTbmFJErFCAb9pWyVmdJ4v3dbJ83oHJ8RtyQzmrNEXup4",
  "key3": "5uwqfPYBvwFYUU2yEhMGTtXpzeG9ojJuA2nQSY7q9j576xzne23nLgU2eE4WxGpinygKSXwSpsBPH4aj4EQ4DLmA",
  "key4": "83qBTVEV6HN4ngcYPZCNvLwxNMBqif1XUwq7yv4v7ogGVr7fkLYYPtFtd3ZwUAXhHRsjV6yUDZAF3mKNzHoN8Mf",
  "key5": "xMF8mszkTmWrtRovj9PELzVnM7J7Li5EAqMMT4C8GUdFAKQW9kCNbctNUrMjG5uond7LcHS1vK6K7wzBnW47B14",
  "key6": "38Rr3yzkwQQa7ViPkHyAeihD3CZjpncUZ646icjGewkNjWoeGMn7dGe1ZpkBhHFR9JzJhnSofJX163QkaEo3L1NM",
  "key7": "7AA92LaL9eGpaWLBbkXjgLHymVCdtPHATtmsyK8KVbP3PbZgHBXKsbPj59kerManNJQeD5xCpHXxvBkNnR4zbuv",
  "key8": "3aHBMaNfckhWevKbowCfZyxMGr1zubGyiMU3J9Bk4MHfEVHJ9Scd2MzLXX4Yh6UHBc7p1mgjkvSfNT1HRVVe4m8Q",
  "key9": "3PzF7bZXSkUBgWb4dp6VkxugDhrrPHzkiZmc5ZqNVcevcLHGBiK1yNpPsjDmNNNbYvR5uH69TPAzDmStx1zaeA3b",
  "key10": "1275EJYHkWWu6W4ZNHWfHBzoJvMJ62XbdCzM2yzAdoeTNAfyr9jRKsusMipXDeMxxfmp3bjbGSW4epHor7fGFQVF",
  "key11": "2CEVDzWRCALRkwi3RYUJHtFG7YByVU7mWjDmSVksyz4Z6ZfF8eUcGt9haL76kAkfgZb8hL78g7TpkyJArDWGYy6Q",
  "key12": "3rMvfUCLReDajybnAK6ebekZkUDbxhQuMvQ2vuWqd1xGBtgm3NKDFCWkkUt5f6DHBUpFZSjcev5xxELpN91iNDiq",
  "key13": "2sYkZYjPTJp7akzeX2ag6Pb4vzh7TFoy47jsUbu58e7tkWysa1pHiJsRPDCfv6ZrqR3Guv1gwE16bVrx5HqxFgFd",
  "key14": "5Mpx5uyXK4pSCbxtkXcqfqMyHACGixPoVCyugCkoitA7okpY6u2rjHe5qxNpn5TgZDrxnk82WLwFcNftMdq2PHk3",
  "key15": "5zyQHUzmgmad8VGny5XceRDJ8j4xj1UXiC6PgEy4kR94uvCqowaKbfN7Rb1yr8xH2pWium1Hsg18RsCnMBBFpZtD",
  "key16": "yGUQVUpwbWnQhgS6NbrF1XTenWAteerWkQWT42Z9b8wzWB58mVA1ZzWTK5cfkqz9vD6hZWBn98j9XURqmFomVJ1",
  "key17": "4QD2SvdGBdZwnmhDbuArvC1WsLkBtpDRsohRCm45873fEqQKArudhhoRvnNBfRWbLjNyvvobHx3ReGRKMwgrs8NG",
  "key18": "4rasX424PV4fojCDG9YLuEttE3dApHzE1f9ZBSpKKHzbgph2XheAUHQgjsApfjaZwWZSeeXQusefGhnPx1HNFwaW",
  "key19": "4ffdhWKti8kqZ2rdD5n71stHvXWjqyXt45iH5zVWFg4tKWHBYbA9o1BkzQMVv7vVKDYuFXsK7KYAUA5ic23cRgFv",
  "key20": "iw3dk3VSuHmba5aYzrafQBZuBcmgwkDGFxaswd3v9UKBed7cMGTZahwRb16cHvk9kUVkezTU6LT5qygMfkuBES3",
  "key21": "5Gv5oXs8Xyz1TZnXbrSksgdKeCSWhrCMHGVmuS3hc4nzwEcLtvH31SvoV19ocPy7rg1XsGd57pqnz5q8WLqSad1A",
  "key22": "Y4RYcthbKrBV71KwXubGyTtRbicocWkUMugGwvRqbWWaGG8udVJYz4ihsAkAquvTigdowdxhkCJ4NVqpHctrX2d",
  "key23": "4Wwc4X3voE9dtLQbpe6m21H7pDzMjsSbkcdGv2NQJKHneotDmHEvKycDN4tEzeFfgtpQ4VDvepvQHKMaYo5DnQUw",
  "key24": "4kTcLuHzxQWNYtrnG3Dd8X214mjTBTpAR1AJoxEznLyMNZhRqw4gSX8kbLZuirVtYVoURU9x8aBubcsjwtGW7jTc",
  "key25": "5in5z9Mk9JTkKJncQopQjfLXHsVx4ZnmfpE3mUwVT4ydk8fshjBAjDEMWm15iK4rFLoCGLnwriCFAksaBxtbB4K7",
  "key26": "5FoPJCeq5BJadRPfz2w11X6DRmio5iEnDAHZ3jmsBapPqx3RSTmkQwjVSLii2hUV1qZzBreBXRmjgzLcEzvw7xa7",
  "key27": "49iXZL7mUXNLfYGTwugV65GiXTa6wCYQyMt4UJu32JKftVJHFH7o4QMSFyiiBPsksjdB7Lv2z7aL54F1asaJ7Q1H",
  "key28": "L6FMfUihZs86cv65Sukzi9ezBkf7aLU8JtJmxuAC2WheT1VnbApPa2QyHianfCK1DyhQEFgWrWVFD7dTxdCuKa1",
  "key29": "4CL6pr6Ek83AXAtZrf9q9ELX51eqvMNXgYKq3qdtKwLYFes518CUcT48GPoqqxbnF7cCH5fzr96zfSRcXvwkzMdo",
  "key30": "uAxV8J7RHEg7mESLZLmZUKjD5xdTGfTv7xq8Ay2Lry1T3aeXtnVUfgotejZHjY58obFaNFz6ERZok5VkXhxiCtL",
  "key31": "2TzUSegXfti1XiWeTBcQJS6EkeFABxz4yoKLgCi8SuF7346RFZL9bqBtACYf1PD5hs63fxB5mbW8JWvAd63SqYYS",
  "key32": "JikRs4qSzVQKc7osJ52aPvKSfEsP5midX4hpubvY5CpCSCsAki1HPfLM3f62sneeF9UAjgFEvSL3jtNX97kJqv6",
  "key33": "2Skd1KXQuLP9beSNZpKL3AL86TLJJjbmKd7YkQSK4rXnXwu7a6TQCn3niGMdh4gNUf5JBTY4vShpwqS6vYxdkXvL",
  "key34": "2qq57D7TXN2cWB4mPgJCzs4DEfGwhwLpbkTS6XXkXD6Lk4c2YqYrFEUTtNcYZQKQFef5gtjq59urtsAUDEyXYkDT",
  "key35": "UCZM3HRnamLG7gLD768QUZtVEgsgvEimcMcxx1VVWvug1MHcvxMWYwaf3tKcMb8B2xEhdDtQvdQK7tLPmVwhXNg",
  "key36": "3DdEotnxpRKmtysjA6fboxf6zi81DHGHyecF3cvk3TjkBts9NmBt1tKYbJeJkdked7E6QimWQqQJK5sTsh3PyPj9",
  "key37": "5B2T5zojpsDkys8di4xLZk1A9X6yQFnx15EKvFRCHqUnzniM8qsta7d82uExxMJeB3ZxauvLmdyd7iynMh2gdu97",
  "key38": "44hUgsM4vXarVuDDPSEkY4t2HMrPDbGzbUpKgDVSesojgqsnHBTWXnpjcR6tin4BiHGDcKyxA7zkDq97bJK73s75",
  "key39": "4W8XEaENygaSxgVxQbiBDqVLWd6KszTenABigdf6N5y7WvgxMuPbdWGStyodoJrSJojQf1mQM9ThRXePboyHFeZB",
  "key40": "4bgwkse8kGonckqQzaH7WXHcr7h9JkCVrbh77ynmfs8wAPDZeZEucYGNeHg8hAJyprucvrwPE8wHXVDYwsHWV4j9"
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
