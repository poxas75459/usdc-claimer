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
    "5QhSASapGDN7VYjCnCMKe3nXXrHtFFv5QYu25ADrJCfYkLc3DtLEVjnfEnwwgrdhDFBhDuptENLzKF73efQn1XXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bfSM5AVhzYUBWVaCBTM11FhXf7SLabLEMmjeiB9P1w4XG87zHHUmnLBVdVK33pyfRSvXCCkTZ4ws3Da45FzraEw",
  "key1": "48XQX7jQdr1fdY4HMUm4jz4XpxVr9T4czdF5h6v51cwTHCSubroV6Z8gREU7XMJsNcJzx8jKYfqqeDQz2h8e8i5E",
  "key2": "3UjDhhDMuLJNLBaa5zFC3wTMwX1sECxu7DN9ZKLJfmBJd1u4tFtujrauRBAwWDSPcBWA2RQaCjRkrvTRbH7sth55",
  "key3": "3b2nfKsoEnj3b22CYxQbs43EHgAWheqFJJ6ySq5XBvtJxLEmZ87n9s1S4L1iaX7WzFvZzQviBJSztyfmM3Lwy38w",
  "key4": "59jbjmf8wHybV7aabu5W8rpViRfJniTetcgZ1BeG7CTEEqiZvd2fW63NHkFcXEAPjJg4kR9PNvdX14MkdLd8LAns",
  "key5": "3LqJ2c8heXKuHSWC159sR6ouhWGmG136SJQ8Ju5uoxuhYRZ4tgjGAZty2f8MKiRNqE6682Nrza3RxiMKKd4T7pdx",
  "key6": "Xy3rFJsMkqfZHtW4gg8znS4MHuwL4FYStSv1rcuS9NPkw6xGZ17z2ZVFTUWohe1FyvwkHMxfTtBKFd88QVXEUHp",
  "key7": "3qpr2UCQ9QyKN6zzUTzTZuUx9niJrrGVThAdhbJcKs8c8uHK4z61ptk3TZMbkax4NgFuQPuaigsX16kuQhdywRuf",
  "key8": "JEFskqb9nm6RzkB3z42XSBZxS35qCqGNWdLLy85iUULozhvGTkgJPzfpvdj7uTZRTfsZWZNajhqKKwgehRgDeTG",
  "key9": "2ZGg91knS4Km3gNSZf5oqh3TtS4NgWdE6yBKsWB5X2da2qCrdaPbFqw9aYh4kHqVRz7xEaGuPiDZTBQyJaKc8dy1",
  "key10": "4Tn3JXVVWhwy2v791soAXTgvjcbJFbz5tCG9BPtreVYxNKW3hvobDXaEuwibHPSRjabrUbMGjdM9pn9HqKu5abCT",
  "key11": "mdvkN6ma7YLtroJG5HPmsDjKUBiD2EmyTxbZZ8J6X1qeJCZbxoM6AzxtYuCAAShinr3PahBiFNBKPLFCuRbs6Ka",
  "key12": "583hEqzz9wsR8EZWKb1EPjzZc6AZeRCtSfgfdDwiopoFgdH2gFYmYDnte6g8R7kSM8T4qi3wAwDt9B4ptNEFyUCm",
  "key13": "9LtztcWKX734Cedjdhw9wVCafyYNsJZ21DtMUv684WgtPZa1ZKFSL2J9fvUmeoKpPuCg7ByaftAzLFRUPfxNGri",
  "key14": "4d87gTdr1aWLpdg6eXJ4E8bzqrtuc6hWo2GtTQ8HCgXRCY73fXrGU4TBqr56oaBuWT8a8BM8J1yFsxfcmUYHfRvS",
  "key15": "45rpZ74HXzqBFGZQPjZarUaCJNyjmReU3z6oiACjc3xxPPw4PYeLy4HevT8n7drmpZErJjudMMPgkyWUKHqQCDfd",
  "key16": "ZRFXfMTyPEVBbm93UkhjHbHuPCkeUWEbqCGouBB9dKWWNttdjtC3NLKTEq9rmBqPgSYQ3JHG8Qm2NdV6WrZKVs7",
  "key17": "5perVouZhCHAUA89fYhrgaVFLKgt7pxqA54T3R4pukij2joj6Qqv1TTzTsR8L7gUksGCx8DqiqyEgYr7tco8PUUR",
  "key18": "3XmysviCHFwNHe84VoBTtbfjmpRHigCavQ6cE2potrYJQ4hBMzpL1ef38FNjTXQsxMxS3xeqJaWiqsGqboRY4Fg8",
  "key19": "2og6M5p1mrvkV6wjooPfhtsYjBtHyEfTAsv1r5F3bPSYXBEbRWx4vm9Fax5KEUq3F8ou8LD6QRgQwT3XWsa18uKy",
  "key20": "4c74hpiz63niYinebpjBGdnvwvs7VhMdwXTt7B3hQnPr11GHq1AzbTCbsSRQ5UrAxHqHVeq5CmNFH4FxiEfkmQbV",
  "key21": "YmExbi4wxoU9Hoeyzs8V4bSPfkKtQYhExvcuLvHN932yVhChs2gFJxdWanjnooMV7Boi4RTjayrhg76aRXBYufE",
  "key22": "4VkV5L7iQbefmpe9BwQLu7QC62XxrJ6q4rD1ttvnRphMxhTRYcH7GxbBGULXeSB1bThaRczoEaxYHkwqez8hJhQF",
  "key23": "5yzFRGusXf1QTrJqLk1cQQYn1QBtqL4mYgutjSwW4E6QTYVQWaqXUDEBhXq7rJdwrezNoYREAFVJzWNb3aRTQLLf",
  "key24": "4Npoof7VVznubwT4jFzKK7NjB43k2nxgpsB2dpGv9PZ9653mR5mJUaTY7oxmqwdEd3H2TzGdwnSx9tySaprRAXV3",
  "key25": "3TiumgcCMwvmLGScZSyWhUSvGsG4mFHydp9SYkAc7KNKGxyh8nLjk8Y6d4eZCGSfcXVtgVWUMEikbjj5Kcxv7THj",
  "key26": "WQ8TN21ZN4B8YSaiknA5nB7zjhLxs2XEdaLn5ssNisLx82fT1mYYRcJKohtEXKzkWE8LsqqdrGdrAg1e2np84cJ",
  "key27": "4XbSJu6ygorMTGxxSG3oTxwskoVu6iGkapALDY7P1BmX8SaqKZgAoDR8x3TnFXPfJxoWhnJttJjdy7RoW3Zu2C7D",
  "key28": "XcpMupkpEmyK2tYWrdUeD153KA5U4aV5LxqTzrCSKQztnr8t49MEhEqDLsAzVJzAc52J2BAGrRJ1VhqeoBKyaL5",
  "key29": "5tCbKM9zwNDDVPMd7MBQ8MjKdkSdZN5Rcj595HhFs7mdRGzJbr2EEwuNxpnQX8xBqYzejfCCMs15wGuah31mTWCZ",
  "key30": "3XDrga21KJ3Lrz22sCwSdQ8n9GLjvotfZTXCmfGGNGp3wRvkNoSJyBrbLw4qcwPJgVbHfovtpHrWSwXXnwGtDra8",
  "key31": "sMC85q5LgXWvoqfCxbwkwkrV5vGehnyd43oWSk4upVmGEZY7qrJpZuYt7SaFRW1YfUQtUuqYKRz32rRWC7BimQo",
  "key32": "4ktQhrjqgm27xFQPjFBrVDeNFfL3QjPH41AUE7ENkSUGuQ6mMS1ikjoEMfpiDeKEipHTxHDB1BAtGLMxfhXVqY2n",
  "key33": "32NzUSQfZBKiXDNAnKvmpFg6srSdHcmvLq9FWnNb647byJoEak8MmWP3Kej8gZdKMkDhB8mpaZXQxLxcQXzUbePN",
  "key34": "QjH8Ly6Mbuj7X3zkJ8qfWaY1gUkHmwaqw2ticmRxU9VhrmAVshpnaPLbsGypLmembC4cAm4KqDFoGyKwWFnjzj7",
  "key35": "3QxHz8BpNneeopZvBxdrmQCLj4e5PA7ndHRh6gAyBK9Xoz2N8wLV7xkZNRnGJMvtUJ1yWBA1AsvZ8m3e9huHMRc1",
  "key36": "ivPvR3gEgHauzCsAn7TRLuwKoXQCNvQnsxCVcgbEYzvudNKm9Dm4T7Ya2dmu8pXJeRhfhdCPhbjHXkDidYsyP86",
  "key37": "4XRQsjTLmLK53jyMBiLwaXRmnmmAXRPGjRWP15V9z8XycUStkyqGQVzZKSds5fP3ePHwrJpcMytDqcg4eo63TeR8",
  "key38": "5ZpKcxkJPYNWVuABy9sF8YgjiSAW56Bprz4ytKqyJstbJn6qtt4zQoZSxgNqUPwmrN4drXro76G9kGmFWmitrmAi",
  "key39": "5AHmkW92Svafm5o9P3YHrBinKYMtADc2sB5NXsfL48Um6qkKbDiiYjKjXbULNApSCxPQCvMEPNK7csD3eYYUYJJb",
  "key40": "42gkdps5SskQsrcjunGF3QAgbjNFiTSWQBurjkHxCjzrXVV9EKE3qWg2dt8NZ7qqujKVBE8C5yw7dxQkLbKdC9tL",
  "key41": "4ogzqW2NW6hc8HM1SexozvetTUXmAYnjTgj7UdzRsZnhevuDZGsYq7vaybgHPknnL2hak9BBRVuZwamZkKrbotk1"
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
