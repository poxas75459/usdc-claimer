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
    "5yqfcuRjSVHup7LiM5XJk4o3LZUWtTXLgVLGEqDDojsdJhvEFVqJHm7qY97smCXviVmfSnCji913kx3RApqou4og"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GFZzBgocp164a3hQ4aGKPp5PLdAjHKeKs4S2gmbp4P1YwcQrpW59PqYU1xHMLy67vCyk6gnnPrmTe7PjYEFrWLK",
  "key1": "4pg8iN99nPLpTW1ekq2EMunhEyEopV3VBZQ3bB3vH7ggCzWdq4A7pyNg8wvzCmSeeygCtJDxd8NfyxAMVUkmFJpq",
  "key2": "5RjNoAnVc82Wyy9WqcEorHDn8zTJhDUrtinZtJ8P2A8GzZyjfMw6iWYvwS6ytBj2wLgVE8gpwHQdWYnHpfRx89bK",
  "key3": "3crzZH3x6SL3rtVzLnaqPYvMr6tXQSkuho1iCaniZuybQJQUYqTmhf9gEjBHRBxjVu8yXdujkNyLnAy98Gbn3JpJ",
  "key4": "2oodKHVsVs6TsmNcG32XD2TMPZcVHq7bGDmUfETJ6HBt9mGjgLJw9seNgQSXY6GeyZtEgevjj6ZKycjsA8SCUDWL",
  "key5": "2xY4ezeVyHLQ1DLExJeDDgxNPiTWUkwRSVN6T2K1XMVNbWHQogY5p68toDY9GFsUpkMKHebRiKjJKqoCnPE694LW",
  "key6": "5jasAv8wCx2gBD4tRpFaVxBYxRw58m9pzMYgyEaYUtGdT7iEozd6bbMjyJXyxxUNEKxaem86qYSP7es6ZDPoXQSP",
  "key7": "5Nvtg4iP7BqYQW89WsdYbAWWsNvUqjuc3ho7UooWTM7AYNUZhKa1vWwb2Bk1VeUocjpywZx7MzLV1q1frzh4DWnu",
  "key8": "3kniizF8rjb5mrCPHAvtkboZD8328QKTgGK1Lekfsw3sw4RV2V4P2r4UWLFoD2C1n2MngMVQqxetYbiLcZhKLDgv",
  "key9": "Rr7G5JTs4JS6VqmJbJPbmF8uYB41Hs8xn3Mm2hQ2aVuKpS3Q65SQWEzTHyd12WJcLteVsxvuTRz4RLjmdeycF2M",
  "key10": "5qDcPPAUytQzWY1JUgxQzyKrm8AUCWwCokNnouUTBt4R1s2ksfaPsNLWGwqKFeNKhFi4qZAK1SpcnAxLsjSZ7ZnU",
  "key11": "3q4nFyqEozoYPZ6CC6R6e5aNSJUZUgHvX5sHjapA4HW2wEJRSJj2onzwMYPq46LUxV6Ak8YmVwn3tHw1EDBxxWA5",
  "key12": "EXaAuZbKH3Syjrb75wQ14uvyU9zBzywhXgT4Zdc9wS1ppdFi2E2U3QzCfjnfCNPs6Dm7ghmtPSbyAn6qFNmoNUy",
  "key13": "zRof7Fy74DQC2QuwGHYSQuosyM1Z1tovU3bfiqmc8cofUUGnMatbuguDXnENH4RrHQv3YcKSyuZ84oyqZ7MM3XA",
  "key14": "51GJfJaaWxajVkvig9jhyfa7XCQdupLyxTz23fL1FroWmGiDLAZNZ5jvKvwZrV1diKkHQFN63wUiyUgDgUChVdT3",
  "key15": "5AC3fBPUqiBXY5EtYoj6ySdwNBKpAoNbDYaxW6Dq8DF3G4NizocC2FpvAqRMG95vVRk9JWrHFbfSnWpapSSfoM2i",
  "key16": "BAYhYh1bQA7eQA76TmBPvfzvcosiVDWwWqxHwMLh9tFPeNxBWVmu2nE31yoHNyAQgouji5QTowiUnYwxM2xskRc",
  "key17": "28Z7ajdNiUUYBe9dmRoutAJeAtGHoZGbxE7c4AnUKwp5ZgpXrQ2yAAgx6Ag9xVf78JuT5UNfTouSUS1dp8huB9XD",
  "key18": "57rQyxRjbA8hCAvnBzRRszYzTdCnzt6zAgDmeTe5VYjknCrVaccZ1cxqRrpPoKdVkzcvBF141QFXjTmQGZHsgUin",
  "key19": "5YTiByVHnFeptQKECgy6jCK2fb5SGR1DCdFUhTUL1Bbm6zKT7v78JQwEDdhZn2cV5Zzewm3kSrKx5fKoGrpShph6",
  "key20": "2U5vxvXXfsqz2EyGQ1bHjE7oojHy2Nk64muSaaPGcy7dCoUw6HQY7kMByFHPRPkaLRuAXoUCnaUMESKAn4urnv5g",
  "key21": "2EZnuYd5QmRkkozn1XcpnUTfyUxXeUQmCrmrwB3mA3QTUNU2JVUDobnnv8fynBzHErcjxyj7tk6iZik87F5duQXX",
  "key22": "31d8QL7iqqj3kwGASDUXQpaFXL6hpaoQhBNgfbA1RPE1DedguE3urZ24YyDHtb1y8CvGYrifYisLgMqHAsVTh2Fu",
  "key23": "pbmHyBjFQxJxfTFdXf3aHQb2Bt6xGyQS4kfDmqGU1hG3z8fpjn7wZkTGA2PXjH8aXipDbtXgXo9ZscnX6MfApg9",
  "key24": "2LsFxXSEDs7HDwG8yhVmaAWu2oDro2MXfjJb5jv3UcpGTW986UH7e3p2zRMn6dMgwMySmPNTP4YhCekRUTc72qfK",
  "key25": "2bpYr9zDo9Zp4Ac8FAfVKzm5uZmFYUoXefbUfZX4krhicuV6k8HqdgFzicaSE4MHtYvkG32oQLCtAg54pW9oFLAV",
  "key26": "3GnPtYJPhitWrFNb73TDRusketm52iHtd6hhGccfKMhAw1NDC1QcHjgTvpSrJJiEJDN7kUKQzvtnz3ZtAZxy9KMN",
  "key27": "3VTKy49iYXYk87ugLtgPsS1HkGMrwzZwBg8dUsgrxLD9Ur7h3oBovyuGrYhEGXaNVzbBof7cZmzQqUiAAgTbtnsh",
  "key28": "5bJ8zKjTU46WAGTSwBCG6UhgQu3Vyvv6sWYo6mJ8Gus3c3skEsoPstmnqNhYqDFSu9dperMKokqpByJH1gGJDfSC",
  "key29": "4zFkmSRFnQLz8q4hGf8yBKmpzYS7VucrfFpdsavFRjEioSSkaRa1GMk4HTAD6R6n1ir4WcQHiWPd7KHsmrYJXcGt",
  "key30": "3rG5v9iqo6FejKWdU9RxGoSNNkNAkJSGkrME4t5Fn7aLXKbQ7WjQwdSLNbczmZkUhniNioqTX1VUv4ze8ihseihJ",
  "key31": "4cSxPuNJcDyxpiRPTbeTfPeohZpfHPY5wzjaRkfzhzJt2VVRDit294cWPnCoQsy2A34jKrRbCgLfof33ywSxk8Xa",
  "key32": "41avrBYZAX3AstBSkbFZnpiUNWgv6zQYmh1mzz3VVG4XRmfGigUTXZ8QZvSganwYTm7pFYKeBVQBM8tiRnPVwDoy",
  "key33": "FgtacDNezJue2yNh3Vfyg9vTMKhnynsp48QT4a62SmrLgWaQecPqWurAVUAoRaqh9dDXNf7AqrbmHfCntTouQTm",
  "key34": "miSczUfVktKaemn1UtpB2aBfuV2qLsM6X8TPerhrG4BghcUAYWhx1XinKropeLGN79HDTGscJiTsXs2dX7gCWby"
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
