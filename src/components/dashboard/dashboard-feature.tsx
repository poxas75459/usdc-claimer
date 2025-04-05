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
    "4n852ZsoEJPD2x5SQiYvwDqYdbWc1vENEuYoyJTiXafvv5gqkdTN8J7c8vdvFo7PjG9dMN2PnkcXjWbHaA3yJbvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zC9n4dEuDgFSGTvG4EyxZJVBbYHPu8ygNFPGJggDovwSnpXixx3x3BVjKmfdPLP4LS62wLxnW5h583TWdD4m8wC",
  "key1": "2wPEWPZ2ek7WXrD5t7Vf2dozfjr4cMig9m6pWm2mmBJ95wL89SX19Ha16NvWvEMzbUdNCYvV6bocnxDN4Jft5bRK",
  "key2": "5cwpSaDS1xTEae6Cp8rM4M9QfRvgY2LDpGnfWozZoA6iFpEg6AEYqNxNyse92cgiYCitgWNP38Xa1Wxr2a26jh8t",
  "key3": "4AadgNgatJKbrDukAUjPJ73ov4AGxM9gJyM2ry6mrgdN4gZLjmwFbdNz2kVgknWqK3X4M1Zq26zFjTMZhet6KEry",
  "key4": "63AKXdjnWRawVa9TmawHkp7153abR11s8zcSCHWBZrhhm4q54xVQqMKDk8d3JTBw4JG2BBTozeAT63v4GcyBUm8d",
  "key5": "5mJUz5n4EBtbtj4M6tXo875sMGdJSRrDSyqDcHTrdXAFVeaFity9CcYjoRyc4MXk7jMQpnFqfdSkAssjcPt6Tn33",
  "key6": "5EHLjSw8aj4vox5AHKpWuANiXcWCsryzHFcQSBbDZ8kJt3Z89ybELvyVKhJgkk8ujAFfQKmqXXHvRfyooaYspvex",
  "key7": "QD9PNuiLKQUAu6wipQnhUaxVyiUTkxNJ6sLLioyX2z6wxT24JWMnizENHsXwi3gc2vXFT69hJ6trgQxkqK9ggY1",
  "key8": "3PZcifXTBBvgTdef9ZrbnbJZZccMmz1ZcDzAem461PYauDnwTU1JoT7Z2Y1ZbaZF7r5T6VFBW31no12vtSggywpD",
  "key9": "3EogrkXk6ABYR9JCsm12c2zzxc72C6MxfEWNvYvY7PvGgp2CJEnrGFmeyvM236Zp85iG68V2VoMU6ySYCWGV5Bvm",
  "key10": "3icDUC1tRLTDzbTUEJ2Jn5GsTvUCDRUiokn6ynzuVjFAR12fxUPjMgj5XCHYkXjzv3a5tS79mH23TTZYnT7Jynb3",
  "key11": "2dv8vsoAtqppcki2uLhbW3EQd3T8Bg4pUYH2d7Cxkmck5gzaqzY2XRkFyFpDHbge5e7VNULyTP9HP2o8c7d9L2MH",
  "key12": "2PAMTgQnKm26mygRUn16BFvSXc3iQMss2iXs2FR4nHN5MWWk2cGLBn4onZVdnxKmBREfS96coMrWPFJKiWnrrhXn",
  "key13": "3DmKsakfeQP3wdCsWQodGL2nioUyYPsLp5SXDGNSfvqSnH9XTTgRhJ3YUdJdV9Hn9fzh7xDfn1UDFqGJdN6BWbqW",
  "key14": "3BcryUszF2Njo3JWkH4pKimiWBFeaSbiiRUJ29TBqcsZeAsCiMMGTx7LGPaHkq3EdoGDLgRx3CoWaxsz3iw15jJ5",
  "key15": "BtHuXXBaZtajpVUbeoVNkSfbz4Z5XkSBZubQ6DpD7rKhDBEx4ngVATzsXjwmhUgsg3EQ6TxQpMgPQT2hwFb9GvT",
  "key16": "2eK6HiqMazMuSPKu7NtaXU5GHqBPu45xWLyuDuq9Hwidkkf2BFK8Et3FfnQ1LLqMM6ZwTpN2hAzUiCqL8dFLBnK6",
  "key17": "4MH9xArbF3mSJo9zcFM1efjjG686Tjev38tZYE4ty8spYxqGbVn6oMTp5MgYawRb3CT5qgcC2yA2XnADHBC53jHh",
  "key18": "4pwsKmkCZCGfY2SYruxCVaYhkjSa8YyBD7urtUFY1hhX7oNrj9NcpF8948nKj1xNuXbRPiCrSAqoAxTF99LzjBC1",
  "key19": "2hK7yzxr5i3G5x9R3udTej7zL6QNrLpbRN6rzN4QKWXrkgy8G2n3Eq4GCo1cCqwWgrWABoL66q9rkxXpRzVSq1pM",
  "key20": "3HQUy4fSnexj48AZ6y8BGstC9TZa2NRvFy7AhoWQwCEtkAZuwKSbHR1PVVS3idFSn8v1Qq2e4H5UGoZGu15nhHTe",
  "key21": "55cqxB9KXCGJryFxaYkzgTEVZW9nonac2jGEVY5pDTButhAQSHUri6CCc27S4Jj1jALSNyy8k6SnueWhBzieXmc2",
  "key22": "5ZdBXS76ettkignYnzjkUHNa27n31hxWdteVemQcebfmdM6pE3JHEA7P4n72HizSBSLkW7zRxjfDXfZtTrRyrQWC",
  "key23": "2hbUBQaKzmCAhQd3VGRgCtdZLe4WzdV9eRkHzUkX1Bhb3AJHYyXn5cL1ZK1GkC49X9C7rRtWcvU5d3TLobj5nRr",
  "key24": "SFYrY3FYcVLUrK8fHxB9rW1eR1Ay6egWpsnUfNFkJBBhCQssenZq8GdMnnP25GtRzmmmQ5eAReVDQzfEo4mehfA",
  "key25": "44Kc6AWUat889yAKmbY1szQEgc5AH2e64NNch8DghEPVVK9f4favdkCVCfjHKSLv8CsTHKKVp4gi3nCg4b7RcKVg",
  "key26": "5ymz6rGBYD2JNJTFkW7HoMQiFKVpUetnFRsKa7jaa1DQxHYcJfLAUbb1fC9E8aTjgQQDGqYGe8ACroQPhuKLsZnN",
  "key27": "5ETeyFF3bh1yxiXhpokvrbuSQZv3vZAQY2EViNHvTQW7VxTsfS2VKqZ4r6i8n9dnWHvZE91TRjrWsGr5C2iBV7fy",
  "key28": "CykSSFY5hWywS68ZE6QGYAygoQYaBJFQGYeLRd6JcM8EdN5Tfao4P3U2pLtdKnBwDF5vZnniS98hyee23v3grqr",
  "key29": "556n2KDntztkCgRSa8ZhLN9DVJoTU56xwELhADtzfQTbMLNMq93ureGBrWvDy2PNaXaqy2X2hvTGX5dwup7WMnXo",
  "key30": "3tD5jfzwwo85bX9gakGDnBabggRjzmGFGmzpp8kqhKF5cKo7xyEzB2KCK5rp1puM2joK2UZM2MhfGvDUzocAK7ff",
  "key31": "Y2FAR4BiQxPPDBzmfXKhSHACyvGfTCrDncYTtCDZUEYKKqhJm4sw2ar3LXVWDRa73qCnd4pQQvtBRnLo4UE419x",
  "key32": "4iJPEAxfnurqXamP3K77hNKire65GcPexb6VPKLhqRd1bpj5C2vjAxADG2dEHaAowTxRbgbpAB5B9Pc88zMsQYK1",
  "key33": "5EEY8g6F4Yztm8qCmL44SqccL8upcArqYxBcUUMQVfdMnDaxRPe99bHjb4v2XJAUmqAyHjdAi2c4kFtfAnkXiP2Q",
  "key34": "48V3r5DLmgFNMK9enTqHv1NEF8zFeBM5iuueLi7jxrXZXWKHc5N37SGaXfqCD97JTT7xTzoWgxCNCiNtxS15ECDY",
  "key35": "39EB16WCdRutXfRQjxigQWXRn2CMzLyEyqWSNviyZYGYekR1Fhfsxf8Fbn7bo1trVhX8k4i5W3yCVRe1Q1KK8tZB",
  "key36": "5QKEH2NpG2Gz9CMMRr2xa2dSMX5WmW3HiozRobSkjnUuKCXiwCf5UctU6hyQmdQRse2YzuG9QmwfJB9QyZ8Mw8d3",
  "key37": "67HUdnEcCYTp35m3dGTA7LLZTcAWT8G9HDd1trZxXXkHvGp1BYMbyJZzLH8U8HUMuMcrEQHkCbXJvixwyMS4jzze",
  "key38": "3ti2LW4TxDD2EwhHVcwhRsy6bXyVAEfCqS41PYU7s41iZMpGTRfuTcv7JyiJEKcNsNLQSy9iBQNAMTERTSwcvDCn",
  "key39": "2dJ1RVZFUeEqZLqrufP87jmZFbUAEE1JLDZiRSHe9UmjXx5AUcVQA7PXoJJHEccZwnneuviNuebTDbg3J1ebRWAo",
  "key40": "26mH76mz8jaV3s1Cs8GzcmTzsRdA9D9zA3nPX1M5sJGXmHFisaJSZZ3GnmvvN7ZAB6j4sGcuAth354GfbPsYF6q7",
  "key41": "2syC3hJz5qYnyv2DJzd4jMbHVwLBuDTaqnX46AMmmgU2adm5NPYd4s4WX5rqfXoMv4tnGt1JyfvVm8qscN7epuQP"
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
