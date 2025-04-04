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
    "qXRwHSciYdLUoEbCuwmZqLRRpGcMHU4m5Z2d6nsZLQYGjYmP62x3gr3rjpB32hyDgGEUm1A8jEXVeNXGYR1E1jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z6WJd5tueZRY58fHx27N8K5x3yAabywbybrLFNWyf7SNspnWpKpY3iy1LGyKeNXhmwXMLcCfUHWBfNnNrZgDizF",
  "key1": "4v3FfHy6JAt9nd2mTtRk5aXeRL6rojPHEQYa8NcxT5PdEiPCSSqXz674ZgAB3yBHRkRHXC4G7xjKCwEjBHJQ2xfP",
  "key2": "2eXjEhTaviqAuLe1L1q7zKS8tjr76s4oEGuBsJiuyC8QQabd9BLPN94H2EqERZ8eqz5J7J2E6sCdpVb6FbszeLv",
  "key3": "4NDEKhdLwjnrJzi8arxXSrc5U4bR5pbRBjBwQF29xEu6CZ2zMQMQgWzLNk6FoPpAiXDiqZeRd56aUHzLqHpsgZfw",
  "key4": "bqHAYGTAxyKfG67WnB7KGmJNuuFQcbznBAA4MfANqR8iB5ZWSsANtnDNGWNcdNL7RDbNCYL9pF3Lhq2eqUBzE9F",
  "key5": "3nYXRHwSVYgM7eygaj2AFYuareKVsg2w4RMjienvRSRRuhhtnnzMFLMxmixe2DbCXP2Yd9hiFmUAwLwGPTciE7Xw",
  "key6": "4L94v4PXrwTDg7zSYvGo2hhUWMuzbGkLPQpqEmhxapWbfQnkCQVnTqECi3ofVSYichQ6YKRZX2NVoc9WPGrWsqmm",
  "key7": "5S3eg8JmjUjxNioJrFfVRGj9dcoNhShobgCV7so7eq7obXo2aCNbUmTE5FLb9wd8jdAqdUp116rTjs3bm1GQSd7y",
  "key8": "2QSqWYRnL2WpGLsoMyN1y4i9apNSq875HQN7qcZoV41Tuy4fv8kk1YXX1ADX3p65QY9bE8VQm9G6uk12Hu9dJ3Ye",
  "key9": "4bbhQRDuJrwyS3rC7zuEFFNh72TogJNPPqaZgeCHK5jzB4FuSxaeXJhnddB1Tx1qAamUTevqCkgV3kUe9QRYz7PY",
  "key10": "2cGFzwqMotQFxTuQUiCTh6qo78ZntrxNKBf49yaYsosafzpt585qUuqdP5hvga8UxszbJ8HYru357CoM6Fq5U6fm",
  "key11": "4ho5muzFB9U4UGhUEQNcoowJGN1SVKqKU9BybmU56LD8aCKAD2t6Uor93q2q8RYgdKgpY4aWnvBtVZ8ceJYXCodb",
  "key12": "xaga8PWx7qb6ugCeW4ezkBvXHC1HagAYNJhNAXPvTEnLxoA5sUg4bP1jL89iyEUv9HTd1Vmt4B6MjBtwWTdPvaC",
  "key13": "3bfYi3asKrJfbRKhvjpSKSbNYc5ksWd34xkoYDHmAkVrUj6941yYDwCs9mYzhw5w5XLDJeJXEq7dS3aqg9zCTGPf",
  "key14": "2ozEtURZZ4QSMjZpNf7uMkqBS4RoxHWSDcogCcDxA4Aoam9hzZg9jjEVkRS8E4cFjHD6jzbF6mRzMTrQJoVQj6Qu",
  "key15": "24xJ3rqwJDjsdtdxShDsubKAEXH1FLgtH7JsQPjbNuc7AeVUvi21kQeMzXVeXpaFYtn2Gowf6HN4rCeVoRdXoQPP",
  "key16": "3ExEn27itd1tNhBNYcNyUre1tKng5QL1C19MzhERQGCzFSg5auZsjMLJi5dgTUBBwNCXv7zA8Z4fShdgL5JHvjKX",
  "key17": "2uKbSNz2zFPGUBbVLSAi1h6DCuQu7eqgW6AM4AZGPjtpTDLnte8nUHi8BhA9hjjFdsPpxsXjNNjUbFpVMD7KAJLr",
  "key18": "qTPFcLf8ewzRawXHFy7RaNx7RmSFb9Eu6usAEUHceHWTGBntji5QU3SVEpua8B2K4BYFNZ6xY8tMPMbGADit2uY",
  "key19": "5Fwrxsonb3JF8v5AnsUvWHgC4qctVFEiQm8Y5sM7bfbpayfF7KWPe3unihvyy9AagiaVNxZUdbzbwX3E9LmChzBb",
  "key20": "5jjdsU7Q8NPj1SKjXQZXWW8YJ6HNiZ7h8ajABXSZkg5pBBeonmRN3mB4CUbpdgaufa6vYXZqhb5szHytJvrpyWz1",
  "key21": "4f1N1hijNbmzckYBYSUwpM4MwjHrXqzswT1FPfnrH14KBEKpAtSjthJweiSvj2g8fxZbT8Gvub3MDUod118gHMeS",
  "key22": "9Vm8XK9g5w4JCr6877nnvBipvYaQVT4Dd2pLA61UkkSQjrdrq4EAYKd9atn6mt2x5aQwVBBvPbYL4NKHjh4uTzU",
  "key23": "5BNG1QfwYPDfm85Q1UaVtq9vbFGz6wxF4yq3yLUKwB8xaV4Z7J1LXnqiB2NB95yQzFUev2LtSBfz6x6YQifhk5dr",
  "key24": "2NY3H6KjWiBDs5Zu46vJLexxwSFgZQbhqfhQ7ru1Rr3niHZwCd8MEWuomHqvAAXHjGvW6t7tQE6bSZjiWhd8TfvW",
  "key25": "2aa6AEwpoNb2aovY1Rsw4tH7ywNeZommvMGzPzDUvJqUHM43Ver2BY4TLBpiZgo4CFkpMz3VsLskpesY7pjT3mmr",
  "key26": "H6aZ6WdQpcQsB1HjftgWnLUTHhb5ddHeS7EjoKSRTmmyeQKELYnV8rdifDGXjjDZtVEVjmjyQKXK5eHicyQn3gG",
  "key27": "5B2UnqN8EkwPZhnMjXSaNokDFS8bPJTQsYbckr9cfBdVBaXLVXHfKE3a7GbYwcQVG6gai9wRP3brSwiPkhEHPCry",
  "key28": "hWDzAedtutZJCoVBv53YMoetumD2d9xchjUEzNSPerGV1rn443m2fSWsMby1CDfrXj7nuFQUzhj8xH7MFGWzRun",
  "key29": "4VzowTtVDGf3DU8VTnmjfQhNVAfzLPPfdCKdDVr8FQQFenAMFgRcEbkRLFDfY2CAv5tL34tTWHQpxaLLkoT9FX4h",
  "key30": "6fZPPDu4U3skQBnUHmsrzNFb6R7VduAUjx2CTpgexcMqMptSvm9vpj48sF28pXoVc1hUV3vuhzVUNTJdLiAjXrq",
  "key31": "67mK6ba994rKXjzwybKq43LQd9s3xSFAuuT29BhjAx6SqaRmhe8hCbfd1DBR9F3TgHKWrhAYdijVhtR4ENwPfTGc",
  "key32": "NKb1HshEzYHbgXDquvqMexb87NdjwGeaiGFKrPAvD4wGPyg4Xic7tTM2tY6Q8hnJRoAD93zKwtJrehVZA4HdvmB",
  "key33": "5S88Pje28iBW5TQVCG8KtQBMtLz3tzFbNQaqHLC7VSVeuFgBrnZEXFUo3NJV2bNpKM8bk8eGAhoRfnmafJGkzeVR",
  "key34": "55GHMwsbuBi8QcuG8e2gtYzxfcSHpeyaDASN2pjR91dsLQmtoD7kSoTGcMMwgPA4r8TnmFKV3EAYJTYBKQHf3jjc",
  "key35": "3AtTZpdiwRwwTGQnFypGcdpdTpdjXudQFnTBx8zEP9EtbqESnNjJ2ya6UhBAsWMZz5dhb9N8DU8BZzU55MMpqk1F",
  "key36": "dR4Y4k8Wj8JsyrYhsGSVC2cpSeJtrSvSHUedk6N3b7UN8dRzLXF1DkTHHPB5Udavq1Buz3z1sWLX6RTyzt3M8Uc"
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
