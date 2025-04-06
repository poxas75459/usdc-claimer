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
    "Ck6oA8w2YrfN2XGyh2ZE7YwpjBKzg1SgLT9HCCT4B81RA84DQ3yjU1rjwy1upt4SBPkunTnHE77AYJCQ7iB8SgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KPidvbYoqe7APEbciLyiy6A3yn4LXB3g64ogBLykM1484DwHhacy9chH2FyVvFL8TSKhphUrfczcgpQYZ9hbLED",
  "key1": "EmhMnAY7n3gMj5SkaEBDn4MUUdomDLNTDtRxzh38YAu7dUscQK2bguXmoQPovEogodkYPAaUFZ1F2zLcreqFPRt",
  "key2": "3MbhsxEWdZRzq3fpFgM9wbLjZBVa5aKm9cpRoxTYZAwsBgK7oqVJLYufGFGqMf47S5Qu4cFkEVLt2BHWg4PP1eiG",
  "key3": "34sF2mi81YVbb4pxM54x3eko4Yp2UVYEK1KjPgpdv1NUkHYacPYzcojvn3WKdMcTQTRqMqPQzcKJra31tdAHA7dZ",
  "key4": "4VhnQfWrwFvwywKL99Va8NjW9AcgjDaJqntj8AqxGutGFhP6jeWtwfF5wAwLQbe6htwDb94ZRcZZubKwQRGr1NTZ",
  "key5": "E3SYJKEAuPfnGVt4B5LwAVMDqGx38fKCF8rjw5tvZjLNVDCTbvgLqFNj4mYkHjoswAiozxTYa5Nk8tXorszBPnZ",
  "key6": "2euG4Fy8QzptnWtykHMNnoQT3hTvpps3JmCJ9i6VWcFXXN1RGk1aLwrkmvR8M7wE5AJejUQZjLVvB7ezoc5MnAtX",
  "key7": "3Yw7qcLJt1ErZTHtCiegdaogUSvq7QnoRR8okoH3vKvMYKrYvR1yUG9MXoBfmdS5QUGWvHq6JecUKhuMn6EfNySz",
  "key8": "2fBXrXBmhJVmQvehbe9FCTmLUUmUsT3Vn6H7KWv232xYcq7m6rB3pLb6zebA5rReidiw6EUEAPS3qh3fXxmaQcLo",
  "key9": "5TDNRLcHKr5ey1L9VhcQ6j6jdfgqyRFj4HhqqKC7KQRChMMC8zuP435DqY65q9x81wqAGpp2yX535RS1Xj3WknrJ",
  "key10": "4E4cjHyFqLrUL33QWdMxD7ytfZ6KbyurAiZ7uv52XjWugJTDbKKr9ix6Rr4g1RFTx9STuMrWQDh7rmaZRkGcAAV3",
  "key11": "2yHBzRHRcPfS13P2TBGid2nWpnMB9HhfJKRJ14SMoTadmTDdDu5athzBbjnUQu2q2WuDNdjTX1xhzCnJVbTxPUY",
  "key12": "JuRKdoK2MhMv4RzmvnkZLBMxMqaAgLKcgWFCG8f6v8ttbUC3GQRr3edy1nGkjYRcGWtSbpvHYT8GWKLy7CRe6bA",
  "key13": "3MArkuQaszBb6K2gr92UwD38Gr7fqu9UVs4ZapUz72ZHrxC5HHpcgqGHcZ4MTJJF4foHwEx24H3La6pdJ9CkyrCb",
  "key14": "5UsQYdognVcVpoUh4J1GHC8KFjGMuPAMixsV88jKa3rHZP71JZBbd2r4DAuTNCkoB7LaCwyE9ZSqH3EqqdLXgJnT",
  "key15": "5SWkbzkuAzMYwnsjZaR95TDtN2bisHK3js9Ays13SPgQZK185PuQJieu6mR5ur8X5CgwvqdwMNqxBSfTw9gk2kFq",
  "key16": "57Md4CuaSiV5jrGPh77CL7UjN4FG6NZJLeD8evRJdvTXWw72FwAnebenkwyJMdVJji7Ftg1G2uWTnPThs5Mt6JMb",
  "key17": "451XSsKU4HmHTgejDmRDxQ4JFtaRBSVCmZtrjUvQsdvZ3PNhsZ8m6DyMk4KjkNv83AotndkQFtpdJGu3zzQdDUca",
  "key18": "5xdS6BWBki5QCJYXrnfsbddL6ruCCkwAaiFC1pDdjFkqrL2kRy8PM1AmoCzjwKAbvAP93fzyrkWx5FqauUxA9BgS",
  "key19": "55AEfRPKLtL4HxTMcK65d8mxPBbAUsZuD4MWTWty2BQJUojQYCVchgAePUdmvai2JJFAAqDJvVuWQ5QLXZto5kGr",
  "key20": "4Mgse7ew6LcBXmW9LAe3k63yzwz7bkQpSjCub4sG5vs1VUZRuBKMJM9isoYep9gQ2ZAbVhXyjz8479ZMXVuY7ef",
  "key21": "3eQVAxVBAATxGAi4Z8tjZEY7JsoxmwyueJdd5UAu2EBQWNxhsoDELLSHHUGhRXuJR6Z7wXReCqz57ShQBZjuYwfs",
  "key22": "2smjCa589qYDa1Q2uDsSA7ftbFeuXz1NcqkvxdNYoGdKx6dzYZRauSL9FkB2EdqyzQGwEC2kDYM7aWDuzVH39mVM",
  "key23": "2iRQSpH77txSCecUQ2jhdtb7QQKzvjL3bttyY8xPDA3d18RfMeiZ2pcUhkZQ2x3W8JuKtoQocJsEeXHzyQV1jdWx",
  "key24": "VqxcuagSCqynTeKm9uboXGm1TAb2EyenZAX78Cy7FNszySWaEYftrLPHWQbY5sTALkaSpWKKnd9bhNuwebdgvYQ",
  "key25": "561bMUxpbBgmdLJ6gHeXpkE98xiT4J7hef7321o47EU8wZiTgT7baKwHK5Gn9Ph7CLu2FQX9gismJ1DP5AjZCumi",
  "key26": "59PMMY4pekCHzc32DtdiBDCddsjQAxRsFBhR2FsrQwUQBYgXeB7taABq1Sa3kWBmEgVaREhZCu4ko7vE8XiL7tYF"
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
