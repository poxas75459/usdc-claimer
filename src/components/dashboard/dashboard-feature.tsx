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
    "42j2ptdCCF26pfsVnzE9Q3WgAFNUJyUnyvsQVpk5A2aEgjAovDqsMn4S4RNm89tHUZzdbEUpTtkkcmGD7K33CXCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WqP7126x6gvoXrDTh6k2bbaA8JKKkAYE6H3ncccGtzJv5QSS9HmqK2CSxTdNDb7JMEs8YT5J58d1EexShqk7qga",
  "key1": "Lq2a3hWQm81dDJYFU8at7Bq6Z9YMUhp1r9r4otAbdKLfQhCGpB8t7v4fYo1YqngPWEdEF6LBD1r7ZfEq27qB7Az",
  "key2": "bKgDQSCmcgjGe1uiTjZnaCR74QpaJeCa4Lz2XT5m86tS6DL1SXBxWSr1bhDGrEArZwNoWZiJUyxRFxZNRaHWYq3",
  "key3": "4UBy93biD4v6jEiDP5L137Uj47qSySox4fzqeAer8BnU4o9a7txc4qheCEhXEcKUPv5Szr1LhoxtYieNLXzLMHbC",
  "key4": "EYACgM35ieeqyRxrdbZPF4KS7SNE8m7SL3JP79JV9GHfWD17dJ2VTQPZBHyRqfQxfSencksFmtNY6NnafzQLFc7",
  "key5": "2vpGn1wv3bCVKJrNw5aeGhLW4WL1P5JoD4Zx2mFnGi4gfD2t1WuDm2d8JgjC3PGPgTxpmA6RcQK4XcCSGoyEjovR",
  "key6": "5dTSeUMcbjoUNRsZJ4WFxYSmjhBNqq9ZBhFLZQhHA8aWVvVN81jX19fyABKsMUeSyDbHdQeuX7QEVwHMgBwkVayJ",
  "key7": "5bVA8hqGcZU67P2NqC5EEgiPumKWqSRQV4fvTnHX44NEyUEaDxm5BxfE6PmTQkuvsoYFBDiASET6yskgjhfqk1sV",
  "key8": "5CZF7oCUY559WXM3As7SWWTJF4MXKceXRbHsfkVHSV8mWoe6eHe2daqA5mrmwFuhxF3jCcnjG6dw2PbFNLrjT5FZ",
  "key9": "2ksDtrhRyJzTtUXdqtzW5Mosud8TrjFMDQjJiRaQAxeSb5ceJ7e5XM75DbxGHqqcjZ6Q8crzTKqge4iRvgCzfysJ",
  "key10": "2s6NkB4PMUUx4akNoCmHFfjfKkFC5MdQvvRWWVXV44KcxSP9qMmBmQuGJ5NjqtAoh98VEnr7xjEPTCv6ZribENrF",
  "key11": "Qi77Dj9Th6iVJDjoGYnrjCow6JPAMKvwoDgMnLZ9Kpxe9Cn8CEkp4UHcrm8ea1T13SSgRGsNwLWMRL7fLyGNPy8",
  "key12": "4LzcFTBiR1VMiacAeDrNJxCYqC2tKuoyTzZcWVhn6nAYB1LMyqTTJGMDoEu3H38QrpbK754Xcj61qCb9gnopWgNm",
  "key13": "4Lm4Rx7ghhvHaQJ1r7y9CjRD4JqtNFEv5T2jfdgRT6R4AVEF9vGRUSmRPJ5mpZp4ebQ1PQbLhRmj6uPhSDtNNXkL",
  "key14": "5vaNgV7ryKY7oXWiPsCJz831L4QotfxKjsDyZjevQL9uuqhoMe6kyFdXm9hr2pLJR9JbwaqdarYwWMW7DjJc6d5V",
  "key15": "5qvWJjH8HSrUH3apEvbTFhQn7ozkFbyLzFgLiXmEPhdtJKbr9C8ivNitF8fG79wpMfixXf99PnLK2RNEVTwSHynp",
  "key16": "2AHmzkAfX5Zp3SS8TJi9vCxVKLP8sxTR4679yyVzxxkivY5JayV7u7JZTrLhUHhvRLm5Y63xgjja3s4guSBUUeWg",
  "key17": "2WfMtPxbxuwBuK4LkQemndGpdNLWmaq6E6Un9BpPDVxRjzx89xEktazT1AgXwTqsWgTD424PcGaeGB1D78cP5JXf",
  "key18": "5eNaxJfruB58JHgMioSDroRX89pmuQt8tNkrL8XC3cCPoa5FHgxw9d4zELQPciK9yaJs4m4PAbfcDXehFLg4Th5F",
  "key19": "5h6Uis1Gb8LxxrN2Av7tSHLRnMQtVKKxkyZRKkMffe8nqDpjgyV9bYz1QtTLn3onf6XP52p3PUCvz7RMAHC8MScc",
  "key20": "4bWFJxBx6k5LhpHcL4pHZPy1BtieunkmimcLUnZug5r1zVx9iZBrFFrYJtQ6s9V6u83yBdo34MiZG62syqFzhH9i",
  "key21": "2fc2RP9dMr6ZJiRN3VgmwrZGWCcg8ScYwhPj7my8uDNV1vUadwVL1zszekJPqT9AgHc6zxCheDWLsMsh61RL5DiF",
  "key22": "5aE6bsYtFmMrVhPbwzSfgLa2oqARgByr2xBMZ6QXpqjKUMe1eGEqfMK5EXuCXRt68d1hZ33UZoAF6SNUVc95v8e3",
  "key23": "98xgWYUgoFYqyeEVvv6JGNwqJxffQJcCdPdzKvofUGmcmDriLxeEJYbzjLgYDo4hJZEEjAjakYLMPQ9gh3uPJYP",
  "key24": "afdH8SJTr7XpC5dyND4UUPUdy4SEAtopzjUaWteYu5HAC2BSMeLfv9TqWjd14vYa1fspKCapfWnwtN1T4C5Kwu4",
  "key25": "HJdsNMPecksBTyqZ5UpwkN3gPAYQUwHWRNCRYEReacov9j61tj1E6LUpv1XbpRByZMG91Fu2udinXGtZXZw5cWi",
  "key26": "5qGpGPNBvxv8gBWNzV4nokuSzndhZPkJ6PcZY8YFxpp38TwRF2fmYZEqNBF9ocvXbqc5PQhMa8rqufYqgp73xxEZ",
  "key27": "5z4Z6giYT8qDzYHv4nD6RNrH998UaDUfm58Xanzn9nbJtjmXUuCB9zG4gCzYfB8wgq4gSsRKSfPMbfEZwCnRDAzx"
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
