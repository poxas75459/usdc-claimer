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
    "49ZzV6PmEJv9wQ7kpJZhC2ygircD58eJbt6ZNMFH7vmmwbiTtNvTgfQgwR2dW7nMNCBy2FCVhNxgLbcFWjxpx7mR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9UQwrPYoY2PMPW63aGZtEX4k1E749VRJ3m6Njpr9xuE9yXQaZfCvfkoN1nEFXgfKLi81nbFCeqBDKoSAhn1Xvi",
  "key1": "25QZYkwatf7mxSrw3dghG7mPL9cWfA1xZyANrrMXdNQMoyJzQc76cUqS2ABsJrgxt3mwP3w4efhvaKd5WdTHywEz",
  "key2": "5hQBh2GJ5QkSyvPx987LB2uPLLJxmxDmC4JxbFPNC34s4tKGYUroTxHxXopVHQutdKNi5TUJT25biPi5LTz6FEFE",
  "key3": "4gtrNUi1dp2TBbmXjernzeqvutEzNYNosnjAG3Hyght1aVJTVU3JgRa5mQh7P5mh16z5eqoPs8aiFBUyFMQHL7FP",
  "key4": "THdAWkVu39ic3SCezrzh5mZqF5d7Fi1KVMbG9sY96EAGUxyDD5tetmXqV3atvugvT5SSgXmwSVmMtpDzCzaFqMa",
  "key5": "2tPSX6He3jZRqTWppze8FaKyJGdft8BjQF9Ct6uJbqoFXDtP4yfopzPB9mGHmmqwrcdBT7DGrsWqeDnhKSbuW2vE",
  "key6": "24zYbsABCEcfWaxwPdg39nFq15ZbNjZYgj7FS4ZK1DK2djyVgb9gHwrXMUjrcCB2AtYt99EjSpL91xGJ4WgoofP1",
  "key7": "pbVuJHhfkyJagJyYVYYegt1VXUtpkkez4KjWuLPW9hRfna3keWnpD8U3pUcg6bV8ZvkLJ8ynNSvVcLqPk4pcNvq",
  "key8": "TCVxJDdWg4L7mgyJk4km9FShwWWyDyfMJmxjxAZ52c3L2JeFAe76dmL8QSTEJFKT576R6iaksVgd2nCinyY2mVy",
  "key9": "27D3XvRvEeJo3eVW3ND7Fz6jDJ3ghxNajjKwxmuoa2qKEYAtGWTmDnpzgXdsy5o8eDiPzXSidrkSe6LTaGxmhfps",
  "key10": "kANwXyauP3ykU7hSuAwQvmcizqycCym8unx68a9ASEHt7ynZd7tifwZ11BZUngWonSB1pxD7LDUyTK5cw5znQMR",
  "key11": "33vFbCAebJ1ouUuQSs16ELNfdDJ8mnUou9XgLeqZxWvig1cLywGgbTZ8FNssvojk5N5g9jD5ZEFY3Pmbo54D2UTs",
  "key12": "5CXXUBoaptDgazgPQuARnKsZaVvkNgMbhgLQjJJNapi66yPttoAJwYRy6tHzJXehsB3uArZGbShiaLrNCc2JHEgX",
  "key13": "4b3vKaJuywq3mBSkooAozBaaQc6AjFJkDqwgq7cCMM6mdGJ398sogwVqZ9yB8Khkk4ErSFPcHwrQRVEXU8DEJUTS",
  "key14": "3QQNHfwoMGC2CVSUjqtxYCqvvJB6XDwoiGrWogc85WEMVwz6fj5V3yfB9DHin3EaxJ4v63hoRoAzj8NMmKnrQqe6",
  "key15": "nTKF2Q2obmReRG9dFERU8L4APVwViPGDZLc39G1kJFfZ6CTAKhkF1BBXXuZPFKNztJMm91becMREAgzWbH4hJ8R",
  "key16": "qzrWnRffcXvQcSXiEgnzRggjnERNxUWNPTnQX7kswvoeMNj1SCHGuyECStJNoBCPXwtuaSsi5Y8VGAuihgSWFKm",
  "key17": "5ZPAGuZL85zhaTXMYmbK9AWzbUmP1Nxf6bG3YuWv9zZziZjtLoqtSJLo6vNHBDqgtiFii7ojg16nn8autR7tfkQE",
  "key18": "2zFaAwjPUqSVVF9HmUvyyhTTqeB3gXZaM2MbekQN3etV9eqCydZ5FKnEVno4nb7riBnrV4iTk1qGpc2EYvVQXNMH",
  "key19": "23vPGQ1HAXXJP8iAZeTc6fjtL4oVzJcN4mTArsVj6HaKDMMxtZVdkKJtp6FvH9zxzX7aL3eef8rjqranUBA1cCr6",
  "key20": "5Pj9uVGSDQe6Mnj87cuAQa8sT16CoqQqBMioeyxed6t4q7qWULhhQjQiDA8xQdq8SKGsnT8sbvH14Sr3PdtcDSQE",
  "key21": "5xJ37riUHkRBLhfWL1XAjZyNefBuA5HqF35VaxDbeyGmAbJqans3MsnHhQncPYimM52cqZpQMAZwiEcJ2AeNjuwg",
  "key22": "4TYjkZjzNeWqXnytdWAyN2Di9xN42nRWqfMBbQVLscvdvuPDMkLcHdSZZyjgnLp63gq8iaikv224GniCWZzvsh8G",
  "key23": "2Ci6w9qKLptQvpchstZ8WNtp5cMmTUnDX3gBngyeY1K1rLeWTBSdrHAs7Jt7AdWDoBdQHdEginiDvJwbCddcc1he",
  "key24": "5RvNxcEWfPCekkSEbJ7vRtAm9AhXypnVXYVzrLCNMKUaoBoyGYaeBUii8yJDZCVkrKYxdWU7iutffukQmFGCN4GS",
  "key25": "5qQ3Naoej4gZQTCcDFh4FaBcnGKyoaUddaCmnLtq5Jkk53mfo5vigMWG3WzDp6v86rq9km77xWP2KdfEQuCMxvrt",
  "key26": "3Kh7Ntt2pNq4XimZHX4ub2DTnvNX4BpLVreK6by5ficu6HLUAXkcBoerfVLaoUjfTCYvQY85NyZxfuj3okWqfcLh",
  "key27": "44tRCD8ZtQsDJ5qVNvmDGyD5jBTcLecrxAPkpC9Dw9r7sRmWDLBMpuY39nukdxeibKzMzBNLstfeaCYGd7GbjhZH",
  "key28": "5nHirV1TyTrXguVxZmATt6XyUvbJVRjv4bBTwBogjQMmLL6tpNmhV5JbLGDfQNG6rGkG2kuUL49Zr1JXJ1BqngNx",
  "key29": "EisCyRSgBWx2PGaVjouPUckzudHMnsw3NKqwu3E2pFWNrvsALrMmL1JnqSQEbhZcwtGRASDerXkQyvdu4gTnMmk"
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
