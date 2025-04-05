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
    "38icgKUB8emTNtHnP75Y14nxtexhZnu5q3keAAr4pAxZcCEaCuACTD1EsaZY3KCqGioRf7SBY3facNK8WY5Pg5nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1VTyJTtxSTkeS1M4a1tufTgm79UvGSiU31bQFuQvQz8dd1P9HVkjHEbn82L7rCRRPVUbTSdMEmpJ8zm1Xbqpxe",
  "key1": "tDKEp5g1BerrNJLqjZBJHr4p6uz29JeLxL5dnwsZd5hsEPcwN7AkrPJW7BsZ51Ajx7x6hSMvUAQHv7MgyqB9nGS",
  "key2": "3aAc7aDSXABfcanEBQQAxeiALEzgRBnRfu4xS45zDQHsDujs8rR4Sh3wRNMWmRRuz9a5Jx5UvGfbKk6L3aeskVdM",
  "key3": "4MuFW96vHTDtiaNaxRNQPpsVemBup49skWsPVh6hkakdX5DHdaEHqMnQizshHujDybmHxSo7A1HTjT3uXGvnsLKr",
  "key4": "4NisCrFZ6RpPHLWqbDZxBTJ9NfYb9VY5q7PUHtDPG2hEgik2HAQyf7Vv9fFc29a3bQAPZRcskaXgJBzkkG4uN76Y",
  "key5": "3iTUhH19CQp4ZLrLoS3A4RkRTT1Z4s9oAVW32FSmRu1QcPvq3sck9Z16AEiU6ELVnavtvN1fFtPhS9aqr2ofhzYs",
  "key6": "3YS9UezbNrEgEznbnaysZR7auUdmshHts8DefiSgEgriLFjP1Fmuq7TD8mA7jq4Q3hbnebEXkcWa3RsYjJ2UtYFm",
  "key7": "45ydPrFJEHPH1HtDT9NB9DS9ptfG8jKKUed98CB6E8mDNd1mPfbCPCxsBJSDDL6eGrssyZYwoRPY1hojFHAg3BkA",
  "key8": "4zR2tXNk7V1rkAApYxogyxnaVg1KV7uJswfNfjnhca5kgpc9PEScpgxqS2nC3gvc81ZakdWifezk1cHTd5xwaaWi",
  "key9": "UMjNjZvQHE6H5rMDVQ76pXDyopaD2fXdNxVeawFqFTd8EifW6gHa3DaB3AAWrjMiND4k9tQTYCR1o1VJMUjY8dV",
  "key10": "2P4n3dwJ8yidT3mfHzbcnZ9CXCpVZ4gDt7w3ax36Uf62XnhwXixRz33QHZ5wcfTuniMdfjT7XoTkijdaq8QgQt6f",
  "key11": "7wCcNTFtmk5njiSsVjsbAwvMqwNjTpg5cMSV4otEbSs6K3oE5bfZaSxPNGSGVePbxeMm3SjrbxaADFXtX9ZEpD1",
  "key12": "3gRPuuRL3nk6LpbtfScekp8xJ13RPQxcMk21iNDRr2thaT7VnuEYVQXMpp4BtNgPZLSjuXj2QUt6ZCHX4YBYjJNY",
  "key13": "2GvvdGpoQQ4AtGtpbQNJTHjCkqisCr6zoeFCyGZBvxGLK1fVDscfegSGH4MaUVXmLpfXyTChTvSCMnXbwnkn2T4L",
  "key14": "61b8Dke5udxohGJsDAAnkvnxZjnkTBxQDn24rNz31UzDehtH235r2CsD6M3txu7UdUHFW5664QKmrCc7EzCJgpk1",
  "key15": "648cixh1ZL62pdf52ZUcQLidLRampqzoUusyAsjuwMaGYh9mkcQnFiLSG57DAm6W1VKBYB9PfLksdqzzPQDSnWkQ",
  "key16": "qwQws2W89dDx4HdZcxyLXajswtUSrr2Se5w6xpH4VuCPp6hcovZBiCi8ptZ7vtACUtZfeS1F6tvcvoDdhN58ext",
  "key17": "4rCoEpoWTXNtZkPguaaky2LuLNGrLo5rvXviNtCKv5uWDWfQfeXjLAFyKgSFkDE4QwBNj8vJxhYS3WsHLGRncamw",
  "key18": "2gApibGYXSRvHWkaAzWkGKqqaenbaXe1tucgzN345dVPSShF3DphsTsgodFFrKnyp63esC5UqUpFfkoDizNePqrJ",
  "key19": "2qDGt33RoTr4hsEwsvomWoqkMTLmAaoafXuhGKD8Yzg4CddErDKks5ZjpJ4xwH4e35UySJruFqTT3T1JUnqReCcq",
  "key20": "5APetqimGa7Hyyqge8fMokSmsecqKuKXYcSWUCufDLV1QEHE6XxmdA5RwVtPX7tvKwabbgVf845tGYDVbSH6eeRm",
  "key21": "3AGSZVB9ZXERrLh8Kpm93uZT2kEGr68xHvZBey4YmgRMDfLCS5e11wY5X46FN1mRKjjTo5c1XLxDmZePbE9sVfjA",
  "key22": "22Zf4ncyr2bqXfBM63FPF3u5dZkQzmCGi6EkwuY6LSA68K3Fr3LqWSQGRkCPqgzw31Kfyp4mp7j7sywJzFYkpxzF",
  "key23": "5pb9Dq9Hd61EreR1XukqjmVz4Zk7EQgPJrzjTWCAwEFwR1ehz8cnBx1AEFwhTZS5UvG94xfT4wfSMNMrHAga5SjZ",
  "key24": "jj4Rvi6TUdrvnL3s7v12e19uDWGBuQoWsVbwgdgNQtKZv45E2UghXCGb6iSJUw2pWGfq1Ei5aTfMzx8F7jWbUSQ",
  "key25": "4x2CyhLc7gryuSJFCPyBFKZ28nu1ySgeetiCD8c4gdF8HtxdSaA83aNab4enDRQ7Webgswhb62giPyMaxNrCu7kG",
  "key26": "5HTYV3Es91R2LJNBLMsmg1g6NJd6VNZhgNQYKw6aeHTQo2As5rTeqx35E3reD2cYmkurd6YiXbWqimXrDZm7x13j",
  "key27": "4qC4uCgHuGZSuqxydVpnUCmjK1yMYDQ1MBRZrR24WcUd1gGU5vK9jZToFCvUdihsUvrHg5N6BD5TFVgGMxQfL8J",
  "key28": "3i1Dq5RYG4CYKKW1Ftka9tcy2xRZEDfsQMuDtnkDWYZRELo4kPv1dz4YntxfSinQ84tqZTHz1ssoCSAUm3uNjyKV",
  "key29": "23A53VmBt138mp4Z2NN4JmCmCLPFDcFpxJFyziH6nBe6PWHccAgGiSZeiiyHuBWtPFiXSsWvwWg4cT3ByFefcvEk",
  "key30": "Ay18PpbCYEvbSriiuN6zrJopj7fk73k5rMN6LKrQD73QeMFeVUrk8G4xf2bowio7dKCvxQUcUGfoGpnTA6yCAKx",
  "key31": "47dathszxgqA9peJ44kABuYuSbFRckUopUsSrWE6BbjachsTvFEmidWvScSR6eSrtGBcd7mWRL5djBQmZZdBecyW",
  "key32": "2zJv81urxzKAqtfiyC3cd6vV2E8J3DW1rUpDTt7CX57YGtCoSRZx1F7PhE6D3bAYs2DCHP1LVTsqjXt3P2HztkLH"
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
