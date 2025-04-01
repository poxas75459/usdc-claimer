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
    "3sFy2MTFrz3WWTRK12iKZb7M8PHZmuMS6USQybtbZXVbA4WRy7Xpu3qrt1MAKPdNf5RNitiZdCmGsZ7NiNV4xS8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fcpyfq1BfJZ7aPZvSndFV4DCTBztx16GKRjLwHqHLPwWMLvdhf8YgjhQQQzQZ3u65Sxe7AYyWibR3oj5AFRuo1X",
  "key1": "3aC5a5eYn7bznjLnaH6hqmRdM3F1tR4jx8VvbzEouct3MkRXGe8HQKdiUaJctNCXzjigoUyfcNoSafUSKnfU9JWM",
  "key2": "uQowVe1WTytQyNVotXmKeWeqF2igjfySogk1NzRHrvFVvkr3KzeUwZfBFKRd7RaTdVBZKb6BjsA1F86q6GtCrEF",
  "key3": "3yQCFGdrZzGgwuYjkZxJjULcFhDLTxt6KsSU49tWakfcrastwqmrfjGJf7SvePbaEKduqGTiL97SbQjm78vjPeSp",
  "key4": "3HVtwqt7wpEoYLpdNdi7KJ1ap9mpvXdwX68F2qS2X13dpeaCW26Qct7rxRKHTqSmhT11wC29pG4bTnVjV5uvMj9Z",
  "key5": "2Y8oSfpZ9jydjDYvvHtXRWAkjK8ZSNhvdu3DAciW8yHn2qJzyeXdz8mu2ACM42LfWpDeTZwTXFdEJUjPF5HYniy2",
  "key6": "eBGuwtfY2R4t7JuMDr6KfPJhJeym9uX9DRZevqecof6uhpVkwGC2su4BiDvCynVdSX8oF6kbJiPJSrRrALsG9Aj",
  "key7": "297Wag55XUUS5eMig1q2CdEgwWrTTHC6ajT9yhheJe2dZKshY1fGMQT2ovn6dGjaTQ4aWR2CmZJMV9g3taRq7LqZ",
  "key8": "2GA5nvKkzeqgHrpnT5xcmRWr8zEo7exPZjyoZPT4Faj5fw3GNffe9JwG4fYEXrFguooJ41ovbuPZaaW66SUr1nQY",
  "key9": "2ty8AiaNiWG34MmMyT4VCEaaRzoijtoNMFRBS9dqk7WcdyL962euXN3k2SaS8TQseDQJkrpRnX6YdVkZh3Eidw77",
  "key10": "37HqyXsCzXe8pcFReKgi7RYT6PM5FvYtKeM2Fo7KaGLcjWrfqjhHL1ZJnBXiW2cW4hy2kNa2kDFAJQUxuS4YvNZy",
  "key11": "5oxe6iBzK9sQvXr4pdLxo232gxfWQusDjgVoaDudNEhAtmdHk7YM8c7bjBM7x1Lz8tbxtjtyodUJe7qHnWfbuhUT",
  "key12": "3j8wTRQjvU7YW55fW9Q72UB7BuhgpnTrdTjFxTdfUYaUSc3YiBGRLJnQkeA3veMioxiKkWZSey81Fi9spptQPuZ6",
  "key13": "tHrmPSrjeaqVq53zy5VC4biAbZLoeAUvja8LMdkDpduuecRjn9Y2Yc1AJmVfS3fHHXneTd7q4mWJXbUAgXZh6Er",
  "key14": "y9Uibgu2qYmMcYjRDizszR2z91zUVsQQTdvFaPDDM8usaAhEHVPbFf9fy2igpMr5NR2XoYVw4DkTcWLebtAEojK",
  "key15": "u1nHFRxLt1Xr8GD62saBP5ZPNog6xZ3nC9vPyYCzCYT5ntwsS7oqu6hnLbZyFXVsJxv1b3Ru1dYVCu68RZwfAmG",
  "key16": "3kB5YcbxbYmKDds83KMppT2jtcZuTc4RQia1iQHSo6o8rdtAtUGzReJoHNuCtDpZzCBc4Upzcy6xpba5HjoPgmad",
  "key17": "wapAsp8Fmz25h9s8rGqiDdzPhtGoK3nGReap4WcMVtcC142f4xnbRzRBAD8bEeXdAHK6bpiC6aFYjC4A6LzEu3q",
  "key18": "2MWSU7cnzzpu3RHh7uUAHXierMkx5DccuyqcQjviRMfQMpCqqVc2ATjz7R6KEPYXpcq4Bbewn9HWmwGuEN57hLzP",
  "key19": "3jSCjYXt4cTX7QcMsAvsau8zwtdhN9peorNC7UkV7XFuG6DrTuMspJm1BnSkhKZtJZGeG8TKQGpnNxWpzZDZ6gan",
  "key20": "4qUrW9vYcw95w7n1xkNixLv9336zV9ncQEUjsAxE9rBi3NDZwvW15sftBJHJybEqEyf8bxwdrT5WvkreJudyH7g5",
  "key21": "2yyrSKUHmBJhoSLiZ5qcveNcKKZU36AthRCxKDjX9bziKnK2hTh4gx9KYuKGn7SaD994SqDdAuv5ptF25dAPtdJe",
  "key22": "5J8Cd9c5qAr7UTKFrQNtMJDkdpVt6sMwe8MRHrCxwk136X8GU7ATC4ukn1VinAogN4TyEVUksonEuo2xxfNTQjqu",
  "key23": "9zjTe8U3H9jnSThW1nVhCWvYPn9gGbZqNLkZRRz6HZnfakZKHdXJG4bo8MZHdFNbbb6rrvhJ1h7SChrAzJmg3iN",
  "key24": "5TVfz4PLPNQ6URRFrh2tA2hFvM2LrZJRhn1K3M66Z51AaMYSDxvUHbxsDw7Lbng7wfo97d6JfF25eYwT4wVPqXNP"
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
