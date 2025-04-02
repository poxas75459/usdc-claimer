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
    "FRF56h6RUzcoCNJqcQWjZjzLfzp89Ph4mwN7j6wfL3zU4bjgxaSYPipgtFPbmUwmWwnegT8p1hmHydPRFuiPZvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcLhv2PHVBv74kbhhYvWNvtPdDW1WQhbWk1wAosXQiFnRiUzGJGyeQoCkAM3P1qss4ErYR9MNUcu956KEAU7pEs",
  "key1": "39yNbYzJepkM4t6yX8Nmt6wUpZnLhz4hpXu4i9TqMRTFnBXeHa1AUVb13TWAdvq29mgPNVFqw8jpfoxihp4hWsCp",
  "key2": "2hLRvmrwzoJZZmxSwCUGcjag2ePbrUD82PsPcBtzBSMWwX4p5EHAyNXMHHszYpURBcp9DpmrXnojhguB1a4dyVRH",
  "key3": "2pJ7K3iki5CAuBB79JBxUCzu2djXyky3UYPt8n94B9thqrWbyJZxzxBbA5Rar8GpPNuUdiDUocnWvyXrLxb1xeYh",
  "key4": "4XjiDHu9wZYD9sBDyBHEtQgkypRzJcmXSwuk94PQo3J8doQKYSaXkJ8Ra2kqKyNYCpq1rSxvVP3scPJHm378J77A",
  "key5": "5Ankit14PnEWi6RykpJgiEx8ygyT7SF3aWRQXcXzjG28ztHwTVqVg7H7erLcVDmunkUzqNFLUNkiJXH9T4diPRwv",
  "key6": "4NDvw3dsKyVaqgxBE7w7QJbRoJywn3MoL25TLQkUiZ3uye1QpbSpRFYF3i8qkB8zFC4uowPWURcCisymXqFJFR4C",
  "key7": "5AXrmMQmsfff4YJ9mimyPSvfd9BsvzDkyd33M1wFNbyX6K5bs7XhQENRxPaEGY7NunjieqkVTyLCFUywKRyqKFP3",
  "key8": "3rZnB4HSFJcBytW1N6KHfinuUtwY5Mnc35nWXb88QSQS72LYjB8xAfrnVVYn73zcAGMzu9MEgbK2o4JwYJUtvwXz",
  "key9": "5JzC1fwtUCbp2ZHe1ZQxM2zq8gqfGV7MYFtPArviCVJ7kfPg2HWvgWJZ6RBcjxBRaMPMymF6ncv8kAYbHECbPMGv",
  "key10": "5PKADSjB2YR7CL7GRoUipH8kFHQEwWPUENAELjLQF3NxUwKh7A1hFcy4GJfxxL8bKNk9r7nttFM25Mkx7zKSFGix",
  "key11": "UDWqqDp9kJWEX2p2cZBgtQ5EDHNhj2Cv21WXAsns9GD4CHVF2JExLAyeALgnNixU2WgS9ZaiARrNrH53AErXhQJ",
  "key12": "3zbpnytNysMVy11QU8NdRJTw33eFMXaqGQziQ5HbX9fvUvsh8iqk4wCX4zxqSkQJDw2XEsJEnDHuRLLAh62HgQQ8",
  "key13": "3fkqsimj46UCW3MGWkJyBBAXdDZzCt8eJhbiwPbBKZUBrdkiHdJhVbHZWxTAS1qRexN2YikSeRmCPyQdor9YBPWy",
  "key14": "5r5jMS1GwwJGr95CUvKScXVDJxJnH2bVKsM8iWkZeE4qRabG9YKY16v3TLcASK7Xhg86butGqWvUhTxPspqrzQZn",
  "key15": "5vNFy46CQRckUpNaHurawNWH1VMa74rRjAabTZmp8EbHWnvnSoedr58n5e8Q3cGgSZAziFXnmKi54kYuUxDqHGQ7",
  "key16": "4jFN8jVdQRg4Dsvu9rGq8rxwXBetE2hnsZ4EG2gMYb6XP6fXfbt3CuuE7kugEVG1auh6YrB13kpJYyuH7hn26L5n",
  "key17": "3J7w16fP65oj7DttqbTDmZY4V44sdz1xzTcAR7SSfFmNEqbShrFWJEP9q75rp1D1J9riZizv9mKQfEa9UyTQ4n3z",
  "key18": "32N2nC3kub634wmN1pet5JFdPFP1fS6fM13nnjVVUTqnaUFgvjQcyLZXoSktoJaM4DxkLPt8CcTHEpiVbjtDimoj",
  "key19": "hSPRbzFTj4Y9tSDdyFXv73Sef8efecCUvm2Wmp3KqY2xudXuYH4jSbApMzku4U7YzdNaUp3WvMRHeGpn6GjQP7G",
  "key20": "3EsPjYUSbV2PHSM1Y88JW9ciceZ66ZjPQ9JqTEYmiaXZzt5iUCm4GZSSLYxfSbcKVTYktcD4U8YABVNZZZXyMwz2",
  "key21": "5f12UmpVr3NFrJTNzMu1e1xJH8sptXEKCgeKCK88KrYc7MvUcvfQGk2zA588ds6CwA9JSpeNFnC4SPAVYdhKqeTc",
  "key22": "Ea5BvaQ2yzc9ZT1dA7BuyzenEf2U7gsTiEzE3PjGCk7BqLnURgQKfCxCtt38yvZRyhS8fft8pAdYbrm8KWfRWFr",
  "key23": "2QvdmjMQBE6UCEBzPxKzjQPQqqgaHJmC1eeRD2X7pfNN64tY3nLkHT79YiSNbfQNNrQUPkyNpsJGbMmryT9k9d6i",
  "key24": "533wnjRysH1R1GjiDqZWCkMoKHtgFzZAMwaAXzgHfXF1JGtzrZa6kFPGzrScpHGyquoXCmPu2d5Hjts5BEfiJReG",
  "key25": "vE8YduH52v7WUFcTAze6jKihghd2nr5GsFKwEyJC7FUWicoRNAU5L7cVVU5tS2jfsddHeG1d135rN9G9k5Trrdh",
  "key26": "u7c88QomWJ1jXDzkML7BDgzqVWKYgeHiezeiCzom1UhnQPWqe7bmVL5fcfeqopNHfSDyqm9aFrRjEs711q6ff9P",
  "key27": "55DaQKE65pQA35Yu7hosHkG4F3V8nG64nSeHX1YHEvFtgTz8KPfmNgKFfYY7A9LkuovMjQRjq7EPVBSeTmRfvwop",
  "key28": "2m9Pvar9gvXAnr1hMdfAHTRZc2U9DUz72H9BF2BxUHDBSf6GyCdRyXWYrJgfnxEbr5Np1h9H6CAeSBBgtP4ssLQ5",
  "key29": "4MR6wke3RYnJw2M5hRH4Z2hFnV65bH5ksW6zRZG8a19dfKabzuuq98HUF6gDHWgHqh5nxVtJW92WXMsAhxvZ1Kyc",
  "key30": "2gPwn36ig5YTPZBESy4g5anXf5vo3FFJoeob3Q2iKrVzvMim4hPXVZpMfQwovKJbpA3N1ieZRqQcAmge1CVKeszc",
  "key31": "5zo6583XSGpwVE96SmkdHS865mnzhufcVsrwxQsgcWffk86e1VFvJrU8NYpEjL9thdC3kqF5cEVqDJEiC4KoPe3T",
  "key32": "2LbFN1kLyMVkAtShgyVndcAmoknT8tU2bKkh9Pr9XXyHVxurSXaMLUHr3x2R37nsrdMpfyd9m69DaigiMbrtiU2E"
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
