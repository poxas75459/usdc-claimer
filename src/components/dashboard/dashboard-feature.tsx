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
    "4YUmac1YtGYo82bQuVB9vLLaGbBDwi6UAfV21N6p54Rt9Msn1iQmMXLiQyvzyZm531Knz9L4rzuo26GR79YA5KfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Snbgpq5xRScsoFbt4LAwwK5nTzvoMfCcERhp3tMqrVwmbKKAU61oGd8iUUXXuRVm7CTn3JKvzGLc1FN75QjBDwn",
  "key1": "3mQ1ZtLZrxYNwMKnPz7pZXoY6evGsvbYhTPQuLoWEJaGUeNCqw2K27J1ikdpYqXwVbZYwXgLoQTF6WCLmgWzw4fn",
  "key2": "5WreA95SgUmumHieoPgVu8o33jemSKSnfyMbp1uLqdbq1r7ktzfxffdEkaH4gdGaf9S4mPwGkz8VULm4okzxiXVo",
  "key3": "2E5u8YjE1y6PSARWvMXJyWVfbfHi8HB89VGahv3jD7sd3Rt7byF3RMGjnpY4FuQJYFM13v5teckuMDYp565JczUm",
  "key4": "5bgV4Ji779WJ6AQF87xxVcXxrHc1L2E32EAkRrib3xxS7bUB9rH9En8jmdPKorZyAwUvTAuHighWsBXvZakPxuLg",
  "key5": "4nsYRdk6sioMDcQVLDEMP9eZrd5b5Lbpp1ADxZMbqfeLM7ivQFuDAK4gKJqNG6fNhtpLfUpuQ6xEQhEsQUu3Xfui",
  "key6": "rKsngyo8g3pAc5ZRL6pc4t9nqWCAQX1HatxMWhkKAHEK2na9Jp7VmLBFRq8ugrqr6Za4ktmnzKrR2D9hpk4msAi",
  "key7": "65y4UrxC8QuSmCF6jhRt7yPFQvc43L6MHCqVMuiCqtT5AvbfGu7uB85DwyX6EL1enbeDWNAuQvWuFC5rr5xNKm1A",
  "key8": "2sHjtkh4yNThqE5RdweDxJcnAnNPSESnezXLgChYL8hwrSQT7FNwyn4JTJGg9iK62JMrvQBRoJCnztCcak3d3myw",
  "key9": "L9hKgPDqkc79KcXmhwy1JBVszaDwcKDqZPqjp6Ho5bmxQWN9esLf9MCQkyPG1YHHDPi1ndgdfbNBw6BwpbAVegw",
  "key10": "5w7yyZbSBDZkSbUWDiDctATaqsCtbqXo2hJQaaU9D2y7pzRvqh8PtTuFeFBghC7M8QC75qDeACbmL7paJdTSEoPk",
  "key11": "5dEdRVePrGsB3xRX5MoRnMvrRhpu8KHEEwNvHuq83TcJrXdgP3ajFDCoecXwLccfj24JEirRBtBjjzhMaS9u7KuT",
  "key12": "44yPmo4N3RGFehQZUXefgy7FUm17332WecAzArNWwkNy1HGysJCPHQF5UH5F5T88x2RP72LRG1hMUZdCxhpqG6UR",
  "key13": "ggexGT6WEv8cYCgMbb5nticqjFZC4cyuFdDxPUZ8BrSGjSAaLkWvR5AxfbSeqsm7yEDzVKPfGzBR5avWiB7ufGS",
  "key14": "5KpKFWADnxzCE5386bUs3sh3waSzuVqfVVewqkZgmCZ6TDkxLWEzNJYnrt6AVfhnyE5Ef1WTJzSsJv2zaEmiJJXP",
  "key15": "5DS5mx1JGpRJs6zJJaSZfkAy14FiSAMTVwtQ5vLbfPEXRcM5dCg2vwDaL9eHioFjUWPVQg4cxa9uWju2qrnhpLcK",
  "key16": "2AaTJnpibpeZLcSQvJqYvdMbCk34iwRda8fbb5Frin9UQAYahLpwtHes7181ikv1j4wj6iubLWTeay4ZDbj3NCdV",
  "key17": "5q2Gj2axaJXFVG8WcQwKuLc72gNNyQ5HbnJpZ2HYnMN5kuEKsJc75i84fYMA7FXriwZPVn23oPg6nDbgrsLNjWck",
  "key18": "2uuFQW39xaZJpi21kmquwYzpHRWmQpXWKTzReqVBdtADTRcyzJytRL4YnqZ6SEQL6Qv275jFyjTeWSoknewebhsK",
  "key19": "5kntNzQ43rqd7oqmzqe2swYJwV6Ae2SYbR2gyan7NVRTCJp2a4CQuX6LYpxeskQH7cUZ31UAkPSbPHYa1GFmRBq3",
  "key20": "AR7EaUztnzn5E7kY3Ywq5Zazc4Qp2cQwaQgZqDQkzu13gkpcwSQMUpYGPUtsUgjGhH3J8QMnpKqNG81Dnfuz914",
  "key21": "KVBtYkJNTTfwXWUWhoaAJ4UD9rAxqHGpZesG4UpAJEt1ueo2Pp8Q1M3HxXpUxNx8ST5hjbZV2BiNCWi9b4FsAj5",
  "key22": "3x5XaH8HHHbKM5BYzVCw6hgijyzv63TkczkuZiKWdAhS1N8grYetVPHpf9JCBhp5o595cjzvnreZCCYM38ZgvE8q",
  "key23": "32vWGyc9hCvtjVPgC25S9PA7WFobdkCb7b5QySwEfXSmiZfDFfiGTR3paK6tV3Xx88DhkhpGV69WzU9YDmPkiteU",
  "key24": "51q1GCPvUEPgtaXbReGx5AKpeZLBQCqGDSLgvZAaxXyrCH622ApBRhRXfZ65m6LfsskCJAK16Vd455XNDfNktWe7",
  "key25": "35MdeEJqaCshQbUH61PTBEo8dZVBPguo4vYUb1VH3C1nrzxnf7UiWHU4iWkWQwGSAZ8mdPZ18KU6AyKSak13VZay",
  "key26": "fpmRnwjwN7SUwnKPiBv5xuH6aH3VXZMxL3CQ6eEXct3aCXzcLBH594HiLbUVFQs9QNZubHXG7YCVCApWsHBacqX",
  "key27": "2xBhmU8L8iWhpeETxkS5Tue9tfTpuS7284JbZyrzL9WRzfhwbwe8m1HD29nQdeUNpbZPsrvJZQnH6y4Kh2AhJjZe",
  "key28": "5kakDiBhq8gaaZLiEJ2dxbkVojMcZqyEhxFKNcoPN8Mtu3pbiZQgYj5trUBZc1c3etUzUscuZCCh2ohyp2tJWXjJ",
  "key29": "4RZnJokGTYqofDDVje7hwQkAEcWM2Jmhy9EK4ciVSKdQH73cbKkY85x2XvUZQy4cmbyV2K1hBb6ezidXGLXEomcV",
  "key30": "UFcsafp4S6nMcLtCQHEF8hGU62spCr2gzdWj4oZzZnRXC6fvXrGbWmGUArNDg5iAKsBZ2XtGb1WaQVQAuRrjUWb"
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
