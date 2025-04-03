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
    "3qFR9qKR3PeqCbuTkX6qrLaTZDXtUEfcoRDxRHhX3hfDgobVPMQZ4igQHuYmC2zPGmDhqrEUkgY9nJ2J3Dq4vKKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kBi6NR52B7b4E85WXX91Q2ie8AE8TkboNBvD2akta5ybHS1zmer5SF3iSspCN8VBN3HY5aED4UKFUWzk7NbUgm5",
  "key1": "5qjnhxWgyRxjxgwZNJgMjDp63Q7W1PNyTqtei24Lp2SusjWbHQmkXY98TQfwnqK2hpyo7dpXLKFeVch2D6WFhYDo",
  "key2": "62SanJLnYM1oivaf82JmHjfBMkJNHMYzZaK7iqde5JD3B7WcB6Mj3DbQYwVovdfvxTqgXGyzGireYNK79iYTsr54",
  "key3": "2n6m4XFB1tgAD8X7e92hoD4EbhHtvMQgQyqxpNFmcEQ5w25i54fBhfmoWdh9MkNfDyyURwCukFfNMxHSK6Hnbw9v",
  "key4": "32WcxsLrQfcCaj2GZ3WUE18KQ2fmKBmeLXhxYtDYuDQVP1NzbA9q7CZXPKeFK1wVb6a96bqcRjcrytJCNoUH5mvX",
  "key5": "2QKQs6gpjfxQJaiM7gbWK1Nda3dc71dTLj19cXn1DjSsEM1MxVdbQ71roZ1QspW2RpaTZAjQRkwjBXAtZaxNrCEy",
  "key6": "2wLxvRLAfsLsoySLUkFkCaqfe6h9ANqBxM6HtGGgxQqyBHiLHRWtZPnv7tzmQcUUXF2fcX51TfYavDDERhzEgN1m",
  "key7": "4poZYpU4zvcYe3HCG5RwFHQ9PpaZpM15XUwmRP6W1fbCfPP87SHj8eBdtEZk28rsWaPouWKmRZQw1PUrRrYUuTQw",
  "key8": "5CU1jnUJ2DSA1NJDMsAFyVYXg2Z6dfWntZAJPxU3sJihk5kedxxqx9xxCqK4KhVhDoLbKrjkQ75i9QXFWoH81Mj",
  "key9": "2h7c2mr1aEmF4NgmXCZbC4oTUEZSVHoi7as3JY2mJqv8yih4oiqFCnGnWkHzLcBYWUEX6YruuBEBDBzJq5GisZSX",
  "key10": "NeD9jQzNN5FpfyEpJCWMpHJGc4fFXxWHFaia3NBF2dRnNhk6y75yXKJkG2hJmo9uJMYxkF2LiLtPW8E1rmAaQ8E",
  "key11": "3Si7BNDASx4QHsNdC9fUqNNWi9bmC96ARZ6CLzdD4XBH1j9BuCYzG96LNErtUyC6FdLBv9XeZiqrGpLJHPzbf78V",
  "key12": "2yna5ZvvCTWsDwjdrwaFnCbN57cGVFvFmFSHiZKYNA4jS7EUmKh1P9MraEdN2CGDauZ6tCG9Yexcy69jPrV5dZFc",
  "key13": "54txbdwwz6tGZ2DpJyVC45Q526p2mzFpq6ZmU5PHsSWtQd8rLPZwtf3WXPkoJFnTFpjuN8Gdo3J3Rq1cBbMqB3BX",
  "key14": "4MZGFdWmWPgZrGQSv2tTJtthgTCsPhP78iteFHMGLu31UXZCipFbm26yv95mECDFAn1EcD9gxV1ump5iaBfAHa9f",
  "key15": "jPbWB7Yu5h7n6K5dkFZwY8jPToN4WePy3aPSNoGSXps8QUbeevFNP4MVANJWzSZgrAYHw7Pwe4iGWcz6dbEW2DH",
  "key16": "4eDBWL3gL5FDiiPC8yk3S4qVqjS9dWhEpRoQ7wpEekG5XYcmETZ3vxojh6m8XwdrowNqEX4movoqkzHBJwRz49YC",
  "key17": "c2QNJmWbc1aLYonDR9jKXRFr3xaHccSBn255YUjRKMtUe3JPVyoJ72kzjpU1XuZ7bQWP9f1x7rkGZpheAvuxCdt",
  "key18": "3ht2qBf2NKBRsyfkkyqT13MPMZBitsHUPUYmWAw5u3QK2YjhQnhSGKzfzN7eHuWhUy3vDqScmjwDxobg76iPkyCv",
  "key19": "61uYaq2tF6yHshs7e2HuoV5ZYwdY1AqjSFfpXYL7zRj14DdFKx3ag4dg7psMcSHaFY1YYMQs4H4marss71yjwNYZ",
  "key20": "LdDiAyq4dPjMT6YdeejxyTFvWyAyaemJbcQa1RaSNjkw2UMpByR1cewFjkDBbssK75czChJ4Pe22XWm1j93Pgan",
  "key21": "3E7zPusRYTY5dj2855WpCCTeK71fXqQcL3BoMrY2H8KDYycrBnrtfbDBKfoua6supXbVLPGAZkV7oAcrEdHhE5FH",
  "key22": "28qaPbMABvjEfB4uMXReogCViPKMMHxNLqLWCjKeVberb8FcLudJWhVzXL6w2vgdLDEpCZ9CpP97JFQuxYf1uwVc",
  "key23": "3GyYJ7Y5sRgp44WmwJTmSUCLEHReFBXMdX5nVmjMipiH4FRBBRcdHfCFnghfPjXD5M1Crc8xCGmDMiayk5AenENw",
  "key24": "EpbpQi8JRuTCPGmZq99bUCiMPp5GL5jQ9HopNNYRoHpowqtN6SE8KVmFA69okmfaqtaQcsEvf5LG3JH1suVoXnx",
  "key25": "2HZkbfFGpCYdfGm5btXZ78EV1NNmSFh5oCTjjT6WHu3cMkfcY6TZGnEPqyZRjbMdmsfNz9sJfAKFh2rBe6hzoxDT",
  "key26": "2ukafMVnC3ARQPY7jDefDAboxski5Sdt64Fybim1srrK5LDvobc876zwULCHckyYhHEEYTWKYrGSNtXCNNR5ms2P",
  "key27": "5jzoUtEwYvfvecWvEyDwPbpptfPhhPY2AgM9u1M5goQbM6Lo1Bma4j26DW3MeR15GVWbMnz92CeyJx6pMS8iQVmY",
  "key28": "4b4GN1eTx9HVUMGnRs2JwBuu5EG5Tn75FVaUT1JYV8bxEX1FjXg3pDMatEuLnexGvAtyvxTRCVn5oSCxXeqit9Mj",
  "key29": "3gS8Uh6yoqR9ciw9D712XaKdkiz3cbzJFhL6hiuWM8cDR6FgW9ua8FEJTbortvsYAyN1aa7tBrFkkNmiNH1AZocr",
  "key30": "L9uKF8shU8ugT7aQ5uCcmaER6LzD5ETBqToNyb1cece8chxnGtmnsezvSUn6Zww4AaafREVdv31kF1F1rceEGnk",
  "key31": "5aPTZpvUCM8kzNCXVbcjCVMEyqCFmNmwadQ8bPmTCKCQbqgLGSA5mqJy9zA56pwmWk6SxnmSQ1pDCSxahvd72uC6",
  "key32": "31DTLbsa7ScVTW63sHFMdPXEvjB6NNXEjuvNfYHbDNLskh9d77odZR9x1uatdMRRVy3hdiguDdCJDX5oofs1qB2n",
  "key33": "4QTcwmQUeW6sBnsMmcUiSRijV9jcyskp9N4ton59Kz59t5xFPi4FAGdR4k9KPd3TUmU7qDZKbUXKmWskrGQXsDEa"
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
