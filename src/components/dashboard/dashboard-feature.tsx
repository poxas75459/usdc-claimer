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
    "3gKuvfoUYzpUSbJnXRFa2WP2jKEcAs5XWBfG9QCkvTdrhCpRuZDgoBKjXUrPzRrbtvVEY9n25xqwYEGZi3aFhL98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXX4jytkWWyU2kZX7gvDSKzqjiAtggZCD7zpWg5p89GxFFdjbt9cjqbYR3FxWApMBnkoPzFStBH5sjC42BqJn85",
  "key1": "3ec5qnSc6ZQVYy2RsbEq2haVHecBwyzQF3XJkM8KM669tN9ucFpjEYo6g7xd4KCd7Z5wj43kWi25b9aUAkifhRji",
  "key2": "2tfKUgzJyDtjyxqtdjb4H3SaVWDVNEJHQ12eY1QRNNG1TG5J2vy69nnACB4KU7wVXX4tSc8ARHW9GNKwuWwjCfTM",
  "key3": "35zL4hb88xAvTbVJHi7Z2kEpf6w48UePRg7qnHwQYSDZBLrK8dzYoKe9NmqMLSepDpvCRFCe3JXfxdLyiMxPyanM",
  "key4": "34ctMAM2JuSB4k2wTNnNvT5pTs3FPWp3SYhkqtdkAngVmMSC3zaGo6nAi4jznDjbznB2fh3G5eUExJsAvpcVTf4J",
  "key5": "2HMbRYGqpJedLPJZg8MbaNGJCci2H9Kd6sXnHFQtfwg72q9xzhYUCfUS2KvZUa9aZqrgrR2Gc8bP3QP6p2D49589",
  "key6": "32DvQWu7tdDXtw1emhhd7x4ei1Gttji7xVyCMTG5AWb3muuLoAzMiYvV2csgzn3ebJHWwSDrtVNbB9vmYsKzHyrL",
  "key7": "3NsQtoYq1oUnjTKebZKGV3oPp2TxS5HhEdiozgwLAC9fFvL6QiWZKZM41rgQqq6Yi7Ny8RAwUPbBzwVKQ9SS9yMg",
  "key8": "jEyCcovsEjsVp55gie7xVLh3L7aRKHaxC38wgQKi52yxAcYMEYWFy5BifvnU4fJAfuw6tf6SNNoq3Xi1Vfu22Rx",
  "key9": "5pvLzAnuYeUSDc8HgeAUmYsPBT5ebnKEWBTCGw529biBJJ6mFjtA3e7iYMBD5tk7R3w8BjST6rW91TtcyxzmXXmk",
  "key10": "1BHNryBNheeskB1nSFg3E67VxvT26H7c5g8co7mp9JsAPqPYubns3a9fnA33bQyPhpircgQE3nvCBcE5YfYzXHW",
  "key11": "PV4QKuMwW9zS4B9MWxkLaYkjFL8raxsLdt45ET8FCeM9DEK2hV9tKqzVSZhMmi7tLra9zawVTZJ3KxEfW6p93ni",
  "key12": "2C5DgoMudi8928BoNuGjJsXvKG7xkqxHWCG2rhUbL99mz2Xj4DJFBuKrsZkd4ZzLkvm3KvxnTxiQRbQiGVh3Y3cw",
  "key13": "3uHxyHTcPu2NZ7pyt9b82jCQbbVGBJpCMWQQho4wefRVmTpb2EqK844dsAZr4fPosfx3bt8F8YPh72RRVsZfxypB",
  "key14": "4mN3nCtLp5z6QPFtewZuF3w8uf4y91jwzCY3xH2M5E4LU6JXN6X8fnhGUUc6soZCiGLfsoAmA3PmTVjGQTBn3g8",
  "key15": "4hVefJSSRgvc8EYYHCSzxZ2ahvCtLt4Vt72prJv3e91tu8dHr4XpKzLgLLjfmVMbWhqUCdAy3iPV17Ase3it6dR6",
  "key16": "3GH5vvmUc7yzzBAdVeR4oE5fPrdUNh1jmGR1mhnmipmjvbAex9cNdaydSvrdA6os1Gqu5WPNdkZSaFaSHZbWtb1g",
  "key17": "3xtWYw2t1m34aNQQfgpKs7GHDpj4M2dKiFrL52YssjAQunxjiuqnKeqGushUykWGtGvsx83yeesJNJqHo38o9gBb",
  "key18": "5gXUFbpV7P1RU6ZMNY5pZCxoPXdruUNWW21AeLXsR4BkYbMSSB1RTzrbPmYvpL1JWSGWfGHAd26yaSsWRJPeWjq2",
  "key19": "FhQU8YpzUaw2r2NQXd7w76SE69FLA3eRWTjCsDeMCwfn8eG3mr6ecBvU6W2hE9KEyjLzchRbLx5vyprZmv7yXfP",
  "key20": "61jgGkoddqeQZjJ8WGoQHNr86x8z7s99PNsfEYfixTQ45hs6C57UY5c4psUQakj8vu6KuttpoVQiHA3hGmGbp3y2",
  "key21": "66G1vicsQsvNuz5Fy5eocEHSJj1gZnAqyqZtbRKZThWonUgSeqAgShyWANPrWMDJBbg4Ebv8X6fuAy8Moa4a54Kh",
  "key22": "2njY5PMAFP47CP8XZ9yj1Mbu3bbtT7uFCW1vgnd6Sz9HKLFMR62z4XdVfwnnZoKFHV12tvHUGEyhRiFHiaymuoBc",
  "key23": "5jgTsLscQeoAVFDwafHgqioxws7e8aiiE6eWYHW9KSX46EvduRp3JzBHMGtuSfVvRRKVypX6GsDdRi9GQeWST5LC",
  "key24": "2XBwQtVZFzMt87YrVgfoQc9CuHxuBmzXQgjGHzreBN1CbUfZaJib3vemdAMirfiAtLm6v7MG4Amy9g4rm9uq3BZo",
  "key25": "5cggo5RGEjsUFf1GajVCTsVVnsDzSGoEsRvxn7rAzZmUrtNE9AgobYJCdYBfbgL2NvoHjXpcqditBjzTnXMtfcQ8",
  "key26": "4L3UE7ag4pcdW6xNYe5t1txZzTbob7NpGARa8BqKy2kS94envnGaJqifbhNSBPDREvbL6NRTFwgYZY9rfGPMwKtW",
  "key27": "RPvn9fxtRj17UrgTtucUozxpj21fz9HGxeBxNEa56JhF9i3rNNRmdSCa35e9JGnms1sXSd21NFVtuTKYeNd79Qz",
  "key28": "5MRobqcWoce7U1SnsgzTidSNJ2EM8J8gn1CpFocPyQ2iriQsR6Wr44yMh9yFap1XoxJqXVog73dSZidkSkaebpzv",
  "key29": "2rfF8YLEiLV4SQyZ27g2zj95ybKL1LE3CBqC9fhyMpQ9FiXpMoKQgZcRKqdVvb7BiWaPaKSU1Tv6h5aG6FTih1ZQ",
  "key30": "5aGG1EyEYEhDENKc1QbVxPTefVAShzR7DZ5jPZXgY2AP4AA2991wKbMfpDJc1fTJ4JwdFYdzuK4wjPdoHBY94qZM",
  "key31": "yNW4R6dRydtCkks881nkZy9bdjFvsC1Eyo59a2pGkaux4VV9ebWYJSoSV4D9eFaYQ45yXMnaEeymSEMv7CTwa2b",
  "key32": "5tYviYqSj3qeVfXT1FqrZqUXuqfLEXVg7DcDVxneDZ5h6ttc8L2aGB7JwKQxiB36pqQPswJoSswsMZCnqCwLYh5P",
  "key33": "65mTEEFGfJBZQqLHieSqgWK9L2qHx1nUo1ibuw12PcYoCTBWoqRHyBSiRPRWpycUMjY1tmCiRsqTz2rA4xbvX5JR",
  "key34": "4qgvQjjUYLWajvT4HJhjaWK5djj1SFwLLoxqmhR8LSMDoGjvfA6FcxdguUjJwAABUfdk6dK1DdTsrJ6gjo1VgBem",
  "key35": "5qLdvYpgPZdoDz9q9wSCNmJENs4oae5zfvpf6eBhDiExRnKzUbDNnrbpXtW6ABfEcwEBYmGtZkaR5PnrXFAc1h7B",
  "key36": "3MRSq3DgH7L4i27nW3mxZc31WYWVjvJbjMcjDr44SmbTg21RbGbX2kQa5rtAPGPoh5DmxNWEUHidYEhz6wSGLhSm",
  "key37": "4Tk3zFadNZMb8x87ueELmWuZbfCJbhRmMcUo5YUnvbAZeWBJTZiPwPenPabK65cCTfzuPMpefg9GAfk6Cz8eSUw"
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
