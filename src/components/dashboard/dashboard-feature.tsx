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
    "5EcxmaZN9E15aPGKt3FURkaHZJzwHHDQP38B3yRuwsWsgdePn6BSWvr3TJ4wBPoETYkKHqx9y6ihkMxWDbtiePn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vEX4kGBAkHgxCzSGeWNDdaZ7eijZ6UTNePi9irBd7dx4UQSottagndfPp2hkGbem2d74e3dzMEwBaKdAdmb3zFU",
  "key1": "4P2GDY1Z4pzY4E6p5MUJTwDB8LZ59WzGtpS992RT7HG6QVwEsjzZKYPyQRSsjBDLrBPX2Hme4D1j5Ar1PhC2DL1",
  "key2": "4SkdnbTHpzCCCSk9qzX9ddFSEfRTmWsCxTXgmskDp6qHybM5ezAA4sXk4ZNPMBrF7UmVUqKFiH7VnkCCvuUXY5Gq",
  "key3": "4PUWvSbJ5GunM2pXwmyQ9FotocMa3U6LKRQzkf5FjXNwkdWjxtddd7ZMBC4H63EqCvzYi5mEunZdp1mUFrqfbNFy",
  "key4": "3NvY6ptEjrYvZVAMFsZBorsWPotvv6GsfAMV6dRaSipHgd1P7WZa1dFijzVYtaNguJH3UX7taSuPbdFm4c8zn23Q",
  "key5": "74iUf2Pdz6GikAu6vkTPCYFHDLRzzr42215tohMsmxiA92c2ubPDkF2tAw77HK323diL52rrd7BDEmnxWutvQa7",
  "key6": "557UurjpjaefsVKzLo1Lm2o8zUT5WoeMV3wujM2j7uEiCwCe1HNvgZTy1AJBr88dbuTGkzpwguE9QefXTN3BSSDj",
  "key7": "5hJssppdZq7ATovoQ8dogB4hXMwStm2syBASopDdPveizRLyrCNXc9673KhwSYZmMToQzwjLqKdSbVEJL3BhV6zS",
  "key8": "27PSAFqUtTVSQxLHgGm23kXGCRjd7f21TARdHorQxW19xFozfKmrtvUoPWp1rwLzb8EyeHtAFRJjBm9RDvWWPk6T",
  "key9": "6wwaQpk2Vi1FFrWWZSo1Ua71ccbQzY7zkA9EM7jRjyPCXXWa8Zvb5vvMhg9bptPW23PBTELKg7esRgPHq5EZEqb",
  "key10": "25aH7Z4w6eYEFsC65ubrm8ZJEt9NDzqbtvABkfkscNG4R3fDb33CijXAixiJbZj8pN6z5pfmKAVoMLJeCPCje6XK",
  "key11": "4feVACghKAtZF1FFLHXP79d1oJod2VQiWoU1VqDqt7PcRWMjzU4gmtqcFBCKWRhbNNgcTURQCMmkkE2GGXykNWZi",
  "key12": "37Bk6EYW5BS6m1ydvUEy31Yw34M8kd6XfZTJJsWrpFnfq1DnCTFYuB8NcxzSzfcvzBUchvJtZvsz9oxtTiUxSt6u",
  "key13": "4wCywL3Lxca2S4xe7SjmS5ASYpvL1msGuZEqhE2S1WNaLMq1YnoEFHAT1sTfKFsrjPTNDSrCk79rjgMJVLqogViW",
  "key14": "jdy5o4UCMTkryoLK6ci9jsXZpnovc3yrijjaurpEhYwrHJ5rpfgHMEQ6Wx6pQfC6u6a5UmpxyFfhRfoT4tzgKS8",
  "key15": "GRbonACU3qtUoZXT1MUULktPQVpnQY6kwiDL3Q6kJBCjhondz5g4obJ2URboFxYhrtC1BC2YjFgdtaZM8gEfgDC",
  "key16": "KuZ1N6cZJt9szcwMRH2fb4kpH1aEWpLV79gL1N2PkqwQb2QMj9KRpt1LAHi8RqueV2P8QzEWyJn2yfkco5csicr",
  "key17": "Sa7BtxsRoPHjGrWqipxDcsuQ8YQaFPviDpEj3a7c252WHBvBBR13quk52kVhnNYYeP4w4aU8VSqvAJnE6SSRZRp",
  "key18": "36ULfSxJvKbjwvYvR1KuzFFpZJkd9hakhPDjcAGsjMgxEsr1DFutLMKRB53GQ6pCJCCCpP9QnmMVwNnKSRrk9vs3",
  "key19": "4LrydYKVn38YowUTWkoe4nMsKmTPeT3J3WdSZowAaQVSKRZ7fdyG5mcPaxq2w7DCXs6tbeu7r5pmKGH8WVjCYgwW",
  "key20": "2KapxzEcgR5q67sBB6fL3bBsmr6SjEDuauX7NHst6C87DNMvbP1aey9hPyCZ87HSjZhWx66my3JADUtZZYxNfM6C",
  "key21": "4jDtrtsJsZUxWcSUciq8XrsUJZk2KTTSgi4Fzb8QyEa4F8Zzcde83jcCDK1yEKj5fC3uq1UWQXd2tadqM7ePWUMB",
  "key22": "5qo29YGHZS4BnjRhG4i5xjRMhH5WpF33sz7vusLD8Mb2j6msjGftx85dc2E6ibKcoKgBfn6C7pybWZeQwPUo2PsR",
  "key23": "N35fUkkwhRQh9jx9Tt5zrr2U3NeSXtvR9ft3Wbdmy9KA3RpbPHiQekiUXmP8KCACKrg6a7WsbcwZxVi7u6mpp4b",
  "key24": "4JDgRrkF6kie1neDtEKiZZMKWrxD2bJtTqvF9hiSUxo7MugSZ7w2X38GURvPyBcSYE3psF87JV5Z7LhUG7k8L3Z5",
  "key25": "3qVTcHbjoGyBkJvZ5iYvQ7ca2uM997oD6yByfKijT2yzfSG7yYKfEwZr9nSmzPav2WcRuvKBkivnb8EyQWoYbyVt",
  "key26": "2pMjAXBmhMaG7AnqJVQyzcfnbcr8mzqqF8JvV5qEb8r6dZUE8j5Nq52q1BidwPjNvtucNe14uc92D24qsW9TkEi4",
  "key27": "G41bjwpvZ9qTuTGzDUPqFzbrtE4TV4jc8EuZgtJ1UjxCL7XhwNRJzKC1Es2K3REiwwtNSk8Atre77gAczcKzkZg",
  "key28": "eGVr9SzUfshPw74DxD4GUs25rJ1b76DZjMMSP5eJhddeSLqUzmCA9CQfcSGbHPPh8nwskuLSjQi5z3rXXLRAfbG",
  "key29": "49YViyngNqbr4N1qSC1j6DBAbTAA6Twrhc21cf9gDM1U28bDXWVQA1C8yUHpEUZSKQM1PDYr46TJAquSgwqJieQb"
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
