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
    "JSLLARrb6fbkczZZZJ9XeRin9v98dDmapjZQUM1jX6JqSZs93DP4MekkVq4UvZwzyEdSgBgBZq3sE7azrqjg3Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTqp754JDx3yWmbzH3qqGtCUfbnJSohpyuhWWeVXkoUwySGEBVTMAPvqN9NXA7QFbwK8HQyEMesragAxAXBC3GH",
  "key1": "CPuyf8TLRZSfhxVJS41hZ2ZdQ95EesFoy8trbGA2tqxTT7QZjH7FfAzNu1T6zpqoUoB9Uy1RHJ216QnZSAfkWtL",
  "key2": "633anfhZViwCenEqBJ1puvYVqAGXsNMTN3Lip99Dep63hrMwNeK8x7bRoJ2y68y6PLDVE86beEMXUBWzy8XGeXWK",
  "key3": "54gvA9WZjAvTAXcsrdMeKHMVHH4yZbWczKNdJoCoTsPSDJv4yTeBnV6RMQH2VJr4DeqWv8T5BNRW26McB4F2W96p",
  "key4": "2zfjdo4pThxFqocvk4UcN1418SdQs45PptQPqfTi6d3DHd2BMVeMkSurSoL5uzSWfhXYqT3WhMbapmWva2f4SRto",
  "key5": "7xv963Wvkv6jcyeYfcwPNAdeKUPkdYFWjogC9Qu2ckYSWZc1HSQ4id4rAeHWrNaDmMBQZzSxqvzPVDfJWmGK7B9",
  "key6": "2iSyTZG7z6grQMQ6ArqWFgDkUG73PrqDQRifeP5Z3MmWLPGA8x79qX4271ijD4mheLDjJM2SApYM7Yykb5Wg986K",
  "key7": "XyqprdcUZFhe6PhombNGrndgk2U5kBDTM2fB8Z2w14z53RfTZA7xtc6NHwvVSdZitp5CaF5Yd5f4fBx7YXosqML",
  "key8": "27GcBG5Wq3EryAzQe32jdKZ7Q6kLkbrHTA35pQgwM1w1GNBkwGaxJHcP3yxNj52RtNanW5g7CwD4roLNJVtMnrvK",
  "key9": "4uL3DDFhXraRBv3BneZfdkyBujNRW4XC43ospy4V9KGpoh7nxHY7eDvHxDp7jMQrXGaSfNXFNdCzXHmyMAYeAkRP",
  "key10": "Z3hUp4XbMx9mK4NjNe3eW7t1hDTW3p9X1bozyKgr1376TxLMWh8sFcdg13xdTm83DrUVniSamiR9vUzhbuQg4qa",
  "key11": "64a3CykByrMeLSorQpSaQ61FYndfKyiQREpkNWqMVWjFHumBSFkTJrcZNtA8mXf7g4QiG1czMerzHzX34ppsihpp",
  "key12": "3EojNt5qhLkxtMagtDvHpYrrNujr1TzGbcm7NnzoNgnH2XAuhLCTx59wXGJDDBs8xBGvdXswvBFLGMQLQwvgR7Nu",
  "key13": "59MahUx72P3xQFBj4xrhPAtEPNuWBoiExvDmshg1ekz33HCUm5AqpBWHcgXgaMRAypk3qqwhYfvGng5pFDY24cCQ",
  "key14": "4VuN8Tc4F1XdYosNN8NaMwASdAgjCypMWxvRS7jj4VYWguyvT5Y2fU6AvW93XpUYVvkBHxGgjP34ZEZoubQ131sH",
  "key15": "wNeKfMDyP7WjWQX7hBaaGTS9VWAbZMih2W3pK89syR8winrBdwrqg9mjBF2dB5adPnf5P5UZjJDma6GkawfJL7n",
  "key16": "37dq69UspquoWmZyu8Uo6kZXriw6cnJbL4qiBonMghUx2T9MUpVmEEw38UHE2bZv3bdkFWww7n4N3YR9TXEmazqN",
  "key17": "2bHAN2L68C9VfR7eW8p1y1Qb8AXZ4FPvVKAn5EMxHNTLBfquosUZ3ZU8vjAbDv9L4qvaLqWP3Jc3mNp7CSkaMoGu",
  "key18": "4yYfKYNc8LXPLdEDEb3DMLDYAHHPMM5H8GDvMqRoWnCX53o5kiK11Jwz4UcuuSSg54KXcS3mYY4q67fe8BHZgpE1",
  "key19": "3bt7WQ9wKMQYkPpoqzWEXpkXhjgEtwZqDRvjecTRw4v7TeVLC6mGgMcn1ePm8CSNHrYuLaMvM13yzkzNpr3jP8tM",
  "key20": "5SQtvW9qzg2nxErUnFrCYDrs21nzkNqpBrHiSt68QZfX9K9feNB4H4ZLTFo4KDc2exLjf3U9KNix3adyPDA9Lmij",
  "key21": "4HhQax3MPwMavg3Pn5eTybSVsob6rX8jRpowXTgP637T7PCV6pM7QDbZHpQXbnZEadrxh5BoiKHarEhvMqKKhxrb",
  "key22": "D22pjqHEyBketGwDNCSDEZQERYRbYWNzYezT4rAdCMnRWxgFsp1TxrkTtE9UCe2p1WNS7XoCKWo1LG4eP7gSqjg",
  "key23": "3AqFLR5kyJgBMF67Yd3umgfirdQN5fzztEN5QAeJVnZSzque1ZwqRKNMVEcxZbSGzgi8sHYr7h6Tmj7Ye2WdBh16",
  "key24": "yeMrmhXXmVudBappUntcYMsfuk7ujK2ECUWQKZc34JgDqqkTdNri6Ck3MbNAv6kmCsq9rn4Bc8BEmthEb8QpaAo",
  "key25": "5WtQf4vHiYFDkLsAsqrehUiey3Dfq9jtXbEygbgicZAkr3R5pjDU9e7bFd3WbGYfyh7re7dazZDDojJ3FhjJKLx9",
  "key26": "Kyc7rh2K9ZHocnYqyQALjJCmUsNqUM4zWpUppmjRENYGwk3Kfm5Jj5AQ12ZY6Dh4jjwURPAfUEBKRwdSyVBfKGJ",
  "key27": "5ZYviqzN1G4xpVvzP9FkcwgbjVLFCQg2DLS9X3JB3KJdZkaXM97ah4sqifrVxg6ZbevPXvEhNKGSLGVDhazxtSxq",
  "key28": "3mMtpJeEf55tmi2HkxwQqRe1Taczg7CQovMxVob5FhkuwYs8s3kntSmAxpWGSHZieQuawp5Qbnw9fmS8gKzxspZZ",
  "key29": "5UbvDARWEoByb5ybiVMQoZdUeoZDrEs3a9MxgWWoxTQywzSLi3SmMyV1xvXeVpiY8AoUoMLY59kjkREHznfAEw5U",
  "key30": "5RNcttKZ3zoV7V8qSwuPp8feAYV2xmVHBZ4TwH3KD6zDZk9WhsyDRxTGBrWVQtZZECrnrYgY2FDExFDPnbcXcPAs",
  "key31": "5VGjAnAjAxb3se2JNbaBWTSNxQ8pycPQZ2iSwxGAkBCX6GZcbxze6umZo32TA2frKoehGHweMNHDRfmGCPaQUg5W",
  "key32": "46Ugo8NyjkAKsa7uBJSXppYjTri1ifwE6ATC8tCFSW9Z4TFTUs1WrPBPDQhxvMPn6fv2SmKHDkM56av1gqDyV5Hk"
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
