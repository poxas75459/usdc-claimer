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
    "3WYmWuaTy94cQYw4jfeAsgRb1AFTRtAPsMrkzPkDMLreu9LTnoBgvcsfuMoEbsp2AHrBB66SjQEmHLWnbjQePCLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3C9pyjutdsBKAf4626RCn4ipYuuUYqNdw7bFM6nqNL8EB5bbX56uNbxjdkPbRbcmWt4f5zWP56VGmQkZLG8B1T",
  "key1": "4GFjL62o5sv5LQ2ezgrvSETBNTY5cfxTMjkSufMMaCH8CpaNqEhy7SUeNycS8xrNLPQLSTCZXZnNz83C5D27fb9K",
  "key2": "5dG9BuHwpPjVFMYkdpzTrThCAgjxhFGXt2Mna5xi7uf3EVi4zut1Pk96WiLyX49yGy9LKNEVztyrUD5H3TFG6z4R",
  "key3": "2iZZ6hJvcJN4GaqKwHvVeZWSRmGgZAgc5guKVidHrnRU5r8mL9mv9xJhVnc9aB7HVEfTxjYCi6BxBEM7EZtbwfME",
  "key4": "2d8dCyRwXW5mBM3WkmnjwyK1YihPZK6g6vXWGzVJXk1eZEmopt4RBhZQsy3nyL6bGSpmQLxAdaYB54rwtDFKZhpQ",
  "key5": "5fcx7idm4yGNGZi2C3roZcdYvjyErifk3Pj3SJJEx1CahTX3S718desG5JsSdJptE6Ny1xqdWPMa5WS22G2Sj8PR",
  "key6": "2vyC3TFLLZjhD42Z7LuWA237dnshBSSinLLvrxq85esbnhtfa8RfoYCebUiDrgFJZFdK3xVEdgHnY418qh3DfFJb",
  "key7": "4fJ9XRD7fRvP3dU4oUAZyFPHBWSy7mPU62uwL2C3U1ouXrqqVpPb5QV9BwTKbdqiAGtqX5XjcCkchF5tGtohfkDU",
  "key8": "3xJhT8tfXpsnmkVHSemfHWpoaW2GWNtSZ67zXYxRB6bHRE82YoXGF1nhi73EjYf59nRunvUrmMG9QeZ5YShivSar",
  "key9": "5naddqZ55vT6Hj9QhkJYnA9tLRhJJLrxnuegm3eEc9WnWt9TNhBB2nR2mFF6XMKU82WpvUkn9iirpPqXQMwmzezE",
  "key10": "5BcGBnfrjHyD47DMtuaAgDiAvy3AQbFUhjyon6LTPTWeLy1LDhioUsgYDkcjtAnMjqpNEKM487YD4s7K89kr6vh2",
  "key11": "2vLYgHMHeiU3FeT9QaE8jgGT5sssCHQjr3QU6RjFH45bGM29LjhfqYT5DPh8bc3gQLfWCDfrLpwkMdUGvN5qyfPT",
  "key12": "3Xc94wTbNNGEfteG9yFZ3QWHr3nKcLUGxMkPR7BCxQVhwYtRKERHq8BLkeYWk5CkED6BFE9CVyKTBzNGndoShDMN",
  "key13": "6aNYz4diqKATf6CH9BgkWjNUm6fjDmy4TbqFGXbbeRHvpQnBWvGvRaWobpDAwJ2VmXyFZvfcGHvShBfpu2qjp3P",
  "key14": "oBKyjgYEVPAmYc8eNBfQxo4vV2Wnz9Wz9ZCfBHYN8yaauQDmiRZXtTo53JcLv9rZmLqNJKbi6mdzU4N3UPTrWtq",
  "key15": "4KSXtpP5inW4ydGhvAw951dskVtz4LrY3LdQeXn9UtXKhe5dqY6Bg7j73oLQe9Mzbif9of4ZVkvdYmrRwuvfTWc7",
  "key16": "57ZKfAtUjQj1i8ydrgfBM7fYW3bYNRVuYGVqxor8Ki6s295VmhVVd1k1LmDHmqYoXPyr1VcUTTreJxiXTdTaUsVK",
  "key17": "2R1GnBPEdi21LKsGEzDsF6r8JoTRMLjy9QMQUMoJg8wYuhasTsGPZFRBf9wUrtGhGPTQraTV85JPVdcMgqy99miu",
  "key18": "2N1NmidQxR8LA4Pe5NuUQ54A9AhzYBHRfFghdoFJCauRqB6SAuzDC299fB1TdHHZiGBk746ZMpwJtJroFvzv4YCH",
  "key19": "5rJmr2EtxbLNa8KidcQtE2vRhm55GsPTZZrkx3XMaMXQjdZPANcBMWa5bEPGRczNuFhwY8gFStk5Yyki1nErZkE6",
  "key20": "5vTPuLjRFM7UqPACtzoZnz22FUKvmqcw67dsoahPbajtbzRnwS3axmLQd1mrqCFV78Gx6Wt5k5vTLShq91YHJHAs",
  "key21": "4kHAFGUQ87wBxxWVkAPBLFxEKjZm2y8EKcaCCCH6xgJ6e9SUwFGwZET9YLsAVXs6k2rueUsV4Gsm3n3pCxy27oxW",
  "key22": "2grxDzQvhe8CnuX4Z5HYWbZTFWuoM3wYWpKkRd8tDWzbbAtRjG4CaCoL4Usaw1Fn1u5eRaB9HZZkzJCXLijGbq85",
  "key23": "5iDwLTGVgSSSzrTKXfqXqcyA16RNGmpGZvhVpHtHo5jtBkWDncytRcKMJBMH7mG33XN3Bn57JSago6zpS3Cj1YX8",
  "key24": "5GPMKHkaVFqp3Bti4zpSajUDm6Pho6aiF72kugN8jMJKnsCiNxbcNheQiZA5knZtA7D9EE7ze9j3RYwJmZ1ZCjSV",
  "key25": "A1iwdgkwxKeUbnpTytYTkrS53uKxQc8sTneAhQHjkgh7XqWiuQFxUxUKgaC3z4w5fqEEoPgrTHDnpzzzdXazZbf",
  "key26": "BZxfRPoG1hvdthpLQiwNrYYVXPiZWiZVeXUKPyHWRk1LjfJ4jZf7Au1TMRFzG3ast7ZpFwxoiDCLQoBUfBXRBuW",
  "key27": "4XJZuZ5SjPoqcvoLdFeNNRAcvYEucgMkKAu2ZHtkZWBAvkmmQtyb7meMwhToe2daU4rzFSp1tS2TLGBe6SCrVMmY",
  "key28": "3QBSCbskvqhh1LrsVyKyP7Jf37ZPLrnPy4wJKfB5ZZyneb6XgEyS7oHTBwEkRwVGci7R5tmY22prHJvX3p4DYdvY",
  "key29": "3jqiQkMWfgUXdgwqgzg1yHs4NQgQvuZqQ9qdrmF85c99GdnN7kt7Rk82XvVJLFiiaaBxx3LzkEPvqdRbYuxJ924b",
  "key30": "2v1omPZR7ZYoxxhnbBBP1pBzSmCXef1eipJ46gdA4EYTiMhDiXAx1cW3urdm8QxdvjhQSpM1QG5GXtjnEdJRB7pD",
  "key31": "43k9ty9moxttcN5gq4FPFrHa7Fo4PNeFQPGRpSB41UrPr9FK5RKLiYF13vVGM2zo13PaMimV3r5fU2pDZjpgKmFt"
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
