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
    "4yZims8qJxj4D54pt9HaDtwU6BZopoqygWWjuPkKE2SF8cpFLw6a4Pw81ZtFxkp9QoUsm7iZ9wnC6ZPRvNU3jNYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EYDeoWT8s82S4wdAGMSpe6LZoE5D4JyMrRdfxznPeqBqZGNGxY1mvaoNcPEcnU479Qtz8jR695Ecaq5HYU3a1M",
  "key1": "2QfNNtKUiz5L6mg9vVYRCmWsfZFyon3sMk125NiSrYQyrSX9prPVtSQvPrjqaa89LnZCQVTAVwQhhdfrD83c7dux",
  "key2": "2eiLHKLwbXwCnZCusb15UjziVRT8sQiXP7JFRRXJgt9uuRoa9pu9snfXY8K3SiSwpTEYvSn3GsXRMxpT2rPYsddz",
  "key3": "4BpJtNnZ5NjJxtsVrMzEUcXgDja9PzwejEgF9VV3RBAsgPyvvVAAu4bBMPdMdC1HMFkY58kAq8UPyKf9bjCqiqk1",
  "key4": "2D7nADnyWFoMRhmJ1cEmiSFVydd4oKjHv1SnYaqVna29v5YBA43yWo78PCU5iHy8uLHwdzKTy4LeugStYy8bvMzC",
  "key5": "2WXXfCszqN29qJb9FAWuunzdHMjw8CXxtSB9x67kZSSb5fWY72MpDTUw1HWPpoZgrHzLxcUDDuqELrz2dfraP5Rm",
  "key6": "21FtxDt1TAM8S52trKVHLqiCU8SSxd1wfFMkYRjqdvYb6LacvWQcGW7ffrXvCUbyPgnRj3F85uRvmHxWsCpEeos4",
  "key7": "e2sq4bTXmLxhjUKFPfrCZdeThzyMYk2YGfDwRjdbzYmHZc1bLPhQsZhTutX4HKpknmN4AxvMZEyYrnbEy7wYZZg",
  "key8": "4UqeoyYrGCi5ScA7T2JmkLvpJMe8U7ZgFhw6UhaoTA8Y7kdym8N47DcQBar2DkZ5Up8MAbEeubATTv3CfeVoM8Dc",
  "key9": "5LEdc9MPHeTQuaYCQqcbZ5y4Uvkj2HCNP77auQHQsRF7dbEEasamFTBGTzW2Gvqqgn8igf9arhLiH2fEv73pWxrn",
  "key10": "55qNV1MgXLqfc66Fy62UVun4G4rPAmStUfFG2dWLrHsCYde2K2Hd4hZSFFjjCphnJmG5pQ8FUNZA9YF9dovmtkEr",
  "key11": "4aQiXaqq4bFhCJqT37invo8T6u6b4Dbt7gGMjNXQtxPTRqVyyxxdfFWdCEsDK6K4sWYFytbjcUEQnxhEek7x3ByV",
  "key12": "2YmvLC5QuHvYC5PSSZyaNDJtbLAnWaaiuU7QYzLv1gdLqWQhMC5mVWumaKUaisQN35T8Y5Bt6tHocb2WaxHjA1Y7",
  "key13": "sqsJsEtrsSB88o54XzLryjAjudhjUgsuBK9qoiu1PLZufBFNPoZLPj4948zfCLTCknSbWKGa2y853nkXRvf6za9",
  "key14": "3qSj9af17jpEb4y2YrPuBpUg8e6sZumZUvzSe6d8s7Uafyq4GP6MCMstF4WveavSQR7qgX1gqSgkEpSg5ZzuoHSx",
  "key15": "2Mo9gyHQfY6kGA8kruV8absQivrwUakERs2W61iYG8gz2qF3DUWEq4qdTsTqzPmWermbq75aU45wrsJHP94EAfyB",
  "key16": "3HGRMXoafH2r1bA3UWwewYNcEYoyGiPHEJ48TnPsbqWWQnb6iy4Zd4cC1B2JC9YkHYBi9F1kqD9PdA2MtqTvPmt6",
  "key17": "2KwC65mrJGcmA1Jns9qi35oDArL441FHPuntNbsbEcacG1hV9HB1kLW7YRU8HWKmGYCxFg58PZfV65upUvF1bNhH",
  "key18": "3WJod1W2Hkyv8u4iMppgHRrwFWssEBMzzVE5fdTu54xgGXP8kpZN9ZJgrr9gbQHEXjTPmfBqvAHdxZXgCUNvhGcj",
  "key19": "3mMHDagGUGjLiKbYAaNCni3Lkd72voJBHdHGpQga4xxQSuwpJzFquSrYZjHW4rt8yb9cWSbLPQ3UX9Cq3yPfeSys",
  "key20": "66hA7tfqua6adwQFQ7ZNvb5QPiEgaP73pR2dRyeifP3ed6JDk3TbEAkRchaZmaTUuWURp6YgC1V9h8FA8panBhUd",
  "key21": "5yRnfZcWkvU9NtdmcBSf8afYR7X2qAoAXFDrniLQkSPYv9et4VqCuk2SG4ionJ86uq2N3HY3BgqnvYmVjDx63T3S",
  "key22": "2tqvxAHHRkfrKw3WmDfhc9kQXzZwE3WV7SQyuieH3Nht3cRmRvqBE9kxhMJjUNc1th3QNYu9JGnjHk7FSRB7cUCy",
  "key23": "H69jxHoYa9U3y7bbsnQyDK6WwNzwctUmsydCNT8E1LamwYkDAnVxcNp3frMEP4Y615Hc72V8N11abmLexQd9Heq",
  "key24": "4C1bHJ5kcFZFD36qjCzsJTKT28qGCnfZPNbcw1EHRhxksMiDYpJ3Ru7MahAPAHGGCi9FZ5p3V5hNyEHZZ4QnBqVB",
  "key25": "3Hd5vuum21VwozFoSMsSDdWYEapBGDL3mG42ybqfD8aiPM3jtxnpjK7H9EMBHEqDnS37AFZyrWc4Qk2KEnq8dCSa",
  "key26": "66ra5EYiPc5wNQdmFidpxeqj9udZr9Uc35X8NuKzCcr4vpRnRCCEzmKd1jvW5s6SCVt9nnFw39FFVreTHob5ryW3",
  "key27": "3HpRqQCqA1iQADCR7GNA4PWw8GLzR2JSuGpcTdH9LYHYE6rsHJ9GeEj88STyfi1egxfDqmLkhdNaHA5aY9LiG5aZ",
  "key28": "4XhyHxdsW9SY5xxoXikptrXKJPRNSTXDjzRWdwoftuwbvSNfyEDWAX58hQcKi9QcoHKAFxquzxhVBoj16qQ12PRf",
  "key29": "2KV875YUmGtMYhgm9svQnJQNf62c3g8S7ku3zs1b7vVwdc7S2Dm9tmbc9KD8gwZMcEDbTCK9bWJ1X67t2Vz7feVU",
  "key30": "5WqGuSgW2dXbQAsNDdyX49VGQATtHkQ4uPSUZHE1XY5acsuQvMvnqqQppyBuBqRBAdticfYBu4Y4bk568nuayzVH",
  "key31": "458docScWFehJEZCCZ2WRJWBpjoMH4E1GvNMzQstcazE1MKt3xLXfg4nTe7mChybzDZw3MwbvEjNziGAW8p5Ca12",
  "key32": "3k7U2uDAHSo4aSeFwmcwUqgiXxr6ctq3EK8SxjUfRT3hxxEHiXRiH2ks3Ux9BGh8RN6Ry7ca3aD5RDaDXKwBvSni",
  "key33": "3G7dEupfVkVcVuQoNf2W89PnmCSBzwm5UGvG6GyJMn8bAMXaNaxvd5wsktrWmTU2Xzu46DNvcLKY9nxi8xaKz68J",
  "key34": "2VHrJW3TE5BFvHWhwfYnYYTjB9p3qioo9BH92T6S3xWXMcWsWKnA2RqRerGAaGaBej84yXjzXzLBoNzDcRdSMFET",
  "key35": "rayk8CoPjo5tyfXAKSys33Gqt2qYn5bF1upVKBeEzYWrHWSKdL6afvy5BM4G5Xpu2UD85dMdg8foXox7KsEN6Hw",
  "key36": "KFkJTRYvkJ7wPP4PV5jvGmjteu2MQqWjJKZmvF326rJGzUMm8XgFNdV1oG5VtndrJQW66mFD4kXM7k1aM79ADFd",
  "key37": "ipriBmWmmGA4MGDAAUCw5GCBJ3Do8TUxDpb1vd4A7TjyK5hcLZY1X7Mucw4XwgcHYVLi8AE3HTxRWckfMXFNX1T",
  "key38": "z7nXnormVYUzUDVKUj7giQmA9rsqyKEfnWuWAWJHy7qgN8FFWr3Meq7q3W7MpSGKP3oiEM3BsH37GKEkRJtSDXo",
  "key39": "4zk2VDxmU6vbEY9RRvai64VPo9Nbra4Cx7hMYuntHYpiEUm9ymchLLJGVYUe9Q7MUN2eDZ8G5yehSBKEGBs1yrzP",
  "key40": "rsCrLCKJjoYqqaBDXqMWdwXPNM5zJxcFtssLahHGbcrLtXH8fngPvW5YBhFycFpE5yWpJVDUxscRkU7eT2KM5ZQ",
  "key41": "3526YRFaapo7REbAGCDNeJoihgv9rj9f9YEXMNq6K5n1cq1kVnDURYjkzRqKqmPKKQarUTAUYg8fcM7VsA9iADgP"
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
