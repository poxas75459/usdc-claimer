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
    "QVS9Ct7AvHMLDpjJJiSudet6SvZfqJ2Vy4ebQTZhLXPUQ91jjc5WJ7QKi69HYcRfAVDH7kuDg3yhgLTu5fvwFkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hHMFp3DrfV2ZPqqviZbJnnEsk6TcawmBWtqeTqPNc7W9acGgZt2R6Cg4NPPEWXdjnrp4kwS2YY3WRZhposKXVsf",
  "key1": "3pm4eWrtiCZK7BdrXAP5Vs2CHa1U1UbL382KqoZugqaQCRbnvwMQ2hJcx7qoWzc6Ui7okaXhNYYFgDT2zEYRDhuN",
  "key2": "2n4AymnmG3KvH74oouFy4tgKGEPnHCAh4tvjfwUfVbBGinnWHmYUgctPamdpB6ctn1qJCNkiGy55WFSJVvxQgbVS",
  "key3": "5M1iUpGdmeyL8qUjqUadYn2RfkkCDfuBNRw1Lry6a891f8kCBapo7wP33bfWCpRS9Ugp9yoiwPgoNwctDwkuGcBo",
  "key4": "6114h37AR1GvsfFaWWZt15TW3cwye5HeeUhbj7baGTzU8q2tD8vMCfvE7E8RDHiB32semE4wZoSZhXEXmzxQhAER",
  "key5": "QqYMcjqoBWdC8ads9YsaAio9VwBLNn6BAs8kCU9HQ6Kv9MEwFiF3hPwcatPfEP5LnNdgp1Ygabpc98uPo8xatRe",
  "key6": "fXqd3TP1GtAKxaQMryPSSCaci4J4ckUpNcUJ77rxi3Ug5sRHaMW1qx87fc89U1EZ69vNKEfuSLaVBiU2P3md56r",
  "key7": "Z8oLcx4FfbXpmGH7RnjDu8mPQVNchNGTEvp8YQW4fuXZ2Y42z5CwskAZrKRYRvUDQcqWbthyFT8zXcpewfoSz1E",
  "key8": "5J4UTpgMNK6dzQ2uRxgiLb41vjJU41tByQuM2K3Ai3XER46fAqpL3yMPF9QPEG5Dny1Zgi3Xagmg9xiUeji9LJiP",
  "key9": "TWT8KYnXfY6rYveCQv8XiPtqphSAUmKj6cJptaDptRiUuhE3bE7c7fwsCtgZZxsRGBvNi7naQTydAKEJ9Hyvfuv",
  "key10": "3DUwh8R3UBPJrcAQWmdtkfyvN3oWHMfCQG1UHGPSeGadACxYGejNA3f5gAprxFJuMcJJNFLt8WJk5LaP7Yc28j2G",
  "key11": "31L3NV4jZa3dzQpiJUMABapy4EEVeAfbJDmR8UUr1DLKEVJNsrWL3dF4aRunYazPpJrycMa43QRoTjEedC7iGWg3",
  "key12": "61DEtdrrH1tDWPKeWHG1Hc7ZgkQRpo56aJaoa5dUbSWzuN8hcbqeDgcwjXDwcze6NSWFzW4S1AzFmtRYmsKZiNK4",
  "key13": "2tbXPp69xMEYjVePozHLn4oc3RJ2YG8rCZ51H7fT4DsiZgkHZmoMpRqSFZ18boZmZFjrFMq1yvRSKYt45Kkv6V6K",
  "key14": "4yd1SJWq2aFJCdJuQHz12ESRtjH74bsT27z2A66pYnTeJtsgpzKgRfwTL1XF7rvF9cdDNk5ceoqEWAvxqEm87rLU",
  "key15": "2mhGrJgFmGVN8Vjc9Zdy96Qtx3L8hAH4JK8veEdcxFa7zvbxZAJNyWXYmwT1bWnHbUKdzfxYmEeUFLk2TXQ8G7AC",
  "key16": "2oJqVHiHsH9gT29PVWq3b5RpUPvLeN2o5WQmmw83DfEJ8kFmxE971yNYKDtDSX7X77NtWU2843x4bvAjtWABbTEj",
  "key17": "54eyC5ERxRMeBcjPQ8cjfJfQuQPm4BUhXCZvqRg3LssPL7F7kzmxSgjczs83TJD3TWKrG7p92Rr5kcPakQY78wS4",
  "key18": "3ipESzP9R6MeeXCJwPvRHBuwFnbkAjziyvHr2XrqVhyonLTfxjrtocifN7BMKJhgrEebnFqi1UU5QmvTQ19EWNhh",
  "key19": "9gWBmufhoGbU9gkoeG1dcQMiiLeqLJLKbZaWuKr3es6F1bb5tTkYrci5887MRPW9HPWscqhKbygKXCvVTq4RMjs",
  "key20": "284V1cY86XRr8bQCfJuPEQ2c2JVQ7Lfhn8doqsstrVPKFHgvjxqMJXX5ArM7KFJyHtHGvDjz4Q6gWsX4ZDSZFGJv",
  "key21": "3f5ccJi3MqBCJehRGf6ncB1mEjHfysuj6tuey4JWiD8DtB8v4JKn2iSwELktVrtLsNbGyeFyd9bCEfgoo1JKWqJf",
  "key22": "dZYzDSrxPjfB6Zc7ZXVCebRWYhKyJm8VAx8uiUxYMstHSQR28An2ZfFWk7EYGnyJF8YQzaewDizGajbtZUbReMt",
  "key23": "5SYh1MRG322Nv2JcFKh1GEs9RzBKkCht1QjNMot3zYrseq92QGfyqTVFsmYnt3VihzyArnSPoDobbg68Nr51DZhA",
  "key24": "375A3PxAzxaFcCo1CzhY3ZCMQMQQemgiDU8rTVr8XsjQfjgCLLsKhHiZv57aEduYZL1G2e4GxgnVqN3c2FKsPwje",
  "key25": "5CeZpyHjp1YaM9GKdnUbV6YXCdzcnYb2bPs8LR98BphzgqkukVNEQ3oMfmr3sFme9eHkvCnXyLrPNCBBZwxAaSnR",
  "key26": "58mB8pgaXPEprdhiT3QifmgKF7oMr3Q575WzCwByvnrjzQ52J4nc1j3p4UT3ERkVUUK7eAchdR53Tb1GpuRhbG8Q",
  "key27": "2nazgQjGUsW3zUbB8pTjrxAwGcSZzf7sZ2aEjyi3z53fYHz8FzpnEtNsMDgF5rFCC1oMbX6e6zJNALndkaKtUA3s",
  "key28": "25ycMPryxnQqCKQ7DikLk1TGiqTRswjnTCNZnBu976fjsPi8TRNSVVtBf8hRQoACGDpJ2Kcoh6aAjNHqBtHgDLVs",
  "key29": "4QWqX3NqFvXEYsw4FKmfxwircyfQdKqNeFJi9DMbngCxwQX3iVGBLUSKcnUaZyStHtTGqjBNo3W2FYR8ukQJojA1",
  "key30": "5VcJjJELw7H7oFF1AybYQkqxkRfsePCHeMhY8rJYZnYJ6k79znF6XARLL5LBLKn2cCQrC8TDruLtiXYbMoXHsYWT",
  "key31": "38yy1sthjuGgYQZhgwj5iVZhUQ5hAobgShvZL9XbKuDP1fNR5tttj9xiuBZMBsZR6CT7bXxY7CwjCjpiWQ12uxUq",
  "key32": "4crT3Fg7FvffjJXekSWUbNQmBArEPamMpF7Ayyx1TmJB84jewsWvfCpuCHiMQjAAKqdb1yjeZTHH4nRMgv8qPwmB",
  "key33": "DAvNLB1RYL5zuEuwdxmN3Ko7UY6BNs5jE4HUE593utDC6Pqw7PNNdaBcgEbFfw6uF8sCJVAL39eixBQQWL99WMY",
  "key34": "v5FYdpP8cefV9N9mbVtknrjeVHUE9jJNHs4fUUmLRNawkFBBG3Vc2bRLhi59CVgKMKfjpT7roHUQkDNzXvX9DsU",
  "key35": "4ZBs2uineoGtt4ckctuZh6uUthXNPeTqmzk9tm3HYg234ekJnd9gAqxrNDvxAFBMarfNRJJLyrGoqpnctw3VND4c",
  "key36": "5Xb1PJfzqLNHfguRuUbMnrU35LYF5C4yasYu1DrDqp48h1YAMsqCkmD6wLNQqyiifTCmoeqnMM5ujVxKTqj3jEuh",
  "key37": "m9TVuuxFZu2aqC3s58rfm6Ey1hHqpvUd822kQVaYvXbGPaWimDjaq5qqjRJwC8Zxpp8Q499SyU8XzgEadoiiVHw",
  "key38": "2E279n3TNjL1RN9rWxtnGL6GC4DrrzgKTp3pUcQFcNCkbXAtPafhyAikSzq19pt7ftyQusogdWQor3Hcw1eyH6zm",
  "key39": "2UjbnBFY4JjxScDU5pYRApLjvZSmJg5gaFW8DHjn7naST1ko49gQxULnVesn3pqk6xfLMSNDqhrSAuXNwMKHApB9",
  "key40": "5VGoU4iWSrybromqiBaUxsnQtX7isfkwimeEj7tiPk6A8wZv5Eo4Us2V6jdFSpYHRB1LwMfLdSfV3MSWVCZS3Rq4",
  "key41": "4qvYsw5TBfMEjQ5Ahejn1EwtVBBoubugoYkaA9KNwciPULk8wisX1W1S6KtWV4VpkyzdsHsFLzv1HuCtKSECAALB"
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
