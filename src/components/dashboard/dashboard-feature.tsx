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
    "3vjzPu8xV2YPTsQNS2NShu8snVsXwjggjEUEhKcJYPNV1cx9WENqDPhTMuKehdvcSrGQ6UfuuEqkmjSt2Rs8qdoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUyrQfj5LDXCzveZxdmZvnaBtag6qpKRBG4vxejt7ymmYxLHpatyejJKBPeNTmjiUrzgXZPxmtLURK86ZJPXWQY",
  "key1": "2bvNGAHN4cLhHv34ji5TXMQo4FiL79HkSJvNA26vhpjZWsKZWagpbL3BY3vQWjxAw3H2q3pDmjc8AwDmge6oTfDY",
  "key2": "3NVXz1jxwCaa1T8WjwK7kiHh7NfdYSwgV3RRWeEnbmAEWjUE6zXgyWiStVvJSucvzZYZkkvHtdudvWMsszx9aLUj",
  "key3": "5sayrccg66MNqGUPJbPBBiE7LXoxQm8KadcDMVn2RT7G42imVtHkguFc5QYqgQridCK4mPGYF72TSzYM9YHW1Ciz",
  "key4": "VomcVvun3AFjVxFQzGSDbeqTebAL7X7VyTK7hodNtXDfJFtvVrZFeMH8prUoY96RQw7WVSXNUvUW18ELDvWFEFv",
  "key5": "3KAY4gp7nE7vo86CDDS7WQjn3pTCHiCqQmDU54DbYTn7KUkG1hM8BZcocphse4cSDDCLcDeg1q1RMNhhof7Lj31S",
  "key6": "3FiPiumM2bDrFre2w6BDAXycrYY3iGyBtCrhVxXT1pWEGshiVSRvQ2KxbPWF8rd7c7VQi4SMBFQmDDEJUgreuwtH",
  "key7": "5noZTH8HSe9NT8RBpuhm8mETWibunWWrrK4Nb9dh5jPMGS6nKkXKA9pZcE7Sareb76Bt6GPxXJNxYeeKovDxxeMC",
  "key8": "5dc65fTwFjcrHsAQ95UHhdsueav97vB5w4y3PuC46ffA35LZCcjJrYPb5FUPnPWbyrMs7srzE4mkWCXKEo6htpAz",
  "key9": "4v5XPJ9rR2o2QZCRYecfNMkQapgojuMGJihQ2uj5Ts9yVdiqc5pQbKnEr8oMc6gpjkDdyLWZQUKoBEe5daKZStBE",
  "key10": "5j85XbGnK5bTLgGrEEeHUkCACAXKpoEMRqAjPT5bftUAkVYd9KLm6M7uDYGe2to9rtooZLnnTQNBdYaLKzDtAMTz",
  "key11": "5AimgjrVqbWP4BYrTUPj7PSUE2JZGSwh6on7aQWMz3Z5FR73mbMckRtiP1kECvjqUZQa77sELkFyEdJdyMVqSgkp",
  "key12": "3XgJuHHyHTLcsFwLH4Ytm4sVLjPkz95UservK7xeGDjgScavdMjpyMn5m7VDfgMw7DvB7acAARpKjk6Q9eofJHEu",
  "key13": "5rkYG79ftzhEpyJWeDFRQZvtD8NyNeZHuoi3cgY63qLR32nSQ7VUyBgsHzFpqZ4t6ae6rXi8zom1i1BrSY1ay1iF",
  "key14": "3oPcLSthN338JazJ2TzmrBJcXHXrhdbGqjwoDEG2zxBvpWciV5Krs6FqDbaQxY7s2E9FmaZwVA6R1Xen6ENdiHiC",
  "key15": "62nCRYSXm9MtCrMaW3m1YHQU1aQN8g8rMR8R1hKeCByuS8vXHMeGUYeyhRCuXr8qcJLKZEhpuwJ3veeyr4Pyq59B",
  "key16": "5VXjcfWgscgYBjRj7MPnfPckZRSucyuZQGXwRxWnpemWMRD8h8Xpy4zvdynKEsWCsYjDizAxK8kp9hRCnCxoKPeb",
  "key17": "5rUKM4bAfXdu3E86yj6RJYnybuR2i7HmTBcEUcRTRyMi2VwCw5H2fuZ3hP2yxSckgqukMjPy21rqqN48X5QETRT7",
  "key18": "42Wrfkk4emVFbWScctxFJKRXUVnW2dqRw3qieKWuRsL2pjp6RD8EnVzn2XusDxerPrtywVqEQKoddmbP5vddt7SL",
  "key19": "51BJpF6CvjLDbtSgFz7TQAGamwTRSq9F6Doti4mncjNjcqkyLpwm2dk5DuRcnY3gReiitHd36s5so9AP3geoYVDe",
  "key20": "ioyXthhKyfyJ1GVLAwDzMwMYwGAS3nzuYWTC7XvBMU9Ewwm2VfXbRjqCi8c4irMZvpzcEqY85rmM9Ru68Dmm3eP",
  "key21": "5XRrYd2PR8ZUTWmGhuwm9gkoWhsgvFnAZuu4GxU45nCXMpbXanGbRMGpodp4gCNwnnXKNKRhyntXTzvdF6oyr7Ni",
  "key22": "2DAW99sQ15PowK7XAjV5GYwVn1zEZFBRoTai4b8gryrqPyyoZNBioXaDnKsX4YTRgxHdN6cqkf1xAPV7MDC4X7uo",
  "key23": "eG4qadmny7QYEvCMFgpQSDfL5rLDRihtQJ2RZWRXowKpQf9QDSiUw7As8K1BG6ek8jBQQn7ykpRzxKWL6Y6AWaG",
  "key24": "s2Nx37yMGS5zHxdESBfvUsKEDa18DWgXufewnzLKm1WFNmthJfzmnKFvxig8yTCy9LdoAY9cmeoLzkhfQC3JTuJ",
  "key25": "7aqUUcE3cfS2Thkp15LJbH4wiRiYJ3GDUFWXa7eNBCWFRqYdRgqe9WAcWYvidEPrCgYcXqvqtbTmGnjFGLLn14c",
  "key26": "s7gYt7i5XrK5sDowUwoMcuH1HrSrjr1Gj5GVyHsHUE55NGMR4WJi9JAY4f3AQzbQbzKSXs3Tk4ayAAv8Dyb6qhh",
  "key27": "38asP19yMrofoG9xEcfiPYEq58kGbBo9jc4UNJC39Qv7SPKMHdZVw4hJwkY1HhPJDQc2xKDmetKPxNSih3Mvetjc"
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
