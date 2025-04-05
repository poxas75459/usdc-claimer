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
    "5jkeY5sVQXMcMZCf4uHZ3fwurrEW97X71AvmfjzHC9izjxYvNF25bCxyERVLgKiz25bGZsGskg97jkNMtbMTsAU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pyi17GSkdEJX2oLVFsRXiBrZFQJfBGWzGpwsunZHpaejBLfJaVMjqsBYe55UHe3GWDE6o6DtDMvueG7qAvKKWyx",
  "key1": "p8my2jrMzTgGnjZsAD99ZWNYSaFnsoWNNR2v3vkPbJjKGWxGXbbA3CtDtrZEneHkpAy5NcDMXw69fVNXNwsd46f",
  "key2": "4LKbeQoSn6KqHraYHemzhc4xigr8ZKmyBeBwHzLLJtP48xixrwxqhmjaMZVBg98SjqsBoi7xd3UbcaFN2sHTXMeu",
  "key3": "5LMcqjcuCYp9zWaY2LA8svbQqV8saxKztGo6qyvRHu6vc6A6cMUHMpJDJY7PVMvf43zeSw4bQQmrhz5SkA5gpcci",
  "key4": "3u5cuEJRKr3ygCkc9VNawPLJQqzFkLjsZCYD9jZh5L7P8omtc1Fu8o6afMAYuTJzbJS9N7DnSYNe5432aVDXybkt",
  "key5": "2vsj6vrkZS7vPU2LGehTnrNKnqaXGJ2LR6JCPhVK5SzenU6pw34z5DLMV3Y3eL1wHRE2xdfvuwW4QLuVmGCm2WnG",
  "key6": "5PQUHHDNx9Do98jH2Yn5SYF6VjMZ85Sw3swqGZfqFshAco49Lv2nX9q9s2MSvLnynRSdsMhF8n9XMFjSvGcZZYFj",
  "key7": "SyJG1N6XpBGHitJwfq6KCyjgDeBbGc8YvsSYSwoHUAVdFLNWArfSBYmxVBKYfphfbRYYUZr8gjXvVQLAbP4vVb4",
  "key8": "u5P5Rm4R2V9K8TpA3MoU1gfjPPhdP6RsoP8QD3nUXnQe8sBZF7QLajJbs8YFD2A5FzBEmdVSqDu5XV7Gaa8Qxv4",
  "key9": "44J3z99r5f8HeWBFkw3CarrVBiCeSdferUb7MFx3cstn3FjWE6ESLncvYfq1m2ZqyVwfNyMpisG42GPx67Bqykxe",
  "key10": "kbbCUS6ZNWuKQfPnDKtvdsVTBdHstQvZU5ZqAz879rHbSWFCw1ANJMAHHYFCZ9jRu7a2YgNZPQG1fm3rTkESqiz",
  "key11": "39Tjca4JADx1kaqgkZYAGQ8NDH3TycompmwVKkyRWb78TCsWVvuHJtLKvnJTTzcSFj1YCrHRwUuFgbcvF5LwTPiG",
  "key12": "63WweEZ84LhQRKfKEKFbEhnFVxK6LR84Sx4Pr7e6cjmajuSeCn3WLKnTzJijtgZsyTjUHfCVWaWF4kQSvnaA4K1a",
  "key13": "42ikLgXKjHRhitChW6LgiAdbeTR4tkfYp4ir2FJbXapW37QDhEXrVd9jcDvWpvBG417UShLhLeT5WCtfx8Q8vqE9",
  "key14": "XM5T9AgtGt43yWU2xKsTrCz8yVEzcNnJPL2M6NkKuu6qvfzUHxz9dymgRoP91fHF19EXJxCn91nuzvTqsL355uh",
  "key15": "2o1h6ynaMCX1UpEXCZ3ULVSbckk3fJW5ccBSEJEoJ7bBhii7YAr7sCByXmNFpWyBFWugnDs8WBbUf6QzuJAfNGyL",
  "key16": "63JnwDi4aVSb3LndhH12FpL4WZbM94tnjVHKwUjENdD7WWrGFxQWyfSg8FCVwnhr7gFUEXHfbvhDBgJ5vCxQpnEJ",
  "key17": "3JJdFyEA4DBHU66w1ba794Fh6nJbxo9r857pkh8HB3VeER4m88GbLZq6iujuWtsKP9TxaAGN22BAKoaYBCnYrpos",
  "key18": "5W9q7KUjyeFcgM6s2QBB9z2MPXbnpiLRcdxsCe37qPSQTVL3HsaYZVJ7FPJzePNQWxXmE4nPz1XVpEeoKBdvEVhj",
  "key19": "5xmoa6af6eDyK3zM6vAcmwGmYsYPenSvwvMTeUVRYvhTtR3jQG4npiDabsBxpsqXJBsAGGz9UmP2zuHjAhUTtqKh",
  "key20": "4WTDbmsRpeBUYBexkPP12Fmx9jVkoRU2VLdierKA8feQAqe7Hj1WDxyeQja9Ch3wd6y8VpxoyaoM6onEaKWF3BwQ",
  "key21": "2yUuZLT3EaadLBEUNMrCgHaM5GNTZFuZSVVQmJ79rm4u6wWfKXJjVrUfJALuQ5upwLZDzfnbCZRKTL7L5geDpnnA",
  "key22": "5AEyeW8SiwfzmvZTr2STC2aDKmfQgaRJg6m61ygxBTGpy4rGicQccA56jr2hbiEcDeLvz8DSZekL9UQivLUDbb4F",
  "key23": "2k69iYaKL9PZwWVeR6bXxgEp2GFEXivvPMB8xr3ecmN38iEsMWxrUBjTSVjJXjDNxKByBrPSw5QeKtqtpnXvcYH8",
  "key24": "54Yne6tixTcmJZg26bCq1cYSdZKS3YZdef5Fpar3NqEQqikWM1Egxgki3ve8muvaotkjPeBoC3umPJFkEpkuHCAD",
  "key25": "2d7dgGZCMpJvLHyDdS4W1AuKAa5fWJKbcFLELn3abvzKk9Jj6SWvypbjzML3ue9RXok5LmMrZ3of2mTtgouNE5qX",
  "key26": "5SuJJNRjcwTMbikHmRYvicMXydUFX43j1UXsi3WULHiTpKoq7V3Xdmp6fLqfqUmpkhNYemSL3hZVyosjJ3qMigfy",
  "key27": "49qE6GB6E1Ki8PAqTdHsJnmuURnzYMtkaX3uEwPtYQSmDieznfnBskSdRNSJnoQiRJATRFjc3rMPVfd3QSMFTYCf",
  "key28": "3rWwWwGBqzKaSGRGPcippS7T7se2MiEJRPD1B5mLN4cEPMdQKe1HSA1LNK8nJVXbM7toQPwAEKRpgtpzHNEgGkyp",
  "key29": "56Br2EBrdBStXcEuTHXgvYzXG3dsybov1o7gjs9XuGojaBsPSWSbBDLfPcskP4yMQxBzSFeuRZ3fEX5fCs4ScZwS",
  "key30": "3o1VjqZrbGbieBd55CLn2X8iLF4wHbUxPHvjSwyXqPWDfZdxJmrpmkWrdQrqMgFcXYAHXJpf1fBYdsPSBb9C1boW",
  "key31": "5rCE4kZebJKmvhbf3ckxWDu4E4PFH8Vh48VPUCEZmy1Cb5roLmzHvKxksxWQe35xezakAtQe6HwAtjtPYg2gWUK8",
  "key32": "3FVLtThoBiGRAk1mny6VcyNZW2U9xtdKrnhx3vx65sQUGZPkBKWV9E1jcnn4iL9Qk7mW3jHZZxyZL9EMdRPi9yRX",
  "key33": "4gAojxhXjz6tAksB8y1te9YDRUevjFLQiETLPmkpDX9wTMKdSuY4FMAAYoi5syYH2yeU68MfHKnAdqcujpZ9WugZ",
  "key34": "JBya7gkcvGvtJh2tzks6RwhMQMgFbKmWGa4EGdTCehURzRZWRcuFfjJFdAdhVE7CAGCY9BZVxpyuh1xCyyVhzcJ",
  "key35": "65Z1aLjHyDawPFRLxRivxbcWSVh9nLJ2Fk4jKtHq1DC2cW5FWJiLTxYww5dayY7oW4aYXtVCf2iayqDZFq56QeQf",
  "key36": "5QpLLfVyZP1rAY8DBbxBHGqECKCJFD79FRzXQfqteLcmxdnJVRaq8ohEkdBqN6hjZXPTpaEcx6V5tRKPJZnU4h7y",
  "key37": "5DphX5QhbvoqRJaG1uewWicb1FBho9VWntwgxgPCeXdWW7ekSM1F1KoGNXH22RFMXU8z9kKheHzmwM7R6btwy6o8",
  "key38": "4sY3SQr4iuiMkoJpovRZtJVBJGJgzbXFYokFAa45KDVnsuiADj28pcSm1Qiv8AzTxYjerE5uewNfxv9WW3Qd8vLU",
  "key39": "ZjH3BGRbbpmvJKGN7L72hQxpEHFM9SRTn2qjbGxMnDwyGr2hbQuSTWXUwcPPvjwqrR7RnByiWABLWb4o5v9eqsC"
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
