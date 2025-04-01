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
    "aeiJEL4u4Heh6UrHdykMy3QqasBUuDUJRvKJsdE9qNLX8x9yFNJ6p8QqcMuYumXzAy9acGFjFovJPYUS4dV8uJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56vBVaDKBJJhU4dsdeT5VH5Qz7rpihddh9EbEWHR1xvnYZi7gByLbedM3kz5VAozM3F1HBKwknhAzwFr1AmLaBGd",
  "key1": "cP5aQjeVNyFaqVj8nWwaVmnE6fmsPMqMg8GZNuMVhWAdtqkQ5UHzvLwZCyofpg2y1nr6Tu89NUaz2vVsXFTKojN",
  "key2": "5oWCzMZ1MwkEPWX2eAVpCVDjr5W429gT4N4qp9NQcrvRTdXJiKraWe9b4Rowrt8WrzmpqJ83Pv1JvV3KQPpLCxGx",
  "key3": "367e3esgP5ejkzycDSjNQPCEWBqVyZWjp9bWsEDkDT5duBCXhYTagB9a6ttPDUCKujSQgpdrToGo3ZNaaMnmDwH4",
  "key4": "3zD2v3EmwfvKvVhEunNWQBnPiCye3fubpbBPLCMQojDoB7ANG4szY3nQX7vouLuouJMNC9pmBqcD7LXrFJPwmPMw",
  "key5": "DVccpCeAEM1SQFw5BE3K1Aw8GdgFBoQunJK4PsefieyYj6vwNV86wN5YdcXU4bUKEhJgHv6ueXSuAKJKsRKkZyY",
  "key6": "58TkoFsE8tPBuC8FzNHybSs7tkhYYdjk1B4qPyygkzsG9kn6yepntsMkWtudi2miE1EgyUDYZvBoBY8N7SsbURN5",
  "key7": "5YjZ4k2VUTNyyPJL4wTd1amh1vG6cAkXJmWuKeUgrpYrSfMpXJ5F5T6DXBqk6cNeTi47Z4MMsvXtqyTjYXEzYYNY",
  "key8": "5eHjwh5QdrWniu5zVKaTzFzrX5ggJVENmtDhFSdjusvzuJcgohGysh2mx53NRyZoNBqNE9LuK5BfZ7TztFnrt5BC",
  "key9": "5k3tFZDaHA7qjShSjNCyUyjE9LmCyWt39otBhAFoCi7FH36yCDbkbhnmHAze27jX2wcWhYUnv6EnGuug8HDd3T6C",
  "key10": "2BUekMCUtWkiws69pwCLUvUxxLfFCDvcT8TVtwYLhVEAkbRhiTSgmm5U861F3bLRHqHkXXenZoii77HJgwUzxyU1",
  "key11": "5J98CmVy9fmNgehxgMap5JhsrmDXUr9mkEELqKWwHnUTmcxF8qMGjoGW7FTo34cRmronRNymrTGt5cPFwC6Vqp7Z",
  "key12": "4NhA7KZGwJVKBsFEhk9D5tDyo2MVHmS59jk3CZtsyJRYtobSPvsUhLHEv7V6W8N3PEWdZexx8dt1gnmkrdVY7vTe",
  "key13": "5SF7njzCDJM1UyyNP6XXVQFATLcBwazTMtjwytQdrHX4JtRn6xqBwY7iCyFT2shHEppaZ1SdsgGJMkezqWC8V37g",
  "key14": "GCyvEnMAjrJAQ5HDuBQWKRtPShZfjJMuuchDiyjuw8CmYH5nx4SYe3bwvBrzGYC1Xt9kiVYHuoGFoCyTchmAYwN",
  "key15": "4bBimDduMiVqmpMcn17XLRmxFt5bYHW2u7Gb6Z3VTXgWChEunbP9JeQrba5xb5owshpGk4TGCKgSEjQAhoTgxD6R",
  "key16": "2kLEN3UwUpoLNaZ4yp8AKRxdjTHwPVaYvAAZqsGRr9pKnNT9QA7unasnxfVx22fovvi2KGCGRE37mKAttHnZxJSd",
  "key17": "4tBpUYabw54HgSjQjbeWcx4XxTSwLD9V6eWabKtiQ2vNZcgYmUvHRkw1vKm5vBWhVwX1CMpuMVZ6GD3atPq3NA7v",
  "key18": "3UhZQqs72yui8TGwnVeLJSyg6Pe8mK1kqJwX68K3xLnVRnt6r66jGoJFw7K52DydxzxJEvatCkGHeChhfVRrFPpr",
  "key19": "SYWtZ67XGQtmckwnFyJXabLbcoJ6qFCqxftDL79Xo5RMTonrnaffVMjg73vqkqj1wsRkZSfe8ZEw8H7b6Q1HAzR",
  "key20": "63mQcDA9LM6RpxktCeWyVEka4xExm5BKERBvDAEnh48pvCjNznGmfzE1iUKW4TCSt7EbwJyFypPSBWSSx5J2EtsC",
  "key21": "rj5fEohrLNwFKJD32XYUzkxt5ZuWWwd7g62frEGpohZyRTcKQXqDfqbU5PtvXgvpAxc5z6qSGSXFYoS1TiufWq5",
  "key22": "3Es3KD6c6snc5DEZiq1Dzy1FT9a4ArsiKLbxYiPE7DGJBt3WWm2RRt7SgEfiDReGXTCrQDbutJVKEbY8t6tghwzT",
  "key23": "2GXzazvqXPg3KPZDB4wKeVbgLf8hJ6spSJMt4ZufEAa93V1uz2wcqdK77wZY8S68AQUzjkcxrGkKS4PACyjN4usp",
  "key24": "2vPZpTgaCRV2pN6wRxQRZFAZZLpHBgWqpUc7VCyadSD6xJu6c4wDFEVTs2XCCN8ocifNNv8DX8czpUzezrn6gDsr"
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
