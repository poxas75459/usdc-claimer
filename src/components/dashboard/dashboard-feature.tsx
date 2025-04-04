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
    "3Wn9pt8UL7z2duziCju3e8nAn6V4VGwWTvSdPpBY7yc6yMA5Cvyi4QD7uMgBvDhorLLMR7gGPerSMCUAQnpJcnDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aiocxhaLzAi3Px9DjRvXEGmaFkHk2H6frYi5CGdnsSJCtHraJyPTPYggfGTWLMu3XU1A4C2ibo68VArdjvNY4iA",
  "key1": "ZEpBE6g4spXabPU8oBhXs2QmHyLUnYxtpn6cK8YxMnnACYGEkD9u6CYEJwSsd2godPvYUdMGdz4Fbib2p4tyXgr",
  "key2": "2MzZUASxTuwWnuPH3ey7Js4kLKhqcvEU9p7zdph1NqApVHBuREYjh5Z3Xo8K3RVDvNtyPdYfK29u25uyNftR83vz",
  "key3": "2m2oPXGYndLf6ozFrSDik9Xn2UqdQh5frM8uSmuxF9B28vcofBKVNQ7xr6Aqg8xQazPwtvFAsWFBg1tEQ7e9S5vB",
  "key4": "4QBMc6CvnFGzDj5d6u6CPuGng3iRBUgV5UpANDfg9ZdS6Y2YJshJ7ijRY5fYQM2sooNXoQ16cKQNaAssEoDrWKsg",
  "key5": "4DsSERdzRDQ5jo9HuRjSFRxjkyRkg8YdCANFAhbC4bB3znpRj8KVaxSYM7y98bVfrtprmUEnBMHFuNd6DAdGeEc1",
  "key6": "3SVmbkxkjHEKdZcWEgxs72uroSoadG7TkFRuFGvckk4aiBPyd5iGhUChguqWq1AwbsZUTLLRJYs7aqiT2snyXdvA",
  "key7": "iftnqNfpSUs2B9KxuP6siYvhNpfNGLArqaStL1oVRRTh5xVLznxJY4nNasAX59KMdCKJ2A2MmW6DvfJ4NckSoeu",
  "key8": "3s732wPgFjsoM3wB8Qrw17utfvpdRUKaQsjDLEWk9Nbj6ZhJHSF7QQj82z7qDVQodbe9LTt9dtPPrLP8su6yTZnf",
  "key9": "45J8Ac9E6w5ecdfgHnmAPrbJVZeuD6iGZAy8kM1cLjxCr6z6Ug5RxGgLh5mTjTMf3kX7DMLGN5bppvoTLD1Me76w",
  "key10": "3U3oyjFP1Gv5FQRwwyu7DvpmMNFAZuKxbLF5dShYHn5g1GrGJrd1oUY2AcmBJbRZNNZDSxhE3WjLw2RbpsWPeUxr",
  "key11": "45qjnJ1Bp1jVqv9exEtJWFVMdDUUmXasBPTkwUFawpybMsmHPUHRiK8kBFs9k1moCqSyvtJBcH8DnaSeBcWer8ny",
  "key12": "5QN2MgyhGDUA3UFzYLGnSzyvn7oL8B1MTySwv8x96oVKkcmoTyK6jSswGMgS9APXj6yQaHcUDsxs3HgE58E6HW89",
  "key13": "52BrXnJs9e2cuZdoj5E2N4bTXPTkL1AoKE5uwjFU4LVo5AYvtDCHQsSYi4TdCTx4D5BD2iktJfp39H9fxdaDWaZa",
  "key14": "3P6mThNqt26fXmHWRpPPo5VqD3jASrwXP9bWjdP6bbAMwpWcUpuDimTJFk4Loopso11FHSCz8yPk4rNXbRhBLyUC",
  "key15": "219K1gDtBF4cmDV5bXxL1ufnMwFL6S1hMdEvDvsCTZTXQKJXXJPMtMx7LmFTjnpbvffvW9PNJH7vFSowdvtYkgnQ",
  "key16": "3LJbdXFWQdVHVL9xvCu9kHypHXpzMdJLKRy2DaZaZe7oT9hx5zVGDB7kydaP2zSRnmioPk98gFunppYpyuy2XAut",
  "key17": "4NUQ7Ccp2mm3DiwWuBznPgTRN6GLCfnh9PBRYr6qVKm4MdMXQu1uHai63pRknuRKdPNR1i1V9mFdLGYNJU2JMjTm",
  "key18": "3KbFvYVbn7SuGhyRd9vkwmYwEGTNjAYU4T5V7oVBLRAEM1CSzr8LJDKeFZXfqmgnYYKBGt5hZyNiYjCvidMd3Rcu",
  "key19": "3wDdZvGnQuCMjyKnVmjjPZAp8xi6Ei95UEMFK5GYMHzAKCZuF45nwZJTw9532zL93mEKyNBPUYiZBabb4ZRbJ52p",
  "key20": "3vQzVQxb1yNkZN7wLwnGiKsZsap39qiyVoSdAbrfLjoxS8FrmDCJ87rLvaWcS8i9SHGCgFszbqFz6eTmuCZh52Vo",
  "key21": "4oX4zBGDQtaMNvXZQqYeYDpbN4TLqPy69YifBu5zLexj38Hf7mpRg6k5Jckq7tdUku1mi42dHSXy34Nzz9XHGRjC",
  "key22": "NbSTiMrkBZg9iPoREJz2zyQHDAzTeYex6RfnJ8oDFDjRFkY4XFbd7ARyBb2rVsMDERApEW7pDah6CEMC6kGPB8Y",
  "key23": "4KUDkG9npsL2HnEoFzoddWbkrF6t8sbiTMYTpuRcTMdtrtwjPnna6MkkAcXU4XKLm7LDHW4pY61yXqWshajmmp4D",
  "key24": "61KDotAN5mbZ26TU7KxiURdGmHtaV3MA7AVmYDtS8GrwNGuCbv3ggc7V8cm8AYJp5Hy9kDVZBfaKqYLkxFKSPcjN",
  "key25": "4gTE1y7GxAQK1nt7AUvArvKnxx72qpaBH4RAhCiJUY48nK221AMTLqfxs751Z3q5kmwKLyEcTnMXfzHFF9q2MRFt",
  "key26": "2hXrBXVZCtXB6vWaVwLqKLQSiFfuTUAVqHnVjbLXQpXzLncfMR8SCbyxsKUmrsaA4AWLoUNtu6o5UvsWVDf17jyj",
  "key27": "2PvMA537ShT2H8hq32bS6asf6YGSaBShW12ta9hjRrZRRnNsPfsQo4uWLrhRvD1NR1GQvQFnZd5qGxvFYeQjjCr5",
  "key28": "2giJKnnJqaQcSJwQvHDaTtsGGFtSXgvwYPP3eiNuAYw497v6wzsHHE6X8kaFHAH8eszbjm7Tak2RhB8uFVjunieQ",
  "key29": "53QL12hdeZNpVRqYiTrya6pqKmUqkh5fpbhiTw9rdXMFN5bEviGNmAzCXZUkiLndRjAySkNTXqHWpJaKDF86NqL2",
  "key30": "5KyaESrg1fq2gY6uFBVyX1yGwfUemQW2pX86erV7AwR6N1kVjcRb67SDv9fR8tNj5gpmhYsh3oWeTj9mLu4Dt4q4"
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
