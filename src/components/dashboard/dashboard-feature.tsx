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
    "4jE5dXqe8kJaaAJcfASamo6y1Q38EL1PyUCADCmvfamBKZSapwdH8GounP89hLMoC5hdwYxiiXFHSTqAhTD2Triu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DzaMNVWJz5sszN8B7remwsNuZtuHEtzRh2MGyrwUPRGjx8smkJVC4whuUcvX4YzVfa5kf3JnLgbjxB2TRHuPhCp",
  "key1": "Pjz64WRyqAF1Uh7g45mnYK7MvJfMZkqQHMfr7CYChQdorCvJ7hntJ2YRkFsqRYr1kHJTPZWxez7fcun2PUDdqoC",
  "key2": "ydwK1Bcad9u26zpwGwUSU3Y2ciUv85tyWq7wd5y3QXQokkudEEZyg7u1hBceA6DUW4S1gZQZ7BH1Cw6QRDhwtap",
  "key3": "2PKy3KZ11c3rChBynK4H6Y8mjfbehuBLs2SzNEcF93K994GfM5ukVecRo9wR7D21TFRcfv7LEfsKPNb7SsxmKZAw",
  "key4": "2iaRuZGR8QKypKH2FoLp2EzDs2S9bbhuuVQHr3ExL89HKwx36kXNtLRwx9xmQjeihbJVdu2AKbSSDsNvu1v7Y69C",
  "key5": "3Jm9sCrEQHghoWGRCtLB2wb8sgYX1tLeBnu4HGVMJxTEhbH5x4TQMMJTdDEbpUoDCAE4dtMHHgzCRLT2tr583MdQ",
  "key6": "4jaCYMQBXi6oCeYrn6LrLBRKrxi1HZ8E3jyc1HNsu1HCQHGsqMazbRX8Jx1xpF4yoL7DoMPsCo3YjN3wF1u6J2Rv",
  "key7": "4GFsji5xyBeRkG9TpDkHGraJYDQKNpfHhvET7ASukVcFwKVatuwhcJ6DMXkRm1tEQVbMc4Ssuq4HQrynAuaHbpNn",
  "key8": "3oQn4D62A2sJ5T2TcKkeJVsEYrsM7vWf61RcFTiwpKW4X2TtQRVNwejqNYjcJpZNQW5SD26te3sU2gmMq41nXRai",
  "key9": "eXzcKzVp4N5p23c8fXMTWR2amdHTH8pvF8EJoBBfE7JmTJY9McmqhsiXvHNzR4s3kakV8k4E3CBAkZiLmX9ALc2",
  "key10": "2VkA7ei4EPVZNttNbCmrqW6DFtGThjoCiwXkzZNigifHCcy684wDnUVzzKnYHQDfDUMg9i4uPVouH6Gzw67Vd9Y",
  "key11": "5riLZTdNS7UtmPi4EoAaSPPYrVGPsdq2mneSh53o9nWDBo1HE64L2FPGaG98NRPJizi1EDNP35SpmZDMD1vqa6tM",
  "key12": "3w8tBXTBc4VRjbRTE4FjCULbK7TVYF7rpUEdEdCswbc8crCrhT8CquYoqW5roWatJTnGFdUj4XyoFBz27qpgGaJo",
  "key13": "45yNbfyuCtoe9YSVZdM3c68x9U8tTLWuuxxP3EBrAG8Ufo3WPDQkerPz9D5X66FAti8MhTZmQRu93G326YnndFZv",
  "key14": "3TYetAmFxKbyHzrgZTWs4GfM1rXusRLy4VGb88ic6ZTKP2K8iGs2HPHgh6uGpuVvCzvmF6PhY6HS6wurPbnbfNMH",
  "key15": "YpXspNXiPSY1seWWhu1jMMPqLJbYo5gbbf5DD1VcLLZDHHfigHriZP9fBwtxgi9p9tvdvZatL4YkteZL64yVf3f",
  "key16": "3wLR5X6KzDg4PD5qjG1EzSCSeLA4L8JitiMQVEqmesYnNDM5eb6RMxEXBLYGJPZAEbZd5dqcnVpDcfK4vsdaqxcm",
  "key17": "5kbc5VMmhi9pgNCTcD9KSFyLR2zxqAkw3j4TCJgQTaKRgEhGQM9u5pEHrcm7zC7FAcj5amZNrHz3r3gg8C3QqaMZ",
  "key18": "2CgM74krGJATDnb6wv2KVVe8yCMfmpPHobFFdzqKZJiUPHn2jdnKuQi9pHdV1gqfsytidpmcy7XgSRZkJFPKg65R",
  "key19": "3eFTxf8ShdNBc47WpPvkD6K8j4kfTHRhk2eM2Ah8SimdWWesghcRBRZgr6kaqZyQGqaKuB7QxtKH5KHmZipWSEcz",
  "key20": "5ddh3iKRcbk2ccVSz3GHmAxw3PNd612eHjEr9zhYYQTB4KFS3TpWdqUuwtUqNTy5rnirByB8SaNYkxrQHm5f4bdQ",
  "key21": "4hDWqBboe9D2bBujvK86ZxXXKerhoiZQzTwBNrhQzbCmev3i1pZSGY3xNiMy9GtvRRbQKdm1ddHAeHP23nwEk3ej",
  "key22": "4qA8J9xuW6iowKdMPN4qBj4TgC5x39fUwd1pY594jtWw4F1PmvKYVSBAontmnnajniRXDSqVBnohv6sUbYwpwgca",
  "key23": "4shthuR8bUxaM9bJhchoA1Gq3XeC4uXJvsczFkSYVTeKky5Xvefop9H7goXQNTQMzfFM5StMshVCBhVeNQNJ87jh",
  "key24": "4Ez8DmHYKUfCSrZbf5abLCBCqWQMkPy9kMKsbTW322qoieVTwiaZPtxGYm9f9KbzY231191FjgadpEf6YPqcBjHt",
  "key25": "43ZbQUj3MRZeiMzcvgsRM42HK3zXJL9d2TpQ1uTS1hFsNCs22g9rZRJwN7nyo2B8QDv8VJPhcAxpiArHMuQNZpEw",
  "key26": "2z5yD9QkgdGSqj6C9H28K2ChedXG2ipyiX6k7ofCDZNC8w1qPg4wxSuH3vbRx73pRkT6uLF5HFuvQg6XMkpNHxGM",
  "key27": "2iYF67SgZCNUKfm9pNSPBwuH6aDnd6DEcG6sc5W43fC4X5NWLuGaLbX7cRWc8kgzWiaDDGbpkbrih5Gi3f79emQX",
  "key28": "3bMvJiRksCEUUPohJkwgBMwF1UDMKRttxmsijynpnY4S8SpnzNybWnPGeCowtuRtcCZS1KfapqEVX5xTJvarSaKt",
  "key29": "5U3aBkH2A9USDeY8yJyQYNr9CptP91oTUoGKX4iiALbn715DxEPqiFtpvZKFvArwXe1SZzzHhj9V4UABah7GGjWc",
  "key30": "5QUBwJtVANJEA8FiF5cSGxBFqtnu1FgpYq6JfVMRPxzAoYQogE8GHD3s3cJjyb9MtuuecWtiy9NmqwViV4ozcao4",
  "key31": "3vPzWFv2oDVftbdmBCUUq45kWVxc2GT6qEFuUyRr1MdionGpbB7h6j8L6huPamZyRFansEwxc9daXqqw1MjGqa7h",
  "key32": "1MYAQvbL6k3eYAWiP2xmJyJudRsy2DmxxJox5wFPUqS9TPiHy5hyARMFuXsLDjw9iu5ooJK3wcKjauiW3R5hJzF",
  "key33": "4KxUyiDRagk1tqDVCs5Y9M5ezkZD4A3mL8pJP5o9zAuEYg6wuqoP8UEa5RJEa7UuGsjfXDHgY8vbVMGA7jBpYpgg",
  "key34": "2ySucYMef7kq9aeaZLkFrZCK16BkskCLsdicCDjFHxASS1KmotMi7z9gt34Tfc4rRB7iPs5Qr8ktUPEXpikogc4r",
  "key35": "5CDdQEknJPGYsMoX5rRD9U9FKWXAfgQVmyzxrPZGaEbWoc6xYcjEWz1DNLWDUCnMhidwZiPos4cVGrMAnrx7VepT",
  "key36": "5rui5thudXkiUoGz6Y3WVvznJi1ea6MCJPrp9e38HWuGHY8SAS1i2MMMqR5jJRVUNSjJYDi81fGoErk6JxyQg3B3",
  "key37": "ASmUBd6CezFa41C3JQmPQ6AQb3Bp8FajKjZzwhyyYohw6d7DkmXXnnZBcGM5i5yiJqy8UTdeRApXtoSPAdYTuAH",
  "key38": "4UXXSZFzBLxgENoEsPCNgA6aNhfKRnXYh4UTVry4wQwYMncCJ4wjGGf37vvyxJvcvrLA3yrr3n1uPDbYdGDV6dP8",
  "key39": "unSdeqZBTEUL1aJNjxWj5uDCCdr71Nfx7fsiSpfDPmhbvTGgM6XhPBggqXWbASP2grAE7psEgz9Bn5rhNw4J6LU",
  "key40": "4NyCC1W4PRBNZuuuJ6mSF3rdCzVZTgwuHzSKSscRiDaWxUv9K84bVtRGSxrfiJfEeAtdPJwRCDeJkkANq23WCBLp",
  "key41": "5jRGFwmHToaJgqKrZkk8S7b1eiXQFZZdS2PfJQCTroaDRzJYX4HvWqmCErGn3bAAjE7ZQmG6VCtthUpPGse148Ka",
  "key42": "3cUySZAHKj7vrvmtAABSRc1QhEjwfKV9dB4RKfoFqLUnciwkMnu6Gmp7V3qC2CkruE38UM8yKF91Q2cisk2b6ZSB",
  "key43": "24PH6SJZYjhscYgU7UuMpFqBpzSDA17ZNGN7QKSw9W4dfCadszKbW9S2N3NwayTKQm3VuVrWaMDXr3anmVHnY9if",
  "key44": "5keTqPQMQRULR1A2zRwGZ3pvPUeBDdEZGsC1n1354jJHsbiJ6V8t7FKDRWkZPFejwRM3ZNP987ZXxiYePSkiUqdA",
  "key45": "2uQzMPLArFLtXfbZkvHezDz6LAWNZrD4qmUFABFH8dYgzZwyMuAygWHv77b7GRqKozRgDkKRN4G1Y78Aiji3B9RH",
  "key46": "451tMLDa93x5kAyQFTKMv3pTx3uXLvEPoRkYEd5ZfSFZKNa4XQDjBFXGbfXbnSob2jLCGH5zLxJUtHgKxLTF1Bnj"
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
