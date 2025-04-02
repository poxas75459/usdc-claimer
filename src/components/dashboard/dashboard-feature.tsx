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
    "4uqLDaZbaXEqT8vwiNhB8adfz3H4mwVt6K7YfkbWMWU3YMUJDeSfyudMQjVNPPuhjeURhG48uJgvAB2JVovX8PQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BPbwX2JLFEzChTYchppxUwmy1hqvsTDHreUZF5eSfMMkCqhTvjD3gFYEXdk2cnLo7nZpqQNL6hZzQYSj9Lf5L69",
  "key1": "Dq88EBLHTQ2csm5KWJtxFkCi8LxJDwdXt8CURpdZTafqK8znstfY6YpPcdLA9kR8ACXqE12p7KrsUpZ1wryYxaF",
  "key2": "2dS5AP4coZdCHkUJ4B4QydnRKAYFb3Dvjj2rfAL7yqg8gCmHQfdHYXWJv5m1JCqSCjYjGfvRyqQXc7zaA85BaoWb",
  "key3": "GVpbNHipMx9VB7LJH1xhZ6Ez1zRj9rkNe6vWfyPSaZpRLTggxL4T6x8mC9M9fUGm7ZS2ALWT2gKfTaijZEpuGuo",
  "key4": "4FiPUuabsRjn9Cm6GXqeL6uuYQLzDvnbNStyWgvierWnTNbAwtmhShcKY8E3DxdKKttV8BVcLEmieAoXrMvESvvz",
  "key5": "RyAsf7odce9qybRqNoL9hRhCYL45xZowAaBBV6HVPVT8ujCZHXnm5komJ1pwBFuMzyhqR3ErRsBzQtM6DZ77CEv",
  "key6": "522W28mz2vXrR93JpQwqf82VNSqn9sXvvU3rkM2SMW8ypj51vueBy9m7qp8XXxGxW7Ms4cbGB6oLNWLsdBKxKHcF",
  "key7": "EFaDZMwFfNiQChZmb7LtTewWfuxjRVuQPffigwoiSqrUfRKFUkqRc4qVjzCCY3gp5b6QLQoXVjBr2UJcj5Q7k9g",
  "key8": "NGi4jc4MNMZcEoCZnmctWEUcj9u84Ed4Lwws3HBXCwNwp2qzkRrkS2PQXzztuQNKBnihqyLK8gwtNkvxnZQCuE9",
  "key9": "3t6XBJtZsTTknNfbdyYRjyZp4sah69UVn3Pa4D1r4Fp54wNAoTZt2TT5ZGosa8JmxHW1XMdP98zWARN3QhWScaKn",
  "key10": "FFXntchV7Cm5hSMeSJp96LSPTeWtNes3EMcDqwpyzNCjupu3o2XTfGGREQWV1k21smFfopyJesGuPHcFa8anuqy",
  "key11": "4jGFZKCWfpnsByb8DZxU21AJDmb8bWUK6UnBk41N6K96N7eF5WSFC4ujuL4ij2kTbT7cFkLkgKkGxuG2oqoQxLi2",
  "key12": "4MuurWvVpf5Ljyccz7cr2AjgvSGfVkRDHLrwFRW4jrXv3AU7aHkRCK5g6F92RG4saqqWNmz4vU6TYrngevmeN8U2",
  "key13": "3mwAGuYsYmL9Mw4oR8KAQHJvqCmxzAKnPnadaiSUyBnhXsw5xJgdbdJJMNBnJMNuxWkyyZ3tn25rhvENuJZWG1ER",
  "key14": "2cqfoddrzSz4TP1mAKfsPoshokwgYiiRPex3vizDEvaLk3rAgmSEWH2xqn17f4YAPsAdG6JptMCGmkKrAbhNNprG",
  "key15": "4AFuTQxQ4PrhgxqQ6WdhixuNqDCtL55PcwMXL4JKT9bpu599TVuWPDVwPAoxNheE7DwEfHWkZxq7cFcoh7suRo2u",
  "key16": "kNXPcFHMi5m9qpYLUcfXoM6YF4YuZg9dtRDRJeXpRfMMv1mEMVxfkCDXgEXvVPoienHbTCP3Ad2dYdfiiRDUC5E",
  "key17": "2FNs8A3bWW9DrXq2iWWoD7R3vL7zDqXWrE7azBxJAr68qwEusqj7EyG8PyW4jXjo97DGG5Z9hgwSxiRW4zJ2RWya",
  "key18": "5o8pG5LtnhLRKtQ56b8bBdNsRZUdihNQAJkZR8qrRbRjQe8Zf44CKc1etgKnmyEUaHyB4ySBjt9Sd3MNdn6m3GoW",
  "key19": "2EBEpf9dpmdGBnGSaNan9nE2duRUyrvjq4wpUjRNioNn2QGSyGmkzfkruw6A3snXHaER5L1jk4hvFWkmakEw2soY",
  "key20": "4DJZhRQYUKZd6swvyKEsgUdcc3wbhNUnWDJRCqvYnRhAkMaCjfTU2pxHvqZ8JQCSfqQbFmYzxT2WH52AzMMgQBds",
  "key21": "2Fc9VazTSn56TBQfUzdG5YMeXZu9QQziu2EMnt4mjjh88MrG54h6Yett2xiY2WiiUkt8qV5t2eTGbPi3WKh9gquQ",
  "key22": "5u7HTH7AND8mqPzvJSGFaKtLktMkzRzPLRCdcNdjuSh87YcuaL5zBkeYBEoNUt7wt2QWnmd2sau2KK65MgePrAno",
  "key23": "2Ydc9GsF1j7AFi2BuQFRXriK874wnAc5jih55Zr3yiZexYDim4fDhBcsatE5AXaDq3k59Vdg4TvwQnTszRJaunxK",
  "key24": "4Jh1RZfPRSxKW6MemGD2rZntcKsYi6mktKnfEZkM7UEh2AcyfdUgiUoKX6nRqg3wsPLJwQnfA5Qfzj3UxTkmrwqm",
  "key25": "r9cpyYV4Eyi5vfGvD3zsPYVD7h5yyrdemQBcpUq6ocfGhAhsLR5yYbbL4G468bbSRdFLyCGgWYw3Ri2vYKMuRmk",
  "key26": "2p6Eb5TC7aDK9Ujto4NXRn73CQRbZtpLMwdCnU5ThDsifjEKUNLuarb8jrEgfUBo76Mwm9eMU6rsdvP5jtYvvKav",
  "key27": "294znBXgrWei39yWiiAHhphkM2Ysox6eVPxDf1z3oZ2Ze4MxxBNbopSqYSXN1We7h73uCEs4V72HEXLP23cKLk6P",
  "key28": "3J5VXPbvu5TS283XGe58tqoCnKwppeNPB8LTTeTMUc7zpYNK6qw359eKMyco86uwkRk3efWaB4DLe2oioxfdDPAc",
  "key29": "4sJWd6PT6kSq8dMEhgBJZxXcsqaETqbmaz1ysvwQxBRH4JREnnXGX9y5f6FpDH8AEGoCAS8XjRjXmhV9BnkdyxvM",
  "key30": "2xHpZiEnfzSY7qQCTCAb4cWut9pM9SHfY1zda2FcBxRiTuGSGiQGCVduyuwektpQbe2UaHd7L86aNiB3fdPzA4Df",
  "key31": "4QwC4PiLi7QXocimTeCdcjtqHWA1D6c5jeUz3XgwLMP8B91CKBcL3CB1WjYCYwVLreD7PQ2cK7TbGXgaZhqEuzqX",
  "key32": "w5RrsvkEcVss9HGZHnEB2WXg37UxRLTtGLdctFPXN5f9geb8mpjHwZ4ugEdyymGhgn5DiqiSZnp1fLSDwwsZsPd",
  "key33": "65euyhqGuw9dJm7JFpedNhxQELRJvRCFiXjaSg5wH6HVU8ALFHPkGnppivPBA5JcotQU1PfcN7X8MJUaB557JoXe",
  "key34": "2Z2Bk5XrqPbT3dW3KMSgSFRKnbWas1SaSQY5Nd1C4yRajhmy7P82R9xgEfyFN2jLhxBkQwaXWDeeFuUoQcYMkNoz",
  "key35": "2dWCXdrcCcDB49Fm5zRDieXLaZSd3aG7cPAZwU22DjvC8oux3b6VZhsigabpCcXShXqGU2zdUyP5XyBexsfHwoWj",
  "key36": "2EKW4hQFUsXENEMbonwsJVoA9AEhvkq2aWYMk5ixoPhuo1YJM9jESV9xMSLtUnfzoEnGtbbaSnJA8wpAH1UwExxN",
  "key37": "fSh5eh1AJQKCzvqerix8pMeh724N28nSMRnvwk1gh3aRSCRcyYNDanAiDPa6bT1FbP8P65zCeZLSV7VBkp3DjmZ",
  "key38": "4Kax9S3m7BcPjksr3v47RYZE1UZk2wqdBEk9u2rmpJcWryDEj9vF2Q333ZLyGoaDW6E2mbCFheXXzyxerg19ZTuj",
  "key39": "3Z4dJMcjoAzfRegVGyQX8nhZ4hUT6oiabtzdoefpPKP6eXxMV6iS1WSVyKCNQoULQnzyTqjjrba1dCvhi9byNgJD",
  "key40": "cgD5okbtA1Sf2crKqXFkGFmyiJ8zu5xr4cRqb6yBXgYC4tnsxkdH2qE24QT25SHa8RWZVGjvATmCCysLWpskKDY",
  "key41": "5d2KJFq3aQgBURRaGpRuqNxWutW5JVCAg1UM3F3WHtUNdVQQhs7fSQMxwEnwf3eccUPv8iwfJLBjLuKWF6jWTrJc"
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
