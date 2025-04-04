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
    "3e1R2xkySK1pgPM2ZyTnPpGKnsq4RVfxVNAdjfbUnsdSF2XWM4d8fFCWTVNx3Y31e4PePPYk9ACLhKPnkBZed3rB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59hH6bhEvjSAz2a6LA45G1zZoDYJXKBZsK8dGXQBiNBL8Ca9sjmhKEiL3HDNFq8WDe5DButzxdtRvr5pQrCwoxPV",
  "key1": "5EFKd1HjXfqv5WiBPaKq6s1cwwBAd9VS2fGaZkqrmr6Fob5pedEkRGuFDBc55Zk9DArFfuJDLn8b9YMmExGjXwXx",
  "key2": "4MAvTWnM7srSuAwN4CBdTE55Yyp378vsjpTqETzNb38tBRxFkEPyMnyUjydg5dUoneJGMRKHr63kEtSjspwd4jYY",
  "key3": "yEe6mVyBy2cEDDTvBR7DrBRUhAkR8tNrjFSBechJXiUNZVovEE5xYiZFViTb2h6KGDU14KKvaGKsCWphmf6A8D5",
  "key4": "64ZdXKMXsBgywk9DHhi32NRZ2LvyGTZKR6UCrRGMtfcGgv9BdrjoCtLmqMdSm1UrAPf7ctofYKv3wR8WzoVQYLiT",
  "key5": "2VYnrUSM6PB3mXeCwmdyGfV6SXcYLpAeSamQgLFizwgxsy2sXLrmkvqfc3PaWpjydLEbx2TzPu4ukNK6CHVmCNir",
  "key6": "4uajppSaDtW2mcVRovGvoANW2qfd78yHzSd2BE7rjXHfGJCinGNUoUEFx33QYa9JzttUwmiDuK47RVGYDAR6UDvX",
  "key7": "5z5wDrp2qisJt4MzVa2hDmASjQhgU7wzwX4bTXYik4suyentoBdBCQzgmnfn6mgHktc42SQq24PrizcLAsGwrhg8",
  "key8": "3wE6CWiCjoFvP85HCtDUqYvPMcn8nQGmdpSLbgj4bx4PGC9yh3WJ5iyGjADmzMCpg8BZZKZXKpeFL6EttNHvLmtp",
  "key9": "HGWJLPQsqg9MHYyf7duLT2AjiChFubZMWqjgCMVoz7k62SL8NfRWUYDTrs4wgTsZQsscK63PywYt8EjqvPRhwZS",
  "key10": "2Du2XQ9YNykm7Bqi3ZKmMw6eZkA2PqaiLkR27RwuTwuEbKLnPuDmQtzCJKGMAy99xtTw7YdweE64jXyEfYNMxi8j",
  "key11": "2JhuvGiXJ8WdfY3MHohDPE8zUSLgSvgfHPDZJ8Py6YHqN4NRo23TxntNrghbw3c2Bokd4atmKxCo4QUAZMkzSnC7",
  "key12": "5JsqLskDV67HG4HMH1AfeMNUKH9SRdP7MGe1d5BDLuByc2vNgbagjjkpVbTYbLGa4FKRTjHCALSzTFW1uhED3pz4",
  "key13": "5Kgx273qQh18NrZVRrwAYvCjTr6KZphXVVozeqHmsBxwyoTjKhWr7pFb73K2pcmuCyLmhszYjrgmzv96PWKaZA1K",
  "key14": "3yERmw9yPyacijWMT7ZXuXN7BQcVfzCxcAdBCJXZNczJdDWb2j2uKXRma5fizf9MdVE5i6W5nFf1yjorWyoa2p6X",
  "key15": "3SsqqUNUM4oZhznb48DTrcNSTvJ1wZoVXeZtYF2Qrvy8MdeLW1W2vaCWjB2a8map5GDDGW2RhoG4WPDTwk7KhMDt",
  "key16": "5RJfv8hJq8RMRVgoEbdcS7riPKrinXCGiuGGwTGZoVMuWTt5msgtPPZiotCwF3GHKjG9jSuMBcG1gGKec9WXvn9i",
  "key17": "55hJHmUJdxkbrAMgcV8DVYtASfrXSYMsdfVST4yQjBydkhEG26qqmw8Z5giBrvNUfVivm7ab2HoKKA49n37a33vD",
  "key18": "3VD49UTSspXwPmdMZcJHtbufXYTSNtzvfke8bmRDqbWwKCfLDe4mQvaGHJKnNzp9AdXoUV6AXmLBZfcz6NWJ7H6q",
  "key19": "66soecQRecse9gGFfbGbhzaPFGGcFc9Tc8Et2sYmCudhYdwzvqW9hrPM1kVKR9ZUEGKoHV53hnDa8K3TM7vknD7M",
  "key20": "AqFxqLfjujBeEDRDtsMXURWv7P2ckkbXaWR4szzrmVio7iGLw2cTFZXABykPDbkQBypQNqG8tBbPis7UgViYs3v",
  "key21": "5YkRixgkPLgCkY5WwZFDjooKrBQ2iRwLyy76NaM2aJH55jSDt88d9wsjgqAHcnkuet43dg7pgNAPtWmES8gTYVZ1",
  "key22": "22sZcununktZHG5TMV4QBG1HWAZxj6WYpdZe4hZkpmGQQRsFTVpbgETpmaLPVmc1VKheNuJwhLymxgnEuknCRLam",
  "key23": "4EP2WUzYiXZDtckCGirm2zfS3MjEpBg5uJBn7r5tPUQqNDcF6TazRCySeFDJv3uxEYLZWCjzAg3WkrG3CgMFPYSN",
  "key24": "62TBmSHZkZn2eHEzEyhBN7t7wNnV43KAL4rjobA92DfqiXkWBZP7vLa3rmmtJ97wQAYg7Sru8CspjTSoc7ppYd79",
  "key25": "5z9EsSaPQZAD6SaUa3UJ5hZKv7P3kcA4qM9MPx1WHMXbQPTBEzQQLtzk4JXx4SXp6qDSnprmSivEcQVGRj7LdgMB",
  "key26": "2Hab916tD9pfpnYZpNVDW2QmBQ7NstLpHu74hvwNeRrDU9SBoRZ2oLtyg2VnMaMgAP6NSXKUAxJLauNBLbDBpiR",
  "key27": "4rGe9Pstryoitk56vHDTnaU63ACFX3QxGFnvHRD1mxTNrqzP3pUA2SFgaE92MetvAzkLeXauEL53ojQs35fLtqNA",
  "key28": "B1e17PUAc4JRXAiVN8PsyGDQbGUktA4GLtoVHe13JCknjJmTtDjVZCk3k4RWkmjZA9JzmJKPFgx4VyoYzWnWRVb",
  "key29": "mtBKw9MJ7nCEEnstfdJSnQ9Na9fESgcrVrBtRmUVVCPjR4eUgctrRpZye1swf3kNdeyzcYAERqh9TPSoGixvxgh",
  "key30": "wNSfaAbRXM8DSP6SFnUvT3bRVoz2Z2FHAGMvS2soW7mZBUPVyoS5MumifuKeQbSRn9qjc2FzXdbDgQMM5bApA4P",
  "key31": "2aXvyGTVf2GQktcE93hLpLTVsKTnHQ2NEBZWysgtq2YPe2bJpb9AvYXsKW1vPMwKpu86uhLHnA9Nw3fk3YmQbxVE",
  "key32": "tVanjYAX6xdzybne78SciknGXWzvjP3v5VtHv6vogKHJqbtX4Z5PXj584rQZHkH7F35paVG2BvryF7oURcdM6zy",
  "key33": "38842yUYLErJxS2fiAM4xb5DQQiTvgUt1PtLbvPsZbHrixAZ7N763ExPQEmj5GkLaPBqKCGaTSpLwXRUQSKs9tXy",
  "key34": "NqqTXWHsYz4WH7s2BQPuU6JMawdjw7JGE9oNLVvjsKyeKiM5jH2tcFtkxmVSKxDSS6uFqWiFuGfY1AmijLMCfG5",
  "key35": "4RgznfYahZ1hRDtACt651CbPrX7B84qGDk2sJ7J6LKS8fJtkxQxQoCBwbJbFGCDkfvZKVkt8CQ9gRjGi5cQJgXxe",
  "key36": "52zy4QoexWg2fLK6vYGxXdd4gqF8ZKV24x23c1dvYouHUUiph6sA3cf6YJSZnZgep7ehqWyVmwbTg7fPiYGXXd3T",
  "key37": "526wdMkBc8GGZKvmAmkXFNNoNVmBWdgTa9BLSYzr9QGKfC7AECk711r4fmpx3gXqju7EaH7gxct8nsbWUnq2fAMb",
  "key38": "65TFtUryjRiuycsxPHxh7scQGNpZZW4vxYpaS1Mc6eM6sBprEbQUUXhmsmtfEnqe3fjxMSkQgY7wtQEx4ZfCeoRp",
  "key39": "4L1ASxodnEyVieJzYrVdPcpzut9STw1cUTS7eCnwuQbWAYLZG9APzbVQ4CM37awBrJWPVftNMhyTWqbwr2n1HUrJ",
  "key40": "2hxUG1pJf6Wa5KuM1eT7HpThWeDKcotUcrp2dVj3YRaUifzjyooZQfQgxh55ordioiNEsudr2M1iWiLWU5gC8V9r",
  "key41": "QongVwjWg7xM9M48kXCDEN8DrXnYqUEb1aZdyNWZy1vfuX1pnGY6wB7AfbD8QS36W5fpLZ3kbFSKMHQz6x2P7gF"
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
