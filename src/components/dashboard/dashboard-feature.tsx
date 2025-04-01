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
    "3Dyw1BfRjz7KPqZshHiwGAV2v6RVsCNJ2KFo63H5RXiGMk6L8muRjSVFnHvAYfJqtDUTFM9zhG8ruxbc4nSkmyzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBoHRsmaxxzemd4p2z94t2KRHDjpQDRnCXG47pstiYEopDoWrNGPAsWXEgAz4DAFMD3AigZRWFvTu4sRoQ9dhGw",
  "key1": "2Mh6hb9CJGan82ZEQ9jpYLK5b5bDfagMx98NB8somZEPYpqw5MYSXvfAaZVhUB1e9h7ZPK9EL6BeUJmMQBgG8wE5",
  "key2": "4hNpKGW1RAzoGchbNxKPebVpEzeq5W2NGG5vXgApL1pxAW84HM1z6xz3gpZwmHDotsEfeGeUs38D2EBZoxGKRBuX",
  "key3": "4p3Jkc1b6C7y8EhoVtEgiJtqf7gp8stXasSfmSRJEEceFTGyzNTmATNDdSLGcvQu7oov9shTm24k4RbVxU7THzof",
  "key4": "3FLxjRPYsGtMzqF5xj3wj2KED5VuCExCZbMpLMMgYMsZ3NEdcKuczPyvdsrcabjwgHuB48CWD61peC5LFxfoYP4y",
  "key5": "3yHoTCQ6uWuJXxAYgK1fXNQn8VVxk6E1Be6uM3MmzKLximDuQGdCtQJYUo5tbH6t1B8agquexTeyegrHP4ywcz12",
  "key6": "SFmdR2x6mYC6QWxyy8cACuuPdik6bSu2daGHrQEFdHTsgTPyzm7Ah5PY4xVh92prfeJLKT5odgcM4GDgYhobnSM",
  "key7": "3xhzkYqRNbdJ1AaztTYJ9VvaZ9vM4mUWVothg6dgZoGL7c6pCSsYiYJg7bQfabworvWgGqaJTVibFg9V5jD73DHg",
  "key8": "JWx7WoswxzMfawq4zMzcbRdDy5WSSxWjrBD7xxyW25PB2atNU3NG4tW91Du5GGcoYhnF9CzbR7VPfENftSJc3tf",
  "key9": "3AprtZFd1TWKUraY3eYbS8BR2Fp178SGotMLaNCtbqdmbV1p1jphoiLunAhqw8unWMDK4eEbzUGwwHHU131sHWVV",
  "key10": "2HzRMzYpFJHZ1KQDHPXoStfSgwe5wMiyRHFdDtbHQcbzq8uB1Gcm3MwCNFSdsgjBLAPSSqixp5gL6tFtS4VQTeRr",
  "key11": "4vjXx92rzitBCg58akVcrwhLZ6MNFBj7JPJJEQ6mBHuGEwXbfrFzSWghXzP5RZ8vCkb4Dop3EkB3W8nK4bZjnpuo",
  "key12": "4Svs3MJV4i8VmDQBrwrCD8uDGBYdjqp6wHqTXCdVtHjZaFwruCDWVEUYgjUf3euH4ygnKCKCvadHSE3h4W5dkL11",
  "key13": "5Zfs85112gcHmS1J4z3FneUanbpLEnksoy6VAUccAnrc8aNknD8f2Tivgv8z6q4MD2J4p1dSLTF64nHbNFKVwBxH",
  "key14": "SiwJXaiarT8rLryotbsSpssanvmswXGdXDX1Vc7PaWTnvvKaSLRSLoJX3SLUsEd9r22JhXzB2XpzXcQMtP3zgpW",
  "key15": "3DXbSQmzuyjRRVwKBoe9914KdzKawjv5smeh3NZbsMX2J7AiJuCXwenByN7E9Bk28h4noNDajJrCsDm6Ntrx2pFh",
  "key16": "iB91wAPgMfLQUzq7spJCfSw2oMh8DjQ3egkZ6vw4U1fXCStN4Emup9zvP2rmUhx6ZPrhc3YekwABypKggeNUvpt",
  "key17": "4hrqCRcgw53aLeMD3gkWkknSZrhFS1AExAbPwGViyAFkM9EE9S4LYeYkk5oEk2rJDUAswTZ3PYFpJ3UTL8qHJSFf",
  "key18": "4nK9XRJSkMEF4zWJxX5VuhMFgYuwdgj99GSNUB2B4MEpy8o271YFTvzAAqiC1VUuM3BR4SkmKwz3fxgANSSuqEXH",
  "key19": "2LjSPA72HDwrheE8B6pztrwfoDw4dEDPGk8UEeY79SRaBEjuXxPzQCwCP8Z1meBjJ82fJsYyLsHhjtYzrkPNumn9",
  "key20": "2Sw6YEHX3pHvvzaFcGpPmWex5G7GFH3B4Pfk1n96aW1RJjQXWtGXkq5rKji2QWfRHUYAkS1JQmgjzW2mBECxD2QJ",
  "key21": "4bvMWN1PdPwKgxvuA7eHn9gWodvdodTeGMosCmUrQb9qaV8QZXugDZp4nh9UBhzFRYSHteQ3tC4cktM9eB4bFD27",
  "key22": "5Nh1UFp13Pgr5fXuNDH6jevqvM8zogAx9NrdKGGKmmtJCHxA9zG7hZxqEo87TRiAvghQx4uDtNyKStjxUJhwe1tc",
  "key23": "TM68sR5L4otxixDS8jSjmLr8G7ueYkVLU5HSEpANmmochJ47MTJDpsGJ37qMm7atBuKYnx5w9aKEaQXeJmMKAPA",
  "key24": "4LsxDicR9JDjT3FWgYbainmaehfa15JzXBxWxPpRUumMwnibCTjYHmv7B1pb1FRpSgdwDvZcxYjV2FwjBiFDitP5",
  "key25": "3K1cXzCXnb1Rb2KroFDo6uXDzFw9WYb7zLNcgnoc1SrQhMhf9LSGuCPrqGnAMyw54biKwznJfwQyq8FNjciinRTw",
  "key26": "2Sq18VA8DgubLJfUKfMxyaPCjxH2jJHenFA9gmVgmNGu3moPc37rWnqfsRLxZgLgT9m2yWotkCLjbdnJZ3xAjL9s",
  "key27": "5W4UfWf6csfcriLjUqynxKMcddRPzMY2FwgMytw4B8o5NYKB2HyxqhK5sbqNAmN4KpJHGbovnA59taTTGVDERux3",
  "key28": "4eEV9T21jE7k7TatXccTvYJHEuSJd6qFPxQr2UsEh5BzkNvLXr6tgPj9njLHcMahJo6bBSMhdCkQrZQfhq88ynPU",
  "key29": "4Bq9uYhnr6CNsQijtsUB6UYQJPw2M5XeSrWTi4Gr18FX1xenZJGbYqaGNhKYQNvZSU9JxDj1UkfawRWZ89y8UnWe",
  "key30": "2XFKERLttdDCy6AGHLMJWMJthyi5cHEtTk1awBmM82d7yte3eiE9R9X5srVzB2Je6frnVhX8mMLB55WD116xeKot",
  "key31": "2VxHYLKxFwYVH16ukWA5s7VzcvrvrLvsRho3ToVib1m3qjYWmVDopvdj1kZPdWajuxSNzeTQPF3XmazWzZUcFb7q",
  "key32": "3vtmAkbQ46z8kiqv4r1yGoqD8WNFF51G1djf7Q1xGMi1ESfn38Rm1TWQsKnTjgLerBDrfmhL3wAxWKSNDGWG8kjQ",
  "key33": "2HCzTNQZ3j4WrCRsY9Hyhzd8pvRrWch2D3XSB1RRjGfhhZYFt3vRxNivb4k5t3EwzjfDuNYPAnGbwpqcGRFjbo2T",
  "key34": "61wyRErbDd77Emm5qvoyPk8YwTEZRG6C5S1U3BzF1MEZwaHGsJ3Bndrj3qSK1h1ByXQGE2sHCu74y7jjW1pDZDnJ"
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
