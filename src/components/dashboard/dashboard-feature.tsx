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
    "2of5meJ896xNj9qqpDjZ9q9wFZaHNSM7PmYE869bPPhj3QfRPdRRQzb9MsMRehzyboqQsWz1Aaexu9dLZ1HR3vBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iT8GJyfGMsBpMDPQcLoXwRpHkzYewz3ui6CwFR5rTW5jPzgTdhCawnvmkTELNLZpfFHfCziQyB8r9QgTYVGovkS",
  "key1": "5aKgNWWXxBCW1cQQWoZmri3f6zDpKB7JytoMS4VuEw2qJsQNU4WsxfqxeMd29vddgZR9bKKwfjaPwRfk3hZgnP4d",
  "key2": "2kAVSpjBqB1D4bSZCAruHD7aCyiyaRrSX31cUZW6Ckvxus2RPcafXUwLAw6zMuEKL3MTQM7Cno8QFhDFeW3CyswS",
  "key3": "4t4mJ9SJxDXbKKXhzDmmSPfGWQFw2dVzBwSRhShYvWBC8T7yuZKwFJVBQbCELKnpPc9rYp8r6XEdEmgtKdcpCNAa",
  "key4": "5LamYwQbyMVTN7uLAuT9kUktD2gjKG4iyHqCNSSDKLiixvuJxbisT7sK9ZVzQK2stLvhRYQiDNX6tbg7AAEQmqFd",
  "key5": "1rtzUeCPbsesmn6YxsLn77qyQNGAaZba5jF4tZDpsk2XSqqk82zEmnEzELx1WhkP7x7gQk3pjARgkTbscKRofDs",
  "key6": "Ki2wHqqNLszwnCfyRzyXRch1wGA2RcyUtRacRVEhDctENU2cRVksGjgTxob7WTEWZWaXnsukPEuDtrWTM2CM2rk",
  "key7": "4T73shMLKSivARkktcf3rEEWfdiVnU1cokcYcFsSziLsK9AkX38pHt7SPAFsGHs4HV6vLjZNaKhgp2bv1Zzf8Ugw",
  "key8": "XTMzttNArBihCfzLgwMG2TtP1LzQZWGX32dA3kp1xEwCnsZdBXozgfLnSSmUEgWd2YSydLUynQJ8xyzMLPCwuT2",
  "key9": "3Eff1B9EonQg2kHfurqGUR5iCKDcQT3DLVkaLNBxKNrKTx9mYzgo1UNVRcpcsXJk4bKx6eHaWzughtdAugtHPMVu",
  "key10": "49KnESqWWhfM24QMANuEZ2wUM3kaP81zvneh3QHg42fkdq62pwwDw3Tdj8EDqm7nS8sQtFKPLwb6M9nqxSZYidZZ",
  "key11": "4keAmr3YiEstu7rQQpLD3UasLVxQSjJdqjgqbgxppDbAZimxtzfYzqeXVjPxJLSDngbxYZGSUA8m2MmJZT2qRaSb",
  "key12": "66h2tmeYfNQZ2x4FzeBGVurc2hsZxvdZVm92moY5BoJ1k4Bz1ykHcNEjUuNft4Tnrc6CXEpsDP12NZ9pETNXWeib",
  "key13": "4ht3nRT2A7jsYAUno866P2ZJ8NbDb649xEpDSjFKrXmvdVeReCoHsNwsN2DR5kMpW6fNdmbkTDEVBJ4PXkMEJEnF",
  "key14": "5wjk2SVfGjCftArDgKW45tEoVSXiNbyrECorsZ9eF99D8dGQfeHYPki4Dh9iew7USWmAeMBFDnemhDBsH6a3GZXB",
  "key15": "2m5uVBE5f3cPAq4WUCRyMDKLwE768yh8WqGWCYaJHYR4R3xfBWioc35n9onM8umgAoyLeq2Hu8eoPndnhWhd9XU2",
  "key16": "wNmbVfZmeXEubD1QhRf1WcC4yWPwhxoaww654UCJMc4p3q5ywx84baHZPH8wrWmA4CMzxHi47cTrRYjAVvhY5mS",
  "key17": "rvZ9J2h536Q52MB8jrEhZ8QZ3NbE7Lu5P96VyWpjNnN8TMTqmL2FhaT9QqbA9odeLyn29tj5d4RBr6gimbtqC7F",
  "key18": "3J7UdY2w6ngpRFZktgJmcv2zjTSV7dBtVTFgXd3yBV2agyvfbHsjEJwcSjmaEwCegXRAXNd7uDLbGKAXKmqKzu3N",
  "key19": "2EY8X1sc9QqRP81tcBenhhGHiCvPYWdx7mqaNoMwd7JX65jbjTK11JEFmMXuhoQnbZNQvaS3MbXqcRzaA1h2AwX8",
  "key20": "yMAcuqRS3WxNrmqhLKyr3dcF2UyijY3ctdrcrtQuCnrkyfiqRZ9kT6i563X8Rb3BPMmwiJQNmhaNqhovLUvHFoy",
  "key21": "3UXxMWiyoF1w15a1d5yJ42hnNHXTxtJThss8qhvM34qaiQtNJBKFfRrynfzqKSdk4pFhgwnrWrEqJCbE6PptcHx4",
  "key22": "XudB1XP1yLK68W6UoEfvdTdprSQUV2sVzFwrPDNcG6j4TUDVdWCX4Qtd5oFA3hRh9csRKFMejUnSCGuAMeN1GBz",
  "key23": "oduszCUwgzHsDJtSEm6gst7Y2d5nZg7SVtCSvrqpymu5aX52XSqsARXe3zCLybXYzdDmsRV7weBtRpZbLj8tiWw",
  "key24": "5B82uX7SLRp3DCtPEMRn2SAMEAKeMSeP3qynx93waSYwENVBWcrmjURd2oMAbTqE5q8AeMytcNh8tJXbWQwgg5Lu",
  "key25": "2zEufWYP2nN4cPQHwpNt5VwmLV19ymJZL7kHunxSnr6fUw3BtfwVdbMmZy1FYMWNnqweNu4hfo6mSni5ULGNoAiD",
  "key26": "3LLuktYyUtJjvBENR3RPpjxpFHrm7R8pFsZ4WFsrjmXAZHUoTGdM1wvcBQt16rDUhXZmCYhno9eJKWzMCbhurYB3",
  "key27": "4TMccUbBsjtcsdmkqnAgD9yBfh1cVm85JJoMpA8wHcqw8FABqAxhXkjHgktfcLjovBJYJc75WQtgcMKwfJpA6gW2"
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
