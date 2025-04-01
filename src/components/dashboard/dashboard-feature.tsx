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
    "2qah1BKcsp33QtsMLZvHH9fQhKgmraudQCJhK8ZyuFjLbA8Cm91hZ8BU2U4Demt7eugwjbyNEV9mDaqWPGgoV7Wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CczuVTeybWCFW1eFkk4Gr3E86WqtQyPX2fqzmGX9Pzhcwhz1zDV1ATTdDWVLwS6MRuoeNedccY5hmLSmR8Tpwb3",
  "key1": "4saSus7roTvYQCFpP1qyDX7wFzzrGiF2J9fFJnKzCNQFV4kQSz3DmYkLRRxpzDXnTvEYYSfkszjSQrgvuJrgDxvG",
  "key2": "2AhwircNiwmRixsqx5t5SzmSWpXMLvd1QBBEPVSM7NciFPxbRSv2J6YZjgz56oeHCbjx8vWDXsmmNR1GyPGMB7AJ",
  "key3": "TXH4Pz5nPbEdXiv4AvpX3byEM45PRYcrRwDUk5NHQjHpQwsWvyDaPCSvMzXZXEaEUAzbkG3MV1v8xmkr2p7iv67",
  "key4": "4evuRNtrRQ4CSpZJhPomdXRGKoNSupMpDxGC5dCWm7qmGwQpD9NQZAU6CiWa8A1Ddr4VGAj535YMeESbLoyAF4g7",
  "key5": "5RBmez7eYqqy35Xr8S6UeKnA4XJfNsCzZYGFiAXz5tFucCKRGbaZDGY623NJNzr8ip3r63UgKC8t14RGTve7vKxr",
  "key6": "37eGrCgqLJrKVRUbbN2WncvM29XjQGxr7gkczNMiYUkHT8kg7X72owcMT52jyaiSUj6ErKWGbaat1oyE6CeWLtji",
  "key7": "2PSBi7q7V8Zs6bdwzC4NDrBqJpmGLjmHcywRnVHWTq46zsoMDzZFf2w6SsQeyUUUSfGt8vF99Bba3FGfeBEnyepj",
  "key8": "26WAcVPncDaafgSL938bSr3DKMz89h98x7dypJG1qpHqNj534Kv9oQUPHGr2dYAJFcgs6j4HCh5oDL59FdEm5b7p",
  "key9": "4xmhtY6NHvXtfbCwMDbZZwvQjUu3kKL5eYbRWbRDPSNMgHLoTmt7vty4VnNCjyjuJztbW1j5PnXK5w6h4wg19HUX",
  "key10": "5z6WmL8TC4jGLipa9NDDLKcPUBWnc1AcsvoanzTDancd7aVfYYJfy3Ke83XNoMrv3qsbwCvYe5JxysbP2gGRWFvW",
  "key11": "4txJNkJ7fAivAUXfou7ZjiSxyWnyh7juzFehNg15YMZtSP1FCtFgChqey5yp4b7F5FZMGESNaf4iMMvmkzSkYepa",
  "key12": "5cJVxER4HroysAHP7eaHNvhmKZG1TobzZjiQ9vE2ZVLrVXNw5uu8qGaNiK1hCFTKLbdYVPMqwSEV1fcTZnHBJr5e",
  "key13": "Mi34GfLGScNsBom62ujiNikTcBoTP9Q5bSXiQHgM4GfoYT1mnPHJTbXXr62nDDPkwKY5dKmGPiuhKorGK8KL8Ec",
  "key14": "tGpJBCNWKs3EbCYqhMX6jrxnbbSa2CwqUXy8yuWkgZGRbd7aMXWMvDP4Lg34Wg5kGcxse1D7uuMn1nL4Mzz6e7M",
  "key15": "59uYpScafuMNTJ4xKb4BjvcEZcsSJmazvRwJtdM1JcxMRmqBMhRt9gZnFdpfoRy73zEpj6XGD1Zw9qWUM2i6BCRd",
  "key16": "45vFfSYRXa187ihspV3agpq2gwdasvaF8sqtwoA98zajTFgzEH4tu5M7n6LGrvMkb5BUXcZfoWBPeksY4vACwa3J",
  "key17": "4ryhMKYTiZKw7sbTsQJypTRaicf4pvpGR9qrMRnqEY4BVxAZ8DmpBvNxJp24KxSyBKQSYSmVPFuiPX13Se6i5YEs",
  "key18": "5kX2yFFe3vxxZY9GRQsK3J4NMA8tFauG2XuKEfu8eNYuzcCZiF4dXNewX9HKmGZB2K7vmD1uz1Joe762wpHkrGFb",
  "key19": "5FwG6HMq6jZ4N37qyPVrkF2hHoemQ3jLK1fW9FA5EJEVBm6nAvRQebPQz665D7D9NEAnCrdN3XfrtSi4vd7iFLWg",
  "key20": "3dPnRqFNrZPe5VnoGdw9DJgWVfrZKEwbbtLesxYpDz4w7BMQ7kx64q7gy8ndaPydn3Ht136mJimaZE7euE7bLy85",
  "key21": "2fDMNW1hLTq2QxPNBRo8zN7rECUueuGxP5JC5WBJKXsysvHZTMhENpnm7G77pLtGVzhmr1KQWUsGfqkaVx2Mk3ST",
  "key22": "5Tkos8EeTeTESfnZSGSe8b9Fp58i9bqiQxrMbDMG85g9A3EBKeE4BmD1TheFcaS6aoSePsDxU6oGu8ajWwkWK4RC",
  "key23": "56VP738nXRiJ9FFiSRD4rP6rR2GnHt2SFhKimaToz4qHkcZfvt9sWjfXDmE5YNt1RbKmnSS8EGUZQKUfMjb4H36j",
  "key24": "5QgizoGofVBU1xYZ4nxJX1nJ4JqeNEYbVq9rKJ6gRWrLN9ZsuzbHmFMfCehV7xgKiTMRLJh73SbFn2kMdmA7LPMA",
  "key25": "5xYBCZn8P5Tpi5AHpiGLysbajUuuR3veMLMz2m92aFVb2gCgoTTjfkHDu6V3rWGihRL9VJnBzFPgjaW6VDnPo3NF",
  "key26": "HRSpeNJGY8uiazeq92oBMiYFzngk62wckBrmdTsmao78ocmeGiYBrTawymEwErobzvKVZDm5qmhYaxKuukzhuks",
  "key27": "58QtSGiMMo4rTvzV5qbsFAbZuEsdT81dq8b477GQesudn2NSLr3EjMZ4NUwqeG8QuTE7WiWXHN3j77uLKS1mJ4VM",
  "key28": "5ERAZjzJuwQ7ni9q5Edp69jJGLGnZJqFp7Zrfz3TWYz48FWCZfGSbhyW2SU99NZKifuwfErvPGQ6KA9d8rhAgWo4",
  "key29": "3skZy3sVRGZ64x6KTDYn8gCNHeaPD9orc1GoKq4Qd84wEnS3Z3s9L6b5XcXdZvFgGEEaFX6i12zZdcAtjghcPvCF",
  "key30": "4deYtXDSZRo8BxBWgdED8BCaGJ8jL7WbjCs5h61zWKse5rABKkRuZCMNzypckypjVD3Cvmk3onEMLwFHPekUQuPa",
  "key31": "wjjMHDJY3g5JiXKUUetXgXnqcXR1LgmqX7knnkDbyNGnVv3FWfLCHwVwqarLzrDogwfBxsM2LgBMwHy2CLBvNNo",
  "key32": "WL46LC1hHMJ4oYddee7zEoQKKX2gcqoMHmD1K1mentN1fS7f7dvsqvNGokn86Rq7cFyoTQc8Wx5G2Tv4NpdhXdH"
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
