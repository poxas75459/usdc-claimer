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
    "57KCSYxB6KUdgpjz4syPx4RNNeCjBNVjoNYjwtozoCCF6TVJFiasBCU4eannvyzsosFJGVmBuqkw6Fr8TDxSNrSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tnvfzntv2L1uTR7TnXa2ozt5mjfF7wj1uHK693dRGvAdePCRraXevxMgPApL92vwNsU6LFXeTwXJGwzkjCRoCNA",
  "key1": "5sV6ZSowWNYjnmQS4vCcVUV6iabPk66wjqrz5k89fg8YDFYgruEhV7YY5SuwRvtnroa8iMBq5faoaEfr1YX9NhYF",
  "key2": "2fmJJpcLFoF6KEPE5H1L7ocxCFgitG8xnbwBYRFZ5UZvSVNdgiNx2U6a6M9PfoxP13SuvCzHztnkL1cXPFx9bKzQ",
  "key3": "98tREgS4uPWSrZDn8jr8kHZsxjcLeTXF4ZN6HgMii8GVy8imzZ7C8KcqUpAUtmQujMHQ7bLcfew5D6H2SuVMCbD",
  "key4": "2rJYLFxDwsFn9VF5TvaB4zT67zQTmUqpi1cJ7yAomr6CF6MFLN88chKwby5pAjwU4sw9JfEvVYud25FD5fj4f4Zn",
  "key5": "5rGW9jyNwUQxWMk63o6LX2v1c4LZ6aKRnyManJNikBk2JbnfU9Q5rFEyWo3nqefPJGi2RtXwkzHhLVfpjhDs36i7",
  "key6": "2jLwLr2p4V1ZNEVRb5PWL1uVgq6Lenq7XuP5og8zF2fUMzKygWVs4AfULZY8kbeVNnBE9n1fsYoUJDPYXA8BCfma",
  "key7": "31QXr8pbDYUrSS24MPYiRQQ2YBWUuxDhgPEaf29ckf7tnvCmGk2VwrDGeDchpT3nLhRpZzsnfVY6PPVesadEtmPN",
  "key8": "3ZmkEDKo5Ao9AcFQwtUMusDSkVCYJKWsFP2KmhTZisGLV9n6A1ibkWFEddC2rfH149n2nL2rwqYt7g2qGtLfYsqN",
  "key9": "52nPtfCoM3j9rPAWxwjemjV2pbmSungfz76rUNFZPzqdD8a5RYANTKedB34D94CAb6HSsw3k4ssHCLV8CcPgyRuz",
  "key10": "46BWFob7GSgnju4HyCQMdrMQnxSyBCC9YLqbN9M9wfdnWXuzFw4cCDE8uSvK5c3q5pXgx4wr7ggeevnYGXrFNZs2",
  "key11": "4oWEhyxJQD3WeDMsg2ZqM91fz4Cu86BN4Lht4zyEeZLoJsQ2dLGjLaAFipHwwmMdAwnFGDE6Ek4kBw2M1fC6q1Ux",
  "key12": "5c6tcDLcY49KJFyzoJCZ6cjXgz2yHrizohWUktF5F6irs1hNztma8P6Cy8czBByX36sEG11okuVTCEe44giESMZ",
  "key13": "4g5mMEtdbhj3P9YCigAmi2ovCT9CP3Cm3SmBXsNfnk1iGKwd1r3AVikBBDm9TMUGx6NNZStqzNq9WEp5HYLjsKD3",
  "key14": "5LsJUynH1KTqBnQ7MFZa6fZLc43MbkPa6bzfeP9Qu3LzGb2V1BNPhnbM13aiCUtEVjSUpg7usS7KQnzEk775Eu2H",
  "key15": "4DkygGuKmdE4AEmx2UkdPQ1igKrGZsefCho8fS3bNzRQb6B79ee8fUDQ93LYwcCifCe4UK6DEdwaqjJxYwkLMNwH",
  "key16": "57X8YD21sM2o9Ed2yAzpYRtzYbfMPtickMhbU3Q41nT4fL965pVGdGgcHYGtiRKjPTy6gaACtzqLK67WskFM4mnR",
  "key17": "5m9YmgaBULNrwqPUdKkYatmL8SYBy4GJzs2Uc5zeuwtD6kU2v2cpY5BzCby4rrVt2qz16ZP188TSDiNERZiU2i49",
  "key18": "3ygjcMuHZnjWCPo6P73fLQRZJyCVXA4Rk5zAcBUPTY4zs5cTGovjqzJHueK2mySbRdDrdjMXxCEuaQfXbMD8atoc",
  "key19": "2YSza8jnkVPPVmnmr8gwVYstdn2jmcCpsU6kE1BrQk4rNsiARd7joZnSWavJqNLXUxp1S6JrMh44miuMygPLVuLx",
  "key20": "5sJtnAHXF7BPqqQixMpUmnBb7naGv8jWwWX6se3MBUA4Y71iVrkfwB31rmfNTH6NHNNHq9niAy4TH54y9ZPKT4n2",
  "key21": "2ajufkDcYPdXZEaQCFpmnDdchdLKjL6BqSmkKV3Sj1Dd31ML96uc1Wagi7YnC3aXnc5QkRya7EjxkAKmWpQvR87r",
  "key22": "2A7ZiCcjmKnuvE5bVaPowBaXA8QxHJxRWuVXSpJnFo8GrTw4cjGmEjJ1hXXVAtWozJeWbwTTmx2Wi9XhXd7usFTL",
  "key23": "5ZE269QNLbVeTufBoPb8RrahvtCjRb9jdpMzN9ZAPRcka2kTPRKpL2WbYZ6HFFjxqoD8r6nrRWaJjLpnSEVrcSwB",
  "key24": "3JYSJWpqFrzVSBHAbkEfKV5mRvQpDDXHdMqreZe3hp4NR8arKNzbe5oq3g4NGgDmNAqnhxZ3X1Jaex91K7nNvQed",
  "key25": "5r5BR9tzxSr5MsFMRSNpsHU6gkgoqUND2LxtCPFAbYNcN7XM5Ubumqe4hAB7Q74wvti3eUeN7UrktuWQ7q7y38qG",
  "key26": "2in2aSqsfF8UKuTmKxZ39Akf3qbfvwhEfdEtmtLsEqMvwGZTSE4RSzmfjbPcQ8bZKxMoBHnbaYq3oo2kAQvU6dLa",
  "key27": "3Sg9q5M5oDwxSt63fVPEvpYLzqqqHrNz98pr2ep5g7HR9xt6zec5pDbhZNaasS8AcP1E5expcPwjTzWySzj6pvgy",
  "key28": "tJzDqSVk9V5BoUkYrp4HqVEryoDhepsp6hd74k2spoJD4gV3dbWYSgpUuTFQ1hoGz73ybUKBXfjuoLn7iNQyvnf",
  "key29": "qMZYVN5T86D4RMXkunksBL6rmnumvF7Z66eFEWiGEHnppuWeM9ZEuAmstACVvYuMbUoMqVgkN1cBEg9FY2rmWk4",
  "key30": "677DKtxLzLkosEW1wuoYVDiLbQePQKV1SeMdRP1LV4roAg6WpDY7A1hJ7sHjv8AQX1QtDHghtT6DpyZcLwTEUvAL",
  "key31": "THNH7Xcx3Ac6GJtbGSALRQTLQgk1FbDy3SvuPXB8eQHVEwWEDUZYphSoF6ZYqiP8cRhFprzhdG2rZkXTWj3WecC",
  "key32": "Nm396d6kbaLPbQLg1KhcVy8j6F2wxShbGg9JAmDC6taLoPdKRQxwCxgjA9rbCooFBLTo9agiK2TvKF83GXM17Ag",
  "key33": "2b23X9MjmNwgdAZwGux6uVVP8bbFTCTvXHmqW4duFDXGApRcqHSAy1NKnL5fGp6f467iwYm9aA1QARbQDAbUb7Dn",
  "key34": "5xkVPjQK7J1sem7wdR4MfkX3CF1fPX8upTebvmLRwCtoARmdZWDQR634V7qGyAQ5cHhdUw3M8YQQQFCcRwpVy28",
  "key35": "MtzrWGG2zB8FHXBtkjvwHBx5oh3gyxntfZZV22vonWDR7Ftfo2jMZDc51jk6XT8B521gccYQsUoGEGea4wXkHyx"
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
