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
    "4jJX6PYRGbojritQevHaSU81CSndyik7FB4iYU2WWhZ31EKVVZuaGZHn4oigZtopxMiqmuPE27oGwNEUP1W8GJAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jRQgjC7CUHuSv69QxqYmJXmecucqSomFTcRAze5vtbgzaNYycP2AxgieZMLJQkFSgMM2k9E82Bct2NzM3SF9X8Y",
  "key1": "5dBEwk5BL9dyGzfv1D1DrsiScXChCTJxQcjmrSsoAmqpHyFuFrUq2Yid8UGVTqefEfRaYfn5eJEmn5fZAZx7DjwA",
  "key2": "4WK4yua8KYJGZNc9MbrwJSkxVzmGdfKDeLyta36MYr5Komd8VCA1rs66qgtXRwoTusVLdAfuo7T81TQbpLBoKvWT",
  "key3": "3atYBeSq4ehfNi9EAmk3uYTVbMDJ2sYhgFbH61PUXUH8hZwTpBKNFQBKjMpjrA3momYrssPcv4dv6jNvpPkhenph",
  "key4": "2wMUZCsNdAByUPqssYBRZcvzKsC9G72eDrT21oymd4peKzfTvEhZ3fBpejXpaEsW5t4ctwgdJ9LE3jwmPBP9bbSm",
  "key5": "64noLwr8EnfGidSJKBjBDQ81zSS1kZvLhwAQTJnfrLeuQoURXrEKd6QrKaqEg5cGLECF1GWZh576esSMfACNBzuL",
  "key6": "5cTdtHrYFVXNVgQ1PeYUEKy75zAadqzikQMFanQQ1EPNrrFhP6AKnm7AzLvjPkvCPace9nky5zxLsNqtihmRxzsk",
  "key7": "45SeZ7NsqwAaouLmzGWJeyzu1yG22uF4CVXqLE1GPajvujkzFPnYuTWT9pXVc1innKTvNnvnv5amKbRxCcfzFpZM",
  "key8": "55yZfK4TvMuHj5MA55WRxNvup2Bi5f5NFPKdZHEVzakEkiKHTqjwaPNy59ynmXCxT3vHTfXkzZPY37VQZBrdeiwC",
  "key9": "RQoAZKprF9pk4S9AERDVAhijirjqkASC6CTNJmGrwrDdUxGVDZKY7nRkKgMnetRvSJF6X69yx2JugWfAsrPh99a",
  "key10": "2aosjjtmvmzxJJmZnofiRhrAfov715ghZafwoxwYPyZ2MhrhA1XSdfrcU1oC1qyYHAujfrV78PExfqVmTJokxTgC",
  "key11": "2HKSDWpLX2LhiyjmproGRZFr62dXmLR3NVdRXoMyKu2iBigcQPnUrsubR8kcctQctwtwfnWzrMp3ZLYGaNy73RUf",
  "key12": "545JA7jj8x8RxkJvJaqcYEQhYEwC5PfyuLVS6NNtdGSyMNj78mzChdqEriM2hEkdNkJyVdTWAhEGVWimvyM5RKsS",
  "key13": "57NFUte1Vb8mZeSu8vcWduAyjzoeiVTbVXjp5WZym3PbTfVKdSXphyxbh4v1ffHf3gDnxbDFRUFgtVWEExyYUVaR",
  "key14": "4cViK4tkpHBnKS7jrSLyaWsa4aT7jjDn9bYv9HH5GCCMU343GinWyYpRNqSqSgdBhtHHZiWGrg1y1XnLk3fcT23N",
  "key15": "3wFcCNTDHbgMaP6VFvuX6Vf5K1ZWSbh2DEx2mWasHMPQrHNLSSq4jEoqZthv7WjYGQrZFwH44w6pZC2Kbk7uqLdZ",
  "key16": "2ATJnG95MVoowrWsgMnxe8tiHWEEy65T7ZSatU3Na91X9YMU8G6e2GxM84Q9yL3DJduPqWT48wj3esZb1JV5pnHa",
  "key17": "2KcheS8urbariSWFAJkLLv6ZUVuB7E2xazjnbmTENSeQVQTCPkDBVkompaKjEBV6wq4Nv4pXgqJ34ChQTNF1tB7o",
  "key18": "2RPeKpbcF5o78gmeBokF53eajEPjWr1qN2SjTdTQYcWfM9A5Mj75Ymt2fjcSiuNSPCPxHpdNXtc1euEhAr6yVoZs",
  "key19": "4nvCuktnVg6xZh6YPnSWnDEEWHq1fVQzJsWTaxCJPBS7bSueh64UocQg38uQ8eMkVTYgnxnPrrtaCbh84Be29ege",
  "key20": "3jTm2mH8sGDnq8juD8WSNUGiDvSkCxC6LU3EmaZbmPGybQgSJr4sLJPEtkJPrZahWNvAefksFbYLDEe1NqSbBn6r",
  "key21": "3gncLZ7oh53zT9NvHTCXFXtvWFms5ymYSW5FtJCNVWyG9eANctqJHKroaoRhQtyWXwbEYVz8DQijYpYM1NWpL2Aq",
  "key22": "3RZ5jArDrM5ott9qne8y35E4KH8HFM5dkW5NM6XC76CpFpMNCYkK1HE4yFXSufiu8ofZ45C9xQDm6ap7Z3FBypE3",
  "key23": "2e6XBKtQ79zG28Z93Yu1u9eqwTqfgZJqF2kWnJeFdDjbnUQF5uRgQgyDciMM36ugN1EPcnNbwbD7fpDxyZcB2e3w",
  "key24": "2VRBi2otqhqWRqHBR8spEY7vYjNYQsofX2aqh5DJLRPit9eiMVcxP567iYYnZ4mqiUfEYGvhRyyanPtfe2twpPGM",
  "key25": "31PkAPFkBY5xUnPyF74H49SPuPxfyRY2J9LKw2zhSG4DVXwHERrgmr7g6wGo5xvNZq6jnv62SxAqgo4SXbcVgzWZ",
  "key26": "4tjNTLPHnd14cXaZpPwcxQbMpvyqLm2zMoxhkeKmzjeRDFxzABS3D12Bni1oYWy5KggW9F9r3CghKtpCHJxz9FCe",
  "key27": "46rAHmj2oqKspXKZohXGbupRPxFvj5DkDXEx4XbyhC4ExsBSrARy5LycuEyNdP9HoYcK9c2pRB7JeuPKQDipCrER",
  "key28": "zu8Ck2VXuR9XUiHTF7zhaPUiudAfePsh9yH4DBzADXXbjwPYTKoRZaYn9cMCm6Pk1fTJnLnUfhTSGaWheYrkwDC",
  "key29": "3tDFfRhTrSvXKqByixpKqPW2zZty6oVyfXKLJQyAstQPVRdPz18JQ8QEYKjJQsfMqjLNr8PK8fiPyRWTPnbEggnU",
  "key30": "5RgDii6hpWWZEnDs5mSeVPH8E3GJEEbfY48P2jWkagVKjhgMJneEQkTd6ZKoQwXHSPZEeJmve3ohgedhEhrngjw9"
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
