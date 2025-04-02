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
    "4LYkbVHpdNCve7iadrP46eozw1Ym6YhoM3qw2T8QBuQtTFtXQBrmxc7iZYtdYUqBQcc2Hg1xrKHuLYQcnEiB7WZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ggyD8FQnWdjvFm3B5tfeLNpXFiWqCCQqfntPyekSqNc1Zcf5bMG1s8xDcQ9kG3nMVGTqELbAitpUo68mTL76rH",
  "key1": "65QmLaXkEXatcXD9yFAk4Ps6KB3SHNM7QX3xGQ3iTRvSZc4QVoE2SD8z93xf9dxy6FBzgq5Uk9x3Vu9N3RQGP1zi",
  "key2": "2da5fM8u9mwHTB3Wr6TW5d99cXiW3KZXRJJBvcQUE8sW3ppPxWaDpTxaHpVphvVCs2PsG19ECSn2YZY91ACDrtco",
  "key3": "5pKEuZH3rHCebr5DEZSZrDCUyYgK3yyzo4icruL6DTDu4SNK1udd7iRZioeP14ohFdYAKKzU88W4ony7hRNBDLNN",
  "key4": "4VoR4GtENZHKv3cg77eu9mKa85RhUc5LS4XfJhtvQQdhPjChAyLCSf2KbXLa4DdaUiDsbVGgGs7VfNqaAioXpWF",
  "key5": "5JRny2WfLKMDdtcX4S236ybHYb8aRrtLzxf6k63Rnxd83kciykRMLT5sCiHWgQP4DW8N6B25NuGsWnJDi4iN16kR",
  "key6": "49p9LpwxZjfMSr3cJSmcLnXPFAXKrP72CNYgNdjN7hPFuV5Tjxm4m4AqupccBVuEHg5fvwf7xfZtocTa7ub52CLK",
  "key7": "2AxUudt2zvYuH1QqsTHF69S6wUM4cRvTcTazoqJJi1Hqtz2Ubq7QvDFJuqB6J88HZ5zu3gd1YguYL1EVcpsW6Bca",
  "key8": "5nn7sS91MKpgXkURKd2fopYWmLpjcZ6PTLLspYKSjQGFjwTyPqGZNMks7Qf7iaSpNCvRJfNZAxXrs8SDiT29Jg4U",
  "key9": "5KbZtdCFmSmvtJy9PiM9tmcrpveLm93iqrgmBeAKD1asvEq734iYVXGzWxr8XNCQaL16AbX14TqZYS3ZbszLifCC",
  "key10": "5rDyjADPPEvSo67bYg8bW29QSMnNJ4bFSVgfLMwfs7LMV4CYwAzNoZ3ju6XqPFYLA36fr66Vo73TTXBYdgzZ3CpH",
  "key11": "2rHsBYMF2xu63tTbbVKWk7sE7HCowSrYUd1dUoktosPcfWMFvjGUYrCABPW43GvpR5coshjonGLH9yF4ByiaXW7R",
  "key12": "3rKP4kcSxes2DCJpXCxqrjs5XwAwK722ThscJPjb3t8tmW9zNNeDJhqKxbvbg5fTq1S1xn6tvVrAL4VvNUjca6BF",
  "key13": "3DTEGNFbfPPp1xbsMZc7uciYRK9vgrSPbSKKS5k4P8ZA4TubwuXgo96CVGksPUVHqx5GL1FHturzxTFVpUC5wUkZ",
  "key14": "4NmUbucsKkZqCGhZk945HTwu6SirhsYqjWhUgAogzBuJpoP63incGqDo7U5FHyayexZZGkAGrGoNLA1EitCsHucK",
  "key15": "3E2TKxRoww74G1KqEw5fvmGMyAoyP54Yi7fKLUj8P4FNSanEt8HxpEAFu5nSc9E8vMj6JfnU3JqyzejY8KZewy8T",
  "key16": "5HRFT2qyYHaJnEME5wdYAGVbKsHcvMiMcsPwWNUadBQBgvT9ChCtGyLCjWN5jtm14VqTrGXhbSBXqZKsyFJ5yfWr",
  "key17": "28D164sFQeYe4w5ZNciCDbHqVrkbPoWCLFNLoEZG6EvnE5DGQoc3MKESy3HraDYdAUiysCnJvq5z3rXHJENsMEUj",
  "key18": "28N4S9e8htE6gEtHxPucCEKW8Lj5GV5DWu5jWV1TsPw55AcDGtCWGx1jWmTshcwMvVi11CLm1XwVcVrve4aEmrwo",
  "key19": "3Fw1Dqr5mUdCxHjy2DFx7pPmogJQnvcQ2pt68zk9RTBKwnk8Lm4AANVBYACJC4KGVGJFinA6pfkD2Z68P9gLT9oC",
  "key20": "4Cfukvqu9RB7Z53x1SFcvNj7rVWUq4s4PYQjdksmB4zci48PPXFtYmb3yQk5LeTgUZUquWJSHr9wTg7aLYjfG7mE",
  "key21": "2VgSyaX4sf5EWSkhb6Yet8866bDh847vPzSkggiTY9x7jLVdLk62JTz7vdc2RAP6JR1CbVibFomDp2RZ2e4XY23J",
  "key22": "54sh97bqwkoY8gYWKWWgzWP6fBV7Z4ABKX7Uaw7gYWz5x1XWBHiXBcA4mxcaUrb2Y7cxzD3XsEC9f1VzNZfbxeaQ",
  "key23": "4XqyQYmxLx4tQyge5eRLHTfibuXb237EME1JzWPxJ6vKstmJm6XtDLPCDTD6oGq32BstKvhFRJJmzTAW6weBEedu",
  "key24": "37hhaSsXQGUuJi5UU31EPGnTR6S729oqMLR1UJU2H7KZFyEfdTaiYubBGzgfXCnnzpgBYQYtofqtEgucEhwj4dWi",
  "key25": "3FubxPr5vvTP6KSbtp2T2pR6yqWjjAC52noa6cbwDjHNMNZqyqFPKthtvuJC1EkQFNq82txnXhRDHTJtUeUios6u",
  "key26": "LYkWxaM9zYE7HMRtJ6ns7PKDXsDWEna16v8mr7hAU7FkT8a971s4JS5phVxUqMt24rwBGUJmW3BiSgugfvQ5c4o"
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
