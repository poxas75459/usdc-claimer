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
    "4doi1KgMTwj6sydY9PQx9PTmeCJkMrUM28sJEujy5MmpYcntcRWUyT816DEiWXJ9ZCu8zUPnPdSvHms6govYz89m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cz1F3m4SWP35p6c5iD5kPrsrCZ81oWNmZDf2qfoVDucgcAWY6zTCw7S6TESdb2dDiDhiMpTkBgk5tmQxGQ96vNU",
  "key1": "3fSiB694we3YP7hEEBVeu4i7Gbx55bKc9brbdgjxKsxYCKy4sx1NhMsoh1sknraRvR1M6PmCJDx5oCNdH1FGEZpC",
  "key2": "3YFAwNc3SopG5vhV2VXHBhuH969uVaSDKYNyXv7cCdJGXb4nRdE8Ca71M6H81vmqSVYSSSysGiQVEouf62Pg3zVt",
  "key3": "2v4cxUg7JWvP1MiFQZBsfewymuY2AhxQw7TCFghNTsWbAqfqbsCpwH88i31X4VwMN95JRwN3qGxvXRmZRmg8YXG3",
  "key4": "3t8YqJtwx4dq67m8Y9F95kUb2stZwFfmQJ4HzNDGW5kpuNWjp7G6Ysi43jwwFob5G8wMHGDhjqsJBzUnp2b1tVMP",
  "key5": "5NcyG1xnxo56t3JTWa8EcRQi1iSCPKve5qDMckVZ9uB66fQLaX63m5ZmDU5zf2wxsutSPkQ8eBFwy9NaTc9vG1Kf",
  "key6": "AxvgVnePeRwc3Dxxc5DBFRAaxqj6jVvwbJkoE6XFcqawEDU8Po6WTbwpkmxUJp7hgPuzCqKYfg5af79wQR63HJu",
  "key7": "3UGnLBre3nu8NLxqhNbeQ8xFqacXCK891GRj1gfMLAVyFZovGrfrLeUcu2qcauBQC8XeUkxrafQeb6EapJw1TvRP",
  "key8": "E6BPmooF9SiUXaPKsnTN6mUUZS33o4z9fauEz3hyLT2UJrTqurtkdWKVGsLEDKwU2jcfELNtRDTK7ztnHep3A2G",
  "key9": "4caxavS3eQBZV34KUnTwRSKULAuS9BN9U29c8E7q3yKh3AGzqwzSKcGCVpXz3nZebZ8ZTCmeoo7XzHdKiruZEGqK",
  "key10": "4zE4DD7PPaxRaTa7dt6izdoYw5uR1vQwftdVx2SHjHbRY1xiZB4QNgMMQNw3d8hcNhBXQd6Smeou26BTvLhS98Qh",
  "key11": "4BdW2csRdsLQwp4Kk29tLqNTrqWnsS3eTqtHe5mt2HRiTNt8cSNHHcvgbz9RkYFLyrt3T5tbkgDni5FCWTrn5C8x",
  "key12": "4Fo5ZsnHK37vmvvRzMYbPpdFRrYsuGJVY9Y9W9RhxHhNbBmMkwxXKrJvKoYQkBvpoaCkJ7PJctfiSgZK4V3igDwy",
  "key13": "4jRDSwnHxZkCewto5kZphX33LjsT4Tx3qe4sCPgCYywWcbc73uHbk4GDiUry9eSVPSLoQ7i9gfvVEPm9ni6tCFyU",
  "key14": "QWQnEJzyCTob8BdALgnhz1PjHpbtvrnGEAzBDwZJjNoU9UFgVnPwvWAGSm1NEPT3EKnNGxjvYT2L7XbiK4gZ2fU",
  "key15": "5Derhh4C84eyRZu2aCJgPKf6uwuoGXPUPLSmfjgcoCzPppXc9pqGSYWc9AXUmEmeHFqoPRFFdJRArboFzpiz9rWk",
  "key16": "3QpiVvgdZPzcFPgmeGUF4k9czkFHbeahvYQi2qCQX6iuXDcygMrLNbQDMsEWj8w5v7kqM32znj5A6i3XiuigetTA",
  "key17": "63p81nnFDXNspdrriQoRYvP7MFTWQ2mopT5hx7NwcbFVHrd9Ma7tJNCXerYsfq1XGYQGpEmekrvQwunV3QoXZTqU",
  "key18": "C73seZ5JxsX5pFw7VDngrhi3gkrS8VLdDfz6yxePj4kKLtPrT7Rk6Dqg969jWzRaP3ieCevgXGT61jDtkwuE5sN",
  "key19": "5iopWFqg3WrTVsuvvZx7TFy5uHqYVezEjLnJCYwAWLV9RRQVBf5FbsPhSPQfX7NWDP367gM5Axx3iLjsdYuCdxbi",
  "key20": "3M2eJ3w98m5sP91qAh7eZENYS92yqY9tTUoSCKx8R41dxj1fm5A2TDU2TmfrGHAR1zeHS9sXtmJD3HpNqiUMzGTa",
  "key21": "3AdkuHULrhcAYUVJXcdaAfveBs5Sf5HYhJiLH64a2WqA5V9ZfwC2P3cTP3FzD3tYRz2PGcYV6xkPyWHFJUJcXU99",
  "key22": "67r8reMm2aVzAGg5Y9WVXR922PvrPGVwuQP9eZgiRYSMZbwidrxpHTNuFgRj6i3BCCpDCtTuq9oauHPEppfvtJ7B",
  "key23": "YXL2NFeQeGvWYqub3VGaTQ2DrJvb4HBN3gDB7QrZYkw5W7UKQrxCqQkkMoyzeVJbYGeyEQotEwfVv48mVVgf8dN",
  "key24": "5yfW6XTncUUF8j6o6vvgmysMcgPo2aqGPmuUsVLxMqjXiLUGxSDcrCeB8GrAGnayDNT4k7vtochzutHqPYzyujMb",
  "key25": "HFe7QZkEFTYgLyzGCkSRxEneRCkbXyssR4jGBsvMudMe3LMjSPACn2jts4Wn6na59QMwNjer8wDtFebcGyZb2EX",
  "key26": "i4BCdtTgLujpgecg2GsMq7Q7QcqZcT3zUGqejyEzEYR3JEz21pFnppxxTFHFAqNX5AeerYH5JQprJcNvoNoCq3k",
  "key27": "kDUa5bWRfkn25UGXb54dX1KnAVr1kfHoUF9T6EawENGTXPNXDyNXE5aQCkD1DuLYFvSVmGH3G6iizk54YGQbzzB",
  "key28": "3aUKLpWCyJnngLbg5EDqz79PiVeb1Bnw6qMgMSUt6dFTSpH4ktxp1M6iKTcaynmTtW13LWAwk4JAczeMZaW2x1Mi",
  "key29": "2HbDKBQBwnSki2WTynAMdjQY84hgrQ9mSYgwKzCYN2CBywkM2149PdQmKdTec9X13t1UWdaS2yS4dCJVKk7j1JBD",
  "key30": "31HDcoQBzsjzzAsdEvzEW7Bxpwv37Ejywqq7YWUEyZoM1aSVxoaP2o6XTKFzh5Ds5MZf1KukLn5oM6idDYn93M2P",
  "key31": "4LBtHevpy3wv5FSG5SY1DHR2F2udBZZbTnyMxtCtSdV78f6couWhMypYpDhNwS565TU3CqVTCnBEMSwCfaTWYFGv",
  "key32": "3sokwAt3TUQFa4TPpFKXvTgxkB2JbtMAepc8E18oUUUqp8SnfXcMkLyVQvvid1nq2Jjoik2S8nezn5dFvjgyW4Bw",
  "key33": "NfDoxftc7Gn5NkR5w3Ae7A28Vz5TMbG1cjQQPru1ujhxtXKeCCRYDXe6zQHHG9t5XxYc6yXWMjRTbFPnFVn194D"
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
