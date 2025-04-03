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
    "3DNGTAWs4vX4tnTG8BSQZXbBwAQ3ksz3JFzXtzGE3HJrn7i46pq2JjC4T2xkHj3xvXW3jiL79bfES5EBvEixkgMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihMQXbF9t2V7kyT1tccVcaEZwraqUnTUCxE9LoZ84kH9hjtyViFn7JCBo1q1UfkaxuLAdabnX6xf9Um6CHY9aEs",
  "key1": "ypUzebq7vsR8CAwcgXneE57BQHWVzSqS8hziXeoKup7dnMe4P2BVbSjoNiNdfJYfrJT6WBfCAqaEQDKppL8suYv",
  "key2": "2BRwuN4GgoKaefRmaxvb16cMbDnMedsnJBt43XmA99Vf1Tf2d9nh8vWkPHizgdWUZWCGdxEbYUVXTTevFnemwERU",
  "key3": "5tGcer1YwUUXkvuB51YXxYGCgtoXPjPhj9PHRwHTEGiEpFEDkHYrc6qnSoQVKNC6EyJgvkQ7JZu2bwKd45hAegHn",
  "key4": "568FrXEXbR48bAxhu7PeTBbS7SuZFWtZbBVonVWE3Tn8o3uaYGNkg1xW1WXLx8kRzJfy12mVFPDcRm5iFpMFrpPN",
  "key5": "LE3JTQ1BjzXsJaPdDEZLxDuG1DEZHL9rHEbZUwjo3vSw47Hu27EMBfydZ1FUcKycbLyjHLwH8RiDMcV7ayx1bju",
  "key6": "4gFhfXTTjWdFTmcaRBkNeLuMpuS3aKGdDufLNhVZNpjVsdB4mMBYtbKzSruUVRpwjfJ6ryyssRqaeejqobata3fd",
  "key7": "LBZ353QgndpyQDMWC2xQkGQfXJEgadrgnNvhif6VvAt5eQr4w4sbnCKAyihLHGUL87HnfhyCt6nmFJLGiWr4BU6",
  "key8": "34HfhMUieQmjY4z7GhX4sJTidGY9AdY513FeT37wpfT6KtwfcpgHUNFauqmvpCEcgwhGmG8a6ku7NaB6gExgMrJu",
  "key9": "5dnW2fxWw3D37FjyvzrYVH15BykC5poKk6Ug6JrmjGQrgaAiqmnPH1iP2EjipGMJNWSNkuutUWKZ1v3kz9SEBXJQ",
  "key10": "3hEUzTxy2VBKyxmKJK1L9WCwPmd1EJHoezWWdWN5Vby9FAyS5N8d4TS76TXjVT5tknaSk1XcNxrgwCgaZc7gQ67H",
  "key11": "5FB2aXXuwYmDmznCEuKo95Kp5YqUwZHYrX85PPEoFxFcZTGuNusPjR5gGyheBg12vXkzZurtKgpgQsN1BSredVQT",
  "key12": "46F2UaZvzgjJ4HkvseTZUHURWt1QMP5nvf4YthngUydEDUxJacaBrmq47WnFrUDFxEm29eGBSozLs4LiUvT89qAJ",
  "key13": "33utBCx2iLR7ALn9fGTPP4LnNGunX8GcdRwm3vs9oWeYM8WwtdsW15iC8uj8vJUFgadLhEMhLfGimRu6iDxUtwYb",
  "key14": "4SqGFTTHciaDMeYBEA3ECmfiW99vwgfVaj82HFkT7RPsDkeLVBqKUoAEBKYa9qvcmcEU6XRzqVjeCpeamTWL63sj",
  "key15": "EBPXbL2JnTmp8vqrhkUa1TsAzhWM8yw5cymF9Wc8pLZuaHW8mGtcgwTEKg3WAfixBQ2uQo8Uov9fTLsNWmMzBXm",
  "key16": "2Eqo54Ee3MnKikLSsKWKKm78qoGUt5oXZMszKwtB6aVHVJ23R5ENwLpTtN3kwnzUEKQG6ivxv3cb8teLFi5S6eTt",
  "key17": "UBgdiD9FQoyArp8vmcjjqadCTXGyoe9REYSVmZLEmNZ1XGWptRVob6NswPjShzkpY3R9AML9pJoJmJTVzPwXbAA",
  "key18": "qozi1xyHDtoDbtqnVmfGVmNrXr9cbj6aEvfob14rG4iNzK1Qd7TBDqhd1zuoAGwGCxA59Fgg9ofvvePFgnCZzG3",
  "key19": "4xQEkvvYaSUWLR5gaMpcbp2nwB4cfuMQ1EJyCL1euje75SNmUTYTjKi3cSsQE1CubYJwFEyyJF1XeTfJ17U8nnfb",
  "key20": "5FQPgY8GJve9xMvfJX2xEqbiWWozH2dCpLyxwZwgDBqmCK6BL9feqNS3Hn4pMuJgstxEZFxQ2qqjPwUv6JmQK1dm",
  "key21": "2yFHabxnj2N8ZYwsUKrGjUesVHHM5ztECDRbARCY45hrv7KtDAzqrPvHLwpwvvkDVssN9XU8qkKGdEL7mvnLZB6H",
  "key22": "3HFSK84YejUto5cHTxNQceRC7t62PYrACcxKQSvfYEXeoTwHCFJW7QnsEtZXygrjhygw8DvNvn7iZ2QDAdjxV5Zd",
  "key23": "W3uiDrVQ9rVqcWkfZbeGuDdUXXraScS86Erq8JzjRRgr83wnsmcnWCFiYLhXdCn5H7SrY4YamZDeBCmyLypFTCF",
  "key24": "3WoPQsRhRSvFJabBBDbwPH8tW4NyfSFbxQchuFCStn6ZWLLwA7R6w7wZ47CYMCJsyqY4cAZmmDfU9yao8fMK75Cv",
  "key25": "7sTEsNKzsX61tyuwQE9DcNdzmrRxHEcitLKxiUGwpysucQdJq8ovBB2Q1pxG2EWPTM5EtVYiRpH9WENmfwnokL4",
  "key26": "2RLkQSCxzN1pwiY9tC75QC5uw8MUpXAvfnHWaKfMY64tmaqT6EWBMJvq8a4pEi252i9tphsPt1GbdEdiHQ7vp6Fh",
  "key27": "4DDWHdEvuNTqSBREdwjmpDHLEnxR6sbbf49RzoEdLNgyVk1EcmSGbC62paDAjPirqjoKuBC47TsxsphnhRjgE4oi",
  "key28": "4qYJivkBipL28zJ7FRAFiorzoafyTa9j3m23rgbxXaCWj2FyAmcwWQzoyUob7WUEV5QpcZQFexAGUV6MTNa6D6jt",
  "key29": "4DQtQLtMyex5pdYCwDSTSLbsaEYj1S9qmPZtN2U38sYLLPLUdqdrgEQ5ucQABkrj9JXikjGor6FYLdJvHa8m48ay",
  "key30": "34tqsUCZWhUS4jXcxzPRnmh8RNhzGFNzocJHFk6fL6vPV2V4TUzqW4rWaudkeFh5UbF1dqXfE9awFVLY9DbdhcCk",
  "key31": "5zwzVGfveQPy7dY4fFYZ9hJc5wBvCHRWbnkxn2RMQGNg6JkTgcPmbh7CqRcJNoALeHnzuMYPKKk3mUA7X2p4fEzc"
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
