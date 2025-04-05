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
    "4wRNvJN2bjZFzuw39DpUjKbivJVTZhM9HgbtFsrBsCLC1YZ1R28639866r3GcUTujaU86yqAJucnsrH66JE3RWsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVzircis8iEPyQyDMnzgRK7WNSLQJUEic7iWtFYcRG6wsdEKfpAaoLTvaUJZZmDtMHFokSX2eeeLF4TCb5Y6Evg",
  "key1": "2dbrGX7yq4AhicYuaqCGreoPNY726QSrXAoNt1QzHKwjqQcRNyW46c5DrRUW6U72abQCWFJbyiQBcWNbohBxBfAE",
  "key2": "2VfjznZgZDs3gsQfwymLH3xLfVPhM8mPdvxYDQ6KHwXjySaeG7KXtA62mg64cFeKJWrbbcojC3w4fDJTP1hGBQyi",
  "key3": "634N2iMKvUtN1pDLuz91iwkhWLj3yxNUX6Xbj6zdEYdW5S2ai8EWRq4esMHRvQhQzNLsvBwHihK2RrwMJZTDpLhW",
  "key4": "3H7MAXe7BrtCjGWLBZW8FjUA8W91CKKMEJprFKqhEvyKPC2Fg85GAw3UhP7QyBxTidF5h6L2SgYRMq6yMnB83E8Y",
  "key5": "5wsSgUTxHdc9kwXkhtRyfn9NYYYUa1QbycU2WTed9UG2opDcCrZRsM17ngiz5XwjuMPayrcaMaGXLxbRoq3sF4Zn",
  "key6": "5mCGs2kjLDGCSfpxRRgb3h1gT3HFFo3zZyTPpq2Pf4nr2uyU3ff2wu7Xh4eEdfffDQdyo7q6UU9WXx7Mz4PM9zc3",
  "key7": "5vzBebn5pCrHNWYspgxxjipE7VrSNjxkmWW93LdRBwijw3datDWTBUXj41CasC2cRE5iw2Jac2QZ4433rm469Pt",
  "key8": "2fbchkVZDckZCBmj8arj21GkkFDQKoDKMEiQJscE1sgCJYQMwEcnat5DAbDrM668NSxJ1cDLFnwHFPhddYtD1XzN",
  "key9": "2b2Rzh8EKZYPDt6VRcMnwzbP5VWiCpYEwudeqUWCAGt2js7bRP7VDZtc3HnfrzUrDYzZLnameEuGpxMoCn4CziLq",
  "key10": "2WRWnhrmRdDGUiCyRZnejDjCBFDw1wo91TbcH4xPcPKNtEhN14d1TxSo3MyXicR89GARp4pDkPXEmWGXXWwrgbuv",
  "key11": "2jiGMigH1J22SsGhFhX5JQVm2eVtLG13NTTvUgEz7ENruR4Xg3aqDuzddZo5gYRVyGjWsrHbVtBbRYTzUewhMKbo",
  "key12": "3ExCv7jTu8NmMvSj6PW5H8oPpmvPdC4nug6u9N9ZpJB4NiyXyt8oaiaJ8GHs7UjtjeWpgXKopvSLAxQGQqjyqmTx",
  "key13": "4KojonUV6F9DXZ5W2kesnvZ5xHJX2DGEDsSQVabHN5bNo832XuvMNbB12kfKQBkJZJfWihJ4umPyK8wYRQsWm6kq",
  "key14": "5woaPpCEs3GaGC89oy6jW8NwLrTCz4QxSHfYDuYagu5vsuEh6y4irCFwz42hDDUtPsTsGBeQXFpkqzc1oEm33PpB",
  "key15": "4aYZtobgrbkr3sZa3sZ1Jma4oKpVBjwbZhbVa3EwQzoPq8fn17Mnf7tUuSZuogJ6MyQ5Y5ErsSaWRyMMtfWZieHT",
  "key16": "64GuFYUASwe2GWwZoZkobCEGphwDv8F4rTvYLkLAAazuHDPkvJpF99HNZTh2f8TqVStqXR2gECG2vc4Y1LgoLHTZ",
  "key17": "5KNLbb1WT2HZNVMNzStP7fnnGSs1mYL7Hhb2uNsP599daYpKpCVb7HZFMbMEfgVQGhMfHwVxTh6Qye2DftebkTDa",
  "key18": "3RBtZkPhNbzFkoeR2FuuUKtaeRJqsiyCU6PeL3mHUSHVndfsUY6S5fDw9LmiMGScZCwepE46eFLJi9iiTzbCJvRR",
  "key19": "3nU3eK1s9WCysDTqNJz16cMzHh7AYAX46UHENzTgcVZGZvAxdAZY2AiUcz8qX5vt9wR8Bikwmtho3BjAZwD8ttpr",
  "key20": "2CiR12S5MzE68AohhPNoRpKzJMBa1nYb5ogRMD9aTqD45kXGbj93qWAkKG6xVrjWDgQoUEyQdMs3SpaYu34uE2qS",
  "key21": "3aw38AMbNVHwgvJPK72absoJzJgBzoQecxAFF5eCQd6PbsKWanNBMNurgXLouSJbkV78MAC7c9hhTD7pmyqGhEZy",
  "key22": "3d3cWhE4Eu5rqjKAzjr7SRoMm1jcd9P3GTvf2fDXYLHMyGhDFr35ZodfcrGCT9LUFJcwuWaqVGDJMGwfuNio4C4w",
  "key23": "6A8f4fGZUdhxqyLx3HmuxnVZETr1iWZbETWpzVmyiexNF6ayRwMiZ9hzKCB8xxujSWKaQA3K3jjfWrV5eadW1iM",
  "key24": "21hZMsMRem5QXPjPV4v8wy3YdyrP3of7YkGjaeWUVCPQJn8S9rmiG2ms52hQQR1BfGeh6ukpN5YBzhdvP2aQSngT",
  "key25": "7EsUr7t4UTEKyEorSWWPEqneTgf8WnJQsYnDjgs6miBxFnceywtheX91i68bBEHc4rUDQJQSgkLziHA3sDhwQRV",
  "key26": "3ryKBdpR78xr8SEXgCrXbVGDmHUEswm6V2k6TJzg7Fi4Rtaq89XHzroBrKQNf3J6sV13RHP6zvNVynMCKYuLYMLX",
  "key27": "54nBYF7rEudpTYRnnxkWQW3TWGHXGxaQSAiNNQnB27iEXQqEHdLLnQtjQCyBdZip9VPa5M3LwHHJ1XdY2zYDVsrJ",
  "key28": "Vmg5wXK9LQFSAkKu7RWqDxKBQSACGdukYnw2Xf2BnvBzEKkEh2kz1Nt2MpSQyPGbEJqsZi5NqSEseirrETaBXPw",
  "key29": "415ndwxAoq9XvwNrLaRHMDkV6J6AuuHePP7yQnnhSBmUE7Cn9GQyThKFEtmRAi1vhogFzBTny1x9NXfPfdMfTc4b",
  "key30": "4i6xPv7adureUFGfokRQsVNuG5u839jE9gRoRLQWeSAgbKyev2cW2nRpiDwEhG8z6is343vk1QJ6aRhLESqKSGZG",
  "key31": "LwFWmJe2VrXyhQYJf6q5gHmqU7ta9zQdtLweetKtdknZDjkKNL7ohF2Cg1WVZUsSv71LFJm5kVyr4hUjNmdjStM",
  "key32": "3HGibB2M9KWepVZFDXasyWMFBWES9tWw4QF64ySDrvA8q7S9ZyE1jKcWZF7WRps4V6KuptKD4mvEUXQnhqPaKhXZ",
  "key33": "3aeAYaQsTijKeTBwnWoKzbtG1CD3ed6sNWxiANb2tM6nyqvneLKCrif3eQw9aipPddGj1LudyboFSFTpNvDkX4uJ"
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
