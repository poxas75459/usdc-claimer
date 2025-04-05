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
    "4CPL9KVbBzn92zXzgU1MFeWZ9XgAnsy842SaRyeEt96ZcDHw63iX7WeiVAUn1854EHRLQc1qrHFRzTRiNBW76bqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zH35xE5pvQ7jsus6Gw6ihRSiCs3LKeydv7oPArWiAWftWLJ13TquAwzeetQ8vwQ5NaT22pRW5R9ijbxWeGtkfru",
  "key1": "3A8S4rVFgJoZu554JWkoE8ttrrNCRoLYS2MWrUQiyUTfVHhzCA5SrWeBRYEftmmjiweNuv9U45Jz2rsYA9JF5NLQ",
  "key2": "5zkz5JnrDDLgwBw9UN1iZXJQs4frpEtnDcAsLqAVZPdAyJV81TrDaMZrrRxTGo8AdiDxrDQqmWZYBbfQbF1A3J2U",
  "key3": "5SUGLKUQZWmCw4vmmsSxHiD66X7KtbMVhqG6jMiAaGbhsmSBsEGgnB9Y8czhr7xebexxmG739Ra4wRgTiGgKVqC1",
  "key4": "43bGy8W5rwEXwNY8Jvd31qrnqEhLuLK74Y93vkgG17b4Q3nENBPhGrc4sWZXxo5Ugjyv4ca1eEAngRMeQ9XS54fu",
  "key5": "4tYJupEKqLe8tdMAriRQmhhw3Zkx2ABH7aD91874Wprt3s4FerhBS8aYNn3LBSU6kFVFuAc9DKvGzqSARucQqZM2",
  "key6": "35xPL8BMH6U4konk2WTwM5nbWQK2XwgMtd4oL9KRsukV6uX9ioDzUxzB9ZKfapqehqGpYcbCaX5XAJcEy2p6dkcR",
  "key7": "tSa7ypH9XpzwmxQwxZaC3DxF7SjU7MZupmVAdoXB1arqcogwGZT7HF5zJd9BebsYdLUCKvhMctvqk4cW86kWABL",
  "key8": "521MXRanrwm7i3hDFmqTNGDS4Q1cFqhWJqVBF3CCwcazNV2v4CHqCruQNM8QUWkJtBMsRJs7Hf4Tz3FrKfHz4j6Q",
  "key9": "2GkzisGM6sEaa8DsmSfbx1EiX2Uz1cmmNE2ZxYn5UUQ8k5puLggGsxV5TcwSt9UyR6oWVD4oMm2mP9eCyL8MdqLH",
  "key10": "4xGRqgfhGUDn2y4wNHVvwZZveHTELCrmpCtowqH9erUftbKCegsv1vtFeKNkML9ZfLknHBsM1GPtrZ3QTvZjN1rX",
  "key11": "5PzdbB4PZuDVtTYcssZfTzE8vxiwkwaLwsALa4TU3e35tHEec4pQEf7aFiQEqxybGfEfErgtmg31vQYFJ19JdmvT",
  "key12": "38fCtV682sqbvAhRnbBoXPnqUaCp5o89ZYHm69AXpMi67CWwdF4tBJvvaJ6nUAf651VVs3JbkUjAvSyUpkqc15mm",
  "key13": "3tdquP8LRxnfP7ejDEomUjaFCgdc6bxxXsJm2uVymThnU6PpueHNt1CUhJs9Lxj6pCtpCf8w1p6x48ikdTMg8ahg",
  "key14": "5W4teH4mcn5fCvWczWji9s86B2anmKdDuNTUWcVhTsJ7WDgYgSQRBTi59pLfJjjc3tZnM2kiAQQ5LPdMZrZPmSpU",
  "key15": "4rMGcTqCeKqxpWYjCYDJoaHkixGZj5RDK5gojoEQLCtxBrYTRMmCp1BmcYY2bYuy8AEgMRBhNvtT2LD1SAoyjQg9",
  "key16": "47Riv8i31x8o8xX6wirkeDbxZ6BLTzmG5TBJMDRb9VFHpAuMToM2DB9D6ZMJ2nXrcgH2EukbkskdCmmuq4bZmGHg",
  "key17": "5RqZHkYwdiajyoitriUiEBMZdErAv5ED3u6CSyDLLjk2hnEFGijUdsHwgeHvj1ccZkcVXnPHTQ2hzYs352jQ4fns",
  "key18": "tkecN1ezaGTrEx7ZNG7WvTpsSuNfMgDamQPJ9YidyKR2EjCp7JURxFNCu5qp1hWDuAXhTUES62B3MfiJxPNoFUr",
  "key19": "4akxjNgUZNgJDEwTD58eb9BqroDjoGf1jNRNVJ552ZvKkXVhZLo9y9YHRZcBp3xDiTUCPZruFSxFro2aoUUkA4s",
  "key20": "4k7nef5zMtBdxNcB3BNeC4hB9n8M7cMqttEJV647ZPLqgt9mbzCeQnSAiZLhUnJ3QoJf6ik5ymQBoxH4y2BfixSh",
  "key21": "5VcdXvyTg3ihwGUtTPZ3P5A3nwz9s6eDh1u1ET9FMnvKi1PPoWegLusTZ8AfDrUFeW4G3fGD6GHJh8XFhEm3aVT",
  "key22": "4yCLsQyt2xcmBDtbQnvstjjG4JM3eVJLFV1aiwRf2ohypX2Hher5Nqs3w5hbxWE5W7EJVTkcPJn7JaXzZHHPdLnH",
  "key23": "2fKeciZpQdKxHrPJBue7SsaVAEbChLZgEv8o6gySTfDyoJamLxUvtENHArFcAXDtUvjYnNtaFGWmXSL4KHRPT1oj",
  "key24": "2N3DcbrYYbesMN7CwpkJbPc6VsFQtBWDBSMHzBCKGVWPz6zhBTM86zQeEFez44oDHvmhP57ASmsWgm3zocVrX3Vr",
  "key25": "3aM7ArtoB4RcQAn2U9y9YDg3QnvwBooqNZK8g7RaviKt5kX9EjvCkEbft61W9rixZsyQeESZ67rftQLxtW7CPNWc",
  "key26": "3DUR3STcrWmLdMvcefPBvU7Lj9BimK49CtJ8yxff1NUqeFuooq3k3F4pmoXSVrmWzf9tnXYDPtgCeKCxAeSArNYn"
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
