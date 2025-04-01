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
    "24NAee5LsgCaxevHrAL71yRtnXmj8ZCNhqp4GRwjRDJ2TSMK8xvFqyCKLhJL6qFHGswdYZ12MuSLRJdEqCzAZxAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPyjPZoj4gr2MB49entZoYq349hU9X5N9R2yP7GBXaVZ5tbMqEX57LmM2ESTBigWRs5RLfsgiXqXZra3TehiaKF",
  "key1": "Jg5HPSWa6kN24debdu2D8kuWJz57xwCDsdBgPCwYQuJc32dAjx7AqTaiHqAvKg3XwCL9zfcj1dU2apTtJvGZqDi",
  "key2": "5j5z6XCk9b9XrzLeTPWQ7AUnNDooaMVWnqkCpC1e3RMvtDhMEyPhkUtipqtJoVMZatiZvivMAfV3r4CptbBVYMwS",
  "key3": "2DY45NjB7jwtM5FaDtfpWrNMVcQfSAbeREGSHdRf3kaY7Kc3GEs2sDEV6XQpMzK3eCms2uZfMW9jMsJWxPBbPjnz",
  "key4": "3bkMcR2wkYUpYt7URXJGqveipd5mfyA9srbxMPUXLmgmionkKZQzbDGJEP84zd7jy1R96MeDQjcc5TmUWv8Cs5QN",
  "key5": "5dMTcmSKso6Sbg9X82XcP2ckkQBK9jYf8EFV8XpFREdtJSYHP9aPMYVg3cTMLyGnUnjx8QYLpRfbYyPmdCDFKAN2",
  "key6": "3zmFG3m42KstqMpjyCPHxJYAsfWoc2CTNfYs8rqSQUqnMR7hJry3ExDPGuGYpzbTHMRpywQWXr5nhQ19bchH2AAm",
  "key7": "4bKtBkoXV2zRcT2twBq8WDonQs455X5QXZmLm9zPwCWhxfxmsswybNJUogU7D1cywhqjKVYRaPm9j6Y6VrehMdBM",
  "key8": "3KPhqr5siJ5diT2yKDVUGL6tK9wr9SpLGRWeN1QR1WfBCC8ajzF5TuKSEfrucCmWXGBM7crdvf2r9ZY3BU7My2Wy",
  "key9": "39rQU2YTp6hWmq4VeCNgX2atQZgNezpakrY9EJ9F1bh3avGWUDjExdBmKUsUXVex2Eten3MFbY9QcJhcwL5XA641",
  "key10": "65hy3cTD3pQojoSCghD9Ck1wW6zNMHeNbocGbNamVLce4paeTvLx11rujzWvER52mZrW6QMzhkvobwk1g7Cn5c2Q",
  "key11": "3krY9BfUvcybDkMfrG8hyV4ZFWUs65kX69v4ci1kRnhgnyae692fjbZ55QhiqCkhPBhDHbqcYKoyNpuifSaRnKDk",
  "key12": "5RzZGf66456heiLSdfpS2dTDv2FxWGRftwyLurPaPKgkzCuzAUBABBq3dMgqBrbtDuy9gFwrjK9Di3xkcTbm54uh",
  "key13": "3VQM7GamW59piG3MVb33cD6NqFVcCWWNj5VFjh8YskiA9XrhGTh9jYLWR5fRDFatEnPK4bupF2bJAF8UQn7ANL5f",
  "key14": "33yvZ2MC2zeMoDMA6m4MRtrP8y2CFD1YbNiNuhnZV69eLnHLQezqeRvKXhSpM1Hy5okhyR9s7xPYxvVDNkKqzQFW",
  "key15": "4sspb3JScf3rf29pvtahGftsjz5JdZASPeS5z28wGx1iCTTZHF2fnjs7PkL9hZSoiRiGtTx9To11MQsmAzjkXySW",
  "key16": "261NsCqTqNFYaPoJqwhneh2um64CKa346DpfhvGB6j8EnvAbfX3cmA29mwcCFq4FwGB8A3UuX3M1kqj3tmreNrJU",
  "key17": "V7tav4X7Kufomu9Po5jH1Jb2ZkDfcvaTaUtQc7KECNkTRgEg5ntNAAfoXss4WaWVP82Erdv33nmGxUdGKzzcDQG",
  "key18": "4cr5T5VzwaNzuzdePzkfrtixvMoMg7bqG1SfgAsUjdhCxwNNK9LrYMrLDPuWSXKDmftv8NcT15ycwf7ejuhKDhob",
  "key19": "vE5RhueJwXWXxJCSH1CHc2C4V5sXenePvyZm66GaGWwedG8Waa1RxirQGxGr3Tu5RRHSCUwNpHUT8XzPGmv5AqZ",
  "key20": "4yDcoXiw8ttVQbWBe9iYpjiwteLf43UGkMBpCBAVukTPJD4XXCmgQ6EfxxaLjqvayCq4aVdn7JzySwdjFAJqa7rz",
  "key21": "3JajDk3fy4MtFHprdoqdsj3hzTMSMnqxuEdRm1oPi77D1mAsZafWydNum8MML32h2CRTxiUuLAx6cV3VYe75j86y",
  "key22": "5Zz2uyXj4pRBV3tNqT6iQMCWbk5fRQQ7k8J6Y3geNNsQcpiRknpDbwt1P2HgM5rejd6kScoxWwTgJejQ9dwnCCRA",
  "key23": "2aJNjTqDV83AqKs1HKZ3Ao5AUtAGqokeXjj8QGstamAKaSJ5RD5ZQQ8ECGeGmLyCAUECsQG1vd8ZtrR55hb7DJzZ",
  "key24": "2QeCZgn9fw2NjpAWQfd27ShFi5kJhhfW7z5nkBZtA9KeM5RmRXPN4G9CPjWuuxTrSUqCnVUqF4Va3tWdoEfHvj1L",
  "key25": "29AQXpWz2HVnPw8p5sHUn7pdzoo8bqpYgoTbTkJhw3afsioiQQWx5hXzFaiUhECNRFHC72JEDew4975gSukVPuV5",
  "key26": "2CzMu2z4qx1QPRqdBrSscac6GhWmG7hbQFFHYsZ57ZYorQAfAiopX9Hbk52hcKUduUoBiohRzGabGUksDF4xNrd7",
  "key27": "DVX8fvwQPYVg8qL6HzWTWzYGJuJvmX2uWMzU5MjP6DKQ1UVEoymseZ9kTZ818sHNda2FSbzn8iBm6BZzc75bSE2",
  "key28": "KE6QkDAxvXDayGYYL66TXK1U7JytmoC9b3NnPLpoVLhWBu58vPnv1x5gbpYpLjaj7ZqyYEyNT1N7duGqoRw3Y9q",
  "key29": "2T8boZNyAfqJiPsENvijZVYdZTta7vV29xCYX8uQKsHCXMGATmUVQPrMb7zYDfi8mnWiysuAV3bdaCxutZF9yjDa",
  "key30": "31Pk9YGFoEJtrW84iWpThiKjyicXAjwzTVJKNRQqNGe2u3VTjkHc8QBCbr7RwEH3QjAFEirgZpiuUSYh4Fnbvo1z",
  "key31": "v1KrSjCZmy6p5tfvGujUSEyUVCnSa57FMK7MbQ9bmJoxeJanuQvXBcMv9hR2ChkNAMnD27dF7MhCqc1tNJjPAwT",
  "key32": "34PJug1AssDSkda2nvhPjqRkqRUvbFnTFL3gSar18Q4YJn1YTddPzVJVsKNPaaXpWMpxhkiFJYknQJwxdeZS97mf",
  "key33": "gX1pGd4jb1cvKXyRw2A9YfHyYvC1hGXYczqWXkugaMVsdv7yNaeAUqvCHwkYC1nMTJJUV3nH93wzwUCqSzvgZzH",
  "key34": "3JbTyCmpEqa6u5NUB7jsayP9igKT67GtKSM1xJp3SsjUwq4n2NicyS6A3C3h2A4AnRwaDuAWfBC24bCehMXwYQmx",
  "key35": "KxAefkj6iLPyh4QrV94exRpyLbXAfdb7Gt7YhZHh1dD5iuz9Xdt4L4Avm1vY3W1mrShwZavGQwxwUPTTZfUjB1D",
  "key36": "3hmPorvEwTfSaNKU9iTDDLZz6jyWTN4Fyj936ag82eS751Y5mgABYxKB9FJnDApHkVGKPBSsGpAgW4V4UtsMdevZ",
  "key37": "5Rs9m4v3Z5czPQkuwKc2dfZZBGVE71GfXGeFMLBcyWc9zo4ePTYmpqeCJQPXKVobeiJZYL7mhcF5o9VxuFZEC7ET",
  "key38": "61cVDh5YjGLjWumP1zswFqg2t5sut1RhUU6E7LBTiurRpGiFLCvXSmohq2an9EZKw1QCe2ptEpu8HXJRBnvbcsY2",
  "key39": "BzrYSHb7ZGREWr9aBrStsWStp5EeixJjs82caFQGK8YXkimebjP5Y5tw1DDB65frXnsheEgcUDbiaxnnEqtSypb"
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
