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
    "2Go82TXstea3LyssaQM3yAUkSdsndPH6SeXhr5ZW4mXqu9uNNFkFFBxM3MZ2YbbWvvih4q1dGKPsuPMdYB54mSTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3mDy817oTmpRAz7AHNwkZa4vwPP9sabZrzitX9mpckcccGRC9LmVfXACJNEGHZe2EGSCHYU4C6njeYWyXgQahA",
  "key1": "QNeTMdvywuMXnYGMQ17mTxao3DT4HoMB2uXYzWKR3pqqdYDFEgcQgt7JoeTMUrqaPhzDh5tiDAjv6wJiEmp5DCD",
  "key2": "4h61UYFJ6nXzAv31hvWNSA6kGEuQ5XQDbVe3EtTXmKqn6afpfuQRdepNcxoKpDTP3hyuwnLYiyuTSgXDZd9NVXNp",
  "key3": "2SKCtYxDb9uKQe5VcceEBLZTXpLzHthzM7FLnsimhgj3L8moN3ws3dJjtytyj1ZJ5WbuqhiXYRNhRUz7JBcQSzFJ",
  "key4": "3MnFtaTUZPLiqYLH7LGCtFeLYarFKBwZ83UVn5oZfeEoVErrGTUvpFbbFCz8qcU8ptVveL89LNFkUzKaocpDbPeP",
  "key5": "36h9vBxwFWaUBFDGMNGcKgkPA6pQr4EovP3a5wEhAkvMrZXDnPTQCFRptTTfqpEZzmh7XaiLAioSRJnJuS1GjedE",
  "key6": "HMHZN86T5prPXwGNxtEkyKFMB6TffT7jNn6tyvPt6LDQxuFBQiW8dDCXrnLmvh4NA4VbM4NUDnM2FoUyATKhjSe",
  "key7": "3jdXT2CT182EU3si7GfVffbkKyK56D6icYPr9Fo4gaPdAEHnZdHPcAt3fN22rxArSC4x6PdBEEHwu32KYdTFHcmk",
  "key8": "RUr1bjgiRfmMs6YEPHdwQ53msrZP1LSVyoVwuBCVXRw6oWZuwSnLTA8yERKTzYXzLo1fLaXkcXFZmiEP8aZPvrv",
  "key9": "5RpprzorvV98JXkgmYu1A8a4iYM83S9BskSUR7iG2rumkfPUHPRnz35W5DRqbcNPvv2CBay7E2KiULqKsEv8rVGe",
  "key10": "2VaA5nD9yUJdPKhjnmS9Z8kGD64t2cHGesHpFLjKTrHSXvdsTpgv3UUfmLX7zfX95PWe4wBpe2btTEaHJNZyaZho",
  "key11": "5RJo8MEPwvRhDuA5VRL94fKZNH3Jw6qz5A58tQfzp4tbFEQGYZRaEz1ZPfZQzBtqrEYEbWp2Q1cCR8cTjXyRXDqV",
  "key12": "3RMAgcJEuJPCVco6NE2dP9LNNfy95dw4LR2yRTPMFdXgxCJZ9XBPpwVUDQsiQb3L2JdRJyJNjatcGZNv9xyHGj1z",
  "key13": "zs64DTEBumCiGuQuwB213e6qWc7Ry7MrJVCD3CBFrjqgsjZRaMRqbxbqshm2k8YzpMkjwyLPWXXhtNUxCL7nHqV",
  "key14": "2GrQUMCP3naMZnejFN6r7afXhuugJNrCoANxpuuqs9UDVYB5emdzP9mfttZkhT6cefEZ3TRwZzinCKDc7RxDQKN3",
  "key15": "2KzVkJ4chssGM1mdehRdAPSRkg8XWknHTjj8Fh4T1FspTfZFiiev3qw8LhR1cR4L9zz1nzNEYzYewC1PNWqCCFPU",
  "key16": "mtq7qdz2y4DFLHHfT5tGxkoepo1FvCw78JyRNkeQyns4DmBpJQjRrWVZLpvnhXMhtZkvvnjnfwEp7V1BgJAsjiy",
  "key17": "3ho1LDBMNEp15aitM1dDByN1rZiUwUGgFeyULmdhRV1yDZXAZ7cwr851946zos7cPozHZjmvgdgKmFAWY1pDVF66",
  "key18": "57CBzM3qrBCp9nDNmZiZPkbm8spK1hRJTwsUNBp9GN8AXNxS9mC5HaX57jou91DBv2N2jNaHezHXkJdNme2AMz19",
  "key19": "S5LDtC8uaiStr1Dfx8aUgN8Fs3ZCFBMzcXtx8Kp4LkgaEpZTptUrD9QPUwMe6HLQFR5PVxEQNgHHgEF5QbXKLtP",
  "key20": "5BrSbRBctPAJJF13Fs2CQ7KeicUys42TNxtpHk1Y9JKA8qoCAnRfECnccgYzGrvxXE1ZUTuCfRgwabz1RZ2bRuy",
  "key21": "3fqcnZvL8uQnGsV9eAv1xriPUzyUZ8Fmot4FuCFDRWHiWvTijb8KB5njQeFhs8FcHA2xSSYmbbLQ7yWEMNYSVRtE",
  "key22": "43SjhLAGgKtaebpPZKWnJN7V924wskmXYC3fStsTMnLZ9Md3Ep31VUDMgtajoHpB9rkGUy4x2xCw9pQynJYXwoSp",
  "key23": "5h91L2QGe44ArKXni9DUeQGDccbLFmt5vgRdyjfEKvokh6hmbPbLCbebzyT2eaku3CcyDRjnYhCm6Kc9z98YLEPM",
  "key24": "47aNZBggzrr9VFnHx4dByM7R7NvzW17RTSFkUa9JAncNH1f1pJAJbwwS37bHVYwLhGQA8b1tzNMwakbBcb97cA4Z",
  "key25": "37aFbeHfSouo8z9sv1nPLGcEPcuHS2pArADcFm6jLQmQhc7mmSqxtSH7VKRn9FR9Q5nEnZCQNy57BYMyLCXNmqP1",
  "key26": "5BQruYYzQXv489MH7XJuq6Cz3J4c9y8Cm9eg9it9ZHR9fpUhSMqMxHnoY3Csfx2ioR8Nh6s6mp5mS7qcuExXaD6T"
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
