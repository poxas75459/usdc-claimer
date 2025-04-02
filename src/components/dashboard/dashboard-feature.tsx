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
    "5UWG1A7L6YDmXqZDkyDTRheJVLXjYonaXkE2FdEmBAZtRDzAsgUPofz3QwRjtpsSvbuB3k2xL1jRkJLwjjnBjLzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bxdBNTS8TFXvY5g2QhhCRBDNwso31HEntTqUaxy61A8RcVF7cpHA1rFUQBbPqf5BDdu4CarftRx1hrEYDUaGxuW",
  "key1": "4g2SmHQd814VBmscwysg8Uay1KByk4564rjXPxvW5ftnLGLpu7CCtEAk6c4tSUG1wAyx4a5K445XieXUc3afJsM6",
  "key2": "3xbL3Bid74KkCUWCgfviftACftSGmHRMty59aJbTZfJiDrGFvbJQ3E2m8C64hKaAHeiWKFXE7iKDFzDYP6VMrsJF",
  "key3": "4mYtYBcQT8zq4vxebtjtRDiy7gHcWHokYYveTkRZMZvRwWDZrRx7DsXHDVt47K9XottavTtXkgtu8jE61pZgXVaB",
  "key4": "2emf3SbTpEdbBTsjfR6bYUdGraMv9ZBmvzkfcMA4tWLWBSrp6F1dTE5WFbtEkn4ybBgSeXxcRvE2cHCGmjFyjTAS",
  "key5": "24uY5VAqYiiaSaPzw7StpDytjYenSTJEWmJ7BT1uFqdeHJvwyQ1PQE9om9biUpzv4EWuWzCp7tDfxqnoXBf4itBk",
  "key6": "2aja1EqJjCPfVfXDMZnFjmwB1Ge12B2qSJkGioRqmCXBm1tPdnWurTg6gynMZR2bcEhzfJcQ4gq3VMbDEtocMmsg",
  "key7": "gvhaCuvo5mQA2EXXYSA9QPgQ3iWJZvrqDQ2nGHXMeoEZNBf5mYPnG7CzSaDGn4eiQFVPemTKBazmb7xnmc4JYNu",
  "key8": "4NHnmx5wvpcoMQrLyiCAfrMiQb2P5qv4ApF1GV7ZdnvzrpmnW8oTGdmYLrz6pDGKS1UCHp8Cm27wNGnDdmPNJMH4",
  "key9": "X56GqVhUgfDAnwEjpvU6hQbfSN9pWCCew46Co21WQcmxNKG3vpo2DySZLjJhkDphrfmNm6WyAKv3qLy2TyVEmtr",
  "key10": "4e24d7H33bsztndziU1DoJZFN2cBE2D9FijG5dpzRGXwPiqfV4jUwpRyPq5qfKPuJdfr5BToGaLp3XaR3NKQXRhd",
  "key11": "3n2e5dXP84uQCLUYXzF8MTFTgFFU5R8RMPDHeGarDzGayt4Pwc6gWreLCuZozHsbo2Lsd94sXGuynVPg99bMyiVi",
  "key12": "5qaKj2cn3QNJfb12y7HQd9aNETdNMLjdPU8EjhJ5RuerySsED3ZTgDjpeMrnh9C58ddDWVDaTcmrvRxyenVWm1Y2",
  "key13": "zKcL8mSERAHUCZr5QRYfP3qJg4XvPVRMpaeSpYAWo33iD55J96HtPXWALrQgqjawHCTVHPRUvdQam2k7etFadbp",
  "key14": "4qn6YbSJs6r7ijC7Xoy2zqour1LMKHE4KQduMAXWkr6pb58BjFEx6JMnbMXn9sA6QJeMveGc1NotimPgcANg7sG3",
  "key15": "5dLf2LtNzKTFhJSmAXgy2cRGErAEW6WP695w1iNjvre8ZfWucsvnd3pKRDsTFd7QaWZy1CqWkugykd1NgN89eTuZ",
  "key16": "2gpCHDjkxnmvdBbzTcSdGaVyZrM87hJ8e4BSGBTjNoNMVy4h1mMaHgwrG8QbmwUgTLVvggc42qutwT2f3BWr6HCD",
  "key17": "2N1GQkqRyyfDmmoPmkNEjrsx1FsyszWtmeHYueZau5QKCeZXouHf3s2QUG5Xu2jHiWCAKRVALEcz4S5uJrrw5zCp",
  "key18": "4Dq7Fha9qb1EY72ALChN7Smx3P46ftZEQBshbpfvua9zHFcZeChXVJXH1S1yonfZeZUqgnDShm21fgrFHa5V2D43",
  "key19": "4vgDhVpx9Cr4Ew2DURG7cdryJySAAY4jvYCgyirP5GgJBkXMAryMNKyGwupgYdmMnkcM3gLAsux7ekvbYD2uJbYr",
  "key20": "hR7r6HkqEErL2SJ5EXWgJSSvwNZAy4FNysijyTcGmx8s5ooQ4uhskbiUyaA4AFyzgL17KwmXCT5wYZTXEGG7pwp",
  "key21": "3d8vm6jfnmRSBEXERTxdkiFUMhggui7x9TCHDpzKKtmmXp8vC7XnPh45sYH5z6MpuSi1WAR3szKEQycejYid9fvk",
  "key22": "4ixgPST9PBiEmp8HUccGk73UuAmjgRc3EpmPPkt5x3uBqT9dY7P68RSVvJr5bW3VftkqLtBNoQaLfF8SBrbejYi9",
  "key23": "3ZCkogENPkVzJqSwC1CpX7q6McsmBGS5Na9YjFVaBzhF4oYr3qTPn4wsfnXoAb7x99LX8omBFJA4yq8FAi7GSMjs",
  "key24": "4KfSQF8YYsucyY1QS1u1APF1SnUJgzDdDY7oRjJBNUEFed5qKy9SDsbZRHPZRJR4aApXjWHvui6CtsDdEvdusW1V",
  "key25": "4sNhvXmihPbKZuJgazp4q2wq4fLFh9F63JUujEBDMgx9mcae2LCx3bVKy4tEBMxNsg2LDbqzEE1wpMStix7apXs5",
  "key26": "66notbZNptmiY2ALrgDTKiD325J57EEAg88cEDmwYA9cyeC6z3Byzaw2KvTqq8Vu68uKWe9vL7h27sTbRnuPrtnL"
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
