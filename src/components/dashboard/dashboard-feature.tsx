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
    "4oUgQ8wszpe9wMhqUQNcMrwbb1ss3H5rmTZWuXNE4BTWYH5YNkBzucGSsjaS3aQ3VcnnUf6kNYBYovY9secZMyY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocA4sYzDeET99KjLGkwg9FS1NSKx5UwNNuHiCQnZBtU6tteowLabrHdgY17mFPc8s4JP238ZkyFc1GxZiWbFqsB",
  "key1": "44XgALnSVV2A6W4Hx7v5SVrDvGhTkrLP55aX3PbHWynfWuCJ3rCyFopf9kWAaQvDUVj6FHmzrQapMfBNXA39eKWM",
  "key2": "3p9u5omy7JHyaTCK8YEN82t4fas1mi87Pu3QrC68mxdux8voSGr5dxw5WCDKaWr5A8tSWLjF272B8G2aGQtHQfPr",
  "key3": "2yCmWvuFwLrP7sxZ3a5t26Ls9TmCXUWwVVtVZVnWCxzJVE6JHcyDte7jsD7kNXKfzwmGtNeAhTd4TMhSPxZ6zYY8",
  "key4": "52Ad592BtG9QDaNLeFmcgwRrWHkuiYQiwtNq7taEJWh6mNm3gC8ya9SSkkXZ1urWfbapqNDRKfUTV588W4ZGnobD",
  "key5": "4LxC8f6aBusBN46FTeoFiLzxSPjJQUcMAK8ip5ZePWRpYtHT9JNeLHvVQfPF35PLw8mts5WJMwdFAo96TFk7X5cF",
  "key6": "2kSYruoaFKravmNjpQrehpwdbhoCJb2oCyNKYhRbVoyG9NbEUgKSBPBJqZZo38oJPLBFwD1uG1MiRXBjMHrcEsAd",
  "key7": "5dPA6u2fCofcm4EoktxW2oXusXdFcBcNgiUDpQQWcqS4epx4NZgYhCkTtyRBC5NzasVFhv4V6pxvcWft2SXxUMGx",
  "key8": "rf8VnSkPZsMX3soLFo9Dhcd9kD8V3f8JwWMpgDKi1UtSuzyWukWdmV2UDccLt9Dyz3vCDXFoPWPCYgkBARp4Zdn",
  "key9": "411y3kf4PyQDFGSKtE71sAtDtV75MwP7it1PhAionaAe9WfE9pnRysZqxbneXSNm7ga7o3rsYMD8EQTMyxQ912z2",
  "key10": "2hW9wHyeD2R6Q4NxnGdC73QGjYerDHQ9z5SAoXf7qZBaGvTw5Sh6B5o3HT2WdBkeN9F2WnbnF8kz5X33dLYrdgeV",
  "key11": "5jdkd5xx2w5BeiwPhxwWUvWb2XVF2qb56Zy9GTy8UT2MqziKyZLorYq4vUZTq7TpiXZfMWuUd9x2sbx8wfKjHZXp",
  "key12": "5mamxQRBgiCyficKijm7wMPX2hhPFFSpL8opAfpeSdDm6k6ZpvTk5Li8HAr2ZRsB5yZ7mqM4ioXQwhKV3ypsvskr",
  "key13": "5vEZ1BF23SnFczS1iVCVTphWYwSgiocR9Ghu4rhvwLVQDrEKpvN1uU9X9Bf1uY5QEycm6pTBzM2pkpNpB2pY3bHK",
  "key14": "5wG3o45K59DnMWCHk4TuvkhbUQviZVLoR12wjHyBYp9riNFSKuuK221SS7ZMr6XzEC89ZSWkxo6SHeMMTtS8M31T",
  "key15": "4AxQe7PAauDBQBdu7vALWdf9LiBHRWX7LoWFXXRkwyWnevimjK5oZjF8iY594R4b9okPmq1Z9xmAT4fBEd5uAv8y",
  "key16": "2NCy8v9RW6buqxPicKHq9ReuW55GVsaBf6Urka9hsABeSRGugwoJujbWDGDAVoAFiadPfPVQTDnL6mQCMJHeZrZK",
  "key17": "4E2eWXXzzAqjPzYTgLgGaNQiLC8Rc38JrpejAkvxxSBMZDH28WGPFg9juWQ5fWyM4zJhC3WcxBHxMM5iuwc9XN2B",
  "key18": "3mdFdU3tQ4btUjEQWpdNNEsKcQMSMRBF77MUxsicqnCsatqBsuWjrwJEgmXrfFDx26ZtLu3s9qJgRyEXrpdxdApD",
  "key19": "5UB4xzJczifr3wmHxnurWtWWHT7tGFbYuCLLbSattphSgdJwoWniHJrJQ9qxia4aHNFWyfzymnmg8BeZxpr9oiNf",
  "key20": "5f4D7fE8vkHXbAjTYAX25NyJkZLbNHnicghnacWmeeRfxaJZYWx5TAWyjex3JWep8yoE1zuiVZZrFrTbbBfdQtak",
  "key21": "2Y2bhsvTkxWx8uEiwDk3zfLND82VVGzw7AWYMaLuRM7XPTh8EQ2sx7Nn2g5wD3n58ewRxfJZUodEb1qfsh6PSos",
  "key22": "5jadohFKzLPJiSXpZpZUvsFi9nFZQE6WfAhqVdXKDju2D8zMU8RyRFwMFoAnE7M6uqvD6HKx1VdKpHP9LYq1xQXe",
  "key23": "3N5iY2EkWiaWJK9t6Jo6k9Tf5cXZ9GpLvNCfaFoNzrzZfXb8XS4fqu1DLGTqZTBKMPs1HNiyA7Q1ac1YfzDbLjWF",
  "key24": "5SqTQQt1HvjVuFBSwbWhy29bfEU887zmUX64XMPJx4G6jhrfSytZXeEagV2J6JAztLE8zGfPzaTyMTfLD57o8K55",
  "key25": "2DJzzhCY2XLyVrBxaSfFksfe6KrFoxqF3W8Aa7oDpnGTa9N7w1QZL3qEKdmkLi1QCf5BZpiBdaktxhzMjKesxW1a",
  "key26": "3xGps5pS2RhV1sG1PwN3FY1pezvssj1CchYuyRhgJFu42JDnpsStkicxCPBJiDJg8WjVRSUYQj6LtbYJRKTEn4SY",
  "key27": "srCwR6wZUFjETLnvcYGN5Y2pj2HDwNyn7FJE2Sbb8sLSLwVvdkZtF24ZMvvH1jg6AkjKcNi3HKtAkC43x9Eh84i",
  "key28": "4GKVDxvB67uNnYQmbvUbEifLHR8W7yiU54KZ9SayKGVHfpi2NrsGDT7NdSZaUnaXSYdnnWRqXwsMpNJZJ9He8cm1",
  "key29": "5CWK1i2i3XTh8UiBQUt2749cAyJQZJevCDdi9mYuBFNvBGn3QMzotkK6q3aizhmUFecu5mSRkRR6ATzkFt9Lcbek",
  "key30": "2WKzDtjUkAVy5VZsmqRtHkUBoDD43ikwtstZth9R6fLCsSsANJzgMmhxuMxNjJXpZECv87NTMf2P3QGFbaVJG79m",
  "key31": "3kP2zYQUERV4WwuC4JWvYD3S26Dy2n8dX58Um1kmHLgSA6Vtf2yvw7kY91NpPDFKB1bjTMW29KggqvbuywiodZhR",
  "key32": "4a1DSc2ncA6NwLdbdwerARubN3Q69GMddfmGLZmLuYtbELj1MWrWa2KuGPELkqLXNBzobc67FUwUAZvcbXFwBKX2",
  "key33": "5vPNvoxKDSxXxTWs8H3fikx2RnH94omWnDd4wkJxjNT3jDJamCQUTdmxfnavkp1SU9aYnBbL6ApdHRTWyjATmAH9",
  "key34": "5CHo6H5AqNycsEVMxZ7YBoQ7vxjpWGMfbjrNbP6a7AU41tCrDAyR3D2HY8VUa7Bg5QFfezbeNvCBUuthkbW5LzaV",
  "key35": "39XissnCuN96poSgBL5L8dB6XoguGtr3GCJccE9qSLDpMbosJRTC7i6Uuvqv8QJL6JkCRJMEHHcoV5RKmeW4N8oj",
  "key36": "2bQmdPeVzWifaVhL77soRRQfv9PPE9uJxUUJVRtMUvVJnZ6ta4UhcVfkA6KyYGUhHFjtNdxWoAReREaRsuGTZ65N",
  "key37": "3NG5MovWGjiYiK92dwUa4rtBLp5T83kTsUk1vJMbvcgV8nm6S62kzEAj3Sc5Ljrd1dhwf7vYZN1QjXR91oDwZdp4"
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
