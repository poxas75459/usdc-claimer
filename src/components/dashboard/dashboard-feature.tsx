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
    "4tqnofmvsgF85pH7q738hLH6JXPZkrP8BUtpft1Sex8W5ZcCcJcMkP5vVTaPedFMeNkWF6Q6kscHkA596k83BCGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rvrnjLU2W2o7411NyAq1ivvxoxLUsyeUSXFKqfdMxKTes5BMk9GJDPyU4AvxxyneViDRgbKTjDBJpJmHkdGPCHc",
  "key1": "FSHLJwG6THYhTjHVjWdCqQzMwgeiaFjZvNkPiDFh7zt6kQzJeQT9NFx6t7iroTfjMru617jErdkR6K7tLGhTE9q",
  "key2": "5D18ttfzcbw2zii2PT1BLwYqf1hmRjSN6GqgRg9SGUbEBcgHah192yZcu1xLVXJ4r8vThnVaNYnw98bzt55paHEp",
  "key3": "3m1FTwN3FvLEupXjQSPzCVe9hP6de5gtReiwQTygPBDwYtYm99QnVz2dj2D2KaJ4vAS5Cc5kiKfMXX1X8rAv6DdH",
  "key4": "57Z5tKexCZH5jzAb1pzdJd2itxXkB1F8tpt3SfWKJv58da2ZFnh9W13zEWhk17ztqqyrAsvf264umXEto4E8CDT2",
  "key5": "44agBc1fWib62c6Gp4hb8tGUnkd8EtHcnaMjirzdTVXT1vJczEmVRGkm25zMKjZWCSUUPYgWXzckoywD5jfMnPPY",
  "key6": "W4MxrodLzd7t1xRXEwB5DQoHVt1vQxVXwhdvkoQHw779GyMjARMbpLitLKeQptUso51wmDLgyQjCoGxTYC9Vzq6",
  "key7": "5fL84Nwea9Ht4DwZ7Mv9HFhXhxJsbHQTot9b6JTPHoqeLvMp5j8pWALPqpgt68caMBc317dxygwrsWGoKiAAguYV",
  "key8": "5QsNyrfVT9L2tsNXgCrqbGqhKLZr6yFLtq4xgL36amTpxwR8othHPRVjYSzTgvpWjbBEjQLpfe4zHVwRXLUxASwh",
  "key9": "5SspZBPFdp4vfjXWpsEMEAZBGuZU2FfrtVrmXgRPPoTpKReZHNQ22EV1YHW1agjBV4iQjmVQsSTVkFaEoD94gLjN",
  "key10": "5bvEnRos82vLZh8Hh39zQadJX3XSiLbcpDqxA1koiUSPD2YMzAeYUVp2KyigseSrBe4Rp7NTvnZxAivQQcPbU9iV",
  "key11": "nTZUHQEATMdCQ4sH2V2ySBXjRHGcWGQ3Kff4NtMqfPfkE8fd6ERNqzMdLeJiZooggWqWjmuunbeBnsL7FvFBJRS",
  "key12": "5z5cxNPWiAFaPKnqgDSdEWqoqXKEF3tUwmtS7aruHTBNamCKzn14KRKETd1D1BFrXotF8h8n8JH8P12YTXQYFGFX",
  "key13": "2SjmYx11ZPBgeF7DQV6MP2FBH48rHZ7YpNdnSzrWJ2aanLhW29HpZFJJbVG1F1yfPgKMnuK5TRR52KAJKmjtNhxg",
  "key14": "p3RDP4uFCeJxXiALqT4gtrsxCKnM9CfY8kiCXooHaXz4a3P5VKsbojtvAhDAEhb42QxshQsCpnPTBPuoU8DkPof",
  "key15": "2w5tRvWW3eN8oF6f4Qe6wu6XVYcqhfFsH2Bk4sB8HiyFXYP84RqzBm5cZkA1qsZWiCYoGGwcYkNNLNLfhMWGBppb",
  "key16": "4B9k6Mc3YXdy4w9Z8wvwsrBPjUXz2sbbTcNsbNiaZsr3nweNcuw2UvYqD446KfuQNPGN64YLbXs2qvSm1jUAziRA",
  "key17": "3i1LebFyZTMM1PeULJPsEQSX7viSbJux7Sn9nukTJiyHU8HKGrS9XzhTbxT9Z8YFdkzS8GXXcxrB3SqSZy158rz7",
  "key18": "HmbwKj7b7AXgHmLA4eu7ypxFLPEox36sdVZbjZyKSo3HEBeXxUvATfAH4Y8bFfB6TgvSJG8EkZ5iDQHKvYCBR4T",
  "key19": "3LDYKVmDb8CVmeL2Sp9KAf2rFjbH2vdvhi5emXTt4TfKmtEr45xHzh8m2hbT6HXZShq5DFRDj5Boxd8p5DKBj3wX",
  "key20": "4yaQciy4iYkamu18p7BkyjxwpNgWGG5FSuSFB6pf2oxGBTogMHKco5rnrcwdSCKzAW9YkkYopWUQ3UdQN47DHZZE",
  "key21": "5aEZuqCd2exofF12d3wgbcBTqBo1HriFTyN4BZG67CxV1E8EosaMxieDF6hVfhcuDafVjQL7hibt7G6peb2q9EZg",
  "key22": "3Y2NqtgZvtu6HrrgkY4MSnR63rAH7LCpniVhLBAyk4HZPmzs2d8K58h58xyoSJ6qPhQnrpw4Cuc4EpnJpte1h7mD",
  "key23": "4L4nNbgy9V1485A9sD52Xd1vQTUbuuUSQHGcPFegDW3hCsMfB8ZKBMnBpzFbYiEpRS9gKsE3HPwtJEQ7MFBdoDqm",
  "key24": "4anWsYDfHQFk7kfrfz9hmoKPh2UeotYwyH4HrSucxLAWaGPept4zxdD1pp75kV4dMH7nuN5Le1kRRcrnu3iZVhG4",
  "key25": "SiGLritxXiL9D4amBCT2gf28fAThpgF29Qi9FjJUaXscFQRtuax4uPKePtFbtFN4pcFCR9AdrU4S7KsKHJSaeyp",
  "key26": "3qau1UDp2f57KELY3FpML9bRk9hP2FaEpYbkcdpZW7yaFNQYJkhLHihyrAyqWRSYWuR3LoihrjJbtwF47yqDEneH",
  "key27": "4bb5PFgKiNHkgRGgsmBiaYXM7G2uwVHfhi4mHnuY8oY5qoLMZy8NE1roqpFCCTM9Q1iF4bibBKaaqjqBi9CwbvVm",
  "key28": "2kWfVzvgiiyA412wUNxM64fhR5tsdHbFaVbQyhN8UBCQkTN58MrAdPwXXPp73TRR9TYDqmgKpR4rw2QNnUBtvdPd",
  "key29": "5TqRSiZnejLjmi4mfZsiyAeBubjcGmnTPMLNQPS2xXT4apfjTFNrb73yt6FB6pYUhsmoeD2Kys9K1hfZYQJgVMsf",
  "key30": "N5PUctgCNX2nTrMa3RMcCnxZNh5g9nptrR9wTFYKfADqhfUaGiospQ3zLAaqzeJrmzK4bMCvCx8VARwa1KyYAoe",
  "key31": "vEBASZvZSsWPTdrjjfEPv3WC5QhKL2E8bouxxiNNQg9Yny5VaZvQXFvEdi7YQhzMsggLF3vmygYZxkEda38Ep32",
  "key32": "4QKgmxreG9z8CbGx8jGeot1gv47nCba5uDDqFq2rGUvaZdnqATSdh8KWVJpQV8CpsMRfaun7QNg2VM8nu4yPDThi",
  "key33": "2E5LDaGehZsXTuadUWPwddDx6iEqZDNGeaj6goam7sFVR5d9wzPcQxzdhVhmsVdVUH3MmfZSGGQW4QG8q1uqJmfU",
  "key34": "3XfN5DVHbWr42bJoEb8S4PJuSYqwwLTK7ytjnUKT6qVX6JaYE2s6Q48VRVsr3MpGSSiMRUb9Tm2DYuyc5qKA3ppn",
  "key35": "45Pwc95z3WRx8AcHa6fhCtuxRuCKz3ziMDWcEFKK8hGiE7irP5cmSCA1BiTUFd94gVBC1BoBTLq5SQEs2hTwtBcg",
  "key36": "58sE372VY5vdpBmPCjgHE18E2BHfiUpzUdfdT88qd5FMYqay2w3krv9V3qmDq3HRq4Mw9rZVqvJmn4Ph5UV4oHcR",
  "key37": "3zSQfZVZJP3crUeEag2c5L3GtxxrLWFApkVYcDoLkcgBBUvS9BFYBvQGkjtjKa4xb3PyarJ3ewPLWDL4mqsexh3k",
  "key38": "4CGJFQJLnoU5153b8UDDJ8aL1DqUAHYfG69MYwfsScinM12dHnL1pcjbE9gNwZWx5YKPJMFp4Tn3rCq5zRcZCnJY",
  "key39": "5wBeAsW7y391wGcTbk9iUkRp4BQj1kWN1to6oDSR5yEzKHqM4H8hKWZDC19oNU3gH8wF8ZYD2344CFNViUf4n2a",
  "key40": "5CyfDcBoGRnwChvcPALBYpLw1tuatfY637fh7c9Tf2PYTYyxiJtSMVFWNeaPe5Q78XaMJDhVaJ6SEye3g3qY3brx",
  "key41": "28xHFaAXhZh37UHWBUYQKu5YzxcFCfy3USoN2zFupAPkQf9e6RxnnqFT4XJXNouEx1iVz5sC2b4apRAmSwZHgG7q",
  "key42": "51eKkSnvSPvd3XnkHKdw6r5tJJHsuXMXSWC8HJGPSnPu5ViLZhcDM7T3zH1pqqy5GXnYAf6qZ9xHN8LPj8vPwoyv",
  "key43": "5penXcX9G21sUzgV7NJneBKSEWAf7eV7y47bTMaz7sZXiXkdUMzQWFGuNucpcB5gsNvN2BqqsAsDmH9fNgWgEXKm",
  "key44": "3J9qPDX6DKzV3myQxDhXA9Xy3KzvcYHj82LMrBgfREGf6QojbCZdgyxMtmSvasms8g8vvKq9jEohfUDyjvnUcLyt",
  "key45": "2Scygw57GDXWzgcpDm7gZwXUmDNsVqfU1MQxn6HBXBut3g8UAWjnWLDhXNJQaGzvazYFK18asJEf1NGsJ59NiDia",
  "key46": "5gBdUqnZVFax1LEsdLL6mQGwrpoQ68QY1odWTrkKou6Zotg7fvU4R3LLYtMHpEo7NuepPDiW3GEjLMhdtKtrnQ1W",
  "key47": "5Ko9evZRSoxNBZb3bnekU3AYPTSPYN17ewxzApJ7uiMvoyrRLiULqmFHMjFuhXBz7ViwaZbd6JqD65RPJCwHJ9yg",
  "key48": "59EKNxLXyujqJnzB2AQL9UteRM8rQPfkJoj3bJNyQ614EYTDzLcRTw7HYy7SkFudeYHzDeeYR5aLsHotBefqcgLD",
  "key49": "5buUzokVSvSTXbGhfgzrkwj7f6YkfJuguA5DFqqtuoTZtFowjd2d3WhaJXy5x6egu3iEY8P8AR7N6VqBVRGkxny6"
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
