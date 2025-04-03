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
    "5R19FQXWoaYuFLALZZe1eYBczj4UqYWHzBdbd453LvBQb1DjAsyZo8DBtz6RMWBmshyzXWtjYn757jF71aecoDsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEwofirNsJ96cPxLSgWnjqQZX57wrBznzgoh4MaXZCC3tuYJyCLNK4FA4TpRNwucKHnJrXHVYhe7iNBZ575aMWy",
  "key1": "2AhSztbF6n948AWM6XA84VNUnX2HjJMp9aee98FxySbkAH5qdhC9REwEPCnaRhvkgTeJwpQJtdapZsAA19nJRetH",
  "key2": "21uLPHTGsHK7oazZDoQh9apnPWEvvNE7VEfgbVMAP96EjQPtroPn6e5Ciy6ACFphGcfRQ4piBv5vLTkicqrZF9rT",
  "key3": "5p8i2EXh7CDr7RWhLCXciEvdDSRThs6kiJ5Le5KVqfeq9KfDHNx1yknkuqqMK6T7XyqXH7uftaf8BjZTk3zQEEUi",
  "key4": "5ieKmpgdQDnk83TKVZ9in3eqt5Ps3VgYkpke2rgJr8xEPoUtL36tva2ijPzaXqemqmrkW7PwMLkrj5JTDqecsiFi",
  "key5": "3fAmWqQxf5sTwZQruGrnxKQiUrN2djfCZsHwhYXhDZJJywnqJD3RVN8tqvcHqSqo12r8ZiQdfrU4GFSX5mM4gUFP",
  "key6": "2f6LAwosEQtzLrwGheNPaw4dq51T35o6vYNDq7sQ83h7QpyWqHzDWGF9oZPJhN9Dyj6ynLKBfutda5ekTFW5bpjM",
  "key7": "5yvyUpSttK2m5kyeFd42TB2RNwjv5h2wsC2Bya5UeGG6bmrXmUyFFKZ5UbcYhoSkLPEmk6H6PY9cdAiZ2NeYfdSX",
  "key8": "2rzQUMzAuQv3nfsQQ8PXFD9cyzBYximhJevJ6u2324KUzQTNXcr8JQuQoULHWSTwdvPA4ya2q4zksG3Bu9FumxW3",
  "key9": "xsy822a1oX7gEB7XaWgCtySUMQe3Pj6yeNk8J4uXAzLkNmNWhfMBPMi7HfPY1KE39XfmuDE8DFdJDYGrv84rVV1",
  "key10": "2KAFv2DTLwQP5YfmuuZsLPubnCVX8deet7HPhWNH6Am4pARBNEqCDw41ao9JkqiwTGejpqtSFto6i1uhirwqfhsK",
  "key11": "61RBT1vLCtvMHC3n94h2wu8j8R8fiY6hg6dTU6qYZecM8xQcj1NavddJoCinQrfj8GjPAyZ9iBsRWjSzuzqzX3Kt",
  "key12": "5w1w9dVf4HgD1a3DuYiyAd1hdidRJSBmXgUjjeJ2RfBWkaJVqPpQPzmT26QAeDwyX96LKCLYicuZ2igFnvWwFQAv",
  "key13": "4RmLrvsHasG98PgGRgDUQotUC4uK4xY7RLetjfzUDAjRFzyN6RXnxtQLKNGhcg9bA37asv6cjFnmY8Us1J5LxaGA",
  "key14": "44mLrdVbQyFtRpgPpcmYRR6ux8nHQig6Y2REEi17KxCzTzF2o8QZnLWYWH5VcUEuApmm1rFg5pjGd6KJdjvN2sPf",
  "key15": "5pkXRvePB9qa5K7JQXfLmmHeSCr6qA5EJzZ6hjMtkuAbEcxKT1Ht1HWLYXgEvBW8JEAr8bd17KSp9cMQ6rLNjmYw",
  "key16": "5EgQYCsmFFSLhqjVpCPwJDXY7SqLHsFBpn8ju3oyjLUnuqc9B3rrg8oSbonFGUuTE6bN2nLnvweRWzVYFTeRxLgp",
  "key17": "5DFkAK8p6jh6SLteoRWNT25q8LLN2pnYvLXd4hdjKTNBBERE7ZtqW87CPiPyr6Mjn31gma4CfbgLg6pYcFtuMBhD",
  "key18": "28Yzn4rENCvbTThRbt14L9T1b7wgfDEN2JZF6TcCHfftszqBLuKM9NNL4WyQJpczw4oGmmFyoJGyfwNZw9e4Hce9",
  "key19": "3DY4QY91zs2ZbBb32ja4NaQRFc9pMbVtaaVFwFBaNLCcX7ERirxo7cxNJgnEXnycL98UtaM11p3x3FcbMNnXquES",
  "key20": "5D3cVbskHncSngCsmfuPmVEmUktBC7Vrjzej3A9Qf6WPjuxPgb2cban2wJf3VT2r99Xj94gAAvdsjru8afhAvZQu",
  "key21": "4SV3L8q7BiMbLa2ELKFL3MfANmTJyzfXdvXJbQwHF8iWfvnB7r4bU5tjRpyupydXf5FR9QgLYgRTLKhpAHbqNUc3",
  "key22": "3K3RhM1s3S8yDAmkRSxuSCQou3mc3RrSjaE14QJ94azsjeVYXZy3R4YJdt3ZQ2cjt89GH3ArRBSGeCRGgiJEHSEx",
  "key23": "3ut14TXJokJ3KnAahRyBwxFUdftfBL7yoQWoJ1CUtffwE4MNBi7b4UehXLMmxXMw3PjRLd6qsWEupYfZs49HGUD5",
  "key24": "5kGmDwC3JXu3gFpD3US4LGevDiUnFbme7XeXAVPSw9JjMEq4h6A4cGsrnihv7xrkQApDjGLPQXfLaYpATTRF2B4A",
  "key25": "4rNDyQ6zeEQdjEN5driQRKH36keBMfXRwA76ofQixgiPgtFbUTdtcjdjzpBEjAG4bsfGqtDqjp6x1yEpywcDrzsd",
  "key26": "LHBZsq2tXjRt4nagn2TYxp1Ntbu7RnBed1WP9WrB54FxpYGU6QRho3Kp1GF9mwTFivEipH1rdSsHJ4yxbL88ESb",
  "key27": "5qfTLvUUfJMskkotaya27biQeSzdWnTPJQVzGHxG43pvKqAqEYuN4UbGkNx5SvwWzFC4vGz9KJWTE7D9EDtjN7Jt",
  "key28": "2HPmZbAeDqh7iU5tRGmvjMiwGvpcPBpuRcTj8dhwBxuUFkWYsTwxQH1X82vBmEpjMgS7Q1Nj6ZhECvwucRTDF4Lx",
  "key29": "ff3eani4uJ2jpE4ZhXxUWmPhcWyzYVsJu7fAPMhkW2JWY2XbTAetMgMKEDqCRRi8ymomWW3Z16FANPLgqcEc4KZ",
  "key30": "4Wfp2cSYJs3ezkvv4j4BdQv8AZrLBQhaD2NsTVaqfUrJq61Bpdwtb7Gr3Je5ugjeaLdVPX5gRe3FJDRB28kSV6n6",
  "key31": "23sf7gZkCTaJs4pLagZBTzguMoYgt7psukCBJp7UjYNxN6Ja2oUVJmaAfAnrwX82foMk1vskHAEicyzGKmWj4Trh",
  "key32": "3TMwrje8mUiNe8zZ6CSzRcB8d2n31MqcemYiyuqhfBRrprXrJ8KfzGRpeJR7jeASzR6BdVrz9Ao9PSXUiFNgZSD2",
  "key33": "3bayfKKTukDtHhZEw7J1JTkB5M6tfs63kMJvkd3ydMVUKshGNJw5qKtKShTgCmWRT7AFgcW5ETNbBkPei8YyRwbb",
  "key34": "2yG53e2xHLThLAcmtcnsjLuXZ67ew3F775JTe199fDgh4rnD6DhpnqrtoHSMqvN4DHLgRUXFjzqbhcbiSiaMiaMG",
  "key35": "29oh9KgWBVgTDBRhiYss8vubEgw3Fw22M3FcNAdQ2Z8tMzy7h1MGfHx3UXrdnC8QMZAinmRJ91kmwpQmH6JvSnaw",
  "key36": "4PufxSQupQS3yCVcUPbt5Hszqfm97XVhY5qAz8CumtPm8hoJ88kY8FSYUpX56e5ZuUMwixhspxVJBmcDfoyTWtcQ",
  "key37": "4X8v97rcNVqwPxn4YwKQXMXSZhqaQLDgehdVPuomuhpqmxi9i8JHtX6eiw4mbwtUHzcUjxDQYhSTi4ZNCx2PcS5v",
  "key38": "3M7g62XAEPoDRcR2dfChQqDcmgV5xHx3wnyaEWwi9WzhTxh817woCQ3B9o859kY3aRNxHnigaiNLrmeN16ydoHB8",
  "key39": "5RrpGwy5zCu6TCHRRU6kVLe4S7benM24ZJrUJ3vrxrHjA4dfzzE9vL4dvGV3wZ7gGJJCHkofh2GPDmmkUxNCxWJ4",
  "key40": "2DEPQ2gZotyB34sXYNeetgg5hjT9MgcjS8DVMcHfzBsEXp9EYet2adNtdqcY33ZFtQ1wCrHNqbmWMTmP8YiTjZNy",
  "key41": "3oX4faVPiYWJf9X5idAyehnjmxon6q41TPSLNUBBKQTomaSvKKNDajvwkQ2pkf6kvN6jeNKDc4jk9ogyqW9ASDYt",
  "key42": "5YocLz7kyMQdZYRwMQ8mxPmktcAehtDEWHq2KQcGXYhmNhcYcc2F7wwgabH44zhj7KWieDDVfnwR7rUYyQZxUFfs",
  "key43": "21Qo3JWJbiXHws3b1Z6tfoCfa1kHhsYNTHKkaB8DqegF3KvQY7DrNU2n9j4qZQ75v891YdJox5tqviD8KW47ZW5U",
  "key44": "5UJob9F3zW3xL1NXyPHQzWx94ryGXUPPj5nwUPUdWr9kdaR55PKu12YvUG7r6646mXG6RXq7QEmpa1xrCnsUHLfk",
  "key45": "3xguWHMEP5jtTTraKzd4dfn2iYK8LvBAdn8WHoLHUFPMg9P7x41W1zycf1wf4FUjKz6UyZRAoun7MKTT9hN3XV1S"
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
