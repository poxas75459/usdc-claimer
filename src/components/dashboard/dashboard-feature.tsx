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
    "5Jts4UHUj9pPxhJiptwk2BEmrg7iLBhbLEsZrJgND3bqPJCk4ivGYPNcXFdfGqEXUguRacLL2XZU9wWHuS72bncc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zcbvRqDNMLiFDy7VBxokJZBivR2Jn4YL3KCE3svakEeF7QwvwSGN69VJyZBJ8MXUNyD5PZgFNB1ok9nxB9t4FYL",
  "key1": "5dEAnRn4Nn7fEJT1b755pT8ApCRZo5sPjMj8SJqFjVxQ6pTyfunRagTqYiWjqvz5u5NyazxBeN5t4iTzzg97qdMV",
  "key2": "vEpy2WiVsRQryApBv9qkqifzQyT341UPQD2sHPnnM6cKfEEjaPfBpb4LJFdWuvjRFrZqWWDbbryBA1pTAvk8DDn",
  "key3": "5cR7E9m1Rs7LEJYuk39veqEVtV18cqc5HjDi86gecL1kPNLbRjHmALRHw2pd9mMoFaD7pjmEmHkRh4zDLPEYTjN5",
  "key4": "HJSRZ3MUELwGE2AHcU9xKuYNYBuRcLgzTFfQVpHGrRgB1XEPVokm73riEmvtvtycDGGSbuMcNhW35rNZJ7nyPgv",
  "key5": "FHEL4d6JnagCGSxn8pKAzf1E1xFeLUm7HWyjA6oLbCWW4Wyso5NgvhiPVYcGHKfD9Q46wfveJYXCHKnruL8BLtd",
  "key6": "4RK5W4KChU8NyaY1Ma3y4a52nhckxNGkBKnfibNMyCcuuh4796gy37pZYGoYk1TAkfs8zeUJjXrQYDv9a29AitjG",
  "key7": "3udyu7TMuX9xopw3LV3VEjmYLjNoHZMUEZse1AmCyMfb9eZrHaRzXe4hjHN76h1654uminCV72DV88BPippZP61M",
  "key8": "3cFHHQ8aGqRmNSto2Vmtszncbsei8pSGDD5aZvkQBHoBscQFKFc3iCMqfiq3dEKq9BQ9sgKcYTm6BkaZMwrKWEB8",
  "key9": "2pjPM4J7VGMTtGKs5V7iCPNzJBsqW9LDKm6orbxAaLSRLSSPD6G5B4ej7hGMZKPJxKiwXAHTnH4ZZvX96fH5gBsr",
  "key10": "661nxGsQrVw2U87s1NaPE2m7bGoTm72uYJNU6CW7oU3hgTm2nGVzwpAKi663mJHeNdYTAZhF1qWpygeByqeqgEfH",
  "key11": "3TjnUq7cGtjXSs4BkhSHKiqtXRbgqRwVG5wL8m16DXwr4ytu69uPBw6k5t74k4wmAudL8Com7tpSz8oHkWCHwbfX",
  "key12": "48XN2xSRjnUhdZjsat1qV6GFxUVS8GdenyGHRwsT9iGSfG3Hkw7cFkE7eau4Zb7eKNjobiyNebQRbADAvZDpGEyt",
  "key13": "2q6qfiC9HsVKKScy4M6V2kqgJVNHsR7ZofftBDRraQhsXA5xvjbW8jHJzfb3LoeRV3AFNcKJ3Ncu2W4S7N8thSyL",
  "key14": "2yKpMETPjmmKZoMYuLgdWDPNW9Jfdz36dxkY3KzayasNg4ABqbyHNBQb4zB3Xy1kD4jnHQAUp6T8ksQNqzDdAERV",
  "key15": "4Yz2kqirBYBHMVKxCssNc3YbPUYrQxhR6YmLicgKvxyyQbXkYoVMXbEBvPh4E3cHQ5XSdDXCZPZtcu7j2qhAxmV7",
  "key16": "526z6bmBHLaLBkTxgLfUwNJ2XgYg1sZWfw6AU9JZQ4s76jGmFrK9jd6nZuu6N2bf3Czu2V1MD9BRtUmmQcYVuXk8",
  "key17": "22bsvmjMPJreZLZTQb1ttRH3FgEwvoJgQ9weGvsDAdEJw6UpX7hq6nKnqbXcr9rb6HKWS3vx26BuYZe77LZVRXqR",
  "key18": "5oqgCgyxYoqHRzhqfGD24hJfwZzizru3tCEtks3VUaN7mCRFKbTmnFDsuvFXVyR1SAeDQ5RFc8KxfDYuFuoHUDEg",
  "key19": "TB8vGPbk3QzHEJdC7Yv95DoY28boRMfggeDhdgXx6eY6R2hr4aRg634151WgruYYz47QK7GdNAJmVAdHw2wkwEX",
  "key20": "J6cZ2JJ8fJs1NyLH1pCvW5JvX3X3g6P8m9e3bdaMMF4nfBhMtpRxJiEmfRq2CuJNovHK6C9Ynxm7fu1oRVb9wBj",
  "key21": "3fnviAQhYfL4FMApbuKoju6FTwfZBZ2nqVjSQnAXLnZFjcR1pTiJNW6YuBFcwZSRYJLBoPdQX6SnKvZMw3yHJkXf",
  "key22": "4CfBp2rH5CrdzPy2LbFUyE3S1hHX5seVgSWyoXa31axwdoNaQafqUqSCApdvgH9dWknNoZgZDPL7n8Lz6dtSozQf",
  "key23": "4ug5dHScCGYnkSS2oWJFcXkZHtn8FJnuLh93LhsY1JyfVNvbJD9e8PWHBCnub3Q1EnLZG74NApGfAGaUBqK2p2Ay",
  "key24": "4dos2J4sTqTASuKFimxD2ZDsp3thw8yKxcsnA2z8EjKs233b3KmBya6SrJuwqdYVpwQ8L6GfJER8CyGTKpdLoCR6",
  "key25": "4wBQGTUSn7HNiS7nqYwh9pDTepZcwx8shD6SGN72XdZEKsMEDATwaav6A9HLALRXDEYB4s3dsoaSnKuEatUV93io",
  "key26": "zjhLFzp89Yopao3c3yynVaiSPQkDRpNxcGcxQLJtzv4YThHD2WEvhEZp57PJjnn2Ty4swwM8HFeb16eGyzQZeyK",
  "key27": "QteNv8VsS9CXLg9oHv8zfY5yJZbhnvyHFBkfH7iB4AhrRHDdeerBPuTrtqBURM7ztyMs8GocChaPdQzjqRPuvip",
  "key28": "2SjgL6GG4ZkKmxw5JLvwM8AHwq1HzEFpRWFfK14oTKVhhTBjx356JRfsBnxAyR5wohtpu1oc3uFuVCYTXVJZoLZ2",
  "key29": "3uQfKA4Ccrn6S6jkcL2XjQQb7VTdohWVzvJS1fpMn5UReuDGcQavmWZ4n4TQym7QV8QZpn2Uk92DZD6RpMV6UMFZ",
  "key30": "4BYZqF5dRKKf9XVYXtSNfneFWqTY17L5FXkxoaa3dKbt3xSrzspPquobMMyaC47gUyVJmQBhX5RyCsSnf8G7RNpb",
  "key31": "5s6UrDGgbKXKXgGNhPPiAtB8WC1wMqHzWrHKkFz6DA7tu9rvYudkSnTTKkEBH1E5wSPayGTXPM6d1hGbj6q4j14b",
  "key32": "2fW81VafxEK2FTYAB5576C4sAgd9JvSXhAwtXs7X9x1zmG9hQKXsU9S3pyZRWey81QtHLffiYhZCtj9NHoEncWJA",
  "key33": "4itRKR9fQrkmRXRtTJK8787fZ4edpTRC6125S4eLfdKmaPxcjEoA1L9ofR9vG4ci63LhgKPQiCjJbhBey7VXG4oa",
  "key34": "65drX441sqCgN1tXfmTy1r6FQhijUBMx8bgajsoPPyJ3JJxFCGkQuBZ7Qwm3mwSrhgSkFe1sGL8DExgA7Dbag8Fs",
  "key35": "K12xrCZBBFxAR5fTjgZCBsbLNR1cui8LAiFxwpfUXqwifHB59pPvChTCAhZppWkGN8ZcXd4G8gdzd16Bo1ShhSy",
  "key36": "5Ae1PKr7BH6AAFx2P7qNWEic8UZSDf5BaBYGpjMcidU4SxcQSg5yJF7esd9R71Tt4zBVUt9qSPwvy4YQvShShiWm",
  "key37": "2742M7m3F4NCWbXr8t1rNXTJFwUu4mWVBAEts5ZuSgB7orBEdBKabHQBaNxVx57QCzsWH49WiEf1aZvd1izAiDVz",
  "key38": "Z9ptgVbfLnnZHHU2HW5GLf1pye4JwWLSN6zJQdBbRmV1GRzEHY4WYVmsqDwZPMc4N8ufhtEisjfsX25cpkLGGRb",
  "key39": "5Mx7vC9rnRmA7jLPzZTfVeUx9L3gDGNyjCgFiUHUfNEovdchQCqYcHfhqPZK1JYQ6PpotgSD4rLtCcS1zhFGppc8",
  "key40": "2TJwRrdKuRxgMmo7YJ9a1E5ase4TDbawr7VwdEknd7mVG2AMYNr9BXtAp9T4CvpddNddFBmJN3xdhQWa9t5Zo1NA",
  "key41": "3iRCz27hjPeuiMXP8uPXqe1S7KQ87sxVGY3TZgjTAnoxhymtYxaK3EBcS2rLNQ8VR4iwzqBGLLnPnJKPEun9RTD6"
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
