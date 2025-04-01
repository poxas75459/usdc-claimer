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
    "HoxhJmn7X5YibnbWH9VkcESWhhKwNJetTkyiwc5ojhbPRFNYH3KuGU9S2okoeCVh9Btidt5aXqT5pLeDK7twvdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFj2kPyXYD7Z1c5SjQhLLBszYb8PkPQVpkD9GWcY3ckuNVs5ZeTYipMy8t7TT6YyWeKCKBR773y7Hye4pgjgWfn",
  "key1": "4mqi94YgS5A3Y8d9JgZFrHW3R4fS1awH6mxrNroTmiwcLtuFMEyZRRgAg3k6b778CfpJL6Y7wThCwvNXYExNWMUK",
  "key2": "61hYPiyHiD52P6SexmMsAk4x8S6ysj6C6DjAF4db6S19hCKBHWgmKocoVb364xgPhZUvGMAVGrv577HqhMKGS53Y",
  "key3": "4ejgc76peZCbbgN7xawiUY36gic9CdSsmW1WCssMuQZHh3kxAGpSRjfuRLagU5byGxABJRjrvNjkxEnuXKZKY1EW",
  "key4": "5Qdtogk8PKTpLQHdepUxL2p5ivGFBRY9iByyjVyRCwNDiBsjCSPhkmRcYYQqhKd6ywSVwjkHKhmkVd78AER1LZc7",
  "key5": "4fkT7BYXoy4ms8uEJfZZSYLDBQ8ixN8TX5M2uTwYzFwdRWTkqy9WBho1encfVkEoYVdUsq3ijZD9g25V2nMevd7a",
  "key6": "5Km2H8XAanbMd9sbpWUKFn5rL6b7jM34nT9aSanxmrqBmMGwGnU9MVkcsnuMbx8WxjhEjzZkRvyYH46R5gBc7jfQ",
  "key7": "3G31FVrv8hCt2w6PYWDmvnmdQXz5QM77ZYC9U6QjR1tBYTXtDAzDWAjvtiRTXaoFWPEuTeNTgEifMQNhxrMu4JRE",
  "key8": "36F1R4mzCS4CgccJMmCwNAnKGJuwgGrenWmJ7peUwM1XgcMqgG1pPRXu91Q3WY729sEv2vvvSpY1VAzHs7sQu2dw",
  "key9": "52xvHKyiWBujAxsuGefVcQ5QT5VUJTWb6EQWyVHA1MNgCxRHbcLGeQJW3s77nLdPQvPiSTAs1TZ5F4uL4J8P6N5R",
  "key10": "3Fitzc8KgHmKGcjPjH4WvvUGeQyqJwK6eAjVLnpXTwqdfdmvhh6xEcaFagkTVvpyjBjfFWJgmgriKJAj6jKvQFYu",
  "key11": "3Bgs65E3mzungVkHXSENt3MJ9dojcZjKPi1J7f8fgbhbko4NZiZwE373WqxqQfCMm3VZNUNaMMFB6HyisgdaPEy7",
  "key12": "3A16AxmXpywiMLfRhJYceGAXarJRkjL2s6vWfFE9vKfknZQ4h94q1QqBsHPcc7HRgfn2116xEHCauUt2bHR2mi85",
  "key13": "4D4YYNAQGwUBXcMuuGCHFP6QSwboqaqXUCkt4pcpWpZj2i1L2jfKtf82RgjFtqjvv9FdoRe5TGPmGrC8zqNjUqxq",
  "key14": "3SmgB2oHpjJrC2MfB9UpVeev8HDUXNECKXyDqqmJv88z8BxzM2EwhTw7gscPW5xKMu6qAVQCyqkSRcPqD6nRPDy4",
  "key15": "3SGZALRUk4ww23UuP66dYq2YhfE1fgQiW9UT2xKjgvTNr41fQo5P5NdHWDXoMT6JqZ3GrAsHtEnKTmXP26AXHeEb",
  "key16": "5tEsvLkiVdxRRR7MsyYUApTUq6apnqEZHJamuVhymDCAthhobU38GNMgaaqi7zeMuUW71H6C19tK3msaR5euQaMn",
  "key17": "4tZJkfd8kwpHPqoLWjvn92PHVADWbw8HkkirRPDRgSEHD8MM9nL4V84kpCJzAL642SEzxcCByUqV1to32q19H5v",
  "key18": "4h17NAkx9mk8y6UxgcRC5mciRmZAMHvceuN3nafY3HV3j4TDeM9bDkJdUfkkyWKGhvTqk3ny8PHC5CmkqHizEito",
  "key19": "nWsFTYfTAGNwJWMaNxzro8jMnLBRKBC1963EDeepoAouDcb6ABAKzXwE8gncvTho3Q5p26fzYyAmz3N1c7dJb88",
  "key20": "67h11jTMSzmj8G9zJJAXaoE3Ea4ENEGKGY716cge4TwSaCYYotGzNwJwRVsyHPh9L2h5XTf5L7Dso2wmGNQFGLhb",
  "key21": "5D1NJ59JH1Pegsx3rYfPmH2MmNtRe85FLXDwHDvA3YSEe8QPwnRNDuDwU86w6sK7qAs9C372miZbQTyPVjntNgqH",
  "key22": "kHkbxenGMD8ef2jrGr7n2BCtmGCa7LwfQ17wdG2DNNqziPJs6AkEoznrCWvWSFsnJMgHhYus9V1rGKGKbjtjgAb",
  "key23": "e4F5vvNs41v6k3z3rMGYe62vQbyjrgY1269oirZFF4xCZbv8r4Eb1mk1rbzV1ehKS9VjmWcTwroB8XB6Hj7vDDx",
  "key24": "3Vqq7MNPcVQXUmQ1iaQE1aYTk9crgpXcqhdWZ3gA5ALx9GZJuTk1RvcnLA4TXfa4eLs2rZFUkaLisBXrbRMjwjKB",
  "key25": "t7SRdAtxEo1c7YzfBnpYEVYjTUgpSCvWGVpZ8sEZCynmLGjR5mYzyBQwdUof8nZP2XizKLekaWn1HsmKiF4avFZ",
  "key26": "5mHQxSyppUn3Ub12qtMvPXDHSt4BxvtkVi5q1EGCxz5Y1t2SAKvsjSPKuzLKgF7vMf3USer6H3Dxq25VtvYCm2gn",
  "key27": "2NR1bCMGToHhFQGjDbDYjHRbwoToPUpywzkczEBzsD7uSGFuUra3w1ycmJAzfp8bbDMqjXtgVSyvvvYXwmNA68Wf",
  "key28": "3b2AAV8S9C8Ma7UfySAFGzbAWhH3c3wuUHH6rBB4hGLb1TmG5yN4PwHH5DCKwxWx9AU6ki7eoe7A3QRXGQEfthuf",
  "key29": "PmfuhenEYBmmBrZSb8KBMLcRrwfo6HWzTNdRL5atY6C7Q5SASEiSfuQkzzo3J8VxLVmLsfjKvHf4ZizFyPWVnCV",
  "key30": "58pffkHD3V69srK5ChVeoAiMK5G3H4uHkPHzkntkwwotJzsFzJqsJik1tmqVd5Jx4irmSXBmDHTgprtaDMmwmDLV",
  "key31": "kfNPDnzoTxw1Bk2MYCUSq15kXa6b1AWkYat8FpsvpLDZp88gydd9KZVNkiij7ycPMrYCZXpvDHvm8yvJtRRAiwk",
  "key32": "nhyyMSRnwsRxJ8cuxecQQrZQyiqH5csMApDG4i6kcRyFRGDTPva6TnbNHcR3s7MQKf4YNcAQa6dRUybxuom6Bcg",
  "key33": "xbqypUV9TULqm9XSiA1D9g8gNXqSbchZpaJvbLg43mJtKrjqLp7imaoEhweRwrVBg1uRaxMzdbSDuDqE64w7hzo",
  "key34": "2svv3vSJE8wLt4huN2Dmbky1L5MeHxFoWRzEZxD5xnHHpPncy1B5agzmK84bKsRbJenweKSnhpibABucG4EpBJKi",
  "key35": "3Ms3aJyTqb9Dy1po5oJn5cNwBmu3gzbspDyySt3EskHFDM2p49wXMtRhpFVWtCnDJeynymrM4wt68AyAtc3cHv3",
  "key36": "5AoFuUwtsVesUsz7S25rda9xjHbu2zT2WbiuYBurSDzuHaqvaeSfdGtjAv1Scn54FejAR54UTodpZDCwxYtNa99C",
  "key37": "4GkGExtjC3252KYaaUAzSsYoukVWLdjmTfzBdPq6nrQui8VvzcuoDNaDRKU64eNf13WYvLjEGwP9ZkUi61djZczS",
  "key38": "3AVsMFfTcmdB77R8NrXtmaztiNNA1LZDcFyTnQbxaDphaGjEGxLwzACD5hbpdgZTuuSrLvEQBhp9x2SEbWQJGAGU"
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
