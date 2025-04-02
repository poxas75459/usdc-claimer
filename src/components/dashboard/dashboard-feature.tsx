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
    "4K2vAo4LeT2DCpyGccSB6wRSdQ64bXxoH6X4eJ7rxN7iH4V5RXMFhdKvRBvRRAKAKUFMCgfYRfZZC9g8mEQhiM4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "goJkpE1qZVYuXJddzs49eqEVqVHDpRh5LXSf1STL3cccpUqScjNnYTUDXQA9KMCScqr6b63xqntv83fo33LPm7M",
  "key1": "66rAhhsfdwzUCEePcezzxu4tVemg79j4YPTzcSowJG9Q8saxhVXyfyqba1upKGXVtrZYt1kH41j5T3LEHmVB1FJs",
  "key2": "mx5cvJEcGyhXvpaRCNdUx9z87kjo5jcwVSsoTUMybdNHyVLG5YwXd1BQ6NyRQgBbVik5PxP5uPMCQLmHeWXW1xy",
  "key3": "AeGube3XFV6epfAP1pibzqUVGYmZqR4UpH3XEoXF9MSksUk3aanLoSxtXXyYP5uvzFvVxw1p25QXA8XtXC3qC8S",
  "key4": "2HFpyhBipJNseGVdJ25t6tjsJgLMPKygNxDumxq87MhVZpGYgoEaegDksCL1LEuztMzGbMRmNYcwbhDC3UFGgiJF",
  "key5": "2bxRMmEdAmd1Uuw8EUtp3AoLiRZVdPbsvtxNnJMvvQBAAowFFLCTc7kXoaehU3gtAUJ9vRJBV6ewKqz7MjEmdv2V",
  "key6": "kzDrkLqhiQqKq9Ut3d3H7fCWnbajdz7uQmXXXaXqWQ9ZGYDVz4eGQGPYaKu8a7eSsqEFKd8GUXeVDn9eYqMuGfJ",
  "key7": "T1DJD81CWH5z6PY9h5DKutSKTBHqNqyy4mJG1BVrbQuab3c5H3f2hQBPogeJLnZh2MRFJ3XsKsXvKxz6EKzquVt",
  "key8": "5JTcxho5VmmaJYtpnBs58AxWV48n2KNriZomhz3JhTXS2BzeR8LsMkTjWpWmaQmvCeuoPtPStJXMyhwtPBnUgDUo",
  "key9": "64SfMZKW3Afhn8m4JUMQPPkDnrycsXRwkAfqoETg2nAPLvCM5VAqcqMt6EUXzPv5cjN4t4QDSPaESjCNiqvMd8pj",
  "key10": "4sea9DDje6njvaHnQqYYmSyuX2uPMf7RmkNofNEyMAmTpqH92rrqmRQxbKSn2NiqWo7HhQkyZrHQ3zmELrGZjCtd",
  "key11": "4Pvb14KWwdNtUyZyvZY7FH6UqNLddqQY5LFXAAkK63KJZwAqVzWCYeBYhu3F6WRSJ2Baxgv7caYTzswn2tz7jsiV",
  "key12": "6K6qV3s98mXxY5Z41U5H8EkcDTC3dEzVje8iBoh7dvpYu3QjsJrsLjezuJPi5P9p2ti3DrBcyBsZRtDzcmzGbjY",
  "key13": "2nybYAXE6KNPE6CEeB4a2gizZg5sgz1VdEHV4iSdfKqshoYmMbe6sfBMCAMdd8StR7SzLwkjNY26tqPeuca7SPna",
  "key14": "31a5AYeFMKWqhi3iVfBpxgwetyVjnKkZxUxpugkgw3wByMLXMGwbxRbACdQEPn4QWUQM7FAzwcQ9oEyJGgpKTiYJ",
  "key15": "3EYV1Wb65F5ejaGge7CLBCmWaFRHPNAdaMFmNUiBXp6U8nfzQ2wTM6TEvWMBvdk8wjrhkjrseUoqGLpSUGPrXFpx",
  "key16": "4qWio4wngezTxjok6hqqxC4XQ5Q4PGtZ1YfRKGUGxow6M44rBNSNtedUcJRcVyk2wGeNVLBwhBXbb2JDWgpj6ops",
  "key17": "55TrUMC2XRAfpkHjfdJ3VeoGX2bhmp81qhT3BNgiPfps9e2T5SNvTSk9s6G3W9bfETR3U2scAmCuYy6pJJgKHEZ1",
  "key18": "g9UqcK1mDM9ocCgeQ776py2StjvYcicuWy7PbhdQmsoFdstNSeYz6Mz3xjrC7B3KPiofr62PgdqUBVu398N1SVJ",
  "key19": "4VWZtrdeKkf9iH5AP7DhMvZ7gnziPZZU7GrJZEAYNAFBtTrREtoE43MsdLFY3idCPmTPjbVe1aXxSKT3dAH5oztL",
  "key20": "2AcVYG7TooHSNXwaBgDvxMcd2qyZecA7wqVBNq5J5mP4pCjznEDQpANGYfQ3bwgZaM2UUrCzReGYsEG4Vn9b3mxs",
  "key21": "5mFbbHA9E1o76xr6XNXWrf3yFC4FfhdMcwepCPgA8eVUfTDKQiVmt75WQyLVKpRSDRHBTgfT95eVJaRUyW3fne18",
  "key22": "4W5fX33iQfmGFgzkcjqVvc1TVNEEh7PSJ2U7qVFbgeaGQZVqUtiUmtAx68XGhnnWHR9n7JxUCcebsYSH7guZdu8V",
  "key23": "2k4Lub2CyVhk2FMpgftnBUz2MGjVi4MyxGvzWFJpuvPCvBoFykMNdkS5hG27kgi6qM59edcKmTcc73ET6jCEAHP2",
  "key24": "33XmnXJPcFCyJBFcn3eV8uRQq7YNLJQNTakGhVLC6h8uZ4YiLWd1vuzCeUqwsNG685dKZ3pAsA9koPmNHS8sgXJc",
  "key25": "3J9mufqXtmmGyZZE6MP6xKTpc17pXG3fsoBSo2HduZxWrvWPZLJb3nZij63F7PmjfYpXAqRpPw8EqnyLHWuPn9eW"
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
