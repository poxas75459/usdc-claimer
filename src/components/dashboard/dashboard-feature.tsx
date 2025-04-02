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
    "mivos2QtPATzwwxqSrtjTeEUqD6eTAaXU5EJHKmzfwGdr6cHksjCZnuyvg66kw4eekino3yPGG1sb1wChPUiUPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "316xgeZ7mLAtxro3KNN1VN555rMmh2W5UVSfeQcpeKCVaskTKth8azryKEGYUR6ZajjmuogSVXM5Myczek8Sy56K",
  "key1": "5eSFw6YQHDsXyjcSSE4PGwxJ9vBNtAQJk9v9hZpZSJ6UUQT86F7fFAS5KxZ8uqA4vgZ6Zxce9NdPk2d7Mohm3xtg",
  "key2": "3jJVbrxVYw4FbqQd4kswA1zYZMTfJtSm5qqdzWeTMF94vprzwotBmjzDKR3R8WZ586uEAMfdHcjogW9oCKmNfYg",
  "key3": "65XkdaV6kfGBLqjnkDeHEvNw1cRkbQJX2VTAWSEmZLMaQ6t8H7UwyE6QEFpbDNNoWWrjmJtEftfXK5GxBiEVTLok",
  "key4": "3EAnwDtMcnHKWnhLJ4X9K4noXds9TyuqVxAnweMi9g7zFKDYwnEhjyDdtgDQ2Pm7f2BoXywAhgJhid4cJvNPjnZk",
  "key5": "4baKwnYtiHEYtJtt2rVjECyEhTno2DDwKMnwaTvo2RZ2sFYdyqE8WvdvQnUDLqnGvjquh1nCJUudMnHN9qkU9YDj",
  "key6": "VHsR1UU4B4TvqjxQEm7aPiHM7Xi62bxz32bUWpcPAk1kyYHpnzoaf2Fozqm1ivDAMLDe1viE6jqbMZczYcH6GCW",
  "key7": "5zjP2sTcSGY5D6pMgfJ6kpdTqbk6ezBbewe4kkoT5sxd9ffmaorSAodhLigcYgQfvSjwdJ3TmG1mrYHuS2C7nCGo",
  "key8": "DdhHsuqiY28cm94NCv5uD5junYmNPD7ZwiGBB4ehEsVXYqGoHtwfbHP9YHt5Bxg8gHSycL6YTV8wyaa4fR2U25B",
  "key9": "LqigxaSSmRqMZkMqWRnms3MhQW5oxnJJhmVXJnmvLP8hjWoQxcXjxaYHYwBKRiUaBim9y39DYoRyPsBaGL2Jfqn",
  "key10": "4cgaeb8HQzb1EwkYJhCDH8c51DPfv6TbSWtrG8h5vHX3jSCSqhk6sxMNhe1k3Ue8z44KXdX1e4fKWaJt8SMh9FAL",
  "key11": "7CHXh2qfe4eRXRhwee7GqPsAPKUkFyyGrF49mQ2fJmKuUrjyeGDexQQY9zqTHe2r3toqxwnJDxrVjDzSMwWYBSr",
  "key12": "MrpMaiDcakxvYriho47WFiRdcxcvJyP5qBxJeiqmfaRKzN7hBXD5pq2Ho8aGjzN7bfNHG21xCq1fqVP3on8uq4x",
  "key13": "3R5QsjY4uTSGFxPXaP4HyW9ZTonBvM5vK4qBgFMEHw9Bggm4fWqHqwDxKK9GzobScsoVej73riqh1jLGBee7XNPx",
  "key14": "gxskiwcDD9L4BXow1GpebJVRZRAGG7sLaZu1SkaydFbKqDaSgqyEHG7pLERRwSXBbm9hbQAPmwwipvL7zZ1LSY7",
  "key15": "4yWqzeTVFQcp13KGRGRRz9YUUzZmBx5p7L7hKNMXPPw56iwda8ESCox45jMzhMoFcKxMzhiL3t8SH1QwaBEBG6e3",
  "key16": "37NcrJddp7cQ2Gxdbe6yRg5UBxQxjWofh7DFUnQoeoTEdJc5Wyt8GFYVAxD2k1XMV56zxRC2t4qbybEm6TW6QRNb",
  "key17": "4Q7EmsQdZycKhabbUPrbroaU5FbtLaMLCAWa8n4XRVMCbBChvySb2rB8igg9NswWPCGXs8rjnihdFkzT9XDgLGJD",
  "key18": "4zCrFyhVLMWRfauY87kvgmrmhy88xmcr5Xuq8VqdmNs82zPPU6Yc5jZVmEMPiuMPFvAHkWLVMZ3GAgc9is5L4fk3",
  "key19": "2HNr93JZnCFcPpqsB994wuzXB7GccXi6ugoUbRKkTNWwHjiqDTeTqggS5m53Kh4Dw5AYzdDVCniTb5Cu9WwnUY6T",
  "key20": "5RiUHjuL7ok91SJceyQ5uJCzgL1yqJZ3cVzpjkCWPC659qdE4gQJepsZBiDz1kpQWUKRjbjNpzwLeCBtg7nFy6ku",
  "key21": "2CHJdjMA8oCnY1TokX1NzkmZqBHNTvRiXzBzT8HWeedSewb1osSW3u36FDjPFXf1oLagtJybofAfqBkGFNJnaV7b",
  "key22": "3BZcH3CXWqLHKFLymWiAYJKxzLZnTwLTUvFyKgJmxy82hsZGwquHaCtTLsVpaBsHd6sAYzCo8nGou6unY8Gcjy7S",
  "key23": "4FHxenqAFMhVyr5TdLjXW4hWo9qnWndYVDqHSnhBv18kY9pP33XFMcaUCLJuBycpRbF5UReCzFjp8VnAd5qX3EQv",
  "key24": "4c5doUuN6oEhqM74L3tHdSR4eJxhKvktyGKiTJ9GDNCTuq8EzXxsjmvsad4QDFPRfaaRJUccs32oEMw2vGdrQYYs",
  "key25": "5sRZ4zUqgjPbpbtDese3kMW6TWDm6URaeTzAVcXPtcowE4Xr4tbR6q5Rba5qp7azHxYZkzJimDBgYWgwMokGzxjL",
  "key26": "4B3aiWzucwdjBzYBy1fNa6Z8BwoHA8r2vPzgbz5oYZgno5h5rV2Z3zWLqsqcjLo6Rov5LgiqCjxwzMrqZDezkQbW",
  "key27": "mVZbkqReVnS9tUCqTENC616nP2ucd7D6xE1CX2HtphDsTAxr87iTG2UFEioyrY9rGxNyHvpbvQ6HR8S5SssSYH2",
  "key28": "53hrRmhgC1gkvSrDJvhit4dQoYJVqkAcFwFT1mTGNEy73Scc64sLFiZ61a93KFnSZszRWLGkAVNsAreY2pUKuqYc",
  "key29": "2eTAhfeE9zPkDguRXQPdHRC5SRnTCPwDiCm93kM46vArXPUsxWauUYBn8gmmRLapVvdZm44yzAHvsKjh6FmuUXwo",
  "key30": "52asa7B1jWbaEQSPTtEdiTKWEi84Qc1RWWEqoATJfkSmyCCGX1GRjY9NTyJKXenio7GJwo4qVzfZKoAc7KP55zwf",
  "key31": "43DLcyfhNq1oDrTFYurERUNQ46Fsv5YNsdQMQ4KFD9jNdDzmLb9Tm6SsUXXUpiEadBW5JDpbsHQbHWPde69FQK52",
  "key32": "2F95gAJkoeCVcuyMHdbSEzANLPbTgGEtD6ExQEGT82FsssVmxUep6qDMpuiLmtqsPPeUvLarzygeL29Q2X7Aw4Yu",
  "key33": "4pquqV8nAVey2RaUnqxbpZLQe5gNjhz7SfSPwCpZfyL49Dq12xDtn9CvkrVGWEPgx3c8bCcAG5LCQBuZbiWZrAx8",
  "key34": "3Ha6fysV6j1FLfWwCE5L5CQBenTpGYxCGkxrFNJEdf24d9XY1tRB1pXhjEbfyzsSEhLvvdN2Mo2he26DTaK2HT5J",
  "key35": "3vWdfN52z3Hq7kedJPAFyQMK4L3HsXmgSVkBF2fuNcej2neCRNP97HjTsPuTFAZewzwgx3uf6ggWYW3Q5rzoQCxG",
  "key36": "XZqB1JQy1BdA2vejXtN2nk7yB7UmQaDoozJD8nkZt5f1gFCBmLXWaXuTxiwcDrz4QvE4dhpEjkscGYbuGNFiauy",
  "key37": "3KqcCqCXoWrRAv9Xozr82UYUFr7yfo94V7jEitbojxzRL7TodjtevTH2QWdXo3Z7e37qEGjZY3LLwWkobNBLkKQR",
  "key38": "5KEpdRn8wYPY7W3K9XWQEzuLEJGZLSXy8Nxxo8GjGJVfAT9Kn3tJAotBmhKyR7vqJXc5hFDPwczzaVV1Mq6zNiMb",
  "key39": "3mDS6cggAgb9PSVWbi7tMe7qbvTBSeAjsJJozj3bzFzUAZicvbcXkarLsD4oGpH2dHNa4LS4rgUWLTvYLu33guXX",
  "key40": "34QGzxZBj5RYnsJNsSFUrLi6ZpBn3BLf1augCb5gqnsCgvBufUoKCUmF3xYaszepAnxHN1BPYFouRjfa5UxpaHkL",
  "key41": "twjB8mvhtE2rb7wfa9cg66S9Ybp7jhS5fbvPJPNJjoxCNiGsjUPbnScL3z4v3nuzb7AzYdc1dPgjvh1BtdqwEDD",
  "key42": "44oRjnb5MLmPstuthmV5dSeftHQTj7qtHE8wVJagWVnGTRPB1poDV4K1cCQozPxFVNQ43xY4iQF42XKvKhCfHQT9",
  "key43": "5GwzjGVkmZ2vv8TPWmA1ceCBYoRpgxdDFthB62HgxxDVQP6d622ieYC6QuFy4BeC7cDcygfJFCKHr64Yrt2uFAmN",
  "key44": "5TC7uZ69WWQjDeT6ohgRHBjDqMCUJ1dfGuU7zzuk1grZtM88CcxL6dznXgrWWbUFwdAgTjNhNBpVSPyq439SZBUi",
  "key45": "PPf1FNnGf9DV9xakkWFe9ThnBeqUU12oAQEAHWy2qebq6EJ5aaQyy7HDWhWi9heMXJkR6UjjKUYboTi1c8oTNhv",
  "key46": "4NbrRQDpj3GP3xaFucHeXQCPWF9FGAACABDM5m3CsTqjqDdSBNEnj5BbTwMMZ1KCeCi8BicG4Bpi2Fgi6yDuqWyc"
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
