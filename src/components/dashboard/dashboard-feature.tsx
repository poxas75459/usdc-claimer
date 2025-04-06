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
    "icN8yEUVWLsTNfV9SzfhjiXbiY53PMN5XizYZeh3EWWXieybh684BHPg6uZUsvHVpkFnKbsYZ9w3KEGH3CvLEJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x6gtTmXTWkc5azFdx1jSD5oG11cWfcvZVmewhv6C3gmwnYB5h851JmPNmMvnSJbYVYPg8mtHqSu1mp7Zq1Azcre",
  "key1": "4U7LpkLkPosnNyPGoAqAZvWKHaVhS135m1f6pjzhkHDbuELzUBaeh1pZYZHUECu7sutQ9B3YTaXUVG9Qb9r1S3hT",
  "key2": "5YWxtNSXZ9Viqig5zJqNJB1sr4M51RmF8HuwKwfgjLgP5RcnfYmButqCsCf2GMwKULeMqZh2EMgcr1tkLi79Xyzz",
  "key3": "628v9tvP73meogKjcgacdZnGAeW2ckM6UsqFaRuqGcWZTJq5CjintFa981GAcnwRc3AgKQWp8TyFMmHRcCFWDvmS",
  "key4": "2cHzaUTnnfT7ESiYWzgbkZBPHaasPeAN1tpiNiCy8A1RFWbNEQzuQWtZcPBqhCXHqjZq3nncbyrLHZ1Tv1bQH89E",
  "key5": "3rnByQQKjFzdSuy4Q3YXJNZb9wZ268bvRvZxnfpnyp3nKURrRWoLDz6MWEUVYGwGo7mF74mLPaMi3GymeYJd2mGA",
  "key6": "5HVXff6djwpGvENEHFEKwdWqD6SMehPoF3T3jY7DcbfbYPVAwMtTfVaSFN1YfajtYRiU8m1P1Vji4f554LuUk3Cp",
  "key7": "4UwKYybKK7MyWTVvNXvthL41mQhG9wdrboMP1ioEvjzvagHLHgLMeJrNyVzCwykkVfZeKxwxqyL74qcut6paYXh2",
  "key8": "46yHgD7zjZXj28rWpVGkepzMVBh8Uzbqt4weGM9zfA2RTZzwsYVYq3K64D5DbJCC46VqKgVqpp8DozKGNPv15mjk",
  "key9": "zojG5encfyNQy5GPHB9ACykQasFtapyRHs4QJGhJ41tEubpk5AbGUqpnWgtuaADpqPCQ4gzhYCNMr1Tw7JYtH6p",
  "key10": "3sUe7tN9Teb7RxgMfFRnc1wS1TVec9eGNTuoH42NvCmNwLKEGQxkeTXY4iiBn8EkQH5dEhcTYmzD2HjgHGx4EX7w",
  "key11": "5yzTXeFLQPMjWeL6gwsgRzVUgcfPv2GbYGfrZihG37YmTmbBYPQCMAh2XuMfSh9pnvVtx54PmUqahjbaJJbbG8VC",
  "key12": "2SupGLzdnjNJ7cSJYA5zRtvnt5frJHW35mEDn2aF24HtR1z7cfyZGiZ2QYueGq7ep6ECnAp5pe9Vb5KCJCdtNRj8",
  "key13": "3rBv9XR8LhKnEtWJusE6VrkP6bvdFhgqrLp9soT3wakaq6rpWpmSuCYCQbbrwqfsopL7wiMcLr3aM1UoNzpELw2J",
  "key14": "3hWYXoq5CPC9ETpfoHeiV53yimKmYKxbvER2BdqVrLSJjJecynU2ZVoEqBKjxwvStpxxRGC7V4U6AAxdpzYm7zLp",
  "key15": "5nVcU3Qe9UjdTSifHkSzss9jT5C9tfk5E8pRYDACLppK94oBFv9azNaFNGZg4Q1nzFfEns6Uc6oENHFDmZE8g8fv",
  "key16": "5fVUqgUdqrQK3xFCUSS6gPQBmUDvqs3KQB4mct4QYywDeAStrsp6aadeW1sWUWDrP7wKHsAq6WzKh5Jn6WAP5zhw",
  "key17": "35Fuk7ZeQSm8hS6oy3tVtiq6BFSEHmSMd9yCvCcELm6gAx4FZj4mWCSawZWFPgp5pyNoVZer1FtSHDVKWMkiFfTB",
  "key18": "67YeogWh8YC1JmUDybYD8BjRjBqhfYsrWKtXR2RXUr83LGX1N6WsiwFUDKKuPibFBk5t4WuXTPyhKkPBfm1hqbec",
  "key19": "Lb4erBnAcDALQWWDuXmbZnnYwzXjKaifXnvzuK33SrvMq2wiUUJYdddquVKamvzuLW7QATXQ3s7JpnLhLMQmhN1",
  "key20": "2peJcQ8vWUGzwuLW64QhvGNPmTJo8VyYGNtig6dx6p57v8ZHeMXdTQ1AHjpSPw8Q2gPKhVbFGmA42ZHEw442g4hm",
  "key21": "3CkePRK3i2TkXKaBy5eR6dkqDPbQfqvR32pwmnzw9iyGXoU9uP5XvLi2mNbiUM7w4qEK5uNJYhW55qgSczBqAU5Y",
  "key22": "3eEccq21x1UiV53eYNS4uXjL28BsqMhBSEBwekFVHaPj7vVyE11mCbwmF9z7PRKMVg8nM72wPGKNrc5pDrx64b5o",
  "key23": "RgU5RE6FXVN4j75TAhHNrRkzpXYYKh29Qjg6QTWw5irLgEttiRj7i9pNNrftQDwrKoLUjSYv69mraNVqKF9cmMt",
  "key24": "5hsExSJTzcSXsc2CZWdGPSjG66GzX2pZRfdhkvWovZjKqJPBFLQUVBt4yprCX2PBpkveYjx5UJf3kmdQFszfmhhQ",
  "key25": "2jvogcYDMPyvDsPaQuG3VWMuhiyybdXwkJ8sEYbdKdrju4qofj8vqjoPywiweyWidsBMYBmeSzAEtdMNpK3sg684",
  "key26": "2pC5bQPbfyGQqpZ88KVaXAaJgPuSUWXtfUg1y5FQH8k6yjt3RpDW4Y5tt1cAhtG4HNL4uiqZXDyjHZbWKR9nS7Cu",
  "key27": "2mWqzTJQGSZ9qMaFZvsWf8AN7uF9nQgGMVq4JdsKdvEgVTu45v3i1QW9MEKyuG94KgkAvmAs1dHofW2usPHnoHEx",
  "key28": "5tCueArJdoFShtHTuyKbnbC89insRuAon3BTWBKB1dt5uEZ2CSv3YyjJfj5ARKyUhDqMuX3KctgurBpWmQmwSqLH",
  "key29": "2tk9bp3ES2pvWQkbh7NnZrmWqoidfKPH2TKcMXT3vejEcLFYa1uuK3LuPTnWEU16wPkPoW9UCYNfSdg4YL6T15zK",
  "key30": "29oEcrbDYJLtuf9ga5FmNn6gQtwmiL4SmPMxkt96RYFrqnGsWxE7Kzg1ddT2Mhe2A8xKz3zXUFdCM9yP6eyH7na7",
  "key31": "5u8nimF7Y83kGMAgw67i11FxwUfKe6P6XeaXEjEKFhuQqRfHPLpdN2A9Q4UZfZ1Auvc3GJvD6kDBp768tMHRjN42",
  "key32": "2GjCDAmdSot8iaUnPX21zdsC5HkTD7v6fLN8PUVLSPJVX8x5c6mRiVh2x9t6GcJMNKTscfp9zVDX8D3KHkJcc54L",
  "key33": "5n1gs74LbVwzoWn9WecrkHC8ZmHbf3rcgaBtR6na83jJ3pjYkyyguPJLtWxuLEFCCa5SvmqNNezthaDs3yfCNhb3",
  "key34": "3dLTehCJBAVKQe2SxGvBxMzzzu3ASFmgPC54Usde9k53LzPb7ogNi8hrx35WSufmqFtsHaDM84scPJbwYkvT88De",
  "key35": "67NMjYXq1uQAQE2VFpHSNBAW4KpvnhyLMEM7qX5aEHY9yXiHSYDp24BVbauArVL1F2mPDqEtWyr8BjgxXWhnUufv",
  "key36": "4UGJSsPm1crGCto97YjeiLC4m36C6DYENQVNoVGtJ3zdgRUH187nb62m1X2rFgXFwGULuK1mvkgBusT5MjD14SgY",
  "key37": "919Z24sybR1LbgkQpdWsnVMzoiPqvDhNWyX4sLaqz7qwNbxLNthDScoqvL482pWJtKi7HdFGGMXRvMMJdUEibzw",
  "key38": "3Z4cEHzfjSA9iQ7xoRSGAeY18iPwofQFTf3aqmAuodm7wGb5cGLUAkbfwzTWNCc9uezjyrzMwY2gfxH2Fysyeic8",
  "key39": "2rtAZsiXp9VSrsP1QkruQVQxBmtWXBnEVeYXsHgSyYPqSHrUkXdi7rtQJoX3z4a4h2MhiPRkbNufJoTKRZcZPPzR",
  "key40": "2KnVDgCEiBpa9fwhWBwkg9TfPtU8gFxN7aZPsS4oHBvy5nyVhG4ef8Q6g9Lhy5S7Fymt8nGRYt6qKdPAYmjEhSj4",
  "key41": "2CrRuqLghW69PMBqtzFi6jAo5d1C6bm9U1WHrEVLExG38iEHQQUJxHb5cFB3GsGdZEroq36sywTGG4pPcizDrV5E",
  "key42": "BBHvnxWfTN4hs8wQX4YbK3G3R85329UtyoJs6kuhhQFZxCShvvAXSQe8GdoMygjcP2r3Xf8CUKTtqK931J9J6Z9",
  "key43": "4yfVF48bjZohwzYZhEnggPkk1Qkr9rXU6wEqyZqZSzFtzt6wSiyAnwfWo3kMXftzB34JQn8wmHDft4VSVX2FDa47"
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
