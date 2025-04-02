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
    "XT6rZEhwCs1AxRanFQxFMjJMVgp1BgnNdQ9ceyuKRZnxAwnY88gQcFuBzgAkWucXpjLb2dPnvEU4CyStUruTHNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SstDzbude6vQGqDtNDMxudtWbaXvuZbxN4nAHxNzdJVGicHKQbEFW2Biq3g4FkKbnhxxYy7kHt15PjaMvdtdVif",
  "key1": "31EmYJVXbaNWU4FxAaJC1rLmZe73dks88bbmGFs6YDeo5as3dwhgAaY5LrfM7gF4hhAr487Vb9V37tbJKSnq16ti",
  "key2": "5a1XDExbnSYttAxFkV3zsMR7iErWhToRr6nuUHpBDtg7Rd7WPsHzu8onXEAgHYfVRdaMgMnVReHnzVem7rZNpbvu",
  "key3": "3Pctr7s3HMtr2mHLDMUUGLSphfukS9f5HwgqJbcGMLR64K4BHyFdZDVFZPHV5oJJrT7mkUGnA1ZcabZhjCy3QqYo",
  "key4": "3JHXEmCufXMmdE8UbZzVuYLiU3xJwBgHybJZKcPVTuzzu9Yy815rV24whR45gpBrZw96gcy3idaBvrMN9azTYWhS",
  "key5": "36nCMidb6EC9nRPqGR1vWsiykfm9zCzuGh79N97u3XtazPN8ZtwxasPrgTb8C9N4VvJCBdEPBk61TnspfoEc16j1",
  "key6": "2hrXMryxesiYkL2AmpHR3o2m12d9WZu4qkB32D6mVNBkQNJrEhM2iwEKRCRCaV9gERH9i3atiQDiDMQuZnxrpgam",
  "key7": "3tvKoVtknQjW2PAe1wuZtNsEAoJd92vU4EMbyGhZ7qVUXy17tgVgDkxYRoWjiXrRzXM6TZTpNhfRgE1P9GVSKoY8",
  "key8": "4cSjgzhz2mYBvi7TyN41Pp2bjByemxwbySP6GZLQZGHDX7bafSr5CfDdg8Vgk61gcgTDF9TiMZzAD5VUrmTKDoHr",
  "key9": "bJ13w49EpN5grfcMPeE2oy6yocKnWVe9ExGZmkpYAtVh91CjXmr6cCn96YBFHKphpP5Y4M7ueYw96cdxmbBUQNe",
  "key10": "4dT5K9X9xy9Z2EFQsYgSyt2mD3ZhjpEgyCAtXS1BWd5MPRQxY1gHrjbqGocgHofSZF47VmWkWSgzbyqCpaXf8Gq2",
  "key11": "3AovYMhSqpjT6JyNjMk3gM8bBYocdJKSLf6dpReELuvaXLVoQntweQ2wtJ7RBL2qnfiyUVJvk8K5WQ65hfXyYKVw",
  "key12": "5aP5EZBraDFtE2jih2exnaP9V4yydbsKmRNVQCiKkL4AzHxwocvhRKrQWafrZzgB94PpQJMbeirQZZqmbpuYNqLq",
  "key13": "5JPy9pzrodKT49kUgdLNqwgVus4xWkNSi9kYcdYWKYFUxzefr4ZzhjjiDErXcsyfb4y1DkxFLY1A8ro3yFMA6TrW",
  "key14": "39JyQ8FMctUQXii1UQyjsVWBGcvpf3Y24UnTu1Wey8LBohRQEHssd5f2xai9kgpJ2gSZeKSgfQaPuDLKPeH6hN4r",
  "key15": "3EQQTKZuEHaTQx28uyoGNdVA7evPYxTS22p2FGikMUfQBH9FJS5urQARTnJnE2gnYMkdLgGvCGJw6CjbdA6SZqSR",
  "key16": "2SsxQa2Ug8xVbwY4LGLhxrkrxXkbMpxQG6J8gjMZunhL4THsa8Kw7eF4EsxmdzeMDD1ZfFmnQA6nHBsJsNf2aE3j",
  "key17": "2w1LqX8uZbE6rHr1jVEnvUCkaZRYvxFbznNVYDJf9WmP7ygwWDseeSZeQPLR618taN4ewCCoh96sgbBgEhDLnd44",
  "key18": "44Um59LGnh8GPFgKtXrW6Gkd41RQL7YvMQ9EXyS7TRKNwN38WjsQrJd4HtLsghCcQGZGHUtvrWMTVaWB2BzVstMo",
  "key19": "3Hb1sNf2GLMacrCUCCjPjogu2f8a2DK9vnV4WPULaDNgRKt1jVT8H94fYNCyTgGJU6emFdnkKCnSHH8DFxtYWuNp",
  "key20": "4sSd96o88TYTA9DEEiVZCMkbtwjXc91HVTK2XsWhm3d5pSfCi7BAXHRSWyfhhV68CymXc4FdtsPcR9LnFyYy6ZMB",
  "key21": "3wrdvaCu2518M3SRDWpppcufikSMJBoaaCzgP3Str65LuKRUkUk1xXCtRD26XnRxZiQCoqFLiYryuCvLt48tknJ1",
  "key22": "22p2xeK5SL3u9DQXw8fee4Ez912FFHYBu9XVGCNkivduM6aj7AfBUfBTAnMhQBqr3zYeN3bMsSg1LahYPxYWGFR3",
  "key23": "23jfFV5oT1UgAtmoL1fJ4MhVEZi5bQ3ZvNRsnhLWAdmRtvQiHm2VwT41EpDi2w8MKuhQDeDugn5PuSEX4W5TJRiy",
  "key24": "SGDNXYS3GjyzcJ8H64fBjJNbBrU2rdusA8jPsRjkFPuozESLmLjzn61oi68MQjPFSXCSV1afQPf35BMjWa1FMDq",
  "key25": "2jDUb3HVkmj3N4Eix1tpy7dRfGxYnKqJzWJSuGrhZevQANXZNeUKxtmj9fvajTSAZ68h2VDTC1yYmJP8XoU9jNVd",
  "key26": "4Wkm8diFtJ9DMNDCgx2iNuM91zTk8jrjaKT21LyduZkEMZi4D64Lr23fpk4cGV5JXdDqLYEdprrLxyR2Q44BzKou",
  "key27": "2itzV12ifSgmJ822rG1DAnVTZvuaom5c9XVz8Ff8N8iQN2zxhNh9ZJkEiSy5iHHTPcjJBafQeTGbgbDSozT3K3M7",
  "key28": "EpFSVcMYq3MsVSnwoEb2ZX8M2LTkYB5fkyQvc1YMKkjdqYdtD8hTp9yeAndQuPyQbYkxLT5Au2Zk3SJbSeYQH6z",
  "key29": "3hYV4UWqq7nE8prX3UZMkS3y9d83Djw9RETPx3r7EhjnLhSS36VczskeRAgeh8QQ7bGickGAFcqX8ahUy1AHd4GL",
  "key30": "3ineduPoAoB4eQjuGBENxpKn6UbV5KkMSfR88okiK2976P8M5cKhM886i2qVTRYDCabFxYvNwmH6ivpdiqqzypc9",
  "key31": "5QJc9JcsVa2nF7XypswFi6GN96UMFh8pM9gRUJWazMTcVo3EjdoGa44tqkZThPNwVyYciqsEFZqCb8Xeypqj3RAx",
  "key32": "pVdShJkdi7MENvc558FAsKHDvHXTWiaugH2CzUocHLvK3ygczBNu5Nd5YJvZfidgZdNCVJtQVXrbj1tAipbf24v"
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
