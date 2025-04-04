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
    "c4F5yfK7mKp63AdcGTyxcQ3EkdpR7VjeYHTiM6qWwGN1M3ThRHNLDpeWw2MteMjcu9rNwhm6nAxNDCrLxCk2r8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KRqikF7QP8dmd1UsTS8sWrzNraSFyVMHe1MbP4P3Ju2QYPEzkszqrPKLnyG3w8HvJyFEKEn9wWeafC3LwXj8wLM",
  "key1": "2YLm3WNuAyn7txDAHx8WGK5UtiaXT9FDr7SPCxz48pkdUBtZxurr2ixsh5727KYcGaHZFCPUa7Ry6EfyoeNw3cEZ",
  "key2": "5dPgzqQpg7FQHCakUDmiGXNTMnpo6N7iPkZCvk5Cik3Ls5GeVebnQzQHdPBYLULoGT9w2HFY5LvDJZFjyLifzv4D",
  "key3": "2AUaMxoR7Pu18bqJpGFV9VnAFKUXYk8iRkbxkWe9pZ15BMyzdFC5vKCYYZZWZukWos31PQx7ugR6mrgAb1qnF6Mg",
  "key4": "4L42CQu9eM5mReMwdF627iS2HBayb6GFb7VTFDhBr3CGt74ThfZ47WSmMGwus9ZGaNmKwYHQHSPFQseEgrqJjsjU",
  "key5": "5zrTq5RczpoC22GVsXbBbK5rMmwEKU5Bv9kYBPCKUkWtmHeogDNJHAoaFqaw6XzpbZYVBXBYkVP9eyaE9EnrjfmX",
  "key6": "3TEcXJUehM9D8J1d84BHY5pRbxBmKP7a7YHgxKjff17MrDiXKN2KdwExtgizqX7dzwRN6eGLtHSw2XAdgqWcAfjr",
  "key7": "2haaPZKPC243hrbp7frWfxWrM4QiGe7phJyLnrvfB169ebwyKeGwE1yMPeTKqpwMfEcytq589kHDU8QDLiAe7i1R",
  "key8": "4uoYyi2GLpihpK69DUVVyiWvUyZDaeXfdfrGEJ8f4qoXReoHbchtgzjXPUjhkDdeRhfF9gJtjWMBis1QycbNZcxF",
  "key9": "4vDUnWqWfuUrB7WS2TtNUv6TbYevbnzjjZa7kq4wbKnAaJpfC4oQLNKNKCzcU4EwXsJUF4sg6fJ64Hm5JkN4qRjR",
  "key10": "29Dj4XR2kpBwe4PRi5S8gJYt3ygh26LLRgwE4tJkdw5oMcj2RSjp2PYL2oaMk3tjjzyqyUgNXp34W3s9SWYWyMaF",
  "key11": "WRNi793QVMCRdbty7uFvk9HtqEkFReHkaS2tNJ2LMq6pdQm1h5MevP7Gusxok7QEkHfkVNDDNsmECJE1bWT7fcP",
  "key12": "22WpyoQkJCYrvzVL8hxUGhFj4zCdhZVa4so8Kmg4sP1WyE8VpH8PSPm5phNA4swuLFMrYTiDa2ndfPxbU5LWQj8T",
  "key13": "2KxaUAMWDB2ANdaQjJg2hrKsFb1yGiwNxNzkktXUTc6TqXTG85yuzhdoPiy3LwWzJQnLTeTqvkjKVjE2PPyBJwnT",
  "key14": "3j67khaQdGsfEH6PkBPT1nuYX9yRRhwhqomEn5K9pVhrKEhMKDPkXwt5JNcCKVPVfrKXJZTU4P3CNwDpo1mY4aKf",
  "key15": "3fhnpnRofP1vTj548aSL2n7ZJxnJgDj7uXNENxf7bdXVSXKNLTupgJuyVpgVV4NagTKQzcf1tYEvugBCxo8FQZom",
  "key16": "5pQfimtuAchknos3WZARB2ZEj9X2EUnoiGe1kS3dgcuEdZt861xfp5Us8sBPb5ovndqYG8FWFVVSxLzQaaqVbJhc",
  "key17": "3sNyDWqzsAYjN1FzPh2yE9mfVZDo4GE4RxJwbBdgQ18uhB7sQwa7qYAKAYzn92HsNeMdbbByvYKcXVcMgNEyarmX",
  "key18": "4zCdKHJeTL4UVDGyFmAK3uDuMyUSSVjvwA7KKgRSsDnHWNLLtMMyW1ZgZrsv3kDcCPRCxPMdVeePLrJqPQnXq75P",
  "key19": "FC8ZdJ9bNcch3zpyYF1Bu5JcXLHSXjX9uuBRn6XEatjUg8xwYJrNy5xL22QrwzijCKXLoTQXo1deJJryXY9ERWq",
  "key20": "w2qn3Gnp1gLxktbvgqTHUbtwxoiS8nDYZ1921czpNz6KcmMa1hD2bRenzgP4gw9u3e9T42gpGc1yJkkSjzeYDmi",
  "key21": "2TVJ8JVRzF7tGdnGCmxdVa8tW71Xei6ii1gc7AC9PnGJ2gFUvUpg8Pj8ofNgNf6MfSnNv66umXvqKe5MaUKvdiPg",
  "key22": "2jwtcvzwmN2ZAPNs7sws86bZmz6MmV8FM2wVacxvV9o7zBuHKBR99hVQMx5qrc7xyorcWTx2bg4Cr9APcVc4V2Lw",
  "key23": "5m95EcWHE7mMxdkSsNWPRm3UN4nfBWHhXguL25yT2KPXb2ypMGgRQ2QPYMokCiqw51jRiacRNbqpQqijJWpsFCo5",
  "key24": "65BYYnzrQ1dSuZ6gXfZCL3ezi5qhfjMFpxBtZyGV8AyYRgaXUwfajWG7idRrGZcJ1sLcsAEtqYgk8sYfaJaoSE24",
  "key25": "3z1uS6GUkoA7SFgJzFpcQdDkCj91ccBF6aHLbcCuPRftnMsz3D6GsqrQQD5kLy3nff88pxFbkXzUhnd9Cs5XJteR",
  "key26": "4vvsxu3Rhg2rCGNbePSBegnTw86cdR79sBUGvNgbzCHEutvjb5v6vfWg1jg4uXnkMSZAiHx9UEXmhD5ECsM9YFbi",
  "key27": "Tq5GHBgS988i8GAkStuyUuFh1uHTBCN9DtMt9i1h81CzfsX8HN3f85trEC5KqM7QjedGGEMYkc8k3hpLig5uZJJ",
  "key28": "2BDbqd5Z5YQJLXgkb7vSQQY6o31dqZK9dGuqGQiPkrTygDBkEbxw2qwVJaj2eYQ63RCUgTn7WRRB14R8ksh9KX4n",
  "key29": "61Uyr2L4cAt47bcAsgEwg4JqyyhgBhTioQssw2s4hznN7i9c1uvejwq64vfUEknaVRAtBBjb7Stz3Z5PvjzFi8ha",
  "key30": "5NwUkFV2YW3zPm8GjohRrUnWJWXyK7LRfukiezUPm9QX4fifsFFMgmqdcTpfBr9TzMBZCVV8is9dtqtbzvY6kwHE",
  "key31": "2q1tqvpbCE38q8CwierD1nrtseJwhNKHHKmQtqYsdy9zdrneshbWWHRjBuzFNgQA7W2Uq8pEF2nusBtDiyPk5zhy",
  "key32": "3KfxdjiEy971JbxCNUDC9sriC45T6kCiVMTvK8f8LH8X7eQmAERWJrowdcsGBy457G2pWmtnddAGL4WctkVrVHJZ",
  "key33": "4RV5q5RmaDpeQXZJRYegwatmSffXNbRMoKV1h8hTkYWSHvpcWuNwnRw3hxYoDYtDgVZhnrbhLtozZbzMxL3tBGkg",
  "key34": "2cbave5yofW7kgfSDfibujaMARkAgqaRMBkhrNdEE2xX2W5eojrvL2p4c7qtiVNbs8Ew3hEAHupF26kZRKSbXcwM",
  "key35": "46AN8aci1mczWXctPjCWRM9aTubVCGsoyVB54MFqoQNNDeT5DPbkQsoxh1YajMDYuQBcqXoRXWZeMjxtsMtn8FWV",
  "key36": "5JLTBYRKJeoPfU7YPhstm8gfjcgXVPhHU8fmPDPjqvv1Cbocm1hDenS3c3JjpofDR4Y2Di4Ey75nNQtGQAigs3x9",
  "key37": "2vQbtRy4SCikczU2wP8xX6mEZUbFP7T6gBDyfB7CJH7FSwtXqqA8BKu3AFfc7azL9JJPeEH56ZcfrKvbRxqhwHCB",
  "key38": "4vD9i39bK75KKvwbgfQLH3p5LiuyB3kiDpHUqsD9oHw8DydbdNkQU1di5hcoYpLvFqFpDuGVi2QVFhyD86Ap2oRH",
  "key39": "2G9YWaLtUWzQH6aefA7uS3q9mdtrYUNDR8AeHd6FwECQp7EnFcvycNB73diNxfkqZNnZw4gvEHij12yCCEYQc7pQ",
  "key40": "37UfYnTjHfRwc7bpvYahLMo7Kqnj6Aws7bbC1vTLUWUv2UMnSJvE322eu8wwCj4pP9QjiAGeuheoRWhToQg7HnKA",
  "key41": "2C4exeMEKa4o2pi3pK459huCewQm75twzERQfBHoxYuGwa7MVPP43P6JbHRraz9TPr2sjHbt1mbysdMQwwLpL35E",
  "key42": "5grTyssrLVvvGAtBeERDaih1HezyAnnfPpVLodfFPTJazfbU5SYUQxZhUQNX138gTsEPJS2RPpQj1i5itxHXXJRg",
  "key43": "5HsW5vG3mwtxthkWYPYuprsEvJUT53Y727qxoagPGZ8qdCy49Ck1ubuiVtky8f9Pe1MG2TfSFRUyJQcDffhH7fyu"
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
