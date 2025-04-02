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
    "3cXN7FJh2idyuXmWdaGERE9RiB4wbJc6ekm79Y1MzS35WH5Nv6tJRoUhfEsfynua89oJrinWbrrcLUpgXpq9NStA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWt5LK6qERqvyEvX1RJufBprqYUB3JNLBkDdSmxnrsjc9eou5dGgnosnEePv8DTFLy9ZBvgGvVWp3a7MsZf8J3u",
  "key1": "5RCgoM7hxXTFxSU7d8yitpQxyurBkYUBBan5DSfNAoFY5eosSMvxtUM1NcJzU5SCf5kV9qJ6pT4VNaHAYDQGoH65",
  "key2": "Mr4iYzg7F1CXXe96uEXeXqR9WHwSrorQ9nJEfnYc2WPX3gQ4vbxTG6frJLEKiVZNgmoNaGVKxHWmWwUjQRFn9TE",
  "key3": "2YwKsBD5WXQkxAHp1JKovAsmr98a48SeqePGiMz3NWnsqQiCrmc1cCFs5TeC6XLSecB3WJ7awbp2qhRqWByGZ1SK",
  "key4": "R5EbsJsEQSHyohCS6dJhNea2R59qkXA6g5nE4SwXbPwaxgxA1mDgNiGuNPNoaVexVXAkD4XkT6V9uUv9sYahU5u",
  "key5": "3DSMoVkmEuvx7FsvREjvwMZdGaWoTD5ScWbakqFryXub38XmaKiHp3NAETQ72xKzkxkZwShVhDiGeYVvP731yNR2",
  "key6": "5Rrx5YGFkfTkZVckNEwyDq4HPfdJLybyJ4Xb2hw2BTgZwrrBY31h4eMJeRndmQ8XzxHrWEw8t3ENEmbxKc79ZaT4",
  "key7": "3nZLkUjk1CZF1BQLyhoufZBuwPmnhg7oDnX6cqdc6KStWqHAG8X7KLfcjdq2PxKCqTXQFfTp5RV8xiW3RJinSZmE",
  "key8": "WdhY3KJsvCZTwni3fiha2mq72nEQdcdL9vexqNEfdWmANJpqmB5JEtJSCCmcx4kgi8i1rAVK2jfcpqqqXfpGp3X",
  "key9": "F7pgHu2ghNx6hXQs3doihQ6wDeaU5cTYRbQ5ya3yTpHmMEtaJu6sENdjGKwmFhV35TDkchFLEoVeTUEMHSUuYdG",
  "key10": "4kkhwUzmT2UKLUJhhH4zz4pCxagw2FRfrD5WSr4Hufx3n3MkkfuSmSo8aztMtJYgpy9mAH3BXaGfi1tq5bRxYSZx",
  "key11": "4xuJzQ9hFK2qAccJ2VG3FGnFxwdQDjfhFhuAHWpBRxJD8RGmfdYWZCDyAn1W3yu6nNSLuj2ATypkmhJvVRfnSDJ7",
  "key12": "4c8aC4uQnfSEF1f3qLya7AknykqUMQZLE3wEtPGg4Fj3NKiuNVqjnJzCWpgcFf757wZFxArBfJXmefUh1mpiLKNz",
  "key13": "3prGobdrj8iAUDWFbgaWfDLVJA9HTf7VrzVvkfjG3fHL5VkZoVNGUWmumYCRCmhNaQS3rsmxbVbjkL5sdq84NWbU",
  "key14": "29BaxFfpy7o2s8k7nAFW3U3ASL7VHoLpRieXFA7b6LWK5hEFKHFi9Fo1iUrzvDpecFuJqACfHLhvVG7nDcqi4zob",
  "key15": "3yQqMcsG9yv3j4JffTa2e3EAZYfmWGxuR2rSWGvFBU5w82GUY5BJXVYTQ9sFNfYhXsCj4QMSHLxYuZjorbJapSHD",
  "key16": "qMYj6zSFGh6CCUnzctiyv8iWF7roMpn78dPfwC7nQ63CokZeN69mkhGPiUzvysKocY5nEtVkKcDmuqpRBAJ9cf7",
  "key17": "45mtdHvjzRt16rFrYqizo3hAPw5NFhQZdhEFcqMJ6eB9ZH2HqWj7aGW1GYV76n8vJFxqsrkve3JHc9Ud2xbMZC9K",
  "key18": "2RGJ2KAQ16qrSFTSepgz7et2NPpmwoH5PrXsFJUpTmXVA3EA8jUMqCja69mzWLTe3tn9f1j9YtmJqaqb7BF7WMfm",
  "key19": "2bCPoNxS6ELUZaEANjHqySKwfawfPSkH5B6D7nXtXis4MgAh93LEqLNtkSebFuXmwq9NmNZZH9fbPpo3JKvUXjzg",
  "key20": "53JFENi6Cxk3dsp7Ub8B37DCFNf3dR5hmH2dEmSWZwthshN8CDc4eHhCZvBFamJjSSoJYW7zJhat9vGAEk4YmWJj",
  "key21": "14aQRcBV98VjAmz3vtznAHVtNLNjWU7UYVcxQqGx11hmjNhFecSRNbGBj8wvLAJPoY6Mf4Y77DTYivfJGvvNuUW",
  "key22": "34fk2BNAr8qtv2UDfG8Wqwe7TU1HkMb4BDBF6vv84iT1pT7GiTybyWQEeQ6PYCLZvEu4k74QAgiWJ9fmJpbY6N6B",
  "key23": "4NNwKsYfmMTqGu2yYYhSkF9kUzgmkNJPUg84KzJVZpzZ1FTyozsEsAVDNYDaqE1bLWiwfAiqR1PMRH4UWbnRog5j",
  "key24": "4Nt6w7Yz6CM35eWt829kXzkao5fD55z9vwcSdm46m2VinDc5vi34J5agGmhDXb6e8tR6a3oyQpHZ4TUW9RRZ3QQP",
  "key25": "4o2qhFeMZNCETbMSCQmfoQZkd7vw9BuopWfFfhEN7FhvBRK82Mg2ukgzUK3dK3LjvfhX8uRSTZoAtTUD77GAic15",
  "key26": "4TKcUrTWNjii3TDrcRQ5dJjj3QYUJzyAcnNobc6xMrq8ZnksA5uzfDoeytafFrtPFppxXyD5B8MAj8nciEXyXDfp",
  "key27": "2Fh6nDBMAohCTRkhp4hTuhwFuFweu88bMz1ksNXVGUDftYAaYsG73BzpsAQqLaJ85dc8tskYcMcGozs25hyckHNn",
  "key28": "3m7bFxrTTR9BNk4bTt4MWoYJHoXhj5DgxuVEXJfRY1BCJupsR9GYUnqc9BbCQyKMsEJUVYEVJ8E5CmNCQQPZ9QZc",
  "key29": "2vdFDeRFaRHaZe3Qh5bTSe9NBE87TqB6u741NspYERavrXCTXRVhu3cSbp88zMwwxhVDTyuULqzsbCovmbHKpWxW",
  "key30": "4t82FtbJVQQ8JjQGSLQRoFaVrbtYn67NcHquQuLZC1EpiLrJVryHZSdBULmS3YyxqvfQcwPcaQ4NB293rHZt8FDe",
  "key31": "2yKD6yCt5xdqPCaEFuRqawmWMV34jsDZWCLZ9CJUDXGy2ZHQsZosekhPTfnKYKURm7Y9HgGvBP7fybY8EkfepSEP",
  "key32": "3eHPjwB7tVUWaf5kkMoEuJJg5E5yjwWwQXSGxdz7uS9RYdBv9bsjrXwsm8SW4X5jcxQ2LvQAwrH7kqrAVTuPJPMM",
  "key33": "5VPbsTUggKvrTcC7taJ9d9unzyN8FV4uEC7S9F2Ffp1DjrfWYEzrrpM5uEdgU2oZvNURnPrLwZbuV5sgC1BstwJL"
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
