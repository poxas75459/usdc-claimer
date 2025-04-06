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
    "5U9M7RsCKRFGM3Q34d17mRDL591YaGKEFvhk1zbBaHFj5TLHZ2cGsfBC9LNFg8KNTmEVVucnNg7RqEyk6Nye4FhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEKkkjEWACuBqwCoiu2uBFuviKG5hzJ7WEofA5SxKLX41wcNTpkBKSzG45Tp7RLwjosT2VY7dMmhmtLUyg7GRAa",
  "key1": "3Jrt7ekP1hMPpbgLZax9jJWVmvCJBgCfe4eyjz2oyEXoRiBnWVpH41qW8vddGYPAj47kUeh2oYiNHtgFYjSN7rkn",
  "key2": "4qfAzmvUeCaU7799uNrCrHqnqSBSNsh7BsZ9n9rNs8RnBUMQGfQBPUoKLrvJbnyFwH3Rex6rytgn3VAkL2zQsqP5",
  "key3": "3UzxUvZU8VcCjcw6aaH9stW1TGAi9bbY6Lwqf2o1aBrQcfBJgo7NJccbZjeB19kGEFJ84tJ9n8QWzJZy9pE67wFp",
  "key4": "4hUzYAE1DNmaKGtVqomhGgcQin4rPYTKPcravk5ytqPp2BSV8uZFmocTBgyEea6gvYzGRJeUwuNUj9u3XvvB1DE9",
  "key5": "5gorQgsoJmFvubr7E65oPFiXzMS9EWmW4teHkULapv1PNKjXL8Qd6SPi7opmQ95m6AEeEpxwifvvHcgQvzKHxNfW",
  "key6": "5sWNBnNNfxqXBgh3oUjhWqP97NfxsmadnrbnEodjjQJtYhjUHoo4w56f9upR1tq85GoZJN2qyR232NXwUTphxxTU",
  "key7": "4CgtHNFJdnfZbw6Y9hbHMhDgWB9Twsg4Bk6SHCVhodAJ9qN1bRr9xvevwsPdWkUcEQ7fFs6m37pb9Z1oUjxg5vDJ",
  "key8": "25WoCF7SMWN1GSgbAG1ZNb3AvrMXFppaGjkmChHJL1Rh4Cc9ehzA1KgmS5ZM428yghXzfSXKKTXgE3sHDed5ZmRf",
  "key9": "3uSi299CSfgJTihRoGTxqK7QmezRE3iHik5JTqpTCYh3EwqBVv43qvDtYwGWgNd5GEXGFCndKWFB68PwV7XNgVqe",
  "key10": "4yrJrjz6p56xM2AJcQnDbfWQY5pjfp8DrmwSMTG4zKCW8unkvffCPhRhdtKLYDC9Vbq4aTevwiUQgZLVAHeigubC",
  "key11": "V2d7YQW26wdD5ZQ8mb3h27f9SS2ydvargdLcygQyf7XN2dCdomtA6tspHmWHehp8hkCvCo1hvLM968t9TzXLqTN",
  "key12": "2Gs6wr4DnXZQvVbf8uz6CUSwSa8CdaLV47VVQAuFWqML1GULxP51esFxMHDvUY6zXKJ3A4nbrBrQxsrdFKiyww9b",
  "key13": "2GYYMtWZCraSPSZfVh2xDu45FWDfy4WHdKvRMRtWtDQVDzX4xPeU9cRGYZjH87N73PgRSMevEQikZhekiUTX6ENH",
  "key14": "4vDHf3tJi4MZ2UPbcJacYjJJQN5jqu52zQCMdq66Nx1LebZ1nDtE37SXGJPJ4uCJ4jELB64HCBHTJ8Eqycdqfbj",
  "key15": "3Aw4Q7GB3qra6r3immYD8mv7fR2Kh4FG2HWjymT6yDKsmZkM24xuMVXTF97MFBzM6cQCNXNQoLhMWQKdhEvL2kq7",
  "key16": "3LTpvKMLxmAd5Nzie1T8mBdfXcnBnMk1kDjMgZNqw7btHEKQ9bmepMHRviNvk926DbmnKG5rTmqdjnDUzsMgSs4H",
  "key17": "2LzeEvnQpXnYtWiqMyadrfunJQ3nyVo14itZZV45bTBNQgfC4drQ5s1CeWwfBeUq69PF1wtapG5KssDvi92cNb6d",
  "key18": "3DA1uhUD4yAaUcULw9dnsukmVriXAc7erqnz4oLbchcBikAqRrE5f8jXH5hgKWkC79JrsCYt1k6VsNXSretgkS37",
  "key19": "5DMp2SkCsfTFtr59ncrGSUMweeCSiwmxyZNP46ye1EmNqAFGvcUcparxigGcVhX9A6dD8QTxqG5XoQwKV3b7t2RL",
  "key20": "65i1iUeFoRLZxk4WLsrmB7Q8Ch8y8enZmDmEs85fChU6a76Lz4e77AF2N9rN6hq3rudB9pgvyshYHiruBbskzy4y",
  "key21": "25nnTTo96hSYWr94aWhLVQ4U8xpAMAvu11TN4Z4qNWcdJZbeakKCUAFhb1dgjQh7EBFFozWELtXMNV2gE65rzWKa",
  "key22": "5rfr718Em4G1Wb8G7EKgQd5aHu1WrBE5UaEMpdAU6HzESRdNhFu5tf8LPvxad2we2DAFZXvLLsZeDJzvxCrnGgxo",
  "key23": "5EPZofufDSVmZGjudc3Qfuj4gHuVfyYtGWAN4o7UTJedmTB1SSqJBe6nMnojH5dBWeN1Enewo5q2v8jriLSLipBU",
  "key24": "2tvNYkSrn58LkTz5pKxgS95vG9X3dyg3KHzmcbqN3GZrGy4obW2BVD3HSii5XWAvGNhr1KoWHGtxrA27CAmLCxN2",
  "key25": "2J9vzBSgDUTYmzEjLuEeSCjbUQnsFrAHrw12bYbhXBXbDknkDdaraQozYu6Xpq9PxZhdEHwyKqkWaSUvuk1q8Ee5",
  "key26": "44DmMNZ4YFFurL6P9dQgNQ5FR3ZNKejbYXkSAUkypgF2C6Cmmqssptj139bzAoVpaMPmZbyovnWDdhNtsvuJFWiG",
  "key27": "2FmceTsrtZVCQddDTFY1H5ZHmZd4fbzfW3kLTkZ7vt68dzpJ2VSKMEd3bz48F2sR6vsRFaJpzHNoLSYEDw7vTLub",
  "key28": "51beWVsw4Rdt4UCWuQLn5zfoLDUHqzCxgXXxt1YD1uDbzTGj7iHAwVXCxmM2wKZ7t79bugRc5YgaJhQguLxhmhr3",
  "key29": "3CZQcyAKQDrfPTrFLcHumfnEdf3oq3rrAgMz7s96RrmzmspEw64TcsWZu7KjR7DZvvHxGTtutNQLFRzLeCfbkpof",
  "key30": "4Nj5FDqBeNCndQJeQVhZ4CnEvW6RMitGeMprPDHrkmduYFs7A2Wn1QMMCqEdaBpq1n5sACY9xTqxktEez6rowKwE",
  "key31": "38uHa3m3qFajcGAeoU7C73vVj6QHNVz8sqJXb2iDEWewJKFp485akFvBChD8s8vcBgC9bnajTJRvmDr8D8c12qWN",
  "key32": "2oLsN8U6rZDEMnUEHnjts44iobMU6kSxtn6zjboXncPinr3WmYqW3c6qJy2MFJKNaGXmwKto4C4A5FoLiKRTZz8K",
  "key33": "5tpeKjiqUgrTnb8okeP9J6m9p8WodFHHMDy59PBPq92dgo7ky2SpuJiVZKFVrDwnxktoDREfcdaGYTtpjU6DrNem",
  "key34": "2zVPsqTk9qsRRvKprfva8GkgWLvKjVfLy5MqMUWVjAkb1T7Bj7aYj83DwDeBdfLZhuZ18Bfm5cyVUoMbx5qz3dTH",
  "key35": "5gYg9ZVVj2djbg7KEobJCXTRAgQd6ZZkuKtvzwR3a9Zv8SRg6KqfB28hirK6EMpVAfrDBjZNwvhF3yKyeQd8pUuu",
  "key36": "5q6vmgkXZ9TTXLtB5brBNW9YqrCPU9HXDimGtKSr52rWKXtrjdWg4VqM31LFchqcUteQVSJ9NdCduaw4LfkWk7yL",
  "key37": "4GZ7oaQfjiVSZy1MnnV7dKZuVAEYVRs36TfnJioCNhbtMN3YKrW2te2zMqTQzdXcwfuQ98S6kg4PDXrV54AHQEoN",
  "key38": "4pQychQjkK5GTWeDkDUb19WZMQYMNCdeepnGKdMpf2Ue7h1DxfmaBPsEEohNXqkz3enWTHNjS1bDtDUwZiPzorZC",
  "key39": "4VhPzZ9EYvYYx8Dh79XCaEHdMVE3nMngynwTQg65SQC7ozMrGNMZtkkodz5PauK4MSqgAt8qyfrp6AqpAF47ZQuu"
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
