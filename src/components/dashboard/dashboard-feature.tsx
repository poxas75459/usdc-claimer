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
    "56ZG2PboZoweHPBwxRBxHgTnZeNTTdon4anBmYJSmpLiyVBLJKGRXSf885W5V7WxdJguatNcrGtHQ7CMH73zzJMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m1hwrmc6AjRagporo7uZXBJoEqZry5sBvgVvAZYSUe7H2oVfFtwnyqAoSaQdKjSiBhFcYdv4BLYGmxyEu9VDQU7",
  "key1": "5EKonNx543ThxQNDgBRFCfALam9cc5KKaVBFhakBDbsbozWGGFN25wpvUvVQ5K8N28r7QWTwqqfk3M7cJG6nJD2p",
  "key2": "3oKe46iBCANZnwzqT8oxyKPiFSr8FbPFA8pVj9C8j9hYqwtEVwaGRrJjU1tv8BS4Qy6q4auRCajADcvi9dCBXVGQ",
  "key3": "4ozVcf5MSXy2pqQaTnjXE5kXMiWMyLscqBw7Lw9SQJgNj5BCjSu1ue6UiadEmnU87pichuUXESxG4AZcUmsufP8P",
  "key4": "4tViN5fPmJQsdxRxFBEtoebKPLncSbMWqcSN8GjUruusYqydqbE5nG7NtMgJTRYY1XJ77CUuvQvwVfVdZqicQa36",
  "key5": "8z3Sr9nq4NXDYStGjtvWVdhFyvokG8qJF1XPnHNGU3rdV4FzeEvxZRErmQcpNeqZECb9LKtrhvEykTp4WMKxKaU",
  "key6": "2pYWwmSiY2ENkkz36cqPrdwnWjeJ1JtKiSoRdMUe4FLMrBNj89EwFYuo1F3UVqUg73yg9QMJgssvAupm7qNEwWTV",
  "key7": "3Qes1fx6f987fitdtRfBSNbKWPR6tRf4KMsordwVz3xQVR6jJR3Wh3AAHoaNpBn8Snxh7DCf8seVdrj2kdXquMXV",
  "key8": "zmYyKgoNw4nNXoMZW39VzukJ3wLaRCRQ92dCrXrd2UpjhgZ5UHPTGHxqnW8m9nDGyvAiL1UwvwK9emWga3h35eX",
  "key9": "591q1GkvhQjfW6ajeLmcD2cJU1QDHoanUusyZtPQVnaxdB9pBUsbyyYaHRKpgtySVNLda8VssArZRhzggjQhvcTe",
  "key10": "3zS9fbef5jZkR3iMfxvR5SAJrDPjLCJ7bnC6FLkGNy47GNwyicXxz6ZQoy9UDRc7CP7cuwxS775Dh1p4MjZR53u1",
  "key11": "3fXQcAVMUdZ8TTJkhnJ775a1M2zAnQVibu781eiiq3ccTxFVAugT8FBytYCiFjCrZf9MWxr42B1JVDc6itbThk5p",
  "key12": "2sfvTu3jJhcFn44Te8hL2YKjm7TQ7ofxjyiwro51wuSLxZ7TpKhHVLsDub4rrpVNxVMBn6R99f9hHM56zhYSzYFF",
  "key13": "4jnYMj3hRc1D7op7dmqR3TpVc24rjHKKM3R7JKHu2QFtVguJL3cHeRsz7MPmaC9zVKyHWSuSzZBDM31RPd5oVYKp",
  "key14": "2Qdaw6wYc75mdKmjRSqmjqUhgaLbboz9wn4zwWmDv2btmDf9kGSg3RpYrwRUHU95k6pGpBP1515Eym2JWEirQJsR",
  "key15": "4WHaAGKPY5wxa2VEKYVsdFdmPJWkgx4JNkGWMQCSjFGWt1cnidVqe5ZcBWN2xnzy6UYhx4ffyDhZVghisASS2QFs",
  "key16": "4E4rmFWq6fcWZXiZiJjeEAr1b7jbaRE41omTPq7Ez5uxnXnhJ1yunq6EYVGwAkKYSLUUv33cFXPATAC6bv8DoqYG",
  "key17": "UzcHYHv76rMFofVHbrAwkwTihGvFesigEtXcGs7nCQX2sYAfHCKoxJYGjE14rs8vvxsveTYgzr5nMmfiHETKRcM",
  "key18": "3E1HoGTAeYkEejeMPRsn2hittLtcq1MzehPDqkQvDogsNo48YoGeAtNep5VrtroK1R3cDFrqe9jfMmn5ZBPm95cB",
  "key19": "3QnZ48JrbTVXYobvUYpWhywF1JB6vB1XpbxzbX8dTjzs7HF5QeZhf1a1oapYCm6f9o7iTBH15dytf7XGbFJe8VYq",
  "key20": "5LxVoVos9eEgniwUXkr4c2NLy3c9YnNdb9ht9fDhMaeuttTZ5YmeHXfFek6PUTrrNWeGkUYh7JhCJiY4Dz7ZwP62",
  "key21": "4kynPxhLrD8Yd5FDozEi7SdSK4VBPMYGJnjSvYL4h1bXRw3ZeaV9F1zNzNYvPNEawfRbzchrxxHcyCmFDgpij1D1",
  "key22": "5MMZcCKeKsZRbasScbJBb3FzReCRN99itZRPjt6AaeyHGqXix6Qskp8W25dzQCSdiQWHruVAaUvYaVV2Gkqv7HK1",
  "key23": "3wkDseGrDfVioXMNA33a27fz5gcrbQ2LFJNj7CC92LtoeLREAZybSXwDtJRfxGjEUhBXFJY4zp74pFxd2obn993w",
  "key24": "25bi1DLgW3Y1TZdd8XG9EwTe782bCmrER7PG5dn9thhDF987qyzVjpomxb5ur98Yu5wYknPLQx3qUSrWX4Ehtgwx",
  "key25": "3d8WE3W8LEP5KY4fNnu5nwkMs3Y3spBogTgDgDCZ66YorD6cnvoKzh5v9GvjnSJoSqofzcXXt6K9vV5u844ueUi9",
  "key26": "49UVBWdy9QKze6wFKSvdPnyjJGNhKo2yiaZKfQwYLNUJcmd4QwNYwF6U8VSrCYA4Kh4ELiA1sZt3QstwFbentX5q",
  "key27": "3cjjMxg2Nc92ipyUdMzYyL6BrX4FjFJe976fG6QEqag6U7PJbCKe88SbuU2y7kUuwinFfodryg6MuAbzUTGRpyNA",
  "key28": "2Y68BXGGFB4FQ9m298itYD2Ypd9Lo4NJ221SbZmam8M7ozwzj9MEPgFsyEFQggdA2uHEnFP1HjbZRvmva9GHt4Ly",
  "key29": "5dGrhjCjW3J3wuk5A1yFEucjio3TmdWZefrSJqaWGQ9UekTCQXMX7rrSiFZSH6Xgt6qgThKyar5X3qGWczHymT8T",
  "key30": "65irYATeC4pEoidavQsuRkb919atxPr2XzW7q5W2zKsz97L2N4FEqs4HBDmPQ7Y1aDDSEfUHALjWBBUHWLWvpzDd",
  "key31": "3UkjZz7WcDax988sjgLbrvZ5o5kXJMsU1S5LQFQ5SV9JsfBeV5vEtnfKDcbZuV1drpeQVJaKfz2hdbPFahwcWZae",
  "key32": "41hG3QntzUp9WFt22Y91eQheavjG4SsEgT1L3fr56i8zgJDHcKChE9op3TJHoZXUViuJPFYHiHa3BksCaMY2Dtts",
  "key33": "sGJiRee1npTRqu3yMGLYpLm8jjMoGasFcEbqodSgfPWfK7zMmrUexD5uvjKMg63u6z7k4VJFcYxiAagTJnS11kq",
  "key34": "5H24ig9ch6cWy8s6DpMPNwABP2ZsceRyUKVKNUzsPRxDXwBMxk2mkLr8WaBPo1fJQPUBACk7YyGpQXiSCU47TfZF",
  "key35": "3SKUJ1dNuSDuFFgAzrLEYNLyRzwAfMywZZ4kgsquqSH2NoqQNhtN3tFaS4M4GDGnKet2q8psm4GubRKr6ipdZh5Q",
  "key36": "67M67cqkhfTnAqEMTySqdjNC6E3MAUmrJhJY8Xm4NabAyXUvTgCsyQwsbAwNF2iauRxsqeKHfW2jnZneWLUNmaua",
  "key37": "5cTXQNWQjBh7sLxkUTq9CyuwV3ua79aLYe5XonqtfuWwNqCpa6cHCVNwqTXJiJjn7TEQ5aGCMzY1SQvTNLEyyyjp",
  "key38": "5GkWXES35dJKKsKAeiNGC27TG7iX4Zp3zXcsXRpBB2hdE9NeUuzmYZNn3w4EPVJD2H27bTiZjszFcpVLpFcYY2Mq",
  "key39": "5EB43SbRKFbUnHXNF1bT86JYRQZpZYkVt4Hhj6kzBuFv9iXLgnwaSJHnZjwhcd76RiNd6F8EtUN4NBu6hJQvrrrZ",
  "key40": "3LGpfyktmXi4Ep3L1C6dLBZMSCrRTexagHxjSbzdZzrhvpUvixHuwV7cKs5FUMuXPrpSu2Sg3MsTsmXBNk2c4PvJ",
  "key41": "2UxuGQbzHJkEkEDQiPVxn4eWnHySZiLvNDZv7qWCj2guWnWth9zHSbLdxahERy6YUUPP5bp2zs1WxLZnrGeHJfTQ",
  "key42": "3PnP3HXHeCM9fE1ad9KycZriAByn2aoxZqcXn6akvXCr6ZZTV32CTwLp2M3gdMyNMcxK823JWsAKkKeeUnkqT34A",
  "key43": "3owKnMx6wfZp2WoXc9p1Z3WWJDuXHnAe2E1JoQ1uekdfuMXGV6Akb7xSwVK4ufvwJazpVEqJDt1fWe6iRq8BFnRr",
  "key44": "66R7Cz4s3UhD8iDvbE998K2mZJAq3beVrSCtP5wpvU4Cb16w4NYcELjxivkep825g8Z2FXRpoPR1yxJQ6Udb7bXw",
  "key45": "3Econ7H7CMgTXhrHR6jMWZEA1Qah74TvfWgF7ftpnxYpmhg7nWjRdPPy4nsduLi6NymWpua2te4Bq3netZxtayvy"
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
