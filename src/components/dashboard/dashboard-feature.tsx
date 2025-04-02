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
    "SsyMS9SXFDQsYTyFjah8T262R6HAhWysAmHYBLeyuGWFSgU5iCW6nvdqQYy4Ag1sZXwgLRJMV8JizwMuzXJRt6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdfN7t3x4rBaXiHV9PzMkJcCDDrKpZQsrqMRiPTu6FppLAAzaS1jrT4oTMFkU64QGLY5YHcVCbDizD7i4Q3GFHW",
  "key1": "4tbNcPKogukpanHLq8bw46EJJUyyJGuw1XLLPyag6r1aiwazHg7i1Y6ZQusqDRnn9ong9vArqZGt4y7WG5syxNxZ",
  "key2": "2nW8gE52JfQasb5c8J9ZqeAssscQroEv2H7HzyvxAMiqJbem3vDqFBLpAbCc2XXkJzwDv1ywjYG1DGCQ5jXty9ZM",
  "key3": "2LZ1iP2tAiPzqcX2h6oa9fmyfgVDWEtdb3mJBNSWPbd5wHpYS24jXiyNi2mpW2YtEL4aZ8Y3CaPe16Tt9iKRdq3L",
  "key4": "32zKRj9LQWTzkmqNnzxBCDL9vHk7L4P77zCHkMiuuEdYLbmJEfUsnskGWLhFPRJ4VKH8h2sNaRxMaaap9RgEsxQy",
  "key5": "2dFDy13NvxVtr8bdwtS1heEAzhoy9YRDAeDtph5ayMNrYwSY6fR4VsqfswkM4424FTsTbcfXVeME1QKmaykuFqWB",
  "key6": "5fp5fC3CmwPygX9qwr9QeJLw55nVv6puYRtzovW8cZ6FRBkdisvGKh8Hx96QhrXvnJP9LBgkMNkqEkgTPRmvJnL2",
  "key7": "5Y9HrBBaF9McsZUpwHaCvYQ2b11pQMZkyuGY1RzMdk7jsNZ11pmVNbsKBrqMBdfVN9EDx1eXi88cXwNDWsYsoSpH",
  "key8": "3c1a5VTiAskGxq3Cb6ugSjcG9CN2SWoukFiuEa6oguv1Wt9bTQnHCUV8d2WZ3GTg72v5YWGcD9cdwriPCGmKSphv",
  "key9": "5r4jMowJdz7xvdyNnsZGeAHGitQwRFHwodxe2VebiCZ8DH5E7tRjcfRYLkUPaf6DJvLppNby9P9QCimZ8imABjET",
  "key10": "mo6P7nQy7o67xDvqXxWkMbJvNsL6CPLL43p8hUSdJ9tfRE4V6ReAbathsyA5Tp4a5ASWnizDHDzjBUfFKVGhWF3",
  "key11": "3rw5q2NKx4rWnCbziWLSJQQVQdCGvkawSYJf28gYoTeFqGiqvwbAuAaAXWgJMXPrAUb7aC1qzWxq5KQfHihZabxJ",
  "key12": "ouAdjxZsP5mpjWPGvKKEMwGk7sWkWEokRCQY8Fsv1KySwsX73eXygPn6fzSCHjvHPbWscYvC2dSiE2HhpSsnCQt",
  "key13": "2K4wMcK65eRQ24z1hE8hdddF2mph6L48oRv7TrbTYePqMN1DNpkiLh5cyrnkNjUVNpxoYX2BBQeJFUX2m1TRPh5N",
  "key14": "5XqFRbxy3t7nMjL7PXFGJpB9F4Xh7efLuLTw3xygfmx6UkweCPWgNYxeVR83TdtCUp8WzWP5VBytFug4nV2ZNSrM",
  "key15": "4mGQXf1a69Sp8XT1AjNfuLtfLm2RaKBugekVmLbL8cHqstJVgdaq27ebaddyRseihxP9Yyr9DqJTa8g64YQjz6MD",
  "key16": "5dcsYGdmfDHdoijzMHhrZkJa8S3BQ1VVhFEKADujQW9Kh1x55kLJdXz6kpGJ69sDCrEBj9AURrZ3tgtVxBNmznS5",
  "key17": "V67oWZNLuzqd62rfKvbLS4zFjwhREHHAYrEmhrGZEixizN44xVsbPLzK6B6NzyhwZhcLfhXF2F1H8ew9tBagD4T",
  "key18": "4jXqn6HSaaHGcrJHxEfAnUV3ncqdH9neJqfbZ9cwbKVH1RJL3fkRdWGx1wyMzHiNkHeA1vcYKkaWayeFqyZFsSGh",
  "key19": "URWY37Wxv6w29Gm1PK6GrGFYXcpRhCuRWPCFz33BiXoEuor3WmJ9VaCHRawF6AVh1424V2d6XpGGco3dv8wxzd1",
  "key20": "59igzLashy3vrkbsJoE4zpUqFspcgoQA7e6AtmWv7sMtb6wfvChERGFgrGywuabe3hWa9CLL6Ednr6pFxjqwbw4h",
  "key21": "25V9FhfXkHrMTKBuroiyxyfuBjstkBnfELnK5EpWVjPpbwPosoA1ZG7hCHKLNv6nSsKAG1jzFWkpQraFLJHuicjY",
  "key22": "1UHqjaD85W5vzNAWrQU33rTw1AR7YYfyqigx3gRHQmeYzPaAxxxvr43UK6Dsx2F9X3tm3ZQuL4AXb3ZCat5oRXB",
  "key23": "3db2LMymBvVdcBqosturpTb8fMWKTxchPgvtXrEkDvvuLoeUMhLfGauR5wWR9UKeg9gdQ7EufmABhiPRivWH4tBu",
  "key24": "3Vpaj5HN4NWG9QuMMonx2EpiNFgXJRLaMJm7XpijVHqDzWxxv1KoxttCGE1XpgPKZeZRQNLA8oAbyQ18oY9rLrKA",
  "key25": "5jq6SNB7GdUmbBTwnyKBdcMUrVC24HfgMm88inbHL8X9z27qiovkFCu2z1cFdc8ERGrHSD3AsCFPSpL6FcBHGvyq"
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
