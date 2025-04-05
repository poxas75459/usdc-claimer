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
    "2NfHnhyjwMuGAB2EbfW84QPDKJa6WktFwNvSXTUjuQBKDPamKMXb8jUdtQzHNw1zmpurFor9fTFJyqtVo8UT6RQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SMTGXbAevoRX79Umr9jDtWUTEf58J1NibyLb7oz5NTz6kZeoJk9oN46VGeqHLMwu9VrZ1HNHeZNowEwTXgUhKgh",
  "key1": "3qbiKvWNzJHd8ETJ6tYVj7ifw6qPQqyPVZPX9v6sPr9vA3rQvT8VbqyuKSpieM7q5dkwYsueap7hJJ2DfH6dugSb",
  "key2": "2WKfLrHVCoDLqPxgcvR4BarZFGZrBYbwVFZ6aCpepwHof2rC2UurtFKJNGpvkfxjFfzoEH1t4A7YfGPMmNHE4bhA",
  "key3": "3zLXPHg3k36BZ3tFY3QjHgTp91e3HYU8YEX7ubMaCZ4ypC8SR4GcaLvbxBCb9uNaPZ4fU5uMpUkCANyvuUJUNZME",
  "key4": "5D3j3rSb4LdXhze7uToDUuJgsbVnCykdRzQbgTWR7YKj3tfFHNE6t1bwKvhEUBv61MqhWbKQSEMymH7h8SJNrRRv",
  "key5": "5cao4QVVfzB6oiA2RcSM6evmRMFkKovSQiR9cCKT9ThQyAr9Ru49Na9CfgCRrixVZcVzj2WQzVpQV2zM5wQKfrug",
  "key6": "52gekPJLHNG1FBucPbZf2U4F8ZivWuBvVaiaw6cTv8ut64ScoDAxkrWkm8WQ1C6fvkCM5LFJ5pxjRmM5tj6C8ge3",
  "key7": "4Y7PZ4DqbD7N9LzM5hrqJaiSvdBWWPeqWwAeDbiFo23YnvCeqiSA1m2CnteoCqzE5zXarUwUemhb3uoEcUaTTXB6",
  "key8": "4a1uJ6b1tVCA1HPjkuSS4d2yHkEPzzC1P2sH6ge1S4CF65Hr3VQv6f7oRKimnRkNA8wDG6v81yEjgbwzenBs4LU2",
  "key9": "JjvK4fH26L6CsYJKwhMnM4mPaGvDowtpLvZkgGsGUpH9YK2UH2yxfS7a4HHEmQomwMtL3M59bUT8DdknJZjqkCL",
  "key10": "5a17V9PNy6ZiRmm6nSjpBmGLzb97Paq4s6ZMu9Vp8dnjugG6RQ2xshNT3kJyKhohWsd4z5Lb2EYgeMQE6P2pMY8m",
  "key11": "4FByCuRU48grv7bsaDs2XkzWVhn5MSgvsKAU7HT3UPV1EAuzymNqBq7Xa9Nkf4dhcYvENRfSJ9M7adiu4VgpJj8Y",
  "key12": "4m7xZHo6h7bM28xioq4tSSsBCf1X7vURrchBcNxsyFTUz1VQUACE8WpuDzSsamPrpXuKcSeyT1gyypikXkD5BGWb",
  "key13": "GoHCFGj7vLozVbLYs957RXNVAqV9LqyFhgt5UCTC6WMyYN8xJfqX6AMKYdyju45H7hASWu1ouXwJK1mbEa32nQP",
  "key14": "4vQM9wVyZeykXEC7KfFF69JXbEa7G1UdHfj7M9eCuc9JL56QUypHDG6o7iV5moUjyuSfK8r9HLFPGjxsC7zT7c8d",
  "key15": "3GqjTWEPEEMg3njFHficRQf394Am5EKT3eNMQ8jvTnwLBeJYxgWFDsvpdHgmhNf6P566vLo2CS4FLSJ8KVmyWegS",
  "key16": "49WaZEfi6iYyiGd8epndvJwKdWC2wYhi4fJxs9Eq3M9j39D1dbXcNFWkeWxWj6vB737V8af7723HoRWDcJJxqMqQ",
  "key17": "5jpNHKQNHVp93cTU5ECcRyk5aR7cF1eU3NudV5vNFCPEnzuVxuwCXg9C95jWGPKxcB3pxLUNXRKQppHUjxVKcMCK",
  "key18": "3TBMt9XfeKTGxdQdpYwdwxt9sqsLk9ZTFYvxM7WvJa4NHhGaiX76voRdDANDjZBuj5NZwHpdUcMNQcjJuZVcYEAs",
  "key19": "355QkrRTi5BYkFqrtYNmZWTG6tRYvDCeYZP83kt6oVoXU9THq75bQte7Q6DNADdczRQpUTAukFmrpXHgBaW6Nxc7",
  "key20": "3xLN8anTPAR5sXgBDrEQB9HmxxaLE45qRTDieDadSkRU2nLwKkuB3BvFT8A8atqL99QafCEgon72qArLxTTS23tw",
  "key21": "67RD4gBYC78SUneqNMu8kfJtFGrVwN2anvHenGifkCiV4L83od82HqUqvhmQKEHVo5DmrVE2M8iwUBMjK7bkPxNw",
  "key22": "3iihLSeXedM9drLEDb3NAFQ8xE1DyXz3Jg5K5CMZYJNc6bZvdh7JygqxU5zKiJo5cXmw4tBh1GLNmf9iMkdd6xUF",
  "key23": "5zoSvj6sRENirCVf66DAT1nuwh5afFUQ6mwty43tfh3EeKivWGWTpMuxft4Ltk1jBkS2kcpL1HBiQoV9Swrd3otU",
  "key24": "2nwPPNp2kAahVh99LzRffAwGcwgfYaQyq3ErRXsRkfv8TP9SkjvcvSZas7zm4R17CVHGxQfqPsh6Rjzx34iWmYHT",
  "key25": "2gqfvc7HqJHZE8wUo7tanKtJ1YFs3NtVShVC4qpCPj3abuLBtebSjNHpu2QsZRpT5WPWcRibs23Yab4XgQpPUnFV",
  "key26": "61mBDV1iXEQP72G7fNjMnk2uMuLcnwChrJWMmE3xE78PHn7fPDB1wB5p4Pushtk9ecpS5JdVMUGTRmqvzQyUB9TC",
  "key27": "5dRxYYFM5nur7y7d8dUhmRvL1WYs6P7QrL4GyUNrWFkPwF3FJjXKFzYXX7uTtNhtAqcwumHjjEMi6pcWNF51VFMi",
  "key28": "5fNkT24YCKvqCyCXazguEuXCvtamubXpAND1dBsxQvjpHLSh4tG9c6JoWo48ugfrmyq9RwRL3ipg8956mhCY2kgs",
  "key29": "2tXbEQZF5uqqgdzeH3f6dByJESroViSiTtvbf8XJULveE5zUbUMTm5e2zVjyK8kxVWwLomF6aSW4ugoqVzes9sK5",
  "key30": "4yhd5zVSaqYniFX9KSy8nhZLXRjqNcave6CtHJTzJh8PnuJj7SbEp4hYfEomThTAHcc32sKBa7iCKfaScm5QW47X",
  "key31": "NEXVeXnu32iaxRYKMmL59oRL3PQmBkNmDXvpqAyuqBGrRSEk7PkFoT7nsxgXDR4VGuEQQ3nVS3AwxqoBnhP773N",
  "key32": "4WZfbddZPc6EoDorBm6BsMz5YSVEKSLLgfwbMoWKEC7ucn5jsrQXMojrhTxN1WWBiAXYgquBokwAq5NTBqySbv6v",
  "key33": "4QReW3JdZLKufZq9EAqxSVdimuYrdaiVr8GGGJRq8uNE8sSHcMJVVrnYaxNxtsZrkKFxcvE3haGaG5775QcCepuT",
  "key34": "63cdKQbJy1DfCMfxkbCzLHV3DtcEkrLfdrTwKVv6XySUjBPrN7LKjk4w6KbZo5N7B9rVT1X8YWsvesUhhydvPUrC",
  "key35": "Mo2Ukknfbmd5rR76tfKTqmBApRtWdXNCS8vbCL23FS3rWyW5rn75Nr8zjKsrYBowGtnGZfqiKQZvpda6A47aWoo",
  "key36": "2CNRGtDXatY4qBAtKEnqqQpcrHsuypXSTV9BfnEEptKDqURfkssVaJSzaGTkH4uFXH6PeFaH6cQ8o2GArMLWXWi9",
  "key37": "5i2X1ChzbCVgKQPduZDi72EQn634B3ZKYRtz658txkNgemG1ExcCfDF5DJqewHt9o68a7c8mEmUpYwTVq2HcYPpA",
  "key38": "2q55VGda9Jyvh5hHrRAevQe5pDMuihzHYAWKtNfwBe6beEhHD5Xa9PfUqeYA8yRLcGdB7d1MVFUh9pRMaSB86EkD",
  "key39": "5dRgJJ8rzK4K7G1oJbsnn1o3MSEb5sSvtbn3oeaBUCTxUmSq7jGusuoqNxUNbwxjQ8UkTcV7zk7x4MSx6DZj99Jp",
  "key40": "2eyPpKKhXTLyTQaHTfpcMfe4y8zXB6wNu2rnkbDScQ7i59thLC3oj792731bXM6K5Es8785Dhf5ReJTzsBWNmTvT",
  "key41": "3HJhVwS9LMT9zXp7Uo18YoQ3mwQX9DyRV6KM2fWD7GSPGKMpzmtTBso7xoyxNWwccvAG658eqNksi6mepxH3mwvt",
  "key42": "3zAwK8ddeu4xze7A4kB7nX3xhw51QY1RRXf7rVWNpmKHyScCCU3VKXx9tQsQLeUf8yesz5rdhbtYnhN8tx2Ah5QF",
  "key43": "3Ma3tB9Qr6N8FnqtK7Heo5mhERnmJaA5DnHto5jhxzWTSWoEeEBqupZdNcdNmPM1iyBQ3xSpYmxA2XthrBfomZut"
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
