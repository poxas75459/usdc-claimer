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
    "4ZzUM53Pg91ZotqaG7iUtLY8v574hek7tYg9WK5uBGKwA7M11U8cpYr11wcCN2ZwCTy36wihubjdSYm6b1dXQ6KB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nmzaEx7hgkhG4Pj8Gp85pMonfy2s9HH9gYckhgDWemu9AbR43Hddm8Lqezc7BYUismfbfvoUVge4NezheGtTP73",
  "key1": "4zd1gzapT8SgLrGQq6SxUFuGcBzTfTsC85bMAvbdXAr5xEiAxDpL1osbEgHPwqtEqDrmrR5mPVE57iC8HRNCaQCz",
  "key2": "jkDeBetJYWkPkbVXbJeT9k69iMJo9N8xZDqHXjaFGhwezg9yD3eJsv7NCBDYnAgamtJvrcTaiKcEKe6k5iDj7yG",
  "key3": "5CYvfHXP2HGp8D1CCYDPUuJ8ZyKQacFg6tqZcTFgnZz1WTKZ3aCnbqCt8Gat1ZW34nJneHMTdU2Q1THJ8t8hUGin",
  "key4": "2135BrA4eraBybyHjfDVsRRWZSveFR8YUCVTW8mJZ4rzrEgvv7WgViniQGSLPXTwP1kZ1WvF8kH67Cu1cU1MUzMh",
  "key5": "4bmtkNGQrjJMaqsMJw3NWoDhmn1WW5Asm9ARoVeXJMWiRLAWCherbNYcGPy4tpD8r2eCFefAyeq1SvhamJMibKhx",
  "key6": "3Uw5SjW91tKFj3TKJoFBbnciYBhssQ2Zcjs2L3CxC56s7QjM1fbmk1CBfte1ajrcdW6QqLsQC8DBnedVxBvYMzr7",
  "key7": "4BSVVucSDhvEhRgrW5u3Msfnnsn3vTwfpNQbh9tntJbL2Hx3h65WD9RdTNCYb5PreDpeCfj8LLfWeYdTwAhCpFzj",
  "key8": "4SWWrm3n63keVmP8BHK3fwE1Syna2Q4NbLVfUEeEZRipwEk2KujTPmE5QUnR8kwCEySeNDnY7GJxtXDBDDqxS1TV",
  "key9": "3cNiZjiuo6s5HJty24KzW7bTfMFRaA8JVLrPbtc99ZX1z98dzfFE8o7PGNBRbeFyeaykqZrzrftvECoQnB9sp4tZ",
  "key10": "2928En5g8YLqxPVQRkEFCqVMcsvPfGXnnic1KKxhtwHUKpcs1yW3gj2Gqd91pffr3gDcfkhbaoqwRw6KqitWi317",
  "key11": "4yZn27jLSGg1tVgShHj6Fide9ZpGLndtKhbRYSViwFdcTLybxi3Q9uDtnnK9hp9mDX3SwXiVNP37KTKRvS1gXTfK",
  "key12": "5baaDmfqvNfFQy21J1tfnwoJ5WDjiteBRRwkuYF7D3yxX2bW31SEmhsH7bEK98WSemyQq6AuXKPywXhu7Mpuobj7",
  "key13": "2P4oxjwRksJFB7safcU3jAUwp9b9VdXJAJNeekkm6KcMrK8bEKF2gQ3SKTbqJxCnbxu9pT7fjuotyJY8qR2xBArK",
  "key14": "5b2M3kEjE3K7XivPqcLQn4Cq5rY7oQfx6mxj5TScc8T8UJLMdY3vJU8cdqqbYh46z1LYXmRsGi2SzZ1aoYih3jBm",
  "key15": "2uAbjnS7KFR1TE6K3S1sDZaY9n8k7Xdz88QWk4YAjnCw1QGBkoAD9y9mjYWiHNsUNvxs872Dba6An9i8v7cuSwGZ",
  "key16": "2dZsvfMjGs1ynaXTSVLXCVn6pDoLyR4bC1Z3XWtzSBof1dVotxnw7bUhQWh1pTQtHHR4DgpU4rvn6QqaxTTJXemK",
  "key17": "3gVstbWRp48N8ek5dMYDQ4FB67ycf6RSUc3sRh2Z8xrTUyBwamoZ3Yiz7bnsde51FantdfhwECJxHeJyjWhM79wP",
  "key18": "37zkfTCYQA538t7KD7si1SU55APEHe2PyepNrTYgad8E8DsjKHM6cYbKwMxbNST5LY2DzCeVP3L1J3bSMEHczZ2c",
  "key19": "4c8JNuEtn9jMCxffWkj4X6P9jAwy41t1x7NR8Z7zpMWtUS7C4FacAX4RRaKc5TuMjo6Gh4C45WuNy6T9GzxquHUT",
  "key20": "5W6GYZrByf46FaavorK22ahuojq3Kdbw3bjXsDrgUoWNW5rmUMqdHnHowvF7qsyYN5KS3x2mjJP9LPXuf7g2RfU3",
  "key21": "5qFxGyAsRwrRCv845GFQzFpyCP63kZjA9HsCcHQ4vvQngDPtY6EGAWQTjGnQA4dmkhRWHe8GiquYUDLg6ziNmBh",
  "key22": "jBy821Ew6fFu6WrozLrtf7VXBYErBP52YkhRDiFyy9bnvJmv7NFsTEaL9e1J8MsdB438wtup2cKd4wsC8qDr9pN",
  "key23": "2sei1cYvM7L7cnKaEnuzD9P51nU2bjhvuS4iXabwbN3WBr1TViYYx2NkKbDgKHYEJhdUXuPqeP9afMWm1B7ndE5T",
  "key24": "5nDCDWFbDpGs9ZZbsyy3GcE7kKmA65qgZKGWv8SsEcVdCNpm7ezCzawjJvZ2er6UjRU6CybwYbLNJPcu7VFb3gib",
  "key25": "GaehsJe2NqZGXghZcDZmUsJvGimvvfhQMhNjvFAArR1bEf6zPTVMNffnbkTgLHsuGiv2AKD6GL5xfeEGG9bDeus",
  "key26": "t84W8fX3mDip3ep9Yfjfjsw1RWshexqD9nz7jNGmSbd6kqPVeJw6oLQmfY6bQW6yQbmwc9FJGHC2bQ9neRCD58z",
  "key27": "2btPS3qDdLpL4F2VMQgMhnFB7j2RxTR45v3ZK22rtpiXN9uh7bJ2BABQNeNEZpkdWjvjETXF5Z1MiuTgBQ15Yvem",
  "key28": "2GrnDxhXpnYCQJSD2CAyAmvNz2UUoEKpaTa9JP59McoKm1fK3soiVdBihjLNFwDvAn7X8p8kK9TsLoqJVJYcTVha",
  "key29": "3KPN52ARDxTVXQadj2AQg2NK5P6ZL1JN9v6htBNQJaLbHeindBP9kvvbt8wCzuDq2jbkxAW48cY2AuPSvUWufFKk",
  "key30": "61yyg18UjAkktejUhBTAFRNKd6h8C7Z7TaiqHBBpekfNeGZKUjHBmAjqTi6kym6mphkE64wT4rDSXfzqAuMKAfsJ",
  "key31": "5Fyk4psACB6EaEE2dxbNDrdcWKCMQVxmBxnSY3NhBDv1L6zNLCCwnptMRKwjxHZdRVg65ouVWQbBTKMtCjeXZFrK",
  "key32": "cFG8HvUCq8JrmLzZfVLuxkcfjsB1ATpuNL8oHZn1dgc2NzEnS7Fq8GvQJqXGNxfkGFT67dQM2mFaFmnyg8ZNMYg",
  "key33": "4rit7WWssHmfA9LnRw5KvxCUfuExUCQKm9b2SmkcjnB7B554aeQ4h269upj31NE1qv6Xb4k6YPUGbQiZbBbzKmHp",
  "key34": "2y78oA2DGg3iHGft19kG2bAyQ9pJQEfrJBjeo1Hcsz6ZQVtCuwtKnaqoxrpv1PG6vv3eRF23VXDfQZ3VBXNX6iBq",
  "key35": "LoZHx9RiRo92d1VW8jrdchnuLFZ8EHv7tyKtrFnV5d9in2iUEQQR59NNjBG33BS9GAULnhPEos9DuFUqnUc1kGZ",
  "key36": "3SAuPg2SMu6oLVLvVLLUF7u7dniCR34qUXjDDMqW7zSmiDstpHsTqCroWooMAXve57vCCWLAanmp7GgBGsoEaMbZ",
  "key37": "56EHCp87e9UPL62rFi9CwoyJDsMvBzZ5Vdr3h4FpV9pHQnXAXnt3hNrJgprT5C8NStRcSVHYGJSFMaQaC1TKes2F",
  "key38": "56cqieZj1sxacahXuHn8A35SgM4dziipMVbjMyLRumu3LAA5VS7QN5FBXGasLFH7N9WTTb2qZ8Yus1cyvAQYRX7T",
  "key39": "3tyKjjBM6YMYYfsYQiu8Bhee14FCm4UJANzbi81kvwBRAFKDJajni53FsiKCN9dEqYKbTFBc7BnmhkKnwGKVQCVJ",
  "key40": "5YxgE2ZBE2XdnxD3a7oZ8UQEB7oBVc5n2PJdWp9rfQpJBFVx2SGfngsZSvdejkdZQ49Xf6WLU6EdMhjpfKN3EQ7h",
  "key41": "chw5WYq82zzCfATSyxkLfATrgQqUbWUacZSecUtbLqMFGDuYNGr213YrJyBwVZCLVuaMpwRcakXSCvHj9jLU1k9"
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
