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
    "yQYkuM7DE9pPzxx5SeMewpb3Ds6okA5ydwFLQNnhMU5XVffJep4gFjKZnergxzFovTErfNRp44Pf6tizwua8okm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iB2o3bozF8b6mxd7pdm7JkZHTPnLAHq5DUeiJ7p1qS2poJwq54cpTwfyNAm3k9i2RPemt5s5eAPhKcAVM6Rw5mB",
  "key1": "WtmZSknvAvHQPgb3ZZkJkdrKkkbzLgimYu8EEbw3dXhrNTMKffVzkHNKHfM1L6Pg31ibGdgv2Qw3QdkdmQeaHxN",
  "key2": "JUX3W55zHUpyXNS19ctA8CXsRZcUBFBeDrThzpQE6RXyqVAscFnEJ7hUmSaiDXBict5wPqFjnzy4t72eNNKzcay",
  "key3": "5Ruogxu5rjjYaP4zYBNKE1joH1fgdsjATLvWrgBDfL9Gbs4ZhQB6u8aEqa9Kc3wPzfq4D3A3JS8QvF3SdT6hvCnj",
  "key4": "4NkCDLdTVtL5Gg1EdnCRqx2Mc4FYujdpwrhJWk9T6reRYo78ypkaLxn9So2DvnSxkNHeTARDMusYE3mFkQtZTp8S",
  "key5": "3bWQpxSjyzYxDaZwXWLJRKFCrc32MXY98xk8Drje735AnefkD1rGGxyprGu1vSiJZFZMnpsJ9F8f3r7KUnu1sAjE",
  "key6": "48RouoCnBhczgQxbK7twxam8nihAvbuEpNXXrp5WBizT9Gj4bSeUcGBgD9PKcJJg74rbks5Jbhzva1SuYUb8ZjmG",
  "key7": "KjhJc9bq8absEgpNHBWVrdUhtDnjXg6vc7ZHKBp3sGRiNp9SjJzep1ZH4uR5yk9v2JcanpHJs5Ft4N99QW6UmFN",
  "key8": "4UPtQ8JBvSb8iHF627EsXkHzsgXUnsS4PLY29GqqGxKmJHxAXCbRdUrXLxqsJfEjEcXEUHCoScM7kWg1VbzJEiFq",
  "key9": "3tpeCt22H9Dt8tXm5vsrTdBfyrWRkUru4L7s8rm5zWmhAky9UqVkRBi9Hri5joYC7ZJK3qRsTZ7uVhzFimo9XnZn",
  "key10": "2g12jiWeSS6Cx8U66w6f9xSCNbgTBC6dgsRqttXdRHfJejyMS6XDHZwgWmJfmHzYVRWURTUZMvGiwZdU3mHcV2i2",
  "key11": "4FarPQ5MzCmDmqeXpCa2BMtqnSjzpEPDJ3ta8D5PY4uvW5LD3Jmj2e9rrUnFmEK3sq8S37GRikLpDM7WCV2CrkMz",
  "key12": "5Pg6bzE4m4Pcpv16wABPHe1BX4KmymkBXx7oJViPqZE7zBpC3Rf82ToJZ71p7K3bCZqNPU3VhLjm3KWEEw2eg4vx",
  "key13": "2BpzdCEj2uYZovqXz1gr2RbQzCsapL6ormVJACtiQLqnmMEeHBwCfvQcUAkhVw8qdGrQe3kJSauJL27ZH4ygNEuk",
  "key14": "295G7xKNQgkrgnacpva1NzJ5DqeS7mzGbnUKBFJosEaJGztYhCLqi9z3Q2q4Ht4xvNezLhA1N68evtQx63ujQw3P",
  "key15": "4myvXLfp3mFpAHL6rAFwDBmmtCggoYgYM53HFYvBBsVNQNVQ97ij6Ehs6oDfvG9qQvAsDqW1Dq8G2t73zjCcfGEs",
  "key16": "4hXznJJ6UdC3FGdoWV6NtvpwYq7PkoM9Mt5qssjyLMTp2KBNJVBfQWsFU1MaFi7bxx6Q4HirLo1J1tposo5CYJ5s",
  "key17": "4pAF7RWcohFhZZx9qAQBmeCrLMZzvkUDUwoW7fRojgqVWVZktg829snkdgYvNdRMPBHK22AJyzqHvTe1W3bEfDzK",
  "key18": "Z2URx6oUuVZDUVFYYWgc4dtHEjqwr5VeC6tbbCrQXV6xRaydZH4RBPovZ51j5jgunTrkrtBtQ2vhx54H9FhpEcu",
  "key19": "57maDddo8no1wjunJpYysW6p9rtqJvsK4zcyRAeLtNSCJiBE7GX7vJNvF4AN2wSCbpYXYgdKqCLCYPe2TWk8utYR",
  "key20": "5en1njiCHJiDptXcFtwg8dehfr9N3Tv5kwxvgLmgAXQx4ubp9kZSmqHLDcQ31mjse4pqbt7V9RNQD7c7cvyMtSmC",
  "key21": "4Tw2HmdQEjHTKDVBHWDvHLm769JKB5vKrBKJ3aBzr6TVvvQLZdLyK1NiRW1yRsjadoC2DeSX8Qx7jxnjBkwUHAgJ",
  "key22": "pUwYYYLXnJVuCA2259yWxCdyanesvkezN2mGoPJVSXioaRpvwvV4AtcC6HChNeUuX3oJUA8vReRBxbeSYnqd1av",
  "key23": "2cHJSpwvyVUqLcxqxE1GndNqFtWr4nAVYvheMyCNF5mFSVHXXLkZyov7igtRamus2564AzHAr6fF4otKJeWNF2jR",
  "key24": "4PEtDkMsbmADn41cvJybXT8RmAqnqMnWNcwSk2JVjt993CJb2V5d9De9JJ1JGUickigkZNDY2PThQ8bXoAF2sJT",
  "key25": "53VFYfMBsnX6zrZsnjCCW2mHUByetQtSHnqkkXMKiFQoby7kVB1Rioiy3EBMARwN4dNVv5nM7EDmnByjo3uyrFga",
  "key26": "4jSmirVeap1Uie6GbJrJ3u2BW2QWor9TMKexmtS1f4hYQZ4NjsnkLk5aF9Y3gwxojSc3C2CfJG7deA4hGDC4ZGKc",
  "key27": "34jaFAKsTSxJ9ksEHHi3ZHY8zV7GYz9De5w2ELGpxam7LsUMEuTbNuDLSJHZtiA9Y17BbvbgZMWjeX9SWkhTNSZE",
  "key28": "4W5CtWsyz4dTTnduxaGB3Phykcud1WUQ5WszUwWmpWt22TFgLcQjhQLypuQFcVrw8qGWwAyd6BWmwyJQDwYLaac9",
  "key29": "8CgihSYnSGRieXExVtxLWBCUimx6C2hRorFq3FXAfqaq68GMMyXR9c3nqJFQ2wA4vfh1tRHTEPoLLnFniF5zgDg",
  "key30": "4Q1xCZrjvSwixjcw2R9WGXx6MSez4yBg3AypEq66Ymd4rb7Gt6RR1i5BbaiyHUzfc3pBP7rnQ6k8PEjTopgtrc45",
  "key31": "xh8zwP9E9qaAnRPjmjGGdLYuqFgEiWjJXoWY39wfRwpihCD6nKK3Q3NjcdVn2wZU8SbswR5any65RFCzEBqCAiA",
  "key32": "qZxbT9W37PCTsDqTTWZBrwPhyfdc1hcgYzUikVSUzJgXCKdnGWvAxtMRg5bvtfpvswNdsGe2r8vSBDCmwhv4BWn",
  "key33": "BpQeSzacMWf14Udoib3T2gpySUzFxtHbCZ1kEQCufBf7LGcuy4syPDTv6jaCaz84mQfMpELcatmZzh2mZvdiPtk",
  "key34": "44oD616kACNf2ReqUH63UumWQxPb5YdtaM2Y57p1exQXdxAzMWasnvSSyg8P5ZM2yoS6SedL7YyrXnBn6gT5PEcu",
  "key35": "91vnCaCyAmznJvzC3PFromyuPgUGwgqCjvhwPYycfQR2ste6GJNYPV2bsy582eWWGVvK2cB3JfKfqVnXW8m3iPa"
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
