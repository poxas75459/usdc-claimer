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
    "2AhgpVWbSjpPCV5Gk1ZcprNbNnNPqjjvC5HFCW2yXN9RUQoyajmvtKi6eKSnaRoea9Q9ruxScuzEnz4NNoaeup9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DzXkJjEdnjL9bvM82Gk7qLHZCL7SiaycGUSDi7Uo516sVFUMfX8fab7LrdUuzhBZyRKiaR2s8LPpVoy9kNvDc2v",
  "key1": "2TwPsJYGhBDhhXyzj4C7tsH7kfa8cr1YQrvVPpqXTeWfXX2hCrun7cpHEuPicYkYuqxpHQgfcZvmWR29XpDMV9uX",
  "key2": "5APvrGeT5AggEi5aLhmtQFBHjurkAhHv6hQDxKassCoc4vG2k1iNwF2oF9F7X6WivvqH7MsrFSxoYG5c35yyRSvV",
  "key3": "4rHJuLUkJ1n1oNSc6a5D2WGJtBiZk68vJKJNM49YBhXNDfg1rSbaQcpy1eAqYvMpYBKB3WKRA8XYyo4dJBWk3NCk",
  "key4": "kDKFFvLp8gnH8EBWdrqYuDkkPPGNe6NUmA9RaPDyCXtojXKMio27feT7CiVWxJepzVxNL2mwVVqxXxUBmhe7ziA",
  "key5": "63qKwQSoaQ3RsEr9EdQriQLL9vFaJnGgXXh9WjhgPSkvWvh3JdZC6Akrm24Ea3z3e9RZwizdcMURQ5S9bxNRLdKW",
  "key6": "29fGrvh9BmE99gzRApB5MxBXysW7bMQg1pZMrSEQpHayPT8yYou6jo7aqTFnqjfmnbbUi1ActygGi1sEs8LggGAC",
  "key7": "2WE5McJ884QRx9iW4EGpc53tQgFXYemkez4eXK11RXcAhjZ6XXcU6Xp7SN2fMTFD2TGdoXyfK8Cv8t1e1vFMQrE7",
  "key8": "3M7cWCH5AdvPnSzDtsRveyXtp9uKHx5xTkqAVXXFb1MzFCqD7egTsfZXhcQ1Sg6i4Cv6eRC84cvVYsG2cv2GvKgF",
  "key9": "5jGDPeSvD69rHBv7HaGPvyM9S5oJ8STUVoQTZwihDAV1iZmbasLej2wywdDzJnMH3k5i2JXMGxSVWPNFnHpnFzcC",
  "key10": "5TgmALCV6Vss2tu3RCt66bxsZ54h4py5RfVGjhePHHydj9PfxzYZEAaufWD9LyDvTX2avVNcQqHAeNNrW9Cj6HTq",
  "key11": "3hYmUFbis7e9pbipi5Xq5zr7ZAsQGVGRNLrHX99PfzchECGBLBXxxt1zDUzyJAttYwFwfPSzkTuR2sQNPyWEbqUM",
  "key12": "3SRCV9CKNH72UxojFP1GQVjxpUkrasT1aToKN2yH473v3S6xPg1pzjFzsE2onCuYURXA7oP3HBdLbHwMZNgPU2Y2",
  "key13": "47dpZTjaKB2VDsio9TaQeJchsDGXNV7THHg8sH2QXasyobyBKqCVNs2ruuqp2HSuW8TCkE5DshiuVEz8meMQc3cb",
  "key14": "2CB6Y3FJLvzH9a9ZXSabwxjQzXGgZPjXrEEiB9kioNPXC8VUh3dPnarjmMiWu9C5cyp65poxPL873Qr4eKz1dfSy",
  "key15": "3JeQ2negD1MPx2JfwkW9PFWbm4QFPVFhn4JN9fszJkqyGM3GyXDk1rpGo3EhDbZkaVqKGHtWhxcVnaNDPYyyeKmW",
  "key16": "GtAH49nBwokeVcByoU52tch55Zzk6zAy9Y3VQJzgpVEked54x7cN5i6UB9uapqCT7qYejbFAJFjbsGP9o92cpXy",
  "key17": "5K9Jaft3q9tGwTs55AwqwsNk4eXLb7dhqyehn64SaCsQ4qRhdTRGar7aiKWThjuT7N7464t6PZnCaFWTUsUhGmXX",
  "key18": "5L3hjMn5xhX5jiJHK3hTgF7oKNWdwCsfiLZH6p7oKVDFoxY3y8SbSNhX6HLJcNCzbf2aVT7ng9KVBFuetoHDom9Z",
  "key19": "2PinThLtksUXitzihq1VY6NA8L8rgppWEEZpRoXXKLTQg454E7tCuYsHa2BPKqfr3sVRSkQZNKhfXLutsMeBVVd4",
  "key20": "4aLXb2pSXdqsYA2PiBvBTvijxJHDfWrmfgYxjBwBzwWz18MgivPkPNri3Sj2PbzuQfD8rLn7Gd5w195zXeYBzsVU",
  "key21": "3MvW5SmKDV71McqeZrWgsiDk97rb85qE8tXN3Ecm6noskYXN2yxqPmap9H9nK55iDVsVdSsuMj8bhEDhaK8Dxx9f",
  "key22": "4aLkfoVEm92xio7JRwLCyixfCpJXpnnoFMgXMrZovdUaEStBW7rCwJeALdqUAsm1NAxzMWsz27EZ51Am7EwAcczC",
  "key23": "3BCXUBahwLLE8R5VuRwX1NTrbu8ece3tGctN2mtFb52moyXs6huktUjggB1LukJQmQpi8jaZ1cFnwGQba7FvQn9u",
  "key24": "5swB3BP2YRyntvBHSrXt52y4PxKuALHVF6QLbZyhCWhRRziZ7ChEoN7dNbgqeVrL4p2cWSnd1VmewAiQYg34zVqH",
  "key25": "3dSjA3sAgY9qpnLnCN2Vy5vbz7LGwFj9ZGD5fJRAUjvGjr7VWTFAvYuZE7U38KnEKUDQyepHP8vh2ThX29rdt6BT",
  "key26": "5o7jeJuwoy1XehP1qcyWGqwmF9ooaLjkXKHqCKhjkNCxucoVVuJvGztix4XQmFF2GjEtt6zSArRf9V95VLAhEgMo",
  "key27": "pzQGZiJhqh56B2YTVdv6z993cBiJGEGu1qKCW4EXgec3SkKGGJDQ2sPk3vhPALvZqe7Ufyp8ysbgkQ47uyeC1Za",
  "key28": "1EqovYXoaKs9XET99xyQ2249WeyCwQsj1V3yPQ6J6EGUmoYoXSE7wXnKuwAVnnkKwuP9vzgf4Sg3PnnznoQAqMG",
  "key29": "3FXR4i3rL2unaBVDxAqBo4GgzYCV7obfUx49AbD59ejfqtLDxPTc8VeQysW6xdfdBYPGGm3FDpq6FgmANqqstFSN",
  "key30": "GsXZEJUBGmz8cybrhDnbkiqThTDPoMYfmCaMdGzaaX5ByNUuNef2nZJQk1Z1KbUxY5HC6CMEmkuazv6rhbGiscZ",
  "key31": "4s8a2kAzJoWBWMU39AwVaPKvRdWT5zQfLWKPKhnzEwmQMd3i66tQpm9BFggRxj5cqsFtLqpLL2js1RWnt1tPTmoA",
  "key32": "5Mo4nLJLAz82mLrmFVgKLj3uqnzZMtmjt1MNeVxVXRh6rT6KLf1mr5C1CXp6inaX9Muzb84bzUwTjJ9PWYEV5zj4",
  "key33": "37F5HXMyRvENCffVrffHjCMawv79QZJtDnk79iVq4P4af8kwfshcDfthMuBzZ7QgFpePp4aVpWzevxFLFHMTDCHH",
  "key34": "2LVthgo5DQNj5g49iB1QA69ho72FV3KsgivEesQHay7VwGo4JuewY2cYXGk4LCn29ocan9mPrntmfBf2LrZ2Uvo5",
  "key35": "2QHZ8FkWpTq9goVsyXCvfPacvrpZaPHpCQfE8bqB4yHDKuHVHP5MLgRMVKqBmCA9bMvT9Hn2wRGE2apirwuMNdmc",
  "key36": "5Sn2W4juQJ3ChSZFzcnhX3Jr19VFbJgra5KRTKaSrri6ZK8smoD9PYhKejsEZGFyEfiqHQdvKuFB4zMctivCXPF4",
  "key37": "4qtEKZM8WDLF6KeQQLoDhSx5F57BFdoGdTnVzNBjYbseuQACj7T7d5et53nf8dTTKc8PM3DHCme3ioP8qmaivT3Z",
  "key38": "283jiz73Rx55pjbGjY6GveJAjL3vE4dK9r8SnFKrgpV3P19ZiD8qsACHEDUou9WMAhVEtbMmxyzGBba1Z3SVymxA",
  "key39": "4rx5L1rSmAHPc9W8kbuf272zc44ECp66MvwCiwmbCsAsUoX3euWH8K1heJWeXr7Xi2BaU4m5CH1kqDg3AcsagNuu"
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
