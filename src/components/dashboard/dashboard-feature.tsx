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
    "373ApLCLD2hL13rdUSjPk26id5eE7NvqDNtPXmUPk6ur7hdvz2WZGBZrjQYknd1PzseP1jTj8h8kFX8f89TbR49F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNNqP9XxfJcxZeoch4RnWLogVpMCLtEP3fAprzsTh8aAudptFN9S9vYB2msWf8e5BorhcBym7gYCpXmjwCVUyhE",
  "key1": "2eVtAgBet5iFGRNVbiNmaBTM7KqFPvgukLp23APQLpgJM7sSKAkcvUuNUGKyZRySrGkpD1Fk6pfCyxqt1wxhDMn",
  "key2": "3XzJKRWmd5ozRi17LwuBUncJXHWNyg2853WKb6MN1TbYCws5KvbAY2nMsnJYpEN3ysYnSSLJQHXmQzATSmRey2YF",
  "key3": "41i9M4n7xSrkX48tS6HQ8LLv8wRmVCGEvqsrzPsPkYwP3LUnnxq473UriAQGyvtZsqMorNcTyq6ZGQw8YXjUT3mg",
  "key4": "4xYeu5EmpgmXp4xpLeeXX9NnmrrGG1z3ASan4KvdJDn589eawQbFdgKZt57UsRWhdhQyRxxcutrv6xyUdCMkLGEZ",
  "key5": "3MbE1Bjtm1hsWZchSVKXzx5D4rPivxWA5CJEyjK4dxTaQPh9ZwFLLHNW23X4TmT9v6qrLCBYRvJQekmD1DxRWPgf",
  "key6": "64oMbYgBmTo2tJNzmQq5Wfs1NRv3SYCRCfuuKn77re9CmnbPt57he3B1kibuim3CJCbdVgtXvJNNHNk5K1t1Nuci",
  "key7": "2qsakTMUrmDdUUVSLboRdvGzfHvY94vZvFUgTUaNiybKsHF9EuKYzyrA3W2F4VgsFxCkDeUPTUYmqYVZP2cEYzZQ",
  "key8": "2Uq3TTeusKecrpZQz3xizKBABwMQMTfs2aT52daYFH5xCAvVCaCVem29Yzib71CfnqrQRpiR4GiMqt31tP6sPbDw",
  "key9": "4hWc55fECdU12fpsk8ieGDXRokQgQNtP65RmEUhG3DSHo3oJozCdMNPbBpxURcTKEARg8RdHsbxZkwfid74h7Ve2",
  "key10": "4QW3tP1ULLNDGUeyte6AfFP2brKXvWUJeNv9ZNDfi1sT3HLWT5vve8HuLh3r61rVx5ZbquvF8uYdAV5NyLA9XuyM",
  "key11": "wKZPLfpHd8StEhd9syeMtRbYrEQnHUJKbivRUsyfmHd2BbjZpiBmup9UwKwCv73y6CCzzyxqUZEmBqtXxFLq9ff",
  "key12": "5KD13QALnC7EY7tWHcSyW6midB3cSGPhrz4BjPLpBS5hTL5nh6wBCGiUbHg5jd3ypMrDLn7o7YiGoTqFuZzRQbUT",
  "key13": "3JwzZDYnTQhR82yxA7KzkY9oXCKSq2TqN8kCUnYveWn42cJksbbJacX5mVazpAhcw2sHoGMWgT24rFztKSsvdxvV",
  "key14": "5X75xu9hVjhNvyvfbDtfjqoSTwM9bzXbueabfte1BUFWqoDWWniJtGAQzhnRAmCi9e6UXbntNVt4HUDYEZQbacvd",
  "key15": "4yVmX7ha6bECF7XepZRKLpgvgGj3467jdSM6jwcvKpNUsKucESv6ntuUB6aJ8dsBm56zuTEeVbCvxqMpqMcYELuG",
  "key16": "4dzHdBDBXsFSV6JLadMq9Mf8Aa6GKJYhZMP25mP1URNrn3bn5SbPsqhcSLsuxL5ELHhZiTpSmKvBxGCFk9kxYQYq",
  "key17": "3XecBKpJZM4CqcbGxwKwk1ehFzAPgJRFNrGSGVZLDV3bfMWMy5SaXAXA2J5A3KER6TRGpK8XsGiNK2fhe1p5ir1z",
  "key18": "3qsPxZgEWjSf2xKYxYksShvajYTeXHUar31DXcnJooGMXxNR7aYNu9UDPHWRsF7NN2PevcZi2yZsCjgMjjoWcnsg",
  "key19": "o6hEjcA28KqTjunHmv2Cc1HfkNhn1K3DDzueTn6HZDkBnAy37yQhRwpBvjen91i44gSdxqzRDh277vcWPEpwXX3",
  "key20": "5whoBFSBsuMvKRjbLXurycqEVV3JnJqRLiKnh6MhCLZWkVWgCa3wH9LGEFPWByynJt6Ubcvji39vwi2uia3BTTVG",
  "key21": "3vqkdPNzBEdkbq1aVWYbi9quwcpALGMq17spzsSuf7QzYDsv3DNykmdeLP6kBy2VRZHzr64wdoppmks1gF6pwhnL",
  "key22": "2nFGVrijeLBNaz9NHwg64mcHmzqhPzBcq4C5wVMa29oeJ5ZpxJLVgFhF7wRCJfBeSeq9ZKxhrSfAS8ARSzsQdnai",
  "key23": "2L5vQioDKrKz1T157DyNWrM2DXcc9MC1LLZ8jr9RC51c32QcKSgeuUnF7Mb4PpfRpeGrBDZQn28jqWLaJqoCUyXJ",
  "key24": "22h4W2EJrBwryUG8XhrWprH37VY4UFwUudGSr98tVDWBaAmcjaZLcjF5QkicEy3pbAEjUfQcpggqf1cs3qjDZhHu",
  "key25": "65jzdqGRqrJyhXAfGershr4a4gLuK96dQc64acbjyuywbtSG7q6gPMmenGvtPUZM6acYU49b5UxFYZGvSY8n4fgE",
  "key26": "4eCyqtNhem65hwc9vYXimMZAjxhNAHrdv4pKDm7pbEHnLdyvpZGSBtzDNw7FpBpgT97JxGBgGyjwtQRRfMpJiKmC",
  "key27": "2hN5sKzbS4iMj6yqJqujJcG9jZm9bDJbrGNiHr8KEiXEXAHejHNWDgEygnAATMKpWKtP2RzrqyvQkA6rJeqJtivc",
  "key28": "35RTF84Az2efwV9Q3oApUXM4VxZkD4HrLJwYA4YKJ21gaNDbmfzYMdHeG5cZJSgJ4cxTZq2L5fJgG6R1V4doGuGR",
  "key29": "2Q8t8vfiyQg9t4fighiNPsuwKVoCdJ5uLnyauVx3gQYGdVGU5SZH3VTdmGLrKgM4oUKLzM8dcuKgn1C7HjoH14AK"
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
