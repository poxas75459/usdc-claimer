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
    "5AHY7fXxApSRa5aTkLbHxA5dVycjPUWzENoFzb7wES1K2yMv3EEcvQa9WdVToD8yaZYaQ7DTmfWAtdLA6gDGF27w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDv6epTMgJiQKrgJmzkZc2uwsUuafqugdTW5PM4ZWWcS12h8P4Ev16TJzencn5k8nvtbXcsjQcDeDok4AJxERSf",
  "key1": "2rY2PeQhQBxCEBszXLLY6d5uaFkTSbTirh1YJsQx3Z5cwCsU5DYg73tZPLSteEkPpCeH7hYr2xq6TVi8vVehgSzQ",
  "key2": "2xjspnNK4MN3P3Zp615yYydWtKzQiW5QAFg7EUjFEcaY7f5Y4KLbNt7ASZNjMUJm4qvwrp27LnkYvTuX3hsq3YJ4",
  "key3": "4ovEnhZDCxSgoKYKuxUjRi1AzQ3uNJcybeG2wj1pWxWKdZb2WScukQbRS4zTmXSdRCoBTa8QZa5X6pwsXRGqjt1m",
  "key4": "2TSCdAkSa5hwcKTMDkXY974rwUZvsQsVF8p9ptwTPJanyMbgRW9HdSsMECSH1yuPKwuXA3768AVxPzj9NUYVzZhg",
  "key5": "5NiAG3YEAW3vHabwPuUtxdQa46pApz2HGe8hLYNmguCRQpZAVwxVzjqc7DBXuLo8izsF89SjPF8ZAfwYBheFXQnU",
  "key6": "5z48S8f4aozTLEncZ7P2Nfa1tooNpcSW8ZvP4H43M22BqZj4nVAGoF6N4dd6ZcKZ9TXJqmn6VbDpHU82JoU5z7Co",
  "key7": "317vFZXvYHfyVnRKoVQRdiSDC1vg6yRoS8z2C3XfBDNsK4JCKDajCsr8CTzisrqx8iNtxaQNRLwTsTp3Zo1vqYYi",
  "key8": "xbPRTwhvjSiCxoj7Y61d3SnbJGhzjzZ88HqDfL2arMRGjT8NqDApoCXAzW5roF33oXSN74aw2mmtSfNjd1DUCbD",
  "key9": "3MAgPrHrELN6kMdKJVr5f78ztpuoxJDJ9ukLRaWiJhvQ6ZnCFuWmtww15FevirPst3HDEKfAqjZgjzE8gBjNFvrU",
  "key10": "22DfUTA7ZNizu8XxY2eTznaYRFzq4GdM4NpHBrneLWRGn7PmyYfDUsg6vfAbZzGJVUxRzqLPqdqapGo1UXt5Z42S",
  "key11": "4r419A3KZp6D92zhch9MeTbYnRUHEPAyybyCJLuE9tvYuuuRY72VczsfkfAuFP1ayBDVQyeNQm6KGqgHuX1c6Kyf",
  "key12": "4HZbV51XPFMktL24YAB5FeGCJ3aoC8U6D46rWzDhUXT2qHDJQpE5NXjaCoaNEPiS8YjfvYKMERsaYy6ToodN3Xg4",
  "key13": "2bggnktt9fsVGW2GFaaniLDD2pyNngWqf1F32rC8K2WuvLSEpS9AAqz2PUs1V7ykotLUpGc41aD7oxyYNAiGWL4Q",
  "key14": "4gSVfEi55imUtobKrbGbXLS1eFdmyKhVdcPME3RuAmUnWDUBesZ42gs9J5vE6Y8Cv2GpS6WfUddi2bkaeAa9wK1h",
  "key15": "4Qw7auLm1LUzh6p3RyXKLGDM5Jv72ctG73cS12VFyiZ9xDziePYTFqe6EdmxhMdzMzJx6KKoHdi933osYdnLnKQ4",
  "key16": "4Z3nT59W7EgrHtCGw2TvHBuY9kKrggBpQaEqz22qkpyoiyPQN2o1B6Ewh2wEfhjgRsNdaT96wEdmCgc43rmsjEZx",
  "key17": "3581GhuNCc1NJJFKYVXHp9PTQAJBbdrbsoo7ojicCpUmkP1PrZ5rgn6QnH4sURKTEiebtaJTizezU3Qqz3KxhxsK",
  "key18": "wKki6dQ6QmkNHjjaTUUjzspDiPgMYFBmUy6GVBTBbXQ8P1xv1tKBZsMxAQ6eaXugsS4Gk4xvpWnmMra5VScBkyg",
  "key19": "5f6wCiAEuZGyBvS3Tr9e76ZcGjwpksyy3FrGwNfmpMtpsqVf65u1np8SMJChCKL7uxt1q5WEVZaXFwBY1Unv3RnN",
  "key20": "3VQoTVnxiPEEqdq7SwUSohHTQNW8yZmgnRGxEMQmjREAHYYW9FqWdLRJXqbNKK8KBHrwtyomqTEyRpP4aoEVtj5U",
  "key21": "2Un9Xupms3eUZpeRb9UiRvAgbijmvtfR3bFG5QVKBthgKpNz6DFb3VGRJENEGhBCDv4jLMNLJbsrb8ceymoiriLB",
  "key22": "3Bj1X1KhgiFEYJBLaK8YcarM6kuwHUPQqoNyJ9oZsgHyy84TMjjCXpbbGYxXrGrCVgGo5so2G19AWFWqPQabXX3A",
  "key23": "NDRBgd4KwXoixh1ah5DibwfaNaeULNWjTcJTpP9AN15cE1VUdHyRkmq4derNyVBCHzt5ibv7vkjtWrgpttXJqKu",
  "key24": "3wbDSWeeU1pMUbCG5UnLwgC3injvmYf6hweMndk7BXaCwyauQ2vmd6AkPYUY96kcWfbezbz62XT9zdkrq9RsEHpt",
  "key25": "3WqFicmfkMss9ZSWChNqjoHPmUPUZcmRnnTJSMnzDtSqFcGVi4RFEr9DhY1bof5sTGdKKevB3YQHDW61YbRUFuBU",
  "key26": "62cHNi5eA1Sjo2w6YhsxaXHr6uioRvnXgDcxH8kjLJWGTsRmrnJWLae1UeWoCMNHmg5hy8rgP3Eqb3TnLuPRwUL9",
  "key27": "3vRSbHHkmW8BynQ3gsbKPfzPiTUeqep5hSBWaavaJBchu6a9hMnUAFiPSMChZqdfDMYiuUnNhdkezb9QrTvUtC2f",
  "key28": "3PjvieYUVKFtNHzTvPkR52W5PZVb5SBS6ZYkQ1CWnE7VyTMReYx4YENVUo2Y1gv26gvvXGYGQYnvVAEcLqED9D2c",
  "key29": "65fDhxSXruXz87qS2Xj5WNmcUka2MwNXKgrN9TWk9M99aYHc2GbfHpvnimvTtFrykpQ2PoQzXfuFwhgz3eijJApL",
  "key30": "3ToAn77A4Q42panVvf1SjdEoGuw2qkVF3zwHxYbuF6nRCiU9LZX8NwqLdfpvGEEvZz6GWcZB5CQhHUNHvrJdYBKa",
  "key31": "5dj9LPFQFgdaFfuhtp3S7cFYcewDGE7bqqbqNncbVjgfAVC1s3RQhJmtXYzdAvca2U2ZzgTjbHvxpb37CjXZXCR6",
  "key32": "5o88T1br63SaqVXT6RSqaXkybEAKytkVscM4HKQEYt7Awas8KBPkHbT17PSAqAj5k8Zs5ezqr1CYwKfvQezawtyb",
  "key33": "M3ztucLqLtcAA58KNGbEmMmC1fpLqPmFzrubMxLzDKQFJ5NsB9sQuzJc5v9AVuN2pJB6kR5ox3ZeFXmfZrTP5qc",
  "key34": "4fWcEe8bgurPSCzWPVmSrBGUuMtSuFcRSa4FGEjZ8JvfMCNM5G9W21pe3haEZWieiCwwSHWANUTyFbFdxXXyXVma",
  "key35": "2DSyEJtw8xEJCsqryFUbWx11J86BdJhcDM8T9BGUvXJLNF3MfRiRs28PQHNNEZz8Sv51oS7U7mUsHPXpK1EWqXEp",
  "key36": "4GcdzPgCBmLesf9fRXMsyngGz4McTNGUMCDUawg9JYr1saWVeeHKj7i8ocb9mCR3JtNWmnKMvtKTQMEaPJVDU1Nr",
  "key37": "2M6n2R62m2BmTtXVovaie27t81wQ7BKZunAtx6La39JF7YK3g1Yk41EmuGP1s9ybKHomQtHEwzQCw3Pe2XdS9eLY",
  "key38": "2bzyrhyxxXXZz4Ed7mon9FNPdhdjCFdcxf4R48V3D1wvcsV3HokoXhTZFN6RPJkWd221Jc3tTG9DYESKyGgTY3er",
  "key39": "4Mng3wsPARWCnknBUm8wBvYmGYyq8PjeaRCzPipzG8RL4JGzYDQLfaYUyrfXvo2WZqcFxjXaGWrXLekG3MaYYidD"
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
