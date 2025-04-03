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
    "3JCBzYQ3e3m42ioRJtShERvBEbthM7L54WWr3DUwt5bGRVekbUUyRzQTtsYE8zeTXEtgDGHfmA2AAzRYZLGKutCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gq6MQ7uc3jFLBJ5DVoHKv9ZgNAym2KUjmGj7U2XsenLZkfBRjrsxg943hsyVn3Q2kZUFEAQ62g6bod6vn92fiRN",
  "key1": "2w94U9ohYJAqVXWbsimdnfTDa2cKxwRoNQqCKAxBXnozR2YtD9a55WhAB6TCMnDchqwXRQVrnfkrwp3S9YKCDSPN",
  "key2": "3wLvQEWEQwRzXwL9en929vbQuJNd2ku5LcBTtUzLNAxPoMJMZ5j5qqSzBMuV79JGMr6HWJD3tgzHfEV3CQoTkyaV",
  "key3": "4g2MDyenNYXunrtYJ2EL2g5w74QCmwCHyQBaTQDiQH62UyMmkDfYd7XEWnG4PJ347yLwbDpbaVjehnfE6YgJAbRe",
  "key4": "4uqWVfznYPw7UAUZNb86AR4DorKFUt3tX6dd7wFMrWXTu6rMNFR5GJmJm3cMesBLyLJAKMQ3q34rgiT1JumsXNpM",
  "key5": "3nhHZpzpKiMz27WthfbY63hsi11Wtaeva9ED7CUtuZXSPBfJKDMKmv3pBWorvuMYTeTm9aFTzKzFX6bCJgMgxkvN",
  "key6": "39i3Jma35uxEnPR3C8D97bqdkYS2M1YNv7zRR3y4KcM5APQuCwdYKmuDJ1hHHJf56gj3qCN9jChN6t9rg9Bd1C7J",
  "key7": "4FziFrGYQERkqp2nPB7gWPSXC3SFejQbHBrdntGQRQVJ2y65L69ov6V6JUxrNhyTN6Nod5N3SNxhq6RBhD3DDuM6",
  "key8": "i19ERNjVd6SzK5hRH1UNcCQGzm8fVZkypsHFSWrc3KfUiVamjduYVyfC7shy2rw4FVM4ziNi83Wts96eboiCt24",
  "key9": "4agX5zDYt9CwoG2JyHRxqhFhoQbnpgZ2c5hkiCyGSqS9ndHUuWATLaZ37gEP3DfhfardjQYZgg9LQYGurtsbfS6x",
  "key10": "5geXyjN9cxvknPn6cNey7aRGxYjLTps7ExbD33dZDGL6SL8bFrCX5dJvxVZGzZeS5ejtbEqgZkAzPw5B1dhDR5HV",
  "key11": "2bvFswqGuuG98Kvx5nBkfAXqynjiDXSFQRDyeKjQq8VoKSLrzf9k2DPXzHuo3cnd2oDz4riyj3PSxwwJSwUTBVXE",
  "key12": "gj954fpjSy8pYhATTha8WJXFZoQF6JKLsQXY8ttFTstkmsnAWGeRk5rUCyf5voc22bHShnN6CjLyjRaYrWtZKVC",
  "key13": "3M4XjPfjrjmjL3Jd6N8bc68XshcbhumTgreDZBdXF6AFH2WCz5W2sesCTVadZcnnk9HZQ1dkEZJWkDgtvMiQbead",
  "key14": "5695z1JByU1aWMSCpF73bSP5kgoiewrYw4hsVyFmbYygqiF8U3toGbXH5aBKhqGSfTkVaHduYXiXP8pBiXPWYYxf",
  "key15": "4Hpa7KouaLtnEHkFNPUsjwmymvPN3MgdgYVJc5kD9XWcjnQjuhCfp1YnERASNmK7vmK8N2gYWHax9wRNznSvYxBb",
  "key16": "5MLzbRc8yKrpNNWGfSLRvqjooLbHu1gmhU7JcSME2WRsS6N1bdXPSze5VDcgq4wehda52YSEeda8YDtW6bG9AdKx",
  "key17": "vUqfjvG1jFwfu4WJVwtqaVteCFoc9xPmP1ZiE2qjFZKSYzX94kcxpt6pZQx3XBat6Vb5ca3JdikDGUmVscmH9rN",
  "key18": "VE5ZxYrj4ABHM6Ew3uZPXiMHaY5P9Vm1HTNz4RmraFgTLunPFgf2zY7ZrGomtb87Ea76trFXVQnWxS49HKSJu9c",
  "key19": "2uM9xpEQKqYM8skbTwiM7eSFVd4zjQRGsE4LeaPRQZfXkmJgmVLq81u74rpTMMHrQoDq2xC8TMjvSUPEXNwLtmkB",
  "key20": "5G5SurLHuhah8qL8AXdXt1nJHWPLEh4MHRVWbAEKJnDNWfdy8Xy5k3UspPparmx62JH5UT6hgns72icFYHg74zQa",
  "key21": "5q59KUjYqSYsUfpJjEaUea8fMYS6ZGudJyfkbTYfhMsJqWZBAY2AojAnPKVXxUQ83jP2gTkLwKtXZ3etCTsLVHh8",
  "key22": "4HS32C2dYH5TPP4VWebkE5wTF3ffJVK4GqQoMKQhr1VF3C7LfayhaUu1oqqtkQiCPJt8hxWiZ6DdFf8GP52zWwv5",
  "key23": "46BNdvxHCr8gbLJvpYC1tWdvuvPef4SrwLzPzadHNpa1fAng6uTCPHEEybpPPJ1Z5Xwg9nWM88vpUkxdPj8Ds3b",
  "key24": "ysjq3w9WjrNYbV5wVPphB9MCFHwjK4HBiQjmCXvQMJBwMXP2xFuDPq7zvrVaT68JdKXcRhT8aSbbmepmWqtU9Dy",
  "key25": "5nUmuzwgLx1vik46X7baxT2Bqoa7J2R1TQVyZieNrdbJw5aHZFMCb28tJTaCeor1sQwYjyEyDhp1tqEzAZkDxVfc",
  "key26": "4yRi2PsHSpWX3QYqRkCF2YJAZmRE63kvyWLV3CoEMfxbiKshQ3WwNYHGhmuogwX1zzWwpo5xU38fpDVuXJFppBzd",
  "key27": "xgyukLe7QBtXDYGe29Kw69xyak8qCm9MJEkTMjpifzeXb5wWrSjU9qXSNsdgeyw6APv6SDNmXy7nhchkhPfuCow",
  "key28": "4Yqxd1wqGFVwy8Ds379Qtpe2kvuf8HW4SStp1mBc3Up5okAqGdb3RJp3FuPh9eoZVV4B9SBJUBYGa9mC29xBxR2e",
  "key29": "5CWophCoBYsU7evkuTFJRqf7xFHZVZXdjy2AzAP17xNq6eZ6C97Uh37apodxxcgWpYSpxLLKNn2nRM7niG6wdCu9",
  "key30": "2Fgw2XrHVziYbdGsfBf9YSza5Ht5fGMCyVcoDEEvs6dLchTN6brypnDKJFeJgn39fzP1SwkCArRZJ7Vb4TDcN1Bs",
  "key31": "5NHEuAxRVi9Kr2eGjsYz9E581SWstHByXq9rko2Wx5LhLQB2k4LfDJrV1UgE8JSjxN715XnNK1Bc7yGjnebixkca",
  "key32": "4DDxcddaUnqRoLt33ZYvQ1kVdwKsZxYncvQvQ8wKYAY1vCYW2UtFbBbwNiytX1teEHzraTUbKkyqKhQzVsBamzyW",
  "key33": "5AcAFyziiYYAjgR4HXFEt3MX5popn12VTxJDPFKt1GbFUPdUcwdjUnV7JN1fNPN6p9s7SJx3nCVsKdLWezhbJq2u",
  "key34": "5dE8bqpGXQK5ide8C8yrF9WRpymRArFHphEQt34RWKcyEsgYVYVCHVUfQXe6vDsdFicekCRfm6qfwrwvdJf8MkGB",
  "key35": "AvBvkXKzK3kDuy6ThsnZRBZcaTHC7ueMwMHEvTExBxB749ZMszydiqq1uBXnLzYHpqp11jo3BhQi9Va6ureQvmh",
  "key36": "aKkKq7buH3vPPX3ojVuZLYCXNxu5ymhC6rpEAck5zxQT9122t3GiJVbv3uPDUvRmSvc9MpK4F2Dakpe7Ar2eVfy",
  "key37": "5AYVWAqseZ1boMhpsPFfQAXg6o9orPzKbEHCVy1B5ZasTgmisfsBJv79NGbtsw1Dqq8AVoX92a4nPUTsiZXXa3KH"
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
