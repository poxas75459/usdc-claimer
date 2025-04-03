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
    "ijk45j8SHdRjCBWphdoiUKMkwQNjeidBUoe76npQQ7BUiRJCbktKUTXkTWRNf5id5RtxiRbHujgNyAtzTFhRbK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ayksyz66GB46nVXdUgusfasdztQp9GERmDVryaUuLEse9zk1K5yxz6USLEqUhFh1jkK3mCoZcqaSz3GBr5qm1sb",
  "key1": "2tvp7LmpfZJaVCE7Y3o4rUHEk49aWP1sUbaWQHpM4kUkqCoDorQyfPMaa2asDfQPQjqr7PDD5ttmMgcBoXmhzKe",
  "key2": "eNj3jaK8oZWqDeRYQKvdhXQqXySMNnqCLwJ2Ne5aEnXdUUTNk2aHmoBi4BLastBAoFjbxdxAVtjipvpbMNYdFFF",
  "key3": "3zf1UX5zbv6DC26xfvXpDzuVyDcrAZyw1moZpXG5DyRb7aC3EvqzEorHGnUexi2VsW4QKScV8aJ1q6DTkA1fqcc8",
  "key4": "23Uk7eprmidKmFJ3ZK5mMBnUDkhxo9ydtmaLbWeyLj66ZgzUQKR4pDt394qfeMJt2Mjiiei9fkF58d1SFVdDoa57",
  "key5": "YiUuBSXMRbsSgWsNwtrbX66j1gA8SMWvvQQMwnHnr6NofJQGigvFTxheUP44YoaVx9RFLVxyjTDnmmgBaj1e7Yo",
  "key6": "3pj8roEKQdSwYBMfgyUiELSugDgzZenoURa6xpYFghX8yQnqbtzv6tvCPYCKDsreNYh1GNuXrwD7ApqoiMF8t9b5",
  "key7": "2madSWQjAY9JKGfGuz8kQ9pnMyM1JRmF76TWrastpmV5kQq3VJw3bKPrzTRcwem8m5MSW9eySkG3ukRmLrDUUaFH",
  "key8": "3XNFf9hZBDSQA9sRxzn9HLoV6uo5yTsnkapDht8vJi6pDqeVgydjtYx7ykcJeFL4Bn4bx8rXgFqjgMx6vpWg4uWr",
  "key9": "62q7X62sYha4SyxFYTT9uXrSY3jMyBCdBytdzpmJEfqUGzfPf4KTaAcG1ot4W98AKzLnPfPApk5eU9X46ofJVMec",
  "key10": "5yGy1yxERUP2sz6TE3uwij5UQKzuwcFfgpWP8Gd74jAc5qC62WDHYk9BKNaeDNjXHvkt5U1vbkB8fHaxDDhV6txF",
  "key11": "59adDGDiYELw6LRhJfK8cCE7aS4VWPCezvHqAboaCHgWHuYt7o3eQZgWtXsgidfYFxNjFCkpSDG6ypWnJSpSdzXj",
  "key12": "4KJwau3JT37s8x4U3n2ewsKDMRGhKwTwDtjF5n19PRLignvf8NhnisozGZjXixVJCJvGoXpVvmvmD4zZnER5A5cj",
  "key13": "3hYZogBLK6v2Q6dogHKiwqwAJMBSTP2avnxHzPekGGTHYTtWyrHWZDa3dY4WitZuWooHNcEh6pYmDL9PKVJxDoQV",
  "key14": "2CtGnVhsqMhMbCGcgCR9wM3KKeLNUFdxZd1sZYMR5qBSqbWYds38TJscSMSia1tPh9YRTaN5BCn3AfXXKqHNEzFC",
  "key15": "D57NmN5p6WZqU1RJjZvfHezMbnAbrCmo767F8HnfymoXam7KujtLWEiSh8nqbfj1CKtQvK9LaoHWQiH1FznyoXq",
  "key16": "2k3arsx6jgjkxWzMypMfhKrpuXPspVRALDwkLjjmW8krkWuioZtxvyG1K37Lqs6y4dHzag15n4F5nJn6yDXkfyir",
  "key17": "RGXoBL3b6oUG4W4DUctNCfyr4kHMjbs1pAABc9L3ET3v9HwHrHLBJaNaZSaJkjEVsBmzbXYPciT2XzR9PMjKcWB",
  "key18": "3Hhj87C81sKene5UcVjQxbScpXZCMBLyFewCrAoEedeQD8XX7xu2hmX9XiMyDL8w97hRMThsp9GGg4PqxhLaSrX9",
  "key19": "4REgN2sCf5XBvzcMUTcVxAYwh6Xa6aDsvoYfFyMGQ6CH5XiTddHDYUK8X5epFSsn3qy8makS2ZS5sqbYMcG5YsFK",
  "key20": "3ahKqDKvZQ4V6L1qhMzaVP2wq3trPk6SPxnhoGLHMX7rFSWarmBUGdbAM9ehqNe4XPov7QXTSd8Q7LakvrW5ssRB",
  "key21": "2yY7b6hQqdBoKp5PdFk24j5bKLrfxe4xJfn5WeXcuN4yJQwgMULwFWhN6M4wqDbo7HFkjhjKkjyNMYJ7sZzQbU2F",
  "key22": "2Sod8wBDfUmSaemgM52rFmiz5MZ35Z3W7ms3tDhVmRfdxurBGjQH2Z4Wz2UEh5d92ggtiqszHKtCxdkQy6d6fV19",
  "key23": "25UaCa6D82Rqy4rM9nzvY2Tgy5FPuQo6rVFEtkhL71mKWfodxYRfukhtwqZSzSHdaT7F1jcWpmtEDDmbkgrpg1BT",
  "key24": "4sfkqJGHBKezn5JvEEzt3LKr3dQ2KKtGpiJG8bPDLEq3jc6aqsoKPoWZxkVBz28BrrvQK9uiA66uuamTaiadVdCi",
  "key25": "2z9WmsrnxkEQikiuacZ6SBi5eDwcu3x7EbimgS45sUuJiSRNzq9Ajgv9krdxNfyyWyUAA9C95ZQPTBi2RRdVc4RN",
  "key26": "5dgWwC2e66g2fMazegD2r8RtJUbUbBLjEt8RaZVSvdqBmKS95nT1wDs45EPwfeBrUtPPSfJhFmi2moCzsZSQJBvs",
  "key27": "2v4acongovpZmjdQVJQTnrFyyKhAbHGMHyBeN7GZD7YgqjzhA5f2Q15rDrwMsuxKAdHNgFo4BPzuoFCM3Jqm95ei",
  "key28": "5vS7TFWH6Q5GEz7w3p9QNHfE7h1LkSght4j3Z6nFcF6hKs8CYsL5Xo1y8YVuZhKiJ1YFVUE7mL5wyHZqkeBXp112",
  "key29": "45sRUqRjaF6xHU2gnJEBA6jkZRfMbD9a53PbHMCe5FthK5rVFjPjFWmV1PKMwYV3wPQ5kLzUJsV189bQp2iMV6Ap",
  "key30": "9eaSdSiskTxXKMUVTktAP2KEi5Eusx6SyzNn1TsHH6eD3NgDEHF6DNDpS93apF92dKCbbZfTiirKHYgq8AqztKo",
  "key31": "52nBr25mAA1GBA2sfE4bT929mjATjm6tQ69UUd5uxp8msRAoiJk5CWqYLsrk37wU7jsZEqwk4SfzJG21igXaHuA3",
  "key32": "36oWLJSE6wmyLZbNNGuyJhxpQRf61mLzEbtamNc2wiDN6Vd68iYe8JZN5Vm1Pcskj3Dv8sNzTdLT635GRAVJnvXb",
  "key33": "4YvAxQfkbvDk2jCRi6LLo5wREmgcrgXfVv8o7MVtAfzCJxwuJ15iULskrvkVSNqETzZJtWYd7GDYeaeoNrHZEooR",
  "key34": "4dcqhYtYqKrqDD5EpPed132F9w75ZSXgpmQCERhQE1R9MQ9binhcZLVheeY9nbTZs2VjiB2UtdC95WxaMvAEA6c9",
  "key35": "59KhHTPF1sSyHjvqnmcFnUqgVRf1TBw1EuiWxwfqC3VKj6f8MZNtuxoXTGVXoQ65G1btwgDdDgjWsJuPdX2GZNtB",
  "key36": "4X73L9u495ZrPcAzQ2KU4GUGTQvLAg8UL3U7TSJsr5KwwpgFqWZdjmKsvU74DGM4qHiX2ufKNmAyaqmMZGnvHZiq",
  "key37": "LVfYUeLonGSXydrBECAsJ41onus6aHgwEg1QiSYKiyaG9Pte7Fu6vbLjJxeGhpzksQpT2j5bBuWHRcjKmBkCVWY"
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
