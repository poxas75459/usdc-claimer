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
    "rBpeacfSVJmp3gUHUNR4nHPXu5EoTnRnnphSLUN7F5ug5yNGXZsGamZWjEGSvYoCy3y1MzCAWUzLsRLXvefPfZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbHDnXnFuAvp3wybVtS4P4XWfR2vxRr6wpepiMGJ6CwQGwq3q55gH8u7PRV2SjLQPynYYZetAfPiWtyQcdyjfsT",
  "key1": "2eesc2K3eaa1BxFboWuzeEBRtPDig5mUfgh1R6sWLPgLuKqGrSKzuiK4HfyhccCMHEjYPp5HroGSLfU3dNHp28MS",
  "key2": "5jHZpYFmL29JzBzYNA8pzQP1iZVAnqNYMXtNPSTcREd6p3LCjALgQjYUCw6e6QEwbbrW6c6CByJUiz76UoFzKtKw",
  "key3": "3PwCfBHNs4S18LCydEbjRuLEsgbig9N3xXsEwVQq1WHSULxdjqgcnA2pg7V2Xzt9uaumMy1qyDHNZPL19mZHigsA",
  "key4": "3Bsj8NAy37gAi5zYmb9uR323QnWU4jF6jTSC57Uz3A9A7KKRq6jNvNY49Ft5uYkT4gV3vFGrCSEZQzutvfXrHaU4",
  "key5": "2tuxKGpQwNHyqUinXm8YhDBaZm8275ZZoHM7dP7U3yLFEBckVacqx89rjW4ZHNWN8yBAVveo96oRruXAh4F4kgtB",
  "key6": "56JN6kGz7MfxTkButQhCMb9NUkensv233xvBQvDM3zk9pxcuVcBzvVez9eNe9dPX5qFSAEF1cZNa6aroir4N4hFQ",
  "key7": "wwudnhauyReb1ZCE9UiofwgfdBU9Yw4kJEYW6sQTL4mAncf9HXwPg4FpxseTqZ8Z7d6FVKKEM9wfVrxfB5vizTb",
  "key8": "3mYZXQxBmHmoXhTGA26wex953f8TvbjzDpronZ7iVjRAGuXvYCZakSAxWfJc39DumqjHji9CadYwJGkrSkvzx3sJ",
  "key9": "4V2zdF8Mo2QKLia1xg77dPQqzoJhRpX2FDujh6yPHMmiJU1AJyG4KyajPp5c8cy1eNpZ7GCwN1kTW1KwhGQEo7Fg",
  "key10": "57bCAMTPGJPuKLRkY5mjx4NjHb32iJozk8K1rojz6J2MdHWQe7CSYdDK7U9j4c3dss2bTUg1Xp1Lf1BnhgZMZ164",
  "key11": "fdRfGjnVoRqzhpt3C7wVbHVBNuUwBRwFeyDLX6RmttT4NFiz4CVY9QARnusyqioGpLTr2TnuHbJNfecGgQe7AmA",
  "key12": "22p2Vfdr3djmYoaLNGRXf3q26xUXTL53o7diY2cih1UQJLTyWTbhp6qabnWuVw3gJuiVbqEiwQ8H2kTMUWiD31J5",
  "key13": "3vsxBMYzPuRgp3DMbFGXCeVhfYAknougs1PKQYaF6zzKxc2LcBu7ZJh2uzLFGTRsc7HneT93Dj1udYA8xQZw7otr",
  "key14": "gsSgVcf2t9LNcKkzojZm5M5arrrLNmburDFWzfn2PfEpPE8RC59KvLPMMY6SCvA8rgyorRULSkMTEoVLXDojYBC",
  "key15": "2KfrQuUHXCTmyywPjLHf2eDcaWvYwHbdXaf6T1bQZW8N2aYTSN4aRDRdu8aPEjAGW6v3ndURCLx2U1F6VeFGx9Cs",
  "key16": "5o9NJJLUv2jypcfZRuUPrRx61fgD4KJMq86EN1AC6u49T76D3M4MnRFJjGgvCXRsNoGhHqd73tZQvxhsskWik83G",
  "key17": "zNNRFpDgnZmKqc5mKJpKL1UrczeLFUpddbh6KmXsEdTabL6CPv3fChSxFrwu5Wh9jGi3FprJ8PkA3s9zH7PVx2f",
  "key18": "3z6JegwSCyK6aA3qfpNPZWBqAcHLWb2SNkhugTqonFTCqm9o8aiNquL2RWbN6t2jBDBfYdc1SGMsYwY8wwoSmNYD",
  "key19": "5HhCGf5NcvCUHJHEmFWLy29g89GmQksRXngeoJ5DnJyCRZ43a3FUpMgmxd7Mty7FG5aSbU3B3aaUycRQtZudnhqB",
  "key20": "VPeJ1Ur31oa7uXa7BwVBim4PDkhzP9Pmsy9vRUQcfV6PhBFifJQr2r5tgCPW64mcotUDyHWMHBpwKGkqCmoHV4c",
  "key21": "4oCuEbCa6brrt2WaWkPhj6pvgv6h8EdrBrRr9ENjmXjLHsNHs8pRpyyJLLQSCaSBPUkSd5xiMq4X7v6A2w1hD5Bn",
  "key22": "4AMPsvETbDjyGePPWPBx7Z6tpeq4gcRQtHyMoeg6JSweTGmA8FbYTCeyXR74W87MRSDJTE83RCmFUEv7w4sGdn9z",
  "key23": "sjeiVNpQSopptWeJHq7RvBNzphCr2KJfvUvgfE1YHHixADMmGwfhK14MW8SkK5DHCWATVqWNBbQtyFm8NtCrEC1",
  "key24": "3gid82JeDGPcMQiGrnwbV46zXqVqs9EGjjqa97pYnfG6K6N5xn8griyZakAdZFF1Zs8se3ZjqUsBB4UQ7vqkcbR8",
  "key25": "65qQh5t2AfFAd2jGnrcaQmmgFxQFsYMQpRvVta5GKCs35aWhk5qatkWo2s1VyFjoDQujTosPiniV9qELrwp4D2Yk",
  "key26": "4yQcTS8jS3qNDzm88dzzy9DZDtj6PjtMiSfhcHN2gDBgRVenNH69N4uUHsWMm5mJjvxhgP1Yk9pEaygSV4qKszwP",
  "key27": "4sinq33XYWgCLp1UuwWEY6m5xnAtSGkSxkLPLkajTvHciAgAMNGef15LP2ToRJG8rHkRnUW7ozqMNdU9248ryh6E",
  "key28": "37sFSggqzLpfdEHx23uwJUoKPAgkCzhmqWrsqaPkuq7rxtQNUHsw9vG4Z7wH5hGa5fpzMkHVt46fcjMat9gy94Av",
  "key29": "2hzWaePSLr7V1Dz6yARwWQQrWBNnop3d84eJDfKK2YXgGwUpcVN9C2xxCmkBZhJVNyHrFkCReJ13VKBDGrbtbiNK",
  "key30": "2agoomCLNASDb54fMoHmmUgqTSQGGomBXLBtVBKbJELKd7cHaSjDXFpFeE58RJxFoNtJFUJcpVcDz94RZ96Bqx8W",
  "key31": "65Q4vCns2rk9BBVkZfVx2JQtZQ5qQzvFRY4oUFPYQDDyvwn1CHYQXZFshq5W3bEYRDoxG928tnKdS4pQahb1GVKp",
  "key32": "5ZgYBsZxoiLPqX9hAuyiWk2ioT1xpFQKwgGgtWmGbYPTmoCywrJwo78ufB9SaPXiUU2pzSXjL6KHzgxAy1uEAfiX",
  "key33": "2zxc1SFk4TPBppEXkyibjAjCHUrwZfcyV3ZQEDKBXDkArgtm2BLTjwz5vJtnebXRscG66XXqycFNfuURSD7J7kr",
  "key34": "5xHjQhSF1NFPuM6iWVGXXWhWZKDVVvbvAkSb7pEyrfuPCMAZot5YT8T5hHnxaAmepd2aVd3HMXzpFrkVs5inUr5J",
  "key35": "52FU1s3YsAnJxHJQWqC4tyNBscQ6mfosnPEdoTrSywPCCkrteouFWBrJ55tbtMPjgjKo39mEYjGRoZ2WQnRDuM4C"
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
