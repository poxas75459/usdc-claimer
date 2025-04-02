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
    "2gq8KS9DWGaPqAvqsDZAodBR1QfyXBwqMUNSfcncjhpqGMyAfLEFCx2V4Qp7BMk5gcE7xdU3FaARskpy4VZRNS2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMLVBzTrzRirChhB2QxuxQSXSYYZWKgdEyhmg9rUmDsNjh9KQmMXTAnut8mkfPupm4fY9d46RR9ZzmS6QMDfkqp",
  "key1": "4StoQMZL991PCdGop3Edt2EARENykNNtAFxMVJuTB76FdnDj8y3q33pj97ZSWVwCMAQCmLfPFPLGHrEHwH6NQPDb",
  "key2": "53MWKmxze2Qk7Fhyj8nxATo3QEQTXa46Hb4urmWfAxwQtdr4husTQaiGF6tsV8D3KMcU62vGaUGVCn6swhzDS7Q6",
  "key3": "3ipZ2rTJ6oxhC18TJviMSCECDruy7je4n68zhixg7fQJjMhD1QJJe1b6JksrMEq4p8yffohrmEAMPiHC6ePcUrUj",
  "key4": "5NqJjgczYpNGMRATw3titQhtg2CCqcecgZx6rkEU2q91F2X8VALXjmgLmRQdWDWuf4Ye2Kvq3wSfYwN8kCvNTLB3",
  "key5": "eqgyXjfkkX7WA2ssyrWAKKTCzHdMepVAfSoppyqtuTPCdYtTQfDXj8zRhQ3LGDgEB9kdMRGfp65nbT8vJ6fSgyi",
  "key6": "ukzuXAEygk93NKhtUDBAvYHKcxcVwdTUwZW9HeQxoCz5AM1MjPGE7c9aGKxpiZ665QvnDA4ZUgjfpSyrRfSsmce",
  "key7": "22UMHwthrtUGoRsXaEEQPmwoUwCH9tG8MxwVF1h9JUtJfeAqU2UhPSyLC6e8dob122SsnEJcW2Qp7LWyVi4f6331",
  "key8": "2DZSnQ7Cw2LHPoP6TNX3Y2UJsDjenJdRY2YSqAq3bR2iaVFVCXiUTukM9f9n8UezjXsJqgrBK7UdNS75Wkcej12W",
  "key9": "4bNnwx6QGECiwVw2JAY66yweb7sCjHxZyKM4ULqbV7LLGabkcuwCHEtUq7e6Ufm9HtJrVnH4tDfqSERvhjHMYPhH",
  "key10": "37WMB59z35r3ucaXbAiUvnk4cujnCoXsAkkd6GB3gHF4GWhvywQ1eMhMoyBXq2mHynUHhgd3W2QQSHq5dnFFkiN3",
  "key11": "4ABUYZB2SQLwYYyKUtsGPX4jBZisqKdkHkeruK25UqAKon8UrrT1qzbpxGt1uajE1pSypNLUEWgd8B7FnYv1Hs1",
  "key12": "3e8fn2hZ6WxiSRtnG1GarioYKfmEVNyrw6mS71CS3zGEzNppLcthp9VUoj8iLY4Gqe3MM6S2J8xL2Z9eviLkP5H",
  "key13": "25y3ZjxPyugLU1uqaeryGkzuED8qLBfZwT1j7o3kRTPzA9SvnamVMMQLEtAbnkuNRkRD6mzttFrc42nwJfY4ePQK",
  "key14": "vLmX2BbbU7gt7ZkNAes5xgNZjWXzseA4tXX3pyMxJem6APtX1M6yZyuzqWGc158un6UjZaxezUtMJiuSH9WG2PW",
  "key15": "3ExMMuDZPgrvqi4c5iHa8kX2g9SvVGnmZk7Z9CmwMfa1Si1HuwZ2FcUeU8FzCPqJMFJuVKzB7ePtLAjdrgR2nvGU",
  "key16": "2b1KxaMu8AaFwteaWfyYPdgh8FJzE7crZ3rW2tz1qpF5DJCJAApfnudzYgJ6qgy26E6gMRtFqWrwFeobZ4nZvZT5",
  "key17": "32ipuwuzh4mifEqAyGtHsnZU8nuAhfUcvKFMYxiXGbRnksFBe3Sxhishy2MKDtDUJkyxJHQCBqjr4rvj6gZU23TK",
  "key18": "65L2xXmTLritZsfucEhCv8J7cpJKHg5pWq7h8j5Ryq2gBT7f7ZoCXfMobmxXAqfBQxdJ2GYi9higbTnNZWXvw4rN",
  "key19": "5AXxeaXMcbxvsZ8Ca1nnrAz11ZdEqmfU7LyGNP24gY7ufDSnUp6dqQhqqpFgCoA6d8jevX6x2AisRAfBUeCQZpny",
  "key20": "2UZcuZEYQhczTmy4ZH6r4edeNY4vwVHWYPt4cud6pxLBQbNJpqeq4rhSsj3fiZS1AuuWmFq8PUoabQySQwo3oCFe",
  "key21": "2ZwFKCPHEQAh9C8UrhLaaEqPV8akiZJWKmK5L72PBLwj9nozC2Svm3ornc7AWr5iKeMBV9oymtzDqHJxMsgkYAwE",
  "key22": "5hsc23EcPoHfM8HtPkSUcQJutr55x2gjn82qJopY4fGAWhL2sgPdJJ2Dhi5LVsyfdW8J7CFFNNJCcRJ1JjchraRJ",
  "key23": "3BpRDPwZAU6focJegBNmag68c5WrLXd4dkLMLfrsPaHKNRjVVNMCRHgsMMcwLo44SrDasSAqrjcH1NaRzsUMvUWc",
  "key24": "9u4p7eiMSZyRdGUpPYbaERZWwAMRtvKpmT4CVkxAkeWpjNdNy6EaRQ6RtHksTgnLiYTwUcpoBMGiAaSTiUBoFpK",
  "key25": "hDg13PhDbVNn3TEymB1xBYoVvLnLa51q1AAV41x9wanU8GsviaaB3xMAx7SBXzhyZFSS5FQvbaJXMJrYQtVEJ4K",
  "key26": "4z8hjbenYBw9WKu5eY1tyCmZ1ZBNV9csFH2VXj15j1b36yzz8MAJWuiyDSiNNdToEaJJ9urpSQfGTL33LRTMpZJm",
  "key27": "5nwMPt1hrLJrjuR8ssWCFqYmMfG2v9W8dAnERfCEKcRAu5A5JaoxXjxEofnGkH3fduHccENxL4kuLKh4nZXrrxqB",
  "key28": "M72vu88a9noMVCkHZwVrFfYiZXNUeC29LYLHvXDBtgSNmR5UdPp78YmFKQMwVhVtmu3SwEK4GhPf6ZvAhmYUks5",
  "key29": "4HpF9f3aDb7RQq5RnhVsHVQfVXAKbq16ymmBzNXdLvBestsr1gRYKnt8RUaxJKYx2NXa9sjqWF4ncdqEKTYpFSd7",
  "key30": "4bcjDX8K6bTMyqnXHcJaGdFToXcpFnGhaJLbt9z5H8GQtLKR3yx16Sc72iGf7F4QCKqoLM1RdTobVHNwWYCemjGv",
  "key31": "2Cks2rweyssu7fUa26FpZh5M7jG57nz8XCTk8Zc1dHZ6B7du8uoyHuTUBySp75FXZXBS8z8UGzsbcLyggKTgmGUn",
  "key32": "4zyVVu14ZU1hQPap1tuapdL5oexDp2MaY9FkYg1x2u4UwskKzzrwq3aRn2aWwEnowBKuw849M5qeWs1UcMEYTbe7",
  "key33": "4WwTDL8Y8p3VR4THEMqmhU6mut4GzXuFScGVV5aee9gakX58FeRt7gW8gjYpXWV9zTFSrbWVbKUzUiyNpEiWLLw"
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
