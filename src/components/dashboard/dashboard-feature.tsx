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
    "3NA1qyW8LRwurf9iPtR85v2jSi82fFX4wJp6gjPNfekX5gE5hKxZSP3A4sQwRJVejR6r6xNwaavS5jPqs3zdRsh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "383mDJdtoFPmU9nHzYFWXRmZWJiguztNjtBfbhN9izrpcfbutGCuwYGPRpoSsdqopy9TGyyySrQiGWHhKWbgNzaw",
  "key1": "cmeLywCLkD9QVL975Q48Ssn1t8YShh6FtAE5S1mocPj6WXJYY3L6VwDDKzQ7boiGX9X8ACWwoPCx1xBZLzMhFS1",
  "key2": "2Rc1oq6ozyza3ijen7Yr2cK75Mjf9fZSHNRo4FBht2GLL5jaFG77bmQJgaiPe8ZQJW1tuESXvQRMrmYns2DHZTrt",
  "key3": "uxzeBWdU3Jxgm78HhRpnE7XYjerQuqEePtix7Fyuw9sT1pmpQmzjVsVKXvnd9V2kMiony79H3n9JxrWQ1vpa31C",
  "key4": "4BLXCvNFkV3fJpPVUSZYmdon9P2fyLxXzgRSG8Hros33rCW9UbCw8xy1r2T9FS41nMNY5zERDusrnmNhsZ1gsgQ4",
  "key5": "27cUPVBshLWdKorb5uTmtUgMY4Yiiid2Ck8VW9zfNVwiBt79Wg4bU6UCCFMfEvEyPV2PvyXz4w6QstQw5jjE7aSS",
  "key6": "dmomL7tuXTNVhxPRsFmZj867nw89EnUtdFWAhA3xj1er2TYamRwEiW3PsmSBWiyWPddnqD4qKPidgSZGe9kttBA",
  "key7": "TFULovL1jeHuSk9j1vAfdnTpXj6XLVPZ4B6sEgh76LWMnNHQ7BMzg8UbWjSg2C4mG6vyYvVQat7dC3cqC4Mqr6d",
  "key8": "4DkG2Xcmf3CHvHYACYuyHg7BjftkVoVe4D7uE51qCLdH54yNBMqzUdXcwzEphH9DY8QTHACjzvqkb86a1yM6Kbqp",
  "key9": "5LsUM2cpK4D2919obsTaFfvcTyHdm21tM3p3UQcEgLDhFQDNFHJgd96xdQh71FwEnHuFQUcMpu3sW4tAoDLGaJZZ",
  "key10": "59fD9RPyVdgsxYcjnzZdMfhW3c7WUm36MpriVWZKtEV3AsLJWy3G5n2ZvQ8om6edhPRS8omLPmHJXRhVCruSmqpj",
  "key11": "2jYXrB7htcDmxN1QyHkx7eQEQJ4obptVgcCpAeCWR8htYUCBeQBBFmr2o5AZrhGojJfvQNURCp9DiP6XCLxEGfrL",
  "key12": "3PhpHCvzQryoynZR7LkEVpEUrAs2Ede6xA9QoFGhxhHwDo9TzLLFPGGdeCHWLuCAQWFLNYq5WokKWvAg4w6NcFqo",
  "key13": "5nBAUZYWZCaNr4tf1WaKkaCir75F2c92PtkJaEZq6DY72kh1pQsqLng1AZJ1gkon2XscALeHDQyMP2bS2kbQnLmV",
  "key14": "fuvisqLKZkrF34P9TM7TGgSiUuGCZyBA7QvHdQ81n8m7sLUiJqDgoLcvfWoxTGVwxSgWjfs9KMSmeerzjPL2kt1",
  "key15": "4N9QwMR1nAvtK7AHkhWGk7uWBFoc7ZsX1rpvrnAu1e1CW3Mt3MD4hVXNkwWruKcVFmHnP69r3ksM5KExhosmZ7TZ",
  "key16": "KDE7k3y2rqNAhrUUK7BXehBx39Gywb9gENmfF2zSBgk1LYd5ZBTSRPi7gk1zapM25q27dXdJ8Xgi82zRLxCeQHN",
  "key17": "4FjHKNUouHV2Mz4trHMZt8J1YzU9wVK2JTUmKQEnS8GWzCfA4mRU7GcLCMNP1r9V7y5LQ9qdjsHbT2JAvbAs6GWE",
  "key18": "4CJrdq16KfaZyJbQFp2du2xJh8HXkcLt7YBca9m6RNwFZ5Qh8dKrys4Z7NKStQBqxtPUvM7xLrxq3KFeJgakuLap",
  "key19": "5zG7Vot6PBsCyn6SdRT6L4Sjrspskp76z3Gcb5qquRd7RyRhebXWw3yw9LPLYvhjivuiH8syJ2qiUt2RFe9THeeM",
  "key20": "4ncSGx1Y8P5gWeKNxbG2WFCgxQg1uqogDCwvLTAhdp1pFsyHX7UcJMFdGcH1PaWuCWVpmhqHV6QVScZkrqZR1Bt7",
  "key21": "5PZsyhjbzfxfAWa4ruveFkhsSS6R7dEeJyVmEPMrkxpgEEogqfhuh2PEVaxAuoevVeWfdeBdvgPUUkgtgsmisiVz",
  "key22": "126mNbTYanMxvq7tSeoRSFddVWujVznQhjW6PK5PbvVUy4sgfXasdMjaGp2D2PC9QCm2zLoBHCWTbAdPW3KMVM68",
  "key23": "5HfpMvPFUDgfUkWMrF3HDo2zzvnDBSvMBCv2cLrD9AYVCpspVD5nJPkkbkmMcd78uUaZHJP9mPRbvpJNYAopxnyt",
  "key24": "2FU1Rnju29s5UVNidKxYMs12X9egEq2JhRYk19cq35JizJzgBbStiFDEZct1jXdEgZmpe5CYnqa3pVqijyiVtMTx",
  "key25": "2UnRgQkhvSnoob3QL7eVuCAyXcJimZX5etN4Tihn1mNcvwBocNpHHcpLnecyY28WV4YF8uvM3TkyWUvbXNqXhfdT",
  "key26": "65YkrYPvLRK7fzuoS4dD9WCousJ6uxxsV85YBGFngtEn4WnCBNJcpWsTeRcTdaH4RVAnG7CSNnzKtuLxqgrut2FS",
  "key27": "4VjPSG222Wv421YvpkVvkNFRgpciesFoxhT7ng7iabYaRKcvRXdiUc75EiLschAQPzqdN8EuqXtwECZDWEL8uqEs",
  "key28": "42UVAiiiiPQRV7CP8qR8TWudSWtCczM6c6s2fNae39jQpqcLsXDsgvbAZbJzSBr3dYVbd7a83tPqzpmdoBRWVdfp",
  "key29": "5hF5gwipboBX5H6cB4wJ1h2Wr1zkP5jrgRsBgBFSKjGiJ1BTWpRa7bAfRu6CVSq496DZbjdYWfz7iUsmUSExMWrs",
  "key30": "2zuNZNYGJtzuznXuotRtJJ15PqkNZba2KK1VieBecVTfMi7XdLvqsyxsKquZaoH7Ve4DzNJ6BTFQhLVzK4CkSj1S",
  "key31": "3hFJCVHpyDLsk4srBA2DoqN2yamLoZk1LXePB4u2sc3o6QCtKzTxUic1xwXXWWuzCH9vapY17QcH5G6tsQvpNSTy",
  "key32": "2m8dKfeWdceMG2XeVBhYZwXiKTSY8cWVaxGMmjdnd15jruo5pMzLAes5UWgD4jyh8dAPGu4acrykvsf1JvLMspQi",
  "key33": "5i7EcuHSveLBRuZeCjdvxhEVwdbH8p2fXQ7iT9pLGkeJiWQDf6hDoVTioZAk6QT4GFG3Wz1DZnvhiT5Sb6wpnUh2",
  "key34": "2DrYYFE4MTnAmKBLQokNxduVo8D8rJyCeYi2QfHnkL7y2Lkn83rtfPpjHEJRRpvzrW9qJh5oiogKnuXzXdmthLjR",
  "key35": "5QaCQEGM837q8WXfigbZ1FjELcH1Yt5htTyHFmP877nWo7QUo9f5HxLBmV7w7mL2Yk5VqqymWQNm8cdYNxvjiQ55",
  "key36": "xuNtY3gf3x6rVuRyea1uETCXyZD3SBcvMTBUDwwcZPSqnRzhBHKjpH9MKUCDQWM9igpYL58aQksaN9L6AyJiFtL",
  "key37": "4ZUJR8zxWg3js1yXMHk3SM2MuZtQ2BDhobxNZnYfA5Rf4sAVSiHeUqEHLavmeFK7K1Rq7xYaoRyorwPB244EuZwF",
  "key38": "3xnLN9KG3mEZJqZdt9SEqCHY6wveA89anx7xNg7dTaic2NXcVjF6Xedc9siYALSRLGrz2x2J8n6wnF6vnRoqYAgU",
  "key39": "48PLYxewLv2P11ktL1VrcZBrBiUmGxgYA6Y5gwPvhTAbBDw4Xs11xRNCfTxyes3qWdBW4dFYLvk14nA48srHacLc",
  "key40": "57LpeAXpQ2SD6PS5FFt9wTE2fgcPirqJQDbzEVU6hsuzqwbV8ig9bPiFqEQxigSkbfxtnczrjECbWkGJQ4k4N1bK",
  "key41": "28yExgH7uewV9sQHoP5KdiXhjQGdhmv1t5jVkjTz9Ab1CAa8PF7iwMnnh2JhcRxsqjTxhFuKyeWrSFA6tjuBn7bi",
  "key42": "5jgJCeAM9Zw9wfB5BeM2AqYKBpg9HvzTt94UfRidHd6xtxCdymwRFk4VMdZTZ1s14bP8gdneKKqQWUbmZn8ewQnT",
  "key43": "3bVup3jqnBar9pHaZhR1ueGFjq6NfnbAdb9ZXYioMbzgKUNnSRAm3UTzTSvZfF6nvKQihBBdBN4JNzKjPXE46LEH",
  "key44": "4W4Ucz4p8moXjB7JMhi7HwvEuHCaoGkcVwP6XznCxk7SvJgpAu8yHZYyUnce1dS6kKrUdviLouQhpiUfY1fCTDuh",
  "key45": "P1qzCvjp8uESY5t7zSbc8VqanTdxEf12WXPo2nqwXCqbxHCGkncGfGP21CJHDBwC5Ue7YEV6JBh27GkpSQ8ZZzZ",
  "key46": "5Czz85SSQecLGTkR9supt858qX8qeJiBqXUW8NBz8vbaTrZzhCdTmqjo38HdMJTT9qLAhmK9d85WmbnTFZS7mua3",
  "key47": "4BmM32MkG6Z37EqhqYkejuo8K7Tpsij751kQ8EAZg7c6soXj3acVQb71BXKdwHKbEkk4j1eeMB6ceha6nohnw8G7",
  "key48": "2uSyWmEB5vyVdrF8hAKgtwiLz8rzCEQ8Vjf36wxTJE8YjxNCV5NiskJDji4QQ788mQTktwifuUSs1GHrAhhBTn2Z"
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
