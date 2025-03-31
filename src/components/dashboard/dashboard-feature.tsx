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
    "wRq5W9yuzzP7Kv9H9JBLf8BYfUVXPGWs7AKpMHP1nrQUsJJBvYFYpsfpHXn24Fs64tHWwKDE63FSSGonsZh5q4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZr6huTyx5U6fC8Yo6mmzy31EqM9JUxRBghGn5xMREUecP94C3mwZ4rcvsCPJHCp2uvrkjxuvvr6iyn3DyUKrwa",
  "key1": "66Pen7sYePWpodiHXs81HFzxFd7uVUaETghEuMreHU8Zf2FPmc9Kj6XoQxEoeS5MX2d63zhWaYsLCs9Nw7xyvBc",
  "key2": "55JT58JGHANGSfdBkpGrgDTJEvYVLkUfFDp52BvQxn4Tn6gm6jicwfHWxhoGUBEPCcXAcyPZfvajRaJrE8KAcBTj",
  "key3": "4veWwcYppcaZDTEnyEv9U2nYXwRW5opbMFK7cxBcyb1BHrqjpHRpLbgmfy9cTEZRhTbqK4RUhCQSazEPxEVqL4zp",
  "key4": "QDC8SWf8HxPKhAGSuqCydnTc3gmyNPMtDgPkNtG1wxQK3kXkQ6ETBuGrjGwHGAFJDyHtNYH8wztCpHeTnBYA1Vv",
  "key5": "3BBT7h2uX3EKNiyvV4mDJuPFR3xc7pmEHsnVNqgdB5EufDDTWM8g2rjQt5r8nqmBqsFY1hX5iHrts8LKs8pDXQPQ",
  "key6": "313RVZV4D9vSKeT1o6fwsDGRDcUw3hfS12XN53hFL4nGztzetyt5MV4xkT5mZKjF2xANcyXXg99h7H9xMC6JTYhS",
  "key7": "4UWQgSvjekfuG5V1BSmzCCyCGuQRkKJiSUeDAeeSzGjwUdyYaEPW5TV9amcS5A6iNrJ1udKcpMHMjLNMBHj8Zfnf",
  "key8": "257fLXH9MqXZEdQEC5PXtnbqfbDLZw7MQc5XdtY5oriWpkSSaeKrD1cyXJS3b5YPMRJvGJpyAAK3WRwRud2Bd4au",
  "key9": "3VkvPXU1QDdJuRVQjoiavc6a7gzafexfvmG59ctXJ9ML28QgTGs3XbeNms5fPbNDjThWNi3P9ZWW4h7GBtyjDuNm",
  "key10": "FM6kFLkLDtR3nGxQV8LQRcUwyWF6QEe7JhkAPX7V3ShtErZh5o4SNkjDCkBbhN78uQ2U7ynMtqrar2BTXTgDrcP",
  "key11": "3PF1HWSbdQhFpzGTjSyG2ATJm9Duf4DLygxkAR1VqucKCc4dLKmRbmXUg6MTZh1Z7gsc5Y2J17qSQnwAzd7iQpQk",
  "key12": "678AMDZiCEv6YPfDvj5c6QfBcUetXXQKAPUCprM4scQUnkiypp7qhXFbUvXqKj1u3wss1s1ow972CSfhkN2Lq6No",
  "key13": "3BWpUTH8DTwNFCgfr29YVrfyr2ppthdF47ioeAsYJZUSHtvVb3h5fZeibw6kRVu2f8xf8jdavw5nqNsByqULffEq",
  "key14": "2WidhWpQu6zjFAJFzUdngmxswGuLikvBH4RyQdz7x4zGJoPRETpdDUxPxdAtvPr3DZSMfLFyWitmd4He56vC8w6h",
  "key15": "5x1utuLwmpuhhMKLEBFTfmN9vKVDSBKmSbydm3ZJkcsGo8kKAgLa1DcbfQSN1q9hyUeEjHSqU39br2sqsLGTp58F",
  "key16": "HM29XyGiCdZNya8K6Qi2mnK6BBh22UMDmhTS4sc78PTDAzuRoHLnfZwX6CbVDb37w4XpHS5rrEUPgCAyMsNseBA",
  "key17": "hd7JkvKaemd2vFAgRX262YoAQyeKK3NaA634kk4QkoQ2n7Qy9xTvgyWjULjfeg66E7utVSUBtRNqx9sT76pbSqa",
  "key18": "2RFdNZZSx7qxg5zBKd4PpikjDJC8nH1sP1nYzpXmP6wHpNmgVuuTsAHN6Zdv8oHs6isEiHHH7ngyCFWkwp9cowQr",
  "key19": "3e6VwxnYiKnzXgw72sYzheZaGvGo4dRCXRNtinzjDCfnCUrooeSDFiuC7PhmDS2ERhmvVZ1WFyckhU1gdoSjZ5mX",
  "key20": "TYzgfMjLsphQ9PL7E3tPLtysCws4AqnRcFuf4p2QGfXcbLpxwaLuYd7YHUGo7CZBqKWQDUH8fHNdzzNGTysxhxK",
  "key21": "4myHQaBwP6wDmieBWEyGcS4Cp5D46uHT4UQQGF1VjTsE99FEZV798HzxrTKJaatTPXwyZ9o9UP5qrhb7MXyMGdMh",
  "key22": "269PvHP2utiVYN32pUzB27hDMbAACxXszqPQZhnjaUTPdbPphf4STEVjDaKd7g3DLkzG9KAHmuwaMYYE3gMwEcx1",
  "key23": "2Cp2oYnjxvLYagB5KMWnYyeRQ1H3SoJWQM4iji3B2PykDK9tKyDq4EcMJ8rzTeP1H2GGyWV1hjRjMUDhYjjhY3is",
  "key24": "4BEBLBczmmox89BsE5DpQchPTSQ2fiH5tcDVfBdV5TkTM4tQBuwvq9JigYbAiZPghVtRou9ZKURXRoNG2HbG6bkq",
  "key25": "5PFN8KDCRVEwK9mpepdtDPXZGVDHozJkdkeJe2SQ9HEnHCPp6UFdskZjYE53xay2sj4nBtSF3mX7psALS9CqQNjE",
  "key26": "531skF3iWg9FhyLjYz2BEMCGTntnX7DztcEw9KKHMZv6JQojpEmTHYdKNrW4E7RA14Ryb6276xJv5WpVmQW4knRc",
  "key27": "5ULWNjcKMuCjnMJ9cGvGPcP5DMvDPpfW7sGJV4fA8nQCXdLbFK4j4StJh6s55ZdfdjWtKJW9GiXqJeXDEXghRDtM",
  "key28": "5fKNja6Rr3QpJG2qY11DNBc5PQ5ZZGoy8SSwXw4tQ8y9idLKdz6k8X4hPtoM4ZQ7i6QPR4q2x9SnspEQByyqjNgp",
  "key29": "5FhpaDZis7n3oSshhWApk6GYiBMjEJtWXNEfQyis6cRhPXUMv1vJT4JfG2Wo6K8byACT5RaFjVTFN2PcfWzvvH1J",
  "key30": "333xkCzkkga5ejohv1eoq3LkA9pfWsGmLL4JzJQhbqVEd2SQgfuB96ATRNExpkhnWJcTsk7s6bJ1MePzh4uaGkK",
  "key31": "55FHiXtc8FYiuwZgWjPUuLtdToSMunVEFJUKGZYyN1Tm5a6zffvDzt9b2xeteFRvkEW1wDDfHkCAQ23AZWXb4UCf",
  "key32": "2QB2giWWTk4ZxcVPywDTB3uZvLQJe92iZTbGfyfy5FQ2L4p3T8FAM4Er1YRbwkXNTRLxZ2en4avG9Fe1tAqkxznn",
  "key33": "5LqxvTvQVHaBFMeiw6tLjoeomVMie4Pz8cvhnJbCTQFeKJFYpsa3DuCXfuQxQGdyZqYVhBLjB3rsMTESamQQvMsW",
  "key34": "2AVv8uaupH6jNaNzR7Z83AMNQtGVcqwNtHnJioenEZbfiH7bDwMf8V1qzLajDyvuBrxVpZCm2nU9cUzPA26ZNGHt",
  "key35": "5q3A4ujGyEN7egRC7X3PL9aiJtSk5MJAmoAVdVFD5z1BQZnUGwgTrcSUHfhaiYMYvcakWQsNrtK4A5poK5ZvU9tJ",
  "key36": "5GBzaENK4YCvtzqajKMMKnrGy6FX2cM5Mz4MjL1cMGYW2VnYavrGp8j5EQksQntJ4VLoSJCHgNuQS7yrJtc1ra9w",
  "key37": "j4ZgJfTY6XFhgVrwXXaF8vxoqAcX1jD93g9Vezj4KMBvPbGRq3T8YDKVCzgTFnSfUnGMYvmxxkko34z5YFr783x",
  "key38": "CEUWqiwXgQcBzAoWSygx9nrbvG3bSHbC6maz17Y7tPNZdyxLQTJgaZTkE9FcZ9PjKTrT3PfSvPfFwH5c9FYcqXa",
  "key39": "1bQe2gTgsW5iEh2XFSCGy9eGZbRPq6uffti17JH3BdVCp3e6Hc3FDbAmHxCXW7PuLYfpg8jxAiVp41K7Kk4QDhd",
  "key40": "BF4k6MZQJMNMRx6uuV3hjqS9n3dwDrbux6k8LgCZ8uqA1dsm6Dx4Ju1JMyTrRGH5qfLgE3GBjY3RZBBNdN8XHgX",
  "key41": "4pryHSsHgMmTRin6pMFYfCmSxfDXRM5Yx52kgwYdaNUUwwPnZxBaaTt915T7PdnorACbhK1SP5z8gqP6zgmUCVP9",
  "key42": "2QzSrWvvps6JF9ugeacUjg7MyjByG91jbYERv3KRsR8inD62PgTE4EhhuJhyPB9kekhMNJ8zMyL2Lea4d5EncKvu",
  "key43": "5krq62g1s1B1acKS1Y4vbHqvSLSqG1hr1sdNrZBFiEd9QSnyQeWJw7UcuEFiUS3SwVCXHppJ5HeG1aE1QjgSEcRx",
  "key44": "3713DAvmegdyJ8S81kzFdqo3jPPdD6z9nh61EYoAubua1mdBxo3VqFatBtxFLk5NFnZkGAtSmUVrGDQso2ahpU1w",
  "key45": "567VazbHSXERSBwgCsrCaZeXSdpRjUXaozz7JWRay1MP6HQK7rWvFaFFArPAF1buJDfACcGCyNAKHfHnLd57QU8y"
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
