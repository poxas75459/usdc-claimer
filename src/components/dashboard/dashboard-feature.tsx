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
    "3XMPKzBHoggFQtcdoH6kVXfmk8zwir3D9ToGQmou8Ufy8a5wUxDLYCFhovNfw2WcFohvbz1RPtsyXFvxqqB7Yzjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WEefBUEQbjLh1KcBBanX2MCNif8cVgQ3vAg6cjJnnE3T5swiQNoUYVzYuBhbqs2iM4t5AktVfRSLQjdb3npfWNb",
  "key1": "5fw5FWKHzFxfMbCb4FbErzeiWCZ8PuQPbAzMKyg8MZRnsRnLULnVwsgBSAKtViropHH9RKJj6gsSyomrGpWuj4Hy",
  "key2": "SJTGunKvJdhVBEg1AezDmb1HXobK8Hh3wyNDhsBUaxuXTFQkWfdBgZrKm5mY5w9AnbLCpU9iqGdyGbC3kpuCAW7",
  "key3": "5Ygm57JawcBbgc5vaeCyV9CLh9Pc9nkuJrJoncLu7fmcS8AUJksep9nJESv9ecpZ8xchxNgqtiR9g2Ym4vKf8vTM",
  "key4": "3qewtHvsEhfuGWkygjcdM7UvssuUMCAV8SNiFEnYeYWCaCbNep5QRB3pcMwnZvPsDZEDtBTeK35p7FYUF4ovM92U",
  "key5": "o3V78t5ehsU2hGzcKxpgEKNm1Uuv4wgceSwXXs8WPu3Kub2GdMWx4ES94kk3wBgz1yMwCoziB2Lxo1D1aB2N4kS",
  "key6": "4xm6jCxtbqYD9eDfjmoX3FETdfhxpKZ1SsQYvh3GApSjq3YuAR5xpCpLmfkg36G38kEZyieW8xiTL7THCbKifRkZ",
  "key7": "34L8AwHx7dupiq1ou3V9SsC1MjDV5Mh151DbM7GEa5hhB9Yf7cHEKoEXe7iSJkgQkJd9xrm5DHDm2uirpW6YyQYS",
  "key8": "5DQDAM8QsxyKAkUG8iz3mMXWXJP9nbvvyLBnwncJe5HCbC67i7vsw6hgrQmv2yr86XHDFUDQU4AptJ3wvEzYqba5",
  "key9": "5Nwq2bRWFxFq857qDJJx5GV2Jm7j4ERSobQDKD1cyCaHwThNKREJks2nMVnNreTpKVUtmtH6qBsd9p49MnZrDfx3",
  "key10": "3rop9YmaS68bgxEeAcgfBshQC6THLTZVuqt7WszwDasTZZZk9Y91QoMn8rX2hHXKYMPBXbGinC5ZPyMWSLjBphZY",
  "key11": "2D697DuQuk684K3LSC6Q4W1vXzqcDiRDfuaMd3k7YjVYq3nZKk8REUYqgE2xwTybBY2N77DZBeKAw6A8YXmgSgnu",
  "key12": "3hjVDLAsG5g3o51jp634PajXKV5FUwMNKQzshdvMufgGHpe3iakDAf7SfiW8ynfMFdw3wiGWWPhB1rsVm15tqvrx",
  "key13": "4D14X3GDoeSbvixpyc1cJRfRZQFbYvaRNtZiJ6apX8fhpEAWJzdSP9tfeSAg3NHDpzpmkvLAzkYaV6EMoBfMo9vZ",
  "key14": "6DGRE39keBgLphfNTYEqJKK1YtVuJeC91uW4jsccefhwGDWxb9MKQhShv4rT2AX7FQ9zwpvpEcpVquW32dtfmyz",
  "key15": "4Fd9guKsSAC5MSZwWPGFxkeoMWyKhVcJhvbbss2Pmv52hEFP5hHRmJyXWgEYG5QqqHNxmP6eaEawrhTfNsJ3AwXT",
  "key16": "RA68igjAjCZ4a4MvFkfxsdALKdtL6v5AAaeomcAMiDUg27PZjMJ8Y36rvsN7XxbxXdMD5Xx6HupLrvaHDZg7MWt",
  "key17": "2AFzx6FmrAZhrykppuZhFh5YGNrhNRsC23KM85bAjsSondydHe4zfTq3khXerJU3q7fDDtPRJqDW3Ugc1CEgTSTG",
  "key18": "2nQCoq2SstQhKD1uDCco97KosD84sbfZPGBqfeonPxFCLpcWwMpWeHZzm79c4TwgnJ5uBTAeMfSsX6nt2JUnM81U",
  "key19": "VdLr8Xa9gF5DRgvW5Z6cYDY7Vk6dt7wef3RXxbybNThTQHjHn5TP9msSQSZgGucYjznxd5SrpfkUeGF83RBcuD9",
  "key20": "57Gzg27qpdwDQuawUh1ceFRiirFKwu4kFz2sXd5nvaie8cHRYXvjB53sZ2dwwHrHTkC15u38Ufkdb2QNscLio8dF",
  "key21": "2jbKzfh8CzwJHZfBhXX46FHx8qqzUzdGskBMrV6piL8TpD9upW1FRV9vfaC51N2RQDbSnR8NfB8HsDZo8ApjbtS5",
  "key22": "2Ph25FKk72TR5NZMGqhF19bCE6B6XpMvEq82EfiiPgFbQnjAEzaTrkg2rePeVr4GgCU7gqntuYEiQoMNh2AgN3oc",
  "key23": "3ywYaRGXy7UXEANhqM6w1ak8nNvkCHLooM73d1dA6ADRBmSnae7cuNVTnfazDkn4AwpWVFXPrLqzVFtcMcBgA4x8",
  "key24": "4c2zXjh7ym1DFhB1bSan7ATJ4sRsCH49RyeYhDfCyEw8PWij4DvXkYhkAcBQsfhecX9owLrTdQsv6uCsaME1j5Aj",
  "key25": "eepdXDZxf5T8XJVo2wL7D8CotakAfoYc4GZZE12U4KqyTk9B99W55mfA8x8VUqMfhojXNNZb6LXwYhPtdqrxh9V",
  "key26": "29JB8Judkm2T6EbYU66hQXcqjVigUq4cas2N1HR9QYRx3oGcv5BTckFX2nbXcaNQFSFzqPsnvuQfWdXtsRDzmqek",
  "key27": "2Ww9jDzRkCzvDnCRFeEu8MrNVyYJLohPGEUiFbv3Ruov8TmwCrcL9dBKKsJuvJT9rMtcPdHz1sK9pffQCoMY4ZjS",
  "key28": "5V9g3PEBvmKyhftcJC8aEd3LPZcW3nUgDChKfmrBxymtgdo2AFQ7B2HhyXkL5t5eFhLEomBSDSg7Fa4XCfhD4j1x",
  "key29": "5f3PvzPyQd3zMcdEUr7B13zMDUoc26oarW4Mx8Wd2rpc1EoyH5avzZfjQ7fvC1zb12f6vxNn6RMmfA2Y5yjf92eA",
  "key30": "2e8shdUo8AWicrnLTXAyJiwTypLD2tEdc53f27PNrUJSgj9WDKgJZfcQhCYPGAVDb4wvRGgeS37kM2sn11HZwBs5"
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
