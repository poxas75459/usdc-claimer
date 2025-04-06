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
    "5R3fLMx3jj4YpgNcj1rVy7XmCiyhtCpbYYFhpd4Q5ii1WxSbmRQZXS96NrpM5Zt6xwHt1RA6EtbSfH2HU4JF2HiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ueVS7mJzfDxZRc4rs2PLachPvHf2y8ARt6TdPEFikhpAs1kCJCBjxay727ws4qT64LNdBQjpghAv9kKyDAe3E2H",
  "key1": "HpaAPfYJH27kXdHmGpJxrBrH1gZj35a7G6ZTFdbHJzqytWfTQCtpFQy6eJbyL4dncQ2YiosTYrHuiHEJTspHhDM",
  "key2": "5fEok9Ep8gmSeJm3abjmhU1xgeqkDxEUoXjzDfLUPwNMkTygq1a2gt1ob7j2hgM4mDX2u6KuXcVaK1RTTR5fwVwW",
  "key3": "4h7UWzVxZ5EyfeYwne1W1iasfRjAZr465VATTpR6xhtvS9SYiSN5hHkcRgE8Yzg3ugR4iruMNKypNtJNeta2hJ1D",
  "key4": "4umPwwwJEcsWhdyFfhVSqmNXTubL4QEtrwkchaG1yU48trHj7HPT7rb48iKwh14DxSKViybkoJDxKZPNnS41Fsaq",
  "key5": "36tdw9zuKeAuHURxHHrU994akW4yBqxpGgEnLonywhieAMFmRC2zN2c3mmLodfqqvLGzSnJa4S4G7MW5uUweL9v",
  "key6": "67S9xPe4eFugA3kKAAuNV1h51RXfUSZKE4z24h72oEcWs2S867pxmicj7rLTGc1LSbiLBsWxaMiz81uWhmPgqU6G",
  "key7": "3HCH6maUb4Kg5RHsYNYoKJjGJUKCqhEcm6wDSjDLY9VjHGdRLU5M7v4vsk6P5x4kXnsjYFgq4CSsR4Bez7gHxTn9",
  "key8": "4bMPZqaiQMkLybzZJZpqBV1XW9cdPfJNJ2Ley3wxj8GAnQE8EFC8cd2kVTCN5dsZfkiWsqd2HuMqpiDm7G2BH55",
  "key9": "4xKqq7BmmrrjJsx9ocggosRacr3HTpPAdL35DBNakcTpKfJMkyUwgBGhXBnjQxjMdBuuBV88379WDLgBC9zKGBcR",
  "key10": "2VsphzwWELLvPg76EfrbPjkp9yzy5T2DM6tcZTv9kyrMrXanuPHgbr3PRDzH4xgFJUaCPTYhYw585G7dLdNsJ25v",
  "key11": "4gt8jPy5723UcVttgjjyywBkBHrWxoQCwHAVtmZFSqDeKPoDMbJdek1s9CY9i8ADrqMC5o4YZhG8AaYe1H2FGY8i",
  "key12": "4nvfXJrfNx4NCe6Pk5nyGGpZiqgd2xyP4XuCVXADoTCFA5Ec6nGgsGGsbJXKsJs2g7t8xaK4ARi1Qde4XTcQY99X",
  "key13": "5zgG6QEaho1h7nrekY1SRWjqV6Ptwbzac1TU2G2ZS8WdKxxrfVAb7wKNcevQn4QLuPbh19ASppE9RL3Q1EiXu6EC",
  "key14": "4bzxGFMmTkMzKiccQZerLzTfmvjKiTJUiTLLQprHRSf7oZHdfEJYZusYAYDff7auGeebYLAwejeRRQT3zT6qLQwb",
  "key15": "4u6foz8UaMpJ967nJWdk1oW79iiRFFmAHwb9ZSJmMcf6fVcBHZFCpPwwsRwKp2nuj9BrGLYnKhJFFpREYSZYMDzW",
  "key16": "57H3HnwV77iteqTm7SAzNs84CpJLMFhyCAAn88uUscMczogTioKLehNXTDHdGdwF3ULXJSAkodtCWMJVwVvsE6RC",
  "key17": "5hbRN6MRMwHDKXvamMXkMpaAqCPqn8Yp9p8knNqQ8TE1RNEek97Naan3yXEyyoBKZi91ZNyJTU7xKPDKoefhSzE3",
  "key18": "4wioXFYmfHDDJRPtxWFF1g8DXXXgskndS3x1mmKGB5SAbLDQJ1cYZdAuaJohNGSsBtxQ5Cd58FvVdNhNzDJxmZUQ",
  "key19": "4Cresh5txffHh8tmufcHqR4YtLRsDGk8qGMnHbae3yFSX8JBhkJiQ6meZ9FSabyuJfTFmHM85yWWRFd8CjkxjTPx",
  "key20": "HBtaNitjChBFNhaYKwL2LRvrbvUb9jXywaWNUEeMENjbFkztW925MVZn9bsR6Az5xWnZrBMmn6kCCsS3C6sRibG",
  "key21": "4SMFWxYt2Z8PWC4iwQXACwwtrxExRF6uMMP3ExGHFcj8iDXMoGU4DKAfdoZiqjCiiWT2AwJAc1zgTtYu5De74Fv",
  "key22": "3nmizouqj1X2fnXjMMgyjXB4St9KVEJZ31JaN93JBtizdabjkfLmbGbynipN19EzLThREQxHRJx6LRbUDbk6mkbw",
  "key23": "4ECnbehraarCCP6NDc3XDWUWUKeEX6Z98QDoPWMgJMRL7jwbkqW6WKBh1MoDGU1otwzVSamAoV6Ed6AM2v3YM52E",
  "key24": "5e8nWHEKTLmDz2j4PzC4ZgYcLetVdkuePgFKGKT9vGsomdZFh5fNCbf1r5aQSreCsq87SZcEDi7Qp8GV1f5CaZzS",
  "key25": "qqhAkr4KGTHbdrFuGWV8f8ZKQoYjrhb556ANMcJYyAfZTJwfatGWKZ2UQuTKMrNR3GJCmDm83ranmEEpDCL6Ta6"
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
