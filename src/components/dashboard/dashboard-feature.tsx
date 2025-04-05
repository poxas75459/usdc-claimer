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
    "4aUj4SPgtXDizDTwHtXrttzoLdpHSpDzT8HnwDeKy2jf9jXtmhyDJqcTcLGdLDtsgGchpHEeBqgu9CN5txtJupuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23jvd6My1KuBrzBRmtjtACz4MtUubLPrv6Rv1JoLCJydUCRifMe5g91XCPLoNkTCmLsrHpjnwZqS5bF28s4xU6Sz",
  "key1": "5FbtMT4FPmLiWBqVVzgQJKXgNoDTgnukHcGvtaaLFzxWfYy1eYoD9SGuCci2vNvE15omcYSFGXig22ukUJTSLAo3",
  "key2": "22HAmsJi4RpPDcQYW6Li6zULJgZgfBpMy1tY7snTfjWxK3yaHRBboheCrYEbUvnScg5uBwDnvyTL1KvWa533TtWE",
  "key3": "618FJADBcS4qgSuEXreB59GsUeH151RxeTjXMQw5kAwZFoYGUJQyVYqEzaEEBS7khJo3G3MenG9hhDfmRgmxThnZ",
  "key4": "3TX5RHqAP9RzG43P16yns8Mx3XVgkxiJ2y7nhRG5eSiXpkAiNdVEeqxueCt7cadmoGzjZAN11RU5V2gnqTUDo5BP",
  "key5": "2AqtqnAov2jANCa4rFfb2FRRks1yBrwNU5sCgoCWdTMDsQpEf3gfptXP6wDspjhJFGLrj62bWEDzgUsuDH6DXhAg",
  "key6": "cBS7M5ppfW38sXgKDUS9k1PctbnmNKHtenYiJk41GVHLTGcrnHbNhNyAJWixwApzuqBQMdkpP1jkstoMDfE1YBs",
  "key7": "ZsMvaq2rnmHtPNfjfUKXVLTPtpHgiS7XvQZJiWRqGR1axYznJc867hzWTPFMxxSMug6LfZaHLHwsAPb2Y9XWNmn",
  "key8": "4dmReTnoTMxbBNRsveqUDt4dv1rt4QkvRSo6VA4xNLaaj9FQsf3xXAoj25PUnTtTpCWP5NzV8MoX5zQe6vKqa2ao",
  "key9": "3sqeajSDNMNXx7BaXCTx8tkvUFc4rfwnhF5QrmAAN56eNCW239PWuaZxjpGaC42ktnn2WDuyyT1LiNPpkAEPQ8Kt",
  "key10": "5ZSn1ikHHgajgoqSY1CU2NnSDeLMijBqhTAgbhXRDWYNdnAz7RtiRPMxMuJpCxbZetGABP8QZ7Q2XG1s3gU89ULD",
  "key11": "5AhkjqY27ENi2aJL1kEoZK3ji2tYHnSUw4g1vxdwPD2VjNjGi8GA75v4oGE8XMnoBMCWZDR7fvUUBxbW7GgofW5W",
  "key12": "z99S2Rg4gLof3bVmyphot25sxXN3vyqfvU9E1c4V1juzqTJhKjiSs5LXoSsrK5rCFUDSiPhGszhZidrFwdTDqAZ",
  "key13": "4iZ2mdxmx4YTA4trhFjkfkHPDpKdGRzuMzMHvBcGpwDgXe7ACRxJoahrfrY2sun6P7M8Dm9MqX7wtxy7tAWVC24S",
  "key14": "54dNv8eqrpepBBHzkNLuDHqjrtSAfMnbBg8DuxJQftjEgm8TDBJLkZgAwc6jPVgZGUChAWn722aEPQMEvHU2NE4Q",
  "key15": "4ZbqakV3hjBJ2hqJfCHwHthQhm9966m6Tqk5Njhy58UhKrb8YNTeJa8qS9Si89nE18sQzQPvrewpkuTFZkuBV63n",
  "key16": "3FteviNBpdyyN87YG2WwFrswdEA7S2EvkRmDf8AxnhyMQbudMCwyL5BmsCCrpmPLNLPfJNbLfKoVR6KnLBZtoP2p",
  "key17": "2pSj2pNVCL2DR83p5CCenxq4EnNtsaTCEvHtD2YTZmc9C8vfrUy2QbMZv69kqDUYHXrLjfyshbyuGwXLw3DTZB4H",
  "key18": "4Qf5YU5yZDTZhdEwpCWrqqtMoRm2UpQVNn2nsKD2y3yoXcHM9UwCgXFBTw1xq6RHX8kiLTpCa2xnwasfJdEjamwB",
  "key19": "42ewg4xzZRG8F5SsB4W1J5C3d2a5N6dwaiB8DQdhC9ci6mnXqP7VsEo7F7LNqKjnQKNuyDf1S59nni4Szz6wEq9u",
  "key20": "5i9pSCGqe7hPr8tmDUEFbsFGcZ8jxZ8TRPv3EQefiPxMii21sjyNDUV8Yo6zDwdQkj3j3KSCohzUXqs2mL8HwUeD",
  "key21": "2LCJUpVJf1mUzCpYycabuQynYN6zNMC2mr1mDbiKw2Ak47Hen6i5ADzuxDTAiEZ71ENKsnjKbZY72RmetoBuCax4",
  "key22": "5WAsh7FS1ip3RFTmZwhJJRMNY13qkcSWcDPRwiWn9h1DbUovcHq3x34ELpwwBntjyUkpgp796XWAhCThda7eBzNZ",
  "key23": "26rsNVDLoLujpYYbXtZFWM4ZsS3u2FT2zFv4t4K4HrChTNJbYp8ztW9VNXW2NQdL8ECD9eWTVuM9nDd3qcMu9oHo",
  "key24": "5gx88BQbyLMhxCENmtRhdSaf4FHmd1MUP48h5wnGf2dtktc9NprFbQts3dgcqsNTfV3uP7JGRW5qWtGqimpyj5a8",
  "key25": "4bNnEz6QkQrqhDEjMhxApUGiB8kKXGxsT5bzXrWs7nahsTbekDhCcdncVgvzsuYkEEPse8Ayf8MAdLBPYyExxdT4",
  "key26": "4erQvAFzid15VasE6w6RGPf2G7k2X6YN5Bkq7Qe5AxFzgES2FBJtrgHY5KJwUBbK2XjFreEcw61gwjd9kz3L6U7T",
  "key27": "3q6EEudccsSMAHUrHzTkR7ZXsGMbBR6ttq3qMBt3L3fHfDtRX8VZYcUafRjdKe4ZPhwA4P8bo38RvQS7ZMT5Zfc7",
  "key28": "4DmfR9xreCVRhbArX1zB9t9ZYCW68BbhrccEyK6kabqQQfM8vJiaimYHdtCxQiHDHoeHNpKmmxd2Vk5rZFKmJbtx",
  "key29": "2t8uB2NjfTEsqyFKxxi2GdbabEERBHwoAwwj2w6ciseTUvT3yuuvyYKLNPpFLULeF7MTGyNrF4A6snaxNTRyJDBb",
  "key30": "5xSihtoW31ZvciX9tAnNuZr6N3sE9KLvcLqWiUKGoEeZB4cXFSntjxPdGMoQNRdgSLzLzQJ8bd7wF5FVuGrSBqfL",
  "key31": "3P8ppu8sXBDXDKZNNMg5FjYuA4ZCS2fZXRwwamtHxBYtQ1LFe3tzCBgAwoNAN8tNcmqopPCsQ8UsNBR7wNUJUEKq",
  "key32": "v2M39synxeuJ36BPqB2GArgSLcJRWERUHs4MLLtpqcV3G5KULC86dfyRRVKNpooDTF4VjKydb8f8ZsGewGn2TtW",
  "key33": "5g1UtDfkxbV3Wq2eNJ4kwA3ipGWLnrDXfh6H2pUSs2jZa9ZrPeydn35nN3XYYy2f82wMAX1WZy89L8QxkkpwK8qG",
  "key34": "2DcjX86sVC3id5D6r2XAADQb31RsUxkboQp1ePcu582yc9KbyoV2mVm1RPAgD7z8goE5KAieoY2E7nZGYcDZV395",
  "key35": "5iiEM7SQSGBQdLDgqeYQMKErLdCSwnh1kPrVFmFwEJHxohFzYrehXrL1m4QkoA2jswMZwsUxhiSsXYrtyQnAYvjb",
  "key36": "4NRQTkdNifQgFWeyNzHYJMEZZ5TgtN2UGtq6R6HXjSQwP16r2yAKj9piVZVc1z9sZ1DEgTbfKAta6adNXqdNyCsn",
  "key37": "tEqnmHrHRUobKNg1DuEdhpFJeuZKK84vdHSGe87AG6VYAZiuGC2P3ZY2kRPYPRk4EYVcxBQ7x14j27dLmKNLyEN",
  "key38": "2maw2i71mhHwTdjd2ZCB9c4Nn1uD49zc2pjbwD5vNvfNqXSNZbvDuwwLYF3ss3d7dcqeQw8nRqq1JDSMzc3JLAk7"
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
