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
    "eDksGXSLXrvPguBZF5mrmMBYCzKCF6DT6kKuPUWWUZMUPp1tMY9YjrhzDMs1KhErSsn4PvDKQsgo3BNk5ZRkgPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t36T5soruZiqY7WizYBWWcGNtW3RsuRsNwr2pSn4gCztUimkc7GNbeEWvtsVUv4UUXYF9FYXBoJfttJmHSZrHF3",
  "key1": "2ab5Ads8w45XuSJJLCD18By8eGHMUxbBGu2HoEB8z56iiEymTodg55dnLaMneELMt9sqsZj8FoEN6wkxf8iaM1Ao",
  "key2": "sg1YKu16MRs9WCKwkDterwB6XSjGZfMjaPjhHKer8g8xUDm4KQfk5ZYqQVvgvz3fAiCjVQxUJ2JkkPxktdkp4b7",
  "key3": "rBuAzgAj7oWpsBvZPWGCwnVtNmk4QZvWEHCyTqEmgytK4E3NtP9r6UdjsMMfe5xdTW4Hmmgr1LEf1GkDvMP5kD1",
  "key4": "siaaCR65kCqqirx1KpHZCaNwfKUmcfLKUZ7hMttymoJS6ytWGcebEEZNbSgGuk2ssf2hXNWbPnYyuKv8fnqR3jS",
  "key5": "4Xot36JgQna2TYHBTrM1z2EAn31bnpjz3gBkKp7FRfsZntrAfhhwjgbkdwp4WTbYyK1eh184oJtz4LHMJYPvFj8N",
  "key6": "5buGbxMFpMGWMsmuw5WXbyoQ9CnfbBGNe1RDNzsC7VUkbvDQPfpdvyGYWKAmYcukJr3qr1RNyABZKk3vpyz1QBpu",
  "key7": "596pJ59syMHUpfc9XJPVbaUQKyhR5oFWJbkA9uyNzuGxNsB25Z2q8WCHhpwQv1f4aq6wY6cWNzdpLQCMMXook8jL",
  "key8": "3TvDj9bygBz3HrxCtRF72Qu8faHTFYhi42a9Bv2423fX56bGQp7sv7u18YDFs1sGpRFfgNk3qEF4YtbWR9bxeNdm",
  "key9": "63fERzZjEkmfGWJpUAU9a3pgJQ9mrf8oUWuCMCupNbtZKcMVbXdJAJJsoqMMffq1tgzqamMh8Rc4WUNZdmfN9mhB",
  "key10": "2YE6Z2DUkHTRR1mfBNkgwX6Dd8ozPn2L4MQSDtS7mJskNJECDABWccjjs5hnbkQ37wB3f65EWh96VokNTHrRBA5m",
  "key11": "66Lo5LWG8pBVFqm576e3CgNFTJSTQEmzJKFQfq133QYsE8vo3DvVvZ6c3PwjKiiojvq5bbGWgAEeAYGDRdRhuLQe",
  "key12": "2uVrwcSB63nRJ4ygYozjobMMDgdqXjE8QDXiqUg7AcY64Bje5cJ9DBrNjXLE1q3d3Gmeh6dR7hzhNwEPEFMr2Wj",
  "key13": "647xvnyJDQYYDyRNLXqfZD6Vt1yDY4pzL313cskaMBsKeMfMfJ84XRcUD2M7S7CFztXgYvjfhJ1qTqnJz2LqcQks",
  "key14": "2SSbpeJkDzwMx7hbFtRQ86mZpRhU83Hxa1KwtcVVSs4YqrtQTdqupBezby5KoFfatZGtZz4CjQVMYbmXz97VW9mB",
  "key15": "2k8n9k4no5vNSdecRiZDQ57qQFQHsFacez3p7WmD2gPuqdYaaHGtG5JwebSe7rwiBY83qF8Z3ePnavdYxuVnWeYX",
  "key16": "4brS8Ex8gFQZTiRhWBJEyT11fv69kh143a85p1WWYq3rERZ9mDZAgnX4t6mWE24SFA67mPnBXwTPmGRvZzJETqJC",
  "key17": "KvPgA9AdxJca9BoUFtafDAEMKMP6bSZReBXb5yMSwD4Mnht4itE1ktmd4xHpd7DrH8EFSThHPRwTg6NFHinGN1n",
  "key18": "5Dd7THmMdgyr1rqPSjZoBX24gQ74cyYPFpPJXqcumeZthhUShpiAAkreghueviXai19bezSWY3zAsKCZcuvt9S4L",
  "key19": "3jwjsLqU5LCSHL9eRhpgK9DBgpbHA1egN5H9pohWvxwg5sLVkgo9oCttRvKRwxdB8ZptwugXFUi73zrS2HfsXMtK",
  "key20": "3Cc4UqdrcyN1ieCGoX38v56yV9McMMvQYXwgR2xiUVP8U6SRfEgqtEb4kzBmzaGGtZA1t2WNXGCCm2ZRi1U7faWL",
  "key21": "3jiNTaUbPFjhFLtbG5XLfFCW3WP4r1Vcnqgr7YbdKtBGySyHH79p4nyj7WWFQFFLhKzJYUewngk4TQJ6KAZHwe6M",
  "key22": "3V4ecmMCNmg1iZYkZz3dnVsfnMyPUz1iD5toSxo2opQuoYBDzJLWebH8UTtmDYnz1N22SD58WXDcURaXUZJUPSnD",
  "key23": "3dA4fapZNuLijWSVJs561uUtnfy3QnyLzLQmH3nFnJwytvuSHZGDBnfLaQyNQsiRSPZGxzV4EdFvZez1QF66Jz1h",
  "key24": "jF1H9WA8AVy4DVNRMUXNmxn9woYSTEY3XvwpmtJ72CKYd61ULExSViXqXwCd62UmguMj3Rrj1q6mHGMxq7SWyXq",
  "key25": "ofnvfyBzMjNsvX7rkHV2WTnU7jFjfBYywq8QSaqWTcJUXJq4UThjvH4QXoYftbw31JDENngji8J6H9qNw5eYPUk",
  "key26": "5ZA1Y57wtGx6PiVgb27mNyBxSAXbsM56UthNfiLtQqEeQTLa2ft3rfB3KvuTcSAKjF1zRokyAWTAxatebWBKiqMx",
  "key27": "QRju2qYdkuBbEC5kjn6UvzSKcwDUE44kMxbwvw6CWWWx7wHq1SQ8voA6hTxeUUG3hKnJzaUFpnLyYnAgzQ8E53K"
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
