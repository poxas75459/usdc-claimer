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
    "4UqRbfFm4G436EGtxHK51hdnAztJx5rLtaaT78VcuBTxmYSUSYB9Bv98fVwg4pW73q4fNdAigeqwnu2pe9D2E6cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCmnWbMBxuXYp3aCQyp2rf2NyB1H4L7sJNTNYUd3xjjFF3CVKQoit5QcEDwsmsLahFAqdMar614PbwHx5FzwKW5",
  "key1": "ix7BohEMhccbjZzfdgTEMu9aVUPWPPwFBuQD9A6x1S3jHMwatpat4bzP5sZeVWE4r1jNhNRC7X2Cf6xutocVLe2",
  "key2": "45v3BBdidMumvbKb2K6WX3ekaikHW2P3Rob6Lj3wT8KcedPYeidiSyYKLa8V23GhAxZkbnsaR9nt6gN6KByngoe",
  "key3": "4FzVj7skTw9J86NvnExc8pmZepfweNJ7ycuFYeyEDBWCc8bXQqhBhsRVta5vKGfnoSag7z54YQFa46NKbwwzuxGe",
  "key4": "2RdB4YxXwaShQqPCttrZ5D7tPr9YDDue4beLbgkFxuzSESuXEuiqM9yqnYUE2JZhLFpzoGcLRq3eo1EZ6RaQ1zC3",
  "key5": "4CyMpQNZevfPdiGWQkBFngVKM78GSo3eQFV53DJZ8wSmiH3Ee2JJQxNhVbH5SWPk648v3qSW3zB7b8nxm5YYD2jy",
  "key6": "5fSut5sdKstFMLejPnatyjzfWnBV5HW9zas7bbTQ34Wuf38cM5fVkFGxTTiZFxe7cQzrfkUC5czThPSMRqdf9APA",
  "key7": "379CUiRpr8E7bpthREPZpuHGCTJuayf267ZnA6JsFezuaCKRd96B7wQsUPN4z1y71asT3Vw98dWNiEjtbEtNBWQP",
  "key8": "4t31xVR1UAfTChfXuScaRvcHEJkgDgZnyhUNBeZHHJdJMQPa2XkiwJtNt7723sYE57vbkQm1HzGrBt9oNXRh8HYw",
  "key9": "4EbqmrUH5jntRX9Qs6upWd5NZfPrUZiN6aEoQSLk2fMaGPJyEScbp2HiaSLzBAp6gaMci2XXR1zAv7e3XasfKhuX",
  "key10": "jeKDquHwz7Kvyz5FLwqJ1efVfUixrKVFWzzJZsrFVBSGcsNUBY5pZsEYZHMrmQSPtbaVvWny2PS2onhQ1t9V7d5",
  "key11": "4M6dvBFP4zy5kwdco6CuH6kMNMQjbLdZTGq3DKC6bywpv3pkjz44AgsjweJLpLGHeLb32ex2AHCwLiDkirGbboEi",
  "key12": "5bXXoGtY9KCrN6MWV5PUca9kqTPGnHa5rXZYBV6djeNtNhM4k5WCJmc9ZLdRCEevtGxnFtUviwEztNUZEsiY6yG9",
  "key13": "34M42rVayUmkw9maiFYTvnUkANaer4LDqzxV6ahYjq2xNXQTwpUSTMY5TeywizAZDoKzskdTnRYzSgXHoMQLmnoF",
  "key14": "j2ygQYUjVNYcCTEs6MFrhMtjr1wegqy2iETve38MiqZvmuttp6GvvneJ7evuZRZNSXBZfhUSecQ9FqB7pn7gD6k",
  "key15": "4thKJcjQ4sLZ6unKZ4v1qwVcsATkUcSuq1BWXLB1f3uUPqcxWzYfa1AaA5tapH6p2AUT87PuUywNjF8cigBBpoZq",
  "key16": "4ZQf4UsxsLXhXGk2Ns7qKFo9eVw8oUnZ3UZ6VLhTafT5pSBGeJPeLuPRyLQM6ZLiYE9TV2rWMaykyCXUcpqzydSf",
  "key17": "Nfo4AVFDGhk4hYUXkgfry5UgZYwtiTPpSMMkf66yvHoGjCvhbJUHKsMMLC6fAtWreVRLEy6Uodv9DDuqWYqkeSo",
  "key18": "3wtiRojearGcLcj945TV7VT5wmCWanBUWG8oKAKHYEqdq9xScFJH6AgFchExYY8Z9ZzHKHojBdBF2ziekd573cBv",
  "key19": "23tkustAeeoLU4sevEMHpwQkQqjDoYSyCKsjsY6EQe8spaKhVUNh39FSGUUMzxWhH5QrPGncPh7ZFY5XKqovFzk7",
  "key20": "5RbVKErTCKutGTuFZJANJGqAaVvvTEWT5CJFhZqxcvxV8eEABYaJ5Mgx8WgermWW2NWLcPnTuHtQjbf76L7xePHr",
  "key21": "AD3NMRmwd5pTEEE7zprHuFcXmy84Ybkt33KYAXKTv5qgJoRrxhadz5Z1HLqinKbgp4U15aii7jMhn681AKTYf7S",
  "key22": "2D1Ks9t286sgBgggEvRCLxQQ8fG35CYBNtV7YtFLvooBWPxEVREL5jVXNaAr6o3taGP7N9j3x3Nx2J3nM3ZNf76v",
  "key23": "3YETQi7PM4unBbgT4wiaFgRtFVZPR8VUfxAhVKEntYUnDyUotXq8gjZMpXSr3t6dgMR8uuGY9PqPjpY3qzjCBAjQ",
  "key24": "2PRXUg1RbtofYRcuSUpinQHhbZXtVYGaZ18jc7EcJ4cgEaUPGKbNLrBLfSh4nUHHSQrwmvmXyt5kwii31V8pfrK4",
  "key25": "3vKJW5p7bTrfquFGU7Q7R8DUTKVHcrFJcF236NPWN11LToT6dqV3MjqeDrCc8HYZyTJaAn7PA6Jxo8zX139rA7jP",
  "key26": "3fBsQyFt5eP8ZQaLTsNo3Jmq8vEx759HQBNYFvyiQCSoVgeigxP3CMZZViA2J7sjERk4axJKWnJzNXsnWQd9fHrX",
  "key27": "4Ey2yDyt3zm2kUEi3HhEaQuhpxeSiG31fNsu4Qqv7r5w7ajW5BFNUNxVtSXENZmCNu6oPu92oAsK9DH7TDzRoHT8",
  "key28": "43bxcfhtYRyynyTWZBG3BcCymTgih3tE4HLBQ6RMhZxmoQhA7kW7ByV2J1mcisd8dQFL42owJegPWfSFEzjSrQsk",
  "key29": "2ZitPQjtCKjQAAHhVD9DdF41DYCB3ZSTGfLprU7Vy9NgvBFbQhFxgiMzcJMorK7V6FdT5xtDCFiuWiJTs1pMWNXC",
  "key30": "5YqgsJ7cFiBfVanJRhpJQDqrLzAUiDZHQJrKmgwPAUjm8jEoShCT8FqDVXkuyesPTmjA74RCYKaCKesMszmUiSdM",
  "key31": "26xtAwbxtHFsgabk7ZLVoRdSYCcMGpdJ1PvLmnRxjthd7ktdKeYCXsyK748NyRJx6Fhr5UUj8qZsVGntVNmogZ9f"
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
