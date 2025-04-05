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
    "63CnkxkK6xzqSoXuDWwQyiqvvUQGWFv5aChvoNRmGKn6CfRsuZGLLq8uPno7wsqWD5if5CiekYhLmNLFcZkSevpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RT11zsZVBN3uGJMKWu4XFWNrFfaFcnb8swJUqVAiNpY4MDgZt89B7HmbfEC8MW7YLsfNZAMdUsipAA2BWyMTJYm",
  "key1": "287JV5ukRAksSxjKdhQ7W5rYmWU4sxsuMWgnHbX5ceShd1PGvts2w1kUYpGDErq9t57SQi1BvTfUkaNYEbFcExuT",
  "key2": "37Qd8q1WHtr8HAEAVo2skGxYuAibPk52v4VdiDKX3wkX7xJGPcWNcEgsJAodiKR7GTYYJjkfdcfN2rVupwT4zDJ8",
  "key3": "4GNCjGqGyw8SL27UwH1nY1DWKdSkefuAeup7JSTUV9xxRYU2KRfEUSdZcRYBbiFFET2w5cHoH4hUyhq8bbwhbpa",
  "key4": "DK88pJz6SsEm7ePX18VBo3Sq9qREaRatppYEHz8u6tp3KcCheYvViyFwytnvV9ttrXoYMhWSM9tgCZq9bb8Vu1g",
  "key5": "5yX9N4oaKEsW1eSJxS9SNTu3XKhJCN3r5h1zfCnkL1zDbvgqgzD9UQ1MBNxVSzNQDT6hACdKdxRmXLaa9cnYE6Ex",
  "key6": "5JBrEtc2AEa7qsGKUa4HXJfy1wDhQqGmDKeXcHz7AM3myvYvqVHZCfL5Ug98CSFccxbVKfNVvdjcvKe1BcvD8fBH",
  "key7": "5nPjG3np24inaydEiELrVjftvqNNNue3T5iirnDQ8RgHRqs2LBRRt8AZQtnXQHVQyd4oiaJ1zn2cVFmbyTupg6eN",
  "key8": "4ipUqHbnaj3oQVx4zRLStE5CrPWwuA7sPCjBP8uhFai9RymMp8AKjk1apcXhS3NTUigMtFWPMJKr43otPA5XCAWh",
  "key9": "67e2G7AZR6MjpZ8ohKzotefdSGtk36Vm2ghCSD9P6J5iW6ANPEqDQhHgGGLwcxc67hbBRQDEEVUmKkgoPr4JPfcE",
  "key10": "31gNkJB5nJ2qx96ViquYxpMukcqrEGiYwxpXZryzg7MXbn6JxPyY3FTP4n8KRGd9Qqr6vQoqHW4GAktYybH8AM5z",
  "key11": "8uXhEGdpcFmavTmJAWFcN8oqHAHW2aDLNY2aGQ6ReB1HerigyWtkTTncJeHVTyqRdEnc9DCAJH6nEmwR7HaXG9Q",
  "key12": "4ajX4tZCeRTvHadR45seBRCJPSYJ1X6QGTvc14FD7NBX7bG6RcDttXZGHeK2r7WxexjWGftZoxztM292SjAK1Gqu",
  "key13": "5BMcNqVxErPbs8GaebVSb9p3BpxEGexz7j5LB7Xw7on1j9QiKdPiW793dzFQc1uuZqGXBGNRDY3EbGTFqwRbY8ed",
  "key14": "2WfcZMLiGg9fJD2fvdGbtzvTTSjC1NRfZMeZZ3wZfKTqM4v2omBj1cCRaWyB52vh63DVq3CrokcfcCZJ5osYkpah",
  "key15": "3WGfSCG2Ng7drj8mQL5RXw38DxqiovSARvcU9a8RSduUhHkcqG5XafiBWEgKxHvC5DwnKd5ED1bPZ6rL5oKqUY8Z",
  "key16": "5Z12XXy9JRhr9MdYkjtsSjPpUh4mRsZg3FwhquL6rMuQDyoWuJA8ohN15h4xVT7VgFyzV3D8BpfHJK57G5Xopbea",
  "key17": "2KqaRmRYmfCz5Bn5ymkLknaLbLXbjdEfmtERcLep1REV6hJyL1HfoE6tHx5XRLXr9HkGe8bKsCzbACLKGAYMRjAC",
  "key18": "2qSy8BMp5WMiR6SfXg7D9i7QSHN9hRq3ujfyrE7Pnt7bqviXZAtxzndFTyKT2AKgFw2gyhLmyyuxKsQTLpXrox76",
  "key19": "5bPjZrRoH1DPxZLPPR6LNj24QsNybEym1ReXY1MqRT8yKwcEB4R83g6couVPnYkuhe7vVViMhz3zzeuEyKSub4n9",
  "key20": "4JemqE6DUWZs9VcxsiLyBpXd1DXXtRkgaGboXeSVWbZNn9R28ix5F8zUw1HwHE4QfLMzWEGZNMEhwBZNgXS4BXPc",
  "key21": "2a9Mo1cLno8nhgnipsdHgnv2uWRHn9PKRXwSfVdk2PwjsCFGFc1Bcn8FKoDuaC9pMHq5mrt74wAgNGxCwxeboW56",
  "key22": "3tu6o4UoGFoN6H9S61WfYydNKGHu2ny5LoTj44VLMgS4AbSN5Hadx2YwgFGAPX6MJ3hsYN1MCWjpZPiPS98hx9MY",
  "key23": "3Wc43Jbw5EGGe98ZueBduYdWqy35efCVDHeBNm6KjHMm5oTavWrnRGRqVTU6KxHQNsvsAjQVjAQNAgQNLEtKFpsk",
  "key24": "4PDG4RYxnhDDmT5cUscikHypLtsKMuDAnW45DFshXCJ16wVfaR1Z8T4RHw5TvGVngCGD9xeCzbAcoxEkYhoXbBFv",
  "key25": "4jBapJ2QRaDqp1remEQLFbapuP51vR9BRQZGzWCwweSXQ59fESKhZSqvpjA3hBdtbW2auWobpc7kVzEUKEstDiQR",
  "key26": "3x5V4XX957rmUZjgvmyAy4LNLZuJpMt4Jv2BCFxBqbRwfERDjX7A8QJFb8it8mB8SpojKTHCGSycweExCAi8L1Up",
  "key27": "5Mup7yVvPoakGFfYpiVNCxbdbLvQvQz4ZdPP4vWbvo5So6Rs7Q4ZpPf4NvLd63pQaupDPUqw4taujL5o1HgF5tKZ",
  "key28": "M5NvnaEdiqVukKDWWcD7PfUcikooHdAwyt3htTPMYKkBnguZ2HX9yNq2hg6q3Ag9by8FNHgKdupqBCmEBeJzkVM",
  "key29": "36Yu5E1tNavGvdrN9x7BWpVpJ5t6XGBEg9i59truQgvrcaNDC8JQR97cAjtM59deBRrx4LgbiNuJ4sUJ5NdjNi2H",
  "key30": "XBqtes5hjossR4Ph2ie2UhZiCPYiNj8pXM65RNfuUPGQbsHUHExeEPtAZhcuRMTJmRaacyYXhd9zRdHiRQrV7kj",
  "key31": "55vNUohmFBWq28qizTNwnrf6PuSdJqEtRt4wqe3YPN8VVkGRNVS4dTLg8nzscdRv41mDq4zcLoCZhFRuouJqVR6y",
  "key32": "4Rkajg2pi4NipWLYmw1x1GGCWnW6uJaw8ZuDXiJdKSw1TQBjjzve3g5Mg9eLx8yUS87kxnfQQQHYj6jqLvgSvUav",
  "key33": "mSqmzppY7s9Z6MQ5EULr6b7qMRggvbjuNWx7kcxtbFRGziX4zJDJd7cKTHVis2cZHWa88izCPJcXhnStFEtMv9E",
  "key34": "581HrP3md7PLsNQAgNabKV4qv2X64mtg7aNzGmeWYaQmY9aRA81jtq9QU3S7gNgPe6RBgg2JVTVukvSSbNeXrUTF",
  "key35": "3pskFWQEpe5LSoPvHJ1mnXYkfEXxBQbZEkLpmnmht88pUPQ1Jx4fGJjbiyRqQynQwqMDUD5EZfqEJSmPHH34mfUL"
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
