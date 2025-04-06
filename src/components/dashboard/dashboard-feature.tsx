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
    "5nSt8NPRizjh8MrXEwSxdZbQRr8bwGkT3rkpB8EDMCHPeAorJVhFfxvx5hDfRXqxA7n8S9jtyL7kyoJnNktSb3Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HPJziEW2JC5HBjg23aL3ScpcfNYwzaa3MJqeYv8TFh94LQcsyYncicpxzfxyHb8wRyvrAyWjPBqGaBje2djJde",
  "key1": "34D9T1qWnPNZhQTJfn6mkw6R2kYmeDTcY31QGdNYVPp5TTgAK2jWv4Bh2tKTUmozTU3CiGxztuxPzppWPNJYxDi8",
  "key2": "cJksZpRy75kKZvwpgqxujcy158J2U1e9tYm3Fe5dFn8WJT7EKvscRyRPfCPzD9f7DZRbJfpHb24BRPpETHB33Bk",
  "key3": "2R2GTqpTWr2ER8SPi2q9B5MkT1AsNt2f3qeu1nhpwiM9aB2iaG71MZS21JCL4g921rLnbJHqM9ozQoCbisMfGQBJ",
  "key4": "4VJxsptVR3zDdAUovtYpnG4FLe2YAnBjmX3L6aQjT9TQHpnThEkuYd4JGCAjxZKDWPxu3CN36ucAjQ8xXSNhLdUC",
  "key5": "3FVzUnCifXpSeSggHkrtM6WvHz8nNxEdYuVKkc17rRB1fbuJH3KH8KbxDWb6VnUrVvtbbaSAtB8StVGsAc1FKUio",
  "key6": "2YwtDLJfgJFMaxZkd4kjWwr34fwXtjZwEuqs1waaYK7BSLKWuXvsD9ruJksp3aa7huTn5S27ej8UvBCJeYzmAyqx",
  "key7": "3vCQABKZSMjdwEgQkWNiBa76BRPsubWCPHpAF31Rvc3tJG393YKPCX4RFvpETUEFh7aHn3rJFe1LAe7BecTMm6eH",
  "key8": "J91GUe6d7E2ZtWCLocbdPeBuamv1VfCfEeFCHFQ275eH8DQvmWr3evYUEop6eUPjVzt6MXAjABJ42Pur8Gg2tUm",
  "key9": "5joiV2QQAKSgy6EtsrSRVzeNjsHzb6bTGbRAGK1YsSGWF1TPNvkDm4A3ZYbmsS997Heijw1S2e1VL7x16ucPhhxU",
  "key10": "3jw3XdjzQ3VopscjCiFWNZgKctH9GbWMq6a3nLm39eT1hWGLyPFMsj7Qm1Ew317R5ybz35ZvQReKX7nMN3s4boBu",
  "key11": "5LGPFuU22dHeqMLmXiq4Mw4YEcYF9k4x5PtTRk68kGNHvrYcmBuUAjua2DaTwJSJf9C4MEP1QwFiANfA14LMXd7F",
  "key12": "vSa9rJjvsFaNUL4hZ91W3vMFqWTmwUsyQsRZgpqVBkX2KfsZUzeXWuoB6cYursXFLeJmamEchZfPA3ci67U7CAn",
  "key13": "2ANFF6rybvkHggLzozqjZgPsq4mieyeHow6ndDAes1FosjD9eWQxCEag2cvRaSJvfhNkrxNd2ham8PaCFMcgiMu8",
  "key14": "xw5jED6cno2cuCoatNDCRGmozB4XCtoV1ttBPCq1xXXsC3GTFEcpSYhEkv4uHF6v4HhWn6JrYTQJ3yakkycXHEm",
  "key15": "4C6DnkZDAqAR3Jzc8soStTXzqsKrtFDbEJQfNX4tri6npL362NccrEuqHwSGWXZd7nQPqUSmw8jtvgJwxFgjWpa3",
  "key16": "2wcuchFHdAPEW9J6Jd3E8Mws7yFiixm58EvxfrRcRWretVdRgQoMzJbGK1Js9iN9yKA28Ddtop9JjEi2ypK9Wj7b",
  "key17": "3Jbddi2vec8ACacYwHtZULExmyhFytWrqeE3g4Px5qcVbxgm6BZEechBK9TLNn3zguY1u8DXyFZqcf97gPabPSuL",
  "key18": "3j1remBzJguY8hsCrwgfbdMXWRxE2cstedh3HA131BYp5ZtKkHNy5reph5SbgNay3FXe7XJP1AYXcFTiAZ7bjBiE",
  "key19": "btEqQhGKN4DdW2RPxzzTpKL4XusgdcEnhvuuSwc41fVQdMjekedHpwRjAfG2vEoeyKyctoifGXF3Fq24oPXt15k",
  "key20": "3jPXsDyNf3KHJJo9pW3uGBh8JUfyhmxZjeBj6DnvVaVA6tAHTVPjPjVeGNT8d66VUnyCQfiMbC5aJs5mwj3hmYnk",
  "key21": "2KtSCca72VXQ8a4Mho1VrikCWfUfaSVHx7s8cE2UjvUouLQim3c8vX15eVd3oKfrmVXrkbSM7vwLsyhAyG2LLWTF",
  "key22": "2dZwJxPpmw4BLmqdY6PdpUCYvEaTGZRnRRAMt3UMcQW83r4F5P2D2o9kNnj4XuX6ADNxAQfm4aPMrXPrVeKvZCkn",
  "key23": "3C1Ve2aAgfqzjtdMibatjtMkD2NTsWqV1gFJsz8JGqyf6dm9TLNqPaP4rsx8MuRwAzCkNh9bJmwpkswmmMzVo4Le",
  "key24": "ZwkEJmypfGJAEzksbM46Vy97aVWMEHmk1bG2aGycC5YTtoMJHo2182HYcU5y9MP29z6wtzAt5hJYPGtJ3r3RV6J",
  "key25": "iz4E7thbyinHeakzYC2kjurYPRT1xqn4eaae7ULAqXhyB1i6x1ehdyPXm9ZMuLiZg97LrwAC7Q1DfNn59rh6dDt",
  "key26": "57JpCZXGoSjFSk9nHpdW6JbWiKNxm9p29aYmQ1odAPmw2hVwgxHGsk44qV1D4dZaw7tgSgxuu7oVAYwtbYqUvVFQ",
  "key27": "5j8bNZpKyxsZ7G9b59sTCBrmhdN2izjDEkGrRxdqKfCA4zTMHx7YC4GAS9SeZXEUdEahXJTp8xNWgGq6ScvQV8B5",
  "key28": "5JJPni91hzN5kNNaWYoc8n3WBn38snqp9jCLehbGQMorFvmRWHhVZL4j4nMDE5q1kVLUFgu2FYrhH8TPwipXfhPm"
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
