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
    "4BLjuQ5tJwo5vmo5yAhDUZZZcus8rXduEtHajEerrMyFocPFLJeGpsXgBqjtPqmC4794oyauTR81ZmtoUAy6MSus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzEFqCDyDkzdyn9Ymsopk9rDt5oDDDEVoQH6bUuaCm1HZcc9JLjgoiqvfyH7tcuLxmebQCHQWjbQiJZVYV8eSdt",
  "key1": "2Mu8iVALfDhUJiDAWx6UvbhGot9udqBBrXYBQec6pBrFWwCKVxK22vCpABdjSySBhjmmCyVzgTxxmzJ9v4pofwME",
  "key2": "67Mcac34f9KQcmKZ3RLdN8dKp1ivHgZnbBbKttqZh2cW1hQxGYqT79Uph5RVKAsY82B7qDDrKcEphoF4KkYP2ymA",
  "key3": "3dQYAhBVyibSogBzRe9GUQXZYdUBquGw9LTYMwXvTzXNPY7usNQCvGufyaeYw13Tic6x6FFUb69sPFwoGFvkUfnw",
  "key4": "oDUchi6A4ntSTe4HcSgoye1KMWV11pxjWmU5jc6VwZudy3fLHpmE9XpxuRxd2EK8cshhhNm8VmVFVrTBZSFh48J",
  "key5": "3pXK8otpjDJAxSsvuQxX25RfghzTHsxdr4ivQNZdTfcWssYmtpq2kjpT9mDku7G344s74Uq17RyUkRA6pTqgkZdR",
  "key6": "5kJLNHGNvHMxVUVL3GMNqbwJT2mKi3atc8RzGgnsGyoMzV47P8jH9aWK7WorqAWEzjVQJrah26Acva4Wg6ic1GNw",
  "key7": "m8bajdWQj8cnCPTpTS6X2AnvNwj4Kp1LPbdihYsXeDSaEzMu3C9hERo85ejNiSP6P2r9yAEm3sVoc5z4xX24ZHL",
  "key8": "3AGPLYy4X9ajUkcNyM5BWAsrjvFfrpKMPdvwFskBtS8pmKSQsZuJxwz65tM8sYjFAU9RKprwPtow2jW5JrXekdEo",
  "key9": "4oXfUKwWqmoJ2PmKxKUuKCHdfBFPNDUn1y6fPL4JkjvrLEePSffRAnfBAAQtPk9Zpegxor1GfQJWnqcNwu78PL8E",
  "key10": "4utCPr2H2ubbCLpFkAPR6mdmVvBCAb5WNv9Q2qs42RBPeuKevbC1D6Lo3MvQ6DHnGPBoDyNqhmyVYXxLaTnRHk1y",
  "key11": "3tWjMFJ8LJZ6kzHHA5NLN2qhcbSVNBRTLjgAvMVRsezoWUY6XbkhNvmY1Y5gsXizc7Zk7tCSRA7ZCi139VwUbJgA",
  "key12": "3FtxW1iNcLBv1ii3xPPHLLe2hdz9f5yTevvMpTrPgAG5rNeAAhnd9UbfEDmkvSWotg719RGD2HoKfQpqxvxxtmWh",
  "key13": "wCiUQRK3XpoYQc6TWsDJoMRzqHV1R4Q7adhwU4aSwKoeRP5R1wv4ux5FnFBkeDYxXsKf6nXcEMjdaTyohG6BfMT",
  "key14": "57HXwt9ZWkWtY19HrR1FTWhfi9PeJzz3dfZGyBiNbGYypSaANoptXi38i9qW5fUvZBUzwwocKhFhVuTRFVVzqmhE",
  "key15": "igyTWGzj1Xa7jfKeWJBxobJpHdhUGzYwYdzGDmWJYrtJB1LDhbFk3KX1fCZMNWPg1DRAQw4kRv1W1ZQy6Ss6S7C",
  "key16": "2RrBYRoDVgL9CuZFLEitM7MGz5fhuWLg6EWdjMgQPbbYv1fN1yejVRbyHvbrJCSLLDiRMbtPyrMgxUSjQR6wdmrm",
  "key17": "5tRfUos2AmTck9LGvw7a41CpDnJnNW1FKEojSqcvb5ofEDtfs21KYNfBqHNNrdAxfVEeH4NJnkhM1e23nvfJMPLc",
  "key18": "rAZ18xuwdFfJVMhDABLSSm3T7u7kz8b11KihGoVcvhB4uXi8ycD8KZTFpBuVZcrx2y9a6MW1DiD48Qr7EGF9Ark",
  "key19": "4GoLtUzox3gRLHjzSykuJbXAxFfvJWkZv4StdH4wUoZbNs1vS6zq7WVvpvdZ85BLna7YvYJZCKq2RwGKNnuBjewB",
  "key20": "3C4qUvSKtVe7nHhFCPgNcpdffPd3Qt43oi7rQ76iHwD3wqfL5LT1NF6zTL2WmC6v8FYVTdWgcM6xvJU4FMTydLnw",
  "key21": "51UsKeodozJ6xX2sLsRqtE2WtbzKpZQ6V9WQJgVKUDfhKeaxdsLazXPxvxYEctAjJVu5LPWfXUmpMnDuCLu4uaph",
  "key22": "2R1eCFeGh7dUGPZ6J7M9U5T5JK29xaijTJPpQpduNmSp3vCpQ8rAvfeTiPDQk7anQ9amHcE4iK94j98GXGGMi3bN",
  "key23": "3boK3NeZ9X6J4qnS7bWz3ajSJQt4u7UrM5tHEQ7VcNbvhtD7qpz6RbmxpyN42U2gcAz4ogzaVMyEVWBPRn3S3dJ9",
  "key24": "5KEhSPmiAA84FhVzzEf3PXdjviVij9LCs2SLEJcypryM6qp9EHRUbca5s7TMFJNN8vQJNuSZXotj2cKZj9ZZgpmp",
  "key25": "22AASh7DNpVrj9H4VoxorqUrjkWqE7USyw3MHNTMkg9apnq3AgddN8hkv8mVq4ANs9RkjK29VFAR5DwsvwFoi4ut",
  "key26": "2s8SEnhmSyFN6APp7oFFsDVFnB6m5QZkKRrNo362jaYTPaox1P7gDbNpTKdBqMU79qKjqJwSGZXeuTrw9hNQFH1K",
  "key27": "4qornSGKX242Gyktb2rCqfyWCNkj6fxyWef9C12LysXnkcd6hsuZjiNcfLJC2mqSrBNN8BjzGnKDrQMMW9nRhmt3",
  "key28": "5aip9oMN8RGXCTSGkcWcMSFFsrwJMYdR8oBG2DiWw1axMDqiiYBC5PLFrPBMQgXKdzvyu1a6xLdc3QcJFm7rzWNV",
  "key29": "34CqndViju7Nis1BtX9jUJvg15rm2pckn1ds2pbiQ71WjrLHDNcfLnN2DPYem8mUsKMrK1gHX14rqwAuUy4Zw7s5",
  "key30": "5hJda8C1JhiJwRxkcDiuSE4WpqR8TAHswDxtJ3ULBQP5Lz2xdoQBzxgKYBKQe3m8qeSfdRfYUPoaUrSsLKnm1w6H",
  "key31": "5Rjza5xkjDUkHXzGHndBS1uNqV19tqTrnrD1RVXnLUu1u8mYgcv8HYD9pHMrSasrGGdt4v7LQHYx6VixPuU8n3XY",
  "key32": "3K4JzpC9izzhwNaTmVJVL6H46aBRk4qd6urqaGfE5yVYxqnSGdFqYLaXLa3YkjK2bbRHmUyodzh8uPryMhwdniQN",
  "key33": "5YCdWCm1tE73r3zzt1cWXiatpnDcjUWATPJa1gb3X7KGyeoq5L9tfzezFB7DNS7faEQC9P7wZsTc6rZr5bwb6HFb",
  "key34": "3nYwZHztwUfEUXypap6fFeoFbNPdAvhoaHBhK3AmvnQP4Zs4CxNdibM4yLQ8ChQjDGVieAN8C25ZzWzDsxx2cEGv",
  "key35": "3xDmdqBg6hjGnjVh4XVJkoLCrsui2uP2vGnrf3fHSSuZ4k67e2HY7fq4wURSr9JW2ZUFV8WGRj4i4HT3P1dbF8aL",
  "key36": "59XPz5N2QcLGVrtXhaRVmxMfPM5FgCLkqLWeHXdqKjQ2j8GDH2BdHXy7rBNYeYsd9a65ZoU8q1AfvazvVb8YvfqP",
  "key37": "2KCwShiXtHrw6qSbXVM6fevZ8oouZw9Pjea8bG3nJo4yGcU7hU9CMSS5hTEdMJJaojJVN5bEgPhTPhxERRTobVwJ",
  "key38": "a8WkN2p8YvAocbi1kFNBGksQQiSWQL65i9mBVDyPE3y4EsNoL2uaaKQMin7Zgo5stpZkq7yrMwLNE9YGtopp9F7",
  "key39": "r2Ud1HR3Vb2WGTnMYzF372HcUkd2QCSxVAKJSunX1MRndzZKMfbHcy476ofpvWECDGc4ZBFpuDpeTMpfV5eNzDd",
  "key40": "uqiBMYgrHFazkrrNMU65UkFSdSZnYtageMdxWPyPWcRPgL1Za9bxQg3GvsqQzLesUDiQtMFcAZxH81pEhKkM3vg",
  "key41": "FKL9NgkLbKco63JBKMh3cjrEuSNn8HaLPDz8jghiuj4KZjhsHinp5DRdaqb386jkZa5bP61ruMfW8iqciiPvuXH",
  "key42": "Y4RSQ7odPFkAdDFWjPGtj34i9nGAdavAG2FGUqkPKxizj7vvxkMCtUGC9MAXve4SSBaFG3cigHV4VWWtHXSAzio",
  "key43": "453a5j4Dva2Xcq3HLHXcWTpfkaWAbbrFBHA2reL4krUViJwPtkYqrvAPjNDiFCoxdoMCPHH7ugz3SSL2bKyVGc8J"
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
