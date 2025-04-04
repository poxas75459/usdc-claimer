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
    "2Nq7qnAK1dny42D46ZS8riutnkhGWJNCra7LJsN57H3h1nJnyGJwcWBGL7669XyDjof3VAoLtADQLtdSNWWbtDwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GMXBHTyYfe6vUVndgdK2fmktYYYhPZgvGoLaC47hk96TR4xrD21br8fQ9HkiAPTV6zan1GNkJu24nGPQgzvpyyd",
  "key1": "3KurHdAmPa9uLvtvsT5aKyRe2G7vqJDCazC7yMiVaYK5jVM8BAfDDZR49PoGGvSembPwiHyH4NTzRCB9BfPWNXVQ",
  "key2": "25jvyAeGxobMgBiduJySR1SgZeWktNMDxEy2qvDR8WDnJcSbnbmq7XESJ76PixXdZLfNSkiFD6eHprCUWUF7wAVp",
  "key3": "JvggQ7xWmtyva8CWGSmsjgkmajHwP4xHb5ZLjSfhZiX3SK8QJTg4CGB6WATZgBSQX7avjrkR9n7N2idGU86vuKz",
  "key4": "3mJ5tWFLk3bFyzSKWq2cPMfHCkyEuhV58njGBPWnX1K42HGHD2HE1WSJyfzmUD5R4FGhF95bRBcX4iPG2MMsEfXg",
  "key5": "4iPAbSHvBWVDzbLTu2N6D46ZTSdXDADe9PrnjqqUHCfEZPJ7Uwfn5VakXixowu6aRZUc1FNZM54X9JQ6FDejCdXc",
  "key6": "3NhzgWK7RAT1KWkm3eDzhzAnqJozBARX1G7eA2PVd6CvYxSoovBfWCKz7pHCSPaogyXHKPbiKu8RPkP66H1He59M",
  "key7": "4MBA255SGkEzbzUGfhL1MpaZ7nS1npoqivWsQp9yqipMtCohGQy7qXQivqmXwfcF1HMZVEjBgoA52zUzzyWLdTPx",
  "key8": "2Vpt6Rbsm6m8hqQjLE7cNUUgx8rtw31kWh2Ni6qbT3R99Nkk9gHsKb2uUYeCThiK9ixcDbPVQFzbjs5MmyzQZFGu",
  "key9": "zr9HT5kEoTndL436VEzRaSxYKsLxoGhDTqxwQx7cpCWym9izvZaLroVEvX6jBMShCDxWvK4UamJxBHgLHxNESyk",
  "key10": "3FG6AZVZvg6JqJeXRndzdckTR5jHsUMG67tHTmwzrsnRVjtG9i53PS61LXNuFgBw98k6yPSQTx5eD5sxRSYPPTAt",
  "key11": "RZ9vAFCJjijytW6Xi1r1bGLoLfMPJXEJGGTQkaBQvYsxS49yQzaqjnUdNSjDdSTDV6iripKZsKnLeN8q4cxBCoF",
  "key12": "45GHCz1tz66oZ3RBB1wEbq3L7uZ3Ajn4FkeqAuPaAv8KhaTDpUsneYovdZDb8veCG6SaeTRjYoDnKCpguSvNfahz",
  "key13": "39vRJTfu1oSZyDugt7Mwp2WEcVbsGzawEeV71hzsXLmcbeFiqiU8fLpz65KS5XY3rt9gU2XkDGF5JdKwLpgmfWYC",
  "key14": "5K31LQaxq2sspqGfASP5JngWneNgXh5zQcATib1Ji6nZUqwqc936Xe6AVnvJvvpUVGG5vxajkNvfvDG6mcL75KDr",
  "key15": "m5qQFnBZMuHpyKasPweCvTvYtqf5YZ942mjcVeNhQ85fJFL2t6UGBqmFV1pGktg2V8uUhuSKQLfp7R3pGEXt7Fg",
  "key16": "5djtMPC44KrZ1ap6VQJ6fFzKjXJYCdUMdJkdY2xCDYxM948T7aY8m3QsB53dFVmphVCXoKSunZt3Gb5uvJEGvvd6",
  "key17": "653YAVca1JR5ETU9abm3dR9Q1Pd1sKpPBvSbW15Bss9HBtRxdqQ9H55RjYq8YnMFUg5p33gziNQjEhXGcf4q4ujR",
  "key18": "3t6RpRg24Rsb65GD8JgXPbP4eVMKnf67goiWzeWVFyWNUdmGmEKiYVfchXRbYKfZo2grE3qsePxy6s8J8dKFTESi",
  "key19": "5XkGq1Xx5A8SFtQ2zV253aCcmR91QSFMEtDxYKtEhrK2ouTJPYYYsisVu3BcA2JNn1PumD98Lxb79cEqw6iYoFn2",
  "key20": "Y1kE8QkXdbMDQrLxSnHDgpgCNK7WZJCBWUYbiiVhQ6T66LktkaYpwwdU5w1g7QoJ69WtXxrYzywxChsN36aSyY1",
  "key21": "5p7iZFb5zTJZLouHXdGTmjehrBonJ75v1GJc2BGfFMGyohBZGSUPQb6bcRj9E8gvMNteZ7hJNeprK5WZ7fbRt4zK",
  "key22": "5HJtrMgKkZD7UgVNjnGxNQNpC2qvArTQRD7ik8UzUWkCgLhau8KSrMQnptRvUzAKP7cZzZ84ZoU2X5SHScgALvDQ",
  "key23": "vESCM66MZBassg7VsdQjArRWaEoZxaW2NKQEWY6cxDJYLkxMSZYxbpWhHxbM8V53DdpEsZzySWkGAeygzC2dx6Z",
  "key24": "2aG4t4AQgNZS3JJa4niF6kjPZvVa2r6S6nHDZwzX8EyBtbHwHZemzD3cdcEJf8DTYy5tT4hvJEuA5J8zYmz57AUW",
  "key25": "5r9KgKDBCQwzFaMP8fMHig8EDTCnwz7K7ypJZtkW7KqjJWoGGkL1NVjBYvnD3VmyFEvggMLC3LTg7ep5n4sXRmBM",
  "key26": "4BNJDE4cDNChSdjZfjUQf4Jipm1qMm7Xq2vLcbQDrvoC2vbLmMpAsmUM7kRmAyhFKHcFKQ6XPPKGhTkvVkUKXcg1",
  "key27": "3SiXks828iuS1ZQU7NEpX1c8wmoNo6eJcbMQSstAHKxfFRoDLcx62PPbJk2idd5C5zYCmHJN9DixD53ZfeCYsWxj",
  "key28": "2Y2pK5eQuR8FHXVGuGUJ3sV6Neo3ADbwxERQ6tP4x8pDj1wviwYEx7DcnYb3Hy39aP7aSySQpp9WAHYSQeq1rH6p",
  "key29": "XDGcyUVhn8a4c5i1EdfDVrLEVxkMVKJeSBdXvkhRtLwPBUhvPXBX95DsgnXffMTWEzMR1VeRsRqusMZs4TFL2Nc",
  "key30": "4CMUS8NdGsG5UQNPYVUx2SUfSD8ypHVMEhWc4AGE5BGwyh1Ku5x77RZNhJxK66mqpFSFX2YweFQsepWN8YaJFpH1",
  "key31": "7arbCHak6GSd9Wc41sv1Qo7c2FX6hz67Pz2B8xNa8jf83RS7gjvDJ7SjK2YhN1faF4skj2aVVLidLjfwhd82eqw",
  "key32": "iG1vt83YLyhG1j6Xqq3K4PfSFZe1N61UzBnzFxRD3AvsqahfYemLjCqsnJbKSQsZvqKda1PEtd6JMzQCD5oSzHG",
  "key33": "FSgYL1UM8etVteGKFaKDxQA44FfxQZx5wVqCuychAsAzQGTbRWM3PVCJC9xxGbvVjb2T9Ua71Eg9VGKciJf4suD",
  "key34": "3uFCz1ocKCb1yC1L8V1qcZhKzLe4Te1pdmZWeNPGpG5KWMvJwuKYguV1FknBtq5nXPScnqawYrSFqaSE4yW5ePdv",
  "key35": "5z5BjhBWKjFixR85GFq3A1g7ARoA8pDTjqz9FznnGZhSL9zHt4Efxpd7nbomiUgLSVbYxeodhKr4qSZYtfFRNVRC",
  "key36": "3JZxmb5cwnQa7ofn6dAjTFL1hcZL2wjGAEJ1wR91cXTtDsyiLgKYxhqwyggyPGXkLhCPLFWJFvCyZmjvM33sJGtT",
  "key37": "5gRg3bPBwZ6Vpk4fsZ9KBMFBujYxUbZ93ScHL7y1DRpSPoKZs5QtLyY3vkJLYGzsXCa5Pxr1euFB6XetZZpxY74D",
  "key38": "4eatQXURitYkokvMk1NxTk9hnek4vj7ew3j4K6oExhvpdA5zQY1r3YT74zdEaKWqxHqJmtFF13FBJqomkE4zuDvz",
  "key39": "3TtQrqHaQz3tbNTUGNohNSt6iwN4iE4ceZjsYGF5Y6kTci66hkh3e8Pzp3ZKf2nyd5wY15F9Nntkj8Uac8jf9CaP",
  "key40": "3PnnCwEayUFru8a5doWfTpeSRMDfXzsBRrXQWdE8apAQTqetiLKyUqgdqHmJ948kivH6yEZJBzEeNxL3RhnnMRME",
  "key41": "4yz9CSF3GXQUHPwSdii7XFieKr2GCFsS14hiDh9tCptPoUQKubXLnjpHkohU91DevVYGvLoDMrGK7TxWzkSPxHEC",
  "key42": "3Cv4QZMG4qZwetJoPZfXRxfA9NRoWJx4TXwMkxPHrktiyMZfSPSc7NtkA618xkNGDPjUiZnCWbkwniEmvzMvcqzg",
  "key43": "nuRPFAFaQrhW7eWxZA7uHDSarAWsSsP6zuyXF9nd3NCZS6pNyTLthL5Y7Z6Z2pwQDPhGkEfyY97u4o4Wfhca9mA",
  "key44": "YBfkRvNeCMMzHTf95HtcB4GX6PxE58qoBTZdrRFzwWHadDBYLQzJFL7oN3MhYE5kxZYsWDk8v4zXKwKvEHaVspp",
  "key45": "397a1HD8FvUq5wgWo8vqEwRu5i567jgWr63NuRreHhBZUwDvm5eaCLNoUc6FFDdV7WV2kMTkABsmRx3bEfToTwyX",
  "key46": "5GefFWU9CJg1qEJ3A9Rra9K5rj6obEbucztBKWCnQb9ZtvaN6fcs96ikBFZfR2hGkb6McktCNfYxcHcouR1bb9mq"
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
