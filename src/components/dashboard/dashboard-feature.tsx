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
    "4tv5W44GgJehrcPKtTkGhwdFd2pUB688J66FbCWHFDptskgVBuHG3kT3ENwYDUgeVPwb1CpQmhMgQDNZiLEnoKM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x6J4ozESgHZToRHx382WaiyJ46ZfNhxUZJx3VY1knrbbu19oiAh4q8gWQA8Ng6Fnn83xnggb3uZyjyBcX9LyYmL",
  "key1": "2NEX6p4nP5wj87nbbUW3qz5muoapa7yZmr5DeZsK3wBxwUr6RZ9BVeorQ5VWV3TCwp7rAgpNcSuaChZ8ETAJQKFv",
  "key2": "4Pj4WbwduMP4xHcKcuLkFEwmsLS4mLgT6bttJ7S9Sio4pND9Hzc1ZzJ2oWKEBsD7z2sqZx67xBU95vo9ozy9Vqvh",
  "key3": "2L4y1hEw2oYjrKtYmLLhuoJCM27mz71FntUYwUuh8jBWTvqvRRqx9nEzbjQfNPCJuGwhC1RMgkPQi8n39wQzqz5M",
  "key4": "2C3uexHGPuY3GDLmaQUYiLdPRuSG8tTZDQn9tshJ5Lnz6ZkAZwmmBDporrC8UsbKp3W9v2KWqLhvZy5Nk2MMGnnS",
  "key5": "4okBjSjKr6M5PxVuXqefYReDXHbWXwhDbYxJhT1raQAU5v8NryBigThgZBSq7WC1XAmNi3q8oxfBFgDMHpdMD3dZ",
  "key6": "5uKg9FAtGz4GY8scqFDR6kG9SoUuTa6igJ68jcJbvS5AikDy5P9o9WkeGVusKp5b4KQCW8SRGRL1vu9K3zKLi8p5",
  "key7": "5FJAnzGK7yhEmmvjdx555oCS2mXwVqoYByKMKsBYMrQJxryvz86Gadw9iFYKxBQ7oW8DMSCGd9aWaRopN1U5VZd3",
  "key8": "129Gv29pSzdRGPw2AwHmeh5gH8WFSzBh4RubZ3cS97CXrjiCr1p2egDgUkWw9PsZyT121pAYg6rPZUWERUKxHg2L",
  "key9": "3ptxo1WR1QoqvGoc2BPPvmY22jMgNT1Q53iZ44wjbjdqTm5Ag7vTyeDSEj5EU7N4rFn9ozCn8BSxsticXjNfQ4Cb",
  "key10": "38dCo8GSquXQiHs3tEEV6hZQYRBYUDCK7W1wi75cps3BuRsmr2BCboK3SBj6yQiGgsGVKEVyJdS2AEBXr8ZFKdAW",
  "key11": "4QXqntHTfSMbYerwzeaKF29K4atoyz3EU7NT278aAhubQDm22eMEJQUTJdZVt74kG7ie8dqmKuXQfvQ7NuHD4bfs",
  "key12": "4Hu1NfNEWr3j8kUjDsjw5mzq9dGkg9HCcfTSDZ3BdTnMPASwMNtX97nJdzz6ZLSPDiWPL4nb7mMsUBJewgYph79V",
  "key13": "5M8ymDrpQ3eySdXAJH5aZYRkwQuagsUjj1xYJm6aGY7NJyYoe6i6rVsBfP5xHeWoVDr8J73GPFy3GN12WshyBSmS",
  "key14": "4TmXAR7iVV24VAwanZynxmjWgU4BMehryF2ytLpdih7Zv4zWLmPPhyncpHdCQaLWNhwnEdp876xeTiLiwgKcamv9",
  "key15": "3umbpc6YrYb2CyNBhepRsfSSr6SytktcYQUxBNn8kpCpHoEjwYbPxVS4NM7odntY4KA5z4bn4PkD4rCLFauA4krw",
  "key16": "hZ52UfpaYXMttJX2KdFcddC6CTyfGX7MtWnvnrFoSgVPr4iZgRtLZs4RMBrWXJZZ8XJ4oHssWpwjeP4se2TABLP",
  "key17": "4igq96medUc82YxxTdLMouwW1d2wgnBic1haGojiphuCLRU7ZDKJuy1vbca7EuUw1R3dM29eS1eWCKpNuFBbDFe5",
  "key18": "2fuvWTuBMUQBAKpzRVbJjb52H8qTnSc3toWDPRNK5kvVoQfvWBuAcJPEef4o8gymdTWwC49du5qnAEyZjcp4gDmJ",
  "key19": "2yHKPhx7zMFaWv4CvWL7mVK4mSMJapJiJ3Uj1NUXVurejJ1QEeVSug8g7nBixvDmEtvbxrnitUu6utE6a5WLdPkg",
  "key20": "kbS7MYcR9G2g9XuKKRsaMfFZ4Cz94bio27HpjAJovfWifXrGou38fQajBTNBwbgbLJpBwVrPzHANxWrJxEnsJ6c",
  "key21": "2nzrkM4rMykL3Gqin6TvKzkFAFGU9PUTcW28en1u7YwZmvMqrw42DgueXJoHmmJLA6utQqcob3hBuqeToCkbEcxt",
  "key22": "5aMk1C6MYkgCsqLk8uF7bXHKoJKkJCLw4fURotDxmhMx69JCTCHQ4jnQsraAJgGWBBTfJ8CTNmiLz7ZibhcxN6oJ",
  "key23": "ULbPM2AM9JYxkMeVmEekH7qVv2Pfv6qnA2bjQ3e2ZJHp8q7tuYnt9E8JPVMXSKXv6gYmyTnhLFZ18dAAr32nrEL",
  "key24": "AmRCX8HTcxRgTXK7WFpqeWNGaz2kSVeKXzTCBQLUZv5psbdfrBqF8EAB1w3MsusNS1ufG5WsQwhxea66R6CzZ3G",
  "key25": "43G853FLUgmpfgonjhDzzNWu14VqRRnYPq7DnSDL3r9JyA4Es2xgV71V9QtsKN9KLXbE9q7NqSXSYuJDwMTc3MBY",
  "key26": "5zsKR313RDcssK62Pyffo5XKiwkMPKTSr7CH6UMg8m61jByGZNVdqgKnxddvvNwAgd8JkTEea8K8hVSfH8UZ2mgB",
  "key27": "2ytQqHMManFd14zSXgt94HfGYbYsj96r7Qb259jBvhBKLfRCV87xtDSMJJ1q95CyYNQyTcaUdJbHTCPjTdQtgLtp",
  "key28": "3ufRuwfBnEiiX3rSdprhekZhzyV6dmVX47F9VgqHjaEK7jNAdkhnXGkK3ao1KqE5UwkewaZEUBLToFhP4CckaoVs",
  "key29": "61dtbWUS8Jjtb5eRixcKP31smoB9qMUawSKEyywWBFq274f8Yr5BXtChSagLMaW9rc8dgTb8SyFwdjhqHELUazTE",
  "key30": "4pbLtw3AAQFczyDwKid2u5zviEWsjh8542uDhXL6erep8e6zZGWQJz2umCcTJQYuasMWegTdksP8RvrMBbeeM91W",
  "key31": "2kvNVPMhGrhq8Ym3wCxUVkHbvLiP4b8WtFoKwLz7NU9Qo99qQxsGMEd3jhktnQShvRPEEqijQ1ou7d8R3sZEaqok",
  "key32": "KqRLDTLvyiHvTcgzQk685NxFfHMypDp3azQrNEp8PwKd7xEesznMyP4uSQyhcosRbd82Lwj7mPUkYMc9qYJgMt9",
  "key33": "5UhGENDhkShXDh4oshUCqGXBW1TMWxHbXG52mfJkrGPNTSh5KApZtgu2w9pryTbRNu1ivXu2onvDa66wFNg8kYep"
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
