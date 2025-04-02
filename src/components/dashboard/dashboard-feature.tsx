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
    "VToxhNWJWPrL8nnDkfySRBqBkPJTKPznxinXJY7rN8taqipDLQy5S4Z4rNrQXMo8QuqF2bmDG9SLggX9NZnj6aW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UmUQEBw1HFYYRHUmdqgYJzSy6u4dRvFRjnmM1SKL3h4hgmbxADexffMU3nsp7yv873U6wQ3vYvxveZUEBxewY3a",
  "key1": "37cKtc6WUHWtwWMFWECeKLAvHWwzNfHRt51BALp3PDSSgJo8ZUqrQ4JitYM9xTbyHiYc1whiKr6ugXzWzvnZ6piL",
  "key2": "2WTva4Sp2fAdMa93u97Pkm9pASxFNQGqnxHnseG7sucHaMSJxW9kbrTpwGaKrbPmgs7gE2YusAJd3zpeBy8Av1Ba",
  "key3": "5vys7bkZzH9nypQBrihS4RZqKxXv5WV5kb3ifLkzPb8MNow7hSqsCMH3fLNaDFRCgvK82K78rV8Ugfcmt1EqA5Va",
  "key4": "3tEwjPskjdiuyd2Zptt6wvGtPFU2pnoGxnJbEHyakMb9uCBFVyqy2WAyTVrsirGqUswyZG3SmqbsYEafyKHJJ9E9",
  "key5": "odGKeuEMGXAEfUh57GZci4EQw63V3Qsrq4jFX5UQDDhWbsJoP5ZS2rsaGniGc3ME2HpnBcmtQEWrEQ2vbDXm9q5",
  "key6": "4bqAD6Fy9BWDrgFetBZYme5EEFWFFzhhb6je5fW7aDuh8pPYopNxZhvohsi8GL2xzB9LpwYSfh7XnmYiJnjjAPzm",
  "key7": "5oTMP1hbn4UmSac6mR8spaeWcNKfVLMN4JkTdzDn1w5nQVdk8eXQzTYWvRfVKsqcLDf9za1T72BKRkWcyt4qHEkA",
  "key8": "2NvFV5yMjgnqUVFEiiH3EYcREne5XuwsrRcH9qKmD5NZDXqaV5Gr7QsDKtZqWHA8Eh2xNGFXt5Br6dC8vLHxyX6o",
  "key9": "5TNa2tKeMRzwK6LfmUvcpMZEhmRAVyv7HzU2tRrgfFoEK2itq1QvUYHwJ9pAsdyNW6BnJT24hTS2HEu9diXooYmh",
  "key10": "iAZ9BHJnaBSe4Rhqw96uNQ3PxjWv4DGoqfiJMTGhqs9zg3BdP6rMhHjV7exUYrkRWfAsegkRhSmbetMcQC1JTZy",
  "key11": "5Eph4d7siFTd9PcYXRz5SnQT3Xnaw3wEPfPjBZEh9LJazw9zHxJuu4JFSkMM3PCnVG24FpwtEb34TJj8yDCRyga5",
  "key12": "5frc4FtC1wdHgSDqDGD1zXjKhfSR6VKCskACVvZbBVeBXN6CrLi6n5JEqcwB85FFe2THWkDPfPKRqNkHxoqPVUCp",
  "key13": "4FMcjJcMa3Y2ehfhMTayXWArVgLzw9g6PJ1fxxbhseGtN5uP5MUnG3UJb8woojgRzbRSLR3QfAwnMp7W3N661kzt",
  "key14": "66YH1XMp5zJiVDwcsxRGC7aAxiguvB4xNbfrrd5yrxwg7XasvwpCghaGtRGfmcEZQAa1c87bjDgQT4wCQiaz8q2w",
  "key15": "2atckAwxgUTea1ybRP7GmV26yAmTy3W6hxWfzPMQPXeteTrsae1auhoKuszUtDi5tgg6jbxvwNUsU6yek63pgV28",
  "key16": "3vwpRT2rvAB9iUXFT8FxMgD322hLjJCuMeDJUBCLHiXS7DvzTEc9y5Tfpxe5edo6SJ4cYp5hCP7Vd6txk12ziafg",
  "key17": "2HV3CBsWABTVqmo7pkBZbWWma4AQiq9DdFXsNwdJjHX6x4jwiith4Sd22zRdrG23WYn9txgNKrsroN1Rg4mtkcWY",
  "key18": "5fJzigzDpopRF5jzsrzriF4wt4FzeAQHbFyCj2KnyTdM7iz658ALKKFQYEU3G55NS8QzkNTFVtgYqHqRTt5ZKPt4",
  "key19": "4V7eU7yV21ojbw1QGdQ2TneAFCUXRjKV4cNJGMeL5KyNSbhiRVc1nHSgT4fpdTLbN671YpicZxiFVYseruN1zP4z",
  "key20": "1NkWS4BGascxECH9K4KiRjNE6P8bwXyzUcVLq6wg4eHMGjcD96T74Bqn8N8VExoEr339L7y48LxAiLxrb1zVnwZ",
  "key21": "5Yiu8JWdZUsUwahxZf5QbVkk81kT2z9kwa632dEsj59HsfFRac6nuXaBBj2zu9dafmGpiBKnPqPCVWnpBvMU87qE",
  "key22": "nfBFwq1Gpbg6pxagkJKe7Wv9y1jWd2LBrZ93SdB9h84acE3WJtZGxAPXsVGgvbBa1vHAQpHBC3tuLEkE2UsNiKB",
  "key23": "3vCvRUW3L4cJ1kURJWyCzhBGyKTEoGyDzWCcdezS7R5wuyWhiggQMoPEgtS1Ntp69nJXV9bZiE1pDcS8DKcX1jp1",
  "key24": "3UFwx5Vrk9VJQsrDE7jmre9AwmyLQDUfkW8XueoLk6eQ7jNA8Bw8xtxkHgizURiyBTHzfXhHiydFCUFtPYa34nYg",
  "key25": "3jycmQXoPsVVuD5oZgHfNzaxg9Cd77t64DPB7Rd3fgMFHNgJxUGbbV6qJ3LKKKeTK1k9jTimwXsGAT5neQfgCQ7W",
  "key26": "5vSMBTEZhobD1VvpDQjABmgTrKTA9HUnnkdaift8PSgs4ewDyNFxjZgVxej39HHuHLmUkKg9L14EKcoRR5nioqHD",
  "key27": "Nusnk1CStEifqopAqxgb86DeHK688dArtzQXHSEMvtQTNB6gz6RDjE3VxCvdsLes3sepPHq9BGGGaieJFEPNxsj",
  "key28": "5rdR9s1ZeT9buvtAa4tqAXNhs1KR3rHzNhnXWDqNn46HHAuUrhSjtNEgLwXgrPGykwX4HYYjcvpms7tLA1MmdphL",
  "key29": "rvsgtY2aPfjhSiXqzAwFYPLJ6yA7pn28iHYd3ehgdMvyeDGQEjkxNQLiary89XxemhnC6dh5AiAEwrXDkf9scBf",
  "key30": "4ivNXkQmX1VvX5ZsNcZeJrdjkLDKJmS7obTinM5LTeTYSNpQtDe6xLZhR1imWuiYXQ8AGGKeDBZ4DsKNFgS8tVhs",
  "key31": "2i4bCBvbcb5yLCemnMCrCyACLxXcKQQ7pCR6feZjoZ37Eccp5P1dv94zp6z1LdA5sVt42BMG2Zdv68sUCFoTqtte",
  "key32": "zfgdanra61hUS9QWX4omVxnxvQkYaQ6Ek4SEMPhMw5tyBfU6FNHua63J4XByjXPQiJggjyqMMKF3MZvToCm8DB3",
  "key33": "5YxfVWZKSoDTtMXPEAfV54jzpgR5rVfFE8uXSkAnruEt4FyuAbRD8RSo7VgFMgf6RTjtwtTTfJtPFo5Gyux65z8C",
  "key34": "5c7EGTx5cfBHXatK5B95JNLUbMHbfH7Go3tpqodD9zMgTK1iLUHLxrbDBjUHYrxtyAJ2vGq5DBUT8wNbCK7dUM1g",
  "key35": "nZ9dJaRUdFFUz8XaD9iWXhXMPcGvCcYfx9KDg27x8kRute5YyHuhiNYRi465UJRqo8s3kuvakt3bySoEEoBYwmu",
  "key36": "2AiTeoKyhBD1qyqpt7D1b8zavtfrETMs1vnbPS1bYRMnW6vREqjYVejdpmkj2MeNDG1GPVtN4iznzs8sUq4W6bDN",
  "key37": "3MQ7YLTHfqZRm8NgAQhbCUcErQwZZs8Y9PKSiJF1JBTNVk992KQdKENuzg1o3iMtF4L3HixsnWgnw5RPBiCZsdAP",
  "key38": "54mPw7VoGMgk7i4GWPbkdtEo3uTzEekZMx4roo6UTTckq8VLFq6Vgcauv8CMDTxgNbDATd3VkAAXzbQeuVSiyWW"
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
