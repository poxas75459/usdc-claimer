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
    "kFHQUBpSh8KexwTk8Dn97TARRKkHeubqxqwhsh74w6q38MPU1kAbZBdLrh4jrSMv7ANnRnTBxeYEdNz76GH6bR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21XbRooh7wV3Bc71r8L3KizfwijXdeiRKrNyGtSys9jfKFmq9govEd7LXLhSBxRHiDB4Z83aH6JScw4PJH6FrTVQ",
  "key1": "5ZgAdLctXxYdEAKKvsD6pWQTnrHx5T9V8iJxZ3GEXknSpg1K5dKjdCaL6YeuVDCY6t28hgf7GdUJ3GLYEDbo6T9c",
  "key2": "4YK1bhTLoFsJV5P2jKCYFzAgX3C6T2QcMVgrFLjeMeFgdQJbchAnWaCSjV4asK53zaQGqazZDmZE4XgmHuWGanoM",
  "key3": "3sQfmRFiFgMZJkkzm6BMKmyczdqnktYQNSMYeGoeRxVXAYDqz9gqqJQ5Zu8ejDmfYsW6ovmAtcJDsZ1bjiZdic9v",
  "key4": "5uEc7LroicAtMn3Kt23yUtUBdBWrCoaBAj4TmDhVUvrL2Wr9Mpa2h1MhD3ERcFxd4zDr8NzdwdrtjBGLp8RjjK6D",
  "key5": "5Pfjh3rRsk14Z2FLQ5WVU1iiXf8XVF93JAS759RpxUyUsjpiHyiS7UNCnmUaZtL2p52jqLLNMdizse5VtuuaXfYB",
  "key6": "BZ1XSv6wieodRH6gc4HnJ9P5rAin8Wb4XXuwkF3dJfP6XJHFadBRNB68VhAQMkFZYdS5cFE4uuMLckwimyxYjAC",
  "key7": "fYAzMUs1NtZ6xLbALNvKYad3NKCBJbyg1qFvXDxCbVA87zewJiVqJK9yLb27PriMHTXwodiR9RazEQon7tL6nQE",
  "key8": "5W7UxMFE6cDw88EirWta9LuiU7csuZZLiFDVX92zyaAGG9tSvEi5nXrMKZ6KDKqWXF7HPNsz99aa8apUXeksdaf1",
  "key9": "2PVS57zhkV5fz5FPJu4U4kCwfanq25ftZpRDXcYGbPBJRZbTbBPZnd3N8hR2c3PQozuGYntodjvWEQ74onGfAh7W",
  "key10": "5pu9XtFBDZ4XCnvu21tu8oYR8ipFKWo3nUDaAUWaRooa984m2ZqpFDFYX8xjEpwKJBxMK6uMmyono8wVpM7EJ37C",
  "key11": "4M9LFVSkxZUMKP1GCLz6cRmZqBS5RQHXJS5VWJTo71t3W49evwmk7xXCaKkgvLE6UNbaWx2trqCmCJMKMhyc9yHJ",
  "key12": "4whfSDXtwomd5YtYRMZjnLG8jdk3ih4uygMKS1RQqxzMNUTzGw7FnzfWdSLedrzYazaNCCLbJRLVqykGzR2wddoG",
  "key13": "4x64n5PhRxna3uAeyAQeSZrosFpHmTMBdLukbv5U5o6V5GnQbD7yjaPxKugHSjSVTmQs29FrAqTax2pGHox13S25",
  "key14": "j1L6ierUCHjDgYLDSB4K2KQnnH6YPif3H8W6pYythoSnh2bxi2VVP2n6LbpteTNpCcgj1upCRiYvjD5dT9DXMCZ",
  "key15": "dKENJVwbrzGH8HzwS7tzXwASu9ibDKMSbxNkG7q9fLZH25uhrotd2nXA8cKmoXBTPXeoRLxQodC4AD4zeys2MYM",
  "key16": "26J2bvDyEYDKbFFNvgGT1Y51aycGofoCz8jyL6SRsyo58QFLBuMNr8ZVTT5wPnznwA8B7aiPKAJmXta9VR4L4F1L",
  "key17": "3BJY4m8cNZoUjdYFXMiXf9kqNY5M8QAm18UkfLiDEK1X3cXTUFgAwaKEPAJBvcLeBHwfcBNYsApNGYJLGWNNiX63",
  "key18": "53aTuNUmeUurRyXMUsV6rbUu9VbpztaP9e8fLyNYC1ZuHXWG8TTzWExwvhMde9xNvPYMDnBLzTxpkfLes4ZukyHW",
  "key19": "4Fhw3rUMc4Mvv22EKriHFG3JBYUiwS7PCtWb7xRB7CPF7UkQMcYfZFKH8SphF1mD3vVQ8hnyP2uLfeGKwz24mHo6",
  "key20": "2tJ1pei2ejk24bYtPvnD5KVqnbGqs4D39dwyRC6od7MYPWvNRNaBThag2NMQ47jJZBpBvMMXhW5KkkwCLsnEJmQi",
  "key21": "5wftguMvFWJLLuQp2Bgit2JtVP4bLVxwDTZPSWfiL9yBhWm83Gno9Jtbgpgb7GxqoZb4tWVB96MMrokSAZRxHSix",
  "key22": "2BTxsfao1NtazLPc4B3Zjz8cJoiRDHgPac68CT1Nvt9Tczis4yfUTafMkJBqqPfpQBEc6V5KrkebPbFeFfjcQ8Gg",
  "key23": "od8ZF2prP5LyXbkDfW6DXcB1Be5N9v4LwtLtRpQTjNDJ5j4yk9BvsL8t4mXJjdmqkwFQJtckwxnQMVqunCy9qpt",
  "key24": "24SLaNvyYrzL8CV9VboFu5iuM7xXsHEcmvKHR9zpjuEBSeWqZF1nmCqqWVoAszcxWFa1WPKtrLCH6mKTYfCM3yJ2",
  "key25": "4YSmiJ8KTiVBFsAFRgKgcbZ9yrEUA3SMSbbhdCc11G5caQuxzmwgEadMzdZCWHFP3a6NwG6xG5rJNkn968cRv4Du",
  "key26": "4Stpfy8L667GpixpkFy3S9rma4T8JasLUeX5wj6yTxZgjjsoRzwwb3PySGVqPqaomactsRhfsfiKWBtBE6VLTaQG",
  "key27": "4zmaZX9bYuuu64t1fM7nnSZYMvJoMCX8yy68aTowAEg1vgzqJXcgUtRAKkQQ7NAMJf8p3Njs7FMFeVk8my6HN2wK",
  "key28": "b9coagxz7mFqmnr6RD297HnxYmjWz4TzAwLmCX3YC9oAMXV4T3L95RDyeqanvHCVqNi9NPTesf6Yw7W8ptbWqXE"
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
