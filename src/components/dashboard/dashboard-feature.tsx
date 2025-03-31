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
    "5PNi32kKXrqobTfZmkXJx6fG54ZiLWfC1QRZDS7SNVbYGZCu2bkNdxysNdbQ7eXj651SKTaK9LNZjUBcb2mg1HQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJrM12KBtP3xaCvnjmCrQcy62oamYgaqSqyAStxc3a73JhZGsQNNfWT73NxFwEgen4CurWJhbjvKmtkGBrQsJ9i",
  "key1": "3R3NqCCcsjSFvnzZyN2Wsa3a1HH8Ax95FsAvpZBa7u44z7aEHM1XSQDdzxZg9mc4NXksncevPbvg7KKPoQ3y2Zim",
  "key2": "677fpyDrRStJmbCWZs6PbJMsveB32axuqrAQSB5NrPaucWEYAdjU8XL7WgFjoWYdgr838DrZLTLYv9HwCVQBYRDk",
  "key3": "rMSQbLnxowM81TGPTq8YqmVYCEpmj6huGd5jG6YbkhED3HSXVojm9mFyiZU9xeyVvEMErq2Rrs2MfRDiNRm4DAu",
  "key4": "4t3chGuUyWi1SPocaCCycHFFtVM2J9hTmnj5SJcM8YMQ1q328m4ycmmaqnbE97LBZKytkrrHcHRvAeqoEAyWAu8L",
  "key5": "3AdjAQMMQRBAh9rMvGX1XQP39xrb5t4sPcDxEfMQmFBEDYFbcoPaP6j2Av1RvR1oWCNha57ek4rYFAi2Fz6tc2eU",
  "key6": "2XiXkSbWqDeDEd7st2bq1tmiivi1tZkmDnUMVwwKNzmiQ9Hp98HjZpPDbcS6dYn719roUMwsiwkfRHmK8fGxcBAm",
  "key7": "26unyKQ4YWuNZ5ZStdxwvpW6zgFWtZVcEw7QjqytCRbcwXFp8jaucBLuGkHmskbSYxpzu5onZ73j8pQ6TZt8xiPp",
  "key8": "5xWd4sB1k2wJePzxrXB728asgo9wba9H13d3BSouwdVCBNVcNfWhurSJtQCSZHHmgdyzSd8cjUyUCk1kPmzvDHvC",
  "key9": "2Boe1K5osxv1hN48ocH6cVBcrvb44uA3tNB9wiLDCm5jjpQm1skmaLJmoDEhJALH3F92fN3CKWhmXS1dyvephmNt",
  "key10": "2gk9gkTNnXMynRHY13DGGRnw4vGyVCYhi7Gdqq8bqhz1Fs4yH2HMwRcx9gfa7eQ7P6MGXjGoKzVN5noctnarRQcZ",
  "key11": "kthgavdEyk6o9Y9pEr5vvSuzZByfDb7MWniCYseixgatqND2YCtTtJqBtQSebGdFjxZgMAkvVjLuF17pJXkW8VM",
  "key12": "21Eov9U17Bo8xehuJVm7q2UpNq5XRG4QeXR37hUCsUxhUgh6iRnmniyiumTZbWv7BNFbSYa8rCKJaeCnu2m5ef9e",
  "key13": "4PpG8ThUGYLDxZwoMsakp4v221W2X9Doa3kNY1dUy5UZHPt5fL41fqNXfXrvbNxFLMJubF7RjHSip98iTgsxcNXo",
  "key14": "3zo64HTBAXy3fTbXbRJuqv4C5bmUFxCEvmLmFuwf21CrZc83wQ2XoPXXB9eiYyeGqPD4pjLWLJuJjw5uUbt3dVdE",
  "key15": "3c2tHP9idqfrRx9dHWhfjL7EEmXXGYcxHKhmNBNMTfKq4EvhXztN9JWrLdnu3QaXSmxGnUkZo2BFVbdNLB3AivJh",
  "key16": "3NowSDUwCGJBjBd1HNBznHBnk8KbhUXU2gUt2vBzFm161WuETrLs6R4n2Q2E7hoqKe8zSuBLTPG275XDp4oVn3PA",
  "key17": "3us72XNEiu3RyDsUBo4EARqFc6TLgLQd4QgS6ftVsKYyqKMvAq1VJXRECJ6QQVZaYTwk1SoZrWHS7BxkyMkBVevS",
  "key18": "4Dk6UzYJvwttUZK4auw1egfn9HdmcYcj9mkxMbBd26T2RkRBAzuzodRECajbRQYkBo62w6v4BvG6GmXRDHFpMZNX",
  "key19": "4MRGmTNSqdr5KV8rJo4wUgLWgHrS23v7wSnmGvddT4weBK1APtS7THqxtJeu8CdCjYPdoSyMnat67SBG3iNZjhLj",
  "key20": "2YxHrRVGuTBH1XGvQZVzrtmy6h9dysVwUVv2g3aSRJFi4BoNwDt135HRqudo2QSrZ4PKk2fFmacLqsxEjZhJYuL5",
  "key21": "XPGpKrZ8h9GCKtL6jfLecbeU1adtHfr6DJNbWV47JwT4qDPdcYfhxuyY9qApkANs2yLBLDy5ChdYBSJiZngQ73D",
  "key22": "5DTxHWNWdYzJLGGZQHai2ABDM6fKuXXy1sRXHG72qyFvpzWA7nxQAxER3AAiATgbKeCoKHnnLRqzjL1sTAJZKeDv",
  "key23": "3SGKfR1zAdX7gthUszfisVPWJLd9H3YdzX9BBR4PhRaSxdCUNFEcyLFVN1c31KrcesqDXjFYBvHHhq8JdruBM4mK",
  "key24": "47zunByxuBV2qMK4e1PdvQ3i95Rk3dwGwRW4LLiHhTjXF1ZfUjfn5ByMHf7Ks5CTB166eGBBZ6WanDdTPHJamgUQ",
  "key25": "5nS3Bj1YZNw1cD8Lb1JYEqHCsYaToo8wg9taXN2FPr6N3pScUbcYPkGiG1kKRgFFgYZYrLny9HpPZHLnRGxhyPDt",
  "key26": "fDvKd3jUesRkBdEgRwGYpLTLkMYqUbGj2aAJbH7S8TRB8Nky5BDJtL9yde1Nr6q66MR1H6oVaVUUGPbq3kduSJM",
  "key27": "2PRQS9Y6S5Csx1HrGxz7c2D7AijAxjDb6unjtFqGUBuHSQGdBy2jiWLMqiF2Y5Pm5VWVKgkVDrvrNdLrXZYz3xfS",
  "key28": "59NpYDSKLXR5ntLMxPsvMsr5xonRGE7kSneDaFRJSu2yiVf7yqfRYQ9xgSy23A8rnd7d6KHGy4ze3oHyDEBurhJ8",
  "key29": "5uGmkfz8tLcj13SffdgVWCnS7EvGRNvmSpp5GkNmPaUdYsRp3eN6XUGYQEPfdgxVo8BUEBG24wRubUDGitqKVXP3",
  "key30": "27txvQ5bcKRPfhbM5WxcjRbfNptj2dBXo4cmRmcAiEc6MbhPmMVHMAquo3uWzvHVp6EDF5BAxLLBoagRSkzEwkaE",
  "key31": "5U42K8VqUWB4gT1E3mHJjNGEvWpyvD9dRESyiSqFPw7fLJPD3ruzT7F91oaqWHqaHWJyEK7bWNpcgmgJ9BN3s3Lw",
  "key32": "46RMM5Bkfu8VcGZi5iH6WYnyHZXp6rqQ8gGAAs81aFNAKdNpHTKciTtYueRmR2MXXcd4Q1hMLuBp9ftm8J8n5xjN",
  "key33": "14sGcMJXPVPKYJYjJ8tXvtt5Vkd6xv8NbLh9KfNo9JazsKTJbYkAMwXz13W2dZ7m8GhLHcm9Si9TfM4xNqqcZFr",
  "key34": "2eHFTTWXiaAfWuEsh6Cdgf7S22RfaiECJUJFx8zKDJStE7DiHuMrQXBPPzCphmkVxSVDzqUACCawvv6j846RbCT7",
  "key35": "5oXLmLD5roZx3LX4dccLtDCwPbmy77pqvqr53kL4N58ci9VgcFTG2cNj4bGCrDcHviRceM7NC324UvkDH1aL9NeS",
  "key36": "2xZdMPeRUo4Yyz1bnXpi7oRC9mUGhVLRh3McYqupAy5PWa71iN9oLHL3uTFNQSth1A2fJMZshSpsR4s1HK6PDRwg",
  "key37": "2sQuQusaEN63SBE7qHGNeHJjA2p88JaNjXqzmNuUGumFFHGQUen9HmEKy5Sa1MZnRDT3EmZ62AQGpoN2rNrGSBQV",
  "key38": "5nyKVTreKvsrLAh1kbC7BZdD4ct3nJC5SdonMXWXDrRGejBws9zXiFrktkwbu68toYKL2S9EwLfpw8yZGLzgQg5W",
  "key39": "q4JDB7phTHkqk2nin79fs3iySie2FC5f1xPVd2XG6UL1H6TdPaMEiUQzxYjJ4TggJTwy3r93gH2XE5svD8gmEsg",
  "key40": "4KeJSGswokvmVotZMonBCN8B1nbA3zB6TYumwmuXn4MCFV89qNND2rXxiwFK8GnApUehWdkbGQWptvdNR4pNwoqM",
  "key41": "3maBVZVDbrHswLXtbttushKgvG78HZ7Q5kBBVP65SU7Cek5gzHsNTVEKyW1HVF98T8sC8UG6exsVW6hcHFKEMa83",
  "key42": "fbi1hF69AFznNDhWBUBs2TznJkqiCdRGYrf9YKeyTaMsUjXffEVpJmX8B7nPPRZjYngDVBFYSU6J3CcKVsySHYX",
  "key43": "3yVkEi5YY6MWcQba7gUeYfgYeDzNCvTttqsFzZdqt4PA98xZCZLtKzhNLMM3WRNSa1qgsLUyXM2JprRVhesTdKXL",
  "key44": "3KPTupnPD5vDW2cgFnLfaPAyfXxXRL6ikCJm3gWKgMBisMLM8QNhpaUk1nhHgtiHWHAUuVZ7AWr3dpVK1Fmjaiki"
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
