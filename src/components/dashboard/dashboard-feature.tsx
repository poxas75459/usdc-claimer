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
    "2RyjiMTWWjmr6uKdx1j9xNAu5QpqfT9AcX89CmqcsJygwja4kaTBQwm55tVTU2aa5VwPdUejEdb2hUQBGcbtY98K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47MHteBU7uPMDHf9qGhDrDiXreFGpS1kAcaxgzxAGjC6taRv5nzBmZXn8F2SNTeaW6c9X5T5TTK78tSSp2JWG8vD",
  "key1": "EofxcBktNxhbpu4BNKZpqni1gW5zhFgTkiL3MQmo7U6iJUJQwKZM24U2o3gon4JaAnzbfTVRpjPre3p9mke7xHd",
  "key2": "215Cu2rq1bJWMZYR7AvVNgzLLrvt6ekRWKyvC6eBa5FHHsFhphVG5WPKV9Gbp9unRa2M9dpUKuAAkDg3aN1K5YGX",
  "key3": "29kP2PrAKaMXMToJkDkjkkBrsN9CDrpfie1F7PWwpmNj1aLk74A9b73fWvSenk9eTCu3x9SW2mhsGXjWnhouw8j2",
  "key4": "5shKdjLiknK6MZJ2oPzAVBENkMKWXHSsQNQr3w5ZMMfJSznKteVWC2Vf1n2KGnwBBFRuL2DPAZpcy4QnB16WG8X3",
  "key5": "7sjJx3dzPXF3FcLqfKAn55nr6EYW9yKvkuaCTzA6oTFrCBF5bARLMSaMFxyqSjfVb4LSdCJHNdpTBYzSi8yQ1bG",
  "key6": "4misCJsH2uDgQWPxMHd49F4CzsSkJaQcuj9pKRwqTTWe5tQuTVnt6HhsDGRfasN4RcYUUpCUgZiQxjTyZCAzwE6",
  "key7": "4N6EGoTycEHhqDpyZVgtejyyHXibeC8uguJrF8ERAYTWNqwDRXBbGv23okrMPyZbPbSc5x1Un1DHyma24L3mV6qp",
  "key8": "4kR8JjVJGvNy3SMTv9compyA8bSSJqCFbwiDW5VE4WH5Z1yM7SpdCQBx1FDjgkSn49VeBj4RNu787urkLoiXGZiK",
  "key9": "3345phYcMAneW3hSMaB5ZT8T4F5QbJ4EUKtd54CzGKDgMVxPq1BrQVtuYByxaS66FcHG7GZZ2X6HmEP2zHYxR1b5",
  "key10": "4LMP86LCcQcEdRkaaYaQeTPn7ZCvwayNJbZh1QgUZkMDuSjDC56vdT1B4hKz4Vnzacp27UZbZ7o1RW8pC18LwCkx",
  "key11": "5K9GURHuyjDSho6DuCBJs7TrYRpyXPbKySB3bmovcFtAVbguEdwA3ZarGJxMKt8Ue24Kz1QKqpjtvneouGo7GSuf",
  "key12": "4y4ULFReYvgHaShgMLd7kBovVBLPi8J35LdAusEgwWvDEELbkkvL5xMb4A4uDxa5VhnzWtiybKuCiGThjo393sD7",
  "key13": "4xRQbxA3vUaRC51b5hAvBacdj3ypP57diK5GAwJQgHuxCViksX37bZULDNhtoQtPdsJViH8A1mkTYqnCnJgofR11",
  "key14": "2oHK1wqFjhagmmdGW2TsHZ8UFA6J1zV1AE9Qiuuux4mqZ38LPiDBVZxbbdw2sMjob3jscARiuCdRXE6fupkLb8sx",
  "key15": "5Z7NtH4rEPdYqYezQ5MtNcF54CdsD3ZYbhgzKoNsJWWouLhC8HDeKNGGawdH7P2bW5sQUwjUCo4BHn7C2natyRQv",
  "key16": "5NoLgrKyZ1QkXZKpwktJZHbFZ1pCVMBaVXNiPWcovXZzWTMPQx2iaHeXT6vyErbkgzSpoKsq619SPvmjFJcAxXeA",
  "key17": "4DvgEaGp15LTxr5MBG3guybYjDedVUwL2Qs2pavSPZqhSfWrRok26m73RbE6F8gsVG5gT3wCeerG3EuoVzD5buZC",
  "key18": "hmtPMtSZAuzu9LZSczzpZmHqp62YzPYNoXni6J8pLCQmisaTE4tf7LqimuXE6UgQjKn4LQMNm5hxmRQ437v3FJZ",
  "key19": "2YYhTkUTnzGNAdC8q7syXBYKkqkYuTs9k4FH7JVdR9DMt7DR1M4Cd4J88HfDzTegYYP4kicKGdasbVdaKPUvrcxT",
  "key20": "64pAVeZg1pRraLeTM3rbc1NMGtTjA6w1gZ5UMfYbnPgNZZvMakCkoVeHK35AwQN8YqcWrmT1tPhbcxwNEFW385zJ",
  "key21": "3qduxit9meQA526nUJW2W1GRGvKvqvCc7kJMT8gYiX41BaVxoUsnpNdDZK6my9AmhAERx3VHSgc6zAGDsTCwxhyS",
  "key22": "3jHsG8T4LZrBe6V585AzLup9oNXhfqjiMjPAjemX95XP5TbmYU9jcrjMjL7ouiMuSxBkxxQ4jvfCc2REZeFh1mLY",
  "key23": "bQDsPTUhXcejSYvAtrFDR47f6xi2s97ZcJTbfEaomLX2J4MFgM8Swcq4shGUHquAeriyKw7AvB1d91g7tugzucK",
  "key24": "2XxgErRAdE78gTNSZBvYMvBPMEYNHatza8J7eRoY2rM4koVVfBKRDuKTWKWSqexeMF3ubmCieCwa9iQg2ZhBnyYE",
  "key25": "2uqmAXLaadHPcKCfZq9wQqCKiYedU8kGyJEJ4BtzzCREFoQ9cosdqf8bx59VHPSvMN6GhCeHtx8QsGuqirtnB3Lh",
  "key26": "4T6HVsSNYpy5bLurcdzepeqHctvMPMMhnSJNVijgd68TxNKgD4FEP9X5CzufAQ7Xy6yjRLJ8s3gQtaWNqx2wgrqR",
  "key27": "3pD6iFiWxB3odPapDvzzR2vSBSsZNVL5A2WS6WU6i5UgRUJi7JHxnrMBehUtcZBfMuyX3bXx73DvBrLiXVhas9jJ",
  "key28": "2ERzix1YqwGSqhLir1q1HmJxFDg6q8NXwJe49pLEwzvYgbk8WVa2xgLJcVVGVh9X4wNxJe66gGkMZFHjny4e9A33",
  "key29": "2J2yjd2pWtKzSQSuMQ8EwXJ3bX1zAhAHYR4hqPCTV239QvXb96SnJsGPZgKSrmWKubD8WKa8PHrSDEgRpm5GhvtW",
  "key30": "myRkgb6oMRcf9Qpc11QYAdGcJBxWq8soejuxf1mLuXLuppV4oUPsSyC74UndfjRTsMQSCeBKGBmS4qvUAduEkFS",
  "key31": "516CkomZWnhaK6veQ5c8AoPnC3aixLDdMTv8JWaTLuZm5jBjaeQzRv2eUWob5cf8qua7r79q4PFwB85DSbLmPsbp",
  "key32": "31jFYLAQdayk6mjKmhFiKSCt3ivp74cbwu5K53rJva5iUq1DtZWRsysh42RP2LiNqiPdvcK7mRS8wLCrZzHsCnGf",
  "key33": "21jFnp4uLdCYiLNL11PYRA6kVFfhQsGwbGQeRcY77o7PdhkEHAw3HxqLpmDkrf4wHtfkcDkjHGfgLGy47bMZjqjT",
  "key34": "4rdtqAcHErbYVP1DURFZtxjXbjvGd6ZizES4eC9iVXSUP6E2vH7xjWE1ASazG9oYW6jWRiEXvbyKqc9tp4TqzLkk",
  "key35": "2pthZRwzwj2EtcrjsXotEoVoW8xjTaeJxvJjm61S1hYe1WF4sfhZKGWGcvwTk3V1GA6tEuACxgNQnXSHSAMBr7LW",
  "key36": "5EfPynGQ7Gt3xiU1XLS1nmupd3BzF1k4NdJTkQ3DGe94vtaHMByF7grV4rozW5kRant66TyCsJvHav9XRRbjriR2",
  "key37": "3xrgzmTgPHnA1QhoKU4w4XJm3ECwJm8xFPxFcoE8goxETekzWTzzGqgyG8evDNMrnDCBUVMMbiB9Kr33CXCFxib9",
  "key38": "wPSCzSv1PPj2cYiX4WVgdgikkoYxdRRL7xVFFHsp6WwX5UWqDRdWu3Y3im9Y3kQobq6VgJBB7RXX2NHborakq4R",
  "key39": "2bKq13qzZ5rHjVSvECDmX8W4h8T3mZ9VSFoGJC8E5JxjYyoPMoCdTTBnaj1q5VCs61vm6od77L2ascoTXFBR2GPg",
  "key40": "zZCuidjYGij46MA3vobrAZBbkspgxoMYAFXkFg5QfXMQP3EDLhtNY2Qquxnk7LewCJUMqsyFNTZiUm1MDnDNTfo",
  "key41": "2okyCTcDpXYgjn4CyXxd4MMVmdtKYecCQXiddbXDcpSX9t7w8SQzRsDFERJReChi3xhC2kRw9jk7w6VVY35QfF5m",
  "key42": "2atuBGyUHfYVGJWxR4FGcXK1YmaMampUDKsxzPbGP8A9bTdzVRn3GsGesjJf2QZt9H4UWj4pR4dmvuCDmLVqep7N",
  "key43": "4QkJjJy27s5K4B2dsf2BKQ564AmgxiZiHmcmqqpJUoAGDVaKXZEFFjBGFcS88oHNGHx2ZXCSZLAyNXjccmSPXsm9",
  "key44": "5KQsTBTc2P9knrAYBaGSHs99cg2oMLukdMG8gfK4qYqw97a4N3ZWd9GTJA8bFkSTDKFfQwaJ4EHNASK18Fd1UuDN",
  "key45": "37rmtQAE9uF4nMapwETFk4s938amLnEygTgmyRZJmCwTDkTXtmK3vyY6iT3KWFGBM97kubUmEHZQ9vGfyfPGCLNh"
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
