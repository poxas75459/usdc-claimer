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
    "4pPDNb1f8XrjkRTYiPtvxRXqsX27BQXvh8DEjpB5N2RkR5sxqvCmUST78V11dKHciYepWRZp5tPBWWKB9PEhHCMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMXfFtktB7DMJojuN1qwiyU3dnALupUqpUJLD2RuncQJnu5HTneeNpD2ZLJrGZhpx8oqauhZEkQ2wCiFpBC6KwZ",
  "key1": "o98RFnAC4cKR84ivqqryWMSmtxaqB1yCUL4Su88orcsYCxFfS3J9ajn2bHmTRb5A2pbdcpKHZujGDLg8Yvobnx4",
  "key2": "3TN1oRYB9X3uVNrvoMn9QCvEHNjbCcqFGPXUizSnDvfwZ22GxXNJSeEDgtuPT7pt2LxB8R2db97DesdCCga8e2Ry",
  "key3": "CtWHvJAWppxwLKRumnqF4PUHUSFKof8yzuEbztJpgvmMxNCNbEghr4zNeKttCj7j3aZrZ5emQCiHr5ueMBkLr1D",
  "key4": "64mpotsjDph7FuniU6KbbQ1UACoNBxcrFAkX94L9hT25ScNJ812raGCwP8vzqyXHDDSYLx1Q8pSiDDkthE7Jwb9d",
  "key5": "3bgKQeJoMQkdbXRzdqrdZRRs6Y1XJVuDzZnUzNaErAruUMwyTvUHmGXSsfpeEvKB7Pv6doZ1HJUoHcp624Bx8AV7",
  "key6": "Hjr7GuBJEAxxSapMJShSorpPyeweUPsKKRjp9HMXRA6m5qpFx3AgNaaqvN36Xd83W1gLA6zP41H6qEcQq2QWcf1",
  "key7": "5zponNbm93r9Ym6HD4X6NF9Z9BnwFFJtVwQfuCFGaANofuHvfiJqd7Yhv84FYjAbfbPptUhYtNMvySbA8SaiSktD",
  "key8": "2kr7GsE6vNu8xYR9rKnYgvH8UUJFKU6vmKwcjePGe6EQWCf3L5WQayLC3c6QxDqMrdunBFSR7NpEVpuki9N8X1RA",
  "key9": "3SKM8NYzxxZH1H9Dcxm9jY6HGZ2vVu7ykjTnoisQCQCtWNRoGNGjLWj5hwhFGvoHYrdwfd6xRnyFQd3HnpgkmTkg",
  "key10": "Wty3EkPcCZiB3qdV16FbQi852hTprQKMQgXT2qjnphhtoPee5TaytvpqEQoqb47oWbyiKD5ZtfMXyDLh5K4ktzK",
  "key11": "5n9U6RkvV7MU1fAndeh6FUYc3XmaE3fq4Ddisr5nCXmsMT8X89PNkt4jMQTfk1etrWbHf9GmZy2gEKRzhCrp8YyX",
  "key12": "7QHcy6ULtspfjFQ9ckubJsWjrPT18MmV4bYJmuunYQsqn3pAW18tskoPsuMApJGus9kJq1Q1szsWkwY1hjUGfRu",
  "key13": "4hGUFQEAwbyKf6dKWpPrHqHfCNjRtcsAYutF2JdE4KMdWctoXwnGrpxUSFcXLYPuKLdFkJGm5W7wsCZGv3LPiX6K",
  "key14": "3WFRXsynYibFfb12S42RYuK814FNqtcGAcFNpuUkce82mmVcFuLd8UuoQzrT2Mpr5KRhSaqMuGX56xDowzr5kerG",
  "key15": "4bxxei2FN7SXfAKuc2payb7XCU3Mz7BY3CbirFLhQ9yZrdZ9LTWeVzNquvUQKRLT7bHSZ92VEgqzafF4BfXmc982",
  "key16": "43RskCqFJdJgwxLQ7zX6s7Cj7Ts6FrFJ25eKjFmPZStrCs5bs9qAYH4NCW4Fh8jz6ArN36uF5RPLKwxAxHCfpc6f",
  "key17": "34bDzsA4QMev4aw8w56oAZ2WwxTgde6zRNa4yedQtVaveh63P9gv7m7Q1hScEDvDhiYnCSrTm1yRUxkZwmWDhXXJ",
  "key18": "k4ttjbR9E24n9xzGZCMC19kFLzXSiKncGTAZNqQoxEinqn6Kb51rDDz5ScTcvb7ks3TNuR6zGaQZU5NTofw7gBa",
  "key19": "2FdVvN9AUymqqvyHadS4AXyqxuUrSt7KxZaWSsZDcNgQoMgLD5EpNupVqYfr3nzmDVNmMAp6bZ31XLdue86qHm3x",
  "key20": "2TE5z8MeRsr74v22aXdEedHA5XEz1fHvkePbmvDRV6DshcQgFLcQp17M2JPrjJMNVnHDhU9oxgNC9WBz26ndsS9X",
  "key21": "4nFbqTiJGKyLHSMtkqUXnTLJckgvREfxY74pgbT6ABU1TmQK7DNY4u4S5JG583iAxrd2Te7a6bd4ZZWuQKugjD2P",
  "key22": "3W2nBWAqo5nB8a96NsYqSYMr74JSyg4tsDHgj2FRXJHfvaCXqKz5W1PEu6jyWAPKMR6syw6M8U8b89TW24WPbuiM",
  "key23": "2mk3XQc64rQuYBehWrjMvhUSs63cU8cgwzAed2pjgAc4K1X6HNY4xtR6zAB7VgAR7A48RwiQ4pjbAAXRigyq3mCo",
  "key24": "2jngc3dnGkHtiHgnCVQVahHUdrr2VS5ZdeeazHK6hDAywPCa2XE8tdcdNesebXicyJRti1qHZFw9tvKGwMrcb44u",
  "key25": "2mjwfNfyDbtps6dPd9zURwdiSDsz5LvxJnSqjTMDcDmUaYP1NHdTNBmSMgKVMwSGWiaDjUgNn91t1HFadvS8Vsvj",
  "key26": "48USUWERkus1QfHhTzpypBreVbysqzAHfZ1fxrBeBHai2SBvAXkCiEQfBSjefTWKw7hE1k5HiekM19YPwhThKYmK",
  "key27": "EoHTZuvUAMf3yKhWnXDMk55SPCzyzPkJg242H6Chcq3CHVH7nb7uPLgeGsMjDLm1e5nvA9RHTkHfD5xFUwuS5YB",
  "key28": "5STtRfsY8Ykn6ecmFP4j4ZRhcBunrgCKnF77kzky6mpSkNwfH1RNKeooQPk6DgRhFehR21u5uPesZmkbqZkUrjBU",
  "key29": "2EoxMTMko3J8F29KkAoy4Fvzjqz5VSyHC1bBcRw5avosMyGuWQbFv9R7KqEVrYfvfo7ZuPgBZFZ57oECmTyoVik",
  "key30": "3qGUBG3QVix5avBctegngXFPJZqxgt5Lk9AFh3dP2MQ8xpkgq7bnHGizCBA4TvnuAhC2JR1h4ro68K72oTrG3PUe",
  "key31": "2aWQQat5wS6o1Rh2qzKFP1v4QBfMeitvL6F39rYaZYo6muBAiV9M8r2zqUwQk6oDJLrcnr7RFS8MGAAMR44exN1c",
  "key32": "4x7kpHJFvvmAe5a2w9ppYviB6NDdY8Lzappn1uyvp39wjga8GdBPGUkCqm7hTWD8zKyufHgQuf9SrUZqv9wppeqd",
  "key33": "4wFn6F93AfmVSjHYKiUuxpzjA8TzdbFDFz4x9VFytU8ji56MXdUpM2HvpDit33HKqFhyDgasGPosnbgTYqqc5RS7",
  "key34": "3Yb4gjBC1JN6R3C1wtWiQ7XNZM147LSMn92pMHCs2j8AHQHAse9gNtcmPUr41oXQ8K4PbTaE2SeJJQWNmrNGKuVi",
  "key35": "5gpEazoce9XDyerxRCRMvF6PgqA8SWWQKcfFWWi3BQoXGyCtxVgdy2LduYzRkmtcqVawLmxfA2gSugjCK61nosgH"
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
