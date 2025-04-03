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
    "4dQH1Kg9Qnqv47pi9Hq4x3CNiRE9oSN6qycEZTmFKRtZk5xHNV91SdAybiHyebysT9toKmkoDeMjbE8qNaVUS7NV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YbrHKzXJ46eB2kSdxo4chTem1dnvXXwXJJPwqj8ASh3Mfw9Wj2abEvgdhTs9pRH2TkwDhNBCm3srVZHEgbrEgYU",
  "key1": "4W9M4gfxeu9WPcmK2ptpHBaum2ogikUMkSEUfvtvMhKmjZwiD6TKuX9tNJM28oGd2L5GiQwBV7D4HaNjPTeLhLF4",
  "key2": "41u4jjvRk7469PJyBLAXHik7C8g6Eg98bT5s85BtKojcRNLukzGL3LP2kaSoMZoPZLGbqVXmAhMntapBsw3QeS1x",
  "key3": "4jtLEErHosMTA3ZXr2suT1xDXRp3T7UESqX2fqfxjhWHqm4xFpKkkoAQF88bHtTW6NfGtGb1yd1gyRYs7k7gowmw",
  "key4": "4oAuixZPkBFQ2EcJevxymQqXCMws5mEAP2EYJ9qCxqEwSkoUTBTTxQcYWzw943cYfY3ahhXDjrLssDfnRpZWTxg1",
  "key5": "4i5x19eXoRf8iP9CGiApXmm8EhPjQfvcA3nnCmCpsaQghP5AYSyvez7JWMi5FdgZdc5Tqqy7M9ALkcRSpwenLrBF",
  "key6": "2KU83scmpjVe5S8nJHhV6cjoV3G5qDb1vpbWZKNc5iiPcqpJSJvHgm3KMEnBEruBRz5gWeG2XVRFjhSRLD6zbK9F",
  "key7": "4FUioNUka2inKx6xoZWg42p294bUNiC1XHq8Yo97H5J1BHsNdAjBrpamWxoXupQWbmwAuos4tpEvxjLoizoGfTpW",
  "key8": "2fpnrHrirEG7JuFwiRaU7tuZ6R6Y8UwAGaeDu2Kbs8TtsT1gHTDeGQYJAjs8YodWc746iPXv8wG7BriQAnJTQ1Td",
  "key9": "E7WNg2FHJ17emYBcseZ9ui9NSupiwofBXmYWs2n5VQGmoKVgUe8bazMyxfi5zNV9mBWF4zfzCdxRWZtdgE3RGJy",
  "key10": "54Ns7p2gUs2P5xqw9KTTaYo9QmqPkX9LB7wJdZNEDbqdpTfEeLVnjNEifJcHwUQGCLXRJJD63BirF9kbsbFRcumE",
  "key11": "5C6nBcFfYMqy2EUJq7216WeXbGReqdtUScvsNMuq4BAbPpnk2dX8QoEKecMWA3tsuhrYCRhEqe8Y62hJCNS53Tp9",
  "key12": "4geQhCvMBtubfQ2GUDbAaqWK2u5mp5wCTcoNrmEqhpd2Z5Tq6SX1m9U483Yy79aLBJfTGyErwh7fSL5gRq2EgdpY",
  "key13": "3smmyiZJ327AgqLTNkgBgw9qvZz2Bdt8wwMSCCKZqiYTTHbk1EpgsyM5rk13G3JqA2BB389PfPjNtb9yL8hhLdYC",
  "key14": "4bdkVuCr2s68Foyp52RRKBMnaHv5DPb4QJsPgqJcV1zRHxPpj2bMc3KjPXFz4zMa4cYY4AfjAvgVPZWR5Ahqrxem",
  "key15": "5KcxGuqWaKqSwE91Wpggxq9KffKXRQaj5cGczbet714sLjD2JuvzxGFeRPeG2z6gYaYAhcZD81YZv8KRrsVY4ZGZ",
  "key16": "3zRF7aCkGjWZTLs5sGkNWTMu9FLeJt2kiLKyS2cv5KhBfjWSyRLfChteVnALYnXyPxBAukaCvTAg2fekSLtj5DDP",
  "key17": "2ikxteLPF75XvpFfYHmm7CEpK7EWiNC3MKqUsNhzq9G9c6QaXRqchyUzmVQXt19imr11CqYR7ayF48uEDKj8sSCW",
  "key18": "Kw6oNtJq4359sio6Wg5CKCdEriuoA3Kat2x3yDMZee1s4gBLbTMgQ4qfFkGtWGF32Jkvfw9d1jnN7ThDXbijmLR",
  "key19": "5iiDPhRZrTsMQGjWk6oR5uin33SmstwB8wCquBVA4HUXv96xK1y2FxsE4sGBh3ypJYJpn9XvC3nPbFyv9u4eBKGx",
  "key20": "2c6e5HMqTzYVJzXziL3B4jfVm221A9ZfhFTK1NmLQjEBFFLCusDE8HHmxEfvwWqjrjmAsfHskob97HMgVcJwW5wy",
  "key21": "MhLRd4dYepPUNR9RWqu1pbuLWxVPHC5cxPiqBWonvVLUwtMqiZUuRiHjpSYVuuJaW3qsjtsKVtiQjs6dQA8sGFr",
  "key22": "2K2geBPnSakdKNh3a22FgE3KzpiCe8QaM9NZjN9krWTC9PL6S4iWbbFLX82T3haRbZeZpcA5ohpERTAdzsAvhB4A",
  "key23": "37NRnLm9pZqpN8o5q9A4LkF9uo6XWgSDxyaHySYa6v3h3KJXPc7watZ18yDDuy8Rv77q34v9ZRBRL9ZYfUoyG1Bq",
  "key24": "2Rr5d59XBVHXENW6uFBA2bbuD7iUqtUGfR2FQR9SuEy6f7u4avY4qDS99sXAkZ5VSomYK7BKyisau3sK1cApz6Sz",
  "key25": "4bUHm2fYNNrYtqiUfZouBdaQywgp5fcGGExCXo7bJDisMXMVsb5ttCtRzm5tdg8SDdtqrfFaDjnKkwuBgqJ9PE5t",
  "key26": "2dUiK9HhPnpETwP7RKFDKpLWNznp5qyREjnrGXHmifwrkcH1j5YyeFpUjEfAdUBHdvSMmXzCkt6FtezbGK8yikZo",
  "key27": "65ayCqnbQpTAGzRZVdP3sR2w3q8hBmTV5dNuRpqHwuC28TLtRWWaEoM8WcHpnEBbc3g9wFcvKLQNET55vTu7vq3y",
  "key28": "5RUmbjPq9NUXn91KrdHvi5y3wxigLACttHav87DLhVNXREdPZqAntr5zfTW8TkUxejXnXPPrmi7xwAaVJLuMikpq",
  "key29": "iv2ZxFopzk57r783iTt8px2AimCWFqi3XJEbhv9hvp4qy8BRvi2ZgnMwdgmgD5fEQT638Q59vyMvpZgcSEFPxu5",
  "key30": "26KUCqzPuSUGfk43aRuicn2pXW14iLLEAoUJCQAxJfaF1mtwiq7mE5GNZXnUsUJKFtj6TQw1GcfZJ7Pc12JHyEzW",
  "key31": "46osiAzZNFLuaiWfit1z6drjy1K6W4efjfjuEg7qHRD4zsawsP2FVhwPdmshT59xZDRH3JjERvNEXqSH1aivzDs9",
  "key32": "F8Zp2ng5EfsM2e4ogQX2J6saZQnAWWHGtRSxCdzFjg7qndgKRrKDXm6imoakegpHYpL5K3w1NTWfGkQK6YFtkYZ",
  "key33": "2sH4mLVjSGkzUeHi4j5s4VcqvfE5vh7pByt3WszxHVcrCEe79KER8vLkyhMCskp3Nnb2B2qFwtNXQbg52KA7BBKH",
  "key34": "3abMerJn9iTDJJDKfvMJCKLzNF8LbUxZb7w9K18jCk2wdjwQ6bsb4uJz7PabgdVzHwnRA8sDGKDgL8QkafeGtb7S",
  "key35": "4Nh1D8wTTLwvL7bAE76Kgap2FbxucHcGMsvDZCxSt7RQUQndWJJPihq4ek5yWGNFaXQm8CwouHDBTY6n3zGU5euQ",
  "key36": "2GKFqdEN4VG8YuqM3XLQsuynNJ1gpNEn9b9h758QB5XWXJAsemq58r8tQNiGCVY9AMUepMu8bLLogeDioV4efSXm",
  "key37": "4HBEHvuNzM7PP5dvqQ8f7rsk83rjYPBW1MqHLtDd3WTHqn9uGxBbK8iCjBgSfovw7cWyPm2JvbxJVqqsNxm9iYY6",
  "key38": "3oRUwtFCnG8hGfnxxwxhmZx3b56hhJJvqE6pDPQs8DxZPtB6XTZUbEELHCuyGjDpozhvcLYdT3MGvE9u4sFEzdJf",
  "key39": "2TdQCxH9LpSvLQCLdu64mqyufbbhgYbFu5CL9QLhjKcgrBqAdL8RqVtqYj8ewqEpmsXpqQKwrPHQH8PvrDxZpE6a",
  "key40": "3TD24v6ws5jbuFSMFx4bKYBvcZUd71rxyFGHzWjD1aN6FAgFw7PYK8gkqXA2uSgtNt38PJVV7PVqWoeS7chZKkoD",
  "key41": "4QBbqMv7wZLg5Xq4AiNLfJEN4pBsCuY7bHbUWnU1WCZPWo2ZZ135Ys34hFCf3Rt68mbUKaaY3hKkg8E2kSkQEf8B"
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
