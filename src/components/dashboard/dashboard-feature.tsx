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
    "2zmFYRFZHWf65X2rMbeaM85QcEjEAyG4dJzH6JkYCNNPVfakjyc5LQajjxToFASFY3njuGScmVGybEJdFLTdpgEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27T6DzfeYvUgJLy4PYnsVDraQoTx8vYx9ood3bzfFdSPXEdHzw4ebDZxr7UmnA7EBB3Rk3MurcxGnYikKUjuDEC2",
  "key1": "2ahJPYyAFiK9YTGazXoajLJRv78NHKkGA8PVxbch12ffNaGgJKJiY8VsBPU6Bc2FsSUs8MqkEqHK28qKJ1Es7Msx",
  "key2": "2bBGAij5BjCPUu1fbbq4gnZjgLzxBmFMVSyQhvrh1mGxu8XwMdLumazHrHmxpPyDgNZcD9ts6WH4r4Gc7WGYBdwe",
  "key3": "T2Tf8gCMJqx2BeNBYf8PCNpoUwG3hA19cPf3wgi9RhGVewtb49YHqLCzqSUegKzvefdHkXz1KsSKVPZsP9e1K4P",
  "key4": "Rk5NJj74RJWVoyatkVyyv3Xb2gyjeaXuH6X8iDE62ZzAnvQ2pM5Phx5baBJWdSdxU6ecrsnn22ATeK2B1Zor1Sq",
  "key5": "2uPziGBt4YzZvRBjba4C1nfzeZb5HZDitVqU3jbaFr3bPTMvD5Lu42ZCv3S3Me3L7XQM1MDxHXJeHURBNewzFsDy",
  "key6": "3WriRbSPHnaJjPfn5RADT6oaZLHF7seWSyZbmyfGnCXmAeQC6GuKHRChbiPAwRtpdpp296C91tDdApppa9WMMR6h",
  "key7": "5L9Ani16tQ4tB7LKLQ3tjyXqPjVqqKn5w2cuQnRAJgs7RtJaQ1nScE9rbGBKrbDFc3YoJKmQC6Ssc9UqppfEE9KZ",
  "key8": "ZGeY2nvQLPAG2jqvd1VEEJDiVQaSqv2xMRUExHRB6ap9cqdpUveapnrBTDS3qLbhLYqYYr8b88Xr2owY6dfvt2n",
  "key9": "5U4LvRZr5D9bknz3T583uCjbK728K8tcazMqT2KpPYz7ZBJmVKK27c6KrFx3h4o54xGJdHQMx6sMeNm11Nhepzgs",
  "key10": "5CXerpzQZ248ohSeZgMSiiVSeqvtYkHEThWorwLmL7X5o9Greu7t5QE4jAXHDiyPnXg97x7xNHBXayEj8TP8Xe22",
  "key11": "26WYkNQbLFzgAu2584yiPb2u93v8QnCVwFujRPJ8MpWhSyPZppBNmtxqyMu9ZzkEx5RJN5PXeCucKdLzVB8zPQvG",
  "key12": "3W8Woeo4pS3Ev2MDj1GBWnJBFxJq8NAmdt74sZ7pinj9P5xX6TpAR4kjUWSifkvmwFyEvkQXLZki9aJ7BML78A3v",
  "key13": "5CzhfQCrQEUg3kSy8qPssdnpVRbTge55pFjveUF7NnyXAhzVq8dyFuoG6rtAWXfncNy2XujoYnEJu8YLiAdnmxvQ",
  "key14": "NS2P2Js4X2SEWB7Gvux2UNBg5XZ3UNe6GFFfsJGk3DJuk3VgmVmK1pF6PavNKdcCQa6nBnWNcPnsomGmDJ3avqE",
  "key15": "r8AsxUpfwitqSHFpGFcJ5UyPWWNxMSVQYwSJbwDqvLHmpNHvvKRhG1Npp1ZgJf6wKs2nxLUzscQAhPUtW4HeYWp",
  "key16": "sax88hAwKFieDYCdBjJtkx8BKTBoHL2arDJNYxrenCNW9V9826X13MchqtG5MjMpA6HaQhH5uTduEEjrDdHEDZh",
  "key17": "6ENjsFzNGTrpnbA8X94AqLWavLQMytiaP6sDgHrcd5GuwixfyvkQT6apPbJQLcWAKoxzSgCHP5oxxBYjmYK3DQX",
  "key18": "3iX3twFWyV4nWvJ66GUFHETJqKBKrYXCmGYrfXp1sGjJDDdmkGk7AZ3H4Qnt2xW3Kac9Y1o4XGv2ATpJ1kYRRjtG",
  "key19": "5ZJiBeaZ4Xh2ctxXDk1fSs4AJk8QsMm9HUozSheGAkR6WJaQBFbs9QmwPn94znBomJg5Ybc9HbfTyrG7FuyGaV64",
  "key20": "2oPW3BuxnzDCBCmPCSpa9i4Y5tTMSrxpdjk91SH8c5P4iiPXg9eGhkidA5MLbUobcntsauLFuQCaGv3aUFXtSGAS",
  "key21": "S4G5PFKz1kfJJ8utz2xGZxNUJKwJGYUJhDwUR3GXPyYLDCr2rtfYQTXjfeGEsd9VX3m6Y6Ty7Ww4Ye45zu9eZ77",
  "key22": "5bWKy3NxP34Ctjs6AbnxhrWGY5UV1rDpY2KDsdB1wTDYU8ZCGF5tkLppdE9YSfFqHSBHFsMxZYCFyjVN5SujvDcX",
  "key23": "2JzA8NKWRt2aUFpoEL7G2YYcvjXegGv9E5fCtfwWHMwuGFKoHWcPgXosqjYQpJq9wuKg33EXxV2pRdyitZjU95bm",
  "key24": "4tcorDz7rkodJvLXLskwiy3kkoNq9gPZ6BYe8U9eWWmTXBUALS7EjsnKqAVCkuoMuDGtEYz41mXD6rrGHXwG5JMk",
  "key25": "2fYf4shnhSV7rRvDZccRTAcPt6G4aUSRWibNK5h7QsiLdWfAGfPLV7uPAmtfuNzQ67qv7QxKexjeejMcUrqDaqhW"
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
