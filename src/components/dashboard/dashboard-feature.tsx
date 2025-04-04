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
    "4HokC8w8cRkwmKoQ25yYL5qkcrecQXnvhduKf9ZfmPqiL5DvijYZPiUsSnKPBWnXdxft7RRjtxDLUCM3QYMZx93X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264nTdmVn7VVvwoJRJidseBQJSbMmC7tSGQT1VeQ7QKPpQMVR7U7vabUdXJroZNdWKgtJ6zUFwAe5XFVPszFXg5i",
  "key1": "5sZmZuRLw5eji9kKKx6fPbNrLTgGFFqV9BYfGSB2BD5KjHMg75abq639QQPeBKUsGAGuEwxeteuax7B38k7AnTJS",
  "key2": "2KHMcxhwTghEfsrpBF35YY9UJfakrhJnU6UWYvG7bpU9XSBzSGeAa5T5WfxbR2MvZk3autQXK2kL7APdmpD9veW1",
  "key3": "c6rtd6UTNACUVhVqAjtobCXUDd9DYP8KqTdsygzDpA7aag7Zm2jWd5BjMHynar66j8ZcaVLXGU4uEJF5XkJVnac",
  "key4": "2iM8UNcZ6NmCnaSRdrnuhcvqtVkLimtC3r8GTTVH2CVgRsXHzp8Wm2rgsgzUreJu431jfpCjyDxz35HB75azEuEq",
  "key5": "59P1yJGWY6PuvLkU1ZsdLTV95Y41GDHrS2iJpMqHYbBuqYKb3AvFiSc79kbV4g7EFT17tyhXDznig75NfDBCDkaQ",
  "key6": "4mzWo6gc3C2wvxw1pyvHv4bRcw3KFabVQFAaWTnaJDYNuwKQxZe1SzSAjYqPc2Lor2LmiZqTxWYki1Lf1oqysmD2",
  "key7": "3DWv18zYXuTnnUk9fYMiu79wZ1XMuV1JJ1nbc6ydi8uC9QtULuXM754xLFspyjaVHjzi66pCQQ5hNCU5SGFXfhNB",
  "key8": "3eL3ziV3a3njesMMFvGQSw3uhK5qQwtZkXoVzAe6jD5S4FJediCznYqdiQRmQUYHkg2C4nhN8p26k4soHsQfL8Sn",
  "key9": "3PWceto83CRtxvjp2NQsc4PhZEpBJT25jMwnXgduunA8ic9t5HoHzSw2fqnst6SjLGa7siJ8GGJC2wcM3WUhoSwP",
  "key10": "LQFjKKPnEHg6ZJT1AWwtu9ZCHaaWP7NrZyaMXGwpdUSdMjTcQzbZDLbo6ix5LtkzoZQLC7Fwb8QwbUCBtQEQ5mU",
  "key11": "4RXFion6WaRcEWiorv16MALtmbw1MdE8q1wFi9UxzY9rRtPcdN1J3pt1gaDxCQBmsY5RKSoWecxzChMtAuY3p9t4",
  "key12": "ycc1swaD3bKaTNyv3FriVRMfNdRM4hhvBJoE1YbZQJhLrPjHQ8xjWC8LCAC9zj6AowLmkTaa3TpFD2zURT1hNy8",
  "key13": "diiZAwVpfWFF6XSPjQtvgJr21y5b5VvLLRQx1BD2n5A1b3kYXgr3VB9o5fwZ2rvxJJ6zTrUGaEgaeFjmoiSbwvX",
  "key14": "4NXnhKZLYJcoV5XdH6uJZ5xJkuTBcDTetQgEhPUzcE4keQmPi3DecyF34sk1qzQ1RxyawKGqFhZagbJS5CBNgxUq",
  "key15": "2qt76zQ1dRZnY4QbBxRQyxkaYJyYA8sKb6PZjL5s7DXNhX6ETRRW5dVi6KeCano86yBcKZ6QnraKvJDhzJwwBB1C",
  "key16": "2Wi4v78tphURcZ9MmCXn44oiiDY9hry139hJVHP1nknRRBxqhUDUnTmCWzfDdfYEutKb6xCmCGo2NfCmueizXqZa",
  "key17": "5sAw7XLsAVteXvSbFw1nAypzonbzZTzU2Wf78TMotuk28RKnuej2dSw3QfArQuu9LX5bE9uKViXhqNahnVSYSn2R",
  "key18": "4XZWcjLv4fJC5avB29SyYV8bZZnDuDoDVW9s1k9ES9NLFKkAawZtoJf7UfL51X8fFSftx9jsxW9gW3Wi8rm31qfR",
  "key19": "2PMPcRB82Xb2vnjxL237iFSEk2sPncFHiaaLenBSsjjhUUDgWBZ4eiaQDTB9sAKESNzJ5ZANBYEmFihYCrBdfxA9",
  "key20": "2TMXCCbD6YRzrQgV4veV7mYxESxMuq1gK7qM8heTV1Sx2mgc8ddpys8Yxm8X61EVoCPZ2eX1dKyRPKSV57UyjpYk",
  "key21": "2twpfW4tthDJgRV8i62tL7zSga8fJ38EKbk2KuM5cG4QgMHNLtaDNDoQjTQWbAoYxYrVXGNvYcn8JbgK5DzFXvmB",
  "key22": "2WahjVi9L1xrJiaJXXxXM1fW2j9CsUTgfS5s7LUKTaa9Jsdq7Y7vC6zhPqPJvuLVDG4WuT9cPQ4B95tTD5kiWSj2",
  "key23": "2wcb3VedzXsJr7DKufSQct69gMdc5bjzXhA39rpTJuWAgQcWZpY9SGETpnNqSxaDE6Ni2cQ1e66qN4NaZnk82Qac",
  "key24": "5FNnXR4FJoHALK6inqy3xC2jn8iMMLvEphx4771k5a6ahkg1Vor8c6MKdVcaC3MHG5X97dMUypafrEgX1ogvUZmi",
  "key25": "2XjBvJuS8gvpqzS4FBQFATKeAefzcGS1kgAV26DLBg5NQs9k7t2ULNrMGatn3dwwxReFP3VQJekiFenWGA84j87W",
  "key26": "5VqKHenC6pMjx5wVc8Rzzquw8QWoTR9LEhxcL6PppzqggSTNeLfr7jgwavAHBhNKzNU6Wpxm58hP9Ti9kmqNZd71",
  "key27": "3zjojfQqY2t31PRPo8CHKLWrMTxTriEoJFoa7BiF9C44Phqp9cJyG4cdiLqfckKRfq35fx65FspRGNtj3LzPxCct",
  "key28": "4iGdVhrKLaUgwxPvd9mQjRHo8VCM3KTsPCcxLWDQP2ck8j9zDBcQ9fy7PSkMSuhHVH8cjNMQtE3ADWrx6JgWM7K4",
  "key29": "465njexZbw9qFmkHWGcjDFj9EE5RAkMpVkCjYxq8wf8GsQW3NEQubSd24rbe36smKNbJmJigXuRkSKXcmZmJ4qiU"
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
