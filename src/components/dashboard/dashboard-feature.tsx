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
    "5gVTHWiJdZGo4W4aioro58PGUNvtp8BQRmMANSjpaasZsZUo2Hn7hURUnXMt73wN7qewPgk1M4K4edLBj32TELoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smsm3qjduVbUBoK2c87WRjtNe6BLYXBBB95VzUPGwnxDegUkctQLqGqZYhtbaawmuJmT3XDTcQkGokW2UBS4jbW",
  "key1": "HMvZS8KtEcXn4QEPZUKsWuHw8Uso83kjNzAtCAtpbXT4CiMHXVMyE5f9mXpGvsbNdbgwgZNQmk96wgLhBbwGepF",
  "key2": "4oqD9terBiFJvLcw8cHoDP59gHZxG1aJSmTMdxw5tfHxGbUin3EDHXTNbYXU3fRi937mHN7jTbUx8bvGA3Q8yFL7",
  "key3": "42C4SA4SFjguFp1yLdCaSF1ye5Tx2hi4oquMXp2cYQo2hniG5NYjtfeyCDR3yuNYhcd6JUKbbRd7qs6sWUExm8ru",
  "key4": "5bqcgX88RNFaH3ha3Mmy4AyLHnXcE1MLYfaopvDGScmD4fVjraPYzGxmGEoFZiEoWmhUeGEu9MoDU8TmuyAwr49U",
  "key5": "4t3NDhthEjnYN5oJpZLs5eGYpyCbmQFKvmb94atujAdZjPvKXNfhPFQuAxFZgaxene4NJLeXPe53tWyNnbLvp6FB",
  "key6": "2SYGeKMJQeyoJPzXJb33s42mERUs17G8d6zYARPNREtAUTwYDVUqLnc6BSTwfoumLjnFm7c1TKChBHJqDSQhx3D5",
  "key7": "4NzQWNNH9FXaFYYsaqowQanvrBkiXZcf2y8xy4SPgbQfAx8pZMoeTz2tkXP3C4x1fDtecTj7HLhjRHKW2KQq9yCj",
  "key8": "4TtiH422Nm2d2uVarnKma7ekEXXXWK5gVBFs4d31uCnQzTMbfc9J39PREWPifhLeRDQJ2vHg2MeZSMoxH7fyiSw7",
  "key9": "h9Hk5rjveRRey8q1bqcjgQ3j5TmH2eq48bPm1NnR8kPcGx8Tyau9c6eyus3xEfy8GpDHuX9huQGRqhwJ6BTmsrZ",
  "key10": "2F8bryMEW1SPSVxW8mYG9YyQn7YHbPxeBJMNonbHi6WC3sDHxKYqtSDWpQ7THeUDrQEsvuJ9hEsb9FnpvceC7Dx6",
  "key11": "3dSQwLB4e63VwwY1dmvMaf26zQRLpeHmXBNtAp2TvsJ84rYRs6ocXRq1uTLh3mYT8qAj6sQhudHRt8PNkaM58D4w",
  "key12": "2qm1XEz4Kv651AwTcVTUYaY5iharciaBGzrToc2LMdBenS6R6ArqaUzxAHfg5JB1KmBucievg4EmfLp3HNSBdTsc",
  "key13": "Lkg53Uj1jSRmic3DsigjPEXunxAkPLS7kVc1w5PQtC5K5TYK6CKxE6BG7Mmh6Ed2PSC6qteDzby1Js53rxcs1Bm",
  "key14": "5dADynALwVMB7SaYxqgBNjp7Kcq8AwxxkpQnCvZH1iCGmRLRhrDzUjA7o3a98F5zfvG7cNRyCn4hrt4bN6EJxzTe",
  "key15": "3uUY4DKCMRLR2yWEoq6nxH3Kc39mYjBPfUNMG1b3PaB3cZKU5rgDyzkFTu6xPJVxi39e7KSg4WVKQRAMnA7xDSFA",
  "key16": "21hmLmfoT7K8z2t31Dz5pco8wUWCkZz6anCzsK8D5r5LLdLENaKk5yFVzakM2rRriSww3EkRUwa8vJqqyYkmsyW7",
  "key17": "5K6fdpHAYLCBDsCfnJFn9Yc3EaoUHWsQLWYHAvH3RHa3pHPeue47DafJ6nJVnT9PGWw5CTJA4z9B5ViJEHZExXXz",
  "key18": "2x1YTVoGbd5rtXbKrvZf5AHUq6YvoXaqujiq3V8mFZQuqdp3FTM8yHrDPeKBzAuegkZefXibVnnfS12cENmef7Pv",
  "key19": "2ZD1f4xnMKL4FjfCLn9jQt3iE19UJ4dmpsgz7tXMspwWdoPgsb3iHD1EvUnAjG8UBTGGfFYRpGmGJsi3tyaKMe4H",
  "key20": "4bcWqRoZrTB7sJi9X3VqJxmVePYQtXBfcWzD4vXfSxzZ42aijvXSdRRqyb3HxnjNQJsFkAquvqC8MWSnTUFnus1P",
  "key21": "122T23KUnUSuFGqHceJ3zsHK1Lr22SYLypEta1hF2ZN6XJeotS6afsYH3yQT3Movo4NVvJECBXoinHGtk3pXaD6W",
  "key22": "53VTpAN9tgTb2cjBXYHMaAFe899VPz9dW6TQCMq8jMzxva8u5jxmf3HxZnAfnHsAdo89xw5UWw8DUAdovisaUEWc",
  "key23": "39q7FtT7ZW1gQa5L1TXEWB5uDBjYpoDrHRhqHcZDBnGxYSWbfdgaeDhcSJzZxYwt4sj9GoaRMnLgZKMEVtcEuboR",
  "key24": "2W6bb4Vho1gsZyWwNjLed2qLhKMyL3nFz1KtfHKemehFzav1qvdzWRbKSPu82FC1PgHa8rUEGUhsK6sXbMVV3SMw",
  "key25": "2K3d92KS7mxnJnTtNiSL67kJHu7dYo3TJfjeh7YcT77P5S8fCKp3gcgDY78tWh4UNj1VEV5kopgdQzjvdnrpYWsR",
  "key26": "4Dk2ihVyghZ25nJV85L9FF5qaxRuzHA1ci4N1YcqzmQu5askFLpzD829vXdCFHUzkNq6hkE2mbb2E6Q8D5hZcNa6",
  "key27": "eAL57N7NUVp5TZPtJppdRKFXVyKqZ8tNcjhSQNMuqDW8mGbGzE9NoXVRft35ha1WaZXGNLLRVR9BKDastm4d3CN",
  "key28": "66kcQFqkY7HeKrNsrEGehACmfe2NK5hmGHVZZLF2ne7ZojzBDUkA3sFMUszLr7nG3LvjZxTrnzcgie2fKGvDi7sr",
  "key29": "5QAsZpuptUkbkn9YkKgwJk9vZv1ktVe5M7M5RMBpBqE3hFU3Zb3XYQ1xAjB65mEc5UPZJwLG3enFhhQ7SKfFZ3cQ",
  "key30": "2t7nxJSnqpH5Q8aQHYmzVG7ErUPdkogzUMw9uAxTRm7TnfYhebNkS5hyam4WTeKxAyTfbBY1BVyySZ4ATNzb9iNc",
  "key31": "58VMnWprTEt34CxTdTcWx7YaQeFxBvtNRTjoaPNJfRUrUxjNGKTYkPSsrhbgJVdYdXv5hKijzyB12WG67kzBjoxT",
  "key32": "2kK1a9T8sEekKE3QoZYjyegAKWNWN8ieu8ieZwQRQSSLev1SMSpu96rSYdk6PBvbdbfJx7mb44g4R9SwJ3doyhxy",
  "key33": "5D7PZUhQsPtcoZ8Nicz7A7dh1UQ1AhrDhuR3ehLh8Az41kP7FMWSTiXTVziCZ3hr8nG5dh7VvaV5dfALhvhLdA6Z",
  "key34": "2RPFsssXXo7C9sKo1TbgrWenK96Na6zNu4AxiND3RtnWnrk14eP23WujtHkbg4qasyLCJCK3jT6Q51kz9ftAQR77",
  "key35": "4qVXb7DCscTF1Tk7tqfZx3f4wmkQc9tAUENkPy8o3cQZtqPyCKmCkF6Lff2XPZADxE6XaWMSq5zaczVDEqKE1WNe",
  "key36": "4jVDAEnr92QLVfyoBcFFM12HufKEhVYPjcve5veztxng84cNvfMh3HC4XrZCyiMKPyX7AqfaNfQyn3jHtH7GoV7j",
  "key37": "24SuMzUfvKhFFqovKTiNmZEkeKrxKGWf63K2dqu9k4fuUtj28gQEBVTuGtEmJyXbvGA8oYAMkPdLsKACEZvCyErv",
  "key38": "4Gk73JsTJYtp4xqZRBkZY6SpFWzQ38Tma2thBbgPRmzumV8WaKo53wwDtqhDDhWK34m52y6Ud4wZWtQvsvLCsmCB",
  "key39": "62XVMRdKALd5ghH8fZseT27DSAqt9fcXGvw1Hx7tfiF5TtKHcGuCbMW5FtjfAwH6hA5WH5GWf33cw6w9F2paL4v7",
  "key40": "3kvNnWFTZi6AXRijTvb9d9qZkj9Lc42X4eiKFw41PCCWq2NCW8fYcwVsx2odudPurt7zrPHYz6244eAtNNkhZaDY",
  "key41": "2iWpEPRApAupmxbzPR4W1W2oTSNqCrFkKzYFgbv1DaHPrjWe3FZt9BQhpyLKxBN9nHv89G7K3ux3YUNXFfqrKosQ",
  "key42": "25YHNC7Uk7sioYFizhp23EHaiVGo4dZLUSGQS8wkFngmUqvcEScK1hjtNVEDR99Lma5r2PpcCJ85UniRa8zDF4L7",
  "key43": "4oU2qwcJLmMzkk8tpkWVE2WiVvizfyV5RqD6p3LGHgmKqminGQg5WhJLCqzZW768TykSzuogNcCwYLLAhmJVknaX",
  "key44": "5eNKE1QyozmyDjwABubvguhgYRHFJkBybPcrxcJPQNhWccoUrwJjSJPqc1AqGT5nJFi9ry4ovdn99NirdcmvA5DH",
  "key45": "RRwhhkF7pMoib44RPJnEDM4YxHgAtdURikJgZHXsueghLPZEL3FbMeiEbqyPPZYYaBXSfy2D3MPqjEx1vBEbuaK",
  "key46": "57PL6baLgJWybxdjVbh9Dbrh3rrttmcEdfqPHHPv7DLj2kf4mbj4gtqEoszPPMhcpKCnZU86vUnvCuJu7FAptLwr",
  "key47": "dbsFifHXY3Gic3TRwABPxZNHDpP8uUybkhW62vAWSMsPfKntqU5StTY4hawQT2Uc4i5bKYP9dDHPbb4SCbfiT1y"
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
