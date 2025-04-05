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
    "3RuXqmvpUXHkgFfawYpRXBpr2fzhEvVhbbCRUVxEWbR3MwT9H8GdGgCaEhqa5xY9EXZTnKq3D89D9yMYaaT1dDKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sjUNN3anEe7FPHqg6eVMeNFwqHLeBYFAABCEVxXvT7BjVXc18vSduWCL2zmMb8LYgPdWX7YVFK1MnavLqW5QH3",
  "key1": "52rYtNLX4suX7etjqkUEsxTMauyfmtQ7kYXYpk9XwJDeu52qYF3cmKuCfgDJri94eGdZrqBudJBt7kaUNvQsMJDx",
  "key2": "2JkbAXqT4QSPjR7VPcixnx9siAGMXfMV1V1ZdWzmTg1gYcyw5pexcQqiNhi6T7QEZxiCj8HBEV4VYWmSVs3xP4Wc",
  "key3": "2GxX6iCdSfKonaNszcUZmrrRGGCK2Q1VPqAkhFNckuCauf9EEojhe4W3hKxj29utCqNDbaCfqB3DFAC9D5us7Lb1",
  "key4": "3sq82jEoGGo9sqWXnVRD8J2EmXM1BiMn7Z4w6pzd2j1PCUwYNAidZxg441MyM44A9MRXuNBWqK89Hz7DbwH5u9wZ",
  "key5": "2zbroae2QJ4uxDFhFv2iHw2qfoEqc3Pd3ibM8cxp88pmQznUyFH7qaHGGBVXnpMQBucG6opRQhu9bD8xYsbHgStA",
  "key6": "4ZkSdxNSung5ZZJ5sgwaJqki5hRArN8hmFa1TkufUieYfrmSpACydCopuJSAcAKGNDfQnA24ZyZVapphfnEQ9Buc",
  "key7": "5tF7ZUvXwWoPf1fEmq2518WzptoUFUFkDo3iTfPSdZXmeGRGCmK9A9D2z5VC2vd6E1eYRQG7eqndjCUFYRfL6HwP",
  "key8": "7jFWS8aKTcG7HjAA3uzyPYYhMDfubnbCxg1Hv13SZd2zft5WJXr6eNPtByQfoDCUR9xxi3osUrGwEA2dgz7tNXb",
  "key9": "35LYKAngRJbR28peD8n4GjJFsxftW8BDTSJDr8T2BwtfyZ1xJGH91QfvSeYa7zvYJvygMHYaqVE5myQ8xvuDPqQ1",
  "key10": "4U5G38A8RL6eeWfxKyt5CLFyRZC5dsLJH1iEkm6LzbkshRcwfPE9328aQKEMoLGJDFPN7tu4sDyoqDf33vh4iALg",
  "key11": "4CqfezywyAcF5P4aXndPTgPBbUh4jBcaeTtSwqB1rF1gGCWV6EVmAcwryxvphaEH9YXmyyBGpE9bC3rEDGDPjDWE",
  "key12": "5FczwCdc4NQ8A93Us7HVDSdadUKLjf3q2BrC3PXvyFRASpEZX445JoJ97fsEbSURnFuZcVHxX1RiXh89SxNDf835",
  "key13": "37pVRX6P9HEif3kVykhcqUUiwpVJWKvpj3u9YtUEZLG3xHAEDpkCQuxp2z3N4cyhu9YoKfxb3FYMFhrm2qknixaU",
  "key14": "3wZfnKmK4866jGsQ8N2wu7SQchfeBg6mEJNpDJEQeGL6XqQBrCWNMA1VvdiUcsPPppC7skP4j9Mneu1MUgYiRkR1",
  "key15": "33x7gb8x7JD7Qk1sV6jN6DuoMFZcRQU1ksmAqFbhjczFPFTfpmw6CjvtH931Y437osPawBZWS1FzGQUEb12HTCxk",
  "key16": "3KAajLLoQxQ2Cc4j9XvGB5ub7k81rRocf6PrfgxwPFyghnRbYEpjfHAhhjVwfJdD7F8eqfbBZH1cQf9Ks9FaKrEx",
  "key17": "3h8dYkP9A7pFbD8eSwsW36RY8NUAwYYfNY7GWtQFH1oqp3fkEf5xipxn7Y4xHpaVpy7X8mzW71CuPsatKmz77Art",
  "key18": "5FMQi1p2t9adQVRDz45965tagJvSziXobjXSBCimvtaVf3U9BCjZFCrVM7jDwd3YS5UDaKHewHjutTkXd5q77SFy",
  "key19": "4CDcAaW2vZRR5LHdqatLWCG8Ez1UYQgcdG86e9sCPzt6WmVe6L22uDgvPyHQfjn4iN5N4Nbag4YQWsTGJs3U4DMR",
  "key20": "ZA7HMU5UPXVCtaGepJK1kvC8H2ij4wxYtgJ7UfH7hqsJd2TViHyx3BmLwAueadXEnVXaPey95tKJDTWJKwTu41X",
  "key21": "KQCG46adS7Vu2u2YJhXzazsJZnREV9f4wmeboAp37jGCRjvR64L9uj92GhDwkXwvjsipSgwQh3axfcSJYy6Zedt",
  "key22": "3BRMASDtgCZfZJsaQBCEoWAsMnCjRjeGsx9BtSwwFwEhX4LgCUxh5C6K49nciZzdm9KvgRAVpqndcyHg6VA7MK9",
  "key23": "336BQzf8rNgCDowRvrGNKgu7Kk85aEPXoreFv9nEGZZtZysqVaXQD8iv6QhGth58Xy595AL1dV4a3AVq7Mc8NpDj",
  "key24": "4kMvBjy2WU7wLvHgMWzxjod1ZQCwz6h62QS3k8Q77Fhe689nP48cmVhsdBFLSJgVzyri1yzD9PGbffLFEbSeVBxu",
  "key25": "4x9ZF4g4ohpC33MsNwRTMXPfvF91CH2xYptsxHBiWqgSMEqiWsfFp5FTXZUWzFmV1W2HMExHCGixscFTRV6PfwB8",
  "key26": "2thdPNADVSGrXvD5C2W65LVVZWCXdeYrTss99Pwwv9vUdzYj8sFV3dcZtRngwpD1M7j6eHrBd4WF5VtVPhDyTCKP",
  "key27": "vasmXUZ6LofN9EbAAUwHb6GmjnKpppr5b6G1mRWVPyfcZYHSGbaAi8owxriEZa8F6nDvg6siTeEc4rLStog7x8Y",
  "key28": "4jhcbvJB2wXRa9KEUCpD3pkALQZfnxKFpGPHPCobZqPEiH8QJqovHChcXPcMiKJLhnpPSnCprBpy4DvxxumGm3sc",
  "key29": "kc4WPEgkmJsAJaWUDo99y8vgATdESAwQ7ydoxFnjK8M8jJ6bLpUZBrz13zG8SCLpSfHpR4FzECnd5pS7DtbDabn"
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
