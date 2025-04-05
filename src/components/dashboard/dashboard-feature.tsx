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
    "4HNev3jzvrQ2f6EvGeU4WoaSn2M8cy8yHyf9xKHqwood2VmXvb7Ua3eqMh4P3aBFApe5emEWgohoALSpzbNNnUMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5raXC8hTpXd7z9MhZocKPYNRULaNo2E6q1PrC4bs6Cx8tmpgySbFDEgCsp87go3iXXvTgP5mfXkbaQqLaQWLfrzB",
  "key1": "4WwG6M3xz84tHDmEu2sHjkFHHhb9NLHWjXoEj1z4YNpv7U3qqw73g6STEnfqnFFS3obFcNxjQddPnB9L3VKDjysY",
  "key2": "3SQZCi9Ze63iGgCHefWLmQjDE1BrQvqhPr9NEvB5zzYibhaiE7CaWZbkijmcmdUaEttbUgrz7yRzzsa8bzM9icuG",
  "key3": "2iNebehqKuibLx2SbZ8y6keuThNdSK5kwv8oThwSCFCWeRetYvdxhZfWaXaPM8MYXEMZyQRkydqo4wgTf8Vh6HAS",
  "key4": "51ibcP8ZJuZERDPVZZ4Cp1mLbyg7NV967uNodeKnH5Fg8yy1kJv1bqw1AD5YyZtFwGxwvqhDAK79oF4zP3zYptTL",
  "key5": "4q8NbL8PwHHoGbdc3e5fKmayRN3ugSNtzLzHaJDhzGpcUw93NZnwYDh6CKDEtY1thaeNERA59ZKnazMqU2opCLMP",
  "key6": "5GdhKANHQCrPWa8VjVpKpqG7oHdDstoYUckfgQbBGE4DWsELcD9y1C9TFPdPuxu9VRYyrVujhh9j4CnYfbYa7tZm",
  "key7": "2tVcyJaJSG3e7kCVm4H6PJDznzJ37RVAVX5U9Vatpk4iYCcjhLcwWFoLHw5P7AA6Fx2xcpCajjiY63o66tPTtJL2",
  "key8": "4Xx84xSAgTrA2jH7jeEk5xKjo111ZA2ER86XmcQcZmBwZ7MtvVZPxxFYsqJcug3jweYxKEjcrNMPosUaUk4atZeT",
  "key9": "2Hw1knNmtnG6bcJQ9qfh78h4ujhhV9tgwuDzGtHhfBLegjYKhfTLQFz8MRRoZ1KyudjPMyQRWHEqKNe3qvWbWPEq",
  "key10": "54HdQttBhGBFDuPdTD6UrTmDrPPqBsm2nsygqZSc5QX2JwnNTAJBfApbknYBCQhoVZqMJRf5gTbUgHBJkkysTUNE",
  "key11": "gCK5SEv7hPye8MUrH3SESJUxmDmkAzrzGZg4Fmrrc6kvX5nHJEaecZpWFrmh95hoT5Ay3bfpK443kWqSCU71wvC",
  "key12": "gFpF9yK8o1Y5kfDiC9KE86XfACLJAKyjWvYwVsDZkXUSTWpWzVpGXfYVbDkS7dD1bAc178mycofmCvMNHWUNshB",
  "key13": "p2eqqxc17Hy9UwoevVLdwntqXPHpQ2dLm7X99xjH1ozRgfxtn5MpbYasXneuL6vF9RrZ4sVU3YBC2X1HdNgW29g",
  "key14": "RTvaTPjodzzsa8wki5hinakkR6daeQFEvgvCniqv3tWrgMx8pZhCTddBSPgBynRgrvJV3LphUR6aCjZhvjWPeFT",
  "key15": "5JSioW8J4FcDs1TkX4s7D7BxSPvDrFP7gHi5hmA8EAwBZcVV9F5GCBo5Yxsbx84nx3GNaP3C97T4FVUwkn548YYx",
  "key16": "5fwh4ZYS8YBz2YLWu5X7NGvW6L8XRLgDyjPEbpXQbHtGaVh3E77tv8F1vY7stbiGYLHHzKq3oHEQfe1oaw7njmPB",
  "key17": "5UT5cknXdSN615nk3Es6DenWJrLcXMrun1feeSUiBvi5uYfki3A6FF6Vnk9QRS7Gz3xUaaR6WdJYbJ3c2ToAgCcf",
  "key18": "4E5GYbhVxS1tiueiCA3JP1xWcc8PBDtP1NQuQpAALYfMP1YQbhfTufhBsKJQz3bDxxtCRnEDncRWyfpfY4HjCbKW",
  "key19": "2W16cH63W7yi624SZTHU8eCk16ZF1VfCrfLp7vP2dUFjQqm5Zyc717fy8BA2vS8H79gKmtp9iCTLCZEGNL1pm4EB",
  "key20": "LJu48j8nfD1UbySHy5PbDCKzoZZATNoWrinUXVnjtxu29k3SvPz4wVvWKT6cA6XzcQZNppSRu6GdPWd9Z9UDpSL",
  "key21": "2WP12EaZe97fjXJjF4B82KSRxGfGzFskPZgK1FX1fFtS4UwKTio5h7rzo6bwQToWYMd9fx1Ge2oMVUwYecjYGeup",
  "key22": "3aQyGyaZ6HLKgzfSJVXZhRhd1M3Jj38RggHmuhXLJ5UqcxSTvVf5BBNrWGET6vgBPfDAxiJtaSMH56uXwbux2DPn",
  "key23": "fwZ8eu67WB6QM4m7hu9SVYzoVRNf24jH6jzhYhC6Dpf2vGz1GAAGsd8Q4frRsCivBy8QCe11HTtHLzXPSrBLKdT",
  "key24": "2WAPR7wew2NprnBaQZqRsW9oJSUVeujn2wYKSc7EzzWuK3fVmJWXnbJuqZcmy5cqxkJ4LqdTdsn6jyvVybKEnpTR",
  "key25": "nRhVUFgtxtG27EE8WzL4gCfN7hwmJvrzoxNRUbkMFVdGdtcr8Z1QmHH83e4onRP3YXXi7uSTLQPREQxhtZgy8xc"
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
